goog.require('engine_extension');
goog.require('jx.util');
goog.require('jx.grid');
goog.require('jx.grid.BaseModule');
goog.require('jx.grid.Grid');
goog.require('jx.grid.ColumnManager');
goog.require('jx.grid.CheckManager');
goog.require('jx.grid.Collapser');
goog.require('jx.data.DataManager');
goog.require('jx.struct.Tree');
goog.require('jx.struct.TreeNode');
goog.provide('jx.grid.ColumnGroup');
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
	Collapser = goog.getObjectByName('jx.grid.Collapser');
 goog.exportSymbol('jx.grid.ColumnGroup', ColumnGroup);
/**
ColumnGroup 모듈. 트리 구조의 데이터를 담당하는 모듈입니다.
ColumnGroup 클래스. 트리 구조의 데이터를 담당하는 모듈 클래스 입니다. 구조에 맞게
데이터를 재정렬해주고 자식들이 있는 노드의 펼치기/접기의 기능을 지원합니다.
@class {ColumnGroup} jx.grid.ColumnGroup
@author 조준호
@since 1.1.0
@version 1.2.2
*/
/**
ColumnGroup 컨스트럭터 입니다.
@constructor {ColumnGroup} ColumnGroup
@param {Object} args - ColumnGroup 모듈 파라미터 오브젝트
@... {jx.grid.Grid} args.grid - ColumnGroup 를 포함하는 {@link jx.grid.Grid} 인스턴스
@... {Object} args.options - ColumnGroup 옵션 오브젝트
@returns {ColumnGroup} ColumnGroup 모듈 인스턴스를 리턴합니다.
@author 조준호
@since 1.1.0
@version 1.1.0
*/
function ColumnGroup(args) {
	/**
	{@link JGM} 이 할당해주는 ColumnGroup 모듈 고유 아이디입니다. 읽기 전용.
	@var {string} mid
	@author 조준호
	@since 1.1.0
	@version 1.1.0
	*/
	this.mid = args.mid;
	/**
	ColumnGroup 를 포함하는 {@link jx.grid.Grid} 인스턴스.
	@var {jx.grid.Grid} grid
	@author 조준호
	@since 1.1.0
	@version 1.1.0
	*/
	this.grid = args.grid;
	/**
	그룹 형식의 데이터를 관리하는 {@link jx.grid.ColumnGroup ColumnGroup} 인스턴스 입니다.
	@var {jx.grid.ColumnGroup} jx.grid.Grid.colGroup
	@author 조준호
	@since 1.1.0
	@version 1.1.0
	*/
	this.grid['colGroup'] = this;
	/**
	ColumnGroup 모듈의 기본 옵션 값들을 정의합니다.
	@type {Object} options
	@private
	@author 조준호
	@since 1.1.0
	@version 1.1.0
	*/
	var options = {
		/**
		grouping 을 할 컬럼의 key 입니다. 반드시 입력해야합니다.
		<br>기본값:<code>undefined</code>
		@type {string} jx.grid.ColumnGroup.options.key
		@private
		@author 조준호
		@since 1.1.0
		@version 1.1.0
		*/
		'key':		undefined,
		/**
		패딩 처리를 할 컬럼들의 키들을 가진 어레이입니다. 그룹의 데이터들이 여기에
		지정되는 컬럼들의 값이 모두 같을 때 사용합니다.
		<br>기본값:<code>[]</code>
		@type {Array.<string>=} jx.grid.ColumnGroup.options.padColKeys
		@private
		@author 조준호
		@since 1.1.0
		@version 1.1.0
		*/
		'padColKeys': [],
		/**
		합계를 구할 컬럼들의 키들을 가진 어레이입니다. 여기에 지정되는 컬럼들의
		소계 값이 표시됩니다.
		<br>기본값:<code>[]</code>
		@type {Array.<string>=} jx.grid.ColumnGroup.options.sumColKeys
		@private
		@author 조준호
		@since 1.1.0
		@version 1.1.0
		*/
		'sumColKeys': [],
		/**
		소계 부분의 prefix 를 정합니다.
		<br>기본값:<code>"합계: "</code>
		@type {string=} jx.grid.ColumnGroup.options.prefix
		@private
		@author 조준호
		@since 1.1.0
		@version 1.1.0
		*/
		'prefix': "합계: ",
		/**
		데이터 관리에 사용할 {@link jx.grid.Collapser Collapser} 에 넘겨줄 옵션 오브젝트입니다.
		<br>기본값:<code>{ indentSize:0 }</code>
		@type {Object=} jx.grid.ColumnGroup.options.Collapser
		@private
		@see jx.grid.Collapser.options
		@author 조준호
		@since 1.1.0
		@version 1.1.0
		*/
		'Collapser': {
			'indentSize':0
		}
	};
	this._options = JGM._extend(options, args['options']);
	this._options['Collapser']['key'] = this._options['key'];
	/**
	ColumnGroup 과 연동된 {@link jx.grid.Collapser Collapser} 입니다.
	@var {jx.grid.Collapser} collapser
	@author 조준호
	@since 1.1.0
	@version 1.1.0
	*/
	this.collapser;
	this._parentMap = {};
	this.__init();
}
ColumnGroup.getInstance = function(args) {
	return new ColumnGroup(args);
};
var prototype = ColumnGroup.prototype;
prototype.__init = function() {
	var grid = this.grid,
		datam = grid.dataMgr,
		collapser,
		opt = this._options;
	this.bindEvents();
	/**
	ColumnGroup 와 연동된 {@link jx.grid.Collapser Collapser} 입니다.
	@var {jx.grid.Collapser} collapser
	@author 조준호
	@since 1.1.0
	@version 1.1.0
	*/
	collapser = this.collapser = JGM.create("Collapser", {grid:grid, 'options':opt['Collapser']});
	delete opt['Collapser'];
	this._processData(datam.all);
	collapser.__init();
	datam.refresh();
};
prototype.bindEvents = function() {
	var events;
	events = {
		'onBeforeSetDatalist': this._removeAll,
		"onAfterSetDatalist onAddDatalist": this._processData,
		'onAddDatarow': this._onAddDatarow,
		'onUpdateDatarow': this._onUpdateDatarow,
		'onUpdateDatalist': this._onUpdateDatalist,
		'onRemoveDatarow': this._onRemoveDatarow,
		'onRemoveDatalist': this._onRemoveDatalist,
		'onDestroy': this._destroy
	};
	
	if (this._options['sumColKeys']['length'] !== 0) {
		var mid = this.mid,
		notReal = this.grid['dataMgr']._consts._notReal,
		i = 0,
		sumfn,
		sumkeys = this._options['sumColKeys'],
		prefix = this._options['prefix'],
		len = sumkeys.length;
		sumfn = function (rowIdx, colIdx, datarow, colDef, cellHtml) {
			if (datarow[notReal] === mid) {
				cellHtml.push(prefix);
			}
		};
		for (; i < len; i++) {
			events["onRenderCell_" + sumkeys[i] + "_prepend"] = sumfn;
		}
		events.onCollapserTreeChange = this._onCollapserTreeChange;
	}
	this.grid['event'].bind(events, this);
};
prototype._destroy = function() {
	JGM._destroy(this, {
		name: "ColumnGroup",
		path: "colGroup",
		property: "collapser",
		map: "_parentMap _options"
	});
};
prototype._processData = function(datalist) {
	var len = datalist.length,
		key = this._options['key'],
		padColKeys = this._options['padColKeys'],
		datam = this.grid['dataMgr'],
		notReal = datam._consts._notReal,
		idKey = datam.idKey,
		collapser = this.collapser,
		nodeKey = collapser._tree._options['nodeKey'],
		parentKey = collapser._tree._options['parentKey'],
		newParents = [],
		i = 0;
	for (; i < len; i++) {
		this._addData(datalist[i], key, idKey, notReal, nodeKey, parentKey, padColKeys, newParents);
	}
	if (newParents.length !== 0) {
		datam.all.pushList(newParents);
		datam.makeCompositeKeyList(newParents, true);
		datam.addListToIdMap(newParents);
		if (Util.isNotNull(collapser)) {
			collapser._onAddDatalist(newParents);
		}
	}
	return newParents;
};
prototype._addData = function(data, key, idKey, notReal, nodeKey, parentKey, padColKeys, newParents) {
	var keyVal = data[key],
		parent,
		map = this._parentMap;
	if (!map.hasOwnProperty(keyVal)) {
		parent = this._makeParent(data, key, idKey, keyVal, notReal, nodeKey, padColKeys);
		newParents.push(parent);
		map[keyVal] = parent;
	}
	else {
		parent = map[keyVal];
	}
	data[nodeKey] = data[idKey];
	data[parentKey] = this.mid + keyVal;
};
prototype._makeParent = function(data, key, idKey, keyVal, notReal, nodeKey, padColKeys) {
	var parent = {},
		j = 0,
		len = padColKeys.length;
	parent[notReal] = this.mid;
	parent[nodeKey] = this.mid + keyVal;
	parent[key] = keyVal;
	parent[idKey] = (this.grid['colDefMgr'].getByKey(key).name || key) + ": " + keyVal;
	for (; j < len; j++) {
		parent[padColKeys[j]] = data[padColKeys[j]];
	}
	return parent;
};
prototype._isParent = function(datarow) {
	return datarow[this.grid['dataMgr']._consts._notReal] === this.mid;
};
prototype._removeAll = function(datalist) {
	this._parentMap = {};
};
prototype._onAddDatarow = function(datarow) {
	var newParents = [],
		opt = this._options,
		datam = this.grid['dataMgr'],
		collapser = this.collapser,
		ctopt = collapser._tree._options;
	this._addData(
		datarow,
		opt['key'],
		datam.idKey,
		datam._consts._notReal,
		ctopt['nodeKey'],
		ctopt['parentKey'],
		opt['padColKeys'],
		newParents
	);
	if (newParents.length !== 0) {
		var parent = newParents[0];
		datam.all.push(parent);
		datam.makeCompositeKey(parent, true);
		datam.addToIdMap(parent);
		collapser._onAddDatarow(parent);
	}
};
prototype._onUpdateDatarow = function(datarow, change, before) {
	if (change.hasOwnProperty(this._options['key'])) {
		var key = this._options['key'],	// group key
			newkey = change[key],	// new group key value
			oldkey = before[key],	// old group key value
			mid = this.mid,	// colgroup's module id
			collapser = this.collapser,	// collapser used by colgroup
			tree = collapser._tree,	// tree used by collapser
			tpkey = tree._options['parentKey'],	// tree's parent key
			parKey = {},	// change that contains new parent key to be passed to collapser
			oldParKey = {},	// before that contains old parent key to be passed to collapser
			pmap = this._parentMap,	// group parent map
			oldp;	// old tree parent of currently modified record
		// add new parent group if not exists already
		if (!pmap.hasOwnProperty(newkey)) {
			this._onAddDatarow(datarow);
		}
		// pass parent key info to collapser
		// this will move current data's tree node from old to new parent tree node
		parKey[tpkey] = mid + newkey;
		oldParKey[tpkey] = mid + oldkey;
		collapser._onUpdateDatarow(datarow, parKey, oldParKey);
		// get old parent tree node and delete the group parent if it has no children members anymore
		oldp = tree.getNode(pmap[oldkey]);
		if (oldp.children.length === 0) {
			this.grid['dataMgr'].all.remove(oldp.data);
			delete pmap[oldkey];
			collapser._onRemoveDatarow(oldp.data);
		}
	}
};
prototype._onUpdateDatalist = function(datalist, changes, befores) {
	var key = this._options['key'],	// group key
		mid = this.mid,	// colgroup's module id
		collapser = this.collapser,	// collapser used by colgroup
		tree = collapser._tree,	// tree used by collapser
		tpkey = tree._options['parentKey'],	// tree's parent key
		change,
		parKey = {},	// change that contains new parent key to be passed to collapser
		oldParKey = {},	// before that contains old parent key to be passed to collapser
		parKeys = [],	// array that contains objects with new parent keys
		oldParKeys = [],	// array that contains objects with old parent keys
		list = [],	// array that contains only datarows whose group key value has been changed 
		i = 0,
		len = datalist.length;
	// filter list so new list only contains datarows with modified group keys
	for (; i < len; i++) {
		change = changes[i];
		if (change.hasOwnProperty(key)) {
			parKey = {};
			parKey[tpkey] = mid + change[key];
			parKeys.push(parKey);
			oldParKey = {};
			oldParKey[tpkey] = mid + befores[i][key];
			oldParKeys.push(oldParKey);
			list.push(datalist[i]);
		}
	}
	if (list.length !== 0) {
		var oldkey,	// old group key value
			pmap = this._parentMap,	// group parent map
			oldp,	// old tree parent of currently modified record
			removeList = [];
		// add new parent group if not exists already
		this._processData(list);
		// pass parent key info to collapser
		// this will move current data's tree node from old to new parent tree node
		collapser._onUpdateDatalist(list, parKeys, oldParKeys);
		// get old parent tree node and delete the group parent if it has no children members anymore
		i = 0;
		len = oldParKeys.length;
		for (; i < len; i++) {
			oldkey = oldParKeys[i][tpkey];
			if (pmap.hasOwnProperty(oldkey)) {
				oldp = tree.getNode(pmap[oldkey]);
				if (oldp.children.length === 0) {
					delete pmap[oldkey];
					removeList.push(oldp.data);
				}
			}
		}
		// remove group parents with no children members
		if (removeList.length !== 0) {
			collapser._onRemoveDatalist(removeList);
			this.grid['dataMgr'].all.removeList(removeList);
		}
	}
};
prototype._onRemoveDatarow = function(datarow) {
	if (this._isParent(datarow)) {
		delete this._parentMap[datarow[this._options['key']]];
	}
	else {
		var parentNode = this.collapser._tree.getNode(datarow).parent;
		if (parentNode.children.length === 1) {
			this.grid['dataMgr'].remove(parentNode.data);
		}
	}
};
prototype._onRemoveDatalist = function(datalist) {
	var i = 0,
		len = datalist.length;
	for (; i < len; i++) {
		this._onRemoveDatarow(datalist[i]);
	}
};
prototype._onCollapserTreeChange = function() {
	var sums = {},
		sumKeys = this._options['sumColKeys'],
		len = sumKeys.length,
		i = 0,
		notReal = this.grid['dataMgr']._consts._notReal,
		mid = this.mid,
		data,
		curKey,
		tmp;
		
	for (; i < len; i++) {
		sums[sumKeys[i]] = 0;
	}
	this.collapser._tree.root.traverseChildren({post:true, fn:function(args, index) {
		data = this.data;
		i = 0;
		if (data[notReal] === mid) {
			for (; i < len; i++) {
				curKey = sumKeys[i];
				data[curKey] = sums[curKey];
				sums[curKey] = 0;
			}
		}
		else if (!data.hasOwnProperty(notReal)) {
			for (; i < len; i++) {
				if (typeof (tmp = data[sumKeys[i]]) === "string") {
					tmp = tmp.toFloat();				
				}
				sums[sumKeys[i]] += isNaN(tmp) ? 0 : tmp;
			}
		}
	}});
};
}());
