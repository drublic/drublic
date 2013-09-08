module.exports = function (grunt) {

	'use strict';

	// Project configuration.
	grunt.initConfig({
		pkg: require('./package'),

		jshint: {
			all: [
				'Gruntfile.js',
				'public/js/main.js'
			],

			options: {
				jshintrc: '.jshintrc'
			}
		},

		sass: {
			dev: {
				options: {
					unixNewlines: true,
					style: 'expanded'
				},
				files: {
					'public/css/main.css': 'scss/main.scss'
				}
			}
		},

		pages: {
			posts: {
				src: 'blog_posts',
				dest: 'content',
				layout: 'templates/post.ejs',
				url: 'blog/:permalink/article'
			}
		},

		watch: {

			scss: {
				files: ['scss/**/*.scss'],
				tasks: 'sass'
			},

			js: {
				files: [
					'Gruntfile.js',
					'public/js/main.js'
				],
				tasks: 'jshint'
			}
		}
	});

	// Load some stuff
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-pages');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task
	grunt.registerTask('default', ['sass']);

};
