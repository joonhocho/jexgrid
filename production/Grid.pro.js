goog.require('jx.util');
goog.require('jx.util$');
goog.require('jx.lang.Disposable');
goog.require('jx.events.EventDispatcher');
goog.require('jx.grid');
goog.require('jx.grid.BaseModule');
goog.require('jx.grid.EventManager');
echo(jx.grid.Grid);
goog.provide('jx.grid.Grid');
/*!
 * AUTHOR
 *   The JexGrid was written and is maintained by:
 *       Joon Ho Cho <joonho1101@gmail.com>
 * COPYRIGHT
 *   Copyright (c) 2010-2011, WebCash Inc. All rights reserved.
 */
/**
  <b>JexGrid</b> 는 다이나믹 랜더링을 통해 데이터 사이즈의 증가에 따른 성능 감소를
  최소화하고 자유로운 이벤트와 모듈 플러그인을 통해 유연한 확장성을 가진 jQuery
  기반의 자바스크립트 그리드 라이브러리 입니다.
  @project JexGrid JavaScript Library
  @timestamp
  @description JexGrid JavaScript Library
  @author 조준호
  @since 2011-Jan-05
  @version 1.3.2
  */
/**
  JGM
  @scope JGM
  */
(function() {
	var JGM = goog.getObjectByName('jx.grid'),
		Util = goog.getObjectByName('jx.util'),
		BaseModule = goog.getObjectByName('jx.grid.BaseModule'),
		VERBOSE = 2,
		V_KEYDOWN = 3,
		V_KEYPRESS = 3,
		V_KEYUP = 3,
		V_MOUSEMOVE = 5,
		V_MOUSEOVER = 4,
		V_MOUSEOUT = 4,
		V_MOUSEIN = 4,
		V_MOUSEDOWN = 3,
		V_MOUSEUP = 3,
		V_MOUSEENTER = 3,
		V_MOUSELEAVE = 3,
		V_SCROLL = 3,
		V_FOCUS = 3,
		V_CLICK = 2,
		V_DBLCLICK = 2,
		V_RESIZE = 2,
		V_INIT = 1;
goog.exportSymbol('jx.grid.Grid', Grid);
Grid.V_KEYDOWN = V_KEYDOWN;
Grid.V_KEYPRESS = V_KEYPRESS;
Grid.V_KEYUP = V_KEYUP;
Grid.V_MOUSEMOVE = V_MOUSEMOVE;
Grid.V_MOUSEOVER = V_MOUSEOVER;
Grid.V_MOUSEOUT = V_MOUSEOUT;
Grid.V_MOUSEIN = V_MOUSEIN;
Grid.V_MOUSEDOWN = V_MOUSEDOWN;
Grid.V_MOUSEUP = V_MOUSEUP;
Grid.V_MOUSEENTER = V_MOUSEENTER;
Grid.V_MOUSELEAVE = V_MOUSELEAVE;
Grid.V_CLICK = V_CLICK;
Grid.V_DBLCLICK = V_DBLCLICK;
Grid.V_RESIZE = V_RESIZE;
Grid.V_INIT = V_INIT;
/**
  Grid 코어 모듈. 모든 Grid 모듈이 연결되는 모듈입니다.
  Grid 코어 클래스. Grid 의 모든 서브 모듈들은 이 클래스에 연결되어 서로
  커뮤니케이트 합니다.
  @class {Grid} jx.grid.Grid
  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
/**
  Grid 컨스트럭터 입니다. 유일한 파라미터인 args 는 자바스크립트 오브젝트이며
  다음과 같은 형식을 가집니다.<br>
  args = {<br>
  container: DOM Element 또는 DOM Element 를 가진 jQuery 오브젝트,<br>
  datalist: 데이터 어레이,<br>
  colDefs: 컬럼 정의 어레이,<br>
  options: Grid 의 옵션과 모든 서브 옵션을 포함한 옵션 오브젝트<br>
  };<br>
  @constructor {Grid} Grid
  @param {Object} args - Grid 모듈 파라미터 오브젝트
  @... {(DOMElement | jQuery)} args['container ']- Grid 를 위한 컨테이너 오브젝트
  @... {Array.<Object>} args['datalist ']- 데이터 어레이
  @... {Array.<Object>} args['colDefs ']- 컬럼 정의 어레이
  @... {Object} args['options ']- Grid 옵션 오브젝트
  @returns {Grid} Grid 모듈 인스턴스를 리턴합니다.
  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
function Grid(args) {
	this.mid = args.mid;
	goog.base(this, args);
}
/**
  {@link JGM} 이 할당해주는 Grid 모듈 고유 아이디입니다. 여러개의 그리드가 같은
  페이지에 존재할 경우 서로를 구분하기 위해 쓰입니다. 읽기 전용.
  @var {string} mid
  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
goog.inherits(Grid, BaseModule);
Grid.getInstance = function(args) {
	return new Grid(args);
};
var prototype = Grid.prototype;
prototype._defaultOptions = function() {
	return {		
		/**
		  그리드 컨테이너에 적용되는 CSS 클래스 입니다.<br>기본값:<code>"jgrid"</code>
		  @type {string=} jx.grid.Grid.options.classGrid
		  @private
		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'classGrid': "jgrid",
			/**
			  컨테이너에 적용되는 CSS border 스타일 입니다. <br>기본값:<code>"1px solid #868686"</code>
			  @type {string=} jx.grid.Grid.options.border
			  @private
			  @author 조준호
			  @since 1.0.0
			  @version 1.0.0
			  */
			'border': "1px solid #868686",
			/**
			  컨테이너에 적용되는 CSS width 픽셀값 입니다. 이 옵션 값이 입력되지 않을 경우 <code>width:100%</code> 로 설정하는 것과 같은 효과를 가집니다.<br>기본값:<code>undefined</code>
			  @type {number=} jx.grid.Grid.options.width
			  @private
			  @author 조준호
			  @since 1.0.0
			  @version 1.0.0
			  */
			'width': undefined,
			/**
			  컨테이너에 적용되는 CSS font 스타일 입니다. <br>기본값:<code>"15px Arial,Helvetica,sans-serif"</code>
			  @type {string=} jx.grid.Grid.options.font
			  @private
			  @author 조준호
			  @since 1.0.0
			  @version 1.0.0
			  */
			'font': "15px Arial,Helvetica,sans-serif",
			/**
			  그리드 컨테이너에 적용될 CSS Style 입니다.<br>
			  주의할 점: 이 옵션에 입력된 style 이 적용되었을때 DOM 의 크기가 변하면 그리드의 내부적인 크기 계산에 오류가 생깁니다.
			  꼭, 크기에 영향이 없는 style 변경을 할때만 사용하세요.
			  <br>기본값:<code>""</code>
			  @type {string=} jx.grid.Grid.options.style
			  @private
			  @author 조준호
			  @since 1.0.0
			  @version 1.0.0
			  */
			'style': "",
			/**
			  컨테이너에 적용되는 border 가 사이드에도 적용될지 여부입니다. <br>기본값:<code>true</code>
			  @type {boolean=} jx.grid.Grid.options.borderSide
			  @private
			  @author 조준호
			  @since 1.0.0
			  @version 1.0.0
			  */
			'borderSide': true,
			/**
			  그리드에서 사용되는 이미지들이 있는 폴더의 url 입니다.<br>기본값:<code>"../images/"</code>
			  @type {string=} jx.grid.Grid.options.imageUrl
			  @private
			  @author 조준호
			  @since 1.1.3
			  @version 1.1.3
			  */
			'imageUrl': "../images/",
			/**
			  그리드 서브 모듈의 함수 또는 데이터를 그리드에서 직접 접근할 수 있도록
			  링크를 만듭니다. 생성된 링크는 대상이 함수가 아닐 경우라도 함수로 링크됩니다. <br>
			  { data: null, getData: "dataMgr.all" } <br>위와 같이 입력할 경우, 기본 링크인 grid.data 링크를 제거하고
			  grid.getData -> grid.dataMgr.all 링크를 추가합니다. <br>기본값:<code>{
			  data: "dataMgr.all",
			  datalen: "dataMgr.all.length",
			  shown: "dataMgr.datalist",
			  set: "dataMgr.set",
			  add: "dataMgr.add",
			  addList: "dataMgr.addList",
			  update: "dataMgr.update",
			  updateList: "dataMgr.updateList",
			  remove: "dataMgr.remove",
			  removeList: "dataMgr.removeList",
			  undo: "dataMgr.undo",
			  redo: "dataMgr.redo",
			  addFilter: "dataMgr.addFilter",
			  removeFilter: "dataMgr.removeFilter",
			  check: "collapser.checkMgr.checkList checkMgr.checkList",
			  checked: "collapser.checkMgr.getCheckList checkMgr.getCheckList",
			  register: "event.register",
			  trigger: "event.trigger",
			  bind: "event.bind",
			  unregister: "event.unregister",
			  unbind: "event.unregister",
			  collen: "colDefMgr.length"
			  }</code>
			  @type {Object=} jx.grid.Grid.options.links
			  @private
			  @author 조준호
			  @since 1.1.6
			  @version 1.1.6
			  */
			'links': {
				'data': "dataMgr.all",
				'datalen': "dataMgr.all.length",
				'shown': "dataMgr.datalist",
				'set': "dataMgr.set",
				'add': "dataMgr.add",
				'addList': "dataMgr.addList",
				'update': "dataMgr.update",
				'updateByKey': "dataMgr.updateByKey",
				'updateList': "dataMgr.updateList",
				'remove': "dataMgr.remove",
				'removeList': "dataMgr.removeList",
				'select': "dataMgr.executeSelect",
				'undo': "dataMgr.undo",
				'redo': "dataMgr.redo",
				'addFilter': "dataMgr.addFilter",
				'removeFilter': "dataMgr.removeFilter",
				'check': "collapser.checkMgr.checkList checkMgr.checkList",
				'checked': "collapser.checkMgr.getCheckList checkMgr.getCheckList",
				'removeChecked': "collapser.checkMgr.removeChecked checkMgr.removeChecked",
				'register': "event.register",
				'trigger': "event.trigger",
				'bind': "event.bind",
				'unregister': "event.unregister",
				'unbind': "event.unregister",
				'collen': "colDefMgr.length"
			},
			/**
			  true 일 경우, 그리드 컨테이너의 사이즈가 모든 컬럼이 보이도록 자동 조절됩니다. <br>기본값:<code>false</code>
			  @type {boolean=} jx.grid.Grid.options.autoWidth
			  @private
			  @author 조준호
			  @since 1.1.7
			  @version 1.1.7
			  */
			'autoWidth': false,
			'showMessage': false
				/**
				  서브 모듈 들에게 전달할 옵션을 정의합니다. 예를 들어
				  {@link jx.grid.ViewportManager ViewportManager} 의 옵션을 변경하고자 할 경우
				  다음과 같이 정의하면 됩니다.
				  <code>ViewportManager:{classCell:"jgrid-new-cell-class"</code>
				  <br>기본값:<code>undefined</code><br>
				  @type {string=} jx.grid.Grid.options.MODULE_CLASS_NAME
				  @private
				  @author 조준호
				  @since 1.0.0
				  @version 1.0.0
				  */
	};
}
prototype._init = function(args) {
	var ctnr = this._ctnr = args['container'],
		opt = this._options,
		em;
	/**
	  Grid 모듈의 기본 옵션 값들을 정의합니다.
	  @type {Object} options
	  @private
	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	this['name'] = opt['name'];
	this._drag = false;
	this._lastW = null;
	this._lastH = null;
	this._vars = {
		scrollbarDim: undefined
	};
	ctnr = this._ctnr = $("<div id='" + this.mid + "' class='" + opt['classGrid'] + "' " + (Util.isNull(opt['width']) ? "" : "style='width:" + opt['width'] + "px' ") + "tabIndex='0'>").appendTo(Util$.safe$(ctnr));
	this._vars.scrollbarDim = Util$.calScrollbarDims(ctnr);
	em = this['event'] =  JGM.create("EventManager", {grid:this, 'options':opt['EventManager']});
	this['colDefMgr'] =  JGM.create("ColumnManager", {grid:this, colDefs:args['colDefs'], 'options':opt['ColDefManager']});
	this['dataMgr'] = JGM.create("DataManager", {grid:this, datalist:args['datalist'], 'options':opt['DataManager']});
	if (opt['CheckManager']) {
		this['checkMgr'] =  JGM.create("CheckManager", {grid:this, 'options':opt['CheckManager']});
	}
	/**
	 * dunno what this is doing
	var i = 10,
		colDefs = this['colDefMgr'].getAll(),
		len = colDefs.length;
	for (; i < len; i++) {
		colDef = colDefs[i];
		if (colDef['CheckManager']) {
			colDef['CheckManager'].colDef = colDef;
			colDef['checkMgr'] = JGM.create("CheckManager", {grid:this, 'options':colDef['CheckManager']});
		}
	}
	*/
	if (opt['Collapser']) {
		this['collapser'] =  JGM.create("Collapser", {grid:this, 'options':opt['Collapser']});
		this['collapser'].__init();
	}
	if (opt['ColGroup']) {
		this['colGroup'] =  JGM.create("ColumnGroup", {grid:this, 'options':opt['ColGroup']});
	}
	if (opt['SelectionManager']) {
		this['selMgr'] =  JGM.create("SelectionManager", {grid:this, 'options':opt['SelectionManager']});
	}
	if (opt['EditManager']) {
		this['editMgr'] =  JGM.create("EditManager", {grid:this, 'options':opt['EditManager']});
	}
	if (opt['ColHeader']) {
		this['header'] =  JGM.create("ColumnHeader", {grid:this, 'container':ctnr, 'options':opt['ColHeader']});
	}
	if (opt['SearchManager']) {
		this['search'] =  JGM.create("SearchManager", {grid:this, 'container':ctnr, 'options':opt['SearchManager']});
	}
	if (opt['MenuBar']) {
		this['menubar'] =  JGM.create("MenuBar", {grid:this, 'container':ctnr, 'options':opt['MenuBar']});
	}
	this['view'] =  JGM.create("ViewportManager", {grid:this, 'container':ctnr, 'options':opt['ViewportManager']});
	if (opt['TooltipManager']) {
		this['tooltip'] =  JGM.create("TooltipManager", {grid:this, 'container':ctnr, 'options':opt['TooltipManager']});
	}
	if (opt['DataCreator']) {
		this['creator'] =  JGM.create("DataCreator", {grid:this, 'container':ctnr, 'options':opt['DataCreator']});
	}
	if (opt['Footer']) {
		this['footer'] =  JGM.create("Footer", {grid:this, 'container':ctnr, 'options':opt['Footer']});
	}
	if (opt['autoWidth']) {
		em.bind("onResizeCanvasWidth", this.width, this);
	}
	this._createCss();
	/**
	  Grid 모듈 초기화 중 서브 모듈들을 랜더링하기 전에 onBeforeRenderModules
	  이벤트를 트리거합니다. 서브 모듈들은 이 이벤트를 통해서 랜더링 전 필요한
	  작업을 합니다.<br>
	  @event {Event} onBeforeRenderModules
	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */	
	/**
	  Grid 모듈 초기화 중 서브 모듈들을 랜더링하기 위해서 onRenderModules
	  이벤트를 트리거합니다. jx.grid.ColumnHeader 와 같이 랜더링이 필요한 서브 모듈들은 이
	  이벤트를 통해서 모듈 랜더링을 합니다.<br>
	  @event {Event} onRenderModules
	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	/**
	  Grid 모듈 초기화 중 서브 모듈들을 랜더링한 후에 onAfterRenderModules
	  이벤트를 트리거합니다. 서브 모듈들은 이 이벤트를 통해서 랜더링 후 설정을
	  합니다.<br>
	  @event {Event} onAfterRenderModules
	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	em.trigger("onBeforeRenderModules onRenderModules onAfterRenderModules");
	this['msg'] =  $("<div id='" + this.mid + "msg' class='msg' onmousedown='$(this).hide(1000)' style='position:relative;padding-left:4px;overflow:hidden;z-index:100;font-size:12px;height:21px;line-height:21px'></div>").appendTo(ctnr).hide();
	ctnr = ctnr[0];
	this._lastW = ctnr.clientWidth;
	this._lastH = ctnr.clientHeight;
	this._registerLinks(opt['links']);
}
prototype._bindEvents = function() {
	JGM._bindGlobalEvents();
	var thisIns = this;
	this._ctnr.bind({
		'keydown':function(e) { thisIns._keydown(e); },
		'keyup':function(e) { thisIns._keyup(e); },
		'keypress':function(e) { thisIns._keypress(e); },
		'mousein':function(e) { thisIns._mousein(e); },
		'mouseout':function(e) { thisIns._mouseout(e); },
		'mouseenter':function(e) { thisIns._mouseenter(e); },
		'mouseleave':function(e) { thisIns._mouseleave(e); },
		'mouseover':function(e) { thisIns._mouseover(e); },
		'mousedown':function(e) { thisIns._mousedown(e); },
		'click':function(e) { thisIns._click(e); },
		'dblclick':function(e) { thisIns._dblclick(e); }
	});
	this._charts = [];
};
/**
  그리드 인스턴스를 제거합니다. 이 함수에서 트리거되는 {@link onDestroy} 이벤트를
  통해서 모든 서브 모듈들도 함께 제거합니다.<br>
  트리거 이벤트: {@link onDestroy}
  @function {} destroy
  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
prototype.destroy = function() {	
	try {
		this.dispatchEvent({'type':'beforeDispose'});
		if (Util.isEmptyObj(JGM.m.Grid)) {
			JGM._unbindGlobalEvents();
		}
		/**
		  Grid 인스턴스를 제거할 경우 트리거되는 이벤트입니다. 이 이벤트를 통해서
		  모든 서브 모듈들을 제거합니다.<br>
		  트리거링 함수: {@link destroy}
		  @event {Event} onDestroy
		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		this['event'].trigger("onDestroy");
		JGM._destroy(this, {
			name: "Grid",
			module: "event",
			"$": "ctnr",
			map: "vars _options",
			style: "style _dynStyle"
		});
		this.dispose();
	}
	catch (e) {
		return e;
	}
};
//tested
prototype._registerLinks = function(links) {
	var link,
		arr,
		arrlen,
		j,
		path,
		pathlen,
		current,
		last,
		lastPath,
		i;
	link_loop:
		for (link in links) {
			if (links.hasOwnProperty(link) && !(link in this)) {
				arr = Util.split(links[link]);
				arrlen = arr.length;
				j = 0;
				arr_loop:
					for (; j < arrlen; j++) {
						path = arr[j].split(".");
						pathlen = path.length;
						if (pathlen < 1) {
							continue;
						}
						current = this;
						last = this;
						lastPath = "";
						i = 0;
						for (; i < pathlen; i++) {
							if (!(path[i] in current)) {
								continue arr_loop;
							}
							else {
								last = current;
								current = current[lastPath = path[i]];
							}
						}
						this._registerLink(link, current, last, lastPath);
						continue link_loop;
					}
			}
		}
};
// tested
prototype._registerLink = function(name, fn, thisp, lastPath) {
	if (this.hasOwnProperty(name)) {
		return false;
	}
	if (Util.isFunction(fn)) {
		this[name] = function() { return fn.apply(thisp, arguments); };
	}
	else {
		this[name] = function() { return thisp[lastPath]; };
	}
	return true;
};
//tested
prototype._createCss = function() {
	var event = {'type':'beforeCreateCss', css:[]},
		opt = this._options,
		em = this['event'];
	this.dispatchEvent(event);
	/**
	  현재 그리드에 적용할 CSS stylesheet 를 생성 할 경우 트리거되는 이벤트입니다.
	  <br>
	  @event {Event} onCreateCss
	  @author 조준호
	  @since 1.0.0
	  @version 1.2.2
	  */
	var style = Util.sprint("%selector%{overflow:hidden;font:%font%;%border%%style%}%submodule%", {
		'selector': "#" + this.mid,
		'font': opt['font'],
		'border': opt['borderSide'] ?
		"border:" + opt['border'] + ";" :
		"border-top:" + opt['border'] + ";border-bottom:" + opt['border'] + ";",
		'style': opt['style'],
		'submodule': event.css.join('') + em.trigger("onCreateCss").join("")
	});
	this._style = Util.createStyle(style);
	event = {'type':'beforeCreateDynamicCss', css:[]};
	this.dispatchEvent(event);
	/**
	  현재 그리드에 적용할 다이나믹 CSS stylesheet 를 생성 할 경우 트리거되는 이벤트입니다.
	  <br>
	  @event {Event} onCreateDynamicCss
	  @author 조준호
	  @since 1.2.2
	  @version 1.2.2
	  */
	this._dynStyle = Util.createStyle(event.css.join('') + ';' + em.trigger("onCreateDynamicCss").join(""));
};
prototype._recreateDynamicCss = function() {
	Util.setStyle(this._dynStyle, this['event'].trigger("onCreateDynamicCss").join(""));
};
prototype._keydown = function(e) {
	var em = this['event'];
	/**
	  그리드에 keydown 이벤트가 발생하여 그에 맞는 작업을 진행하기 전에 발생하는 이벤트입니다.
	  이벤트 핸들러가 false 를 리턴하면 발생한 이벤트가 취소되며 그리드는 이벤트 핸들링 작업을 하지 않습니다.
	  @event {Event} onBeforeKeydown
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @returns {boolean} continueOrStop - false 를 리턴할 경우 이벤트가 취소됩니다.
	  @author 조준호
	  @since 1.2.1
	  @version 1.2.1
	  */
	if (em.triggerInvalid("onBeforeKeydown", [e])) {
		return;
	}
	/**
	  Grid 컨테이너에 바인드 된 jQuery keydown 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 입력된 키보드의 키 코드를 붙여서 이벤트가 발생됩니다.
	  예를들면 유저가 enter 를 입력할 경우 enter 키의 키코드는 13 이므로
	  keydown_13 의 이벤트가 트리거 됩니다.
	  @event {Event} keydown_KEYCODE
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @author 조준호
	  @since 1.0.0
	  @version 1.1.7
	  */	
	/**
	  Grid 컨테이너에 바인드 된 jQuery keydown 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} keydown
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	em.trigger("keydown_" + e.which + " keydown", [e]);
};
prototype._keyup = function(e) {
	var em = this['event'];
	/**
	  그리드에 keyup 이벤트가 발생하여 그에 맞는 작업을 진행하기 전에 발생하는 이벤트입니다.
	  이벤트 핸들러가 false 를 리턴하면 발생한 이벤트가 취소되며 그리드는 이벤트 핸들링 작업을 하지 않습니다.
	  @event {Event} onBeforeKeyup
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @returns {boolean} continueOrStop - false 를 리턴할 경우 이벤트가 취소됩니다.
	  @author 조준호
	  @since 1.2.1
	  @version 1.2.1
	  */
	if (em.triggerInvalid("onBeforeKeyup", [e])) {
		return;
	}
	/**
	  Grid 컨테이너에 바인드 된 jQuery keyup 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 입력된 키보드의 키 코드를 붙여서 이벤트가 발생됩니다.
	  예를들면 유저가 enter 를 입력할 경우 enter 키의 키코드는 13 이므로 keyup_13
	  의 이벤트가 트리거 됩니다.
	  @event {Event} keyup_KEYCODE
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @author 조준호
	  @since 1.0.0
	  @version 1.1.7
	  */
	/**
	  Grid 컨테이너에 바인드 된 jQuery keyup 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} keyup
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	em.trigger("keyup_" + e.which + " keyup", [e]);
};
prototype._keypress = function(e) {
	var em = this['event'];
	/**
	  그리드에 keypress 이벤트가 발생하여 그에 맞는 작업을 진행하기 전에 발생하는 이벤트입니다.
	  이벤트 핸들러가 false 를 리턴하면 발생한 이벤트가 취소되며 그리드는 이벤트 핸들링 작업을 하지 않습니다.
	  @event {Event} onBeforeKeypress
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @returns {boolean} continueOrStop - false 를 리턴할 경우 이벤트가 취소됩니다.
	  @author 조준호
	  @since 1.2.1
	  @version 1.2.1
	  */
	if (em.triggerInvalid("onBeforeKeypress", [e])) {
		return;
	}
	/**
	  Grid 컨테이너에 바인드 된 jQuery keypress 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다. 입력된 키보드의 키 코드를 붙여서 이벤트가 발생됩니다.
	  예를들면 유저가 enter 를 입력할 경우 enter 키의 키코드는 13 이므로
	  keypress.13 의 이벤트가 트리거 됩니다.
	  @event {Event} keypress_KEYCODE
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @author 조준호
	  @since 1.0.0
	  @version 1.1.7
	  */
	/**
	  Grid 컨테이너에 바인드 된 jQuery keypress 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} keypress
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	em.trigger("keypress_" + e.which + " keypress", [e]);
};
prototype._mousein = function(e) {
	var em = this['event'];
	/**
	  그리드에 mousein 이벤트가 발생하여 그에 맞는 작업을 진행하기 전에 발생하는 이벤트입니다.
	  이벤트 핸들러가 false 를 리턴하면 발생한 이벤트가 취소되며 그리드는 이벤트 핸들링 작업을 하지 않습니다.
	  @event {Event} onBeforeMousein
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @returns {boolean} continueOrStop - false 를 리턴할 경우 이벤트가 취소됩니다.
	  @author 조준호
	  @since 1.2.1
	  @version 1.2.1
	  */
	if (em.triggerInvalid("onBeforeMousein", [e])) {
		return;
	}
	/**
	  마우스 버튼을 누른 상태에서 Grid 컨테이너에 바인드 된 jQuery mousein
	  이벤트가 발생할 경우 트리거되는 이벤트 입니다.
	  @event {Event} dragin
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	/**
	  Grid 컨테이너에 바인드 된 jQuery mousein 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} mousein
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	if (this._drag) {
		em.trigger("dragin mousein", [e]);
	}
	else {
		em.trigger("mousein", [e]);
	}
};
prototype._mouseout = function(e) {
	var em = this['event'];
		
	/**
	  그리드에 mouseout 이벤트가 발생하여 그에 맞는 작업을 진행하기 전에 발생하는 이벤트입니다.
	  이벤트 핸들러가 false 를 리턴하면 발생한 이벤트가 취소되며 그리드는 이벤트 핸들링 작업을 하지 않습니다.
	  @event {Event} onBeforeMouseout
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @returns {boolean} continueOrStop - false 를 리턴할 경우 이벤트가 취소됩니다.
	  @author 조준호
	  @since 1.2.1
	  @version 1.2.1
	  */
	if (em.triggerInvalid("onBeforeMouseout", [e])) {
		return;
	}
	/**
	  마우스 버튼을 누른 상태에서 Grid 컨테이너에 바인드 된 jQuery mouseout
	  이벤트가 발생할 경우 트리거되는 이벤트 입니다.
	  @event {Event} dragout
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	/**
	  Grid 컨테이너에 바인드 된 jQuery mouseout 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} mouseout
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	if (this._drag) {
		em.trigger("dragout mouseout", [e]);
	}
	else {
		em.trigger("mouseout", [e]);
	}
};
prototype._mouseenter = function(e) {
	var em = this['event'];
	/**
	  그리드에 mouseenter 이벤트가 발생하여 그에 맞는 작업을 진행하기 전에 발생하는 이벤트입니다.
	  이벤트 핸들러가 false 를 리턴하면 발생한 이벤트가 취소되며 그리드는 이벤트 핸들링 작업을 하지 않습니다.
	  @event {Event} onBeforeMouseenter
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @returns {boolean} continueOrStop - false 를 리턴할 경우 이벤트가 취소됩니다.
	  @author 조준호
	  @since 1.2.1
	  @version 1.2.1
	  */
	if (em.triggerInvalid("onBeforeMouseenter", [e])) {
		return;
	}
	/**
	  마우스 버튼을 누른 상태에서 Grid 컨테이너에 바인드 된 jQuery mouseenter
	  이벤트가 발생할 경우 트리거되는 이벤트 입니다.
	  @event {Event} dragenter
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	/**
	  Grid 컨테이너에 바인드 된 jQuery mouseenter 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} mouseenter
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	if (this._drag) {
		em.trigger("dragenter mouseenter", [e]);
	}
	else {
		em.trigger("mouseenter", [e]);
	}
};
prototype._mouseleave = function(e) {
	var em = this['event'];
	/**
	  그리드에 mouseleave 이벤트가 발생하여 그에 맞는 작업을 진행하기 전에 발생하는 이벤트입니다.
	  이벤트 핸들러가 false 를 리턴하면 발생한 이벤트가 취소되며 그리드는 이벤트 핸들링 작업을 하지 않습니다.
	  @event {Event} onBeforeMouseleave
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @returns {boolean} continueOrStop - false 를 리턴할 경우 이벤트가 취소됩니다.
	  @author 조준호
	  @since 1.2.1
	  @version 1.2.1
	  */
	if (em.triggerInvalid("onBeforeMouseleave", [e])) {
		return;
	}
	/**
	  마우스 버튼을 누른 상태에서 Grid 컨테이너에 바인드 된 jQuery mouseleave
	  이벤트가 발생할 경우 트리거되는 이벤트 입니다.
	  @event {Event} dragleave
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	/**
	  Grid 컨테이너에 바인드 된 jQuery mouseleave 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} mouseleave
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	if (this._drag) {
		em.trigger("dragleave mouseleave", [e]);
	}
	else {
		em.trigger("mouseleave", [e]);
	}
};
prototype._mousemove = function(e) {
	var em = this['event'];
	/**
	  그리드에 mousemove 이벤트가 발생하여 그에 맞는 작업을 진행하기 전에 발생하는 이벤트입니다.
	  이벤트 핸들러가 false 를 리턴하면 발생한 이벤트가 취소되며 그리드는 이벤트 핸들링 작업을 하지 않습니다.
	  @event {Event} onBeforeMousemove
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @returns {boolean} continueOrStop - false 를 리턴할 경우 이벤트가 취소됩니다.
	  @author 조준호
	  @since 1.2.1
	  @version 1.2.1
	  */
	if (em.triggerInvalid("onBeforeMousemove", [e])) {
		return;
	}
	/**
	  마우스 버튼을 누른 상태에서 Grid 컨테이너에 바인드 된 jQuery mousemove
	  이벤트가 발생할 경우 트리거되는 이벤트 입니다.
	  @event {Event} dragmove
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	/**
	  Grid 컨테이너에 바인드 된 jQuery mousemove 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} mousemove
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	if (this._drag) {
		em.trigger("dragmove mousemove", [e]);
	}
	else {
		em.trigger("mousemove", [e]);
	}
};
prototype._mouseover = function(e) {
	var em = this['event'];
	/**
	  그리드에 mouseover 이벤트가 발생하여 그에 맞는 작업을 진행하기 전에 발생하는 이벤트입니다.
	  이벤트 핸들러가 false 를 리턴하면 발생한 이벤트가 취소되며 그리드는 이벤트 핸들링 작업을 하지 않습니다.
	  @event {Event} onBeforeMouseover
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @returns {boolean} continueOrStop - false 를 리턴할 경우 이벤트가 취소됩니다.
	  @author 조준호
	  @since 1.2.1
	  @version 1.2.1
	  */
	if (em.triggerInvalid("onBeforeMouseover", [e])) {
		return;
	}
	/**
	  마우스 버튼을 누른 상태에서 Grid 컨테이너에 바인드 된 jQuery mouseover
	  이벤트가 발생할 경우 트리거되는 이벤트 입니다.
	  @event {Event} dragover
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	/**
	  Grid 컨테이너에 바인드 된 jQuery mouseover 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} mouseover
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	if (this._drag) {
		em.trigger("dragover mouseover", [e]);
	}
	else {
		em.trigger("mouseover", [e]);
	}
};
prototype._mousedown = function(e) {
	var em = this['event'];
	this._drag = true;
	/**
	  그리드에 mousedown 이벤트가 발생하여 그에 맞는 작업을 진행하기 전에 발생하는 이벤트입니다.
	  이벤트 핸들러가 false 를 리턴하면 발생한 이벤트가 취소되며 그리드는 이벤트 핸들링 작업을 하지 않습니다.
	  @event {Event} onBeforeMousedown
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @returns {boolean} continueOrStop - false 를 리턴할 경우 이벤트가 취소됩니다.
	  @author 조준호
	  @since 1.2.1
	  @version 1.2.1
	  */
	if (em.triggerInvalid("onBeforeMousedown", [e])) {
		return;
	}
	/**
	  Grid 컨테이너에 바인드 된 jQuery mousedown 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} mousedown
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	em.trigger("mousedown", [e]);
};
prototype._mouseup = function(e) {
	var em = this['event'];
	this._drag = false;	
	em.trigger("unsetDrag");
	if (!this.containsEvent(e)) {
		return;
	}
	/**
	  그리드에 mouseup 이벤트가 발생하여 그에 맞는 작업을 진행하기 전에 발생하는 이벤트입니다.
	  이벤트 핸들러가 false 를 리턴하면 발생한 이벤트가 취소되며 그리드는 이벤트 핸들링 작업을 하지 않습니다.
	  @event {Event} onBeforeMouseup
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @returns {boolean} continueOrStop - false 를 리턴할 경우 이벤트가 취소됩니다.
	  @author 조준호
	  @since 1.2.1
	  @version 1.2.1
	  */
	if (em.triggerInvalid("onBeforeMouseup", [e])) {
		return;
	}
	/**
	  Grid 컨테이너에 바인드 된 jQuery mouseup 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} mouseup
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	em.trigger("mouseup", [e]);
};
prototype._click = function(e) {
	var em = this['event'];
	
	/**
	  그리드에 click 이벤트가 발생하여 그에 맞는 작업을 진행하기 전에 발생하는 이벤트입니다.
	  이벤트 핸들러가 false 를 리턴하면 발생한 이벤트가 취소되며 그리드는 이벤트 핸들링 작업을 하지 않습니다.
	  @event {Event} onBeforeClick
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @returns {boolean} continueOrStop - false 를 리턴할 경우 이벤트가 취소됩니다.
	  @author 조준호
	  @since 1.2.1
	  @version 1.2.1
	  */
	if (em.triggerInvalid("onBeforeClick", [e])) {
		return;
	}
	/**
	  Grid 컨테이너에 바인드 된 jQuery click 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} click
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	em.trigger("click", [e]);
};
prototype._dblclick = function(e) {
	var em = this['event'];
	/**
	  그리드에 dblclick 이벤트가 발생하여 그에 맞는 작업을 진행하기 전에 발생하는 이벤트입니다.
	  이벤트 핸들러가 false 를 리턴하면 발생한 이벤트가 취소되며 그리드는 이벤트 핸들링 작업을 하지 않습니다.
	  @event {Event} onBeforeDblclick
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @returns {boolean} continueOrStop - false 를 리턴할 경우 이벤트가 취소됩니다.
	  @author 조준호
	  @since 1.2.1
	  @version 1.2.1
	  */
	if (em.triggerInvalid("onBeforeDblclick", [e])) {
		return;
	}
	/**
	  Grid 컨테이너에 바인드 된 jQuery dblclick 이벤트가 발생할 경우 트리거되는
	  이벤트 입니다.
	  @event {Event} dblclick
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	em.trigger("dblclick", [e]);
};
prototype._resize = function(e) {
	var em = this['event'];
	var change = false,
		ctnr = this._ctnr[0],
		cw = this._lastW,
		ch = this._lastH,
		width = ctnr.clientWidth,
		height = ctnr.clientHeight;
	if (width >= 1 && cw !== width) {
		/**
		  Grid 컨테이너의 폭이 변경되었을 경우 발생하는 이벤트입니다.
		  @event {Event} resizeWidth
		  @param {number} width - 변경 후 폭
		  @param {number} oldWidth - 변경 전 폭
		  @author 조준호
		  @since 1.1.5
		  @version 1.1.5
		  */
		em.trigger("resizeWidth", [width, cw]);
		this._lastW = width;
		change = true;
	}
	if (height >= 1 && ch !== height) {
		/**
		  Grid 컨테이너의 높이가 변경되었을 경우 발생하는 이벤트입니다.
		  @event {Event} resizeHeight
		  @param {number} height - 변경 후 높이
		  @param {number} oldHeight - 변경 전 높이
		  @author 조준호
		  @since 1.1.5
		  @version 1.1.5
		  */
		em.trigger("resizeHeight", [height, ch]);
		this._lastH = height;
		change = true;
	}
	/**
	  Grid 컨테이너의 사이즈가 변경되었을 경우 발생하는 이벤트입니다.
	  @event {Event} resize
	  @param {jQuery.Event} e - jQuery 이벤트 오브젝트
	  @author 조준호
	  @since 1.1.5
	  @version 1.1.5
	  */
	if (change) {
		em.trigger("resize", [e]);
	}
};
/**
  현재 그리드 컨테이너의 폭을 정하거나 현재 값을 리턴합니다.
  @function {number} width
  @params {int=} width - 새로운 그리드 폭
  @returns {number} 현재 그리드 컨테이너의 폭 픽셀 값
  @author 조준호
  @since 1.1.5
  @version 1.1.7
  */
prototype.width = function(w) {
	var ctnr = this._ctnr[0],
		cw = ctnr.clientWidth,
		em = this['event'];
	if (!w) {
		return cw;
	}
	if (typeof w != 'number') {
		w = parseInt(w);
	}
	if (w < 1 || w === cw || !isFinite(w)) {
		return cw;
	}
	ctnr.style.width = w + "px";
	em.trigger("resizeWidth", [w, this._lastW]);
	this._lastW = w;
	em.trigger("resize");
	return w;
};
/*
   현재 그리드 컨테이너의 높이를 리턴합니다.
   @function {number} height
   @returns {number} 현재 그리드 컨테이너의 높이 픽셀 값
   @author 조준호
   @since 1.1.5
   @version 1.1.5
   */
prototype.height = function(h) {
	var ctnr = this._ctnr[0],
		ch = ctnr.clientHeight,
		em = this['event'];
	if (!h) {
		return ch;
	}
	if (typeof h != 'number') {
		h = parseInt(h);
	}
	if (h < 1 || h === ch || !isFinite(h)) {
		return ch;
	}
	ctnr.style.height = h + "px";
	em.trigger("resizeHeight", [h, this._lastH]);
	this._lastH = h;
	em.trigger("resize");
	return h;
};
prototype.getCellByIdAndKey = function(id, key) {
	return JGM.create("Cell", {'grid':this, 'datarow':this['dataMgr'].getById(id), 'colDef':this['colDefMgr'].getByKey(key)});
};
prototype.getCellByIdx = function(rowIdx, colIdx) {
	return JGM.create("Cell", {'grid':this, 'row':rowIdx, 'col':colIdx});
};
/**
  @author 조준호
  @since 1.2.3
  @version 1.3.0
  */
prototype.error = function(code) {
	var str = JGM.error[code],
		i = 1,
		e,
		len = arguments.length;
	for (; i < len; i++) {
		str = str.replace(new RegExp('%' + (i-1), "g"), arguments[i]);
	}
	e = new Error(str);
	e.code = code;
	this.printError(e.message);
	this['event'].trigger("onError", [e]);
	return e;
};
prototype.printError = function(str) {
	if (this._options['showMessage']) {
		var msg = this['msg'],
			msgel = msg[0],
			style = msgel.style;
		msgel.innerHTML = str;
		style.width = this._ctnr[0].clientWidth + 'px';
		style.background = '#ffebe8';
		style.color = '#333';
		msg.show();
		clearTimeout(this.timeout);
		this.timeout = setTimeout(function() { 
			msg.hide(1000);
		}, 5000);
	}
};
prototype.printMessage = function(str) {
	if (this._options['showMessage']) {
		var msg = this['msg'],
			msgel = msg[0],
			style = msgel.style;
		msgel.innerHTML = str;
		style.width = this._ctnr[0].clientWidth + 'px';
		style.background = '#dfdfdf';
		style.color = '#6f6f6f';
		msg.show();
		clearTimeout(this.timeout);
		this.timeout = setTimeout(function() { 
			msg.hide(1000);
		}, 5000);
	}
};
prototype.containsEvent = function(e) {
	return Util.contains(this._ctnr[0], e.target);
};
prototype.getChart = function(name) {
	return this._charts[name];
};
prototype.log = function(msg, vlevel) {
}
prototype.chart = function(chartCont, type, columns, options) {
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
	var grid = this,
		colmgr = this.colDefMgr,
		dataMgr = this.dataMgr,
		coldefs = columns.map(function(k) {
			var coldef = colmgr.getByKey(k);
			if (coldef) {
				return coldef;
			}
			throw new Error('column key not found');
		}),
		rows = dataMgr.exportToArray(columns);
	google.setOnLoadCallback(function() {
		var data = new google.visualization.DataTable(),
			i = 0,
			l = coldefs.length,
			coldef,
			datatype;
		for (; i < l; i++) {
			coldef = coldefs[i];
			datatype = coldef.type;
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
			data.addColumn(datatype || (i === 0 && 'string') || 'number', coldef.name);
		}
		data.addRows(rows);
		var chart = grid._charts[chartCont] = new google.visualization[cls](document.getElementById(chartCont));
		chart.draw(data, options);
		grid['event'].bind('onAfterRefresh', function() {
			data.removeRows(0, data.getNumberOfRows());
			data.addRows(dataMgr.exportToArray(columns));
			chart.draw(data, options);
		});
	});
};
}());
