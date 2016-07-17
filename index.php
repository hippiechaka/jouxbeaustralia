<?php
	$puerto = $_SERVER['SERVER_PORT'];
	if($puerto!=80){
		$domain =	"http://".$_SERVER['SERVER_NAME'].":$puerto/jouxbeaustralia/";
	}else{
		$domain =	"http://".$_SERVER['SERVER_NAME']."/jouxbeaustralia/";
	}

	session_start();
	//include("cms/config/connection.php");
	//include("cms/functions/funciones.php");
	$section = empty($_REQUEST['section']) ? 'home' : $_REQUEST['section'];
	$id = empty($_REQUEST['id'])? 0: $_REQUEST['id'];	

	$search = $_GET['search'];
	$results = "SELECT * FROM products WHERE sku LIKE '%$search%'"; 4
?>
<!doctype html>
<!--[if lt IE 7]> <html class="ie6 oldie"> <![endif]-->
<!--[if IE 7]>    <html class="ie7 oldie"> <![endif]-->
<!--[if IE 8]>    <html class="ie8 oldie"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class="">
<!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
<?php
	$titulo 		= 'Jouxbe. Mexican Jewellery, Gold Layered';
	$descripcion 	= 'A pioneer company in the jewellery industry. Our very first factory opened in the city of Guadalajara Mexico in the year 1985. To date';
	$keywords 		= 'jouxbe, jewellery, bangles, earrings, chain necklaces, jewellery sets, rose jewellery, watches, charms, religious, customized jewellery, rings, bracelets, mexican Jewellery, gold layered';
	$fb_img 		= $domain.'images/fb_share.jpg';

	switch ($section) {
		case 'home':
			$titulo2 = " Mexican Jewellery, Gold Layered";
			break;
		case 'about-us':
			$titulo2 = " - About Us";
			break;
		case 'buying-process':
			$titulo2 = " - Buying Process";
			break;
		case 'brochure':
			$titulo2 = " - Brochure";
			break;
		case 'contact-us':
			$titulo2 = " - Contact Us";
			break;
		case 'products':
			$titulo2 = " - Bangles";
			break;
		case 'products-earrings':
			$titulo2 = " - Earrings";
			break;
		case 'products-chain-necklaces':
			$titulo2 = " - Chain Necklaces";
			break;
		case 'products-jewellery-sets':
			$titulo2 = " - Jewellery Sets";
			break;
		case 'products-rose-jewellery':
			$titulo2 = " - Rose Jewellery";
			break;
		case 'products-watches':
			$titulo2 = " - Watches";
			break;
		case 'products-charms':
			$titulo2 = " - Charms";
			break;
		case 'products-religious':
			$titulo2 = " - Religious";
			break;
		case 'products-customized-jewellery':
			$titulo2 = " - Customized Jewellery";
			break;
		case 'products-rings':
			$titulo2 = " - Rings";
			break;
		case 'products-bracelets':
			$titulo2 = " - Bracelets";
			break;			
	}

	$titulo 		= 'Jouxbe'.$titulo2;

?>

    <base href="<?php echo($domain);?>" />
	<title><?php echo($titulo); ?></title>
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
	<meta http-equiv="Content-Language" Content="es">
    <meta name="description" content="<?php echo($descripcion); ?>">
	<meta name="keywords" content="<?php echo($keywords);?>">
    <meta property="og:image"  content="<?php echo($fb_img); ?>"/>
    <link rel="image_src" type="image/jpeg" href="<?php echo($fb_img); ?>" />        
	<link rel="shortcut icon" href="ico.png" />

	<link rel="apple-touch-icon" href="apple-touch-icon.png">
	<link rel="stylesheet" href="css/bootstrap.min.css">

    <link rel="stylesheet" href="css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/animate.css">
	<link rel="stylesheet" href="fonts/font-awesome-4.6.2/css/font-awesome.min.css">
	<link href="https://fonts.googleapis.com/css?family=Trirong:200,400,700,900" rel="stylesheet">
	<!--OWL -->
	<link rel="stylesheet" href="css/owl.carousel.css">


<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')</script>
    <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
    
    

<!--[if lt IE 8]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->

</head>
<body>
	<?php require_once "sections/layout/header.php"; ?>
    <?php 
		if(file_exists("sections/".$section.".php")){
			require_once "sections/".$section.".php";
		}else{
			require_once "sections/404.php";
		}
	?>
    <?php require_once "sections/layout/footer.php"; ?>



<script src="js/vendor/bootstrap.min.js"></script>
<script src="js/parallax.js"></script>
<script src="js/owl.carousel.min.js"></script>
<!-- jquery-validate -->
<script type="text/javascript" src="js/jquery.validate.js"></script>
<!-- forms -->
<script type="text/javascript" src="js/jquery.form.js"></script>
<script src="js/main.js"></script>

<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
<script>
    (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
    function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
    e=o.createElement(i);r=o.getElementsByTagName(i)[0];
    e.src='//www.google-analytics.com/analytics.js';
    r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
    ga('create','UA-XXXXX-X','auto');ga('send','pageview');
</script>


</body>
</html>
