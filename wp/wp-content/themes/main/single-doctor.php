<?
	get_header();

	$title = get_the_title();
	$experience = get_field('опыт', $author_id);
	$experience_data = calculate_year($experience);
	$experience_years = $experience_data[0];
	$experience_text = $experience_data[1];


	$certificate = get_field('сертификаты');

	$args = array (
		'post_type'      => 'feedback',
		'posts_per_page' => -1,
		'post_status'    => 'publish',
		'meta_query'     => array(
			array(
				'key'     => 'врач',
				'value'   => get_the_ID(),
				'compare' => '='
			)
		),
	);
	
	$query = new WP_Query($args);

?>

<!-- Врач -->
<div class="section single-doctor">
	<div class="container">
		<div class="single-doctor__wrapper">

			<picture class="single-doctor__img">
				<source srcset="<?=get_template_directory_uri()?>/assets/img/doctor/1_mobile.webp" media="(max-width: 575px)">
				<img src="<?=get_template_directory_uri()?>/assets/img/doctor/1.webp" width="600" height="400" alt="" loading="lazy" decoding="async">
			</picture>

			<div class="column single-doctor__right">
				<h1 class="title"><?=$title ?></h1>
				<div class="tags">
					<div class="tag">Стоматолог-терапевт</div>
				</div>
				<div class="single-doctor__exp">Стаж: <span><?=$experience_years . ' ' . $experience_text?></span></div>
				<button class="button" type="button" data-modal="modal-call">Записаться</button>
			</div>
		</div>
	</div>
</div>

<!-- Навигация -->
<div class="section">
	<div class="container">
		<div class="doctor-tabs" data-tabs data-tabs-hash>
			<div class="doctor-tabs__header" data-tabs-header>
				<button class="doctor-tabs__button" data-tab-id="about" type="button">О враче</button>
				<button class="doctor-tabs__button" data-tab-id="services" type="button">Услуги</button>
				<?
					if ($certificate) {
						?>
							<button class="doctor-tabs__button" data-tab-id="certificate" type="button">Сертификаты</button>
						<?
					}
				?>
				<button class="doctor-tabs__button" data-tab-id="feedback" type="button">Отзывы</button>
			</div>
			<div class="section-top doctor-tabs__content" data-tabs-body>
				<div class="doctor-tabs__tab">
					<div class="text-block">
						<? the_field('о_враче');?>

						<h2>Профессиональные навыки</h2>
						<?
							$terms = get_the_terms(get_the_ID(), 'doctor_skills');

							if ($terms && !is_wp_error($terms)) { 
								?>
									<div class="tags">
										<?
											foreach ($terms as $term) {
												?>
													<div class="tag"><?=esc_html($term->name); ?></div>
												<?
											} 
										?>
									</div>
								<?
							} 
						?>
					</div>
				</div>
				<div class="doctor-tabs__tab">
					<div class="tags">
						<a href="#" class="tag">Лечение кариеса</a>
						<a href="#" class="tag">Лечение пульпита</a>
						<a href="#" class="tag">Эстетическая реставрация зубов</a>
						<a href="#" class="tag">Профессиональная гигиена</a>
						<a href="#" class="tag">Отбеливание</a>
					</div>
				</div>
				<?
					if ($certificate) {
						?>
							<div class="doctor-tabs__tab">
								<div class="row" data-gallery data-scrolling>
									<?
										foreach (get_field('сертификаты') as $i => $item) {
											?>
												<a href="<?=$item['url']?>">
													<img src="<?=$item['sizes']['certificate'] ?>" width="<?=$item['sizes']['certificate-width'] ?>" height="<?=$item['sizes']['certificate-height'] ?>" alt="" loading="lazy" decoding="async">
												</a>
											<?
										}
									?>
								</div>
							</div>
						<?
					}
				?>
				<div class="doctor-tabs__tab">
					<div class="feedback">
						<div class="slider feedback__slider">
							<div class="swiper feedback-container">
								<div class="swiper-wrapper">
									<?
										if ($query->have_posts()) {
											while ($query->have_posts()) {
												$query->the_post();
												?>
													<div class="swiper-slide">
														<? get_template_part('parts/feedback-item'); ?>
													</div>
												<?
											} 
										} 
		
										wp_reset_postdata();
									?>
								</div>
							</div>
							<div class="swiper-pagination slider__pagination feedback__pagination"></div>
						</div>

						<button class="button button-more" type="button" data-modal="modal-feedback">Оставить отзыв</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Работы -->
<section class="section section-gray work">
	<div class="container">
		<div class="section__top">
			<h2 class="title-2">Примеры работ</h2>
			<div class="swiper-navigation slider__navigation work__navigation">
				<button class="slider__arrow slider__prev work__prev work__arrow" type="button">
					<svg class="prev-icon">
						<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg#prev"></use>
					</svg>
				</button>
				<button class="slider__arrow slider__next work__next work__arrow" type="button">
					<svg class="next-icon">
						<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg#next"></use>
					</svg>
				</button>
			</div>
		</div>
		<div class="slider work__slider">
			<div class="swiper work-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide">
						<article class="work__item" itemscope itemtype="https://schema.org/MedicalProcedure">
							<div data-splitview>
								<div data-splitview-before>
									<img src="<?=get_template_directory_uri()?>/assets/img/work/1.webp" alt="Состояние зубов до" loading="lazy" itemprop="image">
								</div>
								<div data-splitview-after>
									<img src="<?=get_template_directory_uri()?>/assets/img/work/2.webp" alt="Результат после" loading="lazy">
								</div>
								<div data-splitview-arrow class="before-after__arrow">
									<input type="range" min="0" max="100" step="10" value="50" aria-label="Регулировать сравнение изображений">
								</div>
							</div>
							<div class="work__item-content">
								<h3 class="title-3 work__item-title" itemprop="name">
									<a href="single-work.html" class="hover-active" itemprop="url">Имплантация с установкой коронки</a>
								</h3>
								<p class="work__item-text" itemprop="description">
									Пациент обратился с отсутствием зуба. Проведена имплантация с последующей установкой циркониевой коронки. Результат — восстановлена эстетика и функция жевания.
								</p>
								<dl class="work__item-info info-list">
									<div class="info-list__item">
										<dt class="gray-text info-list__item-label">Клиника</dt>
										<dd class="info-list__item-text" itemprop="provider" itemscope itemtype="https://schema.org/MedicalOrganization">
											<svg class="location-icon" aria-hidden="true">
												<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg#location"></use>
											</svg>
											<span itemprop="address">ул. Пушкина, 23</span>
										</dd>
									</div>
									<div class="info-list__item">
										<dt class="gray-text info-list__item-label">Услуга</dt>
										<dd class="info-list__item-text" itemprop="procedureType">
											<a href="single-services.html" target="_blank" class="link">Удаление зуба</a>
										</dd>
									</div>
									<div class="info-list__item">
										<dt class="gray-text info-list__item-label">Количество визитов</dt>
										<dd class="info-list__item-text" itemprop="numberOfProcedureSteps">3</dd>
									</div>
								</dl>
								<a href="single-work.html" class="button" aria-label="Подробнее о процедуре имплантации">Подробнее</a>
							</div>
						</article>
					</div>
					<div class="swiper-slide">
						<article class="work__item" itemscope itemtype="https://schema.org/MedicalProcedure">
							<div data-splitview>
								<div data-splitview-before>
									<img src="<?=get_template_directory_uri()?>/assets/img/work/1.webp" alt="Состояние зубов до" loading="lazy" itemprop="image">
								</div>
								<div data-splitview-after>
									<img src="<?=get_template_directory_uri()?>/assets/img/work/2.webp" alt="Результат после" loading="lazy">
								</div>
								<div data-splitview-arrow class="before-after__arrow">
									<input type="range" min="0" max="100" step="10" value="50" aria-label="Регулировать сравнение изображений">
								</div>
							</div>
							<div class="work__item-content">
								<h3 class="title-3 work__item-title" itemprop="name">
									<a href="single-work.html" class="hover-active" itemprop="url">Имплантация с установкой коронки</a>
								</h3>
								<p class="work__item-text" itemprop="description">
									Пациент обратился с отсутствием зуба. Проведена имплантация с последующей установкой циркониевой коронки. Результат — восстановлена эстетика и функция жевания.
								</p>
								<dl class="work__item-info info-list">
									<div class="info-list__item">
										<dt class="gray-text info-list__item-label">Клиника</dt>
										<dd class="info-list__item-text" itemprop="provider" itemscope itemtype="https://schema.org/MedicalOrganization">
											<svg class="location-icon" aria-hidden="true">
												<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg#location"></use>
											</svg>
											<span itemprop="address">ул. Пушкина, 23</span>
										</dd>
									</div>
									<div class="info-list__item">
										<dt class="gray-text info-list__item-label">Услуга</dt>
										<dd class="info-list__item-text" itemprop="procedureType">
											<a href="single-services.html" target="_blank" class="link">Удаление зуба</a>
										</dd>
									</div>
									<div class="info-list__item">
										<dt class="gray-text info-list__item-label">Количество визитов</dt>
										<dd class="info-list__item-text" itemprop="numberOfProcedureSteps">3</dd>
									</div>
								</dl>
								<a href="single-work.html" class="button" aria-label="Подробнее о процедуре имплантации">Подробнее</a>
							</div>
						</article>
					</div>
					<div class="swiper-slide">
						<article class="work__item" itemscope itemtype="https://schema.org/MedicalProcedure">
							<div data-splitview>
								<div data-splitview-before>
									<img src="<?=get_template_directory_uri()?>/assets/img/work/1.webp" alt="Состояние зубов до" loading="lazy" itemprop="image">
								</div>
								<div data-splitview-after>
									<img src="<?=get_template_directory_uri()?>/assets/img/work/2.webp" alt="Результат после" loading="lazy">
								</div>
								<div data-splitview-arrow class="before-after__arrow">
									<input type="range" min="0" max="100" step="10" value="50" aria-label="Регулировать сравнение изображений">
								</div>
							</div>
							<div class="work__item-content">
								<h3 class="title-3 work__item-title" itemprop="name">
									<a href="single-work.html" class="hover-active" itemprop="url">Имплантация с установкой коронки</a>
								</h3>
								<p class="work__item-text" itemprop="description">
									Пациент обратился с отсутствием зуба. Проведена имплантация с последующей установкой циркониевой коронки. Результат — восстановлена эстетика и функция жевания.
								</p>
								<dl class="work__item-info info-list">
									<div class="info-list__item">
										<dt class="gray-text info-list__item-label">Клиника</dt>
										<dd class="info-list__item-text" itemprop="provider" itemscope itemtype="https://schema.org/MedicalOrganization">
											<svg class="location-icon" aria-hidden="true">
												<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg#location"></use>
											</svg>
											<span itemprop="address">ул. Пушкина, 23</span>
										</dd>
									</div>
									<div class="info-list__item">
										<dt class="gray-text info-list__item-label">Услуга</dt>
										<dd class="info-list__item-text" itemprop="procedureType">
											<a href="single-services.html" target="_blank" class="link">Удаление зуба</a>
										</dd>
									</div>
									<div class="info-list__item">
										<dt class="gray-text info-list__item-label">Количество визитов</dt>
										<dd class="info-list__item-text" itemprop="numberOfProcedureSteps">3</dd>
									</div>
								</dl>
								<a href="single-work.html" class="button" aria-label="Подробнее о процедуре имплантации">Подробнее</a>
							</div>
						</article>
					</div>
					<div class="swiper-slide">
						<article class="work__item" itemscope itemtype="https://schema.org/MedicalProcedure">
							<div data-splitview>
								<div data-splitview-before>
									<img src="<?=get_template_directory_uri()?>/assets/img/work/1.webp" alt="Состояние зубов до" loading="lazy" itemprop="image">
								</div>
								<div data-splitview-after>
									<img src="<?=get_template_directory_uri()?>/assets/img/work/2.webp" alt="Результат после" loading="lazy">
								</div>
								<div data-splitview-arrow class="before-after__arrow">
									<input type="range" min="0" max="100" step="10" value="50" aria-label="Регулировать сравнение изображений">
								</div>
							</div>
							<div class="work__item-content">
								<h3 class="title-3 work__item-title" itemprop="name">
									<a href="single-work.html" class="hover-active" itemprop="url">Имплантация с установкой коронки</a>
								</h3>
								<p class="work__item-text" itemprop="description">
									Пациент обратился с отсутствием зуба. Проведена имплантация с последующей установкой циркониевой коронки. Результат — восстановлена эстетика и функция жевания.
								</p>
								<dl class="work__item-info info-list">
									<div class="info-list__item">
										<dt class="gray-text info-list__item-label">Клиника</dt>
										<dd class="info-list__item-text" itemprop="provider" itemscope itemtype="https://schema.org/MedicalOrganization">
											<svg class="location-icon" aria-hidden="true">
												<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg#location"></use>
											</svg>
											<span itemprop="address">ул. Пушкина, 23</span>
										</dd>
									</div>
									<div class="info-list__item">
										<dt class="gray-text info-list__item-label">Услуга</dt>
										<dd class="info-list__item-text" itemprop="procedureType">
											<a href="single-services.html" target="_blank" class="link">Удаление зуба</a>
										</dd>
									</div>
									<div class="info-list__item">
										<dt class="gray-text info-list__item-label">Количество визитов</dt>
										<dd class="info-list__item-text" itemprop="numberOfProcedureSteps">3</dd>
									</div>
								</dl>
								<a href="single-work.html" class="button" aria-label="Подробнее о процедуре имплантации">Подробнее</a>
							</div>
						</article>
					</div>
					<div class="swiper-slide">
						<article class="work__item" itemscope itemtype="https://schema.org/MedicalProcedure">
							<div data-splitview>
								<div data-splitview-before>
									<img src="<?=get_template_directory_uri()?>/assets/img/work/1.webp" alt="Состояние зубов до" loading="lazy" itemprop="image">
								</div>
								<div data-splitview-after>
									<img src="<?=get_template_directory_uri()?>/assets/img/work/2.webp" alt="Результат после" loading="lazy">
								</div>
								<div data-splitview-arrow class="before-after__arrow">
									<input type="range" min="0" max="100" step="10" value="50" aria-label="Регулировать сравнение изображений">
								</div>
							</div>
							<div class="work__item-content">
								<h3 class="title-3 work__item-title" itemprop="name">
									<a href="single-work.html" class="hover-active" itemprop="url">Имплантация с установкой коронки</a>
								</h3>
								<p class="work__item-text" itemprop="description">
									Пациент обратился с отсутствием зуба. Проведена имплантация с последующей установкой циркониевой коронки. Результат — восстановлена эстетика и функция жевания.
								</p>
								<dl class="work__item-info info-list">
									<div class="info-list__item">
										<dt class="gray-text info-list__item-label">Клиника</dt>
										<dd class="info-list__item-text" itemprop="provider" itemscope itemtype="https://schema.org/MedicalOrganization">
											<svg class="location-icon" aria-hidden="true">
												<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg#location"></use>
											</svg>
											<span itemprop="address">ул. Пушкина, 23</span>
										</dd>
									</div>
									<div class="info-list__item">
										<dt class="gray-text info-list__item-label">Услуга</dt>
										<dd class="info-list__item-text" itemprop="procedureType">
											<a href="single-services.html" target="_blank" class="link">Удаление зуба</a>
										</dd>
									</div>
									<div class="info-list__item">
										<dt class="gray-text info-list__item-label">Количество визитов</dt>
										<dd class="info-list__item-text" itemprop="numberOfProcedureSteps">3</dd>
									</div>
								</dl>
								<a href="single-work.html" class="button" aria-label="Подробнее о процедуре имплантации">Подробнее</a>
							</div>
						</article>
					</div>
					<div class="swiper-slide">
						<article class="work__item" itemscope itemtype="https://schema.org/MedicalProcedure">
							<div data-splitview>
								<div data-splitview-before>
									<img src="<?=get_template_directory_uri()?>/assets/img/work/1.webp" alt="Состояние зубов до" loading="lazy" itemprop="image">
								</div>
								<div data-splitview-after>
									<img src="<?=get_template_directory_uri()?>/assets/img/work/2.webp" alt="Результат после" loading="lazy">
								</div>
								<div data-splitview-arrow class="before-after__arrow">
									<input type="range" min="0" max="100" step="10" value="50" aria-label="Регулировать сравнение изображений">
								</div>
							</div>
							<div class="work__item-content">
								<h3 class="title-3 work__item-title" itemprop="name">
									<a href="single-work.html" class="hover-active" itemprop="url">Имплантация с установкой коронки</a>
								</h3>
								<p class="work__item-text" itemprop="description">
									Пациент обратился с отсутствием зуба. Проведена имплантация с последующей установкой циркониевой коронки. Результат — восстановлена эстетика и функция жевания.
								</p>
								<dl class="work__item-info info-list">
									<div class="info-list__item">
										<dt class="gray-text info-list__item-label">Клиника</dt>
										<dd class="info-list__item-text" itemprop="provider" itemscope itemtype="https://schema.org/MedicalOrganization">
											<svg class="location-icon" aria-hidden="true">
												<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg#location"></use>
											</svg>
											<span itemprop="address">ул. Пушкина, 23</span>
										</dd>
									</div>
									<div class="info-list__item">
										<dt class="gray-text info-list__item-label">Услуга</dt>
										<dd class="info-list__item-text" itemprop="procedureType">
											<a href="single-services.html" target="_blank" class="link">Удаление зуба</a>
										</dd>
									</div>
									<div class="info-list__item">
										<dt class="gray-text info-list__item-label">Количество визитов</dt>
										<dd class="info-list__item-text" itemprop="numberOfProcedureSteps">3</dd>
									</div>
								</dl>
								<a href="single-work.html" class="button" aria-label="Подробнее о процедуре имплантации">Подробнее</a>
							</div>
						</article>
					</div>

				</div>
			</div>
			<div class="swiper-pagination slider__pagination work__pagination"></div>
		</div>
	</div>
</section>

<!-- Другие врачи -->
<div class="section">
	<div class="container">
		<div class="section__top">
			<div class="title-2">Другие врачи</div>
		</div>
	</div>
</div>

<?
	get_footer();
?>
