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
				src: ['partials/header.php', 'partials/index.php', 'partials/footer.php'],
				dest: 'dist/index.php'
			},
			resume: {
				src: ['partials/header.php', 'partials/resume.php', 'partials/footer.php'],
				dest: 'dist/resume/index.php'
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
					'partials/*.php',
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
