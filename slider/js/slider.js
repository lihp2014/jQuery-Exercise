$(function(){
	var numLi = $('.wrap ol li');
	var oul = $('.wrap ul');
	var imgLi = $('.wrap ul li');
	var imgWidth = imgLi.width();
	var _now = 0;//保存数字索引
	var timeId = null;

	numLi.click(function(){
		var index = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		oul.animate({'left':-imgWidth*index});
	});

	function slide() {
		if(_now == numLi.length-1) {
			_now = 0;
		} else {
			_now++;
		}
		numLi.eq(_now).addClass('current').siblings().removeClass('current');
		oul.animate({'left':-imgWidth*_now});
	}

	timeId = setInterval(slide,1500);

	$('.wrap').mouseover(function(){
		clearInterval(timeId);
	}).mouseout(function(){
		timeId = setInterval(slide,1500);
	})
});