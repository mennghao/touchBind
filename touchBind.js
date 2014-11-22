var eventBind = (function(){
	var MSPointerType = {
			start : "MSPointerOver",
			move  : "MSPointerMove",
			end   : "MSPointerOut"
	},
		PointerType = {
			start : "pointerover",
			move  : "pointermove",
			end   : "pointerout"
	},
		touchType = {
			start : "touchstart",
			move  : "touchmove",
			end   : "touchend"
	},
	_mainType;

	if (window.navigator.msPointerEnabled) {
		_mainType = MSPointerType;
	} else if (window.navigator.pointerEnabled) {
		_mainType = PointerType;
	} else {
		_mainType = touchType;
	}

	return function(el, action, callback, use){
        var use = use || false;
		el.addEventListener(_mainType[action], callback, use);
	}
}());