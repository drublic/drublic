'use strict';

var fs = require('fs');
var $ = require('jquery');

var path = '../posts/';


var createMeta = function (contents) {
	var $dom = $(contents);
	var url = $dom.find('link[rel="canonical"]').attr('href').replace('http://drublic.de/blog/', '');
	var categories = $dom.find('.categories a').map(function () {
		return $(this).text();
	}).toArray();
	var tags = $dom.find('.tags a').map(function () {
		return $(this).text();
	}).toArray();

	var meta = {
		title: $dom.find('title').text().replace(' | drublic', ''),
		permalink: url.substr(0, url.length - 1),
		author: $dom.find('.author > a').text(),
		authorUrl: '',
		categories: categories,
		tags: tags,
		headline: $dom.find('.post header h1').text(),
		metaTags: $dom.find('meta[name="keywords"]').text(),
		metaDescription: $dom.find('meta[name="description"]').text(),
		date: $dom.find('.post > header > time').attr('datetime').split('T')[0]
	};

	return JSON.stringify(meta);
};

// Save data to file
var saveData = function (file, data) {
	fs.writeFile(file, data, function(err) {
		if (err) {
			console.log(err);
		}
	});
};

var createArticle = function (contents, meta) {
	var article = $(contents).find('.post');
	var fileInputs;

	article.find('header').remove();
	article.find('.share-post').remove();
	article.find('.tags').remove();

	fileInputs = meta + '\n\n' + article.html();

	return fileInputs;
};

var readSubDir = function (directory) {
	fs.readdir(path + directory, function (err, files) {
		if (err) {
			throw new Error(err);
		}

		files.forEach(function (file) {
			if (file !== 'raw.html') {
				return false;
			}

			var contents = fs.readFileSync(path + directory + '/' + file).toString();
			var meta = createMeta(contents);
			var article = createArticle(contents, meta);
			saveData(path + directory + '/meta.json', meta);
			saveData(path + directory + '/article.md', article);
		});
	});
};

fs.readdir(path, function (err, files) {
	if (err) {
		throw new Error(err);
	}

	files.forEach(readSubDir);
});
