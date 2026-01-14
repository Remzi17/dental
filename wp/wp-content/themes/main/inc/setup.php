<? 
// Меню
add_action('after_setup_theme', function() {
	register_nav_menus([
		'header' => 'Шапка'	
	]);
});

add_action('after_setup_theme', function() {
	add_image_size('gallery-desktop', 385, 216, true);
	add_image_size('gallery-mobile', 310, 175, true);
	add_image_size('doctor-small', 68, 68, true); 
	add_image_size('certificate', 300, 424, true); 
});  

// Миниатюры
add_theme_support('post-thumbnails', array('post', 'services', 'doctor'));


// Версия файла
function spriteVersion() {
	echo filemtime(get_template_directory() . '/assets/img/sprite.svg');
}

