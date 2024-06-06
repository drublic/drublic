<strong>Please read about the updated syntax of CSS variables in <a href="#update">the first</a> and <a href="#update2">second update</a> of this post.</strong>

Since a little bit more than a month (as of the time of writing) there is a <a title="CSS Variables Module Level 1" href="http://dev.w3.org/csswg/css-variables/">Editor’s Draft for a CSS Variables Module</a> by Google (<a href="http://www.xanthir.com/blog/">Tab Atkins</a> and Luke Macpherson) and <a href="http://glazman.org/weblog/">Daniel Glazman</a>. Just a few days ago the Working Draft was updated.<br>
The <a href="http://disruptive-innovations.com/zoo/cssvariables/">first draft was written in 2008</a> by Daniel Glazman but was not added to the official specification. The new <abbr title="Working Draft">WD</abbr> extends this proposal by Glazman.

<strong>Disclaimer:</strong> This article is part of a <a href="https://www.hansreinl.de/archive/category/css-wds/" title="A series of posts which describes new CSS specifications, working drafts and editor’s drafts.">small series</a> about the latest CSS working drafts. The first article in this series was about the <a title="About The CSS Hierarchies Module Level 3" href="https://www.hansreinl.de/archive/the-css-hierarchies-module-level-3/">CSS Hierarchies Module</a>.

## CSS Variables

The CSS Variables Module Level 1 suggests to use variables for data that is reused in stylesheets. These key-value storages provide the possibility to store “meaningless” data as you can do in HTML: Variable keys consist of a `data-`-prefix and the variable name.

> Any property name starting with the prefix “data-” is a data property. Data properties are defined to be valid but meaningless as they are meant solely for allowing authors to pass custom data around their page, similar to the custom data attributes in HTML.<br>
<cite>~&nbsp;<a href="http://dev.w3.org/csswg/css-variables/#defining-variables">Defining Variables With Data Properties</a> – CSS Variables Editor’s Draft</cite>


Using `data-` as a prefix for variables is <a href="https://twitter.com/#!/tabatkins/status/170547807445467136">still in discussion</a> and may likely be changed to something more “connected” to variables (`$` or `&`).

<strong>Edit:</strong> The mailing-list www-style <a href="http://lists.w3.org/Archives/Public/www-style/2012Feb/1028.html">is discussing</a> the use of `data` and Ian Muir wrote <a href="http://www.piehead.com/blog/2012/03/a-vote-for-css-variables">an article</a> about the problem.

### Syntax

Variables are defined by mapping them to the `:root` pseudo-class. The WD does not really explain why the variables must be declared on the root-element. Maybe it’s because the data needs to be bound to an element to not “fly around” in the global scope (which does not really exist in CSS).<br>
Defined variables can also be set on every other element and overwrite the existing value of a variable.<br>
So this is how you set variables.

To get a specific variable, you do not declare the variable-name but you call `data` as a function on a certain property with the variables name (without `data-`-prefix) as an argument.

### An Example

So here is an example:

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;"><span style="color: #808080; font-style: italic;">/* Set data */</span>
<span style="color: #3333ff;">:root </span><span style="color: #00AA00;">{</span>
  data-main-<span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">:</span> <span style="color: #cc00cc;">#bada55</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span>
&nbsp;
<span style="color: #808080; font-style: italic;">/* Get data */</span>
<span style="color: #6666ff;">.foobar</span> <span style="color: #00AA00;">{</span>
  <span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">:</span> data<span style="color: #00AA00;">(</span>main-<span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">)</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span></pre></div></div>


As said before, variables can be overwritten for specific elements. So we can add the declaration of the variable to `.foobar`:

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;"><span style="color: #6666ff;">.foobar</span> <span style="color: #00AA00;">{</span>
  data-main-<span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">:</span> <span style="color: #cc00cc;">#fe57a1</span><span style="color: #00AA00;">;</span>
  <span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">:</span> data<span style="color: #00AA00;">(</span>main-<span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">)</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span></pre></div></div>


The color of `.foobar` is now `#fes7a1` and not `#bada55`.

## Real World Examples

Well, as this is an Editor’s Draft and pretty new it’s not being implemented in any browser.

I’ve created <a href="http://dabblet.com/gist/2072596" title="A CSS variables test">a test case on dabblet</a> with vendor prefixes which tests the two examples above. I’ve run this test on the major browser alphas and nightlies.

Even though variables are not natively supported by CSS in any browser yet, we can use a very similar approach: All CSS preprocessors support variables. Here is an example with SASS:

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;"><span style="color: #808080; font-style: italic;">/* Setting a variable */</span>
$main-<span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">:</span> <span style="color: #cc00cc;">#bada55</span><span style="color: #00AA00;">;</span>
&nbsp;
<span style="color: #808080; font-style: italic;">/* Get the variable's value */</span>
<span style="color: #6666ff;">.foobar</span> <span style="color: #00AA00;">{</span>
  <span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">:</span> $main-<span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span></pre></div></div>


## Conclusion

We can use variables with preprocessors today which is pretty rad. As with <a href="https://www.hansreinl.de/archive/the-css-hierarchies-module-level-3/">the CSS Hierarchies Module</a> CSS in the future may support ideas that come from implementations in preprocessors somehow.<br>
I think most developers are happy about these adoptions and will likely use it. But as it will take some time for all vendors to implement this feature – and <a href="http://paulirish.com/2011/browser-market-pollution-iex-is-the-new-ie6/" title="Paul Irish about problems with oldIE">even more time until browsers that don’t support such new features vanish</a> – we will have to use preprocessors to get variables in our CSS working.
<hr>
<h2 id="update2">Update <small>19.08.2012</small></h2>

Since I wrote the last update the Editors Draft changed: The `var()`-function <a href="http://dev.w3.org/csswg/css-variables/#var-glyph">changed to use the var-glyph `$`</a> as it is known from SASS (described above).

It is now possible to call variables like this:

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;">h1 <span style="color: #00AA00;">{</span>
  <span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">:</span> $some-<span style="color: #000000; font-weight: bold;">color</span>
<span style="color: #00AA00;">}</span></pre></div></div>


While it still needs to be defined with the `var` prefix:

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;"><span style="color: #3333ff;">:root </span><span style="color: #00AA00;">{</span>
  var-some-<span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">:</span> <span style="color: #cc00cc;">#aaa</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span></pre></div></div>


As Tab Atkins <a href="http://www.xanthir.com/blog/b4KT0">describes in his blog</a> this is going to change back to the old syntax I wrote about in the first place as this causes problems with further implementations of CSS (like variables for selectors and the <a href="https://www.hansreinl.de/archive/the-css-hierarchies-module-level-3/">hierarchy model</a>).
<hr>
<h2 id="update">Update <small>16.04.2012</small></h2>

Since last week the CSS Variables Module Level 1 is an <a href="http://www.w3.org/TR/css-variables/">actual Working Draft of the W3C</a>.

It’s now possible to define variables with the `var`-prefix instead of `data` which is still pretty complicated. I wonder why they not adept an existing concept as in LESS or SASS.

Thus the `data()`-function changed accordingly to `var()`.

Furthermore it’s possible to set variables on a certain element but use them in a more complex definition. An example might be the usage as follows (while elements with class `important` and `primary` are `div`s):

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;"><span style="color: #6666ff;">.important</span> <span style="color: #00AA00;">{</span> var-<span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">:</span> <span style="color: #993333;">red</span><span style="color: #00AA00;">;</span> <span style="color: #00AA00;">}</span>
<span style="color: #6666ff;">.primary</span> <span style="color: #00AA00;">{</span> var-<span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">:</span> <span style="color: #000000; font-weight: bold;">blue</span><span style="color: #00AA00;">;</span> <span style="color: #00AA00;">}</span>
div <span style="color: #00AA00;">{</span> <span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">:</span> var<span style="color: #00AA00;">(</span><span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">)</span><span style="color: #00AA00;">;</span> <span style="color: #00AA00;">}</span></pre></div></div>


Also nestings for variables are possible:

<div class="wp_syntax"><div class="code"><pre class="css" style="font-family:monospace;"><span style="color: #3333ff;">:root </span><span style="color: #00AA00;">{</span>
  var-<span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">:</span> <span style="color: #cc00cc;">#ddd</span><span style="color: #00AA00;">;</span>
  var-<span style="color: #000000; font-weight: bold;">border</span><span style="color: #00AA00;">:</span> <span style="color: #933;">1px</span> <span style="color: #993333;">solid</span> var<span style="color: #00AA00;">(</span><span style="color: #000000; font-weight: bold;">color</span><span style="color: #00AA00;">)</span><span style="color: #00AA00;">;</span>
<span style="color: #00AA00;">}</span></pre></div></div>


### The bright and shiny future

As I think there still are some issues with this Working Draft I like the fast step forward in making this a WD in only a view weeks.<br>
So sooner or later variables will be part of the CSS specification and will be implemented in browsers. I hope this will be very soon.
	</div>
