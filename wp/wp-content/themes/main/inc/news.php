<?

// ============================================================
//  Просмотры постов
// ============================================================
function increase_post_views($post_id) {
	if (empty($post_id)) return;

	$views = get_field('просмотры', $post_id) ?: 0;
	$views++;
	update_field('просмотры', $views, $post_id);

	return $views;
}

?>
