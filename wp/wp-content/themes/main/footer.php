</main> 

<footer class="footer">
	<div class="footer__top-wrapper">
		<div class="container">
			<div class="footer__top">
				<div class="col footer__left">
					<a href="<?=is_front_page() ? '#home' : '/' ?>" class="logo footer__logo">
						<img src="<?=get_template_directory_uri()?>/assets/img/logo.svg" width="40" height="40" alt="">
						<div class="logo__title">
							<p>Dental</p>
							<p>City</p>
						</div>
					</a>
					<div class="footer__text">
						<p>ООО Dental City</p>
						<p>
							ОГРН: 00000000000000 <br>
							ИНН: 0000000000 <br> 
							КПП: 0000000000
						</p>
					</div>
				</div>
				<div class="footer__item footer__item-menu">
					<div class="title-3 footer__item-title">Меню</div>
					<ul class="menu footer__menu">
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
						<li><a href="feedback.html">Отзывы</a></li>
						<li class="menu-item-has-children">
							<a href="category.html">
								Продукты
								<span class="menu-item-arrow"></span>
							</a>
							<div class="sub-menu-wrapper">
								<ul class="sub-menu">
									<li><a href="category-2.html">RuMap-GIS</a></li>
									<li><a href="category-2.html">RuMap Сервисы</a></li>
									<li><a href="category-2.html">Геопортал RuMap</a></li>
									<li><a href="category-2.html">RuMap приложения</a></li>
									<li><a href="category-2.html">Геоинформационные системы</a></li>
								</ul>
							</div>
						</li>
						<li><a href="news.html">Новости</a></li>
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
						<li><a href="contact.html">Контакты</a></li>
						<li><a href="project.html">Проекты</a></li>
					</ul>
				</div>
				<div class="footer__item footer__item-contacts">
					<div class="title-3 footer__item-title">Контакты и время работы</div>

					<div class="footer__contacts">
						<div class="call contact__call">
							<a href="tel:+79876543210" class="hover-active tel contact__item">
								<svg class="phone-icon">
									<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg?ver=<?=spriteVersion()?>#phone"></use>
								</svg>
								<span>+7 (987) 654-32-10</span>
							</a>
							<div class="social contact__social">
								<a href="https://wa.me/+79876543210" class="social__item" target="_blank">
									<svg class="whatsapp-icon">
										<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg?ver=<?=spriteVersion()?>#whatsapp"></use>
									</svg>
								</a>
								<a href="https://t.me/+79876543210" class="social__item" target="_blank">
									<svg class="telegram-icon">
										<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg?ver=<?=spriteVersion()?>#telegram"></use>
									</svg>
								</a>
							</div>
						</div>

						<a href="mailto:info@admin.ru" class="hover-active email footer__email">
							<div class="icon">
								<svg class="email-icon">
									<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg?ver=<?=spriteVersion()?>#email"></use>
								</svg>
							</div>
							<span>info@admin.ru</span>
						</a>
						<div class="address">
							<div class="icon">
								<svg class="location-icon">
									<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg?ver=<?=spriteVersion()?>#location"></use>
								</svg>
							</div>
							<span>г. Москва, ул Петрова, дом 9а, офис 125</span>
						</div>
						<div class="time">
							<div class="icon">
								<svg class="time-icon">
									<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg?ver=<?=spriteVersion()?>#time"></use>
								</svg>
							</div>
							<span>Пн-Пт, с 9:00 до 18:00</span>
						</div>
						<div class="footer__buttons">
							<button class="button button_border button_white" type="button" data-modal="modal-call">Связаться с нами</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="footer__bottom-wrapper">
		<div class="container">
			<div class="footer__bottom">
				<span>Copyright ©2025 Dental City</span>
				<a href="sitemap.html" class="hover-active" target="_blank">Карта сайта</a>
				<a href="text.html" class="hover-active" target="_blank">Политика конфиденциальности</a>
				<a href="text.html" class="hover-active" target="_blank">Пользовательское соглашение</a>
			</div>
		</div>
	</div>
</footer>  


</div>

<div class="modals">
	<!-- Заказать звонок -->
	<div class="modal modal-call" id="modal-call">
		<div class="modal__dialog">
			<div class="modal__content">
				<button class="modal__close" type="button" data-modal-close>
					<svg class="close">
						<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg?ver=<?=spriteVersion()?>#close"></use>
					</svg>
				</button>
				<div class="form modal__form">
					<div class="title-2 modal__title">Заказать звонок</div>
					<form>
						<input type="hidden" name="info" class="modal-info">
						<div class="form__fields form__fields-col">
							<input class="input" type="text" name="name" placeholder="Имя" required>
							<input class="input" type="tel" name="phone" placeholder="Телефон" required>
							<label class="small-text checkbox">
								<input class="checkbox__input" type="checkbox" checked required>
								<span class="checkbox__text">Нажимая на кнопку “Отправить”, Вы соглашаетесь с <a href="text.html" class="underline" target="_blank">Политикой конфиденциальности</a></span>
							</label>
							<button class="button submit">Отправить</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

	<!-- Оставить отзыв -->
	<div class="modal modal-feedback" id="modal-feedback">
		<div class="modal__dialog">
			<div class="modal__content">
				<button class="modal__close" type="button" data-modal-close>
					<svg class="close">
						<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg?ver=<?=spriteVersion()?>#close"></use>
					</svg>
				</button>
				<div class="form modal__form">
					<div class="title-2 modal__title">Оставить отзыв</div>
					<form>
						<input type="hidden" name="info" class="modal-info">
						<div class="form__fields" style="--columns: 2">
							<input class="input" type="text" name="name" placeholder="Ваше имя*" required>
							<input class="input" type="tel" name="phone" placeholder="Ваш телефон*" required>

							<?
								$fields = [
									"clinic" => 'Филиалы',
									"services" => 'Услуги',
									"doctor" => 'Врач',
								];

								foreach ($fields as $label => $title) {
									$posts = get_posts([
										'post_type' => $label,
										'posts_per_page' => -1,
										'fields' => 'ids'
									]); 
										
									?>
										<select name="<?=$label ?>">
											<option data-placeholder="true"><?=$title ?></option>
											<?
												foreach($posts as $id) {
													?>
														<option value="<?=$id?>"><?=get_the_title($id)?></option>
													<?
												}
											?>
										</select>
									<?
								}
							?>
							<div class="input">
								<span>Рейтинг*</span>
								<div class="rating">
									<div class="rating__item rating__item_set">
										<div class="rating__body">
											<div class="rating__active"></div>
											<div class="rating__items">
												<input type="radio" value="1" name="rating" required>
												<input type="radio" value="2" name="rating" required>
												<input type="radio" value="3" name="rating" required>
												<input type="radio" value="4" name="rating" required>
												<input type="radio" value="5" name="rating" required>
											</div>
										</div>
										<div class="rating__value">0</div>
									</div>
								</div>
							</div>
							<textarea class="textarea" name="message" cols="30" rows="5" placeholder="Ваш отзыв*" required data-columns="full"></textarea>
							<label class="small-text checkbox" data-columns="full">
								<input class="checkbox__input" type="checkbox" checked required>
								<span class="checkbox__text">Нажимая на кнопку “Отправить”, Вы соглашаетесь с <a href="/policy" class="underline" target="_blank">Политикой конфиденциальности</a></span>
							</label>
							<button class="button submit justify-center" data-columns="full">Отправить</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

	<!-- История версий комментария -->
	<div class="modal modal-comment-history" id="modal-comment-history">
		<div class="modal__dialog">
			<div class="modal__content modal__content-auto-width">
				<button class="modal__close" type="button" data-modal-close>
					<svg class="close">
						<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg?ver=<?=spriteVersion()?>#close"></use>
					</svg>
				</button>
				<div class="title-2 modal__title">История версий</div>
				<div class="text-block modal-comment-history__content">
				</div>
			</div> 
		</div>
	</div>

	<!-- Оставить жалобу на комментарий -->
	<div class="modal modal-comment-report" id="modal-comment-report">
		<div class="modal__dialog">
			<div class="modal__content">
				<button class="modal__close" type="button" data-modal-close>
					<svg class="close">
						<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg?ver=<?=spriteVersion()?>#close"></use>
					</svg>
				</button>
				<div class="form modal__form">
					<div class="title-2 modal__title">Оставить жалобу</div>
					<form>
						<div class="form__fields" style="--columns: 2">
							<textarea class="textarea" name="message" cols="30" rows="5" placeholder="Опишите причину*" required data-columns="full"></textarea>
							<button class="button submit justify-center" data-columns="full">Отправить</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

	<!-- Полный отзыв -->
	<div class="modal modal-reviews" id="modal-reviews">
		<div class="modal__dialog">
			<div class="modal__content">
				<button class="modal__close" type="button" data-modal-close>
					<svg class="close">
						<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg?ver=<?=spriteVersion()?>#close"></use>
					</svg>
				</button>
				<div class="modal-reviews__wrapper"></div>
			</div>
		</div>
	</div>

	<!-- Окно благодарности -->
	<div class="modal modal-thank" id="modal-thank">
		<div class="modal__dialog" role="document">
			<div class="modal__content">
				<button class="modal__close" data-modal-close>
					<svg class='close'>
						<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg?ver=<?=spriteVersion()?>#close"></use>
					</svg>
				</button>
				<div class="modal__title">Отправлено</div>
				<img src="<?=get_template_directory_uri()?>/assets/img/icons/check.svg" width="60" alt="">
			</div>
		</div>
	</div>
</div> 
 
<?
	wp_footer(); 
?>   

<!-- Отзывы -->
<script>
	document.addEventListener('DOMContentLoaded', () => {
		const form = document.querySelector('.modal-feedback form');
 
		form.addEventListener('submit', async e => {
			e.preventDefault();

			const formData = new FormData(form);

			const response = await fetch('/wp-admin/admin-ajax.php', {
				method: 'POST',
				body: new URLSearchParams({
					action: 'send_feedback',
					...Object.fromEntries(formData)
				})
			}); 

			const result = await response.json();
  
			if (result.success){
				successSubmitForm(form)
			}
		});  
	});
</script>
 
<script>
	document.addEventListener('keydown', e => {

		const runTest = async (steps) => {
			for (let step of steps) {
				try {
					await step()
					console.log('✅', step.name)
				} catch (err) {
					console.error('❌', step.name, err)
					alert('Ошибка')
					break
				}
			}
		}

		const wait = (ms) => new Promise(res => setTimeout(res, ms))

		// ---------- F1 ----------
		if (e.code === 'F1') {
			runTest([
				async function addComment() {
					const textarea = document.querySelector('.comment-add textarea')
					const buttonAdd = document.querySelector('.comment-add button')
					if (!textarea || !buttonAdd) throw 'Невозможно добавить комментарий'
					textarea.value = 'Тестовый комментарий F1'
					buttonAdd.click()
					await wait(700)
				},
				async function likeComment() {
					const comments = document.querySelectorAll('.comment')
					const newComment = Array.from(comments).find(c => c.textContent.includes('Тестовый комментарий F1'))
					if (!newComment) throw 'Комментарий не найден для лайка'
					const likeBtn = newComment.querySelector('.comment__like')
					if (!likeBtn) throw 'Лайк не найден'
					likeBtn.click()
					await wait(300)
				},
				async function replyComment() {
					const comments = document.querySelectorAll('.comment')
					const newComment = Array.from(comments).find(c => c.textContent.includes('Тестовый комментарий F1'))
					if (!newComment) throw 'Комментарий не найден для ответа'
					const replyBtn = newComment.querySelector('.comment__reply')
					if (!replyBtn) throw 'Кнопка ответ не найдена'
					replyBtn.click()
					await wait(300)
					const textarea = newComment.querySelector('.comment-add textarea')
					const buttonAdd = newComment.querySelector('.comment-add button')
					if (!textarea || !buttonAdd) throw 'Не найдено поле ответа'
					textarea.value = 'Ответ к тестовому комменту F1'
					buttonAdd.click()
					await wait(700)
				}
			])
		}

		// ---------- F2 ----------
		if (e.code === 'F2') {
			runTest([
				async function addComment() {
					const textarea = document.querySelector('.comment-add textarea')
					const buttonAdd = document.querySelector('.comment-add button')
					if (!textarea || !buttonAdd) throw 'Невозможно добавить комментарий'
					textarea.value = 'Тестовый комментарий F2'
					buttonAdd.click()
					await wait(700)
				},
				async function likeComment() {
					const comments = document.querySelectorAll('.comment')
					const newComment = Array.from(comments).find(c => c.textContent.includes('Тестовый комментарий F2'))
					if (!newComment) throw 'Комментарий не найден для лайка'
					const likeBtn = newComment.querySelector('.comment__like')
					if (!likeBtn) throw 'Лайк не найден'
					likeBtn.click()
					await wait(300)
				},
				async function replyCommentParent() {
					const comments = document.querySelectorAll('.comment')
					const newComment = Array.from(comments).find(c => c.textContent.includes('Тестовый комментарий F2'))
					if (!newComment) throw 'Комментарий не найден для ответа'
					const replyBtn = newComment.querySelector('.comment__reply')
					if (!replyBtn) throw 'Кнопка ответ не найдена'
					replyBtn.click()
					await wait(300)
					const textarea = newComment.querySelector('.comment-add textarea')
					const buttonAdd = newComment.querySelector('.comment-add button')
					if (!textarea || !buttonAdd) throw 'Не найдено поле ответа'
					textarea.value = 'Ответ 1 к тестовому комменту F2'
					buttonAdd.click()
					await wait(700)
				},
				async function replyCommentChild() {
					const comments = document.querySelectorAll('.comment')
					const parentReply = Array.from(document.querySelectorAll('.comment__text'))
					.find(el => el.textContent.includes('Ответ 1 к тестовому комменту F2'))
					?.closest('.comment')
					if (!parentReply) throw 'Первый ответ не найден для вложенного ответа'
					const replyBtn = parentReply.querySelector('.comment__reply')
					if (!replyBtn) throw 'Кнопка ответ не найдена'
					replyBtn.click()
					await wait(300)
					const textarea = parentReply.querySelector('.comment-add textarea')
					const buttonAdd = parentReply.querySelector('.comment-add button')
					if (!textarea || !buttonAdd) throw 'Не найдено поле ответа'
					textarea.value = 'Ответ 2 к тестовому комменту F2'
					buttonAdd.click()
					await wait(700)
				},
				async function deleteSecondComment() {
					const secondCommentTextEl = Array.from(document.querySelectorAll('.comment__text'))
						.find(el => el.textContent.includes('Ответ 1 к тестовому комменту F2'))
					const secondComment = secondCommentTextEl?.closest('.comment')
					if (!secondComment) throw 'Второй ответ не найден для удаления'
					const deleteBtn = secondComment.querySelector('.comment__delete')
					if (!deleteBtn) throw 'Кнопка удаления не найдена'
					deleteBtn.click()
					await wait(700)
				},
				async function deleteParentComment() {
					const parentCommentTextEl = Array.from(document.querySelectorAll('.comment__text'))
						.find(el => el.textContent.includes('Ответ 2 к тестовому комменту F2'))
					const parentComment = parentCommentTextEl?.closest('.comment').closest('.comment')
					if (!parentComment) throw 'Первый ответ не найден для удаления'
					const deleteBtn = parentComment.querySelector('.comment__delete')
					if (!deleteBtn) throw 'Кнопка удаления не найдена'
					deleteBtn.click()
					await wait(700)
				}
			])
		}

	})
</script>

</body> 
</html>   
