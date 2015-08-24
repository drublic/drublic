/**
 * Scroll top element
 */
(function ($) {
  'use strict';

  var $window = $(window);

  var onScroll = function () {
    var scrolled = $window.scrollTop();
    var windowHeight = $window.height();

    $('[data-scroll-top]').toggleClass('is-hidden', scrolled < windowHeight);
  };

  $window.on('scroll', onScroll);

  $(document).on('click', '[data-scroll-top]', function () {
    $('html, body').animate({
      'scrollTop': 0
    }, 400);
  });
}(jQuery));
