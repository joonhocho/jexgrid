/**
 * JexGrid Build 35
 * Date: Tue Aug 23 10:26:53 KST 2011
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
      for(var c = [], d = 0;d < a;d++) {
        if(d in b) {
          var g = b[d];
          f.call(e, g, d, b) && c.push(g)
        }
      }
      return c
    }
  }
  if(!f.forEach) {
    f.forEach = function(f, e) {
      var b, a = Object(this), c = a.length >>> 0, d = 0;
      if(!f || !f.call) {
        throw new TypeError;
      }
      for(e && (b = e);d < c;) {
        var g = String(d);
        a.hasOwnProperty(g) && (g = a[g], f.call(b, g, d, a));
        d++
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
      for(var c = 0;c < a;c++) {
        if(c in b && !f.call(e, b[c], c, b)) {
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
      for(var c = Array(a), d = 0;d < a;d++) {
        d in b && (c[d] = f.call(e, b[d], d, b))
      }
      return c
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
      for(var c = 0;c < a;c++) {
        if(c in b && f.call(e, b[c], c, b)) {
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
      b = parseInt(this, 10);
      if(b === b) {
        return b
      }
      if((b = this.replace(/[^\d\.\-]/g, "")).length === 0) {
        return NaN
      }
      for(var a, c = 0, d = 0, g = b.length, i = 0, l = !1;i < g;i++) {
        if(a = b.charAt(i), a === ".") {
          if(++c === 2) {
            l = !0;
            break
          }
        }else {
          if(a === "-" && ++d === 2) {
            l = !0;
            break
          }
        }
      }
      return l === !0 && (b = b.replace(/[\.\-]/g, "")).length === 0 ? NaN : /^-*0*\./.test(b) || (b = b.replace(/^-0+/, "-")).length === 0 || (b = b.replace(/^0+/, "")).length === 0 ? 0 : parseInt(b, 10)
    }
  }
  if(!h.toFloat) {
    h.toFloat = function() {
      var b;
      if((b = this.replace(/[^-\d\.]/g, "")).length === 0) {
        return NaN
      }
      for(var a = 0, c = b.length, d, g = 0, i = 0;a < c;a++) {
        if(d = b.charAt(a), d === ".") {
          if(g !== 0) {
            return NaN
          }else {
            g++
          }
        }else {
          if(d === "-") {
            if(i !== 0) {
              return NaN
            }else {
              i++
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
      for(var a = b.length, c = 0, d;c < a;c++) {
        (d = this.indexOf(b[c])) !== -1 && this.splice(d, 1)
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
      var c = [b, 0];
      e.push.apply(c, a);
      e.splice.apply(this, c);
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
    for(var b, f = f.replace(/\\/g, "/"), a = goog.dependencies_, c = 0;b = h[c];c++) {
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
          for(var d in b.requires[a]) {
            if(!goog.isProvided_(d)) {
              if(d in b.nameToPath) {
                f(b.nameToPath[d])
              }else {
                throw Error("Undefined nameToPath for " + d);
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
    for(var a = a.split("-"), c = [], d = 0;d < a.length;d++) {
      c.push(e(a[d]))
    }
    return c.join("-")
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
  for(var a = Array.prototype.slice.call(arguments, 2), c = !1, d = f.constructor;d;d = d.superClass_ && d.superClass_.constructor) {
    if(d.prototype[h] === b) {
      c = !0
    }else {
      if(c) {
        return d.prototype[h].apply(f, a)
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
    for(var a = 0, c = arguments.length;a < c;a++) {
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
  Util.ifNull = function(b, a, c) {
    return b == null ? a : c === void 0 ? b : c
  };
  Util.ifTrue = function(b, a, c) {
    return b === !0 ? a : c === void 0 ? b : c
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
  Util.split = function(b, a, c, d) {
    if(typeof b !== "string") {
      return[]
    }
    a = a === void 0 ? /\s+/ : a;
    c = c === void 0 ? function(a) {
      return!!a
    } : c;
    d = d === void 0 ? function(a) {
      return $.trim(a)
    } : d;
    b = b.split(a);
    d && (b = b.map(d));
    c && (b = b.filter(c));
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
    for(var a = 0, c = b.length;a < c;a++) {
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
      for(var a = [], c = 0, d = b.length;c < d;c++) {
        c in b && (a[c] = Util.deepClone(b[c]))
      }
      return a
    }
    a = {};
    for(c in b) {
      b.hasOwnProperty(c) && (a[c] = Util.deepClone(b[c]))
    }
    return a
  };
  Util.clone = function(b, a, c) {
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
      if(c === 1) {
        return Array.prototype.slice.call(b)
      }
      for(var d = [], g = b.length, i = 0, c = c !== void 0 ? c - 1 : void 0;i < g;i++) {
        i in b && (d[i] = Util.clone(b[i], a, c))
      }
      return d
    }
    d = {};
    g = Util.isEmptyObj(a);
    if(c === 1) {
      if(g) {
        for(i in b) {
          b.hasOwnProperty(i) && (d[i] = b[i])
        }
      }else {
        for(i in a) {
          a.hasOwnProperty(i) && b.hasOwnProperty(i) && (d[i] = b[i])
        }
      }
    }else {
      if(c = c !== void 0 ? c - 1 : void 0, g) {
        for(i in b) {
          b.hasOwnProperty(i) && (d[i] = Util.clone(b[i], void 0, c))
        }
      }else {
        for(i in a) {
          a.hasOwnProperty(i) && b.hasOwnProperty(i) && (d[i] = Util.clone(b[i], void 0, c))
        }
      }
    }
    return d
  };
  Util.toArray = function(b) {
    var a = [], c;
    for(c in b) {
      b.hasOwnProperty(c) && a.push(b[c])
    }
    return a
  };
  Util.toArrayWithKey = function(b) {
    var a = [], c;
    for(c in b) {
      b.hasOwnProperty(c) && a.push({key:c, val:b[c]})
    }
    return a
  };
  Util.random = function(b) {
    return Math.floor(b * Math.random())
  };
  Util.bound = function(b, a, c) {
    isNaN(c) || (b = Math.min(b, c));
    isNaN(a) || (b = Math.max(b, a));
    return b
  };
  Util.callFn = function() {
    return arguments.length <= 3 ? arguments[1].call(arguments[0], arguments[2]) : arguments[1].apply(arguments[0], Array.prototype.slice.call(arguments, 2))
  };
  Util.formatNumber = function(b, a, c, d, g) {
    var c = c === void 0 ? "&#8361; " : c, a = isNaN(a) ? 0 : a, d = d === void 0 ? "." : d, g = g === void 0 ? "," : g, i = b < 0 ? "-" : "", l = parseInt(b = Math.abs(+b || 0).toFixed(a), 10) + "", j = l.length, j = j > 3 ? j % 3 : 0;
    return c + i + (j ? l.substr(0, j) + g : "") + l.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + g) + (a ? d + Math.abs(b - l).toFixed(a).slice(2) : "")
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
      for(var c = b.classList ? b.classList : Util.split(b.className), d = 0, g = c.length;d < g;d++) {
        if(c[d] === a) {
          return!0
        }
      }
    }
    return!1
  };
  Util.hasTagAndClass = function(b, a, c) {
    if(b == null || a == null || c == null) {
      return!1
    }
    if(b.tagName === a) {
      if(b.className === c) {
        return!0
      }
      if(b.className && b.className.length >= c.length) {
        for(var b = b.classList ? b.classList : Util.split(b.className), a = 0, d = b.length;a < d;a++) {
          if(b[a] === c) {
            return!0
          }
        }
      }
    }
    return!1
  };
  Util.closest = function(b, a, c) {
    if(Util.hasClass(b, a)) {
      return b
    }
    for(b = b.parentNode;Util.isNotNull(b) && b !== c;b = b.parentNode) {
      if(Util.hasClass(b, a)) {
        return b
      }
    }
  };
  Util.closestWithTag = function(b, a, c, d) {
    if(Util.hasTagAndClass(b, a, c)) {
      return b
    }
    for(b = b.parentNode;Util.isNotNull(b) && b !== d;b = b.parentNode) {
      if(Util.hasTagAndClass(b, a, c)) {
        return b
      }
    }
  };
  Util.findFirstByClass = function(b, a) {
    if(b != null) {
      if(Util.hasClass(b, a)) {
        return b
      }
      for(var c = 0, d = b.childNodes, g = d.length, i;c < g;c++) {
        if(Util.isNotNull(d[c]) && (i = Util.findFirstByClass(d[c], a)) !== void 0) {
          return i
        }
      }
    }
  };
  Util.findFirstByTagAndClass = function(b, a, c) {
    if(b != null) {
      if(Util.hasTagAndClass(b, a, c)) {
        return b
      }
      for(var d = 0, b = b.childNodes, g = b.length, i;d < g;d++) {
        if(Util.isNotNull(b[d]) && (i = Util.findFirstByTagAndClass(b[d], a, c)) !== void 0) {
          return i
        }
      }
    }
  };
  Util.findByClass = function(b, a, c) {
    c === void 0 && (c = []);
    if(b == null) {
      return c
    }
    Util.hasClass(b, a) && c.push(b);
    for(var d = 0, b = b.childNodes, g = b.length;d < g;d++) {
      Util.isNotNull(b[d]) && Util.findByClass(b[d], a, c)
    }
    return c
  };
  Util.findByTagAndClass = function(b, a, c, d) {
    d === void 0 && (d = []);
    if(b == null) {
      return d
    }
    Util.hasTagAndClass(b, a, c) && d.push(b);
    for(var g = 0, b = b.childNodes, i = b.length;g < i;g++) {
      Util.isNotNull(b[g]) && Util.findByTagAndClass(b[g], a, c, d)
    }
    return d
  };
  Util.getHead = function() {
    return document.head ? document.head : document.getElementsByTagName("head")[0]
  };
  Util.appendTag = function(b, a) {
    return b.appendChild(document.createElement(a))
  };
  Util.appendHTML = function(b, a) {
    var c = document.createElement("div"), d, g = 0, i = [];
    c.innerHTML = a;
    for(d = c.childNodes.length;g < d;g++) {
      i.push(b.appendChild(c.firstChild))
    }
    return i
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
  Util.contains = function(b, a, c) {
    for(;a != null;) {
      if(a === b) {
        return!0
      }
      if(a === c) {
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
    for(var c = 0, d = b.length;c < d;c++) {
      if(b.hasOwnProperty(c) && !a.hasOwnProperty(c) || a.hasOwnProperty(c) && !b.hasOwnProperty(c) || b[c] !== a[c]) {
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
    for(var c in b) {
      if(b.hasOwnProperty(c) && (!a.hasOwnProperty(c) || b[c] !== a[c])) {
        return!1
      }
    }
    for(c in a) {
      if(a.hasOwnProperty(c) && (!b.hasOwnProperty(c) || b[c] !== a[c])) {
        return!1
      }
    }
    return!0
  };
  Util.areEqualComplex = function(b, a, c) {
    if(b == null || a == null) {
      return!1
    }
    if(b === a) {
      return!0
    }
    var d = c.length, g = c[0];
    if(d === 1) {
      return g === "array" ? Util.areEqualArrays(b, a) : Util.areEqualObjects(b, a)
    }
    if(d > 1) {
      c = c.slice(1);
      d = 0;
      if(g === "array") {
        if(b.length !== a.length) {
          return!1
        }
        for(g = b.length;d < g;d++) {
          if(!a.hasOwnProperty(d) || !Util.areEqualComplex(b[d], a[d], c)) {
            return!1
          }
        }
      }else {
        for(d in b) {
          if(b.hasOwnProperty(d) && (!a.hasOwnProperty(d) || !Util.areEqualComplex(b[d], a[d], c))) {
            return!1
          }
        }
        for(d in a) {
          if(a.hasOwnProperty(d) && (!b.hasOwnProperty(d) || !Util.areEqualComplex(b[d], a[d], c))) {
            return!1
          }
        }
      }
      return!0
    }
  };
  Util.typeCheck = function(b, a, c, d, g) {
    if(c && a === void 0 || d && a === null) {
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
  Util.sprint = function(b, a, c, d) {
    Util.typeCheck("string", b);
    Util.typeCheck("object", a);
    Util.typeCheck("string", c, !0);
    Util.typeCheck("string", d, !0);
    var g;
    c === void 0 && (c = "%");
    d === void 0 && (d = "%");
    for(g in a) {
      a.hasOwnProperty(g) && (b = b.replace(RegExp(c + g + d, "gm"), a[g]))
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
    var c, d = [];
    for(c in a) {
      a.hasOwnProperty(c) && d.push(Util.escapeRegExp(c))
    }
    return b.replace(RegExp("(" + d.join("|") + ")", "gm"), function(c) {
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
    for(var a = {}, c = 0, d;c < b.length;c++) {
      if(d = b[c].toLowerCase(), d === "number") {
        for(d = 48;d <= 57;d++) {
          a[d] = !0
        }
        for(d = 96;d <= 105;d++) {
          a[d] = !0
        }
      }else {
        if(d === "alphabet") {
          for(d = 65;d <= 90;d++) {
            a[d] = !0
          }
        }else {
          if(d === "arrow") {
            for(d = 37;d <= 40;d++) {
              a[d] = !0
            }
          }else {
            d.length > 1 && (d = d.replace(/\s/g, "")), d.length >= 3 && (d = d.replace(/numpad|num/g, "n").replace(/korean|kor/g, "kr")), a[Util.keyMapKeydown[d]] = !0
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
        for(var a = 0, c = arguments.length;a < c;a++) {
          e(arguments[a])
        }
      }
    }
  };
  Util.open = function(b) {
    var a = {url:"about:blank", name:"_blank", channelmode:"no", directories:"yes", fullscreen:"no", height:void 0, left:void 0, location:"yes", menubar:"yes", resizable:"yes", scrollbars:"yes", status:"yes", titlebar:"yes", toolbar:"yes", top:void 0, width:void 0, replace:void 0}, c;
    if(Util.isNotNull(b)) {
      for(c in a) {
        a.hasOwnProperty(c) && (a[c] = b[c])
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
  e.print = function(b, a, c) {
    b === void 0 && (b = "");
    a === void 0 && (a = "timer");
    c === void 0 && (c = !0);
    var d = this.timers[a], g = (new Date).getTime(), d = h.isNull(d) ? 0 : g - d;
    h.print((this.stack.length > 0 ? this.stack + " :: " : "") + b + ", Time elapsed since last update: " + d + "ms");
    c && (this.timers[a] = g)
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
    var e = this.laps, b = e.length, a = 2, c = b - (this._stopped ? 2 : 0), d = e[0], g = e[1], i = g, b = b > 2 ? [] : null, l = 0, j = "TimeWatch\n";
    for(j += "start" + (d ? ": " + d : "") + " @" + g + "\n";a < c;a += 2) {
      d = (d = e[a]) ? ": " + d : "", g = e[a + 1], b.push(i = g - i), l += i, j += "lap " + a / 2 + d + " @" + g + " +" + i + "ms\n", i = g
    }
    c >= 2 && this._stopped && (d = (d = e[c]) ? ": " + d : "", g = e[c + 1], b.push(i = g - i), l += i, j += "stop" + d + " @" + g + " +" + i + "ms\n");
    if(b) {
      var e = b.length, p = l / e, f = 0;
      j += "total number of laps: " + e + "\n";
      j += "total elapsed time: " + l + "ms\n";
      j += "average lap time: " + p.toFixed(2) + "ms\n";
      b.forEach(function(a) {
        f += (a - p) * (a - p)
      });
      f = Math.sqrt(f / e);
      j += "standard deviation: " + f.toFixed(2) + "ms\n"
    }
    return j
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
    if(!JGM.hasOwnProperty(e)) {
      throw Error("cannot find a grid module: name=" + e);
    }
    if(JGM._map.hasOwnProperty(e)) {
      if(JGM._map[e].cacheModule) {
        var a = b.mid = "JGM" + JGM.m.length++, c = new JGM[e](b);
        JGM.m.hasOwnProperty(e) || (JGM.m[e] = {});
        JGM.m[e][a] = c;
        if(e === "Grid") {
          if(c.name == null) {
            c.name = JGM.grids.length
          }
          JGM.gridMap[c.name] = c;
          JGM.grids.push(c)
        }
        return c
      }else {
        return new JGM[e](b)
      }
    }else {
      return new JGM[e](b)
    }
  };
  JGM._destroy = function(e, b) {
    var a, c, d, g;
    for(c in b) {
      if(b.hasOwnProperty(c)) {
        switch(c) {
          case "map":
            a = b[c];
            if(f.isString(a)) {
              a = f.split(a);
              g = a.length;
              for(d = 0;d < g;d++) {
                JGM._deleteMap(e, a[d])
              }
            }else {
              if(a instanceof Array) {
                g = a.length;
                for(d = 0;d < g;d++) {
                  f.emptyObject(a[d])
                }
              }else {
                f.emptyObject(a)
              }
            }
            break;
          case "array":
            a = b[c];
            if(f.isString(a)) {
              a = f.split(a);
              g = a.length;
              for(d = 0;d < g;d++) {
                JGM._deleteArray(e, a[d])
              }
            }else {
              a.length = 0
            }
            break;
          case "$":
            a = b[c];
            if(f.isString(a)) {
              a = f.split(a);
              g = a.length;
              for(d = 0;d < g;d++) {
                JGM._delete$(e, a[d])
              }
            }else {
              if(a instanceof Array) {
                g = a.length;
                for(d = 0;d < g;d++) {
                  h.unbindRemove(a[d])
                }
              }else {
                h.unbindRemove(a)
              }
            }
            break;
          case "style":
            a = b[c];
            if(f.isString(a)) {
              a = f.split(a);
              g = a.length;
              for(d = 0;d < g;d++) {
                JGM._deleteStyle(e, a[d])
              }
            }else {
              if(a instanceof Array) {
                g = a.length;
                for(d = 0;d < g;d++) {
                  f.removeStyle(a[d])
                }
              }else {
                f.removeStyle(a)
              }
            }
            break;
          case "property":
            a = b[c];
            if(f.isString(a)) {
              a = f.split(a);
              g = a.length;
              for(d = 0;d < g;d++) {
                delete e[a[d]]
              }
            }else {
              if(a instanceof Array) {
                g = a.length;
                for(d = 0;d < g;d++) {
                  delete e[a[d]]
                }
              }
            }
            break;
          case "module":
            a = b[c];
            if(f.isString(a)) {
              a = f.split(a);
              g = a.length;
              for(d = 0;d < g;d++) {
                JGM._deleteModule(e, a[d])
              }
            }else {
              if(a instanceof Array) {
                g = a.length;
                for(d = 0;d < g;d++) {
                  a[d].destroy()
                }
              }else {
                a.destroy()
              }
            }
            break;
          case "name":
            e.hasOwnProperty("mid") && (JGM._remove(b[c], e.mid), delete e.mid);
            break;
          case "path":
            e.hasOwnProperty("grid") && e.grid.hasOwnProperty(b[c]) && (delete e.grid[b[c]], delete e.grid)
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
    delete JGM.m[e][b]
  };
  JGM.grid = function(e) {
    return JGM.create("Grid", e)
  };
  JGM.gridMap = {};
  JGM.getGrid = function(e) {
    if(JGM.gridMap.hasOwnProperty(e)) {
      return JGM.gridMap[e]
    }
  };
  JGM.grids = [];
  JGM._add = function(e, b) {
    JGM[e] = b
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
    if(!JGM._globalEventsBound) {
      $(document).bind({mousemove:JGM._globalEvents._mousemove, mouseup:JGM._globalEvents._mouseup}), $(window).resize(JGM._globalEvents._resize), JGM._globalEventsBound = !0
    }
  };
  JGM._unbindGlobalEvents = function() {
    if(JGM._globalEventsBound) {
      $(document).unbind({mousemove:JGM._globalEvents._mousemove, mouseup:JGM._globalEvents._mouseup}), $(window).unbind("resize", JGM._globalEvents._resize), JGM._globalEventsBound = !1
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
    var e = f.mapping, b = f.attr, a = f["default"], c = f.style, d = f.callback, g, i, l, j = 0, p = [], k = [], q = "<select";
    if(b) {
      for(l in b) {
        b.hasOwnProperty(l) && (q += " " + l + '="' + b[l] + '"')
      }
    }
    if(c) {
      q += ' style="';
      for(l in c) {
        c.hasOwnProperty(l) && (q += l + ":" + c[l] + ";")
      }
      q += '"'
    }
    q += ">";
    for(g in e) {
      e.hasOwnProperty(g) && (f = e[g], p.push(g), k.push(f), a == f && (i = j), j++)
    }
    return function(a) {
      var c, g, b = q;
      for(g = 0;g < j;g++) {
        if(a == k[g]) {
          c = g;
          break
        }
      }
      c === void 0 && (c = i);
      for(g = 0;g < j;g++) {
        b += '<option value="' + k[g] + '"', g === c && (b += ' selected="selected"'), b += ">" + p[g] + "</option>"
      }
      b += "</select>";
      d && (c = [], c.push(b), Array.prototype.push.apply(c, arguments), b = d.apply(this, c));
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
  function h(a, c, i) {
    if(typeof a != "object") {
      return!1
    }
    var b, j, e;
    if(c) {
      for(var i = 0, f = c.length;i < f;i++) {
        if(b = c[i], this.hasOwnProperty(b)) {
          if(a.hasOwnProperty(b)) {
            if(j = this[b], e = a[b], j !== a && !(j === j || e === e)) {
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
      if(i) {
        for(b in this) {
          if(this.hasOwnProperty(b)) {
            if(!a.hasOwnProperty(b)) {
              return!1
            }
            j = this[b];
            e = a[b];
            if(j !== e) {
              if(j) {
                if(typeof j != "object" || typeof e != "object") {
                  return!1
                }
                if(j.equals) {
                  if(!j.equals(e, null, i - 1)) {
                    return!1
                  }
                }else {
                  if(e.equals && !e.equals(j, null, i - 1)) {
                    return!1
                  }
                }
                if(!h.call(j, e, null, i - 1)) {
                  return!1
                }
              }else {
                if(!(j === j || e === e)) {
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
              if(j = this[b], e = a[b], j !== a && !(j === j || e === e)) {
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
      var i, b;
      if(a) {
        for(i in this) {
          if(this.hasOwnProperty(i)) {
            if((b = this[i]) && typeof b == "object") {
              if(b.dispose) {
                b.dispose(a - 1, g)
              }else {
                if(g) {
                  if(c(b)) {
                    b.length = 0
                  }
                  e.call(b, a - 1, g)
                }
              }
            }
            delete this[i]
          }
        }
      }else {
        for(i in this) {
          this.hasOwnProperty(i) && delete this[i]
        }
      }
    }
  }
  var b = goog.getObjectByName("jx.util");
  goog.exportSymbol("jx.lang.Disposable", f);
  goog.exportProperty(f.prototype, "dispose", e);
  var a = f.prototype, c = b.isArray;
  b.equals = Object.equals = function(a, c, i, b) {
    return typeof a == "object" ? h.call(a, c, i, b) : a !== a && c !== c
  };
  b.dispose = Object.dispose = function(a, c, i) {
    if(typeof a == "object") {
      return e.call(a, c, i)
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
  e.addEventListener = function(a, c) {
    if(!a) {
      throw Error("Invalid event type: " + a);
    }
    if(typeof c != "function") {
      throw Error("Event listener must be a function");
    }
    if(!this._handlers) {
      this._handlers = {}
    }
    var d = this._handlers, a = (a + "").toLowerCase();
    d.hasOwnProperty(a) || (d[a] = []);
    d = d[a];
    d.indexOf(c) === -1 && d.push(c)
  };
  e.removeEventListener = function(a, c) {
    if(this._handlers) {
      var a = (a + "").toLowerCase(), d = this._handlers;
      if(d.hasOwnProperty(a)) {
        for(var g = d[a], i = -1;(i = g.indexOf(c, i + 1)) !== -1;) {
          g.splice(i--, 1)
        }
        g.length === 0 && delete d[a]
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
    var c = this._handlers, d = (a.type + "").toLowerCase();
    a.target = this;
    if(c.hasOwnProperty(d)) {
      for(var c = c[d].slice(), d = 0, g = c.length, i;d < g && !a.stopPropagation;d++) {
        i = c[d], i.handleEvent ? i.handleEvent(a) : i.call(this, a)
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
    var a = this._defaultOptions && this._defaultOptions(b.grid), c = b && b.options;
    if(c || a) {
      a || (a = {}), c && $.extend(!0, a, c), this._options = a, this.dispatchEvent({type:"afteroption", options:a})
    }
    this._init && (this.dispatchEvent({type:"beforeinit"}), this._init(b), this.dispatchEvent({type:"afterinit"}));
    var d = this, g = this.grid;
    g && ["Dispose", "CreateCss", "CreateDynamicCss", "Render", "Keydown", "Keyup", "Keypress", "Mousein", "Mouseout", "Mouseenter", "Mouseleave", "Mousemove", "Mouseover", "Mousedown", "Mouseup", "Click", "Dblclick", "Resize", "ResizeWidth", "ResizeHeight", "Scroll", "ScrollH", "ScrollV"].forEach(function(a) {
      var c = "before" + a, a = "after" + a, b = "_" + c, e = "_" + a;
      d[b] && g.addEventListener(c, function(a) {
        return d[b](a)
      });
      d[e] && g.addEventListener(a, function(a) {
        return d[e](a)
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
  h.toCssStyle = function(b, a, c) {
    var d = [];
    c || (b = "#" + this.grid.mid + " " + b);
    if(typeof a != "string") {
      var g, c = "";
      a.hasOwnProperty("_prepend") && (a._prepend && d.push(a._prepend), delete a._prepend);
      a.hasOwnProperty("_append") && (a._append && (c = ";" + a._append), delete a._append);
      for(g in a) {
        d.push(g + ":" + a[g])
      }
      d = d.join(";") + c
    }
    return b + "{" + d + "}"
  };
  h.toCssStyles = function(b, a, c) {
    var b = b || [], d;
    for(d in a) {
      b.push(this.toCssStyle(d, a[d], c))
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
    for(var c = 0, d = this._options.uniqueKeys, g, i = this.uniqueMap, b = d.length, j = this.keyToType, p = this.grid.colDefMgr.getAll();c < b;c++) {
      g = d[c], typeof g === "string" && (i[g] = {})
    }
    b = p.length;
    for(c = 0;c < b;c++) {
      d = p[c], g = d.key, d.hasOwnProperty("unique") && d.unique === !0 && !i.hasOwnProperty(g) && (i[g] = {}), j[g] = this.mapDatatype(d.type)
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
  b.addUniqueIndex = function(a, c, d, g) {
    if(g !== !0 && (e.isNull(a) || e.isEmptyString(c) || e.isNull(d))) {
      return!1
    }
    if(d.hasOwnProperty(c) === !1) {
      return this.grid.error("KEY_UNDEFINED", c)
    }
    if(e.isEmptyString(g = d[c])) {
      return this.grid.error("BAD_NULL", c)
    }
    if(a.hasOwnProperty(g)) {
      return a[g] === d ? !1 : this.grid.error("DUP_ENTRY", g, c)
    }
    a[g] = d;
    return!0
  };
  b.addUniqueIndices = function(a, c, d, g) {
    if(g !== !0 && (e.isNull(a) || e.isEmptyString(c) || e.isEmptyArray(d))) {
      return!1
    }
    for(var i = d.length, b = [], j, p, g = 0;g < i;g++) {
      if(!e.isNull(p = d[g])) {
        if(p.hasOwnProperty(c) === !1) {
          return this.removeUniqueIndices(a, c, b), this.grid.error("KEY_UNDEFINED", c)
        }
        if(e.isEmptyString(j = p[c])) {
          return this.removeUniqueIndices(a, c, b), this.grid.error("BAD_NULL", c)
        }
        if(a.hasOwnProperty(j)) {
          if(a[j] === p) {
            continue
          }
          this.removeUniqueIndices(a, c, b);
          return this.grid.error("DUP_ENTRY", j, c)
        }
        b.push(a[j] = p)
      }
    }
    return b.length > 0
  };
  b.updateUniqueIndex = function(a, c, d, g, i, b) {
    if(b !== !0 && (e.isEmptyObj(a) || e.isEmptyString(c) || e.isNullOr(d, i) || e.isEmptyObj(g))) {
      return!1
    }
    if(g.hasOwnProperty(c) === !1) {
      return!1
    }
    if(i.hasOwnProperty(c) === !1 || d.hasOwnProperty(c) === !1) {
      return this.grid.error("KEY_UNDEFINED", c)
    }
    if(a.hasOwnProperty(i = i[c]) === !1) {
      return this.grid.error("KEY_NOT_FOUND", i, c)
    }
    if(e.isEmptyString(g = g[c])) {
      return this.grid.error("BAD_NULL", c)
    }
    if(a.hasOwnProperty(g)) {
      return a[g] === d ? !1 : this.grid.error("DUP_ENTRY", g, c)
    }
    a[g] = d;
    delete a[i];
    return i
  };
  b.updateUniqueIndices = function(a, c, d, g, i, b) {
    if(b !== !0) {
      if(e.isEmptyObj(a) || e.isEmptyString(c) || e.isEmptyArray(d) || e.isEmptyArray(g) || e.isEmptyArray(i)) {
        return!1
      }
      if(d.length !== g.length || d.length !== i.length) {
        return this.grid.error("LENGTH_NOT_EQUAL")
      }
    }
    for(var b = 0, j = d.length, p, f, h, n = [], o = [], m = [], r, s;b < j;b++) {
      if(!e.isNull(p = d[b])) {
        if((h = g[b]).hasOwnProperty(c) !== !1) {
          f = i[b];
          if(f.hasOwnProperty(c) === !1 || p.hasOwnProperty(c) === !1) {
            return this.updateUniqueIndices(a, c, n, m, o), this.grid.error("KEY_UNDEFINED", c)
          }
          if(a.hasOwnProperty(s = f[c]) === !1) {
            return this.updateUniqueIndices(a, c, n, m, o), this.grid.error("KEY_NOT_FOUND", s, c)
          }
          if(e.isEmptyString(r = h[c])) {
            return this.updateUniqueIndices(a, c, n, m, o), this.grid.error("BAD_NULL", c)
          }
          if(a.hasOwnProperty(r)) {
            if(a[r] === p) {
              continue
            }
            this.updateUniqueIndices(a, c, n, m, o);
            return this.grid.error("DUP_ENTRY", r, c)
          }
          a[r] = p;
          delete a[s];
          n.push(p);
          o.push(h);
          m.push(f)
        }
      }
    }
    return n.length === 0 ? !1 : {datalist:n, changes:o, befores:m}
  };
  b.removeUniqueIndex = function(a, c, d, g) {
    if(!(g !== !0 && (e.isEmptyObj(a) || e.isEmptyString(c) || e.isEmptyObj(d)))) {
      var i;
      d.hasOwnProperty(c) && a.hasOwnProperty(i = d[c]) && delete a[i]
    }
  };
  b.removeUniqueIndices = function(a, c, d, g) {
    if(!(g !== !0 && (e.isEmptyObj(a) || e.isEmptyString(c) || e.isEmptyArray(d)))) {
      for(var i = d.length, b, j, g = 0;g < i;g++) {
        j = d[g], j.hasOwnProperty(c) && a.hasOwnProperty(b = j[c]) && delete a[b]
      }
    }
  };
  b.addToUniqueMap = function(a) {
    if(e.isEmptyObj(a) || e.isEmptyObj(this.uniqueMap)) {
      return!1
    }
    var c = [], d, g = this.uniqueMap, i;
    for(d in g) {
      if(g.hasOwnProperty(d)) {
        if(i = this.addUniqueIndex(g[d], d, a), i === !0) {
          c.push(d)
        }else {
          if(i instanceof Error) {
            d = 0;
            for(var b = c.length;d < b;d++) {
              this.removeUniqueIndex(g[c[d]], c[d], a)
            }
            return i
          }
        }
      }
    }
    return c.length > 0
  };
  b.addListToUniqueMap = function(a) {
    if(e.isEmptyArray(a) || e.isEmptyObj(this.uniqueMap)) {
      return!1
    }
    var c = this.uniqueMap, d = [], g, i;
    for(g in c) {
      if(c.hasOwnProperty(g)) {
        if(i = this.addUniqueIndices(c[g], g, a), i === !0) {
          d.push(g)
        }else {
          if(i instanceof Error) {
            g = 0;
            for(var b = d.length;g < b;g++) {
              this.removeUniqueIndices(c[d[g]], d[g], a)
            }
            return i
          }
        }
      }
    }
    return d.length > 0
  };
  b.updateUniqueMap = function(a, c, d) {
    if(e.isNullOr(a, c, d) || e.isEmptyObj(this.uniqueMap)) {
      return!1
    }
    var g, i = this.uniqueMap, b = [], j;
    for(g in i) {
      if(i.hasOwnProperty(g)) {
        j = this.updateUniqueIndex(i[g], g, a, c, d);
        if(j instanceof Error) {
          g = 0;
          for(var p = b.length;g < p;g++) {
            this.updateUniqueIndex(i[b[g]], b[g], a, d, c)
          }
          return j
        }
        j !== !1 && b.push(g)
      }
    }
    return b.length > 0
  };
  b.updateListUniqueMap = function(a, c, d) {
    if(e.isEmptyArray(a) || e.isEmptyArray(c) || e.isEmptyArray(d) || e.isEmptyObj(this.uniqueMap)) {
      return!1
    }
    if(a.length !== c.length || a.length !== d.length) {
      return this.grid.error("LENGTH_NOT_EQUAL")
    }
    var g, i = this.uniqueMap, b = [], j;
    for(g in i) {
      if(i.hasOwnProperty(g)) {
        j = this.updateUniqueIndices(i[g], g, a, c, d);
        if(j instanceof Error) {
          g = 0;
          for(var p = b.length;g < p;g++) {
            this.updateUniqueIndices(i[b[g]], b[g], a, d, c)
          }
          return j
        }
        j !== !1 && b.push(g)
      }
    }
    return b.length > 0
  };
  b.removeFromUniqueMap = function(a) {
    if(!e.isEmptyObj(a) && !e.isEmptyObj(this.uniqueMap)) {
      var c, d = this.uniqueMap;
      for(c in d) {
        d.hasOwnProperty(c) && this.removeUniqueIndex(d[c], c, a)
      }
    }
  };
  b.removeListFromUniqueMap = function(a) {
    if(!e.isEmptyArray(a) && !e.isEmptyObj(this.uniqueMap)) {
      var c, d = this.uniqueMap;
      for(c in d) {
        d.hasOwnProperty(c) && this.removeUniqueIndices(d[c], c, a)
      }
    }
  };
  b.addToIdMap = function(a) {
    if(e.isNull(a)) {
      return!1
    }
    var c = this.idKey;
    switch(this._idMode) {
      case this._consts._auto:
        a.hasOwnProperty(c) === !1 && (a[c] = this._increment++);
      case this._consts._given:
      ;
      case this._consts._composite:
        return this.addUniqueIndex(this._idToData, c, a)
    }
    return!1
  };
  b.addListToIdMap = function(a) {
    if(e.isEmptyArray(a)) {
      return!1
    }
    var c = this.idKey;
    switch(this._idMode) {
      case this._consts._auto:
        for(var d = 0, g, i = a.length;d < i;d++) {
          if((g = a[d]).hasOwnProperty(c) === !1) {
            g[c] = this._increment++
          }
        }
      ;
      case this._consts._given:
      ;
      case this._consts._composite:
        return this.addUniqueIndices(this._idToData, c, a)
    }
    return!1
  };
  b.updateIdMap = function(a, c, d) {
    if(e.isNullOr(a, d) || e.isEmptyObj(c)) {
      return!1
    }
    var g = this.idKey;
    switch(this._idMode) {
      case this._consts._auto:
        if(c.hasOwnProperty(g)) {
          return this.grid.error("NOT_MODIFIABLE", g)
        }
      ;
      case this._consts._given:
        return this.updateUniqueIndex(this._idToData, g, a, c, d);
      case this._consts._composite:
        if(c.hasOwnProperty(g)) {
          return this.grid.error("NOT_MODIFIABLE", g)
        }
        for(var d = this._options.idColKeys, i = d.length, b = 0;b < i;b++) {
          if(c.hasOwnProperty(d[b])) {
            for(var j = "", p = 0, f, h, n = {}, o = {}, b = o[g] = a[g];p < i;p++) {
              if(f = d[p], c.hasOwnProperty(f)) {
                if(e.isEmptyString(h = c[f])) {
                  return this.grid.error("BAD_NULL", f)
                }
                j += "&" + h
              }else {
                j += "&" + a[f]
              }
            }
            a[g] = n[g] = j;
            if(b === j) {
              break
            }
            c = this.updateUniqueIndex(this._idToData, g, a, n, o);
            c instanceof Error && (a[g] = b);
            return c
          }
        }
    }
    return!1
  };
  b.updateListIdMap = function(a, c, d) {
    if(e.isEmptyArray(a) || e.isEmptyArray(c) || e.isEmptyArray(d)) {
      return!1
    }
    var g = this.idKey, i = a.length, b = 0;
    switch(this._idMode) {
      case this._consts._auto:
        for(;b < i;b++) {
          if(c[b].hasOwnProperty(g)) {
            return this.grid.error("NOT_MODIFIABLE", g)
          }
        }
      ;
      case this._consts._given:
        return this.updateUniqueIndices(this._idToData, g, a, c, d);
      case this._consts._composite:
        for(var j = this._idToData, p, f, h = this._options.idColKeys, n = h.length, o, d = [], m = [], r = [], s = [], t, v, u, w;b < i;b++) {
          p = a[b];
          f = c[b];
          if(f.hasOwnProperty(g)) {
            t = 0;
            for(i = d.length;t < i;t++) {
              m[t][g] = d[t]
            }
            return this.grid.error("NOT_MODIFIABLE", g)
          }
          for(t = 0;t < n;t++) {
            if(f.hasOwnProperty(h[t])) {
              o = "";
              for(v = 0;v < n;v++) {
                if(u = h[v], f.hasOwnProperty(u)) {
                  if(e.isEmptyString(w = f[u])) {
                    t = 0;
                    for(i = d.length;t < i;t++) {
                      m[t][g] = d[t]
                    }
                    return this.grid.error("BAD_NULL", u)
                  }
                  o += "&" + w
                }else {
                  o += "&" + p[u]
                }
              }
              p[g] !== o && (m.push(p), r.push({}), s.push({}), d.push(p[g]), p[g] = o)
            }
          }
        }
        if(m.length === 0) {
          break
        }
        a = this.updateUniqueIndices(j, g, m, r, s);
        if(a instanceof Error) {
          t = 0;
          for(i = d.length;t < i;t++) {
            m[t][g] = d[t]
          }
        }
        return a
    }
    return!1
  };
  b.removeFromIdMap = function(a) {
    var c = this.idKey, d = this._idToData, g;
    e.isNotNull(a) && a.hasOwnProperty(c) && d.hasOwnProperty(g = a[c]) && delete d[g]
  };
  b.removeListFromIdMap = function(a) {
    if(!e.isEmptyArray(a)) {
      for(var c = this.idKey, d = a.length, g = this._idToData, i, b, j = 0;j < d;j++) {
        b = a[j], b.hasOwnProperty(c) && g.hasOwnProperty(i = b[c]) && delete g[i]
      }
    }
  };
  b.fillTemp = function(a, c) {
    if(!e.isNull(a)) {
      var d = this.grid.colDefMgr.getAll(), g = d.length, i, b, j = 0;
      if(c !== void 0 && c.isNew) {
        for(;j < g;j++) {
          b = d[j], i = b.key, b.nullOnCreate && e.isNull(a[i]) && (a[i] = "J@H" + this._increment++)
        }
      }
    }
  };
  b.fillTempList = function(a, c) {
    if(!e.isEmptyArray(a)) {
      var d = this.grid.colDefMgr.getAll(), g = d.length, i = a.length, b, j, f = 0;
      if(c !== void 0 && c.isNew) {
        for(;f < g;f++) {
          if(j = d[f], b = j.key, j.nullOnCreate) {
            for(j = 0;i;j++) {
              a[j][b] = "J@H" + this._increment++
            }
          }
        }
      }
    }
  };
  b.query = function(a) {
    if(typeof a === "string" && (a = $.trim(a), a.length !== 0)) {
      var c, d, g, i, b;
      c = a.toLowerCase();
      d = a.indexOf(" ");
      if(d !== -1 && (g = c.substring(0, d), c = c.indexOf(" where "), i = c > -1, d = $.trim(i ? a.substring(d + 1, c) : a.substring(d + 1)), d.length !== 0)) {
        switch(i && (b = $.trim(a.substring(c + 7))), g) {
          case "select":
            return this.executeSelect(d, b);
          case "insert":
            return this.executeInsert(d, b);
          case "update":
            return this.executeUpdate(d, b);
          case "delete":
            return this.executeDelete(d, b)
        }
      }
    }
  };
  b.parseWhere = function(a) {
    typeof a === "string" && $.trim(a)
  };
  b.executeSelect = function(a) {
    var a = e.split(a, /[\s,]+/), c = a.length, d = 0, g = {}, i = this.all, b = [];
    if(c === 0) {
      return b
    }
    for(;d < c;d++) {
      if(a[d] === "*") {
        break
      }
      g[a[d]] = !0
    }
    d = 0;
    for(c = i.length;d < c;d++) {
      b.push(e.clone(i[d], g))
    }
    return b
  };
  b.parse = function(a, c) {
    if(e.isNull(a)) {
      return!1
    }
    for(var d = this.grid.colDefMgr.getAll(), g = d.length, i, b, j = c !== void 0 && c.isNew, f = 0;f < g;f++) {
      if(b = d[f], !j || !b.nullOnCreate) {
        if(e.isFunction(i = b.parser)) {
          if(b = b.key, a.hasOwnProperty(b)) {
            try {
              a[b] = i(a[b], a)
            }catch(k) {
              return e.isNull(a) ? this.grid.error("PARSE_ERROR", a, b) : this.grid.error("PARSE_ERROR", a[b], b)
            }
          }
        }
      }
    }
    return!0
  };
  b.parseList = function(a, c) {
    if(e.isNull(a)) {
      return!1
    }
    if(a.length === 0) {
      return!0
    }
    for(var d = this.grid.colDefMgr.getAll(), g = d.length, i = a.length, b, j, f = 0, k, h = c !== void 0 && c.isNew, n;f < g;f++) {
      if(j = d[f], !h || !j.nullOnCreate) {
        if(e.isFunction(b = j.parser)) {
          j = j.key;
          try {
            for(k = 0;k < i;k++) {
              n = a[k], n.hasOwnProperty(j) && (n[j] = b(n[j], n))
            }
          }catch(o) {
            return e.isNull(n) ? this.grid.error("PARSE_ERROR", n, j) : this.grid.error("PARSE_ERROR", n[j], j)
          }
        }
      }
    }
    return!0
  };
  b.validate = function(a, c) {
    if(e.isNull(a)) {
      return!1
    }
    for(var d = this.grid.colDefMgr.getAll(), g = d.length, i, b, j, f, k, h, n, o = c !== void 0 && c.isNew, m = 0;m < g;m++) {
      if(i = d[m], b = i.key, k = void 0, f = j = !1, !o || !i.nullOnCreate) {
        if(i.notNull === !0) {
          if(a.hasOwnProperty(b) === !1 || e.isEmptyString(k = a[b])) {
            return this.grid.error("BAD_NULL", b)
          }
          h = k.toString()
        }else {
          a.hasOwnProperty(b) === !1 || e.isNull(k = a[b]) ? f = j = !0 : k === "" && (f = !0), h = j === !1 ? k.toString() : ""
        }
        if(j === !1) {
          if(e.isNotNull(n = i.max) && f === !1 && k > n) {
            return this.grid.error("BIGGER_THAN", k, b, n)
          }
          if(e.isNotNull(n = i.min) && f === !1 && k < n) {
            return this.grid.error("SMALLER_THAN", k, b, n)
          }
          if(e.isNotNull(n = i.length)) {
            if(f === !0 || h.length !== n) {
              return this.grid.error("WRONG_LENGTH", h, n, b)
            }
          }else {
            if(e.isNotNull(n = i.maxlength) && f === !1 && h.length > n) {
              return this.grid.error("DATA_TOO_LONG", h, b, n)
            }
            if(e.isNotNull(n = i.minlength)) {
              if(f === !0 || h.length < n) {
                return this.grid.error("DATA_TOO_SHORT", h, b, n)
              }
            }
          }
        }
        if(e.isFunction(i = i.validator)) {
          try {
            if(i(k, a, h, j, f) !== !0) {
              return this.grid.error("WRONG_VALUE", h, b)
            }
          }catch(r) {
            return this.grid.error("WRONG_VALUE", h, b)
          }
        }
      }
    }
    return!0
  };
  b.validateList = function(a, c) {
    if(e.isNull(a)) {
      return!1
    }
    if(a.length === 0) {
      return!0
    }
    for(var d = this.grid.colDefMgr.getAll(), b = d.length, i = a.length, l, j, f = 0, k, h, n, o, m, r = c !== void 0 && c.isNew, s = [], t = [];f < b;f++) {
      if(l = d[f], j = l.key, h = {}, n = {}, s.length = 0, t.length = 0, !r || !l.nullOnCreate) {
        if(l.notNull === !0) {
          for(k = 0;k < i;k++) {
            if(a[k].hasOwnProperty(j) === !1 || e.isEmptyString(o = a[k][j])) {
              return this.grid.error("BAD_NULL", j)
            }
            s.push(o);
            t.push(o.toString())
          }
        }else {
          for(k = 0;k < i;k++) {
            o = void 0, a[k].hasOwnProperty(j) === !1 || e.isNull(o = a[k][j]) ? (h[k] = !0, n[k] = !0) : o === "" && (n[k] = !0), s.push(o), h.hasOwnProperty(k) ? t.push("") : t.push(o.toString())
          }
        }
        if(e.isNotNull(m = l.max)) {
          for(k = 0;k < i;k++) {
            if(n.hasOwnProperty(k) === !1 && s[k] > m) {
              return this.grid.error("BIGGER_THAN", s[k], j, m)
            }
          }
        }
        if(e.isNotNull(m = l.min)) {
          for(k = 0;k < i;k++) {
            if(n.hasOwnProperty(k) === !1 && s[k] < m) {
              return this.grid.error("SMALLER_THAN", s[k], j, m)
            }
          }
        }
        if(e.isNotNull(m = l.length)) {
          for(k = 0;k < i;k++) {
            if(h.hasOwnProperty(k) === !1 && (n.hasOwnProperty(k) || t[k].length !== m)) {
              return this.grid.error("WRONG_LENGTH", t[k], m, j)
            }
          }
        }else {
          if(e.isNotNull(m = l.maxlength)) {
            for(k = 0;k < i;k++) {
              if(n.hasOwnProperty(k) === !1 && t[k].length > m) {
                return this.grid.error("DATA_TOO_LONG", t[k], j, m)
              }
            }
          }
          if(e.isNotNull(m = l.minlength)) {
            for(k = 0;k < i;k++) {
              if(h.hasOwnProperty(k) === !1 && (n.hasOwnProperty(k) || t[k].length < m)) {
                return this.grid.error("DATA_TOO_SHORT", t[k], j, m)
              }
            }
          }
        }
        if(e.isFunction(l = l.validator)) {
          try {
            for(k = 0;k < i;k++) {
              if(l(s[k], a[k], t[k], h.hasOwnProperty(k), n.hasOwnProperty(k)) !== !0) {
                return this.grid.error("WRONG_VALUE", t[k], j)
              }
            }
          }catch(v) {
            return this.grid.error("WRONG_VALUE", t[k], j)
          }
        }
      }
    }
    return!0
  };
  b.makeCompositeKey = function(a, c) {
    if(!(this._idMode !== this._consts._composite || e.isNull(a))) {
      if(c === !0 || a.hasOwnProperty(this.idKey) === !1) {
        for(var d = this._options.idColKeys, b = d.length, i = 0, l = "";i < b;i++) {
          l += "&" + a[d[i]]
        }
        a[this.idKey] = l
      }
    }
  };
  b.makeCompositeKeyList = function(a, c) {
    if(!(this._idMode !== this._consts._composite || a.length === 0)) {
      var d = this.idKey, b = a.length, i = this._options.idColKeys, l = i.length, j, e = 0, f, h;
      if(c === !0) {
        for(;e < b;e++) {
          j = a[e];
          h = "";
          for(f = 0;f < l;f++) {
            h += "&" + j[i[f]]
          }
          j[d] = h
        }
      }else {
        for(;e < b;e++) {
          if((j = a[e]).hasOwnProperty(d) === !1) {
            h = "";
            for(f = 0;f < l;f++) {
              h += "&" + j[i[f]]
            }
            j[d] = h
          }
        }
      }
    }
  };
  b.map = function(a) {
    if(!e.isNull(a)) {
      var c = this._idToData, d = this.idKey, b;
      this.makeCompositeKey(a);
      if(a.hasOwnProperty(d) && c.hasOwnProperty(b = a[d])) {
        return c[b]
      }
    }
  };
  b.mapList = function(a) {
    if(e.isEmptyArray(a)) {
      return{mapped:[], unmapped:[]}
    }
    this.makeCompositeKeyList(a);
    for(var c = [], d = [], b = this.idKey, i = this._idToData, l = a.length, j = 0, f, k;j < l;j++) {
      (f = a[j]).hasOwnProperty(b) && i.hasOwnProperty(k = f[b]) ? c.push(i[k]) : d.push(f)
    }
    return{mapped:c, unmapped:d}
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
    for(var c = this.datalist, d = c.length, b = this.idKey, i = this._idToIdx;a < d;a++) {
      i[c[a][b]] = a
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
    var c, d = this.uniqueMap;
    for(c in d) {
      d.hasOwnProperty(c) && (d[c] = {})
    }
    this._idToData = {};
    this.all = [];
    this._history.length = 0;
    this._redoHistory.length = 0;
    e.isNull(a) && (a = []);
    if((c = this.parseList(a)) instanceof Error) {
      return c
    }
    if((c = this.validateList(a)) instanceof Error) {
      return c
    }
    if((c = this.addListToUniqueMap(a)) instanceof Error) {
      return c
    }
    this.makeCompositeKeyList(a, !0);
    if((c = this.addListToIdMap(a)) instanceof Error) {
      return c
    }
    this.all = a;
    this.grid.event.trigger("onAfterSetDatalist", [a], !0);
    this.grid.event.trigger("onDataChange", !1, !0);
    this.refresh();
    return!0
  };
  b.add = function(a, c) {
    if(e.isNull(a) || e.isNotNull(this.map(a))) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange", !1, !0);
    this.fillTemp(a, c);
    var d;
    if((d = this.parse(a, c)) instanceof Error) {
      return d
    }
    if((d = this.validate(a, c)) instanceof Error) {
      return d
    }
    if((d = this.addToUniqueMap(a)) instanceof Error) {
      return d
    }
    if((d = this.addToIdMap(a)) instanceof Error) {
      return d
    }
    this.all.push(a);
    if(e.isNull(c) || c.undo !== !0) {
      this._history.push({_action:this._consts._add, _target:a}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onAddDatarow", [a, c], !0);
    this.grid.event.trigger("onDataChange", !1, !0);
    (c === void 0 || c.noRefresh !== !0) && this.refresh(c);
    return!0
  };
  b.addList = function(a, c) {
    if(e.isEmptyArray(a)) {
      return!1
    }
    var d = this.mapList(a).unmapped;
    if(d.length === 0) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange", !1, !0);
    this.fillTempList(a, c);
    var b;
    if((b = this.parseList(d, c)) instanceof Error) {
      return b
    }
    if((b = this.validateList(d, c)) instanceof Error) {
      return b
    }
    if((b = this.addListToUniqueMap(d)) instanceof Error) {
      return b
    }
    if((b = this.addListToIdMap(d)) instanceof Error) {
      return b
    }
    this.all.pushList(d);
    if(e.isNull(c) || c.undo !== !0) {
      this._history.push({_action:this._consts._addList, _target:d}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onAddDatalist", [d, c], !0);
    this.grid.event.trigger("onDataChange", !1, !0);
    (c === void 0 || c.noRefresh !== !0) && this.refresh(c);
    return!0
  };
  b.updateByKey = function(a, c, d, b) {
    var i = {};
    i[c] = d;
    return this.update(a, i, b)
  };
  b.update = function(a, c, d) {
    if(e.isNullOr(a, c)) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange", !1, !0);
    this.grid.event.trigger("onBeforeUpdateDatarow", [a, c], !0);
    var b = {}, i;
    for(i in c) {
      c.hasOwnProperty(i) && (a[i] === c[i] ? delete c[i] : (b[i] = a[i], a[i] = c[i]))
    }
    if(e.isEmptyObj(b)) {
      return!1
    }
    if((i = this.parse(a, d)) instanceof Error) {
      return this._rollback(a, b), i
    }
    if((i = this.validate(a, d)) instanceof Error) {
      return this._rollback(a, b), i
    }
    if((i = this.updateUniqueMap(a, c, b)) instanceof Error) {
      return this._rollback(a, b), i
    }
    if((i = this.updateIdMap(a, c, b)) instanceof Error) {
      return this._rollback(a, b), i
    }
    i !== !1 && this.grid.event.trigger("onIdChange", [a, i, a[this.idKey]], !0);
    if(e.isNull(d) || d.undo !== !0) {
      this._history.push({_action:this._consts._update, _target:a, _before:b, _change:c}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onUpdateDatarow", [a, c, b, d], !0);
    this.grid.event.trigger("onDataChange", !1, !0);
    (d === void 0 || d.noRefresh !== !0) && this.refresh(d);
    return!0
  };
  b.updateList = function(a, c) {
    if(e.isEmptyArray(a)) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange", !1, !0);
    this.grid.event.trigger("onBeforeUpdateDatalist", [a], !0);
    for(var d = [], b = [], i = [], l, j, f, k = a.length, h = 0, n;h < k;h++) {
      j = {};
      l = a[h].datarow;
      f = a[h].change;
      for(n in f) {
        f.hasOwnProperty(n) && (l[n] === f[n] ? delete f[n] : (j[n] = l[n], l[n] = f[n]))
      }
      e.isNotEmptyObj(j) && (d.push(l), b.push(j), i.push(f))
    }
    if(d.length === 0) {
      return!1
    }
    if((l = this.parseList(d, c)) instanceof Error) {
      return this._rollbackList(d, b), l
    }
    if((l = this.validateList(d, c)) instanceof Error) {
      return this._rollbackList(d, b), l
    }
    if((l = this.updateListUniqueMap(d, i, b)) instanceof Error) {
      return this._rollbackList(d, b), l
    }
    if((l = this.updateListIdMap(d, i, b)) instanceof Error) {
      return this._rollbackList(d, b), l
    }
    l !== !1 && this.grid.event.trigger("onIdListChange", [l.list, l.befores, this.idKey], !0);
    if(e.isNull(c) || c.undo !== !0) {
      this._history.push({_action:this._consts._updateList, _target:d, _before:b, _change:i}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onUpdateDatalist", [d, i, b, c], !0);
    this.grid.event.trigger("onDataChange", !1, !0);
    (c === void 0 || c.noRefresh !== !0) && this.refresh(c);
    return!0
  };
  b._rollback = function(a, c) {
    for(var d in c) {
      c.hasOwnProperty(d) && (a[d] = c[d])
    }
  };
  b._rollbackList = function(a, c) {
    for(var d = a.length, b = 0, i, l, j;b < d;b++) {
      for(j in i = a[b], l = c[b], l) {
        l.hasOwnProperty(j) && (i[j] = l[j])
      }
    }
  };
  b.remove = function(a, c) {
    if(e.isNull(a)) {
      return!1
    }
    var d = this.map(a);
    if(e.isNull(d)) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange", !1, !0);
    this.removeFromIdMap(d);
    this.removeFromUniqueMap(d);
    this.all.remove(d);
    this.removeId(d);
    if(e.isNull(c) || c.undo !== !0) {
      this._history.push({_action:this._consts._remove, _target:d}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onRemoveDatarow", [d, c], !0);
    this.grid.event.trigger("onDataChange", !1, !0);
    (c === void 0 || c.noRefresh !== !0) && this.refresh(c);
    return!0
  };
  b.removeList = function(a, c) {
    if(e.isEmptyArray(a)) {
      return!1
    }
    var d = this.mapList(a).mapped;
    if(d.length === 0) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange", !1, !0);
    this.removeListFromIdMap(d);
    this.removeListFromUniqueMap(d);
    this.all.removeList(d);
    this.cleanList(d);
    if(e.isNull(c) || c.undo !== !0) {
      this._history.push({_action:this._consts._removeList, _target:d}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onRemoveDatalist", [d, c], !0);
    this.grid.event.trigger("onDataChange", !1, !0);
    (c === void 0 || c.noRefresh !== !0) && this.refresh(c);
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
    var c = a._target, d = a._before;
    switch(a._action) {
      case this._consts._add:
        return this.remove(c, {undo:!0});
      case this._consts._addList:
        return this.removeList(c, {undo:!0});
      case this._consts._update:
        return this.update(c, d, {undo:!0});
      case this._consts._updateList:
        for(var a = [], b = 0, i = c.length;b < i;b++) {
          a.push({datarow:c[b], change:d[b]})
        }
        return this.updateList(a, {undo:!0});
      case this._consts._remove:
        return this.add(c, {undo:!0});
      case this._consts._removeList:
        return this.addList(c, {undo:!0})
    }
  };
  b.redo = function() {
    if(this._redoHistory.length === 0) {
      return!1
    }
    var a = this._redoHistory.pop();
    this._history.push(a);
    var c = a._target, d = a._change;
    switch(a._action) {
      case this._consts._add:
        return this.add(c, {undo:!0});
      case this._consts._addList:
        return this.addList(c, {undo:!0});
      case this._consts._update:
        return this.update(c, d, {undo:!0});
      case this._consts._updateList:
        for(var a = [], b = 0, i = c.length;b < i;b++) {
          a.push({datarow:c[b], change:d[b]})
        }
        return this.updateList(a, {undo:!0});
      case this._consts._remove:
        return this.remove(c, {undo:!0});
      case this._consts._removeList:
        return this.removeList(c, {undo:!0})
    }
  };
  b.equals = function(a, c) {
    if(e.isNullOr(a, c)) {
      return!1
    }
    if(a === c) {
      return!0
    }
    this._idMode === this._consts._composite && (this.makeCompositeKey(a), this.makeCompositeKey(c));
    var d = this.idKey;
    return e.isNull(a[d]) || e.isNull(c[d]) ? !1 : a[d] === c[d]
  };
  b.getReal = function() {
    var a = this._consts._notReal;
    return this.all.filter(function(c) {
      return c.hasOwnProperty(a) === !1
    })
  };
  b.filterReal = function(a) {
    var c = this._consts._notReal;
    return a.filter(function(a) {
      return a.hasOwnProperty(c) === !1
    })
  };
  b.isReal = function(a) {
    return e.isNotNull(a) && a.hasOwnProperty(this._consts._notReal) === !1
  };
  b.dropNonReal = function(a) {
    if(!e.isEmptyArray(a)) {
      for(var c = this._consts._notReal, d = a.length - 1;d >= 0;d--) {
        a[d].hasOwnProperty(c) && (delete a[d][c], a.removeAt(d))
      }
    }
  };
  b.removeIdCol = function(a) {
    if(!(this._idMode === this._consts._given || e.isEmptyArray(a))) {
      for(var c = this.idKey, d = 0, b = a.length;d < b;d++) {
        a[d].hasOwnProperty(c) && delete a[d][c]
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
    for(var c = [], d = a.length, b = 0, i, l, j = this._consts._notReal;b < d;b++) {
      if((l = a[b]).hasOwnProperty(j) === !1) {
        for(i in c.push({}), l) {
          l.hasOwnProperty(i) && l.hasOwnProperty(i) && i.substring(0, 3)
        }
      }
    }
    return c
  };
  b.setSorter = function(a) {
    this.grid.event.trigger("onChangeSorter", [this._sorter, a], !0);
    this._sorter = a
  };
  b._sort = function(a) {
    e.isNull(a) ? a = this._sorter : this.setSorter(a);
    if(!e.isNull(a)) {
      var c = this.all;
      this.grid.event.trigger("onBeforeSort", [c], !0);
      e.isNotNull(a.comparator) ? (c.sort(a.comparator), a.desc && c.reverse()) : e.isNotNull(a.lexi) && this.constructor._lexi(c, a.lexi, a.desc);
      this.grid.event.trigger("onAfterSort", [c], !0)
    }
  };
  b.addFilter = function(a) {
    this._filters.push(a);
    this.refresh()
  };
  b.removeFilter = function(a) {
    var c = this._filters.length;
    this._filters.remove(a);
    c !== this._filters.length && this.refresh()
  };
  b._filter = function() {
    var a = this.datalist, c = this.failed, d = 0, b = this._filters.length, i, l;
    this.grid.event.trigger("onBeforeFilter", [a, c], !0);
    a.length = 0;
    a.pushList(this.all);
    for(c.length = 0;d < b;d++) {
      i = this._filters[d];
      for(l = a.length - 1;l >= 0;l--) {
        i(a[l]) || (c.push(a[l]), a.removeAt(l))
      }
    }
    this.grid.event.trigger("onFilter", [a, c], !0);
    this.grid.event.trigger("onAfterFilter", [a, c], !0)
  };
  b._finish = function(a) {
    this._reidx();
    this.grid.event.trigger("onAfterRefresh", [a], !0)
  };
  b.refresh = function(a) {
    this.grid.event.trigger("onBeforeRefresh", !1, !0);
    a ? a.noSort || this._sort(a.sorter) : this._sort();
    (!a || !a.noFilter) && this._filter();
    this._finish(a)
  };
  b.exportRowToArray = function(a, c) {
    if(!(a in this.datalist)) {
      return null
    }
    c || (c = this.grid.colDefMgr.getKeys());
    for(var d = this.datalist[a], b = [], i, l = 0, j = c.length;l < j;l++) {
      i = c[l], b.push(i in d ? d[i] : null)
    }
    return b
  };
  b.exportToArray = function(a, c, d) {
    a || (a = this.grid.colDefMgr.getKeys());
    for(var c = this.datalist.slice(c, d), b = [], i, l, j = 0, e = c.length, f, h = a.length;j < e;j++) {
      i = c[j];
      f = 0;
      for(d = [];f < h;f++) {
        l = a[f], d.push(l in i ? i[l] : null)
      }
      b.push(d)
    }
    return b
  };
  f._lexi = function(a, c, d) {
    var b = Object.prototype.toString;
    Object.prototype.toString = e.isFunction(c) ? c : function() {
      return this[c]
    };
    a.sort();
    Object.prototype.toString = b;
    d && a.reverse()
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
    var a, c = this._map;
    for(a in c) {
      c.hasOwnProperty(a) && h._deleteArray(c, a)
    }
    h._destroy(this, {name:"EventManager", path:"event", map:"_map"})
  };
  b.register = function(a, c, d) {
    if(e.isString(a)) {
      this._parseAndAdd(a, c, d)
    }else {
      if(e.isNotNull(a.e)) {
        this._parseAndAdd(a.e, a.f, a.t)
      }else {
        for(var b, c = a.length, i;b < c;b++) {
          e.isNotNull(i = a[b]) && this._parseAndAdd(i.e, i.f, i.t)
        }
      }
    }
  };
  b.bind = function(a, c, d) {
    if(e.isString(a)) {
      this._parseAndAdd(a, c, d)
    }else {
      for(var b in a) {
        a.hasOwnProperty(b) && this._parseAndAdd(b, a[b], c)
      }
    }
  };
  b._parseAndAdd = function(a, c, d) {
    e.isNull(d) && (d = window);
    var a = e.split(a), b = a.length, i = 0;
    if(e.isFunction(c)) {
      for(;i < b;i++) {
        this._addHandler(a[i], c, d)
      }
    }else {
      if(e.isString(c)) {
        for(var c = e.split(c), l = c.length, j, f;i < b;i++) {
          j = a[i];
          for(f = 0;f < l;f++) {
            this._addHandler(j, d[c[f]], d)
          }
        }
      }else {
        for(l = c.length;i < b;i++) {
          j = a[i];
          for(f = 0;f < l;f++) {
            this._addHandler(j, c[f], d)
          }
        }
      }
    }
  };
  b._addHandler = function(a, c, d) {
    this._map.hasOwnProperty(a) || (this._map[a] = []);
    this._map[a].push({fn:c, target:d})
  };
  b.unregister = function(a, c) {
    var d = this._map;
    if(d.hasOwnProperty(a)) {
      var b = d[a];
      if(e.isNull(c)) {
        b.length = 0, delete d[a]
      }else {
        for(var i = 0, l = b.length;i < l;i++) {
          if(b[i].fn === c) {
            b.removeAt(i);
            b.length === 0 && delete d[a];
            break
          }
        }
      }
    }
  };
  b.trigger = function(a, c, d, b) {
    this.grid.log("firing event=" + a, 3);
    var i = this._map;
    if(i.hasOwnProperty(a)) {
      var i = i[a], l = i.length;
      if(l) {
        if(this.grid.log(l + " handlers registered for event=" + a, 4), a = 0, d) {
          if(c && c.length) {
            for(;a < l;a++) {
              d = i[a], d.fn.apply(d.target, c)
            }
          }else {
            for(;a < l;a++) {
              d = i[a], d.fn.call(d.target)
            }
          }
        }else {
          b = b || [];
          if(c && c.length) {
            for(;a < l;a++) {
              d = i[a], b.push(d.fn.apply(d.target, c))
            }
          }else {
            for(;a < l;a++) {
              d = i[a], b.push(d.fn.call(d.target))
            }
          }
          return b
        }
      }else {
        this.grid.log("no handlers registered for event=" + a, 4)
      }
    }else {
      this.grid.log("no handlers registered for event=" + a, 4)
    }
  };
  b.triggerMultiple = function(a, c, d) {
    var a = a.split(","), b = 0, i = a.length;
    if(d) {
      for(d = [];b < i;b++) {
        this.trigger(a[b], c, !1, d)
      }
      return d
    }else {
      for(;b < i;b++) {
        this.trigger(a[b], c, !0)
      }
    }
  };
  b.triggerInvalid = function(a, c) {
    var d = this.trigger(a, c);
    return d && d.some(function(a) {
      return a === !1
    })
  };
  b.sendToBack = function(a, c) {
    for(var d = this._map[a], b = d.length, i, l = -1, j = 0;j < b;j++) {
      if(d[j].fn === c) {
        l = j;
        i = d[j];
        break
      }
    }
    l > -1 && (d.removeAt(j), d.push(i))
  };
  b.sendToFront = function(a, c) {
    for(var d = this._map[a], b = d.length, i, l = -1, j = 0;j < b;j++) {
      if(d[j].fn === c) {
        l = j;
        i = d[j];
        break
      }
    }
    l > -1 && (d.removeAt(j), d.unshift(i))
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
  b.addChildAt = function(a, c) {
    var d;
    if(this.hasChild(c)) {
      d = this.childrenMap[c.nodeId];
      if(d === a) {
        return
      }
      this.children.removeAt(d)
    }
    this.children.addAt(a, c);
    e.isNotNull(d) && d < a ? this.resetChildIdx(d) : this.resetChildIdx(a);
    c.setParent(this)
  };
  b.removeChild = function(a) {
    if(this.hasChild(a)) {
      var c = this.childrenMap[a.nodeId];
      this.children.removeAt(c);
      delete this.childrenMap[a.nodeId];
      this.resetChildIdx(c);
      delete a.parent;
      delete a.level
    }
  };
  b.removeChildAt = function(a) {
    var c = this.children[a];
    this.children.removeAt(a);
    delete this.childrenMap[c.nodeId];
    this.resetChildIdx(a);
    delete c.parent;
    delete c.level
  };
  b.resetChildIdx = function(a) {
    e.isNull(a) && (a = 0);
    for(var c = this.children, d = c.length, b = this.childrenMap;a < d;a++) {
      b[c[a].nodeId] = a
    }
  };
  b.removeAllChildren = function() {
    for(var a = 0, c = this.children, d = c.length;a < d;a++) {
      delete c[a].parent, delete c[a].level
    }
    c.length = 0;
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
    return this.traverse({fn:function(c) {
      if(this.data === a) {
        c.res = this, c.stop = !0
      }
    }}).res
  };
  b.traverse = function(a, c) {
    if(a.stop) {
      return a
    }
    if(a.up) {
      this.isRoot() ? this.callFn(a) : a.post ? (this.parent.traverse(a), this.callFn(a)) : (this.callFn(a), this.parent.traverse(a))
    }else {
      var d = 0, b = this.children, i = b.length;
      if(a.post) {
        for(;d < i;d++) {
          b[d].traverse(a, d)
        }
        this.callFn(a, c)
      }else {
        if(this.callFn(a, c), a.propagate === !1) {
          delete a.propagate
        }else {
          for(;!a.stop && d < i;d++) {
            b[d].traverse(a, d)
          }
        }
      }
    }
    return a
  };
  b.traverseChildren = function(a) {
    for(var c = 0, d = this.children, b = d.length;c < b;c++) {
      d[c].traverse(a, c)
    }
  };
  b.traverseParent = function(a) {
    e.isNotNull(this.parent) && this.parent.traverse(a)
  };
  b.callFn = function(a, c) {
    if(!a.stop) {
      e.isNull(a.target) ? e.callFn(this, a.fn, a, c) : (a.node = this, e.callFn(a.target, a.fn, a, c))
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
    var a, c = this.infants;
    for(a in c) {
      if(c.hasOwnProperty(a)) {
        c[a].length = 0
      }
    }
    this.infants = {}
  };
  b.reattach = function(a) {
    this.detach();
    if(e.isNull(a)) {
      a = this.list
    }
    for(var c = this._options.nodeKey, d = this.map, b = a.length, i = 0;i < b;i++) {
      this.attachNode(d[a[i][c]])
    }
  };
  b.makeTree = function(a) {
    if(e.isNull(a)) {
      a = this.list
    }
    for(var c = 0, d = a.length;c < d;c++) {
      this.createNode(a[c])
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
      var c = a[this._options.nodeKey], a = new f({tree:this, data:a, nodeId:c});
      this.map[c] = a;
      this.attachNode(a);
      return a
    }
  };
  b.adoptInfants = function(a, c) {
    if(this.infants.hasOwnProperty(c)) {
      for(var d = this.infants[c], b = 0, i = d.length;b < i;b++) {
        a.addChild(d[b])
      }
      d.length = 0;
      delete this.infants[c]
    }
  };
  b.attachNode = function(a) {
    var c = a.nodeId, d = a.data[this._options.parentKey];
    this.adoptInfants(a, c);
    if(e.isNull(d) || d == c) {
      return this.root.addChild(a), !0
    }
    if(this.map.hasOwnProperty(d)) {
      return this.map[d].addChild(a), !0
    }
    this.addToInfants(a, d);
    return!1
  };
  b.changeNodeId = function(a, c, d) {
    if(c !== d) {
      delete this.map[c], this.map[d] = a, this.removeChildren(a), a.nodeId = a.data[this._options.nodeKey] = d, e.isNotNull(a.parent) && (a.parent.childrenMap[d] = a.parent.childrenMap[c], delete a.parent.childrenMap[c]), this.adoptInfants(a, d)
    }
  };
  b.changeParentId = function(a, c, d) {
    c !== d && (e.isNull(a.parent) && this.removeFromInfants(a, c), c = this.map[d], a.setParent(c), a.data[this._options.parentKey] = d, e.isNull(c) && this.addToInfants(a, d))
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
  b.addToInfants = function(a, c) {
    this.infants.hasOwnProperty(c) || (this.infants[c] = []);
    this.infants[c].push(a)
  };
  b.removeFromInfants = function(a, c) {
    e.isNull(c) && (c = a.data[this._options.parentKey]);
    this.infants.hasOwnProperty(c) && (this.infants[c].remove(a), this.infants[c].length === 0 && delete this.infants[c])
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
  function f(c) {
    this.mid = c.mid;
    this.log("creating new Grid instance...", d);
    a.call(this, c)
  }
  var h = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util"), b = goog.getObjectByName("echo"), a = goog.getObjectByName("jx.grid.BaseModule"), c = goog.getObjectByName("TimeWatch"), d = 1;
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
  f.V_INIT = d;
  goog.inherits(f, a);
  f.getInstance = function(a) {
    return new f(a)
  };
  var g = f.prototype;
  g._defaultOptions = function() {
    return{classGrid:"jgrid", border:"1px solid #868686", width:void 0, font:"15px Arial,Helvetica,sans-serif", style:"", borderSide:!0, imageUrl:"../images/", links:{data:"dataMgr.all", datalen:"dataMgr.all.length", shown:"dataMgr.datalist", set:"dataMgr.set", add:"dataMgr.add", addList:"dataMgr.addList", update:"dataMgr.update", updateByKey:"dataMgr.updateByKey", updateList:"dataMgr.updateList", remove:"dataMgr.remove", removeList:"dataMgr.removeList", select:"dataMgr.executeSelect", undo:"dataMgr.undo", 
    redo:"dataMgr.redo", addFilter:"dataMgr.addFilter", removeFilter:"dataMgr.removeFilter", check:"collapser.checkMgr.checkList checkMgr.checkList", checked:"collapser.checkMgr.getCheckList checkMgr.getCheckList", removeChecked:"collapser.checkMgr.removeChecked checkMgr.removeChecked", register:"event.register", trigger:"event.trigger", bind:"event.bind", unregister:"event.unregister", unbind:"event.unregister", commit:"editMgr.commit", cancelEdit:"editMgr.cancel", beginEdit:"editMgr.begin", collen:"colDefMgr.length"}, 
    autoWidth:!1, showMessage:!1}
  };
  g._init = function(a) {
    var c = this._ctnr = a.container, d = this._options, b;
    this.name = d.name;
    this._drag = !1;
    this._lastH = this._lastW = null;
    this._vars = {scrollbarDim:void 0};
    c = this._ctnr = $("<div id='" + this.mid + "' class='" + d.classGrid + "' " + (e.isNull(d.width) ? "" : "style='width:" + d.width + "px' ") + "tabIndex='0'>").appendTo(Util$.safe$(c));
    this._vars.scrollbarDim = Util$.calScrollbarDims(c);
    b = this.event = h.create("EventManager", {grid:this, options:d.EventManager});
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
    d.autoWidth && b.bind("onResizeCanvasWidth", this.width, this);
    this._createCss();
    b.trigger("onBeforeRenderModules", !1, !0);
    b.trigger("onRenderModules", !1, !0);
    b.trigger("onAfterRenderModules", !1, !0);
    this.msg = $("<div id='" + this.mid + "msg' class='msg' onmousedown='$(this).hide(1000)' style='position:relative;padding-left:4px;overflow:hidden;z-index:100;font-size:12px;height:21px;line-height:21px'></div>").appendTo(c).hide();
    this._busyShader = $('<div style="position:absolute;background:black;opacity:0.3;filter:alpha(opacity=30)"></div>').appendTo(c).hide();
    c = c[0];
    this._lastW = c.clientWidth;
    this._lastH = c.clientHeight;
    this._registerLinks(d.links)
  };
  g._bindEvents = function() {
    h._bindGlobalEvents();
    this.log("binding Grid events...", d);
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
    this.log("destroying Grid...", d);
    try {
      var a = h.grids.indexOf(this);
      a > -1 && h.grids.splice(a, 1);
      this.name != null && delete h.gridMap[this.name];
      this.log("event:beforeDispose.", d);
      this.dispatchEvent({type:"beforeDispose"});
      e.isEmptyObj(h.m.Grid) && (this.log("unbinding global event handlers.", d), h._unbindGlobalEvents());
      this.log("event:onDestroy.", d);
      this.event.trigger("onDestroy", !1, !0);
      this.log("destroying grid vars...", d);
      h._destroy(this, {name:"Grid", module:"event", $:"_ctnr", map:"_options", style:"_style _dynStyle"});
      this.dispose()
    }catch(c) {
      return c
    }
  };
  g._registerLinks = function(a) {
    var c, d, b, g, f, h, o, m, r, s;
    a:for(c in a) {
      if(a.hasOwnProperty(c) && !(c in this)) {
        d = e.split(a[c]);
        b = d.length;
        g = 0;
        b:for(;g < b;g++) {
          if(f = d[g].split("."), h = f.length, !(h < 1)) {
            o = this;
            m = this;
            r = "";
            for(s = 0;s < h;s++) {
              if(f[s] in o) {
                m = o, o = o[r = f[s]]
              }else {
                continue b
              }
            }
            this._registerLink(c, o, m, r);
            continue a
          }
        }
      }
    }
  };
  g._registerLink = function(a, c, d, b) {
    if(this.hasOwnProperty(a)) {
      return!1
    }
    this[a] = e.isFunction(c) ? function() {
      return c.apply(d, arguments)
    } : function() {
      return d[b]
    };
    return!0
  };
  g._createCss = function() {
    this.log("creating CSS...", d);
    var a = {type:"beforeCreateCss", css:[]}, c = this._options, b = this.event;
    this.dispatchEvent(a);
    this.log("creating CSS for Grid...", d);
    var g = b.trigger("onCreateCss"), g = g ? g.join("") : "", a = e.sprint("%selector%{overflow:hidden;font:%font%;%border%%style%}%submodule%", {selector:"#" + this.mid, font:c.font, border:c.borderSide ? "border:" + c.border + ";" : "border-top:" + c.border + ";border-bottom:" + c.border + ";", style:c.style, submodule:a.css.join("") + g});
    this._style = e.createStyle(a);
    a = {type:"beforeCreateDynamicCss", css:[]};
    this.dispatchEvent(a);
    g = (g = b.trigger("onCreateDynamicCss")) ? g.join("") : "";
    this._dynStyle = e.createStyle(a.css.join("") + ";" + g)
  };
  g._recreateDynamicCss = function() {
    this.log("rewriting dynamic css...", 2);
    var a = this.event.trigger("onCreateDynamicCss");
    (a = a ? a.join("") : "") && e.setStyle(this._dynStyle, a)
  };
  g._keydown = function(a) {
    var c = this.event, d = [a], b = a.which;
    this.log("UI event:keydown detected. event=" + a.type + ", keycode=" + b, 3);
    c.triggerInvalid("onBeforeKeydown", d) ? this.log("UI event:keydown prevented.", 3) : (c.trigger("keydown_" + b, d, !0), c.trigger("keydown", d, !0))
  };
  g._keyup = function(a) {
    var c = this.event, d = [a], b = a.which;
    this.log("UI event:keyup detected. event=" + a.type + ", keycode=" + b, 3);
    c.triggerInvalid("onBeforeKeyup", d) ? this.log("UI event:keyup prevented.", 3) : (c.trigger("keyup_" + b, d, !0), c.trigger("keyup", d, !0))
  };
  g._keypress = function(a) {
    var c = this.event, d = [a], b = a.which;
    this.log("UI event:keypress detected. event=" + a.type + ", keycode=" + b, 3);
    c.triggerInvalid("onBeforeKeypress", d) ? this.log("UI event:keypress prevented.", 3) : (c.trigger("keypress_" + b, d, !0), c.trigger("keypress", d, !0))
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
    var d = !1, b = this._ctnr[0], g = this._lastW, e = this._lastH, f = b.clientWidth, b = b.clientHeight;
    if(f >= 1 && g !== f) {
      this.log("event:resizeWidth detected. " + g + "->" + f, 2), c.trigger("resizeWidth", [f, g], !0), this._lastW = f, d = !0
    }
    if(b >= 1 && e !== b) {
      this.log("event:resizeHeight detected. " + e + "->" + b, 2), c.trigger("resizeHeight", [b, e], !0), this._lastH = b, d = !0
    }
    d && c.trigger("resize", [a], !0)
  };
  g.width = function(a) {
    var c = this._ctnr[0], d = c.clientWidth, b = this.event;
    if(!a) {
      return d
    }
    typeof a != "number" && (a = parseInt(a, 10));
    if(a < 1 || a === d || !isFinite(a)) {
      return d
    }
    this.log("set width. " + this._lastW + "->" + a, 2);
    c.style.width = a + "px";
    b.trigger("resizeWidth", [a, this._lastW], !0);
    this._lastW = a;
    b.trigger("resize", !1, !0);
    return a
  };
  g.height = function(a) {
    var c = this._ctnr[0], d = c.clientHeight, b = this.event;
    if(!a) {
      return d
    }
    typeof a != "number" && (a = parseInt(a, 10));
    if(a < 1 || a === d || !isFinite(a)) {
      return d
    }
    this.log("set height. " + this._lastH + "->" + a, 2);
    c.style.height = a + "px";
    b.trigger("resizeHeight", [a, this._lastH], !0);
    this._lastH = a;
    b.trigger("resize", !1, !0);
    return a
  };
  g.syncScroll = function() {
    this.view._scroll()
  };
  g.getCellByIdAndKey = function(a, c) {
    if(a == null || c == null) {
      return null
    }
    var d = this.dataMgr.getById(a);
    if(!d) {
      return null
    }
    var b = this.colDefMgr.getByKey(c);
    return!b ? null : h.create("Cell", {grid:this, datarow:d, colDef:b})
  };
  g.getCellByIdx = function(a, c) {
    if(a == null || c == null) {
      return null
    }
    var d = this.dataMgr.getByIdx(a);
    if(!d) {
      return null
    }
    var b = this.colDefMgr.get(c);
    return!b ? null : h.create("Cell", {grid:this, datarow:d, colDef:b})
  };
  g.busy = function() {
    if(this._busyShader && !this._busy) {
      var a = this._ctnr, c = a.offset(), d = a[0], a = d.clientWidth + 1, d = d.clientHeight + 1, b = this._busyShader, g = b[0].style;
      g.top = c.top + "px";
      g.left = c.left + "px";
      g.width = a + "px";
      g.height = d + "px";
      b.show()
    }
    this._busy = !0
  };
  g.idle = function() {
    this._busyShader && this._busy && this._busyShader.hide();
    this._busy = !1
  };
  g.error = function(a) {
    for(var c = h.error[a], d = 1, b = arguments.length;d < b;d++) {
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
      var c = this.msg, d = c[0], b = d.style;
      d.innerHTML = a;
      b.width = this._ctnr[0].clientWidth + "px";
      b.background = "#ffebe8";
      b.color = "#333";
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
      var c = this.msg, d = c[0], b = d.style;
      d.innerHTML = a;
      b.width = this._ctnr[0].clientWidth + "px";
      b.background = "#dfdfdf";
      b.color = "#6f6f6f";
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
    this._tw = new c(a)
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
  g.chart = function(a, c, b, g, e, f) {
    this.log("creating chart... type=" + c + ", columns=[" + b.join(",") + "]", d);
    var h, o, c = c.toLowerCase();
    switch(c) {
      case "area":
        h = "corechart";
        o = "AreaChart";
        break;
      case "bar":
        h = "corechart";
        o = "BarChart";
        break;
      case "candle":
        h = "corechart";
        o = "CandlestickChart";
        break;
      case "column":
        h = "corechart";
        o = "ColumnChart";
        break;
      case "combo":
        h = "corechart";
        o = "ComboChart";
        break;
      case "gauge":
        h = "gauge";
        o = "Gauge";
        break;
      case "geo":
        h = "geochart";
        o = "GeoChart";
        break;
      case "line":
        h = "corechart";
        o = "LineChart";
        break;
      case "pie":
        h = "corechart";
        o = "PieChart";
        break;
      case "scatter":
        h = "corechart";
        o = "ScatterChart";
        break;
      case "table":
        h = "table";
        o = "Table";
        break;
      case "treemap":
        h = "treemap";
        o = "TreeMap";
        break;
      default:
        throw Error("unknown chart type: " + c);
    }
    google.load("visualization", "1", {packages:[h]});
    var m = this, r = this.colDefMgr, s = this.dataMgr, t = b.map(function(a) {
      if(a = r.getByKey(a)) {
        return a
      }
      throw Error("column key not found");
    }), v = s.exportToArray(b, e, f);
    google.setOnLoadCallback(function() {
      for(var d = new google.visualization.DataTable, e = 0, f = t.length, k, h;e < f;e++) {
        k = t[e];
        h = k.type;
        switch(h) {
          case "boolean":
            h = "boolean";
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
            h = "number";
            break;
          case "string":
          ;
          case "text":
            h = "string"
        }
        d.addColumn(h || e === 0 && "string" || "number", k.name)
      }
      d.addRows(v);
      var n = m._charts[a] = new google.visualization[o](document.getElementById(a));
      n.draw(d, g);
      m.event.bind("onAfterRefresh", function() {
        m.log("redrawing chart... type=" + c + ", columns=[" + b.join(",") + "]", 2);
        d.removeRows(0, d.getNumberOfRows());
        d.addRows(s.exportToArray(b));
        n.draw(d, g)
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
    var a, d = this._rows, b = this._cols;
    for(a in d) {
      d.hasOwnProperty(a) && a !== "length" && h._deleteMap(d, a)
    }
    for(a in b) {
      b.hasOwnProperty(a) && a !== "length" && h._deleteMap(b, a)
    }
    h._destroy(this, {name:"SelectionManager", path:"selMgr", map:"_rows _cols _range _last _consts _options"})
  };
  a._onCreateCss = function() {
    var a = this.grid.event.trigger("onBeforeCreateSelCss"), d = "#" + this.grid.mid + " .", b = this._options, a = a || [];
    b.highlightRowEnabled === !0 && a.push(d + b.classRowSelected + " > *{background:" + b.bgColorRowSelected + "}");
    b.multiSelectEnabled === !0 && (a.push(d + b.classSelection + "{background:" + b.bgColorSelection + "}"), a.push(d + b.classRange + "{background:" + b.bgColorRange + "}"));
    a.push(d + b.classLast + "{background:" + b.bgColorLast + "}");
    return a.join("\n")
  };
  a._onGetCellClass = function(a, d, b, i) {
    var l = "", j = this._last, f = this._range, h = this._rows, q = this._options;
    e.isNotNull(j) && j.getDatarow() === b && j.getColDef() === i && (l += q.classLast);
    q.multiSelectEnabled === !0 && (e.isNotNull(f) && f.getDatarow() === b && f.getColDef() === i && (l += " " + q.classRange), h.hasOwnProperty(a) && h[a].hasOwnProperty(d) && (l += " " + q.classSelection));
    return l
  };
  a._mousedownCanvas = function(a, d) {
    if(!e.isNotNull(this._last) || !this._last.equals(d)) {
      this.grid.event.trigger("onBeforeSelect", [a, d], !0), this._options.multiSelectEnabled === !1 ? this.selectCell(d) : a.shiftKey && e.isNotNullAnd(this._last, this._range) ? this.selectRange(d) : a.ctrlKey ? d.getKey() === this._options.rowSelKey ? this.addRow(d) : this.addCell(d) : this.selectCell(d)
    }
  };
  a._dragoverCanvas = function(a, d) {
    this._options.multiSelectEnabled === !1 ? this.selectCell(d) : e.isNotNullAnd(this._last, this._range) && this.selectRange(d)
  };
  a._keydownCanvas = function(a) {
    var d = this._last;
    if(e.isNullOr(d, this._range)) {
      this._consts._NAVKEYS[a.which] && this.selectCell(h.create("Cell", {grid:this.grid, row:this.grid.view._getFirstSafeVisibleRow(), col:this.grid.view._getFirstSafeVisibleCol()}))
    }else {
      var b = this.grid.event;
      if(this._consts._NAVKEYS[a.which]) {
        if(!b.triggerInvalid("onBeforeNavigate", [a])) {
          var i;
          a.preventDefault();
          switch(a.which) {
            case e.keyMapKeydown.tab:
              i = a.shiftKey ? this._idxToCell(this._consts._LEFT, d) : this._idxToCell(this._consts._RIGHT, d);
              this.selectCell(i);
              break;
            case e.keyMapKeydown.enter:
              i = a.shiftKey ? this._idxToCell(this._consts._UP, d) : this._idxToCell(this._consts._DOWN, d);
              this.selectCell(i);
              break;
            case e.keyMapKeydown.up:
              this._options.multiSelectEnabled && a.shiftKey ? (i = this._idxToCell(this._consts._UP, this._range), this.selectRange(i)) : (i = this._idxToCell(this._consts._UP, d), this.selectCell(i));
              break;
            case e.keyMapKeydown.down:
              this._options.multiSelectEnabled && a.shiftKey ? (i = this._idxToCell(this._consts._DOWN, this._range), this.selectRange(i)) : (i = this._idxToCell(this._consts._DOWN, d), this.selectCell(i));
              break;
            case e.keyMapKeydown.left:
              this._options.multiSelectEnabled && a.shiftKey ? (i = this._idxToCell(this._consts._LEFT, this._range), this.selectRange(i)) : (i = this._idxToCell(this._consts._LEFT, d), this.selectCell(i));
              break;
            case e.keyMapKeydown.right:
              this._options.multiSelectEnabled && a.shiftKey ? (i = this._idxToCell(this._consts._RIGHT, this._range), this.selectRange(i)) : (i = this._idxToCell(this._consts._RIGHT, d), this.selectCell(i));
              break;
            case e.keyMapKeydown.pgup:
              this._options.multiSelectEnabled && a.shiftKey ? (i = this._idxToCell(this._consts._PGUP, this._range), this.selectRange(i)) : (i = this._idxToCell(this._consts._PGUP, d), this.selectCell(i));
              break;
            case e.keyMapKeydown.pgdn:
              this._options.multiSelectEnabled && a.shiftKey ? (i = this._idxToCell(this._consts._PGDN, this._range), this.selectRange(i)) : (i = this._idxToCell(this._consts._PGDN, d), this.selectCell(i));
              break;
            case e.keyMapKeydown.space:
              i = a.shiftKey ? this._idxToCell(this._consts._PGUP, d) : this._idxToCell(this._consts._PGDN, d);
              this.selectCell(i);
              break;
            case e.keyMapKeydown.home:
              this._options.multiSelectEnabled && a.shiftKey ? (i = this._idxToCell(this._consts._HOME, this._range), this.selectRange(i)) : (i = this._idxToCell(this._consts._HOME, d), this.selectCell(i));
              break;
            case e.keyMapKeydown.end:
              this._options.multiSelectEnabled && a.shiftKey ? (i = this._idxToCell(this._consts._END, this._range), this.selectRange(i)) : (i = this._idxToCell(this._consts._END, d), this.selectCell(i))
          }
          b.trigger("onAfterNavigate", [i], !0)
        }
      }else {
        if(this._cols.length === 1) {
          var l, j = this.grid.colDefMgr, f, k = this._cols;
          i = a.which;
          var q = [a, null, d];
          for(f in k) {
            if(k.hasOwnProperty(f) && f !== "length") {
              l = j.get(f).key, l = "keydownColSel_" + l, q[1] = k[f], b.trigger(l + "_" + i, q, !0), b.trigger(l, q, !0)
            }
          }
        }
        if(this._rows.length === 1) {
          var n;
          f = this._rows;
          i = a.which;
          q = [a, null, d];
          for(n in f) {
            f.hasOwnProperty(n) && n !== "length" && (q[1] = f[n], b.trigger("keydownRowSel_" + i, q, !0), b.trigger("keydownRowSel", q, !0))
          }
        }
        q = [a, this._rows, this._cols];
        b.trigger("keydownSel_" + a.which, q, !0);
        b.trigger("keydownSel", q, !0)
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
  a._getCellIdxToNavigate = function(a, d, b) {
    switch(a) {
      case this._consts._RIGHT:
        b < this.grid.colDefMgr.length() - 1 && b++;
        break;
      case this._consts._LEFT:
        b > 0 && b--;
        break;
      case this._consts._DOWN:
        d < this.grid.dataMgr.datalist.length - 1 && d++;
        break;
      case this._consts._UP:
        d > 0 && d--;
        break;
      case this._consts._PGDN:
        d += this.grid.view._options.rowsPerPage;
        d > this.grid.dataMgr.datalist.length - 1 && (d = this.grid.dataMgr.datalist.length - 1);
        break;
      case this._consts._PGUP:
        d -= this.grid.view._options.rowsPerPage;
        d < 0 && (d = 0);
        break;
      case this._consts._HOME:
        d = 0;
        break;
      case this._consts._END:
        d = this.grid.dataMgr.datalist.length - 1
    }
    return[d, b]
  };
  a._idxToCell = function(a, d) {
    var b = this._getCellIdxToNavigate(a, d.getRowIdx(), d.getColIdx());
    return h.create("Cell", {grid:this.grid, row:b[0], col:b[1]})
  };
  a.selectRow = function(a) {
    var d = a.getRowIdx(), b = a.getColIdx();
    this._setRange(d, b, a);
    this._setLast(d, b, a);
    this._setSelMap(this._getRowMap(d, b, a))
  };
  a.selectCell = function(a, d) {
    this.grid.event.trigger("onBeforeSelectCell", [a], !0);
    if(this._options.multiSelectEnabled && a.getKey() === this._options.rowSelKey) {
      this.selectRow(a)
    }else {
      var b = a.getRowIdx(), i = a.getColIdx();
      this._setRange(b, i, a, d);
      this._setLast(b, i, a);
      this._setSelMap(this._getCellMap(b, i, a))
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
    var d = a.getRowIdx(), b = a.getColIdx();
    this._setRange(d, b, a);
    this._setLast(d, b, a);
    this._addSelMap(this._getRowMap(d, b, a))
  };
  a.addCell = function(a) {
    var d = a.getRowIdx(), b = a.getColIdx();
    this._setRange(d, b, a);
    this._setLast(d, b, a);
    this._addSelMap(this._getCellMap(d, b, a))
  };
  a.selectRange = function(a) {
    var d = a.getRowIdx(), b = a.getColIdx(), i = this._last.getRowIdx(), e = this._last.getColIdx(), j = i < d ? i : d, i = i < d ? d : i, f;
    this._setRange(d, b, a);
    a.getKey() === this._options.rowSelKey ? (f = 0, e = this.grid.colDefMgr.length() - 1) : (f = e < b ? e : b, e = e < b ? b : e);
    this._setSelMap(this._getRangeMap(j, f, i, e, d, b, a));
    return{minRow:j, minCol:f, maxRow:i, maxCol:e}
  };
  a._setLast = function(a, d, b) {
    var d = this._last, i;
    e.isNotNull(d) && (i = d.getRowIdx(), a !== i && e.isNotNull(this._range) && i !== this._range.getRowIdx() && this.grid.view.unlockRowById(d.getId()), d.get$().removeClass(this._options.classLast), this._options.highlightRowEnabled === !0 && $(d.getRowNode()).removeClass(this._options.classRowSelected), e.isNull(b) && delete this._last);
    if(!e.isNull(b)) {
      (this._last = b).get$().addClass(this._options.classLast), this._options.highlightRowEnabled === !0 && $(b.getRowNode()).addClass(this._options.classRowSelected), this.grid.view.lockRowByIdx(a)
    }
  };
  a._setRange = function(a, d, b, i) {
    var f = this._range;
    if(e.isNotNull(f)) {
      var j = f.getRowIdx();
      if(a === j && d === f.getColIdx()) {
        return
      }
      a !== j && e.isNotNull(this._last) && j !== this._last.getRowIdx() && this.grid.view.unlockRowById(f.getId());
      f.get$().removeClass(this._options.classRange);
      e.isNull(b) && delete this._range
    }
    if(!e.isNull(b)) {
      (this._range = b).get$().addClass(this._options.classRange), b = this.grid.view, b.lockRowByIdx(a), i || b.scrollToLazy(a, d)
    }
  };
  a._addSelMap = function(a) {
    var d = this._rows, g, i, e, j;
    for(e in a) {
      if(a.hasOwnProperty(e) && (i = a[e], d.hasOwnProperty(e))) {
        for(j in g = d[e], i) {
          i.hasOwnProperty(j) && g.hasOwnProperty(j) && (i[j] instanceof b && (g[j] = i[j]), delete i[j])
        }
      }
    }
    this.addOrRemoveCss({}, !0);
    this._addToMaps(a)
  };
  a._setSelMap = function(a) {
    var d = this._rows, g, i, e, j, f = {};
    for(e in d) {
      if(d.hasOwnProperty(e) && e !== "length") {
        if(g = d[e], a.hasOwnProperty(e)) {
          for(j in i = a[e], g) {
            g.hasOwnProperty(j) && j !== "length" && (i.hasOwnProperty(j) ? (i[j] instanceof b && (g[j] = i[j]), delete i[j]) : (f.hasOwnProperty(e) || (f[e] = {}), f[e][j] = !0))
          }
        }else {
          for(j in i = f[e] = {}, g) {
            g.hasOwnProperty(j) && j !== "length" && (i[j] = !0)
          }
        }
      }
    }
    this._removeFromMaps(f);
    this.addOrRemoveCss({}, !1);
    this._addSelMap(a)
  };
  a.addOrRemoveCss = function(a, d) {
    var g = [], i, f, j, h = this.grid.view;
    for(i in a) {
      if(a.hasOwnProperty(i)) {
        for(f in j = a[i], j) {
          j.hasOwnProperty(f) && (j[f] instanceof b ? g.push(j[f].getNode()) : g.push(h.getCell(i, f)))
        }
      }
    }
    g = g.filter(function(a) {
      return e.isNotNull(a)
    });
    d ? $(g).addClass(this._options.classSelection) : $(g).removeClass(this._options.classSelection)
  };
  a._addToMaps = function(a) {
    var d, b, i, f = this._rows, j = this._cols, h;
    for(d in a) {
      if(a.hasOwnProperty(d)) {
        for(b in h = a[d], h) {
          h.hasOwnProperty(b) && (i = e.isNull(i = h[b]) ? !0 : i, f.hasOwnProperty(d) ? f[d].length++ : (f[d] = {length:1}, f.length++), f[d][b] = i, j.hasOwnProperty(b) ? j[b].length++ : (j[b] = {length:1}, j.length++), j[b][d] = i)
        }
      }
    }
  };
  a._removeFromMaps = function(a) {
    var d, b, i = this._rows, e = this._cols, j;
    for(d in a) {
      if(a.hasOwnProperty(d)) {
        for(b in j = a[d], j) {
          j.hasOwnProperty(b) && (--i[d].length === 0 ? (delete i[d], i.length--) : delete i[d][b], --e[b].length === 0 ? (delete e[b], e.length--) : delete e[b][d])
        }
      }
    }
  };
  a._getCellMap = function(a, d, b) {
    var i = {};
    i[a] = {};
    i[a][d] = b;
    return i
  };
  a._getRowMap = function(a, d, b) {
    var i = {}, e = this.grid.colDefMgr.length(), j = 0;
    for(i[a] = {};j < e;j++) {
      i[a][j] = !0
    }
    i[a][d] = b;
    return i
  };
  a._getRangeMap = function(a, d, b, i, e, j, f) {
    for(var h = {}, q;a <= b;a++) {
      h[a] = {};
      for(q = d;q <= i;q++) {
        h[a][q] = !0
      }
    }
    h[e][j] = f;
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
    failureBackground:"#ff0000"}, a.options);
    this._beginEditKeys = b.which(["number", "alphabet", "del", "backspace"]);
    this.__init()
  }
  function h(a) {
    for(var b in a) {
      a.hasOwnProperty(b) && (this[b] = a[b])
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
  var c = f.prototype;
  c.__init = function() {
    this.bindEvents()
  };
  c.bindEvents = function() {
    var a = {onGetColCellClass:this._onGetColCellClass, keydownCanvas:this._keydownCanvas, onDestroy:this._destroy, dblclickCanvas:this._dblclickCanvas, onCreateDynamicCss:this.onCreateDynamicCss, "onBeforeNavigate onBeforeRefresh onBeforeSelect":this.commit, onBeforeFocusCanvas:this.notActive};
    b.isNull(this.grid.selMgr) ? a.onCreateCss = this._onBeforeCreateSelCss : a.onBeforeCreateSelCss = this._onBeforeCreateSelCss;
    if(this._options.deleteEnabled) {
      a["keydownSel_" + b.keyMapKeydown.del] = this._deleteContents
    }
    if(this._options.editIconEnabled) {
      for(var c = this.grid.colDefMgr.get(), i = c.length, e = 0;e < i;e++) {
        if(b.isNotNull(c[e].editor)) {
          a["onRenderHeader_" + c[e].key + "_prepend"] = this._onRenderHeader
        }
      }
    }
    this.grid.event.bind(a, this)
  };
  c._destroy = function() {
    this._deleteEditor();
    e._destroy(this, {name:"EditManager", path:"editMgr", map:"_beginEditKeys _options"})
  };
  c._onBeforeCreateSelCss = function() {
    var a = "#" + this.grid.mid + " .", b = this._options, c = [], e = this.grid.view._getRowInnerHeight();
    c.push(this.grid.view._getCellSelector() + "." + b.classEdit + "{background:" + b.basicBackground + "}");
    c.push(a + b.classEdit + " input{position:absolute;z-index:10;top:0;padding:0;border:0;margin:0;background:" + b.basicBackground + ";height:" + e + "px;line-height:" + e + "px}");
    b.editableBgEnabled && c.push(a + b.classCellEditable + "{background:" + b.editableBg + "}");
    b.notEditableBgEnabled && c.push(a + b.classCellNotEditable + "{background:" + b.notEditableBg + "}");
    b.editIconEnabled && c.push(a + b.classEditIcon + "{float:left;position:absolute;left:0;top:0;padding:0 " + b.editIconPadding + "px;width:" + b.editIconWidth + "px;height:" + e + "px;background:url(" + b.urlEditIcon + ") no-repeat center transparent}");
    c.push(a + b.classSuccess + "{background:" + b.successBackground + "}");
    c.push(a + b.classFailure + "{background:" + b.failureBackground + "}");
    return c.join("")
  };
  c.onCreateDynamicCss = function() {
    for(var a = this.grid.view._getCellSelector(), c = this.grid.view._getPadding(), i = this.grid.colDefMgr.get(), e = 0, j = "";e < i.length;e++) {
      b.isNotNull(i[e].editor) && (j += a + ".k_" + i[e].key + " .basic-editor{width:" + (i[e].width - 2 * c) + "px}")
    }
    return j
  };
  c._onRenderHeader = function(a) {
    a.push("<span class='" + this._options.classEditIcon + "'></span>")
  };
  c._onRenderCell = function(a, b, c, e, j) {
    this.grid.dataMgr.isReal(c) && j.push("<span class='" + this._options.classEditIcon + "' title='클릭하여 에디팅을 시작합니다' onclick='JGM.m.EditManager." + this.mid + '.beginEdit("' + c[this.grid.dataMgr.idKey] + '","' + e.key + "\")'></span>")
  };
  c.cancelMouseEvent = function(a) {
    return!b.hasTagAndClass(a.target, "DIV", this._options.classEditIcon)
  };
  c.beginEdit = function(a, b) {
    this.begin(e.create("Cell", {grid:this.grid, datarow:this.grid.dataMgr.getById(a), colDef:this.grid.colDefMgr.getByKey(b)}))
  };
  c._dblclickCanvas = function(a, b) {
    b.isEdited() || this.begin(b)
  };
  c._keydownCanvas = function(a) {
    this.active() ? a.which === b.keyMapKeydown.esc && this.cancel() : !a.ctrlKey && !a.altKey && b.isNotNull(this.grid.selMgr) && (a.which === b.keyMapKeydown.del && this._options.deleteEnabled ? this._deleteContent(this.grid.selMgr.getCell()) : this._beginEditKeys[a.which] ? this.begin(this.grid.selMgr.getCell()) : a.which === b.keyMapKeydown.f2 && (a.preventDefault(), this.begin(this.grid.selMgr.getCell())))
  };
  c.active = function() {
    return!!this.editor
  };
  c.notActive = function() {
    return b.isNull(this.editor)
  };
  c._isEdited = function(a) {
    return this.active() && this.editor.cell && this.editor.cell.equals(a)
  };
  c._onGetColCellClass = function(a) {
    return b.isNotNull(a.editor) ? this._options.classCellEditable : this._options.classCellNotEditable
  };
  a.prototype.isEdited = function() {
    return this.grid.editMgr._isEdited(this)
  };
  a.prototype.setValue = function(a) {
    var c = this.getDatarow(), i = this.getKey(), e;
    b.isNotNullAnd(c, i) && (e = this.grid.dataMgr.updateByKey(c, i, a, {noSort:!0, noFilter:!0, noRerender:!0}), e === !0 && this.grid.view.rerenderRow(c));
    return e
  };
  c.isEditable = function(a) {
    if(a) {
      var b = a.getColDef();
      if(b && b.editor) {
        return(a = a.getDatarow()) && this.grid.dataMgr.isReal(a)
      }
    }
    return!1
  };
  c.begin = function(a) {
    this.active() && this.commit();
    if(this.isEditable(a)) {
      var b = a.getNode();
      if(b) {
        var c = this.editor = a.getColDef().editor;
        c.cell = a;
        c.grid = this.grid;
        c.before = b.innerHTML;
        b.innerHTML = c.edit(a.getValue());
        a.get$().addClass(this._options.classEdit);
        c.focus()
      }
    }
  };
  c.cancel = function() {
    if(this.active()) {
      var a = this.editor.cell;
      if(a) {
        var b = a.getNode();
        if(b) {
          b.innerHTML = this.editor.before, a.get$().removeClass(this._options.classEdit)
        }
      }
      this._deleteEditor();
      this.grid.view.focus()
    }
  };
  c._deleteEditor = function() {
    b.isNotNull(this.editor) && (delete this.editor.grid, delete this.editor.cell, delete this.editor.before, delete this.editor)
  };
  c.commit = function() {
    if(!this._beingCommitted && this.active()) {
      this._beingCommitted = !0;
      var a = this.editor.cell;
      if(a) {
        var b = a.getNode();
        if(b) {
          if(b = this.editor.value(b), b == null || b == a.getValue()) {
            this.cancel()
          }else {
            var b = a.setValue(b), c, e = a.get$();
            b instanceof Error ? (this.cancel(), c = this._options.classFailure) : (this._deleteEditor(), this.grid.view.focus(), this.grid.printMessage("Successfully Updated."), c = this._options.classSuccess);
            e.addClass(c);
            setTimeout(function() {
              e.removeClass(c)
            }, 1E3)
          }
        }
      }
      this._beingCommitted = !1
    }
  };
  c._deleteContent = function(a) {
    if(!this.active() && this.isEditable(a)) {
      var b = a.getColDef();
      a.getValue() !== b.defaultValue && a.setValue(b.defaultValue)
    }
  };
  c._deleteContents = function(a, c, i) {
    if(!this.active()) {
      var a = {}, c = {}, e = [], j, f, h, q, n, o, m;
      a:for(j in i) {
        if(i.hasOwnProperty(j) && j !== "length") {
          for(m in q = h = f = void 0, o = i[j], o) {
            if(o.hasOwnProperty(m) && !(m === "length" || c.hasOwnProperty(m))) {
              n = o[m].cell;
              if(b.isNull(f) && (f = n.getColDef(), h = f.defaultValue, q = f.key, b.isNull(f.editor))) {
                continue a
              }
              n = b.isNotNull(a[m]) ? a[m].datarow : n.getDatarow();
              this.grid.dataMgr.isReal(n) ? h !== n[q] && (b.isNull(a[m]) && (a[m] = {datarow:n, change:{}}, e.push(a[m])), a[m].change[q] = h) : c[m] = !0
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
  c = h.prototype;
  c.edit = function(a) {
    return"<input type='text' class='basic-editor' value='" + (a == null ? "" : a) + "' style='position:relative'/>"
  };
  c.focus = function() {
    var a = this.cell;
    if(a) {
      var b = a.getNode();
      if(b && (b = b.childNodes[0])) {
        if(b.setActive) {
          try {
            b.setActive()
          }catch(c) {
          }
        }
        b.focus();
        document.activeElement !== b && a.get$().children(":eq(0)").focus()
      }
    }
  };
  c.value = function(a) {
    return a && (a = a.childNodes[0]) ? a.value : null
  };
  c.path = function() {
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
    var a = this._options, b = [];
    b.push("#" + this.grid.mid + " ." + a.classTooltip + "{position:absolute;z-index:10;background:" + a.background + ";border:" + a.border + ";padding:" + a.padding + ";color:" + a.color + ";font:" + a.font + "}");
    return b.join("")
  };
  b._mouseoutCanvas = function() {
    e.isNotNull(this._tooltip) && (this._ctnr[0].removeChild(this._tooltip[0]), delete this._tooltip)
  };
  b._mousemoveCanvas = function(a) {
    var b = this._options;
    b.tooltipSyncEnabled && e.isNotNull(this._tooltip) && this._tooltip.css({left:a.pageX + b.offsetX + "px", top:a.pageY + b.offsetY + "px"})
  };
  b._mouseoverCanvas = function(a, b) {
    if(b.getColDef().tooltipEnabled && e.isNull(this._tooltip)) {
      var d = this._options, g = document.createElement("div");
      g.innerHTML = "<div class='" + d.classTooltip + "' style='left:" + (a.pageX + d.offsetX) + "px;top:" + (a.pageY + d.offsetY) + "px'>" + b.getValue() + "</div>";
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
    var a = this.getPrintHtml(this.grid.colDefMgr.get(), this.grid.dataMgr.datalist), b = e.open(this._options.winOptions);
    b.document.write(a);
    b.document.close()
  };
  b.getPrintHtml = function(a, b) {
    var d = this._options, g = d.tableBorderColor, i = d.headerBorderColor, e = d.cellBorderColor, j = [], f = a.length, h = f - 1, q = b.length, n = q - 1, o = 0, m;
    j.push("<html><head>");
    j.push("<title>" + d.title + "</title>");
    j.push("</head><body onload='window.print();'>");
    j.push("<table width='100%' cellspacing='0' cellpadding='0'><tbody><tr><td align='left'>");
    j.push("<table width='100%' cellspacing='0' cellpadding='2' style='border-collapse:collapse'>");
    j.push("<tbody style='font:" + d.font + ";'>");
    for(j.push("<tr style='background-color:" + d.headerBackgroundColor + ";color:" + d.headerFontColor + ";text-align:center'>");o < f;o++) {
      j.push("<td style='border:solid 1px " + i + ";'>" + a[o].name + "</td>")
    }
    j.push("</tr>");
    for(o = 0;o < q;o++) {
      d = b[o];
      j.push("<tr>");
      if(o === 0) {
        for(m = 0;m < f;m++) {
          m === 0 ? j.push("<td style='border:solid 1px " + e + ";border-top:solid 1px " + i + ";border-left:solid 1px " + g + "'>" + d[a[m].key] + "</td>") : m === h ? j.push("<td style='border:solid 1px " + e + ";border-top:solid 1px " + i + ";border-right:solid 1px " + g + "'>" + d[a[m].key] + "</td>") : j.push("<td style='border:solid 1px " + e + ";border-top:solid 1px " + i + "'>" + d[a[m].key] + "</td>")
        }
      }else {
        if(o < n) {
          for(m = 0;m < f;m++) {
            m === 0 ? j.push("<td style='border:solid 1px " + e + ";border-left:solid 1px " + g + "'>" + d[a[m].key] + "</td>") : m === h ? j.push("<td style='border:solid 1px " + e + ";border-right:solid 1px " + g + "'>" + d[a[m].key] + "</td>") : j.push("<td style='border:solid 1px " + e + "'>" + d[a[m].key] + "</td>")
          }
        }else {
          for(m = 0;m < f;m++) {
            m === 0 ? j.push("<td style='border:solid 1px " + e + ";border-bottom:solid 1px " + g + ";border-left:solid 1px " + g + "'>" + d[a[m].key] + "</td>") : m === h ? j.push("<td style='border:solid 1px " + e + ";border-bottom:solid 1px " + g + ";border-right:solid 1px " + g + "'>" + d[a[m].key] + "</td>") : j.push("<td style='border:solid 1px " + e + ";border-bottom:solid 1px " + g + "'>" + d[a[m].key] + "</td>")
          }
        }
      }
      j.push("</tr>")
    }
    j.push("</tbody></table></td></tr></tbody></table></body></html>");
    return j.join("")
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
  var a = goog.getObjectByName("jx.grid.Cell"), c = {INPUT:!0, TEXTAREA:!0, LABEL:!0, FIELDSET:!0, LEGEND:!0, SELECT:!0, OPTGROUP:!0, OPTION:!0, BUTTON:!0}, d = {checkbox:!0, radio:!0};
  goog.exportSymbol("jx.grid.ViewportManager", f);
  f.getInstance = function(a) {
    return new f(a)
  };
  var g = f.prototype;
  g.__init = function() {
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
  g.unsetDrag = function() {
    this._drag = !1
  };
  g._onDestroy = function() {
    h._destroy(this, {name:"ViewportManager", path:"view", $:"_canvas _mask", property:"_ctnr", map:"_vars _lockedRows _renderedRows _options"})
  };
  g._onCreateCss = function() {
    var a = "#" + this.grid.mid + " .", b = this._options, c = a + this._cellClass, d = a + this._rowClass, g = b.borderThickness + "px " + b.border, e = d + "[" + this._rowIdxAttr, f = this._colmgr.get(), h = f.length, m = 0, r = [];
    r.push(a + b.classView + "{height:" + this._calHeight() + "px;outline:0;position:relative;white-space:nowrap;overflow:auto;line-height:" + b.rowH + "px;cursor:default;-moz-user-select:none;-webkit-user-select:none;" + b.style + "}");
    r.push(a + b.classView + ":focus{background:" + b.focusBackground + ";outline:" + b.focusOutline + "}");
    r.push(a + b.classCanvas + "{height:" + this._calCanvasHeight() + "px;" + b.canvasStyle + ";background:#fff}");
    r.push(d + "{position:absolute;" + b.rowStyle + "}");
    r.push(c + "{height:" + b.rowH + "px;border-bottom:" + g + ";display:inline-block;white-space:nowrap;overflow:hidden;float:left;text-overflow:ellipsis;padding-left:" + b.padding + "px;border-right:" + g + ";" + b.cellStyle + "}");
    for(b.evenOddRows && r.push(e + "$='1']," + e + "$='3']," + e + "$='5']," + e + "$='7']," + e + "$='9']{background:" + b.oddRowsBackground + "}");m < h;m++) {
      r.push(c + ".k_" + f[m].key + "{" + f[m].style + "}")
    }
    return r.join("")
  };
  g._onCreateDynamicCss = function() {
    var a = "#" + this.grid.mid + " .", b = a + this._cellClass, c = a + this._rowClass;
    a += this._options.classCanvas;
    var d = this._calCanvasWidth(), g = this._colmgr.get(), e = "", f = g.length, h = 0;
    for(e += a + "{width:" + d + "px}" + c + "{width:" + d + "px}";h < f;h++) {
      e += b + ".k_" + g[h].key + "{width:" + g[h].width + "px}"
    }
    return e
  };
  g.onUpdateDatarow = function(a) {
    this.isRendered(a) && this.rerenderRow(a)
  };
  g.onUpdateDatalist = function(a) {
    for(var b, c = a.length, d = 0;d < c;d++) {
      b = a[d], this.isRendered(b) && this.rerenderRow(b)
    }
  };
  g.onRemoveDatarow = function(a) {
    this.destroyRow(a)
  };
  g.onRemoveDatalist = function(a) {
    for(var b = a.length, c = 0;c < b;c++) {
      this.destroyRow(a[c])
    }
  };
  g.onIdChange = function(a, b, c) {
    this.isRowLockedById(b) && (this._lockedRows[c] = this._lockedRows[b], delete this._lockedRows[b]);
    this.isRenderedById(b) && ((this._renderedRows[c] = this._renderedRows[b]).setAttribute("i", c), delete this._renderedRows[b])
  };
  g.onIdListChange = function(a, b, c) {
    for(var d = a.length, g = 0, e = this._lockedRows, f = this._renderedRows, h, m;g < d;g++) {
      h = b[g], m = a[g][c], e.hasOwnProperty(h) && (e[m] = e[h], delete e[h]), f.hasOwnProperty(h) && ((f[m] = f[h]).setAttribute("i", m), delete f[h])
    }
  };
  g._getCellSelector = function() {
    return"#" + this.grid.mid + " ." + this._cellClass
  };
  g._getRowSelector = function() {
    return"#" + this.grid.mid + " ." + this._rowClass
  };
  g.scrollTo = function(a, b) {
    this.scrollToRow(a);
    this.scrollToCol(b)
  };
  g.scrollToRowLazy = function(a) {
    var b = this.getScrollTop();
    return a == null ? b : this._getLastSafeVisibleRow() < a ? this.scrollToRow(this._getFirstRowForSafe(a)) : this._getFirstSafeVisibleRow() > a ? this.scrollToRow(a) : b
  };
  g.scrollToColLazy = function(a) {
    var b = this.getScrollLeft();
    if(a == null) {
      return b
    }
    if(this._getLastSafeVisibleCol() < a) {
      return this.setScrollLeft(this.getScrollHForSafe(a))
    }else {
      if(this._getFirstSafeVisibleCol() > a) {
        return this.scrollToCol(a)
      }
    }
    return b
  };
  g.scrollToLazy = function(a, b) {
    this.scrollToRowLazy(a);
    this.scrollToColLazy(b)
  };
  g.scrollToRow = function(a) {
    return a != null ? this.setScrollTop(this._getRowOuterHeight() * a) : this.getScrollTop()
  };
  g.scrollToCol = function(a) {
    return this.setScrollLeft(this.getColLeft(a))
  };
  g._getColInnerWidth = function(a) {
    return this._colmgr.get(a).width
  };
  g._getColInnerWidthByKey = function(a) {
    return this._colmgr.getByKey(a).width
  };
  g.getColWidth = function(a) {
    return this._colmgr.get(a).width + this._options.padding
  };
  g.getColWidthByKey = function(a) {
    return this._colmgr.getByKey(a).width + this._options.padding
  };
  g._getColOuterWidth = function(a) {
    return this._colmgr.get(a).width + this._options.padding + this._options.borderThickness
  };
  g._getColOuterWidthByKey = function(a) {
    return this._colmgr.getByKey(a).width + this._options.padding + this._options.borderThickness
  };
  g._getPadding = function() {
    return this._options.padding
  };
  g._colWidthPlus = function() {
    return this._options.padding + this._options.borderThickness
  };
  g._getRowOuterHeight = function() {
    return this._options.rowH + this._options.borderThickness
  };
  g._getRowInnerHeight = function() {
    return this._options.rowH
  };
  g._calHeight = function() {
    return this._options.autoHeight ? this._calCanvasHeight() + (this.grid.width() < this._calCanvasWidth() ? this.grid._vars.scrollbarDim.h : 0) : this._getRowOuterHeight() * this._options.rowsPerPage
  };
  g.getHeight = function() {
    return this._mask[0].offsetHeight
  };
  g.getInnerHeight = function() {
    return this._mask[0].clientHeight
  };
  g._getWidth = function() {
    return this._mask[0].offsetWidth
  };
  g.getInnerWidth = function() {
    return this._mask[0].clientWidth
  };
  g._calCanvasHeight = function() {
    return this._getRowOuterHeight() * this._datamgr.datalist.length || 1
  };
  g.getCanvasHeight = function() {
    return this._canvasEl.clientHeight
  };
  g._setCanvasHeight = function(a) {
    a = parseInt(a, 10);
    if(isNaN(a) || a < 1) {
      a = 1
    }
    var b = this.getCanvasHeight();
    if(a != b) {
      this._canvasEl.style.height = a + "px", this._evtmgr.trigger("onResizeCanvasHeight", [a, b], !0)
    }
  };
  g._calCanvasWidth = function() {
    return this._colLefts[this._colmgr.length()]
  };
  g.getCanvasWidth = function() {
    return this._canvasEl.clientWidth
  };
  g._setCanvasWidth = function(a) {
    typeof a != "number" && (a = parseInt(a, 10));
    if(isFinite(a) && !(a < 1)) {
      var b = this.getCanvasWidth();
      if(a != b) {
        this.grid.log("set canvas width. " + b + "->" + a, e.V_RESIZE), this._canvasEl.style.width = a + "px", this._evtmgr.trigger("onResizeCanvasWidth", [a, b], !0)
      }
    }
  };
  g.getColLeft = function(a) {
    return this._colLefts[a]
  };
  g._getColLefts = function() {
    return this._colLefts
  };
  g._setColLefts = function(a, b) {
    for(var a = a || 0, c = this._colmgr.get(), d = this._colWidthPlus(), b = b || c.length;a < b;a++) {
      this._colLefts[a + 1] = this._colLefts[a] + c[a].width + d
    }
    return this._colLefts
  };
  g._onReorderCols = function() {
    this._setColLefts();
    this._rerender()
  };
  g.setWidthByKey = function(a, c) {
    var d = this._colmgr.getByKey(a), c = b.bound(c, d.minW, d.maxW);
    if(c !== d.width) {
      this.grid.log("set column width. key=" + a + ", w=" + c, e.V_RESIZE);
      var g = this._evtmgr, f = this._colmgr, h = [a, c, d.width];
      d.width = c;
      this._setCanvasWidth(this._setColLefts(f.getIdxByKey(a))[f.length()]);
      this.grid._recreateDynamicCss();
      g.trigger("onResizeCol_" + a, h, !0);
      g.trigger("onResizeCol", h, !0)
    }
  };
  g._autoColWidth = function(a) {
    for(var b = this._canvasFind(".k_" + a), c = Number.MIN_VALUE, d = b.length, g = 0;g < d;g++) {
      if(c < b[g].scrollWidth) {
        c = b[g].scrollWidth
      }
    }
    c -= this._getPadding();
    this.setWidthByKey(a, c)
  };
  g._setWidth = function(a) {
    a = parseInt(a, 10);
    if(!(isNaN(a) || a < 1)) {
      this._mask[0].style.width = a + "px"
    }
  };
  g.getScrollTop = function() {
    return this._mask[0].scrollTop
  };
  g.getScrollLeft = function() {
    return this._mask[0].scrollLeft
  };
  g.setScrollTop = function(a) {
    var b = this.getScrollTop();
    return a != null && b != a ? this._mask[0].scrollTop = a : b
  };
  g.setScrollLeft = function(a) {
    var b = this.getScrollLeft();
    return a != null && b != a ? this._mask[0].scrollLeft = a : b
  };
  g._hasHScrollbar = function() {
    return this._mask[0].offsetHeight > this._mask[0].clientHeight
  };
  g._hasVScrollbar = function() {
    return this._mask[0].offsetWidth > this._mask[0].clientWidth
  };
  g._heightPlus = function() {
    return this._mask[0].offsetHeight - this._mask[0].clientHeight
  };
  g._widthPlus = function() {
    return this._mask[0].offsetWidth - this._mask[0].clientWidth
  };
  g._getFirstVisibleRow = function() {
    return Math.floor(this.getScrollTop() / this._getRowOuterHeight())
  };
  g._getFirstSafeVisibleRow = function() {
    return Math.ceil(this.getScrollTop() / this._getRowOuterHeight())
  };
  g._getLastVisibleRow = function() {
    return Math.ceil((this.getScrollTop() + this._mask[0].clientHeight) / this._getRowOuterHeight()) - 1
  };
  g._getLastSafeVisibleRow = function() {
    return Math.floor((this.getScrollTop() + this._mask[0].clientHeight) / this._getRowOuterHeight()) - 1
  };
  g._getFirstRowForSafe = function(a) {
    return a - Math.floor(this._mask[0].clientHeight / this._getRowOuterHeight()) + 1
  };
  g._getFirstVisibleCol = function() {
    for(var a = this.getScrollLeft(), b = this._colLefts, c = 0, d = b.length;c < d;c++) {
      if(b[c] > a) {
        return c - 1
      }
      if(b[c] === a) {
        return c
      }
    }
    return d - 2
  };
  g._getFirstSafeVisibleCol = function() {
    for(var a = this.getScrollLeft(), b = this._colLefts, c = 0, d = b.length;c < d;c++) {
      if(b[c] >= a) {
        return c
      }
    }
    return d - 2
  };
  g._getLastVisibleCol = function() {
    for(var a = this.getScrollLeft() + this._mask[0].clientWidth, b = this._colLefts, c = 0, d = b.length;c < d;c++) {
      if(b[c] >= a) {
        return c - 1
      }
    }
    return d - 2
  };
  g._getLastSafeVisibleCol = function() {
    for(var a = this.getScrollLeft() + this._mask[0].clientWidth, b = this._colLefts, c = 0, d = b.length;c < d;c++) {
      if(b[c] > a) {
        return c - 2
      }
    }
    return d - 2
  };
  g._getFirstColForSafe = function(a) {
    var b = this._colLefts, c = b[a + 1] - this._mask[0].clientWidth, d = a;
    if(c <= 0) {
      return 0
    }
    for(;d >= 0;d--) {
      if(d === a && b[d] <= c || b[d] === c) {
        return d
      }
      if(b[d] < c) {
        return d + 1
      }
    }
    return 0
  };
  g.getScrollHForSafe = function(a) {
    var b = this._colLefts, c = b[a + 1] - this._mask[0].clientWidth;
    return b[a] <= c ? b[a] : c
  };
  g._getRenderRange = function() {
    if(this._options.autoHeight) {
      return{start:0, end:this._datamgr.datalist.length - 1}
    }
    var a, b = this._datamgr.datalist.length - 1;
    return{start:(a = this._getFirstVisibleRow() - this._options.bufferSize) < 0 ? 0 : a, end:(a = this._getLastVisibleRow() + this._options.bufferSize) > b ? b : a}
  };
  g._fitHeight = function() {
    this._mask[0].style.height = this.getCanvasHeight() + this._heightPlus() + "px"
  };
  g._resizeWidth = function() {
    this._options.autoHeight && this._fitHeight()
  };
  g.onAfterRefresh = function(a) {
    a !== void 0 && a.noRerender === !0 || this._rerender()
  };
  g._rerender = function() {
    var a = this.getScrollTop(), b = this.getScrollLeft();
    this._evtmgr.trigger("onBeforeRerender", !1, !0);
    this.unlockAllRows();
    this._removeRows();
    var c = this._datamgr.datalist.length;
    if(this._lastRowLen !== c) {
      this._lastRowLen = c, this._setCanvasHeight(this._calCanvasHeight())
    }
    this._render();
    this.setScrollTop(a);
    this.setScrollLeft(b);
    this._evtmgr.trigger("onAfterRerender", !1, !0)
  };
  g._render = function(a) {
    this._removeAndRenderRows(a)
  };
  g._renderShift = function(a) {
    a = a || this._getRenderRange();
    this._removeRowsExcept(a);
    this._appendRows(a)
  };
  g._removeRows = function(a) {
    var b = this._canvasEl, c = this._renderedRows, d = this._lockedRows, g;
    if(a) {
      for(var e = a.start, a = a.end, f = this._datamgr;e <= a;e++) {
        if(!d.hasOwnProperty(g = f.getIdByIdx(e)) && c.hasOwnProperty(g)) {
          b.removeChild(c[g]), delete c[g]
        }
      }
    }else {
      if(this._lockExist()) {
        for(g in c) {
          c.hasOwnProperty(g) && d.hasOwnProperty(g) && (b.removeChild(c[g]), delete c[g])
        }
      }else {
        this._renderedRows = {}, b.innerHTML = ""
      }
    }
  };
  g._removeRowsExcept = function(a) {
    var b = this._canvasEl, c = this._renderedRows, d = this._lockedRows, g;
    if(a) {
      var e = a.start, a = a.end, f = this._datamgr, h;
      for(g in c) {
        if(c.hasOwnProperty(g) && !(d.hasOwnProperty(g) || e <= (h = f.getIdxById(g)) && h <= a)) {
          b.removeChild(c[g]), delete c[g]
        }
      }
    }else {
      if(this._lockExist()) {
        for(g in c) {
          c.hasOwnProperty(g) && d.hasOwnProperty(g) === !1 && (b.removeChild(c[g]), delete c[g])
        }
      }else {
        this._renderedRows = {}, b.innerHTML = ""
      }
    }
  };
  g.destroyRow = function(a) {
    return this.destroyRowById(this._datamgr.getId(a))
  };
  g.destroyRowById = function(a) {
    a != null && (this.unlockRowById(a), this._renderedRows.hasOwnProperty(a) && (this._canvasEl.removeChild(this._renderedRows[a]), delete this._renderedRows[a]))
  };
  g.destroyRowByIdx = function(a) {
    return this.destroyRowById(this._datamgr.getIdByIdx(a))
  };
  g._lockExist = function() {
    return b.isNotEmptyObj(this._lockedRows)
  };
  g.isRowLockedById = function(a) {
    return a != null ? this._lockedRows.hasOwnProperty(a) : !1
  };
  g.isRowLocked = function(a) {
    return this.isRowLockedById(this._datamgr.getId(a))
  };
  g.isRowLockedByIdx = function(a) {
    return this.isRowLockedById(this._datamgr.getIdByIdx(a))
  };
  g.lockRowById = function(a) {
    a != null && this._datamgr.hasById(a) && (this._lockedRows[a] = !0)
  };
  g.lockRow = function(a) {
    return this.lockRowById(this._datamgr.getId(a))
  };
  g.lockRowByIdx = function(a) {
    return this.lockRowById(this._datamgr.getIdByIdx(a))
  };
  g.unlockRowById = function(a) {
    this.isRowLockedById(a) && delete this._lockedRows[a]
  };
  g.unlockRow = function(a) {
    return this.unlockRowById(this._datamgr.getId(a))
  };
  g.unlockRowByIdx = function(a) {
    return this.unlockRowById(this._datamgr.getIdByIdx(a))
  };
  g.unlockAllRows = function() {
    this._lockedRows = {}
  };
  g.rerenderRowById = function(a) {
    if(this._datamgr.containsById(a)) {
      var c = this._renderedRows, d = this._canvasEl, g = this._datamgr, e = g.idKey, f = g.getIdxById(a), g = g.getById(a), h = this._colmgr.get(), o = this._getColCellClasses(h).map(function(a) {
        return"<div class='" + a + " "
      }), m = this._getRendererSettings(h), r = m[0], m = m[1], s = this._getRowOuterHeight(), t = "<div class='" + this._rowClass + "' i='", v = "' " + this._rowIdxAttr + "='", u = [];
      c.hasOwnProperty(a) && (d.removeChild(c[a]), this._evtmgr.trigger("onBeforeRenderRows", [[f]], !0), u.push(t + g[e] + v + f + "' style='top:" + s * f + "px'>"), this._renderRow(u, f, g, h, o, r, m), c[a] = b.appendHTML(d, u.join(""))[0], this._evtmgr.trigger("onAppendRows", [[f]], !0))
    }
  };
  g._getRendererSettings = function(a) {
    for(var a = a || this._colmgr.get(), b = 0, c = a.length, d, g = [], e = [], f;b < c;b++) {
      d = a[b], (f = d.renderer) ? (g.push(!!d.rendererInput), e.push(f)) : (g.push(!1), e.push(!1))
    }
    return[e, g]
  };
  g.rerenderRow = function(a) {
    return this.rerenderRowById(this._datamgr.getId(a))
  };
  g.rerenderRowByIdx = function(a) {
    return this.rerenderRowById(this._datamgr.getIdByIdx(a))
  };
  g.rerenderCellByIdAndKey = function(a, b) {
    var c = this.getCellByIdAndKey(a, b);
    if(c) {
      var d = this._datamgr, g = this._colmgr, e = d.getById(a), f = g.getByKey(b), d = d.getIdxById(a), g = g.getIdxByKey(b), h = f.renderer, m = h ? f.rendererInput : !1, r = [];
      h ? m ? this._renderCell(r, d, g, e, f, h, !0) : this._renderCell(r, d, g, e, f, h) : this._renderCell(r, d, g, e, f);
      c.innerHTML = r.join("")
    }
  };
  g.rerenderCellByIdx = function(a, b) {
    return this.rerenderCellByIdAndKey(this._datamgr.getIdByIdx(a), this._colmgr.getKeyByIdx(b))
  };
  g._appendRows = function(a) {
    var c = this._evtmgr, d = [a], g = [], e = a.start, a = a.end, f = this._datamgr, h = f.datalist, o = f.idKey, m = this._colmgr.get(), r = this._getColCellClasses(m).map(function(a) {
      return"<div class='" + a + " "
    }), f = this._renderedRows, s = this._getRowOuterHeight(), t = this._canvasEl, v = "<div class='" + this._rowClass + "' i='", u = "' " + this._rowIdxAttr + "='", w = this._getRendererSettings(m), z = w[0], A = w[1], x, y, w = [];
    c.trigger("onBeforeRenderRows", d, !0);
    for(this.grid.twstart();e <= a;e++) {
      x = h[e], y = x[o], f.hasOwnProperty(y) || (g[g.length] = v + y + u + e + "' style='top:" + s * e + "px'>", this._renderRow(g, e, x, m, r, z, A), this.grid.twlap(), w.push(y))
    }
    this.grid.twprint();
    this.grid.twstop();
    g = b.appendHTML(t, g.join(""));
    e = 0;
    for(a = w.length;e < a;e++) {
      f[w[e]] = g[e]
    }
    c.trigger("onAppendRows", d, !0)
  };
  g._removeAndRenderRows = function(a) {
    var a = a || this._getRenderRange(), b = this._evtmgr, c = [a], d = [], g = a.start, a = a.end, e = this._datamgr, f = e.datalist, e = e.idKey, h = this._colmgr.get(), m = this._getColCellClasses(h).map(function(a) {
      return"<div class='" + a + " "
    }), r = this._getRowOuterHeight(), s = this._canvasEl, t = "<div class='" + this._rowClass + "' i='", v = "' " + this._rowIdxAttr + "='", u = this._getRendererSettings(h), w = u[0], u = u[1], z, A, x = [], y = {};
    b.trigger("onBeforeRenderRows", c, !0);
    for(this.grid.twstart();g <= a;g++) {
      z = f[g], A = z[e], d[d.length] = t + A + v + g + "' style='top:" + r * g + "px'>", this._renderRow(d, g, z, h, m, w, u), this.grid.twlap(), x.push(A)
    }
    this.grid.twprint();
    this.grid.twstop();
    s.innerHTML = d.join("");
    g = 0;
    for(a = x.length;g < a;g++) {
      y[x[g]] = s.childNodes[g]
    }
    this._renderedRows = y;
    b.trigger("onAppendRows", c, !0)
  };
  g._renderColumn = function(b, c, d, g, e, f, h) {
    for(var o = [], m, r = 0, s = d.length, t, v, u, w = c.key, z, A = this.grid, x = this._evtmgr, y = "onRenderCell_" + w, C = [null, b, v, c], B = [null, b, null, c, null];r < s;r++) {
      t = d[r];
      v = g[t];
      u = v[w];
      m = [];
      B[0] = C[0] = t;
      B[2] = v;
      B[4] = m;
      z = x.trigger("onGetCellClass", C);
      m[m.length] = z ? e + z.join(" ") + "'>" : e + "'>";
      x.trigger(y + "_prepend", B, !0);
      if(typeof u != "string" || u.substring(0, 3) !== "J@H") {
        f ? m[m.length] = h ? f(new a({grid:A, row:t, col:b, datarow:v, colDef:c})) : f(u, t, b, v, c) : u != null && (m[m.length] = u)
      }
      x.trigger(y + "_append", B, !0);
      m[m.length] = "</div>";
      o[o.length] = m.join("")
    }
    return o
  };
  g._getColCellClass = function(a) {
    var b = this._cellClass + " k_" + a.key;
    a.colClass && (b += " " + a.colClass);
    (a = this._evtmgr.trigger("onGetColCellClass", [a])) && (b += " " + a.join(" "));
    return b
  };
  g._getColCellClasses = function(a) {
    for(var a = a || this._colmgr.get(), b = [], c = 0, d = a.length;c < d;c++) {
      b.push(this._getColCellClass(a[c]))
    }
    return b
  };
  g._renderRow = function(a, b, c, d, g, e, f) {
    for(var h = 0, m = d.length, r, s = [b, null, c, null], t = this._evtmgr, v, u;h < m;h++) {
      r = d[h], s[1] = h, s[3] = r, v = t.trigger("onGetCellClass", s), a[a.length] = v ? g[h] + v.join(" ") + "'>" : g[h] + "'>", (u = e[h]) ? f[h] ? this._renderCell(a, b, h, c, r, u, !0) : this._renderCell(a, b, h, c, r, u) : this._renderCell(a, b, h, c, r), a[a.length] = "</div>"
    }
    a[a.length] = "</div>";
    return a
  };
  g._renderCell = function(b, c, d, g, e) {
    var f = e.key, h = g[f], o = [c, d, g, e, b], m = this._evtmgr, f = "onRenderCell_" + f;
    m.trigger(f + "_prepend", o, !0);
    if(typeof h != "string" || h.substring(0, 3) !== "J@H") {
      arguments.length > 5 ? b[b.length] = arguments[6] ? arguments[5](new a({grid:this.grid, row:c, col:d, datarow:g, colDef:e})) : arguments[5](h, c, d, g, e) : h != null && (b[b.length] = h)
    }
    m.trigger(f + "_append", o, !0)
  };
  a.prototype.rerender = function() {
    return this.grid.view.rerenderCellByIdAndKey(this.getId(), this.getKey())
  };
  a.prototype.scrollTo = function() {
    this.grid.view.scrollTo(this.getRowIdx(), this.getColIdx())
  };
  g._keydown = function(a) {
    b.contains(this._mask[0], document.activeElement, this._ctnr[0]) && (this.grid.log("UI event:keydown on Viewport. event=" + a.type + ", keycode=" + a.which, e.V_KEYDOWN), this._evtmgr.trigger("keydownCanvas_" + a.which, [a], !0), this._evtmgr.trigger("keydownCanvas", [a], !0))
  };
  g._keyup = function(a) {
    b.contains(this._mask[0], document.activeElement, this._ctnr[0]) && (this.grid.log("UI event:keyup on Viewport. event=" + a.type + ", keycode=" + a.which, e.V_KEYUP), this._evtmgr.trigger("keyupCanvas_" + a.which, [a], !0), this._evtmgr.trigger("keyupCanvas", [a], !0))
  };
  g._keypress = function(a) {
    b.contains(this._mask[0], document.activeElement, this._ctnr[0]) && (this.grid.log("UI event:keypress on Viewport. event=" + a.type + ", keycode=" + a.which, e.V_KEYPRESS), this._evtmgr.trigger("keypressCanvas_" + a.which, [a], !0), this._evtmgr.trigger("keypressCanvas", [a], !0))
  };
  g._mousein = function(a) {
    this._drag ? this._triggerMouseEvent(a, "draginCanvas,mouseinCanvas", e.V_MOUSEIN) : this._triggerMouseEvent(a, "mouseinCanvas", e.V_MOUSEIN)
  };
  g._mouseout = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragoutCanvas,mouseoutCanvas", e.V_MOUSEOUT) : this._triggerMouseEvent(a, "mouseoutCanvas", e.V_MOUSEOUT)
  };
  g._mouseenter = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragenterCanvas,mouseenterCanvas", e.V_MOUSEENTER) : this._triggerMouseEvent(a, "mouseenterCanvas", e.V_MOUSEENTER)
  };
  g._mouseleave = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragleaveCanvas,mouseleaveCanvas", e.V_MOUSELEAVE) : this._triggerMouseEvent(a, "mouseleaveCanvas", e.V_MOUSELEAVE)
  };
  g._mousemove = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragmoveCanvas,mousemoveCanvas", e.V_MOUSEMOVE) : this._triggerMouseEvent(a, "mousemoveCanvas", e.V_MOUSEMOVE)
  };
  g._mouseover = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragoverCanvas,mouseoverCanvas", e.V_MOUSEOVER) : this._triggerMouseEvent(a, "mouseoverCanvas", e.V_MOUSEOVER)
  };
  g._mousedown = function(a) {
    if(this._triggerMouseEvent(a, "mousedownCanvas", e.V_MOUSEDOWN)) {
      this._drag = !0
    }
  };
  g._mouseup = function(a) {
    this._drag = !1;
    this._triggerMouseEvent(a, "mouseupCanvas", e.V_MOUSEUP)
  };
  g._click = function(a) {
    this._triggerMouseEvent(a, "clickCanvas", e.V_CLICK) && this.focus(a)
  };
  g._dblclick = function(a) {
    this._triggerMouseEvent(a, "dblclickCanvas", e.V_DBLCLICK)
  };
  g._triggerMouseEvent = function(b, g, e) {
    var f = b.target;
    if(f) {
      var h = f.tagName, f = f.type && f.type.toLowerCase();
      if(d[f] || !c[h]) {
        if(h = this._getClosestCell(b.target)) {
          this.grid.log("UI event:" + g + " on Viewport. event=" + b.type, e);
          h = new a({grid:this.grid, node:h});
          e = h.getKey();
          b = [b, h];
          h = this._evtmgr;
          if(g.indexOf(",") > -1) {
            for(var g = g.split(","), f = 0, q = g.length, n;f < q;f++) {
              n = g[f], h.trigger(n + "_" + e, b, !0), h.trigger(n, b, !0)
            }
          }else {
            h.trigger(g + "_" + e, b, !0), h.trigger(g, b, !0)
          }
          return!0
        }
      }
    }
    return!1
  };
  g._scroll = function() {
    var a = this.getScrollTop(), b = a - this._lastScrollTop, c = this.getScrollLeft(), d = c - this._lastScrollLeft;
    if(b !== 0 || d !== 0) {
      this.grid.log("Viewport scrolled... h=" + d + ", v=" + b, e.V_SCROLL);
      var g = this._evtmgr, b = Math.abs(b / this._getRowOuterHeight());
      g.trigger("onScrollViewport", !1, !0);
      if(d) {
        this._lastScrollLeft = c, g.trigger("onScrollViewportH", [c], !0)
      }
      if(b >= this._options.appendThreshold) {
        this._lastScrollTop = a, this._removeAndRenderRows(), g.trigger("onScrollViewportV", !1, !0)
      }
    }
  };
  g.focus = function(a) {
    if(!a || !this._evtmgr.triggerInvalid("onBeforeFocusCanvas", [a])) {
      if(a = this._mask[0], document.activeElement !== a) {
        this.grid.log("focusing canvas...", e.V_FOCUS);
        if(a.setActive) {
          try {
            a.setActive()
          }catch(b) {
          }
        }
        a.focus();
        document.activeElement !== a && this._mask.focus()
      }
    }
  };
  g.isRenderedById = function(a) {
    return a != null ? this._renderedRows.hasOwnProperty(a) : !1
  };
  g.isRendered = function(a) {
    return this.isRenderedById(this._datamgr.getId(a))
  };
  g.isRenderedByIdx = function(a) {
    return this.isRenderedById(this._datamgr.getIdByIdx(a))
  };
  g.getRowById = function(a) {
    if(this.isRenderedById(a)) {
      return this._renderedRows[a]
    }
  };
  g.getRow = function(a) {
    return this.getRowById(this._datamgr.getId(a))
  };
  g.getRowByIdx = function(a) {
    return this.getRowById(this._datamgr.getIdByIdx(a))
  };
  g.getRenderedRowById = function(a) {
    if(this.isRenderedById(a)) {
      return this._renderedRows[a]
    }
  };
  g.getRenderedRow = function(a) {
    return this.getRenderedRowById(this._datamgr.getId(a))
  };
  g.getRenderedRowByIdx = function(a) {
    return this.getRenderedRowById(this._datamgr.getIdByIdx(a))
  };
  g.getRenderedRows = function() {
    return b.toArray(this._renderedRows)
  };
  g.getCell = function(a, b) {
    if(b != null) {
      var c = this.getRowByIdx(a);
      if(c) {
        return c.childNodes[b]
      }
    }
  };
  g.getCellByIdAndKey = function(a, b) {
    var c = this._colmgr.getIdxByKey(b);
    if(c != null) {
      var d = this.getRowById(a);
      if(d) {
        return d.childNodes[c]
      }
    }
  };
  g.getRenderedCell = function(a, b) {
    if(b != null) {
      var c = this.getRenderedRowByIdx(a);
      if(c) {
        return c.childNodes[b]
      }
    }
  };
  g.getRenderedCellByIdAndKey = function(a, b) {
    var c = this._colmgr.getIdxByKey(b);
    if(c != null) {
      var d = this.getRenderedRowById(a);
      if(d) {
        return d.childNodes[c]
      }
    }
  };
  g._getClosestCell = function(a) {
    return b.closestWithTag(a, "DIV", this._cellClass, this._canvasEl)
  };
  g._getClosestRow = function(a) {
    return b.closestWithTag(a, "DIV", this._rowClass, this._canvasEl)
  };
  g._getClosestRowIdx = function(a) {
    return this._datamgr.getIdxByNode(this._getClosestRow(a))
  };
  g._canvasFind = function(a) {
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
  function c(a, b) {
    switch(typeof a) {
      case "undefined":
        return Number.MAX_VALUE;
      case "boolean":
        return a ? 1 : 0;
      case "number":
        return a;
      case "string":
        return a[b]();
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
        return a[b]();
      default:
        return a == null ? Number.MAX_VALUE : a.toString()[b]()
    }
  }
  function d(a) {
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
  var g = goog.getObjectByName("jx.grid"), i = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.getObjectByName("jx.grid.Column");
  goog.getObjectByName("jx.grid.ViewportManager");
  goog.exportSymbol("jx.grid.ColumnManager", f);
  f.getInstance = function(a) {
    return new f(a)
  };
  var l = f.prototype;
  l.__init = function(a) {
    this.grid.event.bind("onDestroy", this._destroy, this);
    this.set(a.colDefs)
  };
  l._destroy = function() {
    g._destroy(this, {name:"ColumnManager", path:"colDefMgr", property:"_colDefs", map:"_keyToIdx _keyToDef _options", array:"_filtered"})
  };
  l.getAll = function() {
    return this._colDefs
  };
  l.set = function(a) {
    if(this._colDefs === a || i.areEqualArrays(this._colDefs, a)) {
      return a
    }
    if(i.isNull(a)) {
      a = []
    }else {
      var b = a.filter(function(a) {
        return i.isNotNull(a)
      });
      a.length = 0;
      a.pushList(b)
    }
    this.grid.event.trigger("onBeforeSetColDefs", [this._colDefs, a], !0);
    this._colDefs = [];
    this._filtered.length = 0;
    this._keyToIdx = {};
    this._keyToDef = {};
    this.grid.event.trigger("onEmptyColDefs", !1, !0);
    for(var b = 0, c = a.length, d = this._keyToDef, g, e;b < c;b++) {
      g = a[b];
      if(!g.hasOwnProperty("key")) {
        return this._keyToDef = {}, this.grid.error("KEY_UNDEFINED", b)
      }
      e = g.key;
      if(i.isEmptyString(e)) {
        return this._keyToDef = {}, this.grid.error("BAD_NULL", b)
      }
      if(d.hasOwnProperty(e)) {
        return this._keyToDef = {}, this.grid.error("DUP_KEY", e)
      }
      d[e] = g
    }
    this._colDefs = a;
    for(b = 0;b < c;b++) {
      this._extend(a[b])
    }
    this.grid.event.trigger("onAfterSetColDefs", [a, this._filter()], !0);
    return a
  };
  l.push = function(a) {
    return this.addAt(this._filtered.length, a)
  };
  l.addAt = function(a, b) {
    if(!i.isNull(b)) {
      var c = b.key, d = this._keyToDef, g = this._filtered;
      i.isNull(a) || a > g.length ? a = g.length : a < 0 && (a += g.length);
      this.grid.event.trigger("onBeforeAddColDef", [b], !0);
      if(i.isNull(c)) {
        return this.grid.error("KEY_UNDEFINED")
      }
      if(d.hasOwnProperty(c)) {
        return this.grid.error("DUP_KEY", c)
      }
      this._colDefs.addAt(a, this._extend(d[c] = b));
      b.hidden !== !0 && (g.addAt(a, b), this._reidx());
      this.grid.event.trigger("onAfterAddColDef", [b, a], !0);
      return g.length
    }
  };
  l._extend = function(c) {
    if(c) {
      var d = {}, g, i;
      $.extend(!0, d, this._options.colDef);
      $.extend(!0, d, c);
      $.extend(!0, c, d);
      d = c.type = h(c.type);
      i = c.key;
      i != null && typeof i != "string" && (c.key = i = i.toString());
      if(!i) {
        throw Error("column key is not defined!");
      }
      if(g = c.sorter) {
        typeof g == "string" ? g = h(g) : d && (g = d);
        if(g = f.sorter(g, i)) {
          g.key = i
        }
        c.sorter = g
      }
      if((g = c.parser) && d && typeof g != "function") {
        switch(d) {
          case "boolean":
            g = e;
            break;
          case "int":
            g = function(a) {
              return parseInt(a, 10)
            };
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
  l.hide = function(a) {
    var b = this._filtered[a];
    if(!i.isNull(b)) {
      return b.hidden = !0, this._filtered.removeAt(a), this._reidx(), this.grid.event.trigger("onHideCol", [b, a], !0), b
    }
  };
  l.show = function(a) {
    if(!i.isNull(a)) {
      if(!i.isString(a)) {
        if(!i.isObject(a)) {
          return
        }
        a = a.key
      }
      var b = this._keyToDef;
      if(b.hasOwnProperty(a)) {
        if(this._keyToIdx.hasOwnProperty(a)) {
          return b[a]
        }
        b = b[a];
        b.hidden = !1;
        this._filter();
        this._reidx();
        this.grid.event.trigger("onShowCol", [b, this._keyToIdx[a]], !0);
        return b
      }
    }
  };
  l._filter = function() {
    this._filtered = this._colDefs.filter(function(a) {
      return a.hidden !== !0
    });
    this._reidx();
    return this._filtered
  };
  l._reidx = function() {
    this._keyToIdx = {};
    return this._reidxFrom()
  };
  l._reidxFrom = function(a) {
    i.isNull(a) && (a = 0);
    for(var b = this._filtered, c = b.length, d = this._keyToIdx;a < c;a++) {
      d[b[a].key] = a
    }
    return d
  };
  l.get = function(a) {
    if(i.isNull(a)) {
      return this._filtered
    }
    if(this._filtered.hasOwnProperty(a)) {
      return this._filtered[a]
    }
  };
  l.getByKey = function(a) {
    if(i.isNotNull(a) && this._keyToDef.hasOwnProperty(a)) {
      return this._keyToDef[a]
    }
  };
  l.length = function() {
    return this._filtered.length
  };
  l.getIdxByKey = function(a) {
    return this._keyToIdx.hasOwnProperty(a) ? this._keyToIdx[a] : -1
  };
  l.getIdx = function(a) {
    return i.isNotNull(a) && this._keyToIdx.hasOwnProperty(a.key) ? this._keyToIdx[a.key] : -1
  };
  l.sortByKey = function(a) {
    this._filtered.length = 0;
    this._keyToIdx = {};
    for(var b = 0, c = a.length, d = this._filtered, g = this._keyToIdx, e = this._keyToDef;b < c;b++) {
      d.push(e[a[b]]), g[a[b]] = b
    }
    this.grid.event.trigger("onReorderCols", a, !0);
    return this._filtered
  };
  l.getKeys = function() {
    return this._filtered.map(function(a) {
      return a.key
    })
  };
  f.sorter = function(a, b, g) {
    g = {on:!!g, key:b};
    switch(a) {
      case "boolean":
        return g.comparator = function(a, c) {
          return d(a[b]) - d(c[b])
        }, g;
      case "string":
        return g.lexi = b, g;
      case "int":
        return g.comparator = function(a, d) {
          return c(a[b], "toInt") - c(d[b], "toInt")
        }, g;
      case "float":
        return g.comparator = function(a, d) {
          return c(a[b], "toFloat") - c(d[b], "toFloat")
        }, g;
      case "date":
        return g.comparator = function(a, d) {
          return c(a[b], "toInt") - c(d[b], "toInt")
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
    var a = "#" + this.grid.mid + " .", b = this._options, g = [];
    g.push(a + b.classMenuBar + "{" + h._CONST._cssUnselectable + "overflow:hidden;width:100%;background:" + b.background + ";border-bottom:" + (b.borderThickness + "px " + b.border) + ";height:" + b.height + "px}");
    g.push(a + b.classIcon + "{float:left;height:" + b.iconHeight + "px;width:" + b.iconWidth + "px;border:" + b.iconBorderThickness + "px " + b.iconBorder + ";margin:" + b.iconMargin + "px 0 0 " + b.iconMargin + "px;background:" + b.iconBackground + ";border-radius:" + b.iconBorderRadius + "px;-moz-border-radius:" + b.iconBorderRadius + "px}");
    g.push(a + b.classIcon + ":hover," + a + b.classIcon + ":focus{background:" + b.iconBackgroundHover + ";border:" + b.iconBorderThickness + "px " + b.iconBorderHover + "}");
    g.push(a + b.classIcon + ":active," + a + b.classIcon + ".active{cursor:default;background:" + b.iconBackgroundActive + ";border:" + b.iconBorderThickness + "px " + b.iconBorderActive + "}");
    g.push(a + b.classIcon + ".active:focus{border:" + b.iconBorderThickness + "px " + b.iconBorderFocus + "}");
    return g.join("")
  };
  a.addIcon = function(a, b, g, i, f) {
    return $("<div class='" + this._options.classIcon + "' tabIndex='0' title='" + b + "'><div class='" + a + "' style='margin-top:" + (this._options.iconHeight - i) / 2 + "px;margin-left:" + (this._options.iconWidth - g) / 2 + "px'></div></div>").appendTo(this._menubar).click(function(a) {
      f();
      $(this).toggleClass("active");
      a.preventDefault()
    }).keydown(function(a) {
      if(a.which === e.keyMapKeydown.enter || a.which === e.keyMapKeydown.space) {
        f(), $(this).toggleClass("active"), a.preventDefault()
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
    var a, b = this._sumMap;
    for(a in b) {
      b.hasOwnProperty(a) && b[a].remove()
    }
    h._destroy(this, {name:"Footer", path:"footer", $:"_foot", property:"_ctnr", map:"_sumMap _options"})
  };
  b._onCreateCss = function() {
    var a = this._options, b = "#" + this.grid.mid + " ." + a.classFooter, d = [];
    d.push(b + "{float:left;cursor:default;width:100%;" + h._CONST._cssUnselectable + "background:" + a.background + ";border-top:" + a.border + ";border-collapse:collapse;color:" + a.color + ";font-size:" + a.fontSize + ";font-weight:" + a.fontWeight + ";padding-left:8px;" + a.style + "}");
    d.push(b + " ." + a.classCell + "{float:left;white-space:nowrap;line-height:" + a.cellHeight + "px;padding-right:" + a.cellPadding + "px;" + a.cellStyle + "}");
    d.push(b + " ." + a.classTitle + "{text-align:right;color:" + a.titleColor + ";font-size:" + a.titleFontSize + ";font-weight:" + a.titleFontWeight + ";" + a.titleStyle + "}");
    d.push(b + " ." + a.classContent + "{color:" + a.contentColor + ";font-size:" + a.contentFontSize + ";font-weight:" + a.contentFontWeight + ";" + a.contentStyle + "}");
    return d.join("")
  };
  b._updateTotalCount = function() {
    this._foot.find("[name=totalCount]")[0].innerHTML = this.grid.dataMgr.getReal().length
  };
  b._updateShownCount = function() {
    this._foot.find("[name=shownCount]")[0].innerHTML = this.grid.dataMgr.filterReal(this.grid.dataMgr.datalist).length
  };
  b._initSumCells = function() {
    for(var a = this.grid.dataMgr.getReal(), b = this.grid.colDefMgr.get(), d = b.length, g, i, h, j, p = f._calSum, k = this._sumMap, q, n = 0;n < d;n++) {
      if(g = b[n], i = g.sumRenderer, e.isNotNull(i)) {
        if(h = g.key, g = g.name, j = p(a, h), h = k[h] = this.getNextCell(), q = h[0], e.isFunction(i)) {
          q.innerHTML = i(g, j)
        }else {
          if(e.isString(i)) {
            if(h = i.toLowerCase(), h === "krw" || i === "\\") {
              q.innerHTML = this._sumRenderer(g, e.formatNumber(j))
            }else {
              if(h === "usd" || i === "$") {
                q.innerHTML = this._sumRenderer(g, e.formatNumber(j, 2, "$ "))
              }
            }
          }else {
            q.innerHTML = this._sumRenderer(g, j)
          }
        }
      }
    }
  };
  b._updateSums = function() {
    var a = this.grid.dataMgr.getReal(), b, d = this._sumMap, g = this.grid.colDefMgr, i, h, j, p = f._calSum, k, q, n = this._options.classContent;
    for(b in d) {
      if(d.hasOwnProperty(b)) {
        if(i = g.getByKey(b), h = i.sumRenderer, j = p(a, b), k = d[b], q = k[0], e.isFunction(h)) {
          q.innerHTML = h(i.name, j)
        }else {
          if(e.isString(h)) {
            if(i = h.toLowerCase(), i === "krw" || h === "\\") {
              k.find("span." + n)[0].innerHTML = e.formatNumber(j)
            }else {
              if(i === "usd" || h === "$") {
                k.find("span." + n)[0].innerHTML = e.formatNumber(j, 2, "$ ")
              }
            }
          }else {
            k.find("span." + n)[0].innerHTML = j
          }
        }
      }
    }
  };
  b.getNextCell = function() {
    return $("<div class='" + this._options.classCell + "'/>").appendTo(this._foot)
  };
  b._sumRenderer = function(a, b) {
    return"<span class='" + this._options.classTitle + "'>" + a + " 합계: </span><span class='" + this._options.classContent + "'>" + b + "</span>"
  };
  f._calSum = function(a, b) {
    for(var d = 0, g, e = a.length, f = 0;f < e;f++) {
      if(typeof(g = a[f][b]) === "string") {
        g = g.toFloat()
      }
      d += isNaN(g) ? 0 : g
    }
    return d
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
  var c = f.prototype;
  c._init = function(b) {
    this.grid.log("initializing ColumnHeader instance...", a.V_INIT);
    this.grid.header = this;
    this._ctnr = b.container;
    this._map = {};
    this._resizeMap = {};
    b = this._options;
    this._mask = $("<div class='" + b.classHeaderMask + "'>").prependTo(this._ctnr);
    this._head = $("<div class='" + b.classHeader + "'>").appendTo(this._mask);
    f._disableSel(this._head)
  };
  c._bindEvents = function() {
    this.grid.log("binding ColumnHeader events...", a.V_INIT);
    var b, c = this.getColumns(), e = c.length, f = 0;
    for(b = {onRenderModules:this._onRenderModules, onAfterRenderModules:this._onAfterRenderModules, mousedown:this._mousedown, mouseup:this._mouseup, dragmove:this._dragmove, onScrollViewportH:this._onScrollViewportH, onScrollViewportV:this._onScrollViewportV, onChangeSorter:this._onChangeSorter, click:this._click, onResizeCol:this._setWidthByKey};f < e;f++) {
      if(c[f].sorter) {
        b["clickHeader_" + c[f].key] = this._sort
      }
    }
    this.bindGridEvent(b, this)
  };
  c._defaultOptions = function(b) {
    this.grid.log("extending ColumnHeader options...", a.V_INIT);
    b = b._options.imageUrl;
    return{reorderEnabled:!1, reorderSyncEnabled:!0, background:"url(" + b + "column-headers-bg.png) repeat-x scroll center", backgroundHover:"url(" + b + "column-headers-over-bg.png) repeat-x scroll center", backgroundPlaceholder:"#646464", sortBackground:b + "sort.png", sortRight:4, sortWidth:7, sortBackgroundAsc:b + "sort-asc.png", sortBackgroundDesc:b + "sort-desc.png", font:"15px Arial,Helvetica,sans-serif", height:21, borderThickness:1, border:"solid #909192", classHeaderMask:"jgrid-header-mask", 
    classHeader:"jgrid-header", classColHeader:"jgrid-colheader", classColHeaderActive:"jgrid-colheader-active", classColHeaderPlaceholder:"jgrid-colheader-placeholder", classInteractive:"interactive", classColHeaderSorted:"jgrid-colheader-sorted", classSort:"jgrid-sort", classSortAsc:"jgrid-sort-asc", classSortDesc:"jgrid-sort-desc", classResizeHandle:"jgrid-resize-handle", resizeHandleWidth:11, style:"", headerStyle:"", scrollerLeft:1E4, scrollerWidth:1E5, classResizeGuide:"resize-guide", resizeGuideWidth:1, 
    resizeBackground:"black;filter:alpha(opacity=40);opacity:0.4", syncResize:!1, resizeHandleBackground:"black;filter:alpha(opacity=5);opacity:0.05"}
  };
  c._beforeDispose = function() {
    this.grid.log("disposing ColumnHeader instance...", a.V_INIT);
    this._head.sortable && this._head.sortable("destroy");
    this._destroyResizeHandles();
    h._destroy(this, {name:"ColumnHeader", path:"header", $:"_resizeGuide _mask _head", property:"_ctnr _resizeMap", map:"_map _options"});
    this.dispose()
  };
  c._destroyResizeHandles = function() {
    var a = this._resizeMap, b;
    for(b in a) {
      a.hasOwnProperty(b) && (a[b].remove(), delete a[b])
    }
    delete this._resizeKey;
    delete this._resizeInitX;
    delete this._resizeHandleInitX;
    delete this._resizeInitWidth;
    delete this._resizeInitColWidth
  };
  c._beforeCreateCss = function(b) {
    this.grid.log("creating CSS for ColumnHeader...", a.V_INIT);
    var c = "#" + this.grid.mid + " .", e = this._options, f = e.borderThickness + "px " + e.border, h = this.getColumns(), p = h.length, k = 0, q = "." + e.classHeaderMask, n = "." + e.classColHeader, o = e.scrollerLeft, o = e.scrollerLeft, m = e.height + "px", r = e.classColHeaderActive, s = {};
    s[q] = {position:"relative", overflow:"hidden", width:"100%", font:e.font, background:e.background, "border-bottom":f, _append:e.style};
    s["." + e.classHeader] = {position:"relative", overflow:"hidden", "white-space":"nowrap", cursor:"default", left:-o + "px", width:e.scrollerWidth + "px", "line-height":m};
    s[n] = {position:"relative", overflow:"hidden", "float":"left", "text-overflow":"ellipsis", "text-align":"center", height:m, left:o - this.getView().getScrollLeft() + "px", "border-right":f, _append:e.headerStyle};
    s[n + "." + e.classInteractive + ":hover, " + c + r] = {background:e.backgroundHover};
    s["." + r] = {"border-left":f};
    s[n + "." + e.classColHeaderPlaceholder] = {background:e.backgroundPlaceholder + "!important"};
    s["." + e.classSort] = {position:"absolute", height:m, right:e.sortRight + "px", width:e.sortWidth + "px", background:"url(" + e.sortBackground + ") no-repeat center transparent"};
    s["." + e.classSortAsc] = {background:"url(" + e.sortBackgroundAsc + ") no-repeat center transparent"};
    s["." + e.classSortDesc] = {background:"url(" + e.sortBackgroundDesc + ") no-repeat center transparent"};
    s["." + e.classResizeHandle] = {"z-index":10, background:e.resizeHandleBackground, cursor:"e-resize", position:"absolute", height:m, width:e.resizeHandleWidth + "px"};
    for(s["." + e.classResizeGuide] = {"z-index":10, position:"absolute", background:e.resizeBackground, width:e.resizeGuideWidth + "px"};k < p;k++) {
      h[k].headerStyle && (s[n + "#" + this.mid + "h" + h[k].key] = {_append:h[k].headerStyle})
    }
    this.toCssStyles(b.css, s)
  };
  c._widthPlus = function() {
    return this._options.borderThickness
  };
  c._onScrollViewportH = function(b) {
    this.grid.log("adjusting Colheader style.left according to viewport scrollLeft...", a.V_RESIZE);
    this._head[0].style.left = -this._options.scrollerLeft - b + "px"
  };
  c._onRenderModules = function() {
    this.grid.log("rendering Colheader...", a.V_INIT);
    for(var b = this.getColumns(), c = b.length, e = 0, f, h = [];e < c;e++) {
      (f = b[e]).hidden || this._render(h, f, e)
    }
    this._head[0].innerHTML = h.join("");
    this.triggerGridEvent("onRenderHeadersComplete", !1, !0)
  };
  c._onAfterRenderModules = function() {
    var a = this._options;
    a.reorderEnabled && this._initReorder();
    this._initResizeHandles();
    this._resizeGuide = $("<div class='" + a.classResizeGuide + "'>").appendTo(this.getView()._mask);
    this._resizeGuide[0].style.top = "0px";
    this._resizeGuide[0].style.height = "0px"
  };
  c._render = function(a, b, c) {
    var e = this._options, f = b.key, h = b.noName ? "" : b.name || f, k = this._widthPlus(), q = "onRenderHeader_" + f, n = [a];
    a.push("<div id='" + this.mid + "h" + f + "' class='" + e.classColHeader + " " + (e.reorderEnabled || b.sorter ? " " + e.classInteractive : "") + "' " + (b.noTitle ? "" : "title='" + (b.title || h) + "' ") + "style='width:" + (this.getView()._getColOuterWidth(c) - k) + "px;' colKey='" + f + "'>");
    this.triggerGridEvent(q + "_prepend", n, !0);
    a.push(h);
    this.triggerGridEvent(q + "_append", n, !0);
    b.sorter && a.push("<span class='" + e.classSort + "'></span>");
    a.push("</div>")
  };
  f._disableSel = function(a) {
    Util$.safe$(a).attr("unselectable", "on").css("MozUserSelect", "none").bind("selectstart.ui", function() {
      return!1
    })
  };
  c.get = function(a) {
    if(this._map.hasOwnProperty(a)) {
      return this._map[a]
    }
    var b = document.getElementById(this.mid + "h" + a);
    return!b ? $([]) : this._map[a] = $(b)
  };
  c._updateIndicator = function(a, b) {
    var c = this.get(a), e = this._options, f = c.find("." + e.classSort), h = e.classColHeaderSorted, k = e.classSortAsc, e = e.classSortDesc;
    b === 0 ? (c.removeClass(h), f.removeClass(k + " " + e)) : (c.addClass(h), b === 1 ? f.addClass(k).removeClass(e) : b === 2 && f.addClass(e).removeClass(k))
  };
  c._closest = function(a) {
    return Util$.safe$(a).closest("div." + this._options.classColHeader, this._head)
  };
  c._getDef = function(a) {
    return this.getColMgr().getByKey(a.attr("colKey"))
  };
  c._sort = function(b, c, e) {
    this.grid.log("Colheader clicked to sort. key=" + f, a.V_CLICK);
    var f = e.key, b = e.sorter;
    this.triggerGridEvent("onBeforeColSort_" + f, !1, !0);
    this.triggerGridEvent("onBeforeColSort", !1, !0);
    b.desc = b.desc === !1 ? !0 : !1;
    this.getDataMgr().refresh({sorter:b});
    this.getView()._scroll()
  };
  c._onChangeSorter = function(a, b) {
    a !== b && a && this._updateIndicator(a.key, 0);
    b && this._updateIndicator(b.key, b.desc ? 2 : 1)
  };
  c._initReorder = function() {
    this.grid.log("initializing Colheader reorder functionality...", a.V_INIT);
    var b = this, c = this._options, e = this.getColMgr(), f = this._head, h = this.mid.length + 1, p = function(a, b) {
      for(var c = $(f).sortable("toArray"), d = c.length, g, p = 0;p < d;p++) {
        g = c[p], c[p] = g === "" ? b.item.attr("id").substring(h) : g.substring(h)
      }
      e.sortByKey(c)
    };
    f.sortable({items:"." + c.classColHeader, axis:"x", forcePlaceholderSize:!0, placeholder:c.classColHeaderPlaceholder + " " + c.classColHeader, tolerance:"pointer", start:function(a, c) {
      c.item.addClass(b._options.classColHeaderActive)
    }, stop:function(a, c) {
      c.item.removeClass(b._options.classColHeaderActive);
      b._syncResizeHandles()
    }, update:p});
    c.reorderSyncEnabled && f.sortable("option", "change", p)
  };
  c._getDx = function(a, b) {
    var c = a.clientX - this._resizeInitX, f = b.minW, h = e.ifNull(b.maxW, Number.MAX_VALUE), p = this._resizeInitWidth;
    p + c < f && (c = f - p);
    p + c > h && (c = h - p);
    return c
  };
  c._click = function(b) {
    var c = this._closest(b.target);
    if(c.length !== 0) {
      var e = this._getDef(c), f = e.key, b = [b, c, e];
      this.grid.log("Colheader clicked. key=" + f, a.V_CLICK);
      this.getEventMgr().triggerInvalid("clickHeaderValid_" + f, b) || (this.triggerGridEvent("clickHeader_" + f, b, !0), this.triggerGridEvent("clickHeader", b, !0))
    }
  };
  c._mousedown = function(b) {
    var c = this._options;
    if(e.hasTagAndClass(b.target, "DIV", c.classResizeHandle)) {
      var f = this._resizeKey = b.target.getAttribute("key");
      this.grid.log("mousedown on ColumnHeader Resize Handle. key=" + f, a.V_MOUSEDOWN);
      this._resizeInitWidth = this.get(f)[0].clientWidth;
      this._resizeInitColWidth = this.getColMgr().getByKey(f).width;
      this._resizeInitX = b.clientX;
      this._resizeHandleInitX = this._resizeMap[f][0].offsetLeft;
      this._resizeGuide[0].style.left = Math.floor(this._resizeHandleInitX + (c.resizeHandleWidth - c.resizeGuideWidth) / 2 - c.scrollerLeft) + "px";
      this._resizeGuide[0].style.height = this.getView().getInnerHeight() + "px"
    }else {
      if(c = this._closest(b.target), c.length) {
        var h = this._getDef(c), f = h.key, b = [b, c, h];
        this.grid.log("mousedown on ColumnHeader. key=" + f, a.V_MOUSEDOWN);
        this.triggerGridEvent("mousedownHeader", b, !0);
        this.triggerGridEvent("mousedownHeader_" + f, b, !0)
      }
    }
  };
  c._dragmove = function(b) {
    var c = this._resizeKey;
    if(c != null && (b = this._getDx(b, this.getColMgr().getByKey(c)), !(Math.abs(b) < 1))) {
      this.grid.log("drag on ColumnHeader Resize Handle. key=" + c, a.V_MOUSEMOVE);
      var e = this._options;
      this.get(c)[0].style.width = this._resizeInitWidth + b + "px";
      this._moveResizeHandles(this._resizeHandleInitX + b - this._resizeMap[c][0].offsetLeft, this.getColMgr().getIdxByKey(c));
      this._resizeGuide[0].style.left = Math.floor(this._resizeHandleInitX + b + (e.resizeHandleWidth - e.resizeGuideWidth) / 2 - e.scrollerLeft) + "px";
      e.syncResize && this.getView().setWidthByKey(c, this._resizeInitColWidth + b)
    }
  };
  c._mouseup = function(b) {
    var c = this._resizeKey;
    if(c != null) {
      this.grid.log("mouseup on ColumnHeader Resize Handle. key=" + c, a.V_MOUSEUP), this._resizeGuide[0].style.height = "0px", b = this._getDx(b, this.getColMgr().getByKey(c)), Math.abs(b) >= 1 && this.getView().setWidthByKey(c, this._resizeInitColWidth + b), delete this._resizeKey, delete this._resizeInitX, delete this._resizeHandleInitX, delete this._resizeInitWidth, delete this._resizeInitColWidth
    }
  };
  c._setWidthByKey = function(b, c) {
    this.grid.log("setting ColumnHeader width=" + c + ". key=" + b, a.V_RESIZE);
    this.get(b)[0].style.width = c + this.getView()._colWidthPlus() - this._widthPlus() + "px";
    this._syncResizeHandles(this.getColMgr().getIdxByKey(b));
    this.getView()._scroll()
  };
  c._syncResizeHandles = function(a) {
    for(var a = a || 0, b = this.getView()._getColLefts(), c = this.getColumns(), e = c.length, f = this._resizeMap, h;a < e;a++) {
      if(h = c[a].key, f.hasOwnProperty(h)) {
        f[h][0].style.left = b[a + 1] + this._resizeHandleOffset + "px"
      }
    }
  };
  c._moveResizeHandles = function(a, b) {
    for(var b = b || 0, c = this.getColumns(), e = c.length, f = this._resizeMap, h;b < e;b++) {
      if(h = c[b].key, f.hasOwnProperty(h)) {
        h = f[h][0], h.style.left = h.offsetLeft + a + "px"
      }
    }
  };
  c._onScrollViewportV = function() {
    this._resizeGuide[0].style.top = this.getView().getScrollTop() + "px"
  };
  c._initResizeHandles = function() {
    this.grid.log("initializing Colheader resize functionality...", a.V_INIT);
    for(var b = this.getColumns(), c = b.length, e = this.getView(), f = e.mid, e = e._getColLefts(), h = this._options, p = this._resizeMap, k, q = 0, n = this._resizeHandleOffset = Math.floor(h.scrollerLeft - h.resizeHandleWidth / 2), o = h.classResizeHandle, m = this._head;q < c;q++) {
      if(h = b[q], h.resizable) {
        k = h.key, p[k] = $("<div class='" + o + "' key='" + k + "' ondblclick='JGM.m.ViewportManager." + f + '._autoColWidth("' + k + "\")' style='left:" + (n + e[q + 1]) + "px' title='" + h.name + " 컬럼의 폭을 조절합니다.'>").appendTo(m)
      }
    }
  }
})();
console && console.log && console.log('reading javascript source "CheckManager.js"...');
jx.grid.CheckManager = {};
(function() {
  function f(a) {
    function d() {
      var a = this._options, b = this._isRadio = a.isRadio = !!a.isRadio;
      this._hasMaster = a.master = !b && !!a.master;
      this._col = a.colDef;
      this._key = this._col.key;
      this._cssClass = a.classCheck;
      this._cssClassMaster = a.classMasterCheck;
      this._name = a.name || b && "radio" + this.mid || null
    }
    this.addEventListener("afteroption", d);
    b.call(this, a);
    this.removeEventListener("afteroption", d)
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
    var a, b = h._CONST;
    a = this.getColMgr();
    a.getByKey(this._col.key) || a.addAt(this._options.colIdx, this._col);
    if(e.isNull(b._checkboxWidth)) {
      a = e.calCheckSize(), b._checkboxWidth = a.checkboxW, b._checkboxHeight = a.checkboxH, b._radioWidth = a.radioW, b._radioHeight = a.radioH
    }
  };
  a._bindEvents = function() {
    var a = this._col.key, b;
    b = {onAfterSetDatalist:this.uncheckAll, onIdChange:this._onIdChange, onIdListChange:this._onIdListChange, onRemoveDatarow:this._onRemoveDatarow, onRemoveDatalist:this._onRemoveDatalist};
    b["onRenderCell_" + a + "_prepend"] = this._onRenderCell;
    b["keydownColSel_" + a + "_" + e.keyMapKeydown.space] = this._keydownColSel;
    if(this._hasMaster) {
      b["onRenderHeader_" + a + "_prepend"] = this._onRenderHeader, b.onRenderHeadersComplete = this._getMaster
    }
    this.bindGridEvent(b, this)
  };
  a._defaultOptions = function() {
    return{colDef:{key:"checkbox", width:20, name:" ", noTitle:!0, resizable:!1, sorter:null, filter:null, noSearch:!0, editor:null, inputOnCreate:!1}, colIdx:0, name:void 0, classCheck:"checkmg", classMasterCheck:"checkm", master:!0, isRadio:!1}
  };
  a._beforeCreateCss = function(a) {
    var b, e, f = a.css;
    this._isRadio ? (a = h._CONST._radioWidth, b = h._CONST._radioHeight) : (a = h._CONST._checkboxWidth, b = h._CONST._checkboxHeight);
    e = "*overflow:hidden;padding:0;width:" + a + "px;height:" + b + "px;";
    f.push(this.getView()._getCellSelector() + " ." + this._cssClass + "[mid='" + this.mid + "']{" + e + "margin:" + (this.getView()._getRowInnerHeight() - b) / 2 + "px 0 0 " + (this._col.width - this.getView()._getPadding() - a) / 2 + "px}#" + this.mid + "h{" + e + "margin:" + (this.getHeader()._options.height - b) / 2 + "px 0 0 0}")
  };
  a.checkList = function(a, b) {
    if(!b) {
      a = this.getDataMgr().mapList(a).mapped
    }
    for(var e = 0, f = a.length;e < f;e++) {
      this.check(a[e], !0)
    }
  };
  a.setCheckList = function(a, b) {
    this.uncheckAll();
    this.checkList(a, b)
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
    for(var a = this.getAllData(), b = a.length, e = this.getIdKey(), i = this._map, h = 0;h < b;h++) {
      i[a[h][e]] = a[h]
    }
    this._count = b
  };
  a.uncheckAll = function() {
    this._hasMaster && f._uncheck(this._master);
    f._uncheck(this.getCheckboxes());
    this._map = {};
    this._count = 0
  };
  a.toggleCheck = function(a, b) {
    b || (a = this.getDataMgr().map(a));
    this.isChecked(a, !0) && !this._isRadio ? this.uncheck(a, !0) : this.check(a, !0)
  };
  a.toggleDisable = function(a, b) {
    b || (a = this.getDataMgr().map(a));
    this.isDisabled(a, !0) ? this.enable(a, !0) : this.disable(a, !0)
  };
  a.toggleById = function(a) {
    this.toggleCheck(this.getDataMgr().getById(a), !0)
  };
  a.check = function(a, b) {
    b || (a = this.getDataMgr().map(a));
    this._add(a) && (f._check(this.getCheckbox(a)), this._updateMaster(), this.triggerGridEvent("onCheckChange", [a, !0], !0))
  };
  a.uncheck = function(a, b) {
    b || (a = this.getDataMgr().map(a));
    this._remove(a) && (f._uncheck(this.getCheckbox(a)), this._hasMaster && f._uncheck(this._master), this.triggerGridEvent("onCheckChange", [a, !1], !0))
  };
  a.disable = function(a, b) {
    var e = this.getDataMgr();
    b || (a = e.map(a));
    var e = e.getId(a), i = this.disabledmap;
    i.hasOwnProperty(e) || (i[e] = a, f.disableNode(this.getCheckbox(a)), this.triggerGridEvent("onDisableCheck", [a], !0))
  };
  a.enable = function(a, b) {
    var e = this.getDataMgr();
    b || (a = e.map(a));
    var e = e.getId(a), i = this.disabledmap;
    i.hasOwnProperty(e) && (delete i[e], f.enableNode(this.getCheckbox(a)), this.triggerGridEvent("onEnableCheck", [a], !0))
  };
  a._updateMaster = function() {
    this._hasMaster && f._setCheck(this._master, this.isCheckedAll())
  };
  a._add = function(a) {
    var b = a[this.getIdKey()];
    if(this._map.hasOwnProperty(b)) {
      return!1
    }
    if(this._isRadio) {
      this._map = {}, this._count = 0
    }
    this._map[b] = a;
    this._count++;
    return!0
  };
  a._remove = function(a) {
    var a = a[this.getIdKey()], b = this._map;
    if(!b.hasOwnProperty(a)) {
      return!1
    }
    delete b[a];
    this._count--;
    return!0
  };
  a.isChecked = function(a, b) {
    var e = this.getDataMgr();
    b || (a = e.map(a));
    return this._map.hasOwnProperty(e.getId(a))
  };
  a.isDisabled = function(a, b) {
    var e = this.getDataMgr();
    b || (a = e.map(a));
    return this.disabledmap.hasOwnProperty(e.getId(a))
  };
  a.splitChecked = function(a, b) {
    if(!b) {
      a = this.getDataMgr().mapList(a).mapped
    }
    for(var e = [], f = [], h = 0, j = a.length, p = this.getIdKey(), k, q = this._map;h < j;h++) {
      q.hasOwnProperty((k = a[h])[p]) ? e.push(k) : f.push(k)
    }
    return{checked:e, unchecked:f}
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
    for(var b = a.length, e = [], f = 0, h = this.getColMgr().getIdxByKey(this._key);f < b;f++) {
      e.push(a[f].childNodes[h].childNodes[0])
    }
    return e
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
    for(var b = 0, e = a.length;b < e;b++) {
      this.uncheck(a[b], !0), this.enable(a[b], !0)
    }
  };
  a._onIdChange = function(a, b, e) {
    var f = this._map, h = this.disabledmap;
    f.hasOwnProperty(b) && (delete f[b], f[e] = a);
    h.hasOwnProperty(b) && (delete h[b], h[e] = a)
  };
  a._onIdListChange = function(a, b, e) {
    for(var f = 0, h = a.length, j = this._map, p = this.disabledmap, k, q;f < h;f++) {
      k = a[f], q = b[f], j.hasOwnProperty(q) && (delete j[q], j[k[e]] = k), p.hasOwnProperty(q) && (delete p[q], p[k[e]] = k)
    }
  };
  a._keydownColSel = function(a, b, e) {
    a.preventDefault();
    if(b && e) {
      var a = this.isChecked(e.getDatarow(), !0), f, e = this.getDataList();
      if(this._isRadio) {
        for(f in b) {
          if(b.hasOwnProperty(f) && f !== "length") {
            this.check(e[f], !0);
            break
          }
        }
      }else {
        for(f in b) {
          b.hasOwnProperty(f) && f !== "length" && (a ? this.uncheck(e[f], !0) : this.check(e[f], !0))
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
  a._onRenderCell = function(a, b, e, f, h) {
    h.push("<input tabIndex='-1' onclick=\"JGM.m.CheckManager." + this.mid + ".toggleById('" + e[this.getIdKey()] + "')\" type='" + (this._isRadio ? "radio" : "checkbox") + "' class='" + this._cssClass + "' mid='" + this.mid + "'");
    this._name && h.push(" name='" + this._name + "'");
    this.isChecked(e, !0) && h.push(" checked='checked'");
    (this._disabled || this.isDisabled(e, !0)) && h.push(" disabled='disabled'");
    h.push("/>")
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
  f._setCheck = function(a, b) {
    b ? f._check(a) : f._uncheck(a)
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
    var a = this.key, b;
    b = {onAfterFilter:this._onAfterFilter, onCreateCss:this._onCreateCss, onDestroy:this._destroy, onAfterSetDatalist:this._onAfterSetDatalist, onAddDatarow:this._onAddDatarow, onAddDatalist:this._onAddDatalist, onUpdateDatarow:this._onUpdateDatarow, onUpdateDatalist:this._onUpdateDatalist, onRemoveDatarow:this._onRemoveDatarow, onRemoveDatalist:this._onRemoveDatalist, onRenderHeadersComplete:this._getMaster};
    b["onRenderHeader_" + a + "_prepend"] = this._onRenderHeader;
    b["clickHeaderValid_" + a] = this._clickHeaderValid;
    b["onRenderCell_" + a + "_prepend"] = this._onRenderCell;
    b["dblclickCanvas_" + a] = this._dblclickCanvas;
    b["keydownColSel_" + a + "_" + e.keyMapKeydown.space] = this._keydownColSel;
    if(e.isNotNull(this.checkMgr)) {
      b.onCheckChange = this._onCheckChange
    }
    this.grid.event.bind(b, this)
  };
  a._destroy = function() {
    h._destroy(this, {name:"Collapser", path:"collapser", module:"_tree", $:"_master", property:"checkMgr", map:"_options"})
  };
  a._onCreateCss = function() {
    var a = "#" + this.grid.mid + " .", b = this._options, g = a + this.grid.view._options.classRow + " .", f = a + b.classCollapser, h = f + "." + b.classExpanded, j = f + "." + b.classCollapsed, p = this.grid.view._getRowInnerHeight(), k = [], q = this.grid.header;
    k.push(a + b.classIndent + "{height:" + p + "px;float:left;}");
    k.push(f + "{width:" + b.width + "px;float:left;padding:0 " + b.padding + "px}");
    k.push(g + b.classCollapser + "{height:" + p + "px}");
    k.push(h + "{background:url(" + b.urlExpanded + ") no-repeat center transparent}");
    k.push(h + ":hover{background:url(" + b.urlExpandedHover + ") no-repeat center transparent}");
    k.push(j + "{background:url(" + b.urlCollapsed + ") no-repeat center transparent}");
    k.push(j + ":hover{background:url(" + b.urlCollapsedHover + ") no-repeat center transparent}");
    e.isNotNull(q) && k.push(a + q._options.classColHeader + " ." + b.classCollapser + "{height:" + q._options.height + "px}");
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
    for(var b = 0, g = a.length, f = this._tree, h = f.root, j = this._options.beginCollapsed, p = this.key, k = this.grid.view, q = this.grid.dataMgr, n, o = [], m;b < g;b++) {
      n = f.createNode(a[b]), n._collapsed = j, e.isNotNull(n.parent) && n.parent.children.length === 1 && o.push(n.parent.data)
    }
    if(k !== void 0) {
      b = 0;
      for(g = o.length;b < g;b++) {
        k.rerenderCellByIdAndKey(q.getId(o[b]), p)
      }
    }
    h.traverseChildren({fn:function(a) {
      m = this.parent;
      e.isNotNull(m) && (m === h || m._shown && !m._collapsed) ? this._shown = !0 : (a.propagate = !1, this.traverse({fn:function() {
        this._shown = !1
      }}))
    }});
    this.grid.event.trigger("onCollapserTreeChange", !1, !0)
  };
  a._onUpdateDatarow = function(a, b, g) {
    var f = this._tree, h = f._options.nodeKey, j = f._options.parentKey, p;
    b.hasOwnProperty(h) && (p = f.getNodeByNodeId(g[h]), f.changeNodeId(p, g[h], b[h]), this.grid.event.trigger("onCollapserTreeChange", !1, !0));
    b.hasOwnProperty(j) && (e.isNull(p) && (p = f.getNode(a)), f.changeParentId(p, g[j], b[j]), this.grid.event.trigger("onCollapserTreeChange", !1, !0))
  };
  a._onUpdateDatalist = function(a, b, g) {
    for(var b = this._tree, f = b._options.nodeKey, h = b._options.parentKey, j, p, k, q = [], n = [], o = 0, m = a.length;o < m;o++) {
      j = g[o], p = a[o], k = void 0, j.hasOwnProperty(f) && (e.isNull(k) && (k = b.getNodeByNodeId(j[f])), q.push({node:k, before:j[f], newId:p[f]})), j.hasOwnProperty(h) && (e.isNull(k) && (k = b.getNode(p)), n.push({node:k, before:j[h], newId:p[h]}))
    }
    a = q.length;
    g = n.length;
    if(a + g !== 0) {
      if(a + g > 10) {
        b.reattach()
      }else {
        for(o = 0;o < a;o++) {
          f = q[o], b.changeNodeId(f.node, f.before, f.newId)
        }
        for(o = 0;o < g;o++) {
          f = n[o], b.changeParentId(f.node, f.before, f.newId)
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
    for(var b = 0, e = a.length, f = this._tree;b < e;b++) {
      f.destroyNodeByData(a[b])
    }
    this.grid.event.trigger("onCollapserTreeChange", !1, !0)
  };
  a._onAfterFilter = function(a, b) {
    var g = this._tree;
    if(b.length > 0) {
      var f = this.grid.dataMgr, h = a.length, j = f._idToIdx, p = f.idKey, k, q = 0, n = function(g) {
        e.isNotNull(this.parent) ? (k = this.parent.data, e.isNotNull(k) && !f.has(k) && (a.push(k), b.remove(k), j[k[p]] = -1)) : g.stop = !0
      };
      f._reidx();
      for(g.reattach();q < h;q++) {
        g.getNode(a[q]).traverse({up:!0, fn:n})
      }
      g.reattach(a);
      g.sortList(a);
      this.grid.event.trigger("onCollapserTreeChange", !1, !0)
    }else {
      g.reattach(a), this.grid.event.trigger("onCollapserTreeChange", !1, !0), this._filter(a, b)
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
      var a = this._tree, g = a.getNode(g.getDatarow())._collapsed, f = this.grid.dataMgr.datalist, h, j;
      for(j in b) {
        b.hasOwnProperty(j) && j !== "length" && (h = a.getNode(f[j]), g ? this.expand(h) : this.collapse(h))
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
  a._onRenderCell = function(a, b, f, h, l) {
    a = this._tree.getNode(f);
    if(e.isNull(a)) {
      return null
    }
    f = this.grid.dataMgr.getId(f);
    b = this._options;
    l.push("<div class='" + b.classIndent + "' style='width:" + b.indentSize * a.getLevel() + "px;'></div><div ");
    a.isLeaf() ? l.push("class='" + b.classCollapser) : (l.push('onmousedown="JGM.m.Collapser.' + this.mid + ".toggleById('" + f + "');\" class='" + b.classCollapser), a._collapsed ? l.push(" " + b.classCollapsed) : l.push(" " + b.classExpanded));
    l.push("'></div>")
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
        for(var e = f.root.children, h = e.length, j = 0;j < h;j++) {
          if(e[j]._collapsed) {
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
    var f = this._tree.getNode(a), i = this.checkMgr, l = [], j;
    b ? (f.traverseChildren({fn:function(a) {
      i.isChecked(this.data) ? a.propagate = !1 : (i._add(this.data), e.isNotNull(j = i.getCheckbox(this.data)) && l.push(j))
    }}), f.traverseParent({up:!0, fn:function(a) {
      e.isNull(this.data) || i.isChecked(this.data) ? a.stop = !0 : (i._add(this.data), e.isNotNull(j = i.getCheckbox(this.data)) && l.push(j))
    }}), h.CheckManager._check($(l)), i._updateMaster()) : (f.traverseChildren({fn:function(a) {
      i.isChecked(this.data) ? (i._remove(this.data), e.isNotNull(j = i.getCheckbox(this.data)) && l.push(j)) : a.propagate = !1
    }}), f.traverseParent({up:!0, fn:function(a) {
      if(e.isNull(this.data) || !i.isChecked(this.data)) {
        a.stop = !0
      }else {
        for(var b = 0, c = this.children, d = c.length;b < d;b++) {
          if(i.isChecked(c[b].data)) {
            a.stop = !0;
            return
          }
        }
        i._remove(this.data);
        e.isNotNull(j = i.getCheckbox(this.data)) && l.push(j)
      }
    }}), h.CheckManager._uncheck($(l)))
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
    var a = this.grid, b = a.dataMgr, d = this._options;
    this.bindEvents();
    a = this.collapser = h.create("Collapser", {grid:a, options:d.Collapser});
    delete d.Collapser;
    this._processData(b.all);
    a.__init();
    b.refresh()
  };
  b.bindEvents = function() {
    var a;
    a = {onBeforeSetDatalist:this._removeAll, "onAfterSetDatalist onAddDatalist":this._processData, onAddDatarow:this._onAddDatarow, onUpdateDatarow:this._onUpdateDatarow, onUpdateDatalist:this._onUpdateDatalist, onRemoveDatarow:this._onRemoveDatarow, onRemoveDatalist:this._onRemoveDatalist, onDestroy:this._destroy};
    if(this._options.sumColKeys.length !== 0) {
      var b = this.mid, d = this.grid.dataMgr._consts._notReal, e = 0, f, h = this._options.sumColKeys, j = this._options.prefix, p = h.length;
      for(f = function(a, e, f, g, h) {
        f[d] === b && h.push(j)
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
    for(var b = a.length, d = this._options.key, f = this._options.padColKeys, h = this.grid.dataMgr, l = h._consts._notReal, j = h.idKey, p = this.collapser, k = p._tree._options.nodeKey, q = p._tree._options.parentKey, n = [], o = 0;o < b;o++) {
      this._addData(a[o], d, j, l, k, q, f, n)
    }
    n.length !== 0 && (h.all.pushList(n), h.makeCompositeKeyList(n, !0), h.addListToIdMap(n), e.isNotNull(p) && p._onAddDatalist(n));
    return n
  };
  b._addData = function(a, b, d, e, f, h, j, p) {
    var k = a[b], q = this._parentMap;
    q.hasOwnProperty(k) || (b = this._makeParent(a, b, d, k, e, f, j), p.push(b), q[k] = b);
    a[f] = a[d];
    a[h] = this.mid + k
  };
  b._makeParent = function(a, b, d, e, f, h, j) {
    var p = {}, k = 0, q = j.length;
    p[f] = this.mid;
    p[h] = this.mid + e;
    p[b] = e;
    for(p[d] = (this.grid.colDefMgr.getByKey(b).name || b) + ": " + e;k < q;k++) {
      p[j[k]] = a[j[k]]
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
    var b = [], d = this._options, e = this.grid.dataMgr, f = this.collapser, h = f._tree._options;
    this._addData(a, d.key, e.idKey, e._consts._notReal, h.nodeKey, h.parentKey, d.padColKeys, b);
    b.length !== 0 && (a = b[0], e.all.push(a), e.makeCompositeKey(a, !0), e.addToIdMap(a), f._onAddDatarow(a))
  };
  b._onUpdateDatarow = function(a, b, d) {
    if(b.hasOwnProperty(this._options.key)) {
      var e = this._options.key, b = b[e], d = d[e], f = this.mid, e = this.collapser, h = e._tree, j = h._options.parentKey, p = {}, k = {}, q = this._parentMap;
      q.hasOwnProperty(b) || this._onAddDatarow(a);
      p[j] = f + b;
      k[j] = f + d;
      e._onUpdateDatarow(a, p, k);
      a = h.getNode(q[d]);
      a.children.length === 0 && (this.grid.dataMgr.all.remove(a.data), delete q[d], e._onRemoveDatarow(a.data))
    }
  };
  b._onUpdateDatalist = function(a, b, d) {
    var e = this._options.key, f = this.mid, h = this.collapser, j = h._tree, p = j._options.parentKey, k, q = {};
    k = {};
    for(var n = [], o = [], m = [], r = 0, s = a.length;r < s;r++) {
      k = b[r], k.hasOwnProperty(e) && (q = {}, q[p] = f + k[e], n.push(q), k = {}, k[p] = f + d[r][e], o.push(k), m.push(a[r]))
    }
    if(m.length !== 0) {
      a = this._parentMap;
      b = [];
      this._processData(m);
      h._onUpdateDatalist(m, n, o);
      r = 0;
      for(s = o.length;r < s;r++) {
        n = o[r][p], a.hasOwnProperty(n) && (m = j.getNode(a[n]), m.children.length === 0 && (delete a[n], b.push(m.data)))
      }
      b.length !== 0 && (h._onRemoveDatalist(b), this.grid.dataMgr.all.removeList(b))
    }
  };
  b._onRemoveDatarow = function(a) {
    this._isParent(a) ? delete this._parentMap[a[this._options.key]] : (a = this.collapser._tree.getNode(a).parent, a.children.length === 1 && this.grid.dataMgr.remove(a.data))
  };
  b._onRemoveDatalist = function(a) {
    for(var b = 0, d = a.length;b < d;b++) {
      this._onRemoveDatarow(a[b])
    }
  };
  b._onCollapserTreeChange = function() {
    for(var a = {}, b = this._options.sumColKeys, d = b.length, e = 0, f = this.grid.dataMgr._consts._notReal, h = this.mid, j, p, k;e < d;e++) {
      a[b[e]] = 0
    }
    this.collapser._tree.root.traverseChildren({post:!0, fn:function() {
      j = this.data;
      e = 0;
      if(j[f] === h) {
        for(;e < d;e++) {
          p = b[e], j[p] = a[p], a[p] = 0
        }
      }else {
        if(!j.hasOwnProperty(f)) {
          for(;e < d;e++) {
            if(typeof(k = j[b[e]]) === "string") {
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
    var a = "#" + this.grid.mid + " .", b = this._options, d = [];
    d.push(a + b.classCreator + "{" + h._CONST._cssUnselectable + "float:left;width:100%;padding-left:8px;background:" + b.background + ";border-top:" + (b.borderThickness + "px " + b.border) + ";font:" + b.font + "}");
    d.push(a + b.classCreator + " button{float:left;margin:" + b.padding + "px " + b.padding + "px 0 0;height:" + (b.height - 2 * b.padding) + "px}");
    d.push(a + b.classCreator + " input{float:left;padding:0;margin-top:" + (b.height - b.inputHeight - 2 * b.inputBorderThickness) / 2 + "px;height:" + b.inputHeight + "px;border:" + b.inputBorderThickness + "px " + b.inputBorder + ";border-radius:" + b.inputBorderRadius + "px;-moz-border-radius:" + b.inputBorderRadius + "px}");
    d.push(a + b.classCol + "{float:left;overflow:hidden;white-space:nowrap;line-height:" + b.height + "px;margin-right:" + b.inputMargin + "px}");
    d.push(a + b.classColName + "{float:left;margin-right:" + b.nameMargin + "px}");
    d.push(a + b.classCreatorIcon + "{background:url(" + b.creatorIconUrl + ") no-repeat center;width:" + b.creatorIconWidth + "px;height:" + b.creatorIconHeight + "px}");
    return d.join("")
  };
  b._onRenderModules = function() {
    for(var a = [], b = this.grid.colDefMgr.getAll(), d = b.length, f, h = this._options, l = h.classCol, j = h.classColName, p = this, k = this._creator, q = this._inputMap, n = 0, o = function(a) {
      a.which === e.keyMapKeydown.enter && p._addData()
    };n < d;n++) {
      f = b[n], f.inputOnCreate === !0 && a.push("<div key='" + f.key + "' class='" + l + "'><div class='" + j + "'>" + f.name + "</div><input type='text' value='" + e.ifNull(f.defaultValue, "") + "' style='width:" + f.width + "px'/></div>")
    }
    k[0].innerHTML = a.join("") + "<button type='button' onclick='JGM.m.DataCreator." + this.mid + "._addData()'>등록</button><button type='button' onclick='JGM.m.DataCreator." + this.mid + "._reset()'>초기화</button>";
    for(n = 0;n < d;n++) {
      f = b[n], f.inputOnCreate === !0 && (q[f.key] = k.find("div[key='" + f.key + "'] input").keyup(o))
    }
    e.isNotNull(this.grid.menubar) && (this.grid.menubar.addIcon(h.classCreatorIcon, "데이터 로우를 추가합니다.", h.creatorIconWidth, h.creatorIconHeight, function() {
      k.toggle("fast")
    }), k.hide())
  };
  b._addData = function() {
    var a, b = this._inputMap, d = this.grid.colDefMgr, e = {}, f = d.getAll(), h = f.length, j = 0;
    for(a in b) {
      b.hasOwnProperty(a) && d.getByKey(a)
    }
    for(;j < h;j++) {
      d = f[j], a = d.key, b.hasOwnProperty(a) ? e[a] = b[a][0].value : d.defaultValue !== void 0 && (e[a] = d.defaultValue)
    }
    this.grid.event.trigger("onAfterDataCreate", [e], !0);
    this.grid.dataMgr.add(e, {isNew:!0})
  };
  b._reset = function() {
    var a, b = this.grid.colDefMgr, d, e = this._inputMap;
    for(a in e) {
      if(e.hasOwnProperty(a) && (d = b.getByKey(a), d.defaultValue !== void 0)) {
        e[a][0].value = d.defaultValue
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
    2 * b.advButtonBorderThickness, l = j - 2 * b.tagBorderThickness, m = a + b.classMask, n = a + b.classSearchbar, o = a + b.classAdvButton, p = a + b.classRemoveTag, q = [];
    q.push(m + "{" + h._CONST._cssUnselectable + "overflow:hidden;width:100%;background:" + b.background + "}");
    q.push(m + " button{margin:0;padding:0 3px}");
    q.push(m + " input{border:" + b.inputBorder + ";padding:" + b.inputPadding + "}");
    q.push(n + "{text-align:" + b.searchbarAlign + ";border-bottom:" + c + "}");
    q.push(n + " input{width:" + b.searchbarWidth + ";margin:" + b.searchbarMargin + "px 0;height:" + b.searchbarHeight + "px;" + d + "}");
    q.push(a + b.classTagbar + "{cursor:default;height:" + (b.tagsHeight - b.tagsPadding) + "px;padding:" + b.tagsPadding + "px 0 0 " + b.tagsPadding + "px;border-bottom:" + c + "}");
    q.push(o + "{float:left;margin-right:" + b.tagsPadding + "px;background:" + b.advButtonBg + ";border:" + e + ";padding:0 " + b.advButtonPadding + "px;" + d + "}");
    q.push(o + ":hover{background:" + b.advButtonBgHover + ";border:" + f + "}");
    q.push(o + ".opened{background:" + b.advButtonBgOpened + ";border:" + i + "}");
    q.push(o + ":active{background:" + b.advButtonBgActive + ";border:" + g + "}");
    q.push(a + b.classAdvButtonName + "{float:left;color:" + b.advButtonColor + ";font:" + b.advButtonFont + ";line-height:" + k + "px}");
    q.push(a + b.classAdvButtonIcon + "{float:left;height:" + k + "px;margin-left:" + b.advButtonIconMargin + "px;background:url(" + b.advButtonIconUrl + ") no-repeat center;width:" + b.advButtonIconWidth + "px}");
    q.push(o + ".opened ." + b.classAdvButtonIcon + "{background:url(" + b.advButtonIconCloseUrl + ") no-repeat center}");
    q.push(a + b.classTag + "{float:left;border:" + b.tagBorderThickness + "px " + b.tagBorder + ";margin:0 " + b.tagsPadding + "px " + b.tagsPadding + "px 0;padding:0 " + b.tagPadding + "px;background:" + b.tagBackground + ";" + d + "}");
    q.push(a + b.classTagName + "{float:left;color:" + b.tagColor + ";font:" + b.tagFont + ";line-height:" + l + "px}");
    q.push(p + "{float:left;margin-left:" + b.tagPadding + "px;background:url(" + b.tagRemoveIconUrl + ") no-repeat center;width:" + b.tagRemoveIconWidth + "px;height:" + l + "px}");
    q.push(p + ":hover{background:url(" + b.tagRemoveIconHoverUrl + ") no-repeat center}");
    q.push(p + ":active{background:url(" + b.tagRemoveIconActiveUrl + ") no-repeat center}");
    q.push(a + b.classClearTags + "{height:" + j + "px}");
    q.push(a + b.classAdvanced + "{cursor:default;font:" + b.advFont + ";border-bottom:" + c + "}");
    q.push(a + b.classOptionCol + "{display:inline-block;vertical-align:top}");
    q.push(a + b.classOptionCol + " input{width:" + b.advInputWidth + "px;margin-right:2px;" + d + "}");
    q.push(a + b.classSearchIcon + "{background:url(" + b.searchIconUrl + ") no-repeat center;width:" + b.searchIconWidth + "px;height:" + b.searchIconHeight + "px}");
    return q.join("")
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
      var c, d = this._tagMap, f, g, h = a.length, i, j = this._filterMap, k = this.constructor.CONST.and, l, m = this._global.length > 0, n, o;
      if(m) {
        var q = this._global, p;
        i = this.grid.colDefMgr.get().filter(function(a) {
          return!a.noSearch
        });
        var r = i.length, s = [];
        for(n = 0;n < r;n++) {
          s.push(i[n].key)
        }
      }
      n = h - 1;
      a:for(;n >= 0;n--) {
        h = a[n];
        if(m) {
          i = q.slice();
          c = 0;
          for(;i.length !== 0 && c < r;c++) {
            if(!e.isNull(p = h[s[c]])) {
              e.isString(p) || (p = p.toString());
              for(o = i.length - 1;o >= 0;o--) {
                p.indexOf(i[o]) !== -1 && i.removeAt(o)
              }
            }
          }
          if(i.length !== 0) {
            a.removeAt(n);
            b.push(h);
            continue a
          }
        }
        for(f in d) {
          if(d.hasOwnProperty(f)) {
            if(o = d[f], c = j[f].andor, i = h[f], c === k) {
              for(g in o) {
                if(o.hasOwnProperty(g)) {
                  for(l in c = o[g], c) {
                    if(c.hasOwnProperty(l) && !c[l].fn(i)) {
                      a.removeAt(n);
                      b.push(h);
                      continue a
                    }
                  }
                }
              }
            }else {
              for(g in o) {
                if(o.hasOwnProperty(g)) {
                  for(l in c = o[g], c) {
                    if(c.hasOwnProperty(l) && c[l].fn(i)) {
                      continue a
                    }
                  }
                }
              }
              a.removeAt(n);
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
  var a = f.CONST = {lt:0, lte:1, eq:2, neq:3, gt:4, gte:5, and:6, or:7, T:8, F:9}, b = a.lt, c = a.gt, d = a.eq, g = a.neq, i = a.and, l = a.or, j = a.T, a = a.F, p = f._comparator = {}, k = p[b] = function(a, b) {
    return a <= b
  }, q = p[c] = function(a, b) {
    return a >= b
  }, n = p[d] = function(a, b) {
    return a === b
  }, j = p[j] = function() {
    return!0
  }, o = f._disableMap = {}, m = o[b] = {}, r = o[c] = {}, s = o[d] = {}, o = o[g] = {};
  p[a] = function() {
    return!1
  };
  m[b] = {};
  m[b][i] = j;
  m[b][l] = j;
  m[c] = {};
  m[c][i] = k;
  m[c][l] = q;
  m[d] = {};
  m[d][i] = j;
  m[d][l] = q;
  m[g] = {};
  m[g][i] = k;
  m[g][l] = j;
  r[b] = {};
  r[b][i] = q;
  r[b][l] = k;
  r[c] = {};
  r[c][i] = j;
  r[c][l] = j;
  r[d] = {};
  r[d][i] = j;
  r[d][l] = k;
  r[g] = {};
  r[g][i] = q;
  r[g][l] = j;
  s[b] = {};
  s[b][i] = j;
  s[b][l] = k;
  s[c] = {};
  s[c][i] = j;
  s[c][l] = q;
  s[d] = {};
  s[d][i] = j;
  s[d][l] = n;
  s[g] = {};
  s[g][i] = j;
  s[g][l] = j;
  o[b] = {};
  o[b][i] = q;
  o[b][l] = j;
  o[c] = {};
  o[c][i] = k;
  o[c][l] = j;
  o[d] = {};
  o[d][i] = j;
  o[d][l] = j;
  o[g] = {};
  o[g][i] = n;
  o[g][l] = j;
  f._checkDisable = function(a, b, c, d, e) {
    try {
      return this._disableMap[a][b][c](d, e)
    }catch(f) {
      return!1
    }
  };
  f._numberFilter = [{name:"gt", tag:">", type:c, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 큰"
  }, fn:function(a) {
    e.isString(a) && (a = a.toFloat());
    return function(b) {
      return b > a
    }
  }}, {name:"gte", tag:">=", type:c, comment:function(a, b) {
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
  }}, {name:"eq", tag:"=", type:d, comment:function(a, b) {
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
  }}, {name:"from", tag:">=", type:c, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 사전에서 이후인"
  }, fn:function(a) {
    a = $.trim(a).toLowerCase();
    return function(b) {
      return b.toLowerCase() >= a
    }
  }}, {name:"equals", tag:"=", type:d, comment:function(a, b) {
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
