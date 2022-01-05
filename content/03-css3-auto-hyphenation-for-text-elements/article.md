
In browsers we do not have the ability to automatically hyphenate continuous text. This is an issue when you are using <code>text-align: justify;</code> for instance because the text may look really bad.

I want to write about this topic because of the discussion that came up at the&nbsp;<a title="Github issue with hyphenation for HTML5 Boilerpate" href="https://github.com/paulirish/html5-boilerplate/issues/708" target="_blank">HTML5 Boilerpates issue-list</a> and <a title="The Fontdeck Blog writes about hyphenation" href="http://blog.fontdeck.com/post/9037028497/hyphens" target="_blank">this blogpost at Fontdeck Blog</a>.

The <a title="Specification for hyphenation" href="http://www.w3.org/TR/css3-gcpm/#hyphenation" target="_blank">specification</a> says:

> Hyphenation means splitting words to improve the layout of paragraphs.

## CSS3 Properties

CSS3 adds six properties to the list of useful thing. These are:
<ul>
<li>The most important one is <code>hyphens</code>. More to this one later.</li>
<li>You can add dictionary-files with <code>hyphenate-resource</code> so the browser has a better chance to render your text with the right hyphenation.</li>
<li><code>hyphenate-before</code> sets a minimum number of characters before the hyphenation.</li>
<li><code>hyphenate-after</code> does the same as <code>hyphenate-before</code> but for characters after the hyphenation.</li>
<li><code>hyphenate-lines</code> defines about how many lines a hyphenated word is written at a maximum.</li>
<li>with <code>hyphenate-character</code> you can specify which HTML-entity should be used, e.g. <code>\2010</code>.</li>
</ul>

The main property of this stack&nbsp;is <code>hyphens</code>. It accepts one of three values: <code>none</code>, <code>manual</code> or <code>auto</code>. The default one is <code>manual</code>, where you can set hyphens via <code>&amp;shy;</code>. <code>auto</code> it the better one for&nbsp;continuous text while words get split if possible and available. And <code>none</code> does not hyphenate at all even if there is a character set for a possible line break in a certain word.

There is one thing you have to be aware of if you use this property: You have to define a <code>lang</code>-attribute on an element that&nbsp;carries text that should be hyphenated.

I made <a title="Hyphenation without lang-attribute" href="http://jsfiddle.net/drublic/H9cvZ/" target="_blank">this jsFidde</a> where no <code>lang</code>-attribute is set. It does not work in Firefox. <a title="Hyphenation with lang-attribute" href="http://jsfiddle.net/drublic/hDMCG/" target="_blank">With this attribute set</a>, it works quite good in Firefox, too (thx to <a title="91media's website" href="http://91media.de/" target="_blank">91media</a>).

## Browsersupport

Currently <code>hyphens</code> is supported in Safari 5.1 and Firefox 6. For Firefox 6 the lang-attribute must be set as mentioned above. Also it <a title="Firefox only supports english" href="https://developer.mozilla.org/en/CSS/hyphens#AutoCompatibilityTable" target="_blank">only supports english</a>.<br>
It is not working in Chrome 15.

You have to add some vendor-prefixes for support in browsers:

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;"><span style="color: #6666ff;">.element</span> <span style="color: #00AA00;">{</span>
  -webkit-hyphens<span style="color: #00AA00;">:</span> <span style="color: #993333;">auto</span><span style="color: #00AA00;">;</span>
     -moz-hyphens<span style="color: #00AA00;">:</span> <span style="color: #993333;">auto</span><span style="color: #00AA00;">;</span>
          hyphens<span style="color: #00AA00;">:</span> <span style="color: #993333;">auto</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span></pre></div></div>


There is <a title="Polyfill for hyphenation: Hyphanator.js" href="http://code.google.com/p/hyphenator/" target="_blank">a polyfill</a> for this. It’s working with JS and inserts the HTML special-char <code>&amp;shy;</code> where it fits. It supports <a title="Languages supported by Hyphenator.js" href="http://code.google.com/p/hyphenator/wiki/en_AddNewLanguage" target="_blank">many languages</a>. This polyfill also <a title="CSS3-usage in hyphenator" href="http://code.google.com/p/hyphenator/wiki/en_CSS3Hyphenation" target="_blank">uses the CSS-property where it is possible</a>.

<strong>Edit:</strong><br>
Thanks to <a href="http://drublic.de/archive/css3-auto-hyphenation-for-text-elements/#comment-16" title="View Ash's comment below">Ash</a> for letting me know about my mistake using <code>hyphen</code> instead of <code>hyphens</code>.

## Update

I just found <a href="https://github.com/Modernizr/Modernizr/issues/312" title="Modernizr test for hyphens" target="_blank">this issue</a> at the Modernizr issue-tracker where a test for the <code>hyphens</code>-attribute is discussed. There is a test in the <a href="http://modernizr.github.com/Modernizr/test/index.html" target="Latest tests for Modernizr">latest GitHub-Version</a> for it. Search for <code>csshyphens</code>.

## Update 2: 12.11.2012

<code>-webkit-hyphens</code> <a href="http://blog.chromium.org/2012/11/a-web-developers-guide-to-latest-chrome.html">has now landed</a> in Chrome Beta.
