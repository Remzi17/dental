<!DOCTYPE html>
<html lang="ru">

<head>

	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">

	<!-- Шрифты --> 
	<link rel="preload" href="<?=get_template_directory_uri()?>/assets/css/fonts.css" as="font" onload="this.rel='stylesheet' ">

	<title><? bloginfo('name'); wp_title()?></title>

	<?
		wp_head();
	?>

	<!-- Цвета -->
	<style>
		:root {
			--active: #1cae6a;
			--active-light: color-mix(in srgb, var(--active) 12%, white);
			--text: rgb(33, 37, 41);
			--text-light: color-mix(in srgb, #1D2428, transparent 12%);
			--gray: #f1f1f1;
			--gray_dark: #acb3ba;
		}
	</style>

	
</head>

<body id="home" <? body_class('wp')?>>

	<!-- <?php echo basename(get_page_template()); ?>  -->
	<div class="wrapper">
		<main class="main">
			<div class="header-top">
				<div class="container">
					<div class="header-top-wrapper">
						<a href="<?=is_front_page() ? '#home' : '/' ?>" class="logo header__logo">
							<img src="<?=get_template_directory_uri()?>/assets/img/logo.svg" width="40" height="40" alt="">
							<div class="logo__title">
								<p>Dental</p>
								<p>City</p>
							</div>
						</a>
						<form role="search" method="get" action="/" class="search header__search" data-da=".header__mobile,1199,0">
							<div class="search__input">
								<input type="search" name="s" placeholder="Поиск по сайту" value="">
								<button type="submit" class="search__button">
									<svg class="search-icon">
										<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg?ver=<?=spriteVersion()?>#search"></use>
									</svg>
								</button>
							</div>
						</form>
						<div class="header__contacts" data-da=".header__mobile,767,2">
							<div class="address">
								<div class="icon">
									<svg class="location-icon">
										<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg?ver=<?=spriteVersion()?>#location"></use>
									</svg>
								</div>
								<span>Москва</span>
							</div>
							<div class="call header__call" data-da=".header-top-wrapper,767,2">
								<a href="tel:+74957750549" class="hover-active tel header__tel">
									<div class="icon">
										<svg class="phone-icon">
											<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg?ver=<?=spriteVersion()?>#phone"></use>
										</svg>
									</div>
									<span class="hide-xs">+7 (495) 775-05-49</span>
								</a>
								<div class="social header__social">
									<a href="https://wa.me/+79789999999" class="social__item" target="_blank">
										<svg class="whatsapp-icon">
											<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg?ver=<?=spriteVersion()?>#whatsapp"></use>
										</svg>
									</a>
									<a href="https://t.me/+70000000000" class="social__item" target="_blank">
										<svg class="telegram-icon">
											<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg?ver=<?=spriteVersion()?>#telegram"></use>
										</svg>
									</a>
								</div>
							</div>
							<div class="time">
								<div class="icon">
									<svg class="time-icon">
										<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg?ver=<?=spriteVersion()?>#time"></use>
									</svg>
								</div>
								<span>Пн-Пт &nbsp; 9:00-19:00</span>
							</div>
							<a href="mailto:info@admin.ru" class="hover-active email header__email">
								<div class="icon">
									<svg class="email-icon">
										<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg?ver=<?=spriteVersion()?>#email"></use>
									</svg>
								</div>
								<span>info@admin.ru</span>
							</a>
						</div>
						<div class="header__buttons" data-da=".header__mobile,991,3">
							<button class="button button_orange" type="button" data-modal="popup-call">Связаться с нами</button>
						</div>
						<button class="menu-link">
							<span class="menu-lines"></span>
						</button>
					</div>
				</div>
			</div>

			<header class="header">
				<div class="header-fixed">
					<div class="container">
						<div class="header__mobile">
							<nav class="nav header__nav" aria-label="Навигация по сайту">
								<ul class="menu header__menu">
									<li class="menu-item-has-children current-menu-item">
										<a href="about.html">
											О нас
											<span class="menu-item-arrow"></span>
										</a>
										<div class="sub-menu-wrapper">
											<ul class="sub-menu">
												<li><a href="license.html">Лицензии</a></li>
												<li><a href="feedback.html">Отзывы</a></li>
												<li><a href="vacancy.html">Вакансии</a></li>
											</ul>
										</div>
									</li>
									<li class="menu-item-has-children">
										<a href="category.html">
											Продукты
											<span class="menu-item-arrow"></span>
										</a>
										<div class="sub-menu-wrapper">
											<ul class="sub-menu">
												<li><a href="category-2.html">RuMap-GIS</a></li>
												<li class="menu-item-has-children">
													<a href="category-2.html">
														RuMap-GIS
														<span class="menu-item-arrow"></span>
													</a>
													<div class="sub-menu-wrapper">
														<ul class="sub-menu">
															<li><a href="category-3.html">RuMap Данные</a></li>
															<li><a href="category-3.html">RuMap Сервисы</a></li>
															<li><a href="category-3.html">Геопортал RuMap</a></li>
														</ul>
													</div>
												</li>
												<li><a href="category-2.html">RuMap Сервисы</a></li>
												<li><a href="category-2.html">Геопортал RuMap</a></li>
												<li class="menu-item-has-children">
													<a href="category-2.html">
														RuMap приложения
														<span class="menu-item-arrow"></span>
													</a>
													<div class="sub-menu-wrapper">
														<ul class="sub-menu">
															<li><a href="category-3.html">RuMap Данные</a></li>
															<li><a href="category-3.html">RuMap Сервисы</a></li>
															<li><a href="category-3.html">Геопортал RuMap</a></li>
														</ul>
													</div>
												</li>
												<li><a href="category-2.html">Геоинформационные системы</a></li>
											</ul>
										</div>
									</li>
									<li class="menu-item-has-children">
										<a href="category-2.html">
											Услуги
											<span class="menu-item-arrow"></span>
										</a>
										<div class="sub-menu-wrapper">
											<ul class="sub-menu">
												<li><a href="category-2.html">Разработка Программного обеспечения</a></li>
												<li><a href="category-2.html">Разработка пространственных данных</a></li>
												<li><a href="category-2.html">Геомаркетинговые исследования</a></li>
												<li><a href="category-2.html">Аналитические исследования</a></li>
												<li><a href="category-2.html">Разработка Программного обеспечения</a></li>
												<li><a href="category-2.html">Разработка пространственных данных</a></li>
												<li><a href="category-2.html">Геомаркетинговые исследования</a></li>
												<li><a href="category-2.html">Аналитические исследования</a></li>
											</ul>
										</div>
									</li>
									<li><a href="project.html">Проекты</a></li>
									<li><a href="feedback.html">Отзывы</a></li>
									<li><a href="news.html">Новости</a></li>
									<li><a href="contact.html">Контакты</a></li>

								</ul>
							</nav>
						</div>
					</div>
				</div>
			</header>

