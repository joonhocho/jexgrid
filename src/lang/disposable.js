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
Grid 의 이벤트를 담당하는 모듈. 모듈들 간의 원활한 커뮤니케이트를 가능하게
합니다.
@module Disposable
*/

/**
Grid 이벤트 매니저 클래스. Grid 의 모듈 들간의 커뮤니케이션은 이 클래스를
통해 이벤트를 레지스터/트리거 함으로써 이루어집니다. 직접 다른 모듈의 함수를
호출하는 방법도 있지만 이벤트를 통하면 다른 모듈 인스턴스의 존재 유무 또는
이름을 알지 못 하여도 상호 커뮤니케이트 할 수 있는 장점이 있습니다.

@class {public Disposable} JGM.Disposable

@author 조준호
@since 1.0.0
@version 1.1.7
*/

/**
Disposable 컨스트럭터 입니다.

@constructor {public Disposable} Disposable
@param {Object} args - Disposable 모듈 파라미터 오브젝트
@returns {Disposable} Disposable 모듈 인스턴스를 리턴합니다.

@author 조준호
@since 1.0.0
@version 1.0.0
*/
function Disposable(args) {
}

var proto = Disposable.prototype,
	isArray = Util.isArray;

/**
jQuery.bind 와 비슷한 형식입니다. 하나 또는 여럿의 이벤트 핸들러를 레지스터 합니다.

@function {public} bind

@paramset 한개의 이벤트를 등록할 경우 1
@param {String} event - 이벤트 이름. 여러개의 이벤트를 빈칸으로 띄어 쓰면 한번에
여러 이벤트에 같은 핸들러와 오브젝트를 등록할 수 있습니다.
@param {Function | Function[]} fn - 이벤트 핸들러 함수. 함수 어레이일 경우 이벤트에
여러개의 이벤트 핸들러 함수를 등록합니다.
@param {optional ?} target - 이벤트 핸들러 오브젝트. 호출 함수의 this 로
정해집니다. 주어지지 않을 경우, window 오브젝트로 정해집니다.

@paramset 한개 이상의 이벤트를 등록할 경우
@param {Object} args - 이벤트 어레이 파라미터
@... {String} args.key - event 와 같음
@... {Function | Function[]} args[args.key] - fn 과 같음
@param {optional ?} target - target.

@author 조준호
@since 1.1.6
@version 1.1.6
*/
proto.dispose = dispose;
function dispose(level, others) {'use strict';
	level = level || 0;
	var i,
		val;
	if (level !== 0) {
		// deep dispose
		for (i in this) {
			if (this.hasOwnProperty(i)) {
				val = this[i];
				if (val) {
					// filter out null and some primitive check
					if (val.dispose) {
						// use dispose if possible
						val.dispose(level - 1, others);
					}
					else if (others && typeof val == 'object') {
						// array or object
						if (isArray(val)) {
							val.length = 0;
						}
						else {
							dispose.call(val, level - 1, others);
						}
					}
				}
				delete this[i];
			}
		}
	}
	else {
		// shallow dispose
		for (i in this) {
			if (this.hasOwnProperty(i)) {
				delete this[i];
			}
		}
	}
};

JGM.lang.Disposable = Disposable;

}());
