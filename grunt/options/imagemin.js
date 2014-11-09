/**
 * Lossless image optimization
 */
'use strict';

var config = require('../config');

module.exports = {
  images: {
    options: {
      optimizationLevel: 5
    },
    files: [{
      expand: true,
      cwd: config.img.src,
      src: ['**/*.{png,jpg,gif,mp4}'],
      dest: config.img.dest
    }]
  }
};
