/*globals module */
module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: '<json:package.json>',
		meta: {
			banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %> */'
		},

		jshint: {
			all: ['Gruntfile.js', 'js/main.js'],
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true,
				browser: true
			},
			globals: {
				jQuery: true,
				window: true,
				document: true
			}
		},

		htmllint: {
			all: ['index.html']
		},

		concat: {
			deploy: {
				src: [
					// Remove jQuery if you don't want to include the local copy in your build
					'js/vendor/jquery-1.7.2.min.js',
					'js/plugins/log.js',
					'js/main.js'
				],
				dest: 'public/js/main-<%= pkg.version %>.min.js'
			}
		},

		rubysass: {
			dev: {
				options: {
					unixNewlines: true,
					style: 'expanded'
				},
				files: {
					'css/main.css': 'scss/main.scss'
				}
			},
			deploy: {
				options: {
					style: 'compressed'
				},
				files: {
					'public/css/main-<%= pkg.version %>.min.css': 'scss/main.scss'
				}

			}
		},

		min: {
			deploy: {
				src: ['<config_process:meta.banner>', '<config:concat.deploy.dest>'],
				dest: 'public/js/main-<%= pkg.version %>.min.js'
			}
		},

		watch: {
			scss: {
				files: ['scss/**/*.scss'],
				tasks: 'rubysass:dev'
			}
		}
	});

	// Load some stuff
	grunt.loadNpmTasks('grunt-sass');

	// A task for development
	grunt.registerTask('dev', 'rubysass:dev');

	// A task for deployment
	grunt.registerTask('deploy', 'concat rubysass:deploy min');

	// Default task
	grunt.registerTask('default', 'concat rubysass:dev min');

};
