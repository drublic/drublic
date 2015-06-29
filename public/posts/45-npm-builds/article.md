npm powers modern front-end development more than any other tool: It provides
you with all modules you need to set up your Node.js based environment. If you
use a build system like Gulp or Grunt you are very likely to install the modules
you need via npm.

It all starts with specifying a `package.json` file and define the direct
dependencies your project has. With running `$ npm install` npm downloads these
dependencies for your and install them in the way you need them.

But npm can do more than just installing dependencies. The one thing that I want
to talk about are __scripts__.

__Scripts__ are basically definitions of command line scripts that can be executed
using npm and can completely replace your customized Gulp or Grunt workflow.

> [...] scripts can be executed by running `npm run-script <pkg> <stage>`.

~ From the [documentation](https://docs.npmjs.com/misc/scripts).

This post covers how to replace any other build system with npm and examples of
tools I used while rewriting the [siteeffect](http://siteeffect.io/) front-end.

## Advantages

Typically you would ask yourself why you should consider using npm instead of any
other build system. For me it was to try it out and to learn more about the tools
I use. I consider myself knowledgable with Grunt and know my way around Gulp.

Apart from that using npm as your build tool removes complexity from your code
since you don't need to know any specific APIs of another tool.
Furthermore you can remove at least one dependency from the list of tools
developers and CIs need to install and work with. This means you don't need any
abstraction layers for the tools you use (e.g. a lot of grunt-modules just add a
wrapper on top of an existing tool to run with grunt).

## Tools

There are some steps I typically consider with my build and development workflow:

* JavaScript Linting and Testing
* ES6 transpiler
* JS Uglification
* CSS Pre- or Postprocessor
* File watcher

All of these solutions can be set up with commandline tools pretty easy.

### JavaScript Linting & Testing

There is an easy to understand documentation for
[ESLint](http://eslint.org/docs/user-guide/command-line-interface.html)’s and
[JSHint](http://jshint.com/docs/cli/)’s CLI interfaces.

You can add an npm script for the tool of your choice, add it as a dependency
and you are good to role.
