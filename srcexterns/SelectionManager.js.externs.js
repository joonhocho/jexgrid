/**
 * @externs
 */
(function(){
 goog.require('jx.grid.SelectionManager');
 goog.require('jx.grid.Cell');
 var c = jx.grid.SelectionManager,
 p = c.prototype;


 p.getCell;
 p.selectRow;
 p.selectCell;
 p.addRow;
 p.addCell;
 p.selectRange;
 p.empty;

 jx.grid.Cell.prototype.isSelected;

})();
