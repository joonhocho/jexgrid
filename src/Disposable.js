goog.require('jx.util');

goog.provide('jx.lang.Disposable');

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

	var Util.goog.getObjectByName('jx.util');
 goog.exportSymbol('jx.lang.Disposable', Disposable);
 goog.exportProperty(Disposable.prototype, 'dispose', dispose);

 /**
   Grid 의 이벤트를 담당하는 모듈. 모듈들 간의 원활한 커뮤니케이트를 가능하게
   합니다.
   @module JGM.lang.Disposable
   */

 /**
   Grid 이벤트 매니저 클래스. Grid 의 모듈 들간의 커뮤니케이션은 이 클래스를
   통해 이벤트를 레지스터/트리거 함으로써 이루어집니다. 직접 다른 모듈의 함수를
   호출하는 방법도 있지만 이벤트를 통하면 다른 모듈 인스턴스의 존재 유무 또는
   이름을 알지 못 하여도 상호 커뮤니케이트 할 수 있는 장점이 있습니다.

   @class {Disposable} JGM.lang.Disposable

   @author 조준호
   @since 1.0.0
   @version 1.1.7
   */

 /**
   Disposable 컨스트럭터 입니다.

   @constructor

   @author 조준호
   @since 1.0.0
   @version 1.0.0
   */
 function Disposable(args) {
 }

 var proto = Disposable.prototype,
	 isArray = Util.isArray;

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


}());
