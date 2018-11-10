const path = require('path')
const pkg = require('./package')

module.exports = {
  mode: 'production',


  entry: {
    main: path.resolve(__dirname, 'src/js/index.js'),
  },

  output: {
    path: path.resolve(__dirname, 'public/dist/', pkg.version),
    filename: `c.js`
  },

  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' }
    ]
  },
}
