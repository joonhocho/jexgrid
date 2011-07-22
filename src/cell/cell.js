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

/**
Cell 모듈. 그리드 셀 관련 정보들과 편리한 함수들을 가진 모듈입니다.
@module Cell
@requires JGM
@requires JGM.Grid
@requires JGM.ColDefManager
@requires JGM.DataManager
@requires JGM.EventManager
@requires JGM.ViewportManager
 */

/**
Cell 클래스. 그리드 셀 관련 정보들과 편리한 함수들을 가진 모듈입니다.

@class {public Cell} JGM.Cell

@author 조준호
@since 1.0.0
@version 1.0.0
*/

/**
Cell 컨스트럭터 입니다.

@constructor {public Cell} Cell
@paramset 셀 인덱스를 사용할 경우
@param {Object} args - Cell 모듈 파라미터 오브젝트
@... {JGM.Grid} args.grid - 셀을 포함하는 {@link JGM.Grid Grid} 인스턴스
@... {int} args.row - 셀의 로우 인덱스
@... {int} args.col - 셀의 컬럼 인덱스
@paramset 셀 DOM 노드를 사용할 경우
@param {Object} args - Cell 모듈 파라미터 오브젝트
@... {JGM.Grid} args.grid - 셀을 포함하는 {@link JGM.Grid Grid} 인스턴스
@... {DOMElement} args.node - 셀의 DOM 노드
@paramset 셀 DOM 노드를 가진 jQuery 오브젝트를 사용할 경우
@param {Object} args - Cell 모듈 파라미터 오브젝트
@... {JGM.Grid} args.grid - 셀을 포함하는 {@link JGM.Grid Grid} 인스턴스
@... {jQuery} args.$ - 셀의 DOM 노드를 가진 jQuery 인스턴스
@paramset 셀 로우 데이터와 컬럼 정의를 사용할 경우
@param {Object} args - Cell 모듈 파라미터 오브젝트
@... {JGM.Grid} args.grid - 셀을 포함하는 {@link JGM.Grid Grid} 인스턴스
@... {Object} args.datarow - 셀의 로우 데이터 오브젝트
@... {Object} args.colDef - 셀의 컬럼 정의 오브젝트
@paramset jQuery Event를 사용할 경우
@param {Object} args - Cell 모듈 파라미터 오브젝트
@... {JGM.Grid} args.grid - 셀을 포함하는 {@link JGM.Grid Grid} 인스턴스
@... {jQuery.Event} args.event - 셀 DOM 노드에 속하는 DOM 노드를 target 으로
가진 jQuery Event 오브젝트
@returns {Cell} Cell 모듈 인스턴스를 리턴합니다.

@author 조준호
@since 1.0.0
@version 1.0.0
*/
function Cell(args) {
	/**
	셀을 포함하는 {@link JGM.Grid Grid} 인스턴스.

	@var {public JGM.Grid} grid

	@author 조준호
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
셀의 로우 인덱스를 리턴합니다.

@function {public int} getRowIdx
@returns {int} 셀의 로우 인덱스

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.getRowIdx = function() {
	if (Util.isNotNull(this.__datarow_h__)) {
		return this.grid.dataMgr.getIdx(this.__datarow_h__);
	}
};


/**
셀의 컬럼 인덱스를 리턴합니다.

@function {public int} getColIdx
@returns {int} 셀의 컬럼 인덱스

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.getColIdx = function() {
	if (Util.isNotNull(this.__colDef_i__)) {
		return this.grid.colDefMgr.getIdx(this.__colDef_i__);
	}
};


/**
셀의 DOM 노드를 리턴합니다.

@function {public DOMElement} getNode
@returns {DOMElement} 셀의 DOM 노드

@author 조준호
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
셀의 DOM 노드를 가진 jQuery 오브젝트를 리턴합니다.

@function {public jQuery} get$
@returns {jQuery} 셀의 DOM 노드를 가진 jQuery 오브젝트

@author 조준호
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
셀의 데이터 로우를 리턴합니다.

@function {public Object} getDatarow
@returns {Object} 셀의 데이터 로우

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.getDatarow = function() {
   return this.__datarow_h__;
};


/**
셀의 컬럼 정의 오브젝트를 리턴합니다.

@function {public Object} getColDef
@returns {Object} 셀의 컬럼 정의 오브젝트

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.getColDef = function() {
   return this.__colDef_i__;
};


/**
셀의 컬럼 키를 리턴합니다.

@function {public String} getKey
@returns {String} 셀의 컬럼 키

@author 조준호
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
셀의 데이터 값을 리턴합니다.

@function {public String} getValue
@returns {String} 셀의 데이터 값

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.getValue = function() {
	if (Util.isNotNullAnd(this.__datarow_h__, this.__colDef_i__)) {
		return this.__datarow_h__[this.__colDef_i__.key];
	}
};


/**
셀의 DOM 노드가 valid 한지를 리턴합니다.

@function {public Boolean} isValid
@returns {Boolean} 셀의 DOM 노드의 validity

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.isValid = function() {
	return Util.isNotNull(this.getNode());
};


/**
셀의 DOM 노드가 invalid 한지를 리턴합니다.

@function {public Boolean} isInvalid
@returns {Boolean} 셀의 DOM 노드의 invalidity

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.isInvalid = function() {
	return Util.isNull(this.getNode());
};


/**
셀의 jQuery 오브젝트가 invalid 한지를 리턴합니다.

@function {public Boolean} isEmpty$
@returns {Boolean} 셀의 jQuery 오브젝트가 비었을 경우 true, 아닐경우 false 를
리턴합니다.

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.isEmpty$ = function() {
	return this.get$().length === 0;
};


/**
셀의 jQuery 오브젝트가 valid 한지를 리턴합니다.

@function {public Boolean} has$
@returns {Boolean} 셀의 jQuery 오브젝트가 비었을 경우 false, 아닐경우 true 를
리턴합니다.

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.has$ = function() {
	return this.get$().length !== 0;
};


/**
주어진 셀의 인스턴스가 현재 셀의 인스턴스와 동일한지를 리턴합니다.

@function {public Boolean} equals
@returns {Boolean} 서로 같은 데이터를 가질 경우 true, 아닐 경우 false 를
리턴합니다.

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.equals = function(cell) {
	return Util.isNotNull(cell) &&
		Util.isNotNull(this.__datarow_h__) && this.__datarow_h__ === cell.getDatarow() &&
		Util.isNotNull(this.__colDef_i__) && this.__colDef_i__ === cell.getColDef();
};

JGM._add("Cell", Cell);
}());
