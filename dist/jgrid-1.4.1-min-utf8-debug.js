/**
 * JexGrid Build 15
 * Date: Fri Aug 5 13:08:36 KST 2011
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
          var h = b[d];
          f.call(e, h, d, b) && c.push(h)
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
        var h = String(d);
        a.hasOwnProperty(h) && (h = a[h], f.call(b, h, d, a));
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
  var f = Number.prototype, g = String.prototype, e = Array.prototype;
  if(!f.toFixedFloat) {
    f.toFixedFloat = function(b) {
      return parseFloat(this.toFixed(b))
    }
  }
  if(!g.toInt) {
    g.toInt = function() {
      var b;
      if((b = this.replace(/[^\d\.\-]/g, "")).length === 0) {
        return NaN
      }
      for(var a, c = 0, d = 0, h = b.length, j = 0, k = !1;j < h;j++) {
        if(a = b.charAt(j), a === ".") {
          if(++c === 2) {
            k = !0;
            break
          }
        }else {
          if(a === "-" && ++d === 2) {
            k = !0;
            break
          }
        }
      }
      return k === !0 && (b = b.replace(/[\.\-]/g, "")).length === 0 ? NaN : /^-*0*\./.test(b) || (b = b.replace(/^-0+/, "-")).length === 0 || (b = b.replace(/^0+/, "")).length === 0 ? 0 : parseInt(b, 10)
    }
  }
  if(!g.toFloat) {
    g.toFloat = function() {
      var b;
      if((b = this.replace(/[^-\d\.]/g, "")).length === 0) {
        return NaN
      }
      for(var a = 0, c = b.length, d, h = 0, j = 0;a < c;a++) {
        if(d = b.charAt(a), d === ".") {
          if(h !== 0) {
            return NaN
          }else {
            h++
          }
        }else {
          if(d === "-") {
            if(j !== 0) {
              return NaN
            }else {
              j++
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
    for(var g = f;g = g.substring(0, g.lastIndexOf("."));) {
      if(goog.getObjectByName(g)) {
        break
      }
      goog.implicitNamespaces_[g] = !0
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
goog.exportSymbol_ = function(f, g, e) {
  f = f.split(".");
  e = e || goog.global;
  !(f[0] in e) && e.execScript && e.execScript("var " + f[0]);
  for(var b;f.length && (b = f.shift());) {
    !f.length && goog.isDef(g) ? e[b] = g : e = e[b] ? e[b] : e[b] = {}
  }
};
goog.getObjectByName = function(f, g) {
  for(var e = f.split("."), b = g || goog.global, a;a = e.shift();) {
    if(goog.isDefAndNotNull(b[a])) {
      b = b[a]
    }else {
      return null
    }
  }
  return b
};
goog.globalize = function(f, g) {
  var e = g || goog.global, b;
  for(b in f) {
    e[b] = f[b]
  }
};
goog.addDependency = function(f, g, e) {
  if(!COMPILED) {
    for(var b, f = f.replace(/\\/g, "/"), a = goog.dependencies_, c = 0;b = g[c];c++) {
      a.nameToPath[b] = f, f in a.pathToNames || (a.pathToNames[f] = {}), a.pathToNames[f][b] = !0
    }
    for(b = 0;g = e[b];b++) {
      f in a.requires || (a.requires[f] = {}), a.requires[f][g] = !0
    }
  }
};
goog.ENABLE_DEBUG_LOADER = !0;
goog.require = function(f) {
  if(!COMPILED && !goog.isProvided_(f)) {
    if(goog.ENABLE_DEBUG_LOADER) {
      var g = goog.getPathFromDeps_(f);
      if(g) {
        goog.included_[g] = !0;
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
        for(var f = goog.global.document.getElementsByTagName("script"), g = f.length - 1;g >= 0;--g) {
          var e = f[g].src, b = e.lastIndexOf("?"), b = b == -1 ? e.length : b;
          if(e.substr(b - 7, 7) == "base.js") {
            goog.basePath = e.substr(0, b - 7);
            break
          }
        }
      }
    }
  }, goog.importScript_ = function(f) {
    var g = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_;
    !goog.dependencies_.written[f] && g(f) && (goog.dependencies_.written[f] = !0)
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
        a in e || (e[a] = !0, g.push(a))
      }
    }
    var g = [], e = {}, b = goog.dependencies_, a;
    for(a in goog.included_) {
      b.written[a] || f(a)
    }
    for(a = 0;a < g.length;a++) {
      if(g[a]) {
        goog.importScript_(goog.basePath + g[a])
      }else {
        throw Error("Undefined script input");
      }
    }
  }, goog.getPathFromDeps_ = function(f) {
    return f in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[f] : null
  }, goog.findBasePath_()
}
goog.typeOf = function(f) {
  var g = typeof f;
  if(g == "object") {
    if(f) {
      if(f instanceof Array) {
        return"array"
      }else {
        if(f instanceof Object) {
          return g
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
    if(g == "function" && typeof f.call == "undefined") {
      return"object"
    }
  }
  return g
};
goog.propertyIsEnumerableCustom_ = function(f, g) {
  if(g in f) {
    for(var e in f) {
      if(e == g && Object.prototype.hasOwnProperty.call(f, g)) {
        return!0
      }
    }
  }
  return!1
};
goog.propertyIsEnumerable_ = function(f, g) {
  return f instanceof Object ? Object.prototype.propertyIsEnumerable.call(f, g) : goog.propertyIsEnumerableCustom_(f, g)
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
  var g = goog.typeOf(f);
  return g == "array" || g == "object" && typeof f.length == "number"
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
  }catch(g) {
  }
};
goog.UID_PROPERTY_ = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36);
goog.uidCounter_ = 0;
goog.getHashCode = goog.getUid;
goog.removeHashCode = goog.removeUid;
goog.cloneObject = function(f) {
  var g = goog.typeOf(f);
  if(g == "object" || g == "array") {
    if(f.clone) {
      return f.clone()
    }
    var g = g == "array" ? [] : {}, e;
    for(e in f) {
      g[e] = goog.cloneObject(f[e])
    }
    return g
  }
  return f
};
goog.bindNative_ = function(f, g, e) {
  return f.call.apply(f.bind, arguments)
};
goog.bindJs_ = function(f, g, e) {
  if(!f) {
    throw Error();
  }
  if(arguments.length > 2) {
    var b = Array.prototype.slice.call(arguments, 2);
    return function() {
      var a = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(a, b);
      return f.apply(g, a)
    }
  }else {
    return function() {
      return f.apply(g, arguments)
    }
  }
};
goog.bind = function(f, g, e) {
  goog.bind = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? goog.bindNative_ : goog.bindJs_;
  return goog.bind.apply(null, arguments)
};
goog.partial = function(f, g) {
  var e = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, e);
    return f.apply(this, b)
  }
};
goog.mixin = function(f, g) {
  for(var e in g) {
    f[e] = g[e]
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
        var g = goog.global.document, e = g.createElement("script");
        e.type = "text/javascript";
        e.defer = !1;
        e.appendChild(g.createTextNode(f));
        g.body.appendChild(e);
        g.body.removeChild(e)
      }
    }else {
      throw Error("goog.globalEval not available");
    }
  }
};
goog.evalWorksForGlobals_ = null;
goog.getCssName = function(f, g) {
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
  return g ? f + "-" + b(g) : b(f)
};
goog.setCssNameMapping = function(f, g) {
  goog.cssNameMapping_ = f;
  goog.cssNameMappingStyle_ = g
};
goog.getMsg = function(f, g) {
  var e = g || {}, b;
  for(b in e) {
    var a = ("" + e[b]).replace(/\$/g, "$$$$"), f = f.replace(RegExp("\\{\\$" + b + "\\}", "gi"), a)
  }
  return f
};
goog.exportSymbol = function(f, g, e) {
  goog.exportSymbol_(f, g, e)
};
goog.exportProperty = function(f, g, e) {
  f[g] = e
};
goog.inherits = function(f, g) {
  function e() {
  }
  e.prototype = g.prototype;
  f.superClass_ = g.prototype;
  f.prototype = new e;
  f.prototype.constructor = f
};
goog.base = function(f, g, e) {
  var b = arguments.callee.caller;
  if(b.superClass_) {
    return b.superClass_.constructor.apply(f, Array.prototype.slice.call(arguments, 1))
  }
  for(var a = Array.prototype.slice.call(arguments, 2), c = !1, d = f.constructor;d;d = d.superClass_ && d.superClass_.constructor) {
    if(d.prototype[g] === b) {
      c = !0
    }else {
      if(c) {
        return d.prototype[g].apply(f, a)
      }
    }
  }
  if(f[g] === b) {
    return f.constructor.prototype[g].apply(f, a)
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
  var f = window.console, g = [], e;
  e = f && f.log ? function(b) {
    for(var a = 0, c = arguments.length;a < c;a++) {
      f.log(arguments[a])
    }
  } : function(b) {
    g.push.apply(g, arguments)
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
    c = c === void 0 ? function(d) {
      return!!d
    } : c;
    d = d === void 0 ? function(d) {
      return $.trim(d)
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
      for(var d = [], h = b.length, j = 0, c = c !== void 0 ? c - 1 : void 0;j < h;j++) {
        j in b && (d[j] = Util.clone(b[j], a, c))
      }
      return d
    }
    d = {};
    h = Util.isEmptyObj(a);
    if(c === 1) {
      if(h) {
        for(j in b) {
          b.hasOwnProperty(j) && (d[j] = b[j])
        }
      }else {
        for(j in a) {
          a.hasOwnProperty(j) && b.hasOwnProperty(j) && (d[j] = b[j])
        }
      }
    }else {
      if(c = c !== void 0 ? c - 1 : void 0, h) {
        for(j in b) {
          b.hasOwnProperty(j) && (d[j] = Util.clone(b[j], void 0, c))
        }
      }else {
        for(j in a) {
          a.hasOwnProperty(j) && b.hasOwnProperty(j) && (d[j] = Util.clone(b[j], void 0, c))
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
  Util.formatNumber = function(b, a, c, d, h) {
    var c = c === void 0 ? "&#8361; " : c, a = isNaN(a) ? 0 : a, d = d === void 0 ? "." : d, h = h === void 0 ? "," : h, j = b < 0 ? "-" : "", k = parseInt(b = Math.abs(+b || 0).toFixed(a), 10) + "", i = k.length, i = i > 3 ? i % 3 : 0;
    return c + j + (i ? k.substr(0, i) + h : "") + k.substr(i).replace(/(\d{3})(?=\d)/g, "$1" + h) + (a ? d + Math.abs(b - k).toFixed(a).slice(2) : "")
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
      for(var c = b.classList ? b.classList : Util.split(b.className), d = 0, h = c.length;d < h;d++) {
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
      for(var c = 0, d = b.childNodes, h = d.length, j;c < h;c++) {
        if(Util.isNotNull(d[c]) && (j = Util.findFirstByClass(d[c], a)) !== void 0) {
          return j
        }
      }
    }
  };
  Util.findFirstByTagAndClass = function(b, a, c) {
    if(b != null) {
      if(Util.hasTagAndClass(b, a, c)) {
        return b
      }
      for(var d = 0, b = b.childNodes, h = b.length, j;d < h;d++) {
        if(Util.isNotNull(b[d]) && (j = Util.findFirstByTagAndClass(b[d], a, c)) !== void 0) {
          return j
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
    for(var d = 0, b = b.childNodes, h = b.length;d < h;d++) {
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
    for(var h = 0, b = b.childNodes, j = b.length;h < j;h++) {
      Util.isNotNull(b[h]) && Util.findByTagAndClass(b[h], a, c, d)
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
    var c = document.createElement("div"), d, h = 0, j = [];
    c.innerHTML = a;
    for(d = c.childNodes.length;h < d;h++) {
      j.push(b.appendChild(c.firstChild))
    }
    return j
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
    var d = c.length, h = c[0];
    if(d === 1) {
      return h === "array" ? Util.areEqualArrays(b, a) : Util.areEqualObjects(b, a)
    }
    if(d > 1) {
      c = c.slice(1);
      d = 0;
      if(h === "array") {
        if(b.length !== a.length) {
          return!1
        }
        for(h = b.length;d < h;d++) {
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
  Util.typeCheck = function(b, a, c, d, h) {
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
    if(h) {
      return!1
    }
    throw new TypeError("object is not a " + b + ", but is a " + typeof a);
  };
  Util.sprint = function(b, a, c, d) {
    Util.typeCheck("string", b);
    Util.typeCheck("object", a);
    Util.typeCheck("string", c, !0);
    Util.typeCheck("string", d, !0);
    var h;
    c === void 0 && (c = "%");
    d === void 0 && (d = "%");
    for(h in a) {
      a.hasOwnProperty(h) && (b = b.replace(RegExp(c + h + d, "gm"), a[h]))
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
    return b.replace(RegExp("(" + d.join("|") + ")", "gm"), function(d) {
      return a[d]
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
  var g = goog.getObjectByName("jx.util");
  goog.exportSymbol("Tracer", f);
  var e = f.prototype;
  e.print = function(b, a, c) {
    b === void 0 && (b = "");
    a === void 0 && (a = "timer");
    c === void 0 && (c = !0);
    var d = this.timers[a], h = (new Date).getTime(), d = g.isNull(d) ? 0 : h - d;
    g.print((this.stack.length > 0 ? this.stack + " :: " : "") + b + ", Time elapsed since last update: " + d + "ms");
    c && (this.timers[a] = h)
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
  var g = f.prototype;
  g.lap = function(e) {
    if(this._stopped) {
      throw Error("TimeWatch was stopped, thus cannot lap. Please reset!");
    }
    this.laps.push(e || null, (new Date).getTime())
  };
  g.stop = function(e) {
    this._stopped = !0;
    this.laps.push(e || null, (new Date).getTime())
  };
  g.reset = function(e) {
    var b = this.laps;
    b.length = 0;
    this._stopped = !1;
    b.push(e || null, (new Date).getTime())
  };
  g.toString = function() {
    var e = this.laps, b = e.length, a = 2, c = b - (this._stopped ? 2 : 0), d = e[0], h = e[1], j = h, b = b > 2 ? [] : null, k = 0, i = "TimeWatch\n";
    for(i += "start" + (d ? ": " + d : "") + " @" + h + "\n";a < c;a += 2) {
      d = (d = e[a]) ? ": " + d : "", h = e[a + 1], b.push(j = h - j), k += j, i += "lap " + a / 2 + d + " @" + h + " +" + j + "ms\n", j = h
    }
    c >= 2 && this._stopped && (d = (d = e[c]) ? ": " + d : "", h = e[c + 1], b.push(j = h - j), k += j, i += "stop" + d + " @" + h + " +" + j + "ms\n");
    if(b) {
      var e = b.length, f = k / e, l = 0;
      i += "total number of laps: " + e + "\n";
      i += "total elapsed time: " + k + "ms\n";
      i += "average lap time: " + f.toFixed(2) + "ms\n";
      b.forEach(function(d) {
        l += (d - f) * (d - f)
      });
      l = Math.sqrt(l / e);
      i += "standard deviation: " + l.toFixed(2) + "ms\n"
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
    var g, e, b, a;
    if(this.length <= 1) {
      return g = this.getBoundingRect(), b = f.pageX, a = f.pageY, b >= g.left && b <= g.left + g.width && a >= g.top && a <= g.top + g.height
    }
    e = !1;
    this.each(function() {
      g = $(this).getBoundingRect();
      b = f.pageX;
      a = f.pageY;
      if(b >= g.left && b <= g.left + g.width && a >= g.top && a <= g.top + g.height) {
        return e = !0, !1
      }
    });
    return e
  };
  Util$.baseurlOfHeadScript = function(f) {
    var g = $(document.getElementsByTagName("head")[0]).find("script[src$='" + f + "']").attr("src");
    return g.substring(0, g.indexOf(f))
  };
  Util$.calScrollbarDims = function(f) {
    if(Util.isNotNull(window._SCROLLBAR)) {
      return window._SCROLLBAR
    }
    if(Util.isNotNull(window.opener) && Util.isNotNull(window.opener._SCROLLBAR)) {
      return window.opener._SCROLLBAR
    }
    var f = Util$.safe$(f), g;
    f[0].innerHTML = "<div id='scrollbardim' style='position:absolute;top:-10000px;left:-10000px;width:100px;height:100px;overflow:scroll;'></div>";
    g = $(document.getElementById("scrollbardim"));
    g = {w:g.width() - g[0].clientWidth, h:g.height() - g[0].clientHeight};
    f[0].innerHTML = "";
    return window._SCROLLBAR = g
  }
})();
console && console.log && console.log('reading javascript source "bootstrap.js"...');
jx.grid = {};
var JGM = {};
(function() {
  var f = goog.getObjectByName("jx.util"), g = goog.getObjectByName("jx.util$");
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
        var a = b.mid = "JGM" + this.m.length++, c = new this[e](b);
        this.m.hasOwnProperty(e) || (this.m[e] = {});
        this.m[e][a] = c;
        e === "Grid" && c.name && (this.gridMap[c.name] = c);
        return c
      }else {
        return new this[e](b)
      }
    }else {
      return new this[e](b)
    }
  };
  JGM._destroy = function(e, b) {
    var a, c, d, h;
    for(c in b) {
      if(b.hasOwnProperty(c)) {
        switch(c) {
          case "map":
            a = b[c];
            if(f.isString(a)) {
              a = f.split(a);
              h = a.length;
              for(d = 0;d < h;d++) {
                JGM._deleteMap(e, a[d])
              }
            }else {
              if(a instanceof Array) {
                h = a.length;
                for(d = 0;d < h;d++) {
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
              h = a.length;
              for(d = 0;d < h;d++) {
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
              h = a.length;
              for(d = 0;d < h;d++) {
                JGM._delete$(e, a[d])
              }
            }else {
              if(a instanceof Array) {
                h = a.length;
                for(d = 0;d < h;d++) {
                  g.unbindRemove(a[d])
                }
              }else {
                g.unbindRemove(a)
              }
            }
            break;
          case "style":
            a = b[c];
            if(f.isString(a)) {
              a = f.split(a);
              h = a.length;
              for(d = 0;d < h;d++) {
                JGM._deleteStyle(e, a[d])
              }
            }else {
              if(a instanceof Array) {
                h = a.length;
                for(d = 0;d < h;d++) {
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
              h = a.length;
              for(d = 0;d < h;d++) {
                delete e[a[d]]
              }
            }else {
              if(a instanceof Array) {
                h = a.length;
                for(d = 0;d < h;d++) {
                  delete e[a[d]]
                }
              }
            }
            break;
          case "module":
            a = b[c];
            if(f.isString(a)) {
              a = f.split(a);
              h = a.length;
              for(d = 0;d < h;d++) {
                JGM._deleteModule(e, a[d])
              }
            }else {
              if(a instanceof Array) {
                h = a.length;
                for(d = 0;d < h;d++) {
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
    e.hasOwnProperty(b) && (g.unbindRemove(e[b]), delete e[b])
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
    var e = f.mapping, b = f.attr, a = f["default"], c = f.style, d = f.callback, h, j, k, i = 0, q = [], l = [], n = "<select";
    if(b) {
      for(k in b) {
        b.hasOwnProperty(k) && (n += " " + k + '="' + b[k] + '"')
      }
    }
    if(c) {
      n += ' style="';
      for(k in c) {
        c.hasOwnProperty(k) && (n += k + ":" + c[k] + ";")
      }
      n += '"'
    }
    n += ">";
    for(h in e) {
      e.hasOwnProperty(h) && (f = e[h], q.push(h), l.push(f), a == f && (j = i), i++)
    }
    return function(a) {
      var c, h, b = n;
      for(h = 0;h < i;h++) {
        if(a == l[h]) {
          c = h;
          break
        }
      }
      c === void 0 && (c = j);
      for(h = 0;h < i;h++) {
        b += '<option value="' + l[h] + '"', h === c && (b += ' selected="selected"'), b += ">" + q[h] + "</option>"
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
  function g(d, a, c) {
    if(typeof d != "object") {
      return!1
    }
    var b, i, e;
    if(a) {
      for(var c = 0, f = a.length;c < f;c++) {
        if(b = a[c], this.hasOwnProperty(b)) {
          if(d.hasOwnProperty(b)) {
            if(i = this[b], e = d[b], i !== d && !(i === i || e === e)) {
              return!1
            }
          }else {
            return!1
          }
        }else {
          if(d.hasOwnProperty(b)) {
            return!1
          }
        }
      }
    }else {
      if(c) {
        for(b in this) {
          if(this.hasOwnProperty(b)) {
            if(!d.hasOwnProperty(b)) {
              return!1
            }
            i = this[b];
            e = d[b];
            if(i !== e) {
              if(i) {
                if(typeof i != "object" || typeof e != "object") {
                  return!1
                }
                if(i.equals) {
                  if(!i.equals(e, null, c - 1)) {
                    return!1
                  }
                }else {
                  if(e.equals && !e.equals(i, null, c - 1)) {
                    return!1
                  }
                }
                if(!g.call(i, e, null, c - 1)) {
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
            if(d.hasOwnProperty(b)) {
              if(i = this[b], e = d[b], i !== d && !(i === i || e === e)) {
                return!1
              }
            }else {
              return!1
            }
          }
        }
      }
      for(b in d) {
        if(d.hasOwnProperty(b) && !this.hasOwnProperty(b)) {
          return!1
        }
      }
    }
    return!0
  }
  function e(d, a) {
    if(this != goog.global) {
      var j, b;
      if(d) {
        for(j in this) {
          if(this.hasOwnProperty(j)) {
            if((b = this[j]) && typeof b == "object") {
              if(b.dispose) {
                b.dispose(d - 1, a)
              }else {
                if(a) {
                  if(c(b)) {
                    b.length = 0
                  }
                  e.call(b, d - 1, a)
                }
              }
            }
            delete this[j]
          }
        }
      }else {
        for(j in this) {
          this.hasOwnProperty(j) && delete this[j]
        }
      }
    }
  }
  var b = goog.getObjectByName("jx.util");
  goog.exportSymbol("jx.lang.Disposable", f);
  goog.exportProperty(f.prototype, "dispose", e);
  var a = f.prototype, c = b.isArray;
  b.equals = Object.equals = function(d, a, c, b) {
    return typeof d == "object" ? g.call(d, a, c, b) : d !== d && a !== a
  };
  b.dispose = Object.dispose = function(d, a, c) {
    if(typeof d == "object") {
      return e.call(d, a, c)
    }
  };
  a.equals = g;
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
  var g = goog.getObjectByName("jx.util"), e = goog.getObjectByName("jx.lang.Disposable");
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
    if(g.isNull(this._datarow)) {
      if(g.isNotNull(a.row)) {
        this._datarow = this.grid.dataMgr.getByIdx(a.row)
      }else {
        if(g.isNotNull(a.node)) {
          this._datarow = this.grid.dataMgr.getByNode(a.node.parentNode)
        }else {
          if(g.isNotNull(a.$)) {
            this._datarow = this.grid.dataMgr.getByNode(a.$[0].parentNode)
          }
        }
      }
    }
    if(g.isNull(this._colDef)) {
      if(g.isNotNull(a.col)) {
        this._colDef = this.grid.colDefMgr.get(a.col)
      }else {
        if(g.isNotNull(a.node)) {
          this._colDef = this.grid.colDefMgr.get(g.index(a.node))
        }else {
          if(g.isNotNull(a.$)) {
            this._colDef = this.grid.colDefMgr.get(g.index(a.$[0]))
          }
        }
      }
    }
    if(g.isNullOr(this._datarow, this._colDef) && g.isNotNull(a.event) && (a = this.grid.view._getClosestCell(a.event.target), g.isNotNull(a))) {
      this._datarow = this.grid.dataMgr.getByNode(a.parentNode), this._colDef = this.grid.colDefMgr.get(g.index(a))
    }
  };
  b.destroy = function() {
    this.dispose()
  };
  b.getRowIdx = function() {
    if(g.isNotNull(this._datarow)) {
      return this.grid.dataMgr.getIdx(this._datarow)
    }
  };
  b.getColIdx = function() {
    if(g.isNotNull(this._colDef)) {
      return this.grid.colDefMgr.getIdx(this._colDef)
    }
  };
  b.getNode = function() {
    if(g.isNotNullAnd(this._datarow, this._colDef)) {
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
    if(g.isNotNull(this._colDef)) {
      return this._colDef.key
    }
  };
  b.getId = function() {
    return this.grid.dataMgr.getId(this._datarow)
  };
  b.getValue = function() {
    if(g.isNotNullAnd(this._datarow, this._colDef)) {
      return this._datarow[this._colDef.key]
    }
  };
  b.isValid = function() {
    return g.isNotNull(this.getNode())
  };
  b.isInvalid = function() {
    return g.isNull(this.getNode())
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
  var g = goog.getObjectByName("jx.lang.Disposable");
  goog.exportSymbol("jx.events.EventDispatcher", f);
  goog.inherits(f, g);
  var e = f.prototype, b = g.prototype.dispose;
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
        for(var h = d[a], j = -1;(j = h.indexOf(c, j + 1)) !== -1;) {
          h.splice(j, 1)
        }
        h.length === 0 && delete d[a]
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
      for(var c = c[d], d = 0, h = c.length, j;d < h && !a.stopPropagation;d++) {
        j = c[d], j.handleEvent ? j.handleEvent(a) : j.call(this, a)
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
  var g = goog.getObjectByName("jx.events.EventDispatcher");
  goog.exportSymbol("jx.grid.Column", f);
  goog.inherits(f, g);
  g = f.prototype;
  g.show = function() {
    return this.hidden ? (this.hidden = !1, this.dispatchEvent({type:"hidden", value:!1}), !0) : !1
  };
  g.hide = function() {
    return!this.hidden ? (this.hidden = !0, this.dispatchEvent({type:"hidden", value:!0}), !0) : !1
  };
  g.setHidden = function(e) {
    return e ? this.hide() : this.show()
  };
  g.setWidth = function(e) {
    return(e = Number(e)) && this.width !== e ? (this.width = e, this.dispatchEvent({type:"width", value:e}), e) : !1
  };
  g.setRenderer = function(e) {
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
    var d = this, h = this.grid;
    h && ["Dispose", "CreateCss", "CreateDynamicCss", "Render", "Keydown", "Keyup", "Keypress", "Mousein", "Mouseout", "Mouseenter", "Mouseleave", "Mousemove", "Mouseover", "Mousedown", "Mouseup", "Click", "Dblclick", "Resize", "ResizeWidth", "ResizeHeight", "Scroll", "ScrollH", "ScrollV"].forEach(function(a) {
      var c = "before" + a, a = "after" + a, b = "_" + c, e = "_" + a;
      d[b] && h.addEventListener(c, function(a) {
        return d[b](a)
      });
      d[e] && h.addEventListener(a, function(a) {
        return d[e](a)
      })
    });
    this._bindEvents && (this.dispatchEvent({type:"beforebindevents"}), this._bindEvents(b), this.dispatchEvent({type:"afterbindevents"}));
    this.dispatchEvent({type:"complete"})
  }
  var g = goog.getObjectByName("jx.events.EventDispatcher");
  goog.exportSymbol("jx.grid.BaseModule", f);
  goog.inherits(f, g);
  var g = f.prototype, e = g.dispose;
  g._beforeDispose = function() {
    this.dispose()
  };
  g.dispose = function() {
    delete this.grid;
    this.dispatchEvent({type:"beforedispose"});
    e.call(this)
  };
  g.getDataMgr = function() {
    return this.grid.dataMgr
  };
  g.getAllData = function() {
    return this.grid.dataMgr.all
  };
  g.getDataList = function() {
    return this.grid.dataMgr.datalist
  };
  g.getIdKey = function() {
    return this.grid.dataMgr.idKey
  };
  g.getColMgr = function() {
    return this.grid.colDefMgr
  };
  g.getColumns = function() {
    return this.grid.colDefMgr.get()
  };
  g.getEventMgr = function() {
    return this.grid.event
  };
  g.getView = function() {
    return this.grid.view
  };
  g.getHeader = function() {
    return this.grid.header
  };
  g.bindGridEvent = function() {
    var b = this.grid.event;
    return b.bind.apply(b, arguments)
  };
  g.triggerGridEvent = function() {
    var b = this.grid.event;
    return b.trigger.apply(b, arguments)
  };
  g.toCssStyle = function(b, a, c) {
    var d = [];
    c || (b = "#" + this.grid.mid + " " + b);
    if(typeof a != "string") {
      var h, c = "";
      a.hasOwnProperty("_prepend") && (a._prepend && d.push(a._prepend), delete a._prepend);
      a.hasOwnProperty("_append") && (a._append && (c = ";" + a._append), delete a._append);
      for(h in a) {
        d.push(h + ":" + a[h])
      }
      d = d.join(";") + c
    }
    return b + "{" + d + "}"
  };
  g.toCssStyles = function(b, a, c) {
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
    this._options = g._extend({idKey:void 0, idColKeys:[], uniqueKeys:[]}, a.options);
    this._consts = {_auto:0, _given:1, _composite:2, _notReal:this.mid + "@NR" + e.random(1E4), _add:0, _addList:1, _update:2, _updateList:3, _remove:4, _removeList:5, unknown:0, number:1, string:2, "boolean":3, date:4, "enum":5};
    e.isNotNull(this._options.idKey) ? (this._idMode = this._consts._given, this.idKey = this._options.idKey) : (this._idMode = this._options.idColKeys.length !== 0 ? this._consts._composite : this._consts._auto, this.idKey = "J@I" + this.mid + "@" + e.random(1E4));
    this._increment = 0;
    this.keyToType = {};
    this._idToIdx = {};
    this._idToData = {};
    this._filters = [];
    this._history = [];
    this._redoHistory = [];
    this.uniqueMap = {};
    this.__init(a)
  }
  var g = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.data.DataManager", f);
  g._add("DataManager", f);
  f.getInstance = function(a) {
    return new f(a)
  };
  var b = f.prototype;
  b.__init = function(a) {
    for(var c = 0, d = this._options.uniqueKeys, h, j = this.uniqueMap, b = d.length, i = this.keyToType, f = this.grid.colDefMgr.getAll();c < b;c++) {
      h = d[c], typeof h === "string" && (j[h] = {})
    }
    b = f.length;
    for(c = 0;c < b;c++) {
      d = f[c], h = d.key, d.hasOwnProperty("unique") && d.unique === !0 && !j.hasOwnProperty(h) && (j[h] = {}), i[h] = this.mapDatatype(d.type)
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
    g._destroy(this, {name:"DataManager", path:"dataMgr", property:"all _idMode _increment idKey _sorter", map:"_consts _idToIdx _idToData _options", array:"datalist failed _history _redoHistory _filters"})
  };
  b.addUniqueIndex = function(a, c, d, h) {
    if(h !== !0 && (e.isNull(a) || e.isEmptyString(c) || e.isNull(d))) {
      return!1
    }
    if(d.hasOwnProperty(c) === !1) {
      return this.grid.error("KEY_UNDEFINED", c)
    }
    if(e.isEmptyString(h = d[c])) {
      return this.grid.error("BAD_NULL", c)
    }
    if(a.hasOwnProperty(h)) {
      return a[h] === d ? !1 : this.grid.error("DUP_ENTRY", h, c)
    }
    a[h] = d;
    return!0
  };
  b.addUniqueIndices = function(a, c, d, h) {
    if(h !== !0 && (e.isNull(a) || e.isEmptyString(c) || e.isEmptyArray(d))) {
      return!1
    }
    for(var b = d.length, k = [], i, f, h = 0;h < b;h++) {
      if(!e.isNull(f = d[h])) {
        if(f.hasOwnProperty(c) === !1) {
          return this.removeUniqueIndices(a, c, k), this.grid.error("KEY_UNDEFINED", c)
        }
        if(e.isEmptyString(i = f[c])) {
          return this.removeUniqueIndices(a, c, k), this.grid.error("BAD_NULL", c)
        }
        if(a.hasOwnProperty(i)) {
          if(a[i] === f) {
            continue
          }
          this.removeUniqueIndices(a, c, k);
          return this.grid.error("DUP_ENTRY", i, c)
        }
        k.push(a[i] = f)
      }
    }
    return k.length > 0
  };
  b.updateUniqueIndex = function(a, c, d, h, b, k) {
    if(k !== !0 && (e.isEmptyObj(a) || e.isEmptyString(c) || e.isNullOr(d, b) || e.isEmptyObj(h))) {
      return!1
    }
    if(h.hasOwnProperty(c) === !1) {
      return!1
    }
    if(b.hasOwnProperty(c) === !1 || d.hasOwnProperty(c) === !1) {
      return this.grid.error("KEY_UNDEFINED", c)
    }
    if(a.hasOwnProperty(b = b[c]) === !1) {
      return this.grid.error("KEY_NOT_FOUND", b, c)
    }
    if(e.isEmptyString(h = h[c])) {
      return this.grid.error("BAD_NULL", c)
    }
    if(a.hasOwnProperty(h)) {
      return a[h] === d ? !1 : this.grid.error("DUP_ENTRY", h, c)
    }
    a[h] = d;
    delete a[b];
    return b
  };
  b.updateUniqueIndices = function(a, c, d, h, b, k) {
    if(k !== !0) {
      if(e.isEmptyObj(a) || e.isEmptyString(c) || e.isEmptyArray(d) || e.isEmptyArray(h) || e.isEmptyArray(b)) {
        return!1
      }
      if(d.length !== h.length || d.length !== b.length) {
        return this.grid.error("LENGTH_NOT_EQUAL")
      }
    }
    for(var k = 0, i = d.length, f, l, g, m = [], o = [], p = [], s, r;k < i;k++) {
      if(!e.isNull(f = d[k])) {
        if((g = h[k]).hasOwnProperty(c) !== !1) {
          l = b[k];
          if(l.hasOwnProperty(c) === !1 || f.hasOwnProperty(c) === !1) {
            return this.updateUniqueIndices(a, c, m, p, o), this.grid.error("KEY_UNDEFINED", c)
          }
          if(a.hasOwnProperty(r = l[c]) === !1) {
            return this.updateUniqueIndices(a, c, m, p, o), this.grid.error("KEY_NOT_FOUND", r, c)
          }
          if(e.isEmptyString(s = g[c])) {
            return this.updateUniqueIndices(a, c, m, p, o), this.grid.error("BAD_NULL", c)
          }
          if(a.hasOwnProperty(s)) {
            if(a[s] === f) {
              continue
            }
            this.updateUniqueIndices(a, c, m, p, o);
            return this.grid.error("DUP_ENTRY", s, c)
          }
          a[s] = f;
          delete a[r];
          m.push(f);
          o.push(g);
          p.push(l)
        }
      }
    }
    return m.length === 0 ? !1 : {datalist:m, changes:o, befores:p}
  };
  b.removeUniqueIndex = function(a, c, d, h) {
    if(!(h !== !0 && (e.isEmptyObj(a) || e.isEmptyString(c) || e.isEmptyObj(d)))) {
      var b;
      d.hasOwnProperty(c) && a.hasOwnProperty(b = d[c]) && delete a[b]
    }
  };
  b.removeUniqueIndices = function(a, c, d, h) {
    if(!(h !== !0 && (e.isEmptyObj(a) || e.isEmptyString(c) || e.isEmptyArray(d)))) {
      for(var b = d.length, k, i, h = 0;h < b;h++) {
        i = d[h], i.hasOwnProperty(c) && a.hasOwnProperty(k = i[c]) && delete a[k]
      }
    }
  };
  b.addToUniqueMap = function(a) {
    if(e.isEmptyObj(a) || e.isEmptyObj(this.uniqueMap)) {
      return!1
    }
    var c = [], d, h = this.uniqueMap, b;
    for(d in h) {
      if(h.hasOwnProperty(d)) {
        if(b = this.addUniqueIndex(h[d], d, a), b === !0) {
          c.push(d)
        }else {
          if(b instanceof Error) {
            d = 0;
            for(var k = c.length;d < k;d++) {
              this.removeUniqueIndex(h[c[d]], c[d], a)
            }
            return b
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
    var c = this.uniqueMap, d = [], h, b;
    for(h in c) {
      if(c.hasOwnProperty(h)) {
        if(b = this.addUniqueIndices(c[h], h, a), b === !0) {
          d.push(h)
        }else {
          if(b instanceof Error) {
            h = 0;
            for(var k = d.length;h < k;h++) {
              this.removeUniqueIndices(c[d[h]], d[h], a)
            }
            return b
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
    var h, b = this.uniqueMap, k = [], i;
    for(h in b) {
      if(b.hasOwnProperty(h)) {
        i = this.updateUniqueIndex(b[h], h, a, c, d);
        if(i instanceof Error) {
          h = 0;
          for(var f = k.length;h < f;h++) {
            this.updateUniqueIndex(b[k[h]], k[h], a, d, c)
          }
          return i
        }
        i !== !1 && k.push(h)
      }
    }
    return k.length > 0
  };
  b.updateListUniqueMap = function(a, c, d) {
    if(e.isEmptyArray(a) || e.isEmptyArray(c) || e.isEmptyArray(d) || e.isEmptyObj(this.uniqueMap)) {
      return!1
    }
    if(a.length !== c.length || a.length !== d.length) {
      return this.grid.error("LENGTH_NOT_EQUAL")
    }
    var h, b = this.uniqueMap, k = [], i;
    for(h in b) {
      if(b.hasOwnProperty(h)) {
        i = this.updateUniqueIndices(b[h], h, a, c, d);
        if(i instanceof Error) {
          h = 0;
          for(var f = k.length;h < f;h++) {
            this.updateUniqueIndices(b[k[h]], k[h], a, d, c)
          }
          return i
        }
        i !== !1 && k.push(h)
      }
    }
    return k.length > 0
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
        for(var d = 0, h, b = a.length;d < b;d++) {
          if((h = a[d]).hasOwnProperty(c) === !1) {
            h[c] = this._increment++
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
    var h = this.idKey;
    switch(this._idMode) {
      case this._consts._auto:
        if(c.hasOwnProperty(h)) {
          return this.grid.error("NOT_MODIFIABLE", h)
        }
      ;
      case this._consts._given:
        return this.updateUniqueIndex(this._idToData, h, a, c, d);
      case this._consts._composite:
        if(c.hasOwnProperty(h)) {
          return this.grid.error("NOT_MODIFIABLE", h)
        }
        for(var d = this._options.idColKeys, b = d.length, k = 0;k < b;k++) {
          if(c.hasOwnProperty(d[k])) {
            for(var i = "", f = 0, l, g, m = {}, o = {}, k = o[h] = a[h];f < b;f++) {
              if(l = d[f], c.hasOwnProperty(l)) {
                if(e.isEmptyString(g = c[l])) {
                  return this.grid.error("BAD_NULL", l)
                }
                i += "&" + g
              }else {
                i += "&" + a[l]
              }
            }
            a[h] = m[h] = i;
            if(k === i) {
              break
            }
            c = this.updateUniqueIndex(this._idToData, h, a, m, o);
            c instanceof Error && (a[h] = k);
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
    var h = this.idKey, b = a.length, k = 0;
    switch(this._idMode) {
      case this._consts._auto:
        for(;k < b;k++) {
          if(c[k].hasOwnProperty(h)) {
            return this.grid.error("NOT_MODIFIABLE", h)
          }
        }
      ;
      case this._consts._given:
        return this.updateUniqueIndices(this._idToData, h, a, c, d);
      case this._consts._composite:
        for(var i = this._idToData, f, l, g = this._options.idColKeys, m = g.length, o, d = [], p = [], s = [], r = [], t, v, w, y;k < b;k++) {
          f = a[k];
          l = c[k];
          if(l.hasOwnProperty(h)) {
            t = 0;
            for(b = d.length;t < b;t++) {
              p[t][h] = d[t]
            }
            return this.grid.error("NOT_MODIFIABLE", h)
          }
          for(t = 0;t < m;t++) {
            if(l.hasOwnProperty(g[t])) {
              o = "";
              for(v = 0;v < m;v++) {
                if(w = g[v], l.hasOwnProperty(w)) {
                  if(e.isEmptyString(y = l[w])) {
                    t = 0;
                    for(b = d.length;t < b;t++) {
                      p[t][h] = d[t]
                    }
                    return this.grid.error("BAD_NULL", w)
                  }
                  o += "&" + y
                }else {
                  o += "&" + f[w]
                }
              }
              f[h] !== o && (p.push(f), s.push({}), r.push({}), d.push(f[h]), f[h] = o)
            }
          }
        }
        if(p.length === 0) {
          break
        }
        a = this.updateUniqueIndices(i, h, p, s, r);
        if(a instanceof Error) {
          t = 0;
          for(b = d.length;t < b;t++) {
            p[t][h] = d[t]
          }
        }
        return a
    }
    return!1
  };
  b.removeFromIdMap = function(a) {
    var c = this.idKey, d = this._idToData, h;
    e.isNotNull(a) && a.hasOwnProperty(c) && d.hasOwnProperty(h = a[c]) && delete d[h]
  };
  b.removeListFromIdMap = function(a) {
    if(!e.isEmptyArray(a)) {
      for(var c = this.idKey, d = a.length, h = this._idToData, b, k, i = 0;i < d;i++) {
        k = a[i], k.hasOwnProperty(c) && h.hasOwnProperty(b = k[c]) && delete h[b]
      }
    }
  };
  b.fillTemp = function(a, c) {
    if(!e.isNull(a)) {
      var d = this.grid.colDefMgr.getAll(), h = d.length, b, k, i = 0;
      if(c !== void 0 && c.isNew) {
        for(;i < h;i++) {
          k = d[i], b = k.key, k.nullOnCreate && e.isNull(a[b]) && (a[b] = "J@H" + this._increment++)
        }
      }
    }
  };
  b.fillTempList = function(a, c) {
    if(!e.isEmptyArray(a)) {
      var d = this.grid.colDefMgr.getAll(), h = d.length, b = a.length, k, i, f = 0;
      if(c !== void 0 && c.isNew) {
        for(;f < h;f++) {
          if(i = d[f], k = i.key, i.nullOnCreate) {
            for(i = 0;b;i++) {
              a[i][k] = "J@H" + this._increment++
            }
          }
        }
      }
    }
  };
  b.query = function(a) {
    if(typeof a === "string" && (a = $.trim(a), a.length !== 0)) {
      var c, d, h, b, k;
      c = a.toLowerCase();
      d = a.indexOf(" ");
      if(d !== -1 && (h = c.substring(0, d), c = c.indexOf(" where "), b = c > -1, d = $.trim(b ? a.substring(d + 1, c) : a.substring(d + 1)), d.length !== 0)) {
        switch(b && (k = $.trim(a.substring(c + 7))), h) {
          case "select":
            return this.executeSelect(d, k);
          case "insert":
            return this.executeInsert(d, k);
          case "update":
            return this.executeUpdate(d, k);
          case "delete":
            return this.executeDelete(d, k)
        }
      }
    }
  };
  b.parseWhere = function(a) {
    typeof a === "string" && $.trim(a)
  };
  b.executeSelect = function(a) {
    var a = e.split(a, /[\s,]+/), c = a.length, d = 0, h = {}, b = this.all, k = [];
    if(c === 0) {
      return k
    }
    for(;d < c;d++) {
      if(a[d] === "*") {
        break
      }
      h[a[d]] = !0
    }
    d = 0;
    for(c = b.length;d < c;d++) {
      k.push(e.clone(b[d], h))
    }
    return k
  };
  b.parse = function(a, c) {
    if(e.isNull(a)) {
      return!1
    }
    for(var d = this.grid.colDefMgr.getAll(), h = d.length, b, k, i = c !== void 0 && c.isNew, f = 0;f < h;f++) {
      if(k = d[f], !i || !k.nullOnCreate) {
        if(e.isFunction(b = k.parser)) {
          if(k = k.key, a.hasOwnProperty(k)) {
            try {
              a[k] = b(a[k], a)
            }catch(l) {
              return e.isNull(a) ? this.grid.error("PARSE_ERROR", a, k) : this.grid.error("PARSE_ERROR", a[k], k)
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
    for(var d = this.grid.colDefMgr.getAll(), h = d.length, b = a.length, k, i, f = 0, l, g = c !== void 0 && c.isNew, m;f < h;f++) {
      if(i = d[f], !g || !i.nullOnCreate) {
        if(e.isFunction(k = i.parser)) {
          i = i.key;
          try {
            for(l = 0;l < b;l++) {
              m = a[l], m.hasOwnProperty(i) && (m[i] = k(m[i], m))
            }
          }catch(o) {
            return e.isNull(m) ? this.grid.error("PARSE_ERROR", m, i) : this.grid.error("PARSE_ERROR", m[i], i)
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
    for(var d = this.grid.colDefMgr.getAll(), h = d.length, b, k, i, f, l, g, m, o = c !== void 0 && c.isNew, p = 0;p < h;p++) {
      if(b = d[p], k = b.key, l = void 0, f = i = !1, !o || !b.nullOnCreate) {
        if(b.notNull === !0) {
          if(a.hasOwnProperty(k) === !1 || e.isEmptyString(l = a[k])) {
            return this.grid.error("BAD_NULL", k)
          }
          g = l.toString()
        }else {
          a.hasOwnProperty(k) === !1 || e.isNull(l = a[k]) ? f = i = !0 : l === "" && (f = !0), g = i === !1 ? l.toString() : ""
        }
        if(i === !1) {
          if(e.isNotNull(m = b.max) && f === !1 && l > m) {
            return this.grid.error("BIGGER_THAN", l, k, m)
          }
          if(e.isNotNull(m = b.min) && f === !1 && l < m) {
            return this.grid.error("SMALLER_THAN", l, k, m)
          }
          if(e.isNotNull(m = b.length)) {
            if(f === !0 || g.length !== m) {
              return this.grid.error("WRONG_LENGTH", g, m, k)
            }
          }else {
            if(e.isNotNull(m = b.maxlength) && f === !1 && g.length > m) {
              return this.grid.error("DATA_TOO_LONG", g, k, m)
            }
            if(e.isNotNull(m = b.minlength)) {
              if(f === !0 || g.length < m) {
                return this.grid.error("DATA_TOO_SHORT", g, k, m)
              }
            }
          }
        }
        if(e.isFunction(b = b.validator)) {
          try {
            if(b(l, a, g, i, f) !== !0) {
              return this.grid.error("WRONG_VALUE", g, k)
            }
          }catch(s) {
            return this.grid.error("WRONG_VALUE", g, k)
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
    for(var d = this.grid.colDefMgr.getAll(), h = d.length, b = a.length, k, i, f = 0, l, g, m, o, p, s = c !== void 0 && c.isNew, r = [], t = [];f < h;f++) {
      if(k = d[f], i = k.key, g = {}, m = {}, r.length = 0, t.length = 0, !s || !k.nullOnCreate) {
        if(k.notNull === !0) {
          for(l = 0;l < b;l++) {
            if(a[l].hasOwnProperty(i) === !1 || e.isEmptyString(o = a[l][i])) {
              return this.grid.error("BAD_NULL", i)
            }
            r.push(o);
            t.push(o.toString())
          }
        }else {
          for(l = 0;l < b;l++) {
            o = void 0, a[l].hasOwnProperty(i) === !1 || e.isNull(o = a[l][i]) ? (g[l] = !0, m[l] = !0) : o === "" && (m[l] = !0), r.push(o), g.hasOwnProperty(l) ? t.push("") : t.push(o.toString())
          }
        }
        if(e.isNotNull(p = k.max)) {
          for(l = 0;l < b;l++) {
            if(m.hasOwnProperty(l) === !1 && r[l] > p) {
              return this.grid.error("BIGGER_THAN", r[l], i, p)
            }
          }
        }
        if(e.isNotNull(p = k.min)) {
          for(l = 0;l < b;l++) {
            if(m.hasOwnProperty(l) === !1 && r[l] < p) {
              return this.grid.error("SMALLER_THAN", r[l], i, p)
            }
          }
        }
        if(e.isNotNull(p = k.length)) {
          for(l = 0;l < b;l++) {
            if(g.hasOwnProperty(l) === !1 && (m.hasOwnProperty(l) || t[l].length !== p)) {
              return this.grid.error("WRONG_LENGTH", t[l], p, i)
            }
          }
        }else {
          if(e.isNotNull(p = k.maxlength)) {
            for(l = 0;l < b;l++) {
              if(m.hasOwnProperty(l) === !1 && t[l].length > p) {
                return this.grid.error("DATA_TOO_LONG", t[l], i, p)
              }
            }
          }
          if(e.isNotNull(p = k.minlength)) {
            for(l = 0;l < b;l++) {
              if(g.hasOwnProperty(l) === !1 && (m.hasOwnProperty(l) || t[l].length < p)) {
                return this.grid.error("DATA_TOO_SHORT", t[l], i, p)
              }
            }
          }
        }
        if(e.isFunction(k = k.validator)) {
          try {
            for(l = 0;l < b;l++) {
              if(k(r[l], a[l], t[l], g.hasOwnProperty(l), m.hasOwnProperty(l)) !== !0) {
                return this.grid.error("WRONG_VALUE", t[l], i)
              }
            }
          }catch(v) {
            return this.grid.error("WRONG_VALUE", t[l], i)
          }
        }
      }
    }
    return!0
  };
  b.makeCompositeKey = function(a, c) {
    if(!(this._idMode !== this._consts._composite || e.isNull(a))) {
      if(c === !0 || a.hasOwnProperty(this.idKey) === !1) {
        for(var d = this._options.idColKeys, h = d.length, b = 0, k = "";b < h;b++) {
          k += "&" + a[d[b]]
        }
        a[this.idKey] = k
      }
    }
  };
  b.makeCompositeKeyList = function(a, c) {
    if(!(this._idMode !== this._consts._composite || a.length === 0)) {
      var d = this.idKey, h = a.length, b = this._options.idColKeys, k = b.length, i, e = 0, f, g;
      if(c === !0) {
        for(;e < h;e++) {
          i = a[e];
          g = "";
          for(f = 0;f < k;f++) {
            g += "&" + i[b[f]]
          }
          i[d] = g
        }
      }else {
        for(;e < h;e++) {
          if((i = a[e]).hasOwnProperty(d) === !1) {
            g = "";
            for(f = 0;f < k;f++) {
              g += "&" + i[b[f]]
            }
            i[d] = g
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
    for(var c = [], d = [], b = this.idKey, j = this._idToData, k = a.length, i = 0, f, l;i < k;i++) {
      (f = a[i]).hasOwnProperty(b) && j.hasOwnProperty(l = f[b]) ? c.push(j[l]) : d.push(f)
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
    for(var c = this.datalist, d = c.length, b = this.idKey, j = this._idToIdx;a < d;a++) {
      j[c[a][b]] = a
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
    var j = {};
    j[c] = d;
    return this.update(a, j, b)
  };
  b.update = function(a, c, d) {
    if(e.isNullOr(a, c)) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange", !1, !0);
    this.grid.event.trigger("onBeforeUpdateDatarow", [a, c], !0);
    var b = {}, j;
    for(j in c) {
      c.hasOwnProperty(j) && (a[j] === c[j] ? delete c[j] : (b[j] = a[j], a[j] = c[j]))
    }
    if(e.isEmptyObj(b)) {
      return!1
    }
    if((j = this.parse(a, d)) instanceof Error) {
      return this._rollback(a, b), j
    }
    if((j = this.validate(a, d)) instanceof Error) {
      return this._rollback(a, b), j
    }
    if((j = this.updateUniqueMap(a, c, b)) instanceof Error) {
      return this._rollback(a, b), j
    }
    if((j = this.updateIdMap(a, c, b)) instanceof Error) {
      return this._rollback(a, b), j
    }
    j !== !1 && this.grid.event.trigger("onIdChange", [a, j, a[this.idKey]], !0);
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
    for(var d = [], b = [], j = [], k, i, f, l = a.length, g = 0, m;g < l;g++) {
      i = {};
      k = a[g].datarow;
      f = a[g].change;
      for(m in f) {
        f.hasOwnProperty(m) && (k[m] === f[m] ? delete f[m] : (i[m] = k[m], k[m] = f[m]))
      }
      e.isNotEmptyObj(i) && (d.push(k), b.push(i), j.push(f))
    }
    if(d.length === 0) {
      return!1
    }
    if((k = this.parseList(d, c)) instanceof Error) {
      return this._rollbackList(d, b), k
    }
    if((k = this.validateList(d, c)) instanceof Error) {
      return this._rollbackList(d, b), k
    }
    if((k = this.updateListUniqueMap(d, j, b)) instanceof Error) {
      return this._rollbackList(d, b), k
    }
    if((k = this.updateListIdMap(d, j, b)) instanceof Error) {
      return this._rollbackList(d, b), k
    }
    k !== !1 && this.grid.event.trigger("onIdListChange", [k.list, k.befores, this.idKey], !0);
    if(e.isNull(c) || c.undo !== !0) {
      this._history.push({_action:this._consts._updateList, _target:d, _before:b, _change:j}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onUpdateDatalist", [d, j, b, c], !0);
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
    for(var d = a.length, b = 0, j, k, i;b < d;b++) {
      for(i in j = a[b], k = c[b], k) {
        k.hasOwnProperty(i) && (j[i] = k[i])
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
        for(var a = [], b = 0, j = c.length;b < j;b++) {
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
        for(var a = [], b = 0, j = c.length;b < j;b++) {
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
    return a.filter(function(d) {
      return d.hasOwnProperty(c) === !1
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
    for(var c = [], d = a.length, b = 0, j, k, i = this._consts._notReal;b < d;b++) {
      if((k = a[b]).hasOwnProperty(i) === !1) {
        for(j in c.push({}), k) {
          k.hasOwnProperty(j) && k.hasOwnProperty(j) && j.substring(0, 3)
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
    var a = this.datalist, c = this.failed, d = 0, b = this._filters.length, j, k;
    this.grid.event.trigger("onBeforeFilter", [a, c], !0);
    a.length = 0;
    a.pushList(this.all);
    for(c.length = 0;d < b;d++) {
      j = this._filters[d];
      for(k = a.length - 1;k >= 0;k--) {
        j(a[k]) || (c.push(a[k]), a.removeAt(k))
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
    a === void 0 ? this._sort() : a.noSort !== !0 && this._sort(a.sorter);
    (a === void 0 || a.noFilter !== !0) && this._filter();
    this._finish(a)
  };
  b.exportRowToArray = function(a, c) {
    if(!(a in this.datalist)) {
      return null
    }
    c || (c = this.grid.colDefMgr.getKeys());
    for(var d = this.datalist[a], b = [], j, k = 0, i = c.length;k < i;k++) {
      j = c[k], b.push(j in d ? d[j] : null)
    }
    return b
  };
  b.exportToArray = function(a, c, d) {
    a || (a = this.grid.colDefMgr.getKeys());
    for(var c = this.datalist.slice(c, d), b = [], j, k, i = 0, e = c.length, f, g = a.length;i < e;i++) {
      j = c[i];
      f = 0;
      for(d = [];f < g;f++) {
        k = a[f], d.push(k in j ? j[k] : null)
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
  var g = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.EventManager", f);
  f.getInstance = function(a) {
    return new f(a)
  };
  var b = f.prototype;
  b.destroy = function() {
    var a, c = this._map;
    for(a in c) {
      c.hasOwnProperty(a) && g._deleteArray(c, a)
    }
    g._destroy(this, {name:"EventManager", path:"event", map:"_map"})
  };
  b.register = function(a, c, d) {
    if(e.isString(a)) {
      this._parseAndAdd(a, c, d)
    }else {
      if(e.isNotNull(a.e)) {
        this._parseAndAdd(a.e, a.f, a.t)
      }else {
        for(var b, c = a.length, j;b < c;b++) {
          e.isNotNull(j = a[b]) && this._parseAndAdd(j.e, j.f, j.t)
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
    var a = e.split(a), b = a.length, j = 0;
    if(e.isFunction(c)) {
      for(;j < b;j++) {
        this._addHandler(a[j], c, d)
      }
    }else {
      if(e.isString(c)) {
        for(var c = e.split(c), k = c.length, i, f;j < b;j++) {
          i = a[j];
          for(f = 0;f < k;f++) {
            this._addHandler(i, d[c[f]], d)
          }
        }
      }else {
        for(k = c.length;j < b;j++) {
          i = a[j];
          for(f = 0;f < k;f++) {
            this._addHandler(i, c[f], d)
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
        for(var j = 0, k = b.length;j < k;j++) {
          if(b[j].fn === c) {
            b.removeAt(j);
            b.length === 0 && delete d[a];
            break
          }
        }
      }
    }
  };
  b.trigger = function(a, c, d, b) {
    this.grid.log("firing event=" + a, 3);
    var j = this._map;
    if(j.hasOwnProperty(a)) {
      var j = j[a], k = j.length;
      if(k) {
        if(this.grid.log(k + " handlers registered for event=" + a, 4), a = 0, d) {
          if(c && c.length) {
            for(;a < k;a++) {
              d = j[a], d.fn.apply(d.target, c)
            }
          }else {
            for(;a < k;a++) {
              d = j[a], d.fn.call(d.target)
            }
          }
        }else {
          b = b || [];
          if(c && c.length) {
            for(;a < k;a++) {
              d = j[a], b.push(d.fn.apply(d.target, c))
            }
          }else {
            for(;a < k;a++) {
              d = j[a], b.push(d.fn.call(d.target))
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
    var a = a.split(","), b = 0, j = a.length;
    if(d) {
      for(d = [];b < j;b++) {
        this.trigger(a[b], c, !1, d)
      }
      return d
    }else {
      for(;b < j;b++) {
        this.trigger(a[b], c, !0)
      }
    }
  };
  b.triggerInvalid = function(a, c) {
    var d = this.trigger(a, c);
    return d && d.some(function(d) {
      return d === !1
    })
  };
  b.sendToBack = function(a, c) {
    for(var d = this._map[a], b = d.length, j, k = -1, i = 0;i < b;i++) {
      if(d[i].fn === c) {
        k = i;
        j = d[i];
        break
      }
    }
    k > -1 && (d.removeAt(i), d.push(j))
  };
  b.sendToFront = function(a, c) {
    for(var d = this._map[a], b = d.length, j, k = -1, i = 0;i < b;i++) {
      if(d[i].fn === c) {
        k = i;
        j = d[i];
        break
      }
    }
    k > -1 && (d.removeAt(i), d.unshift(j))
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
  function g(a) {
    this.list = a.list;
    this._options = JGM._extend({nodeKey:"nodeId", parentKey:"parentId"}, a.options);
    this.map = {};
    this.root = new f({tree:this});
    this.infants = {}
  }
  var e = goog.getObjectByName("jx.util");
  goog.exportSymbol("jx.struct.TreeNode", f);
  goog.exportSymbol("jx.struct.Tree", g);
  goog.exportSymbol("TreeNode", f);
  goog.exportSymbol("Tree", g);
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
      var d = 0, b = this.children, j = b.length;
      if(a.post) {
        for(;d < j;d++) {
          b[d].traverse(a, d)
        }
        this.callFn(a, c)
      }else {
        if(this.callFn(a, c), a.propagate === !1) {
          delete a.propagate
        }else {
          for(;!a.stop && d < j;d++) {
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
  g.getInstance = function(a) {
    return new g(a)
  };
  b = g.prototype;
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
    for(var c = this._options.nodeKey, d = this.map, b = a.length, j = 0;j < b;j++) {
      this.attachNode(d[a[j][c]])
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
      for(var d = this.infants[c], b = 0, j = d.length;b < j;b++) {
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
  var g = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util"), b = goog.getObjectByName("echo"), a = goog.getObjectByName("jx.grid.BaseModule"), c = goog.getObjectByName("TimeWatch"), d = 1;
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
  f.getInstance = function(d) {
    return new f(d)
  };
  var h = f.prototype;
  h._defaultOptions = function() {
    return{classGrid:"jgrid", border:"1px solid #868686", width:void 0, font:"15px Arial,Helvetica,sans-serif", style:"", borderSide:!0, imageUrl:"../images/", links:{data:"dataMgr.all", datalen:"dataMgr.all.length", shown:"dataMgr.datalist", set:"dataMgr.set", add:"dataMgr.add", addList:"dataMgr.addList", update:"dataMgr.update", updateByKey:"dataMgr.updateByKey", updateList:"dataMgr.updateList", remove:"dataMgr.remove", removeList:"dataMgr.removeList", select:"dataMgr.executeSelect", undo:"dataMgr.undo", 
    redo:"dataMgr.redo", addFilter:"dataMgr.addFilter", removeFilter:"dataMgr.removeFilter", check:"collapser.checkMgr.checkList checkMgr.checkList", checked:"collapser.checkMgr.getCheckList checkMgr.getCheckList", removeChecked:"collapser.checkMgr.removeChecked checkMgr.removeChecked", register:"event.register", trigger:"event.trigger", bind:"event.bind", unregister:"event.unregister", unbind:"event.unregister", collen:"colDefMgr.length"}, autoWidth:!1, showMessage:!1}
  };
  h._init = function(d) {
    var a = this._ctnr = d.container, c = this._options, b;
    this.name = c.name;
    this._drag = !1;
    this._lastH = this._lastW = null;
    this._vars = {scrollbarDim:void 0};
    a = this._ctnr = $("<div id='" + this.mid + "' class='" + c.classGrid + "' " + (e.isNull(c.width) ? "" : "style='width:" + c.width + "px' ") + "tabIndex='0'>").appendTo(Util$.safe$(a));
    this._vars.scrollbarDim = Util$.calScrollbarDims(a);
    b = this.event = g.create("EventManager", {grid:this, options:c.EventManager});
    this.colDefMgr = g.create("ColumnManager", {grid:this, colDefs:d.colDefs, options:c.ColDefManager});
    this.dataMgr = g.create("DataManager", {grid:this, datalist:d.datalist, options:c.DataManager});
    c.CheckManager && (this.checkMgr = g.create("CheckManager", {grid:this, options:c.CheckManager}));
    if(c.Collapser) {
      this.collapser = g.create("Collapser", {grid:this, options:c.Collapser}), this.collapser.__init()
    }
    c.ColGroup && (this.colGroup = g.create("ColumnGroup", {grid:this, options:c.ColGroup}));
    c.SelectionManager && (this.selMgr = g.create("SelectionManager", {grid:this, options:c.SelectionManager}));
    c.EditManager && (this.editMgr = g.create("EditManager", {grid:this, options:c.EditManager}));
    c.ColHeader && (this.header = g.create("ColumnHeader", {grid:this, container:a, options:c.ColHeader}));
    c.SearchManager && (this.search = g.create("SearchManager", {grid:this, container:a, options:c.SearchManager}));
    c.MenuBar && (this.menubar = g.create("MenuBar", {grid:this, container:a, options:c.MenuBar}));
    this.view = g.create("ViewportManager", {grid:this, container:a, options:c.ViewportManager});
    c.TooltipManager && (this.tooltip = g.create("TooltipManager", {grid:this, container:a, options:c.TooltipManager}));
    c.DataCreator && (this.creator = g.create("DataCreator", {grid:this, container:a, options:c.DataCreator}));
    c.Footer && (this.footer = g.create("Footer", {grid:this, container:a, options:c.Footer}));
    c.autoWidth && b.bind("onResizeCanvasWidth", this.width, this);
    this._createCss();
    b.trigger("onBeforeRenderModules", !1, !0);
    b.trigger("onRenderModules", !1, !0);
    b.trigger("onAfterRenderModules", !1, !0);
    this.msg = $("<div id='" + this.mid + "msg' class='msg' onmousedown='$(this).hide(1000)' style='position:relative;padding-left:4px;overflow:hidden;z-index:100;font-size:12px;height:21px;line-height:21px'></div>").appendTo(a).hide();
    a = a[0];
    this._lastW = a.clientWidth;
    this._lastH = a.clientHeight;
    this._registerLinks(c.links)
  };
  h._bindEvents = function() {
    g._bindGlobalEvents();
    this.log("binding Grid events...", d);
    var a = this;
    this._ctnr.bind({keydown:function(d) {
      a._keydown(d)
    }, keyup:function(d) {
      a._keyup(d)
    }, keypress:function(d) {
      a._keypress(d)
    }, mousein:function(d) {
      a._mousein(d)
    }, mouseout:function(d) {
      a._mouseout(d)
    }, mouseenter:function(d) {
      a._mouseenter(d)
    }, mouseleave:function(d) {
      a._mouseleave(d)
    }, mouseover:function(d) {
      a._mouseover(d)
    }, mousedown:function(d) {
      a._mousedown(d)
    }, click:function(d) {
      a._click(d)
    }, dblclick:function(d) {
      a._dblclick(d)
    }});
    this._charts = []
  };
  h.destroy = function() {
    this.log("destroying Grid...", d);
    try {
      this.log("event:beforeDispose.", d), this.dispatchEvent({type:"beforeDispose"}), e.isEmptyObj(g.m.Grid) && (this.log("unbinding global event handlers.", d), g._unbindGlobalEvents()), this.log("event:onDestroy.", d), this.event.trigger("onDestroy", !1, !0), this.log("destroying grid vars...", d), g._destroy(this, {name:"Grid", module:"event", $:"_ctnr", map:"_options", style:"_style _dynStyle"}), this.dispose()
    }catch(a) {
      return a
    }
  };
  h._registerLinks = function(d) {
    var a, c, b, h, f, g, o, p, s, r;
    a:for(a in d) {
      if(d.hasOwnProperty(a) && !(a in this)) {
        c = e.split(d[a]);
        b = c.length;
        h = 0;
        b:for(;h < b;h++) {
          if(f = c[h].split("."), g = f.length, !(g < 1)) {
            o = this;
            p = this;
            s = "";
            for(r = 0;r < g;r++) {
              if(f[r] in o) {
                p = o, o = o[s = f[r]]
              }else {
                continue b
              }
            }
            this._registerLink(a, o, p, s);
            continue a
          }
        }
      }
    }
  };
  h._registerLink = function(d, a, c, b) {
    if(this.hasOwnProperty(d)) {
      return!1
    }
    this[d] = e.isFunction(a) ? function() {
      return a.apply(c, arguments)
    } : function() {
      return c[b]
    };
    return!0
  };
  h._createCss = function() {
    this.log("creating CSS...", d);
    var a = {type:"beforeCreateCss", css:[]}, c = this._options, b = this.event;
    this.dispatchEvent(a);
    this.log("creating CSS for Grid...", d);
    var h = b.trigger("onCreateCss"), h = h ? h.join("") : "", a = e.sprint("%selector%{overflow:hidden;font:%font%;%border%%style%}%submodule%", {selector:"#" + this.mid, font:c.font, border:c.borderSide ? "border:" + c.border + ";" : "border-top:" + c.border + ";border-bottom:" + c.border + ";", style:c.style, submodule:a.css.join("") + h});
    this._style = e.createStyle(a);
    a = {type:"beforeCreateDynamicCss", css:[]};
    this.dispatchEvent(a);
    h = (h = b.trigger("onCreateDynamicCss")) ? h.join("") : "";
    this._dynStyle = e.createStyle(a.css.join("") + ";" + h)
  };
  h._recreateDynamicCss = function() {
    this.log("rewriting dynamic css...", 2);
    var d = this.event.trigger("onCreateDynamicCss");
    (d = d ? d.join("") : "") && e.setStyle(this._dynStyle, d)
  };
  h._keydown = function(d) {
    var a = this.event, c = [d], b = d.which;
    this.log("UI event:keydown detected. event=" + d.type + ", keycode=" + b, 3);
    a.triggerInvalid("onBeforeKeydown", c) ? this.log("UI event:keydown prevented.", 3) : (a.trigger("keydown_" + b, c, !0), a.trigger("keydown", c, !0))
  };
  h._keyup = function(d) {
    var a = this.event, c = [d], b = d.which;
    this.log("UI event:keyup detected. event=" + d.type + ", keycode=" + b, 3);
    a.triggerInvalid("onBeforeKeyup", c) ? this.log("UI event:keyup prevented.", 3) : (a.trigger("keyup_" + b, c, !0), a.trigger("keyup", c, !0))
  };
  h._keypress = function(d) {
    var a = this.event, c = [d], b = d.which;
    this.log("UI event:keypress detected. event=" + d.type + ", keycode=" + b, 3);
    a.triggerInvalid("onBeforeKeypress", c) ? this.log("UI event:keypress prevented.", 3) : (a.trigger("keypress_" + b, c, !0), a.trigger("keypress", c, !0))
  };
  h._mousein = function(d) {
    var a = this.event, c = [d];
    this.log("UI event:mousein detected. event=" + d.type, 4);
    a.triggerInvalid("onBeforeMousein", c) ? this.log("UI event:mousein prevented.", 4) : (this._drag && a.trigger("dragin", c, !0), a.trigger("mousein", c, !0))
  };
  h._mouseout = function(d) {
    var a = this.event, c = [d];
    this.log("UI event:mouseout detected. event=" + d.type, 4);
    a.triggerInvalid("onBeforeMouseout", c) ? this.log("UI event:mouseout prevented.", 4) : (this._drag && a.trigger("dragout", c, !0), a.trigger("mouseout", c, !0))
  };
  h._mouseenter = function(d) {
    var a = this.event, c = [d];
    this.log("UI event:mouseenter detected. event=" + d.type, 3);
    a.triggerInvalid("onBeforeMouseenter", c) ? this.log("UI event:mouseenter prevented.", 3) : (this._drag && a.trigger("dragenter", c, !0), a.trigger("mouseenter", c, !0))
  };
  h._mouseleave = function(d) {
    var a = this.event, c = [d];
    this.log("UI event:mouseleave detected. event=" + d.type, 3);
    a.triggerInvalid("onBeforeMouseleave", c) ? this.log("UI event:mouseleave prevented.", 3) : (this._drag && a.trigger("dragleave", c, !0), a.trigger("mouseleave", c, !0))
  };
  h._mousemove = function(d) {
    var a = this.event, c = [d];
    this.log("UI event:mousemove detected. event=" + d.type, 5);
    a.triggerInvalid("onBeforeMousemove", c) ? this.log("UI event:mousemove prevented.", 5) : (this._drag && a.trigger("dragmove", c, !0), a.trigger("mousemove", c, !0))
  };
  h._mouseover = function(d) {
    var a = this.event, c = [d];
    this.log("UI event:mouseover detected. event=" + d.type, 4);
    a.triggerInvalid("onBeforeMouseover", c) ? this.log("UI event:mouseover prevented.", 4) : (this._drag && a.trigger("dragover", c, !0), a.trigger("mouseover", c, !0))
  };
  h._mousedown = function(d) {
    var a = this.event, c = [d];
    this.log("UI event:mousedown detected. event=" + d.type, 3);
    this._drag = !0;
    a.triggerInvalid("onBeforeMousedown", c) ? this.log("UI event:mousedown prevented.", 3) : a.trigger("mousedown", c, !0)
  };
  h._mouseup = function(d) {
    var a = this.event, c = [d];
    this.log("UI event:mouseup detected. event=" + d.type, 3);
    this._drag = !1;
    a.trigger("unsetDrag", !1, !0);
    this.containsEvent(d) && (a.triggerInvalid("onBeforeMouseup", c) ? this.log("UI event:mouseup prevented.", 3) : a.trigger("mouseup", c, !0))
  };
  h._click = function(d) {
    var a = this.event, c = [d];
    this.log("UI event:click detected. event=" + d.type, 2);
    a.triggerInvalid("onBeforeClick", c) ? this.log("UI event:click prevented.", 2) : a.trigger("click", c, !0)
  };
  h._dblclick = function(d) {
    var a = this.event, c = [d];
    this.log("UI event:dblclick detected. event=" + d.type, 2);
    a.triggerInvalid("onBeforeDblclick", c) ? this.log("UI event:dblclick prevented.", 2) : a.trigger("dblclick", c, !0)
  };
  h._resize = function(d) {
    var a = this.event;
    this.log("event:resize detected. event=" + d.type, 2);
    var c = !1, b = this._ctnr[0], h = this._lastW, e = this._lastH, f = b.clientWidth, b = b.clientHeight;
    if(f >= 1 && h !== f) {
      this.log("event:resizeWidth detected. " + h + "->" + f, 2), a.trigger("resizeWidth", [f, h], !0), this._lastW = f, c = !0
    }
    if(b >= 1 && e !== b) {
      this.log("event:resizeHeight detected. " + e + "->" + b, 2), a.trigger("resizeHeight", [b, e], !0), this._lastH = b, c = !0
    }
    c && a.trigger("resize", [d], !0)
  };
  h.width = function(d) {
    var a = this._ctnr[0], c = a.clientWidth, b = this.event;
    if(!d) {
      return c
    }
    typeof d != "number" && (d = parseInt(d));
    if(d < 1 || d === c || !isFinite(d)) {
      return c
    }
    this.log("set width. " + this._lastW + "->" + d, 2);
    a.style.width = d + "px";
    b.trigger("resizeWidth", [d, this._lastW], !0);
    this._lastW = d;
    b.trigger("resize", !1, !0);
    return d
  };
  h.height = function(d) {
    var a = this._ctnr[0], c = a.clientHeight, b = this.event;
    if(!d) {
      return c
    }
    typeof d != "number" && (d = parseInt(d));
    if(d < 1 || d === c || !isFinite(d)) {
      return c
    }
    this.log("set height. " + this._lastH + "->" + d, 2);
    a.style.height = d + "px";
    b.trigger("resizeHeight", [d, this._lastH], !0);
    this._lastH = d;
    b.trigger("resize", !1, !0);
    return d
  };
  h.getCellByIdAndKey = function(d, a) {
    return g.create("Cell", {grid:this, datarow:this.dataMgr.getById(d), colDef:this.colDefMgr.getByKey(a)})
  };
  h.getCellByIdx = function(d, a) {
    return g.create("Cell", {grid:this, row:d, col:a})
  };
  h.error = function(d) {
    for(var a = g.error[d], c = 1, b = arguments.length;c < b;c++) {
      a = a.replace(RegExp("%" + (c - 1), "g"), arguments[c])
    }
    a = Error(a);
    a.code = d;
    this.printError(a.message);
    this.log("error occurred... code=" + d + ", msg=" + a.message || a.msg);
    this.event.trigger("onError", [a], !0);
    return a
  };
  h.printError = function(d) {
    this.log("error message... msg=" + d);
    if(this._options.showMessage) {
      var a = this.msg, c = a[0], b = c.style;
      c.innerHTML = d;
      b.width = this._ctnr[0].clientWidth + "px";
      b.background = "#ffebe8";
      b.color = "#333";
      a.show();
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function() {
        a.hide(1E3)
      }, 5E3)
    }
  };
  h.printMessage = function(d) {
    this.log("message... msg=" + d);
    if(this._options.showMessage) {
      var a = this.msg, c = a[0], b = c.style;
      c.innerHTML = d;
      b.width = this._ctnr[0].clientWidth + "px";
      b.background = "#dfdfdf";
      b.color = "#6f6f6f";
      a.show();
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function() {
        a.hide(1E3)
      }, 5E3)
    }
  };
  h.containsEvent = function(d) {
    return e.contains(this._ctnr[0], d.target)
  };
  h.getChart = function(d) {
    return this._charts[d]
  };
  h.log = function(d, a) {
    2 >= (a || 0) && b("Grid[" + this.mid + "]: " + d)
  };
  h.twstart = function(d) {
    this._tw = new c(d)
  };
  h.twlap = function(d) {
    this._tw.lap(d)
  };
  h.twstop = function(d) {
    this._tw.stop(d)
  };
  h.twreset = function(d) {
    this._tw.reset(d)
  };
  h.twprint = function() {
    this.log(this._tw)
  };
  h.chart = function(a, c, b, h) {
    this.log("creating chart... type=" + c + ", columns=[" + b.join(",") + "]", d);
    var e, f, c = c.toLowerCase();
    switch(c) {
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
        throw Error("unknown chart type: " + c);
    }
    google.load("visualization", "1", {packages:[e]});
    var g = this, o = this.colDefMgr, p = this.dataMgr, s = b.map(function(d) {
      if(d = o.getByKey(d)) {
        return d
      }
      throw Error("column key not found");
    }), r = p.exportToArray(b);
    google.setOnLoadCallback(function() {
      for(var d = new google.visualization.DataTable, e = 0, l = s.length, o, u;e < l;e++) {
        o = s[e];
        u = o.type;
        switch(u) {
          case "boolean":
            u = "boolean";
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
            u = "number";
            break;
          case "string":
          ;
          case "text":
            u = "string"
        }
        d.addColumn(u || e === 0 && "string" || "number", o.name)
      }
      d.addRows(r);
      var x = g._charts[a] = new google.visualization[f](document.getElementById(a));
      x.draw(d, h);
      g.event.bind("onAfterRefresh", function() {
        g.log("redrawing chart... type=" + c + ", columns=[" + b.join(",") + "]", 2);
        d.removeRows(0, d.getNumberOfRows());
        d.addRows(p.exportToArray(b));
        x.draw(d, h)
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
    this._options = g._extend({rowSelKey:this.grid.dataMgr.idKey, bgColorSelection:"#DCEBFE", bgColorLast:"#f1ca7f", bgColorRange:"#D9D9D9", classSelection:"jgrid-selection", classLast:"selection-last", classRange:"selection-range", multiSelectEnabled:!1, classRowSelected:"rowSelected", highlightRowEnabled:!0, bgColorRowSelected:"#d8dfea"}, a.options);
    this._consts = {_UP:1, _DOWN:2, _LEFT:3, _RIGHT:4, _PGDN:5, _PGUP:6, _HOME:7, _END:8, _NAVKEYS:{}};
    this._consts._NAVKEYS = e.which(["enter", "tab", "arrow", "pgdn", "pgup", "home", "end"]);
    this._rows = {length:0};
    this._cols = {length:0};
    this.__init()
  }
  var g = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util");
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
    g._deleteMap(this._consts, "_NAVKEYS");
    var a, d = this._rows, b = this._cols;
    for(a in d) {
      d.hasOwnProperty(a) && a !== "length" && g._deleteMap(d, a)
    }
    for(a in b) {
      b.hasOwnProperty(a) && a !== "length" && g._deleteMap(b, a)
    }
    g._destroy(this, {name:"SelectionManager", path:"selMgr", map:"_rows _cols _range _last _consts _options"})
  };
  a._onCreateCss = function() {
    var a = this.grid.event.trigger("onBeforeCreateSelCss"), d = "#" + this.grid.mid + " .", b = this._options, a = a || [];
    b.highlightRowEnabled === !0 && a.push(d + b.classRowSelected + " > *{background:" + b.bgColorRowSelected + "}");
    b.multiSelectEnabled === !0 && (a.push(d + b.classSelection + "{background:" + b.bgColorSelection + "}"), a.push(d + b.classRange + "{background:" + b.bgColorRange + "}"));
    a.push(d + b.classLast + "{background:" + b.bgColorLast + "}");
    return a.join("\n")
  };
  a._onGetCellClass = function(a, d, b, j) {
    var k = "", i = this._last, f = this._range, g = this._rows, n = this._options;
    e.isNotNull(i) && i.getDatarow() === b && i.getColDef() === j && (k += n.classLast);
    n.multiSelectEnabled === !0 && (e.isNotNull(f) && f.getDatarow() === b && f.getColDef() === j && (k += " " + n.classRange), g.hasOwnProperty(a) && g[a].hasOwnProperty(d) && (k += " " + n.classSelection));
    return k
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
      this._consts._NAVKEYS[a.which] && this.selectCell(g.create("Cell", {grid:this.grid, row:this.grid.view._getFirstSafeVisibleRow(), col:this.grid.view._getFirstSafeVisibleCol()}))
    }else {
      var b = this.grid.event;
      if(this._consts._NAVKEYS[a.which]) {
        if(!b.triggerInvalid("onBeforeNavigate", [a])) {
          var j;
          a.preventDefault();
          switch(a.which) {
            case e.keyMapKeydown.tab:
              j = a.shiftKey ? this._idxToCell(this._consts._LEFT, d) : this._idxToCell(this._consts._RIGHT, d);
              this.selectCell(j);
              break;
            case e.keyMapKeydown.enter:
              j = a.shiftKey ? this._idxToCell(this._consts._UP, d) : this._idxToCell(this._consts._DOWN, d);
              this.selectCell(j);
              break;
            case e.keyMapKeydown.up:
              this._options.multiSelectEnabled && a.shiftKey ? (j = this._idxToCell(this._consts._UP, this._range), this.selectRange(j)) : (j = this._idxToCell(this._consts._UP, d), this.selectCell(j));
              break;
            case e.keyMapKeydown.down:
              this._options.multiSelectEnabled && a.shiftKey ? (j = this._idxToCell(this._consts._DOWN, this._range), this.selectRange(j)) : (j = this._idxToCell(this._consts._DOWN, d), this.selectCell(j));
              break;
            case e.keyMapKeydown.left:
              this._options.multiSelectEnabled && a.shiftKey ? (j = this._idxToCell(this._consts._LEFT, this._range), this.selectRange(j)) : (j = this._idxToCell(this._consts._LEFT, d), this.selectCell(j));
              break;
            case e.keyMapKeydown.right:
              this._options.multiSelectEnabled && a.shiftKey ? (j = this._idxToCell(this._consts._RIGHT, this._range), this.selectRange(j)) : (j = this._idxToCell(this._consts._RIGHT, d), this.selectCell(j));
              break;
            case e.keyMapKeydown.pgup:
              this._options.multiSelectEnabled && a.shiftKey ? (j = this._idxToCell(this._consts._PGUP, this._range), this.selectRange(j)) : (j = this._idxToCell(this._consts._PGUP, d), this.selectCell(j));
              break;
            case e.keyMapKeydown.pgdn:
              this._options.multiSelectEnabled && a.shiftKey ? (j = this._idxToCell(this._consts._PGDN, this._range), this.selectRange(j)) : (j = this._idxToCell(this._consts._PGDN, d), this.selectCell(j));
              break;
            case e.keyMapKeydown.space:
              j = a.shiftKey ? this._idxToCell(this._consts._PGUP, d) : this._idxToCell(this._consts._PGDN, d);
              this.selectCell(j);
              break;
            case e.keyMapKeydown.home:
              this._options.multiSelectEnabled && a.shiftKey ? (j = this._idxToCell(this._consts._HOME, this._range), this.selectRange(j)) : (j = this._idxToCell(this._consts._HOME, d), this.selectCell(j));
              break;
            case e.keyMapKeydown.end:
              this._options.multiSelectEnabled && a.shiftKey ? (j = this._idxToCell(this._consts._END, this._range), this.selectRange(j)) : (j = this._idxToCell(this._consts._END, d), this.selectCell(j))
          }
          b.trigger("onAfterNavigate", [j], !0)
        }
      }else {
        if(this._cols.length === 1) {
          var k, i = this.grid.colDefMgr, f, l = this._cols;
          j = a.which;
          var n = [a, null, d];
          for(f in l) {
            if(l.hasOwnProperty(f) && f !== "length") {
              k = i.get(f).key, k = "keydownColSel_" + k, n[1] = l[f], b.trigger(k + "_" + j, n, !0), b.trigger(k, n, !0)
            }
          }
        }
        if(this._rows.length === 1) {
          var m;
          f = this._rows;
          j = a.which;
          n = [a, null, d];
          for(m in f) {
            f.hasOwnProperty(m) && m !== "length" && (n[1] = f[m], b.trigger("keydownRowSel_" + j, n, !0), b.trigger("keydownRowSel", n, !0))
          }
        }
        n = [a, this._rows, this._cols];
        b.trigger("keydownSel_" + a.which, n, !0);
        b.trigger("keydownSel", n, !0)
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
    return g.create("Cell", {grid:this.grid, row:b[0], col:b[1]})
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
      var b = a.getRowIdx(), j = a.getColIdx();
      this._setRange(b, j, a, d);
      this._setLast(b, j, a);
      this._setSelMap(this._getCellMap(b, j, a))
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
    var d = a.getRowIdx(), b = a.getColIdx(), j = this._last.getRowIdx(), e = this._last.getColIdx(), i = j < d ? j : d, j = j < d ? d : j, f;
    this._setRange(d, b, a);
    a.getKey() === this._options.rowSelKey ? (f = 0, e = this.grid.colDefMgr.length() - 1) : (f = e < b ? e : b, e = e < b ? b : e);
    this._setSelMap(this._getRangeMap(i, f, j, e, d, b, a));
    return{minRow:i, minCol:f, maxRow:j, maxCol:e}
  };
  a._setLast = function(a, d, b) {
    var d = this._last, j;
    e.isNotNull(d) && (j = d.getRowIdx(), a !== j && e.isNotNull(this._range) && j !== this._range.getRowIdx() && this.grid.view.unlockRowById(d.getId()), d.get$().removeClass(this._options.classLast), this._options.highlightRowEnabled === !0 && $(d.getRowNode()).removeClass(this._options.classRowSelected), e.isNull(b) && delete this._last);
    if(!e.isNull(b)) {
      (this._last = b).get$().addClass(this._options.classLast), this._options.highlightRowEnabled === !0 && $(b.getRowNode()).addClass(this._options.classRowSelected), this.grid.view.lockRowByIdx(a)
    }
  };
  a._setRange = function(a, d, b, j) {
    var k = this._range;
    if(e.isNotNull(k)) {
      var i = k.getRowIdx();
      if(a === i && d === k.getColIdx()) {
        return
      }
      a !== i && e.isNotNull(this._last) && i !== this._last.getRowIdx() && this.grid.view.unlockRowById(k.getId());
      k.get$().removeClass(this._options.classRange);
      e.isNull(b) && delete this._range
    }
    if(!e.isNull(b)) {
      (this._range = b).get$().addClass(this._options.classRange), b = this.grid.view, b.lockRowByIdx(a), j || b.scrollToLazy(a, d)
    }
  };
  a._addSelMap = function(a) {
    var d = this._rows, h, j, e, i;
    for(e in a) {
      if(a.hasOwnProperty(e) && (j = a[e], d.hasOwnProperty(e))) {
        for(i in h = d[e], j) {
          j.hasOwnProperty(i) && h.hasOwnProperty(i) && (j[i] instanceof b && (h[i] = j[i]), delete j[i])
        }
      }
    }
    this.addOrRemoveCss({}, !0);
    this._addToMaps(a)
  };
  a._setSelMap = function(a) {
    var d = this._rows, h, j, e, i, f = {};
    for(e in d) {
      if(d.hasOwnProperty(e) && e !== "length") {
        if(h = d[e], a.hasOwnProperty(e)) {
          for(i in j = a[e], h) {
            h.hasOwnProperty(i) && i !== "length" && (j.hasOwnProperty(i) ? (j[i] instanceof b && (h[i] = j[i]), delete j[i]) : (f.hasOwnProperty(e) || (f[e] = {}), f[e][i] = !0))
          }
        }else {
          for(i in j = f[e] = {}, h) {
            h.hasOwnProperty(i) && i !== "length" && (j[i] = !0)
          }
        }
      }
    }
    this._removeFromMaps(f);
    this.addOrRemoveCss({}, !1);
    this._addSelMap(a)
  };
  a.addOrRemoveCss = function(a, d) {
    var h = [], j, f, i, g = this.grid.view;
    for(j in a) {
      if(a.hasOwnProperty(j)) {
        for(f in i = a[j], i) {
          i.hasOwnProperty(f) && (i[f] instanceof b ? h.push(i[f].getNode()) : h.push(g.getCell(j, f)))
        }
      }
    }
    h = h.filter(function(d) {
      return e.isNotNull(d)
    });
    d ? $(h).addClass(this._options.classSelection) : $(h).removeClass(this._options.classSelection)
  };
  a._addToMaps = function(a) {
    var d, b, j, f = this._rows, i = this._cols, g;
    for(d in a) {
      if(a.hasOwnProperty(d)) {
        for(b in g = a[d], g) {
          g.hasOwnProperty(b) && (j = e.isNull(j = g[b]) ? !0 : j, f.hasOwnProperty(d) ? f[d].length++ : (f[d] = {length:1}, f.length++), f[d][b] = j, i.hasOwnProperty(b) ? i[b].length++ : (i[b] = {length:1}, i.length++), i[b][d] = j)
        }
      }
    }
  };
  a._removeFromMaps = function(a) {
    var d, b, j = this._rows, e = this._cols, i;
    for(d in a) {
      if(a.hasOwnProperty(d)) {
        for(b in i = a[d], i) {
          i.hasOwnProperty(b) && (--j[d].length === 0 ? (delete j[d], j.length--) : delete j[d][b], --e[b].length === 0 ? (delete e[b], e.length--) : delete e[b][d])
        }
      }
    }
  };
  a._getCellMap = function(a, d, b) {
    var j = {};
    j[a] = {};
    j[a][d] = b;
    return j
  };
  a._getRowMap = function(a, d, b) {
    var j = {}, e = this.grid.colDefMgr.length(), i = 0;
    for(j[a] = {};i < e;i++) {
      j[a][i] = !0
    }
    j[a][d] = b;
    return j
  };
  a._getRangeMap = function(a, d, b, j, e, i, f) {
    for(var g = {}, n;a <= b;a++) {
      g[a] = {};
      for(n = d;n <= j;n++) {
        g[a][n] = !0
      }
    }
    g[e][i] = f;
    return g
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
  function f(d) {
    this.mid = d.mid;
    this.grid = d.grid;
    this.grid.editMgr = this;
    this._options = e._extend({classEdit:"jgrid-edit", classCellEditable:"jgrid-editable", classCellNotEditable:"jgrid-notEditable", editableBgEnabled:!1, notEditableBgEnabled:!1, editableBg:"#FFF", notEditableBg:"#F6F6F6", deleteEnabled:!1, editIconEnabled:!0, urlEditIcon:this.grid._options.imageUrl + "editable-small.png", classEditIcon:"edit-icon", editIconWidth:12, editIconPadding:3, basicBackground:"#FFF9D7", classSuccess:"edit-success", successBackground:"#cdf7b6", classFailure:"edit-failure", 
    failureBackground:"#ffcec5"}, d.options);
    this._beginEditKeys = b.which(["number", "alphabet", "del", "backspace"]);
    this.__init()
  }
  function g(d) {
    for(var a in d) {
      d.hasOwnProperty(a) && (this[a] = d[a])
    }
  }
  var e = goog.getObjectByName("jx.grid"), b = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var a = goog.getObjectByName("jx.grid.Cell");
  goog.exportSymbol("jx.grid.EditManager", f);
  goog.exportSymbol("jx.grid.Editor", g);
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
      for(var c = this.grid.colDefMgr.get(), j = c.length, e = 0;e < j;e++) {
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
    var a = "#" + this.grid.mid + " .", c = this._options, b = [], e = this.grid.view._getRowInnerHeight();
    b.push(this.grid.view._getCellSelector() + "." + c.classEdit + "{background:" + c.basicBackground + "}");
    b.push(a + c.classEdit + " input{position:absolute;z-index:10;top:0;padding:0;border:0;margin:0;background:" + c.basicBackground + ";height:" + e + "px;line-height:" + e + "px}");
    c.editableBgEnabled && b.push(a + c.classCellEditable + "{background:" + c.editableBg + "}");
    c.notEditableBgEnabled && b.push(a + c.classCellNotEditable + "{background:" + c.notEditableBg + "}");
    c.editIconEnabled && b.push(a + c.classEditIcon + "{float:left;position:absolute;left:0;top:0;padding:0 " + c.editIconPadding + "px;width:" + c.editIconWidth + "px;height:" + e + "px;background:url(" + c.urlEditIcon + ") no-repeat center transparent}");
    b.push(a + c.classSuccess + "{background:" + c.successBackground + "}");
    b.push(a + c.classFailure + "{background:" + c.failureBackground + "}");
    return b.join("")
  };
  c.onCreateDynamicCss = function() {
    for(var a = this.grid.view._getCellSelector(), c = this.grid.view._getPadding(), j = this.grid.colDefMgr.get(), e = 0, i = "";e < j.length;e++) {
      b.isNotNull(j[e].editor) && (i += a + ".k_" + j[e].key + " .basic-editor{width:" + (j[e].width - 2 * c) + "px}")
    }
    return i
  };
  c._onRenderHeader = function(a) {
    a.push("<span class='" + this._options.classEditIcon + "'></span>")
  };
  c._onRenderCell = function(a, c, b, e, i) {
    this.grid.dataMgr.isReal(b) && i.push("<span class='" + this._options.classEditIcon + "' title='클릭하여 에디팅을 시작합니다' onclick='JGM.m.EditManager." + this.mid + '.beginEdit("' + b[this.grid.dataMgr.idKey] + '","' + e.key + "\")'></span>")
  };
  c.cancelMouseEvent = function(a) {
    return!b.hasTagAndClass(a.target, "DIV", this._options.classEditIcon)
  };
  c.beginEdit = function(a, c) {
    this.begin(e.create("Cell", {grid:this.grid, datarow:this.grid.dataMgr.getById(a), colDef:this.grid.colDefMgr.getByKey(c)}))
  };
  c._dblclickCanvas = function(a, c) {
    c.isEdited() || this.begin(c)
  };
  c._keydownCanvas = function(a) {
    this.active() ? a.which === b.keyMapKeydown.esc && this.cancel() : !a.ctrlKey && !a.altKey && b.isNotNull(this.grid.selMgr) && (a.which === b.keyMapKeydown.del && this._options.deleteEnabled ? this._deleteContent(this.grid.selMgr.getCell()) : this._beginEditKeys[a.which] ? this.begin(this.grid.selMgr.getCell()) : a.which === b.keyMapKeydown.f2 && (a.preventDefault(), this.begin(this.grid.selMgr.getCell())))
  };
  c.active = function() {
    return b.isNotNull(this.editor)
  };
  c.notActive = function() {
    return b.isNull(this.editor)
  };
  c._isEdited = function(a) {
    return this.active() && this.editor.cell.equals(a)
  };
  c._onGetColCellClass = function(a) {
    return b.isNotNull(a.editor) ? this._options.classCellEditable : this._options.classCellNotEditable
  };
  a.prototype.isEdited = function() {
    return this.grid.editMgr._isEdited(this)
  };
  a.prototype.setValue = function(a) {
    var c = this.getDatarow(), j = this.getKey(), e;
    b.isNotNullAnd(c, j) && (e = this.grid.dataMgr.updateByKey(c, j, a, {noSort:!0, noFilter:!0, noRerender:!0}), e === !0 && this.grid.view.rerenderRow(c));
    return e
  };
  c.isEditable = function(a) {
    return b.isNotNull(a) && b.isNotNull(a.getColDef().editor) && this.grid.dataMgr.isReal(a.getDatarow())
  };
  c.begin = function(a) {
    this.active() && this.commit();
    if(this.isEditable(a)) {
      this.editor = a.getColDef().editor;
      this.editor.cell = a;
      this.editor.grid = this.grid;
      var c = a.getNode();
      this.editor.before = c.innerHTML;
      c.innerHTML = this.editor.edit(a.getValue());
      a.get$().addClass(this._options.classEdit);
      this.editor.focus()
    }
  };
  c.cancel = function() {
    if(this.active()) {
      var a = this.editor.cell;
      a.getNode().innerHTML = this.editor.before;
      this._deleteEditor();
      a.get$().removeClass(this._options.classEdit);
      this.grid.view.focus()
    }
  };
  c._deleteEditor = function() {
    b.isNotNull(this.editor) && (delete this.editor.grid, delete this.editor.cell, delete this.editor.before, delete this.editor)
  };
  c.commit = function() {
    if(!this.beingCommitted && this.active()) {
      this.beingCommitted = !0;
      var a = this.editor.cell, c = this.editor.value(a.getNode()), b;
      if(c == null || c == a.getValue()) {
        this.cancel()
      }else {
        var c = a.setValue(c), e;
        b = a.get$();
        c instanceof Error ? (this.cancel(), e = this._options.classFailure) : (this._deleteEditor(), this.grid.view.focus(), e = this._options.classSuccess, this.grid.printMessage("Successfully Updated."));
        b.addClass(e);
        setTimeout(function() {
          b.removeClass(e)
        }, 1E3)
      }
      a.get$().removeClass(this._options.classEdit);
      this.beingCommitted = !1
    }
  };
  c._deleteContent = function(a) {
    if(!this.active() && this.isEditable(a)) {
      var c = a.getColDef();
      a.getValue() !== c.defaultValue && a.setValue(c.defaultValue)
    }
  };
  c._deleteContents = function(a, c, e) {
    if(!this.active()) {
      var a = {}, c = {}, f = [], i, g, l, n, m, o, p;
      a:for(i in e) {
        if(e.hasOwnProperty(i) && i !== "length") {
          for(p in n = l = g = void 0, o = e[i], o) {
            if(o.hasOwnProperty(p) && !(p === "length" || c.hasOwnProperty(p))) {
              m = o[p].cell;
              if(b.isNull(g) && (g = m.getColDef(), l = g.defaultValue, n = g.key, b.isNull(g.editor))) {
                continue a
              }
              m = b.isNotNull(a[p]) ? a[p].datarow : m.getDatarow();
              this.grid.dataMgr.isReal(m) ? l !== m[n] && (b.isNull(a[p]) && (a[p] = {datarow:m, change:{}}, f.push(a[p])), a[p].change[n] = l) : c[p] = !0
            }
          }
        }
      }
      f.length !== 0 && this.grid.dataMgr.updateList(f)
    }
  };
  g.getInstance = function(a) {
    return new g(a)
  };
  c = g.prototype;
  c.edit = function(a) {
    return"<input type='text' class='basic-editor' value='" + b.ifNull(a, "") + "' style='position:relative'/>"
  };
  c.focus = function() {
    var a = this.cell.getNode().childNodes[0];
    if(b.isFunction(a.setActive)) {
      try {
        a.setActive()
      }catch(c) {
      }
    }
    a.focus();
    document.activeElement !== a && this.cell.get$().children(":eq(0)").focus()
  };
  c.value = function(a) {
    return a && (a = a.childNodes[0]) ? a.value : null
  };
  c.path = function() {
    return"JGM.m.Editor." + this.mid
  };
  g.numberKeys = b.which(["number", "del", "backspace"]);
  g.isNumberKey = function(a) {
    return this.numberKeys[a] ? !0 : !1
  };
  g.numberEdit = function(a) {
    a = a.getValue();
    return"<input type='text' class='basic-editor' onkeydown='if (!jx.grid.Editor.isNumberKey(event.which)) return false;' value='" + b.ifNull(a, "") + "'/>"
  };
  g.floatKeys = b.which(["number", ".", "del", "backspace"]);
  g.isFloatKey = function(a) {
    return this.floatKeys[a] ? !0 : !1
  };
  g.floatEdit = function(a) {
    a = a.getValue();
    return"<input type='text' class='basic-editor' onkeydown='if (!jx.grid.Editor.isFloatKey(event.which)) return false;' value='" + b.ifNull(a, "") + "'/>"
  };
  g.alphabetKeys = b.which(["alphabet", "del", "backspace", "space"]);
  g.isAlphabet = function(a) {
    return this.alphabetKeys[a] ? !0 : !1
  };
  g.alphabetEdit = function(a) {
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
    this._options = g._extend({classTooltip:"jgrid-tooltip", tooltipSyncEnabled:!0, offsetX:0, offsetY:18, background:"#F5F5F5", border:"1px solid #868686", padding:"2px 10px", font:"14px Arial,Helvetica,sans-serif", color:"#333"}, a.options);
    this.__init()
  }
  var g = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util");
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
    g._destroy(this, {name:"TooltipManager", path:"tooltip", $:"_tooltip", property:"_ctnr", map:"_options"})
  };
  b._onCreateCss = function() {
    var a = this._options, c = [];
    c.push("#" + this.grid.mid + " ." + a.classTooltip + "{position:absolute;z-index:10;background:" + a.background + ";border:" + a.border + ";padding:" + a.padding + ";color:" + a.color + ";font:" + a.font + "}");
    return c.join("")
  };
  b._mouseoutCanvas = function() {
    e.isNotNull(this._tooltip) && (this._ctnr[0].removeChild(this._tooltip[0]), delete this._tooltip)
  };
  b._mousemoveCanvas = function(a) {
    var c = this._options;
    c.tooltipSyncEnabled && e.isNotNull(this._tooltip) && this._tooltip.css({left:a.pageX + c.offsetX + "px", top:a.pageY + c.offsetY + "px"})
  };
  b._mouseoverCanvas = function(a, c) {
    if(c.getColDef().tooltipEnabled && e.isNull(this._tooltip)) {
      var d = this._options, b = document.createElement("div");
      b.innerHTML = "<div class='" + d.classTooltip + "' style='left:" + (a.pageX + d.offsetX) + "px;top:" + (a.pageY + d.offsetY) + "px'>" + c.getValue() + "</div>";
      this._tooltip = $(b.firstChild);
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
    this._options = g._extend({title:"Print Preview", font:"15px arial,sans-serif", headerFontColor:"#27413E", headerBackgroundColor:"#DCDEDE", tableBorderColor:"#6E7174", headerBorderColor:"#909192", cellBorderColor:"#D0D7E5", winOptions:{name:"Print Preview", width:800, height:600, directories:"no", location:"no", menubar:"no", status:"no", toolbar:"no"}}, a.options);
    this.__init()
  }
  var g = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util");
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
    var a = this.getPrintHtml(this.grid.colDefMgr.get(), this.grid.dataMgr.datalist), c = e.open(this._options.winOptions);
    c.document.write(a);
    c.document.close()
  };
  b.getPrintHtml = function(a, c) {
    var d = this._options, b = d.tableBorderColor, e = d.headerBorderColor, f = d.cellBorderColor, i = [], g = a.length, l = g - 1, n = c.length, m = n - 1, o = 0, p;
    i.push("<html><head>");
    i.push("<title>" + d.title + "</title>");
    i.push("</head><body onload='window.print();'>");
    i.push("<table width='100%' cellspacing='0' cellpadding='0'><tbody><tr><td align='left'>");
    i.push("<table width='100%' cellspacing='0' cellpadding='2' style='border-collapse:collapse'>");
    i.push("<tbody style='font:" + d.font + ";'>");
    for(i.push("<tr style='background-color:" + d.headerBackgroundColor + ";color:" + d.headerFontColor + ";text-align:center'>");o < g;o++) {
      i.push("<td style='border:solid 1px " + e + ";'>" + a[o].name + "</td>")
    }
    i.push("</tr>");
    for(o = 0;o < n;o++) {
      d = c[o];
      i.push("<tr>");
      if(o === 0) {
        for(p = 0;p < g;p++) {
          p === 0 ? i.push("<td style='border:solid 1px " + f + ";border-top:solid 1px " + e + ";border-left:solid 1px " + b + "'>" + d[a[p].key] + "</td>") : p === l ? i.push("<td style='border:solid 1px " + f + ";border-top:solid 1px " + e + ";border-right:solid 1px " + b + "'>" + d[a[p].key] + "</td>") : i.push("<td style='border:solid 1px " + f + ";border-top:solid 1px " + e + "'>" + d[a[p].key] + "</td>")
        }
      }else {
        if(o < m) {
          for(p = 0;p < g;p++) {
            p === 0 ? i.push("<td style='border:solid 1px " + f + ";border-left:solid 1px " + b + "'>" + d[a[p].key] + "</td>") : p === l ? i.push("<td style='border:solid 1px " + f + ";border-right:solid 1px " + b + "'>" + d[a[p].key] + "</td>") : i.push("<td style='border:solid 1px " + f + "'>" + d[a[p].key] + "</td>")
          }
        }else {
          for(p = 0;p < g;p++) {
            p === 0 ? i.push("<td style='border:solid 1px " + f + ";border-bottom:solid 1px " + b + ";border-left:solid 1px " + b + "'>" + d[a[p].key] + "</td>") : p === l ? i.push("<td style='border:solid 1px " + f + ";border-bottom:solid 1px " + b + ";border-right:solid 1px " + b + "'>" + d[a[p].key] + "</td>") : i.push("<td style='border:solid 1px " + f + ";border-bottom:solid 1px " + b + "'>" + d[a[p].key] + "</td>")
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
    this._options = g._extend({attrRowIdx:"r", appendThreshold:3, renderThreshold:10, bufferSize:6, rowsPerPage:10, rowH:21, borderThickness:1, border:"solid #D0D7E5", padding:1, evenOddRows:!1, oddRowsBackground:"#F4F4F4", style:"", canvasStyle:"", rowStyle:"", cellStyle:"", classRow:"jgrid-row", classCell:"jgrid-cell", classView:"jgrid-viewport", classCanvas:"jgrid-canvas", focusBackground:"#FFF", focusOutline:"2px solid #f1ca7f", autoHeight:!1, autoWidth:!1}, a.options);
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
  var g = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.grid.Grid"), b = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var a = goog.getObjectByName("jx.grid.Cell");
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
    g._destroy(this, {name:"ViewportManager", path:"view", $:"_canvas _mask", property:"_ctnr", map:"_vars _lockedRows _renderedRows _options"})
  };
  c._onCreateCss = function() {
    var a = "#" + this.grid.mid + " .", c = this._options, b = a + this._cellClass, e = a + this._rowClass, f = c.borderThickness + "px " + c.border, g = e + "[" + this._rowIdxAttr, l = this._colmgr.get(), n = l.length, m = 0, o = [];
    o.push(a + c.classView + "{height:" + this._calHeight() + "px;outline:0;position:relative;white-space:nowrap;overflow:auto;line-height:" + c.rowH + "px;cursor:default;-moz-user-select:none;-webkit-user-select:none;" + c.style + "}");
    o.push(a + c.classView + ":focus{background:" + c.focusBackground + ";outline:" + c.focusOutline + "}");
    o.push(a + c.classCanvas + "{height:" + this._calCanvasHeight() + "px;" + c.canvasStyle + ";background:#fff}");
    o.push(e + "{position:absolute;" + c.rowStyle + "}");
    o.push(b + "{height:" + c.rowH + "px;border-bottom:" + f + ";display:inline-block;white-space:nowrap;overflow:hidden;float:left;text-overflow:ellipsis;padding-left:" + c.padding + "px;border-right:" + f + ";" + c.cellStyle + "}");
    for(c.evenOddRows && o.push(g + "$='1']," + g + "$='3']," + g + "$='5']," + g + "$='7']," + g + "$='9']{background:" + c.oddRowsBackground + "}");m < n;m++) {
      o.push(b + ".k_" + l[m].key + "{" + l[m].style + "}")
    }
    return o.join("")
  };
  c._onCreateDynamicCss = function() {
    var a = "#" + this.grid.mid + " .", c = a + this._cellClass, b = a + this._rowClass;
    a += this._options.classCanvas;
    var e = this._calCanvasWidth(), f = this._colmgr.get(), g = "", l = f.length, n = 0;
    for(g += a + "{width:" + e + "px}" + b + "{width:" + e + "px}";n < l;n++) {
      g += c + ".k_" + f[n].key + "{width:" + f[n].width + "px}"
    }
    return g
  };
  c.onUpdateDatarow = function(a) {
    this.isRendered(a) && this.rerenderRow(a)
  };
  c.onUpdateDatalist = function(a) {
    for(var c, b = a.length, e = 0;e < b;e++) {
      c = a[e], this.isRendered(c) && this.rerenderRow(c)
    }
  };
  c.onRemoveDatarow = function(a) {
    this.destroyRow(a)
  };
  c.onRemoveDatalist = function(a) {
    for(var c = a.length, b = 0;b < c;b++) {
      this.destroyRow(a[b])
    }
  };
  c.onIdChange = function(a, c, b) {
    this.isRowLockedById(c) && (this._lockedRows[b] = this._lockedRows[c], delete this._lockedRows[c]);
    this.isRenderedById(c) && ((this._renderedRows[b] = this._renderedRows[c]).setAttribute("i", b), delete this._renderedRows[c])
  };
  c.onIdListChange = function(a, c, b) {
    for(var e = a.length, f = 0, g = this._lockedRows, l = this._renderedRows, n, m;f < e;f++) {
      n = c[f], m = a[f][b], g.hasOwnProperty(n) && (g[m] = g[n], delete g[n]), l.hasOwnProperty(n) && ((l[m] = l[n]).setAttribute("i", m), delete l[n])
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
    for(var a = a || 0, b = this._colmgr.get(), e = this._colWidthPlus(), c = c || b.length;a < c;a++) {
      this._colLefts[a + 1] = this._colLefts[a] + b[a].width + e
    }
    return this._colLefts
  };
  c._onReorderCols = function() {
    this._setColLefts();
    this._rerender()
  };
  c.setWidthByKey = function(a, c) {
    var j = this._colmgr.getByKey(a), c = b.bound(c, j.minW, j.maxW);
    if(c !== j.width) {
      this.grid.log("set column width. key=" + a + ", w=" + c, e.V_RESIZE);
      var f = this._evtmgr, i = this._colmgr, g = [a, c, j.width];
      j.width = c;
      this._setCanvasWidth(this._setColLefts(i.getIdxByKey(a))[i.length()]);
      this.grid._recreateDynamicCss();
      f.trigger("onResizeCol_" + a, g, !0);
      f.trigger("onResizeCol", g, !0)
    }
  };
  c._autoColWidth = function(a) {
    for(var c = this._canvasFind(".k_" + a), b = Number.MIN_VALUE, e = c.length, f = 0;f < e;f++) {
      if(b < c[f].scrollWidth) {
        b = c[f].scrollWidth
      }
    }
    b -= this._getPadding();
    this.setWidthByKey(a, b)
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
    for(var a = this.getScrollLeft(), c = this._colLefts, b = 0, e = c.length;b < e;b++) {
      if(c[b] > a) {
        return b - 1
      }
      if(c[b] === a) {
        return b
      }
    }
    return e - 2
  };
  c._getFirstSafeVisibleCol = function() {
    for(var a = this.getScrollLeft(), c = this._colLefts, b = 0, e = c.length;b < e;b++) {
      if(c[b] >= a) {
        return b
      }
    }
    return e - 2
  };
  c._getLastVisibleCol = function() {
    for(var a = this.getScrollLeft() + this._mask[0].clientWidth, c = this._colLefts, b = 0, e = c.length;b < e;b++) {
      if(c[b] >= a) {
        return b - 1
      }
    }
    return e - 2
  };
  c._getLastSafeVisibleCol = function() {
    for(var a = this.getScrollLeft() + this._mask[0].clientWidth, c = this._colLefts, b = 0, e = c.length;b < e;b++) {
      if(c[b] > a) {
        return b - 2
      }
    }
    return e - 2
  };
  c._getFirstColForSafe = function(a) {
    var c = this._colLefts, b = c[a + 1] - this._mask[0].clientWidth, e = a;
    if(b <= 0) {
      return 0
    }
    for(;e >= 0;e--) {
      if(e === a && c[e] <= b || c[e] === b) {
        return e
      }
      if(c[e] < b) {
        return e + 1
      }
    }
    return 0
  };
  c.getScrollHForSafe = function(a) {
    var c = this._colLefts, b = c[a + 1] - this._mask[0].clientWidth;
    return c[a] <= b ? c[a] : b
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
    var b = this._datamgr.datalist.length;
    if(this._lastRowLen !== b) {
      this._lastRowLen = b, this._setCanvasHeight(this._calCanvasHeight())
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
    var c = this._canvasEl, b = this._renderedRows, e = this._lockedRows, f;
    if(a) {
      for(var g = a.start, a = a.end, l = this._datamgr;g <= a;g++) {
        if(!e.hasOwnProperty(f = l.getIdByIdx(g)) && b.hasOwnProperty(f)) {
          c.removeChild(b[f]), delete b[f]
        }
      }
    }else {
      if(this._lockExist()) {
        for(f in b) {
          b.hasOwnProperty(f) && e.hasOwnProperty(f) && (c.removeChild(b[f]), delete b[f])
        }
      }else {
        this._renderedRows = {}, c.innerHTML = ""
      }
    }
  };
  c._removeRowsExcept = function(a) {
    var c = this._canvasEl, b = this._renderedRows, e = this._lockedRows, f;
    if(a) {
      var g = a.start, a = a.end, l = this._datamgr, n;
      for(f in b) {
        if(b.hasOwnProperty(f) && !(e.hasOwnProperty(f) || g <= (n = l.getIdxById(f)) && n <= a)) {
          c.removeChild(b[f]), delete b[f]
        }
      }
    }else {
      if(this._lockExist()) {
        for(f in b) {
          b.hasOwnProperty(f) && e.hasOwnProperty(f) === !1 && (c.removeChild(b[f]), delete b[f])
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
    a && (this.unlockRowById(a), this._renderedRows.hasOwnProperty(a) && (this._canvasEl.removeChild(this._renderedRows[a]), delete this._renderedRows[a]))
  };
  c.destroyRowByIdx = function(a) {
    return this.destroyRowById(this._datamgr.getIdByIdx(a))
  };
  c._lockExist = function() {
    return b.isNotEmptyObj(this._lockedRows)
  };
  c.isRowLockedById = function(a) {
    return a ? this._lockedRows.hasOwnProperty(a) : !1
  };
  c.isRowLocked = function(a) {
    return this.isRowLockedById(this._datamgr.getId(a))
  };
  c.isRowLockedByIdx = function(a) {
    return this.isRowLockedById(this._datamgr.getIdByIdx(a))
  };
  c.lockRowById = function(a) {
    a && this._datamgr.hasById(a) && (this._lockedRows[a] = !0)
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
      var c = this._renderedRows, e = this._canvasEl, f = this._datamgr, i = f.idKey, g = f.getIdxById(a), f = f.getById(a), l = this._colmgr.get(), n = this._getColCellClasses(l).map(function(a) {
        return"<div class='" + a + " "
      }), m = this._getRendererSettings(l), o = m[0], m = m[1], p = this._getRowOuterHeight(), s = "<div class='" + this._rowClass + "' i='", r = "' " + this._rowIdxAttr + "='", t = [];
      c.hasOwnProperty(a) && (e.removeChild(c[a]), this._evtmgr.trigger("onBeforeRenderRows", [[g]], !0), t.push(s + f[i] + r + g + "' style='top:" + p * g + "px'>"), this._renderRow(t, g, f, l, n, o, m), c[a] = b.appendHTML(e, t.join(""))[0], this._evtmgr.trigger("onAppendRows", [[g]], !0))
    }
  };
  c._getRendererSettings = function(a) {
    for(var a = a || this._colmgr.get(), c = 0, b = a.length, e, f = [], g = [], l;c < b;c++) {
      e = a[c], (l = e.renderer) ? (f.push(!!e.rendererInput), g.push(l)) : (f.push(!1), g.push(!1))
    }
    return[g, f]
  };
  c.rerenderRow = function(a) {
    return this.rerenderRowById(this._datamgr.getId(a))
  };
  c.rerenderRowByIdx = function(a) {
    return this.rerenderRowById(this._datamgr.getIdByIdx(a))
  };
  c.rerenderCellByIdAndKey = function(a, c) {
    var b = this.getCellByIdAndKey(a, c);
    if(b) {
      var e = this._datamgr, f = this._colmgr, g = e.getById(a), l = f.getByKey(c), e = e.getIdxById(a), f = f.getIdxByKey(c), n = l.renderer, m = n ? l.rendererInput : !1, o = [];
      n ? m ? this._renderCell(o, e, f, g, l, n, !0) : this._renderCell(o, e, f, g, l, n) : this._renderCell(o, e, f, g, l);
      b.innerHTML = o.join("")
    }
  };
  c.rerenderCellByIdx = function(a, c) {
    return this.rerenderCellByIdAndKey(this._datamgr.getIdByIdx(a), this._colmgr.getKeyByIdx(c))
  };
  c._appendRows = function(a) {
    var c = this._evtmgr, e = [a], f = [], i = a.start, a = a.end, g = this._datamgr, l = g.datalist, n = g.idKey, m = this._colmgr.get(), o = this._getColCellClasses(m).map(function(a) {
      return"<div class='" + a + " "
    }), g = this._renderedRows, p = this._getRowOuterHeight(), s = this._canvasEl, r = "<div class='" + this._rowClass + "' i='", t = "' " + this._rowIdxAttr + "='", v = this._getRendererSettings(m), w = v[0], y = v[1], u, x, v = [];
    c.trigger("onBeforeRenderRows", e, !0);
    for(this.grid.twstart();i <= a;i++) {
      u = l[i], x = u[n], g.hasOwnProperty(x) || (f[f.length] = r + x + t + i + "' style='top:" + p * i + "px'>", this._renderRow(f, i, u, m, o, w, y), this.grid.twlap(), v.push(x))
    }
    this.grid.twprint();
    this.grid.twstop();
    f = b.appendHTML(s, f.join(""));
    i = 0;
    for(a = v.length;i < a;i++) {
      g[v[i]] = f[i]
    }
    c.trigger("onAppendRows", e, !0)
  };
  c._removeAndRenderRows = function(a) {
    var a = a || this._getRenderRange(), c = this._evtmgr, b = [a], e = [], f = a.start, a = a.end, g = this._datamgr, l = g.datalist, g = g.idKey, n = this._colmgr.get(), m = this._getColCellClasses(n).map(function(a) {
      return"<div class='" + a + " "
    }), o = this._getRowOuterHeight(), p = this._canvasEl, s = "<div class='" + this._rowClass + "' i='", r = "' " + this._rowIdxAttr + "='", t = this._getRendererSettings(n), v = t[0], t = t[1], w, y, u = [], x = {};
    c.trigger("onBeforeRenderRows", b, !0);
    for(this.grid.twstart();f <= a;f++) {
      w = l[f], y = w[g], e[e.length] = s + y + r + f + "' style='top:" + o * f + "px'>", this._renderRow(e, f, w, n, m, v, t), this.grid.twlap(), u.push(y)
    }
    this.grid.twprint();
    this.grid.twstop();
    p.innerHTML = e.join("");
    f = 0;
    for(a = u.length;f < a;f++) {
      x[u[f]] = p.childNodes[f]
    }
    this._renderedRows = x;
    c.trigger("onAppendRows", b, !0)
  };
  c._renderColumn = function(c, b, e, f, i, g, l) {
    for(var n = [], m, o = 0, p = e.length, s, r, t, v = b.key, w, y = this.grid, u = this._evtmgr, x = "onRenderCell_" + v, A = [null, c, r, b], z = [null, c, null, b, null];o < p;o++) {
      s = e[o];
      r = f[s];
      t = r[v];
      m = [];
      z[0] = A[0] = s;
      z[2] = r;
      z[4] = m;
      w = u.trigger("onGetCellClass", A);
      m[m.length] = w ? i + w.join(" ") + "'>" : i + "'>";
      u.trigger(x + "_prepend", z, !0);
      if(typeof t != "string" || t.substring(0, 3) !== "J@H") {
        g ? m[m.length] = l ? g(new a({grid:y, row:s, col:c, datarow:r, colDef:b})) : g(t, s, c, r, b) : t != null && (m[m.length] = t)
      }
      u.trigger(x + "_append", z, !0);
      m[m.length] = "</div>";
      n[n.length] = m.join("")
    }
    return n
  };
  c._getColCellClass = function(a) {
    var c = this._cellClass + " k_" + a.key;
    a.colClass && (c += " " + a.colClass);
    (a = this._evtmgr.trigger("onGetColCellClass", [a])) && (c += " " + a.join(" "));
    return c
  };
  c._getColCellClasses = function(a) {
    for(var a = a || this._colmgr.get(), c = [], b = 0, e = a.length;b < e;b++) {
      c.push(this._getColCellClass(a[b]))
    }
    return c
  };
  c._renderRow = function(a, c, b, e, f, g, l) {
    for(var n = 0, m = e.length, o, p = [c, null, b, null], s = this._evtmgr, r, t;n < m;n++) {
      o = e[n], p[1] = n, p[3] = o, r = s.trigger("onGetCellClass", p), a[a.length] = r ? f[n] + r.join(" ") + "'>" : f[n] + "'>", (t = g[n]) ? l[n] ? this._renderCell(a, c, n, b, o, t, !0) : this._renderCell(a, c, n, b, o, t) : this._renderCell(a, c, n, b, o), a[a.length] = "</div>"
    }
    a[a.length] = "</div>";
    return a
  };
  c._renderCell = function(c, b, e, f, i) {
    var g = i.key, l = f[g], n = [b, e, f, i, c], m = this._evtmgr, g = "onRenderCell_" + g;
    m.trigger(g + "_prepend", n, !0);
    if(typeof l != "string" || l.substring(0, 3) !== "J@H") {
      arguments.length > 5 ? c[c.length] = arguments[6] ? arguments[5](new a({grid:this.grid, row:b, col:e, datarow:f, colDef:i})) : arguments[5](l, b, e, f, i) : l != null && (c[c.length] = l)
    }
    m.trigger(g + "_append", n, !0)
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
    var f = this._getClosestCell(c.target);
    if(f) {
      this.grid.log("UI event:" + b + " on Viewport. event=" + c.type, e);
      f = new a({grid:this.grid, node:f});
      e = f.getKey();
      c = [c, f];
      f = this._evtmgr;
      if(b.indexOf(",") > -1) {
        for(var b = b.split(","), i = 0, g = b.length, l;i < g;i++) {
          l = b[i], f.trigger(l + "_" + e, c, !0), f.trigger(l, c, !0)
        }
      }else {
        f.trigger(b + "_" + e, c, !0), f.trigger(b, c, !0)
      }
      return!0
    }else {
      return!1
    }
  };
  c._scroll = function() {
    var a = this.getScrollTop(), c = a - this._lastScrollTop, b = this.getScrollLeft(), f = b - this._lastScrollLeft;
    if(c !== 0 || f !== 0) {
      this.grid.log("Viewport scrolled... h=" + f + ", v=" + c, e.V_SCROLL);
      var i = this._evtmgr, c = Math.abs(c / this._getRowOuterHeight());
      i.trigger("onScrollViewport", !1, !0);
      if(f) {
        this._lastScrollLeft = b, i.trigger("onScrollViewportH", [b], !0)
      }
      if(c >= this._options.appendThreshold) {
        this._lastScrollTop = a, this._removeAndRenderRows(), i.trigger("onScrollViewportV", !1, !0)
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
    return a ? this._renderedRows.hasOwnProperty(a) : !1
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
      var b = this.getRowByIdx(a);
      if(b) {
        return b.childNodes[c]
      }
    }
  };
  c.getCellByIdAndKey = function(a, c) {
    var b = this._colmgr.getIdxByKey(c);
    if(b != null) {
      var e = this.getRowById(a);
      if(e) {
        return e.childNodes[b]
      }
    }
  };
  c.getRenderedCell = function(a, c) {
    if(c != null) {
      var b = this.getRenderedRowByIdx(a);
      if(b) {
        return b.childNodes[c]
      }
    }
  };
  c.getRenderedCellByIdAndKey = function(a, c) {
    var b = this._colmgr.getIdxByKey(c);
    if(b != null) {
      var e = this.getRenderedRowById(a);
      if(e) {
        return e.childNodes[b]
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
    this._options = h._extend({colDef:{type:"string", key:void 0, name:"", colClass:void 0, defaultValue:void 0, inputOnCreate:void 0, style:"", headerStyle:"", width:80, minW:30, maxW:void 0, editor:void 0, sorter:void 0, hidden:!1, sumRenderer:void 0, tooltipEnabled:!1, resizable:!1, renderer:void 0, rendererInput:!1, noTitle:!1, noName:!1, title:void 0, noSearch:!1, filter:void 0, parser:void 0, validator:void 0}}, a.options);
    this._colDefs = [];
    this._filtered = [];
    this._keyToDef = {};
    this._keyToIdx = {};
    this.__init(a)
  }
  function g(a) {
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
  function c(a, c) {
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
  var h = goog.getObjectByName("jx.grid"), j = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.getObjectByName("jx.grid.Column");
  goog.getObjectByName("jx.grid.ViewportManager");
  goog.exportSymbol("jx.grid.ColumnManager", f);
  f.getInstance = function(a) {
    return new f(a)
  };
  var k = f.prototype;
  k.__init = function(a) {
    this.grid.event.bind("onDestroy", this._destroy, this);
    this.set(a.colDefs)
  };
  k._destroy = function() {
    h._destroy(this, {name:"ColumnManager", path:"colDefMgr", property:"_colDefs", map:"_keyToIdx _keyToDef _options", array:"_filtered"})
  };
  k.getAll = function() {
    return this._colDefs
  };
  k.set = function(a) {
    if(this._colDefs === a || j.areEqualArrays(this._colDefs, a)) {
      return a
    }
    if(j.isNull(a)) {
      a = []
    }else {
      var c = a.filter(function(a) {
        return j.isNotNull(a)
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
    for(var c = 0, b = a.length, d = this._keyToDef, e, f;c < b;c++) {
      e = a[c];
      if(!e.hasOwnProperty("key")) {
        return this._keyToDef = {}, this.grid.error("KEY_UNDEFINED", c)
      }
      f = e.key;
      if(j.isEmptyString(f)) {
        return this._keyToDef = {}, this.grid.error("BAD_NULL", c)
      }
      if(d.hasOwnProperty(f)) {
        return this._keyToDef = {}, this.grid.error("DUP_KEY", f)
      }
      d[f] = e
    }
    this._colDefs = a;
    for(c = 0;c < b;c++) {
      this._extend(a[c])
    }
    this.grid.event.trigger("onAfterSetColDefs", [a, this._filter()], !0);
    return a
  };
  k.push = function(a) {
    return this.addAt(this._filtered.length, a)
  };
  k.addAt = function(a, c) {
    if(!j.isNull(c)) {
      var b = c.key, d = this._keyToDef, e = this._filtered;
      j.isNull(a) || a > e.length ? a = e.length : a < 0 && (a += e.length);
      this.grid.event.trigger("onBeforeAddColDef", [c], !0);
      if(j.isNull(b)) {
        return this.grid.error("KEY_UNDEFINED")
      }
      if(d.hasOwnProperty(b)) {
        return this.grid.error("DUP_KEY", b)
      }
      this._colDefs.addAt(a, this._extend(d[b] = c));
      c.hidden !== !0 && (e.addAt(a, c), this._reidx());
      this.grid.event.trigger("onAfterAddColDef", [c, a], !0);
      return e.length
    }
  };
  k._extend = function(c) {
    if(c) {
      var d = {}, h, j;
      $.extend(!0, d, this._options.colDef);
      $.extend(!0, d, c);
      $.extend(!0, c, d);
      d = c.type = g(c.type);
      j = c.key;
      j != null && typeof j != "string" && (c.key = j = j.toString());
      if(!j) {
        throw Error("column key is not defined!");
      }
      if(h = c.sorter) {
        typeof h == "string" ? h = g(h) : d && (h = d);
        if(h = f.sorter(h, j)) {
          h.key = j
        }
        c.sorter = h
      }
      if((h = c.parser) && d && typeof h != "function") {
        switch(d) {
          case "boolean":
            h = e;
            break;
          case "int":
            h = parseInt;
            break;
          case "float":
            h = parseFloat;
            break;
          case "string":
            h = b;
            break;
          case "date":
            h = a;
            break;
          default:
            h = null
        }
        c.parser = h
      }
    }
    return c
  };
  k.hide = function(a) {
    var c = this._filtered[a];
    if(!j.isNull(c)) {
      return c.hidden = !0, this._filtered.removeAt(a), this._reidx(), this.grid.event.trigger("onHideCol", [c, a], !0), c
    }
  };
  k.show = function(a) {
    if(!j.isNull(a)) {
      if(!j.isString(a)) {
        if(!j.isObject(a)) {
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
  k._filter = function() {
    this._filtered = this._colDefs.filter(function(a) {
      return a.hidden !== !0
    });
    this._reidx();
    return this._filtered
  };
  k._reidx = function() {
    this._keyToIdx = {};
    return this._reidxFrom()
  };
  k._reidxFrom = function(a) {
    j.isNull(a) && (a = 0);
    for(var c = this._filtered, b = c.length, d = this._keyToIdx;a < b;a++) {
      d[c[a].key] = a
    }
    return d
  };
  k.get = function(a) {
    if(j.isNull(a)) {
      return this._filtered
    }
    if(this._filtered.hasOwnProperty(a)) {
      return this._filtered[a]
    }
  };
  k.getByKey = function(a) {
    if(j.isNotNull(a) && this._keyToDef.hasOwnProperty(a)) {
      return this._keyToDef[a]
    }
  };
  k.length = function() {
    return this._filtered.length
  };
  k.getIdxByKey = function(a) {
    return this._keyToIdx.hasOwnProperty(a) ? this._keyToIdx[a] : -1
  };
  k.getIdx = function(a) {
    return j.isNotNull(a) && this._keyToIdx.hasOwnProperty(a.key) ? this._keyToIdx[a.key] : -1
  };
  k.sortByKey = function(a) {
    this._filtered.length = 0;
    this._keyToIdx = {};
    for(var c = 0, b = a.length, d = this._filtered, e = this._keyToIdx, f = this._keyToDef;c < b;c++) {
      d.push(f[a[c]]), e[a[c]] = c
    }
    this.grid.event.trigger("onReorderCols", a, !0);
    return this._filtered
  };
  k.getKeys = function() {
    return this._filtered.map(function(a) {
      return a.key
    })
  };
  f.sorter = function(a, b, e) {
    e = {on:!!e, key:b};
    switch(a) {
      case "boolean":
        return e.comparator = function(a, c) {
          return d(a[b]) - d(c[b])
        }, e;
      case "string":
        return e.lexi = b, e;
      case "int":
        return e.comparator = function(a, d) {
          return c(a[b], "toInt") - c(d[b], "toInt")
        }, e;
      case "float":
        return e.comparator = function(a, d) {
          return c(a[b], "toFloat") - c(d[b], "toFloat")
        }, e;
      case "date":
        return e.comparator = function(a, d) {
          return c(a[b], "toInt") - c(d[b], "toInt")
        }, e
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
  var g = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util"), b = goog.getObjectByName("jx.grid.BaseModule");
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
    g._destroy(this, {name:"MenuBar", path:"menubar", $:"_menubar", property:"_ctnr", map:"_options"})
  };
  a._onCreateCss = function() {
    var a = "#" + this.grid.mid + " .", b = this._options, e = [];
    e.push(a + b.classMenuBar + "{" + g._CONST._cssUnselectable + "overflow:hidden;width:100%;background:" + b.background + ";border-bottom:" + (b.borderThickness + "px " + b.border) + ";height:" + b.height + "px}");
    e.push(a + b.classIcon + "{float:left;height:" + b.iconHeight + "px;width:" + b.iconWidth + "px;border:" + b.iconBorderThickness + "px " + b.iconBorder + ";margin:" + b.iconMargin + "px 0 0 " + b.iconMargin + "px;background:" + b.iconBackground + ";border-radius:" + b.iconBorderRadius + "px;-moz-border-radius:" + b.iconBorderRadius + "px}");
    e.push(a + b.classIcon + ":hover," + a + b.classIcon + ":focus{background:" + b.iconBackgroundHover + ";border:" + b.iconBorderThickness + "px " + b.iconBorderHover + "}");
    e.push(a + b.classIcon + ":active," + a + b.classIcon + ".active{cursor:default;background:" + b.iconBackgroundActive + ";border:" + b.iconBorderThickness + "px " + b.iconBorderActive + "}");
    e.push(a + b.classIcon + ".active:focus{border:" + b.iconBorderThickness + "px " + b.iconBorderFocus + "}");
    return e.join("")
  };
  a.addIcon = function(a, b, f, j, g) {
    return $("<div class='" + this._options.classIcon + "' tabIndex='0' title='" + b + "'><div class='" + a + "' style='margin-top:" + (this._options.iconHeight - j) / 2 + "px;margin-left:" + (this._options.iconWidth - f) / 2 + "px'></div></div>").appendTo(this._menubar).click(function(a) {
      g();
      $(this).toggleClass("active");
      a.preventDefault()
    }).keydown(function(a) {
      if(a.which === e.keyMapKeydown.enter || a.which === e.keyMapKeydown.space) {
        g(), $(this).toggleClass("active"), a.preventDefault()
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
    this._options = g._extend({classCell:"footer-cell", background:"#F1F5FB", border:"0px solid #CCD9EA", color:"#000", fontSize:"13px", fontWeight:"normal", cellHeight:25, cellPadding:40, countTemplate:"현재 <span name='shownCount'></span> 건 / 총 <span name='totalCount'></span> 건", titleColor:"#5A6779", titleFontSize:"12px", titleFontWeight:"normal", contentColor:"#1E395B", contentFontSize:"12px", contentFontWeight:"normal", classFooter:"jgrid-footer", classTitle:"footer-title", classContent:"footer-content", 
    style:"", cellStyle:"", titleStyle:"", contentStyle:""}, a.options);
    this._sumMap = {};
    this.__init()
  }
  var g = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util");
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
    var a, c = this._sumMap;
    for(a in c) {
      c.hasOwnProperty(a) && c[a].remove()
    }
    g._destroy(this, {name:"Footer", path:"footer", $:"_foot", property:"_ctnr", map:"_sumMap _options"})
  };
  b._onCreateCss = function() {
    var a = this._options, c = "#" + this.grid.mid + " ." + a.classFooter, b = [];
    b.push(c + "{float:left;cursor:default;width:100%;" + g._CONST._cssUnselectable + "background:" + a.background + ";border-top:" + a.border + ";border-collapse:collapse;color:" + a.color + ";font-size:" + a.fontSize + ";font-weight:" + a.fontWeight + ";padding-left:8px;" + a.style + "}");
    b.push(c + " ." + a.classCell + "{float:left;white-space:nowrap;line-height:" + a.cellHeight + "px;padding-right:" + a.cellPadding + "px;" + a.cellStyle + "}");
    b.push(c + " ." + a.classTitle + "{text-align:right;color:" + a.titleColor + ";font-size:" + a.titleFontSize + ";font-weight:" + a.titleFontWeight + ";" + a.titleStyle + "}");
    b.push(c + " ." + a.classContent + "{color:" + a.contentColor + ";font-size:" + a.contentFontSize + ";font-weight:" + a.contentFontWeight + ";" + a.contentStyle + "}");
    return b.join("")
  };
  b._updateTotalCount = function() {
    this._foot.find("[name=totalCount]")[0].innerHTML = this.grid.dataMgr.getReal().length
  };
  b._updateShownCount = function() {
    this._foot.find("[name=shownCount]")[0].innerHTML = this.grid.dataMgr.filterReal(this.grid.dataMgr.datalist).length
  };
  b._initSumCells = function() {
    for(var a = this.grid.dataMgr.getReal(), c = this.grid.colDefMgr.get(), b = c.length, h, j, g, i, q = f._calSum, l = this._sumMap, n, m = 0;m < b;m++) {
      if(h = c[m], j = h.sumRenderer, e.isNotNull(j)) {
        if(g = h.key, h = h.name, i = q(a, g), g = l[g] = this.getNextCell(), n = g[0], e.isFunction(j)) {
          n.innerHTML = j(h, i)
        }else {
          if(e.isString(j)) {
            if(g = j.toLowerCase(), g === "krw" || j === "\\") {
              n.innerHTML = this._sumRenderer(h, e.formatNumber(i))
            }else {
              if(g === "usd" || j === "$") {
                n.innerHTML = this._sumRenderer(h, e.formatNumber(i, 2, "$ "))
              }
            }
          }else {
            n.innerHTML = this._sumRenderer(h, i)
          }
        }
      }
    }
  };
  b._updateSums = function() {
    var a = this.grid.dataMgr.getReal(), c, b = this._sumMap, h = this.grid.colDefMgr, j, g, i, q = f._calSum, l, n, m = this._options.classContent;
    for(c in b) {
      if(b.hasOwnProperty(c)) {
        if(j = h.getByKey(c), g = j.sumRenderer, i = q(a, c), l = b[c], n = l[0], e.isFunction(g)) {
          n.innerHTML = g(j.name, i)
        }else {
          if(e.isString(g)) {
            if(j = g.toLowerCase(), j === "krw" || g === "\\") {
              l.find("span." + m)[0].innerHTML = e.formatNumber(i)
            }else {
              if(j === "usd" || g === "$") {
                l.find("span." + m)[0].innerHTML = e.formatNumber(i, 2, "$ ")
              }
            }
          }else {
            l.find("span." + m)[0].innerHTML = i
          }
        }
      }
    }
  };
  b.getNextCell = function() {
    return $("<div class='" + this._options.classCell + "'/>").appendTo(this._foot)
  };
  b._sumRenderer = function(a, c) {
    return"<span class='" + this._options.classTitle + "'>" + a + " 합계: </span><span class='" + this._options.classContent + "'>" + c + "</span>"
  };
  f._calSum = function(a, c) {
    for(var b = 0, e, f = a.length, g = 0;g < f;g++) {
      if(typeof(e = a[g][c]) === "string") {
        e = e.toFloat()
      }
      b += isNaN(e) ? 0 : e
    }
    return b
  }
})();
console && console.log && console.log('reading javascript source "ColumnHeader.js"...');
jx.grid.ColumnHeader = {};
(function() {
  function f(c) {
    c.grid.log("creating new ColumnHeader instance...", a.V_INIT);
    b.call(this, c)
  }
  var g = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util"), b = goog.getObjectByName("jx.grid.BaseModule"), a = goog.getObjectByName("jx.grid.Grid");
  goog.exportSymbol("jx.grid.ColumnHeader", f);
  goog.inherits(f, b);
  f.getInstance = function(a) {
    return new f(a)
  };
  var c = f.prototype;
  c._init = function(c) {
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
  c._bindEvents = function() {
    this.grid.log("binding ColumnHeader events...", a.V_INIT);
    var c, b = this.getColumns(), e = b.length, f = 0;
    for(c = {onRenderModules:this._onRenderModules, onAfterRenderModules:this._onAfterRenderModules, mousedown:this._mousedown, mouseup:this._mouseup, dragmove:this._dragmove, onScrollViewportH:this._onScrollViewportH, onScrollViewportV:this._onScrollViewportV, onChangeSorter:this._onChangeSorter, click:this._click, onResizeCol:this._setWidthByKey};f < e;f++) {
      if(b[f].sorter) {
        c["clickHeader_" + b[f].key] = this._sort
      }
    }
    this.bindGridEvent(c, this)
  };
  c._defaultOptions = function(c) {
    this.grid.log("extending ColumnHeader options...", a.V_INIT);
    c = c._options.imageUrl;
    return{reorderEnabled:!1, reorderSyncEnabled:!0, background:"url(" + c + "column-headers-bg.png) repeat-x scroll center", backgroundHover:"url(" + c + "column-headers-over-bg.png) repeat-x scroll center", backgroundPlaceholder:"#646464", sortBackground:c + "sort.png", sortRight:4, sortWidth:7, sortBackgroundAsc:c + "sort-asc.png", sortBackgroundDesc:c + "sort-desc.png", font:"15px Arial,Helvetica,sans-serif", height:21, borderThickness:1, border:"solid #909192", classHeaderMask:"jgrid-header-mask", 
    classHeader:"jgrid-header", classColHeader:"jgrid-colheader", classColHeaderActive:"jgrid-colheader-active", classColHeaderPlaceholder:"jgrid-colheader-placeholder", classInteractive:"interactive", classColHeaderSorted:"jgrid-colheader-sorted", classSort:"jgrid-sort", classSortAsc:"jgrid-sort-asc", classSortDesc:"jgrid-sort-desc", classResizeHandle:"jgrid-resize-handle", resizeHandleWidth:11, style:"", headerStyle:"", scrollerLeft:1E4, scrollerWidth:1E5, classResizeGuide:"resize-guide", resizeGuideWidth:1, 
    resizeBackground:"black;filter:alpha(opacity=40);opacity:0.4", syncResize:!1, resizeHandleBackground:"black;filter:alpha(opacity=5);opacity:0.05"}
  };
  c._beforeDispose = function() {
    this.grid.log("disposing ColumnHeader instance...", a.V_INIT);
    this._head.sortable && this._head.sortable("destroy");
    this._destroyResizeHandles();
    g._destroy(this, {name:"ColumnHeader", path:"header", $:"_resizeGuide _mask _head", property:"_ctnr _resizeMap", map:"_map _options"});
    this.dispose()
  };
  c._destroyResizeHandles = function() {
    var a = this._resizeMap, c;
    for(c in a) {
      a.hasOwnProperty(c) && (a[c].remove(), delete a[c])
    }
    delete this._resizeKey;
    delete this._resizeInitX;
    delete this._resizeHandleInitX;
    delete this._resizeInitWidth;
    delete this._resizeInitColWidth
  };
  c._beforeCreateCss = function(c) {
    this.grid.log("creating CSS for ColumnHeader...", a.V_INIT);
    var b = "#" + this.grid.mid + " .", e = this._options, f = e.borderThickness + "px " + e.border, g = this.getColumns(), q = g.length, l = 0, n = "." + e.classHeaderMask, m = "." + e.classColHeader, o = e.scrollerLeft, o = e.scrollerLeft, p = e.height + "px", s = e.classColHeaderActive, r = {};
    r[n] = {position:"relative", overflow:"hidden", width:"100%", font:e.font, background:e.background, "border-bottom":f, _append:e.style};
    r["." + e.classHeader] = {position:"relative", overflow:"hidden", "white-space":"nowrap", cursor:"default", left:-o + "px", width:e.scrollerWidth + "px", "line-height":p};
    r[m] = {position:"relative", overflow:"hidden", "float":"left", "text-overflow":"ellipsis", "text-align":"center", height:p, left:o - this.getView().getScrollLeft() + "px", "border-right":f, _append:e.headerStyle};
    r[m + "." + e.classInteractive + ":hover, " + b + s] = {background:e.backgroundHover};
    r["." + s] = {"border-left":f};
    r[m + "." + e.classColHeaderPlaceholder] = {background:e.backgroundPlaceholder + "!important"};
    r["." + e.classSort] = {position:"absolute", height:p, right:e.sortRight + "px", width:e.sortWidth + "px", background:"url(" + e.sortBackground + ") no-repeat center transparent"};
    r["." + e.classSortAsc] = {background:"url(" + e.sortBackgroundAsc + ") no-repeat center transparent"};
    r["." + e.classSortDesc] = {background:"url(" + e.sortBackgroundDesc + ") no-repeat center transparent"};
    r["." + e.classResizeHandle] = {"z-index":10, background:e.resizeHandleBackground, cursor:"e-resize", position:"absolute", height:p, width:e.resizeHandleWidth + "px"};
    for(r["." + e.classResizeGuide] = {"z-index":10, position:"absolute", background:e.resizeBackground, width:e.resizeGuideWidth + "px"};l < q;l++) {
      g[l].headerStyle && (r[m + "#" + this.mid + "h" + g[l].key] = {_append:g[l].headerStyle})
    }
    this.toCssStyles(c.css, r)
  };
  c._widthPlus = function() {
    return this._options.borderThickness
  };
  c._onScrollViewportH = function(c) {
    this.grid.log("adjusting Colheader style.left according to viewport scrollLeft...", a.V_RESIZE);
    this._head[0].style.left = -this._options.scrollerLeft - c + "px"
  };
  c._onRenderModules = function() {
    this.grid.log("rendering Colheader...", a.V_INIT);
    for(var c = this.getColumns(), b = c.length, e = 0, f, g = [];e < b;e++) {
      (f = c[e]).hidden || this._render(g, f, e)
    }
    this._head[0].innerHTML = g.join("");
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
  c._render = function(a, c, b) {
    var e = this._options, f = c.key, g = c.noName ? "" : c.name || f, l = this._widthPlus(), n = "onRenderHeader_" + f, m = [a];
    a.push("<div id='" + this.mid + "h" + f + "' class='" + e.classColHeader + " " + (e.reorderEnabled || c.sorter ? " " + e.classInteractive : "") + "' " + (c.noTitle ? "" : "title='" + (c.title || g) + "' ") + "style='width:" + (this.getView()._getColOuterWidth(b) - l) + "px;' colKey='" + f + "'>");
    this.triggerGridEvent(n + "_prepend", m, !0);
    a.push(g);
    this.triggerGridEvent(n + "_append", m, !0);
    c.sorter && a.push("<span class='" + e.classSort + "'></span>");
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
    var c = document.getElementById(this.mid + "h" + a);
    return!c ? $([]) : this._map[a] = $(c)
  };
  c._updateIndicator = function(a, c) {
    var b = this.get(a), e = this._options, f = b.find("." + e.classSort), g = e.classColHeaderSorted, l = e.classSortAsc, e = e.classSortDesc;
    c === 0 ? (b.removeClass(g), f.removeClass(l + " " + e)) : (b.addClass(g), c === 1 ? f.addClass(l).removeClass(e) : c === 2 && f.addClass(e).removeClass(l))
  };
  c._closest = function(a) {
    return Util$.safe$(a).closest("div." + this._options.classColHeader, this._head)
  };
  c._getDef = function(a) {
    return this.getColMgr().getByKey(a.attr("colKey"))
  };
  c._sort = function(c, b, e) {
    this.grid.log("Colheader clicked to sort. key=" + f, a.V_CLICK);
    var f = e.key, c = e.sorter;
    this.triggerGridEvent("onBeforeColSort_" + f, !1, !0);
    this.triggerGridEvent("onBeforeColSort", !1, !0);
    c.desc = c.desc === !1 ? !0 : !1;
    this.getDataMgr().refresh({sorter:c});
    this.getView()._scroll()
  };
  c._onChangeSorter = function(a, c) {
    a !== c && a && this._updateIndicator(a.key, 0);
    c && this._updateIndicator(c.key, c.desc ? 2 : 1)
  };
  c._initReorder = function() {
    this.grid.log("initializing Colheader reorder functionality...", a.V_INIT);
    var c = this, b = this._options, e = this.getColMgr(), f = this._head, g = this.mid.length + 1, q = function(a, c) {
      for(var b = $(f).sortable("toArray"), d = b.length, h, q = 0;q < d;q++) {
        h = b[q], b[q] = h === "" ? c.item.attr("id").substring(g) : h.substring(g)
      }
      e.sortByKey(b)
    };
    f.sortable({items:"." + b.classColHeader, axis:"x", forcePlaceholderSize:!0, placeholder:b.classColHeaderPlaceholder + " " + b.classColHeader, tolerance:"pointer", start:function(a, b) {
      b.item.addClass(c._options.classColHeaderActive)
    }, stop:function(a, b) {
      b.item.removeClass(c._options.classColHeaderActive);
      c._syncResizeHandles()
    }, update:q});
    b.reorderSyncEnabled && f.sortable("option", "change", q)
  };
  c._getDx = function(a, c) {
    var b = a.clientX - this._resizeInitX, f = c.minW, g = e.ifNull(c.maxW, Number.MAX_VALUE), q = this._resizeInitWidth;
    q + b < f && (b = f - q);
    q + b > g && (b = g - q);
    return b
  };
  c._click = function(c) {
    var b = this._closest(c.target);
    if(b.length !== 0) {
      var e = this._getDef(b), f = e.key, c = [c, b, e];
      this.grid.log("Colheader clicked. key=" + f, a.V_CLICK);
      this.getEventMgr().triggerInvalid("clickHeaderValid_" + f, c) || (this.triggerGridEvent("clickHeader_" + f, c, !0), this.triggerGridEvent("clickHeader", c, !0))
    }
  };
  c._mousedown = function(c) {
    var b = this._options;
    if(e.hasTagAndClass(c.target, "DIV", b.classResizeHandle)) {
      var f = this._resizeKey = c.target.getAttribute("key");
      this.grid.log("mousedown on ColumnHeader Resize Handle. key=" + f, a.V_MOUSEDOWN);
      this._resizeInitWidth = this.get(f)[0].clientWidth;
      this._resizeInitColWidth = this.getColMgr().getByKey(f).width;
      this._resizeInitX = c.clientX;
      this._resizeHandleInitX = this._resizeMap[f][0].offsetLeft;
      this._resizeGuide[0].style.left = Math.floor(this._resizeHandleInitX + (b.resizeHandleWidth - b.resizeGuideWidth) / 2 - b.scrollerLeft) + "px";
      this._resizeGuide[0].style.height = this.getView().getInnerHeight() + "px"
    }else {
      if(b = this._closest(c.target), b.length) {
        var g = this._getDef(b), f = g.key, c = [c, b, g];
        this.grid.log("mousedown on ColumnHeader. key=" + f, a.V_MOUSEDOWN);
        this.triggerGridEvent("mousedownHeader", c, !0);
        this.triggerGridEvent("mousedownHeader_" + f, c, !0)
      }
    }
  };
  c._dragmove = function(c) {
    var b = this._resizeKey;
    if(b != null && (c = this._getDx(c, this.getColMgr().getByKey(b)), !(Math.abs(c) < 1))) {
      this.grid.log("drag on ColumnHeader Resize Handle. key=" + b, a.V_MOUSEMOVE);
      var e = this._options;
      this.get(b)[0].style.width = this._resizeInitWidth + c + "px";
      this._moveResizeHandles(this._resizeHandleInitX + c - this._resizeMap[b][0].offsetLeft, this.getColMgr().getIdxByKey(b));
      this._resizeGuide[0].style.left = Math.floor(this._resizeHandleInitX + c + (e.resizeHandleWidth - e.resizeGuideWidth) / 2 - e.scrollerLeft) + "px";
      e.syncResize && this.getView().setWidthByKey(b, this._resizeInitColWidth + c)
    }
  };
  c._mouseup = function(c) {
    var b = this._resizeKey;
    if(b != null) {
      this.grid.log("mouseup on ColumnHeader Resize Handle. key=" + b, a.V_MOUSEUP), this._resizeGuide[0].style.height = "0px", c = this._getDx(c, this.getColMgr().getByKey(b)), Math.abs(c) >= 1 && this.getView().setWidthByKey(b, this._resizeInitColWidth + c), delete this._resizeKey, delete this._resizeInitX, delete this._resizeHandleInitX, delete this._resizeInitWidth, delete this._resizeInitColWidth
    }
  };
  c._setWidthByKey = function(c, b) {
    this.grid.log("setting ColumnHeader width=" + b + ". key=" + c, a.V_RESIZE);
    this.get(c)[0].style.width = b + this.getView()._colWidthPlus() - this._widthPlus() + "px";
    this._syncResizeHandles(this.getColMgr().getIdxByKey(c));
    this.getView()._scroll()
  };
  c._syncResizeHandles = function(a) {
    for(var a = a || 0, c = this.getView()._getColLefts(), b = this.getColumns(), e = b.length, f = this._resizeMap, g;a < e;a++) {
      if(g = b[a].key, f.hasOwnProperty(g)) {
        f[g][0].style.left = c[a + 1] + this._resizeHandleOffset + "px"
      }
    }
  };
  c._moveResizeHandles = function(a, c) {
    for(var c = c || 0, b = this.getColumns(), e = b.length, f = this._resizeMap, g;c < e;c++) {
      if(g = b[c].key, f.hasOwnProperty(g)) {
        g = f[g][0], g.style.left = g.offsetLeft + a + "px"
      }
    }
  };
  c._onScrollViewportV = function() {
    this._resizeGuide[0].style.top = this.getView().getScrollTop() + "px"
  };
  c._initResizeHandles = function() {
    this.grid.log("initializing Colheader resize functionality...", a.V_INIT);
    for(var c = this.getColumns(), b = c.length, e = this.getView(), f = e.mid, e = e._getColLefts(), g = this._options, q = this._resizeMap, l, n = 0, m = this._resizeHandleOffset = Math.floor(g.scrollerLeft - g.resizeHandleWidth / 2), o = g.classResizeHandle, p = this._head;n < b;n++) {
      if(g = c[n], g.resizable) {
        l = g.key, q[l] = $("<div class='" + o + "' key='" + l + "' ondblclick='JGM.m.ViewportManager." + f + '._autoColWidth("' + l + "\")' style='left:" + (m + e[n + 1]) + "px' title='" + g.name + " 컬럼의 폭을 조절합니다.'>").appendTo(p)
      }
    }
  }
})();
console && console.log && console.log('reading javascript source "CheckManager.js"...');
jx.grid.CheckManager = {};
(function() {
  function f(a) {
    function d() {
      var a = this._options, c = this._isRadio = a.isRadio = !!a.isRadio;
      this._hasMaster = a.master = !c && !!a.master;
      this._col = a.colDef;
      this._key = this._col.key;
      this._cssClass = a.classCheck;
      this._cssClassMaster = a.classMasterCheck;
      this._name = a.name || c && "radio" + this.mid || null
    }
    this.addEventListener("afteroption", d);
    b.call(this, a);
    this.removeEventListener("afteroption", d)
  }
  var g = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util"), b = goog.getObjectByName("jx.grid.BaseModule");
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
    var a, b = g._CONST;
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
    this._isRadio ? (a = g._CONST._radioWidth, b = g._CONST._radioHeight) : (a = g._CONST._checkboxWidth, b = g._CONST._checkboxHeight);
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
    for(var a = this.getAllData(), b = a.length, e = this.getIdKey(), g = this._map, k = 0;k < b;k++) {
      g[a[k][e]] = a[k]
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
    var e = e.getId(a), g = this.disabledmap;
    g.hasOwnProperty(e) || (g[e] = a, f.disableNode(this.getCheckbox(a)), this.triggerGridEvent("onDisableCheck", [a], !0))
  };
  a.enable = function(a, b) {
    var e = this.getDataMgr();
    b || (a = e.map(a));
    var e = e.getId(a), g = this.disabledmap;
    g.hasOwnProperty(e) && (delete g[e], f.enableNode(this.getCheckbox(a)), this.triggerGridEvent("onEnableCheck", [a], !0))
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
    for(var e = [], f = [], g = 0, i = a.length, q = this.getIdKey(), l, n = this._map;g < i;g++) {
      n.hasOwnProperty((l = a[g])[q]) ? e.push(l) : f.push(l)
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
    for(var b = a.length, e = [], f = 0, g = this.getColMgr().getIdxByKey(this._key);f < b;f++) {
      e.push(a[f].childNodes[g].childNodes[0])
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
    var f = this._map, g = this.disabledmap;
    f.hasOwnProperty(b) && (delete f[b], f[e] = a);
    g.hasOwnProperty(b) && (delete g[b], g[e] = a)
  };
  a._onIdListChange = function(a, b, e) {
    for(var f = 0, g = a.length, i = this._map, q = this.disabledmap, l, n;f < g;f++) {
      l = a[f], n = b[f], i.hasOwnProperty(n) && (delete i[n], i[l[e]] = l), q.hasOwnProperty(n) && (delete q[n], q[l[e]] = l)
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
  a._onRenderCell = function(a, b, e, f, g) {
    g.push("<input tabIndex='-1' onclick=\"JGM.m.CheckManager." + this.mid + ".toggleById('" + e[this.getIdKey()] + "')\" type='" + (this._isRadio ? "radio" : "checkbox") + "' class='" + this._cssClass + "' mid='" + this.mid + "'");
    this._name && g.push(" name='" + this._name + "'");
    this.isChecked(e, !0) && g.push(" checked='checked'");
    (this._disabled || this.isDisabled(e, !0)) && g.push(" disabled='disabled'");
    g.push("/>")
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
    this._options = g._extend({key:void 0, colDef:{key:"collapser", width:120, name:" ", noSearch:!0}, colIdx:0, urlCollapsed:this.grid._options.imageUrl + "collapsed.png", urlCollapsedHover:this.grid._options.imageUrl + "collapsed-hover.png", urlExpanded:this.grid._options.imageUrl + "expanded.png", urlExpandedHover:this.grid._options.imageUrl + "expanded-hover.png", width:6, padding:5, classCollapser:"jgrid-collapser", classCollapsed:"collapsed", classExpanded:"expanded", classIndent:"indent", 
    classMasterCollapser:"master", indentSize:12, beginCollapsed:!1, CheckManager:void 0, Tree:void 0}, a.options);
    if(this._options.CheckManager) {
      this.checkMgr = g.create("CheckManager", {grid:this.grid, options:this._options.CheckManager}), delete this._options.CheckManager, e.isNull(this._options.key) && this._options.colIdx++
    }
    this._tree = new b({list:this.grid.dataMgr.all, options:this._options.Tree})
  }
  var g = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util");
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
    g._destroy(this, {name:"Collapser", path:"collapser", module:"_tree", $:"_master", property:"checkMgr", map:"_options"})
  };
  a._onCreateCss = function() {
    var a = "#" + this.grid.mid + " .", b = this._options, f = a + this.grid.view._options.classRow + " .", g = a + b.classCollapser, k = g + "." + b.classExpanded, i = g + "." + b.classCollapsed, q = this.grid.view._getRowInnerHeight(), l = [], n = this.grid.header;
    l.push(a + b.classIndent + "{height:" + q + "px;float:left;}");
    l.push(g + "{width:" + b.width + "px;float:left;padding:0 " + b.padding + "px}");
    l.push(f + b.classCollapser + "{height:" + q + "px}");
    l.push(k + "{background:url(" + b.urlExpanded + ") no-repeat center transparent}");
    l.push(k + ":hover{background:url(" + b.urlExpandedHover + ") no-repeat center transparent}");
    l.push(i + "{background:url(" + b.urlCollapsed + ") no-repeat center transparent}");
    l.push(i + ":hover{background:url(" + b.urlCollapsedHover + ") no-repeat center transparent}");
    e.isNotNull(n) && l.push(a + n._options.classColHeader + " ." + b.classCollapser + "{height:" + n._options.height + "px}");
    return l.join("")
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
    for(var b = 0, f = a.length, g = this._tree, k = g.root, i = this._options.beginCollapsed, q = this.key, l = this.grid.view, n = this.grid.dataMgr, m, o = [], p;b < f;b++) {
      m = g.createNode(a[b]), m._collapsed = i, e.isNotNull(m.parent) && m.parent.children.length === 1 && o.push(m.parent.data)
    }
    if(l !== void 0) {
      b = 0;
      for(f = o.length;b < f;b++) {
        l.rerenderCellByIdAndKey(n.getId(o[b]), q)
      }
    }
    k.traverseChildren({fn:function(a) {
      p = this.parent;
      e.isNotNull(p) && (p === k || p._shown && !p._collapsed) ? this._shown = !0 : (a.propagate = !1, this.traverse({fn:function() {
        this._shown = !1
      }}))
    }});
    this.grid.event.trigger("onCollapserTreeChange", !1, !0)
  };
  a._onUpdateDatarow = function(a, b, f) {
    var g = this._tree, k = g._options.nodeKey, i = g._options.parentKey, q;
    b.hasOwnProperty(k) && (q = g.getNodeByNodeId(f[k]), g.changeNodeId(q, f[k], b[k]), this.grid.event.trigger("onCollapserTreeChange", !1, !0));
    b.hasOwnProperty(i) && (e.isNull(q) && (q = g.getNode(a)), g.changeParentId(q, f[i], b[i]), this.grid.event.trigger("onCollapserTreeChange", !1, !0))
  };
  a._onUpdateDatalist = function(a, b, f) {
    for(var b = this._tree, g = b._options.nodeKey, k = b._options.parentKey, i, q, l, n = [], m = [], o = 0, p = a.length;o < p;o++) {
      i = f[o], q = a[o], l = void 0, i.hasOwnProperty(g) && (e.isNull(l) && (l = b.getNodeByNodeId(i[g])), n.push({node:l, before:i[g], newId:q[g]})), i.hasOwnProperty(k) && (e.isNull(l) && (l = b.getNode(q)), m.push({node:l, before:i[k], newId:q[k]}))
    }
    a = n.length;
    f = m.length;
    if(a + f !== 0) {
      if(a + f > 10) {
        b.reattach()
      }else {
        for(o = 0;o < a;o++) {
          g = n[o], b.changeNodeId(g.node, g.before, g.newId)
        }
        for(o = 0;o < f;o++) {
          g = m[o], b.changeParentId(g.node, g.before, g.newId)
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
    var f = this._tree;
    if(b.length > 0) {
      var g = this.grid.dataMgr, k = a.length, i = g._idToIdx, q = g.idKey, l, n = 0, m = function(f) {
        e.isNotNull(this.parent) ? (l = this.parent.data, e.isNotNull(l) && !g.has(l) && (a.push(l), b.remove(l), i[l[q]] = -1)) : f.stop = !0
      };
      g._reidx();
      for(f.reattach();n < k;n++) {
        f.getNode(a[n]).traverse({up:!0, fn:m})
      }
      f.reattach(a);
      f.sortList(a);
      this.grid.event.trigger("onCollapserTreeChange", !1, !0)
    }else {
      f.reattach(a), this.grid.event.trigger("onCollapserTreeChange", !1, !0), this._filter(a, b)
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
  a._keydownColSel = function(a, b, f) {
    a.preventDefault();
    if(e.isNotNullAnd(b, f)) {
      var a = this._tree, f = a.getNode(f.getDatarow())._collapsed, g = this.grid.dataMgr.datalist, k, i;
      for(i in b) {
        b.hasOwnProperty(i) && i !== "length" && (k = a.getNode(g[i]), f ? this.expand(k) : this.collapse(k))
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
  a._onRenderCell = function(a, b, f, g, k) {
    a = this._tree.getNode(f);
    if(e.isNull(a)) {
      return null
    }
    f = this.grid.dataMgr.getId(f);
    b = this._options;
    k.push("<div class='" + b.classIndent + "' style='width:" + b.indentSize * a.getLevel() + "px;'></div><div ");
    a.isLeaf() ? k.push("class='" + b.classCollapser) : (k.push('onmousedown="JGM.m.Collapser.' + this.mid + ".toggleById('" + f + "');\" class='" + b.classCollapser), a._collapsed ? k.push(" " + b.classCollapsed) : k.push(" " + b.classExpanded));
    k.push("'></div>")
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
        for(var e = f.root.children, g = e.length, i = 0;i < g;i++) {
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
    var f = this._tree.getNode(a), j = this.checkMgr, k = [], i;
    b ? (f.traverseChildren({fn:function(a) {
      j.isChecked(this.data) ? a.propagate = !1 : (j._add(this.data), e.isNotNull(i = j.getCheckbox(this.data)) && k.push(i))
    }}), f.traverseParent({up:!0, fn:function(a) {
      e.isNull(this.data) || j.isChecked(this.data) ? a.stop = !0 : (j._add(this.data), e.isNotNull(i = j.getCheckbox(this.data)) && k.push(i))
    }}), g.CheckManager._check($(k)), j._updateMaster()) : (f.traverseChildren({fn:function(a) {
      j.isChecked(this.data) ? (j._remove(this.data), e.isNotNull(i = j.getCheckbox(this.data)) && k.push(i)) : a.propagate = !1
    }}), f.traverseParent({up:!0, fn:function(a) {
      if(e.isNull(this.data) || !j.isChecked(this.data)) {
        a.stop = !0
      }else {
        for(var b = 0, c = this.children, d = c.length;b < d;b++) {
          if(j.isChecked(c[b].data)) {
            a.stop = !0;
            return
          }
        }
        j._remove(this.data);
        e.isNotNull(i = j.getCheckbox(this.data)) && k.push(i)
      }
    }}), g.CheckManager._uncheck($(k)))
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
    this._options = g._extend({key:void 0, padColKeys:[], sumColKeys:[], prefix:"합계: ", Collapser:{indentSize:0}}, a.options);
    this._options.Collapser.key = this._options.key;
    this._parentMap = {};
    this.__init()
  }
  var g = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util");
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
    a = this.collapser = g.create("Collapser", {grid:a, options:d.Collapser});
    delete d.Collapser;
    this._processData(b.all);
    a.__init();
    b.refresh()
  };
  b.bindEvents = function() {
    var a;
    a = {onBeforeSetDatalist:this._removeAll, "onAfterSetDatalist onAddDatalist":this._processData, onAddDatarow:this._onAddDatarow, onUpdateDatarow:this._onUpdateDatarow, onUpdateDatalist:this._onUpdateDatalist, onRemoveDatarow:this._onRemoveDatarow, onRemoveDatalist:this._onRemoveDatalist, onDestroy:this._destroy};
    if(this._options.sumColKeys.length !== 0) {
      var b = this.mid, d = this.grid.dataMgr._consts._notReal, e = 0, f, g = this._options.sumColKeys, i = this._options.prefix, q = g.length;
      for(f = function(a, e, f, g, h) {
        f[d] === b && h.push(i)
      };e < q;e++) {
        a["onRenderCell_" + g[e] + "_prepend"] = f
      }
      a.onCollapserTreeChange = this._onCollapserTreeChange
    }
    this.grid.event.bind(a, this)
  };
  b._destroy = function() {
    g._destroy(this, {name:"ColumnGroup", path:"colGroup", property:"collapser", map:"_parentMap _options"})
  };
  b._processData = function(a) {
    for(var b = a.length, d = this._options.key, f = this._options.padColKeys, g = this.grid.dataMgr, k = g._consts._notReal, i = g.idKey, q = this.collapser, l = q._tree._options.nodeKey, n = q._tree._options.parentKey, m = [], o = 0;o < b;o++) {
      this._addData(a[o], d, i, k, l, n, f, m)
    }
    m.length !== 0 && (g.all.pushList(m), g.makeCompositeKeyList(m, !0), g.addListToIdMap(m), e.isNotNull(q) && q._onAddDatalist(m));
    return m
  };
  b._addData = function(a, b, d, e, f, g, i, q) {
    var l = a[b], n = this._parentMap;
    n.hasOwnProperty(l) || (b = this._makeParent(a, b, d, l, e, f, i), q.push(b), n[l] = b);
    a[f] = a[d];
    a[g] = this.mid + l
  };
  b._makeParent = function(a, b, d, e, f, g, i) {
    var q = {}, l = 0, n = i.length;
    q[f] = this.mid;
    q[g] = this.mid + e;
    q[b] = e;
    for(q[d] = (this.grid.colDefMgr.getByKey(b).name || b) + ": " + e;l < n;l++) {
      q[i[l]] = a[i[l]]
    }
    return q
  };
  b._isParent = function(a) {
    return a[this.grid.dataMgr._consts._notReal] === this.mid
  };
  b._removeAll = function() {
    this._parentMap = {}
  };
  b._onAddDatarow = function(a) {
    var b = [], d = this._options, e = this.grid.dataMgr, f = this.collapser, g = f._tree._options;
    this._addData(a, d.key, e.idKey, e._consts._notReal, g.nodeKey, g.parentKey, d.padColKeys, b);
    b.length !== 0 && (a = b[0], e.all.push(a), e.makeCompositeKey(a, !0), e.addToIdMap(a), f._onAddDatarow(a))
  };
  b._onUpdateDatarow = function(a, b, d) {
    if(b.hasOwnProperty(this._options.key)) {
      var e = this._options.key, b = b[e], d = d[e], f = this.mid, e = this.collapser, g = e._tree, i = g._options.parentKey, q = {}, l = {}, n = this._parentMap;
      n.hasOwnProperty(b) || this._onAddDatarow(a);
      q[i] = f + b;
      l[i] = f + d;
      e._onUpdateDatarow(a, q, l);
      a = g.getNode(n[d]);
      a.children.length === 0 && (this.grid.dataMgr.all.remove(a.data), delete n[d], e._onRemoveDatarow(a.data))
    }
  };
  b._onUpdateDatalist = function(a, b, d) {
    var e = this._options.key, f = this.mid, g = this.collapser, i = g._tree, q = i._options.parentKey, l, n = {};
    l = {};
    for(var m = [], o = [], p = [], s = 0, r = a.length;s < r;s++) {
      l = b[s], l.hasOwnProperty(e) && (n = {}, n[q] = f + l[e], m.push(n), l = {}, l[q] = f + d[s][e], o.push(l), p.push(a[s]))
    }
    if(p.length !== 0) {
      a = this._parentMap;
      b = [];
      this._processData(p);
      g._onUpdateDatalist(p, m, o);
      s = 0;
      for(r = o.length;s < r;s++) {
        m = o[s][q], a.hasOwnProperty(m) && (p = i.getNode(a[m]), p.children.length === 0 && (delete a[m], b.push(p.data)))
      }
      b.length !== 0 && (g._onRemoveDatalist(b), this.grid.dataMgr.all.removeList(b))
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
    for(var a = {}, b = this._options.sumColKeys, d = b.length, e = 0, f = this.grid.dataMgr._consts._notReal, g = this.mid, i, q, l;e < d;e++) {
      a[b[e]] = 0
    }
    this.collapser._tree.root.traverseChildren({post:!0, fn:function() {
      i = this.data;
      e = 0;
      if(i[f] === g) {
        for(;e < d;e++) {
          q = b[e], i[q] = a[q], a[q] = 0
        }
      }else {
        if(!i.hasOwnProperty(f)) {
          for(;e < d;e++) {
            if(typeof(l = i[b[e]]) === "string") {
              l = l.toFloat()
            }
            a[b[e]] += isNaN(l) ? 0 : l
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
    this._options = g._extend({background:"#dfdfdf", borderThickness:0, border:"solid #D6D6D6", inputBorder:"solid #A7A7A7", inputBorderThickness:1, inputHeight:18, inputMargin:8, nameMargin:2, font:"12px Arial,Helvetica,sans-serif", height:28, padding:3, classCreatorIcon:"creator-icon", creatorIconUrl:this.grid._options.imageUrl + "data-creator-icon.png", creatorIconWidth:13, creatorIconHeight:13, classCreator:"data-creator", classColName:"data-creator-name", inputBorderRadius:3}, a.options);
    this._inputMap = {};
    this.__init()
  }
  var g = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util");
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
    d.push(a + b.classCreator + "{" + g._CONST._cssUnselectable + "float:left;width:100%;padding-left:8px;background:" + b.background + ";border-top:" + (b.borderThickness + "px " + b.border) + ";font:" + b.font + "}");
    d.push(a + b.classCreator + " button{float:left;margin:" + b.padding + "px " + b.padding + "px 0 0;height:" + (b.height - 2 * b.padding) + "px}");
    d.push(a + b.classCreator + " input{float:left;padding:0;margin-top:" + (b.height - b.inputHeight - 2 * b.inputBorderThickness) / 2 + "px;height:" + b.inputHeight + "px;border:" + b.inputBorderThickness + "px " + b.inputBorder + ";border-radius:" + b.inputBorderRadius + "px;-moz-border-radius:" + b.inputBorderRadius + "px}");
    d.push(a + b.classCol + "{float:left;overflow:hidden;white-space:nowrap;line-height:" + b.height + "px;margin-right:" + b.inputMargin + "px}");
    d.push(a + b.classColName + "{float:left;margin-right:" + b.nameMargin + "px}");
    d.push(a + b.classCreatorIcon + "{background:url(" + b.creatorIconUrl + ") no-repeat center;width:" + b.creatorIconWidth + "px;height:" + b.creatorIconHeight + "px}");
    return d.join("")
  };
  b._onRenderModules = function() {
    for(var a = [], b = this.grid.colDefMgr.getAll(), d = b.length, f, g = this._options, k = g.classCol, i = g.classColName, q = this, l = this._creator, n = this._inputMap, m = 0, o = function(a) {
      a.which === e.keyMapKeydown.enter && q._addData()
    };m < d;m++) {
      f = b[m], f.inputOnCreate === !0 && a.push("<div key='" + f.key + "' class='" + k + "'><div class='" + i + "'>" + f.name + "</div><input type='text' value='" + e.ifNull(f.defaultValue, "") + "' style='width:" + f.width + "px'/></div>")
    }
    l[0].innerHTML = a.join("") + "<button type='button' onclick='JGM.m.DataCreator." + this.mid + "._addData()'>등록</button><button type='button' onclick='JGM.m.DataCreator." + this.mid + "._reset()'>초기화</button>";
    for(m = 0;m < d;m++) {
      f = b[m], f.inputOnCreate === !0 && (n[f.key] = l.find("div[key='" + f.key + "'] input").keyup(o))
    }
    e.isNotNull(this.grid.menubar) && (this.grid.menubar.addIcon(g.classCreatorIcon, "데이터 로우를 추가합니다.", g.creatorIconWidth, g.creatorIconHeight, function() {
      l.toggle("fast")
    }), l.hide())
  };
  b._addData = function() {
    var a, b = this._inputMap, d = this.grid.colDefMgr, e = {}, f = d.getAll(), g = f.length, i = 0;
    for(a in b) {
      b.hasOwnProperty(a) && d.getByKey(a)
    }
    for(;i < g;i++) {
      d = f[i], a = d.key, b.hasOwnProperty(a) ? e[a] = b[a][0].value : d.defaultValue !== void 0 && (e[a] = d.defaultValue)
    }
    this.grid.event.trigger("onAfterDataCreate", [e], !0);
    this.grid.dataMgr.add(e, {isNew:!0})
  };
  b._reset = function() {
    var a, b = this.grid.colDefMgr, e, f = this._inputMap;
    for(a in f) {
      if(f.hasOwnProperty(a) && (e = b.getByKey(a), e.defaultValue !== void 0)) {
        f[a][0].value = e.defaultValue
      }
    }
  };
  b._destroy = function() {
    var a, b = this._inputMap;
    for(a in b) {
      b.hasOwnProperty(a) && g._delete$(b, a)
    }
    g._destroy(this, {name:"DataCreator", path:"creator", $:"_creator", map:"_inputMap _options"})
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
    this._options = g._extend({background:"#f0f0f0", borderThickness:1, border:"solid #d6d6d6", inputBorder:"1px solid #A7A7A7", inputPadding:0, searchbarAlign:"center", searchbarMargin:3, searchbarWidth:"99%", searchbarHeight:20, tagsHeight:26, tagsPadding:2, tagsBorderRadius:3, advButtonColor:"#123272", advButtonFont:"bold 12px Arial,Helvetica,sans-serif", advButtonPadding:5, advButtonBg:"", advButtonBgHover:"url(" + this.grid._options.imageUrl + "more-options-bg-hover.png) repeat-x scroll center", 
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
  var g = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.SearchManager", f);
  var b = f.prototype;
  b._onCreateCss = function() {
    var a = "#" + this.grid.mid + " .", b = this._options, c = b.borderThickness + "px " + b.border, e = "border-radius:" + b.tagsBorderRadius + "px;-moz-border-radius:" + b.tagsBorderRadius + "px", d = b.advButtonBorderThickness + "px " + b.advButtonBorder, f = b.advButtonBorderThickness + "px " + b.advButtonBorderHover, i = b.advButtonBorderThickness + "px " + b.advButtonBorderActive, h = b.advButtonBorderThickness + "px " + b.advButtonBorderOpened, j = b.tagsHeight - 2 * b.tagsPadding, k = j - 
    2 * b.advButtonBorderThickness, l = j - 2 * b.tagBorderThickness, m = a + b.classMask, n = a + b.classSearchbar, o = a + b.classAdvButton, p = a + b.classRemoveTag, q = [];
    q.push(m + "{" + g._CONST._cssUnselectable + "overflow:hidden;width:100%;background:" + b.background + "}");
    q.push(m + " button{margin:0;padding:0 3px}");
    q.push(m + " input{border:" + b.inputBorder + ";padding:" + b.inputPadding + "}");
    q.push(n + "{text-align:" + b.searchbarAlign + ";border-bottom:" + c + "}");
    q.push(n + " input{width:" + b.searchbarWidth + ";margin:" + b.searchbarMargin + "px 0;height:" + b.searchbarHeight + "px;" + e + "}");
    q.push(a + b.classTagbar + "{cursor:default;height:" + (b.tagsHeight - b.tagsPadding) + "px;padding:" + b.tagsPadding + "px 0 0 " + b.tagsPadding + "px;border-bottom:" + c + "}");
    q.push(o + "{float:left;margin-right:" + b.tagsPadding + "px;background:" + b.advButtonBg + ";border:" + d + ";padding:0 " + b.advButtonPadding + "px;" + e + "}");
    q.push(o + ":hover{background:" + b.advButtonBgHover + ";border:" + f + "}");
    q.push(o + ".opened{background:" + b.advButtonBgOpened + ";border:" + h + "}");
    q.push(o + ":active{background:" + b.advButtonBgActive + ";border:" + i + "}");
    q.push(a + b.classAdvButtonName + "{float:left;color:" + b.advButtonColor + ";font:" + b.advButtonFont + ";line-height:" + k + "px}");
    q.push(a + b.classAdvButtonIcon + "{float:left;height:" + k + "px;margin-left:" + b.advButtonIconMargin + "px;background:url(" + b.advButtonIconUrl + ") no-repeat center;width:" + b.advButtonIconWidth + "px}");
    q.push(o + ".opened ." + b.classAdvButtonIcon + "{background:url(" + b.advButtonIconCloseUrl + ") no-repeat center}");
    q.push(a + b.classTag + "{float:left;border:" + b.tagBorderThickness + "px " + b.tagBorder + ";margin:0 " + b.tagsPadding + "px " + b.tagsPadding + "px 0;padding:0 " + b.tagPadding + "px;background:" + b.tagBackground + ";" + e + "}");
    q.push(a + b.classTagName + "{float:left;color:" + b.tagColor + ";font:" + b.tagFont + ";line-height:" + l + "px}");
    q.push(p + "{float:left;margin-left:" + b.tagPadding + "px;background:url(" + b.tagRemoveIconUrl + ") no-repeat center;width:" + b.tagRemoveIconWidth + "px;height:" + l + "px}");
    q.push(p + ":hover{background:url(" + b.tagRemoveIconHoverUrl + ") no-repeat center}");
    q.push(p + ":active{background:url(" + b.tagRemoveIconActiveUrl + ") no-repeat center}");
    q.push(a + b.classClearTags + "{height:" + j + "px}");
    q.push(a + b.classAdvanced + "{cursor:default;font:" + b.advFont + ";border-bottom:" + c + "}");
    q.push(a + b.classOptionCol + "{display:inline-block;vertical-align:top}");
    q.push(a + b.classOptionCol + " input{width:" + b.advInputWidth + "px;margin-right:2px;" + e + "}");
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
      for(var d = this.grid.colDefMgr.get(), f = d.length, g = b.keyMap, i = this._nameMap, h = this._keyToName, j, k, l, m = 0;m < f;m++) {
        if(j = d[m], e.isNotNull(j.filter)) {
          l = j.key, k = e.isNull(g) || !g.hasOwnProperty(l) ? j.name || l : g[l], i[k] = l, h[l] = k, a.push("<div class='" + b.classOptionCol + "'>"), this._registerFilter(l, k, j.name, j.filter, a), a.push("</div>")
        }
      }
      this._adv[0].innerHTML = a.join("")
    }
    e.isNotNull(this.grid.menubar) && (this.grid.menubar.addIcon(b.classSearchIcon, "데이터 검색을 합니다.", b.searchIconWidth, b.searchIconHeight, function() {
      c.toggle("fast")
    }), c.hide())
  };
  b._onAfterRenderModules = function() {
    var a = this._filterMap, b, c, e, d, f = this._adv;
    for(c in a) {
      if(a.hasOwnProperty(c)) {
        for(e in b = a[c], b) {
          if(b.hasOwnProperty(e) && e !== "andor" && e !== "parser" && e !== "validator") {
            (d = b[e]).input = f.find("#" + c + d.option.name)
          }
        }
      }
    }
  };
  b._destroy = function() {
    var a, b, c, e = this._globalMap, d = this._filterMap, f = this._tagMap;
    for(a in e) {
      e.hasOwnProperty(a) && (g._delete$(e[a], "tag"), g._deleteArray(e[a], "list"))
    }
    for(a in d) {
      if(d.hasOwnProperty(a)) {
        e = d[a];
        for(b in e) {
          e.hasOwnProperty(b) && (b !== "andor" && b !== "parser" && b !== "validator" && g._delete$(e[b], "input"), g._deleteMap(e, b))
        }
        g._deleteMap(d, a)
      }
    }
    for(a in f) {
      if(f.hasOwnProperty(a)) {
        d = f[a];
        for(b in d) {
          if(d.hasOwnProperty(b)) {
            e = d[b];
            for(c in e) {
              e.hasOwnProperty(c) && (g._delete$(e[c], "tag"), g._deleteMap(e, c))
            }
            g._deleteMap(d, b)
          }
        }
        g._deleteMap(f, a)
      }
    }
    g._destroy(this, {name:"SearchManager", path:"search", $:"_masterInput _advButton _mask _search _tag _adv", property:"_ctnr _hasFilter", array:"_global", map:"_globalMap _filterMap _tagMap _codeMap _nameMap _options _keyToName"})
  };
  b._onFilter = function(a, b) {
    if(!(this._global.length === 0 && e.isEmptyObj(this._codeMap))) {
      var c, d = this._tagMap, f, g, i = a.length, h, j = this._filterMap, k = this.constructor.CONST.and, l, m = this._global.length > 0, n, o;
      if(m) {
        var p = this._global, q;
        h = this.grid.colDefMgr.get().filter(function(a) {
          return!a.noSearch
        });
        var r = h.length, s = [];
        for(n = 0;n < r;n++) {
          s.push(h[n].key)
        }
      }
      n = i - 1;
      a:for(;n >= 0;n--) {
        i = a[n];
        if(m) {
          h = p.slice();
          c = 0;
          for(;h.length !== 0 && c < r;c++) {
            if(!e.isNull(q = i[s[c]])) {
              e.isString(q) || (q = q.toString());
              for(o = h.length - 1;o >= 0;o--) {
                q.indexOf(h[o]) !== -1 && h.removeAt(o)
              }
            }
          }
          if(h.length !== 0) {
            a.removeAt(n);
            b.push(i);
            continue a
          }
        }
        for(f in d) {
          if(d.hasOwnProperty(f)) {
            if(o = d[f], c = j[f].andor, h = i[f], c === k) {
              for(g in o) {
                if(o.hasOwnProperty(g)) {
                  for(l in c = o[g], c) {
                    if(c.hasOwnProperty(l) && !c[l].fn(h)) {
                      a.removeAt(n);
                      b.push(i);
                      continue a
                    }
                  }
                }
              }
            }else {
              for(g in o) {
                if(o.hasOwnProperty(g)) {
                  for(l in c = o[g], c) {
                    if(c.hasOwnProperty(l) && c[l].fn(h)) {
                      continue a
                    }
                  }
                }
              }
              a.removeAt(n);
              b.push(i);
              continue a
            }
          }
        }
      }
    }
  };
  b._registerFilter = function(a, b, c, e, d) {
    if(!this._filterMap.hasOwnProperty(a)) {
      if(e === "number") {
        e = this.constructor._numberFilter
      }else {
        if(e === "string") {
          e = this.constructor._stringFilter
        }
      }
      var f, g = e.length, h = 0, i = this.mid, j = this._options.classOption, k, l, m, n;
      k = this._filterMap[a] = {andor:this.constructor.CONST.and};
      l = this._tagMap[a] = {};
      for(d.push("<table>");h < g;h++) {
        f = e[h], n = f.name, n === "parser" ? k.parser = f.fn : n === "validator" ? k.validator = f.fn : (m = f.tag, k[m] = {option:f}, l[m] = {}, d.push("<tr title='" + f.comment(c, "입력값") + "'><td><div class='" + j + "'>" + c + " " + m + "</td><td><input id='" + a + n + "' key='" + a + "' tag='" + m + "' type='text'><button type='button' onclick=\"JGM.m.SearchManager." + i + "._registerOption('" + a + "','" + b + "','" + m + "',this.previousSibling.value)\">등록</button></div></td></tr>"))
      }
      d.push("</table>")
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
      var a = this._global.join(" "), b = this._tagMap, c = this._keyToName, e, d, f, g, h;
      for(e in b) {
        if(b.hasOwnProperty(e)) {
          for(d in g = b[e], g) {
            if(g.hasOwnProperty(d)) {
              for(f in h = g[d], h) {
                h.hasOwnProperty(f) && (a += " @" + c[e] + " " + d + " " + f)
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
    for(var b = 0, c = a.length, e = this._global;b < c;b++) {
      e.indexOf(a[b]) !== -1 ? a.removeAt(b--) : e.push(a[b])
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
    var l, m, n, o, p = this._filterMap[a], q;
    for(n in k) {
      if(k.hasOwnProperty(n)) {
        for(o in l = k[n], l) {
          l.hasOwnProperty(o) && (q = l[o], m = e.isNotNull(p.parser) ? p.parser(o) : o, f._checkDisable(h.type, q.option.type, i, d, m) && (delete j[a + "@T" + q.option.tag + "@B" + m], q.tag.remove(), delete q.tag, delete q.option, delete q.fn, delete l[o]))
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
  var a = f.CONST = {lt:0, lte:1, eq:2, neq:3, gt:4, gte:5, and:6, or:7, T:8, F:9}, b = a.lt, c = a.gt, d = a.eq, h = a.neq, j = a.and, k = a.or, i = a.T, a = a.F, q = f._comparator = {}, l = q[b] = function(a, b) {
    return a <= b
  }, n = q[c] = function(a, b) {
    return a >= b
  }, m = q[d] = function(a, b) {
    return a === b
  }, i = q[i] = function() {
    return!0
  }, o = f._disableMap = {}, p = o[b] = {}, s = o[c] = {}, r = o[d] = {}, o = o[h] = {};
  q[a] = function() {
    return!1
  };
  p[b] = {};
  p[b][j] = i;
  p[b][k] = i;
  p[c] = {};
  p[c][j] = l;
  p[c][k] = n;
  p[d] = {};
  p[d][j] = i;
  p[d][k] = n;
  p[h] = {};
  p[h][j] = l;
  p[h][k] = i;
  s[b] = {};
  s[b][j] = n;
  s[b][k] = l;
  s[c] = {};
  s[c][j] = i;
  s[c][k] = i;
  s[d] = {};
  s[d][j] = i;
  s[d][k] = l;
  s[h] = {};
  s[h][j] = n;
  s[h][k] = i;
  r[b] = {};
  r[b][j] = i;
  r[b][k] = l;
  r[c] = {};
  r[c][j] = i;
  r[c][k] = n;
  r[d] = {};
  r[d][j] = i;
  r[d][k] = m;
  r[h] = {};
  r[h][j] = i;
  r[h][k] = i;
  o[b] = {};
  o[b][j] = n;
  o[b][k] = i;
  o[c] = {};
  o[c][j] = l;
  o[c][k] = i;
  o[d] = {};
  o[d][j] = i;
  o[d][k] = i;
  o[h] = {};
  o[h][j] = m;
  o[h][k] = i;
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
  }}, {name:"neq", tag:"!=", type:h, comment:function(a, b) {
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
  }}, {name:"notEquals", tag:"!=", type:h, comment:function(a, b) {
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
