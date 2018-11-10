import $ from 'jquery'

var ga = window.ga;

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
