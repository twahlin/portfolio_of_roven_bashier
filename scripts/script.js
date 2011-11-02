$(document).ready(function() {


    //Hide iphone bar
    window.addEventListener("load",function() {
        setTimeout(function(){
            window.scrollTo(0, 1);
        }, 0);
    });
    //End Hide iphone bar

    //close button hiding wihtout js
    $('.post_content').addClass('hidden');   
    $('.post_content .hide_content').removeClass('hidden');    
    //end close button hiding wihtout js    
    
    //close button closes drawer
    $('.hide_content').click(function() {
        $('.post_head').removeClass('post_head_active');
        $('.post_content').slideUp('fast');
    });    
   
    // Custom accordion functionality
	$('.post_head').click(function() {
		if($(this).hasClass('post_head_active')) {
			$(this).next('.post_content').slideUp('fast',function() {
				$(this).prev().removeClass('post_head_active');
			});
		} else {
			$('.post_content').slideUp('fast',function() {
				$(this).prev().removeClass('post_head_active');
			});
			$(this).next('.post_content').slideToggle('fast',function() {
				$(this).prev().toggleClass('post_head_active');
                //if the header is fixed get scrolltop position of element you're scrolling to. get the hight of the fixed header and add to the scrolltop position
                //get current scroll position and calculate
                current_id = $(this).parent().attr('id');                
                $.scrollTo('#' + current_id, 500);
			});
		}
		return false;
	}); 
    // End custom accordion functionality
    
    // // Scrollto Functionality based on browser width
    // function window_scroll() {
    //     if($(window).width() >= 768) {
    //         $('.post_head').click(function() {  
    //             var current_id = $(this).parent().attr('id');  
    //             // console.log(current_id);        
    //             // $('html,body').animate({scrollTop: $("#"+current_id).offset().top},'fast');
    //             console.log($(this).parent().attr('id'));
    //             $("#"+current_id).offset().top
    //         });            
    //         console.log('below 768'); 
    //     }
    //     else {
    //         // $('.post_head').click(function() {  
    //         //     var current_id = $(this).parent().attr('id');  
    //         //     // console.log(current_id);        
    //         //     $('html,body').animate({scrollTop: $("#"+current_id).offset().top},'fast');
    //         // });    
    //         // console.log('above 768');
    //     }
    // }
    // // End Scrollto Functionality based on browser width
    // 
    // $(window).resize(function() {
    //   window_scroll();
    // });
    
    
    
    jQuery.event.add(window, "load", resizeFrame);
    jQuery.event.add(window, "resize", resizeFrame);
    
    function resizeFrame() {
        if($(window).width() >= 768) {
            $('.post_head').click(function() {  
                var current_id = $(this).parent().attr('id');  
                console.log(current_id);        
                $('html,body').animate({scrollTop: $("#"+current_id).offset().top},'fast');
                console.log($(this).parent().attr('id'));
                $("#"+current_id).offset().top
                console.log("#"+current_id); 
            });            
            console.log('above 768'); 
        }
         else {
                // $('.post_head').click(function() {  
                //     var current_id = $(this).parent().attr('id');  
                //     // console.log(current_id);        
                //     $('html,body').animate({scrollTop: $("#"+current_id).offset().top},'fast');
                // });    
                // console.log('above 768');
            }
    }
    
    function resizeFramez() {
        $('.post_head').click(function () {
           console.log('in here'); 
        });
    }
});















