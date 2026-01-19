<?
// Сколько лет прошло
function calculate_year($date_string) {
	if (empty($date_string)) return array(0, 'лет');

	// Убираем запятую и приводим к нужному формату
	$date_string = str_replace(',', '', $date_string);
  
	// Создаем массив для преобразования русских месяцев в английские
	$months_ru_en = array(
		'января' => 'January',
		'февраля' => 'February', 
		'марта' => 'March',
		'апреля' => 'April',
		'мая' => 'May',
		'июня' => 'June',
		'июля' => 'July',
		'августа' => 'August',
		'сентября' => 'September',
		'октября' => 'October',
		'ноября' => 'November',
		'декабря' => 'December'
	);
  
	// Заменяем русский месяц на английский
	foreach ($months_ru_en as $ru => $en) {
		if (strpos($date_string, $ru) !== false) {
			$date_string = str_replace($ru, $en, $date_string);
			break;
		}
	}
  
	// Теперь пробуем парсить в формате "j F Y" (5 September 2013)
	$date = DateTime::createFromFormat('j F Y', $date_string);
  
	if (!$date) {
		// Если не получилось, пробуем другие возможные форматы
		$date = DateTime::createFromFormat('d.m.Y', $date_string);
	}
  
	if (!$date) {
		// Последняя попытка - стандартный парсер
		$date = date_create($date_string);
	}

	if (!$date) return array(0, 'лет');

	$now = new DateTime();
	$interval = $now->diff($date);
	$years = $interval->y;

	if ($years == 1) {
		return array(1, 'год');
	} elseif ($years >= 2 && $years <= 4) {
		return array($years, 'года');
	} else {
		return array($years, 'лет');
	}
}

// Количество комментариев
function get_reviews_count($post_id) {
	$comments_count = get_comments(array(
		'post_id' => $post_id,
		'count' => true,
		'status' => 'approve'
	));
  
	return $comments_count ?: 0;
}

// Умный вывод даты 
function get_smart_date($date_string = '', $full_format = false) {
	if (empty($date_string)) {
		$timestamp = get_the_time('U');
	} else {
		$timestamp = strtotime($date_string);
	}

	$current_time = current_time('timestamp');
	$diff = $current_time - $timestamp;

	if ($full_format === true) {
		return date('d.m.Y H:i:s', $timestamp); 
	}

	if ($diff < HOUR_IN_SECONDS) {
		$minutes = round($diff / MINUTE_IN_SECONDS);
		return $minutes <= 1 ? 'только что' : $minutes . ' ' . get_word($minutes, ['минуту', 'минуты', 'минут']) . ' назад';
	}

	if (date('Y-m-d', $timestamp) == date('Y-m-d', $current_time)) {
		return 'Сегодня в ' . date('H:i', $timestamp);
	}

	if (date('Y-m-d', $timestamp) == date('Y-m-d', $current_time - DAY_IN_SECONDS)) {
		return 'Вчера в ' . date('H:i', $timestamp);
	}

	$day = date('j', $timestamp);
	$month = date('n', $timestamp);
	$year = date('Y', $timestamp);

	$month_names = [
		1 => 'января',
		2 => 'февраля', 
		3 => 'марта',
		4 => 'апреля',
		5 => 'мая',
		6 => 'июня',
		7 => 'июля',
		8 => 'августа',
		9 => 'сентября',
		10 => 'октября',
		11 => 'ноября',
		12 => 'декабря'
	];

	return $day . ' ' . $month_names[$month] . ' ' . $year;
}

// Склонение слова
function get_word($number, $titles) {
	$cases = array(2, 0, 1, 1, 1, 2);
	return $titles[($number % 100 > 4 && $number % 100 < 20) ? 2 : $cases[min($number % 10, 5)]];
}
