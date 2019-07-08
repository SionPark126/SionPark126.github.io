// fullpage customization
$('#fullpage').fullpage({
 sectionsColor: ['#B8AE9C', '#348899'],
  // sectionSelector: '.vertical-scrolling',
  // slideSelector: '.horizontal-scrolling',
 navigation: true
  // slidesNavigation: true,
  // controlArrows: false,
  // anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
  // menu: '#menu',
  //
  // afterLoad: function(anchorLink, index) {
  //   $header_top.css('background', 'rgba(0, 47, 77, .3)');
  //   $nav.css('background', 'rgba(0, 47, 77, .25)');
  //   if (index == 5) {
  //       $('#fp-nav').hide();
  //     }
  // },
  //
  // onLeave: function(index, nextIndex, direction) {
  //   if(index == 5) {
  //     $('#fp-nav').show();
  //   }
  // },
  //
  // afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
  //   if(anchorLink == 'fifthSection' && slideIndex == 1) {
  //     $.fn.fullpage.setAllowScrolling(false, 'up');
  //     $header_top.css('background', 'transparent');
  //     $nav.css('background', 'transparent');
  //     $(this).css('background', '#374140');
  //     $(this).find('h2').css('color', 'white');
  //     $(this).find('h3').css('color', 'white');
  //     $(this).find('p').css(
  //       {
  //         'color': '#DC3522',
  //         'opacity': 1,
  //         'transform': 'translateY(0)'
  //       }
  //     );
  //   }
  // },
  //
  // onSlideLeave: function( anchorLink, index, slideIndex, direction) {
  //   if(anchorLink == 'fifthSection' && slideIndex == 1) {
  //     $.fn.fullpage.setAllowScrolling(true, 'up');
  //     $header_top.css('background', 'rgba(0, 47, 77, .3)');
  //     $nav.css('background', 'rgba(0, 47, 77, .25)');
  //   }
  // }
});


// $(document).ready(function(){
//   $('#workbutton').click(function(){
//     console.log("entered")
//   //  $("#workbutton").css({"transform": "scale(1.5)"})
//     $("#workbutton").animate({
//       width: $(window).width(),
//       height: $(window).height(),
//       top: "10px",
//       left: -($(window).width()/2)
//     },1500);
//     // $("#resume").parent().css({"display":"none"});
//     // $("#contact").parent().css({"display":"none"});
//
//     // $("#Resume").parent().animate({
//     //   width: "10%"
//     // },1500);
//     // $("#contact").parent().animate({
//     //   width: "10%"
//     // },1500);
//
//   })
// });

//    var position = 0;
// //
// //should start at 0
// $(window).scroll(function() {
//     var scroll = $(this).scrollTop();
//     console.log(position)
//     console.log(scroll)
//     //scrolling down
//     if(scroll > position) {
//         console.log('scrollDown');
//
//         $("html, body").animate({scrollTop: $("#page2").offset().top},800);
//     //scrolling up
//     } else {
//          console.log('scrollUp');
//          $("html,body").animate({scrollTop: $("#page1").offset().top},800);
//     }
//     position = scroll;
// });
// });
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
