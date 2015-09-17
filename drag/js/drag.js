$(function(){

	$('.draggable').mousedown(function(e){
		//offset() 是元素相对于文档的定位
		var outerDiv = $('.outer').offset();
		var offsetDiv = $('.draggable').offset();
		var disX = e.pageX - offsetDiv.left;
		var disY = e.pageY - offsetDiv.top;

		$(document).mousemove(function(e){
			var posLeft = e.pageX - disX - outerDiv.left;
			var posTop = e.pageY - disY - outerDiv.top;
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