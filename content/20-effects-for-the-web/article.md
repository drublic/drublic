<strong>Christian “Schepp” Schaefer shows how to use the new filter-properties for CSS3 and combine them with methods implemented by most modern browsers. This article was <a href="http://maddesigns.de/css3-filter-1525.html" target="_blank">first published</a> in German on December 19th 2011.</strong>

In the late nineties CSS 2.1 brought us a basic set of good-enough tools to finally get table-free layouts en route. Then came CSS3 which started off by providing us with more creative tools to carve out the details. Today we finally have embeddeable fonts, rounded corners, gradients, semitransparent elements and colors, box and text shadows and so on and so forth.

Yet, comparing our toolset with that of an image editor like Photoshop we still discover a lot to desire. In Photoshop, for example, we have possibilities to desaturate parts of an image, or to sharpen or blur them. How might we need that for the web? Well, desaturating or blurring an area of a web page might be a means of directing your visitor’s attention to where you want it to be. Or it might help your visitor to concentrate better on an area, which you left untouched. Such a case might be magnifying pictures of a gallery:

[Image]

A sharpen effect on the other hand might be useful when you scale down images in the browser, since without counter-measures you lose a lot of image details.

[Image]

That said, it would be nice if we had such effects and could apply them the same way we do apply <code>opacity</code> to tranparentize a whole area. Alas, we don’t.

## The status quo

Instead, to replicate a desaturation/grey scaling we are currently forced to cycle “by hand” through the color values of every affected element with JavaScript and set them to a corresponding grey value. When we meet (background-)images or videos it gets even more complicated: Then we need to switch to <a href="http://spyrestudios.com/html5-canvas-image-effects-black-white/" target="_blank">HTML5 canvas to manipulate their color-values pixel by pixel</a> and swap out the original ones. But even if we get help from libraries like <a href="http://camanjs.com/examples" target="_blank">CamanJS</a> or <a href="http://www.iliasiovis.com/hoverizr/" target="_blank">Hoverizr</a>, it remains a profound messy affair.

A blur effect can also be simulated, this time by using <a href="http://webstandard.kulando.de/post/2011/12/09/css3-text-shadow-erzeugt-blur-effekt-tag-10-im-css3-adventskalender-2011" target="_blank">text-shadows</a> and/or <a href="http://tympanus.net/codrops/2011/12/14/item-blur-effect-with-css3-and-jquery/" target="_blank">box-shadows</a> that use the same color/background-color as the to be blurred text/box. The thing is, the illusion doesn’t work with multicolored boxes and, as before, not with images or video. This requires again some HTML5 canvas action. Sigh.

[Image]

Speaking of HTML5 canvas: A very brutal approach to that blurring topic is being made by a library called <a href="https://github.com/pmura/blurry.js" target="_blank">blurry.js</a>, which extracts all the content, recreates it in a canvas (partially via Cufón), blurs it there and injects the whole thing back to where the original content was.

Finally, for sharpening elements there is no CSS-based trick at all, which leaves us alone with HTML5 canvas.

## SVG to the rescue

Interestingly SVG knows a huge palette of so-called <a href="http://electricbeach.org/?p=950" target="_blank">filters</a> since ages, e.g. color blending, brightness/contrast adjustments, lighting, displacement mapping, gaussian and motion blur, clouds, noise, sharpen et cetera.

Now, what we might try, since SVG is more and more widely supported,&nbsp;is to not put our content into HTML, but instead to put it into an SVG which we then inline or embed into out HTML “frame”. Inside that SVG we are then able to <a href="http://dev.opera.com/articles/view/how-to-do-photoshop-like-effects-in-svg/" target="_blank">apply any effect we like to our contents</a>. The drawback is that a HTMLer won’t be too keen on switching to SVG markup like the following:

<div class="wp_syntax"><div class="code"><pre class="xml" style="font-family:monospace;"><span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;text</span> <span style="color: #000066;">font-family</span>=<span style="color: #ff0000;">"Arial"</span> <span style="color: #000066;">font-weight</span>=<span style="color: #ff0000;">"900"</span> <span style="color: #000066;">font-size</span>=<span style="color: #ff0000;">"40"</span> <span style="color: #000066;">x</span>=<span style="color: #ff0000;">"20"</span> <span style="color: #000066;">y</span>=<span style="color: #ff0000;">"55%"</span><span style="color: #000000; font-weight: bold;">&gt;</span></span>SVG Example<span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/text<span style="color: #000000; font-weight: bold;">&gt;</span></span></span></pre></div></div>


Something way cooler is an SVG thing called ForeignObject/xlink, <a href="http://ajaxian.com/archives/foreignobject-hey-youve-got-html-in-my-svg" target="_blank">which allows us to embed foreign objects or areas of foreign markup inside an SVG</a>. Think of it like inlining SVG into an HTML5 document, but the other way ’round. Once you have embedded your stuff, you can apply filters to it like you can for any other area of your SVG. <a href="http://dev.opera.com/articles/view/applying-color-tints-to-web-pages-with-s/" target="_blank">You might embed and filter a full HTML page from A to Z</a>, or you restrict yourself to <a href="http://www.flother.com/examples/canvas-blur/v4/blur.svg" target="_blank">just embedding and filtering a single bitmap image</a>. Of course, you’d need to put the holding SVG into an HTML page again, which makes up for some Inception-like braintwister (HTML with embedded SVG with embedded HTML). Browser support of the ForeignObject is <a href="http://caniuse.com/#feat=svg-html" target="_blank">quite good</a>. Remains left IE, who will follow suite in version 10 both with SVG filters and ForeignObject.

## SVG Filters in HTML via CSS

Firefox since version 3.5 goes even further. He allows you to reach out to a filter that resides inside an SVG from out your HTML document’s stylesheet and have that filter then applied to any HTML element. We could for example define a <code>feGaussianBlur</code>-filter in an SVG with a radius of 2px and assign it the id <code>gaussian_blur</code>:

<div class="wp_syntax"><div class="code"><pre class="xml" style="font-family:monospace;"><span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;?xml</span> <span style="color: #000066;">version</span>=<span style="color: #ff0000;">"1.0"</span> <span style="color: #000066;">standalone</span>=<span style="color: #ff0000;">"no"</span><span style="color: #000000; font-weight: bold;">?&gt;</span></span>
<span style="color: #00bbdd;">&lt;!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" </span>
<span style="color: #00bbdd;">"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"&gt;</span>
<span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;svg</span> <span style="color: #000066;">width</span>=<span style="color: #ff0000;">"1"</span> <span style="color: #000066;">height</span>=<span style="color: #ff0000;">"1"</span> <span style="color: #000066;">version</span>=<span style="color: #ff0000;">"1.1"</span> </span>
<span style="color: #009900;"><span style="color: #000066;">xmlns</span>=<span style="color: #ff0000;">"http://www.w3.org/2000/svg"</span> </span>
<span style="color: #009900;"><span style="color: #000066;">xmlns:xlink</span>=<span style="color: #ff0000;">"http://www.w3.org/1999/xlink"</span><span style="color: #000000; font-weight: bold;">&gt;</span></span>
  <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;defs<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>
    <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;filter</span> <span style="color: #000066;">id</span>=<span style="color: #ff0000;">"gaussian_blur"</span><span style="color: #000000; font-weight: bold;">&gt;</span></span>
      <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;feGaussianBlur</span> <span style="color: #000066;">in</span>=<span style="color: #ff0000;">"SourceGraphic"</span> <span style="color: #000066;">stdDeviation</span>=<span style="color: #ff0000;">"2"</span> <span style="color: #000000; font-weight: bold;">/&gt;</span></span>
    <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/filter<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>
  <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/defs<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>
<span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/svg<span style="color: #000000; font-weight: bold;">&gt;</span></span></span></pre></div></div>


Then we could reference that filter by the SVG’s file name and the filter’s id in our styles and have it applied to every image:

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;">img <span style="color: #00AA00;">{</span>
  filter<span style="color: #00AA00;">:</span> <span style="color: #993333;">url</span><span style="color: #00AA00;">(</span>blur<span style="color: #6666ff;">.svg</span><span style="color: #cc00cc;">#gaussian_blur</span><span style="color: #00AA00;">)</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span></pre></div></div>


[Image]

You find a live-demo <a href="http://www.der-schepp.de/code-files/blur.html" target="_blank">here</a>. Alas, as I said, this just works with Firefox.

Thankfully this is not the end of the story. IE also knows filters, although not SVG-based, but instead based on early incarnations of the Windows graphics library DirectX. Amongst those filters are not only the well known alpha oder gradient filters that we use to fix bugs or to replicate CSS3 features. There are also filters that are quite similar to many of the interesting SVG filters:

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;"><span style="color: #808080; font-style: italic;">/* blur by 2 pixels */</span>
filter<span style="color: #00AA00;">:</span> progid<span style="color: #3333ff;">:DXImageTransform</span><span style="color: #6666ff;">.Microsoft</span>.Blur<span style="color: #00AA00;">(</span>pixelradius<span style="color: #00AA00;">=</span><span style="color: #cc66cc;">2</span><span style="color: #00AA00;">)</span><span style="color: #00AA00;">;</span>
<span style="color: #808080; font-style: italic;">/* 13 pixel motion blur rotated to an angle of 310° */</span>
filter<span style="color: #00AA00;">:</span> progid<span style="color: #3333ff;">:DXImageTransform</span><span style="color: #6666ff;">.Microsoft</span>.MotionBlur<span style="color: #00AA00;">(</span>strength<span style="color: #00AA00;">=</span><span style="color: #cc66cc;">13</span><span style="color: #00AA00;">,</span> <span style="color: #000000; font-weight: bold;">direction</span><span style="color: #00AA00;">=</span><span style="color: #cc66cc;">310</span><span style="color: #00AA00;">)</span><span style="color: #00AA00;">;</span>
<span style="color: #808080; font-style: italic;">/* grey scale / desaturate */</span>
filter<span style="color: #00AA00;">:</span> <span style="color: #993333;">gray</span><span style="color: #00AA00;">;</span>
<span style="color: #808080; font-style: italic;">/* Röntgen effect (inverted grey scale) */</span>
filter<span style="color: #00AA00;">:</span> xray<span style="color: #00AA00;">;</span>
<span style="color: #808080; font-style: italic;">/* light cone */</span>
filter<span style="color: #00AA00;">:</span> light<span style="color: #00AA00;">(</span><span style="color: #00AA00;">)</span><span style="color: #00AA00;">;</span>
<span style="color: #808080; font-style: italic;">/* emboss */</span>
filter<span style="color: #00AA00;">:</span> progid<span style="color: #3333ff;">:DXImageTransform</span><span style="color: #6666ff;">.Microsoft</span>.emboss<span style="color: #00AA00;">(</span><span style="color: #00AA00;">)</span><span style="color: #00AA00;">;</span></pre></div></div>


You find a full list of those visual filters <a href="http://msdn.microsoft.com/en-us/library/ms673539(v=VS.85).aspx" target="_blank">here</a>.

So, with the help of conditional comments we can now already serve certain effects to two browser families, which together make up a considerable amount of the browser market:

<div class="wp_syntax"><div class="code"><pre class="xml" style="font-family:monospace;"><span style="color: #00bbdd;">&lt;!DOCTYPE HTML&gt;</span>
<span style="color: #808080; font-style: italic;">&lt;!--[if lte IE 9]&gt; &lt;html class="ie" lang="en"&gt; &lt;![endif]--&gt;</span>
<span style="color: #808080; font-style: italic;">&lt;!--[if gt IE 9]&gt;&lt;!--&gt;</span> <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;html</span> <span style="color: #000066;">lang</span>=<span style="color: #ff0000;">"en"</span><span style="color: #000000; font-weight: bold;">&gt;</span></span> <span style="color: #808080; font-style: italic;">&lt;!--&lt;![endif]--&gt;</span>
<span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;head<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>
<span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;meta</span> <span style="color: #000066;">charset</span>=<span style="color: #ff0000;">"utf-8"</span><span style="color: #000000; font-weight: bold;">&gt;</span></span>
<span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;title<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>Blur via CSS<span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/title<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>
<span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;style<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>
img {
  filter: url(blur.svg#gaussian_blur);
}
.ie img {
  margin: -2px;
  filter: progid:DXImageTransform.Microsoft.blur(pixelradius=2);
  zoom: 1;
}
<span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/style<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>
<span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/head<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>
<span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;body<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>
  <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;img</span> <span style="color: #000066;">src</span>=<span style="color: #ff0000;">"stadt.jpg"</span></span>
<span style="color: #009900;">   <span style="color: #000066;">alt</span>=<span style="color: #ff0000;">"Some rights reserved by zigazou76"</span></span>
<span style="color: #009900;">   <span style="color: #000066;">width</span>=<span style="color: #ff0000;">"500"</span> <span style="color: #000066;">height</span>=<span style="color: #ff0000;">"333"</span><span style="color: #000000; font-weight: bold;">&gt;</span></span>
<span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/body<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>
<span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/html<span style="color: #000000; font-weight: bold;">&gt;</span></span></span></pre></div></div>


<em><code>margin: -2px</code> counters the increased dimensions of the filtered element in IE. <code>zoom: 1</code> is needed for most filters to work in IE6/7. Sad fact: IE10 won’t support filters anymore :(</em>

<a href="http://www.der-schepp.de/code-files/blur2.html" target="_blank">Here you find the extended example</a>

As people liked Firefox’s idea to open up SVG filters for use with HTML, those people formed a new task force in the W3C called W3C FX Task Force whose purpose it got to standardize and even simplify usage of SVG filters for use in all browsers. Because Firefox already pioneered filter effects the first draft didn’t take too long to appear under the label of <a href="https://dvcs.w3.org/hg/FXTF/raw-file/tip/filters/index.html" target="_blank">W3C Filter Effects 1.0</a>. The mechanics proposed in that draft work almost like in Firefox, but with the addition of offering shortcuts to some of the most interesting filters. Filters that have a shortcut defined work without the help of an external SVG. They are sort of permanently hard wired inside browser engine. Those are the filters with shortcuts:
<ul>
<li>grayscale</li>
<li>sepia</li>
<li>saturate</li>
<li>hue-rotate</li>
<li>invert</li>
<li>opacity</li>
<li>brightness</li>
<li>contrast</li>
<li>blur</li>
<li>drop-shadow</li>
</ul>

Another advantage of the shortcut filters is that they are animateable via CSS transitions or animations:

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;"><span style="color: #6666ff;">.foo</span> <span style="color: #00AA00;">{</span>
  filter<span style="color: #00AA00;">:</span> blur<span style="color: #00AA00;">(</span><span style="color: #933;">2px</span><span style="color: #00AA00;">)</span><span style="color: #00AA00;">;</span>
  transition<span style="color: #00AA00;">:</span> filter 1s ease-in-out<span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span>
&nbsp;
<span style="color: #6666ff;">.foo</span><span style="color: #3333ff;">:hover </span><span style="color: #00AA00;">{</span>
  filter<span style="color: #00AA00;">:</span> blur<span style="color: #00AA00;">(</span><span style="color: #cc66cc;">0</span><span style="color: #00AA00;">)</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span></pre></div></div>


This would be much harder and less efficient to do within an SVG.

Finally the filter effects are planned to be extended with <a href="http://www.adobe.com/devnet/html5/articles/css-shaders.html" target="_blank">OpenGL/WebGL vertex and fragment shaders</a>. Vertex shaders will let you span a 2D mesh over an element and then let you distort the object by moving all the crossing points of the mesh following a mathematical formula of your choice. Fragment shaders on the other hand will allow you to do such mathematical processing on the colors of every pixel of that element. And all of it, on top, hardware accelerated on your graphics card.

<a href="http://www.adobe.com/devnet/html5/articles/css-shaders.html">[Image]</a>

Conveniently last week saw the first implementation of those filters in the <a href="http://nightly.webkit.org/" target="_blank">WebKit-Nightlies</a>, from were they quickly spawned over to <a href="http://tools.google.com/dlpage/chromesxs" target="_blank">Chrome Canary</a>. That means that within a 3 months timeframe CSS filter effects will be available in your everyday Chrome browser and probably not too much later also in Safari. And this means that we are not too far away from being able to serve some flavor of CSS filters to 90% – 95% of all browsers on the market!

Returning to our code example, all that we need to add for WebKit now is a simple <code>-webkit-filter: blur(2px);</code> which for once we need to put <em>after</em> the unprefixed <code>filter</code>-property. The reason is that once WebKit will support an unprefixed <code>filter</code>-property that Firefox-specific syntax in the last line would kill our CSS transition, which we do apply in order to fade nicely from blurred to unblurred and back via <code>-webkit-transition: -webkit-filter 1s ease-in-out</code>:

<div class="wp_syntax"><div class="code"><pre class="xml" style="font-family:monospace;"><span style="color: #00bbdd;">&lt;!DOCTYPE HTML&gt;</span>
<span style="color: #808080; font-style: italic;">&lt;!--[if lte IE 9]&gt; &lt;html class="ie"&gt; &lt;![endif]--&gt;</span>
<span style="color: #808080; font-style: italic;">&lt;!--[if gt IE 9]&gt;&lt;!--&gt;</span> <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;html<span style="color: #000000; font-weight: bold;">&gt;</span></span></span> <span style="color: #808080; font-style: italic;">&lt;!--&lt;![endif]--&gt;</span>
<span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;head<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>
<span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;meta</span> <span style="color: #000066;">charset</span>=<span style="color: #ff0000;">"utf-8"</span><span style="color: #000000; font-weight: bold;">&gt;</span></span>
<span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;title<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>Blur via CSS<span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/title<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>
<span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;style<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>
img {
  filter: url(blur.svg#gaussian_blur);
  -webkit-filter: blur(2px);
  -webkit-transition: -webkit-filter 1s ease-in-out;
}
img:hover {
  filter: none;
  -webkit-filter: blur(0);
}
.ie img {
  margin: -2px;
  filter: progid:DXImageTransform.Microsoft.blur(pixelradius=2);
  zoom: 1;
}
.ie img:hover {
  margin: 0;
  filter: none;
}
<span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/style<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>
<span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/head<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>
<span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;body<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>
  <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;img</span> <span style="color: #000066;">src</span>=<span style="color: #ff0000;">"stadt.jpg"</span></span>
<span style="color: #009900;">   <span style="color: #000066;">alt</span>=<span style="color: #ff0000;">"Some rights reserved by zigazou76"</span></span>
<span style="color: #009900;">   <span style="color: #000066;">width</span>=<span style="color: #ff0000;">"500"</span> <span style="color: #000066;">height</span>=<span style="color: #ff0000;">"333"</span><span style="color: #000000; font-weight: bold;">&gt;</span></span>
<span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/body<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>
<span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/html<span style="color: #000000; font-weight: bold;">&gt;</span></span></span></pre></div></div>


<a href="http://www.der-schepp.de/code-files/blur3.html" target="_blank">And here is the final example</a>.

And that’s it, filter effects for everyone! Let 2012 be the year of the CSS filters and <a href="http://davidwalsh.name/dw-content/css-filters.php">have fun playing with’em</a>.

---

<section style="clear: both;margin-top: 2rem"><img src="https://web.archive.org/web/20210124145621im_/https://hansreinl.de/archive/wp-content/uploads/2011/12/Schepp-2010a-220x240.jpg" alt="" width="110" height="120" class="alignleft size-thumbnail wp-image-673" style="float: left; margin-right: 1rem;">Christian ”Schepp” Schaefer is a freelance web developer living in Düsseldorf, Germany. He is the author of&nbsp;<a href="http://github.com/Schepp/CSS-JS-Booster">CSS-JS-Booster</a>, co-author of&nbsp;<a href="http://turbinecss.org/">Turbine CSS Framework</a>, one hosts of the (German) <a href="http://workingdraft.de/">Working Draft Podcast</a>&nbsp;and he follows your tweets with his account&nbsp;<a href="http://twitter.com/derSchepp">derSchepp</a>.</section>
