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
	})
});