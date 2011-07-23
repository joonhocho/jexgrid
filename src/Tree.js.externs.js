/**
 * @externs
 */
(function(){
 goog.require('jx.data.TreeNode');
 goog.require('jx.data.Tree');
 var c = jx.data.TreeNode,
 p = c.prototype,
 c2 = jx.data.Tree,
 p2 = c2.prototype;


 p.destroy;
 p.destroyCompletely;
 p.destroyDown;
 p.detach;
 p.detachCompletely;
 p.detachDown;
 p.isRoot;
 p.getRoot;
 p.isLeaf;
 p.setParent;
 p.hasChild;
 p.addChild;
 p.addChildAt;
 p.removeChild;
 p.removeChildAt;
 p.resetChildIdx;
 p.removeAllChildren;
 p.getSiblings;
 p.getChildIdx;
 p.getIdx;
 p.getPath;
 p.getAncestors;
 p.getDescendents;
 p.getLevel;
 p.find;
 p.traverse;
 p.traverseChildren;
 p.traverseParent;
 p.callFn;



 p2.destroy;
 p2.detach;
 p2.emptyInfants;
 p2.reattach;
 p2.makeTree;
 p2.hasNode;
 p2.getNode;
 p2.getNodeByNodeId;
 p2.createNode;
 p2.adoptInfants;
 p2.attachNode;
 p2.changeNodeId;
 p2.changeParentId;
 p2.destroyNodeByData;
 p2.destroyNode;
 p2.removeFromMap;
 p2.addToInfants;
 p2.removeFromInfants;
 p2.removeChildren;
 p2.sortList;

})();
