$(function() {
	var tLi = $('.title li');
	var contLi = $('.content li');
	tLi.click(function() {
		var index = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		contLi.eq(index).removeClass('hide').siblings().addClass('hide');
	});
});