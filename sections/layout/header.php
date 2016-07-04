<header>
  <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="./"><img src="images/logo_jouxbe.png" alt="Jouxbe Australia"></a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">

        <ul class="nav navbar-nav navbar-left">
          <!-- <li><a href="./">Home</a></li> -->
          <li class="link-flip"><a href="about-us.html" class="<?php if($section=='about-us'){ echo("current"); }?>">About Us</a></li>
          <li class="link-flip"><a href="buying-process.html" class="<?php if($section=='buying-process'){ echo("current"); }?>">Buying process</a></li>
          <li class="link-flip"><a href="products.html" class="<?php if($section=='products' || $section=='products-earrings' || $section=='products-chain-necklaces' || $section=='products-jewellery-sets' || $section=='products-rose-jewellery' || $section=='products-watches' || $section=='products-charms' || $section=='products-religious' || $section=='products-customized-jewellery' || $section=='products-rings' || $section=='products-bracelets' || $section=='products-various'){ echo("current"); }?>">Products</a></li>
          <li class="link-flip"><a href="brochure.html" class="<?php if($section=='brochure'){ echo("current"); }?>">Brochure</a></li>
          <li class="link-flip"><a href="contact-us.html" class="<?php if($section=='contact-us'){ echo("current"); }?>">Contact Us</a></li>
        </ul>
        <form class="navbar-form navbar-right" role="form" action="">
          <div class="form-group">
            <input type="text" placeholder="Search.." class="form-control">
          </div>
          <button type="submit" class="btn btn-success"><i class="fa fa-search" aria-hidden="true"></i></button>
        </form>

      </div><!--/.navbar-collapse -->
    </div>
  </nav>
</header>

<section>