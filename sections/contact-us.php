<?  

  $enviado = 0;

      $nombre      = "";
      $email       = "";
      $ciudad      = "";
      $comentario    = "";


  if(!empty($_REQUEST['email'])){
      $emails      = EMAIL_CONTACTO;
      $dominio     = $domain;
      $fecha       = date('d/m/Y');
      $nombre      = $_REQUEST['nombre'];
      $email       = $_REQUEST['email'];
      $ciudad      = $_REQUEST['ciudad'];
      $comentario  = $_REQUEST['comentario'];
      
      
      $body   = file_get_contents('sections/forms/email.php');
      $body     = str_replace( array('{dominio}', '{fecha}', '{nombre}', '{email}' , '{ciudad}', '{comentario}' ), array($dominio, $fecha, $nombre, $email, $ciudad, $comentario), $body );  
      
      $headers = "From: JOUXBE <info@jouxbeaustralia.com>\n";
      $headers .= "Reply-To:JOUXBE <no-reply@jouxbeaustralia.com>\n";
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
    
      $subject  = "Correo de contacto - ".$nombre;
      
      mail($emails , $subject, $body, $headers) or die("Error Send mail");    
      $enviado = 1;     
    
 
      
  }
?>
<script src="js/parallax.js"></script>
<div class="parallax-window" data-parallax="scroll" data-image-src="images/sample-header.jpg"></div>
 <!-- LEFT -->

 <div class="col-md-6 bgCian left">

 	<div class="half_safe_area right">
 		<div class="contactoTxt">
      <div id="jouxbeContact"><!-- Jouxbe --></div>
	 		<h3>Mexican Jewellery</br><span>Gold Layered</span></h3>
	 		<div class="redesContacto">
				<a target="_blank" href="" class="BTN-redes" id="facebook" title="Follow Us on facebook"></a>
			</div>
 		</div>
 	</div>

 </div>


<!-- RIGHT -->

 <div class="col-md-6 right">
 	<div class="half_safe_area left">

<form id="forma_contacto" method="post">
  <?php 
  if ($enviado){
?>
  <br><br><br><br>
  <center>
    <h2>Your message has been sent successfully</h2>
    <h3>Thanks for your comments!</h3>
  </center>
<?    
  }else{
?>
  <form action="" method="post" id="forma_contacto">
    <label class="textocampo">Name:</label>
    <input type="text" class="field required" name="nombre" title="This field is required" value="" />
    <div class="contactSpace"></div>
    <label class="textocampo">Email:</label>
    <input type="text" class="field required email" name="email" title="valid e-mail please" value="" />
    <div class="contactSpace"></div>
    <label class="textocampo">City:</label>
    <input type="text" class="field required" name="ciudad" title="This field is required" value="" />
    <div class="contactSpace"></div>
    <label class="textocampo">Comments:</label>
    <textarea class="fieldArea required" name="comentario" title="This field is required"></textarea>
    <div class="contactSpace"></div>

    <p class="indicacion">
      All fields are required<br>
      <input type="checkbox" name="avisoPrivacidad" value="avisoPrivacidad" class="required"> I read and accept the treatment of my data according to <a href="" target="blank">PRIVACY NOTICE</a>
    </p>
    <div class="contactSpace"></div>

    <input type="submit" class="sendBtn" value="Send" />  
  </form>
<?
  } 
  ?>


  </div>
  </div>

  <div class="clear"></div>                    
</form>
 		
 	</div>
 </div>

 

 <script>
  $(function(){
    $("#forma_contacto").validate();
    $('.parallax-window').parallax(); 
  });
 </script>