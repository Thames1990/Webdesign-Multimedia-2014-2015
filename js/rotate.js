$(window).load(function(){
var img = $('.image.avatar');

if(img.length > 0){
    var offset = img.offset();
    function mouse(evt){
        var center_x = (offset.left) + (img.width()/2);
        var center_y =  (offset.top) + (img.height()/2) + $(window).scrollTop();
        var mouse_x = evt.pageX ; var mouse_y = evt.pageY;
        var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
        var degree = (radians * (180 / Math.PI) * -1) - 90; 
		
		if(degree<-90){
			img.css("transform", "rotate(" + (degree-180) + "deg) scaleX(-1)");
		} else { 
			img.css("transform", "rotate(" + degree + "deg) scaleX(1)");
		} 
    }
    $(document).mousemove(mouse);
}
}); 
