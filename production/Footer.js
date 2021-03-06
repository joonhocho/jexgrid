goog.require('engine_extension');
goog.require('jx.util');
goog.require('jx.grid');
goog.require('jx.grid.BaseModule');
goog.require('jx.grid.Grid');
goog.require('jx.grid.ColumnManager');
goog.require('jx.data.DataManager');
goog.provide('jx.grid.Footer');
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
(function() {'use strict';
	var JGM = goog.getObjectByName('jx.grid'),
	Util = goog.getObjectByName('jx.util'),
	BaseModule = goog.getObjectByName('jx.grid.BaseModule'),
	Grid = goog.getObjectByName('jx.grid.Grid'),
	element = Util.element;
goog.exportSymbol('jx.grid.Footer', Footer);
/**
  Footer 모듈. 컬럼 헤더들을 담당하는 모듈입니다.
  Footer 클래스. 컬럼 값에 따른 데이터 로우 정렬과 컬럼 좌우 위치 변경 등 컬럼
  관련 기능들을 지원합니다.
  @class {Footer} JGM.Footer
  @author 조준호
  @since 1.0.0
  @version 1.1.3
  */
/**
  Footer 컨스트럭터 입니다.
  @constructor {Footer} Footer
  @param {Object} args - Footer 모듈 파라미터 오브젝트
  @... {jQuery} args.container - Footer 를 넣을 컨테이너 오브젝트
  @... {jx.grid.Grid} args.grid - Footer 를 포함하는 {@link jx.grid.Grid} 인스턴스
  @... {Object} args.options - Footer 옵션 오브젝트
  @returns {Footer} Footer 모듈 인스턴스를 리턴합니다.
  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
function Footer(args) {
	/**
	  {@link JGM} 이 할당해주는 Footer 모듈 고유 아이디입니다. 읽기 전용.
	  @var {string} mid
	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	this.mid = args.mid;
	this._ctnr = args['container'];
	this._foot;
	/**
	  Footer 를 포함하는 {@link jx.grid.Grid} 인스턴스.
	  @var {jx.grid.Grid} grid
	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	this.grid = args.grid;
	/**
	  그리드 푸터를 관리하는 {@link JGM.Footer Footer} 인스턴스 입니다.
	  @var {JGM.Footer} jx.grid.Grid.footer
	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	this.grid['footer'] = this;
	/**
	  Footer 모듈의 기본 옵션 값들을 정의합니다.
	  @type {Object} options
	  @private
	  @author 조준호
	  @since 1.0.0
	  @version 1.0.0
	  */
	var options = {
		/**
		  Footer 의 셀에 공통적으로 적용되는 CSS 클래스 입니다.<br>기본값:<code>"footer-cell"</code>
		  @type {string=} JGM.Footer.options.classCell
		  @private
		  @author 조준호
		  @since 1.1.3
		  @version 1.1.3
		  */
		'classCell': "footer-cell",
		/**
		  Footer 의 배경입니다. <br>기본값:<code>"#F1F5FB"</code>
		  @type {string=} JGM.Footer.options.background
		  @private
		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'background': "#F1F5FB",
		/**
		  Footer 의 border 입니다. <br>기본값:<code>"0px solid #CCD9EA"</code>
		  @type {string=} JGM.Footer.options.border
		  @private
		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'border':		"0px solid #CCD9EA",
		/**
		  Footer 의 기본 글씨 색 입니다. <br>기본값:<code>"#000"</code>
		  @type {string=} JGM.Footer.options.color
		  @private
		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'color': "#000",
		/**
		  Footer 의 기본 폰트 크기 입니다. <br>기본값:<code>"13px"</code>
		  @type {string=} JGM.Footer.options.fontSize
		  @private
		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'fontSize': "13px",
		/**
		  Footer 의 기본 폰트 무게 입니다. <br>기본값:<code>"normal"</code>
		  @type {string=} JGM.Footer.options.fontWeight
		  @private
		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'fontWeight': "normal",
		/**
		  Footer 안 셀의 높이 픽셀 입니다. <br>기본값:<code>25</code>
		  @type {number=} JGM.Footer.options.cellHeight
		  @private
		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'cellHeight': 25,
		/**
		  Footer 안 셀의 right-padding 픽셀 입니다. <br>기본값:<code>30</code>
		  @type {number=} JGM.Footer.options.cellPadding
		  @private
		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'cellPadding': 40,
		/**
		  Footer 의 총 건수를 보여주는 셀의 템플릿 입니다.<br>기본값:<code>"현재 <span name='shownCount'></span> 건 / 총 <span name='totalCount'></span> 건"</code>
		  @type {string=} JGM.Footer.options.countTemplate
		  @private
		  @author 조준호
		  @since 1.1.3
		  @version 1.1.3
		  */
		'countTemplate': "현재 <span name='shownCount'></span> 건 / 총 <span name='totalCount'></span> 건",
		/**
		  Footer 의 title 의 글씨 색 입니다. <br>기본값:<code>"#5A6779"</code>
		  @type {string=} JGM.Footer.options.titleColor
		  @private
		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'titleColor': "#5A6779",
		/**
		  Footer 의 title 의 폰트 크기 입니다. <br>기본값:<code>"12px"</code>
		  @type {string=} JGM.Footer.options.titleFontSize
		  @private
		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'titleFontSize': "12px",
		/**
		  Footer 의 title 의 폰트 무게 입니다. <br>기본값:<code>"normal"</code>
		  @type {string=} JGM.Footer.options.titleFontWeight
		  @private
		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'titleFontWeight': "normal",
		/**
		  Footer 의 content 의 글씨 색 입니다. <br>기본값:<code>"#1E395B"</code>
		  @type {string=} JGM.Footer.options.contentColor
		  @private
		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'contentColor': "#1E395B",
		/**
		  Footer 의 content 의 폰트 크기 입니다. <br>기본값:<code>"12px"</code>
		  @type {string=} JGM.Footer.options.contentFontSize
		  @private
		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'contentFontSize': "12px",
		/**
		  Footer 의 content 의 폰트 무게 입니다. <br>기본값:<code>"normal"</code>
		  @type {string=} JGM.Footer.options.contentFontWeight
		  @private
		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'contentFontWeight': "normal",
		/**
		  Footer 컨테이너에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"jgrid-footer"</code>
		  @type {string=} JGM.Footer.options.classFooter
		  @private
		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'classFooter': "jgrid-footer",
		/**
		  Footer 의 title 에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"footer-title"</code>
		  @type {string=} JGM.Footer.options.classTitle
		  @private
		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'classTitle': "footer-title",
		/**
		  Footer 의 content 에 적용되는 CSS 클래스 입니다. <br>기본값:<code>"footer-content"</code>
		  @type {string=} JGM.Footer.options.classContent
		  @private
		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'classContent': "footer-content",
		/**
		  Footer 컨테이너에 적용되는 CSS style 입니다.<br>
		  주의할 점: 이 옵션에 입력된 style 이 적용되었을때 DOM 의 크기가 변하면 그리드의 내부적인 크기 계산에 오류가 생깁니다.
		  꼭, 크기에 영향이 없는 style 변경을 할때만 사용하세요.
		  <br>기본값:<code>""</code>
		  @type {string=} JGM.Footer.options.style
		  @private
		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'style': "",
		/**
		  Footer 셀에 공통적으로 적용되는 CSS style 입니다.<br>
		  주의할 점: 이 옵션에 입력된 style 이 적용되었을때 DOM 의 크기가 변하면 그리드의 내부적인 크기 계산에 오류가 생깁니다.
		  꼭, 크기에 영향이 없는 style 변경을 할때만 사용하세요.
		  <br>기본값:<code>""</code>
		  @type {string=} JGM.Footer.options.cellStyle
		  @private
		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'cellStyle': "",
		/**
		  Footer 셀의 타이틀에 공통적으로 적용되는 CSS style 입니다.<br>
		  주의할 점: 이 옵션에 입력된 style 이 적용되었을때 DOM 의 크기가 변하면 그리드의 내부적인 크기 계산에 오류가 생깁니다.
		  꼭, 크기에 영향이 없는 style 변경을 할때만 사용하세요.
		  <br>기본값:<code>""</code>
		  @type {string=} JGM.Footer.options.titleStyle
		  @private
		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'titleStyle': "",
		/**
		  Footer 셀의 컨텐트에 공통적으로 적용되는 CSS style 입니다.<br>
		  주의할 점: 이 옵션에 입력된 style 이 적용되었을때 DOM 의 크기가 변하면 그리드의 내부적인 크기 계산에 오류가 생깁니다.
		  꼭, 크기에 영향이 없는 style 변경을 할때만 사용하세요.
		  <br>기본값:<code>""</code>
		  @type {string=} JGM.Footer.options.contentStyle
		  @private
		  @author 조준호
		  @since 1.0.0
		  @version 1.0.0
		  */
		'contentStyle': "",
		'sumAlign': 'right'
	};
	this._options = JGM._extend(options, args['options']);
	this._sumMap = {};
	this.__init();
}
Footer.getInstance = function(args) {
	return new Footer(args);
};
var prototype = Footer.prototype;
prototype.__init = function() {
	this._hasSum = this.grid.colDefMgr.get().some(function(c) {
		return !!c['sumRenderer'];
	});
	var opt = this._options,
		mask = this._mask = $(element('div', {
			'class': 'classSliderMask'
		})).appendTo(this._ctnr);
	if (this._hasSum) {
		this._slider = $(element('div', {
			'class': 'classSlider'
		})).appendTo(mask);
	}
	this._foot =
		$("<div class='" + this._options['classFooter'] + "'>")
		.appendTo(this._ctnr);
	this.getNextCell().html(this._options['countTemplate']);
	this._updateTotalCount();
	this._updateShownCount();
	this.renderCells();
	this._initSumCells();
	this.bindEvents();
};
prototype.bindEvents = function() {
	this.grid['event'].bind({
		'onCreateCss': this._onCreateCss,
		'onDestroy': this._destroy,
		'onDataChange': [this._updateTotalCount, this._updateSums],
		'onAfterRefresh': this._updateShownCount,
		'onResizeCol': this.setSumWidthFromViewWidth,
		'changeVisibleColumns': this._onReorderCols,
		'onScrollViewportH': this._onScrollViewportH
	}, this);
};
prototype._onReorderCols = function() {
	var colDefs = this.grid['colDefMgr'].get(),
		i = 0,
		l = colDefs.length;
	for (; i < l; i++) {
		this._slider[0].appendChild(this.getSumCell(colDefs[i].key));
	}
};
prototype.setSumWidthFromViewWidth = function(key, w) {
	var el = this.getSumCell(key);
	if (el) {
		return el.style.width = this._toStyleWidth(w + this.grid['view']._colWidthPlus() - this._widthPlus()) + 'px'
	}
};
prototype._widthPlus = prototype._getBorder = function() {
	return this._border || (this._border = 1);
};
prototype._toStyleWidth = function(w) {
	return JGM.quirk ? w + this._widthPlus() : w;
};
prototype._onScrollViewportH = function(scrollLeft) {
	if (this._hasSum) {
		var left = -10000 - scrollLeft;
		this._slider[0].style.left = left + "px";
	}
};
prototype.renderCells = function() {
	if (this._hasSum) {
		var colDefs = this.grid['colDefMgr'].get(),
			i = 0,
			l = colDefs.length,
			colDef,
			view = this.grid['view'],
			cells = [],
			widthPlus = this._widthPlus();
		for (; i < l; i++) {
			cells.push(element('div', {
				'class': 'classSliderCell',
				'id': this.mid + '_sum_' + colDefs[i].key,
				'style': {
					width: this._toStyleWidth(view._getColOuterWidth(i) - widthPlus) + 'px'
				}
			}));
		}
		this._slider[0].innerHTML = cells.join("");
	}
};
prototype.getSumCell = function(key) {
	return document.getElementById(this.mid + '_sum_' + key);
};
prototype.setCellValue = function(key, value) {
	var el = this.getSumCell(key);
	if (el) {
		el.innerHTML = value;
	}
};
prototype._destroy = function() {
	var i,
		map = this._sumMap;
	for (i in map) {
		if (map.hasOwnProperty(i) && map[i] && map[i].remove) {
			map[i].remove();
		}
	}
	if (this._mask) {
		this._mask.remove();
		delete this._mask;
	}
	if (this._slider) {
		this._slider.remove();
		delete this._slider;
	}
	JGM._destroy(this, {
		name: "Footer",
		path: "footer",
		"$": "_foot",
		property: "_ctnr",
		map: "_sumMap _options"
	});
};
prototype._onCreateCss = function() {
	var opt = this._options,
		footerSel = "#" + this.grid['mid'] + " ." + opt['classFooter'],
		rules = [];
	rules.push(footerSel + "{float:left;cursor:default;width:100%;" + JGM._CONST._cssUnselectable + "background:" + opt['background'] +";border-top:" + opt['border'] + ";border-collapse:collapse;color:" + opt['color'] + ";font-size:" + opt['fontSize'] + ";font-weight:" + opt['fontWeight'] + ";padding-left:8px;" + opt['style'] + "}");
	rules.push(footerSel + " ." + opt['classCell'] + "{float:left;white-space:nowrap;line-height:" + opt['cellHeight'] + "px;padding-right:" + opt['cellPadding'] + "px;" + opt['cellStyle'] + "}");
	rules.push(footerSel + " ." + opt['classTitle'] + "{text-align:right;color:" + opt['titleColor'] + ";font-size:" + opt['titleFontSize'] + ";font-weight:" + opt['titleFontWeight'] + ";" + opt['titleStyle'] + "}");
	rules.push(footerSel + " ." + opt['classContent'] + "{color:" + opt['contentColor'] + ";font-size:" + opt['contentFontSize'] + ";font-weight:" + opt['contentFontWeight'] + ";" + opt['contentStyle'] + "}");
	var border = '1px solid #ddd',
		styles = {},
		gridsel = "#" + this.grid['mid'];
	styles[gridsel + ' .classSliderMask'] = {
		position: 'relative',
		overflow: 'hidden',
		width: '100%',
		'border-bottom': border
	};
	styles[gridsel + ' .classSlider'] = {
		position: 'relative',
		overflow: 'hidden',
		'white-space': 'nowrap',
		cursor: 'default',
		background: '#f0f0f0',
		left: '-10000px',
		width: '100000px',
		'line-height': '21px'
	};
	styles[gridsel + ' .classSliderCell'] = {
		position: 'relative',
		overflow: 'hidden',
		'float': 'left',
		'text-overflow':'ellipsis',
		'text-align':opt['sumAlign'],
		'vertical-align': 'middle',
		height: '21px',
		left: (10000 - this.grid['view'].getScrollLeft()) + "px",
		'border-right': border
	};
	var i,
		j,
		style;
	for (i in styles) {
		if (styles.hasOwnProperty(i)) {
			style = styles[i];
			rules.push(i + '{');
			for (j in style) {
				rules.push(j + ':' + style[j] + ';');
			}
			rules.push('}');
		}
	}
	return rules.join("");
};
prototype._updateTotalCount = function() {
	this._foot.find("[name=totalCount]")[0].innerHTML = this.grid['dataMgr'].getReal().length;
};
prototype._updateShownCount = function() {
	this._foot.find("[name=shownCount]")[0].innerHTML = this.grid['dataMgr'].filterReal(this.grid['dataMgr'].datalist).length;
};
prototype._initSumCells = function() {
	if (this._hasSum) {
		var rows = this.grid['dataMgr'].getReal(),
			colDefs = this.grid['colDefMgr'].get(),
					clen = colDefs.length,
					colDef,
					renderer,
					lower,
					key,
					name,
					sum,
					sumfn = Footer._calSum,
					map = this._sumMap,
					cell,
					node,
					html,
					i = 0;
		for (; i < clen; i++) {
			colDef = colDefs[i];
			renderer = colDef['sumRenderer'];
			if (renderer) {
				key = colDef['key'];
				name = colDef['name'];
				map[key] = true;
				//cell = map[key] = this.getNextCell();
				//node = cell[0];
				switch (typeof renderer) {
					case 'function':
						// has custom sum renderer
						sum = sumfn(rows, key, true);
						html = renderer(name, sum.sum, sum.min, sum.max);
						break;
					case 'string':
						sum = sumfn(rows, key);
						lower = renderer.toLowerCase();
						if (lower === "krw" || renderer === "\\") {
							html = Util.formatNumber(sum);
						}
						else if (lower === "usd" || renderer === "$") {
							html = Util.formatNumber(sum, 2, "$ ");
						}
						break;
					default:
						sum = sumfn(rows, key);
						html = colDef['renderer'] ? colDef['renderer'](sum) : sum;
						break;
				}
				//node.innerHTML = html;
				this.setCellValue(key, html);
			}
		}
	}
};
prototype._updateSums = function() {
	if (this._hasSum) {
		var rows = this.grid['dataMgr'].getReal(),
			key,
				map = this._sumMap,
				cmgr = this.grid['colDefMgr'],
				colDef,
				renderer,
				lower,
				name,
				sum,
				sumfn = Footer._calSum,
				cell,
				node,
				html,
				content = this._options['classContent'];
		for (key in map) {
			if (map.hasOwnProperty(key)) {
				colDef = cmgr.getByKey(key);
				name = colDef['name'];
				renderer = colDef['sumRenderer'];
				//cell = map[key];
				//node = cell[0];
				switch (typeof renderer) {
					case 'function':
						// has custom sum renderer
						sum = sumfn(rows, key, true);
						html = renderer(name, sum.sum, sum.min, sum.max);
						break;
					case 'string':
						sum = sumfn(rows, key);
						lower = renderer.toLowerCase();
						if (lower === "krw" || renderer === "\\") {
							html = Util.formatNumber(sum);
						}
						else if (lower === "usd" || renderer === "$") {
							html = Util.formatNumber(sum, 2, "$ ");
						}
						break;
					default:
						sum = sumfn(rows, key);
						html = colDef['renderer'] ? colDef['renderer'](sum) : sum;
						break;
				}
				//node.innerHTML = html;
				this.setCellValue(key, html);
			}
		}
	}
};
/**
  {@link JGM.Footer Footer} 에 비어있는 셀 하나를 리턴합니다. 현재 비어있는 셀이
  없을 경우에는 새로운 로우를 추가하여 그 로우의 첫 셀을 리턴합니다.
  @function {jQuery} getNextCell
  @returns {jQuery} {@link JGM.Footer Footer} 에 비어있는 셀
  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
prototype.getNextCell = function() {
	return $("<div class='" + this._options['classCell'] + "'/>").appendTo(this._foot);
};
prototype._sumRenderer = function(name, sum) {
	return "<span class='" + this._options['classTitle'] + "'>" + name + " 합계: </span><span class='" + this._options['classContent'] + "'>" + sum + "</span>";
};
Footer._calSum = function(datalist, key, minMax) {
	if (minMax) {
		var sum = 0,
			tmp,
			len = datalist.length,
			i = 0,
			min = Number.MAX_VALUE,
			max = Number.MIN_VALUE;
		for (; i < len; i++) {
			if (typeof (tmp = datalist[i][key]) === "string") {
				tmp = tmp.toFloat();
			}
			if (min > tmp) {
				min = tmp;
			}
			if (max < tmp) {
				max = tmp;
			}
			sum += isNaN(tmp) ? 0 : tmp;
		}
		return {
			sum: sum,
			min: min,
			max: max
		};
	}
	else {
		var sum = 0,
			tmp,
				len = datalist.length,
				i = 0;
		for (; i < len; i++) {
			if (typeof (tmp = datalist[i][key]) === "string") {
				tmp = tmp.toFloat();
			}
			sum += isNaN(tmp) ? 0 : tmp;
		}
		return sum;
	}
};
}());
