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

 goog.provide('JGM.core.ViewportManager');

 goog.exportPath('JGM.core.ViewportManager', ViewportManager);

/**
ViewportManager 모듈. 그리드 로우와 셀을 가진 테이블을 담당하는 모듈입니다.
@module ViewportManager

@requires JGM
@requires JGM.Grid
@requires JGM.ColDefManager
@requires JGM.DataManager
@requires JGM.EventManager
@requires JGM.Cell
 */

/**
ViewportManager 클래스. 빠른 로우/셀 렌더링과 로우의 캐싱을 지원합니다.

@class {public ViewportManager} JGM.ViewportManager

@author 조준호
@since 1.0.0
@version 1.3.1
*/

/**
ViewportManager 컨스트럭터 입니다.

@constructor {public ViewportManager} ViewportManager
@param {Object} args - ViewportManager 모듈 파라미터 오브젝트
@... {jQuery} args.container - ViewportManager 를 넣을 컨테이너 오브젝트
@... {JGM.Grid} args.grid - ViewportManager 를 포함하는 {@link JGM.Grid Grid} 인스턴스
@... {Object} args.options - ViewportManager 옵션 오브젝트
@returns {ViewportManager} ViewportManager 모듈 인스턴스를 리턴합니다.

@author 조준호
@since 1.0.0
@version 1.0.0
*/
function ViewportManager(args) {
	/**
	{@link JGM} 이 할당해주는 ViewportManager 모듈 고유 아이디입니다. 읽기 전용.

	@var {public final String} mid

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.mid = args.mid;

	this._ctnr = args.container;
	this.__mask_a__;
	this.__canvas_c__;

	/**
	ViewportManager 를 포함하는 {@link JGM.Grid Grid} 인스턴스.

	@var {public JGM.Grid} grid

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.grid = args.grid;

	/**
	그리드의 로우와 셀의 랜더링 및 뷰포트 관련 이벤트를 관리하는 {@link JGM.ViewportManager ViewportManager} 인스턴스 입니다.

	@var {public JGM.ViewportManager} JGM.Grid.view

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.grid.view = this;

	/**
	ViewportManager 모듈의 기본 옵션 값들을 정의합니다.

	@var {private Object} options

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	var options = {
		/**
		그리드 로우의 인덱스 값을 넣을 인덱스 노드 Attribute 이름. <br>기본값:<code>"r"</code>

		@var {private optional String} JGM.ViewportManager.options.attrRowIdx

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__attrRowIdx_a__:					"r",

		/**
		뷰포트를 스크롤 할 경우 새로 추가해야 되는 로우의 수가 이 값 미만일 경우
		추가하지 않습니다. <br>기본값:<code>3</code>

		@var {private optional int} JGM.ViewportManager.options.appendThreshold

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__appendThreshold_b__:			3,

		/**
		뷰포트를 스크롤 할 경우 새로 추가해야 되는 로우의 수가 이 값 이상일 경우
		새로운 로우들을 붙여넣지 않고 전체 페이지를 다시 렌더링 합니다. <br>기본값:<code>10</code>

		@var {private optional int} JGM.ViewportManager.options.renderThreshold

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__renderThreshold_c__:			10,

		/**
		캔버스를 렌더링 할 경우, 스크롤의 자연스러움을 위해 화면에 보이는 로우들 이외에
		전 후로 이 값의 수 많큼 로우들을 추가적으로 렌더링합니다. <br>기본값:<code>6</code>

		@var {private optional int} JGM.ViewportManager.options.bufferSize

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__bufferSize_d__:					6,

		/**
		뷰포트가 한 스크롤 페이지에 보여줄 데이터 로우들의 수를 정합니다. 뷰포트의
		높이를 계산할 때 사용됩니다. <br>기본값:<code>10</code>

		@var {private optional int} JGM.ViewportManager.options.rowsPerPage

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__rowsPerPage_e__:			10,

		/**
		로우의 높이의 픽셀값 입니다. padding 과 border 를 제외한 그 안의 높이입니다. <br>기본값:<code>20</code>

		@var {private optional int} JGM.ViewportManager.options.rowH

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__rowH_f__:						21,

		/**
		셀 border 의 두께의 픽셀값 입니다. <br>기본값:<code>1</code>

		@var {private optional int} JGM.ViewportManager.options.borderThickness

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__borderThickness_g__: 1,

		/**
		셀 border 의 스타일을 정합니다. <br>기본값:<code>"solid #D0D7E5"</code>

		@var {private optional String} JGM.ViewportManager.options.border

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__border_h__:						"solid #D0D7E5",

		/**
		셀 padding 의 픽셀값 입니다. <br>기본값:<code>1</code>

		@var {private optional int} JGM.ViewportManager.options.padding

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__padding_i__:					1,

		/**
		홀수번째 로우와 짝수번째 로우의 바탕색을 다르게 할 지 정합니다. <br>기본값:<code>false</code>

		@var {private optional Boolean} JGM.ViewportManager.options.evenOddRows

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__evenOddRows_j__:				false,

		/**
		{@link JGM.ViewportManager.options.evenOddRows evenOddRows} 가 true 일 경우,
		홀수번째 로우들에 적용될 바탕색입니다. <br>기본값:<code>"#F4F4F4"</code>

		@var {private optional String} JGM.ViewportManager.options.oddRowsBackground

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__oddRowsBackground_k__:			"#F4F4F4",

		/**
		ViewportManager 컨테이너에 적용되는 CSS style 입니다.<br>
		주의할 점: 이 옵션에 입력된 style 이 적용되었을때 DOM 의 크기가 변하면 그리드의 내부적인 크기 계산에 오류가 생깁니다.
		꼭, 크기에 영향이 없는 style 변경을 할때만 사용하세요.
		<br>기본값:<code>""</code>

		@var {private optional String} JGM.ViewportManager.options.style

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__style_q__: "",

		/**
		그리드 캔바스에 적용되는 CSS style 입니다.<br>
		주의할 점: 이 옵션에 입력된 style 이 적용되었을때 DOM 의 크기가 변하면 그리드의 내부적인 크기 계산에 오류가 생깁니다.
		꼭, 크기에 영향이 없는 style 변경을 할때만 사용하세요.
		<br>기본값:<code>""</code>

		@var {private optional String} JGM.ViewportManager.options.canvasStyle

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__canvasStyle_r__: "",

		/**
		모든 그리드 로우에 공통적으로 적용되는 CSS style 입니다.<br>
		주의할 점: 이 옵션에 입력된 style 이 적용되었을때 DOM 의 크기가 변하면 그리드의 내부적인 크기 계산에 오류가 생깁니다.
		꼭, 크기에 영향이 없는 style 변경을 할때만 사용하세요.
		<br>기본값:<code>""</code>

		@var {private optional String} JGM.ViewportManager.options.rowStyle

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__rowStyle_s__: "",

		/**
		모든 그리드 셀에 공통적으로 적용되는 CSS style 입니다.<br>
		주의할 점: 이 옵션에 입력된 style 이 적용되었을때 DOM 의 크기가 변하면 그리드의 내부적인 크기 계산에 오류가 생깁니다.
		꼭, 크기에 영향이 없는 style 변경을 할때만 사용하세요.
		<br>기본값:<code>""</code>

		@var {private optional String} JGM.ViewportManager.options.cellStyle

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__cellStyle_t__: "",

		/**
		모든 그리드 로우에 공통적으로 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-row"</code>

		@var {private optional String} JGM.ViewportManager.options.classRow

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__classRow_l__:						"jgrid-row",

		/**
		모든 그리드 셀에 공통적으로 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-cell"</code>

		@var {private optional String} JGM.ViewportManager.options.classCell

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__classCell_m__:					"jgrid-cell",

		/**
		그리드 뷰포트에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-viewport"</code>

		@var {private optional String} JGM.ViewportManager.options.classView

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__classView_n__:				"jgrid-viewport",

		/**
		그리드 캔버스에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-canvas"</code>

		@var {private optional String} JGM.ViewportManager.options.classCanvas

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__classCanvas_o__:				"jgrid-canvas",

		/**
		그리드 뷰가 포커스 되었을 경우 보여지는 뷰의 배경 스타일입니다. <br>기본값:<code>"#FFF"</code>

		@var {private optional Object} JGM.ViewportManager.options.focusBackground

		@author 조준호
		@since 1.1.5
		@version 1.1.5
		*/
		__focusBackground_u__:			"#FFF",

		/**
		그리드 뷰가 포커스 되었을 경우 보여지는 아웃라인 스타일입니다. <br>기본값:<code>"2px solid #f1ca7f"</code>

		@var {private optional Object} JGM.ViewportManager.options.focusOutline

		@author 조준호
		@since 1.1.5
		@version 1.1.5
		*/
		__focusOutline_v__: "2px solid #f1ca7f",

		/**
		true 로 설정되있을 경우 view 의 높이가 모든 로우를 포함하도록 자동 변경됩니다. <br>기본값:<code>false</code>

		@var {private optional Boolean} JGM.ViewportManager.options.autoHeight

		@author 조준호
		@since 1.1.7
		@version 1.1.7
		*/
		__autoHeight_w__: false,

		__autoWidth_x__: false
	};

	this._options = JGM.__extend_e__(options, args.options, {
		attrRowIdx:"__attrRowIdx_a__",
		appendThreshold:"__appendThreshold_b__",
		renderThreshold:"__renderThreshold_c__",
		bufferSize:"__bufferSize_d__",
		rowsPerPage:"__rowsPerPage_e__",
		rowH:"__rowH_f__",
		borderThickness:"__borderThickness_g__",
		border:"__border_h__",
		padding:"__padding_i__",
		evenOddRows:"__evenOddRows_j__",
		oddRowsBackground:"__oddRowsBackground_k__",
		classRow:"__classRow_l__",
		classCell:"__classCell_m__",
		classView:"__classView_n__",
		classCanvas:"__classCanvas_o__",
		style:"__style_q__",
		canvasStyle:"__canvasStyle_r__",
		rowStyle:"__rowStyle_s__",
		cellStyle:"__cellStyle_t__",
		focusBackground:"__focusBackground_u__",
		focusOutline:"__focusOutline_v__",
		autoHeight:"__autoHeight_w__",
		autoWidth:"__autoWidth_x__"
	});

	this._vars = {
		drag:			false,
		__lastScrollTop_d__:		0,
		__lastScrollLeft_e__:		0,
		__lastRowLen_l__:			0
	};

	this.__renderedRows_A__ = {};
	this.__lockedRows_B__ = {};

	this.__colLefts_Bd__ = [0];

	this.__init();
}

ViewportManager.getInstance = function(args) {
	return new ViewportManager(args);
};

var prototype = ViewportManager.prototype;

prototype.__init = function() {
	this.__mask_a__ =
		$("<div class='" + this._options.__classView_n__ + "' tabIndex='0' onscroll='JGM.m.ViewportManager." + this.mid + ".__scroll_As__()'>")
		.appendTo(this._ctnr);

	this.__canvas_c__ =
		$("<div class='" + this._options.__classCanvas_o__ + "'>")
		.appendTo(this.__mask_a__);

	// disable text selection in grid cells except in input and textarea
	// elements (this is IE-specific, because selectstart event will
	// only fire in IE)
	this.__mask_a__.bind("selectstart.ui", function (event) {
		return $(event.target).is("input, textarea");
	});
	//JGM.ColHeader.__disableSel_e__(this.__mask_a__);

	this.__setColLefts_Be__();

	this._vars.__lastRowLen_l__ = this.grid.dataMgr.datalist.length;

	this.grid.event.bind({
		canvasFind: this.__canvasFind_AC__,
		onCreateCss: this.__onCreateCss_V__,
		onCreateDynamicCss: this.__onCreateDynamicCss_C__,
		onDestroy: this.__onDestroy_e__,
		keydown: this._keydown,
		keyup: this._keyup,
		keypress: this._keypress,
		mousein: this._mousein,
		mouseout: this._mouseout,
		mouseenter: this._mouseenter,
		mouseleave: this._mouseleave,
		mousemove: this._mousemove,
		mouseover: this._mouseover,
		mousedown: this._mousedown,
		mouseup: this._mouseup,
		click: this._click,
		dblclick: this._dblclick,
		resizeWidth: this.__setWidth_AV__,
		"resizeWidth onResizeCol onResizeCanvasHeight": this.__resizeWidth_AZ__,
		//resizeHeight: this.resizeHeight,
		onAfterRefresh: this.onAfterRefresh,
		onRenderModules: this.__render_w__,
		onReorderCols: this.__onReorderCols_Bf__,
		onResizeCanvasWidth: this.__scroll_As__,
		onUpdateDatarow: this.onUpdateDatarow,
		onUpdateDatalist: this.onUpdateDatalist,
		onRemoveDatarow: this.onRemoveDatarow,
		onRemoveDatalist: this.onRemoveDatalist,
		onIdChange:this.onIdChange,
		onIdListChange:this.onIdListChange,
		unsetDrag:this.unsetDrag		
	}, this);
};

prototype.unsetDrag = function() {
	this._vars.drag = false;
};

prototype.__onDestroy_e__ = function() {
	JGM._destroy(this, {
		name: "ViewportManager",
		path: "view",
		"$": "__canvas_c__ __mask_a__",
		property: "_ctnr",
		map: "_vars __lockedRows_B__ __renderedRows_A__ _options"
	});
};

prototype.__onCreateCss_V__ = function() {
	var gridId = "#" + this.grid.mid + " .",
		o = this._options,
		cellSel = gridId + o.__classCell_m__,
		rowSel = gridId + o.__classRow_l__,
		border = o.__borderThickness_g__ + "px " + o.__border_h__,
		attrRowIdx = rowSel + "[" + o.__attrRowIdx_a__,
		colDefs = this.grid.colDefMgr.get(),
      clen = colDefs.length,
      i = 0,
		rules = [];

	rules.push(gridId + o.__classView_n__ + "{height:" + this.__calHeight_AP__() + "px;outline:0;position:relative;white-space:nowrap;overflow:auto;line-height:" + o.__rowH_f__ + "px;cursor:default;-moz-user-select:none;-webkit-user-select:none;" + o.__style_q__ + "}");
	rules.push(gridId + o.__classView_n__ + ":focus{background:" + o.__focusBackground_u__ + ";outline:" + o.__focusOutline_v__ + "}");
	rules.push(gridId + o.__classCanvas_o__ + "{height:" + this.__calCanvasHeight_AR__() + "px;" + o.__canvasStyle_r__ + ";background:#fff}");
	rules.push(rowSel + "{position:absolute;" + o.__rowStyle_s__ + "}");
	rules.push(cellSel + "{height:" + o.__rowH_f__ + "px;border-bottom:" + border + ";display:inline-block;white-space:nowrap;overflow:hidden;float:left;text-overflow:ellipsis;padding-left:" + o.__padding_i__ + "px;border-right:" + border + ";" + o.__cellStyle_t__ + "}");
	
	if (o.__evenOddRows_j__) {
		rules.push(
			attrRowIdx + "$='1']," +
			attrRowIdx + "$='3']," +
			attrRowIdx + "$='5']," +
			attrRowIdx + "$='7']," +
			attrRowIdx + "$='9']{background:" + o.__oddRowsBackground_k__ + "}");
   }

	for (; i < clen; i++) {
		rules.push(cellSel + ".k_" + colDefs[i].key + "{" + colDefs[i].style + "}");
   }

	return rules.join("");
};

prototype.__onCreateDynamicCss_C__ = function() {
	var cellSel = "#" + this.grid.mid + " ." + this._options.__classCell_m__,
      str = this.__getRowSelector_AH__() + "{width:" + this.__calCanvasWidth_AT__() + "px}",
      colDefs = this.grid.colDefMgr.get(),
      clen = colDefs.length,
      i = 0;
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
		this.__lockedRows_B__[after] = this.__lockedRows_B__[before];
		delete this.__lockedRows_B__[before];
   }
	if (this.isRenderedById(before)) {
		(this.__renderedRows_A__[after] = this.__renderedRows_A__[before]).setAttribute('i', after);
      attrChanged = true;
		delete this.__renderedRows_A__[before];
	}
};

//tested
prototype.onIdListChange = function(datalist, befores, idKey) {
   var len = datalist.length,
      i = 0,
      locked = this.__lockedRows_B__,
      rendered = this.__renderedRows_A__,
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

prototype.__getCellSelector_AG__ = function() {
	return "#" + this.grid.mid + " ." + this._options.__classCell_m__;
};

prototype.__getRowSelector_AH__ = function() {
	return "#" + this.grid.mid + " ." + this._options.__classRow_l__;
};

/**
주어진 인덱스를 가진 셀로 스크롤합니다.

@function {public} scrollTo
@param {int} row - 셀의 로우 인덱스
@param {int} col - 셀의 컬럼 인덱스

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

@function {public int} scrollToRowLazy
@param {int} row - 스크롤 할 로우 인덱스
@return {int} scrollTop - 새로운 scrolltop 값

@author 조준호
@since 1.3.0
@version 1.3.0
*/
prototype.scrollToRowLazy = function(row) {
   var scrollTop = this.getScrollTop();
   if (Util.isNull(row)) {
      return scrollTop;
   }
	if (this.__getLastSafeVisibleRow_n__() < row) {
		return this.scrollToRow(this.__getFirstRowForSafe_o__(row));
   }
	if (this.__getFirstSafeVisibleRow_l__() > row) {
		return this.scrollToRow(row);
   }
   return scrollTop;
};

/**
주어진 컬럼 인덱스로 lazy 하게 스크롤합니다.
이미 화면 내에 있을 경우, 스크롤 하지 않습니다.

@function {public int} scrollToColLazy
@param {int} col - 스크롤 할 컬럼 인덱스
@return {int} scrollLeft - 새로운 scrollLeft 값

@author 조준호
@since 1.3.0
@version 1.3.0
*/
prototype.scrollToColLazy = function(col) {
   var scrollLeft = this.getScrollLeft();
   if (Util.isNull(col)) {
      return scrollLeft;
   }
	if (this.__getLastSafeVisibleCol_s__() < col) {
		return this.setScrollLeft(this.getScrollHForSafe(col));
   }
	else if (this.__getFirstSafeVisibleCol_q__() > col) {
		return this.scrollToCol(col);
   }
   return scrollLeft;
};

/**
주어진 인덱스를 가진 셀로 lazy 하게 스크롤합니다.
이미 화면 내에 있을 경우, 스크롤 하지 않습니다.

@function {public} scrollToLazy
@param {int} row - 셀의 로우 인덱스
@param {int} col - 셀의 컬럼 인덱스

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

@function {public} scrollToRow
@param {int} row - 로우 인덱스

@author 조준호
@since 1.0.0
@version 1.0.0
*/
//tested
prototype.scrollToRow = function(i) {
   if (Util.isNotNull(i)) {
      return this.setScrollTop(this.__getRowOuterHeight_AN__() * i);
   }
   return this.getScrollTop();
};

/**
주어진 인덱스의 컬럼으로 스크롤합니다.

@function {public} scrollToCol
@param {int} col - 컬럼 인덱스

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.scrollToCol = function(i) {
	return this.setScrollLeft(this.getColLeft(i));
};

prototype.__getColInnerWidth_AI__ = function(i) {
	return this.grid.colDefMgr.get(i).width;
};

prototype.__getColInnerWidthByKey_AJ__ = function(i) {
	return this.grid.colDefMgr.getByKey(i).width;
};

/**
주어진 인덱스의 컬럼의 폭 픽셀을 리턴합니다.

@function {public int} getColWidth
@param {int} col - 컬럼 인덱스
@returns {int} 주어진 인덱스의 컬럼의 폭

@author 조준호
@since 1.1.7
@version 1.1.7
*/
prototype.getColWidth = function(i) {
	return this.grid.colDefMgr.get(i).width + this._options.__padding_i__;
};

/**
주어진 키를 가진 컬럼의 폭 픽셀을 리턴합니다.

@function {public int} getColWidthByKey
@param {String} key - 컬럼 키
@returns {int} 주어진 키를 가진 컬럼의 폭

@author 조준호
@since 1.1.7
@version 1.1.7
*/
prototype.getColWidthByKey = function(i) {
	return this.grid.colDefMgr.getByKey(i).width + this._options.__padding_i__;
};

prototype.__getColOuterWidth_AK__ = function(i) {
	return this.grid.colDefMgr.get(i).width + this._options.__padding_i__ + this._options.__borderThickness_g__;
};

prototype.__getColOuterWidthByKey_AL__ = function(i) {
	return this.grid.colDefMgr.getByKey(i).width + this._options.__padding_i__ + this._options.__borderThickness_g__;
};

prototype.__getPadding_AM__ = function() {
	return this._options.__padding_i__;
};

prototype.__colWidthPlus_f__ = function() {
	return this._options.__padding_i__ + this._options.__borderThickness_g__;
};

prototype.__getRowOuterHeight_AN__ = function() {
	return this._options.__rowH_f__ + this._options.__borderThickness_g__;
};

prototype.__getRowInnerHeight_AO__ = function() {
	return this._options.__rowH_f__;
};

prototype.__calHeight_AP__ = function() {
	if (this._options.__autoHeight_w__) {
		return this.__calCanvasHeight_AR__() + (this.grid.width() < this.__calCanvasWidth_AT__() ? this.grid._vars.scrollbarDim.h: 0);
   }
	return this.__getRowOuterHeight_AN__() * this._options.__rowsPerPage_e__;
};

/**
가로 스크롤바가 있을 경우 스크롤바의 높이를 포함한 뷰의 높이 픽셀을 리턴합니다.

@function {public int} getHeight
@returns {int} 뷰의 높이 픽셀

@author 조준호
@since 1.0.0
@version 1.1.7
*/
prototype.getHeight = function() {
	return this.__mask_a__[0].offsetHeight;
};

/**
가로 스크롤바가 있을 경우 스크롤바의 높이를 뺀 뷰의 안쪽 높이 픽셀을 리턴합니다.

@function {public int} getInnerHeight
@returns {int} 뷰의 안쪽 높이 픽셀

@author 조준호
@since 1.0.0
@version 1.1.7
*/
prototype.getInnerHeight = function() {
	return this.__mask_a__[0].clientHeight;
};

prototype.__getWidth_AQ__ = function() {
	return this.__mask_a__[0].offsetWidth;
};

/**
세로 스크롤바가 있을 경우 스크롤바의 폭을 뺀 뷰의 안쪽 폭 픽셀을 리턴합니다.

@function {public int} getInnerWidth
@returns {int} 뷰의 안쪽 폭 픽셀

@author 조준호
@since 1.0.0
@version 1.1.7
*/
prototype.getInnerWidth = function() {
	return this.__mask_a__[0].clientWidth;
};

prototype.__calCanvasHeight_AR__ = function() {
	return this.__getRowOuterHeight_AN__() * this.grid.dataMgr.datalist.length;
};

/**
모든 그리드 로우를 포함하고 있는 캔버스의 가상 높이 픽셀을 리턴합니다.

@function {public int} getCanvasHeight
@returns {int} 캔버스의 높이 픽셀

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.getCanvasHeight = function() {
	return this.__canvas_c__[0].clientHeight;
};

prototype.__setCanvasHeight_AS__ = function(h) {
	h = parseInt(h);
	if (isNaN(h) || h < 1) {
		return;
	}
	var old = this.getCanvasHeight();
	if (h != old) {
		this.__canvas_c__[0].style.height = h + "px";
		/**
		캔바스의 높이가 변했을 경우 트리거되는 이벤트 입니다.

		@event {Event} onResizeCanvasHeight
		@param {int} new - 캔바스의 새로운 높이 픽셀
		@param {int} old - 캔바스의 이전 높이 픽셀

		@author 조준호
		@since 1.1.7
		@version 1.1.7
		*/
		this.grid.event.trigger("onResizeCanvasHeight", [h, old]);
	}
};

prototype.__calCanvasWidth_AT__ = function() {
	return this.__colLefts_Bd__[this.grid.colDefMgr.length()];
};

/**
모든 그리드 컬럼을 포함하고 있는 캔버스의 가상 폭 픽셀을 리턴합니다.

@function {public int} getCanvasWidth
@returns {int} 캔버스의 폭 픽셀

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.getCanvasWidth = function() {
	return this.__canvas_c__[0].clientWidth;
};

prototype.__setCanvasWidth_AU__ = function(w) {
	w = parseInt(w);
	if (isNaN(w) || w < 1) {
		return;
	}
	var old = this.getCanvasWidth();
	if (w != old) {
		this.__canvas_c__[0].style.width = w + "px";

		/**
		캔바스의 폭이 변했을 경우 트리거되는 이벤트 입니다.

		@event {Event} onResizeCanvasWidth
		@param {int} new - 캔바스의 새로운 폭 픽셀
		@param {int} old - 캔바스의 이전 폭 픽셀

		@author 조준호
		@since 1.1.7
		@version 1.1.7
		*/
		this.grid.event.trigger("onResizeCanvasWidth", [w, old]);
	}
};


/**
주어진 인덱스의 컬럼의 <code>left</code> 픽셀 값을 리턴합니다.

@function {public int} getColLeft
@param {int} col - 컬럼 인덱스
@returns {int} 주어진 인덱스의 컬럼의 <code>left</code> 픽셀 값을 리턴합니다.

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.getColLeft = function(i) {
	return this.__colLefts_Bd__[i];
};

prototype.__getColLefts_Bh__ = function() {
	return this.__colLefts_Bd__;
};

prototype.__setColLefts_Be__ = function(from, to) {
	if (Util.isNull(from)) {
		from = 0;
   }

	var colDefs = this.grid.colDefMgr.get(), widthPlus = this.__colWidthPlus_f__();
	if (Util.isNull(to)) {
		to = colDefs.length;
   }

	for (; from < to; from++)  {
		this.__colLefts_Bd__[from + 1] = this.__colLefts_Bd__[from] + colDefs[from].width + widthPlus;
   }
	return this.__colLefts_Bd__;
};

prototype.__onReorderCols_Bf__ = function() {
	this.__setColLefts_Be__();
	this.__rerender_Ba__();
};


/**
주어진 컬럼 키를 가진 컬럼의 폭을 변경합니다.

@function {public} setWidthByKey
@param {String} key - 컬럼 키
@param {int} width - 폭 픽셀

@author 조준호
@since 1.1.7
@version 1.1.7
*/
prototype.setWidthByKey = function(key, w) {
	var colDef = this.grid.colDefMgr.getByKey(key);
	w = Util.bound(w, colDef.minW, colDef.maxW);

	if (w === colDef.width) {
		return;
   }

	var old = colDef.width;
	colDef.width = w;

	this.__setCanvasWidth_AU__(this.__setColLefts_Be__(this.grid.colDefMgr.getIdxByKey(key))[this.grid.colDefMgr.length()]);

	this.grid._recreateDynamicCss();

	/**
	컬럼의 폭이 변했을 경우 트리거되는 이벤트 입니다.

	@event {Event} onResizeCol_COLKEY
	@param {String} key - 컬럼 키
	@param {int} new - 컬럼의 새로운 폭 픽셀
	@param {int} old - 컬럼의 이전 폭 픽셀

	@author 조준호
	@since 1.1.7
	@version 1.1.7
	*/

	/**
	컬럼의 폭이 변했을 경우 트리거되는 이벤트 입니다.

	@event {Event} onResizeCol
	@param {String} key - 컬럼 키
	@param {int} new - 컬럼의 새로운 폭 픽셀
	@param {int} old - 컬럼의 이전 폭 픽셀

	@author 조준호
	@since 1.1.7
	@version 1.1.7
	*/
	this.grid.event.trigger("onResizeCol_" + key + " onResizeCol", [key, w, old]);
};

prototype.__autoColWidth_Bg__ = function(key) {
	var res = this.__canvasFind_AC__(".k_" + key),
      max = Number.MIN_VALUE,
      len = res.length,
      i = 0;
	for (; i < len; i++) {
		if (max < res[i].scrollWidth) {
			max = res[i].scrollWidth;
      }
   }

	max -= this.__getPadding_AM__();
	this.setWidthByKey(key, max);
};

prototype.__setWidth_AV__ = function(w) {
	w = parseInt(w);
	if (isNaN(w) || w < 1) {
		return;
	}
	this.__mask_a__[0].style.width = w + "px";
};

//tested
prototype.getScrollTop = function() {
	return this.__mask_a__[0].scrollTop;
};

prototype.getScrollLeft = function() {
	return this.__mask_a__[0].scrollLeft;
};

//tested
prototype.setScrollTop = function(t) {
   var scrollTop = this.getScrollTop();
   if (Util.isNotNull(t) && scrollTop != t) {
      return (this.__mask_a__[0].scrollTop = t);
   }
   return scrollTop;
};

prototype.setScrollLeft = function(left) {
   var scrollLeft = this.getScrollLeft();
   if (Util.isNotNull(left) && scrollLeft != left) {
      return (this.__mask_a__[0].scrollLeft = left);
   }
   return scrollLeft;
};

prototype.__hasHScrollbar_i__ = function() {
	return this.__mask_a__[0].offsetHeight > this.__mask_a__[0].clientHeight;
};

prototype.__hasVScrollbar_j__ = function() {
	return this.__mask_a__[0].offsetWidth > this.__mask_a__[0].clientWidth;
};

prototype.__heightPlus_AW__ = function() {
	return this.__mask_a__[0].offsetHeight - this.__mask_a__[0].clientHeight;
};

prototype.__widthPlus_AX__ = function() {
	return this.__mask_a__[0].offsetWidth - this.__mask_a__[0].clientWidth;
};

//tested
prototype.__getFirstVisibleRow_k__ = function() {
	return Math.floor(this.getScrollTop() / this.__getRowOuterHeight_AN__());
};

//tester
prototype.__getFirstSafeVisibleRow_l__ = function() {
	return Math.ceil(this.getScrollTop() / this.__getRowOuterHeight_AN__());
};

prototype.__getLastVisibleRow_m__ = function() {
	return Math.ceil((this.getScrollTop() + this.__mask_a__[0].clientHeight) / this.__getRowOuterHeight_AN__()) - 1;
};

prototype.__getLastSafeVisibleRow_n__ = function() {
	return Math.floor((this.getScrollTop() + this.__mask_a__[0].clientHeight) / this.__getRowOuterHeight_AN__()) - 1;
};

prototype.__getFirstRowForSafe_o__ = function(row) {
	return row - Math.floor(this.__mask_a__[0].clientHeight / this.__getRowOuterHeight_AN__()) + 1;
};


prototype.__getFirstVisibleCol_p__ = function() {
	var scrollLeft = this.getScrollLeft(),
		colLefts = this.__colLefts_Bd__,
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

prototype.__getFirstSafeVisibleCol_q__ = function() {
	var scrollLeft = this.getScrollLeft(),
		colLefts = this.__colLefts_Bd__,
		i = 0,
		len = colLefts.length;

	for (; i < len; i++) {
		if (colLefts[i] >= scrollLeft) {
			return i;
      }
	}
	return len - 2;
};

prototype.__getLastVisibleCol_r__ = function() {
	var scrollLeft = this.getScrollLeft() + this.__mask_a__[0].clientWidth,
		colLefts = this.__colLefts_Bd__,
		i = 0,
		len = colLefts.length;

	for (; i < len; i++) {
		if (colLefts[i] >= scrollLeft) {
			return i - 1;
      }
   }
	return len - 2;
};

prototype.__getLastSafeVisibleCol_s__ = function() {
	var scrollLeft = this.getScrollLeft() + this.__mask_a__[0].clientWidth,
		colLefts = this.__colLefts_Bd__,
		i = 0,
		len = colLefts.length;

	for (; i < len; i++) {
		if (colLefts[i] > scrollLeft) {
			return i - 2;
      }
   }
	return len - 2;
};

prototype.__getFirstColForSafe_t__ = function(col) {
	var colLefts = this.__colLefts_Bd__,
		left = colLefts[col + 1] - this.__mask_a__[0].clientWidth,
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
	var colLefts = this.__colLefts_Bd__,
		left = colLefts[col + 1] - this.__mask_a__[0].clientWidth;

	if (colLefts[col] <= left) {
		return colLefts[col];
   }

	return left;
};


prototype.__getRenderRange_u__ = function() {
	if (this._options.__autoHeight_w__) {
		return {start:0, end:this.grid.dataMgr.datalist.length - 1};
   }

	var tmp,
		max = this.grid.dataMgr.datalist.length - 1;

	return {
		start: (((tmp = (this.__getFirstVisibleRow_k__() - this._options.__bufferSize_d__)) < 0) ? 0 : tmp),
		end: (((tmp = (this.__getLastVisibleRow_m__() + this._options.__bufferSize_d__)) > max) ? max : tmp)
	};
};

prototype.__fitHeight_AY__ = function() {
	this.__mask_a__[0].style.height = this.getCanvasHeight() + this.__heightPlus_AW__() + "px";
};

prototype.__resizeWidth_AZ__ = function(e) {
	if (this._options.__autoHeight_w__) {
		this.__fitHeight_AY__();
   }
};

prototype.onAfterRefresh = function(args) {
   if (args !== undefined && args.noRerender === true) {
      return;
   }
   this.__rerender_Ba__();
};

prototype.__rerender_Ba__ = function() {
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

	this.grid.event.trigger("onBeforeRerender");
	this.unlockAllRows();
	this.__removeRows_y__();
	var rowLen = this.grid.dataMgr.datalist.length;
	if (this._vars.__lastRowLen_l__ !== rowLen) {
		this._vars.__lastRowLen_l__ = rowLen;
		this.__setCanvasHeight_AS__(this.__calCanvasHeight_AR__());
	}
	this.__render_w__();

	// resetting scrolls
	this.setScrollTop(st);
	this.setScrollLeft(sl);

	this.grid.event.trigger("onAfterRerender");
};

prototype.__render_w__ = function(range) {
	/*
	if (this.__lockExist_Ad__()) {
		this.__renderShift_x__(range);
	}
	else {
	*/
		this.__removeAndRenderRows_Am__(range);
	//}
};

prototype.__renderShift_x__ = function(range) {
	if (Util.isNull(range)) {
		range = this.__getRenderRange_u__();
	}

	this.__removeRowsExcept_z__(range);
	this.__appendRows_Al__(range);
};

prototype.__removeRows_y__ = function(range) {
	var canvas = this.__canvas_c__[0],
		rendered = this.__renderedRows_A__,
		locked = this.__lockedRows_B__,
		id;

	if (Util.isNull(range)) {
		if (this.__lockExist_Ad__()) {
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
			this.__renderedRows_A__ = {};
			canvas.innerHTML = "";
		}
	}
	else {
		var i = range.start,
			end = range.end,
			dataMgr = this.grid.dataMgr;

		for (; i <= end; i++) {
			if (!locked.hasOwnProperty(id = dataMgr.getIdByIdx(i)) && rendered.hasOwnProperty(id)) {
				canvas.removeChild(rendered[id]);
				delete rendered[id];
			}
		}
	}
};

prototype.__removeRowsExcept_z__ = function(range) {
	var canvas = this.__canvas_c__[0],
		rendered = this.__renderedRows_A__,
		locked = this.__lockedRows_B__,
		id;

	if (Util.isNull(range)) {
		if (this.__lockExist_Ad__()) {
			for (id in rendered) {
				if (rendered.hasOwnProperty(id) && locked.hasOwnProperty(id) === false) {
					canvas.removeChild(rendered[id]);
					delete rendered[id];
				}
			}
		}
		else {
			this.__renderedRows_A__ = {};
			canvas.innerHTML = "";
		}
	}
	else {
		var start = range.start,
			end = range.end,
			dataMgr = this.grid.dataMgr,
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
	return this.destroyRowById(this.grid.dataMgr.getId(datarow));
};

prototype.destroyRowById = function(id) {
	if (Util.isNotNull(id)) {
		this.unlockRowById(id);
		if (this.__renderedRows_A__.hasOwnProperty(id)) {
			this.__canvas_c__[0].removeChild(this.__renderedRows_A__[id]);
			delete this.__renderedRows_A__[id];
		}
	}
};

prototype.destroyRowByIdx = function(i) {
	return this.destroyRowById(this.grid.dataMgr.getIdByIdx(i));
};

prototype.__lockExist_Ad__ = function() {
	return Util.isNotEmptyObj(this.__lockedRows_B__);
};

// isRowLocked
// tested

/**
  주어진 아이디에 해당하는 데이터 로우의 DOMElement 가
  현재 lock 되어 있는지 여부를 리턴합니다.
  lock 되어 있을 경우 스크롤이 되어도, DOM Tree 에서 제거 되지 않습니다.

  @function {public boolean} isRowLockedById
  @param {string} id - 데이터 로우의 아이디
  @return {boolean} 로우가 lock 되어 있는 여부

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.isRowLockedById = function(id) {
	if (Util.isNotNull(id)) {
		return this.__lockedRows_B__.hasOwnProperty(id);
	}
	return false;
};

/**
  주어진 데이터 로우의 DOMElement 가
  현재 lock 되어 있는지 여부를 리턴합니다.
  lock 되어 있을 경우 스크롤이 되어도, DOM Tree 에서 제거 되지 않습니다.

  @function {public boolean} isRowLocked
  @param {object} datarow - 데이터 로우
  @return {boolean} 로우가 lock 되어 있는 여부

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.isRowLocked = function(datarow) {
	return this.isRowLockedById(this.grid.dataMgr.getId(datarow));
};

/**
  주어진 로우 인덱스의 DOMElement 가
  현재 lock 되어 있는지 여부를 리턴합니다.
  lock 되어 있을 경우 스크롤이 되어도, DOM Tree 에서 제거 되지 않습니다.

  @function {public boolean} isRowLockedByIdx
  @param {int} rowIdx - 로우 인덱스
  @return {boolean} 로우가 lock 되어 있는 여부

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.isRowLockedByIdx = function(i) {
	return this.isRowLockedById(this.grid.dataMgr.getIdByIdx(i));
};

// lockRow
// tested
/**
  주어진 아이디에 해당하는 데이터 로우의 DOMElement 를 lock 합니다.
  lock 되어 있을 경우 스크롤이 되어도, DOM Tree 에서 제거 되지 않습니다.

  @function {public} lockRowById
  @param {string} id - 데이터 로우의 아이디

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.lockRowById = function(id) {
	if (Util.isNotNull(id) && this.grid.dataMgr.hasById(id)) {
		this.__lockedRows_B__[id] = true;
	}
};

/**
  주어진 데이터 로우의 DOMElement 를 lock 합니다.
  lock 되어 있을 경우 스크롤이 되어도, DOM Tree 에서 제거 되지 않습니다.

  @function {public} lockRow
  @param {object} datarow - 데이터 로우

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.lockRow = function(datarow) {
	return this.lockRowById(this.grid.dataMgr.getId(datarow));
};

/**
  주어진 로우 인덱스의 DOMElement 를 lock 합니다.
  lock 되어 있을 경우 스크롤이 되어도, DOM Tree 에서 제거 되지 않습니다.

  @function {public} lockRowByIdx
  @param {int} rowIdx - 로우 인덱스

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.lockRowByIdx = function(i) {
	return this.lockRowById(this.grid.dataMgr.getIdByIdx(i));
};

//unlockRow
//tested
/**
  주어진 아이디에 해당하는 데이터 로우의 DOMElement 를 unlock 합니다.
  lock 되어 있을 경우 스크롤이 되어도, DOM Tree 에서 제거 되지 않습니다.

  @function {public} unlockRowById
  @param {string} id - 데이터 로우의 아이디

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.unlockRowById = function(id) {
	if (this.isRowLockedById(id)) {
		delete this.__lockedRows_B__[id];
	}
};

/**
  주어진 데이터 로우의 DOMElement 를 unlock 합니다.
  lock 되어 있을 경우 스크롤이 되어도, DOM Tree 에서 제거 되지 않습니다.

  @function {public} unlockRow
  @param {object} datarow - 데이터 로우

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.unlockRow = function(datarow) {
	return this.unlockRowById(this.grid.dataMgr.getId(datarow));
};

/**
  주어진 로우 인덱스의 DOMElement 를 unlock 합니다.
  lock 되어 있을 경우 스크롤이 되어도, DOM Tree 에서 제거 되지 않습니다.

  @function {public} unlockRowByIdx
  @param {int} rowIdx - 로우 인덱스

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.unlockRowByIdx = function(i) {
	return this.unlockRowById(this.grid.dataMgr.getIdByIdx(i));
};

//unlockAllRows
/**
  모든 로우의 DOM Element 를 unlock 합니다.

  @function {public} unlockAllRows

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.unlockAllRows = function() {
	this.__lockedRows_B__ = {};
};

/**
  주어진 아이디에 해당하는 데이터 로우의 DOMElement 다시 랜더링 합니다.

  @function {public} rerenderRowById
  @param {string} id - 데이터 로우의 아이디

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.rerenderRowById = function(id) {
	// check if valid id
	if (!this.grid.dataMgr.containsById(id)) {
		return;
	}

	var rmap = this.__renderedRows_A__,
		canvas = this.__canvas_c__[0],
		datam = this.grid.dataMgr,
		i = datam.getIdxById(id),
		datarow = datam.getById(id),
		colDefs = this.grid.colDefMgr.get(),
		colCommon = this.__getColCellClasses_An__(colDefs),
		rowH = this.__getRowOuterHeight_AN__(),
		html = [],
		newNodes;

	// remove from map
	if (rmap.hasOwnProperty(id)) {
		canvas.removeChild(rmap[id]);

		// fire event to notify onBeforeRenderRows
		this.grid.event.trigger("onBeforeRenderRows", [[i]]);

		// render and append to canvas
		this.__renderRow_Ap__(html, i, datarow, colDefs, colCommon, rowH);
		rmap[id] = Util.appendHTML(canvas, html.join(""))[0];

		// fire event to notify rendere completion
		this.grid.event.trigger("onAppendRows", [[i]]);
	}

};

/**
  주어진 데이터 로우의 DOMElement 다시 랜더링 합니다.

  @function {public} rerenderRow
  @param {object} datarow - 데이터 로우

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.rerenderRow = function(datarow) {
	return this.rerenderRowById(this.grid.dataMgr.getId(datarow));
};

/**
  주어진 로우 인덱스의 DOMElement 다시 랜더링 합니다.

  @function {public} rerenderRowByIdx
  @param {int} rowIdx - 로우 인덱스

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.rerenderRowByIdx = function(i) {
	return this.rerenderRowById(this.grid.dataMgr.getIdByIdx(i));
};


/**
  주어진 데이터 로우 아이디에 해당하는 데이터 로우와
  컬럼 키에 해당하는 셀의 DOM Element 를 다시 랜더링합니다.

  @function {public} rerenderCellByIdAndKey
  @param {string} id - 데이터 로우 아이디
  @param {string} key - 컬럼 키

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.rerenderCellByIdAndKey = function(id, key) {
	var cellnode = this.getCellByIdAndKey(id, key);
	if (cellnode !== undefined) {
		var datam = this.grid.dataMgr,
			colm = this.grid.colDefMgr,
			datarow = datam.getById(id),
			colDef = colm.getByKey(key),
			row = datam.getIdxById(id),
			col = colm.getIdxByKey(key);

		cellnode.innerHTML = this.__renderCell_Aq__([], row, col, datarow, colDef).join("");
	}
};

/**
  주어진 로우 인덱스와 컬럼 인덱스에 해당하는 셀의 DOM Element 를 다시 랜더링합니다.

  @function {public} rerenderCellByIdx
  @param {int} row - 로우 인덱스
  @param {int} col - 컬럼 인덱스

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.rerenderCellByIdx = function(row, col) {
	return this.rerenderCellByIdAndKey(this.grid.dataMgr.getIdByIdx(row), this.grid.colDefMgr.getKeyByIdx(col));
};

prototype.__appendRows_Al__ = function(range) {
	this.grid.event.trigger("onBeforeRenderRows", [range]);
	var html = [],
		i = range.start,
		end = range.end,
		datalist = this.grid.dataMgr.datalist,
		idKey = this.grid.dataMgr.idKey,
		colDefs = this.grid.colDefMgr.get(),
		collen = colDefs.length,
		colCommon = this.__getColCellClasses_An__(colDefs),
		rendered = this.__renderedRows_A__,
		rowH = this.__getRowOuterHeight_AN__(),
		canvas = this.__canvas_c__[0],
		datarow,
		id,
		added = [],
		node,
		newNodes,
		len;

	for (; i <= end; i++) {
		datarow = datalist[i];
		if (rendered.hasOwnProperty(id = datarow[idKey])) {
			continue;
		}
		this.__renderRow_Ap__(html, i, datarow, colDefs, colCommon, rowH);
		added.push(id);
	}	

	newNodes = Util.appendHTML(canvas, html.join(""));

	for (i = 0, len = added.length; i < len; i++) {
		rendered[added[i]] = newNodes[i];
	}

	this.grid.event.trigger("onAppendRows", [range]);
};

prototype.__removeAndRenderRows_Am__ = function(range) {
	if (Util.isNull(range)) {
		range = this.__getRenderRange_u__();
	}
	this.grid.event.trigger("onBeforeRenderRows", [range]);

	var html = [],
		i = range.start,
		end = range.end,
		dataMgr = this.grid.dataMgr,
		datalist = dataMgr.datalist,
		idKey = dataMgr.idKey,
		colDefs = this.grid.colDefMgr.get(),
		collen = colDefs.length,
		colCommon = this.__getColCellClasses_An__(colDefs),
		canvas = this.__canvas_c__[0],
		rowH = this.__getRowOuterHeight_AN__(),
		datarow,
		added = [],
		newRendered = {},
		len;

	for (; i <= end; i++) {
		datarow = datalist[i];
		this.__renderRow_Ap__(html, i, datarow, colDefs, colCommon, rowH);
		added.push(datarow[idKey]);
	}

	canvas.innerHTML = html.join("");

	for (i = 0, len = added.length; i < len; i++) {
		newRendered[added[i]] = canvas.childNodes[i];
	}

	this.__renderedRows_A__ = newRendered;

	/**
	  그리드가 로우가 새로 렌더링 되었을 때 (로우가 추가되거나, 다시 렌더링 되거나) 발생하는 이벤트 입니다.

	  @event {Event} onAppendRows
	  @param {Object} range - 렌더링 된 로우 범위. 예) range = {start:0, end:10}

	  @author 조준호
	  @since 1.2.0
	  @version 1.2.3
	  */
	this.grid.event.trigger("onAppendRows", [range]);
};

prototype.__getColCellClass_Ao__ = function(colDef) {
	var cssClass = this._options.__classCell_m__ + " " + "k_" + colDef.key;
	if (Util.isNotNull(colDef.colClass)) {
		cssClass += " " + colDef.colClass;
	}

	/**
	  그리드 컬럼 공통 css 클래스를 생성할 때 발생하는 이벤트입니다. 특정 컬럼 셀에 공통적인 css 클래스를 추가하려면 css 클래스 명을 리턴하면 됩니다.
	  예) return "이_컬럼에만_주어질_css_클래스_명";

	  @event {Event} onGetColCellClass
	  @param {Object} colDef - 컬럼 정의 오브젝트
	  @returns {String} 컬럼 셀들에 공통적으로 추가할 css 클래스 명

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */
	cssClass += " " + this.grid.event.trigger("onGetColCellClass", [colDef]).join(" ");
	return cssClass;
};

prototype.__getColCellClasses_An__ = function(colDefs) {
	var cssClasses = [],
		i = 0,
		len = colDefs.length;
	if (Util.isNull(colDefs)) {
		colDefs = this.grid.colDefMgr.get();
	}
	for (; i < len; i++) {
		cssClasses.push(this.__getColCellClass_Ao__(colDefs[i]));
	}
	return cssClasses;
};

prototype.__renderRow_Ap__ = function(html, rowIdx, datarow, colDefs, colCommon, rowH) {
	html.push("<div class='" + this._options.__classRow_l__ +
			"' i='" + datarow[this.grid.dataMgr.idKey] +
			"' " + this._options.__attrRowIdx_a__ + "='" + rowIdx +
			"' style='top:" + (rowH * rowIdx) + "px'>");
	var i = 0,
		collen = colDefs.length;
	for (; i < collen; i++) {

		/**
		  그리드 셀의 css 클래스를 생성할 때 발생하는 이벤트입니다. 특정 셀에 css 클래스를 추가하려면 css 클래스 명을 리턴하면 됩니다.
		  예) return "이_셀에만_주어질_css_클래스_명";

		  @event {Event} onGetCellClass
		  @param {int} rowIdx - 셀의 로우 인덱스
		  @param {int} colIdx - 셀의 컬럼 인덱스
		  @param {Object} datarow - 셀의 로우 데이터
		  @param {Object} colDef - 셀의 컬럼 정의 오브젝트
		  @returns {String} 셀에 추가할 css 클래스 명

		  @author 조준호
		  @since 1.1.7
		  @version 1.1.7
		  */
		html.push("<div class='" + colCommon[i] + " " +
				this.grid.event.trigger("onGetCellClass", [rowIdx, i, datarow, colDefs[i]]).join(" ") + "'>");
		this.__renderCell_Aq__(html, rowIdx, i, datarow, colDefs[i]);
		html.push("</div>");
	}
	html.push("</div>");
	return html;
};

prototype.__renderCell_Aq__ = function(html, rowIdx, colIdx, datarow, colDef) {
	/**
	  그리드 셀 안에 prepend 할 html 을 생성할 때 발생하는 이벤트입니다. prepend 할 내용이 있으면 html 에 push 해주면 됩니다.
	  예) html.push("prepend 할 내용");

	  @event {Event} onRenderCell_COLKEY_prepend
	  @param {int} rowIdx - 셀의 로우 인덱스
	  @param {int} colIdx - 셀의 컬럼 인덱스
	  @param {Object} datarow - 셀의 로우 데이터
	  @param {Object} colDef - 셀의 컬럼 정의 오브젝트
	  @param {String[]} html - 셀에 append 할 html 을 넣을 어레이

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */
	this.grid.event.trigger("onRenderCell_" + colDef.key + "_prepend", [rowIdx, colIdx, datarow, colDef, html]);

	var val = datarow[colDef.key];
	if (typeof val !== "string" || val.substring(0, 3) !== "J@H") {
		if (colDef.rendererInput) {
			html.push(colDef.renderer(JGM.create("Cell", {grid:this.grid, row:rowIdx, col:colIdx, datarow:datarow, colDef:colDef})));
		}
		else {
			html.push(colDef.renderer(val, rowIdx, colIdx, datarow, colDef, this));
		}
	}

	/**
	  그리드 셀 안에 append 할 html 을 생성할 때 발생하는 이벤트입니다. append 할 내용이 있으면 html 에 push 해주면 됩니다.
	  예) html.push("append 할 내용");

	  @event {Event} onRenderCell_COLKEY_append
	  @param {int} rowIdx - 셀의 로우 인덱스
	  @param {int} colIdx - 셀의 컬럼 인덱스
	  @param {Object} datarow - 셀의 로우 데이터
	  @param {Object} colDef - 셀의 컬럼 정의 오브젝트
	  @param {String[]} html - 셀에 append 할 html 을 넣을 어레이

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */
	this.grid.event.trigger("onRenderCell_" + colDef.key + "_append", [rowIdx, colIdx, datarow, colDef, html]);

	return html;
};

/**
  셀 노드를 다시 렌더링 합니다.

  @function {public} rerender

  @author 조준호
  @since 1.0.0
  @version 1.3.0
  */
JGM.Cell.prototype.rerender = function() {
	return this.grid.view.rerenderCellByIdAndKey(this.getId(), this.getKey());
};

/**
  셀로 뷰를 스크롤 합니다.

  @function {public} scrollTo

  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
JGM.Cell.prototype.scrollTo = function() {
	this.grid.view.scrollTo(this.getRowIdx(), this.getColIdx());
};

prototype._keydown = function(e) {
	if (!Util.contains(this.__mask_a__[0], document.activeElement, this._ctnr[0])) {
		return;
	}

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
	this.grid.event.trigger("keydownCanvas_" + e.which + " keydownCanvas", [e]);
};

prototype._keyup = function(e) {
	if (!Util.contains(this.__mask_a__[0], document.activeElement, this._ctnr[0])) {
		return;
	}

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
	this.grid.event.trigger("keyupCanvas_" + e.which + " keyupCanvas", [e]);
};

prototype._keypress = function(e) {
	if (!Util.contains(this.__mask_a__[0], document.activeElement, this._ctnr[0])) {
		return;
	}

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
	this.grid.event.trigger("keypressCanvas_" + e.which + " keypressCanvas", [e]);
};

prototype._mousein = function(e) {
	/**
	  ViewportManager 에서 마우스 버튼을 누른 상태에서 ViewportManager 에 mousein 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 예를 들면, 컬럼 키가 id 일 경우 draginCanvas_id 의 이벤트가 발생합니다.
	  @event {Event} draginCanvas_COLKEY
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {JGM.Cell} cell - 마우스 이벤트에 관련된 {@link JGM.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에서 마우스 버튼을 누른 상태에서 ViewportManager 에 mousein 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} draginCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {JGM.Cell} cell - 마우스 이벤트에 관련된 {@link JGM.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에 mousein 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 예를 들면, 컬럼 키가 id 일 경우 mouseinCanvas_id 의 이벤트가 발생합니다.
	  @event {Event} mouseinCanvas_COLKEY
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {JGM.Cell} cell - 마우스 이벤트에 관련된 {@link JGM.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에 mousein 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} mouseinCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {JGM.Cell} cell - 마우스 이벤트에 관련된 {@link JGM.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */
	if (this._vars.drag) {
		this.__triggerMouseEvent_Ar__(e, {event:"draginCanvas mouseinCanvas"});
	}
	else {
		this.__triggerMouseEvent_Ar__(e, {event:"mouseinCanvas"});
	}
};

prototype._mouseout = function(e) {
	/**
	  ViewportManager 에서 마우스 버튼을 누른 상태에서 ViewportManager 에 mouseout 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 예를 들면, 컬럼 키가 id 일 경우 dragoutCanvas_id 의 이벤트가 발생합니다.
	  @event {Event} dragoutCanvas_COLKEY
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {JGM.Cell} cell - 마우스 이벤트에 관련된 {@link JGM.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에서 마우스 버튼을 누른 상태에서 ViewportManager 에 mouseout 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} dragoutCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {JGM.Cell} cell - 마우스 이벤트에 관련된 {@link JGM.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에 mouseout 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 예를 들면, 컬럼 키가 id 일 경우 mouseoutCanvas_id 의 이벤트가 발생합니다.
	  @event {Event} mouseoutCanvas_COLKEY
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {JGM.Cell} cell - 마우스 이벤트에 관련된 {@link JGM.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.0.0
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에 mouseout 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} mouseoutCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {JGM.Cell} cell - 마우스 이벤트에 관련된 {@link JGM.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	if (this._vars.drag) {
		this.__triggerMouseEvent_Ar__(e, {event:"dragoutCanvas mouseoutCanvas"});
	}
	else {
		this.__triggerMouseEvent_Ar__(e, {event:"mouseoutCanvas"});
	}
};

prototype._mouseenter = function(e) {
	/**
	  ViewportManager 에서 마우스 버튼을 누른 상태에서 ViewportManager 에 mouseenter 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 예를 들면, 컬럼 키가 id 일 경우 dragenterCanvas_id 의 이벤트가 발생합니다.
	  @event {Event} dragenterCanvas_COLKEY
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {JGM.Cell} cell - 마우스 이벤트에 관련된 {@link JGM.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에서 마우스 버튼을 누른 상태에서 ViewportManager 에 mouseenter 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} dragenterCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {JGM.Cell} cell - 마우스 이벤트에 관련된 {@link JGM.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에 mouseenter 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 예를 들면, 컬럼 키가 id 일 경우 mouseenterCanvas_id 의 이벤트가 발생합니다.
	  @event {Event} mouseenterCanvas_COLKEY
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {JGM.Cell} cell - 마우스 이벤트에 관련된 {@link JGM.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에 mouseenter 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} mouseenterCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {JGM.Cell} cell - 마우스 이벤트에 관련된 {@link JGM.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */
	if (this._vars.drag) {
		this.__triggerMouseEvent_Ar__(e, {event:"dragenterCanvas mouseenterCanvas"});
	}
	else {
		this.__triggerMouseEvent_Ar__(e, {event:"mouseenterCanvas"});
	}
};

prototype._mouseleave = function(e) {
	/**
	  ViewportManager 에서 마우스 버튼을 누른 상태에서 ViewportManager 에 mouseleave 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 예를 들면, 컬럼 키가 id 일 경우 dragleaveCanvas_id 의 이벤트가 발생합니다.
	  @event {Event} dragleaveCanvas_COLKEY
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {JGM.Cell} cell - 마우스 이벤트에 관련된 {@link JGM.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에서 마우스 버튼을 누른 상태에서 ViewportManager 에 mouseleave 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} dragleaveCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {JGM.Cell} cell - 마우스 이벤트에 관련된 {@link JGM.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에 mouseleave 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 예를 들면, 컬럼 키가 id 일 경우 mouseleaveCanvas_id 의 이벤트가 발생합니다.
	  @event {Event} mouseleaveCanvas_COLKEY
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {JGM.Cell} cell - 마우스 이벤트에 관련된 {@link JGM.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에 mouseleave 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} mouseleaveCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {JGM.Cell} cell - 마우스 이벤트에 관련된 {@link JGM.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */
	if (this._vars.drag) {
		this.__triggerMouseEvent_Ar__(e, {event:"dragleaveCanvas mouseleaveCanvas"});
	}
	else {
		this.__triggerMouseEvent_Ar__(e, {event:"mouseleaveCanvas"});
	}
};

prototype._mousemove = function(e) {
	/**
	  ViewportManager 에서 마우스 버튼을 누른 상태에서 ViewportManager 에 mousemove 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 예를 들면, 컬럼 키가 id 일 경우 dragmoveCanvas_id 의 이벤트가 발생합니다.
	  @event {Event} dragmoveCanvas_COLKEY
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {JGM.Cell} cell - 마우스 이벤트에 관련된 {@link JGM.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에서 마우스 버튼을 누른 상태에서 ViewportManager 에 mousemove 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} dragmoveCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {JGM.Cell} cell - 마우스 이벤트에 관련된 {@link JGM.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에 mousemove 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 예를 들면, 컬럼 키가 id 일 경우 mousemoveCanvas_id 의 이벤트가 발생합니다.
	  @event {Event} mousemoveCanvas_COLKEY
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {JGM.Cell} cell - 마우스 이벤트에 관련된 {@link JGM.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.0.0
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에 mousemove 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} mousemoveCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {JGM.Cell} cell - 마우스 이벤트에 관련된 {@link JGM.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	if (this._vars.drag) {
		this.__triggerMouseEvent_Ar__(e, {event:"dragmoveCanvas mousemoveCanvas"});
	}
	else {
		this.__triggerMouseEvent_Ar__(e, {event:"mousemoveCanvas"});
	}
};

prototype._mouseover = function(e) {
	/**
	  ViewportManager 에서 마우스 버튼을 누른 상태에서 ViewportManager 에 mouseover 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 예를 들면, 컬럼 키가 id 일 경우 dragoverCanvas_id 의 이벤트가 발생합니다.
	  @event {Event} dragoverCanvas_COLKEY
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {JGM.Cell} cell - 마우스 이벤트에 관련된 {@link JGM.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에서 마우스 버튼을 누른 상태에서 ViewportManager 에 mouseover 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} dragoverCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {JGM.Cell} cell - 마우스 이벤트에 관련된 {@link JGM.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에 mouseover 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 예를 들면, 컬럼 키가 id 일 경우 mouseoverCanvas_id 의 이벤트가 발생합니다.
	  @event {Event} mouseoverCanvas_COLKEY
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {JGM.Cell} cell - 마우스 이벤트에 관련된 {@link JGM.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.0.0
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에 mouseover 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} mouseoverCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {JGM.Cell} cell - 마우스 이벤트에 관련된 {@link JGM.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	if (this._vars.drag) {
		this.__triggerMouseEvent_Ar__(e, {event:"dragoverCanvas mouseoverCanvas"});
	}
	else {
		this.__triggerMouseEvent_Ar__(e, {event:"mouseoverCanvas"});
	}
};

prototype._mousedown = function(e) {
	/**
	  ViewportManager 에 mousedown 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 예를 들면, 컬럼 키가 id 일 경우 mousedownCanvas_id 의 이벤트가 발생합니다.
	  @event {Event} mousedownCanvas_COLKEY
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {JGM.Cell} cell - 마우스 이벤트에 관련된 {@link JGM.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.0.0
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에 mousedown 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} mousedownCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {JGM.Cell} cell - 마우스 이벤트에 관련된 {@link JGM.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	if (this.__triggerMouseEvent_Ar__(e, {event:"mousedownCanvas"})) {
		this._vars.drag = true;
		this.focus(e);
	}
};

prototype._mouseup = function(e) {
	/**
	  ViewportManager 에 mouseup 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 예를 들면, 컬럼 키가 id 일 경우 mouseupCanvas_id 의 이벤트가 발생합니다.
	  @event {Event} mouseupCanvas_COLKEY
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {JGM.Cell} cell - 마우스 이벤트에 관련된 {@link JGM.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.0.0
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에 mouseup 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} mouseupCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {JGM.Cell} cell - 마우스 이벤트에 관련된 {@link JGM.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	this._vars.drag = false;
	if (this.__triggerMouseEvent_Ar__(e, {event:"mouseupCanvas"})) {
		this.focus(e);
	}
};

prototype._click = function(e) {
	/**
	  ViewportManager 에 click 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 예를 들면, 컬럼 키가 id 일 경우 clickCanvas_id 의 이벤트가 발생합니다.
	  @event {Event} clickCanvas_COLKEY
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {JGM.Cell} cell - 마우스 이벤트에 관련된 {@link JGM.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.0.0
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에 click 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} clickCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {JGM.Cell} cell - 마우스 이벤트에 관련된 {@link JGM.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	this.__triggerMouseEvent_Ar__(e, {event:"clickCanvas"});
};

prototype._dblclick = function(e) {
	/**
	  ViewportManager 에 dblclick 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 예를 들면, 컬럼 키가 id 일 경우 dblclickCanvas_id 의 이벤트가 발생합니다.
	  @event {Event} dblclickCanvas_COLKEY
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {JGM.Cell} cell - 마우스 이벤트에 관련된 {@link JGM.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.0.0
	  @version 1.1.7
	  */

	/**
	  ViewportManager 에 dblclick 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} dblclickCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @param {JGM.Cell} cell - 마우스 이벤트에 관련된 {@link JGM.Cell Cell} 오브젝트

	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	this.__triggerMouseEvent_Ar__(e, {event:"dblclickCanvas"});
};

prototype.__triggerMouseEvent_Ar__ = function(e, args) {
	var node = this.__getClosestCell_Az__(e.target),
		arr,
		earr,
		i,
		len;

	if (node === undefined) {
		return false;
	}

	args.cell = JGM.create("Cell", {grid:this.grid, node:node});

	arr = Util.split(args.event);
	len = arr.length;
	earr = [];
	for (i = 0; i < len; i++) {
		earr.push(arr[i] + "_" + args.cell.getKey());
		earr.push(arr[i]);
	}

	this.grid.event.trigger(earr.join(" "), [e, args.cell]);

	return true;
};

prototype.__scroll_As__ = function() {
	var scrollTop = this.getScrollTop(),
		scrollVDist = scrollTop - this._vars.__lastScrollTop_d__,
		scrollLeft = this.getScrollLeft(),
		scrollHDist = scrollLeft - this._vars.__lastScrollLeft_e__;

	if (scrollVDist === 0 && scrollHDist === 0) {
		return;
	}

	/**
	  그리드 뷰가 스크롤 되었을 때 발생하는 이벤트 입니다.

	  @event {Event} onScrollViewport

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */
	this.grid.event.trigger("onScrollViewport");

	if (scrollHDist !== 0) {
		this._vars.__lastScrollLeft_e__ = scrollLeft;

		/**
		  그리드 뷰가 가로 스크롤 되었을 때 발생하는 이벤트 입니다.

		  @event {Event} onScrollViewportH

		  @author 조준호
		  @since 1.1.7
		  @version 1.1.7
		  */
		this.grid.event.trigger("onScrollViewportH", [scrollLeft]);
	}

	var numDiff = Math.abs(scrollVDist / this.__getRowOuterHeight_AN__());

	if (numDiff < this._options.__appendThreshold_b__) {
		return;
	}

	this._vars.__lastScrollTop_d__ = scrollTop;
	//if (numDiff >= this._options.__renderThreshold_c__) {
	this.__render_w__();
	/*
	   }
	   else {
	   this.__renderShift_x__();
	   }
	   */

	/**
	  그리드 뷰가 세로 스크롤 되었을 때 발생하는 이벤트 입니다.

	  @event {Event} onScrollViewportV

	  @author 조준호
	  @since 1.1.7
	  @version 1.1.7
	  */
	this.grid.event.trigger("onScrollViewportV");
};

prototype.focus = function(e) {
	/**
	  그리드 캔바스의 DOM Elemenet 가 포커스 되기 전에 발생하는 이벤트 입니다. false 를 리턴하면 캔바스의 포커스가 취소됩니다.

	  @event {Event} onBeforeFocusCanvas
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @returns {Boolean} continueOrStop - false 를 리턴할 경우 그리드 캔바스를 포커스하지 않습니다.

	  @author 조준호
	  @since 1.2.1
	  @version 1.2.1
	  */
	if (Util.isNotNull(e) && this.grid.event.triggerInvalid("onBeforeFocusCanvas", [e])) {
		return;
	}

	//var scr = Util.getBodyScroll();

	if (this.__mask_a__[0] !== document.activeElement) {
		if (Util.isFunction(this.__mask_a__[0].setActive)) {
			try {
				this.__mask_a__[0].setActive();
			}
			catch (exp) {}
		}
		this.__mask_a__[0].focus();
		if (document.activeElement !== this.__mask_a__[0]) {
			this.__mask_a__.focus();
		}
	}

	//Util.setBodyScroll(scr[0], scr[1]);
};

//isRendered
//tested
/**
  주어진 아이디에 해당하는 데이터 로우의 DOMElement 가
  현재 랜더링되어 있는지 여부를 리턴합니다.

  @function {public boolean} isRenderedById
  @param {string} id - 데이터 로우의 아이디
  @return {boolean} 로우가 랜더링되어 있는 여부

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.isRenderedById = function(id) {
	if (Util.isNotNull(id)) {
		return this.__renderedRows_A__.hasOwnProperty(id);
	}
	return false;
};

/**
  주어진 데이터 로우의 DOMElement 가
  현재 랜더링되어 있는지 여부를 리턴합니다.

  @function {public boolean} isRendered
  @param {object} datarow - 데이터 로우
  @return {boolean} 로우가 랜더링되어 있는 여부

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.isRendered = function(datarow) {
	return this.isRenderedById(this.grid.dataMgr.getId(datarow));
};

/**
  주어진 로우 인덱스의 DOMElement 가
  현재 랜더링되어 있는지 여부를 리턴합니다.

  @function {public boolean} isRenderedByIdx
  @param {int} rowIdx - 로우 인덱스
  @return {boolean} 로우가 랜더링되어 있는 여부

  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
prototype.isRenderedByIdx = function(rowIdx) {
	return this.isRenderedById(this.grid.dataMgr.getIdByIdx(rowIdx));
};

//getRow
//tested
prototype.getRowById = function(id) {
	if (this.isRenderedById(id)) {
		return this.__renderedRows_A__[id];
	}
};

prototype.getRow = function(datarow) {
	return this.getRowById(this.grid.dataMgr.getId(datarow));
};

prototype.getRowByIdx = function(i) {
	return this.getRowById(this.grid.dataMgr.getIdByIdx(i));
};

//getRenderedRow
//tested
prototype.getRenderedRowById = function(id) {
	if (this.isRenderedById(id)) {
		return this.__renderedRows_A__[id];
	}
};

prototype.getRenderedRow = function(datarow) {
	return this.getRenderedRowById(this.grid.dataMgr.getId(datarow));
};

prototype.getRenderedRowByIdx = function(i) {
	return this.getRenderedRowById(this.grid.dataMgr.getIdByIdx(i));
};

prototype.getRenderedRows = function() {
	return Util.toArray(this.__renderedRows_A__);
	return Array.prototype.slice.call(this.__canvas_c__[0].childNodes);
};

prototype.getCell = function(rowIdx, colIdx) {
	var rowNode = this.getRowByIdx(rowIdx);
	if (Util.isNotNull(rowNode, colIdx)) {
		return rowNode.childNodes[colIdx];
	}
};

prototype.getCellByIdAndKey = function(id, key) {
	var rowNode = this.getRowById(id),
		colIdx = this.grid.colDefMgr.getIdxByKey(key);
	if (Util.isNotNullAnd(rowNode, colIdx)) {
		return rowNode.childNodes[colIdx];
	}
};

prototype.getRenderedCell = function(rowIdx, colIdx) {
	var rowNode = this.getRenderedRowByIdx(rowIdx);
	if (Util.isNotNull(rowNode)) {
		return rowNode.childNodes[colIdx];
	}
};

prototype.getRenderedCellByIdAndKey = function(id, key) {
	var rowNode = this.getRenderedRowById(id),
		colIdx = this.grid.colDefMgr.getIdxByKey(key);
	if (Util.isNotNullAnd(rowNode, colIdx)) {
		return rowNode.childNodes[colIdx];
	}
};

prototype.__getClosestCell_Az__ = function(obj) {
	return Util.closestWithTag(obj, "DIV", this._options.__classCell_m__, this.__canvas_c__[0]);
};

prototype.__getClosestRow_AA__ = function(obj) {
	return Util.closestWithTag(obj, "DIV", this._options.__classRow_l__, this.__canvas_c__[0]);
};

prototype.__getClosestRowIdx_AB__ = function(obj) {
	return this.grid.dataMgr.getIdxByNode(this.__getClosestRow_AA__(obj));
};

prototype.__canvasFind_AC__ = function(selector) {
	return this.__canvas_c__.find(selector);
};

ViewportManager.__renderer_AD__ = function(value, rowIdx, colIdx, datarow, colDef, viewMgr) {
	return Util.ifNull(value, "");
};

JGM._add("ViewportManager", ViewportManager);
}());
