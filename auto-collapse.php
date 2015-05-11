<?php
/**
 * Plugin Name: Auto Collapse
 * Description: A simple script to auto collapse the admin sidebar. 
 * Version: 1.1.4
 * Author: FullSteam Labs
 */

function load_auto_collapse() {
    wp_register_style( 'auto_collapse_style', plugin_dir_url( __FILE__ ) . 'style.css' );
    wp_enqueue_style('auto_collapse_style');
    
    wp_register_script( 'auto_collapse', plugin_dir_url( __FILE__ ) . 'auto-collapse.js' );
    wp_enqueue_script( 'auto_collapse', plugin_dir_url( __FILE__ ) . 'auto-collapse.js', array( 'jquery' ) );
}
add_action( 'admin_enqueue_scripts', 'load_auto_collapse' )
    
?>