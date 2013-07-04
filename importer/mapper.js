'use strict';

var fs = require('fs');

var path = '../posts/';

var postsMeta = [];

var postsCount = 0;
var postsDone = 0;

var writePostMeta = function () {
	var interval = setInterval(function () {
		if (postsDone === postsCount) {

			console.log('total post count: ' + postsCount);

			clearInterval(interval);

			// Write links into a file for later or so
			fs.writeFile('../posts.json', JSON.stringify(postsMeta), function (err) {
				if (err) {
					throw new Error(err);
				}
			});
		}
	}, 200);
};


// Filter meta data for post
// @param meta obj
var filterMeta = function (meta) {
	var filteredMeta = {
		date: meta.date,
		permalink: meta.permalink
	};

	postsMeta.push(filteredMeta);

	postsDone++;
};


// Move post to new location
var movePost = function (directory, contents) {
	fs.writeFile('../blog_posts/' + directory + '.html',contents, function (err) {
		if (err) {
			throw new Error(err);
		}
	});
};


// Read meta files
var readSubDir = function (directory) {
	fs.readdir(path + directory, function (err, files) {
		if (err) {
			throw new Error(err);
		}

		files.forEach(function (file) {
			if (file !== 'meta.json') {
				return false;
			}

			var contents = fs.readFileSync(path + directory + '/' + file).toString();
			var meta = JSON.parse(contents);

			filterMeta(meta);

			movePost(directory, contents);
		});

		postsCount++;
	});
};

fs.readdir(path, function (err, files) {
	if (err) {
		throw new Error(err);
	}

	files.forEach(readSubDir);

	writePostMeta();
});

