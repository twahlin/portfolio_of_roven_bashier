$(document).ready(function() {


    //Hide iphone bar
    window.addEventListener("load",function() {
        setTimeout(function(){
            window.scrollTo(0, 1);
        }, 0);
    });
    //End Hide iphone bar


    $('.post_content').addClass('hidden');   
    $('.post_content .hide_content').removeClass('hidden');    
    
    
    //close button closes drawer
    $('.hide_content').click(function() {
        $('.post_head').removeClass('post_head_active');
        $('.post_content').slideUp('slow', function () {
        
        });
    });    
    
    //toggle active class and open project drawer    
    $('.post_head').click(function() {
     $(this).toggleClass('post_head_active');
     $(this).next().slideToggle('slow', function() {
    
        });
    });
    
    //when close button is clicked, scroll to top    
    $('.hide_content').click(function() {
        $('html, body').animate({
            scrollTop: $('header').offset().top
        }, 1000);
    }); 
      
    //better to animate opacity here item fade in
    // $('.post').css("display", "none");
    //   
    // $('.post').each(function(index) {
    //     $(this).delay(100*index).fadeIn(1000);
    // });
      
    
});















