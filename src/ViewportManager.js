console && console.log && console.log('reading javascript source "ViewportManager.js"...');//IF_DEBUG

goog.require('jx.util');
goog.require('jx.grid');
goog.require('jx.grid.BaseModule');
goog.require('jx.grid.Grid');
goog.require('jx.grid.Cell');
goog.require('jx.data.DataManager');

goog.provide('jx.grid.ViewportManager');

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
	Grid = goog.getObjectByName('jx.grid.Grid'),
	Util = goog.getObjectByName('jx.util'),
	BaseModule = goog.getObjectByName('jx.grid.BaseModule'),
	Cell = goog.getObjectByName('jx.grid.Cell');

goog.exportSymbol('jx.grid.ViewportManager', ViewportManager);

/**
  ViewportManager 모듈. 그리드 로우와 셀을 가진 테이블을 담당하는 모듈입니다.
  ViewportManager 클래스. 빠른 로우/셀 렌더링과 로우의 캐싱을 지원합니다.

  @class {ViewportManager} jx.grid.ViewportManager

  @author 조준호
  @since 1.0.0
  @version 1.3.1
  */

/**
  ViewportManager 컨스트럭터 입니다.

  @constructor {ViewportManager} ViewportManager
  @param {Object} args - ViewportManager 모듈 파라미터 오브젝트
  @... {jQuery} args.container - ViewportManager 를 넣을 컨테이너 오브젝트
  @... {jx.grid.Grid} args.grid - ViewportManager 를 포함하는 {@link jx.grid.Grid} 인스턴스
  @... {Object} args.options - ViewportManager 옵션 오브젝트
  @returns {ViewportManager} ViewportManager 모듈 인스턴스를 리턴합니다.

  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
function ViewportManager(args) {
	/**
	  {@link JGM} 이 할당해주는 ViewportManager 모듈 고유 아이디입니다. 읽기 전용.

	  @var {string} mid

	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	this.mid = args.mid;

	this._ctnr = args['container'];
	this._mask;
	this._canvas;

	/**
	  ViewportManager 를 포함하는 {@link jx.grid.Grid} 인스턴스.

	  @var {jx.grid.Grid} grid

	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	this.grid = args.grid;

	/**
	  그리드의 로우와 셀의 랜더링 및 뷰포트 관련 이벤트를 관리하는 {@link jx.grid.ViewportManager ViewportManager} 인스턴스 입니다.

	  @var {jx.grid.ViewportManager} jx.grid.Grid.view

	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	this.grid['view'] = this;

	/**
	  ViewportManager 모듈의 기본 옵션 값들을 정의합니다.

	  @type {Object} options
	  @private

	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	var options = {
		/**
		  그리드 로우의 인덱스 값을 넣을 인덱스 노드 Attribute 이름. <br>기본값:<code>"r"</code>

		  @type {string=} jx.grid.ViewportManager.options.attrRowIdx
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'attrRowIdx':					"r",

		/**
		  뷰포트를 스크롤 할 경우 새로 추가해야 되는 로우의 수가 이 값 미만일 경우
		  추가하지 않습니다. <br>기본값:<code>3</code>

		  @type {number=} jx.grid.ViewportManager.options.appendThreshold
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'appendThreshold':			3,

		/**
		  뷰포트를 스크롤 할 경우 새로 추가해야 되는 로우의 수가 이 값 이상일 경우
		  새로운 로우들을 붙여넣지 않고 전체 페이지를 다시 렌더링 합니다. <br>기본값:<code>10</code>

		  @type {number=} jx.grid.ViewportManager.options.renderThreshold
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'renderThreshold':			10,

		/**
		  캔버스를 렌더링 할 경우, 스크롤의 자연스러움을 위해 화면에 보이는 로우들 이외에
		  전 후로 이 값의 수 많큼 로우들을 추가적으로 렌더링합니다. <br>기본값:<code>6</code>

		  @type {number=} jx.grid.ViewportManager.options.bufferSize
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'bufferSize':					6,

		/**
		  뷰포트가 한 스크롤 페이지에 보여줄 데이터 로우들의 수를 정합니다. 뷰포트의
		  높이를 계산할 때 사용됩니다. <br>기본값:<code>10</code>

		  @type {number=} jx.grid.ViewportManager.options.rowsPerPage
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'rowsPerPage':			10,

		/**
		  로우의 높이의 픽셀값 입니다. padding 과 border 를 제외한 그 안의 높이입니다. <br>기본값:<code>20</code>

		  @type {number=} jx.grid.ViewportManager.options.rowH
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'rowH':						21,

		/**
		  셀 border 의 두께의 픽셀값 입니다. <br>기본값:<code>1</code>

		  @type {number=} jx.grid.ViewportManager.options.borderThickness
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'borderThickness': 1,

		/**
		  셀 border 의 스타일을 정합니다. <br>기본값:<code>"solid #D0D7E5"</code>

		  @type {string=} jx.grid.ViewportManager.options.border
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'border':						"solid #D0D7E5",

		/**
		  셀 padding 의 픽셀값 입니다. <br>기본값:<code>1</code>

		  @type {number=} jx.grid.ViewportManager.options.padding
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'padding':					1,

		/**
		  홀수번째 로우와 짝수번째 로우의 바탕색을 다르게 할 지 정합니다. <br>기본값:<code>false</code>

		  @type {boolean=} jx.grid.ViewportManager.options.evenOddRows
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'evenOddRows':				false,

		/**
		  {@link jx.grid.ViewportManager.options.evenOddRows evenOddRows} 가 true 일 경우,
		  홀수번째 로우들에 적용될 바탕색입니다. <br>기본값:<code>"#F4F4F4"</code>

		  @type {string=} jx.grid.ViewportManager.options.oddRowsBackground
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'oddRowsBackground':			"#F4F4F4",

		/**
		  ViewportManager 컨테이너에 적용되는 CSS style 입니다.<br>
		  주의할 점: 이 옵션에 입력된 style 이 적용되었을때 DOM 의 크기가 변하면 그리드의 내부적인 크기 계산에 오류가 생깁니다.
		  꼭, 크기에 영향이 없는 style 변경을 할때만 사용하세요.
		  <br>기본값:<code>""</code>

		  @type {string=} jx.grid.ViewportManager.options.style
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'style': "",

		/**
		  그리드 캔바스에 적용되는 CSS style 입니다.<br>
		  주의할 점: 이 옵션에 입력된 style 이 적용되었을때 DOM 의 크기가 변하면 그리드의 내부적인 크기 계산에 오류가 생깁니다.
		  꼭, 크기에 영향이 없는 style 변경을 할때만 사용하세요.
		  <br>기본값:<code>""</code>

		  @type {string=} jx.grid.ViewportManager.options.canvasStyle
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'canvasStyle': "",

		/**
		  모든 그리드 로우에 공통적으로 적용되는 CSS style 입니다.<br>
		  주의할 점: 이 옵션에 입력된 style 이 적용되었을때 DOM 의 크기가 변하면 그리드의 내부적인 크기 계산에 오류가 생깁니다.
		  꼭, 크기에 영향이 없는 style 변경을 할때만 사용하세요.
		  <br>기본값:<code>""</code>

		  @type {string=} jx.grid.ViewportManager.options.rowStyle
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'rowStyle': "",

		/**
		  모든 그리드 셀에 공통적으로 적용되는 CSS style 입니다.<br>
		  주의할 점: 이 옵션에 입력된 style 이 적용되었을때 DOM 의 크기가 변하면 그리드의 내부적인 크기 계산에 오류가 생깁니다.
		  꼭, 크기에 영향이 없는 style 변경을 할때만 사용하세요.
		  <br>기본값:<code>""</code>

		  @type {string=} jx.grid.ViewportManager.options.cellStyle
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'cellStyle': "",

		/**
		  모든 그리드 로우에 공통적으로 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-row"</code>

		  @type {string=} jx.grid.ViewportManager.options.classRow
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'classRow':						"jgrid-row",

		/**
		  모든 그리드 셀에 공통적으로 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-cell"</code>

		  @type {string=} jx.grid.ViewportManager.options.classCell
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'classCell':					"jgrid-cell",

		/**
		  그리드 뷰포트에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-viewport"</code>

		  @type {string=} jx.grid.ViewportManager.options.classView
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'classView':				"jgrid-viewport",

		/**
		  그리드 캔버스에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-canvas"</code>

		  @type {string=} jx.grid.ViewportManager.options.classCanvas
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'classCanvas':				"jgrid-canvas",

		/**
		  그리드 뷰가 포커스 되었을 경우 보여지는 뷰의 배경 스타일입니다. <br>기본값:<code>"#FFF"</code>

		  @type {Object=} jx.grid.ViewportManager.options.focusBackground
		  @private

		  @author 조준호
		  @since 1.1.5
		  @version 1.1.5
		  */
		'focusBackground':			"#FFF",

		/**
		  그리드 뷰가 포커스 되었을 경우 보여지는 아웃라인 스타일입니다. <br>기본값:<code>"2px solid #f1ca7f"</code>

		  @type {Object=} jx.grid.ViewportManager.options.focusOutline
		  @private

		  @author 조준호
		  @since 1.1.5
		  @version 1.1.5
		  */
		'focusOutline': "2px solid #f1ca7f",

		/**
		  true 로 설정되있을 경우 view 의 높이가 모든 로우를 포함하도록 자동 변경됩니다. <br>기본값:<code>false</code>

		  @type {boolean=} jx.grid.ViewportManager.options.autoHeight
		  @private

		  @author 조준호
		  @since 1.1.7
		  @version 1.1.7
		  */
		'autoHeight': false,

		'autoWidth': false
	};

	this._options = JGM._extend(options, args['options']);

	this._drag = false;
	this._lastRowLen = this._lastScrollLeft = this._lastScrollTop = 0;

	this._renderedRows = {};
	this._lockedRows = {};

	this._colLefts = [0];
	this._evtmgr = this.grid['event'];
	this._datamgr = this.grid['dataMgr'];
	this._colmgr = this.grid['colDefMgr'];
	this._rowClass = this._options['classRow'];
	this._cellClass = this._options['classCell'];
	this._rowIdxAttr = this._options['attrRowIdx'];

	this.__init();
}

ViewportManager.getInstance = function(args) {
	return new ViewportManager(args);
};

var prototype = ViewportManager.prototype;

prototype.__init = function() {
	this._mask =
		$("<div class='" + this._options['classView'] + "' tabIndex='0' onscroll='JGM.m.ViewportManager." + this.mid + "._scroll()'>")
		.appendTo(this._ctnr);

	this._canvas =
		$("<div class='" + this._options['classCanvas'] + "'>")
		.appendTo(this._mask);
	this._canvasEl = this._canvas[0];

	// disable text selection in grid cells except in input and textarea
	// elements (this is IE-specific, because selectstart event will
	// only fire in IE)
	this._mask.bind("selectstart.ui", function (event) {
		return $(event.target).is("input, textarea");
	});

	this._setColLefts();

	this._setCanvasWidth(this._calCanvasWidth());

	this._lastRowLen = this._datamgr.datalist.length;

	this._evtmgr.bind({
		'canvasFind': this._canvasFind,
		'onCreateCss': this._onCreateCss,
		'onCreateDynamicCss': this._onCreateDynamicCss,
		'onDestroy': this._onDestroy,
		'keydown': this._keydown,
		'keyup': this._keyup,
		'keypress': this._keypress,
		'mousein': this._mousein,
		'mouseout': this._mouseout,
		'mouseenter': this._mouseenter,
		'mouseleave': this._mouseleave,
		'mousemove': this._mousemove,
		'mouseover': this._mouseover,
		'mousedown': this._mousedown,
		'mouseup': this._mouseup,
		'click': this._click,
		'dblclick': this._dblclick,
		'resizeWidth': this._setWidth,
		"resizeWidth onResizeCol onResizeCanvasHeight": this._resizeWidth,
		//'resizeHeight': this.resizeHeight,
		'onAfterRefresh': this.onAfterRefresh,
		'onRenderModules': this._render,
		'onReorderCols': this._onReorderCols,
		'onResizeCanvasWidth': this._scroll,
		'onUpdateDatarow': this.onUpdateDatarow,
		'onUpdateDatalist': this.onUpdateDatalist,
		'onRemoveDatarow': this.onRemoveDatarow,
		'onRemoveDatalist': this.onRemoveDatalist,
		'onIdChange':this.onIdChange,
		'onIdListChange':this.onIdListChange,
		'unsetDrag':this.unsetDrag		
	}, this);
};

prototype.unsetDrag = function() {
	this._drag = false;
};

prototype._onDestroy = function() {
	JGM._destroy(this, {
		name: "ViewportManager",
		path: "view",
		"$": "_canvas _mask",
		property: "_ctnr",
		map: "_vars _lockedRows _renderedRows _options"
	});
};

prototype._onCreateCss = function() {
	var gridId = "#" + this.grid['mid'] + " .",
		opt = this._options,
		cellSel = gridId + this._cellClass,
		rowSel = gridId + this._rowClass,
		border = opt['borderThickness'] + "px " + opt['border'],
		attrRowIdx = rowSel + "[" + this._rowIdxAttr,
		colDefs = this._colmgr.get(),
		clen = colDefs.length,
		i = 0,
		rules = [];

	rules.push(gridId + opt['classView'] + "{height:" + this._calHeight() + "px;outline:0;position:relative;white-space:nowrap;overflow:auto;line-height:" + opt['rowH'] + "px;cursor:default;-moz-user-select:none;-webkit-user-select:none;" + opt['style'] + "}");
	rules.push(gridId + opt['classView'] + ":focus{background:" + opt['focusBackground'] + ";outline:" + opt['focusOutline'] + "}");
	rules.push(gridId + opt['classCanvas'] + "{height:" + this._calCanvasHeight() + "px;" + opt['canvasStyle'] + ";background:#fff}");
	rules.push(rowSel + "{position:absolute;" + opt['rowStyle'] + "}");
	rules.push(cellSel + "{height:" + opt['rowH'] + "px;border-bottom:" + border + ";display:inline-block;white-space:nowrap;overflow:hidden;float:left;text-overflow:ellipsis;padding-left:" + opt['padding'] + "px;border-right:" + border + ";" + opt['cellStyle'] + "}");

	if (opt['evenOddRows']) {
		rules.push(
				attrRowIdx + "$='1']," +
				attrRowIdx + "$='3']," +
				attrRowIdx + "$='5']," +
				attrRowIdx + "$='7']," +
				attrRowIdx + "$='9']{background:" + opt['oddRowsBackground'] + "}");
	}

	for (; i < clen; i++) {
		rules.push(cellSel + ".k_" + colDefs[i].key + "{" + colDefs[i].style + "}");
	}

	return rules.join("");
};

prototype._onCreateDynamicCss = function() {
	var gridId = "#" + this.grid['mid'] + " .",
		opt = this._options,
		cellSel = gridId + this._cellClass,
		rowSel = gridId + this._rowClass,
		canSel = gridId + opt['classCanvas'],
		canw = this._calCanvasWidth(),
		colDefs = this._colmgr.get(),
		str = '',
		clen = colDefs.length,
		i = 0;

	str += canSel + "{width:" + canw + "px}" + rowSel + "{width:" + canw + "px}";
	for (; i < clen; i++) {
		str += cellSel + ".k_" + colDefs[i].key + "{width:" + colDefs[i].width + "px}";
	}

	return str;
};


prototype.onUpdateDatarow = function(datarow, change, before) {
	if (this.isRendered(datarow)) {
		this.rerenderRow(datarow);
	}
};

prototype.onUpdateDatalist = function(datalist, changes, befores) {
	var datarow,
		len = datalist.length,
		i = 0;
	for (; i < len; i++) {
		datarow = datalist[i];
		if (this.isRendered(datarow)) {
			this.rerenderRow(datarow);
		}
	}
};

prototype.onRemoveDatarow = function(datarow) {
	this.destroyRow(datarow);
};

prototype.onRemoveDatalist = function(datalist) {
	var len = datalist.length,
		i = 0;
	for (; i < len; i++) {
		this.destroyRow(datalist[i]);
	}
};

//tested
prototype.onIdChange = function(datarow, before, after) {
	var attrChanged = false,
		node;
	if (this.isRowLockedById(before)) {
		this._lockedRows[after] = this._lockedRows[before];
		delete this._lockedRows[before];
	}
	if (this.isRenderedById(before)) {
		(this._renderedRows[after] = this._renderedRows[before]).setAttribute('i', after);
		attrChanged = true;
		delete this._renderedRows[before];
	}
};

//tested
prototype.onIdListChange = function(datalist, befores, idKey) {
	var len = datalist.length,
		i = 0,
		locked = this._lockedRows,
		rendered = this._renderedRows,
		before,
		after,
		attrChanged,
		node;
	for (; i < len; i++) {
		before = befores[i];
		after = datalist[i][idKey];
		attrChanged = false;
		if (locked.hasOwnProperty(before)) {
			locked[after] = locked[before];
			delete locked[before];
		}
		if (rendered.hasOwnProperty(before)) {
			(rendered[after] = rendered[before]).setAttribute('i', after);
			attrChanged = true;
			delete rendered[before];
		}
	}
};

prototype._getCellSelector = function() {
	return "#" + this.grid['mid'] + " ." + this._cellClass;
};

prototype._getRowSelector = function() {
	return "#" + this.grid['mid'] + " ." + this._rowClass;
};

/**
  주어진 인덱스를 가진 셀로 스크롤합니다.

  @function {} scrollTo
  @param {number} row - 셀의 로우 인덱스
  @param {number} col - 셀의 컬럼 인덱스

  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
prototype.scrollTo = function(row, col) {
	this.scrollToRow(row);
	this.scrollToCol(col);
};

//tested
/**
  주어진 로우 인덱스로 lazy 하게 스크롤합니다.
  이미 화면 내에 있을 경우, 스크롤 하지 않습니다.

  @function {number} scrollToRowLazy
  @param {number} row - 스크롤 할 로우 인덱스
  @return {number} scrollTop - 새로운 scrolltop 값

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.scrollToRowLazy = function(row) {
	var scrollTop = this.getScrollTop();
	if (row == null) {
		return scrollTop;
	}
	if (this._getLastSafeVisibleRow() < row) {
		return this.scrollToRow(this._getFirstRowForSafe(row));
	}
	if (this._getFirstSafeVisibleRow() > row) {
		return this.scrollToRow(row);
	}
	return scrollTop;
};

/**
  주어진 컬럼 인덱스로 lazy 하게 스크롤합니다.
  이미 화면 내에 있을 경우, 스크롤 하지 않습니다.

  @function {number} scrollToColLazy
  @param {number} col - 스크롤 할 컬럼 인덱스
  @return {number} scrollLeft - 새로운 scrollLeft 값

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.scrollToColLazy = function(col) {
	var scrollLeft = this.getScrollLeft();
	if (col == null) {
		return scrollLeft;
	}
	if (this._getLastSafeVisibleCol() < col) {
		return this.setScrollLeft(this.getScrollHForSafe(col));
	}
	else if (this._getFirstSafeVisibleCol() > col) {
		return this.scrollToCol(col);
	}
	return scrollLeft;
};

/**
  주어진 인덱스를 가진 셀로 lazy 하게 스크롤합니다.
  이미 화면 내에 있을 경우, 스크롤 하지 않습니다.

  @function {} scrollToLazy
  @param {number} row - 셀의 로우 인덱스
  @param {number} col - 셀의 컬럼 인덱스

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.scrollToLazy = function(row, col) {
	this.scrollToRowLazy(row);
	this.scrollToColLazy(col);
};

/**
  주어진 인덱스의 로우로 스크롤합니다.

  @function {} scrollToRow
  @param {number} row - 로우 인덱스

  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
//tested
prototype.scrollToRow = function(i) {
	if (i != null) {
		return this.setScrollTop(this._getRowOuterHeight() * i);
	}
	return this.getScrollTop();
};

/**
  주어진 인덱스의 컬럼으로 스크롤합니다.

  @function {} scrollToCol
  @param {number} col - 컬럼 인덱스

  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
prototype.scrollToCol = function(i) {
	return this.setScrollLeft(this.getColLeft(i));
};

prototype._getColInnerWidth = function(i) {
	return this._colmgr.get(i).width;
};

prototype._getColInnerWidthByKey = function(i) {
	return this._colmgr.getByKey(i).width;
};

/**
  주어진 인덱스의 컬럼의 폭 픽셀을 리턴합니다.

  @function {number} getColWidth
  @param {number} col - 컬럼 인덱스
  @returns {number} 주어진 인덱스의 컬럼의 폭

  @author 조준호
  @since 1.1.7
  @version 1.1.7
  */
prototype.getColWidth = function(i) {
	return this._colmgr.get(i).width + this._options['padding'];
};

/**
  주어진 키를 가진 컬럼의 폭 픽셀을 리턴합니다.

  @function {number} getColWidthByKey
  @param {string} key - 컬럼 키
  @returns {number} 주어진 키를 가진 컬럼의 폭

  @author 조준호
  @since 1.1.7
  @version 1.1.7
  */
prototype.getColWidthByKey = function(i) {
	return this._colmgr.getByKey(i).width + this._options['padding'];
};

prototype._getColOuterWidth = function(i) {
	return this._colmgr.get(i).width + this._options['padding'] + this._options['borderThickness'];
};

prototype._getColOuterWidthByKey = function(i) {
	return this._colmgr.getByKey(i).width + this._options['padding'] + this._options['borderThickness'];
};

prototype._getPadding = function() {
	return this._options['padding'];
};

prototype._colWidthPlus = function() {
	return this._options['padding'] + this._options['borderThickness'];
};

prototype._getRowOuterHeight = function() {
	return this._options['rowH'] + this._options['borderThickness'];
};

prototype._getRowInnerHeight = function() {
	return this._options['rowH'];
};

prototype._calHeight = function() {
	if (this._options['autoHeight']) {
		return this._calCanvasHeight() + (this.grid['width']() < this._calCanvasWidth() ? this.grid._vars.scrollbarDim.h: 0);
	}
	return this._getRowOuterHeight() * this._options['rowsPerPage'];
};

/**
  가로 스크롤바가 있을 경우 스크롤바의 높이를 포함한 뷰의 높이 픽셀을 리턴합니다.

  @function {number} getHeight
  @returns {number} 뷰의 높이 픽셀

  @author 조준호
  @since 1.0.0
  @version 1.1.7
  */
prototype.getHeight = function() {
	return this._mask[0].offsetHeight;
};

/**
  가로 스크롤바가 있을 경우 스크롤바의 높이를 뺀 뷰의 안쪽 높이 픽셀을 리턴합니다.

  @function {number} getInnerHeight
  @returns {number} 뷰의 안쪽 높이 픽셀

  @author 조준호
  @since 1.0.0
  @version 1.1.7
  */
prototype.getInnerHeight = function() {
	return this._mask[0].clientHeight;
};

prototype._getWidth = function() {
	return this._mask[0].offsetWidth;
};

/**
  세로 스크롤바가 있을 경우 스크롤바의 폭을 뺀 뷰의 안쪽 폭 픽셀을 리턴합니다.

  @function {number} getInnerWidth
  @returns {number} 뷰의 안쪽 폭 픽셀

  @author 조준호
  @since 1.0.0
  @version 1.1.7
  */
prototype.getInnerWidth = function() {
	return this._mask[0].clientWidth;
};

prototype._calCanvasHeight = function() {
	return this._getRowOuterHeight() * this._datamgr.datalist.length;
};

/**
  모든 그리드 로우를 포함하고 있는 캔버스의 가상 높이 픽셀을 리턴합니다.

  @function {number} getCanvasHeight
  @returns {number} 캔버스의 높이 픽셀

  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
prototype.getCanvasHeight = function() {
	return this._canvasEl.clientHeight;
};

prototype._setCanvasHeight = function(h) {
	h = parseInt(h);
	if (isNaN(h) || h < 1) {
		return;
	}
	var old = this.getCanvasHeight();
	if (h != old) {
		this._canvasEl.style.height = h + "px";
		/**
		  캔바스의 높이가 변했을 경우 트리거되는 이벤트 입니다.

		  @event {Event} onResizeCanvasHeight
		  @param {number} new - 캔바스의 새로운 높이 픽셀
		  @param {number} old - 캔바스의 이전 높이 픽셀

		  @author 조준호
		  @since 1.1.7
		  @version 1.1.7
		  */
		this._evtmgr.trigger("onResizeCanvasHeight", [h, old], true);
	}
};

prototype._calCanvasWidth = function() {
	return this._colLefts[this._colmgr.length()];
};

/**
  모든 그리드 컬럼을 포함하고 있는 캔버스의 가상 폭 픽셀을 리턴합니다.

  @function {number} getCanvasWidth
  @returns {number} 캔버스의 폭 픽셀

  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
prototype.getCanvasWidth = function() {
	return this._canvasEl.clientWidth;
};

prototype._setCanvasWidth = function(w) {
	if (typeof w != 'number') {
		w = parseInt(w);
	}
	if (!isFinite(w) || w < 1) {
		return;
	}

	var old = this.getCanvasWidth();
	if (w != old) {
		this.grid.log('set canvas width. ' + old + '->' + w, Grid.V_RESIZE);//IF_DEBUG
		this._canvasEl.style.width = w + "px";

		/**
		  캔바스의 폭이 변했을 경우 트리거되는 이벤트 입니다.

		  @event {Event} onResizeCanvasWidth
		  @param {number} new - 캔바스의 새로운 폭 픽셀
		  @param {number} old - 캔바스의 이전 폭 픽셀

		  @author 조준호
		  @since 1.1.7
		  @version 1.1.7
		  */
		this._evtmgr.trigger("onResizeCanvasWidth", [w, old], true);
	}
};


/**
  주어진 인덱스의 컬럼의 <code>left</code> 픽셀 값을 리턴합니다.

  @function {number} getColLeft
  @param {number} col - 컬럼 인덱스
  @returns {number} 주어진 인덱스의 컬럼의 <code>left</code> 픽셀 값을 리턴합니다.

  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
prototype.getColLeft = function(i) {
	return this._colLefts[i];
};

prototype._getColLefts = function() {
	return this._colLefts;
};

prototype._setColLefts = function(from, to) {
	from = from || 0;

	var colDefs = this._colmgr.get(),
		widthPlus = this._colWidthPlus();
	to = to || colDefs.length;

	for (; from < to; from++)  {
		this._colLefts[from + 1] = this._colLefts[from] + colDefs[from].width + widthPlus;
	}
	return this._colLefts;
};

prototype._onReorderCols = function() {
	this._setColLefts();
	this._rerender();
};


/**
  주어진 컬럼 키를 가진 컬럼의 폭을 변경합니다.

  @function {} setWidthByKey
  @param {string} key - 컬럼 키
  @param {number} width - 폭 픽셀

  @author 조준호
  @since 1.1.7
  @version 1.1.7
  */
prototype.setWidthByKey = function(key, w) {
	var colDef = this._colmgr.getByKey(key);
	w = Util.bound(w, colDef['minW'], colDef['maxW']);

	if (w === colDef['width']) {
		return;
	}

	this.grid.log('set column width. key=' + key + ', w=' + w, Grid.V_RESIZE);//IF_DEBUG

	var old = colDef['width'],
		evtmgr = this._evtmgr,
		colmgr = this._colmgr,
		args = [key, w, old];

	colDef['width'] = w;

	this._setCanvasWidth(this._setColLefts(colmgr.getIdxByKey(key))[colmgr.length()]);

	this.grid._recreateDynamicCss();

	/**
	  컬럼의 폭이 변했을 경우 트리거되는 이벤트 입니다.

	  @event {Event} onResizeCol_COLKEY
	  @param {string} key - 컬럼 키
	  @param {number} new - 컬럼의 새로운 폭 픽셀
	  @param {number} old - 컬럼의 이전 폭 픽셀

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */

	/**
	  컬럼의 폭이 변했을 경우 트리거되는 이벤트 입니다.

	  @event {Event} onResizeCol
	  @param {string} key - 컬럼 키
	  @param {number} new - 컬럼의 새로운 폭 픽셀
	  @param {number} old - 컬럼의 이전 폭 픽셀

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */
	evtmgr.trigger("onResizeCol_"+key, args, true);
	evtmgr.trigger("onResizeCol", args, true);
};

prototype._autoColWidth = function(key) {
	var res = this._canvasFind(".k_" + key),
		max = Number.MIN_VALUE,
		len = res.length,
		i = 0;
	for (; i < len; i++) {
		if (max < res[i].scrollWidth) {
			max = res[i].scrollWidth;
		}
	}

	max -= this._getPadding();
	this.setWidthByKey(key, max);
};

prototype._setWidth = function(w) {
	w = parseInt(w);
	if (isNaN(w) || w < 1) {
		return;
	}
	this._mask[0].style.width = w + "px";
};

//tested
prototype.getScrollTop = function() {
	return this._mask[0].scrollTop;
};

prototype.getScrollLeft = function() {
	return this._mask[0].scrollLeft;
};

//tested
prototype.setScrollTop = function(t) {
	var scrollTop = this.getScrollTop();
	if (t != null && scrollTop != t) {
		return (this._mask[0].scrollTop = t);
	}
	return scrollTop;
};

prototype.setScrollLeft = function(left) {
	var scrollLeft = this.getScrollLeft();
	if (left != null && scrollLeft != left) {
		return (this._mask[0].scrollLeft = left);
	}
	return scrollLeft;
};

prototype._hasHScrollbar = function() {
	return this._mask[0].offsetHeight > this._mask[0].clientHeight;
};

prototype._hasVScrollbar = function() {
	return this._mask[0].offsetWidth > this._mask[0].clientWidth;
};

prototype._heightPlus = function() {
	return this._mask[0].offsetHeight - this._mask[0].clientHeight;
};

prototype._widthPlus = function() {
	return this._mask[0].offsetWidth - this._mask[0].clientWidth;
};

//tested
prototype._getFirstVisibleRow = function() {
	return Math.floor(this.getScrollTop() / this._getRowOuterHeight());
};

//tester
prototype._getFirstSafeVisibleRow = function() {
	return Math.ceil(this.getScrollTop() / this._getRowOuterHeight());
};

prototype._getLastVisibleRow = function() {
	return Math.ceil((this.getScrollTop() + this._mask[0].clientHeight) / this._getRowOuterHeight()) - 1;
};

prototype._getLastSafeVisibleRow = function() {
	return Math.floor((this.getScrollTop() + this._mask[0].clientHeight) / this._getRowOuterHeight()) - 1;
};

prototype._getFirstRowForSafe = function(row) {
	return row - Math.floor(this._mask[0].clientHeight / this._getRowOuterHeight()) + 1;
};


prototype._getFirstVisibleCol = function() {
	var scrollLeft = this.getScrollLeft(),
		colLefts = this._colLefts,
		i = 0,
		len = colLefts.length;

	for (; i < len; i++) {
		if (colLefts[i] > scrollLeft) {
			return i - 1;
		}
		if (colLefts[i] === scrollLeft) {
			return i;
		}
	}
	return len - 2;
};

prototype._getFirstSafeVisibleCol = function() {
	var scrollLeft = this.getScrollLeft(),
		colLefts = this._colLefts,
		i = 0,
		len = colLefts.length;

	for (; i < len; i++) {
		if (colLefts[i] >= scrollLeft) {
			return i;
		}
	}
	return len - 2;
};

prototype._getLastVisibleCol = function() {
	var scrollLeft = this.getScrollLeft() + this._mask[0].clientWidth,
		colLefts = this._colLefts,
		i = 0,
		len = colLefts.length;

	for (; i < len; i++) {
		if (colLefts[i] >= scrollLeft) {
			return i - 1;
		}
	}
	return len - 2;
};

prototype._getLastSafeVisibleCol = function() {
	var scrollLeft = this.getScrollLeft() + this._mask[0].clientWidth,
		colLefts = this._colLefts,
		i = 0,
		len = colLefts.length;

	for (; i < len; i++) {
		if (colLefts[i] > scrollLeft) {
			return i - 2;
		}
	}
	return len - 2;
};

prototype._getFirstColForSafe = function(col) {
	var colLefts = this._colLefts,
		left = colLefts[col + 1] - this._mask[0].clientWidth,
		i = col;

	if (left <= 0) {
		return 0;
	}

	for (; i >= 0; i--) {
		if ((i === col && colLefts[i] <= left) || colLefts[i] === left) {
			return i;
		}
		if (colLefts[i] < left) {
			return i + 1;
		}
	}

	return 0;
};

prototype.getScrollHForSafe = function(col) {
	var colLefts = this._colLefts,
		left = colLefts[col + 1] - this._mask[0].clientWidth;

	if (colLefts[col] <= left) {
		return colLefts[col];
	}

	return left;
};


prototype._getRenderRange = function() {
	if (this._options['autoHeight']) {
		return {start:0, end:this._datamgr.datalist.length - 1};
	}

	var tmp,
		max = this._datamgr.datalist.length - 1;

	return {
		start: (((tmp = (this._getFirstVisibleRow() - this._options['bufferSize'])) < 0) ? 0 : tmp),
			end: (((tmp = (this._getLastVisibleRow() + this._options['bufferSize'])) > max) ? max : tmp)
	};
};

prototype._fitHeight = function() {
	this._mask[0].style.height = this.getCanvasHeight() + this._heightPlus() + "px";
};

prototype._resizeWidth = function(e) {
	if (this._options['autoHeight']) {
		this._fitHeight();
	}
};

prototype.onAfterRefresh = function(args) {
	if (args !== undefined && args['noRerender'] === true) {
		return;
	}
	this._rerender();
};

prototype._rerender = function() {
	/**
	  그리드 뷰가 다시 렌더링 되기 전에 발생하는 이벤트 입니다.

	  @event {Event} onBeforeRerender

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */

	// saving scroll states
	var st = this.getScrollTop(),
		sl = this.getScrollLeft();

	this._evtmgr.trigger("onBeforeRerender", false, true);
	this.unlockAllRows();
	this._removeRows();
	var rowLen = this._datamgr.datalist.length;
	if (this._lastRowLen !== rowLen) {
		this._lastRowLen = rowLen;
		this._setCanvasHeight(this._calCanvasHeight());
	}
	this._render();

	// resetting scrolls
	this.setScrollTop(st);
	this.setScrollLeft(sl);

	this._evtmgr.trigger("onAfterRerender", false, true);
};

prototype._render = function(range) {
	/*
	   if (this._lockExist()) {
	   this._renderShift(range);
	   }
	   else {
	   */
	this._removeAndRenderRows(range);
	//}
};

prototype._renderShift = function(range) {
	range = range || this._getRenderRange();

	this._removeRowsExcept(range);
	this._appendRows(range);
};

prototype._removeRows = function(range) {
	var canvas = this._canvasEl,
		rendered = this._renderedRows,
		locked = this._lockedRows,
		id;

	if (!range) {
		if (this._lockExist()) {
			for (id in rendered) {
				if (rendered.hasOwnProperty(id)) {
					if (locked.hasOwnProperty(id)) {
						canvas.removeChild(rendered[id]);
						delete rendered[id];
					}
				}
			}
		}
		else {
			this._renderedRows = {};
			canvas.innerHTML = "";
		}
	}
	else {
		var i = range.start,
			end = range.end,
				dataMgr = this._datamgr;

		for (; i <= end; i++) {
			if (!locked.hasOwnProperty(id = dataMgr.getIdByIdx(i)) && rendered.hasOwnProperty(id)) {
				canvas.removeChild(rendered[id]);
				delete rendered[id];
			}
		}
	}
};

prototype._removeRowsExcept = function(range) {
	var canvas = this._canvasEl,
		rendered = this._renderedRows,
		locked = this._lockedRows,
		id;

	if (!range) {
		if (this._lockExist()) {
			for (id in rendered) {
				if (rendered.hasOwnProperty(id) && locked.hasOwnProperty(id) === false) {
					canvas.removeChild(rendered[id]);
					delete rendered[id];
				}
			}
		}
		else {
			this._renderedRows = {};
			canvas.innerHTML = "";
		}
	}
	else {
		var start = range.start,
			end = range.end,
				dataMgr = this._datamgr,
				i;

		for (id in rendered) {
			if (rendered.hasOwnProperty(id)) {
				if (locked.hasOwnProperty(id) || (start <= (i = dataMgr.getIdxById(id)) && i <= end)) {
					continue;
				}
				canvas.removeChild(rendered[id]);
				delete rendered[id];
			}
		}
	}
};

prototype.destroyRow = function(datarow) {
	return this.destroyRowById(this._datamgr.getId(datarow));
};

prototype.destroyRowById = function(id) {
	if (id) {
		this.unlockRowById(id);
		if (this._renderedRows.hasOwnProperty(id)) {
			this._canvasEl.removeChild(this._renderedRows[id]);
			delete this._renderedRows[id];
		}
	}
};

prototype.destroyRowByIdx = function(i) {
	return this.destroyRowById(this._datamgr.getIdByIdx(i));
};

prototype._lockExist = function() {
	return Util.isNotEmptyObj(this._lockedRows);
};

// isRowLocked
// tested

/**
  주어진 아이디에 해당하는 데이터 로우의 DOMElement 가
  현재 lock 되어 있는지 여부를 리턴합니다.
  lock 되어 있을 경우 스크롤이 되어도, DOM Tree 에서 제거 되지 않습니다.

  @function {boolean} isRowLockedById
  @param {string} id - 데이터 로우의 아이디
  @return {boolean} 로우가 lock 되어 있는 여부

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.isRowLockedById = function(id) {
	if (id) {
		return this._lockedRows.hasOwnProperty(id);
	}
	return false;
};

/**
  주어진 데이터 로우의 DOMElement 가
  현재 lock 되어 있는지 여부를 리턴합니다.
  lock 되어 있을 경우 스크롤이 되어도, DOM Tree 에서 제거 되지 않습니다.

  @function {boolean} isRowLocked
  @param {Object} datarow - 데이터 로우
  @return {boolean} 로우가 lock 되어 있는 여부

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.isRowLocked = function(datarow) {
	return this.isRowLockedById(this._datamgr.getId(datarow));
};

/**
  주어진 로우 인덱스의 DOMElement 가
  현재 lock 되어 있는지 여부를 리턴합니다.
  lock 되어 있을 경우 스크롤이 되어도, DOM Tree 에서 제거 되지 않습니다.

  @function {boolean} isRowLockedByIdx
  @param {number} rowIdx - 로우 인덱스
  @return {boolean} 로우가 lock 되어 있는 여부

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.isRowLockedByIdx = function(i) {
	return this.isRowLockedById(this._datamgr.getIdByIdx(i));
};

// lockRow
// tested
/**
  주어진 아이디에 해당하는 데이터 로우의 DOMElement 를 lock 합니다.
  lock 되어 있을 경우 스크롤이 되어도, DOM Tree 에서 제거 되지 않습니다.

  @function {} lockRowById
  @param {string} id - 데이터 로우의 아이디

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.lockRowById = function(id) {
	if (id && this._datamgr.hasById(id)) {
		this._lockedRows[id] = true;
	}
};

/**
  주어진 데이터 로우의 DOMElement 를 lock 합니다.
  lock 되어 있을 경우 스크롤이 되어도, DOM Tree 에서 제거 되지 않습니다.

  @function {} lockRow
  @param {Object} datarow - 데이터 로우

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.lockRow = function(datarow) {
	return this.lockRowById(this._datamgr.getId(datarow));
};

/**
  주어진 로우 인덱스의 DOMElement 를 lock 합니다.
  lock 되어 있을 경우 스크롤이 되어도, DOM Tree 에서 제거 되지 않습니다.

  @function {} lockRowByIdx
  @param {number} rowIdx - 로우 인덱스

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.lockRowByIdx = function(i) {
	return this.lockRowById(this._datamgr.getIdByIdx(i));
};

//unlockRow
//tested
/**
  주어진 아이디에 해당하는 데이터 로우의 DOMElement 를 unlock 합니다.
  lock 되어 있을 경우 스크롤이 되어도, DOM Tree 에서 제거 되지 않습니다.

  @function {} unlockRowById
  @param {string} id - 데이터 로우의 아이디

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.unlockRowById = function(id) {
	if (this.isRowLockedById(id)) {
		delete this._lockedRows[id];
	}
};

/**
  주어진 데이터 로우의 DOMElement 를 unlock 합니다.
  lock 되어 있을 경우 스크롤이 되어도, DOM Tree 에서 제거 되지 않습니다.

  @function {} unlockRow
  @param {Object} datarow - 데이터 로우

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.unlockRow = function(datarow) {
	return this.unlockRowById(this._datamgr.getId(datarow));
};

/**
  주어진 로우 인덱스의 DOMElement 를 unlock 합니다.
  lock 되어 있을 경우 스크롤이 되어도, DOM Tree 에서 제거 되지 않습니다.

  @function {} unlockRowByIdx
  @param {number} rowIdx - 로우 인덱스

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.unlockRowByIdx = function(i) {
	return this.unlockRowById(this._datamgr.getIdByIdx(i));
};

//unlockAllRows
/**
  모든 로우의 DOM Element 를 unlock 합니다.

  @function {} unlockAllRows

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.unlockAllRows = function() {
	this._lockedRows = {};
};

/**
  주어진 아이디에 해당하는 데이터 로우의 DOMElement 다시 랜더링 합니다.

  @function {} rerenderRowById
  @param {string} id - 데이터 로우의 아이디

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.rerenderRowById = function(id) {
	// check if valid id
	if (!this._datamgr.containsById(id)) {
		return;
	}

	var rmap = this._renderedRows,
		canvas = this._canvasEl,
		datam = this._datamgr,
		idKey = datam['idKey'],
		i = datam.getIdxById(id),
		datarow = datam.getById(id),
		colDefs = this._colmgr.get(),
		colCommonClasses = this._getColCellClasses(colDefs),
		colCommon = colCommonClasses.map(function(cls) { return "<div class='" + cls + " "; }),
		renSettings = this._getRendererSettings(colDefs),
		renderers = renSettings[0],
		cellInputs = renSettings[1],
		rowH = this._getRowOuterHeight(),
		rowCommon = "<div class='" + this._rowClass + "' i='",
		rowCommon2 = "' " + this._rowIdxAttr + "='",
		html = [],
		newNodes;

	// remove from map
	if (rmap.hasOwnProperty(id)) {
		canvas.removeChild(rmap[id]);

		// fire event to notify onBeforeRenderRows
		this._evtmgr.trigger("onBeforeRenderRows", [[i]], true);

		// render and append to canvas
		html.push(rowCommon + datarow[idKey] + rowCommon2 + i + "' style='top:" + (rowH * i) + "px'>");
		this._renderRow(html, i, datarow, colDefs, colCommon, renderers, cellInputs);
		rmap[id] = Util.appendHTML(canvas, html.join(""))[0];

		// fire event to notify rendere completion
		this._evtmgr.trigger("onAppendRows", [[i]], true);
	}

};

prototype._getRendererSettings = function(colDefs) {
	colDefs = colDefs || this._colmgr.get();
	var i = 0,
		l = colDefs.length,
		colDef,
		settings = [],
		renderers = [],
		renderer;
	for (; i < l; i++) {
		// 0 = norenderer, 1 = renderer, 2 = renderer + cell

		colDef = colDefs[i];
		renderer = colDef['renderer'];
		if (renderer) {
			settings.push(!!colDef['rendererInput']);
			renderers.push(renderer);
		}
		else {
			settings.push(false);
			renderers.push(false);
		}
	}
	return [renderers, settings];
}

/**
  주어진 데이터 로우의 DOMElement 다시 랜더링 합니다.

  @function {} rerenderRow
  @param {Object} datarow - 데이터 로우

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.rerenderRow = function(datarow) {
	return this.rerenderRowById(this._datamgr.getId(datarow));
};

/**
  주어진 로우 인덱스의 DOMElement 다시 랜더링 합니다.

  @function {} rerenderRowByIdx
  @param {number} rowIdx - 로우 인덱스

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.rerenderRowByIdx = function(i) {
	return this.rerenderRowById(this._datamgr.getIdByIdx(i));
};


/**
  주어진 데이터 로우 아이디에 해당하는 데이터 로우와
  컬럼 키에 해당하는 셀의 DOM Element 를 다시 랜더링합니다.

  @function {} rerenderCellByIdAndKey
  @param {string} id - 데이터 로우 아이디
  @param {string} key - 컬럼 키

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.rerenderCellByIdAndKey = function(id, key) {
	var cellnode = this.getCellByIdAndKey(id, key);
	if (cellnode) {
		var datam = this._datamgr,
			colm = this._colmgr,
			datarow = datam.getById(id),
			colDef = colm.getByKey(key),
			rowIdx = datam.getIdxById(id),
			i = colm.getIdxByKey(key),
			renderer = colDef['renderer'],
			cellInput = renderer ? colDef['rendererInput'] : false,
			html = [];

		if (renderer) {
			if (cellInput) {
				this._renderCell(html, rowIdx, i, datarow, colDef, renderer, true);
			}
			else {
				this._renderCell(html, rowIdx, i, datarow, colDef, renderer);
			}
		}
		else {
			this._renderCell(html, rowIdx, i, datarow, colDef);
		}

		cellnode.innerHTML = html.join('');
	}
};

/**
  주어진 로우 인덱스와 컬럼 인덱스에 해당하는 셀의 DOM Element 를 다시 랜더링합니다.

  @function {} rerenderCellByIdx
  @param {number} row - 로우 인덱스
  @param {number} col - 컬럼 인덱스

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.rerenderCellByIdx = function(row, col) {
	return this.rerenderCellByIdAndKey(this._datamgr.getIdByIdx(row), this._colmgr.getKeyByIdx(col));
};

prototype._appendRows = function(range) {
	var evtmgr = this._evtmgr,
		args = [range],
		html = [],
		i = range.start,
		len = range.end,
		datam = this._datamgr,
		datalist = datam['datalist'],
		idKey = datam['idKey'],
		colDefs = this._colmgr.get(),
		colCommon = this._getColCellClasses(colDefs).map(function(cls) { return "<div class='" + cls + " "; }),
		rendered = this._renderedRows,
		rowH = this._getRowOuterHeight(),
		canvas = this._canvasEl,
		rowCommon = "<div class='" + this._rowClass + "' i='",
		rowCommon2 = "' " + this._rowIdxAttr + "='",
		renSettings = this._getRendererSettings(colDefs),
		renderers = renSettings[0],
		cellInputs = renSettings[1],
		datarow,
		id,
		added = [],
		newNodes;

	evtmgr.trigger("onBeforeRenderRows", args, true);

	this.grid.twstart();//IF_DEBUG

	for (; i <= len; i++) {
		datarow = datalist[i];
		id = datarow[idKey];
		if (!rendered.hasOwnProperty(id)) {
			html[html.length] = rowCommon + id + rowCommon2 + i + "' style='top:" + (rowH * i) + "px'>";
			this._renderRow(html, i, datarow, colDefs, colCommon, renderers, cellInputs);
			this.grid.twlap();//IF_DEBUG
			added.push(id);
		}
	}	

	this.grid.twprint();//IF_DEBUG
	this.grid.twstop();//IF_DEBUG

	newNodes = Util.appendHTML(canvas, html.join(""));

	i = 0;
	len = added.length;
	for (; i < len; i++) {
		rendered[added[i]] = newNodes[i];
	}

	evtmgr.trigger("onAppendRows", args, true);
};

prototype._removeAndRenderRows = function(range) {
	range = range || this._getRenderRange();

	var evtmgr = this._evtmgr,
		args = [range],
		html = [],
		i = range.start,
		len = range.end,
		datam = this._datamgr,
		datalist = datam['datalist'],
		idKey = datam['idKey'],
		colDefs = this._colmgr.get(),
		colCommon = this._getColCellClasses(colDefs).map(function(cls) { return "<div class='" + cls + " "; }),
		rowH = this._getRowOuterHeight(),
		canvas = this._canvasEl,
		rowCommon = "<div class='" + this._rowClass + "' i='",
		rowCommon2 = "' " + this._rowIdxAttr + "='",
		renSettings = this._getRendererSettings(colDefs),
		renderers = renSettings[0],
		cellInputs = renSettings[1],
		datarow,
		id,
		added = [],
		rendered = {};

	evtmgr.trigger("onBeforeRenderRows", args, true);

	this.grid.twstart();//IF_DEBUG

	for (; i <= len; i++) {
		datarow = datalist[i];
		id = datarow[idKey];
		html[html.length] = rowCommon + id + rowCommon2 + i + "' style='top:" + (rowH * i) + "px'>";
		this._renderRow(html, i, datarow, colDefs, colCommon, renderers, cellInputs);
		this.grid.twlap();//IF_DEBUG
		added.push(id);
	}
	this.grid.twprint();//IF_DEBUG
	this.grid.twstop();//IF_DEBUG

	canvas.innerHTML = html.join("");

	i = 0;
	len = added.length;
	for (; i < len; i++) {
		rendered[added[i]] = canvas.childNodes[i];
	}

	this._renderedRows = rendered;

	/**
	  그리드가 로우가 새로 렌더링 되었을 때 (로우가 추가되거나, 다시 렌더링 되거나) 발생하는 이벤트 입니다.

	  @event {Event} onAppendRows
	  @param {Object} range - 렌더링 된 로우 범위. 예) range = {start:0, end:10}

	  @author 조준호
	  @since 1.2.0
	  @version 1.2.3
	  */
	evtmgr.trigger("onAppendRows", args, true);
};

prototype._getColCellClass = function(colDef) {
	var cssClass = this._cellClass + " k_" + colDef['key'];
	if (colDef['colClass']) {
		cssClass += " " + colDef['colClass'];
	}

	/**
	  그리드 컬럼 공통 css 클래스를 생성할 때 발생하는 이벤트입니다. 특정 컬럼 셀에 공통적인 css 클래스를 추가하려면 css 클래스 명을 리턴하면 됩니다.
	  예) return "이_컬럼에만_주어질_css_클래스_명";

	  @event {Event} onGetColCellClass
	  @param {Object} colDef - 컬럼 정의 오브젝트
	  @returns {string} 컬럼 셀들에 공통적으로 추가할 css 클래스 명

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */
	var css = this._evtmgr.trigger("onGetColCellClass", [colDef]);
	if (css) {
		cssClass += " " + css.join(' ');
	}
	return cssClass;
};

prototype._getColCellClasses = function(colDefs) {
	colDefs = colDefs || this._colmgr.get();
	var cssClasses = [],
		i = 0,
		len = colDefs.length;
	for (; i < len; i++) {
		cssClasses.push(this._getColCellClass(colDefs[i]));
	}
	return cssClasses;
};

prototype._renderRow = function(html, rowIdx, datarow, colDefs, colCommon, renderers, cellInputs) {
	var i = 0,
		collen = colDefs.length,
		colDef,
		args = [rowIdx, null, datarow, null],
		evtmgr = this._evtmgr,
		cellclass,
		renderer;

	for (; i < collen; i++) {
		colDef = colDefs[i];
		args[1] = i;
		args[3] = colDef;

		/**
		  그리드 셀의 css 클래스를 생성할 때 발생하는 이벤트입니다. 특정 셀에 css 클래스를 추가하려면 css 클래스 명을 리턴하면 됩니다.
		  예) return "이_셀에만_주어질_css_클래스_명";

		  @event {Event} onGetCellClass
		  @param {number} rowIdx - 셀의 로우 인덱스
		  @param {number} colIdx - 셀의 컬럼 인덱스
		  @param {Object} datarow - 셀의 로우 데이터
		  @param {Object} colDef - 셀의 컬럼 정의 오브젝트
		  @returns {string} 셀에 추가할 css 클래스 명

		  @author 조준호
		  @since 1.1.7
		  @version 1.1.7
		  */
		cellclass = evtmgr.trigger("onGetCellClass", args);
		if (cellclass) {
			html[html.length] = colCommon[i] + cellclass.join(" ") + "'>";
		}
		else {
			html[html.length] = colCommon[i] + "'>";
		}

		if (renderer = renderers[i]) {
			if (cellInputs[i]) {
				this._renderCell(html, rowIdx, i, datarow, colDef, renderer, true);
			}
			else {
				this._renderCell(html, rowIdx, i, datarow, colDef, renderer);
			}
		}
		else {
			this._renderCell(html, rowIdx, i, datarow, colDef);
		}

		html[html.length] = "</div>";
	}
	html[html.length] = "</div>";

	return html;
};



prototype._renderCell = function(html, rowIdx, colIdx, datarow, colDef/*, renderer, cellInput */) {
	var key = colDef['key'],
		val = datarow[key],
		args = [rowIdx, colIdx, datarow, colDef, html],
		evtmgr = this._evtmgr,
		event = "onRenderCell_"+key;

	/**
	  그리드 셀 안에 prepend 할 html 을 생성할 때 발생하는 이벤트입니다. prepend 할 내용이 있으면 html 에 push 해주면 됩니다.
	  예) html.push("prepend 할 내용");

	  @event {Event} onRenderCell_COLKEY_prepend
	  @param {number} rowIdx - 셀의 로우 인덱스
	  @param {number} colIdx - 셀의 컬럼 인덱스
	  @param {Object} datarow - 셀의 로우 데이터
	  @param {Object} colDef - 셀의 컬럼 정의 오브젝트
	  @param {Array.<string>} html - 셀에 append 할 html 을 넣을 어레이

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */
	evtmgr.trigger(event+"_prepend", args, true);

	if (typeof val != "string" || val.substring(0, 3) !== "J@H") {
		if (arguments.length > 5) {
			// has renderer
			if (arguments[6]) {
				// renderer with cell input
				html[html.length] = arguments[5](new Cell({'grid':this.grid, 'row':rowIdx, 'col':colIdx, 'datarow':datarow, 'colDef':colDef}));
			}
			else {
				// renderer with serialized inputs
				html[html.length] = arguments[5](val, rowIdx, colIdx, datarow, colDef);
			}
		}
		else {
			// no renderer
			if (val != null) {
				html[html.length] = val;
			}
		}
	}

	/**
	  그리드 셀 안에 append 할 html 을 생성할 때 발생하는 이벤트입니다. append 할 내용이 있으면 html 에 push 해주면 됩니다.
	  예) html.push("append 할 내용");

	  @event {Event} onRenderCell_COLKEY_append
	  @param {number} rowIdx - 셀의 로우 인덱스
	  @param {number} colIdx - 셀의 컬럼 인덱스
	  @param {Object} datarow - 셀의 로우 데이터
	  @param {Object} colDef - 셀의 컬럼 정의 오브젝트
	  @param {Array.<string>} html - 셀에 append 할 html 을 넣을 어레이

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */
	evtmgr.trigger(event+"_append", args, true);
};

/**
  셀 노드를 다시 렌더링 합니다.

  @function {} rerender

  @author 조준호
  @since 1.0.0
  @version 1.3.0
  */
Cell.prototype.rerender = function() {
	return this.grid['view'].rerenderCellByIdAndKey(this.getId(), this.getKey());
};

/**
  셀로 뷰를 스크롤 합니다.

  @function {} scrollTo

  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
Cell.prototype.scrollTo = function() {
	this.grid['view'].scrollTo(this.getRowIdx(), this.getColIdx());
};

prototype._keydown = function(e) {
	if (!Util.contains(this._mask[0], document.activeElement, this._ctnr[0])) {
		return;
	}

	this.grid.log('UI event:keydown on Viewport. event=' + e.type + ', keycode=' + e.which, Grid.V_KEYDOWN);//IF_DEBUG

	/**
	  ViewportManager 의 view 가 활성화된 상태에서 keydown 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 입력된 키보드의 키 코드를 붙여서 이벤트가 발생됩니다.
	  예를들면 유저가 enter 를 입력할 경우 enter 키의 키코드는 13 이므로
	  keydown_13 의 이벤트가 트리거 됩니다.
	  @event {Event} keydownCanvas_KEYCODE
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트

	  @author 조준호
	  @since 1.0.0
	  @version 1.1.7
	  */

	/**
	  ViewportManager 의 view 가 활성화된 상태에서 keydown 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} keydownCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트

	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	this._evtmgr.trigger("keydownCanvas_"+e.which, [e], true);
	this._evtmgr.trigger("keydownCanvas", [e], true);
};

prototype._keyup = function(e) {
	if (!Util.contains(this._mask[0], document.activeElement, this._ctnr[0])) {
		return;
	}
	this.grid.log('UI event:keyup on Viewport. event=' + e.type + ', keycode=' + e.which, Grid.V_KEYUP);//IF_DEBUG

	/**
	  ViewportManager 의 view 가 활성화된 상태에서 keyup 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 입력된 키보드의 키 코드를 붙여서 이벤트가 발생됩니다.
	  예를들면 유저가 enter 를 입력할 경우 enter 키의 키코드는 13 이므로
	  keyup_13 의 이벤트가 트리거 됩니다.
	  @event {Event} keyupCanvas_KEYCODE
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */

	/**
	  ViewportManager 의 view 가 활성화된 상태에서 keyup 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} keyupCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */
	this._evtmgr.trigger("keyupCanvas_"+e.which, [e], true);
	this._evtmgr.trigger("keyupCanvas", [e], true);
};

prototype._keypress = function(e) {
	if (!Util.contains(this._mask[0], document.activeElement, this._ctnr[0])) {
		return;
	}
	this.grid.log('UI event:keypress on Viewport. event=' + e.type + ', keycode=' + e.which, Grid.V_KEYPRESS);//IF_DEBUG

	/**
	  ViewportManager 의 view 가 활성화된 상태에서 keypress 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 입력된 키보드의 키 코드를 붙여서 이벤트가 발생됩니다.
	  예를들면 유저가 enter 를 입력할 경우 enter 키의 키코드는 13 이므로
	  keypress_13 의 이벤트가 트리거 됩니다.
	  @event {Event} keypressCanvas_KEYCODE
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */

	/**
	  ViewportManager 의 view 가 활성화된 상태에서 keypress 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} keypressCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */
	this._evtmgr.trigger("keypressCanvas_"+e.which, [e], true);
	this._evtmgr.trigger("keypressCanvas", [e], true);
};

prototype._mousein = function(e) {

	/**
	  ViewportManager 에서 마우스 버튼을 누른 상태에서 ViewportManager 에 mousein 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 예를 들면, 컬럼 키가 id 일 경우 draginCanvas_id 의 이벤트가 발생합니다.
	  @event {Event} draginCanvas_COLKEY
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {jx.grid.Cell} cell - 마우스 이벤트에 관련된 {@link jx.grid.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에서 마우스 버튼을 누른 상태에서 ViewportManager 에 mousein 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} draginCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {jx.grid.Cell} cell - 마우스 이벤트에 관련된 {@link jx.grid.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에 mousein 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 예를 들면, 컬럼 키가 id 일 경우 mouseinCanvas_id 의 이벤트가 발생합니다.
	  @event {Event} mouseinCanvas_COLKEY
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {jx.grid.Cell} cell - 마우스 이벤트에 관련된 {@link jx.grid.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에 mousein 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} mouseinCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {jx.grid.Cell} cell - 마우스 이벤트에 관련된 {@link jx.grid.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */
	if (this._drag) {
		this._triggerMouseEvent(e, "draginCanvas,mouseinCanvas", Grid.V_MOUSEIN);
	}
	else {
		this._triggerMouseEvent(e, "mouseinCanvas", Grid.V_MOUSEIN);
	}
};

prototype._mouseout = function(e) {
	/**
	  ViewportManager 에서 마우스 버튼을 누른 상태에서 ViewportManager 에 mouseout 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 예를 들면, 컬럼 키가 id 일 경우 dragoutCanvas_id 의 이벤트가 발생합니다.
	  @event {Event} dragoutCanvas_COLKEY
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {jx.grid.Cell} cell - 마우스 이벤트에 관련된 {@link jx.grid.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에서 마우스 버튼을 누른 상태에서 ViewportManager 에 mouseout 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} dragoutCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {jx.grid.Cell} cell - 마우스 이벤트에 관련된 {@link jx.grid.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에 mouseout 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 예를 들면, 컬럼 키가 id 일 경우 mouseoutCanvas_id 의 이벤트가 발생합니다.
	  @event {Event} mouseoutCanvas_COLKEY
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {jx.grid.Cell} cell - 마우스 이벤트에 관련된 {@link jx.grid.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.0.0
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에 mouseout 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} mouseoutCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {jx.grid.Cell} cell - 마우스 이벤트에 관련된 {@link jx.grid.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	if (this._drag) {
		this._triggerMouseEvent(e, "dragoutCanvas,mouseoutCanvas", Grid.V_MOUSEOUT);
	}
	else {
		this._triggerMouseEvent(e, "mouseoutCanvas", Grid.V_MOUSEOUT);
	}
};

prototype._mouseenter = function(e) {
	/**
	  ViewportManager 에서 마우스 버튼을 누른 상태에서 ViewportManager 에 mouseenter 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 예를 들면, 컬럼 키가 id 일 경우 dragenterCanvas_id 의 이벤트가 발생합니다.
	  @event {Event} dragenterCanvas_COLKEY
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {jx.grid.Cell} cell - 마우스 이벤트에 관련된 {@link jx.grid.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에서 마우스 버튼을 누른 상태에서 ViewportManager 에 mouseenter 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} dragenterCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {jx.grid.Cell} cell - 마우스 이벤트에 관련된 {@link jx.grid.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에 mouseenter 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 예를 들면, 컬럼 키가 id 일 경우 mouseenterCanvas_id 의 이벤트가 발생합니다.
	  @event {Event} mouseenterCanvas_COLKEY
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {jx.grid.Cell} cell - 마우스 이벤트에 관련된 {@link jx.grid.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에 mouseenter 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} mouseenterCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {jx.grid.Cell} cell - 마우스 이벤트에 관련된 {@link jx.grid.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */
	if (this._drag) {
		this._triggerMouseEvent(e, "dragenterCanvas,mouseenterCanvas", Grid.V_MOUSEENTER);
	}
	else {
		this._triggerMouseEvent(e, "mouseenterCanvas", Grid.V_MOUSEENTER);
	}
};

prototype._mouseleave = function(e) {
	/**
	  ViewportManager 에서 마우스 버튼을 누른 상태에서 ViewportManager 에 mouseleave 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 예를 들면, 컬럼 키가 id 일 경우 dragleaveCanvas_id 의 이벤트가 발생합니다.
	  @event {Event} dragleaveCanvas_COLKEY
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {jx.grid.Cell} cell - 마우스 이벤트에 관련된 {@link jx.grid.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에서 마우스 버튼을 누른 상태에서 ViewportManager 에 mouseleave 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} dragleaveCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {jx.grid.Cell} cell - 마우스 이벤트에 관련된 {@link jx.grid.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에 mouseleave 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 예를 들면, 컬럼 키가 id 일 경우 mouseleaveCanvas_id 의 이벤트가 발생합니다.
	  @event {Event} mouseleaveCanvas_COLKEY
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {jx.grid.Cell} cell - 마우스 이벤트에 관련된 {@link jx.grid.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에 mouseleave 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} mouseleaveCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {jx.grid.Cell} cell - 마우스 이벤트에 관련된 {@link jx.grid.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */
	if (this._drag) {
		this._triggerMouseEvent(e, "dragleaveCanvas,mouseleaveCanvas", Grid.V_MOUSELEAVE);
	}
	else {
		this._triggerMouseEvent(e, "mouseleaveCanvas", Grid.V_MOUSELEAVE);
	}
};

prototype._mousemove = function(e) {
	/**
	  ViewportManager 에서 마우스 버튼을 누른 상태에서 ViewportManager 에 mousemove 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 예를 들면, 컬럼 키가 id 일 경우 dragmoveCanvas_id 의 이벤트가 발생합니다.
	  @event {Event} dragmoveCanvas_COLKEY
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {jx.grid.Cell} cell - 마우스 이벤트에 관련된 {@link jx.grid.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에서 마우스 버튼을 누른 상태에서 ViewportManager 에 mousemove 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} dragmoveCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {jx.grid.Cell} cell - 마우스 이벤트에 관련된 {@link jx.grid.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에 mousemove 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 예를 들면, 컬럼 키가 id 일 경우 mousemoveCanvas_id 의 이벤트가 발생합니다.
	  @event {Event} mousemoveCanvas_COLKEY
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {jx.grid.Cell} cell - 마우스 이벤트에 관련된 {@link jx.grid.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.0.0
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에 mousemove 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} mousemoveCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {jx.grid.Cell} cell - 마우스 이벤트에 관련된 {@link jx.grid.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	if (this._drag) {
		this._triggerMouseEvent(e, "dragmoveCanvas,mousemoveCanvas", Grid.V_MOUSEMOVE);
	}
	else {
		this._triggerMouseEvent(e, "mousemoveCanvas", Grid.V_MOUSEMOVE);
	}
};

prototype._mouseover = function(e) {
	/**
	  ViewportManager 에서 마우스 버튼을 누른 상태에서 ViewportManager 에 mouseover 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 예를 들면, 컬럼 키가 id 일 경우 dragoverCanvas_id 의 이벤트가 발생합니다.
	  @event {Event} dragoverCanvas_COLKEY
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {jx.grid.Cell} cell - 마우스 이벤트에 관련된 {@link jx.grid.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에서 마우스 버튼을 누른 상태에서 ViewportManager 에 mouseover 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} dragoverCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {jx.grid.Cell} cell - 마우스 이벤트에 관련된 {@link jx.grid.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에 mouseover 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 예를 들면, 컬럼 키가 id 일 경우 mouseoverCanvas_id 의 이벤트가 발생합니다.
	  @event {Event} mouseoverCanvas_COLKEY
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {jx.grid.Cell} cell - 마우스 이벤트에 관련된 {@link jx.grid.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.0.0
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에 mouseover 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} mouseoverCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {jx.grid.Cell} cell - 마우스 이벤트에 관련된 {@link jx.grid.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	if (this._drag) {
		this._triggerMouseEvent(e, "dragoverCanvas,mouseoverCanvas", Grid.V_MOUSEOVER);
	}
	else {
		this._triggerMouseEvent(e, "mouseoverCanvas", Grid.V_MOUSEOVER);
	}
};

prototype._mousedown = function(e) {
	/**
	  ViewportManager 에 mousedown 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 예를 들면, 컬럼 키가 id 일 경우 mousedownCanvas_id 의 이벤트가 발생합니다.
	  @event {Event} mousedownCanvas_COLKEY
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {jx.grid.Cell} cell - 마우스 이벤트에 관련된 {@link jx.grid.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.0.0
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에 mousedown 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} mousedownCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {jx.grid.Cell} cell - 마우스 이벤트에 관련된 {@link jx.grid.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	if (this._triggerMouseEvent(e, "mousedownCanvas", Grid.V_MOUSEDOWN)) {
		this._drag = true;
		//this.focus(e);
	}
};

prototype._mouseup = function(e) {
	/**
	  ViewportManager 에 mouseup 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 예를 들면, 컬럼 키가 id 일 경우 mouseupCanvas_id 의 이벤트가 발생합니다.
	  @event {Event} mouseupCanvas_COLKEY
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {jx.grid.Cell} cell - 마우스 이벤트에 관련된 {@link jx.grid.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.0.0
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에 mouseup 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} mouseupCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {jx.grid.Cell} cell - 마우스 이벤트에 관련된 {@link jx.grid.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	this._drag = false;
	if (this._triggerMouseEvent(e, "mouseupCanvas", Grid.V_MOUSEUP)) {
		//this.focus(e);
	}
};

prototype._click = function(e) {
	/**
	  ViewportManager 에 click 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 예를 들면, 컬럼 키가 id 일 경우 clickCanvas_id 의 이벤트가 발생합니다.
	  @event {Event} clickCanvas_COLKEY
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {jx.grid.Cell} cell - 마우스 이벤트에 관련된 {@link jx.grid.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.0.0
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에 click 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} clickCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {jx.grid.Cell} cell - 마우스 이벤트에 관련된 {@link jx.grid.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	if (this._triggerMouseEvent(e, "clickCanvas", Grid.V_CLICK)) {
		this.focus(e);
	}
};

prototype._dblclick = function(e) {
	/**
	  ViewportManager 에 dblclick 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 예를 들면, 컬럼 키가 id 일 경우 dblclickCanvas_id 의 이벤트가 발생합니다.
	  @event {Event} dblclickCanvas_COLKEY
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {jx.grid.Cell} cell - 마우스 이벤트에 관련된 {@link jx.grid.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.0.0
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에 dblclick 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} dblclickCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {jx.grid.Cell} cell - 마우스 이벤트에 관련된 {@link jx.grid.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	this._triggerMouseEvent(e, "dblclickCanvas", Grid.V_DBLCLICK);
};

prototype._triggerMouseEvent = function(e, events) {
	var node = this._getClosestCell(e.target);

	if (node) {
		this.grid.log('UI event:' + events + ' on Viewport. event=' + e.type, arguments[2]);//IF_DEBUG

		var cell = new Cell({'grid':this.grid, 'node':node}),
			key = cell.getKey(),
			args = [e, cell],
			evtmgr = this._evtmgr;

		if (events.indexOf(',') > -1) {
			var arr = events.split(','),
				i = 0,
				len = arr.length,
				evt;
			for (; i < len; i++) {
				evt = arr[i];
				evtmgr.trigger(evt+'_'+key, args, true);
				evtmgr.trigger(evt, args, true);
			}
		}
		else {
			evtmgr.trigger(events+'_'+key, args, true);
			evtmgr.trigger(events, args, true);
		}
		return true;
	}
	else {
		return false;
	}
};

prototype._scroll = function() {
	var scrollTop = this.getScrollTop(),
		scrollVDist = scrollTop - this._lastScrollTop,
		scrollLeft = this.getScrollLeft(),
		scrollHDist = scrollLeft - this._lastScrollLeft;

	if (scrollVDist === 0 && scrollHDist === 0) {
		return;
	}

	this.grid.log('Viewport scrolled... h=' + scrollHDist + ', v=' + scrollVDist, Grid.V_SCROLL);//IF_DEBUG

	/**
	  그리드 뷰가 스크롤 되었을 때 발생하는 이벤트 입니다.

	  @event {Event} onScrollViewport

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */
	this._evtmgr.trigger("onScrollViewport", false, true);

	if (scrollHDist) {
		this._lastScrollLeft = scrollLeft;

		/**
		  그리드 뷰가 가로 스크롤 되었을 때 발생하는 이벤트 입니다.

		  @event {Event} onScrollViewportH

		  @author 조준호
		  @since 1.1.7
		  @version 1.1.7
		  */
		this._evtmgr.trigger("onScrollViewportH", [scrollLeft], true);
	}

	var numDiff = Math.abs(scrollVDist / this._getRowOuterHeight());

	if (numDiff < this._options['appendThreshold']) {
		return;
	}

	this._lastScrollTop = scrollTop;
	this._render();
	/*
	   }
	   else {
	   this._renderShift();
	   }
	   */

	/**
	  그리드 뷰가 세로 스크롤 되었을 때 발생하는 이벤트 입니다.

	  @event {Event} onScrollViewportV

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */
	this._evtmgr.trigger("onScrollViewportV", false, true);
	};

prototype.focus = function(e) {
	/**
	  그리드 캔바스의 DOM Elemenet 가 포커스 되기 전에 발생하는 이벤트 입니다. false 를 리턴하면 캔바스의 포커스가 취소됩니다.

	  @event {Event} onBeforeFocusCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @returns {boolean} continueOrStop - false 를 리턴할 경우 그리드 캔바스를 포커스하지 않습니다.

	  @author 조준호
	  @since 1.2.1
	  @version 1.2.1
	  */
	if (e && this._evtmgr.triggerInvalid("onBeforeFocusCanvas", [e])) {
		return;
	}

	//var scr = Util.getBodyScroll();

	var maskEl = this._mask[0];
	if (document.activeElement !== maskEl) {
		this.grid.log('focusing canvas...', Grid.V_FOCUS);//IF_DEBUG
		if (maskEl.setActive) {
			try {
				maskEl.setActive();
			}
			catch (exp) {}
		}
		maskEl.focus();
		if (document.activeElement !== maskEl) {
			this._mask.focus();
		}
	}

	//Util.setBodyScroll(scr[0], scr[1]);
};

//isRendered
//tested
/**
  주어진 아이디에 해당하는 데이터 로우의 DOMElement 가
  현재 랜더링되어 있는지 여부를 리턴합니다.

  @function {boolean} isRenderedById
  @param {string} id - 데이터 로우의 아이디
  @return {boolean} 로우가 랜더링되어 있는 여부

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.isRenderedById = function(id) {
	if (id) {
		return this._renderedRows.hasOwnProperty(id);
	}
	return false;
};

/**
  주어진 데이터 로우의 DOMElement 가
  현재 랜더링되어 있는지 여부를 리턴합니다.

  @function {boolean} isRendered
  @param {Object} datarow - 데이터 로우
  @return {boolean} 로우가 랜더링되어 있는 여부

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.isRendered = function(datarow) {
	return this.isRenderedById(this._datamgr.getId(datarow));
};

/**
  주어진 로우 인덱스의 DOMElement 가
  현재 랜더링되어 있는지 여부를 리턴합니다.

  @function {boolean} isRenderedByIdx
  @param {number} rowIdx - 로우 인덱스
  @return {boolean} 로우가 랜더링되어 있는 여부

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.isRenderedByIdx = function(rowIdx) {
	return this.isRenderedById(this._datamgr.getIdByIdx(rowIdx));
};

//getRow
//tested
prototype.getRowById = function(id) {
	if (this.isRenderedById(id)) {
		return this._renderedRows[id];
	}
};

prototype.getRow = function(datarow) {
	return this.getRowById(this._datamgr.getId(datarow));
};

prototype.getRowByIdx = function(i) {
	return this.getRowById(this._datamgr.getIdByIdx(i));
};

//getRenderedRow
//tested
prototype.getRenderedRowById = function(id) {
	if (this.isRenderedById(id)) {
		return this._renderedRows[id];
	}
};

prototype.getRenderedRow = function(datarow) {
	return this.getRenderedRowById(this._datamgr.getId(datarow));
};

prototype.getRenderedRowByIdx = function(i) {
	return this.getRenderedRowById(this._datamgr.getIdByIdx(i));
};

prototype.getRenderedRows = function() {
	return Util.toArray(this._renderedRows);
	return Array.prototype.slice.call(this._canvasEl.childNodes);
};

prototype.getCell = function(rowIdx, colIdx) {
	if (colIdx != null) {
		var rowNode = this.getRowByIdx(rowIdx);
		if (rowNode) {
			return rowNode.childNodes[colIdx];
		}
	}
};

prototype.getCellByIdAndKey = function(id, key) {
	var colIdx = this._colmgr.getIdxByKey(key);
	if (colIdx != null) {
		var rowNode = this.getRowById(id);
		if (rowNode) {
			return rowNode.childNodes[colIdx];
		}
	}
};

prototype.getRenderedCell = function(rowIdx, colIdx) {
	if (colIdx != null) {
		var rowNode = this.getRenderedRowByIdx(rowIdx);
		if (rowNode) {
			return rowNode.childNodes[colIdx];
		}
	}
};

prototype.getRenderedCellByIdAndKey = function(id, key) {
	var colIdx = this._colmgr.getIdxByKey(key);
	if (colIdx != null) {
		var rowNode = this.getRenderedRowById(id);
		if (rowNode) {
			return rowNode.childNodes[colIdx];
		}
	}
};

prototype._getClosestCell = function(obj) {
	return Util.closestWithTag(obj, "DIV", this._cellClass, this._canvasEl);
};

prototype._getClosestRow = function(obj) {
	return Util.closestWithTag(obj, "DIV", this._rowClass, this._canvasEl);
};

prototype._getClosestRowIdx = function(obj) {
	return this._datamgr.getIdxByNode(this._getClosestRow(obj));
};

prototype._canvasFind = function(selector) {
	return this._canvas.find(selector);
};

ViewportManager._renderer = function(value, rowIdx, colIdx, datarow, colDef, viewMgr) {
	return value == null ? '' : value;
};

}());
