<?
if (function_exists('acf_add_options_page')) {
	acf_add_options_page([
		'page_title' => 'Контакты',
		'menu_title' => 'Контакты',
		'menu_slug'  => 'contacts',
		'capability' => 'edit_posts',
		'redirect'   => false,
		'position'   => 1,
	]);

	acf_add_options_page([
		'page_title' => 'Модули',
		'menu_title' => 'Модули',
		'menu_slug'  => 'modules',
		'capability' => 'edit_posts',
		'redirect'   => false,
		'position'   => 2,
	]);
}
