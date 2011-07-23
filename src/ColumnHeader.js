goog.require('engine_extension');
goog.require('jx.util');
goog.require('jx.grid');
goog.require('jx.grid.BaseModule');
goog.require('jx.grid.Grid');
goog.require('jx.grid.ColumnManager');

goog.provide('jx.grid.ColumnHeader');

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
	Util = goog.getObjectByName('jx.util'),
	BaseModule = goog.getObjectByName('jx.grid.BaseModule');

 goog.exportSymbol('jx.grid.ColumnHeader', ColHeader);
 JGM._add("ColHeader", ColHeader);

/**
ColHeader 모듈. 컬럼 헤더들을 담당하는 모듈입니다.
@module ColHeader

@requires JGM
@requires JGM.Grid
@requires JGM.ColDefManager
@requires JGM.EventManager
@requires JGM.ViewportManager
 */

/**
ColHeader 클래스. 컬럼 값에 따른 데이터 로우 정렬과 컬럼 좌우 위치 변경 등 컬럼
관련 기능들을 지원합니다.

@class {ColHeader} JGM.ColHeader

@author 조준호
@since 1.0.0
@version 1.2.1
*/

/**
ColHeader 컨스트럭터 입니다.

@constructor {ColHeader} ColHeader
@param {Object} args - ColHeader 모듈 파라미터 오브젝트
@... {jQuery} args.container - ColHeader 를 넣을 컨테이너 오브젝트
@... {JGM.Grid} args.grid - ColHeader 를 포함하는 {@link JGM.Grid Grid} 인스턴스
@... {Object} args.options - ColHeader 옵션 오브젝트
@returns {ColHeader} ColHeader 모듈 인스턴스를 리턴합니다.

@author 조준호
@since 1.0.0
@version 1.0.0
*/
function ColHeader(args) {
	/**
	{@link JGM} 이 할당해주는 ColHeader 모듈 고유 아이디입니다. 읽기 전용.

	@var {string} mid

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.mid = args.mid;

	this._ctnr = args['container'];

	this._mask;

	this._head;

	/**
	ColHeader 를 포함하는 {@link JGM.Grid Grid} 인스턴스.

	@var {JGM.Grid} grid

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.grid = args.grid;
	
	/**
	그리드 컬럼 헤더를 관리하는 {@link JGM.ColHeader ColHeader} 인스턴스 입니다.

	@var {JGM.ColHeader} JGM.Grid.header

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.grid['header'] = this;

	/**
	ColHeader 모듈의 기본 옵션 값들을 정의합니다.

	@type {Object} options
	@private

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	var options = {
		/**
		컬럼 순서 변경 가능 여부를 정합니다. <br>기본값:<code>false</code>

		@type {boolean=} JGM.ColHeader.options.reorderEnabled
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'reorderEnabled': false,

		/**
		컬럼 순서 변경을 할 경우, 컬럼 셀들이 컬럼 헤더와 함께
		위치가 변경될지를 정합니다. <br>기본값:<code>true</code>

		@type {boolean=} JGM.ColHeader.options.reorderSyncEnabled
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'reorderSyncEnabled': true,

		/**
		컬럼 헤더의 기본 배경을 설정합니다. <br>기본값:<code>"url(" + imageUrl + "column-headers-bg.png) repeat-x scroll center"</code>

		@type {string=} JGM.ColHeader.options.background
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'background': "url(" + this.grid['_options']['imageUrl'] + "column-headers-bg.png) repeat-x scroll center",

		/**
		컬럼 헤더에 마우스가 오버되었을 때의 배경을 설정합니다. <br>기본값:<code>"url(" + imageUrl + "column-headers-over-bg.png) repeat-x scroll center"</code>

		@type {string=} JGM.ColHeader.options.backgroundHover
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'backgroundHover': "url(" + this.grid['_options']['imageUrl'] + "column-headers-over-bg.png) repeat-x scroll center",

		/**
		컬럼 순서 변경 시에 컬럼 헤더의 빈 자리의 배경을 설정합니다. <br>기본값:<code>"#646464"</code>

		@type {string=} JGM.ColHeader.options.backgroundPlaceholder
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'backgroundPlaceholder': "#646464",

		/**
		컬럼 로우 정렬 기본 상태 표시 아이콘 배경입니다. <br>기본값:<code>imageUrl + "sort.png"</code>

		@type {string=} JGM.ColHeader.options.sortBackground
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'sortBackground': this.grid['_options']['imageUrl'] + "sort.png",

		/**
		컬럼 로우 정렬 상태 표시 아이콘의 오른쪽 마진 픽셀입니다. <br>기본값:<code>4</code>

		@type {number=} JGM.ColHeader.options.sortRight
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'sortRight': 4,

		/**
		컬럼 로우 정렬 상태 표시 아이콘의 폭 픽셀입니다. <br>기본값:<code>7</code>

		@type {number=} JGM.ColHeader.options.sortWidth
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'sortWidth': 7,

		/**
		컬럼 로우 정렬 오름차순 상태 표시 아이콘 배경입니다. <br>기본값:<code>imageUrl + "sort-asc.png"</code>

		@type {string=} JGM.ColHeader.options.sortBackgroundAsc
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'sortBackgroundAsc': this.grid['_options']['imageUrl'] + "sort-asc.png",

		/**
		컬럼 로우 정렬 내림차순 상태 표시 아이콘 배경입니다. <br>기본값:<code>imageUrl + "sort-desc.png"</code>

		@type {string=} JGM.ColHeader.options.sortBackgroundDesc
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'sortBackgroundDesc': this.grid['_options']['imageUrl'] + "sort-desc.png",

		/**
		컬럼 헤더의 폰트 스타일입니다. <br>기본값:<code>"15px Arial,Helvetica,sans-serif"</code>

		@type {string=} JGM.ColHeader.options.font
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'font': "15px Arial,Helvetica,sans-serif",

		/**
		컬럼 헤더의 높이 픽셀 입니다. <br>기본값:<code>21</code>

		@type {number=} JGM.ColHeader.options.height
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'height': 21,

		/**
		컬럼 헤더 border 의 두께 입니다. <br>기본값:<code>1</code>

		@type {number=} JGM.ColHeader.options.borderThickness
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'borderThickness': 1,

		/**
		컬럼 헤더 border 의 스타일 입니다. <br>기본값:<code>"solid #909192"</code>

		@type {string=} JGM.ColHeader.options.border
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'border': "solid #909192",

		/**
		컬럼 헤더 컨테이너 마스크에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-header-mask"</code>

		@type {string=} JGM.ColHeader.options.classHeaderMask
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'classHeaderMask': "jgrid-header-mask",

		/**
		컬럼 헤더 컨테이너에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-header"</code>

		@type {string=} JGM.ColHeader.options.classHeader
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'classHeader': "jgrid-header",

		/**
		각 컬럼 헤더에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-colheader"</code>

		@type {string=} JGM.ColHeader.options.classColHeader
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'classColHeader': "jgrid-colheader",

		/**
		컬럼 헤더 순서 변경시 변경되는 컬럼에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-colheader-active"</code>

		@type {string=} JGM.ColHeader.options.classColHeaderActive
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'classColHeaderActive': "jgrid-colheader-active",

		/**
		컬럼 헤더 순서 변경시 변경되는 컬럼의 빈자리에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-colheader-placeholder"</code>

		@type {string=} JGM.ColHeader.options.classColHeaderPlaceholder
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'classColHeaderPlaceholder': "jgrid-colheader-placeholder",

		/**
		interactive 한 컬럼 헤더들에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"interactive"</code>

		@type {string=} JGM.ColHeader.options.classInteractive
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'classInteractive': "interactive",

		/**
		현재 로우 정렬 중인 컬럼 헤더에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-colheader-sorted"</code>

		@type {string=} JGM.ColHeader.options.classColHeaderSorted
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'classColHeaderSorted': "jgrid-colheader-sorted",

		/**
		컬럼 로우 정렬 상태 표시 아이콘에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-sort"</code>

		@type {string=} JGM.ColHeader.options.classSort
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'classSort': "jgrid-sort",

		/**
		컬럼 로우 정렬 오름차순 상태 표시 아이콘에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-sort-asc"</code>

		@type {string=} JGM.ColHeader.options.classSortAsc
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'classSortAsc': "jgrid-sort-asc",

		/**
		컬럼 로우 정렬 내림차순 상태 표시 아이콘에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-sort-desc"</code>

		@type {string=} JGM.ColHeader.options.classSortDesc
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'classSortDesc': "jgrid-sort-desc",

		/**
		컬럼 폭 조절 핸들의 CSS 클래스 입니다.<br>기본값:<code>"jgrid-resize-handle"</code>

		@type {string=} JGM.ColHeader.options.classResizeHandle
		@private

		@author 조준호
		@since 1.1.2
		@version 1.1.2
		*/
		'classResizeHandle': "jgrid-resize-handle",

		/**
		컬럼 폭 조절 핸들의 폭입니다. <br>기본값:<code>11</code>

		@type {number=} JGM.ColHeader.options.resizeHandleWidth
		@private

		@author 조준호
		@since 1.1.2
		@version 1.1.2
		*/
		'resizeHandleWidth': 11,

		/**
		컬럼 헤더 컨테이너 마스크에 적용되는 CSS style 입니다.<br>
		주의할 점: 이 옵션에 입력된 style 이 적용되었을때 DOM 의 크기가 변하면 그리드의 내부적인 크기 계산에 오류가 생깁니다.
		꼭, 크기에 영향이 없는 style 변경을 할때만 사용하세요.
		<br>기본값:<code>""</code>

		@type {string=} JGM.ColHeader.options.style
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'style': "",

		/**
		컬럼 헤더들에 공통적으로 CSS style 입니다.<br>
		주의할 점: 이 옵션에 입력된 style 이 적용되었을때 DOM 의 크기가 변하면 그리드의 내부적인 크기 계산에 오류가 생깁니다.
		꼭, 크기에 영향이 없는 style 변경을 할때만 사용하세요.
		<br>기본값:<code>""</code>

		@type {string=} JGM.ColHeader.options.headerStyle
		@private

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'headerStyle': "",

		/**
		스크롤러의 시작 style.left
		<br>기본값:<code>10000</code>

		@type {number=} JGM.ColHeader.options.scrollerLeft
		@private

		@author 조준호
		@since 1.1.7
		@version 1.1.7
		*/
		'scrollerLeft': 10000,
		
		/**
		스크롤러의 width
		<br>기본값:<code>100000</code>

		@type {number=} JGM.ColHeader.options.scrollerWidth
		@private

		@author 조준호
		@since 1.1.7
		@version 1.1.7
		*/
		'scrollerWidth': 100000,
		
		/**
		컬럼 리사이즈를 할 때 생기는 가이드에 적용되는 CSS 클래스 입니다.
		<br>기본값:<code>"resize-guide"</code>

		@type {string=} JGM.ColHeader.options.classResizeGuide
		@private

		@author 조준호
		@since 1.1.7
		@version 1.1.7
		*/
		'classResizeGuide': "resize-guide",
		
		/**
		컬럼 리사이즈를 할 때 생기는 가이드의 폭 픽셀입니다.
		<br>기본값:<code>1</code>

		@type {number=} JGM.ColHeader.options.resizeGuideWidth
		@private

		@author 조준호
		@since 1.1.7
		@version 1.1.7
		*/
		'resizeGuideWidth': 1,
		
		/**
		컬럼 리사이즈를 할 때 생기는 가이드의 배경 style 입니다.
		<br>기본값:<code>"black;filter:alpha(opacity=40);opacity:0.4"</code>

		@type {string=} JGM.ColHeader.options.resizeBackground
		@private

		@author 조준호
		@since 1.1.7
		@version 1.1.7
		*/
		'resizeBackground': "black;filter:alpha(opacity=40);opacity:0.4",
		
		/**
		컬럼 리사이즈를 할 때 컬럼 셀들을 동시에 사이즈 변경할지 여부입니다.
		<br>기본값:<code>false</code>

		@type {boolean=} JGM.ColHeader.options.syncResize
		@private

		@author 조준호
		@since 1.1.7
		@version 1.1.7
		*/
		'syncResize': false,
		
		/**
		컬럼 리사이즈 핸들의 배경 style 입니다.
		<br>기본값:<code>"black;filter:alpha(opacity=5);opacity:0.05"</code>

		@type {string=} JGM.ColHeader.options.resizeHandleBackground
		@private

		@author 조준호
		@since 1.2.1
		@version 1.2.1
		*/
		'resizeHandleBackground': "black;filter:alpha(opacity=5);opacity:0.05"
	};

	this._options = JGM._extend(options, args['options']);

	this._map = {};
	
	this._resizeKey;
	this._resizeInitX;
	this._resizeHandleInitX;
	this._resizeInitWidth;
	this._resizeMap = {};
	this._resizeInitColWidth;
	this._resizeGuide;
	this._resizeHandleOffset;

	this.__init();
}

ColHeader.getInstance = function(args) {
	return new ColHeader(args);
};

var prototype = ColHeader.prototype;

prototype.__init = function() {
	this._mask =
		$("<div class='" + this._options['classHeaderMask'] + "'>")
		.prependTo(this._ctnr);

	this._head =
		$("<div class='" + this._options['classHeader'] + "'>")
		.appendTo(this._mask);

	ColHeader._disableSel(this._head);

	this.bindEvents();
};

prototype.bindEvents = function() {
	var events,
		colDefs = this.grid['colDefMgr'].get(),
		len = colDefs.length,
		i = 0;

	events = {
		'onRenderModules': this._onRenderModules,
		'onAfterRenderModules': this._onAfterRenderModules,
		'onCreateCss': this._onCreateCss,
		'onDestroy': this._destroy,
		'mousedown': this._mousedown,
		'mouseup': this._mouseup,
		'dragmove': this._dragmove,
		'onScrollViewportH': this._onScrollViewportH,
		'onScrollViewportV': this._onScrollViewportV,
		'onChangeSorter': this._onChangeSorter,
		'click': this._click,
		'onResizeCol': this._setWidthByKey
	};

	for (; i < len; i++) {
		if (Util.isNotNull(colDefs[i].sorter)) {
			events["clickHeader_" + colDefs[i].key] = this._sort;
		}
	}

	this.grid['event'].bind(events, this);
};

prototype._destroy = function() {	
	if (this._head.sortable) {
		this._head.sortable("destroy");
	}
		
	this._destroyResizeHandles();
	
	JGM._destroy(this, {
		name: "ColHeader",
		path: "header",
		"$": "resizeGuide _mask _head",
		property: "ctnr _resizeMap",
		map: "map _options"
	});
};

prototype._onCreateCss = function() {
	var gridId = "#" + this.grid['mid'] + " .",
		opt = this._options,
		border = opt['borderThickness'] + "px " + opt['border'],
		rules = [],
		colDefs = this.grid['colDefMgr'].get(),
		len = colDefs.length,
		i = 0;

	rules.push(gridId + opt['classHeaderMask'] + "{position:relative;overflow:hidden;width:100%;font:" + opt['font'] + ";background:" + opt['background'] + ";border-bottom:" + border + ";" + opt['style'] + "}");
	rules.push(gridId + opt['classHeader'] + "{position:relative;overflow:hidden;white-space:nowrap;cursor:default;left:" + (-opt['scrollerLeft']) + "px;width:" + opt['scrollerWidth'] + "px;line-height:" + opt['height'] + "px}");
	rules.push(gridId + opt['classColHeader'] + "{position:relative;overflow:hidden;float:left;text-overflow:ellipsis;text-align:center;height:" + opt['height'] + "px;left:" + (opt['scrollerLeft'] - this.grid['view'].getScrollLeft()) + "px;border-right:" + border + ";" + opt['headerStyle'] + "}");
	rules.push(gridId + opt['classColHeader'] + "." + opt['classInteractive'] + ":hover, " + gridId + opt['classColHeaderActive'] + "{background:" + opt['backgroundHover'] + "}");
	rules.push(gridId + opt['classColHeaderActive'] + "{border-left:" + border + "}");
	rules.push(gridId + opt['classColHeader'] + "." + opt['classColHeaderPlaceholder'] + "{background:" + opt['backgroundPlaceholder'] + "!important}");
	rules.push(gridId + opt['classSort'] + "{position:absolute;height:" + opt['height'] + "px;right:" + opt['sortRight'] + "px;width:" + opt['sortWidth'] + "px;background:url(" + opt['sortBackground'] + ") no-repeat center transparent}");
	rules.push(gridId + opt['classSortAsc'] + "{background:url(" + opt['sortBackgroundAsc'] + ") no-repeat center transparent}");
	rules.push(gridId + opt['classSortDesc'] + "{background:url(" + opt['sortBackgroundDesc'] + ") no-repeat center transparent}");
	rules.push(gridId + opt['classResizeHandle'] + "{z-index:10;background:" + opt['resizeHandleBackground'] + ";cursor:e-resize;position:absolute;height:" + opt['height'] + "px;width:" + opt['resizeHandleWidth'] + "px}");
	rules.push(gridId + opt['classResizeGuide'] + "{z-index:10;position:absolute;background:" + opt['resizeBackground'] + ";width:" + opt['resizeGuideWidth'] + "px}");
	
	for (; i < len; i++) {
		rules.push(gridId + opt['classColHeader'] + "#" + this.mid + "h" + colDefs[i].key + "{" + colDefs[i].headerStyle + "}");
	}
	
	return rules.join("");
};

prototype._widthPlus = function() {
	return this._options['borderThickness'];
};

prototype._onScrollViewportH = function(scrollLeft) {
	this._head[0].style.left = (-this._options['scrollerLeft'] - scrollLeft) + "px";
};

prototype._onRenderModules = function() {
	var colDefs = this.grid['colDefMgr'].get(),
		len = colDefs.length,
		i = 0,
		colDef,
		headers = [];

	for (; i < len; i++) {
		if (!(colDef = colDefs[i]).hidden) {
			this._render(headers, colDef, i);
		}
	}
	this._head[0].innerHTML = headers.join("");

	/**
	ColHeader 의 렌더링이 완료되었을 때 트리거되는 이벤트 입니다.
	@event {Event} onRenderHeadersComplete

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.grid['event'].trigger("onRenderHeadersComplete");
};

prototype._onAfterRenderModules = function() {
	if (this._options['reorderEnabled']) {
		this._initReorder();
	}
	
	this._initResizeHandles();
	
	this._resizeGuide = $("<div class='" + this._options['classResizeGuide'] + "'>")
		.appendTo(this.grid['view']._mask);
	this._resizeGuide[0].style.top = "0px";
	this._resizeGuide[0].style.height = "0px";
};

prototype._render = function(header, colDef, i) {
	if (Util.isNull(colDef)) {
		return;
	}
	var name = (colDef['noName'] ? "" : colDef['name'] || colDef['key']),
		widthPlus = this._widthPlus();

	header.push("<div id='" + this.mid + "h" + colDef['key'] + "' class='" + this._options['classColHeader'] + " " + (this._options['reorderEnabled'] || Util.isNotNull(colDef['sorter']) ? " " + this._options['classInteractive'] : "") +
		"' " + (colDef['noTitle'] ? "" : "title='" + (colDef['title'] || name) + "' ") + "style='width:" + (this.grid['view']._getColOuterWidth(i) - widthPlus) + "px;' colKey='" + colDef['key'] + "'>");

	/**
	ColHeader 렌더링 시에 발생되는 이벤트로 컬럼 이름 앞에 넣을 모듈 들을 렌더링하기 위해 트리거 됩니다.
	@event {Event} onRenderHeader_COLKEY_prepend
	@param {Array.<string>} html - 컬럼 헤더 렌더링 스트링들을 가진 어레이

	@author 조준호
	@since 1.0.0
	@version 1.1.7
	*/
	this.grid['event'].trigger("onRenderHeader_" + colDef['key'] + "_prepend", [header]);

	header.push(name);

	/**
	ColHeader 렌더링 시에 발생되는 이벤트로 컬럼 이름 뒤에 넣을 모듈 들을 렌더링하기 위해 트리거 됩니다.
	@event {Event} onRenderHeader_COLKEY_append
	@param {Array.<string>} html - 컬럼 헤더 렌더링 스트링들을 가진 어레이

	@author 조준호
	@since 1.0.0
	@version 1.1.7
	*/
	this.grid['event'].trigger("onRenderHeader_" + colDef['key'] + "_append", [header]);

	if (Util.isNotNull(colDef['sorter'])) {
		header.push("<span class='" + this._options['classSort'] + "'></span>");
	}

	header.push("</div>");
};

ColHeader._disableSel = function(target) {
	Util$.safe$(target)
		.attr("unselectable", 'on')
		.css('MozUserSelect', 'none')
		.bind('selectstart.ui', function() { return false; });
};

/**
주어진 key 에 해당하는 컬럼 헤더 jQuery 오브젝트를 리턴합니다.

@function {jQuery} get
@param {string} key - 컬럼의 key
@returns {jQuery} 주어진 key 에 해당하는 컬럼 헤더 jQuery 오브젝트

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.get = function(key) {
	if (this._map.hasOwnProperty(key)) {
		return this._map[key];
	}

	var node = document.getElementById(this.mid + "h" + key);
	if (Util.isNull(node)) {
		return $([]);
	}

	return (this._map[key] = $(node));
};

// 0 --> remove all, 1 --> asc, 2 --> desc
prototype._updateIndicator = function(key, status) {
	var colHeader = this.get(key);
	if (colHeader.length === 0) {
		return;
	}

	var opt = this._options,
		indicator = colHeader.find("." + opt['classSort']);
	if (status === 0) {
		colHeader.removeClass(opt['classColHeaderSorted']);
		indicator.removeClass(opt['classSortAsc'] + " " + opt['classSortDesc']);
	}
	else {
		colHeader.addClass(opt['classColHeaderSorted']);
		if (status === 1) {
			indicator.addClass(opt['classSortAsc']).removeClass(opt['classSortDesc']);
		}
		else if (status === 2) {
			indicator.addClass(opt['classSortDesc']).removeClass(opt['classSortAsc']);
		}
	}
};

prototype._closest = function(obj) {
	return Util$.safe$(obj).closest("div." + this._options['classColHeader'], this._head);
};

prototype._getDef = function(header) {
	return this.grid['colDefMgr'].getByKey(header.attr("colKey"));
};


prototype._sort = function(e, colHeader, colDef) {
	var sorter = colDef['sorter'];
	if (Util.isNull(sorter)) {
		return;
	}

	/**
	컬럼 정렬 전에 트리거되는 이벤트 입니다.
	@event {Event} onBeforeColSort_COLKEY

	@author 조준호
	@since 1.0.0
	@version 1.1.7
	*/
	
	/**
	컬럼 정렬 전에 트리거되는 이벤트 입니다.
	@event {Event} onBeforeColSort

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.grid['event'].trigger("onBeforeColSort_" + colDef['key'] + " onBeforeColSort");

	sorter.desc = (sorter.desc === false) ? true : false;

	//this._setSortClass();
	this.grid['dataMgr'].refresh({'sorter':sorter});

	// manually call this because IE cannot detect the scroll event
	this.grid['view']._scroll();
};

prototype._onChangeSorter = function(oldSorter, newSorter) {
	if (oldSorter === newSorter) {
		if (Util.isNotNull(newSorter)) {
			this._updateIndicator(newSorter.key, (newSorter.desc ? 2 : 1));
		}
		return;
	}
	if (Util.isNotNull(oldSorter)) {
		this._updateIndicator(oldSorter.key, 0);
	}
	if (Util.isNotNull(newSorter)) {
		this._updateIndicator(newSorter.key, (newSorter.desc ? 2 : 1));
	}
};

prototype._initReorder = function() {
	var thisIns = this,
		opt = this._options,
		colDefMgr = this.grid['colDefMgr'],
		container = this._head,
		idSubLen = this.mid.length + 1,
		updatefn = function(e, ui) {
			var keys = $(container).sortable('toArray'),
				len = keys.length,
				key,
				i = 0;
			for (; i < len; i++) {
				key = keys[i];
				if (key === "") {
					keys[i] = ui.item.attr("id").substring(idSubLen);
				}
				else {
					keys[i] = key.substring(idSubLen);
				}
			}
			colDefMgr.sortByKey(keys);
		};

	container.sortable({
		'items': "." + opt['classColHeader'],
		'axis': "x",
		'forcePlaceholderSize': true,
		'placeholder': opt['classColHeaderPlaceholder'] + " " + opt['classColHeader'],
		'tolerance': "pointer",
		'start': function(e, ui) {
			ui.item.addClass(thisIns._options['classColHeaderActive']);
		},
		'stop': function(e, ui) {
			ui.item.removeClass(thisIns._options['classColHeaderActive']);
			thisIns._syncResizeHandles();
		},
		'update': updatefn
	});

	if (opt['reorderSyncEnabled']) {
		container.sortable("option", "change", updatefn);
	}
};

prototype._getDx = function(e, colDef) {
	var dx = e.clientX - this._resizeInitX,
		minW = colDef['minW'],
		maxW = Util.ifNull(colDef['maxW'], Number.MAX_VALUE),
		initW = this._resizeInitWidth;

	if (initW + dx < minW) {
		dx = minW - initW;		
	}
	if (initW + dx > maxW) {
		dx = maxW - initW;
	}
	return dx;
};

prototype._click = function(e) {
	var colHeader = this._closest(e.target);
	if (colHeader.length === 0) {
		return;
	}

	var colDef = this._getDef(colHeader);

	/**
	ColHeader 에 click 이벤트가 발생할 경우 트리거되는 이벤트 입니다. 발생된 click 이벤트가
	valid 한지를 체크합니다.

	@event {Event} clickHeaderValid_COLKEY
	@param {jQuery.Event} e - jQuery 이벤트 오브젝트
	@param {jQuery} colHeader - 컬럼 헤더를 가진 jQuery 오브젝트
	@returns {boolean} false 를 리턴할 경우 {@link clickHeader} 이벤트를 트리거하지
	않습니다.

	@author 조준호
	@since 1.0.0
	@version 1.1.7
	*/
	if (this.grid['event'].triggerInvalid("clickHeaderValid_" + colDef['key'], [e, colHeader, colDef])) {
		return;
	}

	/**
	ColHeader 에 click 이벤트가 발생할 경우 트리거되는 이벤트 입니다.
	@event {Event} clickHeader_COLKEY
	@param {jQuery.Event} e - jQuery 이벤트 오브젝트
	@param {jQuery} colHeader - 컬럼 헤더를 가진 jQuery 오브젝트
	@param {Object} colDef - 컬럼 정의 오브젝트

	@author 조준호
	@since 1.0.0
	@version 1.1.7
	*/
	
	/**
	ColHeader 에 click 이벤트가 발생할 경우 트리거되는 이벤트 입니다.
	@event {Event} clickHeader
	@param {jQuery.Event} e - jQuery 이벤트 오브젝트
	@param {jQuery} colHeader - 컬럼 헤더를 가진 jQuery 오브젝트
	@param {Object} colDef - 컬럼 정의 오브젝트

	@author 조준호
	@since 1.0.0
	@version 1.1.7
	*/
	this.grid['event'].trigger("clickHeader_" + colDef['key'] + " clickHeader", [e, colHeader, colDef]);
};

prototype._mousedown = function(e) {
	if (Util.hasTagAndClass(e.target, "DIV", this._options['classResizeHandle'])) {
		this._resizeKey = e.target.getAttribute("key");
		this._resizeInitWidth = this.get(this._resizeKey)[0].clientWidth;
		this._resizeInitColWidth = this.grid['colDefMgr'].getByKey(this._resizeKey).width;
		this._resizeInitX = e.clientX;
		this._resizeHandleInitX = this._resizeMap[this._resizeKey][0].offsetLeft;
		this._resizeGuide[0].style.left = Math.floor(this._resizeHandleInitX + (this._options['resizeHandleWidth'] - this._options['resizeGuideWidth']) / 2 - this._options['scrollerLeft']) + "px";
		this._resizeGuide[0].style.height = this.grid['view'].getInnerHeight() + "px";
		return;
	}
	
	var colHeader = this._closest(e.target);
	if (colHeader.length === 0) {
		return;
	}

	/**
	ColHeader 에 mousedown 이벤트가 발생할 경우 트리거되는 이벤트 입니다.
	@event {Event} mousedownHeader
	@param {jQuery.Event} e - jQuery 이벤트 오브젝트
	@param {jQuery} colHeader - 컬럼 헤더를 가진 jQuery 오브젝트

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.grid['event'].trigger("mousedownHeader", [e, colHeader]);

	var colDef = this._getDef(colHeader);

	/**
	ColHeader 에 mousedown 이벤트가 발생할 경우 트리거되는 이벤트 입니다.
	@event {Event} mousedownHeader_COLKEY
	@param {jQuery.Event} e - jQuery 이벤트 오브젝트
	@param {jQuery} colHeader - 컬럼 헤더를 가진 jQuery 오브젝트
	@param {Object} colDef - 컬럼 정의 오브젝트

	@author 조준호
	@since 1.0.0
	@version 1.1.7
	*/
	this.grid['event'].trigger("mousedownHeader_" + colDef['key'], [e, colHeader, colDef]);
};

prototype._dragmove = function(e) {
	if (Util.isNull(this._resizeKey)) {
		return;
	}
		
	var dx = this._getDx(e, this.grid['colDefMgr'].getByKey(this._resizeKey));
	
	if (Math.abs(dx) < 1) {
		return;
	}
	
	this.get(this._resizeKey)[0].style.width = this._resizeInitWidth + dx + "px";
	this._moveResizeHandles(this._resizeHandleInitX + dx - this._resizeMap[this._resizeKey][0].offsetLeft, this.grid['colDefMgr'].getIdxByKey(this._resizeKey));
	this._resizeGuide[0].style.left = Math.floor(this._resizeHandleInitX + dx + (this._options['resizeHandleWidth'] - this._options['resizeGuideWidth']) / 2 - this._options['scrollerLeft']) + "px";
	
	if (this._options['syncResize']) {
		this.grid['view'].setWidthByKey(this._resizeKey, this._resizeInitColWidth + dx);
	}
};

prototype._mouseup = function(e) {
	if (Util.isNull(this._resizeKey)) {
		return;
	}
	
	this._resizeGuide[0].style.height = "0px";
		
	var dx = this._getDx(e, this.grid['colDefMgr'].getByKey(this._resizeKey));	
	
	if (Math.abs(dx) >= 1) {
		this.grid['view'].setWidthByKey(this._resizeKey, this._resizeInitColWidth + dx);
	}
	
	delete this._resizeKey;
	delete this._resizeInitX;
	delete this._resizeHandleInitX;
	delete this._resizeInitWidth;
	delete this._resizeInitColWidth;
};

prototype._setWidthByKey = function(key, w, o) {
	this.get(key)[0].style.width = w + this.grid['view']._colWidthPlus() - this._widthPlus() + "px";
	
	this._syncResizeHandles(this.grid['colDefMgr'].getIdxByKey(key));
};

prototype._syncResizeHandles = function(i) {
	if (Util.isNull(i)) {
		i = 0;
	}
		
	var lefts = this.grid['view']._getColLefts(),
		colDefs = this.grid['colDefMgr'].get(),
		len = colDefs.length,
		rmap = this._resizeMap,
		key;
		
	for (; i < len; i++) {
		key = colDefs[i].key;
		if (rmap.hasOwnProperty(key)) {
			rmap[key][0].style.left = (lefts[i + 1] + this._resizeHandleOffset) + "px";
		}
	}
};

prototype._moveResizeHandles = function(dx, i) {
	if (Util.isNull(i)) {
		i = 0;
	}
		
	var colDefs = this.grid['colDefMgr'].get(),
		len = colDefs.length,
		rmap = this._resizeMap,
		key,
		node;
		
	for (; i < len; i++) {
		key = colDefs[i].key;
		if (rmap.hasOwnProperty(key)) {
			node = rmap[key][0];
			node.style.left = (node.offsetLeft + dx) + "px";
		}
	}
};

prototype._onScrollViewportV = function() {
	this._resizeGuide[0].style.top = this.grid['view'].getScrollTop() + "px";
};

prototype._destroyResizeHandles = function() {
	var rmap = this._resizeMap,
		key;

	for (key in rmap) {
		if (rmap.hasOwnProperty(key)) {
			rmap[key].remove();
			delete rmap[key];
		}
	}
	
	delete this._resizeKey;
	delete this._resizeInitX;
	delete this._resizeHandleInitX;
	delete this._resizeInitWidth;
	delete this._resizeInitColWidth;
};

prototype._initResizeHandles = function() {
	var colDefs = this.grid['colDefMgr'].get(),
		len = colDefs.length,
		lefts = this.grid['view']._getColLefts(),
		opt = this._options,
		rmap = this._resizeMap,
		colDef,
		key,
		i = 0,
		offset = this._resizeHandleOffset = Math.floor(opt['scrollerLeft'] - opt['resizeHandleWidth'] / 2),
		vmid = this.grid['view'].mid,
		handle = opt['classResizeHandle'],
		head = this._head;

	for (; i < len; i++) {
		colDef = colDefs[i];
		if (colDef['resizable']) {
			key = colDef['key'];
			rmap[key] = $("<div class='" + handle + "' key='" + key +
				"' ondblclick='JGM.m.ViewportManager." + vmid + "._autoColWidth(\"" + key + "\")' style='left:" +
				(offset + lefts[i + 1]) + "px' title='" +
				colDef['name'] + " 컬럼의 폭을 조절합니다.'>").appendTo(head);
		}
	}
};

}());
