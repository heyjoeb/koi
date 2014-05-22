$(document).ready(function(){
	/* jshint strict: false */
	/* jshint camelcase: false */
	/* jshint unused:false */
	/* jshint sub:true */


    // CALENDARIO //
    $('.datepicker').datepicker({
	    language: 'es'
	});

	// ADD SLIDEDOWN ANIMATION TO DROPDOWN //
	$('.dropdown').on('show.bs.dropdown', function(){
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
	});


	// ADD SLIDEUP ANIMATION TO DROPDOWN //
	$('.dropdown').on('hide.bs.dropdown', function(){
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
	});

	// DROPDOWN //
	$('.dropdown-toggle').dropdown();

	// MASONRY //	
	var $container = $('#grid');
	// initialize
	$container.masonry({
		columnWidth: '.grid-sizer',
		itemSelector: '.item',
		gutter: 15
	});

	// DATEPICKER //
	$('.datepicker').datepicker({
	    language: 'es'
	});

	// CUSTOM SELECT //
	$('select').customSelect();

	// CUSTOM SCROLL BAR CATEGORÍAS MENÚ //
	$('.categories-menu').mCustomScrollbar({
		horizontalScroll:true,
		theme:'dark-thick',
		scrollButtons:{
			enable:true
        }
	});

	// FANCYBOX //
	$('.wrapper-item').fancybox({
		padding : 0,
		openEffect  : 'elastic'
	});
});
