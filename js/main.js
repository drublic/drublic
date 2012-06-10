/**
 *  Author: Hans Christian Reinl
 *
 *  Twitter: @drublic
 *  Mail: info@drublic.de
 *
 */


/*global jQuery, log, twttr */
(function( $, window, document, undefined ) {


var isMobile = function () {
		if ( $( window ).width() < 481 ) {
			return true;
		} else {
			return false;
		}
	}();




// Change Links in Nav
(function () {
	$('#nav').find('a').each( function () {
		var ref = $(this).attr('href').replace( $('body').data('url'), '' );
		$(this).attr('href', '#/' + ref);
	});
}());




// Mobile
function mobile_stuff () {
		// Menu for Mobile
		var $that, title, sectionClass,
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
			$( 'html,body' ).scrollTop($( this ).closest( 'section' ).next().offset().top);
		});
		
		// Scroll Up
		$( '<span />', {
			'class' : 'scroll-top',
			'html' : '&uarr;'
		})
		.insertAfter( $( '#main' ).find( 'section' ).last().find( 'h2' ) )
		.click( function() {
			$( 'html,body' ).scroll(0);
		});

		
		
		// Latest Projects
		$( '.projects' ).find( 'li' ).click( function () {
			$( this ).find( '.back' ).animat({ opacity: 'toggle' });
		});
}

if (isMobile) {
	mobile_stuff();
}






/**
 * Date-routine
 * Add a routine to render a date
 *
 * @param date - Unix-timestamp
 *
 */
var date = function (date) {
	date = new Date (date);
	var date_str  = '';

	// Day
	date_str += ( parseInt(date.getDate(), 10) <= 9) ? '0' + date.getDate() : date.getDate();
	date_str += '.';

	//Month
	date_str += ( ( parseInt(date.getMonth(), 10) + 1 ) <= 9) ? '0' + ( parseInt(date.getMonth(), 10) + 1 ) : ( parseInt(date.getMonth(), 10) + 1 );
	date_str += '.';

	// Year
	date_str += date.getFullYear();
	date_str += ' - ';
	
	// Time
	date_str += date.getHours() + ':' + ( (date.getMinutes() <= 9) ? '0' + date.getMinutes() : date.getMinutes() );
	
	return date_str;
};



// Request latest Tweets
$.get('https://api.twitter.com/1/statuses/user_timeline.json?screen_name=drublic&count=10&include_rts=1', function (data) {
	var $list = $('.row.twitter ul');
	$list.html('');

	$.each(data, function (key, val) {
		$list.append('<li style="display: none;">' + twttr.txt.autoLink(val.text) + ' ' +
			'<a href="http://twitter.com/drublic/status/' + val.id_str + '" class="date">' + date(val.created_at) + '</a></li>');
		
		$list.last().delay(key * 100).animate({ 'opacity': 'toggle' });
	});
}, 'jsonp');





// Request latest Blog-Posts from Tumblr-Blog
$.get('http://drublic.tumblr.com/api/read/json?num=5&filter=text', function (data) {
	var $list = $('.tumblr .feed ul');
	$list.html('');
	
	var body = '', output = '';
		
	$.each( data.posts, function (key, val) {
		output += '<li style="display: none;">';
		
		
		// Texts
		if (val['regular-body'] !== undefined) {
			output += '<h4><a href="' + val['url-with-slug'] + '">' + val['regular-title'] + '</a></h4>';
	
			body = val['regular-body'].substr(0, 100);
			output += '<span>' + twttr.txt.autoLink(body) + ' ' +
				'<a href="' + val['url-with-slug'] + '">read more&hellip;</a>';


		// Photo
		} else if (val['photo-url-500'] !== undefined) {
			var photo = val['photo-url-250'];
			if ( $( '.tumblr .feed' ).width() > 250 ) {
				photo = val['photo-url-500'];
			}
			output += '<a href="' + val['photo-url-500'] + '" rel="group_tumblr" title="' + val['photo-caption'] + '"><img src="' + photo + '" alt="' + val['photo-caption'] + '" style="opacity: 0;"></a>';

		// Video
		} else if ( val.type === "video" ) {
			output += val['video-player'];
		
		// Everything else is not displayed
		} else {
			return;
		}
		
		output += '<a href="' + val['url-with-slug'] + '" class="date">' + date(val.date) + '</a></li>';
	});
	
	$list.append( output );
	
	$( '.tumblr .feed img' ).load( function() {
		$( this ).animate({ 'opacity' : '1' });
	});
	
	$('.tumblr .feed li').each( function( key ) {
		$( this ).delay( key * 100 ).animate({ 'opacity': 'toggle' });
	});
	
}, 'jsonp');




var hashListener = function () {
	var i,
		hash = location.hash.replace(/#\//, '');
	
	// Add Class active
	$('#nav').find('.active').removeClass('active');
	$('#nav').find('a[href$="' + hash + '"]').parent().addClass('active');
	
	// Home
	if (hash === 'home') {
		$('.imprint, .contact').hide();
	
	// Imprint
	} else if (hash === 'imprint') {
		i = 0;

		$('.contact').hide();
		$('.imprint').show();

	// Contact
	} else if (hash === 'contact') {
		i = 0;
		
		$('.imprint').hide();
		$('.imprint').show();
	
	} else if (hash === 'blog') {
		location.href = $('body').data('url') + '/' + hash;
	}
};


$(window).on('hashchange', function () {
	hashListener();
});




// Resize Listener
$( window ).resize( function() {
	if (!isMobile) {
		if ( $( '.menu' ).size() > 0 ) {
			$( '.menu, .scroll-next, .scroll-top' ).remove();
		}
	} else {
		if ( $( '.menu' ).size() < 1 ) {
			mobile_stuff();
		}
	}

});





// Animations on startup
(function () {
	$('.header').addClass('bounceInDown');

	setTimeout( function () {
		$('.desc').addClass('fadeInLeftBig');
	}, 500);


	var socials = $('.social li'),
			animateSocials = function (i) {
				$(socials[i]).addClass('bounceInUp');

				if (socials[i+1] !== undefined) {
					setTimeout( function () {
						animateSocials(i + 1);
					}, 100);
				}
			};

	setTimeout( function () {
		animateSocials(0);
	}, 1000);


	setTimeout( function () {
		$('.button').addClass('fadeIn');
	}, 2000);


	var rows = $('.row'),
			animateRows = function (i) {
				$(rows[i]).addClass('fadeInUp');

				if (rows[i+1] !== undefined) {
					setTimeout( function () {
						animateRows(i + 1);
					}, 500);
				}
			};

	setTimeout( function () {
		animateRows(0);
	}, 2000);

}());





}(jQuery, window, document));









