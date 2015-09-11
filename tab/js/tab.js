$(function() {
	var tLi = $('.title li');
	var contLi = $('.content li');

	tLi.mouseover(function() {
		var _this = $(this);
		setTimeout(function() {
			var index = _this.index();
			_this.addClass('current').siblings().removeClass('current');
			contLi.eq(index).removeClass('hide').siblings().addClass('hide');
		},300);
	});
});