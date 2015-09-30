<?php
  require_once('../lib/Markdown/Markdown.inc.php');

  use \Michelf\Markdown;

  $parser = new Markdown;
  $parser->url_filter_func = function ($url) {
    return get_current_postpath() . $url;
  };

  function get_post_file ($filepath) {
    global $parser;

    $contents = '';

    if (file_exists($filepath)) {
      $contents = file_get_contents($filepath);
    }

    return $parser->transform($contents);
  }

  function get_posts ($current_post = false, $get_full = false, $single = false) {
    global $config, $parser;

    $path = getcwd() . '/posts';
    $files = array();
    $entries = array();

    if ($handle = opendir($path)) {
      while (false !== ($entry = readdir($handle))) {
        if ($entry != '.' && $entry != '..' &&  $entry != '.DS_Store') {
          $files[] = $entry;
        }
      }
      rsort($files);

      foreach ($files as $file) {
        $url = explode('-', $file);
        array_shift($url);
        $url = implode('-', $url);

        if (((isset($current_post) && $current_post) || (isset($get_full) && $get_full)) && $single === false) {
          if ($url == $current_post || $get_full) {
            $entries[] = array(
              'post' => $file,
              'url' => $url,
              'data' => getJsonContents($path . '/' . $file . '/data.json'),
              'entry' => get_post_file($path . '/' . $file . '/article.md')
            );
          }
        } else {
          if (is_dir($path . '/' . $file)) {
            if (($single && $url == $current_post) || $single === false) {
              $entries[] = array(
                'post' => $file,
                'url' => $url,
                'data' => getJsonContents($path . '/' . $file . '/data.json'),
                'path' => '/' . $file . '/'
              );
            }
          }
        }
      }

      closedir($handle);
    }

    // Hide hidden entries
    foreach ($entries as $key => $entry) {
      if (isset($entry['data']->hidden) && $entry['data']->hidden == true && $config['preview'] === false) {
        array_splice($entries, $key, 1);
      }
    }

    return $entries;
  }


  function get_current_postname () {
    global $page_action;

    $actions = explode('/', $page_action);

    return $actions[1];
  }

  function get_current_postpath () {
    global $page_action;

    $actions = explode('/', $page_action);

    $postname = get_current_postname();
    $postname = get_posts($postname, false, true);

    return base_url(false) . 'posts' . $postname[0]['path'];
  }

  function get_post () {
    $postname = get_current_postname();
    $postname = get_posts($postname);

    return $postname[0];
  }

  function get_date ($date, $format = 'Y-m-d') {
    $timestamp = strtotime($date);

    return date($format, $timestamp);
  }
