{"title":"Printing The Web","permalink":"printing-the-web","author":"Hans Christian","authorUrl":"","categories":["CSS","Research"],"tags":["CSS","Print","Research"],"headline":"Printing The Web","metaTags":"","metaDescription":"","date":"2013-03-25"}


		

					<style>
.wp-post-image { width: 675px; height: auto; }
</style>		
					<figure class="aligncenter">
				<img width="800" height="346" src="http://drublic.de/blog/wp-content/uploads/2013/03/print-websites-small-800x346.jpg" class="attachment-medium wp-post-image" alt="Printable Websites - some books" />			</figure>
		
				
		<p><strong>While it is possible to consume nearly all means of content on your smartphone or tablet it seems like the dream of a paperless office comes true for a lot of web developers.</strong></p>
<p><strong>But digital natives are not the only ones who are on the web. There are still some people that like to print web sites on paper. Once you are aware of that you might want to include a dedicated print stylesheet into web sites you build. Here is some advice on what you can do to get the best out of your page.</strong></p>
<p><strong>Disclaimer:</strong> This article was first published in the German <a href="http://screengui.de/">Screen Guide Magazine</a> #15 (September to December 2012, pages 77 to 79). This article features more content and better research.</p>
<p>The basics of a print style sheet should already be well known by most web developers. There are two possible ways to include CSS for print:</p>
<ul>
<li>
<p>a separate file included in the HTML that carries all CSS for print media<br /> <code>&lt;link rel="stylesheet" media="print" href="css/print.css"&gt;</code></p>
</li>
<li>
<p>a special media query which targets print mode and is integrated into your regular stylesheet<br /> <code>@media print { …&nbsp;}</code></p>
</li>
</ul>
<p>The decision which way to go is pretty obvious: We do not want to have another request to the server for an extra style sheet and thus will embed the styles using a media query. With the help of preprocessors such as LESS or Sass and build systems it is easily possible to put these styles into separate files and concatenate them when needed for production.</p>
<h2>Remove Clutter</h2>
<p>In general focusing on the main content of a web page is very important when it comes to print style sheets. Remove unnecessary page elements such as navigation and the footer using <code>display: none;</code>. However you might not want to remove a logo that identifies your website from the printed version. (Maybe you have an optimized monochrome version that looks better when printing black and white – you can include this as a background-image. This can be overwritten via the user’s configuration though.)</p>
<p>Think about readable fonts and appropriate font sizes – in print you usually want to have a size not bigger than 12px for your body copy, but on screen 16px is totally appropriate. Furthermore it is important to print mostly dark colors on light background. It <a href="http://www.sanbeiji.com/archives/953">might be the best solution</a> to use black as the default text color.<br />
This is also more economical than printing other colors.</p>
<p>When in doubt, print the page while developing it to get a better feeling for the font setup.</p>
<h2>Improve The Content</h2>
<p>There are a couple of techniques to add more value to the content of a page. One is to add the URL of a link directly after the link text. Don’t do that for links that link to sections of your page or have JavaScript handlers, because it will not carry any meaning for the uninformed reader:</p>

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family: monospace;">a<span style="color: #00AA00;">[</span>href<span style="color: #00AA00;">]</span><span style="color: #00AA00;">:</span>after&nbsp;<span style="color: #00AA00;">{</span>
    <span style="color: #000000; font-weight: bold;">content</span><span style="color: #00AA00;">:</span> <span style="color: #ff0000;">" ("</span> attr<span style="color: #00AA00;">(</span>href<span style="color: #00AA00;">)</span> <span style="color: #ff0000;">")"</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span>
&nbsp;
a<span style="color: #00AA00;">[</span>href<span style="color: #00AA00;">^=</span><span style="color: #ff0000;">"#"</span><span style="color: #00AA00;">]</span><span style="color: #3333ff;">:after</span><span style="color: #00AA00;">,</span>
a<span style="color: #00AA00;">[</span>href<span style="color: #00AA00;">^=</span><span style="color: #ff0000;">"javascript"</span><span style="color: #00AA00;">]</span><span style="color: #3333ff;">:after </span><span style="color: #00AA00;">{</span>
    <span style="color: #000000; font-weight: bold;">content</span><span style="color: #00AA00;">:</span> <span style="color: #ff0000;">""</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span></pre></div></div>

<p>This is also useful for the <code>abbr</code> element (for abbreviations) and its <code>title</code> attribute. (The same rule technically appies to <code>acronym</code> – thanks to <a href="http://adrianroselli.com/">Adrian Roselli</a>).</p>

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family: monospace;">abbr<span style="color: #00AA00;">[</span>title<span style="color: #00AA00;">]</span><span style="color: #00AA00;">:</span>after&nbsp;<span style="color: #00AA00;">{</span>
    <span style="color: #000000; font-weight: bold;">content</span><span style="color: #00AA00;">:</span> <span style="color: #ff0000;">" ("</span> attr<span style="color: #00AA00;">(</span>title<span style="color: #00AA00;">)</span> <span style="color: #ff0000;">")"</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span></pre></div></div>

<p>You can find a <a href="http://drublic.de/blog/pseudo-classes-in-print-styles-for-references-in-links/">more detailed post about this technique here</a>.</p>
<p><strong>Edit:</strong> As <a href="http://drublic.de/blog/printing-the-web/#comment-1188">Tim suggests in the comments</a> it might be necessary to use <code>word-wrap: break-word;</code> on these elements as especially links can become pretty long and thus break you layout.</p>
<p>Remember that browsers normally display a header and footer line with some information about your site such as the URL it was printed from or the date. The user might have an option to remove those lines so you may want to include some link or a breadcrumb in the printed page so the reader can easily check back on the web if needed. Other methods outline embedding a QR code on the printed page. Adrian Roselli <a href="http://blog.adrianroselli.com/2013/03/calling-qr-in-print-css-only-when-needed.html">describes this method</a> further.</p>
<p>In general most style sheets might be done with these few considerations. But there are some more helpers and CSS rules that can come in handy in certain cases.</p>
<p>A few weeks ago there was <a href="http://coding.smashingmagazine.com/2013/03/08/tips-tricks-print-style-sheets/">an interesing article</a> at Smashing Magazine which has some more useful tips for dealing with links, images and so on. Check it out if needed.</p>
<h2>Structuring The Page</h2>
<p>Let’s dig a bit deeper.</p>
<p>The at-rule <code>@page</code> allows you to specify the structure of the page. Here is an example of how you can configure the margin of the page:</p>

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family: monospace;"><span style="color: #a1a100;">@page {</span>
    <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span> <span style="color: #933;">2cm</span> <span style="color: #933;">1.5cm</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span></pre></div></div>

<p>Furthermore it is possible to define styles via pseudo-classes. With <code>:first</code> for instance you target only the first page of a document, <code>:left</code> and <code>:right</code> target all even/odd pages (this depends on the direction of writing in a language). This can help you if you want to print a manuscript or magazine for example.</p>
<p>It is possible to name a property and apply it to differnet elements. This comes in handy if you want to print tables in landscape mode:</p>

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family: monospace;"><span style="color: #a1a100;">@page tables {</span>
    <span style="color: #000000; font-weight: bold;">size</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">landscape</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span>
&nbsp;
table <span style="color: #00AA00;">{</span>
    <span style="color: #000000; font-weight: bold;">page</span><span style="color: #00AA00;">:</span> tables<span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span></pre></div></div>

<p>This is far more experimental and can not be used reliable. Check out <a href="http://dabblet.com/gist/5232020">this test case</a>. Please see <a href="http://www.w3.org/TR/2013/WD-css3-page-20130314/#using-named-pages">the specification</a> for a more detailed explanation.</p>
<p>More information about the <code>@page</code> rule can be found at the <a href="https://developer.mozilla.org/en-US/docs/CSS/@page">Mozilla Developer Network</a>.</p>
<p>With <code>size</code> you can specify the size of the sheet you want to print your document on. The initial value is <code>auto</code> which sets the width to a DIN A4 sheet with a size of 210 × 297 millimeters. You can target an expected DIN A5 sheet this way:</p>

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family: monospace;"><span style="color: #a1a100;">@page {</span>
    <span style="color: #000000; font-weight: bold;">size</span><span style="color: #00AA00;">:</span> 148mm 210mm<span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span></pre></div></div>

<p>Even though this is possibile you should let the printer defaults handle the size of the sheet, especially since DIN A4 is not used in the US for example.</p>
<p><strong>Side note:</strong> Please be aware that it is still not possible to <em>cut</em> a sheet via CSS, thus it is only an expected size. I know this sucks! 3D printers might save us soon.</p>
<h2>Page-Breaks</h2>
<p>Both properties <code>page-break-before</code> and <code>page-break-after</code> specify when a page break occurs and when you do not want it to happen. For instance you most likely want to avoid page breaks after a headline:</p>

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family: monospace;">h2 <span style="color: #00AA00;">{</span>
    <span style="color: #000000; font-weight: bold;">page-break-after</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">avoid</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span></pre></div></div>

<p>Possible values of <code>page-break-before</code> and <code>page-break-after</code> are:</p>
<ul>
<li><code>auto</code> – default value, no specified behavior</li>
<li><code>always</code> – invokes a page-break</li>
<li><code>avoid</code> – tries to avoid a page-break</li>
<li><code>left</code>/<code>right</code> – single or double page-break to get the element to start on either the left of the right page, interesting when you want to print brochures or books.</li>
</ul>
<p>Furthermore, there is the property <code>page-break-inside</code> which behaves similarly but only supports the values <code>auto</code> and <code>avoid</code>. While <code>avoid</code> specifies that there sould be no page-break within the element and <code>auto</code> does not specify a specific behavior.</p>
<h2>Experimental Properties</h2>
<p>The next few features are still in development or only supported by single browsers. Some of them are part of the (not really) new <a href="http://www.w3.org/TR/css3-page/">CSS Paged Media Specification</a>.</p>
<h3>Print What You See On Screen</h3>
<p>The property <code>-webkit-print-color-adjust: exact;</code> only works in WebKit browsers (namely Chrome and Safari) and enables you to print a page exactly as it is displayed on screen. Mostly this means that you can print CSS backgrounds. But be careful, there is a bug when it comes to gradients: Gradients are not printed at all. Also it is not possible to define the property on the <code>body</code> element (Whaaaat? :/).</p>
<p>You need to use this property if you want to print a b/w-optimized logo as outlined earlier and you don’t want to include an image in the markup.</p>
<p>Other browsers such as Firefox allow users to specify whether they want to print background images and colors via an option in the print dialogue.</p>
<h3>Widows And Orphans</h3>
<p>To prevent single lines of text to be at the end of one page you can adjust how many lines have to be tied together with <code>orphans</code>. <code>p { orphans: 3; }</code> for instance requires at least three consecutive lines in a paragraph on the end of a page.</p>
<p>In contrast – only one line at the beginning of a new page – <code>widows</code> helps you out. So with <code>article { widows: 2; }</code> you will get at least two lines of text for an article on a new page.</p>
<h3>Crop Marks And Page Bleed</h3>
<p>Sometimes you need specific declarations on how to cut a sheet of paper. With <code>marks</code> it is possible to set marks via the values <code>crop</code> and <code>cross</code> while <code>crop</code> adds crop marks and <code>cross</code> adds fiducial marks.</p>
<p>If this property is set you can specify how far the printable area spreads out of the area defined by the aforementioned marks by using the property <code>bleed</code> while using one of the units defined in the <a href="http://www.w3.org/TR/css3-values/">values and units specification</a>.</p>
<p>This property is part of the <a href="http://www.w3.org/TR/css3-gcpm/#page-marks-and-bleed-area">CSS Generated Content for Paged Media Module</a> which is basically to really recognized by the browser vendors.</p>
<h3>Boxes On Page-Break</h3>
<figure class="alignright"><img src="http://www.w3.org/TR/css3-background/box-break.png" title="box-decoration-break: slice and clone" alt="box-decoration-break: slice and clone" width="400" /></figure>
<p>The property <code>box-decoration-break</code> specifies how for example background, margin or border behave when the page breaks. There are two possible values for this property (also see the picture):</p>
<ul>
<li><code>slice</code> – default value, literally “slices” the box into two parts</li>
<li><code>clone</code> – dupicates the styles that are applied to a box on each page</li>
</ul>
<p>This is currently supported by Opera with the Presto Engine and will shortly be availabe in Google Chrome. Lennart Schoors <a href="http://bricss.net/post/24672339016/box-decoration-break-finally-coming-to-more-browsers">wrote about this property</a> a while ago on his blog Bricss.</p>
<p>In Firefox there is <code>-moz-background-inline-policy</code> which enables you to treat background images how you want to. But this is clearly only a partial implementation of <code>box-decoration-break</code>.</p>
<h2>More On Browser Support</h2>
<p>While the at-rule <code>@page</code> is supported by all major browsers except Internet Explorer 7 and was just implemented by Firefox a few months ago. Most other properties are far more complex:</p>
<ul>
<li>You should use <code>page-break-before</code> and <code>page-break-after</code> only with its value <code>always</code> since the other values are not supported widely</li>
<li><code>page-break-inside</code> is not supported in Internet Explorer 7.</li>
</ul>
<p>You have to be aware that nearly all experimental properies lack support in most browsers and are only implemented by one major engine. For example <code>orphans</code> and <code>widows</code> are only supported in Internet Explorer since version 8 and Opera – which will soon be history as of their change to WebKit. <code>marks</code> and <code>bleed</code> is not implemented in any browser so far.</p>
<h2>What Is Missing?</h2>
<p>There are certain drawbacks when it comes to styling for print: Up until now there is no good possibility to define header and footer lines for your pages which would be very helpful for paginated printing. You can use pseudo elements of the body element which enables you to set a header and a footer on the first and last page. But this is by far not what is needed. You will run into this problem when you try to print tables: it is simply not possible without duplicate markup to print the <code>thead</code> of the table on each page (while repeating markup is not a real solution as you don’t know where a page breaks).</p>
<p>The funny thing is <a href="http://www.w3.org/TR/CSS21/tables.html#value-def-table-header-group">the specification</a> of <code>thead</code> and <code>tfoot</code> states that it might be useful to repeat the elements on each page. Sadly no browser vendor implemented this yet.</p>
<p>But it is possible to create a solution for that. It could be a nice thing to implement JavaScript events that get invoked right before a page is printed. But as <a href="https://twitter.com/SimonSapin">Simon Sapin</a> states this is not really possible due to the mechanisms how browsers layout a page:</p>
<blockquote><p>Page breaks happen during layout, much too late to do DOM manipulation (which invalidates and restarts layout). It’s really up to the layout engine to do this.</p>
</blockquote>
<p>Also more properties for <code>@page</code> could be helpful to generate header and footer for each page.</p>
<p>Luckily the <a href="http://www.w3.org/TR/2013/WD-css3-page-20130314/">Paged Media Specification</a> tries to tackle this problem. This specification has just become a Working Draft.</p>
<p>Here is an example on how you can implement a footer with the page count on every page:</p>

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family: monospace;"><span style="color: #a1a100;">@page {</span>
    <span style="color: #000000; font-weight: bold;">counter-increment</span><span style="color: #00AA00;">:</span> <span style="color: #000000; font-weight: bold;">page</span><span style="color: #00AA00;">;</span>
&nbsp;
    <span style="color: #a1a100;">@top-center {</span>
        <span style="color: #000000; font-weight: bold;">content</span><span style="color: #00AA00;">:</span> <span style="color: #ff0000;">"Headline, yo!"</span>
    <span style="color: #00AA00;">}</span>
&nbsp;
    <span style="color: #a1a100;">@bottom-right {</span>
        <span style="color: #000000; font-weight: bold;">counter-increment</span><span style="color: #00AA00;">:</span> <span style="color: #000000; font-weight: bold;">page</span><span style="color: #00AA00;">;</span>
        <span style="color: #000000; font-weight: bold;">content</span><span style="color: #00AA00;">:</span> <span style="color: #ff0000;">"Page "</span> counter<span style="color: #00AA00;">(</span><span style="color: #000000; font-weight: bold;">page</span><span style="color: #00AA00;">)</span><span style="color: #00AA00;">;</span>
    <span style="color: #00AA00;">}</span>
<span style="color: #00AA00;">}</span></pre></div></div>

<p>The <code>counter-increment</code> property is a bit special with the keyword <code>page</code> – it increments automatically according to the specification, so you don’t need it at all.</p>
<p>That rocks, right?! Totally want this in browsers now.</p>
<p><strong>Edit – 26.03.2013:</strong> Actually there is another possible implementation for fixed headers and footers using <code>position: fixed;</code> elements as <a href="http://clt.ag/">Robert Weber</a> <a href="http://drublic.de/blog/printing-the-web/#comment-1100">researched</a>. Unfortunately this only works in Firefox, Opera and Internet Explorer with several quirks. Please <a href="http://drublic.de/blog/printing-the-web/#comment-1100">read his comment</a>.</p>
<h3>A Word On Mobile</h3>
<p>These days it has become more and more popular to visit web pages from your smartphone or tablet but I have never seen anyone printing a web page from such a device.</p>
<p><del>I am not aware of a browser that has the ability to print a page. But maybe this will come in the near future.</del> Let me know if you know more about this.</p>
<p><strong>Edit – 25.03.2013:</strong> As <a href="https://twitter.com/alrra">Cãtãlin Mariş</a> points out, iOS has a feature to connect to a wireless printer and print a website. This uses <a href="http://support.apple.com/kb/ht4356">Apple’s AirPrint</a> services.</p>
<h3>The Server-Side</h3>
<p>This post does not take any server-side rendering methods to create style sheets into account. However there are some several non-browsers, print-oriented CSS implementations: <a href="http://weasyprint.org/">WeasyPrint</a>, <a href="http://www.princexml.com/">PrinceXML</a> or <a href="http://www.antennahouse.com/">AntennaHouse</a> and others implement many CSS features that browsers don’t.</p>
<p>So take a look at these libraries if you are in need of more consitend</p>
<h2>Conclusion</h2>
<p>As it turns out it is possible to handle simple structured web pages with the provided properties for print stylesheets. But when it comes to more complex applications you will easily reach the end of these possibilities.</p>
<p>As a result of the work that the editors put into new specifications such as the Paged Media Spec we will be able to deal with better solutions in the future.</p>
<h2>Thanks</h2>
<p>A big thank you goes out to <a href="http://adrianroselli.com/">Adrian Roselli</a> and <a href="http://exyr.org/">Simon Sapin</a> for providing very valuable technical feedback for this article. Apart from that I want to thank <a href="http://tomascaspers.de/">Thomas Caspers</a> for proofreading the post.</p>
<div class="aligncenter">
<blockquote class="twitter-tweet" data-partner="tweetdeck"><p>✪ Printing The Web&nbsp;– The current state of print style sheets – <a href="http://t.co/WCFa9qpQoK" title="http://drublic.de/blog/printing-the-web/">drublic.de/blog/printing-…</a></p>
<p>— Hans Christian Reinl (@drublic) <a href="https://twitter.com/drublic/status/316150009970188288">March 25, 2013</a></p></blockquote>
</div>
<p></p>
<style>
.twitter-tweet { margin: 1rem auto !important; }
</style>
				

		
	