console && console.log && console.log('reading javascript source "TimeWatch.js"...');//IF_DEBUG

goog.provide('TimeWatch');

/*!
 * AUTHOR
 *   The JexGrid was written and is maintained by:
 *       Joon Ho Cho <joonho1101@gmail.com>
 * COPYRIGHT
 *   Copyright (c) 2010-2011, WebCash Inc. All rights reserved.
 */

/**
* Time Watch for Debugging
*/
(function(){
goog.exportSymbol('TimeWatch', TimeWatch);

function TimeWatch(msg) {
	var laps = this.laps = [];
	laps.push(msg || null, new Date().getTime());
};

var prototype = TimeWatch.prototype;

prototype.lap = function(msg) {
	this.laps.push(msg || null, new Date().getTime());
};

prototype.stop = function(msg) {
	this.laps.push(msg || null, new Date().getTime());
}

prototype.stack = function() {
	var laps = this.laps,
		i = 2, // after the first
		l = laps.length - 2, // before the last
		msg = laps[0], // start msg
		time = laps[1],
		lastTime = time,
		str = 'TimeWatch\n'; // start time

	// start
	msg = msg ? ': ' + msg : '';
	str += 'start' + msg + ' @' + time + '\n';

	for (; i < l; i += 2) {
		// laps
		msg = laps[i];
		msg = msg ? ': ' + msg : '';

		time = laps[i + 1];

		str += 'lap ' + (i / 2) + msg + ' @' + time + ' +' (time - lastTime) + 'ms\n';

		lastTime = time;
	}

	if (l >= 2) {
		// stop
		msg = laps[l];
		msg = msg ? ': ' + msg : '';
		time = laps[l + 1];

		str += 'stop' + msg + ' @' + time + ' +' (time - lastTime) + 'ms\n';
	}

	return str;
};

})();
