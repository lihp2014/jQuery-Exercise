$(function() {
	var tLi = $('.title li');
	var contLi = $('.content li');
	var aLi = tLi.children('a');
	// var timeID = null;

	// tLi.mouseover(function() {
	// 	var _this = $(this);
	// 	timeID = setTimeout(function() {
	// 		var index = _this.index();
	// 		_this.addClass('current').siblings().removeClass('current');
	// 		contLi.eq(index).removeClass('hide').siblings().addClass('hide');
	// 	},300);
	// }).mouseout(function() {
	// 	clearTimeout(timeID);
	// });

	//实现页面刷新之后保持最后一次标签的高亮
	tLi.click(function(event){
		var index = $(this).index();
		var query = $(this).children('a').attr('href').split("?")[1];
		$(this).addClass('current').siblings().removeClass('current');
		contLi.eq(index).removeClass('hide').siblings().addClass('hide');
		if(history.pushState && query){
			/*ajax载入*/
			//history处理
			if(event && /\d/.test(event.button)){
				history.pushState({},0,location.href.split("?")[0]+"?"+query);
			}
		}
		return false;
	});

	var fnHashTrigger = function(target) {
	var query = location.href.split("?")[1],eleTarget = target || null;
		if (typeof query == "undefined") {
			if(eleTarget = aLi.eq(0)) {
				//如果没有查询字符，则使用第一个导航元素的查询字符串
				// console.log(eleTarget);
				history.replaceState({title:document.title},document.title,location.href.split("#")[0] + "?" + eleTarget.attr('href').split("?")[1]) + location.hash;
				fnHashTrigger(eleTarget);
			}
		} else {
			tLi.each(function(){
				if (eleTarget === null && $(this).children('a').attr('href').split("?")[1] === query) {
					eleTarget = this;
				}
			});

			if(!eleTarget){
				//如果查询序列没有对应的导航菜单，去除查询然后执行回调
				history.replaceState({},0,location.href.split("?")[0]);
				fnHashTrigger();
			} else {
				$(eleTarget).trigger("click");
			}
		}
	};

	if(history.pushState) {
		window.addEventListener("popstate",function(){
			fnHashTrigger();
		});

		//默认载入
		fnHashTrigger();
	}
});