/**
 * Slider for testimonial section
 */
import jQuery from 'jquery'

(function ($) {
  'use strict';

  var $testimonials = $('.js-testimonial');
  var $wrapper = $('.js-testimonial-wrapper');
  var $navigation;
  var interval;
  var playState = true;

  var events = function () {
    $wrapper
      .on('mouseover', function () {
        playState = false;
      })
      .on('mouseout', function () {
        playState = true;
      });
  };

  var setNavigationItemActive = function (index) {
    $navigation.find('.is-active').removeClass('is-active');
    $navigation.find('[data-index="' + index + '"]').addClass('is-active');
  };

  var activateNext = function ($next) {
    var $active;

    if (!$next && playState === false) {
      return;
    }

    $active = $testimonials.filter('.is-active');
    $next = $next || $active.next();

    if ($next.length === 0) {
      $next = $testimonials.first();
    }

    $active.removeClass('is-active');
    $next.addClass('is-active');

    setNavigationItemActive($next.index());
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

  var setNextItem = function (event) {
    var index = $(this).data('index');
    var $next = $testimonials.eq(index);

    event.preventDefault();

    activateNext($next);
  };

  var generateNavigation = function () {
    var $ul = $('<nav>', {
      class: 'testimonials__navigation'
    });

    if ($('.testimonials__navigation').length > 0) {
      return;
    }

    $testimonials.each(function (index) {
      $ul.append('<a href="#" data-index="' + index + '">' + (index + 1) + '</a>');
    });

    $ul.appendTo($wrapper);
    $navigation = $ul;

    setNavigationItemActive(0);

    $navigation.on('click', 'a', setNextItem);
  };

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
    generateNavigation();
  };

  $(window)
    .on('resize', init).trigger('resize')
    .on('scroll', setIntervalIfVisible);
}(jQuery));
