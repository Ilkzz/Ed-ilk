$(window).scroll(function() {
    if ($(this).scrollTop() >= 500) {        
        $('.returnToTop').addClass("returnToTopScrolled");  
    } else {
        $('.returnToTop').removeClass("returnToTopScrolled");
    }
});
$('.returnToTop').click(function() {     
    $('body,html').animate({
        scrollTop : 0                     
    }, 500);
});