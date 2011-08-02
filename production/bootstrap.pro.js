goog.require('jx.util');
goog.require('jx.util$');
goog.provide('jx.grid');
goog.provide('JGM');
/*!
 * AUTHOR
 *   The JexGrid was written and is maintained by:
 *       Joon Ho Cho <joonho1101@gmail.com>
 * COPYRIGHT
 *   Copyright (c) 2010-2011, WebCash Inc. All rights reserved.
 */
/**
  JGM ���. {@link JGM.Grid Grid} �� �ֻ��� scope �̸� �����ϰ� Global Scope �� window �� ��ϵ˴ϴ�.
  ��� {@link JGM.Grid Grid} ��� Ŭ������ �� �Ŵ��� �ȿ� �� ����� �̸����� ��ϵ˴ϴ�.
  JGM�� ��� {@link JGM.Grid Grid} �� ������ instantiate �ϸ�, ��� ������ �� ��⿡ ����
  mid �� �Ҵ������ν� �� ����� Ȯ���� ����ũ���� �����ϰ� �����ϴ� ������
  ���� ������ �־� ���ΰ��� �ѹ´����̼��� �����ݴϴ�.
  @module JGM
  */
/**
  {@link JGM} (JexGrid Manager) ������Ʈ �Դϴ�.
  @var {Object} window.JGM
  @author ����ȣ
  @since 1.0.0
  @version 1.2.0
  */
(function() {
	var Util = goog.getObjectByName('jx.util'),
Util$ = goog.getObjectByName('jx.util$');
goog.exportSymbol('JGM', JGM);
goog.exportSymbol('jx.grid', JGM);
JGM.version = "2.0.0";
/**
  JGM
  @scope JGM
  */
JGM._map = {
	// notloaded | loading | loaded
	'ArrayExtIE':			{ cacheModule: false	},
'Cache':				{ cacheModule: true	},
'Cell':				{ cacheModule: false	},
'CheckManager':		{ cacheModule: true	},
'ColDefManager':		{ cacheModule: true	},
'ColGroup':			{ cacheModule: true	},
'ColHeader':			{ cacheModule: true	},
'Collapser':			{ cacheModule: true	},
'DataManager':		{ cacheModule: true	},
'DataCreator':		{ cacheModule: true	},
'EditManager':		{ cacheModule: true	},
'Editor':				{ cacheModule: true	},
'EngineExt':			{ cacheModule: false	},
'EventManager':		{ cacheModule: true	},
'Footer':				{ cacheModule: true	},
'HeaderTree':			{ cacheModule: true	},
'Grid':				{ cacheModule: true	},
'GridManager':		{ cacheModule: false	},
'MenuBar':			{ cacheModule: true	},
'ViewportManager':	{ cacheModule: true	},
'SelectionManager':	{ cacheModule: true	},
'SearchManager':		{ cacheModule: true	},
'TooltipManager':		{ cacheModule: true	},
'Tracer':				{ cacheModule: false	},
'Tree':				{ cacheModule: true	},
'TreeNode':			{ cacheModule: false	},
'Util':				{ cacheModule: false	},
'Util$':			{ cacheModule: false	}
};
/**
  Grid ����� instantiate �ϰ� ������ ������Ʈ �ν��Ͻ��� �����մϴ�. JGM ��
  ����ؾ��ϴ� ����� ��� ������ mid�� �Ҵ��ϰ� ������ ����� {@link m} �� ���
  ���� key ������ �׸��� mid �� �ٽ� �ѹ� key ������ ����մϴ�.
  @function {?} create
  @param {string} name - Grid ��� �̸�
  @param {Object} args - �ش� Grid ��⿡ �Ѱ��� �ɼ� ������Ʈ
  @returns {?} Grid ��� �ν��Ͻ�
  @author ����ȣ
  @since 1.0.0
  @version 1.0.0
  */
JGM.create = function(name, args) {
	if (Util.isNull(args)) {
		args = {};
	}
	if (!this.hasOwnProperty(name)) {
		throw new Error('cannot find a grid module: name=' + name);
	}
	if (this._map.hasOwnProperty(name)) {
		if (this._map[name].cacheModule) {
			var mid = args.mid = "JGM" + this.m.length++;
			var module = new this[name](args);
			if (!this.m.hasOwnProperty(name)) {
				this.m[name] = {};
			}
			this.m[name][mid] = module;
			if (name === "Grid" && module.name) {
				this.gridMap[module.name] = module;
			}
			return module;
		}
		else {
			return new this[name](args);
		}
	}
	else {
		return new this[name](args);
	}
};
//tested
JGM._destroy = function(obj, args) {
	var cur,
		arr,
		i,
		j,
		len;
	for (i in args) {
		if (args.hasOwnProperty(i)) {
			switch (i) {
				case "map":
					cur = args[i];
					if (Util.isString(cur)) {
						arr = Util.split(cur);
						len = arr.length;
						for (j = 0; j < len; j++) {
							JGM._deleteMap(obj, arr[j]);
						}
					}
					else if (cur instanceof Array) {
						len = cur.length;
						for (j = 0; j < len; j++) {
							Util.emptyObject(cur[j]);
						}
					}
					else {
						Util.emptyObject(cur);
					}
					break;
				case "array":
					cur = args[i];
					if (Util.isString(cur)) {
						arr = Util.split(cur);
						len = arr.length;
						for (j = 0; j < len; j++) {
							JGM._deleteArray(obj, arr[j]);
						}
					}
					else {
						cur.length = 0;
					}
					break;
				case "$":
					cur = args[i];
					if (Util.isString(cur)) {
						arr = Util.split(cur);
						len = arr.length;
						for (j = 0; j < len; j++) {
							JGM._delete$(obj, arr[j]);
						}
					}
					else if (cur instanceof Array) {
						len = cur.length;
						for (j = 0; j < len; j++) {
							Util$.unbindRemove(cur[j]);
						}
					}
					else {
						Util$.unbindRemove(cur);
					}
					break;
				case "style":
					cur = args[i];
					if (Util.isString(cur)) {
						arr = Util.split(cur);
						len = arr.length;
						for (j = 0; j < len; j++) {
							JGM._deleteStyle(obj, arr[j]);
						}
					}
					else if (cur instanceof Array) {
						len = cur.length;
						for (j = 0; j < len; j++) {
							Util.removeStyle(cur[j]);
						}
					}
					else {
						Util.removeStyle(cur);
					}
					break;
				case "property":
					cur = args[i];
					if (Util.isString(cur)) {
						arr = Util.split(cur);
						len = arr.length;
						for (j = 0; j < len; j++) {
							delete obj[arr[j]];
						}
					}
					else if (cur instanceof Array) {
						len = cur.length;
						for (j = 0; j < len; j++) {
							delete obj[cur[j]];
						}
					}
					break;
				case "module":
					cur = args[i];
					if (Util.isString(cur)) {
						arr = Util.split(cur);
						len = arr.length;
						for (j = 0; j < len; j++) {
							JGM._deleteModule(obj, arr[j]);
						}
					}
					else if (cur instanceof Array) {
						len = cur.length;
						for (j = 0; j < len; j++) {
							cur[j].destroy();
						}
					}
					else {
						cur.destroy();
					}
					break;
				case "name":
					if (obj.hasOwnProperty("mid")) {
						JGM._remove(args[i], obj.mid);
						delete obj.mid;
					}
					break;
				case "path":
					if (obj.hasOwnProperty("grid") && obj.grid.hasOwnProperty(args[i])) {
						delete obj.grid[args[i]];
						delete obj.grid;
					}
					break;
			}
		}
	}
	Util.emptyObject(obj);
};
// tested
JGM._deleteMap = function(obj, name) {
	if (obj.hasOwnProperty(name)) {
		Util.emptyObject(obj[name]);
		delete obj[name];
	}
};
// tested
JGM._deleteArray = function(obj, name) {
	if (obj.hasOwnProperty(name)) {
		obj[name].length = 0;
		delete obj[name];
	}
};
// tested
JGM._delete$ = function(obj, name) {
	if (obj.hasOwnProperty(name)) {
		Util$.unbindRemove(obj[name]);
		delete obj[name];
	}
};
// tested
JGM._deleteStyle = function(obj, name) {
	if (obj.hasOwnProperty(name)) {
		Util.removeStyle(obj[name]);
		delete obj[name];
	}
};
JGM._deleteModule = function(obj, name) {
	if (obj.hasOwnProperty(name)) {
		obj[name].destroy();
		delete obj[name];
	}
};
JGM._remove = function(name, mid) {
	delete this.m[name][mid];
};
/**
  Grid �� �����ϰ� �����մϴ�.
  @function {JGM.core.Grid} grid
  @param {Object} args - Grid ��⿡ �Ѱ��� �ɼ� ������Ʈ
  @returns {JGM.core.Grid} Grid �ν��Ͻ�
  @author ����ȣ
  @since 1.0.1
  @version 1.0.1
  */
JGM.grid = function(args) {
	return this.create("Grid", args);
};
JGM.gridMap = {};
JGM.getGrid = function(name) {
	if (this.gridMap.hasOwnProperty(name)) {
		return this.gridMap[name];
	}
};
JGM._add = function(name, module) {
	this[name] = module;
};
JGM._extend = function(defaults, options) {
	// �ɼ��� �ͽ��ٵ��մϴ�
	var opt = Util.ifNull(options, {}),
		i;
	$.extend(true, defaults, opt);
	$.extend(true, opt, defaults);
	return opt;
};
/**
  ���� ������ Grid ��� �ν��Ͻ����� ��ϵǾ��ִ� �����Դϴ�. ���� ���, <code>"JGM10"</code> �̶�
  mid �� ���� {@link JGM.CheckManager CheckManager} �� ���������� <code>JGM.m.JGM10</code> ��
  ���� ������ �� �� �ֽ��ϴ�.
  @var {Object} m
  @author ����ȣ
  @since 1.0.0
  @version 1.0.0
  */
JGM.m = {length:0};
JGM._CONST = {
	_cssUnselectable: "-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none;",
	_cssUnselectable: "-webkit-user-drag:none;-moz-user-drag:none;user-drag:none;",
	_checkboxWidth: undefined,
	_checkboxHeight: undefined,
	_radioWidth: undefined,
	_radioHeight: undefined
};
JGM._globalEventsBound = false;
JGM._globalEvents = {
	_mousemove:function(e) {
		var i,
		g = JGM.m.Grid;
		for (i in g) {
			if (g.hasOwnProperty(i)) {
				g[i]._mousemove(e);
			}
		}
	},
	_mouseup:function(e) {
		var i,
		g = JGM.m.Grid;
		for (i in g) {
			if (g.hasOwnProperty(i)) {
				g[i]._mouseup(e);
			}
		}
	},
	_resize:function(e) {
		var i,
		g = JGM.m.Grid;
		for (i in g) {
			if (g.hasOwnProperty(i)) {
				g[i]._resize(e);
			}
		}
	}
};
JGM._bindGlobalEvents = function() {
	if (!this._globalEventsBound) {
		$(document).bind({
			'mousemove':this._globalEvents._mousemove,
			'mouseup':this._globalEvents._mouseup
		});
		$(window).resize(this._globalEvents._resize);
		this._globalEventsBound = true;
	}
};
JGM._unbindGlobalEvents = function() {
	if (this._globalEventsBound) {
		$(document).unbind({
			'mousemove':this._globalEvents._mousemove,
			'mouseup':this._globalEvents._mouseup
		});
		$(window).unbind("resize", this._globalEvents._resize);
		this._globalEventsBound = false;
	}
};
JGM.error = {
	'LENGTH_NOT_EQUAL': "Lengths are not equal",
	'NOT_MODIFIABLE': "Cannot modify value for '%0'.",
	'KEY_UNDEFINED': "Column '%0' is undefined.",
	'BAD_NULL': "Column '%0' cannot be null.",
	'DUP_KEY': "Duplicate column key '%0'.",
	'DUP_ENTRY': "Duplicate entry '%0' for '%1'.",
	'KEY_NOT_FOUND': "'%0' for '%1' doesn't exist in table.",
	'PARSE_ERROR': "Cannot parse '%0' for '%1'.",
	'INVALID_DEFAULT': "Invalid default value '%0' for '%1'.",
	'MULTIPLE_PRI_KEY': "Multiple primary key defined.",
	'DATA_TOO_LONG': "Data '%0' too long for column '%1'. Maximum is %2.",
	'DATA_TOO_SHORT': "Data '%0' too short for column '%1'. Minimum is %2.",
	'WRONG_LENGTH': "Length of data '%0' is not '%1' characters long for column '%2'.",
	'BIGGER_THAN': "Data '%0' too big for column '%1'. Maximum is %2.",
	'SMALLER_THAN': "Data '%0' too small for column '%1'. Minimum is %2.",
	'WRONG_VALUE': "Incorrect value: '%0' for '%1'."
};
})();