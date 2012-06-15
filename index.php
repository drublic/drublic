<?php

	$env = 'dev';

	function base_url( $echo = true ) {
		global $env;

		if ( $echo ) {
			print ($env == 'dev') ? 'http://localhost/source-access/v2/' : 'http://drublic.de/';
		} else {
			return ($env == 'dev') ? 'http://localhost/source-access/v2/' : 'http://drublic.de/';
		}
	}


	if ( isset( $_GET['q'] ) ) {
		header( 'location:' . base_url( false ) . '#/' . $_GET['q'] );
	}


?>
<!doctype html>
<!--[if lt IE 8 ]> <html class="no-js ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
	<meta charset="utf-8">

	<link rel="dns-prefetch" href="//ajax.googleapis.com" />

	<title>@drublic - State of the Art Webdesign</title>

	<!-- Who did this page -->
	<link type="text/plain" rel="author" href="<?php base_url(); ?>humans.txt">
	<meta name="author" content="Hans Christian Reinl">

	<!-- The Feed -->
	<link rel="alternate" type="application/rss+xml" title="@drublic &raquo; Feed" href="http://feeds.feedburner.com/drublic">

	<!-- Mobile viewport optimized: j.mp/bplateviewport -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="stylesheet" href="<?php base_url(); ?>css/main.css">

	<!-- Meta-Tagging -->
	<meta name="description" content="@drublic - A short description of what I'm doing on the web. Mostly build with Tumblr and Twitter. Check out my projects.">
	<meta name="keywords" content="Hans Christian Reinl, Web 2.0, Internet, Webdesign, Freiburg, Wetzlar, Flipthemes">
	<meta name="application-name" content="@drublic - State of the Art Webdesign">

	<link rel="canonical" href="<?php base_url(); ?>">
	<link rel="index" title="@drublic - State of the Art Webdesign" href="<?php base_url(); ?>">

	<!-- All JavaScript at the bottom, except for Modernizr which enables HTML5 elements & feature detects -->
	<script src="<?php base_url(); ?>js/vendor/modernizr-2.5.3-custom.min.js"></script>
</head>

<body data-url="<?php base_url(); ?>">

	<header>
		<h1 class="header" role="banner"><a href="<?php base_url(); ?>" title="drublic's home">I am drublic <span>(Hans Christian Reinl)</span></a></h1>

		<nav id="nav" role="navigation">
			<a href="#content" class="visuallyhidden">Skip to Content</a>
			<ul>
				<li class="active"><a href="<?php base_url(); ?>home" title="Visit the Homepage">Home</a></li>
				<li><a href="<?php base_url(); ?>blog" title="Get some cutting edge goodness">Blog</a></li>
				<li><a href="<?php base_url(); ?>imprint" title="Who does this stuff?">Imprint</a></li>
				<li><a href="<?php base_url(); ?>contact" title="Contact me if you have any questions">Contact</a></li>
			</ul>
		</nav>

	</header>

	<div id="content" role="main">

		<div class="about">
			<div class="desc">
				<p>Web developer, front-end nerd, JavaScript hacker, located in <a href="http://en.wikipedia.org/wiki/Freiburg_im_Breisgau" title="Wanna know more awesome things about Freiburg? Check out the Wikipedia article.">Freiburg</a> / Germany.</p>
				<p>Dealing with HTML5, CSS3, JavaScript and these kinds is my daily business and I love it. Find out <a href="<?php base_url(); ?>blog/about/">more about me</a>.</p>
			</div>

			<ul class="social">
				<li class="google"><a href="https://plus.google.com/u/0/112019818423540363330/posts" title="The G+.">Google+</a></li>
				<li class="github"><a href="https://github.com/drublic" title="Open-Source-Code!">Github</a></li>
				<li class="twitter"><a href="https://twitter.com/drublic" title="That's where I tweet.">Twitter</a></li>
				<li class="lastfm"><a href="http://www.lastfm.de/user/MySxWA" title="Checkout the music I'm listening to">LastFM</a></li>
				<li class="zerply"><a href="http://zerply.com/drublic/public" title="My Zerply-profile">Zerply</a></li>
				<li class="email"><a href="mailto:info@drublic.de" title="Send me a mail">Write a Mail</a></li>
				<li class="rss"><a href="http://feeds.feedburner.com/drublic" title="The RSS-Feed for my blog">RSS</a></li>
			</ul>
		</div>

		<p class="to-blog"><a href="<?php base_url(); ?>blog/" title="My Blog about HTML5, CSS and JavaScript - State of the Art Webdesign" class="button">Read my blog</a></p>

		<div class="content">
			<section class="row blog">
				<h2><a href="http://drublic.de/blog/">Blog</a></h2>

				<div class="feed">
					<ul>
					<?php
						// Use cURL to get the RSS feed into a PHP string variable
						$ch = curl_init();
						curl_setopt($ch, CURLOPT_URL, 'http://feeds.feedburner.com/drublic?format=xml');
						curl_setopt($ch, CURLOPT_HEADER, false);
						curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
						$xml = curl_exec($ch);
						curl_close($ch);

						$data = simplexml_load_string( $xml );

						foreach( $data->channel->item as $item ) :
							if ( $count++ == 5 ) {
								break;
							}
							?>
							<li>
								<h4><a href="<?php print $item->link; ?>" title="Permalink to <?php print $item->title; ?>"><?php print $item->title; ?></a></h4>
								<?php
									$description = $item->description;
									if ( strlen($description) > 140 ) {
										$description = substr( trim($description), 0, 140 );
										$description = explode( ' ', $description, -1 );
										$description = implode( $description, ' ' );
									}
									print $description;
								?>
								<a href="<?php print $item->link; ?>" title="Permalink to <?php print $item->title; ?>">read more &hellip;</a>
								<a href="<?php print $item->link; ?>" title="Permalink to <?php print $item->title; ?>" class="date"><?php print date( 'd.m.Y - H:i', strtotime($item->pubDate) ); ?></a>
							</li>
						<?php endforeach; ?>
					</ul>
				</div>
			</section>

			<section class="row twitter">
				<h2><a href="http://twitter.com/drublic">Twitter</a></h2>

				<div class="feed">
					<ul></ul>
				</div>
			</section>


			<section class="row tumblr">
				<h2><a href="http://drublic.tumblr.com/">Tumblr</a></h2>

				<div class="feed">
					<ul></ul>
				</div>
			</section>
		</div>


	</div>

	<!--! Imprint -->
	<section class="imprint">
		<h2>Imprint</h2>

		<div class="clearfix">
			<div class="col_50">
				<h3>Source Access Designz</h3>
				<p>
					Obere Bachstra&szlig;e 15<br>
					35606 Solms<br>
					Germany
				</p>
			</div>

			<div class="col_50">
				<h3>Contact</h3>
				<p>Hans Christian Reinl<br>
					<a href="mailto:info@drublic.de">info@drublic.de</a><br>
					+49 176 44508482<br>
				</p>

				<p>Finanzamt Wetzlar<br>
				Tax ID: 039 860 01625</p>
			</div>
		</div>


		<h3>Some things&hellip;</h3>

		<p>There is no warranty for integrity, completeness and currentness for this website.<br>
			Furthermore Hans Christian Reinl and Source Access Designz don't take any liability concerning external links.</p>
		<p>Please notice the copyright law for each of the presented pages.</p>

		<p>Please be aware of the fact that we store some of the data while you visit this this page. For doing this we mostly use <a href="http://piwik.org/">Piwik</a>.</p>
	</section>




	<!--! Contact -->
	<section class="contact">
		<h2>Contact me</h2>

		<div class="clearfix">
			<div id="wufoo-z7x3k7">
				Fill out my <a href="http://drublic.wufoo.com/forms/z7x3k7">online form</a>.
			</div>
			<script>var z7x3k7;(function(d, t) {
			var s = d.createElement(t), options = {
			'userName':'drublic',
			'formHash':'z7x3k7',
			'autoResize':true,
			'height':'557',
			'async':true,
			'header':'show'};
			s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'wufoo.com/scripts/embed/form.js';
			s.onload = s.onreadystatechange = function() {
			var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
			try { z7x3k7 = new WufooForm();z7x3k7.initialize(options);z7x3k7.display(); } catch (e) {}};
			var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
			})(document, 'script');</script>
		</div>

	</section>


	<footer>
		<a href="#" class="visuallyhidden">go back up to top</a>
	</footer>


	<!-- JavaScript at the bottom for fast page loading -->

	<!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if necessary -->
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src="<?php base_url(); ?>js/vendor/jquery-1.7.2.min.js"><\/script>')</script>


	<!-- scripts concatenated and minified via build script -->
	<script src="<?php base_url(); ?>js/vendor/twitter-text.js"></script>
	<script src="<?php base_url(); ?>js/plugins.js"></script>
	<script src="<?php base_url(); ?>js/main.js"></script>
	<!-- end scripts -->

	<!-- Piwik -->
	<script>
	var pkBaseURL = (("https:" == document.location.protocol) ? "https://drublic.de/piwik/" : "http://drublic.de/piwik/");
	document.write('<script src="' + pkBaseURL + 'piwik.js"><\/script>');
	</script><script>
	try {
	var piwikTracker = Piwik.getTracker(pkBaseURL + "piwik.php", 1);
	piwikTracker.trackPageView();
	piwikTracker.enableLinkTracking();
	} catch( err ) {}
	</script><noscript><p><img src="http://drublic.de/piwik/piwik.php?idsite=1" style="border:0" alt="" /></p></noscript>
	<!-- End Piwik Tracking Code -->
</body>
</html>