goog.require('engine_extension');
goog.require('jx.util');
goog.require('jx.grid');
goog.require('jx.grid.BaseModule');
goog.provide('jx.grid.EventManager');
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
 goog.exportSymbol('jx.grid.EventManager', EventManager);
 /**
   Grid 의 이벤트를 담당하는 모듈. 모듈들 간의 원활한 커뮤니케이트를 가능하게
   합니다.
   @module EventManager
   */
 /**
   Grid 이벤트 매니저 클래스. Grid 의 모듈 들간의 커뮤니케이션은 이 클래스를
   통해 이벤트를 레지스터/트리거 함으로써 이루어집니다. 직접 다른 모듈의 함수를
   호출하는 방법도 있지만 이벤트를 통하면 다른 모듈 인스턴스의 존재 유무 또는
   이름을 알지 못 하여도 상호 커뮤니케이트 할 수 있는 장점이 있습니다.
   @class {EventManager} jx.grid.EventManager
   @author 조준호
   @since 1.0.0
   @version 1.1.7
   */
 /**
   EventManager 컨스트럭터 입니다.
   @constructor {EventManager} EventManager
   @param {Object} args - EventManager 모듈 파라미터 오브젝트
   @returns {EventManager} EventManager 모듈 인스턴스를 리턴합니다.
   @author 조준호
   @since 1.0.0
   @version 1.0.0
   */
 function EventManager(args) {
	 /**
	   {@link JGM} 이 할당해주는 EventManager 모듈 고유 아이디입니다. 읽기 전용.
	   @var {string} mid
	   @author 조준호
	   @since 1.0.0
	   @version 1.0.0
	   */
	 this.mid = args.mid;
	 this.grid = args.grid;
	 /**
	   Grid 내의 모든 이벤트 레지스터와 트리거를 담당하는 {@link jx.grid.EventManager EventManager} 인스턴스 입니다.
	   @var {jx.grid.EventManager} jx.grid.Grid.event
	   @author 조준호
	   @since 1.0.0
	   @version 1.0.0
	   */
	 args.grid.event = this;
	 this._map = {};
 }
 EventManager.getInstance = function(args) {
	 return new EventManager(args);
 };
 var prototype = EventManager.prototype;
 prototype.destroy = function() {
	 var i,
		 map = this._map;
	 for (i in map) {
		 if (map.hasOwnProperty(i)) {
			 JGM._deleteArray(map, i);
		 }
	 }
	 JGM._destroy(this, {
name: "EventManager",
path: "event",
map: "_map"
});
};
/**
  하나 또는 여럿의 이벤트 핸들러를 레지스터 합니다.
  @function {} register
  @paramset 한개의 이벤트를 등록할 경우 1
  @param {string} event - 이벤트 이름. 여러개의 이벤트를 빈칸으로 띄어 쓰면 한번에
  여러 이벤트에 같은 핸들러와 오브젝트를 등록할 수 있습니다.
  @param {function|Array.<function>} fn - 이벤트 핸들러 함수. 함수 어레이일 경우 이벤트에
  여러개의 이벤트 핸들러 함수를 등록합니다.
  @param {?=} target - 이벤트 핸들러 오브젝트. 호출 함수의 this 로
  정해집니다. 주어지지 않을 경우, window 오브젝트로 정해집니다.
  @paramset 한개의 이벤트를 등록할 경우 2
  @param {Object} args - 이벤트 파라미터
  @... {string} args.e - event 와 같음
  @... {function|Array.<function>} args.f - fn 과 같음
  @... {?=} args.t - target 과 같음
  @paramset 여러개의 이벤트를 등록할 경우
  @param {Array.<Object>} args - 이벤트 어레이 파라미터
  @... {string} args[i].e - event 와 같음
  @... {function|Array.<function>} args[i].f - fn 과 같음
  @... {?=} args[i].t - target 과 같음
  @author 조준호
  @since 1.0.0
  @version 1.1.6
  */
prototype.register = function(events, fn, target) {
	if (Util.isString(events)) {
		this._parseAndAdd(events, fn, target);
	}
	else {
		if (Util.isNotNull(events.e)) {
			this._parseAndAdd(events.e, events.f, events.t);
		}
		else {
			var i,
				len = events.length,
				e;
			for (; i < len; i++) {
				if (Util.isNotNull(e = events[i])) {
					this._parseAndAdd(e.e, e.f, e.t);
				}
			}
		}
	}
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
prototype.bind = function(events, fn, target) {
	if (Util.isString(events)) {
		this._parseAndAdd(events, fn, target);
	}
	else {
		var e;
		for (e in events) {
			if (events.hasOwnProperty(e)) {
				this._parseAndAdd(e, events[e], fn);
			}
		}
	}
};
prototype._parseAndAdd = function(events, fn, target) {
	if (Util.isNull(target)) {
		target = window;
	}
	var arr = Util.split(events),
		len = arr.length,
		i = 0;
	if (Util.isFunction(fn)) {	// Function
		for (; i < len; i++) {
			this._addHandler(arr[i], fn, target);
		}
	}
	else if (Util.isString(fn)) {	// String
		var fns = Util.split(fn),
			flen = fns.length,
			e,
			j;
		for (; i < len; i++) {
			e = arr[i];
			for (j = 0; j < flen; j++) {
				this._addHandler(e, target[fns[j]], target);
			}
		}
	}
	else {	// Function[]
		var flen = fn.length,
			e,
			j;
		for (; i < len; i++) {
			e = arr[i];
			for (j = 0; j < flen; j++) {
				this._addHandler(e, fn[j], target);
			}
		}
	}
};
prototype._addHandler = function(e, fn, target) {
	if (!this._map.hasOwnProperty(e)) {
		this._map[e] = [];
	}
	this._map[e].push({'fn':fn, 'target':target});
};
/**
  이벤트 핸들러를 언레지스터 합니다. fn 파라미터를 입력할 경우 fn 핸들러만
  제거하고 그렇지 않은 경우 이벤트 이름에 레지스터된 모든 핸들러를 제거합니다.
  @function {} unregister
  @param {string} event - 이벤트 이름
  @param {Function=} fn - 이벤트 핸들러 함수
  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
prototype.unregister = function(event, fn) {
	var map = this._map;
	if (!map.hasOwnProperty(event)) {
		return;
	}
	var hans = map[event];
	if (Util.isNull(fn)) {
		hans.length = 0;
		delete map[event];
		return;
	}
	var i = 0,
		len = hans.length;
	for (; i < len; i++) {
		if (hans[i].fn === fn) {
			hans.removeAt(i);
			if (hans.length === 0) {
				delete map[event];
			}
			return;
		}
	}
};
/**
  하나 이상의 이벤트를 트리거 합니다. 해당 이름에 레지스터 된 모든 이벤트 핸들러에게
  파라미터를 넘겨주고 호출을 한후 결과를 Array 에 넣고 리턴합니다.
  @function {?[]} trigger
  @param {string} event - 이벤트 이름. 여러 이벤트의 이름을 빈칸으로 띄우면 여러 이벤트를 동시에 트리거합니다.
  @param {?[]=} args - 이벤트 핸들러에 입력될 파라미터 어레이
  @param {Function(?)=} filter - 이벤트 리턴 값 필터링 함수. 리턴
  값들을 필터링 할 때 사용됩니다. 리턴 값을 파라미터로 받아서 true 를 리턴하면
  리턴 값은 이벤트 리턴 Array 에 추가됩니다.
  @returns {?[]} Event Result 어레이
  @author 조준호
  @since 1.0.0
  @version 1.1.7
  */
prototype.trigger = function(events, args, filter) {
	var	hans,
		hlen,
		map = this._map,
		rarr = [],
		arr = Util.split(events),
		len = arr.length,
		noarg = Util.isEmptyArray(args),
		filon = Util.isFunction(filter),
		e,
		i,
		j = 0;
	for (; j < len; j++) {
		e = arr[j];
		if (!map.hasOwnProperty(e)) {
			continue;
		}
		hans = map[e];		
		hlen = hans.length;
		if (hlen === 0) {
			continue;
		}
		i = 0;
		if (filon) {
			var res;
			if (noarg) {
				for (; i < hlen; i++) {
					res = hans[i].fn.call(hans[i].target);
					if (filter(res)) {
						rarr.push(res);
					}
				}
			}
			else {
				for (; i < hlen; i++) {
					res = hans[i].fn.apply(hans[i].target, args);
					if (filter(res)) {
						rarr.push(res);
					}
				}
			}
		}
		else {
			if (noarg) {
				for (; i < hlen; i++) {
					rarr.push(hans[i].fn.call(hans[i].target));
				}
			}
			else {
				for (; i < hlen; i++) {
					rarr.push(hans[i].fn.apply(hans[i].target, args));
				}
			}
		}
	}
	return rarr;
};
prototype.triggerInvalid = function(events, args) {
	return this.trigger(events, args, function(a) { return a === false; }).length !== 0;
};
/**
  이벤트 이름의 이벤트 큐에서 함수를 맨 마지막으로 보냅니다. 이벤트 트리거 시 가장
  나중에 실행됩니다.
  @function {} sendToBack
  @param {string} event - 이벤트 이름
  @param {Function} fn - 이벤트 핸들러 함수
  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
prototype.sendToBack = function(event, fn) {
	var eventQueue = this._map[event],
		len = eventQueue.length,
		handler,
		index = -1,
		i = 0;
	for (; i < len; i++) {
		if (eventQueue[i].fn === fn) {
			index = i;
			handler = eventQueue[i];
			break;
		}
	}
	if (index > -1) {
		eventQueue.removeAt(i);
		eventQueue.push(handler);
	}
};
/**
  이벤트 이름의 이벤트 큐에서 함수를 맨 처음으로 보냅니다. 이벤트 트리거 시 가장
  먼저 실행됩니다.
  @function {} sendToFront
  @param {string} event - 이벤트 이름
  @param {Function} fn - 이벤트 핸들러 함수
  @author 조준호
  @since 1.0.0
  @version 1.0.0
  */
prototype.sendToFront = function(event, fn) {
	var eventQueue = this._map[event],
		len = eventQueue.length,
		handler,
		index = -1,
		i = 0;
	for (; i < len; i++) {
		if (eventQueue[i].fn === fn) {
			index = i;
			handler = eventQueue[i];
			break;
		}
	}
	if (index > -1) {
		eventQueue.removeAt(i);
		eventQueue.unshift(handler);
	}
};
}());
