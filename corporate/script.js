$(function () {
	'use strict';

	// scroll
	$('a[href*=#]:not(.inline)').click(function () {
		var speed = 1200;
		var href = $(this).attr('href');
		var target = $(href == '#' || href == '' ? 'html' : href);
		var position = target.offset().top;
		$('html, body').animate({ scrollTop: position }, speed, 'easeInOutQuint');
		return false;
	});

	// scrollIn
	$(window).on('load', function () {
		var $window = $(window);
		var delayHeight = $window.height() / 4;
		$('.scrollIn').each(function () {
			var $elm = $(this);
			var top = $elm.offset().top;
			if (top + delayHeight < $window.scrollTop() + $window.height()) {
				$elm.addClass('fadeInUp');
			}
			$window.on('scroll resize', function () {
				if (top + delayHeight < $window.scrollTop() + $window.height()) {
					$elm.addClass('fadeInUp');
				}
			});
		});
	});

	/* for browser back
	 * ------------------------------------------------------ */
	$(window).unload(function () {});
});
