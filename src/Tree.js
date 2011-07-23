goog.require('engine_extension');
goog.require('jx.util');
goog.require('jx.events.EventDispatcher');

goog.provide('jx.data.TreeNode');
goog.provide('jx.data.Tree');
goog.provide('TreeNode');
goog.provide('Tree');

/*!
 * AUTHOR
 *   The JexGrid was written and is maintained by:
 *       Joon Ho Cho <joonho1101@gmail.com>
 * COPYRIGHT
 *   Copyright (c) 2010-2011, WebCash Inc. All rights reserved.
 */

(function() {
var Util = goog.getObjectByName('jx.util');
	

 goog.exportSymbol('jx.data.TreeNode', TreeNode);
 goog.exportSymbol('jx.data.Tree', Tree);

 goog.exportSymbol('TreeNode', TreeNode);
 goog.exportSymbol('Tree', Tree);

 function TreeNode(args) {
 this.tree = args['tree'];
 this.data = args['data'];
 this.nodeId = args['nodeId'];

 this.level;
 this.parent;
 this.childrenMap = {};
 this.children = [];
 }

 TreeNode.getInstance = function(args) {
 return new TreeNode(args);
 };

 var prototype = TreeNode.prototype;

 prototype.destroy = function() {
	 this.detach();
	 delete this.tree;
	 delete this.data;
	 delete this.nodeId;
	 delete this.childrenMap;
	 delete this.children;
 };

 prototype.destroyCompletely = function() {
	 this.detachCompletely();
	 delete this.tree;
	 delete this.data;
	 delete this.nodeId;
	 delete this.childrenMap;
	 delete this.children;
 };

 prototype.destroyDown = function() {
	 if (Util.isNotNull(this.parent)) {
		 this.parent.removeChild(this);
	 }
	 this.traverse({'post':true, 'fn':function() { this.destroy(); }});
 };

 prototype.detach = function() {
	 delete this.parent;
	 delete this.level;
	 this.children.length = 0;
	 this.childrenMap = {};
 };

 prototype.detachCompletely = function() {
	 if (Util.isNotNull(this.parent)) {
		 this.parent.removeChild(this);
	 }
	 this.removeAllChildren();
	 delete this.parent;
	 delete this.level;
 };

 prototype.detachDown = function() {
	 if (Util.isNotNull(this.parent)) {
		 this.parent.removeChild(this);
	 }
	 this.traverse({'post':true, 'fn':function() { this.detach(); }});
 };

 prototype.isRoot = function() {
	 return Util.isNull(this.parent);
 };

 prototype.getRoot = function() {
	 this.tree.root;
 };

 prototype.isLeaf = function() {
	 return this.children.length === 0;
 };

 prototype.setParent = function(node) {
	 if (this.parent === node) {
		 return;
	 }

	 if (Util.isNotNull(this.parent)) {
		 this.parent.removeChild(this);
	 }

	 this.parent = node;
	 delete this.level;

	 if (Util.isNotNull(node)) {
		 node.addChild(this);
	 }
 };

 prototype.hasChild = function(node) {
	 return this.childrenMap.hasOwnProperty(node.nodeId);
 };

 prototype.addChild = function(child) {
	 if (this.hasChild(child)) {
		 return;
	 }

	 this.children.push(child);
	 this.childrenMap[child.nodeId] = this.children.length - 1;

	 child.setParent(this);
 };

 prototype.addChildAt = function(index, child) {
	 var i;
	 if (this.hasChild(child)) {
		 i = this.childrenMap[child.nodeId];
		 if (i === index) {
			 return;
		 }
		 this.children.removeAt(i);
	 }

	 this.children.addAt(index, child);
	 if (Util.isNotNull(i) && i < index) {
		 this.resetChildIdx(i);
	 }
	 else {
		 this.resetChildIdx(index);
	 }

	 child.setParent(this);
 };

 prototype.removeChild = function(child) {
	 if (this.hasChild(child)) {
		 var i = this.childrenMap[child.nodeId];
		 this.children.removeAt(i);
		 delete this.childrenMap[child.nodeId];
		 this.resetChildIdx(i);
		 delete child.parent;
		 delete child.level;
	 }
 };

 prototype.removeChildAt = function(i) {
	 var child = this.children[i];
	 this.children.removeAt(i);
	 delete this.childrenMap[child.nodeId];
	 this.resetChildIdx(i);
	 delete child.parent;
	 delete child.level;
 };

 prototype.resetChildIdx = function(from) {
	 if (Util.isNull(from)) {
		 from = 0;
	 }
	 var i = from,
		 children = this.children,
		 len = children.length,
		 map = this.childrenMap;
	 for (; i < len; i++) {
		 map[children[i].nodeId] = i;
	 }
 };

 prototype.removeAllChildren = function() {
	 var i = 0,
		 children = this.children,
		 len = children.length;
	 for (; i < len; i++) {
		 delete children[i].parent;
		 delete children[i].level;
	 }
	 children.length = 0;
	 this.childrenMap = {};
 };

 prototype.getSiblings = function() {
	 if (this.isRoot()) {
		 return [];
	 }
	 var siblings = this.parent.children.slice();
	 siblings.removeAt(this.parent.getChildIdx(this));
	 return siblings;
 };

 prototype.getChildIdx = function(node) {
	 return this.childrenMap[node.nodeId];
 };

 prototype.getIdx = function() {
	 if (this.isRoot()) {
		 return -1;
	 }
	 return this.parent.getChildIdx(this);
 };

 prototype.getPath = function() {
	 return this.traverse({'res':[], 'up':true, 'post':true, 'fn':function(args) {
			 if (!this.isRoot()) {
			 args['res'].push(this.getIdx());
			 }
			 }}).res;
 };

 prototype.getAncestors = function() {
	 var args = {'res':[], 'up':true, 'post':true, 'fn':function(args) {
		 args['res'].push(this);
	 }};
	 this.traverse(args);
	 args['res'].pop();
	 return args['res'];
 };

 prototype.getDescendents = function() {
	 var args = {'res':[], 'fn':function(args) { args['res'].push(this); }};
	 this.traverse(args);
	 args['res'].shift();
	 return args['res'];
 };

 prototype.getLevel = function() {
	 if (this.isRoot()) {
		 return (this.level = -1);
	 }
	 return (this.level = this.parent.getLevel() + 1);
 };

 prototype.find = function(dataToFind) {
	 return this.traverse({'fn':function(args) {
			 if (this.data === dataToFind) {
			 args['res'] = this;
			 args['stop'] = true;
			 }
			 }}).res;
 };

 prototype.traverse = function(args, index) {
	 if (args['stop']) {
		 return args;
	 }
	 if (args['up']) {
		 if (this.isRoot()) {
			 this.callFn(args);
		 }
		 else if (args['post']) {
			 this.parent.traverse(args);
			 this.callFn(args);
		 }
		 else {
			 this.callFn(args);
			 this.parent.traverse(args);
		 }
	 }
	 else {
		 var i = 0,
			 c = this.children,
			 len = c.length;
		 if (args['post']) {
			 for (; i < len; i++) {
				 c[i].traverse(args, i);
			 }
			 this.callFn(args, index);
		 }
		 else {
			 this.callFn(args, index);
			 if (args['propagate'] === false) {
				 delete args['propagate'];
			 }
			 else {
				 for (; !args['stop'] && i < len; i++) {
					 c[i].traverse(args, i);
				 }
			 }
		 }
	 }
	 return args;
 };

 prototype.traverseChildren = function(args) {
	 var i = 0,
		 c = this.children,
		 len = c.length;
	 for (; i < len; i++) {
		 c[i].traverse(args, i);
	 }
 };

 prototype.traverseParent = function(args) {
	 if (Util.isNotNull(this.parent)) {
		 this.parent.traverse(args);
	 }
 };

 prototype.callFn = function(args, index) {
	 if (!args['stop']) {
		 if (Util.isNull(args['target'])) {
			 Util.callFn(this, args['fn'], args, index);
		 }
		 else {
			 args['node'] = this;
			 Util.callFn(args['target'], args['fn'], args, index);
		 }
	 }
 };

 function Tree(args) {
	 this.list = args['list'];

	 var options = {
'nodeKey': "nodeId",
		 'parentKey': "parentId"
	 };

	 // 옵션을 익스텐드합니다
	 this._options = JGM._extend(options, args['options']);

	 this.map = {};
	 this.root = new TreeNode({'tree':this});
	 this.infants = {};
 }

 Tree.getInstance = function(args) {
	 return new Tree(args);
 };

 prototype = Tree.prototype;

 prototype.__init = function() {
	 this.makeTree();
 };

 prototype.destroy = function() {
	 this.root.destroyDown();
	 this.map = {};
	 this.emptyInfants();

	 delete this.list;
	 delete this._options;
	 delete this.map;
	 delete this.root;
	 delete this.infants;

	 delete this.mid;
 };

 prototype.detach = function() {
	 this.root.detachDown();
	 this.emptyInfants();
 };

 prototype.emptyInfants = function() {
	 var i,
		 inf = this.infants;
	 for (i in inf) {
		 if (inf.hasOwnProperty(i)) {
			 inf[i].length = 0;
		 }
	 }
	 this.infants = {};
 };

 prototype.reattach = function(list) {
	 this.detach();

	 if (Util.isNull(list)) {
		 list = this.list;
	 }

	 var nodeKey = this._options['nodeKey'],
		 map = this.map,
		 len = list.length,
		 i = 0;
	 for (; i < len; i++) {
		 this.attachNode(map[list[i][nodeKey]]);
	 }
 };

 prototype.makeTree = function(list) {
	 if (Util.isNull(list)) {
		 list = this.list;
	 }
	 var i = 0,
		 len = list.length;
	 for (; i < len; i++) {
		 this.createNode(list[i]);
	 }
 };

 prototype.hasNode = function(data) {
	 return Util.isNotNull(data) && this.map.hasOwnProperty(data[this._options['nodeKey']]);
 };

 prototype.getNode = function(data) {
	 return this.map[data[this._options['nodeKey']]];
 };

 prototype.getNodeByNodeId = function(nodeId) {
	 return this.map[nodeId];
 };

 prototype.createNode = function(data) {
	 if (this.hasNode()) {
		 return;
	 }

	 var nodeId = data[this._options['nodeKey']],
		 node = new TreeNode({'tree':this, 'data':data, 'nodeId':nodeId});
	 this.map[nodeId] = node;
	 this.attachNode(node);
	 return node;
 };

 prototype.adoptInfants = function(node, nodeId) {
	 if (this.infants.hasOwnProperty(nodeId)) {
		 var list = this.infants[nodeId],
			 i = 0,
			 len = list.length;
		 for (; i < len; i++) {
			 node.addChild(list[i]);
		 }
		 list.length = 0;
		 delete this.infants[nodeId];
	 }
 };

 prototype.attachNode = function(node) {
	 var nodeId = node.nodeId,
		 parentId = node.data[this._options['parentKey']];

	 this.adoptInfants(node, nodeId);

	 if (Util.isNull(parentId) || parentId == nodeId) {
		 this.root.addChild(node);
		 return true;
	 }
	 if (this.map.hasOwnProperty(parentId)) {
		 this.map[parentId].addChild(node);
		 return true;
	 }

	 this.addToInfants(node, parentId);

	 return false;
 };

 prototype.changeNodeId = function(node, before, newId) {
	 if (before === newId) {
		 return;
	 }

	 delete this.map[before];
	 this.map[newId] = node;

	 this.removeChildren(node);
	 node.nodeId = node.data[this._options['nodeKey']] = newId;

	 if (Util.isNotNull(node.parent)) {
		 node.parent.childrenMap[newId] = node.parent.childrenMap[before];
		 delete node.parent.childrenMap[before];
	 }

	 this.adoptInfants(node, newId);
 };

 prototype.changeParentId = function(node, before, newId) {
	 if (before === newId) {
		 return;
	 }

	 if (Util.isNull(node.parent)) {
		 this.removeFromInfants(node, before);
	 }

	 var parent = this.map[newId];
	 node.setParent(parent);
	 node.data[this._options['parentKey']] = newId;

	 if (Util.isNull(parent)) {
		 this.addToInfants(node, newId);
	 }
 };

 prototype.destroyNodeByData = function(data) {
	 this.destroyNode(this.getNode(data));
 };

 prototype.destroyNode = function(node) {
	 this.removeChildren(node);
	 this.removeFromInfants(node);
	 this.removeFromMap(node);
	 node.destroyCompletely();
 };

 prototype.removeFromMap = function(node) {
	 delete this.map[node.nodeId];
 };

 prototype.addToInfants = function(node, parentId) {
	 if (!this.infants.hasOwnProperty(parentId)) {
		 this.infants[parentId] = [];
	 }
	 this.infants[parentId].push(node);
 };

 prototype.removeFromInfants = function(node, parentId) {
	 if (Util.isNull(parentId)) {
		 parentId = node.data[this._options['parentKey']];
	 }

	 if (this.infants.hasOwnProperty(parentId)) {
		 this.infants[parentId].remove(node);
		 if (this.infants[parentId].length === 0) {
			 delete this.infants[parentId];
		 }
	 }
 };

 prototype.removeChildren = function(node) {
	 if (node.children.length !== 0) {
		 if (!this.infants.hasOwnProperty(node.nodeId)) {
			 this.infants[node.nodeId] = [];
		 }
		 this.infants[node.nodeId].pushList(node.children);
		 node.removeAllChildren();
	 }
 };

 prototype.sortList = function(list) {
	 if (Util.isNull(list)) {
		 list = [];
	 }
	 else {
		 list.length = 0;
	 }
	 this.root.traverseChildren({'fn':function() {
			 list.push(this.data);
			 }});
 };

})();
