goog.require('engine_extension');
goog.require('jx.util');
goog.require('jx.grid');
goog.require('jx.grid.BaseModule');
goog.require('jx.grid.Grid');
goog.require('jx.grid.ColumnManager');
goog.require('jx.data.DataManager');
goog.provide('jx.grid.CheckManager');
/*!
 * AUTHOR
 *   The JexGrid was written and is maintained by:
 *       Joon Ho Cho <joonho1101@gmail.com>
 * COPYRIGHT
 *   Copyright (c) 2010-2011, WebCash Inc. All rights reserved.
 */
/**
  JGM
  @scope JGM
  */
(function() {
	var JGM = goog.getObjectByName('jx.grid'),
	Util = goog.getObjectByName('jx.util'),
	BaseModule = goog.getObjectByName('jx.grid.BaseModule');
goog.exportSymbol('jx.grid.CheckManager', CheckManager);
/**
  CheckManager 모듈. 그리드 로우의 선택을 담당하는 모듈입니다.
  CheckManager 클래스. checkbox 와 radio 타입의 선택을 지원합니다.
  @class {CheckManager} JGM.CheckManager
  @author 조준호
  @since 1.0.0
  @version 1.1.0
  */
/**
  CheckManager 컨스트럭터 입니다.
  @constructor {CheckManager} CheckManager
  @param {Object} args - CheckManager 모듈 파라미터 오브젝트
  @... {jx.grid.Grid} args.grid - CheckManager 를 포함하는 {@link jx.grid.Grid} 인스턴스
  @... {Object} args.options - CheckManager 옵션 오브젝트
  @returns {CheckManager} CheckManager 모듈 인스턴스를 리턴합니다.
  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
function CheckManager(args) {
	function afteroption(event) {
		var options = this._options;
		var isRadio = this._isRadio = options['isRadio'] = !!options['isRadio'];
		this._hasMaster = options['master'] = !isRadio && !!options['master'];
		this._col = options['colDef'];
		this._key = this._col['key'];
		this._cssClass = options['classCheck'];
		this._cssClassMaster = options['classMasterCheck'];
		this._name = options['name'] || (isRadio && ("radio" + this.mid)) || null;
	}
	this.addEventListener('afteroption', afteroption);
	goog.base(this, args);
	this.removeEventListener('afteroption', afteroption);
}
goog.inherits(CheckManager, BaseModule);
CheckManager.getInstance = function(args) {
	return new CheckManager(args);
};
var prototype = CheckManager.prototype;
prototype._init = function() {
	this._map = {};
	this.disabledmap = {};
	this._count = 0;
	this._disabled = false;
	this._master;
	var size,
		con = JGM._CONST,
		colmgr = this.getColMgr();
	if (!colmgr.getByKey(this._col.key)) {
		colmgr.addAt(this._options['colIdx'], this._col);
	}
	if (!con._checkboxWidth) {
		size = Util.calCheckSize();
		con._checkboxWidth = size.checkboxW;
		con._checkboxHeight = size.checkboxH;
		con._radioWidth = size.radioW;
		con._radioHeight = size.radioH;
	}
};
prototype._bindEvents = function() {
	var key = this._col.key,
		events;
	events = {
		'onAfterSetDatalist': this.uncheckAll,
		'onAfterRerender': this._updateMaster,
		'onIdChange': this._onIdChange,
		'onIdListChange': this._onIdListChange,
		'onRemoveDatarow': this._onRemoveDatarow,
		'onRemoveDatalist': this._onRemoveDatalist,
		'onSearch': this._onSearch
	};
	events["onRenderCell_" + key + "_prepend"] = this._onRenderCell;
	events["keydownColSel_" + key + "_" + Util.keyMapKeydown.space] = this._keydownColSel;
	if (this._hasMaster) {
		events["onRenderHeader_" + key + "_prepend"] = this._onRenderHeader;
		events.onRenderHeadersComplete = this._getMaster;
	}
	this.bindGridEvent(events, this);
};
prototype._onSearch = function(filtered) {
	if (filtered) {
		this.disableMaster();
	}
	else {
		this.enableMaster();
	}
};
prototype._defaultOptions = function() {
	/**
	  CheckManager 모듈의 기본 옵션 값들을 정의합니다.
	  @type {Object} options
	  @private
	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	return {
		/**
		  체크 컬럼을 나타내는 컬럼 정의 오브젝트입니다. <br>기본값:<code>{key:"checkbox", width: 20, name:" "}</code>
		  @type {Object=} JGM.CheckManager.options.colDef
		  @private
		  @see jx.grid.ColumnManager.options.colDef
		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'colDef': {'key':"checkbox", 'width': 20, 'name':" ", 'noTitle':true, 'resizable':false, 'sorter':null, 'filter':null, 'noSearch':true, 'editor':null, 'inputOnCreate':false},
		/**
		  {@link JGM.CheckManager.options.colDef colDef} 을 몇번째 컬럼으로 넣을지를 정합니다. <br>기본값:<code>0</code>
		  @type {number=} JGM.CheckManager.options.colIdx
		  @private
		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'colIdx': 0,
		/**
		  체크 input 들의 name attribute 에 공통적으로 넣을 값입니다. <br>기본값:<code>undefined</code>
		  @type {string=} JGM.CheckManager.options.name
		  @private
		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'name': undefined,
		/**
		  체크 input 들에 공통적으로 적용되는 CSS 클래스 입니다. <br>기본값:<code>"checkmg"</code>
		  @type {string=} JGM.CheckManager.options.classCheck
		  @private
		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'classCheck': "checkmg",
		/**
		  마스터 헤더 체크 input 에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"checkm"</code>
		  @type {string=} JGM.CheckManager.options.classMasterCheck
		  @private
		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'classMasterCheck': "checkm",
		/**
		  checkbox 를 위한 마스터 헤더 체크를 생성할지 여부입니다. <br>기본값:<code>true</code>
		  @type {boolean=} JGM.CheckManager.options.master
		  @private
		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'master': true,
		/**
		  true 일 경우 radio 타입의 input, false 일 경우 checkbox 타입의 input 을 생성합니다. <br>기본값:<code>false</code>
		  @type {boolean=} JGM.CheckManager.options.isRadio
		  @private
		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'isRadio': false
	};
}
prototype._beforeCreateCss = function(event) {
	var w,
		h,
		checkCommon,
		css = event.css;
	if (this._isRadio) {
		w = JGM._CONST._radioWidth || 13;
		h = JGM._CONST._radioHeight || 13;
	}
	else {
		w = JGM._CONST._checkboxWidth || 13;
		h = JGM._CONST._checkboxHeight || 13;
	}
	checkCommon = "*overflow:hidden;padding:0;width:" + w + "px;height:" + h + "px;";
	css.push(this.getView()._getCellSelector() + " ." + this._cssClass + "[mid='" + this.mid + "']{" +
		checkCommon +
		"margin:" + ((this.getView()._getRowInnerHeight() - h) / 2) + "px 0 0 " + ((this._col['width'] - this.getView()._getPadding() - w) / 2) + "px}" +
		"#" + this.mid + "h{" +
		checkCommon +
		"margin:" + ((this.getHeader()._options['height'] - h) / 2) + "px 0 0 0}");
};
/**
  주어진 데이터 어레이안의 데이터들을 모두 체크합니다. 현재 그리드가 가진 데이터들과
  데이터의 내용은 같지만 메모리상 다른 주소를 가지는 데이터들일 경우 데이터 매핑을
  합니다.
  @function {} checkList
  @param {Array.<Object>} list - 체크할 데이터 어레이
  @param {boolean=} nomap - true 일 경우 데이터 매핑을 하지 않습니다.
  @see jx.data.DataManager.mapList 데이터 매핑을 합니다.
  @see check
  @author 조준호
  @since 1.0.0
  @version 1.0.1
  */
prototype.checkList = function(list, nomap) {
	if (!nomap) {
		list = this.getDataMgr().mapList(list).mapped;
	}
	var i = 0,
		len = list.length;
	for (; i < len; i++) {
		this.check(list[i], true);
	}
};
/**
  {@link checkList} 와 같지만 체크하기 전에, 기존에 체크된 리스트를 모두 제거합니다.
  @function {} setCheckList
  @param {Array.<Object>} list - 체크할 데이터 어레이
  @param {boolean=} nomap - true 일 경우 데이터 매핑을 하지 않습니다.
  @see uncheckAll
  @see checkList
  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
prototype.setCheckList = function(list, nomap) {
	this.uncheckAll();
	this.checkList(list, nomap);
};
/**
  현재 체크된 데이터들의 어레이를 리턴합니다.
  @function {Array.<Object>} getCheckList
  @returns {Array.<Object>} 현재 체크된 데이터들의 어레이
  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
prototype.getCheckList = function() {
	return Util.toArray(this._map);
};
/**
  현재 비활성화된 데이터들의 어레이를 리턴합니다.
  @function {Array.<Object>} getDisableds
  @returns {Array.<Object>} 현재 비활성화된 데이터들의 어레이
  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.getDisableds = function() {
	return Util.toArray(this.disabledmap);
};
/**
  모든 데이터의 체크를 토글합니다. 모든 데이터가 체크되어 있을 경우, 모든 체크를
  해제하고, 하나의 데이터라도 체크되어 있지 않은 경우 모든 데이터를 체크합니다.
  @function {} toggleCheckAll
  @see uncheckAll
  @see checkAll
  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
prototype.toggleCheckAll = function() {
	return this.isCheckedAll() ? this.uncheckAll() : this.checkAll();
};
prototype.clickMaster = function(checked) {
	var all = this.getAllData(),
		list = this.getDataList();
	if (all.length === list.length) {
		return checked ? this.checkAll() : this.uncheckAll();
	}
	if (checked) {
		CheckManager._check(this.getCheckboxes());
		var len = list.length,
			idKey = this.getIdKey(),
			id,
			datarow,
			i = 0;
		for (; i < len; i++) {
			datarow = list[i];
			if (this._add(datarow, datarow[idKey])) {
				this.triggerGridEvent("onCheckChange", [datarow, true], true);
			}
		}
	}
	else {
		CheckManager._uncheck(this.getCheckboxes());
		var len = list.length,
			idKey = this.getIdKey(),
			id,
			datarow,
			i = 0;
		for (; i < len; i++) {
			datarow = list[i];
			if (this._remove(datarow, datarow[idKey])) {
				this.triggerGridEvent("onCheckChange", [datarow, false], true);
			}
		}
	}
}
/**
  모든 데이터를 체크합니다.
  @function {} checkAll
  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
prototype.checkAll = function() {
	if (this._hasMaster) {
		CheckManager._check(this._master);
	}
	CheckManager._check(this.getCheckboxes());
	var list = this.getAllData(),
		len = list.length,
		idKey = this.getIdKey(),
		map = this._map,
		i = 0;
	for (; i < len; i++) {
		map[list[i][idKey]] = list[i];
	}
	this._count = len;
};
/**
  모든 데이터를 체크를 헤재합니다.
  @function {} uncheckAll
  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
prototype.uncheckAll = function() {
	if (this._hasMaster) {
		CheckManager._uncheck(this._master);
	}
	CheckManager._uncheck(this.getCheckboxes());
	this._map = {};
	this._count = 0;
};
/**
  주어진 데이터의 체크를 토글합니다.
  @function {} toggleCheck
  @param {Object} datarow - 체크 토글할 데이터
  @param {boolean=} nomap - true 일 경우 데이터 매핑을 하지 않습니다.
  @see check
  @see uncheck
  @author 조준호
  @since 1.0.0
  @version 1.1.0
  */
prototype.toggleCheck = function(datarow, nomap) {
	if (!nomap) {
		datarow = this.getDataMgr().map(datarow);
	}
	if (this.isChecked(datarow, true) && !this._isRadio) {
		this.uncheck(datarow, true);
	}
	else {
		this.check(datarow, true);
	}
};
/**
  주어진 데이터의 활성화를 토글합니다.
  @function {} toggleDisable
  @param {Object} datarow - 활성화를 토글할 데이터
  @param {boolean=} nomap - true 일 경우 데이터 매핑을 하지 않습니다.
  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.toggleDisable = function(datarow, nomap) {
	if (!nomap) {
		datarow = this.getDataMgr().map(datarow);
	}
	if (this.isDisabled(datarow, true)) {
		this.enable(datarow, true);
	}
	else {
		this.disable(datarow, true);
	}
};
/**
  주어진 아이디를 가진 데이터를 체크를 토글합니다.
  @function {} toggleById
  @param {Object} id - 체크 토글할 데이터의 아이디
  @param {boolean=} nomap - true 일 경우 데이터 매핑을 하지 않습니다.
  @see check
  @see uncheck
  @author 조준호
  @since 1.0.0
  @version 1.3.0
  */
/*
 * 1.3.0 - toggle -> toggleById
 */
prototype.toggleById = function(id) {
	this.toggleCheck(this.getDataMgr().getById(id), true);
};
/**
  주어진 데이터를 체크합니다. 이미 체크된 데이터일 경우 아무것도 하지 않습니다.<br>
  트리거 이벤트: {@link onCheckChange}
  @function {} check
  @param {Object} datarow - 체크할 데이터
  @param {boolean=} nomap - true 일 경우 데이터 매핑을 하지 않습니다.
  @author 조준호
  @since 1.0.0
  @version 1.1.0
  */
prototype.check = function(datarow, nomap) {
	if (!nomap) {
		datarow = this.getDataMgr().map(datarow);
	}
	if (!this._add(datarow)) {
		return;
	}
	CheckManager._check(this.getCheckbox(datarow));
	this._updateMaster();
	/**
	  CheckManager 에서 하나의 데이터가 체크/해제 되었을 경우에 트리거되는 이벤트입니다.<br>
	  트리거링 함수: {@link check}, {@link uncheck}
	  @event {Event} onCheckChange
	  @param {Object} datarow - 체크/해제 된 데이터 로우
	  @param {boolean} checked - 체크되었으면 true, 해제되었으면 false 의 값을 가집니다.
	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	this.triggerGridEvent("onCheckChange", [datarow, true], true);
};
/**
  주어진 데이터의 체크를 해제합니다. 체크되어있지 않은 경우 아무것도 하지 않습니다.<br>
  트리거 이벤트: {@link onCheckChange}
  @function {} uncheck
  @param {Object} datarow - 체크 해제할 데이터
  @param {boolean=} nomap - true 일 경우 데이터 매핑을 하지 않습니다.
  @author 조준호
  @since 1.0.0
  @version 1.1.0
  */
prototype.uncheck = function(datarow, nomap) {
	if (!nomap) {
		datarow = this.getDataMgr().map(datarow);
	}
	if (!this._remove(datarow)) {
		return;
	}
	CheckManager._uncheck(this.getCheckbox(datarow));
	if (this._hasMaster) {
		CheckManager._uncheck(this._master);
	}
	this.triggerGridEvent("onCheckChange", [datarow, false], true);
};
/**
  주어진 데이터에 해당하는 체크박스를 비활성화 합니다.
  트리거 이벤트: {@link onDisableCheck}
  @function {} disable 
  @param {Object} datarow -활성화할 데이터
  @param {boolean=} nomap - true 일 경우 데이터 매핑을 하지 않습니다.
  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.disable = function(datarow, nomap) {
	var datam = this.getDataMgr();
	if (!nomap) {
		datarow = datam.map(datarow);
	}
	var id = datam.getId(datarow),
		map = this.disabledmap;
	if (map.hasOwnProperty(id)) {
		return;
	}
	map[id] = datarow;
	CheckManager.disableNode(this.getCheckbox(datarow));
	/**
	  CheckManager 에서 하나의 데이터가 비활성화 되었을 경우에 트리거되는 이벤트입니다.<br>
	  @event {Event} onDisableCheck
	  @param {Object} datarow - 체크 박스가 비활성화 된 데이터 로우
	  @author 조준호
	  @since 1.3.0
	  @version 1.3.0
	  */
	this.triggerGridEvent("onDisableCheck", [datarow], true);
};
/**
  주어진 데이터에 해당하는 체크박스를 활성화 합니다.
  트리거 이벤트: {@link onEnableCheck}
  @function {} enable 
  @param {Object} datarow -비활성화할 데이터
  @param {boolean=} nomap - true 일 경우 데이터 매핑을 하지 않습니다.
  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.enable = function(datarow, nomap) {
	var datam = this.getDataMgr();
	if (!nomap) {
		datarow = datam.map(datarow);
	}
	var id = datam.getId(datarow),
		map = this.disabledmap;
	if (!map.hasOwnProperty(id)) {
		return;
	}
	delete map[id];
	CheckManager.enableNode(this.getCheckbox(datarow));
	/**
	  CheckManager 에서 하나의 데이터가 활성화 되었을 경우에 트리거되는 이벤트입니다.<br>
	  @event {Event} onEnableCheck
	  @param {Object} datarow - 체크 박스가 활성화 된 데이터 로우
	  @author 조준호
	  @since 1.3.0
	  @version 1.3.0
	  */
	this.triggerGridEvent("onEnableCheck", [datarow], true);
};
prototype._updateMaster = function() {
	if (this._hasMaster) {
		CheckManager._setCheck(this._master, this.isCheckedAll());
	}
};
prototype._add = function(datarow, id) {
	id = id || datarow[this.getIdKey()];
	if (this._map.hasOwnProperty(id)) {
		return false;
	}
	if (this._isRadio) {
		this._map = {};
		this._count = 0;
	}
	this._map[id] = datarow;
	this._count++;
	return true;
};
prototype._remove = function(datarow, id) {
	id = id || datarow[this.getIdKey()];
	var map = this._map;
	if (!map.hasOwnProperty(id)) {
		return false;
	}
	delete map[id];
	this._count--;
	return true;
};
/**
  주어진 데이터의 체크 여부를 리턴합니다.
  @function {boolean} isChecked
  @param {Object} datarow - 체크 여부를 확인할 데이터
  @param {boolean=} nomap - true 일 경우 데이터 매핑을 하지 않습니다.
  @returns {boolean} 체크 되었을 경우 true, 아닌 경우 false
  @author 조준호
  @since 1.0.0
  @version 1.1.0
  */
prototype.isChecked = function(datarow, nomap) {
	var datam = this.getDataMgr();
	if (!nomap) {
		datarow = datam.map(datarow);
	}
	return this._map.hasOwnProperty(datam.getId(datarow));
};
/**
  주어진 데이터의 체크 활성화 여부를 리턴합니다.
  @function {boolean} isDisabled 
  @param {Object} datarow - 체크 활성화 여부를 확인할 데이터
  @param {boolean=} nomap - true 일 경우 데이터 매핑을 하지 않습니다.
  @returns {boolean} 체크 비활성화 되었을 경우 true, 아닌 경우 false
  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.isDisabled = function(datarow, nomap) {
	var datam = this.getDataMgr();
	if (!nomap) {
		datarow = datam.map(datarow);
	}
	return this.disabledmap.hasOwnProperty(datam.getId(datarow));
};
prototype.splitChecked = function(datalist, nomap) {
	if (!nomap) {
		datalist = this.getDataMgr().mapList(datalist).mapped;
	}
	var checked = [],
		unchecked = [],
		i = 0,
		len = datalist.length,
		idKey = this.getIdKey(),
		data,
		map = this._map;
	for (; i < len; i++) {
		if (map.hasOwnProperty((data = datalist[i])[idKey])) {
			checked.push(data);
		}
		else {
			unchecked.push(data);
		}
	}
	return {'checked':checked, 'unchecked':unchecked};
};
/**
  모든 데이터의 체크 여부를 리턴합니다.
  @function {boolean} isCheckedAll
  @returns {boolean} 모든 데이터가 체크 되었을 경우 true, 아닌 경우 false
  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
prototype.isCheckedAll = function() {
	var count = this._count;
	if (count) {
		var allLen = this.getAllData().length;
		if (count === allLen) {
			return true;
		}
		var datalist = this.getDataList(),
			showLen = datalist.length;
		if (showLen !== allLen) {
			var i = 0;
			for (; i < showLen; i++) {
				if (!this.isChecked(datalist[i], true)) {
					return false;
				}
			}
			return true;
		}
	}
	return false;
};
/**
  체크된 모든 데이터를 그리드에서 제거합니다.
  @function {} removeChecked
  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.removeChecked = function() {
	return this.getDataMgr().removeList(this.getCheckList());
};
prototype._getMaster = function() {
	this._master = $(document.getElementById(this.mid + "h"));
};
prototype._getChecks = function(rows) {
	var len = rows.length,
		checks = [],
		i = 0,
		col = this.getColMgr().getIdxByKey(this._key);
	for (; i < len; i++) {
		checks.push(rows[i].childNodes[col].childNodes[0]);
	}
	return checks;
};
/**
  현재 캐쉬된 체크 박스 DOM Element 들을 리턴합니다.
  @function {DOMElement[]} getCheckboxes
  @returns {DOMElement[]} 캐쉬된 채크 박스들
  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.getCheckboxes = function() {
	return this._getChecks(this.getView().getRenderedRows());
};
/**
  아이디에 해당하는 체크 박스 DOM Element 를 리턴합니다.
  @function {DOMElement} getCheckboxById
  @returns {DOMElement} 채크 박스
  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.getCheckboxById = function(id) {
	var row = this.getView().getRowById(id);
	if (row) {
		return row.childNodes[this.getColMgr().getIdxByKey(this._key)].childNodes[0];
	}
};
/**
  로우 데이터에 해당하는 체크 박스 DOM Element 를 리턴합니다.
  @function {DOMElement} getCheckbox
  @returns {DOMElement} 채크 박스
  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.getCheckbox = function(datarow) {
	return this.getCheckboxById(this.getDataMgr().getId(datarow));
};
/**
  인덱스에 해당하는 체크 박스 DOM Element 를 리턴합니다.
  @function {DOMElement} getCheckboxByIdx
  @returns {DOMElement} 채크 박스
  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.getCheckboxByIdx = function(i) {
	return this.getCheckboxById(this.getDataMgr().getIdByIdx(i));
};
prototype._onRemoveDatarow = function(datarow) {
	this.uncheck(datarow, true);
	this.enable(datarow, true);
};
prototype._onRemoveDatalist = function(datalist) {
	var i = 0,
		len = datalist.length;
	for (; i < len; i++) {
		this.uncheck(datalist[i], true);
		this.enable(datalist[i], true);
	}
};
prototype._onIdChange = function(datarow, before, after) {
	var map = this._map,
		dmap = this.disabledmap;
	if (map.hasOwnProperty(before)) {
		delete map[before];
		map[after] = datarow;
	}
	if (dmap.hasOwnProperty(before)) {
		delete dmap[before];
		dmap[after] = datarow;
	}
};
prototype._onIdListChange = function(datalist, idBefores, idKey) {
	var i = 0,
		len = datalist.length,
		map = this._map,
		dmap = this.disabledmap,
		data,
		before;
	for (; i < len; i++) {
		data = datalist[i];
		before = idBefores[i];
		if (map.hasOwnProperty(before)) {
			delete map[before];
			map[data[idKey]] = data;
		}
		if (dmap.hasOwnProperty(before)) {
			delete dmap[before];
			dmap[data[idKey]] = data;
		}
	}
};
prototype._keydownColSel = function(e, colSelections, lastSelection) {
	e.preventDefault();
	if (colSelections && lastSelection) {
		var checked = this.isChecked(lastSelection.getDatarow(), true),
			row,
				list = this.getDataList();
		if (this._isRadio) {
			for (row in colSelections) {
				if (colSelections.hasOwnProperty(row)) {
					if (row === "length") {
						continue;
					}
					this.check(list[row], true);
					return;
				}
			}
		}
		else {
			for (row in colSelections) {
				if (colSelections.hasOwnProperty(row)) {
					if (row === "length") {
						continue;
					}
					if (checked) {
						this.uncheck(list[row], true);
					}
					else {
						this.check(list[row], true);
					}
				}
			}
		}
	}
};
prototype._onRenderHeader = function(headerHtml) {
	headerHtml.push("<input id='" + this.mid + "h' type='checkbox' tabIndex='-1' onclick='JGM.m.CheckManager." + this.mid + ".clickMaster(this.checked);' class='" + this._cssClass + " " + this._cssClassMaster + "' mid='" + this.mid + "'");
	if (this.isCheckedAll()) {
		headerHtml.push(" checked='checked'");
	}
	if (this._disabled) {
		headerHtml.push(" disabled='disabled'");
	}
	headerHtml.push("/>");
};
prototype._onRenderCell = function(rowIdx, colIdx, datarow, colDef, cellHtml) {
	cellHtml.push("<input tabIndex='-1' onclick=\"JGM.m.CheckManager." + this.mid + ".toggleById('" + datarow[this.getIdKey()] + "')\" type='" + (this._isRadio ? "radio" : "checkbox") + "' class='" + this._cssClass + "' mid='" + this.mid + "'");
	if (this._name) {
		cellHtml.push(" name='" + this._name + "'");
	}
	if (this.isChecked(datarow, true)) {
		cellHtml.push(" checked='checked'");
	}
	if (this._disabled || this.isDisabled(datarow, true)) {
		cellHtml.push(" disabled='disabled'");
	}
	cellHtml.push("/>");
};
/**
  CheckManager 를 비활성화 합니다.
  @function {} disableAll
  @author 조준호
  @since 1.0.0
  @version 1.3.0
  */
/*
 * changelog
 * 1.3.0: disable -> disableAll
 */
prototype.disableAll = function() {
	if (this._disabled) {
		return;
	}
	this._disabled = true;
	if (this._hasMaster) {
		this._master.attr("disabled", "disabled");
	}
	$(this.getCheckboxes()).attr("disabled", "disabled");
};
/**
  CheckManager 를 활성화 합니다.
  @function {} enableAll
  @author 조준호
  @since 1.0.0
  @version 1.3.0
  */
/*
 * changelog
 * 1.3.0: enable -> enableAll
 */
prototype.enableAll = function() {
	if (!this._disabled) {
		return;
	}
	this._disabled = false;
	if (this._hasMaster) {
		this._master.removeAttr("disabled");
	}
	$(this.getCheckboxes()).removeAttr("disabled");
};
prototype.disableMaster = function() {
	if (this._hasMaster) {
		this._master.attr("disabled", "disabled");
	}
};
prototype.enableMaster = function() {
	if (this._hasMaster) {
		this._master.removeAttr("disabled");
	}
};
CheckManager._check = function(obj) {
	if (obj) {
		Util$.safe$(obj).attr("checked", "checked");
	}
};
CheckManager._uncheck = function(obj) {
	if (obj) {
		Util$.safe$(obj).removeAttr("checked");
	}
};
CheckManager.disableNode = function(obj) {
	if (obj) {
		Util$.safe$(obj).attr("disabled", "disabled");
	}
};
CheckManager.enableNode = function(obj) {
	if (obj) {
		Util$.safe$(obj).removeAttr("disabled");
	}
};
CheckManager._setCheck = function(obj, check) {
	if (check) {
		CheckManager._check(obj);
	}
	else {
		CheckManager._uncheck(obj);
	}
};
}());
