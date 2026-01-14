<? 

// Скрипты
function scripts() {
	$template_dir = get_template_directory_uri();
	$template_path = get_template_directory();

	// Стили
	wp_enqueue_style('vendors', $template_dir . '/assets/css/vendor.css', [], filemtime($template_path . '/assets/css/vendor.css'));

	if (getenv('NODE_ENV') == 'dev'){
		wp_enqueue_style('commons', $template_dir . '/assets/css/common.css', [], filemtime($template_path . '/assets/css/common.css'));
		wp_enqueue_style('components', $template_dir . '/assets/css/components.css', [], filemtime($template_path . '/assets/css/components.css'));
		wp_enqueue_style('blocks', $template_dir . '/assets/css/blocks.css', [], filemtime($template_path . '/assets/css/blocks.css'));
	} else {
		wp_enqueue_style('main-styles', $template_dir . '/assets/css/style.css', [], filemtime($template_path . '/assets/css/style.css'));
		wp_enqueue_style('theme-style', get_stylesheet_uri(), [], filemtime(get_stylesheet_directory() . '/style.css'));
	} 

	// Скрипты
	wp_deregister_script('jquery');
	wp_register_script('jquery', $template_dir . '/assets/js/vendor.js', [], filemtime($template_path . '/assets/js/vendor.js'), true);
	wp_enqueue_script('jquery');
}

add_action('wp_enqueue_scripts', 'scripts');

function footer_styles() {
	$template_dir = get_template_directory_uri();
	$template_path = get_template_directory(); 

	wp_enqueue_script('script', $template_dir . '/assets/js/script.js', ['jquery'], filemtime($template_path . '/assets/js/script.js'), true);
}

add_action('get_footer', 'footer_styles');
