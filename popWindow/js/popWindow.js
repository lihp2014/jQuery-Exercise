$(function(){
	var loginBtn = $('.login');
	var popWindow = $('.popWindow');
	var closeBtn = $('.close');
	var mask = $('.mask');

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
		mask.show().css({
			'width':viewWidth,
			'height':viewHeight
		});
	});
	closeBtn.click(function(){
		popWindow.hide();
		mask.hide();
	});

	$(window).resize(function(){
		viewWidth = $(window).width();
		viewHeight = $(window).height();
		positionLeft = viewWidth/2 - popWidth/2;
		positionTop = viewHeight/2 - popHeight/2;
		
		popWindow.css({
			'left':positionLeft,
			'top':positionTop
		});
		mask.css({
			'width':viewWidth,
			'height':viewHeight
		});
	})
});