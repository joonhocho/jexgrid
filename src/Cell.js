goog.require('jx.util');
goog.require('jx.grid');
goog.require('jx.grid.Grid');
goog.require('jx.grid.ColumnManager');
goog.require('jx.data.DataManager');

goog.provide('jx.grid.Cell');

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

goog.exportSymbol('jx.grid.Cell', Cell);
JGM._add("Cell", Cell);


/**
Cell ���. �׸��� �� ���� ������� ������ �Լ����� ���� ����Դϴ�.
@module jx.grid.Cell
@requires jx.grid
@requires jx.grid.Grid
@requires jx.grid.ColDefManager
@requires jx.grid.DataManager
@requires jx.grid.ViewportManager
 */

/**
Cell Ŭ����. �׸��� �� ���� ������� ������ �Լ����� ���� ����Դϴ�.

@class {Cell} JGM.Cell

@author ����ȣ
@since 1.0.0
@version 1.0.0
*/

/**
Cell ����Ʈ���� �Դϴ�.

@constructor {Cell} Cell
@paramset �� �ε����� ����� ���
@param {Object} args - Cell ��� �Ķ���� ������Ʈ
@... {JGM.Grid} args.grid - ���� �����ϴ� {@link JGM.Grid Grid} �ν��Ͻ�
@... {number} args.row - ���� �ο� �ε���
@... {number} args.col - ���� �÷� �ε���
@paramset �� DOM ��带 ����� ���
@param {Object} args - Cell ��� �Ķ���� ������Ʈ
@... {JGM.Grid} args.grid - ���� �����ϴ� {@link JGM.Grid Grid} �ν��Ͻ�
@... {DOMElement} args.node - ���� DOM ���
@paramset �� DOM ��带 ���� jQuery ������Ʈ�� ����� ���
@param {Object} args - Cell ��� �Ķ���� ������Ʈ
@... {JGM.Grid} args.grid - ���� �����ϴ� {@link JGM.Grid Grid} �ν��Ͻ�
@... {jQuery} args.$ - ���� DOM ��带 ���� jQuery �ν��Ͻ�
@paramset �� �ο� �����Ϳ� �÷� ���Ǹ� ����� ���
@param {Object} args - Cell ��� �Ķ���� ������Ʈ
@... {JGM.Grid} args.grid - ���� �����ϴ� {@link JGM.Grid Grid} �ν��Ͻ�
@... {Object} args.datarow - ���� �ο� ������ ������Ʈ
@... {Object} args.colDef - ���� �÷� ���� ������Ʈ
@paramset jQuery Event�� ����� ���
@param {Object} args - Cell ��� �Ķ���� ������Ʈ
@... {JGM.Grid} args.grid - ���� �����ϴ� {@link JGM.Grid Grid} �ν��Ͻ�
@... {jQuery.Event} args.event - �� DOM ��忡 ���ϴ� DOM ��带 target ����
���� jQuery Event ������Ʈ
@returns {Cell} Cell ��� �ν��Ͻ��� �����մϴ�.

@author ����ȣ
@since 1.0.0
@version 1.0.0
*/
function Cell(args) {
	/**
	���� �����ϴ� {@link JGM.Grid Grid} �ν��Ͻ�.

	@var {JGM.Grid} grid

	@author ����ȣ
	@since 1.0.0
	@version 1.0.0
	*/
	this.grid = args.grid;

	this.__datarow_h__ = args.datarow;

	this.__colDef_i__ = args.colDef;

	this.__init(args);
}


Cell.getInstance = function(args) {
	return new Cell(args);
};

var prototype = Cell.prototype;

prototype.__init = function(args) {
   if (Util.isNull(this.__datarow_h__)) {
      if (Util.isNotNull(args.row)) {
         this.__datarow_h__ = this.grid.dataMgr.getByIdx(args.row);
      }
      else if (Util.isNotNull(args.node)) {
         this.__datarow_h__ = this.grid.dataMgr.getByNode(args.node.parentNode);
      }
      else if (Util.isNotNull(args.$)) {
         this.__datarow_h__ = this.grid.dataMgr.getByNode(args.$[0].parentNode);
      }
   }
   if (Util.isNull(this.__colDef_i__)) {
      if (Util.isNotNull(args.col)) {
         this.__colDef_i__ = this.grid.colDefMgr.get(args.col);
      }
      else if (Util.isNotNull(args.node)) {
         this.__colDef_i__ = this.grid.colDefMgr.get(Util.index(args.node));
      }
      else if (Util.isNotNull(args.$)) {
         this.__colDef_i__ = this.grid.colDefMgr.get(Util.index(args.$[0]));
      }
   }
	if (Util.isNullOr(this.__datarow_h__, this.__colDef_i__) && Util.isNotNull(args.event)) {
      var node = this.grid.view.__getClosestCell_Az__(args.event.target);
      if (Util.isNotNull(node)) {
         this.__datarow_h__ = this.grid.dataMgr.getByNode(node.parentNode);
         this.__colDef_i__ = this.grid.colDefMgr.get(Util.index(node));
      }
	}
};

prototype.destroy = function() {
	delete this.grid;
	delete this.__datarow_h__;
	delete this.__colDef_i__;
};


/**
���� �ο� �ε����� �����մϴ�.

@function {number} getRowIdx
@returns {number} ���� �ο� �ε���

@author ����ȣ
@since 1.0.0
@version 1.0.0
*/
prototype.getRowIdx = function() {
	if (Util.isNotNull(this.__datarow_h__)) {
		return this.grid.dataMgr.getIdx(this.__datarow_h__);
	}
};


/**
���� �÷� �ε����� �����մϴ�.

@function {number} getColIdx
@returns {number} ���� �÷� �ε���

@author ����ȣ
@since 1.0.0
@version 1.0.0
*/
prototype.getColIdx = function() {
	if (Util.isNotNull(this.__colDef_i__)) {
		return this.grid.colDefMgr.getIdx(this.__colDef_i__);
	}
};


/**
���� DOM ��带 �����մϴ�.

@function {DOMElement} getNode
@returns {DOMElement} ���� DOM ���

@author ����ȣ
@since 1.0.0
@version 1.0.0
*/
prototype.getNode = function() {
	if (Util.isNotNullAnd(this.__datarow_h__, this.__colDef_i__)) {
		return this.grid.view.getCellByIdAndKey(this.grid.dataMgr.getId(this.__datarow_h__), this.__colDef_i__.key);
	}
};

prototype.getRowNode = function() {
	return this.grid.view.getRow(this.__datarow_h__);
};

/**
���� DOM ��带 ���� jQuery ������Ʈ�� �����մϴ�.

@function {jQuery} get$
@returns {jQuery} ���� DOM ��带 ���� jQuery ������Ʈ

@author ����ȣ
@since 1.0.0
@version 1.0.0
*/
prototype.get$ = function() {
   var cellNode = this.getNode();
   if (cellNode !== undefined) {
      return $(cellNode);
   }
   return $([]);
};


/**
���� ������ �ο츦 �����մϴ�.

@function {Object} getDatarow
@returns {Object} ���� ������ �ο�

@author ����ȣ
@since 1.0.0
@version 1.0.0
*/
prototype.getDatarow = function() {
   return this.__datarow_h__;
};


/**
���� �÷� ���� ������Ʈ�� �����մϴ�.

@function {Object} getColDef
@returns {Object} ���� �÷� ���� ������Ʈ

@author ����ȣ
@since 1.0.0
@version 1.0.0
*/
prototype.getColDef = function() {
   return this.__colDef_i__;
};


/**
���� �÷� Ű�� �����մϴ�.

@function {string} getKey
@returns {string} ���� �÷� Ű

@author ����ȣ
@since 1.0.0
@version 1.0.0
*/
prototype.getKey = function() {
	if (Util.isNotNull(this.__colDef_i__)) {
		return this.__colDef_i__.key;
	}
};


prototype.getId = function() {
   return this.grid.dataMgr.getId(this.__datarow_h__);
};


/**
���� ������ ���� �����մϴ�.

@function {string} getValue
@returns {string} ���� ������ ��

@author ����ȣ
@since 1.0.0
@version 1.0.0
*/
prototype.getValue = function() {
	if (Util.isNotNullAnd(this.__datarow_h__, this.__colDef_i__)) {
		return this.__datarow_h__[this.__colDef_i__.key];
	}
};


/**
���� DOM ��尡 valid ������ �����մϴ�.

@function {boolean} isValid
@returns {boolean} ���� DOM ����� validity

@author ����ȣ
@since 1.0.0
@version 1.0.0
*/
prototype.isValid = function() {
	return Util.isNotNull(this.getNode());
};


/**
���� DOM ��尡 invalid ������ �����մϴ�.

@function {boolean} isInvalid
@returns {boolean} ���� DOM ����� invalidity

@author ����ȣ
@since 1.0.0
@version 1.0.0
*/
prototype.isInvalid = function() {
	return Util.isNull(this.getNode());
};


/**
���� jQuery ������Ʈ�� invalid ������ �����մϴ�.

@function {boolean} isEmpty$
@returns {boolean} ���� jQuery ������Ʈ�� ����� ��� true, �ƴҰ�� false ��
�����մϴ�.

@author ����ȣ
@since 1.0.0
@version 1.0.0
*/
prototype.isEmpty$ = function() {
	return this.get$().length === 0;
};


/**
���� jQuery ������Ʈ�� valid ������ �����մϴ�.

@function {boolean} has$
@returns {boolean} ���� jQuery ������Ʈ�� ����� ��� false, �ƴҰ�� true ��
�����մϴ�.

@author ����ȣ
@since 1.0.0
@version 1.0.0
*/
prototype.has$ = function() {
	return this.get$().length !== 0;
};


/**
�־��� ���� �ν��Ͻ��� ���� ���� �ν��Ͻ��� ���������� �����մϴ�.

@function {boolean} equals
@returns {boolean} ���� ���� �����͸� ���� ��� true, �ƴ� ��� false ��
�����մϴ�.

@author ����ȣ
@since 1.0.0
@version 1.0.0
*/
prototype.equals = function(cell) {
	return Util.isNotNull(cell) &&
		Util.isNotNull(this.__datarow_h__) && this.__datarow_h__ === cell.getDatarow() &&
		Util.isNotNull(this.__colDef_i__) && this.__colDef_i__ === cell.getColDef();
};

}());