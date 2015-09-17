//选择div中的有Class或ID的元素
var $ = function(selector){
	if(!selector) {return [];}
	var arrEle = [];
	if(document.querySelectorAll) {
		arrEle = document.querySelectorAll(selector);
	} else {
		var oAll = document.getElementsByTagName('div'), lAll = oAll.length;
		if(lAll) {
			var i = 0;
			for(i; i < lAll; i+=1) {
				if(/^\./.test(selector)) {
					if(oAll[i].className === selector.replace('.','')) {
						arrEle.push(oAll[i]);
					}
				} else if(/^#/.test(selector)) {
					if(oAll[i].id === selector.replace('#','')) {
						arrEle.push(oAll[i]);
					}
				}
			}
		}
	}
	return arrEle;
};