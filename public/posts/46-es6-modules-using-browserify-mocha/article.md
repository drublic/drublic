<p class="post__intro">
  When writing JavaScript applications or websites a lot of developers write
  unit tests to ensure the code does what it is supposed to do. The hottest code
  uses ES6 and transpiles to ES5 with Babel.
  Mocha is pretty popular as a testing framework these days. Bringing these
  tools together can be cumbersome. Here is how you do it.
</p>

My work on JavaScript applications usually includes writing unit tests.

With some of my latest projects I wrote my JavaScript applying some of ES6's
sugar and utilize Babel with Browserify to transpile the code to ES5.

Setting up a testing infrastructure with Mocha I discovered some impediments
which I had to work around. Let’s have a look at the details.

## ES6 Modules

ES6 Modules provide a way for developers to define dependencies between
different JavaScript files. Modules export certain properties for other
programs to use. These programs can import whole modules or their functionality
selectively.
ES6 Modules are designed to replace current dependency management approaches as
AMD and CommonJS.

If you want to know more about ES6 Modules,
[read Axel Rauschmayer's article](http://www.2ality.com/2014/09/es6-modules-final.html).

### Example Module and Spec

Here is an example module and specification.

<script src="https://gist.github.com/drublic/2eb5f4325e7459f16d78.js"></script>

## Testflow

    [module]
    [module] --> app/index.js --> test/index.js <-- Mocha
    [module]                                          ^
                                                    Babel

### Browserify and Babel

Compiling with Browserify using Babel is pretty easy. You just need to run

    browserify -t [ babelify ] app/index.js -o dist/index.js

This requires `browserify` and `babelify` to be installed:

    npm i --save browserify babelify

You can now use the first command as a script in your `package.json`.

<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon icon--info">
  <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
</svg> I cover the usage of
[npm as a build tool in another article](./npm-builds).

With this we have set up the ES6-to-ES5 compile step which generates a new file
which we can use in out application.
The next step is to set up testing with Mocha.

### Testing with Mocha

You can install Mocha – it's always the same – with npm. You need an assertion
library too. I use Chai. You can install both tools like this:

    npm i --save mocha chai

Running tests with mocha is as easy as

    mocha test/index.js

If you don’t use ES6 and don’t need to transpile to ES5 you’re done with the
Mocha setup. Otherwise you will have to do more.

There is an option for Mocha to treat JS as ES6: `--harmony`. Unfortunately this
does not implement ES6 Modules and other features. This is why we want to use
Babel to be utilized by Mocha to compile JavaScript. Mocha has an option
`--compilers` which helps with this:

    mocha --compilers js:babel/register test/index.js

Now Mocha compiles JavaScript while running and we’re save to use the latest ES6
features.

Furthermore we need an initial file which is our entry point for Mocha running
on Node.js. I named this file `test/index.js`, as you can see.
All it does is it requires Chai and the test suites:

    global.chai = require('chai');
    global.expect = global.chai.expect;

    // Load test suites
    require('../module.spec.js');

You can do more test specific stuff here as for example bootstrapping
[jsdom](https://github.com/tmpvar/jsdom).

## Test Coverage with Istanbul

It gets a bit tricky if you want to generate coverage reports using
[Istanbul](https://gotwarlost.github.io/istanbul/). You need to pass the
compiler to the files you want to test and use `_mocha` instead of `mocha` in
order to get it to use Babel to compile the JS.

    istanbul cover _mocha -- --compilers js:babel/register test/index.js

If you don’t use ES6 and don’t need to transpile to ES5 you can use

    istanbul cover mocha test/index.js

Don't forget to install Istanbul:

    npm i --save istanbul

To exclude the specification file from the coverage report you can pass the
option `-x` to Istanbul:

    istanbul cover _mocha -x '**/*.spec.js' -- --compilers js:babel/register test/index.js

## Conclusion

If you searched Google for an hour to fix this workflow and you can finally use
all nice features ES6 provides, setting up Mocha with Babel is totally worth it.
But luckily I have already done this search.

Have you used Mocha with the latest ES6 features? Which tools did you use? Let
me know and tweet me at [@drublic](https://twitter.com/drublic).
