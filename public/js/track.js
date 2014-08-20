(function () {

	'use strict';

	// Google Universal Analytics

	// More information about the Google Universal Analytics:
	// https://developers.google.com/analytics/devguides/collection/analyticsjs/
	// http://mathiasbynens.be/notes/async-analytics-snippet#universal-analytics

	/* jshint ignore:start */
	(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;e=o.createElement(i);r=o.getElementsByTagName(i)[0];e.src='//www.google-analytics.com/analytics.js';r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
	/* jshint ignore:end */

	// Create tracker object
	ga('create', 'UA-41497561-1');

	// Send a page view
	// https://developers.google.com/analytics/devguides/collection/analyticsjs/pages
	ga('send', 'pageview');

	// Track events
	// https://developers.google.com/analytics/devguides/collection/analyticsjs/events
	$(document).on('click', '[data-ga-category]', function (event) {
		var $target = $(event.currentTarget);
		var action = $target.attr('data-ga-action') || undefined;     // required
		var category = $target.attr('data-ga-category') || undefined; // required
		var label = $target.attr('data-ga-label') || undefined;
		var value = parseInt($target.attr('data-ga-value'), 10) || undefined;

		ga('send', 'event', category, action, label, value);
	});
}());
