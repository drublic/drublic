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

  <title>Source Access Designz</title>
  <meta name="description" content="">
  <meta name="author" content="">

  <!-- Mobile viewport optimized: j.mp/bplateviewport -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Place favicon.ico & apple-touch-icon.png in the root of your domain and delete these references -->
  <link rel="shortcut icon" href="/favicon.ico">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">


  <!-- CSS: implied media="all" -->
  <link rel="stylesheet" href="css/style.css?v=2">

  <!-- Uncomment if you are specifically targeting less enabled mobile browsers
  <link rel="stylesheet" media="handheld" href="css/handheld.css?v=2">  -->

  <!-- All JavaScript at the bottom, except for Modernizr which enables HTML5 elements & feature detects -->
  <script src="js/libs/modernizr-1.7.min.js"></script>

</head>

<body>

  <div id="container">
    <header>
      <hgroup>
        <a href="/">Source Access Designz</a>
      </hgroup>
    </header>
    
    <div id="main" role="main">
      <section class="flipthemes">
        <h2>Flipthemes</h2>
        <a href="http://flipthemes.de/" target="_blank">Flipthemes</a>
        
        <div class="feed">
          &hellip;
        </div>
      </section>
      
      <section class="pagetimer">
        <h2>Pagetimer</h2>
        <a href="http://pagetimer.de/" target="_blank">Pagetimer</a>
        
        <div class="feed">
          <ul>
          </ul>
        
        </div>
      </section>
      
      <section class="twitter">
        <h2>Twitter</h2>
        <a href="http://twitter.com/drublic" target="_blank">Twitter</a>
        
        <div class="feed">
          <ul>
            <?php
              // Es wird ein Array angelegt, in dem dann die wichtigsten Daten gespeichert werden.
              $data = 'http://www.twitter.com/status/user_timeline/pagetimer.json?count=10';
              
              // Es wird geprŸft ob die Php Funktion simplexml_load_file existiert.
              if(!function_exists('file_get_contents'))
              	die ('{ "error" : "Ihre PHP Version unterstŸtzt die Funktion simplexml_load_file leider nicht." }');
              
              
              
              // Als nŠchstes wird die User Timeline eingelesen oder ein Fehler ausgegeben.
              if(!@$twitter=file_get_contents($data)) :
                // Fehlermeldung
              	print '{ "error" : "Es ist ein Fehler bei der Verbindung zu Twitter aufgetreten." }';
              else :
                // Ausgabe des Usernames und der Nachricht.
                $twitter = json_decode($twitter);
                
                foreach ($twitter as $tweet) :
                  print '<li>';
                  print '<p>' . $tweet->text . '</p>';
                  ?>
                    <a href="http://twitter.com/drublic/status/<?php print $tweet->id; ?>" target="_blank" class="date"><?php print $tweet->created_at; ?></a>
                  <?php
                  print '</li>';
                endforeach;
              endif;

            ?>
          </ul>

        </div>
      </section>
      
      <section class="projects">
        <h2>Latest Projects</h2>
        <a href="">Latest Projects</a>
        
        <div class="feed">
          
        </div>
      </section>
      
      <section class="small tumblr">
        <h2>Tumblr</h2>
        <a href="http://drublic.tumblr.com/" target="_blank">Tumblr</a>
        
        <div class="feed">
        
        </div>
      </section>
    </div>
    <footer>

    </footer>
  </div> <!--! end of #container -->


  <!-- JavaScript at the bottom for fast page loading -->

  <!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if necessary -->
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.js"></script>
  <script>window.jQuery || document.write("<script src='js/libs/jquery-1.5.1.min.js'>\x3C/script>")</script>


  <!-- scripts concatenated and minified via ant build script-->
  <script src="js/plugins.js"></script>
  <script src="js/script.js"></script>
  <!-- end scripts-->


  <!--[if lt IE 7 ]>
    <script src="js/libs/dd_belatedpng.js"></script>
    <script>DD_belatedPNG.fix("img, .png_bg"); // Fix any <img> or .png_bg bg-images. Also, please read goo.gl/mZiyb </script>
  <![endif]-->


  <!-- mathiasbynens.be/notes/async-analytics-snippet Change UA-XXXXX-X to be your site's ID -->
  <script>
    var _gaq=[["_setAccount","UA-XXXXX-X"],["_trackPageview"]];
    (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];g.async=1;
    g.src=("https:"==location.protocol?"//ssl":"//www")+".google-analytics.com/ga.js";
    s.parentNode.insertBefore(g,s)}(document,"script"));
  </script>

</body>
</html>