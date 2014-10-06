/**
 * Minimize HTML code
 */
'use strict';

var config = require('../config');

module.exports = {
  dist: {
    options: {
      removeComments: true,
      removeCommentsFromCDATA: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeRedundantAttributes: true,
      collapseWhitespace: true
    },

    files: config.htmlmin
  }
};
