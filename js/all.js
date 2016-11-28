$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.col4, .button, .icon').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        });

        if ($(this).scrollTop() >= 500) {        
            $('.returnToTop').addClass("returnToTopScrolled");  
        } else {
            $('.returnToTop').removeClass("returnToTopScrolled");
        }
    });

    var $scrollingDiv = $(".navigation");
    $(window).scroll(function(){  
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 10) {   
            $scrollingDiv.addClass("navigationcolor").animate();                        
        } else {
            $scrollingDiv.removeClass("navigationcolor").animate();
        }                  
    });
    
});

$('.returnToTop').click(function() {     
    $('body,html').animate({
        scrollTop : 0                     
    }, 500);
});