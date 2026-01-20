<? if (!comments_open() && !get_comments_number()) return; ?>

<section id="comments" class="section comments">
	<div class="section__top">
		<h2 class="title-2">
			Комментарии
			<span class="gray-text comments__count"> <?=get_comments_number()?> </span>
		</h2>
	</div>

	<div class="comments__content">

		<!-- Контейнер для комментариев -->
		<div class="comments__wrapper"></div>
		<?
			get_template_part('parts/comments/comments-template');
		?>

		<!-- Форма добавления комментария -->
		<div class="comments__top">
			<form class="form comment-add" method="post" action="<?=site_url('/wp-comments-post.php');?>">
				<div class="form__fields comment-add__fields" style="--columns: 2">
					<? 
						$current_user = wp_get_current_user();
						$current_user_name = $current_user->display_name ? $current_user->display_name : $current_user->user_nicename;
						$current_user_email = $current_user->user_email;

						if (is_user_logged_in()) {
							?>
								<input type="hidden" name="author" value="<?=esc_attr($current_user_name)?>">
								<input type="hidden" name="email" value="<?=esc_attr($current_user_email)?>">
							<?
						} else {
							?>
								<input type="hidden" name="author" required value="<?=esc_attr($current_user_name)?>">
								<input type="hidden" name="email" required value="<?=esc_attr($current_user_email)?>">
							<? 
						} 
					?>

					<div class="comment-add__row" data-columns="full">
						<textarea name="comment" class="textarea" placeholder="Написать комментарий" required data-columns="full"></textarea>
						<button type="submit" class="button comment-add__button" aria-label="Отправить комментарий"></button>
					</div>

					<input 
						type="hidden" 
						name="comment_post_ID" 
						value="<?=get_the_ID()?>" 
						id="comment_post_ID"
					>

					<input 
						type="hidden" 
						name="comment_parent" 
						id="comment_parent" 
						value="0"
					>

					<? 
						do_action('comment_form', get_the_ID());
					?>
				</div>
			</form>
		</div>

		<script>
			window.commentsData = <?= json_encode(array_map(function($c) {
				$user_id = get_current_user_id();
				$avatar = '';

				if ((int)$c->user_id) {
					$acf_avatar = get_field('аватар', 'user_' . $c->user_id);
					if (!empty($acf_avatar['sizes']['thumbnail'])) {
						$avatar = $acf_avatar['sizes']['thumbnail'];
					}
				} else {
					$avatar = get_avatar_url($c->comment_author_email, ['size' => 64]);
				}

				$is_deleted = (wp_get_comment_status($c) === 'trash');
				$reactions = get_comment_reactions_cookie();
				$is_own_like = !empty($reactions[$c->comment_ID]['like']);
				$is_own_dislike = !empty($reactions[$c->comment_ID]['dislike']);

				return [
					'id' => (int)$c->comment_ID,
					'author' => $is_deleted ? '' : ($c->comment_author ?: 'Гость'),
					'author_id' => (int)$c->user_id,
					'email' => $c->comment_author_email,
					'avatar' => $avatar,
					'text' => $is_deleted ? 'Комментарий удален' : $c->comment_content,
					'date' => get_smart_date($c->comment_date),
					'time' => get_smart_date($c->comment_date, true),
					'fulltime' => $c->comment_date,
					'parent' => (int)$c->comment_parent,
					'likes' => get_comment_likes_count($c->comment_ID),
					'dislikes' => get_comment_dislikes_count($c->comment_ID),
					'is_own_like' => $is_own_like,
					'is_own_dislike' => $is_own_dislike,
					'is_deleted' => $is_deleted,
					'can_delete' => can_delete_comment($c),
					'can_edit' => can_edit_comment($c),
					'has_history' => !empty(get_comment_meta($c->comment_ID, 'comment_edit_history', true))
				];

			}, (function() {

				$post_id = get_the_ID();

				// Все одобренные комментарии
				$approved = get_comments([
					'post_id' => $post_id,
					'status'  => 'approve',
					'order'   => 'ASC',
				]);

				// Удалённые комментарии, у которых есть ответы
				$trashed_with_replies = get_comments([
					'post_id' => $post_id,
					'status'  => 'trash',
					'order'   => 'ASC',
				]);

				$trashed_with_replies = array_filter($trashed_with_replies, function($comment) {

					$children = get_comments([
						'parent' => $comment->comment_ID,
						'status' => 'approve',
						'number' => 1,
					]);

					return !empty($children);
				});

				return array_merge($approved, $trashed_with_replies);

			})())) ?>;

			window.currentUser = {
				id: <?=get_current_user_id()?>,
				name: <?=json_encode(is_user_logged_in() ? wp_get_current_user()->display_name : '')?>,
				email: <?=json_encode(is_user_logged_in() ? wp_get_current_user()->user_email : '')?>,
				role: <?=json_encode(is_user_logged_in() ? wp_get_current_user()->roles[0] : '')?>,
				avatar: <?=get_current_user_id()?> ? '<?=get_field('аватар', 'user_' . get_current_user_id())['sizes']['thumbnail']?>': 
				'<?=get_avatar_url("", ["size"=>64])?>',
			}
		</script>
	</div>
</section>
