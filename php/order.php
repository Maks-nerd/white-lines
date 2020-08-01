<?php

$name = isset($_POST["name"]) 	? '<br><b>Имя:</b> '.$_POST["name"] : null;
$tel = isset($_POST["tel"]) ? '<br><b>Телефон:</b> '.$_POST["tel"] : null;
$email = isset($_POST["email"]) ? '<br><b>Почта:</b> '.$_POST["email"] : null;

//if ($phone) $adminemail = "artur@planetatalantov.ru";
//else 
$adminemail = "maksutka200@gmail.com";

$subject_mail = "Заявка";


if ($tel or $email) {
	
	if ($name)
		$content .= $name;
	if ($tel)
		$content .= $tel;
	if ($email)
		$content .= $email;
	
	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=utf-8\r\n";

	if (mail($adminemail, $subject_mail, $content, $headers))
		echo 'Спасибо за заявку!';
	else
		echo 'Ошибка';
} 
else echo 'Form not require';

?>