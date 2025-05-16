$(document).ready(function(){
	
	//Animate On Scroll
	AOS.init({
		disable: 'phone', // 'phone', 'tablet', 'mobile'
		//delay: 550,
		duration: 1500,
		once: true,
	});

	//Scroll Fixed Header
	$(window).bind('scroll', function() {
		 if ($(window).scrollTop() > 100) {
			 $('#site_header').addClass('sticky');
		 }
		 else {
			 $('#site_header').removeClass('sticky');
		 }
	});
	
	$('.busline-toggle').click(function(){
		$(this).toggleClass('menu-show');
		$('#busline_menu').toggleClass('menu-show');
	});

	//Boostrap navbar opens on hover with clickable parent
	if($(window).width()>992){
		$('.navbar .dropdown').hover(function() {
			$(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();

		}, function() {
			$(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();

		});

		$('.navbar .dropdown > a').click(function(){
			location.href = this.href;
		});
	}
	//FancyBox V3
	$('[data-fancybox]').fancybox();

	//Tooltip
	$('[data-toggle="tooltip"]').tooltip();

	//Search Expand
	$('#search_btn').on('click', function(event) {
		if($('#site_wrapper, #search_wrapper').hasClass('expand') == false) {
			$('#site_wrapper, #search_wrapper').addClass('expand');

		} else {
			$('#site_wrapper, #search_wrapper').removeClass('expand');
		}
	});

	$('.search-wrap-close').on('click', function(event) {
		$('#site_wrapper, #search_wrapper').removeClass('expand');
	});	

	//
	$('#carousel_products').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		dots: false,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:3
			},
			1000:{
				items:6
			}
		}
	});
	//
	$('#carousel_who_we_are').owlCarousel({
		loop: false,
		margin: 0,
		nav:true,
		dots: false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	});
	
	//
	$('#slick_center_slider').slick({
	  centerMode: true,
	  centerPadding: '0px',
	  slidesToShow: 3,
	  responsive: [
		{
		  breakpoint: 768,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '0px',
			slidesToShow: 3
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			arrows: false,
			centerMode: true,
			centerPadding: '0px',
			slidesToShow: 1
		  }
		}
	  ]
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});	