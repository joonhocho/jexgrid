window.console && window.console.log && window.console.log('reading javascript source "BaseModule.js"...');//IF_DEBUG

goog.require('array_extension');
goog.require('jx.lang.Disposable');
goog.require('jx.events.EventDispatcher');
goog.require('jx.grid');

goog.provide('jx.grid.BaseModule');

/*!
 * AUTHOR
 *   The JexGrid was written and is maintained by:
 *       Joon Ho Cho <joonho1101@gmail.com>
 * COPYRIGHT
 *   Copyright (c) 2010-2011, WebCash Inc. All rights reserved.
 */

(function() {'use strict';

 var EventDispatcher = goog.getObjectByName('jx.events.EventDispatcher');
	goog.exportSymbol('jx.grid.BaseModule', BaseModule);

	/**
	 * 그리드 관련 모듈을 생성합니다.
	 * _defaultOptions 를 사용하여 모듈 옵션을 익스텐드하고, _init 함수를 콜하고 _bindEvents 를 콜합니다.
	 * 클래스에 정의된 이벤트 핸들러들을 이벤트에 레지스터 해줍니다.
	 * 이 클래스는 abstract 클래스 입니다. 서브 클래스 컨스트럭터에서 goog.base 를 사용하여 이 컨스트럭터를 콜해야 합니다.
	 *
	 * @constructor
	 * @abstract
	 * @protected
	 * @class jx.grid.BaseModule
	 * @extends jx.events.EventDispatcher
	 *
	 * @param {object} args - 모듈 파라미터 오브젝트
	 * @param {string} [args.mid] - 모듈 아이디
	 * @param {jx.grid.Grid} [args.grid] - 모듈이 속하는 그리드 인스턴스
	 * @param {object} [args.options] - 모듈 옵션
	 *
	 * @event jx.grid.Grid#event:afterOption
	 * @event jx.grid.Grid#event:beforeInit
	 * @event jx.grid.Grid#event:afterInit
	 * @event jx.grid.Grid#event:beforeBindEvents
	 * @event jx.grid.Grid#event:afterBindEvents
	 * @event jx.grid.Grid#event:complete
	 * @event jx.grid.Grid#event:beforeDispose 
	 * @event jx.grid.Grid#event:afterDispose 
	 * @event jx.grid.Grid#event:beforeCreateCss 
	 * @event jx.grid.Grid#event:afterCreateCss 
	 * @event jx.grid.Grid#event:beforeCreateDynamicCss 
	 * @event jx.grid.Grid#event:afterCreateDynamicCss 
	 * @event jx.grid.Grid#event:beforeRender 
	 * @event jx.grid.Grid#event:afterRender 
	 * @event jx.grid.Grid#event:beforeKeydown 
	 * @event jx.grid.Grid#event:afterKeydown 
	 * @event jx.grid.Grid#event:beforeKeyup 
	 * @event jx.grid.Grid#event:afterKeyup 
	 * @event jx.grid.Grid#event:beforeKeypress 
	 * @event jx.grid.Grid#event:afterKeypress 
	 * @event jx.grid.Grid#event:beforeMousein 
	 * @event jx.grid.Grid#event:afterMousein 
	 * @event jx.grid.Grid#event:beforeMouseout 
	 * @event jx.grid.Grid#event:afterMouseout 
	 * @event jx.grid.Grid#event:beforeMouseenter 
	 * @event jx.grid.Grid#event:afterMouseenter 
	 * @event jx.grid.Grid#event:beforeMouseleave 
	 * @event jx.grid.Grid#event:afterMouseleave 
	 * @event jx.grid.Grid#event:beforeMousemove 
	 * @event jx.grid.Grid#event:afterMousemove 
	 * @event jx.grid.Grid#event:beforeMouseover 
	 * @event jx.grid.Grid#event:afterMouseover 
	 * @event jx.grid.Grid#event:beforeMousedown 
	 * @event jx.grid.Grid#event:afterMousedown 
	 * @event jx.grid.Grid#event:beforeMouseup 
	 * @event jx.grid.Grid#event:afterMouseup 
	 * @event jx.grid.Grid#event:beforeClick 
	 * @event jx.grid.Grid#event:afterClick 
	 * @event jx.grid.Grid#event:beforeDblclick 
	 * @event jx.grid.Grid#event:afterDblclick 
	 * @event jx.grid.Grid#event:beforeResize 
	 * @event jx.grid.Grid#event:afterResize 
	 * @event jx.grid.Grid#event:beforeResizeWidth 
	 * @event jx.grid.Grid#event:afterResizeWidth 
	 * @event jx.grid.Grid#event:beforeResizeHeight 
	 * @event jx.grid.Grid#event:afterResizeHeight 
	 * @event jx.grid.Grid#event:beforeScroll 
	 * @event jx.grid.Grid#event:afterScroll 
	 * @event jx.grid.Grid#event:beforeScrollH 
	 * @event jx.grid.Grid#event:afterScrollH 
	 * @event jx.grid.Grid#event:beforeScrollV
	 * @event jx.grid.Grid#event:afterScrollV
	 *
	 * @see #mid
	 * @see #grid
	 * @see #_defaultOptions
	 * @see #_init
	 * @see #_options
	 * @see #_bindEvents
	 * @see #dispatchEvent
	 * @see #_beforeDispose 
	 * @see #_afterDispose 
	 * @see #_beforeCreateCss 
	 * @see #_afterCreateCss 
	 * @see #_beforeCreateDynamicCss 
	 * @see #_afterCreateDynamicCss 
	 * @see #_beforeRender 
	 * @see #_afterRender 
	 * @see #_beforeKeydown 
	 * @see #_afterKeydown 
	 * @see #_beforeKeyup 
	 * @see #_afterKeyup 
	 * @see #_beforeKeypress 
	 * @see #_afterKeypress 
	 * @see #_beforeMousein 
	 * @see #_afterMousein 
	 * @see #_beforeMouseout 
	 * @see #_afterMouseout 
	 * @see #_beforeMouseenter 
	 * @see #_afterMouseenter 
	 * @see #_beforeMouseleave 
	 * @see #_afterMouseleave 
	 * @see #_beforeMousemove 
	 * @see #_afterMousemove 
	 * @see #_beforeMouseover 
	 * @see #_afterMouseover 
	 * @see #_beforeMousedown 
	 * @see #_afterMousedown 
	 * @see #_beforeMouseup 
	 * @see #_afterMouseup 
	 * @see #_beforeClick 
	 * @see #_afterClick 
	 * @see #_beforeDblclick 
	 * @see #_afterDblclick 
	 * @see #_beforeResize 
	 * @see #_afterResize 
	 * @see #_beforeResizeWidth 
	 * @see #_afterResizeWidth 
	 * @see #_beforeResizeHeight 
	 * @see #_afterResizeHeight 
	 * @see #_beforeScroll 
	 * @see #_afterScroll 
	 * @see #_beforeScrollH 
	 * @see #_afterScrollH 
	 * @see #_beforeScrollV
	 * @see #_afterScrollV
	 *
	 * @since 2.0.0
	 * @version 2.0.0
	 */
	function BaseModule(args) {
		if (args) {
			// module ID
			if (args.mid != null) {
				this.mid = args.mid;
			}

			// grid
			if (args.grid) {
				this.grid = args.grid;
			}
		}

		// options
		var defaults = this._defaultOptions && this._defaultOptions(args.grid),
			opts = args && args['options'];
		if (opts || defaults) {
			if (!defaults) {
				defaults = {};
			}
			if (opts) {
				$.extend(true, defaults, opts);
			}
			this._options = defaults;
			this.dispatchEvent({
				'type':'afteroption',
				'options':defaults
			});
		}

		// init
		if (this._init) {
			this.dispatchEvent({
				'type':'beforeinit'
			});
			this._init(args);
			this.dispatchEvent({
				'type':'afterinit'
			});
		}

		var that = this,
			grid = this.grid;
		if (grid) {
			/*
			 * Common Grid Events
			 */
			['Dispose', 'CreateCss', 'CreateDynamicCss', 'Render', 'Keydown', 'Keyup', 'Keypress', 'Mousein', 'Mouseout', 'Mouseenter', 'Mouseleave', 'Mousemove', 'Mouseover', 'Mousedown', 'Mouseup', 'Click', 'Dblclick', 'Resize', 'ResizeWidth', 'ResizeHeight', 'Scroll', 'ScrollH', 'ScrollV'].forEach(function(name) {
				var before = 'before' + name,
					after = 'after' + name,
					beforefn = '_' + before,
					afterfn = '_' + after;
				if (that[beforefn]) {
					grid.addEventListener(before, function(event) {
						return that[beforefn](event);
					});
				}
				if (that[afterfn]) {
					grid.addEventListener(after, function(event) {
						return that[afterfn](event);
					});
				}
			});
		}

		// bindEvents
		if (this._bindEvents) {
			this.dispatchEvent({
				'type':'beforebindevents'
			});
			this._bindEvents(args);
			this.dispatchEvent({
				'type':'afterbindevents'
			});
		}

		// complete instantiation
		this.dispatchEvent({
			'type':'complete'
		});
	}

	goog.inherits(BaseModule, EventDispatcher);

	/**
	 * @lends jx.grid.BaseModule#
	 */
	var proto = BaseModule.prototype,
		superdispose = proto.dispose;

	/**
	 * 이 모듈이 속하는 그리드가 dispose 를 실행 하여 beforeDispose 이벤트를 발생시켰을 때 콜되는 핸들러입니다.
	 *
	 * @private
	 * @lends jx.grid.BaseModule#
	 *
	 * @name #_beforeDispose
	 * @event jx.grid.Grid#event:beforeDispose
	 *
	 * @see #dispose
	 * @see jx.grid.Grid#dispose
	 *
	 * @since 2.0.0
	 * @version 2.0.0
	 */
	proto._beforeDispose = function() {
		this.dispose();
	}

	/**
	 * 이 모듈을 dispose 합니다. 주로 field 들을 delete 하여 GarbageCollector 가 메모리를 프리하기 용이하게 해줍니다.
	 *
	 * @public
	 * @lends jx.grid.BaseModule#
	 *
	 * @event #event:beforeDispose
	 * @event #event:afterDispose
	 *
	 * @since 2.0.0
	 * @version 2.0.0
	 */
	proto.dispose = function() {
		delete this.grid;
		this.dispatchEvent({
			'type':'beforedispose'
		});
		superdispose.call(this);
	}

	/**
	 * 이 모듈이 소속된 그리드의 데이터 매니저 인스턴스를 리턴합니다.
	 *
	 * @public
	 * @lends jx.grid.BaseModule#
	 *
	 * @returns {jx.data.DataManager} 이 모듈이 소속된 그리드의 데이터 매니저 인스턴스
	 *
	 * @see jx.grid.Grid#dataMgr
	 *
	 * @since 2.0.0
	 * @version 2.0.0
	 */
	proto.getDataMgr = function() {
		return this.grid['dataMgr'];
	}

	/**
	 * 이 모듈이 소속된 그리드의 모든 데이터의 어레이를 리턴합니다.
	 *
	 * @public
	 * @lends jx.grid.BaseModule#
	 *
	 * @returns {object[]} 이 모듈이 소속된 그리드의 모든 데이터 어레이
	 *
	 * @see jx.data.DataManager#all
	 *
	 * @since 2.0.0
	 * @version 2.0.0
	 */
	proto.getAllData = function() {
		return this.grid['dataMgr']['all'];
	}

	/**
	 * 이 모듈이 소속된 그리드의 화면에 보이는 데이터의 어레이를 리턴합니다.
	 *
	 * @public
	 * @lends jx.grid.BaseModule#
	 *
	 * @returns {object[]} 이 모듈이 소속된 그리드의 화면에 보이는 데이터 어레이
	 *
	 * @see jx.data.DataManager#datalist
	 *
	 * @since 2.0.0
	 * @version 2.0.0
	 */
	proto.getDataList = function() {
		return this.grid['dataMgr']['datalist'];
	}

	/**
	 * 이 모듈이 소속된 그리드의 데이터 매니저의 idKey 를 리턴합니다.
	 *
	 * @public
	 * @lends jx.grid.BaseModule#
	 *
	 * @returns {string} 이 모듈이 소속된 그리드의 데이터 매니저의 idKey
	 *
	 * @see jx.data.DataManager#idKey
	 *
	 * @since 2.0.0
	 * @version 2.0.0
	 */
	proto.getIdKey = function() {
		return this.grid['dataMgr'].idKey;
	}

	/**
	 * 이 모듈이 소속된 그리드의 컬럼 매니저를 리턴합니다.
	 *
	 * @public
	 * @lends jx.grid.BaseModule#
	 *
	 * @returns {jx.grid.ColumnManager} 이 모듈이 소속된 그리드의 컬럼 매니저
	 *
	 * @see jx.grid.Grid#colDefMgr
	 *
	 * @since 2.0.0
	 * @version 2.0.0
	 */
	proto.getColMgr = function() {
		return this.grid['colDefMgr'];
	}

	/**
	 * 이 모듈이 소속된 그리드의 컬럼 정의 오브젝트 어레이를 리턴합니다.
	 *
	 * @public
	 * @lends jx.grid.BaseModule#
	 *
	 * @returns {object[]} 이 모듈이 소속된 그리드의 컬럼 정의 오브젝트 어레이
	 *
	 * @see jx.grid.ColumnManager#get
	 *
	 * @since 2.0.0
	 * @version 2.0.0
	 */
	proto.getColumns = function() {
		return this.grid['colDefMgr'].get();
	}

	/**
	 * 이 모듈이 소속된 그리드의 이벤트 매니저를 리턴합니다.
	 *
	 * @public
	 * @lends jx.grid.BaseModule#
	 *
	 * @returns {jx.grid.EventManager} 이 모듈이 소속된 그리드의 이벤트 매니저
	 *
	 * @see jx.grid.Grid#event
	 *
	 * @since 2.0.0
	 * @version 2.0.0
	 */
	proto.getEventMgr = function() {
		return this.grid['event'];
	}

	/**
	 * 이 모듈이 소속된 그리드의 뷰포트 매니저를 리턴합니다.
	 *
	 * @public
	 * @lends jx.grid.BaseModule#
	 *
	 * @returns {jx.grid.ViewportManager} 이 모듈이 소속된 그리드의 뷰포트 매니저
	 *
	 * @see jx.grid.Grid#view
	 *
	 * @since 2.0.0
	 * @version 2.0.0
	 */
	proto.getView = function() {
		return this.grid['view'];
	}

	/**
	 * 이 모듈이 소속된 그리드의 컬럼 헤더를 리턴합니다.
	 *
	 * @public
	 * @lends jx.grid.BaseModule#
	 *
	 * @returns {jx.grid.ColumnHeader} 이 모듈이 소속된 그리드의 컬럼 헤더
	 *
	 * @see jx.grid.Grid#header
	 *
	 * @since 2.0.0
	 * @version 2.0.0
	 */
	proto.getHeader = function() {
		return this.grid['header'];
	}

	/**
	 * 이 모듈이 소속된 그리드의 이벤트 매니저에 이벤트 핸들러를 바인드합니다.
	 *
	 * @public
	 * @lends jx.grid.BaseModule#
	 *
	 * @param {} 
	 *
	 * @see jx.grid.Grid#event
	 * @see jx.grid.EventManager#bind
	 *
	 * @since 2.0.0
	 * @version 2.0.0
	 */
	proto.bindGridEvent = function() {
		var event = this.grid['event'];
		return event.bind.apply(event, arguments);
	}

	/**
	 * 이 모듈이 소속된 그리드의 이벤트 매니저에 이벤트를 트리거합니다.
	 *
	 * @public
	 * @lends jx.grid.BaseModule#
	 *
	 * @param {} 
	 *
	 * @see jx.grid.Grid#event
	 * @see jx.grid.EventManager#trigger
	 *
	 * @since 2.0.0
	 * @version 2.0.0
	 */
	proto.triggerGridEvent = function() {
		var event = this.grid['event'];
		return event.trigger.apply(event, arguments);
	}

	/**
	 * 이 모듈을 위한 CSS 스타일 스트링을 생성하여 리턴합니다. 한 가지의 셀렉터에 하나 이상의 스타일을 적용할 때 사용합니다.
	 *
	 * @public
	 * @lends jx.grid.BaseModule#
	 *
	 * @param {string} selector - CSS 셀렉터
	 * @param {string|object<string>} styles - string 일 경우 그대로 CSS 스타일에 추가되고, object 일 경우 key 값은 CSS 스타일 명, value 값은 CSS 스타일 값으로 추가됩니다.
	 * @param {boolean} noGridId - true 일 경우, 셀렉터에 그리드 아이디를 붙이지 않습니다. false 일 경우, 그리드 아이디가 셀렉터에 포함되어 그리드 컨테이너 내부의 DOM 엘레멘트에만 스타일이 적용됩니다.
	 *
	 * @returns {string} CSS 스타일 스트링
	 *
	 * @see #toCssStyles
	 *
	 * @since 2.0.0
	 * @version 2.0.0
	 */
	proto.toCssStyle = function(selector, styles, noGridId) {
		var css = [];

		if (!noGridId) {
			selector = '#' + this.grid['mid'] + ' ' + selector;
		}

		if (typeof styles != 'string') {
			var i,
				append = '';

			if (styles.hasOwnProperty('_prepend')) {
				if (styles._prepend) {
					css.push(styles._prepend);
				}
				delete styles._prepend;
			}

			if (styles.hasOwnProperty('_append')) {
				if (styles._append) {
					append = ';' + styles._append;
				}
				delete styles._append;
			}

			for (i in styles) {
				css.push(i + ':' + styles[i]);
			}

			css = css.join(';') + append;
		}

		return selector + '{' + css + '}';
	}

	/**
	 * 이 모듈을 위한 CSS 스타일 스트링을 생성하여 리턴합니다. 하나 이상의 셀렉터에 하나 이상의 스타일을 적용할 때 사용합니다.
	 *
	 * @public
	 * @lends jx.grid.BaseModule#
	 *
	 * @param {string[]} [selector] - CSS 스타일 스트링을 포함할 어레이. 주어지지 않을 경우 새 어레이를 만들어서 리턴합니다.
	 * @param {object<string|object<string>>} styles - key 값은 CSS 셀렉터 명, value 값은 {@link #toCssStyle} 의 styles 값으로 보내집니다.
	 * @param {boolean} noGridId - true 일 경우, 모든 셀렉터에 그리드 아이디를 붙이지 않습니다. false 일 경우, 그리드 아이디가 모든 셀렉터에 포함되어 그리드 컨테이너 내부의 DOM 엘레멘트에만 스타일이 적용됩니다.
	 *
	 * @returns {string[]} CSS 스타일 스트링들을 포함한 어레이
	 *
	 * @see #toCssStyle
	 *
	 * @since 2.0.0
	 * @version 2.0.0
	 */
	proto.toCssStyles = function(css, styles, noGridId) {
		var css = css || [],
			i;

		for (i in styles) {
			css.push(this.toCssStyle(i, styles[i], noGridId));
		}

		return css;
	}

}());
