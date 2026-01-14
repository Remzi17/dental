<?

function getModule($name, $fields_map = [], $repeat = false) {
	static $used_indexes = [];

	$modules = get_field('модуль');
	if (!$modules) return null;

	foreach ($modules as $i => $item) {
		if ($item['acf_fc_layout'] !== $name) continue;
		if (!$repeat && in_array($i, $used_indexes)) continue;

		$result = [];
		foreach ($fields_map as $key => $acf_field) {
			$result[$key] = $item[$acf_field] ?? null;
		}

		if (!$repeat) $used_indexes[] = $i;

		return $result;
	}

	return null;
}

?>
