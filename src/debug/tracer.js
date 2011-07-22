goog.require('Util');
goog.provide('Tracer');

/*!
 * AUTHOR
 *   The JexGrid was written and is maintained by:
 *       Joon Ho Cho <joonho1101@gmail.com>
 * COPYRIGHT
 *   Copyright (c) 2010-2011, WebCash Inc. All rights reserved.
 */

/**
* Stack/Time Tracer for Debugging
*/
(function(){

 goog.exportSymbol('Tracer', Tracer);

var Tracer = window.Tracer = function() {
	this.stack = "";
	this.timers = {};
};

var prototype = Tracer.prototype;

/**
* Print string and time elapsed with stack trace (if available) to console for
* the specified timer since last update
* @param str string to print
* @param timer name of a timer to use
* @param update update the timer if true
*/
prototype.print = function (str, timer, update) {
	if (str === undefined) {
		str = "";
	}
	if (timer === undefined) {
		timer = "timer";
	}
	if (update === undefined) {
		update = true;
	}

	var old = this.timers[timer],
		now = (new Date()).getTime(),
		diff = Util.isNull(old) ? 0 : now - old;

	Util.print(
		(this.stack.length > 0 ? this.stack + " :: " : "") +
		str + ", Time elapsed since last update: " + diff + "ms"
	);

	if (update) {
		this.timers[timer] = now;
	}
};

/**
* Add a string to the stack
* @param str string to add
*/
prototype.addStack = function(str) {
	this.stack = this.stack + " > " + str;
};

/**
* Remove one level from the stack
*/
prototype.removeStack = function() {
	this.stack = this.stack.substring(0, this.stack.lastIndexOf(" > "));
};

/**
* Clear the stack
*/
prototype.clearStack = function() {
	this.stack = "";
};

if (window.JGM !== undefined) { window.JGM._add("Tracer", undefined); }// TBR

})();
