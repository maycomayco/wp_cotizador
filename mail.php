<?php
/**
 * This example shows making an SMTP connection with authentication.
 */
//SMTP needs accurate times, and the PHP time zone MUST be set
//This should be done in your php.ini, but this is how to do it if you don't have access to that
date_default_timezone_set('Etc/UTC');
require 'phpmailer/PHPMailerAutoload.php';

// DESDE donde se envia
$host            = 'srv04.asso.com.ar';
$port            = 25; 
$username        = 'envios@e-mail.kinexo.com';
$password        = "rojo_s3Queda";
$emailFrom       = 'hola@cotizadorseguros.kinexo.com';
$nameFrom        = 'Cotizador KNX';

// Datos del PRODUCTOR
$emailProductor  = 'mbarale@kinexo.com';
$nameProductor   = 'Productor Nombre';

// Datos del INTERESADO
$nombre          = $_POST['nombre'];
$apellido        = $_POST['apellido'];
$email           = $_POST['email'];
$telefono        = $_POST['telefono'];

$marca           = $_POST['marca'];
$grupo           = $_POST['grupo'];
$anio            = $_POST['anio'];
$modelo          = $_POST['modelo'];
$provincia       = $_POST['provincia'];
$localidad       = $_POST['localidad'];
$edad            = $_POST['edad'];
$genero          = $_POST['genero'];
$asunto          = $_POST['asunto'];

$compania        = $_POST['compania'];
$cobertura       = $_POST['cobertura'];
$costo           = $_POST['costo'];
$codigo          = $_POST['codigo'];
$descripcion = $_POST['descripcion'];
$periodo     = $_POST['periodo'];

$cc          = $_POST['cc'];

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
$mail->Debugoutput = 'echo';

//Set the hostname of the mail server
$mail->Host = $host;

//Set the SMTP port number - likely to be 25, 465 or 587
$mail->Port = $port; 

//Whether to use SMTP authentication
$mail->SMTPAuth = true;

//Username to use for SMTP authentication
$mail->Username = $username;

//Password to use for SMTP authentication
$mail->Password = $password;

//Set who the message is to be sent from
$mail->setFrom('noreply@cotizadorseguros.com', 'Cotizador de Seguros');

//Set an alternative reply-to address
$mail->addReplyTo($email, $nombre + ' ' + $apellido);

//Set who the message is to be sent to
$mail->addAddress($emailProductor, $nameProductor);

// set CC field
if ($cc == 1) {
	$mail->addCC($email, $nombre + ' ' + $apellido);
}

//Content
$mail->isHTML(true);                                  // Set email format to HTML
//Set the subject line
$mail->Subject = $asunto;

$body =  '<p>Esta persona esta interesada sobre la cotizaci&oacute;n de veh&iacute;culo, estos son sus datos.</p><br>';
$body .=  '<p><b>DATOS PERSONALES</b><br>';
$body .=  '------------------<br>';
$body .= 'Nombre: ' . $nombre . ' ' . $apellido . '<br>';
$body .= 'Email: ' . $email . '<br>';
$body .= 'Tel&eacute;fono: ' . $telefono . '<br>';
$body .= 'Localidad: ' . $localidad . ' - ' .$provincia . '<br>';
$body .= 'G&eacute;nero: ' . $genero . '<br>';
$body .=  '<br>';
$body .=  '<b>DATOS DEL VEH&Iacute;CULO</b><br>';
$body .=  '------------------<br>';
$body .= 'Marca: ' . $marca . '<br>';
$body .= 'Grupo: ' . $grupo . '<br>';
$body .= 'A&ntilde;o: ' . $anio . '<br>';
$body .= 'Modelo: ' . $modelo . '</p>';

if (isset($_POST['compania'])) {
	$body .=  '<b>DATOS DE LA COBERTURA</b><br>';
	$body .=  '------------------<br>';
	$body .= 'Compa&ntilde;ia: ' . $compania . '<br>';
}
if (isset($_POST['cobertura'])) {
	$body .= 'Cobertura: ' . $cobertura . '<br>';
}
if (isset($_POST['codigo'])) {
	$body .= 'C&oacute;digo: ' . $codigo . '<br>';
}
if (isset($_POST['descripcion'])) {
	$body .= 'Descripci&oacute;n: ' . $descripcion . '<br>';
}
if (isset($_POST['periodo'])) {
	$body .= 'Per&iacute;odo: ' . $periodo . '<br>';
}

$mail->Body    = $body;



//send the message, check for errors
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
}