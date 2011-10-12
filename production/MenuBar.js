goog.require('jx.util');
goog.require('jx.grid');
goog.require('jx.grid.BaseModule');
goog.require('jx.grid.Grid');
goog.require('jx.grid.ColumnManager');
goog.provide('jx.grid.MenuBar');
/*!
 * AUTHOR
 *   The JexGrid was written and is maintained by:
 *       Joon Ho Cho <joonho1101@gmail.com>
 * COPYRIGHT
 *   Copyright (c) 2010-2011, WebCash Inc. All rights reserved.
 */
(function() {
var JGM = goog.getObjectByName('jx.grid'),
	Util = goog.getObjectByName('jx.util'),
	BaseModule = goog.getObjectByName('jx.grid.BaseModule');
 goog.exportSymbol('jx.grid.MenuBar', MenuBar);
/**
메뉴 바를 생성하고 관리하는 {@link JGM.MenuBar MenuBar} 인스턴스 입니다.
@var {JGM.MenuBar} jx.grid.Grid.menubar
@author 조준호
@since 1.1.6
@version 1.1.6
*/
function MenuBar(args) {
	goog.base(this, args);
	this.grid['menubar'] = this;
	this.columnWidths = {};
}
goog.inherits(MenuBar, BaseModule);
MenuBar.getInstance = function(args) {
	return new MenuBar(args);
};
var proto = MenuBar.prototype;
proto._defaultOptions = function() {
	var imgUrl = this.grid._options['imageUrl'];
	return {
		'background': "url(" + imgUrl + "menubar-bg.png) repeat-x scroll center",
		'borderThickness': 1,
		'border': "solid #b6bac0",
		'height': 27,
		'classMenuBar': "menubar",
		'classIcon': "menu-icon",
		'classColumnToggleIcon': "jgrid-column-toggle-icon",
		'columnIconUrl': imgUrl + "data-creator-icon.png",
		'columnIconWidth': 15,
		'columnIconHeight': 15,
		'iconBorderThickness': 1,
		'iconBorder': "solid transparent",
		'iconBorderHover': "solid #d4d4d4",
		'iconBorderActive': "solid #9a9a9a",
		'iconMargin': 2,
		'iconBackground': "",
		'iconBackgroundHover': "url(" + imgUrl + "menu-icon-hover.png) repeat-x scroll center",
		'iconBackgroundActive': "url(" + imgUrl + "menu-icon-active.png) repeat-x scroll center",
		'iconHeight': 21,
		'iconWidth': 21,
		'iconBorderRadius': 4,
		'iconBorderFocus': "solid #5f5f5f"
	};
}
proto._init = function(args) {
	var opt = this._options;
	this._ctnr = args['container'];
	this._menubar =
		$("<div class='" + opt['classMenuBar'] + "'></div>")
		.prependTo(this._ctnr);
	var element = Util.element,
		input = Util.input,
		SAFE = Util.SAFE,
		columns = this.getColumns(),
		i = 0,
		l = columns.length,
		list = '',
		mid = this.mid,
		column,
		key,
		id;
	for (; i < l; i++) {
		column = columns[i];
		key = column.key;
		id = mid + '-toggle-column-' + key;
		list += element('label', {
			'for': id
		}, element('li', {
			'class': column.hidden ? 'unchecked' : null
		}, input('checkbox', {
			'id': id,
			checked: !column.hidden,
			onclick: "JGM.m.MenuBar." + mid + ".toggleColumn('" + key + "', this.checked, this)"
		}) + column.name, SAFE), SAFE);
	}
	var ul = this.ul = $(element('ul', {
		'class': 'jgrid-column-toggle-box'
	}, list, SAFE)).appendTo(this.grid._ctnr);
	var offset = ul.offset();
	ul.css({
		top: offset.top,
		left: offset.left + 26
	});
	ul.hide();
	this.columnIcon = this.addIcon(opt['classColumnToggleIcon'], "현재 보여지는 열을 숨기거나 숨겨진 열을 보이도록 합니다.", opt['columnIconWidth'], opt['columnIconHeight'], function() {
		ul.toggle();
	});
};
proto.mousedown = function(e) {
	if (!(Util.contains(this.columnIcon[0], e.target) || Util.contains(this.ul[0], e.target))) {
		this.ul.hide();
		if (this.columnIcon.hasClass("active")) {
			this.columnIcon.toggleClass("active");
		}
	}
}
proto.toggleColumn = function(key, show, checkbox) {
	columnWidths = this.columnWidths;
	if (show) {
		this.getView().setWidthByKey(key, this.columnWidths[key]);
		$(checkbox.parentNode).removeClass('unchecked');
	}
	else {
		this.columnWidths[key] = this.getColMgr().getByKey(key).width;
		this.getView().setWidthByKey(key, 0);
		$(checkbox.parentNode).addClass('unchecked');
	}
};
proto._bindEvents = function(args) {
	this.grid['event'].bind({
		'onCreateCss': this._onCreateCss,
		'onDestroy': this._destroy,
		'mousedown': this.mousedown
	}, this);
}
proto._destroy = function() {	
	JGM._destroy(this, {
		name: "MenuBar",
		path: "menubar",
		"$": "_menubar",
		property: "_ctnr",
		map: "_options"
	});
};
proto._onCreateCss = function() {
	var gridId = "#" + this.grid['mid'] + " .",
      opt = this._options,
      border = opt['borderThickness'] + "px " + opt['border'],
      rules = [];
	rules.push(gridId + opt['classMenuBar'] + "{" + JGM._CONST._cssUnselectable + "position:relative;overflow:hidden;width:100%;background:" + opt['background'] + ";border-bottom:" + border + ";height:" + opt['height'] + "px}");
	rules.push(gridId + opt['classIcon'] + "{float:left;height:" + opt['iconHeight'] + "px;width:" + opt['iconWidth'] + "px;border:" + opt['iconBorderThickness'] + "px " + opt['iconBorder'] + ";margin:" + opt['iconMargin'] + "px 0 0 " + opt['iconMargin'] + "px;background:" + opt['iconBackground'] + ";border-radius:" + opt['iconBorderRadius'] + "px;-moz-border-radius:" + opt['iconBorderRadius'] + "px}");
	rules.push(gridId + opt['classIcon'] + ":hover," + gridId + opt['classIcon'] + ":focus{background:" + opt['iconBackgroundHover'] + ";border:" + opt['iconBorderThickness'] + "px " + opt['iconBorderHover'] + "}");
	rules.push(gridId + opt['classIcon'] + ":active," + gridId + opt['classIcon'] + ".active{cursor:default;background:" + opt['iconBackgroundActive'] + ";border:" + opt['iconBorderThickness'] + "px " + opt['iconBorderActive'] + "}");
	rules.push(gridId + opt['classIcon'] + ".active:focus{border:" + opt['iconBorderThickness'] + "px " + opt['iconBorderFocus'] + "}");
	rules.push(gridId + opt['classColumnToggleIcon'] + "{background:url(" + opt['columnIconUrl'] + ") no-repeat center;width:" + opt['columnIconWidth'] + "px;height:" + opt['columnIconHeight'] + "px}");
	rules.push('.jgrid-column-toggle-box{position:absolute;top:0;left:0;z-index:100;list-style-type:none;margin:0;padding:0;border:1px solid #888;background:#eee}');
	rules.push('.jgrid-column-toggle-box li{cursor:pointer;padding:1px 4px 1px 0px}');
	rules.push('.jgrid-column-toggle-box li.unchecked{background:#ccc}');
	//rules.push('.jgrid-column-toggle-box li:hover{background:#cdf}');
	
	return rules.join("");
};
proto.addIcon = function(css, title, width, height, fn) {
	var button = $("<div class='" + this._options['classIcon'] + "' tabIndex='0' title='" + title + "'><div class='" + css + "' style='margin-top:" + ((this._options['iconHeight'] - height) / 2) + "px;margin-left:" + ((this._options['iconWidth'] - width) / 2) + "px'></div></div>").appendTo(this._menubar);
	function runButton(e) {
		if (fn) {
			fn();
		}
		button.toggleClass("active");
		e.preventDefault();
	}
	var enterKey = Util.keyMapKeydown.enter,
		spaceKey = Util.keyMapKeydown.space;
	button.click(runButton).keydown(function(e) {
		var key = e.which;
		if (key === enterKey || key === spaceKey) {
			runButton(e);
		}
	});
	return button;
};
proto.appendHtml = function(html) {
	return $(html).appendTo(this._menubar);
};
proto.append$ = function(jq) {
	return jq.appendTo(this._menubar);
};
}());
