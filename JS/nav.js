$(window).ready(function() {
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