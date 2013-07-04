'use strict';

var fs = require('fs');
var posts;
var request = require('request');


var requestFile = function (file) {
	request({ uri: posts.links[file] }, function (err, response, body) {
		if (err) {
			throw new Error(err);
		}

		file++;

		fs.mkdir('../posts/' + file + '/', function () {
			fs.writeFile('../posts/' + file + '/raw.html', body, function (err) {
				if (err) {
					throw new Error(err);
				}

				if (posts.links[file]) {
					requestFile(file);
				}
			});
		});
	});
};


// Open all posts and save content
console.log('Fetch all posts...');
fs.readFile('./posts.json', function read(err, data) {
	if (err) {
		throw new Error(err);
	}

	posts = JSON.parse(data);

	requestFile(0);
});
