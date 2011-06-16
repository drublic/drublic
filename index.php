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

  <!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame
       Remove this if you use the .htaccess -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <title>@drublic - State of the Art Webdesign</title>
  <meta name="description" content="">
  <meta name="author" content="">

  <!-- Who did this page -->
  <link type="text/plain" rel="author" href="<?php base_url(); ?>humans.txt" /> 

  <!-- Mobile viewport optimized: j.mp/bplateviewport -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- styles concatenated CSS: implied media="all" (prefix: <?php base_url(); ?>)-->
  <link rel="stylesheet" href="<?php base_url(); ?>css/style.css?v=2">
  <link rel="stylesheet" href="<?php base_url(); ?>css/fancybox.css?v=2">
  <!-- end styles -->
  
  <meta name="description" content="@drublic - A short description of what I'm doing on the web. Mostly build with Tumblr and Twitter. Check out my projects.">
  <meta name="keywords" content="Hans Christian Reinl, Web 2.0, Internet, Webdesign, Freiburg, Wetzlar, Flipthemes">
  <link rel="canonical" href="<?php base_url(); ?>">
  <link rel="index" title="@drublic - State of the Art Webdesign" href="<?php base_url(); ?>">

  <!-- Uncomment if you are specifically targeting less enabled mobile browsers
  <link rel="stylesheet" media="handheld" href="css/handheld.css?v=2">  -->

  <!-- All JavaScript at the bottom, except for Modernizr which enables HTML5 elements & feature detects -->
  <script src="<?php base_url(); ?>js/libs/modernizr-1.7.min.js"></script>

  <!--! Typekit -->
  <script type="text/javascript" src="http://use.typekit.com/nls7qda.js"></script>
  <script type="text/javascript">try{Typekit.load();}catch(e){}</script>

</head>

<body>
  <section class="message nojs-active">Hey there! Please activate JavaScript in order to view this page.</section>

  <div id="container">
    <header>
      <nav>
        <ul>
          <li class="active"><a href="<?php base_url(); ?>home">Home</a></li>
          <li><a href="<?php base_url(); ?>imprint">Imprint</a></li>
          <li><a href="<?php base_url(); ?>contact">Contact</a></li>
        </ul>
      </nav>
      
      <div id="head">
        <a href="<?php base_url(); ?>">@drublic</a>
        <p>A short description of what I'm doing on the web. Mostly build with Tumblr and Twitter.</p>
      </div>
    </header>
    
    <div id="main" role="main">
      <section class="flipthemes">
        <h2><a href="http://flipthemes.de/" target="_blank">Flipthemes</a></h2>
        
        <div class="feed">
          <ul>
            <li>This stream is empty&hellip;</li>
          </ul>
        </div>
      </section>
      
      <section class="pagetimer">
        <h2><a href="http://pagetimer.de/" target="_blank">Pagetimer</a></h2>
        
        <div class="feed">
          <ul>
            <div class="loader"></div>
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
                <img src="img/jsfiddle.png" alt="">
                <span class="official"></span>
                <h4>Google Chrome App - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; jsFiddle</h4>
              </a>
              <div id="project-jsfiddle" class="back">
                <h3>Google Chrome App - jsFiddle</h3>
                <p><a href="http://jsfiddle.net" target="_blank">jsFiddle</a> is a pretty useful social coding tool. This is an app for Google Chrome which works like a bookmark.</p>
                <p><a href="https://chrome.google.com/webstore/detail/hiigmadmngbpbmacbkfngpkjfmmpagfk" target="_blank">Visit</a> Chrome Web Store to view the app and download it.</p>
                <p>Since 16th june 2011 it's the official jsFiddle Chrome Bookmark - check <a href="https://twitter.com/js_fiddle/status/81118840553091072" target="_blank">this</a>. You can also <a href="https://github.com/jsfiddle/jsfiddle-chrome-app" target="_blank">contribute</a> at github.</p>
              </div>
            </li>
            
            
            <!--! Carrotshop -->
            <li>
              <a href="#project-carrotshop" class="front">
                <img src="img/carrotshop.png" alt="">
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
  </div> <!--! end of #container -->


  <!-- JavaScript at the bottom for fast page loading -->

  <!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if necessary -->
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.js"></script>
  <script>window.jQuery || document.write("<script src='<?php base_url(); ?>js/libs/jquery-1.6.1.min.js'>\x3C/script>")</script>


  <!-- scripts concatenated and minified via ant build script (prefix: <?php base_url(); ?>)-->
  <script src="<?php base_url(); ?>js/plugins.js"></script>
	<script src="<?php base_url(); ?>js/mylibs/fancybox/jquery.fancybox-1.3.4.pack.js"></script>
  <script src="<?php base_url(); ?>js/twitter-text.js"></script>
  <script src="<?php base_url(); ?>js/script.js"></script>
  <!-- end scripts-->


  <!--[if lt IE 7 ]>
    <script src="js/libs/dd_belatedpng.js"></script>
    <script>DD_belatedPNG.fix("img, .png_bg"); // Fix any <img> or .png_bg bg-images. Also, please read goo.gl/mZiyb </script>
  <![endif]-->
  
  <!-- Piwik --> 
  <script type="text/javascript">
  var pkBaseURL = (("https:" == document.location.protocol) ? "https://drublic.de/piwik/" : "http://drublic.de/piwik/");
  document.write(unescape("%3Cscript src='" + pkBaseURL + "piwik.js' type='text/javascript'%3E%3C/script%3E"));
  </script><script type="text/javascript">
  try {
  var piwikTracker = Piwik.getTracker(pkBaseURL + "piwik.php", 1);
  piwikTracker.trackPageView();
  piwikTracker.enableLinkTracking();
  } catch( err ) {}
  </script><noscript><p><img src="http://drublic.de/piwik/piwik.php?idsite=1" style="border:0" alt="" /></p></noscript>
  <!-- End Piwik Tracking Code -->
</body>
</html>