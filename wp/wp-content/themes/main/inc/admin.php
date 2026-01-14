<? 

// Сохранение при f4
add_filter('admin_footer', 'post_save_accesskey');
function post_save_accesskey(){
	if(get_current_screen()->parent_base != 'edit' ) return;
		?>
			<script> 
				jQuery(document).ready(function($){

					$(window).keydown(function(e){
						if(e.keyCode == 115 ){   
							e.preventDefault(); 
							$('[name="publish"]').click();
							$('[name="save"]').click();
							$('[name="submit"]').click();
							$('.media-button').click(); 
							$('[value="Обновить"]').click(); 
						} 
					});

				});
			</script>
		<?
}

// Скрытие ненужных полей в acf 
add_action('admin_head', 'adminStyles');

function adminStyles() {
	echo '
	<style>
		.acf-field-setting-instructions,
		.acf-field-setting-required,
		.acf-field-setting-library,
		.acf-field-setting-min_width,
		.acf-field-setting-max_width,
		.acf-field-setting-mime_types,
		.acf-field-setting-default_value,
		.acf-field-setting-placeholder,
		.acf-field-setting-prepend,
		.acf-field-setting-append, 
		.acf-field-setting-rows,
		.acf-field-setting-min_size,
		.acf-field-setting-max_size,
		.acf-field-setting-tabs,
		.acf-field-setting-toolbar,
		.acf-field-setting-media_upload,
		.acf-field-setting-delay,
		.acf-field-setting-insert,
		.acf-field-setting-min,
		.acf-field-setting-max,
		.acf-field-setting-button_label,
		.acf-field-setting-collapsed,
		.acf-field-setting-wrapper .acf-input li:nth-child(2),
		.acf-field-setting-wrapper .acf-input li:nth-child(3),
		.psn-licensekey-notice,
		#menu-dashboard,
		#menu-users,
		#menu-tools,
		#toplevel_page_clearfy,
		#toplevel_page_smush,
		.psn-licensekey-notice,
		.acf-field-setting-maxlength {
			display: none
		}  
		
		.acf-tab-wrap:after {
			content: "";
			clear: both;
			display: table;
		}
		
		.acf-field-setting-wrapper .acf-input li:nth-child(1){
			width: 100% !important;
		}
		
		#edittag {
			max-width: 1300px;
		}

		.acf-input textarea {
			padding-bottom: 40px;
		}

		.acf-input button {
			display: inline-flex;
			padding: 4px 8px;
			cursor: pointer;
			border: none;
			border-radius: 4px;
		}
		
		.acf-repeater .acf-row-handle .acf-icon {
			margin: 0;
		}

		.acf-repeater .acf-row-handle {
			width: 30px;
		}

		.acf-icon.-duplicate {
			display: block !important;
			position: relative;
			left: 100% !important;
			translate: -100% -50%;
			top: 50% !important;
		}

	</style>';
	
	echo "
		<script>
			document.addEventListener('DOMContentLoaded', function() {
				const textareas = document.querySelectorAll('.acf-field textarea')

				textareas.forEach(area => {
					const wrapper = document.createElement('div')
					wrapper.style.marginBottom = '4px'
					wrapper.style.position = 'absolute'
					wrapper.style.left = '4px'
					wrapper.style.bottom = '4px'

					const spanBtn = document.createElement('button')
					spanBtn.type = 'button'
					spanBtn.textContent = 'span'
					spanBtn.title = 'Обернуть в тег span'
					spanBtn.style.marginRight = '4px'

					const strongBtn = document.createElement('button')
					strongBtn.type = 'button'
					strongBtn.textContent = 'strong'
					strongBtn.title = 'Обернуть в тег strong'
					strongBtn.style.marginRight = '4px'


					const boldBtn = document.createElement('button')
					boldBtn.type = 'button'
					boldBtn.textContent = 'b'
					boldBtn.title = 'Обернуть в тег b'

					wrapper.appendChild(spanBtn)
					wrapper.appendChild(strongBtn)
					wrapper.appendChild(boldBtn)

					area.parentNode.insertBefore(wrapper, area)

					spanBtn.addEventListener('click', () => wrapSelectedText(area, 'span'))
					strongBtn.addEventListener('click', () => wrapSelectedText(area, 'strong'))
					boldBtn.addEventListener('click', () => wrapSelectedText(area, 'b'))
				})

				document.addEventListener('keydown', function(event) {
					if ((event.keyCode === 66 || event.key.toLowerCase() === 'b') && (event.ctrlKey || event.metaKey)) {
						const active = document.activeElement
						if (active && active.tagName === 'TEXTAREA') {
							wrapSelectedText(active, 'strong')
							event.preventDefault()
						}
					}
				})

				function wrapSelectedText(textarea, tag) {
					const startPos = textarea.selectionStart
					const endPos = textarea.selectionEnd
					const selection = textarea.value.substring(startPos, endPos)

					const beforeText = textarea.value.substring(0, startPos)
					const afterText = textarea.value.substring(endPos)

					const openTag = '<' + tag + '>'
					const closeTag = '</' + tag + '>'

					let newText
					let cursorPos

					if (selection.trim()) {
						newText = beforeText + openTag + selection + closeTag + afterText
						cursorPos = beforeText.length + openTag.length + selection.length + closeTag.length
					} else {
						newText = beforeText + openTag + closeTag + afterText
						cursorPos = beforeText.length + openTag.length
					}

					textarea.value = newText
					textarea.setSelectionRange(cursorPos, cursorPos)
					textarea.focus()
				}
			})
		</script>
	";
}

// Переименовывание Записи в Статьи в админке
function rename_posts_to_news() {
	global $menu;
	global $submenu;

	$menu[5][0] = 'Статьи';

	if ( ! empty( $submenu['edit.php'] ) ) {
		$submenu['edit.php'][5][0] = 'Все статьи';  
		$submenu['edit.php'][10][0] = 'Добавить статью'; 
		$submenu['edit.php'][15][0] = 'Рубрики';   
		$submenu['edit.php'][16][0] = 'Метки';   
	}
}

add_action( 'admin_menu', 'rename_posts_to_news' );

add_filter('wpcf7_autop_or_not', '__return_false');

// Удаление виджетов из Консоли WordPress
add_action( 'wp_dashboard_setup', 'clear_wp_dash' );
function clear_wp_dash(){
	$dash_side   = & $GLOBALS['wp_meta_boxes']['dashboard']['side']['core'];
	$dash_normal = & $GLOBALS['wp_meta_boxes']['dashboard']['normal']['core'];

	unset( $dash_side['dashboard_quick_press'] );       // Быстрая публикация
	unset( $dash_side['dashboard_recent_drafts'] );     // Последние черновики
	unset( $dash_side['dashboard_primary'] );           // Блог WordPress
	unset( $dash_side['dashboard_secondary'] );         // Другие Новости WordPress

	unset( $dash_normal['dashboard_incoming_links'] );  // Входящие ссылки
	unset( $dash_normal['dashboard_right_now'] );       // Прямо сейчас
	unset( $dash_normal['dashboard_recent_comments'] ); // Последние комментарии
	unset( $dash_normal['dashboard_plugins'] );         // Последние Плагины
	unset( $dash_normal['dashboard_activity'] );        // Активность
	unset( $dash_normal['dashboard_site_health'] );     // Здоровье сайта

	## Удаление виджета "Добро пожаловать"
	remove_action( 'welcome_panel', 'wp_welcome_panel' );
}
