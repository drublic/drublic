**tl;dr:** It’s necessary to keep the focus within a dialog while tabbing through it. The function below is the easiest way to implement this behavior in JavaScript.

---

When I created <a href="https://www.hansreinl.de/archive/introducing-css-modal/">CSS Modal</a> I wanted it to be accessible for screen readers and people that only use the keyboard for navigation. Nicholas Zakas <a href="http://www.nczonline.net/blog/2013/02/12/making-an-accessible-dialog-box/">has a great post</a> that helped me a lot with making CSS Modal accessible without too much work.

This posts explains a bit about aria roles, how to use `tabindex` and how you set focus to the element initially and bringing it back where it was before when the modal gets closed.

But there is one thing it misses and which <a href="https://github.com/drublic/css-modal/issues/26">was raised as an issue against CSS Modal</a>: It should be possible to tab through the modal and keep the focus within the modal while it is active. A circular tabbing through a particular area of a page so to speak.

After some research I came up with a straightforward function that does exactly this. Let’s look at how this function is build and how you can use it.

I’ve created a <a href="https://gist.github.com/drublic/5899658">Gist</a> that you can use if you don’t want the walk-through.

## Circular Focus

First of all we need to know what the first and the last element of out particular area is that might receive focus while tabbing through. We could give them an ID and find them with `document.getElementById`.<br>
Let’s assume we don’t know what the content of that area is and we do not have any influence on the given IDs and stuff. This means we need to filter the first and the last tabbable element. There are some elements that are tabbable especially those which are links, user-input fields or have a `tabindex` attribute on them (from <a href="http://stackoverflow.com/questions/7668525/is-there-a-jquery-selector-to-get-all-elements-that-can-get-focus#answer-7668761">this answer on StackOverflow</a>).

Here is a full list of CSS selectors:

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;">a<span style="color: #00AA00;">[</span>href<span style="color: #00AA00;">]</span><span style="color: #00AA00;">,</span> area<span style="color: #00AA00;">[</span>href<span style="color: #00AA00;">]</span><span style="color: #00AA00;">,</span> input<span style="color: #00AA00;">:</span>not<span style="color: #00AA00;">(</span><span style="color: #00AA00;">[</span>disabled<span style="color: #00AA00;">]</span><span style="color: #00AA00;">)</span><span style="color: #00AA00;">,</span> select<span style="color: #00AA00;">:</span>not<span style="color: #00AA00;">(</span><span style="color: #00AA00;">[</span>disabled<span style="color: #00AA00;">]</span><span style="color: #00AA00;">)</span><span style="color: #00AA00;">,</span> textarea<span style="color: #00AA00;">:</span>not<span style="color: #00AA00;">(</span><span style="color: #00AA00;">[</span>disabled<span style="color: #00AA00;">]</span><span style="color: #00AA00;">)</span><span style="color: #00AA00;">,</span> button<span style="color: #00AA00;">:</span>not<span style="color: #00AA00;">(</span><span style="color: #00AA00;">[</span>disabled<span style="color: #00AA00;">]</span><span style="color: #00AA00;">)</span><span style="color: #00AA00;">,</span> iframe<span style="color: #00AA00;">,</span> object<span style="color: #00AA00;">,</span> <span style="color: #993333;">embed</span><span style="color: #00AA00;">,</span> <span style="color: #00AA00;">*</span><span style="color: #00AA00;">[</span>tabindex<span style="color: #00AA00;">]</span><span style="color: #00AA00;">,</span> <span style="color: #00AA00;">*</span><span style="color: #00AA00;">[</span>contenteditable<span style="color: #00AA00;">]</span></pre></div></div>


This is the list of selectors we need to use to find the first and last tabbable element. So let’s put them into a variable we can use in our function.

<div class="wp_syntax"><div class="code"><pre class="javascript" style="font-family:monospace;"><span style="color: #003366; font-weight: bold;">var</span> tabbableElements <span style="color: #339933;">=</span> <span style="color: #3366CC;">'a[href], area[href], input:not([disabled]),'</span> <span style="color: #339933;">+</span>
	<span style="color: #3366CC;">'select:not([disabled]), textarea:not([disabled]),'</span> <span style="color: #339933;">+</span>
	<span style="color: #3366CC;">'button:not([disabled]), iframe, object, embed, *[tabindex],'</span> <span style="color: #339933;">+</span>
	<span style="color: #3366CC;">'*[contenteditable]'</span><span style="color: #339933;">;</span></pre></div></div>


And here is how we find the elements in a given context `context`:

<div class="wp_syntax"><div class="code"><pre class="javascript" style="font-family:monospace;"><span style="color: #006600; font-style: italic;">// First, let's find all tabbable elemets</span>
<span style="color: #003366; font-weight: bold;">var</span> allTabbableElements <span style="color: #339933;">=</span> context.<span style="color: #660066;">querySelectorAll</span><span style="color: #009900;">(</span>tabbableElements<span style="color: #009900;">)</span><span style="color: #339933;">;</span>
&nbsp;
<span style="color: #006600; font-style: italic;">// The first of this list</span>
<span style="color: #003366; font-weight: bold;">var</span> firstTabbableElement <span style="color: #339933;">=</span> allTabbableElements<span style="color: #009900;">[</span><span style="color: #CC0000;">0</span><span style="color: #009900;">]</span><span style="color: #339933;">;</span>
&nbsp;
<span style="color: #006600; font-style: italic;">// And the last one</span>
<span style="color: #003366; font-weight: bold;">var</span> lastTabbableElement <span style="color: #339933;">=</span> allTabbableElements<span style="color: #009900;">[</span>allTabbableElements.<span style="color: #660066;">length</span> <span style="color: #339933;">-</span> <span style="color: #CC0000;">1</span><span style="color: #009900;">]</span><span style="color: #339933;">;</span></pre></div></div>

### A `keydown` Listener

What we need next is a listener on the last element that will fire when we hit the TAB key on it.<br>

**Note:** Please remember that IE8 does not support `addEventListener`, so please use `attachEvent` where needed.

<div class="wp_syntax"><div class="code"><pre class="javascript" style="font-family:monospace;">lastTabbableElement.<span style="color: #660066;">addEventListener</span><span style="color: #009900;">(</span><span style="color: #3366CC;">'keydown'</span><span style="color: #339933;">,</span> <span style="color: #003366; font-weight: bold;">function</span> <span style="color: #009900;">(</span><span style="color: #009900;">)</span> <span style="color: #009900;">{</span> <span style="color: #009966; font-style: italic;">/* More magic */</span> <span style="color: #009900;">}</span><span style="color: #339933;">,</span> <span style="color: #003366; font-weight: bold;">false</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span></pre></div></div>


The handler for the event listener might look something like that:

<div class="wp_syntax"><div class="code"><pre class="javascript" style="font-family:monospace;"><span style="color: #003366; font-weight: bold;">var</span> keyCode <span style="color: #339933;">=</span> event.<span style="color: #660066;">which</span> <span style="color: #339933;">||</span> event.<span style="color: #660066;">keyCode</span><span style="color: #339933;">;</span> <span style="color: #006600; font-style: italic;">// Get the current keycode</span>
&nbsp;
<span style="color: #006600; font-style: italic;">// If it is TAB</span>
<span style="color: #000066; font-weight: bold;">if</span> <span style="color: #009900;">(</span>keyCode <span style="color: #339933;">===</span> <span style="color: #CC0000;">9</span><span style="color: #009900;">)</span> <span style="color: #009900;">{</span>
&nbsp;
	<span style="color: #006600; font-style: italic;">// Prevent the default behavior</span>
	<span style="color: #000066; font-weight: bold;">if</span> <span style="color: #009900;">(</span>event.<span style="color: #660066;">preventDefault</span><span style="color: #009900;">)</span> <span style="color: #009900;">{</span>
		event.<span style="color: #660066;">preventDefault</span><span style="color: #009900;">(</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span>
	<span style="color: #009900;">}</span> <span style="color: #000066; font-weight: bold;">else</span> <span style="color: #009900;">{</span>
		event.<span style="color: #660066;">returnValue</span> <span style="color: #339933;">=</span> <span style="color: #003366; font-weight: bold;">false</span><span style="color: #339933;">;</span>
	<span style="color: #009900;">}</span>
&nbsp;
	<span style="color: #006600; font-style: italic;">// Move the focus to the first element that can be tabbed</span>
	firstTabbableElement.<span style="color: #000066;">focus</span><span style="color: #009900;">(</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span>
<span style="color: #009900;">}</span></pre></div></div>


So if we reach the end of the element we want to circle in, we just go back to the first tabbable element and focus this. We need to prevent the default behavior – which would be to jump the the next link, out of the element – though.

## A Reusable Function

Let’s throw this all together and we get a neat little function that we can call on all elements where we want the focus to stay in.

<div class="wp_syntax"><div class="code"><pre class="javascript" style="font-family:monospace;"><span style="color: #003366; font-weight: bold;">var</span> tabbableElements <span style="color: #339933;">=</span> <span style="color: #3366CC;">'a[href], area[href], input:not([disabled]),'</span> <span style="color: #339933;">+</span>
	<span style="color: #3366CC;">'select:not([disabled]), textarea:not([disabled]),'</span> <span style="color: #339933;">+</span>
	<span style="color: #3366CC;">'button:not([disabled]), iframe, object, embed, *[tabindex],'</span> <span style="color: #339933;">+</span>
	<span style="color: #3366CC;">'*[contenteditable]'</span><span style="color: #339933;">;</span>
&nbsp;
<span style="color: #003366; font-weight: bold;">var</span> keepFocus <span style="color: #339933;">=</span> <span style="color: #003366; font-weight: bold;">function</span> <span style="color: #009900;">(</span>context<span style="color: #009900;">)</span> <span style="color: #009900;">{</span>
	<span style="color: #003366; font-weight: bold;">var</span> allTabbableElements <span style="color: #339933;">=</span> context.<span style="color: #660066;">querySelectorAll</span><span style="color: #009900;">(</span>tabbableElements<span style="color: #009900;">)</span><span style="color: #339933;">;</span>
	<span style="color: #003366; font-weight: bold;">var</span> firstTabbableElement <span style="color: #339933;">=</span> allTabbableElements<span style="color: #009900;">[</span><span style="color: #CC0000;">0</span><span style="color: #009900;">]</span><span style="color: #339933;">;</span>
	<span style="color: #003366; font-weight: bold;">var</span> lastTabbableElement <span style="color: #339933;">=</span> allTabbableElements<span style="color: #009900;">[</span>allTabbableElements.<span style="color: #660066;">length</span> <span style="color: #339933;">-</span> <span style="color: #CC0000;">1</span><span style="color: #009900;">]</span><span style="color: #339933;">;</span>
&nbsp;
	<span style="color: #003366; font-weight: bold;">var</span> keyListener <span style="color: #339933;">=</span> <span style="color: #003366; font-weight: bold;">function</span> <span style="color: #009900;">(</span>event<span style="color: #009900;">)</span> <span style="color: #009900;">{</span>
		<span style="color: #003366; font-weight: bold;">var</span> keyCode <span style="color: #339933;">=</span> event.<span style="color: #660066;">which</span> <span style="color: #339933;">||</span> event.<span style="color: #660066;">keyCode</span><span style="color: #339933;">;</span> <span style="color: #006600; font-style: italic;">// Get the current keycode</span>
&nbsp;
		<span style="color: #006600; font-style: italic;">// If it is TAB</span>
		<span style="color: #000066; font-weight: bold;">if</span> <span style="color: #009900;">(</span>keyCode <span style="color: #339933;">===</span> <span style="color: #CC0000;">9</span><span style="color: #009900;">)</span> <span style="color: #009900;">{</span>
&nbsp;
			<span style="color: #006600; font-style: italic;">// Prevent the default behavior</span>
			<span style="color: #000066; font-weight: bold;">if</span> <span style="color: #009900;">(</span>event.<span style="color: #660066;">preventDefault</span><span style="color: #009900;">)</span> <span style="color: #009900;">{</span>
				event.<span style="color: #660066;">preventDefault</span><span style="color: #009900;">(</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span>
			<span style="color: #009900;">}</span> <span style="color: #000066; font-weight: bold;">else</span> <span style="color: #009900;">{</span>
				event.<span style="color: #660066;">returnValue</span> <span style="color: #339933;">=</span> <span style="color: #003366; font-weight: bold;">false</span><span style="color: #339933;">;</span>
			<span style="color: #009900;">}</span>
&nbsp;
			<span style="color: #006600; font-style: italic;">// Move the focus to the first element that can be tabbed</span>
			firstTabbableElement.<span style="color: #000066;">focus</span><span style="color: #009900;">(</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span>
		<span style="color: #009900;">}</span>
	<span style="color: #009900;">}</span><span style="color: #339933;">;</span>
&nbsp;
	lastTabbableElement.<span style="color: #660066;">addEventListener</span><span style="color: #009900;">(</span><span style="color: #3366CC;">'keydown'</span><span style="color: #339933;">,</span> keyListener<span style="color: #339933;">,</span> <span style="color: #003366; font-weight: bold;">false</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span>
<span style="color: #009900;">}</span><span style="color: #339933;">;</span></pre></div></div>


Here is an example call:

<div class="wp_syntax"><div class="code"><pre class="javascript" style="font-family:monospace;"><span style="color: #003366; font-weight: bold;">var</span> modal <span style="color: #339933;">=</span> document.<span style="color: #660066;">querySelector</span><span style="color: #009900;">(</span><span style="color: #3366CC;">'.modal'</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span>
keepFocus<span style="color: #009900;">(</span>modal<span style="color: #009900;">)</span><span style="color: #339933;">;</span></pre></div></div>


This only works for single elements and needs to be called when setting the focus of the element initially.

You can find the complete function as a <a href="https://gist.github.com/drublic/5899658">Gist</a> and use it from there if this serves you better.

Since we are the cool kids, we don’t even need jQuery to help us with any of that. The DOM’s ya friend, y’all!

## Conclusion

As we can see it is not very hard to make a dialog accessible by using JavaScript. Nicholas Zakas’ blog post shows some pretty easy methods to create an accessible modal and this circular tabbing method helps to keep focus within the dialog.

If you ask yourself why you would want to do this, I recommend you watch one of Marco Zehe’s talks and read his <a href="http://www.marcozehe.de/">blog posts</a> on accessibility.

As always there are a lot of smart people who documented this before I did and had better ideas. If you know of any please tell me <a href="https://twitter.com/drublic">via Twitter</a> what’s wrong with my snippet and let me make it better. Also I’m not really into accessibility which is why this all might be nonsense.

<h2 id="update-1">Update – 01. July 2013</h2>

<a href="http://bassistance.de/">Jörn Zaefferer</a> <a href="https://twitter.com/bassistance/status/351650672820764673">pointed out</a> that it’s not only Tab that needs to be observed but also Shift + Tab. Totally true since users might want to go backwards through the selected area of the page.

I’ve now updated the function to reflect this behavior. But let’s do a quick walk through the changes.

First I wrote a small polyfill for `event.preventDefault();` so we can easily reuse the function throughout the event handler:

<div class="wp_syntax"><div class="code"><pre class="javascript" style="font-family:monospace;"><span style="color: #006600; font-style: italic;">// Polyfill to prevent the default behavior of events</span>
event.<span style="color: #660066;">preventDefault</span> <span style="color: #339933;">=</span> event.<span style="color: #660066;">preventDefault</span> <span style="color: #339933;">||</span> <span style="color: #003366; font-weight: bold;">function</span> <span style="color: #009900;">(</span><span style="color: #009900;">)</span> <span style="color: #009900;">{</span>
	event.<span style="color: #660066;">returnValue</span> <span style="color: #339933;">=</span> <span style="color: #003366; font-weight: bold;">false</span><span style="color: #339933;">;</span>
<span style="color: #009900;">}</span><span style="color: #339933;">;</span></pre></div></div>


Another thing that has changed is the fact that we will now use <a href="http://davidwalsh.name/event-delegate">event delegation</a> instead of a single event on the lastTabbableElement since we need to listen to the first element too. This <a href="https://twitter.com/rodneyrehm/status/351655745487519744">was suggested by Rodney Rehm</a> too.

One part of this is the listener that changes:

<div class="wp_syntax"><div class="code"><pre class="javascript" style="font-family:monospace;">context.<span style="color: #660066;">addEventListener</span><span style="color: #009900;">(</span><span style="color: #3366CC;">'keydown'</span><span style="color: #339933;">,</span> keyListener<span style="color: #339933;">,</span> <span style="color: #003366; font-weight: bold;">false</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span></pre></div></div>


The other part is the handler function. We need to match `event.target` – the currently selected element – against the first and last tabbable element while we have to watch out for the shift key to be pressed. Luckily `event.shiftKey` tells us that. This code is inspired by <a href="https://github.com/jquery/jquery-ui/blob/master/ui/jquery.ui.dialog.js#L302-L308">the code from jQuery UI’s Dialog component</a>.

<div class="wp_syntax"><div class="code"><pre class="javascript" style="font-family:monospace;"><span style="color: #006600; font-style: italic;">// Move focus to first element that can be tabbed if Shift isn't used</span>
<span style="color: #000066; font-weight: bold;">if</span> <span style="color: #009900;">(</span>event.<span style="color: #660066;">target</span> <span style="color: #339933;">===</span> lastTabbableElement <span style="color: #339933;">&amp;&amp;</span> <span style="color: #339933;">!</span>event.<span style="color: #660066;">shiftKey</span><span style="color: #009900;">)</span> <span style="color: #009900;">{</span>
	event.<span style="color: #660066;">preventDefault</span><span style="color: #009900;">(</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span>
	firstTabbableElement.<span style="color: #000066;">focus</span><span style="color: #009900;">(</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span>
&nbsp;
<span style="color: #006600; font-style: italic;">// Move focus to last element that can be tabbed if Shift is used</span>
<span style="color: #009900;">}</span> <span style="color: #000066; font-weight: bold;">else</span> <span style="color: #000066; font-weight: bold;">if</span> <span style="color: #009900;">(</span>event.<span style="color: #660066;">target</span> <span style="color: #339933;">===</span> firstTabbableElement <span style="color: #339933;">&amp;&amp;</span> event.<span style="color: #660066;">shiftKey</span><span style="color: #009900;">)</span> <span style="color: #009900;">{</span>
	event.<span style="color: #660066;">preventDefault</span><span style="color: #009900;">(</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span>
	lastTabbableElement.<span style="color: #000066;">focus</span><span style="color: #009900;">(</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span>
<span style="color: #009900;">}</span></pre></div></div>


If we put this together, we get the desired behavior: Whether you use Tab or Shift + Tab in the selected part of the page the focus stays in it.<br>
The Gist is <a href="https://gist.github.com/drublic/5899658">available with the updated function</a>.
