<?
	get_header();
?>
 
<div class="section text-block">
	<div class="container">
		<h1 class="title"><? the_title() ?></h1>
		<?
			while (have_posts()): the_post();
				the_content();
			endwhile;
		?>
	</div>
</div>

<?
	get_footer();
?>
