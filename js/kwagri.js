$.fn.extend({
	animateCss: function (animationName) {
	  var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
	  $(this).addClass('animated ' + animationName).one(animationEnd, function () {
		$(this).removeClass('animated ' + animationName);
	  });
	}
  });
  $(function () {
	$('a[href*="#"]:not([href="#"])').click(function () {
	  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
		  $('html, body').animate({
			scrollTop: target.offset().top
		  }, 1000);
		  return false;
		}
	  }
	});
  });

// Side Nav Script goes here
$(document).ready(function () {
	$(".button-collapse").sideNav({
		menuWidth: 200
	});
});

(function ($) {
	'use strict';

	jQuery(document).on('ready', function () {

		/*PRELOADER JS*/
		$(window).on('load', function () {
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow');
		});
		/*END PRELOADER JS*/

		/*START MENU JS*/
		if ($(window).scrollTop() > 200) {
			$('.fixed-top').addClass('menu-bg');
		} else {
			$('.fixed-top').removeClass('menu-bg');
		}
		$(window).on('scroll', function () {
			if ($(window).scrollTop() > 70) {
				$('.site-navigation, .header-white, .header').addClass('navbar-fixed');
			} else {
				$('.site-navigation, .header-white, .header').removeClass('navbar-fixed');
			}
		});
		/*END MENU JS*/

		/*START HOME SLIDER JS*/
		jQuery("#home-slider").flexslider({
			directionNav: false,
			controlnav: true,
		});
		/*END HOME SLIDER JS*/

		/*START HOME WATER JS*/
		if (typeof $.fn.ripples == 'function') {
			try {
				$('.ripple').ripples({
					resolution: 500,
					perturbance: 0.01
				});
			} catch (e) {
				$('.error').show().text(e);
			}
		}
		/*END HOME WATER JS*/

		/* START COUNTDOWN JS*/
		$('.counter_feature').on('inview', function (event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.counter-num').each(function () {
					var $this = $(this);
					$({
						Counter: 0
					}).animate({
						Counter: $this.text()
					}, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});
		/* END COUNTDOWN JS */

		/*START PACKAGE JS*/
		$("#package-slider").owlCarousel({
			items: 2,
			itemsDesktop: [1000, 3],
			itemsDesktopSmall: [980, 2],
			itemsTablet: [768, 1],
			itemsMobile: [650, 1],
			pagination: true,
			navigation: false,
			slideSpeed: 1000,
			autoPlay: false
		});
		/*END PACKAGE JS*/

		/*START DISCOUNT JS*/
		$("#discount-slider").owlCarousel({
			items: 3,
			itemsDesktop: [1000, 3],
			itemsDesktopSmall: [980, 2],
			itemsTablet: [768, 2],
			itemsMobile: [650, 1],
			pagination: true,
			navigation: false,
			slideSpeed: 1000,
			autoPlay: false
		});
		/*END DISCOUNT JS*/

		/*START GALLERY JS*/
		$("#gallery-slider").owlCarousel({
			items: 1,
			itemsDesktop: [1000, 3],
			itemsDesktopSmall: [980, 2],
			itemsTablet: [768, 1],
			itemsMobile: [650, 1],
			pagination: true,
			navigation: false,
			slideSpeed: 1000,
			autoPlay: false
		});
		/*END GALLERY JS*/

		/*START TESTIMONIAL JS*/
		$("#testimonial-slider").owlCarousel({
			items: 3,
			itemsDesktop: [1000, 3],
			itemsDesktopSmall: [980, 2],
			itemsTablet: [768, 2],
			itemsMobile: [650, 1],
			pagination: true,
			navigation: false,
			slideSpeed: 1000,
			autoPlay: false
		});
		/*END TESTIMONIAL JS*/

		/*START PARTNER LOGO*/
		$('.partner').owlCarousel({
			autoPlay: 5000, //Set AutoPlay to 3 seconds
			items: 5,
			itemsDesktop: [1199, 3],
			itemsDesktopSmall: [979, 3]
		});
		/*END PARTNER LOGO*/

		/*START GOOGLE MAP*/
		function initialize() {
			var mapOptions = {
				zoom: 15,
				scrollwheel: false,
				center: new google.maps.LatLng(-37.7622470161679, 145.06004333496094)
			};
			var map = new google.maps.Map(document.getElementById('map'),
				mapOptions);
			var marker = new google.maps.Marker({
				position: map.getCenter(),
				icon: 'assets/img/map_pin.png',
				map: map
			});
		}
		google.maps.event.addDomListener(window, 'load', initialize);
		/*END GOOGLE MAP*/

	});

	/* START PARALLAX JS */
	(function () {

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

		} else {
			$(window).stellar({
				horizontalScrolling: false,
				responsive: true
			});
		}

	}());
	/* END PARALLAX JS  */
	$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});



})(jQuery);