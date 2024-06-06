
Since a while now word has spread to use the CSS unit `rem` for font-sizes and values in CSS. Here I want to explain how you can use a fallback in Sass or LESS to get `rem` working in all browsers.

<a href="https://gist.github.com/4374738" class="button">View Gist with mixins</a>

## Why rem?

Let’s look into what `rem` means. We know of the `em` unit which is relative to the font-size of the parent element it is defined on. This means if one of the parents in the DOM-tree changes its font-size, the font-size of the child element changes too. In contrast the `rem` unit is relative to the root element of the page (this means the `html` element). Thus it is possible to define a font-size once on the root and make all other sizes depending on this size. Please switch over to <a href="http://snook.ca/archives/html_and_css/font-size-with-rem">Snook’s blogpost explaining what `rem` is</a> to get more information about it.

If you ask yourself why you should use `em` instead of `px`, Chris Coyier wrote <a href="http://css-tricks.com/why-ems/">an article on why he switched to `em`</a> instead of pixels a while ago for nearly all properties using units in CSS. Read this to understand why `em` and thus `rem` is so important.

I would encourage you to use `rem` (or at least `em`) for properties like `padding`, `margin` and sometimes even `width` instead of pixels. It makes your design even more responsive.

The drawback of `rem` is that it is not supported in all browsers that are used, even though <a href="http://caniuse.com/rem">the support looks pretty good</a>: Internet Explorer is capable of dealing with `rem` since version 9. The versions before need a fallback. It is supported on the major mobile browsers except Opera Mini. Let us have a look on how we can define such a fallback using Sass or LESS.

## A Sass Mixin

In order to get the pixel-based auto-calculation working as a fallback we need to define the font-size as a variable in Sass or LESS.<br>
The following examples are in Sass with the SCSS-syntax.

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;">$main-<span style="color: #000000; font-weight: bold;">font-size</span><span style="color: #00AA00;">:</span> <span style="color: #933;">16px</span><span style="color: #00AA00;">;</span></pre></div></div>


We can now use this default font size on the root element:

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;">html <span style="color: #00AA00;">{</span>
  <span style="color: #000000; font-weight: bold;">font-size</span><span style="color: #00AA00;">:</span> $main-<span style="color: #000000; font-weight: bold;">font-size</span><span style="color: #00AA00;">;</span></pre></div></div>


Now we define a mixin that provides a fallback pixel-based size of the property based on the variable we defined before and in `rem` for capable browsers.

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;"><span style="color: #a1a100;">@mixin x-rem ($property, $value) {</span>
  #<span style="color: #00AA00;">{</span>$property<span style="color: #00AA00;">}</span><span style="color: #00AA00;">:</span> $value <span style="color: #00AA00;">*</span> $main-<span style="color: #000000; font-weight: bold;">font-size</span><span style="color: #00AA00;">;</span>
  #<span style="color: #00AA00;">{</span>$property<span style="color: #00AA00;">}</span><span style="color: #00AA00;">:</span> #<span style="color: #00AA00;">{</span>$value<span style="color: #00AA00;">}</span>rem<span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span></pre></div></div>


What the mixin does is, that it takes the `$property` and calculates the value in pixels. This simple mathematic function is part of Sass. The `$value` argument is a decimal digit.

I like to prefix my own mixins with `x-` to easily distinguish them from other mixins. This is <a href="https://github.com/necolas/idiomatic-css#preprocessors-additional-format-considerations">a part of the Idiomatic CSS principles</a> by Nicolas too. I think previously I prefixed them with a namespace (mostly it was `the-` as a prefix, so you get `the-transition`) – but since there is a better convention with Idiomatic CSS I switched to it.

This mixin can be called like in the following examples:

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;"><span style="color: #a1a100;">@include x-rem(font-size, 1.4);</span>
<span style="color: #a1a100;">@include x-rem(padding-left, 2);</span></pre></div></div>


The output that is being produced looks like this for the first example:

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">font-size</span><span style="color: #00AA00;">:</span> <span style="color: #933;">22.4px</span><span style="color: #00AA00;">;</span>
<span style="color: #000000; font-weight: bold;">font-size</span><span style="color: #00AA00;">:</span> 1.4rem<span style="color: #00AA00;">;</span></pre></div></div>


You can use Sass’ <a href="http://sass-lang.com/docs/yardoc/Sass/Script/Functions.html#round-instance_method">`round()`</a> function to get an integer output for the px-based output. But every browser is capable to round `22.4px` by itself to `22px` since it is not possible to display 0.4px after all. (LESS has <a href="http://lesscss.org/#-math-functions">the same function</a>.)

## A Few Words On The LESS Mixin

In LESS interpolation for properties is current not possible with version 1.3.x. The maintainers <a href="https://github.com/cloudhead/less.js/pull/698">aim to include it in version 1.4</a>. For the time being we need to define a workaround for properties which is basically a JavaScript function which returns a sting that consists of two properties instead of one, while the first one is `-` which is basically no property an thus disregarded by the browser. The second is the property that we want to use.

Here is the first line of the mixin:

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;">-<span style="color: #00AA00;">:</span> ~`<span style="color: #00AA00;">(</span>function <span style="color: #00AA00;">(</span><span style="color: #00AA00;">)</span> <span style="color: #00AA00;">{</span> return <span style="color: #ff0000;">';@{property}: @{px-fallback}'</span><span style="color: #00AA00;">;</span> <span style="color: #00AA00;">}</span><span style="color: #00AA00;">(</span><span style="color: #00AA00;">)</span><span style="color: #00AA00;">)</span>`<span style="color: #00AA00;">;</span></pre></div></div>


This only works if the LESS compiler uses the actual JS library. It does not work with lessphp or other compilers that are not JavaScript based.

## Final Words

And that is it. The mixin provides a decent fallback for `rem`-based sizes of all kind. Since CSS runs stable with this version of a fallback and overwrites the pixel-based value because of CSS’ cascade we can use it without any problems. It works in old Internet Explorers.

Life is easy with `rem`. So look at the Gist and use the rem-fallback-mixins.

<a href="https://gist.github.com/4374738" class="button">Sass and LESS mixins</a>

## Credit

I want to mention that I first saw this technique used by <a href="http://nimbupani.com/">Divya Manian</a> a year ago (beginning of 2012) when working on the <a href="http://api.html5please.com/">HTML5 Please API</a> project. I am not sure who developed this technique or where it comes from. Please let me know if you have a link.

<strong>Addition:</strong> The <a href="https://github.com/ericam/susy">Susy framework</a> has <a href="https://github.com/ericam/susy/blob/master/sass/susy/_units.scss">a Sass mixin</a> which lets you easily convert units including the rem unit and a fallback as described here. (Head-tip <a href="https://twitter.com/fabianbeiner">Fabian Beiner</a>.)

<strong>Addition 2:</strong> <a href="https://www.hansreinl.de/archive/rem-fallback-sass-less/#comment-957">Steffen</a> wrote <a href="https://gist.github.com/4530526">a Sass mixin</a> which lets you use the short notation of properties like `margin` or `padding`. Even mixing values as px and rem is working. Cheers!
	</div>
