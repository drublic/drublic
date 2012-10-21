/**
 *  Author: Hans Christian Reinl
 *
 *  Twitter: @drublic
 *  Mail: info@drublic.de
 *
 */


/*global jQuery, window, console, twttr */
(function ($) {

	"use strict";

	var drublic = {};

	drublic.settings = {
		twitterUrl: "https://api.twitter.com/1/statuses/user_timeline.json?screen_name=drublic&count=10&include_rts=1",
		tumblrUrl: "http://drublic.tumblr.com/api/read/json?num=4&filter=text"
	};


	// Check if we are dealing with mobile
	drublic.isMobile = function () {
		return ( $(window).width() < 481 );
	};


	// Render date from Unix-timestamp
	drublic.date = function (timestamp) {
		var day, month, year, hours, minutes,
			date = new Date (timestamp);

		// Day
		if (parseInt(date.getDate(), 10) <= 9) {
			day = '0' + date.getDate();
		} else {
			day = date.getDate();
		}

		day += day + '.';

		//Month
		if ( (parseInt(date.getMonth(), 10) + 1 ) <= 9) {
			month = '0' + ( parseInt(date.getMonth(), 10) + 1 );
		} else {
			month = parseInt(date.getMonth(), 10) + 1;
		}

		month += '.';

		// Year
		year = date.getFullYear() + ' - ';

		// Hours
		hours = date.getHours() + ':';

		// Minutes
		if (date.getMinutes() <= 9) {
			minutes = '0' + date.getMinutes();
		} else {
			minutes = date.getMinutes();
		}

		return day + month + year + hours + minutes;
	};


	// If on mobile, hide address bar
	if (drublic.isMobile()) {
		window.setTimeout( function () {
			window.scrollTo(0, 0);
		}, 0);
	}





// Request latest Tweets
$.get(drublic.settings.twitterUrl, function (data) {
	var $list = $('.row.twitter ul');
	$list.html('');

	$.each(data, function (key, val) {
		$list.append('<li>' + twttr.txt.autoLink(val.text) + ' ' +
			'<a href="http://twitter.com/drublic/status/' + val.id_str + '" class="date">' + drublic.date(val.created_at) + '</a></li>');
	});
}, 'jsonp');





// Request latest Blog-Posts from Tumblr-Blog
$.get(drublic.settings.tumblrUrl, function (data) {
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
			output += '<a href="' + val['photo-url-500'] + '" title="' + drublic.date(val.date) + '" title="' + val['photo-caption'] + '"><img src="' + photo + '" alt="' + val['photo-caption'] + '"></a>';

		// Video
		} else if ( val.type === "video" ) {
			output += val['video-player'];

		// Everything else is not displayed
		} else {
			return;
		}
	});

	$list.append( output );

	$( '.tumblr .feed img' ).load( function () {
		$( this ).animate({ 'opacity' : '1' });
	});

	$('.tumblr .feed li').each( function( key ) {
		$( this ).delay( key * 100 ).animate({ 'opacity': 'toggle' });
	});

}, 'jsonp');





	$(window).on('hashchange', function () {
		var hash = window.location.hash.replace(/#\//, '');

		// Add Class active
		$('.nav').find('.active').removeClass('active');
		$('.nav').find('a[href$="' + hash + '"]').parent().addClass('active');

		// Clarify hash
		$('.backdrop, .close').on('click', function () {
			window.setTimeout( function () {
				window.location.hash = '/home';
			}, 0);
		});

	});

	if (window.location.hash) {
		window.setTimeout( function () {
			$(window).trigger('hashchange');
			$('a[href$="' + window.location.hash + '"]').trigger('click');
		}, 0);
	}



}(jQuery));
