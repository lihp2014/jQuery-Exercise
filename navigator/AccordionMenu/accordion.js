$(function(){
	var oTitle = $('.title');
	oTitle.click(function(){
		$(this).next().slideToggle().siblings('ul').slideUp();
		if($(this).children('span').hasClass('point-right')){
			$(this).children('span').removeClass('point-right').addClass('point-down');
		} else {
			$(this).children('span').removeClass('point-down').addClass('point-right');
		}
	});
});