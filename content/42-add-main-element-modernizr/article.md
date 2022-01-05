<div class="post__intro" markdown="1">
### We don’t need this anymore

With <a href="https://github.com/Modernizr/Modernizr/releases/tag/v2.7.0">Modernizr v2.7.0</a> we don’t need this work around anymore. Please update to this version if you use `<main>`.
</div>



**tl;dr:** You can add the new `main`-element to Modernizr 2.6.2 by using HTML5 Shiv’s `window.html5` option to add your own elements to the shiv.

---

Since I use some bleeding edge stuff in HTML and CSS in actual projects for clients I ran into one particular issue a couple of times lately and I thought I share a little workaround with you.

## Modernizr’s current state

Modernizr includes HTML5 Shiv to make HTML5 elements like `header`, `figure` and `time` known and styleable in old IE. Due to development for Modernizr version 3 the current version is Modernizr 2.6.2 which <a href="http://modernizr.com/news/modernizr-262/">was published</a> nearly a year ago (September 2012) when the `main`-element wasn’t around yet. Thus the version of HTML5 Shiv does not include a shiv for the `main`-element.

Today `main` <a href="http://www.w3.org/html/wg/drafts/html/master/grouping-content.html#the-main-element">is part of the HTML5 specification</a> and is implemented in Chrome, Firefox and Safari Nightlies. You can <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main">read more about its value</a> especially for semantics and accessibility on MDN and <a href="http://html5doctor.com/the-main-element/">in a recent article at HTML5 Doctor</a>.

The guys behind HTML5 Shiv included the `main`-element <a href="https://github.com/aFarkas/html5shiv/issues/81">some time ago</a> (you can learn more about the process of including some kind of default styling for the element in <a href="https://github.com/aFarkas/html5shiv/pull/87">another HTML5 Shiv issue</a> (thanks <a href="http://drublic.de/archive/add-main-element-modernizr/#comment-1951">Mathias for the pointer</a>)) and it is available in version 3.6.2. Sadly the latest stable version of Modernizr only includes version 3.6.1 of the shiv and there is no date set for a new release of Modernizr since everyone on the team tries to push version 3 to be out as soon as possible which will them <a href="https://github.com/Modernizr/Modernizr/pull/837">include the new version of the shiv</a>.

## The Workaround

Until then we need to work around the missing shiv for the `main`-element (along with `dialog` and `template`).<br>
Luckily it is possible to extend the list of elements HTML5 Shiv operates upon via its `html5.elements` option that we can use as needed.

First of all we need to create an object `html5` on the `window` object and then add all elements that we want to be shiv’d.

<div class="wp_syntax"><div class="code"><pre class="javascript" style="font-family:monospace;">window.<span style="color: #660066;">html5</span> <span style="color: #339933;">=</span> <span style="color: #009900;">{</span>
  elements<span style="color: #339933;">:</span> <span style="color: #3366CC;">'abbr article aside audio bdi canvas data datalist details dialog '</span> <span style="color: #339933;">+</span>
      <span style="color: #3366CC;">'figcaption figure footer header hgroup main mark meter nav output progress '</span> <span style="color: #339933;">+</span>
      <span style="color: #3366CC;">'section summary template time video'</span>
<span style="color: #009900;">}</span><span style="color: #339933;">;</span></pre></div></div>


It is useful to take <a href="https://github.com/aFarkas/html5shiv/blob/master/src/html5shiv.js#L247">the list from the current version of the shiv</a> to include all elements that need the shiv.

This code needs to be included before Modernizr is actually invoked so it might be useful to place it inline right before you insert Modernizr itself.

There is another way to include only specific elements like for example the `main`-element after Modernizr is already included:

<div class="wp_syntax"><div class="code"><pre class="javascript" style="font-family:monospace;">window.<span style="color: #660066;">html5</span>.<span style="color: #660066;">elements</span> <span style="color: #339933;">=</span> <span style="color: #3366CC;">'main'</span><span style="color: #339933;">;</span>
window.<span style="color: #660066;">html5</span>.<span style="color: #660066;">shivDocument</span><span style="color: #009900;">(</span>document<span style="color: #009900;">)</span><span style="color: #339933;">;</span> <span style="color: #006600; font-style: italic;">// re-invoke the `shivDocument` method</span></pre></div></div>

## Conclusion

This method is pretty straightforward and saves you a lot of time debugging or working around the inclusion of the `main`-element if you use Modernizr anyway.
