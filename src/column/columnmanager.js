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

 goog.require('JGM.core.BaseModule');

 goog.provide('JGM.column.ColDefManager');

 JGM.column.ColDefManager = ColDefManager;

/**
ColDefManager 모듈. 그리드 셀 관련 정보들과 편리한 함수들을 가진 모듈입니다.
@module ColDefManager
 */

/**
ColDefManager 클래스. 그리드 컬럼 정의 오브젝트를 관리하는 모듈입니다.

@class {public ColDefManager} JGM.ColDefManager

@author 조준호
@since 1.0.0
@version 1.2.1
*/

/**
ColDefManager 컨스트럭터 입니다.

@constructor {public ColDefManager} ColDefManager
@param {Object} args - ColDefManager 모듈 파라미터 오브젝트
@... {Object[]} args.colDefs - 컬럼 정의 오브젝트 어레이
@... {JGM.Grid} args.grid - ColDefManager 를 포함하는 {@link JGM.Grid Grid} 인스턴스
@... {Object} args.options - ColDefManager 옵션 오브젝트
@returns {ColDefManager} ColDefManager 모듈 인스턴스를 리턴합니다.

@author 조준호
@since 1.0.0
@version 1.0.0
*/
function ColDefManager(args) {
	/**
	{@link JGM} 이 할당해주는 ColDefManager 모듈 고유 아이디입니다. 읽기 전용.

	@var {public final String} mid

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.mid = args.mid;

	/**
	ColDefManager 를 포함하는 {@link JGM.Grid Grid} 인스턴스.

	@var {public JGM.Grid} grid

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.grid = args.grid;

	/**
	그리드 컬럼 정의를 관리하는 {@link JGM.ColDefManager ColDefManager} 인스턴스 입니다.

	@var {public JGM.ColDefManager} JGM.Grid.colDefMgr

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.grid.colDefMgr = this;

	/**
	ColDefManager 모듈의 기본 옵션 값들을 정의합니다.

	@var {private Object} options

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	var options = {
		/**
		각 컬럼의 컬럼 정의 오브젝트를 익스텐드 할 때 사용될 기본 컬럼 정의
		옵션입니다.

		@var {private optional Object} JGM.ColDefManager.options.colDef

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__colDef_a__: {
			/**
			로우 데이터에서 해당 컬럼 데이터를 가져올 때 사용되는 키입니다. 컬럼
			정의 오브젝트에서 필수적으로 각 컬럼마다 유니크한 키 값을 지정해줘야
			합니다. <br>기본값:<code>undefined</code>

			@var {private optional String} JGM.ColDefManager.options.colDef.key

			@author 조준호
			@since 1.0.0
			@version 1.0.0
			*/
			key:			undefined,

			/**
			컬럼 이름. 이 값이 지정될 경우 컬럼 헤더에 key 값 대신 이 값을
			이름으로 대신 표시합니다. <br>기본값:<code>""</code>

			@var {private optional String} JGM.ColDefManager.options.colDef.name

			@author 조준호
			@since 1.0.0
			@version 1.0.0
			*/
			name:			"",

			/**
			컬럼 셀 노드들에 적용되는 CSS 클래스. <br>기본값:<code>undefined</code>

			@var {private optional String} JGM.ColDefManager.options.colDef.colClass

			@author 조준호
			@since 1.0.0
			@version 1.0.0
			*/
			colClass:		undefined,

			/**
			새로운 로우 데이터를 생성하거나 셀의 데이터를 del 키를 눌러서 삭제했을 경우에
			컬럼에 자동적으로 채워지는 컬럼의 기본 값입니다. <br>기본값:<code>undefined</code>

			@var {private optional ?} JGM.ColDefManager.options.colDef.defaultValue

			@author 조준호
			@since 1.1.1
			@version 1.1.1
			*/
			defaultValue:		undefined,

			/**
			{@link JGM.DataCreator DataCreator} 를 사용하여 새로운 로우 데이터를 생성할 경우,
			로우 데이터의 컬럼 값을 직접적으로 입력할지의 여부입니다. <br>기본값:<code>undefined</code>

			@var {private optional Boolean} JGM.ColDefManager.options.colDef.inputOnCreate

			@author 조준호
			@since 1.1.1
			@version 1.1.1
			*/
			inputOnCreate:		undefined,

			/**
			컬럼 셀 노드들에 공통적으로 적용되는 CSS style 입니다.<br>
			주의할 점: 이 옵션에 입력된 style 이 적용되었을때 DOM 의 크기가 변하면 그리드의 내부적인 크기 계산에 오류가 생깁니다.
			꼭, 크기에 영향이 없는 style 변경을 할때만 사용하세요.
			<br>기본값:<code>""</code>

			@var {private optional String} JGM.ColDefManager.options.colDef.style

			@author 조준호
			@since 1.0.0
			@version 1.0.0
			*/
			style:		"",

			/**
			컬럼 헤더에게 적용되는 CSS style 입니다.<br>
			주의할 점: 이 옵션에 입력된 style 이 적용되었을때 DOM 의 크기가 변하면 그리드의 내부적인 크기 계산에 오류가 생깁니다.
			꼭, 크기에 영향이 없는 style 변경을 할때만 사용하세요.
			<br>기본값:<code>""</code>

			@var {private optional String} JGM.ColDefManager.options.colDef.headerStyle

			@author 조준호
			@since 1.0.0
			@version 1.0.0
			*/
			headerStyle:		"",

			/**
			컬럼의 기본 폭 픽셀. <br>기본값:<code>80</code>

			@var {private optional int} JGM.ColDefManager.options.colDef.width

			@author 조준호
			@since 1.0.0
			@version 1.0.0
			*/
			width:			80,

			/**
			컬럼의 폭을 조절할 경우 사용되는 최소 폭 픽셀. <br>기본값:<code>30</code>

			@var {private optional int} JGM.ColDefManager.options.colDef.minW

			@author 조준호
			@since 1.0.0
			@version 1.0.0
			*/
			minW:			30,

			/**
			컬럼의 폭을 조절할 경우 사용되는 최대 폭 픽셀. <br>기본값:<code>undefined</code>

			@var {private optional int} JGM.ColDefManager.options.colDef.maxW

			@author 조준호
			@since 1.0.0
			@version 1.0.0
			*/
			maxW:			undefined,

			/**
			셀 에디팅을 할 때 사용되는 컬럼 에디터. <br>기본값:<code>undefined</code>

			@var {private optional JGM.Editor} JGM.ColDefManager.options.colDef.editor

			@author 조준호
			@since 1.0.0
			@version 1.0.0
			*/
			editor:			undefined,

			/**
			컬럼 정렬할 때 사용되는 컬럼 정렬 오브젝트. <br>기본값:<code>undefined</code>

			@var {private optional Object} JGM.ColDefManager.options.colDef.sorter

			@author 조준호
			@since 1.0.0
			@version 1.0.0
			*/
			sorter:			undefined,

			/**
			컬럼의 숨기기 여부. <br>기본값:<code>false</code>

			@var {private optional Boolean} JGM.ColDefManager.options.colDef.hidden

			@author 조준호
			@since 1.0.0
			@version 1.0.0
			*/
			hidden:			false,

			/**
			컬럼 데이터 합계의 {@link JGM.Footer Footer} 에 표시 여부.
			"krw" 입력시 \ 10,000,000 포맷으로 렌더링하며, "usd" 입력시 $ 10,000,000.00 포맷으로 렌더링 합니다.
			함수 입력시 컬럼명과 합계 값을 파라미터로 받습니다.
			<br>기본값:<code>undefined</code>

			@var {private optional Function} JGM.ColDefManager.options.colDef.sumRenderer

			@author 조준호
			@since 1.0.0
			@version 1.0.0
			*/
			sumRenderer:		undefined,

			/**
			마우스를 컬럼 셀위에 올려놓을 경우 보여지는 툴팁의 활성 여부. <br>기본값:<code>false</code>

			@var {private optional Boolean} JGM.ColDefManager.options.colDef.tooltipEnabled

			@author 조준호
			@since 1.0.0
			@version 1.0.0
			*/
			tooltipEnabled:	false,

			/**
			컬럼의 폭 조절 가능 여부. <br>기본값:<code>false</code>

			@var {private optional Boolean} JGM.ColDefManager.options.colDef.resizable

			@author 조준호
			@since 1.1.2
			@version 1.1.2
			*/
			resizable:		false,

			/**
			컬럼 셀 랜더러.
			렌더러는 파라미터로 {@link JGM.Cell Cell} 인스턴스 또는
			value, rowIdx, colIdx, datarow, colDef, {@link JGM.ViewportManager ViewportManager} 를 순서대로 받고,
			셀 HTML 을 리턴하는 Function 입니다.
			<br>기본값:기본 텍스트 렌더러

			@var {private optional Function} JGM.ColDefManager.options.colDef.renderer
			@see JGM.ColDefManager.options.colDef.rendererInput

			@author 조준호
			@since 1.0.0
			@version 1.0.0
			*/
			renderer:		JGM.ViewportManager.__renderer_AD__,

			/**
			컬럼 셀 {@link JGM.ColDefManager.options.colDef.renderer renderer} 함수에 보낼 파라미터 타입을 정하는 옵션. true 일 경우에는
			{@link JGM.Cell Cell} 인스턴스를 보내고, false 일 경우에는 다음의 파라미터들을 순서대로 보냅니다. <br>
			value(셀 값), rowIdx(로우 인덱스), colIdx(컬럼 인덱스), datarow(로우 데이터), colDef(컬럼 정의 오브젝트), {@link JGM.ViewportManager ViewportManager}
			<br>기본값:<code>false</code>

			@var {private optional Boolean} JGM.ColDefManager.options.colDef.rendererInput

			@author 조준호
			@since 1.0.0
			@version 1.0.0
			*/
			rendererInput:	false,

			/**
			컬럼 헤더에 타이틀 attribute 입력 여부. <br>기본값:<code>false</code>

			@var {private optional Boolean} JGM.ColDefManager.options.colDef.noTitle

			@author 조준호
			@since 1.1.7
			@version 1.1.7
			*/
			noTitle: false,

			/**
			컬럼 헤더에 이름값 입력 여부. <br>기본값:<code>false</code>

			@var {private optional Boolean} JGM.ColDefManager.options.colDef.noName

			@author 조준호
			@since 1.1.7
			@version 1.1.7
			*/
			noName: false,

			/**
			컬럼 헤더에 입력할 타이틀 attribute 의 내용. <br>기본값:<code>undefined</code>

			@var {private optional String} JGM.ColDefManager.options.colDef.title

			@author 조준호
			@since 1.1.7
			@version 1.1.7
			*/
			title: undefined,

			/**
			컬럼이 필터링 시에 검색에 포함되는지 여부.<br>기본값:<code>false</code>

			@var {private optional Boolean} JGM.ColDefManager.options.colDef.noSearch

			@author 조준호
			@since 1.2.0
			@version 1.2.0
			*/
			noSearch: false,

			/**
			필터링 시에 사용될 추가 옵션 필터입니다. 커스텀 필터 또는 "string", "number" 를 입력할 수 있습니다.<br>기본값:<code>undefined</code>

			@var {private optional Object[] | String} JGM.ColDefManager.options.colDef.filter

			@author 조준호
			@since 1.2.0
			@version 1.2.0
			*/
			filter: undefined,

			/**
			데이터 parsing 을 담당하는 함수입니다. 그리드에 입력되거나 내용이 변경되는 모든 데이터는 이 함수에 의해서
			parsing 이 됩니다.
			!!!!!!!!!!!!!!!
			커스텀 필터 또는 "string", "number" 를 입력할 수 있습니다.<br>기본값:<code>undefined</code>

			@var {private optional Object[] | String} JGM.ColDefManager.options.colDef.parser

			@author 조준호
			@since 1.3.0
			@version 1.3.0
			*/
			parser: undefined,

			/**
			필터링 시에 사용될 추가 옵션 필터입니다. 커스텀 필터 또는 "string", "number" 를 입력할 수 있습니다.<br>기본값:<code>undefined</code>
			!!!!!!!!!!
			@var {private optional Object[] | String} JGM.ColDefManager.options.colDef.validator

			@author 조준호
			@since 1.3.0
			@version 1.3.0
			*/
			validator: undefined
		}
	};

	this._options = JGM.__extend_e__(options, args.options, {colDef:"__colDef_a__"});

	this.__colDefs_a__ = [];

	this.__filtered_b__ = [];

	this.__keyToDef_c__ = {};

	this.__keyToIdx_d__ = {};

	this.__init(args);
}

ColDefManager.getInstance = function(args) {
	return new ColDefManager(args);
};

var prototype = ColDefManager.prototype;

prototype.__init = function(args) {
	this.grid.event.bind("onDestroy", this.__destroy_aA__, this);
	this.set(args.colDefs);
};

prototype.__destroy_aA__ = function() {
	JGM._destroy(this, {
		name: "ColDefManager",
		path: "colDefMgr",
		property: "__colDefs_a__",
		map: "__keyToIdx_d__ __keyToDef_c__ _options",
		array: "__filtered_b__"
	});
};


/**
필터링 되지 않은 모든 컬럼 정의 어레이를 리턴합니다.

@function {public Object[]} getAll
@returns {Object[]} 모든 컬럼 정의 어레이

@author 조준호
@since 1.0.0
@version 1.0.0
*/
// tested
prototype.getAll = function() {
	return this.__colDefs_a__;
};


/**
컬럼 정의 어레이를 셋합니다. 기본 컬럼 정의 옵션들을 익스텐드하고 필터링 된 컬럼
정의 어레이를 셋합니다.

@function {public} set
@param {optional Object[]} colDefs - 컬럼 정의 오브젝트 어레이

@author 조준호
@since 1.0.0
@version 1.3.0
*/
/*
changelog
1.3.0:
- function: set
@ setAll -> set
+ event: onBeforeSetColDefs, onAfterSetColDefs
+ return: colDefs
*/
// tested
prototype.set = function(colDefs) {
	if (this.__colDefs_a__ === colDefs || Util.areEqualArrays(this.__colDefs_a__, colDefs)) {
		return colDefs;
	}
	
	if (Util.isNull(colDefs)) {
		colDefs = [];
	}
	else {
		var filtered = colDefs.filter(function(a) { return Util.isNotNull(a); });
		colDefs.length = 0;
		colDefs.pushList(filtered);
	}
	
	this.grid.event.trigger("onBeforeSetColDefs", [this.__colDefs_a__, colDefs]);
	
	this.__colDefs_a__ = [];
	this.__filtered_b__.length = 0;
	this.__keyToIdx_d__ = {};
	this.__keyToDef_c__ = {};
	
	this.grid.event.trigger("onEmptyColDefs");
	
	var i = 0,
		len = colDefs.length,
		map = this.__keyToDef_c__,
		col,
		key;
		
	for (; i < len; i++) {
		col = colDefs[i];
		if (!col.hasOwnProperty('key')) {
			this.__keyToDef_c__ = {};
			return this.grid.error("KEY_UNDEFINED", i);
		}
		key = col.key;
      if (Util.isEmptyString(key)) {
			this.__keyToDef_c__ = {};
			return this.grid.error("BAD_NULL", i);
		}
		if (map.hasOwnProperty(key)) {
			this.__keyToDef_c__ = {};
			return this.grid.error("DUP_KEY", key);
		}
		map[key] = col;
	}
	
	this.__colDefs_a__ = colDefs;
		
	for (i = 0; i < len; i++) {
		this.__extend_i__(colDefs[i]);
	}

	this.grid.event.trigger("onAfterSetColDefs", [colDefs, this.__filter_e__()]);
	
	return colDefs;
};


/*
changelog
1.3.0:
+ function: push
+ return: colDefs
*/
// tested
prototype.push = function(colDef) {
	return this.addAt(this.__filtered_b__.length, colDef);
};

/**
주어진 컬럼 인덱스에 주어진 컬럼 정의 오브젝트를 넣습니다.

@function {public} addAt
@param {int} i - 새로운 컬럼을 넣을 인덱스
@param {Object} colDef - 새로 추가할 컬럼

@author 조준호
@since 1.0.0
@version 1.3.0
*/
/*
changelog
1.3.0:
+ function: addAt
+ event: onBeforeSetColDefs, onAfterSetColDefs
+ return: colDefs
*/
// tested
prototype.addAt = function(i, colDef) {
	if (Util.isNull(colDef)) {
		return;
	}

	var key = colDef.key,
		map = this.__keyToDef_c__,
		filtered = this.__filtered_b__;

	if (Util.isNull(i) || i > filtered.length) {
		i = filtered.length;
	}
	else if (i < 0) {
		i += filtered.length;
	}
	
	this.grid.event.trigger("onBeforeAddColDef", [colDef]);
	
	if (Util.isNull(key)) {
		return this.grid.error("KEY_UNDEFINED");
	}
	
	if (map.hasOwnProperty(key)) {
		return this.grid.error("DUP_KEY", key);
	}
	
	this.__colDefs_a__.addAt(i, this.__extend_i__(map[key] = colDef));
	
	if (colDef.hidden !== true) {
		filtered.addAt(i, colDef);
      this.__reidx_f__();
	}
	
	this.grid.event.trigger("onAfterAddColDef", [colDef, i]);
	
	return filtered.length;
};

// tested
prototype.__extend_i__ = function(colDef) {
	if (Util.isNull(colDef)) {
		return;
	}
	
	var options = {},
		sorter;
		
	$.extend(true, options, this._options.__colDef_a__);
	$.extend(true, options, colDef);
	$.extend(true, colDef, options);

	colDef.sorter = sorter = ColDefManager.sorter(colDef.sorter, colDef.key);
	
	if (Util.isNotNull(sorter)) {
		sorter.key = colDef.key;
	}
	
	return colDef;
};

/*
changelog
1.3.0:
+ function hide
+ event: onHideCol
+ return: colDef
*/
// tested
prototype.hide = function(i) {
	var colDef = this.__filtered_b__[i];
	if (Util.isNull(colDef)) {
		return;
	}
	
	colDef.hidden = true;
	
	this.__filtered_b__.removeAt(i);
	this.__reidx_f__();
	
	this.grid.event.trigger("onHideCol", [colDef, i]);
	
	return colDef;
};

/*
changelog
1.3.0:
+ function show
+ event: onShowCol
+ return: colDef
*/
// tested
prototype.show = function(key) {
	if (Util.isNull(key)) {
		return;
	}
	
	if (!Util.isString(key)) {
		if (!Util.isObject(key)) {
			return;
		}
		key = key.key;
	}
	
	var map = this.__keyToDef_c__,
		colDef;
	if (!map.hasOwnProperty(key)) {
		return;
	}
	
	if (this.__keyToIdx_d__.hasOwnProperty(key)) {
		return map[key];
	}
	
	colDef = map[key];
	colDef.hidden = false;
	
	this.__filter_e__();
	this.__reidx_f__();
	
	this.grid.event.trigger("onShowCol", [colDef, this.__keyToIdx_d__[key]]);
	
	return colDef;
};

// implicitly tested
prototype.__filter_e__ = function() {
	this.__filtered_b__ = this.__colDefs_a__.filter(function(colDef) {
		return colDef.hidden !== true;
	});
	this.__reidx_f__();
	return this.__filtered_b__;
};

// implicitly tested
prototype.__reidx_f__ = function() {
	this.__keyToIdx_d__ = {};
	return this.__reidxFrom_g__();
};

// implicitly tested
prototype.__reidxFrom_g__ = function(from) {
	if (Util.isNull(from)) {
		from = 0;
	}
	
	var i = from,
		f = this.__filtered_b__,
		len = f.length,
		map = this.__keyToIdx_d__;
		
	for (; i < len; i++) {
		map[f[i].key] = i;
	}
	
	return map;
};

/**
주어진 컬럼 인덱스에 해당하는 컬럼 정의 오브젝트를 리턴합니다. 인덱스가 주어지지
않은 경우 필터링된 전체 리스트를 리턴합니다.

@function {public (Object[] | Object)} get
@paramset 인덱스가 주어지지 않은 경우
@returns {Object[]} 화면에 보여질 컬럼들의 컬럼 정의 오브젝트 어레이
@paramset 인덱스가 주어진 경우
@param {optional int} i - 컬럼 인덱스
@returns {Object} 주어진 인덱스의 컬럼 정의 오브젝트

@author 조준호
@since 1.0.0
@version 1.0.0
*/
// tested
prototype.get = function(i) {
	if (Util.isNull(i)) {
		return this.__filtered_b__;
	}
	if (this.__filtered_b__.hasOwnProperty(i)) {
		return this.__filtered_b__[i];
	}
};

/**
컬럼 키에 맞는 컬럼 정의 오브젝트를 리턴합니다.

@function {public Object} getByKey
@param {String} key - 컬럼 키
@returns {Object} <code>{@link keyToDef}[key]</code>

@author 조준호
@since 1.0.0
@version 1.0.0
*/
// tested
prototype.getByKey = function(key) {
	if (Util.isNotNull(key) && this.__keyToDef_c__.hasOwnProperty(key)) {
		return this.__keyToDef_c__[key];
	}
};

/**
화면에 보여지는 컬럼의 수를 리턴합니다. 필터링된 컬럼 정의 오브젝트 어레이에 길이를 리턴합니다.

@function {public int} length
@returns {int} 화면에 보여지는 컬럼의 수

@author 조준호
@since 1.0.0
@version 1.0.0
*/
// tested
prototype.length = function() {
	return this.__filtered_b__.length;
};


/**
컬럼 키에 맞는 컬럼의 인덱스를 리턴합니다.

@function {public int} getIdxByKey
@param {String} key - 컬럼 키
@returns {int} <code>{@link keyToIdx}[key]</code>

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.getIdxByKey = function(key) {
	if (this.__keyToIdx_d__.hasOwnProperty(key)) {
		return this.__keyToIdx_d__[key];
	}
	return -1;
};


/**
주어진 컬럼 정의 오브젝트의 인덱스를 리턴합니다.

@function {public int} getIdx
@param {String} colDef - 컬럼 정의 오브젝트
@returns {int}  <code>{@link keyToIdx}[colDef.key]</code>

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.getIdx = function(colDef) {
	if (Util.isNotNull(colDef) && this.__keyToIdx_d__.hasOwnProperty(colDef.key)) {
		return this.__keyToIdx_d__[colDef.key];
	}
	return -1;
};


/**
화면에 보여지는 컬럼들을 주어진 컬럼 키 어레이에 맞춰서 재정렬합니다.

@function {public Object[]} sortByKey
@param {String[]} keys - 컬럼 키 어레이
@returns {Object} 정렬된 컬럼 정의 오브젝트 어레이

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.sortByKey = function(keys) {
	this.__filtered_b__.length = 0;
	this.__keyToIdx_d__ = {};
	
	var i = 0,
		len = keys.length,
		f = this.__filtered_b__,
		map = this.__keyToIdx_d__,
		dmap = this.__keyToDef_c__;
		
	for (; i < len; i++) {
		f.push(dmap[keys[i]]);
		map[keys[i]] = i;
	}
	
	/**
	그리드 컬럼 순서가 변경되었을 경우 발생하는 이벤트 입니다.
	
	@event {Event} onReorderCols
	@param {String[]} keys - 새로 정렬된 컬럼 키 순서

	@author 조준호
	@since 1.2.1
	@version 1.2.1
	*/
	this.grid.event.trigger("onReorderCols", keys);
	return this.__filtered_b__;
};

prototype.getKeys = function() {
	return this.__filtered_b__.map(function(def) { return def.key; });
}

/**
기본적인 정렬 오브젝트를 생성하여 리턴합니다. 정렬 모드는 세가지 입니다. 사전과
같은 정렬 방법인 "text", 정수를 비교하는 "int", 소수를 비교하는 "float" 이
있습니다.

@function {public static Object} sorter
@param {String} type - 정렬 기준 타입 ("text" | "int" | "float")
@param {String} key - 컬럼 키
@param {optional Boolean} on - 정렬 오브젝트의 초기 활성화 여부
@returns {Object} 정렬 오브젝트를 리턴합니다.

@author 조준호
@since 1.0.0
@version 1.0.0
*/
ColDefManager.sorter = function(type, key, on) {
	on = on ? true : false;

	if (type === "text") {
		return { lexi: key, on: on, key:key};
	}
	if (type === "int") {
		return {
			on: on,
			comparator: function(a, b) {
				var aVal = a[key],
					bVal = b[key];
				if (Util.isNull(aVal)) {
					aVal = Number.MAX_VALUE;
				}
				else if (typeof aVal === "string") {
					aVal = aVal.toInt();
				}
				if (Util.isNull(bVal)) {
					bVal = Number.MAX_VALUE;
				}
				else if (typeof bVal === "string") {
					bVal = bVal.toInt();
				}
				
				return aVal - bVal;
			},
			key:key
		};
	}
	if (type === "float 한국 tehu") {
		return {
			on: on,
			comparator: function(a, b) {
				var aVal = a[key],
					bVal = b[key];
				if (Util.isNull(aVal)) {
					aVal = Number.MAX_VALUE;
				}
				else if (typeof aVal === "string") {
					aVal = aVal.toFloat();
				}
				if (Util.isNull(bVal)) {
					bVal = Number.MAX_VALUE;
				}
				else if (typeof bVal === "string") {
					bVal = bVal.toFloat();
				}
				return aVal - bVal;
			},
			key:key
		};
	}
};

JGM._add("ColDefManager", ColDefManager);
}());
