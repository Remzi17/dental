<?

// show_admin_bar(false);

$includes = [
	'setup.php',
	'post-types.php', 
	'scripts.php',
	'acf-options.php',
	'modules.php',
	'request.php', 
	'helpers.php',
	'admin.php',
	'other.php',
	'news.php',
	'comments.php',
	'feedback.php',
	'func.php'
]; 

foreach ($includes as $file) {
	$path = get_template_directory() . '/inc/' . $file;
	if (file_exists($path)) {
		require_once $path;
	}
}
