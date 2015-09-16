$(function(){
	var loginBtn = $('.login');
	var popWindow = $('.popWindow');
	var closeBtn = $('.close');

	loginBtn.click(function(){
		popWindow.show();
	});
	closeBtn.click(function(){
		popWindow.hide();
	})
});