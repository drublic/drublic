<?php

  require_once('../lib/Markdown/Markdown.inc.php');

  function get_posts ($current_post = false, $get_full = false) {
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

        if ((isset($current_post) && $current_post) || (isset($get_full) && $get_full)) {
          if ($url == $current_post || $get_full) {
            $entries[] = array(
              'post' => $file,
              'url' => $url,
              'data' => getJsonContents($path . '/' . $file . '/data.json'),
              'entry' => file_get_contents('./posts/' . $file . '/article.md')
            );
          }
        } else {
          if (is_dir($path . '/' . $file)) {
            $entries[] = array(
              'post' => $file,
              'url' => $url,
              'data' => getJsonContents($path . '/' . $file . '/data.json')
            );
          }
        }
      }

      closedir($handle);
    }

    // Hide hidden entries
    foreach ($entries as $key => $entry) {
      if (isset($entry['data']->hidden) && $entry['data']->hidden == true && !isset($_REQUEST['preview'])) {
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

  function get_post () {
    $postname = get_current_postname();
    $postname = get_posts($postname);

    return $postname[0];
  }

  function get_date ($date, $format = 'Y-m-d') {
    $timestamp = strtotime($date);

    return date($format, $timestamp);
  }
