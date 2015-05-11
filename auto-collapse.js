// WP Admin Sidebar Collapse
jQuery(document).ready(function($) {
    
    // Define the functions
    $adminMenuWrap = $('#adminmenuwrap');
    var collapseIt = function($adminMenuWrap) {
        if ( !$(document.body).hasClass('folded') ) {
            $("#collapse-menu").trigger('click');
            $(document.body).toggleClass('expanded');
            /*$adminMenuWrap.removeClass('floating');*/
            /*$adminMenuWrap.css({'margin-top':'0px'});*/
        }
    };
    
    var expandIt = function($adminMenuWrap) {
        adminMenuWrap = $('#adminmenuwrap');
        if ( $(document.body).hasClass('folded') ) {
            $("#collapse-menu").trigger('click');
            $(document.body).toggleClass('expanded');
            /*if ( $(window).height() > $adminMenuWrap.height() + 28 ) { 
                $adminMenuWrap.toggleClass('floating');
            } else {
                $('.expanded #adminmenuwrap').css({'margin-top':$(window).scrollTop()});
            }*/   
        }
    }
    
    // Here's where the action is
    collapseIt($adminMenuWrap);
    $('#adminmenuwrap, #adminmenuback').mouseenter(function() { expandIt($adminMenuWrap); }); 
    $('#wpcontent').mouseenter(function() { collapseIt($adminMenuWrap); });
    
    // Fancy footwork for menus that don't fit the window height
    /*var OldPos = 0;
    $(window).scroll(function() {
        if ( $(window).height() < $adminMenuWrap.height() + 28 ) {
            var NewPos = $(this).scrollTop();
            if ( NewPos < OldPos && $adminMenuWrap.offset().top > NewPos + 28 ) { // Scrolling Up Above Wrap
                $('.expanded #adminmenuwrap').css({'margin-top':NewPos});
            }
            if ( NewPos < OldPos && $adminMenuWrap.offset().top < NewPos + 28 ) { // Scrolling Up Below Wrap
                adminMenuWrap.removeClass('floating');
            }
            if ( NewPos > OldPos && $adminMenuWrap.offset().top < NewPos + 28) { // Scrolling Down Below Wrap
                adminMenuWrap.removeClass('floating');
            }
            if ( NewPos > OldPos && $adminMenuWrap.offset().top > NewPos + 28 ) { // Scrolling Down Above Wrap
                adminMenuWrap.removeClass('floating');
                $('.expanded #adminmenuwrap').css({'margin-top':$(window).scrollTop()});
            }
            OldPos = NewPos;
        }
    });*/
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