<? 

add_action('wp_enqueue_scripts', function() {
	wp_enqueue_script('load-more', get_template_directory_uri() . '/assets/js/load-more.js', [], null, true);
	wp_localize_script('load-more', 'loadMoreData', [
		'ajax_url' => admin_url('admin-ajax.php'),
		'nonce' => wp_create_nonce('load_more_nonce'),
	]);
});

add_action('wp_ajax_load_more_posts', 'theme_load_more_posts');
add_action('wp_ajax_nopriv_load_more_posts', 'theme_load_more_posts');

function theme_load_more_posts() {
	check_ajax_referer('load_more_nonce', 'nonce');
	ob_start();

	$post_type = sanitize_text_field($_POST['post_type']);
	$posts_per_page = intval($_POST['posts_per_page']);
	$exclude_ids = !empty($_POST['exclude_ids']) ? json_decode(stripslashes($_POST['exclude_ids']), true) : [];

	$args = [
		'post_type' => $post_type,
		'post_status' => 'publish',
		'posts_per_page' => $posts_per_page,
		'post__not_in' => $exclude_ids,
		'orderby' => ['menu_order' => 'ASC', 'date' => 'ASC'],
	];

	$query = new WP_Query($args);
	if ($query->have_posts()) {
		$new_ids = [];
		while ($query->have_posts()) {
			$query->the_post();
			$new_ids[] = get_the_ID();
			get_template_part('template-parts/content', $post_type);
		}
		wp_reset_postdata();
		wp_send_json_success(['html' => ob_get_clean(), 'new_ids' => $new_ids]);
	} else {
		wp_send_json_error('no_posts');
	}
}
