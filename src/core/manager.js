/*!
 * AUTHOR
 *   The JexGrid was written and is maintained by:
 *       Joon Ho Cho <joonho1101@gmail.com>
 * COPYRIGHT
 *   Copyright (c) 2010-2011, WebCash Inc. All rights reserved.
 */

/**
JGM 모듈. {@link JGM.Grid Grid} 의 최상위 scope 이며 유일하게 Global Scope 인 window 에 등록됩니다.
모든 {@link JGM.Grid Grid} 모듈 클래스는 이 매니저 안에 각 모듈의 이름으로 등록됩니다.
JGM은 모든 {@link JGM.Grid Grid} 의 모듈들을 instantiate 하며, 모듈 생성시 각 모듈에 고유
mid 를 할당함으로써 각 모듈의 확실한 유니크함을 보장하고 현존하는 모듈들의
맵을 가지고 있어 서로간의 켜뮤니케이션을 도와줍니다.

@module JGM
*/

/**
{@link JGM} (JexGrid Manager) 오브젝트 입니다.

@var {Object} window.JGM

@author 조준호
@since 1.0.0
@version 1.2.0
*/

(function() {

 goog.require('Util');
 goog.require('Util$');

 goog.provide('JGM');

 var $ = goog.getObjectByName('jQuery'),
 Util = goog.getObjectByName('Util'),
 Util$ = goog.getObjectByName('Util$');

 goog.exportSymbol('JGM', JGM);

 JGM.version = "1.2.3";

/**
JGM
@scope JGM
*/

JGM.__map_a__ = {
	// notloaded | loading | loaded
	ArrayExtIE:			{ filename: 'array_ext_ie.js',				readyState: 'notloaded',	required: false,	cacheModule: false	},
	Cache:				{ filename: 'jgrid_cache.js',				readyState: 'notloaded',	required: true,		cacheModule: true	},
	Cell:				{ filename: 'jgrid_cell.js',				readyState: 'notloaded',	required: true,		cacheModule: false	},
	CheckManager:		{ filename: 'jgrid_checkmanager.js',		readyState: 'notloaded',	required: false,	cacheModule: true	},
	ColDefManager:		{ filename: 'jgrid_coldefmanager.js',		readyState: 'notloaded',	required: true,		cacheModule: true	},
	ColGroup:			{ filename: 'jgrid_colgroup.js',			readyState: 'notloaded',	required: false,	cacheModule: true	},
	ColHeader:			{ filename: 'jgrid_colheader.js',			readyState: 'notloaded',	required: true,		cacheModule: true	},
	Collapser:			{ filename: 'jgrid_collapser.js',			readyState: 'notloaded',	required: false,	cacheModule: true	},
	DataManager:		{ filename: 'jgrid_datamanager.js',			readyState: 'notloaded',	required: true,		cacheModule: true	},
	DataCreator:		{ filename: 'jgrid_datacreator.js',			readyState: 'notloaded',	required: false,	cacheModule: true	},
	EditManager:		{ filename: 'jgrid_editmanager.js',			readyState: 'notloaded',	required: true,		cacheModule: true	},
	Editor:				{ filename: 'jgrid_editmanager.js',			readyState: 'notloaded',	required: true,		cacheModule: true	},
	EngineExt:			{ filename: 'engine_ext.js',				readyState: 'notloaded',	required: true,		cacheModule: false	},
	EventManager:		{ filename: 'jgrid_eventmanager.js',		readyState: 'notloaded',	required: true,		cacheModule: true	},
	Footer:				{ filename: 'jgrid_footer.js',				readyState: 'notloaded',	required: false,	cacheModule: true	},
	HeaderTree:			{ filename: 'jgrid_headertree.js',			readyState: 'notloaded',	required: false,	cacheModule: true	},
	Grid:				{ filename: 'jgrid_grid.js',				readyState: 'notloaded',	required: true,		cacheModule: true	},
	GridManager:		{ filename: 'jgrid_manager.js',				readyState: 'loaded',		required: true,		cacheModule: false	},
	MenuBar:			{ filename: 'jgrid_menubar.js',				readyState: 'notloaded',	required: true,		cacheModule: true	},
	ViewportManager:	{ filename: 'jgrid_viewportmanager.js',		readyState: 'notloaded',	required: true,		cacheModule: true	},
	SelectionManager:	{ filename: 'jgrid_selectionmanager.js',	readyState: 'notloaded',	required: false,	cacheModule: true	},
	SearchManager:		{ filename: 'jgrid_searchmanager.js',		readyState: 'notloaded',	required: false,	cacheModule: true	},
	TooltipManager:		{ filename: 'jgrid_tooltipmanager.js',		readyState: 'notloaded',	required: false,	cacheModule: true	},
	Tracer:				{ filename: 'tracer.js',					readyState: 'notloaded',	required: false,	cacheModule: false	},
	Tree:				{ filename: 'tree.js',						readyState: 'notloaded',	required: false,	cacheModule: true	},
	TreeNode:			{ filename: 'tree.js',						readyState: 'notloaded',	required: false,	cacheModule: false	},
	Util:				{ filename: 'util.js',						readyState: 'notloaded',	required: true,		cacheModule: false	},
	'Util$':			{ filename: 'util_jquery.js',				readyState: 'notloaded',	required: true,		cacheModule: false	}
};

/*
if (Util === undefined) {
	window.Util = {};
	Util.isNull = function(val) {
		return (val === undefined || val === null) ? true : false;
	}
	Util.isNotNull = function(val) {
		return (val === undefined || val === null) ? false : true;
	}
	Util.isFunction = function(val) {
		return (typeof val === "function") ? true : false;
	}
	Util.appendScriptFile = function(filename) {
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = filename;
		document.getElementsByTagName('head')[0].appendChild(script);
	}
}

if (Util$ === undefined) {
	window.Util$ = {};
	Util$.baseurlOfHeadScript = function(filename) {
		var url = $(document.getElementsByTagName('head')[0]).find("script[src$='" + filename + "']").attr('src');
		return url.substring(0, url.indexOf(filename));
	}
}
*/

/**
Grid 모듈을 instantiate 하고 생성된 오브젝트 인스턴스를 리턴합니다. JGM 에
등록해야하는 모듈인 경우 고유의 mid를 할당하고 생성된 모듈을 {@link m} 에 모듈
명을 key 값으로 그리고 mid 를 다시 한번 key 값으로 등록합니다.

@function {?} create
@param {string} name - Grid 모듈 이름
@param {Object} args - 해당 Grid 모듈에 넘겨줄 옵션 오브젝트
@returns {?} Grid 모듈 인스턴스

@author 조준호
@since 1.0.0
@version 1.0.0
*/
JGM.create = function(name, args) {
	if (Util.isNull(args)) {
		args = {};
	}
	if (this.__map_a__[name].cacheModule) {
		args.mid = "JGM" + this.m.length++;
		var module = this[name].getInstance(args);
		if (!this.m.hasOwnProperty(name)) {
			this.m[name] = {};
		}
		this.m[name][module.mid] = module;
      if (name === "Grid" && Util.isNotNull(module.name)) {
         this.gridMap[module.name] = module;
      }
		return module;
	}
	else {
		return this[name].getInstance(args);
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
							JGM.__deleteMap_l__(obj, arr[j]);
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
							JGM.__deleteArray_r__(obj, arr[j]);
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
							JGM.__delete$_n__(obj, arr[j]);
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
							JGM.__deleteStyle_o__(obj, arr[j]);
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
							JGM.__deleteModule_p__(obj, arr[j]);
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
						JGM.__remove_f__(args[i], obj.mid);
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
JGM.__deleteMap_l__ = function(obj, name) {
	if (obj.hasOwnProperty(name)) {
		Util.emptyObject(obj[name]);
		delete obj[name];
	}
};

// tested
JGM.__deleteArray_r__ = function(obj, name) {
	if (obj.hasOwnProperty(name)) {
		obj[name].length = 0;
		delete obj[name];
	}
};

// tested
JGM.__delete$_n__ = function(obj, name) {
	if (obj.hasOwnProperty(name)) {
		Util$.unbindRemove(obj[name]);
		delete obj[name];
	}
};

// tested
JGM.__deleteStyle_o__ = function(obj, name) {
	if (obj.hasOwnProperty(name)) {
		Util.removeStyle(obj[name]);
		delete obj[name];
	}
};

JGM.__deleteModule_p__ = function(obj, name) {
	if (obj.hasOwnProperty(name)) {
		obj[name].destroy();
		delete obj[name];
	}
};

JGM.__remove_f__ = function(name, mid) {
	delete this.m[name][mid];
};

/**
Grid 를 생성하고 리턴합니다.

@function {JGM.core.Grid} grid
@param {Object} args - Grid 모듈에 넘겨줄 옵션 오브젝트
@returns {JGM.core.Grid} Grid 인스턴스

@author 조준호
@since 1.0.1
@version 1.0.1
*/
JGM.grid = function(args) {
	return this.create("Grid", args);
};

JGM.gridMap = {};

JGM.getGrid = function(name) {
   if (Util.isNotNull(name) && this.gridMap.hasOwnProperty(name)) {
      return this.gridMap[name];
   }
};

JGM._add = function(name, module) {
	if (Util.isNotNull(module)) {
		this[name] = module;
	}
	this.__map_a__[name].readyState = "loaded";
	$("body").trigger({ type:"moduleload.Grid", modulename:name, readyState:"loaded" }); // TBR
};

JGM.__has_c__ = function(name) {
	return this.__map_a__[name].readyState === "loaded";
};

JGM.__load_d__ = function(name, callback) {
	var url,
		baseurl = Util$.baseurlOfHeadScript(this.GridManager.filename),
		i,
		len,
		toAdd,
		contains,
		j,
		checker;
	if (name instanceof Array) {
		url = [];
		len = name.length;
		for (i = 0; i < len; i++) {
			toAdd = baseurl + this[name[i]].filename;
			contains = false;
			for (j = 0; j < url.length; j++) {
				if (url[j] === toAdd) {
					contains = true;
					break;
				}
			}
			if (!contains && !this.__has_c__(name[i])) {
				url.push(toAdd);
			}
		}
		if (Util.isFunction(callback)) {
			checker = function() {
				var i = 0;
				for (; i < name.length; i++) {
					if (!JGM.__has_c__(name[i])) {
						return false;
					}
				}
				return true;
			};
			$("body").bind("moduleload.Grid", function(e) {
				if (checker()) {
					$("body").unbind("moduleload.Grid");
					callback();
				}
			});
		}
		if (url.length === 0) {
			callback();
		}

		for (i = 0; i < url.length; i++) {
			Util.appendScriptFile(url[i]);
		}
	}
	else {
		if (this.__has_c__(name)) {
			if (Util.isFunction(callback)) {
				callback();
			}
		}
		url = baseurl + this.__map_a__[name].filename;
		if (Util.isFunction(callback)) {
			$("body").bind("moduleload.Grid", function(e) {
				if (e.modulename === name && e.readyState === "loaded") {
					$("body").unbind("moduleload.Grid");
					callback();
				}
			});
		}
		Util.appendScriptFile(url);
	}
};

JGM.start = function(gridOptions, colDefs, callback) {
	var requiredModules = [],
		i = 3,
		len = arguments.length,
		module,
		map = JGM.__map_a__;

	for (; i < len; i++) {
		requiredModules.push(arguments[i]);
	}

	if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
		requiredModules.push('ArrayExtIE');
	}

	if (Util.isNotNull(gridOptions.CheckManager)) {
		requiredModules.push('CheckManager');
	}

	if (Util.isNotNull(gridOptions.Collapser)) {
		requiredModules.push('Collapser');
	}

	if (Util.isNotNull(gridOptions.EditManager)) {
		requiredModules.push('EditManager');
	}

	/** check required **/
	len = requiredModules.length;
	for (i = 0; i < len; i++) {
		map[requiredModules[i]].required = true;
	}

	/** filter not loaded **/
	requiredModules = [];
	for (i in map) {
		if (map.hasOwnProperty(i)) {
			module = map[i];
			if (!Util.isFunction(module) && module.readyState === 'notloaded' && module.required === true) {
				requiredModules.push(i);
			}
		}
	}

	this.__load_d__(requiredModules, callback);
};

JGM.__extend_e__ = function(defaults, options, map) {
	// 옵션을 익스텐드합니다
	var opt = Util.ifNull(options, {}),
		i;
		
	if (Util.isNotNull(map)) {
		for (i in map) {
			if (map.hasOwnProperty(i)) {
				if (opt.hasOwnProperty(i)) {
					opt[map[i]] = opt[i];
					delete opt[i];
				}
			}
		}
	}
	
	$.extend(true, defaults, opt);
	$.extend(true, opt, defaults);
	return opt;
};

/**
현재 생성된 Grid 모듈 인스턴스들이 등록되어있는 변수입니다. 예를 들어, <code>"JGM10"</code> 이란
mid 를 가진 {@link JGM.CheckManager CheckManager} 를 가져오려면 <code>JGM.m.JGM10</code> 과
같이 엑세스 할 수 있습니다.

@var {Object} m

@author 조준호
@since 1.0.0
@version 1.0.0
*/
JGM.m = {length:0};

JGM.__CONST_g__ = {
	__cssUnselectable_a__: "-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none;",
	__cssUnselectable_b__: "-webkit-user-drag:none;-moz-user-drag:none;user-drag:none;",
	__checkboxWidth_c__: undefined,
	__checkboxHeight_d__: undefined,
	__radioWidth_e__: undefined,
	__radioHeight_f__: undefined
};

JGM.__globalEventsBound_h__ = false;
JGM.__globalEvents_i__ = {
	__mousemove_a__:function(e) {
		var i,
			g = JGM.m.Grid;
		for (i in g) {
			if (g.hasOwnProperty(i)) {
				g[i]._mousemove(e);
			}
		}
	},
	__mouseup_b__:function(e) {
		var i,
			g = JGM.m.Grid;
		for (i in g) {
			if (g.hasOwnProperty(i)) {
				g[i]._mouseup(e);
			}
		}
	},
	__resize_c__:function(e) {
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
	if (!this.__globalEventsBound_h__) {
		$(document).bind({
			mousemove:this.__globalEvents_i__.__mousemove_a__,
			mouseup:this.__globalEvents_i__.__mouseup_b__
		});
		$(window).resize(this.__globalEvents_i__.__resize_c__);
		this.__globalEventsBound_h__ = true;
	}
};

JGM._unbindGlobalEvents = function() {
	if (this.__globalEventsBound_h__) {
		$(document).unbind({
			mousemove:this.__globalEvents_i__.__mousemove_a__,
			mouseup:this.__globalEvents_i__.__mouseup_b__
		});
		$(window).unbind("resize", this.__globalEvents_i__.__resize_c__);
		this.__globalEventsBound_h__ = false;
	}
};

JGM.lang = {};
JGM.events = {};
JGM.grids = {};

JGM.error = {
   LENGTH_NOT_EQUAL: "Lengths are not equal",
	NOT_MODIFIABLE: "Cannot modify value for '%0'.",
	KEY_UNDEFINED: "Column '%0' is undefined.",
   BAD_NULL: "Column '%0' cannot be null.",
	DUP_KEY: "Duplicate column key '%0'.",
	DUP_ENTRY: "Duplicate entry '%0' for '%1'.",
	KEY_NOT_FOUND: "'%0' for '%1' doesn't exist in table.",
	PARSE_ERROR: "Cannot parse '%0' for '%1'.",
	INVALID_DEFAULT: "Invalid default value '%0' for '%1'.",
	MULTIPLE_PRI_KEY: "Multiple primary key defined.",
	DATA_TOO_LONG: "Data '%0' too long for column '%1'. Maximum is %2.",
	DATA_TOO_SHORT: "Data '%0' too short for column '%1'. Minimum is %2.",
   WRONG_LENGTH: "Length of data '%0' is not '%1' characters long for column '%2'.",
	BIGGER_THAN: "Data '%0' too big for column '%1'. Maximum is %2.",
	SMALLER_THAN: "Data '%0' too small for column '%1'. Minimum is %2.",
	WRONG_VALUE: "Incorrect value: '%0' for '%1'."
};

})();
