$(function(){

	$('.draggable').mousedown(function(e){
		var offsetDiv = $('.draggable').offset();
		var disX = e.pageX - offsetDiv.left;
		var disY = e.pageY - offsetDiv.top;

		$(document).mousemove(function(e){
			var posLeft = e.pageX - disX;
			var posTop = e.pageY - disY;
			$('.draggable').css({
				'left':posLeft,
				'top':posTop
			});
		});

		$(document).mouseup(function(){
			$(document).unbind('mousemove');
			$(document).unbind('mousedown');
		});
	});
});