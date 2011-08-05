/**
 * JexGrid Build 16
 * Date: Fri Aug 5 15:47:48 KST 2011
 */
/*
AUTHOR

	The JexGrid was written and is maintained by:
		Joon Ho Cho <joonho1101@gmail.com>

COPYRIGHT

	Copyright (c) 2010-2011, WebCash Inc. All rights reserved.

LICENSE

	- JexGrid License Policy -

	JexGrid 는 상업적 용도로 사용될 경우와 개인 용도로 사용될 경우의 두가지 다른 라이센스 정책을 가집니다.
	상업적 용도로 사용될 경우 라이센스를 구매하여야 하고, 개인 용도로 사용될 경우에는 GNU GPL License Version 3 정책을 따릅니다.

	1. 상업용: Commercial Software License
		- 도메인 당 1억원의 라이센스 가격이 청구됩니다. (List Price 기준)
		- 웹케시 내부 개발 프로젝트에 사용될 경우는 다음의 정책을 따릅니다.
			- 개발 기간 기술지원 비용: 프로젝트 개발 인력 * 100만원 / 1년
			- 상품에 포함되어 외부로 판매되는 경우: 프로젝트 도메인 당 1000만원의 솔루션 가격이 청구됩니다.

	2. 개인용: Open Source License

		- GNU GPL License Version 3 라이센스의 원칙을 따릅니다.

		JexGrid - A Fast, Comprehensive, and Flexible JavaScript Grid Library
		Copyright (C) 2011  Joon Ho Cho

		This program is free software: you can redistribute it and/or modify
		it under the terms of the GNU General Public License as published by
		the Free Software Foundation, either version 3 of the License, or
		(at your option) any later version.

		This program is distributed in the hope that it will be useful,
		but WITHOUT ANY WARRANTY; without even the implied warranty of
		MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
		GNU General Public License for more details.

		You should have received a copy of the GNU General Public License
		along with this program.  If not, see <http://www.gnu.org/licenses/>.

		- 중요 내용 요약:
			- 상용 이용 가능
			- 결합 소스 공개의 의무
			- 특허 허용 제한
			- 라이센스 전파의 의무
			- JexGrid 작성자는 사용자 요청에 의한 버그 패치의 의무가 없습니다.

	어떠한 경우에도 사용자는 위의 라이센스 정책을 수정하거나 삭제할 수 없습니다.


// Copyright 2006 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
*/

(function(){console && console.log && console.log('reading javascript source "array_extention.js"...');
var array_extension = {};
(function() {
  var f = Array.prototype;
  if(!f.indexOf) {
    f.indexOf = function(f) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var e = Object(this), b = e.length >>> 0;
      if(b === 0) {
        return-1
      }
      var a = 0;
      arguments.length > 0 && (a = Number(arguments[1]), a !== a ? a = 0 : a !== 0 && a !== 1 / 0 && a !== -(1 / 0) && (a = (a > 0 || -1) * Math.floor(Math.abs(a))));
      if(a >= b) {
        return-1
      }
      for(a = a >= 0 ? a : Math.max(b - Math.abs(a), 0);a < b;a++) {
        if(a in e && e[a] === f) {
          return a
        }
      }
      return-1
    }
  }
  if(!f.lastIndexOf) {
    f.lastIndexOf = function(f) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var e = Object(this), b = e.length >>> 0;
      if(b === 0) {
        return-1
      }
      var a = b;
      arguments.length > 1 && (a = Number(arguments[1]), a !== a ? a = 0 : a !== 0 && a !== 1 / 0 && a !== -(1 / 0) && (a = (a > 0 || -1) * Math.floor(Math.abs(a))));
      for(b = a >= 0 ? Math.min(a, b - 1) : b - Math.abs(a);b >= 0;b--) {
        if(b in e && e[b] === f) {
          return b
        }
      }
      return-1
    }
  }
  if(!f.filter) {
    f.filter = function(f, e) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var b = Object(this), a = b.length >>> 0;
      if(typeof f !== "function") {
        throw new TypeError;
      }
      for(var d = [], c = 0;c < a;c++) {
        if(c in b) {
          var g = b[c];
          f.call(e, g, c, b) && d.push(g)
        }
      }
      return d
    }
  }
  if(!f.forEach) {
    f.forEach = function(f, e) {
      var b, a = Object(this), d = a.length >>> 0, c = 0;
      if(!f || !f.call) {
        throw new TypeError;
      }
      for(e && (b = e);c < d;) {
        var g = String(c);
        a.hasOwnProperty(g) && (g = a[g], f.call(b, g, c, a));
        c++
      }
    }
  }
  if(!f.every) {
    f.every = function(f, e) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var b = Object(this), a = b.length >>> 0;
      if(typeof f !== "function") {
        throw new TypeError;
      }
      for(var d = 0;d < a;d++) {
        if(d in b && !f.call(e, b[d], d, b)) {
          return!1
        }
      }
      return!0
    }
  }
  if(!f.map) {
    f.map = function(f, e) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var b = Object(this), a = b.length >>> 0;
      if(typeof f !== "function") {
        throw new TypeError;
      }
      for(var d = Array(a), c = 0;c < a;c++) {
        c in b && (d[c] = f.call(e, b[c], c, b))
      }
      return d
    }
  }
  if(!f.some) {
    f.some = function(f, e) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var b = Object(this), a = b.length >>> 0;
      if(typeof f !== "function") {
        throw new TypeError;
      }
      for(var d = 0;d < a;d++) {
        if(d in b && f.call(e, b[d], d, b)) {
          return!0
        }
      }
      return!1
    }
  }
  if(!f.reduce) {
    f.reduce = function(f) {
      var e, b = this.length, a;
      if(typeof f !== "function") {
        throw new TypeError("First argument is not callable");
      }
      if((b == 0 || b === null) && arguments.length <= 1) {
        throw new TypeError("Array length is 0 and no second argument");
      }
      arguments.length <= 1 ? (a = this[0], e = 1) : a = arguments[1];
      for(e = e || 0;e < b;++e) {
        e in this && (a = f.call(void 0, a, this[e], e, this))
      }
      return a
    }
  }
  if(!f.reduceRight) {
    f.reduceRight = function(f) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var e = Object(this), b = e.length >>> 0;
      if(typeof f !== "function") {
        throw new TypeError;
      }
      if(b === 0 && arguments.length === 1) {
        throw new TypeError;
      }
      b -= 1;
      var a;
      if(arguments.length >= 2) {
        a = arguments[1]
      }else {
        do {
          if(b in this) {
            a = this[b--];
            break
          }
          if(--b < 0) {
            throw new TypeError;
          }
        }while(1)
      }
      for(;b >= 0;) {
        b in e && (a = f.call(void 0, a, e[b], b, e)), b--
      }
      return a
    }
  }
})();
console && console.log && console.log('reading javascript source "engine_extension.js"...');
var engine_extension = {};
(function() {
  var f = Number.prototype, h = String.prototype, e = Array.prototype;
  if(!f.toFixedFloat) {
    f.toFixedFloat = function(b) {
      return parseFloat(this.toFixed(b))
    }
  }
  if(!h.toInt) {
    h.toInt = function() {
      var b;
      if((b = this.replace(/[^\d\.\-]/g, "")).length === 0) {
        return NaN
      }
      for(var a, d = 0, c = 0, g = b.length, l = 0, j = !1;l < g;l++) {
        if(a = b.charAt(l), a === ".") {
          if(++d === 2) {
            j = !0;
            break
          }
        }else {
          if(a === "-" && ++c === 2) {
            j = !0;
            break
          }
        }
      }
      return j === !0 && (b = b.replace(/[\.\-]/g, "")).length === 0 ? NaN : /^-*0*\./.test(b) || (b = b.replace(/^-0+/, "-")).length === 0 || (b = b.replace(/^0+/, "")).length === 0 ? 0 : parseInt(b, 10)
    }
  }
  if(!h.toFloat) {
    h.toFloat = function() {
      var b;
      if((b = this.replace(/[^-\d\.]/g, "")).length === 0) {
        return NaN
      }
      for(var a = 0, d = b.length, c, g = 0, l = 0;a < d;a++) {
        if(c = b.charAt(a), c === ".") {
          if(g !== 0) {
            return NaN
          }else {
            g++
          }
        }else {
          if(c === "-") {
            if(l !== 0) {
              return NaN
            }else {
              l++
            }
          }
        }
      }
      return parseFloat(b)
    }
  }
  if(!e.remove) {
    e.remove = function(b) {
      if(this.length === 0) {
        return-1
      }
      b = this.indexOf(b);
      b !== -1 && this.splice(b, 1);
      return b
    }
  }
  if(!e.removeAll) {
    e.removeAll = function(b) {
      if(this.length === 0) {
        return this
      }
      for(var a = this.length;(a = this.lastIndexOf(b, a - 1)) !== -1;) {
        if(this.splice(a, 1), a === 0) {
          break
        }
      }
      return this
    }
  }
  if(!e.removeList) {
    e.removeList = function(b) {
      if(this.length === 0 || b.length === 0) {
        return this
      }
      for(var a = b.length, d = 0, c;d < a;d++) {
        (c = this.indexOf(b[d])) !== -1 && this.splice(c, 1)
      }
      return this
    }
  }
  if(!e.removeAt) {
    e.removeAt = function(b) {
      if(this.length !== 0 && (b < 0 && (b = this.length + b), b < 0 && (b = 0), this.hasOwnProperty(b) && b < this.length)) {
        return this.splice(b, 1)[0]
      }
    }
  }
  if(!e.addAt) {
    e.addAt = function(b, a) {
      this.splice(b, 0, a);
      return a
    }
  }
  if(!e.pushList) {
    e.pushList = function(b) {
      return b.length === 0 ? this.length : e.push.apply(this, b)
    }
  }
  if(!e.pushListAt) {
    e.pushListAt = function(b, a) {
      if(a.length === 0) {
        return this.length
      }
      var d = [b, 0];
      e.push.apply(d, a);
      e.splice.apply(this, d);
      return this.length
    }
  }
})();
var COMPILED = !0, goog = goog || {};
goog.global = window;
window.goog = goog;
goog.DEBUG = !0;
goog.LOCALE = "en";
goog.provide = function(f) {
  if(!COMPILED) {
    if(goog.isProvided_(f)) {
      throw Error('Namespace "' + f + '" already declared.');
    }
    delete goog.implicitNamespaces_[f];
    for(var h = f;h = h.substring(0, h.lastIndexOf("."));) {
      if(goog.getObjectByName(h)) {
        break
      }
      goog.implicitNamespaces_[h] = !0
    }
  }
  goog.exportSymbol_(f)
};
goog.setTestOnly = function(f) {
  if(COMPILED && !goog.DEBUG) {
    throw f = f || "", Error("Importing test-only code into non-debug environment" + f ? ": " + f : ".");
  }
};
if(!COMPILED) {
  goog.isProvided_ = function(f) {
    return!goog.implicitNamespaces_[f] && !!goog.getObjectByName(f)
  }, goog.implicitNamespaces_ = {}
}
goog.exportSymbol_ = function(f, h, e) {
  f = f.split(".");
  e = e || goog.global;
  !(f[0] in e) && e.execScript && e.execScript("var " + f[0]);
  for(var b;f.length && (b = f.shift());) {
    !f.length && goog.isDef(h) ? e[b] = h : e = e[b] ? e[b] : e[b] = {}
  }
};
goog.getObjectByName = function(f, h) {
  for(var e = f.split("."), b = h || goog.global, a;a = e.shift();) {
    if(goog.isDefAndNotNull(b[a])) {
      b = b[a]
    }else {
      return null
    }
  }
  return b
};
goog.globalize = function(f, h) {
  var e = h || goog.global, b;
  for(b in f) {
    e[b] = f[b]
  }
};
goog.addDependency = function(f, h, e) {
  if(!COMPILED) {
    for(var b, f = f.replace(/\\/g, "/"), a = goog.dependencies_, d = 0;b = h[d];d++) {
      a.nameToPath[b] = f, f in a.pathToNames || (a.pathToNames[f] = {}), a.pathToNames[f][b] = !0
    }
    for(b = 0;h = e[b];b++) {
      f in a.requires || (a.requires[f] = {}), a.requires[f][h] = !0
    }
  }
};
goog.ENABLE_DEBUG_LOADER = !0;
goog.require = function(f) {
  if(!COMPILED && !goog.isProvided_(f)) {
    if(goog.ENABLE_DEBUG_LOADER) {
      var h = goog.getPathFromDeps_(f);
      if(h) {
        goog.included_[h] = !0;
        goog.writeScripts_();
        return
      }
    }
    f = "goog.require could not find: " + f;
    goog.global.console && goog.global.console.error(f);
    throw Error(f);
  }
};
goog.basePath = "";
goog.nullFunction = function() {
};
goog.identityFunction = function(f) {
  return f
};
goog.abstractMethod = function() {
  throw Error("unimplemented abstract method");
};
goog.addSingletonGetter = function(f) {
  f.getInstance = function() {
    return f.instance_ || (f.instance_ = new f)
  }
};
if(!COMPILED && goog.ENABLE_DEBUG_LOADER) {
  goog.included_ = {}, goog.dependencies_ = {pathToNames:{}, nameToPath:{}, requires:{}, visited:{}, written:{}}, goog.inHtmlDocument_ = function() {
    var f = goog.global.document;
    return typeof f != "undefined" && "write" in f
  }, goog.findBasePath_ = function() {
    if(goog.global.CLOSURE_BASE_PATH) {
      goog.basePath = goog.global.CLOSURE_BASE_PATH
    }else {
      if(goog.inHtmlDocument_()) {
        for(var f = goog.global.document.getElementsByTagName("script"), h = f.length - 1;h >= 0;--h) {
          var e = f[h].src, b = e.lastIndexOf("?"), b = b == -1 ? e.length : b;
          if(e.substr(b - 7, 7) == "base.js") {
            goog.basePath = e.substr(0, b - 7);
            break
          }
        }
      }
    }
  }, goog.importScript_ = function(f) {
    var h = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_;
    !goog.dependencies_.written[f] && h(f) && (goog.dependencies_.written[f] = !0)
  }, goog.writeScriptTag_ = function(f) {
    return goog.inHtmlDocument_() ? (goog.global.document.write('<script type="text/javascript" src="' + f + '"><\/script>'), !0) : !1
  }, goog.writeScripts_ = function() {
    function f(a) {
      if(!(a in b.written)) {
        if(!(a in b.visited) && (b.visited[a] = !0, a in b.requires)) {
          for(var c in b.requires[a]) {
            if(!goog.isProvided_(c)) {
              if(c in b.nameToPath) {
                f(b.nameToPath[c])
              }else {
                throw Error("Undefined nameToPath for " + c);
              }
            }
          }
        }
        a in e || (e[a] = !0, h.push(a))
      }
    }
    var h = [], e = {}, b = goog.dependencies_, a;
    for(a in goog.included_) {
      b.written[a] || f(a)
    }
    for(a = 0;a < h.length;a++) {
      if(h[a]) {
        goog.importScript_(goog.basePath + h[a])
      }else {
        throw Error("Undefined script input");
      }
    }
  }, goog.getPathFromDeps_ = function(f) {
    return f in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[f] : null
  }, goog.findBasePath_()
}
goog.typeOf = function(f) {
  var h = typeof f;
  if(h == "object") {
    if(f) {
      if(f instanceof Array) {
        return"array"
      }else {
        if(f instanceof Object) {
          return h
        }
      }
      var e = Object.prototype.toString.call(f);
      if(e == "[object Window]") {
        return"object"
      }
      if(e == "[object Array]" || typeof f.length == "number" && typeof f.splice != "undefined" && typeof f.propertyIsEnumerable != "undefined" && !f.propertyIsEnumerable("splice")) {
        return"array"
      }
      if(e == "[object Function]" || typeof f.call != "undefined" && typeof f.propertyIsEnumerable != "undefined" && !f.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if(h == "function" && typeof f.call == "undefined") {
      return"object"
    }
  }
  return h
};
goog.propertyIsEnumerableCustom_ = function(f, h) {
  if(h in f) {
    for(var e in f) {
      if(e == h && Object.prototype.hasOwnProperty.call(f, h)) {
        return!0
      }
    }
  }
  return!1
};
goog.propertyIsEnumerable_ = function(f, h) {
  return f instanceof Object ? Object.prototype.propertyIsEnumerable.call(f, h) : goog.propertyIsEnumerableCustom_(f, h)
};
goog.isDef = function(f) {
  return f !== void 0
};
goog.isNull = function(f) {
  return f === null
};
goog.isDefAndNotNull = function(f) {
  return f != null
};
goog.isArray = function(f) {
  return goog.typeOf(f) == "array"
};
goog.isArrayLike = function(f) {
  var h = goog.typeOf(f);
  return h == "array" || h == "object" && typeof f.length == "number"
};
goog.isDateLike = function(f) {
  return goog.isObject(f) && typeof f.getFullYear == "function"
};
goog.isString = function(f) {
  return typeof f == "string"
};
goog.isBoolean = function(f) {
  return typeof f == "boolean"
};
goog.isNumber = function(f) {
  return typeof f == "number"
};
goog.isFunction = function(f) {
  return goog.typeOf(f) == "function"
};
goog.isObject = function(f) {
  f = goog.typeOf(f);
  return f == "object" || f == "array" || f == "function"
};
goog.getUid = function(f) {
  return f[goog.UID_PROPERTY_] || (f[goog.UID_PROPERTY_] = ++goog.uidCounter_)
};
goog.removeUid = function(f) {
  "removeAttribute" in f && f.removeAttribute(goog.UID_PROPERTY_);
  try {
    delete f[goog.UID_PROPERTY_]
  }catch(h) {
  }
};
goog.UID_PROPERTY_ = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36);
goog.uidCounter_ = 0;
goog.getHashCode = goog.getUid;
goog.removeHashCode = goog.removeUid;
goog.cloneObject = function(f) {
  var h = goog.typeOf(f);
  if(h == "object" || h == "array") {
    if(f.clone) {
      return f.clone()
    }
    var h = h == "array" ? [] : {}, e;
    for(e in f) {
      h[e] = goog.cloneObject(f[e])
    }
    return h
  }
  return f
};
goog.bindNative_ = function(f, h, e) {
  return f.call.apply(f.bind, arguments)
};
goog.bindJs_ = function(f, h, e) {
  if(!f) {
    throw Error();
  }
  if(arguments.length > 2) {
    var b = Array.prototype.slice.call(arguments, 2);
    return function() {
      var a = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(a, b);
      return f.apply(h, a)
    }
  }else {
    return function() {
      return f.apply(h, arguments)
    }
  }
};
goog.bind = function(f, h, e) {
  goog.bind = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? goog.bindNative_ : goog.bindJs_;
  return goog.bind.apply(null, arguments)
};
goog.partial = function(f, h) {
  var e = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, e);
    return f.apply(this, b)
  }
};
goog.mixin = function(f, h) {
  for(var e in h) {
    f[e] = h[e]
  }
};
goog.now = Date.now || function() {
  return+new Date
};
goog.globalEval = function(f) {
  if(goog.global.execScript) {
    goog.global.execScript(f, "JavaScript")
  }else {
    if(goog.global.eval) {
      if(goog.evalWorksForGlobals_ == null) {
        goog.global.eval("var _et_ = 1;"), typeof goog.global._et_ != "undefined" ? (delete goog.global._et_, goog.evalWorksForGlobals_ = !0) : goog.evalWorksForGlobals_ = !1
      }
      if(goog.evalWorksForGlobals_) {
        goog.global.eval(f)
      }else {
        var h = goog.global.document, e = h.createElement("script");
        e.type = "text/javascript";
        e.defer = !1;
        e.appendChild(h.createTextNode(f));
        h.body.appendChild(e);
        h.body.removeChild(e)
      }
    }else {
      throw Error("goog.globalEval not available");
    }
  }
};
goog.evalWorksForGlobals_ = null;
goog.getCssName = function(f, h) {
  var e = function(a) {
    return goog.cssNameMapping_[a] || a
  }, b;
  b = goog.cssNameMapping_ ? goog.cssNameMappingStyle_ == "BY_WHOLE" ? e : function(a) {
    for(var a = a.split("-"), d = [], c = 0;c < a.length;c++) {
      d.push(e(a[c]))
    }
    return d.join("-")
  } : function(a) {
    return a
  };
  return h ? f + "-" + b(h) : b(f)
};
goog.setCssNameMapping = function(f, h) {
  goog.cssNameMapping_ = f;
  goog.cssNameMappingStyle_ = h
};
goog.getMsg = function(f, h) {
  var e = h || {}, b;
  for(b in e) {
    var a = ("" + e[b]).replace(/\$/g, "$$$$"), f = f.replace(RegExp("\\{\\$" + b + "\\}", "gi"), a)
  }
  return f
};
goog.exportSymbol = function(f, h, e) {
  goog.exportSymbol_(f, h, e)
};
goog.exportProperty = function(f, h, e) {
  f[h] = e
};
goog.inherits = function(f, h) {
  function e() {
  }
  e.prototype = h.prototype;
  f.superClass_ = h.prototype;
  f.prototype = new e;
  f.prototype.constructor = f
};
goog.base = function(f, h, e) {
  var b = arguments.callee.caller;
  if(b.superClass_) {
    return b.superClass_.constructor.apply(f, Array.prototype.slice.call(arguments, 1))
  }
  for(var a = Array.prototype.slice.call(arguments, 2), d = !1, c = f.constructor;c;c = c.superClass_ && c.superClass_.constructor) {
    if(c.prototype[h] === b) {
      d = !0
    }else {
      if(d) {
        return c.prototype[h].apply(f, a)
      }
    }
  }
  if(f[h] === b) {
    return f.constructor.prototype[h].apply(f, a)
  }else {
    throw Error("goog.base called from a method of one name to a method of a different name");
  }
};
goog.scope = function(f) {
  f.call(goog.global)
};
console && console.log && console.log('reading javascript source "util.js"...');
var jx = {util:{}}, Util = {}, echo = {};
(function() {
  var f = window.console, h = [], e;
  e = f && f.log ? function(b) {
    for(var a = 0, d = arguments.length;a < d;a++) {
      f.log(arguments[a])
    }
  } : function(b) {
    h.push.apply(h, arguments)
  };
  goog.exportSymbol("jx.util", Util);
  goog.exportSymbol("Util", Util);
  goog.exportSymbol("echo", e);
  Util.isNull = function(b) {
    return b == null
  };
  Util.isNotNull = function(b) {
    return b != null
  };
  Util.isNullAnd = function() {
    for(var b = 0, a = arguments.length;b < a;b++) {
      if(arguments[b] != null) {
        return!1
      }
    }
    return!0
  };
  Util.isNullOr = function() {
    for(var b = 0, a = arguments.length;b < a;b++) {
      if(arguments[b] == null) {
        return!0
      }
    }
    return!1
  };
  Util.isNotNullAnd = function() {
    for(var b = 0, a = arguments.length;b < a;b++) {
      if(arguments[b] == null) {
        return!1
      }
    }
    return!0
  };
  Util.isNotNullOr = function() {
    for(var b = 0, a = arguments.length;b < a;b++) {
      if(arguments[b] != null) {
        return!0
      }
    }
    return!1
  };
  Util.ifNull = function(b, a, d) {
    return b == null ? a : d === void 0 ? b : d
  };
  Util.ifTrue = function(b, a, d) {
    return b === !0 ? a : d === void 0 ? b : d
  };
  Util.isFunction = function(b) {
    return typeof b == "function"
  };
  Util.isString = function(b) {
    return typeof b == "string"
  };
  Util.isNumber = function(b) {
    return typeof b == "number"
  };
  Util.isObject = function(b) {
    return typeof b == "object"
  };
  Util.isArray = function(b) {
    var a = Array.isArray;
    return b && typeof b == "object" && (a && a(b) || typeof b.length == "number" && b.hasOwnProperty("length") && !b.propertyIsEnumerable("length"))
  };
  Util.split = function(b, a, d, c) {
    if(typeof b !== "string") {
      return[]
    }
    a = a === void 0 ? /\s+/ : a;
    d = d === void 0 ? function(a) {
      return!!a
    } : d;
    c = c === void 0 ? function(a) {
      return $.trim(a)
    } : c;
    b = b.split(a);
    c && (b = b.map(c));
    d && (b = b.filter(d));
    return b
  };
  Util.isEmpty = function(b) {
    if(!b) {
      return!0
    }
    if(typeof b != "object") {
      return!1
    }
    for(var a in b) {
      if(b.hasOwnProperty(a)) {
        return!1
      }
    }
    return!0
  };
  Util.isEmptyObj = function(b) {
    if(b == null) {
      return!0
    }
    if(typeof b != "object") {
      return!1
    }
    for(var a in b) {
      if(b.hasOwnProperty(a)) {
        return!1
      }
    }
    return!0
  };
  Util.isNotEmptyObj = function(b) {
    if(b == null || typeof b != "object") {
      return!1
    }
    for(var a in b) {
      if(b.hasOwnProperty(a)) {
        return!0
      }
    }
    return!1
  };
  Util.isEmptyString = function(b) {
    return b == null || b === ""
  };
  Util.isEmptyArray = function(b) {
    if(b == null) {
      return!0
    }
    if(!Util.isArray(b)) {
      return!1
    }
    for(var a = 0, d = b.length;a < d;a++) {
      if(b.hasOwnProperty(a)) {
        return!1
      }
    }
    return!0
  };
  Util.emptyObject = function(b) {
    if(!b || typeof b != "object") {
      return b
    }
    if(Util.isArray(b)) {
      return b.length = 0, b
    }
    for(var a in b) {
      b.hasOwnProperty(a) && delete b[a]
    }
    return b
  };
  Util.deleteUndefined = function(b) {
    if(!b || typeof b != "object") {
      return b
    }
    var a;
    if(Util.isArray(b)) {
      for(a = b.length - 1;a > -1;a--) {
        b.hasOwnProperty(a) && b[a] === void 0 && b.splice(a, 1)
      }
      return b
    }
    for(a in b) {
      b.hasOwnProperty(a) && b[a] === void 0 && delete b[a]
    }
    return b
  };
  Util.deepClone = function(b) {
    if(!b) {
      return b
    }
    switch(typeof b) {
      case "boolean":
      ;
      case "number":
      ;
      case "string":
      ;
      case "function":
        return b
    }
    if(Util.isArray(b)) {
      for(var a = [], d = 0, c = b.length;d < c;d++) {
        d in b && (a[d] = Util.deepClone(b[d]))
      }
      return a
    }
    a = {};
    for(d in b) {
      b.hasOwnProperty(d) && (a[d] = Util.deepClone(b[d]))
    }
    return a
  };
  Util.clone = function(b, a, d) {
    if(!b) {
      return b
    }
    switch(typeof b) {
      case "boolean":
      ;
      case "number":
      ;
      case "string":
      ;
      case "function":
        return b
    }
    if(Util.isArray(b)) {
      if(d === 1) {
        return Array.prototype.slice.call(b)
      }
      for(var c = [], g = b.length, l = 0, d = d !== void 0 ? d - 1 : void 0;l < g;l++) {
        l in b && (c[l] = Util.clone(b[l], a, d))
      }
      return c
    }
    c = {};
    g = Util.isEmptyObj(a);
    if(d === 1) {
      if(g) {
        for(l in b) {
          b.hasOwnProperty(l) && (c[l] = b[l])
        }
      }else {
        for(l in a) {
          a.hasOwnProperty(l) && b.hasOwnProperty(l) && (c[l] = b[l])
        }
      }
    }else {
      if(d = d !== void 0 ? d - 1 : void 0, g) {
        for(l in b) {
          b.hasOwnProperty(l) && (c[l] = Util.clone(b[l], void 0, d))
        }
      }else {
        for(l in a) {
          a.hasOwnProperty(l) && b.hasOwnProperty(l) && (c[l] = Util.clone(b[l], void 0, d))
        }
      }
    }
    return c
  };
  Util.toArray = function(b) {
    var a = [], d;
    for(d in b) {
      b.hasOwnProperty(d) && a.push(b[d])
    }
    return a
  };
  Util.toArrayWithKey = function(b) {
    var a = [], d;
    for(d in b) {
      b.hasOwnProperty(d) && a.push({key:d, val:b[d]})
    }
    return a
  };
  Util.random = function(b) {
    return Math.floor(b * Math.random())
  };
  Util.bound = function(b, a, d) {
    isNaN(d) || (b = Math.min(b, d));
    isNaN(a) || (b = Math.max(b, a));
    return b
  };
  Util.callFn = function() {
    return arguments.length <= 3 ? arguments[1].call(arguments[0], arguments[2]) : arguments[1].apply(arguments[0], Array.prototype.slice.call(arguments, 2))
  };
  Util.formatNumber = function(b, a, d, c, g) {
    var d = d === void 0 ? "&#8361; " : d, a = isNaN(a) ? 0 : a, c = c === void 0 ? "." : c, g = g === void 0 ? "," : g, l = b < 0 ? "-" : "", j = parseInt(b = Math.abs(+b || 0).toFixed(a), 10) + "", i = j.length, i = i > 3 ? i % 3 : 0;
    return d + l + (i ? j.substr(0, i) + g : "") + j.substr(i).replace(/(\d{3})(?=\d)/g, "$1" + g) + (a ? c + Math.abs(b - j).toFixed(a).slice(2) : "")
  };
  Util.getBodyScroll = function() {
    var b = 0, a = 0;
    if(typeof window.pageYOffset === "number") {
      a = window.pageYOffset, b = window.pageXOffset
    }else {
      if(document.body && (document.body.scrollLeft || document.body.scrollTop)) {
        a = document.body.scrollTop, b = document.body.scrollLeft
      }else {
        if(document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
          a = document.documentElement.scrollTop, b = document.documentElement.scrollLeft
        }
      }
    }
    return[b, a]
  };
  Util.hasClass = function(b, a) {
    if(b == null || a == null) {
      return!1
    }
    if(b.className === a) {
      return!0
    }
    if(b.className) {
      for(var d = b.classList ? b.classList : Util.split(b.className), c = 0, g = d.length;c < g;c++) {
        if(d[c] === a) {
          return!0
        }
      }
    }
    return!1
  };
  Util.hasTagAndClass = function(b, a, d) {
    if(b == null || a == null || d == null) {
      return!1
    }
    if(b.tagName === a) {
      if(b.className === d) {
        return!0
      }
      if(b.className && b.className.length >= d.length) {
        for(var b = b.classList ? b.classList : Util.split(b.className), a = 0, c = b.length;a < c;a++) {
          if(b[a] === d) {
            return!0
          }
        }
      }
    }
    return!1
  };
  Util.closest = function(b, a, d) {
    if(Util.hasClass(b, a)) {
      return b
    }
    for(b = b.parentNode;Util.isNotNull(b) && b !== d;b = b.parentNode) {
      if(Util.hasClass(b, a)) {
        return b
      }
    }
  };
  Util.closestWithTag = function(b, a, d, c) {
    if(Util.hasTagAndClass(b, a, d)) {
      return b
    }
    for(b = b.parentNode;Util.isNotNull(b) && b !== c;b = b.parentNode) {
      if(Util.hasTagAndClass(b, a, d)) {
        return b
      }
    }
  };
  Util.findFirstByClass = function(b, a) {
    if(b != null) {
      if(Util.hasClass(b, a)) {
        return b
      }
      for(var d = 0, c = b.childNodes, g = c.length, l;d < g;d++) {
        if(Util.isNotNull(c[d]) && (l = Util.findFirstByClass(c[d], a)) !== void 0) {
          return l
        }
      }
    }
  };
  Util.findFirstByTagAndClass = function(b, a, d) {
    if(b != null) {
      if(Util.hasTagAndClass(b, a, d)) {
        return b
      }
      for(var c = 0, b = b.childNodes, g = b.length, l;c < g;c++) {
        if(Util.isNotNull(b[c]) && (l = Util.findFirstByTagAndClass(b[c], a, d)) !== void 0) {
          return l
        }
      }
    }
  };
  Util.findByClass = function(b, a, d) {
    d === void 0 && (d = []);
    if(b == null) {
      return d
    }
    Util.hasClass(b, a) && d.push(b);
    for(var c = 0, b = b.childNodes, g = b.length;c < g;c++) {
      Util.isNotNull(b[c]) && Util.findByClass(b[c], a, d)
    }
    return d
  };
  Util.findByTagAndClass = function(b, a, d, c) {
    c === void 0 && (c = []);
    if(b == null) {
      return c
    }
    Util.hasTagAndClass(b, a, d) && c.push(b);
    for(var g = 0, b = b.childNodes, l = b.length;g < l;g++) {
      Util.isNotNull(b[g]) && Util.findByTagAndClass(b[g], a, d, c)
    }
    return c
  };
  Util.getHead = function() {
    return document.head ? document.head : document.getElementsByTagName("head")[0]
  };
  Util.appendTag = function(b, a) {
    return b.appendChild(document.createElement(a))
  };
  Util.appendHTML = function(b, a) {
    var d = document.createElement("div"), c, g = 0, l = [];
    d.innerHTML = a;
    for(c = d.childNodes.length;g < c;g++) {
      l.push(b.appendChild(d.firstChild))
    }
    return l
  };
  Util.createStyle = function(b) {
    b == null && (b = "");
    var a = document.createElement("style");
    a.type = "text/css";
    a.rel = "stylesheet";
    a.styleSheet ? a.styleSheet.cssText = b : a.appendChild(document.createTextNode(b));
    Util.getHead().appendChild(a);
    return a
  };
  Util.removeStyle = function(b) {
    b != null && b.parentNode != null && Util.getHead().removeChild(b)
  };
  Util.setStyle = function(b, a) {
    return b == null ? "" : b.styleSheet ? b.styleSheet.cssText = a : b.childNodes[0].nodeValue = a
  };
  Util.appendStyle = function(b, a) {
    return b == null ? "" : b.styleSheet ? b.styleSheet.cssText += a : b.childNodes[0].nodeValue += a
  };
  Util.getStyle = function(b) {
    return b == null ? "" : b.styleSheet ? b.styleSheet.cssText : b.childNodes[0].nodeValue
  };
  Util.appendScript = function(b) {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.text ? a.text = b : a.innerHTML = b;
    Util.getHead().appendChild(a);
    return a
  };
  Util.appendScriptFile = function(b) {
    document.write('<script type="text/javascript" src="' + b + '"><\/script>')
  };
  Util.outerHTML = function(b) {
    if(b.outerHTML === void 0) {
      var a = document.createElement("div");
      a.appendChild(b.cloneNode(!0));
      return a.innerHTML
    }
    return b.outerHTML
  };
  Util.index = function(b) {
    for(var a = 0;(b = b.previousSibling) != null;) {
      ++a
    }
    return a
  };
  Util.contains = function(b, a, d) {
    for(;a != null;) {
      if(a === b) {
        return!0
      }
      if(a === d) {
        break
      }
      a = a.parentNode
    }
    return!1
  };
  Util.areEqualArrays = function(b, a) {
    if(b == null || a == null) {
      return!1
    }
    if(b === a) {
      return!0
    }
    if(b.length !== a.length) {
      return!1
    }
    for(var d = 0, c = b.length;d < c;d++) {
      if(b.hasOwnProperty(d) && !a.hasOwnProperty(d) || a.hasOwnProperty(d) && !b.hasOwnProperty(d) || b[d] !== a[d]) {
        return!1
      }
    }
    return!0
  };
  Util.areEqualObjects = function(b, a) {
    if(b == null || a == null) {
      return!1
    }
    if(b === a) {
      return!0
    }
    if(typeof b !== "object" || typeof a !== "object") {
      return!1
    }
    for(var d in b) {
      if(b.hasOwnProperty(d) && (!a.hasOwnProperty(d) || b[d] !== a[d])) {
        return!1
      }
    }
    for(d in a) {
      if(a.hasOwnProperty(d) && (!b.hasOwnProperty(d) || b[d] !== a[d])) {
        return!1
      }
    }
    return!0
  };
  Util.areEqualComplex = function(b, a, d) {
    if(b == null || a == null) {
      return!1
    }
    if(b === a) {
      return!0
    }
    var c = d.length, g = d[0];
    if(c === 1) {
      return g === "array" ? Util.areEqualArrays(b, a) : Util.areEqualObjects(b, a)
    }
    if(c > 1) {
      d = d.slice(1);
      c = 0;
      if(g === "array") {
        if(b.length !== a.length) {
          return!1
        }
        for(g = b.length;c < g;c++) {
          if(!a.hasOwnProperty(c) || !Util.areEqualComplex(b[c], a[c], d)) {
            return!1
          }
        }
      }else {
        for(c in b) {
          if(b.hasOwnProperty(c) && (!a.hasOwnProperty(c) || !Util.areEqualComplex(b[c], a[c], d))) {
            return!1
          }
        }
        for(c in a) {
          if(a.hasOwnProperty(c) && (!b.hasOwnProperty(c) || !Util.areEqualComplex(b[c], a[c], d))) {
            return!1
          }
        }
      }
      return!0
    }
  };
  Util.typeCheck = function(b, a, d, c, g) {
    if(d && a === void 0 || c && a === null) {
      return!0
    }
    switch(typeof b) {
      case "string":
        if(typeof a === b) {
          return!0
        }
        break;
      case "function":
        if(a instanceof b) {
          return!0
        }
    }
    if(g) {
      return!1
    }
    throw new TypeError("object is not a " + b + ", but is a " + typeof a);
  };
  Util.sprint = function(b, a, d, c) {
    Util.typeCheck("string", b);
    Util.typeCheck("object", a);
    Util.typeCheck("string", d, !0);
    Util.typeCheck("string", c, !0);
    var g;
    d === void 0 && (d = "%");
    c === void 0 && (c = "%");
    for(g in a) {
      a.hasOwnProperty(g) && (b = b.replace(RegExp(d + g + c, "gm"), a[g]))
    }
    return b
  };
  Util.tagReplaces = {"&":"&amp;", "<":"&lt;", ">":"&gt;"};
  Util.replaceTag = function(b) {
    return Util.tagReplaces[b] || b
  };
  Util.escapeHtmlTags = function(b) {
    return b.replace(/[&<>]/g, Util.replaceTag)
  };
  Util.escapeRegExp = function(b) {
    return b.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
  };
  Util.strReplace = function(b, a) {
    var d, c = [];
    for(d in a) {
      a.hasOwnProperty(d) && c.push(Util.escapeRegExp(d))
    }
    return b.replace(RegExp("(" + c.join("|") + ")", "gm"), function(c) {
      return a[c]
    })
  };
  Util.calCheckSize = function() {
    var b = {}, a = document.createElement("div");
    document.body.appendChild(a);
    a.innerHTML = "<input type='checkbox' style='margin:0;padding:0;overflow:hidden'/>";
    b.checkboxW = a.childNodes[0].offsetWidth;
    b.checkboxH = a.childNodes[0].offsetHeight;
    a.innerHTML = "<input type='radio' style='margin:0;padding:0;overflow:hidden'/>";
    b.radioW = a.childNodes[0].offsetWidth;
    b.radioH = a.childNodes[0].offsetHeight;
    document.body.removeChild(a);
    return b
  };
  Util.which = function(b) {
    for(var a = {}, d = 0, c;d < b.length;d++) {
      if(c = b[d].toLowerCase(), c === "number") {
        for(c = 48;c <= 57;c++) {
          a[c] = !0
        }
        for(c = 96;c <= 105;c++) {
          a[c] = !0
        }
      }else {
        if(c === "alphabet") {
          for(c = 65;c <= 90;c++) {
            a[c] = !0
          }
        }else {
          if(c === "arrow") {
            for(c = 37;c <= 40;c++) {
              a[c] = !0
            }
          }else {
            c.length > 1 && (c = c.replace(/\s/g, "")), c.length >= 3 && (c = c.replace(/numpad|num/g, "n").replace(/korean|kor/g, "kr")), a[Util.keyMapKeydown[c]] = !0
          }
        }
      }
    }
    return a
  };
  Util.keyMapKeydown = {backspace:8, tab:9, enter:13, shift:16, control:17, ctrl:17, alt:18, pause:19, "break":19, capslock:20, escape:27, esc:27, space:32, " ":32, pageup:33, pgup:33, pagedown:34, pgdown:34, pgdn:34, end:35, home:36, leftarrow:37, left:37, uparrow:38, up:38, rightarrow:39, right:39, downarrow:40, down:40, insert:45, ins:45, "delete":46, del:46, 0:48, ")":48, 1:49, "!":49, 2:50, "@":50, 3:51, "#":51, 4:52, $:52, 5:53, "%":53, 6:54, "^":54, 7:55, "&":55, 8:56, "*":56, 9:57, "(":57, 
  a:65, b:66, c:67, d:68, e:69, f:70, g:71, h:72, i:73, j:74, k:75, l:76, m:77, n:78, o:79, p:80, q:81, r:82, s:83, t:84, u:85, v:86, w:87, x:88, y:89, z:90, n0:96, n1:97, n2:98, n3:99, n4:100, n5:101, n6:102, n7:103, n8:104, n9:105, "n*":106, "n+":107, "n-":109, "n.":110, "n/":111, f1:112, f2:113, f3:114, f4:115, f5:116, f6:117, f7:118, f8:119, f9:120, f10:121, f11:122, f12:123, numlock:144, scrolllock:145, mute:173, volumedown:174, volumeup:175, ":":186, ";":186, "=":187, "+":187, ",":188, "<":188, 
  "-":189, _:189, ".":190, ">":190, "/":191, "?":191, "`":192, "~":192, "[":219, "{":219, "\\":220, "|":220, "]":221, "}":221, "'":222, '"':222, kr:229};
  Util.printEventPos = function(b) {
    Util.print("client: (" + b.clientX + ", " + b.clientY + "), layer: (" + b.layerX + ", " + b.layerY + "), offset: (" + b.offsetX + ", " + b.offsetY + "), page: (" + b.pageX + ", " + b.pageY + "), screen: (" + b.screenX + ", " + b.screenY + "), xy: (" + b.x + ", " + b.y + ")")
  };
  Util.print = function(b) {
    if(e) {
      if(arguments.length === 1) {
        e(arguments[0])
      }else {
        for(var a = 0, d = arguments.length;a < d;a++) {
          e(arguments[a])
        }
      }
    }
  };
  Util.open = function(b) {
    var a = {url:"about:blank", name:"_blank", channelmode:"no", directories:"yes", fullscreen:"no", height:void 0, left:void 0, location:"yes", menubar:"yes", resizable:"yes", scrollbars:"yes", status:"yes", titlebar:"yes", toolbar:"yes", top:void 0, width:void 0, replace:void 0}, d;
    if(Util.isNotNull(b)) {
      for(d in a) {
        a.hasOwnProperty(d) && (a[d] = b[d])
      }
    }
    b = Util.ifNull(a.height, "", "height=" + a.height + ", ") + Util.ifNull(a.left, "", "left=" + a.left + ", ") + Util.ifNull(a.top, "", "top=" + a.top + ", ") + Util.ifNull(a.width, "", "width=" + a.width + ", ") + "channelmode=" + a.channelmode + ", directories=" + a.directories + ", fullscreen=" + a.fullscreen + ", location=" + a.location + ", menubar=" + a.menubar + ", resizable=" + a.resizable + ", scrollbars=" + a.scrollbars + ", status=" + a.status + ", titlebar=" + a.titlebar + ", toolbar=" + 
    a.toolbar;
    return Util.isNull(a.replace) ? window.open(a.url, a.name, b) : window.open(a.url, a.name, b, a.replace)
  }
})();
console && console.log && console.log('reading javascript source "Tracer.js"...');
var Tracer = {};
(function() {
  function f() {
    this.stack = "";
    this.timers = {}
  }
  var h = goog.getObjectByName("jx.util");
  goog.exportSymbol("Tracer", f);
  var e = f.prototype;
  e.print = function(b, a, d) {
    b === void 0 && (b = "");
    a === void 0 && (a = "timer");
    d === void 0 && (d = !0);
    var c = this.timers[a], g = (new Date).getTime(), c = h.isNull(c) ? 0 : g - c;
    h.print((this.stack.length > 0 ? this.stack + " :: " : "") + b + ", Time elapsed since last update: " + c + "ms");
    d && (this.timers[a] = g)
  };
  e.addStack = function(b) {
    this.stack = this.stack + " > " + b
  };
  e.removeStack = function() {
    this.stack = this.stack.substring(0, this.stack.lastIndexOf(" > "))
  };
  e.clearStack = function() {
    this.stack = ""
  }
})();
console && console.log && console.log('reading javascript source "TimeWatch.js"...');
var TimeWatch = {};
(function() {
  function f(e) {
    var b = this.laps = [];
    this._stopped = !1;
    b.push(e || null, (new Date).getTime())
  }
  goog.exportSymbol("TimeWatch", f);
  var h = f.prototype;
  h.lap = function(e) {
    if(this._stopped) {
      throw Error("TimeWatch was stopped, thus cannot lap. Please reset!");
    }
    this.laps.push(e || null, (new Date).getTime())
  };
  h.stop = function(e) {
    this._stopped = !0;
    this.laps.push(e || null, (new Date).getTime())
  };
  h.reset = function(e) {
    var b = this.laps;
    b.length = 0;
    this._stopped = !1;
    b.push(e || null, (new Date).getTime())
  };
  h.toString = function() {
    var e = this.laps, b = e.length, a = 2, d = b - (this._stopped ? 2 : 0), c = e[0], g = e[1], l = g, b = b > 2 ? [] : null, j = 0, i = "TimeWatch\n";
    for(i += "start" + (c ? ": " + c : "") + " @" + g + "\n";a < d;a += 2) {
      c = (c = e[a]) ? ": " + c : "", g = e[a + 1], b.push(l = g - l), j += l, i += "lap " + a / 2 + c + " @" + g + " +" + l + "ms\n", l = g
    }
    d >= 2 && this._stopped && (c = (c = e[d]) ? ": " + c : "", g = e[d + 1], b.push(l = g - l), j += l, i += "stop" + c + " @" + g + " +" + l + "ms\n");
    if(b) {
      var e = b.length, p = j / e, f = 0;
      i += "total number of laps: " + e + "\n";
      i += "total elapsed time: " + j + "ms\n";
      i += "average lap time: " + p.toFixed(2) + "ms\n";
      b.forEach(function(a) {
        f += (a - p) * (a - p)
      });
      f = Math.sqrt(f / e);
      i += "standard deviation: " + f.toFixed(2) + "ms\n"
    }
    return i
  }
})();
console && console.log && console.log('reading javascript source "utiljquery.js"...');
jx.util$ = {};
var Util$ = {};
(function() {
  goog.exportSymbol("jx.util$", Util$);
  goog.exportSymbol("Util$", Util$);
  Util$.is$ = function(f) {
    return f instanceof jQuery ? !0 : !1
  };
  Util$.safe$ = function(f) {
    return f instanceof jQuery ? f : $(f)
  };
  Util$.unbindRemove = function(f) {
    f.unbind().remove()
  };
  jQuery.fn.getBoundingRect = function() {
    var f = this.offset();
    return{left:f.left, top:f.top, width:this.outerWidth(), height:this.outerHeight()}
  };
  jQuery.fn.containsEvent = function(f) {
    if(this.length === 0) {
      return!1
    }
    var h, e, b, a;
    if(this.length <= 1) {
      return h = this.getBoundingRect(), b = f.pageX, a = f.pageY, b >= h.left && b <= h.left + h.width && a >= h.top && a <= h.top + h.height
    }
    e = !1;
    this.each(function() {
      h = $(this).getBoundingRect();
      b = f.pageX;
      a = f.pageY;
      if(b >= h.left && b <= h.left + h.width && a >= h.top && a <= h.top + h.height) {
        return e = !0, !1
      }
    });
    return e
  };
  Util$.baseurlOfHeadScript = function(f) {
    var h = $(document.getElementsByTagName("head")[0]).find("script[src$='" + f + "']").attr("src");
    return h.substring(0, h.indexOf(f))
  };
  Util$.calScrollbarDims = function(f) {
    if(Util.isNotNull(window._SCROLLBAR)) {
      return window._SCROLLBAR
    }
    if(Util.isNotNull(window.opener) && Util.isNotNull(window.opener._SCROLLBAR)) {
      return window.opener._SCROLLBAR
    }
    var f = Util$.safe$(f), h;
    f[0].innerHTML = "<div id='scrollbardim' style='position:absolute;top:-10000px;left:-10000px;width:100px;height:100px;overflow:scroll;'></div>";
    h = $(document.getElementById("scrollbardim"));
    h = {w:h.width() - h[0].clientWidth, h:h.height() - h[0].clientHeight};
    f[0].innerHTML = "";
    return window._SCROLLBAR = h
  }
})();
console && console.log && console.log('reading javascript source "bootstrap.js"...');
jx.grid = {};
var JGM = {};
(function() {
  var f = goog.getObjectByName("jx.util"), h = goog.getObjectByName("jx.util$");
  goog.exportSymbol("JGM", JGM);
  goog.exportSymbol("jx.grid", JGM);
  JGM.version = "2.0.0";
  JGM._map = {ArrayExtIE:{cacheModule:!1}, Cache:{cacheModule:!0}, Cell:{cacheModule:!1}, CheckManager:{cacheModule:!0}, ColumnManager:{cacheModule:!0}, ColumnGroup:{cacheModule:!0}, ColumnHeader:{cacheModule:!0}, Collapser:{cacheModule:!0}, DataManager:{cacheModule:!0}, DataCreator:{cacheModule:!0}, EditManager:{cacheModule:!0}, Editor:{cacheModule:!0}, EngineExt:{cacheModule:!1}, EventManager:{cacheModule:!0}, Footer:{cacheModule:!0}, HeaderTree:{cacheModule:!0}, Grid:{cacheModule:!0}, GridManager:{cacheModule:!1}, 
  MenuBar:{cacheModule:!0}, ViewportManager:{cacheModule:!0}, SelectionManager:{cacheModule:!0}, SearchManager:{cacheModule:!0}, TooltipManager:{cacheModule:!0}, Tracer:{cacheModule:!1}, Tree:{cacheModule:!0}, TreeNode:{cacheModule:!1}, Util:{cacheModule:!1}, Util$:{cacheModule:!1}};
  JGM.create = function(e, b) {
    b == null && (b = {});
    if(!this.hasOwnProperty(e)) {
      throw Error("cannot find a grid module: name=" + e);
    }
    if(this._map.hasOwnProperty(e)) {
      if(this._map[e].cacheModule) {
        var a = b.mid = "JGM" + this.m.length++, d = new this[e](b);
        this.m.hasOwnProperty(e) || (this.m[e] = {});
        this.m[e][a] = d;
        e === "Grid" && d.name && (this.gridMap[d.name] = d);
        return d
      }else {
        return new this[e](b)
      }
    }else {
      return new this[e](b)
    }
  };
  JGM._destroy = function(e, b) {
    var a, d, c, g;
    for(d in b) {
      if(b.hasOwnProperty(d)) {
        switch(d) {
          case "map":
            a = b[d];
            if(f.isString(a)) {
              a = f.split(a);
              g = a.length;
              for(c = 0;c < g;c++) {
                JGM._deleteMap(e, a[c])
              }
            }else {
              if(a instanceof Array) {
                g = a.length;
                for(c = 0;c < g;c++) {
                  f.emptyObject(a[c])
                }
              }else {
                f.emptyObject(a)
              }
            }
            break;
          case "array":
            a = b[d];
            if(f.isString(a)) {
              a = f.split(a);
              g = a.length;
              for(c = 0;c < g;c++) {
                JGM._deleteArray(e, a[c])
              }
            }else {
              a.length = 0
            }
            break;
          case "$":
            a = b[d];
            if(f.isString(a)) {
              a = f.split(a);
              g = a.length;
              for(c = 0;c < g;c++) {
                JGM._delete$(e, a[c])
              }
            }else {
              if(a instanceof Array) {
                g = a.length;
                for(c = 0;c < g;c++) {
                  h.unbindRemove(a[c])
                }
              }else {
                h.unbindRemove(a)
              }
            }
            break;
          case "style":
            a = b[d];
            if(f.isString(a)) {
              a = f.split(a);
              g = a.length;
              for(c = 0;c < g;c++) {
                JGM._deleteStyle(e, a[c])
              }
            }else {
              if(a instanceof Array) {
                g = a.length;
                for(c = 0;c < g;c++) {
                  f.removeStyle(a[c])
                }
              }else {
                f.removeStyle(a)
              }
            }
            break;
          case "property":
            a = b[d];
            if(f.isString(a)) {
              a = f.split(a);
              g = a.length;
              for(c = 0;c < g;c++) {
                delete e[a[c]]
              }
            }else {
              if(a instanceof Array) {
                g = a.length;
                for(c = 0;c < g;c++) {
                  delete e[a[c]]
                }
              }
            }
            break;
          case "module":
            a = b[d];
            if(f.isString(a)) {
              a = f.split(a);
              g = a.length;
              for(c = 0;c < g;c++) {
                JGM._deleteModule(e, a[c])
              }
            }else {
              if(a instanceof Array) {
                g = a.length;
                for(c = 0;c < g;c++) {
                  a[c].destroy()
                }
              }else {
                a.destroy()
              }
            }
            break;
          case "name":
            e.hasOwnProperty("mid") && (JGM._remove(b[d], e.mid), delete e.mid);
            break;
          case "path":
            e.hasOwnProperty("grid") && e.grid.hasOwnProperty(b[d]) && (delete e.grid[b[d]], delete e.grid)
        }
      }
    }
    f.emptyObject(e)
  };
  JGM._deleteMap = function(e, b) {
    e.hasOwnProperty(b) && (f.emptyObject(e[b]), delete e[b])
  };
  JGM._deleteArray = function(e, b) {
    if(e.hasOwnProperty(b)) {
      e[b].length = 0, delete e[b]
    }
  };
  JGM._delete$ = function(e, b) {
    e.hasOwnProperty(b) && (h.unbindRemove(e[b]), delete e[b])
  };
  JGM._deleteStyle = function(e, b) {
    e.hasOwnProperty(b) && (f.removeStyle(e[b]), delete e[b])
  };
  JGM._deleteModule = function(e, b) {
    e.hasOwnProperty(b) && (e[b].destroy(), delete e[b])
  };
  JGM._remove = function(e, b) {
    delete this.m[e][b]
  };
  JGM.grid = function(e) {
    return this.create("Grid", e)
  };
  JGM.gridMap = {};
  JGM.getGrid = function(e) {
    if(this.gridMap.hasOwnProperty(e)) {
      return this.gridMap[e]
    }
  };
  JGM._add = function(e, b) {
    this[e] = b
  };
  JGM._extend = function(e, b) {
    var a = f.ifNull(b, {});
    $.extend(!0, e, a);
    $.extend(!0, a, e);
    return a
  };
  JGM.m = {length:0};
  JGM._CONST = {_cssUnselectable:"-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none;", _checkboxWidth:void 0, _checkboxHeight:void 0, _radioWidth:void 0, _radioHeight:void 0};
  JGM._globalEventsBound = !1;
  JGM._globalEvents = {_mousemove:function(e) {
    var b, a = JGM.m.Grid;
    for(b in a) {
      a.hasOwnProperty(b) && a[b]._mousemove(e)
    }
  }, _mouseup:function(e) {
    var b, a = JGM.m.Grid;
    for(b in a) {
      a.hasOwnProperty(b) && a[b]._mouseup(e)
    }
  }, _resize:function(e) {
    var b, a = JGM.m.Grid;
    for(b in a) {
      a.hasOwnProperty(b) && a[b]._resize(e)
    }
  }};
  JGM._bindGlobalEvents = function() {
    if(!this._globalEventsBound) {
      $(document).bind({mousemove:this._globalEvents._mousemove, mouseup:this._globalEvents._mouseup}), $(window).resize(this._globalEvents._resize), this._globalEventsBound = !0
    }
  };
  JGM._unbindGlobalEvents = function() {
    if(this._globalEventsBound) {
      $(document).unbind({mousemove:this._globalEvents._mousemove, mouseup:this._globalEvents._mouseup}), $(window).unbind("resize", this._globalEvents._resize), this._globalEventsBound = !1
    }
  };
  JGM.error = {LENGTH_NOT_EQUAL:"Lengths are not equal", NOT_MODIFIABLE:"Cannot modify value for '%0'.", KEY_UNDEFINED:"Column '%0' is undefined.", BAD_NULL:"Column '%0' cannot be null.", DUP_KEY:"Duplicate column key '%0'.", DUP_ENTRY:"Duplicate entry '%0' for '%1'.", KEY_NOT_FOUND:"'%0' for '%1' doesn't exist in table.", PARSE_ERROR:"Cannot parse '%0' for '%1'.", INVALID_DEFAULT:"Invalid default value '%0' for '%1'.", MULTIPLE_PRI_KEY:"Multiple primary key defined.", DATA_TOO_LONG:"Data '%0' too long for column '%1'. Maximum is %2.", 
  DATA_TOO_SHORT:"Data '%0' too short for column '%1'. Minimum is %2.", WRONG_LENGTH:"Length of data '%0' is not '%1' characters long for column '%2'.", BIGGER_THAN:"Data '%0' too big for column '%1'. Maximum is %2.", SMALLER_THAN:"Data '%0' too small for column '%1'. Minimum is %2.", WRONG_VALUE:"Incorrect value: '%0' for '%1'."}
})();
console && console.log && console.log('reading javascript source "renderer.js"...');
jx.grid.renderer = {};
(function() {
  var f = goog.getObjectByName("jx.grid");
  goog.getObjectByName("jx.util");
  f = f.renderer = {};
  goog.exportSymbol("jx.grid.renderer", f);
  f.selectBox = function(f) {
    var e = f.mapping, b = f.attr, a = f["default"], d = f.style, c = f.callback, g, l, j, i = 0, p = [], k = [], q = "<select";
    if(b) {
      for(j in b) {
        b.hasOwnProperty(j) && (q += " " + j + '="' + b[j] + '"')
      }
    }
    if(d) {
      q += ' style="';
      for(j in d) {
        d.hasOwnProperty(j) && (q += j + ":" + d[j] + ";")
      }
      q += '"'
    }
    q += ">";
    for(g in e) {
      e.hasOwnProperty(g) && (f = e[g], p.push(g), k.push(f), a == f && (l = i), i++)
    }
    return function(a) {
      var d, g, b = q;
      for(g = 0;g < i;g++) {
        if(a == k[g]) {
          d = g;
          break
        }
      }
      d === void 0 && (d = l);
      for(g = 0;g < i;g++) {
        b += '<option value="' + k[g] + '"', g === d && (b += ' selected="selected"'), b += ">" + p[g] + "</option>"
      }
      b += "</select>";
      c && (d = [], d.push(b), Array.prototype.push.apply(d, arguments), b = c.apply(this, d));
      return b
    }
  }
})();
console && console.log && console.log('reading javascript source "Disposable.js"...');
jx.lang = {};
jx.lang.Disposable = {};
(function() {
  function f() {
  }
  function h(a, d, l) {
    if(typeof a != "object") {
      return!1
    }
    var b, i, e;
    if(d) {
      for(var l = 0, f = d.length;l < f;l++) {
        if(b = d[l], this.hasOwnProperty(b)) {
          if(a.hasOwnProperty(b)) {
            if(i = this[b], e = a[b], i !== a && !(i === i || e === e)) {
              return!1
            }
          }else {
            return!1
          }
        }else {
          if(a.hasOwnProperty(b)) {
            return!1
          }
        }
      }
    }else {
      if(l) {
        for(b in this) {
          if(this.hasOwnProperty(b)) {
            if(!a.hasOwnProperty(b)) {
              return!1
            }
            i = this[b];
            e = a[b];
            if(i !== e) {
              if(i) {
                if(typeof i != "object" || typeof e != "object") {
                  return!1
                }
                if(i.equals) {
                  if(!i.equals(e, null, l - 1)) {
                    return!1
                  }
                }else {
                  if(e.equals && !e.equals(i, null, l - 1)) {
                    return!1
                  }
                }
                if(!h.call(i, e, null, l - 1)) {
                  return!1
                }
              }else {
                if(!(i === i || e === e)) {
                  return!1
                }
              }
            }
          }
        }
      }else {
        for(b in this) {
          if(this.hasOwnProperty(b)) {
            if(a.hasOwnProperty(b)) {
              if(i = this[b], e = a[b], i !== a && !(i === i || e === e)) {
                return!1
              }
            }else {
              return!1
            }
          }
        }
      }
      for(b in a) {
        if(a.hasOwnProperty(b) && !this.hasOwnProperty(b)) {
          return!1
        }
      }
    }
    return!0
  }
  function e(a, g) {
    if(this != goog.global) {
      var l, b;
      if(a) {
        for(l in this) {
          if(this.hasOwnProperty(l)) {
            if((b = this[l]) && typeof b == "object") {
              if(b.dispose) {
                b.dispose(a - 1, g)
              }else {
                if(g) {
                  if(d(b)) {
                    b.length = 0
                  }
                  e.call(b, a - 1, g)
                }
              }
            }
            delete this[l]
          }
        }
      }else {
        for(l in this) {
          this.hasOwnProperty(l) && delete this[l]
        }
      }
    }
  }
  var b = goog.getObjectByName("jx.util");
  goog.exportSymbol("jx.lang.Disposable", f);
  goog.exportProperty(f.prototype, "dispose", e);
  var a = f.prototype, d = b.isArray;
  b.equals = Object.equals = function(a, d, l, b) {
    return typeof a == "object" ? h.call(a, d, l, b) : a !== a && d !== d
  };
  b.dispose = Object.dispose = function(a, d, l) {
    if(typeof a == "object") {
      return e.call(a, d, l)
    }
  };
  a.equals = h;
  a.dispose = e
})();
console && console.log && console.log('reading javascript source "Cell.js"...');
jx.grid.Cell = {};
(function() {
  function f(a) {
    this.grid = a.grid;
    this._datarow = a.datarow;
    this._colDef = a.colDef;
    this.__init(a)
  }
  goog.getObjectByName("jx.grid");
  var h = goog.getObjectByName("jx.util"), e = goog.getObjectByName("jx.lang.Disposable");
  goog.exportSymbol("jx.grid.Cell", f);
  goog.inherits(f, e);
  f.getInstance = function(a) {
    return new f(a)
  };
  var b = f.prototype, a = e.prototype.dispose;
  b.dispose = function() {
    a.call(this)
  };
  b.__init = function(a) {
    if(h.isNull(this._datarow)) {
      if(h.isNotNull(a.row)) {
        this._datarow = this.grid.dataMgr.getByIdx(a.row)
      }else {
        if(h.isNotNull(a.node)) {
          this._datarow = this.grid.dataMgr.getByNode(a.node.parentNode)
        }else {
          if(h.isNotNull(a.$)) {
            this._datarow = this.grid.dataMgr.getByNode(a.$[0].parentNode)
          }
        }
      }
    }
    if(h.isNull(this._colDef)) {
      if(h.isNotNull(a.col)) {
        this._colDef = this.grid.colDefMgr.get(a.col)
      }else {
        if(h.isNotNull(a.node)) {
          this._colDef = this.grid.colDefMgr.get(h.index(a.node))
        }else {
          if(h.isNotNull(a.$)) {
            this._colDef = this.grid.colDefMgr.get(h.index(a.$[0]))
          }
        }
      }
    }
    if(h.isNullOr(this._datarow, this._colDef) && h.isNotNull(a.event) && (a = this.grid.view._getClosestCell(a.event.target), h.isNotNull(a))) {
      this._datarow = this.grid.dataMgr.getByNode(a.parentNode), this._colDef = this.grid.colDefMgr.get(h.index(a))
    }
  };
  b.destroy = function() {
    this.dispose()
  };
  b.getRowIdx = function() {
    if(h.isNotNull(this._datarow)) {
      return this.grid.dataMgr.getIdx(this._datarow)
    }
  };
  b.getColIdx = function() {
    if(h.isNotNull(this._colDef)) {
      return this.grid.colDefMgr.getIdx(this._colDef)
    }
  };
  b.getNode = function() {
    if(h.isNotNullAnd(this._datarow, this._colDef)) {
      return this.grid.view.getCellByIdAndKey(this.grid.dataMgr.getId(this._datarow), this._colDef.key)
    }
  };
  b.getRowNode = function() {
    return this.grid.view.getRow(this._datarow)
  };
  b.get$ = function() {
    var a = this.getNode();
    return a !== void 0 ? $(a) : $([])
  };
  b.getDatarow = function() {
    return this._datarow
  };
  b.getColDef = function() {
    return this._colDef
  };
  b.getKey = function() {
    if(h.isNotNull(this._colDef)) {
      return this._colDef.key
    }
  };
  b.getId = function() {
    return this.grid.dataMgr.getId(this._datarow)
  };
  b.getValue = function() {
    if(h.isNotNullAnd(this._datarow, this._colDef)) {
      return this._datarow[this._colDef.key]
    }
  };
  b.isValid = function() {
    return h.isNotNull(this.getNode())
  };
  b.isInvalid = function() {
    return h.isNull(this.getNode())
  };
  b.isEmpty$ = function() {
    return this.get$().length === 0
  };
  b.has$ = function() {
    return this.get$().length !== 0
  };
  b.equals = function(a) {
    return a && this._datarow && this._datarow === a._datarow && this._colDef && this._colDef === a.__colDef
  }
})();
console && console.log && console.log('reading javascript source "EventDispatcher.js"...');
jx.events = {};
jx.events.EventDispatcher = {};
(function() {
  function f() {
  }
  goog.getObjectByName("jx.grid");
  goog.getObjectByName("jx.util");
  var h = goog.getObjectByName("jx.lang.Disposable");
  goog.exportSymbol("jx.events.EventDispatcher", f);
  goog.inherits(f, h);
  var e = f.prototype, b = h.prototype.dispose;
  e.dispose = function() {
    b.call(this._handlers, -1, !0);
    b.call(this)
  };
  e.addEventListener = function(a, d) {
    if(!a) {
      throw Error("Invalid event type: " + a);
    }
    if(typeof d != "function") {
      throw Error("Event listener must be a function");
    }
    if(!this._handlers) {
      this._handlers = {}
    }
    var c = this._handlers, a = (a + "").toLowerCase();
    c.hasOwnProperty(a) || (c[a] = []);
    c = c[a];
    c.indexOf(d) === -1 && c.push(d)
  };
  e.removeEventListener = function(a, d) {
    if(this._handlers) {
      var a = (a + "").toLowerCase(), c = this._handlers;
      if(c.hasOwnProperty(a)) {
        for(var g = c[a], l = -1;(l = g.indexOf(d, l + 1)) !== -1;) {
          g.splice(l, 1)
        }
        g.length === 0 && delete c[a]
      }
    }
  };
  e.dispatchEvent = function(a) {
    if(!a || !a.type) {
      throw Error("Invalid event");
    }
    if(!this._handlers) {
      if(a.cancelable && a.defaultPrevented) {
        return!1
      }
      a.defaultAction && a.defaultAction(this);
      return!0
    }
    var d = this._handlers, c = (a.type + "").toLowerCase();
    a.target = this;
    if(d.hasOwnProperty(c)) {
      for(var d = d[c], c = 0, g = d.length, l;c < g && !a.stopPropagation;c++) {
        l = d[c], l.handleEvent ? l.handleEvent(a) : l.call(this, a)
      }
    }
    if(a.cancelable && a.defaultPrevented) {
      return!1
    }
    a.defaultAction && a.defaultAction(this);
    return!0
  }
})();
console && console.log && console.log('reading javascript source "Column.js"...');
jx.grid.Column = {};
(function() {
  function f(e) {
    if(!(e.manager && typeof e.manager == "object")) {
      throw Error("Column needs a valid manager!");
    }
    this.manager = e.manager;
    this.key = e.key + "";
    if(!this.key) {
      throw Error("Column needs a non-empty key!");
    }
    var b = "column key=" + this.key;
    if(this.manager.hasKey(this.key)) {
      throw Error("Duplicate column key!" + b);
    }
    this.name = e.name ? e.name + "" : "";
    this.title = e.title ? e.title + "" : "";
    this.noName = !!e.noName;
    this.noTitle = !!e.noTitle;
    this.type = e.type + "" || null;
    this.defaultValue = e.defaultValue;
    this.inputOnCreate = !!e.inputOnCreate;
    this.width = (this.width = Number(e.width)) || 90;
    this.minW = (this.minW = Number(e.minW)) || 30;
    this.maxW = Number(e.maxW) || null;
    this.resizable = !!e.resizable;
    this.hidden = !!e.hidden;
    this.noSearch = !!e.noSearch;
    this.tooltipEnabled = !!e.tooltipEnabled;
    this.colClass = e.colClass + "" || null;
    this.style = e.style + "" || null;
    this.headerStyle = e.headerStyle + "" || null;
    if(e.parser && typeof e.parser != "function") {
      throw Error("Invalid parser!" + b);
    }
    this.parser = e.parser || null;
    if(e.validator && typeof e.validator != "function") {
      throw Error("Invalid validator!" + b);
    }
    this.validator = e.validator || null;
    if(e.renderer && typeof e.renderer != "function") {
      throw Error("Invalid renderer!" + b);
    }
    this.renderer = e.renderer || null;
    if(e.sumRenderer && typeof e.sumRenderer != "function") {
      throw Error("Invalid sum renderer!" + b);
    }
    this.sumRenderer = e.sumRenderer || null;
    if(e.editor && typeof e.editor != "object") {
      throw Error("Invalid editor!" + b);
    }
    this.editor = e.editor || null;
    this.sorter = e.sorter || null;
    this.filter = e.filter || null
  }
  var h = goog.getObjectByName("jx.events.EventDispatcher");
  goog.exportSymbol("jx.grid.Column", f);
  goog.inherits(f, h);
  h = f.prototype;
  h.show = function() {
    return this.hidden ? (this.hidden = !1, this.dispatchEvent({type:"hidden", value:!1}), !0) : !1
  };
  h.hide = function() {
    return!this.hidden ? (this.hidden = !0, this.dispatchEvent({type:"hidden", value:!0}), !0) : !1
  };
  h.setHidden = function(e) {
    return e ? this.hide() : this.show()
  };
  h.setWidth = function(e) {
    return(e = Number(e)) && this.width !== e ? (this.width = e, this.dispatchEvent({type:"width", value:e}), e) : !1
  };
  h.setRenderer = function(e) {
    if(this.renderer !== e) {
      if(e && typeof e != "function") {
        throw Error("Invalid renderer!column key=" + this.key);
      }
      this.renderer = e || null;
      this.dispatchEvent({type:"renderer", value:e})
    }
  }
})();
console && console.log && console.log('reading javascript source "BaseModule.js"...');
jx.grid.BaseModule = {};
(function() {
  function f(b) {
    if(b) {
      if(b.mid != null) {
        this.mid = b.mid
      }
      if(b.grid) {
        this.grid = b.grid
      }
    }
    var a = this._defaultOptions && this._defaultOptions(b.grid), d = b && b.options;
    if(d || a) {
      a || (a = {}), d && $.extend(!0, a, d), this._options = a, this.dispatchEvent({type:"afteroption", options:a})
    }
    this._init && (this.dispatchEvent({type:"beforeinit"}), this._init(b), this.dispatchEvent({type:"afterinit"}));
    var c = this, g = this.grid;
    g && ["Dispose", "CreateCss", "CreateDynamicCss", "Render", "Keydown", "Keyup", "Keypress", "Mousein", "Mouseout", "Mouseenter", "Mouseleave", "Mousemove", "Mouseover", "Mousedown", "Mouseup", "Click", "Dblclick", "Resize", "ResizeWidth", "ResizeHeight", "Scroll", "ScrollH", "ScrollV"].forEach(function(a) {
      var d = "before" + a, a = "after" + a, b = "_" + d, e = "_" + a;
      c[b] && g.addEventListener(d, function(a) {
        return c[b](a)
      });
      c[e] && g.addEventListener(a, function(a) {
        return c[e](a)
      })
    });
    this._bindEvents && (this.dispatchEvent({type:"beforebindevents"}), this._bindEvents(b), this.dispatchEvent({type:"afterbindevents"}));
    this.dispatchEvent({type:"complete"})
  }
  var h = goog.getObjectByName("jx.events.EventDispatcher");
  goog.exportSymbol("jx.grid.BaseModule", f);
  goog.inherits(f, h);
  var h = f.prototype, e = h.dispose;
  h._beforeDispose = function() {
    this.dispose()
  };
  h.dispose = function() {
    delete this.grid;
    this.dispatchEvent({type:"beforedispose"});
    e.call(this)
  };
  h.getDataMgr = function() {
    return this.grid.dataMgr
  };
  h.getAllData = function() {
    return this.grid.dataMgr.all
  };
  h.getDataList = function() {
    return this.grid.dataMgr.datalist
  };
  h.getIdKey = function() {
    return this.grid.dataMgr.idKey
  };
  h.getColMgr = function() {
    return this.grid.colDefMgr
  };
  h.getColumns = function() {
    return this.grid.colDefMgr.get()
  };
  h.getEventMgr = function() {
    return this.grid.event
  };
  h.getView = function() {
    return this.grid.view
  };
  h.getHeader = function() {
    return this.grid.header
  };
  h.bindGridEvent = function() {
    var b = this.grid.event;
    return b.bind.apply(b, arguments)
  };
  h.triggerGridEvent = function() {
    var b = this.grid.event;
    return b.trigger.apply(b, arguments)
  };
  h.toCssStyle = function(b, a, d) {
    var c = [];
    d || (b = "#" + this.grid.mid + " " + b);
    if(typeof a != "string") {
      var g, d = "";
      a.hasOwnProperty("_prepend") && (a._prepend && c.push(a._prepend), delete a._prepend);
      a.hasOwnProperty("_append") && (a._append && (d = ";" + a._append), delete a._append);
      for(g in a) {
        c.push(g + ":" + a[g])
      }
      c = c.join(";") + d
    }
    return b + "{" + c + "}"
  };
  h.toCssStyles = function(b, a, d) {
    var b = b || [], c;
    for(c in a) {
      b.push(this.toCssStyle(c, a[c], d))
    }
    return b
  }
})();
console && console.log && console.log('reading javascript source "DataManager.js"...');
jx.data = {};
jx.data.DataManager = {};
(function() {
  function f(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    this.grid.dataMgr = this;
    this.all = [];
    this.datalist = [];
    this.failed = [];
    this._options = h._extend({idKey:void 0, idColKeys:[], uniqueKeys:[]}, a.options);
    this._consts = {_auto:0, _given:1, _composite:2, _notReal:this.mid + "@NR" + e.random(1E4), _add:0, _addList:1, _update:2, _updateList:3, _remove:4, _removeList:5, unknown:0, number:1, string:2, "boolean":3, date:4, "enum":5};
    e.isNotNull(this._options.idKey) ? (this._idMode = this._consts._given, this.idKey = this._options.idKey) : (this._idMode = this._options.idColKeys.length !== 0 ? this._consts._composite : this._consts._auto, this.idKey = "J@I" + this.mid + "@" + e.random(1E4));
    this._increment = 1;
    this.keyToType = {};
    this._idToIdx = {};
    this._idToData = {};
    this._filters = [];
    this._history = [];
    this._redoHistory = [];
    this.uniqueMap = {};
    this.__init(a)
  }
  var h = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.data.DataManager", f);
  h._add("DataManager", f);
  f.getInstance = function(a) {
    return new f(a)
  };
  var b = f.prototype;
  b.__init = function(a) {
    for(var d = 0, c = this._options.uniqueKeys, g, l = this.uniqueMap, b = c.length, i = this.keyToType, f = this.grid.colDefMgr.getAll();d < b;d++) {
      g = c[d], typeof g === "string" && (l[g] = {})
    }
    b = f.length;
    for(d = 0;d < b;d++) {
      c = f[d], g = c.key, c.hasOwnProperty("unique") && c.unique === !0 && !l.hasOwnProperty(g) && (l[g] = {}), i[g] = this.mapDatatype(c.type)
    }
    e.ifNull(a.datalist, []);
    this.bindEvents();
    this.set(a.datalist)
  };
  b.mapDatatype = function(a) {
    if(typeof a === "string") {
      switch(a = a.toLowerCase(), a) {
        case "number":
          return this._consts.number;
        case "string":
          return this._consts.string;
        case "boolean":
          return this._consts["boolean"];
        case "date":
          return this._consts.date;
        case "enum":
          return this._consts["enum"]
      }
    }
    return this._consts.unknown
  };
  b.bindEvents = function() {
    this.grid.event.bind({onDestroy:this._destroy, keydownCanvas:this._keydownCanvas}, this)
  };
  b._destroy = function() {
    this.cleanList(this.all);
    h._destroy(this, {name:"DataManager", path:"dataMgr", property:"all _idMode _increment idKey _sorter", map:"_consts _idToIdx _idToData _options", array:"datalist failed _history _redoHistory _filters"})
  };
  b.addUniqueIndex = function(a, d, c, g) {
    if(g !== !0 && (e.isNull(a) || e.isEmptyString(d) || e.isNull(c))) {
      return!1
    }
    if(c.hasOwnProperty(d) === !1) {
      return this.grid.error("KEY_UNDEFINED", d)
    }
    if(e.isEmptyString(g = c[d])) {
      return this.grid.error("BAD_NULL", d)
    }
    if(a.hasOwnProperty(g)) {
      return a[g] === c ? !1 : this.grid.error("DUP_ENTRY", g, d)
    }
    a[g] = c;
    return!0
  };
  b.addUniqueIndices = function(a, d, c, g) {
    if(g !== !0 && (e.isNull(a) || e.isEmptyString(d) || e.isEmptyArray(c))) {
      return!1
    }
    for(var l = c.length, b = [], i, f, g = 0;g < l;g++) {
      if(!e.isNull(f = c[g])) {
        if(f.hasOwnProperty(d) === !1) {
          return this.removeUniqueIndices(a, d, b), this.grid.error("KEY_UNDEFINED", d)
        }
        if(e.isEmptyString(i = f[d])) {
          return this.removeUniqueIndices(a, d, b), this.grid.error("BAD_NULL", d)
        }
        if(a.hasOwnProperty(i)) {
          if(a[i] === f) {
            continue
          }
          this.removeUniqueIndices(a, d, b);
          return this.grid.error("DUP_ENTRY", i, d)
        }
        b.push(a[i] = f)
      }
    }
    return b.length > 0
  };
  b.updateUniqueIndex = function(a, d, c, g, l, b) {
    if(b !== !0 && (e.isEmptyObj(a) || e.isEmptyString(d) || e.isNullOr(c, l) || e.isEmptyObj(g))) {
      return!1
    }
    if(g.hasOwnProperty(d) === !1) {
      return!1
    }
    if(l.hasOwnProperty(d) === !1 || c.hasOwnProperty(d) === !1) {
      return this.grid.error("KEY_UNDEFINED", d)
    }
    if(a.hasOwnProperty(l = l[d]) === !1) {
      return this.grid.error("KEY_NOT_FOUND", l, d)
    }
    if(e.isEmptyString(g = g[d])) {
      return this.grid.error("BAD_NULL", d)
    }
    if(a.hasOwnProperty(g)) {
      return a[g] === c ? !1 : this.grid.error("DUP_ENTRY", g, d)
    }
    a[g] = c;
    delete a[l];
    return l
  };
  b.updateUniqueIndices = function(a, d, c, g, l, b) {
    if(b !== !0) {
      if(e.isEmptyObj(a) || e.isEmptyString(d) || e.isEmptyArray(c) || e.isEmptyArray(g) || e.isEmptyArray(l)) {
        return!1
      }
      if(c.length !== g.length || c.length !== l.length) {
        return this.grid.error("LENGTH_NOT_EQUAL")
      }
    }
    for(var b = 0, i = c.length, f, k, h, m = [], o = [], n = [], s, r;b < i;b++) {
      if(!e.isNull(f = c[b])) {
        if((h = g[b]).hasOwnProperty(d) !== !1) {
          k = l[b];
          if(k.hasOwnProperty(d) === !1 || f.hasOwnProperty(d) === !1) {
            return this.updateUniqueIndices(a, d, m, n, o), this.grid.error("KEY_UNDEFINED", d)
          }
          if(a.hasOwnProperty(r = k[d]) === !1) {
            return this.updateUniqueIndices(a, d, m, n, o), this.grid.error("KEY_NOT_FOUND", r, d)
          }
          if(e.isEmptyString(s = h[d])) {
            return this.updateUniqueIndices(a, d, m, n, o), this.grid.error("BAD_NULL", d)
          }
          if(a.hasOwnProperty(s)) {
            if(a[s] === f) {
              continue
            }
            this.updateUniqueIndices(a, d, m, n, o);
            return this.grid.error("DUP_ENTRY", s, d)
          }
          a[s] = f;
          delete a[r];
          m.push(f);
          o.push(h);
          n.push(k)
        }
      }
    }
    return m.length === 0 ? !1 : {datalist:m, changes:o, befores:n}
  };
  b.removeUniqueIndex = function(a, d, c, g) {
    if(!(g !== !0 && (e.isEmptyObj(a) || e.isEmptyString(d) || e.isEmptyObj(c)))) {
      var l;
      c.hasOwnProperty(d) && a.hasOwnProperty(l = c[d]) && delete a[l]
    }
  };
  b.removeUniqueIndices = function(a, d, c, g) {
    if(!(g !== !0 && (e.isEmptyObj(a) || e.isEmptyString(d) || e.isEmptyArray(c)))) {
      for(var l = c.length, b, i, g = 0;g < l;g++) {
        i = c[g], i.hasOwnProperty(d) && a.hasOwnProperty(b = i[d]) && delete a[b]
      }
    }
  };
  b.addToUniqueMap = function(a) {
    if(e.isEmptyObj(a) || e.isEmptyObj(this.uniqueMap)) {
      return!1
    }
    var d = [], c, g = this.uniqueMap, l;
    for(c in g) {
      if(g.hasOwnProperty(c)) {
        if(l = this.addUniqueIndex(g[c], c, a), l === !0) {
          d.push(c)
        }else {
          if(l instanceof Error) {
            c = 0;
            for(var b = d.length;c < b;c++) {
              this.removeUniqueIndex(g[d[c]], d[c], a)
            }
            return l
          }
        }
      }
    }
    return d.length > 0
  };
  b.addListToUniqueMap = function(a) {
    if(e.isEmptyArray(a) || e.isEmptyObj(this.uniqueMap)) {
      return!1
    }
    var d = this.uniqueMap, c = [], g, l;
    for(g in d) {
      if(d.hasOwnProperty(g)) {
        if(l = this.addUniqueIndices(d[g], g, a), l === !0) {
          c.push(g)
        }else {
          if(l instanceof Error) {
            g = 0;
            for(var b = c.length;g < b;g++) {
              this.removeUniqueIndices(d[c[g]], c[g], a)
            }
            return l
          }
        }
      }
    }
    return c.length > 0
  };
  b.updateUniqueMap = function(a, d, c) {
    if(e.isNullOr(a, d, c) || e.isEmptyObj(this.uniqueMap)) {
      return!1
    }
    var g, l = this.uniqueMap, b = [], i;
    for(g in l) {
      if(l.hasOwnProperty(g)) {
        i = this.updateUniqueIndex(l[g], g, a, d, c);
        if(i instanceof Error) {
          g = 0;
          for(var f = b.length;g < f;g++) {
            this.updateUniqueIndex(l[b[g]], b[g], a, c, d)
          }
          return i
        }
        i !== !1 && b.push(g)
      }
    }
    return b.length > 0
  };
  b.updateListUniqueMap = function(a, d, c) {
    if(e.isEmptyArray(a) || e.isEmptyArray(d) || e.isEmptyArray(c) || e.isEmptyObj(this.uniqueMap)) {
      return!1
    }
    if(a.length !== d.length || a.length !== c.length) {
      return this.grid.error("LENGTH_NOT_EQUAL")
    }
    var g, l = this.uniqueMap, b = [], i;
    for(g in l) {
      if(l.hasOwnProperty(g)) {
        i = this.updateUniqueIndices(l[g], g, a, d, c);
        if(i instanceof Error) {
          g = 0;
          for(var f = b.length;g < f;g++) {
            this.updateUniqueIndices(l[b[g]], b[g], a, c, d)
          }
          return i
        }
        i !== !1 && b.push(g)
      }
    }
    return b.length > 0
  };
  b.removeFromUniqueMap = function(a) {
    if(!e.isEmptyObj(a) && !e.isEmptyObj(this.uniqueMap)) {
      var d, c = this.uniqueMap;
      for(d in c) {
        c.hasOwnProperty(d) && this.removeUniqueIndex(c[d], d, a)
      }
    }
  };
  b.removeListFromUniqueMap = function(a) {
    if(!e.isEmptyArray(a) && !e.isEmptyObj(this.uniqueMap)) {
      var d, c = this.uniqueMap;
      for(d in c) {
        c.hasOwnProperty(d) && this.removeUniqueIndices(c[d], d, a)
      }
    }
  };
  b.addToIdMap = function(a) {
    if(e.isNull(a)) {
      return!1
    }
    var d = this.idKey;
    switch(this._idMode) {
      case this._consts._auto:
        a.hasOwnProperty(d) === !1 && (a[d] = this._increment++);
      case this._consts._given:
      ;
      case this._consts._composite:
        return this.addUniqueIndex(this._idToData, d, a)
    }
    return!1
  };
  b.addListToIdMap = function(a) {
    if(e.isEmptyArray(a)) {
      return!1
    }
    var d = this.idKey;
    switch(this._idMode) {
      case this._consts._auto:
        for(var c = 0, g, l = a.length;c < l;c++) {
          if((g = a[c]).hasOwnProperty(d) === !1) {
            g[d] = this._increment++
          }
        }
      ;
      case this._consts._given:
      ;
      case this._consts._composite:
        return this.addUniqueIndices(this._idToData, d, a)
    }
    return!1
  };
  b.updateIdMap = function(a, d, c) {
    if(e.isNullOr(a, c) || e.isEmptyObj(d)) {
      return!1
    }
    var g = this.idKey;
    switch(this._idMode) {
      case this._consts._auto:
        if(d.hasOwnProperty(g)) {
          return this.grid.error("NOT_MODIFIABLE", g)
        }
      ;
      case this._consts._given:
        return this.updateUniqueIndex(this._idToData, g, a, d, c);
      case this._consts._composite:
        if(d.hasOwnProperty(g)) {
          return this.grid.error("NOT_MODIFIABLE", g)
        }
        for(var c = this._options.idColKeys, l = c.length, b = 0;b < l;b++) {
          if(d.hasOwnProperty(c[b])) {
            for(var i = "", f = 0, k, h, m = {}, o = {}, b = o[g] = a[g];f < l;f++) {
              if(k = c[f], d.hasOwnProperty(k)) {
                if(e.isEmptyString(h = d[k])) {
                  return this.grid.error("BAD_NULL", k)
                }
                i += "&" + h
              }else {
                i += "&" + a[k]
              }
            }
            a[g] = m[g] = i;
            if(b === i) {
              break
            }
            d = this.updateUniqueIndex(this._idToData, g, a, m, o);
            d instanceof Error && (a[g] = b);
            return d
          }
        }
    }
    return!1
  };
  b.updateListIdMap = function(a, d, c) {
    if(e.isEmptyArray(a) || e.isEmptyArray(d) || e.isEmptyArray(c)) {
      return!1
    }
    var g = this.idKey, l = a.length, b = 0;
    switch(this._idMode) {
      case this._consts._auto:
        for(;b < l;b++) {
          if(d[b].hasOwnProperty(g)) {
            return this.grid.error("NOT_MODIFIABLE", g)
          }
        }
      ;
      case this._consts._given:
        return this.updateUniqueIndices(this._idToData, g, a, d, c);
      case this._consts._composite:
        for(var i = this._idToData, f, k, h = this._options.idColKeys, m = h.length, o, c = [], n = [], s = [], r = [], t, u, v, y;b < l;b++) {
          f = a[b];
          k = d[b];
          if(k.hasOwnProperty(g)) {
            t = 0;
            for(l = c.length;t < l;t++) {
              n[t][g] = c[t]
            }
            return this.grid.error("NOT_MODIFIABLE", g)
          }
          for(t = 0;t < m;t++) {
            if(k.hasOwnProperty(h[t])) {
              o = "";
              for(u = 0;u < m;u++) {
                if(v = h[u], k.hasOwnProperty(v)) {
                  if(e.isEmptyString(y = k[v])) {
                    t = 0;
                    for(l = c.length;t < l;t++) {
                      n[t][g] = c[t]
                    }
                    return this.grid.error("BAD_NULL", v)
                  }
                  o += "&" + y
                }else {
                  o += "&" + f[v]
                }
              }
              f[g] !== o && (n.push(f), s.push({}), r.push({}), c.push(f[g]), f[g] = o)
            }
          }
        }
        if(n.length === 0) {
          break
        }
        a = this.updateUniqueIndices(i, g, n, s, r);
        if(a instanceof Error) {
          t = 0;
          for(l = c.length;t < l;t++) {
            n[t][g] = c[t]
          }
        }
        return a
    }
    return!1
  };
  b.removeFromIdMap = function(a) {
    var d = this.idKey, c = this._idToData, g;
    e.isNotNull(a) && a.hasOwnProperty(d) && c.hasOwnProperty(g = a[d]) && delete c[g]
  };
  b.removeListFromIdMap = function(a) {
    if(!e.isEmptyArray(a)) {
      for(var d = this.idKey, c = a.length, g = this._idToData, l, b, i = 0;i < c;i++) {
        b = a[i], b.hasOwnProperty(d) && g.hasOwnProperty(l = b[d]) && delete g[l]
      }
    }
  };
  b.fillTemp = function(a, d) {
    if(!e.isNull(a)) {
      var c = this.grid.colDefMgr.getAll(), g = c.length, b, j, i = 0;
      if(d !== void 0 && d.isNew) {
        for(;i < g;i++) {
          j = c[i], b = j.key, j.nullOnCreate && e.isNull(a[b]) && (a[b] = "J@H" + this._increment++)
        }
      }
    }
  };
  b.fillTempList = function(a, d) {
    if(!e.isEmptyArray(a)) {
      var c = this.grid.colDefMgr.getAll(), g = c.length, b = a.length, j, i, f = 0;
      if(d !== void 0 && d.isNew) {
        for(;f < g;f++) {
          if(i = c[f], j = i.key, i.nullOnCreate) {
            for(i = 0;b;i++) {
              a[i][j] = "J@H" + this._increment++
            }
          }
        }
      }
    }
  };
  b.query = function(a) {
    if(typeof a === "string" && (a = $.trim(a), a.length !== 0)) {
      var d, c, g, b, j;
      d = a.toLowerCase();
      c = a.indexOf(" ");
      if(c !== -1 && (g = d.substring(0, c), d = d.indexOf(" where "), b = d > -1, c = $.trim(b ? a.substring(c + 1, d) : a.substring(c + 1)), c.length !== 0)) {
        switch(b && (j = $.trim(a.substring(d + 7))), g) {
          case "select":
            return this.executeSelect(c, j);
          case "insert":
            return this.executeInsert(c, j);
          case "update":
            return this.executeUpdate(c, j);
          case "delete":
            return this.executeDelete(c, j)
        }
      }
    }
  };
  b.parseWhere = function(a) {
    typeof a === "string" && $.trim(a)
  };
  b.executeSelect = function(a) {
    var a = e.split(a, /[\s,]+/), d = a.length, c = 0, g = {}, b = this.all, j = [];
    if(d === 0) {
      return j
    }
    for(;c < d;c++) {
      if(a[c] === "*") {
        break
      }
      g[a[c]] = !0
    }
    c = 0;
    for(d = b.length;c < d;c++) {
      j.push(e.clone(b[c], g))
    }
    return j
  };
  b.parse = function(a, d) {
    if(e.isNull(a)) {
      return!1
    }
    for(var c = this.grid.colDefMgr.getAll(), g = c.length, b, j, i = d !== void 0 && d.isNew, f = 0;f < g;f++) {
      if(j = c[f], !i || !j.nullOnCreate) {
        if(e.isFunction(b = j.parser)) {
          if(j = j.key, a.hasOwnProperty(j)) {
            try {
              a[j] = b(a[j], a)
            }catch(k) {
              return e.isNull(a) ? this.grid.error("PARSE_ERROR", a, j) : this.grid.error("PARSE_ERROR", a[j], j)
            }
          }
        }
      }
    }
    return!0
  };
  b.parseList = function(a, d) {
    if(e.isNull(a)) {
      return!1
    }
    if(a.length === 0) {
      return!0
    }
    for(var c = this.grid.colDefMgr.getAll(), g = c.length, b = a.length, j, i, f = 0, k, h = d !== void 0 && d.isNew, m;f < g;f++) {
      if(i = c[f], !h || !i.nullOnCreate) {
        if(e.isFunction(j = i.parser)) {
          i = i.key;
          try {
            for(k = 0;k < b;k++) {
              m = a[k], m.hasOwnProperty(i) && (m[i] = j(m[i], m))
            }
          }catch(o) {
            return e.isNull(m) ? this.grid.error("PARSE_ERROR", m, i) : this.grid.error("PARSE_ERROR", m[i], i)
          }
        }
      }
    }
    return!0
  };
  b.validate = function(a, d) {
    if(e.isNull(a)) {
      return!1
    }
    for(var c = this.grid.colDefMgr.getAll(), g = c.length, b, j, i, f, k, h, m, o = d !== void 0 && d.isNew, n = 0;n < g;n++) {
      if(b = c[n], j = b.key, k = void 0, f = i = !1, !o || !b.nullOnCreate) {
        if(b.notNull === !0) {
          if(a.hasOwnProperty(j) === !1 || e.isEmptyString(k = a[j])) {
            return this.grid.error("BAD_NULL", j)
          }
          h = k.toString()
        }else {
          a.hasOwnProperty(j) === !1 || e.isNull(k = a[j]) ? f = i = !0 : k === "" && (f = !0), h = i === !1 ? k.toString() : ""
        }
        if(i === !1) {
          if(e.isNotNull(m = b.max) && f === !1 && k > m) {
            return this.grid.error("BIGGER_THAN", k, j, m)
          }
          if(e.isNotNull(m = b.min) && f === !1 && k < m) {
            return this.grid.error("SMALLER_THAN", k, j, m)
          }
          if(e.isNotNull(m = b.length)) {
            if(f === !0 || h.length !== m) {
              return this.grid.error("WRONG_LENGTH", h, m, j)
            }
          }else {
            if(e.isNotNull(m = b.maxlength) && f === !1 && h.length > m) {
              return this.grid.error("DATA_TOO_LONG", h, j, m)
            }
            if(e.isNotNull(m = b.minlength)) {
              if(f === !0 || h.length < m) {
                return this.grid.error("DATA_TOO_SHORT", h, j, m)
              }
            }
          }
        }
        if(e.isFunction(b = b.validator)) {
          try {
            if(b(k, a, h, i, f) !== !0) {
              return this.grid.error("WRONG_VALUE", h, j)
            }
          }catch(s) {
            return this.grid.error("WRONG_VALUE", h, j)
          }
        }
      }
    }
    return!0
  };
  b.validateList = function(a, d) {
    if(e.isNull(a)) {
      return!1
    }
    if(a.length === 0) {
      return!0
    }
    for(var c = this.grid.colDefMgr.getAll(), g = c.length, b = a.length, j, i, f = 0, k, h, m, o, n, s = d !== void 0 && d.isNew, r = [], t = [];f < g;f++) {
      if(j = c[f], i = j.key, h = {}, m = {}, r.length = 0, t.length = 0, !s || !j.nullOnCreate) {
        if(j.notNull === !0) {
          for(k = 0;k < b;k++) {
            if(a[k].hasOwnProperty(i) === !1 || e.isEmptyString(o = a[k][i])) {
              return this.grid.error("BAD_NULL", i)
            }
            r.push(o);
            t.push(o.toString())
          }
        }else {
          for(k = 0;k < b;k++) {
            o = void 0, a[k].hasOwnProperty(i) === !1 || e.isNull(o = a[k][i]) ? (h[k] = !0, m[k] = !0) : o === "" && (m[k] = !0), r.push(o), h.hasOwnProperty(k) ? t.push("") : t.push(o.toString())
          }
        }
        if(e.isNotNull(n = j.max)) {
          for(k = 0;k < b;k++) {
            if(m.hasOwnProperty(k) === !1 && r[k] > n) {
              return this.grid.error("BIGGER_THAN", r[k], i, n)
            }
          }
        }
        if(e.isNotNull(n = j.min)) {
          for(k = 0;k < b;k++) {
            if(m.hasOwnProperty(k) === !1 && r[k] < n) {
              return this.grid.error("SMALLER_THAN", r[k], i, n)
            }
          }
        }
        if(e.isNotNull(n = j.length)) {
          for(k = 0;k < b;k++) {
            if(h.hasOwnProperty(k) === !1 && (m.hasOwnProperty(k) || t[k].length !== n)) {
              return this.grid.error("WRONG_LENGTH", t[k], n, i)
            }
          }
        }else {
          if(e.isNotNull(n = j.maxlength)) {
            for(k = 0;k < b;k++) {
              if(m.hasOwnProperty(k) === !1 && t[k].length > n) {
                return this.grid.error("DATA_TOO_LONG", t[k], i, n)
              }
            }
          }
          if(e.isNotNull(n = j.minlength)) {
            for(k = 0;k < b;k++) {
              if(h.hasOwnProperty(k) === !1 && (m.hasOwnProperty(k) || t[k].length < n)) {
                return this.grid.error("DATA_TOO_SHORT", t[k], i, n)
              }
            }
          }
        }
        if(e.isFunction(j = j.validator)) {
          try {
            for(k = 0;k < b;k++) {
              if(j(r[k], a[k], t[k], h.hasOwnProperty(k), m.hasOwnProperty(k)) !== !0) {
                return this.grid.error("WRONG_VALUE", t[k], i)
              }
            }
          }catch(u) {
            return this.grid.error("WRONG_VALUE", t[k], i)
          }
        }
      }
    }
    return!0
  };
  b.makeCompositeKey = function(a, d) {
    if(!(this._idMode !== this._consts._composite || e.isNull(a))) {
      if(d === !0 || a.hasOwnProperty(this.idKey) === !1) {
        for(var c = this._options.idColKeys, g = c.length, b = 0, j = "";b < g;b++) {
          j += "&" + a[c[b]]
        }
        a[this.idKey] = j
      }
    }
  };
  b.makeCompositeKeyList = function(a, d) {
    if(!(this._idMode !== this._consts._composite || a.length === 0)) {
      var c = this.idKey, g = a.length, b = this._options.idColKeys, j = b.length, i, e = 0, f, h;
      if(d === !0) {
        for(;e < g;e++) {
          i = a[e];
          h = "";
          for(f = 0;f < j;f++) {
            h += "&" + i[b[f]]
          }
          i[c] = h
        }
      }else {
        for(;e < g;e++) {
          if((i = a[e]).hasOwnProperty(c) === !1) {
            h = "";
            for(f = 0;f < j;f++) {
              h += "&" + i[b[f]]
            }
            i[c] = h
          }
        }
      }
    }
  };
  b.map = function(a) {
    if(!e.isNull(a)) {
      var d = this._idToData, c = this.idKey, g;
      this.makeCompositeKey(a);
      if(a.hasOwnProperty(c) && d.hasOwnProperty(g = a[c])) {
        return d[g]
      }
    }
  };
  b.mapList = function(a) {
    if(e.isEmptyArray(a)) {
      return{mapped:[], unmapped:[]}
    }
    this.makeCompositeKeyList(a);
    for(var d = [], c = [], g = this.idKey, b = this._idToData, j = a.length, i = 0, f, k;i < j;i++) {
      (f = a[i]).hasOwnProperty(g) && b.hasOwnProperty(k = f[g]) ? d.push(b[k]) : c.push(f)
    }
    return{mapped:d, unmapped:c}
  };
  b.getById = function(a) {
    if(e.isNotNull(a) && this._idToData.hasOwnProperty(a)) {
      return this._idToData[a]
    }
  };
  b.getByIdx = function(a) {
    if(e.isNotNull(a) && this.datalist.hasOwnProperty(a)) {
      return this.datalist[a]
    }
  };
  b.getByNode = function(a) {
    return this.getById(this.getIdByNode(a))
  };
  b.getIdx = function(a) {
    return this.getIdxById(this.getId(a))
  };
  b.getIdxById = function(a) {
    return e.isNotNull(a) && this._idToIdx.hasOwnProperty(a) ? this._idToIdx[a] : -1
  };
  b.getIdxByNode = function(a) {
    return this.getIdxById(this.getIdByNode(a))
  };
  b.getId = function(a) {
    if(e.isNotNull(a) && a.hasOwnProperty(this.idKey)) {
      return a[this.idKey]
    }
  };
  b.getIdByIdx = function(a) {
    return this.getId(this.getByIdx(a))
  };
  b.getIdByNode = function(a) {
    if(e.isNotNull(a)) {
      return a.getAttribute("i")
    }
  };
  b._reidxFrom = function(a) {
    e.isNull(a) && (a = 0);
    for(var d = this.datalist, c = d.length, g = this.idKey, b = this._idToIdx;a < c;a++) {
      b[d[a][g]] = a
    }
  };
  b._reidx = function() {
    this._idToIdx = {};
    this._reidxFrom()
  };
  b.has = function(a) {
    return this.hasById(this.getId(a))
  };
  b.hasById = function(a) {
    return e.isNotNull(a) ? this._idToIdx.hasOwnProperty(a) : !1
  };
  b.contains = function(a) {
    return this.containsById(this.getId(a))
  };
  b.containsById = function(a) {
    return e.isNotNull(a) ? this._idToData.hasOwnProperty(a) : !1
  };
  b.set = function(a) {
    if(this.all === a || e.isEmptyArray(a) && this.all === 0) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange", !1, !0);
    this.grid.event.trigger("onBeforeSetDatalist", [this.all, a], !0);
    this.cleanList(this.all);
    var d, c = this.uniqueMap;
    for(d in c) {
      c.hasOwnProperty(d) && (c[d] = {})
    }
    this._idToData = {};
    this.all = [];
    this._history.length = 0;
    this._redoHistory.length = 0;
    e.isNull(a) && (a = []);
    if((d = this.parseList(a)) instanceof Error) {
      return d
    }
    if((d = this.validateList(a)) instanceof Error) {
      return d
    }
    if((d = this.addListToUniqueMap(a)) instanceof Error) {
      return d
    }
    this.makeCompositeKeyList(a, !0);
    if((d = this.addListToIdMap(a)) instanceof Error) {
      return d
    }
    this.all = a;
    this.grid.event.trigger("onAfterSetDatalist", [a], !0);
    this.grid.event.trigger("onDataChange", !1, !0);
    this.refresh();
    return!0
  };
  b.add = function(a, d) {
    if(e.isNull(a) || e.isNotNull(this.map(a))) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange", !1, !0);
    this.fillTemp(a, d);
    var c;
    if((c = this.parse(a, d)) instanceof Error) {
      return c
    }
    if((c = this.validate(a, d)) instanceof Error) {
      return c
    }
    if((c = this.addToUniqueMap(a)) instanceof Error) {
      return c
    }
    if((c = this.addToIdMap(a)) instanceof Error) {
      return c
    }
    this.all.push(a);
    if(e.isNull(d) || d.undo !== !0) {
      this._history.push({_action:this._consts._add, _target:a}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onAddDatarow", [a, d], !0);
    this.grid.event.trigger("onDataChange", !1, !0);
    (d === void 0 || d.noRefresh !== !0) && this.refresh(d);
    return!0
  };
  b.addList = function(a, d) {
    if(e.isEmptyArray(a)) {
      return!1
    }
    var c = this.mapList(a).unmapped;
    if(c.length === 0) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange", !1, !0);
    this.fillTempList(a, d);
    var g;
    if((g = this.parseList(c, d)) instanceof Error) {
      return g
    }
    if((g = this.validateList(c, d)) instanceof Error) {
      return g
    }
    if((g = this.addListToUniqueMap(c)) instanceof Error) {
      return g
    }
    if((g = this.addListToIdMap(c)) instanceof Error) {
      return g
    }
    this.all.pushList(c);
    if(e.isNull(d) || d.undo !== !0) {
      this._history.push({_action:this._consts._addList, _target:c}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onAddDatalist", [c, d], !0);
    this.grid.event.trigger("onDataChange", !1, !0);
    (d === void 0 || d.noRefresh !== !0) && this.refresh(d);
    return!0
  };
  b.updateByKey = function(a, d, c, g) {
    var b = {};
    b[d] = c;
    return this.update(a, b, g)
  };
  b.update = function(a, d, c) {
    if(e.isNullOr(a, d)) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange", !1, !0);
    this.grid.event.trigger("onBeforeUpdateDatarow", [a, d], !0);
    var g = {}, b;
    for(b in d) {
      d.hasOwnProperty(b) && (a[b] === d[b] ? delete d[b] : (g[b] = a[b], a[b] = d[b]))
    }
    if(e.isEmptyObj(g)) {
      return!1
    }
    if((b = this.parse(a, c)) instanceof Error) {
      return this._rollback(a, g), b
    }
    if((b = this.validate(a, c)) instanceof Error) {
      return this._rollback(a, g), b
    }
    if((b = this.updateUniqueMap(a, d, g)) instanceof Error) {
      return this._rollback(a, g), b
    }
    if((b = this.updateIdMap(a, d, g)) instanceof Error) {
      return this._rollback(a, g), b
    }
    b !== !1 && this.grid.event.trigger("onIdChange", [a, b, a[this.idKey]], !0);
    if(e.isNull(c) || c.undo !== !0) {
      this._history.push({_action:this._consts._update, _target:a, _before:g, _change:d}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onUpdateDatarow", [a, d, g, c], !0);
    this.grid.event.trigger("onDataChange", !1, !0);
    (c === void 0 || c.noRefresh !== !0) && this.refresh(c);
    return!0
  };
  b.updateList = function(a, d) {
    if(e.isEmptyArray(a)) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange", !1, !0);
    this.grid.event.trigger("onBeforeUpdateDatalist", [a], !0);
    for(var c = [], g = [], b = [], j, i, f, k = a.length, h = 0, m;h < k;h++) {
      i = {};
      j = a[h].datarow;
      f = a[h].change;
      for(m in f) {
        f.hasOwnProperty(m) && (j[m] === f[m] ? delete f[m] : (i[m] = j[m], j[m] = f[m]))
      }
      e.isNotEmptyObj(i) && (c.push(j), g.push(i), b.push(f))
    }
    if(c.length === 0) {
      return!1
    }
    if((j = this.parseList(c, d)) instanceof Error) {
      return this._rollbackList(c, g), j
    }
    if((j = this.validateList(c, d)) instanceof Error) {
      return this._rollbackList(c, g), j
    }
    if((j = this.updateListUniqueMap(c, b, g)) instanceof Error) {
      return this._rollbackList(c, g), j
    }
    if((j = this.updateListIdMap(c, b, g)) instanceof Error) {
      return this._rollbackList(c, g), j
    }
    j !== !1 && this.grid.event.trigger("onIdListChange", [j.list, j.befores, this.idKey], !0);
    if(e.isNull(d) || d.undo !== !0) {
      this._history.push({_action:this._consts._updateList, _target:c, _before:g, _change:b}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onUpdateDatalist", [c, b, g, d], !0);
    this.grid.event.trigger("onDataChange", !1, !0);
    (d === void 0 || d.noRefresh !== !0) && this.refresh(d);
    return!0
  };
  b._rollback = function(a, d) {
    for(var c in d) {
      d.hasOwnProperty(c) && (a[c] = d[c])
    }
  };
  b._rollbackList = function(a, d) {
    for(var c = a.length, g = 0, b, j, i;g < c;g++) {
      for(i in b = a[g], j = d[g], j) {
        j.hasOwnProperty(i) && (b[i] = j[i])
      }
    }
  };
  b.remove = function(a, d) {
    if(e.isNull(a)) {
      return!1
    }
    var c = this.map(a);
    if(e.isNull(c)) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange", !1, !0);
    this.removeFromIdMap(c);
    this.removeFromUniqueMap(c);
    this.all.remove(c);
    this.removeId(c);
    if(e.isNull(d) || d.undo !== !0) {
      this._history.push({_action:this._consts._remove, _target:c}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onRemoveDatarow", [c, d], !0);
    this.grid.event.trigger("onDataChange", !1, !0);
    (d === void 0 || d.noRefresh !== !0) && this.refresh(d);
    return!0
  };
  b.removeList = function(a, d) {
    if(e.isEmptyArray(a)) {
      return!1
    }
    var c = this.mapList(a).mapped;
    if(c.length === 0) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange", !1, !0);
    this.removeListFromIdMap(c);
    this.removeListFromUniqueMap(c);
    this.all.removeList(c);
    this.cleanList(c);
    if(e.isNull(d) || d.undo !== !0) {
      this._history.push({_action:this._consts._removeList, _target:c}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onRemoveDatalist", [c, d], !0);
    this.grid.event.trigger("onDataChange", !1, !0);
    (d === void 0 || d.noRefresh !== !0) && this.refresh(d);
    return!0
  };
  b._keydownCanvas = function(a) {
    if(a.ctrlKey) {
      switch(a.which) {
        case "Z".charCodeAt(0):
          this.undo();
          break;
        case "Y".charCodeAt(0):
          this.redo()
      }
    }
  };
  b.undo = function() {
    if(this._history.length === 0) {
      return!1
    }
    var a = this._history.pop();
    this._redoHistory.push(a);
    var d = a._target, c = a._before;
    switch(a._action) {
      case this._consts._add:
        return this.remove(d, {undo:!0});
      case this._consts._addList:
        return this.removeList(d, {undo:!0});
      case this._consts._update:
        return this.update(d, c, {undo:!0});
      case this._consts._updateList:
        for(var a = [], g = 0, b = d.length;g < b;g++) {
          a.push({datarow:d[g], change:c[g]})
        }
        return this.updateList(a, {undo:!0});
      case this._consts._remove:
        return this.add(d, {undo:!0});
      case this._consts._removeList:
        return this.addList(d, {undo:!0})
    }
  };
  b.redo = function() {
    if(this._redoHistory.length === 0) {
      return!1
    }
    var a = this._redoHistory.pop();
    this._history.push(a);
    var d = a._target, c = a._change;
    switch(a._action) {
      case this._consts._add:
        return this.add(d, {undo:!0});
      case this._consts._addList:
        return this.addList(d, {undo:!0});
      case this._consts._update:
        return this.update(d, c, {undo:!0});
      case this._consts._updateList:
        for(var a = [], g = 0, b = d.length;g < b;g++) {
          a.push({datarow:d[g], change:c[g]})
        }
        return this.updateList(a, {undo:!0});
      case this._consts._remove:
        return this.remove(d, {undo:!0});
      case this._consts._removeList:
        return this.removeList(d, {undo:!0})
    }
  };
  b.equals = function(a, d) {
    if(e.isNullOr(a, d)) {
      return!1
    }
    if(a === d) {
      return!0
    }
    this._idMode === this._consts._composite && (this.makeCompositeKey(a), this.makeCompositeKey(d));
    var c = this.idKey;
    return e.isNull(a[c]) || e.isNull(d[c]) ? !1 : a[c] === d[c]
  };
  b.getReal = function() {
    var a = this._consts._notReal;
    return this.all.filter(function(d) {
      return d.hasOwnProperty(a) === !1
    })
  };
  b.filterReal = function(a) {
    var d = this._consts._notReal;
    return a.filter(function(a) {
      return a.hasOwnProperty(d) === !1
    })
  };
  b.isReal = function(a) {
    return e.isNotNull(a) && a.hasOwnProperty(this._consts._notReal) === !1
  };
  b.dropNonReal = function(a) {
    if(!e.isEmptyArray(a)) {
      for(var d = this._consts._notReal, c = a.length - 1;c >= 0;c--) {
        a[c].hasOwnProperty(d) && (delete a[c][d], a.removeAt(c))
      }
    }
  };
  b.removeIdCol = function(a) {
    if(!(this._idMode === this._consts._given || e.isEmptyArray(a))) {
      for(var d = this.idKey, c = 0, g = a.length;c < g;c++) {
        a[c].hasOwnProperty(d) && delete a[c][d]
      }
    }
  };
  b.removeId = function(a) {
    e.isNotNull(a) && this._idMode !== this._consts._given && a.hasOwnProperty(this.idKey) && delete a[this.idKey]
  };
  b.cleanList = function(a) {
    e.isEmptyArray(a) || (this.removeIdCol(a), this.dropNonReal(a))
  };
  b.purify = function(a) {
    if(a !== void 0) {
      a = this.all
    }
    if(e.isEmptyArray(a)) {
      return[]
    }
    for(var d = [], c = a.length, g = 0, b, j, i = this._consts._notReal;g < c;g++) {
      if((j = a[g]).hasOwnProperty(i) === !1) {
        for(b in d.push({}), j) {
          j.hasOwnProperty(b) && j.hasOwnProperty(b) && b.substring(0, 3)
        }
      }
    }
    return d
  };
  b.setSorter = function(a) {
    this.grid.event.trigger("onChangeSorter", [this._sorter, a], !0);
    this._sorter = a
  };
  b._sort = function(a) {
    e.isNull(a) ? a = this._sorter : this.setSorter(a);
    if(!e.isNull(a)) {
      var d = this.all;
      this.grid.event.trigger("onBeforeSort", [d], !0);
      e.isNotNull(a.comparator) ? (d.sort(a.comparator), a.desc && d.reverse()) : e.isNotNull(a.lexi) && this.constructor._lexi(d, a.lexi, a.desc);
      this.grid.event.trigger("onAfterSort", [d], !0)
    }
  };
  b.addFilter = function(a) {
    this._filters.push(a);
    this.refresh()
  };
  b.removeFilter = function(a) {
    var d = this._filters.length;
    this._filters.remove(a);
    d !== this._filters.length && this.refresh()
  };
  b._filter = function() {
    var a = this.datalist, d = this.failed, c = 0, g = this._filters.length, b, j;
    this.grid.event.trigger("onBeforeFilter", [a, d], !0);
    a.length = 0;
    a.pushList(this.all);
    for(d.length = 0;c < g;c++) {
      b = this._filters[c];
      for(j = a.length - 1;j >= 0;j--) {
        b(a[j]) || (d.push(a[j]), a.removeAt(j))
      }
    }
    this.grid.event.trigger("onFilter", [a, d], !0);
    this.grid.event.trigger("onAfterFilter", [a, d], !0)
  };
  b._finish = function(a) {
    this._reidx();
    this.grid.event.trigger("onAfterRefresh", [a], !0)
  };
  b.refresh = function(a) {
    this.grid.event.trigger("onBeforeRefresh", !1, !0);
    a === void 0 ? this._sort() : a.noSort !== !0 && this._sort(a.sorter);
    (a === void 0 || a.noFilter !== !0) && this._filter();
    this._finish(a)
  };
  b.exportRowToArray = function(a, d) {
    if(!(a in this.datalist)) {
      return null
    }
    d || (d = this.grid.colDefMgr.getKeys());
    for(var c = this.datalist[a], g = [], b, j = 0, i = d.length;j < i;j++) {
      b = d[j], g.push(b in c ? c[b] : null)
    }
    return g
  };
  b.exportToArray = function(a, d, c) {
    a || (a = this.grid.colDefMgr.getKeys());
    for(var d = this.datalist.slice(d, c), g = [], b, j, i = 0, e = d.length, f, h = a.length;i < e;i++) {
      b = d[i];
      f = 0;
      for(c = [];f < h;f++) {
        j = a[f], c.push(j in b ? b[j] : null)
      }
      g.push(c)
    }
    return g
  };
  f._lexi = function(a, d, c) {
    var g = Object.prototype.toString;
    Object.prototype.toString = e.isFunction(d) ? d : function() {
      return this[d]
    };
    a.sort();
    Object.prototype.toString = g;
    c && a.reverse()
  }
})();
console && console.log && console.log('reading javascript source "EventManager.js"...');
jx.grid.EventManager = {};
(function() {
  function f(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    a.grid.event = this;
    this._map = {}
  }
  var h = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.EventManager", f);
  f.getInstance = function(a) {
    return new f(a)
  };
  var b = f.prototype;
  b.destroy = function() {
    var a, d = this._map;
    for(a in d) {
      d.hasOwnProperty(a) && h._deleteArray(d, a)
    }
    h._destroy(this, {name:"EventManager", path:"event", map:"_map"})
  };
  b.register = function(a, d, c) {
    if(e.isString(a)) {
      this._parseAndAdd(a, d, c)
    }else {
      if(e.isNotNull(a.e)) {
        this._parseAndAdd(a.e, a.f, a.t)
      }else {
        for(var g, d = a.length, b;g < d;g++) {
          e.isNotNull(b = a[g]) && this._parseAndAdd(b.e, b.f, b.t)
        }
      }
    }
  };
  b.bind = function(a, d, c) {
    if(e.isString(a)) {
      this._parseAndAdd(a, d, c)
    }else {
      for(var g in a) {
        a.hasOwnProperty(g) && this._parseAndAdd(g, a[g], d)
      }
    }
  };
  b._parseAndAdd = function(a, d, c) {
    e.isNull(c) && (c = window);
    var a = e.split(a), g = a.length, b = 0;
    if(e.isFunction(d)) {
      for(;b < g;b++) {
        this._addHandler(a[b], d, c)
      }
    }else {
      if(e.isString(d)) {
        for(var d = e.split(d), j = d.length, i, f;b < g;b++) {
          i = a[b];
          for(f = 0;f < j;f++) {
            this._addHandler(i, c[d[f]], c)
          }
        }
      }else {
        for(j = d.length;b < g;b++) {
          i = a[b];
          for(f = 0;f < j;f++) {
            this._addHandler(i, d[f], c)
          }
        }
      }
    }
  };
  b._addHandler = function(a, d, c) {
    this._map.hasOwnProperty(a) || (this._map[a] = []);
    this._map[a].push({fn:d, target:c})
  };
  b.unregister = function(a, d) {
    var c = this._map;
    if(c.hasOwnProperty(a)) {
      var g = c[a];
      if(e.isNull(d)) {
        g.length = 0, delete c[a]
      }else {
        for(var b = 0, j = g.length;b < j;b++) {
          if(g[b].fn === d) {
            g.removeAt(b);
            g.length === 0 && delete c[a];
            break
          }
        }
      }
    }
  };
  b.trigger = function(a, d, c, g) {
    this.grid.log("firing event=" + a, 3);
    var b = this._map;
    if(b.hasOwnProperty(a)) {
      var b = b[a], j = b.length;
      if(j) {
        if(this.grid.log(j + " handlers registered for event=" + a, 4), a = 0, c) {
          if(d && d.length) {
            for(;a < j;a++) {
              c = b[a], c.fn.apply(c.target, d)
            }
          }else {
            for(;a < j;a++) {
              c = b[a], c.fn.call(c.target)
            }
          }
        }else {
          g = g || [];
          if(d && d.length) {
            for(;a < j;a++) {
              c = b[a], g.push(c.fn.apply(c.target, d))
            }
          }else {
            for(;a < j;a++) {
              c = b[a], g.push(c.fn.call(c.target))
            }
          }
          return g
        }
      }else {
        this.grid.log("no handlers registered for event=" + a, 4)
      }
    }else {
      this.grid.log("no handlers registered for event=" + a, 4)
    }
  };
  b.triggerMultiple = function(a, d, c) {
    var a = a.split(","), g = 0, b = a.length;
    if(c) {
      for(c = [];g < b;g++) {
        this.trigger(a[g], d, !1, c)
      }
      return c
    }else {
      for(;g < b;g++) {
        this.trigger(a[g], d, !0)
      }
    }
  };
  b.triggerInvalid = function(a, d) {
    var c = this.trigger(a, d);
    return c && c.some(function(a) {
      return a === !1
    })
  };
  b.sendToBack = function(a, d) {
    for(var c = this._map[a], g = c.length, b, j = -1, i = 0;i < g;i++) {
      if(c[i].fn === d) {
        j = i;
        b = c[i];
        break
      }
    }
    j > -1 && (c.removeAt(i), c.push(b))
  };
  b.sendToFront = function(a, d) {
    for(var c = this._map[a], g = c.length, b, j = -1, i = 0;i < g;i++) {
      if(c[i].fn === d) {
        j = i;
        b = c[i];
        break
      }
    }
    j > -1 && (c.removeAt(i), c.unshift(b))
  }
})();
console && console.log && console.log('reading javascript source "Tree.js"...');
jx.struct = {};
jx.struct.TreeNode = {};
jx.struct.Tree = {};
var TreeNode = {}, Tree = {};
(function() {
  function f(a) {
    this.tree = a.tree;
    this.data = a.data;
    this.nodeId = a.nodeId;
    this.childrenMap = {};
    this.children = []
  }
  function h(a) {
    this.list = a.list;
    this._options = JGM._extend({nodeKey:"nodeId", parentKey:"parentId"}, a.options);
    this.map = {};
    this.root = new f({tree:this});
    this.infants = {}
  }
  var e = goog.getObjectByName("jx.util");
  goog.exportSymbol("jx.struct.TreeNode", f);
  goog.exportSymbol("jx.struct.Tree", h);
  goog.exportSymbol("TreeNode", f);
  goog.exportSymbol("Tree", h);
  f.getInstance = function(a) {
    return new f(a)
  };
  var b = f.prototype;
  b.destroy = function() {
    this.detach();
    delete this.tree;
    delete this.data;
    delete this.nodeId;
    delete this.childrenMap;
    delete this.children
  };
  b.destroyCompletely = function() {
    this.detachCompletely();
    delete this.tree;
    delete this.data;
    delete this.nodeId;
    delete this.childrenMap;
    delete this.children
  };
  b.destroyDown = function() {
    e.isNotNull(this.parent) && this.parent.removeChild(this);
    this.traverse({post:!0, fn:function() {
      this.destroy()
    }})
  };
  b.detach = function() {
    delete this.parent;
    delete this.level;
    this.children.length = 0;
    this.childrenMap = {}
  };
  b.detachCompletely = function() {
    e.isNotNull(this.parent) && this.parent.removeChild(this);
    this.removeAllChildren();
    delete this.parent;
    delete this.level
  };
  b.detachDown = function() {
    e.isNotNull(this.parent) && this.parent.removeChild(this);
    this.traverse({post:!0, fn:function() {
      this.detach()
    }})
  };
  b.isRoot = function() {
    return e.isNull(this.parent)
  };
  b.getRoot = function() {
  };
  b.isLeaf = function() {
    return this.children.length === 0
  };
  b.setParent = function(a) {
    if(this.parent !== a) {
      e.isNotNull(this.parent) && this.parent.removeChild(this), this.parent = a, delete this.level, e.isNotNull(a) && a.addChild(this)
    }
  };
  b.hasChild = function(a) {
    return this.childrenMap.hasOwnProperty(a.nodeId)
  };
  b.addChild = function(a) {
    this.hasChild(a) || (this.children.push(a), this.childrenMap[a.nodeId] = this.children.length - 1, a.setParent(this))
  };
  b.addChildAt = function(a, d) {
    var c;
    if(this.hasChild(d)) {
      c = this.childrenMap[d.nodeId];
      if(c === a) {
        return
      }
      this.children.removeAt(c)
    }
    this.children.addAt(a, d);
    e.isNotNull(c) && c < a ? this.resetChildIdx(c) : this.resetChildIdx(a);
    d.setParent(this)
  };
  b.removeChild = function(a) {
    if(this.hasChild(a)) {
      var d = this.childrenMap[a.nodeId];
      this.children.removeAt(d);
      delete this.childrenMap[a.nodeId];
      this.resetChildIdx(d);
      delete a.parent;
      delete a.level
    }
  };
  b.removeChildAt = function(a) {
    var d = this.children[a];
    this.children.removeAt(a);
    delete this.childrenMap[d.nodeId];
    this.resetChildIdx(a);
    delete d.parent;
    delete d.level
  };
  b.resetChildIdx = function(a) {
    e.isNull(a) && (a = 0);
    for(var d = this.children, c = d.length, g = this.childrenMap;a < c;a++) {
      g[d[a].nodeId] = a
    }
  };
  b.removeAllChildren = function() {
    for(var a = 0, d = this.children, c = d.length;a < c;a++) {
      delete d[a].parent, delete d[a].level
    }
    d.length = 0;
    this.childrenMap = {}
  };
  b.getSiblings = function() {
    if(this.isRoot()) {
      return[]
    }
    var a = this.parent.children.slice();
    a.removeAt(this.parent.getChildIdx(this));
    return a
  };
  b.getChildIdx = function(a) {
    return this.childrenMap[a.nodeId]
  };
  b.getIdx = function() {
    return this.isRoot() ? -1 : this.parent.getChildIdx(this)
  };
  b.getPath = function() {
    return this.traverse({res:[], up:!0, post:!0, fn:function(a) {
      this.isRoot() || a.res.push(this.getIdx())
    }}).res
  };
  b.getAncestors = function() {
    var a = {res:[], up:!0, post:!0, fn:function(a) {
      a.res.push(this)
    }};
    this.traverse(a);
    a.res.pop();
    return a.res
  };
  b.getDescendents = function() {
    var a = {res:[], fn:function(a) {
      a.res.push(this)
    }};
    this.traverse(a);
    a.res.shift();
    return a.res
  };
  b.getLevel = function() {
    return this.isRoot() ? this.level = -1 : this.level = this.parent.getLevel() + 1
  };
  b.find = function(a) {
    return this.traverse({fn:function(d) {
      if(this.data === a) {
        d.res = this, d.stop = !0
      }
    }}).res
  };
  b.traverse = function(a, d) {
    if(a.stop) {
      return a
    }
    if(a.up) {
      this.isRoot() ? this.callFn(a) : a.post ? (this.parent.traverse(a), this.callFn(a)) : (this.callFn(a), this.parent.traverse(a))
    }else {
      var c = 0, g = this.children, b = g.length;
      if(a.post) {
        for(;c < b;c++) {
          g[c].traverse(a, c)
        }
        this.callFn(a, d)
      }else {
        if(this.callFn(a, d), a.propagate === !1) {
          delete a.propagate
        }else {
          for(;!a.stop && c < b;c++) {
            g[c].traverse(a, c)
          }
        }
      }
    }
    return a
  };
  b.traverseChildren = function(a) {
    for(var d = 0, c = this.children, g = c.length;d < g;d++) {
      c[d].traverse(a, d)
    }
  };
  b.traverseParent = function(a) {
    e.isNotNull(this.parent) && this.parent.traverse(a)
  };
  b.callFn = function(a, d) {
    if(!a.stop) {
      e.isNull(a.target) ? e.callFn(this, a.fn, a, d) : (a.node = this, e.callFn(a.target, a.fn, a, d))
    }
  };
  h.getInstance = function(a) {
    return new h(a)
  };
  b = h.prototype;
  b.__init = function() {
    this.makeTree()
  };
  b.destroy = function() {
    this.root.destroyDown();
    this.map = {};
    this.emptyInfants();
    delete this.list;
    delete this._options;
    delete this.map;
    delete this.root;
    delete this.infants;
    delete this.mid
  };
  b.detach = function() {
    this.root.detachDown();
    this.emptyInfants()
  };
  b.emptyInfants = function() {
    var a, d = this.infants;
    for(a in d) {
      if(d.hasOwnProperty(a)) {
        d[a].length = 0
      }
    }
    this.infants = {}
  };
  b.reattach = function(a) {
    this.detach();
    if(e.isNull(a)) {
      a = this.list
    }
    for(var d = this._options.nodeKey, c = this.map, g = a.length, b = 0;b < g;b++) {
      this.attachNode(c[a[b][d]])
    }
  };
  b.makeTree = function(a) {
    if(e.isNull(a)) {
      a = this.list
    }
    for(var d = 0, c = a.length;d < c;d++) {
      this.createNode(a[d])
    }
  };
  b.hasNode = function(a) {
    return e.isNotNull(a) && this.map.hasOwnProperty(a[this._options.nodeKey])
  };
  b.getNode = function(a) {
    return this.map[a[this._options.nodeKey]]
  };
  b.getNodeByNodeId = function(a) {
    return this.map[a]
  };
  b.createNode = function(a) {
    if(!this.hasNode()) {
      var d = a[this._options.nodeKey], a = new f({tree:this, data:a, nodeId:d});
      this.map[d] = a;
      this.attachNode(a);
      return a
    }
  };
  b.adoptInfants = function(a, d) {
    if(this.infants.hasOwnProperty(d)) {
      for(var c = this.infants[d], g = 0, b = c.length;g < b;g++) {
        a.addChild(c[g])
      }
      c.length = 0;
      delete this.infants[d]
    }
  };
  b.attachNode = function(a) {
    var d = a.nodeId, c = a.data[this._options.parentKey];
    this.adoptInfants(a, d);
    if(e.isNull(c) || c == d) {
      return this.root.addChild(a), !0
    }
    if(this.map.hasOwnProperty(c)) {
      return this.map[c].addChild(a), !0
    }
    this.addToInfants(a, c);
    return!1
  };
  b.changeNodeId = function(a, d, c) {
    if(d !== c) {
      delete this.map[d], this.map[c] = a, this.removeChildren(a), a.nodeId = a.data[this._options.nodeKey] = c, e.isNotNull(a.parent) && (a.parent.childrenMap[c] = a.parent.childrenMap[d], delete a.parent.childrenMap[d]), this.adoptInfants(a, c)
    }
  };
  b.changeParentId = function(a, d, c) {
    d !== c && (e.isNull(a.parent) && this.removeFromInfants(a, d), d = this.map[c], a.setParent(d), a.data[this._options.parentKey] = c, e.isNull(d) && this.addToInfants(a, c))
  };
  b.destroyNodeByData = function(a) {
    this.destroyNode(this.getNode(a))
  };
  b.destroyNode = function(a) {
    this.removeChildren(a);
    this.removeFromInfants(a);
    this.removeFromMap(a);
    a.destroyCompletely()
  };
  b.removeFromMap = function(a) {
    delete this.map[a.nodeId]
  };
  b.addToInfants = function(a, d) {
    this.infants.hasOwnProperty(d) || (this.infants[d] = []);
    this.infants[d].push(a)
  };
  b.removeFromInfants = function(a, d) {
    e.isNull(d) && (d = a.data[this._options.parentKey]);
    this.infants.hasOwnProperty(d) && (this.infants[d].remove(a), this.infants[d].length === 0 && delete this.infants[d])
  };
  b.removeChildren = function(a) {
    a.children.length !== 0 && (this.infants.hasOwnProperty(a.nodeId) || (this.infants[a.nodeId] = []), this.infants[a.nodeId].pushList(a.children), a.removeAllChildren())
  };
  b.sortList = function(a) {
    e.isNull(a) ? a = [] : a.length = 0;
    this.root.traverseChildren({fn:function() {
      a.push(this.data)
    }})
  }
})();
console && console.log && console.log('reading javascript source "Grid.js"...');
jx.grid.Grid = {};
(function() {
  function f(d) {
    this.mid = d.mid;
    this.log("creating new Grid instance...", c);
    a.call(this, d)
  }
  var h = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util"), b = goog.getObjectByName("echo"), a = goog.getObjectByName("jx.grid.BaseModule"), d = goog.getObjectByName("TimeWatch"), c = 1;
  goog.exportSymbol("jx.grid.Grid", f);
  f.V_KEYDOWN = 3;
  f.V_KEYPRESS = 3;
  f.V_KEYUP = 3;
  f.V_MOUSEMOVE = 5;
  f.V_MOUSEOVER = 4;
  f.V_MOUSEOUT = 4;
  f.V_MOUSEIN = 4;
  f.V_MOUSEDOWN = 3;
  f.V_MOUSEUP = 3;
  f.V_MOUSEENTER = 3;
  f.V_MOUSELEAVE = 3;
  f.V_CLICK = 2;
  f.V_DBLCLICK = 2;
  f.V_RESIZE = 2;
  f.V_INIT = c;
  goog.inherits(f, a);
  f.getInstance = function(a) {
    return new f(a)
  };
  var g = f.prototype;
  g._defaultOptions = function() {
    return{classGrid:"jgrid", border:"1px solid #868686", width:void 0, font:"15px Arial,Helvetica,sans-serif", style:"", borderSide:!0, imageUrl:"../images/", links:{data:"dataMgr.all", datalen:"dataMgr.all.length", shown:"dataMgr.datalist", set:"dataMgr.set", add:"dataMgr.add", addList:"dataMgr.addList", update:"dataMgr.update", updateByKey:"dataMgr.updateByKey", updateList:"dataMgr.updateList", remove:"dataMgr.remove", removeList:"dataMgr.removeList", select:"dataMgr.executeSelect", undo:"dataMgr.undo", 
    redo:"dataMgr.redo", addFilter:"dataMgr.addFilter", removeFilter:"dataMgr.removeFilter", check:"collapser.checkMgr.checkList checkMgr.checkList", checked:"collapser.checkMgr.getCheckList checkMgr.getCheckList", removeChecked:"collapser.checkMgr.removeChecked checkMgr.removeChecked", register:"event.register", trigger:"event.trigger", bind:"event.bind", unregister:"event.unregister", unbind:"event.unregister", collen:"colDefMgr.length"}, autoWidth:!1, showMessage:!1}
  };
  g._init = function(a) {
    var c = this._ctnr = a.container, d = this._options, g;
    this.name = d.name;
    this._drag = !1;
    this._lastH = this._lastW = null;
    this._vars = {scrollbarDim:void 0};
    c = this._ctnr = $("<div id='" + this.mid + "' class='" + d.classGrid + "' " + (e.isNull(d.width) ? "" : "style='width:" + d.width + "px' ") + "tabIndex='0'>").appendTo(Util$.safe$(c));
    this._vars.scrollbarDim = Util$.calScrollbarDims(c);
    g = this.event = h.create("EventManager", {grid:this, options:d.EventManager});
    this.colDefMgr = h.create("ColumnManager", {grid:this, colDefs:a.colDefs, options:d.ColDefManager});
    this.dataMgr = h.create("DataManager", {grid:this, datalist:a.datalist, options:d.DataManager});
    d.CheckManager && (this.checkMgr = h.create("CheckManager", {grid:this, options:d.CheckManager}));
    if(d.Collapser) {
      this.collapser = h.create("Collapser", {grid:this, options:d.Collapser}), this.collapser.__init()
    }
    d.ColGroup && (this.colGroup = h.create("ColumnGroup", {grid:this, options:d.ColGroup}));
    d.SelectionManager && (this.selMgr = h.create("SelectionManager", {grid:this, options:d.SelectionManager}));
    d.EditManager && (this.editMgr = h.create("EditManager", {grid:this, options:d.EditManager}));
    d.ColHeader && (this.header = h.create("ColumnHeader", {grid:this, container:c, options:d.ColHeader}));
    d.SearchManager && (this.search = h.create("SearchManager", {grid:this, container:c, options:d.SearchManager}));
    d.MenuBar && (this.menubar = h.create("MenuBar", {grid:this, container:c, options:d.MenuBar}));
    this.view = h.create("ViewportManager", {grid:this, container:c, options:d.ViewportManager});
    d.TooltipManager && (this.tooltip = h.create("TooltipManager", {grid:this, container:c, options:d.TooltipManager}));
    d.DataCreator && (this.creator = h.create("DataCreator", {grid:this, container:c, options:d.DataCreator}));
    d.Footer && (this.footer = h.create("Footer", {grid:this, container:c, options:d.Footer}));
    d.autoWidth && g.bind("onResizeCanvasWidth", this.width, this);
    this._createCss();
    g.trigger("onBeforeRenderModules", !1, !0);
    g.trigger("onRenderModules", !1, !0);
    g.trigger("onAfterRenderModules", !1, !0);
    this.msg = $("<div id='" + this.mid + "msg' class='msg' onmousedown='$(this).hide(1000)' style='position:relative;padding-left:4px;overflow:hidden;z-index:100;font-size:12px;height:21px;line-height:21px'></div>").appendTo(c).hide();
    c = c[0];
    this._lastW = c.clientWidth;
    this._lastH = c.clientHeight;
    this._registerLinks(d.links)
  };
  g._bindEvents = function() {
    h._bindGlobalEvents();
    this.log("binding Grid events...", c);
    var a = this;
    this._ctnr.bind({keydown:function(c) {
      a._keydown(c)
    }, keyup:function(c) {
      a._keyup(c)
    }, keypress:function(c) {
      a._keypress(c)
    }, mousein:function(c) {
      a._mousein(c)
    }, mouseout:function(c) {
      a._mouseout(c)
    }, mouseenter:function(c) {
      a._mouseenter(c)
    }, mouseleave:function(c) {
      a._mouseleave(c)
    }, mouseover:function(c) {
      a._mouseover(c)
    }, mousedown:function(c) {
      a._mousedown(c)
    }, click:function(c) {
      a._click(c)
    }, dblclick:function(c) {
      a._dblclick(c)
    }});
    this._charts = []
  };
  g.destroy = function() {
    this.log("destroying Grid...", c);
    try {
      this.log("event:beforeDispose.", c), this.dispatchEvent({type:"beforeDispose"}), e.isEmptyObj(h.m.Grid) && (this.log("unbinding global event handlers.", c), h._unbindGlobalEvents()), this.log("event:onDestroy.", c), this.event.trigger("onDestroy", !1, !0), this.log("destroying grid vars...", c), h._destroy(this, {name:"Grid", module:"event", $:"_ctnr", map:"_options", style:"_style _dynStyle"}), this.dispose()
    }catch(a) {
      return a
    }
  };
  g._registerLinks = function(a) {
    var c, d, g, b, f, h, o, n, s, r;
    a:for(c in a) {
      if(a.hasOwnProperty(c) && !(c in this)) {
        d = e.split(a[c]);
        g = d.length;
        b = 0;
        b:for(;b < g;b++) {
          if(f = d[b].split("."), h = f.length, !(h < 1)) {
            o = this;
            n = this;
            s = "";
            for(r = 0;r < h;r++) {
              if(f[r] in o) {
                n = o, o = o[s = f[r]]
              }else {
                continue b
              }
            }
            this._registerLink(c, o, n, s);
            continue a
          }
        }
      }
    }
  };
  g._registerLink = function(a, c, d, g) {
    if(this.hasOwnProperty(a)) {
      return!1
    }
    this[a] = e.isFunction(c) ? function() {
      return c.apply(d, arguments)
    } : function() {
      return d[g]
    };
    return!0
  };
  g._createCss = function() {
    this.log("creating CSS...", c);
    var a = {type:"beforeCreateCss", css:[]}, d = this._options, g = this.event;
    this.dispatchEvent(a);
    this.log("creating CSS for Grid...", c);
    var b = g.trigger("onCreateCss"), b = b ? b.join("") : "", a = e.sprint("%selector%{overflow:hidden;font:%font%;%border%%style%}%submodule%", {selector:"#" + this.mid, font:d.font, border:d.borderSide ? "border:" + d.border + ";" : "border-top:" + d.border + ";border-bottom:" + d.border + ";", style:d.style, submodule:a.css.join("") + b});
    this._style = e.createStyle(a);
    a = {type:"beforeCreateDynamicCss", css:[]};
    this.dispatchEvent(a);
    b = (b = g.trigger("onCreateDynamicCss")) ? b.join("") : "";
    this._dynStyle = e.createStyle(a.css.join("") + ";" + b)
  };
  g._recreateDynamicCss = function() {
    this.log("rewriting dynamic css...", 2);
    var a = this.event.trigger("onCreateDynamicCss");
    (a = a ? a.join("") : "") && e.setStyle(this._dynStyle, a)
  };
  g._keydown = function(a) {
    var c = this.event, d = [a], g = a.which;
    this.log("UI event:keydown detected. event=" + a.type + ", keycode=" + g, 3);
    c.triggerInvalid("onBeforeKeydown", d) ? this.log("UI event:keydown prevented.", 3) : (c.trigger("keydown_" + g, d, !0), c.trigger("keydown", d, !0))
  };
  g._keyup = function(a) {
    var c = this.event, d = [a], g = a.which;
    this.log("UI event:keyup detected. event=" + a.type + ", keycode=" + g, 3);
    c.triggerInvalid("onBeforeKeyup", d) ? this.log("UI event:keyup prevented.", 3) : (c.trigger("keyup_" + g, d, !0), c.trigger("keyup", d, !0))
  };
  g._keypress = function(a) {
    var c = this.event, d = [a], g = a.which;
    this.log("UI event:keypress detected. event=" + a.type + ", keycode=" + g, 3);
    c.triggerInvalid("onBeforeKeypress", d) ? this.log("UI event:keypress prevented.", 3) : (c.trigger("keypress_" + g, d, !0), c.trigger("keypress", d, !0))
  };
  g._mousein = function(a) {
    var c = this.event, d = [a];
    this.log("UI event:mousein detected. event=" + a.type, 4);
    c.triggerInvalid("onBeforeMousein", d) ? this.log("UI event:mousein prevented.", 4) : (this._drag && c.trigger("dragin", d, !0), c.trigger("mousein", d, !0))
  };
  g._mouseout = function(a) {
    var c = this.event, d = [a];
    this.log("UI event:mouseout detected. event=" + a.type, 4);
    c.triggerInvalid("onBeforeMouseout", d) ? this.log("UI event:mouseout prevented.", 4) : (this._drag && c.trigger("dragout", d, !0), c.trigger("mouseout", d, !0))
  };
  g._mouseenter = function(a) {
    var c = this.event, d = [a];
    this.log("UI event:mouseenter detected. event=" + a.type, 3);
    c.triggerInvalid("onBeforeMouseenter", d) ? this.log("UI event:mouseenter prevented.", 3) : (this._drag && c.trigger("dragenter", d, !0), c.trigger("mouseenter", d, !0))
  };
  g._mouseleave = function(a) {
    var c = this.event, d = [a];
    this.log("UI event:mouseleave detected. event=" + a.type, 3);
    c.triggerInvalid("onBeforeMouseleave", d) ? this.log("UI event:mouseleave prevented.", 3) : (this._drag && c.trigger("dragleave", d, !0), c.trigger("mouseleave", d, !0))
  };
  g._mousemove = function(a) {
    var c = this.event, d = [a];
    this.log("UI event:mousemove detected. event=" + a.type, 5);
    c.triggerInvalid("onBeforeMousemove", d) ? this.log("UI event:mousemove prevented.", 5) : (this._drag && c.trigger("dragmove", d, !0), c.trigger("mousemove", d, !0))
  };
  g._mouseover = function(a) {
    var c = this.event, d = [a];
    this.log("UI event:mouseover detected. event=" + a.type, 4);
    c.triggerInvalid("onBeforeMouseover", d) ? this.log("UI event:mouseover prevented.", 4) : (this._drag && c.trigger("dragover", d, !0), c.trigger("mouseover", d, !0))
  };
  g._mousedown = function(a) {
    var c = this.event, d = [a];
    this.log("UI event:mousedown detected. event=" + a.type, 3);
    this._drag = !0;
    c.triggerInvalid("onBeforeMousedown", d) ? this.log("UI event:mousedown prevented.", 3) : c.trigger("mousedown", d, !0)
  };
  g._mouseup = function(a) {
    var c = this.event, d = [a];
    this.log("UI event:mouseup detected. event=" + a.type, 3);
    this._drag = !1;
    c.trigger("unsetDrag", !1, !0);
    this.containsEvent(a) && (c.triggerInvalid("onBeforeMouseup", d) ? this.log("UI event:mouseup prevented.", 3) : c.trigger("mouseup", d, !0))
  };
  g._click = function(a) {
    var c = this.event, d = [a];
    this.log("UI event:click detected. event=" + a.type, 2);
    c.triggerInvalid("onBeforeClick", d) ? this.log("UI event:click prevented.", 2) : c.trigger("click", d, !0)
  };
  g._dblclick = function(a) {
    var c = this.event, d = [a];
    this.log("UI event:dblclick detected. event=" + a.type, 2);
    c.triggerInvalid("onBeforeDblclick", d) ? this.log("UI event:dblclick prevented.", 2) : c.trigger("dblclick", d, !0)
  };
  g._resize = function(a) {
    var c = this.event;
    this.log("event:resize detected. event=" + a.type, 2);
    var d = !1, g = this._ctnr[0], b = this._lastW, e = this._lastH, f = g.clientWidth, g = g.clientHeight;
    if(f >= 1 && b !== f) {
      this.log("event:resizeWidth detected. " + b + "->" + f, 2), c.trigger("resizeWidth", [f, b], !0), this._lastW = f, d = !0
    }
    if(g >= 1 && e !== g) {
      this.log("event:resizeHeight detected. " + e + "->" + g, 2), c.trigger("resizeHeight", [g, e], !0), this._lastH = g, d = !0
    }
    d && c.trigger("resize", [a], !0)
  };
  g.width = function(a) {
    var c = this._ctnr[0], d = c.clientWidth, g = this.event;
    if(!a) {
      return d
    }
    typeof a != "number" && (a = parseInt(a));
    if(a < 1 || a === d || !isFinite(a)) {
      return d
    }
    this.log("set width. " + this._lastW + "->" + a, 2);
    c.style.width = a + "px";
    g.trigger("resizeWidth", [a, this._lastW], !0);
    this._lastW = a;
    g.trigger("resize", !1, !0);
    return a
  };
  g.height = function(a) {
    var c = this._ctnr[0], d = c.clientHeight, g = this.event;
    if(!a) {
      return d
    }
    typeof a != "number" && (a = parseInt(a));
    if(a < 1 || a === d || !isFinite(a)) {
      return d
    }
    this.log("set height. " + this._lastH + "->" + a, 2);
    c.style.height = a + "px";
    g.trigger("resizeHeight", [a, this._lastH], !0);
    this._lastH = a;
    g.trigger("resize", !1, !0);
    return a
  };
  g.getCellByIdAndKey = function(a, c) {
    return h.create("Cell", {grid:this, datarow:this.dataMgr.getById(a), colDef:this.colDefMgr.getByKey(c)})
  };
  g.getCellByIdx = function(a, c) {
    return h.create("Cell", {grid:this, row:a, col:c})
  };
  g.error = function(a) {
    for(var c = h.error[a], d = 1, g = arguments.length;d < g;d++) {
      c = c.replace(RegExp("%" + (d - 1), "g"), arguments[d])
    }
    c = Error(c);
    c.code = a;
    this.printError(c.message);
    this.log("error occurred... code=" + a + ", msg=" + c.message || c.msg);
    this.event.trigger("onError", [c], !0);
    return c
  };
  g.printError = function(a) {
    this.log("error message... msg=" + a);
    if(this._options.showMessage) {
      var c = this.msg, d = c[0], g = d.style;
      d.innerHTML = a;
      g.width = this._ctnr[0].clientWidth + "px";
      g.background = "#ffebe8";
      g.color = "#333";
      c.show();
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function() {
        c.hide(1E3)
      }, 5E3)
    }
  };
  g.printMessage = function(a) {
    this.log("message... msg=" + a);
    if(this._options.showMessage) {
      var c = this.msg, d = c[0], g = d.style;
      d.innerHTML = a;
      g.width = this._ctnr[0].clientWidth + "px";
      g.background = "#dfdfdf";
      g.color = "#6f6f6f";
      c.show();
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function() {
        c.hide(1E3)
      }, 5E3)
    }
  };
  g.containsEvent = function(a) {
    return e.contains(this._ctnr[0], a.target)
  };
  g.getChart = function(a) {
    return this._charts[a]
  };
  g.log = function(a, c) {
    2 >= (c || 0) && b("Grid[" + this.mid + "]: " + a)
  };
  g.twstart = function(a) {
    this._tw = new d(a)
  };
  g.twlap = function(a) {
    this._tw.lap(a)
  };
  g.twstop = function(a) {
    this._tw.stop(a)
  };
  g.twreset = function(a) {
    this._tw.reset(a)
  };
  g.twprint = function() {
    this.log(this._tw)
  };
  g.chart = function(a, d, g, b) {
    this.log("creating chart... type=" + d + ", columns=[" + g.join(",") + "]", c);
    var e, f, d = d.toLowerCase();
    switch(d) {
      case "area":
        e = "corechart";
        f = "AreaChart";
        break;
      case "bar":
        e = "corechart";
        f = "BarChart";
        break;
      case "candle":
        e = "corechart";
        f = "CandlestickChart";
        break;
      case "column":
        e = "corechart";
        f = "ColumnChart";
        break;
      case "combo":
        e = "corechart";
        f = "ComboChart";
        break;
      case "gauge":
        e = "gauge";
        f = "Gauge";
        break;
      case "geo":
        e = "geochart";
        f = "GeoChart";
        break;
      case "line":
        e = "corechart";
        f = "LineChart";
        break;
      case "pie":
        e = "corechart";
        f = "PieChart";
        break;
      case "scatter":
        e = "corechart";
        f = "ScatterChart";
        break;
      case "table":
        e = "table";
        f = "Table";
        break;
      case "treemap":
        e = "treemap";
        f = "TreeMap";
        break;
      default:
        throw Error("unknown chart type: " + d);
    }
    google.load("visualization", "1", {packages:[e]});
    var h = this, o = this.colDefMgr, n = this.dataMgr, s = g.map(function(a) {
      if(a = o.getByKey(a)) {
        return a
      }
      throw Error("column key not found");
    }), r = n.exportToArray(g);
    google.setOnLoadCallback(function() {
      for(var c = new google.visualization.DataTable, e = 0, k = s.length, o, w;e < k;e++) {
        o = s[e];
        w = o.type;
        switch(w) {
          case "boolean":
            w = "boolean";
            break;
          case "int":
          ;
          case "integer":
          ;
          case "long":
          ;
          case "float":
          ;
          case "double":
            w = "number";
            break;
          case "string":
          ;
          case "text":
            w = "string"
        }
        c.addColumn(w || e === 0 && "string" || "number", o.name)
      }
      c.addRows(r);
      var x = h._charts[a] = new google.visualization[f](document.getElementById(a));
      x.draw(c, b);
      h.event.bind("onAfterRefresh", function() {
        h.log("redrawing chart... type=" + d + ", columns=[" + g.join(",") + "]", 2);
        c.removeRows(0, c.getNumberOfRows());
        c.addRows(n.exportToArray(g));
        x.draw(c, b)
      })
    })
  }
})();
console && console.log && console.log('reading javascript source "SelectionManager.js"...');
jx.grid.SelectionManager = {};
(function() {
  function f(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    this.grid.selMgr = this;
    this._options = h._extend({rowSelKey:this.grid.dataMgr.idKey, bgColorSelection:"#DCEBFE", bgColorLast:"#f1ca7f", bgColorRange:"#D9D9D9", classSelection:"jgrid-selection", classLast:"selection-last", classRange:"selection-range", multiSelectEnabled:!1, classRowSelected:"rowSelected", highlightRowEnabled:!0, bgColorRowSelected:"#d8dfea"}, a.options);
    this._consts = {_UP:1, _DOWN:2, _LEFT:3, _RIGHT:4, _PGDN:5, _PGUP:6, _HOME:7, _END:8, _NAVKEYS:{}};
    this._consts._NAVKEYS = e.which(["enter", "tab", "arrow", "pgdn", "pgup", "home", "end"]);
    this._rows = {length:0};
    this._cols = {length:0};
    this.__init()
  }
  var h = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var b = goog.getObjectByName("jx.grid.Cell");
  goog.exportSymbol("jx.grid.SelectionManager", f);
  f.getInstance = function(a) {
    return new f(a)
  };
  var a = f.prototype;
  a.__init = function() {
    this.bindEvents()
  };
  a.bindEvents = function() {
    this.grid.event.bind({onGetCellClass:this._onGetCellClass, onCreateCss:this._onCreateCss, onDestroy:this._destroy, keydownCanvas:this._keydownCanvas, dragoverCanvas:this._dragoverCanvas, mousedownCanvas:this._mousedownCanvas, onBeforeRerender:this._onBeforeRerender, onAfterRerender:this.onAfterRerender, onBeforeDataChange:this.onBeforeDataChange}, this)
  };
  a._destroy = function() {
    h._deleteMap(this._consts, "_NAVKEYS");
    var a, c = this._rows, g = this._cols;
    for(a in c) {
      c.hasOwnProperty(a) && a !== "length" && h._deleteMap(c, a)
    }
    for(a in g) {
      g.hasOwnProperty(a) && a !== "length" && h._deleteMap(g, a)
    }
    h._destroy(this, {name:"SelectionManager", path:"selMgr", map:"_rows _cols _range _last _consts _options"})
  };
  a._onCreateCss = function() {
    var a = this.grid.event.trigger("onBeforeCreateSelCss"), c = "#" + this.grid.mid + " .", g = this._options, a = a || [];
    g.highlightRowEnabled === !0 && a.push(c + g.classRowSelected + " > *{background:" + g.bgColorRowSelected + "}");
    g.multiSelectEnabled === !0 && (a.push(c + g.classSelection + "{background:" + g.bgColorSelection + "}"), a.push(c + g.classRange + "{background:" + g.bgColorRange + "}"));
    a.push(c + g.classLast + "{background:" + g.bgColorLast + "}");
    return a.join("\n")
  };
  a._onGetCellClass = function(a, c, g, b) {
    var f = "", i = this._last, h = this._range, k = this._rows, q = this._options;
    e.isNotNull(i) && i.getDatarow() === g && i.getColDef() === b && (f += q.classLast);
    q.multiSelectEnabled === !0 && (e.isNotNull(h) && h.getDatarow() === g && h.getColDef() === b && (f += " " + q.classRange), k.hasOwnProperty(a) && k[a].hasOwnProperty(c) && (f += " " + q.classSelection));
    return f
  };
  a._mousedownCanvas = function(a, c) {
    if(!e.isNotNull(this._last) || !this._last.equals(c)) {
      this.grid.event.trigger("onBeforeSelect", [a, c], !0), this._options.multiSelectEnabled === !1 ? this.selectCell(c) : a.shiftKey && e.isNotNullAnd(this._last, this._range) ? this.selectRange(c) : a.ctrlKey ? c.getKey() === this._options.rowSelKey ? this.addRow(c) : this.addCell(c) : this.selectCell(c)
    }
  };
  a._dragoverCanvas = function(a, c) {
    this._options.multiSelectEnabled === !1 ? this.selectCell(c) : e.isNotNullAnd(this._last, this._range) && this.selectRange(c)
  };
  a._keydownCanvas = function(a) {
    var c = this._last;
    if(e.isNullOr(c, this._range)) {
      this._consts._NAVKEYS[a.which] && this.selectCell(h.create("Cell", {grid:this.grid, row:this.grid.view._getFirstSafeVisibleRow(), col:this.grid.view._getFirstSafeVisibleCol()}))
    }else {
      var g = this.grid.event;
      if(this._consts._NAVKEYS[a.which]) {
        if(!g.triggerInvalid("onBeforeNavigate", [a])) {
          var b;
          a.preventDefault();
          switch(a.which) {
            case e.keyMapKeydown.tab:
              b = a.shiftKey ? this._idxToCell(this._consts._LEFT, c) : this._idxToCell(this._consts._RIGHT, c);
              this.selectCell(b);
              break;
            case e.keyMapKeydown.enter:
              b = a.shiftKey ? this._idxToCell(this._consts._UP, c) : this._idxToCell(this._consts._DOWN, c);
              this.selectCell(b);
              break;
            case e.keyMapKeydown.up:
              this._options.multiSelectEnabled && a.shiftKey ? (b = this._idxToCell(this._consts._UP, this._range), this.selectRange(b)) : (b = this._idxToCell(this._consts._UP, c), this.selectCell(b));
              break;
            case e.keyMapKeydown.down:
              this._options.multiSelectEnabled && a.shiftKey ? (b = this._idxToCell(this._consts._DOWN, this._range), this.selectRange(b)) : (b = this._idxToCell(this._consts._DOWN, c), this.selectCell(b));
              break;
            case e.keyMapKeydown.left:
              this._options.multiSelectEnabled && a.shiftKey ? (b = this._idxToCell(this._consts._LEFT, this._range), this.selectRange(b)) : (b = this._idxToCell(this._consts._LEFT, c), this.selectCell(b));
              break;
            case e.keyMapKeydown.right:
              this._options.multiSelectEnabled && a.shiftKey ? (b = this._idxToCell(this._consts._RIGHT, this._range), this.selectRange(b)) : (b = this._idxToCell(this._consts._RIGHT, c), this.selectCell(b));
              break;
            case e.keyMapKeydown.pgup:
              this._options.multiSelectEnabled && a.shiftKey ? (b = this._idxToCell(this._consts._PGUP, this._range), this.selectRange(b)) : (b = this._idxToCell(this._consts._PGUP, c), this.selectCell(b));
              break;
            case e.keyMapKeydown.pgdn:
              this._options.multiSelectEnabled && a.shiftKey ? (b = this._idxToCell(this._consts._PGDN, this._range), this.selectRange(b)) : (b = this._idxToCell(this._consts._PGDN, c), this.selectCell(b));
              break;
            case e.keyMapKeydown.space:
              b = a.shiftKey ? this._idxToCell(this._consts._PGUP, c) : this._idxToCell(this._consts._PGDN, c);
              this.selectCell(b);
              break;
            case e.keyMapKeydown.home:
              this._options.multiSelectEnabled && a.shiftKey ? (b = this._idxToCell(this._consts._HOME, this._range), this.selectRange(b)) : (b = this._idxToCell(this._consts._HOME, c), this.selectCell(b));
              break;
            case e.keyMapKeydown.end:
              this._options.multiSelectEnabled && a.shiftKey ? (b = this._idxToCell(this._consts._END, this._range), this.selectRange(b)) : (b = this._idxToCell(this._consts._END, c), this.selectCell(b))
          }
          g.trigger("onAfterNavigate", [b], !0)
        }
      }else {
        if(this._cols.length === 1) {
          var f, i = this.grid.colDefMgr, p, k = this._cols;
          b = a.which;
          var q = [a, null, c];
          for(p in k) {
            if(k.hasOwnProperty(p) && p !== "length") {
              f = i.get(p).key, f = "keydownColSel_" + f, q[1] = k[p], g.trigger(f + "_" + b, q, !0), g.trigger(f, q, !0)
            }
          }
        }
        if(this._rows.length === 1) {
          var m;
          p = this._rows;
          b = a.which;
          q = [a, null, c];
          for(m in p) {
            p.hasOwnProperty(m) && m !== "length" && (q[1] = p[m], g.trigger("keydownRowSel_" + b, q, !0), g.trigger("keydownRowSel", q, !0))
          }
        }
        q = [a, this._rows, this._cols];
        g.trigger("keydownSel_" + a.which, q, !0);
        g.trigger("keydownSel", q, !0)
      }
    }
  };
  a.getCell = function() {
    if(e.isNotNull(this._last)) {
      return this._last
    }
  };
  a._isSelected = function(a) {
    return e.isNotNull(this._last) && this._last.equals(a)
  };
  b.prototype.isSelected = function() {
    return this.grid.selMgr._isSelected(this)
  };
  a._getCellIdxToNavigate = function(a, c, g) {
    switch(a) {
      case this._consts._RIGHT:
        g < this.grid.colDefMgr.length() - 1 && g++;
        break;
      case this._consts._LEFT:
        g > 0 && g--;
        break;
      case this._consts._DOWN:
        c < this.grid.dataMgr.datalist.length - 1 && c++;
        break;
      case this._consts._UP:
        c > 0 && c--;
        break;
      case this._consts._PGDN:
        c += this.grid.view._options.rowsPerPage;
        c > this.grid.dataMgr.datalist.length - 1 && (c = this.grid.dataMgr.datalist.length - 1);
        break;
      case this._consts._PGUP:
        c -= this.grid.view._options.rowsPerPage;
        c < 0 && (c = 0);
        break;
      case this._consts._HOME:
        c = 0;
        break;
      case this._consts._END:
        c = this.grid.dataMgr.datalist.length - 1
    }
    return[c, g]
  };
  a._idxToCell = function(a, c) {
    var g = this._getCellIdxToNavigate(a, c.getRowIdx(), c.getColIdx());
    return h.create("Cell", {grid:this.grid, row:g[0], col:g[1]})
  };
  a.selectRow = function(a) {
    var c = a.getRowIdx(), g = a.getColIdx();
    this._setRange(c, g, a);
    this._setLast(c, g, a);
    this._setSelMap(this._getRowMap(c, g, a))
  };
  a.selectCell = function(a, c) {
    this.grid.event.trigger("onBeforeSelectCell", [a], !0);
    if(this._options.multiSelectEnabled && a.getKey() === this._options.rowSelKey) {
      this.selectRow(a)
    }else {
      var g = a.getRowIdx(), b = a.getColIdx();
      this._setRange(g, b, a, c);
      this._setLast(g, b, a);
      this._setSelMap(this._getCellMap(g, b, a))
    }
    this.grid.event.trigger("onAfterSelectCell", [a], !0)
  };
  a.onBeforeDataChange = function() {
  };
  a._onBeforeRerender = function() {
    if(e.isNotNull(this._last)) {
      this.toSelect = this._last
    }
    this.empty()
  };
  a.onAfterRerender = function() {
    e.isNotNull(this.toSelect) && (this.selectCell(this.toSelect, !0), this.grid.view.scrollToRowLazy(this.toSelect.getRowIdx()))
  };
  a.addRow = function(a) {
    var c = a.getRowIdx(), g = a.getColIdx();
    this._setRange(c, g, a);
    this._setLast(c, g, a);
    this._addSelMap(this._getRowMap(c, g, a))
  };
  a.addCell = function(a) {
    var c = a.getRowIdx(), g = a.getColIdx();
    this._setRange(c, g, a);
    this._setLast(c, g, a);
    this._addSelMap(this._getCellMap(c, g, a))
  };
  a.selectRange = function(a) {
    var c = a.getRowIdx(), g = a.getColIdx(), b = this._last.getRowIdx(), e = this._last.getColIdx(), i = b < c ? b : c, b = b < c ? c : b, f;
    this._setRange(c, g, a);
    a.getKey() === this._options.rowSelKey ? (f = 0, e = this.grid.colDefMgr.length() - 1) : (f = e < g ? e : g, e = e < g ? g : e);
    this._setSelMap(this._getRangeMap(i, f, b, e, c, g, a));
    return{minRow:i, minCol:f, maxRow:b, maxCol:e}
  };
  a._setLast = function(a, c, g) {
    var c = this._last, b;
    e.isNotNull(c) && (b = c.getRowIdx(), a !== b && e.isNotNull(this._range) && b !== this._range.getRowIdx() && this.grid.view.unlockRowById(c.getId()), c.get$().removeClass(this._options.classLast), this._options.highlightRowEnabled === !0 && $(c.getRowNode()).removeClass(this._options.classRowSelected), e.isNull(g) && delete this._last);
    if(!e.isNull(g)) {
      (this._last = g).get$().addClass(this._options.classLast), this._options.highlightRowEnabled === !0 && $(g.getRowNode()).addClass(this._options.classRowSelected), this.grid.view.lockRowByIdx(a)
    }
  };
  a._setRange = function(a, c, g, b) {
    var f = this._range;
    if(e.isNotNull(f)) {
      var i = f.getRowIdx();
      if(a === i && c === f.getColIdx()) {
        return
      }
      a !== i && e.isNotNull(this._last) && i !== this._last.getRowIdx() && this.grid.view.unlockRowById(f.getId());
      f.get$().removeClass(this._options.classRange);
      e.isNull(g) && delete this._range
    }
    if(!e.isNull(g)) {
      (this._range = g).get$().addClass(this._options.classRange), g = this.grid.view, g.lockRowByIdx(a), b || g.scrollToLazy(a, c)
    }
  };
  a._addSelMap = function(a) {
    var c = this._rows, g, e, f, i;
    for(f in a) {
      if(a.hasOwnProperty(f) && (e = a[f], c.hasOwnProperty(f))) {
        for(i in g = c[f], e) {
          e.hasOwnProperty(i) && g.hasOwnProperty(i) && (e[i] instanceof b && (g[i] = e[i]), delete e[i])
        }
      }
    }
    this.addOrRemoveCss({}, !0);
    this._addToMaps(a)
  };
  a._setSelMap = function(a) {
    var c = this._rows, g, e, f, i, h = {};
    for(f in c) {
      if(c.hasOwnProperty(f) && f !== "length") {
        if(g = c[f], a.hasOwnProperty(f)) {
          for(i in e = a[f], g) {
            g.hasOwnProperty(i) && i !== "length" && (e.hasOwnProperty(i) ? (e[i] instanceof b && (g[i] = e[i]), delete e[i]) : (h.hasOwnProperty(f) || (h[f] = {}), h[f][i] = !0))
          }
        }else {
          for(i in e = h[f] = {}, g) {
            g.hasOwnProperty(i) && i !== "length" && (e[i] = !0)
          }
        }
      }
    }
    this._removeFromMaps(h);
    this.addOrRemoveCss({}, !1);
    this._addSelMap(a)
  };
  a.addOrRemoveCss = function(a, c) {
    var g = [], l, f, i, h = this.grid.view;
    for(l in a) {
      if(a.hasOwnProperty(l)) {
        for(f in i = a[l], i) {
          i.hasOwnProperty(f) && (i[f] instanceof b ? g.push(i[f].getNode()) : g.push(h.getCell(l, f)))
        }
      }
    }
    g = g.filter(function(a) {
      return e.isNotNull(a)
    });
    c ? $(g).addClass(this._options.classSelection) : $(g).removeClass(this._options.classSelection)
  };
  a._addToMaps = function(a) {
    var c, g, b, f = this._rows, i = this._cols, h;
    for(c in a) {
      if(a.hasOwnProperty(c)) {
        for(g in h = a[c], h) {
          h.hasOwnProperty(g) && (b = e.isNull(b = h[g]) ? !0 : b, f.hasOwnProperty(c) ? f[c].length++ : (f[c] = {length:1}, f.length++), f[c][g] = b, i.hasOwnProperty(g) ? i[g].length++ : (i[g] = {length:1}, i.length++), i[g][c] = b)
        }
      }
    }
  };
  a._removeFromMaps = function(a) {
    var c, g, b = this._rows, e = this._cols, i;
    for(c in a) {
      if(a.hasOwnProperty(c)) {
        for(g in i = a[c], i) {
          i.hasOwnProperty(g) && (--b[c].length === 0 ? (delete b[c], b.length--) : delete b[c][g], --e[g].length === 0 ? (delete e[g], e.length--) : delete e[g][c])
        }
      }
    }
  };
  a._getCellMap = function(a, c, g) {
    var b = {};
    b[a] = {};
    b[a][c] = g;
    return b
  };
  a._getRowMap = function(a, c, g) {
    var b = {}, e = this.grid.colDefMgr.length(), i = 0;
    for(b[a] = {};i < e;i++) {
      b[a][i] = !0
    }
    b[a][c] = g;
    return b
  };
  a._getRangeMap = function(a, c, g, b, e, i, f) {
    for(var h = {}, q;a <= g;a++) {
      h[a] = {};
      for(q = c;q <= b;q++) {
        h[a][q] = !0
      }
    }
    h[e][i] = f;
    return h
  };
  a.empty = function() {
    this._setLast();
    this._setRange();
    this._setSelMap({})
  }
})();
console && console.log && console.log('reading javascript source "EditManager.js"...');
jx.grid.EditManager = {};
jx.grid.Editor = {};
(function() {
  function f(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    this.grid.editMgr = this;
    this._options = e._extend({classEdit:"jgrid-edit", classCellEditable:"jgrid-editable", classCellNotEditable:"jgrid-notEditable", editableBgEnabled:!1, notEditableBgEnabled:!1, editableBg:"#FFF", notEditableBg:"#F6F6F6", deleteEnabled:!1, editIconEnabled:!0, urlEditIcon:this.grid._options.imageUrl + "editable-small.png", classEditIcon:"edit-icon", editIconWidth:12, editIconPadding:3, basicBackground:"#FFF9D7", classSuccess:"edit-success", successBackground:"#cdf7b6", classFailure:"edit-failure", 
    failureBackground:"#ffcec5"}, a.options);
    this._beginEditKeys = b.which(["number", "alphabet", "del", "backspace"]);
    this.__init()
  }
  function h(a) {
    for(var g in a) {
      a.hasOwnProperty(g) && (this[g] = a[g])
    }
  }
  var e = goog.getObjectByName("jx.grid"), b = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var a = goog.getObjectByName("jx.grid.Cell");
  goog.exportSymbol("jx.grid.EditManager", f);
  goog.exportSymbol("jx.grid.Editor", h);
  f.getInstance = function(a) {
    return new f(a)
  };
  var d = f.prototype;
  d.__init = function() {
    this.bindEvents()
  };
  d.bindEvents = function() {
    var a = {onGetColCellClass:this._onGetColCellClass, keydownCanvas:this._keydownCanvas, onDestroy:this._destroy, dblclickCanvas:this._dblclickCanvas, onCreateDynamicCss:this.onCreateDynamicCss, "onBeforeNavigate onBeforeRefresh onBeforeSelect":this.commit, onBeforeFocusCanvas:this.notActive};
    b.isNull(this.grid.selMgr) ? a.onCreateCss = this._onBeforeCreateSelCss : a.onBeforeCreateSelCss = this._onBeforeCreateSelCss;
    if(this._options.deleteEnabled) {
      a["keydownSel_" + b.keyMapKeydown.del] = this._deleteContents
    }
    if(this._options.editIconEnabled) {
      for(var g = this.grid.colDefMgr.get(), d = g.length, e = 0;e < d;e++) {
        if(b.isNotNull(g[e].editor)) {
          a["onRenderHeader_" + g[e].key + "_prepend"] = this._onRenderHeader
        }
      }
    }
    this.grid.event.bind(a, this)
  };
  d._destroy = function() {
    this._deleteEditor();
    e._destroy(this, {name:"EditManager", path:"editMgr", map:"_beginEditKeys _options"})
  };
  d._onBeforeCreateSelCss = function() {
    var a = "#" + this.grid.mid + " .", g = this._options, d = [], b = this.grid.view._getRowInnerHeight();
    d.push(this.grid.view._getCellSelector() + "." + g.classEdit + "{background:" + g.basicBackground + "}");
    d.push(a + g.classEdit + " input{position:absolute;z-index:10;top:0;padding:0;border:0;margin:0;background:" + g.basicBackground + ";height:" + b + "px;line-height:" + b + "px}");
    g.editableBgEnabled && d.push(a + g.classCellEditable + "{background:" + g.editableBg + "}");
    g.notEditableBgEnabled && d.push(a + g.classCellNotEditable + "{background:" + g.notEditableBg + "}");
    g.editIconEnabled && d.push(a + g.classEditIcon + "{float:left;position:absolute;left:0;top:0;padding:0 " + g.editIconPadding + "px;width:" + g.editIconWidth + "px;height:" + b + "px;background:url(" + g.urlEditIcon + ") no-repeat center transparent}");
    d.push(a + g.classSuccess + "{background:" + g.successBackground + "}");
    d.push(a + g.classFailure + "{background:" + g.failureBackground + "}");
    return d.join("")
  };
  d.onCreateDynamicCss = function() {
    for(var a = this.grid.view._getCellSelector(), g = this.grid.view._getPadding(), d = this.grid.colDefMgr.get(), e = 0, i = "";e < d.length;e++) {
      b.isNotNull(d[e].editor) && (i += a + ".k_" + d[e].key + " .basic-editor{width:" + (d[e].width - 2 * g) + "px}")
    }
    return i
  };
  d._onRenderHeader = function(a) {
    a.push("<span class='" + this._options.classEditIcon + "'></span>")
  };
  d._onRenderCell = function(a, g, d, b, e) {
    this.grid.dataMgr.isReal(d) && e.push("<span class='" + this._options.classEditIcon + "' title='클릭하여 에디팅을 시작합니다' onclick='JGM.m.EditManager." + this.mid + '.beginEdit("' + d[this.grid.dataMgr.idKey] + '","' + b.key + "\")'></span>")
  };
  d.cancelMouseEvent = function(a) {
    return!b.hasTagAndClass(a.target, "DIV", this._options.classEditIcon)
  };
  d.beginEdit = function(a, g) {
    this.begin(e.create("Cell", {grid:this.grid, datarow:this.grid.dataMgr.getById(a), colDef:this.grid.colDefMgr.getByKey(g)}))
  };
  d._dblclickCanvas = function(a, g) {
    g.isEdited() || this.begin(g)
  };
  d._keydownCanvas = function(a) {
    this.active() ? a.which === b.keyMapKeydown.esc && this.cancel() : !a.ctrlKey && !a.altKey && b.isNotNull(this.grid.selMgr) && (a.which === b.keyMapKeydown.del && this._options.deleteEnabled ? this._deleteContent(this.grid.selMgr.getCell()) : this._beginEditKeys[a.which] ? this.begin(this.grid.selMgr.getCell()) : a.which === b.keyMapKeydown.f2 && (a.preventDefault(), this.begin(this.grid.selMgr.getCell())))
  };
  d.active = function() {
    return b.isNotNull(this.editor)
  };
  d.notActive = function() {
    return b.isNull(this.editor)
  };
  d._isEdited = function(a) {
    return this.active() && this.editor.cell.equals(a)
  };
  d._onGetColCellClass = function(a) {
    return b.isNotNull(a.editor) ? this._options.classCellEditable : this._options.classCellNotEditable
  };
  a.prototype.isEdited = function() {
    return this.grid.editMgr._isEdited(this)
  };
  a.prototype.setValue = function(a) {
    var g = this.getDatarow(), d = this.getKey(), e;
    b.isNotNullAnd(g, d) && (e = this.grid.dataMgr.updateByKey(g, d, a, {noSort:!0, noFilter:!0, noRerender:!0}), e === !0 && this.grid.view.rerenderRow(g));
    return e
  };
  d.isEditable = function(a) {
    return b.isNotNull(a) && b.isNotNull(a.getColDef().editor) && this.grid.dataMgr.isReal(a.getDatarow())
  };
  d.begin = function(a) {
    this.active() && this.commit();
    if(this.isEditable(a)) {
      this.editor = a.getColDef().editor;
      this.editor.cell = a;
      this.editor.grid = this.grid;
      var g = a.getNode();
      this.editor.before = g.innerHTML;
      g.innerHTML = this.editor.edit(a.getValue());
      a.get$().addClass(this._options.classEdit);
      this.editor.focus()
    }
  };
  d.cancel = function() {
    if(this.active()) {
      var a = this.editor.cell;
      a.getNode().innerHTML = this.editor.before;
      this._deleteEditor();
      a.get$().removeClass(this._options.classEdit);
      this.grid.view.focus()
    }
  };
  d._deleteEditor = function() {
    b.isNotNull(this.editor) && (delete this.editor.grid, delete this.editor.cell, delete this.editor.before, delete this.editor)
  };
  d.commit = function() {
    if(!this.beingCommitted && this.active()) {
      this.beingCommitted = !0;
      var a = this.editor.cell, g = this.editor.value(a.getNode()), d;
      if(g == null || g == a.getValue()) {
        this.cancel()
      }else {
        var g = a.setValue(g), b;
        d = a.get$();
        g instanceof Error ? (this.cancel(), b = this._options.classFailure) : (this._deleteEditor(), this.grid.view.focus(), b = this._options.classSuccess, this.grid.printMessage("Successfully Updated."));
        d.addClass(b);
        setTimeout(function() {
          d.removeClass(b)
        }, 1E3)
      }
      a.get$().removeClass(this._options.classEdit);
      this.beingCommitted = !1
    }
  };
  d._deleteContent = function(a) {
    if(!this.active() && this.isEditable(a)) {
      var g = a.getColDef();
      a.getValue() !== g.defaultValue && a.setValue(g.defaultValue)
    }
  };
  d._deleteContents = function(a, g, d) {
    if(!this.active()) {
      var a = {}, g = {}, e = [], i, f, h, q, m, o, n;
      a:for(i in d) {
        if(d.hasOwnProperty(i) && i !== "length") {
          for(n in q = h = f = void 0, o = d[i], o) {
            if(o.hasOwnProperty(n) && !(n === "length" || g.hasOwnProperty(n))) {
              m = o[n].cell;
              if(b.isNull(f) && (f = m.getColDef(), h = f.defaultValue, q = f.key, b.isNull(f.editor))) {
                continue a
              }
              m = b.isNotNull(a[n]) ? a[n].datarow : m.getDatarow();
              this.grid.dataMgr.isReal(m) ? h !== m[q] && (b.isNull(a[n]) && (a[n] = {datarow:m, change:{}}, e.push(a[n])), a[n].change[q] = h) : g[n] = !0
            }
          }
        }
      }
      e.length !== 0 && this.grid.dataMgr.updateList(e)
    }
  };
  h.getInstance = function(a) {
    return new h(a)
  };
  d = h.prototype;
  d.edit = function(a) {
    return"<input type='text' class='basic-editor' value='" + b.ifNull(a, "") + "' style='position:relative'/>"
  };
  d.focus = function() {
    var a = this.cell.getNode().childNodes[0];
    if(b.isFunction(a.setActive)) {
      try {
        a.setActive()
      }catch(g) {
      }
    }
    a.focus();
    document.activeElement !== a && this.cell.get$().children(":eq(0)").focus()
  };
  d.value = function(a) {
    return a && (a = a.childNodes[0]) ? a.value : null
  };
  d.path = function() {
    return"JGM.m.Editor." + this.mid
  };
  h.numberKeys = b.which(["number", "del", "backspace"]);
  h.isNumberKey = function(a) {
    return this.numberKeys[a] ? !0 : !1
  };
  h.numberEdit = function(a) {
    a = a.getValue();
    return"<input type='text' class='basic-editor' onkeydown='if (!jx.grid.Editor.isNumberKey(event.which)) return false;' value='" + b.ifNull(a, "") + "'/>"
  };
  h.floatKeys = b.which(["number", ".", "del", "backspace"]);
  h.isFloatKey = function(a) {
    return this.floatKeys[a] ? !0 : !1
  };
  h.floatEdit = function(a) {
    a = a.getValue();
    return"<input type='text' class='basic-editor' onkeydown='if (!jx.grid.Editor.isFloatKey(event.which)) return false;' value='" + b.ifNull(a, "") + "'/>"
  };
  h.alphabetKeys = b.which(["alphabet", "del", "backspace", "space"]);
  h.isAlphabet = function(a) {
    return this.alphabetKeys[a] ? !0 : !1
  };
  h.alphabetEdit = function(a) {
    a = a.getValue();
    return"<input type='text' class='basic-editor' onkeydown='if (!jx.grid.Editor.isAlphabet(event.which)) return false;' value='" + b.ifNull(a, "") + "'/>"
  }
})();
console && console.log && console.log('reading javascript source "TooltipManager.js"...');
jx.grid.TooltipManager = {};
(function() {
  function f(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    this.grid.tooltip = this;
    this._ctnr = a.container;
    this._options = h._extend({classTooltip:"jgrid-tooltip", tooltipSyncEnabled:!0, offsetX:0, offsetY:18, background:"#F5F5F5", border:"1px solid #868686", padding:"2px 10px", font:"14px Arial,Helvetica,sans-serif", color:"#333"}, a.options);
    this.__init()
  }
  var h = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.TooltipManager", f);
  f.getInstance = function(a) {
    return new f(a)
  };
  var b = f.prototype;
  b.__init = function() {
    this.grid.event.bind({onCreateCss:this._onCreateCss, onDestroy:this._destroy, mouseoutCanvas:this._mouseoutCanvas, mousemoveCanvas:this._mousemoveCanvas, mouseoverCanvas:this._mouseoverCanvas}, this)
  };
  b._destroy = function() {
    h._destroy(this, {name:"TooltipManager", path:"tooltip", $:"_tooltip", property:"_ctnr", map:"_options"})
  };
  b._onCreateCss = function() {
    var a = this._options, d = [];
    d.push("#" + this.grid.mid + " ." + a.classTooltip + "{position:absolute;z-index:10;background:" + a.background + ";border:" + a.border + ";padding:" + a.padding + ";color:" + a.color + ";font:" + a.font + "}");
    return d.join("")
  };
  b._mouseoutCanvas = function() {
    e.isNotNull(this._tooltip) && (this._ctnr[0].removeChild(this._tooltip[0]), delete this._tooltip)
  };
  b._mousemoveCanvas = function(a) {
    var d = this._options;
    d.tooltipSyncEnabled && e.isNotNull(this._tooltip) && this._tooltip.css({left:a.pageX + d.offsetX + "px", top:a.pageY + d.offsetY + "px"})
  };
  b._mouseoverCanvas = function(a, d) {
    if(d.getColDef().tooltipEnabled && e.isNull(this._tooltip)) {
      var c = this._options, g = document.createElement("div");
      g.innerHTML = "<div class='" + c.classTooltip + "' style='left:" + (a.pageX + c.offsetX) + "px;top:" + (a.pageY + c.offsetY) + "px'>" + d.getValue() + "</div>";
      this._tooltip = $(g.firstChild);
      this._ctnr[0].appendChild(this._tooltip[0])
    }
  }
})();
console && console.log && console.log('reading javascript source "PrintManager.js"...');
jx.grid.PrintManager = {};
(function() {
  function f(a) {
    this.mid = a.mid;
    this._ctnr = Util$.safe$(a.container);
    this.grid = a.grid;
    this._options = h._extend({title:"Print Preview", font:"15px arial,sans-serif", headerFontColor:"#27413E", headerBackgroundColor:"#DCDEDE", tableBorderColor:"#6E7174", headerBorderColor:"#909192", cellBorderColor:"#D0D7E5", winOptions:{name:"Print Preview", width:800, height:600, directories:"no", location:"no", menubar:"no", status:"no", toolbar:"no"}}, a.options);
    this.__init()
  }
  var h = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.PrintManager", f);
  f.getInstance = function(a) {
    return new f(a)
  };
  var b = f.prototype;
  b.__init = function() {
    var a = this;
    this._ctnr[0].innerHTML = "<button type='button'>Print</button>";
    this._ctnr.click(function() {
      a.print()
    })
  };
  b.print = function() {
    var a = this.getPrintHtml(this.grid.colDefMgr.get(), this.grid.dataMgr.datalist), d = e.open(this._options.winOptions);
    d.document.write(a);
    d.document.close()
  };
  b.getPrintHtml = function(a, d) {
    var c = this._options, g = c.tableBorderColor, b = c.headerBorderColor, e = c.cellBorderColor, i = [], f = a.length, h = f - 1, q = d.length, m = q - 1, o = 0, n;
    i.push("<html><head>");
    i.push("<title>" + c.title + "</title>");
    i.push("</head><body onload='window.print();'>");
    i.push("<table width='100%' cellspacing='0' cellpadding='0'><tbody><tr><td align='left'>");
    i.push("<table width='100%' cellspacing='0' cellpadding='2' style='border-collapse:collapse'>");
    i.push("<tbody style='font:" + c.font + ";'>");
    for(i.push("<tr style='background-color:" + c.headerBackgroundColor + ";color:" + c.headerFontColor + ";text-align:center'>");o < f;o++) {
      i.push("<td style='border:solid 1px " + b + ";'>" + a[o].name + "</td>")
    }
    i.push("</tr>");
    for(o = 0;o < q;o++) {
      c = d[o];
      i.push("<tr>");
      if(o === 0) {
        for(n = 0;n < f;n++) {
          n === 0 ? i.push("<td style='border:solid 1px " + e + ";border-top:solid 1px " + b + ";border-left:solid 1px " + g + "'>" + c[a[n].key] + "</td>") : n === h ? i.push("<td style='border:solid 1px " + e + ";border-top:solid 1px " + b + ";border-right:solid 1px " + g + "'>" + c[a[n].key] + "</td>") : i.push("<td style='border:solid 1px " + e + ";border-top:solid 1px " + b + "'>" + c[a[n].key] + "</td>")
        }
      }else {
        if(o < m) {
          for(n = 0;n < f;n++) {
            n === 0 ? i.push("<td style='border:solid 1px " + e + ";border-left:solid 1px " + g + "'>" + c[a[n].key] + "</td>") : n === h ? i.push("<td style='border:solid 1px " + e + ";border-right:solid 1px " + g + "'>" + c[a[n].key] + "</td>") : i.push("<td style='border:solid 1px " + e + "'>" + c[a[n].key] + "</td>")
          }
        }else {
          for(n = 0;n < f;n++) {
            n === 0 ? i.push("<td style='border:solid 1px " + e + ";border-bottom:solid 1px " + g + ";border-left:solid 1px " + g + "'>" + c[a[n].key] + "</td>") : n === h ? i.push("<td style='border:solid 1px " + e + ";border-bottom:solid 1px " + g + ";border-right:solid 1px " + g + "'>" + c[a[n].key] + "</td>") : i.push("<td style='border:solid 1px " + e + ";border-bottom:solid 1px " + g + "'>" + c[a[n].key] + "</td>")
          }
        }
      }
      i.push("</tr>")
    }
    i.push("</tbody></table></td></tr></tbody></table></body></html>");
    return i.join("")
  }
})();
console && console.log && console.log('reading javascript source "ViewportManager.js"...');
jx.grid.ViewportManager = {};
(function() {
  function f(a) {
    this.mid = a.mid;
    this._ctnr = a.container;
    this.grid = a.grid;
    this.grid.view = this;
    this._options = h._extend({attrRowIdx:"r", appendThreshold:3, renderThreshold:10, bufferSize:6, rowsPerPage:10, rowH:21, borderThickness:1, border:"solid #D0D7E5", padding:1, evenOddRows:!1, oddRowsBackground:"#F4F4F4", style:"", canvasStyle:"", rowStyle:"", cellStyle:"", classRow:"jgrid-row", classCell:"jgrid-cell", classView:"jgrid-viewport", classCanvas:"jgrid-canvas", focusBackground:"#FFF", focusOutline:"2px solid #f1ca7f", autoHeight:!1, autoWidth:!1}, a.options);
    this._drag = !1;
    this._lastRowLen = this._lastScrollLeft = this._lastScrollTop = 0;
    this._renderedRows = {};
    this._lockedRows = {};
    this._colLefts = [0];
    this._evtmgr = this.grid.event;
    this._datamgr = this.grid.dataMgr;
    this._colmgr = this.grid.colDefMgr;
    this._rowClass = this._options.classRow;
    this._cellClass = this._options.classCell;
    this._rowIdxAttr = this._options.attrRowIdx;
    this.__init()
  }
  var h = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.grid.Grid"), b = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var a = goog.getObjectByName("jx.grid.Cell"), d = {INPUT:!0, TEXTAREA:!0, LABEL:!0, FIELDSET:!0, LEGEND:!0, SELECT:!0, OPTGROUP:!0, OPTION:!0, BUTTON:!0};
  goog.exportSymbol("jx.grid.ViewportManager", f);
  f.getInstance = function(a) {
    return new f(a)
  };
  var c = f.prototype;
  c.__init = function() {
    this._mask = $("<div class='" + this._options.classView + "' tabIndex='0' onscroll='JGM.m.ViewportManager." + this.mid + "._scroll()'>").appendTo(this._ctnr);
    this._canvas = $("<div class='" + this._options.classCanvas + "'>").appendTo(this._mask);
    this._canvasEl = this._canvas[0];
    this._mask.bind("selectstart.ui", function(a) {
      return $(a.target).is("input, textarea")
    });
    this._setColLefts();
    this._setCanvasWidth(this._calCanvasWidth());
    this._lastRowLen = this._datamgr.datalist.length;
    this._evtmgr.bind({canvasFind:this._canvasFind, onCreateCss:this._onCreateCss, onCreateDynamicCss:this._onCreateDynamicCss, onDestroy:this._onDestroy, keydown:this._keydown, keyup:this._keyup, keypress:this._keypress, mousein:this._mousein, mouseout:this._mouseout, mouseenter:this._mouseenter, mouseleave:this._mouseleave, mousemove:this._mousemove, mouseover:this._mouseover, mousedown:this._mousedown, mouseup:this._mouseup, click:this._click, dblclick:this._dblclick, resizeWidth:this._setWidth, 
    "resizeWidth onResizeCol onResizeCanvasHeight":this._resizeWidth, onAfterRefresh:this.onAfterRefresh, onRenderModules:this._render, onReorderCols:this._onReorderCols, onResizeCanvasWidth:this._scroll, onUpdateDatarow:this.onUpdateDatarow, onUpdateDatalist:this.onUpdateDatalist, onRemoveDatarow:this.onRemoveDatarow, onRemoveDatalist:this.onRemoveDatalist, onIdChange:this.onIdChange, onIdListChange:this.onIdListChange, unsetDrag:this.unsetDrag}, this)
  };
  c.unsetDrag = function() {
    this._drag = !1
  };
  c._onDestroy = function() {
    h._destroy(this, {name:"ViewportManager", path:"view", $:"_canvas _mask", property:"_ctnr", map:"_vars _lockedRows _renderedRows _options"})
  };
  c._onCreateCss = function() {
    var a = "#" + this.grid.mid + " .", c = this._options, d = a + this._cellClass, b = a + this._rowClass, e = c.borderThickness + "px " + c.border, f = b + "[" + this._rowIdxAttr, h = this._colmgr.get(), m = h.length, o = 0, n = [];
    n.push(a + c.classView + "{height:" + this._calHeight() + "px;outline:0;position:relative;white-space:nowrap;overflow:auto;line-height:" + c.rowH + "px;cursor:default;-moz-user-select:none;-webkit-user-select:none;" + c.style + "}");
    n.push(a + c.classView + ":focus{background:" + c.focusBackground + ";outline:" + c.focusOutline + "}");
    n.push(a + c.classCanvas + "{height:" + this._calCanvasHeight() + "px;" + c.canvasStyle + ";background:#fff}");
    n.push(b + "{position:absolute;" + c.rowStyle + "}");
    n.push(d + "{height:" + c.rowH + "px;border-bottom:" + e + ";display:inline-block;white-space:nowrap;overflow:hidden;float:left;text-overflow:ellipsis;padding-left:" + c.padding + "px;border-right:" + e + ";" + c.cellStyle + "}");
    for(c.evenOddRows && n.push(f + "$='1']," + f + "$='3']," + f + "$='5']," + f + "$='7']," + f + "$='9']{background:" + c.oddRowsBackground + "}");o < m;o++) {
      n.push(d + ".k_" + h[o].key + "{" + h[o].style + "}")
    }
    return n.join("")
  };
  c._onCreateDynamicCss = function() {
    var a = "#" + this.grid.mid + " .", c = a + this._cellClass, d = a + this._rowClass;
    a += this._options.classCanvas;
    var b = this._calCanvasWidth(), e = this._colmgr.get(), f = "", h = e.length, m = 0;
    for(f += a + "{width:" + b + "px}" + d + "{width:" + b + "px}";m < h;m++) {
      f += c + ".k_" + e[m].key + "{width:" + e[m].width + "px}"
    }
    return f
  };
  c.onUpdateDatarow = function(a) {
    this.isRendered(a) && this.rerenderRow(a)
  };
  c.onUpdateDatalist = function(a) {
    for(var c, d = a.length, b = 0;b < d;b++) {
      c = a[b], this.isRendered(c) && this.rerenderRow(c)
    }
  };
  c.onRemoveDatarow = function(a) {
    this.destroyRow(a)
  };
  c.onRemoveDatalist = function(a) {
    for(var c = a.length, d = 0;d < c;d++) {
      this.destroyRow(a[d])
    }
  };
  c.onIdChange = function(a, c, d) {
    this.isRowLockedById(c) && (this._lockedRows[d] = this._lockedRows[c], delete this._lockedRows[c]);
    this.isRenderedById(c) && ((this._renderedRows[d] = this._renderedRows[c]).setAttribute("i", d), delete this._renderedRows[c])
  };
  c.onIdListChange = function(a, c, d) {
    for(var b = a.length, e = 0, f = this._lockedRows, h = this._renderedRows, m, o;e < b;e++) {
      m = c[e], o = a[e][d], f.hasOwnProperty(m) && (f[o] = f[m], delete f[m]), h.hasOwnProperty(m) && ((h[o] = h[m]).setAttribute("i", o), delete h[m])
    }
  };
  c._getCellSelector = function() {
    return"#" + this.grid.mid + " ." + this._cellClass
  };
  c._getRowSelector = function() {
    return"#" + this.grid.mid + " ." + this._rowClass
  };
  c.scrollTo = function(a, c) {
    this.scrollToRow(a);
    this.scrollToCol(c)
  };
  c.scrollToRowLazy = function(a) {
    var c = this.getScrollTop();
    return a == null ? c : this._getLastSafeVisibleRow() < a ? this.scrollToRow(this._getFirstRowForSafe(a)) : this._getFirstSafeVisibleRow() > a ? this.scrollToRow(a) : c
  };
  c.scrollToColLazy = function(a) {
    var c = this.getScrollLeft();
    if(a == null) {
      return c
    }
    if(this._getLastSafeVisibleCol() < a) {
      return this.setScrollLeft(this.getScrollHForSafe(a))
    }else {
      if(this._getFirstSafeVisibleCol() > a) {
        return this.scrollToCol(a)
      }
    }
    return c
  };
  c.scrollToLazy = function(a, c) {
    this.scrollToRowLazy(a);
    this.scrollToColLazy(c)
  };
  c.scrollToRow = function(a) {
    return a != null ? this.setScrollTop(this._getRowOuterHeight() * a) : this.getScrollTop()
  };
  c.scrollToCol = function(a) {
    return this.setScrollLeft(this.getColLeft(a))
  };
  c._getColInnerWidth = function(a) {
    return this._colmgr.get(a).width
  };
  c._getColInnerWidthByKey = function(a) {
    return this._colmgr.getByKey(a).width
  };
  c.getColWidth = function(a) {
    return this._colmgr.get(a).width + this._options.padding
  };
  c.getColWidthByKey = function(a) {
    return this._colmgr.getByKey(a).width + this._options.padding
  };
  c._getColOuterWidth = function(a) {
    return this._colmgr.get(a).width + this._options.padding + this._options.borderThickness
  };
  c._getColOuterWidthByKey = function(a) {
    return this._colmgr.getByKey(a).width + this._options.padding + this._options.borderThickness
  };
  c._getPadding = function() {
    return this._options.padding
  };
  c._colWidthPlus = function() {
    return this._options.padding + this._options.borderThickness
  };
  c._getRowOuterHeight = function() {
    return this._options.rowH + this._options.borderThickness
  };
  c._getRowInnerHeight = function() {
    return this._options.rowH
  };
  c._calHeight = function() {
    return this._options.autoHeight ? this._calCanvasHeight() + (this.grid.width() < this._calCanvasWidth() ? this.grid._vars.scrollbarDim.h : 0) : this._getRowOuterHeight() * this._options.rowsPerPage
  };
  c.getHeight = function() {
    return this._mask[0].offsetHeight
  };
  c.getInnerHeight = function() {
    return this._mask[0].clientHeight
  };
  c._getWidth = function() {
    return this._mask[0].offsetWidth
  };
  c.getInnerWidth = function() {
    return this._mask[0].clientWidth
  };
  c._calCanvasHeight = function() {
    return this._getRowOuterHeight() * this._datamgr.datalist.length
  };
  c.getCanvasHeight = function() {
    return this._canvasEl.clientHeight
  };
  c._setCanvasHeight = function(a) {
    a = parseInt(a);
    if(!(isNaN(a) || a < 1)) {
      var c = this.getCanvasHeight();
      if(a != c) {
        this._canvasEl.style.height = a + "px", this._evtmgr.trigger("onResizeCanvasHeight", [a, c], !0)
      }
    }
  };
  c._calCanvasWidth = function() {
    return this._colLefts[this._colmgr.length()]
  };
  c.getCanvasWidth = function() {
    return this._canvasEl.clientWidth
  };
  c._setCanvasWidth = function(a) {
    typeof a != "number" && (a = parseInt(a));
    if(isFinite(a) && !(a < 1)) {
      var c = this.getCanvasWidth();
      if(a != c) {
        this.grid.log("set canvas width. " + c + "->" + a, e.V_RESIZE), this._canvasEl.style.width = a + "px", this._evtmgr.trigger("onResizeCanvasWidth", [a, c], !0)
      }
    }
  };
  c.getColLeft = function(a) {
    return this._colLefts[a]
  };
  c._getColLefts = function() {
    return this._colLefts
  };
  c._setColLefts = function(a, c) {
    for(var a = a || 0, d = this._colmgr.get(), b = this._colWidthPlus(), c = c || d.length;a < c;a++) {
      this._colLefts[a + 1] = this._colLefts[a] + d[a].width + b
    }
    return this._colLefts
  };
  c._onReorderCols = function() {
    this._setColLefts();
    this._rerender()
  };
  c.setWidthByKey = function(a, c) {
    var d = this._colmgr.getByKey(a), c = b.bound(c, d.minW, d.maxW);
    if(c !== d.width) {
      this.grid.log("set column width. key=" + a + ", w=" + c, e.V_RESIZE);
      var f = this._evtmgr, h = this._colmgr, k = [a, c, d.width];
      d.width = c;
      this._setCanvasWidth(this._setColLefts(h.getIdxByKey(a))[h.length()]);
      this.grid._recreateDynamicCss();
      f.trigger("onResizeCol_" + a, k, !0);
      f.trigger("onResizeCol", k, !0)
    }
  };
  c._autoColWidth = function(a) {
    for(var c = this._canvasFind(".k_" + a), d = Number.MIN_VALUE, b = c.length, e = 0;e < b;e++) {
      if(d < c[e].scrollWidth) {
        d = c[e].scrollWidth
      }
    }
    d -= this._getPadding();
    this.setWidthByKey(a, d)
  };
  c._setWidth = function(a) {
    a = parseInt(a);
    if(!(isNaN(a) || a < 1)) {
      this._mask[0].style.width = a + "px"
    }
  };
  c.getScrollTop = function() {
    return this._mask[0].scrollTop
  };
  c.getScrollLeft = function() {
    return this._mask[0].scrollLeft
  };
  c.setScrollTop = function(a) {
    var c = this.getScrollTop();
    return a != null && c != a ? this._mask[0].scrollTop = a : c
  };
  c.setScrollLeft = function(a) {
    var c = this.getScrollLeft();
    return a != null && c != a ? this._mask[0].scrollLeft = a : c
  };
  c._hasHScrollbar = function() {
    return this._mask[0].offsetHeight > this._mask[0].clientHeight
  };
  c._hasVScrollbar = function() {
    return this._mask[0].offsetWidth > this._mask[0].clientWidth
  };
  c._heightPlus = function() {
    return this._mask[0].offsetHeight - this._mask[0].clientHeight
  };
  c._widthPlus = function() {
    return this._mask[0].offsetWidth - this._mask[0].clientWidth
  };
  c._getFirstVisibleRow = function() {
    return Math.floor(this.getScrollTop() / this._getRowOuterHeight())
  };
  c._getFirstSafeVisibleRow = function() {
    return Math.ceil(this.getScrollTop() / this._getRowOuterHeight())
  };
  c._getLastVisibleRow = function() {
    return Math.ceil((this.getScrollTop() + this._mask[0].clientHeight) / this._getRowOuterHeight()) - 1
  };
  c._getLastSafeVisibleRow = function() {
    return Math.floor((this.getScrollTop() + this._mask[0].clientHeight) / this._getRowOuterHeight()) - 1
  };
  c._getFirstRowForSafe = function(a) {
    return a - Math.floor(this._mask[0].clientHeight / this._getRowOuterHeight()) + 1
  };
  c._getFirstVisibleCol = function() {
    for(var a = this.getScrollLeft(), c = this._colLefts, d = 0, b = c.length;d < b;d++) {
      if(c[d] > a) {
        return d - 1
      }
      if(c[d] === a) {
        return d
      }
    }
    return b - 2
  };
  c._getFirstSafeVisibleCol = function() {
    for(var a = this.getScrollLeft(), c = this._colLefts, d = 0, b = c.length;d < b;d++) {
      if(c[d] >= a) {
        return d
      }
    }
    return b - 2
  };
  c._getLastVisibleCol = function() {
    for(var a = this.getScrollLeft() + this._mask[0].clientWidth, c = this._colLefts, d = 0, b = c.length;d < b;d++) {
      if(c[d] >= a) {
        return d - 1
      }
    }
    return b - 2
  };
  c._getLastSafeVisibleCol = function() {
    for(var a = this.getScrollLeft() + this._mask[0].clientWidth, c = this._colLefts, d = 0, b = c.length;d < b;d++) {
      if(c[d] > a) {
        return d - 2
      }
    }
    return b - 2
  };
  c._getFirstColForSafe = function(a) {
    var c = this._colLefts, d = c[a + 1] - this._mask[0].clientWidth, b = a;
    if(d <= 0) {
      return 0
    }
    for(;b >= 0;b--) {
      if(b === a && c[b] <= d || c[b] === d) {
        return b
      }
      if(c[b] < d) {
        return b + 1
      }
    }
    return 0
  };
  c.getScrollHForSafe = function(a) {
    var c = this._colLefts, d = c[a + 1] - this._mask[0].clientWidth;
    return c[a] <= d ? c[a] : d
  };
  c._getRenderRange = function() {
    if(this._options.autoHeight) {
      return{start:0, end:this._datamgr.datalist.length - 1}
    }
    var a, c = this._datamgr.datalist.length - 1;
    return{start:(a = this._getFirstVisibleRow() - this._options.bufferSize) < 0 ? 0 : a, end:(a = this._getLastVisibleRow() + this._options.bufferSize) > c ? c : a}
  };
  c._fitHeight = function() {
    this._mask[0].style.height = this.getCanvasHeight() + this._heightPlus() + "px"
  };
  c._resizeWidth = function() {
    this._options.autoHeight && this._fitHeight()
  };
  c.onAfterRefresh = function(a) {
    a !== void 0 && a.noRerender === !0 || this._rerender()
  };
  c._rerender = function() {
    var a = this.getScrollTop(), c = this.getScrollLeft();
    this._evtmgr.trigger("onBeforeRerender", !1, !0);
    this.unlockAllRows();
    this._removeRows();
    var d = this._datamgr.datalist.length;
    if(this._lastRowLen !== d) {
      this._lastRowLen = d, this._setCanvasHeight(this._calCanvasHeight())
    }
    this._render();
    this.setScrollTop(a);
    this.setScrollLeft(c);
    this._evtmgr.trigger("onAfterRerender", !1, !0)
  };
  c._render = function(a) {
    this._removeAndRenderRows(a)
  };
  c._renderShift = function(a) {
    a = a || this._getRenderRange();
    this._removeRowsExcept(a);
    this._appendRows(a)
  };
  c._removeRows = function(a) {
    var c = this._canvasEl, d = this._renderedRows, b = this._lockedRows, e;
    if(a) {
      for(var f = a.start, a = a.end, h = this._datamgr;f <= a;f++) {
        if(!b.hasOwnProperty(e = h.getIdByIdx(f)) && d.hasOwnProperty(e)) {
          c.removeChild(d[e]), delete d[e]
        }
      }
    }else {
      if(this._lockExist()) {
        for(e in d) {
          d.hasOwnProperty(e) && b.hasOwnProperty(e) && (c.removeChild(d[e]), delete d[e])
        }
      }else {
        this._renderedRows = {}, c.innerHTML = ""
      }
    }
  };
  c._removeRowsExcept = function(a) {
    var c = this._canvasEl, d = this._renderedRows, b = this._lockedRows, e;
    if(a) {
      var f = a.start, a = a.end, h = this._datamgr, m;
      for(e in d) {
        if(d.hasOwnProperty(e) && !(b.hasOwnProperty(e) || f <= (m = h.getIdxById(e)) && m <= a)) {
          c.removeChild(d[e]), delete d[e]
        }
      }
    }else {
      if(this._lockExist()) {
        for(e in d) {
          d.hasOwnProperty(e) && b.hasOwnProperty(e) === !1 && (c.removeChild(d[e]), delete d[e])
        }
      }else {
        this._renderedRows = {}, c.innerHTML = ""
      }
    }
  };
  c.destroyRow = function(a) {
    return this.destroyRowById(this._datamgr.getId(a))
  };
  c.destroyRowById = function(a) {
    a != null && (this.unlockRowById(a), this._renderedRows.hasOwnProperty(a) && (this._canvasEl.removeChild(this._renderedRows[a]), delete this._renderedRows[a]))
  };
  c.destroyRowByIdx = function(a) {
    return this.destroyRowById(this._datamgr.getIdByIdx(a))
  };
  c._lockExist = function() {
    return b.isNotEmptyObj(this._lockedRows)
  };
  c.isRowLockedById = function(a) {
    return a != null ? this._lockedRows.hasOwnProperty(a) : !1
  };
  c.isRowLocked = function(a) {
    return this.isRowLockedById(this._datamgr.getId(a))
  };
  c.isRowLockedByIdx = function(a) {
    return this.isRowLockedById(this._datamgr.getIdByIdx(a))
  };
  c.lockRowById = function(a) {
    a != null && this._datamgr.hasById(a) && (this._lockedRows[a] = !0)
  };
  c.lockRow = function(a) {
    return this.lockRowById(this._datamgr.getId(a))
  };
  c.lockRowByIdx = function(a) {
    return this.lockRowById(this._datamgr.getIdByIdx(a))
  };
  c.unlockRowById = function(a) {
    this.isRowLockedById(a) && delete this._lockedRows[a]
  };
  c.unlockRow = function(a) {
    return this.unlockRowById(this._datamgr.getId(a))
  };
  c.unlockRowByIdx = function(a) {
    return this.unlockRowById(this._datamgr.getIdByIdx(a))
  };
  c.unlockAllRows = function() {
    this._lockedRows = {}
  };
  c.rerenderRowById = function(a) {
    if(this._datamgr.containsById(a)) {
      var c = this._renderedRows, d = this._canvasEl, e = this._datamgr, f = e.idKey, h = e.getIdxById(a), e = e.getById(a), q = this._colmgr.get(), m = this._getColCellClasses(q).map(function(a) {
        return"<div class='" + a + " "
      }), o = this._getRendererSettings(q), n = o[0], o = o[1], s = this._getRowOuterHeight(), r = "<div class='" + this._rowClass + "' i='", t = "' " + this._rowIdxAttr + "='", u = [];
      c.hasOwnProperty(a) && (d.removeChild(c[a]), this._evtmgr.trigger("onBeforeRenderRows", [[h]], !0), u.push(r + e[f] + t + h + "' style='top:" + s * h + "px'>"), this._renderRow(u, h, e, q, m, n, o), c[a] = b.appendHTML(d, u.join(""))[0], this._evtmgr.trigger("onAppendRows", [[h]], !0))
    }
  };
  c._getRendererSettings = function(a) {
    for(var a = a || this._colmgr.get(), c = 0, d = a.length, b, e = [], f = [], h;c < d;c++) {
      b = a[c], (h = b.renderer) ? (e.push(!!b.rendererInput), f.push(h)) : (e.push(!1), f.push(!1))
    }
    return[f, e]
  };
  c.rerenderRow = function(a) {
    return this.rerenderRowById(this._datamgr.getId(a))
  };
  c.rerenderRowByIdx = function(a) {
    return this.rerenderRowById(this._datamgr.getIdByIdx(a))
  };
  c.rerenderCellByIdAndKey = function(a, c) {
    var d = this.getCellByIdAndKey(a, c);
    if(d) {
      var b = this._datamgr, e = this._colmgr, f = b.getById(a), h = e.getByKey(c), b = b.getIdxById(a), e = e.getIdxByKey(c), m = h.renderer, o = m ? h.rendererInput : !1, n = [];
      m ? o ? this._renderCell(n, b, e, f, h, m, !0) : this._renderCell(n, b, e, f, h, m) : this._renderCell(n, b, e, f, h);
      d.innerHTML = n.join("")
    }
  };
  c.rerenderCellByIdx = function(a, c) {
    return this.rerenderCellByIdAndKey(this._datamgr.getIdByIdx(a), this._colmgr.getKeyByIdx(c))
  };
  c._appendRows = function(a) {
    var c = this._evtmgr, d = [a], e = [], f = a.start, a = a.end, h = this._datamgr, q = h.datalist, m = h.idKey, o = this._colmgr.get(), n = this._getColCellClasses(o).map(function(a) {
      return"<div class='" + a + " "
    }), h = this._renderedRows, s = this._getRowOuterHeight(), r = this._canvasEl, t = "<div class='" + this._rowClass + "' i='", u = "' " + this._rowIdxAttr + "='", v = this._getRendererSettings(o), y = v[0], w = v[1], x, z, v = [];
    c.trigger("onBeforeRenderRows", d, !0);
    for(this.grid.twstart();f <= a;f++) {
      x = q[f], z = x[m], h.hasOwnProperty(z) || (e[e.length] = t + z + u + f + "' style='top:" + s * f + "px'>", this._renderRow(e, f, x, o, n, y, w), this.grid.twlap(), v.push(z))
    }
    this.grid.twprint();
    this.grid.twstop();
    e = b.appendHTML(r, e.join(""));
    f = 0;
    for(a = v.length;f < a;f++) {
      h[v[f]] = e[f]
    }
    c.trigger("onAppendRows", d, !0)
  };
  c._removeAndRenderRows = function(a) {
    var a = a || this._getRenderRange(), c = this._evtmgr, d = [a], b = [], e = a.start, a = a.end, f = this._datamgr, h = f.datalist, f = f.idKey, m = this._colmgr.get(), o = this._getColCellClasses(m).map(function(a) {
      return"<div class='" + a + " "
    }), n = this._getRowOuterHeight(), s = this._canvasEl, r = "<div class='" + this._rowClass + "' i='", t = "' " + this._rowIdxAttr + "='", u = this._getRendererSettings(m), v = u[0], u = u[1], y, w, x = [], z = {};
    c.trigger("onBeforeRenderRows", d, !0);
    for(this.grid.twstart();e <= a;e++) {
      y = h[e], w = y[f], b[b.length] = r + w + t + e + "' style='top:" + n * e + "px'>", this._renderRow(b, e, y, m, o, v, u), this.grid.twlap(), x.push(w)
    }
    this.grid.twprint();
    this.grid.twstop();
    s.innerHTML = b.join("");
    e = 0;
    for(a = x.length;e < a;e++) {
      z[x[e]] = s.childNodes[e]
    }
    this._renderedRows = z;
    c.trigger("onAppendRows", d, !0)
  };
  c._renderColumn = function(c, d, b, e, f, h, q) {
    for(var m = [], o, n = 0, s = b.length, r, t, u, v = d.key, y, w = this.grid, x = this._evtmgr, z = "onRenderCell_" + v, B = [null, c, t, d], A = [null, c, null, d, null];n < s;n++) {
      r = b[n];
      t = e[r];
      u = t[v];
      o = [];
      A[0] = B[0] = r;
      A[2] = t;
      A[4] = o;
      y = x.trigger("onGetCellClass", B);
      o[o.length] = y ? f + y.join(" ") + "'>" : f + "'>";
      x.trigger(z + "_prepend", A, !0);
      if(typeof u != "string" || u.substring(0, 3) !== "J@H") {
        h ? o[o.length] = q ? h(new a({grid:w, row:r, col:c, datarow:t, colDef:d})) : h(u, r, c, t, d) : u != null && (o[o.length] = u)
      }
      x.trigger(z + "_append", A, !0);
      o[o.length] = "</div>";
      m[m.length] = o.join("")
    }
    return m
  };
  c._getColCellClass = function(a) {
    var c = this._cellClass + " k_" + a.key;
    a.colClass && (c += " " + a.colClass);
    (a = this._evtmgr.trigger("onGetColCellClass", [a])) && (c += " " + a.join(" "));
    return c
  };
  c._getColCellClasses = function(a) {
    for(var a = a || this._colmgr.get(), c = [], d = 0, b = a.length;d < b;d++) {
      c.push(this._getColCellClass(a[d]))
    }
    return c
  };
  c._renderRow = function(a, c, d, b, e, f, h) {
    for(var m = 0, o = b.length, n, s = [c, null, d, null], r = this._evtmgr, t, u;m < o;m++) {
      n = b[m], s[1] = m, s[3] = n, t = r.trigger("onGetCellClass", s), a[a.length] = t ? e[m] + t.join(" ") + "'>" : e[m] + "'>", (u = f[m]) ? h[m] ? this._renderCell(a, c, m, d, n, u, !0) : this._renderCell(a, c, m, d, n, u) : this._renderCell(a, c, m, d, n), a[a.length] = "</div>"
    }
    a[a.length] = "</div>";
    return a
  };
  c._renderCell = function(c, d, b, e, f) {
    var h = f.key, q = e[h], m = [d, b, e, f, c], o = this._evtmgr, h = "onRenderCell_" + h;
    o.trigger(h + "_prepend", m, !0);
    if(typeof q != "string" || q.substring(0, 3) !== "J@H") {
      arguments.length > 5 ? c[c.length] = arguments[6] ? arguments[5](new a({grid:this.grid, row:d, col:b, datarow:e, colDef:f})) : arguments[5](q, d, b, e, f) : q != null && (c[c.length] = q)
    }
    o.trigger(h + "_append", m, !0)
  };
  a.prototype.rerender = function() {
    return this.grid.view.rerenderCellByIdAndKey(this.getId(), this.getKey())
  };
  a.prototype.scrollTo = function() {
    this.grid.view.scrollTo(this.getRowIdx(), this.getColIdx())
  };
  c._keydown = function(a) {
    b.contains(this._mask[0], document.activeElement, this._ctnr[0]) && (this.grid.log("UI event:keydown on Viewport. event=" + a.type + ", keycode=" + a.which, e.V_KEYDOWN), this._evtmgr.trigger("keydownCanvas_" + a.which, [a], !0), this._evtmgr.trigger("keydownCanvas", [a], !0))
  };
  c._keyup = function(a) {
    b.contains(this._mask[0], document.activeElement, this._ctnr[0]) && (this.grid.log("UI event:keyup on Viewport. event=" + a.type + ", keycode=" + a.which, e.V_KEYUP), this._evtmgr.trigger("keyupCanvas_" + a.which, [a], !0), this._evtmgr.trigger("keyupCanvas", [a], !0))
  };
  c._keypress = function(a) {
    b.contains(this._mask[0], document.activeElement, this._ctnr[0]) && (this.grid.log("UI event:keypress on Viewport. event=" + a.type + ", keycode=" + a.which, e.V_KEYPRESS), this._evtmgr.trigger("keypressCanvas_" + a.which, [a], !0), this._evtmgr.trigger("keypressCanvas", [a], !0))
  };
  c._mousein = function(a) {
    this._drag ? this._triggerMouseEvent(a, "draginCanvas,mouseinCanvas", e.V_MOUSEIN) : this._triggerMouseEvent(a, "mouseinCanvas", e.V_MOUSEIN)
  };
  c._mouseout = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragoutCanvas,mouseoutCanvas", e.V_MOUSEOUT) : this._triggerMouseEvent(a, "mouseoutCanvas", e.V_MOUSEOUT)
  };
  c._mouseenter = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragenterCanvas,mouseenterCanvas", e.V_MOUSEENTER) : this._triggerMouseEvent(a, "mouseenterCanvas", e.V_MOUSEENTER)
  };
  c._mouseleave = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragleaveCanvas,mouseleaveCanvas", e.V_MOUSELEAVE) : this._triggerMouseEvent(a, "mouseleaveCanvas", e.V_MOUSELEAVE)
  };
  c._mousemove = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragmoveCanvas,mousemoveCanvas", e.V_MOUSEMOVE) : this._triggerMouseEvent(a, "mousemoveCanvas", e.V_MOUSEMOVE)
  };
  c._mouseover = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragoverCanvas,mouseoverCanvas", e.V_MOUSEOVER) : this._triggerMouseEvent(a, "mouseoverCanvas", e.V_MOUSEOVER)
  };
  c._mousedown = function(a) {
    if(this._triggerMouseEvent(a, "mousedownCanvas", e.V_MOUSEDOWN)) {
      this._drag = !0
    }
  };
  c._mouseup = function(a) {
    this._drag = !1;
    this._triggerMouseEvent(a, "mouseupCanvas", e.V_MOUSEUP)
  };
  c._click = function(a) {
    this._triggerMouseEvent(a, "clickCanvas", e.V_CLICK) && this.focus(a)
  };
  c._dblclick = function(a) {
    this._triggerMouseEvent(a, "dblclickCanvas", e.V_DBLCLICK)
  };
  c._triggerMouseEvent = function(c, b, e) {
    var f = c.target;
    if(f && !d[f.tagName] && (f = this._getClosestCell(c.target))) {
      this.grid.log("UI event:" + b + " on Viewport. event=" + c.type, e);
      f = new a({grid:this.grid, node:f});
      e = f.getKey();
      c = [c, f];
      f = this._evtmgr;
      if(b.indexOf(",") > -1) {
        for(var b = b.split(","), h = 0, k = b.length, q;h < k;h++) {
          q = b[h], f.trigger(q + "_" + e, c, !0), f.trigger(q, c, !0)
        }
      }else {
        f.trigger(b + "_" + e, c, !0), f.trigger(b, c, !0)
      }
      return!0
    }
    return!1
  };
  c._scroll = function() {
    var a = this.getScrollTop(), c = a - this._lastScrollTop, d = this.getScrollLeft(), b = d - this._lastScrollLeft;
    if(c !== 0 || b !== 0) {
      this.grid.log("Viewport scrolled... h=" + b + ", v=" + c, e.V_SCROLL);
      var f = this._evtmgr, c = Math.abs(c / this._getRowOuterHeight());
      f.trigger("onScrollViewport", !1, !0);
      if(b) {
        this._lastScrollLeft = d, f.trigger("onScrollViewportH", [d], !0)
      }
      if(c >= this._options.appendThreshold) {
        this._lastScrollTop = a, this._removeAndRenderRows(), f.trigger("onScrollViewportV", !1, !0)
      }
    }
  };
  c.focus = function(a) {
    if(!a || !this._evtmgr.triggerInvalid("onBeforeFocusCanvas", [a])) {
      if(a = this._mask[0], document.activeElement !== a) {
        this.grid.log("focusing canvas...", e.V_FOCUS);
        if(a.setActive) {
          try {
            a.setActive()
          }catch(c) {
          }
        }
        a.focus();
        document.activeElement !== a && this._mask.focus()
      }
    }
  };
  c.isRenderedById = function(a) {
    return a != null ? this._renderedRows.hasOwnProperty(a) : !1
  };
  c.isRendered = function(a) {
    return this.isRenderedById(this._datamgr.getId(a))
  };
  c.isRenderedByIdx = function(a) {
    return this.isRenderedById(this._datamgr.getIdByIdx(a))
  };
  c.getRowById = function(a) {
    if(this.isRenderedById(a)) {
      return this._renderedRows[a]
    }
  };
  c.getRow = function(a) {
    return this.getRowById(this._datamgr.getId(a))
  };
  c.getRowByIdx = function(a) {
    return this.getRowById(this._datamgr.getIdByIdx(a))
  };
  c.getRenderedRowById = function(a) {
    if(this.isRenderedById(a)) {
      return this._renderedRows[a]
    }
  };
  c.getRenderedRow = function(a) {
    return this.getRenderedRowById(this._datamgr.getId(a))
  };
  c.getRenderedRowByIdx = function(a) {
    return this.getRenderedRowById(this._datamgr.getIdByIdx(a))
  };
  c.getRenderedRows = function() {
    return b.toArray(this._renderedRows)
  };
  c.getCell = function(a, c) {
    if(c != null) {
      var d = this.getRowByIdx(a);
      if(d) {
        return d.childNodes[c]
      }
    }
  };
  c.getCellByIdAndKey = function(a, c) {
    var d = this._colmgr.getIdxByKey(c);
    if(d != null) {
      var b = this.getRowById(a);
      if(b) {
        return b.childNodes[d]
      }
    }
  };
  c.getRenderedCell = function(a, c) {
    if(c != null) {
      var d = this.getRenderedRowByIdx(a);
      if(d) {
        return d.childNodes[c]
      }
    }
  };
  c.getRenderedCellByIdAndKey = function(a, c) {
    var d = this._colmgr.getIdxByKey(c);
    if(d != null) {
      var b = this.getRenderedRowById(a);
      if(b) {
        return b.childNodes[d]
      }
    }
  };
  c._getClosestCell = function(a) {
    return b.closestWithTag(a, "DIV", this._cellClass, this._canvasEl)
  };
  c._getClosestRow = function(a) {
    return b.closestWithTag(a, "DIV", this._rowClass, this._canvasEl)
  };
  c._getClosestRowIdx = function(a) {
    return this._datamgr.getIdxByNode(this._getClosestRow(a))
  };
  c._canvasFind = function(a) {
    return this._canvas.find(a)
  };
  f._renderer = function(a) {
    return a == null ? "" : a
  }
})();
console && console.log && console.log('reading javascript source "ColumnManager.js"...');
jx.grid.ColumnManager = {};
(function() {
  function f(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    this.grid.colDefMgr = this;
    this._options = g._extend({colDef:{type:"string", key:void 0, name:"", colClass:void 0, defaultValue:void 0, inputOnCreate:void 0, style:"", headerStyle:"", width:80, minW:30, maxW:void 0, editor:void 0, sorter:void 0, hidden:!1, sumRenderer:void 0, tooltipEnabled:!1, resizable:!1, renderer:void 0, rendererInput:!1, noTitle:!1, noName:!1, title:void 0, noSearch:!1, filter:void 0, parser:void 0, validator:void 0}}, a.options);
    this._colDefs = [];
    this._filtered = [];
    this._keyToDef = {};
    this._keyToIdx = {};
    this.__init(a)
  }
  function h(a) {
    if(a) {
      switch(a = a.toLowerCase(), a) {
        case "bool":
        ;
        case "boolean":
          return"boolean";
        case "int":
        ;
        case "integer":
        ;
        case "long":
        ;
        case "short":
          return"int";
        case "float":
        ;
        case "double":
        ;
        case "number":
        ;
        case "num":
        ;
        case "numeric":
          return"float";
        case "str":
        ;
        case "string":
        ;
        case "text":
          return"string";
        case "date":
        ;
        case "datetime":
        ;
        case "time":
        ;
        case "timestamp":
          return"date"
      }
    }
    return null
  }
  function e(a) {
    if(typeof a != "boolean") {
      if(!a) {
        return!1
      }
      switch(a.toString().toLowerCase()) {
        case "0":
        ;
        case "n":
        ;
        case "no":
        ;
        case "false":
        ;
        case "f":
        ;
        case "off":
        ;
        case "disable":
        ;
        case "disabled":
        ;
        case "null":
        ;
        case "undefined":
        ;
        case "nil":
        ;
        case "fail":
        ;
        case "not":
          return!1
      }
      return!0
    }
    return a
  }
  function b(a) {
    return typeof a != "string" ? a == null ? "" : a.toString() : a
  }
  function a(a) {
    return new Date(Date.parse(a))
  }
  function d(a, c) {
    switch(typeof a) {
      case "undefined":
        return Number.MAX_VALUE;
      case "boolean":
        return a ? 1 : 0;
      case "number":
        return a;
      case "string":
        return a[c]();
      default:
        if(a == null) {
          return Number.MAX_VALUE
        }
    }
    a = a.valueOf();
    switch(typeof a) {
      case "undefined":
        return Number.MAX_VALUE;
      case "boolean":
        return a ? 1 : 0;
      case "number":
        return a;
      case "string":
        return a[c]();
      default:
        return a == null ? Number.MAX_VALUE : a.toString()[c]()
    }
  }
  function c(a) {
    switch(typeof a) {
      case "undefined":
        return Number.MAX_VALUE;
      case "boolean":
        return a ? 1 : 0;
      case "number":
        return a
    }
    return a == null ? Number.MAX_VALUE : e(a) ? 1 : 0
  }
  var g = goog.getObjectByName("jx.grid"), l = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.getObjectByName("jx.grid.Column");
  goog.getObjectByName("jx.grid.ViewportManager");
  goog.exportSymbol("jx.grid.ColumnManager", f);
  f.getInstance = function(a) {
    return new f(a)
  };
  var j = f.prototype;
  j.__init = function(a) {
    this.grid.event.bind("onDestroy", this._destroy, this);
    this.set(a.colDefs)
  };
  j._destroy = function() {
    g._destroy(this, {name:"ColumnManager", path:"colDefMgr", property:"_colDefs", map:"_keyToIdx _keyToDef _options", array:"_filtered"})
  };
  j.getAll = function() {
    return this._colDefs
  };
  j.set = function(a) {
    if(this._colDefs === a || l.areEqualArrays(this._colDefs, a)) {
      return a
    }
    if(l.isNull(a)) {
      a = []
    }else {
      var c = a.filter(function(a) {
        return l.isNotNull(a)
      });
      a.length = 0;
      a.pushList(c)
    }
    this.grid.event.trigger("onBeforeSetColDefs", [this._colDefs, a], !0);
    this._colDefs = [];
    this._filtered.length = 0;
    this._keyToIdx = {};
    this._keyToDef = {};
    this.grid.event.trigger("onEmptyColDefs", !1, !0);
    for(var c = 0, d = a.length, b = this._keyToDef, g, e;c < d;c++) {
      g = a[c];
      if(!g.hasOwnProperty("key")) {
        return this._keyToDef = {}, this.grid.error("KEY_UNDEFINED", c)
      }
      e = g.key;
      if(l.isEmptyString(e)) {
        return this._keyToDef = {}, this.grid.error("BAD_NULL", c)
      }
      if(b.hasOwnProperty(e)) {
        return this._keyToDef = {}, this.grid.error("DUP_KEY", e)
      }
      b[e] = g
    }
    this._colDefs = a;
    for(c = 0;c < d;c++) {
      this._extend(a[c])
    }
    this.grid.event.trigger("onAfterSetColDefs", [a, this._filter()], !0);
    return a
  };
  j.push = function(a) {
    return this.addAt(this._filtered.length, a)
  };
  j.addAt = function(a, c) {
    if(!l.isNull(c)) {
      var d = c.key, b = this._keyToDef, g = this._filtered;
      l.isNull(a) || a > g.length ? a = g.length : a < 0 && (a += g.length);
      this.grid.event.trigger("onBeforeAddColDef", [c], !0);
      if(l.isNull(d)) {
        return this.grid.error("KEY_UNDEFINED")
      }
      if(b.hasOwnProperty(d)) {
        return this.grid.error("DUP_KEY", d)
      }
      this._colDefs.addAt(a, this._extend(b[d] = c));
      c.hidden !== !0 && (g.addAt(a, c), this._reidx());
      this.grid.event.trigger("onAfterAddColDef", [c, a], !0);
      return g.length
    }
  };
  j._extend = function(c) {
    if(c) {
      var d = {}, g, l;
      $.extend(!0, d, this._options.colDef);
      $.extend(!0, d, c);
      $.extend(!0, c, d);
      d = c.type = h(c.type);
      l = c.key;
      l != null && typeof l != "string" && (c.key = l = l.toString());
      if(!l) {
        throw Error("column key is not defined!");
      }
      if(g = c.sorter) {
        typeof g == "string" ? g = h(g) : d && (g = d);
        if(g = f.sorter(g, l)) {
          g.key = l
        }
        c.sorter = g
      }
      if((g = c.parser) && d && typeof g != "function") {
        switch(d) {
          case "boolean":
            g = e;
            break;
          case "int":
            g = parseInt;
            break;
          case "float":
            g = parseFloat;
            break;
          case "string":
            g = b;
            break;
          case "date":
            g = a;
            break;
          default:
            g = null
        }
        c.parser = g
      }
    }
    return c
  };
  j.hide = function(a) {
    var c = this._filtered[a];
    if(!l.isNull(c)) {
      return c.hidden = !0, this._filtered.removeAt(a), this._reidx(), this.grid.event.trigger("onHideCol", [c, a], !0), c
    }
  };
  j.show = function(a) {
    if(!l.isNull(a)) {
      if(!l.isString(a)) {
        if(!l.isObject(a)) {
          return
        }
        a = a.key
      }
      var c = this._keyToDef;
      if(c.hasOwnProperty(a)) {
        if(this._keyToIdx.hasOwnProperty(a)) {
          return c[a]
        }
        c = c[a];
        c.hidden = !1;
        this._filter();
        this._reidx();
        this.grid.event.trigger("onShowCol", [c, this._keyToIdx[a]], !0);
        return c
      }
    }
  };
  j._filter = function() {
    this._filtered = this._colDefs.filter(function(a) {
      return a.hidden !== !0
    });
    this._reidx();
    return this._filtered
  };
  j._reidx = function() {
    this._keyToIdx = {};
    return this._reidxFrom()
  };
  j._reidxFrom = function(a) {
    l.isNull(a) && (a = 0);
    for(var c = this._filtered, d = c.length, b = this._keyToIdx;a < d;a++) {
      b[c[a].key] = a
    }
    return b
  };
  j.get = function(a) {
    if(l.isNull(a)) {
      return this._filtered
    }
    if(this._filtered.hasOwnProperty(a)) {
      return this._filtered[a]
    }
  };
  j.getByKey = function(a) {
    if(l.isNotNull(a) && this._keyToDef.hasOwnProperty(a)) {
      return this._keyToDef[a]
    }
  };
  j.length = function() {
    return this._filtered.length
  };
  j.getIdxByKey = function(a) {
    return this._keyToIdx.hasOwnProperty(a) ? this._keyToIdx[a] : -1
  };
  j.getIdx = function(a) {
    return l.isNotNull(a) && this._keyToIdx.hasOwnProperty(a.key) ? this._keyToIdx[a.key] : -1
  };
  j.sortByKey = function(a) {
    this._filtered.length = 0;
    this._keyToIdx = {};
    for(var c = 0, d = a.length, b = this._filtered, g = this._keyToIdx, e = this._keyToDef;c < d;c++) {
      b.push(e[a[c]]), g[a[c]] = c
    }
    this.grid.event.trigger("onReorderCols", a, !0);
    return this._filtered
  };
  j.getKeys = function() {
    return this._filtered.map(function(a) {
      return a.key
    })
  };
  f.sorter = function(a, b, g) {
    g = {on:!!g, key:b};
    switch(a) {
      case "boolean":
        return g.comparator = function(a, d) {
          return c(a[b]) - c(d[b])
        }, g;
      case "string":
        return g.lexi = b, g;
      case "int":
        return g.comparator = function(a, c) {
          return d(a[b], "toInt") - d(c[b], "toInt")
        }, g;
      case "float":
        return g.comparator = function(a, c) {
          return d(a[b], "toFloat") - d(c[b], "toFloat")
        }, g;
      case "date":
        return g.comparator = function(a, c) {
          return d(a[b], "toInt") - d(c[b], "toInt")
        }, g
    }
    return null
  }
})();
console && console.log && console.log('reading javascript source "MenuBar.js"...');
jx.grid.MenuBar = {};
(function() {
  function f(a) {
    b.call(this, a);
    this.grid.menubar = this
  }
  var h = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util"), b = goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.MenuBar", f);
  goog.inherits(f, b);
  f.getInstance = function(a) {
    return new f(a)
  };
  var a = f.prototype;
  a._defaultOptions = function() {
    return{background:"url(" + this.grid._options.imageUrl + "menubar-bg.png) repeat-x scroll center", borderThickness:1, border:"solid #b6bac0", height:27, classMenuBar:"menubar", classIcon:"menu-icon", iconBorderThickness:1, iconBorder:"solid transparent", iconBorderHover:"solid #d4d4d4", iconBorderActive:"solid #9a9a9a", iconMargin:2, iconBackground:"", iconBackgroundHover:"url(" + this.grid._options.imageUrl + "menu-icon-hover.png) repeat-x scroll center", iconBackgroundActive:"url(" + this.grid._options.imageUrl + 
    "menu-icon-active.png) repeat-x scroll center", iconHeight:21, iconWidth:21, iconBorderRadius:4, iconBorderFocus:"solid #5f5f5f"}
  };
  a._init = function(a) {
    this._ctnr = a.container;
    this._menubar = $("<div class='" + this._options.classMenuBar + "'></div>").prependTo(this._ctnr)
  };
  a._bindEvents = function() {
    this.grid.event.bind({onCreateCss:this._onCreateCss, onDestroy:this._destroy}, this)
  };
  a._destroy = function() {
    h._destroy(this, {name:"MenuBar", path:"menubar", $:"_menubar", property:"_ctnr", map:"_options"})
  };
  a._onCreateCss = function() {
    var a = "#" + this.grid.mid + " .", c = this._options, b = [];
    b.push(a + c.classMenuBar + "{" + h._CONST._cssUnselectable + "overflow:hidden;width:100%;background:" + c.background + ";border-bottom:" + (c.borderThickness + "px " + c.border) + ";height:" + c.height + "px}");
    b.push(a + c.classIcon + "{float:left;height:" + c.iconHeight + "px;width:" + c.iconWidth + "px;border:" + c.iconBorderThickness + "px " + c.iconBorder + ";margin:" + c.iconMargin + "px 0 0 " + c.iconMargin + "px;background:" + c.iconBackground + ";border-radius:" + c.iconBorderRadius + "px;-moz-border-radius:" + c.iconBorderRadius + "px}");
    b.push(a + c.classIcon + ":hover," + a + c.classIcon + ":focus{background:" + c.iconBackgroundHover + ";border:" + c.iconBorderThickness + "px " + c.iconBorderHover + "}");
    b.push(a + c.classIcon + ":active," + a + c.classIcon + ".active{cursor:default;background:" + c.iconBackgroundActive + ";border:" + c.iconBorderThickness + "px " + c.iconBorderActive + "}");
    b.push(a + c.classIcon + ".active:focus{border:" + c.iconBorderThickness + "px " + c.iconBorderFocus + "}");
    return b.join("")
  };
  a.addIcon = function(a, c, b, f, h) {
    return $("<div class='" + this._options.classIcon + "' tabIndex='0' title='" + c + "'><div class='" + a + "' style='margin-top:" + (this._options.iconHeight - f) / 2 + "px;margin-left:" + (this._options.iconWidth - b) / 2 + "px'></div></div>").appendTo(this._menubar).click(function(a) {
      h();
      $(this).toggleClass("active");
      a.preventDefault()
    }).keydown(function(a) {
      if(a.which === e.keyMapKeydown.enter || a.which === e.keyMapKeydown.space) {
        h(), $(this).toggleClass("active"), a.preventDefault()
      }
    })
  }
})();
console && console.log && console.log('reading javascript source "Footer.js"...');
jx.grid.Footer = {};
(function() {
  function f(a) {
    this.mid = a.mid;
    this._ctnr = a.container;
    this.grid = a.grid;
    this.grid.footer = this;
    this._options = h._extend({classCell:"footer-cell", background:"#F1F5FB", border:"0px solid #CCD9EA", color:"#000", fontSize:"13px", fontWeight:"normal", cellHeight:25, cellPadding:40, countTemplate:"현재 <span name='shownCount'></span> 건 / 총 <span name='totalCount'></span> 건", titleColor:"#5A6779", titleFontSize:"12px", titleFontWeight:"normal", contentColor:"#1E395B", contentFontSize:"12px", contentFontWeight:"normal", classFooter:"jgrid-footer", classTitle:"footer-title", classContent:"footer-content", 
    style:"", cellStyle:"", titleStyle:"", contentStyle:""}, a.options);
    this._sumMap = {};
    this.__init()
  }
  var h = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.Footer", f);
  f.getInstance = function(a) {
    return new f(a)
  };
  var b = f.prototype;
  b.__init = function() {
    this._foot = $("<div class='" + this._options.classFooter + "'>").appendTo(this._ctnr);
    this.getNextCell().html(this._options.countTemplate);
    this._updateTotalCount();
    this._updateShownCount();
    this._initSumCells();
    this.bindEvents()
  };
  b.bindEvents = function() {
    this.grid.event.bind({onCreateCss:this._onCreateCss, onDestroy:this._destroy, onDataChange:[this._updateTotalCount, this._updateSums], onAfterRefresh:this._updateShownCount}, this)
  };
  b._destroy = function() {
    var a, d = this._sumMap;
    for(a in d) {
      d.hasOwnProperty(a) && d[a].remove()
    }
    h._destroy(this, {name:"Footer", path:"footer", $:"_foot", property:"_ctnr", map:"_sumMap _options"})
  };
  b._onCreateCss = function() {
    var a = this._options, d = "#" + this.grid.mid + " ." + a.classFooter, c = [];
    c.push(d + "{float:left;cursor:default;width:100%;" + h._CONST._cssUnselectable + "background:" + a.background + ";border-top:" + a.border + ";border-collapse:collapse;color:" + a.color + ";font-size:" + a.fontSize + ";font-weight:" + a.fontWeight + ";padding-left:8px;" + a.style + "}");
    c.push(d + " ." + a.classCell + "{float:left;white-space:nowrap;line-height:" + a.cellHeight + "px;padding-right:" + a.cellPadding + "px;" + a.cellStyle + "}");
    c.push(d + " ." + a.classTitle + "{text-align:right;color:" + a.titleColor + ";font-size:" + a.titleFontSize + ";font-weight:" + a.titleFontWeight + ";" + a.titleStyle + "}");
    c.push(d + " ." + a.classContent + "{color:" + a.contentColor + ";font-size:" + a.contentFontSize + ";font-weight:" + a.contentFontWeight + ";" + a.contentStyle + "}");
    return c.join("")
  };
  b._updateTotalCount = function() {
    this._foot.find("[name=totalCount]")[0].innerHTML = this.grid.dataMgr.getReal().length
  };
  b._updateShownCount = function() {
    this._foot.find("[name=shownCount]")[0].innerHTML = this.grid.dataMgr.filterReal(this.grid.dataMgr.datalist).length
  };
  b._initSumCells = function() {
    for(var a = this.grid.dataMgr.getReal(), d = this.grid.colDefMgr.get(), c = d.length, b, h, j, i, p = f._calSum, k = this._sumMap, q, m = 0;m < c;m++) {
      if(b = d[m], h = b.sumRenderer, e.isNotNull(h)) {
        if(j = b.key, b = b.name, i = p(a, j), j = k[j] = this.getNextCell(), q = j[0], e.isFunction(h)) {
          q.innerHTML = h(b, i)
        }else {
          if(e.isString(h)) {
            if(j = h.toLowerCase(), j === "krw" || h === "\\") {
              q.innerHTML = this._sumRenderer(b, e.formatNumber(i))
            }else {
              if(j === "usd" || h === "$") {
                q.innerHTML = this._sumRenderer(b, e.formatNumber(i, 2, "$ "))
              }
            }
          }else {
            q.innerHTML = this._sumRenderer(b, i)
          }
        }
      }
    }
  };
  b._updateSums = function() {
    var a = this.grid.dataMgr.getReal(), d, c = this._sumMap, b = this.grid.colDefMgr, h, j, i, p = f._calSum, k, q, m = this._options.classContent;
    for(d in c) {
      if(c.hasOwnProperty(d)) {
        if(h = b.getByKey(d), j = h.sumRenderer, i = p(a, d), k = c[d], q = k[0], e.isFunction(j)) {
          q.innerHTML = j(h.name, i)
        }else {
          if(e.isString(j)) {
            if(h = j.toLowerCase(), h === "krw" || j === "\\") {
              k.find("span." + m)[0].innerHTML = e.formatNumber(i)
            }else {
              if(h === "usd" || j === "$") {
                k.find("span." + m)[0].innerHTML = e.formatNumber(i, 2, "$ ")
              }
            }
          }else {
            k.find("span." + m)[0].innerHTML = i
          }
        }
      }
    }
  };
  b.getNextCell = function() {
    return $("<div class='" + this._options.classCell + "'/>").appendTo(this._foot)
  };
  b._sumRenderer = function(a, d) {
    return"<span class='" + this._options.classTitle + "'>" + a + " 합계: </span><span class='" + this._options.classContent + "'>" + d + "</span>"
  };
  f._calSum = function(a, d) {
    for(var c = 0, b, e = a.length, f = 0;f < e;f++) {
      if(typeof(b = a[f][d]) === "string") {
        b = b.toFloat()
      }
      c += isNaN(b) ? 0 : b
    }
    return c
  }
})();
console && console.log && console.log('reading javascript source "ColumnHeader.js"...');
jx.grid.ColumnHeader = {};
(function() {
  function f(c) {
    c.grid.log("creating new ColumnHeader instance...", a.V_INIT);
    b.call(this, c)
  }
  var h = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util"), b = goog.getObjectByName("jx.grid.BaseModule"), a = goog.getObjectByName("jx.grid.Grid");
  goog.exportSymbol("jx.grid.ColumnHeader", f);
  goog.inherits(f, b);
  f.getInstance = function(a) {
    return new f(a)
  };
  var d = f.prototype;
  d._init = function(c) {
    this.grid.log("initializing ColumnHeader instance...", a.V_INIT);
    this.grid.header = this;
    this._ctnr = c.container;
    this._map = {};
    this._resizeMap = {};
    c = this._options;
    this._mask = $("<div class='" + c.classHeaderMask + "'>").prependTo(this._ctnr);
    this._head = $("<div class='" + c.classHeader + "'>").appendTo(this._mask);
    f._disableSel(this._head)
  };
  d._bindEvents = function() {
    this.grid.log("binding ColumnHeader events...", a.V_INIT);
    var c, d = this.getColumns(), b = d.length, e = 0;
    for(c = {onRenderModules:this._onRenderModules, onAfterRenderModules:this._onAfterRenderModules, mousedown:this._mousedown, mouseup:this._mouseup, dragmove:this._dragmove, onScrollViewportH:this._onScrollViewportH, onScrollViewportV:this._onScrollViewportV, onChangeSorter:this._onChangeSorter, click:this._click, onResizeCol:this._setWidthByKey};e < b;e++) {
      if(d[e].sorter) {
        c["clickHeader_" + d[e].key] = this._sort
      }
    }
    this.bindGridEvent(c, this)
  };
  d._defaultOptions = function(c) {
    this.grid.log("extending ColumnHeader options...", a.V_INIT);
    c = c._options.imageUrl;
    return{reorderEnabled:!1, reorderSyncEnabled:!0, background:"url(" + c + "column-headers-bg.png) repeat-x scroll center", backgroundHover:"url(" + c + "column-headers-over-bg.png) repeat-x scroll center", backgroundPlaceholder:"#646464", sortBackground:c + "sort.png", sortRight:4, sortWidth:7, sortBackgroundAsc:c + "sort-asc.png", sortBackgroundDesc:c + "sort-desc.png", font:"15px Arial,Helvetica,sans-serif", height:21, borderThickness:1, border:"solid #909192", classHeaderMask:"jgrid-header-mask", 
    classHeader:"jgrid-header", classColHeader:"jgrid-colheader", classColHeaderActive:"jgrid-colheader-active", classColHeaderPlaceholder:"jgrid-colheader-placeholder", classInteractive:"interactive", classColHeaderSorted:"jgrid-colheader-sorted", classSort:"jgrid-sort", classSortAsc:"jgrid-sort-asc", classSortDesc:"jgrid-sort-desc", classResizeHandle:"jgrid-resize-handle", resizeHandleWidth:11, style:"", headerStyle:"", scrollerLeft:1E4, scrollerWidth:1E5, classResizeGuide:"resize-guide", resizeGuideWidth:1, 
    resizeBackground:"black;filter:alpha(opacity=40);opacity:0.4", syncResize:!1, resizeHandleBackground:"black;filter:alpha(opacity=5);opacity:0.05"}
  };
  d._beforeDispose = function() {
    this.grid.log("disposing ColumnHeader instance...", a.V_INIT);
    this._head.sortable && this._head.sortable("destroy");
    this._destroyResizeHandles();
    h._destroy(this, {name:"ColumnHeader", path:"header", $:"_resizeGuide _mask _head", property:"_ctnr _resizeMap", map:"_map _options"});
    this.dispose()
  };
  d._destroyResizeHandles = function() {
    var a = this._resizeMap, d;
    for(d in a) {
      a.hasOwnProperty(d) && (a[d].remove(), delete a[d])
    }
    delete this._resizeKey;
    delete this._resizeInitX;
    delete this._resizeHandleInitX;
    delete this._resizeInitWidth;
    delete this._resizeInitColWidth
  };
  d._beforeCreateCss = function(c) {
    this.grid.log("creating CSS for ColumnHeader...", a.V_INIT);
    var d = "#" + this.grid.mid + " .", b = this._options, e = b.borderThickness + "px " + b.border, f = this.getColumns(), h = f.length, k = 0, q = "." + b.classHeaderMask, m = "." + b.classColHeader, o = b.scrollerLeft, o = b.scrollerLeft, n = b.height + "px", s = b.classColHeaderActive, r = {};
    r[q] = {position:"relative", overflow:"hidden", width:"100%", font:b.font, background:b.background, "border-bottom":e, _append:b.style};
    r["." + b.classHeader] = {position:"relative", overflow:"hidden", "white-space":"nowrap", cursor:"default", left:-o + "px", width:b.scrollerWidth + "px", "line-height":n};
    r[m] = {position:"relative", overflow:"hidden", "float":"left", "text-overflow":"ellipsis", "text-align":"center", height:n, left:o - this.getView().getScrollLeft() + "px", "border-right":e, _append:b.headerStyle};
    r[m + "." + b.classInteractive + ":hover, " + d + s] = {background:b.backgroundHover};
    r["." + s] = {"border-left":e};
    r[m + "." + b.classColHeaderPlaceholder] = {background:b.backgroundPlaceholder + "!important"};
    r["." + b.classSort] = {position:"absolute", height:n, right:b.sortRight + "px", width:b.sortWidth + "px", background:"url(" + b.sortBackground + ") no-repeat center transparent"};
    r["." + b.classSortAsc] = {background:"url(" + b.sortBackgroundAsc + ") no-repeat center transparent"};
    r["." + b.classSortDesc] = {background:"url(" + b.sortBackgroundDesc + ") no-repeat center transparent"};
    r["." + b.classResizeHandle] = {"z-index":10, background:b.resizeHandleBackground, cursor:"e-resize", position:"absolute", height:n, width:b.resizeHandleWidth + "px"};
    for(r["." + b.classResizeGuide] = {"z-index":10, position:"absolute", background:b.resizeBackground, width:b.resizeGuideWidth + "px"};k < h;k++) {
      f[k].headerStyle && (r[m + "#" + this.mid + "h" + f[k].key] = {_append:f[k].headerStyle})
    }
    this.toCssStyles(c.css, r)
  };
  d._widthPlus = function() {
    return this._options.borderThickness
  };
  d._onScrollViewportH = function(c) {
    this.grid.log("adjusting Colheader style.left according to viewport scrollLeft...", a.V_RESIZE);
    this._head[0].style.left = -this._options.scrollerLeft - c + "px"
  };
  d._onRenderModules = function() {
    this.grid.log("rendering Colheader...", a.V_INIT);
    for(var c = this.getColumns(), d = c.length, b = 0, e, f = [];b < d;b++) {
      (e = c[b]).hidden || this._render(f, e, b)
    }
    this._head[0].innerHTML = f.join("");
    this.triggerGridEvent("onRenderHeadersComplete", !1, !0)
  };
  d._onAfterRenderModules = function() {
    var a = this._options;
    a.reorderEnabled && this._initReorder();
    this._initResizeHandles();
    this._resizeGuide = $("<div class='" + a.classResizeGuide + "'>").appendTo(this.getView()._mask);
    this._resizeGuide[0].style.top = "0px";
    this._resizeGuide[0].style.height = "0px"
  };
  d._render = function(a, b, d) {
    var e = this._options, f = b.key, h = b.noName ? "" : b.name || f, k = this._widthPlus(), q = "onRenderHeader_" + f, m = [a];
    a.push("<div id='" + this.mid + "h" + f + "' class='" + e.classColHeader + " " + (e.reorderEnabled || b.sorter ? " " + e.classInteractive : "") + "' " + (b.noTitle ? "" : "title='" + (b.title || h) + "' ") + "style='width:" + (this.getView()._getColOuterWidth(d) - k) + "px;' colKey='" + f + "'>");
    this.triggerGridEvent(q + "_prepend", m, !0);
    a.push(h);
    this.triggerGridEvent(q + "_append", m, !0);
    b.sorter && a.push("<span class='" + e.classSort + "'></span>");
    a.push("</div>")
  };
  f._disableSel = function(a) {
    Util$.safe$(a).attr("unselectable", "on").css("MozUserSelect", "none").bind("selectstart.ui", function() {
      return!1
    })
  };
  d.get = function(a) {
    if(this._map.hasOwnProperty(a)) {
      return this._map[a]
    }
    var b = document.getElementById(this.mid + "h" + a);
    return!b ? $([]) : this._map[a] = $(b)
  };
  d._updateIndicator = function(a, b) {
    var d = this.get(a), e = this._options, f = d.find("." + e.classSort), h = e.classColHeaderSorted, k = e.classSortAsc, e = e.classSortDesc;
    b === 0 ? (d.removeClass(h), f.removeClass(k + " " + e)) : (d.addClass(h), b === 1 ? f.addClass(k).removeClass(e) : b === 2 && f.addClass(e).removeClass(k))
  };
  d._closest = function(a) {
    return Util$.safe$(a).closest("div." + this._options.classColHeader, this._head)
  };
  d._getDef = function(a) {
    return this.getColMgr().getByKey(a.attr("colKey"))
  };
  d._sort = function(c, b, d) {
    this.grid.log("Colheader clicked to sort. key=" + e, a.V_CLICK);
    var e = d.key, c = d.sorter;
    this.triggerGridEvent("onBeforeColSort_" + e, !1, !0);
    this.triggerGridEvent("onBeforeColSort", !1, !0);
    c.desc = c.desc === !1 ? !0 : !1;
    this.getDataMgr().refresh({sorter:c});
    this.getView()._scroll()
  };
  d._onChangeSorter = function(a, b) {
    a !== b && a && this._updateIndicator(a.key, 0);
    b && this._updateIndicator(b.key, b.desc ? 2 : 1)
  };
  d._initReorder = function() {
    this.grid.log("initializing Colheader reorder functionality...", a.V_INIT);
    var c = this, b = this._options, d = this.getColMgr(), e = this._head, f = this.mid.length + 1, h = function(a, c) {
      for(var b = $(e).sortable("toArray"), g = b.length, h, p = 0;p < g;p++) {
        h = b[p], b[p] = h === "" ? c.item.attr("id").substring(f) : h.substring(f)
      }
      d.sortByKey(b)
    };
    e.sortable({items:"." + b.classColHeader, axis:"x", forcePlaceholderSize:!0, placeholder:b.classColHeaderPlaceholder + " " + b.classColHeader, tolerance:"pointer", start:function(a, b) {
      b.item.addClass(c._options.classColHeaderActive)
    }, stop:function(a, b) {
      b.item.removeClass(c._options.classColHeaderActive);
      c._syncResizeHandles()
    }, update:h});
    b.reorderSyncEnabled && e.sortable("option", "change", h)
  };
  d._getDx = function(a, b) {
    var d = a.clientX - this._resizeInitX, f = b.minW, h = e.ifNull(b.maxW, Number.MAX_VALUE), p = this._resizeInitWidth;
    p + d < f && (d = f - p);
    p + d > h && (d = h - p);
    return d
  };
  d._click = function(c) {
    var b = this._closest(c.target);
    if(b.length !== 0) {
      var d = this._getDef(b), e = d.key, c = [c, b, d];
      this.grid.log("Colheader clicked. key=" + e, a.V_CLICK);
      this.getEventMgr().triggerInvalid("clickHeaderValid_" + e, c) || (this.triggerGridEvent("clickHeader_" + e, c, !0), this.triggerGridEvent("clickHeader", c, !0))
    }
  };
  d._mousedown = function(c) {
    var b = this._options;
    if(e.hasTagAndClass(c.target, "DIV", b.classResizeHandle)) {
      var d = this._resizeKey = c.target.getAttribute("key");
      this.grid.log("mousedown on ColumnHeader Resize Handle. key=" + d, a.V_MOUSEDOWN);
      this._resizeInitWidth = this.get(d)[0].clientWidth;
      this._resizeInitColWidth = this.getColMgr().getByKey(d).width;
      this._resizeInitX = c.clientX;
      this._resizeHandleInitX = this._resizeMap[d][0].offsetLeft;
      this._resizeGuide[0].style.left = Math.floor(this._resizeHandleInitX + (b.resizeHandleWidth - b.resizeGuideWidth) / 2 - b.scrollerLeft) + "px";
      this._resizeGuide[0].style.height = this.getView().getInnerHeight() + "px"
    }else {
      if(b = this._closest(c.target), b.length) {
        var f = this._getDef(b), d = f.key, c = [c, b, f];
        this.grid.log("mousedown on ColumnHeader. key=" + d, a.V_MOUSEDOWN);
        this.triggerGridEvent("mousedownHeader", c, !0);
        this.triggerGridEvent("mousedownHeader_" + d, c, !0)
      }
    }
  };
  d._dragmove = function(c) {
    var b = this._resizeKey;
    if(b != null && (c = this._getDx(c, this.getColMgr().getByKey(b)), !(Math.abs(c) < 1))) {
      this.grid.log("drag on ColumnHeader Resize Handle. key=" + b, a.V_MOUSEMOVE);
      var d = this._options;
      this.get(b)[0].style.width = this._resizeInitWidth + c + "px";
      this._moveResizeHandles(this._resizeHandleInitX + c - this._resizeMap[b][0].offsetLeft, this.getColMgr().getIdxByKey(b));
      this._resizeGuide[0].style.left = Math.floor(this._resizeHandleInitX + c + (d.resizeHandleWidth - d.resizeGuideWidth) / 2 - d.scrollerLeft) + "px";
      d.syncResize && this.getView().setWidthByKey(b, this._resizeInitColWidth + c)
    }
  };
  d._mouseup = function(c) {
    var b = this._resizeKey;
    if(b != null) {
      this.grid.log("mouseup on ColumnHeader Resize Handle. key=" + b, a.V_MOUSEUP), this._resizeGuide[0].style.height = "0px", c = this._getDx(c, this.getColMgr().getByKey(b)), Math.abs(c) >= 1 && this.getView().setWidthByKey(b, this._resizeInitColWidth + c), delete this._resizeKey, delete this._resizeInitX, delete this._resizeHandleInitX, delete this._resizeInitWidth, delete this._resizeInitColWidth
    }
  };
  d._setWidthByKey = function(c, b) {
    this.grid.log("setting ColumnHeader width=" + b + ". key=" + c, a.V_RESIZE);
    this.get(c)[0].style.width = b + this.getView()._colWidthPlus() - this._widthPlus() + "px";
    this._syncResizeHandles(this.getColMgr().getIdxByKey(c));
    this.getView()._scroll()
  };
  d._syncResizeHandles = function(a) {
    for(var a = a || 0, b = this.getView()._getColLefts(), d = this.getColumns(), e = d.length, f = this._resizeMap, h;a < e;a++) {
      if(h = d[a].key, f.hasOwnProperty(h)) {
        f[h][0].style.left = b[a + 1] + this._resizeHandleOffset + "px"
      }
    }
  };
  d._moveResizeHandles = function(a, b) {
    for(var b = b || 0, d = this.getColumns(), e = d.length, f = this._resizeMap, h;b < e;b++) {
      if(h = d[b].key, f.hasOwnProperty(h)) {
        h = f[h][0], h.style.left = h.offsetLeft + a + "px"
      }
    }
  };
  d._onScrollViewportV = function() {
    this._resizeGuide[0].style.top = this.getView().getScrollTop() + "px"
  };
  d._initResizeHandles = function() {
    this.grid.log("initializing Colheader resize functionality...", a.V_INIT);
    for(var c = this.getColumns(), b = c.length, d = this.getView(), e = d.mid, d = d._getColLefts(), f = this._options, h = this._resizeMap, k, q = 0, m = this._resizeHandleOffset = Math.floor(f.scrollerLeft - f.resizeHandleWidth / 2), o = f.classResizeHandle, n = this._head;q < b;q++) {
      if(f = c[q], f.resizable) {
        k = f.key, h[k] = $("<div class='" + o + "' key='" + k + "' ondblclick='JGM.m.ViewportManager." + e + '._autoColWidth("' + k + "\")' style='left:" + (m + d[q + 1]) + "px' title='" + f.name + " 컬럼의 폭을 조절합니다.'>").appendTo(n)
      }
    }
  }
})();
console && console.log && console.log('reading javascript source "CheckManager.js"...');
jx.grid.CheckManager = {};
(function() {
  function f(a) {
    function c() {
      var a = this._options, c = this._isRadio = a.isRadio = !!a.isRadio;
      this._hasMaster = a.master = !c && !!a.master;
      this._col = a.colDef;
      this._key = this._col.key;
      this._cssClass = a.classCheck;
      this._cssClassMaster = a.classMasterCheck;
      this._name = a.name || c && "radio" + this.mid || null
    }
    this.addEventListener("afteroption", c);
    b.call(this, a);
    this.removeEventListener("afteroption", c)
  }
  var h = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util"), b = goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.CheckManager", f);
  goog.inherits(f, b);
  f.getInstance = function(a) {
    return new f(a)
  };
  var a = f.prototype;
  a._init = function() {
    this._map = {};
    this.disabledmap = {};
    this._count = 0;
    this._disabled = !1;
    var a, c = h._CONST;
    a = this.getColMgr();
    a.getByKey(this._col.key) || a.addAt(this._options.colIdx, this._col);
    if(e.isNull(c._checkboxWidth)) {
      a = e.calCheckSize(), c._checkboxWidth = a.checkboxW, c._checkboxHeight = a.checkboxH, c._radioWidth = a.radioW, c._radioHeight = a.radioH
    }
  };
  a._bindEvents = function() {
    var a = this._col.key, c;
    c = {onAfterSetDatalist:this.uncheckAll, onIdChange:this._onIdChange, onIdListChange:this._onIdListChange, onRemoveDatarow:this._onRemoveDatarow, onRemoveDatalist:this._onRemoveDatalist};
    c["onRenderCell_" + a + "_prepend"] = this._onRenderCell;
    c["keydownColSel_" + a + "_" + e.keyMapKeydown.space] = this._keydownColSel;
    if(this._hasMaster) {
      c["onRenderHeader_" + a + "_prepend"] = this._onRenderHeader, c.onRenderHeadersComplete = this._getMaster
    }
    this.bindGridEvent(c, this)
  };
  a._defaultOptions = function() {
    return{colDef:{key:"checkbox", width:20, name:" ", noTitle:!0, resizable:!1, sorter:null, filter:null, noSearch:!0, editor:null, inputOnCreate:!1}, colIdx:0, name:void 0, classCheck:"checkmg", classMasterCheck:"checkm", master:!0, isRadio:!1}
  };
  a._beforeCreateCss = function(a) {
    var c, b, e = a.css;
    this._isRadio ? (a = h._CONST._radioWidth, c = h._CONST._radioHeight) : (a = h._CONST._checkboxWidth, c = h._CONST._checkboxHeight);
    b = "*overflow:hidden;padding:0;width:" + a + "px;height:" + c + "px;";
    e.push(this.getView()._getCellSelector() + " ." + this._cssClass + "[mid='" + this.mid + "']{" + b + "margin:" + (this.getView()._getRowInnerHeight() - c) / 2 + "px 0 0 " + (this._col.width - this.getView()._getPadding() - a) / 2 + "px}#" + this.mid + "h{" + b + "margin:" + (this.getHeader()._options.height - c) / 2 + "px 0 0 0}")
  };
  a.checkList = function(a, c) {
    if(!c) {
      a = this.getDataMgr().mapList(a).mapped
    }
    for(var b = 0, e = a.length;b < e;b++) {
      this.check(a[b], !0)
    }
  };
  a.setCheckList = function(a, c) {
    this.uncheckAll();
    this.checkList(a, c)
  };
  a.getCheckList = function() {
    return e.toArray(this._map)
  };
  a.getDisableds = function() {
    return e.toArray(this.disabledmap)
  };
  a.toggleCheckAll = function() {
    this.isCheckedAll() ? this.uncheckAll() : this.checkAll()
  };
  a.checkAll = function() {
    this._hasMaster && f._check(this._master);
    f._check(this.getCheckboxes());
    for(var a = this.getAllData(), c = a.length, b = this.getIdKey(), e = this._map, h = 0;h < c;h++) {
      e[a[h][b]] = a[h]
    }
    this._count = c
  };
  a.uncheckAll = function() {
    this._hasMaster && f._uncheck(this._master);
    f._uncheck(this.getCheckboxes());
    this._map = {};
    this._count = 0
  };
  a.toggleCheck = function(a, c) {
    c || (a = this.getDataMgr().map(a));
    this.isChecked(a, !0) && !this._isRadio ? this.uncheck(a, !0) : this.check(a, !0)
  };
  a.toggleDisable = function(a, c) {
    c || (a = this.getDataMgr().map(a));
    this.isDisabled(a, !0) ? this.enable(a, !0) : this.disable(a, !0)
  };
  a.toggleById = function(a) {
    this.toggleCheck(this.getDataMgr().getById(a), !0)
  };
  a.check = function(a, c) {
    c || (a = this.getDataMgr().map(a));
    this._add(a) && (f._check(this.getCheckbox(a)), this._updateMaster(), this.triggerGridEvent("onCheckChange", [a, !0], !0))
  };
  a.uncheck = function(a, c) {
    c || (a = this.getDataMgr().map(a));
    this._remove(a) && (f._uncheck(this.getCheckbox(a)), this._hasMaster && f._uncheck(this._master), this.triggerGridEvent("onCheckChange", [a, !1], !0))
  };
  a.disable = function(a, c) {
    var b = this.getDataMgr();
    c || (a = b.map(a));
    var b = b.getId(a), e = this.disabledmap;
    e.hasOwnProperty(b) || (e[b] = a, f.disableNode(this.getCheckbox(a)), this.triggerGridEvent("onDisableCheck", [a], !0))
  };
  a.enable = function(a, c) {
    var b = this.getDataMgr();
    c || (a = b.map(a));
    var b = b.getId(a), e = this.disabledmap;
    e.hasOwnProperty(b) && (delete e[b], f.enableNode(this.getCheckbox(a)), this.triggerGridEvent("onEnableCheck", [a], !0))
  };
  a._updateMaster = function() {
    this._hasMaster && f._setCheck(this._master, this.isCheckedAll())
  };
  a._add = function(a) {
    var c = a[this.getIdKey()];
    if(this._map.hasOwnProperty(c)) {
      return!1
    }
    if(this._isRadio) {
      this._map = {}, this._count = 0
    }
    this._map[c] = a;
    this._count++;
    return!0
  };
  a._remove = function(a) {
    var a = a[this.getIdKey()], c = this._map;
    if(!c.hasOwnProperty(a)) {
      return!1
    }
    delete c[a];
    this._count--;
    return!0
  };
  a.isChecked = function(a, c) {
    var b = this.getDataMgr();
    c || (a = b.map(a));
    return this._map.hasOwnProperty(b.getId(a))
  };
  a.isDisabled = function(a, c) {
    var b = this.getDataMgr();
    c || (a = b.map(a));
    return this.disabledmap.hasOwnProperty(b.getId(a))
  };
  a.splitChecked = function(a, c) {
    if(!c) {
      a = this.getDataMgr().mapList(a).mapped
    }
    for(var b = [], e = [], f = 0, h = a.length, p = this.getIdKey(), k, q = this._map;f < h;f++) {
      q.hasOwnProperty((k = a[f])[p]) ? b.push(k) : e.push(k)
    }
    return{checked:b, unchecked:e}
  };
  a.isCheckedAll = function() {
    return this._count !== 0 && this._count === this.getAllData().length ? !0 : !1
  };
  a.removeChecked = function() {
    return this.getDataMgr().removeList(this.getCheckList())
  };
  a._getMaster = function() {
    this._master = $(document.getElementById(this.mid + "h"))
  };
  a._getChecks = function(a) {
    for(var c = a.length, b = [], e = 0, f = this.getColMgr().getIdxByKey(this._key);e < c;e++) {
      b.push(a[e].childNodes[f].childNodes[0])
    }
    return b
  };
  a.getCheckboxes = function() {
    return this._getChecks(this.getView().getRenderedRows())
  };
  a.getCheckboxById = function(a) {
    if(a = this.getView().getRowById(a)) {
      return a.childNodes[this.getColMgr().getIdxByKey(this._key)].childNodes[0]
    }
  };
  a.getCheckbox = function(a) {
    return this.getCheckboxById(this.getDataMgr().getId(a))
  };
  a.getCheckboxByIdx = function(a) {
    return this.getCheckboxById(this.getDataMgr().getIdByIdx(a))
  };
  a._onRemoveDatarow = function(a) {
    this.uncheck(a, !0);
    this.enable(a, !0)
  };
  a._onRemoveDatalist = function(a) {
    for(var c = 0, b = a.length;c < b;c++) {
      this.uncheck(a[c], !0), this.enable(a[c], !0)
    }
  };
  a._onIdChange = function(a, c, b) {
    var e = this._map, f = this.disabledmap;
    e.hasOwnProperty(c) && (delete e[c], e[b] = a);
    f.hasOwnProperty(c) && (delete f[c], f[b] = a)
  };
  a._onIdListChange = function(a, c, b) {
    for(var e = 0, f = a.length, h = this._map, p = this.disabledmap, k, q;e < f;e++) {
      k = a[e], q = c[e], h.hasOwnProperty(q) && (delete h[q], h[k[b]] = k), p.hasOwnProperty(q) && (delete p[q], p[k[b]] = k)
    }
  };
  a._keydownColSel = function(a, c, b) {
    a.preventDefault();
    if(c && b) {
      var a = this.isChecked(b.getDatarow(), !0), e, b = this.getDataList();
      if(this._isRadio) {
        for(e in c) {
          if(c.hasOwnProperty(e) && e !== "length") {
            this.check(b[e], !0);
            break
          }
        }
      }else {
        for(e in c) {
          c.hasOwnProperty(e) && e !== "length" && (a ? this.uncheck(b[e], !0) : this.check(b[e], !0))
        }
      }
    }
  };
  a._onRenderHeader = function(a) {
    a.push("<input id='" + this.mid + "h' type='checkbox' tabIndex='-1' onclick='JGM.m.CheckManager." + this.mid + ".toggleCheckAll();' class='" + this._cssClass + " " + this._cssClassMaster + "' mid='" + this.mid + "'");
    this.isCheckedAll() && a.push(" checked='checked'");
    this._disabled && a.push(" disabled='disabled'");
    a.push("/>")
  };
  a._onRenderCell = function(a, c, b, e, f) {
    f.push("<input tabIndex='-1' onclick=\"JGM.m.CheckManager." + this.mid + ".toggleById('" + b[this.getIdKey()] + "')\" type='" + (this._isRadio ? "radio" : "checkbox") + "' class='" + this._cssClass + "' mid='" + this.mid + "'");
    this._name && f.push(" name='" + this._name + "'");
    this.isChecked(b, !0) && f.push(" checked='checked'");
    (this._disabled || this.isDisabled(b, !0)) && f.push(" disabled='disabled'");
    f.push("/>")
  };
  a.disableAll = function() {
    if(!this._disabled) {
      this._disabled = !0, this._hasMaster && this._master.attr("disabled", "disabled"), $(this.getCheckboxes()).attr("disabled", "disabled")
    }
  };
  a.enableAll = function() {
    if(this._disabled) {
      this._disabled = !1, this._hasMaster && this._master.removeAttr("disabled"), $(this.getCheckboxes()).removeAttr("disabled")
    }
  };
  f._check = function(a) {
    a && Util$.safe$(a).attr("checked", "checked")
  };
  f._uncheck = function(a) {
    a && Util$.safe$(a).removeAttr("checked")
  };
  f.disableNode = function(a) {
    a && Util$.safe$(a).attr("disabled", "disabled")
  };
  f.enableNode = function(a) {
    a && Util$.safe$(a).removeAttr("disabled")
  };
  f._setCheck = function(a, c) {
    c ? f._check(a) : f._uncheck(a)
  }
})();
console && console.log && console.log('reading javascript source "Collapser.js"...');
jx.grid.Collapser = {};
(function() {
  function f(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    this.grid.collapser = this;
    this._options = h._extend({key:void 0, colDef:{key:"collapser", width:120, name:" ", noSearch:!0}, colIdx:0, urlCollapsed:this.grid._options.imageUrl + "collapsed.png", urlCollapsedHover:this.grid._options.imageUrl + "collapsed-hover.png", urlExpanded:this.grid._options.imageUrl + "expanded.png", urlExpandedHover:this.grid._options.imageUrl + "expanded-hover.png", width:6, padding:5, classCollapser:"jgrid-collapser", classCollapsed:"collapsed", classExpanded:"expanded", classIndent:"indent", 
    classMasterCollapser:"master", indentSize:12, beginCollapsed:!1, CheckManager:void 0, Tree:void 0}, a.options);
    if(this._options.CheckManager) {
      this.checkMgr = h.create("CheckManager", {grid:this.grid, options:this._options.CheckManager}), delete this._options.CheckManager, e.isNull(this._options.key) && this._options.colIdx++
    }
    this._tree = new b({list:this.grid.dataMgr.all, options:this._options.Tree})
  }
  var h = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var b = goog.getObjectByName("jx.struct.Tree");
  goog.exportSymbol("jx.grid.Collapser", f);
  f.getInstance = function(a) {
    return new f(a)
  };
  var a = f.prototype;
  a.__init = function() {
    e.isNull(this._options.key) && this.grid.colDefMgr.addAt(this._options.colIdx, this._options.colDef);
    this._makeTree();
    this._filterRefresh();
    this.key = e.isNull(this._options.key) ? this._options.colDef.key : this._options.key;
    this.bindEvents()
  };
  a.bindEvents = function() {
    var a = this.key, c;
    c = {onAfterFilter:this._onAfterFilter, onCreateCss:this._onCreateCss, onDestroy:this._destroy, onAfterSetDatalist:this._onAfterSetDatalist, onAddDatarow:this._onAddDatarow, onAddDatalist:this._onAddDatalist, onUpdateDatarow:this._onUpdateDatarow, onUpdateDatalist:this._onUpdateDatalist, onRemoveDatarow:this._onRemoveDatarow, onRemoveDatalist:this._onRemoveDatalist, onRenderHeadersComplete:this._getMaster};
    c["onRenderHeader_" + a + "_prepend"] = this._onRenderHeader;
    c["clickHeaderValid_" + a] = this._clickHeaderValid;
    c["onRenderCell_" + a + "_prepend"] = this._onRenderCell;
    c["dblclickCanvas_" + a] = this._dblclickCanvas;
    c["keydownColSel_" + a + "_" + e.keyMapKeydown.space] = this._keydownColSel;
    if(e.isNotNull(this.checkMgr)) {
      c.onCheckChange = this._onCheckChange
    }
    this.grid.event.bind(c, this)
  };
  a._destroy = function() {
    h._destroy(this, {name:"Collapser", path:"collapser", module:"_tree", $:"_master", property:"checkMgr", map:"_options"})
  };
  a._onCreateCss = function() {
    var a = "#" + this.grid.mid + " .", c = this._options, b = a + this.grid.view._options.classRow + " .", f = a + c.classCollapser, h = f + "." + c.classExpanded, i = f + "." + c.classCollapsed, p = this.grid.view._getRowInnerHeight(), k = [], q = this.grid.header;
    k.push(a + c.classIndent + "{height:" + p + "px;float:left;}");
    k.push(f + "{width:" + c.width + "px;float:left;padding:0 " + c.padding + "px}");
    k.push(b + c.classCollapser + "{height:" + p + "px}");
    k.push(h + "{background:url(" + c.urlExpanded + ") no-repeat center transparent}");
    k.push(h + ":hover{background:url(" + c.urlExpandedHover + ") no-repeat center transparent}");
    k.push(i + "{background:url(" + c.urlCollapsed + ") no-repeat center transparent}");
    k.push(i + ":hover{background:url(" + c.urlCollapsedHover + ") no-repeat center transparent}");
    e.isNotNull(q) && k.push(a + q._options.classColHeader + " ." + c.classCollapser + "{height:" + q._options.height + "px}");
    return k.join("")
  };
  a._onAfterSetDatalist = function() {
    this._tree.destroy();
    this._tree = new b({list:this.grid.dataMgr.all, options:this._options.Tree});
    this._makeTree()
  };
  a._onAddDatarow = function(a) {
    a = this._tree.createNode(a);
    a._collapsed = this._options.beginCollapsed;
    a._shown = e.isNotNull(a.parent) && (a.parent === a.tree.root || a.parent._shown && !a.parent._collapsed) ? !0 : !1;
    e.isNotNull(a.parent) && a.parent.children.length === 1 && this.grid.view.rerenderCellByIdAndKey(this.grid.dataMgr.getId(a.parent.data), this.key);
    a._collapsed === !0 || a._shown === !1 ? a.traverseChildren({fn:function() {
      this._shown = !1
    }}) : a.traverseChildren({fn:function(a) {
      e.isNotNull(this.parent) && (this.parent === this.tree.root || this.parent._shown && !this.parent._collapsed) ? this._shown = !0 : (a.propagate = !1, this.traverse({fn:function() {
        this._shown = !1
      }}))
    }});
    this.grid.event.trigger("onCollapserTreeChange", !1, !0)
  };
  a._onAddDatalist = function(a) {
    for(var c = 0, b = a.length, f = this._tree, h = f.root, i = this._options.beginCollapsed, p = this.key, k = this.grid.view, q = this.grid.dataMgr, m, o = [], n;c < b;c++) {
      m = f.createNode(a[c]), m._collapsed = i, e.isNotNull(m.parent) && m.parent.children.length === 1 && o.push(m.parent.data)
    }
    if(k !== void 0) {
      c = 0;
      for(b = o.length;c < b;c++) {
        k.rerenderCellByIdAndKey(q.getId(o[c]), p)
      }
    }
    h.traverseChildren({fn:function(a) {
      n = this.parent;
      e.isNotNull(n) && (n === h || n._shown && !n._collapsed) ? this._shown = !0 : (a.propagate = !1, this.traverse({fn:function() {
        this._shown = !1
      }}))
    }});
    this.grid.event.trigger("onCollapserTreeChange", !1, !0)
  };
  a._onUpdateDatarow = function(a, c, b) {
    var f = this._tree, h = f._options.nodeKey, i = f._options.parentKey, p;
    c.hasOwnProperty(h) && (p = f.getNodeByNodeId(b[h]), f.changeNodeId(p, b[h], c[h]), this.grid.event.trigger("onCollapserTreeChange", !1, !0));
    c.hasOwnProperty(i) && (e.isNull(p) && (p = f.getNode(a)), f.changeParentId(p, b[i], c[i]), this.grid.event.trigger("onCollapserTreeChange", !1, !0))
  };
  a._onUpdateDatalist = function(a, c, b) {
    for(var c = this._tree, f = c._options.nodeKey, h = c._options.parentKey, i, p, k, q = [], m = [], o = 0, n = a.length;o < n;o++) {
      i = b[o], p = a[o], k = void 0, i.hasOwnProperty(f) && (e.isNull(k) && (k = c.getNodeByNodeId(i[f])), q.push({node:k, before:i[f], newId:p[f]})), i.hasOwnProperty(h) && (e.isNull(k) && (k = c.getNode(p)), m.push({node:k, before:i[h], newId:p[h]}))
    }
    a = q.length;
    b = m.length;
    if(a + b !== 0) {
      if(a + b > 10) {
        c.reattach()
      }else {
        for(o = 0;o < a;o++) {
          f = q[o], c.changeNodeId(f.node, f.before, f.newId)
        }
        for(o = 0;o < b;o++) {
          f = m[o], c.changeParentId(f.node, f.before, f.newId)
        }
      }
      this.grid.event.trigger("onCollapserTreeChange", !1, !0)
    }
  };
  a._onRemoveDatarow = function(a) {
    this._tree.destroyNodeByData(a);
    this.grid.event.trigger("onCollapserTreeChange", !1, !0)
  };
  a._onRemoveDatalist = function(a) {
    for(var c = 0, b = a.length, e = this._tree;c < b;c++) {
      e.destroyNodeByData(a[c])
    }
    this.grid.event.trigger("onCollapserTreeChange", !1, !0)
  };
  a._onAfterFilter = function(a, c) {
    var b = this._tree;
    if(c.length > 0) {
      var f = this.grid.dataMgr, h = a.length, i = f._idToIdx, p = f.idKey, k, q = 0, m = function(b) {
        e.isNotNull(this.parent) ? (k = this.parent.data, e.isNotNull(k) && !f.has(k) && (a.push(k), c.remove(k), i[k[p]] = -1)) : b.stop = !0
      };
      f._reidx();
      for(b.reattach();q < h;q++) {
        b.getNode(a[q]).traverse({up:!0, fn:m})
      }
      b.reattach(a);
      b.sortList(a);
      this.grid.event.trigger("onCollapserTreeChange", !1, !0)
    }else {
      b.reattach(a), this.grid.event.trigger("onCollapserTreeChange", !1, !0), this._filter(a, c)
    }
  };
  a._filter = function(a, b) {
    a.length = 0;
    this._tree.root.traverseChildren({fn:function() {
      this._shown ? a.push(this.data) : b.push(this.data)
    }})
  };
  a.toggleById = function(a) {
    if(e.isNotNull(a)) {
      return this.toggleCollapse(this._tree.getNode(this.grid.dataMgr.getById(a)))
    }
  };
  a.toggle = function(a) {
    return this.toggleById(this.grid.dataMgr.getId(a))
  };
  a.toggleByIdx = function(a) {
    return this.toggleById(this.grid.dataMgr.getIdByIdx(a))
  };
  a._clickHeaderValid = function(a) {
    if(e.hasTagAndClass(a.target, "DIV", this._options.classCollapser)) {
      return!1
    }
  };
  a._dblclickCanvas = function(a, b) {
    e.hasTagAndClass(a.target, "DIV", this._options.classCollapser) || this.toggleCollapse(this._tree.getNode(b.getDatarow()))
  };
  a._keydownColSel = function(a, b, g) {
    a.preventDefault();
    if(e.isNotNullAnd(b, g)) {
      var a = this._tree, g = a.getNode(g.getDatarow())._collapsed, f = this.grid.dataMgr.datalist, h, i;
      for(i in b) {
        b.hasOwnProperty(i) && i !== "length" && (h = a.getNode(f[i]), g ? this.expand(h) : this.collapse(h))
      }
      this._filterRefresh()
    }
  };
  a._makeTree = function() {
    var a = this._tree, b, e;
    a.__init();
    e = a.map;
    a = a.root;
    if(this._options.beginCollapsed) {
      for(b in e) {
        if(e.hasOwnProperty(b)) {
          e[b]._collapsed = !0, e[b]._shown = !1
        }
      }
      e = a.children;
      var f = e.length;
      for(b = 0;b < f;b++) {
        e[b]._shown = !0
      }
      a._collapsed = !0
    }else {
      for(b in e) {
        if(e.hasOwnProperty(b)) {
          e[b]._collapsed = !1, e[b]._shown = !0
        }
      }
      a._collapsed = !1
    }
    this.grid.event.trigger("onCollapserTreeChange", !1, !0)
  };
  a._onRenderHeader = function(a) {
    a.push("<div id='" + this.mid + "h' onmousedown='JGM.m.Collapser." + this.mid + ".toggleMaster();' class='" + this._options.classCollapser + " " + this._options.classMasterCollapser);
    this._tree.root._collapsed ? a.push(" " + this._options.classCollapsed) : a.push(" " + this._options.classExpanded);
    a.push("'></div>")
  };
  a._onRenderCell = function(a, b, f, h, j) {
    a = this._tree.getNode(f);
    if(e.isNull(a)) {
      return null
    }
    f = this.grid.dataMgr.getId(f);
    b = this._options;
    j.push("<div class='" + b.classIndent + "' style='width:" + b.indentSize * a.getLevel() + "px;'></div><div ");
    a.isLeaf() ? j.push("class='" + b.classCollapser) : (j.push('onmousedown="JGM.m.Collapser.' + this.mid + ".toggleById('" + f + "');\" class='" + b.classCollapser), a._collapsed ? j.push(" " + b.classCollapsed) : j.push(" " + b.classExpanded));
    j.push("'></div>")
  };
  a.getLevel = function(a) {
    a = this._tree.getNode(a);
    return e.isNull(a) ? null : a.getLevel()
  };
  a.collapse = function(a, b) {
    if(!(a._collapsed === !0 || a.isLeaf())) {
      a._collapsed = !0;
      a.traverseChildren({fn:function(a) {
        this._shown = !1;
        this._collapsed && (a.propagate = !1)
      }});
      var e = this._getCollapser(a.data);
      e.length > 0 && this._setClass(e, !0);
      if(!b && a.parent === this._tree.root && this._tree.root._collapsed === !1) {
        this._setClass(this._master, this._tree.root._collapsed = !0)
      }
    }
  };
  a.expand = function(a, b) {
    if(!(a._collapsed === !1 || a.isLeaf())) {
      a._collapsed = !1;
      a.traverseChildren({fn:function(a) {
        this._shown = !0;
        this._collapsed && (a.propagate = !1)
      }});
      var e = this._getCollapser(a.data), f = this._tree;
      e.length > 0 && this._setClass(e, !1);
      if(!b && a.parent === f.root) {
        for(var e = f.root.children, h = e.length, i = 0;i < h;i++) {
          if(e[i]._collapsed) {
            return
          }
        }
        this._setClass(this._master, f.root._collapsed = !1)
      }
    }
  };
  a._setClass = function(a, b) {
    if(!e.isNull(a)) {
      var f = this._options;
      b ? a.addClass(f.classCollapsed).removeClass(f.classExpanded) : a.addClass(f.classExpanded).removeClass(f.classCollapsed)
    }
  };
  a.toggleMaster = function() {
    var a = this._tree.root, b = a.children, e = b.length, f = 0;
    if(a._collapsed) {
      for(;f < e;f++) {
        this.expand(b[f], !0)
      }
      this._setClass(this._master, a._collapsed = !1)
    }else {
      for(;f < e;f++) {
        this.collapse(b[f], !0)
      }
      this._setClass(this._master, a._collapsed = !0)
    }
    this._filterRefresh()
  };
  a.toggleCollapse = function(a) {
    a = a._collapsed ? this.expand(a) : this.collapse(a);
    this._filterRefresh();
    return a
  };
  a._onCheckChange = function(a, b) {
    var f = this._tree.getNode(a), l = this.checkMgr, j = [], i;
    b ? (f.traverseChildren({fn:function(a) {
      l.isChecked(this.data) ? a.propagate = !1 : (l._add(this.data), e.isNotNull(i = l.getCheckbox(this.data)) && j.push(i))
    }}), f.traverseParent({up:!0, fn:function(a) {
      e.isNull(this.data) || l.isChecked(this.data) ? a.stop = !0 : (l._add(this.data), e.isNotNull(i = l.getCheckbox(this.data)) && j.push(i))
    }}), h.CheckManager._check($(j)), l._updateMaster()) : (f.traverseChildren({fn:function(a) {
      l.isChecked(this.data) ? (l._remove(this.data), e.isNotNull(i = l.getCheckbox(this.data)) && j.push(i)) : a.propagate = !1
    }}), f.traverseParent({up:!0, fn:function(a) {
      if(e.isNull(this.data) || !l.isChecked(this.data)) {
        a.stop = !0
      }else {
        for(var b = 0, c = this.children, d = c.length;b < d;b++) {
          if(l.isChecked(c[b].data)) {
            a.stop = !0;
            return
          }
        }
        l._remove(this.data);
        e.isNotNull(i = l.getCheckbox(this.data)) && j.push(i)
      }
    }}), h.CheckManager._uncheck($(j)))
  };
  a._filterRefresh = function() {
    this._filter(this.grid.dataMgr.datalist, this.grid.dataMgr.failed);
    this.grid.dataMgr._finish()
  };
  a._getCollapser = function(a) {
    if(e.isNull(a)) {
      return $([])
    }
    a = e.findFirstByTagAndClass(this.grid.view.getCell(this.grid.dataMgr.getIdx(a), this.grid.colDefMgr.getIdxByKey(this.key)), "DIV", this._options.classCollapser);
    return a === void 0 ? $([]) : $(a)
  };
  a._getMaster = function() {
    this._master = $(document.getElementById(this.mid + "h"))
  }
})();
console && console.log && console.log('reading javascript source "ColumnGroup.js"...');
jx.grid.ColumnGroup = {};
(function() {
  function f(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    this.grid.colGroup = this;
    this._options = h._extend({key:void 0, padColKeys:[], sumColKeys:[], prefix:"합계: ", Collapser:{indentSize:0}}, a.options);
    this._options.Collapser.key = this._options.key;
    this._parentMap = {};
    this.__init()
  }
  var h = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.getObjectByName("jx.grid.Collapser");
  goog.exportSymbol("jx.grid.ColumnGroup", f);
  f.getInstance = function(a) {
    return new f(a)
  };
  var b = f.prototype;
  b.__init = function() {
    var a = this.grid, b = a.dataMgr, c = this._options;
    this.bindEvents();
    a = this.collapser = h.create("Collapser", {grid:a, options:c.Collapser});
    delete c.Collapser;
    this._processData(b.all);
    a.__init();
    b.refresh()
  };
  b.bindEvents = function() {
    var a;
    a = {onBeforeSetDatalist:this._removeAll, "onAfterSetDatalist onAddDatalist":this._processData, onAddDatarow:this._onAddDatarow, onUpdateDatarow:this._onUpdateDatarow, onUpdateDatalist:this._onUpdateDatalist, onRemoveDatarow:this._onRemoveDatarow, onRemoveDatalist:this._onRemoveDatalist, onDestroy:this._destroy};
    if(this._options.sumColKeys.length !== 0) {
      var b = this.mid, c = this.grid.dataMgr._consts._notReal, e = 0, f, h = this._options.sumColKeys, i = this._options.prefix, p = h.length;
      for(f = function(a, e, f, g, h) {
        f[c] === b && h.push(i)
      };e < p;e++) {
        a["onRenderCell_" + h[e] + "_prepend"] = f
      }
      a.onCollapserTreeChange = this._onCollapserTreeChange
    }
    this.grid.event.bind(a, this)
  };
  b._destroy = function() {
    h._destroy(this, {name:"ColumnGroup", path:"colGroup", property:"collapser", map:"_parentMap _options"})
  };
  b._processData = function(a) {
    for(var b = a.length, c = this._options.key, f = this._options.padColKeys, h = this.grid.dataMgr, j = h._consts._notReal, i = h.idKey, p = this.collapser, k = p._tree._options.nodeKey, q = p._tree._options.parentKey, m = [], o = 0;o < b;o++) {
      this._addData(a[o], c, i, j, k, q, f, m)
    }
    m.length !== 0 && (h.all.pushList(m), h.makeCompositeKeyList(m, !0), h.addListToIdMap(m), e.isNotNull(p) && p._onAddDatalist(m));
    return m
  };
  b._addData = function(a, b, c, e, f, h, i, p) {
    var k = a[b], q = this._parentMap;
    q.hasOwnProperty(k) || (b = this._makeParent(a, b, c, k, e, f, i), p.push(b), q[k] = b);
    a[f] = a[c];
    a[h] = this.mid + k
  };
  b._makeParent = function(a, b, c, e, f, h, i) {
    var p = {}, k = 0, q = i.length;
    p[f] = this.mid;
    p[h] = this.mid + e;
    p[b] = e;
    for(p[c] = (this.grid.colDefMgr.getByKey(b).name || b) + ": " + e;k < q;k++) {
      p[i[k]] = a[i[k]]
    }
    return p
  };
  b._isParent = function(a) {
    return a[this.grid.dataMgr._consts._notReal] === this.mid
  };
  b._removeAll = function() {
    this._parentMap = {}
  };
  b._onAddDatarow = function(a) {
    var b = [], c = this._options, e = this.grid.dataMgr, f = this.collapser, h = f._tree._options;
    this._addData(a, c.key, e.idKey, e._consts._notReal, h.nodeKey, h.parentKey, c.padColKeys, b);
    b.length !== 0 && (a = b[0], e.all.push(a), e.makeCompositeKey(a, !0), e.addToIdMap(a), f._onAddDatarow(a))
  };
  b._onUpdateDatarow = function(a, b, c) {
    if(b.hasOwnProperty(this._options.key)) {
      var e = this._options.key, b = b[e], c = c[e], f = this.mid, e = this.collapser, h = e._tree, i = h._options.parentKey, p = {}, k = {}, q = this._parentMap;
      q.hasOwnProperty(b) || this._onAddDatarow(a);
      p[i] = f + b;
      k[i] = f + c;
      e._onUpdateDatarow(a, p, k);
      a = h.getNode(q[c]);
      a.children.length === 0 && (this.grid.dataMgr.all.remove(a.data), delete q[c], e._onRemoveDatarow(a.data))
    }
  };
  b._onUpdateDatalist = function(a, b, c) {
    var e = this._options.key, f = this.mid, h = this.collapser, i = h._tree, p = i._options.parentKey, k, q = {};
    k = {};
    for(var m = [], o = [], n = [], s = 0, r = a.length;s < r;s++) {
      k = b[s], k.hasOwnProperty(e) && (q = {}, q[p] = f + k[e], m.push(q), k = {}, k[p] = f + c[s][e], o.push(k), n.push(a[s]))
    }
    if(n.length !== 0) {
      a = this._parentMap;
      b = [];
      this._processData(n);
      h._onUpdateDatalist(n, m, o);
      s = 0;
      for(r = o.length;s < r;s++) {
        m = o[s][p], a.hasOwnProperty(m) && (n = i.getNode(a[m]), n.children.length === 0 && (delete a[m], b.push(n.data)))
      }
      b.length !== 0 && (h._onRemoveDatalist(b), this.grid.dataMgr.all.removeList(b))
    }
  };
  b._onRemoveDatarow = function(a) {
    this._isParent(a) ? delete this._parentMap[a[this._options.key]] : (a = this.collapser._tree.getNode(a).parent, a.children.length === 1 && this.grid.dataMgr.remove(a.data))
  };
  b._onRemoveDatalist = function(a) {
    for(var b = 0, c = a.length;b < c;b++) {
      this._onRemoveDatarow(a[b])
    }
  };
  b._onCollapserTreeChange = function() {
    for(var a = {}, b = this._options.sumColKeys, c = b.length, e = 0, f = this.grid.dataMgr._consts._notReal, h = this.mid, i, p, k;e < c;e++) {
      a[b[e]] = 0
    }
    this.collapser._tree.root.traverseChildren({post:!0, fn:function() {
      i = this.data;
      e = 0;
      if(i[f] === h) {
        for(;e < c;e++) {
          p = b[e], i[p] = a[p], a[p] = 0
        }
      }else {
        if(!i.hasOwnProperty(f)) {
          for(;e < c;e++) {
            if(typeof(k = i[b[e]]) === "string") {
              k = k.toFloat()
            }
            a[b[e]] += isNaN(k) ? 0 : k
          }
        }
      }
    }})
  }
})();
console && console.log && console.log('reading javascript source "DataCreator.js"...');
jx.grid.DataCreator = {};
(function() {
  function f(a) {
    this.mid = a.mid;
    this._ctnr = a.container;
    this.grid = a.grid;
    this.grid.creator = this;
    this._options = h._extend({background:"#dfdfdf", borderThickness:0, border:"solid #D6D6D6", inputBorder:"solid #A7A7A7", inputBorderThickness:1, inputHeight:18, inputMargin:8, nameMargin:2, font:"12px Arial,Helvetica,sans-serif", height:28, padding:3, classCreatorIcon:"creator-icon", creatorIconUrl:this.grid._options.imageUrl + "data-creator-icon.png", creatorIconWidth:13, creatorIconHeight:13, classCreator:"data-creator", classColName:"data-creator-name", inputBorderRadius:3}, a.options);
    this._inputMap = {};
    this.__init()
  }
  var h = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.DataCreator", f);
  f.getInstance = function(a) {
    return new f(a)
  };
  var b = f.prototype;
  b.__init = function() {
    this._creator = $("<div class='" + this._options.classCreator + "'>").appendTo(this._ctnr);
    this.bindEvents()
  };
  b.bindEvents = function() {
    this.grid.event.bind({onRenderModules:this._onRenderModules, onCreateCss:this._onCreateCss, onDestroy:this._destroy}, this)
  };
  b._onCreateCss = function() {
    var a = "#" + this.grid.mid + " .", b = this._options, c = [];
    c.push(a + b.classCreator + "{" + h._CONST._cssUnselectable + "float:left;width:100%;padding-left:8px;background:" + b.background + ";border-top:" + (b.borderThickness + "px " + b.border) + ";font:" + b.font + "}");
    c.push(a + b.classCreator + " button{float:left;margin:" + b.padding + "px " + b.padding + "px 0 0;height:" + (b.height - 2 * b.padding) + "px}");
    c.push(a + b.classCreator + " input{float:left;padding:0;margin-top:" + (b.height - b.inputHeight - 2 * b.inputBorderThickness) / 2 + "px;height:" + b.inputHeight + "px;border:" + b.inputBorderThickness + "px " + b.inputBorder + ";border-radius:" + b.inputBorderRadius + "px;-moz-border-radius:" + b.inputBorderRadius + "px}");
    c.push(a + b.classCol + "{float:left;overflow:hidden;white-space:nowrap;line-height:" + b.height + "px;margin-right:" + b.inputMargin + "px}");
    c.push(a + b.classColName + "{float:left;margin-right:" + b.nameMargin + "px}");
    c.push(a + b.classCreatorIcon + "{background:url(" + b.creatorIconUrl + ") no-repeat center;width:" + b.creatorIconWidth + "px;height:" + b.creatorIconHeight + "px}");
    return c.join("")
  };
  b._onRenderModules = function() {
    for(var a = [], b = this.grid.colDefMgr.getAll(), c = b.length, f, h = this._options, j = h.classCol, i = h.classColName, p = this, k = this._creator, q = this._inputMap, m = 0, o = function(a) {
      a.which === e.keyMapKeydown.enter && p._addData()
    };m < c;m++) {
      f = b[m], f.inputOnCreate === !0 && a.push("<div key='" + f.key + "' class='" + j + "'><div class='" + i + "'>" + f.name + "</div><input type='text' value='" + e.ifNull(f.defaultValue, "") + "' style='width:" + f.width + "px'/></div>")
    }
    k[0].innerHTML = a.join("") + "<button type='button' onclick='JGM.m.DataCreator." + this.mid + "._addData()'>등록</button><button type='button' onclick='JGM.m.DataCreator." + this.mid + "._reset()'>초기화</button>";
    for(m = 0;m < c;m++) {
      f = b[m], f.inputOnCreate === !0 && (q[f.key] = k.find("div[key='" + f.key + "'] input").keyup(o))
    }
    e.isNotNull(this.grid.menubar) && (this.grid.menubar.addIcon(h.classCreatorIcon, "데이터 로우를 추가합니다.", h.creatorIconWidth, h.creatorIconHeight, function() {
      k.toggle("fast")
    }), k.hide())
  };
  b._addData = function() {
    var a, b = this._inputMap, c = this.grid.colDefMgr, e = {}, f = c.getAll(), h = f.length, i = 0;
    for(a in b) {
      b.hasOwnProperty(a) && c.getByKey(a)
    }
    for(;i < h;i++) {
      c = f[i], a = c.key, b.hasOwnProperty(a) ? e[a] = b[a][0].value : c.defaultValue !== void 0 && (e[a] = c.defaultValue)
    }
    this.grid.event.trigger("onAfterDataCreate", [e], !0);
    this.grid.dataMgr.add(e, {isNew:!0})
  };
  b._reset = function() {
    var a, b = this.grid.colDefMgr, c, e = this._inputMap;
    for(a in e) {
      if(e.hasOwnProperty(a) && (c = b.getByKey(a), c.defaultValue !== void 0)) {
        e[a][0].value = c.defaultValue
      }
    }
  };
  b._destroy = function() {
    var a, b = this._inputMap;
    for(a in b) {
      b.hasOwnProperty(a) && h._delete$(b, a)
    }
    h._destroy(this, {name:"DataCreator", path:"creator", $:"_creator", map:"_inputMap _options"})
  }
})();
console && console.log && console.log('reading javascript source "SearchManager.js"...');
jx.grid.SearchManager = {};
(function() {
  function f(a) {
    this.mid = a.mid;
    this._ctnr = a.container;
    this.grid = a.grid;
    this.grid.search = this;
    this._options = h._extend({background:"#f0f0f0", borderThickness:1, border:"solid #d6d6d6", inputBorder:"1px solid #A7A7A7", inputPadding:0, searchbarAlign:"center", searchbarMargin:3, searchbarWidth:"99%", searchbarHeight:20, tagsHeight:26, tagsPadding:2, tagsBorderRadius:3, advButtonColor:"#123272", advButtonFont:"bold 12px Arial,Helvetica,sans-serif", advButtonPadding:5, advButtonBg:"", advButtonBgHover:"url(" + this.grid._options.imageUrl + "more-options-bg-hover.png) repeat-x scroll center", 
    advButtonBgActive:"url(" + this.grid._options.imageUrl + "more-options-bg-active.png) repeat-x scroll center", advButtonBgOpened:"url(" + this.grid._options.imageUrl + "more-options-bg-opened.png) repeat-x scroll center", advButtonBorderThickness:1, advButtonBorder:"solid transparent", advButtonBorderHover:"solid #a4a4a4", advButtonBorderActive:"solid #c5c5c5", advButtonBorderOpened:"solid #bfbfbf", advButtonIconWidth:9, advButtonIconMargin:2, advButtonIconUrl:this.grid._options.imageUrl + "more-options.png", 
    advButtonIconCloseUrl:this.grid._options.imageUrl + "more-options-close.png", tagPadding:2, tagBorder:"solid #93979D", tagBorderThickness:1, tagFont:"bold 13px Arial", tagColor:"#282853", tagBackground:"url(" + this.grid._options.imageUrl + "tag-background.png) repeat-x scroll center", tagRemoveIconWidth:12, tagRemoveIconUrl:this.grid._options.imageUrl + "tag-close.png", tagRemoveIconHoverUrl:this.grid._options.imageUrl + "tag-close-hover.png", advFont:"11px Arial", advInputWidth:30, classMask:"search-mask", 
    classSearchbar:"search-bar", classAdvButtonName:"more-option-name", classAdvButton:"more-options", classAdvButtonIcon:"more-icon", classClearTags:"clear-tags", classTagbar:"search-tags", classTag:"search-tag", classTagName:"search-tag-name", classRemoveTag:"search-tag-remove", classAdvanced:"search-advanced", classOptionCol:"search-option-col", classOption:"search-option", classSearchIcon:"search-icon", searchIconUrl:this.grid._options.imageUrl + "search-icon.png", searchIconWidth:15, searchIconHeight:15, 
    keyMap:void 0, tagRemoveIconActiveUrl:this.grid._options.imageUrl + "tag-close-active.png", syncMaster:!1}, a.options);
    this._filterMap = {};
    this._tagMap = {};
    this._nameMap = {};
    this._codeMap = {};
    this._global = [];
    this._globalMap = {};
    this._keyToName = {};
    this.__init()
  }
  var h = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.SearchManager", f);
  var b = f.prototype;
  b._onCreateCss = function() {
    var a = "#" + this.grid.mid + " .", b = this._options, c = b.borderThickness + "px " + b.border, d = "border-radius:" + b.tagsBorderRadius + "px;-moz-border-radius:" + b.tagsBorderRadius + "px", e = b.advButtonBorderThickness + "px " + b.advButtonBorder, f = b.advButtonBorderThickness + "px " + b.advButtonBorderHover, g = b.advButtonBorderThickness + "px " + b.advButtonBorderActive, i = b.advButtonBorderThickness + "px " + b.advButtonBorderOpened, j = b.tagsHeight - 2 * b.tagsPadding, k = j - 
    2 * b.advButtonBorderThickness, l = j - 2 * b.tagBorderThickness, m = a + b.classMask, o = a + b.classSearchbar, n = a + b.classAdvButton, q = a + b.classRemoveTag, p = [];
    p.push(m + "{" + h._CONST._cssUnselectable + "overflow:hidden;width:100%;background:" + b.background + "}");
    p.push(m + " button{margin:0;padding:0 3px}");
    p.push(m + " input{border:" + b.inputBorder + ";padding:" + b.inputPadding + "}");
    p.push(o + "{text-align:" + b.searchbarAlign + ";border-bottom:" + c + "}");
    p.push(o + " input{width:" + b.searchbarWidth + ";margin:" + b.searchbarMargin + "px 0;height:" + b.searchbarHeight + "px;" + d + "}");
    p.push(a + b.classTagbar + "{cursor:default;height:" + (b.tagsHeight - b.tagsPadding) + "px;padding:" + b.tagsPadding + "px 0 0 " + b.tagsPadding + "px;border-bottom:" + c + "}");
    p.push(n + "{float:left;margin-right:" + b.tagsPadding + "px;background:" + b.advButtonBg + ";border:" + e + ";padding:0 " + b.advButtonPadding + "px;" + d + "}");
    p.push(n + ":hover{background:" + b.advButtonBgHover + ";border:" + f + "}");
    p.push(n + ".opened{background:" + b.advButtonBgOpened + ";border:" + i + "}");
    p.push(n + ":active{background:" + b.advButtonBgActive + ";border:" + g + "}");
    p.push(a + b.classAdvButtonName + "{float:left;color:" + b.advButtonColor + ";font:" + b.advButtonFont + ";line-height:" + k + "px}");
    p.push(a + b.classAdvButtonIcon + "{float:left;height:" + k + "px;margin-left:" + b.advButtonIconMargin + "px;background:url(" + b.advButtonIconUrl + ") no-repeat center;width:" + b.advButtonIconWidth + "px}");
    p.push(n + ".opened ." + b.classAdvButtonIcon + "{background:url(" + b.advButtonIconCloseUrl + ") no-repeat center}");
    p.push(a + b.classTag + "{float:left;border:" + b.tagBorderThickness + "px " + b.tagBorder + ";margin:0 " + b.tagsPadding + "px " + b.tagsPadding + "px 0;padding:0 " + b.tagPadding + "px;background:" + b.tagBackground + ";" + d + "}");
    p.push(a + b.classTagName + "{float:left;color:" + b.tagColor + ";font:" + b.tagFont + ";line-height:" + l + "px}");
    p.push(q + "{float:left;margin-left:" + b.tagPadding + "px;background:url(" + b.tagRemoveIconUrl + ") no-repeat center;width:" + b.tagRemoveIconWidth + "px;height:" + l + "px}");
    p.push(q + ":hover{background:url(" + b.tagRemoveIconHoverUrl + ") no-repeat center}");
    p.push(q + ":active{background:url(" + b.tagRemoveIconActiveUrl + ") no-repeat center}");
    p.push(a + b.classClearTags + "{height:" + j + "px}");
    p.push(a + b.classAdvanced + "{cursor:default;font:" + b.advFont + ";border-bottom:" + c + "}");
    p.push(a + b.classOptionCol + "{display:inline-block;vertical-align:top}");
    p.push(a + b.classOptionCol + " input{width:" + b.advInputWidth + "px;margin-right:2px;" + d + "}");
    p.push(a + b.classSearchIcon + "{background:url(" + b.searchIconUrl + ") no-repeat center;width:" + b.searchIconWidth + "px;height:" + b.searchIconHeight + "px}");
    return p.join("")
  };
  f.getInstance = function(a) {
    return new f(a)
  };
  b.__init = function() {
    var a = this._options, b = this, c, d, f;
    c = this._mask = $("<div class='" + a.classMask + "'>").prependTo(this._ctnr);
    this._search = $("<div class='" + a.classSearchbar + "'><input type='text'/></div>").appendTo(c);
    this._masterInput = this._search.children(":eq(0)").keyup(function(a) {
      a.which === e.keyMapKeydown.enter ? b._parse($(this)[0].value) : a.which === e.keyMapKeydown.esc && b._removeAllOptions()
    });
    d = this._hasFilter = this.grid.colDefMgr.get().some(function(a) {
      return e.isNotNull(a.filter)
    });
    f = this._tag = $("<div class='" + a.classTagbar + "'>" + (d ? "<div class='" + a.classAdvButton + "'><div class='" + a.classAdvButtonName + "'>추가 옵션</div><div class='" + a.classAdvButtonIcon + "'></div></div>" : "") + "<button type='button' class='" + a.classClearTags + "' onclick='JGM.m.SearchManager." + this.mid + "._removeAllOptions()'>모든 필터 제거</button></div>").appendTo(c);
    if(d) {
      var g = this._adv = $("<div class='" + a.classAdvanced + "'>").appendTo(c).hide().keyup(function(a) {
        if(a.which === e.keyMapKeydown.enter) {
          var c = a.target.getAttribute("key");
          b._registerOption(c, b._keyToName[c], a.target.getAttribute("tag"), a.target.value);
          a.target.value = ""
        }
      });
      this._advButton = f.children(":eq(0)").click(function() {
        $(this).toggleClass("opened");
        g.toggle("fast")
      })
    }
    this.grid.event.bind({onRenderModules:this._onRenderModules, onCreateCss:this._onCreateCss, onFilter:this._onFilter, onDestroy:this._destroy, onAfterRenderModules:this._onAfterRenderModules}, this)
  };
  b._onRenderModules = function() {
    var a = [], b = this._options, c = this._mask;
    if(this._hasFilter) {
      for(var d = this.grid.colDefMgr.get(), f = d.length, g = b.keyMap, h = this._nameMap, i = this._keyToName, j, k, l, m = 0;m < f;m++) {
        if(j = d[m], e.isNotNull(j.filter)) {
          l = j.key, k = e.isNull(g) || !g.hasOwnProperty(l) ? j.name || l : g[l], h[k] = l, i[l] = k, a.push("<div class='" + b.classOptionCol + "'>"), this._registerFilter(l, k, j.name, j.filter, a), a.push("</div>")
        }
      }
      this._adv[0].innerHTML = a.join("")
    }
    e.isNotNull(this.grid.menubar) && (this.grid.menubar.addIcon(b.classSearchIcon, "데이터 검색을 합니다.", b.searchIconWidth, b.searchIconHeight, function() {
      c.toggle("fast")
    }), c.hide())
  };
  b._onAfterRenderModules = function() {
    var a = this._filterMap, b, c, d, e, f = this._adv;
    for(c in a) {
      if(a.hasOwnProperty(c)) {
        for(d in b = a[c], b) {
          if(b.hasOwnProperty(d) && d !== "andor" && d !== "parser" && d !== "validator") {
            (e = b[d]).input = f.find("#" + c + e.option.name)
          }
        }
      }
    }
  };
  b._destroy = function() {
    var a, b, c, d = this._globalMap, e = this._filterMap, f = this._tagMap;
    for(a in d) {
      d.hasOwnProperty(a) && (h._delete$(d[a], "tag"), h._deleteArray(d[a], "list"))
    }
    for(a in e) {
      if(e.hasOwnProperty(a)) {
        d = e[a];
        for(b in d) {
          d.hasOwnProperty(b) && (b !== "andor" && b !== "parser" && b !== "validator" && h._delete$(d[b], "input"), h._deleteMap(d, b))
        }
        h._deleteMap(e, a)
      }
    }
    for(a in f) {
      if(f.hasOwnProperty(a)) {
        e = f[a];
        for(b in e) {
          if(e.hasOwnProperty(b)) {
            d = e[b];
            for(c in d) {
              d.hasOwnProperty(c) && (h._delete$(d[c], "tag"), h._deleteMap(d, c))
            }
            h._deleteMap(e, b)
          }
        }
        h._deleteMap(f, a)
      }
    }
    h._destroy(this, {name:"SearchManager", path:"search", $:"_masterInput _advButton _mask _search _tag _adv", property:"_ctnr _hasFilter", array:"_global", map:"_globalMap _filterMap _tagMap _codeMap _nameMap _options _keyToName"})
  };
  b._onFilter = function(a, b) {
    if(!(this._global.length === 0 && e.isEmptyObj(this._codeMap))) {
      var c, d = this._tagMap, f, g, h = a.length, i, j = this._filterMap, k = this.constructor.CONST.and, l, m = this._global.length > 0, o, n;
      if(m) {
        var q = this._global, p;
        i = this.grid.colDefMgr.get().filter(function(a) {
          return!a.noSearch
        });
        var r = i.length, s = [];
        for(o = 0;o < r;o++) {
          s.push(i[o].key)
        }
      }
      o = h - 1;
      a:for(;o >= 0;o--) {
        h = a[o];
        if(m) {
          i = q.slice();
          c = 0;
          for(;i.length !== 0 && c < r;c++) {
            if(!e.isNull(p = h[s[c]])) {
              e.isString(p) || (p = p.toString());
              for(n = i.length - 1;n >= 0;n--) {
                p.indexOf(i[n]) !== -1 && i.removeAt(n)
              }
            }
          }
          if(i.length !== 0) {
            a.removeAt(o);
            b.push(h);
            continue a
          }
        }
        for(f in d) {
          if(d.hasOwnProperty(f)) {
            if(n = d[f], c = j[f].andor, i = h[f], c === k) {
              for(g in n) {
                if(n.hasOwnProperty(g)) {
                  for(l in c = n[g], c) {
                    if(c.hasOwnProperty(l) && !c[l].fn(i)) {
                      a.removeAt(o);
                      b.push(h);
                      continue a
                    }
                  }
                }
              }
            }else {
              for(g in n) {
                if(n.hasOwnProperty(g)) {
                  for(l in c = n[g], c) {
                    if(c.hasOwnProperty(l) && c[l].fn(i)) {
                      continue a
                    }
                  }
                }
              }
              a.removeAt(o);
              b.push(h);
              continue a
            }
          }
        }
      }
    }
  };
  b._registerFilter = function(a, b, c, d, e) {
    if(!this._filterMap.hasOwnProperty(a)) {
      if(d === "number") {
        d = this.constructor._numberFilter
      }else {
        if(d === "string") {
          d = this.constructor._stringFilter
        }
      }
      var f, g = d.length, h = 0, i = this.mid, j = this._options.classOption, k, l, m, n;
      k = this._filterMap[a] = {andor:this.constructor.CONST.and};
      l = this._tagMap[a] = {};
      for(e.push("<table>");h < g;h++) {
        f = d[h], n = f.name, n === "parser" ? k.parser = f.fn : n === "validator" ? k.validator = f.fn : (m = f.tag, k[m] = {option:f}, l[m] = {}, e.push("<tr title='" + f.comment(c, "입력값") + "'><td><div class='" + j + "'>" + c + " " + m + "</td><td><input id='" + a + n + "' key='" + a + "' tag='" + m + "' type='text'><button type='button' onclick=\"JGM.m.SearchManager." + i + "._registerOption('" + a + "','" + b + "','" + m + "',this.previousSibling.value)\">등록</button></div></td></tr>"))
      }
      e.push("</table>")
    }
  };
  b._parse = function(a) {
    for(var b, c, d, f, g = e.split(a), h = g.length, i = 2, j = !1, k = [], l = this._nameMap, m = this._filterMap, n = 0;n < h;n++) {
      if(a = g[n], a !== "") {
        switch(i) {
          case 0:
            m[b].hasOwnProperty(a) && (d = a, i = 1);
            break;
          case 1:
            f = a;
            i = 2;
            break;
          case 2:
            a.charAt(0) === "@" ? (a = a.substring(1), l.hasOwnProperty(a) ? (e.isNotNullAnd(b, c, d, f) && this._registerOption(b, c, d, f, !0) && (j = !0), b = l[a], c = a, f = d = void 0, i = 0) : e.isNull(b) ? k.push(a) : f += " " + a) : e.isNull(b) ? k.push(a) : f += " " + a
        }
      }
    }
    e.isNotNullAnd(b, c, d, f) && this._registerOption(b, c, d, f, !0) && (j = !0);
    this._registerGlobal(k) && (j = !0);
    this._syncMasterInput();
    j && this.grid.dataMgr.refresh()
  };
  b._syncMasterInput = function() {
    if(this._options.syncMaster) {
      var a = this._global.join(" "), b = this._tagMap, c = this._keyToName, d, e, f, g, h;
      for(d in b) {
        if(b.hasOwnProperty(d)) {
          for(e in g = b[d], g) {
            if(g.hasOwnProperty(e)) {
              for(f in h = g[e], h) {
                h.hasOwnProperty(f) && (a += " @" + c[d] + " " + e + " " + f)
              }
            }
          }
        }
      }
      this._masterInput[0].value = $.trim(a)
    }else {
      this._masterInput[0].value = ""
    }
  };
  b._registerGlobal = function(a) {
    for(var b = 0, c = a.length, d = this._global;b < c;b++) {
      d.indexOf(a[b]) !== -1 ? a.removeAt(b--) : d.push(a[b])
    }
    if(a.length === 0) {
      return!1
    }
    b = this._options;
    this._globalMap[a[0]] = {tag:$("<div class='" + b.classTag + "' title='" + a.join(", ") + " 를 포함하는'><div class='" + b.classTagName + "'>" + a.join(" ") + "</div><div class='" + b.classRemoveTag + "' title='필터 제거' onclick=\"JGM.m.SearchManager." + this.mid + "._removeGlobal('" + a[0] + "')\"></div></div>").appendTo(this._tag), list:a};
    return!0
  };
  b._removeGlobal = function(a) {
    var b = this._globalMap;
    if(b.hasOwnProperty(a)) {
      var c = b[a];
      c.tag.remove();
      delete c.tag;
      this._global.removeList(c.list);
      c.list.length = 0;
      delete c.list;
      delete b[a];
      this._syncMasterInput();
      this.grid.dataMgr.refresh()
    }
  };
  b._registerOption = function(a, b, c, d, g) {
    var h = this._filterMap, i, j = this._codeMap;
    if(h.hasOwnProperty(a) && (i = h[a]).hasOwnProperty(c)) {
      h = i[c];
      if(e.isNull(d)) {
        var k = h.input, d = $.trim(k.val());
        k.val("")
      }else {
        d = $.trim(d)
      }
      if(d.length === 0) {
        return!1
      }
      e.isNotNull(i.parser) && (d = i.parser(d));
      if(j.hasOwnProperty(a + "@T" + c + "@B" + d)) {
        return!1
      }
      if(e.isNotNull(i.validator) && !i.validator(d)) {
        return!1
      }
      h = h.option;
      i = i.andor
    }else {
      return!1
    }
    k = this._tagMap[a];
    if(k[c].hasOwnProperty(d)) {
      return!1
    }
    var l, m, n, o, q = this._filterMap[a], p;
    for(n in k) {
      if(k.hasOwnProperty(n)) {
        for(o in l = k[n], l) {
          l.hasOwnProperty(o) && (p = l[o], m = e.isNotNull(q.parser) ? q.parser(o) : o, f._checkDisable(h.type, p.option.type, i, d, m) && (delete j[a + "@T" + p.option.tag + "@B" + m], p.tag.remove(), delete p.tag, delete p.option, delete p.fn, delete l[o]))
        }
      }
    }
    j[a + "@T" + c + "@B" + d] = !0;
    this._createTag(a, h, d, b);
    g || (this._syncMasterInput(), this.grid.dataMgr.refresh());
    return!0
  };
  b._removeOption = function(a, b, c) {
    var d = this._tagMap, e, f;
    if(d.hasOwnProperty(a) && (e = d[a]).hasOwnProperty(b) && (f = e[b]).hasOwnProperty(c)) {
      d = f[c], d.tag.remove(), delete d.tag, delete d.option, delete d.fn, delete f[c], delete this._codeMap[a + "@T" + b + "@B" + c], this._syncMasterInput(), this.grid.dataMgr.refresh()
    }
  };
  b._removeAllOptions = function() {
    var a, b = this._globalMap, c, d = this._tagMap, e, f, g;
    for(a in b) {
      if(b.hasOwnProperty(a)) {
        c = b[a], c.tag.remove(), delete c.tag, c.list.length = 0, delete c.list, delete b[a]
      }
    }
    this._global.length = 0;
    for(a in d) {
      if(d.hasOwnProperty(a)) {
        for(e in b = d[a], b) {
          if(b.hasOwnProperty(e)) {
            for(f in c = b[e], c) {
              c.hasOwnProperty(f) && (g = c[f], g.tag.remove(), delete g.tag, delete g.option, delete g.fn, delete c[f])
            }
          }
        }
      }
    }
    this._codeMap = {};
    this._syncMasterInput();
    this.grid.dataMgr.refresh()
  };
  b._createTag = function(a, b, c, d) {
    var e = this._options;
    return this._tagMap[a][b.tag][c] = {tag:$("<div class='" + e.classTag + "' title='" + b.comment(d, c) + "'><div class='" + e.classTagName + "'>@" + d + " " + b.tag + " " + c + "</div><div class='" + e.classRemoveTag + "' title='필터 제거' onclick=\"JGM.m.SearchManager." + this.mid + "._removeOption('" + a + "','" + b.tag + "','" + c + "')\"></div></div>").appendTo(this._tag), option:b, fn:b.fn(c)}
  };
  var a = f.CONST = {lt:0, lte:1, eq:2, neq:3, gt:4, gte:5, and:6, or:7, T:8, F:9}, b = a.lt, d = a.gt, c = a.eq, g = a.neq, l = a.and, j = a.or, i = a.T, a = a.F, p = f._comparator = {}, k = p[b] = function(a, b) {
    return a <= b
  }, q = p[d] = function(a, b) {
    return a >= b
  }, m = p[c] = function(a, b) {
    return a === b
  }, i = p[i] = function() {
    return!0
  }, o = f._disableMap = {}, n = o[b] = {}, s = o[d] = {}, r = o[c] = {}, o = o[g] = {};
  p[a] = function() {
    return!1
  };
  n[b] = {};
  n[b][l] = i;
  n[b][j] = i;
  n[d] = {};
  n[d][l] = k;
  n[d][j] = q;
  n[c] = {};
  n[c][l] = i;
  n[c][j] = q;
  n[g] = {};
  n[g][l] = k;
  n[g][j] = i;
  s[b] = {};
  s[b][l] = q;
  s[b][j] = k;
  s[d] = {};
  s[d][l] = i;
  s[d][j] = i;
  s[c] = {};
  s[c][l] = i;
  s[c][j] = k;
  s[g] = {};
  s[g][l] = q;
  s[g][j] = i;
  r[b] = {};
  r[b][l] = i;
  r[b][j] = k;
  r[d] = {};
  r[d][l] = i;
  r[d][j] = q;
  r[c] = {};
  r[c][l] = i;
  r[c][j] = m;
  r[g] = {};
  r[g][l] = i;
  r[g][j] = i;
  o[b] = {};
  o[b][l] = q;
  o[b][j] = i;
  o[d] = {};
  o[d][l] = k;
  o[d][j] = i;
  o[c] = {};
  o[c][l] = i;
  o[c][j] = i;
  o[g] = {};
  o[g][l] = m;
  o[g][j] = i;
  f._checkDisable = function(a, b, c, d, e) {
    try {
      return this._disableMap[a][b][c](d, e)
    }catch(f) {
      return!1
    }
  };
  f._numberFilter = [{name:"gt", tag:">", type:d, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 큰"
  }, fn:function(a) {
    e.isString(a) && (a = a.toFloat());
    return function(b) {
      return b > a
    }
  }}, {name:"gte", tag:">=", type:d, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 크거나 같은"
  }, fn:function(a) {
    e.isString(a) && (a = a.toFloat());
    return function(b) {
      return b >= a
    }
  }}, {name:"lt", tag:"<", type:b, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 작은"
  }, fn:function(a) {
    e.isString(a) && (a = a.toFloat());
    return function(b) {
      return b < a
    }
  }}, {name:"lte", tag:"<=", type:b, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 작거나 같은"
  }, fn:function(a) {
    e.isString(a) && (a = a.toFloat());
    return function(b) {
      return b <= a
    }
  }}, {name:"eq", tag:"=", type:c, comment:function(a, b) {
    return a + " 이(가) " + b + "인"
  }, fn:function(a) {
    e.isString(a) && (a = a.toFloat());
    return function(b) {
      return b === a
    }
  }}, {name:"neq", tag:"!=", type:g, comment:function(a, b) {
    return a + " 이(가) " + b + "이(가) 아닌"
  }, fn:function(a) {
    e.isString(a) && (a = a.toFloat());
    return function(b) {
      return b !== a
    }
  }}, {name:"contains", tag:"*=", comment:function(a, b) {
    return a + " 이(가) 숫자 " + b + "를 포함하는"
  }, fn:function(a) {
    a = e.isNumber(a) ? a.toString() : $.trim(a);
    return function(b) {
      return b.toString().indexOf(a) !== -1
    }
  }}, {name:"parser", fn:function(a) {
    return a.toFloat()
  }}, {name:"validator", fn:function(a) {
    return!isNaN(a)
  }}];
  f._stringFilter = [{name:"to", tag:"<=", type:b, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 사전에서 이전인"
  }, fn:function(a) {
    a = $.trim(a).toLowerCase();
    return function(b) {
      return b.toLowerCase() <= a
    }
  }}, {name:"from", tag:">=", type:d, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 사전에서 이후인"
  }, fn:function(a) {
    a = $.trim(a).toLowerCase();
    return function(b) {
      return b.toLowerCase() >= a
    }
  }}, {name:"equals", tag:"=", type:c, comment:function(a, b) {
    return a + " 이(가) " + b + "와(과) 같은"
  }, fn:function(a) {
    a = $.trim(a).toLowerCase();
    return function(b) {
      return b.toLowerCase() === a
    }
  }}, {name:"notEquals", tag:"!=", type:g, comment:function(a, b) {
    return a + " 이(가) " + b + "이(가) 아닌"
  }, fn:function(a) {
    a = $.trim(a).toLowerCase();
    return function(b) {
      return b.toLowerCase() !== a
    }
  }}, {name:"startsWith", tag:"^=", comment:function(a, b) {
    return a + " 이(가) " + b + "(으)로 시작하는"
  }, fn:function(a) {
    var a = $.trim(a).toLowerCase(), b = a.length;
    return function(c) {
      return c.substr(0, b).toLowerCase() === a
    }
  }}, {name:"endsWith", tag:"$=", comment:function(a, b) {
    return a + " 이(가) " + b + "(으)로 끝나는"
  }, fn:function(a) {
    var a = $.trim(a).toLowerCase(), b = a.length;
    return function(c) {
      return c.substr(c.length - b, c.length).toLowerCase() === a
    }
  }}, {name:"contains", tag:"*=", comment:function(a, b) {
    return a + " 이(가) " + b + "을(를) 포함하는"
  }, fn:function(a) {
    a = $.trim(a).toLowerCase();
    return function(b) {
      return b.toLowerCase().indexOf(a) !== -1
    }
  }}, {name:"containsAny", tag:"|=", comment:function(a, b) {
    return a + " 이(가) " + b + "들 중 하나 이상을 포함하는"
  }, fn:function(a) {
    var a = a.toLowerCase(), b = e.split(a), c = b.length;
    return c <= 1 ? function(b) {
      return b.toLowerCase().indexOf(a) !== -1
    } : function(a) {
      for(var a = a.toLowerCase(), d = 0;d < c;d++) {
        if(a.indexOf(b[d]) !== -1) {
          return!0
        }
      }
      return!1
    }
  }}, {name:"containsAll", tag:"&=", comment:function(a, b) {
    return a + " 이(가) " + b + "들 모두를 포함하는"
  }, fn:function(a) {
    var a = a.toLowerCase(), b = e.split(a), c = b.length;
    return c <= 1 ? function(b) {
      return b.toLowerCase().indexOf(a) !== -1
    } : function(a) {
      for(var a = a.toLowerCase(), d = 0;d < c;d++) {
        if(a.indexOf(b[d]) === -1) {
          return!1
        }
      }
      return!0
    }
  }}]
})();
})();
