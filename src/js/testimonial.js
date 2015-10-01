/**
 * Slider for testimonial section
 */
(function ($) {
  'use strict';

  var $testimonials = $('.js-testimonial');
  var $wrapper = $('.js-testimonial-wrapper');
  var interval;
  var playState = true;

  var init = function () {
    var maxHeight = 0;

    $testimonials.each(function () {
      var height = $(this).outerHeight(true);

      if (height > maxHeight) {
        maxHeight = height;
      }
    });

    $wrapper.height(maxHeight);

    if ($testimonials.filter('.is-active').length === 0) {
      $testimonials.first().addClass('is-active');
    }

    setIntervalIfVisible();
    events();
  };

  var events = function () {
    $wrapper
      .on('mouseover', function () {
        playState = false;
      })
      .on('mouseout', function () {
        playState = true;
      });
  };

  var activateNext = function () {
    var $active;
    var $next;

    if (playState === false) {
      return;
    }

    $active = $testimonials.filter('.is-active');
    $next = $active.next();

    if ($next.length === 0) {
      $next = $testimonials.first();
    }

    $active.removeClass('is-active');
    $next.addClass('is-active');
  };

  var setIntervalIfVisible = function () {
    if ($wrapper.length === 0) {
      return;
    }

    var scrollPosition = window.scrollY;
    var offsetTop = $wrapper.offset().top - $(window).height();
    var offsetBottom = $wrapper.offset().top + $wrapper.outerHeight();

    clearInterval(interval);

    if (scrollPosition >= offsetTop && scrollPosition <= offsetBottom) {
      interval = setInterval(activateNext, 5000);
    }
  };

  $(window)
    .on('resize', init).trigger('resize')
    .on('scroll', setIntervalIfVisible);
}(jQuery));
