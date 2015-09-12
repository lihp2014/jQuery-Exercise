$(function() {
	//将原始的图片列表复制一份放在后面
	var oul = $('.wrap ul');
	oulHtml = oul.html();
	oul.html(oulHtml + oulHtml);
	var oulWidth = oul.width();

	setInterval(function(){
		$('.wrap ul').css({'left':'-=2px'});
		if($('.wrap ul').css('left') == -oulWidth/2+'px') {
			$('.wrap ul').css({'left':0});
		}
	},30);
})