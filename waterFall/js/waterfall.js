$(function(){
	var box = $('.box');
	var i = 0, len = box.length;
	var now = 0;
	var boxHeight = {
		leftBox:[],
		centerBox:[],
		rightBox:[]
	};

	for(i; i<len; i++) {
		now = i%3;
		//根据 now 来判断是哪一列
		switch(now){
			case 0:
				box.eq(i).css('left','10px');
				boxHeight.leftBox.push(box.eq(i).height());
				var now2 = Math.floor(i/3);
				//设置每一列中 box 的 top 值
				if(now2 == 0) {
					box.eq(i).css('top','10px');
				} else {
					var total = 0;
					for(var j=0;j<now2;j++){
						total += boxHeight.leftBox[j] + 10;
					}
					box.eq(i).css('top',total);
				}
			break;
			case 1:
				box.eq(i).css('left','270px');
				boxHeight.centerBox.push(box.eq(i).height());
				var now2 = Math.floor(i/3);
				//设置每一列中 box 的 top 值
				if(now2 == 0) {
					box.eq(i).css('top','10px');
				} else {
					var total = 0;
					for(var j=0;j<now2;j++){
						total += boxHeight.centerBox[j] + 10;
					}
					box.eq(i).css('top',total);
				}
			break;
			case 2:
				box.eq(i).css('left','540px');
				boxHeight.rightBox.push(box.eq(i).height());
				var now2 = Math.floor(i/3);
				//设置每一列中 box 的 top 值
				if(now2 == 0) {
					box.eq(i).css('top','10px');
				} else {
					var total = 0;
					for(var j=0;j<now2;j++){
						total += boxHeight.rightBox[j] + 10;
					}
					box.eq(i).css('top',total);
				}
			break;
		}
	}
});