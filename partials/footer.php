


	<footer class="site-footer">
		<div class="follow-me">
			<a href="https://twitter.com/drublic" class="twitter-follow-button" data-show-count="false" data-size="large">Follow @drublic</a>
			<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
		</div>

		<p>Made in with love. 2012. Freiburg, Germany. <a href="<?php print base_url(); ?>#imprint" title="Who does this stuff?">Legal</a>.</p>

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
