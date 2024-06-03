
So <a title="a@download in the spec" href="http://www.whatwg.org/specs/web-apps/current-work/multipage/links.html#downloading-resources" target="_blank">the spec introduces</a> a new attribute on <code>a</code>-tags (so called “links” – this may be new to you ;-)) called <code>download</code> (short: a@download – this technique of connecting attributes with tags is <a title="HTML element + attribute notation" href="http://mathiasbynens.be/notes/element-attribute-notation" target="_blank">written up and documented by Mathias Bynens</a>).

When you link to a file like&nbsp;<a title="An image displayed in a browser window" href="http://hansreinls.de/archive/wp-content/uploads/2011/08/blog-a@download.jpg" target="_blank">an image</a>&nbsp;or&nbsp;<a title="A PDF-document that opens within the browser" href="http://www.git-tower.com/files/cheatsheet/Git_Cheat_Sheet_grey.pdf" target="_blank">a PDF-document</a>&nbsp;it will be displayed within the browser normally. The <code>download</code>-attribute in links prevents this behavior and offers the file as a download in your browser.

## Definition

The spec allows the attribute for having a value. This value can be a string which defines the name of the downloaded file. As a default the browser takes the file’s original name.

And this is what it could look like in HTML:

<div class="wp_syntax"><div class="code"><pre class="xml" style="font-family:monospace;"><span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;a</span> <span style="color: #000066;">href</span>=<span style="color: #ff0000;">"path/to/file/file.png"</span> <span style="color: #000066;">download</span>=<span style="color: #ff0000;">"a-nice-image.png"</span><span style="color: #000000; font-weight: bold;">&gt;</span></span>Download this file<span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/a<span style="color: #000000; font-weight: bold;">&gt;</span></span></span></pre></div></div>


The value of the <code>download</code>-attribute overwrites the filename with <code>a-nice-image.png</code>.

The <code>Content-Disposition</code>-header can overwrite the name for the file.

<a title="a@download demo" href="http://html5-demos.appspot.com/static/a.download.html" target="_blank">This really nice demo</a>&nbsp;exports a written text and offers it as download (but be aware of browser-support – see below).

## Browsersupport

The download-attribute is not supported very good at the moment of writing this article.<br>
Chrome supports it since its version 14. Version 14 is only a view weeks away from the stable release.<br>
Firefox 8alpha (Aurora-channel) does not support it as far as I experienced it. I did not find anything about any intensions when Mozilla will include it.<br>
And the other ones? No support yet!

## So, what’s the fallback?

There are other techniques to serve a file that will be offered as a downloads in the browser. For instance you can use an HTTP-Header that’s a mime-type that the browser does not know.

Here is an example with PHP:

<div class="wp_syntax"><div class="code"><pre class="php" style="font-family:monospace;"><span style="color: #990000;">header</span><span style="color: #009900;">(</span><span style="color: #0000ff;">'Content-Type:&nbsp;application/force-download'</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span>
<span style="color: #990000;">header</span><span style="color: #009900;">(</span><span style="color: #0000ff;">'Content-Disposition:&nbsp;attachment;&nbsp;filename="some-file-name.ext"'</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span></pre></div></div>


You should then open the download in a new window or tab, or in an iframe to prevent any stupid browser-behavior.

More about this issue here.
<ul>
<li><a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/links.html#downloading-resources" target="_blank">The specification</a></li>
<li><a href="http://updates.html5rocks.com/2011/08/Downloading-resources-in-HTML5-a-download" target="_blank">HTML5 Rocks</a></li>
</ul>

