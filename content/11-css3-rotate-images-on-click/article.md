
With CSS3 be get some great new functions to use that are now accessible pretty easy. These are not only rounded corners or shadows but also transitions and full animations that let you do things that were only possible with JavaScript some time ago.

In the footer of this website I use CSS3 3D-transitions for rotating two images. There is a front- and a back-site for that image. Through animation on click it looks like these images are rotating.<br>
I’m not the first one using this technique. I got inspired by Google+. They are using it for rotation of the <a title="My Google+ Stream" href="https://plus.google.com/112019818423540363330/posts" target="_blank">profile-picture</a> but in another way with JS.

So… Let’s start this little tutorial. We will be do all the stuff with pure CSS which is a bit tricky and – as you may guess – this will not work with all of the browsers that are in use. But let’s take a look.

## HTML

What the HTML will look like:

<div class="wp_syntax"><div class="code"><pre class="xml" style="font-family:monospace;"><span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;div</span>&nbsp;<span style="color: #000066;">class</span>=<span style="color: #ff0000;">"animate-wrap"</span><span style="color: #000000; font-weight: bold;">&gt;</span></span>
  <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;input</span>&nbsp;<span style="color: #000066;">type</span>=<span style="color: #ff0000;">"radio"</span>&nbsp;<span style="color: #000066;">id</span>=<span style="color: #ff0000;">"ani-1"</span>&nbsp;<span style="color: #000066;">name</span>=<span style="color: #ff0000;">"animation"</span>&nbsp;<span style="color: #000066;">checked</span>=<span style="color: #ff0000;">"true"</span><span style="color: #000000; font-weight: bold;">&gt;</span></span>
  <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;input</span>&nbsp;<span style="color: #000066;">type</span>=<span style="color: #ff0000;">"radio"</span>&nbsp;<span style="color: #000066;">id</span>=<span style="color: #ff0000;">"ani-2"</span>&nbsp;<span style="color: #000066;">name</span>=<span style="color: #ff0000;">"animation"</span><span style="color: #000000; font-weight: bold;">&gt;</span></span>
&nbsp;
  <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;div</span>&nbsp;<span style="color: #000066;">class</span>=<span style="color: #ff0000;">"animate"</span><span style="color: #000000; font-weight: bold;">&gt;</span></span>
    <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;label</span>&nbsp;<span style="color: #000066;">for</span>=<span style="color: #ff0000;">"ani-2"</span> <span style="color: #000066;">class</span>=<span style="color: #ff0000;">"front"</span><span style="color: #000000; font-weight: bold;">&gt;</span></span>
      <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;img</span>&nbsp;<span style="color: #000066;">src</span>=<span style="color: #ff0000;">"https://www.hansreinl.de/archive/wp-content/uploads/2011/10/rotate-images.jpg"</span>&nbsp;<span style="color: #000066;">width</span>=<span style="color: #ff0000;">"220"</span>&nbsp;<span style="color: #000066;">height</span>=<span style="color: #ff0000;">"220"</span>&nbsp;<span style="color: #000066;">alt</span>=<span style="color: #ff0000;">"A photo of me."</span><span style="color: #000000; font-weight: bold;">&gt;</span></span>
    <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/label<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>
&nbsp;
    <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;label</span>&nbsp;<span style="color: #000066;">for</span>=<span style="color: #ff0000;">"ani-1"</span>&nbsp;<span style="color: #000066;">class</span>=<span style="color: #ff0000;">"back"</span><span style="color: #000000; font-weight: bold;">&gt;</span></span>
      <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;img</span>&nbsp;<span style="color: #000066;">src</span>=<span style="color: #ff0000;">"https://www.hansreinl.de/archive/wp-content/uploads/2011/10/rotate-images-2.jpg"</span>&nbsp;<span style="color: #000066;">width</span>=<span style="color: #ff0000;">"220"</span>&nbsp;<span style="color: #000066;">height</span>=<span style="color: #ff0000;">"220"</span>&nbsp;<span style="color: #000066;">alt</span>=<span style="color: #ff0000;">"Another photo of me."</span><span style="color: #000000; font-weight: bold;">&gt;</span></span>
    <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/label<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>
  <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/div<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>
<span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/div<span style="color: #000000; font-weight: bold;">&gt;</span></span></span></pre></div></div>


You may wonder why there are those two radio-buttons and labels included in the markup. Well, let me explain this: When you click on a label, the radio-button with the ID defined in the <code>for</code>-attribute will be activated. With CSS we can then define rules relaying on the <code>:checked</code> pseudo-class.

Chris Coyier also used this technique to <a title="Functional CSS Tabs Revisited" href="http://css-tricks.com/13758-functional-css-tabs-revisited/" target="_blank">build CSS-only tabs</a>. In this article you will find some more information about how and why to use radio-buttons for this approach. Chris also wrote down pros and cons, stuff you should consider and so on.

## CSS

As I wrote, the idea of flipping images with CSS is not exactly what you would call <i>new</i>. So to get the CSS-part of it you can also visit <a href="http://css3.bradshawenterprises.com/flip/" title="How to do the CSS for flipping images" target="_blank">this nice demo-page</a>&nbsp;and <a href="https://github.com/richbradshaw/CSS-Transitions-Transforms-and-Animation/blob/master/flip.php" title="The whole CSS3-package for flipping images on Github" target="_blank">check out the source code</a> on Github.

Mh, now let’s have a look at the CSS. One thing should be pretty obvious: We are using CSS3 for this tutorial, so there are some issues with vendor-prefixes. At the time of writing it will only work in Webkit-browsers as this is the only engine which <a href="http://www.w3.org/TR/css3-3d-transforms/" title="Read the specification for CSS3-3D-transforms" target="_blank">supports 3D transforms</a> for some time now. As mentioned by Daniel Baron on <a href="https://twitter.com/davidbaron/status/120195056551477249" title="CSS 3D transforms are now enabled on the Nightly channel of Firefox, thanks to good work by Matt Woodrow." target="_blank">Twitter</a> today the nightlies of Firefox will support it too. I checked on Firefox 10.0a1 (FF Nightly as of today) and it works like a charm.<br>
Anyway: we will find a way to make it look <em>ok</em> in all of the browsers.

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;"><span style="color: #808080; font-style: italic;">/* Wrapper */</span>
<span style="color: #6666ff;">.animate-wrap</span> <span style="color: #00AA00;">{</span>
  <span style="color: #000000; font-weight: bold;">position</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">relative</span><span style="color: #00AA00;">;</span>
  <span style="color: #000000; font-weight: bold;">width</span><span style="color: #00AA00;">:</span> <span style="color: #933;">220px</span><span style="color: #00AA00;">;</span> <span style="color: #000000; font-weight: bold;">height</span><span style="color: #00AA00;">:</span> <span style="color: #933;">220px</span><span style="color: #00AA00;">;</span>
  <span style="color: #000000; font-weight: bold;">background-color</span><span style="color: #00AA00;">:</span> <span style="color: #cc00cc;">#aaa</span><span style="color: #00AA00;">;</span>
  -webkit-perspective<span style="color: #00AA00;">:</span> <span style="color: #cc66cc;">1000</span><span style="color: #00AA00;">;</span>
     -moz-perspective<span style="color: #00AA00;">:</span> <span style="color: #cc66cc;">1000</span><span style="color: #00AA00;">;</span>
          perspective<span style="color: #00AA00;">:</span> <span style="color: #cc66cc;">1000</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span>
&nbsp;
<span style="color: #808080; font-style: italic;">/* Inputs */</span>
<span style="color: #6666ff;">.animate-wrap</span> input <span style="color: #00AA00;">{</span>
  <span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">none</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span>
<span style="color: #6666ff;">.animate-wrap</span> <span style="color: #00AA00;">[</span>type<span style="color: #00AA00;">=</span><span style="color: #ff0000;">"radio"</span><span style="color: #00AA00;">]</span><span style="color: #3333ff;">:checked </span><span style="color: #00AA00;">+</span> <span style="color: #6666ff;">.animate</span> <span style="color: #00AA00;">{</span>
  -webkit-transform<span style="color: #00AA00;">:</span> rotateY<span style="color: #00AA00;">(</span>180deg<span style="color: #00AA00;">)</span><span style="color: #00AA00;">;</span>
     -moz-transform<span style="color: #00AA00;">:</span> rotateY<span style="color: #00AA00;">(</span>180deg<span style="color: #00AA00;">)</span><span style="color: #00AA00;">;</span>
          transform<span style="color: #00AA00;">:</span> rotateY<span style="color: #00AA00;">(</span>180deg<span style="color: #00AA00;">)</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span>
&nbsp;
<span style="color: #808080; font-style: italic;">/* Image-Wrapper */</span>
<span style="color: #6666ff;">.animate</span> <span style="color: #00AA00;">{</span>
  -webkit-transform-style<span style="color: #00AA00;">:</span> preserve-3d<span style="color: #00AA00;">;</span>
     -moz-transform-style<span style="color: #00AA00;">:</span> preserve-3d<span style="color: #00AA00;">;</span>
          transform-style<span style="color: #00AA00;">:</span> preserve-3d<span style="color: #00AA00;">;</span>
  -webkit-transition<span style="color: #00AA00;">:</span> all 0.5s ease-out<span style="color: #00AA00;">;</span>
     -moz-transition<span style="color: #00AA00;">:</span> all 0.5s ease-out<span style="color: #00AA00;">;</span>
          transition<span style="color: #00AA00;">:</span> all 0.5s ease-out<span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span>
&nbsp;
<span style="color: #808080; font-style: italic;">/* Labels */</span>
label <span style="color: #00AA00;">{</span>
  <span style="color: #000000; font-weight: bold;">position</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">absolute</span><span style="color: #00AA00;">;</span> <span style="color: #000000; font-weight: bold;">top</span><span style="color: #00AA00;">:</span> <span style="color: #cc66cc;">0</span><span style="color: #00AA00;">;</span> <span style="color: #000000; font-weight: bold;">left</span><span style="color: #00AA00;">:</span> <span style="color: #cc66cc;">0</span><span style="color: #00AA00;">;</span> <span style="color: #000000; font-weight: bold;">z-index</span><span style="color: #00AA00;">:</span> <span style="color: #cc66cc;">2</span><span style="color: #00AA00;">;</span>
  -webkit-backface-<span style="color: #000000; font-weight: bold;">visibility</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">hidden</span><span style="color: #00AA00;">;</span>
     -moz-backface-<span style="color: #000000; font-weight: bold;">visibility</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">hidden</span><span style="color: #00AA00;">;</span>
          backface-<span style="color: #000000; font-weight: bold;">visibility</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">hidden</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span>
&nbsp;
<span style="color: #6666ff;">.back</span> <span style="color: #00AA00;">{</span>
  -webkit-transform<span style="color: #00AA00;">:</span> rotateY<span style="color: #00AA00;">(</span>180deg<span style="color: #00AA00;">)</span><span style="color: #00AA00;">;</span>
     -moz-transform<span style="color: #00AA00;">:</span> rotateY<span style="color: #00AA00;">(</span>180deg<span style="color: #00AA00;">)</span><span style="color: #00AA00;">;</span>
          transform<span style="color: #00AA00;">:</span> rotateY<span style="color: #00AA00;">(</span>180deg<span style="color: #00AA00;">)</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span>
<span style="color: #6666ff;">.front</span> <span style="color: #00AA00;">{</span>
  <span style="color: #000000; font-weight: bold;">z-index</span><span style="color: #00AA00;">:</span> <span style="color: #cc66cc;">1</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span></pre></div></div>


Let’s break this down: First of all we have the styles for the wrapper. The important bit here is the <a href="http://dev.w3.org/csswg/css3-3d-transforms/#perspective-property" title="CSS3-perspective in the spec" target="_blank"><code>perspective</code>-keyword</a>. As the name it self indicates it adds some perspective to the animated items.

Input-fields are hidden. By detecting which input-field is checked we start the animation by adding <code>transform</code> with a value of <code>rotateY(180deg)</code> to the <code>label</code> that is supposed to be animated. This indicates that the element will be rotated around the Y-axis or as <a href="http://dev.w3.org/csswg/css3-3d-transforms/#transform-functions" title="The spec about rotateY">the spec</a> describes it
<blockquote>
rotateY(&lt;angle&gt;) specifies a clockwise rotation by the given angle about the Y axis.</blockquote>

Another important bit that keeps the animation running like it shout is the <code>transform-style</code>-property which defines that the animation should be performed in a 3D-context via the value <code>preserve-3d</code>.

You will get a nice overview of these attributes named here by reading <a href="http://www.paulrhayes.com/2009-07/animated-css3-cube-interface-using-3d-transforms/" title="Animated CSS3 cube using 3D transforms" target="_blank">this article about how to animate a 3D-cube with CSS</a>.

In order to prevent a kind of flashing while the animation takes place I added the <code>backface-visibility</code> property.

## JS

We are finished with the CSS3 3D-transforms now. But we want to have some more browser-compatibility I think. Therefore we will add some JavaScript to the code which adds and removes a class <code>front</code> to the image that should be displayed.

<div class="wp_syntax"><div class="code"><pre class="javascript" style="font-family:monospace;"><span style="color: #000066; font-weight: bold;">if</span> <span style="color: #009900;">(</span><span style="color: #339933;">!</span>Modernizr.<span style="color: #660066;">csstransforms3d</span><span style="color: #009900;">)</span> <span style="color: #009900;">{</span>
  $<span style="color: #009900;">(</span><span style="color: #3366CC;">'label'</span><span style="color: #009900;">)</span>.<span style="color: #660066;">click</span><span style="color: #009900;">(</span><span style="color: #003366; font-weight: bold;">function</span><span style="color: #009900;">(</span><span style="color: #009900;">)</span> <span style="color: #009900;">{</span>
    $<span style="color: #009900;">(</span><span style="color: #3366CC;">'.animate .front'</span><span style="color: #009900;">)</span>.<span style="color: #660066;">removeClass</span><span style="color: #009900;">(</span><span style="color: #3366CC;">'front'</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span>
    $<span style="color: #009900;">(</span><span style="color: #000066; font-weight: bold;">this</span><span style="color: #009900;">)</span>.<span style="color: #660066;">addClass</span><span style="color: #009900;">(</span><span style="color: #3366CC;">'front'</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span>
  <span style="color: #009900;">}</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span>
<span style="color: #009900;">}</span></pre></div></div>


As you can see the JS-snipped uses <a href="http://modernizr.com/" title="Come on… You know Modernizr, right?!" target="_blank">Modernizr</a> to detect if CSS3 3D-transform are supported or not. If not JavaScript listens to the clicks on <code>label</code> elements and adds a class to the clicked one while removing the “old” one. This snipped is depending on jQuery as I personally use it for like every page I’m doing. But there are ways to do it without any library… You’re smart, you know that.

So… looks like we’re done here. If you have something to change for this little tutorial, please let me know in the comments or via email.

<a href="https://www.hansreinl.de/archive/wp-content/uploads/2011/10/rotate-images-with-css3.zip" title="Download" class="button">Download the files</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://jsfiddle.net/drublic/epHjY/" title="Demo on jsFiddle" class="button">Demonstration</a>
