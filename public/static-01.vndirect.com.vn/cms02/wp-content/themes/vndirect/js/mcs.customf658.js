$ = jQuery;
jQuery(function($){
	// $('body').on('click','.show-submenu',function(){
		// paren = $(this).parents('li.menu-item')
		// $(this).toggleClass('active');
		// paren.find('.sub-menu').slideToggle();;
	// });
	$('body').on('click','.menu-sidebar .menu-item-has-children > a',function(){
		paren = $(this).parent();
		$(this).toggleClass('active');
		paren.find(' > .sub-menu').slideToggle();
		return false;
	});
	
	$('.collapse').on('shown.bs.collapse', function () {
		$(this).parents('.card').find('.card-link').addClass('current');
	});
	$('.collapse').on('hidden.bs.collapse', function () {
		$(this).parents('.card').find('.card-link').removeClass('current');
	});
	
	$('.lcurrent').on('click',function(){
		stex = $('.lcurrent b').text();
		$('.list-language li a').each(function(){
			tex = $(this).text();
			if(tex == stex) {
				$('.list-language li a').show();
				$(this).hide();
			}
		});
		$('.list-language').slideToggle();
		return false;
	});
	
	// $('.list-language li a').on('click',function(){
		// $('.list-language').hide();
		// tex = $(this).text();
		// $('.lcurrent b').text(tex);
		// return false;
	// });
	
	$('.hcollapse').on('click',function(){
		$('.form-collapse').slideToggle();
		$(this).toggleClass('active');
		if($(this).find('span').text() == 'Mở rộng') $(this).find('span').text('Thu gọn');
		else $(this).find('span').text('Mở rộng');
		return false;
	});
	
	$('.click-level').on('click',function(){
		$('.level3').css('display','table-row');
		return false;
	});
	// $('.menu-sidebar .menu-item-has-children').prepend('<span class="show-submenu"><i class="fa fa-angle-right"></i></span>');
	$('.menu-sidebar .menu-item-has-children').each(function() {
		$(this).find('li').each(function() {
			if($(this).hasClass('current-post-ancestor')) {
				$(this).parent().show();
				$(this).parents('.menu-item-has-children').addClass('active');
				$(this).parents('.menu-item-has-children').find('a').addClass('active');
			}
		});
	});
	var slideIndex = $('#menu-menu-tool .current-menu-item').index();
	console.log(slideIndex);
	$('#menu-menu-tool').slick({
		infinite: true,
		slidesToShow: 7,
		slidesToScroll: 1,
		centerMode: true
	});
	$( '#menu-menu-tool' ).slick('slickGoTo', slideIndex, true);
	popupcu();
});
function popupcu() {
	$('.popup-close,.popup-trasnform').on('click',function() {
		$('.popup-custom').fadeOut();
		return false;
	});
}
jQuery(window).load(function(){
	$('.slick-partner').slick({
		infinite: true,
		slidesToShow: 9,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 8,
				slidesToScroll: 1,
				focusOnSelect: true,
			  }
			},
			{
			  breakpoint: 991,
			  settings: {
				slidesToShow: 6,
				slidesToScroll: 1,
				focusOnSelect: true,
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				focusOnSelect: true,
			  }
			},
			{
			  breakpoint: 400,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				focusOnSelect: true,
			  }
			},
		]
	});
	var heher = $('#header').height();
	$('.the-header').css('height',heher );
	$('.menu-mobile').css('top',$('.header-top').height());
	menu_mobile();
});
function menu_mobile() {
	$('.toggle-menu').on('click',function() {
		$('.menu-mobile').toggleClass('active');
		return false;
	});
	$('.menu-mobile > div > ul > li.menu-item-has-children > a').on('click',function() {
		$(this).parents('li').find('ul').slideToggle();
		return false;
	});
	$('.menu-mobile').mouseleave(function() {
		$('.menu-mobile').removeClass('active');
	});
}
jQuery(window).scroll(function(){
	menu_fixed();
});
jQuery(window).resize(function(){
	menu_fixed();
});
var heher = $('#header').height();
function menu_fixed(){
	var hei = $('.header-fixed').height();
	var hei2 = $('.header-top').height();
	var sumh = hei + hei2;
	if($(window).scrollTop() > $('.the-fixed').offset().top ) {
		$('.header-fixed').addClass('active');
		$('.menu-mobile').css('top',hei);
	} else {
		$('.header-fixed').removeClass('active');
		$('.menu-mobile').css('top',hei2);
	}
}