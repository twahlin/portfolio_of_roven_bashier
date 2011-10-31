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
                // current_id = $(this).parent().attr('id');
                // $.scrollTo('#' + current_id, 500);
			});
		}
		return false;
	});
    // End custom accordion functionality
});















