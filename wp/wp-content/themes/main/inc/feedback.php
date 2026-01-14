<?
	add_action('wp_ajax_send_feedback', 'send_feedback_handler');
	add_action('wp_ajax_nopriv_send_feedback', 'send_feedback_handler');

	function send_feedback_handler() {
		// Проверяем данные
		$name     = sanitize_text_field($_POST['name'] ?? '');
		$phone    = sanitize_text_field($_POST['phone'] ?? '');
		$message  = sanitize_textarea_field($_POST['message'] ?? '');
		$clinic   = intval($_POST['clinic'] ?? 0);
		$services  = intval($_POST['services'] ?? 0);
		$doctor   = intval($_POST['doctor'] ?? 0);
		$rating   = intval($_POST['rating'] ?? 0);

		if(!$name || !$phone || !$message || !$rating){
			wp_send_json(['success' => false, 'error' => 'Не все обязательные поля заполнены']);
		}

		// Создаём черновик
		$post_id = wp_insert_post([ 
			'post_type'   => 'feedback',
			'post_status' => 'draft',
			'post_title'  => $name,
		]);

		if(is_wp_error($post_id)){
			wp_send_json(['success' => false, 'error' => $post_id->get_error_message()]);
		}

		// Устанавливаем ACF поля
		update_field('отзыв', $message, $post_id);
		update_field('телефон', $phone, $post_id);
		update_field('клиника', $clinic, $post_id);
		update_field('услуга', $services, $post_id);
		update_field('врач', $doctor, $post_id);
		update_field('рейтинг', $rating, $post_id);

		wp_send_json(['success' => true, 'post_id' => $post_id]);
	}

?>
