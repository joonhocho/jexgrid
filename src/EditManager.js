console && console.log && console.log('reading javascript source "EditManager.js"...');//IF_DEBUG

goog.require('jx.util');
goog.require('jx.grid');
goog.require('jx.grid.BaseModule');
goog.require('jx.grid.Grid');
goog.require('jx.grid.Cell');

goog.provide('jx.grid.EditManager');
goog.provide('jx.grid.Editor');

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
	Cell = goog.getObjectByName('jx.grid.Cell');

 goog.exportSymbol('jx.grid.EditManager', EditManager);
 goog.exportSymbol('jx.grid.Editor', Editor);

/**
EditManager 모듈. 데이터 에디팅을 담당하는 모듈입니다.
EditManager 클래스. 컬럼 별 커스텀 에디터를 지원합니다.

@class {EditManager} jx.grid.EditManager

@author 조준호
@since 1.0.0
@version 1.2.1
*/

/**
EditManager 컨스트럭터 입니다.

@constructor {EditManager} EditManager
@param {Object} args - EditManager 모듈 파라미터 오브젝트
@... {jx.grid.Grid} args.grid - EditManager 를 포함하는 {@link jx.grid.Grid} 인스턴스
@... {Object} args.options - EditManager 옵션 오브젝트
@returns {EditManager} EditManager 모듈 인스턴스를 리턴합니다.

@author 조준호
@since 1.0.0
@version 1.0.0
*/
function EditManager(args) {
	/**
	{@link JGM} 이 할당해주는 EditManager 모듈 고유 아이디입니다. 읽기 전용.

	@var {string} mid

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.mid = args.mid;

	/**
	EditManager 를 포함하는 {@link jx.grid.Grid} 인스턴스.

	@var {jx.grid.Grid} grid

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.grid = args.grid;

	/**
	그리드 데이터 편집을 관리하는 {@link jx.grid.EditManager EditManager} 인스턴스 입니다.

	@var {jx.grid.EditManager} jx.grid.Grid.editMgr

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.grid['editMgr'] = this;

	/**
	EditManager 모듈의 기본 옵션 값들을 정의합니다.

	@type {Object} options
	@private

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	var options = {
		/**
		현재 에디팅 중인 그리드 셀에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-edit"</code>

		@type {string=} jx.grid.EditManager.options.classEdit
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'classEdit': "jgrid-edit",

		/**
		{@link jx.grid.EditManager.options.editableBgEnabled editableBgEnabled} 이 true 일 경우, 에디팅이 가능한 컬럼 셀에 공통적으로 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-editable"</code>

		@type {string=} jx.grid.EditManager.options.classCellEditable
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'classCellEditable': "jgrid-editable",

		/**
		{@link jx.grid.EditManager.options.notEditableBgEnabled notEditableBgEnabled} 이 true 일 경우, 에디팅이 불가능한 컬럼 셀에 공통적으로 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-notEditable"</code>

		@type {string=} jx.grid.EditManager.options.classCellNotEditable
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'classCellNotEditable': "jgrid-notEditable",

		/**
		true 일 경우, {@link jx.grid.EditManager.options.classCellEditable classCellEditable} 를 적용합니다. <br>기본값:<code>false</code>

		@type {boolean=} jx.grid.EditManager.options.editableBgEnabled
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'editableBgEnabled': false,

		/**
		true 일 경우, {@link jx.grid.EditManager.options.classCellNotEditable classCellNotEditable} 를 적용합니다. <br>기본값:<code>false</code>

		@type {boolean=} jx.grid.EditManager.options.notEditableBgEnabled
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'notEditableBgEnabled': false,

		/**
		{@link jx.grid.EditManager.options.classCellEditable classCellEditable} 에 적용될 배경입니다. <br>기본값:<code>"#FFF"</code>

		@type {string=} jx.grid.EditManager.options.editableBg
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'editableBg': "#FFF",

		/**
		{@link jx.grid.EditManager.options.classCellNotEditable classCellNotEditable} 에 적용될 배경입니다. <br>기본값:<code>"#F6F6F6"</code>

		@type {string=} jx.grid.EditManager.options.notEditableBg
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'notEditableBg': "#F6F6F6",

		/**
		delete 키를 이용한 셀 내용 삭제 가능 여부입니다. <br>기본값:<code>false</code>

		@type {boolean=} jx.grid.EditManager.options.deleteEnabled
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'deleteEnabled': false,
		
		/**
		에디팅 가능한 셀에 에디팅 아이콘을 보여줄지 여부입니다. <br>기본값:<code>true</code>

		@type {boolean=} jx.grid.EditManager.options.editIconEnabled
		@private

		@author 조준호
		@since 1.2.1
		@version 1.2.1
		*/
		'editIconEnabled': true,
		
		/**
		에디팅 가능한 셀에 보여줄 아이콘 이미지 url 입니다. <br>기본값:<code>imageUrl + "editable-small.png"</code>

		@type {string=} jx.grid.EditManager.options.urlEditIcon
		@private

		@author 조준호
		@since 1.2.1
		@version 1.2.1
		*/
		'urlEditIcon': this.grid._options['imageUrl'] + "editable-small.png",
		
		/**
		에디팅 아이콘 이미지에 적용될 CSS 클래스 입니다. <br>기본값:<code>"edit-icon"</code>

		@type {string=} jx.grid.EditManager.options.classEditIcon
		@private

		@author 조준호
		@since 1.2.1
		@version 1.2.1
		*/
		'classEditIcon': "edit-icon",
		
		/**
		에디팅 아이콘 이미지의 폭 픽셀 값입니다. <br>기본값:<code>11</code>

		@type {number=} jx.grid.EditManager.options.editIconWidth
		@private

		@author 조준호
		@since 1.2.1
		@version 1.2.1
		*/
		'editIconWidth': 12,
		
		/**
		에디팅 아이콘 이미지의 padding 픽셀 값입니다. <br>기본값:<code>3</code>

		@type {number=} jx.grid.EditManager.options.editIconPadding
		@private

		@author 조준호
		@since 1.2.1
		@version 1.2.1
		*/
		'editIconPadding': 3,
		
		/**
		기본 텍스트 에디터의 배경 스타일입니다. <br>기본값:<code>"#FFF9D7"</code>

		@type {string=} jx.grid.EditManager.options.basicBackground
		@private

		@author 조준호
		@since 1.2.2
		@version 1.2.2
		*/
		'basicBackground': "#FFF9D7",

		'classSuccess': "edit-success",

		'successBackground': "#cdf7b6",

		'classFailure': "edit-failure",

		'failureBackground': "#ff0000"

	};

	this._options = JGM._extend(options, args['options']);

	/**
	현재 EditManager 에서 사용되고 있는 {@link jx.grid.Editor} 인스턴스 입니다. 현재
	에디팅 되고 있는 셀이 없을 경우에는 undefined 의 값을 가집니다. 활성화 중일
	때에는 <code>this.cell</code> 로 에디팅 되고 있는 {@link jx.grid.Cell} 인스턴스를 엑세스 할 수 있습니다.

	@var {jx.grid.Editor} editor

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.editor;

	this._beginEditKeys = Util.which(["number", "alphabet", "del", "backspace"]);
	
	this._beingCommitted;

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
		'onGetColCellClass': this._onGetColCellClass,
		'keydownCanvas': this._keydownCanvas,
		'onDestroy': this._destroy,
		'dblclickCanvas': this._dblclickCanvas,
		'onCreateDynamicCss': this.onCreateDynamicCss,
		"onBeforeNavigate onBeforeRefresh onBeforeSelect": this.commit,
		'onBeforeFocusCanvas': this.notActive
	};
	
	if (Util.isNull(this.grid['selMgr'])) {
		events.onCreateCss = this._onBeforeCreateSelCss;
	}
	else {
		events.onBeforeCreateSelCss = this._onBeforeCreateSelCss;
	}
		
	if (this._options['deleteEnabled']) {
		events["keydownSel_" + Util.keyMapKeydown.del] = this._deleteContents;
	}
	
	if (this._options['editIconEnabled']) {
		var colDefs = this.grid['colDefMgr'].get(),
			len = colDefs.length,
			i = 0;
		for (; i < len; i++) {
			if (Util.isNotNull(colDefs[i].editor)) {
				//events["onRenderCell_" + colDefs[i].key + "_prepend"] = this._onRenderCell;
				events["onRenderHeader_" + colDefs[i].key + "_prepend"] = this._onRenderHeader;
			}
		}
		//events["onBeforeMousedown onBeforeMouseup onBeforeClick"] = this.cancelMouseEvent;
	}
		
	this.grid['event'].bind(events, this);
};

prototype._destroy = function() {
	this._deleteEditor();

	JGM._destroy(this, {
		name: "EditManager",
		path: "editMgr",
		map: "_beginEditKeys _options"
	});
};

prototype._onBeforeCreateSelCss = function() {
	var gridId = "#" + this.grid['mid'] + " .",
		opt = this._options,
		rules = [],
		height = this.grid['view']._getRowInnerHeight();

	rules.push(this.grid['view']._getCellSelector() + "." + opt['classEdit'] + "{background:" + opt['basicBackground'] + "}");
	
	rules.push(gridId + opt['classEdit'] + " input{position:absolute;z-index:10;top:0;padding:0;border:0;margin:0;background:" + opt['basicBackground'] + ";height:" + height + "px;line-height:" + height + "px}");

	if (opt['editableBgEnabled']) {
		rules.push(gridId + opt['classCellEditable'] + "{background:" + opt['editableBg'] + "}");
	}
	if (opt['notEditableBgEnabled']) {
		rules.push(gridId + opt['classCellNotEditable'] + "{background:" + opt['notEditableBg'] + "}");
	}
	if (opt['editIconEnabled']) {
		rules.push(gridId + opt['classEditIcon'] + "{float:left;position:absolute;left:0;top:0;padding:0 " + opt['editIconPadding'] + "px;width:" + opt['editIconWidth'] + "px;height:" + height + "px;background:url(" + opt['urlEditIcon'] + ") no-repeat center transparent}");
	}
	rules.push(gridId + opt['classSuccess'] + "{background:" + opt['successBackground'] + "}");
	rules.push(gridId + opt['classFailure'] + "{background:" + opt['failureBackground'] + "}");
	return rules.join("");
};

prototype.onCreateDynamicCss = function() {
	var cellSel = this.grid['view']._getCellSelector(),
		padding = this.grid['view']._getPadding(),
		colDefs = this.grid['colDefMgr'].get(),
		i = 0,
		str = "";
		
	for (; i < colDefs.length; i++) {
		if (Util.isNotNull(colDefs[i].editor)) {
			str += cellSel + ".k_" + colDefs[i].key + " .basic-editor{width:" + (colDefs[i].width - 2 * padding) + "px}";
		}
	}
		
	return str;
};

prototype._onRenderHeader = function(html) {
	html.push("<span class='" + this._options['classEditIcon'] + "'></span>");
};

prototype._onRenderCell = function(rowIdx, colIdx, datarow, colDef, cellHtml) {
	if (this.grid['dataMgr'].isReal(datarow)) {
		cellHtml.push("<span class='" + this._options['classEditIcon'] + "' title='클릭하여 에디팅을 시작합니다' onclick='JGM.m.EditManager." + this.mid + ".beginEdit(\"" + datarow[this.grid['dataMgr'].idKey] + "\",\"" + colDef['key'] + "\")'></span>");
	}
};

prototype.cancelMouseEvent = function(e) {
	return !Util.hasTagAndClass(e.target, "DIV", this._options['classEditIcon']);
};

prototype.beginEdit = function(id, key) {
	this.begin(JGM.create("Cell", {'grid':this.grid, 'datarow':this.grid['dataMgr'].getById(id), 'colDef':this.grid['colDefMgr'].getByKey(key)}));
};

prototype._dblclickCanvas = function(e, cell) {
	if (!cell.isEdited()) {
		this.begin(cell);
	}
};

prototype._keydownCanvas = function(e) {
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
					this.copy(this.grid['selMgr'].getCell());
				break;
				case "X".charCodeAt(0):
					this.cut(this.grid['selMgr'].getCell());
				break;
				case "V".charCodeAt(0):
					this.paste(this.grid['selMgr'].getCell());
				break;
			}
			*/
			return;
		}
		else if (!e.altKey && Util.isNotNull(this.grid['selMgr'])) {
			if (e.which === Util.keyMapKeydown.del && this._options['deleteEnabled']) {
				this._deleteContent(this.grid['selMgr'].getCell());
			}
			else if (this._beginEditKeys[e.which]) {
				this.begin(this.grid['selMgr'].getCell());
			}
			else if (e.which === Util.keyMapKeydown.f2) {
				e.preventDefault();
				this.begin(this.grid['selMgr'].getCell());
			}
		}
	}
};


/**
현재 에디팅 되고 있는 셀의 존재 여부를 리턴합니다.

@function {boolean} active
@returns {boolean} 에디팅 활성화 여부

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.active = function() {
	return !!this.editor;
};

prototype.notActive = function() {
	return Util.isNull(this.editor);
};

prototype._isEdited = function(cell) {
	return this.active() && this.editor.cell && this.editor.cell.equals(cell);
};

prototype._onGetColCellClass = function(colDef) {
	if (Util.isNotNull(colDef['editor'])) {
		return this._options['classCellEditable'];
	}
	else {
		return this._options['classCellNotEditable'];
	}
};

/**
셀이 현재 에디팅 되고 있는지를 리턴합니다.

@function {boolean} jx.grid.Cell.isEdited
@returns {boolean} 셀의 에디팅 여부

@author 조준호
@since 1.0.0
@version 1.0.0
*/
Cell.prototype.isEdited = function() {
	return this.grid['editMgr']._isEdited(this);
};

/**
셀 데이터 값을 변경합니다.

@function {boolean} jx.grid.Cell.setValue
@param {string} value - 셀 데이터에 새로 넣을 값

@author 조준호
@since 1.0.0
@version 1.0.0
*/
Cell.prototype.setValue = function(value) {
	var datarow = this.getDatarow(),
		key = this.getKey(),
		res;

	if (Util.isNotNullAnd(datarow, key)) {
		res = this.grid['dataMgr'].updateByKey(datarow, key, value, {'noSort':true, 'noFilter':true, 'noRerender':true});
      if (res === true) {
			this.grid['view'].rerenderRow(datarow);
      }
	}
	return res;
};


/**
주어진 셀이 에디트 가능한지를 체크합니다.

@function {} isEditable 
@param {jx.grid.Cell} cell - 에디트가 가능한지 체크할 셀
@returns {boolean} 에디트가 가능하면 true 아니면 false 를 리턴합니다.

@author 조준호
@since 1.1.0
@version 1.1.0
*/
prototype.isEditable = function(cell) {
	if (cell) {
		var colDef = cell.getColDef();
		if (colDef && colDef.editor) {
			var datarow = cell.getDatarow();
			return datarow && this.grid['dataMgr'].isReal(datarow);
		}
	}
	return false;
};

/**
주어진 셀의 에디팅을 시작합니다.

@function {} begin
@param {jx.grid.Cell} cell - 에디팅을 시작할 셀 인스턴스

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.begin = function(cell) {
	if (this.active()) {
		this.commit();
	}
		
	if (this.isEditable(cell)) {
		var node = cell.getNode();
		if (node) {
			var editor = this.editor = cell.getColDef().editor;

			editor.cell = cell;
			editor.grid = this.grid;
			editor.before = node.innerHTML;
			node.innerHTML = editor.edit(cell.getValue());

			cell.get$().addClass(this._options['classEdit']);
			editor.focus();
		}
	}
};

/**
현재 진행중인 에디팅을 취소합니다. 셀 데이터는 변경되지 않습니다.

@function {} cancel

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.cancel = function() {
	if (this.active()) {
		var cell = this.editor.cell;
		if (cell) {
			var node = cell.getNode();
			if (node) {
				node.innerHTML = this.editor.before;
				cell.get$().removeClass(this._options['classEdit']);
			}
		}

		this._deleteEditor();
		this.grid['view'].focus();
	}
};

prototype._deleteEditor = function() {
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

@function {} commit

@author 조준호
@since 1.0.0
@version 1.3.0
*/

/*
 * 1.3.0 editor.valid -> coldef.validator & datamanager.validate
 */
prototype.commit = function() {
	if (!this._beingCommitted && this.active()) {
		this._beingCommitted = true;

		var cell = this.editor.cell;
		if (cell) {
			var node = cell.getNode();
			if (node) {
				var value = this.editor.value(node);

				if (value == null || value == cell.getValue()) {
					this.cancel();
				}
				else {
					var res = cell.setValue(value),
						classRes,
						$cell = cell.get$();
					if (res instanceof Error) {
						this.cancel();
						classRes = this._options['classFailure'];
						$cell.addClass(classRes);
						setTimeout(function() {$cell.removeClass(classRes);}, 1000);
					}
					else {
						this._deleteEditor();
						this.grid['view'].focus();
						this.grid['printMessage']("Successfully Updated.");
						classRes = this._options['classSuccess'];
						$cell.addClass(classRes);
						setTimeout(function() {$cell.removeClass(classRes);}, 1000);
					}
				}
				//$cell.removeClass(this._options['classEdit']);
			}
		}

		this._beingCommitted = false;
	}
};

prototype._deleteContent = function(cell) {
	if (!this.active() && this.isEditable(cell)) {
		var colDef = cell.getColDef();
		if (cell.getValue() !== colDef['defaultValue']) {
			cell.setValue(colDef['defaultValue']);
		}
	}
};

prototype._deleteContents = function(e, selectionRows, selectionCols) {
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
				defaultValue = colDef['defaultValue'];
				key = colDef['key'];

				if (Util.isNull(colDef['editor'])) {
					continue col_loop;
				}
			}

			if (Util.isNotNull(updates[row])) {
				datarow = updates[row].datarow;
			}
			else {
				datarow = cell.getDatarow();
			}

			if (!this.grid['dataMgr'].isReal(datarow)) {
				fakerows[row] = true;
				continue;
			}

			if (defaultValue === datarow[key]) {
				continue;
			}

			if (Util.isNull(updates[row])) {
				updates[row] = {'datarow':datarow, 'change':{}};
				updatelist.push(updates[row]);
			}

			updates[row].change[key] = defaultValue;
		}
	}

	if (updatelist.length !== 0) {
		this.grid['dataMgr'].updateList(updatelist);
	}
};

/**
Editor 모듈. 컬럼 에디팅을 공통적으로 담당하는 모듈입니다.
Editor 클래스. 컬럼 공통 에디터입니다. 컬럼 셀의 에디팅 모드로의 변경시 렌더링,
내용 변경시 값의 validity check 등을 담당합니다.

@class {Editor} jx.grid.Editor

@author 조준호
@since 1.0.0
@version 1.0.0
*/

/**
Editor 컨스트럭터 입니다.

@constructor {Editor} Editor
@param {Object} args - Editor 모듈 파라미터 오브젝트
@... {Function(): string} args.edit - 셀 안에 들어갈 에디터를 렌더링 하는 HTML String 을 리턴하는 function 입니다.
@... {Function()} args.focus - 셀 에디팅이 시작됬을때 에디터를 focus 해주는 function 입니다.
@... {Function(*): boolean} args.valid - 주어진 값이 valid 한지를 리턴합니다.
@... {Object Function} args.value - 에디팅 중인 값을 리턴합니다.
@returns {Editor} Editor 모듈 인스턴스를 리턴합니다.

@author 조준호
@since 1.0.0
@version 1.0.0
*/

function Editor(args) {
	/**
	{@link JGM} 이 할당해주는 Editor 모듈 고유 아이디입니다. 읽기 전용.

	@var {string} mid

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/

	/**
	Editor 를 포함하는 {@link jx.grid.Grid} 인스턴스.

	@var {jx.grid.Grid} grid

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/

	/**
	Editor 가 현재 에디팅 중인 {@link jx.grid.Cell Cell} 인스턴스.

	@var {jx.grid.Cell} cell

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

@function {string} edit
@param {?} value - 셀의 현재 데이터 값입니다.
@returns {Editor} 셀 노드 안에 들어갈 HTML 코드

@author 조준호
@since 1.0.0
@version 1.1.1
*/
prototype.edit = function(value) {
	// added a style so that the edit box does not go out of the cell when right-aligned in IE 7/8
	return "<input type='text' class='basic-editor' value='" + (value == null ? '' : value) + "' style='position:relative'/>";
};

/**
셀 에디팅 활성화 시, 생성된 에디터 HTML 노드를 focus 해줍니다.

@function {} focus

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.focus = function() {
	var cell = this.cell;
	if (cell) {
		var node = cell.getNode();
		if (node) {
			node = node.childNodes[0];
			if (node) {
				if (node.setActive) {
					try {node.setActive();} catch(e){}
				}
				node.focus();
				if (document.activeElement !== node) {
					cell.get$().children(":eq(0)").focus();
				}
			}
		}
	}
};

/**
셀 변경 내용 저장시에 변경된 내용이 valid 한지를 리턴합니다. false 를 리턴할 경우
셀 에디팅은 취소되고 true 를 리턴할경우 변경된 내용이 저장됩니다.

@function {boolean} valid
@param {?} value - 셀에 저장될 내용 {@link value} 함수에서 리턴되는 값입니다.
@returns {boolean} 셀 변경 내용 저장시에 변경된 내용의 validity

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

@function {boolean} value
@param {DOMElement} wrapperNode - 에디터 DOM 노드를 포함하는 셀 DOM 노드 입니다.
@returns {?} 생성된 셀 에디터의 현재 데이터 값

@author 조준호
@since 1.0.0
@version 1.1.1
*/
prototype.value = function(wrapperNode) {
	if (wrapperNode) {
		var child = wrapperNode.childNodes[0];
		if (child) {
			return child.value;
		}
	}
	return null;
};

/**
현재 데이터의 path 스트링입니다. 이 값을 eval() 하면 이 에디터가 리턴됩니다.

@function {string} path
@returns {string} 현재 데이터의 path 스트링

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
	return "<input type='text' class='basic-editor' onkeydown='if (!jx.grid.Editor.isNumberKey(event.which)) return false;' value='" + Util.ifNull(value, "") + "'/>";
};

Editor.floatKeys = Util.which(["number", ".", "del", "backspace"]);

Editor.isFloatKey = function(keyCode) {
	return this.floatKeys[keyCode] ? true : false;
};

Editor.floatEdit = function(cell) {
	var value = cell.getValue();
	return "<input type='text' class='basic-editor' onkeydown='if (!jx.grid.Editor.isFloatKey(event.which)) return false;' value='" + Util.ifNull(value, "") + "'/>";
};

Editor.alphabetKeys = Util.which(["alphabet", "del", "backspace", "space"]);

Editor.isAlphabet = function(keyCode) {
	return this.alphabetKeys[keyCode] ? true : false;
};

Editor.alphabetEdit = function(cell) {
	var value = cell.getValue();
	return "<input type='text' class='basic-editor' onkeydown='if (!jx.grid.Editor.isAlphabet(event.which)) return false;' value='" + Util.ifNull(value, "") + "'/>";
};
}());
