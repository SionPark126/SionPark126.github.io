var linkList = [
    ""
    , "text.html"
]

$(document).ready(function() {
    
	$('div.main').animate({opacity : 1} , 2500); 
	$('#fullpage').fullpage({

		navigation : true , 
		css3 : false ,
		anchors : ['p1' , 'p2' , 'p3' , 'p4' , 'p5'] ,


		//3번째 페이지로 이동했을 때 애니메이션 작동
		afterLoad: function(anchorLink, index){
			if (index >= 1){
				$('header').animate({ top : '50%' , opacity : 1} , 1000); 
			}
		},
        onLeave: function(index, nextIndex, direction){
            if( index == 1 ){
                $("header").css("opacity", 0 );
                $("header").css("top", "0%" );
                
                setTimeout( function(){
                    $("header").css("display", "block");
                    $('header').animate({ top : '50%' , opacity : 1} , 1000); 
                }, 800);
            }
            
            if( nextIndex == 1 ){
                $("header").css("display", "none");
                $("header").css("opacity", 0 );
            }
            
            if( nextIndex > 1 ){
                $("header ul li.menu").removeClass("selected");
                $("header ul li.menu:eq(" + ( nextIndex - 2 ) + ")").addClass("selected");
            }
        } 
	});
	
    $(".gnb li.menu a").click( function(){
        location.href = $(this).attr("data-link"); 
    });
});