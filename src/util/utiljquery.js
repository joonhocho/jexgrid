/*!
 * AUTHOR
 *   The JexGrid was written and is maintained by:
 *       Joon Ho Cho <joonho1101@gmail.com>
 * COPYRIGHT
 *   Copyright (c) 2010-2011, WebCash Inc. All rights reserved.
 */
(function () {

 goog.provide('Util$');

Util$.is$ = function(val) {
	return (val instanceof jQuery) ? true : false;
};

Util$.safe$ = function(val) {
	return (val instanceof jQuery) ? val : $(val);
};

Util$.unbindRemove = function(obj) {
	obj.unbind().remove();
};

jQuery.fn.getBoundingRect = function() {
	var off = this.offset();
	return { left: off.left, top: off.top, width: this.outerWidth(), height: this.outerHeight() };
};

jQuery.fn.containsEvent = function(e) {
	if (this.length === 0) {
		return false;
	}
	var box,
		contains,
		x,
		y;
	if (this.length <= 1) {
		box = this.getBoundingRect();
		x = e.pageX;
		y = e.pageY;
		return (x >= box.left && x <= box.left + box.width && y >= box.top && y <= box.top + box.height);
	}
	contains = false;
	this.each(function(i, v) {
		box = $(this).getBoundingRect();
		x = e.pageX;
		y = e.pageY;
		if (x >= box.left && x <= box.left + box.width && y >= box.top && y <= box.top + box.height) {
			contains = true;
			return false;
		}
	});
	return contains;
};

Util$.baseurlOfHeadScript = function(filename) {
	var url = $(document.getElementsByTagName('head')[0]).find("script[src$='" + filename + "']").attr('src');
	return url.substring(0, url.indexOf(filename));
};

Util$.calScrollbarDims = function(container) {
	if (Util.isNotNull(window.__SCROLLBAR_DIM__)) {
		return window.__SCROLLBAR_DIM__;
	}

	if (Util.isNotNull(window.opener) && Util.isNotNull(window.opener.__SCROLLBAR_DIM__)) {
		return window.opener.__SCROLLBAR_DIM__;
	}

	var cont = Util$.safe$(container),
		dim,
		tmp;
	cont[0].innerHTML = "<div id='scrollbardim' style='position:absolute;top:-10000px;left:-10000px;width:100px;height:100px;overflow:scroll;'></div>";
	tmp = $(document.getElementById("scrollbardim"));
	dim = {
		w: tmp.width() - tmp[0].clientWidth,
		h: tmp.height() - tmp[0].clientHeight
	};
	cont[0].innerHTML = "";

	window.__SCROLLBAR_DIM__ = dim;
	return dim;
};

if (window.JGM !== undefined) {window.JGM._add("Util$"); } // TBR

})();
