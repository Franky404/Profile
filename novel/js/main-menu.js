// BEGIN SHOW/HIDE MAIN MENU
jQuery('.menu-button').on('touchstart click', function(e) {
'use strict';
e.preventDefault();

if(e.type === "touchstart") {

	/* touchstart events */
	if(jQuery('#menu').hasClass('menu-active'))
	{

		/* enable scroll */
		setTimeout(function(){
			jQuery('body').removeClass('overflow-hidden');
			jQuery('html').removeClass('overflow-hidden');
		},500);

		/* hide overlay div */
		jQuery('#menu-open-overlay').removeClass('menu-open-overlay-active');

		/* page background color */
		jQuery('.custom-backgrounds').removeClass('custom-backgrounds-fade');

		/* menu elements */
		setTimeout(function(){
			jQuery("#menu").removeClass("menu-active");
		},100);

		/* content elements */
		jQuery('.wrapper-outer').removeClass('wrapper-outer-active-position');
		jQuery('.wrapper-outer').removeClass('wrapper-outer-active-scale');

		/* show .showing */
		jQuery('.showing').removeClass('showing-hide');

		/* show .post-nav */
		jQuery('.post-nav').removeClass('post-nav-fade');
		jQuery('.post-nav').removeClass('post-nav-hide');

	} else {

		/* toggle overlay div */
		jQuery('#menu-open-overlay').addClass('menu-open-overlay-active');

		/* page background color */
		jQuery('.custom-backgrounds').addClass('custom-backgrounds-fade');

		/* content elements */
		jQuery('.wrapper-outer').addClass('wrapper-outer-active-scale');
		jQuery('.wrapper-outer').addClass('wrapper-outer-active-position');

		/* toggle .showing */
		jQuery('.showing').addClass('showing-hide');
		
		/* toggle .post-nav */
		jQuery('.post-nav').addClass('post-nav-fade');
		setTimeout(function(){
			jQuery('.post-nav').addClass('post-nav-hide');
		},500);

		/* menu elements */
		jQuery('#menu').addClass('menu-active');

		/* disable scroll */
		setTimeout(function(){
			jQuery('body').addClass('overflow-hidden');
			jQuery('html').addClass('overflow-hidden');
		},750);

	}

} else if(e.type === "click") {

	/* click events */
	if(jQuery('#menu').hasClass('menu-active'))
	{

		/* enable scroll */
		setTimeout(function(){
			jQuery('body').removeClass('overflow-hidden');
			jQuery('html').removeClass('overflow-hidden');
		},500);

		/* hide overlay div */
		jQuery('#menu-open-overlay').removeClass('menu-open-overlay-active');

		/* page background color */
		jQuery('.custom-backgrounds').removeClass('custom-backgrounds-fade');

		/* menu elements */
		setTimeout(function(){
			jQuery("#menu").removeClass("menu-active");
		},100);

		/* content elements */
		jQuery('.wrapper-outer').removeClass('wrapper-outer-active-position');
		jQuery('.wrapper-outer').removeClass('wrapper-outer-active-scale');

		/* show .showing */
		jQuery('.showing').removeClass('showing-hide');

		/* show .post-nav */
		jQuery('.post-nav').removeClass('post-nav-fade');
		jQuery('.post-nav').removeClass('post-nav-hide');

	} else {

		/* toggle overlay div */
		jQuery('#menu-open-overlay').addClass('menu-open-overlay-active');

		/* page background color */
		jQuery('.custom-backgrounds').addClass('custom-backgrounds-fade');

		/* content elements */
		jQuery('.wrapper-outer').addClass('wrapper-outer-active-scale');
		jQuery('.wrapper-outer').addClass('wrapper-outer-active-position');

		/* toggle .showing */
		jQuery('.showing').addClass('showing-hide');
		
		/* toggle .post-nav */
		jQuery('.post-nav').addClass('post-nav-fade');
		setTimeout(function(){
			jQuery('.post-nav').addClass('post-nav-hide');
		},500);

		/* menu elements */
		jQuery('#menu').addClass('menu-active');

		/* disable scroll */
		setTimeout(function(){
			jQuery('body').addClass('overflow-hidden');
			jQuery('html').addClass('overflow-hidden');
		},750);

	}

}
});
// END SHOW/HIDE MAIN MENU

// BEGIN DISABLE TOP-LEVEL MENU ITEM AS LINK
//jQuery('ul.menu > li > a').on('click', function(e) {
//    e.preventDefault();
//});
// END DISABLE TOP-LEVEL MENU ITEM AS LINK

// BEGIN HIDE WHEN CLICKED/TAPPED OUTSIDE MENU
jQuery('#menu-open-overlay').on('click', function() {
'use strict';

	/* enable scroll */
	setTimeout(function(){
		jQuery('body').removeClass('overflow-hidden');
		jQuery('html').removeClass('overflow-hidden');
	},500);

	/* hide overlay div */
	jQuery('#menu-open-overlay').removeClass('menu-open-overlay-active');
		
	/* page background color */
	jQuery('.custom-backgrounds').removeClass('custom-backgrounds-fade');

	/* menu elements */
	jQuery("#menu").removeClass("menu-active");

	/* content elements */
	jQuery('.wrapper-outer').removeClass('wrapper-outer-active-position');
	jQuery('.wrapper-outer').removeClass('wrapper-outer-active-scale');
	
	/* show .showing */
	jQuery('.showing').removeClass('showing-hide');
	
	/* show .post-nav */
	jQuery('.post-nav').removeClass('post-nav-fade');
	jQuery('.post-nav').removeClass('post-nav-hide');

});
// END HIDE WHEN CLICKED/TAPPED OUTSIDE MENU