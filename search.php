<!-- 
Esta vez vamos a crear un simple buscador, que no requerirá base de datos para funcionar, ya que todo el contenido sera almacenado en un archivo TXT y DAT. Comencemos.
Para que nuestro buscador funcione, deberemos crear 3 archivos: un archivo de texto (TXT), un archivo DAT y un archivo en PHP. Este ultimo es el que trabajara, ya que los otros dos solo serviran para almacenar la información de la busqueda.
Primero crearemos el archivo PHP. Abrimos algun editor de texto y copiamos el siguiente texto (perdona el desorden del código, pero la plantilla tienen un error al mostrar el código… estoy solucionando este error):


Buscador

-->

<style>

a:link{text-decoration: none; color: #11116E;}
a:visited {text-decoration: none; color: #11116E;}
a:hover{font-style: normal; color: #000000; text-decoration: underline;}
body {font-family: Verdana; font-size: 10pt; SCROLLBAR-BASE-COLOR: #11116E; SCROLLBAR-ARROW-COLOR: #FFFFFF;}
td {font-family: Verdana; color: #000000; font-size: 8pt;}
select {font-family:Verdana;font-size:10pt;background:#FFFFFF;color:#000000;}
input {font-family:Verdana;font-size:10pt;background:#FFFFFF;color:#000000;}
textarea {font-family:Verdana;font-size:10pt;background:#FFFFFF;color:#000000;}
hr {color: #11116E; background-color: #11116E; height: 1px;}
</style>

<?
extract($HTTP_GET_VARS);
extract($HTTP_POST_VARS);
$results_per_page=5; //resultados a mostrar por página
if($action == "search" && "list") {
$user = file("site.dat");
$lis = 0;
if(strlen($keyword) <= 3){ //espeficamos la cantidad minimas de caracteres que debe tener la busqueda para que arroje resultados
	print "



Tu busqueda debe contener al menos 3 caracteres
";
}
else{
	for($x=0;$x<sizeof($user);$x++) {
		$temp = explode(";",$user[$x]);
		$opp[$x] = "$temp[0];$temp[1];$temp[2];$temp[3]";
		$such = stristr($opp[$x],$keyword);
		if($such) {
			$list[$lis] = $opp[$x];
			$lis++;
		}else{
			$meta = metaphone($keyword);
			$meta2 = metaphone($opp[$x]);
			$such = stristr($meta2,$meta);
			if($such) {
				$list[$lis] = $opp[$x];
				$lis++;
			}
		}
	}
		function getmicrotime(){
		list($usec, $sec) = explode(" ",microtime());
	   return ((float)$usec + (float)$sec);
	}

	$time = microtime();
	$time = number_format($time,3);


	if(sizeof($list) != "0") {
		echo "
",sizeof($list)," Resultado(s) para $keyword
Busqueda realizada en $time segundos.
";
$fa = fopen ("tempurl.txt", "w");
fwrite ($fa, "");
fclose ($fa);

for($y=0;$y
<?
	if (is_file("tempurl.txt"))
	{
	$fp=file("tempurl.txt");
	$s=sizeof($fp);
if ($page=='' or !$page) { $page=1; }
$end=$results_per_page*$page;
$start=$end-$results_per_page;

if ($start'0') {
	$new_page=$page-1;
	$prev="<---Página Anterior";
}
else {
	$prev="";
}

if ($end<$s) {
	$new_page1=$page+1;
	$next="Próxima Página--->";
}
else {
	$next="";
}

for ($i=$start; $i<$end; $i++)
	{
	$p=explode(';', $fp[$i]);
echo "
$p[0]
$p[1]
$p[2]
";
}
		}

$pages=$s/$results_per_page;
$pages1=round($pages, 2);
$p= explode(".", $pages1);
$pcount=count($p);
$ext=$p[$pcount-2];
if ($ext!=0) {
	$num=$p[0]+1;
}

else {
	$num=$p[0];
}
echo "
$prev	";
echo "Página:";

for ($i=1; $i<=$num; $i++) {
	if ($i==$page) {
echo " $i  ";

	}
	else {
echo "[$i]";
}
}
echo "	$next
";

}

else{
	echo "
Disculpa, no hay resultados para $keyword.
";
	}
	}

}

if($action == "submit") {
$fp = fopen ("site.dat", "a+");
fwrite ($fp, $title);
fwrite ($fp, ";");
fwrite ($fp, $description);
fwrite ($fp, ";");
fwrite ($fp, $link);
fwrite ($fp, ";");
fwrite ($fp, $keywords);
fwrite ($fp, ";");
fwrite ($fp, "\n");
fclose ($fp);
print "
El sitio fue agregado satisfactoriamente

";
	}
if($action == "add") {
echo " Agregar una web:
";
echo "Titulo*
 
Titulo de tu sitio web.

";
echo "Descripción* 

Describe tu stio web.

";
echo "URL:*

Dirección de tu sitio web.

";
echo "Keywords:*

Separe palabras claves por espacios



* = Requerido";
}
?>

<?

		if (is_file("tempurl.txt"))
	{
	$fp=file("tempurl.txt");
	$s=sizeof($fp);

if ($page=='' or !$page) { $page=1; }
$end=$results_per_page*$page;
$start=$end-$results_per_page;

if ($start'0') {
	$new_page=$page-1;
	$prev="<---Previous page";
}
else {
	$prev="";
}

if ($end<$s) {
	$new_page1=$page+1;
	$next="Next page--->";
}
else {
	$next="";
}

for ($i=$start; $i<$end; $i++)
	{
		$p=explode(';', $fp[$i]);
echo "
$p[0]
$p[1]
$p[2]
";
}
		}

$pages=$s/$results_per_page;
$pages1=round($pages, 2);
$p=explode('.', $pages1);
$pcount=count($p);
$ext=$p[$pcount-2];
if ($ext!=0) {
	$num=$p[0]+1;
}

else {
	$num=$p[0];
}
echo "
$prev	";
echo "Página:";
for ($i=1; $i<=$num; $i++) {
if ($i==$page) {
echo " $i ";
}
	else {
echo "[$i]";
}
}
echo "	$next
";

}
?>



//https://adiosmicerbo.wordpress.com/2008/10/15/crear-buscador-sin-base-de-datos/?action=add


//Una vez finalizado, lo guardamos con el nombre de "search.php" (sin comillas). Puedes ponerle cualquier nombre, pero no olvides agregarle el ".php" al final del nombre.

//Ahora, abrimos el Block de Notas y sin escribir algo, guardamos el documento con el nombre "tempurl.txt" (sin comillas). Luego, volvemos al Block de Notas y nuevamente guardamos sin hacer cambios, pero esta vez bajo el nombre "site.dat". Ambos documentos deben estar vacios y deben guardarse bajo ese nombre, de lo contrario, el buscador no funcionara. Otra cosa, es que estos 3 archivos deben estar siempre juntos, de lo contrario tampoco funcionara.

//Cuando terminemos, los subimos a nuestro servidor y les damos valor 777 a los tres archivos. Finalizado esto, nuestro buscador esta finalizado y funcionando.