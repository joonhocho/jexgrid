window.console && window.console.log && window.console.log('reading javascript source "TimeWatch.js"...');//IF_DEBUG

goog.require('jx.util');

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
(function(){'use strict';
goog.exportSymbol('TimeWatch', TimeWatch);

function TimeWatch(msg) {
	var laps = this.laps = [];
	this._stopped = false;
	laps.push(msg || null, new Date().getTime());
};

var prototype = TimeWatch.prototype;

prototype.lap = function(msg) {
	if (this._stopped) {
		throw Error('TimeWatch was stopped, thus cannot lap. Please reset!');
	}
	this.laps.push(msg || null, new Date().getTime());
};

prototype.stop = function(msg) {
	this._stopped = true;
	this.laps.push(msg || null, new Date().getTime());
}

prototype.reset = function(msg) {
	var laps = this.laps;
	laps.length = 0;
	this._stopped = false;
	laps.push(msg || null, new Date().getTime());
}

prototype.toString = function() {
	var laps = this.laps,
		len = laps.length,
		i = 2, // after the first
		l = len - (this._stopped ? 2 : 0), // before the last
		msg = laps[0], // start msg
		time = laps[1],
		lastTime = time,
		laptime,
		times = len > 2 ? [] : null,
		sum = 0,
		str = 'TimeWatch\n'; // start time


	// start
	msg = msg ? ': ' + msg : '';
	str += 'start' + msg + ' @' + time + '\n';

	for (; i < l; i += 2) {
		// laps
		msg = laps[i];
		msg = msg ? ': ' + msg : '';

		time = laps[i + 1];

		times.push(laptime = time - lastTime);
		sum += laptime;

		str += 'lap ' + (i / 2) + msg + ' @' + time + ' +' + laptime + 'ms\n';

		lastTime = time;
	}

	if (l >= 2 && this._stopped) {
		// stop
		msg = laps[l];
		msg = msg ? ': ' + msg : '';
		time = laps[l + 1];

		times.push(laptime = time - lastTime);
		sum += laptime;

		str += 'stop' + msg + ' @' + time + ' +' + laptime + 'ms\n';
	}

	if (times) {
		var n = times.length,
			avg = sum / n,
			std = 0;

		str += 'total number of laps: ' + n + '\n';
		str += 'total elapsed time: ' + sum + 'ms\n';

		str += 'average lap time: ' + avg.toFixed(2) + 'ms\n';
		times.forEach(function(t) {
			std += (t - avg) * (t - avg);
		});
		std = Math.sqrt(std / n);

		str += 'standard deviation: ' + std.toFixed(2) + 'ms\n';
	}

	return str;
};

})();
