<?php
  $defaults = array(
    'preview' => false,
    'testimonials' => false
  );

  $settings = array();

  foreach ($_REQUEST as $key => $value) {
    $settings[$key] = ($value === 'true');
  }

  $config = array_merge($defaults, $settings);
