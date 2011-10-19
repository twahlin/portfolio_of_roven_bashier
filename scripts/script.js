// $(function () {
//     $(".work").click(function () {
//         var currentElement = $(this);
//         var currentDiv = currentElement.parent().find(".pics");
//         var first = true;
//         if ($(".pics:visible").length > 0 && !currentDiv.equals($(".pics:visible"))) {
//             first = false;
//             $.scrollTo($(".pics:visible").parent(), 500, { onAfter: function () {
//                 $(".pics:visible").slideUp(500, function () {
//                     $.scrollTo(currentElement, 500, { onAfter: function () {
//                         currentDiv.slideDown(500, function () {
//                             $.scrollTo(currentElement, { speed: 500 });
//                         });
//                     }
//                 });
//             });
//         }
//     });
// }
// if (currentDiv.is(":hidden") && first) {
//     currentDiv.slideDown(500, function () {
//         $.scrollTo(currentElement, { speed: 500 });
//     });
// }
// else if (first) {
//     currentDiv.slideUp(500, function () {
//         $.scrollTo(currentElement, 500);
//     });
// }
// });
// $(".close").click(function (){
//     var currentElement = $(this).parent();
//     var currentDiv = currentElement.parent().find(".work");
//     var currentPic = currentElement.parent().find(".pics");
//     $.scrollTo(currentDiv, 500, { onAfter: function () {
//         currentPic.slideUp(500);
//     }});
// });
// });
// $.fn.equals = function (compareTo) {
//     if (!compareTo || !compareTo.length || this.length != compareTo.length) {
//         return false;
//     }
//     for (var i = 0; i < this.length; i++) {
//         if (this[i] !== compareTo[i]) {
//             return false;
//         }
//     }
//     return true;


$(document).ready(function() {
    
    
    
    
$('.post_content .hide_content').removeClass('hidden');    
$('.post_content').addClass('hidden');    
    
$('.post_head').click(function() {
	$(this).toggleClass('post_head_active');
    $('.post_content').slideToggle('slow', function() {

    });
});
    
  
   
    
});




