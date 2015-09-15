$(function(){
	var numLi = $('.wrap ol li');
	var oul = $('.wrap ul');
	var imgLi = $('.wrap ul li');
	var imgWidth = imgLi.width();
	var _now = 0;//保存数字索引
	var _now2 = 0;//保存图片滑动索引
	var timeId = null;

	numLi.click(function(){
		var index = $(this).index();
		_now = index;
		$(this).addClass('current').siblings().removeClass('current');
		oul.animate({'left':-imgWidth*index},500);
	});

	function slide() {
		if(_now == numLi.length-1) {
			imgLi.eq(0).css({
				'position':'relative',
				'left':oul.width()-imgWidth
			})
			_now = 0;
		} else {
			_now++;
		}
		_now2++;
		numLi.eq(_now).addClass('current').siblings().removeClass('current');
		oul.animate({'left':-imgWidth*_now2},500,function(){
			if(_now==0){
				imgLi.eq(0).css('position','static');
				oul.css('left',0);
				_now2=0;
			}
		});
	}

	timeId = setInterval(slide,1000);

	$('.wrap').mouseover(function(){
		clearInterval(timeId);
	}).mouseout(function(){
		timeId = setInterval(slide,1000);
	})
});