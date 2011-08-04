console && console.log && console.log('reading javascript source "MenuBar.js"...');//IF_DEBUG

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
}

goog.inherits(MenuBar, BaseModule);

MenuBar.getInstance = function(args) {
	return new MenuBar(args);
};

var proto = MenuBar.prototype;

proto._defaultOptions = function() {
	return {
		'background': "url(" + this.grid._options['imageUrl'] + "menubar-bg.png) repeat-x scroll center",
		'borderThickness': 1,
		'border': "solid #b6bac0",
		'height': 27,
		'classMenuBar': "menubar",
		'classIcon': "menu-icon",
		'iconBorderThickness': 1,
		'iconBorder': "solid transparent",
		'iconBorderHover': "solid #d4d4d4",
		'iconBorderActive': "solid #9a9a9a",
		'iconMargin': 2,
		'iconBackground': "",
		'iconBackgroundHover': "url(" + this.grid._options['imageUrl'] + "menu-icon-hover.png) repeat-x scroll center",
		'iconBackgroundActive': "url(" + this.grid._options['imageUrl'] + "menu-icon-active.png) repeat-x scroll center",
		'iconHeight': 21,
		'iconWidth': 21,
		'iconBorderRadius': 4,
		'iconBorderFocus': "solid #5f5f5f"
	};
}

proto._init = function(args) {
	this._ctnr = args['container'];
	this._menubar =
		$("<div class='" + this._options['classMenuBar'] + "'></div>")
		.prependTo(this._ctnr);

};

proto._bindEvents = function(args) {
	this.grid['event'].bind({
		'onCreateCss': this._onCreateCss,
		'onDestroy': this._destroy
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

	rules.push(gridId + opt['classMenuBar'] + "{" + JGM._CONST._cssUnselectable + "overflow:hidden;width:100%;background:" + opt['background'] + ";border-bottom:" + border + ";height:" + opt['height'] + "px}");
	rules.push(gridId + opt['classIcon'] + "{float:left;height:" + opt['iconHeight'] + "px;width:" + opt['iconWidth'] + "px;border:" + opt['iconBorderThickness'] + "px " + opt['iconBorder'] + ";margin:" + opt['iconMargin'] + "px 0 0 " + opt['iconMargin'] + "px;background:" + opt['iconBackground'] + ";border-radius:" + opt['iconBorderRadius'] + "px;-moz-border-radius:" + opt['iconBorderRadius'] + "px}");
	rules.push(gridId + opt['classIcon'] + ":hover," + gridId + opt['classIcon'] + ":focus{background:" + opt['iconBackgroundHover'] + ";border:" + opt['iconBorderThickness'] + "px " + opt['iconBorderHover'] + "}");
	rules.push(gridId + opt['classIcon'] + ":active," + gridId + opt['classIcon'] + ".active{cursor:default;background:" + opt['iconBackgroundActive'] + ";border:" + opt['iconBorderThickness'] + "px " + opt['iconBorderActive'] + "}");
	rules.push(gridId + opt['classIcon'] + ".active:focus{border:" + opt['iconBorderThickness'] + "px " + opt['iconBorderFocus'] + "}");
	
	return rules.join("");
};

proto.addIcon = function(css, title, width, height, fn) {
	return $("<div class='" + this._options['classIcon'] + "' tabIndex='0' title='" + title + "'><div class='" + css + "' style='margin-top:" + ((this._options['iconHeight'] - height) / 2) + "px;margin-left:" + ((this._options['iconWidth'] - width) / 2) + "px'></div></div>").appendTo(this._menubar)
	.click(function(e) {
		fn();
		$(this).toggleClass("active");
		e.preventDefault();
	})
	.keydown(function(e) {
		if (e.which === Util.keyMapKeydown.enter || e.which === Util.keyMapKeydown.space) {
			fn();
			$(this).toggleClass("active");
			e.preventDefault();
		}
	});
};

}());
