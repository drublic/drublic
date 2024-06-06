
This morning <a title="Steffen Müller: TYPO3 blog" href="http://www.t3node.com/" target="_blank">@t3node</a>&nbsp;asked me about something CSS-related. This was kinda new for me because he never did this before I guess… He showed me a website he had printed and asked me to explain him, how it is possible to show links in printed websites with their reference printed next to it. He was kinda upset why not every frontend-developer includes this in his/her stylesheet when it comes to designing a new website. I wanted to explain everything that’s related to this topic that I’ve ever heard of but he asked me to write this blogpost as&nbsp;<a title="T3node on Twitter" href="http://twitter.com/#!/t3node" target="_blank">he</a>&nbsp;<a title="About Steffen Müller [de]" href="http://www.t3node.com/steffen-mueller/" target="_blank">is</a>&nbsp;<a title="Bessere Performance mit TYPO3, t3n [de]" href="http://t3n.de/magazin/frisiert-aufgebohrt-bessere-performance-typo3-219359/" target="_blank">not</a>&nbsp;pretty used to CSS and stuff.

## Styles dedicated to print

To get this feature for a website you need to define some print styles.

### 1. link-Tag

It is possible to load up a stylesheet that is dedicated to server styles only for media print with

<div class="wp_syntax"><div class="code"><pre class="xml" style="font-family:monospace;"><span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;link</span> <span style="color: #000066;">rel</span>=<span style="color: #ff0000;">"stylesheet"</span> <span style="color: #000066;">href</span>=<span style="color: #ff0000;">"css/some-print-styles.css"</span> <span style="color: #000066;">media</span>=<span style="color: #ff0000;">"print"</span><span style="color: #000000; font-weight: bold;">&gt;</span></span></pre></div></div>


Where <code>media="print"</code> is the <a title="The Specification for media=&quot;print&quot;" href="http://www.w3.org/TR/html4/present/styles.html#h-14.4.1" target="_blank">important part</a>&nbsp;here as it tells the browser to apply all styles it contains only for print-views of the website. I do not recommend this method because of some <strong>drawbacks for performace</strong>:
<ul>
<li>The client has to load the CSS-file even if it does not need it</li>
<li>This implies another HTTP-request</li>
<li>Even though it is not a lot: the browser needs to render the styles</li>
</ul>

### 2. @import in CSS-file

Another possible way to render styles only in print is to include a file with <code>@import url("some-print-styles.css") print</code>. This also has drawbacks on performance. Even more as the <code>link</code>-method as files get <a title="Blogarticle: Don't use @import" href="http://www.stevesouders.com/blog/2009/04/09/dont-use-import/">blocked for downloading</a> in your browser if <code>@import</code>is used.

### 3. Inline styles

For inline styles <a title="The Secification on inline media=&quot;print&quot;" href="http://www.w3.org/TR/html4/present/styles.html#h-14.2.4">it is also possible</a> to define an attribute <code>media</code>.

<div class="wp_syntax"><div class="code"><pre class="xml" style="font-family:monospace;"><span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;style</span> <span style="color: #000066;">media</span>=<span style="color: #ff0000;">"print"</span><span style="color: #000000; font-weight: bold;">&gt;</span></span>
  .element {…}
<span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/style<span style="color: #000000; font-weight: bold;">&gt;</span></span></span></pre></div></div>


### 4. Media queries

My favorite method to include styles for print are <a title="CSS3 Media-Queries" href="http://www.w3.org/TR/css3-mediaqueries/" target="_blank">media-queries</a>. It is possible to add styles for print via <code>@media print</code>. Maybe you are familiar with this because of <a title="Mobile Design is not only Responsive" href="https://www.hansreinl.de/archive/mobile-design-is-not-only-responsive/">media-queries dedicated to mobile devices</a>. Once you’ve set up this environment you can start adding some styles for any print of your site. I recommend to add <code>display: none;</code>for elements that are not pretty important in a printed-version. This could be the sidebar and the footer or the navigation. The thing why I’m originally writing this is how to include the reference of a link in a printed version of a website. So I’m just going for it. It is just one pretty little rule!

## Pseudo-Elements for generated content

A good use-case for pseudo-elements:

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;">a<span style="color: #00AA00;">[</span>href<span style="color: #00AA00;">]</span><span style="color: #3333ff;">:after </span><span style="color: #00AA00;">{</span>
  <span style="color: #000000; font-weight: bold;">content</span><span style="color: #00AA00;">:</span> <span style="color: #ff0000;">" ("</span> attr<span style="color: #00AA00;">(</span>href<span style="color: #00AA00;">)</span> <span style="color: #ff0000;">")"</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span></pre></div></div>


<code>a[href]</code> selects all links with the attribute <code>href</code> set and creates content <code>:after</code> it. <code>attr(href)</code> tells the browser to use this attribute as content. You may want to select a little bit different as you don’t want to display references in the navigation or so for instance. HTML5 Boilerplate <a title="Styles for print in HTML5 Boilerplate" href="https://github.com/paulirish/html5-boilerplate/blob/master/css/style.css#L283" target="_blank">makes use of this</a>,&nbsp;too. These little features are why I love it so much. Go <a title="HTML5 Boilerplate - A rock-solid default for HTML5 awesome." href="http://html5boilerplate.com/" target="_blank">check it</a> out and <a title="Contribute to H5BP on Github" href="https://github.com/paulirish/html5-boilerplate" target="_blank">contribute</a>. Chris Coyier has a <a title="Chris Coyier on CSS content" href="http://css-tricks.com/6555-css-content/" target="_blank">pretty awesome article, tutorial</a> and <a title="A demo on CSS content by Chris Coyier" href="http://css-tricks.com/examples/CSSContentLinks/" target="_blank">demo</a>&nbsp;at CSS-Tricks which has nothing to do with print but describes the use of pseudo-elements and <code>content</code>really good. You should definitely read this.

## Browsersupport

<code>@media print</code> is supported in all browsers for what I know. Except Internet Explorer 7 every browser supports <code>:after</code> at least good enough that <code>content</code> works with it. The bottleneck here seems to be <code>attr(href)</code>. As I researched this it turned out that generated content with <code>attr()</code> is valid CSS 2.1.&nbsp;<a title="The Secification on generated content in CSS" href="http://www.w3.org/TR/CSS2/generate.html#12.2" target="_blank">The spec adds a warning</a>on this vary topic:
<blockquote>
In CSS 2.1, it is not possible to refer to attribute values for other elements than the subject of the selector.</blockquote>

You will find more information on <code>attr()</code> <a title="The CSS3 Spec about attr() as generated content" href="http://www.w3.org/TR/css3-values/#attr" target="_blank">in the CSS3 Specification</a>. It seems as every browser (that is actually used) is <a title="When can I use: CSS Generated Content" href="http://caniuse.com/#search=generated content" target="_blank">going to support this</a> except IE7 and below.&nbsp;I’ve set up <a title="A demo of a[href]:after" href="http://jsfiddle.net/drublic/Ud6mL/show/" target="_blank">this demo</a> so you can test it in your favorite browser and <a title="A fiddle with a[href]:after" href="http://jsfiddle.net/drublic/Ud6mL/" target="_blank">edit it yourself</a>. I would be glad if you share your results and thoughts on this topic in the comments.

## Conclusion

As it turns out it’s kind of the right to support straightforward things. I believe everybody could at least add some default styles for print to a new website like HTML5 Boilerplate does by default. The little trick with pseudo-elements can also be pretty useful for other elements like <code>abbr</code> aso. Later on I noticed that <a title="Steffen Müller: TYPO3 blog" href="http://www.t3node.com/" target="_blank">@t3nodes</a> website does not support this feature for print either. Maybe it will after he has read this post. My website and this blog do not make any special use of printed styles as I think it is not necessary that anyone prints out my blogposts. I don’t like to print thinks for myself as I believe that you could save some paper in regards to environment. But this is your decision – or the one of your customer. &nbsp; <strong>Edit</strong> Thanks to <a title="Nicolas Gallagher's blog - read it!" href="http://nicolasgallagher.com/" target="_blank">Nicolas</a> for <a href="https://www.hansreinl.de/archive/pseudo-classes-in-print-styles-for-references-in-links/#comment-23">his hint</a> about the difference between pseudo-elements and pseudo-classes. You should also consider using <code>::after</code> instead of <code>:after</code>. But be aware that IE8 does not support this.
	</div>
