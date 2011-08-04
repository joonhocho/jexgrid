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
          var i = c[d];
          f.call(e, i, d, c) && a.push(i)
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
        var i = String(d);
        b.hasOwnProperty(i) && (i = b[i], f.call(c, i, d, b));
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
      for(var b, a = 0, d = 0, i = c.length, j = 0, e = !1;j < i;j++) {
        if(b = c.charAt(j), b === ".") {
          if(++a === 2) {
            e = !0;
            break
          }
        }else {
          if(b === "-" && ++d === 2) {
            e = !0;
            break
          }
        }
      }
      return e === !0 && (c = c.replace(/[\.\-]/g, "")).length === 0 ? NaN : /^-*0*\./.test(c) || (c = c.replace(/^-0+/, "-")).length === 0 || (c = c.replace(/^0+/, "")).length === 0 ? 0 : parseInt(c, 10)
    }
  }
  if(!g.toFloat) {
    g.toFloat = function() {
      var c;
      if((c = this.replace(/[^-\d\.]/g, "")).length === 0) {
        return NaN
      }
      for(var b = 0, a = c.length, d, i = 0, j = 0;b < a;b++) {
        if(d = c.charAt(b), d === ".") {
          if(i !== 0) {
            return NaN
          }else {
            i++
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
    a = a === void 0 ? function(a) {
      return!!a
    } : a;
    d = d === void 0 ? function(a) {
      return $.trim(a)
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
      for(var d = [], i = c.length, j = 0, a = a !== void 0 ? a - 1 : void 0;j < i;j++) {
        j in c && (d[j] = Util.clone(c[j], b, a))
      }
      return d
    }
    d = {};
    i = Util.isEmptyObj(b);
    if(a === 1) {
      if(i) {
        for(j in c) {
          c.hasOwnProperty(j) && (d[j] = c[j])
        }
      }else {
        for(j in b) {
          b.hasOwnProperty(j) && c.hasOwnProperty(j) && (d[j] = c[j])
        }
      }
    }else {
      if(a = a !== void 0 ? a - 1 : void 0, i) {
        for(j in c) {
          c.hasOwnProperty(j) && (d[j] = Util.clone(c[j], void 0, a))
        }
      }else {
        for(j in b) {
          b.hasOwnProperty(j) && c.hasOwnProperty(j) && (d[j] = Util.clone(c[j], void 0, a))
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
  Util.formatNumber = function(c, b, a, d, i) {
    var a = a === void 0 ? "&#8361; " : a, b = isNaN(b) ? 0 : b, d = d === void 0 ? "." : d, i = i === void 0 ? "," : i, j = c < 0 ? "-" : "", e = parseInt(c = Math.abs(+c || 0).toFixed(b), 10) + "", h = e.length, h = h > 3 ? h % 3 : 0;
    return a + j + (h ? e.substr(0, h) + i : "") + e.substr(h).replace(/(\d{3})(?=\d)/g, "$1" + i) + (b ? d + Math.abs(c - e).toFixed(b).slice(2) : "")
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
      for(var a = c.classList ? c.classList : Util.split(c.className), d = 0, i = a.length;d < i;d++) {
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
      for(var a = 0, d = c.childNodes, i = d.length, j;a < i;a++) {
        if(Util.isNotNull(d[a]) && (j = Util.findFirstByClass(d[a], b)) !== void 0) {
          return j
        }
      }
    }
  };
  Util.findFirstByTagAndClass = function(c, b, a) {
    if(c != null) {
      if(Util.hasTagAndClass(c, b, a)) {
        return c
      }
      for(var d = 0, c = c.childNodes, i = c.length, j;d < i;d++) {
        if(Util.isNotNull(c[d]) && (j = Util.findFirstByTagAndClass(c[d], b, a)) !== void 0) {
          return j
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
    for(var d = 0, c = c.childNodes, i = c.length;d < i;d++) {
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
    for(var i = 0, c = c.childNodes, j = c.length;i < j;i++) {
      Util.isNotNull(c[i]) && Util.findByTagAndClass(c[i], b, a, d)
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
    var a = document.createElement("div"), d, i = 0, j = [];
    a.innerHTML = b;
    for(d = a.childNodes.length;i < d;i++) {
      j.push(c.appendChild(a.firstChild))
    }
    return j
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
    var d = a.length, i = a[0];
    if(d === 1) {
      return i === "array" ? Util.areEqualArrays(c, b) : Util.areEqualObjects(c, b)
    }
    if(d > 1) {
      a = a.slice(1);
      d = 0;
      if(i === "array") {
        if(c.length !== b.length) {
          return!1
        }
        for(i = c.length;d < i;d++) {
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
  Util.typeCheck = function(c, b, a, d, i) {
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
    if(i) {
      return!1
    }
    throw new TypeError("object is not a " + c + ", but is a " + typeof b);
  };
  Util.sprint = function(c, b, a, d) {
    Util.typeCheck("string", c);
    Util.typeCheck("object", b);
    Util.typeCheck("string", a, !0);
    Util.typeCheck("string", d, !0);
    var i;
    a === void 0 && (a = "%");
    d === void 0 && (d = "%");
    for(i in b) {
      b.hasOwnProperty(i) && (c = c.replace(RegExp(a + i + d, "gm"), b[i]))
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
    return c.replace(RegExp("(" + d.join("|") + ")", "gm"), function(a) {
      return b[a]
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
    var d = this.timers[b], i = (new Date).getTime(), d = g.isNull(d) ? 0 : i - d;
    g.print((this.stack.length > 0 ? this.stack + " :: " : "") + c + ", Time elapsed since last update: " + d + "ms");
    a && (this.timers[b] = i)
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
    var b, a, d, i;
    for(a in c) {
      if(c.hasOwnProperty(a)) {
        switch(a) {
          case "map":
            b = c[a];
            if(f.isString(b)) {
              b = f.split(b);
              i = b.length;
              for(d = 0;d < i;d++) {
                JGM._deleteMap(e, b[d])
              }
            }else {
              if(b instanceof Array) {
                i = b.length;
                for(d = 0;d < i;d++) {
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
              i = b.length;
              for(d = 0;d < i;d++) {
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
              i = b.length;
              for(d = 0;d < i;d++) {
                JGM._delete$(e, b[d])
              }
            }else {
              if(b instanceof Array) {
                i = b.length;
                for(d = 0;d < i;d++) {
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
              i = b.length;
              for(d = 0;d < i;d++) {
                JGM._deleteStyle(e, b[d])
              }
            }else {
              if(b instanceof Array) {
                i = b.length;
                for(d = 0;d < i;d++) {
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
              i = b.length;
              for(d = 0;d < i;d++) {
                delete e[b[d]]
              }
            }else {
              if(b instanceof Array) {
                i = b.length;
                for(d = 0;d < i;d++) {
                  delete e[b[d]]
                }
              }
            }
            break;
          case "module":
            b = c[a];
            if(f.isString(b)) {
              b = f.split(b);
              i = b.length;
              for(d = 0;d < i;d++) {
                JGM._deleteModule(e, b[d])
              }
            }else {
              if(b instanceof Array) {
                i = b.length;
                for(d = 0;d < i;d++) {
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
  goog.exportSymbol("jx.grid.renderer", g);
  var g = f.renderer = jx.grid.renderer;
  g.selectBox = function(e) {
    var c = e.mapping, b = e.attr, a = e["default"], d = e.style, i = e.callback, j, k, h, f = 0, l = [], g = [], m = "<select";
    if(b) {
      for(h in b) {
        b.hasOwnProperty(h) && (m += " " + h + '="' + b[h] + '"')
      }
    }
    if(d) {
      m += ' style="';
      for(h in d) {
        d.hasOwnProperty(h) && (m += h + ":" + d[h] + ";")
      }
      m += '"'
    }
    m += ">";
    for(j in c) {
      c.hasOwnProperty(j) && (e = c[j], l.push(j), g.push(e), a == e && (k = f), f++)
    }
    return function(a) {
      var d, b, c = m;
      for(b = 0;b < f;b++) {
        if(a == g[b]) {
          d = b;
          break
        }
      }
      d === void 0 && (d = k);
      for(b = 0;b < f;b++) {
        c += '<option value="' + g[b] + '"', b === d && (c += ' selected="selected"'), c += ">" + l[b] + "</option>"
      }
      c += "</select>";
      i && (d = [], d.push(c), Array.prototype.push.apply(d, arguments), c = i.apply(this, d));
      return c
    }
  }
})();
jx.lang = {};
jx.lang.Disposable = {};
(function() {
  function f() {
  }
  function g(a, b, c) {
    if(typeof a != "object") {
      return!1
    }
    var e, h, f;
    if(b) {
      for(var c = 0, l = b.length;c < l;c++) {
        if(e = b[c], this.hasOwnProperty(e)) {
          if(a.hasOwnProperty(e)) {
            if(h = this[e], f = a[e], h !== a && !(h === h || f === f)) {
              return!1
            }
          }else {
            return!1
          }
        }else {
          if(a.hasOwnProperty(e)) {
            return!1
          }
        }
      }
    }else {
      if(c) {
        for(e in this) {
          if(this.hasOwnProperty(e)) {
            if(!a.hasOwnProperty(e)) {
              return!1
            }
            h = this[e];
            f = a[e];
            if(h !== f) {
              if(h) {
                if(typeof h != "object" || typeof f != "object") {
                  return!1
                }
                if(h.equals) {
                  if(!h.equals(f, null, c - 1)) {
                    return!1
                  }
                }else {
                  if(f.equals && !f.equals(h, null, c - 1)) {
                    return!1
                  }
                }
                if(!g.call(h, f, null, c - 1)) {
                  return!1
                }
              }else {
                if(!(h === h || f === f)) {
                  return!1
                }
              }
            }
          }
        }
      }else {
        for(e in this) {
          if(this.hasOwnProperty(e)) {
            if(a.hasOwnProperty(e)) {
              if(h = this[e], f = a[e], h !== a && !(h === h || f === f)) {
                return!1
              }
            }else {
              return!1
            }
          }
        }
      }
      for(e in a) {
        if(a.hasOwnProperty(e) && !this.hasOwnProperty(e)) {
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
  c.equals = Object.equals = function(a, b, c, e) {
    return typeof a == "object" ? g.call(a, b, c, e) : a !== a && b !== b
  };
  c.dispose = Object.dispose = function(a, b, c) {
    if(typeof a == "object") {
      return e.call(a, b, c)
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
        for(var i = d[b], c = -1;(c = i.indexOf(a, c + 1)) !== -1;) {
          i.splice(c, 1)
        }
        i.length === 0 && delete d[b]
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
      for(var a = a[d], d = 0, i = a.length, c;d < i && !b.stopPropagation;d++) {
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
    for(var a = this.children, d = a.length, i = this.childrenMap;b < d;b++) {
      i[a[b].nodeId] = b
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
      var d = 0, i = this.children, c = i.length;
      if(b.post) {
        for(;d < c;d++) {
          i[d].traverse(b, d)
        }
        this.callFn(b, a)
      }else {
        if(this.callFn(b, a), b.propagate === !1) {
          delete b.propagate
        }else {
          for(;!b.stop && d < c;d++) {
            i[d].traverse(b, d)
          }
        }
      }
    }
    return b
  };
  c.traverseChildren = function(b) {
    for(var a = 0, d = this.children, i = d.length;a < i;a++) {
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
    for(var a = this._options.nodeKey, d = this.map, i = b.length, c = 0;c < i;c++) {
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
      for(var d = this.infants[a], i = 0, c = d.length;i < c;i++) {
        b.addChild(d[i])
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
    var d = this, i = this.grid;
    i && ["Dispose", "CreateCss", "CreateDynamicCss", "Render", "Keydown", "Keyup", "Keypress", "Mousein", "Mouseout", "Mouseenter", "Mouseleave", "Mousemove", "Mouseover", "Mousedown", "Mouseup", "Click", "Dblclick", "Resize", "ResizeWidth", "ResizeHeight", "Scroll", "ScrollH", "ScrollV"].forEach(function(a) {
      var b = "before" + a, a = "after" + a, c = "_" + b, e = "_" + a;
      d[c] && i.addEventListener(b, function(a) {
        return d[c](a)
      });
      d[e] && i.addEventListener(a, function(a) {
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
      var i, a = "";
      b.hasOwnProperty("_prepend") && (b._prepend && d.push(b._prepend), delete b._prepend);
      b.hasOwnProperty("_append") && (b._append && (a = ";" + b._append), delete b._append);
      for(i in b) {
        d.push(i + ":" + b[i])
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
    for(var a = 0, d = this._options.uniqueKeys, i, c = this.uniqueMap, k = d.length, h = this.keyToType, f = this.grid.colDefMgr.getAll();a < k;a++) {
      i = d[a], typeof i === "string" && (c[i] = {})
    }
    k = f.length;
    for(a = 0;a < k;a++) {
      d = f[a], i = d.key, d.hasOwnProperty("unique") && d.unique === !0 && !c.hasOwnProperty(i) && (c[i] = {}), h[i] = this.mapDatatype(d.type)
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
  c.addUniqueIndex = function(b, a, d, i) {
    if(i !== !0 && (e.isNull(b) || e.isEmptyString(a) || e.isNull(d))) {
      return!1
    }
    if(d.hasOwnProperty(a) === !1) {
      return this.grid.error("KEY_UNDEFINED", a)
    }
    if(e.isEmptyString(i = d[a])) {
      return this.grid.error("BAD_NULL", a)
    }
    if(b.hasOwnProperty(i)) {
      return b[i] === d ? !1 : this.grid.error("DUP_ENTRY", i, a)
    }
    b[i] = d;
    return!0
  };
  c.addUniqueIndices = function(b, a, d, i) {
    if(i !== !0 && (e.isNull(b) || e.isEmptyString(a) || e.isEmptyArray(d))) {
      return!1
    }
    for(var c = d.length, k = [], h, f, i = 0;i < c;i++) {
      if(!e.isNull(f = d[i])) {
        if(f.hasOwnProperty(a) === !1) {
          return this.removeUniqueIndices(b, a, k), this.grid.error("KEY_UNDEFINED", a)
        }
        if(e.isEmptyString(h = f[a])) {
          return this.removeUniqueIndices(b, a, k), this.grid.error("BAD_NULL", a)
        }
        if(b.hasOwnProperty(h)) {
          if(b[h] === f) {
            continue
          }
          this.removeUniqueIndices(b, a, k);
          return this.grid.error("DUP_ENTRY", h, a)
        }
        k.push(b[h] = f)
      }
    }
    return k.length > 0
  };
  c.updateUniqueIndex = function(b, a, d, i, c, k) {
    if(k !== !0 && (e.isEmptyObj(b) || e.isEmptyString(a) || e.isNullOr(d, c) || e.isEmptyObj(i))) {
      return!1
    }
    if(i.hasOwnProperty(a) === !1) {
      return!1
    }
    if(c.hasOwnProperty(a) === !1 || d.hasOwnProperty(a) === !1) {
      return this.grid.error("KEY_UNDEFINED", a)
    }
    if(b.hasOwnProperty(c = c[a]) === !1) {
      return this.grid.error("KEY_NOT_FOUND", c, a)
    }
    if(e.isEmptyString(i = i[a])) {
      return this.grid.error("BAD_NULL", a)
    }
    if(b.hasOwnProperty(i)) {
      return b[i] === d ? !1 : this.grid.error("DUP_ENTRY", i, a)
    }
    b[i] = d;
    delete b[c];
    return c
  };
  c.updateUniqueIndices = function(b, a, d, i, c, k) {
    if(k !== !0) {
      if(e.isEmptyObj(b) || e.isEmptyString(a) || e.isEmptyArray(d) || e.isEmptyArray(i) || e.isEmptyArray(c)) {
        return!1
      }
      if(d.length !== i.length || d.length !== c.length) {
        return this.grid.error("LENGTH_NOT_EQUAL")
      }
    }
    for(var k = 0, h = d.length, f, l, g, m = [], p = [], o = [], r, s;k < h;k++) {
      if(!e.isNull(f = d[k])) {
        if((g = i[k]).hasOwnProperty(a) !== !1) {
          l = c[k];
          if(l.hasOwnProperty(a) === !1 || f.hasOwnProperty(a) === !1) {
            return this.updateUniqueIndices(b, a, m, o, p), this.grid.error("KEY_UNDEFINED", a)
          }
          if(b.hasOwnProperty(s = l[a]) === !1) {
            return this.updateUniqueIndices(b, a, m, o, p), this.grid.error("KEY_NOT_FOUND", s, a)
          }
          if(e.isEmptyString(r = g[a])) {
            return this.updateUniqueIndices(b, a, m, o, p), this.grid.error("BAD_NULL", a)
          }
          if(b.hasOwnProperty(r)) {
            if(b[r] === f) {
              continue
            }
            this.updateUniqueIndices(b, a, m, o, p);
            return this.grid.error("DUP_ENTRY", r, a)
          }
          b[r] = f;
          delete b[s];
          m.push(f);
          p.push(g);
          o.push(l)
        }
      }
    }
    return m.length === 0 ? !1 : {datalist:m, changes:p, befores:o}
  };
  c.removeUniqueIndex = function(b, a, d, i) {
    if(!(i !== !0 && (e.isEmptyObj(b) || e.isEmptyString(a) || e.isEmptyObj(d)))) {
      var c;
      d.hasOwnProperty(a) && b.hasOwnProperty(c = d[a]) && delete b[c]
    }
  };
  c.removeUniqueIndices = function(b, a, d, i) {
    if(!(i !== !0 && (e.isEmptyObj(b) || e.isEmptyString(a) || e.isEmptyArray(d)))) {
      for(var c = d.length, k, h, i = 0;i < c;i++) {
        h = d[i], h.hasOwnProperty(a) && b.hasOwnProperty(k = h[a]) && delete b[k]
      }
    }
  };
  c.addToUniqueMap = function(b) {
    if(e.isEmptyObj(b) || e.isEmptyObj(this.uniqueMap)) {
      return!1
    }
    var a = [], d, i = this.uniqueMap, c;
    for(d in i) {
      if(i.hasOwnProperty(d)) {
        if(c = this.addUniqueIndex(i[d], d, b), c === !0) {
          a.push(d)
        }else {
          if(c instanceof Error) {
            d = 0;
            for(var k = a.length;d < k;d++) {
              this.removeUniqueIndex(i[a[d]], a[d], b)
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
    var a = this.uniqueMap, d = [], i, c;
    for(i in a) {
      if(a.hasOwnProperty(i)) {
        if(c = this.addUniqueIndices(a[i], i, b), c === !0) {
          d.push(i)
        }else {
          if(c instanceof Error) {
            i = 0;
            for(var k = d.length;i < k;i++) {
              this.removeUniqueIndices(a[d[i]], d[i], b)
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
    var i, c = this.uniqueMap, k = [], h;
    for(i in c) {
      if(c.hasOwnProperty(i)) {
        h = this.updateUniqueIndex(c[i], i, b, a, d);
        if(h instanceof Error) {
          i = 0;
          for(var f = k.length;i < f;i++) {
            this.updateUniqueIndex(c[k[i]], k[i], b, d, a)
          }
          return h
        }
        h !== !1 && k.push(i)
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
    var i, c = this.uniqueMap, k = [], h;
    for(i in c) {
      if(c.hasOwnProperty(i)) {
        h = this.updateUniqueIndices(c[i], i, b, a, d);
        if(h instanceof Error) {
          i = 0;
          for(var f = k.length;i < f;i++) {
            this.updateUniqueIndices(c[k[i]], k[i], b, d, a)
          }
          return h
        }
        h !== !1 && k.push(i)
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
        for(var d = 0, i, c = b.length;d < c;d++) {
          if((i = b[d]).hasOwnProperty(a) === !1) {
            i[a] = this._increment++
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
    var i = this.idKey;
    switch(this._idMode) {
      case this._consts._auto:
        if(a.hasOwnProperty(i)) {
          return this.grid.error("NOT_MODIFIABLE", i)
        }
      ;
      case this._consts._given:
        return this.updateUniqueIndex(this._idToData, i, b, a, d);
      case this._consts._composite:
        if(a.hasOwnProperty(i)) {
          return this.grid.error("NOT_MODIFIABLE", i)
        }
        for(var d = this._options.idColKeys, c = d.length, k = 0;k < c;k++) {
          if(a.hasOwnProperty(d[k])) {
            for(var h = "", f = 0, l, g, m = {}, p = {}, k = p[i] = b[i];f < c;f++) {
              if(l = d[f], a.hasOwnProperty(l)) {
                if(e.isEmptyString(g = a[l])) {
                  return this.grid.error("BAD_NULL", l)
                }
                h += "&" + g
              }else {
                h += "&" + b[l]
              }
            }
            b[i] = m[i] = h;
            if(k === h) {
              break
            }
            a = this.updateUniqueIndex(this._idToData, i, b, m, p);
            a instanceof Error && (b[i] = k);
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
    var i = this.idKey, c = b.length, k = 0;
    switch(this._idMode) {
      case this._consts._auto:
        for(;k < c;k++) {
          if(a[k].hasOwnProperty(i)) {
            return this.grid.error("NOT_MODIFIABLE", i)
          }
        }
      ;
      case this._consts._given:
        return this.updateUniqueIndices(this._idToData, i, b, a, d);
      case this._consts._composite:
        for(var h = this._idToData, f, l, g = this._options.idColKeys, m = g.length, p, d = [], o = [], r = [], s = [], t, u, v, w;k < c;k++) {
          f = b[k];
          l = a[k];
          if(l.hasOwnProperty(i)) {
            t = 0;
            for(c = d.length;t < c;t++) {
              o[t][i] = d[t]
            }
            return this.grid.error("NOT_MODIFIABLE", i)
          }
          for(t = 0;t < m;t++) {
            if(l.hasOwnProperty(g[t])) {
              p = "";
              for(u = 0;u < m;u++) {
                if(v = g[u], l.hasOwnProperty(v)) {
                  if(e.isEmptyString(w = l[v])) {
                    t = 0;
                    for(c = d.length;t < c;t++) {
                      o[t][i] = d[t]
                    }
                    return this.grid.error("BAD_NULL", v)
                  }
                  p += "&" + w
                }else {
                  p += "&" + f[v]
                }
              }
              f[i] !== p && (o.push(f), r.push({}), s.push({}), d.push(f[i]), f[i] = p)
            }
          }
        }
        if(o.length === 0) {
          break
        }
        b = this.updateUniqueIndices(h, i, o, r, s);
        if(b instanceof Error) {
          t = 0;
          for(c = d.length;t < c;t++) {
            o[t][i] = d[t]
          }
        }
        return b
    }
    return!1
  };
  c.removeFromIdMap = function(b) {
    var a = this.idKey, d = this._idToData, c;
    e.isNotNull(b) && b.hasOwnProperty(a) && d.hasOwnProperty(c = b[a]) && delete d[c]
  };
  c.removeListFromIdMap = function(b) {
    if(!e.isEmptyArray(b)) {
      for(var a = this.idKey, d = b.length, c = this._idToData, j, k, h = 0;h < d;h++) {
        k = b[h], k.hasOwnProperty(a) && c.hasOwnProperty(j = k[a]) && delete c[j]
      }
    }
  };
  c.fillTemp = function(b, a) {
    if(!e.isNull(b)) {
      var d = this.grid.colDefMgr.getAll(), c = d.length, j, k, h = 0;
      if(a !== void 0 && a.isNew) {
        for(;h < c;h++) {
          k = d[h], j = k.key, k.nullOnCreate && e.isNull(b[j]) && (b[j] = "J@H" + this._increment++)
        }
      }
    }
  };
  c.fillTempList = function(b, a) {
    if(!e.isEmptyArray(b)) {
      var d = this.grid.colDefMgr.getAll(), c = d.length, j = b.length, k, h, f = 0;
      if(a !== void 0 && a.isNew) {
        for(;f < c;f++) {
          if(h = d[f], k = h.key, h.nullOnCreate) {
            for(h = 0;j;h++) {
              b[h][k] = "J@H" + this._increment++
            }
          }
        }
      }
    }
  };
  c.query = function(b) {
    if(typeof b === "string" && (b = $.trim(b), b.length !== 0)) {
      var a, d, c, j, e;
      a = b.toLowerCase();
      d = b.indexOf(" ");
      if(d !== -1 && (c = a.substring(0, d), a = a.indexOf(" where "), j = a > -1, d = $.trim(j ? b.substring(d + 1, a) : b.substring(d + 1)), d.length !== 0)) {
        switch(j && (e = $.trim(b.substring(a + 7))), c) {
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
    var b = e.split(b, /[\s,]+/), a = b.length, d = 0, c = {}, j = this.all, k = [];
    if(a === 0) {
      return k
    }
    for(;d < a;d++) {
      if(b[d] === "*") {
        break
      }
      c[b[d]] = !0
    }
    d = 0;
    for(a = j.length;d < a;d++) {
      k.push(e.clone(j[d], c))
    }
    return k
  };
  c.parse = function(b, a) {
    if(e.isNull(b)) {
      return!1
    }
    for(var d = this.grid.colDefMgr.getAll(), c = d.length, j, k, h = a !== void 0 && a.isNew, f = 0;f < c;f++) {
      if(k = d[f], !h || !k.nullOnCreate) {
        if(e.isFunction(j = k.parser)) {
          if(k = k.key, b.hasOwnProperty(k)) {
            try {
              b[k] = j(b[k], b)
            }catch(l) {
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
    for(var d = this.grid.colDefMgr.getAll(), c = d.length, j = b.length, k, h, f = 0, l, g = a !== void 0 && a.isNew, m;f < c;f++) {
      if(h = d[f], !g || !h.nullOnCreate) {
        if(e.isFunction(k = h.parser)) {
          h = h.key;
          try {
            for(l = 0;l < j;l++) {
              m = b[l], m.hasOwnProperty(h) && (m[h] = k(m[h], m))
            }
          }catch(p) {
            return e.isNull(m) ? this.grid.error("PARSE_ERROR", m, h) : this.grid.error("PARSE_ERROR", m[h], h)
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
    for(var d = this.grid.colDefMgr.getAll(), c = d.length, j, k, h, f, l, g, m, p = a !== void 0 && a.isNew, o = 0;o < c;o++) {
      if(j = d[o], k = j.key, l = void 0, f = h = !1, !p || !j.nullOnCreate) {
        if(j.notNull === !0) {
          if(b.hasOwnProperty(k) === !1 || e.isEmptyString(l = b[k])) {
            return this.grid.error("BAD_NULL", k)
          }
          g = l.toString()
        }else {
          b.hasOwnProperty(k) === !1 || e.isNull(l = b[k]) ? f = h = !0 : l === "" && (f = !0), g = h === !1 ? l.toString() : ""
        }
        if(h === !1) {
          if(e.isNotNull(m = j.max) && f === !1 && l > m) {
            return this.grid.error("BIGGER_THAN", l, k, m)
          }
          if(e.isNotNull(m = j.min) && f === !1 && l < m) {
            return this.grid.error("SMALLER_THAN", l, k, m)
          }
          if(e.isNotNull(m = j.length)) {
            if(f === !0 || g.length !== m) {
              return this.grid.error("WRONG_LENGTH", g, m, k)
            }
          }else {
            if(e.isNotNull(m = j.maxlength) && f === !1 && g.length > m) {
              return this.grid.error("DATA_TOO_LONG", g, k, m)
            }
            if(e.isNotNull(m = j.minlength)) {
              if(f === !0 || g.length < m) {
                return this.grid.error("DATA_TOO_SHORT", g, k, m)
              }
            }
          }
        }
        if(e.isFunction(j = j.validator)) {
          try {
            if(j(l, b, g, h, f) !== !0) {
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
    for(var d = this.grid.colDefMgr.getAll(), c = d.length, j = b.length, k, h, f = 0, g, n, m, p, o, r = a !== void 0 && a.isNew, s = [], t = [];f < c;f++) {
      if(k = d[f], h = k.key, n = {}, m = {}, s.length = 0, t.length = 0, !r || !k.nullOnCreate) {
        if(k.notNull === !0) {
          for(g = 0;g < j;g++) {
            if(b[g].hasOwnProperty(h) === !1 || e.isEmptyString(p = b[g][h])) {
              return this.grid.error("BAD_NULL", h)
            }
            s.push(p);
            t.push(p.toString())
          }
        }else {
          for(g = 0;g < j;g++) {
            p = void 0, b[g].hasOwnProperty(h) === !1 || e.isNull(p = b[g][h]) ? (n[g] = !0, m[g] = !0) : p === "" && (m[g] = !0), s.push(p), n.hasOwnProperty(g) ? t.push("") : t.push(p.toString())
          }
        }
        if(e.isNotNull(o = k.max)) {
          for(g = 0;g < j;g++) {
            if(m.hasOwnProperty(g) === !1 && s[g] > o) {
              return this.grid.error("BIGGER_THAN", s[g], h, o)
            }
          }
        }
        if(e.isNotNull(o = k.min)) {
          for(g = 0;g < j;g++) {
            if(m.hasOwnProperty(g) === !1 && s[g] < o) {
              return this.grid.error("SMALLER_THAN", s[g], h, o)
            }
          }
        }
        if(e.isNotNull(o = k.length)) {
          for(g = 0;g < j;g++) {
            if(n.hasOwnProperty(g) === !1 && (m.hasOwnProperty(g) || t[g].length !== o)) {
              return this.grid.error("WRONG_LENGTH", t[g], o, h)
            }
          }
        }else {
          if(e.isNotNull(o = k.maxlength)) {
            for(g = 0;g < j;g++) {
              if(m.hasOwnProperty(g) === !1 && t[g].length > o) {
                return this.grid.error("DATA_TOO_LONG", t[g], h, o)
              }
            }
          }
          if(e.isNotNull(o = k.minlength)) {
            for(g = 0;g < j;g++) {
              if(n.hasOwnProperty(g) === !1 && (m.hasOwnProperty(g) || t[g].length < o)) {
                return this.grid.error("DATA_TOO_SHORT", t[g], h, o)
              }
            }
          }
        }
        if(e.isFunction(k = k.validator)) {
          try {
            for(g = 0;g < j;g++) {
              if(k(s[g], b[g], t[g], n.hasOwnProperty(g), m.hasOwnProperty(g)) !== !0) {
                return this.grid.error("WRONG_VALUE", t[g], h)
              }
            }
          }catch(u) {
            return this.grid.error("WRONG_VALUE", t[g], h)
          }
        }
      }
    }
    return!0
  };
  c.makeCompositeKey = function(b, a) {
    if(!(this._idMode !== this._consts._composite || e.isNull(b))) {
      if(a === !0 || b.hasOwnProperty(this.idKey) === !1) {
        for(var d = this._options.idColKeys, c = d.length, j = 0, k = "";j < c;j++) {
          k += "&" + b[d[j]]
        }
        b[this.idKey] = k
      }
    }
  };
  c.makeCompositeKeyList = function(b, a) {
    if(!(this._idMode !== this._consts._composite || b.length === 0)) {
      var d = this.idKey, c = b.length, j = this._options.idColKeys, e = j.length, h, f = 0, g, n;
      if(a === !0) {
        for(;f < c;f++) {
          h = b[f];
          n = "";
          for(g = 0;g < e;g++) {
            n += "&" + h[j[g]]
          }
          h[d] = n
        }
      }else {
        for(;f < c;f++) {
          if((h = b[f]).hasOwnProperty(d) === !1) {
            n = "";
            for(g = 0;g < e;g++) {
              n += "&" + h[j[g]]
            }
            h[d] = n
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
    for(var a = [], d = [], c = this.idKey, j = this._idToData, k = b.length, h = 0, f, g;h < k;h++) {
      (f = b[h]).hasOwnProperty(c) && j.hasOwnProperty(g = f[c]) ? a.push(j[g]) : d.push(f)
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
    for(var a = this.datalist, d = a.length, c = this.idKey, j = this._idToIdx;b < d;b++) {
      j[a[b][c]] = b
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
    var j = {};
    j[a] = d;
    return this.update(b, j, c)
  };
  c.update = function(b, a, d) {
    if(e.isNullOr(b, a)) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange");
    this.grid.event.trigger("onBeforeUpdateDatarow", [b, a]);
    var c = {}, j;
    for(j in a) {
      a.hasOwnProperty(j) && (b[j] === a[j] ? delete a[j] : (c[j] = b[j], b[j] = a[j]))
    }
    if(e.isEmptyObj(c)) {
      return!1
    }
    if((j = this.parse(b, d)) instanceof Error) {
      return this._rollback(b, c), j
    }
    if((j = this.validate(b, d)) instanceof Error) {
      return this._rollback(b, c), j
    }
    if((j = this.updateUniqueMap(b, a, c)) instanceof Error) {
      return this._rollback(b, c), j
    }
    if((j = this.updateIdMap(b, a, c)) instanceof Error) {
      return this._rollback(b, c), j
    }
    j !== !1 && this.grid.event.trigger("onIdChange", [b, j, b[this.idKey]]);
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
    for(var d = [], c = [], j = [], k, h, f, g = b.length, n = 0, m;n < g;n++) {
      h = {};
      k = b[n].datarow;
      f = b[n].change;
      for(m in f) {
        f.hasOwnProperty(m) && (k[m] === f[m] ? delete f[m] : (h[m] = k[m], k[m] = f[m]))
      }
      e.isNotEmptyObj(h) && (d.push(k), c.push(h), j.push(f))
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
    if((k = this.updateListUniqueMap(d, j, c)) instanceof Error) {
      return this._rollbackList(d, c), k
    }
    if((k = this.updateListIdMap(d, j, c)) instanceof Error) {
      return this._rollbackList(d, c), k
    }
    k !== !1 && this.grid.event.trigger("onIdListChange", [k.list, k.befores, this.idKey]);
    if(e.isNull(a) || a.undo !== !0) {
      this._history.push({_action:this._consts._updateList, _target:d, _before:c, _change:j}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onUpdateDatalist", [d, j, c, a]);
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
    for(var d = b.length, c = 0, j, e, h;c < d;c++) {
      for(h in j = b[c], e = a[c], e) {
        e.hasOwnProperty(h) && (j[h] = e[h])
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
        for(var b = [], c = 0, j = a.length;c < j;c++) {
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
        for(var b = [], c = 0, j = a.length;c < j;c++) {
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
    for(var a = [], d = b.length, c = 0, j, k, h = this._consts._notReal;c < d;c++) {
      if((k = b[c]).hasOwnProperty(h) === !1) {
        for(j in a.push({}), k) {
          k.hasOwnProperty(j) && k.hasOwnProperty(j) && j.substring(0, 3)
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
    var b = this.datalist, a = this.failed, d = 0, c = this._filters.length, j, e;
    this.grid.event.trigger("onBeforeFilter", [b, a]);
    b.length = 0;
    b.pushList(this.all);
    for(a.length = 0;d < c;d++) {
      j = this._filters[d];
      for(e = b.length - 1;e >= 0;e--) {
        j(b[e]) || (a.push(b[e]), b.removeAt(e))
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
    for(var d = this.datalist[b], c = [], j, e = 0, h = a.length;e < h;e++) {
      j = a[e], c.push(j in d ? d[j] : null)
    }
    return c
  };
  c.exportToArray = function(b, a, d) {
    b || (b = this.grid.colDefMgr.getKeys());
    for(var a = this.datalist.slice(a, d), c = [], j, e, h = 0, f = a.length, g, n = b.length;h < f;h++) {
      j = a[h];
      g = 0;
      for(d = [];g < n;g++) {
        e = b[g], d.push(e in j ? j[e] : null)
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
        for(var c, a = b.length, j;c < a;c++) {
          e.isNotNull(j = b[c]) && this._parseAndAdd(j.e, j.f, j.t)
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
    var b = e.split(b), c = b.length, j = 0;
    if(e.isFunction(a)) {
      for(;j < c;j++) {
        this._addHandler(b[j], a, d)
      }
    }else {
      if(e.isString(a)) {
        for(var a = e.split(a), f = a.length, h, g;j < c;j++) {
          h = b[j];
          for(g = 0;g < f;g++) {
            this._addHandler(h, d[a[g]], d)
          }
        }
      }else {
        for(f = a.length;j < c;j++) {
          h = b[j];
          for(g = 0;g < f;g++) {
            this._addHandler(h, a[g], d)
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
        for(var j = 0, f = c.length;j < f;j++) {
          if(c[j].fn === a) {
            c.removeAt(j);
            c.length === 0 && delete d[b];
            break
          }
        }
      }
    }
  };
  c.trigger = function(b, a, d) {
    for(var c, j, f = this._map, h = [], b = e.split(b), g = b.length, l = e.isEmptyArray(a), n = e.isFunction(d), m, p = 0;p < g;p++) {
      if(c = b[p], f.hasOwnProperty(c) && (c = f[c], j = c.length, j !== 0)) {
        if(m = 0, n) {
          var o;
          if(l) {
            for(;m < j;m++) {
              o = c[m].fn.call(c[m].target), d(o) && h.push(o)
            }
          }else {
            for(;m < j;m++) {
              o = c[m].fn.apply(c[m].target, a), d(o) && h.push(o)
            }
          }
        }else {
          if(l) {
            for(;m < j;m++) {
              h.push(c[m].fn.call(c[m].target))
            }
          }else {
            for(;m < j;m++) {
              h.push(c[m].fn.apply(c[m].target, a))
            }
          }
        }
      }
    }
    return h
  };
  c.triggerInvalid = function(b, a) {
    return this.trigger(b, a, function(a) {
      return a === !1
    }).length !== 0
  };
  c.sendToBack = function(b, a) {
    for(var d = this._map[b], c = d.length, j, e = -1, h = 0;h < c;h++) {
      if(d[h].fn === a) {
        e = h;
        j = d[h];
        break
      }
    }
    e > -1 && (d.removeAt(h), d.push(j))
  };
  c.sendToFront = function(b, a) {
    for(var d = this._map[b], c = d.length, j, e = -1, h = 0;h < c;h++) {
      if(d[h].fn === a) {
        e = h;
        j = d[h];
        break
      }
    }
    e > -1 && (d.removeAt(h), d.unshift(j))
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
    var d, b, c, f, h, g, l, n, m, p;
    a:for(d in a) {
      if(a.hasOwnProperty(d) && !(d in this)) {
        b = e.split(a[d]);
        c = b.length;
        f = 0;
        b:for(;f < c;f++) {
          if(h = b[f].split("."), g = h.length, !(g < 1)) {
            l = this;
            n = this;
            m = "";
            for(p = 0;p < g;p++) {
              if(h[p] in l) {
                n = l, l = l[m = h[p]]
              }else {
                continue b
              }
            }
            this._registerLink(d, l, n, m);
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
    var d = this.event, b = !1, c = this._ctnr[0], e = this._lastW, h = this._lastH, f = c.clientWidth, c = c.clientHeight;
    if(f >= 1 && e !== f) {
      d.trigger("resizeWidth", [f, e]), this._lastW = f, b = !0
    }
    if(c >= 1 && h !== c) {
      d.trigger("resizeHeight", [c, h]), this._lastH = c, b = !0
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
    var h = this, f = this.colDefMgr, g = this.dataMgr, n = b.map(function(a) {
      if(a = f.getByKey(a)) {
        return a
      }
      throw Error("column key not found");
    }), m = g.exportToArray(b);
    google.setOnLoadCallback(function() {
      for(var d = new google.visualization.DataTable, f = 0, q = n.length, s, t;f < q;f++) {
        s = n[f];
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
        d.addColumn(t || f === 0 && "string" || "number", s.name)
      }
      d.addRows(m);
      var u = h._charts[a] = new google.visualization[e](document.getElementById(a));
      u.draw(d, c);
      h.event.bind("onAfterRefresh", function() {
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
    for(var b = [], a = this.grid.colDefMgr.getAll(), d = a.length, c, j = this._options, f = j.classCol, h = j.classColName, g = this, l = this._creator, n = this._inputMap, m = 0, p = function(a) {
      a.which === e.keyMapKeydown.enter && g._addData()
    };m < d;m++) {
      c = a[m], c.inputOnCreate === !0 && b.push("<div key='" + c.key + "' class='" + f + "'><div class='" + h + "'>" + c.name + "</div><input type='text' value='" + e.ifNull(c.defaultValue, "") + "' style='width:" + c.width + "px'/></div>")
    }
    l[0].innerHTML = b.join("") + "<button type='button' onclick='JGM.m.DataCreator." + this.mid + "._addData()'>등록</button><button type='button' onclick='JGM.m.DataCreator." + this.mid + "._reset()'>초기화</button>";
    for(m = 0;m < d;m++) {
      c = a[m], c.inputOnCreate === !0 && (n[c.key] = l.find("div[key='" + c.key + "'] input").keyup(p))
    }
    e.isNotNull(this.grid.menubar) && (this.grid.menubar.addIcon(j.classCreatorIcon, "데이터 로우를 추가합니다.", j.creatorIconWidth, j.creatorIconHeight, function() {
      l.toggle("fast")
    }), l.hide())
  };
  c._addData = function() {
    var b, a = this._inputMap, d = this.grid.colDefMgr, c = {}, e = d.getAll(), f = e.length, h = 0;
    for(b in a) {
      a.hasOwnProperty(b) && d.getByKey(b)
    }
    for(;h < f;h++) {
      d = e[h], b = d.key, a.hasOwnProperty(b) ? c[b] = a[b][0].value : d.defaultValue !== void 0 && (c[b] = d.defaultValue)
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
  var c = f.prototype;
  c._onCreateCss = function() {
    var a = "#" + this.grid.mid + " .", d = this._options, b = d.borderThickness + "px " + d.border, c = "border-radius:" + d.tagsBorderRadius + "px;-moz-border-radius:" + d.tagsBorderRadius + "px", i = d.advButtonBorderThickness + "px " + d.advButtonBorder, e = d.advButtonBorderThickness + "px " + d.advButtonBorderHover, j = d.advButtonBorderThickness + "px " + d.advButtonBorderActive, h = d.advButtonBorderThickness + "px " + d.advButtonBorderOpened, f = d.tagsHeight - 2 * d.tagsPadding, k = f - 
    2 * d.advButtonBorderThickness, l = f - 2 * d.tagBorderThickness, q = a + d.classMask, m = a + d.classSearchbar, n = a + d.classAdvButton, p = a + d.classRemoveTag, o = [];
    o.push(q + "{" + g._CONST._cssUnselectable + "overflow:hidden;width:100%;background:" + d.background + "}");
    o.push(q + " button{margin:0;padding:0 3px}");
    o.push(q + " input{border:" + d.inputBorder + ";padding:" + d.inputPadding + "}");
    o.push(m + "{text-align:" + d.searchbarAlign + ";border-bottom:" + b + "}");
    o.push(m + " input{width:" + d.searchbarWidth + ";margin:" + d.searchbarMargin + "px 0;height:" + d.searchbarHeight + "px;" + c + "}");
    o.push(a + d.classTagbar + "{cursor:default;height:" + (d.tagsHeight - d.tagsPadding) + "px;padding:" + d.tagsPadding + "px 0 0 " + d.tagsPadding + "px;border-bottom:" + b + "}");
    o.push(n + "{float:left;margin-right:" + d.tagsPadding + "px;background:" + d.advButtonBg + ";border:" + i + ";padding:0 " + d.advButtonPadding + "px;" + c + "}");
    o.push(n + ":hover{background:" + d.advButtonBgHover + ";border:" + e + "}");
    o.push(n + ".opened{background:" + d.advButtonBgOpened + ";border:" + h + "}");
    o.push(n + ":active{background:" + d.advButtonBgActive + ";border:" + j + "}");
    o.push(a + d.classAdvButtonName + "{float:left;color:" + d.advButtonColor + ";font:" + d.advButtonFont + ";line-height:" + k + "px}");
    o.push(a + d.classAdvButtonIcon + "{float:left;height:" + k + "px;margin-left:" + d.advButtonIconMargin + "px;background:url(" + d.advButtonIconUrl + ") no-repeat center;width:" + d.advButtonIconWidth + "px}");
    o.push(n + ".opened ." + d.classAdvButtonIcon + "{background:url(" + d.advButtonIconCloseUrl + ") no-repeat center}");
    o.push(a + d.classTag + "{float:left;border:" + d.tagBorderThickness + "px " + d.tagBorder + ";margin:0 " + d.tagsPadding + "px " + d.tagsPadding + "px 0;padding:0 " + d.tagPadding + "px;background:" + d.tagBackground + ";" + c + "}");
    o.push(a + d.classTagName + "{float:left;color:" + d.tagColor + ";font:" + d.tagFont + ";line-height:" + l + "px}");
    o.push(p + "{float:left;margin-left:" + d.tagPadding + "px;background:url(" + d.tagRemoveIconUrl + ") no-repeat center;width:" + d.tagRemoveIconWidth + "px;height:" + l + "px}");
    o.push(p + ":hover{background:url(" + d.tagRemoveIconHoverUrl + ") no-repeat center}");
    o.push(p + ":active{background:url(" + d.tagRemoveIconActiveUrl + ") no-repeat center}");
    o.push(a + d.classClearTags + "{height:" + f + "px}");
    o.push(a + d.classAdvanced + "{cursor:default;font:" + d.advFont + ";border-bottom:" + b + "}");
    o.push(a + d.classOptionCol + "{display:inline-block;vertical-align:top}");
    o.push(a + d.classOptionCol + " input{width:" + d.advInputWidth + "px;margin-right:2px;" + c + "}");
    o.push(a + d.classSearchIcon + "{background:url(" + d.searchIconUrl + ") no-repeat center;width:" + d.searchIconWidth + "px;height:" + d.searchIconHeight + "px}");
    return o.join("")
  };
  f.getInstance = function(a) {
    return new f(a)
  };
  c.__init = function() {
    var a = this._options, d = this, b, c, i;
    b = this._mask = $("<div class='" + a.classMask + "'>").prependTo(this._ctnr);
    this._search = $("<div class='" + a.classSearchbar + "'><input type='text'/></div>").appendTo(b);
    this._masterInput = this._search.children(":eq(0)").keyup(function(a) {
      a.which === e.keyMapKeydown.enter ? d._parse($(this)[0].value) : a.which === e.keyMapKeydown.esc && d._removeAllOptions()
    });
    c = this._hasFilter = this.grid.colDefMgr.get().some(function(a) {
      return e.isNotNull(a.filter)
    });
    i = this._tag = $("<div class='" + a.classTagbar + "'>" + (c ? "<div class='" + a.classAdvButton + "'><div class='" + a.classAdvButtonName + "'>추가 옵션</div><div class='" + a.classAdvButtonIcon + "'></div></div>" : "") + "<button type='button' class='" + a.classClearTags + "' onclick='JGM.m.SearchManager." + this.mid + "._removeAllOptions()'>모든 필터 제거</button></div>").appendTo(b);
    if(c) {
      var j = this._adv = $("<div class='" + a.classAdvanced + "'>").appendTo(b).hide().keyup(function(a) {
        if(a.which === e.keyMapKeydown.enter) {
          var b = a.target.getAttribute("key");
          d._registerOption(b, d._keyToName[b], a.target.getAttribute("tag"), a.target.value);
          a.target.value = ""
        }
      });
      this._advButton = i.children(":eq(0)").click(function() {
        $(this).toggleClass("opened");
        j.toggle("fast")
      })
    }
    this.grid.event.bind({onRenderModules:this._onRenderModules, onCreateCss:this._onCreateCss, onFilter:this._onFilter, onDestroy:this._destroy, onAfterRenderModules:this._onAfterRenderModules}, this)
  };
  c._onRenderModules = function() {
    var a = [], d = this._options, b = this._mask;
    if(this._hasFilter) {
      for(var c = this.grid.colDefMgr.get(), i = c.length, j = d.keyMap, h = this._nameMap, f = this._keyToName, k, g, l, q = 0;q < i;q++) {
        if(k = c[q], e.isNotNull(k.filter)) {
          l = k.key, g = e.isNull(j) || !j.hasOwnProperty(l) ? k.name || l : j[l], h[g] = l, f[l] = g, a.push("<div class='" + d.classOptionCol + "'>"), this._registerFilter(l, g, k.name, k.filter, a), a.push("</div>")
        }
      }
      this._adv[0].innerHTML = a.join("")
    }
    e.isNotNull(this.grid.menubar) && (this.grid.menubar.addIcon(d.classSearchIcon, "데이터 검색을 합니다.", d.searchIconWidth, d.searchIconHeight, function() {
      b.toggle("fast")
    }), b.hide())
  };
  c._onAfterRenderModules = function() {
    var a = this._filterMap, d, b, c, i, e = this._adv;
    for(b in a) {
      if(a.hasOwnProperty(b)) {
        for(c in d = a[b], d) {
          if(d.hasOwnProperty(c) && c !== "andor" && c !== "parser" && c !== "validator") {
            (i = d[c]).input = e.find("#" + b + i.option.name)
          }
        }
      }
    }
  };
  c._destroy = function() {
    var a, d, b, c = this._globalMap, i = this._filterMap, e = this._tagMap;
    for(a in c) {
      c.hasOwnProperty(a) && (g._delete$(c[a], "tag"), g._deleteArray(c[a], "list"))
    }
    for(a in i) {
      if(i.hasOwnProperty(a)) {
        c = i[a];
        for(d in c) {
          c.hasOwnProperty(d) && (d !== "andor" && d !== "parser" && d !== "validator" && g._delete$(c[d], "input"), g._deleteMap(c, d))
        }
        g._deleteMap(i, a)
      }
    }
    for(a in e) {
      if(e.hasOwnProperty(a)) {
        i = e[a];
        for(d in i) {
          if(i.hasOwnProperty(d)) {
            c = i[d];
            for(b in c) {
              c.hasOwnProperty(b) && (g._delete$(c[b], "tag"), g._deleteMap(c, b))
            }
            g._deleteMap(i, d)
          }
        }
        g._deleteMap(e, a)
      }
    }
    g._destroy(this, {name:"SearchManager", path:"search", $:"masterInput _advButton _mask _search _tag _adv", property:"ctnr _hasFilter", array:"global", map:"globalMap _filterMap _tagMap _codeMap _nameMap _options _keyToName"})
  };
  c._onFilter = function(a, d) {
    if(!(this._global.length === 0 && e.isEmptyObj(this._codeMap))) {
      var b, c = this._tagMap, i, j, h = a.length, f, k = this._filterMap, g = this.constructor.CONST.and, l, q = this._global.length > 0, m, n;
      if(q) {
        var p = this._global, o;
        f = this.grid.colDefMgr.get().filter(function(a) {
          return!a.noSearch
        });
        var r = f.length, s = [];
        for(m = 0;m < r;m++) {
          s.push(f[m].key)
        }
      }
      m = h - 1;
      a:for(;m >= 0;m--) {
        h = a[m];
        if(q) {
          f = p.slice();
          b = 0;
          for(;f.length !== 0 && b < r;b++) {
            if(!e.isNull(o = h[s[b]])) {
              e.isString(o) || (o = o.toString());
              for(n = f.length - 1;n >= 0;n--) {
                o.indexOf(f[n]) !== -1 && f.removeAt(n)
              }
            }
          }
          if(f.length !== 0) {
            a.removeAt(m);
            d.push(h);
            continue a
          }
        }
        for(i in c) {
          if(c.hasOwnProperty(i)) {
            if(n = c[i], b = k[i].andor, f = h[i], b === g) {
              for(j in n) {
                if(n.hasOwnProperty(j)) {
                  for(l in b = n[j], b) {
                    if(b.hasOwnProperty(l) && !b[l].fn(f)) {
                      a.removeAt(m);
                      d.push(h);
                      continue a
                    }
                  }
                }
              }
            }else {
              for(j in n) {
                if(n.hasOwnProperty(j)) {
                  for(l in b = n[j], b) {
                    if(b.hasOwnProperty(l) && b[l].fn(f)) {
                      continue a
                    }
                  }
                }
              }
              a.removeAt(m);
              d.push(h);
              continue a
            }
          }
        }
      }
    }
  };
  c._registerFilter = function(a, d, b, c, i) {
    if(!this._filterMap.hasOwnProperty(a)) {
      if(c === "number") {
        c = this.constructor._numberFilter
      }else {
        if(c === "string") {
          c = this.constructor._stringFilter
        }
      }
      var e, j = c.length, h = 0, f = this.mid, k = this._options.classOption, g, l, q, m;
      g = this._filterMap[a] = {andor:this.constructor.CONST.and};
      l = this._tagMap[a] = {};
      for(i.push("<table>");h < j;h++) {
        e = c[h], m = e.name, m === "parser" ? g.parser = e.fn : m === "validator" ? g.validator = e.fn : (q = e.tag, g[q] = {option:e}, l[q] = {}, i.push("<tr title='" + e.comment(b, "입력값") + "'><td><div class='" + k + "'>" + b + " " + q + "</td><td><input id='" + a + m + "' key='" + a + "' tag='" + q + "' type='text'><button type='button' onclick=\"JGM.m.SearchManager." + f + "._registerOption('" + a + "','" + d + "','" + q + "',this.previousSibling.value)\">등록</button></div></td></tr>"))
      }
      i.push("</table>")
    }
  };
  c._parse = function(a) {
    for(var d, b, c, i, j = e.split(a), h = j.length, f = 2, k = !1, g = [], l = this._nameMap, q = this._filterMap, m = 0;m < h;m++) {
      if(a = j[m], a !== "") {
        switch(f) {
          case 0:
            q[d].hasOwnProperty(a) && (c = a, f = 1);
            break;
          case 1:
            i = a;
            f = 2;
            break;
          case 2:
            a.charAt(0) === "@" ? (a = a.substring(1), l.hasOwnProperty(a) ? (e.isNotNullAnd(d, b, c, i) && this._registerOption(d, b, c, i, !0) && (k = !0), d = l[a], b = a, i = c = void 0, f = 0) : e.isNull(d) ? g.push(a) : i += " " + a) : e.isNull(d) ? g.push(a) : i += " " + a
        }
      }
    }
    e.isNotNullAnd(d, b, c, i) && this._registerOption(d, b, c, i, !0) && (k = !0);
    this._registerGlobal(g) && (k = !0);
    this._syncMasterInput();
    k && this.grid.dataMgr.refresh()
  };
  c._syncMasterInput = function() {
    if(this._options.syncMaster) {
      var a = this._global.join(" "), d = this._tagMap, b = this._keyToName, c, i, e, j, h;
      for(c in d) {
        if(d.hasOwnProperty(c)) {
          for(i in j = d[c], j) {
            if(j.hasOwnProperty(i)) {
              for(e in h = j[i], h) {
                h.hasOwnProperty(e) && (a += " @" + b[c] + " " + i + " " + e)
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
  c._registerOption = function(a, d, b, c, i) {
    var j = this._filterMap, h, k = this._codeMap;
    if(j.hasOwnProperty(a) && (h = j[a]).hasOwnProperty(b)) {
      j = h[b];
      if(e.isNull(c)) {
        var g = j.input, c = $.trim(g.val());
        g.val("")
      }else {
        c = $.trim(c)
      }
      if(c.length === 0) {
        return!1
      }
      e.isNotNull(h.parser) && (c = h.parser(c));
      if(k.hasOwnProperty(a + "@T" + b + "@B" + c)) {
        return!1
      }
      if(e.isNotNull(h.validator) && !h.validator(c)) {
        return!1
      }
      j = j.option;
      h = h.andor
    }else {
      return!1
    }
    g = this._tagMap[a];
    if(g[b].hasOwnProperty(c)) {
      return!1
    }
    var l, q, m, n, p = this._filterMap[a], o;
    for(m in g) {
      if(g.hasOwnProperty(m)) {
        for(n in l = g[m], l) {
          l.hasOwnProperty(n) && (o = l[n], q = e.isNotNull(p.parser) ? p.parser(n) : n, f._checkDisable(j.type, o.option.type, h, c, q) && (delete k[a + "@T" + o.option.tag + "@B" + q], o.tag.remove(), delete o.tag, delete o.option, delete o.fn, delete l[n]))
        }
      }
    }
    k[a + "@T" + b + "@B" + c] = !0;
    this._createTag(a, j, c, d);
    i || (this._syncMasterInput(), this.grid.dataMgr.refresh());
    return!0
  };
  c._removeOption = function(a, d, b) {
    var c = this._tagMap, i, j;
    if(c.hasOwnProperty(a) && (i = c[a]).hasOwnProperty(d) && (j = i[d]).hasOwnProperty(b)) {
      c = j[b], c.tag.remove(), delete c.tag, delete c.option, delete c.fn, delete j[b], delete this._codeMap[a + "@T" + d + "@B" + b], this._syncMasterInput(), this.grid.dataMgr.refresh()
    }
  };
  c._removeAllOptions = function() {
    var a, d = this._globalMap, b, c = this._tagMap, i, j, e;
    for(a in d) {
      if(d.hasOwnProperty(a)) {
        b = d[a], b.tag.remove(), delete b.tag, b.list.length = 0, delete b.list, delete d[a]
      }
    }
    this._global.length = 0;
    for(a in c) {
      if(c.hasOwnProperty(a)) {
        for(i in d = c[a], d) {
          if(d.hasOwnProperty(i)) {
            for(j in b = d[i], b) {
              b.hasOwnProperty(j) && (e = b[j], e.tag.remove(), delete e.tag, delete e.option, delete e.fn, delete b[j])
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
    var i = this._options;
    return this._tagMap[a][d.tag][b] = {tag:$("<div class='" + i.classTag + "' title='" + d.comment(c, b) + "'><div class='" + i.classTagName + "'>@" + c + " " + d.tag + " " + b + "</div><div class='" + i.classRemoveTag + "' title='필터 제거' onclick=\"JGM.m.SearchManager." + this.mid + "._removeOption('" + a + "','" + d.tag + "','" + b + "')\"></div></div>").appendTo(this._tag), option:d, fn:d.fn(b)}
  };
  var b = f.CONST = {lt:0, lte:1, eq:2, neq:3, gt:4, gte:5, and:6, or:7, T:8, F:9}, c = b.lt, a = b.gt, d = b.eq, i = b.neq, j = b.and, k = b.or, h = b.T, b = b.F, q = f._comparator = {}, l = q[c] = function(a, d) {
    return a <= d
  }, n = q[a] = function(a, d) {
    return a >= d
  }, m = q[d] = function(a, d) {
    return a === d
  }, h = q[h] = function() {
    return!0
  }, p = f._disableMap = {}, o = p[c] = {}, r = p[a] = {}, s = p[d] = {}, p = p[i] = {};
  q[b] = function() {
    return!1
  };
  o[c] = {};
  o[c][j] = h;
  o[c][k] = h;
  o[a] = {};
  o[a][j] = l;
  o[a][k] = n;
  o[d] = {};
  o[d][j] = h;
  o[d][k] = n;
  o[i] = {};
  o[i][j] = l;
  o[i][k] = h;
  r[c] = {};
  r[c][j] = n;
  r[c][k] = l;
  r[a] = {};
  r[a][j] = h;
  r[a][k] = h;
  r[d] = {};
  r[d][j] = h;
  r[d][k] = l;
  r[i] = {};
  r[i][j] = n;
  r[i][k] = h;
  s[c] = {};
  s[c][j] = h;
  s[c][k] = l;
  s[a] = {};
  s[a][j] = h;
  s[a][k] = n;
  s[d] = {};
  s[d][j] = h;
  s[d][k] = m;
  s[i] = {};
  s[i][j] = h;
  s[i][k] = h;
  p[c] = {};
  p[c][j] = n;
  p[c][k] = h;
  p[a] = {};
  p[a][j] = l;
  p[a][k] = h;
  p[d] = {};
  p[d][j] = h;
  p[d][k] = h;
  p[i] = {};
  p[i][j] = m;
  p[i][k] = h;
  f._checkDisable = function(a, d, b, c, i) {
    try {
      return this._disableMap[a][d][b](c, i)
    }catch(j) {
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
  }}, {name:"neq", tag:"!=", type:i, comment:function(a, d) {
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
  }}, {name:"notEquals", tag:"!=", type:i, comment:function(a, d) {
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
    var d = this._options, c = d.tableBorderColor, j = d.headerBorderColor, e = d.cellBorderColor, h = [], f = b.length, g = f - 1, n = a.length, m = n - 1, p = 0, o;
    h.push("<html><head>");
    h.push("<title>" + d.title + "</title>");
    h.push("</head><body onload='window.print();'>");
    h.push("<table width='100%' cellspacing='0' cellpadding='0'><tbody><tr><td align='left'>");
    h.push("<table width='100%' cellspacing='0' cellpadding='2' style='border-collapse:collapse'>");
    h.push("<tbody style='font:" + d.font + ";'>");
    for(h.push("<tr style='background-color:" + d.headerBackgroundColor + ";color:" + d.headerFontColor + ";text-align:center'>");p < f;p++) {
      h.push("<td style='border:solid 1px " + j + ";'>" + b[p].name + "</td>")
    }
    h.push("</tr>");
    for(p = 0;p < n;p++) {
      d = a[p];
      h.push("<tr>");
      if(p === 0) {
        for(o = 0;o < f;o++) {
          o === 0 ? h.push("<td style='border:solid 1px " + e + ";border-top:solid 1px " + j + ";border-left:solid 1px " + c + "'>" + d[b[o].key] + "</td>") : o === g ? h.push("<td style='border:solid 1px " + e + ";border-top:solid 1px " + j + ";border-right:solid 1px " + c + "'>" + d[b[o].key] + "</td>") : h.push("<td style='border:solid 1px " + e + ";border-top:solid 1px " + j + "'>" + d[b[o].key] + "</td>")
        }
      }else {
        if(p < m) {
          for(o = 0;o < f;o++) {
            o === 0 ? h.push("<td style='border:solid 1px " + e + ";border-left:solid 1px " + c + "'>" + d[b[o].key] + "</td>") : o === g ? h.push("<td style='border:solid 1px " + e + ";border-right:solid 1px " + c + "'>" + d[b[o].key] + "</td>") : h.push("<td style='border:solid 1px " + e + "'>" + d[b[o].key] + "</td>")
          }
        }else {
          for(o = 0;o < f;o++) {
            o === 0 ? h.push("<td style='border:solid 1px " + e + ";border-bottom:solid 1px " + c + ";border-left:solid 1px " + c + "'>" + d[b[o].key] + "</td>") : o === g ? h.push("<td style='border:solid 1px " + e + ";border-bottom:solid 1px " + c + ";border-right:solid 1px " + c + "'>" + d[b[o].key] + "</td>") : h.push("<td style='border:solid 1px " + e + ";border-bottom:solid 1px " + c + "'>" + d[b[o].key] + "</td>")
          }
        }
      }
      h.push("</tr>")
    }
    h.push("</tbody></table></td></tr></tbody></table></body></html>");
    return h.join("")
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
    this._options = i._extend({colDef:{type:"string", key:void 0, name:"", colClass:void 0, defaultValue:void 0, inputOnCreate:void 0, style:"", headerStyle:"", width:80, minW:30, maxW:void 0, editor:void 0, sorter:void 0, hidden:!1, sumRenderer:void 0, tooltipEnabled:!1, resizable:!1, renderer:jx.grid.ViewportManager._renderer, rendererInput:!1, noTitle:!1, noName:!1, title:void 0, noSearch:!1, filter:void 0, parser:void 0, validator:void 0}}, a.options);
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
  function a(a, d) {
    switch(typeof a) {
      case "undefined":
        return Number.MAX_VALUE;
      case "boolean":
        return a ? 1 : 0;
      case "number":
        return a;
      case "string":
        return a[d]();
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
        return a[d]();
      default:
        return a == null ? Number.MAX_VALUE : a.toString()[d]()
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
  var i = goog.getObjectByName("jx.grid"), j = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.getObjectByName("jx.grid.Column");
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
    i._destroy(this, {name:"ColumnManager", path:"colDefMgr", property:"colDefs", map:"keyToIdx _keyToDef _options", array:"filtered"})
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
      var d = a.filter(function(a) {
        return j.isNotNull(a)
      });
      a.length = 0;
      a.pushList(d)
    }
    this.grid.event.trigger("onBeforeSetColDefs", [this._colDefs, a]);
    this._colDefs = [];
    this._filtered.length = 0;
    this._keyToIdx = {};
    this._keyToDef = {};
    this.grid.event.trigger("onEmptyColDefs");
    for(var d = 0, b = a.length, c = this._keyToDef, i, e;d < b;d++) {
      i = a[d];
      if(!i.hasOwnProperty("key")) {
        return this._keyToDef = {}, this.grid.error("KEY_UNDEFINED", d)
      }
      e = i.key;
      if(j.isEmptyString(e)) {
        return this._keyToDef = {}, this.grid.error("BAD_NULL", d)
      }
      if(c.hasOwnProperty(e)) {
        return this._keyToDef = {}, this.grid.error("DUP_KEY", e)
      }
      c[e] = i
    }
    this._colDefs = a;
    for(d = 0;d < b;d++) {
      this._extend(a[d])
    }
    this.grid.event.trigger("onAfterSetColDefs", [a, this._filter()]);
    return a
  };
  k.push = function(a) {
    return this.addAt(this._filtered.length, a)
  };
  k.addAt = function(a, d) {
    if(!j.isNull(d)) {
      var b = d.key, c = this._keyToDef, i = this._filtered;
      j.isNull(a) || a > i.length ? a = i.length : a < 0 && (a += i.length);
      this.grid.event.trigger("onBeforeAddColDef", [d]);
      if(j.isNull(b)) {
        return this.grid.error("KEY_UNDEFINED")
      }
      if(c.hasOwnProperty(b)) {
        return this.grid.error("DUP_KEY", b)
      }
      this._colDefs.addAt(a, this._extend(c[b] = d));
      d.hidden !== !0 && (i.addAt(a, d), this._reidx());
      this.grid.event.trigger("onAfterAddColDef", [d, a]);
      return i.length
    }
  };
  k._extend = function(a) {
    if(a) {
      var d = {}, i, j;
      $.extend(!0, d, this._options.colDef);
      $.extend(!0, d, a);
      $.extend(!0, a, d);
      d = a.type = g(a.type);
      j = a.key;
      j != null && typeof j != "string" && (a.key = j = j.toString());
      if(!j) {
        throw Error("column key is not defined!");
      }
      if(i = a.sorter) {
        typeof i == "string" ? i = g(i) : d && (i = d);
        if(i = f.sorter(i, j)) {
          i.key = j
        }
        a.sorter = i
      }
      if((i = a.parser) && d && typeof i != "function") {
        switch(d) {
          case "boolean":
            i = e;
            break;
          case "int":
            i = parseInt;
            break;
          case "float":
            i = parseFloat;
            break;
          case "string":
            i = c;
            break;
          case "date":
            i = b;
            break;
          default:
            i = null
        }
        a.parser = i
      }
    }
    return a
  };
  k.hide = function(a) {
    var d = this._filtered[a];
    if(!j.isNull(d)) {
      return d.hidden = !0, this._filtered.removeAt(a), this._reidx(), this.grid.event.trigger("onHideCol", [d, a]), d
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
      var d = this._keyToDef;
      if(d.hasOwnProperty(a)) {
        if(this._keyToIdx.hasOwnProperty(a)) {
          return d[a]
        }
        d = d[a];
        d.hidden = !1;
        this._filter();
        this._reidx();
        this.grid.event.trigger("onShowCol", [d, this._keyToIdx[a]]);
        return d
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
    for(var d = this._filtered, b = d.length, c = this._keyToIdx;a < b;a++) {
      c[d[a].key] = a
    }
    return c
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
    for(var d = 0, b = a.length, c = this._filtered, i = this._keyToIdx, j = this._keyToDef;d < b;d++) {
      c.push(j[a[d]]), i[a[d]] = d
    }
    this.grid.event.trigger("onReorderCols", a);
    return this._filtered
  };
  k.getKeys = function() {
    return this._filtered.map(function(a) {
      return a.key
    })
  };
  f.sorter = function(b, c, i) {
    i = {on:!!i, key:c};
    switch(b) {
      case "boolean":
        return i.comparator = function(a, b) {
          return d(a[c]) - d(b[c])
        }, i;
      case "string":
        return i.lexi = c, i;
      case "int":
        return i.comparator = function(d, b) {
          return a(d[c], "toInt") - a(b[c], "toInt")
        }, i;
      case "float":
        return i.comparator = function(d, b) {
          return a(d[c], "toFloat") - a(b[c], "toFloat")
        }, i;
      case "date":
        return i.comparator = function(d, b) {
          return a(d[c], "toInt") - a(b[c], "toInt")
        }, i
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
    var a = "#" + this.grid.mid + " .", d = this._options, b = [];
    b.push(a + d.classMenuBar + "{" + g._CONST._cssUnselectable + "overflow:hidden;width:100%;background:" + d.background + ";border-bottom:" + (d.borderThickness + "px " + d.border) + ";height:" + d.height + "px}");
    b.push(a + d.classIcon + "{float:left;height:" + d.iconHeight + "px;width:" + d.iconWidth + "px;border:" + d.iconBorderThickness + "px " + d.iconBorder + ";margin:" + d.iconMargin + "px 0 0 " + d.iconMargin + "px;background:" + d.iconBackground + ";border-radius:" + d.iconBorderRadius + "px;-moz-border-radius:" + d.iconBorderRadius + "px}");
    b.push(a + d.classIcon + ":hover," + a + d.classIcon + ":focus{background:" + d.iconBackgroundHover + ";border:" + d.iconBorderThickness + "px " + d.iconBorderHover + "}");
    b.push(a + d.classIcon + ":active," + a + d.classIcon + ".active{cursor:default;background:" + d.iconBackgroundActive + ";border:" + d.iconBorderThickness + "px " + d.iconBorderActive + "}");
    b.push(a + d.classIcon + ".active:focus{border:" + d.iconBorderThickness + "px " + d.iconBorderFocus + "}");
    return b.join("")
  };
  b.addIcon = function(a, d, b, c, f) {
    return $("<div class='" + this._options.classIcon + "' tabIndex='0' title='" + d + "'><div class='" + a + "' style='margin-top:" + (this._options.iconHeight - c) / 2 + "px;margin-left:" + (this._options.iconWidth - b) / 2 + "px'></div></div>").appendTo(this._menubar).click(function(a) {
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
jx.grid.CheckManager = {};
(function() {
  function f(a) {
    function d() {
      var a = this._options, d = this._isRadio = a.isRadio = !!a.isRadio;
      this._hasMaster = a.master = !d && !!a.master;
      this._col = a.colDef;
      this._key = this._col.key;
      this._cssClass = a.classCheck;
      this._cssClassMaster = a.classMasterCheck;
      this._name = a.name || d && "radio" + this.mid || null
    }
    this.addEventListener("afteroption", d);
    c.call(this, a);
    this.removeEventListener("afteroption", d)
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
    var a, d = g._CONST;
    a = this.getColMgr();
    a.getByKey(this._col.key) || a.addAt(this._options.colIdx, this._col);
    if(e.isNull(d._checkboxWidth)) {
      a = e.calCheckSize(), d._checkboxWidth = a.checkboxW, d._checkboxHeight = a.checkboxH, d._radioWidth = a.radioW, d._radioHeight = a.radioH
    }
  };
  b._bindEvents = function() {
    var a = this._col.key, d;
    d = {onAfterSetDatalist:this.uncheckAll, onIdChange:this._onIdChange, onIdListChange:this._onIdListChange, onRemoveDatarow:this._onRemoveDatarow, onRemoveDatalist:this._onRemoveDatalist};
    d["onRenderCell_" + a + "_prepend"] = this._onRenderCell;
    d["keydownColSel_" + a + "_" + e.keyMapKeydown.space] = this._keydownColSel;
    if(this._hasMaster) {
      d["onRenderHeader_" + a + "_prepend"] = this._onRenderHeader, d.onRenderHeadersComplete = this._getMaster
    }
    this.bindGridEvent(d, this)
  };
  b._defaultOptions = function() {
    return{colDef:{key:"checkbox", width:20, name:" ", noTitle:!0, resizable:!1, sorter:null, filter:null, noSearch:!0, editor:null, inputOnCreate:!1}, colIdx:0, name:void 0, classCheck:"checkmg", classMasterCheck:"checkm", master:!0, isRadio:!1}
  };
  b._beforeDispose = function() {
    this.dispose()
  };
  b._beforeCreateCss = function(a) {
    var d, b, c = a.css;
    this._isRadio ? (a = g._CONST._radioWidth, d = g._CONST._radioHeight) : (a = g._CONST._checkboxWidth, d = g._CONST._checkboxHeight);
    b = "*overflow:hidden;padding:0;width:" + a + "px;height:" + d + "px;";
    c.push(this.getView()._getCellSelector() + " ." + this._cssClass + "[mid='" + this.mid + "']{" + b + "margin:" + (this.getView()._getRowInnerHeight() - d) / 2 + "px 0 0 " + (this._col.width - this.getView()._getPadding() - a) / 2 + "px}#" + this.mid + "h{" + b + "margin:" + (this.getHeader()._options.height - d) / 2 + "px 0 0 0}")
  };
  b.checkList = function(a, d) {
    if(!d) {
      a = this.getDataMgr().mapList(a).mapped
    }
    for(var b = 0, c = a.length;b < c;b++) {
      this.check(a[b], !0)
    }
  };
  b.setCheckList = function(a, d) {
    this.uncheckAll();
    this.checkList(a, d)
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
    for(var a = this.getAllData(), d = a.length, b = this.getIdKey(), c = this._map, e = 0;e < d;e++) {
      c[a[e][b]] = a[e]
    }
    this._count = d
  };
  b.uncheckAll = function() {
    this._hasMaster && f._uncheck(this._master);
    f._uncheck(this.getCheckboxes());
    this._map = {};
    this._count = 0
  };
  b.toggleCheck = function(a, d) {
    d || (a = this.getDataMgr().map(a));
    this.isChecked(a, !0) && !this._isRadio ? this.uncheck(a, !0) : this.check(a, !0)
  };
  b.toggleDisable = function(a, d) {
    d || (a = this.getDataMgr().map(a));
    this.isDisabled(a, !0) ? this.enable(a, !0) : this.disable(a, !0)
  };
  b.toggleById = function(a) {
    this.toggleCheck(this.getDataMgr().getById(a), !0)
  };
  b.check = function(a, d) {
    d || (a = this.getDataMgr().map(a));
    this._add(a) && (f._check(this.getCheckbox(a)), this._updateMaster(), this.triggerGridEvent("onCheckChange", [a, !0]))
  };
  b.uncheck = function(a, d) {
    d || (a = this.getDataMgr().map(a));
    this._remove(a) && (f._uncheck(this.getCheckbox(a)), this._hasMaster && f._uncheck(this._master), this.triggerGridEvent("onCheckChange", [a, !1]))
  };
  b.disable = function(a, d) {
    var b = this.getDataMgr();
    d || (a = b.map(a));
    var b = b.getId(a), c = this.disabledmap;
    c.hasOwnProperty(b) || (c[b] = a, f.disableNode(this.getCheckbox(a)), this.triggerGridEvent("onDisableCheck", [a]))
  };
  b.enable = function(a, d) {
    var b = this.getDataMgr();
    d || (a = b.map(a));
    var b = b.getId(a), c = this.disabledmap;
    c.hasOwnProperty(b) && (delete c[b], f.enableNode(this.getCheckbox(a)), this.triggerGridEvent("onEnableCheck", [a]))
  };
  b._updateMaster = function() {
    this._hasMaster && f._setCheck(this._master, this.isCheckedAll())
  };
  b._add = function(a) {
    var d = a[this.getIdKey()];
    if(this._map.hasOwnProperty(d)) {
      return!1
    }
    if(this._isRadio) {
      this._map = {}, this._count = 0
    }
    this._map[d] = a;
    this._count++;
    return!0
  };
  b._remove = function(a) {
    var a = a[this.getIdKey()], d = this._map;
    if(!d.hasOwnProperty(a)) {
      return!1
    }
    delete d[a];
    this._count--;
    return!0
  };
  b.isChecked = function(a, d) {
    var b = this.getDataMgr();
    d || (a = b.map(a));
    return this._map.hasOwnProperty(b.getId(a))
  };
  b.isDisabled = function(a, d) {
    var b = this.getDataMgr();
    d || (a = b.map(a));
    return this.disabledmap.hasOwnProperty(b.getId(a))
  };
  b.splitChecked = function(a, d) {
    if(!d) {
      a = this.getDataMgr().mapList(a).mapped
    }
    for(var b = [], c = [], e = 0, f = a.length, g = this.getIdKey(), l, n = this._map;e < f;e++) {
      n.hasOwnProperty((l = a[e])[g]) ? b.push(l) : c.push(l)
    }
    return{checked:b, unchecked:c}
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
    for(var d = a.length, b = [], c = 0, e = this.getColMgr().getIdxByKey(this._key);c < d;c++) {
      b.push(a[c].childNodes[e].childNodes[0])
    }
    return b
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
    for(var d = 0, b = a.length;d < b;d++) {
      this.uncheck(a[d], !0), this.enable(a[d], !0)
    }
  };
  b._onIdChange = function(a, d, b) {
    var c = this._map, e = this.disabledmap;
    c.hasOwnProperty(d) && (delete c[d], c[b] = a);
    e.hasOwnProperty(d) && (delete e[d], e[b] = a)
  };
  b._onIdListChange = function(a, d, b) {
    for(var c = 0, e = a.length, f = this._map, g = this.disabledmap, l, n;c < e;c++) {
      l = a[c], n = d[c], f.hasOwnProperty(n) && (delete f[n], f[l[b]] = l), g.hasOwnProperty(n) && (delete g[n], g[l[b]] = l)
    }
  };
  b._keydownColSel = function(a, d, b) {
    a.preventDefault();
    if(d && b) {
      var a = this.isChecked(b.getDatarow(), !0), c, b = this.getDataList();
      if(this._isRadio) {
        for(c in d) {
          if(d.hasOwnProperty(c) && c !== "length") {
            this.check(b[c], !0);
            break
          }
        }
      }else {
        for(c in d) {
          d.hasOwnProperty(c) && c !== "length" && (a ? this.uncheck(b[c], !0) : this.check(b[c], !0))
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
  b._onRenderCell = function(a, d, b, c, e) {
    e.push("<input tabIndex='-1' onclick=\"JGM.m.CheckManager." + this.mid + ".toggleById('" + b[this.getIdKey()] + "')\" type='" + (this._isRadio ? "radio" : "checkbox") + "' class='" + this._cssClass + "' mid='" + this.mid + "'");
    this._name && e.push(" name='" + this._name + "'");
    this.isChecked(b, !0) && e.push(" checked='checked'");
    (this._disabled || this.isDisabled(b, !0)) && e.push(" disabled='disabled'");
    e.push("/>")
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
  f._setCheck = function(a, d) {
    d ? f._check(a) : f._uncheck(a)
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
    var a = this.key, d;
    d = {onAfterFilter:this._onAfterFilter, onCreateCss:this._onCreateCss, onDestroy:this._destroy, onAfterSetDatalist:this._onAfterSetDatalist, onAddDatarow:this._onAddDatarow, onAddDatalist:this._onAddDatalist, onUpdateDatarow:this._onUpdateDatarow, onUpdateDatalist:this._onUpdateDatalist, onRemoveDatarow:this._onRemoveDatarow, onRemoveDatalist:this._onRemoveDatalist, onRenderHeadersComplete:this._getMaster};
    d["onRenderHeader_" + a + "_prepend"] = this._onRenderHeader;
    d["clickHeaderValid_" + a] = this._clickHeaderValid;
    d["onRenderCell_" + a + "_prepend"] = this._onRenderCell;
    d["dblclickCanvas_" + a] = this._dblclickCanvas;
    d["keydownColSel_" + a + "_" + e.keyMapKeydown.space] = this._keydownColSel;
    if(e.isNotNull(this.checkMgr)) {
      d.onCheckChange = this._onCheckChange
    }
    this.grid.event.bind(d, this)
  };
  b._destroy = function() {
    g._destroy(this, {name:"Collapser", path:"collapser", module:"tree", $:"master", property:"checkMgr", map:"options"})
  };
  b._onCreateCss = function() {
    var a = "#" + this.grid.mid + " .", d = this._options, b = a + this.grid.view._options.classRow + " .", c = a + d.classCollapser, f = c + "." + d.classExpanded, h = c + "." + d.classCollapsed, g = this.grid.view._getRowInnerHeight(), l = [], n = this.grid.header;
    l.push(a + d.classIndent + "{height:" + g + "px;float:left;}");
    l.push(c + "{width:" + d.width + "px;float:left;padding:0 " + d.padding + "px}");
    l.push(b + d.classCollapser + "{height:" + g + "px}");
    l.push(f + "{background:url(" + d.urlExpanded + ") no-repeat center transparent}");
    l.push(f + ":hover{background:url(" + d.urlExpandedHover + ") no-repeat center transparent}");
    l.push(h + "{background:url(" + d.urlCollapsed + ") no-repeat center transparent}");
    l.push(h + ":hover{background:url(" + d.urlCollapsedHover + ") no-repeat center transparent}");
    e.isNotNull(n) && l.push(a + n._options.classColHeader + " ." + d.classCollapser + "{height:" + n._options.height + "px}");
    return l.join("")
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
    for(var d = 0, b = a.length, c = this._tree, f = c.root, h = this._options.beginCollapsed, g = this.key, l = this.grid.view, n = this.grid.dataMgr, m, p = [], o;d < b;d++) {
      m = c.createNode(a[d]), m._collapsed = h, e.isNotNull(m.parent) && m.parent.children.length === 1 && p.push(m.parent.data)
    }
    if(l !== void 0) {
      d = 0;
      for(b = p.length;d < b;d++) {
        l.rerenderCellByIdAndKey(n.getId(p[d]), g)
      }
    }
    f.traverseChildren({fn:function(a) {
      o = this.parent;
      e.isNotNull(o) && (o === f || o._shown && !o._collapsed) ? this._shown = !0 : (a.propagate = !1, this.traverse({fn:function() {
        this._shown = !1
      }}))
    }});
    this.grid.event.trigger("onCollapserTreeChange")
  };
  b._onUpdateDatarow = function(a, d, b) {
    var c = this._tree, f = c._options.nodeKey, h = c._options.parentKey, g;
    d.hasOwnProperty(f) && (g = c.getNodeByNodeId(b[f]), c.changeNodeId(g, b[f], d[f]), this.grid.event.trigger("onCollapserTreeChange"));
    d.hasOwnProperty(h) && (e.isNull(g) && (g = c.getNode(a)), c.changeParentId(g, b[h], d[h]), this.grid.event.trigger("onCollapserTreeChange"))
  };
  b._onUpdateDatalist = function(a, d, b) {
    for(var d = this._tree, c = d._options.nodeKey, f = d._options.parentKey, h, g, l, n = [], m = [], p = 0, o = a.length;p < o;p++) {
      h = b[p], g = a[p], l = void 0, h.hasOwnProperty(c) && (e.isNull(l) && (l = d.getNodeByNodeId(h[c])), n.push({node:l, before:h[c], newId:g[c]})), h.hasOwnProperty(f) && (e.isNull(l) && (l = d.getNode(g)), m.push({node:l, before:h[f], newId:g[f]}))
    }
    a = n.length;
    b = m.length;
    if(a + b !== 0) {
      if(a + b > 10) {
        d.reattach()
      }else {
        for(p = 0;p < a;p++) {
          c = n[p], d.changeNodeId(c.node, c.before, c.newId)
        }
        for(p = 0;p < b;p++) {
          c = m[p], d.changeParentId(c.node, c.before, c.newId)
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
    for(var d = 0, b = a.length, c = this._tree;d < b;d++) {
      c.destroyNodeByData(a[d])
    }
    this.grid.event.trigger("onCollapserTreeChange")
  };
  b._onAfterFilter = function(a, d) {
    var b = this._tree;
    if(d.length > 0) {
      var c = this.grid.dataMgr, f = a.length, h = c._idToIdx, g = c.idKey, l, n = 0, m = function(b) {
        e.isNotNull(this.parent) ? (l = this.parent.data, e.isNotNull(l) && !c.has(l) && (a.push(l), d.remove(l), h[l[g]] = -1)) : b.stop = !0
      };
      c._reidx();
      for(b.reattach();n < f;n++) {
        b.getNode(a[n]).traverse({up:!0, fn:m})
      }
      b.reattach(a);
      b.sortList(a);
      this.grid.event.trigger("onCollapserTreeChange")
    }else {
      b.reattach(a), this.grid.event.trigger("onCollapserTreeChange"), this._filter(a, d)
    }
  };
  b._filter = function(a, d) {
    a.length = 0;
    this._tree.root.traverseChildren({fn:function() {
      this._shown ? a.push(this.data) : d.push(this.data)
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
  b._dblclickCanvas = function(a, d) {
    e.hasTagAndClass(a.target, "DIV", this._options.classCollapser) || this.toggleCollapse(this._tree.getNode(d.getDatarow()))
  };
  b._keydownColSel = function(a, d, b) {
    a.preventDefault();
    if(e.isNotNullAnd(d, b)) {
      var a = this._tree, b = a.getNode(b.getDatarow())._collapsed, c = this.grid.dataMgr.datalist, f, h;
      for(h in d) {
        d.hasOwnProperty(h) && h !== "length" && (f = a.getNode(c[h]), b ? this.expand(f) : this.collapse(f))
      }
      this._filterRefresh()
    }
  };
  b._makeTree = function() {
    var a = this._tree, d, b;
    a.__init();
    b = a.map;
    a = a.root;
    if(this._options.beginCollapsed) {
      for(d in b) {
        if(b.hasOwnProperty(d)) {
          b[d]._collapsed = !0, b[d]._shown = !1
        }
      }
      b = a.children;
      var c = b.length;
      for(d = 0;d < c;d++) {
        b[d]._shown = !0
      }
      a._collapsed = !0
    }else {
      for(d in b) {
        if(b.hasOwnProperty(d)) {
          b[d]._collapsed = !1, b[d]._shown = !0
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
  b._onRenderCell = function(a, d, b, c, f) {
    a = this._tree.getNode(b);
    if(e.isNull(a)) {
      return null
    }
    b = this.grid.dataMgr.getId(b);
    d = this._options;
    f.push("<div class='" + d.classIndent + "' style='width:" + d.indentSize * a.getLevel() + "px;'></div><div ");
    a.isLeaf() ? f.push("class='" + d.classCollapser) : (f.push('onmousedown="JGM.m.Collapser.' + this.mid + ".toggleById('" + b + "');\" class='" + d.classCollapser), a._collapsed ? f.push(" " + d.classCollapsed) : f.push(" " + d.classExpanded));
    f.push("'></div>")
  };
  b.getLevel = function(a) {
    a = this._tree.getNode(a);
    return e.isNull(a) ? null : a.getLevel()
  };
  b.collapse = function(a, d) {
    if(!(a._collapsed === !0 || a.isLeaf())) {
      a._collapsed = !0;
      a.traverseChildren({fn:function(a) {
        this._shown = !1;
        this._collapsed && (a.propagate = !1)
      }});
      var b = this._getCollapser(a.data);
      b.length > 0 && this._setClass(b, !0);
      if(!d && a.parent === this._tree.root && this._tree.root._collapsed === !1) {
        this._setClass(this._master, this._tree.root._collapsed = !0)
      }
    }
  };
  b.expand = function(a, d) {
    if(!(a._collapsed === !1 || a.isLeaf())) {
      a._collapsed = !1;
      a.traverseChildren({fn:function(a) {
        this._shown = !0;
        this._collapsed && (a.propagate = !1)
      }});
      var b = this._getCollapser(a.data), c = this._tree;
      b.length > 0 && this._setClass(b, !1);
      if(!d && a.parent === c.root) {
        for(var b = c.root.children, e = b.length, f = 0;f < e;f++) {
          if(b[f]._collapsed) {
            return
          }
        }
        this._setClass(this._master, c.root._collapsed = !1)
      }
    }
  };
  b._setClass = function(a, d) {
    if(!e.isNull(a)) {
      var b = this._options;
      d ? a.addClass(b.classCollapsed).removeClass(b.classExpanded) : a.addClass(b.classExpanded).removeClass(b.classCollapsed)
    }
  };
  b.toggleMaster = function() {
    var a = this._tree.root, d = a.children, b = d.length, c = 0;
    if(a._collapsed) {
      for(;c < b;c++) {
        this.expand(d[c], !0)
      }
      this._setClass(this._master, a._collapsed = !1)
    }else {
      for(;c < b;c++) {
        this.collapse(d[c], !0)
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
  b._onCheckChange = function(a, d) {
    var b = this._tree.getNode(a), c = this.checkMgr, f = [], h;
    d ? (b.traverseChildren({fn:function(a) {
      c.isChecked(this.data) ? a.propagate = !1 : (c._add(this.data), e.isNotNull(h = c.getCheckbox(this.data)) && f.push(h))
    }}), b.traverseParent({up:!0, fn:function(a) {
      e.isNull(this.data) || c.isChecked(this.data) ? a.stop = !0 : (c._add(this.data), e.isNotNull(h = c.getCheckbox(this.data)) && f.push(h))
    }}), g.CheckManager._check($(f)), c._updateMaster()) : (b.traverseChildren({fn:function(a) {
      c.isChecked(this.data) ? (c._remove(this.data), e.isNotNull(h = c.getCheckbox(this.data)) && f.push(h)) : a.propagate = !1
    }}), b.traverseParent({up:!0, fn:function(a) {
      if(e.isNull(this.data) || !c.isChecked(this.data)) {
        a.stop = !0
      }else {
        for(var d = 0, b = this.children, i = b.length;d < i;d++) {
          if(c.isChecked(b[d].data)) {
            a.stop = !0;
            return
          }
        }
        c._remove(this.data);
        e.isNotNull(h = c.getCheckbox(this.data)) && f.push(h)
      }
    }}), g.CheckManager._uncheck($(f)))
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
jx.grid.EditManager = {};
jx.grid.Editor = {};
(function() {
  function f(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    this.grid.editMgr = this;
    this._options = e._extend({classEdit:"jgrid-edit", classCellEditable:"jgrid-editable", classCellNotEditable:"jgrid-notEditable", editableBgEnabled:!1, notEditableBgEnabled:!1, editableBg:"#FFF", notEditableBg:"#F6F6F6", deleteEnabled:!1, editIconEnabled:!0, urlEditIcon:this.grid._options.imageUrl + "editable-small.png", classEditIcon:"edit-icon", editIconWidth:12, editIconPadding:3, basicBackground:"#FFF9D7", classSuccess:"edit-success", successBackground:"#cdf7b6", classFailure:"edit-failure", 
    failureBackground:"#ffcec5"}, a.options);
    this._beginEditKeys = c.which(["number", "alphabet", "del", "backspace"]);
    this.__init()
  }
  function g(a) {
    for(var d in a) {
      a.hasOwnProperty(d) && (this[d] = a[d])
    }
  }
  var e = goog.getObjectByName("jx.grid"), c = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.EditManager", f);
  goog.exportSymbol("jx.grid.Editor", g);
  f.getInstance = function(a) {
    return new f(a)
  };
  var b = f.prototype;
  b.__init = function() {
    this.bindEvents()
  };
  b.bindEvents = function() {
    var a = {onGetColCellClass:this._onGetColCellClass, keydownCanvas:this._keydownCanvas, onDestroy:this._destroy, dblclickCanvas:this._dblclickCanvas, onCreateDynamicCss:this.onCreateDynamicCss, "onBeforeNavigate onBeforeRefresh onBeforeSelect":this.commit, onBeforeFocusCanvas:this.notActive};
    c.isNull(this.grid.selMgr) ? a.onCreateCss = this._onBeforeCreateSelCss : a.onBeforeCreateSelCss = this._onBeforeCreateSelCss;
    if(this._options.deleteEnabled) {
      a["keydownSel_" + c.keyMapKeydown.del] = this._deleteContents
    }
    if(this._options.editIconEnabled) {
      for(var d = this.grid.colDefMgr.get(), b = d.length, e = 0;e < b;e++) {
        if(c.isNotNull(d[e].editor)) {
          a["onRenderHeader_" + d[e].key + "_prepend"] = this._onRenderHeader
        }
      }
    }
    this.grid.event.bind(a, this)
  };
  b._destroy = function() {
    this._deleteEditor();
    e._destroy(this, {name:"EditManager", path:"editMgr", map:"beginEditKeys _options"})
  };
  b._onBeforeCreateSelCss = function() {
    var a = "#" + this.grid.mid + " .", d = this._options, b = [], c = this.grid.view._getRowInnerHeight();
    b.push(this.grid.view._getCellSelector() + "." + d.classEdit + "{background:" + d.basicBackground + "}");
    b.push(a + d.classEdit + " input{position:absolute;z-index:10;top:0;padding:0;border:0;margin:0;background:" + d.basicBackground + ";height:" + c + "px;line-height:" + c + "px}");
    d.editableBgEnabled && b.push(a + d.classCellEditable + "{background:" + d.editableBg + "}");
    d.notEditableBgEnabled && b.push(a + d.classCellNotEditable + "{background:" + d.notEditableBg + "}");
    d.editIconEnabled && b.push(a + d.classEditIcon + "{float:left;position:absolute;left:0;top:0;padding:0 " + d.editIconPadding + "px;width:" + d.editIconWidth + "px;height:" + c + "px;background:url(" + d.urlEditIcon + ") no-repeat center transparent}");
    b.push(a + d.classSuccess + "{background:" + d.successBackground + "}");
    b.push(a + d.classFailure + "{background:" + d.failureBackground + "}");
    return b.join("")
  };
  b.onCreateDynamicCss = function() {
    for(var a = this.grid.view._getCellSelector(), d = this.grid.view._getPadding(), b = this.grid.colDefMgr.get(), e = 0, f = "";e < b.length;e++) {
      c.isNotNull(b[e].editor) && (f += a + ".k_" + b[e].key + " .basic-editor{width:" + (b[e].width - 2 * d) + "px}")
    }
    return f
  };
  b._onRenderHeader = function(a) {
    a.push("<span class='" + this._options.classEditIcon + "'></span>")
  };
  b._onRenderCell = function(a, d, b, c, e) {
    this.grid.dataMgr.isReal(b) && e.push("<span class='" + this._options.classEditIcon + "' title='클릭하여 에디팅을 시작합니다' onclick='JGM.m.EditManager." + this.mid + '.beginEdit("' + b[this.grid.dataMgr.idKey] + '","' + c.key + "\")'></span>")
  };
  b.cancelMouseEvent = function(a) {
    return!c.hasTagAndClass(a.target, "DIV", this._options.classEditIcon)
  };
  b.beginEdit = function(a, d) {
    this.begin(e.create("Cell", {grid:this.grid, datarow:this.grid.dataMgr.getById(a), colDef:this.grid.colDefMgr.getByKey(d)}))
  };
  b._dblclickCanvas = function(a, d) {
    d.isEdited() || this.begin(d)
  };
  b._keydownCanvas = function(a) {
    this.active() ? a.which === c.keyMapKeydown.esc && this.cancel() : !a.ctrlKey && !a.altKey && c.isNotNull(this.grid.selMgr) && (a.which === c.keyMapKeydown.del && this._options.deleteEnabled ? this._deleteContent(this.grid.selMgr.getCell()) : this._beginEditKeys[a.which] ? this.begin(this.grid.selMgr.getCell()) : a.which === c.keyMapKeydown.f2 && (a.preventDefault(), this.begin(this.grid.selMgr.getCell())))
  };
  b.active = function() {
    return c.isNotNull(this.editor)
  };
  b.notActive = function() {
    return c.isNull(this.editor)
  };
  b._isEdited = function(a) {
    return this.active() && this.editor.cell.equals(a)
  };
  b._onGetColCellClass = function(a) {
    return c.isNotNull(a.editor) ? this._options.classCellEditable : this._options.classCellNotEditable
  };
  jx.grid.Cell.prototype.isEdited = function() {
    return this.grid.editMgr._isEdited(this)
  };
  jx.grid.Cell.prototype.setValue = function(a) {
    var d = this.getDatarow(), b = this.getKey(), e;
    c.isNotNullAnd(d, b) && (e = this.grid.dataMgr.updateByKey(d, b, a, {noSort:!0, noFilter:!0, noRerender:!0}), e === !0 && this.grid.view.rerenderRow(d));
    return e
  };
  b.isEditable = function(a) {
    return c.isNotNull(a) && c.isNotNull(a.getColDef().editor) && this.grid.dataMgr.isReal(a.getDatarow())
  };
  b.begin = function(a) {
    this.active() && this.commit();
    if(this.isEditable(a)) {
      this.editor = a.getColDef().editor;
      this.editor.cell = a;
      this.editor.grid = this.grid;
      var d = a.getNode();
      this.editor.before = d.innerHTML;
      d.innerHTML = this.editor.edit(a.getValue());
      a.get$().addClass(this._options.classEdit);
      this.editor.focus()
    }
  };
  b.cancel = function() {
    if(this.active()) {
      var a = this.editor.cell;
      a.getNode().innerHTML = this.editor.before;
      this._deleteEditor();
      a.get$().removeClass(this._options.classEdit);
      this.grid.view.focus()
    }
  };
  b._deleteEditor = function() {
    c.isNotNull(this.editor) && (delete this.editor.grid, delete this.editor.cell, delete this.editor.before, delete this.editor)
  };
  b.commit = function() {
    if(!this.beingCommitted && this.active()) {
      this.beingCommitted = !0;
      var a = this.editor.cell, d = this.editor.value(a.getNode()), b;
      if(d == a.getValue()) {
        this.cancel()
      }else {
        var d = a.setValue(d), c;
        b = a.get$();
        d instanceof Error ? (this.cancel(), c = this._options.classFailure) : (this._deleteEditor(), this.grid.view.focus(), c = this._options.classSuccess, this.grid.printMessage("Successfully Updated."));
        b.addClass(c);
        setTimeout(function() {
          b.removeClass(c)
        }, 1E3)
      }
      a.get$().removeClass(this._options.classEdit);
      this.beingCommitted = !1
    }
  };
  b._deleteContent = function(a) {
    if(!this.active() && this.isEditable(a)) {
      var d = a.getColDef();
      a.getValue() !== d.defaultValue && a.setValue(d.defaultValue)
    }
  };
  b._deleteContents = function(a, d, b) {
    if(!this.active()) {
      var a = {}, d = {}, e = [], f, h, g, l, n, m, p;
      a:for(f in b) {
        if(b.hasOwnProperty(f) && f !== "length") {
          for(p in l = g = h = void 0, m = b[f], m) {
            if(m.hasOwnProperty(p) && !(p === "length" || d.hasOwnProperty(p))) {
              n = m[p].cell;
              if(c.isNull(h) && (h = n.getColDef(), g = h.defaultValue, l = h.key, c.isNull(h.editor))) {
                continue a
              }
              n = c.isNotNull(a[p]) ? a[p].datarow : n.getDatarow();
              this.grid.dataMgr.isReal(n) ? g !== n[l] && (c.isNull(a[p]) && (a[p] = {datarow:n, change:{}}, e.push(a[p])), a[p].change[l] = g) : d[p] = !0
            }
          }
        }
      }
      e.length !== 0 && this.grid.dataMgr.updateList(e)
    }
  };
  g.getInstance = function(a) {
    return new g(a)
  };
  b = g.prototype;
  b.edit = function(a) {
    return"<input type='text' class='basic-editor' value='" + c.ifNull(a, "") + "' style='position:relative'/>"
  };
  b.focus = function() {
    var a = this.cell.getNode().childNodes[0];
    if(c.isFunction(a.setActive)) {
      try {
        a.setActive()
      }catch(d) {
      }
    }
    a.focus();
    document.activeElement !== a && this.cell.get$().children(":eq(0)").focus()
  };
  b.value = function(a) {
    return a.childNodes[0].value
  };
  b.path = function() {
    return"JGM.m.Editor." + this.mid
  };
  g.numberKeys = c.which(["number", "del", "backspace"]);
  g.isNumberKey = function(a) {
    return this.numberKeys[a] ? !0 : !1
  };
  g.numberEdit = function(a) {
    a = a.getValue();
    return"<input type='text' class='basic-editor' onkeydown='if (!jx.grid.Editor.isNumberKey(event.which)) return false;' value='" + c.ifNull(a, "") + "'/>"
  };
  g.floatKeys = c.which(["number", ".", "del", "backspace"]);
  g.isFloatKey = function(a) {
    return this.floatKeys[a] ? !0 : !1
  };
  g.floatEdit = function(a) {
    a = a.getValue();
    return"<input type='text' class='basic-editor' onkeydown='if (!jx.grid.Editor.isFloatKey(event.which)) return false;' value='" + c.ifNull(a, "") + "'/>"
  };
  g.alphabetKeys = c.which(["alphabet", "del", "backspace", "space"]);
  g.isAlphabet = function(a) {
    return this.alphabetKeys[a] ? !0 : !1
  };
  g.alphabetEdit = function(a) {
    a = a.getValue();
    return"<input type='text' class='basic-editor' onkeydown='if (!jx.grid.Editor.isAlphabet(event.which)) return false;' value='" + c.ifNull(a, "") + "'/>"
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
    var b = this.grid, a = b.dataMgr, d = this._options;
    this.bindEvents();
    b = this.collapser = g.create("Collapser", {grid:b, options:d.Collapser});
    delete d.Collapser;
    this._processData(a.all);
    b.__init();
    a.refresh()
  };
  c.bindEvents = function() {
    var b;
    b = {onBeforeSetDatalist:this._removeAll, "onAfterSetDatalist onAddDatalist":this._processData, onAddDatarow:this._onAddDatarow, onUpdateDatarow:this._onUpdateDatarow, onUpdateDatalist:this._onUpdateDatalist, onRemoveDatarow:this._onRemoveDatarow, onRemoveDatalist:this._onRemoveDatalist, onDestroy:this._destroy};
    if(this._options.sumColKeys.length !== 0) {
      var a = this.mid, d = this.grid.dataMgr._consts._notReal, c = 0, e, f = this._options.sumColKeys, h = this._options.prefix, g = f.length;
      for(e = function(b, c, e, i, f) {
        e[d] === a && f.push(h)
      };c < g;c++) {
        b["onRenderCell_" + f[c] + "_prepend"] = e
      }
      b.onCollapserTreeChange = this._onCollapserTreeChange
    }
    this.grid.event.bind(b, this)
  };
  c._destroy = function() {
    g._destroy(this, {name:"ColumnGroup", path:"colGroup", property:"collapser", map:"parentMap _options"})
  };
  c._processData = function(b) {
    for(var a = b.length, d = this._options.key, c = this._options.padColKeys, f = this.grid.dataMgr, g = f._consts._notReal, h = f.idKey, q = this.collapser, l = q._tree._options.nodeKey, n = q._tree._options.parentKey, m = [], p = 0;p < a;p++) {
      this._addData(b[p], d, h, g, l, n, c, m)
    }
    m.length !== 0 && (f.all.pushList(m), f.makeCompositeKeyList(m, !0), f.addListToIdMap(m), e.isNotNull(q) && q._onAddDatalist(m));
    return m
  };
  c._addData = function(b, a, d, c, e, f, h, g) {
    var l = b[a], n = this._parentMap;
    n.hasOwnProperty(l) || (a = this._makeParent(b, a, d, l, c, e, h), g.push(a), n[l] = a);
    b[e] = b[d];
    b[f] = this.mid + l
  };
  c._makeParent = function(b, a, d, c, e, f, h) {
    var g = {}, l = 0, n = h.length;
    g[e] = this.mid;
    g[f] = this.mid + c;
    g[a] = c;
    for(g[d] = (this.grid.colDefMgr.getByKey(a).name || a) + ": " + c;l < n;l++) {
      g[h[l]] = b[h[l]]
    }
    return g
  };
  c._isParent = function(b) {
    return b[this.grid.dataMgr._consts._notReal] === this.mid
  };
  c._removeAll = function() {
    this._parentMap = {}
  };
  c._onAddDatarow = function(b) {
    var a = [], d = this._options, c = this.grid.dataMgr, e = this.collapser, f = e._tree._options;
    this._addData(b, d.key, c.idKey, c._consts._notReal, f.nodeKey, f.parentKey, d.padColKeys, a);
    a.length !== 0 && (b = a[0], c.all.push(b), c.makeCompositeKey(b, !0), c.addToIdMap(b), e._onAddDatarow(b))
  };
  c._onUpdateDatarow = function(b, a, d) {
    if(a.hasOwnProperty(this._options.key)) {
      var c = this._options.key, a = a[c], d = d[c], e = this.mid, c = this.collapser, f = c._tree, h = f._options.parentKey, g = {}, l = {}, n = this._parentMap;
      n.hasOwnProperty(a) || this._onAddDatarow(b);
      g[h] = e + a;
      l[h] = e + d;
      c._onUpdateDatarow(b, g, l);
      b = f.getNode(n[d]);
      b.children.length === 0 && (this.grid.dataMgr.all.remove(b.data), delete n[d], c._onRemoveDatarow(b.data))
    }
  };
  c._onUpdateDatalist = function(b, a, d) {
    var c = this._options.key, e = this.mid, f = this.collapser, h = f._tree, g = h._options.parentKey, l, n = {};
    l = {};
    for(var m = [], p = [], o = [], r = 0, s = b.length;r < s;r++) {
      l = a[r], l.hasOwnProperty(c) && (n = {}, n[g] = e + l[c], m.push(n), l = {}, l[g] = e + d[r][c], p.push(l), o.push(b[r]))
    }
    if(o.length !== 0) {
      b = this._parentMap;
      a = [];
      this._processData(o);
      f._onUpdateDatalist(o, m, p);
      r = 0;
      for(s = p.length;r < s;r++) {
        m = p[r][g], b.hasOwnProperty(m) && (o = h.getNode(b[m]), o.children.length === 0 && (delete b[m], a.push(o.data)))
      }
      a.length !== 0 && (f._onRemoveDatalist(a), this.grid.dataMgr.all.removeList(a))
    }
  };
  c._onRemoveDatarow = function(b) {
    this._isParent(b) ? delete this._parentMap[b[this._options.key]] : (b = this.collapser._tree.getNode(b).parent, b.children.length === 1 && this.grid.dataMgr.remove(b.data))
  };
  c._onRemoveDatalist = function(b) {
    for(var a = 0, d = b.length;a < d;a++) {
      this._onRemoveDatarow(b[a])
    }
  };
  c._onCollapserTreeChange = function() {
    for(var b = {}, a = this._options.sumColKeys, d = a.length, c = 0, e = this.grid.dataMgr._consts._notReal, f = this.mid, g, q, l;c < d;c++) {
      b[a[c]] = 0
    }
    this.collapser._tree.root.traverseChildren({post:!0, fn:function() {
      g = this.data;
      c = 0;
      if(g[e] === f) {
        for(;c < d;c++) {
          q = a[c], g[q] = b[q], b[q] = 0
        }
      }else {
        if(!g.hasOwnProperty(e)) {
          for(;c < d;c++) {
            if(typeof(l = g[a[c]]) === "string") {
              l = l.toFloat()
            }
            b[a[c]] += isNaN(l) ? 0 : l
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
    var a, d = this.getColumns(), b = d.length, c = 0;
    for(a = {onRenderModules:this._onRenderModules, onAfterRenderModules:this._onAfterRenderModules, mousedown:this._mousedown, mouseup:this._mouseup, dragmove:this._dragmove, onScrollViewportH:this._onScrollViewportH, onScrollViewportV:this._onScrollViewportV, onChangeSorter:this._onChangeSorter, click:this._click, onResizeCol:this._setWidthByKey};c < b;c++) {
      if(d[c].sorter) {
        a["clickHeader_" + d[c].key] = this._sort
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
  b._beforeCreateCss = function(a) {
    var d = "#" + this.grid.mid + " .", b = this._options, c = b.borderThickness + "px " + b.border, e = this.getColumns(), f = e.length, g = 0, l = "." + b.classHeaderMask, n = "." + b.classColHeader, m = b.scrollerLeft, m = b.scrollerLeft, p = b.height + "px", o = b.classColHeaderActive, r = {};
    r[l] = {position:"relative", overflow:"hidden", width:"100%", font:b.font, background:b.background, "border-bottom":c, _append:b.style};
    r["." + b.classHeader] = {position:"relative", overflow:"hidden", "white-space":"nowrap", cursor:"default", left:-m + "px", width:b.scrollerWidth + "px", "line-height":p};
    r[n] = {position:"relative", overflow:"hidden", "float":"left", "text-overflow":"ellipsis", "text-align":"center", height:p, left:m - this.getView().getScrollLeft() + "px", "border-right":c, _append:b.headerStyle};
    r[n + "." + b.classInteractive + ":hover, " + d + o] = {background:b.backgroundHover};
    r["." + o] = {"border-left":c};
    r[n + "." + b.classColHeaderPlaceholder] = {background:b.backgroundPlaceholder + "!important"};
    r["." + b.classSort] = {position:"absolute", height:p, right:b.sortRight + "px", width:b.sortWidth + "px", background:"url(" + b.sortBackground + ") no-repeat center transparent"};
    r["." + b.classSortAsc] = {background:"url(" + b.sortBackgroundAsc + ") no-repeat center transparent"};
    r["." + b.classSortDesc] = {background:"url(" + b.sortBackgroundDesc + ") no-repeat center transparent"};
    r["." + b.classResizeHandle] = {"z-index":10, background:b.resizeHandleBackground, cursor:"e-resize", position:"absolute", height:p, width:b.resizeHandleWidth + "px"};
    for(r["." + b.classResizeGuide] = {"z-index":10, position:"absolute", background:b.resizeBackground, width:b.resizeGuideWidth + "px"};g < f;g++) {
      e[g].headerStyle && (r[n + "#" + this.mid + "h" + e[g].key] = {_append:e[g].headerStyle})
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
    for(var a = this.getColumns(), d = a.length, b = 0, c, e = [];b < d;b++) {
      (c = a[b]).hidden || this._render(e, c, b)
    }
    this._head[0].innerHTML = e.join("");
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
  b._render = function(a, d, b) {
    var c = this._options, e = d.key, f = d.noName ? "" : d.name || e, g = this._widthPlus();
    a.push("<div id='" + this.mid + "h" + e + "' class='" + c.classColHeader + " " + (c.reorderEnabled || d.sorter ? " " + c.classInteractive : "") + "' " + (d.noTitle ? "" : "title='" + (d.title || f) + "' ") + "style='width:" + (this.getView()._getColOuterWidth(b) - g) + "px;' colKey='" + e + "'>");
    this.triggerGridEvent("onRenderHeader_" + e + "_prepend", [a]);
    a.push(f);
    this.triggerGridEvent("onRenderHeader_" + e + "_append", [a]);
    d.sorter && a.push("<span class='" + c.classSort + "'></span>");
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
    var d = document.getElementById(this.mid + "h" + a);
    return!d ? $([]) : this._map[a] = $(d)
  };
  b._updateIndicator = function(a, d) {
    var b = this.get(a), c = this._options, e = b.find("." + c.classSort), f = c.classColHeaderSorted, g = c.classSortAsc, c = c.classSortDesc;
    d === 0 ? (b.removeClass(f), e.removeClass(g + " " + c)) : (b.addClass(f), d === 1 ? e.addClass(g).removeClass(c) : d === 2 && e.addClass(c).removeClass(g))
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
      for(var d = $(e).sortable("toArray"), g = d.length, h, o = 0;o < g;o++) {
        h = d[o], d[o] = h === "" ? b.item.attr("id").substring(f) : h.substring(f)
      }
      c.sortByKey(d)
    };
    e.sortable({items:"." + b.classColHeader, axis:"x", forcePlaceholderSize:!0, placeholder:b.classColHeaderPlaceholder + " " + b.classColHeader, tolerance:"pointer", start:function(b, d) {
      d.item.addClass(a._options.classColHeaderActive)
    }, stop:function(b, d) {
      d.item.removeClass(a._options.classColHeaderActive);
      a._syncResizeHandles()
    }, update:g});
    b.reorderSyncEnabled && e.sortable("option", "change", g)
  };
  b._getDx = function(a, b) {
    var c = a.clientX - this._resizeInitX, f = b.minW, g = e.ifNull(b.maxW, Number.MAX_VALUE), h = this._resizeInitWidth;
    h + c < f && (c = f - h);
    h + c > g && (c = g - h);
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
    for(var a = this.getColumns(), b = a.length, c = this.getView(), e = c.mid, c = c._getColLefts(), f = this._options, g = this._resizeMap, q, l = 0, n = this._resizeHandleOffset = Math.floor(f.scrollerLeft - f.resizeHandleWidth / 2), m = f.classResizeHandle, p = this._head;l < b;l++) {
      if(f = a[l], f.resizable) {
        q = f.key, g[q] = $("<div class='" + m + "' key='" + q + "' ondblclick='JGM.m.ViewportManager." + e + '._autoColWidth("' + q + "\")' style='left:" + (n + c[l + 1]) + "px' title='" + f.name + " 컬럼의 폭을 조절합니다.'>").appendTo(p)
      }
    }
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
    var a = "#" + this.grid.mid + " .", b = this._options, c = a + b.classCell, e = a + b.classRow, f = b.borderThickness + "px " + b.border, g = e + "[" + b.attrRowIdx, l = this.grid.colDefMgr.get(), n = l.length, m = 0, p = [];
    p.push(a + b.classView + "{height:" + this._calHeight() + "px;outline:0;position:relative;white-space:nowrap;overflow:auto;line-height:" + b.rowH + "px;cursor:default;-moz-user-select:none;-webkit-user-select:none;" + b.style + "}");
    p.push(a + b.classView + ":focus{background:" + b.focusBackground + ";outline:" + b.focusOutline + "}");
    p.push(a + b.classCanvas + "{height:" + this._calCanvasHeight() + "px;" + b.canvasStyle + ";background:#fff}");
    p.push(e + "{position:absolute;" + b.rowStyle + "}");
    p.push(c + "{height:" + b.rowH + "px;border-bottom:" + f + ";display:inline-block;white-space:nowrap;overflow:hidden;float:left;text-overflow:ellipsis;padding-left:" + b.padding + "px;border-right:" + f + ";" + b.cellStyle + "}");
    for(b.evenOddRows && p.push(g + "$='1']," + g + "$='3']," + g + "$='5']," + g + "$='7']," + g + "$='9']{background:" + b.oddRowsBackground + "}");m < n;m++) {
      p.push(c + ".k_" + l[m].key + "{" + l[m].style + "}")
    }
    return p.join("")
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
    for(var e = a.length, f = 0, g = this._lockedRows, l = this._renderedRows, n, m;f < e;f++) {
      n = b[f], m = a[f][c], g.hasOwnProperty(n) && (g[m] = g[n], delete g[n]), l.hasOwnProperty(n) && ((l[m] = l[n]).setAttribute("i", m), delete l[n])
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
      for(var q = a.start, a = a.end, l = this.grid.dataMgr;q <= a;q++) {
        if(!f.hasOwnProperty(g = l.getIdByIdx(q)) && e.hasOwnProperty(g)) {
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
      var q = a.start, a = a.end, l = this.grid.dataMgr, n;
      for(g in e) {
        if(e.hasOwnProperty(g) && !(f.hasOwnProperty(g) || q <= (n = l.getIdxById(g)) && n <= a)) {
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
      var b = this._renderedRows, e = this._canvas[0], f = this.grid.dataMgr, g = f.getIdxById(a), f = f.getById(a), q = this.grid.colDefMgr.get(), l = this._getColCellClasses(q), n = this._getRowOuterHeight(), m = [];
      b.hasOwnProperty(a) && (e.removeChild(b[a]), this.grid.event.trigger("onBeforeRenderRows", [[g]]), this._renderRow(m, g, f, q, l, n), b[a] = c.appendHTML(e, m.join(""))[0], this.grid.event.trigger("onAppendRows", [[g]]))
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
      var e = this.grid.dataMgr, f = this.grid.colDefMgr, g = e.getById(a), l = f.getByKey(b), e = e.getIdxById(a), f = f.getIdxByKey(b);
      c.innerHTML = this._renderCell([], e, f, g, l).join("")
    }
  };
  a.rerenderCellByIdx = function(a, b) {
    return this.rerenderCellByIdAndKey(this.grid.dataMgr.getIdByIdx(a), this.grid.colDefMgr.getKeyByIdx(b))
  };
  a._appendRows = function(a) {
    this.grid.event.trigger("onBeforeRenderRows", [a]);
    for(var b = [], e = a.start, f = a.end, g = this.grid.dataMgr.datalist, q = this.grid.dataMgr.idKey, l = this.grid.colDefMgr.get(), n = this._getColCellClasses(l), m = this._renderedRows, p = this._getRowOuterHeight(), o = this._canvas[0], r, s, t = [];e <= f;e++) {
      if(r = g[e], !m.hasOwnProperty(s = r[q])) {
        this._renderRow(b, e, r, l, n, p), t.push(s)
      }
    }
    b = c.appendHTML(o, b.join(""));
    e = 0;
    for(f = t.length;e < f;e++) {
      m[t[e]] = b[e]
    }
    this.grid.event.trigger("onAppendRows", [a])
  };
  a._removeAndRenderRows = function(a) {
    c.isNull(a) && (a = this._getRenderRange());
    this.grid.event.trigger("onBeforeRenderRows", [a]);
    for(var b = [], e = a.start, f = a.end, g = this.grid.dataMgr, q = g.datalist, l = g.idKey, n = this.grid.colDefMgr.get(), m = this._getColCellClasses(n), g = this._canvas[0], p = this._getRowOuterHeight(), o, r = [], s = {};e <= f;e++) {
      o = q[e], this._renderRow(b, e, o, n, m, p), r.push(o[l])
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
    for(var g = 0, l = e.length;g < l;g++) {
      a.push("<div class='" + f[g] + " " + this.grid.event.trigger("onGetCellClass", [b, g, c, e[g]]).join(" ") + "'>"), this._renderCell(a, b, g, c, e[g]), a.push("</div>")
    }
    a.push("</div>");
    return a
  };
  a._renderCell = function(a, b, c, e, f) {
    this.grid.event.trigger("onRenderCell_" + f.key + "_prepend", [b, c, e, f, a]);
    var q = e[f.key];
    if(typeof q !== "string" || q.substring(0, 3) !== "J@H") {
      f.rendererInput ? a.push(f.renderer(g.create("Cell", {grid:this.grid, row:b, col:c, datarow:e, colDef:f}))) : a.push(f.renderer(q, b, c, e, f, this))
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
    var e = this._getClosestCell(a.target), f, h, q;
    if(e === void 0) {
      return!1
    }
    b.cell = g.create("Cell", {grid:this.grid, node:e});
    e = c.split(b.event);
    q = e.length;
    f = [];
    for(h = 0;h < q;h++) {
      f.push(e[h] + "_" + b.cell.getKey()), f.push(e[h])
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
    for(var b = this.grid.dataMgr.getReal(), a = this.grid.colDefMgr.get(), c = a.length, g, j, k, h, q = f._calSum, l = this._sumMap, n, m = 0;m < c;m++) {
      if(g = a[m], j = g.sumRenderer, e.isNotNull(j)) {
        if(k = g.key, g = g.name, h = q(b, k), k = l[k] = this.getNextCell(), n = k[0], e.isFunction(j)) {
          n.innerHTML = j(g, h)
        }else {
          if(e.isString(j)) {
            if(k = j.toLowerCase(), k === "krw" || j === "\\") {
              n.innerHTML = this._sumRenderer(g, e.formatNumber(h))
            }else {
              if(k === "usd" || j === "$") {
                n.innerHTML = this._sumRenderer(g, e.formatNumber(h, 2, "$ "))
              }
            }
          }else {
            n.innerHTML = this._sumRenderer(g, h)
          }
        }
      }
    }
  };
  c._updateSums = function() {
    var b = this.grid.dataMgr.getReal(), a, c = this._sumMap, g = this.grid.colDefMgr, j, k, h, q = f._calSum, l, n, m = this._options.classContent;
    for(a in c) {
      if(c.hasOwnProperty(a)) {
        if(j = g.getByKey(a), k = j.sumRenderer, h = q(b, a), l = c[a], n = l[0], e.isFunction(k)) {
          n.innerHTML = k(j.name, h)
        }else {
          if(e.isString(k)) {
            if(j = k.toLowerCase(), j === "krw" || k === "\\") {
              l.find("span." + m)[0].innerHTML = e.formatNumber(h)
            }else {
              if(j === "usd" || k === "$") {
                l.find("span." + m)[0].innerHTML = e.formatNumber(h, 2, "$ ")
              }
            }
          }else {
            l.find("span." + m)[0].innerHTML = h
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
    var g = "", h = this._last, q = this._range, l = this._rows, n = this._options;
    e.isNotNull(h) && h.getDatarow() === c && h.getColDef() === f && (g += n.classLast);
    n.multiSelectEnabled === !0 && (e.isNotNull(q) && q.getDatarow() === c && q.getColDef() === f && (g += " " + n.classRange), l.hasOwnProperty(a) && l[a].hasOwnProperty(b) && (g += " " + n.classSelection));
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
          var h;
          f = this._rows;
          for(h in f) {
            f.hasOwnProperty(h) && h !== "length" && this.grid.event.trigger("keydownRowSel_" + a.which + " keydownRowSel", [a, f[h], this._last])
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
    var b = a.getRowIdx(), c = a.getColIdx(), e = this._last.getRowIdx(), f = this._last.getColIdx(), g = e < b ? e : b, e = e < b ? b : e, q;
    this._setRange(b, c, a);
    a.getKey() === this._options.rowSelKey ? (q = 0, f = this.grid.colDefMgr.length() - 1) : (q = f < c ? f : c, f = f < c ? c : f);
    this._setSelMap(this._getRangeMap(g, q, e, f, b, c, a));
    return{minRow:g, minCol:q, maxRow:e, maxCol:f}
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
      var h = g.getRowIdx();
      if(a === h && b === g.getColIdx()) {
        return
      }
      a !== h && e.isNotNull(this._last) && h !== this._last.getRowIdx() && this.grid.view.unlockRowById(g.getId());
      g.get$().removeClass(this._options.classRange);
      e.isNull(c) && delete this._range
    }
    if(!e.isNull(c)) {
      (this._range = c).get$().addClass(this._options.classRange), c = this.grid.view, c.lockRowByIdx(a), f || c.scrollToLazy(a, b)
    }
  };
  b._addSelMap = function(a) {
    var b = this._rows, e, f, g, h;
    for(g in a) {
      if(a.hasOwnProperty(g) && (f = a[g], b.hasOwnProperty(g))) {
        for(h in e = b[g], f) {
          f.hasOwnProperty(h) && e.hasOwnProperty(h) && (f[h] instanceof c && (e[h] = f[h]), delete f[h])
        }
      }
    }
    this.addOrRemoveCss({}, !0);
    this._addToMaps(a)
  };
  b._setSelMap = function(a) {
    var b = this._rows, e, f, g, h, q = {};
    for(g in b) {
      if(b.hasOwnProperty(g) && g !== "length") {
        if(e = b[g], a.hasOwnProperty(g)) {
          for(h in f = a[g], e) {
            e.hasOwnProperty(h) && h !== "length" && (f.hasOwnProperty(h) ? (f[h] instanceof c && (e[h] = f[h]), delete f[h]) : (q.hasOwnProperty(g) || (q[g] = {}), q[g][h] = !0))
          }
        }else {
          for(h in f = q[g] = {}, e) {
            e.hasOwnProperty(h) && h !== "length" && (f[h] = !0)
          }
        }
      }
    }
    this._removeFromMaps(q);
    this.addOrRemoveCss({}, !1);
    this._addSelMap(a)
  };
  b.addOrRemoveCss = function(a, b) {
    var f = [], g, k, h, q = this.grid.view;
    for(g in a) {
      if(a.hasOwnProperty(g)) {
        for(k in h = a[g], h) {
          h.hasOwnProperty(k) && (h[k] instanceof c ? f.push(h[k].getNode()) : f.push(q.getCell(g, k)))
        }
      }
    }
    f = f.filter(function(a) {
      return e.isNotNull(a)
    });
    b ? $(f).addClass(this._options.classSelection) : $(f).removeClass(this._options.classSelection)
  };
  b._addToMaps = function(a) {
    var b, c, f, g = this._rows, h = this._cols, q;
    for(b in a) {
      if(a.hasOwnProperty(b)) {
        for(c in q = a[b], q) {
          q.hasOwnProperty(c) && (f = e.isNull(f = q[c]) ? !0 : f, g.hasOwnProperty(b) ? g[b].length++ : (g[b] = {length:1}, g.length++), g[b][c] = f, h.hasOwnProperty(c) ? h[c].length++ : (h[c] = {length:1}, h.length++), h[c][b] = f)
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
  b._getRangeMap = function(a, b, c, e, f, g, q) {
    for(var l = {}, n;a <= c;a++) {
      l[a] = {};
      for(n = b;n <= e;n++) {
        l[a][n] = !0
      }
    }
    l[f][g] = q;
    return l
  };
  b.empty = function() {
    this._setLast();
    this._setRange();
    this._setSelMap({})
  }
})();
})();
