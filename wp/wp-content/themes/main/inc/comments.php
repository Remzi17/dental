<?

function ajax_add_comment() {
	$author_email = sanitize_email($_POST['email']);

	$current_user = wp_get_current_user();
	$is_editor_or_higher = current_user_can('edit_others_posts'); // редактор и выше

	// Проверяем, есть ли ранее одобренные комментарии от этого email
	$has_approved = $author_email
		? get_comments([
			'author_email' => $author_email,
			'status'       => 'approve',
			'number'       => 1
		])  
		: [];

	$parent_id = (int) ($_POST['comment_parent'] ?? 0);

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


// Обёртка контента для SEO
add_filter('comment_text', function ($content) {
	return '<div itemprop="text">' . $content . '</div>';
});

// Добавляем микроразметку автору
add_filter('get_comment_author_link', function ($link) {
	return str_replace('<a', '<a itemprop="author"', $link);
});

// Автозаполнение полей формы (куки)
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

// Удаление комментариев (AJAX)
function handle_comment_delete() {
	$comment_id = intval($_POST['comment_id'] ?? 0);
	$guest_email = sanitize_email($_POST['guest_email'] ?? '');

	error_log("🔹 Попытка удаления комментария id:$comment_id, guest_email:$guest_email");

	if (!$comment_id) {
		wp_send_json_error(['msg' => 'Комментарий не найден']);
	}

	$comment = get_comment($comment_id);
	if (!$comment || $comment->comment_approved === 'trash') {
		wp_send_json_error(['msg' => 'Комментарий уже удалён']);
	}

	$current_user = wp_get_current_user();

	// Проверка прав: админ/редактор или владелец пользователя
	$is_editor_or_higher = is_user_logged_in() && current_user_can('edit_others_posts');

	// Гость может удалить, если email совпадает
	$is_guest_owner = !$current_user->ID && $guest_email && strtolower($guest_email) === strtolower($comment->comment_author_email);

	$is_owner = ($is_editor_or_higher || $is_guest_owner || (is_user_logged_in() && intval($comment->user_id) === get_current_user_id()));

	error_log("🔹 is_admin_or_editor:$is_admin_or_editor, is_guest_owner:$is_guest_owner, is_owner:$is_owner");

	if (!$is_owner) {
		wp_send_json_error(['msg' => 'Нет прав для удаления']);
	}

	$has_children = get_comments([
		'parent' => $comment_id,
		'count' => true
	]);

	if ($has_children > 0) {
		wp_update_comment([
			'comment_ID' => $comment_id,
			'comment_content' => '<em>Комментарий удален</em>',
			'comment_approved' => 'trash'
		]);

		error_log("🔹 Комментарий $comment_id скрыт (есть дети)");

		wp_send_json_success([
			'action' => 'hidden',
			'parent_id' => (int)$comment->comment_parent
		]);
	} else {
		wp_delete_comment($comment_id, false);
		wp_send_json_success(['action' => 'deleted']);
	}
}

add_action('wp_ajax_delete_comment', 'handle_comment_delete');
add_action('wp_ajax_nopriv_delete_comment', 'handle_comment_delete');

// ============================================================
// REGISTER COMMENT META
// ============================================================
add_action('init', function () {
	register_meta('comment', 'comment_likes', [
		'type' => 'integer',
		'single' => true,
		'default' => 0,
		'show_in_rest' => true,
	]);

	register_meta('comment', 'comment_dislikes', [
		'type' => 'integer',
		'single' => true,
		'default' => 0,
		'show_in_rest' => true,
	]);
});

// ============================================================
// CORE TOGGLE LOGIC
// ============================================================
function toggle_comment_reaction($type, $comment_id) {
	$comment = get_comment($comment_id);
	if (!$comment || $comment->comment_approved === 'trash') {
		return ['likes' => $likes ?? 0, 'dislikes' => $dislikes ?? 0, 'active' => false];
	}

	$likes    = (int) get_comment_meta($comment_id, 'comment_likes', true);
	$dislikes = (int) get_comment_meta($comment_id, 'comment_dislikes', true);

	$cookie_name = 'comment_reactions';
	$data = [];

	if (!empty($_COOKIE[$cookie_name])) {
		$tmp = json_decode(stripslashes($_COOKIE[$cookie_name]), true);
		if (is_array($tmp)) $data = $tmp;
	}

	if (!isset($data[$comment_id])) $data[$comment_id] = [];

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
		'likes' => $likes,
		'dislikes' => $dislikes,
		'active' => $active,
	];
}

// ============================================================
// AJAX
// ============================================================
add_action('wp_ajax_like_comment', 'ajax_like_comment');
add_action('wp_ajax_nopriv_like_comment', 'ajax_like_comment');
add_action('wp_ajax_dislike_comment', 'ajax_dislike_comment');
add_action('wp_ajax_nopriv_dislike_comment', 'ajax_dislike_comment');

function ajax_like_comment() {
	check_ajax_referer('like_nonce', 'nonce');
	$comment_id = (int) ($_POST['comment_id'] ?? 0);
	$comment = get_comment($comment_id);

	if (!$comment || $comment->comment_approved === 'trash') {
		wp_send_json_error('Нельзя ставить лайк/дизлайк удалённому комментарию');
	}

	if (!$comment_id) wp_send_json_error('Invalid comment id');
	wp_send_json_success(toggle_comment_reaction('like', $comment_id));
}

function ajax_dislike_comment() {
	check_ajax_referer('like_nonce', 'nonce');
	$comment_id = (int) ($_POST['comment_id'] ?? 0);
	if (!$comment_id) wp_send_json_error('Invalid comment id');
	wp_send_json_success(toggle_comment_reaction('dislike', $comment_id));
}

// ============================================================
// HELPERS
// ============================================================
function get_comment_reactions_cookie() {
	if (empty($_COOKIE['comment_reactions'])) return [];
	$data = json_decode(stripslashes($_COOKIE['comment_reactions']), true);
	return is_array($data) ? $data : [];
}

function is_comment_liked($comment_id) {
	$data = get_comment_reactions_cookie();
	return !empty($data[$comment_id]['like']);
}

function is_comment_disliked($comment_id) {
	$data = get_comment_reactions_cookie();
	return !empty($data[$comment_id]['dislike']);
}

function get_comment_likes_count($comment_id) {
	return (int) get_comment_meta($comment_id, 'comment_likes', true);
}

function get_comment_dislikes_count($comment_id) {
	return (int) get_comment_meta($comment_id, 'comment_dislikes', true);
}

function is_comment_own($comment) {
	if (!is_user_logged_in()) return false;
	$user_id = get_current_user_id();
	if (is_object($comment)) return (int)$comment->user_id === (int)$user_id;
	if (is_numeric($comment)) {
		$c = get_comment($comment);
		return $c && (int)$c->user_id === (int)$user_id;
	}
	return false;
}

function can_delete_comment($comment) {
	if (!is_user_logged_in()) return false;
	if (current_user_can('moderate_comments')) return true;
	if (is_comment_own($comment)) return true;
	return false;
}
