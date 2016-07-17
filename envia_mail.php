	<?php
	$enviado = 0;
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
		$to			= "hippiechaka@gmail.com";
		$subject	= "Jouxbe - Comentario de ".$_REQUEST['nombre'];

		@mail($to , $subject, $body2, $headers);

		$enviado = 'OK';
	}
    ?>