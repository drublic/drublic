module.exports = function (grunt) {

	'use strict';

	// Project configuration.
	grunt.initConfig({
		pkg: require('./package'),

		jshint: {
			all: [
				'Gruntfile.js',
				'public/js/**/*.js'
			],

			options: {
				jshintrc: '.jshintrc'
			}
		},

		sass: {
			dev: {
				options: {
					unixNewlines: true,
					style: 'expanded',
					loadPath: './scss/'
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

		copy: {
			cssmodal: {
				src: 'components/css-modal/modal.js',
				dest: 'public/js/modal.js',
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
					'public/js/**/*.js'
				],
				tasks: 'jshint'
			}
		}
	});

	// Load some stuff
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-pages');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task
	grunt.registerTask('default', ['sass', 'copy']);

};
