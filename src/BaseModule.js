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

 var EventDispatcher = goog.getObjectByName('EventDispatcher');
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
			opts = args && args.options;
		if (opts || defaults) {
			if (!defaults) {
				defaults = {};
			}
			if (opts) {
				$.extend(true, defaults, opts);
			}
			this._options = defaults;
		}

		// init
		if (this._init) {
			this.dispatchEvent({
				type:'beforeinit'
			});
			this._init(args);
			this.dispatchEvent({
				type:'afterinit'
			});
		}

		var that = this,
			grid = this.grid;
		if (grid) {
			/*
			 * Common Grid Events
			 */
			['dispose', 'createcss', 'createdynamiccss', 'render', 'keydown', 'keyup', 'keypress', 'mousein', 'mouseout', 'mouseenter', 'mouseleave', 'mousemove', 'mouseover', 'mousedown', 'mouseup', 'click', 'dblclick', 'resize', 'resizewidth', 'resizeheight', 'scroll', 'scrollh', 'scrollv'].forEach(function(name) {
				var before = '_before' + name,
					after = '_after' + name;
				if (that[before]) {
					grid.addEventListener(before, function(event) {
						return that[before](event);
					});
				}
				if (that[after]) {
					grid.addEventListener(after, function(event) {
						return that[after](event);
					});
				}
			});
		}

		// bindEvents
		if (this._bindEvents) {
			this.dispatchEvent({
				type:'beforebindevents'
			});
			this._bindEvents(args);
			this.dispatchEvent({
				type:'afterbindevents'
			});
		}

		// complete instantiation
		this.dispatchEvent({
			type:'complete'
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
			type:'beforedispose'
		});
		superdispose.call(this);
		this.dispatchEvent({
			type:'afterdispose'
		});
	}

}());
