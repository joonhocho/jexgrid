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

 goog.provide('JGM.edit.EditManager');

 JGM.edit.EditManager = EditManager;

/**
EditManager 모듈. 데이터 에디팅을 담당하는 모듈입니다.
@module EditManager

@requires JGM
@requires JGM.Grid
@requires JGM.ColDefManager
@requires JGM.DataManager
@requires JGM.EventManager
@requires JGM.SelectionManager
@requires JGM.Cell
 */

/**
EditManager 클래스. 컬럼 별 커스텀 에디터를 지원합니다.

@class {public EditManager} JGM.EditManager

@author 조준호
@since 1.0.0
@version 1.2.1
*/

/**
EditManager 컨스트럭터 입니다.

@constructor {public EditManager} EditManager
@param {Object} args - EditManager 모듈 파라미터 오브젝트
@... {JGM.Grid} args.grid - EditManager 를 포함하는 {@link JGM.Grid Grid} 인스턴스
@... {Object} args.options - EditManager 옵션 오브젝트
@returns {EditManager} EditManager 모듈 인스턴스를 리턴합니다.

@author 조준호
@since 1.0.0
@version 1.0.0
*/
function EditManager(args) {
	/**
	{@link JGM} 이 할당해주는 EditManager 모듈 고유 아이디입니다. 읽기 전용.

	@var {public final String} mid

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.mid = args.mid;

	/**
	EditManager 를 포함하는 {@link JGM.Grid Grid} 인스턴스.

	@var {public JGM.Grid} grid

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.grid = args.grid;

	/**
	그리드 데이터 편집을 관리하는 {@link JGM.EditManager EditManager} 인스턴스 입니다.

	@var {public JGM.EditManager} JGM.Grid.editMgr

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.grid.editMgr = this;

	/**
	EditManager 모듈의 기본 옵션 값들을 정의합니다.

	@var {private Object} options

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	var options = {
		/**
		현재 에디팅 중인 그리드 셀에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-edit"</code>

		@var {private optional String} JGM.EditManager.options.classEdit

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__classEdit_a__: "jgrid-edit",

		/**
		{@link JGM.EditManager.options.editableBgEnabled editableBgEnabled} 이 true 일 경우, 에디팅이 가능한 컬럼 셀에 공통적으로 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-editable"</code>

		@var {private optional String} JGM.EditManager.options.classCellEditable

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__classCellEditable_b__: "jgrid-editable",

		/**
		{@link JGM.EditManager.options.notEditableBgEnabled notEditableBgEnabled} 이 true 일 경우, 에디팅이 불가능한 컬럼 셀에 공통적으로 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-notEditable"</code>

		@var {private optional String} JGM.EditManager.options.classCellNotEditable

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__classCellNotEditable_c__: "jgrid-notEditable",

		/**
		true 일 경우, {@link JGM.EditManager.options.classCellEditable classCellEditable} 를 적용합니다. <br>기본값:<code>false</code>

		@var {private optional Boolean} JGM.EditManager.options.editableBgEnabled

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__editableBgEnabled_d__: false,

		/**
		true 일 경우, {@link JGM.EditManager.options.classCellNotEditable classCellNotEditable} 를 적용합니다. <br>기본값:<code>false</code>

		@var {private optional Boolean} JGM.EditManager.options.notEditableBgEnabled

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__notEditableBgEnabled_e__: false,

		/**
		{@link JGM.EditManager.options.classCellEditable classCellEditable} 에 적용될 배경입니다. <br>기본값:<code>"#FFF"</code>

		@var {private optional String} JGM.EditManager.options.editableBg

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__editableBg_f__: "#FFF",

		/**
		{@link JGM.EditManager.options.classCellNotEditable classCellNotEditable} 에 적용될 배경입니다. <br>기본값:<code>"#F6F6F6"</code>

		@var {private optional String} JGM.EditManager.options.notEditableBg

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__notEditableBg_g__: "#F6F6F6",

		/**
		delete 키를 이용한 셀 내용 삭제 가능 여부입니다. <br>기본값:<code>false</code>

		@var {private optional Boolean} JGM.EditManager.options.deleteEnabled

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__deleteEnabled_h__: false,
		
		/**
		에디팅 가능한 셀에 에디팅 아이콘을 보여줄지 여부입니다. <br>기본값:<code>true</code>

		@var {private optional Boolean} JGM.EditManager.options.editIconEnabled

		@author 조준호
		@since 1.2.1
		@version 1.2.1
		*/
		__editIconEnabled_i__: true,
		
		/**
		에디팅 가능한 셀에 보여줄 아이콘 이미지 url 입니다. <br>기본값:<code>imageUrl + "editable-small.png"</code>

		@var {private optional String} JGM.EditManager.options.urlEditIcon

		@author 조준호
		@since 1.2.1
		@version 1.2.1
		*/
		__urlEditIcon_j__: this.grid._options.imageUrl + "editable-small.png",
		
		/**
		에디팅 아이콘 이미지에 적용될 CSS 클래스 입니다. <br>기본값:<code>"edit-icon"</code>

		@var {private optional String} JGM.EditManager.options.classEditIcon

		@author 조준호
		@since 1.2.1
		@version 1.2.1
		*/
		__classEditIcon_k__: "edit-icon",
		
		/**
		에디팅 아이콘 이미지의 폭 픽셀 값입니다. <br>기본값:<code>11</code>

		@var {private optional int} JGM.EditManager.options.editIconWidth

		@author 조준호
		@since 1.2.1
		@version 1.2.1
		*/
		__editIconWidth_l__: 12,
		
		/**
		에디팅 아이콘 이미지의 padding 픽셀 값입니다. <br>기본값:<code>3</code>

		@var {private optional int} JGM.EditManager.options.editIconPadding

		@author 조준호
		@since 1.2.1
		@version 1.2.1
		*/
		__editIconPadding_m__: 3,
		
		/**
		기본 텍스트 에디터의 배경 스타일입니다. <br>기본값:<code>"#FFF9D7"</code>

		@var {private optional String} JGM.EditManager.options.basicBackground

		@author 조준호
		@since 1.2.2
		@version 1.2.2
		*/
		__basicBackground_n__: "#FFF9D7",

		classSuccess: "edit-success",

		successBackground: "#cdf7b6",

		classFailure: "edit-failure",

		failureBackground: "#ffcec5"

	};

	this._options = JGM.__extend_e__(options, args.options, {
		classEdit:"__classEdit_a__",
		classCellEditable:"__classCellEditable_b__",
		classCellNotEditable:"__classCellNotEditable_c__",
		editableBgEnabled:"__editableBgEnabled_d__",
		notEditableBgEnabled:"__notEditableBgEnabled_e__",
		editableBg:"__editableBg_f__",
		notEditableBg:"__notEditableBg_g__",
		deleteEnabled:"__deleteEnabled_h__",
		editIconEnabled: "__editIconEnabled_i__",
		urlEditIcon: "__urlEditIcon_j__",
		classEditIcon: "__classEditIcon_k__",
		editIconWidth: "__editIconWidth_l__",
		editIconPadding: "__editIconPadding_m__",
		basicBackground:"__basicBackground_n__"
	});

	/**
	현재 EditManager 에서 사용되고 있는 {@link JGM.Editor} 인스턴스 입니다. 현재
	에디팅 되고 있는 셀이 없을 경우에는 undefined 의 값을 가집니다. 활성화 중일
	때에는 <code>this.cell</code> 로 에디팅 되고 있는 {@link JGM.Cell} 인스턴스를 엑세스 할 수 있습니다.

	@var {public JGM.Editor} editor

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.editor;

	this.__beginEditKeys_c__ = Util.which(["number", "alphabet", "del", "backspace"]);
	
	this.beingCommitted;

	this.__init();
}

EditManager.getInstance = function(args) {
	return new EditManager(args);
};

var prototype = EditManager.prototype;

prototype.__init = function() {
	this.bindEvents();
};

prototype.bindEvents = function() {
	var events = {
		onGetColCellClass: this.__onGetColCellClass_f__,
		keydownCanvas: this.__keydownCanvas_ba__,
		onDestroy: this.__destroy_aA__,
		dblclickCanvas: this.__dblclickCanvas_bi__,
		onCreateDynamicCss: this.onCreateDynamicCss,
		"onBeforeNavigate onBeforeRefresh onBeforeSelect": this.commit,
		onBeforeFocusCanvas: this.notActive
	};
	
	if (Util.isNull(this.grid.selMgr)) {
		events.onCreateCss = this.__onBeforeCreateSelCss_d__;
	}
	else {
		events.onBeforeCreateSelCss = this.__onBeforeCreateSelCss_d__;
	}
		
	if (this._options.__deleteEnabled_h__) {
		events["keydownSel_" + Util.keyMapKeydown.del] = this.__deleteContents_i__;
	}
	
	if (this._options.__editIconEnabled_i__) {
		var colDefs = this.grid.colDefMgr.get(),
			len = colDefs.length,
			i = 0;
		for (; i < len; i++) {
			if (Util.isNotNull(colDefs[i].editor)) {
				//events["onRenderCell_" + colDefs[i].key + "_prepend"] = this.__onRenderCell_aH__;
				events["onRenderHeader_" + colDefs[i].key + "_prepend"] = this.__onRenderHeader_aH__;
			}
		}
		//events["onBeforeMousedown onBeforeMouseup onBeforeClick"] = this.cancelMouseEvent;
	}
		
	this.grid.event.bind(events, this);
};

prototype.__destroy_aA__ = function() {
	this.__deleteEditor_g__();

	JGM._destroy(this, {
		name: "EditManager",
		path: "editMgr",
		map: "__beginEditKeys_c__ _options"
	});
};

prototype.__onBeforeCreateSelCss_d__ = function() {
	var gridId = "#" + this.grid.mid + " .",
		o = this._options,
		rules = [],
		height = this.grid.view.__getRowInnerHeight_AO__();

	rules.push(this.grid.view.__getCellSelector_AG__() + "." + o.__classEdit_a__ + "{background:" + o.__basicBackground_n__ + "}");
	
	rules.push(gridId + o.__classEdit_a__ + " input{position:absolute;z-index:10;top:0;padding:0;border:0;margin:0;background:" + o.__basicBackground_n__ + ";height:" + height + "px;line-height:" + height + "px}");

	if (o.__editableBgEnabled_d__) {
		rules.push(gridId + o.__classCellEditable_b__ + "{background:" + o.__editableBg_f__ + "}");
	}
	if (o.__notEditableBgEnabled_e__) {
		rules.push(gridId + o.__classCellNotEditable_c__ + "{background:" + o.__notEditableBg_g__ + "}");
	}
	if (o.__editIconEnabled_i__) {
		rules.push(gridId + o.__classEditIcon_k__ + "{float:left;position:absolute;left:0;top:0;padding:0 " + o.__editIconPadding_m__ + "px;width:" + o.__editIconWidth_l__ + "px;height:" + height + "px;background:url(" + o.__urlEditIcon_j__ + ") no-repeat center transparent}");
	}
	rules.push(gridId + o.classSuccess + "{background:" + o.successBackground + "}");
	rules.push(gridId + o.classFailure + "{background:" + o.failureBackground + "}");
	return rules.join("");
};

prototype.onCreateDynamicCss = function() {
	var cellSel = this.grid.view.__getCellSelector_AG__(),
		padding = this.grid.view.__getPadding_AM__(),
		colDefs = this.grid.colDefMgr.get(),
		i = 0,
		str = "";
		
	for (; i < colDefs.length; i++) {
		if (Util.isNotNull(colDefs[i].editor)) {
			str += cellSel + ".k_" + colDefs[i].key + " .basic-editor{width:" + (colDefs[i].width - 2 * padding) + "px}";
		}
	}
		
	return str;
};

prototype.__onRenderHeader_aH__ = function(html) {
	html.push("<span class='" + this._options.__classEditIcon_k__ + "'></span>");
};

prototype.__onRenderCell_aH__ = function(rowIdx, colIdx, datarow, colDef, cellHtml) {
	if (this.grid.dataMgr.isReal(datarow)) {
		cellHtml.push("<span class='" + this._options.__classEditIcon_k__ + "' title='클릭하여 에디팅을 시작합니다' onclick='JGM.m.EditManager." + this.mid + ".beginEdit(\"" + datarow[this.grid.dataMgr.idKey] + "\",\"" + colDef.key + "\")'></span>");
	}
};

prototype.cancelMouseEvent = function(e) {
	return !Util.hasTagAndClass(e.target, "DIV", this._options.__classEditIcon_k__);
};

prototype.beginEdit = function(id, key) {
	this.begin(JGM.create("Cell", {grid:this.grid, datarow:this.grid.dataMgr.getById(id), colDef:this.grid.colDefMgr.getByKey(key)}));
};

prototype.__dblclickCanvas_bi__ = function(e, cell) {
	if (!cell.isEdited()) {
		this.begin(cell);
	}
};

prototype.__keydownCanvas_ba__ = function(e) {
	if (this.active()) {
		if (e.which === Util.keyMapKeydown.esc) {
			this.cancel();
		}
	}
	else {
		if (e.ctrlKey) {
			/*
			switch (e.which) {
				case "C".charCodeAt(0):
					this.copy(this.grid.selMgr.getCell());
				break;
				case "X".charCodeAt(0):
					this.cut(this.grid.selMgr.getCell());
				break;
				case "V".charCodeAt(0):
					this.paste(this.grid.selMgr.getCell());
				break;
			}
			*/
			return;
		}
		else if (!e.altKey && Util.isNotNull(this.grid.selMgr)) {
			if (e.which === Util.keyMapKeydown.del && this._options.__deleteEnabled_h__) {
				this.__deleteContent_h__(this.grid.selMgr.getCell());
			}
			else if (this.__beginEditKeys_c__[e.which]) {
				this.begin(this.grid.selMgr.getCell());
			}
			else if (e.which === Util.keyMapKeydown.f2) {
				e.preventDefault();
				this.begin(this.grid.selMgr.getCell());
			}
		}
	}
};


/**
현재 에디팅 되고 있는 셀의 존재 여부를 리턴합니다.

@function {public Boolean} active
@returns {Boolean} 에디팅 활성화 여부

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.active = function() {
	return Util.isNotNull(this.editor);
};

prototype.notActive = function() {
	return Util.isNull(this.editor);
};

prototype.__isEdited_e__ = function(cell) {
	return this.active() && this.editor.cell.equals(cell);
};

prototype.__onGetColCellClass_f__ = function(colDef) {
	if (Util.isNotNull(colDef.editor)) {
		return this._options.__classCellEditable_b__;
	}
	else {
		return this._options.__classCellNotEditable_c__;
	}
};

/**
셀이 현재 에디팅 되고 있는지를 리턴합니다.

@function {public Boolean} JGM.Cell.isEdited
@returns {Boolean} 셀의 에디팅 여부

@author 조준호
@since 1.0.0
@version 1.0.0
*/
JGM.Cell.prototype.isEdited = function() {
	return this.grid.editMgr.__isEdited_e__(this);
};

/**
셀 데이터 값을 변경합니다.

@function {public Boolean} JGM.Cell.setValue
@param {String} value - 셀 데이터에 새로 넣을 값

@author 조준호
@since 1.0.0
@version 1.0.0
*/
JGM.Cell.prototype.setValue = function(value) {
	var datarow = this.getDatarow(),
		key = this.getKey(),
		res;

	if (Util.isNotNullAnd(datarow, key)) {
		res = this.grid.dataMgr.updateByKey(datarow, key, value, {noSort:true, noFilter:true, noRerender:true});
      if (res === true) {
			this.grid.view.rerenderRow(datarow);
      }
	}
	return res;
};


/**
주어진 셀이 에디트 가능한지를 체크합니다.

@function {public} isEditable 
@param {JGM.Cell} cell - 에디트가 가능한지 체크할 셀
@returns {Boolean} 에디트가 가능하면 true 아니면 false 를 리턴합니다.

@author 조준호
@since 1.1.0
@version 1.1.0
*/
prototype.isEditable = function(cell) {
	return Util.isNotNull(cell) && Util.isNotNull(cell.getColDef().editor) && this.grid.dataMgr.isReal(cell.getDatarow());
};

/**
주어진 셀의 에디팅을 시작합니다.

@function {public} begin
@param {JGM.Cell} cell - 에디팅을 시작할 셀 인스턴스

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.begin = function(cell) {
	if (this.active()) {
		this.commit();
	}
		
	if (!this.isEditable(cell)) {
		return;
	}

	this.editor = cell.getColDef().editor;

	this.editor.cell = cell;
	this.editor.grid = this.grid;

	var node = cell.getNode();
	this.editor.before = node.innerHTML;
	node.innerHTML = this.editor.edit(cell.getValue());

	cell.get$().addClass(this._options.__classEdit_a__);
	this.editor.focus();
};

/**
현재 진행중인 에디팅을 취소합니다. 셀 데이터는 변경되지 않습니다.

@function {public} cancel

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.cancel = function() {
	if (!this.active()) {
		return;
	}
		
	var cell = this.editor.cell;
	cell.getNode().innerHTML = this.editor.before;
	this.__deleteEditor_g__();
	cell.get$().removeClass(this._options.__classEdit_a__);
	this.grid.view.focus();
};

prototype.__deleteEditor_g__ = function() {
	if (Util.isNotNull(this.editor)) {
		delete this.editor.grid;
		delete this.editor.cell;
		delete this.editor.before;
		delete this.editor;
	}
};

/**
현재 진행중인 셀의 변경 내용을 저장합니다. 저장할 내용이 valid 한지를 확인한 후
valid 한 경우에는 변경을 진행하고 그렇지 않은 경우에는 변경 내용을 취소합니다.

@function {public} commit

@author 조준호
@since 1.0.0
@version 1.3.0
*/

/*
 * 1.3.0 editor.valid -> coldef.validator & datamanager.validate
 */
prototype.commit = function() {
	if (this.beingCommitted || !this.active()) {
		return;
	}
		
	this.beingCommitted = true;
	
	var cell = this.editor.cell,
		value = this.editor.value(cell.getNode()),
		$cell;

	if (value == cell.getValue()) {
		this.cancel();
	}
	else {
      var res = cell.setValue(value),
			classRes;
		$cell = cell.get$();
      if (res instanceof Error) {
         this.cancel();
			classRes = this._options.classFailure;
         $cell.addClass(classRes);
			setTimeout(function() {$cell.removeClass(classRes);}, 1000);
      }
      else {
         this.__deleteEditor_g__();
         this.grid.view.focus();
			classRes = this._options.classSuccess;
			this.grid.printMessage("Successfully Updated.");
         $cell.addClass(classRes);
			setTimeout(function() {$cell.removeClass(classRes);}, 1000);
      }
	}
	cell.get$().removeClass(this._options.__classEdit_a__);
		
	this.beingCommitted = false;
};

prototype.__deleteContent_h__ = function(cell) {
	if (this.active() || !this.isEditable(cell)) {
		return;
	}
	var colDef = cell.getColDef();
	if (cell.getValue() === colDef.defaultValue) {
		return;
	}

	cell.setValue(colDef.defaultValue);
};

prototype.__deleteContents_i__ = function(e, selectionRows, selectionCols) {
	if (this.active()) {
		return;
	}
	var updates = {},
		fakerows = {},
		updatelist = [],
		col,
		colDef,
		defaultValue,
		key,
		cell,
		datarow,
		selCol,
		row;

	col_loop:
	for (col in selectionCols) {
		if (!selectionCols.hasOwnProperty(col) || col === "length") {
			continue;
		}

		colDef = undefined;
		defaultValue = undefined;
		key = undefined;
		selCol = selectionCols[col];

		row_loop:
		for (row in selCol) {
			if (!selCol.hasOwnProperty(row) || row === "length" || fakerows.hasOwnProperty(row)) {
				continue;
			}

			cell = selCol[row].cell;

			if (Util.isNull(colDef)) {
				colDef = cell.getColDef();
				defaultValue = colDef.defaultValue;
				key = colDef.key;

				if (Util.isNull(colDef.editor)) {
					continue col_loop;
				}
			}

			if (Util.isNotNull(updates[row])) {
				datarow = updates[row].datarow;
			}
			else {
				datarow = cell.getDatarow();
			}

			if (!this.grid.dataMgr.isReal(datarow)) {
				fakerows[row] = true;
				continue;
			}

			if (defaultValue === datarow[key]) {
				continue;
			}

			if (Util.isNull(updates[row])) {
				updates[row] = {datarow:datarow, change:{}};
				updatelist.push(updates[row]);
			}

			updates[row].change[key] = defaultValue;
		}
	}

	if (updatelist.length !== 0) {
		this.grid.dataMgr.updateList(updatelist);
	}
};

/**
Editor 모듈. 컬럼 에디팅을 공통적으로 담당하는 모듈입니다.
@module Editor

@requires JGM
@requires JGM.Grid
@requires JGM.EditManager
@requires JGM.Cell
 */

/**
Editor 클래스. 컬럼 공통 에디터입니다. 컬럼 셀의 에디팅 모드로의 변경시 렌더링,
내용 변경시 값의 validity check 등을 담당합니다.

@class {public Editor} JGM.Editor

@author 조준호
@since 1.0.0
@version 1.0.0
*/

/**
Editor 컨스트럭터 입니다.

@constructor {public Editor} Editor
@param {Object} args - Editor 모듈 파라미터 오브젝트
@... {String Function()} args.edit - 셀 안에 들어갈 에디터를 렌더링 하는 HTML String 을 리턴하는 function 입니다.
@... {Function()} args.focus - 셀 에디팅이 시작됬을때 에디터를 focus 해주는 function 입니다.
@... {Boolean Function(Object value)} args.valid - 주어진 값이 valid 한지를 리턴합니다.
@... {Object Function} args.value - 에디팅 중인 값을 리턴합니다.
@returns {Editor} Editor 모듈 인스턴스를 리턴합니다.

@author 조준호
@since 1.0.0
@version 1.0.0
*/

function Editor(args) {
	/**
	{@link JGM} 이 할당해주는 Editor 모듈 고유 아이디입니다. 읽기 전용.

	@var {public final String} mid

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/

	/**
	Editor 를 포함하는 {@link JGM.Grid Grid} 인스턴스.

	@var {public JGM.Grid} grid

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/

	/**
	Editor 가 현재 에디팅 중인 {@link JGM.Cell Cell} 인스턴스.

	@var {public JGM.Cell} cell

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/

	var i;
	for (i in args) {
		if (args.hasOwnProperty(i)) {
			this[i] = args[i];
		}
	}
}

Editor.getInstance = function(args) {
	return new Editor(args);
};

prototype = Editor.prototype;

/**
셀 에디팅 활성화 시, 해당 셀에 들어갈 HTML 을 리턴합니다.

@function {public String} edit
@param {?} value - 셀의 현재 데이터 값입니다.
@returns {Editor} 셀 노드 안에 들어갈 HTML 코드

@author 조준호
@since 1.0.0
@version 1.1.1
*/
prototype.edit = function(value) {
	// added a style so that the edit box does not go out of the cell when right-aligned in IE 7/8
	return "<input type='text' class='basic-editor' value='" + Util.ifNull(value, "") + "' style='position:relative'/>";
};

/**
셀 에디팅 활성화 시, 생성된 에디터 HTML 노드를 focus 해줍니다.

@function {public} focus

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.focus = function() {
	var node = this.cell.getNode().childNodes[0];
	if (Util.isFunction(node.setActive)) {
		try {node.setActive();} catch(e){}
	}
	node.focus();
	if (document.activeElement !== node) {
		this.cell.get$().children(":eq(0)").focus();
	}
};

/**
셀 변경 내용 저장시에 변경된 내용이 valid 한지를 리턴합니다. false 를 리턴할 경우
셀 에디팅은 취소되고 true 를 리턴할경우 변경된 내용이 저장됩니다.

@function {public Boolean} valid
@param {?} value - 셀에 저장될 내용 {@link value} 함수에서 리턴되는 값입니다.
@returns {Boolean} 셀 변경 내용 저장시에 변경된 내용의 validity

@author 조준호
@since 1.0.0
@version 1.0.0
@deprecated
*/

/*
 * 1.3.0: deprecated
 * use colDef.validator instead
 */

/**
생성된 셀 에디터의 현재 셀 데이터 값. 이 함수에서 리턴되는 값이 {@link valid}
함수의 파라미터로 입력되어서 validity 가 체크되고 valid 하다고 판단되면 데이터
로우의 셀 데이터 값으로 입력됩니다.

@function {public Boolean} value
@param {DOMElement} wrapperNode - 에디터 DOM 노드를 포함하는 셀 DOM 노드 입니다.
@returns {?} 생성된 셀 에디터의 현재 데이터 값

@author 조준호
@since 1.0.0
@version 1.1.1
*/
prototype.value = function(wrapperNode) {
	return wrapperNode.childNodes[0].value;
};

/**
현재 데이터의 path 스트링입니다. 이 값을 eval() 하면 이 에디터가 리턴됩니다.

@function {public String} path
@returns {String} 현재 데이터의 path 스트링

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.path = function() {
	return "JGM.m.Editor." + this.mid;
};

Editor.numberKeys = Util.which(["number", "del", "backspace"]);

Editor.isNumberKey = function(keyCode) {
	return this.numberKeys[keyCode] ? true : false;
};

Editor.numberEdit = function(cell) {
	var value = cell.getValue();
	return "<input type='text' class='basic-editor' onkeydown='if (!JGM.Editor.isNumberKey(event.which)) return false;' value='" + Util.ifNull(value, "") + "'/>";
};

Editor.floatKeys = Util.which(["number", ".", "del", "backspace"]);

Editor.isFloatKey = function(keyCode) {
	return this.floatKeys[keyCode] ? true : false;
};

Editor.floatEdit = function(cell) {
	var value = cell.getValue();
	return "<input type='text' class='basic-editor' onkeydown='if (!JGM.Editor.isFloatKey(event.which)) return false;' value='" + Util.ifNull(value, "") + "'/>";
};

Editor.alphabetKeys = Util.which(["alphabet", "del", "backspace", "space"]);

Editor.isAlphabet = function(keyCode) {
	return this.alphabetKeys[keyCode] ? true : false;
};

Editor.alphabetEdit = function(cell) {
	var value = cell.getValue();
	return "<input type='text' class='basic-editor' onkeydown='if (!JGM.Editor.isAlphabet(event.which)) return false;' value='" + Util.ifNull(value, "") + "'/>";
};

JGM._add("EditManager", EditManager);
JGM._add("Editor", Editor);
}());
