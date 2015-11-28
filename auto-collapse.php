<?php
/**
 * Plugin Name: Auto Collapse
 * Description: A simple script to auto collapse the admin sidebar. 
 * Version: 1.2.2
 * Author: FullSteam Labs
 */

function load_auto_collapse() {
    wp_enqueue_style( 'auto_collapse_style', plugin_dir_url( __FILE__ ) . 'style.css' );
    wp_enqueue_script( 'auto_collapse_script', plugin_dir_url( __FILE__ ) . 'auto-collapse.js', array( 'admin-bar', 'common', 'jquery' ), true );
}
add_action( 'admin_print_scripts', 'load_auto_collapse', 10);

    
?>