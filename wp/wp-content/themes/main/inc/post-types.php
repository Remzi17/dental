<? 
	// Услуги
	register_post_type('services', array(
		'labels' => array(
			'name' => 'Услуги',
			'singular_name' => 'Услуга',
			'add_new' => 'Добавить услугу',
			'add_new_item' => 'Добавить новую услугу',
			'edit_item' => 'Редактировать услуги',
			'new_item' => 'Новая услуга',
			'view_item' => 'Просмотреть услугу',
			'search_items' => 'Найти услугу',
			'not_found' =>  'Услуг не найдено',
			'not_found_in_trash' => 'В корзине услуг не найдено',
			'parent_item_colon' => '',
			'menu_name' => 'Услуги'
		), 
		'public' => true,
		'menu_position' => 5,
		'menu_icon' => 'dashicons-hammer',
		'supports' => array('title', 'editor', 'thumbnail', 'custom-field'),
		'taxonomies' => array('services_category')
	));

	register_taxonomy('services_category', 'services', array(
		'labels' => array(
			'name'              => 'Категории',
			'singular_name'     => 'Категория',
			'search_items'      => 'Поиск категории',
			'all_items'         => 'Все категории',
			'edit_item'         => 'Редактировать категорию',
			'update_item'       => 'Обновить категорию',
			'add_new_item'      => 'Добавить новую категорию',
			'new_item_name'     => 'Название новой категории',
			'menu_name'         => 'Категории',
			'most_used'         => 'Частые',
		),
		'hierarchical' => true,
		'sort' => true,
		'args' => array('orderby' => 'term_order'),
		'show_admin_column' => true
	));



	// Врачи
	register_post_type('doctor', array(
		'labels' => array(
			'name' => 'Врачи',
			'singular_name' => 'Врач',
			'add_new' => 'Добавить врача',
			'add_new_item' => 'Добавить нового врача',
			'edit_item' => 'Редактировать врача',
			'new_item' => 'Новый врач',
			'view_item' => 'Просмотреть врача',
			'search_items' => 'Найти врача',
			'not_found' =>  'Врачей не найдено',
			'not_found_in_trash' => 'В корзине врачей не найдено',
			'parent_item_colon' => '',
			'menu_name' => 'Врачи',
			'featured_image'        => 'Фото врача',
			'set_featured_image'    => 'Загрузить фото',
			'remove_featured_image' => 'Удалить фото',
			'use_featured_image'    => 'Использовать как фото',
		), 
		'public' => true,
		'menu_position' => 5,
		'menu_icon' => 'dashicons-groups',
		'supports' => array('title', 'editor', 'thumbnail', 'custom-field'),
		// 'taxonomies' => array('services_category')
	));

	register_taxonomy('doctor_skills', 'doctor', array(
		'labels' => array(
			'name'              => 'Навыки',
			'singular_name'     => 'Навык',
			'search_items'      => 'Поиск навыка',
			'all_items'         => 'Все навыки',
			'edit_item'         => 'Редактировать навык',
			'update_item'       => 'Обновить навык',
			'add_new_item'      => 'Добавить новый навык',
			'new_item_name'     => 'Название нового навыка',
			'menu_name'         => 'Навыки',
			'most_used'         => 'Частые',
		),
		'hierarchical' => true,
		'sort' => true,
		'args' => array('orderby' => 'term_order'),
		'show_admin_column' => false
	));


	// Отзыв
	register_post_type('feedback', array(
		'labels' => array(
			'name' => 'Отзывы',
			'singular_name' => 'Отзыв',
			'add_new' => 'Добавить отзыв',
			'add_new_item' => 'Добавить новый отзыв',
			'edit_item' => 'Редактировать отзыв',
			'new_item' => 'Новый отзыв',
			'view_item' => 'Просмотреть отзыв',
			'search_items' => 'Найти отзыв',
			'not_found' =>  'Отзывов не найдено',
			'not_found_in_trash' => 'В корзине отзывов не найдено',
			'parent_item_colon' => '',
			'menu_name' => 'Отзывы',
		), 
		'public' => true,
		'menu_position' => 5,
		'menu_icon' => 'dashicons-format-status',
		'supports' => array('title', 'editor', 'custom-field'),
		// 'taxonomies' => array('services_category')
	));



	// Клиники
	register_post_type('clinic', array(
		'labels' => array(
			'name' => 'Клиники',
			'singular_name' => 'Клиника',
			'add_new' => 'Добавить клинику',
			'add_new_item' => 'Добавить новую клинику',
			'edit_item' => 'Редактировать клинику',
			'new_item' => 'Новая клиника',
			'view_item' => 'Просмотреть клинику',
			'search_items' => 'Найти клинику',
			'not_found' =>  'Клиник не найдено',
			'not_found_in_trash' => 'В корзине клиник не найдено',
			'parent_item_colon' => '',
			'menu_name' => 'Клиники',
		), 
		'public' => true,
		'menu_position' => 5,
		'menu_icon' => 'dashicons-building',
		'supports' => array('title', 'editor', 'custom-field'),
		// 'taxonomies' => array('services_category')
	));

?>
