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

  // CSS files
  css: {
    files: [
      'src/css/**/*.css'
    ],
    src: 'src/css/main.css',
    devDest: 'public/dist/_/core.css',
    dest: 'public/dist/<%= pkg.version %>/c.css'
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

  concat: {
    js: {
      src: [
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/css-modal/modal.js',
        'node_modules/raf.js/raf.min.js',
        'src/js/main.js',
        'src/js/track.js'
      ],
      dest: 'public/dist/_/core.js'
    },
    jsmin: {
      src: [
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/css-modal/modal.js',
        'node_modules/raf.js/raf.min.js',
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
