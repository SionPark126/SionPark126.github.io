$(document).ready(function() {

     $(".nav_icon").click(function(){
            $("nav").slideToggle("on");  
            $("article").toggleClass("on");
            $(".navicon").toggleClass("close" ,1000);
    });
});

