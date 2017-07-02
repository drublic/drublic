'use strict';

const fs = require('fs');

const pkg = require('../package.json');

const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const nano = require('cssnano');
const atImport = require('postcss-import');
const customProperties = require('postcss-custom-properties');

const srcPath = `src/css/main.css`;
const destPath = `public/dist/${pkg.version}/c.css`;

const processors = [
  atImport,
  customProperties,
  autoprefixer
];

const css = fs.readFileSync(srcPath, 'utf8');

postcss(processors)
  .process(css, {
    from: srcPath,
    to: destPath
  })
  .then((result) => {
    fs.writeFileSync(destPath, result.css);

    if (result.map) {
      fs.writeFileSync(destPath + '.map', result.map);
    }
  });
