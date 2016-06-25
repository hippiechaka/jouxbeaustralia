
<? $dominio = "http://localhost:8888/jouxbeaustralia" ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Email</title>
</head>

<body style="font-family:'Trebuchet MS', Arial, Helvetica, sans-serif; color:#666">
    <div style="width:700px; margin:0 auto; ">
    	<img src="{dominio}/images/layout/header/mainlogo_small.png" width="132" height="50" alt="JOUXBE" />
        <h2 style="width:350px; color:#00A4D1; float:right; text-align:right; ">INFORMACIÓN DE CONTACTO</h2>
        <div style="clear:both"></div>
        <center><img src="{dominio}/images/layout/header/sep_menu.png" width="325" height="5" /></center><br />
       	<div style="margin-bottom:10px;">
        	<div style="float:left; width:200px; color:#00A4D1; font-weight:bold; text-align:right;">FECHA:</div>
            <div style="float:right; width:480px;">{fecha}</div>
        	<div style="clear:both"></div>
        </div> 
       	<div style="margin-bottom:10px;">
        	<div style="float:left; width:200px; color:#00A4D1; font-weight:bold; text-align:right;">NOMBRE:</div>
            <div style="float:right; width:480px;">{nombre}</div>
        	<div style="clear:both"></div>
        </div> 
       	<div style="margin-bottom:10px;">
        	<div style="float:left; width:200px; color:#00A4D1; font-weight:bold; text-align:right;">CORREO ELECTRÓNICO:</div>
            <div style="float:right; width:480px;">{email}</div>
        	<div style="clear:both"></div>
        </div> 
       	<!-- <div style="margin-bottom:10px;">
        	<div style="float:left; width:200px; color:#00A4D1; font-weight:bold; text-align:right;">OCUPACIÓN:</div>
            <div style="float:right; width:480px;">{ocupacion}</div>
        	<div style="clear:both"></div>
        </div> --> 
       	<div style="margin-bottom:10px;">
        	<div style="float:left; width:200px; color:#00A4D1; font-weight:bold; text-align:right;">CIUDAD:</div>
            <div style="float:right; width:480px;">{ciudad}</div>
        	<div style="clear:both"></div>
        </div>   
       	<div style="margin-bottom:10px;">
        	<div style="float:left; width:200px; color:#00A4D1; font-weight:bold; text-align:right;">EDAD:</div>
            <div style="float:right; width:480px;">{edad}</div>
        	<div style="clear:both"></div>
        </div>   
       	<div style="margin-bottom:10px;">
        	<div style="float:left; width:200px; color:#00A4D1; font-weight:bold; text-align:right;">COMENTARIO:</div>
            <div style="float:right; width:480px;">{comentario}</div>
        	<div style="clear:both"></div>
        </div>   
        <center><img src="{dominio}/images/layout/header/sep_menu.png" width="325" height="5" /></center><br />
        <p style="font-size:11px; text-align:center;"><a href="{dominio}" target="_blank" style="color:#666; text-decoration:none">{dominio}</a> &copy; <?=date('Y')?></p>
    </div>
</body>
</html>
