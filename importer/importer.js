'use strict';

var fs = require('fs');
var posts = {
	links: [],
	sitemaps: []
};
var request = require('request');
var $ = require('jquery');

var doneLinks = 0;

var getContent = function (html, selector) {
	var urls = [];

	$(html).find(selector).each(function () {
		urls.push($(this).text());
	});

	return urls;
};

var writePosts = function () {
	var interval = setInterval(function () {
		if (doneLinks === posts.sitemaps.length) {

			console.log('total post count: ' + posts.links.length);

			clearInterval(interval);

			// Write links into a file for later or so
			fs.writeFile('posts.json', JSON.stringify(posts), function (err) {
				if (err) {
					throw new Error(err);
				}
			});
		}
	}, 200);
};

// Get all sitemaps
console.log('Importing all sitemaps...');

request({ uri: 'http://drublic.de/blog/sitemap.xml' }, function (err, response, body) {
	var allSitemaps = getContent(body, 'sitemap loc');

	// filter sitemaps
	allSitemaps.forEach(function (value) {
		if (value.match(/pt-post/)) {
			posts.sitemaps.push(value);
		}
	});

	// Get all post links
	console.log('Fetch all post links...');

	(function requestSitemap (count) {
		var link = posts.sitemaps[count];

		request({ uri: link }, function (err, response, body) {
			posts.links = posts.links.concat.apply(posts.links, getContent(body, 'url loc'));
			doneLinks++;

			if (count < posts.sitemaps.length) {
				setTimeout(function () {
					count++;
					requestSitemap(count);
				}, 100);
			}

			return true;
		});
	}(0));

	writePosts();
});
