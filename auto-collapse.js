// WP Admin Sidebar Collapse
jQuery(document).ready(function($) {
    
    // Define the functions
    $adminMenuWrap = $('#adminmenuwrap');
    var collapseIt = function($adminMenuWrap) {
        if ( !$(document.body).hasClass('folded') ) {
            $("#collapse-menu").trigger('click');
            $(document.body).toggleClass('expanded');
        }
    };
    
    var expandIt = function($adminMenuWrap) {
        adminMenuWrap = $('#adminmenuwrap');
        if ( $(document.body).hasClass('folded') ) {
            $("#collapse-menu").trigger('click');
            $(document.body).toggleClass('expanded');
        }
    }
    
    // Here's where the action is
    $('#adminmenuwrap, #adminmenuback').mouseenter(function() { expandIt($adminMenuWrap); }); 
    $('#wpcontent').mouseenter(function() { collapseIt($adminMenuWrap); });
    $('img').load(function($){collapseIt($adminMenuWrap);});
    $('.wp-has-submenu').on('hover', function(e){
        e.preventDefault();
        $(this).toggleClass('opensub');
        if($('.opensub .wp-submenu').length) {
            var submenu = $('.opensub .wp-submenu');
            var submenu_bottom = submenu.offset().top + submenu.height()
            var scrolled = $(window).scrollTop();
            var submenu_dist = submenu_bottom - scrolled;
            if (submenu_dist > $(window).height()) {
                var menu_diff = -(submenu_dist - $(window).height())-32;
                submenu.css('margin-top', menu_diff);
            }
        } 
    });
});

// Customizer Collapse
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