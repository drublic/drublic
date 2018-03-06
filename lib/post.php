<?php
  require_once('../lib/Markdown/MarkdownExtra.inc.php');

  use \Michelf\MarkdownExtra;

  $parser = new MarkdownExtra;
  $parser->url_filter_func = function ($url) {
    if (substr($url, 0, 7) === 'http://' || substr($url, 0, 8) === 'https://') {
      return $url;
    }

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

    $path = getcwd() . '/../src/posts';
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
              $data = getJsonContents($path . '/' . $file . '/data.json');

              if ((!isset($data->hidden) || $data->hidden == false) || $config['preview'] == true) {
                $entries[] = array(
                  'post' => $file,
                  'url' => $url,
                  'data' => $data,
                  'path' => '/' . $file . '/'
                );
              }
            }
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

    if (isset($actions[1])) {
      return $actions[1];
    }

    return $actions[0];
  }

  function get_current_postpath () {
    global $page_action;

    $actions = explode('/', $page_action);

    $postname = get_current_postname();
    $postname = get_posts($postname, false, true);

    if (isset($postname[0])) {
      return base_url(false) . 'posts' . $postname[0]['path'];
    } else {
      return base_url(false) . 'posts';
    }
  }

  function get_current_posttitle () {
    global $page_action;

    $actions = explode('/', $page_action);

    $postname = get_current_postname();
    $postname = get_posts($postname, false, true);

    if (isset($postname[0])) {
      return $postname[0]['data']->title;
    }

    return 'Page Not Found';
  }

  function get_post () {
    $postname = get_current_postname();
    $postname = get_posts($postname);

    if (count($postname) != 0) {
      return $postname[0];
    }

    return '';
  }

  function get_date ($date, $format = 'Y-m-d') {
    $timestamp = strtotime($date);

    return date($format, $timestamp);
  }
