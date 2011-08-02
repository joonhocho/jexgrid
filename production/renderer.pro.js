goog.require('jx.util');
goog.require('jx.util$');
goog.require('jx.grid');
goog.provide('jx.grid.renderer');
/*!
 * AUTHOR
 *   The JexGrid was written and is maintained by:
 *       Joon Ho Cho <joonho1101@gmail.com>
 * COPYRIGHT
 *   Copyright (c) 2010-2011, WebCash Inc. All rights reserved.
 */
/**
JGM
@scope JGM
*/
(function() {
var JGM = goog.getObjectByName('jx.grid'),
	Util = goog.getObjectByName('jx.util');
 goog.exportSymbol('jx.grid.renderer', renderer);
 var renderer = JGM.renderer = jx.grid.renderer;
 renderer.selectBox = function(args) {
	var mappings = args['mapping'],
		 attr = args['attr'],
		 defaultVal = args['default'],
		 style = args['style'],
		 callback = args['callback'],
		 label,
		 defaultIdx,
		 val,
		 tag,
		 len = 0,
		 labels = [],
		 values = [],
		 attrStr = '<select';
	// set select box attribute string
	if (attr) {
		for (tag in attr) {
			if (attr.hasOwnProperty(tag)) {
				attrStr += ' ' + tag + '="' + attr[tag] + '"';
			}
		}
	}
	if (style) {
		attrStr += ' style="';
		for (tag in style) {
			if (style.hasOwnProperty(tag)) {
				attrStr += tag + ':' + style[tag] + ';';
			}
		}
		attrStr += '"';
	}
	attrStr += '>';
	// find out option length, default label, and make a list of values
	for (label in mappings) {
		if (mappings.hasOwnProperty(label)) {
			val = mappings[label];
			labels.push(label);
			values.push(val);
			if (defaultVal == val) {
				defaultIdx = len;
			}
			len++;
		}
	}
	return function(value) {
		var toselect,
			 i,
			 html = attrStr;
		for (i = 0; i < len; i++) {
			if (value == values[i]) {
				toselect = i;
				break;
			}
		}
		if (toselect === undefined) {
			toselect = defaultIdx;
		}
		for (i = 0; i < len; i++) {
			html += '<option value="' + values[i] + '"';
			if (i === toselect) {
				html += ' selected="selected"';
			}
			html += '>' + labels[i] + '</option>';
		}
		html += '</select>';
		if (callback) {
			var args = [];
			args.push(html);
			Array.prototype.push.apply(args, arguments);
			html = callback.apply(this, args);
		}
		return html;
	}
};
}());
