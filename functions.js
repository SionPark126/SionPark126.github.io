// new fullpage('#fullpage',{
//   sectionsColor: ['yellow','orange']
// }
// )


$(document).ready(function(){
  $('#workbutton').click(function(){
    console.log("entered")
  //  $("#workbutton").css({"transform": "scale(1.5)"})
    $("#workbutton").animate({
      width: $(window).width(),
      height: $(window).height(),
      top: "10px",
      left: -($(window).width()/2)
    },1500);
    // $("#resume").parent().css({"display":"none"});
    // $("#contact").parent().css({"display":"none"});

    // $("#Resume").parent().animate({
    //   width: "10%"
    // },1500);
    // $("#contact").parent().animate({
    //   width: "10%"
    // },1500);

  })
});

//   var position = 0;
//
// //should start at 0
// // $(window).scroll(function() {
// //     var scroll = $(this).scrollTop();
// //     console.log(position)
// //     console.log(scroll)
// //     //scrolling down
// //     if(scroll > position) {
// //         console.log('scrollDown');
// //
// //         $("html, body").animate({scrollTop: $("#page2").offset().top},800);
// //     //scrolling up
// //     } else {
// //          console.log('scrollUp');
// //          $("html,body").animate({scrollTop: $("body").offset().top},800);
// //     }
// //     position = scroll;
// // });
// // });
//
// $(".arrow").click(function(){
//   $("html, body").animate({scrollTop: $("#page2").offset().top},800);
// })
//
//
// $(window).scroll(function(){
//   console.log("scroll");
//   $("html, body").animate({scrollTop: $("#page1").offset().top},800);
// })
// });
