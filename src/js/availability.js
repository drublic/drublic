/**
 * Availability table
 */
(function ($, availability) {
  'use strict';

  var html = '';
  var states = ['free', 'partial', 'blocked'];
  var i = 0;

  if (!availability) {
    return;
  }

  $.each(availability, function (key, value) {
    var state;

    if (i >= 10) {
      return;
    }

    state = 'availability__item--' + states[value];

    html += '<td class="availability__item ' + state + '"><span>' + key + '</span></td>';
    i = i + 1;
  });

  $('[data-availability]').html(html);
}(jQuery, window.__availability));
