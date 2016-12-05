'use strict';

const fs = require('fs');

const pkg = require('../package.json');

const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const nano = require('cssnano');
const atImport = require('postcss-import');
const customProperties = require('postcss-custom-properties');

const srcPath = `public/dist/${pkg.version}/`;
const destPath = `public/dist/${pkg.version}/`;
const filename = 'c.css';

const processors = [
  atImport,
  customProperties,
  autoprefixer
];

const css = fs.readFileSync(srcPath + filename, 'utf8');

postcss(processors)
  .process(css, {
    from: srcPath + filename,
    to: destPath + filename
  })
  .then((result) => {
    fs.writeFileSync(destPath + filename, result.css);

    if (result.map) {
      fs.writeFileSync(destPath + filename + '.map', result.map);
    }
  });
