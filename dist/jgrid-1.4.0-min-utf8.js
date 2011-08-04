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

(function(){var COMPILED = !0, goog = goog || {};
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
  for(var c;f.length && (c = f.shift());) {
    !f.length && goog.isDef(g) ? e[c] = g : e = e[c] ? e[c] : e[c] = {}
  }
};
goog.getObjectByName = function(f, g) {
  for(var e = f.split("."), c = g || goog.global, b;b = e.shift();) {
    if(goog.isDefAndNotNull(c[b])) {
      c = c[b]
    }else {
      return null
    }
  }
  return c
};
goog.globalize = function(f, g) {
  var e = g || goog.global, c;
  for(c in f) {
    e[c] = f[c]
  }
};
goog.addDependency = function(f, g, e) {
  if(!COMPILED) {
    for(var c, f = f.replace(/\\/g, "/"), b = goog.dependencies_, a = 0;c = g[a];a++) {
      b.nameToPath[c] = f, f in b.pathToNames || (b.pathToNames[f] = {}), b.pathToNames[f][c] = !0
    }
    for(c = 0;g = e[c];c++) {
      f in b.requires || (b.requires[f] = {}), b.requires[f][g] = !0
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
          var e = f[g].src, c = e.lastIndexOf("?"), c = c == -1 ? e.length : c;
          if(e.substr(c - 7, 7) == "base.js") {
            goog.basePath = e.substr(0, c - 7);
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
      if(!(a in c.written)) {
        if(!(a in c.visited) && (c.visited[a] = !0, a in c.requires)) {
          for(var d in c.requires[a]) {
            if(!goog.isProvided_(d)) {
              if(d in c.nameToPath) {
                f(c.nameToPath[d])
              }else {
                throw Error("Undefined nameToPath for " + d);
              }
            }
          }
        }
        a in e || (e[a] = !0, g.push(a))
      }
    }
    var g = [], e = {}, c = goog.dependencies_, b;
    for(b in goog.included_) {
      c.written[b] || f(b)
    }
    for(b = 0;b < g.length;b++) {
      if(g[b]) {
        goog.importScript_(goog.basePath + g[b])
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
    var c = Array.prototype.slice.call(arguments, 2);
    return function() {
      var b = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(b, c);
      return f.apply(g, b)
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
    var c = Array.prototype.slice.call(arguments);
    c.unshift.apply(c, e);
    return f.apply(this, c)
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
  var e = function(b) {
    return goog.cssNameMapping_[b] || b
  }, c;
  c = goog.cssNameMapping_ ? goog.cssNameMappingStyle_ == "BY_WHOLE" ? e : function(b) {
    for(var b = b.split("-"), a = [], d = 0;d < b.length;d++) {
      a.push(e(b[d]))
    }
    return a.join("-")
  } : function(b) {
    return b
  };
  return g ? f + "-" + c(g) : c(f)
};
goog.setCssNameMapping = function(f, g) {
  goog.cssNameMapping_ = f;
  goog.cssNameMappingStyle_ = g
};
goog.getMsg = function(f, g) {
  var e = g || {}, c;
  for(c in e) {
    var b = ("" + e[c]).replace(/\$/g, "$$$$"), f = f.replace(RegExp("\\{\\$" + c + "\\}", "gi"), b)
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
  var c = arguments.callee.caller;
  if(c.superClass_) {
    return c.superClass_.constructor.apply(f, Array.prototype.slice.call(arguments, 1))
  }
  for(var b = Array.prototype.slice.call(arguments, 2), a = !1, d = f.constructor;d;d = d.superClass_ && d.superClass_.constructor) {
    if(d.prototype[g] === c) {
      a = !0
    }else {
      if(a) {
        return d.prototype[g].apply(f, b)
      }
    }
  }
  if(f[g] === c) {
    return f.constructor.prototype[g].apply(f, b)
  }else {
    throw Error("goog.base called from a method of one name to a method of a different name");
  }
};
goog.scope = function(f) {
  f.call(goog.global)
};
var array_extension = {};
(function() {
  var f = Array.prototype;
  if(!f.indexOf) {
    f.indexOf = function(f) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var e = Object(this), c = e.length >>> 0;
      if(c === 0) {
        return-1
      }
      var b = 0;
      arguments.length > 0 && (b = Number(arguments[1]), b !== b ? b = 0 : b !== 0 && b !== 1 / 0 && b !== -(1 / 0) && (b = (b > 0 || -1) * Math.floor(Math.abs(b))));
      if(b >= c) {
        return-1
      }
      for(b = b >= 0 ? b : Math.max(c - Math.abs(b), 0);b < c;b++) {
        if(b in e && e[b] === f) {
          return b
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
      var e = Object(this), c = e.length >>> 0;
      if(c === 0) {
        return-1
      }
      var b = c;
      arguments.length > 1 && (b = Number(arguments[1]), b !== b ? b = 0 : b !== 0 && b !== 1 / 0 && b !== -(1 / 0) && (b = (b > 0 || -1) * Math.floor(Math.abs(b))));
      for(c = b >= 0 ? Math.min(b, c - 1) : c - Math.abs(b);c >= 0;c--) {
        if(c in e && e[c] === f) {
          return c
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
      var c = Object(this), b = c.length >>> 0;
      if(typeof f !== "function") {
        throw new TypeError;
      }
      for(var a = [], d = 0;d < b;d++) {
        if(d in c) {
          var h = c[d];
          f.call(e, h, d, c) && a.push(h)
        }
      }
      return a
    }
  }
  if(!f.forEach) {
    f.forEach = function(f, e) {
      var c, b = Object(this), a = b.length >>> 0, d = 0;
      if(!f || !f.call) {
        throw new TypeError;
      }
      for(e && (c = e);d < a;) {
        var h = String(d);
        b.hasOwnProperty(h) && (h = b[h], f.call(c, h, d, b));
        d++
      }
    }
  }
  if(!f.every) {
    f.every = function(f, e) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var c = Object(this), b = c.length >>> 0;
      if(typeof f !== "function") {
        throw new TypeError;
      }
      for(var a = 0;a < b;a++) {
        if(a in c && !f.call(e, c[a], a, c)) {
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
      var c = Object(this), b = c.length >>> 0;
      if(typeof f !== "function") {
        throw new TypeError;
      }
      for(var a = Array(b), d = 0;d < b;d++) {
        d in c && (a[d] = f.call(e, c[d], d, c))
      }
      return a
    }
  }
  if(!f.some) {
    f.some = function(f, e) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var c = Object(this), b = c.length >>> 0;
      if(typeof f !== "function") {
        throw new TypeError;
      }
      for(var a = 0;a < b;a++) {
        if(a in c && f.call(e, c[a], a, c)) {
          return!0
        }
      }
      return!1
    }
  }
  if(!f.reduce) {
    f.reduce = function(f) {
      var e, c = this.length, b;
      if(typeof f !== "function") {
        throw new TypeError("First argument is not callable");
      }
      if((c == 0 || c === null) && arguments.length <= 1) {
        throw new TypeError("Array length is 0 and no second argument");
      }
      arguments.length <= 1 ? (b = this[0], e = 1) : b = arguments[1];
      for(e = e || 0;e < c;++e) {
        e in this && (b = f.call(void 0, b, this[e], e, this))
      }
      return b
    }
  }
  if(!f.reduceRight) {
    f.reduceRight = function(f) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var e = Object(this), c = e.length >>> 0;
      if(typeof f !== "function") {
        throw new TypeError;
      }
      if(c === 0 && arguments.length === 1) {
        throw new TypeError;
      }
      c -= 1;
      var b;
      if(arguments.length >= 2) {
        b = arguments[1]
      }else {
        do {
          if(c in this) {
            b = this[c--];
            break
          }
          if(--c < 0) {
            throw new TypeError;
          }
        }while(1)
      }
      for(;c >= 0;) {
        c in e && (b = f.call(void 0, b, e[c], c, e)), c--
      }
      return b
    }
  }
})();
var engine_extension = {};
(function() {
  var f = Number.prototype, g = String.prototype, e = Array.prototype;
  if(!f.toFixedFloat) {
    f.toFixedFloat = function(c) {
      return parseFloat(this.toFixed(c))
    }
  }
  if(!g.toInt) {
    g.toInt = function() {
      var c;
      if((c = this.replace(/[^\d\.\-]/g, "")).length === 0) {
        return NaN
      }
      for(var b, a = 0, d = 0, h = c.length, l = 0, k = !1;l < h;l++) {
        if(b = c.charAt(l), b === ".") {
          if(++a === 2) {
            k = !0;
            break
          }
        }else {
          if(b === "-" && ++d === 2) {
            k = !0;
            break
          }
        }
      }
      return k === !0 && (c = c.replace(/[\.\-]/g, "")).length === 0 ? NaN : /^-*0*\./.test(c) || (c = c.replace(/^-0+/, "-")).length === 0 || (c = c.replace(/^0+/, "")).length === 0 ? 0 : parseInt(c, 10)
    }
  }
  if(!g.toFloat) {
    g.toFloat = function() {
      var c;
      if((c = this.replace(/[^-\d\.]/g, "")).length === 0) {
        return NaN
      }
      for(var b = 0, a = c.length, d, h = 0, l = 0;b < a;b++) {
        if(d = c.charAt(b), d === ".") {
          if(h !== 0) {
            return NaN
          }else {
            h++
          }
        }else {
          if(d === "-") {
            if(l !== 0) {
              return NaN
            }else {
              l++
            }
          }
        }
      }
      return parseFloat(c)
    }
  }
  if(!e.remove) {
    e.remove = function(c) {
      if(this.length === 0) {
        return-1
      }
      c = this.indexOf(c);
      c !== -1 && this.splice(c, 1);
      return c
    }
  }
  if(!e.removeAll) {
    e.removeAll = function(c) {
      if(this.length === 0) {
        return this
      }
      for(var b = this.length;(b = this.lastIndexOf(c, b - 1)) !== -1;) {
        if(this.splice(b, 1), b === 0) {
          break
        }
      }
      return this
    }
  }
  if(!e.removeList) {
    e.removeList = function(c) {
      if(this.length === 0 || c.length === 0) {
        return this
      }
      for(var b = c.length, a = 0, d;a < b;a++) {
        (d = this.indexOf(c[a])) !== -1 && this.splice(d, 1)
      }
      return this
    }
  }
  if(!e.removeAt) {
    e.removeAt = function(c) {
      if(this.length !== 0 && (c < 0 && (c = this.length + c), c < 0 && (c = 0), this.hasOwnProperty(c) && c < this.length)) {
        return this.splice(c, 1)[0]
      }
    }
  }
  if(!e.addAt) {
    e.addAt = function(c, b) {
      this.splice(c, 0, b);
      return b
    }
  }
  if(!e.pushList) {
    e.pushList = function(c) {
      return c.length === 0 ? this.length : e.push.apply(this, c)
    }
  }
  if(!e.pushListAt) {
    e.pushListAt = function(c, b) {
      if(b.length === 0) {
        return this.length
      }
      var a = [c, 0];
      e.push.apply(a, b);
      e.splice.apply(this, a);
      return this.length
    }
  }
})();
var jx = {util:{}}, Util = {}, echo = {};
(function() {
  var f = window.console, g = [], e;
  e = f && f.log ? function(c) {
    for(var b = 0, a = arguments.length;b < a;b++) {
      f.log(arguments[b])
    }
  } : function(c) {
    g.push.apply(g, arguments)
  };
  goog.exportSymbol("jx.util", Util);
  goog.exportSymbol("Util", Util);
  goog.exportSymbol("echo", e);
  Util.isNull = function(c) {
    return c == null
  };
  Util.isNotNull = function(c) {
    return c != null
  };
  Util.isNullAnd = function() {
    for(var c = 0, b = arguments.length;c < b;c++) {
      if(arguments[c] != null) {
        return!1
      }
    }
    return!0
  };
  Util.isNullOr = function() {
    for(var c = 0, b = arguments.length;c < b;c++) {
      if(arguments[c] == null) {
        return!0
      }
    }
    return!1
  };
  Util.isNotNullAnd = function() {
    for(var c = 0, b = arguments.length;c < b;c++) {
      if(arguments[c] == null) {
        return!1
      }
    }
    return!0
  };
  Util.isNotNullOr = function() {
    for(var c = 0, b = arguments.length;c < b;c++) {
      if(arguments[c] != null) {
        return!0
      }
    }
    return!1
  };
  Util.ifNull = function(c, b, a) {
    return c == null ? b : a === void 0 ? c : a
  };
  Util.ifTrue = function(c, b, a) {
    return c === !0 ? b : a === void 0 ? c : a
  };
  Util.isFunction = function(c) {
    return typeof c == "function"
  };
  Util.isString = function(c) {
    return typeof c == "string"
  };
  Util.isNumber = function(c) {
    return typeof c == "number"
  };
  Util.isObject = function(c) {
    return typeof c == "object"
  };
  Util.isArray = function(c) {
    var b = Array.isArray;
    return c && typeof c == "object" && (b && b(c) || typeof c.length == "number" && c.hasOwnProperty("length") && !c.propertyIsEnumerable("length"))
  };
  Util.split = function(c, b, a, d) {
    if(typeof c !== "string") {
      return[]
    }
    b = b === void 0 ? /\s+/ : b;
    a = a === void 0 ? function(d) {
      return!!d
    } : a;
    d = d === void 0 ? function(d) {
      return $.trim(d)
    } : d;
    c = c.split(b);
    d && (c = c.map(d));
    a && (c = c.filter(a));
    return c
  };
  Util.isEmpty = function(c) {
    if(!c) {
      return!0
    }
    if(typeof c != "object") {
      return!1
    }
    for(var b in c) {
      if(c.hasOwnProperty(b)) {
        return!1
      }
    }
    return!0
  };
  Util.isEmptyObj = function(c) {
    if(c == null) {
      return!0
    }
    if(typeof c != "object") {
      return!1
    }
    for(var b in c) {
      if(c.hasOwnProperty(b)) {
        return!1
      }
    }
    return!0
  };
  Util.isNotEmptyObj = function(c) {
    if(c == null || typeof c != "object") {
      return!1
    }
    for(var b in c) {
      if(c.hasOwnProperty(b)) {
        return!0
      }
    }
    return!1
  };
  Util.isEmptyString = function(c) {
    return c == null || c === ""
  };
  Util.isEmptyArray = function(c) {
    if(c == null) {
      return!0
    }
    if(!Util.isArray(c)) {
      return!1
    }
    for(var b = 0, a = c.length;b < a;b++) {
      if(c.hasOwnProperty(b)) {
        return!1
      }
    }
    return!0
  };
  Util.emptyObject = function(c) {
    if(!c || typeof c != "object") {
      return c
    }
    if(Util.isArray(c)) {
      return c.length = 0, c
    }
    for(var b in c) {
      c.hasOwnProperty(b) && delete c[b]
    }
    return c
  };
  Util.deleteUndefined = function(c) {
    if(!c || typeof c != "object") {
      return c
    }
    var b;
    if(Util.isArray(c)) {
      for(b = c.length - 1;b > -1;b--) {
        c.hasOwnProperty(b) && c[b] === void 0 && c.splice(b, 1)
      }
      return c
    }
    for(b in c) {
      c.hasOwnProperty(b) && c[b] === void 0 && delete c[b]
    }
    return c
  };
  Util.deepClone = function(c) {
    if(!c) {
      return c
    }
    switch(typeof c) {
      case "boolean":
      ;
      case "number":
      ;
      case "string":
      ;
      case "function":
        return c
    }
    if(Util.isArray(c)) {
      for(var b = [], a = 0, d = c.length;a < d;a++) {
        a in c && (b[a] = Util.deepClone(c[a]))
      }
      return b
    }
    b = {};
    for(a in c) {
      c.hasOwnProperty(a) && (b[a] = Util.deepClone(c[a]))
    }
    return b
  };
  Util.clone = function(c, b, a) {
    if(!c) {
      return c
    }
    switch(typeof c) {
      case "boolean":
      ;
      case "number":
      ;
      case "string":
      ;
      case "function":
        return c
    }
    if(Util.isArray(c)) {
      if(a === 1) {
        return Array.prototype.slice.call(c)
      }
      for(var d = [], h = c.length, l = 0, a = a !== void 0 ? a - 1 : void 0;l < h;l++) {
        l in c && (d[l] = Util.clone(c[l], b, a))
      }
      return d
    }
    d = {};
    h = Util.isEmptyObj(b);
    if(a === 1) {
      if(h) {
        for(l in c) {
          c.hasOwnProperty(l) && (d[l] = c[l])
        }
      }else {
        for(l in b) {
          b.hasOwnProperty(l) && c.hasOwnProperty(l) && (d[l] = c[l])
        }
      }
    }else {
      if(a = a !== void 0 ? a - 1 : void 0, h) {
        for(l in c) {
          c.hasOwnProperty(l) && (d[l] = Util.clone(c[l], void 0, a))
        }
      }else {
        for(l in b) {
          b.hasOwnProperty(l) && c.hasOwnProperty(l) && (d[l] = Util.clone(c[l], void 0, a))
        }
      }
    }
    return d
  };
  Util.toArray = function(c) {
    var b = [], a;
    for(a in c) {
      c.hasOwnProperty(a) && b.push(c[a])
    }
    return b
  };
  Util.toArrayWithKey = function(c) {
    var b = [], a;
    for(a in c) {
      c.hasOwnProperty(a) && b.push({key:a, val:c[a]})
    }
    return b
  };
  Util.random = function(c) {
    return Math.floor(c * Math.random())
  };
  Util.bound = function(c, b, a) {
    isNaN(a) || (c = Math.min(c, a));
    isNaN(b) || (c = Math.max(c, b));
    return c
  };
  Util.callFn = function() {
    return arguments.length <= 3 ? arguments[1].call(arguments[0], arguments[2]) : arguments[1].apply(arguments[0], Array.prototype.slice.call(arguments, 2))
  };
  Util.formatNumber = function(c, b, a, d, h) {
    var a = a === void 0 ? "&#8361; " : a, b = isNaN(b) ? 0 : b, d = d === void 0 ? "." : d, h = h === void 0 ? "," : h, l = c < 0 ? "-" : "", k = parseInt(c = Math.abs(+c || 0).toFixed(b), 10) + "", e = k.length, e = e > 3 ? e % 3 : 0;
    return a + l + (e ? k.substr(0, e) + h : "") + k.substr(e).replace(/(\d{3})(?=\d)/g, "$1" + h) + (b ? d + Math.abs(c - k).toFixed(b).slice(2) : "")
  };
  Util.getBodyScroll = function() {
    var c = 0, b = 0;
    if(typeof window.pageYOffset === "number") {
      b = window.pageYOffset, c = window.pageXOffset
    }else {
      if(document.body && (document.body.scrollLeft || document.body.scrollTop)) {
        b = document.body.scrollTop, c = document.body.scrollLeft
      }else {
        if(document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
          b = document.documentElement.scrollTop, c = document.documentElement.scrollLeft
        }
      }
    }
    return[c, b]
  };
  Util.hasClass = function(c, b) {
    if(c == null || b == null) {
      return!1
    }
    if(c.className === b) {
      return!0
    }
    if(c.className) {
      for(var a = c.classList ? c.classList : Util.split(c.className), d = 0, h = a.length;d < h;d++) {
        if(a[d] === b) {
          return!0
        }
      }
    }
    return!1
  };
  Util.hasTagAndClass = function(c, b, a) {
    if(c == null || b == null || a == null) {
      return!1
    }
    if(c.tagName === b) {
      if(c.className === a) {
        return!0
      }
      if(c.className && c.className.length >= a.length) {
        for(var c = c.classList ? c.classList : Util.split(c.className), b = 0, d = c.length;b < d;b++) {
          if(c[b] === a) {
            return!0
          }
        }
      }
    }
    return!1
  };
  Util.closest = function(c, b, a) {
    if(Util.hasClass(c, b)) {
      return c
    }
    for(c = c.parentNode;Util.isNotNull(c) && c !== a;c = c.parentNode) {
      if(Util.hasClass(c, b)) {
        return c
      }
    }
  };
  Util.closestWithTag = function(c, b, a, d) {
    if(Util.hasTagAndClass(c, b, a)) {
      return c
    }
    for(c = c.parentNode;Util.isNotNull(c) && c !== d;c = c.parentNode) {
      if(Util.hasTagAndClass(c, b, a)) {
        return c
      }
    }
  };
  Util.findFirstByClass = function(c, b) {
    if(c != null) {
      if(Util.hasClass(c, b)) {
        return c
      }
      for(var a = 0, d = c.childNodes, h = d.length, l;a < h;a++) {
        if(Util.isNotNull(d[a]) && (l = Util.findFirstByClass(d[a], b)) !== void 0) {
          return l
        }
      }
    }
  };
  Util.findFirstByTagAndClass = function(c, b, a) {
    if(c != null) {
      if(Util.hasTagAndClass(c, b, a)) {
        return c
      }
      for(var d = 0, c = c.childNodes, h = c.length, l;d < h;d++) {
        if(Util.isNotNull(c[d]) && (l = Util.findFirstByTagAndClass(c[d], b, a)) !== void 0) {
          return l
        }
      }
    }
  };
  Util.findByClass = function(c, b, a) {
    a === void 0 && (a = []);
    if(c == null) {
      return a
    }
    Util.hasClass(c, b) && a.push(c);
    for(var d = 0, c = c.childNodes, h = c.length;d < h;d++) {
      Util.isNotNull(c[d]) && Util.findByClass(c[d], b, a)
    }
    return a
  };
  Util.findByTagAndClass = function(c, b, a, d) {
    d === void 0 && (d = []);
    if(c == null) {
      return d
    }
    Util.hasTagAndClass(c, b, a) && d.push(c);
    for(var h = 0, c = c.childNodes, l = c.length;h < l;h++) {
      Util.isNotNull(c[h]) && Util.findByTagAndClass(c[h], b, a, d)
    }
    return d
  };
  Util.getHead = function() {
    return document.head ? document.head : document.getElementsByTagName("head")[0]
  };
  Util.appendTag = function(c, b) {
    return c.appendChild(document.createElement(b))
  };
  Util.appendHTML = function(c, b) {
    var a = document.createElement("div"), d, h = 0, l = [];
    a.innerHTML = b;
    for(d = a.childNodes.length;h < d;h++) {
      l.push(c.appendChild(a.firstChild))
    }
    return l
  };
  Util.createStyle = function(c) {
    c == null && (c = "");
    var b = document.createElement("style");
    b.type = "text/css";
    b.rel = "stylesheet";
    b.styleSheet ? b.styleSheet.cssText = c : b.appendChild(document.createTextNode(c));
    Util.getHead().appendChild(b);
    return b
  };
  Util.removeStyle = function(c) {
    c != null && c.parentNode != null && Util.getHead().removeChild(c)
  };
  Util.setStyle = function(c, b) {
    return c == null ? "" : c.styleSheet ? c.styleSheet.cssText = b : c.childNodes[0].nodeValue = b
  };
  Util.appendStyle = function(c, b) {
    return c == null ? "" : c.styleSheet ? c.styleSheet.cssText += b : c.childNodes[0].nodeValue += b
  };
  Util.getStyle = function(c) {
    return c == null ? "" : c.styleSheet ? c.styleSheet.cssText : c.childNodes[0].nodeValue
  };
  Util.appendScript = function(c) {
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.text ? b.text = c : b.innerHTML = c;
    Util.getHead().appendChild(b);
    return b
  };
  Util.appendScriptFile = function(c) {
    document.write('<script type="text/javascript" src="' + c + '"><\/script>')
  };
  Util.outerHTML = function(c) {
    if(c.outerHTML === void 0) {
      var b = document.createElement("div");
      b.appendChild(c.cloneNode(!0));
      return b.innerHTML
    }
    return c.outerHTML
  };
  Util.index = function(c) {
    for(var b = 0;(c = c.previousSibling) != null;) {
      ++b
    }
    return b
  };
  Util.contains = function(c, b, a) {
    for(;b != null;) {
      if(b === c) {
        return!0
      }
      if(b === a) {
        break
      }
      b = b.parentNode
    }
    return!1
  };
  Util.areEqualArrays = function(c, b) {
    if(c == null || b == null) {
      return!1
    }
    if(c === b) {
      return!0
    }
    if(c.length !== b.length) {
      return!1
    }
    for(var a = 0, d = c.length;a < d;a++) {
      if(c.hasOwnProperty(a) && !b.hasOwnProperty(a) || b.hasOwnProperty(a) && !c.hasOwnProperty(a) || c[a] !== b[a]) {
        return!1
      }
    }
    return!0
  };
  Util.areEqualObjects = function(c, b) {
    if(c == null || b == null) {
      return!1
    }
    if(c === b) {
      return!0
    }
    if(typeof c !== "object" || typeof b !== "object") {
      return!1
    }
    for(var a in c) {
      if(c.hasOwnProperty(a) && (!b.hasOwnProperty(a) || c[a] !== b[a])) {
        return!1
      }
    }
    for(a in b) {
      if(b.hasOwnProperty(a) && (!c.hasOwnProperty(a) || c[a] !== b[a])) {
        return!1
      }
    }
    return!0
  };
  Util.areEqualComplex = function(c, b, a) {
    if(c == null || b == null) {
      return!1
    }
    if(c === b) {
      return!0
    }
    var d = a.length, h = a[0];
    if(d === 1) {
      return h === "array" ? Util.areEqualArrays(c, b) : Util.areEqualObjects(c, b)
    }
    if(d > 1) {
      a = a.slice(1);
      d = 0;
      if(h === "array") {
        if(c.length !== b.length) {
          return!1
        }
        for(h = c.length;d < h;d++) {
          if(!b.hasOwnProperty(d) || !Util.areEqualComplex(c[d], b[d], a)) {
            return!1
          }
        }
      }else {
        for(d in c) {
          if(c.hasOwnProperty(d) && (!b.hasOwnProperty(d) || !Util.areEqualComplex(c[d], b[d], a))) {
            return!1
          }
        }
        for(d in b) {
          if(b.hasOwnProperty(d) && (!c.hasOwnProperty(d) || !Util.areEqualComplex(c[d], b[d], a))) {
            return!1
          }
        }
      }
      return!0
    }
  };
  Util.typeCheck = function(c, b, a, d, h) {
    if(a && b === void 0 || d && b === null) {
      return!0
    }
    switch(typeof c) {
      case "string":
        if(typeof b === c) {
          return!0
        }
        break;
      case "function":
        if(b instanceof c) {
          return!0
        }
    }
    if(h) {
      return!1
    }
    throw new TypeError("object is not a " + c + ", but is a " + typeof b);
  };
  Util.sprint = function(c, b, a, d) {
    Util.typeCheck("string", c);
    Util.typeCheck("object", b);
    Util.typeCheck("string", a, !0);
    Util.typeCheck("string", d, !0);
    var h;
    a === void 0 && (a = "%");
    d === void 0 && (d = "%");
    for(h in b) {
      b.hasOwnProperty(h) && (c = c.replace(RegExp(a + h + d, "gm"), b[h]))
    }
    return c
  };
  Util.tagReplaces = {"&":"&amp;", "<":"&lt;", ">":"&gt;"};
  Util.replaceTag = function(c) {
    return Util.tagReplaces[c] || c
  };
  Util.escapeHtmlTags = function(c) {
    return c.replace(/[&<>]/g, Util.replaceTag)
  };
  Util.escapeRegExp = function(c) {
    return c.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
  };
  Util.strReplace = function(c, b) {
    var a, d = [];
    for(a in b) {
      b.hasOwnProperty(a) && d.push(Util.escapeRegExp(a))
    }
    return c.replace(RegExp("(" + d.join("|") + ")", "gm"), function(d) {
      return b[d]
    })
  };
  Util.calCheckSize = function() {
    var c = {}, b = document.createElement("div");
    document.body.appendChild(b);
    b.innerHTML = "<input type='checkbox' style='margin:0;padding:0;overflow:hidden'/>";
    c.checkboxW = b.childNodes[0].offsetWidth;
    c.checkboxH = b.childNodes[0].offsetHeight;
    b.innerHTML = "<input type='radio' style='margin:0;padding:0;overflow:hidden'/>";
    c.radioW = b.childNodes[0].offsetWidth;
    c.radioH = b.childNodes[0].offsetHeight;
    document.body.removeChild(b);
    return c
  };
  Util.which = function(c) {
    for(var b = {}, a = 0, d;a < c.length;a++) {
      if(d = c[a].toLowerCase(), d === "number") {
        for(d = 48;d <= 57;d++) {
          b[d] = !0
        }
        for(d = 96;d <= 105;d++) {
          b[d] = !0
        }
      }else {
        if(d === "alphabet") {
          for(d = 65;d <= 90;d++) {
            b[d] = !0
          }
        }else {
          if(d === "arrow") {
            for(d = 37;d <= 40;d++) {
              b[d] = !0
            }
          }else {
            d.length > 1 && (d = d.replace(/\s/g, "")), d.length >= 3 && (d = d.replace(/numpad|num/g, "n").replace(/korean|kor/g, "kr")), b[Util.keyMapKeydown[d]] = !0
          }
        }
      }
    }
    return b
  };
  Util.keyMapKeydown = {backspace:8, tab:9, enter:13, shift:16, control:17, ctrl:17, alt:18, pause:19, "break":19, capslock:20, escape:27, esc:27, space:32, " ":32, pageup:33, pgup:33, pagedown:34, pgdown:34, pgdn:34, end:35, home:36, leftarrow:37, left:37, uparrow:38, up:38, rightarrow:39, right:39, downarrow:40, down:40, insert:45, ins:45, "delete":46, del:46, 0:48, ")":48, 1:49, "!":49, 2:50, "@":50, 3:51, "#":51, 4:52, $:52, 5:53, "%":53, 6:54, "^":54, 7:55, "&":55, 8:56, "*":56, 9:57, "(":57, 
  a:65, b:66, c:67, d:68, e:69, f:70, g:71, h:72, i:73, j:74, k:75, l:76, m:77, n:78, o:79, p:80, q:81, r:82, s:83, t:84, u:85, v:86, w:87, x:88, y:89, z:90, n0:96, n1:97, n2:98, n3:99, n4:100, n5:101, n6:102, n7:103, n8:104, n9:105, "n*":106, "n+":107, "n-":109, "n.":110, "n/":111, f1:112, f2:113, f3:114, f4:115, f5:116, f6:117, f7:118, f8:119, f9:120, f10:121, f11:122, f12:123, numlock:144, scrolllock:145, mute:173, volumedown:174, volumeup:175, ":":186, ";":186, "=":187, "+":187, ",":188, "<":188, 
  "-":189, _:189, ".":190, ">":190, "/":191, "?":191, "`":192, "~":192, "[":219, "{":219, "\\":220, "|":220, "]":221, "}":221, "'":222, '"':222, kr:229};
  Util.printEventPos = function(c) {
    Util.print("client: (" + c.clientX + ", " + c.clientY + "), layer: (" + c.layerX + ", " + c.layerY + "), offset: (" + c.offsetX + ", " + c.offsetY + "), page: (" + c.pageX + ", " + c.pageY + "), screen: (" + c.screenX + ", " + c.screenY + "), xy: (" + c.x + ", " + c.y + ")")
  };
  Util.print = function(c) {
    if(e) {
      if(arguments.length === 1) {
        e(arguments[0])
      }else {
        for(var b = 0, a = arguments.length;b < a;b++) {
          e(arguments[b])
        }
      }
    }
  };
  Util.open = function(c) {
    var b = {url:"about:blank", name:"_blank", channelmode:"no", directories:"yes", fullscreen:"no", height:void 0, left:void 0, location:"yes", menubar:"yes", resizable:"yes", scrollbars:"yes", status:"yes", titlebar:"yes", toolbar:"yes", top:void 0, width:void 0, replace:void 0}, a;
    if(Util.isNotNull(c)) {
      for(a in b) {
        b.hasOwnProperty(a) && (b[a] = c[a])
      }
    }
    c = Util.ifNull(b.height, "", "height=" + b.height + ", ") + Util.ifNull(b.left, "", "left=" + b.left + ", ") + Util.ifNull(b.top, "", "top=" + b.top + ", ") + Util.ifNull(b.width, "", "width=" + b.width + ", ") + "channelmode=" + b.channelmode + ", directories=" + b.directories + ", fullscreen=" + b.fullscreen + ", location=" + b.location + ", menubar=" + b.menubar + ", resizable=" + b.resizable + ", scrollbars=" + b.scrollbars + ", status=" + b.status + ", titlebar=" + b.titlebar + ", toolbar=" + 
    b.toolbar;
    return Util.isNull(b.replace) ? window.open(b.url, b.name, c) : window.open(b.url, b.name, c, b.replace)
  }
})();
var Tracer = {};
(function() {
  function f() {
    this.stack = "";
    this.timers = {}
  }
  var g = goog.getObjectByName("jx.util");
  goog.exportSymbol("Tracer", f);
  var e = f.prototype;
  e.print = function(c, b, a) {
    c === void 0 && (c = "");
    b === void 0 && (b = "timer");
    a === void 0 && (a = !0);
    var d = this.timers[b], h = (new Date).getTime(), d = g.isNull(d) ? 0 : h - d;
    g.print((this.stack.length > 0 ? this.stack + " :: " : "") + c + ", Time elapsed since last update: " + d + "ms");
    a && (this.timers[b] = h)
  };
  e.addStack = function(c) {
    this.stack = this.stack + " > " + c
  };
  e.removeStack = function() {
    this.stack = this.stack.substring(0, this.stack.lastIndexOf(" > "))
  };
  e.clearStack = function() {
    this.stack = ""
  }
})();
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
    var g, e, c, b;
    if(this.length <= 1) {
      return g = this.getBoundingRect(), c = f.pageX, b = f.pageY, c >= g.left && c <= g.left + g.width && b >= g.top && b <= g.top + g.height
    }
    e = !1;
    this.each(function() {
      g = $(this).getBoundingRect();
      c = f.pageX;
      b = f.pageY;
      if(c >= g.left && c <= g.left + g.width && b >= g.top && b <= g.top + g.height) {
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
jx.grid = {};
var JGM = {};
(function() {
  var f = goog.getObjectByName("jx.util"), g = goog.getObjectByName("jx.util$");
  goog.exportSymbol("JGM", JGM);
  goog.exportSymbol("jx.grid", JGM);
  JGM.version = "2.0.0";
  JGM._map = {ArrayExtIE:{cacheModule:!1}, Cache:{cacheModule:!0}, Cell:{cacheModule:!1}, CheckManager:{cacheModule:!0}, ColumnManager:{cacheModule:!0}, ColumnGroup:{cacheModule:!0}, ColumnHeader:{cacheModule:!0}, Collapser:{cacheModule:!0}, DataManager:{cacheModule:!0}, DataCreator:{cacheModule:!0}, EditManager:{cacheModule:!0}, Editor:{cacheModule:!0}, EngineExt:{cacheModule:!1}, EventManager:{cacheModule:!0}, Footer:{cacheModule:!0}, HeaderTree:{cacheModule:!0}, Grid:{cacheModule:!0}, GridManager:{cacheModule:!1}, 
  MenuBar:{cacheModule:!0}, ViewportManager:{cacheModule:!0}, SelectionManager:{cacheModule:!0}, SearchManager:{cacheModule:!0}, TooltipManager:{cacheModule:!0}, Tracer:{cacheModule:!1}, Tree:{cacheModule:!0}, TreeNode:{cacheModule:!1}, Util:{cacheModule:!1}, Util$:{cacheModule:!1}};
  JGM.create = function(e, c) {
    f.isNull(c) && (c = {});
    if(!this.hasOwnProperty(e)) {
      throw Error("cannot find a grid module: name=" + e);
    }
    if(this._map.hasOwnProperty(e)) {
      if(this._map[e].cacheModule) {
        var b = c.mid = "JGM" + this.m.length++, a = new this[e](c);
        this.m.hasOwnProperty(e) || (this.m[e] = {});
        this.m[e][b] = a;
        e === "Grid" && a.name && (this.gridMap[a.name] = a);
        return a
      }else {
        return new this[e](c)
      }
    }else {
      return new this[e](c)
    }
  };
  JGM._destroy = function(e, c) {
    var b, a, d, h;
    for(a in c) {
      if(c.hasOwnProperty(a)) {
        switch(a) {
          case "map":
            b = c[a];
            if(f.isString(b)) {
              b = f.split(b);
              h = b.length;
              for(d = 0;d < h;d++) {
                JGM._deleteMap(e, b[d])
              }
            }else {
              if(b instanceof Array) {
                h = b.length;
                for(d = 0;d < h;d++) {
                  f.emptyObject(b[d])
                }
              }else {
                f.emptyObject(b)
              }
            }
            break;
          case "array":
            b = c[a];
            if(f.isString(b)) {
              b = f.split(b);
              h = b.length;
              for(d = 0;d < h;d++) {
                JGM._deleteArray(e, b[d])
              }
            }else {
              b.length = 0
            }
            break;
          case "$":
            b = c[a];
            if(f.isString(b)) {
              b = f.split(b);
              h = b.length;
              for(d = 0;d < h;d++) {
                JGM._delete$(e, b[d])
              }
            }else {
              if(b instanceof Array) {
                h = b.length;
                for(d = 0;d < h;d++) {
                  g.unbindRemove(b[d])
                }
              }else {
                g.unbindRemove(b)
              }
            }
            break;
          case "style":
            b = c[a];
            if(f.isString(b)) {
              b = f.split(b);
              h = b.length;
              for(d = 0;d < h;d++) {
                JGM._deleteStyle(e, b[d])
              }
            }else {
              if(b instanceof Array) {
                h = b.length;
                for(d = 0;d < h;d++) {
                  f.removeStyle(b[d])
                }
              }else {
                f.removeStyle(b)
              }
            }
            break;
          case "property":
            b = c[a];
            if(f.isString(b)) {
              b = f.split(b);
              h = b.length;
              for(d = 0;d < h;d++) {
                delete e[b[d]]
              }
            }else {
              if(b instanceof Array) {
                h = b.length;
                for(d = 0;d < h;d++) {
                  delete e[b[d]]
                }
              }
            }
            break;
          case "module":
            b = c[a];
            if(f.isString(b)) {
              b = f.split(b);
              h = b.length;
              for(d = 0;d < h;d++) {
                JGM._deleteModule(e, b[d])
              }
            }else {
              if(b instanceof Array) {
                h = b.length;
                for(d = 0;d < h;d++) {
                  b[d].destroy()
                }
              }else {
                b.destroy()
              }
            }
            break;
          case "name":
            e.hasOwnProperty("mid") && (JGM._remove(c[a], e.mid), delete e.mid);
            break;
          case "path":
            e.hasOwnProperty("grid") && e.grid.hasOwnProperty(c[a]) && (delete e.grid[c[a]], delete e.grid)
        }
      }
    }
    f.emptyObject(e)
  };
  JGM._deleteMap = function(e, c) {
    e.hasOwnProperty(c) && (f.emptyObject(e[c]), delete e[c])
  };
  JGM._deleteArray = function(e, c) {
    if(e.hasOwnProperty(c)) {
      e[c].length = 0, delete e[c]
    }
  };
  JGM._delete$ = function(e, c) {
    e.hasOwnProperty(c) && (g.unbindRemove(e[c]), delete e[c])
  };
  JGM._deleteStyle = function(e, c) {
    e.hasOwnProperty(c) && (f.removeStyle(e[c]), delete e[c])
  };
  JGM._deleteModule = function(e, c) {
    e.hasOwnProperty(c) && (e[c].destroy(), delete e[c])
  };
  JGM._remove = function(e, c) {
    delete this.m[e][c]
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
  JGM._add = function(e, c) {
    this[e] = c
  };
  JGM._extend = function(e, c) {
    var b = f.ifNull(c, {});
    $.extend(!0, e, b);
    $.extend(!0, b, e);
    return b
  };
  JGM.m = {length:0};
  JGM._CONST = {_cssUnselectable:"-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none;", _cssUnselectable:"-webkit-user-drag:none;-moz-user-drag:none;user-drag:none;", _checkboxWidth:void 0, _checkboxHeight:void 0, _radioWidth:void 0, _radioHeight:void 0};
  JGM._globalEventsBound = !1;
  JGM._globalEvents = {_mousemove:function(e) {
    var c, b = JGM.m.Grid;
    for(c in b) {
      b.hasOwnProperty(c) && b[c]._mousemove(e)
    }
  }, _mouseup:function(e) {
    var c, b = JGM.m.Grid;
    for(c in b) {
      b.hasOwnProperty(c) && b[c]._mouseup(e)
    }
  }, _resize:function(e) {
    var c, b = JGM.m.Grid;
    for(c in b) {
      b.hasOwnProperty(c) && b[c]._resize(e)
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
jx.grid.renderer = {};
(function() {
  var f = goog.getObjectByName("jx.grid");
  goog.getObjectByName("jx.util");
  f = f.renderer = {};
  goog.exportSymbol("jx.grid.renderer", f);
  f.selectBox = function(f) {
    var e = f.mapping, c = f.attr, b = f["default"], a = f.style, d = f.callback, h, l, k, m = 0, i = [], j = [], p = "<select";
    if(c) {
      for(k in c) {
        c.hasOwnProperty(k) && (p += " " + k + '="' + c[k] + '"')
      }
    }
    if(a) {
      p += ' style="';
      for(k in a) {
        a.hasOwnProperty(k) && (p += k + ":" + a[k] + ";")
      }
      p += '"'
    }
    p += ">";
    for(h in e) {
      e.hasOwnProperty(h) && (f = e[h], i.push(h), j.push(f), b == f && (l = m), m++)
    }
    return function(a) {
      var b, h, c = p;
      for(h = 0;h < m;h++) {
        if(a == j[h]) {
          b = h;
          break
        }
      }
      b === void 0 && (b = l);
      for(h = 0;h < m;h++) {
        c += '<option value="' + j[h] + '"', h === b && (c += ' selected="selected"'), c += ">" + i[h] + "</option>"
      }
      c += "</select>";
      d && (b = [], b.push(c), Array.prototype.push.apply(b, arguments), c = d.apply(this, b));
      return c
    }
  }
})();
jx.lang = {};
jx.lang.Disposable = {};
(function() {
  function f() {
  }
  function g(d, a, b) {
    if(typeof d != "object") {
      return!1
    }
    var c, e, f;
    if(a) {
      for(var b = 0, j = a.length;b < j;b++) {
        if(c = a[b], this.hasOwnProperty(c)) {
          if(d.hasOwnProperty(c)) {
            if(e = this[c], f = d[c], e !== d && !(e === e || f === f)) {
              return!1
            }
          }else {
            return!1
          }
        }else {
          if(d.hasOwnProperty(c)) {
            return!1
          }
        }
      }
    }else {
      if(b) {
        for(c in this) {
          if(this.hasOwnProperty(c)) {
            if(!d.hasOwnProperty(c)) {
              return!1
            }
            e = this[c];
            f = d[c];
            if(e !== f) {
              if(e) {
                if(typeof e != "object" || typeof f != "object") {
                  return!1
                }
                if(e.equals) {
                  if(!e.equals(f, null, b - 1)) {
                    return!1
                  }
                }else {
                  if(f.equals && !f.equals(e, null, b - 1)) {
                    return!1
                  }
                }
                if(!g.call(e, f, null, b - 1)) {
                  return!1
                }
              }else {
                if(!(e === e || f === f)) {
                  return!1
                }
              }
            }
          }
        }
      }else {
        for(c in this) {
          if(this.hasOwnProperty(c)) {
            if(d.hasOwnProperty(c)) {
              if(e = this[c], f = d[c], e !== d && !(e === e || f === f)) {
                return!1
              }
            }else {
              return!1
            }
          }
        }
      }
      for(c in d) {
        if(d.hasOwnProperty(c) && !this.hasOwnProperty(c)) {
          return!1
        }
      }
    }
    return!0
  }
  function e(d, b) {
    var c, k;
    if(d) {
      for(c in this) {
        if(this.hasOwnProperty(c)) {
          if((k = this[c]) && typeof k == "object") {
            if(k.dispose) {
              k.dispose(d - 1, b)
            }else {
              if(b) {
                if(a(k)) {
                  k.length = 0
                }
                e.call(k, d - 1, b)
              }
            }
          }
          delete this[c]
        }
      }
    }else {
      for(c in this) {
        this.hasOwnProperty(c) && delete this[c]
      }
    }
  }
  var c = goog.getObjectByName("jx.util");
  goog.exportSymbol("jx.lang.Disposable", f);
  goog.exportProperty(f.prototype, "dispose", e);
  var b = f.prototype, a = c.isArray;
  c.equals = Object.equals = function(d, a, b, c) {
    return typeof d == "object" ? g.call(d, a, b, c) : d !== d && a !== a
  };
  c.dispose = Object.dispose = function(d, a, b) {
    if(typeof d == "object") {
      return e.call(d, a, b)
    }
  };
  b.equals = g;
  b.dispose = e
})();
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
  var e = f.prototype, c = g.prototype.dispose;
  e.dispose = function() {
    c.call(this._handlers, -1, !0);
    c.call(this)
  };
  e.addEventListener = function(b, a) {
    if(!b) {
      throw Error("Invalid event type: " + b);
    }
    if(typeof a != "function") {
      throw Error("Event listener must be a function");
    }
    if(!this._handlers) {
      this._handlers = {}
    }
    var d = this._handlers, b = (b + "").toLowerCase();
    d.hasOwnProperty(b) || (d[b] = []);
    d = d[b];
    d.indexOf(a) === -1 && d.push(a)
  };
  e.removeEventListener = function(b, a) {
    if(this._handlers) {
      var b = (b + "").toLowerCase(), d = this._handlers;
      if(d.hasOwnProperty(b)) {
        for(var h = d[b], c = -1;(c = h.indexOf(a, c + 1)) !== -1;) {
          h.splice(c, 1)
        }
        h.length === 0 && delete d[b]
      }
    }
  };
  e.dispatchEvent = function(b) {
    if(!b || !b.type) {
      throw Error("Invalid event");
    }
    if(!this._handlers) {
      if(b.cancelable && b.defaultPrevented) {
        return!1
      }
      b.defaultAction && b.defaultAction(this);
      return!0
    }
    var a = this._handlers, d = (b.type + "").toLowerCase();
    b.target = this;
    if(a.hasOwnProperty(d)) {
      for(var a = a[d], d = 0, h = a.length, c;d < h && !b.stopPropagation;d++) {
        c = a[d], c.handleEvent ? c.handleEvent(b) : c.call(this, b)
      }
    }
    if(b.cancelable && b.defaultPrevented) {
      return!1
    }
    b.defaultAction && b.defaultAction(this);
    return!0
  }
})();
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
  var c = f.prototype, b = e.prototype.dispose;
  c.dispose = function() {
    b.call(this)
  };
  c.__init = function(a) {
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
  c.destroy = function() {
    this.dispose()
  };
  c.getRowIdx = function() {
    if(g.isNotNull(this._datarow)) {
      return this.grid.dataMgr.getIdx(this._datarow)
    }
  };
  c.getColIdx = function() {
    if(g.isNotNull(this._colDef)) {
      return this.grid.colDefMgr.getIdx(this._colDef)
    }
  };
  c.getNode = function() {
    if(g.isNotNullAnd(this._datarow, this._colDef)) {
      return this.grid.view.getCellByIdAndKey(this.grid.dataMgr.getId(this._datarow), this._colDef.key)
    }
  };
  c.getRowNode = function() {
    return this.grid.view.getRow(this._datarow)
  };
  c.get$ = function() {
    var a = this.getNode();
    return a !== void 0 ? $(a) : $([])
  };
  c.getDatarow = function() {
    return this._datarow
  };
  c.getColDef = function() {
    return this._colDef
  };
  c.getKey = function() {
    if(g.isNotNull(this._colDef)) {
      return this._colDef.key
    }
  };
  c.getId = function() {
    return this.grid.dataMgr.getId(this._datarow)
  };
  c.getValue = function() {
    if(g.isNotNullAnd(this._datarow, this._colDef)) {
      return this._datarow[this._colDef.key]
    }
  };
  c.isValid = function() {
    return g.isNotNull(this.getNode())
  };
  c.isInvalid = function() {
    return g.isNull(this.getNode())
  };
  c.isEmpty$ = function() {
    return this.get$().length === 0
  };
  c.has$ = function() {
    return this.get$().length !== 0
  };
  c.equals = function(a) {
    return a && this._datarow && this._datarow === a._datarow && this._colDef && this._colDef === a.__colDef
  }
})();
jx.struct = {};
jx.struct.TreeNode = {};
jx.struct.Tree = {};
var TreeNode = {}, Tree = {};
(function() {
  function f(b) {
    this.tree = b.tree;
    this.data = b.data;
    this.nodeId = b.nodeId;
    this.childrenMap = {};
    this.children = []
  }
  function g(b) {
    this.list = b.list;
    this._options = JGM._extend({nodeKey:"nodeId", parentKey:"parentId"}, b.options);
    this.map = {};
    this.root = new f({tree:this});
    this.infants = {}
  }
  var e = goog.getObjectByName("jx.util");
  goog.exportSymbol("jx.struct.TreeNode", f);
  goog.exportSymbol("jx.struct.Tree", g);
  goog.exportSymbol("TreeNode", f);
  goog.exportSymbol("Tree", g);
  f.getInstance = function(b) {
    return new f(b)
  };
  var c = f.prototype;
  c.destroy = function() {
    this.detach();
    delete this.tree;
    delete this.data;
    delete this.nodeId;
    delete this.childrenMap;
    delete this.children
  };
  c.destroyCompletely = function() {
    this.detachCompletely();
    delete this.tree;
    delete this.data;
    delete this.nodeId;
    delete this.childrenMap;
    delete this.children
  };
  c.destroyDown = function() {
    e.isNotNull(this.parent) && this.parent.removeChild(this);
    this.traverse({post:!0, fn:function() {
      this.destroy()
    }})
  };
  c.detach = function() {
    delete this.parent;
    delete this.level;
    this.children.length = 0;
    this.childrenMap = {}
  };
  c.detachCompletely = function() {
    e.isNotNull(this.parent) && this.parent.removeChild(this);
    this.removeAllChildren();
    delete this.parent;
    delete this.level
  };
  c.detachDown = function() {
    e.isNotNull(this.parent) && this.parent.removeChild(this);
    this.traverse({post:!0, fn:function() {
      this.detach()
    }})
  };
  c.isRoot = function() {
    return e.isNull(this.parent)
  };
  c.getRoot = function() {
  };
  c.isLeaf = function() {
    return this.children.length === 0
  };
  c.setParent = function(b) {
    if(this.parent !== b) {
      e.isNotNull(this.parent) && this.parent.removeChild(this), this.parent = b, delete this.level, e.isNotNull(b) && b.addChild(this)
    }
  };
  c.hasChild = function(b) {
    return this.childrenMap.hasOwnProperty(b.nodeId)
  };
  c.addChild = function(b) {
    this.hasChild(b) || (this.children.push(b), this.childrenMap[b.nodeId] = this.children.length - 1, b.setParent(this))
  };
  c.addChildAt = function(b, a) {
    var d;
    if(this.hasChild(a)) {
      d = this.childrenMap[a.nodeId];
      if(d === b) {
        return
      }
      this.children.removeAt(d)
    }
    this.children.addAt(b, a);
    e.isNotNull(d) && d < b ? this.resetChildIdx(d) : this.resetChildIdx(b);
    a.setParent(this)
  };
  c.removeChild = function(b) {
    if(this.hasChild(b)) {
      var a = this.childrenMap[b.nodeId];
      this.children.removeAt(a);
      delete this.childrenMap[b.nodeId];
      this.resetChildIdx(a);
      delete b.parent;
      delete b.level
    }
  };
  c.removeChildAt = function(b) {
    var a = this.children[b];
    this.children.removeAt(b);
    delete this.childrenMap[a.nodeId];
    this.resetChildIdx(b);
    delete a.parent;
    delete a.level
  };
  c.resetChildIdx = function(b) {
    e.isNull(b) && (b = 0);
    for(var a = this.children, d = a.length, h = this.childrenMap;b < d;b++) {
      h[a[b].nodeId] = b
    }
  };
  c.removeAllChildren = function() {
    for(var b = 0, a = this.children, d = a.length;b < d;b++) {
      delete a[b].parent, delete a[b].level
    }
    a.length = 0;
    this.childrenMap = {}
  };
  c.getSiblings = function() {
    if(this.isRoot()) {
      return[]
    }
    var b = this.parent.children.slice();
    b.removeAt(this.parent.getChildIdx(this));
    return b
  };
  c.getChildIdx = function(b) {
    return this.childrenMap[b.nodeId]
  };
  c.getIdx = function() {
    return this.isRoot() ? -1 : this.parent.getChildIdx(this)
  };
  c.getPath = function() {
    return this.traverse({res:[], up:!0, post:!0, fn:function(b) {
      this.isRoot() || b.res.push(this.getIdx())
    }}).res
  };
  c.getAncestors = function() {
    var b = {res:[], up:!0, post:!0, fn:function(a) {
      a.res.push(this)
    }};
    this.traverse(b);
    b.res.pop();
    return b.res
  };
  c.getDescendents = function() {
    var b = {res:[], fn:function(a) {
      a.res.push(this)
    }};
    this.traverse(b);
    b.res.shift();
    return b.res
  };
  c.getLevel = function() {
    return this.isRoot() ? this.level = -1 : this.level = this.parent.getLevel() + 1
  };
  c.find = function(b) {
    return this.traverse({fn:function(a) {
      if(this.data === b) {
        a.res = this, a.stop = !0
      }
    }}).res
  };
  c.traverse = function(b, a) {
    if(b.stop) {
      return b
    }
    if(b.up) {
      this.isRoot() ? this.callFn(b) : b.post ? (this.parent.traverse(b), this.callFn(b)) : (this.callFn(b), this.parent.traverse(b))
    }else {
      var d = 0, h = this.children, c = h.length;
      if(b.post) {
        for(;d < c;d++) {
          h[d].traverse(b, d)
        }
        this.callFn(b, a)
      }else {
        if(this.callFn(b, a), b.propagate === !1) {
          delete b.propagate
        }else {
          for(;!b.stop && d < c;d++) {
            h[d].traverse(b, d)
          }
        }
      }
    }
    return b
  };
  c.traverseChildren = function(b) {
    for(var a = 0, d = this.children, h = d.length;a < h;a++) {
      d[a].traverse(b, a)
    }
  };
  c.traverseParent = function(b) {
    e.isNotNull(this.parent) && this.parent.traverse(b)
  };
  c.callFn = function(b, a) {
    if(!b.stop) {
      e.isNull(b.target) ? e.callFn(this, b.fn, b, a) : (b.node = this, e.callFn(b.target, b.fn, b, a))
    }
  };
  g.getInstance = function(b) {
    return new g(b)
  };
  c = g.prototype;
  c.__init = function() {
    this.makeTree()
  };
  c.destroy = function() {
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
  c.detach = function() {
    this.root.detachDown();
    this.emptyInfants()
  };
  c.emptyInfants = function() {
    var b, a = this.infants;
    for(b in a) {
      if(a.hasOwnProperty(b)) {
        a[b].length = 0
      }
    }
    this.infants = {}
  };
  c.reattach = function(b) {
    this.detach();
    if(e.isNull(b)) {
      b = this.list
    }
    for(var a = this._options.nodeKey, d = this.map, h = b.length, c = 0;c < h;c++) {
      this.attachNode(d[b[c][a]])
    }
  };
  c.makeTree = function(b) {
    if(e.isNull(b)) {
      b = this.list
    }
    for(var a = 0, d = b.length;a < d;a++) {
      this.createNode(b[a])
    }
  };
  c.hasNode = function(b) {
    return e.isNotNull(b) && this.map.hasOwnProperty(b[this._options.nodeKey])
  };
  c.getNode = function(b) {
    return this.map[b[this._options.nodeKey]]
  };
  c.getNodeByNodeId = function(b) {
    return this.map[b]
  };
  c.createNode = function(b) {
    if(!this.hasNode()) {
      var a = b[this._options.nodeKey], b = new f({tree:this, data:b, nodeId:a});
      this.map[a] = b;
      this.attachNode(b);
      return b
    }
  };
  c.adoptInfants = function(b, a) {
    if(this.infants.hasOwnProperty(a)) {
      for(var d = this.infants[a], h = 0, c = d.length;h < c;h++) {
        b.addChild(d[h])
      }
      d.length = 0;
      delete this.infants[a]
    }
  };
  c.attachNode = function(b) {
    var a = b.nodeId, d = b.data[this._options.parentKey];
    this.adoptInfants(b, a);
    if(e.isNull(d) || d == a) {
      return this.root.addChild(b), !0
    }
    if(this.map.hasOwnProperty(d)) {
      return this.map[d].addChild(b), !0
    }
    this.addToInfants(b, d);
    return!1
  };
  c.changeNodeId = function(b, a, d) {
    if(a !== d) {
      delete this.map[a], this.map[d] = b, this.removeChildren(b), b.nodeId = b.data[this._options.nodeKey] = d, e.isNotNull(b.parent) && (b.parent.childrenMap[d] = b.parent.childrenMap[a], delete b.parent.childrenMap[a]), this.adoptInfants(b, d)
    }
  };
  c.changeParentId = function(b, a, d) {
    a !== d && (e.isNull(b.parent) && this.removeFromInfants(b, a), a = this.map[d], b.setParent(a), b.data[this._options.parentKey] = d, e.isNull(a) && this.addToInfants(b, d))
  };
  c.destroyNodeByData = function(b) {
    this.destroyNode(this.getNode(b))
  };
  c.destroyNode = function(b) {
    this.removeChildren(b);
    this.removeFromInfants(b);
    this.removeFromMap(b);
    b.destroyCompletely()
  };
  c.removeFromMap = function(b) {
    delete this.map[b.nodeId]
  };
  c.addToInfants = function(b, a) {
    this.infants.hasOwnProperty(a) || (this.infants[a] = []);
    this.infants[a].push(b)
  };
  c.removeFromInfants = function(b, a) {
    e.isNull(a) && (a = b.data[this._options.parentKey]);
    this.infants.hasOwnProperty(a) && (this.infants[a].remove(b), this.infants[a].length === 0 && delete this.infants[a])
  };
  c.removeChildren = function(b) {
    b.children.length !== 0 && (this.infants.hasOwnProperty(b.nodeId) || (this.infants[b.nodeId] = []), this.infants[b.nodeId].pushList(b.children), b.removeAllChildren())
  };
  c.sortList = function(b) {
    e.isNull(b) ? b = [] : b.length = 0;
    this.root.traverseChildren({fn:function() {
      b.push(this.data)
    }})
  }
})();
jx.grid.BaseModule = {};
(function() {
  function f(c) {
    if(c) {
      if(c.mid != null) {
        this.mid = c.mid
      }
      if(c.grid) {
        this.grid = c.grid
      }
    }
    var b = this._defaultOptions && this._defaultOptions(c.grid), a = c && c.options;
    if(a || b) {
      b || (b = {}), a && $.extend(!0, b, a), this._options = b, this.dispatchEvent({type:"afteroption", options:b})
    }
    this._init && (this.dispatchEvent({type:"beforeinit"}), this._init(c), this.dispatchEvent({type:"afterinit"}));
    var d = this, h = this.grid;
    h && ["Dispose", "CreateCss", "CreateDynamicCss", "Render", "Keydown", "Keyup", "Keypress", "Mousein", "Mouseout", "Mouseenter", "Mouseleave", "Mousemove", "Mouseover", "Mousedown", "Mouseup", "Click", "Dblclick", "Resize", "ResizeWidth", "ResizeHeight", "Scroll", "ScrollH", "ScrollV"].forEach(function(a) {
      var b = "before" + a, a = "after" + a, c = "_" + b, e = "_" + a;
      d[c] && h.addEventListener(b, function(a) {
        return d[c](a)
      });
      d[e] && h.addEventListener(a, function(a) {
        return d[e](a)
      })
    });
    this._bindEvents && (this.dispatchEvent({type:"beforebindevents"}), this._bindEvents(c), this.dispatchEvent({type:"afterbindevents"}));
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
    e.call(this);
    this.dispatchEvent({type:"afterdispose"})
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
    var c = this.grid.event;
    return c.bind.apply(c, arguments)
  };
  g.triggerGridEvent = function() {
    var c = this.grid.event;
    return c.trigger.apply(c, arguments)
  };
  g.toCssStyle = function(c, b, a) {
    var d = [];
    a || (c = "#" + this.grid.mid + " " + c);
    if(typeof b != "string") {
      var h, a = "";
      b.hasOwnProperty("_prepend") && (b._prepend && d.push(b._prepend), delete b._prepend);
      b.hasOwnProperty("_append") && (b._append && (a = ";" + b._append), delete b._append);
      for(h in b) {
        d.push(h + ":" + b[h])
      }
      d = d.join(";") + a
    }
    return c + "{" + d + "}"
  };
  g.toCssStyles = function(c, b, a) {
    var c = c || [], d;
    for(d in b) {
      c.push(this.toCssStyle(d, b[d], a))
    }
    return c
  }
})();
jx.data = {};
jx.data.DataManager = {};
(function() {
  function f(b) {
    this.mid = b.mid;
    this.grid = b.grid;
    this.grid.dataMgr = this;
    this.all = [];
    this.datalist = [];
    this.failed = [];
    this._options = g._extend({idKey:void 0, idColKeys:[], uniqueKeys:[]}, b.options);
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
    this.__init(b)
  }
  var g = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.data.DataManager", f);
  g._add("DataManager", f);
  f.getInstance = function(b) {
    return new f(b)
  };
  var c = f.prototype;
  c.__init = function(b) {
    for(var a = 0, d = this._options.uniqueKeys, h, c = this.uniqueMap, k = d.length, m = this.keyToType, f = this.grid.colDefMgr.getAll();a < k;a++) {
      h = d[a], typeof h === "string" && (c[h] = {})
    }
    k = f.length;
    for(a = 0;a < k;a++) {
      d = f[a], h = d.key, d.hasOwnProperty("unique") && d.unique === !0 && !c.hasOwnProperty(h) && (c[h] = {}), m[h] = this.mapDatatype(d.type)
    }
    e.ifNull(b.datalist, []);
    this.bindEvents();
    this.set(b.datalist)
  };
  c.mapDatatype = function(b) {
    if(typeof b === "string") {
      switch(b = b.toLowerCase(), b) {
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
  c.bindEvents = function() {
    this.grid.event.bind({onDestroy:this._destroy, keydownCanvas:this._keydownCanvas}, this)
  };
  c._destroy = function() {
    this.cleanList(this.all);
    g._destroy(this, {name:"DataManager", path:"dataMgr", property:"all _idMode _increment idKey _sorter", map:"consts _idToIdx _idToData _options", array:"datalist failed _history _redoHistory _filters"})
  };
  c.addUniqueIndex = function(b, a, d, h) {
    if(h !== !0 && (e.isNull(b) || e.isEmptyString(a) || e.isNull(d))) {
      return!1
    }
    if(d.hasOwnProperty(a) === !1) {
      return this.grid.error("KEY_UNDEFINED", a)
    }
    if(e.isEmptyString(h = d[a])) {
      return this.grid.error("BAD_NULL", a)
    }
    if(b.hasOwnProperty(h)) {
      return b[h] === d ? !1 : this.grid.error("DUP_ENTRY", h, a)
    }
    b[h] = d;
    return!0
  };
  c.addUniqueIndices = function(b, a, d, h) {
    if(h !== !0 && (e.isNull(b) || e.isEmptyString(a) || e.isEmptyArray(d))) {
      return!1
    }
    for(var c = d.length, k = [], f, i, h = 0;h < c;h++) {
      if(!e.isNull(i = d[h])) {
        if(i.hasOwnProperty(a) === !1) {
          return this.removeUniqueIndices(b, a, k), this.grid.error("KEY_UNDEFINED", a)
        }
        if(e.isEmptyString(f = i[a])) {
          return this.removeUniqueIndices(b, a, k), this.grid.error("BAD_NULL", a)
        }
        if(b.hasOwnProperty(f)) {
          if(b[f] === i) {
            continue
          }
          this.removeUniqueIndices(b, a, k);
          return this.grid.error("DUP_ENTRY", f, a)
        }
        k.push(b[f] = i)
      }
    }
    return k.length > 0
  };
  c.updateUniqueIndex = function(b, a, d, h, c, k) {
    if(k !== !0 && (e.isEmptyObj(b) || e.isEmptyString(a) || e.isNullOr(d, c) || e.isEmptyObj(h))) {
      return!1
    }
    if(h.hasOwnProperty(a) === !1) {
      return!1
    }
    if(c.hasOwnProperty(a) === !1 || d.hasOwnProperty(a) === !1) {
      return this.grid.error("KEY_UNDEFINED", a)
    }
    if(b.hasOwnProperty(c = c[a]) === !1) {
      return this.grid.error("KEY_NOT_FOUND", c, a)
    }
    if(e.isEmptyString(h = h[a])) {
      return this.grid.error("BAD_NULL", a)
    }
    if(b.hasOwnProperty(h)) {
      return b[h] === d ? !1 : this.grid.error("DUP_ENTRY", h, a)
    }
    b[h] = d;
    delete b[c];
    return c
  };
  c.updateUniqueIndices = function(b, a, d, h, c, k) {
    if(k !== !0) {
      if(e.isEmptyObj(b) || e.isEmptyString(a) || e.isEmptyArray(d) || e.isEmptyArray(h) || e.isEmptyArray(c)) {
        return!1
      }
      if(d.length !== h.length || d.length !== c.length) {
        return this.grid.error("LENGTH_NOT_EQUAL")
      }
    }
    for(var k = 0, f = d.length, i, j, g, n = [], q = [], o = [], r, s;k < f;k++) {
      if(!e.isNull(i = d[k])) {
        if((g = h[k]).hasOwnProperty(a) !== !1) {
          j = c[k];
          if(j.hasOwnProperty(a) === !1 || i.hasOwnProperty(a) === !1) {
            return this.updateUniqueIndices(b, a, n, o, q), this.grid.error("KEY_UNDEFINED", a)
          }
          if(b.hasOwnProperty(s = j[a]) === !1) {
            return this.updateUniqueIndices(b, a, n, o, q), this.grid.error("KEY_NOT_FOUND", s, a)
          }
          if(e.isEmptyString(r = g[a])) {
            return this.updateUniqueIndices(b, a, n, o, q), this.grid.error("BAD_NULL", a)
          }
          if(b.hasOwnProperty(r)) {
            if(b[r] === i) {
              continue
            }
            this.updateUniqueIndices(b, a, n, o, q);
            return this.grid.error("DUP_ENTRY", r, a)
          }
          b[r] = i;
          delete b[s];
          n.push(i);
          q.push(g);
          o.push(j)
        }
      }
    }
    return n.length === 0 ? !1 : {datalist:n, changes:q, befores:o}
  };
  c.removeUniqueIndex = function(b, a, d, h) {
    if(!(h !== !0 && (e.isEmptyObj(b) || e.isEmptyString(a) || e.isEmptyObj(d)))) {
      var c;
      d.hasOwnProperty(a) && b.hasOwnProperty(c = d[a]) && delete b[c]
    }
  };
  c.removeUniqueIndices = function(b, a, d, h) {
    if(!(h !== !0 && (e.isEmptyObj(b) || e.isEmptyString(a) || e.isEmptyArray(d)))) {
      for(var c = d.length, k, f, h = 0;h < c;h++) {
        f = d[h], f.hasOwnProperty(a) && b.hasOwnProperty(k = f[a]) && delete b[k]
      }
    }
  };
  c.addToUniqueMap = function(b) {
    if(e.isEmptyObj(b) || e.isEmptyObj(this.uniqueMap)) {
      return!1
    }
    var a = [], d, h = this.uniqueMap, c;
    for(d in h) {
      if(h.hasOwnProperty(d)) {
        if(c = this.addUniqueIndex(h[d], d, b), c === !0) {
          a.push(d)
        }else {
          if(c instanceof Error) {
            d = 0;
            for(var k = a.length;d < k;d++) {
              this.removeUniqueIndex(h[a[d]], a[d], b)
            }
            return c
          }
        }
      }
    }
    return a.length > 0
  };
  c.addListToUniqueMap = function(b) {
    if(e.isEmptyArray(b) || e.isEmptyObj(this.uniqueMap)) {
      return!1
    }
    var a = this.uniqueMap, d = [], h, c;
    for(h in a) {
      if(a.hasOwnProperty(h)) {
        if(c = this.addUniqueIndices(a[h], h, b), c === !0) {
          d.push(h)
        }else {
          if(c instanceof Error) {
            h = 0;
            for(var k = d.length;h < k;h++) {
              this.removeUniqueIndices(a[d[h]], d[h], b)
            }
            return c
          }
        }
      }
    }
    return d.length > 0
  };
  c.updateUniqueMap = function(b, a, d) {
    if(e.isNullOr(b, a, d) || e.isEmptyObj(this.uniqueMap)) {
      return!1
    }
    var h, c = this.uniqueMap, k = [], f;
    for(h in c) {
      if(c.hasOwnProperty(h)) {
        f = this.updateUniqueIndex(c[h], h, b, a, d);
        if(f instanceof Error) {
          h = 0;
          for(var i = k.length;h < i;h++) {
            this.updateUniqueIndex(c[k[h]], k[h], b, d, a)
          }
          return f
        }
        f !== !1 && k.push(h)
      }
    }
    return k.length > 0
  };
  c.updateListUniqueMap = function(b, a, d) {
    if(e.isEmptyArray(b) || e.isEmptyArray(a) || e.isEmptyArray(d) || e.isEmptyObj(this.uniqueMap)) {
      return!1
    }
    if(b.length !== a.length || b.length !== d.length) {
      return this.grid.error("LENGTH_NOT_EQUAL")
    }
    var h, c = this.uniqueMap, k = [], f;
    for(h in c) {
      if(c.hasOwnProperty(h)) {
        f = this.updateUniqueIndices(c[h], h, b, a, d);
        if(f instanceof Error) {
          h = 0;
          for(var i = k.length;h < i;h++) {
            this.updateUniqueIndices(c[k[h]], k[h], b, d, a)
          }
          return f
        }
        f !== !1 && k.push(h)
      }
    }
    return k.length > 0
  };
  c.removeFromUniqueMap = function(b) {
    if(!e.isEmptyObj(b) && !e.isEmptyObj(this.uniqueMap)) {
      var a, d = this.uniqueMap;
      for(a in d) {
        d.hasOwnProperty(a) && this.removeUniqueIndex(d[a], a, b)
      }
    }
  };
  c.removeListFromUniqueMap = function(b) {
    if(!e.isEmptyArray(b) && !e.isEmptyObj(this.uniqueMap)) {
      var a, d = this.uniqueMap;
      for(a in d) {
        d.hasOwnProperty(a) && this.removeUniqueIndices(d[a], a, b)
      }
    }
  };
  c.addToIdMap = function(b) {
    if(e.isNull(b)) {
      return!1
    }
    var a = this.idKey;
    switch(this._idMode) {
      case this._consts._auto:
        b.hasOwnProperty(a) === !1 && (b[a] = this._increment++);
      case this._consts._given:
      ;
      case this._consts._composite:
        return this.addUniqueIndex(this._idToData, a, b)
    }
    return!1
  };
  c.addListToIdMap = function(b) {
    if(e.isEmptyArray(b)) {
      return!1
    }
    var a = this.idKey;
    switch(this._idMode) {
      case this._consts._auto:
        for(var d = 0, h, c = b.length;d < c;d++) {
          if((h = b[d]).hasOwnProperty(a) === !1) {
            h[a] = this._increment++
          }
        }
      ;
      case this._consts._given:
      ;
      case this._consts._composite:
        return this.addUniqueIndices(this._idToData, a, b)
    }
    return!1
  };
  c.updateIdMap = function(b, a, d) {
    if(e.isNullOr(b, d) || e.isEmptyObj(a)) {
      return!1
    }
    var h = this.idKey;
    switch(this._idMode) {
      case this._consts._auto:
        if(a.hasOwnProperty(h)) {
          return this.grid.error("NOT_MODIFIABLE", h)
        }
      ;
      case this._consts._given:
        return this.updateUniqueIndex(this._idToData, h, b, a, d);
      case this._consts._composite:
        if(a.hasOwnProperty(h)) {
          return this.grid.error("NOT_MODIFIABLE", h)
        }
        for(var d = this._options.idColKeys, c = d.length, k = 0;k < c;k++) {
          if(a.hasOwnProperty(d[k])) {
            for(var f = "", i = 0, j, g, n = {}, q = {}, k = q[h] = b[h];i < c;i++) {
              if(j = d[i], a.hasOwnProperty(j)) {
                if(e.isEmptyString(g = a[j])) {
                  return this.grid.error("BAD_NULL", j)
                }
                f += "&" + g
              }else {
                f += "&" + b[j]
              }
            }
            b[h] = n[h] = f;
            if(k === f) {
              break
            }
            a = this.updateUniqueIndex(this._idToData, h, b, n, q);
            a instanceof Error && (b[h] = k);
            return a
          }
        }
    }
    return!1
  };
  c.updateListIdMap = function(b, a, d) {
    if(e.isEmptyArray(b) || e.isEmptyArray(a) || e.isEmptyArray(d)) {
      return!1
    }
    var h = this.idKey, c = b.length, k = 0;
    switch(this._idMode) {
      case this._consts._auto:
        for(;k < c;k++) {
          if(a[k].hasOwnProperty(h)) {
            return this.grid.error("NOT_MODIFIABLE", h)
          }
        }
      ;
      case this._consts._given:
        return this.updateUniqueIndices(this._idToData, h, b, a, d);
      case this._consts._composite:
        for(var f = this._idToData, i, j, g = this._options.idColKeys, n = g.length, q, d = [], o = [], r = [], s = [], t, u, v, w;k < c;k++) {
          i = b[k];
          j = a[k];
          if(j.hasOwnProperty(h)) {
            t = 0;
            for(c = d.length;t < c;t++) {
              o[t][h] = d[t]
            }
            return this.grid.error("NOT_MODIFIABLE", h)
          }
          for(t = 0;t < n;t++) {
            if(j.hasOwnProperty(g[t])) {
              q = "";
              for(u = 0;u < n;u++) {
                if(v = g[u], j.hasOwnProperty(v)) {
                  if(e.isEmptyString(w = j[v])) {
                    t = 0;
                    for(c = d.length;t < c;t++) {
                      o[t][h] = d[t]
                    }
                    return this.grid.error("BAD_NULL", v)
                  }
                  q += "&" + w
                }else {
                  q += "&" + i[v]
                }
              }
              i[h] !== q && (o.push(i), r.push({}), s.push({}), d.push(i[h]), i[h] = q)
            }
          }
        }
        if(o.length === 0) {
          break
        }
        b = this.updateUniqueIndices(f, h, o, r, s);
        if(b instanceof Error) {
          t = 0;
          for(c = d.length;t < c;t++) {
            o[t][h] = d[t]
          }
        }
        return b
    }
    return!1
  };
  c.removeFromIdMap = function(b) {
    var a = this.idKey, d = this._idToData, h;
    e.isNotNull(b) && b.hasOwnProperty(a) && d.hasOwnProperty(h = b[a]) && delete d[h]
  };
  c.removeListFromIdMap = function(b) {
    if(!e.isEmptyArray(b)) {
      for(var a = this.idKey, d = b.length, h = this._idToData, c, k, f = 0;f < d;f++) {
        k = b[f], k.hasOwnProperty(a) && h.hasOwnProperty(c = k[a]) && delete h[c]
      }
    }
  };
  c.fillTemp = function(b, a) {
    if(!e.isNull(b)) {
      var d = this.grid.colDefMgr.getAll(), h = d.length, c, k, f = 0;
      if(a !== void 0 && a.isNew) {
        for(;f < h;f++) {
          k = d[f], c = k.key, k.nullOnCreate && e.isNull(b[c]) && (b[c] = "J@H" + this._increment++)
        }
      }
    }
  };
  c.fillTempList = function(b, a) {
    if(!e.isEmptyArray(b)) {
      var d = this.grid.colDefMgr.getAll(), h = d.length, c = b.length, k, f, i = 0;
      if(a !== void 0 && a.isNew) {
        for(;i < h;i++) {
          if(f = d[i], k = f.key, f.nullOnCreate) {
            for(f = 0;c;f++) {
              b[f][k] = "J@H" + this._increment++
            }
          }
        }
      }
    }
  };
  c.query = function(b) {
    if(typeof b === "string" && (b = $.trim(b), b.length !== 0)) {
      var a, d, h, c, e;
      a = b.toLowerCase();
      d = b.indexOf(" ");
      if(d !== -1 && (h = a.substring(0, d), a = a.indexOf(" where "), c = a > -1, d = $.trim(c ? b.substring(d + 1, a) : b.substring(d + 1)), d.length !== 0)) {
        switch(c && (e = $.trim(b.substring(a + 7))), h) {
          case "select":
            return this.executeSelect(d, e);
          case "insert":
            return this.executeInsert(d, e);
          case "update":
            return this.executeUpdate(d, e);
          case "delete":
            return this.executeDelete(d, e)
        }
      }
    }
  };
  c.parseWhere = function(b) {
    typeof b === "string" && $.trim(b)
  };
  c.executeSelect = function(b) {
    var b = e.split(b, /[\s,]+/), a = b.length, d = 0, h = {}, c = this.all, k = [];
    if(a === 0) {
      return k
    }
    for(;d < a;d++) {
      if(b[d] === "*") {
        break
      }
      h[b[d]] = !0
    }
    d = 0;
    for(a = c.length;d < a;d++) {
      k.push(e.clone(c[d], h))
    }
    return k
  };
  c.parse = function(b, a) {
    if(e.isNull(b)) {
      return!1
    }
    for(var d = this.grid.colDefMgr.getAll(), h = d.length, c, k, f = a !== void 0 && a.isNew, i = 0;i < h;i++) {
      if(k = d[i], !f || !k.nullOnCreate) {
        if(e.isFunction(c = k.parser)) {
          if(k = k.key, b.hasOwnProperty(k)) {
            try {
              b[k] = c(b[k], b)
            }catch(j) {
              return e.isNull(b) ? this.grid.error("PARSE_ERROR", b, k) : this.grid.error("PARSE_ERROR", b[k], k)
            }
          }
        }
      }
    }
    return!0
  };
  c.parseList = function(b, a) {
    if(e.isNull(b)) {
      return!1
    }
    if(b.length === 0) {
      return!0
    }
    for(var d = this.grid.colDefMgr.getAll(), h = d.length, c = b.length, k, f, i = 0, j, g = a !== void 0 && a.isNew, n;i < h;i++) {
      if(f = d[i], !g || !f.nullOnCreate) {
        if(e.isFunction(k = f.parser)) {
          f = f.key;
          try {
            for(j = 0;j < c;j++) {
              n = b[j], n.hasOwnProperty(f) && (n[f] = k(n[f], n))
            }
          }catch(q) {
            return e.isNull(n) ? this.grid.error("PARSE_ERROR", n, f) : this.grid.error("PARSE_ERROR", n[f], f)
          }
        }
      }
    }
    return!0
  };
  c.validate = function(b, a) {
    if(e.isNull(b)) {
      return!1
    }
    for(var d = this.grid.colDefMgr.getAll(), h = d.length, c, k, f, i, j, g, n, q = a !== void 0 && a.isNew, o = 0;o < h;o++) {
      if(c = d[o], k = c.key, j = void 0, i = f = !1, !q || !c.nullOnCreate) {
        if(c.notNull === !0) {
          if(b.hasOwnProperty(k) === !1 || e.isEmptyString(j = b[k])) {
            return this.grid.error("BAD_NULL", k)
          }
          g = j.toString()
        }else {
          b.hasOwnProperty(k) === !1 || e.isNull(j = b[k]) ? i = f = !0 : j === "" && (i = !0), g = f === !1 ? j.toString() : ""
        }
        if(f === !1) {
          if(e.isNotNull(n = c.max) && i === !1 && j > n) {
            return this.grid.error("BIGGER_THAN", j, k, n)
          }
          if(e.isNotNull(n = c.min) && i === !1 && j < n) {
            return this.grid.error("SMALLER_THAN", j, k, n)
          }
          if(e.isNotNull(n = c.length)) {
            if(i === !0 || g.length !== n) {
              return this.grid.error("WRONG_LENGTH", g, n, k)
            }
          }else {
            if(e.isNotNull(n = c.maxlength) && i === !1 && g.length > n) {
              return this.grid.error("DATA_TOO_LONG", g, k, n)
            }
            if(e.isNotNull(n = c.minlength)) {
              if(i === !0 || g.length < n) {
                return this.grid.error("DATA_TOO_SHORT", g, k, n)
              }
            }
          }
        }
        if(e.isFunction(c = c.validator)) {
          try {
            if(c(j, b, g, f, i) !== !0) {
              return this.grid.error("WRONG_VALUE", g, k)
            }
          }catch(r) {
            return this.grid.error("WRONG_VALUE", g, k)
          }
        }
      }
    }
    return!0
  };
  c.validateList = function(b, a) {
    if(e.isNull(b)) {
      return!1
    }
    if(b.length === 0) {
      return!0
    }
    for(var d = this.grid.colDefMgr.getAll(), c = d.length, l = b.length, k, f, i = 0, j, g, n, q, o, r = a !== void 0 && a.isNew, s = [], t = [];i < c;i++) {
      if(k = d[i], f = k.key, g = {}, n = {}, s.length = 0, t.length = 0, !r || !k.nullOnCreate) {
        if(k.notNull === !0) {
          for(j = 0;j < l;j++) {
            if(b[j].hasOwnProperty(f) === !1 || e.isEmptyString(q = b[j][f])) {
              return this.grid.error("BAD_NULL", f)
            }
            s.push(q);
            t.push(q.toString())
          }
        }else {
          for(j = 0;j < l;j++) {
            q = void 0, b[j].hasOwnProperty(f) === !1 || e.isNull(q = b[j][f]) ? (g[j] = !0, n[j] = !0) : q === "" && (n[j] = !0), s.push(q), g.hasOwnProperty(j) ? t.push("") : t.push(q.toString())
          }
        }
        if(e.isNotNull(o = k.max)) {
          for(j = 0;j < l;j++) {
            if(n.hasOwnProperty(j) === !1 && s[j] > o) {
              return this.grid.error("BIGGER_THAN", s[j], f, o)
            }
          }
        }
        if(e.isNotNull(o = k.min)) {
          for(j = 0;j < l;j++) {
            if(n.hasOwnProperty(j) === !1 && s[j] < o) {
              return this.grid.error("SMALLER_THAN", s[j], f, o)
            }
          }
        }
        if(e.isNotNull(o = k.length)) {
          for(j = 0;j < l;j++) {
            if(g.hasOwnProperty(j) === !1 && (n.hasOwnProperty(j) || t[j].length !== o)) {
              return this.grid.error("WRONG_LENGTH", t[j], o, f)
            }
          }
        }else {
          if(e.isNotNull(o = k.maxlength)) {
            for(j = 0;j < l;j++) {
              if(n.hasOwnProperty(j) === !1 && t[j].length > o) {
                return this.grid.error("DATA_TOO_LONG", t[j], f, o)
              }
            }
          }
          if(e.isNotNull(o = k.minlength)) {
            for(j = 0;j < l;j++) {
              if(g.hasOwnProperty(j) === !1 && (n.hasOwnProperty(j) || t[j].length < o)) {
                return this.grid.error("DATA_TOO_SHORT", t[j], f, o)
              }
            }
          }
        }
        if(e.isFunction(k = k.validator)) {
          try {
            for(j = 0;j < l;j++) {
              if(k(s[j], b[j], t[j], g.hasOwnProperty(j), n.hasOwnProperty(j)) !== !0) {
                return this.grid.error("WRONG_VALUE", t[j], f)
              }
            }
          }catch(u) {
            return this.grid.error("WRONG_VALUE", t[j], f)
          }
        }
      }
    }
    return!0
  };
  c.makeCompositeKey = function(b, a) {
    if(!(this._idMode !== this._consts._composite || e.isNull(b))) {
      if(a === !0 || b.hasOwnProperty(this.idKey) === !1) {
        for(var d = this._options.idColKeys, c = d.length, l = 0, k = "";l < c;l++) {
          k += "&" + b[d[l]]
        }
        b[this.idKey] = k
      }
    }
  };
  c.makeCompositeKeyList = function(b, a) {
    if(!(this._idMode !== this._consts._composite || b.length === 0)) {
      var d = this.idKey, c = b.length, l = this._options.idColKeys, e = l.length, f, i = 0, j, g;
      if(a === !0) {
        for(;i < c;i++) {
          f = b[i];
          g = "";
          for(j = 0;j < e;j++) {
            g += "&" + f[l[j]]
          }
          f[d] = g
        }
      }else {
        for(;i < c;i++) {
          if((f = b[i]).hasOwnProperty(d) === !1) {
            g = "";
            for(j = 0;j < e;j++) {
              g += "&" + f[l[j]]
            }
            f[d] = g
          }
        }
      }
    }
  };
  c.map = function(b) {
    if(!e.isNull(b)) {
      var a = this._idToData, d = this.idKey, c;
      this.makeCompositeKey(b);
      if(b.hasOwnProperty(d) && a.hasOwnProperty(c = b[d])) {
        return a[c]
      }
    }
  };
  c.mapList = function(b) {
    if(e.isEmptyArray(b)) {
      return{mapped:[], unmapped:[]}
    }
    this.makeCompositeKeyList(b);
    for(var a = [], d = [], c = this.idKey, l = this._idToData, k = b.length, f = 0, i, j;f < k;f++) {
      (i = b[f]).hasOwnProperty(c) && l.hasOwnProperty(j = i[c]) ? a.push(l[j]) : d.push(i)
    }
    return{mapped:a, unmapped:d}
  };
  c.getById = function(b) {
    if(e.isNotNull(b) && this._idToData.hasOwnProperty(b)) {
      return this._idToData[b]
    }
  };
  c.getByIdx = function(b) {
    if(e.isNotNull(b) && this.datalist.hasOwnProperty(b)) {
      return this.datalist[b]
    }
  };
  c.getByNode = function(b) {
    return this.getById(this.getIdByNode(b))
  };
  c.getIdx = function(b) {
    return this.getIdxById(this.getId(b))
  };
  c.getIdxById = function(b) {
    return e.isNotNull(b) && this._idToIdx.hasOwnProperty(b) ? this._idToIdx[b] : -1
  };
  c.getIdxByNode = function(b) {
    return this.getIdxById(this.getIdByNode(b))
  };
  c.getId = function(b) {
    if(e.isNotNull(b) && b.hasOwnProperty(this.idKey)) {
      return b[this.idKey]
    }
  };
  c.getIdByIdx = function(b) {
    return this.getId(this.getByIdx(b))
  };
  c.getIdByNode = function(b) {
    if(e.isNotNull(b)) {
      return b.getAttribute("i")
    }
  };
  c._reidxFrom = function(b) {
    e.isNull(b) && (b = 0);
    for(var a = this.datalist, d = a.length, c = this.idKey, l = this._idToIdx;b < d;b++) {
      l[a[b][c]] = b
    }
  };
  c._reidx = function() {
    this._idToIdx = {};
    this._reidxFrom()
  };
  c.has = function(b) {
    return this.hasById(this.getId(b))
  };
  c.hasById = function(b) {
    return e.isNotNull(b) ? this._idToIdx.hasOwnProperty(b) : !1
  };
  c.contains = function(b) {
    return this.containsById(this.getId(b))
  };
  c.containsById = function(b) {
    return e.isNotNull(b) ? this._idToData.hasOwnProperty(b) : !1
  };
  c.set = function(b) {
    if(this.all === b || e.isEmptyArray(b) && this.all === 0) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange");
    this.grid.event.trigger("onBeforeSetDatalist", [this.all, b]);
    this.cleanList(this.all);
    var a, d = this.uniqueMap;
    for(a in d) {
      d.hasOwnProperty(a) && (d[a] = {})
    }
    this._idToData = {};
    this.all = [];
    this._history.length = 0;
    this._redoHistory.length = 0;
    e.isNull(b) && (b = []);
    if((a = this.parseList(b)) instanceof Error) {
      return a
    }
    if((a = this.validateList(b)) instanceof Error) {
      return a
    }
    if((a = this.addListToUniqueMap(b)) instanceof Error) {
      return a
    }
    this.makeCompositeKeyList(b, !0);
    if((a = this.addListToIdMap(b)) instanceof Error) {
      return a
    }
    this.all = b;
    this.grid.event.trigger("onAfterSetDatalist", [b]);
    this.grid.event.trigger("onDataChange");
    this.refresh();
    return!0
  };
  c.add = function(b, a) {
    if(e.isNull(b) || e.isNotNull(this.map(b))) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange");
    this.fillTemp(b, a);
    var d;
    if((d = this.parse(b, a)) instanceof Error) {
      return d
    }
    if((d = this.validate(b, a)) instanceof Error) {
      return d
    }
    if((d = this.addToUniqueMap(b)) instanceof Error) {
      return d
    }
    if((d = this.addToIdMap(b)) instanceof Error) {
      return d
    }
    this.all.push(b);
    if(e.isNull(a) || a.undo !== !0) {
      this._history.push({_action:this._consts._add, _target:b}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onAddDatarow", [b, a]);
    this.grid.event.trigger("onDataChange");
    (a === void 0 || a.noRefresh !== !0) && this.refresh(a);
    return!0
  };
  c.addList = function(b, a) {
    if(e.isEmptyArray(b)) {
      return!1
    }
    var d = this.mapList(b).unmapped;
    if(d.length === 0) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange");
    this.fillTempList(b, a);
    var c;
    if((c = this.parseList(d, a)) instanceof Error) {
      return c
    }
    if((c = this.validateList(d, a)) instanceof Error) {
      return c
    }
    if((c = this.addListToUniqueMap(d)) instanceof Error) {
      return c
    }
    if((c = this.addListToIdMap(d)) instanceof Error) {
      return c
    }
    this.all.pushList(d);
    if(e.isNull(a) || a.undo !== !0) {
      this._history.push({_action:this._consts._addList, _target:d}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onAddDatalist", [d, a]);
    this.grid.event.trigger("onDataChange");
    (a === void 0 || a.noRefresh !== !0) && this.refresh(a);
    return!0
  };
  c.updateByKey = function(b, a, d, c) {
    var l = {};
    l[a] = d;
    return this.update(b, l, c)
  };
  c.update = function(b, a, d) {
    if(e.isNullOr(b, a)) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange");
    this.grid.event.trigger("onBeforeUpdateDatarow", [b, a]);
    var c = {}, l;
    for(l in a) {
      a.hasOwnProperty(l) && (b[l] === a[l] ? delete a[l] : (c[l] = b[l], b[l] = a[l]))
    }
    if(e.isEmptyObj(c)) {
      return!1
    }
    if((l = this.parse(b, d)) instanceof Error) {
      return this._rollback(b, c), l
    }
    if((l = this.validate(b, d)) instanceof Error) {
      return this._rollback(b, c), l
    }
    if((l = this.updateUniqueMap(b, a, c)) instanceof Error) {
      return this._rollback(b, c), l
    }
    if((l = this.updateIdMap(b, a, c)) instanceof Error) {
      return this._rollback(b, c), l
    }
    l !== !1 && this.grid.event.trigger("onIdChange", [b, l, b[this.idKey]]);
    if(e.isNull(d) || d.undo !== !0) {
      this._history.push({_action:this._consts._update, _target:b, _before:c, _change:a}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onUpdateDatarow", [b, a, c, d]);
    this.grid.event.trigger("onDataChange");
    (d === void 0 || d.noRefresh !== !0) && this.refresh(d);
    return!0
  };
  c.updateList = function(b, a) {
    if(e.isEmptyArray(b)) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange");
    this.grid.event.trigger("onBeforeUpdateDatalist", [b]);
    for(var d = [], c = [], l = [], k, f, i, j = b.length, g = 0, n;g < j;g++) {
      f = {};
      k = b[g].datarow;
      i = b[g].change;
      for(n in i) {
        i.hasOwnProperty(n) && (k[n] === i[n] ? delete i[n] : (f[n] = k[n], k[n] = i[n]))
      }
      e.isNotEmptyObj(f) && (d.push(k), c.push(f), l.push(i))
    }
    if(d.length === 0) {
      return!1
    }
    if((k = this.parseList(d, a)) instanceof Error) {
      return this._rollbackList(d, c), k
    }
    if((k = this.validateList(d, a)) instanceof Error) {
      return this._rollbackList(d, c), k
    }
    if((k = this.updateListUniqueMap(d, l, c)) instanceof Error) {
      return this._rollbackList(d, c), k
    }
    if((k = this.updateListIdMap(d, l, c)) instanceof Error) {
      return this._rollbackList(d, c), k
    }
    k !== !1 && this.grid.event.trigger("onIdListChange", [k.list, k.befores, this.idKey]);
    if(e.isNull(a) || a.undo !== !0) {
      this._history.push({_action:this._consts._updateList, _target:d, _before:c, _change:l}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onUpdateDatalist", [d, l, c, a]);
    this.grid.event.trigger("onDataChange");
    (a === void 0 || a.noRefresh !== !0) && this.refresh(a);
    return!0
  };
  c._rollback = function(b, a) {
    for(var d in a) {
      a.hasOwnProperty(d) && (b[d] = a[d])
    }
  };
  c._rollbackList = function(b, a) {
    for(var d = b.length, c = 0, l, e, f;c < d;c++) {
      for(f in l = b[c], e = a[c], e) {
        e.hasOwnProperty(f) && (l[f] = e[f])
      }
    }
  };
  c.remove = function(b, a) {
    if(e.isNull(b)) {
      return!1
    }
    var d = this.map(b);
    if(e.isNull(d)) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange");
    this.removeFromIdMap(d);
    this.removeFromUniqueMap(d);
    this.all.remove(d);
    this.removeId(d);
    if(e.isNull(a) || a.undo !== !0) {
      this._history.push({_action:this._consts._remove, _target:d}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onRemoveDatarow", [d, a]);
    this.grid.event.trigger("onDataChange");
    (a === void 0 || a.noRefresh !== !0) && this.refresh(a);
    return!0
  };
  c.removeList = function(b, a) {
    if(e.isEmptyArray(b)) {
      return!1
    }
    var d = this.mapList(b).mapped;
    if(d.length === 0) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange");
    this.removeListFromIdMap(d);
    this.removeListFromUniqueMap(d);
    this.all.removeList(d);
    this.cleanList(d);
    if(e.isNull(a) || a.undo !== !0) {
      this._history.push({_action:this._consts._removeList, _target:d}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onRemoveDatalist", [d, a]);
    this.grid.event.trigger("onDataChange");
    (a === void 0 || a.noRefresh !== !0) && this.refresh(a);
    return!0
  };
  c._keydownCanvas = function(b) {
    if(b.ctrlKey) {
      switch(b.which) {
        case "Z".charCodeAt(0):
          this.undo();
          break;
        case "Y".charCodeAt(0):
          this.redo()
      }
    }
  };
  c.undo = function() {
    if(this._history.length === 0) {
      return!1
    }
    var b = this._history.pop();
    this._redoHistory.push(b);
    var a = b._target, d = b._before;
    switch(b._action) {
      case this._consts._add:
        return this.remove(a, {undo:!0});
      case this._consts._addList:
        return this.removeList(a, {undo:!0});
      case this._consts._update:
        return this.update(a, d, {undo:!0});
      case this._consts._updateList:
        for(var b = [], c = 0, l = a.length;c < l;c++) {
          b.push({datarow:a[c], change:d[c]})
        }
        return this.updateList(b, {undo:!0});
      case this._consts._remove:
        return this.add(a, {undo:!0});
      case this._consts._removeList:
        return this.addList(a, {undo:!0})
    }
  };
  c.redo = function() {
    if(this._redoHistory.length === 0) {
      return!1
    }
    var b = this._redoHistory.pop();
    this._history.push(b);
    var a = b._target, d = b._change;
    switch(b._action) {
      case this._consts._add:
        return this.add(a, {undo:!0});
      case this._consts._addList:
        return this.addList(a, {undo:!0});
      case this._consts._update:
        return this.update(a, d, {undo:!0});
      case this._consts._updateList:
        for(var b = [], c = 0, l = a.length;c < l;c++) {
          b.push({datarow:a[c], change:d[c]})
        }
        return this.updateList(b, {undo:!0});
      case this._consts._remove:
        return this.remove(a, {undo:!0});
      case this._consts._removeList:
        return this.removeList(a, {undo:!0})
    }
  };
  c.equals = function(b, a) {
    if(e.isNullOr(b, a)) {
      return!1
    }
    if(b === a) {
      return!0
    }
    this._idMode === this._consts._composite && (this.makeCompositeKey(b), this.makeCompositeKey(a));
    var d = this.idKey;
    return e.isNull(b[d]) || e.isNull(a[d]) ? !1 : b[d] === a[d]
  };
  c.getReal = function() {
    var b = this._consts._notReal;
    return this.all.filter(function(a) {
      return a.hasOwnProperty(b) === !1
    })
  };
  c.filterReal = function(b) {
    var a = this._consts._notReal;
    return b.filter(function(d) {
      return d.hasOwnProperty(a) === !1
    })
  };
  c.isReal = function(b) {
    return e.isNotNull(b) && b.hasOwnProperty(this._consts._notReal) === !1
  };
  c.dropNonReal = function(b) {
    if(!e.isEmptyArray(b)) {
      for(var a = this._consts._notReal, d = b.length - 1;d >= 0;d--) {
        b[d].hasOwnProperty(a) && (delete b[d][a], b.removeAt(d))
      }
    }
  };
  c.removeIdCol = function(b) {
    if(!(this._idMode === this._consts._given || e.isEmptyArray(b))) {
      for(var a = this.idKey, d = 0, c = b.length;d < c;d++) {
        b[d].hasOwnProperty(a) && delete b[d][a]
      }
    }
  };
  c.removeId = function(b) {
    e.isNotNull(b) && this._idMode !== this._consts._given && b.hasOwnProperty(this.idKey) && delete b[this.idKey]
  };
  c.cleanList = function(b) {
    e.isEmptyArray(b) || (this.removeIdCol(b), this.dropNonReal(b))
  };
  c.purify = function(b) {
    if(b !== void 0) {
      b = this.all
    }
    if(e.isEmptyArray(b)) {
      return[]
    }
    for(var a = [], d = b.length, c = 0, l, f, m = this._consts._notReal;c < d;c++) {
      if((f = b[c]).hasOwnProperty(m) === !1) {
        for(l in a.push({}), f) {
          f.hasOwnProperty(l) && f.hasOwnProperty(l) && l.substring(0, 3)
        }
      }
    }
    return a
  };
  c.setSorter = function(b) {
    this.grid.event.trigger("onChangeSorter", [this._sorter, b]);
    this._sorter = b
  };
  c._sort = function(b) {
    e.isNull(b) ? b = this._sorter : this.setSorter(b);
    if(!e.isNull(b)) {
      var a = this.all;
      this.grid.event.trigger("onBeforeSort", [a]);
      e.isNotNull(b.comparator) ? (a.sort(b.comparator), b.desc && a.reverse()) : e.isNotNull(b.lexi) && this.constructor._lexi(a, b.lexi, b.desc);
      this.grid.event.trigger("onAfterSort", [a])
    }
  };
  c.addFilter = function(b) {
    this._filters.push(b);
    this.refresh()
  };
  c.removeFilter = function(b) {
    var a = this._filters.length;
    this._filters.remove(b);
    a !== this._filters.length && this.refresh()
  };
  c._filter = function() {
    var b = this.datalist, a = this.failed, d = 0, c = this._filters.length, l, e;
    this.grid.event.trigger("onBeforeFilter", [b, a]);
    b.length = 0;
    b.pushList(this.all);
    for(a.length = 0;d < c;d++) {
      l = this._filters[d];
      for(e = b.length - 1;e >= 0;e--) {
        l(b[e]) || (a.push(b[e]), b.removeAt(e))
      }
    }
    this.grid.event.trigger("onFilter", [b, a]);
    this.grid.event.trigger("onAfterFilter", [b, a])
  };
  c._finish = function(b) {
    this._reidx();
    this.grid.event.trigger("onAfterRefresh", [b])
  };
  c.refresh = function(b) {
    this.grid.event.trigger("onBeforeRefresh");
    b === void 0 ? this._sort() : b.noSort !== !0 && this._sort(b.sorter);
    (b === void 0 || b.noFilter !== !0) && this._filter();
    this._finish(b)
  };
  c.exportRowToArray = function(b, a) {
    if(!(b in this.datalist)) {
      return null
    }
    a || (a = this.grid.colDefMgr.getKeys());
    for(var d = this.datalist[b], c = [], l, e = 0, f = a.length;e < f;e++) {
      l = a[e], c.push(l in d ? d[l] : null)
    }
    return c
  };
  c.exportToArray = function(b, a, d) {
    b || (b = this.grid.colDefMgr.getKeys());
    for(var a = this.datalist.slice(a, d), c = [], l, e, f = 0, i = a.length, j, g = b.length;f < i;f++) {
      l = a[f];
      j = 0;
      for(d = [];j < g;j++) {
        e = b[j], d.push(e in l ? l[e] : null)
      }
      c.push(d)
    }
    return c
  };
  f._lexi = function(b, a, d) {
    var c = Object.prototype.toString;
    Object.prototype.toString = e.isFunction(a) ? a : function() {
      return this[a]
    };
    b.sort();
    Object.prototype.toString = c;
    d && b.reverse()
  }
})();
jx.grid.EventManager = {};
(function() {
  function f(b) {
    this.mid = b.mid;
    this.grid = b.grid;
    b.grid.event = this;
    this._map = {}
  }
  var g = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.EventManager", f);
  f.getInstance = function(b) {
    return new f(b)
  };
  var c = f.prototype;
  c.destroy = function() {
    var b, a = this._map;
    for(b in a) {
      a.hasOwnProperty(b) && g._deleteArray(a, b)
    }
    g._destroy(this, {name:"EventManager", path:"event", map:"map"})
  };
  c.register = function(b, a, d) {
    if(e.isString(b)) {
      this._parseAndAdd(b, a, d)
    }else {
      if(e.isNotNull(b.e)) {
        this._parseAndAdd(b.e, b.f, b.t)
      }else {
        for(var c, a = b.length, l;c < a;c++) {
          e.isNotNull(l = b[c]) && this._parseAndAdd(l.e, l.f, l.t)
        }
      }
    }
  };
  c.bind = function(b, a, d) {
    if(e.isString(b)) {
      this._parseAndAdd(b, a, d)
    }else {
      for(var c in b) {
        b.hasOwnProperty(c) && this._parseAndAdd(c, b[c], a)
      }
    }
  };
  c._parseAndAdd = function(b, a, d) {
    e.isNull(d) && (d = window);
    var b = e.split(b), c = b.length, l = 0;
    if(e.isFunction(a)) {
      for(;l < c;l++) {
        this._addHandler(b[l], a, d)
      }
    }else {
      if(e.isString(a)) {
        for(var a = e.split(a), f = a.length, m, i;l < c;l++) {
          m = b[l];
          for(i = 0;i < f;i++) {
            this._addHandler(m, d[a[i]], d)
          }
        }
      }else {
        for(f = a.length;l < c;l++) {
          m = b[l];
          for(i = 0;i < f;i++) {
            this._addHandler(m, a[i], d)
          }
        }
      }
    }
  };
  c._addHandler = function(b, a, d) {
    this._map.hasOwnProperty(b) || (this._map[b] = []);
    this._map[b].push({fn:a, target:d})
  };
  c.unregister = function(b, a) {
    var d = this._map;
    if(d.hasOwnProperty(b)) {
      var c = d[b];
      if(e.isNull(a)) {
        c.length = 0, delete d[b]
      }else {
        for(var l = 0, f = c.length;l < f;l++) {
          if(c[l].fn === a) {
            c.removeAt(l);
            c.length === 0 && delete d[b];
            break
          }
        }
      }
    }
  };
  c.trigger = function(b, a, d) {
    for(var c, l, f = this._map, m = [], b = e.split(b), i = b.length, g = e.isEmptyArray(a), p = e.isFunction(d), n, q = 0;q < i;q++) {
      if(c = b[q], f.hasOwnProperty(c) && (c = f[c], l = c.length, l !== 0)) {
        if(n = 0, p) {
          var o;
          if(g) {
            for(;n < l;n++) {
              o = c[n].fn.call(c[n].target), d(o) && m.push(o)
            }
          }else {
            for(;n < l;n++) {
              o = c[n].fn.apply(c[n].target, a), d(o) && m.push(o)
            }
          }
        }else {
          if(g) {
            for(;n < l;n++) {
              m.push(c[n].fn.call(c[n].target))
            }
          }else {
            for(;n < l;n++) {
              m.push(c[n].fn.apply(c[n].target, a))
            }
          }
        }
      }
    }
    return m
  };
  c.triggerInvalid = function(b, a) {
    return this.trigger(b, a, function(d) {
      return d === !1
    }).length !== 0
  };
  c.sendToBack = function(b, a) {
    for(var d = this._map[b], c = d.length, l, e = -1, f = 0;f < c;f++) {
      if(d[f].fn === a) {
        e = f;
        l = d[f];
        break
      }
    }
    e > -1 && (d.removeAt(f), d.push(l))
  };
  c.sendToFront = function(b, a) {
    for(var d = this._map[b], c = d.length, l, e = -1, f = 0;f < c;f++) {
      if(d[f].fn === a) {
        e = f;
        l = d[f];
        break
      }
    }
    e > -1 && (d.removeAt(f), d.unshift(l))
  }
})();
jx.grid.Grid = {};
(function() {
  function f(a) {
    this.mid = a.mid;
    c.call(this, a)
  }
  var g = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util"), c = goog.getObjectByName("jx.grid.BaseModule");
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
  f.V_INIT = 1;
  goog.inherits(f, c);
  f.getInstance = function(a) {
    return new f(a)
  };
  var b = f.prototype;
  b._defaultOptions = function() {
    return{classGrid:"jgrid", border:"1px solid #868686", width:void 0, font:"15px Arial,Helvetica,sans-serif", style:"", borderSide:!0, imageUrl:"../images/", links:{data:"dataMgr.all", datalen:"dataMgr.all.length", shown:"dataMgr.datalist", set:"dataMgr.set", add:"dataMgr.add", addList:"dataMgr.addList", update:"dataMgr.update", updateByKey:"dataMgr.updateByKey", updateList:"dataMgr.updateList", remove:"dataMgr.remove", removeList:"dataMgr.removeList", select:"dataMgr.executeSelect", undo:"dataMgr.undo", 
    redo:"dataMgr.redo", addFilter:"dataMgr.addFilter", removeFilter:"dataMgr.removeFilter", check:"collapser.checkMgr.checkList checkMgr.checkList", checked:"collapser.checkMgr.getCheckList checkMgr.getCheckList", removeChecked:"collapser.checkMgr.removeChecked checkMgr.removeChecked", register:"event.register", trigger:"event.trigger", bind:"event.bind", unregister:"event.unregister", unbind:"event.unregister", collen:"colDefMgr.length"}, autoWidth:!1, showMessage:!1}
  };
  b._init = function(a) {
    var d = this._ctnr = a.container, b = this._options, c;
    this.name = b.name;
    this._drag = !1;
    this._lastH = this._lastW = null;
    this._vars = {scrollbarDim:void 0};
    d = this._ctnr = $("<div id='" + this.mid + "' class='" + b.classGrid + "' " + (e.isNull(b.width) ? "" : "style='width:" + b.width + "px' ") + "tabIndex='0'>").appendTo(Util$.safe$(d));
    this._vars.scrollbarDim = Util$.calScrollbarDims(d);
    c = this.event = g.create("EventManager", {grid:this, options:b.EventManager});
    this.colDefMgr = g.create("ColumnManager", {grid:this, colDefs:a.colDefs, options:b.ColDefManager});
    this.dataMgr = g.create("DataManager", {grid:this, datalist:a.datalist, options:b.DataManager});
    b.CheckManager && (this.checkMgr = g.create("CheckManager", {grid:this, options:b.CheckManager}));
    if(b.Collapser) {
      this.collapser = g.create("Collapser", {grid:this, options:b.Collapser}), this.collapser.__init()
    }
    b.ColGroup && (this.colGroup = g.create("ColumnGroup", {grid:this, options:b.ColGroup}));
    b.SelectionManager && (this.selMgr = g.create("SelectionManager", {grid:this, options:b.SelectionManager}));
    b.EditManager && (this.editMgr = g.create("EditManager", {grid:this, options:b.EditManager}));
    b.ColHeader && (this.header = g.create("ColumnHeader", {grid:this, container:d, options:b.ColHeader}));
    b.SearchManager && (this.search = g.create("SearchManager", {grid:this, container:d, options:b.SearchManager}));
    b.MenuBar && (this.menubar = g.create("MenuBar", {grid:this, container:d, options:b.MenuBar}));
    this.view = g.create("ViewportManager", {grid:this, container:d, options:b.ViewportManager});
    b.TooltipManager && (this.tooltip = g.create("TooltipManager", {grid:this, container:d, options:b.TooltipManager}));
    b.DataCreator && (this.creator = g.create("DataCreator", {grid:this, container:d, options:b.DataCreator}));
    b.Footer && (this.footer = g.create("Footer", {grid:this, container:d, options:b.Footer}));
    b.autoWidth && c.bind("onResizeCanvasWidth", this.width, this);
    this._createCss();
    c.trigger("onBeforeRenderModules onRenderModules onAfterRenderModules");
    this.msg = $("<div id='" + this.mid + "msg' class='msg' onmousedown='$(this).hide(1000)' style='position:relative;padding-left:4px;overflow:hidden;z-index:100;font-size:12px;height:21px;line-height:21px'></div>").appendTo(d).hide();
    d = d[0];
    this._lastW = d.clientWidth;
    this._lastH = d.clientHeight;
    this._registerLinks(b.links)
  };
  b._bindEvents = function() {
    g._bindGlobalEvents();
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
  b.destroy = function() {
    try {
      this.dispatchEvent({type:"beforeDispose"}), e.isEmptyObj(g.m.Grid) && g._unbindGlobalEvents(), this.event.trigger("onDestroy"), g._destroy(this, {name:"Grid", module:"event", $:"ctnr", map:"vars _options", style:"style _dynStyle"}), this.dispose()
    }catch(a) {
      return a
    }
  };
  b._registerLinks = function(a) {
    var d, b, c, f, m, i, g, p, n, q;
    a:for(d in a) {
      if(a.hasOwnProperty(d) && !(d in this)) {
        b = e.split(a[d]);
        c = b.length;
        f = 0;
        b:for(;f < c;f++) {
          if(m = b[f].split("."), i = m.length, !(i < 1)) {
            g = this;
            p = this;
            n = "";
            for(q = 0;q < i;q++) {
              if(m[q] in g) {
                p = g, g = g[n = m[q]]
              }else {
                continue b
              }
            }
            this._registerLink(d, g, p, n);
            continue a
          }
        }
      }
    }
  };
  b._registerLink = function(a, d, b, c) {
    if(this.hasOwnProperty(a)) {
      return!1
    }
    this[a] = e.isFunction(d) ? function() {
      return d.apply(b, arguments)
    } : function() {
      return b[c]
    };
    return!0
  };
  b._createCss = function() {
    var a = {type:"beforeCreateCss", css:[]}, d = this._options, b = this.event;
    this.dispatchEvent(a);
    a = e.sprint("%selector%{overflow:hidden;font:%font%;%border%%style%}%submodule%", {selector:"#" + this.mid, font:d.font, border:d.borderSide ? "border:" + d.border + ";" : "border-top:" + d.border + ";border-bottom:" + d.border + ";", style:d.style, submodule:a.css.join("") + b.trigger("onCreateCss").join("")});
    this._style = e.createStyle(a);
    a = {type:"beforeCreateDynamicCss", css:[]};
    this.dispatchEvent(a);
    this._dynStyle = e.createStyle(a.css.join("") + ";" + b.trigger("onCreateDynamicCss").join(""))
  };
  b._recreateDynamicCss = function() {
    e.setStyle(this._dynStyle, this.event.trigger("onCreateDynamicCss").join(""))
  };
  b._keydown = function(a) {
    var d = this.event;
    d.triggerInvalid("onBeforeKeydown", [a]) || d.trigger("keydown_" + a.which + " keydown", [a])
  };
  b._keyup = function(a) {
    var d = this.event;
    d.triggerInvalid("onBeforeKeyup", [a]) || d.trigger("keyup_" + a.which + " keyup", [a])
  };
  b._keypress = function(a) {
    var d = this.event;
    d.triggerInvalid("onBeforeKeypress", [a]) || d.trigger("keypress_" + a.which + " keypress", [a])
  };
  b._mousein = function(a) {
    var d = this.event;
    d.triggerInvalid("onBeforeMousein", [a]) || (this._drag ? d.trigger("dragin mousein", [a]) : d.trigger("mousein", [a]))
  };
  b._mouseout = function(a) {
    var d = this.event;
    d.triggerInvalid("onBeforeMouseout", [a]) || (this._drag ? d.trigger("dragout mouseout", [a]) : d.trigger("mouseout", [a]))
  };
  b._mouseenter = function(a) {
    var d = this.event;
    d.triggerInvalid("onBeforeMouseenter", [a]) || (this._drag ? d.trigger("dragenter mouseenter", [a]) : d.trigger("mouseenter", [a]))
  };
  b._mouseleave = function(a) {
    var d = this.event;
    d.triggerInvalid("onBeforeMouseleave", [a]) || (this._drag ? d.trigger("dragleave mouseleave", [a]) : d.trigger("mouseleave", [a]))
  };
  b._mousemove = function(a) {
    var d = this.event;
    d.triggerInvalid("onBeforeMousemove", [a]) || (this._drag ? d.trigger("dragmove mousemove", [a]) : d.trigger("mousemove", [a]))
  };
  b._mouseover = function(a) {
    var d = this.event;
    d.triggerInvalid("onBeforeMouseover", [a]) || (this._drag ? d.trigger("dragover mouseover", [a]) : d.trigger("mouseover", [a]))
  };
  b._mousedown = function(a) {
    var d = this.event;
    this._drag = !0;
    d.triggerInvalid("onBeforeMousedown", [a]) || d.trigger("mousedown", [a])
  };
  b._mouseup = function(a) {
    var d = this.event;
    this._drag = !1;
    d.trigger("unsetDrag");
    this.containsEvent(a) && (d.triggerInvalid("onBeforeMouseup", [a]) || d.trigger("mouseup", [a]))
  };
  b._click = function(a) {
    var d = this.event;
    d.triggerInvalid("onBeforeClick", [a]) || d.trigger("click", [a])
  };
  b._dblclick = function(a) {
    var d = this.event;
    d.triggerInvalid("onBeforeDblclick", [a]) || d.trigger("dblclick", [a])
  };
  b._resize = function(a) {
    var d = this.event, b = !1, c = this._ctnr[0], e = this._lastW, f = this._lastH, i = c.clientWidth, c = c.clientHeight;
    if(i >= 1 && e !== i) {
      d.trigger("resizeWidth", [i, e]), this._lastW = i, b = !0
    }
    if(c >= 1 && f !== c) {
      d.trigger("resizeHeight", [c, f]), this._lastH = c, b = !0
    }
    b && d.trigger("resize", [a])
  };
  b.width = function(a) {
    var d = this._ctnr[0], b = d.clientWidth, c = this.event;
    if(!a) {
      return b
    }
    typeof a != "number" && (a = parseInt(a));
    if(a < 1 || a === b || !isFinite(a)) {
      return b
    }
    d.style.width = a + "px";
    c.trigger("resizeWidth", [a, this._lastW]);
    this._lastW = a;
    c.trigger("resize");
    return a
  };
  b.height = function(a) {
    var d = this._ctnr[0], b = d.clientHeight, c = this.event;
    if(!a) {
      return b
    }
    typeof a != "number" && (a = parseInt(a));
    if(a < 1 || a === b || !isFinite(a)) {
      return b
    }
    d.style.height = a + "px";
    c.trigger("resizeHeight", [a, this._lastH]);
    this._lastH = a;
    c.trigger("resize");
    return a
  };
  b.getCellByIdAndKey = function(a, d) {
    return g.create("Cell", {grid:this, datarow:this.dataMgr.getById(a), colDef:this.colDefMgr.getByKey(d)})
  };
  b.getCellByIdx = function(a, d) {
    return g.create("Cell", {grid:this, row:a, col:d})
  };
  b.error = function(a) {
    for(var d = g.error[a], b = 1, c = arguments.length;b < c;b++) {
      d = d.replace(RegExp("%" + (b - 1), "g"), arguments[b])
    }
    d = Error(d);
    d.code = a;
    this.printError(d.message);
    this.event.trigger("onError", [d]);
    return d
  };
  b.printError = function(a) {
    if(this._options.showMessage) {
      var d = this.msg, b = d[0], c = b.style;
      b.innerHTML = a;
      c.width = this._ctnr[0].clientWidth + "px";
      c.background = "#ffebe8";
      c.color = "#333";
      d.show();
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function() {
        d.hide(1E3)
      }, 5E3)
    }
  };
  b.printMessage = function(a) {
    if(this._options.showMessage) {
      var d = this.msg, b = d[0], c = b.style;
      b.innerHTML = a;
      c.width = this._ctnr[0].clientWidth + "px";
      c.background = "#dfdfdf";
      c.color = "#6f6f6f";
      d.show();
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function() {
        d.hide(1E3)
      }, 5E3)
    }
  };
  b.containsEvent = function(a) {
    return e.contains(this._ctnr[0], a.target)
  };
  b.getChart = function(a) {
    return this._charts[a]
  };
  b.log = function() {
  };
  b.chart = function(a, d, b, c) {
    var e, d = d.toLowerCase();
    switch(d) {
      case "area":
        d = "corechart";
        e = "AreaChart";
        break;
      case "bar":
        d = "corechart";
        e = "BarChart";
        break;
      case "candle":
        d = "corechart";
        e = "CandlestickChart";
        break;
      case "column":
        d = "corechart";
        e = "ColumnChart";
        break;
      case "combo":
        d = "corechart";
        e = "ComboChart";
        break;
      case "gauge":
        d = "gauge";
        e = "Gauge";
        break;
      case "geo":
        d = "geochart";
        e = "GeoChart";
        break;
      case "line":
        d = "corechart";
        e = "LineChart";
        break;
      case "pie":
        d = "corechart";
        e = "PieChart";
        break;
      case "scatter":
        d = "corechart";
        e = "ScatterChart";
        break;
      case "table":
        d = "table";
        e = "Table";
        break;
      case "treemap":
        d = "treemap";
        e = "TreeMap";
        break;
      default:
        throw Error("unknown chart type: " + d);
    }
    google.load("visualization", "1", {packages:[d]});
    var f = this, i = this.colDefMgr, g = this.dataMgr, p = b.map(function(d) {
      if(d = i.getByKey(d)) {
        return d
      }
      throw Error("column key not found");
    }), n = g.exportToArray(b);
    google.setOnLoadCallback(function() {
      for(var d = new google.visualization.DataTable, i = 0, r = p.length, s, t;i < r;i++) {
        s = p[i];
        t = s.type;
        switch(t) {
          case "boolean":
            t = "boolean";
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
            t = "number";
            break;
          case "string":
          ;
          case "text":
            t = "string"
        }
        d.addColumn(t || i === 0 && "string" || "number", s.name)
      }
      d.addRows(n);
      var u = f._charts[a] = new google.visualization[e](document.getElementById(a));
      u.draw(d, c);
      f.event.bind("onAfterRefresh", function() {
        d.removeRows(0, d.getNumberOfRows());
        d.addRows(g.exportToArray(b));
        u.draw(d, c)
      })
    })
  }
})();
jx.grid.TooltipManager = {};
(function() {
  function f(b) {
    this.mid = b.mid;
    this.grid = b.grid;
    this.grid.tooltip = this;
    this._ctnr = b.container;
    this._options = g._extend({classTooltip:"jgrid-tooltip", tooltipSyncEnabled:!0, offsetX:0, offsetY:18, background:"#F5F5F5", border:"1px solid #868686", padding:"2px 10px", font:"14px Arial,Helvetica,sans-serif", color:"#333"}, b.options);
    this.__init()
  }
  var g = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.TooltipManager", f);
  f.getInstance = function(b) {
    return new f(b)
  };
  var c = f.prototype;
  c.__init = function() {
    this.grid.event.bind({onCreateCss:this._onCreateCss, onDestroy:this._destroy, mouseoutCanvas:this._mouseoutCanvas, mousemoveCanvas:this._mousemoveCanvas, mouseoverCanvas:this._mouseoverCanvas}, this)
  };
  c._destroy = function() {
    g._destroy(this, {name:"TooltipManager", path:"tooltip", $:"tooltip", property:"ctnr", map:"options"})
  };
  c._onCreateCss = function() {
    var b = this._options, a = [];
    a.push("#" + this.grid.mid + " ." + b.classTooltip + "{position:absolute;z-index:10;background:" + b.background + ";border:" + b.border + ";padding:" + b.padding + ";color:" + b.color + ";font:" + b.font + "}");
    return a.join("")
  };
  c._mouseoutCanvas = function() {
    e.isNotNull(this._tooltip) && (this._ctnr[0].removeChild(this._tooltip[0]), delete this._tooltip)
  };
  c._mousemoveCanvas = function(b) {
    var a = this._options;
    a.tooltipSyncEnabled && e.isNotNull(this._tooltip) && this._tooltip.css({left:b.pageX + a.offsetX + "px", top:b.pageY + a.offsetY + "px"})
  };
  c._mouseoverCanvas = function(b, a) {
    if(a.getColDef().tooltipEnabled && e.isNull(this._tooltip)) {
      var d = this._options, c = document.createElement("div");
      c.innerHTML = "<div class='" + d.classTooltip + "' style='left:" + (b.pageX + d.offsetX) + "px;top:" + (b.pageY + d.offsetY) + "px'>" + a.getValue() + "</div>";
      this._tooltip = $(c.firstChild);
      this._ctnr[0].appendChild(this._tooltip[0])
    }
  }
})();
jx.grid.EditManager = {};
jx.grid.Editor = {};
(function() {
  function f(d) {
    this.mid = d.mid;
    this.grid = d.grid;
    this.grid.editMgr = this;
    this._options = e._extend({classEdit:"jgrid-edit", classCellEditable:"jgrid-editable", classCellNotEditable:"jgrid-notEditable", editableBgEnabled:!1, notEditableBgEnabled:!1, editableBg:"#FFF", notEditableBg:"#F6F6F6", deleteEnabled:!1, editIconEnabled:!0, urlEditIcon:this.grid._options.imageUrl + "editable-small.png", classEditIcon:"edit-icon", editIconWidth:12, editIconPadding:3, basicBackground:"#FFF9D7", classSuccess:"edit-success", successBackground:"#cdf7b6", classFailure:"edit-failure", 
    failureBackground:"#ffcec5"}, d.options);
    this._beginEditKeys = c.which(["number", "alphabet", "del", "backspace"]);
    this.__init()
  }
  function g(d) {
    for(var a in d) {
      d.hasOwnProperty(a) && (this[a] = d[a])
    }
  }
  var e = goog.getObjectByName("jx.grid"), c = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var b = goog.getObjectByName("jx.grid.Cell");
  goog.exportSymbol("jx.grid.EditManager", f);
  goog.exportSymbol("jx.grid.Editor", g);
  f.getInstance = function(d) {
    return new f(d)
  };
  var a = f.prototype;
  a.__init = function() {
    this.bindEvents()
  };
  a.bindEvents = function() {
    var d = {onGetColCellClass:this._onGetColCellClass, keydownCanvas:this._keydownCanvas, onDestroy:this._destroy, dblclickCanvas:this._dblclickCanvas, onCreateDynamicCss:this.onCreateDynamicCss, "onBeforeNavigate onBeforeRefresh onBeforeSelect":this.commit, onBeforeFocusCanvas:this.notActive};
    c.isNull(this.grid.selMgr) ? d.onCreateCss = this._onBeforeCreateSelCss : d.onBeforeCreateSelCss = this._onBeforeCreateSelCss;
    if(this._options.deleteEnabled) {
      d["keydownSel_" + c.keyMapKeydown.del] = this._deleteContents
    }
    if(this._options.editIconEnabled) {
      for(var a = this.grid.colDefMgr.get(), b = a.length, e = 0;e < b;e++) {
        if(c.isNotNull(a[e].editor)) {
          d["onRenderHeader_" + a[e].key + "_prepend"] = this._onRenderHeader
        }
      }
    }
    this.grid.event.bind(d, this)
  };
  a._destroy = function() {
    this._deleteEditor();
    e._destroy(this, {name:"EditManager", path:"editMgr", map:"beginEditKeys _options"})
  };
  a._onBeforeCreateSelCss = function() {
    var d = "#" + this.grid.mid + " .", a = this._options, b = [], c = this.grid.view._getRowInnerHeight();
    b.push(this.grid.view._getCellSelector() + "." + a.classEdit + "{background:" + a.basicBackground + "}");
    b.push(d + a.classEdit + " input{position:absolute;z-index:10;top:0;padding:0;border:0;margin:0;background:" + a.basicBackground + ";height:" + c + "px;line-height:" + c + "px}");
    a.editableBgEnabled && b.push(d + a.classCellEditable + "{background:" + a.editableBg + "}");
    a.notEditableBgEnabled && b.push(d + a.classCellNotEditable + "{background:" + a.notEditableBg + "}");
    a.editIconEnabled && b.push(d + a.classEditIcon + "{float:left;position:absolute;left:0;top:0;padding:0 " + a.editIconPadding + "px;width:" + a.editIconWidth + "px;height:" + c + "px;background:url(" + a.urlEditIcon + ") no-repeat center transparent}");
    b.push(d + a.classSuccess + "{background:" + a.successBackground + "}");
    b.push(d + a.classFailure + "{background:" + a.failureBackground + "}");
    return b.join("")
  };
  a.onCreateDynamicCss = function() {
    for(var d = this.grid.view._getCellSelector(), a = this.grid.view._getPadding(), b = this.grid.colDefMgr.get(), e = 0, f = "";e < b.length;e++) {
      c.isNotNull(b[e].editor) && (f += d + ".k_" + b[e].key + " .basic-editor{width:" + (b[e].width - 2 * a) + "px}")
    }
    return f
  };
  a._onRenderHeader = function(d) {
    d.push("<span class='" + this._options.classEditIcon + "'></span>")
  };
  a._onRenderCell = function(d, a, b, c, e) {
    this.grid.dataMgr.isReal(b) && e.push("<span class='" + this._options.classEditIcon + "' title='클릭하여 에디팅을 시작합니다' onclick='JGM.m.EditManager." + this.mid + '.beginEdit("' + b[this.grid.dataMgr.idKey] + '","' + c.key + "\")'></span>")
  };
  a.cancelMouseEvent = function(d) {
    return!c.hasTagAndClass(d.target, "DIV", this._options.classEditIcon)
  };
  a.beginEdit = function(d, a) {
    this.begin(e.create("Cell", {grid:this.grid, datarow:this.grid.dataMgr.getById(d), colDef:this.grid.colDefMgr.getByKey(a)}))
  };
  a._dblclickCanvas = function(d, a) {
    a.isEdited() || this.begin(a)
  };
  a._keydownCanvas = function(d) {
    this.active() ? d.which === c.keyMapKeydown.esc && this.cancel() : !d.ctrlKey && !d.altKey && c.isNotNull(this.grid.selMgr) && (d.which === c.keyMapKeydown.del && this._options.deleteEnabled ? this._deleteContent(this.grid.selMgr.getCell()) : this._beginEditKeys[d.which] ? this.begin(this.grid.selMgr.getCell()) : d.which === c.keyMapKeydown.f2 && (d.preventDefault(), this.begin(this.grid.selMgr.getCell())))
  };
  a.active = function() {
    return c.isNotNull(this.editor)
  };
  a.notActive = function() {
    return c.isNull(this.editor)
  };
  a._isEdited = function(d) {
    return this.active() && this.editor.cell.equals(d)
  };
  a._onGetColCellClass = function(d) {
    return c.isNotNull(d.editor) ? this._options.classCellEditable : this._options.classCellNotEditable
  };
  b.prototype.isEdited = function() {
    return this.grid.editMgr._isEdited(this)
  };
  b.prototype.setValue = function(d) {
    var a = this.getDatarow(), b = this.getKey(), e;
    c.isNotNullAnd(a, b) && (e = this.grid.dataMgr.updateByKey(a, b, d, {noSort:!0, noFilter:!0, noRerender:!0}), e === !0 && this.grid.view.rerenderRow(a));
    return e
  };
  a.isEditable = function(d) {
    return c.isNotNull(d) && c.isNotNull(d.getColDef().editor) && this.grid.dataMgr.isReal(d.getDatarow())
  };
  a.begin = function(d) {
    this.active() && this.commit();
    if(this.isEditable(d)) {
      this.editor = d.getColDef().editor;
      this.editor.cell = d;
      this.editor.grid = this.grid;
      var a = d.getNode();
      this.editor.before = a.innerHTML;
      a.innerHTML = this.editor.edit(d.getValue());
      d.get$().addClass(this._options.classEdit);
      this.editor.focus()
    }
  };
  a.cancel = function() {
    if(this.active()) {
      var d = this.editor.cell;
      d.getNode().innerHTML = this.editor.before;
      this._deleteEditor();
      d.get$().removeClass(this._options.classEdit);
      this.grid.view.focus()
    }
  };
  a._deleteEditor = function() {
    c.isNotNull(this.editor) && (delete this.editor.grid, delete this.editor.cell, delete this.editor.before, delete this.editor)
  };
  a.commit = function() {
    if(!this.beingCommitted && this.active()) {
      this.beingCommitted = !0;
      var d = this.editor.cell, a = this.editor.value(d.getNode()), b;
      if(a == d.getValue()) {
        this.cancel()
      }else {
        var a = d.setValue(a), c;
        b = d.get$();
        a instanceof Error ? (this.cancel(), c = this._options.classFailure) : (this._deleteEditor(), this.grid.view.focus(), c = this._options.classSuccess, this.grid.printMessage("Successfully Updated."));
        b.addClass(c);
        setTimeout(function() {
          b.removeClass(c)
        }, 1E3)
      }
      d.get$().removeClass(this._options.classEdit);
      this.beingCommitted = !1
    }
  };
  a._deleteContent = function(d) {
    if(!this.active() && this.isEditable(d)) {
      var a = d.getColDef();
      d.getValue() !== a.defaultValue && d.setValue(a.defaultValue)
    }
  };
  a._deleteContents = function(d, a, b) {
    if(!this.active()) {
      var d = {}, a = {}, e = [], f, i, g, p, n, q, o;
      a:for(f in b) {
        if(b.hasOwnProperty(f) && f !== "length") {
          for(o in p = g = i = void 0, q = b[f], q) {
            if(q.hasOwnProperty(o) && !(o === "length" || a.hasOwnProperty(o))) {
              n = q[o].cell;
              if(c.isNull(i) && (i = n.getColDef(), g = i.defaultValue, p = i.key, c.isNull(i.editor))) {
                continue a
              }
              n = c.isNotNull(d[o]) ? d[o].datarow : n.getDatarow();
              this.grid.dataMgr.isReal(n) ? g !== n[p] && (c.isNull(d[o]) && (d[o] = {datarow:n, change:{}}, e.push(d[o])), d[o].change[p] = g) : a[o] = !0
            }
          }
        }
      }
      e.length !== 0 && this.grid.dataMgr.updateList(e)
    }
  };
  g.getInstance = function(d) {
    return new g(d)
  };
  a = g.prototype;
  a.edit = function(d) {
    return"<input type='text' class='basic-editor' value='" + c.ifNull(d, "") + "' style='position:relative'/>"
  };
  a.focus = function() {
    var d = this.cell.getNode().childNodes[0];
    if(c.isFunction(d.setActive)) {
      try {
        d.setActive()
      }catch(a) {
      }
    }
    d.focus();
    document.activeElement !== d && this.cell.get$().children(":eq(0)").focus()
  };
  a.value = function(d) {
    return d.childNodes[0].value
  };
  a.path = function() {
    return"JGM.m.Editor." + this.mid
  };
  g.numberKeys = c.which(["number", "del", "backspace"]);
  g.isNumberKey = function(d) {
    return this.numberKeys[d] ? !0 : !1
  };
  g.numberEdit = function(d) {
    d = d.getValue();
    return"<input type='text' class='basic-editor' onkeydown='if (!jx.grid.Editor.isNumberKey(event.which)) return false;' value='" + c.ifNull(d, "") + "'/>"
  };
  g.floatKeys = c.which(["number", ".", "del", "backspace"]);
  g.isFloatKey = function(d) {
    return this.floatKeys[d] ? !0 : !1
  };
  g.floatEdit = function(d) {
    d = d.getValue();
    return"<input type='text' class='basic-editor' onkeydown='if (!jx.grid.Editor.isFloatKey(event.which)) return false;' value='" + c.ifNull(d, "") + "'/>"
  };
  g.alphabetKeys = c.which(["alphabet", "del", "backspace", "space"]);
  g.isAlphabet = function(d) {
    return this.alphabetKeys[d] ? !0 : !1
  };
  g.alphabetEdit = function(d) {
    d = d.getValue();
    return"<input type='text' class='basic-editor' onkeydown='if (!jx.grid.Editor.isAlphabet(event.which)) return false;' value='" + c.ifNull(d, "") + "'/>"
  }
})();
jx.grid.DataCreator = {};
(function() {
  function f(b) {
    this.mid = b.mid;
    this._ctnr = b.container;
    this.grid = b.grid;
    this.grid.creator = this;
    this._options = g._extend({background:"#dfdfdf", borderThickness:0, border:"solid #D6D6D6", inputBorder:"solid #A7A7A7", inputBorderThickness:1, inputHeight:18, inputMargin:8, nameMargin:2, font:"12px Arial,Helvetica,sans-serif", height:28, padding:3, classCreatorIcon:"creator-icon", creatorIconUrl:this.grid._options.imageUrl + "data-creator-icon.png", creatorIconWidth:13, creatorIconHeight:13, classCreator:"data-creator", classColName:"data-creator-name", inputBorderRadius:3}, b.options);
    this._inputMap = {};
    this.__init()
  }
  var g = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.DataCreator", f);
  f.getInstance = function(b) {
    return new f(b)
  };
  var c = f.prototype;
  c.__init = function() {
    this._creator = $("<div class='" + this._options.classCreator + "'>").appendTo(this._ctnr);
    this.bindEvents()
  };
  c.bindEvents = function() {
    this.grid.event.bind({onRenderModules:this._onRenderModules, onCreateCss:this._onCreateCss, onDestroy:this._destroy}, this)
  };
  c._onCreateCss = function() {
    var b = "#" + this.grid.mid + " .", a = this._options, d = [];
    d.push(b + a.classCreator + "{" + g._CONST._cssUnselectable + "float:left;width:100%;padding-left:8px;background:" + a.background + ";border-top:" + (a.borderThickness + "px " + a.border) + ";font:" + a.font + "}");
    d.push(b + a.classCreator + " button{float:left;margin:" + a.padding + "px " + a.padding + "px 0 0;height:" + (a.height - 2 * a.padding) + "px}");
    d.push(b + a.classCreator + " input{float:left;padding:0;margin-top:" + (a.height - a.inputHeight - 2 * a.inputBorderThickness) / 2 + "px;height:" + a.inputHeight + "px;border:" + a.inputBorderThickness + "px " + a.inputBorder + ";border-radius:" + a.inputBorderRadius + "px;-moz-border-radius:" + a.inputBorderRadius + "px}");
    d.push(b + a.classCol + "{float:left;overflow:hidden;white-space:nowrap;line-height:" + a.height + "px;margin-right:" + a.inputMargin + "px}");
    d.push(b + a.classColName + "{float:left;margin-right:" + a.nameMargin + "px}");
    d.push(b + a.classCreatorIcon + "{background:url(" + a.creatorIconUrl + ") no-repeat center;width:" + a.creatorIconWidth + "px;height:" + a.creatorIconHeight + "px}");
    return d.join("")
  };
  c._onRenderModules = function() {
    for(var b = [], a = this.grid.colDefMgr.getAll(), d = a.length, c, f = this._options, k = f.classCol, g = f.classColName, i = this, j = this._creator, p = this._inputMap, n = 0, q = function(d) {
      d.which === e.keyMapKeydown.enter && i._addData()
    };n < d;n++) {
      c = a[n], c.inputOnCreate === !0 && b.push("<div key='" + c.key + "' class='" + k + "'><div class='" + g + "'>" + c.name + "</div><input type='text' value='" + e.ifNull(c.defaultValue, "") + "' style='width:" + c.width + "px'/></div>")
    }
    j[0].innerHTML = b.join("") + "<button type='button' onclick='JGM.m.DataCreator." + this.mid + "._addData()'>등록</button><button type='button' onclick='JGM.m.DataCreator." + this.mid + "._reset()'>초기화</button>";
    for(n = 0;n < d;n++) {
      c = a[n], c.inputOnCreate === !0 && (p[c.key] = j.find("div[key='" + c.key + "'] input").keyup(q))
    }
    e.isNotNull(this.grid.menubar) && (this.grid.menubar.addIcon(f.classCreatorIcon, "데이터 로우를 추가합니다.", f.creatorIconWidth, f.creatorIconHeight, function() {
      j.toggle("fast")
    }), j.hide())
  };
  c._addData = function() {
    var b, a = this._inputMap, d = this.grid.colDefMgr, c = {}, e = d.getAll(), f = e.length, g = 0;
    for(b in a) {
      a.hasOwnProperty(b) && d.getByKey(b)
    }
    for(;g < f;g++) {
      d = e[g], b = d.key, a.hasOwnProperty(b) ? c[b] = a[b][0].value : d.defaultValue !== void 0 && (c[b] = d.defaultValue)
    }
    this.grid.event.trigger("onAfterDataCreate", [c]);
    this.grid.dataMgr.add(c, {isNew:!0})
  };
  c._reset = function() {
    var b, a = this.grid.colDefMgr, d, c = this._inputMap;
    for(b in c) {
      if(c.hasOwnProperty(b) && (d = a.getByKey(b), d.defaultValue !== void 0)) {
        c[b][0].value = d.defaultValue
      }
    }
  };
  c._destroy = function() {
    var b, a = this._inputMap;
    for(b in a) {
      a.hasOwnProperty(b) && g._delete$(a, b)
    }
    g._destroy(this, {name:"DataCreator", path:"creator", $:"creator", map:"inputMap _options"})
  }
})();
jx.grid.SearchManager = {};
(function() {
  function f(d) {
    this.mid = d.mid;
    this._ctnr = d.container;
    this.grid = d.grid;
    this.grid.search = this;
    this._options = g._extend({background:"#f0f0f0", borderThickness:1, border:"solid #d6d6d6", inputBorder:"1px solid #A7A7A7", inputPadding:0, searchbarAlign:"center", searchbarMargin:3, searchbarWidth:"99%", searchbarHeight:20, tagsHeight:26, tagsPadding:2, tagsBorderRadius:3, advButtonColor:"#123272", advButtonFont:"bold 12px Arial,Helvetica,sans-serif", advButtonPadding:5, advButtonBg:"", advButtonBgHover:"url(" + this.grid._options.imageUrl + "more-options-bg-hover.png) repeat-x scroll center", 
    advButtonBgActive:"url(" + this.grid._options.imageUrl + "more-options-bg-active.png) repeat-x scroll center", advButtonBgOpened:"url(" + this.grid._options.imageUrl + "more-options-bg-opened.png) repeat-x scroll center", advButtonBorderThickness:1, advButtonBorder:"solid transparent", advButtonBorderHover:"solid #a4a4a4", advButtonBorderActive:"solid #c5c5c5", advButtonBorderOpened:"solid #bfbfbf", advButtonIconWidth:9, advButtonIconMargin:2, advButtonIconUrl:this.grid._options.imageUrl + "more-options.png", 
    advButtonIconCloseUrl:this.grid._options.imageUrl + "more-options-close.png", tagPadding:2, tagBorder:"solid #93979D", tagBorderThickness:1, tagFont:"bold 13px Arial", tagColor:"#282853", tagBackground:"url(" + this.grid._options.imageUrl + "tag-background.png) repeat-x scroll center", tagRemoveIconWidth:12, tagRemoveIconUrl:this.grid._options.imageUrl + "tag-close.png", tagRemoveIconHoverUrl:this.grid._options.imageUrl + "tag-close-hover.png", advFont:"11px Arial", advInputWidth:30, classMask:"search-mask", 
    classSearchbar:"search-bar", classAdvButtonName:"more-option-name", classAdvButton:"more-options", classAdvButtonIcon:"more-icon", classClearTags:"clear-tags", classTagbar:"search-tags", classTag:"search-tag", classTagName:"search-tag-name", classRemoveTag:"search-tag-remove", classAdvanced:"search-advanced", classOptionCol:"search-option-col", classOption:"search-option", classSearchIcon:"search-icon", searchIconUrl:this.grid._options.imageUrl + "search-icon.png", searchIconWidth:15, searchIconHeight:15, 
    keyMap:void 0, tagRemoveIconActiveUrl:this.grid._options.imageUrl + "tag-close-active.png", syncMaster:!1}, d.options);
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
  var c = f.prototype;
  c._onCreateCss = function() {
    var d = "#" + this.grid.mid + " .", a = this._options, b = a.borderThickness + "px " + a.border, c = "border-radius:" + a.tagsBorderRadius + "px;-moz-border-radius:" + a.tagsBorderRadius + "px", h = a.advButtonBorderThickness + "px " + a.advButtonBorder, e = a.advButtonBorderThickness + "px " + a.advButtonBorderHover, f = a.advButtonBorderThickness + "px " + a.advButtonBorderActive, l = a.advButtonBorderThickness + "px " + a.advButtonBorderOpened, k = a.tagsHeight - 2 * a.tagsPadding, i = k - 
    2 * a.advButtonBorderThickness, m = k - 2 * a.tagBorderThickness, j = d + a.classMask, n = d + a.classSearchbar, p = d + a.classAdvButton, q = d + a.classRemoveTag, o = [];
    o.push(j + "{" + g._CONST._cssUnselectable + "overflow:hidden;width:100%;background:" + a.background + "}");
    o.push(j + " button{margin:0;padding:0 3px}");
    o.push(j + " input{border:" + a.inputBorder + ";padding:" + a.inputPadding + "}");
    o.push(n + "{text-align:" + a.searchbarAlign + ";border-bottom:" + b + "}");
    o.push(n + " input{width:" + a.searchbarWidth + ";margin:" + a.searchbarMargin + "px 0;height:" + a.searchbarHeight + "px;" + c + "}");
    o.push(d + a.classTagbar + "{cursor:default;height:" + (a.tagsHeight - a.tagsPadding) + "px;padding:" + a.tagsPadding + "px 0 0 " + a.tagsPadding + "px;border-bottom:" + b + "}");
    o.push(p + "{float:left;margin-right:" + a.tagsPadding + "px;background:" + a.advButtonBg + ";border:" + h + ";padding:0 " + a.advButtonPadding + "px;" + c + "}");
    o.push(p + ":hover{background:" + a.advButtonBgHover + ";border:" + e + "}");
    o.push(p + ".opened{background:" + a.advButtonBgOpened + ";border:" + l + "}");
    o.push(p + ":active{background:" + a.advButtonBgActive + ";border:" + f + "}");
    o.push(d + a.classAdvButtonName + "{float:left;color:" + a.advButtonColor + ";font:" + a.advButtonFont + ";line-height:" + i + "px}");
    o.push(d + a.classAdvButtonIcon + "{float:left;height:" + i + "px;margin-left:" + a.advButtonIconMargin + "px;background:url(" + a.advButtonIconUrl + ") no-repeat center;width:" + a.advButtonIconWidth + "px}");
    o.push(p + ".opened ." + a.classAdvButtonIcon + "{background:url(" + a.advButtonIconCloseUrl + ") no-repeat center}");
    o.push(d + a.classTag + "{float:left;border:" + a.tagBorderThickness + "px " + a.tagBorder + ";margin:0 " + a.tagsPadding + "px " + a.tagsPadding + "px 0;padding:0 " + a.tagPadding + "px;background:" + a.tagBackground + ";" + c + "}");
    o.push(d + a.classTagName + "{float:left;color:" + a.tagColor + ";font:" + a.tagFont + ";line-height:" + m + "px}");
    o.push(q + "{float:left;margin-left:" + a.tagPadding + "px;background:url(" + a.tagRemoveIconUrl + ") no-repeat center;width:" + a.tagRemoveIconWidth + "px;height:" + m + "px}");
    o.push(q + ":hover{background:url(" + a.tagRemoveIconHoverUrl + ") no-repeat center}");
    o.push(q + ":active{background:url(" + a.tagRemoveIconActiveUrl + ") no-repeat center}");
    o.push(d + a.classClearTags + "{height:" + k + "px}");
    o.push(d + a.classAdvanced + "{cursor:default;font:" + a.advFont + ";border-bottom:" + b + "}");
    o.push(d + a.classOptionCol + "{display:inline-block;vertical-align:top}");
    o.push(d + a.classOptionCol + " input{width:" + a.advInputWidth + "px;margin-right:2px;" + c + "}");
    o.push(d + a.classSearchIcon + "{background:url(" + a.searchIconUrl + ") no-repeat center;width:" + a.searchIconWidth + "px;height:" + a.searchIconHeight + "px}");
    return o.join("")
  };
  f.getInstance = function(a) {
    return new f(a)
  };
  c.__init = function() {
    var a = this._options, d = this, b, c, h;
    b = this._mask = $("<div class='" + a.classMask + "'>").prependTo(this._ctnr);
    this._search = $("<div class='" + a.classSearchbar + "'><input type='text'/></div>").appendTo(b);
    this._masterInput = this._search.children(":eq(0)").keyup(function(a) {
      a.which === e.keyMapKeydown.enter ? d._parse($(this)[0].value) : a.which === e.keyMapKeydown.esc && d._removeAllOptions()
    });
    c = this._hasFilter = this.grid.colDefMgr.get().some(function(a) {
      return e.isNotNull(a.filter)
    });
    h = this._tag = $("<div class='" + a.classTagbar + "'>" + (c ? "<div class='" + a.classAdvButton + "'><div class='" + a.classAdvButtonName + "'>추가 옵션</div><div class='" + a.classAdvButtonIcon + "'></div></div>" : "") + "<button type='button' class='" + a.classClearTags + "' onclick='JGM.m.SearchManager." + this.mid + "._removeAllOptions()'>모든 필터 제거</button></div>").appendTo(b);
    if(c) {
      var f = this._adv = $("<div class='" + a.classAdvanced + "'>").appendTo(b).hide().keyup(function(a) {
        if(a.which === e.keyMapKeydown.enter) {
          var b = a.target.getAttribute("key");
          d._registerOption(b, d._keyToName[b], a.target.getAttribute("tag"), a.target.value);
          a.target.value = ""
        }
      });
      this._advButton = h.children(":eq(0)").click(function() {
        $(this).toggleClass("opened");
        f.toggle("fast")
      })
    }
    this.grid.event.bind({onRenderModules:this._onRenderModules, onCreateCss:this._onCreateCss, onFilter:this._onFilter, onDestroy:this._destroy, onAfterRenderModules:this._onAfterRenderModules}, this)
  };
  c._onRenderModules = function() {
    var a = [], d = this._options, b = this._mask;
    if(this._hasFilter) {
      for(var c = this.grid.colDefMgr.get(), h = c.length, f = d.keyMap, l = this._nameMap, k = this._keyToName, i, g, m, j = 0;j < h;j++) {
        if(i = c[j], e.isNotNull(i.filter)) {
          m = i.key, g = e.isNull(f) || !f.hasOwnProperty(m) ? i.name || m : f[m], l[g] = m, k[m] = g, a.push("<div class='" + d.classOptionCol + "'>"), this._registerFilter(m, g, i.name, i.filter, a), a.push("</div>")
        }
      }
      this._adv[0].innerHTML = a.join("")
    }
    e.isNotNull(this.grid.menubar) && (this.grid.menubar.addIcon(d.classSearchIcon, "데이터 검색을 합니다.", d.searchIconWidth, d.searchIconHeight, function() {
      b.toggle("fast")
    }), b.hide())
  };
  c._onAfterRenderModules = function() {
    var a = this._filterMap, d, b, c, h, e = this._adv;
    for(b in a) {
      if(a.hasOwnProperty(b)) {
        for(c in d = a[b], d) {
          if(d.hasOwnProperty(c) && c !== "andor" && c !== "parser" && c !== "validator") {
            (h = d[c]).input = e.find("#" + b + h.option.name)
          }
        }
      }
    }
  };
  c._destroy = function() {
    var a, d, b, c = this._globalMap, h = this._filterMap, e = this._tagMap;
    for(a in c) {
      c.hasOwnProperty(a) && (g._delete$(c[a], "tag"), g._deleteArray(c[a], "list"))
    }
    for(a in h) {
      if(h.hasOwnProperty(a)) {
        c = h[a];
        for(d in c) {
          c.hasOwnProperty(d) && (d !== "andor" && d !== "parser" && d !== "validator" && g._delete$(c[d], "input"), g._deleteMap(c, d))
        }
        g._deleteMap(h, a)
      }
    }
    for(a in e) {
      if(e.hasOwnProperty(a)) {
        h = e[a];
        for(d in h) {
          if(h.hasOwnProperty(d)) {
            c = h[d];
            for(b in c) {
              c.hasOwnProperty(b) && (g._delete$(c[b], "tag"), g._deleteMap(c, b))
            }
            g._deleteMap(h, d)
          }
        }
        g._deleteMap(e, a)
      }
    }
    g._destroy(this, {name:"SearchManager", path:"search", $:"masterInput _advButton _mask _search _tag _adv", property:"ctnr _hasFilter", array:"global", map:"globalMap _filterMap _tagMap _codeMap _nameMap _options _keyToName"})
  };
  c._onFilter = function(a, d) {
    if(!(this._global.length === 0 && e.isEmptyObj(this._codeMap))) {
      var b, c = this._tagMap, h, f, l = a.length, k, i = this._filterMap, g = this.constructor.CONST.and, m, j = this._global.length > 0, n, p;
      if(j) {
        var o = this._global, q;
        k = this.grid.colDefMgr.get().filter(function(a) {
          return!a.noSearch
        });
        var r = k.length, s = [];
        for(n = 0;n < r;n++) {
          s.push(k[n].key)
        }
      }
      n = l - 1;
      a:for(;n >= 0;n--) {
        l = a[n];
        if(j) {
          k = o.slice();
          b = 0;
          for(;k.length !== 0 && b < r;b++) {
            if(!e.isNull(q = l[s[b]])) {
              e.isString(q) || (q = q.toString());
              for(p = k.length - 1;p >= 0;p--) {
                q.indexOf(k[p]) !== -1 && k.removeAt(p)
              }
            }
          }
          if(k.length !== 0) {
            a.removeAt(n);
            d.push(l);
            continue a
          }
        }
        for(h in c) {
          if(c.hasOwnProperty(h)) {
            if(p = c[h], b = i[h].andor, k = l[h], b === g) {
              for(f in p) {
                if(p.hasOwnProperty(f)) {
                  for(m in b = p[f], b) {
                    if(b.hasOwnProperty(m) && !b[m].fn(k)) {
                      a.removeAt(n);
                      d.push(l);
                      continue a
                    }
                  }
                }
              }
            }else {
              for(f in p) {
                if(p.hasOwnProperty(f)) {
                  for(m in b = p[f], b) {
                    if(b.hasOwnProperty(m) && b[m].fn(k)) {
                      continue a
                    }
                  }
                }
              }
              a.removeAt(n);
              d.push(l);
              continue a
            }
          }
        }
      }
    }
  };
  c._registerFilter = function(a, d, b, c, h) {
    if(!this._filterMap.hasOwnProperty(a)) {
      if(c === "number") {
        c = this.constructor._numberFilter
      }else {
        if(c === "string") {
          c = this.constructor._stringFilter
        }
      }
      var e, f = c.length, l = 0, k = this.mid, i = this._options.classOption, g, m, j, n;
      g = this._filterMap[a] = {andor:this.constructor.CONST.and};
      m = this._tagMap[a] = {};
      for(h.push("<table>");l < f;l++) {
        e = c[l], n = e.name, n === "parser" ? g.parser = e.fn : n === "validator" ? g.validator = e.fn : (j = e.tag, g[j] = {option:e}, m[j] = {}, h.push("<tr title='" + e.comment(b, "입력값") + "'><td><div class='" + i + "'>" + b + " " + j + "</td><td><input id='" + a + n + "' key='" + a + "' tag='" + j + "' type='text'><button type='button' onclick=\"JGM.m.SearchManager." + k + "._registerOption('" + a + "','" + d + "','" + j + "',this.previousSibling.value)\">등록</button></div></td></tr>"))
      }
      h.push("</table>")
    }
  };
  c._parse = function(a) {
    for(var d, b, c, h, f = e.split(a), l = f.length, k = 2, i = !1, g = [], m = this._nameMap, j = this._filterMap, n = 0;n < l;n++) {
      if(a = f[n], a !== "") {
        switch(k) {
          case 0:
            j[d].hasOwnProperty(a) && (c = a, k = 1);
            break;
          case 1:
            h = a;
            k = 2;
            break;
          case 2:
            a.charAt(0) === "@" ? (a = a.substring(1), m.hasOwnProperty(a) ? (e.isNotNullAnd(d, b, c, h) && this._registerOption(d, b, c, h, !0) && (i = !0), d = m[a], b = a, h = c = void 0, k = 0) : e.isNull(d) ? g.push(a) : h += " " + a) : e.isNull(d) ? g.push(a) : h += " " + a
        }
      }
    }
    e.isNotNullAnd(d, b, c, h) && this._registerOption(d, b, c, h, !0) && (i = !0);
    this._registerGlobal(g) && (i = !0);
    this._syncMasterInput();
    i && this.grid.dataMgr.refresh()
  };
  c._syncMasterInput = function() {
    if(this._options.syncMaster) {
      var a = this._global.join(" "), d = this._tagMap, b = this._keyToName, c, h, e, f, l;
      for(c in d) {
        if(d.hasOwnProperty(c)) {
          for(h in f = d[c], f) {
            if(f.hasOwnProperty(h)) {
              for(e in l = f[h], l) {
                l.hasOwnProperty(e) && (a += " @" + b[c] + " " + h + " " + e)
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
  c._registerGlobal = function(a) {
    for(var d = 0, b = a.length, c = this._global;d < b;d++) {
      c.indexOf(a[d]) !== -1 ? a.removeAt(d--) : c.push(a[d])
    }
    if(a.length === 0) {
      return!1
    }
    d = this._options;
    this._globalMap[a[0]] = {tag:$("<div class='" + d.classTag + "' title='" + a.join(", ") + " 를 포함하는'><div class='" + d.classTagName + "'>" + a.join(" ") + "</div><div class='" + d.classRemoveTag + "' title='필터 제거' onclick=\"JGM.m.SearchManager." + this.mid + "._removeGlobal('" + a[0] + "')\"></div></div>").appendTo(this._tag), list:a};
    return!0
  };
  c._removeGlobal = function(a) {
    var d = this._globalMap;
    if(d.hasOwnProperty(a)) {
      var b = d[a];
      b.tag.remove();
      delete b.tag;
      this._global.removeList(b.list);
      b.list.length = 0;
      delete b.list;
      delete d[a];
      this._syncMasterInput();
      this.grid.dataMgr.refresh()
    }
  };
  c._registerOption = function(a, d, b, c, h) {
    var l = this._filterMap, k, i = this._codeMap;
    if(l.hasOwnProperty(a) && (k = l[a]).hasOwnProperty(b)) {
      l = k[b];
      if(e.isNull(c)) {
        var g = l.input, c = $.trim(g.val());
        g.val("")
      }else {
        c = $.trim(c)
      }
      if(c.length === 0) {
        return!1
      }
      e.isNotNull(k.parser) && (c = k.parser(c));
      if(i.hasOwnProperty(a + "@T" + b + "@B" + c)) {
        return!1
      }
      if(e.isNotNull(k.validator) && !k.validator(c)) {
        return!1
      }
      l = l.option;
      k = k.andor
    }else {
      return!1
    }
    g = this._tagMap[a];
    if(g[b].hasOwnProperty(c)) {
      return!1
    }
    var m, j, n, p, o = this._filterMap[a], q;
    for(n in g) {
      if(g.hasOwnProperty(n)) {
        for(p in m = g[n], m) {
          m.hasOwnProperty(p) && (q = m[p], j = e.isNotNull(o.parser) ? o.parser(p) : p, f._checkDisable(l.type, q.option.type, k, c, j) && (delete i[a + "@T" + q.option.tag + "@B" + j], q.tag.remove(), delete q.tag, delete q.option, delete q.fn, delete m[p]))
        }
      }
    }
    i[a + "@T" + b + "@B" + c] = !0;
    this._createTag(a, l, c, d);
    h || (this._syncMasterInput(), this.grid.dataMgr.refresh());
    return!0
  };
  c._removeOption = function(a, d, b) {
    var c = this._tagMap, h, e;
    if(c.hasOwnProperty(a) && (h = c[a]).hasOwnProperty(d) && (e = h[d]).hasOwnProperty(b)) {
      c = e[b], c.tag.remove(), delete c.tag, delete c.option, delete c.fn, delete e[b], delete this._codeMap[a + "@T" + d + "@B" + b], this._syncMasterInput(), this.grid.dataMgr.refresh()
    }
  };
  c._removeAllOptions = function() {
    var a, d = this._globalMap, b, c = this._tagMap, h, e, f;
    for(a in d) {
      if(d.hasOwnProperty(a)) {
        b = d[a], b.tag.remove(), delete b.tag, b.list.length = 0, delete b.list, delete d[a]
      }
    }
    this._global.length = 0;
    for(a in c) {
      if(c.hasOwnProperty(a)) {
        for(h in d = c[a], d) {
          if(d.hasOwnProperty(h)) {
            for(e in b = d[h], b) {
              b.hasOwnProperty(e) && (f = b[e], f.tag.remove(), delete f.tag, delete f.option, delete f.fn, delete b[e])
            }
          }
        }
      }
    }
    this._codeMap = {};
    this._syncMasterInput();
    this.grid.dataMgr.refresh()
  };
  c._createTag = function(a, d, b, c) {
    var h = this._options;
    return this._tagMap[a][d.tag][b] = {tag:$("<div class='" + h.classTag + "' title='" + d.comment(c, b) + "'><div class='" + h.classTagName + "'>@" + c + " " + d.tag + " " + b + "</div><div class='" + h.classRemoveTag + "' title='필터 제거' onclick=\"JGM.m.SearchManager." + this.mid + "._removeOption('" + a + "','" + d.tag + "','" + b + "')\"></div></div>").appendTo(this._tag), option:d, fn:d.fn(b)}
  };
  var b = f.CONST = {lt:0, lte:1, eq:2, neq:3, gt:4, gte:5, and:6, or:7, T:8, F:9}, c = b.lt, a = b.gt, d = b.eq, h = b.neq, l = b.and, k = b.or, m = b.T, b = b.F, i = f._comparator = {}, j = i[c] = function(a, d) {
    return a <= d
  }, p = i[a] = function(a, d) {
    return a >= d
  }, n = i[d] = function(a, d) {
    return a === d
  }, m = i[m] = function() {
    return!0
  }, q = f._disableMap = {}, o = q[c] = {}, r = q[a] = {}, s = q[d] = {}, q = q[h] = {};
  i[b] = function() {
    return!1
  };
  o[c] = {};
  o[c][l] = m;
  o[c][k] = m;
  o[a] = {};
  o[a][l] = j;
  o[a][k] = p;
  o[d] = {};
  o[d][l] = m;
  o[d][k] = p;
  o[h] = {};
  o[h][l] = j;
  o[h][k] = m;
  r[c] = {};
  r[c][l] = p;
  r[c][k] = j;
  r[a] = {};
  r[a][l] = m;
  r[a][k] = m;
  r[d] = {};
  r[d][l] = m;
  r[d][k] = j;
  r[h] = {};
  r[h][l] = p;
  r[h][k] = m;
  s[c] = {};
  s[c][l] = m;
  s[c][k] = j;
  s[a] = {};
  s[a][l] = m;
  s[a][k] = p;
  s[d] = {};
  s[d][l] = m;
  s[d][k] = n;
  s[h] = {};
  s[h][l] = m;
  s[h][k] = m;
  q[c] = {};
  q[c][l] = p;
  q[c][k] = m;
  q[a] = {};
  q[a][l] = j;
  q[a][k] = m;
  q[d] = {};
  q[d][l] = m;
  q[d][k] = m;
  q[h] = {};
  q[h][l] = n;
  q[h][k] = m;
  f._checkDisable = function(a, d, b, c, h) {
    try {
      return this._disableMap[a][d][b](c, h)
    }catch(e) {
      return!1
    }
  };
  f._numberFilter = [{name:"gt", tag:">", type:a, comment:function(a, d) {
    return a + " 이(가) " + d + "보다 큰"
  }, fn:function(a) {
    e.isString(a) && (a = a.toFloat());
    return function(d) {
      return d > a
    }
  }}, {name:"gte", tag:">=", type:a, comment:function(a, d) {
    return a + " 이(가) " + d + "보다 크거나 같은"
  }, fn:function(a) {
    e.isString(a) && (a = a.toFloat());
    return function(d) {
      return d >= a
    }
  }}, {name:"lt", tag:"<", type:c, comment:function(a, d) {
    return a + " 이(가) " + d + "보다 작은"
  }, fn:function(a) {
    e.isString(a) && (a = a.toFloat());
    return function(d) {
      return d < a
    }
  }}, {name:"lte", tag:"<=", type:c, comment:function(a, d) {
    return a + " 이(가) " + d + "보다 작거나 같은"
  }, fn:function(a) {
    e.isString(a) && (a = a.toFloat());
    return function(d) {
      return d <= a
    }
  }}, {name:"eq", tag:"=", type:d, comment:function(a, d) {
    return a + " 이(가) " + d + "인"
  }, fn:function(a) {
    e.isString(a) && (a = a.toFloat());
    return function(d) {
      return d === a
    }
  }}, {name:"neq", tag:"!=", type:h, comment:function(a, d) {
    return a + " 이(가) " + d + "이(가) 아닌"
  }, fn:function(a) {
    e.isString(a) && (a = a.toFloat());
    return function(d) {
      return d !== a
    }
  }}, {name:"contains", tag:"*=", comment:function(a, d) {
    return a + " 이(가) 숫자 " + d + "를 포함하는"
  }, fn:function(a) {
    a = e.isNumber(a) ? a.toString() : $.trim(a);
    return function(d) {
      return d.toString().indexOf(a) !== -1
    }
  }}, {name:"parser", fn:function(a) {
    return a.toFloat()
  }}, {name:"validator", fn:function(a) {
    return!isNaN(a)
  }}];
  f._stringFilter = [{name:"to", tag:"<=", type:c, comment:function(a, d) {
    return a + " 이(가) " + d + "보다 사전에서 이전인"
  }, fn:function(a) {
    a = $.trim(a).toLowerCase();
    return function(d) {
      return d.toLowerCase() <= a
    }
  }}, {name:"from", tag:">=", type:a, comment:function(a, d) {
    return a + " 이(가) " + d + "보다 사전에서 이후인"
  }, fn:function(a) {
    a = $.trim(a).toLowerCase();
    return function(d) {
      return d.toLowerCase() >= a
    }
  }}, {name:"equals", tag:"=", type:d, comment:function(a, d) {
    return a + " 이(가) " + d + "와(과) 같은"
  }, fn:function(a) {
    a = $.trim(a).toLowerCase();
    return function(d) {
      return d.toLowerCase() === a
    }
  }}, {name:"notEquals", tag:"!=", type:h, comment:function(a, d) {
    return a + " 이(가) " + d + "이(가) 아닌"
  }, fn:function(a) {
    a = $.trim(a).toLowerCase();
    return function(d) {
      return d.toLowerCase() !== a
    }
  }}, {name:"startsWith", tag:"^=", comment:function(a, d) {
    return a + " 이(가) " + d + "(으)로 시작하는"
  }, fn:function(a) {
    var a = $.trim(a).toLowerCase(), d = a.length;
    return function(b) {
      return b.substr(0, d).toLowerCase() === a
    }
  }}, {name:"endsWith", tag:"$=", comment:function(a, d) {
    return a + " 이(가) " + d + "(으)로 끝나는"
  }, fn:function(a) {
    var a = $.trim(a).toLowerCase(), d = a.length;
    return function(b) {
      return b.substr(b.length - d, b.length).toLowerCase() === a
    }
  }}, {name:"contains", tag:"*=", comment:function(a, d) {
    return a + " 이(가) " + d + "을(를) 포함하는"
  }, fn:function(a) {
    a = $.trim(a).toLowerCase();
    return function(d) {
      return d.toLowerCase().indexOf(a) !== -1
    }
  }}, {name:"containsAny", tag:"|=", comment:function(a, d) {
    return a + " 이(가) " + d + "들 중 하나 이상을 포함하는"
  }, fn:function(a) {
    var a = a.toLowerCase(), d = e.split(a), b = d.length;
    return b <= 1 ? function(d) {
      return d.toLowerCase().indexOf(a) !== -1
    } : function(a) {
      for(var a = a.toLowerCase(), c = 0;c < b;c++) {
        if(a.indexOf(d[c]) !== -1) {
          return!0
        }
      }
      return!1
    }
  }}, {name:"containsAll", tag:"&=", comment:function(a, d) {
    return a + " 이(가) " + d + "들 모두를 포함하는"
  }, fn:function(a) {
    var a = a.toLowerCase(), d = e.split(a), b = d.length;
    return b <= 1 ? function(d) {
      return d.toLowerCase().indexOf(a) !== -1
    } : function(a) {
      for(var a = a.toLowerCase(), c = 0;c < b;c++) {
        if(a.indexOf(d[c]) === -1) {
          return!1
        }
      }
      return!0
    }
  }}]
})();
jx.grid.PrintManager = {};
(function() {
  function f(b) {
    this.mid = b.mid;
    this._ctnr = Util$.safe$(b.container);
    this.grid = b.grid;
    this._options = g._extend({title:"Print Preview", font:"15px arial,sans-serif", headerFontColor:"#27413E", headerBackgroundColor:"#DCDEDE", tableBorderColor:"#6E7174", headerBorderColor:"#909192", cellBorderColor:"#D0D7E5", winOptions:{name:"Print Preview", width:800, height:600, directories:"no", location:"no", menubar:"no", status:"no", toolbar:"no"}}, b.options);
    this.__init()
  }
  var g = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.PrintManager", f);
  f.getInstance = function(b) {
    return new f(b)
  };
  var c = f.prototype;
  c.__init = function() {
    var b = this;
    this._ctnr[0].innerHTML = "<button type='button'>Print</button>";
    this._ctnr.click(function() {
      b.print()
    })
  };
  c.print = function() {
    var b = this.getPrintHtml(this.grid.colDefMgr.get(), this.grid.dataMgr.datalist), a = e.open(this._options.winOptions);
    a.document.write(b);
    a.document.close()
  };
  c.getPrintHtml = function(b, a) {
    var d = this._options, c = d.tableBorderColor, e = d.headerBorderColor, f = d.cellBorderColor, g = [], i = b.length, j = i - 1, p = a.length, n = p - 1, q = 0, o;
    g.push("<html><head>");
    g.push("<title>" + d.title + "</title>");
    g.push("</head><body onload='window.print();'>");
    g.push("<table width='100%' cellspacing='0' cellpadding='0'><tbody><tr><td align='left'>");
    g.push("<table width='100%' cellspacing='0' cellpadding='2' style='border-collapse:collapse'>");
    g.push("<tbody style='font:" + d.font + ";'>");
    for(g.push("<tr style='background-color:" + d.headerBackgroundColor + ";color:" + d.headerFontColor + ";text-align:center'>");q < i;q++) {
      g.push("<td style='border:solid 1px " + e + ";'>" + b[q].name + "</td>")
    }
    g.push("</tr>");
    for(q = 0;q < p;q++) {
      d = a[q];
      g.push("<tr>");
      if(q === 0) {
        for(o = 0;o < i;o++) {
          o === 0 ? g.push("<td style='border:solid 1px " + f + ";border-top:solid 1px " + e + ";border-left:solid 1px " + c + "'>" + d[b[o].key] + "</td>") : o === j ? g.push("<td style='border:solid 1px " + f + ";border-top:solid 1px " + e + ";border-right:solid 1px " + c + "'>" + d[b[o].key] + "</td>") : g.push("<td style='border:solid 1px " + f + ";border-top:solid 1px " + e + "'>" + d[b[o].key] + "</td>")
        }
      }else {
        if(q < n) {
          for(o = 0;o < i;o++) {
            o === 0 ? g.push("<td style='border:solid 1px " + f + ";border-left:solid 1px " + c + "'>" + d[b[o].key] + "</td>") : o === j ? g.push("<td style='border:solid 1px " + f + ";border-right:solid 1px " + c + "'>" + d[b[o].key] + "</td>") : g.push("<td style='border:solid 1px " + f + "'>" + d[b[o].key] + "</td>")
          }
        }else {
          for(o = 0;o < i;o++) {
            o === 0 ? g.push("<td style='border:solid 1px " + f + ";border-bottom:solid 1px " + c + ";border-left:solid 1px " + c + "'>" + d[b[o].key] + "</td>") : o === j ? g.push("<td style='border:solid 1px " + f + ";border-bottom:solid 1px " + c + ";border-right:solid 1px " + c + "'>" + d[b[o].key] + "</td>") : g.push("<td style='border:solid 1px " + f + ";border-bottom:solid 1px " + c + "'>" + d[b[o].key] + "</td>")
          }
        }
      }
      g.push("</tr>")
    }
    g.push("</tbody></table></td></tr></tbody></table></body></html>");
    return g.join("")
  }
})();
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
    this.__init()
  }
  var g = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.grid.Grid"), c = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var b = goog.getObjectByName("jx.grid.Cell");
  goog.exportSymbol("jx.grid.ViewportManager", f);
  f.getInstance = function(a) {
    return new f(a)
  };
  var a = f.prototype;
  a.__init = function() {
    this._mask = $("<div class='" + this._options.classView + "' tabIndex='0' onscroll='JGM.m.ViewportManager." + this.mid + "._scroll()'>").appendTo(this._ctnr);
    this._canvas = $("<div class='" + this._options.classCanvas + "'>").appendTo(this._mask);
    this._mask.bind("selectstart.ui", function(a) {
      return $(a.target).is("input, textarea")
    });
    this._setColLefts();
    this._setCanvasWidth(this._calCanvasWidth());
    this._lastRowLen = this.grid.dataMgr.datalist.length;
    this.grid.event.bind({canvasFind:this._canvasFind, onCreateCss:this._onCreateCss, onCreateDynamicCss:this._onCreateDynamicCss, onDestroy:this._onDestroy, keydown:this._keydown, keyup:this._keyup, keypress:this._keypress, mousein:this._mousein, mouseout:this._mouseout, mouseenter:this._mouseenter, mouseleave:this._mouseleave, mousemove:this._mousemove, mouseover:this._mouseover, mousedown:this._mousedown, mouseup:this._mouseup, click:this._click, dblclick:this._dblclick, resizeWidth:this._setWidth, 
    "resizeWidth onResizeCol onResizeCanvasHeight":this._resizeWidth, onAfterRefresh:this.onAfterRefresh, onRenderModules:this._render, onReorderCols:this._onReorderCols, onResizeCanvasWidth:this._scroll, onUpdateDatarow:this.onUpdateDatarow, onUpdateDatalist:this.onUpdateDatalist, onRemoveDatarow:this.onRemoveDatarow, onRemoveDatalist:this.onRemoveDatalist, onIdChange:this.onIdChange, onIdListChange:this.onIdListChange, unsetDrag:this.unsetDrag}, this)
  };
  a.unsetDrag = function() {
    this._drag = !1
  };
  a._onDestroy = function() {
    g._destroy(this, {name:"ViewportManager", path:"view", $:"canvas _mask", property:"ctnr", map:"vars _lockedRows _renderedRows _options"})
  };
  a._onCreateCss = function() {
    var a = "#" + this.grid.mid + " .", b = this._options, c = a + b.classCell, e = a + b.classRow, f = b.borderThickness + "px " + b.border, i = e + "[" + b.attrRowIdx, g = this.grid.colDefMgr.get(), p = g.length, n = 0, q = [];
    q.push(a + b.classView + "{height:" + this._calHeight() + "px;outline:0;position:relative;white-space:nowrap;overflow:auto;line-height:" + b.rowH + "px;cursor:default;-moz-user-select:none;-webkit-user-select:none;" + b.style + "}");
    q.push(a + b.classView + ":focus{background:" + b.focusBackground + ";outline:" + b.focusOutline + "}");
    q.push(a + b.classCanvas + "{height:" + this._calCanvasHeight() + "px;" + b.canvasStyle + ";background:#fff}");
    q.push(e + "{position:absolute;" + b.rowStyle + "}");
    q.push(c + "{height:" + b.rowH + "px;border-bottom:" + f + ";display:inline-block;white-space:nowrap;overflow:hidden;float:left;text-overflow:ellipsis;padding-left:" + b.padding + "px;border-right:" + f + ";" + b.cellStyle + "}");
    for(b.evenOddRows && q.push(i + "$='1']," + i + "$='3']," + i + "$='5']," + i + "$='7']," + i + "$='9']{background:" + b.oddRowsBackground + "}");n < p;n++) {
      q.push(c + ".k_" + g[n].key + "{" + g[n].style + "}")
    }
    return q.join("")
  };
  a._onCreateDynamicCss = function() {
    for(var a = "#" + this.grid.mid + " ." + this._options.classCell, b = this._getRowSelector() + "{width:" + this._calCanvasWidth() + "px}", c = this.grid.colDefMgr.get(), e = c.length, f = 0;f < e;f++) {
      b += a + ".k_" + c[f].key + "{width:" + c[f].width + "px}"
    }
    return b
  };
  a.onUpdateDatarow = function(a) {
    this.isRendered(a) && this.rerenderRow(a)
  };
  a.onUpdateDatalist = function(a) {
    for(var b, c = a.length, e = 0;e < c;e++) {
      b = a[e], this.isRendered(b) && this.rerenderRow(b)
    }
  };
  a.onRemoveDatarow = function(a) {
    this.destroyRow(a)
  };
  a.onRemoveDatalist = function(a) {
    for(var b = a.length, c = 0;c < b;c++) {
      this.destroyRow(a[c])
    }
  };
  a.onIdChange = function(a, b, c) {
    this.isRowLockedById(b) && (this._lockedRows[c] = this._lockedRows[b], delete this._lockedRows[b]);
    this.isRenderedById(b) && ((this._renderedRows[c] = this._renderedRows[b]).setAttribute("i", c), delete this._renderedRows[b])
  };
  a.onIdListChange = function(a, b, c) {
    for(var e = a.length, f = 0, i = this._lockedRows, g = this._renderedRows, p, n;f < e;f++) {
      p = b[f], n = a[f][c], i.hasOwnProperty(p) && (i[n] = i[p], delete i[p]), g.hasOwnProperty(p) && ((g[n] = g[p]).setAttribute("i", n), delete g[p])
    }
  };
  a._getCellSelector = function() {
    return"#" + this.grid.mid + " ." + this._options.classCell
  };
  a._getRowSelector = function() {
    return"#" + this.grid.mid + " ." + this._options.classRow
  };
  a.scrollTo = function(a, b) {
    this.scrollToRow(a);
    this.scrollToCol(b)
  };
  a.scrollToRowLazy = function(a) {
    var b = this.getScrollTop();
    return c.isNull(a) ? b : this._getLastSafeVisibleRow() < a ? this.scrollToRow(this._getFirstRowForSafe(a)) : this._getFirstSafeVisibleRow() > a ? this.scrollToRow(a) : b
  };
  a.scrollToColLazy = function(a) {
    var b = this.getScrollLeft();
    if(c.isNull(a)) {
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
  a.scrollToLazy = function(a, b) {
    this.scrollToRowLazy(a);
    this.scrollToColLazy(b)
  };
  a.scrollToRow = function(a) {
    return c.isNotNull(a) ? this.setScrollTop(this._getRowOuterHeight() * a) : this.getScrollTop()
  };
  a.scrollToCol = function(a) {
    return this.setScrollLeft(this.getColLeft(a))
  };
  a._getColInnerWidth = function(a) {
    return this.grid.colDefMgr.get(a).width
  };
  a._getColInnerWidthByKey = function(a) {
    return this.grid.colDefMgr.getByKey(a).width
  };
  a.getColWidth = function(a) {
    return this.grid.colDefMgr.get(a).width + this._options.padding
  };
  a.getColWidthByKey = function(a) {
    return this.grid.colDefMgr.getByKey(a).width + this._options.padding
  };
  a._getColOuterWidth = function(a) {
    return this.grid.colDefMgr.get(a).width + this._options.padding + this._options.borderThickness
  };
  a._getColOuterWidthByKey = function(a) {
    return this.grid.colDefMgr.getByKey(a).width + this._options.padding + this._options.borderThickness
  };
  a._getPadding = function() {
    return this._options.padding
  };
  a._colWidthPlus = function() {
    return this._options.padding + this._options.borderThickness
  };
  a._getRowOuterHeight = function() {
    return this._options.rowH + this._options.borderThickness
  };
  a._getRowInnerHeight = function() {
    return this._options.rowH
  };
  a._calHeight = function() {
    return this._options.autoHeight ? this._calCanvasHeight() + (this.grid.width() < this._calCanvasWidth() ? this.grid._vars.scrollbarDim.h : 0) : this._getRowOuterHeight() * this._options.rowsPerPage
  };
  a.getHeight = function() {
    return this._mask[0].offsetHeight
  };
  a.getInnerHeight = function() {
    return this._mask[0].clientHeight
  };
  a._getWidth = function() {
    return this._mask[0].offsetWidth
  };
  a.getInnerWidth = function() {
    return this._mask[0].clientWidth
  };
  a._calCanvasHeight = function() {
    return this._getRowOuterHeight() * this.grid.dataMgr.datalist.length
  };
  a.getCanvasHeight = function() {
    return this._canvas[0].clientHeight
  };
  a._setCanvasHeight = function(a) {
    a = parseInt(a);
    if(!(isNaN(a) || a < 1)) {
      var b = this.getCanvasHeight();
      if(a != b) {
        this._canvas[0].style.height = a + "px", this.grid.event.trigger("onResizeCanvasHeight", [a, b])
      }
    }
  };
  a._calCanvasWidth = function() {
    return this._colLefts[this.grid.colDefMgr.length()]
  };
  a.getCanvasWidth = function() {
    return this._canvas[0].clientWidth
  };
  a._setCanvasWidth = function(a) {
    typeof a != "number" && (a = parseInt(a));
    if(isFinite(a) && !(a < 1)) {
      var b = this.getCanvasWidth();
      if(a != b) {
        this._canvas[0].style.width = a + "px", this.grid.event.trigger("onResizeCanvasWidth", [a, b])
      }
    }
  };
  a.getColLeft = function(a) {
    return this._colLefts[a]
  };
  a._getColLefts = function() {
    return this._colLefts
  };
  a._setColLefts = function(a, b) {
    c.isNull(a) && (a = 0);
    var e = this.grid.colDefMgr.get(), f = this._colWidthPlus();
    if(c.isNull(b)) {
      b = e.length
    }
    for(;a < b;a++) {
      this._colLefts[a + 1] = this._colLefts[a] + e[a].width + f
    }
    return this._colLefts
  };
  a._onReorderCols = function() {
    this._setColLefts();
    this._rerender()
  };
  a.setWidthByKey = function(a, b) {
    var e = this.grid.colDefMgr.getByKey(a), b = c.bound(b, e.minW, e.maxW);
    if(b !== e.width) {
      var f = e.width;
      e.width = b;
      this._setCanvasWidth(this._setColLefts(this.grid.colDefMgr.getIdxByKey(a))[this.grid.colDefMgr.length()]);
      this.grid._recreateDynamicCss();
      this.grid.event.trigger("onResizeCol_" + a + " onResizeCol", [a, b, f])
    }
  };
  a._autoColWidth = function(a) {
    for(var b = this._canvasFind(".k_" + a), c = Number.MIN_VALUE, e = b.length, f = 0;f < e;f++) {
      if(c < b[f].scrollWidth) {
        c = b[f].scrollWidth
      }
    }
    c -= this._getPadding();
    this.setWidthByKey(a, c)
  };
  a._setWidth = function(a) {
    a = parseInt(a);
    if(!(isNaN(a) || a < 1)) {
      this._mask[0].style.width = a + "px"
    }
  };
  a.getScrollTop = function() {
    return this._mask[0].scrollTop
  };
  a.getScrollLeft = function() {
    return this._mask[0].scrollLeft
  };
  a.setScrollTop = function(a) {
    var b = this.getScrollTop();
    return c.isNotNull(a) && b != a ? this._mask[0].scrollTop = a : b
  };
  a.setScrollLeft = function(a) {
    var b = this.getScrollLeft();
    return c.isNotNull(a) && b != a ? this._mask[0].scrollLeft = a : b
  };
  a._hasHScrollbar = function() {
    return this._mask[0].offsetHeight > this._mask[0].clientHeight
  };
  a._hasVScrollbar = function() {
    return this._mask[0].offsetWidth > this._mask[0].clientWidth
  };
  a._heightPlus = function() {
    return this._mask[0].offsetHeight - this._mask[0].clientHeight
  };
  a._widthPlus = function() {
    return this._mask[0].offsetWidth - this._mask[0].clientWidth
  };
  a._getFirstVisibleRow = function() {
    return Math.floor(this.getScrollTop() / this._getRowOuterHeight())
  };
  a._getFirstSafeVisibleRow = function() {
    return Math.ceil(this.getScrollTop() / this._getRowOuterHeight())
  };
  a._getLastVisibleRow = function() {
    return Math.ceil((this.getScrollTop() + this._mask[0].clientHeight) / this._getRowOuterHeight()) - 1
  };
  a._getLastSafeVisibleRow = function() {
    return Math.floor((this.getScrollTop() + this._mask[0].clientHeight) / this._getRowOuterHeight()) - 1
  };
  a._getFirstRowForSafe = function(a) {
    return a - Math.floor(this._mask[0].clientHeight / this._getRowOuterHeight()) + 1
  };
  a._getFirstVisibleCol = function() {
    for(var a = this.getScrollLeft(), b = this._colLefts, c = 0, e = b.length;c < e;c++) {
      if(b[c] > a) {
        return c - 1
      }
      if(b[c] === a) {
        return c
      }
    }
    return e - 2
  };
  a._getFirstSafeVisibleCol = function() {
    for(var a = this.getScrollLeft(), b = this._colLefts, c = 0, e = b.length;c < e;c++) {
      if(b[c] >= a) {
        return c
      }
    }
    return e - 2
  };
  a._getLastVisibleCol = function() {
    for(var a = this.getScrollLeft() + this._mask[0].clientWidth, b = this._colLefts, c = 0, e = b.length;c < e;c++) {
      if(b[c] >= a) {
        return c - 1
      }
    }
    return e - 2
  };
  a._getLastSafeVisibleCol = function() {
    for(var a = this.getScrollLeft() + this._mask[0].clientWidth, b = this._colLefts, c = 0, e = b.length;c < e;c++) {
      if(b[c] > a) {
        return c - 2
      }
    }
    return e - 2
  };
  a._getFirstColForSafe = function(a) {
    var b = this._colLefts, c = b[a + 1] - this._mask[0].clientWidth, e = a;
    if(c <= 0) {
      return 0
    }
    for(;e >= 0;e--) {
      if(e === a && b[e] <= c || b[e] === c) {
        return e
      }
      if(b[e] < c) {
        return e + 1
      }
    }
    return 0
  };
  a.getScrollHForSafe = function(a) {
    var b = this._colLefts, c = b[a + 1] - this._mask[0].clientWidth;
    return b[a] <= c ? b[a] : c
  };
  a._getRenderRange = function() {
    if(this._options.autoHeight) {
      return{start:0, end:this.grid.dataMgr.datalist.length - 1}
    }
    var a, b = this.grid.dataMgr.datalist.length - 1;
    return{start:(a = this._getFirstVisibleRow() - this._options.bufferSize) < 0 ? 0 : a, end:(a = this._getLastVisibleRow() + this._options.bufferSize) > b ? b : a}
  };
  a._fitHeight = function() {
    this._mask[0].style.height = this.getCanvasHeight() + this._heightPlus() + "px"
  };
  a._resizeWidth = function() {
    this._options.autoHeight && this._fitHeight()
  };
  a.onAfterRefresh = function(a) {
    a !== void 0 && a.noRerender === !0 || this._rerender()
  };
  a._rerender = function() {
    var a = this.getScrollTop(), b = this.getScrollLeft();
    this.grid.event.trigger("onBeforeRerender");
    this.unlockAllRows();
    this._removeRows();
    var c = this.grid.dataMgr.datalist.length;
    if(this._lastRowLen !== c) {
      this._lastRowLen = c, this._setCanvasHeight(this._calCanvasHeight())
    }
    this._render();
    this.setScrollTop(a);
    this.setScrollLeft(b);
    this.grid.event.trigger("onAfterRerender")
  };
  a._render = function(a) {
    this._removeAndRenderRows(a)
  };
  a._renderShift = function(a) {
    c.isNull(a) && (a = this._getRenderRange());
    this._removeRowsExcept(a);
    this._appendRows(a)
  };
  a._removeRows = function(a) {
    var b = this._canvas[0], e = this._renderedRows, f = this._lockedRows, g;
    if(c.isNull(a)) {
      if(this._lockExist()) {
        for(g in e) {
          e.hasOwnProperty(g) && f.hasOwnProperty(g) && (b.removeChild(e[g]), delete e[g])
        }
      }else {
        this._renderedRows = {}, b.innerHTML = ""
      }
    }else {
      for(var i = a.start, a = a.end, j = this.grid.dataMgr;i <= a;i++) {
        if(!f.hasOwnProperty(g = j.getIdByIdx(i)) && e.hasOwnProperty(g)) {
          b.removeChild(e[g]), delete e[g]
        }
      }
    }
  };
  a._removeRowsExcept = function(a) {
    var b = this._canvas[0], e = this._renderedRows, f = this._lockedRows, g;
    if(c.isNull(a)) {
      if(this._lockExist()) {
        for(g in e) {
          e.hasOwnProperty(g) && f.hasOwnProperty(g) === !1 && (b.removeChild(e[g]), delete e[g])
        }
      }else {
        this._renderedRows = {}, b.innerHTML = ""
      }
    }else {
      var i = a.start, a = a.end, j = this.grid.dataMgr, p;
      for(g in e) {
        if(e.hasOwnProperty(g) && !(f.hasOwnProperty(g) || i <= (p = j.getIdxById(g)) && p <= a)) {
          b.removeChild(e[g]), delete e[g]
        }
      }
    }
  };
  a.destroyRow = function(a) {
    return this.destroyRowById(this.grid.dataMgr.getId(a))
  };
  a.destroyRowById = function(a) {
    c.isNotNull(a) && (this.unlockRowById(a), this._renderedRows.hasOwnProperty(a) && (this._canvas[0].removeChild(this._renderedRows[a]), delete this._renderedRows[a]))
  };
  a.destroyRowByIdx = function(a) {
    return this.destroyRowById(this.grid.dataMgr.getIdByIdx(a))
  };
  a._lockExist = function() {
    return c.isNotEmptyObj(this._lockedRows)
  };
  a.isRowLockedById = function(a) {
    return c.isNotNull(a) ? this._lockedRows.hasOwnProperty(a) : !1
  };
  a.isRowLocked = function(a) {
    return this.isRowLockedById(this.grid.dataMgr.getId(a))
  };
  a.isRowLockedByIdx = function(a) {
    return this.isRowLockedById(this.grid.dataMgr.getIdByIdx(a))
  };
  a.lockRowById = function(a) {
    c.isNotNull(a) && this.grid.dataMgr.hasById(a) && (this._lockedRows[a] = !0)
  };
  a.lockRow = function(a) {
    return this.lockRowById(this.grid.dataMgr.getId(a))
  };
  a.lockRowByIdx = function(a) {
    return this.lockRowById(this.grid.dataMgr.getIdByIdx(a))
  };
  a.unlockRowById = function(a) {
    this.isRowLockedById(a) && delete this._lockedRows[a]
  };
  a.unlockRow = function(a) {
    return this.unlockRowById(this.grid.dataMgr.getId(a))
  };
  a.unlockRowByIdx = function(a) {
    return this.unlockRowById(this.grid.dataMgr.getIdByIdx(a))
  };
  a.unlockAllRows = function() {
    this._lockedRows = {}
  };
  a.rerenderRowById = function(a) {
    if(this.grid.dataMgr.containsById(a)) {
      var b = this._renderedRows, e = this._canvas[0], f = this.grid.dataMgr, g = f.getIdxById(a), f = f.getById(a), i = this.grid.colDefMgr.get(), j = this._getColCellClasses(i), p = this._getRowOuterHeight(), n = [];
      b.hasOwnProperty(a) && (e.removeChild(b[a]), this.grid.event.trigger("onBeforeRenderRows", [[g]]), this._renderRow(n, g, f, i, j, p), b[a] = c.appendHTML(e, n.join(""))[0], this.grid.event.trigger("onAppendRows", [[g]]))
    }
  };
  a.rerenderRow = function(a) {
    return this.rerenderRowById(this.grid.dataMgr.getId(a))
  };
  a.rerenderRowByIdx = function(a) {
    return this.rerenderRowById(this.grid.dataMgr.getIdByIdx(a))
  };
  a.rerenderCellByIdAndKey = function(a, b) {
    var c = this.getCellByIdAndKey(a, b);
    if(c !== void 0) {
      var e = this.grid.dataMgr, f = this.grid.colDefMgr, g = e.getById(a), j = f.getByKey(b), e = e.getIdxById(a), f = f.getIdxByKey(b);
      c.innerHTML = this._renderCell([], e, f, g, j).join("")
    }
  };
  a.rerenderCellByIdx = function(a, b) {
    return this.rerenderCellByIdAndKey(this.grid.dataMgr.getIdByIdx(a), this.grid.colDefMgr.getKeyByIdx(b))
  };
  a._appendRows = function(a) {
    this.grid.event.trigger("onBeforeRenderRows", [a]);
    for(var b = [], e = a.start, f = a.end, g = this.grid.dataMgr.datalist, i = this.grid.dataMgr.idKey, j = this.grid.colDefMgr.get(), p = this._getColCellClasses(j), n = this._renderedRows, q = this._getRowOuterHeight(), o = this._canvas[0], r, s, t = [];e <= f;e++) {
      if(r = g[e], !n.hasOwnProperty(s = r[i])) {
        this._renderRow(b, e, r, j, p, q), t.push(s)
      }
    }
    b = c.appendHTML(o, b.join(""));
    e = 0;
    for(f = t.length;e < f;e++) {
      n[t[e]] = b[e]
    }
    this.grid.event.trigger("onAppendRows", [a])
  };
  a._removeAndRenderRows = function(a) {
    c.isNull(a) && (a = this._getRenderRange());
    this.grid.event.trigger("onBeforeRenderRows", [a]);
    for(var b = [], e = a.start, f = a.end, g = this.grid.dataMgr, i = g.datalist, j = g.idKey, p = this.grid.colDefMgr.get(), n = this._getColCellClasses(p), g = this._canvas[0], q = this._getRowOuterHeight(), o, r = [], s = {};e <= f;e++) {
      o = i[e], this._renderRow(b, e, o, p, n, q), r.push(o[j])
    }
    g.innerHTML = b.join("");
    e = 0;
    for(b = r.length;e < b;e++) {
      s[r[e]] = g.childNodes[e]
    }
    this._renderedRows = s;
    this.grid.event.trigger("onAppendRows", [a])
  };
  a._getColCellClass = function(a) {
    var b = this._options.classCell + " k_" + a.key;
    c.isNotNull(a.colClass) && (b += " " + a.colClass);
    b += " " + this.grid.event.trigger("onGetColCellClass", [a]).join(" ");
    return b
  };
  a._getColCellClasses = function(a) {
    var b = [], e = 0, f = a.length;
    for(c.isNull(a) && (a = this.grid.colDefMgr.get());e < f;e++) {
      b.push(this._getColCellClass(a[e]))
    }
    return b
  };
  a._renderRow = function(a, b, c, e, f, g) {
    a.push("<div class='" + this._options.classRow + "' i='" + c[this.grid.dataMgr.idKey] + "' " + this._options.attrRowIdx + "='" + b + "' style='top:" + g * b + "px'>");
    for(var g = 0, j = e.length;g < j;g++) {
      a.push("<div class='" + f[g] + " " + this.grid.event.trigger("onGetCellClass", [b, g, c, e[g]]).join(" ") + "'>"), this._renderCell(a, b, g, c, e[g]), a.push("</div>")
    }
    a.push("</div>");
    return a
  };
  a._renderCell = function(a, b, c, e, f) {
    this.grid.event.trigger("onRenderCell_" + f.key + "_prepend", [b, c, e, f, a]);
    var i = e[f.key];
    if(typeof i !== "string" || i.substring(0, 3) !== "J@H") {
      f.rendererInput ? a.push(f.renderer(g.create("Cell", {grid:this.grid, row:b, col:c, datarow:e, colDef:f}))) : a.push(f.renderer(i, b, c, e, f, this))
    }
    this.grid.event.trigger("onRenderCell_" + f.key + "_append", [b, c, e, f, a]);
    return a
  };
  b.prototype.rerender = function() {
    return this.grid.view.rerenderCellByIdAndKey(this.getId(), this.getKey())
  };
  b.prototype.scrollTo = function() {
    this.grid.view.scrollTo(this.getRowIdx(), this.getColIdx())
  };
  a._keydown = function(a) {
    c.contains(this._mask[0], document.activeElement, this._ctnr[0]) && this.grid.event.trigger("keydownCanvas_" + a.which + " keydownCanvas", [a])
  };
  a._keyup = function(a) {
    c.contains(this._mask[0], document.activeElement, this._ctnr[0]) && this.grid.event.trigger("keyupCanvas_" + a.which + " keyupCanvas", [a])
  };
  a._keypress = function(a) {
    c.contains(this._mask[0], document.activeElement, this._ctnr[0]) && this.grid.event.trigger("keypressCanvas_" + a.which + " keypressCanvas", [a])
  };
  a._mousein = function(a) {
    this._drag ? this._triggerMouseEvent(a, {event:"draginCanvas mouseinCanvas"}, e.V_MOUSEIN) : this._triggerMouseEvent(a, {event:"mouseinCanvas"}, e.V_MOUSEIN)
  };
  a._mouseout = function(a) {
    this._drag ? this._triggerMouseEvent(a, {event:"dragoutCanvas mouseoutCanvas"}, e.V_MOUSEOUT) : this._triggerMouseEvent(a, {event:"mouseoutCanvas"}, e.V_MOUSEOUT)
  };
  a._mouseenter = function(a) {
    this._drag ? this._triggerMouseEvent(a, {event:"dragenterCanvas mouseenterCanvas"}, e.V_MOUSEENTER) : this._triggerMouseEvent(a, {event:"mouseenterCanvas"}, e.V_MOUSEENTER)
  };
  a._mouseleave = function(a) {
    this._drag ? this._triggerMouseEvent(a, {event:"dragleaveCanvas mouseleaveCanvas"}, e.V_MOUSELEAVE) : this._triggerMouseEvent(a, {event:"mouseleaveCanvas"}, e.V_MOUSELEAVE)
  };
  a._mousemove = function(a) {
    this._drag ? this._triggerMouseEvent(a, {event:"dragmoveCanvas mousemoveCanvas"}, e.V_MOUSEMOVE) : this._triggerMouseEvent(a, {event:"mousemoveCanvas"}, e.V_MOUSEMOVE)
  };
  a._mouseover = function(a) {
    this._drag ? this._triggerMouseEvent(a, {event:"dragoverCanvas mouseoverCanvas"}, e.V_MOUSEOVER) : this._triggerMouseEvent(a, {event:"mouseoverCanvas"}, e.V_MOUSEOVER)
  };
  a._mousedown = function(a) {
    if(this._triggerMouseEvent(a, {event:"mousedownCanvas"}, e.V_MOUSEDOWN)) {
      this._drag = !0
    }
  };
  a._mouseup = function(a) {
    this._drag = !1;
    this._triggerMouseEvent(a, {event:"mouseupCanvas"}, e.V_MOUSEUP)
  };
  a._click = function(a) {
    this._triggerMouseEvent(a, {event:"clickCanvas"}, e.V_CLICK) && this.focus(a)
  };
  a._dblclick = function(a) {
    this._triggerMouseEvent(a, {event:"dblclickCanvas"}, e.V_DBLCLICK)
  };
  a._triggerMouseEvent = function(a, b) {
    var e = this._getClosestCell(a.target), f, m, i;
    if(e === void 0) {
      return!1
    }
    b.cell = g.create("Cell", {grid:this.grid, node:e});
    e = c.split(b.event);
    i = e.length;
    f = [];
    for(m = 0;m < i;m++) {
      f.push(e[m] + "_" + b.cell.getKey()), f.push(e[m])
    }
    this.grid.event.trigger(f.join(" "), [a, b.cell]);
    return!0
  };
  a._scroll = function() {
    var a = this.getScrollTop(), b = a - this._lastScrollTop, c = this.getScrollLeft(), e = c - this._lastScrollLeft;
    if(!(b === 0 && e === 0)) {
      this.grid.event.trigger("onScrollViewport");
      if(e) {
        this._lastScrollLeft = c, this.grid.event.trigger("onScrollViewportH", [c])
      }
      if(!(Math.abs(b / this._getRowOuterHeight()) < this._options.appendThreshold)) {
        this._lastScrollTop = a, this._render(), this.grid.event.trigger("onScrollViewportV")
      }
    }
  };
  a.focus = function(a) {
    if(!c.isNotNull(a) || !this.grid.event.triggerInvalid("onBeforeFocusCanvas", [a])) {
      if(a = this._mask[0], document.activeElement !== a) {
        if(c.isFunction(a.setActive)) {
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
  a.isRenderedById = function(a) {
    return c.isNotNull(a) ? this._renderedRows.hasOwnProperty(a) : !1
  };
  a.isRendered = function(a) {
    return this.isRenderedById(this.grid.dataMgr.getId(a))
  };
  a.isRenderedByIdx = function(a) {
    return this.isRenderedById(this.grid.dataMgr.getIdByIdx(a))
  };
  a.getRowById = function(a) {
    if(this.isRenderedById(a)) {
      return this._renderedRows[a]
    }
  };
  a.getRow = function(a) {
    return this.getRowById(this.grid.dataMgr.getId(a))
  };
  a.getRowByIdx = function(a) {
    return this.getRowById(this.grid.dataMgr.getIdByIdx(a))
  };
  a.getRenderedRowById = function(a) {
    if(this.isRenderedById(a)) {
      return this._renderedRows[a]
    }
  };
  a.getRenderedRow = function(a) {
    return this.getRenderedRowById(this.grid.dataMgr.getId(a))
  };
  a.getRenderedRowByIdx = function(a) {
    return this.getRenderedRowById(this.grid.dataMgr.getIdByIdx(a))
  };
  a.getRenderedRows = function() {
    return c.toArray(this._renderedRows)
  };
  a.getCell = function(a, b) {
    var e = this.getRowByIdx(a);
    if(c.isNotNull(e, b)) {
      return e.childNodes[b]
    }
  };
  a.getCellByIdAndKey = function(a, b) {
    var e = this.getRowById(a), f = this.grid.colDefMgr.getIdxByKey(b);
    if(c.isNotNullAnd(e, f)) {
      return e.childNodes[f]
    }
  };
  a.getRenderedCell = function(a, b) {
    var e = this.getRenderedRowByIdx(a);
    if(c.isNotNull(e)) {
      return e.childNodes[b]
    }
  };
  a.getRenderedCellByIdAndKey = function(a, b) {
    var e = this.getRenderedRowById(a), f = this.grid.colDefMgr.getIdxByKey(b);
    if(c.isNotNullAnd(e, f)) {
      return e.childNodes[f]
    }
  };
  a._getClosestCell = function(a) {
    return c.closestWithTag(a, "DIV", this._options.classCell, this._canvas[0])
  };
  a._getClosestRow = function(a) {
    return c.closestWithTag(a, "DIV", this._options.classRow, this._canvas[0])
  };
  a._getClosestRowIdx = function(a) {
    return this.grid.dataMgr.getIdxByNode(this._getClosestRow(a))
  };
  a._canvasFind = function(a) {
    return this._canvas.find(a)
  };
  f._renderer = function(a) {
    return c.ifNull(a, "")
  }
})();
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
    var c = "column key=" + this.key;
    if(this.manager.hasKey(this.key)) {
      throw Error("Duplicate column key!" + c);
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
      throw Error("Invalid parser!" + c);
    }
    this.parser = e.parser || null;
    if(e.validator && typeof e.validator != "function") {
      throw Error("Invalid validator!" + c);
    }
    this.validator = e.validator || null;
    if(e.renderer && typeof e.renderer != "function") {
      throw Error("Invalid renderer!" + c);
    }
    this.renderer = e.renderer || null;
    if(e.sumRenderer && typeof e.sumRenderer != "function") {
      throw Error("Invalid sum renderer!" + c);
    }
    this.sumRenderer = e.sumRenderer || null;
    if(e.editor && typeof e.editor != "object") {
      throw Error("Invalid editor!" + c);
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
jx.grid.ColumnManager = {};
(function() {
  function f(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    this.grid.colDefMgr = this;
    this._options = h._extend({colDef:{type:"string", key:void 0, name:"", colClass:void 0, defaultValue:void 0, inputOnCreate:void 0, style:"", headerStyle:"", width:80, minW:30, maxW:void 0, editor:void 0, sorter:void 0, hidden:!1, sumRenderer:void 0, tooltipEnabled:!1, resizable:!1, renderer:k._renderer, rendererInput:!1, noTitle:!1, noName:!1, title:void 0, noSearch:!1, filter:void 0, parser:void 0, validator:void 0}}, a.options);
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
  function c(a) {
    return typeof a != "string" ? a == null ? "" : a.toString() : a
  }
  function b(a) {
    return new Date(Date.parse(a))
  }
  function a(a, b) {
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
  var h = goog.getObjectByName("jx.grid"), l = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.getObjectByName("jx.grid.Column");
  var k = goog.getObjectByName("jx.grid.ViewportManager");
  goog.exportSymbol("jx.grid.ColumnManager", f);
  f.getInstance = function(a) {
    return new f(a)
  };
  var m = f.prototype;
  m.__init = function(a) {
    this.grid.event.bind("onDestroy", this._destroy, this);
    this.set(a.colDefs)
  };
  m._destroy = function() {
    h._destroy(this, {name:"ColumnManager", path:"colDefMgr", property:"colDefs", map:"keyToIdx _keyToDef _options", array:"filtered"})
  };
  m.getAll = function() {
    return this._colDefs
  };
  m.set = function(a) {
    if(this._colDefs === a || l.areEqualArrays(this._colDefs, a)) {
      return a
    }
    if(l.isNull(a)) {
      a = []
    }else {
      var b = a.filter(function(a) {
        return l.isNotNull(a)
      });
      a.length = 0;
      a.pushList(b)
    }
    this.grid.event.trigger("onBeforeSetColDefs", [this._colDefs, a]);
    this._colDefs = [];
    this._filtered.length = 0;
    this._keyToIdx = {};
    this._keyToDef = {};
    this.grid.event.trigger("onEmptyColDefs");
    for(var b = 0, d = a.length, c = this._keyToDef, e, f;b < d;b++) {
      e = a[b];
      if(!e.hasOwnProperty("key")) {
        return this._keyToDef = {}, this.grid.error("KEY_UNDEFINED", b)
      }
      f = e.key;
      if(l.isEmptyString(f)) {
        return this._keyToDef = {}, this.grid.error("BAD_NULL", b)
      }
      if(c.hasOwnProperty(f)) {
        return this._keyToDef = {}, this.grid.error("DUP_KEY", f)
      }
      c[f] = e
    }
    this._colDefs = a;
    for(b = 0;b < d;b++) {
      this._extend(a[b])
    }
    this.grid.event.trigger("onAfterSetColDefs", [a, this._filter()]);
    return a
  };
  m.push = function(a) {
    return this.addAt(this._filtered.length, a)
  };
  m.addAt = function(a, b) {
    if(!l.isNull(b)) {
      var d = b.key, c = this._keyToDef, e = this._filtered;
      l.isNull(a) || a > e.length ? a = e.length : a < 0 && (a += e.length);
      this.grid.event.trigger("onBeforeAddColDef", [b]);
      if(l.isNull(d)) {
        return this.grid.error("KEY_UNDEFINED")
      }
      if(c.hasOwnProperty(d)) {
        return this.grid.error("DUP_KEY", d)
      }
      this._colDefs.addAt(a, this._extend(c[d] = b));
      b.hidden !== !0 && (e.addAt(a, b), this._reidx());
      this.grid.event.trigger("onAfterAddColDef", [b, a]);
      return e.length
    }
  };
  m._extend = function(a) {
    if(a) {
      var d = {}, h, l;
      $.extend(!0, d, this._options.colDef);
      $.extend(!0, d, a);
      $.extend(!0, a, d);
      d = a.type = g(a.type);
      l = a.key;
      l != null && typeof l != "string" && (a.key = l = l.toString());
      if(!l) {
        throw Error("column key is not defined!");
      }
      if(h = a.sorter) {
        typeof h == "string" ? h = g(h) : d && (h = d);
        if(h = f.sorter(h, l)) {
          h.key = l
        }
        a.sorter = h
      }
      if((h = a.parser) && d && typeof h != "function") {
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
            h = c;
            break;
          case "date":
            h = b;
            break;
          default:
            h = null
        }
        a.parser = h
      }
    }
    return a
  };
  m.hide = function(a) {
    var b = this._filtered[a];
    if(!l.isNull(b)) {
      return b.hidden = !0, this._filtered.removeAt(a), this._reidx(), this.grid.event.trigger("onHideCol", [b, a]), b
    }
  };
  m.show = function(a) {
    if(!l.isNull(a)) {
      if(!l.isString(a)) {
        if(!l.isObject(a)) {
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
        this.grid.event.trigger("onShowCol", [b, this._keyToIdx[a]]);
        return b
      }
    }
  };
  m._filter = function() {
    this._filtered = this._colDefs.filter(function(a) {
      return a.hidden !== !0
    });
    this._reidx();
    return this._filtered
  };
  m._reidx = function() {
    this._keyToIdx = {};
    return this._reidxFrom()
  };
  m._reidxFrom = function(a) {
    l.isNull(a) && (a = 0);
    for(var b = this._filtered, d = b.length, c = this._keyToIdx;a < d;a++) {
      c[b[a].key] = a
    }
    return c
  };
  m.get = function(a) {
    if(l.isNull(a)) {
      return this._filtered
    }
    if(this._filtered.hasOwnProperty(a)) {
      return this._filtered[a]
    }
  };
  m.getByKey = function(a) {
    if(l.isNotNull(a) && this._keyToDef.hasOwnProperty(a)) {
      return this._keyToDef[a]
    }
  };
  m.length = function() {
    return this._filtered.length
  };
  m.getIdxByKey = function(a) {
    return this._keyToIdx.hasOwnProperty(a) ? this._keyToIdx[a] : -1
  };
  m.getIdx = function(a) {
    return l.isNotNull(a) && this._keyToIdx.hasOwnProperty(a.key) ? this._keyToIdx[a.key] : -1
  };
  m.sortByKey = function(a) {
    this._filtered.length = 0;
    this._keyToIdx = {};
    for(var b = 0, d = a.length, c = this._filtered, e = this._keyToIdx, f = this._keyToDef;b < d;b++) {
      c.push(f[a[b]]), e[a[b]] = b
    }
    this.grid.event.trigger("onReorderCols", a);
    return this._filtered
  };
  m.getKeys = function() {
    return this._filtered.map(function(a) {
      return a.key
    })
  };
  f.sorter = function(b, c, e) {
    e = {on:!!e, key:c};
    switch(b) {
      case "boolean":
        return e.comparator = function(a, b) {
          return d(a[c]) - d(b[c])
        }, e;
      case "string":
        return e.lexi = c, e;
      case "int":
        return e.comparator = function(b, d) {
          return a(b[c], "toInt") - a(d[c], "toInt")
        }, e;
      case "float":
        return e.comparator = function(b, d) {
          return a(b[c], "toFloat") - a(d[c], "toFloat")
        }, e;
      case "date":
        return e.comparator = function(b, d) {
          return a(b[c], "toInt") - a(d[c], "toInt")
        }, e
    }
    return null
  }
})();
jx.grid.MenuBar = {};
(function() {
  function f(a) {
    c.call(this, a);
    this.grid.menubar = this
  }
  var g = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util"), c = goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.MenuBar", f);
  goog.inherits(f, c);
  f.getInstance = function(a) {
    return new f(a)
  };
  var b = f.prototype;
  b._defaultOptions = function() {
    return{background:"url(" + this.grid._options.imageUrl + "menubar-bg.png) repeat-x scroll center", borderThickness:1, border:"solid #b6bac0", height:27, classMenuBar:"menubar", classIcon:"menu-icon", iconBorderThickness:1, iconBorder:"solid transparent", iconBorderHover:"solid #d4d4d4", iconBorderActive:"solid #9a9a9a", iconMargin:2, iconBackground:"", iconBackgroundHover:"url(" + this.grid._options.imageUrl + "menu-icon-hover.png) repeat-x scroll center", iconBackgroundActive:"url(" + this.grid._options.imageUrl + 
    "menu-icon-active.png) repeat-x scroll center", iconHeight:21, iconWidth:21, iconBorderRadius:4, iconBorderFocus:"solid #5f5f5f"}
  };
  b._init = function(a) {
    this._ctnr = a.container;
    this._menubar = $("<div class='" + this._options.classMenuBar + "'></div>").prependTo(this._ctnr)
  };
  b._bindEvents = function() {
    this.grid.event.bind({onCreateCss:this._onCreateCss, onDestroy:this._destroy}, this)
  };
  b._destroy = function() {
    g._destroy(this, {name:"MenuBar", path:"menubar", $:"menubar", property:"ctnr", map:"options"})
  };
  b._onCreateCss = function() {
    var a = "#" + this.grid.mid + " .", b = this._options, c = [];
    c.push(a + b.classMenuBar + "{" + g._CONST._cssUnselectable + "overflow:hidden;width:100%;background:" + b.background + ";border-bottom:" + (b.borderThickness + "px " + b.border) + ";height:" + b.height + "px}");
    c.push(a + b.classIcon + "{float:left;height:" + b.iconHeight + "px;width:" + b.iconWidth + "px;border:" + b.iconBorderThickness + "px " + b.iconBorder + ";margin:" + b.iconMargin + "px 0 0 " + b.iconMargin + "px;background:" + b.iconBackground + ";border-radius:" + b.iconBorderRadius + "px;-moz-border-radius:" + b.iconBorderRadius + "px}");
    c.push(a + b.classIcon + ":hover," + a + b.classIcon + ":focus{background:" + b.iconBackgroundHover + ";border:" + b.iconBorderThickness + "px " + b.iconBorderHover + "}");
    c.push(a + b.classIcon + ":active," + a + b.classIcon + ".active{cursor:default;background:" + b.iconBackgroundActive + ";border:" + b.iconBorderThickness + "px " + b.iconBorderActive + "}");
    c.push(a + b.classIcon + ".active:focus{border:" + b.iconBorderThickness + "px " + b.iconBorderFocus + "}");
    return c.join("")
  };
  b.addIcon = function(a, b, c, f, g) {
    return $("<div class='" + this._options.classIcon + "' tabIndex='0' title='" + b + "'><div class='" + a + "' style='margin-top:" + (this._options.iconHeight - f) / 2 + "px;margin-left:" + (this._options.iconWidth - c) / 2 + "px'></div></div>").appendTo(this._menubar).click(function(a) {
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
jx.grid.CheckManager = {};
(function() {
  function f(a) {
    function b() {
      var a = this._options, d = this._isRadio = a.isRadio = !!a.isRadio;
      this._hasMaster = a.master = !d && !!a.master;
      this._col = a.colDef;
      this._key = this._col.key;
      this._cssClass = a.classCheck;
      this._cssClassMaster = a.classMasterCheck;
      this._name = a.name || d && "radio" + this.mid || null
    }
    this.addEventListener("afteroption", b);
    c.call(this, a);
    this.removeEventListener("afteroption", b)
  }
  var g = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util"), c = goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.CheckManager", f);
  goog.inherits(f, c);
  f.getInstance = function(a) {
    return new f(a)
  };
  var b = f.prototype;
  b._init = function() {
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
  b._bindEvents = function() {
    var a = this._col.key, b;
    b = {onAfterSetDatalist:this.uncheckAll, onIdChange:this._onIdChange, onIdListChange:this._onIdListChange, onRemoveDatarow:this._onRemoveDatarow, onRemoveDatalist:this._onRemoveDatalist};
    b["onRenderCell_" + a + "_prepend"] = this._onRenderCell;
    b["keydownColSel_" + a + "_" + e.keyMapKeydown.space] = this._keydownColSel;
    if(this._hasMaster) {
      b["onRenderHeader_" + a + "_prepend"] = this._onRenderHeader, b.onRenderHeadersComplete = this._getMaster
    }
    this.bindGridEvent(b, this)
  };
  b._defaultOptions = function() {
    return{colDef:{key:"checkbox", width:20, name:" ", noTitle:!0, resizable:!1, sorter:null, filter:null, noSearch:!0, editor:null, inputOnCreate:!1}, colIdx:0, name:void 0, classCheck:"checkmg", classMasterCheck:"checkm", master:!0, isRadio:!1}
  };
  b._beforeDispose = function() {
    this.dispose()
  };
  b._beforeCreateCss = function(a) {
    var b, c, e = a.css;
    this._isRadio ? (a = g._CONST._radioWidth, b = g._CONST._radioHeight) : (a = g._CONST._checkboxWidth, b = g._CONST._checkboxHeight);
    c = "*overflow:hidden;padding:0;width:" + a + "px;height:" + b + "px;";
    e.push(this.getView()._getCellSelector() + " ." + this._cssClass + "[mid='" + this.mid + "']{" + c + "margin:" + (this.getView()._getRowInnerHeight() - b) / 2 + "px 0 0 " + (this._col.width - this.getView()._getPadding() - a) / 2 + "px}#" + this.mid + "h{" + c + "margin:" + (this.getHeader()._options.height - b) / 2 + "px 0 0 0}")
  };
  b.checkList = function(a, b) {
    if(!b) {
      a = this.getDataMgr().mapList(a).mapped
    }
    for(var c = 0, e = a.length;c < e;c++) {
      this.check(a[c], !0)
    }
  };
  b.setCheckList = function(a, b) {
    this.uncheckAll();
    this.checkList(a, b)
  };
  b.getCheckList = function() {
    return e.toArray(this._map)
  };
  b.getDisableds = function() {
    return e.toArray(this.disabledmap)
  };
  b.toggleCheckAll = function() {
    this.isCheckedAll() ? this.uncheckAll() : this.checkAll()
  };
  b.checkAll = function() {
    this._hasMaster && f._check(this._master);
    f._check(this.getCheckboxes());
    for(var a = this.getAllData(), b = a.length, c = this.getIdKey(), e = this._map, g = 0;g < b;g++) {
      e[a[g][c]] = a[g]
    }
    this._count = b
  };
  b.uncheckAll = function() {
    this._hasMaster && f._uncheck(this._master);
    f._uncheck(this.getCheckboxes());
    this._map = {};
    this._count = 0
  };
  b.toggleCheck = function(a, b) {
    b || (a = this.getDataMgr().map(a));
    this.isChecked(a, !0) && !this._isRadio ? this.uncheck(a, !0) : this.check(a, !0)
  };
  b.toggleDisable = function(a, b) {
    b || (a = this.getDataMgr().map(a));
    this.isDisabled(a, !0) ? this.enable(a, !0) : this.disable(a, !0)
  };
  b.toggleById = function(a) {
    this.toggleCheck(this.getDataMgr().getById(a), !0)
  };
  b.check = function(a, b) {
    b || (a = this.getDataMgr().map(a));
    this._add(a) && (f._check(this.getCheckbox(a)), this._updateMaster(), this.triggerGridEvent("onCheckChange", [a, !0]))
  };
  b.uncheck = function(a, b) {
    b || (a = this.getDataMgr().map(a));
    this._remove(a) && (f._uncheck(this.getCheckbox(a)), this._hasMaster && f._uncheck(this._master), this.triggerGridEvent("onCheckChange", [a, !1]))
  };
  b.disable = function(a, b) {
    var c = this.getDataMgr();
    b || (a = c.map(a));
    var c = c.getId(a), e = this.disabledmap;
    e.hasOwnProperty(c) || (e[c] = a, f.disableNode(this.getCheckbox(a)), this.triggerGridEvent("onDisableCheck", [a]))
  };
  b.enable = function(a, b) {
    var c = this.getDataMgr();
    b || (a = c.map(a));
    var c = c.getId(a), e = this.disabledmap;
    e.hasOwnProperty(c) && (delete e[c], f.enableNode(this.getCheckbox(a)), this.triggerGridEvent("onEnableCheck", [a]))
  };
  b._updateMaster = function() {
    this._hasMaster && f._setCheck(this._master, this.isCheckedAll())
  };
  b._add = function(a) {
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
  b._remove = function(a) {
    var a = a[this.getIdKey()], b = this._map;
    if(!b.hasOwnProperty(a)) {
      return!1
    }
    delete b[a];
    this._count--;
    return!0
  };
  b.isChecked = function(a, b) {
    var c = this.getDataMgr();
    b || (a = c.map(a));
    return this._map.hasOwnProperty(c.getId(a))
  };
  b.isDisabled = function(a, b) {
    var c = this.getDataMgr();
    b || (a = c.map(a));
    return this.disabledmap.hasOwnProperty(c.getId(a))
  };
  b.splitChecked = function(a, b) {
    if(!b) {
      a = this.getDataMgr().mapList(a).mapped
    }
    for(var c = [], e = [], f = 0, g = a.length, i = this.getIdKey(), j, p = this._map;f < g;f++) {
      p.hasOwnProperty((j = a[f])[i]) ? c.push(j) : e.push(j)
    }
    return{checked:c, unchecked:e}
  };
  b.isCheckedAll = function() {
    return this._count !== 0 && this._count === this.getAllData().length ? !0 : !1
  };
  b.removeChecked = function() {
    return this.getDataMgr().removeList(this.getCheckList())
  };
  b._getMaster = function() {
    this._master = $(document.getElementById(this.mid + "h"))
  };
  b._getChecks = function(a) {
    for(var b = a.length, c = [], e = 0, f = this.getColMgr().getIdxByKey(this._key);e < b;e++) {
      c.push(a[e].childNodes[f].childNodes[0])
    }
    return c
  };
  b.getCheckboxes = function() {
    return this._getChecks(this.getView().getRenderedRows())
  };
  b.getCheckboxById = function(a) {
    if(a = this.getView().getRowById(a)) {
      return a.childNodes[this.getColMgr().getIdxByKey(this._key)].childNodes[0]
    }
  };
  b.getCheckbox = function(a) {
    return this.getCheckboxById(this.getDataMgr().getId(a))
  };
  b.getCheckboxByIdx = function(a) {
    return this.getCheckboxById(this.getDataMgr().getIdByIdx(a))
  };
  b._onRemoveDatarow = function(a) {
    this.uncheck(a, !0);
    this.enable(a, !0)
  };
  b._onRemoveDatalist = function(a) {
    for(var b = 0, c = a.length;b < c;b++) {
      this.uncheck(a[b], !0), this.enable(a[b], !0)
    }
  };
  b._onIdChange = function(a, b, c) {
    var e = this._map, f = this.disabledmap;
    e.hasOwnProperty(b) && (delete e[b], e[c] = a);
    f.hasOwnProperty(b) && (delete f[b], f[c] = a)
  };
  b._onIdListChange = function(a, b, c) {
    for(var e = 0, f = a.length, g = this._map, i = this.disabledmap, j, p;e < f;e++) {
      j = a[e], p = b[e], g.hasOwnProperty(p) && (delete g[p], g[j[c]] = j), i.hasOwnProperty(p) && (delete i[p], i[j[c]] = j)
    }
  };
  b._keydownColSel = function(a, b, c) {
    a.preventDefault();
    if(b && c) {
      var a = this.isChecked(c.getDatarow(), !0), e, c = this.getDataList();
      if(this._isRadio) {
        for(e in b) {
          if(b.hasOwnProperty(e) && e !== "length") {
            this.check(c[e], !0);
            break
          }
        }
      }else {
        for(e in b) {
          b.hasOwnProperty(e) && e !== "length" && (a ? this.uncheck(c[e], !0) : this.check(c[e], !0))
        }
      }
    }
  };
  b._onRenderHeader = function(a) {
    a.push("<input id='" + this.mid + "h' type='checkbox' tabIndex='-1' onclick='JGM.m.CheckManager." + this.mid + ".toggleCheckAll();' class='" + this._cssClass + " " + this._cssClassMaster + "' mid='" + this.mid + "'");
    this.isCheckedAll() && a.push(" checked='checked'");
    this._disabled && a.push(" disabled='disabled'");
    a.push("/>")
  };
  b._onRenderCell = function(a, b, c, e, f) {
    f.push("<input tabIndex='-1' onclick=\"JGM.m.CheckManager." + this.mid + ".toggleById('" + c[this.getIdKey()] + "')\" type='" + (this._isRadio ? "radio" : "checkbox") + "' class='" + this._cssClass + "' mid='" + this.mid + "'");
    this._name && f.push(" name='" + this._name + "'");
    this.isChecked(c, !0) && f.push(" checked='checked'");
    (this._disabled || this.isDisabled(c, !0)) && f.push(" disabled='disabled'");
    f.push("/>")
  };
  b.disableAll = function() {
    if(!this._disabled) {
      this._disabled = !0, this._hasMaster && this._master.attr("disabled", "disabled"), $(this.getCheckboxes()).attr("disabled", "disabled")
    }
  };
  b.enableAll = function() {
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
    this._tree = new c({list:this.grid.dataMgr.all, options:this._options.Tree})
  }
  var g = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var c = goog.getObjectByName("jx.struct.Tree");
  goog.exportSymbol("jx.grid.Collapser", f);
  f.getInstance = function(a) {
    return new f(a)
  };
  var b = f.prototype;
  b.__init = function() {
    e.isNull(this._options.key) && this.grid.colDefMgr.addAt(this._options.colIdx, this._options.colDef);
    this._makeTree();
    this._filterRefresh();
    this.key = e.isNull(this._options.key) ? this._options.colDef.key : this._options.key;
    this.bindEvents()
  };
  b.bindEvents = function() {
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
  b._destroy = function() {
    g._destroy(this, {name:"Collapser", path:"collapser", module:"tree", $:"master", property:"checkMgr", map:"options"})
  };
  b._onCreateCss = function() {
    var a = "#" + this.grid.mid + " .", b = this._options, c = a + this.grid.view._options.classRow + " .", f = a + b.classCollapser, g = f + "." + b.classExpanded, m = f + "." + b.classCollapsed, i = this.grid.view._getRowInnerHeight(), j = [], p = this.grid.header;
    j.push(a + b.classIndent + "{height:" + i + "px;float:left;}");
    j.push(f + "{width:" + b.width + "px;float:left;padding:0 " + b.padding + "px}");
    j.push(c + b.classCollapser + "{height:" + i + "px}");
    j.push(g + "{background:url(" + b.urlExpanded + ") no-repeat center transparent}");
    j.push(g + ":hover{background:url(" + b.urlExpandedHover + ") no-repeat center transparent}");
    j.push(m + "{background:url(" + b.urlCollapsed + ") no-repeat center transparent}");
    j.push(m + ":hover{background:url(" + b.urlCollapsedHover + ") no-repeat center transparent}");
    e.isNotNull(p) && j.push(a + p._options.classColHeader + " ." + b.classCollapser + "{height:" + p._options.height + "px}");
    return j.join("")
  };
  b._onAfterSetDatalist = function() {
    this._tree.destroy();
    this._tree = new c({list:this.grid.dataMgr.all, options:this._options.Tree});
    this._makeTree()
  };
  b._onAddDatarow = function(a) {
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
    this.grid.event.trigger("onCollapserTreeChange")
  };
  b._onAddDatalist = function(a) {
    for(var b = 0, c = a.length, f = this._tree, g = f.root, m = this._options.beginCollapsed, i = this.key, j = this.grid.view, p = this.grid.dataMgr, n, q = [], o;b < c;b++) {
      n = f.createNode(a[b]), n._collapsed = m, e.isNotNull(n.parent) && n.parent.children.length === 1 && q.push(n.parent.data)
    }
    if(j !== void 0) {
      b = 0;
      for(c = q.length;b < c;b++) {
        j.rerenderCellByIdAndKey(p.getId(q[b]), i)
      }
    }
    g.traverseChildren({fn:function(a) {
      o = this.parent;
      e.isNotNull(o) && (o === g || o._shown && !o._collapsed) ? this._shown = !0 : (a.propagate = !1, this.traverse({fn:function() {
        this._shown = !1
      }}))
    }});
    this.grid.event.trigger("onCollapserTreeChange")
  };
  b._onUpdateDatarow = function(a, b, c) {
    var f = this._tree, g = f._options.nodeKey, m = f._options.parentKey, i;
    b.hasOwnProperty(g) && (i = f.getNodeByNodeId(c[g]), f.changeNodeId(i, c[g], b[g]), this.grid.event.trigger("onCollapserTreeChange"));
    b.hasOwnProperty(m) && (e.isNull(i) && (i = f.getNode(a)), f.changeParentId(i, c[m], b[m]), this.grid.event.trigger("onCollapserTreeChange"))
  };
  b._onUpdateDatalist = function(a, b, c) {
    for(var b = this._tree, f = b._options.nodeKey, g = b._options.parentKey, m, i, j, p = [], n = [], q = 0, o = a.length;q < o;q++) {
      m = c[q], i = a[q], j = void 0, m.hasOwnProperty(f) && (e.isNull(j) && (j = b.getNodeByNodeId(m[f])), p.push({node:j, before:m[f], newId:i[f]})), m.hasOwnProperty(g) && (e.isNull(j) && (j = b.getNode(i)), n.push({node:j, before:m[g], newId:i[g]}))
    }
    a = p.length;
    c = n.length;
    if(a + c !== 0) {
      if(a + c > 10) {
        b.reattach()
      }else {
        for(q = 0;q < a;q++) {
          f = p[q], b.changeNodeId(f.node, f.before, f.newId)
        }
        for(q = 0;q < c;q++) {
          f = n[q], b.changeParentId(f.node, f.before, f.newId)
        }
      }
      this.grid.event.trigger("onCollapserTreeChange")
    }
  };
  b._onRemoveDatarow = function(a) {
    this._tree.destroyNodeByData(a);
    this.grid.event.trigger("onCollapserTreeChange")
  };
  b._onRemoveDatalist = function(a) {
    for(var b = 0, c = a.length, e = this._tree;b < c;b++) {
      e.destroyNodeByData(a[b])
    }
    this.grid.event.trigger("onCollapserTreeChange")
  };
  b._onAfterFilter = function(a, b) {
    var c = this._tree;
    if(b.length > 0) {
      var f = this.grid.dataMgr, g = a.length, m = f._idToIdx, i = f.idKey, j, p = 0, n = function(c) {
        e.isNotNull(this.parent) ? (j = this.parent.data, e.isNotNull(j) && !f.has(j) && (a.push(j), b.remove(j), m[j[i]] = -1)) : c.stop = !0
      };
      f._reidx();
      for(c.reattach();p < g;p++) {
        c.getNode(a[p]).traverse({up:!0, fn:n})
      }
      c.reattach(a);
      c.sortList(a);
      this.grid.event.trigger("onCollapserTreeChange")
    }else {
      c.reattach(a), this.grid.event.trigger("onCollapserTreeChange"), this._filter(a, b)
    }
  };
  b._filter = function(a, b) {
    a.length = 0;
    this._tree.root.traverseChildren({fn:function() {
      this._shown ? a.push(this.data) : b.push(this.data)
    }})
  };
  b.toggleById = function(a) {
    if(e.isNotNull(a)) {
      return this.toggleCollapse(this._tree.getNode(this.grid.dataMgr.getById(a)))
    }
  };
  b.toggle = function(a) {
    return this.toggleById(this.grid.dataMgr.getId(a))
  };
  b.toggleByIdx = function(a) {
    return this.toggleById(this.grid.dataMgr.getIdByIdx(a))
  };
  b._clickHeaderValid = function(a) {
    if(e.hasTagAndClass(a.target, "DIV", this._options.classCollapser)) {
      return!1
    }
  };
  b._dblclickCanvas = function(a, b) {
    e.hasTagAndClass(a.target, "DIV", this._options.classCollapser) || this.toggleCollapse(this._tree.getNode(b.getDatarow()))
  };
  b._keydownColSel = function(a, b, c) {
    a.preventDefault();
    if(e.isNotNullAnd(b, c)) {
      var a = this._tree, c = a.getNode(c.getDatarow())._collapsed, f = this.grid.dataMgr.datalist, g, m;
      for(m in b) {
        b.hasOwnProperty(m) && m !== "length" && (g = a.getNode(f[m]), c ? this.expand(g) : this.collapse(g))
      }
      this._filterRefresh()
    }
  };
  b._makeTree = function() {
    var a = this._tree, b, c;
    a.__init();
    c = a.map;
    a = a.root;
    if(this._options.beginCollapsed) {
      for(b in c) {
        if(c.hasOwnProperty(b)) {
          c[b]._collapsed = !0, c[b]._shown = !1
        }
      }
      c = a.children;
      var e = c.length;
      for(b = 0;b < e;b++) {
        c[b]._shown = !0
      }
      a._collapsed = !0
    }else {
      for(b in c) {
        if(c.hasOwnProperty(b)) {
          c[b]._collapsed = !1, c[b]._shown = !0
        }
      }
      a._collapsed = !1
    }
    this.grid.event.trigger("onCollapserTreeChange")
  };
  b._onRenderHeader = function(a) {
    a.push("<div id='" + this.mid + "h' onmousedown='JGM.m.Collapser." + this.mid + ".toggleMaster();' class='" + this._options.classCollapser + " " + this._options.classMasterCollapser);
    this._tree.root._collapsed ? a.push(" " + this._options.classCollapsed) : a.push(" " + this._options.classExpanded);
    a.push("'></div>")
  };
  b._onRenderCell = function(a, b, c, f, g) {
    a = this._tree.getNode(c);
    if(e.isNull(a)) {
      return null
    }
    c = this.grid.dataMgr.getId(c);
    b = this._options;
    g.push("<div class='" + b.classIndent + "' style='width:" + b.indentSize * a.getLevel() + "px;'></div><div ");
    a.isLeaf() ? g.push("class='" + b.classCollapser) : (g.push('onmousedown="JGM.m.Collapser.' + this.mid + ".toggleById('" + c + "');\" class='" + b.classCollapser), a._collapsed ? g.push(" " + b.classCollapsed) : g.push(" " + b.classExpanded));
    g.push("'></div>")
  };
  b.getLevel = function(a) {
    a = this._tree.getNode(a);
    return e.isNull(a) ? null : a.getLevel()
  };
  b.collapse = function(a, b) {
    if(!(a._collapsed === !0 || a.isLeaf())) {
      a._collapsed = !0;
      a.traverseChildren({fn:function(a) {
        this._shown = !1;
        this._collapsed && (a.propagate = !1)
      }});
      var c = this._getCollapser(a.data);
      c.length > 0 && this._setClass(c, !0);
      if(!b && a.parent === this._tree.root && this._tree.root._collapsed === !1) {
        this._setClass(this._master, this._tree.root._collapsed = !0)
      }
    }
  };
  b.expand = function(a, b) {
    if(!(a._collapsed === !1 || a.isLeaf())) {
      a._collapsed = !1;
      a.traverseChildren({fn:function(a) {
        this._shown = !0;
        this._collapsed && (a.propagate = !1)
      }});
      var c = this._getCollapser(a.data), e = this._tree;
      c.length > 0 && this._setClass(c, !1);
      if(!b && a.parent === e.root) {
        for(var c = e.root.children, f = c.length, g = 0;g < f;g++) {
          if(c[g]._collapsed) {
            return
          }
        }
        this._setClass(this._master, e.root._collapsed = !1)
      }
    }
  };
  b._setClass = function(a, b) {
    if(!e.isNull(a)) {
      var c = this._options;
      b ? a.addClass(c.classCollapsed).removeClass(c.classExpanded) : a.addClass(c.classExpanded).removeClass(c.classCollapsed)
    }
  };
  b.toggleMaster = function() {
    var a = this._tree.root, b = a.children, c = b.length, e = 0;
    if(a._collapsed) {
      for(;e < c;e++) {
        this.expand(b[e], !0)
      }
      this._setClass(this._master, a._collapsed = !1)
    }else {
      for(;e < c;e++) {
        this.collapse(b[e], !0)
      }
      this._setClass(this._master, a._collapsed = !0)
    }
    this._filterRefresh()
  };
  b.toggleCollapse = function(a) {
    a = a._collapsed ? this.expand(a) : this.collapse(a);
    this._filterRefresh();
    return a
  };
  b._onCheckChange = function(a, b) {
    var c = this._tree.getNode(a), f = this.checkMgr, k = [], m;
    b ? (c.traverseChildren({fn:function(a) {
      f.isChecked(this.data) ? a.propagate = !1 : (f._add(this.data), e.isNotNull(m = f.getCheckbox(this.data)) && k.push(m))
    }}), c.traverseParent({up:!0, fn:function(a) {
      e.isNull(this.data) || f.isChecked(this.data) ? a.stop = !0 : (f._add(this.data), e.isNotNull(m = f.getCheckbox(this.data)) && k.push(m))
    }}), g.CheckManager._check($(k)), f._updateMaster()) : (c.traverseChildren({fn:function(a) {
      f.isChecked(this.data) ? (f._remove(this.data), e.isNotNull(m = f.getCheckbox(this.data)) && k.push(m)) : a.propagate = !1
    }}), c.traverseParent({up:!0, fn:function(a) {
      if(e.isNull(this.data) || !f.isChecked(this.data)) {
        a.stop = !0
      }else {
        for(var b = 0, c = this.children, d = c.length;b < d;b++) {
          if(f.isChecked(c[b].data)) {
            a.stop = !0;
            return
          }
        }
        f._remove(this.data);
        e.isNotNull(m = f.getCheckbox(this.data)) && k.push(m)
      }
    }}), g.CheckManager._uncheck($(k)))
  };
  b._filterRefresh = function() {
    this._filter(this.grid.dataMgr.datalist, this.grid.dataMgr.failed);
    this.grid.dataMgr._finish()
  };
  b._getCollapser = function(a) {
    if(e.isNull(a)) {
      return $([])
    }
    a = e.findFirstByTagAndClass(this.grid.view.getCell(this.grid.dataMgr.getIdx(a), this.grid.colDefMgr.getIdxByKey(this.key)), "DIV", this._options.classCollapser);
    return a === void 0 ? $([]) : $(a)
  };
  b._getMaster = function() {
    this._master = $(document.getElementById(this.mid + "h"))
  }
})();
jx.grid.ColumnGroup = {};
(function() {
  function f(b) {
    this.mid = b.mid;
    this.grid = b.grid;
    this.grid.colGroup = this;
    this._options = g._extend({key:void 0, padColKeys:[], sumColKeys:[], prefix:"합계: ", Collapser:{indentSize:0}}, b.options);
    this._options.Collapser.key = this._options.key;
    this._parentMap = {};
    this.__init()
  }
  var g = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.getObjectByName("jx.grid.Collapser");
  goog.exportSymbol("jx.grid.ColumnGroup", f);
  f.getInstance = function(b) {
    return new f(b)
  };
  var c = f.prototype;
  c.__init = function() {
    var b = this.grid, a = b.dataMgr, c = this._options;
    this.bindEvents();
    b = this.collapser = g.create("Collapser", {grid:b, options:c.Collapser});
    delete c.Collapser;
    this._processData(a.all);
    b.__init();
    a.refresh()
  };
  c.bindEvents = function() {
    var b;
    b = {onBeforeSetDatalist:this._removeAll, "onAfterSetDatalist onAddDatalist":this._processData, onAddDatarow:this._onAddDatarow, onUpdateDatarow:this._onUpdateDatarow, onUpdateDatalist:this._onUpdateDatalist, onRemoveDatarow:this._onRemoveDatarow, onRemoveDatalist:this._onRemoveDatalist, onDestroy:this._destroy};
    if(this._options.sumColKeys.length !== 0) {
      var a = this.mid, c = this.grid.dataMgr._consts._notReal, e = 0, f, g = this._options.sumColKeys, m = this._options.prefix, i = g.length;
      for(f = function(b, e, f, h, g) {
        f[c] === a && g.push(m)
      };e < i;e++) {
        b["onRenderCell_" + g[e] + "_prepend"] = f
      }
      b.onCollapserTreeChange = this._onCollapserTreeChange
    }
    this.grid.event.bind(b, this)
  };
  c._destroy = function() {
    g._destroy(this, {name:"ColumnGroup", path:"colGroup", property:"collapser", map:"parentMap _options"})
  };
  c._processData = function(b) {
    for(var a = b.length, c = this._options.key, f = this._options.padColKeys, g = this.grid.dataMgr, k = g._consts._notReal, m = g.idKey, i = this.collapser, j = i._tree._options.nodeKey, p = i._tree._options.parentKey, n = [], q = 0;q < a;q++) {
      this._addData(b[q], c, m, k, j, p, f, n)
    }
    n.length !== 0 && (g.all.pushList(n), g.makeCompositeKeyList(n, !0), g.addListToIdMap(n), e.isNotNull(i) && i._onAddDatalist(n));
    return n
  };
  c._addData = function(b, a, c, e, f, g, m, i) {
    var j = b[a], p = this._parentMap;
    p.hasOwnProperty(j) || (a = this._makeParent(b, a, c, j, e, f, m), i.push(a), p[j] = a);
    b[f] = b[c];
    b[g] = this.mid + j
  };
  c._makeParent = function(b, a, c, e, f, g, m) {
    var i = {}, j = 0, p = m.length;
    i[f] = this.mid;
    i[g] = this.mid + e;
    i[a] = e;
    for(i[c] = (this.grid.colDefMgr.getByKey(a).name || a) + ": " + e;j < p;j++) {
      i[m[j]] = b[m[j]]
    }
    return i
  };
  c._isParent = function(b) {
    return b[this.grid.dataMgr._consts._notReal] === this.mid
  };
  c._removeAll = function() {
    this._parentMap = {}
  };
  c._onAddDatarow = function(b) {
    var a = [], c = this._options, e = this.grid.dataMgr, f = this.collapser, g = f._tree._options;
    this._addData(b, c.key, e.idKey, e._consts._notReal, g.nodeKey, g.parentKey, c.padColKeys, a);
    a.length !== 0 && (b = a[0], e.all.push(b), e.makeCompositeKey(b, !0), e.addToIdMap(b), f._onAddDatarow(b))
  };
  c._onUpdateDatarow = function(b, a, c) {
    if(a.hasOwnProperty(this._options.key)) {
      var e = this._options.key, a = a[e], c = c[e], f = this.mid, e = this.collapser, g = e._tree, m = g._options.parentKey, i = {}, j = {}, p = this._parentMap;
      p.hasOwnProperty(a) || this._onAddDatarow(b);
      i[m] = f + a;
      j[m] = f + c;
      e._onUpdateDatarow(b, i, j);
      b = g.getNode(p[c]);
      b.children.length === 0 && (this.grid.dataMgr.all.remove(b.data), delete p[c], e._onRemoveDatarow(b.data))
    }
  };
  c._onUpdateDatalist = function(b, a, c) {
    var e = this._options.key, f = this.mid, g = this.collapser, m = g._tree, i = m._options.parentKey, j, p = {};
    j = {};
    for(var n = [], q = [], o = [], r = 0, s = b.length;r < s;r++) {
      j = a[r], j.hasOwnProperty(e) && (p = {}, p[i] = f + j[e], n.push(p), j = {}, j[i] = f + c[r][e], q.push(j), o.push(b[r]))
    }
    if(o.length !== 0) {
      b = this._parentMap;
      a = [];
      this._processData(o);
      g._onUpdateDatalist(o, n, q);
      r = 0;
      for(s = q.length;r < s;r++) {
        n = q[r][i], b.hasOwnProperty(n) && (o = m.getNode(b[n]), o.children.length === 0 && (delete b[n], a.push(o.data)))
      }
      a.length !== 0 && (g._onRemoveDatalist(a), this.grid.dataMgr.all.removeList(a))
    }
  };
  c._onRemoveDatarow = function(b) {
    this._isParent(b) ? delete this._parentMap[b[this._options.key]] : (b = this.collapser._tree.getNode(b).parent, b.children.length === 1 && this.grid.dataMgr.remove(b.data))
  };
  c._onRemoveDatalist = function(b) {
    for(var a = 0, c = b.length;a < c;a++) {
      this._onRemoveDatarow(b[a])
    }
  };
  c._onCollapserTreeChange = function() {
    for(var b = {}, a = this._options.sumColKeys, c = a.length, e = 0, f = this.grid.dataMgr._consts._notReal, g = this.mid, m, i, j;e < c;e++) {
      b[a[e]] = 0
    }
    this.collapser._tree.root.traverseChildren({post:!0, fn:function() {
      m = this.data;
      e = 0;
      if(m[f] === g) {
        for(;e < c;e++) {
          i = a[e], m[i] = b[i], b[i] = 0
        }
      }else {
        if(!m.hasOwnProperty(f)) {
          for(;e < c;e++) {
            if(typeof(j = m[a[e]]) === "string") {
              j = j.toFloat()
            }
            b[a[e]] += isNaN(j) ? 0 : j
          }
        }
      }
    }})
  }
})();
jx.grid.ColumnHeader = {};
(function() {
  function f(a) {
    c.call(this, a)
  }
  var g = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util"), c = goog.getObjectByName("jx.grid.BaseModule");
  goog.getObjectByName("jx.grid.Grid");
  goog.exportSymbol("jx.grid.ColumnHeader", f);
  goog.inherits(f, c);
  f.getInstance = function(a) {
    return new f(a)
  };
  var b = f.prototype;
  b._init = function(a) {
    this.grid.header = this;
    this._ctnr = a.container;
    this._map = {};
    this._resizeMap = {};
    a = this._options;
    this._mask = $("<div class='" + a.classHeaderMask + "'>").prependTo(this._ctnr);
    this._head = $("<div class='" + a.classHeader + "'>").appendTo(this._mask);
    f._disableSel(this._head)
  };
  b._bindEvents = function() {
    var a, b = this.getColumns(), c = b.length, e = 0;
    for(a = {onRenderModules:this._onRenderModules, onAfterRenderModules:this._onAfterRenderModules, mousedown:this._mousedown, mouseup:this._mouseup, dragmove:this._dragmove, onScrollViewportH:this._onScrollViewportH, onScrollViewportV:this._onScrollViewportV, onChangeSorter:this._onChangeSorter, click:this._click, onResizeCol:this._setWidthByKey};e < c;e++) {
      if(b[e].sorter) {
        a["clickHeader_" + b[e].key] = this._sort
      }
    }
    this.bindGridEvent(a, this)
  };
  b._defaultOptions = function(a) {
    a = a._options.imageUrl;
    return{reorderEnabled:!1, reorderSyncEnabled:!0, background:"url(" + a + "column-headers-bg.png) repeat-x scroll center", backgroundHover:"url(" + a + "column-headers-over-bg.png) repeat-x scroll center", backgroundPlaceholder:"#646464", sortBackground:a + "sort.png", sortRight:4, sortWidth:7, sortBackgroundAsc:a + "sort-asc.png", sortBackgroundDesc:a + "sort-desc.png", font:"15px Arial,Helvetica,sans-serif", height:21, borderThickness:1, border:"solid #909192", classHeaderMask:"jgrid-header-mask", 
    classHeader:"jgrid-header", classColHeader:"jgrid-colheader", classColHeaderActive:"jgrid-colheader-active", classColHeaderPlaceholder:"jgrid-colheader-placeholder", classInteractive:"interactive", classColHeaderSorted:"jgrid-colheader-sorted", classSort:"jgrid-sort", classSortAsc:"jgrid-sort-asc", classSortDesc:"jgrid-sort-desc", classResizeHandle:"jgrid-resize-handle", resizeHandleWidth:11, style:"", headerStyle:"", scrollerLeft:1E4, scrollerWidth:1E5, classResizeGuide:"resize-guide", resizeGuideWidth:1, 
    resizeBackground:"black;filter:alpha(opacity=40);opacity:0.4", syncResize:!1, resizeHandleBackground:"black;filter:alpha(opacity=5);opacity:0.05"}
  };
  b._beforeDispose = function() {
    this._head.sortable && this._head.sortable("destroy");
    this._destroyResizeHandles();
    g._destroy(this, {name:"ColumnHeader", path:"header", $:"resizeGuide _mask _head", property:"ctnr _resizeMap", map:"map _options"});
    this.dispose()
  };
  b._destroyResizeHandles = function() {
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
  b._beforeCreateCss = function(a) {
    var b = "#" + this.grid.mid + " .", c = this._options, e = c.borderThickness + "px " + c.border, f = this.getColumns(), g = f.length, i = 0, j = "." + c.classHeaderMask, p = "." + c.classColHeader, n = c.scrollerLeft, n = c.scrollerLeft, q = c.height + "px", o = c.classColHeaderActive, r = {};
    r[j] = {position:"relative", overflow:"hidden", width:"100%", font:c.font, background:c.background, "border-bottom":e, _append:c.style};
    r["." + c.classHeader] = {position:"relative", overflow:"hidden", "white-space":"nowrap", cursor:"default", left:-n + "px", width:c.scrollerWidth + "px", "line-height":q};
    r[p] = {position:"relative", overflow:"hidden", "float":"left", "text-overflow":"ellipsis", "text-align":"center", height:q, left:n - this.getView().getScrollLeft() + "px", "border-right":e, _append:c.headerStyle};
    r[p + "." + c.classInteractive + ":hover, " + b + o] = {background:c.backgroundHover};
    r["." + o] = {"border-left":e};
    r[p + "." + c.classColHeaderPlaceholder] = {background:c.backgroundPlaceholder + "!important"};
    r["." + c.classSort] = {position:"absolute", height:q, right:c.sortRight + "px", width:c.sortWidth + "px", background:"url(" + c.sortBackground + ") no-repeat center transparent"};
    r["." + c.classSortAsc] = {background:"url(" + c.sortBackgroundAsc + ") no-repeat center transparent"};
    r["." + c.classSortDesc] = {background:"url(" + c.sortBackgroundDesc + ") no-repeat center transparent"};
    r["." + c.classResizeHandle] = {"z-index":10, background:c.resizeHandleBackground, cursor:"e-resize", position:"absolute", height:q, width:c.resizeHandleWidth + "px"};
    for(r["." + c.classResizeGuide] = {"z-index":10, position:"absolute", background:c.resizeBackground, width:c.resizeGuideWidth + "px"};i < g;i++) {
      f[i].headerStyle && (r[p + "#" + this.mid + "h" + f[i].key] = {_append:f[i].headerStyle})
    }
    this.toCssStyles(a.css, r)
  };
  b._widthPlus = function() {
    return this._options.borderThickness
  };
  b._onScrollViewportH = function(a) {
    this._head[0].style.left = -this._options.scrollerLeft - a + "px"
  };
  b._onRenderModules = function() {
    for(var a = this.getColumns(), b = a.length, c = 0, e, f = [];c < b;c++) {
      (e = a[c]).hidden || this._render(f, e, c)
    }
    this._head[0].innerHTML = f.join("");
    this.triggerGridEvent("onRenderHeadersComplete")
  };
  b._onAfterRenderModules = function() {
    var a = this._options;
    a.reorderEnabled && this._initReorder();
    this._initResizeHandles();
    this._resizeGuide = $("<div class='" + a.classResizeGuide + "'>").appendTo(this.getView()._mask);
    this._resizeGuide[0].style.top = "0px";
    this._resizeGuide[0].style.height = "0px"
  };
  b._render = function(a, b, c) {
    var e = this._options, f = b.key, g = b.noName ? "" : b.name || f, i = this._widthPlus();
    a.push("<div id='" + this.mid + "h" + f + "' class='" + e.classColHeader + " " + (e.reorderEnabled || b.sorter ? " " + e.classInteractive : "") + "' " + (b.noTitle ? "" : "title='" + (b.title || g) + "' ") + "style='width:" + (this.getView()._getColOuterWidth(c) - i) + "px;' colKey='" + f + "'>");
    this.triggerGridEvent("onRenderHeader_" + f + "_prepend", [a]);
    a.push(g);
    this.triggerGridEvent("onRenderHeader_" + f + "_append", [a]);
    b.sorter && a.push("<span class='" + e.classSort + "'></span>");
    a.push("</div>")
  };
  f._disableSel = function(a) {
    Util$.safe$(a).attr("unselectable", "on").css("MozUserSelect", "none").bind("selectstart.ui", function() {
      return!1
    })
  };
  b.get = function(a) {
    if(this._map.hasOwnProperty(a)) {
      return this._map[a]
    }
    var b = document.getElementById(this.mid + "h" + a);
    return!b ? $([]) : this._map[a] = $(b)
  };
  b._updateIndicator = function(a, b) {
    var c = this.get(a), e = this._options, f = c.find("." + e.classSort), g = e.classColHeaderSorted, i = e.classSortAsc, e = e.classSortDesc;
    b === 0 ? (c.removeClass(g), f.removeClass(i + " " + e)) : (c.addClass(g), b === 1 ? f.addClass(i).removeClass(e) : b === 2 && f.addClass(e).removeClass(i))
  };
  b._closest = function(a) {
    return Util$.safe$(a).closest("div." + this._options.classColHeader, this._head)
  };
  b._getDef = function(a) {
    return this.getColMgr().getByKey(a.attr("colKey"))
  };
  b._sort = function(a, b, c) {
    a = c.sorter;
    this.triggerGridEvent("onBeforeColSort_" + c.key + " onBeforeColSort");
    a.desc = a.desc === !1 ? !0 : !1;
    this.getDataMgr().refresh({sorter:a});
    this.getView()._scroll()
  };
  b._onChangeSorter = function(a, b) {
    a !== b && a && this._updateIndicator(a.key, 0);
    b && this._updateIndicator(b.key, b.desc ? 2 : 1)
  };
  b._initReorder = function() {
    var a = this, b = this._options, c = this.getColMgr(), e = this._head, f = this.mid.length + 1, g = function(a, b) {
      for(var d = $(e).sortable("toArray"), g = d.length, m, o = 0;o < g;o++) {
        m = d[o], d[o] = m === "" ? b.item.attr("id").substring(f) : m.substring(f)
      }
      c.sortByKey(d)
    };
    e.sortable({items:"." + b.classColHeader, axis:"x", forcePlaceholderSize:!0, placeholder:b.classColHeaderPlaceholder + " " + b.classColHeader, tolerance:"pointer", start:function(b, c) {
      c.item.addClass(a._options.classColHeaderActive)
    }, stop:function(b, c) {
      c.item.removeClass(a._options.classColHeaderActive);
      a._syncResizeHandles()
    }, update:g});
    b.reorderSyncEnabled && e.sortable("option", "change", g)
  };
  b._getDx = function(a, b) {
    var c = a.clientX - this._resizeInitX, f = b.minW, g = e.ifNull(b.maxW, Number.MAX_VALUE), m = this._resizeInitWidth;
    m + c < f && (c = f - m);
    m + c > g && (c = g - m);
    return c
  };
  b._click = function(a) {
    var b = this._closest(a.target);
    if(b.length !== 0) {
      var c = this._getDef(b), e = c.key;
      this.getEventMgr().triggerInvalid("clickHeaderValid_" + e, [a, b, c]) || this.triggerGridEvent("clickHeader_" + e + " clickHeader", [a, b, c])
    }
  };
  b._mousedown = function(a) {
    var b = this._options;
    if(e.hasTagAndClass(a.target, "DIV", b.classResizeHandle)) {
      var c = this._resizeKey = a.target.getAttribute("key");
      this._resizeInitWidth = this.get(c)[0].clientWidth;
      this._resizeInitColWidth = this.getColMgr().getByKey(c).width;
      this._resizeInitX = a.clientX;
      this._resizeHandleInitX = this._resizeMap[c][0].offsetLeft;
      this._resizeGuide[0].style.left = Math.floor(this._resizeHandleInitX + (b.resizeHandleWidth - b.resizeGuideWidth) / 2 - b.scrollerLeft) + "px";
      this._resizeGuide[0].style.height = this.getView().getInnerHeight() + "px"
    }else {
      if(b = this._closest(a.target), b.length) {
        var f = this._getDef(b), c = f.key;
        this.triggerGridEvent("mousedownHeader", [a, b]);
        this.triggerGridEvent("mousedownHeader_" + c, [a, b, f])
      }
    }
  };
  b._dragmove = function(a) {
    var b = this._resizeKey;
    if(b != null && (a = this._getDx(a, this.getColMgr().getByKey(b)), !(Math.abs(a) < 1))) {
      var c = this._options;
      this.get(b)[0].style.width = this._resizeInitWidth + a + "px";
      this._moveResizeHandles(this._resizeHandleInitX + a - this._resizeMap[b][0].offsetLeft, this.getColMgr().getIdxByKey(b));
      this._resizeGuide[0].style.left = Math.floor(this._resizeHandleInitX + a + (c.resizeHandleWidth - c.resizeGuideWidth) / 2 - c.scrollerLeft) + "px";
      c.syncResize && this.getView().setWidthByKey(b, this._resizeInitColWidth + a)
    }
  };
  b._mouseup = function(a) {
    var b = this._resizeKey;
    if(b != null) {
      this._resizeGuide[0].style.height = "0px", a = this._getDx(a, this.getColMgr().getByKey(b)), Math.abs(a) >= 1 && this.getView().setWidthByKey(b, this._resizeInitColWidth + a), delete this._resizeKey, delete this._resizeInitX, delete this._resizeHandleInitX, delete this._resizeInitWidth, delete this._resizeInitColWidth
    }
  };
  b._setWidthByKey = function(a, b) {
    this.get(a)[0].style.width = b + this.getView()._colWidthPlus() - this._widthPlus() + "px";
    this._syncResizeHandles(this.getColMgr().getIdxByKey(a));
    this.getView()._scroll()
  };
  b._syncResizeHandles = function(a) {
    for(var a = a || 0, b = this.getView()._getColLefts(), c = this.getColumns(), e = c.length, f = this._resizeMap, g;a < e;a++) {
      if(g = c[a].key, f.hasOwnProperty(g)) {
        f[g][0].style.left = b[a + 1] + this._resizeHandleOffset + "px"
      }
    }
  };
  b._moveResizeHandles = function(a, b) {
    for(var b = b || 0, c = this.getColumns(), e = c.length, f = this._resizeMap, g;b < e;b++) {
      if(g = c[b].key, f.hasOwnProperty(g)) {
        g = f[g][0], g.style.left = g.offsetLeft + a + "px"
      }
    }
  };
  b._onScrollViewportV = function() {
    this._resizeGuide[0].style.top = this.getView().getScrollTop() + "px"
  };
  b._initResizeHandles = function() {
    for(var a = this.getColumns(), b = a.length, c = this.getView(), e = c.mid, c = c._getColLefts(), f = this._options, g = this._resizeMap, i, j = 0, p = this._resizeHandleOffset = Math.floor(f.scrollerLeft - f.resizeHandleWidth / 2), n = f.classResizeHandle, q = this._head;j < b;j++) {
      if(f = a[j], f.resizable) {
        i = f.key, g[i] = $("<div class='" + n + "' key='" + i + "' ondblclick='JGM.m.ViewportManager." + e + '._autoColWidth("' + i + "\")' style='left:" + (p + c[j + 1]) + "px' title='" + f.name + " 컬럼의 폭을 조절합니다.'>").appendTo(q)
      }
    }
  }
})();
jx.grid.Footer = {};
(function() {
  function f(b) {
    this.mid = b.mid;
    this._ctnr = b.container;
    this.grid = b.grid;
    this.grid.footer = this;
    this._options = g._extend({classCell:"footer-cell", background:"#F1F5FB", border:"0px solid #CCD9EA", color:"#000", fontSize:"13px", fontWeight:"normal", cellHeight:25, cellPadding:40, countTemplate:"현재 <span name='shownCount'></span> 건 / 총 <span name='totalCount'></span> 건", titleColor:"#5A6779", titleFontSize:"12px", titleFontWeight:"normal", contentColor:"#1E395B", contentFontSize:"12px", contentFontWeight:"normal", classFooter:"jgrid-footer", classTitle:"footer-title", classContent:"footer-content", 
    style:"", cellStyle:"", titleStyle:"", contentStyle:""}, b.options);
    this._sumMap = {};
    this.__init()
  }
  var g = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.Footer", f);
  f.getInstance = function(b) {
    return new f(b)
  };
  var c = f.prototype;
  c.__init = function() {
    this._foot = $("<div class='" + this._options.classFooter + "'>").appendTo(this._ctnr);
    this.getNextCell().html(this._options.countTemplate);
    this._updateTotalCount();
    this._updateShownCount();
    this._initSumCells();
    this.bindEvents()
  };
  c.bindEvents = function() {
    this.grid.event.bind({onCreateCss:this._onCreateCss, onDestroy:this._destroy, onDataChange:[this._updateTotalCount, this._updateSums], onAfterRefresh:this._updateShownCount}, this)
  };
  c._destroy = function() {
    var b, a = this._sumMap;
    for(b in a) {
      a.hasOwnProperty(b) && a[b].remove()
    }
    g._destroy(this, {name:"Footer", path:"footer", $:"foot", property:"ctnr", map:"sumMap _options"})
  };
  c._onCreateCss = function() {
    var b = this._options, a = "#" + this.grid.mid + " ." + b.classFooter, c = [];
    c.push(a + "{float:left;cursor:default;width:100%;" + g._CONST._cssUnselectable + "background:" + b.background + ";border-top:" + b.border + ";border-collapse:collapse;color:" + b.color + ";font-size:" + b.fontSize + ";font-weight:" + b.fontWeight + ";padding-left:8px;" + b.style + "}");
    c.push(a + " ." + b.classCell + "{float:left;white-space:nowrap;line-height:" + b.cellHeight + "px;padding-right:" + b.cellPadding + "px;" + b.cellStyle + "}");
    c.push(a + " ." + b.classTitle + "{text-align:right;color:" + b.titleColor + ";font-size:" + b.titleFontSize + ";font-weight:" + b.titleFontWeight + ";" + b.titleStyle + "}");
    c.push(a + " ." + b.classContent + "{color:" + b.contentColor + ";font-size:" + b.contentFontSize + ";font-weight:" + b.contentFontWeight + ";" + b.contentStyle + "}");
    return c.join("")
  };
  c._updateTotalCount = function() {
    this._foot.find("[name=totalCount]")[0].innerHTML = this.grid.dataMgr.getReal().length
  };
  c._updateShownCount = function() {
    this._foot.find("[name=shownCount]")[0].innerHTML = this.grid.dataMgr.filterReal(this.grid.dataMgr.datalist).length
  };
  c._initSumCells = function() {
    for(var b = this.grid.dataMgr.getReal(), a = this.grid.colDefMgr.get(), c = a.length, g, l, k, m, i = f._calSum, j = this._sumMap, p, n = 0;n < c;n++) {
      if(g = a[n], l = g.sumRenderer, e.isNotNull(l)) {
        if(k = g.key, g = g.name, m = i(b, k), k = j[k] = this.getNextCell(), p = k[0], e.isFunction(l)) {
          p.innerHTML = l(g, m)
        }else {
          if(e.isString(l)) {
            if(k = l.toLowerCase(), k === "krw" || l === "\\") {
              p.innerHTML = this._sumRenderer(g, e.formatNumber(m))
            }else {
              if(k === "usd" || l === "$") {
                p.innerHTML = this._sumRenderer(g, e.formatNumber(m, 2, "$ "))
              }
            }
          }else {
            p.innerHTML = this._sumRenderer(g, m)
          }
        }
      }
    }
  };
  c._updateSums = function() {
    var b = this.grid.dataMgr.getReal(), a, c = this._sumMap, g = this.grid.colDefMgr, l, k, m, i = f._calSum, j, p, n = this._options.classContent;
    for(a in c) {
      if(c.hasOwnProperty(a)) {
        if(l = g.getByKey(a), k = l.sumRenderer, m = i(b, a), j = c[a], p = j[0], e.isFunction(k)) {
          p.innerHTML = k(l.name, m)
        }else {
          if(e.isString(k)) {
            if(l = k.toLowerCase(), l === "krw" || k === "\\") {
              j.find("span." + n)[0].innerHTML = e.formatNumber(m)
            }else {
              if(l === "usd" || k === "$") {
                j.find("span." + n)[0].innerHTML = e.formatNumber(m, 2, "$ ")
              }
            }
          }else {
            j.find("span." + n)[0].innerHTML = m
          }
        }
      }
    }
  };
  c.getNextCell = function() {
    return $("<div class='" + this._options.classCell + "'/>").appendTo(this._foot)
  };
  c._sumRenderer = function(b, a) {
    return"<span class='" + this._options.classTitle + "'>" + b + " 합계: </span><span class='" + this._options.classContent + "'>" + a + "</span>"
  };
  f._calSum = function(b, a) {
    for(var c = 0, e, f = b.length, g = 0;g < f;g++) {
      if(typeof(e = b[g][a]) === "string") {
        e = e.toFloat()
      }
      c += isNaN(e) ? 0 : e
    }
    return c
  }
})();
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
  var c = goog.getObjectByName("jx.grid.Cell");
  goog.exportSymbol("jx.grid.SelectionManager", f);
  f.getInstance = function(a) {
    return new f(a)
  };
  var b = f.prototype;
  b.__init = function() {
    this.bindEvents()
  };
  b.bindEvents = function() {
    this.grid.event.bind({onGetCellClass:this._onGetCellClass, onCreateCss:this._onCreateCss, onDestroy:this._destroy, keydownCanvas:this._keydownCanvas, dragoverCanvas:this._dragoverCanvas, mousedownCanvas:this._mousedownCanvas, onBeforeRerender:this._onBeforeRerender, onAfterRerender:this.onAfterRerender, onBeforeDataChange:this.onBeforeDataChange}, this)
  };
  b._destroy = function() {
    g._deleteMap(this._consts, "_NAVKEYS");
    var a, b = this._rows, c = this._cols;
    for(a in b) {
      b.hasOwnProperty(a) && a !== "length" && g._deleteMap(b, a)
    }
    for(a in c) {
      c.hasOwnProperty(a) && a !== "length" && g._deleteMap(c, a)
    }
    g._destroy(this, {name:"SelectionManager", path:"selMgr", map:"rows _cols _range _last _consts _options"})
  };
  b._onCreateCss = function() {
    var a = this.grid.event.trigger("onBeforeCreateSelCss"), b = "#" + this.grid.mid + " .", c = this._options;
    c.highlightRowEnabled === !0 && a.push(b + c.classRowSelected + " > *{background:" + c.bgColorRowSelected + "}");
    c.multiSelectEnabled === !0 && (a.push(b + c.classSelection + "{background:" + c.bgColorSelection + "}"), a.push(b + c.classRange + "{background:" + c.bgColorRange + "}"));
    a.push(b + c.classLast + "{background:" + c.bgColorLast + "}");
    return a.join("\n")
  };
  b._onGetCellClass = function(a, b, c, f) {
    var g = "", m = this._last, i = this._range, j = this._rows, p = this._options;
    e.isNotNull(m) && m.getDatarow() === c && m.getColDef() === f && (g += p.classLast);
    p.multiSelectEnabled === !0 && (e.isNotNull(i) && i.getDatarow() === c && i.getColDef() === f && (g += " " + p.classRange), j.hasOwnProperty(a) && j[a].hasOwnProperty(b) && (g += " " + p.classSelection));
    return g
  };
  b._mousedownCanvas = function(a, b) {
    if(!e.isNotNull(this._last) || !this._last.equals(b)) {
      this.grid.event.trigger("onBeforeSelect", [a, b]), this._options.multiSelectEnabled === !1 ? this.selectCell(b) : a.shiftKey && e.isNotNullAnd(this._last, this._range) ? this.selectRange(b) : a.ctrlKey ? b.getKey() === this._options.rowSelKey ? this.addRow(b) : this.addCell(b) : this.selectCell(b)
    }
  };
  b._dragoverCanvas = function(a, b) {
    this._options.multiSelectEnabled === !1 ? this.selectCell(b) : e.isNotNullAnd(this._last, this._range) && this.selectRange(b)
  };
  b._keydownCanvas = function(a) {
    if(e.isNullOr(this._last, this._range)) {
      this._consts._NAVKEYS[a.which] && this.selectCell(g.create("Cell", {grid:this.grid, row:this.grid.view._getFirstSafeVisibleRow(), col:this.grid.view._getFirstSafeVisibleCol()}))
    }else {
      if(this._consts._NAVKEYS[a.which]) {
        if(!this.grid.event.triggerInvalid("onBeforeNavigate", [a])) {
          var b;
          a.preventDefault();
          switch(a.which) {
            case e.keyMapKeydown.tab:
              b = a.shiftKey ? this._idxToCell(this._consts._LEFT, this._last) : this._idxToCell(this._consts._RIGHT, this._last);
              this.selectCell(b);
              break;
            case e.keyMapKeydown.enter:
              b = a.shiftKey ? this._idxToCell(this._consts._UP, this._last) : this._idxToCell(this._consts._DOWN, this._last);
              this.selectCell(b);
              break;
            case e.keyMapKeydown.up:
              this._options.multiSelectEnabled && a.shiftKey ? (b = this._idxToCell(this._consts._UP, this._range), this.selectRange(b)) : (b = this._idxToCell(this._consts._UP, this._last), this.selectCell(b));
              break;
            case e.keyMapKeydown.down:
              this._options.multiSelectEnabled && a.shiftKey ? (b = this._idxToCell(this._consts._DOWN, this._range), this.selectRange(b)) : (b = this._idxToCell(this._consts._DOWN, this._last), this.selectCell(b));
              break;
            case e.keyMapKeydown.left:
              this._options.multiSelectEnabled && a.shiftKey ? (b = this._idxToCell(this._consts._LEFT, this._range), this.selectRange(b)) : (b = this._idxToCell(this._consts._LEFT, this._last), this.selectCell(b));
              break;
            case e.keyMapKeydown.right:
              this._options.multiSelectEnabled && a.shiftKey ? (b = this._idxToCell(this._consts._RIGHT, this._range), this.selectRange(b)) : (b = this._idxToCell(this._consts._RIGHT, this._last), this.selectCell(b));
              break;
            case e.keyMapKeydown.pgup:
              this._options.multiSelectEnabled && a.shiftKey ? (b = this._idxToCell(this._consts._PGUP, this._range), this.selectRange(b)) : (b = this._idxToCell(this._consts._PGUP, this._last), this.selectCell(b));
              break;
            case e.keyMapKeydown.pgdn:
              this._options.multiSelectEnabled && a.shiftKey ? (b = this._idxToCell(this._consts._PGDN, this._range), this.selectRange(b)) : (b = this._idxToCell(this._consts._PGDN, this._last), this.selectCell(b));
              break;
            case e.keyMapKeydown.space:
              b = a.shiftKey ? this._idxToCell(this._consts._PGUP, this._last) : this._idxToCell(this._consts._PGDN, this._last);
              this.selectCell(b);
              break;
            case e.keyMapKeydown.home:
              this._options.multiSelectEnabled && a.shiftKey ? (b = this._idxToCell(this._consts._HOME, this._range), this.selectRange(b)) : (b = this._idxToCell(this._consts._HOME, this._last), this.selectCell(b));
              break;
            case e.keyMapKeydown.end:
              this._options.multiSelectEnabled && a.shiftKey ? (b = this._idxToCell(this._consts._END, this._range), this.selectRange(b)) : (b = this._idxToCell(this._consts._END, this._last), this.selectCell(b))
          }
          this.grid.event.trigger("onAfterNavigate", [b])
        }
      }else {
        if(this._cols.length === 1) {
          var c = this.grid.colDefMgr, f, k = this._cols;
          for(f in k) {
            if(k.hasOwnProperty(f) && f !== "length") {
              b = c.get(f).key, this.grid.event.trigger("keydownColSel_" + b + "_" + a.which + " keydownColSel_" + b, [a, k[f], this._last])
            }
          }
        }
        if(this._rows.length === 1) {
          var m;
          f = this._rows;
          for(m in f) {
            f.hasOwnProperty(m) && m !== "length" && this.grid.event.trigger("keydownRowSel_" + a.which + " keydownRowSel", [a, f[m], this._last])
          }
        }
        this.grid.event.trigger("keydownSel_" + a.which + " keydownSel", [a, this._rows, this._cols])
      }
    }
  };
  b.getCell = function() {
    if(e.isNotNull(this._last)) {
      return this._last
    }
  };
  b._isSelected = function(a) {
    return e.isNotNull(this._last) && this._last.equals(a)
  };
  c.prototype.isSelected = function() {
    return this.grid.selMgr._isSelected(this)
  };
  b._getCellIdxToNavigate = function(a, b, c) {
    switch(a) {
      case this._consts._RIGHT:
        c < this.grid.colDefMgr.length() - 1 && c++;
        break;
      case this._consts._LEFT:
        c > 0 && c--;
        break;
      case this._consts._DOWN:
        b < this.grid.dataMgr.datalist.length - 1 && b++;
        break;
      case this._consts._UP:
        b > 0 && b--;
        break;
      case this._consts._PGDN:
        b += this.grid.view._options.rowsPerPage;
        b > this.grid.dataMgr.datalist.length - 1 && (b = this.grid.dataMgr.datalist.length - 1);
        break;
      case this._consts._PGUP:
        b -= this.grid.view._options.rowsPerPage;
        b < 0 && (b = 0);
        break;
      case this._consts._HOME:
        b = 0;
        break;
      case this._consts._END:
        b = this.grid.dataMgr.datalist.length - 1
    }
    return[b, c]
  };
  b._idxToCell = function(a, b) {
    var c = this._getCellIdxToNavigate(a, b.getRowIdx(), b.getColIdx());
    return g.create("Cell", {grid:this.grid, row:c[0], col:c[1]})
  };
  b.selectRow = function(a) {
    var b = a.getRowIdx(), c = a.getColIdx();
    this._setRange(b, c, a);
    this._setLast(b, c, a);
    this._setSelMap(this._getRowMap(b, c, a))
  };
  b.selectCell = function(a, b) {
    this.grid.event.trigger("onBeforeSelectCell", [a]);
    if(this._options.multiSelectEnabled && a.getKey() === this._options.rowSelKey) {
      this.selectRow(a)
    }else {
      var c = a.getRowIdx(), e = a.getColIdx();
      this._setRange(c, e, a, b);
      this._setLast(c, e, a);
      this._setSelMap(this._getCellMap(c, e, a))
    }
    this.grid.event.trigger("onAfterSelectCell", [a])
  };
  b.onBeforeDataChange = function() {
  };
  b._onBeforeRerender = function() {
    if(e.isNotNull(this._last)) {
      this.toSelect = this._last
    }
    this.empty()
  };
  b.onAfterRerender = function() {
    e.isNotNull(this.toSelect) && (this.selectCell(this.toSelect, !0), this.grid.view.scrollToRowLazy(this.toSelect.getRowIdx()))
  };
  b.addRow = function(a) {
    var b = a.getRowIdx(), c = a.getColIdx();
    this._setRange(b, c, a);
    this._setLast(b, c, a);
    this._addSelMap(this._getRowMap(b, c, a))
  };
  b.addCell = function(a) {
    var b = a.getRowIdx(), c = a.getColIdx();
    this._setRange(b, c, a);
    this._setLast(b, c, a);
    this._addSelMap(this._getCellMap(b, c, a))
  };
  b.selectRange = function(a) {
    var b = a.getRowIdx(), c = a.getColIdx(), e = this._last.getRowIdx(), f = this._last.getColIdx(), g = e < b ? e : b, e = e < b ? b : e, i;
    this._setRange(b, c, a);
    a.getKey() === this._options.rowSelKey ? (i = 0, f = this.grid.colDefMgr.length() - 1) : (i = f < c ? f : c, f = f < c ? c : f);
    this._setSelMap(this._getRangeMap(g, i, e, f, b, c, a));
    return{minRow:g, minCol:i, maxRow:e, maxCol:f}
  };
  b._setLast = function(a, b, c) {
    var b = this._last, f;
    e.isNotNull(b) && (f = b.getRowIdx(), a !== f && e.isNotNull(this._range) && f !== this._range.getRowIdx() && this.grid.view.unlockRowById(b.getId()), b.get$().removeClass(this._options.classLast), this._options.highlightRowEnabled === !0 && $(b.getRowNode()).removeClass(this._options.classRowSelected), e.isNull(c) && delete this._last);
    if(!e.isNull(c)) {
      (this._last = c).get$().addClass(this._options.classLast), this._options.highlightRowEnabled === !0 && $(c.getRowNode()).addClass(this._options.classRowSelected), this.grid.view.lockRowByIdx(a)
    }
  };
  b._setRange = function(a, b, c, f) {
    var g = this._range;
    if(e.isNotNull(g)) {
      var m = g.getRowIdx();
      if(a === m && b === g.getColIdx()) {
        return
      }
      a !== m && e.isNotNull(this._last) && m !== this._last.getRowIdx() && this.grid.view.unlockRowById(g.getId());
      g.get$().removeClass(this._options.classRange);
      e.isNull(c) && delete this._range
    }
    if(!e.isNull(c)) {
      (this._range = c).get$().addClass(this._options.classRange), c = this.grid.view, c.lockRowByIdx(a), f || c.scrollToLazy(a, b)
    }
  };
  b._addSelMap = function(a) {
    var b = this._rows, e, f, g, m;
    for(g in a) {
      if(a.hasOwnProperty(g) && (f = a[g], b.hasOwnProperty(g))) {
        for(m in e = b[g], f) {
          f.hasOwnProperty(m) && e.hasOwnProperty(m) && (f[m] instanceof c && (e[m] = f[m]), delete f[m])
        }
      }
    }
    this.addOrRemoveCss({}, !0);
    this._addToMaps(a)
  };
  b._setSelMap = function(a) {
    var b = this._rows, e, f, g, m, i = {};
    for(g in b) {
      if(b.hasOwnProperty(g) && g !== "length") {
        if(e = b[g], a.hasOwnProperty(g)) {
          for(m in f = a[g], e) {
            e.hasOwnProperty(m) && m !== "length" && (f.hasOwnProperty(m) ? (f[m] instanceof c && (e[m] = f[m]), delete f[m]) : (i.hasOwnProperty(g) || (i[g] = {}), i[g][m] = !0))
          }
        }else {
          for(m in f = i[g] = {}, e) {
            e.hasOwnProperty(m) && m !== "length" && (f[m] = !0)
          }
        }
      }
    }
    this._removeFromMaps(i);
    this.addOrRemoveCss({}, !1);
    this._addSelMap(a)
  };
  b.addOrRemoveCss = function(a, b) {
    var f = [], g, k, m, i = this.grid.view;
    for(g in a) {
      if(a.hasOwnProperty(g)) {
        for(k in m = a[g], m) {
          m.hasOwnProperty(k) && (m[k] instanceof c ? f.push(m[k].getNode()) : f.push(i.getCell(g, k)))
        }
      }
    }
    f = f.filter(function(a) {
      return e.isNotNull(a)
    });
    b ? $(f).addClass(this._options.classSelection) : $(f).removeClass(this._options.classSelection)
  };
  b._addToMaps = function(a) {
    var b, c, f, g = this._rows, m = this._cols, i;
    for(b in a) {
      if(a.hasOwnProperty(b)) {
        for(c in i = a[b], i) {
          i.hasOwnProperty(c) && (f = e.isNull(f = i[c]) ? !0 : f, g.hasOwnProperty(b) ? g[b].length++ : (g[b] = {length:1}, g.length++), g[b][c] = f, m.hasOwnProperty(c) ? m[c].length++ : (m[c] = {length:1}, m.length++), m[c][b] = f)
        }
      }
    }
  };
  b._removeFromMaps = function(a) {
    var b, c, e = this._rows, f = this._cols, g;
    for(b in a) {
      if(a.hasOwnProperty(b)) {
        for(c in g = a[b], g) {
          g.hasOwnProperty(c) && (--e[b].length === 0 ? (delete e[b], e.length--) : delete e[b][c], --f[c].length === 0 ? (delete f[c], f.length--) : delete f[c][b])
        }
      }
    }
  };
  b._getCellMap = function(a, b, c) {
    var e = {};
    e[a] = {};
    e[a][b] = c;
    return e
  };
  b._getRowMap = function(a, b, c) {
    var e = {}, f = this.grid.colDefMgr.length(), g = 0;
    for(e[a] = {};g < f;g++) {
      e[a][g] = !0
    }
    e[a][b] = c;
    return e
  };
  b._getRangeMap = function(a, b, c, e, f, g, i) {
    for(var j = {}, p;a <= c;a++) {
      j[a] = {};
      for(p = b;p <= e;p++) {
        j[a][p] = !0
      }
    }
    j[f][g] = i;
    return j
  };
  b.empty = function() {
    this._setLast();
    this._setRange();
    this._setSelMap({})
  }
})();
})();
