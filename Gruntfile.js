module.exports = function (grunt) {

	'use strict';

	// Project configuration.
	grunt.initConfig({
		pkg: require('./package'),
		meta: {
			banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %> */'
		},

		concat: {
			index: {
				src: ['partials/header.html', 'index.html', 'partials/footer.html'],
				dest: 'dist/index.html'
			},
			resume: {
				src: ['partials/header.html', 'resume.html', 'partials/footer.html'],
				dest: 'dist/resume/index.html'
			}
		},

		sass: {
			dev: {
				options: {
					unixNewlines: true,
					style: 'expanded'
				},
				files: {
					'dist/css/main.css': 'scss/main.scss'
				}
			}
		},

		watch: {

			scss: {
				files: ['scss/**/*.scss'],
				tasks: 'sass'
			},

			concat: {
				files: [
					'*.html'
				],
				tasks: 'concat'
			}
		}
	});

	// Load some stuff
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task
	grunt.registerTask('default', ['concat', 'sass']);

};
