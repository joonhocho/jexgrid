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
 JGM._add("MenuBar", MenuBar);

/**
메뉴 바를 생성하고 관리하는 {@link JGM.MenuBar MenuBar} 인스턴스 입니다.

@var {JGM.MenuBar} JGM.Grid.menubar

@author 조준호
@since 1.1.6
@version 1.1.6
*/
function MenuBar(args) {
	goog.base(this, args);
	this.grid.menubar = this;
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
	this.__menubar_a__ =
		$("<div class='" + this._options['__classMenuBar_e__'] + "'></div>")
		.prependTo(this._ctnr);

};

proto._bindEvents = function(args) {
	this.grid.event.bind({
		'onCreateCss': this.__onCreateCss_V__,
		'onDestroy': this.__destroy_aA__
	}, this);
}

proto.__destroy_aA__ = function() {	
	JGM._destroy(this, {
		name: "MenuBar",
		path: "menubar",
		"$": "__menubar_a__",
		property: "_ctnr",
		map: "_options"
	});
};

proto.__onCreateCss_V__ = function() {
	var gridId = "#" + this.grid.mid + " .",
      o = this._options,
      border = o.__borderThickness_b__ + "px " + o.__border_c__,
      rules = [];

	rules.push(gridId + o.__classMenuBar_e__ + "{" + JGM.__CONST_g__.__cssUnselectable_a__ + "overflow:hidden;width:100%;background:" + o.__background_a__ + ";border-bottom:" + border + ";height:" + o.__height_d__ + "px}");
	rules.push(gridId + o.__classIcon_f__ + "{float:left;height:" + o.__iconHeight_o__ + "px;width:" + o.__iconWidth_p__ + "px;border:" + o.__iconBorderThickness_g__ + "px " + o.__iconBorder_h__ + ";margin:" + o.__iconMargin_k__ + "px 0 0 " + o.__iconMargin_k__ + "px;background:" + o.__iconBackground_l__ + ";border-radius:" + o.__iconBorderRadius_q__ + "px;-moz-border-radius:" + o.__iconBorderRadius_q__ + "px}");
	rules.push(gridId + o.__classIcon_f__ + ":hover," + gridId + o.__classIcon_f__ + ":focus{background:" + o.__iconBackgroundHover_m__ + ";border:" + o.__iconBorderThickness_g__ + "px " + o.__iconBorderHover_i__ + "}");
	rules.push(gridId + o.__classIcon_f__ + ":active," + gridId + o.__classIcon_f__ + ".active{cursor:default;background:" + o.__iconBackgroundActive_n__ + ";border:" + o.__iconBorderThickness_g__ + "px " + o.__iconBorderActive_j__ + "}");
	rules.push(gridId + o.__classIcon_f__ + ".active:focus{border:" + o.__iconBorderThickness_g__ + "px " + o.__iconBorderFocus_r__ + "}");
	
	return rules.join("");
};

proto.addIcon = function(css, title, width, height, fn) {
	return $("<div class='" + this._options['__classIcon_f__'] + "' tabIndex='0' title='" + title + "'><div class='" + css + "' style='margin-top:" + ((this._options['__iconHeight_o__'] - height) / 2) + "px;margin-left:" + ((this._options['__iconWidth_p__'] - width) / 2) + "px'></div></div>").appendTo(this.__menubar_a__)
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
