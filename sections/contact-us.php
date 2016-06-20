<?  

  $enviado = 0;

      $nombre      = "";
      $email       = "";
      $ocupacion   = "";
      $ciudad      = "";
      $edad        = "";
      $comentario    = "";


  if(!empty($_REQUEST['email'])){
      $emails      = EMAIL_CONTACTO;
      $dominio     = $domain;
      $fecha       = date('d/m/Y');
      $nombre      = $_REQUEST['nombre'];
      $ocupacion   = $_REQUEST['ocupacion'];
      $email       = $_REQUEST['email'];
      $ciudad      = $_REQUEST['ciudad'];
      $edad        = $_REQUEST['edad'];
      $comentario  = $_REQUEST['comentario'];
      
      
      $body   = file_get_contents('sections/forms/email.php');
      $body     = str_replace( array('{dominio}', '{fecha}', '{nombre}', '{email}' , '{ocupacion}', '{ciudad}', '{edad}', '{comentario}' ), array($dominio, $fecha, $nombre, $email, $ocupacion, $ciudad, $edad, $comentario), $body );  
      
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

 <!-- LEFT -->

 <div class="col-md-6 bgCian left">

 	<div class="half_safe_area right">
 		<div class="contactoTxt">
	 		<h1>Escríbenos</h1>
      <h2>Jouxbe</h2>
	 		<h3>Mexican Jewellery</br><span>Gold Layered</span></h3>
	 		<div class="redesContacto">
				<a target="_blank" href="" class="BTN-redes" id="facebook" title="Síguenos en facebook"></a>
				<a target="_blank" href="" class="BTN-redes" id="pinterest" title="Síguenos en pinterest"></a>
				<a target="_blank" href="" class="BTN-redes" id="instagram" title="Síguenos en instagram"></a>
				<a target="_blank" href="" class="BTN-redes" id="youtube" title="Síguenos en youtube"></a>
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
    <h2>Tu mensaje ha sido envíado</h2>
    <h3>¡Gracias por escribirnos!</h3>
  </center>
<?    
  }else{
?>
  <form action="" method="post" id="forma_contacto">
    <label class="textocampo">Nombre<span class="txtMagenta">*</span>:</label>
    <input type="text" class="field required" name="nombre" title="Este campo es requerido" value="" />
    <div class="contactSpace"></div>
    <label class="textocampo">Email<span class="txtMagenta">*</span>:</label>
    <input type="text" class="field required email" name="email" title="Este campo es requerido" value="" />
    <div class="contactSpace"></div>
    <label class="textocampo">Ocupación<span class="txtMagenta">*</span>:</label>
    <input type="text" class="field required" name="ocupacion" title="Este campo es requerido" value="" />
    <div class="contactSpace"></div>
    <label class="textocampo">Ciudad<span class="txtMagenta">*</span>:</label>
    <input type="text" class="field required" name="ciudad" title="Este campo es requerido" value="" />
    <div class="contactSpace"></div>
    <label class="textocampo">Edad<span class="txtMagenta">*</span>:</label>
    <select name="edad" id="edad" class="required">
      <option value="">Seleccione su edad</option>
      <option value="20 a 29 años">20 a 29 años</option>
      <option value="30 a 49 años">30 a 49 años</option>
      <option value="50 a más años">50 a más años</option>
    </select>
    <div class="contactSpace"></div>
    <label class="textocampo">Comentarios<span class="txtMagenta">*</span>:</label>
    <textarea class="fieldArea required" name="comentario" title="Este campo es requerido"></textarea>
    <div class="contactSpace"></div>

    <p class="indicacion">
      Los campos señalados con <span class="txtMagenta">*</span> son obligatorios<br>
      <input type="checkbox" name="avisoPrivacidad" value="avisoPrivacidad" class="required"> Leí y acepto el tratamiendo de mis datos de acuerdo al <a href="POLITICADEPRIVACIDADGrupoGIS.pdf" target="blank">AVISO DE PRIVACIDAD</a><span class="txtMagenta">*</span>
    </p>
    <div class="contactSpace"></div>

    <input type="submit" class="sendBtn" value="Enviar" />  
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

 <div class="graficoAvion"></div>

 <script>
  $(function(){
    $("#forma_contacto").validate();
  });
 </script>