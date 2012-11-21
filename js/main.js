/**
 *  Author: Hans Christian Reinl
 *
 *  Twitter: @drublic
 *  Mail: info@drublic.de
 *
 */


/*global jQuery, window, console, twttr */
(function ($) {

	"use strict";

	var drublic = {};

	drublic.settings = {
	};


	// Check if we are dealing with mobile
	drublic.isMobile = function () {
		return ( $(window).width() < 481 );
	};


	// If on mobile, hide address bar
	if (drublic.isMobile()) {
		window.setTimeout( function () {
			window.scrollTo(0, 0);
		}, 0);
	}


	$(window).on('hashchange', function () {
		var hash = window.location.hash.replace(/#\//, '');

		// Add Class active
		$('.nav').find('.active').removeClass('active');
		$('.nav').find('a[href$="' + hash + '"]').parent().addClass('active');

		// Clarify hash
		$('.backdrop, .close').on('click', function () {
			window.setTimeout( function () {
				window.location.hash = '/home';
			}, 0);
		});

	});

	if (window.location.hash) {
		window.setTimeout( function () {
			$(window).trigger('hashchange');
			$('a[href$="' + window.location.hash + '"]').trigger('click');
		}, 0);
	}



}(jQuery));
