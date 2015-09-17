$(function(){
	var loginBtn = $('.login');
	var popWindow = $('.popWindow');
	var closeBtn = $('.close');
	var oMask = $('<div class="mask"></div>');

	var viewWidth = $(window).width();
	var viewHeight = $(window).height();

	var popWidth = $('.popWindow').outerWidth();
	var popHeight = $('.popWindow').height();

	var positionLeft = viewWidth/2 - popWidth/2;
	var positionTop = viewHeight/2 - popHeight/2;

	loginBtn.click(function(){
		popWindow.show().css({
			'left':positionLeft,
			'top':positionTop
		});
		$("body").append(oMask);
		oMask.css({
			'width':viewWidth,
			'height':viewHeight
		});
	});
	closeBtn.click(function(){
		popWindow.hide();
		oMask.remove();
	});

	//浏览器窗口变化时仍使弹出窗口居中
	$(window).resize(function(){
		viewWidth = $(window).width();
		viewHeight = $(window).height();
		positionLeft = viewWidth/2 - popWidth/2;
		positionTop = viewHeight/2 - popHeight/2;
		if(popWindow.is(':visible')){
			popWindow.css({
				'left':positionLeft,
				'top':positionTop
			});
			$("body").append(oMask);
			oMask.css({
				'width':viewWidth,
				'height':viewHeight
			});
		}
	});

	//使弹出窗口可拖动
	$('.popWindow .title').mousedown(function(e){
		var popWindow = $('.popWindow').offset();
		var disX = e.pageX - popWindow.left;
		var disY = e.pageY - popWindow.top;

		$(document).mousemove(function(e){
			posLeft = e.pageX - disX;
			posTop = e.pageY - disY;
			//限制弹出窗口的可拖动的范围不超过可视区
			if(posLeft < 0) {
				posLeft = 0;
			} else if(posLeft > $(document).width() - $('.popWindow').outerWidth(true)) {
				posLeft = $(document).width() - $('.popWindow').outerWidth(true);
			}
			if(posTop < 0) {
				posTop = 0;
			} else if(posTop > $(document).height() - $('.popWindow').outerHeight(true)) {
				posTop = $(document).height() - $('.popWindow').outerHeight(true);
			}
			$('.popWindow').css({
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