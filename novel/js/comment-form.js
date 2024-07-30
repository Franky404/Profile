jQuery('#commentform-fields').hide(0);

/* when comment textarea is clicked */
jQuery('#comment').click(function() {
	jQuery('#commentform-fields').show(0).animate({opacity: 1}, 0);
	jQuery('#cancel-comment').show(0);
	jQuery('#respond').addClass('respond-active');
	jQuery('#comment').addClass('comment-active');
	jQuery('#submit').addClass('submit-active');
	jQuery(window).scrollTo( '#comment-wrapper', 400, {offset:-10} );
});
/* when 'reply' link is clicked */
jQuery('.comment-reply-link').click(function() {
	jQuery('#commentform-fields').show(0).animate({opacity: 1}, 0);
	jQuery('#cancel-comment-reply-link, #cancel-comment').show(0);
	jQuery('#respond').addClass('respond-active');
	jQuery('#comment').addClass('comment-active');
	jQuery('#submit').addClass('submit-active');
	jQuery(window).scrollTo( '#comment-wrapper', 400, {offset:-20} );
});
/* when comment is cancelled */
jQuery('#cancel-comment').click(function() {
	jQuery('#commentform-fields').animate({opacity: 0}, 0).hide(0);
	jQuery('#cancel-comment').hide(0);
	jQuery('#respond').removeClass('respond-active');
	jQuery('#comment').removeClass('comment-active');
	jQuery('#submit').removeClass('submit-active');
});
/* when comment reply is cancelled */
jQuery('#cancel-comment-reply-link').click(function() {
	jQuery('#cancel-comment-reply-link').hide(0);
	jQuery('#commentform-fields').show(0).animate({opacity: 1}, 0);
	jQuery(window).scrollTo( '#comment-wrapper', 400, {offset:-10} );
});