<?php

  include('settings.php');

  include('../src/config.php');

  include_once('post.php');

  $_file = '';

  $allowedHosts = array(
    'http://drublic.local/',
    'https://drublic.de/'
  );

  if (isset($_GET['file'])) {
    $_file = $_GET['file'];
  }

  $page_action = trim($_file, '/');

  // When no file is requested, use index method
  if (empty($page_action)) {
    $page_action = 'index';
  }

  function get_host () {
    $host = '://' . $_SERVER['SERVER_NAME'] . '/';

    if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') {
      return 'https' . $host;
    }

    return 'http' . $host;
  }

  $environment = (get_host() == $allowedHosts[0]) ? 'dev' : 'production';

  // Generate base url
  function base_url ($print = true) {
    global $environment;
    global $allowedHosts;

    $hostname = get_host();
    $index = array_search($hostname, $allowedHosts);

    if ($index > -1) {
      $base = $allowedHosts[$index];
    }

    if ($print) {
      print $base;

      return;
    }

    return $base;
  }


  // Return the current file path
  // @return string file path
  function get_file_path () {
    global $page_action, $environment;

    // Get properties of current page
    $page = get_page_properties();

    // Load error page when action does not exist
    if (empty($page)) {
      $file = 'templates/error.html';
    } else {
      $file = $page->content;
    }

    // If file exists
    if ($environment == 'dev') {
      if (file_exists('../src/' . $file)) {
        return '../src/' . $file;
      }
    } else {
      if (file_exists('../public/' . $file)) {
        return '../public/' . $file;
      }
    }
  }

  function getJsonContents ($filename) {
    if (file_exists($filename)) {
      $file = file_get_contents($filename);

      return json_decode($file);
    }

    return json_decode('');
  }

  // Set package
  $package = getJsonContents(dirname(__FILE__) . '/../package.json');

  // Set stucture
  $structure = getJsonContents(dirname(__FILE__) . '/../pages.json');

  // Convenience function to return page properies for action
  // @param $action
  // @return object with page structure or NULL
  function get_page_properties () {
    global $structure, $page_action;

    $actions = explode('/', $page_action);

    if ($actions[0] == 'blog' && isset($actions[1])) {
      $actions[0] = 'blog-post';
    }

    // Check if action is allowed
    for ($i = 0; $i < count($structure); $i++) {
      if ($structure[$i]->action == $actions[0]) {
        return $structure[$i];
      }
    }

    // If action isn't available, return NULL
    return NULL;
  }

  // Return version
  function get_version () {
    global $package;

    return $package->version;
  }

  // Function to return the title
  function get_page_title ($print = true) {
    global $page_action;

    // Get properties of current page
    $page = get_page_properties($page_action);

    if (empty($page)) {
      $title = 'Not Found';
    } else {
      $title = $page->title;
    }

    if ($print) {
      print $title;
    } else {
      return $title;
    }
  }

  // Function to activate current navigation item
  function set_navigation_item_active ($action, $print = true) {
    global $page_action;

    $actions = explode('/', $page_action);

    if ($action == $actions[0]) {
      if ($print) {
        print 'is-active';
      } else {
        return true;
      }
    }
  }

  // send Header if necessary
  function set_headers () {
    global $page_action;

    // Set security header
    function isSSL(){
      if (isset($_SERVER['https']) &&
          ($_SERVER['https'] == 1 || $_SERVER['https'] == 'on')) {
        return TRUE;
      } elseif ($_SERVER['SERVER_PORT'] == 443) { // others
        return TRUE;
      }

      return FALSE; // just using http
    }

    if (isSSL()) {
      header('strict-transport-security: max-age=64000');
    }

    // Send 404 if empty
    $page = get_page_properties($page_action);
    $post = get_post();
    if (empty($page) || ($page->action == 'blog-post' && $post == '')) {
      header('HTTP/1.0 404 Not Found');
    }
  }


  // Build page
  set_headers();

  // For forms, check stuff correctly

  if ($page_action == 'form') {
    require('../lib/form.php');
  }

  if ($page_action == 'feed.xml') {
    header('Content-Type: application/xml; charset=utf-8');

    include(get_file_path());

    die();
  }
