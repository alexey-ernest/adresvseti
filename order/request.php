<?php

date_default_timezone_set('Asia/Novosibirsk');

require '../include/LittleSMS.class.php';
require '../include/PHPMailer/class.phpmailer.php';

$name = $_POST['name'];
$contacts = $_POST['contacts'];
$comments = $_POST['comments'];

if (!$name || !$contacts)
{
	// name and phone required
	header('Location: error.html');
	return;
}


// creating sms proxy object
$sms = new LittleSMS('ernest', 'reTdznZNzLN5', false, false);

$ordererName = $name ? substr($name, 0, 40) : null;
$toPhone = '79234091479';

// building message
if ($ordererName)
{
    $message = "Заказ сайта на имя {$ordererName}, контакты: {$contacts}";
}
else
{
    $message = "Заказ сайта, контакты: {$contacts}";
}

if ($comments)
{
	$message .= ". {$comments}";
}


// dublicating message to email
$address = 'adresvseti.ru@gmail.com';
$senderEmail = 'order@adresvseti.ru';

$mail = new PHPMailer(true);
    
try 
{
    $mail->CharSet = 'utf-8';
    $mail->AddReplyTo($senderEmail);
    $mail->AddAddress($address);
    $mail->SetFrom($senderEmail);
    $mail->AddReplyTo($senderEmail);
    
    $mail->Subject = "Заказ сайта, контакты: {$contacts}";
    $mail->MsgHTML($message);
    $mail->Send();
}
catch (Exception $e) 
{
    // mailing error, nothing doing
}


// sending sms message
$sms->sendSMS($toPhone, $message, 'adresvseti');

// getting sms response
$response = $sms->getResponse();
if ($response['status'] == 'success')
{
    // success, showing success page
	header('Location: success.html');
}
else
{
    // showing error page
    header('Location: error.html');
}

?>