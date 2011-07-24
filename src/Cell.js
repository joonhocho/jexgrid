goog.require('jx.util');
goog.require('jx.lang.Disposable');
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
	var JGM = goog.getObjectByName('jx.grid'),
	Util = goog.getObjectByName('jx.util'),
	Disposable = goog.getObjectByName('jx.lang.Disposable');

goog.exportSymbol('jx.grid.Cell', Cell);
JGM._add("Cell", Cell);


/**
  Cell 모듈. 그리드 셀 관련 정보들과 편리한 함수들을 가진 모듈입니다.
  @module jx.grid.Cell
  @requires jx.grid
  @requires jx.grid.Grid
  @requires jx.grid.ColDefManager
  @requires jx.grid.DataManager
  @requires jx.grid.ViewportManager
  */

/**
  Cell 클래스. 그리드 셀 관련 정보들과 편리한 함수들을 가진 모듈입니다.

  @class {Cell} JGM.Cell

  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */

/**
  Cell 컨스트럭터 입니다.

  @constructor {Cell} Cell
  @paramset 셀 인덱스를 사용할 경우
  @param {Object} args - Cell 모듈 파라미터 오브젝트
  @... {JGM.Grid} args.grid - 셀을 포함하는 {@link JGM.Grid Grid} 인스턴스
  @... {number} args.row - 셀의 로우 인덱스
  @... {number} args.col - 셀의 컬럼 인덱스
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

	  @var {JGM.Grid} grid

	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	this.grid = args['grid'];

	this._datarow = args['datarow'];

	this._colDef = args['colDef'];

	this.__init(args);
}

goog.inherits(Cell, Disposable);


Cell.getInstance = function(args) {
	return new Cell(args);
};

var prototype = Cell.prototype,
	sdispose = Disposable.prototype.dispose;

prototype.dispose = function() {
	sdispose.call(this);
}

prototype.__init = function(args) {
	if (Util.isNull(this._datarow)) {
		if (Util.isNotNull(args['row'])) {
			this._datarow = this.grid['dataMgr'].getByIdx(args['row']);
		}
		else if (Util.isNotNull(args['node'])) {
			this._datarow = this.grid['dataMgr'].getByNode(args['node'].parentNode);
		}
		else if (Util.isNotNull(args['$'])) {
			this._datarow = this.grid['dataMgr'].getByNode(args['$'][0].parentNode);
		}
	}
	if (Util.isNull(this._colDef)) {
		if (Util.isNotNull(args['col'])) {
			this._colDef = this.grid['colDefMgr'].get(args['col']);
		}
		else if (Util.isNotNull(args['node'])) {
			this._colDef = this.grid['colDefMgr'].get(Util.index(args['node']));
		}
		else if (Util.isNotNull(args['$'])) {
			this._colDef = this.grid['colDefMgr'].get(Util.index(args['$'][0]));
		}
	}
	if (Util.isNullOr(this._datarow, this._colDef) && Util.isNotNull(args['event'])) {
		var node = this.grid['view']._getClosestCell(args['event'].target);
		if (Util.isNotNull(node)) {
			this._datarow = this.grid['dataMgr'].getByNode(node.parentNode);
			this._colDef = this.grid['colDefMgr'].get(Util.index(node));
		}
	}
};

prototype.destroy = function() {
	this.dispose();
};


/**
  셀의 로우 인덱스를 리턴합니다.

  @function {number} getRowIdx
  @returns {number} 셀의 로우 인덱스

  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
prototype.getRowIdx = function() {
	if (Util.isNotNull(this._datarow)) {
		return this.grid['dataMgr'].getIdx(this._datarow);
	}
};


/**
  셀의 컬럼 인덱스를 리턴합니다.

  @function {number} getColIdx
  @returns {number} 셀의 컬럼 인덱스

  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
prototype.getColIdx = function() {
	if (Util.isNotNull(this._colDef)) {
		return this.grid['colDefMgr'].getIdx(this._colDef);
	}
};


/**
  셀의 DOM 노드를 리턴합니다.

  @function {DOMElement} getNode
  @returns {DOMElement} 셀의 DOM 노드

  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
prototype.getNode = function() {
	if (Util.isNotNullAnd(this._datarow, this._colDef)) {
		return this.grid['view'].getCellByIdAndKey(this.grid['dataMgr'].getId(this._datarow), this._colDef.key);
	}
};

prototype.getRowNode = function() {
	return this.grid['view'].getRow(this._datarow);
};

/**
  셀의 DOM 노드를 가진 jQuery 오브젝트를 리턴합니다.

  @function {jQuery} get$
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

  @function {Object} getDatarow
  @returns {Object} 셀의 데이터 로우

  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
prototype.getDatarow = function() {
	return this._datarow;
};


/**
  셀의 컬럼 정의 오브젝트를 리턴합니다.

  @function {Object} getColDef
  @returns {Object} 셀의 컬럼 정의 오브젝트

  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
prototype.getColDef = function() {
	return this._colDef;
};


/**
  셀의 컬럼 키를 리턴합니다.

  @function {string} getKey
  @returns {string} 셀의 컬럼 키

  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
prototype.getKey = function() {
	if (Util.isNotNull(this._colDef)) {
		return this._colDef.key;
	}
};


prototype.getId = function() {
	return this.grid['dataMgr'].getId(this._datarow);
};


/**
  셀의 데이터 값을 리턴합니다.

  @function {string} getValue
  @returns {string} 셀의 데이터 값

  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
prototype.getValue = function() {
	if (Util.isNotNullAnd(this._datarow, this._colDef)) {
		return this._datarow[this._colDef.key];
	}
};


/**
  셀의 DOM 노드가 valid 한지를 리턴합니다.

  @function {boolean} isValid
  @returns {boolean} 셀의 DOM 노드의 validity

  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
prototype.isValid = function() {
	return Util.isNotNull(this.getNode());
};


/**
  셀의 DOM 노드가 invalid 한지를 리턴합니다.

  @function {boolean} isInvalid
  @returns {boolean} 셀의 DOM 노드의 invalidity

  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
prototype.isInvalid = function() {
	return Util.isNull(this.getNode());
};


/**
  셀의 jQuery 오브젝트가 invalid 한지를 리턴합니다.

  @function {boolean} isEmpty$
  @returns {boolean} 셀의 jQuery 오브젝트가 비었을 경우 true, 아닐경우 false 를
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

  @function {boolean} has$
  @returns {boolean} 셀의 jQuery 오브젝트가 비었을 경우 false, 아닐경우 true 를
  리턴합니다.

  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
prototype.has$ = function() {
	return this.get$().length !== 0;
};

}());
