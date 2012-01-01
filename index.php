<?php

  $env = 'dev';
  
  function base_url( $echo = true ) {
    global $env;
    
    if ( $echo ) {
      print ($env == 'dev') ? 'http://localhost:8888/source-access/v2/' : 'http://drublic.de/';
    } else {
      return ($env == 'dev') ? 'http://localhost:8888/source-access/v2/' : 'http://drublic.de/';
    }
  }
  
  
  if ( isset( $_GET['q'] ) ) {
    header( 'location:' . base_url( false ) . '#!/' . $_GET['q'] );
  }
  

?>
<!doctype html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7 ]> <html class="no-js ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]>    <html class="no-js ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]>    <html class="no-js ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  
  <link rel="dns-prefetch" href="//ajax.googleapis.com" />

  <!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame
       Remove this if you use the .htaccess -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <title>@drublic - State of the Art Webdesign</title>

  <!-- Who did this page -->
  <link type="text/plain" rel="author" href="<?php base_url(); ?>humans.txt"> 
  
  <!-- The Feed -->
  <link rel="alternate" type="application/rss+xml" title="@drublic &raquo; Feed" href="http://feeds.feedburner.com/drublic">

  <!-- Mobile viewport optimized: j.mp/bplateviewport -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- CSS concatenated: implied media="all" (prefix: <?php base_url(); ?>) -->
  <link rel="stylesheet" href="css/style.css?v=2">
  <!-- end CSS -->
  
  <meta name="description" content="@drublic - A short description of what I'm doing on the web. Mostly build with Tumblr and Twitter. Check out my projects.">
  <meta name="keywords" content="Hans Christian Reinl, Web 2.0, Internet, Webdesign, Freiburg, Wetzlar, Flipthemes">
  <meta name="author" content="Hans Christian Reinl">
  <meta name="application-name" content="@drublic - State of the Art Webdesign">

  
  <link rel="canonical" href="<?php base_url(); ?>">
  <link rel="index" title="@drublic - State of the Art Webdesign" href="<?php base_url(); ?>">

  <!-- Uncomment if you are specifically targeting less enabled mobile browsers
  <link rel="stylesheet" media="handheld" href="css/handheld.css?v=2">  -->

  <!-- All JavaScript at the bottom, except for Modernizr which enables HTML5 elements & feature detects -->
  <script src="<?php base_url(); ?>js/libs/modernizr.custom.28858.min.js"></script>

  <!--! Typekit -->
  <script src="http://use.typekit.com/nls7qda.js"></script>
  <script>try{Typekit.load();}catch(e){}</script>

</head>

<body>
  <section class="message nojs-active">Hey there! Please activate JavaScript in order to view this page.</section>

  <div id="container">
    <header>
      <ul class="social-media-links">
        <li class="github"><a href="https://github.com/drublic" target="_blank">Github</a></li>
        <li class="twitter"><a href="https://twitter.com/drublic" target="_blank">Twitter</a></li>
        <li class="lastfm"><a href="http://www.lastfm.de/user/MySxWA" target="_blank">LastFM</a></li>
      </ul>
      <nav>
        <ul>
          <li class="active"><a href="<?php base_url(); ?>home" title="Visit the Homepage">Home</a></li>
          <li><a href="<?php base_url(); ?>blog" title="Get some cutting edge goodness" target="_blank">Blog</a></li>
          <li><a href="<?php base_url(); ?>buddies" class="hidden" title="Check out some of my friends' websits">Buddies</a></li>
          <li><a href="<?php base_url(); ?>imprint" title="Who does this stuff?">Imprint</a></li>
          <li><a href="<?php base_url(); ?>contact" title="Contact me if you have any questions">Contact</a></li>
        </ul>
      </nav>
      
      <div id="head">
        <a href="<?php base_url(); ?>">@drublic</a>
        <p>A short description of what I'm doing on the web. Mostly built with Tumblr and Twitter.</p>
      </div>
      
      <div class="location">
        <div class="needle">
          <p>I'm located in <a href="http://en.wikipedia.org/wiki/Freiburg_im_Breisgau" title="Wanna know more awesome things about Freiburg? Check out the Wikipedia article." target="_blank">Freiburg</a> / Germany.</p>
        </div>
      </div>
    </header>
    
    <div id="main" role="main">
      
      <section class="blog">
        <h2><a href="http://drublic.de/blog/" target="_blank">Blog</a></h2>
        
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
                <h4><a href="<?php print $item->link; ?>" title="Permalink to <?php print $item->title; ?>" target="_blank"><?php print $item->title; ?></a></h4>
                <?php
                  $description = $item->description;
                  if ( strlen($description) > 140 ) {
                    $description = substr( trim($description), 0, 140 );
                    $description = explode( ' ', $description, -1 );
                    $description = implode( $description, ' ' );
                  }
                  print $description;
                ?>
          	    <a href="<?php print $item->link; ?>" title="Permalink to <?php print $item->title; ?>" target="_blank">read more &hellip;</a>
          	    <a href="<?php print $item->link; ?>" title="Permalink to <?php print $item->title; ?>" target="_blank" class="date"><?php print date( 'd.m.Y - H:i', strtotime($item->pubDate) ); ?></a>
              </li>
            <?php endforeach; ?>
          </ul>
        </div>
      </section>
      
      <section class="twitter">
        <h2><a href="http://twitter.com/drublic" target="_blank">Twitter</a></h2>
        
        <div class="feed">
          <ul>
            <div class="loader"></div>
          </ul>
        </div>
      </section>
      
      <section class="projects">
        <h2><a href="#">Latest Projects</a></h2>
        
        <div class="feed">
          <ul>


            <!--! Haufe iDesk2 -->
            <li>
              <a href="#project-idesk2" class="front">
                <img src="img/idesk2.jpg" alt="">
                <h4>WordPress Website - Haufe iDesk<sup>2</sup></h4>
              </a>
              <div id="project-idesk2" class="back">
                <h3>WordPress Website - Haufe iDesk<sup>2</sup></h3>
                <p><a href="http://idesk2.haufe.de/" title="Haufe iDesk2 product landing page" target="_blank">Haufe iDesk<sup>2</sup></a> is a software offered by the publishing company <a href="http://www.haufe.de/" title="Visit the Haufe-Homepage" target="_blank">Haufe</a> to optimize your working process.</p>
                <p>At <a href="http://gebruederheitz.de/" target="_blank">/gebr&uuml;derheitz</a> I developed a webpage with cutting edge technologies using WordPress, HTML5, CSS3 and some jQuery-goodness based on a design by <a href="https://twitter.com/#!/dnlhtz" title="Daniels Twitter-account" target="_blank">@dnlhtz</a>.</p>
                <p>The customer requested a fully browser-compatible site, since the B2B-sector often uses older browsers like Internet Explorer 7. In order to reach this requirement we dealt a lot with HTML5-polyfills and used fallback technologies like YouTube-videos in non-HTML5-supporting browsers for the video-section.</p>
              </div>
            </li>


            <!--! Gala-Goodies -->
            <li>
              <a href="#project-galagoodies" class="front">
                <img src="img/galagoodies.png" alt="">
                <h4>WordPress Website - GALA-Goodies</h4>
              </a>
              <div id="project-galagoodies" class="back">
                <h3>WordPress Website - GALA-Goodies</h3>
                <p><a href="http://gala-goodies.de" target="_blank">GALA Goodies</a> comes out as a insert with <a href="http://www.gala.de/" target="_blank">GALA</a>, a <q>"premium magazine for people and lifestyle"</q> <cite>(<a href="http://www.guj.de/index_en.php4?/en/produkte/zeitschrift/zeitschriftentitel/gala.php4" target="_blank" title="Visit the source">G+J</a>)</cite>.</p>
                <p><a href="http://gala-goodies.de/goodies/" target="_blank" title="GALA-Goodies website">The website</a> is build to help the GALA-Goodies team in communication with their partners.</p>
              </div>
            </li>


            <!--! JsFiddle -->
            <li>
              
              <a href="#project-jsfiddle" class="front">
                <img src="img/jsfiddle.jpg" alt="">
                <span class="official"></span>
                <h4>Google Chrome App - jsFiddle</h4>
              </a>
              <div id="project-jsfiddle" class="back">
                <h3>Google Chrome App - jsFiddle</h3>
                <p><a href="http://jsfiddle.net" target="_blank">jsFiddle</a> is a pretty useful social coding tool. This is an app for Google Chrome which works like a bookmark.</p>
                <p><a href="https://chrome.google.com/webstore/detail/hiigmadmngbpbmacbkfngpkjfmmpagfk" title="Visit the Chrome Web Store" target="_blank">Visit Chrome Web Store</a> to view the app and download it. 9.000 others already installed it.</p>
                <p>Since 16th june 2011 it's the official jsFiddle Chrome Bookmark - check <a href="https://twitter.com/js_fiddle/status/81118840553091072" target="_blank" title="Official callout for the app on twitter">this</a> and <a href="http://blog.jsfiddle.net/post/6567648573/official-launching-app-for-chrome" title="Blogpost in the jsFidde-Blog" target="_blank">this</a>. It's also featured in <a href="http://blog.chromium.org/2011/06/cloud-coding-and-beyond-web-development.html" title="Cloud Coding and Beyond: Web Development Apps in the Chrome Web Store" target="_blank">this blog-post</a> in the official Chromium-blog. You can also <a href="https://github.com/jsfiddle/jsfiddle-chrome-app" target="_blank">contribute</a> at github.</p>
              </div>
            </li>


            <!--! Carrotshop -->
            <li>
              <a href="#project-carrotshop" class="front">
                <img src="img/carrotshop.jpg" alt="">
                <h4>Google Chrome App - Carrotshop</h4>
              </a>
              <div id="project-carrotshop" class="back">
                <h3>Google Chrome App - Carrotshop</h3>
                <p><a href="http://carrotshop.org" target="_blank">Carrotshop.org</a> is a non profit afilliate network with Germany's most popular online stores. If you shop online Carrotshop gets commission and donates it to a climate protection project.</p>
                <p><a href="https://chrome.google.com/webstore/detail/ddmmkahencnehcofgocnahmleghjlihm" target="_blank">Visit</a> Chrome Web Store to view the app and download it.</p>
              </div>
            </li>
          
          </ul>
        </div>
      </section>
      
      <section class="tumblr">
        <h2><a href="http://drublic.tumblr.com/" target="_blank">Tumblr</a></h2>
        
        <div class="feed">
          <ul>
            <div class="loader"></div>
          </ul>
        </div>
      </section>
      

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
      
      <p>Please be aware of the fact that we store some of the data while you visit this this page. For doing this we mostly use <a href="http://piwik.org/" target="_blank">Piwik</a>.</p>
    </section>
    
    
    
    
    <!--! Contact -->
    <section class="contact">
      <h2>Contact me</h2>
      
      <div class="clearfix">
        <form action="contact/send" method="post">
          <p>Feel free to write me an email. But be aware that there are also other means of communication. If you have questions regarding a project, please contact me through the project's website. I am on <a href="http://twitter.com/#!/drublic" target="_blank">Twitter</a>.</p>
          
          <fieldset>
            <label for="contact-name">Name:</label>
            <input type="text" name="contact-name" id="contact-name">
          </fieldset>
          
          <fieldset>
            <label for="contact-mail">E-Mail:</label>
            <input type="email" name="contact-mail" id="contact-mail">
          </fieldset>
          
          <fieldset>
            <label for="contact-message">Your Message:</label>
            <textarea name="contact-message" id="contact-message"></textarea>
          </fieldset>
          
          <fieldset>
            <input type="submit" value="Send the Message">
          </fieldset>
        </form>
      </div>
      
    </section>
    
    
    <footer>

    </footer>
  </div>


  <!-- JavaScript at the bottom for fast page loading -->

  <!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if necessary -->
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="<?php base_url(); ?>js/libs/jquery-1.6.2.min.js"><\/script>')</script>


  <!-- scripts concatenated and minified via ant build script (prefix: <?php base_url(); ?>) -->
  <script defer src="<?php base_url(); ?>js/plugins.js"></script>
  <script defer src="<?php base_url(); ?>js/script.js"></script>
  <!-- end scripts -->
  
  <!-- Prompt IE 6 users to install Chrome Frame. Remove this if you want to support IE 6.
       chromium.org/developers/how-tos/chrome-frame-getting-started -->
  <!--[if lt IE 7 ]>
    <script defer src="//ajax.googleapis.com/ajax/libs/chrome-frame/1.0.3/CFInstall.min.js"></script>
    <script defer>window.attachEvent('onload',function(){CFInstall.check({mode:'overlay'})})</script>
  <![endif]-->

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