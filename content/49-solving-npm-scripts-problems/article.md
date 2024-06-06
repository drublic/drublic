<p class="post__intro" markdown="1">
In the past I have written about <a href="https://www.hansreinl.de/blog/npm-builds/">how I use npm scripts for my build tooling</a>.<br>
With this article I want to write about some problems I had and how I solved them.</p>


<figure class="image image--block" markdown="1">
  ![](/assets/problems.jpg)

<figcaption class="image__caption image__caption--no-border" markdown="1">
  <span class="image__caption__copywrite">https://unsplash.com/photos/FOsina4f7qM</span>
</figcaption>
</figure>


The problems I want to talk about further:

* Concurrency
* Extensive build configuration
* Build environments

The goal of setting up my build structure is:

* Building fast
* Resolve all tasks at once
* Freedom to extension

## npm vs. yarn

<figure class="image image--left" markdown="1">
  ![](/assets/yarn.svg)

<figcaption class="image__caption" markdown="1">
  [yarn](https://yarnpkg.com/): Fast, reliable, and secure dependency management.
  <span class="image__caption__copywrite">Yarn, https://github.com/yarnpkg/assets</span>
</figcaption>
</figure>

In the past couple of weeks I have decided to move all projects I work on from npm to [yarn](https://yarnpkg.com/) for builds. This is the case because I find that yarn is a lot faster than npm is.
Yarn is a package manager for the JavaScript universe. It claims to be faster as npm, reliable and secure.

There are a couple of problems when using yarn which are mostly around the cosmos of private repositories. For most of my current projects I use open libraries as dependencies, e. g. React, jQuery, lodash and others, which means that I did not touch these problems yet.

## Problem solving

As I mentioned there are a couple of problems that are very common for any projects and I want to talk about my solutions to them.

### Concurrency

For some tasks it's not necessary to run them in sync but rather to save some time while building. This is where concurrency comes into play.
For example the build for CSS can run at the same time as the build of JavaScript does.

Another example is a watcher that runs a server for the project and watches for changes in JavaScript and CSS so that it can trigger a build process.

For this task I use [concurrently](https://www.npmjs.com/package/concurrently). I've mentioned this before - and I am still very happy about this.

Usage: Just run multiple processes in parallel. For example a server and a CSS watcher:

    concurrently "yarn run server" "yarn run css:change"

Note: Please escape `"` before copy pasting this code in your `package.json`.

### Extensive build configuration

For some build processes it's necessary to configure more than just a single line of command-line magic. For this I use separate scripts. Either scripts that run as shell-scripts or on Node.js.

For example for my CSS build I use a Node script which I can easily call like this

    node ./scripts/css.js

For other scripts a bash file will come in handy.

### Build environments

When running a JavaScript build I want it to be readable in my development environment and minified and compressed in any stage or production environment. I can achieve this by using different commands for the builds.
Another thing I do is I use environment variables. You can easy check for the variables and then act accordingly.

For instance I often include configuration based on the environment. Here is an example:

Let's run the command `yarn run build` and set the environment variable like this:

    export ENV=prod && yarn run build

In Node you can detect the variable using `process.env.ENV`.

```
-- scripts
   |-- config.default.js
   |-- config.prod.js
   |-- config.stage.js
```

In `config.default.js` you can now detect if there is a configuration file for the current environment.

```
let fs = require('fs');

// You need to install the package if you want to use it.
let extend = require('deep-extend');
let parameters = process.env;

let config = {
  assetPath: 'assets/',
  debug: true,
  // ...
};

/**
 * Check if a file exits
 * @param  {String}  filePath Path to file which should be checked.
 * @return {Boolean}          True if file exits
 */
let isFile = (filePath) => {
  let stats = fs.lstatSync(filePath);

  if (stats.isFile()) {
    return true;
  }

  return false;
};

if (parameters.ENV) {
  if (isFile(__dirname + '/config.' + parameters.ENV + '.js')) {
    let envConfig = require('./config.' + parameters.ENV + '.js');

    // Merge default and environment config
    config = extend(config, envConfig);
  }
}

module.exports = config;
```

## Conclusion

Sure, there are more problems with using npm scripts. Did you find any and solve them? Let me know [via Twitter](https://twitter.com/drublic).
