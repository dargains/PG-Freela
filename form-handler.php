<?php
$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];
$myemail = 'contato@studiotagus.com';

$email_subject = "Contato de $name";
$email_body = "Name: $name \n ".
"Email: $email_address\n Mensagem: \n $message";
$headers = "From: $email_address\n";
mail($myemail,$email_subject,$email_body,$headers);
//redirect to the 'thank you' page
header('Location: index.html');
?>
