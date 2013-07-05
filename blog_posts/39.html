{"title":"Push and Pull with Server-sent Event and WebSocket","permalink":"the-difference-between-push-and-pull","author":"Hans Christian","authorUrl":"","categories":["HTML5","JavaScript"],"tags":["HTML5","pull","push","server-sent event","websocket api"],"headline":"The Difference between Push and Pull","metaTags":"","metaDescription":"","date":"2011-08-20"}


		

		
					<figure class="aligncenter">
				<img width="600" height="316" src="http://drublic.de/blog/wp-content/uploads/2011/06/push-and-pull-600x316.png" class="attachment-medium wp-post-image" alt="Push and Pull" />			</figure>
		
							<div class="message">
				<h3>Hey there…</h3>
				<p>This post is 676 days old. It was written on 20.08.2011. Please make sure to be careful with the information provided and check a more recent source on this topic.</p>
			</div>
		
		<p>You do know the nice message which is submitted to your smartphone when someone mentions you on Twitter?</p>
<p>iOS gets these messages via push. This means the server tells the app something like “Hey look, there’s something new on your Twitter-account”.<br />
On Android this is done with push, too. It was introduced in version 2.1.0 in mid of July. Before this release they requested all Tweets via “pull”: The app asks the server “Yo server, somethin’ new here?”.</p>
<h2>Draw-backs?</h2>
<p>So where’s the difference besides the obvious?</p>
<ul>
<li>with pull the app has to connect to the server in a certain time-interval</li>
<li>this means heigh power drain</li>
<li>it may take some time until you receive a message via pull*</li>
<li>push may hold an open connection to the server: more data is send</li>
</ul>
<p><small>* Site note: I noticed that it also may take some time until a new message is delivered with push technology on iOS or Android (for Twitter-App). If anyone knows more on this issue please share your thoughts.</small></p>
<h2>The way we do it today</h2>
<p>If you’re coding an online app you have something where you’re displaying new messages or so. The known&nbsp;approach&nbsp;is to return asynchronously to the server via JavaScript and evaluate the answer. Something like this:</p>

<div class="wp_syntax"><div class="code"><pre class="javascript" style="font-family: monospace;">$.<span style="color: #660066;">getJSON</span><span style="color: #009900;">(</span> <span style="color: #3366CC;">'messages.php'</span> <span style="color: #339933;">,</span> <span style="color: #003366; font-weight: bold;">function</span><span style="color: #009900;">(</span> data <span style="color: #009900;">)</span> <span style="color: #009900;">{</span>
  <span style="color: #006600; font-style: italic;">// If there is a message</span>
  <span style="color: #000066; font-weight: bold;">if</span> <span style="color: #009900;">(</span> data.<span style="color: #660066;">length</span> <span style="color: #339933;">&amp;</span>gt<span style="color: #339933;">;</span> <span style="color: #CC0000;">0</span> <span style="color: #009900;">)</span> <span style="color: #009900;">{</span>
    $.<span style="color: #660066;">each</span><span style="color: #009900;">(</span> data<span style="color: #009900;">[</span><span style="color: #3366CC;">'msg'</span><span style="color: #009900;">]</span><span style="color: #339933;">,</span> <span style="color: #003366; font-weight: bold;">function</span><span style="color: #009900;">(</span><span style="color: #009900;">)</span> <span style="color: #009900;">{</span>
      <span style="color: #006600; font-style: italic;">// Do some fancy stuff with messages…</span>
    <span style="color: #009900;">}</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span>
  <span style="color: #009900;">}</span>
<span style="color: #009900;">}</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span></pre></div></div>

<p>This is “pull”. It is not enough to request the answer of this file once, because this would evaluate the data only once. This is why there has to be a kind of timed event which fires the request in an interval.</p>
<p>This is what it could like with an intervall of 1 minute:</p>

<div class="wp_syntax"><div class="code"><pre class="javascript" style="font-family: monospace;"><span style="color: #339933;">!</span> <span style="color: #003366; font-weight: bold;">function</span> pull_request<span style="color: #009900;">(</span><span style="color: #009900;">)</span> <span style="color: #009900;">{</span>
  $.<span style="color: #660066;">getJSON</span><span style="color: #009900;">(</span> <span style="color: #3366CC;">'messages.php'</span> <span style="color: #339933;">,</span> <span style="color: #003366; font-weight: bold;">function</span><span style="color: #009900;">(</span> data <span style="color: #009900;">)</span> <span style="color: #009900;">{</span>
    <span style="color: #006600; font-style: italic;">// If there is a message</span>
    <span style="color: #000066; font-weight: bold;">if</span> <span style="color: #009900;">(</span> data.<span style="color: #660066;">length</span> <span style="color: #339933;">&amp;</span>gt<span style="color: #339933;">;</span> <span style="color: #CC0000;">0</span> <span style="color: #009900;">)</span> <span style="color: #009900;">{</span>
      $.<span style="color: #660066;">each</span><span style="color: #009900;">(</span> data<span style="color: #009900;">[</span><span style="color: #3366CC;">'msg'</span><span style="color: #009900;">]</span><span style="color: #339933;">,</span> <span style="color: #003366; font-weight: bold;">function</span><span style="color: #009900;">(</span><span style="color: #009900;">)</span> <span style="color: #009900;">{</span>
        <span style="color: #006600; font-style: italic;">// Do some fancy stuff with messages…</span>
      <span style="color: #009900;">}</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span>
    <span style="color: #009900;">}</span>
  <span style="color: #009900;">}</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span>
&nbsp;
  window.<span style="color: #660066;">setTimeout</span><span style="color: #009900;">(</span> <span style="color: #003366; font-weight: bold;">function</span><span style="color: #009900;">(</span><span style="color: #009900;">)</span> <span style="color: #009900;">{</span>
    pull_request<span style="color: #009900;">(</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span>
  <span style="color: #009900;">}</span><span style="color: #339933;">,</span> <span style="color: #CC0000;">1000</span> <span style="color: #339933;">*</span> <span style="color: #CC0000;">60</span> <span style="color: #009900;">)</span><span style="color: #339933;">;</span>
<span style="color: #009900;">}</span> <span style="color: #009900;">(</span><span style="color: #009900;">)</span><span style="color: #339933;">;</span></pre></div></div>

<p>As you can see, there is an <a title="Ben Alman » Immediately-Invoked Function Expression (IIFE)" href="http://benalman.com/news/2010/11/immediately-invoked-function-expression/" target="_blank">IIFE</a> surrounding the code. I am doing this in order to call the timeout recursively. For more information please read <a title="Ben Alman » Immediately-Invoked Function Expression (IIFE)" href="http://benalman.com/news/2010/11/immediately-invoked-function-expression/" target="_blank">Ben Almans article</a> on this issue.</p>
<h2>What else is possible</h2>
<p>This will work totally fine. Let’s take a look at other possible ways.</p>
<p>The <a title="Push technology" href="http://en.wikipedia.org/wiki/Push_technology" target="_blank">Wikipedia article</a> about push sais:</p>
<blockquote><p>Push technology, or server push, describes a style of Internet-based communication where the request for a given transaction is initiated by the publisher or central server.</p></blockquote>
<p>With HTML5 the <a title="Web Hypertext Application Technology Working Group" href="http://www.whatwg.org/" target="_blank">WHATWG</a> introduces <a title="The WebSocket API" href="http://dev.w3.org/html5/websockets/" target="_blank">The WebSocket API</a>.</p>
<h3>WebSocket API</h3>
<p>The WebSocket API enables websites and apps to communicate with a server. A polyfill for browsers that do not support WebSocket and as a framework you should definitely check out <a title="Socket.IO: the cross-browser WebSocket for realtime apps" href="http://socket.io/" target="_blank">Socket.IO</a>.</p>
<p>There were some <a title="The WebSocket Protocol Specification" href="http://dev.w3.org/html5/websockets/" target="_blank">definitions of this API in the spec</a> that had some security problems and so browser vendors implemented some stuff that is outdated by now. There is a kinda <a title="The WebSocket protocol - draft-ietf-hybi-thewebsocketprotocol-10" href="http://tools.ietf.org/html/draft-ietf-hybi-thewebsocketprotocol-10" target="_blank">“last call” specification</a> for this API which are already implemented in <a title="Blogpost about WebSocket support in Chrome" href="http://blog.chromium.org/2011/08/new-websocket-protocol-secure-and.html" target="_blank">Chrome dev channel</a> (version 14) and <a title="Mozilla docs for WebSocket API" href="https://developer.mozilla.org/en/WebSockets">Firefox 7</a>. The API is available with a current version of Webkit so it should be in Safari soon.</p>
<h3>Server-Sent Events</h3>
<p>Furthermore there is the <a title="Server-Sent Events" href="http://dev.w3.org/html5/eventsource/" target="_blank">Server-Sent Event</a> which is dedicated to fulfill push notifications. The event is already supported in stable versions of Safari, Chrome, Firefox and Opera. See <a title="When can I use… Server-Sent Event" href="http://caniuse.com/#feat=eventsource" target="_blank">When Can I Use…</a> for more information.</p>
<p>The Server-Sent Event is a DOM event and can be accessed via <code>new EventSource( file );</code> in JavaScript, while <code>file</code> is a server-file which publishes the notification. With the <code>onmessage</code>-event it is possible to listen to the changes of notifications.</p>

<div class="wp_syntax"><div class="code"><pre class="javascript" style="font-family: monospace;"><span style="color: #003366; font-weight: bold;">var</span> source <span style="color: #339933;">=</span> <span style="color: #003366; font-weight: bold;">new</span> EventSource<span style="color: #009900;">(</span> <span style="color: #3366CC;">'messages.cgi'</span> <span style="color: #009900;">)</span><span style="color: #339933;">;</span>
source.<span style="color: #660066;">onmessage</span> <span style="color: #339933;">=</span> <span style="color: #003366; font-weight: bold;">function</span><span style="color: #009900;">(</span> e <span style="color: #009900;">)</span> <span style="color: #009900;">{</span>
  <span style="color: #006600; font-style: italic;">// do something with the notification, e.g. log it in the console.</span>
  console.<span style="color: #660066;">log</span><span style="color: #009900;">(</span> e.<span style="color: #660066;">data</span> <span style="color: #009900;">)</span><span style="color: #339933;">;</span>
<span style="color: #009900;">}</span></pre></div></div>

<h2>Conclusion</h2>
<p>With the given technologies it is possible to send notifications via push to the client-site. There are polyfills for “older” browsers (like pulling data). It is possible to use these tools today.</p>
<p>If you have any experience with the topic of pushing data, please share your thoughts and ideas in the comments.<br />
Thanks for reading though.</p>
<p>I am going to develop a web-app with a friend of mine. We are using <a title="Evented I/O for V8 JavaScript." href="http://nodejs.org/" target="_blank">node.js</a> for the server part. I am pretty exited to deal with it. We will definitely need something like a push event. We’ll see what will be best.</p>
<p>Read more and follow-up info:</p>
<ul>
<li>Follow Ian Hickson on <a title="Ian Hickson on Twitter" href="https://twitter.com/#!/hixie" target="_blank">Twitter</a> or <a title="Ian Hickson on Google+" href="https://plus.google.com/107429617152575897589/" target="_blank">Google+</a>. He is the editor of the spec for Server-sent Events and The WebSocket API.</li>
<li>You should checkout the <a title="HTML5 Cross Browser Polyfills - GitHub" href="https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills" target="_blank">Modernizr Polyfill Wiki</a> to get some information on polyfills for older browsers with WebSockets aso.</li>
</ul>
				

		
	