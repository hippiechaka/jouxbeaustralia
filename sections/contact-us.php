<script src="js/parallax.js"></script>
<div class="parallax-window" data-parallax="scroll" data-image-src="images/header-contact.jpg"></div>
 <!-- LEFT -->

 <div class="col-md-6 bgCian left">

 	<div class="half_safe_area right">
 		<div class="contactoTxt">
      <div id="jouxbeContact"><!-- Jouxbe --></div>
	 		<h3>Mexican Jewellery</br><span>Gold Layered</span></h3>
	 		<div class="redesContacto">
				<a target="_blank" href="" class="BTN-redes" id="facebook" title="Follow Us on facebook"></a>
			</div>
      <div style="clear:both;display:block;width:100%;height:1px; background:#ccc;margin-bottom:20px;"></div>
<p style="color:#6A512D">
<span>Toll free / Llame sin costo:</span><br>
USA: 1 866 406 8031<br>
MEX: 01 800 831 5940<br>
INT: +52 (33) 36 55 88 39<br>
<br>
<small>Business hours / Horario de atención:<br>
6AM - 11AM AUSTRALIA STANDAR TIME (UTC)</small>
</p>

<div style="clear:both;display:block;width:100%;height:30px;"></div> 

 		</div>
 	</div>

 </div>


<!-- RIGHT -->

 <div class="col-md-6 right">
 	<div class="half_safe_area left">


        <div id="contacto" align="left">

            <div id="enviado" style="display:none" align="center">
                <div style="width:100%; height:80px; display:block; clear:both;"></div>
                <h2 style="font-weight:300;">The message has been sent <span style="color:#ef9863;">successfully</span></h2>
                <h1 style="font-weight:300;">Thanks!</h1>
                <p>(please, refresh the site, in order to send another e-mail)</p>
            </div>

            <div id="forma_envio">

                <div style="height:45px; width:280px; text-align:center; padding-top:10px; margin:0 auto;">
                    <p style="margin:0; padding:0;">Please fill <span style="color:#ef9863;">all the fields</span> to get in touch</p>
                </div>

                <form action="envia_mail.php" method="post" id="forma_contacto">

                    <label><span style="color:#ef9863;">*</span> Name:</label>
                    <input type="text" name="nombre" class="text_input required" title="This field is required" id="contactname"/>

                    <div style="width:100%; height:10px; display:block; clear:both;"></div>

                    <label><span style="color:#ef9863;">*</span> E-mail:</label>
                    <input type="text" name="email" class="text_input required email" title="Please, put a valid e-mail" id="email"/>
                    
                    <div style="width:100%; height:10px; display:block; clear:both;"></div>

                    <label><span style="color:#ef9863;">*</span> City:</label>
                    <input type="text" name="city" class="text_input required" title="This field is required" id="city"/>
                    
                    <div style="width:100%; height:10px; display:block; clear:both;"></div>
                    
                    <label><span style="color:#ef9863;">*</span> Message:</label>
                    <textarea class="text_area required" name="mensaje" title="Write your message" id="message"></textarea>
                    
                    <div style="width:100%; height:10px; display:block; clear:both;"></div>
                    <p>
                    <span class="indicacion">
                      <input type="checkbox" name="avisoPrivacidad" id="avisoPrivacidad" class="required altRequired" title="Check this">
                      <span>I read and accept the <a href="" target="blank">Terms and conditions.</a></span>
                    </span>                     
                     </p>
                    
                    <input type="submit" value="Send" name="submit" id="enviar_btn" style="border:none" />

                </form>
                <div id="enviando" style="display:none">
                    <img src="images/sm_loading.gif"/> Sending..
                </div>
            </div>
        </div> 


    </div>
  </div>

  <div class="clear"></div>                    
 		
 	</div>
 </div>
<script>
 $(function(){
    $("#forma_contacto").validate({
        submitHandler: function (form) {
            $("#enviando").show();
            $(form).ajaxSubmit(function(){
                $("#forma_contacto").slideUp(500, function(){
                    $("#enviado").slideDown();
                });
            });
            return false; 
        }           
    });
});
  
 </script>
