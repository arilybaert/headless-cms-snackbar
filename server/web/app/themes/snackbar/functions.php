 <?php
function my_customize_rest_cors() {
	remove_filter( 'rest_pre_serve_request', 'rest_send_cors_headers' );
	add_filter( 'rest_pre_serve_request', function( $value ) {
		header( 'Access-Control-Allow-Origin: *' );
		header( 'Access-Control-Allow-Methods: GET' );
		header( 'Access-Control-Allow-Credentials: true' );
		header( 'Access-Control-Expose-Headers: Link', false );
		header( 'Access-Control-Allow-Headers: X-Requested-With' );


		return $value;
	} );
}

add_action( 'rest_api_init', 'my_customize_rest_cors', 15 );








add_theme_support('post-thumbnails');
add_theme_support( 'custom-logo' );
add_theme_support( 'post-thumbnails' );

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
