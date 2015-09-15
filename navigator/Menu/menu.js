$(function(){
	var more = $('.more');
	var cont = $('.content');
	more.click(function(){
		if(cont.is(':visible')){
			cont.hide();
		} else {
			cont.show();
		}
	})
});