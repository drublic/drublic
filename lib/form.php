<?php

  function verifyData () {
    $post = $_POST;

    if ($post['comment'] != '' || $post['url'] != '') {
      $data = array(
        'success' => 0,
        'ErrorText' => 'An error occured.'
      );

      echo $data;
      exit();
    }
  }

  function submit () {
    $ref = curl_init('https://drublic.wufoo.com/api/v3/forms/z9s7uxb1tmwf7d/entries.json');

    curl_setopt($ref, CURLOPT_HTTPHEADER, array('Content-type: multipart/form-data'));
    curl_setopt($ref, CURLOPT_POST, true);
    curl_setopt($ref, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ref, CURLOPT_POSTFIELDS, getPostParams());
    curl_setopt($ref, CURLOPT_USERPWD, '3EQQ-RVHK-4W68-VJ60');
    curl_setopt($ref, CURLOPT_HTTPAUTH, CURLAUTH_ANY);
    curl_setopt($ref, CURLOPT_SSL_VERIFYPEER, false);
    //http://bugs.php.net/bug.php?id=47030
    curl_setopt($ref, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($ref, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ref, CURLOPT_USERAGENT, 'Wufoo.com');

    $answer = curl_exec($ref);

    echo $answer;
  }

  function getPostParams () {
    $post = $_POST;

    $response = array();

    $response['Field11'] = $post['form-name'];
    $response['Field3'] = $post['form-email'];

    if ($post['form-website']) {
      $response['Field4'] = $post['form-website'];
    }

    $response['Field113'] = $post['form-message'];

    return $response;
  }

  verifyData();
  submit();

exit();
