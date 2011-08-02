goog.require('jx.util');
goog.require('jx.grid');
goog.require('jx.grid.BaseModule');
goog.require('jx.grid.Grid');
goog.require('jx.data.DataManager');
goog.provide('jx.grid.TooltipManager');
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
 goog.exportSymbol('jx.grid.TooltipManager', TooltipManager);
 JGM._add("TooltipManager", TooltipManager);
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
@class {TooltipManager} JGM.TooltipManager
@author 조준호
@since 1.0.0
@version 1.0.0
*/
/**
TooltipManager 컨스트럭터 입니다.
@constructor {TooltipManager} TooltipManager
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
	@var {string} mid
	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.mid = args.mid;
	/**
	TooltipManager 를 포함하는 {@link JGM.Grid Grid} 인스턴스.
	@var {JGM.Grid} grid
	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.grid = args.grid;
	
	/**
	그리드 툴팁을 관리하는 {@link JGM.TooltipManager TooltipManager} 인스턴스 입니다.
	@var {JGM.TooltipManager} JGM.Grid.tooltip
	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	this.grid['tooltip'] = this;
	this._ctnr = args['container'];
	/**
	TooltipManager 모듈의 기본 옵션 값들을 정의합니다.
	@type {Object} options
	@private
	@author 조준호
	@since 1.0.0
	@version 1.0.0
	*/
	var options = {
		/**
		툴팁 컨테이너에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-tooltip"</code>
		@type {string=} JGM.TooltipManager.options.classTooltip
		@private
		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'classTooltip':					"jgrid-tooltip",
		/**
		툴팁이 마우스를 실시간으로 따라다닐지를 정합니다. true 일 경우 따라다니고,
		false 일 경우 생성된 위치에 남아있습니다.<br>기본값:<code>true</code>
		@type {boolean=} JGM.TooltipManager.options.tooltipSyncEnabled
		@private
		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'tooltipSyncEnabled':			true,
		/**
		툴팁의 마우스 포인터로부터의 우측 offset 을 정합니다.<br>기본값:<code>0</code>
		@type {number=} JGM.TooltipManager.options.offsetX
		@private
		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'offsetX':					0,
		/**
		툴팁의 마우스 포인터로부터의 아래 방향 offset 을 정합니다.<br>기본값:<code>18</code>
		@type {number=} JGM.TooltipManager.options.offsetY
		@private
		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'offsetY':					18,
		/**
		툴팁의 배경을 설정합니다. <br>기본값:<code>"#F5F5F5"</code>
		@type {string=} JGM.TooltipManager.options.background
		@private
		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'background':					"#F5F5F5",
		/**
		툴팁의 border 를 설정합니다. <br>기본값:<code>"1px solid #868686"</code>
		@type {string=} JGM.TooltipManager.options.border
		@private
		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'border':						"1px solid #868686",
		/**
		툴팁의 padding 을 설정합니다. <br>기본값:<code>"2px 10px"</code>
		@type {string=} JGM.TooltipManager.options.padding
		@private
		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'padding':					"2px 10px",
		/**
		툴팁의 폰트를 설정합니다. <br>기본값:<code>"14px Arial,Helvetica,sans-serif"</code>
		@type {string=} JGM.TooltipManager.options.font
		@private
		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'font':						"14px Arial,Helvetica,sans-serif",
		/**
		툴팁의 글자색을 설정합니다. <br>기본값:<code>"#333"</code>
		@type {string=} JGM.TooltipManager.options.color
		@private
		@author 조준호
		@since 1.0.0
		@version 1.0.0
		*/
		'color':				"#333"
	};
	this._options = JGM._extend(options, args['options']);
	
	this._tooltip;
	this.__init();
}
TooltipManager.getInstance = function(args) {
	return new TooltipManager(args);
};
var prototype = TooltipManager.prototype;
prototype.__init = function() {
	this.grid['event'].bind({
		'onCreateCss': this._onCreateCss,
		'onDestroy': this._destroy,
		'mouseoutCanvas': this._mouseoutCanvas,
		'mousemoveCanvas': this._mousemoveCanvas,
		'mouseoverCanvas': this._mouseoverCanvas
	}, this);
};
prototype._destroy = function() {
	JGM._destroy(this, {
		name: "TooltipManager",
		path: "tooltip",
		"$": "tooltip",
		property: "ctnr",
		map: "options"
	});
};
prototype._onCreateCss = function() {
	var gridId = "#" + this.grid['mid'] + " .",
		opt = this._options,
		rules = [];
	rules.push(gridId + opt['classTooltip'] + "{position:absolute;z-index:10;background:" + opt['background'] + ";border:" + opt['border'] + ";padding:" + opt['padding'] + ";color:" + opt['color'] + ";font:" + opt['font'] + "}");
	return rules.join("");
};
prototype._mouseoutCanvas = function(e, cell) {
	if (Util.isNotNull(this._tooltip)) {
		this._ctnr[0].removeChild(this._tooltip[0]);
		delete this._tooltip;
	}
};
prototype._mousemoveCanvas = function(e, cell) {
	var opt = this._options;
	if (opt['tooltipSyncEnabled'] && Util.isNotNull(this._tooltip)) {
		this._tooltip.css({'left':(e.pageX + opt['offsetX']) + "px", 'top':(e.pageY + opt['offsetY']) + "px"});
	}
};
prototype._mouseoverCanvas = function(e, cell) {
	if (cell.getColDef().tooltipEnabled) {
		if (Util.isNull(this._tooltip)) {
			var opt = this._options,
				temp = document.createElement("div");
			temp.innerHTML = "<div class='" + opt['classTooltip'] + "' style='left:" + (e.pageX + opt['offsetX']) + "px;top:" + (e.pageY + opt['offsetY']) + "px'>" + cell.getValue() + "</div>";
			this._tooltip = $(temp.firstChild);
			this._ctnr[0].appendChild(this._tooltip[0]);
		}
	}
};
}());
