$(function(){
	var imgSmallLi = $('.zoomSmallList li');
	var imgMiddle = $('.zoomMiddle');
	var imgMiddleOffset = imgMiddle.offset();

	imgSmallLi.mouseover(function(){
		//鼠标滑动更换中图路径
		$(this).addClass('current').siblings().removeClass();
		var imgSrc = $(this).children('img').attr('src');
		imgMiddle.children('img').attr('src',imgSrc);
	});

	imgMiddle.mouseover(function(e){
		$('.mask').show();
		$('.zoomLarge').show();
		imgMiddle.mousemove(function(e){
			var x = e.pageX - imgMiddleOffset.left - $('.mask').width()/2;
			var y = e.pageY - imgMiddleOffset.top - $('.mask').height()/2;
			if(x<0) {
				x=0;
			} else if(x>imgMiddle.width()-$('.mask').width()) {
				x=imgMiddle.width()-$('.mask').width();
			}
			if(y<0) {
				y=0;
			} else if(y>imgMiddle.height()-$('.mask').height()) {
				y=imgMiddle.height()-$('.mask').height();
			}
			$('.mask').css({
				'left':x,
				'top':y
			});

			//计算比例
			var percentageX = x/(imgMiddle.width()-$('.mask').width());
			var percentageY = y/(imgMiddle.height()-$('.mask').height());
			$('.zoomLarge img').css({
				'left':-percentageX*($('.zoomLarge img').width() - $('.zoomLarge').width()),
				'top':-percentageY*($('.zoomLarge img').height() - $('.zoomLarge').height())
			})

		});
	});

	imgMiddle.mouseout(function(){
		$('.mask').hide();
		$('.zoomLarge').hide();
	})
});