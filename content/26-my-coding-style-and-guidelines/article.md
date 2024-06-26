
After Harry Roberts published his <a href="http://csswizardry.com/2012/04/my-html-css-coding-style/">HTML/CSS coding style</a> I’ve decided to follow his call and write down how I like to code and what my guidelines for HTML and CSS coding are.<br>
This article is only a way to describe what <em>I</em> like to do – but it is by far not a recommendation or something. I have not really tried to “canalize” the coding style I do before but it is about time to do so and to write it down. Please let me know if you think that there are ways to do certain things better or in a more understandable way through comments.

Harry points out some over all pretty solid ways to keep the markup readable which I use too. The major one is <strong>whitespace</strong>, I think. To be true, I <em>love</em> whitespace. But I’ll come to this later.

## General

### Tabs or Spaces?

Personally I’ve learned to use tabs instead of spaces just a few weeks ago. Lea Verou <a href="http://lea.verou.me/2012/01/why-tabs-are-clearly-superior/">lists up</a> some arguments, why she thinks using tabs is the way to go. But there are still some use-cases for spaces she describes.<br>
At <a href="http://gebruederheitz.de/">/gebrüderheitz</a> I’ve discussed using spaces with <a href="http://www.t3node.com/">Steffen</a> before. He works a lot with PHP and uses Tabs since… – ever! I have been using spaces because I ran into some difficulties with tabs in the past where code was totally wrong indented and stuff. But at the moment everything runs pretty smooth and I am happy with how it is.

### Lettercase

HTML5 and CSS let you write code how ever you want to: UPPER-CASE, lower-case, CaMeL-cAsE. So this is all the same:

<div class="wp_syntax"><div class="code"><pre class="xml" style="font-family:monospace;"><span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;section</span> <span style="color: #000066;">id</span>=<span style="color: #ff0000;">"a-lovely-header"</span> <span style="color: #000066;">class</span>=<span style="color: #ff0000;">"contains-a-logo"</span><span style="color: #000000; font-weight: bold;">&gt;</span></span>
<span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;SECTION</span> <span style="color: #000066;">ID</span>=<span style="color: #ff0000;">"A-LOVELY-HEADER"</span> <span style="color: #000066;">class</span>=<span style="color: #ff0000;">"CONTAINS-A-LOGO"</span><span style="color: #000000; font-weight: bold;">&gt;</span></span>
<span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;SeCtIoN</span> <span style="color: #000066;">iD</span>=<span style="color: #ff0000;">"a-LoVeLy-HeAdEr"</span> <span style="color: #000066;">ClAsS</span>=<span style="color: #ff0000;">"cOnTaInS-a-LoGo"</span><span style="color: #000000; font-weight: bold;">&gt;</span></span></pre></div></div>

You have to make sure you use the according class in CSS and id in JavaScript, because they are both case-sensitive.

I use lower-case exclusively. I’ve never tried to use anything different as it does not seem natural to me. Apart for that, WHO THE HELL WANTS SO READ UPPER-CASE ALL THE TIME?! IS THE CODE REALLY YELLING AT YOU? HAVE YOU EVER SEEN THIS IN A SERIOUS BOOK? Ok – to be fair, I’ve never seen a serious book with all lower case. But camel-case? C’mon…<br>
Camel-Case in JavaScript is totally perfect though.

## HTML

Harry names a view key parts of HTML styling which I use and some I really do not like.

### Unquoted Attributes

I <em>never</em> write unquoted attributes. Harry states that this is something he does, because he can. Well… That’s true. But as he points out he has some rules where he quotes attributes for example for generated content or content that changes a lot.

His opinion on using double-quotes for all the attributes is obvious, anyway:
<blockquote>
It is more consistent on the whole, but by introducing rules I make my own consistency; if you can get away with not using quotes, then do so.</blockquote>

For me the rule “Don’t confuse others” applies here: When another programmer who is not familiar with writing attributes without quotes has to edit my code in a later stage of a project or just when checking the source of a project and sees this, she might be confused with what I wrote.<br>
Apart for that, writing attributes without quotes is error-prone.

<strong>An example:</strong> You use the <a href="http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/">Media Object</a> as described by Nicole Sullivan for your styles and need a button, you will probably add a class <code>btn</code> to your link. The action that this button takes care of is the primary target of a website. Thus you add another class <code>primary-btn</code> to the <code>class</code>-attribute. If you don’t use quotes, you’ll have to add them now. It may occur that you forget them. And now what?! You are screwed. This will lead into searching your template over and over again until you find this nasty little mistake you made earlier. I don’t want this! I like code that’s pretty much straightforward.

To be fair I have to say, that I use a build script for my code before it goes into production which minifies my HTML-code and thus removes unnecessary quotes. But this does not change my development coding style.

### Self-Closing Tags

Omitting self-closing tags is a thing I really love about HTML (over XHTML). You can omit the closing tag. Actually I’ve seen people not using self-closing tags on images or inputs but using them in meta-tags. I don’t know what the sense behind this might be.<br>
I just do not use them anywhere.

### Optional Closing Tags

This is a thing people may get confused about, too. Just a view days ago someone <a href="https://github.com/h5bp/html5-boilerplate/pull/1058">re-filed the issue of missing closing tags</a> for HTML5 Boilerplate’s 404-error-page template because he was confused of the missing stuff I guess. That’s why I try to always use the optional closing tags&nbsp;– again: don’t confuse anyone. At least I <em>try</em> to.

I remember Paul Irish had a great usage of optional closing tags for tables where you can align rows by using whitespace, so you can see the table’s layout in HTML. Not working with generated data, though.

Here’s the example

<div class="wp_syntax"><div class="code"><pre class="xml" style="font-family:monospace;"><span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;table<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>
  <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;tr<span style="color: #000000; font-weight: bold;">&gt;</span></span><span style="color: #000000; font-weight: bold;">&lt;th<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>Name           <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;th<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>Country       <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;th<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>Nonsense
  <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;tr<span style="color: #000000; font-weight: bold;">&gt;</span></span><span style="color: #000000; font-weight: bold;">&lt;td<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>Rick Astley    <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;td<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>England       <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;td<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>Rickrolling
  <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;tr<span style="color: #000000; font-weight: bold;">&gt;</span></span><span style="color: #000000; font-weight: bold;">&lt;td<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>Chuck Norris   <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;td<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>United States <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;td<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>Roundhouse-Kick
  <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;tr<span style="color: #000000; font-weight: bold;">&gt;</span></span><span style="color: #000000; font-weight: bold;">&lt;td<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>Emeli Sandé    <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;td<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>Scotland      <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;td<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>Singin – Fo realz!
<span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/table<span style="color: #000000; font-weight: bold;">&gt;</span></span></span></pre></div></div>


### Whitespace

Oh yeah, whitespace. As I already pointed out I <em>love</em> whitespace in my code. Everything is a bit more obvious when you divide it into small parts. It gets easier to scan the code I think. Comments help with this too.<br>
I like to divide bigger chunks of a page with a lot of whitespace. For example if you have a content-area and a sidebar, I try to keep them separate by using whitespace.<br>
Apart from that grouping elements like definition-list-entries helps a lot with the readability of code.

I’ve made a gist with <a href="https://gist.github.com/2466291">an example-file</a>. Check it.

## CSS

Using ids in CSS is something I try to avoid but it strikes me sometimes and I just do it if there are already ids defined on some elements. Mostly these are identifiers for header- or footer-sections. But I think it’s better use classes for styling concernes and ids for JavaScript and other stuff.

Anyway… The next part will not be about vanilla CSS. I use <strong>SASS</strong> (SCSS) nowadays and recently re-factored a corporate website for one of our customers at /gebrüderheitz in SASS. I want to share the way I worked with a lot of CSS in this case and did it sometimes before.

### Structure

The website has a lot of styles which had to be refactored. These were organized in one big file that has about three thousand lines of code. I do not like to have a file that has so many code and is not clear by looking at it at first.<br>
So I have decided to split up several parts into different files.

Before the refactoring we made an online style-guide, defining the elements that appear on the side. This style-guide will be used in other projects for the same customer, too and is essential for a corporate website. We tried to define as much as possible but also let designers have a free hand at what they do.

For all SASS-files I use a folder-structure which looks like this:

<div class="wp_syntax"><div class="code"><pre class="xml" style="font-family:monospace;">+ CSS
  + elements
  + helpers
  + modules
  + page
  styles.scss</pre></div></div>

  The <code>styles.scss</code> file has a brief description of the project, who wrote the styles (copyright…) and includes (with <code>@include</code>) all other files which lie in the created folders.
<h4>+ helpers</h4>

<code>helpers</code> contains a file with pre-defined mixins, another file with all the variables for the project, a reset (in my case this is most of the HTML5 Boilerplate CSS, which contains <a href="http://necolas.github.com/normalize.css/">Normalizer.css</a>) and some other helper-classes which I use via mixins or with SASS’ <code>@extend</code>-method.
<h4>+ elements</h4>

In the element folder I include files with styles for styling native HTML elements. I’ve got a file named <code>typography</code> which contains definitions for the general copy-text, headlines, links, quotes aso. Another file contains all stylings that are connected to lists in the content (unordered-, ordered- and definition-lists). This folder also includes the styles for forms and tables.
<h4>+ modules</h4>

I mentioned the style-guide we defined for this project. This was a great help for me when dividing the CSS into parts because I was able to see which modules were needed for the page: boxes, a paginator, <a href="https://www.hansreinl.de/archive/how-to-build-accordion-using-css-and-jquery/">an accordion menu</a>, the navigation and some other stuff.<br>
For each module I have an own file which contains the styles of only one modules. So when I need to change something that has to do with the paginator, I’ll head over to the according file and change the desired values. This saves me a lot of searching and scrolling through a file. Apart from that, Sublime Text’s “Find in files” (cmd + Shift + F) feature lets you search trough all files in a project which is pretty handy. Text Mate has something similar I think. And if your editor does not support it, fire up the console and <code>grep</code> for the things you want to find.
<h4>+ page</h4>

This last folder contains all files that add a separate styling for any page or part of the website. Typical content might be the general layout and the header and footer styling for a page. Furthermore I define styles for an area of a website in this folder – e.g. if events need more styles than defined in the modules section, or a contact-form that has some extended stylings.
<h4>And More?</h4>

We have not yet done the styling for the mobile version of this website and thus the styles are not yet included into the project’s folder structure. Styles that are specific for devices with smaller width will go into a <code>mobile</code>-folder.<br>
Another thing are stylesheets for print or other media. I’ve not yet found a proper way to include these. If you have any idea for this, let me know.

### Whitespace &amp; Comments

Back to the main CSS styling guidelines for my projects.

Typically I try to avoid too much rulesets in one file but sometimes you need to do this to not split one feature into several files, which is not the sense behind this modal.<br>
Comments are a thing that help everyone reading the defined styles to unterstand them better. Most of the class names are pretty obvious and thus don’t require any further explanation. But if you define styles that are not obvious at the first glance or you need to use browser-hacks in any form it can be helpful for other programmers to include a short comment. At least I do it this way.<br>
I try to think about “other programmers” as the programmer I might have become in three month, when I will look at the defined styles again. If <em>I</em> don’t know what I did three month ago, how is anyone else supposed to understand it. This needs to be avoided.

### Formatting

One thing Harry mentions is that he does not use a lot of whitespace in his rulesets. I am allergic of this style of writing. I like to have really clean styles as this:

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;"><span style="color: #6666ff;">.some-rule</span> <span style="color: #00AA00;">{</span>
  <span style="color: #000000; font-weight: bold;">float</span><span style="color: #00AA00;">:</span> <span style="color: #000000; font-weight: bold;">left</span><span style="color: #00AA00;">;</span>
  <span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">:</span> <span style="color: #cc00cc;">#666</span><span style="color: #00AA00;">;</span>
  <span style="color: #000000; font-weight: bold;">text-decoration</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">underline</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span></pre></div></div>

For vendor <strong>prefixes</strong> he indents every rule so he can use typing in columns. As I use SASS I don’t really have to care about this. But I like the way he does it. I’ve done it the same way when I used to write vanilla CSS.

<strong>Indenting</strong> is somehow essential for <a href="https://www.hansreinl.de/archive/the-css-hierarchies-module-level-3/">the CSS nesting</a> in SASS. For rules where the nesting does not work I don’t indent though.

## And A Lot More

This is not everything that applies to my HTML and CSS workflow / guidelines. I hope I can write more about stuff like this in the future and share more of my thoughts. Feedback on my thoughts would be great.

Also: If you have some time, write down what your way of coding is. Share it on Twitter with the hashtag <a href="https://twitter.com/#!/search/realtime/%23codestyle">#codestyle</a>.
