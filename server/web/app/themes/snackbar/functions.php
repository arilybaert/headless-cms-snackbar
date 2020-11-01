<?php
add_theme_support('post-thumbnails');
add_theme_support( 'custom-logo' );
add_theme_support( 'post-thumbnails' );
function add_cors_http_header(){
    header("Access-Control-Allow-Origin: *");
}
add_action('init','add_cors_http_header');
function snackbar_custom_logo_setup() {
    $defaults = array(
    'height'      => 100,
    'width'       => 400,
    'flex-height' => true,
    'flex-width'  => true,
    'header-text' => array( 'site-title', 'site-description' ),
   'unlink-homepage-logo' => true, 
    );
    add_theme_support( 'custom-logo', $defaults );
   }
   function register_my_menus() {
    register_nav_menus(
      array(
        'header-menu' => __( 'Header Menu' ),
        'extra-menu' => __( 'Extra Menu' )
       )
     );
   }

   add_action( 'init', 'register_my_menus' );
   add_action( 'after_setup_theme', 'snackbar_custom_logo_setup' );


function snackbar_add_theme_scriptsstyles() {

  wp_enqueue_style( 'main', get_template_directory_uri() . '/assets/css/main.css',[ '' ],'1.0','all');

}
add_action('wp_enqueue_scripts', 'snackbar_add_theme_scriptsstyles');
