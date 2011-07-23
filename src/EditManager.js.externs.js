/**
 * @externs
 */
(function(){
goog.require('jx.grid.EditManager');
goog.require('jx.grid.Editor');
goog.require('jx.grid.Cell');

 var c = jx.grid.EditManager,
 p = c.prototype,
 c2 = jx.grid.Editor,
 p2 = c2.prototype,
 c3 = jx.grid.Cell,
 p3 = c3.prototype;

p.beginEdit;
p.active;
p.notActive;
p.begin;
p.cancel;
p.commit;


c2.numberKeys;
c2.isNumberKey;
c2.numberEdit;
c2.onkeydown;
c2.floatKeys;
c2.isFloatKey;
c2.floatEdit;
c2.onkeydown;
c2.alphabetKeys;
c2.isAlphabet;
c2.alphabetEdit;

p2.edit;
p2.focus;
p2.value;
p2.path;

p3.isEdited;
p3.setValue;
p3.isEditable;

})();

