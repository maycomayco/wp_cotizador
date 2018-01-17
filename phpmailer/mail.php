<?php
try{
     // Your code
}
catch(Throwable $e) {
    $trace = $e->getTrace();
    echo $e->getMessage().' in '.$e->getFile().' on line '.$e->getLine().' called from '.$trace[0]['file'].' on line '.$trace[0]['line'];
}
/**
 * This example shows making an SMTP connection with authentication.
 */
//SMTP needs accurate times, and the PHP time zone MUST be set
//This should be done in your php.ini, but this is how to do it if you don't have access to that
date_default_timezone_set('Etc/UTC');
require 'PHPMailerAutoload.php';
//Create a new PHPMailer instance

$mail = new PHPMailer;

//Tell PHPMailer to use SMTP
$mail->isSMTP();

//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 1;

//Ask for HTML-friendly debug output
$mail->Debugoutput = 'html';

//Set the hostname of the mail server
// $mail->Host = "mail.hacetuseguro.com.ar";
$mail->Host = 'srv04.asso.com.ar';

//Set the SMTP port number - likely to be 25, 465 or 587
$mail->Port = 25;
// $mail->Port = 587;

//Whether to use SMTP authentication
$mail->SMTPAuth = true;
// $mail->SMTPSecure = 'tls';

//Username to use for SMTP authentication
// $mail->Username = "info@hacetuseguro.com.ar";
$mail->Username = "envios@e-mail.kinexo.com";

//Password to use for SMTP authentication
// $mail->Password = "[xIEWpD3,)6O";
$mail->Password = "rojo_s3Queda";

//Set who the message is to be sent from
$mail->setFrom('reservas@hotellossilos.com.ar', 'Hotel Los Silos');

//Set an alternative reply-to address
$mail->addReplyTo('replyto@example.com', 'First Last');

//Set who the message is to be sent to
$mail->addAddress('eleiva@rbmwebsolutions.com', 'Mayco');

//Set the subject line
$mail->Subject = 'Test de envio de emails';

//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->msgHTML(file_get_contents('contents.html'), dirname(__FILE__));

//Replace the plain text body with one created manually
$mail->AltBody = 'This is a plain-text message body';

//Attach an image file
// $mail->addAttachment('images/phpmailer_mini.png');

//send the message, check for errors
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "<h2>Message sent!</h2>";
}