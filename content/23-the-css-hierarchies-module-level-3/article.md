
Since the beginning of February there were some proposals for the CSS3 specification. These proposals are not yet part of the&nbsp;specification&nbsp;and will likely be changed until they get adopted by the <a title="The CSS Working Group Wiki" href="http://wiki.csswg.org/">CSSWG</a>. One of these drafts is the&nbsp;<a title="The CSS Hierarchies Module Level 3" href="http://dev.w3.org/csswg/css3-hierarchies/"><strong>CSS Hierarchies Module Level 3</strong></a>.

## So what’s the Hierarchies Module? And why “Level 3”?

The Hierarchies Module is not exactly new. It exists since the very first steps of CSS and was first released in Dezember 1996 with CSS1. The <a title="Cascading Style Sheets, Level 1" href="http://www.w3.org/TR/2008/REC-CSS1-20080411/">CSS1 specification</a> is still up, so check it out if you want to.

When you write CSS you always use selectors to target the element you want to style. This works pretty much straight-forward: The right-most simple selector&nbsp;is the one which get the&nbsp;declarations assigned that are defined in the ruleset.<br>
These selectors define a certain&nbsp;hierarchy&nbsp;in your stylesheet.<br>
<strong>Note:</strong> Please make sure to read Tab Atkins’ <a title="CSS Spec Terms, for Future Reference" href="http://www.xanthir.com/blog/b4E50">Reference for CSS Spec Terms</a>.

### An example

Today you would target some links in a navigation like this:

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;"><span style="color: #cc00cc;">#nav</span> ul li a <span style="color: #00AA00;">{</span>&nbsp;<span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">:</span> <span style="color: #cc00cc;">#000</span><span style="color: #00AA00;">;</span>&nbsp;<span style="color: #00AA00;">}</span></pre></div></div>


If you’re smart and your markup&nbsp;allows&nbsp;you to do so, you may write:

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;"><span style="color: #cc00cc;">#nav</span> a <span style="color: #00AA00;">{</span> <span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">:</span> <span style="color: #cc00cc;">#000</span><span style="color: #00AA00;">;</span> <span style="color: #00AA00;">}</span></pre></div></div>


The li-elements need to be inlined as you want a horizontal navigation:

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;"><span style="color: #cc00cc;">#nav</span> ul li <span style="color: #00AA00;">{</span> <span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">inline</span><span style="color: #00AA00;">;</span> <span style="color: #00AA00;">}</span></pre></div></div>


Furthermore the navigation should be aligned on the right and all the links centered:

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;"><span style="color: #cc00cc;">#nav</span> ul <span style="color: #00AA00;">{</span> <span style="color: #000000; font-weight: bold;">text-align</span><span style="color: #00AA00;">:</span> <span style="color: #000000; font-weight: bold;">right</span><span style="color: #00AA00;">;</span> <span style="color: #00AA00;">}</span>
<span style="color: #cc00cc;">#nav</span> ul li <span style="color: #00AA00;">{</span> <span style="color: #000000; font-weight: bold;">text-align</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">center</span><span style="color: #00AA00;">;</span> <span style="color: #00AA00;">}</span></pre></div></div>


This leaves us with a lot of repetition for the selectors.

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;"><span style="color: #cc00cc;">#nav</span> ul <span style="color: #00AA00;">{</span> <span style="color: #000000; font-weight: bold;">text-align</span><span style="color: #00AA00;">:</span> <span style="color: #000000; font-weight: bold;">right</span><span style="color: #00AA00;">;</span> <span style="color: #00AA00;">}</span>
<span style="color: #cc00cc;">#nav</span> ul li <span style="color: #00AA00;">{</span> <span style="color: #000000; font-weight: bold;">text-align</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">center</span><span style="color: #00AA00;">;</span>&nbsp;<span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">inline</span><span style="color: #00AA00;">;</span> <span style="color: #00AA00;">}</span>
<span style="color: #cc00cc;">#nav</span> ul li a <span style="color: #00AA00;">{</span>&nbsp;<span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">:</span> <span style="color: #cc00cc;">#000</span><span style="color: #00AA00;">;</span>&nbsp;<span style="color: #00AA00;">}</span></pre></div></div>


With the Level 3 proposal by <a title="Tab Atkins on Twitter" href="https://twitter.com/#!/tabatkins">Tab Atkins Jr</a> and&nbsp;<a title="Shane's Google+ profile-page" href="https://plus.google.com/101031566089926386443/posts">Shane Stephens</a> (working for Google) this is about to get a little bit easier. The existing system will be extended with some new functionality. This is why it’s called Level 3. (Also it will likely be part of CSS <strong>3</strong> – and not 4 or 10 or something.)

## What’s new in there?

Lately you saw the rise of CSS Preprocessors. Everyone <a title="Lea Verou - On CSS preprocessors" href="http://lea.verou.me/2011/03/on-css-preprocessors/">has</a> <a title="Chris Coyier - Musings on Preprocessing" href="http://css-tricks.com/musings-on-preprocessing/">an opinion</a> <a title="Andy Clark - LESS" href="http://www.stuffandnonsense.co.uk/blog/about/less">on this</a>. The thing why so many developers use them is that they help to organize the CSS-code you are writing.<br>
Preprocessors have brought up another idea of CSS hierarchies. And with the <strong>CSS Hierarchies Module Level 3</strong> this has been adopted.

The specification draft allows you to nest your rules and use the `&`-character to reference a parent selector in a certain rule.

Here’s the example from above with the new hierarchy:

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;"><span style="color: #cc00cc;">#nav</span> ul <span style="color: #00AA00;">{</span>
    <span style="color: #000000; font-weight: bold;">text-align</span><span style="color: #00AA00;">:</span> <span style="color: #000000; font-weight: bold;">right</span><span style="color: #00AA00;">;</span>
    &amp; li <span style="color: #00AA00;">{</span>
        <span style="color: #000000; font-weight: bold;">text-align</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">center</span><span style="color: #00AA00;">;</span>
        <span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">inline</span><span style="color: #00AA00;">;</span>
        &amp; a <span style="color: #00AA00;">{</span> <span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">:</span> <span style="color: #cc00cc;">#000</span><span style="color: #00AA00;">;</span>&nbsp;<span style="color: #00AA00;">}</span>
    <span style="color: #00AA00;">}</span>
<span style="color: #00AA00;">}</span></pre></div></div>


As you can see there are no repetitions for the selectors as you can reference them by just writing `&` and nest them properly.

## How can we use this today and when will it be ready for the “real world”?

As you may guess this is not implemented in any browser yet.

As this spec is written by two Google-guys it’s likely that this will be implemented in Chrome in the near future. At the moment this is not working with Chrome 19 (Canary) or WebKit Nightly.<br>
I’ve made <a title="Testing the CSS Hierarchies Module Level 3" href="http://dabblet.com/gist/1854033">this Dabblet</a>&nbsp;to check if the module is supported in a browser or not. caniuse.com does not provide any data for the Hierarchies Module yet.<br>
<strong>Aside</strong>: Check my <a title="The Dabbles App for Google Chrome" href="https://www.hansreinl.de/archive/dabblet-chrome-app/">Dabblet Chrome App</a> to view all your latest dabblets if you’re a Chrome user.

Tab Atkins proposed another style for nesting. To reference the parent selector you use&nbsp;`@this`&nbsp;instead of the&nbsp;`&`-character. Peter Beverloo<a title="CSS Variables and mixins, Interactive Validation and pre-rendering" href="http://peter.sh/2011/01/css-variables-and-mixins-interactive-validation-and-prerendering/">&nbsp;wrote about this</a>&nbsp;a year ago. Also Tab Atkins&nbsp;<a title="CSSOM, Vars, Mixins, Nesting, and Modules" href="http://www.xanthir.com/blog/b49w0">has an article</a>&nbsp;about his further plans. This variant was not implement either and is replaced with the new draft for the specification. Anyway <a title="Using CSS nesting with @this" href="http://dabblet.com/gist/1853580">you could view</a> the dabblet I’ve made for this&nbsp;propose.

### Preprocessors

As mentioned above CSS preprocessors offer the chance to use something like hierarchies in there own way. Here are two examples:

<strong>SCSS (aka. SASS)</strong>

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;"><span style="color: #cc00cc;">#nav</span> ul <span style="color: #00AA00;">{</span>
    <span style="color: #000000; font-weight: bold;">text-align</span><span style="color: #00AA00;">:</span> <span style="color: #000000; font-weight: bold;">right</span><span style="color: #00AA00;">;</span>
    li <span style="color: #00AA00;">{</span>
        <span style="color: #000000; font-weight: bold;">display</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">inline</span><span style="color: #00AA00;">;</span>
        a <span style="color: #00AA00;">{</span>
            <span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">:</span> <span style="color: #cc00cc;">#000</span><span style="color: #00AA00;">;</span>
            &amp;<span style="color: #3333ff;">:hover </span><span style="color: #00AA00;">{</span> <span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">gray</span><span style="color: #00AA00;">;</span> <span style="color: #00AA00;">}</span>
       &nbsp;<span style="color: #00AA00;">}</span>
    <span style="color: #00AA00;">}</span>
<span style="color: #00AA00;">}</span></pre></div></div>


<strong>Stylus</strong>

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;"><span style="color: #cc00cc;">#nav</span> ul
    <span style="color: #000000; font-weight: bold;">text-align</span> <span style="color: #000000; font-weight: bold;">right</span>
    li
        <span style="color: #000000; font-weight: bold;">display</span> <span style="color: #993333;">inline</span>
        a
            <span style="color: #000000; font-weight: bold;">color</span> <span style="color: #cc00cc;">#000</span>
            &amp;<span style="color: #3333ff;">:hover
                </span><span style="color: #000000; font-weight: bold;">color</span> grey</pre></div></div>


As you can see there is a difference in how preprocessors treat the `&`-character as a reference: In the CSS specification draft `&` is obligatory in every nested rule you write to reference the parent selector. Preprocessors need them only if there is a pseudo-class or -element or a combinator (such as `~` or `&`) used for a specific selector.

As I stated in the introduction it may happen that the specification will be changed until it becomes final or is adopted by the CSS Working Group. I recommend you follow the discussions about this topic in order to stay up to date.<br>
When this specification will be implemented by one of the browser vendors it’s just a matter of weeks until it will be adopted by the others I guess.

But, as the draft states, this is not yet part of CSS:

> This document is purely an Editor’s Draft. It has not yet been adopted by the Working Group, and should not be considered to be part of CSS.

~ <a title="Status" href="http://dev.w3.org/csswg/css3-hierarchies/#status">CSS Hierarchies Module – Status</a>


## Opinion

Personally I hope that referencing the parent selector with `&` will not be in the final specification as it is now. It’s not needed as the rules are nested anyway and preprocessors nowadays treat them better.

Anyway the new nesting is pretty useful as it reduces the redundancy of writing selectors in CSS. In connection with other upcoming specifications like the <a title="CSS Variables Module Level 1" href="http://dev.w3.org/csswg/css-variables/">CSS Variables Module Level 1</a>&nbsp;this is what is needed and will be helpful for every web-developer once it will be implemented in browsers.
