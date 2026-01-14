<? 

function getPhone($field = 'телефон', $option = 'option', $sub_field = false) {
	$value = $sub_field ? get_sub_field($field, $option) : get_field($field, $option);
	return strip_tags(str_replace([' ', '(', ')', '-'], '', $value));
}
