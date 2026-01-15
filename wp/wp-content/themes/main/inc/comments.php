<?

// 
// 
// 
// 
// AJAX: добавление комментария

// Добавление новых комментарий с проверкой прав и автоодобрением
function ajax_add_comment() {
	$author_email = sanitize_email($_POST['email']);
	$current_user = wp_get_current_user();
		
	// редактор и выше
	$is_editor_or_higher = current_user_can('edit_others_posts');

	// Проверка есть ли ранее одобренные комментарии от этого email
	$has_approved = $author_email
		? get_comments([
			'author_email' => $author_email,
			'status'       => 'approve',
			'number'       => 1
		])
		: [];

	$parent_id = (int) ($_POST['comment_parent'] ?? 0);

	// Запрещаем ответы на удалённые комментарии
	if ($parent_id) {
		$parent_comment = get_comment($parent_id);
		if ($parent_comment && $parent_comment->comment_approved === 'trash') {
			wp_send_json_error(['msg' => 'Нельзя отвечать на удалённый комментарий']);
		}
	}

	$commentdata = [
		'comment_post_ID'      => (int) $_POST['comment_post_ID'],
		'comment_parent'       => $parent_id,
		'comment_content'      => wp_kses_post($_POST['comment']),
		'comment_author'       => sanitize_text_field($_POST['author']),
		'comment_author_email' => $author_email,
		'comment_approved'     => ($has_approved || $is_editor_or_higher) ? 1 : 0,
	];

	if (is_user_logged_in()) {
		$commentdata['user_id'] = get_current_user_id();
	}

	$comment_id = wp_insert_comment($commentdata);

	if (!$comment_id) {
		wp_send_json_error();
	}

	wp_send_json_success([
		'comment_id' => $comment_id,
		'approved'   => (bool) $commentdata['comment_approved']
	]);
}

add_action('wp_ajax_add_comment', 'ajax_add_comment');
add_action('wp_ajax_nopriv_add_comment', 'ajax_add_comment');


// 
// 
// 
// 
// SEO и микроразметка комментариев

add_filter('comment_text', function ($content) {
	return '<div itemprop="text">' . $content . '</div>';
});

// Добавляем микроразметку автору комментария
add_filter('get_comment_author_link', function ($link) {
	return str_replace('<a', '<a itemprop="author"', $link);
});


// 
// 
// 
// 
// Форма комментариев

// Автозаполнение полей формы из cookies
add_filter('comment_form_default_fields', function ($fields) {

	if (!empty($_COOKIE['comment_author'])) {
		$fields['author'] = str_replace(
			'<input',
			'<input value="' . esc_attr($_COOKIE['comment_author']) . '"',
			$fields['author']
		);
	}

	if (!empty($_COOKIE['comment_email'])) {
		$fields['email'] = str_replace(
			'<input',
			'<input value="' . esc_attr($_COOKIE['comment_email']) . '"',
			$fields['email']
		);
	}

	return $fields;
});


// 
// 
// 
// 
// AJAX: удаление комментария

// Удаление комментария или скрытие, если есть ответы
function handle_comment_delete() {

	$comment_id   = intval($_POST['comment_id'] ?? 0);
	$guest_email  = sanitize_email($_POST['guest_email'] ?? '');

	error_log("🔹 Попытка удаления комментария id:$comment_id, guest_email:$guest_email");

	if (!$comment_id) {
		wp_send_json_error(['msg' => 'Комментарий не найден']);
	}

	$comment = get_comment($comment_id);
	if (!$comment || $comment->comment_approved === 'trash') {
		wp_send_json_error(['msg' => 'Комментарий уже удалён']);
	}

	$current_user = wp_get_current_user();

	// админ / редактор
	$is_editor_or_higher = is_user_logged_in() && current_user_can('edit_others_posts');

	// гость — если совпадает email
	$is_guest_owner = !$current_user->ID
		&& $guest_email
		&& strtolower($guest_email) === strtolower($comment->comment_author_email);

	$is_owner = (
		$is_editor_or_higher ||
		$is_guest_owner ||
		(is_user_logged_in() && (int)$comment->user_id === get_current_user_id())
	);

	if (!$is_owner) {
		wp_send_json_error(['msg' => 'Нет прав для удаления']);
	}

	$has_children = get_comments([
		'parent' => $comment_id,
		'count'  => true
	]);

	if ($has_children > 0) {
		wp_update_comment([
			'comment_ID'       => $comment_id,
			'comment_content'  => '<em>Комментарий удален</em>',
			'comment_approved' => 'trash'
		]);

		wp_send_json_success([
			'action'    => 'hidden',
			'parent_id' => (int)$comment->comment_parent
		]);
	}

	wp_delete_comment($comment_id, false);
	wp_send_json_success(['action' => 'deleted']);
}

add_action('wp_ajax_delete_comment', 'handle_comment_delete');
add_action('wp_ajax_nopriv_delete_comment', 'handle_comment_delete');


// 
// 
// 
// 
// Реакции (лайки / дизлайки)

// Регистрация мета-поля лайков и дизлайков
add_action('init', function () {

	register_meta('comment', 'comment_likes', [
		'type'         => 'integer',
		'single'       => true,
		'default'      => 0,
		'show_in_rest' => true,
	]);

	register_meta('comment', 'comment_dislikes', [
		'type'         => 'integer',
		'single'       => true,
		'default'      => 0,
		'show_in_rest' => true,
	]);
});

// Переключение лайков или дизлайков комментария
function toggle_comment_reaction($type, $comment_id) {
	$comment = get_comment($comment_id);

	if (!$comment || $comment->comment_approved === 'trash') {
		return ['likes' => 0, 'dislikes' => 0, 'active' => false];
	}

	$likes    = (int) get_comment_meta($comment_id, 'comment_likes', true);
	$dislikes = (int) get_comment_meta($comment_id, 'comment_dislikes', true);

	$cookie_name = 'comment_reactions';
	$data = [];

	if (!empty($_COOKIE[$cookie_name])) {
		$tmp = json_decode(stripslashes($_COOKIE[$cookie_name]), true);
		if (is_array($tmp)) $data = $tmp;
	}

	if (!isset($data[$comment_id])) {
		$data[$comment_id] = [];
	}

	$liked    = !empty($data[$comment_id]['like']);
	$disliked = !empty($data[$comment_id]['dislike']);

	if ($type === 'like') {

		if ($liked) {
			$likes--;
			unset($data[$comment_id]['like']);
			$active = false;
		} else {
			$likes++;
			$data[$comment_id]['like'] = true;
			$active = true;
			if ($disliked) {
				$dislikes--;
				unset($data[$comment_id]['dislike']);
			}
		}
	}

	if ($type === 'dislike') {
		if ($disliked) {
			$dislikes--;
			unset($data[$comment_id]['dislike']);
			$active = false;
		} else {
			$dislikes++;
			$data[$comment_id]['dislike'] = true;
			$active = true;
			if ($liked) {
				$likes--;
				unset($data[$comment_id]['like']);
			}
		}
	}

	$likes    = max(0, $likes);
	$dislikes = max(0, $dislikes);

	update_comment_meta($comment_id, 'comment_likes', $likes);
	update_comment_meta($comment_id, 'comment_dislikes', $dislikes);

	setcookie(
		$cookie_name,
		json_encode($data),
		time() + YEAR_IN_SECONDS * 10,
		'/',
		'',
		false,
		true
	);

	return [
		'likes'    => $likes,
		'dislikes'=> $dislikes,
		'active'  => $active,
	];
}

// AJAX: лайк комментария
function ajax_like_comment() {
	check_ajax_referer('like_nonce', 'nonce');

	$comment_id = (int) ($_POST['comment_id'] ?? 0);
	if (!$comment_id) wp_send_json_error('Invalid comment id');

	wp_send_json_success(toggle_comment_reaction('like', $comment_id));
}

// AJAX: дизлайк комментария
function ajax_dislike_comment() {
	check_ajax_referer('like_nonce', 'nonce');

	$comment_id = (int) ($_POST['comment_id'] ?? 0);
	if (!$comment_id) wp_send_json_error('Invalid comment id');

	wp_send_json_success(toggle_comment_reaction('dislike', $comment_id));
}

add_action('wp_ajax_like_comment', 'ajax_like_comment');
add_action('wp_ajax_nopriv_like_comment', 'ajax_like_comment');
add_action('wp_ajax_dislike_comment', 'ajax_dislike_comment');
add_action('wp_ajax_nopriv_dislike_comment', 'ajax_dislike_comment');


// 
// 
// 
// 
// Вспомогательные функции

// Реакция пользователя из cookies
function get_comment_reactions_cookie() {
	if (empty($_COOKIE['comment_reactions'])) return [];
	$data = json_decode(stripslashes($_COOKIE['comment_reactions']), true);
	return is_array($data) ? $data : [];
}

// Количество лайков комментария
function get_comment_likes_count($comment_id) {
	return (int) get_comment_meta($comment_id, 'comment_likes', true);
}

// Количество дизлайков комментария
function get_comment_dislikes_count($comment_id) {
	return (int) get_comment_meta($comment_id, 'comment_dislikes', true);
}

// Проверка принадлежит ли комментарий текущему пользователю
function is_comment_own($comment) {
	if (!is_user_logged_in()) return false;

	$user_id = get_current_user_id();

	if (is_object($comment)) {
		return (int)$comment->user_id === (int)$user_id;
	}

	if (is_numeric($comment)) {
		$c = get_comment($comment);
		return $c && (int)$c->user_id === (int)$user_id;
	}

	return false;
}

// Проверка может ли пользователь удалить комментарий
function can_delete_comment($comment) {
	if (!is_user_logged_in()) return false;
	if (current_user_can('moderate_comments')) return true;
	if (is_comment_own($comment)) return true;

	return false;
}
