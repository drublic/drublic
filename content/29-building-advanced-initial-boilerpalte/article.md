
Since some time I found myself defining a good starting point for a new project over and over again. While I use <a href="http://html5boilerplate.com/">HTML5 Boilerplate</a> in nearly all of my projects it’s not enough as an initial package. Since I’m using SASS (in its dialect SCSS) and have some other things I define over and over again I decided to set up a package that lets me start easily and includes a lot of tools that are necessary for my projects.

This is an introduction to <a href="https://github.com/drublic/init"><em>init</em></a>, the starting point for projects that require a bit more than just HTML5 Boilerplate.

<a href="https://github.com/drublic/init" class="button">Visit project on GitHub</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="https://github.com/drublic/init/downloads" class="button">Download</a>

## Not just HTML5 Boilerplate …

With HTML5 Boilerplate we are creating an awesome starting point for front-end developers that want to use a solid boilerplate that has defaults that are useful for everyone. Besides that we want to keep it simple and straightforward. That’s why adding a preprocessor or complex dependencies to HTML5 Boilerplate is not possible.

For the team I’m working with at <a href="http://gebruederheitz.de/">/gebrüderheitz</a> and me it’s important to have a solid basis for projects we do that we can use over and over again. Other developers have this need too and that’s why there is <a href="http://twitter.github.com/bootstrap/">Twitter Bootstrap</a> or <a href="http://foundation.zurb.com/">ZURB’s Foundation</a> (just to name two) out there.<br>
Just while developing this project my buddy <a href="http://kahlil.co/">Kahlil</a> came up with a nearly similar approach: <a href="https://github.com/kahlil/h5bponcrack">HTML5 Boilerplate on Crack</a>. He has different things in his package then <em>init</em> has. Keep an eye on that.

## Simplify Development

For <em>init</em> I decided to use <a href="https://github.com/cowboy/grunt">Grunt.js</a> as a development- and deployment-tool. Grunt is a Node.js based task-oriented tool that simplifies developing and deploying JavaScript a lot. Since Grunt has a big and valuable community there are a lot of plugins that you can use with it to help developing HTML and CSS too.<br>
Currently <a href="https://github.com/h5bp/html5-boilerplate/pull/1140">we are thinking about including Grunt into HTML5 Boilerplate</a>, which is a great step in moving the project to the next stage.

As stated before I love using SASS as a preprocessor and I have some structure I like to apply to my SCSS-development files which I already outlined in my post about <a href="https://hansreinl.de/archive/my-coding-style-and-guidelines/">my personal coding guidelines</a>. This requires to have Ruby installed on your local machine to compile SCSS into a CSS-file or to use a tool like <a href="http://incident57.com/codekit/">CodeKit</a> that does everything for you. I am actually a big fan of CodeKit but also like to have the compilation as part of my whole build process for a website.

SCSS compilation is integrated in <em>init’s</em> Gruntfile.<br>
By running <code>grunt watch</code> you start a process which watches for changes in your SCSS-files and compiles the CSS-file automatically unsing <a href="https://twitter.com/sindresorhus">Sindre Sorhus’</a> awesome Grunt-plugin <a href="https://github.com/sindresorhus/grunt-sass">grunt-sass</a>. Besides that the <code>watch</code>-task recognizes changes in your JavaScript files and lints them on the fly.

If you’re not dependent on any special server-environment you can easily fire up <code>./server.sh</code> on your console to start a small Ruby-server with a tab in your favorite browser.

There are a lot of other goodies in the project. Please visit GitHub and <a href="https://github.com/drublic/init#readme">read the project’s readme-file</a> for more information.

I’d also encourage everyone to keep an eye on <a href="http://yeoman.io/">Yeoman</a> since I think it can do a lot more then my package does and will be awesome. It will be available soon.

## It’s Open Source

This project is Open Source and I would love to see some people chiming in and <a href="https://github.com/drublic/init/issues">discussing the project</a> in its current state to make it better. I’d love to get some feedback from all of you!

Apart from that please feel free to use it for your projects. It’s all under MIT License and thus pretty much there for all your needs.

Thanks for being awesome, community &lt;3!!
