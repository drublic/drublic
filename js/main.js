/**
 *  Author: Hans Christian Reinl
 *
 *  Twitter: @drublic
 *  Mail: info@drublic.de
 *
 */

(function () {

	'use strict';

	var drublic = {};

	drublic.settings = {
	};

	// Hide overlay when ESC is pressed
	document.addEventListener('keyup', function (event) {
		var hash = window.location.hash;

		// If hash is not set
		if (hash === '' || hash === "!") {
			return;
		}

		// If key ESC is pressed
		if (event.keyCode === 27) {
			window.location.hash = '!';
		}

	}, false);


	// Check if we are dealing with mobile
	drublic.isMobile = function () {
		return ( window.innerWidth < 481 );
	};


	// If on mobile, hide address bar
	if (drublic.isMobile()) {
		window.setTimeout( function () {
			window.scrollTo(0, 0);
		}, 0);
	}


}());
