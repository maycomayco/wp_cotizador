<?php
/**
 * @package Cotizador
 * @version 1.0
 */
/*
Plugin Name: KNX - Cotizador
Plugin URI: #
Description: Plugin de cotizacion de seguros
Author: Mayco Barale
Version: 0.1
Author URI: #
*/

// constante con url del archivo
define( 'MY_PLUGIN_PATH', plugin_dir_url( __FILE__ ) );

/*
	Declaramos shortcode
	Permite compatibilidad con distintos themes y posibilidad de reutilizacion
*/

function cotizador_shortcode() {
	ob_start();	//remueve caracteres. URL:https://konstantin.blog/2013/get_template_part-within-shortcodes/
	include('page/cotizador.php');
	return ob_get_clean();	//cierra ob_start()
}
add_shortcode( 'cotizador', 'cotizador_shortcode' );


/**
 * Include CSS file for MyPlugin.
 */
function myplugin_scripts() {
	
	//  CSS
	/* habilitar font-awesome - POR DEFECTO */
	wp_deregister_style('font-awesome');
	// wp_register_style( 'knx_fa-css', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' );
	// wp_enqueue_style( 'knx_fa-css' );

	
	// JS
	wp_register_script( 'app-js', MY_PLUGIN_PATH . '/js/app.js', array ( 'jquery' ), 0.2, true);
	
	// defino parametros para enviar al archivo JS
	$params = array(
		'plugin_path' => MY_PLUGIN_PATH,
	);
	
	/* agrego a la llamada al recurso un objeto con parametros, lo identifico con 'params' y le inyecto $params */
	wp_localize_script( 'app-js', 'params', $params );
	wp_enqueue_script( 'app-js');
}
add_action( 'wp_enqueue_scripts', 'myplugin_scripts' );

function knx_css_plugin(){
	/* estilos propios del cotizador - REQUERIDO */
	wp_register_style( 'knx_cotizador-css', MY_PLUGIN_PATH . 'css/styles.css' );
	wp_enqueue_style( 'knx_cotizador-css' );
}
add_action('wp_enqueue_scripts', 'knx_css_plugin', 100);