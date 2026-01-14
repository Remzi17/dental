<?
	// Удаление тегов из excerpt
	function clean_excerpt($excerpt) {
		return strip_tags($excerpt);
	}

	add_filter('the_excerpt', 'clean_excerpt');

?>
