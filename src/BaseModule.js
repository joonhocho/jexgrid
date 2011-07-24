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

	var proto = BaseModule.prototype,
		superdispose = proto.dispose;

	proto._beforedispose = function() {
		this.dispose();
	}

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

	proto.getDataMgr = function() {
		return this.grid['dataMgr'];
	}

	proto.getAllData = function() {
		return this.grid['dataMgr']['all'];
	}

	proto.getDataList = function() {
		return this.grid['dataMgr']['datalist'];
	}

	proto.getColMgr = function() {
		return this.grid['colDefMgr'];
	}

	proto.getIdKey = function() {
		return this.grid['dataMgr'].idKey;
	}

	proto.getEventMgr = function() {
		return this.grid['event'];
	}

	proto.getView = function() {
		return this.grid['view'];
	}

	proto.getHeader = function() {
		return this.grid['header'];
	}

	proto.bindGridEvent = function() {
		var event = this.grid['event'];
		return event.bind.apply(event, arguments);
	}

	proto.triggerGridEvent = function() {
		var event = this.grid['event'];
		return event.trigger.apply(event, arguments);
	}

}());
