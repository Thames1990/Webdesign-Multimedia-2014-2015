function easterEggMode() {
	var img2 = document.getElementById("avatar").src;
			
	if (img2.indexOf("images/avatar.jpg") != -1) {
		$(document).scrollTop(0);
		//TODO only load gif and let it end
		document.getElementById("one").style.backgroundImage = "url(images/EasterEgg/bannerstart.gif)";
		setTimeout(function() {document.getElementById("one").style.backgroundImage = "url(images/EasterEgg/banner2.jpg)"}, 5500);
		document.getElementById("avatar").src  = "images/EasterEgg/avatar alt.jpg";
		rotate();
		nMaus();
	} else  {
		document.getElementById("avatar").src = "images/avatar.jpg";
		$(document).scrollTop(0);
		window.location.reload();
	}
}

function rotate() {
	var img = $('.image.avatar');
    var offset = img.offset();
	
    function mouse(evt){
        var center_x = (offset.left) + (img.width()/2);
        var center_y =  (offset.top) + (img.height()/2) + $(window).scrollTop();
        var mouse_x = evt.pageX ; var mouse_y = evt.pageY;
        var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
        var degree = (radians * (180 / Math.PI) * -1) - 90; 
		
			if(degree <- 90){
				img.css("transform", "rotate(" + (degree - 180) + "deg) scaleX(-1)");
			} else { 
				img.css("transform", "rotate(" + degree + "deg) scaleX(1)");
			} 	
    }
	 $(document).mousemove(mouse);
} 

function nMaus() {
	var offX = 10;
	var offY = 10;
	//TODO use local image and delete images in html
	var img3 = document.getElementById("mouseimage");
	var safe = 1;

	img3.style.display = "block";

	$(document).mousemove(function(e){
		//TODO fix duplicated jQuery selector error
		$("#mouseimage").css({left:e.pageX + offX, top:e.pageY + offY});

		if ( e.pageX > ($(document).width() - 200)){
			$("#mouseimage").css({left:e.pageX - 150, top:e.pageY + offY});
		}
		if ( e.pageY > ($(document).height() - 200)){
			$("#mouseimage").css({left:e.pageX - offX, top:e.pageY - 150});
		}
		if ( e.pageY > ($(document).height() - 200) && e.pageX > ($(document).width() - 200)){
			$("#mouseimage").css({left:e.pageX - 150, top:e.pageY - 150});
		}
	});

	document.onkeydown = function(event) {

		if (event.keyCode == 13) {
			if  (safe==1){
				safe=0;

				img3.src  = "images/EasterEgg/nikoExplosion.gif";

				setTimeout(function(){img3.src  = ""},2999);
				setTimeout(function(){img3.src  = "images/EasterEgg/nikoNeu.gif"},3000);
				setTimeout(function(){img3.src  = ""},4199);
				setTimeout(function(){img3.src  = "images/EasterEgg/niko1.gif"}, 4200);
				setTimeout(function(){safe=1}, 4200);
			}
		}
	}
}