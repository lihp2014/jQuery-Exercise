$(function() {
	//将原始的图片列表复制一份放在后面
	var oul = $('.wrap ul');
	var oulWidth = oul.width();
	var speed = 2;
	oulHtml = oul.html();
	oul.html(oulHtml + oulHtml);
	var timeID = null;

	$('.goLeft').click(function() {
		speed = -2;
	});

	$('.goRight').click(function() {
		speed = 2;
	});

	function slider() {
		if(speed < 0) {
			if ($('.wrap ul').css('left') == -oulWidth / 2 + 'px') {
				$('.wrap ul').css({
					'left': '0px'
				});
			}
			$('.wrap ul').css({
				// 'left': '+='+'speed'+'px'
				'left' : '-='+(-speed)+'px'
			});
		} else {
			if ($('.wrap ul').css('left') == '0px') {
				$('.wrap ul').css({
					'left': -oulWidth / 2 + 'px'
				});
			}
			$('.wrap ul').css({
				'left': '+='+speed+'px'
			});
		}
	}

	timeID = setInterval(slider,30);

	$('.wrap').mouseover(function() {
		clearInterval(timeID);
	}).mouseout(function() {
		timeID = setInterval(slider,30);
	});
});