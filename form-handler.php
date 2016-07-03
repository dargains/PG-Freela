<?php
$errors = '';
$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];
$myemail = 'contato@studiotagus.com';
if(empty($name)  ||
   empty($email_address) ||
   empty($message))
{
    $errors .= "\n Erro: todos os campos são necessários";
}

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",

$email_address)) {
    $errors .= "\n Erro: endereço de e-mail inválido.";
}

if (empty($errors)) {
    $email_subject = "Contato de $name";
    $email_body = "Novo contato: ".
    " Nome:\n Name: $name \n ".
    "Email: $email_address\n Mensagem: \n $message";
    $headers = "From: $email_address\n";
    mail($myemail,$email_subject,$email_body,$headers);
    //redirect to the 'thank you' page
    header('Location: index.html');
}
?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<title>Contact form handler</title>
</head>

<body>
<!-- This page is displayed only if there is some error -->
<?php
echo nl2br($errors);
?>


</body>
</html>
