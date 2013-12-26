/**
 *  Author: Hans Christian Reinl
 *
 *  Twitter: @drublic
 *  Mail: info@drublic.de
 *
 */
(function () {

	'use strict';

	// Check if we are dealing with mobile
	var isMobile = function () {
		return ( window.innerWidth < 481 );
	};

	// If on mobile, hide address bar
	if (isMobile()) {
		window.setTimeout( function () {
			window.scrollTo(0, 0);
		}, 0);
	}

	// Check if svg capable
	var candoSvg = function () {
		return !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;
	};

	if (!candoSvg()) {
		document.documentElement.className += ' no-svg';
	}


	var header = document.querySelector('.site-header');
	var headroom  = new Headroom(header, {
		tolerance: 5,
		offset: 50,
		classes: {
			initial: '_',
			pinned: 'slide-down',
			unpinned: 'slide-up'
		}
	});

	headroom.init();

}());
