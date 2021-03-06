window.console && window.console.log && window.console.log('reading javascript source "Collapser.js"...');//IF_DEBUG

goog.require('engine_extension');
goog.require('jx.util');
goog.require('jx.grid');
goog.require('jx.grid.BaseModule');
goog.require('jx.grid.Grid');
goog.require('jx.grid.ColumnManager');
goog.require('jx.grid.CheckManager');
goog.require('jx.data.DataManager');
goog.require('jx.struct.Tree');
goog.require('jx.struct.TreeNode');

goog.provide('jx.grid.Collapser');

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
	Grid = goog.getObjectByName('jx.grid.Grid'),
	Tree = goog.getObjectByName('jx.struct.Tree');

 goog.exportSymbol('jx.grid.Collapser', Collapser);

	/**
	  Collapser 모듈. 트리 구조의 데이터를 담당하는 모듈입니다.
	  Collapser 클래스. 트리 구조의 데이터를 담당하는 모듈 클래스 입니다. 구조에 맞게
	  데이터를 재정렬해주고 자식들이 있는 노드의 펼치기/접기의 기능을 지원합니다.

	  @class {Collapser} jx.grid.Collapser

	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */

	/**
	  Collapser 컨스트럭터 입니다.

	  @constructor {Collapser} Collapser
	  @param {Object} args - Collapser 모듈 파라미터 오브젝트
	  @... {jx.grid.Grid} args.grid - Collapser 를 포함하는 {@link jx.grid.Grid} 인스턴스
	  @... {Object} args.options - Collapser 옵션 오브젝트
	  @returns {Collapser} Collapser 모듈 인스턴스를 리턴합니다.

	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	function Collapser(args) {
		/**
		  {@link JGM} 이 할당해주는 Collapser 모듈 고유 아이디입니다. 읽기 전용.

		  @var {string} mid

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		this.mid = args.mid;

		/**
		  Collapser 를 포함하는 {@link jx.grid.Grid} 인스턴스.

		  @var {jx.grid.Grid} grid

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		this.grid = args.grid;

		/**
		  트리 형식의 데이터를 관리하는 {@link jx.grid.Collapser Collapser} 인스턴스 입니다.

		  @var {jx.grid.Collapser} jx.grid.Grid.collapser

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		this.grid['collapser'] = this;

		/**
		  Collapser 모듈의 기본 옵션 값들을 정의합니다.

		  @type {Object} options
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		var options = {
			/**
			  Collapser 의 펼치기/접기 버튼이 표시될 컬럼의 키를 정합니다. 이 값이
			  정해지지 않았을시에는 {@link jx.grid.Collapser.options.colDef colDef}
			  를 사용하여 새로운 컬럼을 생성합니다.<br>기본값:<code>undefined</code>

			  @type {string=} jx.grid.Collapser.options.key
			  @private

			  @author 조준호
			  @since 1.0.0
			  @version 1.0.0
			  */
			'key': undefined,

			/**
			  {@link jx.grid.Collapser.options.key key} 가 지정되지 않아서, Collapser 컬럼을 새로 생성해야할 경우 사용될 컬럼 정의 오브젝트입니다.
			  <br>기본값:<code>{key:"collapser", width: 120, name:" "}</code>

			  @type {Object=} jx.grid.Collapser.options.colDef
			  @private
			  @see jx.grid.ColumnManager.options.colDef

			  @author 조준호
			  @since 1.0.0
			  @version 1.0.0
			  */
			'colDef': {'key':"collapser", 'width': 120, 'name':" ", 'noSearch':true},

			/**
			  {@link jx.grid.Collapser.options.colDef colDef} 를 몇번째 컬럼으로 넣을지를 정합니다.
			  <br>기본값:<code>0</code>

			  @type {number=} jx.grid.Collapser.options.colIdx
			  @private

			  @author 조준호
			  @since 1.0.0
			  @version 1.0.0
			  */
			'colIdx': 0,

			/**
			  접힌 상태의 아이콘으로 사용될 이미지 경로입니다. <br>기본값:<code>imageUrl + "collapsed.png"</code>

			  @type {string=} jx.grid.Collapser.options.urlCollapsed
			  @private

			  @author 조준호
			  @since 1.0.0
			  @version 1.0.0
			  */
			'urlCollapsed': this.grid._options['imageUrl'] + "collapsed.png",

			/**
			  접힌 상태위에 마우스가 오버되었을 때의 아이콘으로 사용될 이미지 경로입니다. <br>기본값:<code>imageUrl + "collapsed-hover.png"</code>

			  @type {string=} jx.grid.Collapser.options.urlCollapsedHover
			  @private

			  @author 조준호
			  @since 1.0.0
			  @version 1.0.0
			  */
			'urlCollapsedHover': this.grid._options['imageUrl'] + "collapsed-hover.png",

			/**
			  펼쳐진 상태의 아이콘으로 사용될 이미지 경로입니다. <br>기본값:<code>imageUrl + "expanded.png"</code>

			  @type {string=} jx.grid.Collapser.options.urlExpanded
			  @private

			  @author 조준호
			  @since 1.0.0
			  @version 1.0.0
			  */
			'urlExpanded': this.grid._options['imageUrl'] + "expanded.png",

			/**
			  펼쳐진 상태위에 마우스가 오버되었을 때의 아이콘으로 사용될 이미지 경로입니다. <br>기본값:<code>imageUrl + "expanded-hover.png"</code>

			  @type {string=} jx.grid.Collapser.options.urlExpandedHover
			  @private

			  @author 조준호
			  @since 1.0.0
			  @version 1.0.0
			  */
			'urlExpandedHover': this.grid._options['imageUrl'] + "expanded-hover.png",

			/**
			  Collapser 토글 아이콘의 폭 픽셀입니다. <br>기본값:<code>6</code>

			  @type {number=} jx.grid.Collapser.options.width
			  @private

			  @author 조준호
			  @since 1.0.0
			  @version 1.0.0
			  */
			'width': 6,

			/**
			  Collapser 토글 아이콘의 좌우 padding 픽셀입니다. <br>기본값:<code>5</code>

			  @type {number=} jx.grid.Collapser.options.padding
			  @private

			  @author 조준호
			  @since 1.0.0
			  @version 1.0.0
			  */
			'padding': 5,

			/**
			  Collapser 토글 아이콘에 공통적으로 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-collapser"</code>

			  @type {string=} jx.grid.Collapser.options.classCollapser
			  @private

			  @author 조준호
			  @since 1.0.0
			  @version 1.0.0
			  */
			'classCollapser': "jgrid-collapser",

			/**
			  접혀진 상태 아이콘에 공통적으로 적용되는 CSS 클래스 입니다. <br>기본값:<code>"collapsed"</code>

			  @type {string=} jx.grid.Collapser.options.classCollapsed
			  @private

			  @author 조준호
			  @since 1.0.0
			  @version 1.0.0
			  */
			'classCollapsed': "collapsed",

			/**
			  펼쳐진 상태 아이콘에 공통적으로 적용되는 CSS 클래스 입니다. <br>기본값:<code>"expanded"</code>

			  @type {string=} jx.grid.Collapser.options.classExpanded
			  @private

			  @author 조준호
			  @since 1.0.0
			  @version 1.0.0
			  */
			'classExpanded': "expanded",

			/**
			  Collapser 토글 아이콘을 indent 하는 div 에 공통적으로 적용되는 CSS 클래스 입니다. <br>기본값:<code>"indent"</code>

			  @type {string=} jx.grid.Collapser.options.classIndent
			  @private

			  @author 조준호
			  @since 1.0.0
			  @version 1.0.0
			  */
			'classIndent': "indent",

			/**
			  마스터 헤더 Collapser 토글에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"master"</code>

			  @type {string=} jx.grid.Collapser.options.classMasterCollapser
			  @private

			  @author 조준호
			  @since 1.0.0
			  @version 1.0.0
			  */
			'classMasterCollapser': "master",

			/*
			   마스터 헤더 Collapser 토글을 생성할지 여부입니다. <br>기본값:<code>true</code>

			   @type {boolean=} jx.grid.Collapser.options.master
			   @private

			   @author 조준호
			   @since 1.0.0
			   @version 1.0.0
			   */
			//'master': true,

			/**
			  트리 레벨당 우측으로 밀려지는 indent 폭 픽셀입니다. <br>기본값:<code>12</code>

			  @type {number=} jx.grid.Collapser.options.indentSize
			  @private

			  @author 조준호
			  @since 1.0.0
			  @version 1.0.0
			  */
			'indentSize': 12,

			/**
			  true 일 경우 모든 노드가 접힌 상태로, false 일 경우 펼쳐진 상태로 시작합니다. <br>기본값:<code>false</code>

			  @type {boolean=} jx.grid.Collapser.options.beginCollapsed
			  @private

			  @author 조준호
			  @since 1.0.0
			  @version 1.0.0
			  */
			'beginCollapsed': false,

			/**
			  연동시킬 {@link JGM.CheckManager CheckManager} 에 넘겨줄 옵션 오브젝트입니다.
			  이 옵션을 설정하지 않을 경우, {@link JGM.CheckManager CheckManager} 인스턴스를
			  생성하지 않습니다. <br>기본값:<code>undefined</code>

			  @type {Object=} jx.grid.Collapser.options.CheckManager
			  @private
			  @see JGM.CheckManager.options

			  @author 조준호
			  @since 1.0.0
			  @version 1.0.0
			  */
			'CheckManager': undefined,

			/**
			  트리 구조 데이터 관리에 사용할 {@link jx.struct.Tree Tree} 에 넘겨줄 옵션 오브젝트입니다.
			  <br>기본값:<code>undefined</code>

			  @type {Object=} jx.grid.Collapser.options.Tree
			  @private
			  @see jx.struct.Tree.options
			  @author 조준호
			  @since 1.0.0
			  @version 1.0.0
			  */
			'Tree': undefined
		};

		this._options = JGM._extend(options, args['options']);

		if (this._options['CheckManager']) {

			/**
			  Collapser 와 연동된 {@link JGM.CheckManager CheckManager} 입니다.

			  @var {JGM.CheckManager} checkMgr

			  @author 조준호
			  @since 1.0.0
			  @version 1.0.0
			  */
			this.checkMgr = JGM.create("CheckManager", {grid:this.grid, 'options':this._options['CheckManager']});
			delete this._options['CheckManager'];
			if (Util.isNull(this._options['key'])) {
				this._options['colIdx']++;
			}
		}

		this._tree = new Tree({'list':this.grid['dataMgr'].all, 'options':this._options['Tree']});

		this._master;
		this.key;
	}

	Collapser.getInstance = function(args) {
		return new Collapser(args);
	};

	var prototype = Collapser.prototype;

	prototype.__init = function() {
		if (Util.isNull(this._options['key'])) {
			this.grid['colDefMgr'].addAt(this._options['colIdx'], this._options['colDef']);
		}

		this._makeTree();
		this._filterRefresh();

		this.key = Util.isNull(this._options['key']) ? this._options['colDef']['key'] : this._options['key'];

		this.bindEvents();
	};

	prototype.bindEvents = function() {
		var key = this.key,
			events;

		events = {
			'onAfterFilter':				this._onAfterFilter,
			'onCreateCss':				this._onCreateCss,
			'onDestroy':					this._destroy,
			'onAfterSetDatalist':			this._onAfterSetDatalist,
			'onAddDatarow':				this._onAddDatarow,
			'onAddDatalist':				this._onAddDatalist,
			'onUpdateDatarow':			this._onUpdateDatarow,
			'onUpdateDatalist':			this._onUpdateDatalist,
			'onRemoveDatarow':			this._onRemoveDatarow,
			'onRemoveDatalist':			this._onRemoveDatalist,
			'onRenderHeadersComplete':	this._getMaster
		};

		events["onRenderHeader_" + key + "_prepend"] = this._onRenderHeader;
		events["clickHeaderValid_" + key] = this._clickHeaderValid;
		events["onRenderCell_" + key + "_prepend"] = this._onRenderCell;
		events["dblclickCanvas_" + key] = this._dblclickCanvas;
		events["keydownColSel_" + key + "_" + Util.keyMapKeydown.space] = this._keydownColSel;

		if (Util.isNotNull(this.checkMgr)) {
			events.onCheckChange = this._onCheckChange;
		}

		this.grid['event'].bind(events, this);
	};

	prototype._destroy = function() {
		this.grid.log('destroying Collapser instance...', Grid.V_INIT);//IF_DEBUG
		JGM._destroy(this, {
			name: "Collapser",
			path: "collapser",
			module: "_tree",
			"$": "_master",
			property: "checkMgr",
			map: "_options"
		});
	};

	prototype._onCreateCss = function() {
		var gridId = "#" + this.grid['mid'] + " .",
			opt = this._options,
			rowSel = gridId + this.grid['view']._options['classRow'] + " .",
			toggleSel = gridId + opt['classCollapser'],
			expandedSel = toggleSel + "." + opt['classExpanded'],
			collapsedSel = toggleSel + "." + opt['classCollapsed'],
			rowH = this.grid['view']._getRowInnerHeight(),
			rules = [],
			header = this.grid['header'];


		rules.push(gridId + opt['classIndent'] + "{height:" + rowH + "px;float:left;}");
		rules.push(toggleSel + "{width:" + opt['width'] + "px;float:left;padding:0 " + opt['padding'] + "px}");
		rules.push(rowSel + opt['classCollapser'] + "{height:" + rowH + "px}");
		rules.push(expandedSel + "{background:url(" + opt['urlExpanded'] + ") no-repeat center transparent}");
		rules.push(expandedSel + ":hover{background:url(" + opt['urlExpandedHover'] + ") no-repeat center transparent}");
		rules.push(collapsedSel + "{background:url(" + opt['urlCollapsed'] + ") no-repeat center transparent}");
		rules.push(collapsedSel + ":hover{background:url(" + opt['urlCollapsedHover'] + ") no-repeat center transparent}");

		if (Util.isNotNull(header)) {
			rules.push(gridId + header._options['classColHeader'] + " ." + opt['classCollapser'] + "{height:" + header._options['height'] + "px}");
		}

		return rules.join("");
	};

	prototype._onAfterSetDatalist = function(datalist) {
		this._tree.destroy();
		this._tree = new Tree({'list':this.grid['dataMgr'].all, 'options':this._options['Tree']});
		this._makeTree();
	};

	prototype._onAddDatarow = function(datarow) {
		var node = this._tree.createNode(datarow);
		node._collapsed = this._options['beginCollapsed'];
		if (Util.isNotNull(node.parent) && (node.parent === node.tree.root || (node.parent._shown && !node.parent._collapsed))) {
			node._shown = true;
		}
		else {
			node._shown = false;
		}

		if (Util.isNotNull(node.parent) && node.parent.children.length === 1) {
			this.grid['view'].rerenderCellByIdAndKey(this.grid['dataMgr'].getId(node.parent.data), this.key);
		}

		if (node._collapsed === true || node._shown === false) {
			node.traverseChildren({fn:function(args) {
				this._shown = false;
			}});
		}
		else {
			node.traverseChildren({fn:function(args) {
				if (Util.isNotNull(this.parent) && (this.parent === this.tree.root || (this.parent._shown && !this.parent._collapsed))) {
					this._shown = true;
				}
				else {
					args['propagate'] = false;
					this.traverse({fn:function(args) {
						this._shown = false;
					}});
				}
			}});
		}

		/**
		  Collapser 가 가진 트리의 구조가 변경되었을 경우 트리거되는 이벤트입니다.<br>
		  @event {Event} onCollapserTreeChange

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		this.grid['event'].trigger("onCollapserTreeChange", false, true);
	};

	prototype._onAddDatalist = function(datalist) {
		var i = 0,
			len = datalist.length,
			tree = this._tree,
			root = tree.root,
			collapsed = this._options['beginCollapsed'],
			key = this.key,
			view = this.grid['view'],
			datam = this.grid['dataMgr'],
			node,
			toRerender = [],
			par;

		for (; i < len; i++) {
			node = tree.createNode(datalist[i]);
			node._collapsed = collapsed;

			if (Util.isNotNull(node.parent) && node.parent.children.length === 1) {
				toRerender.push(node.parent.data);
			}
		}

		if (view !== undefined) {
			i = 0;
			len = toRerender.length;
			for (; i < len; i++) {
				view.rerenderCellByIdAndKey(datam.getId(toRerender[i]), key);
			}
		}

		root.traverseChildren({fn:function(args) {
			par = this.parent;
			if (Util.isNotNull(par) && (par === root || (par._shown && !par._collapsed))) {
				this._shown = true;
			}
			else {
				args['propagate'] = false;
				this.traverse({fn:function(args) {
					this._shown = false;
				}});
			}
		}});
		this.grid['event'].trigger("onCollapserTreeChange", false, true);
	};

	prototype._onUpdateDatarow = function(datarow, change, before) {
		var tree = this._tree,
			nodeKey = tree._options['nodeKey'],
			parentKey = tree._options['parentKey'],
			node;

		if (change.hasOwnProperty(nodeKey)) {
			node = tree.getNodeByNodeId(before[nodeKey]);
			tree.changeNodeId(node, before[nodeKey], change[nodeKey]);
			this.grid['event'].trigger("onCollapserTreeChange", false, true);
		}
		if (change.hasOwnProperty(parentKey)) {
			if (Util.isNull(node)) {
				node = tree.getNode(datarow);
			}
			tree.changeParentId(node, before[parentKey], change[parentKey]);
			this.grid['event'].trigger("onCollapserTreeChange", false, true);
		}
	};

	prototype._onUpdateDatalist = function(datalist, changes, befores) {
		var tree = this._tree,
			nodeKey = tree._options['nodeKey'],
			parentKey = tree._options['parentKey'],
			before,
			datarow,
			treeNode,
			nodeIdChanged = [],
			parentIdChanged = [],
			nlen,
			plen,
			temp,
			i = 0,
			len = datalist.length;
		for (; i < len; i++) {
			before = befores[i];
			datarow = datalist[i];
			treeNode = undefined;
			if (before.hasOwnProperty(nodeKey)) {
				if (Util.isNull(treeNode)) {
					treeNode = tree.getNodeByNodeId(before[nodeKey]);
				}
				nodeIdChanged.push({node:treeNode, before:before[nodeKey], newId:datarow[nodeKey]});
			}
			if (before.hasOwnProperty(parentKey)) {
				if (Util.isNull(treeNode)) {
					treeNode = tree.getNode(datarow);
				}
				parentIdChanged.push({node:treeNode, before:before[parentKey], newId:datarow[parentKey]});
			}
		}

		nlen = nodeIdChanged.length;
		plen = parentIdChanged.length;
		if (nlen + plen === 0) {
			return;
		}

		if (nlen + plen > 10) {
			tree.reattach();
		}
		else {
			for (i = 0; i < nlen; i++) {
				temp = nodeIdChanged[i];
				tree.changeNodeId(temp.node, temp.before, temp.newId);
			}
			for (i = 0; i < plen; i++) {
				temp = parentIdChanged[i];
				tree.changeParentId(temp.node, temp.before, temp.newId);
			}
		}
		this.grid['event'].trigger("onCollapserTreeChange", false, true);
	};

	prototype._onRemoveDatarow = function(datarow) {
		this._tree.destroyNodeByData(datarow);
		this.grid['event'].trigger("onCollapserTreeChange", false, true);
	};

	prototype._onRemoveDatalist = function(datalist) {
		var i = 0,
			len = datalist.length,
			tree = this._tree;
		for (; i < len; i++) {
			tree.destroyNodeByData(datalist[i]);
		}
		this.grid['event'].trigger("onCollapserTreeChange", false, true);
	};

	prototype._onAfterFilter = function(filteredList, failedList) {
		var tree = this._tree;
		if (failedList.length > 0) {
			var dataMgr = this.grid['dataMgr'],
				len = filteredList.length,
					indexMap = dataMgr._idToIdx,
					idKey = dataMgr.idKey,
					pdata,
					i = 0,
					travfn = function(args) {
						if (Util.isNotNull(this.parent)) {
							pdata = this.parent.data;
							if (Util.isNotNull(pdata) && !dataMgr.has(pdata)) {
								filteredList.push(pdata);
								failedList.remove(pdata);
								indexMap[pdata[idKey]] = -1;
							}
						}
						else {
							args['stop'] = true;
						}
					};

			dataMgr._reidx();
			tree.reattach();

			for (; i < len; i++) {
				tree.getNode(filteredList[i]).traverse({up:true, fn:travfn});
			}

			tree.reattach(filteredList);
			tree.sortList(filteredList);
			this.grid['event'].trigger("onCollapserTreeChange", false, true);
		}
		else {
			tree.reattach(filteredList);
			this.grid['event'].trigger("onCollapserTreeChange", false, true);
			this._filter(filteredList, failedList);
		}
	};

	prototype._filter = function(filteredList, failedList) {
		filteredList.length = 0;
		this._tree.root.traverseChildren({fn:function(args) {
			if (this._shown) {
				filteredList.push(this.data);
			}
			else {
				failedList.push(this.data);
			}
		}});
	};

	prototype.toggleById = function(id) {
		if (Util.isNotNull(id)) {
			return this.toggleCollapse(this._tree.getNode(this.grid['dataMgr'].getById(id)));
		}
	};

	prototype.toggle = function(datarow) {
		return this.toggleById(this.grid['dataMgr'].getId(datarow));
	};

	prototype.toggleByIdx = function(i) {
		return this.toggleById(this.grid['dataMgr'].getIdByIdx(i));
	};

	prototype._clickHeaderValid = function(e, colheader) {
		if (Util.hasTagAndClass(e.target, "DIV", this._options['classCollapser'])) {
			return false;
		}
	};

	prototype._dblclickCanvas = function(e, cell) {
		if (Util.hasTagAndClass(e.target, 'DIV', this._options['classCollapser'])) {
			return;
		}
		this.toggleCollapse(this._tree.getNode(cell.getDatarow()));
	};

	prototype._keydownColSel = function(e, colSelections, lastSelection) {
		e.preventDefault();
		if (Util.isNotNullAnd(colSelections, lastSelection)) {
			var tree = this._tree,
				collapsed = tree.getNode(lastSelection.getDatarow())._collapsed,
						  datalist = this.grid['dataMgr'].datalist,
						  node,
						  row;
			for (row in colSelections) {
				if (colSelections.hasOwnProperty(row)) {
					if (row === "length") {
						continue;
					}
					node = tree.getNode(datalist[row]);
					if (collapsed) {
						this.expand(node);
					}
					else {
						this.collapse(node);
					}
				}
			}
			this._filterRefresh();
		}
	};

	prototype._makeTree = function() {
		var tree = this._tree,
			i,
			map,
			root;

		tree.__init();
		map = tree.map;
		root = tree.root;
		if (this._options['beginCollapsed']) {
			for (i in map) {
				if (map.hasOwnProperty(i)) {
					map[i]._collapsed = true;
					map[i]._shown = false;
				}
			}
			var first = root.children,
				len = first.length;
			for (i = 0; i < len; i++) {
				first[i]._shown = true;
			}
			root._collapsed = true;
		}
		else {
			for (i in map) {
				if (map.hasOwnProperty(i)) {
					map[i]._collapsed = false;
					map[i]._shown = true;
				}
			}
			root._collapsed = false;
		}
		this.grid['event'].trigger("onCollapserTreeChange", false, true);
	};


	prototype._onRenderHeader = function(headerHtml) {
		headerHtml.push("<div id='" + this.mid + "h' onmousedown='JGM.m.Collapser." + this.mid + ".toggleMaster();' class='" + this._options['classCollapser'] + " " + this._options['classMasterCollapser']);
		if (this._tree.root._collapsed) {
			headerHtml.push(" " + this._options['classCollapsed']);
		}
		else {
			headerHtml.push(" " + this._options['classExpanded']);
		}
		headerHtml.push("'></div>");
	};


	prototype._onRenderCell = function(rowIdx, colIdx, datarow, colDef, cellHtml) {
		var node = this._tree.getNode(datarow);
		if (Util.isNull(node)) {
			return null;
		}

		var id = this.grid['dataMgr'].getId(datarow),
			opt = this._options;

		cellHtml.push("<div class='" + opt['classIndent'] + "' style='width:" + (opt['indentSize'] * node.getLevel()) + "px;'></div><div ");
		if (!node.isLeaf()) {
			cellHtml.push("onmousedown=\"JGM.m.Collapser." + this.mid + ".toggleById('" + id + "');\" class='" + opt['classCollapser']);
			if (node._collapsed) {
				cellHtml.push(" " + opt['classCollapsed']);
			}
			else {
				cellHtml.push(" " + opt['classExpanded']);
			}
		}
		else {
			cellHtml.push("class='" + opt['classCollapser']);
		}
		cellHtml.push("'></div>");
	};

	prototype.getLevel = function(datarow) {
		var node = this._tree.getNode(datarow);
		if (Util.isNull(node)) {
			return null;
		}
		return node.getLevel();
	};



	/**
	  주어진 {@link jx.struct.TreeNode} 를 접습니다. 이미 접혀 있는경우 아무것도 하지 않습니다.

	  @function {} collapse
	  @param {jx.struct.TreeNode} node - 접을 {@link jx.struct.TreeNode}
	  @param {boolean=} nocheck - true 일 경우, 마스터 Collapser 의 접기 여부를 체크하지 않습니다.

	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	prototype.collapse = function(node, nocheck) {
		if (node._collapsed === true || node.isLeaf()) {
			return;
		}
		node._collapsed = true;
		node.traverseChildren({fn:function(args) {
			this._shown = false;
			if (this._collapsed) {
				args['propagate'] = false;
			}
		}});
		var collapser = this._getCollapser(node.data);
		if (collapser.length > 0) {
			this._setClass(collapser, true);
		}
		if (!nocheck && node.parent === this._tree.root && this._tree.root._collapsed === false) {
			this._setClass(this._master, this._tree.root._collapsed = true);
		}
	};


	/**
	  주어진 {@link jx.struct.TreeNode} 를 펼칩니다. 이미 펼쳐져 있는경우 아무것도 하지 않습니다.

	  @function {} expand
	  @param {jx.struct.TreeNode} node - 접을 {@link jx.struct.TreeNode}
	  @param {boolean=} nocheck - true 일 경우, 마스터 Collapser 의 펼치기 여부를 체크하지 않습니다.

	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	prototype.expand = function(node, nocheck) {
		if (node._collapsed === false || node.isLeaf()) {
			return;
		}
		node._collapsed = false;
		node.traverseChildren({fn:function(args) {
			this._shown = true;
			if (this._collapsed) {
				args['propagate'] = false;
			}
		}});
		var collapser = this._getCollapser(node.data),
			tree = this._tree;
		if (collapser.length > 0) {
			this._setClass(collapser, false);
		}
		if (!nocheck && node.parent === tree.root) {
			var first = tree.root.children,
				len = first.length,
					i = 0;
			for (; i < len; i++) {
				if (first[i]._collapsed) {
					return;
				}
			}
			this._setClass(this._master, tree.root._collapsed = false);
		}
	};

	prototype._setClass = function(ob, collapsed) {
		if (Util.isNull(ob)) {
			return;
		}
		var opt = this._options;
		if (collapsed) {
			ob.addClass(opt['classCollapsed']).removeClass(opt['classExpanded']);
		}
		else {
			ob.addClass(opt['classExpanded']).removeClass(opt['classCollapsed']);
		}
	};


	/**
	  마스터 Collapser 를 토글합니다. 첫번째 레벨의 노드들이 하나라도 접혀 있으면
	  첫번째 노드들을 모두 펼치고, 모두 펼쳐져 있는 경우 모두 접습니다.

	  @function {} toggleMaster

	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	prototype.toggleMaster = function() {
		var root = this._tree.root,
			first = root.children,
			len = first.length,
			i = 0;
		if (root._collapsed) {
			for (; i < len; i++) {
				this.expand(first[i], true);
			}
			this._setClass(this._master, root._collapsed = false);
		}
		else {
			for (; i < len; i++) {
				this.collapse(first[i], true);
			}
			this._setClass(this._master, root._collapsed = true);
		}
		this._filterRefresh();
	};


	/**
	  주어진 {@link jx.struct.TreeNode} 를 토글합니다.

	  @function {} toggleCollapse
	  @param {jx.struct.TreeNode} node - 토글할 {@link jx.struct.TreeNode}
	  @see expand
	  @see collapse

	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	prototype.toggleCollapse = function(node) {
		var res;
		if (node._collapsed) {
			res = this.expand(node);
		}
		else {
			res = this.collapse(node);
		}
		this._filterRefresh();
		return res;
	};


	prototype._onCheckChange = function(datarow, check) {
		var node = this._tree.getNode(datarow),
			checkMgr = this.checkMgr,
			inputs = [],
			input;
		if (check) {
			node.traverseChildren({fn:function(args) {
				if (checkMgr.isChecked(this.data)) {
					args['propagate'] = false;
				}
				else {
					checkMgr._add(this.data);
					if (Util.isNotNull(input = checkMgr.getCheckbox(this.data))) {
						inputs.push(input);
					}
				}
			}});
			node.traverseParent({up:true, fn:function(args) {
				if (Util.isNull(this.data) || checkMgr.isChecked(this.data)) {
					args['stop'] = true;
				}
				else {
					checkMgr._add(this.data);
					if (Util.isNotNull(input = checkMgr.getCheckbox(this.data))) {
						inputs.push(input);
					}
				}
			}});
			JGM.CheckManager._check($(inputs));
			checkMgr._updateMaster();
		}
		else {
			node.traverseChildren({fn:function(args) {
				if (!checkMgr.isChecked(this.data)) {
					args['propagate'] = false;
				}
				else {
					checkMgr._remove(this.data);
					if (Util.isNotNull(input = checkMgr.getCheckbox(this.data))) {
						inputs.push(input);
					}
				}
			}});
			node.traverseParent({up:true, fn:function(args) {
				if (Util.isNull(this.data) || !checkMgr.isChecked(this.data)) {
					args['stop'] = true;
				}
				else {
					var i = 0,
				children = this.children,
				clen = children.length;
			for (; i < clen; i++) {
				if (checkMgr.isChecked(children[i].data)) {
					args['stop'] = true;
					return;
				}
			}
			checkMgr._remove(this.data);
			if (Util.isNotNull(input = checkMgr.getCheckbox(this.data))) {
				inputs.push(input);
			}
				}
			}});
			JGM.CheckManager._uncheck($(inputs));
		}
	};


	prototype._filterRefresh = function() {
		this._filter(this.grid['dataMgr'].datalist, this.grid['dataMgr'].failed);
		this.grid['dataMgr']._finish();
	};

	prototype._getCollapser = function(datarow) {
		if (Util.isNull(datarow)) {
			return $([]);
		}

		var found = Util.findFirstByTagAndClass(
				this.grid['view'].getCell(this.grid['dataMgr'].getIdx(datarow), this.grid['colDefMgr'].getIdxByKey(this.key)),
				"DIV",
				this._options['classCollapser']);

		if (found === undefined) {
			return $([]);
		}
		else {
			return $(found);
		}
	};

	prototype._getMaster = function() {
		this._master = $(document.getElementById(this.mid + "h"));
	};

}());
