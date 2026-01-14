<template id="comment-template">
	<article class="comment" itemscope itemtype="https://schema.org/Comment">
		<div class="comment__content">
			<div class="comment__header">
				<div class="comment__author" itemprop="author" itemscope itemtype="https://schema.org/Person">
					<img class="comment__author-img" width="60" height="60" alt="" loading="lazy" decoding="async" data-avatar>
					<span class="comment__author-name" itemprop="name" data-author></span>
					<time class="gray-text comment__date" itemprop="datePublished" title="" data-date></time>
				</div>
			</div>
			<div class="comment__text" itemprop="text" data-text>
				<p></p>
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
				<button class="hover-active comment__button" aria-label="" data-reply>
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
