$(document).ready(function() {

     $(".nav_icon").click(function(){
            $("nav").slideToggle("on");  
            $("#collection_bagslide ").toggleClass("on");
            $(".navicon").toggleClass("close" ,1000);
            
    });
    
    $("#section li").click(function(){
        $(this).toggleClass(".sectionclk");
    });
});

