$(function(){

	$('.draggable').mousedown(function(e){
		var offsetDiv = $('.draggable').offset();
		var disX = e.pageX - offsetDiv.left;
		var disY = e.pageY - offsetDiv.top;

		$(document).mousemove(function(e){
			var posLeft = e.pageX - disX;
			var posTop = e.pageY - disY;
			if(posLeft < 0) {
				posLeft = 0;
			} else if (posLeft > $(document).width() - $('.draggable').outerWidth()) {
				posLeft = $(document).width() - $('.draggable').outerWidth();
			}
			if(posTop < 0) {
				posTop = 0;
			} else if (posTop > $(document).height() - $('.draggable').height()) {
				posTop = $(document).height() - $('.draggable').height();
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