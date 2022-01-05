<div class="post__intro" markdown="1">

While it is possible to consume nearly all means of content on your smartphone or tablet it seems like the dream of a paperless office comes true for a lot of web developers.

But digital natives are not the only ones who are on the web. There are still some people that like to print web sites on paper. Once you are aware of that you might want to include a dedicated print stylesheet into web sites you build. Here is some advice on what you can do to get the best out of your page.
</div>

Disclaimer: This article was first published in the German <a href="http://screengui.de/">Screen Guide Magazine</a> #15 (September to December 2012, pages 77 to 79). This article features more content and better research.

The basics of a print style sheet should already be well known by most web developers. There are two possible ways to include CSS for print:

* a separate file included in the HTML that carries all CSS for print media<br> `<link rel="stylesheet" media="print" href="css/print.css">`

* a special media query which targets print mode and is integrated into your regular stylesheet<br> `@media print { …&nbsp;}`

The decision which way to go is pretty obvious: We do not want to have another request to the server for an extra style sheet and thus will embed the styles using a media query. With the help of preprocessors such as LESS or Sass and build systems it is easily possible to put these styles into separate files and concatenate them when needed for production.

## Remove Clutter

In general focusing on the main content of a web page is very important when it comes to print style sheets. Remove unnecessary page elements such as navigation and the footer using `display: none;`. However you might not want to remove a logo that identifies your website from the printed version. (Maybe you have an optimized monochrome version that looks better when printing black and white – you can include this as a background-image. This can be overwritten via the user’s configuration though.)

Think about readable fonts and appropriate font sizes – in print you usually want to have a size not bigger than 12px for your body copy, but on screen 16px is totally appropriate. Furthermore it is important to print mostly dark colors on light background. It <a href="http://www.sanbeiji.com/archives/953">might be the best solution</a> to use black as the default text color.<br>
This is also more economical than printing other colors.

When in doubt, print the page while developing it to get a better feeling for the font setup.

## Improve The Content

There are a couple of techniques to add more value to the content of a page. One is to add the URL of a link directly after the link text. Don’t do that for links that link to sections of your page or have JavaScript handlers, because it will not carry any meaning for the uninformed reader:

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;">a<span style="color: #00AA00;">[</span>href<span style="color: #00AA00;">]</span><span style="color: #00AA00;">:</span>after&nbsp;<span style="color: #00AA00;">{</span>
    <span style="color: #000000; font-weight: bold;">content</span><span style="color: #00AA00;">:</span> <span style="color: #ff0000;">" ("</span> attr<span style="color: #00AA00;">(</span>href<span style="color: #00AA00;">)</span> <span style="color: #ff0000;">")"</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span>
&nbsp;
a<span style="color: #00AA00;">[</span>href<span style="color: #00AA00;">^=</span><span style="color: #ff0000;">"#"</span><span style="color: #00AA00;">]</span><span style="color: #3333ff;">:after</span><span style="color: #00AA00;">,</span>
a<span style="color: #00AA00;">[</span>href<span style="color: #00AA00;">^=</span><span style="color: #ff0000;">"javascript"</span><span style="color: #00AA00;">]</span><span style="color: #3333ff;">:after </span><span style="color: #00AA00;">{</span>
    <span style="color: #000000; font-weight: bold;">content</span><span style="color: #00AA00;">:</span> <span style="color: #ff0000;">""</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span></pre></div></div>


This is also useful for the `abbr` element (for abbreviations) and its `title` attribute. (The same rule technically appies to `acronym` – thanks to <a href="http://adrianroselli.com/">Adrian Roselli</a>).

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;">abbr<span style="color: #00AA00;">[</span>title<span style="color: #00AA00;">]</span><span style="color: #00AA00;">:</span>after&nbsp;<span style="color: #00AA00;">{</span>
    <span style="color: #000000; font-weight: bold;">content</span><span style="color: #00AA00;">:</span> <span style="color: #ff0000;">" ("</span> attr<span style="color: #00AA00;">(</span>title<span style="color: #00AA00;">)</span> <span style="color: #ff0000;">")"</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span></pre></div></div>


You can find a <a href="http://drublic.de/archive/pseudo-classes-in-print-styles-for-references-in-links/">more detailed post about this technique here</a>.

<strong>Edit:</strong> As <a href="http://drublic.de/archive/printing-the-web/#comment-1188">Tim suggests in the comments</a> it might be necessary to use `word-wrap: break-word;` on these elements as especially links can become pretty long and thus break you layout.

Remember that browsers normally display a header and footer line with some information about your site such as the URL it was printed from or the date. The user might have an option to remove those lines so you may want to include some link or a breadcrumb in the printed page so the reader can easily check back on the web if needed. Other methods outline embedding a QR code on the printed page. Adrian Roselli <a href="http://blog.adrianroselli.com/2013/03/calling-qr-in-print-css-only-when-needed.html">describes this method</a> further.

In general most style sheets might be done with these few considerations. But there are some more helpers and CSS rules that can come in handy in certain cases.

A few weeks ago there was <a href="http://coding.smashingmagazine.com/2013/03/08/tips-tricks-print-style-sheets/">an interesing article</a> at Smashing Magazine which has some more useful tips for dealing with links, images and so on. Check it out if needed.

## Structuring The Page

Let’s dig a bit deeper.

The at-rule `@page` allows you to specify the structure of the page. Here is an example of how you can configure the margin of the page:

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;"><span style="color: #a1a100;">@page {</span>
    <span style="color: #000000; font-weight: bold;">margin</span><span style="color: #00AA00;">:</span> <span style="color: #933;">2cm</span> <span style="color: #933;">1.5cm</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span></pre></div></div>


Furthermore it is possible to define styles via pseudo-classes. With `:first` for instance you target only the first page of a document, `:left` and `:right` target all even/odd pages (this depends on the direction of writing in a language). This can help you if you want to print a manuscript or magazine for example.

It is possible to name a property and apply it to differnet elements. This comes in handy if you want to print tables in landscape mode:

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;"><span style="color: #a1a100;">@page tables {</span>
    <span style="color: #000000; font-weight: bold;">size</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">landscape</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span>
&nbsp;
table <span style="color: #00AA00;">{</span>
    <span style="color: #000000; font-weight: bold;">page</span><span style="color: #00AA00;">:</span> tables<span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span></pre></div></div>


This is far more experimental and can not be used reliable. Check out <a href="http://dabblet.com/gist/5232020">this test case</a>. Please see <a href="http://www.w3.org/TR/2013/WD-css3-page-20130314/#using-named-pages">the specification</a> for a more detailed explanation.

More information about the `@page` rule can be found at the <a href="https://developer.mozilla.org/en-US/docs/CSS/@page">Mozilla Developer Network</a>.

With `size` you can specify the size of the sheet you want to print your document on. The initial value is `auto` which sets the width to a DIN A4 sheet with a size of 210 × 297 millimeters. You can target an expected DIN A5 sheet this way:

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;"><span style="color: #a1a100;">@page {</span>
    <span style="color: #000000; font-weight: bold;">size</span><span style="color: #00AA00;">:</span> 148mm 210mm<span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span></pre></div></div>


Even though this is possibile you should let the printer defaults handle the size of the sheet, especially since DIN A4 is not used in the US for example.

<strong>Side note:</strong> Please be aware that it is still not possible to <em>cut</em> a sheet via CSS, thus it is only an expected size. I know this sucks! 3D printers might save us soon.

## Page-Breaks

Both properties `page-break-before` and `page-break-after` specify when a page break occurs and when you do not want it to happen. For instance you most likely want to avoid page breaks after a headline:

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;">h2 <span style="color: #00AA00;">{</span>
    <span style="color: #000000; font-weight: bold;">page-break-after</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">avoid</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span></pre></div></div>


Possible values of `page-break-before` and `page-break-after` are:
<ul>
<li>`auto` – default value, no specified behavior</li>
<li>`always` – invokes a page-break</li>
<li>`avoid` – tries to avoid a page-break</li>
<li>`left`/`right` – single or double page-break to get the element to start on either the left of the right page, interesting when you want to print brochures or books.</li>
</ul>

Furthermore, there is the property `page-break-inside` which behaves similarly but only supports the values `auto` and `avoid`. While `avoid` specifies that there sould be no page-break within the element and `auto` does not specify a specific behavior.

## Experimental Properties

The next few features are still in development or only supported by single browsers. Some of them are part of the (not really) new <a href="http://www.w3.org/TR/css3-page/">CSS Paged Media Specification</a>.
<h3>Print What You See On Screen</h3>

The property `-webkit-print-color-adjust: exact;` only works in WebKit browsers (namely Chrome and Safari) and enables you to print a page exactly as it is displayed on screen. Mostly this means that you can print CSS backgrounds. But be careful, there is a bug when it comes to gradients: Gradients are not printed at all. Also it is not possible to define the property on the `body` element (Whaaaat? :/).

You need to use this property if you want to print a b/w-optimized logo as outlined earlier and you don’t want to include an image in the markup.

Other browsers such as Firefox allow users to specify whether they want to print background images and colors via an option in the print dialogue.
<h3>Widows And Orphans</h3>

To prevent single lines of text to be at the end of one page you can adjust how many lines have to be tied together with `orphans`. `p { orphans: 3; }` for instance requires at least three consecutive lines in a paragraph on the end of a page.

In contrast – only one line at the beginning of a new page – `widows` helps you out. So with `article { widows: 2; }` you will get at least two lines of text for an article on a new page.
<h3>Crop Marks And Page Bleed</h3>

Sometimes you need specific declarations on how to cut a sheet of paper. With `marks` it is possible to set marks via the values `crop` and `cross` while `crop` adds crop marks and `cross` adds fiducial marks.

If this property is set you can specify how far the printable area spreads out of the area defined by the aforementioned marks by using the property `bleed` while using one of the units defined in the <a href="http://www.w3.org/TR/css3-values/">values and units specification</a>.

This property is part of the <a href="http://www.w3.org/TR/css3-gcpm/#page-marks-and-bleed-area">CSS Generated Content for Paged Media Module</a> which is basically to really recognized by the browser vendors.
<h3>Boxes On Page-Break</h3>

<!--

<figure class="alignright"><img src="http://www.w3.org/TR/css3-background/box-break.png" title="box-decoration-break: slice and clone" alt="box-decoration-break: slice and clone" width="400"></figure>

-->

The property `box-decoration-break` specifies how for example background, margin or border behave when the page breaks. There are two possible values for this property (also see the picture):
<ul>
<li>`slice` – default value, literally “slices” the box into two parts</li>
<li>`clone` – dupicates the styles that are applied to a box on each page</li>
</ul>

This is currently supported by Opera with the Presto Engine and will shortly be availabe in Google Chrome. Lennart Schoors <a href="http://bricss.net/post/24672339016/box-decoration-break-finally-coming-to-more-browsers">wrote about this property</a> a while ago on his blog Bricss.

In Firefox there is `-moz-background-inline-policy` which enables you to treat background images how you want to. But this is clearly only a partial implementation of `box-decoration-break`.

## More On Browser Support

While the at-rule `@page` is supported by all major browsers except Internet Explorer 7 and was just implemented by Firefox a few months ago. Most other properties are far more complex:
<ul>
<li>You should use `page-break-before` and `page-break-after` only with its value `always` since the other values are not supported widely</li>
<li>`page-break-inside` is not supported in Internet Explorer 7.</li>
</ul>

You have to be aware that nearly all experimental properies lack support in most browsers and are only implemented by one major engine. For example `orphans` and `widows` are only supported in Internet Explorer since version 8 and Opera – which will soon be history as of their change to WebKit. `marks` and `bleed` is not implemented in any browser so far.

## What Is Missing?

There are certain drawbacks when it comes to styling for print: Up until now there is no good possibility to define header and footer lines for your pages which would be very helpful for paginated printing. You can use pseudo elements of the body element which enables you to set a header and a footer on the first and last page. But this is by far not what is needed. You will run into this problem when you try to print tables: it is simply not possible without duplicate markup to print the `thead` of the table on each page (while repeating markup is not a real solution as you don’t know where a page breaks).

The funny thing is <a href="http://www.w3.org/TR/CSS21/tables.html#value-def-table-header-group">the specification</a> of `thead` and `tfoot` states that it might be useful to repeat the elements on each page. Sadly no browser vendor implemented this yet.

But it is possible to create a solution for that. It could be a nice thing to implement JavaScript events that get invoked right before a page is printed. But as <a href="https://twitter.com/SimonSapin">Simon Sapin</a> states this is not really possible due to the mechanisms how browsers layout a page:
<blockquote>

Page breaks happen during layout, much too late to do DOM manipulation (which invalidates and restarts layout). It’s really up to the layout engine to do this.
</blockquote>

Also more properties for `@page` could be helpful to generate header and footer for each page.

Luckily the <a href="http://www.w3.org/TR/2013/WD-css3-page-20130314/">Paged Media Specification</a> tries to tackle this problem. This specification has just become a Working Draft.

Here is an example on how you can implement a footer with the page count on every page:

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;"><span style="color: #a1a100;">@page {</span>
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


The `counter-increment` property is a bit special with the keyword `page` – it increments automatically according to the specification, so you don’t need it at all.

That rocks, right?! Totally want this in browsers now.

<strong>Edit – 26.03.2013:</strong> Actually there is another possible implementation for fixed headers and footers using `position: fixed;` elements as <a href="http://clt.ag/">Robert Weber</a> <a href="http://drublic.de/archive/printing-the-web/#comment-1100">researched</a>. Unfortunately this only works in Firefox, Opera and Internet Explorer with several quirks. Please <a href="http://drublic.de/archive/printing-the-web/#comment-1100">read his comment</a>.
<h3>A Word On Mobile</h3>

These days it has become more and more popular to visit web pages from your smartphone or tablet but I have never seen anyone printing a web page from such a device.

<del>I am not aware of a browser that has the ability to print a page. But maybe this will come in the near future.</del> Let me know if you know more about this.

<strong>Edit – 25.03.2013:</strong> As <a href="https://twitter.com/alrra">Cãtãlin Mariş</a> points out, iOS has a feature to connect to a wireless printer and print a website. This uses <a href="http://support.apple.com/kb/ht4356">Apple’s AirPrint</a> services.
<h3>The Server-Side</h3>

This post does not take any server-side rendering methods to create style sheets into account. However there are some several non-browsers, print-oriented CSS implementations: <a href="http://weasyprint.org/">WeasyPrint</a>, <a href="http://www.princexml.com/">PrinceXML</a> or <a href="http://www.antennahouse.com/">AntennaHouse</a> and others implement many CSS features that browsers don’t.

So take a look at these libraries if you are in need of more consitend

## Conclusion

As it turns out it is possible to handle simple structured web pages with the provided properties for print stylesheets. But when it comes to more complex applications you will easily reach the end of these possibilities.

As a result of the work that the editors put into new specifications such as the Paged Media Spec we will be able to deal with better solutions in the future.

## Thanks

A big thank you goes out to <a href="http://adrianroselli.com/">Adrian Roselli</a> and <a href="http://exyr.org/">Simon Sapin</a> for providing very valuable technical feedback for this article. Apart from that I want to thank <a href="http://tomascaspers.de/">Tomas Caspers</a> for proofreading the post.
