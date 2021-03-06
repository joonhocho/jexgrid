goog.require('array_extension');
goog.provide('jx.util');
goog.provide('Util');
goog.provide('echo');
/*!
 * AUTHOR
 *   The JexGrid was written and is maintained by:
 *       Joon Ho Cho <joonho1101@gmail.com>
 * COPYRIGHT
 *   Copyright (c) 2010-2011, WebCash Inc. All rights reserved.
 */
(function(){'use strict';
var undefined = (function(){})(),
	console = window.console,
	CONSOLE_LOGS = [],
	/**
	 * @param {...*} var_args
	 */
	echo;
if (console && console.log) {
	echo = function(var_args){
		for (var i = 0, l = arguments.length; i < l; i++) {
			console.log(arguments[i]);
		}
	};
}
else {
	echo = function(var_args){
		CONSOLE_LOGS.push.apply(CONSOLE_LOGS, arguments);
	}
}
 goog.exportSymbol('jx.util', Util);
 goog.exportSymbol('Util', Util);
 goog.exportSymbol('echo', echo);
// tested
Util.isNull = function(val) {
	return val == null;
};
// tested
Util.isNotNull = function(val) {
	return val != null;
};
// tested
Util.isNullAnd = function() {
	var i = 0,
		len = arguments.length;
	for (; i < len; i++) {
		if (arguments[i] != null) {
			return false;
		}
	}
	return true;
};
// tested
Util.isNullOr = function() {
	var i = 0,
		len = arguments.length;
	for (; i < len; i++) {
		if (arguments[i] == null) {
			return true;
		}
	}
	return false;
};
// tested
Util.isNotNullAnd = function() {
	var i = 0,
		len = arguments.length;
	for (; i < len; i++) {
		if (arguments[i] == null) {
			return false;
		}
	}
	return true;
};
// tested
Util.isNotNullOr = function() {
	var i = 0,
		len = arguments.length;
	for (; i < len; i++) {
		if (arguments[i] != null) {
			return true;
		}
	}
	return false;
};
Util.ifNull = function(toCheck, ifNull, ifNotNull) {
	if (toCheck == null) {
		return ifNull;
	}
	return ifNotNull === undefined ? toCheck : ifNotNull;
};
Util.ifTrue = function(toCheck, ifTrue, ifNotTrue) {
	if (toCheck === true) {
		return ifTrue;
	}
	return ifNotTrue === undefined ? toCheck : ifNotTrue;
};
Util.isFunction = function(val) {
	return typeof val == "function";
};
Util.isString = function(val) {
	return typeof val == "string";
};
Util.isNumber = function(val) {
	return typeof val == "number";
};
Util.isObject = function(val) {
	return typeof val == "object";
};
Util.isArray = function(val) {
	var isArray = Array.isArray;
	return val && typeof val == 'object' && ((isArray && isArray(val)) || (typeof val.length == 'number' && val.hasOwnProperty('length') && !val.propertyIsEnumerable('length')));
};
// tested
Util.split = function(str, regex, filter, map) {
	if (typeof str !== "string") {
		return [];
	}
	regex = regex === undefined ? /\s+/ : regex;
	filter = filter === undefined ? function(s) { return !!s; } : filter;
	map = map === undefined ? function(s) { return $.trim(s); } : map;
	var res = str.split(regex);
	if (map) {
		res = res.map(map);
	}
	if (filter) {
		res = res.filter(filter);
	}
	return res;
};
Util.isEmpty = function(obj) {
	if (!obj) {
		return true;
	}
	if (typeof obj != 'object') {
		return false;
	}
	var i;
	for (i in obj) {
		if (obj.hasOwnProperty(i)) {
			return false;
		}
	}
	return true;
}
// tested
Util.isEmptyObj = function(obj) {
	if (obj == null) {
		return true;
	}
	if (typeof obj != "object") {
		return false;
	}
	var i;
	for (i in obj) {
		if (obj.hasOwnProperty(i)) {
			return false;
		}
	}
	return true;
};
// tested
Util.isNotEmptyObj = function(obj) {
	if (obj == null || typeof obj != "object") {
		return false;
	}
	var i;
	for (i in obj) {
		if (obj.hasOwnProperty(i)) {
			return true;
		}
	}
	return false;
};
Util.isEmptyString = function(obj) {
	return obj == null || obj === "";
};
// tested
Util.isEmptyArray = function(obj) {
	if (obj == null) {
		return true;
	}
	if (!Util.isArray(obj)) {
		return false;
	}
	var i = 0,
		len = obj.length;
	for (; i < len; i++) {
		if (obj.hasOwnProperty(i)) {
			return false;
		}
	}
	return true;
};
// tested
Util.emptyObject = function(map) {
	if (!map || typeof map != "object") {
		return map;
	}
	if (Util.isArray(map)) {
		map.length = 0;
		return map;
	}
	var i;
	for (i in map) {
		if (map.hasOwnProperty(i)) {
			delete map[i];
		}
	}
	return map;
};
// tested
Util.deleteUndefined = function(map) {
	if (!map || typeof map != "object") {
		return map;
	}
	var i;
	if (Util.isArray(map)) {
		var len = map.length;
		for (i = len - 1; i > -1; i--) {
			if (map.hasOwnProperty(i) && map[i] === undefined) {
				map.splice(i, 1);
			}
		}
		return map;
	}
	for (i in map) {
		if (map.hasOwnProperty(i) && map[i] === undefined) {
			delete map[i];
		}
	}
	return map;
};
Util.deepClone = function(obj) {
	if (!obj) {
		return obj;
	}
	switch (typeof obj) {
		case 'boolean':
		case 'number':
		case 'string':
		case 'function':
			return obj;
	}
	if (Util.isArray(obj)) {
		var clone = [],
			i = 0,
			len = obj.length;
		for (; i < len; i++) {
			if (i in obj) {
				clone[i] = Util.deepClone(obj[i]);
			}
		}
		return clone;
	}
	var clone = {},
		i;
	for (i in obj) {
		if (obj.hasOwnProperty(i)) {
			clone[i] = Util.deepClone(obj[i]);
		}
	}
	return clone;
}
Util.clone = function(obj, attr, deep) {
	if (!obj) {
		return obj;
	}
	switch (typeof obj) {
		case 'boolean':
		case 'number':
		case 'string':
		case 'function':
			return obj;
	}
	if (Util.isArray(obj)) {
		if (deep === 1) {
			return Array.prototype.slice.call(obj);
		}
		var clone = [],
			len = obj.length,
			i = 0,
			nd = deep !== undefined ? deep - 1 : undefined;
		for (; i < len; i++) {
			if (i in obj) {
				clone[i] = Util.clone(obj[i], attr, nd);
			}
		}
		return clone;
	}
	var clone = {},
		i,
		noattr = Util.isEmptyObj(attr);
	if (deep === 1) {
		if (noattr) {
			for (i in obj) {
				if (obj.hasOwnProperty(i)) {
					clone[i] = obj[i];
				}
			}
		}
		else {
			for (i in attr) {
				if (attr.hasOwnProperty(i) && obj.hasOwnProperty(i)) {
					clone[i] = obj[i];
				}
			}
		}
	}
	else {
		var nd = deep !== undefined ? deep - 1 : undefined;
		if (noattr) {
			for (i in obj) {
				if (obj.hasOwnProperty(i)) {
					clone[i] = Util.clone(obj[i], undefined, nd);
				}
			}
		}
		else {
			for (i in attr) {
				if (attr.hasOwnProperty(i) && obj.hasOwnProperty(i)) {
					clone[i] = Util.clone(obj[i], undefined, nd);
				}
			}
		}
	}
	return clone;
};
// tested
Util.toArray = function(obj) {
	var arr = [],
		i;
	for (i in obj) {
		if (obj.hasOwnProperty(i)) {
			arr.push(obj[i]);
		}
	}
	return arr;
};
Util.toArrayWithKey = function(obj) {
	var arr = [],
		i;
	for (i in obj) {
		if (obj.hasOwnProperty(i)) {
			arr.push({'key':i, 'val':obj[i]});
		}
	}
	return arr;
};
Util.random = function(num) {
	return Math.floor(num * Math.random());
};
// tested
Util.bound = function(x, min, max) {
	if (!isNaN(max)) {
		x = Math.min(x, max);
	}
	if (!isNaN(min)) {
		x = Math.max(x, min);
	}
	return x;
};
// tested
// this, fn, args...
Util.callFn = function() {
	if (arguments.length <= 3) {
		return arguments[1].call(arguments[0], arguments[2]);
	}
	return arguments[1].apply(arguments[0], Array.prototype.slice.call(arguments, 2));
};
Util.formatNumber = function(num, precision, currency, decimal, comma){
	currency = currency === undefined ? "&#8361; " : currency;
	precision = isNaN(precision) ? 0 : precision;
	decimal = decimal === undefined ? "." : decimal;
	comma = comma === undefined ? "," : comma;
	var s = num < 0 ? "-" : "",
		i = parseInt(num = Math.abs(+num || 0).toFixed(precision), 10) + '',
		j = i.length;
		j = j > 3 ? j % 3 : 0;
	return currency + s + (j ? i.substr(0, j) + comma : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + comma) + (precision ? decimal + Math.abs(num - i).toFixed(precision).slice(2) : "");
};
Util.getBodyScroll = function() {
	var left = 0,
		top = 0;
	if (typeof (window.pageYOffset) === 'number') {
		top = window.pageYOffset;
		left = window.pageXOffset;
	}
	else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
		top = document.body.scrollTop;
		left = document.body.scrollLeft;
	}
	else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
		top = document.documentElement.scrollTop;
		left = document.documentElement.scrollLeft;
	}
	return [left, top];
};
// tested
Util.hasClass = function(node, className) {
	if (node && className) {
		var nodeClass = node.className;
		if (nodeClass === className) {
			return true;
		}
		if (nodeClass && nodeClass.length >= className.length) {
			var cl = node.classList || Util.split(nodeClass),
				i = 0,
				len = cl.length;
			for (; i < len; i++) {
				if (cl[i] === className) {
					return true;
				}
			}
		}
	}
	return false;
};
// tested
Util.hasTagAndClass = function(node, tag, className) {
	if (node && tag && className) {
		if (node.tagName === tag) {
			var nodeClass = node.className;
			if (nodeClass === className) {
				return true;
			}
			if (nodeClass && nodeClass.length >= className.length) {
				var cl = node.classList || Util.split(nodeClass),
					i = 0,
					len = cl.length;
				for (; i < len; i++) {
					if (cl[i] === className) {
						return true;
					}
				}
			}
		}
	}
	return false;
};
// tested
Util.closest = function(node, className, end) {
	if (end) {
		// node must be contained inside the end node
		var p = node,
			contained = false;
		while (p) {
			if (p === end) {
				contained = true;
				break;
			}
			p = p.parentNode;
		}
		if (!contained) {
			return null;
		}
	}
	if (Util.hasClass(node, className)) {
		return node;
	}
	var found;
	for (node = node.parentNode; node && node !== end; node = node.parentNode) {
		if (Util.hasClass(node, className)) {
			return node;
		}
	}
	return null;
};
// tested
Util.closestWithTag = function(node, tag, className, end) {
	if (end) {
		// node must be contained inside the end node
		var p = node,
			contained = false;
		while (p) {
			if (p === end) {
				contained = true;
				break;
			}
			p = p.parentNode;
		}
		if (!contained) {
			return null;
		}
	}
	if (Util.hasTagAndClass(node, tag, className)) {
		return node;
	}
	var found;
	for (node = node.parentNode; node && node !== end; node = node.parentNode) {
		if (Util.hasTagAndClass(node, tag, className)) {
			return node;
		}
	}
	return null;
};
// tested
Util.findFirstByClass = function(node, className) {
	if (node) {
		if (Util.hasClass(node, className)) {
			return node;
		}
		var i = 0,
			c = node.childNodes,
			clen = c.length,
			n,
			found;
		for (; i < clen; i++) {
			n = c[i];
			if (n && (found = Util.findFirstByClass(n, className)) !== undefined) {
				return found;
			}
		}
	}
	return null;
};
// tested
Util.findFirstByTagAndClass = function(node, tag, className) {
	if (node) {
		if (Util.hasTagAndClass(node, tag, className)) {
			return node;
		}
		var i = 0,
			c = node.childNodes,
			clen = c.length,
			found;
		for (; i < clen; i++) {
			if (Util.isNotNull(c[i]) && (found = Util.findFirstByTagAndClass(c[i], tag, className)) !== undefined) {
				return found;
			}
		}
	}
	return null;
};
// tested
Util.findByClass = function(node, className, list) {
	list = list || [];
	if (node) {
		if (Util.hasClass(node, className)) {
			list.push(node);
		}
		var i = 0,
			c = node.childNodes,
			clen = c.length;
		for (; i < clen; i++) {
			if (Util.isNotNull(c[i])) {
				Util.findByClass(c[i], className, list);
			}
		}
	}
	return list;
};
// tested
Util.findByTagAndClass = function(node, tag, className, list) {
	list = list || [];
	if (node) {
		if (Util.hasTagAndClass(node, tag, className)) {
			list.push(node);
		}
		var i = 0,
			c = node.childNodes,
			clen = c.length;
		for (; i < clen; i++) {
			if (Util.isNotNull(c[i])) {
				Util.findByTagAndClass(c[i], tag, className, list);
			}
		}
	}
	return list;
};
// tested
Util.getHead = function() {
	if (document.head) {
		return document.head;
	}
	return document.getElementsByTagName("head")[0];
};
// tested
Util.appendTag = function(node, tag) {
	return node.appendChild(document.createElement(tag));
};
// tested
Util.appendHTML = function(node, html) {
	var temp = document.createElement("div"),
		len,
		i = 0,
		res = [];
	temp.innerHTML = html;
	len = temp.childNodes.length;
	for (; i < len; i++) {
		res.push(node.appendChild(temp.firstChild));
	}
	return res;
};
// tested
Util.createStyle = function(code) {
	if (code == null) {
		code = "";
	}
	var css = document.createElement('style');
	css.type = 'text/css';
	css.rel = 'stylesheet';
	if (css.styleSheet) {
		css.styleSheet.cssText = code;
	}
	else {
		css.appendChild(document.createTextNode(code));
	}
	Util.getHead().appendChild(css);
	return css;
};
// tested
Util.removeStyle = function(css) {
	if (css != null && css.parentNode != null) {
		Util.getHead().removeChild(css);
	}
};
// tested
Util.setStyle = function(css, code) {
	if (css == null) {
		return "";
	}
	if (css.styleSheet) {
		return (css.styleSheet.cssText = code);
	}
	return (css.childNodes[0].nodeValue = code);
};
// tested
Util.appendStyle = function(css, code) {
	if (css == null) {
		return "";
	}
	if (css.styleSheet) {
		return (css.styleSheet.cssText += code);
	}
	return (css.childNodes[0].nodeValue += code);
};
// tested
Util.getStyle = function(css) {
	if (css == null) {
		return "";
	}
	if (css.styleSheet) {
		return css.styleSheet.cssText;
	}
	return css.childNodes[0].nodeValue;
};
// tested
Util.appendScript = function(code) {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	if (script.text) {
		script.text = code;
	}
	else {
		script.innerHTML = code;
	}
	Util.getHead().appendChild(script);
	return script;
};
Util.appendScriptFile = function(filename) {
	document.write('<script type="text/javascript" src="' + filename + '"></' + 'script>');
};
// tested
Util.outerHTML = function(node) {
	// if IE, Chrome take the internal method otherwise build one
	if (node.outerHTML === undefined) {
		var div = document.createElement('div');
		div.appendChild(node.cloneNode(true));
		return div.innerHTML;
	}
	return node.outerHTML;
};
// tested
Util.index = function(node) {
	var i = 0,
		el = node;
	while ((el = el.previousSibling) != null) {
		++i;
	}
	return i;
};
// tested
Util.contains = function(node, target, scope) {
	var el = target;
	while (el != null) {
		if (el === node) {
			return true;
		}
		if (el === scope) {
			return false;
		}
		el = el.parentNode;
	}
	return false;
};
// tested
Util.areEqualArrays = function(ar, br) {
	if (ar == null || br == null) {
		return false;
	}
	if (ar === br) {
		return true;
	}
	/*
	   if (!(ar instanceof Array) || !(br instanceof Array)) {
	   return false;
	   }
	   */
	if (ar.length !== br.length) {
		return false;
	}
	var i = 0,
		len = ar.length;
	for (; i < len; i++) {
		if ((ar.hasOwnProperty(i) && !br.hasOwnProperty(i)) || (br.hasOwnProperty(i) && !ar.hasOwnProperty(i)) || ar[i] !== br[i]) {
			return false;
		}
	}
	return true;
};
// tested
Util.areEqualObjects = function(ar, br) {
	if (ar == null || br == null) {
		return false;
	}
	if (ar === br) {
		return true;
	}
	if (typeof ar !== "object" || typeof br !== "object") {
		return false;
	}
	var i;
	for (i in ar) {
		if (ar.hasOwnProperty(i)) {
			if (!br.hasOwnProperty(i) || ar[i] !== br[i]) {
				return false;
			}
		}
	}
	for (i in br) {
		if (br.hasOwnProperty(i)) {
			if (!ar.hasOwnProperty(i) || ar[i] !== br[i]) {
				return false;
			}
		}
	}
	return true;
};
Util.areEqualComplex = function(ar, br, arch) {
	if (ar == null || br == null) {
		return false;
	}
	if (ar === br) {
		return true;
	}
	var len = arch.length,
		type = arch[0];
	if (len === 1) {
		if (type === "array") {
			return Util.areEqualArrays(ar, br);
		}
		return Util.areEqualObjects(ar, br);
	}
	if (len > 1) {
		var subArch = arch.slice(1),
			i = 0;
		if (type === "array") {
			if (ar.length !== br.length) {
				return false;
			}
			var alen = ar.length;
			for (; i < alen; i++) {
				if (!br.hasOwnProperty(i) || !Util.areEqualComplex(ar[i], br[i], subArch)) {
					return false;
				}
			}
			return true;
		}
		else {
			for (i in ar) {
				if (ar.hasOwnProperty(i)) {
					if (!br.hasOwnProperty(i) || !Util.areEqualComplex(ar[i], br[i], subArch)) {
						return false;
					}
				}
			}
			for (i in br) {
				if (br.hasOwnProperty(i)) {
					if (!ar.hasOwnProperty(i) || !Util.areEqualComplex(ar[i], br[i], subArch)) {
						return false;
					}
				}
			}
			return true;		
		}
	}
};
/**
  Check type of given object against given type, and
  either return false or throw a 'TypeError' exception if the type is not correct.
  @function {boolean} typeCheck
  @param {string | Function} type - correct type of object to check against
  @param {*} obj - object to check type of
  @param {boolean=} allowUndefined - if true, undefined for object is considered as correct type
  @param {boolean=} allowNull - if true, null for object is considered as correct type
  @param {boolean=} noThrow - if true, return false instead of throwing 'TypeError' exception
  @return true if type of object is correct
  @throws TypeError when the type of object is incorrect
  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
Util.typeCheck = function(type, obj, allowUndefined, allowNull, noThrow) {
	// return true when object is undefined and undefined is allowed, or
	// object is null and null is allowed
	if ((allowUndefined && obj === undefined) || (allowNull && obj === null)) {
		return true;
	}
	switch (typeof type) {
		case "string":
			// return true if type is correct, or
			if (typeof obj === type) {
				return true;
			}
			break;
		case "function":
			if (obj instanceof type) {
				return true;
			}
			break;
	}
	// return false instead if noThrow is set
	if (noThrow) {
		return false;
	}
	// throw an exception
	throw new TypeError("object is not a " + type + ", but is a " + typeof obj);
};
/**
  Replace variable strings with string values.
  @function {string} sprint
  @param {string} str - string with variables
  @param {Object} obj - object of variable to value mappings
  @param {string=} prefix - variable prefix. default to '%'.
  @param {string=} suffix - variable suffix. default to '%'.
  @return string with injected values
  @throws TypeError when parameter types are incorrect
  @author 조준호
  @since 1.3.0
  @version 1.3.0
  */
Util.sprint = function(str, obj, prefix, suffix) {
	// check types of parameters
	Util.typeCheck("string", str);
	Util.typeCheck("object", obj);
	Util.typeCheck("string", prefix, true); // allow undefined
	Util.typeCheck("string", suffix, true); // allow undefined
	var prefixLength,
		suffixLength,
		i;
	// if prefix is undefined, set '%' as default prefix
	if (prefix === undefined) {
		prefix = '%';
	}
	// if suffix is undefined, set '%' as default suffix
	if (suffix === undefined) {
		suffix = '%';
	}
	// iterate through object and replace each key string with value string
	for (i in obj) {
		if (obj.hasOwnProperty(i)) {
			str = str.replace(new RegExp(prefix + i + suffix, "gm"), obj[i]);
		}
	}
	return str;
};
Util.tagReplaces = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;'
};
Util.replaceTag = function(tag) {
	return Util.tagReplaces[tag] || tag;
};
Util.escapeHtmlTags = function(str) {
	return str.replace(/[&<>]/g, Util.replaceTag);
};
Util.escapeRegExp = function(str) {
	return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
Util.strReplace = function(str, replaceMap) {
	var i,
		search = [];
	for (i in replaceMap) {
		if (replaceMap.hasOwnProperty(i)) {
			search.push(Util.escapeRegExp(i));
		}
	}
	return str.replace(new RegExp('(' + search.join('|') + ')', 'gm'), function(match) {
		return replaceMap[match];
	});
}
Util.calCheckSize = function() {
	var res = {},
		div = document.createElement("div");
	document.body.appendChild(div);
	div.innerHTML = "<input type='checkbox' style='margin:0;padding:0;overflow:hidden'/>";
	res.checkboxW = div.childNodes[0].offsetWidth;
	res.checkboxH = div.childNodes[0].offsetHeight;
	div.innerHTML = "<input type='radio' style='margin:0;padding:0;overflow:hidden'/>";
	res.radioW = div.childNodes[0].offsetWidth;
	res.radioH = div.childNodes[0].offsetHeight;
	document.body.removeChild(div);
	return res;
};
Util.which = function(keys) {
	var keyMap = {},
		i = 0,
		str,
		j;
	for (; i < keys.length; i++) {
		str = keys[i].toLowerCase();
		if (str === "number") {
			for (j = 48; j <= 57; j++) {
				keyMap[j] = true;
			}
			for (j = 96; j <= 105; j++) {
				keyMap[j] = true;
			}
			continue;
		}
		else if (str === "alphabet") {
			for (j = 65; j <= 90; j++) {
				keyMap[j] = true;
			}
			continue;
		}
		else if (str === "arrow") {
			for (j = 37; j <= 40; j++) {
				keyMap[j] = true;
			}
			continue;
		}
		if (str.length > 1) {
			str = str.replace(/\s/g, "");
		}
		if (str.length >= 3) {
			str = str.replace(/numpad|num/g, "n").replace(/korean|kor/g, "kr");
		}
		keyMap[Util.keyMapKeydown[str]] = true;
	}
	return keyMap;
};
Util.keyMapKeydown = {
	"backspace":8,
	"tab":9,
	"enter":13,
	"shift":16,
	"control":17,
	"ctrl":17,
	"alt":18,
	"pause":19,
	"break":19,
	"capslock":20,
	"escape":27,
	"esc":27,
	"space":32,
	" ":	32,
	"pageup":33,
	"pgup":33,
	"pagedown":34,
	"pgdown":34,
	"pgdn":34,
	"end":35,
	"home":36,
	"leftarrow":37,
	"left":37,
	"uparrow":38,
	"up":38,
	"rightarrow":39,
	"right":39,
	"downarrow":40,
	"down":40,
	"insert":45,
	"ins":45,
	"delete":46,
	"del":46,
	"0":48,
	")":48,	//41
	"1":49,
	"!":49,	//33
	"2":50,
	"@":50,	//64
	"3":51,
	"#":51,	//35
	"4":52,
	"$":52,	//36
	"5":53,
	"%":53,	//37
	"6":54,
	"^":54,	//94
	"7":55,
	"&":55,	//38
	"8":56,
	"*":56,	//42
	"9":57,
	"(":57,	//40
	"a":65,	// add 22 for lower chars
	"b":66,
	"c":67,
	"d":68,
	"e":69,
	"f":70,
	"g":71,
	"h":72,
	"i":73,
	"j":74,
	"k":75,
	"l":76,
	"m":77,
	"n":78,
	"o":79,
	"p":80,
	"q":81,
	"r":82,
	"s":83,
	"t":84,
	"u":85,
	"v":86,
	"w":87,
	"x":88,
	"y":89,
	"z":90,
	"n0":96,
	"n1":97,
	"n2":98,
	"n3":99,
	"n4":100,
	"n5":101,
	"n6":102,
	"n7":103,
	"n8":104,
	"n9":105,
	"n*":106,	//42
	"n+":107,	//43
	"n-":109,	//45
	"n.":110,	//46
	"n/":111,	//47
	"f1":112,
	"f2":113,
	"f3":114,
	"f4":115,
	"f5":116,
	"f6":117,
	"f7":118,
	"f8":119,
	"f9":120,
	"f10":121,
	"f11":122,
	"f12":123,
	"numlock":144,
	"scrolllock":145,
	"mute":173,
	"volumedown":174,
	"volumeup":175,
	":":186,	//58
	";":186,	//59
	"=":187,	//61
	"+":187,	//43
	",":188,	//44
	"<":188,	//60
	"-":189,	//45
	"_":189,	//95
	".":190,	//46
	">":190,	//62
	"/":191,	//47
	"?":191,	//63
	"`":192,	//96
	"~":192,	//126
	"[":219,	//91
	"{":219,	//123
	"\\":220,	//92
	"|":220,	//124
	"]":221,	//93
	"}":221,	//125
	"'":222,	//39
	"\"":222,	//34
	"kr":229
};
Util.printEventPos = function(e) {
	Util.print("client: (" + e.clientX + ", " + e.clientY + "), " +
			"layer: (" + e.layerX + ", " + e.layerY + "), " +
			"offset: (" + e.offsetX + ", " + e.offsetY + "), " +
			"page: (" + e.pageX + ", " + e.pageY + "), " +
			"screen: (" + e.screenX + ", " + e.screenY + "), " +
			"xy: (" + e.x + ", " + e.y + ")");
};
/**
 * @param {...*} var_args
 */
Util.print = function(var_args) {
	if (!echo) {
		return;
	}
	if (arguments.length === 1) {
		echo(arguments[0]);
	}
	else {
		var i = 0,
			len = arguments.length;
		for (; i < len; i++) {
			echo(arguments[i]);
		}
	}
};
Util.open = function(options) {
	var ops = {
		'url':			"about:blank",
		'name': "_blank",		// _blank, _parent, _self, _top, name
		'channelmode':	"no",
		'directories':	"yes",
		'fullscreen':		"no",
		'height':			undefined,
		'left':			undefined,
		'location':		"yes",
		'menubar':		"yes",
		'resizable':		"yes",
		'scrollbars':		"yes",
		'status':			"yes",
		'titlebar':		"yes",
		'toolbar':		"yes",
		'top':			undefined,
		'width':			undefined,
		'replace':		undefined
	},
		opt,
		specs;
	if (Util.isNotNull(options)) {
		for (opt in ops) {
			if (ops.hasOwnProperty(opt)) {
				ops[opt] = options[opt];
			}
		}
	}
	specs =
		Util.ifNull(ops.height, "", "height=" + ops.height + ", ") +
		Util.ifNull(ops.left, "", "left=" + ops.left + ", ") +
		Util.ifNull(ops.top, "", "top=" + ops.top + ", ") +
		Util.ifNull(ops.width, "", "width=" + ops.width + ", ") +
		"channelmode=" + ops.channelmode + ", " +
		"directories=" + ops.directories + ", " +
		"fullscreen=" + ops.fullscreen + ", " +
		"location=" + ops.location + ", " +
		"menubar=" + ops.menubar + ", " +
		"resizable=" + ops.resizable + ", " +
		"scrollbars=" + ops.scrollbars + ", " +
		"status=" + ops.status + ", " +
		"titlebar=" + ops.titlebar + ", " +
		"toolbar=" + ops.toolbar;
	if (ops.replace == null) {
		return window.open(ops.url, ops.name, specs);
	}
	return window.open(ops.url, ops.name, specs, ops.replace);
};
Util.cloneObject = cloneObject;
Util.extendObject = extendObject;
Util.extendOrClone = extendOrClone;
Util.lcfirst = lcfirst;
Util.ucfirst = ucfirst;
function cloneObject(o, shallow) {
	if (o) {
		var c = {},
			i,
				v,
				undefined = void 0;
		if (shallow) {
			for (i in o) {
				if (o.hasOwnProperty(i) && (v = o[i]) !== undefined) {
					c[i] = v;
				}
			}
		}
		else {
			for (i in o) {
				if (o.hasOwnProperty(i)) {
					v = o[i];
					switch (typeof v) {
						case 'undefined':
							// do nothing
							break;
						case 'object':
							c[i] = cloneObject(v);
							break;
						default:
							// overwrite
							c[i] = v;
							break;
					}
				}
			}
		}
		return c;
	}
	return null;
}
function extendObject(o1, o2, shallow) {
	if (o2) {
		if (o1) {
			var i,
				v1,
					v2;
			if (shallow) {
				// shallow extend
				var undefined = void 0;
				for (i in o2) {
					if (o2.hasOwnProperty(i) && (v2 = o2[i]) !== undefined) {
						o1[i] = v2;
					}
				}
			}
			else {
				// recursive deep
				for (i in o2) {
					if (o2.hasOwnProperty(i)) {
						v2 = o2[i];
						switch (typeof v2) {
							case 'undefined':
								// do nothing
								break;
							case 'object':
								if (v2 && o1.hasOwnProperty(i) && (v1 = o1[i]) && typeof v1 == 'object') {
									// v2 != null && v1 != null
									// extend
									extendObject(v1, v2);
								}
								else {
									// overwrite
									o1[i] = v2;
								}
								break;
							default:
								// overwrite
								o1[i] = v2;
								break;
						}
					}
				}
			}
			return o1;
		}
		return o2;
	}
	return o1;
}
function extendOrClone(o1, o2) {
	if (o2) {
		if (o1) {
			return extendObject(o1, o2);
		}
		else {
			return cloneObject(o2);
		}
	}
	else {
		return o1;
	}
}
function lcfirst(str) {
	return str ? str.charAt(0).toLowerCase() + str.substring(1) : '';
}
function ucfirst(str) {
	return str ? str.charAt(0).toUpperCase() + str.substring(1) : '';
}
var booleanAttributes = {
		// http://www.w3.org/TR/xhtml-media-types/
		checked:true,
		compact:true,
		declare:true,
		defer:true,
		disabled:true,
		ismap:true,
		multiple:true,
		nohref:true,
		noresize:true,
		noshade:true,
		nowrap:true,
		readonly:true,
		selected:true
	},
	emptyElements = {
		// http://www.w3.org/TR/html-markup/syntax.html 
		area:true,
		base:true,
		basefont:true,
		br:true,
		col:true,
		command:true,
		embed:true,
		frame:true,
		hr:true,
		img:true,
		input:true,
		isindex:true,
		keygen:true,
		link:true,
		meta:true,
		param:true,
		source:true,
		track:true,
		wbr:true
	},
	inputTypes = {
		// http://www.w3.org/TR/html5/the-input-element.html
		hidden:true,
		text:true,
		search:true,
		tel:true,
		url:true,
		email:true,
		password:true,
		date:true,
		month:true,
		week:true,
		time:true,
		datetime:true,
		number:true,
		range:true,
		color:true,
		checkbox:true,
		radio:true,
		file:true,
		submit:true,
		image:true,
		reset:true,
		button:true
	};
Util.emptyElements = emptyElements;
Util.element = element;
Util.input = input;
Util.attribute = attribute;
Util.style = style;
Util.escapeChar = escapeChar;
Util.encode = encode;
var SAFE = 1,
	LEAVE_OPENED = 2;
Util.SAFE = SAFE;
Util.LEAVE_OPENED = LEAVE_OPENED;
function element(tag, attr, content, flags) {
	if (emptyElements.hasOwnProperty(tag)) {
		if (content != null) {
			throw new Error('empty element, ' + tag + ', cannot have content!');
		}
		if (SAFE & flags) {
			return '<' + tag + attribute(attr, true) + '/>';
		}
		else {
			return '<' + encode(tag) + attribute(attr, false) + '/>';
		}
	}
	var html;
	if (SAFE & flags) {
		html = '<' + tag + attribute(attr, true) + '>';
		if (content != null) {
			html += content;
		}
	}
	else {
		tag = encode(tag);
		html = '<' + tag + attribute(attr, false) + '>';
		if (content != null) {
			html += encode(content);
		}
	}
	if (LEAVE_OPENED & flags) {
		return html;
	}
	else {
		return html + '</' + tag + '>';
	}
}
function input(type, attr, safe) {
	if (inputTypes.hasOwnProperty(type)) {
		attr.type = type;
		return element('input', attr, null, safe);
	}
	else {
		throw new Error('invalid input type, ' + type + '!');
	}
}
function attribute(attr, safe) {
	if (attr) {
		var html = '',
			styleVal,
				i,
				v;
		if (attr.style) {
			// save style to render and restore later
			styleVal = attr.style;
			// remove style attributes for now. it will be restored later
			delete attr.style;
		}
		if (safe) {
			// is safe
			for (i in attr) {
				if (attr.hasOwnProperty(i)) {
					if (booleanAttributes.hasOwnProperty(i)) {
						// is a boolean attribute
						if (attr[i]) {
							html += ' ' + i + '="' + i + '"';
						}
					}
					else {
						v = attr[i];
						if (v != null) {
							html += ' ' + i + '="' + v + '"';
						}
					}
				}
			}
		}
		else {
			// is unsafe
			for (i in attr) {
				if (attr.hasOwnProperty(i)) {
					if (booleanAttributes.hasOwnProperty(i)) {
						// is a boolean attribute
						// is safe
						if (attr[i]) {
							html += ' ' + i + '="' + i + '"';
						}
					}
					else {
						v = attr[i];
						if (v != null) {
							html += ' ' + encode(i) + '="' + encode(v) + '"';
						}
					}
				}
			}
		}
		if (styleVal) {
			html += style(styleVal, safe);
			// restore style attribute
			attr.style = styleVal;
		}
		return html;
	}
	return '';
}
function style(sty, safe) {
	if (sty) {
		if (typeof sty == 'string') {
			return ' style="' + (safe ? sty : encode(sty)) + '"';
		}
		var html = ' style="',
			i,
			v;
		if (safe) {
			for (i in sty) {
				if (sty.hasOwnProperty(i)) {
					v = sty[i];
					if (v != null) {
						html += i + ':' + v + ';';
					}
				}
			}
		}
		else {
			for (i in sty) {
				if (sty.hasOwnProperty(i)) {
					v = sty[i];
					if (v != null) {
						html += encode(i) + ':' + encode(v) + ';';
					}
				}
			}
		}
		return html + '"';
	}
	return '';
}
function escapeChar(c) {
	switch (c) {
		case "&":
			return "&amp;";
		case "<":
			return "&lt;";
		case ">":
			return "&gt;";
		case '"':
			return "&quot;";
		case "'":
			return "&#x27;";
		case "/":
			return "&#x2F;";
		default:
			return c;
	}
}
function encode(str) {
	if (str != null) {
		if (typeof str != 'string') {
			str = str.toString();
		}
		return str.replace(/[&<>"'\/]/g, escapeChar);
	}
	return '';
}
})();
