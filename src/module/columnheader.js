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

@class {public ColHeader} JGM.ColHeader

@author 조준호
@since 1.0.0
@version 1.2.1
*/

/**
ColHeader 컨스트럭터 입니다.

@constructor {public ColHeader} ColHeader
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

	@var {public final String} mid

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.mid = args.mid;

	this._ctnr = args.container;

	this.__mask_a__;

	this.__head_c__;

	/**
	ColHeader 를 포함하는 {@link JGM.Grid Grid} 인스턴스.

	@var {public JGM.Grid} grid

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.grid = args.grid;
	
	/**
	그리드 컬럼 헤더를 관리하는 {@link JGM.ColHeader ColHeader} 인스턴스 입니다.

	@var {public JGM.ColHeader} JGM.Grid.header

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.grid.header = this;

	/**
	ColHeader 모듈의 기본 옵션 값들을 정의합니다.

	@var {private Object} options

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	var options = {
		/**
		컬럼 순서 변경 가능 여부를 정합니다. <br>기본값:<code>false</code>

		@var {private optional Boolean} JGM.ColHeader.options.reorderEnabled

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__reorderEnabled_a__: false,

		/**
		컬럼 순서 변경을 할 경우, 컬럼 셀들이 컬럼 헤더와 함께
		위치가 변경될지를 정합니다. <br>기본값:<code>true</code>

		@var {private optional Boolean} JGM.ColHeader.options.reorderSyncEnabled

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__reorderSyncEnabled_b__: true,

		/**
		컬럼 헤더의 기본 배경을 설정합니다. <br>기본값:<code>"url(" + imageUrl + "column-headers-bg.png) repeat-x scroll center"</code>

		@var {private optional String} JGM.ColHeader.options.background

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__background_c__: "url(" + this.grid._options.imageUrl + "column-headers-bg.png) repeat-x scroll center",

		/**
		컬럼 헤더에 마우스가 오버되었을 때의 배경을 설정합니다. <br>기본값:<code>"url(" + imageUrl + "column-headers-over-bg.png) repeat-x scroll center"</code>

		@var {private optional String} JGM.ColHeader.options.backgroundHover

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__backgroundHover_d__: "url(" + this.grid._options.imageUrl + "column-headers-over-bg.png) repeat-x scroll center",

		/**
		컬럼 순서 변경 시에 컬럼 헤더의 빈 자리의 배경을 설정합니다. <br>기본값:<code>"#646464"</code>

		@var {private optional String} JGM.ColHeader.options.backgroundPlaceholder

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__backgroundPlaceholder_e__: "#646464",

		/**
		컬럼 로우 정렬 기본 상태 표시 아이콘 배경입니다. <br>기본값:<code>imageUrl + "sort.png"</code>

		@var {private optional String} JGM.ColHeader.options.sortBackground

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__sortBackground_f__: this.grid._options.imageUrl + "sort.png",

		/**
		컬럼 로우 정렬 상태 표시 아이콘의 오른쪽 마진 픽셀입니다. <br>기본값:<code>4</code>

		@var {private optional int} JGM.ColHeader.options.sortRight

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__sortRight_g__: 4,

		/**
		컬럼 로우 정렬 상태 표시 아이콘의 폭 픽셀입니다. <br>기본값:<code>7</code>

		@var {private optional int} JGM.ColHeader.options.sortWidth

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__sortWidth_h__: 7,

		/**
		컬럼 로우 정렬 오름차순 상태 표시 아이콘 배경입니다. <br>기본값:<code>imageUrl + "sort-asc.png"</code>

		@var {private optional String} JGM.ColHeader.options.sortBackgroundAsc

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__sortBackgroundAsc_i__: this.grid._options.imageUrl + "sort-asc.png",

		/**
		컬럼 로우 정렬 내림차순 상태 표시 아이콘 배경입니다. <br>기본값:<code>imageUrl + "sort-desc.png"</code>

		@var {private optional String} JGM.ColHeader.options.sortBackgroundDesc

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__sortBackgroundDesc_j__: this.grid._options.imageUrl + "sort-desc.png",

		/**
		컬럼 헤더의 폰트 스타일입니다. <br>기본값:<code>"15px Arial,Helvetica,sans-serif"</code>

		@var {private optional String} JGM.ColHeader.options.font

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__font_k__: "15px Arial,Helvetica,sans-serif",

		/**
		컬럼 헤더의 높이 픽셀 입니다. <br>기본값:<code>21</code>

		@var {private optional int} JGM.ColHeader.options.height

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__height_l__: 21,

		/**
		컬럼 헤더 border 의 두께 입니다. <br>기본값:<code>1</code>

		@var {private optional int} JGM.ColHeader.options.borderThickness

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__borderThickness_n__: 1,

		/**
		컬럼 헤더 border 의 스타일 입니다. <br>기본값:<code>"solid #909192"</code>

		@var {private optional String} JGM.ColHeader.options.border

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__border_o__: "solid #909192",

		/**
		컬럼 헤더 컨테이너 마스크에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-header-mask"</code>

		@var {private optional String} JGM.ColHeader.options.classHeaderMask

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__classHeaderMask_p__: "jgrid-header-mask",

		/**
		컬럼 헤더 컨테이너에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-header"</code>

		@var {private optional String} JGM.ColHeader.options.classHeader

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__classHeader_q__: "jgrid-header",

		/**
		각 컬럼 헤더에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-colheader"</code>

		@var {private optional String} JGM.ColHeader.options.classColHeader

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__classColHeader_r__: "jgrid-colheader",

		/**
		컬럼 헤더 순서 변경시 변경되는 컬럼에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-colheader-active"</code>

		@var {private optional String} JGM.ColHeader.options.classColHeaderActive

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__classColHeaderActive_s__: "jgrid-colheader-active",

		/**
		컬럼 헤더 순서 변경시 변경되는 컬럼의 빈자리에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-colheader-placeholder"</code>

		@var {private optional String} JGM.ColHeader.options.classColHeaderPlaceholder

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__classColHeaderPlaceholder_t__: "jgrid-colheader-placeholder",

		/**
		interactive 한 컬럼 헤더들에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"interactive"</code>

		@var {private optional String} JGM.ColHeader.options.classInteractive

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__classInteractive_u__: "interactive",

		/**
		현재 로우 정렬 중인 컬럼 헤더에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-colheader-sorted"</code>

		@var {private optional String} JGM.ColHeader.options.classColHeaderSorted

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__classColHeaderSorted_v__: "jgrid-colheader-sorted",

		/**
		컬럼 로우 정렬 상태 표시 아이콘에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-sort"</code>

		@var {private optional String} JGM.ColHeader.options.classSort

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__classSort_w__: "jgrid-sort",

		/**
		컬럼 로우 정렬 오름차순 상태 표시 아이콘에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-sort-asc"</code>

		@var {private optional String} JGM.ColHeader.options.classSortAsc

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__classSortAsc_x__: "jgrid-sort-asc",

		/**
		컬럼 로우 정렬 내림차순 상태 표시 아이콘에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-sort-desc"</code>

		@var {private optional String} JGM.ColHeader.options.classSortDesc

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__classSortDesc_y__: "jgrid-sort-desc",

		/**
		컬럼 폭 조절 핸들의 CSS 클래스 입니다.<br>기본값:<code>"jgrid-resize-handle"</code>

		@var {private optional String} JGM.ColHeader.options.classResizeHandle

		@author 조준호
		@since 1.1.2
		@version 1.1.2
		*/
		__classResizeHandle_z__: "jgrid-resize-handle",

		/**
		컬럼 폭 조절 핸들의 폭입니다. <br>기본값:<code>11</code>

		@var {private optional int} JGM.ColHeader.options.resizeHandleWidth

		@author 조준호
		@since 1.1.2
		@version 1.1.2
		*/
		__resizeHandleWidth_A__: 11,

		/**
		컬럼 헤더 컨테이너 마스크에 적용되는 CSS style 입니다.<br>
		주의할 점: 이 옵션에 입력된 style 이 적용되었을때 DOM 의 크기가 변하면 그리드의 내부적인 크기 계산에 오류가 생깁니다.
		꼭, 크기에 영향이 없는 style 변경을 할때만 사용하세요.
		<br>기본값:<code>""</code>

		@var {private optional String} JGM.ColHeader.options.style

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__style_B__: "",

		/**
		컬럼 헤더들에 공통적으로 CSS style 입니다.<br>
		주의할 점: 이 옵션에 입력된 style 이 적용되었을때 DOM 의 크기가 변하면 그리드의 내부적인 크기 계산에 오류가 생깁니다.
		꼭, 크기에 영향이 없는 style 변경을 할때만 사용하세요.
		<br>기본값:<code>""</code>

		@var {private optional String} JGM.ColHeader.options.headerStyle

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__headerStyle_C__: "",

		/**
		스크롤러의 시작 style.left
		<br>기본값:<code>10000</code>

		@var {private optional int} JGM.ColHeader.options.scrollerLeft

		@author 조준호
		@since 1.1.7
		@version 1.1.7
		*/
		__scrollerLeft_D__: 10000,
		
		/**
		스크롤러의 width
		<br>기본값:<code>100000</code>

		@var {private optional int} JGM.ColHeader.options.scrollerWidth

		@author 조준호
		@since 1.1.7
		@version 1.1.7
		*/
		__scrollerWidth_E__: 100000,
		
		/**
		컬럼 리사이즈를 할 때 생기는 가이드에 적용되는 CSS 클래스 입니다.
		<br>기본값:<code>"resize-guide"</code>

		@var {private optional String} JGM.ColHeader.options.classResizeGuide

		@author 조준호
		@since 1.1.7
		@version 1.1.7
		*/
		__classResizeGuide_F__: "resize-guide",
		
		/**
		컬럼 리사이즈를 할 때 생기는 가이드의 폭 픽셀입니다.
		<br>기본값:<code>1</code>

		@var {private optional int} JGM.ColHeader.options.resizeGuideWidth

		@author 조준호
		@since 1.1.7
		@version 1.1.7
		*/
		__resizeGuideWidth_G__: 1,
		
		/**
		컬럼 리사이즈를 할 때 생기는 가이드의 배경 style 입니다.
		<br>기본값:<code>"black;filter:alpha(opacity=40);opacity:0.4"</code>

		@var {private optional String} JGM.ColHeader.options.resizeBackground

		@author 조준호
		@since 1.1.7
		@version 1.1.7
		*/
		__resizeBackground_H__: "black;filter:alpha(opacity=40);opacity:0.4",
		
		/**
		컬럼 리사이즈를 할 때 컬럼 셀들을 동시에 사이즈 변경할지 여부입니다.
		<br>기본값:<code>false</code>

		@var {private optional Boolean} JGM.ColHeader.options.syncResize

		@author 조준호
		@since 1.1.7
		@version 1.1.7
		*/
		__syncResize_I__: false,
		
		/**
		컬럼 리사이즈 핸들의 배경 style 입니다.
		<br>기본값:<code>"black;filter:alpha(opacity=5);opacity:0.05"</code>

		@var {private optional String} JGM.ColHeader.options.resizeHandleBackground

		@author 조준호
		@since 1.2.1
		@version 1.2.1
		*/
		__resizeHandleBackground_J__: "black;filter:alpha(opacity=5);opacity:0.05"
	};

	this._options = JGM.__extend_e__(options, args.options, {
		reorderEnabled:"__reorderEnabled_a__",
		reorderSyncEnabled:"__reorderSyncEnabled_b__",
		background:"__background_c__",
		backgroundHover:"__backgroundHover_d__",
		backgroundPlaceholder:"__backgroundPlaceholder_e__",
		sortBackground:"__sortBackground_f__",
		sortRight:"__sortRight_g__",
		sortWidth:"__sortWidth_h__",
		sortBackgroundAsc:"__sortBackgroundAsc_i__",
		sortBackgroundDesc:"__sortBackgroundDesc_j__",
		font:"__font_k__",
		height:"__height_l__",
		borderThickness:"__borderThickness_n__",
		border:"__border_o__",
		classHeaderMask:"__classHeaderMask_p__",
		classHeader:"__classHeader_q__",
		classColHeader:"__classColHeader_r__",
		classColHeaderActive:"__classColHeaderActive_s__",
		classColHeaderPlaceholder:"__classColHeaderPlaceholder_t__",
		classInteractive:"__classInteractive_u__",
		classColHeaderSorted:"__classColHeaderSorted_v__",
		classSort:"__classSort_w__",
		classSortAsc:"__classSortAsc_x__",
		classSortDesc:"__classSortDesc_y__",
		classResizeHandle:"__classResizeHandle_z__",
		resizeHandleWidth:"__resizeHandleWidth_A__",
		style:"__style_B__",
		headerStyle:"__headerStyle_C__",
		scrollerLeft:"__scrollerLeft_D__",
		scrollerWidth:"__scrollerWidth_E__",
		classResizeGuide:"__classResizeGuide_F__",
		resizeGuideWidth:"__resizeGuideWidth_G__",
		resizeBackground:"__resizeBackground_H__",
		syncResize:"__syncResize_I__",
		resizeHandleBackground:"__resizeHandleBackground_J__"
	});

	this.__map_d__ = {};
	
	this.__resizeKey_n__;
	this.__resizeInitX_o__;
	this.__resizeHandleInitX_p__;
	this.__resizeInitWidth_q__;
	this.__resizeMap_r__ = {};
	this.__resizeInitColWidth_v__;
	this.__resizeGuide_w__;
	this.__resizeHandleOffset_D__;

	this.__init();
}

ColHeader.getInstance = function(args) {
	return new ColHeader(args);
};

var prototype = ColHeader.prototype;

prototype.__init = function() {
	this.__mask_a__ =
		$("<div class='" + this._options.__classHeaderMask_p__ + "'>")
		.prependTo(this._ctnr);

	this.__head_c__ =
		$("<div class='" + this._options.__classHeader_q__ + "'>")
		.appendTo(this.__mask_a__);

	ColHeader.__disableSel_e__(this.__head_c__);

	this.bindEvents();
};

prototype.bindEvents = function() {
	var events,
		colDefs = this.grid.colDefMgr.get(),
		len = colDefs.length,
		i = 0;

	events = {
		onRenderModules: this.__onRenderModules_aE__,
		onAfterRenderModules: this.__onAfterRenderModules_aF__,
		onCreateCss: this.__onCreateCss_V__,
		onDestroy: this.__destroy_aA__,
		mousedown: this._mousedown,
		mouseup: this._mouseup,
		dragmove: this.__dragmove_H__,
		onScrollViewportH: this.__onScrollViewportH_bo__,
		onScrollViewportV: this.__onScrollViewportV_C__,
		onChangeSorter: this.__onChangeSorter_l__,
		click: this._click,
		onResizeCol: this.__setWidthByKey_z__
	};

	for (; i < len; i++) {
		if (Util.isNotNull(colDefs[i].sorter)) {
			events["clickHeader_" + colDefs[i].key] = this.__sort_i__;
		}
	}

	this.grid.event.bind(events, this);
};

prototype.__destroy_aA__ = function() {	
	if (this.__head_c__.sortable) {
		this.__head_c__.sortable("destroy");
	}
		
	this.__destroyResizeHandles_t__();
	
	JGM._destroy(this, {
		name: "ColHeader",
		path: "header",
		"$": "__resizeGuide_w__ __mask_a__ __head_c__",
		property: "_ctnr __resizeMap_r__",
		map: "__map_d__ _options"
	});
};

prototype.__onCreateCss_V__ = function() {
	var gridId = "#" + this.grid.mid + " .",
		o = this._options,
		border = o.__borderThickness_n__ + "px " + o.__border_o__,
		rules = [],
		colDefs = this.grid.colDefMgr.get(),
		len = colDefs.length,
		i = 0;

	rules.push(gridId + o.__classHeaderMask_p__ + "{position:relative;overflow:hidden;width:100%;font:" + o.__font_k__ + ";background:" + o.__background_c__ + ";border-bottom:" + border + ";" + o.__style_B__ + "}");
	rules.push(gridId + o.__classHeader_q__ + "{position:relative;overflow:hidden;white-space:nowrap;cursor:default;left:" + (-o.__scrollerLeft_D__) + "px;width:" + o.__scrollerWidth_E__ + "px;line-height:" + o.__height_l__ + "px}");
	rules.push(gridId + o.__classColHeader_r__ + "{position:relative;overflow:hidden;float:left;text-overflow:ellipsis;text-align:center;height:" + o.__height_l__ + "px;left:" + (o.__scrollerLeft_D__ - this.grid.view.getScrollLeft()) + "px;border-right:" + border + ";" + o.__headerStyle_C__ + "}");
	rules.push(gridId + o.__classColHeader_r__ + "." + o.__classInteractive_u__ + ":hover, " + gridId + o.__classColHeaderActive_s__ + "{background:" + o.__backgroundHover_d__ + "}");
	rules.push(gridId + o.__classColHeaderActive_s__ + "{border-left:" + border + "}");
	rules.push(gridId + o.__classColHeader_r__ + "." + o.__classColHeaderPlaceholder_t__ + "{background:" + o.__backgroundPlaceholder_e__ + "!important}");
	rules.push(gridId + o.__classSort_w__ + "{position:absolute;height:" + o.__height_l__ + "px;right:" + o.__sortRight_g__ + "px;width:" + o.__sortWidth_h__ + "px;background:url(" + o.__sortBackground_f__ + ") no-repeat center transparent}");
	rules.push(gridId + o.__classSortAsc_x__ + "{background:url(" + o.__sortBackgroundAsc_i__ + ") no-repeat center transparent}");
	rules.push(gridId + o.__classSortDesc_y__ + "{background:url(" + o.__sortBackgroundDesc_j__ + ") no-repeat center transparent}");
	rules.push(gridId + o.__classResizeHandle_z__ + "{z-index:10;background:" + o.__resizeHandleBackground_J__ + ";cursor:e-resize;position:absolute;height:" + o.__height_l__ + "px;width:" + o.__resizeHandleWidth_A__ + "px}");
	rules.push(gridId + o.__classResizeGuide_F__ + "{z-index:10;position:absolute;background:" + o.__resizeBackground_H__ + ";width:" + o.__resizeGuideWidth_G__ + "px}");
	
	for (; i < len; i++) {
		rules.push(gridId + o.__classColHeader_r__ + "#" + this.mid + "h" + colDefs[i].key + "{" + colDefs[i].headerStyle + "}");
	}
	
	return rules.join("");
};

prototype.__widthPlus_f__ = function() {
	return this._options.__borderThickness_n__;
};

prototype.__onScrollViewportH_bo__ = function(scrollLeft) {
	this.__head_c__[0].style.left = (-this._options.__scrollerLeft_D__ - scrollLeft) + "px";
};

prototype.__onRenderModules_aE__ = function() {
	var colDefs = this.grid.colDefMgr.get(),
		len = colDefs.length,
		i = 0,
		colDef,
		headers = [];

	for (; i < len; i++) {
		if (!(colDef = colDefs[i]).hidden) {
			this.__render_g__(headers, colDef, i);
		}
	}
	this.__head_c__[0].innerHTML = headers.join("");

	/**
	ColHeader 의 렌더링이 완료되었을 때 트리거되는 이벤트 입니다.
	@event {Event} onRenderHeadersComplete

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.grid.event.trigger("onRenderHeadersComplete");
};

prototype.__onAfterRenderModules_aF__ = function() {
	if (this._options.__reorderEnabled_a__) {
		this.__initReorder_k__();
	}
	
	this.__initResizeHandles_u__();
	
	this.__resizeGuide_w__ = $("<div class='" + this._options.__classResizeGuide_F__ + "'>")
		.appendTo(this.grid.view.__mask_a__);
	this.__resizeGuide_w__[0].style.top = "0px";
	this.__resizeGuide_w__[0].style.height = "0px";
};

prototype.__render_g__ = function(header, colDef, i) {
	if (Util.isNull(colDef)) {
		return;
	}
	var name = (colDef.noName ? "" : colDef.name || colDef.key),
		widthPlus = this.__widthPlus_f__();

	header.push("<div id='" + this.mid + "h" + colDef.key + "' class='" + this._options.__classColHeader_r__ + " " + (this._options.__reorderEnabled_a__ || Util.isNotNull(colDef.sorter) ? " " + this._options.__classInteractive_u__ : "") +
		"' " + (colDef.noTitle ? "" : "title='" + (colDef.title || name) + "' ") + "style='width:" + (this.grid.view.__getColOuterWidth_AK__(i) - widthPlus) + "px;' colKey='" + colDef.key + "'>");

	/**
	ColHeader 렌더링 시에 발생되는 이벤트로 컬럼 이름 앞에 넣을 모듈 들을 렌더링하기 위해 트리거 됩니다.
	@event {Event} onRenderHeader_COLKEY_prepend
	@param {String[]} html - 컬럼 헤더 렌더링 스트링들을 가진 어레이

	@author 조준호
	@since 1.0.0
	@version 1.1.7
	*/
	this.grid.event.trigger("onRenderHeader_" + colDef.key + "_prepend", [header]);

	header.push(name);

	/**
	ColHeader 렌더링 시에 발생되는 이벤트로 컬럼 이름 뒤에 넣을 모듈 들을 렌더링하기 위해 트리거 됩니다.
	@event {Event} onRenderHeader_COLKEY_append
	@param {String[]} html - 컬럼 헤더 렌더링 스트링들을 가진 어레이

	@author 조준호
	@since 1.0.0
	@version 1.1.7
	*/
	this.grid.event.trigger("onRenderHeader_" + colDef.key + "_append", [header]);

	if (Util.isNotNull(colDef.sorter)) {
		header.push("<span class='" + this._options.__classSort_w__ + "'></span>");
	}

	header.push("</div>");
};

ColHeader.__disableSel_e__ = function(target) {
	Util$.safe$(target)
		.attr("unselectable", 'on')
		.css('MozUserSelect', 'none')
		.bind('selectstart.ui', function() { return false; });
};

/**
주어진 key 에 해당하는 컬럼 헤더 jQuery 오브젝트를 리턴합니다.

@function {public jQuery} get
@param {String} key - 컬럼의 key
@returns {jQuery} 주어진 key 에 해당하는 컬럼 헤더 jQuery 오브젝트

@author 조준호
@since 1.0.0
@version 1.0.0
*/
prototype.get = function(key) {
	if (this.__map_d__.hasOwnProperty(key)) {
		return this.__map_d__[key];
	}

	var node = document.getElementById(this.mid + "h" + key);
	if (Util.isNull(node)) {
		return $([]);
	}

	return (this.__map_d__[key] = $(node));
};

// 0 --> remove all, 1 --> asc, 2 --> desc
prototype.__updateIndicator_m__ = function(key, status) {
	var colHeader = this.get(key);
	if (colHeader.length === 0) {
		return;
	}

	var opt = this._options,
		indicator = colHeader.find("." + opt.__classSort_w__);
	if (status === 0) {
		colHeader.removeClass(opt.__classColHeaderSorted_v__);
		indicator.removeClass(opt.__classSortAsc_x__ + " " + opt.__classSortDesc_y__);
	}
	else {
		colHeader.addClass(opt.__classColHeaderSorted_v__);
		if (status === 1) {
			indicator.addClass(opt.__classSortAsc_x__).removeClass(opt.__classSortDesc_y__);
		}
		else if (status === 2) {
			indicator.addClass(opt.__classSortDesc_y__).removeClass(opt.__classSortAsc_x__);
		}
	}
};

prototype.__closest_h__ = function(obj) {
	return Util$.safe$(obj).closest("div." + this._options.__classColHeader_r__, this.__head_c__);
};

prototype.__getDef_y__ = function(header) {
	return this.grid.colDefMgr.getByKey(header.attr("colKey"));
};


prototype.__sort_i__ = function(e, colHeader, colDef) {
	var sorter = colDef.sorter;
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
	this.grid.event.trigger("onBeforeColSort_" + colDef.key + " onBeforeColSort");

	sorter.desc = (sorter.desc === false) ? true : false;

	//this.__setSortClass_j__();
	this.grid.dataMgr.refresh({sorter:sorter});

	// manually call this because IE cannot detect the scroll event
	this.grid.view.__scroll_As__();
};

prototype.__onChangeSorter_l__ = function(oldSorter, newSorter) {
	if (oldSorter === newSorter) {
		if (Util.isNotNull(newSorter)) {
			this.__updateIndicator_m__(newSorter.key, (newSorter.desc ? 2 : 1));
		}
		return;
	}
	if (Util.isNotNull(oldSorter)) {
		this.__updateIndicator_m__(oldSorter.key, 0);
	}
	if (Util.isNotNull(newSorter)) {
		this.__updateIndicator_m__(newSorter.key, (newSorter.desc ? 2 : 1));
	}
};

prototype.__initReorder_k__ = function() {
	var thisIns = this,
		opt = this._options,
		colDefMgr = this.grid.colDefMgr,
		container = this.__head_c__,
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
		items: "." + opt.__classColHeader_r__,
		axis: "x",
		forcePlaceholderSize: true,
		placeholder: opt.__classColHeaderPlaceholder_t__ + " " + opt.__classColHeader_r__,
		tolerance: "pointer",
		start: function(e, ui) {
			ui.item.addClass(thisIns._options.__classColHeaderActive_s__);
		},
		stop: function(e, ui) {
			ui.item.removeClass(thisIns._options.__classColHeaderActive_s__);
			thisIns.__syncResizeHandles_A__();
		},
		update: updatefn
	});

	if (opt.__reorderSyncEnabled_b__) {
		container.sortable("option", "change", updatefn);
	}
};

prototype.__getDx_s__ = function(e, colDef) {
	var dx = e.clientX - this.__resizeInitX_o__,
		minW = colDef.minW,
		maxW = Util.ifNull(colDef.maxW, Number.MAX_VALUE),
		initW = this.__resizeInitWidth_q__;

	if (initW + dx < minW) {
		dx = minW - initW;		
	}
	if (initW + dx > maxW) {
		dx = maxW - initW;
	}
	return dx;
};

prototype._click = function(e) {
	var colHeader = this.__closest_h__(e.target);
	if (colHeader.length === 0) {
		return;
	}

	var colDef = this.__getDef_y__(colHeader);

	/**
	ColHeader 에 click 이벤트가 발생할 경우 트리거되는 이벤트 입니다. 발생된 click 이벤트가
	valid 한지를 체크합니다.

	@event {Event} clickHeaderValid_COLKEY
	@param {jQuery.Event} e - jQuery 이벤트 오브젝트
	@param {jQuery} colHeader - 컬럼 헤더를 가진 jQuery 오브젝트
	@returns {Boolean} false 를 리턴할 경우 {@link clickHeader} 이벤트를 트리거하지
	않습니다.

	@author 조준호
	@since 1.0.0
	@version 1.1.7
	*/
	if (this.grid.event.triggerInvalid("clickHeaderValid_" + colDef.key, [e, colHeader, colDef])) {
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
	this.grid.event.trigger("clickHeader_" + colDef.key + " clickHeader", [e, colHeader, colDef]);
};

prototype._mousedown = function(e) {
	if (Util.hasTagAndClass(e.target, "DIV", this._options.__classResizeHandle_z__)) {
		this.__resizeKey_n__ = e.target.getAttribute("key");
		this.__resizeInitWidth_q__ = this.get(this.__resizeKey_n__)[0].clientWidth;
		this.__resizeInitColWidth_v__ = this.grid.colDefMgr.getByKey(this.__resizeKey_n__).width;
		this.__resizeInitX_o__ = e.clientX;
		this.__resizeHandleInitX_p__ = this.__resizeMap_r__[this.__resizeKey_n__][0].offsetLeft;
		this.__resizeGuide_w__[0].style.left = Math.floor(this.__resizeHandleInitX_p__ + (this._options.__resizeHandleWidth_A__ - this._options.__resizeGuideWidth_G__) / 2 - this._options.__scrollerLeft_D__) + "px";
		this.__resizeGuide_w__[0].style.height = this.grid.view.getInnerHeight() + "px";
		return;
	}
	
	var colHeader = this.__closest_h__(e.target);
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
	this.grid.event.trigger("mousedownHeader", [e, colHeader]);

	var colDef = this.__getDef_y__(colHeader);

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
	this.grid.event.trigger("mousedownHeader_" + colDef.key, [e, colHeader, colDef]);
};

prototype.__dragmove_H__ = function(e) {
	if (Util.isNull(this.__resizeKey_n__)) {
		return;
	}
		
	var dx = this.__getDx_s__(e, this.grid.colDefMgr.getByKey(this.__resizeKey_n__));
	
	if (Math.abs(dx) < 1) {
		return;
	}
	
	this.get(this.__resizeKey_n__)[0].style.width = this.__resizeInitWidth_q__ + dx + "px";
	this.__moveResizeHandles_B__(this.__resizeHandleInitX_p__ + dx - this.__resizeMap_r__[this.__resizeKey_n__][0].offsetLeft, this.grid.colDefMgr.getIdxByKey(this.__resizeKey_n__));
	this.__resizeGuide_w__[0].style.left = Math.floor(this.__resizeHandleInitX_p__ + dx + (this._options.__resizeHandleWidth_A__ - this._options.__resizeGuideWidth_G__) / 2 - this._options.__scrollerLeft_D__) + "px";
	
	if (this._options.__syncResize_I__) {
		this.grid.view.setWidthByKey(this.__resizeKey_n__, this.__resizeInitColWidth_v__ + dx);
	}
};

prototype._mouseup = function(e) {
	if (Util.isNull(this.__resizeKey_n__)) {
		return;
	}
	
	this.__resizeGuide_w__[0].style.height = "0px";
		
	var dx = this.__getDx_s__(e, this.grid.colDefMgr.getByKey(this.__resizeKey_n__));	
	
	if (Math.abs(dx) >= 1) {
		this.grid.view.setWidthByKey(this.__resizeKey_n__, this.__resizeInitColWidth_v__ + dx);
	}
	
	delete this.__resizeKey_n__;
	delete this.__resizeInitX_o__;
	delete this.__resizeHandleInitX_p__;
	delete this.__resizeInitWidth_q__;
	delete this.__resizeInitColWidth_v__;
};

prototype.__setWidthByKey_z__ = function(key, w, o) {
	this.get(key)[0].style.width = w + this.grid.view.__colWidthPlus_f__() - this.__widthPlus_f__() + "px";
	
	this.__syncResizeHandles_A__(this.grid.colDefMgr.getIdxByKey(key));
};

prototype.__syncResizeHandles_A__ = function(i) {
	if (Util.isNull(i)) {
		i = 0;
	}
		
	var lefts = this.grid.view.__getColLefts_Bh__(),
		colDefs = this.grid.colDefMgr.get(),
		len = colDefs.length,
		rmap = this.__resizeMap_r__,
		key;
		
	for (; i < len; i++) {
		key = colDefs[i].key;
		if (rmap.hasOwnProperty(key)) {
			rmap[key][0].style.left = (lefts[i + 1] + this.__resizeHandleOffset_D__) + "px";
		}
	}
};

prototype.__moveResizeHandles_B__ = function(dx, i) {
	if (Util.isNull(i)) {
		i = 0;
	}
		
	var colDefs = this.grid.colDefMgr.get(),
		len = colDefs.length,
		rmap = this.__resizeMap_r__,
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

prototype.__onScrollViewportV_C__ = function() {
	this.__resizeGuide_w__[0].style.top = this.grid.view.getScrollTop() + "px";
};

prototype.__destroyResizeHandles_t__ = function() {
	var rmap = this.__resizeMap_r__,
		key;

	for (key in rmap) {
		if (rmap.hasOwnProperty(key)) {
			rmap[key].remove();
			delete rmap[key];
		}
	}
	
	delete this.__resizeKey_n__;
	delete this.__resizeInitX_o__;
	delete this.__resizeHandleInitX_p__;
	delete this.__resizeInitWidth_q__;
	delete this.__resizeInitColWidth_v__;
};

prototype.__initResizeHandles_u__ = function() {
	var colDefs = this.grid.colDefMgr.get(),
		len = colDefs.length,
		lefts = this.grid.view.__getColLefts_Bh__(),
		opt = this._options,
		rmap = this.__resizeMap_r__,
		colDef,
		key,
		i = 0,
		offset = this.__resizeHandleOffset_D__ = Math.floor(opt.__scrollerLeft_D__ - opt.__resizeHandleWidth_A__ / 2),
		vmid = this.grid.view.mid,
		handle = opt.__classResizeHandle_z__,
		head = this.__head_c__;

	for (; i < len; i++) {
		colDef = colDefs[i];
		if (colDef.resizable) {
			key = colDef.key;
			rmap[key] = $("<div class='" + handle + "' key='" + key +
				"' ondblclick='JGM.m.ViewportManager." + vmid + ".__autoColWidth_Bg__(\"" + key + "\")' style='left:" +
				(offset + lefts[i + 1]) + "px' title='" +
				colDef.name + " 컬럼의 폭을 조절합니다.'>").appendTo(head);
		}
	}
};

JGM._add("ColHeader", ColHeader);
}());
