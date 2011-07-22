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
 goog.require('JGM.module.Collapser');

 goog.provide('JGM.module.ColGroup');

 goog.exportSymbol('JGM.module.ColGroup', ColGroup);

/**
ColGroup 모듈. 트리 구조의 데이터를 담당하는 모듈입니다.
@module ColGroup

@requires JGM
@requires JGM.Grid
@requires JGM.ColDefManager
@requires JGM.ColHeader
@requires JGM.DataManager
@requires JGM.EventManager
@requires JGM.ViewportManager
@requires JGM.Tree
@requires JGM.TreeNode
@requires JGM.Collapser
 */

/**
ColGroup 클래스. 트리 구조의 데이터를 담당하는 모듈 클래스 입니다. 구조에 맞게
데이터를 재정렬해주고 자식들이 있는 노드의 펼치기/접기의 기능을 지원합니다.

@class {ColGroup} JGM.ColGroup

@author 조준호
@since 1.1.0
@version 1.2.2
*/

/**
ColGroup 컨스트럭터 입니다.

@constructor {ColGroup} ColGroup
@param {Object} args - ColGroup 모듈 파라미터 오브젝트
@... {JGM.Grid} args.grid - ColGroup 를 포함하는 {@link JGM.Grid Grid} 인스턴스
@... {Object} args.options - ColGroup 옵션 오브젝트
@returns {ColGroup} ColGroup 모듈 인스턴스를 리턴합니다.

@author 조준호
@since 1.1.0
@version 1.1.0
*/
function ColGroup(args) {
	/**
	{@link JGM} 이 할당해주는 ColGroup 모듈 고유 아이디입니다. 읽기 전용.

	@var {string} mid

	@author 조준호
	@since 1.1.0
	@version 1.1.0
	*/
	this.mid = args.mid;

	/**
	ColGroup 를 포함하는 {@link JGM.Grid Grid} 인스턴스.

	@var {JGM.Grid} grid

	@author 조준호
	@since 1.1.0
	@version 1.1.0
	*/
	this.grid = args.grid;

	/**
	그룹 형식의 데이터를 관리하는 {@link JGM.ColGroup ColGroup} 인스턴스 입니다.

	@var {JGM.ColGroup} JGM.Grid.colGroup

	@author 조준호
	@since 1.1.0
	@version 1.1.0
	*/
	this.grid.colGroup = this;

	/**
	ColGroup 모듈의 기본 옵션 값들을 정의합니다.

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

		@type {string} JGM.ColGroup.options.key
		@private
		@author 조준호
		@since 1.1.0
		@version 1.1.0
		*/
		__key_a__:		undefined,

		/**
		패딩 처리를 할 컬럼들의 키들을 가진 어레이입니다. 그룹의 데이터들이 여기에
		지정되는 컬럼들의 값이 모두 같을 때 사용합니다.
		<br>기본값:<code>[]</code>

		@type {Array.<string>=} JGM.ColGroup.options.padColKeys
		@private
		@author 조준호
		@since 1.1.0
		@version 1.1.0
		*/
		__padColKeys_b__: [],

		/**
		합계를 구할 컬럼들의 키들을 가진 어레이입니다. 여기에 지정되는 컬럼들의
		소계 값이 표시됩니다.
		<br>기본값:<code>[]</code>

		@type {Array.<string>=} JGM.ColGroup.options.sumColKeys
		@private
		@author 조준호
		@since 1.1.0
		@version 1.1.0
		*/
		__sumColKeys_c__: [],

		/**
		소계 부분의 prefix 를 정합니다.
		<br>기본값:<code>"합계: "</code>

		@type {string=} JGM.ColGroup.options.prefix
		@private
		@author 조준호
		@since 1.1.0
		@version 1.1.0
		*/
		prefix: "합계: ",

		/**
		데이터 관리에 사용할 {@link JGM.Collapser Collapser} 에 넘겨줄 옵션 오브젝트입니다.
		<br>기본값:<code>{ indentSize:0 }</code>

		@type {Object=} JGM.ColGroup.options.Collapser
		@private
		@see JGM.Collapser.options
		@author 조준호
		@since 1.1.0
		@version 1.1.0
		*/
		Collapser: {
			indentSize:0
		}
	};

	this._options = JGM.__extend_e__(options, args.options, {
		key:"__key_a__",
		padColKeys:"__padColKeys_b__",
		sumColKeys:"__sumColKeys_c__"
	});
	this._options.Collapser.key = this._options.__key_a__;

	/**
	ColGroup 과 연동된 {@link JGM.Collapser Collapser} 입니다.

	@var {JGM.Collapser} collapser

	@author 조준호
	@since 1.1.0
	@version 1.1.0
	*/
	this.collapser;
	this.__parentMap_a__ = {};
	this.__init();
}

ColGroup.getInstance = function(args) {
	return new ColGroup(args);
};

var prototype = ColGroup.prototype;
prototype.__init = function() {
	var grid = this.grid,
		datam = grid.dataMgr,
		collapser,
		opt = this._options;

	this.bindEvents();

	/**
	ColGroup 와 연동된 {@link JGM.Collapser Collapser} 입니다.

	@var {JGM.Collapser} collapser

	@author 조준호
	@since 1.1.0
	@version 1.1.0
	*/
	collapser = this.collapser = JGM.create("Collapser", {grid:grid, options:opt.Collapser});
	delete opt.Collapser;

	this.__processData_b__(datam.all);

	collapser.__init();
	datam.refresh();
};

prototype.bindEvents = function() {
	var events;

	events = {
		onBeforeSetDatalist: this.__removeAll_f__,
		"onAfterSetDatalist onAddDatalist": this.__processData_b__,
		onAddDatarow: this.__onAddDatarow_ac__,
		onUpdateDatarow: this.__onUpdateDatarow_ae__,
		onUpdateDatalist: this.__onUpdateDatalist_ah__,
		onRemoveDatarow: this.__onRemoveDatarow_af__,
		onRemoveDatalist: this.__onRemoveDatalist_ag__,
		onDestroy: this.__destroy_aA__
	};
	
	if (this._options.__sumColKeys_c__.length !== 0) {
		var mid = this.mid,
		notReal = this.grid.dataMgr.__consts_n__.__notReal_d__,
		i = 0,
		sumfn,
		sumkeys = this._options.__sumColKeys_c__,
		prefix = this._options.prefix,
		len = sumkeys.length;

		sumfn = function (rowIdx, colIdx, datarow, colDef, cellHtml) {
			if (datarow[notReal] === mid) {
				cellHtml.push(prefix);
			}
		};

		for (; i < len; i++) {
			events["onRenderCell_" + sumkeys[i] + "_prepend"] = sumfn;
		}
		events.onCollapserTreeChange = this.__onCollapserTreeChange_g__;
	}

	this.grid.event.bind(events, this);
};

prototype.__destroy_aA__ = function() {
	JGM._destroy(this, {
		name: "ColGroup",
		path: "colGroup",
		property: "collapser",
		map: "__parentMap_a__ _options"
	});
};

prototype.__processData_b__ = function(datalist) {
	var len = datalist.length,
		key = this._options.__key_a__,
		padColKeys = this._options.__padColKeys_b__,
		datam = this.grid.dataMgr,
		notReal = datam.__consts_n__.__notReal_d__,
		idKey = datam.idKey,
		collapser = this.collapser,
		nodeKey = collapser.__tree_a__._options.nodeKey,
		parentKey = collapser.__tree_a__._options.parentKey,
		newParents = [],
		i = 0;

	for (; i < len; i++) {
		this.__addData_c__(datalist[i], key, idKey, notReal, nodeKey, parentKey, padColKeys, newParents);
	}

	if (newParents.length !== 0) {
		datam.all.pushList(newParents);
		datam.makeCompositeKeyList(newParents, true);
		datam.addListToIdMap(newParents);

		if (Util.isNotNull(collapser)) {
			collapser.__onAddDatalist_ad__(newParents);
		}
	}

	return newParents;
};

prototype.__addData_c__ = function(data, key, idKey, notReal, nodeKey, parentKey, padColKeys, newParents) {
	var keyVal = data[key],
		parent,
		map = this.__parentMap_a__;
	if (!map.hasOwnProperty(keyVal)) {
		parent = this.__makeParent_d__(data, key, idKey, keyVal, notReal, nodeKey, padColKeys);
		newParents.push(parent);
		map[keyVal] = parent;
	}
	else {
		parent = map[keyVal];
	}
	data[nodeKey] = data[idKey];
	data[parentKey] = this.mid + keyVal;
};

prototype.__makeParent_d__ = function(data, key, idKey, keyVal, notReal, nodeKey, padColKeys) {
	var parent = {},
		j = 0,
		len = padColKeys.length;
	parent[notReal] = this.mid;
	parent[nodeKey] = this.mid + keyVal;
	parent[key] = keyVal;
	parent[idKey] = (this.grid.colDefMgr.getByKey(key).name || key) + ": " + keyVal;
	for (; j < len; j++) {
		parent[padColKeys[j]] = data[padColKeys[j]];
	}
	return parent;
};

prototype.__isParent_e__ = function(datarow) {
	return datarow[this.grid.dataMgr.__consts_n__.__notReal_d__] === this.mid;
};

prototype.__removeAll_f__ = function(datalist) {
	this.__parentMap_a__ = {};
};

prototype.__onAddDatarow_ac__ = function(datarow) {
	var newParents = [],
		opt = this._options,
		datam = this.grid.dataMgr,
		collapser = this.collapser,
		ctopt = collapser.__tree_a__._options;

	this.__addData_c__(
		datarow,
		opt.__key_a__,
		datam.idKey,
		datam.__consts_n__.__notReal_d__,
		ctopt.nodeKey,
		ctopt.parentKey,
		opt.__padColKeys_b__,
		newParents
	);

	if (newParents.length !== 0) {
		var parent = newParents[0];
		datam.all.push(parent);
		datam.makeCompositeKey(parent, true);
		datam.addToIdMap(parent);
		collapser.__onAddDatarow_ac__(parent);
	}
};

prototype.__onUpdateDatarow_ae__ = function(datarow, change, before) {
	if (change.hasOwnProperty(this._options.__key_a__)) {
		var key = this._options.__key_a__,	// group key
			newkey = change[key],	// new group key value
			oldkey = before[key],	// old group key value
			mid = this.mid,	// colgroup's module id
			collapser = this.collapser,	// collapser used by colgroup
			tree = collapser.__tree_a__,	// tree used by collapser
			tpkey = tree._options.parentKey,	// tree's parent key
			parKey = {},	// change that contains new parent key to be passed to collapser
			oldParKey = {},	// before that contains old parent key to be passed to collapser
			pmap = this.__parentMap_a__,	// group parent map
			oldp;	// old tree parent of currently modified record

		// add new parent group if not exists already
		if (!pmap.hasOwnProperty(newkey)) {
			this.__onAddDatarow_ac__(datarow);
		}

		// pass parent key info to collapser
		// this will move current data's tree node from old to new parent tree node
		parKey[tpkey] = mid + newkey;
		oldParKey[tpkey] = mid + oldkey;
		collapser.__onUpdateDatarow_ae__(datarow, parKey, oldParKey);

		// get old parent tree node and delete the group parent if it has no children members anymore
		oldp = tree.getNode(pmap[oldkey]);
		if (oldp.children.length === 0) {
			this.grid.dataMgr.all.remove(oldp.data);
			delete pmap[oldkey];
			collapser.__onRemoveDatarow_A__(oldp.data);
		}
	}
};

prototype.__onUpdateDatalist_ah__ = function(datalist, changes, befores) {
	var key = this._options.__key_a__,	// group key
		mid = this.mid,	// colgroup's module id
		collapser = this.collapser,	// collapser used by colgroup
		tree = collapser.__tree_a__,	// tree used by collapser
		tpkey = tree._options.parentKey,	// tree's parent key
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
			pmap = this.__parentMap_a__,	// group parent map
			oldp,	// old tree parent of currently modified record
			removeList = [];

		// add new parent group if not exists already
		this.__processData_b__(list);

		// pass parent key info to collapser
		// this will move current data's tree node from old to new parent tree node
		collapser.__onUpdateDatalist_ah__(list, parKeys, oldParKeys);

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
			collapser.__onRemoveDatalist_ag__(removeList);
			this.grid.dataMgr.all.removeList(removeList);
		}
	}
};

prototype.__onRemoveDatarow_af__ = function(datarow) {
	if (this.__isParent_e__(datarow)) {
		delete this.__parentMap_a__[datarow[this._options.__key_a__]];
	}
	else {
		var parentNode = this.collapser.__tree_a__.getNode(datarow).parent;
		if (parentNode.children.length === 1) {
			this.grid.dataMgr.remove(parentNode.data);
		}
	}
};

prototype.__onRemoveDatalist_ag__ = function(datalist) {
	var i = 0,
		len = datalist.length;
	for (; i < len; i++) {
		this.__onRemoveDatarow_af__(datalist[i]);
	}
};

prototype.__onCollapserTreeChange_g__ = function() {
	var sums = {},
		sumKeys = this._options.__sumColKeys_c__,
		len = sumKeys.length,
		i = 0,
		notReal = this.grid.dataMgr.__consts_n__.__notReal_d__,
		mid = this.mid,
		data,
		curKey,
		tmp;

		
	for (; i < len; i++) {
		sums[sumKeys[i]] = 0;
	}

	this.collapser.__tree_a__.root.traverseChildren({post:true, fn:function(args, index) {
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

JGM._add("ColGroup", ColGroup);
}());
