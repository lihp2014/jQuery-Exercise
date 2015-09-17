$(function(){

	$('.draggable').mousedown(function(e){
		var outerDiv = $('.outer').offset();
		var offsetDiv = $('.draggable').offset();
		var disX = e.pageX - offsetDiv.left + outerDiv.left;
		var disY = e.pageY - offsetDiv.top + outerDiv.left;

		$(document).mousemove(function(e){
			var posLeft = e.pageX - disX;
			var posTop = e.pageY - disY;
			if(posLeft < 0) {
				posLeft = 0;
			} else if (posLeft > $('.outer').width() - $('.draggable').outerWidth()) {
				posLeft = $('.outer').width() - $('.draggable').outerWidth();
			}
			if(posTop < 0) {
				posTop = 0;
			} else if (posTop > $('.outer').height() - $('.draggable').height()) {
				posTop = $('.outer').height() - $('.draggable').height();
			}
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