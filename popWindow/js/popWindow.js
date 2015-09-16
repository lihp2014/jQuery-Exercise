$(function(){
	var loginBtn = $('.login');
	var popWindow = $('.popWindow');
	var closeBtn = $('.close');

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
	});
	closeBtn.click(function(){
		popWindow.hide();
	})
});