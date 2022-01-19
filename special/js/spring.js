// show pagetop
$('#page-top').hide();
$(window).scroll(function () {
	if ($(this).scrollTop() > 500) {
		$('#page-top').fadeIn(1000);
	} else {
		$('#page-top').fadeOut(300);
	}
});

// show floating
$('.floating').hide();
$(window).scroll(function () {
	if ($(this).scrollTop() > 50) {
		$('.floating').fadeIn(1000);
	} else {
		$('.floating').fadeOut(300);
	}
});

// uservoice swiper-slide
$(function () {
	var voice = new Swiper('.uservoice .swiper-container', {
		loop: true,
		slidesPerView: 3.5,
		spaceBetween: 16,
		centeredSlides: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		breakpoints: {
			767: {
				slidesPerView: 1.5,
				spaceBetween: 20,
			},
		},
	});
});

// joboffer swiper-slide
var scaleWindowW = function () {
	var w = window.innerWidth || document.documentElement.clientWidth || 0;
	return w;
};
window.addEventListener(
	'DOMContentLoaded',
	function () {
		var swiperjob = undefined;
		var swiperEl = document.querySelector('.joboffer-slider .swiper-container');
		var swiperWrapper = document.getElementsByClassName('swiper-wrapper');
		var swiperSlide = document.getElementsByClassName('swiper-slide');

		var initSwiper = function () {
			if (scaleWindowW() < 767 && swiperjob == undefined) {
				swiperjob = new Swiper(swiperEl, {
					pagination: '.swiper-pagination',
					nextButton: '.swiper-button-next',
					prevButton: '.swiper-button-prev',
					loop: false,
					slidesPerView: 1.5,
					spaceBetween: 20,
					centeredSlides: true,
				});
			} else if (scaleWindowW() >= 767 && swiperjob != undefined) {
				swiperjob.destroy();
				swiperjob = undefined;
				for (var i = 0; i < swiperWrapper.length; i++) {
					swiperWrapper[i].removeAttribute('style');
				}
				for (var i = 0; i < swiperSlide.length; i++) {
					swiperSlide[i].removeAttribute('style');
				}
			}
		};
		initSwiper();

		window.addEventListener('resize', initSwiper);
	},
	false
);

// smooth scroll
$(function () {
	$('a[href^="#"]').click(function () {
		var href = $(this).attr('href');
		var target = $(href == '#' || href == '' ? 'html' : href);
		var position = target.offset().top;
		$('html, body').animate({ scrollTop: position }, 500, 'swing');
		return false;
	});
});

$(function () {
	// TOP ttl
	ScrollReveal().reveal('.mv-balloon', {
		distance: '100px',
		origin: 'top',
		duration: '2000',
	});
	ScrollReveal().reveal('.mv-ttl', {
		distance: '50px',
		origin: 'bottom',
		duration: '2000',
		delay: '1000',
	});
	// CTA btn
	ScrollReveal().reveal('.cta .btn-entry', {
		distance: '50px',
		origin: 'bottom',
		duration: '1000',
	});
	// joboffer-slider
	ScrollReveal().reveal('.joboffer-slider', {
		distance: '50px',
		origin: 'bottom',
		viewFactor: '0.4',
		duration: '500',
		easing: 'linear',
	});
	// merit
	ScrollReveal().reveal('.cloud', {
		origin: 'left',
		distance: '50px',
		duration: '500',
		reset: 'true',
	});
});

// motion animation
var EffectH = 100;
$(window).on('scroll load', function () {
	var scTop = $(this).scrollTop();
	var scBottom = scTop + $(this).height();
	var effectPos = scBottom - EffectH;
	$('.js-scroll').each(function () {
		var thisPos = $(this).offset().top;
		if (thisPos < effectPos) {
			$.when($(this).addClass('show')).done(function () {
				$(this)
					.delay(500)
					.queue(function () {
						$(this).addClass('done');
					});
			});
		}
	});
});

// accordion
$(function () {
	var cardBody = '.card-body';

	$(window).on('resize', function () {
		if (scaleWindowW() > 767) {
			$(cardBody).addClass('is-pc');
		} else {
			$(cardBody).removeClass('is-pc');
		}
	});

	$('.card-head').click(function () {
		if (scaleWindowW() < 768) {
			$(this).toggleClass('active').next(cardBody).fadeToggle();
		}
	});
});

$(document).ready(function () {
	//initialize paroller.js
	$('[data-paroller-factor]').paroller();
	//initialize paroller.js and set options for elements with .paroller class
	$('.paroller-example').paroller({
		factorXs: 0.1,
		factorSm: 0.2,
		factorMd: -0.3,
		factorLg: -0.4,
		factorXl: -0.6,
		factor: -0.5,
		type: 'foreground',
		direction: 'horizontal',
		transition: 'transform .1s linear',
	});
});

// スクロールのドラッグ有効化
jQuery.prototype.mousedragscrollable = function () {
	let target;
	$(this).each(function (i, e) {
		$(e).mousedown(function (event) {
			event.preventDefault();
			target = $(e);
			$(e).data({
				down: true,
				move: false,
				x: event.clientX,
				y: event.clientY,
				scrollleft: $(e).scrollLeft(),
				scrolltop: $(e).scrollTop(),
			});
			return false;
		});
		$(e).click(function (event) {
			if ($(e).data('move')) {
				return false;
			}
		});
	});
	$(document)
		.mousemove(function (event) {
			if ($(target).data('down')) {
				event.preventDefault();
				let move_x = $(target).data('x') - event.clientX;
				let move_y = $(target).data('y') - event.clientY;
				if (move_x !== 0 || move_y !== 0) {
					$(target).data('move', true);
				} else {
					return;
				}
				$(target).scrollLeft($(target).data('scrollleft') + move_x);
				$(target).scrollTop($(target).data('scrolltop') + move_y);
				return false;
			}
		})
		.mouseup(function (event) {
			$(target).data('down', false);
			return false;
		});
};
$('.o-scroll').mousedragscrollable();
