/**
 *  Author: Hans Christian Reinl
 *
 *  Twitter: @drublic
 *  Mail: info@drublic.de
 *
 */


/*global jQuery, console, twttr */
(function( $, window, document, undefined ) {

"use strict";


var isMobile = function () {
		if ( $( window ).width() < 481 ) {
			return true;
		} else {
			return false;
		}
	}();


if (isMobile) {

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
		$list.append('<li>' + twttr.txt.autoLink(val.text) + ' ' +
			'<a href="http://twitter.com/drublic/status/' + val.id_str + '" class="date">' + date(val.created_at) + '</a></li>');
	});
}, 'jsonp');





// Request latest Blog-Posts from Tumblr-Blog
$.get('http://drublic.tumblr.com/api/read/json?num=4&filter=text', function (data) {
	var $list = $('.tumblr .feed ul');
	$list.html('');

	var body = '', output = '';

	$.each( data.posts, function (key, val) {
		output += '<li style="display: none;">';


		// Texts
		if (val['regular-body'] !== undefined) {
			output += '<h3><a href="' + val['url-with-slug'] + '">' + val['regular-title'] + '</a></h3>';

			body = val['regular-body'].substr(0, 100);
			output += '<span>' + twttr.txt.autoLink(body) + ' ' +
				'<a href="' + val['url-with-slug'] + '">read more&hellip;</a>';


		// Photo
		} else if (val['photo-url-500'] !== undefined) {
			var photo = val['photo-url-250'];
			if ( $( '.tumblr .feed' ).width() > 250 ) {
				photo = val['photo-url-500'];
			}
			output += '<a href="' + val['photo-url-500'] + '" title="' + date(val.date) + '" title="' + val['photo-caption'] + '"><img src="' + photo + '" alt="' + val['photo-caption'] + '"></a>';

		// Video
		} else if ( val.type === "video" ) {
			output += val['video-player'];

		// Everything else is not displayed
		} else {
			return;
		}
	});

	$list.append( output );

	$( '.tumblr .feed img' ).load( function() {
		$( this ).animate({ 'opacity' : '1' });
	});

	$('.tumblr .feed li').each( function( key ) {
		$( this ).delay( key * 100 ).animate({ 'opacity': 'toggle' });
	});

}, 'jsonp');





$(window).on('hashchange', function () {
	var i,
		hash = location.hash.replace(/#\//, '');

	// Add Class active
	$('#nav').find('.active').removeClass('active');
	$('#nav').find('a[href$="' + hash + '"]').parent().addClass('active');

	// Clarify hash
	$('.backdrop').on('click', function () {
		window.location.hash = '/home';
	});
});

if (window.location.hash) {
	setTimeout( function () {
		$(window).trigger('hashchange');
		$('a[href$="' + window.location.hash + '"]').trigger('click');
	}, 0);
}




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



// Call for modals
$('.modal').modals();





}(jQuery, window, document));









