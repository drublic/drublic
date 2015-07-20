npm powers modern front-end development more than any other tool: It provides
you with all modules you need to set up your Node.js based environment. If you
use a build system like Gulp or Grunt you are very likely to install the modules
you need via npm.

It all starts with specifying a `package.json` file and define the direct
dependencies your project has. With running `$ npm install` npm downloads these
dependencies for your and install them in the way you need them.

But npm can do more than just installing dependencies. The one thing that I want
to talk about are __scripts__.

__Scripts__ are basically definitions of command line scripts that can be
executed using npm and can completely replace your customized Gulp or Grunt
workflow.

> [...] scripts can be executed by running `npm run-script <pkg> <stage>`.

~ From the [documentation](https://docs.npmjs.com/misc/scripts).

This post covers how to replace any other build system with npm and examples of
tools I used while rewriting the [siteeffect](http://siteeffect.io/) front-end.

## Advantages

Typically you would ask yourself why you should consider using npm instead of
any other build system. For me it was to try it out and to learn more about the
tools I use. I consider myself knowledgable with Grunt and know my way around
Gulp.

Apart from that using npm as your build tool __removes complexity__ from your
code since you don't need to know any specific APIs of another tool.
Furthermore you can __remove at least one dependency__ from the list of tools
developers and CIs need to install and work with. This means __you don't need
any abstraction layers__ for the tools you use (e.g. a lot of grunt-modules just
add a wrapper on top of an existing tool to run with grunt).

## Tools

There are some steps I typically consider with my build and development
workflow:

* JavaScript Linting and Testing
* ES6 transpiler
* Dependency Management
* JS Uglification
* CSS Pre- or Postprocessor
* File watcher

All of these solutions can be set up with commandline tools pretty easy.

### JavaScript Linting & Testing

There is an easy to understand documentation for
[ESLint](http://eslint.org/docs/user-guide/command-line-interface.html)’s and
[JSHint](http://jshint.com/docs/cli/)’s CLI interfaces.

For code style-checks you might want to use
[JSCS](https://www.npmjs.com/package/jscs). You need to add a configuration file
`.jscsrc` for JSCS to work.

For my setup I've used [Mocha](https://github.com/mochajs/mocha) with
[Chai](https://github.com/chaijs/chai) as a testing framework. You only need to
install Mocha's CLI.
Testing with Jasmine can be pretty easy too: Just install
[`jasmine-node`](https://github.com/mhevery/jasmine-node).

Furthermore you might want to get some statistics about your JavaScript code
coverage. You can use [Istanbul](https://gotwarlost.github.io/istanbul/) for
this purpose.

Now let's add a script for these tools in a `package.json` file and install all
dependencies.

<script src="https://gist.github.com/drublic/78ae510eca47e8d19fe7.js"></script>

### ES6 transpiler & Dependency Management

With the aforementioned siteeffect.io project we use React.js with ES6
components. Thus we need some kind of ES6 to ES5 transpiler. If you don't need
such a step, just skip this section.

We use Babel.js for this job since it supports React's JSX out of the box, has a
lot of good ES6 features via polyfills (through
[core.js](https://github.com/zloirock/core-js)) and a strong community.

ES6 introduces a feature which should replace AMD and CommonJS with a better
dependency management system: Modules.
[Babel supports the module syntax](https://babeljs.io/docs/usage/modules/) and
transforms it to AMD or CommonJS (default).

Let's combine it with what we did before.

<script src="https://gist.github.com/drublic/fd702768bfd553df5ab4.js"></script>

### JS Uglification

For the sake of completeness I want to point out that you can use UglifyJS for
JS minification and uglification.

For instance you can run

    uglifyjs --compress --mangle -- dist/index.js -o dist/index.min.js

to minify the file we generated with Babel.

### CSS Pre- or Postprocessor

Most devs still use a preprocessor for thier CSS as for example Sass or Less.
Some people (as for example me) want to use vanilla CSS with the enhancements of
features from the future (compare to JS where we use features from ES6, the
future) as for example Custom Properties, the `color()` function and more.

There are tools to compile your CSS via both pre- and post-processors on thier
own. But there is also [Pleeease](http://pleeease.io/) which does both at once
and has some more advantages as for example autoprefixer, rem-fallback (if you
need to support IE8) and more.

Using Pleeease with it's CLI is pretty straightforward:

    pleeease compile

Apart from that you need a configuration file called `.pleeeaserc`. The
following configuration supports the last 2 browser versions (eg. IE11 and
IE10). Thus there is no deed for certain fallbacks Pleeease includes by default.
Furthermore this configuration is made for a LESS project.

<script src="https://gist.github.com/drublic/26f5b1e3c0dfd7471d53.js"></script>

### File watcher

If you ever developed with Gulp, Broccoli or a similar build tool you sure used
some kind of watch and/or serve task to re-compile files when changing them.

To use npm as a build tool in a project it is necessary to support this workflow
too.
Per advice from [Anselm](https://helloanselm.com) I used
[onchange](https://www.npmjs.com/package/onchange) in my project. As most
tools we've used so far it's easy:

    onchange 'app/**/*.js' -- npm run babel

The part after `--` is the task you want to run if something changes.

You can even run some task before stating the watcher as for example in this
case `babel`:

    npm run babel && onchange 'app/**/*.js' -- npm run babel

Another tool which I want to try with my next project is
[watchman](https://facebook.github.io/watchman/) by Facebook which looks
promising.

One more thing is important here: Running this one watch task needs one shell.
If you want to run multiple watches you don't want to use multiple shells which
is why I integrated
[parallelshell](https://www.npmjs.com/package/parallelshell).

    parallelshell 'npm run watch:js' 'npm run watch:css'

This runs a JS and a CSS watcher in parallel.

---

Let's have a look at the current `package.json` file.

<script src="https://gist.github.com/drublic/a5de4de6bc7798e1163a.js"></script>

Now we can combile some of these tasks together to create some development and
build tasks.

## Build process

Usually we want to run some of these tasks while developing but not as a watch,
for instance tests. But there are more tasks which we need to run before a new
release – you would call this a build. And lastly a CI tool might want to run
some tests only without deploying your artifacts (Open Source projects using
TravisCI or so).

Using npm this isn't a problem at all. We can even utilize `parallelshell`.
Here are three example tasks for dev, build and a CI
<span class="typography--light">(you can scroll horizontally)</span>.

    "dev": "parallelshell 'npm run css' 'npm run linter && npm run jscs && npm run babel && npm run test'",
    "build": "parallelshell 'npm run css' 'npm run linter && npm run jscs && npm run babel && npm run uglify && npm run test-build'",
    "ci": "npm run linter && npm run jscs && npm run coverage"

You can also add different configurations for dev and build as you can see with
`test` and `test-build`.

Here is our final `package.json`.

<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon icon--warning">
  <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z">
</svg> Please remember to use configuration files for JSCS, JSHint and
Pleeease.

<script src="https://gist.github.com/drublic/6942fe7594641db13eb9.js"></script>

## Disadvantages
