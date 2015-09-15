$(function(){
	var oTitle = $('.title');
	oTitle.click(function(){
		$(this).next().slideToggle('fast',function(){
			if($(this).css('display')=='block') {
				$(this).prev().children('span').removeClass('point-right').addClass('point-down');
			} else {
				$(this).prev().children('span').removeClass('point-down').addClass('point-right');
			}
		}).siblings('ul').slideUp('fast',function(){
			if($(this).css('display')=='block') {
				$(this).prev().children('span').removeClass('point-right').addClass('point-down');
			} else {
				$(this).prev().children('span').removeClass('point-down').addClass('point-right');
			}
		});
	});
});