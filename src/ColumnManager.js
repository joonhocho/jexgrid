window.console && window.console.log && window.console.log('reading javascript source "ColumnManager.js"...');//IF_DEBUG

goog.require('array_extension');
goog.require('engine_extension');
goog.require('jx.util');
goog.require('jx.grid');
goog.require('jx.grid.BaseModule');
goog.require('jx.grid.Column');
goog.require('jx.grid.ViewportManager');

goog.provide('jx.grid.ColumnManager');

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
(function() {'use strict';

var JGM = goog.getObjectByName('jx.grid'),
	Util = goog.getObjectByName('jx.util'),
	BaseModule = goog.getObjectByName('jx.grid.BaseModule'),
	Column = goog.getObjectByName('jx.grid.Column'),
	ViewportManager = goog.getObjectByName('jx.grid.ViewportManager');

 goog.exportSymbol('jx.grid.ColumnManager', ColumnManager);

/**
ColumnManager 모듈. 그리드 셀 관련 정보들과 편리한 함수들을 가진 모듈입니다.
@module ColumnManager
 */

/**
ColumnManager 클래스. 그리드 컬럼 정의 오브젝트를 관리하는 모듈입니다.

@class {ColumnManager} jx.grid.ColumnManager

@author 조준호
@since 1.0.0
@version 1.2.1
*/

/**
ColumnManager 컨스트럭터 입니다.

@constructor {ColumnManager} ColumnManager
@param {Object} args - ColumnManager 모듈 파라미터 오브젝트
@... {Array.<Object>} args.colDefs - 컬럼 정의 오브젝트 어레이
@... {jx.grid.Grid} args.grid - ColumnManager 를 포함하는 {@link jx.grid.Grid} 인스턴스
@... {Object} args.options - ColumnManager 옵션 오브젝트
@returns {ColumnManager} ColumnManager 모듈 인스턴스를 리턴합니다.

@author 조준호
@since 1.0.0
@version 1.0.0
*/
function ColumnManager(args) {
	/**
	{@link JGM} 이 할당해주는 ColumnManager 모듈 고유 아이디입니다. 읽기 전용.

	@var {string} mid

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.mid = args.mid;

	/**
	ColumnManager 를 포함하는 {@link jx.grid.Grid} 인스턴스.

	@var {jx.grid.Grid} grid

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.grid = args.grid;

	/**
	그리드 컬럼 정의를 관리하는 {@link jx.grid.ColumnManager ColumnManager} 인스턴스 입니다.

	@var {jx.grid.ColumnManager} jx.grid.Grid.colDefMgr

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.grid['colDefMgr'] = this;

	/**
	ColumnManager 모듈의 기본 옵션 값들을 정의합니다.

	@type {Object} options
	@private

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	var options = {
		/**
		각 컬럼의 컬럼 정의 오브젝트를 익스텐드 할 때 사용될 기본 컬럼 정의
		옵션입니다.

		@type {Object=} jx.grid.ColumnManager.options.colDef
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'colDef': {
			'type': 'string',

			/**
			로우 데이터에서 해당 컬럼 데이터를 가져올 때 사용되는 키입니다. 컬럼
			정의 오브젝트에서 필수적으로 각 컬럼마다 유니크한 키 값을 지정해줘야
			합니다. <br>기본값:<code>undefined</code>

			@type {string=} jx.grid.ColumnManager.options.colDef.key
			@private

			@author 조준호
			@since 1.0.0
			@version 1.0.0
			*/
			'key':			undefined,

			/**
			컬럼 이름. 이 값이 지정될 경우 컬럼 헤더에 key 값 대신 이 값을
			이름으로 대신 표시합니다. <br>기본값:<code>""</code>

			@type {string=} jx.grid.ColumnManager.options.colDef.name
			@private

			@author 조준호
			@since 1.0.0
			@version 1.0.0
			*/
			'name':			"",

			/**
			컬럼 셀 노드들에 적용되는 CSS 클래스. <br>기본값:<code>undefined</code>

			@type {string=} jx.grid.ColumnManager.options.colDef.colClass
			@private

			@author 조준호
			@since 1.0.0
			@version 1.0.0
			*/
			'colClass':		undefined,

			/**
			새로운 로우 데이터를 생성하거나 셀의 데이터를 del 키를 눌러서 삭제했을 경우에
			컬럼에 자동적으로 채워지는 컬럼의 기본 값입니다. <br>기본값:<code>undefined</code>

			@type {?=} jx.grid.ColumnManager.options.colDef.defaultValue
			@private

			@author 조준호
			@since 1.1.1
			@version 1.1.1
			*/
			'defaultValue':		undefined,

			/**
			{@link JGM.DataCreator DataCreator} 를 사용하여 새로운 로우 데이터를 생성할 경우,
			로우 데이터의 컬럼 값을 직접적으로 입력할지의 여부입니다. <br>기본값:<code>undefined</code>

			@type {boolean=} jx.grid.ColumnManager.options.colDef.inputOnCreate
			@private

			@author 조준호
			@since 1.1.1
			@version 1.1.1
			*/
			'inputOnCreate':		undefined,

			/**
			컬럼 셀 노드들에 공통적으로 적용되는 CSS style 입니다.<br>
			주의할 점: 이 옵션에 입력된 style 이 적용되었을때 DOM 의 크기가 변하면 그리드의 내부적인 크기 계산에 오류가 생깁니다.
			꼭, 크기에 영향이 없는 style 변경을 할때만 사용하세요.
			<br>기본값:<code>""</code>

			@type {string=} jx.grid.ColumnManager.options.colDef.style
			@private

			@author 조준호
			@since 1.0.0
			@version 1.0.0
			*/
			'style':		"",

			/**
			컬럼 헤더에게 적용되는 CSS style 입니다.<br>
			주의할 점: 이 옵션에 입력된 style 이 적용되었을때 DOM 의 크기가 변하면 그리드의 내부적인 크기 계산에 오류가 생깁니다.
			꼭, 크기에 영향이 없는 style 변경을 할때만 사용하세요.
			<br>기본값:<code>""</code>

			@type {string=} jx.grid.ColumnManager.options.colDef.headerStyle
			@private

			@author 조준호
			@since 1.0.0
			@version 1.0.0
			*/
			'headerStyle':		"",

			/**
			컬럼의 기본 폭 픽셀. <br>기본값:<code>80</code>

			@type {number=} jx.grid.ColumnManager.options.colDef.width
			@private

			@author 조준호
			@since 1.0.0
			@version 1.0.0
			*/
			'width':			80,

			/**
			컬럼의 폭을 조절할 경우 사용되는 최소 폭 픽셀. <br>기본값:<code>30</code>

			@type {number=} jx.grid.ColumnManager.options.colDef.minW
			@private

			@author 조준호
			@since 1.0.0
			@version 1.0.0
			*/
			'minW':			30,

			/**
			컬럼의 폭을 조절할 경우 사용되는 최대 폭 픽셀. <br>기본값:<code>undefined</code>

			@type {number=} jx.grid.ColumnManager.options.colDef.maxW
			@private

			@author 조준호
			@since 1.0.0
			@version 1.0.0
			*/
			'maxW':			undefined,

			/**
			셀 에디팅을 할 때 사용되는 컬럼 에디터. <br>기본값:<code>undefined</code>

			@type {jx.grid.Editor=} jx.grid.ColumnManager.options.colDef.editor
			@private

			@author 조준호
			@since 1.0.0
			@version 1.0.0
			*/
			'editor':			undefined,

			/**
			컬럼 정렬할 때 사용되는 컬럼 정렬 오브젝트. <br>기본값:<code>undefined</code>

			@type {Object=} jx.grid.ColumnManager.options.colDef.sorter
			@private

			@author 조준호
			@since 1.0.0
			@version 1.0.0
			*/
			'sorter':			undefined,

			/**
			컬럼의 숨기기 여부. <br>기본값:<code>false</code>

			@type {boolean=} jx.grid.ColumnManager.options.colDef.hidden
			@private

			@author 조준호
			@since 1.0.0
			@version 1.0.0
			*/
			'hidden':			false,

			/**
			컬럼 데이터 합계의 {@link JGM.Footer Footer} 에 표시 여부.
			"krw" 입력시 \ 10,000,000 포맷으로 렌더링하며, "usd" 입력시 $ 10,000,000.00 포맷으로 렌더링 합니다.
			함수 입력시 컬럼명과 합계 값을 파라미터로 받습니다.
			<br>기본값:<code>undefined</code>

			@type {Function=} jx.grid.ColumnManager.options.colDef.sumRenderer
			@private

			@author 조준호
			@since 1.0.0
			@version 1.0.0
			*/
			'sumRenderer':		undefined,

			/**
			마우스를 컬럼 셀위에 올려놓을 경우 보여지는 툴팁의 활성 여부. <br>기본값:<code>false</code>

			@type {boolean=} jx.grid.ColumnManager.options.colDef.tooltipEnabled
			@private

			@author 조준호
			@since 1.0.0
			@version 1.0.0
			*/
			'tooltipEnabled':	false,

			/**
			컬럼의 폭 조절 가능 여부. <br>기본값:<code>false</code>

			@type {boolean=} jx.grid.ColumnManager.options.colDef.resizable
			@private

			@author 조준호
			@since 1.1.2
			@version 1.1.2
			*/
			'resizable':		false,

			/**
			컬럼 셀 랜더러.
			렌더러는 파라미터로 {@link jx.grid.Cell Cell} 인스턴스 또는
			value, rowIdx, colIdx, datarow, colDef, {@link jx.grid.ViewportManager ViewportManager} 를 순서대로 받고,
			셀 HTML 을 리턴하는 Function 입니다.
			<br>기본값:기본 텍스트 렌더러

			@type {Function=} jx.grid.ColumnManager.options.colDef.renderer
			@private
			@see jx.grid.ColumnManager.options.colDef.rendererInput

			@author 조준호
			@since 1.0.0
			@version 1.0.0
			*/
			'renderer':		undefined,

			/**
			컬럼 셀 {@link jx.grid.ColumnManager.options.colDef.renderer renderer} 함수에 보낼 파라미터 타입을 정하는 옵션. true 일 경우에는
			{@link jx.grid.Cell Cell} 인스턴스를 보내고, false 일 경우에는 다음의 파라미터들을 순서대로 보냅니다. <br>
			value(셀 값), rowIdx(로우 인덱스), colIdx(컬럼 인덱스), datarow(로우 데이터), colDef(컬럼 정의 오브젝트), {@link jx.grid.ViewportManager ViewportManager}
			<br>기본값:<code>false</code>

			@type {boolean=} jx.grid.ColumnManager.options.colDef.rendererInput
			@private

			@author 조준호
			@since 1.0.0
			@version 1.0.0
			*/
			'rendererInput':	false,

			/**
			컬럼 헤더에 타이틀 attribute 입력 여부. <br>기본값:<code>false</code>

			@type {boolean=} jx.grid.ColumnManager.options.colDef.noTitle
			@private

			@author 조준호
			@since 1.1.7
			@version 1.1.7
			*/
			'noTitle': false,

			/**
			컬럼 헤더에 이름값 입력 여부. <br>기본값:<code>false</code>

			@type {boolean=} jx.grid.ColumnManager.options.colDef.noName
			@private

			@author 조준호
			@since 1.1.7
			@version 1.1.7
			*/
			'noName': false,

			/**
			컬럼 헤더에 입력할 타이틀 attribute 의 내용. <br>기본값:<code>undefined</code>

			@type {string=} jx.grid.ColumnManager.options.colDef.title
			@private

			@author 조준호
			@since 1.1.7
			@version 1.1.7
			*/
			'title': undefined,

			/**
			컬럼이 필터링 시에 검색에 포함되는지 여부.<br>기본값:<code>false</code>

			@type {boolean=} jx.grid.ColumnManager.options.colDef.noSearch
			@private

			@author 조준호
			@since 1.2.0
			@version 1.2.0
			*/
			'noSearch': false,

			/**
			필터링 시에 사용될 추가 옵션 필터입니다. 커스텀 필터 또는 "string", "number" 를 입력할 수 있습니다.<br>기본값:<code>undefined</code>

			@type {Array.<Object> | string=} jx.grid.ColumnManager.options.colDef.filter
			@private

			@author 조준호
			@since 1.2.0
			@version 1.2.0
			*/
			'filter': undefined,

			/**
			데이터 parsing 을 담당하는 함수입니다. 그리드에 입력되거나 내용이 변경되는 모든 데이터는 이 함수에 의해서
			parsing 이 됩니다.
			!!!!!!!!!!!!!!!
			커스텀 필터 또는 "string", "number" 를 입력할 수 있습니다.<br>기본값:<code>undefined</code>

			@type {Array.<Object> | string=} jx.grid.ColumnManager.options.colDef.parser
			@private

			@author 조준호
			@since 1.3.0
			@version 1.3.0
			*/
			'parser': undefined,

			/**
			필터링 시에 사용될 추가 옵션 필터입니다. 커스텀 필터 또는 "string", "number" 를 입력할 수 있습니다.<br>기본값:<code>undefined</code>
			!!!!!!!!!!
			@type {Array.<Object> | string=} jx.grid.ColumnManager.options.colDef.validator
			@private

			@author 조준호
			@since 1.3.0
			@version 1.3.0
			*/
			'validator': undefined,
			'nullOnCreate': false,
			'notNull': false
		}
	};

	this._options = JGM._extend(options, args['options']);

	this._colDefs = [];
	this._filtered = [];
	this._keyToDef = {};
	this._keyToIdx = {};
	this._parsers = {};
	this._sorters = {};
	this._validators = {};
	this._nullOnCreates = {};
	this._groups = null;
	this._groupsByName = null;

	this.__init(args);
}

ColumnManager.getInstance = function(args) {
	return new ColumnManager(args);
};

var prototype = ColumnManager.prototype;

prototype.__init = function(args) {
	this.grid['event'].bind("onDestroy", this._destroy, this);
	this.set(args['colDefs']);
};

prototype._destroy = function() {
	JGM._destroy(this, {
		name: "ColumnManager",
		path: "colDefMgr",
		property: "_colDefs",
		map: "_keyToIdx _keyToDef _options",
		array: "_filtered"
	});
};


/**
필터링 되지 않은 모든 컬럼 정의 어레이를 리턴합니다.

@function {Array.<Object>} getAll
@returns {Array.<Object>} 모든 컬럼 정의 어레이

@author 조준호
@since 1.0.0
@version 1.0.0
*/
// tested
prototype.getAll = function() {
	return this._colDefs;
};

prototype.empty = function() {
	this._colDefs = [];
	this._filtered.length = 0;
	this._keyToIdx = {};
	this._keyToDef = {};
	this._parsers = {};
	this._sorters = {};
	this._validators = {};
	this._nullOnCreates = {};
	this._groups = null;
	this._groupsByName = null;

}


/**
컬럼 정의 어레이를 셋합니다. 기본 컬럼 정의 옵션들을 익스텐드하고 필터링 된 컬럼
정의 어레이를 셋합니다.

@function {} set
@param {Array.<Object>=} colDefs - 컬럼 정의 오브젝트 어레이

@author 조준호
@since 1.0.0
@version 1.3.0
*/
/*
changelog
1.3.0:
- function: set
@ setAll -> set
+ return: colDefs
*/
// tested
prototype.set = function(colDefs) {
	colDefs = colDefs || [];
	if (this._colDefs === colDefs) {
		return colDefs;
	}

	var em = this.grid['event'];

	this.empty();

	this.eventChangeVisible();

	var i = 0,
		len = colDefs.length,
		col,
		key,
		// if double header feature is needed
		doubleHeader = colDefs.some(function(col) { return col.parent != null; });

	if (doubleHeader) {
		var groups = this._groups = [],
			groupsByName = this._groupsByName = {},
			parent;
	}

	for (; i < len; i++) {
		col = colDefs[i];
		key = col.key

		try {
			if (this.hasKey(key, true)) {
				throw new Error('duplicate column key, key = ' + key);
				//return this.grid['error']("DUP_KEY", key);
			}
		}
		catch (e) {
			this.empty();
			throw e;
		}

		if (doubleHeader) {
			// if double header feature is needed
			parent = col.parent = (col.parent == null ? ' ' : col.parent);
			if (!groupsByName.hasOwnProperty(parent)) {
				groups.push(groupsByName[parent] = []);
			}
			groupsByName[parent].push(col);
		}

		this._extend(col);
	}

	if (doubleHeader) {
		var i = 0,
			l = groups.length,
			j,
			jl,
			group;

		colDefs = [];
		for (; i < l; i++) {
			group = groups[i];
			j = 0;
			jl = group.length;
			for (; j < jl; j++) {
				colDefs.push(group[j]);
			}
		}
	}

	this._colDefs = colDefs;
	this._filter();

	this.eventChangeVisible();

	return colDefs;
};

prototype.hasGroups = function() {
	return !!this._groups;
};

prototype.getGroups = function() {
	return this._groups;
};

prototype.getGroupByName = function(name) {
	if (name != null && this._groupsByName && this._groupsByName.hasOwnProperty(name)) {
		return this._groupsByName[name];
	}
};

prototype.getSorter = function(key) {
	if (key == null) {
		return this._sorters;
	}
	if (this.hasKey(key, true)) {
		var sorters = this._sorters;
		return sorters.hasOwnProperty(key) ? sorters[key] : null;
	}
	throw new Error('column key not found! key=' + key);
}

prototype.getValidator = function(key) {
	if (key == null) {
		return this._validators;
	}
	if (this.hasKey(key, true)) {
		var validators = this._validators;
		return validators.hasOwnProperty(key) ? validators[key] : null;
	}
	throw new Error('column key not found! key=' + key);
}

prototype.getParser = function(key) {
	if (key == null) {
		return this._parsers;
	}
	if (this.hasKey(key, true)) {
		var parsers = this._parsers;
		return parsers.hasOwnProperty(key) ? parsers[key] : null;
	}
	throw new Error('column key not found! key=' + key);
}

prototype.getNullOnCreate = function(key) {
	if (key == null) {
		return this._nullOnCreates;
	}
	if (this.hasKey(key, true)) {
		return this._nullOnCreates.hasOwnProperty(key);
	}
	throw new Error('column key not found! key=' + key);
}


/*
changelog
1.3.0:
+ function: push
+ return: colDefs
*/
// tested
prototype.push = function(colDef) {
	return this.addAt(this._filtered.length, colDef);
};

/**
주어진 컬럼 인덱스에 주어진 컬럼 정의 오브젝트를 넣습니다.

@function {} addAt
@param {number} i - 새로운 컬럼을 넣을 인덱스
@param {Object} colDef - 새로 추가할 컬럼

@author 조준호
@since 1.0.0
@version 1.3.0
*/
/*
changelog
1.3.0:
+ function: addAt
+ return: colDefs
*/
// tested
prototype.addAt = function(i, colDef) {
	var key = colDef['key'],
		colDefs = this._colDefs,
		em = this.grid['event'];

	if (this.hasKey(key, true)) {
		throw new Error('duplicate column key, key = ' + key);
		//return this.grid['error']("DUP_KEY", key);
	}

	if (i < 0 || i > colDefs.length) {
		throw new Error('index out of bound, i = ' + i);
	}
	
	
	colDefs.addAt(i, this._extend(colDef));

	this._filter();
	
	this.eventChangeVisible();
	
	return colDefs.length;
};

function normalizeType(type) {
	if (type) {
		type = type.toLowerCase();
		switch (type) {
			case 'bool':
			case 'boolean':
				return 'boolean';
			case 'int':
			case 'integer':
			case 'long':
			case 'short':
				return 'int';
			case 'float':
			case 'double':
			case 'number':
			case 'num':
			case 'numeric':
				return 'float';
			case 'str':
			case 'string':
			case 'text':
				return 'string';
			case 'date':
			case 'datetime':
			case 'time':
			case 'timestamp':
				return 'date';
		}
	}
	return null;
}

// tested
prototype._extend = function(colDef) {
	if (colDef && !colDef._extended) {
		colDef._extended = true;

		var options = {},
			sorter,
			parser,
			validator,
			type,
			key;

		$.extend(true, options, this._options['colDef']);
		$.extend(true, options, colDef);
		$.extend(true, colDef, options);

		// normalize data type into boolean | int | float | string | date
		type = colDef['type'] = normalizeType(colDef['type']);

		// validity already checked
		key = colDef['key'].toString();

		this._keyToDef[key] = colDef;

		if (sorter = colDef['sorter']) {
			if (typeof sorter == 'string') {
				sorter = normalizeType(sorter);
			}
			else if (type) {
				sorter = type;
			}
			sorter = ColumnManager.sorter(sorter, key);
			if (sorter) {
				sorter.key = key;
				this._sorters[key] = sorter;
			}
			colDef['sorter'] = sorter;
		}

		if (parser = colDef['parser']) {
			if (type && typeof parser != 'function') {
				switch (type) {
					case 'boolean':
						parser = parseBoolean;
						break;
					case 'int':
						parser = function (v) { return parseInt(v, 10); };
						break;
					case 'float':
						parser = parseFloat;
						break;
					case 'string':
						parser = parseString;
						break;
					case 'date':
						parser = parseDate;
						break;
					default:
						parser = null;
				}
				colDef['parser'] = parser;
			}
			this._parsers[key] = parser;
		}

		// boolean attributes
		colDef['inputOnCreate'] = !!colDef['inputOnCreate'];
		colDef['hidden'] = !!colDef['hidden'];
		colDef['tooltipEnabled'] = !!colDef['tooltipEnabled'];
		colDef['resizable'] = !!colDef['resizable'];
		colDef['rendererInput'] = !!colDef['rendererInput'];
		colDef['noTitle'] = !!colDef['noTitle'];
		colDef['noName'] = !!colDef['noName'];
		colDef['noSearch'] = !!colDef['noSearch'];
		colDef['nullOnCreate'] = !!colDef['nullOnCreate'];

		if (validator = colDef['validator']) {
			this._validators[key] = validator;
		}

		if (colDef['nullOnCreate']) {
			this._nullOnCreates[key] = true;
		}
	}
	return colDef;
};

function parseBoolean(v) {
	if (typeof v != 'boolean') {
		if (!v) {
			return false;
		}
		switch (v.toString().toLowerCase()) {
			case '0':
			case 'n':
			case 'no':
			case 'false':
			case 'f':
			case 'off':
			case 'disable':
			case 'disabled':
			// additional
			case 'null':
			case 'undefined':
			case 'nil':
			case 'fail':
			case 'not':
				return false;
		}
		return true;
	}
	return v;
}

function parseString(v) {
	if (typeof v != 'string') {
		if (v == null) {
			return '';
		}
		return v.toString();
	}
	return v;
}

function parseDate(v) {
	return new Date(Date.parse(v));
}

prototype.setVisible = function(key, visible) {
	var colDef = this.getByKey(key, true);
	if (!colDef) {
		throw new Error('column key not found! key=' + key);
	}

	// to bool
	visible = !!visible;

	if (!colDef['hidden'] !== visible) {
		// if hidden column
		colDef['hidden'] = !visible;
	
		this._filter();
	
		this.eventChangeVisible();
	}

	return colDef;
}

/*
changelog
1.3.0:
+ function show
+ event: onShowCol
+ return: colDef
*/
// tested
prototype.show = function(key) {
	return this.setVisible(key, true);
};

/*
changelog
1.3.0:
+ function hide
+ event: onHideCol
+ return: colDef
*/
// tested
prototype.hide = function(key) {
	return this.setVisible(key, false);
};

// implicitly tested
prototype._filter = function() {
	this._filtered = this._colDefs.filter(function(colDef) {
		return !colDef['hidden'];
	});
	this._reidx();
	return this._filtered;
};

// implicitly tested
prototype._reidx = function(i) {
	i = i || 0;

	var f = this._filtered,
		len = f.length,
		map = this._keyToIdx = {};
		
	for (; i < len; i++) {
		map[f[i].key] = i;
	}
	
	return map;
};

/**
주어진 컬럼 인덱스에 해당하는 컬럼 정의 오브젝트를 리턴합니다. 인덱스가 주어지지
않은 경우 필터링된 전체 리스트를 리턴합니다.

@function {(Array.<Object> | Object)} get
@paramset 인덱스가 주어지지 않은 경우
@returns {Array.<Object>} 화면에 보여질 컬럼들의 컬럼 정의 오브젝트 어레이
@paramset 인덱스가 주어진 경우
@param {int=} i - 컬럼 인덱스
@returns {Object} 주어진 인덱스의 컬럼 정의 오브젝트

@author 조준호
@since 1.0.0
@version 1.0.0
*/
// tested
prototype.get = function(i) {
	if (i == null) {
		return this._filtered;
	}
	var filtered = this._filtered;
	if (i < 0 || i >= filtered.length) {
		throw new Error('index out of bound, i = ' + i);
	}
	return this._filtered[i];
};

prototype.checkKey = function(key, throwe) {
	if (key == null) {
		if (throwe) {
			throw new Error('column key is null');
		}
		return false;
		//return this.grid['error']("KEY_UNDEFINED");
	}
	if (typeof key != 'string') {
		key = key.toString();
	}
	if (!key) {
		if (throwe) {
			throw new Error('column key is empty');
		}
		//return this.grid['error']("BAD_NULL");
	}
	return true;
}

prototype.mapKeys = function(keys) {
	var that = this;
	return keys.map(function(k) {
		var col = that.getByKey(k, true);
		if (!col) {
			throw new Error('column key not found! key=' + k);
		}
		return col;
	});
};

/**
컬럼 키에 맞는 컬럼 정의 오브젝트를 리턴합니다.

@function {Object} getByKey
@param {string} key - 컬럼 키
@returns {Object} <code>{@link keyToDef}[key]</code>

@author 조준호
@since 1.0.0
@version 1.0.0
*/
// tested
prototype.getByKey = function(key, throwe) {
	// this may throw when key is bad
	return this.hasKey(key, throwe) ? this._keyToDef[key] : null;
};

prototype.hasKey = function(key, throwe) {
	// this may throw when key is bad
	return this.checkKey(key, throwe) ? this._keyToDef.hasOwnProperty(key) : false;
}

/**
화면에 보여지는 컬럼의 수를 리턴합니다. 필터링된 컬럼 정의 오브젝트 어레이에 길이를 리턴합니다.

@function {number} length
@returns {number} 화면에 보여지는 컬럼의 수

@author 조준호
@since 1.0.0
@version 1.0.0
*/
// tested
prototype.length = function() {
	return this._filtered.length;
};


/**
컬럼 키에 맞는 컬럼의 인덱스를 리턴합니다.

@function {number} getIdxByKey
@param {string} key - 컬럼 키
@returns {number} <code>{@link keyToIdx}[key]</code>

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.getIdxByKey = function(key) {
	if (this._keyToIdx.hasOwnProperty(key)) {
		return this._keyToIdx[key];
	}
	return -1;
};


/**
주어진 컬럼 정의 오브젝트의 인덱스를 리턴합니다.

@function {number} getIdx
@param {string} colDef - 컬럼 정의 오브젝트
@returns {number}  <code>{@link keyToIdx}[colDef.key]</code>

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.getIdx = function(colDef) {
	if (Util.isNotNull(colDef) && this._keyToIdx.hasOwnProperty(colDef['key'])) {
		return this._keyToIdx[colDef['key']];
	}
	return -1;
};


/**
화면에 보여지는 컬럼들을 주어진 컬럼 키 어레이에 맞춰서 재정렬합니다.

@function {Array.<Object>} sortByKey
@param {Array.<string>} keys - 컬럼 키 어레이
@returns {Object} 정렬된 컬럼 정의 오브젝트 어레이

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.sortByKey = function(keys) {	
	var f = this._filtered,
		imap = this._keyToIdx = {};
		
	f.length = 0;
		
	var cols = this.mapKeys(keys).forEach(function(col, i) {
		if (!col.hidden) {
			f.push(col);
			imap[col.key] = i;
		}
	})
	
	/**
	그리드 컬럼 순서가 변경되었을 경우 발생하는 이벤트 입니다.
	
	@event {Event} onReorderCols
	@param {Array.<string>} keys - 새로 정렬된 컬럼 키 순서

	@author 조준호
	@since 1.2.1
	@version 1.2.1
	*/
	this.grid['event'].trigger("onReorderCols", [cols], true);
	this.eventChangeVisible();

	return f;
};

prototype.eventChangeVisible = function() {
	/**
	그리드 컬럼 순서가 변경되었을 경우 발생하는 이벤트 입니다.
	
	@event {Event} onReorderCols
	@param {Array.<string>} keys - 새로 정렬된 컬럼 키 순서

	@author 조준호
	@since 1.2.1
	@version 1.2.1
	*/
	this.grid['event'].trigger('changeVisibleColumns', [this._filtered]);
	/*
	this.dispatchEvent({
		type: 'changeVisible',
		columns: this._filtered
	});
	*/
}

prototype.getKeys = function() {
	return this._filtered.map(function(def) { return def.key; });
}

function toNumber(a, fn) {
	switch (typeof a) {
		case 'undefined':
			return Number.MAX_VALUE;
		case 'boolean':
			return a ? 1 : 0;
		case 'number':
			return a;
		case 'string':
			return a[fn]();
		default:
			if (a == null) {
				return Number.MAX_VALUE;
			}
	}
	a = a.valueOf();
	switch (typeof a) {
		case 'undefined':
			return Number.MAX_VALUE;
		case 'boolean':
			return a ? 1 : 0;
		case 'number':
			return a;
		case 'string':
			return a[fn]();
		default:
			if (a == null) {
				return Number.MAX_VALUE;
			}
			return a.toString()[fn]();
	}
}

function toBoolean(a) {
	switch (typeof a) {
		case 'undefined':
			return Number.MAX_VALUE;
		case 'boolean':
			return a ? 1 : 0;
		case 'number':
			return a;
	}
	return a == null ? Number.MAX_VALUE : (parseBoolean(a) ? 1 : 0);
}

/**
기본적인 정렬 오브젝트를 생성하여 리턴합니다. 정렬 모드는 세가지 입니다. 사전과
같은 정렬 방법인 "text", 정수를 비교하는 "int", 소수를 비교하는 "float" 이
있습니다.

@function {Object} sorter
@param {string} type - 정렬 기준 타입 ("text" | "int" | "float")
@param {string} key - 컬럼 키
@param {boolean=} on - 정렬 오브젝트의 초기 활성화 여부
@returns {Object} 정렬 오브젝트를 리턴합니다.

@author 조준호
@since 1.0.0
@version 1.0.0
*/
ColumnManager.sorter = function(type, key, on) {
	var sorter = {on:!!on, key:key};
	var MAX = Number.MAX_VALUE;
	switch (type) {
		case 'boolean':
			sorter['comparator'] = function(a, b) {
				return toBoolean(a[key]) - toBoolean(b[key]);
			};
			return sorter;
		case 'string':
			sorter['lexi'] = key;
			return sorter;
		case 'int':
			sorter['comparator'] = function(a, b) {
				return toNumber(a[key], 'toInt') - toNumber(b[key], 'toInt');
			};
			return sorter;
		case 'float':
			sorter['comparator'] = function(a, b) {
				return toNumber(a[key], 'toFloat') - toNumber(b[key], 'toFloat');
			};
			return sorter;
		case 'date':
			sorter['comparator'] = function(a, b) {
				return toNumber(a[key], 'toInt') - toNumber(b[key], 'toInt');
			};
			return sorter;
	}
	return null;
};
}());
