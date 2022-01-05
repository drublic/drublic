
You may be familiar with the syntax of writing <code>code</code>-Tags like `some code here`. This is what is used by Github for example.

At Daring Fireball they <a title="Markdown: Syntax" href="http://daringfireball.net/projects/markdown/syntax" target="_blank">wrote up</a> the syntax. Not only for code-Tags but for various features that are connected to style and semantics.

In the comments of this blog it is possible to use some of the rules to add some markup to them.

For instance when you write:

<div class="wp_syntax"><div class="code"><pre class="xml" style="font-family:monospace;">Some fancy text with **styled _markup_** and `code`.</pre></div></div>


It will be transfered to

<div class="wp_syntax"><div class="code"><pre class="xml" style="font-family:monospace;">Some fancy text with <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;strong<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>styled <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;em<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>markup<span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/em<span style="color: #000000; font-weight: bold;">&gt;</span></span><span style="color: #000000; font-weight: bold;">&lt;/strong<span style="color: #000000; font-weight: bold;">&gt;</span></span></span> and <span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;code<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>code<span style="color: #009900;"><span style="color: #000000; font-weight: bold;">&lt;/code<span style="color: #000000; font-weight: bold;">&gt;</span></span></span>.</pre></div></div>


I really like to use these tags in comments to style them a little bit.

## Use in your own intallation

So if you want to use them in your own WordPress-installation check the following function – paste it in your <code>functions.php</code>:

<div class="wp_syntax"><div class="code"><pre class="php" style="font-family:monospace;"><span style="color: #000000; font-weight: bold;">function</span> my_preprocess_comment<span style="color: #009900;">(</span> <span style="color: #000088;">$comment</span> <span style="color: #009900;">)</span> <span style="color: #009900;">{</span>
  <span style="color: #666666; font-style: italic;">// Replace all appereances of __ and ** with &lt;b&gt; and &lt;strong&gt;</span>
  <span style="color: #000088;">$comment</span><span style="color: #009900;">[</span><span style="color: #0000ff;">'comment_content'</span><span style="color: #009900;">]</span> <span style="color: #339933;">=</span> <span style="color: #990000;">preg_replace</span><span style="color: #009900;">(</span> <span style="color: #0000ff;">'/__(.*?)__/is'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'&lt;b&gt;$1&lt;/b&gt;'</span><span style="color: #339933;">,</span> <span style="color: #000088;">$comment</span><span style="color: #009900;">[</span><span style="color: #0000ff;">'comment_content'</span><span style="color: #009900;">]</span> <span style="color: #009900;">)</span><span style="color: #339933;">;</span>
  <span style="color: #000088;">$comment</span><span style="color: #009900;">[</span><span style="color: #0000ff;">'comment_content'</span><span style="color: #009900;">]</span> <span style="color: #339933;">=</span> <span style="color: #990000;">preg_replace</span><span style="color: #009900;">(</span> <span style="color: #0000ff;">'/\*\*(.*?)\*\*/is'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'&lt;strong&gt;$1&lt;/strong&gt;'</span><span style="color: #339933;">,</span> <span style="color: #000088;">$comment</span><span style="color: #009900;">[</span><span style="color: #0000ff;">'comment_content'</span><span style="color: #009900;">]</span> <span style="color: #009900;">)</span><span style="color: #339933;">;</span>
&nbsp;
  <span style="color: #666666; font-style: italic;">// Replace all appereances of _ and * with &lt;i&gt; and &lt;em&gt;</span>
  <span style="color: #000088;">$comment</span><span style="color: #009900;">[</span><span style="color: #0000ff;">'comment_content'</span><span style="color: #009900;">]</span> <span style="color: #339933;">=</span> <span style="color: #990000;">preg_replace</span><span style="color: #009900;">(</span> <span style="color: #0000ff;">'/_(.*?)_/is'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'&lt;i&gt;$1&lt;/em&gt;'</span><span style="color: #339933;">,</span> <span style="color: #000088;">$comment</span><span style="color: #009900;">[</span><span style="color: #0000ff;">'comment_content'</span><span style="color: #009900;">]</span> <span style="color: #009900;">)</span><span style="color: #339933;">;</span>
  <span style="color: #000088;">$comment</span><span style="color: #009900;">[</span><span style="color: #0000ff;">'comment_content'</span><span style="color: #009900;">]</span> <span style="color: #339933;">=</span> <span style="color: #990000;">preg_replace</span><span style="color: #009900;">(</span> <span style="color: #0000ff;">'/\*(.*?)\*/is'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'&lt;em&gt;$1&lt;/em&gt;'</span><span style="color: #339933;">,</span> <span style="color: #000088;">$comment</span><span style="color: #009900;">[</span><span style="color: #0000ff;">'comment_content'</span><span style="color: #009900;">]</span> <span style="color: #009900;">)</span><span style="color: #339933;">;</span>
&nbsp;
  <span style="color: #666666; font-style: italic;">// Replace all appereances of ` with &lt;code&gt;</span>
  <span style="color: #000088;">$comment</span><span style="color: #009900;">[</span><span style="color: #0000ff;">'comment_content'</span><span style="color: #009900;">]</span> <span style="color: #339933;">=</span> <span style="color: #990000;">preg_replace</span><span style="color: #009900;">(</span> <span style="color: #0000ff;">'/`(.*?)`/is'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'&lt;code&gt;$1&lt;/code&gt;'</span><span style="color: #339933;">,</span> <span style="color: #000088;">$comment</span><span style="color: #009900;">[</span><span style="color: #0000ff;">'comment_content'</span><span style="color: #009900;">]</span> <span style="color: #009900;">)</span><span style="color: #339933;">;&lt;/</span>code<span style="color: #339933;">&gt;</span>
&nbsp;
  <span style="color: #b1b100;">return</span> <span style="color: #000088;">$comment</span><span style="color: #339933;">;</span>
<span style="color: #009900;">}</span></pre></div></div>


You also need to add a filter to get the function working.

<div class="wp_syntax"><div class="code"><pre class="php" style="font-family:monospace;">add_filter<span style="color: #009900;">(</span><span style="color: #0000ff;">'preprocess_comment'</span><span style="color: #339933;">,</span> <span style="color: #0000ff;">'my_preprocess_comment'</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span></pre></div></div>


This is everything that’s necessary to get the style-tags for all of your comments. It’s pretty easy and you may help people that want to comment without thinking about HTML and stuff.<br>
Even though if you think that it’s fine for users to use HTML if they want to style their comments and don’t want to add this function: Add this snipped anyway as it does not affect any existing functions in WordPress and the comment-section. It’s just an add-on.
