goog.require('jx.lang.Disposable');
goog.provide('jx.events.EventDispatcher');
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
	Disposable = goog.getObjectByName('jx.lang.Disposable');
	goog.exportSymbol('jx.events.EventDispatcher', EventDispatcher);
/**
Grid 의 이벤트를 담당하는 모듈. 모듈들 간의 원활한 커뮤니케이트를 가능하게
합니다.
@module EventDispatcher
*/
/**
Grid 이벤트 매니저 클래스. Grid 의 모듈 들간의 커뮤니케이션은 이 클래스를
통해 이벤트를 레지스터/트리거 함으로써 이루어집니다. 직접 다른 모듈의 함수를
호출하는 방법도 있지만 이벤트를 통하면 다른 모듈 인스턴스의 존재 유무 또는
이름을 알지 못 하여도 상호 커뮤니케이트 할 수 있는 장점이 있습니다.
@class {EventDispatcher} JGM.EventDispatcher
@author 조준호
@since 1.0.0
@version 1.1.7
*/
/**
EventDispatcher 컨스트럭터 입니다.
@constructor {EventDispatcher} EventDispatcher
@param {Object} args - EventDispatcher 모듈 파라미터 오브젝트
@returns {EventDispatcher} EventDispatcher 모듈 인스턴스를 리턴합니다.
@author 조준호
@since 1.0.0
@version 1.0.0
*/
function EventDispatcher(args) {
}
// class EventDispatcher extends Disposable
goog.inherits(EventDispatcher, Disposable);
var proto = EventDispatcher.prototype,
	sdispose = Disposable.prototype.dispose;
proto.dispose = function() {
	sdispose.call(this._handlers, -1, true);
	sdispose.call(this);
};
/**
jQuery.bind 와 비슷한 형식입니다. 하나 또는 여럿의 이벤트 핸들러를 레지스터 합니다.
@function {} bind
@paramset 한개의 이벤트를 등록할 경우 1
@param {string} event - 이벤트 이름. 여러개의 이벤트를 빈칸으로 띄어 쓰면 한번에
여러 이벤트에 같은 핸들러와 오브젝트를 등록할 수 있습니다.
@param {function|Array.<function>} fn - 이벤트 핸들러 함수. 함수 어레이일 경우 이벤트에
여러개의 이벤트 핸들러 함수를 등록합니다.
@param {?=} target - 이벤트 핸들러 오브젝트. 호출 함수의 this 로
정해집니다. 주어지지 않을 경우, window 오브젝트로 정해집니다.
@paramset 한개 이상의 이벤트를 등록할 경우
@param {Object} args - 이벤트 어레이 파라미터
@... {string} args.key - event 와 같음
@... {function|Array.<function>} args[args.key] - fn 과 같음
@param {?=} target - target.
@author 조준호
@since 1.1.6
@version 1.1.6
*/
proto.addEventListener = function(type, listener) {
	if (!type) {
		throw new Error('Invalid event type: ' + type);
	}
	if (typeof listener != 'function') {
		throw new Error('Event listener must be a function');
	}
	if (!this._handlers) {
		this._handlers = {};
	}
	var map = this._handlers,
		listeners;
	type = (type + '').toLowerCase();
	if (!map.hasOwnProperty(type)) {
		map[type] = [];
	}
	listeners = map[type];
	if (listeners.indexOf(listener) === -1) {
		listeners.push(listener);
	}
};
proto.removeEventListener = function(type, listener) {
	if (!this._handlers) {
		return;
	}
	type = (type + '').toLowerCase();
	var map = this._handlers;
	if (!map.hasOwnProperty(type)) {
		return;
	}
	var listeners = map[type],
		index = -1;
	while ((index = listeners.indexOf(listener, index + 1)) !== -1) {
		listeners.splice(index--, 1);
	}
	if (listeners.length === 0) {
		delete map[type];
	}
};
proto.dispatchEvent = function(event) {
	if (!event || !event.type) {
		throw new Error('Invalid event');
	}
	if (!this._handlers) {
		if (event.cancelable && event.defaultPrevented) {
			return false;
		}
		if (event.defaultAction) {
			event.defaultAction(this);
		}
		return true;
	}
	var map = this._handlers,
		type = (event.type + '').toLowerCase(),
		listeners;
	event.target = this;
	if (map.hasOwnProperty(type)) {
		listeners = map[type].slice();
		var i = 0,
			l = listeners.length,
			listener;
		for (; i < l && !event.stopPropagation; i++) {
			listener = listeners[i];
			if (listener.handleEvent) {
				listener.handleEvent(event);
			}
			else {
				listener.call(this, event);
			}
		}
	}
	if (event.cancelable && event.defaultPrevented) {
		return false;
	}
	if (event.defaultAction) {
		event.defaultAction(this);
	}
	return true;
};
})();
