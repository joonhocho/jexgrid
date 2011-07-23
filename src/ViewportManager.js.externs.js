/**
 * @externs
 */
(function(){
 goog.require('jx.grid.ViewportManager');
 goog.require('jx.grid.Cell');
 var c = jx.grid.ViewportManager,
 p = c.prototype,
 c2 = jx.grid.Cell,
 p2 = c2.prototype;

 p.scrollTo;
 p.scrollToRowLazy;
 p.scrollToColLazy;
 p.scrollToLazy;
 p.scrollToRow;
 p.scrollToCol;
 p.getColWidth;
 p.getColWidthByKey;
 p.getHeight;
 p.getInnerHeight;
 p.getInnerWidth;
 p.getCanvasHeight;
 p.getCanvasWidth;
 p.getColLeft;
 p.setWidthByKey;
 p.getScrollTop;
 p.getScrollLeft;
 p.setScrollTop;
 p.setScrollLeft;
 p.getScrollHForSafe;
 p.destroyRow;
 p.destroyRowById;
 p.destroyRowByIdx;
 p.isRowLockedById;
 p.isRowLocked;
 p.isRowLockedByIdx;
 p.lockRowById;
 p.lockRow;
 p.lockRowByIdx;
 p.unlockRowById;
 p.unlockRow;
 p.unlockRowByIdx;
 p.unlockAllRows;
 p.rerenderRowById;
 p.rerenderRow;
 p.rerenderRowByIdx;
 p.rerenderCellByIdAndKey;
 p.rerenderCellByIdx;
 p.isRenderedById;
 p.isRendered;
 p.isRenderedByIdx;
 p.getRowById;
 p.getRow;
 p.getRowByIdx;
 p.getRenderedRowById;
 p.getRenderedRow;
 p.getRenderedRowByIdx;
 p.getRenderedRows;
 p.getCell;
 p.getCellByIdAndKey;
 p.getRenderedCell;
 p.getRenderedCellByIdAndKey;

 p2.rerender;
 p2.scrollTo;
})();
