<?

/**
 * CPT: Заявки (только админка)
 */

register_post_type('request', [
	'labels' => array(
		'name' => 'Заявки',
		'singular_name' => 'Заявки',
		'add_new' => 'Добавить заявку',
		'add_new_item' => 'Добавить новую заявку',
		'edit_item' => 'Редактировать заявку',
		'new_item' => 'Новая заявка',
		'view_item' => 'Просмотреть заявку',
		'search_items' => 'Найти заявку',
		'not_found' =>  'Заявок не найдено',
		'not_found_in_trash' => 'В корзине заявок не найдено',
		'parent_item_colon' => '',
		'menu_name' => 'Заявки'
	), 
	'public' => false,
	'show_ui' => true,
	'show_in_menu' => true,
	'menu_position' => 10,
	'menu_icon' => 'dashicons-phone',
	'supports' => ['title'],
	'exclude_from_search' => true
]);

add_action('wp_ajax_submit_request', 'handle_request_submission');
add_action('wp_ajax_nopriv_submit_request', 'handle_request_submission');

function handle_request_submission() {
	check_ajax_referer('submit_request', 'nonce');

	$name  = sanitize_text_field($_POST['name'] ?? '');
	$phone = sanitize_text_field($_POST['phone'] ?? '');

	$title = trim($name . ' ' . $phone);

	$post_id = wp_insert_post([
		'post_type' => 'request',
		'post_status' => 'publish',
		'post_title' => $title ?: 'Заявка'
	]);

	if (!$post_id) {
		wp_send_json_error();
	}

	foreach ($_POST as $key => $value) {
		if (in_array($key, ['action', 'nonce'])) continue;
		if ($value === '') continue;

		update_post_meta($post_id, $key, sanitize_text_field($value));
	}

	if (!empty($_FILES['files'])) {
		require_once ABSPATH . 'wp-admin/includes/file.php';
		require_once ABSPATH . 'wp-admin/includes/media.php';
		require_once ABSPATH . 'wp-admin/includes/image.php';

		foreach ($_FILES['files']['name'] as $i => $name) {
			if ($_FILES['files']['error'][$i] !== UPLOAD_ERR_OK) continue;

			$file = [
				'name' => $_FILES['files']['name'][$i],
				'type' => $_FILES['files']['type'][$i],
				'tmp_name' => $_FILES['files']['tmp_name'][$i],
				'error' => 0,
				'size' => $_FILES['files']['size'][$i]
			];

			$_FILES = ['upload_file' => $file];
			media_handle_upload('upload_file', $post_id);
		}
	}

	wp_send_json_success();
}


/**
 * Nonce для фронта
 */

add_action('wp_footer', function () {
	?>
	<script>
		window.requestNonce = '<?= wp_create_nonce('submit_request') ?>'
	</script>
	<?
});
