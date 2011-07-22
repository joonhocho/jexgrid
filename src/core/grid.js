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

 goog.require('JGM.core.BaseModule');

 goog.provide('JGM.core.Grid');

 goog.exportSymbol('JGM.core.Grid', Grid);


 /**
   Grid 코어 모듈. 모든 Grid 모듈이 연결되는 모듈입니다.
   @module Grid
   @requires JGM
   */

 /**
   Grid 코어 클래스. Grid 의 모든 서브 모듈들은 이 클래스에 연결되어 서로
   커뮤니케이트 합니다.

   @class {Grid} JGM.Grid

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
@... {(DOMElement | jQuery)} args.container - Grid 를 위한 컨테이너 오브젝트
@... {Array.<Object>} args.datalist - 데이터 어레이
@... {Array.<Object>} args.colDefs - 컬럼 정의 어레이
@... {Object} args.options - Grid 옵션 오브젝트
@returns {Grid} Grid 모듈 인스턴스를 리턴합니다.

@author 조준호
@since 1.0.0
@version 1.0.0
*/
function Grid(args) {
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

goog.inherits(Grid, JGM.core.BaseModule);

Grid.getInstance = function(args) {
	return new Grid(args);
};

var prototype = Grid.prototype;

prototype._defaultOptions = function() {
	return {		
		/**
		  그리드 컨테이너에 적용되는 CSS 클래스 입니다.<br>기본값:<code>"jgrid"</code>

		  @type {string=} JGM.Grid.options.classGrid
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
classGrid: "jgrid",

			   /**
				 컨테이너에 적용되는 CSS border 스타일 입니다. <br>기본값:<code>"1px solid #868686"</code>

				 @type {string=} JGM.Grid.options.border
				 @private

				 @author 조준호
				 @since 1.0.0
				 @version 1.0.0
				 */
			   border: "1px solid #868686",

			   /**
				 컨테이너에 적용되는 CSS width 픽셀값 입니다. 이 옵션 값이 입력되지 않을 경우 <code>width:100%</code> 로 설정하는 것과 같은 효과를 가집니다.<br>기본값:<code>undefined</code>

				 @type {number=} JGM.Grid.options.width
				 @private

				 @author 조준호
				 @since 1.0.0
				 @version 1.0.0
				 */
			   width: undefined,

			   /**
				 컨테이너에 적용되는 CSS font 스타일 입니다. <br>기본값:<code>"15px Arial,Helvetica,sans-serif"</code>

				 @type {string=} JGM.Grid.options.font
				 @private

				 @author 조준호
				 @since 1.0.0
				 @version 1.0.0
				 */
			   font: "15px Arial,Helvetica,sans-serif",

			   /**
				 그리드 컨테이너에 적용될 CSS Style 입니다.<br>
				 주의할 점: 이 옵션에 입력된 style 이 적용되었을때 DOM 의 크기가 변하면 그리드의 내부적인 크기 계산에 오류가 생깁니다.
				 꼭, 크기에 영향이 없는 style 변경을 할때만 사용하세요.
				 <br>기본값:<code>""</code>

				 @type {string=} JGM.Grid.options.style
				 @private

				 @author 조준호
				 @since 1.0.0
				 @version 1.0.0
				 */
			   style: "",

			   /**
				 컨테이너에 적용되는 border 가 사이드에도 적용될지 여부입니다. <br>기본값:<code>true</code>

				 @type {boolean=} JGM.Grid.options.borderSide
				 @private

				 @author 조준호
				 @since 1.0.0
				 @version 1.0.0
				 */
			   borderSide: true,

			   /**
				 그리드에서 사용되는 이미지들이 있는 폴더의 url 입니다.<br>기본값:<code>"../images/"</code>

				 @type {string=} JGM.Grid.options.imageUrl
				 @private

				 @author 조준호
				 @since 1.1.3
				 @version 1.1.3
				 */
			   imageUrl: "../images/",

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

				 @type {Object=} JGM.Grid.options.links
				 @private

				 @author 조준호
				 @since 1.1.6
				 @version 1.1.6
				 */
			   links: {
data: "dataMgr.all",
		  datalen: "dataMgr.all.length",
		  shown: "dataMgr.datalist",
		  set: "dataMgr.set",
		  add: "dataMgr.add",
		  addList: "dataMgr.addList",
		  update: "dataMgr.update",
		  updateByKey: "dataMgr.updateByKey",
		  updateList: "dataMgr.updateList",
		  remove: "dataMgr.remove",
		  removeList: "dataMgr.removeList",
		  select: "dataMgr.executeSelect",
		  undo: "dataMgr.undo",
		  redo: "dataMgr.redo",
		  addFilter: "dataMgr.addFilter",
		  removeFilter: "dataMgr.removeFilter",
		  check: "collapser.checkMgr.checkList checkMgr.checkList",
		  checked: "collapser.checkMgr.getCheckList checkMgr.getCheckList",
		  removeChecked: "collapser.checkMgr.removeChecked checkMgr.removeChecked",
		  register: "event.register",
		  trigger: "event.trigger",
		  bind: "event.bind",
		  unregister: "event.unregister",
		  unbind: "event.unregister",
		  collen: "colDefMgr.length"
			   },

			   /**
				 true 일 경우, 그리드 컨테이너의 사이즈가 모든 컬럼이 보이도록 자동 조절됩니다. <br>기본값:<code>false</code>

				 @type {boolean=} JGM.Grid.options.autoWidth
				 @private

				 @author 조준호
				 @since 1.1.7
				 @version 1.1.7
				 */
autoWidth: false,

		   showMessage: false

			   /**
				 서브 모듈 들에게 전달할 옵션을 정의합니다. 예를 들어
				 {@link JGM.ViewportManager ViewportManager} 의 옵션을 변경하고자 할 경우
				 다음과 같이 정의하면 됩니다.
				 <code>ViewportManager:{classCell:"jgrid-new-cell-class"</code>
				 <br>기본값:<code>undefined</code><br>

				 @type {string=} JGM.Grid.options.MODULE_CLASS_NAME
				 @private

				 @author 조준호
				 @since 1.0.0
				 @version 1.0.0
				 */
	};
	}

	prototype._init = function(args) {
		this._ctnr = args.container;

		/**
		  Grid 모듈의 기본 옵션 값들을 정의합니다.

		  @type {Object} options
		  @private

		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		this.name = this._options.name;

		this._vars = {
drag: false,
	  scrollbarDim: undefined,
	  lastW: undefined,
	  lastH: undefined
		};

		this._ctnr = $("<div id='" + this.mid + "' class='" + this._options.classGrid + "' " + (Util.isNull(this._options.width) ? "" : "style='width:" + this._options.width + "px' ") + "tabIndex='0'>").appendTo(Util$.safe$(this._ctnr));

		this._vars.scrollbarDim = Util$.calScrollbarDims(this._ctnr);

		this.event = JGM.create("EventManager", {grid:this, options:this._options.EventManager});
		delete this._options.EventManager;

		this.colDefMgr = JGM.create("ColDefManager", {grid:this, colDefs:args.colDefs, options:this._options.ColDefManager});
		delete this._options.ColDefManager;

		this.dataMgr = JGM.create("DataManager", {grid:this, datalist:args.datalist, options:this._options.DataManager});
		delete this._options.DataManager;

		if (this._options.CheckManager) {
			this.checkMgr = JGM.create("CheckManager", {grid:this, options:this._options.CheckManager});
			delete this._options.CheckManager;
		}

		var i = 10,
			colDefs = this.colDefMgr.getAll(),
			len = colDefs.length;
		for (; i < len; i++) {
			colDef = colDefs[i];
			if (colDef.CheckManager) {
				colDef.CheckManager.colDef = colDef;
				colDef.checkMgr = JGM.create("CheckManager", {grid:this, options:colDef.CheckManager});
			}
		}

		if (this._options.Collapser) {
			this.collapser = JGM.create("Collapser", {grid:this, options:this._options.Collapser});
			this.collapser.__init();
			delete this._options.Collapser;
		}

		if (this._options.ColGroup) {
			this.colGroup = JGM.create("ColGroup", {grid:this, options:this._options.ColGroup});
			delete this._options.ColGroup;
		}

		if (this._options.SelectionManager) {
			this.selMgr = JGM.create("SelectionManager", {grid:this, options:this._options.SelectionManager});
			delete this._options.SelectionManager;
		}

		if (this._options.EditManager) {
			this.editMgr = JGM.create("EditManager", {grid:this, options:this._options.EditManager});
			delete this._options.EditManager;
		}

		if (this._options.ColHeader) {
			this.header = JGM.create("ColHeader", {grid:this, container:this._ctnr, options:this._options.ColHeader});
			delete this._options.ColHeader;
		}

		if (this._options.SearchManager) {
			this.search = JGM.create("SearchManager", {grid:this, container:this._ctnr, options:this._options.SearchManager});
			delete this._options.SearchManager;
		}

		if (this._options.MenuBar) {
			this.menubar = JGM.create("MenuBar", {grid:this, container:this._ctnr, options:this._options.MenuBar});
			delete this._options.MenuBar;
		}

		this.view = JGM.create("ViewportManager", {grid:this, container:this._ctnr, options:this._options.ViewportManager});
		delete this._options.ViewportManager;

		if (this._options.TooltipManager) {
			this.tooltip = JGM.create("TooltipManager", {grid:this, container:this._ctnr, options:this._options.TooltipManager});
			delete this._options.TooltipManager;
		}

		if (this._options.DataCreator) {
			this.creator = JGM.create("DataCreator", {grid:this, container:this._ctnr, options:this._options.DataCreator});
			delete this._options.DataCreator;
		}

		if (this._options.Footer) {
			this.footer = JGM.create("Footer", {grid:this, container:this._ctnr, options:this._options.Footer});
			delete this._options.Footer;
		}

		if (this._options.autoWidth) {
			this.event.bind("onResizeCanvasWidth", this.width, this);
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
		  이벤트를 트리거합니다. JGM.ColHeader 와 같이 랜더링이 필요한 서브 모듈들은 이
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
		this.event.trigger("onBeforeRenderModules onRenderModules onAfterRenderModules");

		this.msg = $("<div id='" + this.mid + "msg' class='msg' onmousedown='$(this).hide(1000)' style='position:relative;padding-left:4px;overflow:hidden;z-index:100;font-size:12px;height:21px;line-height:21px'></div>").appendTo(this._ctnr).hide();

		this._vars.lastW = this._ctnr[0].clientWidth;
		this._vars.lastH = this._ctnr[0].clientHeight;

		this._registerLinks(this._options.links);
	}

	prototype._bindEvents = function() {
		JGM._bindGlobalEvents();

		var thisIns = this;
		this._ctnr.bind({
keydown:function(e) { thisIns._keydown(e); },
keyup:function(e) { thisIns._keyup(e); },
keypress:function(e) { thisIns._keypress(e); },
mousein:function(e) { thisIns._mousein(e); },
mouseout:function(e) { thisIns._mouseout(e); },
mouseenter:function(e) { thisIns._mouseenter(e); },
mouseleave:function(e) { thisIns._mouseleave(e); },
mouseover:function(e) { thisIns._mouseover(e); },
mousedown:function(e) { thisIns._mousedown(e); },
click:function(e) { thisIns._click(e); },
dblclick:function(e) { thisIns._dblclick(e); }
});
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
		this.event.trigger("onDestroy");

		JGM._destroy(this, {
name: "Grid",
module: "event",
"$": "_ctnr",
map: "_vars _options",
style: "_style _dynStyle"
});
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
	/**
	  현재 그리드에 적용할 CSS stylesheet 를 생성 할 경우 트리거되는 이벤트입니다.
	  <br>

	  @event {Event} onCreateCss

	  @author 조준호
	  @since 1.0.0
	  @version 1.2.2
	  */
	var style = Util.sprint("%selector%{overflow:hidden;font:%font%;%border%%style%}%submodule%", {
selector: "#" + this.mid,
font: this._options.font,
border: this._options.borderSide ?
"border:" + this._options.border + ";" :
"border-top:" + this._options.border + ";border-bottom:" + this._options.border + ";",
style: this._options.style,
submodule: this.event.trigger("onCreateCss").join("")
});
this._style = Util.createStyle(style);

/**
  현재 그리드에 적용할 다이나믹 CSS stylesheet 를 생성 할 경우 트리거되는 이벤트입니다.
  <br>

  @event {Event} onCreateDynamicCss

  @author 조준호
  @since 1.2.2
  @version 1.2.2
  */

this._dynStyle = Util.createStyle(this.event.trigger("onCreateDynamicCss").join(""));
};

prototype._recreateDynamicCss = function() {
	Util.setStyle(this._dynStyle, this.event.trigger("onCreateDynamicCss").join(""));
};

prototype._keydown = function(e) {
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
	if (this.event.triggerInvalid("onBeforeKeydown", [e])) {
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
	this.event.trigger("keydown_" + e.which + " keydown", [e]);
};

prototype._keyup = function(e) {
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
	if (this.event.triggerInvalid("onBeforeKeyup", [e])) {
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
	this.event.trigger("keyup_" + e.which + " keyup", [e]);
};

prototype._keypress = function(e) {
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
	if (this.event.triggerInvalid("onBeforeKeypress", [e])) {
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
	this.event.trigger("keypress_" + e.which + " keypress", [e]);
};

prototype._mousein = function(e) {
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
	if (this.event.triggerInvalid("onBeforeMousein", [e])) {
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
	if (this._vars.drag) {
		this.event.trigger("dragin mousein", [e]);
	}
	else {
		this.event.trigger("mousein", [e]);
	}
};

prototype._mouseout = function(e) {
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
	if (this.event.triggerInvalid("onBeforeMouseout", [e])) {
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
	if (this._vars.drag) {
		this.event.trigger("dragout mouseout", [e]);
	}
	else {
		this.event.trigger("mouseout", [e]);
	}
};

prototype._mouseenter = function(e) {
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
	if (this.event.triggerInvalid("onBeforeMouseenter", [e])) {
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
	if (this._vars.drag) {
		this.event.trigger("dragenter mouseenter", [e]);
	}
	else {
		this.event.trigger("mouseenter", [e]);
	}
};

prototype._mouseleave = function(e) {
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
	if (this.event.triggerInvalid("onBeforeMouseleave", [e])) {
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
	if (this._vars.drag) {
		this.event.trigger("dragleave mouseleave", [e]);
	}
	else {
		this.event.trigger("mouseleave", [e]);
	}
};

prototype._mousemove = function(e) {
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
	if (this.event.triggerInvalid("onBeforeMousemove", [e])) {
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
	if (this._vars.drag) {
		this.event.trigger("dragmove mousemove", [e]);
	}
	else {
		this.event.trigger("mousemove", [e]);
	}
};

prototype._mouseover = function(e) {
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
	if (this.event.triggerInvalid("onBeforeMouseover", [e])) {
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
	if (this._vars.drag) {
		this.event.trigger("dragover mouseover", [e]);
	}
	else {
		this.event.trigger("mouseover", [e]);
	}
};

prototype._mousedown = function(e) {
	this._vars.drag = true;

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
	if (this.event.triggerInvalid("onBeforeMousedown", [e])) {
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
	this.event.trigger("mousedown", [e]);
};

prototype._mouseup = function(e) {
	this._vars.drag = false;	
	this.event.trigger("unsetDrag");
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
	if (this.event.triggerInvalid("onBeforeMouseup", [e])) {
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
	this.event.trigger("mouseup", [e]);
};

prototype._click = function(e) {
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
	if (this.event.triggerInvalid("onBeforeClick", [e])) {
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
	this.event.trigger("click", [e]);
};

prototype._dblclick = function(e) {
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
	if (this.event.triggerInvalid("onBeforeDblclick", [e])) {
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
	this.event.trigger("dblclick", [e]);
};

prototype._resize = function(e) {
	var change = false,
		width = this._ctnr[0].clientWidth,
		height;
	if (width >= 1 && this._vars.lastW !== width) {
		/**
		  Grid 컨테이너의 폭이 변경되었을 경우 발생하는 이벤트입니다.
		  @event {Event} resizeWidth
		  @param {number} width - 변경 후 폭
		  @param {number} oldWidth - 변경 전 폭

		  @author 조준호
		  @since 1.1.5
		  @version 1.1.5
		  */
		this.event.trigger("resizeWidth", [width, this._vars.lastW]);
		this._vars.lastW = width;
		change = true;
	}
	height = this._ctnr[0].clientHeight;
	if (height >= 1 && this._vars.lastH !== height) {
		/**
		  Grid 컨테이너의 높이가 변경되었을 경우 발생하는 이벤트입니다.
		  @event {Event} resizeHeight
		  @param {number} height - 변경 후 높이
		  @param {number} oldHeight - 변경 전 높이

		  @author 조준호
		  @since 1.1.5
		  @version 1.1.5
		  */
		this.event.trigger("resizeHeight", [height, this._vars.lastH]);
		this._vars.lastH = height;
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
		this.event.trigger("resize", [e]);
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
	w = parseInt(w);
	if (Util.isNull(w) || isNaN(w) || w < 1 || w === this._ctnr[0].clientWidth) {
		return this._ctnr[0].clientWidth;
	}

	this._ctnr[0].style.width = w + "px";
	this.event.trigger("resizeWidth", [w, this._vars.lastW]);
	this._vars.lastW = w;

	this.event.trigger("resize");
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
	h = parseInt(h);
	if (Util.isNull(h) || isNaN(h) || h < 1 || h === this._ctnr[0].clientHeight) {
		return this._ctnr[0].clientHeight;
	}

	this._ctnr[0].style.height = h + "px";
	this.event.trigger("resizeHeight", [h, this._vars.lastH]);
	this._vars.lastH = h;

	this.event.trigger("resize");
	return h;
};

prototype.getCellByIdAndKey = function(id, key) {
	return JGM.create("Cell", {grid:this, datarow:this.dataMgr.getById(id), colDef:this.colDefMgr.getByKey(key)});
};

prototype.getCellByIdx = function(rowIdx, colIdx) {
	return JGM.create("Cell", {grid:this, row:rowIdx, col:colIdx});
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
	this.event.trigger("onError", [e]);
	return e;
};

prototype.printError = function(str) {
	if (this._options.showMessage) {
		var msg = this.msg;
		msg[0].innerHTML = str;
		msg[0].style.width = this._ctnr[0].clientWidth + 'px';
		msg[0].style.background = '#ffebe8';
		msg[0].style.color = '#333';
		msg.show();
		clearTimeout(this.timeout);
		this.timeout = setTimeout(function() { 
				msg.hide(1000);
				}, 5000);
	}
};

prototype.printMessage = function(str) {
	if (this._options.showMessage) {
		var msg = this.msg;
		msg[0].innerHTML = str;
		msg[0].style.width = this._ctnr[0].clientWidth + 'px';
		msg[0].style.background = '#dfdfdf';
		msg[0].style.color = '#6f6f6f';
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

JGM._add("Grid", Grid);
}());
