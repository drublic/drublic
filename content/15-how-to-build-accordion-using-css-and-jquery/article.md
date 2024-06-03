
We’re doing a project these days where we use an accordion-menu to show some content.<br>
I want to share with you how I did this using jQuery and CSS. This is pretty easy and I want to encourage you not to use any plugin or so but to write the code yourself and learn a bit more about how to use CSS and jQuery and save some microseconds on your loading type.

## The HTML

This is kinda straightforward I think. We don’t need a wrapper for the accordion-menu. Check it:

<div class="wp_syntax"><div class="code"><pre class="xml" style="font-family:monospace;"><span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;section</span> <span style="color: #000066;">id</span>=<span style="color: #ff0000;">"experts"</span> <span style="color: #000066;">class</span>=<span style="color: #ff0000;">"accordion-item"</span><span style="color: #000000; font-weight: bold;">&gt;</span></span>
  <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;h1<span style="color: #000000; font-weight: bold;">&gt;</span></span><span style="color: #000000; font-weight: bold;">&lt;a</span> <span style="color: #000066;">href</span>=<span style="color: #ff0000;">"#experts"</span><span style="color: #000000; font-weight: bold;">&gt;</span></span>Experts<span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/a<span style="color: #000000; font-weight: bold;">&gt;</span></span><span style="color: #000000; font-weight: bold;">&lt;/h1<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>
  <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;div</span> <span style="color: #000066;">class</span>=<span style="color: #ff0000;">"content"</span><span style="color: #000000; font-weight: bold;">&gt;</span><span style="color: #000000; font-weight: bold;">&lt;/div<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>
<span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/section<span style="color: #000000; font-weight: bold;">&gt;</span></span></span></pre></div></div>


This is how every item for your accordion should look like.

## The CSS-Part

Some basic CSS-rules for the header and the content of each item.

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;"><span style="color: #6666ff;">.accordion-item</span> h1 a <span style="color: #00AA00;">{</span> <span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">block</span><span style="color: #00AA00;">;</span> <span style="color: #000000; font-weight: bold;">font-size</span><span style="color: #00AA00;">:</span> <span style="color: #933;">1.5em</span><span style="color: #00AA00;">;</span> <span style="color: #000000; font-weight: bold;">text-align</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">center</span><span style="color: #00AA00;">;</span> <span style="color: #00AA00;">}</span>
<span style="color: #6666ff;">.accordion-item</span> .<span style="color: #000000; font-weight: bold;">content</span> <span style="color: #00AA00;">{</span> <span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">none</span><span style="color: #00AA00;">;</span> <span style="color: #00AA00;">}</span></pre></div></div>


You may want to do at least a bit more on the styles but that’s up to everybody on its own.

We want to keep this accordion accessible for people who don’t use JavaScript, what is kinda unusual these days I think… but you never know!<br>
That’s why we added an <code>id</code> to each accordion-item and link to this section in the headline through <code>#experts</code> for instance. We can now show the content of the requested <code>id</code> with CSS:

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;"><span style="color: #3333ff;">:target </span>.<span style="color: #000000; font-weight: bold;">content</span> <span style="color: #00AA00;">{</span> <span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">block</span><span style="color: #00AA00;">;</span> <span style="color: #00AA00;">}</span></pre></div></div>


So we’re all set up with the accordion. We can now add some effects with JavaScript.

## Using jQuery

First, we will add a line that will show the content of the first element on load:

<div class="wp_syntax"><div class="code"><pre class="javascript" style="font-family:monospace;">$<span style="color: #009900;">(</span><span style="color: #3366CC;">'.accordion-item'</span><span style="color: #009900;">)</span>.<span style="color: #660066;">eq</span><span style="color: #009900;">(</span><span style="color: #CC0000;">0</span><span style="color: #009900;">)</span>.<span style="color: #660066;">addClass</span><span style="color: #009900;">(</span><span style="color: #3366CC;">'current'</span><span style="color: #009900;">)</span>.<span style="color: #660066;">find</span><span style="color: #009900;">(</span><span style="color: #3366CC;">'.content'</span><span style="color: #009900;">)</span>.<span style="color: #660066;">show</span><span style="color: #009900;">(</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span></pre></div></div>


And than the we will listen to clicks on the headlines and do some actions afterwards. Read the comments in this snipped.

<div class="wp_syntax"><div class="code"><pre class="javascript" style="font-family:monospace;"><span style="color: #006600; font-style: italic;">// Listen to click on headline-link</span>
$<span style="color: #009900;">(</span><span style="color: #3366CC;">'.accordion-item h1 a'</span><span style="color: #009900;">)</span>.<span style="color: #660066;">click</span><span style="color: #009900;">(</span><span style="color: #003366; font-weight: bold;">function</span><span style="color: #009900;">(</span>e<span style="color: #009900;">)</span> <span style="color: #009900;">{</span>
  <span style="color: #006600; font-style: italic;">// prevent auto scrolling to id</span>
  e.<span style="color: #660066;">preventDefault</span><span style="color: #009900;">(</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span>
&nbsp;
  <span style="color: #006600; font-style: italic;">// Register the variables for better performance</span>
  <span style="color: #003366; font-weight: bold;">var</span> $parent <span style="color: #339933;">=</span> $<span style="color: #009900;">(</span><span style="color: #000066; font-weight: bold;">this</span><span style="color: #009900;">)</span>.<span style="color: #660066;">closest</span><span style="color: #009900;">(</span><span style="color: #3366CC;">'.accordion-item'</span><span style="color: #009900;">)</span><span style="color: #339933;">,</span>
      $content <span style="color: #339933;">=</span> $parent.<span style="color: #660066;">find</span><span style="color: #009900;">(</span><span style="color: #3366CC;">'.content'</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span>
&nbsp;
  <span style="color: #006600; font-style: italic;">// If the clicked section is not the active one</span>
  <span style="color: #000066; font-weight: bold;">if</span> <span style="color: #009900;">(</span><span style="color: #339933;">!</span>$parent.<span style="color: #660066;">hasClass</span><span style="color: #009900;">(</span><span style="color: #3366CC;">'current'</span><span style="color: #009900;">)</span><span style="color: #009900;">)</span> <span style="color: #009900;">{</span>
&nbsp;
    <span style="color: #006600; font-style: italic;">// SlideUp "old" and remove class</span>
    $<span style="color: #009900;">(</span><span style="color: #3366CC;">'.accordion-item.current .content'</span><span style="color: #009900;">)</span>.<span style="color: #660066;">slideUp</span><span style="color: #009900;">(</span><span style="color: #009900;">)</span>
      .<span style="color: #660066;">parent</span><span style="color: #009900;">(</span><span style="color: #009900;">)</span>.<span style="color: #660066;">removeClass</span><span style="color: #009900;">(</span><span style="color: #3366CC;">'current'</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span>
&nbsp;
    <span style="color: #006600; font-style: italic;">// Add class and slide down content</span>
    $parent.<span style="color: #660066;">addClass</span><span style="color: #009900;">(</span><span style="color: #3366CC;">'current'</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span>
    $content.<span style="color: #660066;">slideDown</span><span style="color: #009900;">(</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span>
&nbsp;
  <span style="color: #006600; font-style: italic;">// If the click was triggered on the currently active section</span>
  <span style="color: #006600; font-style: italic;">// remove the class and slide up content</span>
  <span style="color: #009900;">}</span> <span style="color: #000066; font-weight: bold;">else</span> <span style="color: #009900;">{</span>
    $parent.<span style="color: #660066;">removeClass</span><span style="color: #009900;">(</span><span style="color: #3366CC;">'current'</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span>
    $content.<span style="color: #660066;">slideUp</span><span style="color: #009900;">(</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span>
  <span style="color: #009900;">}</span>
<span style="color: #009900;">}</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span></pre></div></div>


And this is it I guess. Working pretty much in every available browser. The CSS <code>:target</code> pseudo-class is not available in every browser though, as it is a CSS3-pseudo-class. And now guess which browser this might be… Right Internet Explorer. It is supported with version 9 but not before.<br>
You will find more information about <code>:target</code> <a href="http://www.w3.org/TR/selectors/#target-pseudo" target="_blank" title="The :target-pseudo-class">in the spec</a>. Check out the <a href="http://caniuse.com/#search=target" target="_blank" title="When can I use ':target'?">Can I Use</a> table on CSS3-Selectors.

## Download the files

I’ve made a demo of this on jsFiddle. Play around a little bit or download the files, if you want to.<br>
<a href="http://fiddle.jshell.net/drublic/j4wYw/" title="Demo" class="button">Demo</a>&nbsp;&nbsp;&nbsp;&nbsp; <a href="https://hansreinl.de/archive/wp-content/uploads/2011/10/accordion-menu-css.zip" title="Download" class="button">Download</a>
	</div>
