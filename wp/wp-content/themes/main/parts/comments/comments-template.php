<template id="comment-template">
	<article class="comment" itemscope itemtype="https://schema.org/Comment">
		<div class="comment__content">
			<div class="comment__header">
				<div class="comment__author" itemprop="author" itemscope itemtype="https://schema.org/Person">
					<img class="comment__author-img" width="60" height="60" alt="" loading="lazy" decoding="async" data-avatar>
					<span class="comment__author-name" itemprop="name" data-author></span>
					<time class="gray-text comment__date" itemprop="datePublished" title="" data-date></time>
				</div>
				<div class="context-menu" data-context>
					<button class="context-menu__button" type="button">
						<svg class="dots-icon" aria-hidden="true">
							<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg?ver=<?=spriteVersion()?>#dots"></use>
						</svg>
					</button>
					<div class="context-menu__list" data-context-menu data-tab-focus=".context-menu__button,.active">
						<button class="context-menu__item" type="button" data-comment-edit>Редактировать</button>
						<button class="context-menu__item" type="button" data-comment-history>История версий</button>
						<button class="context-menu__item" type="button">Поделиться</button>
						<button class="context-menu__item" type="button" data-comment-report>Пожаловаться</button>
					</div>
				</div>
			</div>
			<div class="comment__text" itemprop="text" data-text contenteditable="false">
				<p></p>
			</div>
			<div class="comment__edit-actions" data-comment-edit-actions>
				<div class="flex" data-tab-focus=".comment__edit-actions,.active">
					<button class="button button_small button_border" type="button" data-cancel-edit>Отменить</button>
					<button class="button button_small" type="button" data-save-edit>Сохранить</button>
				</div>
			</div>
			<div class="gray-text comment__meta">
				<button class="hover-active comment__like" aria-label="" data-like>
					<svg aria-hidden="true">
						<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg?ver=<?=spriteVersion()?>#like"></use>
					</svg>
					<span itemprop="upvoteCount" data-like-count>0</span>
				</button>
				<button class="hover-active comment__dislike" aria-label="" data-dislike>
					<svg aria-hidden="true">
						<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg?ver=<?=spriteVersion()?>#dislike"></use>
					</svg>
					<span data-dislike-count>0</span>
				</button>
				<button class="hover-active comment__reply" aria-label="" data-reply>
					<svg class="comment-icon">
						<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg?ver=<?=spriteVersion()?>#comment"></use>
					</svg>
					<span>Ответить</span>
				</button>
				<button class="hover-active comment__delete" aria-label="" data-delete>
					<svg class="close-icon" aria-hidden="true">
						<use xlink:href="<?=get_template_directory_uri()?>/assets/img/sprite.svg?ver=<?=spriteVersion()?>#close"></use>
					</svg>
					<span>Удалить</span>
				</button>
			</div>
		</div>
	</article>
</template>
