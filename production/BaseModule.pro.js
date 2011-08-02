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
(function() {
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
		var defaults = this._defaultOptions && this._defaultOptions(),
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
		this.dispatchEvent({
			'type':'afterdispose'
		});
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
}());
