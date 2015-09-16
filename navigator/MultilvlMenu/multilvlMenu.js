$(function(){
	var tLi = $('li');
	tLi.mouseover(function(){
		$(this).children('ul').show();
	}).mouseout(function(){
		$(this).children('ul').hide();
	})
});