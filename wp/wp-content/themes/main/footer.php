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
							<button class="button button_border button_white" type="button" data-modal="popup-call">Связаться с нами</button>
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

<div class="popups">
	<!-- Заказать звонок -->
	<div class="popup popup-call" id="popup-call">
		<div class="popup__dialog">
			<div class="popup__content">
				<button class="popup__close" type="button" data-popup-close>
					<svg class="close">
						<use xlink:href="assets/img/sprite.svg#close"></use>
					</svg>
				</button>
				<div class="form popup__form">
					<div class="title-2 popup__title">Заказать звонок</div>
					<form>
						<input type="hidden" name="info" class="popup-info">
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
	<div class="popup popup-feedback" id="popup-feedback">
		<div class="popup__dialog">
			<div class="popup__content">
				<button class="popup__close" type="button" data-popup-close>
					<svg class="close">
						<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg#close"></use>
					</svg>
				</button>
				<div class="form popup__form">
					<div class="title-2 popup__title">Оставить отзыв</div>
					<form>
						<input type="hidden" name="info" class="popup-info">
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
	<div class="popup popup-comment-history" id="popup-comment-history">
		<div class="popup__dialog">
			<div class="popup__content popup__content-auto-width">
				<button class="popup__close" type="button" data-popup-close>
					<svg class="close">
						<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg#close"></use>
					</svg>
				</button>
				<div class="title-2 popup__title">История версий</div>
				<div class="text-block popup-comment-history__content">
				</div>
			</div> 
		</div>
	</div>

	<!-- Полный отзыв -->
	<div class="popup popup-reviews" id="popup-reviews">
		<div class="popup__dialog">
			<div class="popup__content">
				<button class="popup__close" type="button" data-popup-close>
					<svg class="close">
						<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg#close"></use>
					</svg>
				</button>
				<div class="popup-reviews__wrapper"></div>
			</div>
		</div>
	</div>

	<!-- Окно благодарности -->
	<div class="popup popup-thank" id="popup-thank">
		<div class="popup__dialog" role="document">
			<div class="popup__content">
				<button class="popup__close" data-popup-close>
					<svg class='close'>
						<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg?ver=<?=spriteVersion()?>ver=<?=spriteVersion()?>#close"></use>
					</svg>
				</button>
				<div class="popup__title">Отправлено</div>
				<img src="<?=get_template_directory_uri()?>/assets/img/icons/check.svg" width="60" alt="">
			</div>
		</div>
	</div>
</div> 
 
<?
	wp_footer(); 
?>   
  
<!--Комментарии  -->
<script>
	document.addEventListener('DOMContentLoaded', () => {

		//
		//
		//
		//
		// Общие настройки и данные

		const ajaxUrl = '<?=admin_url("admin-ajax.php")?>'

		const notify = (title = '', text = '', type = 'info', autohide = true, interval = 2500) => {
			new Notify({ title, text, theme: type, autohide, interval })
		}

		const escapeHTML = value => {
			if (!value && value !== 0) return ''
			return String(value)
				.replace(/&/g, '&amp;')
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;')
				.replace(/"/g, '&quot;')
				.replace(/'/g, '&#039;')
		}

		const currentUser = {
			id: <?=get_current_user_id()?>,
			name: <?=json_encode(is_user_logged_in() ? wp_get_current_user()->display_name : '')?>,
			email: <?=json_encode(is_user_logged_in() ? wp_get_current_user()->user_email : '')?>,
			role: <?=json_encode(is_user_logged_in() ? wp_get_current_user()->roles[0] ?? '' : '')?>
		}

		const guestData = JSON.parse(localStorage.getItem('comment_guest') || '{}')

		const getCommentId = (commentEl) => {
			return parseInt(commentEl.id.replace('comment-', ''), 10)
		}

		//
		//
		//
		//
		// Обновление счётчиков

		const updateCommentsUI = () => {
			const wrapper = document.querySelector('.comments__wrapper')
			const counter = document.querySelector('.title-2 .gray-text')

			if (counter) {
				counter.textContent = ' ' + (wrapper?.querySelectorAll('.comment').length || 0)
			}
		}


		//
		//
		//
		//
		// Создание DOM комментария

		const createCommentElement = ({
			id,
			author,
			text,
			avatar,
			date = 'только что',
			likes = 0,
			dislikes = 0,
			can_delete = false,
			show_reply = true
		}) => {
			const template = document.querySelector('#comment-template')
			if (!template) return null

			const element = template.content.firstElementChild.cloneNode(true)
			element.id = `comment-${id}`

			element.querySelector('[data-author]').textContent = author
			element.querySelector('[data-text]').innerHTML = `<p>${text}</p>`

			const avatarEl = element.querySelector('[data-avatar]')
			if (avatarEl) avatarEl.src = avatar

			const dateEl = element.querySelector('[data-date]')
			if (dateEl) dateEl.textContent = date

			const commentData = Array.isArray(window.commentsData)
				? window.commentsData.find(c => c.id === id)
				: null

			const isDeleted = commentData?.is_deleted === true
			const likeBtn = element.querySelector('[data-like]')
			const dislikeBtn = element.querySelector('[data-dislike]')
			const deleteBtn = element.querySelector('[data-delete]')
			const replyBtn = element.querySelector('[data-reply]')
			const editBtn = element.querySelector('[data-comment-edit]')
			const historyBtn = element.querySelector('[data-comment-history]')

			if (likeBtn) {
				likeBtn.dataset.commentId = id
				likeBtn.querySelector('span').textContent = likes
				likeBtn.classList.toggle('active', commentData?.is_own_like === true)
			}

			if (dislikeBtn) {
				dislikeBtn.dataset.commentId = id
				dislikeBtn.querySelector('span').textContent = dislikes
				dislikeBtn.classList.toggle('active', commentData?.is_own_dislike === true)
			}

			if (deleteBtn) {
				deleteBtn.dataset.commentId = id

				const isEditorOrHigher = ['administrator', 'editor'].includes(currentUser.role)

				if ((!can_delete && !isEditorOrHigher) || isDeleted) {
					deleteBtn.remove()
				}
			}

			if (editBtn) {
				const isEditorOrHigher = ['administrator', 'editor'].includes(currentUser.role)

				if ((!can_delete && !isEditorOrHigher) || isDeleted) {
					editBtn.remove()
				}
			}

			if (historyBtn) {
				if (!commentData?.has_history) {
					historyBtn.hidden = true
				} else {
					historyBtn.dataset.commentHistory = id
				}
			}

			if (replyBtn && (!show_reply || (can_delete === false && author === ''))) {
				replyBtn.remove()
			}

			return element
		}


		//
		//
		//
		//
		// Инициализация формы комментариев

		const initForm = form => {
			if (!form || form.dataset.formInitialized) return
			form.dataset.formInitialized = '1'

			const authorInput = form.querySelector('[name="author"]')
			const emailInput = form.querySelector('[name="email"]')
			const submitButton = form.querySelector('button[type="submit"]')

			if (currentUser.id) {
				if (authorInput) authorInput.value = currentUser.name
				if (emailInput) emailInput.value = currentUser.email
			} else {
				if (authorInput && guestData.name) authorInput.value = guestData.name
				if (emailInput && guestData.email) emailInput.value = guestData.email
			}

			form.addEventListener('keydown', e => {
				if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
					e.preventDefault()
					if (form.checkValidity()) form.requestSubmit()
				}
			})

			form.addEventListener('submit', async e => {
				e.preventDefault()

				if (!submitButton) return

				submitButton.disabled = true
				const originalText = submitButton.textContent
				submitButton.textContent = 'Отправка...'

				try {
					const formData = new FormData(form)
					formData.append('action', 'add_comment')

					const response = await fetch(ajaxUrl, {
						method: 'POST',
						credentials: 'same-origin',
						body: formData
					})

					const data = await response.json().catch(() => null)

					const wrapper = document.querySelector('.comments__wrapper')
					const parentId = form.querySelector('[name="comment_parent"]')?.value || 0
					const commentText = form.querySelector('[name="comment"]')?.value || ''

					if (data?.data?.approved) {
						const isEditorOrHigher = ['administrator', 'editor'].includes(currentUser.role)

						const newComment = createCommentElement({
							id: data.data.comment_id,
							author: authorInput?.value || '',
							text: commentText,
							avatar: currentUser.id
								? '<?=get_field('аватар', 'user_' . get_current_user_id())['sizes']['thumbnail']?>'
								: '<?=get_avatar_url("", ["size"=>64])?>',
							can_delete: true,
							show_reply: isEditorOrHigher
						})

						newComment.classList.add('bounceOutTop')

						if (parentId && parentId !== '0') {
							const parent = document.querySelector(`#comment-${parentId}`)
							parent?.querySelector('.comment__content')?.appendChild(newComment)
						} else {
							wrapper?.prepend(newComment)
						}

						setTimeout(() => {
							newComment.classList.remove('bounceOutTop')
						}, 500)
					}

					if (!currentUser.id) {
						const guest = {
							name: authorInput?.value || '',
							email: formData.get('email') || ''
						}

						localStorage.setItem('comment_guest', JSON.stringify(guest))

						if (authorInput) authorInput.value = guest.name
						if (emailInput) emailInput.value = guest.email
					}

					form.reset()

					initReply()
					updateCommentsUI()

					notify(
						data?.data?.approved ? 'Комментарий добавлен' : 'Отправлено на модерацию',
						'',
						'success'
					)

				} catch {
					notify('Ошибка сети', '', 'danger')
				} finally {
					submitButton.disabled = false
					submitButton.textContent = originalText

					document.querySelectorAll('.comment-add').forEach(formEl => {
						if (!formEl.closest('.comments__top')) {
							formEl.remove()
						}
					})
				}
			})
		} 

		document.querySelectorAll('.comment-add').forEach(initForm)


		//
		// 
		//
		//
		// Ответы на комментарии

		const initReply = () => {
			document.querySelectorAll('.comment__reply').forEach(button => {
				if (button.dataset.replyInitialized) return
				button.dataset.replyInitialized = '1'

				button.addEventListener('click', () => {
					const comment = button.closest('.comment')
					if (!comment) return

					const existingForm = comment.querySelector('.comment-add')
					if (existingForm) {
						existingForm.remove()
						return
					}

					document.querySelectorAll('.comment-add').forEach(form => {
						if (!form.closest('.comments__top')) form.remove()
					})

					const commentId = comment.id.replace('comment-', '')
					const postId = document.querySelector('#comment_post_ID')?.value || ''

					const html = `
						<form class="form comment-add">
							<input type="hidden" name="comment_post_ID" value="${escapeHTML(postId)}">
							<input type="hidden" name="comment_parent" value="${escapeHTML(commentId)}">
							<div class="form__fields" style="--columns: 2">
								<input class="input" type="text" name="author" placeholder="Ваше имя" required>
								<input class="input" type="email" name="email" placeholder="Ваш email" required>
								<textarea name="comment" class="textarea" placeholder="Ответ" required data-columns="full"></textarea>
							</div>
							<div class="flex justify-start">
								<button class="button button_small" type="submit">Оставить ответ</button>
							</div>
						</form>
					`

					comment.querySelector('.comment__meta')?.insertAdjacentHTML('afterend', html)

					const newForm = comment.querySelector('form.comment-add')
					initForm(newForm)
					newForm?.querySelector('textarea')?.focus()
				})
			})
		}

		initReply()


		//
		//
		//
		//
		// Рендер комментариев с сервера

		if (Array.isArray(window.commentsData) && window.commentsData.length) {
			const wrapper = document.querySelector('.comments__wrapper')
			wrapper.innerHTML = ''

			const commentsMap = new Map()

			window.commentsData.forEach(comment => {
				const isOwnComment = comment.is_own ||
					(
						currentUser.id === 0 &&
						guestData.email &&
						comment.email &&
						guestData.email === comment.email
					)

				const isDeleted = comment.is_deleted

				const element = createCommentElement({
					id: comment.id,
					author: comment.author,
					text: comment.text.replace(/<br\s*\/?>/gi, '\n'),
					avatar: comment.avatar,
					date: comment.date,
					likes: comment.likes,
					dislikes: comment.dislikes,
					can_delete: isOwnComment && !isDeleted,
					show_reply: !isOwnComment && !isDeleted
				})

				if (!element) return

				if (isDeleted) {
					element.classList.add('comment_deleted')
					element.querySelectorAll('.comment__like, .comment__dislike').forEach(btn => {
						btn.classList.add('disabled')
						btn.addEventListener('click', e => {
							e.preventDefault()
							e.stopImmediatePropagation()
						})
					})
				}

				commentsMap.set(comment.id, { data: comment, el: element })
			})

			// Раскладываем по родителям
			commentsMap.forEach(({ data, el }) => {
				if (data.parent && commentsMap.has(data.parent)) {
					const parentEl = commentsMap.get(data.parent).el
					parentEl.querySelector('.comment__content')?.appendChild(el)
				} else {
					wrapper.appendChild(el)
				}
			})

			initReply()
			updateCommentsUI()
		}


		//
		//
		//
		//
		// Лайки и дизлайки

		const handleReaction = async (button, type, action) => {
			if (!button) return

			const container = button.closest('.gray-text')
			if (!container) return

			const likeBtn = container.querySelector('.comment__like')
			const dislikeBtn = container.querySelector('.comment__dislike')

			button.disabled = true

			try {
				const formData = new FormData()
				formData.append('action', `${action}_${type}`)
				formData.append('nonce', '<?=wp_create_nonce("like_nonce")?>')
				formData.append('comment_id', button.dataset.commentId)

				const response = await fetch(ajaxUrl, { method: 'POST', body: formData })
				const data = await response.json().catch(() => null)

				if (!data?.success) return

				if (data.data.likes !== undefined) {
					likeBtn.querySelector('span').textContent = data.data.likes
				}

				if (data.data.dislikes !== undefined) {
					dislikeBtn.querySelector('span').textContent = data.data.dislikes
				}

				if (action === 'like') {
					likeBtn.classList.toggle('active', data.data.active)
					dislikeBtn.classList.remove('active')
				} else {
					dislikeBtn.classList.toggle('active', data.data.active)
					likeBtn.classList.remove('active')
				}

			} finally {
				button.disabled = false
			}
		}

		document.addEventListener('click', e => {
			const btn = e.target.closest('.comment__like, .comment__dislike')
			if (!btn) return
			e.preventDefault()

			handleReaction(
				btn,
				'comment',
				btn.classList.contains('comment__like') ? 'like' : 'dislike'
			)
		})


		//
		//
		//
		//
		// Удаление комментариев

		const deleteComment = async button => {
			const comment = button.closest('.comment')
			if (!comment || comment.classList.contains('is-deleting')) return

			button.disabled = true
			comment.classList.add('is-deleting')

			try {
				const formData = new FormData()
				formData.append('action', 'delete_comment')
				formData.append('comment_id', button.dataset.commentId)
				formData.append('guest_email', guestData.email || '')
				formData.append('nonce', '<?=wp_create_nonce("delete_comment")?>')

				const response = await fetch(ajaxUrl, { method: 'POST', body: formData })
				const data = await response.json().catch(() => null)

				if (!data?.success) {
					notify('Не удалось удалить комментарий', '', 'danger', false)
					return
				}

				comment.querySelector('.comment__delete')?.remove()

				if (data.data.action === 'deleted') {
					comment.classList.add('bounceOutLeft')
					notify('Комментарий удален', '', 'info')

					setTimeout(() => {
						const parent = comment.closest('.comment')?.parentElement?.closest('.comment')
						comment.remove()
						updateCommentsUI()

						if (parent?.classList.contains('comment_deleted')) {
							const repliesLeft = parent.querySelectorAll(':scope > .comment__content > .comment').length
							if (!repliesLeft) {
								parent.classList.add('bounceOutLeft')
								setTimeout(() => {
									parent.remove()
									updateCommentsUI()
								}, 200)
							}
						}
					}, 600)
				}

				if (data.data.action === 'hidden') {
					comment.querySelector('.comment__text').innerHTML =
						'<em class="gray-text">Комментарий удален</em>'

					comment.querySelectorAll('.comment__like, .comment__dislike').forEach(b => {
						b.classList.add('disabled')
						b.addEventListener('click', e => {
							e.preventDefault()
							e.stopImmediatePropagation()
						})
					})

					comment.querySelector('[data-reply]')?.remove()
					comment.classList.add('comment_deleted')

					updateCommentsUI()
				}

			} catch {
				notify('Ошибка удаления', '', 'danger', false)
			} finally {
				button.disabled = false
				comment.classList.remove('is-deleting')
			}
		}

		document.addEventListener('click', e => {
			const btn = e.target.closest('.comment__delete')
			if (btn) deleteComment(btn)
		})


		// 
		// 
		// 
		// 
		// Редактирование комментариев

		//
		//
		//
		//
		// Редактирование комментариев

		const enableEdit = (comment) => {
			if (comment.classList.contains('is-editing')) return

			const text = comment.querySelector('[data-text]')
			if (!text) return

			comment.dataset.originalText = text.innerHTML

			text.contentEditable = 'true'
			text.focus()

			const range = document.createRange()
			range.selectNodeContents(text)
			range.collapse(false)

			const sel = window.getSelection()
			sel.removeAllRanges()
			sel.addRange(range)

			comment.classList.add('is-editing')

			const actions = comment.querySelector('[data-comment-edit-actions]')
			if (actions) actions.classList.remove('hidden')
		}

		const cancelEdit = (comment) => {
			const text = comment.querySelector('[data-text]')
			if (!text) return

			text.innerHTML = comment.dataset.originalText
			text.contentEditable = 'false'

			comment.classList.remove('is-editing')

			const actions = comment.querySelector('[data-comment-edit-actions]')
			if (actions) actions.classList.add('hidden')

			delete comment.dataset.originalText
		}

		const normalizeContent = (html = '') => {
			return html
				.replace(/<div><br><\/div>/g, '')
				.replace(/<div>/g, '<p>')
				.replace(/<\/div>/g, '</p>')
				.replace(/&nbsp;/g, ' ')
				.trim()
		}

		const finishEdit = (comment, html) => {
			const text = comment.querySelector('[data-text]')
			if (!text) return

			text.innerHTML = html
			text.contentEditable = 'false'

			comment.classList.remove('is-editing')

			const actions = comment.querySelector('[data-comment-edit-actions]')
			if (actions) actions.classList.add('hidden')

			delete comment.dataset.originalText

			const historyBtn = comment.querySelector('[data-comment-history]')
			if (historyBtn) historyBtn.hidden = false
		}

		const saveEdit = async (comment, commentId) => {
			const textEl = comment.querySelector('[data-text]')
			if (!textEl) return

			const newText = normalizeContent(textEl.innerHTML)
			if (!newText) {
				cancelEdit(comment)
				return
			}

			try {
				const res = await fetch('<?=admin_url("admin-ajax.php")?>', {
					method: 'POST',
					headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
					body: new URLSearchParams({
						action: 'edit_comment',
						comment_id: commentId,
						text: newText
					})
				})

				const json = await res.json()
				if (!json.success) throw new Error(json.data || 'Ошибка сохранения')

				finishEdit(comment, newText)
			} catch (e) {
				console.error(e)
				cancelEdit(comment)
			}
		}

		//
		//
		//
		//
		// События

		document.addEventListener('click', (e) => {
			const comment = e.target.closest('.comment')
			if (!comment) return

			if (e.target.closest('[data-comment-edit]')) {
				enableEdit(comment)
				return
			}

			if (e.target.closest('[data-cancel-edit]')) {
				cancelEdit(comment)
				return
			}

			if (e.target.closest('[data-save-edit]')) {
				saveEdit(comment, getCommentId(comment))
			}
		})

		document.addEventListener('keydown', (e) => {
			const comment = document.querySelector('.comment.is-editing')
			if (!comment) return

			if (e.key === 'Escape') cancelEdit(comment)

			if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
				saveEdit(comment, getCommentId(comment))
			}
		})

		//
		//
		//
		//
		// История версий

		const openHistory = async (comment) => {
			const commentId = getCommentId(comment)
			if (!commentId) return

			try {
				const res = await fetch('<?=admin_url("admin-ajax.php")?>', {
					method: 'POST',
					headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
					body: new URLSearchParams({
						action: 'get_comment_history',
						comment_id: commentId
					})
				})

				const json = await res.json()
				if (!json.success) throw new Error(json.data)

				const { history, can_restore } = json.data
				if (!history.length) {
					alert('История версий пустая')
					return
				}

				const popup = document.querySelector('.popup-comment-history')
				const content = popup.querySelector('.popup-comment-history__content')

				content.innerHTML = `
					<table>
						<thead>
							<tr>
								<th>Редактор</th>
								<th>Дата</th>
								<th>Комментарий</th>
								${can_restore ? '<th></th>' : ''}
							</tr>
						</thead>
						<tbody>
							${history.map((h, i) => `
								<tr>
									<td>${h.editor_name || 'Гость'}</td>
									<td>${h.date}</td>
									<td>${h.text}</td>
									${can_restore ? `
										<td>
											<button
												class="button button_mini popup-comment-restore"
												data-comment-id="${h.comment_id}"
												data-version-index="${i}"
												type="button">
												Восстановить
											</button>
										</td>
									` : ''}
								</tr>
							`).join('')}
						</tbody>
					</table>
				`

				fadeIn(popup, true)

				const restoreBtn = content.querySelector('.popup-comment-restore')
				if (restoreBtn) restoreBtn.focus()

			} catch (e) {
				console.error(e)
				alert('Ошибка загрузки истории')
			}
		}

		document.addEventListener('click', (e) => {
			const btn = e.target.closest('[data-comment-history]')
			if (!btn) return

			const comment = btn.closest('.comment')
			if (!comment) return

			openHistory(comment)
		})

		document.addEventListener('click', (e) => {
			const btn = e.target.closest('.popup-comment-restore')
			if (!btn) return

			const tr = btn.closest('tr')
			const text = tr.querySelector('td:nth-child(3)')?.innerHTML

			const comment = document.querySelector(`#comment-${btn.dataset.commentId}`)
			if (!comment) return

			const textEl = comment.querySelector('[data-text]')
			if (textEl) textEl.innerHTML = text

			fadeOut(document.querySelector('.popup-comment-history'), true)
			enableEdit(comment)
		})

	})
</script>
      
<!-- Отзывы -->
<script>
	document.addEventListener('DOMContentLoaded', () => {
		const form = document.querySelector('.popup-feedback form');
 
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
