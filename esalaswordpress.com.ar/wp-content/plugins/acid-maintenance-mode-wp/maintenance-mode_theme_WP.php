<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head profile="http://gmpg.org/xfn/11">
	<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />
	<meta name="description" content="<?php bloginfo('description'); ?>" />
	<title><?php bloginfo('name'); ?> &raquo; <?php echo $this->g_opt['mamo_pagetitle']; ?></title>
<link rel="stylesheet" href="<?php echo get_settings('home'); ?>/wp-content/plugins/acid-maintenance-mode-wp/maintenance-mode_theme_WP_files/style.css" type="text/css" media="all" />

<script type="text/javascript" src="<?php echo get_settings('home'); ?>/wp-content/plugins/acid-maintenance-mode-wp/maintenance-mode_theme_WP_files/js/jquery-1.3.2.min.js"></script>
<script type="text/javascript" src="<?php echo get_settings('home'); ?>/wp-content/plugins/acid-maintenance-mode-wp/maintenance-mode_theme_WP_files/js/cufon.js"></script>
<script type="text/javascript" src="<?php echo get_settings('home'); ?>/wp-content/plugins/acid-maintenance-mode-wp/maintenance-mode_theme_WP_files/js/Myriad_Pro_300.font.js"></script>
<script type="text/javascript" src="<?php echo get_settings('home'); ?>/wp-content/plugins/acid-maintenance-mode-wp/maintenance-mode_theme_WP_files/js/Myriad_Pro_700.font.js"></script>
<script type="text/javascript">
Cufon.replace('.#head h2', { fontFamily: 'Myriad Light' });
Cufon.replace('#head h1,#subhead h3', { fontFamily: 'Myriad Pro' });
</script>
</head>
<body>
<div id="wrapper">

<div id="head">
		<h1 id="logo"><a title="<?php bloginfo('name'); ?>" href="<?php echo get_settings('home'); ?>"><?php bloginfo('name'); ?></a></h1>
</div>

<div id="subhead">
<h2> Mantenimiento [ACTIVADO] </h2>
</div>

<div id="content">
<?php echo $this->mamo_template_tag_message(); ?>
</div>

<div class="adminlogin">
<?php	echo $this->mamo_template_tag_login_logout(); ?>
</div>

</div>


<div id="footer">
<!--<table style='margin: 0 auto;'>
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
<table>-->
</div>
</body>
</html>
