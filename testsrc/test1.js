goog.provide('test.test1');
goog.require('test.test2');

test.test1.test2 = test.test2;
test.test1.doit = function() {
	alert(this.test2);
	this.test2.doit();
}

test.test1.doit();
