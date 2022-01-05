
There is a big discussion going on at the moment covering the actual point of how to deal with images and media et al. on mobile-phones and other devices as there are some things that don’t work as on a desktop computer:
<ul>
<li>Bandwidth</li>
<li>Screen size</li>
<li>Performance / Velocity</li>
</ul>

The question is how to deliver responsive images on a mobile website.

You maybe use something like <code>img { max-width: 100%; height: auto; }</code> in your responsive design to prevent images from being bigger then the screen of a mobile device.

In most of the cases this shrinks images in its displayed size, which is a&nbsp;processor intensive thing to do – especially when you are on a mobile device and don’t have endless processor capacity this hurts.<br>
The shrinking itself does not change the file-size that has to be loaded; it remains the same as on a desktop for example. As bandwidth is the bottleneck these days if you are on a mobile device, this is the issue where people want to see some improvement.

## What can we do about it?

There are a couple of proposals and known techniques on how to solve the problem:

### 1. Resize images with PHP

This is something you could only do if you know the screen-size before you load the images them self. So you have to inject HTML through JavaScript for example and change the sources for images accordingly.

The <a href="http://adaptive-images.com/" target="_blank">Adaptive Images</a> framework a similar technique. Check out the <a title="Adaptive Images on GitHub" href="https://github.com/MattWilcox/Adaptive-Images" target="_blank">source on GitHub</a>.

### 2. Request different images using data-attributes

An article by Nicolas Gallagher covers this method using CSS to detect which source would be best to use.

The method could work like this: You have an image which has a really small file size and is served for every device at first (mobile first approche).

<div class="wp_syntax"><div class="code"><pre class="xml" style="font-family:monospace;"><span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;img</span> <span style="color: #000066;">src</span>=<span style="color: #ff0000;">"image.jpg"</span> <span style="color: #000066;">alt</span>=<span style="color: #ff0000;">""</span> <span style="color: #000066;">data-src-600px</span>=<span style="color: #ff0000;">"image-600px.jpg"</span> <span style="color: #000000; font-weight: bold;">/&gt;</span></span></pre></div></div>


Now you are going to change the file if the screen is bigger by using the <code>content</code>-property of CSS and its <code>attr()</code> function.

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;"><span style="color: #a1a100;">@media (min-device-width:600px) {</span>
    img<span style="color: #00AA00;">[</span>data-src<span style="color: #933;">-600px</span><span style="color: #00AA00;">]</span> <span style="color: #00AA00;">{</span>
        <span style="color: #000000; font-weight: bold;">content</span><span style="color: #00AA00;">:</span> attr<span style="color: #00AA00;">(</span>data-src<span style="color: #933;">-600px</span><span style="color: #00AA00;">,</span> <span style="color: #993333;">url</span><span style="color: #00AA00;">)</span><span style="color: #00AA00;">;</span>
    <span style="color: #00AA00;">}</span>
<span style="color: #00AA00;">}</span></pre></div></div>


Please have a look <a title="Responsive images using CSS3" href="http://nicolasgallagher.com/responsive-images-using-css3/" target="_blank">at the article</a> for detailed information.

An idea that goes beyond the replacement of images with the <code>attr()</code>-function is the usage of <code>content: url(myimage.jpg) replaced;</code>. This is something <a title="Tab Atkins' suggestion to use replaced content" href="http://lists.w3.org/Archives/Public/www-style/2011Aug/0661.html" target="_blank">suggested</a> by Tab Atkins Jr. on the W3C www-styles mailing list – called replaced content.<br>
Something about <a title="Replaced Content in the CSS-specification" href="http://www.w3.org/TR/css3-content/#replacedContent" target="_blank">replaced content</a> appears in the CSS-spec but it does not look to be exactly what Tab is referring to.

### 3. Introduce new attributes to the &lt;img&gt;-tag

<a title="Anselm's website" href="http://anselm.novolo.de/">Anselm Hannemann</a> <a title="Anselm's idea on the WHATWG's Mailing list" href="http://lists.whatwg.org/htdig.cgi/whatwg-whatwg.org/2011-August/032977.html">shares the idea</a> of introducing a media-attribute that has some sort of “sizing-parameter”. It is supposed to be combined with the media-src-attribute which also has the sizing-parameter.<br>
The HTML could look something <a title="Gist by Anselm dealing with media- and media-src-attribute" href="https://gist.github.com/1158855" target="_blank">like this</a>:

<div class="wp_syntax"><div class="code"><pre class="xml" style="font-family:monospace;"><span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;img</span> <span style="color: #000066;">src</span>=<span style="color: #ff0000;">"myimage_xs.jpg"</span></span>
<span style="color: #009900;"><span style="color: #000066;">media-xs</span>=<span style="color: #ff0000;">"(min-device-width:320px and max-device-width:640px)"</span> <span style="color: #000066;">media-src-xs</span>=<span style="color: #ff0000;">"myimage_xs.jpg"</span></span>
<span style="color: #009900;"><span style="color: #000066;">media-m</span>=<span style="color: #ff0000;">"(min-device-width:640px and max-device-width:1024px)"</span> <span style="color: #000066;">media-src-m</span>=<span style="color: #ff0000;">"myimage_m.jpg"</span></span>
<span style="color: #009900;"><span style="color: #000066;">media-xl</span>=<span style="color: #ff0000;">"(min-device-width:1024px)"</span> <span style="color: #000066;">media-src-xl</span>=<span style="color: #ff0000;">"myimage_xsl.jpg"</span><span style="color: #000000; font-weight: bold;">&gt;</span></span></pre></div></div>


As you can see the <code>media</code>-attributes contain media-queries which describe when to take a certain image-source.

### 4. Using JavaScript

There are some ideas on how to deal with this topic using JavaScript.

The FilamentGroup for example published its “Responsive Images”-project <a title="An Experiment with Mobile-First Images that Scale Responsively &amp; Responsibly" href="https://github.com/filamentgroup/Responsive-Images" target="_blank">on GitHub</a>. They are using “Mobile-First” to present a small-sized image on every device and replace this with JavaScript on window load.<br>
You can find out more about how it works <a title="_blank" href="http://filamentgroup.com/lab/responsive_images_experimenting_with_context_aware_image_sizing/">on their blog</a>. They also published <a title="Demo of Responsive Images" href="http://filamentgroup.com/examples/responsive-images/" target="_blank">a demo</a>.

Peter-Paul Koch <a title="Combining media queries and JavaScript" href="http://www.quirksmode.org/blog/archives/2010/08/combining_media.html" target="_blank">presented a possible way</a> on how to combine media queries with JavaScript. Which is not really new I think but a good summery.

Another approach could be a new attribute for the <code>script</code>-tag: Scott Jehl <a title="Scott Jehl's suggestion on responsive images: a `preparse`-attribute for the `script`-tag" href="https://twitter.com/#!/scottjehl/status/119836986101075968">suggested</a> to call it <code>preparse</code>. The script could then be used to replace sources in HTML fitting the current client-need.

[Image]

### 5. A new image-format containing different sizes

People aso had the idea of creating an own image-format which contains for example four layers with different image sizes. The image then “decides” which format to take and serves this to the client without its three sibling-layers.

At the moment there is a format called <a title="MrSID on Wikipedia" href="http://en.wikipedia.org/wiki/MrSID" target="_blank">MrSID</a> developed by <a title="LizardTech on Wikipedia" href="http://en.wikipedia.org/wiki/LizardTech">LizardTech</a> which can have one or more compression rates.

Another approach is the <a title="JPEG 2000 on Wikipedia" href="http://en.wikipedia.org/wiki/JPEG_2000">JPEG 2000</a> file-format. It can carry out different optimization-levels for images. Read more about it on the Wikipedia-page I linked above.

## Media? But this was only about images…

Yup, right! Images are just one aspect when it comes to responsive media.<br>
Videos for example are another thing. YouTube offers different video-sizes for watching. You have to choose manually which one to use. A possibility to select this resource automatically, build into the browser would be awesome!

JPEG 2000 has a video-equivalent developed by the same group of people as the JPEG-format called Motion JPEG 2000. Find more information about this <a href="http://www.jpeg.org/jpeg2000/j2kpart3.html" title="Motion JPEG 2000" target="_blank">here</a>.

## Conclusion

As it turns out many developers are not aware of the problems that come up with a real responsive design – even HTML5-specification writer are <a title="Anne van Kersten calls responsive media 'a niche problem' on the W3C mailing-list" href="http://lists.whatwg.org/htdig.cgi/whatwg-whatwg.org/2011-August/033029.html">calling it</a> “a niche problem”. This is why it is hard to develop a specification for a native API as for example Anselm Hannemann suggests.

But maybe the decision which technique might be best for solving the problem of serving responsive media has to be finished first before anything is spec’d up.

## Moar!

Some more resources where the topic is discussed:
<ul>
<li>A List Apart started the whole “Responsive Design”-discussion with <a href="http://www.alistapart.com/articles/responsive-web-design" title="Responsive Web Design" target="_blank">an article</a> by Ethan Marcotte</li>
<li><a href="https://groups.google.com/forum/#!topic/jquery-standards/rl8886ZRs8o" title="Responsive images discussed by the jQuery Standards Team - Google Group" target="_blank">jQuery Standards Team</a></li>
<li><a href="http://www.webmonkey.com/2011/08/speed-up-your-responsive-designs-with-adaptive-images/" title="Scott Gilbertson - Webmonkey - about responsive images">Scott Gilbertson on Webmonkey</a></li>
<li><a href="http://csswizardry.com/2011/07/responsive-images-right-now/" title="Responsive images right now" target="_blank">Another CSS-only idea</a> by Harry Roberts</li>
</ul>

### Thanks!

Thanks goes out to <a title="Anselm on Twitter" href="https://twitter.com/anselmhannemann" target="_blank">Anselm</a>, for reading what I wrote and helping me with some further information.
	</div>
