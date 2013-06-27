<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head profile="http://gmpg.org/xfn/11">
	<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />
	<meta name="description" content="<?php bloginfo('description'); ?>" />
	<title><?php bloginfo('name'); ?> &raquo; <?php echo $this->g_opt['mamo_pagetitle']; ?></title>
	<link rel="stylesheet" href="<?php echo get_settings('home'); ?>/wp-content/plugins/acid-maintenance-mode-wp/css/style.css" type="text/css" media="all" />
	<!--[if lte IE 6]><link rel="stylesheet" href="<?php echo get_settings('home'); ?>/wp-content/plugins/acid-maintenance-mode-wp/css/ie6.css" type="text/css" media="all" /><![endif]-->
	
	<script src="<?php echo get_settings('home'); ?>/wp-content/plugins/acid-maintenance-mode-wp/js/jquery-1.4.1.min.js" type="text/javascript"></script>
	<script src="<?php echo get_settings('home'); ?>/wp-content/plugins/acid-maintenance-mode-wp/js/jquery.jcarousel.pack.js" type="text/javascript"></script>
	<script src="<?php echo get_settings('home'); ?>/wp-content/plugins/acid-maintenance-mode-wp/js/jquery-func.js" type="text/javascript"></script>
</head>
<body>
	
<!-- Header -->
<div id="header">
	<div class="shell">
		
		<!-- Logo -->
		<h1 id="logo"><a title="<?php bloginfo('name'); ?>" href="<?php echo get_settings('home'); ?>"><?php bloginfo('name'); ?></a></h1>
		<!-- End Logo -->
		
		<!-- Navigation -->
		<div id="navigation">
			<ul>
			    <li><?php	echo $this->mamo_template_tag_login_logout(); ?></li>
			</ul>
		</div>
		<!-- End Navigation -->
		
	</div>
</div>
<!-- End Header -->

<!-- Slider -->
<div id="slider">
	<div class="shell">
		
		<div class="slider-holder">
			<div class="slides">
				<ul>
									    	
					<!-- Slide -->
				    <li>
				    	<div class="slide-bg">
					    	<div class="slide-image">
					    		<a href="#"><img src="<?php echo get_settings('home'); ?>/wp-content/plugins/acid-maintenance-mode-wp/css/images/slide-image.gif" alt="" /></a>
					    	</div>
					    	<div class="slide-info">
					    		<?php echo $this->mamo_template_tag_message(); ?>				    		
					    	</div>
				    	</div>
				    	<span class="slide-shadow">&nbsp;</span>
				    </li>
				    <!-- End Slide -->
				    
			    </ul>
			</div>
		</div>
		
	</div>
</div>
<!-- End Slider -->

<!-- Main -->
<div id="main">
<h2 style="text-align:center;"><?php bloginfo('name'); ?></h2><br />
<h2 style="text-align:center;">Por favor, visitanos regularmente o en la fecha indicada, hasta que terminemos el mantenimiento en nuestro sitio. </h2><br />
<h3 style="text-align:center;">Disculpa las molestias y gracias por tu comprensión.</h3>

</div>
<!-- End Main -->

<!-- Footer -->
<div id="footer">
<!--	<div class="shell">
		<table style='margin: 0 auto;'>
<tr>
<td>-->
<?php
// Completamos el vector con frases
//$vector = array(
//1 => "Posicionamiento web.",
//2 => "SEO Valencia",
//);

// Obtenemos un número aleatorio
//$numero = rand(1,2); 

// Imprimimos la frase
//echo "<strong>Sitio optimizado por/Website optimized by:</strong> <a href='http://www.laliamos.com' alt='$vector[$numero]'><strong>$vector[$numero]</strong></a>"; ?>
<!--</td></tr>
</table>
	</div>-->
</div>
<!-- End Footer -->
</body>
</html>
