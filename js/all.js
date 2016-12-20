$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /*FADE IN ELEMENTS ON SCROLL*/
        /* Check the location of each desired element */
        $('.col4, .button, .icon').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                    
            }
            
        });

        /*CHANGE NAVIGATION COLOUR*/
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 10) {   
            $(".navigation").addClass("navigationScrolled").animate();        
            $("#logo").attr('src', 'images/logo_black.svg');                
        } else {
            $(".navigation").removeClass("navigationScrolled").animate();
            $("#logo").attr('src', 'images/logo.svg'); 
        }          

        /*FADE IN RETURN TO TOP BUTTON*/
        if ($(this).scrollTop() >= 500) {        
            $('.returnToTop').addClass("returnToTopScrolled");  
        } else {
            $('.returnToTop').removeClass("returnToTopScrolled");
        }
    });
});

$('.returnToTop').click(function() {     
    $('body,html').animate({
        scrollTop : 0                     
    }, 500);
});

/*global document:false, $:false */
var txt = $('#comments'),
    hiddenDiv = $(document.createElement('div')),
    content = null;

//txt.addClass('txtstuff');
hiddenDiv.addClass('hiddendiv common');

$('body').append(hiddenDiv);

txt.on('keyup', function () {

    content = $(this).val();

    content = content.replace(/\n/g, '<br>');
    hiddenDiv.html(content + '<br class="lbr">');

    $(this).css('height', hiddenDiv.height());

});