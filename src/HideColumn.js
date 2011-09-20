window.console && window.console.log && window.console.log('reading javascript source "HideColumn.js"...');//IF_DEBUG

goog.require('array_extension');
goog.require('engine_extension');
goog.require('jx.util');
goog.require('jx.grid');
goog.require('jx.grid.BaseModule');
goog.require('jx.grid.Grid');

goog.provide('jx.grid.HideColumn');

/*!
 * AUTHOR
 *   The JexGrid was written and is maintained by:
 *       Joon Ho Cho <joonho1101@gmail.com>
 * COPYRIGHT
 *   Copyright (c) 2010-2011, WebCash Inc. All rights reserved.
 */
(function() {'use strict';
var JGM = goog.getObjectByName('jx.grid'),
	Util = goog.getObjectByName('jx.util'),
	BaseModule = goog.getObjectByName('jx.grid.BaseModule');

 goog.exportSymbol('jx.grid.HideColumn', HideColumn);

function HideColumn(args) {
	this.mid = args.mid;

	this.grid = args.grid;
	
	/**
	필터링을 하여 데이터 검색을 관리하는 {@link JGM.SeachManager SeachManager} 인스턴스 입니다.

	@var {JGM.SeachManager} jx.grid.Grid.search

	@author 조준호
	@since 1.2.0
	@version 1.2.1
	*/
	this.grid['hiddenColumns'] = this;

	var options = {};

	this._options = JGM._extend(options, args['options']);

	this._hiddenColumns = {};

	
	this.__init();
}

var prototype = HideColumn.prototype;

prototype._onCreateCss = function() {
	var gridId = "#" + this.grid['mid'] + " .",
		opt = this._options,
		rules = [];

	return rules.join("");
};

HideColumn.getInstance = function(args) {
	return new HideColumn(args);
};

prototype.__init = function() {
	this.grid['event'].bind({
		'onRenderModules': this._onRenderModules,
		'onCreateCss': this._onCreateCss,
		'onDestroy': this._destroy
	}, this);
};

prototype._onRenderModules = function() {
	var html = [],
		opt = this._options,
		menubar = this.grid['menubar'],
		thisIns = this,
		selectId = "jgrid-hidden-column-select-" + mid;

		menubar.appendHtml('<select id="' + selectId + '" class="' + opt['classSelect'] + '" style="float:left;" onchange="JGM.m.HiddenColumn.' + mid + '.restoreColumn(this.value)"></select>');

	var searchbar = this._masterInput = document.getElementById(selectId);

	///////////////////

	$(searchbar).keyup(function(e) {
		var key = e.which;
		if (key === Util.keyMapKeydown.enter) {
			thisIns._parse(searchbar.value);
		}
		else if (key === Util.keyMapKeydown.esc) {
			thisIns._removeAllOptions();
		}
	});
};

prototype._destroy = function() {
	JGM._destroy(this, {
		name: "HideColumn",
		path: "search",
		"$": "_advButton _mask _tag _adv",
		array: "_global",
		map: "_globalMap _filterMap _tagMap _codeMap _nameMap _options _keyToName"
	});
};

prototype.restoreColumn = function(key) {
	if (key != null) {
		if (this._hiddenColumns.hasOwnProperty(key)) {
			this.getView().setWidthByKey(key, this._hiddenColumns[key]);
			delete this._hiddenColumns[key];
			this.updateSelect();
		}
	}
};

prototype.updateSelect = function() {
};

prototype.hideColumn = function(key) {
	if (key != null) {
		if (this._hiddenColumns.hasOwnProperty(key)) {
			this.getView().setWidthByKey(key, this._hiddenColumns[key]);
			delete this._hiddenColumns[key];
			this.updateSelect();
		}
	}
};

}());
