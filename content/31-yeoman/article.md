After <a href="http://yeoman.io/">Yeoman</a> was announced in the end of June while it was still in private beta developers were looking forward to use it soon. It was introduced as a tool that helps developers building web-apps while not having to care too much about the general boilerplate-coding to build a solid base for every project and to help performing tasks to bring your project into production.

Now that Yeoman is available for everyone as Open Source the question how to use it in daily projects arises. I’ll try to give you a short overview on what you can expect from it and what will be helpful. If you haven’t had a look at it this article might help you.<br>
<span id="more-1050"></span><br>
To check out how you can install Yeoman, please refer to the <a href="http://yeoman.io/">Yeoman-homepage</a>, you will find detailed information there. You will also find more information on how to use Yeoman’s features. You might want to check out <a href="http://www.adobe.com/devnet/html5/articles/yeoman-at-your-service.html">this article</a> on one of the Adobe blogs. Also <a href="http://net.tutsplus.com/tutorials/tools-and-tips/say-yo-to-yeoman/">Nettuts+ has an article with deep information</a> on how to use Yeoman.<br>
By default Yeoman supports Linux and OSX, but you can also <a href="http://www.decodize.com/css/installing-yeoman-front-end-development-stack-windows/">find a way of installing it on Windows</a>.

## Reduce Time Doing Repetitive Tasks

On the project’s homepage you can find some features they are praising. Let’s get a short overview on what Yeoman may help you with:

There are some things that steal your time when you work on a project. Yeoman is here to help you reduce the time you spent on these to focus more on the actual process of writing clean and lightweight code.

<iframe width="675" height="380" src="http://www.youtube.com/embed/vFacaBinGZ0" frameborder="0" allowfullscreen=""></iframe><br>
<i>Addy Osmani explains the main features of Yeoman.</i>
<h3>Starting Projects &amp; Maintaining Them</h3>

Starting a project and maintaining it requires some time. You need to manage compiling your CoffeeScript and SASS styles if you use it. Yeoman does this for you. When it’s done it reloads your project-page automatically using its LiveReload functionality – you are used to this from LiveReload or CodeKit apps.<br>
It also lints your JavaScript and ensures that you write straightforward code. Writing code like this requires that you have some proper tests that guarantee that your code is working correctly. Yeoman includes <a href="http://visionmedia.github.com/mocha/">Mocha</a> so you can write unit tests by default and runs your tests on the fly in a headless browser so you can be sure everything runs smoothly. (Yeoman let’s you use Jasmine out of the box too, you just need to set a flag while initializing.)

All that sounds good but you need to start your project somehow. For me building a basis means taking <a href="https://hansreinl.de/archive/building-advanced-initial-boilerpalte/">init</a> and extending it to my needs – manually. Manually adding libraries, maintaining their versions. Manually adding styles like these of Twitter Bootstrap.<br>
With Yeoman you get an initial process to lay out your projects by your needs. Apart from that you can pull in plugins and scripts by just running a single command.

When dealing with client-side MV*-frameworks such as Backbone.js or Ember.js you need to create a bunch of files such as models or views from time to time. By using Yeoman generating these can be done automatically and reduces the time you spend writing boilerplate code.

While developing Grunt is there for all my needs to lint my JavaScript, compile SASS and provide a node-based server. These tasks can all be done by Yeoman which is based on Grunt too.

The work I have to do over and over again is something I want to avoid. In fact that’s why I created init. But init may not fit the need of another developer. <a href="https://twitter.com/hellokahlil">Kahlil</a> for instance has <a href="https://github.com/kahlil/jumpstart">jumpstart</a> which is pretty similar to init but with some other defaults.<br>
Exactly this point is where Google tries to help out with Yeoman.

### Roll Out Apps

When putting the project to production you don’t want your live website to be affected by mistakes you made while developing. That’s what you got tests for. You run them just before you roll out a new feature. Save the time while doing this automated with Yeoman.

On the web you read a lot about performance of an app, especially slow connections on for example mobile devices with slower processors require that you serve the smallest amount of scripts and stylesheets, optimized sources and minified code. But do you really want to think about all this every time you want to deploy your project? Yeoman integrates minifying scripts and stylesheets, optimizing your images insanely and putting it all together in a package for you to deploy. Just run a command and you are all good.<br>
Apart from that you don’t need to worry about your app not being available offline: Yeoman generates an application cache manifest for you.

## “I Use Other Tools. Yeoman Can’t Help Me!”

The good thing is that you can extend Yeoman to your needs. If you are using LESS instead of SASS just pull it in. As Yeoman builds upon Grunt you are all free to change the tools Yeoman builds uses. With <a href="https://github.com/yeoman/generators/">Yeoman Generators</a> it’s easily possible you extend Yeoman’ initialization process with your needs.<br>
Yeoman has some solid defaults but you are not chained to them.

## Save Your Time, Automate

All the above mentioned doesn’t keep you from writing the code for your app. But isn’t this the part where you want to focus mostly on?

When working on a team it is essential to have a solid process of checking the maintainability and code standards, if everyone’s code is working and automated unit testing. Yeoman is a great Open Source project by people who know how to deal with the problems that you may run into and tackles exactly these points.<br>
To ensure you are doing it right and save time doing things over and over again, try using Yeoman, it will help.
