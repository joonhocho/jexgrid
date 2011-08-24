window.console && window.console.log && window.console.log('reading javascript source "engine_extension.js"...');//IF_DEBUG

goog.require('array_extension');

goog.provide('engine_extension');
/*!
 * AUTHOR
 *   The JexGrid was written and is maintained by:
 *       Joon Ho Cho <joonho1101@gmail.com>
 * COPYRIGHT
 *   Copyright (c) 2010-2011, WebCash Inc. All rights reserved.
 */
(function(){'use strict';
var nProto = Number.prototype,
	sProto = String.prototype,
	aProto = Array.prototype;
if (!nProto.toFixedFloat) {
	nProto.toFixedFloat = function(n) {
		return parseFloat(this.toFixed(n));
	};
}

if (!sProto.toInt) {
	sProto.toInt = function() {
		var a;
		a = parseInt(this, 10);
		if (a === a) {
			// checking for NaN
			return a;
		}
		if ((a = this.replace(/[^\d\.\-]/g, '')).length === 0) {
			return NaN;
		}
		var c,
			dot = 0,
			sign = 0,
			len = a.length,
			i = 0,
			r = false;
		
		for (; i < len; i++) {
			c = a.charAt(i);
			if (c === '.') {
				if (++dot === 2) {
					r = true;
					break;
				}
			}
			else if (c === '-') {
				if (++sign === 2) {
					r = true;
					break;
				}
			}
		}
			
		if (r === true && (a = a.replace(/[\.\-]/g, '')).length === 0) {
			return NaN;
		}
			
		if (/^-*0*\./.test(a) || (a = a.replace(/^-0+/, '-')).length === 0 || (a = a.replace(/^0+/, '')).length === 0) {
			return 0;
		}
			
		return parseInt(a, 10);
	};
}

if (!sProto.toFloat) {
	sProto.toFloat = function() {
		var a;
		if ((a = this.replace(/[^-\d\.]/g, '')).length === 0) {
			return NaN;
		}
		
		var i = 0,
			len = a.length,
			ch,
			c = 0,
			d = 0;
		for (; i < len; i++) {
			ch = a.charAt(i);
			if (ch === '.') {
				if (c !== 0) {
					return NaN;
				}
				else {
					c++;
				}
			}
			else if (ch === '-') {
				if (d !== 0) {
					return NaN;
				}
				else {
					d++;
				}
			}
		}
		
		return parseFloat(a);
	};
}

if (!aProto.remove) {
	aProto.remove = function(el) {
		if (this.length === 0) {
			return -1;
		}

		var index = this.indexOf(el);
		if (index !== -1) {
			this.splice(index, 1);
		}
		
		return index;
	};
}

if (!aProto.removeAll) {
	aProto.removeAll = function(el) {
		if (this.length === 0) {
			return this;
		}

		var index = this.length;
		while ((index = this.lastIndexOf(el, index - 1)) !== -1) {
			this.splice(index, 1);
			if (index === 0) {
				return this;
			}
		}
		return this;
	};
}

if (!aProto.removeList) {
	aProto.removeList = function(array) {
		if (this.length === 0 || array.length === 0) {
			return this;
		}

		var arrlen = array.length,
			i = 0,
			index;
		for (; i < arrlen; i++) {
			if ((index = this.indexOf(array[i])) !== -1) {
				this.splice(index, 1);
			}
		}
		return this;
	};
}

if (!aProto.removeAt) {
	aProto.removeAt = function(i) {
		if (this.length === 0) {
			return;
		}
			
		if (i < 0) {
			i = this.length + i;
		}
		if (i < 0) {
			i = 0;
		}
		if (this.hasOwnProperty(i) && i < this.length) {
			return this.splice(i, 1)[0];
		}
	};
}

if (!aProto.addAt) {
	aProto.addAt = function(index, el) {
		this.splice(index, 0, el);
		return el;
	};
}

if (!aProto.pushList) {
	aProto.pushList = function(array) {
		if (array.length === 0) {
			return this.length;
		}

		return aProto.push.apply(this, array);
	};
}

if (!aProto.pushListAt) {
	aProto.pushListAt = function(index, array) {
		if (array.length === 0) {
			return this.length;
		}

		var param = [index, 0];
		aProto.push.apply(param, array);
		aProto.splice.apply(this, param);
		return this.length;
	};
}
})();
