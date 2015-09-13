$(function(){
	var numLi = $('.wrap ol li');
	var oul = $('.wrap ul');
	var imgLi = $('.wrap ul li');
	var imgWidth = imgLi.width()
	numLi.click(function(){
		var index = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		oul.animate({'left':-imgWidth*index});
	})
});