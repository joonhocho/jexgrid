/**
 * @externs
 */
(function(){
 goog.require('jx.grid.EventManager');
 var c = jx.grid.EventManager,
 p = c.prototype;

 p.register;
 p.bind;
 p.unregister;
 p.trigger;
 p.triggerInvalid;
 p.sendToBack;
 p.sendToFront;


})();
