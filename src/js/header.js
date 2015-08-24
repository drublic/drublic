/**
 * Pattern in head
 */
(function ($, Trianglify) {

  'use strict';

  var $header = $('.header');

  var pattern = new Trianglify({
    width: $header.width(),
    height: $header.height(),
    'cell_size': 40,
    variance: '1',
    'x_colors': 'YlGnBu'
  });

  $header.find('.header__background').append(pattern.svg());
}(jQuery, window.Trianglify));
