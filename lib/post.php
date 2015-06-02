<?php
  function get_posts ($current_post) {
    $path = './posts';
    $entries = array();

    if ($handle = opendir($path)) {
      while (false !== ($entry = readdir($handle))) {
        if ($entry != '.' && $entry != '..') {

          $url = explode('-', $entry);
          array_shift($url);
          $url = implode('-', $url);

          if (isset($current_post)) {
            if ($url == $current_post) {
              $entries[] = array(
                'post' => $entry,
                'url' => $url,
                'data' => getJsonContents($path . '/' . $entry . '/data.json'),
                'entry' => file_get_contents($path . '/' . $entry . '/article.md')
              );
            }
          } else {
            $entries[] = array(
              'post' => $entry,
              'url' => $url,
              'data' => getJsonContents($path . '/' . $entry . '/data.json')
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

  function get_abstract ($entry) {
    $abstract = substr(strip_tags($entry, '<h2><h3><p><a>'), 0, 540);

    return $abstract;
  }
