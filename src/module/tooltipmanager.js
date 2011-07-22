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

 goog.require('JGM.core.BaseModule');

 goog.provide('JGM.module.TooltipManager');

 goog.exportSymbol('JGM.module.TooltipManager', TooltipManager);

/**
TooltipManager 모듈. 컬럼 헤더들을 담당하는 모듈입니다.
@module TooltipManager

@requires JGM
@requires JGM.Grid
@requires JGM.EventManager
@requires JGM.Cell
 */

/**
TooltipManager 클래스. 컬럼 값에 따른 데이터 로우 정렬과 컬럼 좌우 위치 변경 등 컬럼
관련 기능들을 지원합니다.

@class {public TooltipManager} JGM.TooltipManager

@author 조준호
@since 1.0.0
@version 1.0.0
*/

/**
TooltipManager 컨스트럭터 입니다.

@constructor {public TooltipManager} TooltipManager
@param {Object} args - TooltipManager 모듈 파라미터 오브젝트
@... {jQuery} args.container - TooltipManager 를 넣을 컨테이너 오브젝트
@... {JGM.Grid} args.grid - TooltipManager 를 포함하는 {@link JGM.Grid Grid} 인스턴스
@... {Object} args.options - TooltipManager 옵션 오브젝트
@returns {TooltipManager} TooltipManager 모듈 인스턴스를 리턴합니다.

@author 조준호
@since 1.0.0
@version 1.0.0
*/
function TooltipManager(args) {
	/**
	{@link JGM} 이 할당해주는 TooltipManager 모듈 고유 아이디입니다. 읽기 전용.

	@var {public final String} mid

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.mid = args.mid;

	/**
	TooltipManager 를 포함하는 {@link JGM.Grid Grid} 인스턴스.

	@var {public JGM.Grid} grid

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.grid = args.grid;
	
	/**
	그리드 툴팁을 관리하는 {@link JGM.TooltipManager TooltipManager} 인스턴스 입니다.

	@var {public JGM.TooltipManager} JGM.Grid.tooltip

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.grid.tooltip = this;

	this._ctnr = args.container;


	/**
	TooltipManager 모듈의 기본 옵션 값들을 정의합니다.

	@var {private Object} options

	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	var options = {
		/**
		툴팁 컨테이너에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-tooltip"</code>

		@var {private optional String} JGM.TooltipManager.options.classTooltip

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__classTooltip_a__:					"jgrid-tooltip",

		/**
		툴팁이 마우스를 실시간으로 따라다닐지를 정합니다. true 일 경우 따라다니고,
		false 일 경우 생성된 위치에 남아있습니다.<br>기본값:<code>true</code>

		@var {private optional Boolean} JGM.TooltipManager.options.tooltipSyncEnabled

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__tooltipSyncEnabled_b__:			true,

		/**
		툴팁의 마우스 포인터로부터의 우측 offset 을 정합니다.<br>기본값:<code>0</code>

		@var {private optional int} JGM.TooltipManager.options.offsetX

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__offsetX_c__:					0,

		/**
		툴팁의 마우스 포인터로부터의 아래 방향 offset 을 정합니다.<br>기본값:<code>18</code>

		@var {private optional int} JGM.TooltipManager.options.offsetY

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__offsetY_d__:					18,

		/**
		툴팁의 배경을 설정합니다. <br>기본값:<code>"#F5F5F5"</code>

		@var {private optional String} JGM.TooltipManager.options.background

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__background_e__:					"#F5F5F5",

		/**
		툴팁의 border 를 설정합니다. <br>기본값:<code>"1px solid #868686"</code>

		@var {private optional String} JGM.TooltipManager.options.border

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__border_f__:						"1px solid #868686",

		/**
		툴팁의 padding 을 설정합니다. <br>기본값:<code>"2px 10px"</code>

		@var {private optional String} JGM.TooltipManager.options.padding

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__padding_g__:					"2px 10px",

		/**
		툴팁의 폰트를 설정합니다. <br>기본값:<code>"14px Arial,Helvetica,sans-serif"</code>

		@var {private optional String} JGM.TooltipManager.options.font

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__font_h__:						"14px Arial,Helvetica,sans-serif",

		/**
		툴팁의 글자색을 설정합니다. <br>기본값:<code>"#333"</code>

		@var {private optional String} JGM.TooltipManager.options.color

		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		__color_i__:				"#333"
	};

	this._options = JGM.__extend_e__(options, args.options, {
		classTooltip:"__classTooltip_a__",
		tooltipSyncEnabled:"__tooltipSyncEnabled_b__",
		offsetX:"__offsetX_c__",
		offsetY:"__offsetY_d__",
		background:"__background_e__",
		border:"__border_f__",
		padding:"__padding_g__",
		font:"__font_h__",
		color:"__color_i__"
	});
	
	this.__tooltip_a__;
	this.__init();
}

TooltipManager.getInstance = function(args) {
	return new TooltipManager(args);
};

var prototype = TooltipManager.prototype;

prototype.__init = function() {
	this.grid.event.bind({
		onCreateCss: this.__onCreateCss_V__,
		onDestroy: this.__destroy_aA__,
		mouseoutCanvas: this.__mouseoutCanvas_bb__,
		mousemoveCanvas: this.__mousemoveCanvas_bc__,
		mouseoverCanvas: this.__mouseoverCanvas_bd__
	}, this);
};

prototype.__destroy_aA__ = function() {
	JGM._destroy(this, {
		name: "TooltipManager",
		path: "tooltip",
		"$": "__tooltip_a__",
		property: "_ctnr",
		map: "_options"
	});
};

prototype.__onCreateCss_V__ = function() {
	var gridId = "#" + this.grid.mid + " .",
		opt = this._options,
		rules = [];

	rules.push(gridId + opt.__classTooltip_a__ + "{position:absolute;z-index:10;background:" + opt.__background_e__ + ";border:" + opt.__border_f__ + ";padding:" + opt.__padding_g__ + ";color:" + opt.__color_i__ + ";font:" + opt.__font_h__ + "}");

	return rules.join("");
};

prototype.__mouseoutCanvas_bb__ = function(e, cell) {
	if (Util.isNotNull(this.__tooltip_a__)) {
		this._ctnr[0].removeChild(this.__tooltip_a__[0]);
		delete this.__tooltip_a__;
	}
};

prototype.__mousemoveCanvas_bc__ = function(e, cell) {
	var opt = this._options;
	if (opt.__tooltipSyncEnabled_b__ && Util.isNotNull(this.__tooltip_a__)) {
		this.__tooltip_a__.css({left:(e.pageX + opt.__offsetX_c__) + "px", top:(e.pageY + opt.__offsetY_d__) + "px"});
	}
};

prototype.__mouseoverCanvas_bd__ = function(e, cell) {
	if (cell.getColDef().tooltipEnabled) {
		if (Util.isNull(this.__tooltip_a__)) {
			var opt = this._options,
				temp = document.createElement("div");
			temp.innerHTML = "<div class='" + opt.__classTooltip_a__ + "' style='left:" + (e.pageX + opt.__offsetX_c__) + "px;top:" + (e.pageY + opt.__offsetY_d__) + "px'>" + cell.getValue() + "</div>";
			this.__tooltip_a__ = $(temp.firstChild);
			this._ctnr[0].appendChild(this.__tooltip_a__[0]);
		}
	}
};

JGM._add("TooltipManager", TooltipManager);
}());
