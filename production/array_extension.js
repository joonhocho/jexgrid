console && console.log && console.log('reading javascript source "array_extention.js"...');//IF_DEBUG
goog.provide('array_extension');
/*!
 * AUTHOR
 *	The JexGrid was written and is maintained by:
 *		 Joon Ho Cho <joonho1101@gmail.com>
 * COPYRIGHT
 *	Copyright (c) 2010-2011, WebCash Inc. All rights reserved.
 */
/**
Array
@scope Array
*/
(function() {
var proto = Array.prototype;
if (!proto.indexOf) {
	proto.indexOf = function(searchElement /*, fromIndex */) {
		"use strict";
		if (this === void 0 || this === null)
			throw new TypeError();
		var t = Object(this);
		var len = t.length >>> 0;
		if (len === 0)
			return -1;
		var n = 0;
		if (arguments.length > 0)
		{
			n = Number(arguments[1]);
			if (n !== n) // shortcut for verifying if it's NaN
				n = 0;
			else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0))
				n = (n > 0 || -1) * Math.floor(Math.abs(n));
		}
		if (n >= len)
			return -1;
		var k = n >= 0
			? n
			: Math.max(len - Math.abs(n), 0);
		for (; k < len; k++)
		{
			if (k in t && t[k] === searchElement)
				return k;
		}
		return -1;
	};
}
if (!proto.lastIndexOf) {
	proto.lastIndexOf = function(searchElement /*, fromIndex*/)
	{
		"use strict";
		if (this === void 0 || this === null)
			throw new TypeError();
		var t = Object(this);
		var len = t.length >>> 0;
		if (len === 0)
			return -1;
		var n = len;
		if (arguments.length > 1)
		{
			n = Number(arguments[1]);
			if (n !== n)
				n = 0;
			else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0))
				n = (n > 0 || -1) * Math.floor(Math.abs(n));
		}
		var k = n >= 0
			? Math.min(n, len - 1)
			: len - Math.abs(n);
		for (; k >= 0; k--)
		{
			if (k in t && t[k] === searchElement)
				return k;
		}
		return -1;
	};
}
if (!proto.filter) {
	proto.filter = function(fun /*, thisp */)
	{
		"use strict";
		if (this === void 0 || this === null)
			throw new TypeError();
		var t = Object(this);
		var len = t.length >>> 0;
		if (typeof fun !== "function")
			throw new TypeError();
		var res = [];
		var thisp = arguments[1];
		for (var i = 0; i < len; i++)
		{
			if (i in t)
			{
				var val = t[i]; // in case fun mutates this
				if (fun.call(thisp, val, i, t))
					res.push(val);
			}
		}
		return res;
	};
}
// Production steps of ECMA-262, Edition 5, 15.4.4.18
if ( !proto.forEach ) {
	proto.forEach = function( callbackfn, thisArg ) {
		"use strict";
		var T,
			O = Object(this),
			len = O.length >>> 0,
			k = 0;
		if ( !callbackfn || !callbackfn.call ) {
			throw new TypeError();
		}
		if ( thisArg ) {
			T = thisArg;
		}
		while( k < len ) {
			var Pk = String( k ),
				kPresent = O.hasOwnProperty( Pk ),
				kValue;
			if ( kPresent ) {
				kValue = O[ Pk ];
				callbackfn.call( T, kValue, k, O );
			}
			k++;
		}
	};
}
if (!proto.every) {
	proto.every = function(fun /*, thisp */)
	{
		"use strict";
		if (this === void 0 || this === null)
			throw new TypeError();
		var t = Object(this);
		var len = t.length >>> 0;
		if (typeof fun !== "function")
			throw new TypeError();
		var thisp = arguments[1];
		for (var i = 0; i < len; i++)
		{
			if (i in t && !fun.call(thisp, t[i], i, t))
				return false;
		}
		return true;
	};
}
if (!proto.map) {
	proto.map = function(fun /*, thisp */)
	{
		"use strict";
		if (this === void 0 || this === null)
			throw new TypeError();
		var t = Object(this);
		var len = t.length >>> 0;
		if (typeof fun !== "function")
			throw new TypeError();
		var res = new Array(len);
		var thisp = arguments[1];
		for (var i = 0; i < len; i++)
		{
			if (i in t)
				res[i] = fun.call(thisp, t[i], i, t);
		}
		return res;
	};
}
if (!proto.some) {
	proto.some = function(fun /*, thisp */)
	{
		"use strict";
		if (this === void 0 || this === null)
			throw new TypeError();
		var t = Object(this);
		var len = t.length >>> 0;
		if (typeof fun !== "function")
			throw new TypeError();
		var thisp = arguments[1];
		for (var i = 0; i < len; i++)
		{
			if (i in t && fun.call(thisp, t[i], i, t))
				return true;
		}
		return false;
	};
}
if ( !proto.reduce ) {
	proto.reduce = function reduce(accumlator){'use strict';
		var i, l = this.length, curr;
		if(typeof accumlator !== "function") // ES5 : "If IsCallable(callbackfn) is false, throw a TypeError exception."
			throw new TypeError("First argument is not callable");
		if((l == 0 || l === null) && (arguments.length <= 1))// == on purpose to test 0 and false.
			throw new TypeError("Array length is 0 and no second argument");
		if(arguments.length <= 1){
			curr = this[0]; // Increase i to start searching the secondly defined element in the array
			i = 1; // start accumulating at the second element
		}
		else{
			curr = arguments[1];
		}
		for(i = i || 0 ; i < l ; ++i){
			if(i in this)
				curr = accumlator.call(undefined, curr, this[i], i, this);
		}
		return curr;
	};
}
if (!proto.reduceRight) {
	proto.reduceRight = function(callbackfn /*, initialValue */)
	{
		"use strict";
		if (this === void 0 || this === null)
			throw new TypeError();
		var t = Object(this);
		var len = t.length >>> 0;
		if (typeof callbackfn !== "function")
			throw new TypeError();
		// no value to return if no initial value, empty array
		if (len === 0 && arguments.length === 1)
			throw new TypeError();
		var k = len - 1;
		var accumulator;
		if (arguments.length >= 2)
		{
			accumulator = arguments[1];
		}
		else
		{
			do
			{
				if (k in this)
				{
					accumulator = this[k--];
					break;
				}
				// if array contains no values, no initial value to return
				if (--k < 0)
					throw new TypeError();
			}
			while (true);
		}
		while (k >= 0)
		{
			if (k in t)
				accumulator = callbackfn.call(undefined, accumulator, t[k], k, t);
			k--;
		}
		return accumulator;
	};
}
})();
