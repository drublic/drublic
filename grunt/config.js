/**
 * Grunt configuration
 */
'use strict';

var pkg = require('../package');

module.exports = {

  // A banner for distributed files (name, version, license, date)
  banner: '/*! ' + pkg.name + ' - v' + pkg.version + ' - MIT License - ' +
    '<%= grunt.template.today("yyyy-mm-dd") %> */',

  destDir: 'public/dist/',

  requirejs: '../../bower_components/requirejs/require',

  // All files that should be checked with JSHint
  jsHintFiles: [
    'Gruntfile.js',
    'src/**/*.js',
    '!src/components/**/*.js',
    'test/*.js',
    'test/specs/**/*.js'
  ],

  // JavaScript files
  js: {
    files: [
      'src/js/**/*.js'
    ],
    dest: 'public/dist/<%= pkg.version %>/c.js'
  },

  // Sass files
  sass: {
    files: [
      'src/scss/**/*.scss'
    ],
    src: 'src/scss/main.scss',
    devDest: 'public/dist/_/core.css',
    dest: 'public/dist/<%= pkg.version %>/c.css'
  },

  // Modernizr files
  modernizr: {
    src: 'bower_components/modernizr/modernizr.js',
    dest: 'public/dist/<%= pkg.version %>/m.js'
  },

  // Images
  img: {
    src: 'src/img/',
    dest: 'public/img/'
  },

  tests: {
    src: 'test/specs/**/*spec.js',
    config: 'test/test-main.js'
  },

  // Versioned references
  replace: {
    build: {
      src: 'temp/**/*.html',
      dest: 'dist/',
      maincss: '<%= pkg.version %>/main.min.css',
      modernizr: '<%= pkg.version %>/modernizr.min.js',
      mainjs: '<script src="<%= pkg.version %>/main.min.js"></script>'
    },

    dev: {
      src: 'temp/**/*.html',
      dest: 'src/',
      maincss: 'css/main.css',
      modernizr: '../bower_components/modernizr/modernizr.js',
      mainjs: '<script data-main="js/config" src="../bower_components/requirejs/require.js"></script>'
    }
  },

  concat: {
    js: {
      src: [
        'src/components/jquery/dist/jquery.min.js',
        'src/components/css-modal/modal.js',
        'src/components/raf.js/raf.min.js',
        'src/components/hongkong/hongkong.js',
        'src/js/main.js',
        'src/js/track.js'
      ],
      dest: 'public/dist/_/core.js'
    },
    jsmin: {
      src: [
        'src/components/jquery/dist/jquery.min.js',
        'src/components/css-modal/modal.js',
        'src/components/raf.js/raf.min.js',
        'src/components/hongkong/hongkong.js',
        'src/js/main.js',
        'src/js/track.js'
      ],
      dest: 'public/dist/<%= pkg.version %>/c.js'
    }
  },

  htmlmin: [{
    expand: true,
    cwd: 'src/templates/',
    src: ['**/*.html'],
    dest: 'public/templates/'
  }]
};
