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
  JGM 모듈. {@link jx.grid.Grid} 의 최상위 scope 이며 유일하게 Global Scope 인 window 에 등록됩니다.
  모든 {@link jx.grid.Grid} 모듈 클래스는 이 매니저 안에 각 모듈의 이름으로 등록됩니다.
  JGM은 모든 {@link jx.grid.Grid} 의 모듈들을 instantiate 하며, 모듈 생성시 각 모듈에 고유
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
(function() {'use strict';
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
'ColumnManager':		{ cacheModule: true	},
'ColumnGroup':			{ cacheModule: true	},
'ColumnHeader':			{ cacheModule: true	},
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
	if (args == null) {
		args = {};
	}
	if (!JGM.hasOwnProperty(name)) {
		throw new Error('cannot find a grid module: name=' + name);
	}
	if (JGM._map.hasOwnProperty(name)) {
		if (JGM._map[name].cacheModule) {
			var mid = args.mid = "JGM" + JGM.m.length++;
			var module = new JGM[name](args);
			if (!JGM.m.hasOwnProperty(name)) {
				JGM.m[name] = {};
			}
			JGM.m[name][mid] = module;
			if (name === "Grid") {
				if (module.name == null) {
					module.name = JGM.grids.length;
				}
				JGM.gridMap[module.name] = module;
				JGM.grids.push(module);
			}
			return module;
		}
		else {
			return new JGM[name](args);
		}
	}
	else {
		return new JGM[name](args);
	}
};
//tested
JGM._destroy = function(obj, args) {
	if (obj && args) {
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
						if (typeof cur == 'string') {
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
						if (typeof cur == 'string') {
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
						if (typeof cur == 'string') {
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
						if (typeof cur == 'string') {
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
						if (typeof cur == 'string') {
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
						if (typeof cur == 'string') {
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
	}
};
// tested
JGM._deleteMap = function(obj, name) {
	if (obj && obj.hasOwnProperty(name) && obj[name]) {
		Util.emptyObject(obj[name]);
		delete obj[name];
	}
};
// tested
JGM._deleteArray = function(obj, name) {
	if (obj && obj.hasOwnProperty(name) && obj[name]) {
		obj[name].length = 0;
		delete obj[name];
	}
};
// tested
JGM._delete$ = function(obj, name) {
	if (obj && obj.hasOwnProperty(name) && obj[name]) {
		Util$.unbindRemove(obj[name]);
		delete obj[name];
	}
};
// tested
JGM._deleteStyle = function(obj, name) {
	if (obj && obj.hasOwnProperty(name) && obj[name]) {
		Util.removeStyle(obj[name]);
		delete obj[name];
	}
};
JGM._deleteModule = function(obj, name) {
	if (obj && obj.hasOwnProperty(name) && obj[name]) {
		obj[name].destroy();
		delete obj[name];
	}
};
JGM._remove = function(name, mid) {
	delete JGM.m[name][mid];
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
	return JGM.create("Grid", args);
};
JGM.gridMap = {};
JGM.getGrid = function(name) {
	if (JGM.gridMap.hasOwnProperty(name)) {
		return JGM.gridMap[name];
	}
};
JGM.grids = [];
JGM._add = function(name, module) {
	JGM[name] = module;
};
JGM._extend = function(defaults, options) {
	// 옵션을 익스텐드합니다
	var opt = Util.ifNull(options, {}),
		i;
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
JGM._CONST = {
	_cssUnselectable: "-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none;",
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
	if (!JGM._globalEventsBound) {
		$(document).bind({
			'mousemove':JGM._globalEvents._mousemove,
			'mouseup':JGM._globalEvents._mouseup
		});
		$(window).resize(JGM._globalEvents._resize);
		JGM._globalEventsBound = true;
	}
};
JGM._unbindGlobalEvents = function() {
	if (JGM._globalEventsBound) {
		$(document).unbind({
			'mousemove':JGM._globalEvents._mousemove,
			'mouseup':JGM._globalEvents._mouseup
		});
		$(window).unbind("resize", JGM._globalEvents._resize);
		JGM._globalEventsBound = false;
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
JGM.chart = function(chartCont, type, columns, options, datalist) {
	var pack,
		cls;
	type = type.toLowerCase();
	switch (type) {
		case 'area':
			pack = 'corechart';
			cls = 'AreaChart';
			break;
		case 'bar':
			pack = 'corechart';
			cls = 'BarChart';
			break;
		case 'candle':
			pack = 'corechart';
			cls = 'CandlestickChart';
			break;
		case 'column':
			pack = 'corechart';
			cls = 'ColumnChart';
			break;
		case 'combo':
			pack = 'corechart';
			cls = 'ComboChart';
			break;
		case 'gauge':
			pack = 'gauge';
			cls = 'Gauge';
			break;
		case 'geo':
			pack = 'geochart';
			cls = 'GeoChart';
			break;
		case 'line':
			pack = 'corechart';
			cls = 'LineChart';
			break;
		case 'pie':
			pack = 'corechart';
			cls = 'PieChart';
			break;
		case 'scatter':
			pack = 'corechart';
			cls = 'ScatterChart';
			break;
		case 'table':
			pack = 'table';
			cls = 'Table';
			break;
		case 'treemap':
			pack = 'treemap';
			cls = 'TreeMap';
			break;
		default:
			throw new Error('unknown chart type: ' + type);
	}
	google.load("visualization", "1", {packages:[pack]});
	var rows = JGM.exportToArray(datalist, columns.map(function(c) { return c.key; }));
	google.setOnLoadCallback(function() {
		var data = new google.visualization.DataTable(),
			i = 0,
			l = columns.length,
			col,
			datatype;
		for (; i < l; i++) {
			col = columns[i];
			datatype = col.type;
			switch(datatype) {
				case 'boolean':
					datatype = 'boolean';
					break;
				case 'int':
				case 'integer':
				case 'long':
				case 'float':
				case 'double':
					datatype = 'number';
					break;
				case 'string':
				case 'text':
					datatype = 'string';
					break;
				case 'date':
					break;
			}
			data.addColumn(datatype || typeof rows[0][i] || (i === 0 && 'string') || 'number', col.name);
		}
		data.addRows(rows);
		var chart = new google.visualization[cls](document.getElementById(chartCont));
		chart.draw(data, options);
	});
};
JGM.exportToArray = function(datalist, keys) {'use strict';
	var array,
		arr = [],
		datarow,
		key,
		j = 0,
		jl = datalist.length,
		i,
		l = keys.length;
	for (; j < jl; j++) {
		datarow = datalist[j];
		for (i = 0, array = []; i < l; i++) {
			key = keys[i];
			array.push((key in datarow) ? datarow[key] : null);
		}
		arr.push(array);
	}
	return arr;
}
var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera",
			versionSearch: "Version"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]
};
BrowserDetect.init();
JGM.browser = BrowserDetect;
})();
