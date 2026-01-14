<?
	get_header();
	increase_post_views(get_the_ID()); 
	get_template_part('parts/crumbs');
?>

<!-- Статья --> 
<div class="section news single-news">
	<div class="container">
		<div class="single-news-wrapper">
			<div class="column single-news__left">
				<h1 class="title single-news__title"><? the_title() ?></h1>
				<picture class="single-news__img">
					<source srcset="<?=get_template_directory_uri()?>/assets/img/news/1.webp" media=" (max-width: 575px)">
					<img src="<?=get_template_directory_uri()?>/assets/img/news/1.webp" alt="" loading="lazy" decoding="async">
				</picture>
				<div class="single-news__row">
					<? 
						get_template_part('parts/news/news-info');
					?> 
				</div>
				<div class="text-block single-news__text">
					<? the_content() ?>
				</div>
				<div class="single-news__pagination">
					<?
						$prev_post = get_previous_post(true);
						$next_post = get_next_post(true);
		
						if (!$prev_post) {
							$prev_post = get_previous_post(false);
						}
		
						if (!$next_post) {
							$next_post = get_next_post(false);
						}
					?>

					<a href="<?=get_permalink($prev_post)?>" class="button button_border single-news__pagination-button">
						<div class="icon">
							<svg class="prev-icon">
								<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg?ver=<?=spriteVersion()?>#prev"></use>
							</svg>
						</div>
						<span>Предыдущая <span class="hide-xs">статья</span></span>
					</a>
					<a href="<?=get_permalink($next_post)?>" class="button button_orange button_black single-news__pagination-button">
						<span>Следующая <span class="hide-xs">статья</span></span>
						<div class="icon">
							<svg class="next-icon">
								<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg?ver=<?=spriteVersion()?>#next"></use>
							</svg>
						</div>
					</a>
				</div>
				
				<?
					get_template_part('parts/comments/comments');
				?>
				
			</div>
			<div class="single-news__right">
				<?
					$author = get_field('автор');

					if ($author) {
						$author_id = is_object($author) ? $author->ID : $author;
						$author_name = get_the_title($author_id);
						$author_url = get_permalink($author_id);

						$experience = get_field('опыт', $author_id);
						
						$experience_data = calculate_year($experience);
						$experience_years = $experience_data[0];
						$experience_text = $experience_data[1];
						
						$reviews_count = get_reviews_count($author_id);

						?>
							<h3 class="title-3">Автор</h3>
							<div class="doctor">
								<div class="hover-scale doctor__item">
									<a href="<?=esc_url($author_url); ?>" class="doctor__item-img">
										<?
											if (has_post_thumbnail($author_id)) {
												echo get_the_post_thumbnail( 
													$author_id, 
													'large', 
													array(
														'loading' => 'lazy',
														'decoding' => 'async',
														'alt' => 'Фото автора: ' . esc_attr($author_name),
													) 
												);
											} else {
												?>
													<a href="<?=esc_url($author_url); ?>" class="placeholder" aria-hidden="true"></a>
												<?
											} 
										?>
									</a>
									<div class="doctor__item-content">
										<h3 class="title-3 doctor__item-title">
											<a href="<?=esc_url($author_url); ?>" class="hover-active"><?=esc_html($author_name); ?></a>
										</h3>
										<p class="doctor__item-text">
											<?
												if ($experience_years >= 1) {
													?>
														Опыт: <?=$experience_years . ' ' . $experience_text?>
													<?
												}
											
												if($reviews_count > 0) {
													?>
														, <a href="single-doctor.html?link=feedback" class="hover-active link">
															<?=$reviews_count?> 
															<?=get_word($reviews_count, ['отзыв', 'отзыва', 'отзывов']) ?>
															</a>
													<?
												}
											?>
										</p>

										<div class="buttons doctor__item-buttons">
											<a href="<?=esc_url($author_url); ?>" class="button button_border">Подробнее</a>
											<button class="button" type="button" data-modal="popup-call">Записаться</button>
										</div>
									</div>
								</div>
							</div>
						<?
					}
				?>
			</div>
		</div>
	</div>
</div>	

<?
	get_footer();
?>   
    