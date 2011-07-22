goog.provide('test.test3');
goog.require('test.test4');

test.test3.test4 = test.test4;
test.test3.doit = function() {
	alert(this.test4);
}
