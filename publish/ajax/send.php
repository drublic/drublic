<?php
  
  
  // Define input-array
  $form = array();
  
  // Define output-array
  $output = array();
  // Itterate through _POST-Array to get 
  foreach ($_POST as $key => $val) :
    if (empty($val)) $output['msg'] = 'Empty';
    else $form[] = array('key' => $key, 'val' => strip_tags(trim(strtr($val, "\n\r", ''))));
  endforeach;
  
  if (isset($output['msg'])) :
    $output['error'] = true;

  else :
    
	  $header = "From: contact@drublic.de\r\n";
	  
	  $mailtxt = 'Somebody wrote you an email.\n';
	  
	  foreach ($form as $field) : 
      $mailtxt .= $field['key'] . ': ' . $field['val'] . '\n';
    endforeach;
	  
    mail('contact@drublic.de', 'Question through the website', $mailtxt, $header);
    
    $output['msg'] = 'Thanks! Your message was sent.';
    $output['success'] = true;
  
  endif;
  
  
  print json_encode($output);

?>