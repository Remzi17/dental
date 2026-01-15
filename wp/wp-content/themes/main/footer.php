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
  
<script>
	document.addEventListener('DOMContentLoaded', () => {
		const notify = (title='', text='', type='info', autohide = true, interval = 2500) => {
			console.log(`🔹 Уведомление: ${title} ${text} [${type}]`) // 🔹 ЛОГ
			new Notify({ title, text, theme:type, autohide, interval })
		}

		const escapeHTML = s => {
			if (!s && s !== 0) return ''
			return String(s)
				.replace(/&/g,'&amp;')
				.replace(/</g,'&lt;')
				.replace(/>/g,'&gt;')
				.replace(/"/g,'&quot;')
				.replace(/'/g,'&#039;') 
		}

		const currentUser = {
			id: <?=get_current_user_id()?>,
			name: <?=json_encode(is_user_logged_in() ? wp_get_current_user()->display_name : '')?>,
			email: <?=json_encode(is_user_logged_in() ? wp_get_current_user()->user_email : '')?>
		}

		const guestData = JSON.parse(localStorage.getItem('comment_guest') || '{}')
		console.log('🔹 Данные гостя из localStorage:', guestData) // 🔹 ЛОГ


		console.log('🔹 Текущий пользователь:', currentUser) // 🔹 ЛОГ

		function createCommentElement({ id, author, text, avatar, date = 'только что', likes = 0, dislikes = 0, can_delete = true, show_reply = true }) {

			console.log(`🔹 Создаем элемент комментария id: ${id}, автор: ${author}, can_delete: ${can_delete}, show_reply: ${show_reply}`) // 🔹 ЛОГ
			const tpl = document.querySelector('#comment-template')
			if (!tpl) return null

			const el = tpl.content.firstElementChild.cloneNode(true)
    
			el.id = `comment-${id}`
			el.querySelector('[data-author]').textContent = author
			el.querySelector('[data-text]').innerHTML = `<p>${text}</p>`
    
			const avatarEl = el.querySelector('[data-avatar]')
			if(avatarEl) avatarEl.src = avatar
			const dateEl = el.querySelector('[data-date]')
			if(dateEl) dateEl.textContent = date

			const commentData = window.commentsData.find(c => c.id === id)

			const is_own_like = commentData ? commentData.is_own_like : false
			const is_own_dislike = commentData ? commentData.is_own_dislike : false
			const likeBtn = el.querySelector('[data-like]')
			const dislikeBtn = el.querySelector('[data-dislike]')
			const deleteBtn = el.querySelector('[data-delete]')
			const replyBtn = el.querySelector('[data-reply]')

			if (likeBtn) { 
				likeBtn.dataset.commentId = id
				likeBtn.querySelector('span').textContent = likes
				// Ставим active только если текущий пользователь поставил лайк
				if (is_own_like) likeBtn.classList.add('active')
				else likeBtn.classList.remove('active')
			}

			if (dislikeBtn) { 
				dislikeBtn.dataset.commentId = id
				dislikeBtn.querySelector('span').textContent = dislikes
				// Ставим active только если текущий пользователь поставил дизлайк
				if (is_own_dislike) dislikeBtn.classList.add('active')
				else dislikeBtn.classList.remove('active')
			}

			if (deleteBtn) {
				deleteBtn.dataset.commentId = id

				// проверка прав: свой комментарий или админ/редактор
				const isOwnComment = can_delete  // твоя текущая логика для "свой"
				const isEditorOrHigher = window.currentUser && ['administrator', 'editor'].includes(window.currentUser.role)

				if (!isOwnComment && !isEditorOrHigher) {
					deleteBtn.remove()
					console.log(`🔹 Удаляем кнопку удаления для id: ${id} (нет прав)`)
				} else {
					console.log(`🔹 Кнопка удаления доступна для id: ${id}`)
				}
			}

			if (replyBtn && (!show_reply || can_delete === false && author === '')) {
				replyBtn.remove()
				console.log(`🔹 Reply убран для id:${id}`)
			}

			return el
		}


		const updateCommentsUI = () => {
			const wrapper = document.querySelector('.comments__wrapper')
			const countEl = document.querySelector('.title-2 .gray-text')
			if (countEl){
				countEl.textContent = ' ' + (wrapper?.querySelectorAll('.comment').length || 0)
				console.log(`🔹 Обновлено количество комментариев: ${countEl.textContent.trim()}`) // 🔹 ЛОГ
			}
		}
 
		const initForm = form => {
			if (!form || form.dataset.formInitialized) return
			form.dataset.formInitialized = '1'

			const authorInput = form.querySelector('[name="author"]')
			const emailInput = form.querySelector('[name="email"]')

			if(currentUser.id) {
				if (authorInput) authorInput.value = currentUser.name
				if (emailInput) emailInput.value = currentUser.email
			} else {
				if (authorInput && guestData.name) authorInput.value = guestData.name
				if (emailInput && guestData.email) emailInput.value = guestData.email
			}

			const btn = form.querySelector('button[type="submit"]')
			if (!btn) return

			form.addEventListener('keydown', event => {
				if (
					event.key === 'Enter' &&
					(event.ctrlKey || event.metaKey)
				) {
					event.preventDefault()

					if (form.checkValidity()) {
						form.requestSubmit()
					}
				}
			})

			form.addEventListener('submit', async e => {
				e.preventDefault()
				btn.disabled = true
				const originalBtnText = btn.textContent
				btn.textContent = 'Отправка...'

				try {
					const formData = new FormData(form)
					formData.append('action', 'add_comment')

					console.log('🔹 Отправка комментария на сервер:', Object.fromEntries(formData.entries())) // 🔹 ЛОГ

					const res = await fetch('<?=admin_url("admin-ajax.php")?>', {
						method: 'POST',
						credentials: 'same-origin',
						body: formData
					})

					if (!res.ok) throw new Error('Bad response')

					const data = await res.json().catch(() => null)
					console.log('🔹 Ответ от сервера:', data) // 🔹 ЛОГ

					const authorName = authorInput.value
					const parentId = form.querySelector('[name="comment_parent"]')?.value || 0
					const wrapper = document.querySelector('.comments__wrapper')
					const commentText = form.querySelector('[name="comment"]');
  
					// Добавляем комментарий в DOM только если он одобрен
					if (data?.data?.approved) {
						console.log('🔹 Создаем DOM элемент для комментария id:' + data.data.comment_id, 'isOwnComment:true')

						const isEditorOrHigher = window.currentUser && ['administrator', 'editor'].includes(window.currentUser.role)

						const newCommentEl = createCommentElement({
							id: data.data.comment_id,
							author: authorName,
							text: commentText?.value || '',
							avatar: currentUser.id 
								? `<?=get_field('аватар', 'user_' . get_current_user_id())['sizes']['thumbnail']?>`
								: '<?=get_avatar_url("", ["size"=>64])?>',
							likes: 0,
							dislikes: 0,
							can_delete: true,
							show_reply: isEditorOrHigher, 
							parentId
						})

						newCommentEl.classList.add('bounceOutTop')

						if (parentId && parentId != '0') {
							const parent = document.querySelector(`#comment-${parentId}`)

							if (parent){
								parent.querySelector('.comment__content').appendChild(newCommentEl)
							} else {
								wrapper.prepend(newCommentEl)
							}
						} else {
							wrapper.prepend(newCommentEl)
						}

						setTimeout(() => {
							newCommentEl.classList.remove('bounceOutTop')
						}, 500);
					}

					form.reset();

					if (!currentUser.id) {
						const newGuest = {
							name: authorName,
							email: formData.get('email') || ''
						}

						localStorage.setItem('comment_guest', JSON.stringify(newGuest))

						const authorField = form.querySelector('[name="author"]')
						const emailField = form.querySelector('[name="email"]')

						if (authorField) authorField.value = newGuest.name
						if (emailField) emailField.value = newGuest.email
					}

					initReply()
					updateCommentsUI()
					notify(data?.data?.approved ? 'Комментарий добавлен' : 'Отправлено на модерацию', '', 'success')

				} catch (err) {
					console.error('🔹 Ошибка отправки комментария:', err) // 🔹 ЛОГ
					notify('Ошибка сети', '', 'danger')
				} finally {
					btn.disabled = false
					btn.textContent = originalBtnText;
					document.querySelectorAll('.comment-add').forEach(commentForm => {
						if (!commentForm.closest('.comments__top')) {
							commentForm.remove()
						}
						
					})
				}
			})
		}

		document.querySelectorAll('.comment-add').forEach(initForm)

		// ===============================
		// Ответ на комментарий
		// ===============================
		const initReply = () => {
			document.querySelectorAll('.comment__reply').forEach(btn => {
				if(btn.dataset.replyInitialized) return
				btn.dataset.replyInitialized = '1'

				btn.addEventListener('click', e => {
					const comment = btn.closest('.comment')
					if(!comment) return
					console.log(`🔹 Нажата кнопка Ответить на комментарий id:${comment.id}`)

					// Если уже есть форма под этим комментом — удаляем и выходим
					const existingForm = comment.querySelector('.comment-add')
					if (existingForm) {
						existingForm.remove()
						return
					}

					// Удаляем все другие формы кроме основной
					document.querySelectorAll('.comment-add').forEach(form => {
						if(form.dataset.formInitialized === '1' && form !== document.querySelector('.comment-add[data-main]') && !form.closest('.comments__top')) {
							form.remove()
						}
					})

					const commentId = comment.id.replace('comment-','')
					const postId = document.querySelector('#comment_post_ID')?.value || ''
					const hasAuthor = localStorage.getItem('comment_guest')
					const showFields = !currentUser.id && !hasAuthor

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
					comment.querySelector('.comment__meta').insertAdjacentHTML('afterend', html)
					initForm(comment.querySelector('form.comment-add'))
					comment.querySelector('form.comment-add textarea')?.focus()
				})
			})
		}

		initReply()

		// ===============================
		// Рендер комментариев с сервера
		// ===============================
		if (Array.isArray(window.commentsData) && window.commentsData.length) {
			const wrapper = document.querySelector('.comments__wrapper')
			wrapper.innerHTML = ''

			const commentsMap = new Map()

			// 1️⃣ Создаем все элементы и складываем в Map
			window.commentsData.forEach(comment => {
				const isOwnComment = comment.is_own ||
				(
					currentUser.id === 0 &&
					guestData.email &&
					comment.email &&
					guestData.email === comment.email
				)

				console.log('🔹 Рендер комментария с сервера', 'id:' + comment.id, 'is_own:' + isOwnComment)

				const isDeleted = comment.is_deleted

				const el = createCommentElement({
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

				if (isDeleted) {
					console.log('🔹 Рендер удалённого комментария id:', comment.id)

					el.classList.add('comment_deleted')

					el.querySelectorAll('.comment__like, .comment__dislike').forEach(b => {
						b.classList.add('disabled')
						b.addEventListener('click', e => {
							e.preventDefault()
							e.stopImmediatePropagation()
							console.log('🔹 Клик по реакции заблокирован (рендер)')
						})
					})
				}


				if (!el) return 

				commentsMap.set(comment.id, {
					data: comment,
					el
				})
			})

			// 2️⃣ Раскладываем по родителям
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

		
		// ===============================
		// Лайки / дизлайки
		// ===============================
		const handleReaction = async (btn, type, action) => {

			console.log('🔹 window.commentsData', window.commentsData);

			if (!btn) return
			const container = btn.closest('.gray-text')
			if (!container) return

			const likeBtn = container.querySelector('.comment__like')
			const dislikeBtn = container.querySelector('.comment__dislike')
			const likeCountEl = likeBtn.querySelector('span')
			const dislikeCountEl = dislikeBtn.querySelector('span')

			const likeActive = likeBtn.classList.contains('active')
			const dislikeActive = dislikeBtn.classList.contains('active')

			btn.disabled = true

			try {
				const formData = new FormData()
				formData.append('action', `${action}_${type}`)
				formData.append('nonce', '<?=wp_create_nonce("like_nonce")?>')

				if (type==='comment') {
					formData.append('comment_id', btn.dataset.commentId)
				}

				const result = await fetch('<?=admin_url("admin-ajax.php")?>', { 
					method: 'POST', 
					body: formData 
				})

				const data = await result.json().catch(() => null)
				console.log('🔹 Ответ сервера для лайка/дизлайка:', data)

				if (!data?.success) return

				// Обновляем счётчики по данным сервера
				if (data.data.likes !== undefined) likeCountEl.textContent = data.data.likes
				if (data.data.dislikes !== undefined) dislikeCountEl.textContent = data.data.dislikes

				// Обновляем активный класс только для текущего пользователя
				if (action === 'like') {
					if (data.data.active) {
						likeBtn.classList.add('active')
						dislikeBtn.classList.remove('active')
					} else {
						likeBtn.classList.remove('active')
					}
				} else {
					if (data.data.active) {
						dislikeBtn.classList.add('active')
						likeBtn.classList.remove('active')
					} else {
						dislikeBtn.classList.remove('active')
					}
				}

			} catch(e) { 
				console.log('Ошибка лайка', e) 
			} finally { 
				btn.disabled = false 
			}
		}

		document.addEventListener('click', e => {
			const btn = e.target.closest('.comment__like, .comment__dislike')
			if (!btn) return
			e.preventDefault()
			handleReaction(btn, 'comment', btn.classList.contains('comment__like') ? 'like' : 'dislike')
		})

		// ===============================
		// Удаление комментариев
		// ===============================
		const deleteComment = async btn => {
			const el = btn.closest('.comment')
			if (!el || el.classList.contains('is-deleting')) return

			btn.disabled = true
			el.classList.add('is-deleting')

			try {
				const formData = new FormData()
				formData.append('action', 'delete_comment')
				formData.append('comment_id', btn.dataset.commentId)
				formData.append('guest_email', guestData.email || '')
				formData.append('nonce', '<?=wp_create_nonce("delete_comment")?>')

				const res = await fetch('<?=admin_url("admin-ajax.php")?>', {
					method: 'POST',
					body: formData
				})

				const data = await res.json().catch(() => null)

				if (data?.success) {
					console.log('🔹 Успешное удаление, action:', data.data.action)

					el.querySelector('.comment__delete')?.remove()

					if (data.data.action === 'deleted') {
						console.log('🔹 Удаление комментария из DOM, id:', btn.dataset.commentId)

						el.classList.add('bounceOutLeft')

						notify('Комментарий удален', '', 'info')

						setTimeout(() => {
							const parentComment = el.closest('.comment')?.parentElement?.closest('.comment')

							el.remove()
							updateCommentsUI()

							// 🔥 ВОТ СЮДА
							if (parentComment && parentComment.classList.contains('comment_deleted')) {
								const replies = parentComment.querySelectorAll(':scope > .comment__content > .comment').length

								console.log(
									'🔹 Проверка родителя после удаления дочернего',
									'parentId:', parentComment.id,
									'repliesLeft:', replies
								)

								if (replies === 0) {
									console.log('🔹 Родитель без ответов — удаляем полностью')
									parentComment.classList.add('bounceOutLeft')

									setTimeout(() => {
										parentComment.remove()
										updateCommentsUI()
									}, 200);
								}
							}
 
						}, 600)
					}

					if (data.data.action === 'hidden') {
						console.log('🔹 Комментарий скрыт (есть ответы), id:', btn.dataset.commentId)

						const textEl = el.querySelector('.comment__text')
						const metaEl = el.querySelector('.comment__meta')

						if (textEl) {
							textEl.innerHTML = '<em class="gray-text">Комментарий удален</em>'
							console.log('🔹 Текст заменён на "Комментарий удален"')
						}

						// убираем лайки / дизлайки
						metaEl?.querySelectorAll('.comment__like, .comment__dislike').forEach(b => {
							b.classList.add('disabled')
							b.addEventListener('click', e => {
								e.preventDefault()
								e.stopImmediatePropagation()
								console.log('🔹 Клик по реакции заблокирован (удалённый комментарий)')
							})
						})

						// убираем "Ответить"
						metaEl?.querySelector('[data-reply]')?.remove()
						console.log('🔹 Кнопка "Ответить" удалена')

						el.classList.add('comment_deleted')
						updateCommentsUI()
					}
				} else {
					notify('Не удалось удалить комментарий', '', 'danger', false)
				}

			} catch (e) {
				console.error('🔹 Ошибка удаления комментария:', e)
				notify('Ошибка удаления', '', 'danger', false)
			} finally {
				btn.disabled = false
				el.classList.remove('is-deleting')
			}
		}
		
		document.addEventListener('click', e => {
			const commentDeleteButton = e.target.closest('.comment__delete')

			if (commentDeleteButton) {
				deleteComment(commentDeleteButton)
			}
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

</body> 
</html>   
