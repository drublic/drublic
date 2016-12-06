(function () {

  'use strict';

  // Google Universal Analytics

  // More information about the Google Universal Analytics:
  // https://developers.google.com/analytics/devguides/collection/analyticsjs/
  // http://mathiasbynens.be/notes/async-analytics-snippet#universal-analytics
  /* jshint ignore:start */
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  /* jshint ignore:end */

  ga('create', 'UA-41497561-1', 'auto');
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
