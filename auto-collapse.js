jQuery(document).ready(function($) {
    
    $("#adminmenuwrap").mouseenter(function() {
        
        if ( $(document.body).hasClass('folded') ) {
            
            $("#collapse-menu").trigger('click');
        
        }
        
    });
    
    $("#wpbody").mouseover(function() {
        
        if ( !$(document.body).hasClass('folded') ) {
            
            $("#collapse-menu").trigger('click');
        
        }
        
    });
    
});

jQuery(document).ready(function($) {
    
    $("#customize-controls").mouseenter(function() {
        
        if ( $('.wp-full-overlay').hasClass('collapsed') ) {
            
            $(".collapse-sidebar").trigger('click');
        
        }
        
    });
    
    $("#customize-preview").mouseover(function() {
        
        if ( $('.wp-full-overlay').hasClass('expanded') ) {
            
            $(".collapse-sidebar").trigger('click');
        
        }
        
    });
    
});