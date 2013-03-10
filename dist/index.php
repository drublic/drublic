<?php
	$dev = $_SERVER['HTTP_HOST'] == "drublic.de";

	function base_url () {
		global $dev;

		if ($dev) {
			return "http://drublic.de/";
		} else {
			return "http://localhost/vc/dist/";
		}
	}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">

	<title>drublic &mdash; State of the Art Front-end Development - Hans
			Christian Reinl, Freiburg – HTML5 Boilerplate, Working Draft, TYPO3</title>

	<!--
		     _            _     _ _
		  __| |_ __ _   _| |__ | (_) ___
		 / _` | '__| | | | '_ \| | |/ __|
		| (_| | |  | |_| | |_) | | | (__
		 \__,_|_|   \__,_|_.__/|_|_|\___|

		Feel free to view and copy my source-code if you want to.
		Contact me if you have questions: info@drublic.de

		Thanks for visiting,
		Hans
	-->

	<!-- Who did this page -->
	<link type="text/plain" rel="author" href="/humans.txt">
	<meta name="author" content="Hans Christian Reinl">

	<!-- The Feed -->
	<link rel="alternate" type="application/rss+xml" title="drublic"
			href="http://feeds.feedburner.com/drublic">

	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="stylesheet" href="<?php print base_url(); ?>css/main.css">

	<!-- Meta-Tagging -->
	<meta name="description" content="drublic - Hans Christian Reinl - Front-end
			Development on the edge.">
	<meta name="keywords" content="Hans Christian Reinl,
			CSS,
			JavaScript,
			HTML5,
			drublic,
			Front-end,
			Development,
			HTML5 Boilerplate,
			Working Draft,
			TYPO3,
			Webdesign,
			Freiburg,
			Flipthemes">
	<meta name="application-name" content="drublic">

	<link rel="canonical" href="<?php print base_url(); ?>">
	<link rel="index" title="drublic - State of the Art Webdesign -
			HTML, CSS, JavaScript – Hans Christian Reinl"
			href="<?php print base_url(); ?>">

	<!--[if lt IE9]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

</head>

<body>

	<header class="site-header">
		<nav class="site-navigation" role="navigation">
			<a href="#content" class="visuallyhidden">Skip to Content</a>

			<a href="#!" class="navigation-target" id="navigation"></a>
			<ul>
				<li class="site-logo"><a href="<?php print base_url(); ?>" title="Go to the home page">∆</a></li>
				<li><a href="<?php print base_url(); ?>resume/" title="My official résumé">Résumé</a></li>
				<li><a href="<?php print base_url(); ?>blog/" title="Get some cutting edge goodness">Blog</a></li>
				<li><a href="<?php print base_url(); ?>#work" title="View some of the work I do">Work</a></li>
				<li><a href="<?php print base_url(); ?>#hire-me" title="I do client work and propably would love to work with you">Hire me</a></li>
				<li><a href="<?php print base_url(); ?>#contact" title="Contact me if you have any questions">Contact</a></li>
			</ul>

			<a href="#navigation" class="navigation-toggle">☰</a>
		</nav>
	</header>

<div id="content" class="main" role="main">

	<section id="about" class="about">
		<div class="section-content">
			<h1 class="site-claim">I am drublic <span>(Hans Christian Reinl)</span></h1>

			<div class="desc">
				<p>Web developer, front-end nerd, JavaScript hacker, located in <a href="http://en.wikipedia.org/wiki/Freiburg_im_Breisgau" title="Wanna know more awesome things about Freiburg? Check out the Wikipedia article.">Freiburg</a> / Germany.</p>
				<p>Dealing with HTML5, CSS and JavaScript is my daily business and I love it. Find out <a href="/blog/about/">more about me</a>, <a href="#work">my work</a> and <a href="#hire-me" title="Hire me in need">hire me if you are in need</a>.</p>
			</div>
		</div>
	</section>

	<!-- Projects & OSS -->
	<section class="work" id="work">
		<h2>Work I do</h2>

		<figure class="work-project">
			<img src="work/html5bp.png" alt="HTML5 Boilerplate">
			<figcaption>I am a member of the <a href="http://html5boilerplate.com/">HTML5 Boilerplate</a> developer&#8217;s team. It is the web&#8217;s most popular front-end template.</figcaption>
		</figure>

		<figure class="work-project">
			<img src="work/wd.png" alt="Working Draft">
			<figcaption><a href="http://workingdraft.de/">Working Draft</a> is a german weekly news podcast for web-developer where I am a co-host.</figcaption>
		</figure>

		<figure class="work-project">
			<img src="work/tng.png" alt="The Nitty Gritty">
			<figcaption><a href="http://thenittygritty.co/">The Nitty Gritty</a> is a blog for web developers with a deep technical understanding. With my friend <a href="http://kahlil.co/">Kahlil</a> I maintain it.</figcaption>
		</figure>

		<figure class="work-project">
			<img src="work/appmeister.png" alt="App Meister">
			<figcaption>For the start-up compendii I worked on the mobile version of <a href="http://app-meister.com/" title="App Meister">App Meister</a>. App Meister helps you to find the best iOS apps for your need.</figcaption>
		</figure>

		<figure class="work-project">
			<img src="work/dgu.png" alt="">
			<figcaption>The <a href="http://www.dgu-online.de/">Deutsche Gesellschaft für Unfallchirurgie</a> relaunched their online presence. At /gebrüderheitz we developed the TYPO3-based website.</figcaption>
		</figure>

		<figure class="work-project">
			<img src="work/idesk.png" alt="Haufe iDesk2">
			<figcaption><a href="http://idesk2.haufe.de/">Haufe iDesk<sup>2</sup></a> is a software to optimize your workflow. At /gebrüderheitz we developed a webpage with cutting edge technologies.</figcaption>
		</figure>
	</section>


	<!-- Hire Me -->
	<section class="hire-me" id="hire-me">
		<div class="modal-inner">
			<h2>Hire Me</h2>

			<p>I do work for businesses, agencies and other clients that value great front-end work.</p>
			<p>Work that I like to do includes consulting and educational work (workshops et cetera) as well as projects that have a focus on JavaScript application development or a deep need of scalability and consistency throughout a website. Please <a href="/blog/about">review the projects I am involved in</a> to get an overview of my skills.</p>
			<p>If you would like me to deliver a talk on your conference <a href="#work">please see my projects</a> and decide whether I am a good choice for yourself.</p>

			<p><a href="#contact">Contact me</a> if you think I am a fit for your project.</p>
		</div>
	</section>
</div>


<!-- Contact -->
<section class="contact" id="contact" tabindex="-1" role="dialog" aria-labelledby="contact-label" aria-hidden="true">
	<div class="modal-inner">
		<header>
			<h2 id="contact-label">Contact</h2>
		</header>

		<div class="modal-content" id="wufoo-z7x3k7">
			Fill out my <a href="http://drublic.wufoo.com/forms/z7x3k7">online form</a>.
		</div>
	</div>

	<a href="#!" class="modal-close" title="Close this modal" data-dismiss="modal" aria-hidden="true">&times;</a>
</section>


<!-- Imprint -->
<section class="imprint" id="imprint" tabindex="-1" role="dialog" aria-labelledby="imprint-label" aria-hidden="true">
	<div class="modal-inner">
		<header>
			<h2 id="imprint-label">Imprint</h2>
		</header>

		<div class="modal-content">
			<h3>Source Access Designz</h3>
			<p>Obere Bachstra&szlig;e 15<br>
				35606 Solms<br>
				Germany
			</p>

			<h3>Contact</h3>
			<p>Hans Christian Reinl<br>
				<a href="mailto:info@drublic.de">info@drublic.de</a><br>
				+49 176 44508482<br>
			</p>

			<p>Finanzamt Wetzlar<br>
			Tax ID: 039 860 01625</p>


			<h3>Some things&hellip;</h3>

			<p>There is no warranty for integrity, completeness and currentness for this website.<br>
				Furthermore Hans Christian Reinl and Source Access Designz don't take any liability concerning external links.</p>
			<p>Please notice the copyright law for each of the presented pages.</p>

			<p>Please be aware of the fact that we store some of the data while you visit this this page. For doing this we mostly use <a href="http://piwik.org/">Piwik</a>.</p>
		</div>
	</div>

	<a href="#!" class="modal-close" title="Close this modal" data-dismiss="modal" aria-hidden="true">&times;</a>
</section>




	<footer class="site-footer">
		<div class="follow-me">
			<a href="https://twitter.com/drublic" class="twitter-follow-button" data-show-count="false" data-size="large">Follow @drublic</a>
			<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
		</div>

		<p>Made with love. 2012. Freiburg, Germany. <a href="<?php print base_url(); ?>#imprint" title="Who does this stuff?">Legal</a>.</p>

		<ul class="social-media-links">
			<li class="rss"><a href="http://feeds.feedburner.com/drublic">Subscribe to Feed</a></li>
			<li class="github"><a href="https://github.com/drublic">Github</a></li>
			<li class="twitter"><a href="https://twitter.com/drublic">Twitter</a></li>
			<li class="google-plus"><a href="https://plus.google.com/112019818423540363330/posts">Google+</a></li>
		</ul>

		<a href="#" class="visuallyhidden">go back up to top</a>
	</footer>


	<!-- JavaScript at the bottom for fast page loading -->
	<script src="<?php print base_url(); ?>js/main.js"></script>

	<!-- Wufoo form -->
	<script>
		var z7x3k7;
		(function(d, t) {
			var s = d.createElement(t),
				options = {
					'userName':'drublic',
					'formHash':'z7x3k7',
					'autoResize':true,
					'height':'557',
					'async':true,
					'header':'show'
				};
				s.src = 'http://wufoo.com/scripts/embed/form.js';
				s.onload = s.onreadystatechange = function() {
					var rs = this.readyState;
					if (rs) if (rs != 'complete') if (rs != 'loaded') return;
					try {
						z7x3k7 = new WufooForm();
						z7x3k7.initialize(options);
						z7x3k7.display();
					} catch (e) {}
				};
				var scr = d.getElementsByTagName(t)[0],
				par = scr.parentNode; par.insertBefore(s, scr);
		}(document, 'script'));
	</script>

	<!-- Piwik -->
	<script>
		var pkBaseURL = '//drublic.de/piwik/';
		document.write('<script src="' + pkBaseURL + 'piwik.js"><\/script>');
	</script><script>
	try {
		var piwikTracker = Piwik.getTracker(pkBaseURL + 'piwik.php', 1);
		piwikTracker.trackPageView();
		piwikTracker.enableLinkTracking();
	} catch( err ) {}
	</script>
	<noscript><img src="http://drublic.de/piwik/piwik.php?idsite=1" style="border:0" alt="" /></noscript>
</body>
</html>
