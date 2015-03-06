/**
 * Copy task
 */
'use strict';

var config = require('../config');

module.exports = {
  build: {
    files: [{
      src: config.js.files,
      dest: config.destDir
    }]
  },

  production: {
    files: [{
      expand: true,
      cwd: 'node_modules/jquery/dist/',
      src: 'jquery.min.map',
      dest: config.destDir + '<%= pkg.version %>/',
      flatten: true
    }]
  }
};
