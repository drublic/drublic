<?php

  require_once('../lib/Markdown/Markdown.inc.php');

  function get_posts ($current_post) {
    $path = './posts';
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

        if (isset($current_post)) {
          if ($url == $current_post) {
            $entries[] = array(
              'post' => $file,
              'url' => $url,
              'data' => getJsonContents($path . '/' . $file . '/data.json'),
              'entry' => file_get_contents($path . '/' . $file . '/article.md')
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

    return $entries;
  }


  function get_current_postname () {
    global $page_action;

    $actions = explode('/', $page_action);

    return $actions[1];
  }

  function get_post ($current_post) {
    $postname = get_current_postname();
    return get_posts($postname)[0];
  }
