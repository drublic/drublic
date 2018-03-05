/**
 * Fade in elements on scroll
 */
import jQuery from 'jquery'

(function ($) {
  'use strict';

  var $window = $(window);

  var revealOnScroll = function () {
    var scrolled = $window.scrollTop();
    var windowHeight = $window.height();

    $('[data-fx-fade]').each(function () {
      var $element = $(this);
      var offsetTop = $element.offset().top;

      if (scrolled + windowHeight > offsetTop) {
        $element.attr('data-fx-fade', 'in');
      }
    });
  };

  $window.on('scroll', revealOnScroll).trigger('scroll');
}(jQuery));
