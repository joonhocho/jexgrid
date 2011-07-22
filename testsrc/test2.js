goog.provide('test.test2');
goog.require('test.test3');
goog.require('test.test4');

test.test2.test3 = test.test3;
test.test2.test4 = test.test4;
test.test2.doit = function() {
	alert(this.test3);
	alert(this.test4);
	this.test3.doit();
	this.test4.doit();
}
