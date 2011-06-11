/* Author: 

*/


! function ($, window, document, undefined) {


var isMobile = function () {
    if ( $( window ).width() < 481 ) {
      return true;
    } else {
      return false;
    }
  };




// Mobile
! function () {
  if ( isMobile() ) {
    
    // Menu for Mobile
    var $that, title,
        $menu = $( '<ul />', {
          'class' : "menu",
          'html' : $menu
        });
    
    $( '#main' ).find( 'section' ).each( function( i ) {
      $that = $( this );
      title = $that.find( 'h2 a' ).html();
      sectionClass = $that.attr( 'class' );
      
      $( '<li />', {
          'id' : 'menu-li-' + i,
          'html' : '<a href="#!/' + sectionClass + '">' + title + '</a>'
        }).appendTo( $menu );
    });

    $menu.prependTo( '#main' );
    
    
    
    
    
    // Top-Links for Headlines
    
    // Scroll Down
    $( '<span />', {
      'class' : 'scroll-next',
      'html' : '&darr;'
    })
    .insertAfter( $( '#main' ).find( 'section' ).not( ':last-child' ).find( 'h2' ) )
    .click( function() {
      log ($( this ).closest( 'section' ).next().offset().top);
      $( 'html,body' ).animate({ 'scrollTop' : $( this ).closest( 'section' ).next().offset().top })
    });
    
    // Scroll Up
    $( '<span />', {
      'class' : 'scroll-top',
      'html' : '&uarr;'
    })
    .insertAfter( $( '#main' ).find( 'section' ).last().find( 'h2' ) )
    .click( function() {
      $( 'html,body' ).animate({ 'scrollTop' : 0 });
    });

    
    
    // Latest Projects
    $( '.projects' ).find( 'li' ).click( function () {
      $( this ).find( '.back' ).animat({ opacity: 'toggle' });
    })
  
  
  }
} ();






/* Date-routine */
function date (date) {
  date = new Date (date);
	var date_str  = date.getDate() + '.' + parseInt(date.getMonth() + 1) + '.' + date.getFullYear();
	    date_str += ' - ' + date.getHours() + ':' + ( (date.getMinutes() <= 9) ? '0' + date.getMinutes() : date.getMinutes() );
  
  return date_str;
}






// Request latest Blog-Posts from Pagetimer-Blog
$.get('http://blog.pagetimer.de/api/read/json?num=15&filter=text', function (data) {
  log(data);
  $('.pagetimer .feed ul').html('');
  
  var body = '';
  $.each( data.posts, function (key, value) {
    body = value['regular-body'].substr(0, 100);
    
    $('.pagetimer .feed ul').append('<li style="display: none;"><h4><a href="' + value['url-with-slug'] + '" target="_blank">' + 
      value['regular-title'] + '</a></h4><span>' + twttr.txt.autoLink(body) + ' ' +
      '<a href="' + value['url-with-slug'] + '" target="_blank">read more&hellip;</a>' +
      '<a href="' + value['url-with-slug'] + '" target="_blank" class="date">' + date(value['date']) + '</a></li>');
    
    $('.pagetimer .feed ul').find('li:last').delay(key * 100).animate({ 'opacity': 'toggle' });
  });
}, 'jsonp');



// Request latest Tweets
$.get('http://www.twitter.com/status/user_timeline/drublic.json?count=10', function (data) {
  log(data);
  $('.twitter .feed ul').html('');

  $.each( data, function (key, value) {
    $('.twitter .feed ul').append('<li style="display: none;">' + twttr.txt.autoLink(value['text']) + ' ' +
      '<a href="http://twitter.com/drublic/status/' + value['id'] + '" target="_blank" class="date">' + date(value['created_at']) + '</a></li>');
    
    $('.twitter .feed ul').find('li:last').delay(key * 100).animate({ 'opacity': 'toggle' });
  });
}, 'jsonp');





// Request latest Blog-Posts from Tumblr-Blog
$.get('http://drublic.tumblr.com/api/read/json?num=5&filter=text', function (data) {
  log(data);
  $('.tumblr .feed ul').html('');
  
  var body = '', output = '';
    
  $.each( data.posts, function (key, value) {
    output += '<li style="display: none;">';
    
    
    // Texts
    if (value['regular-body'] !== undefined) {
      output += '<h4><a href="' + value['url-with-slug'] + '" target="_blank">' + value['regular-title'] + '</a></h4>';
  
      body = value['regular-body'].substr(0, 100);
      output += '<span>' + twttr.txt.autoLink(body) + ' ' +
        '<a href="' + value['url-with-slug'] + '" target="_blank">read more&hellip;</a>';
    }
    
    // Photo
    else if (value['photo-url-500'] !== undefined) {
      var photo = value['photo-url-250'];
      if ( $( '.tumblr .feed' ).width() > 300 ) {
        photo = value['photo-url-500'];
      }
      output += '<a href="' + value['photo-url-500'] + '" rel="group_tumblr" title="' + value['photo-caption'] + '" class="fancybox" target="_black"><img src="' + photo + '" alt=""></a>';
    } else {
      return;
    }
    output += '<a href="' + value['url-with-slug'] + '" target="_blank" class="date">' + date(value['date']) + '</a></li>';
  });
  
  $('.tumblr .feed ul').append( output );
  
  // Add Fancybox if we're not on a mobile-device
  if ( !isMobile() ) {
    $( '.tumblr .fancybox' ).fancybox({
      'overlayShow' :	false
    });
  } else {
    $( '.tumblr .fancybox' ).click( function( e ) {
      e.preventDefault();
    })
  }
  
  $('.tumblr .feed li').each( function( key ) {
    $(this).delay(key * 100).animate({ 'opacity': 'toggle' });
  });
  
}, 'jsonp');






/* Calculate height of Cols */
! function () {
  if ( isMobile() ) {
    return;
  }

  var i = 0;
  ! function calcHeight () {
    // Do it for each section
    if (i < $('#main').find('section').size()) {
      if (!$('#main').find('section').eq(i).hasClass('imprint'))
        $('#main').find('section').eq(i).height($('html').height() - $('#main').offset().top);
      
      i++;
      calcHeight();
    }
    
  } ();


} ();




// Submit Contact-Form
! function () {
  $('.contact').find('form')
    .attr('action', '#!/' + $('.contact').find('form').attr('action'))
    .submit( function (e) {
      e.preventDefault();
      var param = {};
      
      // Itterate through Fields
      $(this).find('input, textarea').each( function () {
        $(this).removeClass('invalid');
        
        if ($(this).val() != '') param[$(this).attr('name')] = $(this).val();
        else {
          param[$(this).attr('name')] = $(this).val();
          $(this).addClass('invalid');
        }
      });
      
      $.post('ajax/send.php', param, function (data) {
        log (data);
        if (data.error === undefined) {
          $('body').append('<div class="message">' + data.msg + '</div>');
          $('.contact').find('form').find('input, textarea').each( function () {
            $(this).removeClass('invalid').attr('disabled', true);
            if ($(this).attr('type') !== 'submit') $(this).val('');
          });
        }
        else {
          $('body').append('<div class="message">An error occured! Please resolve it!</div>');
        }
        
        setTimeout( function () {
          if ($('.message').size() > 0)
            $('.message').fadeOut( function () {
              $(this).remove();
            });
        }, 5000);

      }, 'json');
      
    });
} ();





// If hash changes or is set on refresh
var hash = '';
$( 'nav' ).find( 'li:first-child' ).addClass( 'active' );

! function hashListener (hash) {
  
  // If hash has changed
  if (hash !== window.location.hash) {
    hash = window.location.hash;
    
    
    
    // Add Class active
    $( 'nav' ).find( '.active' ).removeClass( 'active' );
    $( 'nav' ).find( 'a[href$="' + hash.split(/\#\!\//)[1] + '"]' ).parent().addClass( 'active' );
    
    
    
    // Home
    if (hash === '#!/home') {
      $('.imprint, .contact').fadeOut(function () {
        var i = 0;
        ! function slideUpSec () {
          // Do it for each section
          if (i < $('#main').find('section').size()) {
            $('#main').find('section').eq(i).show().animate({ top: 0 });
            i++;
            
            setTimeout(slideUpSec, 100);
          }
          
        } ();
        
        // Fade in menu for Mobile
        if ( isMobile() ) {
          $( '.menu' ).fadeIn();
        }
      });
    }
    
    
    // Imprint
    else if (hash === '#!/imprint') {
      var i = 0;
      
      $('.contact').fadeOut();
      
      // Slide 'em down
      ! function slideDownSec () {
        
        // Do it for each section
        if (i < $('#main').find('section').size()) {
          $('#main').find('section').eq(i).animate({ top: $('#main').height() }, function () {
            $(this).fadeOut();
          });
          i++;
          
          setTimeout(slideDownSec, 100);
        }
        else {
          $('.imprint').delay(500).fadeIn();
        }
      } ();
      
      // Fade out menu for Mobile
      if ( isMobile() ) {
        $( '.menu' ).fadeOut();
      }

    }
    
    
    // Contact
    else if (hash === '#!/contact') {
      var i = 0;
      
      $('.imprint').fadeOut();
      
      // Slide 'em down
      ! function slideDownSec () {
        
        // Do it for each section
        if (i < $('#main').find('section').size()) {
          $('#main').find('section').eq(i).animate({ top: $('#main').height() }, function () {
            $(this).fadeOut();
          });          
          i++;
          
          setTimeout(slideDownSec, 100);
        }
        else {
          $('.contact').delay(500).fadeIn();
        }
      } ();
      
      // Fade out menu for Mobile
      if ( isMobile() ) {
        $( '.menu' ).fadeOut();
      }

    }
    
    
    else {
      var el = '.' + hash.split(/\#\!\//)[1];
      if ( $( el ).size() > 0 ) {
        $( 'html, body' ).animate({ 'scrollTop' : $( el ).offset().top });
      }
      $( 'nav' ).find( 'li:first-child' ).addClass( 'active' );
    }
    
    
    if ( isMobile() ) {
      var $active = $( 'nav .active' ).clone();
      $( 'nav .active' ).remove();
      $( 'nav li' ).eq( 0 ).after( $active );
    }
  
  
  }
  
  
  setTimeout( function () {
    hashListener (hash);
  }, 100);
} (hash);





} (jQuery, window, document);









