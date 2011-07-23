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
	Util.goog.getObjectByName('jx.util'),
	BaseModule = goog.getObjectByName('jx.grid.BaseModule');
 goog.exportSymbol('jx.grid.CheckManager', CheckManager);
 JGM._add("CheckManager", CheckManager);


/**
CheckManager 모듈. 그리드 로우의 선택을 담당하는 모듈입니다.
@module CheckManager

@requires JGM
@requires JGM.Grid
@requires JGM.ColDefManager
@requires JGM.DataManager
@requires JGM.EventManager
@requires JGM.ViewportManager
 */

/**
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
@... {JGM.Grid} args.grid - CheckManager 를 포함하는 {@link JGM.Grid Grid} 인스턴스
@... {Object} args.options - CheckManager 옵션 오브젝트
@returns {CheckManager} CheckManager 모듈 인스턴스를 리턴합니다.

@author 조준호
@since 1.0.0
@version 1.0.0
*/
function CheckManager(args) {
	/**
	{@link JGM} 이 할당해주는 CheckManager 모듈 고유 아이디입니다. 읽기 전용.

	@var {string} mid

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.mid = args.mid;

	/**
	CheckManager 를 포함하는 {@link JGM.Grid Grid} 인스턴스.

	@var {JGM.Grid} grid

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.grid = args.grid;

	/**
	데이터의 체크 박스 컬럼을 생성하고 관리하는 {@link JGM.CheckManager CheckManager} 인스턴스 입니다.

	@var {JGM.CheckManager} JGM.Grid.checkMgr

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	// this.grid.checkMgr = this;

	/**
	CheckManager 모듈의 기본 옵션 값들을 정의합니다.

	@type {Object} options
	@private

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	var options = {
		/**
		체크 컬럼을 나타내는 컬럼 정의 오브젝트입니다. <br>기본값:<code>{key:"checkbox", width: 20, name:" "}</code>

		@type {Object=} JGM.CheckManager.options.colDef
		@private
		@see JGM.ColDefManager.options.colDef

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__colDef_a__: {key:"checkbox", width: 20, name:" ", noTitle:true, resizable:false, sorter:null, filter:null, noSearch:true, editor:null, inputOnCreate:false},

		/**
		{@link JGM.CheckManager.options.colDef colDef} 을 몇번째 컬럼으로 넣을지를 정합니다. <br>기본값:<code>0</code>

		@type {number=} JGM.CheckManager.options.colIdx
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__colIdx_b__: 0,

		/**
		체크 input 들의 name attribute 에 공통적으로 넣을 값입니다. <br>기본값:<code>undefined</code>

		@type {string=} JGM.CheckManager.options.name
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__name_c__: undefined,

		/**
		체크 input 들에 공통적으로 적용되는 CSS 클래스 입니다. <br>기본값:<code>"checkmg"</code>

		@type {string=} JGM.CheckManager.options.classCheck
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__classCheck_d__: "checkmg",

		/**
		마스터 헤더 체크 input 에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"checkm"</code>

		@type {string=} JGM.CheckManager.options.classMasterCheck
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__classMasterCheck_e__: "checkm",

		/**
		checkbox 를 위한 마스터 헤더 체크를 생성할지 여부입니다. <br>기본값:<code>true</code>

		@type {boolean=} JGM.CheckManager.options.master
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__master_f__: true,

		/**
		true 일 경우 radio 타입의 input, false 일 경우 checkbox 타입의 input 을 생성합니다. <br>기본값:<code>false</code>

		@type {boolean=} JGM.CheckManager.options.isRadio
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__isRadio_g__: false
	};

	this._options = JGM.__extend_e__(options, args.options, {
		colDef:"__colDef_a__",
		colIdx:"__colIdx_b__",
		name:"__name_c__",
		classCheck:"__classCheck_d__",
		classMasterCheck:"__classMasterCheck_e__",
		master:"__master_f__",
		isRadio:"__isRadio_g__"
	});

	if (this._options.__isRadio_g__) {
		if (Util.isNull(this._options.__name_c__)) {
			this._options.__name_c__ = "radio" + this.mid;
		}
		this._options.__master_f__ = false;
	}

	this.__map_a__ = {};

	this.disabledmap = {};

	this.__count_b__ = 0;

	this.__disabled_d__ = false;

	this.__master_c__;

	this.__init();
}

CheckManager.getInstance = function(args) {
	return new CheckManager(args);
};

var prototype = CheckManager.prototype;

prototype.__init = function() {
	var opt = this._options,
		size,
		con = JGM.__CONST_g__;

	if (this.grid.colDefMgr.getByKey(opt.__colDef_a__.key) === undefined) {
		this.grid.colDefMgr.addAt(opt.__colIdx_b__, opt.__colDef_a__);
	}
	
	if (Util.isNull(con.__checkboxWidth_c__)) {
		size = Util.calCheckSize();
		con.__checkboxWidth_c__ = size.checkboxW;
		con.__checkboxHeight_d__ = size.checkboxH;
		con.__radioWidth_e__ = size.radioW;
		con.__radioHeight_f__ = size.radioH;
	}
	
	this.bindEvents();
};

prototype.bindEvents = function() {
	var opt = this._options,
		key = opt.__colDef_a__.key,
		events;

	events = {
		onCreateCss: this.__onCreateCss_V__,
		onDestroy: this.__destroy_aA__,
		onAfterSetDatalist: this.uncheckAll,
		onIdChange: this.__onIdChange_ai__,
		onIdListChange: this.__onIdListChange_aj__,
		onRemoveDatarow: this.__onRemoveDatarow_af__,
		onRemoveDatalist: this.__onRemoveDatalist_ag__
	};
	
	events["onRenderCell_" + key + "_prepend"] = this.__onRenderCell_aH__;
	events["keydownColSel_" + key + "_" + Util.keyMapKeydown.space] = this.__keydownColSel_bA__;
	
	if (opt.__master_f__) {
		events["onRenderHeader_" + key + "_prepend"] = this.__onRenderHeader_aG__;
		events.onRenderHeadersComplete = this.__getMaster_h__;
	}
	this.grid.event.bind(events, this);
};

prototype.__destroy_aA__ = function() {
	JGM._destroy(this, {
		name: "CheckManager",
		path: "checkMgr",
		"$": "__master_c__",
		property: "__count_b__ __disabled_d__",
		map: "__map_a__ _options"
	});
};

prototype.__onCreateCss_V__ = function() {
	var w,
		h,
		checkCommon,
		css;

	if (this._options.__isRadio_g__) {
		w = JGM.__CONST_g__.__radioWidth_e__;
		h = JGM.__CONST_g__.__radioHeight_f__;
	}
	else {
		w = JGM.__CONST_g__.__checkboxWidth_c__;
		h = JGM.__CONST_g__.__checkboxHeight_d__;
	}
	
	checkCommon = "*overflow:hidden;padding:0;width:" + w + "px;height:" + h + "px;";
	css = this.grid.view.__getCellSelector_AG__() + " ." + this._options.__classCheck_d__ + "[mid='" + this.mid + "']{" +
		checkCommon +
		"margin:" + ((this.grid.view.__getRowInnerHeight_AO__() - h) / 2) + "px 0 0 " + ((this._options.__colDef_a__.width - this.grid.view.__getPadding_AM__() - w) / 2) + "px}" +
		"#" + this.mid + "h{" +
		checkCommon +
		"margin:" + ((this.grid.header._options.__height_l__ - h) / 2) + "px 0 0 0}";
	return css;
};


/**
주어진 데이터 어레이안의 데이터들을 모두 체크합니다. 현재 그리드가 가진 데이터들과
데이터의 내용은 같지만 메모리상 다른 주소를 가지는 데이터들일 경우 데이터 매핑을
합니다.

@function {} checkList
@param {Array.<Object>} list - 체크할 데이터 어레이
@param {boolean=} nomap - true 일 경우 데이터 매핑을 하지 않습니다.
@see JGM.DataManager.mapList 데이터 매핑을 합니다.
@see check

@author 조준호
@since 1.0.0
@version 1.0.1
*/
prototype.checkList = function(list, nomap) {
	if (!nomap) {
		list = this.grid.dataMgr.mapList(list).mapped;
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
	return Util.toArray(this.__map_a__);
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
	if (this.isCheckedAll()) {
		this.uncheckAll();
	}
	else {
		this.checkAll();
	}
};


/**
모든 데이터를 체크합니다.

@function {} checkAll

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.checkAll = function() {
	if (this._options.__master_f__) {
		CheckManager.__check_a__(this.__master_c__);
	}

	CheckManager.__check_a__(this.getCheckboxes());

	var list = this.grid.dataMgr.all,
		len = list.length,
		idKey = this.grid.dataMgr.idKey,
		map = this.__map_a__,
		i = 0;

	for (; i < len; i++) {
		map[list[i][idKey]] = list[i];
	}

	this.__count_b__ = len;
};


/**
모든 데이터를 체크를 헤재합니다.

@function {} uncheckAll

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.uncheckAll = function() {
	if (this._options.__master_f__) {
		CheckManager.__uncheck_b__(this.__master_c__);
	}

	CheckManager.__uncheck_b__(this.getCheckboxes());

	this.__map_a__ = {};
	this.__count_b__ = 0;
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
		datarow = this.grid.dataMgr.map(datarow);
	}

	if (this.isChecked(datarow, true) && !this._options.__isRadio_g__) {
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
		datarow = this.grid.dataMgr.map(datarow);
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
	this.toggleCheck(this.grid.dataMgr.getById(id), true);
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
		datarow = this.grid.dataMgr.map(datarow);
	}

	if (!this.__add_f__(datarow)) {
		return;
	}

	CheckManager.__check_a__(this.getCheckbox(datarow));

	this.__updateMaster_e__();

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
	this.grid.event.trigger("onCheckChange", [datarow, true]);
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
		datarow = this.grid.dataMgr.map(datarow);
	}

	if (!this.__remove_g__(datarow)) {
		return;
	}

	CheckManager.__uncheck_b__(this.getCheckbox(datarow));

	if (this._options.__master_f__) {
		CheckManager.__uncheck_b__(this.__master_c__);
	}

	this.grid.event.trigger("onCheckChange", [datarow, false]);
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
	var datam = this.grid.dataMgr;

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
	this.grid.event.trigger("onDisableCheck", [datarow]);
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
	var datam = this.grid.dataMgr;

	if (!nomap) {
		datarow = this.grid.dataMgr.map(datarow);
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
	this.grid.event.trigger("onEnableCheck", [datarow]);
};

prototype.__updateMaster_e__ = function() {
	if (this._options.__master_f__) {
		CheckManager.__setCheck_c__(this.__master_c__, this.isCheckedAll());
	}
};

prototype.__add_f__ = function(datarow) {
	var id = datarow[this.grid.dataMgr.idKey];
		
	if (this.__map_a__.hasOwnProperty(id)) {
		return false;
	}
		
	if (this._options.__isRadio_g__ === true) {
		this.__map_a__ = {};
		this.__count_b__ = 0;
	}

	this.__map_a__[id] = datarow;
	this.__count_b__++;

	return true;
};

prototype.__remove_g__ = function(datarow) {
	var id = datarow[this.grid.dataMgr.idKey],
		map = this.__map_a__;
		
	if (!map.hasOwnProperty(id)) {
		return false;
	}
		
	delete map[id];
	this.__count_b__--;
	
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
	var datam = this.grid.dataMgr;
	if (!nomap) {
		datarow = datam.map(datarow);
	}

	return this.__map_a__.hasOwnProperty(datam.getId(datarow));
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
	var datam = this.grid.dataMgr;
	if (!nomap) {
		datarow = datam.map(datarow);
	}

	return this.disabledmap.hasOwnProperty(datam.getId(datarow));
};

prototype.splitChecked = function(datalist, nomap) {
	if (!nomap) {
		datalist = this.grid.dataMgr.mapList(datalist).mapped;
	}
		
	var checked = [],
		unchecked = [],
		i = 0,
		len = datalist.length,
		idKey = this.grid.dataMgr.idKey,
		data,
		map = this.__map_a__;
	
	for (; i < len; i++) {
		if (map.hasOwnProperty((data = datalist[i])[idKey])) {
			checked.push(data);
		}
		else {
			unchecked.push(data);
		}
	}

	return {checked:checked, unchecked:unchecked};
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
	return (this.__count_b__ !== 0 &&
		this.__count_b__ === this.grid.dataMgr.all.length ? true : false);
};

/**
체크된 모든 데이터를 그리드에서 제거합니다.

@function {} removeChecked

@author 조준호
@since 1.3.0
@version 1.3.0
*/
prototype.removeChecked = function() {
   return this.grid.dataMgr.removeList(this.getCheckList());
};

prototype.__getMaster_h__ = function() {
	this.__master_c__ = $(document.getElementById(this.mid + "h"));
};

prototype.__getChecks_i__ = function(rows) {
	var len = rows.length,
		checks = [],
		i = 0,
		col = this.grid.colDefMgr.getIdxByKey(this._options.__colDef_a__.key);
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
	return this.__getChecks_i__(this.grid.view.getRenderedRows());
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
	var row = this.grid.view.getRowById(id);
	if (Util.isNotNull(row)) {
      return row.childNodes[this.grid.colDefMgr.getIdxByKey(this._options.__colDef_a__.key)].childNodes[0];
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
   return this.getCheckboxById(this.grid.dataMgr.getId(datarow));
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
   return this.getCheckboxById(this.grid.dataMgr.getIdByIdx(i));
};

prototype.__onRemoveDatarow_af__ = function(datarow) {
	this.uncheck(datarow, true);
	this.enable(datarow, true);
};

prototype.__onRemoveDatalist_ag__ = function(datalist) {
	var i = 0,
		len = datalist.length;
	for (; i < len; i++) {
		this.uncheck(datalist[i], true);
		this.enable(datalist[i], true);
	}
};

prototype.__onIdChange_ai__ = function(datarow, before, after) {
	var map = this.__map_a__,
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

prototype.__onIdListChange_aj__ = function(datalist, idBefores, idKey) {
	var i = 0,
		len = datalist.length,
		map = this.__map_a__,
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

prototype.__keydownColSel_bA__ = function(e, colSelections, lastSelection) {
	e.preventDefault();
	if (Util.isNotNullAnd(colSelections, lastSelection)) {
		var checked = this.isChecked(lastSelection.getDatarow(), true),
			row,
			list = this.grid.dataMgr.datalist;
		if (this._options.__isRadio_g__) {
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

prototype.__onRenderHeader_aG__ = function(headerHtml) {
	headerHtml.push("<input id='" + this.mid + "h' type='checkbox' tabIndex='-1' onclick='JGM.m.CheckManager." + this.mid + ".toggleCheckAll();' class='" + this._options.__classCheck_d__ + " " + this._options.__classMasterCheck_e__ + "' mid='" + this.mid + "'");
	if (this.isCheckedAll()) {
		headerHtml.push(" checked='checked'");
	}
	if (this.__disabled_d__) {
		headerHtml.push(" disabled='disabled'");
	}
	headerHtml.push("/>");
};

prototype.__onRenderCell_aH__ = function(rowIdx, colIdx, datarow, colDef, cellHtml) {
	cellHtml.push("<input tabIndex='-1' onclick=\"JGM.m.CheckManager." + this.mid + ".toggleById('" + datarow[this.grid.dataMgr.idKey] + "')\" type='" + (this._options.__isRadio_g__ ? "radio" : "checkbox") + "' class='" + this._options.__classCheck_d__ + "' mid='" + this.mid + "'");
	if (Util.isNotNull(this._options.__name_c__)) {
		cellHtml.push(" name='" + this._options.__name_c__ + "'");
	}
	if (this.isChecked(datarow, true)) {
		cellHtml.push(" checked='checked'");
	}
	if (this.__disabled_d__ || this.isDisabled(datarow, true)) {
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
	if (this.__disabled_d__) {
		return;
	}
		
	this.__disabled_d__ = true;
	
	if (this._options.__master_f__) {
		this.__master_c__.attr("disabled", "disabled");
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
	if (!this.__disabled_d__) {
		return;
	}
		
	this.__disabled_d__ = false;
	
	if (this._options.__master_f__) {
		this.__master_c__.removeAttr("disabled");
	}
		
	$(this.getCheckboxes()).removeAttr("disabled");
};

CheckManager.__check_a__ = function(obj) {
	if (Util.isNotNull(obj)) {
		Util$.safe$(obj).attr("checked", "checked");
	}
};

CheckManager.__uncheck_b__ = function(obj) {
	if (Util.isNotNull(obj)) {
		Util$.safe$(obj).removeAttr("checked");
	}
};

CheckManager.disableNode = function(obj) {
	if (Util.isNotNull(obj)) {
		Util$.safe$(obj).attr("disabled", "disabled");
	}
};

CheckManager.enableNode = function(obj) {
	if (Util.isNotNull(obj)) {
		Util$.safe$(obj).removeAttr("disabled");
	}
};

CheckManager.__setCheck_c__ = function(obj, check) {
	if (check) {
		CheckManager.__check_a__(obj);
	}
	else {
		CheckManager.__uncheck_b__(obj);
	}
};
}());
