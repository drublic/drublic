/**
 * Watching for changes
 */
'use strict';

var config = require('../config');

module.exports = {
  scss: {
    files: config.css.files,
    tasks: 'pleeease:dev',
    atBegin: true
  },

  js: {
    files: [config.jsHintFiles, config.tests.src],
    tasks: ['jshint', 'concat:js']
  },

  livereload: {
    options: {
      livereload: true
    },
    files: ['src/css/**/*']
  },

  html: {
    files: ['src/templates/**'],
    tasks: ['htmlmin']
  },

  posts: {
    files: ['src/posts/**'],
    tasks: ['copy:posts']
  }
};
