const path = require('path')
const webpack = require('webpack')
const pkg = require('./package')

module.exports = {
  mode: 'production',
  entry: {
    main: [
      path.resolve(__dirname, 'node_modules/jquery/dist/jquery.min.js'),
      path.resolve(__dirname, 'node_modules/css-modal/modal.js'),
      path.resolve(__dirname, 'src/js/transition.js'),
      path.resolve(__dirname, 'src/js/zoom.js'),
      path.resolve(__dirname, 'src/js/effects.js'),
      path.resolve(__dirname, 'src/js/form.js'),
      path.resolve(__dirname, 'src/js/toc.js'),
      path.resolve(__dirname, 'src/js/main.js'),
      path.resolve(__dirname, 'src/js/scroll-top.js'),
      path.resolve(__dirname, 'src/js/testimonial.js'),
      path.resolve(__dirname, 'src/js/track.js'),
    ],
  },
  output: {
    path: path.resolve(__dirname, 'public/dist/', pkg.version),
    filename: `c.js`
  },
}