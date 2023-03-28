<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];


  $to = 'votreadresse@example.com';
  $headers = "From: $email";
  $body = "Sujet : $subject\n\n$message";


  if (mail($to, $subject, $body, $headers)) {
    header('Location: confirmation.html');
  } else {
    echo 'Une erreur s\'est produite lors de l\'envoi de l\'e-mail. Veuillez réessayer.';
  }
}

?>
