/**
 *  Author: Hans Christian Reinl
 *
 *  Twitter: @drublic
 *  Mail: info@drublic.de
 *
 */
/*!
 * CSS Modal
 * http://drublic.github.com/css-modal
 *
 * @author Hans Christian Reinl - @drublic
 * @version 1.0
 */

(function () {

	'use strict';

	// Storage variable
	var modal = {};

	// Store for currently active element
	modal.lastActive = undefined;
	modal.activeElement = undefined;

	// Polyfill addEventListener for IE8 (only very basic)
	document._addEventListener = document.addEventListener || function (event, callback) {
		document.attachEvent('on' + event, callback);
	};

	// Hide overlay when ESC is pressed
	document._addEventListener('keyup', function (event) {
		var hash = window.location.hash.replace('#', '');

		// If hash is not set
		if (hash === '' || hash === '!') {
			return;
		}

		// If key ESC is pressed
		if (event.keyCode === 27) {
			window.location.hash = '!';

			// Unfocus
			modal.removeFocus();
		}
	}, false);


	// When showing overlay, prevent background from scrolling
	window.onhashchange = function () {
		var hash = window.location.hash.replace('#', '');
		var modalChild;

		// If hash is set
		if (hash !== '' && hash !== '!') {

			// Get first element in selected element
			modalChild = document.getElementById(hash).children[0];

			// When we deal with a modal and class `has-overlay` is not set on html yet
			if (modalChild && modalChild.className.match(/modal-inner/) && !document.documentElement.className.match(/has-overlay/)) {

				// Set an html class to prevent scrolling
				document.documentElement.className += ' has-overlay';

				// Mark modal as active
				document.getElementById(hash).className += ' is-active';
				modal.activeElement = document.getElementById(hash);

				// Set the focus to the modal
				modal.setFocus(hash);
			}
		} else {
			document.documentElement.className = document.documentElement.className.replace(' has-overlay', '');

			// If activeElement is already defined, delete it
			if (modal.activeElement) {
				modal.activeElement.className = modal.activeElement.className.replace(' is-active', '');
				modal.activeElement = null;

				// Unfocus
				modal.removeFocus();
			}
		}
	};


	/*
	 * Accessability
	 */

	// Focus modal
	modal.setFocus = function (hash) {
		if (modal.activeElement && !modal.activeElement.contains(hash)) {

			// Set element with last focus
			modal.lastActive = document.activeElement;

			// New focussing
			modal.activeElement.focus();
		}
	};

	// Unfocus
	modal.removeFocus = function () {
		if (modal.lastActive) {
			modal.lastActive.focus();
		}
	};


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

}());
