<?php
	/*$enviado = 0;
	if(!empty($_REQUEST['nombre'])){

		$body2 = "
		Nombre: ".$_REQUEST['nombre']."<br />
		E-mail: ".$_REQUEST['email']."<br />
		City: ".$_REQUEST['city']."<br />
		Mensaje: ".nl2br($_REQUEST['mensaje']);

		$headers = "From: Jouxbe <info@jouxbeaustralia.com>\n";
		$headers .= "Reply-To: Jouxbe <info@jouxbeaustralia.com>\n";
		$headers .= 'Content-Type: text/html;';
		$headers .= "MIME-Version: 1.0\n";
		$headers .= "Content-Transfer-Encoding: 8bit\n";
		$headers .= "X-Priority: 1\n";
		$headers .= "X-Mailer: PHPMailer [version 1.72]\n";
		$headers .= "X-AntiAbuse: This header was added to track abuse, please include it with any abuse report\n";
		$headers .= "X-AntiAbuse: Primary Hostname - jouxbeaustralia.com\n";
		$headers .= "X-AntiAbuse: Original Domain - jouxbeaustralia.com\n";
		$headers .= "X-AntiAbuse: Originator/Caller UID/GID - [99 99] / [47 12]\n";
		$headers .= "X-AntiAbuse: Sender Address Domain - jouxbeaustralia.com\n";
		$headers .= "X-Source: \n";
		$headers .= "X-Source-Args: \n";
		$headers .= "X-Source-Dir: \n";

		$from		= "Jouxbe <no-reply@jouxbeaustralia.com>";
		$to			= "omar.val2189@gmail.com";
		$subject	= "Jouxbe - Comentario de ".$_REQUEST['nombre'];

		@mail($to , $subject, $body2, $headers);

		$enviado = 'OK';
	}*/
	//var_dump($_POST);
	$to  = 'hippiechaka@gmail.com';
    $title = 'Jouxbe Australia - Formulario de Contacto';

    $message = '<html>
                    <head>
                      <title>Jouxbe</title>
                    </head>
                    <body>
                        <p>Jouxbe Australia - Formulario de Contacto</p>
                        <br>
                        <hr>  
                        <p>Nombre:</p>
                        <p>'.$_POST['nombre'].'</p>
                        <hr>
                        <p>Email:</p>
                        <p>'.$_POST['email'].'</p>
                        <hr>
                        <p>Ciudad:</p>
                        <p>'.$_POST['city'].'</p>
                        <hr>
                        <p>Mensaje:</p>
                        <p>'.$_POST['mensaje'].'</p>
                        <br>
                    </body>
                </html>
                ';

    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= 'From: Jouxbe Australia <no-reply@jouxbeaustralia.com>' . "\r\n";
    $mail = mail($to, $title, $message, $headers);
    if($mail){
    	header('Location: http://jouxbeaustralia.com/contact-us.html?success=1');
    }else{
    	header('Location: http://jouxbeaustralia.com/contact-us.html?success=0');
    }
?>