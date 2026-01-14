<? if (!comments_open() && !get_comments_number()) return; ?>

<section id="comments" class="section comments">
	<div class="section__top">
		<h2 class="title-2">
			Комментарии
			<span class="gray-text"> <?=get_comments_number()?> </span>
		</h2>
	</div>

	<div class="comments__content">

		<!-- Форма добавления комментария -->
		<div class="comments__top">
			<div class="gray-text">Добавьте комментарий</div>
			<form class="form comment-add" method="post" action="<?=site_url('/wp-comments-post.php');?>">
				<div class="form__fields" style="--columns: 2">
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
								<input type="text" name="author" class="input" placeholder="Имя*" required value="<?=esc_attr($current_user_name)?>">
								<input type="email" name="email" class="input" placeholder="Email*" required value="<?=esc_attr($current_user_email)?>">
							<? 
						} 
					?>

					<textarea name="comment" class="textarea" placeholder="Комментарий" required data-columns="full"></textarea>

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

					<button type="submit" class="button button_small comment-add__button">Добавить комментарий</button>
				</div>
			</form>
		</div>

		<!-- Контейнер для комментариев -->
		<div class="comments__wrapper"></div>

		<?
			get_template_part('parts/comments/comments-template');
		?>

		<script>
			window.commentsData = <?= json_encode(array_map(function($c) {

				$user_id = get_current_user_id();
				$is_own = is_user_logged_in() && $user_id === (int)$c->user_id;
				$avatar = '';

				if ((int)$c->user_id) {
					$acf_avatar = get_field('аватар', 'user_' . $c->user_id);
					if (!empty($acf_avatar['sizes']['thumbnail'])) {
						$avatar = $acf_avatar['sizes']['thumbnail'];
					}
				} else {
					$avatar = get_avatar_url($c->comment_author_email, ['size' => 64]);
				}

				return [
					'id' => (int)$c->comment_ID,
					'author' => $c->comment_author ?: 'Гость',
					'author_id' => (int)$c->user_id,
					'email' => $c->comment_author_email,
					'avatar' => $avatar,
					'text' => $c->comment_content,
					'date' => get_smart_date($c->comment_date),
					'parent' => (int)$c->comment_parent,
					'likes' => get_comment_likes_count($c->comment_ID),
					'dislikes' => get_comment_dislikes_count($c->comment_ID),
					'is_own' => $is_own,
					'can_delete' => can_delete_comment($c),
				];

			}, get_comments([
				'post_id' => get_the_ID(),
				'status' => 'approve',
				'order' => 'ASC'
			]))) ?>;
		</script>

	</div>
</section>
