<?

// 
// 
// 
// 
// AJAX: добавление комментария

// Добавление новых комментарий с проверкой прав и автоодобрением
function ajax_add_comment() {
	$post_id        = (int) ($_POST['comment_post_ID'] ?? 0);
	$parent_id      = (int) ($_POST['comment_parent'] ?? 0);
	$guest_id       = sanitize_text_field($_POST['guest_id'] ?? '');
	$author_email   = sanitize_email($_POST['email'] ?? '');
	$comment_text   = wp_kses_post($_POST['comment'] ?? '');
	$current_user   = wp_get_current_user();

	$is_auto_approved = can_comment_action((object) [], 'auto_approve');
	$has_approved     = false;

	if ($guest_id) {
		$approved_comment_ids = get_comments([
			'meta_key'   => 'guest_id',
			'meta_value' => $guest_id,
			'status'     => 'approve',
			'number'     => 1,
			'fields'     => 'ids',
		]);

		$has_approved = !empty($approved_comment_ids);
	}

	if ($parent_id) {
		$parent_comment = get_comment($parent_id);

		if ($parent_comment && $parent_comment->comment_approved === 'trash') {
			wp_send_json_error(['msg' => 'Нельзя отвечать на удалённый комментарий']);
		}
	}

	$author = is_user_logged_in()
		? $current_user->display_name
		: ($guest_id ? 'Гость #' . $guest_id : 'Гость');

	$commentdata = [
		'comment_post_ID'      => $post_id,
		'comment_parent'       => $parent_id,
		'comment_content'      => $comment_text,
		'comment_author'       => $author,
		'comment_author_email' => $author_email,
		'comment_approved'     => ($has_approved || $is_auto_approved) ? 1 : 0,
	];

	if (is_user_logged_in()) {
		$commentdata['user_id'] = get_current_user_id();
	}

	$comment_id = wp_insert_comment($commentdata);

	if (!$comment_id) {
		wp_send_json_error();
	}

	if ($guest_id) {
		add_comment_meta($comment_id, 'guest_id', $guest_id, true);
	}

	wp_send_json_success([
		'comment_id' => $comment_id,
		'approved'   => (bool) $commentdata['comment_approved'],
	]);
}

add_action('wp_ajax_add_comment', 'ajax_add_comment');
add_action('wp_ajax_nopriv_add_comment', 'ajax_add_comment');


// 
// 
// 
// 
// AJAX: удаление комментария

// Удаление комментария или скрытие, если есть ответы
function handle_comment_delete() {
	$comment_id = (int) ($_POST['comment_id'] ?? 0);
	$guest_id   = sanitize_text_field($_POST['guest_id'] ?? '');

	if (!$comment_id) {
		wp_send_json_error(['msg' => 'Комментарий не найден']);
	}

	$comment = get_comment($comment_id);

	if (!$comment || $comment->comment_approved === 'trash') {
		wp_send_json_error(['msg' => 'Комментарий уже удалён']);
	}

	$current_user = wp_get_current_user();

	$is_editor_or_higher = can_comment_action($comment, 'delete');
	$is_guest_owner      = false;

	if (!$current_user->ID && $guest_id) {
		$comment_guest_id = get_comment_meta($comment_id, 'guest_id', true);

		if ($comment_guest_id === $guest_id) {
			$is_guest_owner = true;
		}
	}

	$is_user_owner = (
		is_user_logged_in() &&
		(int) $comment->user_id === get_current_user_id()
	);

	if (!($is_editor_or_higher || $is_guest_owner || $is_user_owner)) {
		wp_send_json_error(['msg' => 'Нет прав для удаления']);
	}

	$children_count = get_comments([
		'parent' => $comment_id,
		'count'  => true,
	]);

	if ($children_count > 0) {
		wp_update_comment([
			'comment_ID'       => $comment_id,
			'comment_content'  => '<em>Комментарий удален</em>',
			'comment_approved' => 'trash',
		]);

		wp_send_json_success([
			'action'    => 'hidden',
			'parent_id' => (int) $comment->comment_parent,
		]);
	}

	wp_delete_comment($comment_id, false);

	wp_send_json_success([
		'action' => 'deleted',
	]);
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
	$meta_keys = [
		'comment_likes',
		'comment_dislikes',
	];

	foreach ($meta_keys as $key) {
		register_meta('comment', $key, [
			'type'         => 'integer',
			'single'       => true,
			'default'      => 0,
			'show_in_rest' => true,
		]);
	}
});

// Переключение лайков или дизлайков комментария
function toggle_comment_reaction($type, $comment_id) {
	$comment = get_comment($comment_id);

	if (!$comment || $comment->comment_approved === 'trash') {
		return [
			'likes'     => 0,
			'dislikes'  => 0,
			'active'    => false,
		];
	}

	$likes    = (int) get_comment_meta($comment_id, 'comment_likes', true);
	$dislikes = (int) get_comment_meta($comment_id, 'comment_dislikes', true);

	$cookie_name = 'comment_reactions';
	$data        = [];

	if (!empty($_COOKIE[$cookie_name])) {
		$decoded = json_decode(stripslashes($_COOKIE[$cookie_name]), true);
		if (is_array($decoded)) {
			$data = $decoded;
		}
	}

	if (!isset($data[$comment_id])) {
		$data[$comment_id] = [];
	}

	$is_like    = ($type === 'like');
	$is_dislike = ($type === 'dislike');

	$liked      = !empty($data[$comment_id]['like']);
	$disliked   = !empty($data[$comment_id]['dislike']);

	$active = false;

	if ($is_like) {
		if ($liked) {
			$likes--;
			unset($data[$comment_id]['like']);
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

	if ($is_dislike) {
		if ($disliked) {
			$dislikes--;
			unset($data[$comment_id]['dislike']);
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
		'likes'     => $likes,
		'dislikes'  => $dislikes,
		'active'    => $active,
	];
}

function ajax_comment_reaction($type) {
	check_ajax_referer('like_nonce', 'nonce');

	$comment_id = (int) ($_POST['comment_id'] ?? 0);

	if (!$comment_id) {
		wp_send_json_error('Invalid comment id');
	}

	wp_send_json_success(
		toggle_comment_reaction($type, $comment_id)
	);
}

function ajax_like_comment() {
	ajax_comment_reaction('like');
}

function ajax_dislike_comment() {
	ajax_comment_reaction('dislike');
}

add_action('wp_ajax_like_comment', 'ajax_like_comment');
add_action('wp_ajax_nopriv_like_comment', 'ajax_like_comment');
add_action('wp_ajax_dislike_comment', 'ajax_dislike_comment');
add_action('wp_ajax_nopriv_dislike_comment', 'ajax_dislike_comment');



//
//
//
//
// Редактирование комментариев

// Массив всех версий комментария
function get_comment_edit_history($comment_id) {
	$history = get_comment_meta($comment_id, 'comment_edit_history', true);
	return is_array($history) ? $history : [];
}

function get_comment_guest_from_cookie() {
	if (empty($_COOKIE['comment_guest'])) {
		return null;
	}

	$guest = json_decode(stripslashes($_COOKIE['comment_guest']), true);

	return is_array($guest) ? $guest : null;
}

// Проверка прав на восстановление и удаление версий комментария
function can_manage_comment_versions($comment) {
	if (can_comment_action($comment, 'versions')) {
		return true;
	}

	$guest = get_comment_guest_from_cookie();

	if (!$guest || empty($guest['id'])) {
		return false;
	}

	$comment_guest_id = get_comment_meta($comment->comment_ID, 'guest_id', true);

	return ($comment_guest_id && $comment_guest_id === $guest['id']);
}

// Проверка прав на редактирование комментария
function can_edit_comment($comment) {
	if (can_comment_action($comment, 'edit')) {
		return true;
	}

	$guest = get_comment_guest_from_cookie();

	if (!$guest) {
		return false;
	}

	if (!empty($guest['id'])) {
		$comment_guest_id = get_comment_meta($comment->comment_ID, 'guest_id', true);

		if ($comment_guest_id && $comment_guest_id === $guest['id']) {
			return true;
		}
	}

	if (
		!empty($guest['email']) &&
		!empty($comment->comment_author_email) &&
		$guest['email'] === $comment->comment_author_email
	) {
		return true;
	}

	return false;
}

// Изменение комментария
function ajax_edit_comment() {
	$comment_id = (int) ($_POST['comment_id'] ?? 0);
	$text       = trim($_POST['text'] ?? '');

	if (!$comment_id || $text === '') {
		wp_send_json_error('Некорректные данные');
	}

	$comment = get_comment($comment_id);

	if (!$comment) {
		wp_send_json_error('Комментарий не найден');
	}

	if (!can_edit_comment($comment)) {
		wp_send_json_error('Нет прав');
	}

	$history = get_comment_edit_history($comment_id);

	$old_text = trim(wp_strip_all_tags($comment->comment_content));
	$new_text = trim(wp_strip_all_tags($text));

	if ($old_text !== $new_text) {

		$history[] = [
			'text'      => $comment->comment_content,
			'date'      => get_current_date_and_time(),
			'editor_id' => get_current_user_id(),
		];

		$history = array_slice($history, -20);

		update_comment_meta($comment_id, 'comment_edit_history', $history);
		update_comment_meta($comment_id, 'comment_edited_at', get_current_date_and_time());
	}

	wp_update_comment([
		'comment_ID'      => $comment_id,
		'comment_content' => wp_kses_post($text),
	]);

	wp_send_json_success([
		'edited_at' => get_current_date_and_time(),
	]);
}

add_action('wp_ajax_edit_comment', 'ajax_edit_comment');
add_action('wp_ajax_nopriv_edit_comment', 'ajax_edit_comment');


//
//
//
//
// История версий

// Получение истории версий комментария 
function ajax_get_comment_history() {
	$comment_id = (int) ($_POST['comment_id'] ?? 0);
	if (!$comment_id) wp_send_json_error('Некорректный ID');

	$comment = get_comment($comment_id);
	if (!$comment) wp_send_json_error('Комментарий не найден');

	$history = get_comment_edit_history($comment_id);

	foreach ($history as &$item) {
		if (!empty($item['editor_id'])) {
			$user = get_userdata($item['editor_id']);
			if ($user) $item['editor_name'] = $user->display_name ?: $user->user_nicename;
		}

		$item['comment_id'] = $comment_id;
	}

	wp_send_json_success([
		'history'     => $history,
		'can_restore' => can_manage_comment_versions($comment)
	]);
}

add_action('wp_ajax_get_comment_history', 'ajax_get_comment_history');
add_action('wp_ajax_nopriv_get_comment_history', 'ajax_get_comment_history');

// Восстановление версии комментария
function ajax_restore_comment_version() {
	$comment_id = (int) ($_POST['comment_id'] ?? 0);
	$index      = (int) ($_POST['version_index'] ?? -1);
	$guest_id   = sanitize_text_field($_POST['guest_id'] ?? '');

	$comment = get_comment($comment_id);
	if (!$comment) wp_send_json_error('Комментарий не найден');

	$is_editor_or_higher = can_comment_action($comment, 'restore');
	$is_user_owner       = is_user_logged_in() && (int) $comment->user_id === get_current_user_id();
	$is_guest_owner      = !$is_editor_or_higher && $guest_id && get_comment_meta($comment_id, 'guest_id', true) === $guest_id;

	if (!$is_editor_or_higher && !$is_guest_owner && !$is_user_owner) {
		wp_send_json_error('Нет прав');
	}

	$history = get_comment_edit_history($comment_id);

	if (!isset($history[$index])) wp_send_json_error('Версия не найдена');

	$current_text = $comment->comment_content;

	wp_update_comment([
		'comment_ID'      => $comment_id,
		'comment_content' => wp_kses_post($history[$index]['text'])
	]);

	$history[] = [
		'text'      => $current_text,
		'date'      => get_current_date_and_time(),
		'editor_id' => get_current_user_id() ?: 0
	];

	$history = array_slice($history, -10);

	update_comment_meta($comment_id, 'comment_edit_history', $history);
	update_comment_meta($comment_id, 'comment_edited_at', get_current_date_and_time());

	wp_send_json_success([
		'edited_at' => get_current_date_and_time()
	]);
}

add_action('wp_ajax_restore_comment_version', 'ajax_restore_comment_version');
add_action('wp_ajax_nopriv_restore_comment_version', 'ajax_restore_comment_version');

// Удаление версии комментария
function ajax_delete_comment_version() {
	$comment_id = (int) ($_POST['comment_id'] ?? 0);
	$index      = (int) ($_POST['version_index'] ?? -1);

	$comment = get_comment($comment_id);
	if (!$comment) wp_send_json_error('Комментарий не найден');
	if (!can_manage_comment_versions($comment)) wp_send_json_error('Нет прав');

	$history = get_comment_edit_history($comment_id);

	if (!isset($history[$index])) wp_send_json_error('Версия не найдена');

	unset($history[$index]);
	update_comment_meta($comment_id, 'comment_edit_history', array_values($history));

	wp_send_json_success();
}

add_action('wp_ajax_delete_comment_version', 'ajax_delete_comment_version');


// метабокс История версий в админке
add_action('add_meta_boxes_comment', function($comment) {
	add_meta_box(
		'comment_edit_history',
		'История версий',
		'render_comment_edit_history_meta_box',
		'comment',
		'normal',
		'high'
	);
});

// Рендер версий комментария
function render_comment_edit_history_meta_box($comment) {
	$history = get_comment_meta($comment->comment_ID, 'comment_edit_history', true);

	if (!is_array($history)) {
		$history = [];
	}

	if (!empty($history)) {
		echo '<table style="width:100%; border-collapse: collapse;">';
		echo '<thead>';
		echo '<tr>';
		echo '<th style="border:1px solid #ddd; padding: 8px">Редактор</th>';
		echo '<th style="border:1px solid #ddd; padding: 8px">Дата</th>';
		echo '<th style="border:1px solid #ddd; padding: 8px">Комментарий</th>';
		echo '<th style="border:1px solid #ddd; padding: 8px">Действие</th>';
		echo '</tr>';
		echo '</thead>';
		echo '<tbody>';

		if (!is_array($history)) {
			$history = [];
		}

		foreach ($history as $i => $item) {
			$user = !empty($item['editor_id']) ? get_userdata($item['editor_id']) : null;
			$editor_name = $user ? ($user->display_name ?: $user->user_nicename) : 'Гость';

			echo '<tr>';
			echo '<td style="border:1px solid #ddd; padding: 8px">' . esc_html($editor_name) . '</td>';
			echo '<td style="border:1px solid #ddd; padding: 8px">' . esc_html($item['date']) . '</td>';
			echo '<td style="border:1px solid #ddd; padding: 8px">' . wp_kses_post($item['text']) . '</td>';
			echo '<td style="border:1px solid #ddd; padding: 8px;">';
			echo '<button class="button button-primary restore-version-admin" type="button" data-comment-id="' . esc_attr($comment->comment_ID) . '" data-version-index="' . esc_attr($i) . '" style="margin: 4px;">Восстановить</button>';
			echo '<button class="button delete-version-admin" type="button" data-comment-id="' . esc_attr($comment->comment_ID) . '" data-version-index="' . esc_attr($i) . '" style="margin: 4px;">Удалить</button>';
			echo '</td>';
			echo '</tr>';
		}

		echo '</tbody>';
		echo '</table>';

		?>
			<script>
				document.addEventListener('click', async (e) => {
					const restoreBtn = e.target.closest('.restore-version-admin');
					const deleteBtn = e.target.closest('.delete-version-admin');

					if (!restoreBtn && !deleteBtn) return;

					const commentId = (restoreBtn || deleteBtn).dataset.commentId;
					const versionIndex = (restoreBtn || deleteBtn).dataset.versionIndex;

					if (restoreBtn) {
						try {
							const res = await fetch(ajaxurl, {
								method: 'POST',
								headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
								body: new URLSearchParams({
									action: 'restore_comment_version',
									comment_id: commentId,
									version_index: versionIndex
								})
							});

							const json = await res.json();

							if (json.success) {
								alert('Версия успешно восстановлена!');
								location.reload();
							} else {
								alert('Ошибка при восстановлении: ' + json.data);
							}
						} catch (err) {
							console.error(err);
							alert('Ошибка при восстановлении версии');
						}
					}

					if (deleteBtn) {
						if (!confirm('Вы уверены, что хотите удалить эту версию?')) return;

						const row = deleteBtn.closest('tr');

						try {
							const res = await fetch(ajaxurl, {
								method: 'POST',
								headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
								body: new URLSearchParams({
									action: 'delete_comment_version',
									comment_id: commentId,
									version_index: versionIndex
								})
							});

							const json = await res.json();

							console.log(json);

							if (json.success) {
								row.remove();
							} else {
								alert('Ошибка при удалении: ' + json.data);
							}
						} catch (err) {
							console.error(err);
							alert('Ошибка при удалении версии');
						}
					}
				});
			</script>
		<?
	} else {
		echo '<p>История версий отсутствует</p>';
	}
}


// 
// 
// 
//  
// Жалобы

// Добавление
function add_comment_report() {
	$comment_id = (int) ($_POST['comment_id'] ?? 0);
	$text       = trim($_POST['text'] ?? '');

	if (!$comment_id || !$text) {
		wp_send_json_error('invalid_data');
	}

	$comment = get_comment($comment_id);
	if (!$comment) wp_send_json_error('comment_not_found');

	$current_user_id = get_current_user_id();
	$can_report      = can_comment_action($comment, 'report');

	if (!$can_report) {
		$is_own_user_comment = $current_user_id && (int)$comment->user_id === $current_user_id;
		$is_own_guest_comment = false;

		if (!$comment->user_id && !empty($_COOKIE['comment_guest'])) {
			$guest = json_decode(stripslashes($_COOKIE['comment_guest']), true);
			$comment_guest_id = get_comment_meta($comment_id, 'guest_id', true);

			$is_own_guest_comment = !empty($guest['id']) && $comment_guest_id && $guest['id'] === $comment_guest_id;
		}

		if ($is_own_user_comment || $is_own_guest_comment) {
			wp_send_json_error('cannot_report_own_comment');
		}
	}

	$reports = get_comment_meta($comment_id, '_comment_reports', true);
	if (!is_array($reports)) $reports = [];

	$current_ip    = $_SERVER['REMOTE_ADDR'] ?? '';
	$guest_email   = '';

	if (!empty($_COOKIE['comment_guest'])) {
		$guest = json_decode(stripslashes($_COOKIE['comment_guest']), true);
		if (is_array($guest) && !empty($guest['email'])) {
			$guest_email = $guest['email'];
		}
	}

	foreach ($reports as $r) {
		$already_reported = 
			(!empty($r['ip']) && $r['ip'] === $current_ip) ||
			($current_user_id && !empty($r['user_id']) && (int)$r['user_id'] === $current_user_id) ||
			($guest_email && !empty($r['guest_email']) && $r['guest_email'] === $guest_email);

		if ($already_reported) wp_send_json_error('already_reported');
	}

	$reports[] = [
		'text'        => wp_kses_post($text),
		'date'        => get_current_date_and_time(),
		'user_id'     => $current_user_id,
		'guest_email' => $guest_email,
		'ip'          => $current_ip
	];

	update_comment_meta($comment_id, '_comment_reports', $reports);

	wp_send_json_success();
}

add_action('wp_ajax_add_comment_report', 'add_comment_report');
add_action('wp_ajax_nopriv_add_comment_report', 'add_comment_report');


// метабокс Жалобы в админке
add_action('add_meta_boxes_comment', function () {
	add_meta_box(
		'comment_reports',
		'Жалобы',
		'render_comment_reports_meta_box',
		'comment',
		'normal'
	);
});

// Рендер жалоб в админке 
function render_comment_reports_meta_box($comment) {
	$reports = get_comment_meta($comment->comment_ID, '_comment_reports', true);

	if (empty($reports)) {
		echo '<p>Жалоб нет</p>';
		return;
	}

	echo '<table style="width:100%; border-collapse: collapse;">';
	echo '<thead>';
	echo '<tr>';
	echo '<th style="border:1px solid #ddd; padding: 8px">Отправитель</th>';
	echo '<th style="border:1px solid #ddd; padding: 8px">IP</th>';
	echo '<th style="border:1px solid #ddd; padding: 8px">Дата</th>';
	echo '<th style="border:1px solid #ddd; padding: 8px">Жалоба</th>';
	echo '</tr>';
	echo '</thead>';
	echo '<tbody>';

	foreach ($reports as $r) {
		echo '<tr>';
		echo '<td style="width: 20%; border:1px solid #ddd; padding: 8px">' . ($r['user_id'] ? 'Пользователь #' . $r['user_id'] : esc_html($r['guest_email'])) . '</td>';
		echo '<td style="width: 10%; border:1px solid #ddd; padding: 8px">' . esc_html($r['ip']) . '</td>';
		echo '<td style="width: 15%; border:1px solid #ddd; padding: 8px">' . esc_html($r['date']) . '</td>';
		echo '<td style="border:1px solid #ddd; padding: 8px">' . esc_html($r['text']) . '</td>';
		echo '</tr>';
	}

	echo '</tbody></table>';
}

add_filter('manage_edit-comments_columns', function ($cols) {
	$new = [];
	foreach ($cols as $key => $label) {
		$new[$key] = $label;

		if ($key === 'comment') {
			$new['reports'] = 'Жалобы';
		}
	}

	return $new;
});

add_action('manage_comments_custom_column', function ($column, $comment_id) {
	if ($column !== 'reports') return;

	$reports = get_comment_meta($comment_id, '_comment_reports', true);
	if (!empty($reports)) {
		echo "<a href=\"/wp-admin/comment.php?action=editcomment&c=$comment_id#comment_reports\"><strong style=\"color:#d63638;\">Жалобы - " . count($reports) . "</strong></a>";
	}
}, 10, 2);


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

// Проверка роли
function can_comment_action($comment, $action) {
	if (!in_array($action, ['auto_approve'], true)) {
		if (empty($comment) || !isset($comment->user_id)) {
			return false;
		}
	}

	$is_logged_in = is_user_logged_in();
	$current_user_id = get_current_user_id();
	$comment_user_id = isset($comment->user_id) ? (int) $comment->user_id : 0;
	$is_own = $is_logged_in && $comment_user_id && $current_user_id === $comment_user_id;
	$can_manage_any = $is_logged_in && (
		current_user_can('moderate_comments') ||
		current_user_can('edit_others_posts')
	);

	if ($can_manage_any) return true;
	
	switch ($action) {
		case 'auto_approve':
			return false;

		case 'edit':
		case 'delete':
		case 'restore':
		case 'versions':
			return $is_own;

		case 'reply':
		case 'report':
			return !$is_own;

		default:
			return false;
	}
}

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
// SEO и микроразметка комментариев

add_filter('comment_text', function ($content) {
	return '<div itemprop="text">' . $content . '</div>';
});

// Добавление микроразметки автору комментария
add_filter('get_comment_author_link', function ($link) {
	return str_replace('<a', '<a itemprop="author"', $link);
});

