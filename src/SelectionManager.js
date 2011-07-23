goog.require('array_extension');
goog.require('jx.util');
goog.require('jx.grid');
goog.require('jx.grid.BaseModule');
goog.require('jx.grid.Grid');
goog.require('jx.data.DataManager');
goog.require('jx.grid.Cell');

goog.provide('jx.grid.SelectionManager');

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

 goog.exportSymbol('jx.grid.SelectionManager', SelectionManager);
 JGM._add("SelectionManager", SelectionManager);

/**
SelectionManager 모듈. 셀의 (범위) 선택을 담당하는 모듈입니다.
@module SelectionManager

@requires JGM
@requires JGM.Grid
@requires JGM.ColDefManager
@requires JGM.EventManager
@requires JGM.ViewportManager
@requires JGM.Cell
 */

/**
SelectionManager 클래스. 셀들을 선택하고 선택된 셀들에 대한 이벤트를 트리거링하는
클래스입니다.

@class {SelectionManager} JGM.SelectionManager

@author 조준호
@since 1.0.0
@version 1.2.3
*/

/**
SelectionManager 컨스트럭터 입니다.

@constructor {SelectionManager} SelectionManager
@param {Object} args - SelectionManager 모듈 파라미터 오브젝트
@... {JGM.Grid} args.grid - SelectionManager 를 포함하는 {@link JGM.Grid Grid} 인스턴스
@... {Object} args.options - SelectionManager 옵션 오브젝트
@returns {SelectionManager} SelectionManager 모듈 인스턴스를 리턴합니다.

@author 조준호
@since 1.0.0
@version 1.0.0
*/
function SelectionManager(args) {
	/**
	{@link JGM} 이 할당해주는 SelectionManager 모듈 고유 아이디입니다. 읽기 전용.

	@var {string} mid

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.mid = args.mid;

	/**
	SelectionManager 를 포함하는 {@link JGM.Grid Grid} 인스턴스.

	@var {JGM.Grid} grid

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.grid = args.grid;
	
	/**
	그리드 셀의 선택을 관리하는 {@link JGM.SelectionManager SelectionManager} 인스턴스 입니다.

	@var {JGM.SelectionManager} JGM.Grid.selMgr

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.grid.selMgr = this;

	/**
	SelectionManager 모듈의 기본 옵션 값들을 정의합니다.

	@type {Object} options
	@private

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	var options = {
		/**
		로우 전체를 선택하는데 사용되는 컬럼 key 값입니다. 이 값을 키로 가진
		컬럼을 선택시 로우 전체가 선택됩니다. <br>기본값:<code>DataManager.idKey</code>

		@type {string=} JGM.SelectionManager.options.rowSelKey
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__rowSelKey_a__: this.grid.dataMgr.idKey,

		/**
		현재 선택된 모든 셀들에 적용되는 배경색입니다. <br>기본값:<code>"#DCEBFE"</code>

		@type {string=} JGM.SelectionManager.options.bgColorSelection
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__bgColorSelection_b__: "#DCEBFE", //EAECF5

		/**
		마지막으로 선택된 셀에 적용되는 배경색입니다. <br>기본값:<code>"#C1DBFC"</code>

		@type {string=} JGM.SelectionManager.options.bgColorLast
		@private

		@author 조준호
		@since 1.0.0
         colDefs = this.grid.colDefMgr.get(),
		@version 1.0.0
		*/
		__bgColorLast_c__: "#f1ca7f", //F5C795

		/**
		범위 선택시 범위 끝의 셀에 적용되는 배경색입니다. <br>기본값:<code>"#D9D9D9"</code>

		@type {string=} JGM.SelectionManager.options.bgColorRange
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__bgColorRange_d__: "#D9D9D9", //B8BFC4

		/**
		현재 선택된 모든 셀들에 공통적으로 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-selection"</code>

		@type {string=} JGM.SelectionManager.options.classSelection
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__classSelection_e__: "jgrid-selection",

		/**
		마지막으로 선택된 셀에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"selection-last"</code>

		@type {string=} JGM.SelectionManager.options.classLast
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__classLast_f__: "selection-last",

		/**
		범위 선택시에 범위 끝의 셀에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"selection-range"</code>

		@type {string=} JGM.SelectionManager.options.classRange
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__classRange_g__: "selection-range",

		/**
		범위 선택 가능 여부입니다. <br>기본값:<code>false</code>

		@type {boolean=} JGM.SelectionManager.options.multiSelectEnabled
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__multiSelectEnabled_h__: false,
      classRowSelected: "rowSelected",
      highlightRowEnabled: true,
      bgColorRowSelected: "#d8dfea"
	};

	this._options = JGM.__extend_e__(options, args.options, {
		rowSelKey:"__rowSelKey_a__",
		bgColorSelection:"__bgColorSelection_b__",
		bgColorLast:"__bgColorLast_c__",
		bgColorRange:"__bgColorRange_d__",
		classSelection:"__classSelection_e__",
		classLast:"__classLast_f__",
		classRange:"__classRange_g__",
		multiSelectEnabled:"__multiSelectEnabled_h__"
	});

	this.__consts_a__ = {
		__UP_a__:		1,
		__DOWN_b__:	2,
		__LEFT_c__:	3,
		__RIGHT_d__:	4,
		__PGDN_f__: 5,
		__PGUP_g__: 6,
		__HOME_h__: 7,
		__END_i__: 8,
		__NAVKEYS_e__: {}
	};

	this.__consts_a__.__NAVKEYS_e__ = Util.which(["enter", "tab", "arrow", "pgdn", "pgup", "home", "end"]);

	this.__last_b__;
	this.__range_c__;
	this.__rows_d__ = {length:0};
	this.__cols_e__ = {length:0};
	
	this.__init();
}

SelectionManager.getInstance = function(args) {
	return new SelectionManager(args);
};

var prototype = SelectionManager.prototype;

prototype.__init = function() {
   this.bindEvents();
};

prototype.bindEvents = function() {
	this.grid.event.bind({
		onGetCellClass: this.__onGetCellClass_aI__,
		onCreateCss: this.__onCreateCss_V__,
		onDestroy: this.__destroy_aA__,
		keydownCanvas: this.__keydownCanvas_ba__,
		dragoverCanvas: this.__dragoverCanvas_be__,
		mousedownCanvas: this.__mousedownCanvas_bf__,
		onBeforeRerender: this.__onBeforeRerender_t__,
		onAfterRerender: this.onAfterRerender,
		onBeforeDataChange: this.onBeforeDataChange
	}, this);
};

prototype.__destroy_aA__ = function() {
	JGM.__deleteMap_l__(this.__consts_a__, "__NAVKEYS_e__");
	
   var i,
      rows = this.__rows_d__,
      cols = this.__cols_e__;
	for (i in rows) {
      if (rows.hasOwnProperty(i) && i !== "length") {
         JGM.__deleteMap_l__(rows, i);
      }
   }

	for (i in cols) {
      if (cols.hasOwnProperty(i) && i !== "length") {
			JGM.__deleteMap_l__(cols, i);
      }
   }
	
	JGM._destroy(this, {
		name: "SelectionManager",
		path: "selMgr",
		map: "__rows_d__ __cols_e__ __range_c__ __last_b__ __consts_a__ _options"
	});
};

prototype.__onCreateCss_V__ = function() {
	var rules = this.grid.event.trigger("onBeforeCreateSelCss"),
      gridId = "#" + this.grid.mid + " .",
      opt = this._options;
   if (opt.highlightRowEnabled === true) {
      rules.push(gridId + opt.classRowSelected  + " > *{background:" + opt.bgColorRowSelected + "}");
   }
	if (opt.__multiSelectEnabled_h__ === true) {
		rules.push(gridId + opt.__classSelection_e__ +  "{background:" + opt.__bgColorSelection_b__ + "}");
		rules.push(gridId + opt.__classRange_g__ +  "{background:" + opt.__bgColorRange_d__ + "}");
	}
	rules.push(gridId + opt.__classLast_f__  + "{background:" + opt.__bgColorLast_c__ + "}");
	
	return rules.join("\n");
};

prototype.__onGetCellClass_aI__ = function(row, col, datarow, colDef) {
	var css = "",
      last = this.__last_b__,
      range = this.__range_c__,
      rows = this.__rows_d__,
      opt = this._options;
	if (Util.isNotNull(last) && last.getDatarow() === datarow && last.getColDef() === colDef) {
		css += opt.__classLast_f__;
   }

	if (opt.__multiSelectEnabled_h__ === true) {
		if (Util.isNotNull(range) && range.getDatarow() === datarow && range.getColDef() === colDef) {
			css += " " + opt.__classRange_g__;
      }
		if (rows.hasOwnProperty(row) && rows[row].hasOwnProperty(col)) {
			css += " " + opt.__classSelection_e__;
      }
	}
	return css;
};

prototype.__mousedownCanvas_bf__ = function(e, cell) {
	if (Util.isNotNull(this.__last_b__) && this.__last_b__.equals(cell)) {
		return;
   }
	/**
	캔버스에 mousedown 이벤트가 발생하여 해당 셀을 선택하기 전에 발생되는 이벤트 입니다.
	
	@event {Event} onBeforeSelect
	@param {jQuery.Event} e - jQuery 이벤트 오브젝트
	@param {JGM.Cell} cell - 선택될 셀

	@author 조준호
	@since 1.1.7
	@version 1.1.7
	*/
	this.grid.event.trigger("onBeforeSelect", [e, cell]);

	if (this._options.__multiSelectEnabled_h__ === false) {
		this.selectCell(cell);
   }
	else {
		if (e.shiftKey && Util.isNotNullAnd(this.__last_b__, this.__range_c__)) {
			this.selectRange(cell);
      }
		else if (e.ctrlKey) {
			if (cell.getKey() === this._options.__rowSelKey_a__) {
				this.addRow(cell);
         }
			else {
				this.addCell(cell);
         }
		}
		else {
			this.selectCell(cell);
      }
	}
};

prototype.__dragoverCanvas_be__ = function(e, cell) {
	if (this._options.__multiSelectEnabled_h__ === false) {
		this.selectCell(cell);
   }
	else if (Util.isNotNullAnd(this.__last_b__, this.__range_c__)) {
		this.selectRange(cell);
   }
};

prototype.__keydownCanvas_ba__ = function(e) {
	if (Util.isNullOr(this.__last_b__, this.__range_c__)) {
		if (this.__consts_a__.__NAVKEYS_e__[e.which]) {
			this.selectCell(JGM.create("Cell", {grid:this.grid, row:this.grid.view.__getFirstSafeVisibleRow_l__(), col:this.grid.view.__getFirstSafeVisibleCol_q__()}));
      }
		return;
	}
	if (this.__consts_a__.__NAVKEYS_e__[e.which]) {
		/**
		셀 선택 후 키보드로 셀 네비게이션을 하기 전에 발생되는 이벤트 입니다.
		
		@event {Event} onBeforeNavigate
		@param {jQuery.Event} e - jQuery 이벤트 오브젝트
		@returns {boolean} continueOrStop - false 를 리턴할 경우 네비게이션을 취소합니다.

		@author 조준호
		@since 1.1.7
		@version 1.2.3
		*/
		if (this.grid.event.triggerInvalid("onBeforeNavigate", [e])) {
			return;
      }

		var nextCell;
			
		e.preventDefault();
		switch (e.which) {
			case Util.keyMapKeydown.tab:
				if (e.shiftKey) {
					nextCell = this.__idxToCell_j__(this.__consts_a__.__LEFT_c__, this.__last_b__);
					this.selectCell(nextCell);
            }
				else {
					nextCell = this.__idxToCell_j__(this.__consts_a__.__RIGHT_d__, this.__last_b__);
					this.selectCell(nextCell);
            }
			break;
			case Util.keyMapKeydown.enter:
				if (e.shiftKey) {
					nextCell = this.__idxToCell_j__(this.__consts_a__.__UP_a__, this.__last_b__);
					this.selectCell(nextCell);
            }
				else {
					nextCell = this.__idxToCell_j__(this.__consts_a__.__DOWN_b__, this.__last_b__);
					this.selectCell(nextCell);
            }
			break;
			case Util.keyMapKeydown.up:
				if (this._options.__multiSelectEnabled_h__ && e.shiftKey) {
					nextCell = this.__idxToCell_j__(this.__consts_a__.__UP_a__, this.__range_c__);
					this.selectRange(nextCell);
            }
				else {
					nextCell = this.__idxToCell_j__(this.__consts_a__.__UP_a__, this.__last_b__);
					this.selectCell(nextCell);
            }
			break;
			case Util.keyMapKeydown.down:
				if (this._options.__multiSelectEnabled_h__ && e.shiftKey) {
					nextCell = this.__idxToCell_j__(this.__consts_a__.__DOWN_b__, this.__range_c__);
					this.selectRange(nextCell);
            }
				else {
					nextCell = this.__idxToCell_j__(this.__consts_a__.__DOWN_b__, this.__last_b__);
					this.selectCell(nextCell);
            }
			break;
			case Util.keyMapKeydown.left:
				if (this._options.__multiSelectEnabled_h__ && e.shiftKey) {
					nextCell = this.__idxToCell_j__(this.__consts_a__.__LEFT_c__, this.__range_c__);
					this.selectRange(nextCell);
            }
				else {
					nextCell = this.__idxToCell_j__(this.__consts_a__.__LEFT_c__, this.__last_b__);
					this.selectCell(nextCell);
            }
			break;
			case Util.keyMapKeydown.right:
				if (this._options.__multiSelectEnabled_h__ && e.shiftKey) {
					nextCell = this.__idxToCell_j__(this.__consts_a__.__RIGHT_d__, this.__range_c__);
					this.selectRange(nextCell);
            }
				else {
					nextCell = this.__idxToCell_j__(this.__consts_a__.__RIGHT_d__, this.__last_b__);
					this.selectCell(nextCell);
            }
			break;
			case Util.keyMapKeydown.pgup:
				if (this._options.__multiSelectEnabled_h__ && e.shiftKey) {
					nextCell = this.__idxToCell_j__(this.__consts_a__.__PGUP_g__, this.__range_c__);
					this.selectRange(nextCell);
            }
				else {
					nextCell = this.__idxToCell_j__(this.__consts_a__.__PGUP_g__, this.__last_b__);
					this.selectCell(nextCell);
            }
			break;
			case Util.keyMapKeydown.pgdn:
				if (this._options.__multiSelectEnabled_h__ && e.shiftKey) {
					nextCell = this.__idxToCell_j__(this.__consts_a__.__PGDN_f__, this.__range_c__);
					this.selectRange(nextCell);
            }
				else {
					nextCell = this.__idxToCell_j__(this.__consts_a__.__PGDN_f__, this.__last_b__);
					this.selectCell(nextCell);
            }
			break;
			case Util.keyMapKeydown.space:
				if (e.shiftKey) {
					nextCell = this.__idxToCell_j__(this.__consts_a__.__PGUP_g__, this.__last_b__);
					this.selectCell(nextCell);
            }
				else {
					nextCell = this.__idxToCell_j__(this.__consts_a__.__PGDN_f__, this.__last_b__);
					this.selectCell(nextCell);
            }
			break;
			case Util.keyMapKeydown.home:
				if (this._options.__multiSelectEnabled_h__ && e.shiftKey) {
					nextCell = this.__idxToCell_j__(this.__consts_a__.__HOME_h__, this.__range_c__);
					this.selectRange(nextCell);
            }
				else {
					nextCell = this.__idxToCell_j__(this.__consts_a__.__HOME_h__, this.__last_b__);
					this.selectCell(nextCell);
            }
			break;
			case Util.keyMapKeydown.end:
				if (this._options.__multiSelectEnabled_h__ && e.shiftKey) {
					nextCell = this.__idxToCell_j__(this.__consts_a__.__END_i__, this.__range_c__);
					this.selectRange(nextCell);
            }
				else {
					nextCell = this.__idxToCell_j__(this.__consts_a__.__END_i__, this.__last_b__);
					this.selectCell(nextCell);
            }
			break;
		}

		/**
		셀 선택 후 키보드로 셀 네비게이션을 한 후에 발생되는 이벤트 입니다.
		
		@event {Event} onAfterNavigate
		@param {JGM.Cell} nextCell - 새롭게 이동된 셀 인스턴스

		@author 조준호
		@since 1.3.0
		@version 1.3.0
		*/
		this.grid.event.trigger("onAfterNavigate", [nextCell]);
	}
	else {
		if (this.__cols_e__.length === 1) {
			var key,
            cmgr = this.grid.colDefMgr,
            col,
            cols = this.__cols_e__;
			for (col in cols) {
            if (cols.hasOwnProperty(col) && col !== "length") {
               key = cmgr.get(col).key;
               /**
                 그리드 캔바스가 활성화 되어있고 오직 하나의 컬럼에 하나 이상의 셀이 선택이 된 상태에서 keydown 이벤트가 발생할 경우 트리거 되는 이벤트 입니다.

                 @event {Event} keydownColSel_COLKEY_KEYCODE
                 @param {jQuery.Event} e - jQuery 이벤트 오브젝트
                 @param {Object} colsMap - 컬럼 선택 맵
                 @param {JGM.Cell} cell - 마지막 선택 셀

                 @author 조준호
                 @since 1.1.7
                 @version 1.1.7
                 */

               /**
                 그리드 캔바스가 활성화 되어있고 오직 하나의 컬럼에 하나 이상의 셀이 선택이 된 상태에서 keydown 이벤트가 발생할 경우 트리거 되는 이벤트 입니다.

                 @event {Event} keydownColSel_COLKEY
                 @param {jQuery.Event} e - jQuery 이벤트 오브젝트
                 @param {Object} colsMap - 컬럼 선택 맵
                 @param {JGM.Cell} cell - 마지막 선택 셀

                 @author 조준호
                 @since 1.1.7
                 @version 1.1.7
                 */
               this.grid.event.trigger("keydownColSel_" + key + "_" + e.which + " keydownColSel_" + key, [e, cols[col], this.__last_b__]);
            }
         }
		}
		
		/**
		그리드 캔바스가 활성화 되어있고 오직 하나의 로우에 하나 이상의 셀이 선택이 된 상태에서 keydown 이벤트가 발생할 경우 트리거 되는 이벤트 입니다.
		
		@event {Event} keydownRowSel_KEYCODE
		@param {jQuery.Event} e - jQuery 이벤트 오브젝트
		@param {Object} rowsMap - 로우 선택 맵
		@param {JGM.Cell} cell - 마지막 선택 셀

		@author 조준호
		@since 1.1.7
		@version 1.1.7
		*/
		
		/**
		그리드 캔바스가 활성화 되어있고 오직 하나의 로우에 하나 이상의 셀이 선택이 된 상태에서 keydown 이벤트가 발생할 경우 트리거 되는 이벤트 입니다.
		
		@event {Event} keydownRowSel
		@param {jQuery.Event} e - jQuery 이벤트 오브젝트
		@param {Object} rowsMap - 로우 선택 맵
		@param {JGM.Cell} cell - 마지막 선택 셀

		@author 조준호
		@since 1.1.7
		@version 1.1.7
		*/
		if (this.__rows_d__.length === 1) {
         var row,
            rows = this.__rows_d__;
			for (row in rows) {
            if (rows.hasOwnProperty(row) && row !== "length") {
               this.grid.event.trigger("keydownRowSel_" + e.which + " keydownRowSel", [e, rows[row], this.__last_b__]);
            }
         }
      }
		
		/**
		그리드 캔바스가 활성화 되어있고 하나 이상의 셀이 선택이 된 상태에서 keydown 이벤트가 발생할 경우 트리거 되는 이벤트 입니다.
		
		@event {Event} keydownSel_KEYCODE
		@param {jQuery.Event} e - jQuery 이벤트 오브젝트
		@param {Object} map - 선택 맵
		@param {Object} rowsMap - 로우 별 선택 맵
		@param {Object} colsMap - 컬럼 별 선택 맵

		@author 조준호
		@since 1.1.7
		@version 1.1.7
		*/
		
		/**
		그리드 캔바스가 활성화 되어있고 하나 이상의 셀이 선택이 된 상태에서 keydown 이벤트가 발생할 경우 트리거 되는 이벤트 입니다.
		
		@event {Event} keydownSel
		@param {jQuery.Event} e - jQuery 이벤트 오브젝트
		@param {Object} rowsMap - 로우 별 선택 맵
		@param {Object} colsMap - 컬럼 별 선택 맵

		@author 조준호
		@since 1.1.7
		@version 1.2.3
		*/
		this.grid.event.trigger("keydownSel_" + e.which + " keydownSel", [e, this.__rows_d__, this.__cols_e__]);
	}
};


/**
현재 선택된 셀이 있을경우 선택된 {@link JGM.Cell Cell} 의 인스턴스를 리턴합니다. 없을 경우에는 <code>undefined</code> 를 리턴합니다.

@function {JGM.Cell} getCell
@returns {JGM.Cell} 현재 선택된 셀의 인스턴스

@author 조준호
@since 1.0.0
@version 1.0.0
*/
//tested
prototype.getCell = function() {
	if (Util.isNotNull(this.__last_b__)) {
		return this.__last_b__;
   }
};

//tested
prototype.__isSelected_h__ = function(cell) {
	return Util.isNotNull(this.__last_b__) && this.__last_b__.equals(cell);
};

/**
셀이 {@link JGM.SelectionManager SelectionManager} 에 의해 선택되어 있는 경우 true,
아닌 경우 false 를 리턴합니다.

@function {boolean} JGM.Cell.isSelected
@returns {boolean} 셀이 {@link JGM.SelectionManager SelectionManager} 에 의해 선택되어 있는 경우 true,
아닌 경우 false 를 리턴합니다.

@author 조준호
@since 1.0.0
@version 1.0.0
*/
//tested
JGM.Cell.prototype.isSelected = function() {
	return this.grid.selMgr.__isSelected_h__(this);
};

prototype.__getCellIdxToNavigate_i__ = function(dir, row, col) {
	switch (dir) {
		case this.__consts_a__.__RIGHT_d__:
			if (col < this.grid.colDefMgr.length() - 1) {
				col++;
         }
		break;
		case this.__consts_a__.__LEFT_c__:
			if (col > 0) {
				col--;
         }
		break;
		case this.__consts_a__.__DOWN_b__:
			if (row < this.grid.dataMgr.datalist.length - 1) {
				row++;
         }
		break;
		case this.__consts_a__.__UP_a__:
			if (row > 0) {
				row--;
         }
		break;
		case this.__consts_a__.__PGDN_f__:
			row += this.grid.view._options.__rowsPerPage_e__;
			if (row > this.grid.dataMgr.datalist.length - 1) {
				row = this.grid.dataMgr.datalist.length - 1;
         }
		break;
		case this.__consts_a__.__PGUP_g__:
			row -= this.grid.view._options.__rowsPerPage_e__;
			if (row < 0) {
				row = 0;
         }
		break;
		case this.__consts_a__.__HOME_h__:
			row = 0;
		break;
		case this.__consts_a__.__END_i__:
			row = this.grid.dataMgr.datalist.length - 1;
		break;	
	}
	return [row, col];
};

prototype.__idxToCell_j__ = function(dir, idx) {
	var newIdx = this.__getCellIdxToNavigate_i__(dir, idx.getRowIdx(), idx.getColIdx());
	return JGM.create("Cell", {grid: this.grid, row:newIdx[0], col:newIdx[1]});
};


/**
주어진 {@link JGM.Cell Cell} 을 포함하는 로우 전체를 선택합니다.

@function {} selectRow
@param {JGM.Cell} cell - 선택할 로우가 포함하는 {@link JGM.Cell Cell}

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.selectRow = function(cell) {
	var row = cell.getRowIdx(),
		col = cell.getColIdx();
		
	this.__setRange_l__(row, col, cell);
	this.__setLast_k__(row, col, cell);
	this.__setSelMap_p__(this.__getRowMap_s__(row, col, cell));
};

/**
주어진 {@link JGM.Cell Cell} 을 선택합니다.

@function {} selectCell
@param {JGM.Cell} cell - 선택할 {@link JGM.Cell Cell}

@author 조준호
@since 1.0.0
@version 1.0.0
*/
//tested
prototype.selectCell = function(cell, noScroll) {
	/**
	셀 선택 전에 발생되는 이벤트 입니다.
	
	@event {Event} onBeforeSelectCell
	@param {JGM.Cell} selectedCell - 새롭게 이동된 셀 인스턴스

	@author 조준호
	@since 1.3.0
	@version 1.3.0
	*/
	this.grid.event.trigger("onBeforeSelectCell", [cell]);

	if (this._options.__multiSelectEnabled_h__ && cell.getKey() === this._options.__rowSelKey_a__) {
		this.selectRow(cell);
   }
	else {
		var row = cell.getRowIdx(),
			col = cell.getColIdx();
			
		this.__setRange_l__(row, col, cell, noScroll);
		this.__setLast_k__(row, col, cell);
		this.__setSelMap_p__(this.__getCellMap_q__(row, col, cell));
	}
	
	/**
	셀 선택 후에 발생되는 이벤트 입니다.
	
	@event {Event} onAfterSelectCell
	@param {JGM.Cell} selectedCell - 새롭게 이동된 셀 인스턴스

	@author 조준호
	@since 1.3.0
	@version 1.3.0
	*/
	this.grid.event.trigger("onAfterSelectCell", [cell]);
};

prototype.onBeforeDataChange = function() {
};

prototype.__onBeforeRerender_t__ = function() {
	if (Util.isNotNull(this.__last_b__)) {
		this.toSelect = this.__last_b__;
	}
	this.empty();
};

prototype.onAfterRerender = function() {
	if (Util.isNotNull(this.toSelect)) {
		this.selectCell(this.toSelect, true);
		this.grid.view.scrollToRowLazy(this.toSelect.getRowIdx());
	}
};

/**
주어진 {@link JGM.Cell Cell} 을 포함하는 로우 전체를 선택에 추가합니다.

@function {} addRow
@param {JGM.Cell} cell - 추가 선택할 로우가 포함하는 {@link JGM.Cell Cell}

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.addRow = function(cell) {
	var row = cell.getRowIdx(),
		col = cell.getColIdx();
		
	this.__setRange_l__(row, col, cell);
	this.__setLast_k__(row, col, cell);
	this.__addSelMap_m__(this.__getRowMap_s__(row, col, cell));
};


/**
주어진 {@link JGM.Cell Cell} 을 선택에 추가합니다.

@function {} addCell
@param {JGM.Cell} cell - 추가 선택할 {@link JGM.Cell Cell}

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.addCell = function(cell) {
	var row = cell.getRowIdx(),
		col = cell.getColIdx();
		
	this.__setRange_l__(row, col, cell);
	this.__setLast_k__(row, col, cell);
	this.__addSelMap_m__(this.__getCellMap_q__(row, col, cell));
};


/**
주어진 {@link JGM.Cell Cell} 을 범위의 모서리로 범위 선택을 합니다.

@function {} selectRange
@param {JGM.Cell} cell - 범위 선택의 모서리 {@link JGM.Cell Cell}

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.selectRange = function(cell) {
	var row = cell.getRowIdx(),
		col = cell.getColIdx(),
		lastRow = this.__last_b__.getRowIdx(),
		lastCol = this.__last_b__.getColIdx(),
		minRow = (lastRow < row ? lastRow : row),
		maxRow = (lastRow < row ? row : lastRow),
		minCol,
		maxCol;
		
	this.__setRange_l__(row, col, cell);

	if (cell.getKey() === this._options.__rowSelKey_a__) {
		minCol = 0;
		maxCol = this.grid.colDefMgr.length() - 1;
	}
	else {
		minCol = lastCol < col ? lastCol : col;
		maxCol = lastCol < col ? col : lastCol;
	}

	this.__setSelMap_p__(this.__getRangeMap_r__(minRow, minCol, maxRow, maxCol, row, col, cell));
	
	return {minRow:minRow, minCol:minCol, maxRow:maxRow, maxCol:maxCol};
};

prototype.__setLast_k__ = function(row, col, cell) {
	var last = this.__last_b__,
      lastRow;
	if (Util.isNotNull(last)) {
		lastRow = last.getRowIdx();
			
		if (row !== lastRow && (Util.isNotNull(this.__range_c__) &&  lastRow !== this.__range_c__.getRowIdx())) {
			this.grid.view.unlockRowById(last.getId());
      }

		last.get$().removeClass(this._options.__classLast_f__);
      if (this._options.highlightRowEnabled === true) {
         $(last.getRowNode()).removeClass(this._options.classRowSelected);
      }
		
		if (Util.isNull(cell)) {
			delete this.__last_b__;
      }
	}
	
	if (Util.isNull(cell)) {
		return;
   }
	
	(this.__last_b__ = cell).get$().addClass(this._options.__classLast_f__);
   if (this._options.highlightRowEnabled === true) {
      $(cell.getRowNode()).addClass(this._options.classRowSelected);
   }
	
	this.grid.view.lockRowByIdx(row);
};

prototype.__setRange_l__ = function(row, col, cell, noScroll) {
	var range = this.__range_c__;
	if (Util.isNotNull(range)) {
		var rangeRow = range.getRowIdx();
			
		if (row === rangeRow && col === range.getColIdx()) {
			return;
      }
			
		if (row !== rangeRow && (Util.isNotNull(this.__last_b__) &&  rangeRow !== this.__last_b__.getRowIdx())) {
			this.grid.view.unlockRowById(range.getId());
      }
			
		range.get$().removeClass(this._options.__classRange_g__);

		if (Util.isNull(cell)) {
			delete this.__range_c__;
      }
	}
	
	if (Util.isNull(cell)) {
		return;
   }
		
	(this.__range_c__ = cell).get$().addClass(this._options.__classRange_g__);
	
	var view = this.grid.view;
	view.lockRowByIdx(row);

	if (!noScroll) {
		view.scrollToLazy(row, col);
	}
};

prototype.__addSelMap_m__ = function(map) {
	var rowsmap = this.__rows_d__,
		rowmap,
		addrow,
		r,
		c,
		view = this.grid.view,
		toAddClass = {};
	for (r in map) {
      if (map.hasOwnProperty(r)) {
         addrow = map[r];
			if (rowsmap.hasOwnProperty(r)) {
				rowmap = rowsmap[r];
				for (c in addrow) {
					if (addrow.hasOwnProperty(c)) {
						if (rowmap.hasOwnProperty(c)) {
							if (addrow[c] instanceof JGM.Cell) {
								rowmap[c] = addrow[c];
							}
							delete addrow[c];
						}
					}
				}			
			}
      }
	}
	
	this.addOrRemoveCss(toAddClass, true);
	this.__addToMaps_n__(map);
};

// $cell 정리, refresh 하면 원래 cell 찾아 scroll, multiSelect 시 한번에 클래스변경


prototype.__setSelMap_p__ = function(map) {
	var rowsmap = this.__rows_d__,
		rowmap,
		colmap,
		addrow,
		r,
		c,
		view = this.grid.view,
		toRemoveClass = {},
		toRemoveRow,
		removeMap = {};
	for (r in rowsmap) {
      if (rowsmap.hasOwnProperty(r) && r !== "length") {
         rowmap = rowsmap[r];
         if (map.hasOwnProperty(r)) {
				addrow = map[r];
				for (c in rowmap) {
					if (rowmap.hasOwnProperty(c) && c !== "length") {
						if (addrow.hasOwnProperty(c)) {
							if (addrow[c] instanceof JGM.Cell) {
								rowmap[c] = addrow[c];
							}
							delete addrow[c];
						}
						else {
							if (!removeMap.hasOwnProperty(r)) {
								removeMap[r] = {};
							}
							removeMap[r][c] = true;
						}
					}
				}			
         }
         else {
				colmap = removeMap[r] = {};
				for (c in rowmap) {
					if (rowmap.hasOwnProperty(c) && c !== "length") {
						colmap[c] = true;
					}
				}
         }
      }
	}
	
	this.__removeFromMaps_o__(removeMap);
	this.addOrRemoveCss(toRemoveClass, false);
	
	this.__addSelMap_m__(map);
};

prototype.addOrRemoveCss = function(map, add) {
	var list = [],
		r,
		c,
		row,
		view = this.grid.view;
	for (r in map) {
      if (map.hasOwnProperty(r)) {
         row = map[r];
         for (c in row) {
            if (row.hasOwnProperty(c)) {
               if (row[c] instanceof JGM.Cell) {
                  list.push(row[c].getNode());
               }
               else {
                  list.push(view.getCell(r, c));
               }
            }
         }
      }
	}
	list = list.filter(function(n) {return Util.isNotNull(n);});
	if (add) {
		$(list).addClass(this._options.__classSelection_e__);
   }
	else {
		$(list).removeClass(this._options.__classSelection_e__);		
   }
};

prototype.__addToMaps_n__ = function(map) {
	var r,
		c,
		cell,
		rowmap = this.__rows_d__,
		colmap = this.__cols_e__,
		row;
	for (r in map) {
      if (map.hasOwnProperty(r)) {
         row = map[r];
         for (c in row) {
            if (row.hasOwnProperty(c)) {
               cell = Util.isNull(cell = row[c]) ? true : cell;

               if (rowmap.hasOwnProperty(r)) {
                  rowmap[r].length++;
               }
               else {
                  rowmap[r] = {length:1};
                  rowmap.length++;
               }
               rowmap[r][c] = cell;

               if (colmap.hasOwnProperty(c)) {
                  colmap[c].length++;
               }
               else {
                  colmap[c] = {length:1};
                  colmap.length++;
               }
               colmap[c][r] = cell;
            }
         }
      }
	}
};

prototype.__removeFromMaps_o__ = function(map) {
	var r,
		c,
		rowmap = this.__rows_d__,
		colmap = this.__cols_e__,
		row;
	for (r in map) {
      if (map.hasOwnProperty(r)) {
         row = map[r];
         for (c in row) {
            if (row.hasOwnProperty(c)) {
               if (--rowmap[r].length === 0) {
                  delete rowmap[r];
                  rowmap.length--;
               }
               else {
                  delete rowmap[r][c];
               }

               if (--colmap[c].length === 0) {
                  delete colmap[c];
                  colmap.length--;
               }
               else {
                  delete colmap[c][r];
               }
            }
         }
      }
   }
};

prototype.__getCellMap_q__ = function(row, col, cell) {
	var map = {};
	
	map[row] = {};
	map[row][col] = cell;
	
	return map;
};

prototype.__getRowMap_s__ = function(row, col, cell) {
	var map = {},
		collen = this.grid.colDefMgr.length(),
		i = 0;
	
	map[row] = {};
	for (; i < collen; i++) {
		map[row][i] = true;
   }
	
	map[row][col] = cell;
	return map;
};

prototype.__getRangeMap_r__ = function(rowMin, colMin, rowMax, colMax, row, col, cell) {
	var map = {},
		i = rowMin,
		j;
		
	for (; i <= rowMax; i++) {
		map[i] = {};
		j = colMin;
		for (; j <= colMax; j++) {
			map[i][j] = true;
		}
	}
	map[row][col] = cell;
	return map;
};


/**
현재 선택된 모든 선택을 제거합니다.

@function {} empty

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.empty = function() {
	this.__setLast_k__();
	this.__setRange_l__();
	this.__setSelMap_p__({});
};

}());
