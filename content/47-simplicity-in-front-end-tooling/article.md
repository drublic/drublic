<p class="post__intro">
  We tend to solve a lot of problems related to the front-end by delegating them
  to existing programs. We use libraries and tools which we don’t understand
  completely - our code base grows and grows. But lately this trend seems to
  change and we slowly re-consider what we can do best: develop front-end code.
  What can we expect from this new trend and how can we use them in out daily
  business today?
</p>

<figure class="image image--block" markdown="1">
  ![](/assets/tooling.jpg)

<figcaption class="image__caption image__caption--no-border" markdown="1">
  By cleaning up your front-end tool stack and it becomes easier to use it.
  <span class="image__caption__copywrite">[Barn Images](https://unsplash.com/barnimages)</span>
</figcaption>
</figure>

<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon icon--warning icon--left">
  <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z">
</svg> Disclaimer: This article was first published in
[Screen Guide Magazine](http://screengui.de/) in No. 26 in German as the
_Working Draft Kolumne_.

A few years ago designers developed a trend for more streamlined minimalistic
websites. WordPress templates were not polluted by bubblegum artworks but became
more functional. Blogs begun to focus on the content instead of design. “Do one
thing, do it right” became a credo.

## Tooling to the Rescue

Contrary to this developers used more and more tools to create websites,
complexity of front-end code grew and we expected developers to know about all
the tools that popped up. The positive site of this: Our work became more
professional. We started as _webdesigners_ and are now known as _Front-end
Engineers_ or _Architects_, developers with deep knowledge of programatic
paradigms and optimization workflows which you need to generate modern, good
performing and – at least – minimalistic websites.

### Pre-processors and Build Workflows

When I first used Sass a couple of years ago it was a blessing for me: Finally I
could use variables and nesting, no vendor prefixes anymore. My code became
easier to understand because I could use mixins and functions and avoid
redundancy. I played around with other pre-processors like Stylus and LESS to
discover that Sass was the most easiest to understand for me and other
developers that know CSS already.

The old Ant-based HTML5 Boilerplate builder was replaced by a modern Grunt
workflow which I finally understood at some point and was able to fix by myself
whenever I needed to. Thousands of Grunt plug-ins are now available on npm and
as a developer I only need to understand the configuration and how the different
plug-ins work together. But if you want to stack some tools together for example
RequireJS with it’s builder r.js for JavaScript modules and Jasmine utilized by
Karma for unit testing. It turns out it is not that easy to implement all these
tools to play nicely together.

## New Direction: Simplification

Within the last months the game seems to change. Developers want to leave behind
all the complexity that they have build up over time. For example in CSS
we disdain formerly loved functionality because of the experience we gathered.
Hugo Giraudel
[writes about the pitfalls of Sass’ `@extend`](http://www.sitepoint.com/avoid-sass-extend/).
Twitter and other companies do not use pre-processors for CSS anymore and move
back to use Vanilla CSS to style their web apps. This is because CSS can do
more than it used to and it will get more functionality in the near future. In
the end this is the success of developers and users of pre-processors which
engage in the discussion about the specification.

<figure class="image image--left" markdown="1">
  ![](/assets/pleeease.png)

<figcaption class="image__caption" markdown="1">
  [Pleeease](http://pleeease.io/) is a CSS post-processor
  <span class="image__caption__copywrite">Screenshot</span>
</figcaption>
</figure>

But how can we include these new features in today’s code?

In general: We add another tool to our workflow to reduce complexity. For
example [Pleeease](http://pleeease.io/) used to add compatibility for CSS
features which will be supported in browsers in the future: variables (aka.
Custom Properties) and the `color` function. This
[changed lately](https://github.com/iamvdo/pleeease/issues/52) and you
can use [cssnext](https://github.com/cssnext/cssnext) to get these features.
Pleeease still helps you with vendor specific prefixes via Autoprefixer, old IE
filter support, `rem` fallback and more.

In JavaScript we use ES6 transpilers like [Babel](https://babeljs.io/) to add
new language features like object orientation, block level variables and
modules. These tools transpile “new” code to code which can be understood by
today’s browsers.

For app developers there is another player in this game:
[CSS Modules](https://github.com/css-modules/css-modules) - compiling your CSS
through JS. This approach clearly helps you in writing less complex styles since
the scoping of these styles become very clear. On the other hand you move more
complexity to your JavaScript and don’t respect the approach of separation of
concern.

## Pre-Processor vs. Post-Processor

What a contradiction. We trade pre-processors for post-processor and thus
replace one tool by another. This doesn’t seem to be the way we want to go. BEM
becomes the de facto standard in CSS class naming but on the other hand most
developers don’t understand their own class names from a couple of years ago.
JavaScript libraries which provide helpers such as `map`, `forEach` or `reduce`
get banned from our code because browsers can do it on their own by now. But we
include new, more complex libries to build stuff faster as before. Who really
knows the difference between React.js Components and Angular Directives on first
sight?! And then again Polyfills fill the gap which new technology bring to our
browsers.

Apart from that we can utilize front-end frameworks such as Bootstrap and
Foundation that provide a great starting point for certain projects. Finding an
entrance to those toolkits is made easy for most developers. If you try to
understand what is really going on these component libraries become complex
monsters and hard to handle.

With Grunt and Gulp as build tools it’s the same: We only replace existing tools
like Ant and Make - same as we did with HTML5 Boilerplate’s build tool.

> I get the feeling we just transfer complexity somewhere else.

This is what my Working Draft co-host Stefan Baumgartner says to the new trend
to use npm as a build tool.

<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon icon--info icon--left">
  <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
</svg> If you still want to use npm as a build tool I cover this
[in another article](https://hansreinl.de/blog/npm-builds).

## The Real Problem

For me all of this is not a real problem. Why should we pass on a tool which
makes our lives easier? We use a dedicated editor and not Text Edit to write our
code even though Text Edit is easily accessible by Mac users and you can write
the same code on both editors.

From my perspective for example Pleeease is the right approach to bring
developers back to the basics of CSS development and to promote writing simple
and thus easy-to-understand code. Furthermore ES6-to-ES5 transpilers bring new
features which are direct improvements for us as developers. But still each case
asks us to review the purpose of the technology we use.

In one of my projects we discussed how much time it was worth to ramp up a
developer who joins the team. If we differ from a certain default it takes time
to build up knowledge and to share it - whether it’s in a one-on-one
conversation or in documentation which has to be written. But the problem is
that there is no such thing as a _default_ when it comes to tools and code
conventions. It all depends on people who work with the code and can be very
individual - especially for long term projects.

To me it’s not about removing tools from your workflow. I believe it is
necessary to find the _right tool_ for each individual case and with this
keeping complexity to a minimum. This reduction should be most important. For me
personally this means that I no longer use [INIT](http://use-init.com/) as a
starting point for each and every project even though the basic functionality
seems to be the same. Complexity should be as little as possible - this is most
important.

## Conclusion

My decision to use Sass because it is easy to understand for someone who is used
to CSS was wrong. Nothing is easier to understand for someone that is used to
CSS than CSS itself. Lately in new projects I do not use Sass anymore.
Websites and apps we build become more complex year over year and we write code
for applications which should replace native software. Even here you can
find this anti-trend of removing complex structure and tools in favor of doing
“just” our work.

I mostly quit following each tool that pops up week after week. But from time to
time I test new tools and think about how they can help me with my projects -
just so I do not miss the trend. Especially if this trend is towards a more
simplistic environment.
