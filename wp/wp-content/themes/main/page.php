<?
/* Template Name: Страница */
get_header();

if (get_field('модуль')) {
	foreach (get_field('модуль') as $item) {
		get_template_part('modules/' . $item['acf_fc_layout']);
	}
}

get_footer();
