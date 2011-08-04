console && console.log && console.log('reading javascript source "Disposable.js"...');//IF_DEBUG

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

 var util = goog.getObjectByName('jx.util');
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
	 isArray = util.isArray;

 /**
  * @param {*} a to compare against
  * @param {*} b to compare against
  * @param {?Array.<string>=} compareOnly attribute names to compare
  * @param {?number=} level deep level
  */
 util.equals = Object.equals = function(a, b, compareOnly, level) {
	 if (typeof a == 'object') {
		 return equals.call(a, b, compareOnly, level);
	 }
	 else {
		 // checking NaN
		 return a !== a && b !== b;
	 }
 }

 /**
  * @param {*} a to dispose
  * @param {?number=} level deep level
  * @param {?boolean=} others compare non-disposables
  */
 util.dispose = Object.dispose = function(a, level, others) {
	 if (typeof a == 'object') {
		 return dispose.call(a, level, others);
	 }
	 // checking NaN
 }

 proto.equals = equals;
 proto.dispose = dispose;

 /**
  * @param {*} obj to compare against
  * @param {?Array.<string>=} compareOnly attribute names to compare
  * @param {?number=} level deep level
  */
 function equals(obj, compareOnly, level) {'use strict';
	 if (typeof obj != 'object') {
		 // if obj is not object return false
		 return false;
	 }
	 var i,
		 val,
		 oval;
	 if (compareOnly) {
		 var j = 0, l = compareOnly.length;
		 for (; j < l; j++) {
			 i = compareOnly[j];
			 if (this.hasOwnProperty(i)) {
				 if (obj.hasOwnProperty(i)) {
					 val = this[i];
					 oval = obj[i];
					 if (val !== obj) {
						 // checking NaN
						 if (!(val === val || oval === oval)) {
							 return false;
						 }
					 }
				 }
				 else {
					 return false;
				 }
			 }
			 else if (obj.hasOwnProperty(i)) {
				 return false;
			 }
		 }
	 }
	 else {
		 if (level) {
			 // deep comparison
			 for (i in this) {
				 if (this.hasOwnProperty(i)) {
					 if (!obj.hasOwnProperty(i)) {
						 return false;
					 }
					 val = this[i];
					 oval = obj[i];
					 if (val !== oval) {
						 if (val) {
							 // filter out null and some primitive check
							 if (typeof val != 'object' || typeof oval != 'object') {
								 // if either of them is not object return false
								 return false;
							 }
							 if (val.equals) {
								 // use equals if possible
								 if (!val.equals(oval, null, level - 1)) {
									 return false;
								 }
							 }
							 else if (oval.equals) {
								 // use equals if possible
								 if (!oval.equals(val, null, level - 1)) {
									 return false;
								 }
							 }
							 // use equals if possible
							 if (!equals.call(val, oval, null, level - 1)) {
								 return false;
							 }
						 }
						 else {
							 // checking NaN
							 if (!(val === val || oval === oval)) {
								 return false;
							 }
						 }
					 }
				 }
			 }
			 for (i in obj) {
				 if (obj.hasOwnProperty(i) && !this.hasOwnProperty(i)) {
					 return false;
				 }
			 }
		 }
		 else {
			 // shallow comparison
			 for (i in this) {
				 if (this.hasOwnProperty(i)) {
					 if (obj.hasOwnProperty(i)) {
						 val = this[i];
						 oval = obj[i];
						 if (val !== obj) {
							 // checking NaN
							 if (!(val === val || oval === oval)) {
								 return false;
							 }
						 }
					 }
					 else {
						 return false;
					 }
				 }
			 }
			 for (i in obj) {
				 if (obj.hasOwnProperty(i) && !this.hasOwnProperty(i)) {
					 return false;
				 }
			 }
		 }
	 }
	 return true;
 }

 /**
  * @param {?number=} level deep level
  * @param {?boolean=} others compare non-disposables
  */
 function dispose(level, others) {'use strict';
	 if (this == window) {
		 return;
	 }
	 var i,
		 val;
	 if (level) {
		 // deep dispose
		 for (i in this) {
			 if (this.hasOwnProperty(i)) {
				 val = this[i];
				 if (val && typeof val == 'object') {
					 // filters null and non-objects
					 if (val.dispose) {
						 // use dispose if possible
						 val.dispose(level - 1, others);
					 }
					 else if (others) {
						 // dispose non-disposable objects
						 if (isArray(val)) {
							 val.length = 0;
						 }
						 dispose.call(val, level - 1, others);
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
