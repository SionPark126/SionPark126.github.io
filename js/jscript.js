$(document).ready(function() {

	// 옵션 설정부분
	var count_option = 1; // 처음보이는 제품의 개수를 정할수 있다.
	var speed_option = 400; // 제품이 슬라이드 되는 속도를 정할수 있다.
	var width_option = 960; // 제품슬라이드가 들어갈 공간의 넓이를 설정할수 있다.
	var product_option = $('ul.bag li').length; // 슬라이드 되는 전체 제품의 개수를 파악한다.

	slide({ slide : width_option , count : count_option , product : product_option });

	$('div.button > div').click(function(){

		var check = $(this).attr('class');
		var move = $('ul.bag li').width();

		if ( check == "prev" ) { 
			prevSlide({ speed : speed_option , ani : move });
            mySwipe.prev();
		} else {
			nextSlide({ speed : speed_option , ani : move });
            mySwipe.next();
		}
	});

	function slide(option){

		$('div.container').css('width',option.slide);

		var product_width = Math.ceil( option.slide / option.count);
		var ul_width = product_width * product_option;

		$('ul.bag li').css('width',product_width);
		$('ul.bag').css('width',ul_width);
	}

	function prevSlide(option){
        $('ul.bag').stop().animate({ 'left': '+=' + option.ani }, option.speed , end);    
	}

	function nextSlide(option){
		$('ul.bag').stop().animate({ 'left': '-=' + option.ani }, option.speed , end);
	}

	function end(){
        var product = $( 'div.slide' ).width();
        var rolling = $( 'ul.bag' ).width();
        var aimPosition = -( rolling - product );
        var sushiPosition = $( 'ul.bag' ).position().left;

        if( sushiPosition > 0 ) {
            $( 'ul.bag' ).animate({ 'left': 0 },200);
        } else if( sushiPosition < aimPosition ) {
            $( 'ul.bag' ).animate({ 'left': aimPosition },200); 
        }
	}

    initiBgSwipe();



    function initiBgSwipe(){
        window.mySwipe = new Swipe(document.getElementById('bgSlide'), {
            speed: 400,
            continuous: false
        } );
    }; 

    $(".nav_icon").click(function(){
            $("nav").slideToggle("on");  
            $("#collection_bagslide ").toggleClass("on");
            $(".navicon").toggleClass("close" ,1000);
    });
    
    
    $(".slide > ul.bag > li > p.view_bucket").click(function(){
        $("#view_detail").css({"display" : "block"});
        $("#view_detail").animate({"opacity" : "1"},300);
        
        var bag_name = 'BUCKETBAG';
        $("h3").text(bag_name);
        $("li.size").text('12.25” H X 10” W X 6” D');
        $("li.price").text('$695.00');
        var src = "image/zoom/" + bag_name.toLocaleLowerCase() +"_front.jpg";
        $("img.big").attr('src', src);
        
        var zoomfront = "image/text/" + bag_name.toLocaleLowerCase() +"_front.jpg";
        $("ul.photodetail > li > img.front").attr('src', zoomfront);
        var zoomside = "image/text/" + bag_name.toLocaleLowerCase() +"_side.jpg";
        $("ul.photodetail > li > img.side").attr('src', zoomside);
        var zoomleft = "image/text/" + bag_name.toLocaleLowerCase() +"_left.jpg";
        $("ul.photodetail > li > img.left").attr('src', zoomleft);
        
         return false;
        
    });
    
    $(".slide > ul.bag > li > p.view_lady").click(function(){
        $("#view_detail").css({"display" : "block"});
        $("#view_detail").animate({"opacity" : "1"},300);
        
        var bag_name = 'LADYBAG';
        $("h3").text(bag_name);
        $("li.size").text('10.5” H X 13.5” W X 5” D');
        $("li.price").text('$1,195.00');
        var src = "image/zoom/" + bag_name.toLocaleLowerCase() +"_front.jpg";
        $("img.big").attr('src', src);
        
        var zoomfront = "image/text/" + bag_name.toLocaleLowerCase() +"_front.jpg";
        $("ul.photodetail > li > img.front").attr('src', zoomfront);
        var zoomside = "image/text/" + bag_name.toLocaleLowerCase() +"_side.jpg";
        $("ul.photodetail > li > img.side").attr('src', zoomside);
        var zoomleft = "image/text/" + bag_name.toLocaleLowerCase() +"_left.jpg";
        $("ul.photodetail > li > img.left").attr('src', zoomleft);
        
        return false;
    });
    
    $(".slide > ul.bag > li > p.view_tote").click(function(){
        $("#view_detail").css({"display" : "block"});
        $("#view_detail").animate({"opacity" : "1"},300);
        
        var bag_name = 'TOTEBAG';
        $("h3").text(bag_name);
        $("li.size").text('11.5” H X 19.5” W X 6” D');
        $("li.price").text('$585.00');
        var src = "image/zoom/" + bag_name.toLocaleLowerCase() +"_front.jpg";
        $("img.big").attr('src', src);
        
        var zoomfront = "image/text/" + bag_name.toLocaleLowerCase() +"_front.jpg";
        $("ul.photodetail > li > img.front").attr('src', zoomfront);
        var zoomside = "image/text/" + bag_name.toLocaleLowerCase() +"_side.jpg";
        $("ul.photodetail > li > img.side").attr('src', zoomside);
        var zoomleft = "image/text/" + bag_name.toLocaleLowerCase() +"_left.jpg";
        $("ul.photodetail > li > img.left").attr('src', zoomleft);
        
        return false;
    });
    
    $(".slide > ul.bag > li > p.view_backpack").click(function(){
        $("#view_detail").css({"display" : "block"});
        $("#view_detail").animate({"opacity" : "1"},300);
        
        var bag_name = 'BACKPACK';
        $("h3").text(bag_name);
        $("li.size").text('12” H X 14” W X 7” D');
        $("li.price").text('$745.00');
        var src = "image/zoom/" + bag_name.toLocaleLowerCase() +"_front.jpg";
        $("img.big").attr('src', src);
        
        var zoomfront = "image/text/" + bag_name.toLocaleLowerCase() +"_front.jpg";
        $("ul.photodetail > li > img.front").attr('src', zoomfront);
        var zoomside = "image/text/" + bag_name.toLocaleLowerCase() +"_side.jpg";
        $("ul.photodetail > li > img.side").attr('src', zoomside);
        var zoomleft = "image/text/" + bag_name.toLocaleLowerCase() +"_left.jpg";
        $("ul.photodetail > li > img.left").attr('src', zoomleft);
        
        return false;
        
    });
    
    $(".slide > ul.bag > li > p.view_cross").click(function(){
        $("#view_detail").css({"display" : "block"});
        $("#view_detail").animate({"opacity" : "1"},300);
        
        var bag_name = 'CROSSBODY';
        $("h3").text(bag_name);
        $("li.size").text('7” H X 9.25” W X 2.25” D');
        $("li.price").text('$595.00');
        
        var src = "image/zoom/" + bag_name.toLocaleLowerCase() +"_front.jpg";
        $("img.big").attr('src', src);
        
        var zoomfront = "image/text/" + bag_name.toLocaleLowerCase() +"_front.jpg";
        $("ul.photodetail > li > img.front").attr('src', zoomfront);
        var zoomside = "image/text/" + bag_name.toLocaleLowerCase() +"_side.jpg";
        $("ul.photodetail > li > img.side").attr('src', zoomside);
        var zoomleft = "image/text/" + bag_name.toLocaleLowerCase() +"_left.jpg";
        $("ul.photodetail > li > img.left").attr('src', zoomleft);
        
        return false;
    });
    
    $(".slide > ul.bag > li > p.view_wallet").click(function(){
        $("#view_detail").css({"display" : "block"});
        $("#view_detail").animate({"opacity" : "1"},300);
        $("ul.photodetail > li.side > img").css({"display":"none"});
        
        
        var bag_name = 'WALLET';
        $("h3").text(bag_name);
        $("li.size").text('8.25” H X 11.75” W');
        $("li.price").text('$165.00');
        var src = "image/zoom/" + bag_name.toLocaleLowerCase() +"_front.jpg";
        $("img.big").attr('src', src);
        
          var zoomfront = "image/text/" + bag_name.toLocaleLowerCase() +"_front.jpg";
        $("ul.photodetail > li > img.front").attr('src', zoomfront);
        
        return false;
        
       
        
        
    });
    
    $("#view_detail > .detail_box > .detail > .close > a").click(function(){
        $("#view_detail").animate({"opacity" : "0"},500).css({"display" : "none"});
        
    });
    
    $('.detail_txt > .info > ul > li > ul.photodetail > li').click(function(){

            var url = $(this).find('img').attr('src').replace('.jpg','_zoom.jpg');
            var zoom = $('<img>').attr('src',url);

            $('#zoom').empty().append(zoom);
            return false;
        
    });
    
    
//    
//    $('.nav_box > ul.gnb li > ul.col_gnb li:nth-child(1) a').click(function(){
//        $('article > .slide > ul.bag > li:nth-child(1)').show();
//        $('div.bg_slide swipe > ul.bg > li:nth-child(1)').show();
//    });
//    
//    $('.nav_box > ul.gnb li > ul.col_gnb li:nth-child(2) a').click(function(){
//        $('article > .slide > ul.bag > li:nth-child(2)').show();
//        $('div.bg_slide swipe > ul.bg > li:nth-child(2)').show();
//    });
//    $('.nav_box > ul.gnb li > ul.col_gnb li:nth-child(3) a').click(function(){
//        $('ul.bg li:nth-child(3)').show();
//    });
//    $('.nav_box > ul.gnb li > ul.col_gnb li:nth-child(4) a').click(function(){
//        $('ul.bg li:nth-child(4)').show();
//    });
//    $('.nav_box > ul.gnb li > ul.col_gnb li:nth-child(5) a').click(function(){
//        $('ul.bg li:nth-child(5)').show();
//    });
//    $('.nav_box > ul.gnb li > ul.col_gnb li:nth-child(6) a').click(function(){
//        $('ul.bg li:nth-child(6)').show();
//    });
//    

});

