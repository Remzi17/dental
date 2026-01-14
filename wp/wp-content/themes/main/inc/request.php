<?

register_post_type('request', array(
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
	'public' => true,   
	'menu_position' => 10, 
	'menu_icon' => 'dashicons-phone',
	'supports' => array('title', 'editor')
));

// Добавление заявки в админку
add_action('wp_ajax_submit_request', 'handle_request_submission');
add_action('wp_ajax_nopriv_submit_request', 'handle_request_submission');

function handle_request_submission() {
	ob_start();
   
	error_reporting(E_ALL);
	ini_set('display_errors', 1);

	$debug_info = [
		'post_data' => $_POST,
		'files_data' => $_FILES,
		'processing_steps' => []
	];

	$name = sanitize_text_field($_POST['name']);
	$phone = sanitize_text_field($_POST['phone']);
	$title = $name ? "$name - $phone" : $phone;
	$description = "";

	$debug_info['processing_steps'][] = 'Начата обработка формы';

	foreach ($_POST as $key => $value) {
		$excluded_fields = ['name', 'phone', 'action', '_wpnonce', 'file'];
		if (!in_array($key, $excluded_fields)) {

			if($value != ''){
				$description .= "<h2>" . sanitize_text_field($value) . "</h2>" . "\n";
			}
		}
	}

	$debug_info['processing_steps'][] = 'Текстовые поля обработаны';

	$uploaded_files = [];

	if (!empty($_FILES['files']) && $_FILES['files']['error'][0] != UPLOAD_ERR_NO_FILE) {
		$debug_info['processing_steps'][] = 'Обнаружены файлы для загрузки';
    
		$file_errors = [];
		foreach ($_FILES['files']['error'] as $error) {
			if ($error != UPLOAD_ERR_NO_FILE) {
					$file_errors[] = $error;
			}
		}

		if (!empty($file_errors)) {
			$debug_info['file_errors'] = $file_errors;
			$uploaded_files = handle_file_uploads();
      
			if (!empty($uploaded_files)) {
				$debug_info['processing_steps'][] = 'Файлы успешно загружены';
				$debug_info['uploaded_files'] = $uploaded_files;
        
				$description .= "<h2>Прикрепленные файлы: <h2> \n"; 
				foreach ($uploaded_files as $file) { 
					$description .= "<img src='" . $file['url'] . "' width='300' alt=''>\n";
				} 
			} else {
				$debug_info['processing_steps'][] = 'Ошибка при загрузке файлов';
			}
		}
	} else {
		$debug_info['processing_steps'][] = 'Файлы не обнаружены или не загружены';
	}

	$post_data = [
		'post_title'    => $title,
		'post_content'  => $description,
		'post_status'   => 'draft',
		'post_type'     => 'request'
	];

	$debug_info['post_data_to_insert'] = $post_data;

	$post_id = wp_insert_post($post_data);
	$debug_info['post_id'] = $post_id;

	$debug_info['server_logs'] = ob_get_clean();

	if ($post_id) {
		$response = [
			'success' => true,
			'message' => 'Заявка успешно создана!',
			'debug_info' => $debug_info 
		];

		wp_send_json($response);
	} else {
		$response = [
			'success' => false,
			'message' => 'Ошибка при создании заявки.',
			'debug_info' => $debug_info
		];

		wp_send_json($response);
	}
}  

function handle_file_uploads() {
	$upload_dir = wp_upload_dir();
	$custom_dir = $upload_dir['basedir'] . '/request_files';
  
	if (!file_exists($custom_dir)) {
		wp_mkdir_p($custom_dir);
	}
  
	if (!file_exists($custom_dir . '/.htaccess')) {
		file_put_contents($custom_dir . '/.htaccess', "Options -Indexes\nDeny from all");
	}
  
	$uploaded_files = [];
	$max_size = 5 * 1024 * 1024;
  
	$allowed_types = [
		'pdf'  => 'application/pdf',
		'doc'  => 'application/msword',
		'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
		'jpg'  => 'image/jpeg',
		'jpeg' => 'image/jpeg',
		'png'  => 'image/png',
		'gif'  => 'image/gif',
		'xls'  => 'application/vnd.ms-excel',
		'xlsx' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
		'txt'  => 'text/plain'
	];
  
	foreach ($_FILES['files']['name'] as $key => $value) {
		if ($_FILES['files']['error'][$key] !== UPLOAD_ERR_OK) {
			continue;
		}
    
		if ($_FILES['files']['size'][$key] > $max_size) {
			continue;
		}
    
		$file_name = sanitize_file_name($_FILES['files']['name'][$key]);
		$tmp_name = $_FILES['files']['tmp_name'][$key];
		$file_ext = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));
    
		if (!array_key_exists($file_ext, $allowed_types)) {
			continue;
		}
    
		$finfo = finfo_open(FILEINFO_MIME_TYPE);
		$mime = finfo_file($finfo, $tmp_name);
		finfo_close($finfo);
    
		if ($mime !== $allowed_types[$file_ext]) {
			continue;
		}
     
		$unique_name = wp_unique_filename($custom_dir, $file_name);
		$file_path = $custom_dir . '/' . $unique_name;
    
		if (move_uploaded_file($tmp_name, $file_path)) {
			$file_url = $upload_dir['baseurl'] . '/request_files/' . $unique_name;
			$uploaded_files[] = [
				'name' => $file_name,
				'url' => $file_url,
				'path' => $file_path
			];
		}
	}
  
	return $uploaded_files;
}
