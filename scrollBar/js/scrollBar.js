$(function(){
	var outer = $('.outer');
	var inner = $('.inner');
	var outerContent = $('.outerContent');
	var innerContent = $('.innerContent');
	var outerHeight = outer.height();
	var innerHeight = inner.height();
	var dragHeight = innerContent.height() - outerContent.height();

	inner.mousedown(function(e){
		var offsetInner = inner.offset();
		var disY = e.pageY - offsetInner.top;

		$(document).mousemove(function(e){
			var posTop = e.pageY - disY;
			if (posTop < 0) {
				posTop = 0;
			} else if (posTop > outerHeight - innerHeight) {
				posTop = outerHeight - innerHeight;
			}
			inner.css('top',posTop);

			//计算滑块滑动的距离所占总高度的比例
			var percentage = posTop/(outerHeight - innerHeight);
			innerContent.css('top',-percentage*dragHeight);
		});

		$(document).mouseup(function(){
			$(document).unbind('mousemove');
			$(document).unbind('mousedown');
		});

		return false;
	});

		//添加鼠标滚动事件
		var speed = 0;
		$(document).on('mousewheel',function(e){
		if(e.deltaY == -1) {
			speed++;
			if(speed > (outerHeight - innerHeight)/10){
				speed = (outerHeight - innerHeight)/10;
			}
		} else {
			speed--;
			if(speed < 0) {
				speed = 0;
			}
		}

		inner.css('top',speed*10);
		var percentage = (speed*10)/(outerHeight - innerHeight);
		innerContent.css('top',-percentage*dragHeight);
	});
});