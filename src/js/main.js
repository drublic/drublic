/**
 *  Author: Hans Christian Reinl
 *
 *  Twitter: @drublic
 *  Mail: info@drublic.de
 *
 */
(function ($) {

  'use strict';

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

  /**
   * Menu
   */
  $(document).on('click', '.navigation__toggle', function () {
    $('.navigation').toggleClass('navigation--visible');
  });

  /**
   * Fade in elements on scroll
   */
  (function () {
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
  }());

  /**
   * Availability table
   */
  (function (availability) {
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
  }(window.__availability));

  /**
   * Pattern in head
   */
  var $header = $('.header');

  var pattern = new Trianglify({
    width: $header.width(),
    height: $header.height(),
    'cell_size': 40,
    variance: '1',
    'x_colors': 'YlGnBu'
  });

  $header.find('.header__background').append(pattern.svg());
}(jQuery));
