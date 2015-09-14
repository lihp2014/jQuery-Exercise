$(function(){
	var numLi = $('.wrap ol li');
	var oul = $('.wrap ul');
	var imgLi = $('.wrap ul li');
	var imgWidth = imgLi.width();
	var _now = 0;//保存数字索引

	numLi.click(function(){
		var index = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		oul.animate({'left':-imgWidth*index});
	});

	setInterval(function(){
		if(_now == numLi.length-1) {
			_now = 0;
		} else {
			_now++;
		}
		numLi.eq(_now).addClass('current').siblings().removeClass('current');
		oul.animate({'left':-imgWidth*_now});
	},1500);
});