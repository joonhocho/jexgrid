/**
 * JexGrid Build 56
 * Date: Fri Oct 21 18:25:52 KST 2011
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

(function(){window.console && window.console.log && window.console.log('reading javascript source "array_extention.js"...');
var array_extension = {};
(function() {
  var f = Array.prototype;
  if(!f.indexOf) {
    f.indexOf = function(f) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var h = Object(this), g = h.length >>> 0;
      if(g === 0) {
        return-1
      }
      var e = 0;
      arguments.length > 0 && (e = Number(arguments[1]), e !== e ? e = 0 : e !== 0 && e !== 1 / 0 && e !== -(1 / 0) && (e = (e > 0 || -1) * Math.floor(Math.abs(e))));
      if(e >= g) {
        return-1
      }
      for(e = e >= 0 ? e : Math.max(g - Math.abs(e), 0);e < g;e++) {
        if(e in h && h[e] === f) {
          return e
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
      var h = Object(this), g = h.length >>> 0;
      if(g === 0) {
        return-1
      }
      var e = g;
      arguments.length > 1 && (e = Number(arguments[1]), e !== e ? e = 0 : e !== 0 && e !== 1 / 0 && e !== -(1 / 0) && (e = (e > 0 || -1) * Math.floor(Math.abs(e))));
      for(g = e >= 0 ? Math.min(e, g - 1) : g - Math.abs(e);g >= 0;g--) {
        if(g in h && h[g] === f) {
          return g
        }
      }
      return-1
    }
  }
  if(!f.filter) {
    f.filter = function(f, h) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var g = Object(this), e = g.length >>> 0;
      if(typeof f !== "function") {
        throw new TypeError;
      }
      for(var d = [], c = 0;c < e;c++) {
        if(c in g) {
          var a = g[c];
          f.call(h, a, c, g) && d.push(a)
        }
      }
      return d
    }
  }
  if(!f.forEach) {
    f.forEach = function(f, h) {
      var g, e = Object(this), d = e.length >>> 0, c = 0;
      if(!f || !f.call) {
        throw new TypeError;
      }
      for(h && (g = h);c < d;) {
        var a = String(c);
        e.hasOwnProperty(a) && (a = e[a], f.call(g, a, c, e));
        c++
      }
    }
  }
  if(!f.every) {
    f.every = function(f, h) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var g = Object(this), e = g.length >>> 0;
      if(typeof f !== "function") {
        throw new TypeError;
      }
      for(var d = 0;d < e;d++) {
        if(d in g && !f.call(h, g[d], d, g)) {
          return!1
        }
      }
      return!0
    }
  }
  if(!f.map) {
    f.map = function(f, h) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var g = Object(this), e = g.length >>> 0;
      if(typeof f !== "function") {
        throw new TypeError;
      }
      for(var d = Array(e), c = 0;c < e;c++) {
        c in g && (d[c] = f.call(h, g[c], c, g))
      }
      return d
    }
  }
  if(!f.some) {
    f.some = function(f, h) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var g = Object(this), e = g.length >>> 0;
      if(typeof f !== "function") {
        throw new TypeError;
      }
      for(var d = 0;d < e;d++) {
        if(d in g && f.call(h, g[d], d, g)) {
          return!0
        }
      }
      return!1
    }
  }
  if(!f.reduce) {
    f.reduce = function(f) {
      var h, g = this.length, e;
      if(typeof f !== "function") {
        throw new TypeError("First argument is not callable");
      }
      if((g == 0 || g === null) && arguments.length <= 1) {
        throw new TypeError("Array length is 0 and no second argument");
      }
      arguments.length <= 1 ? (e = this[0], h = 1) : e = arguments[1];
      for(h = h || 0;h < g;++h) {
        h in this && (e = f.call(void 0, e, this[h], h, this))
      }
      return e
    }
  }
  if(!f.reduceRight) {
    f.reduceRight = function(f) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var h = Object(this), g = h.length >>> 0;
      if(typeof f !== "function") {
        throw new TypeError;
      }
      if(g === 0 && arguments.length === 1) {
        throw new TypeError;
      }
      g -= 1;
      var e;
      if(arguments.length >= 2) {
        e = arguments[1]
      }else {
        do {
          if(g in this) {
            e = this[g--];
            break
          }
          if(--g < 0) {
            throw new TypeError;
          }
        }while(1)
      }
      for(;g >= 0;) {
        g in h && (e = f.call(void 0, e, h[g], g, h)), g--
      }
      return e
    }
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "engine_extension.js"...');
var engine_extension = {};
(function() {
  var f = Number.prototype, i = String.prototype, h = Array.prototype;
  if(!f.toFixedFloat) {
    f.toFixedFloat = function(g) {
      return parseFloat(this.toFixed(g))
    }
  }
  if(!i.toInt) {
    i.toInt = function() {
      var g;
      if(this.replace(/[^\d\.\-]/g, "").length === 0) {
        return NaN
      }
      g = parseInt(this, 10);
      if(g === g) {
        return g
      }
      for(var e, d = 0, c = 0, a = g.length, b = 0, j = !1;b < a;b++) {
        if(e = g.charAt(b), e === ".") {
          if(++d === 2) {
            j = !0;
            break
          }
        }else {
          if(e === "-" && ++c === 2) {
            j = !0;
            break
          }
        }
      }
      return j === !0 && (g = g.replace(/[\.\-]/g, "")).length === 0 ? NaN : /^-*0*\./.test(g) || (g = g.replace(/^-0+/, "-")).length === 0 || (g = g.replace(/^0+/, "")).length === 0 ? 0 : parseInt(g, 10)
    }
  }
  if(!i.toFloat) {
    i.toFloat = function() {
      var g;
      if((g = this.replace(/[^-\d\.]/g, "")).length === 0) {
        return NaN
      }
      for(var e = 0, d = g.length, c, a = 0, b = 0;e < d;e++) {
        if(c = g.charAt(e), c === ".") {
          if(a !== 0) {
            return NaN
          }else {
            a++
          }
        }else {
          if(c === "-") {
            if(b !== 0) {
              return NaN
            }else {
              b++
            }
          }
        }
      }
      return parseFloat(g)
    }
  }
  if(!h.remove) {
    h.remove = function(g) {
      if(this.length === 0) {
        return-1
      }
      g = this.indexOf(g);
      g !== -1 && this.splice(g, 1);
      return g
    }
  }
  if(!h.removeAll) {
    h.removeAll = function(g) {
      if(this.length === 0) {
        return this
      }
      for(var e = this.length;(e = this.lastIndexOf(g, e - 1)) !== -1;) {
        if(this.splice(e, 1), e === 0) {
          break
        }
      }
      return this
    }
  }
  if(!h.removeList) {
    h.removeList = function(g) {
      if(this.length === 0 || g.length === 0) {
        return this
      }
      for(var e = g.length, d = 0, c;d < e;d++) {
        (c = this.indexOf(g[d])) !== -1 && this.splice(c, 1)
      }
      return this
    }
  }
  if(!h.removeAt) {
    h.removeAt = function(g) {
      if(this.length !== 0 && (g < 0 && (g = this.length + g), g < 0 && (g = 0), this.hasOwnProperty(g) && g < this.length)) {
        return this.splice(g, 1)[0]
      }
    }
  }
  if(!h.addAt) {
    h.addAt = function(g, e) {
      this.splice(g, 0, e);
      return e
    }
  }
  if(!h.pushList) {
    h.pushList = function(g) {
      return g.length === 0 ? this.length : h.push.apply(this, g)
    }
  }
  if(!h.pushListAt) {
    h.pushListAt = function(g, e) {
      if(e.length === 0) {
        return this.length
      }
      var d = [g, 0];
      h.push.apply(d, e);
      h.splice.apply(this, d);
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
    for(var i = f;i = i.substring(0, i.lastIndexOf("."));) {
      if(goog.getObjectByName(i)) {
        break
      }
      goog.implicitNamespaces_[i] = !0
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
goog.exportSymbol_ = function(f, i, h) {
  f = f.split(".");
  h = h || goog.global;
  !(f[0] in h) && h.execScript && h.execScript("var " + f[0]);
  for(var g;f.length && (g = f.shift());) {
    !f.length && goog.isDef(i) ? h[g] = i : h = h[g] ? h[g] : h[g] = {}
  }
};
goog.getObjectByName = function(f, i) {
  for(var h = f.split("."), g = i || goog.global, e;e = h.shift();) {
    if(goog.isDefAndNotNull(g[e])) {
      g = g[e]
    }else {
      return null
    }
  }
  return g
};
goog.globalize = function(f, i) {
  var h = i || goog.global, g;
  for(g in f) {
    h[g] = f[g]
  }
};
goog.addDependency = function(f, i, h) {
  if(!COMPILED) {
    for(var g, f = f.replace(/\\/g, "/"), e = goog.dependencies_, d = 0;g = i[d];d++) {
      e.nameToPath[g] = f, f in e.pathToNames || (e.pathToNames[f] = {}), e.pathToNames[f][g] = !0
    }
    for(g = 0;i = h[g];g++) {
      f in e.requires || (e.requires[f] = {}), e.requires[f][i] = !0
    }
  }
};
goog.ENABLE_DEBUG_LOADER = !0;
goog.require = function(f) {
  if(!COMPILED && !goog.isProvided_(f)) {
    if(goog.ENABLE_DEBUG_LOADER) {
      var i = goog.getPathFromDeps_(f);
      if(i) {
        goog.included_[i] = !0;
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
        for(var f = goog.global.document.getElementsByTagName("script"), i = f.length - 1;i >= 0;--i) {
          var h = f[i].src, g = h.lastIndexOf("?"), g = g == -1 ? h.length : g;
          if(h.substr(g - 7, 7) == "base.js") {
            goog.basePath = h.substr(0, g - 7);
            break
          }
        }
      }
    }
  }, goog.importScript_ = function(f) {
    var i = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_;
    !goog.dependencies_.written[f] && i(f) && (goog.dependencies_.written[f] = !0)
  }, goog.writeScriptTag_ = function(f) {
    return goog.inHtmlDocument_() ? (goog.global.document.write('<script type="text/javascript" src="' + f + '"><\/script>'), !0) : !1
  }, goog.writeScripts_ = function() {
    function f(d) {
      if(!(d in g.written)) {
        if(!(d in g.visited) && (g.visited[d] = !0, d in g.requires)) {
          for(var c in g.requires[d]) {
            if(!goog.isProvided_(c)) {
              if(c in g.nameToPath) {
                f(g.nameToPath[c])
              }else {
                throw Error("Undefined nameToPath for " + c);
              }
            }
          }
        }
        d in h || (h[d] = !0, i.push(d))
      }
    }
    var i = [], h = {}, g = goog.dependencies_, e;
    for(e in goog.included_) {
      g.written[e] || f(e)
    }
    for(e = 0;e < i.length;e++) {
      if(i[e]) {
        goog.importScript_(goog.basePath + i[e])
      }else {
        throw Error("Undefined script input");
      }
    }
  }, goog.getPathFromDeps_ = function(f) {
    return f in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[f] : null
  }, goog.findBasePath_()
}
goog.typeOf = function(f) {
  var i = typeof f;
  if(i == "object") {
    if(f) {
      if(f instanceof Array) {
        return"array"
      }else {
        if(f instanceof Object) {
          return i
        }
      }
      var h = Object.prototype.toString.call(f);
      if(h == "[object Window]") {
        return"object"
      }
      if(h == "[object Array]" || typeof f.length == "number" && typeof f.splice != "undefined" && typeof f.propertyIsEnumerable != "undefined" && !f.propertyIsEnumerable("splice")) {
        return"array"
      }
      if(h == "[object Function]" || typeof f.call != "undefined" && typeof f.propertyIsEnumerable != "undefined" && !f.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if(i == "function" && typeof f.call == "undefined") {
      return"object"
    }
  }
  return i
};
goog.propertyIsEnumerableCustom_ = function(f, i) {
  if(i in f) {
    for(var h in f) {
      if(h == i && Object.prototype.hasOwnProperty.call(f, i)) {
        return!0
      }
    }
  }
  return!1
};
goog.propertyIsEnumerable_ = function(f, i) {
  return f instanceof Object ? Object.prototype.propertyIsEnumerable.call(f, i) : goog.propertyIsEnumerableCustom_(f, i)
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
  var i = goog.typeOf(f);
  return i == "array" || i == "object" && typeof f.length == "number"
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
  }catch(i) {
  }
};
goog.UID_PROPERTY_ = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36);
goog.uidCounter_ = 0;
goog.getHashCode = goog.getUid;
goog.removeHashCode = goog.removeUid;
goog.cloneObject = function(f) {
  var i = goog.typeOf(f);
  if(i == "object" || i == "array") {
    if(f.clone) {
      return f.clone()
    }
    var i = i == "array" ? [] : {}, h;
    for(h in f) {
      i[h] = goog.cloneObject(f[h])
    }
    return i
  }
  return f
};
goog.bindNative_ = function(f, i, h) {
  return f.call.apply(f.bind, arguments)
};
goog.bindJs_ = function(f, i, h) {
  if(!f) {
    throw Error();
  }
  if(arguments.length > 2) {
    var g = Array.prototype.slice.call(arguments, 2);
    return function() {
      var e = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(e, g);
      return f.apply(i, e)
    }
  }else {
    return function() {
      return f.apply(i, arguments)
    }
  }
};
goog.bind = function(f, i, h) {
  goog.bind = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? goog.bindNative_ : goog.bindJs_;
  return goog.bind.apply(null, arguments)
};
goog.partial = function(f, i) {
  var h = Array.prototype.slice.call(arguments, 1);
  return function() {
    var g = Array.prototype.slice.call(arguments);
    g.unshift.apply(g, h);
    return f.apply(this, g)
  }
};
goog.mixin = function(f, i) {
  for(var h in i) {
    f[h] = i[h]
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
        var i = goog.global.document, h = i.createElement("script");
        h.type = "text/javascript";
        h.defer = !1;
        h.appendChild(i.createTextNode(f));
        i.body.appendChild(h);
        i.body.removeChild(h)
      }
    }else {
      throw Error("goog.globalEval not available");
    }
  }
};
goog.evalWorksForGlobals_ = null;
goog.getCssName = function(f, i) {
  var h = function(e) {
    return goog.cssNameMapping_[e] || e
  }, g;
  g = goog.cssNameMapping_ ? goog.cssNameMappingStyle_ == "BY_WHOLE" ? h : function(e) {
    for(var e = e.split("-"), d = [], c = 0;c < e.length;c++) {
      d.push(h(e[c]))
    }
    return d.join("-")
  } : function(e) {
    return e
  };
  return i ? f + "-" + g(i) : g(f)
};
goog.setCssNameMapping = function(f, i) {
  goog.cssNameMapping_ = f;
  goog.cssNameMappingStyle_ = i
};
goog.getMsg = function(f, i) {
  var h = i || {}, g;
  for(g in h) {
    var e = ("" + h[g]).replace(/\$/g, "$$$$"), f = f.replace(RegExp("\\{\\$" + g + "\\}", "gi"), e)
  }
  return f
};
goog.exportSymbol = function(f, i, h) {
  goog.exportSymbol_(f, i, h)
};
goog.exportProperty = function(f, i, h) {
  f[i] = h
};
goog.inherits = function(f, i) {
  function h() {
  }
  h.prototype = i.prototype;
  f.superClass_ = i.prototype;
  f.prototype = new h;
  f.prototype.constructor = f
};
goog.base = function(f, i, h) {
  var g = arguments.callee.caller;
  if(g.superClass_) {
    return g.superClass_.constructor.apply(f, Array.prototype.slice.call(arguments, 1))
  }
  for(var e = Array.prototype.slice.call(arguments, 2), d = !1, c = f.constructor;c;c = c.superClass_ && c.superClass_.constructor) {
    if(c.prototype[i] === g) {
      d = !0
    }else {
      if(d) {
        return c.prototype[i].apply(f, e)
      }
    }
  }
  if(f[i] === g) {
    return f.constructor.prototype[i].apply(f, e)
  }else {
    throw Error("goog.base called from a method of one name to a method of a different name");
  }
};
goog.scope = function(f) {
  f.call(goog.global)
};
window.console && window.console.log && window.console.log('reading javascript source "util.js"...');
var jx = {util:{}}, Util = {}, echo = {};
(function() {
  function f(b, a) {
    if(b) {
      var c = {}, d, j;
      if(a) {
        for(d in b) {
          if(b.hasOwnProperty(d) && (j = b[d]) !== void 0) {
            c[d] = j
          }
        }
      }else {
        for(d in b) {
          if(b.hasOwnProperty(d)) {
            switch(j = b[d], typeof j) {
              case "undefined":
                break;
              case "object":
                c[d] = f(j);
                break;
              default:
                c[d] = j
            }
          }
        }
      }
      return c
    }
    return null
  }
  function i(b, a, c) {
    if(a) {
      if(b) {
        var d, j, k;
        if(c) {
          for(d in a) {
            if(a.hasOwnProperty(d) && (k = a[d]) !== void 0) {
              b[d] = k
            }
          }
        }else {
          for(d in a) {
            if(a.hasOwnProperty(d)) {
              switch(k = a[d], typeof k) {
                case "undefined":
                  break;
                case "object":
                  k && b.hasOwnProperty(d) && (j = b[d]) && typeof j == "object" ? i(j, k) : b[d] = k;
                  break;
                default:
                  b[d] = k
              }
            }
          }
        }
        return b
      }
      return a
    }
    return b
  }
  function h(b, a, d, j) {
    if(l.hasOwnProperty(b)) {
      if(d != null) {
        throw Error("empty element, " + b + ", cannot have content!");
      }
      return t & j ? "<" + b + g(a, !0) + "/>" : "<" + c(b) + g(a, !1) + "/>"
    }
    t & j ? (a = "<" + b + g(a, !0) + ">", d != null && (a += d)) : (b = c(b), a = "<" + b + g(a, !1) + ">", d != null && (a += c(d)));
    return p & j ? a : a + "</" + b + ">"
  }
  function g(b, a) {
    if(b) {
      var d = "", j, l, g;
      if(b.style) {
        j = b.style, delete b.style
      }
      if(a) {
        for(l in b) {
          b.hasOwnProperty(l) && (k.hasOwnProperty(l) ? b[l] && (d += " " + l + '="' + l + '"') : (g = b[l], g != null && (d += " " + l + '="' + g + '"')))
        }
      }else {
        for(l in b) {
          b.hasOwnProperty(l) && (k.hasOwnProperty(l) ? b[l] && (d += " " + l + '="' + l + '"') : (g = b[l], g != null && (d += " " + c(l) + '="' + c(g) + '"')))
        }
      }
      if(j) {
        d += e(j, a), b.style = j
      }
      return d
    }
    return""
  }
  function e(b, a) {
    if(b) {
      if(typeof b == "string") {
        return' style="' + (a ? b : c(b)) + '"'
      }
      var d = ' style="', j, k;
      if(a) {
        for(j in b) {
          b.hasOwnProperty(j) && (k = b[j], k != null && (d += j + ":" + k + ";"))
        }
      }else {
        for(j in b) {
          b.hasOwnProperty(j) && (k = b[j], k != null && (d += c(j) + ":" + c(k) + ";"))
        }
      }
      return d + '"'
    }
    return""
  }
  function d(b) {
    switch(b) {
      case "&":
        return"&amp;";
      case "<":
        return"&lt;";
      case ">":
        return"&gt;";
      case '"':
        return"&quot;";
      case "'":
        return"&#x27;";
      case "/":
        return"&#x2F;";
      default:
        return b
    }
  }
  function c(b) {
    return b != null ? (typeof b != "string" && (b = b.toString()), b.replace(/[&<>"'\/]/g, d)) : ""
  }
  var a = window.console, b = [], j;
  j = a && a.log ? function(b) {
    for(var c = 0, d = arguments.length;c < d;c++) {
      a.log(arguments[c])
    }
  } : function(a) {
    b.push.apply(b, arguments)
  };
  goog.exportSymbol("jx.util", Util);
  goog.exportSymbol("Util", Util);
  goog.exportSymbol("echo", j);
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
    c = c === void 0 ? function(b) {
      return!!b
    } : c;
    d = d === void 0 ? function(b) {
      return $.trim(b)
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
      for(var d = [], j = b.length, k = 0, c = c !== void 0 ? c - 1 : void 0;k < j;k++) {
        k in b && (d[k] = Util.clone(b[k], a, c))
      }
      return d
    }
    d = {};
    j = Util.isEmptyObj(a);
    if(c === 1) {
      if(j) {
        for(k in b) {
          b.hasOwnProperty(k) && (d[k] = b[k])
        }
      }else {
        for(k in a) {
          a.hasOwnProperty(k) && b.hasOwnProperty(k) && (d[k] = b[k])
        }
      }
    }else {
      if(c = c !== void 0 ? c - 1 : void 0, j) {
        for(k in b) {
          b.hasOwnProperty(k) && (d[k] = Util.clone(b[k], void 0, c))
        }
      }else {
        for(k in a) {
          a.hasOwnProperty(k) && b.hasOwnProperty(k) && (d[k] = Util.clone(b[k], void 0, c))
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
  Util.formatNumber = function(b, a, c, d, j) {
    var c = c === void 0 ? "&#8361; " : c, a = isNaN(a) ? 0 : a, d = d === void 0 ? "." : d, j = j === void 0 ? "," : j, k = b < 0 ? "-" : "", e = parseInt(b = Math.abs(+b || 0).toFixed(a), 10) + "", l = e.length, l = l > 3 ? l % 3 : 0;
    return c + k + (l ? e.substr(0, l) + j : "") + e.substr(l).replace(/(\d{3})(?=\d)/g, "$1" + j) + (a ? d + Math.abs(b - e).toFixed(a).slice(2) : "")
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
    if(b && a) {
      var c = b.className;
      if(c === a) {
        return!0
      }
      if(c && c.length >= a.length) {
        for(var c = b.classList || Util.split(c), d = 0, j = c.length;d < j;d++) {
          if(c[d] === a) {
            return!0
          }
        }
      }
    }
    return!1
  };
  Util.hasTagAndClass = function(b, a, c) {
    if(b && a && c && b.tagName === a) {
      a = b.className;
      if(a === c) {
        return!0
      }
      if(a && a.length >= c.length) {
        for(var b = b.classList || Util.split(a), a = 0, d = b.length;a < d;a++) {
          if(b[a] === c) {
            return!0
          }
        }
      }
    }
    return!1
  };
  Util.closest = function(b, a, c) {
    if(c) {
      for(var d = b, j = !1;d;) {
        if(d === c) {
          j = !0;
          break
        }
        d = d.parentNode
      }
      if(!j) {
        return null
      }
    }
    if(Util.hasClass(b, a)) {
      return b
    }
    for(b = b.parentNode;b && b !== c;b = b.parentNode) {
      if(Util.hasClass(b, a)) {
        return b
      }
    }
    return null
  };
  Util.closestWithTag = function(b, a, c, d) {
    if(d) {
      for(var j = b, k = !1;j;) {
        if(j === d) {
          k = !0;
          break
        }
        j = j.parentNode
      }
      if(!k) {
        return null
      }
    }
    if(Util.hasTagAndClass(b, a, c)) {
      return b
    }
    for(b = b.parentNode;b && b !== d;b = b.parentNode) {
      if(Util.hasTagAndClass(b, a, c)) {
        return b
      }
    }
    return null
  };
  Util.findFirstByClass = function(b, a) {
    if(b) {
      if(Util.hasClass(b, a)) {
        return b
      }
      for(var c = 0, d = b.childNodes, j = d.length, k, e;c < j;c++) {
        if((k = d[c]) && (e = Util.findFirstByClass(k, a)) !== void 0) {
          return e
        }
      }
    }
    return null
  };
  Util.findFirstByTagAndClass = function(b, a, c) {
    if(b) {
      if(Util.hasTagAndClass(b, a, c)) {
        return b
      }
      for(var d = 0, b = b.childNodes, j = b.length, k;d < j;d++) {
        if(Util.isNotNull(b[d]) && (k = Util.findFirstByTagAndClass(b[d], a, c)) !== void 0) {
          return k
        }
      }
    }
    return null
  };
  Util.findByClass = function(b, a, c) {
    c = c || [];
    if(b) {
      Util.hasClass(b, a) && c.push(b);
      for(var d = 0, b = b.childNodes, j = b.length;d < j;d++) {
        Util.isNotNull(b[d]) && Util.findByClass(b[d], a, c)
      }
    }
    return c
  };
  Util.findByTagAndClass = function(b, a, c, d) {
    d = d || [];
    if(b) {
      Util.hasTagAndClass(b, a, c) && d.push(b);
      for(var j = 0, b = b.childNodes, k = b.length;j < k;j++) {
        Util.isNotNull(b[j]) && Util.findByTagAndClass(b[j], a, c, d)
      }
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
    var c = document.createElement("div"), d, j = 0, k = [];
    c.innerHTML = a;
    for(d = c.childNodes.length;j < d;j++) {
      k.push(b.appendChild(c.firstChild))
    }
    return k
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
    var d = c.length, j = c[0];
    if(d === 1) {
      return j === "array" ? Util.areEqualArrays(b, a) : Util.areEqualObjects(b, a)
    }
    if(d > 1) {
      c = c.slice(1);
      d = 0;
      if(j === "array") {
        if(b.length !== a.length) {
          return!1
        }
        for(j = b.length;d < j;d++) {
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
  Util.typeCheck = function(b, a, c, d, j) {
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
    if(j) {
      return!1
    }
    throw new TypeError("object is not a " + b + ", but is a " + typeof a);
  };
  Util.sprint = function(b, a, c, d) {
    Util.typeCheck("string", b);
    Util.typeCheck("object", a);
    Util.typeCheck("string", c, !0);
    Util.typeCheck("string", d, !0);
    var j;
    c === void 0 && (c = "%");
    d === void 0 && (d = "%");
    for(j in a) {
      a.hasOwnProperty(j) && (b = b.replace(RegExp(c + j + d, "gm"), a[j]))
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
    return b.replace(RegExp("(" + d.join("|") + ")", "gm"), function(b) {
      return a[b]
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
    if(j) {
      if(arguments.length === 1) {
        j(arguments[0])
      }else {
        for(var a = 0, c = arguments.length;a < c;a++) {
          j(arguments[a])
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
    return a.replace == null ? window.open(a.url, a.name, b) : window.open(a.url, a.name, b, a.replace)
  };
  Util.cloneObject = f;
  Util.extendObject = i;
  Util.extendOrClone = function(b, a) {
    return a ? b ? i(b, a) : f(a) : b
  };
  Util.lcfirst = function(b) {
    return b ? b.charAt(0).toLowerCase() + b.substring(1) : ""
  };
  Util.ucfirst = function(b) {
    return b ? b.charAt(0).toUpperCase() + b.substring(1) : ""
  };
  var k = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, l = {area:!0, base:!0, basefont:!0, br:!0, col:!0, command:!0, embed:!0, frame:!0, hr:!0, img:!0, input:!0, isindex:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, wbr:!0}, x = {hidden:!0, text:!0, search:!0, tel:!0, url:!0, email:!0, password:!0, date:!0, month:!0, week:!0, time:!0, datetime:!0, number:!0, range:!0, 
  color:!0, checkbox:!0, radio:!0, file:!0, submit:!0, image:!0, reset:!0, button:!0};
  Util.emptyElements = l;
  Util.element = h;
  Util.input = function(b, a, c) {
    if(x.hasOwnProperty(b)) {
      return a.type = b, h("input", a, null, c)
    }else {
      throw Error("invalid input type, " + b + "!");
    }
  };
  Util.attribute = g;
  Util.style = e;
  Util.escapeChar = d;
  Util.encode = c;
  var t = 1, p = 2;
  Util.SAFE = t;
  Util.LEAVE_OPENED = p
})();
window.console && window.console.log && window.console.log('reading javascript source "Tracer.js"...');
var Tracer = {};
(function() {
  function f() {
    this.stack = "";
    this.timers = {}
  }
  var i = goog.getObjectByName("jx.util");
  goog.exportSymbol("Tracer", f);
  var h = f.prototype;
  h.print = function(g, e, d) {
    g === void 0 && (g = "");
    e === void 0 && (e = "timer");
    d === void 0 && (d = !0);
    var c = this.timers[e], a = (new Date).getTime(), c = i.isNull(c) ? 0 : a - c;
    i.print((this.stack.length > 0 ? this.stack + " :: " : "") + g + ", Time elapsed since last update: " + c + "ms");
    d && (this.timers[e] = a)
  };
  h.addStack = function(g) {
    this.stack = this.stack + " > " + g
  };
  h.removeStack = function() {
    this.stack = this.stack.substring(0, this.stack.lastIndexOf(" > "))
  };
  h.clearStack = function() {
    this.stack = ""
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "TimeWatch.js"...');
var TimeWatch = {};
(function() {
  function f(f) {
    var g = this.laps = [];
    this._stopped = !1;
    g.push(f || null, (new Date).getTime())
  }
  goog.exportSymbol("TimeWatch", f);
  var i = f.prototype;
  i.lap = function(f) {
    if(this._stopped) {
      throw Error("TimeWatch was stopped, thus cannot lap. Please reset!");
    }
    this.laps.push(f || null, (new Date).getTime())
  };
  i.stop = function(f) {
    this._stopped = !0;
    this.laps.push(f || null, (new Date).getTime())
  };
  i.reset = function(f) {
    var g = this.laps;
    g.length = 0;
    this._stopped = !1;
    g.push(f || null, (new Date).getTime())
  };
  i.toString = function() {
    var f = this.laps, g = f.length, e = 2, d = g - (this._stopped ? 2 : 0), c = f[0], a = f[1], b = a, g = g > 2 ? [] : null, j = 0, k = "TimeWatch\n";
    for(k += "start" + (c ? ": " + c : "") + " @" + a + "\n";e < d;e += 2) {
      c = (c = f[e]) ? ": " + c : "", a = f[e + 1], g.push(b = a - b), j += b, k += "lap " + e / 2 + c + " @" + a + " +" + b + "ms\n", b = a
    }
    d >= 2 && this._stopped && (c = (c = f[d]) ? ": " + c : "", a = f[d + 1], g.push(b = a - b), j += b, k += "stop" + c + " @" + a + " +" + b + "ms\n");
    if(g) {
      var f = g.length, l = j / f, x = 0;
      k += "total number of laps: " + f + "\n";
      k += "total elapsed time: " + j + "ms\n";
      k += "average lap time: " + l.toFixed(2) + "ms\n";
      g.forEach(function(b) {
        x += (b - l) * (b - l)
      });
      x = Math.sqrt(x / f);
      k += "standard deviation: " + x.toFixed(2) + "ms\n"
    }
    return k
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "utiljquery.js"...');
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
    var i, h, g, e;
    if(this.length <= 1) {
      return i = this.getBoundingRect(), g = f.pageX, e = f.pageY, g >= i.left && g <= i.left + i.width && e >= i.top && e <= i.top + i.height
    }
    h = !1;
    this.each(function() {
      i = $(this).getBoundingRect();
      g = f.pageX;
      e = f.pageY;
      if(g >= i.left && g <= i.left + i.width && e >= i.top && e <= i.top + i.height) {
        return h = !0, !1
      }
    });
    return h
  };
  Util$.baseurlOfHeadScript = function(f) {
    var i = $(document.getElementsByTagName("head")[0]).find("script[src$='" + f + "']").attr("src");
    return i.substring(0, i.indexOf(f))
  };
  Util$.calScrollbarDims = function(f) {
    if(Util.isNotNull(window._SCROLLBAR)) {
      return window._SCROLLBAR
    }
    if(Util.isNotNull(window.opener) && Util.isNotNull(window.opener._SCROLLBAR)) {
      return window.opener._SCROLLBAR
    }
    var f = Util$.safe$(f), i;
    f[0].innerHTML = "<div id='scrollbardim' style='position:absolute;top:-10000px;left:-10000px;width:100px;height:100px;overflow:scroll;'></div>";
    i = $(document.getElementById("scrollbardim"));
    i = {w:i.width() - i[0].clientWidth, h:i.height() - i[0].clientHeight};
    f[0].innerHTML = "";
    return window._SCROLLBAR = i
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "bootstrap.js"...');
jx.grid = {};
var JGM = {};
(function() {
  var f = goog.getObjectByName("jx.util"), i = goog.getObjectByName("jx.util$");
  goog.exportSymbol("JGM", JGM);
  goog.exportSymbol("jx.grid", JGM);
  JGM.version = "2.0.0";
  JGM._map = {ArrayExtIE:{cacheModule:!1}, Cache:{cacheModule:!0}, Cell:{cacheModule:!1}, CheckManager:{cacheModule:!0}, ColumnManager:{cacheModule:!0}, ColumnGroup:{cacheModule:!0}, ColumnHeader:{cacheModule:!0}, Collapser:{cacheModule:!0}, DataManager:{cacheModule:!0}, DataCreator:{cacheModule:!0}, EditManager:{cacheModule:!0}, Editor:{cacheModule:!0}, EngineExt:{cacheModule:!1}, EventManager:{cacheModule:!0}, Footer:{cacheModule:!0}, HeaderTree:{cacheModule:!0}, Grid:{cacheModule:!0}, GridManager:{cacheModule:!1}, 
  MenuBar:{cacheModule:!0}, ViewportManager:{cacheModule:!0}, SelectionManager:{cacheModule:!0}, SearchManager:{cacheModule:!0}, TooltipManager:{cacheModule:!0}, Tracer:{cacheModule:!1}, Tree:{cacheModule:!0}, TreeNode:{cacheModule:!1}, Util:{cacheModule:!1}, Util$:{cacheModule:!1}};
  JGM.create = function(g, e) {
    e == null && (e = {});
    if(!JGM.hasOwnProperty(g)) {
      throw Error("cannot find a grid module: name=" + g);
    }
    if(JGM._map.hasOwnProperty(g)) {
      if(JGM._map[g].cacheModule) {
        var d = e.mid = "JGM" + JGM.m.length++, c = new JGM[g](e);
        JGM.m.hasOwnProperty(g) || (JGM.m[g] = {});
        JGM.m[g][d] = c;
        if(g === "Grid") {
          if(c.name == null) {
            c.name = JGM.grids.length
          }
          JGM.gridMap[c.name] = c;
          JGM.grids.push(c)
        }
        return c
      }else {
        return new JGM[g](e)
      }
    }else {
      return new JGM[g](e)
    }
  };
  JGM._destroy = function(g, e) {
    if(g && e) {
      var d, c, a, b;
      for(c in e) {
        if(e.hasOwnProperty(c)) {
          switch(c) {
            case "map":
              d = e[c];
              if(typeof d == "string") {
                d = f.split(d);
                b = d.length;
                for(a = 0;a < b;a++) {
                  JGM._deleteMap(g, d[a])
                }
              }else {
                if(d instanceof Array) {
                  b = d.length;
                  for(a = 0;a < b;a++) {
                    f.emptyObject(d[a])
                  }
                }else {
                  f.emptyObject(d)
                }
              }
              break;
            case "array":
              d = e[c];
              if(typeof d == "string") {
                d = f.split(d);
                b = d.length;
                for(a = 0;a < b;a++) {
                  JGM._deleteArray(g, d[a])
                }
              }else {
                d.length = 0
              }
              break;
            case "$":
              d = e[c];
              if(typeof d == "string") {
                d = f.split(d);
                b = d.length;
                for(a = 0;a < b;a++) {
                  JGM._delete$(g, d[a])
                }
              }else {
                if(d instanceof Array) {
                  b = d.length;
                  for(a = 0;a < b;a++) {
                    i.unbindRemove(d[a])
                  }
                }else {
                  i.unbindRemove(d)
                }
              }
              break;
            case "style":
              d = e[c];
              if(typeof d == "string") {
                d = f.split(d);
                b = d.length;
                for(a = 0;a < b;a++) {
                  JGM._deleteStyle(g, d[a])
                }
              }else {
                if(d instanceof Array) {
                  b = d.length;
                  for(a = 0;a < b;a++) {
                    f.removeStyle(d[a])
                  }
                }else {
                  f.removeStyle(d)
                }
              }
              break;
            case "property":
              d = e[c];
              if(typeof d == "string") {
                d = f.split(d);
                b = d.length;
                for(a = 0;a < b;a++) {
                  delete g[d[a]]
                }
              }else {
                if(d instanceof Array) {
                  b = d.length;
                  for(a = 0;a < b;a++) {
                    delete g[d[a]]
                  }
                }
              }
              break;
            case "module":
              d = e[c];
              if(typeof d == "string") {
                d = f.split(d);
                b = d.length;
                for(a = 0;a < b;a++) {
                  JGM._deleteModule(g, d[a])
                }
              }else {
                if(d instanceof Array) {
                  b = d.length;
                  for(a = 0;a < b;a++) {
                    d[a].destroy()
                  }
                }else {
                  d.destroy()
                }
              }
              break;
            case "name":
              g.hasOwnProperty("mid") && (JGM._remove(e[c], g.mid), delete g.mid);
              break;
            case "path":
              g.hasOwnProperty("grid") && g.grid.hasOwnProperty(e[c]) && (delete g.grid[e[c]], delete g.grid)
          }
        }
      }
      f.emptyObject(g)
    }
  };
  JGM._deleteMap = function(g, e) {
    g && g.hasOwnProperty(e) && g[e] && (f.emptyObject(g[e]), delete g[e])
  };
  JGM._deleteArray = function(g, e) {
    if(g && g.hasOwnProperty(e) && g[e]) {
      g[e].length = 0, delete g[e]
    }
  };
  JGM._delete$ = function(g, e) {
    g && g.hasOwnProperty(e) && g[e] && (i.unbindRemove(g[e]), delete g[e])
  };
  JGM._deleteStyle = function(g, e) {
    g && g.hasOwnProperty(e) && g[e] && (f.removeStyle(g[e]), delete g[e])
  };
  JGM._deleteModule = function(g, e) {
    g && g.hasOwnProperty(e) && g[e] && (g[e].destroy(), delete g[e])
  };
  JGM._remove = function(g, e) {
    delete JGM.m[g][e]
  };
  JGM.grid = function(g) {
    return JGM.create("Grid", g)
  };
  JGM.gridMap = {};
  JGM.getGrid = function(g) {
    if(JGM.gridMap.hasOwnProperty(g)) {
      return JGM.gridMap[g]
    }
  };
  JGM.grids = [];
  JGM._add = function(g, e) {
    JGM[g] = e
  };
  JGM._extend = function(g, e) {
    var d = f.ifNull(e, {});
    $.extend(!0, g, d);
    $.extend(!0, d, g);
    return d
  };
  JGM.m = {length:0};
  JGM._CONST = {_cssUnselectable:"-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none;", _checkboxWidth:void 0, _checkboxHeight:void 0, _radioWidth:void 0, _radioHeight:void 0};
  JGM._globalEventsBound = !1;
  JGM._globalEvents = {_mousemove:function(g) {
    var e, d = JGM.m.Grid;
    for(e in d) {
      d.hasOwnProperty(e) && d[e]._mousemove(g)
    }
  }, _mouseup:function(g) {
    var e, d = JGM.m.Grid;
    for(e in d) {
      d.hasOwnProperty(e) && d[e]._mouseup(g)
    }
  }, _resize:function(g) {
    var e, d = JGM.m.Grid;
    for(e in d) {
      d.hasOwnProperty(e) && d[e]._resize(g)
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
  DATA_TOO_SHORT:"Data '%0' too short for column '%1'. Minimum is %2.", WRONG_LENGTH:"Length of data '%0' is not '%1' characters long for column '%2'.", BIGGER_THAN:"Data '%0' too big for column '%1'. Maximum is %2.", SMALLER_THAN:"Data '%0' too small for column '%1'. Minimum is %2.", WRONG_VALUE:"Incorrect value: '%0' for '%1'."};
  JGM.chart = function(g, e, d, c, a) {
    var b, e = e.toLowerCase();
    switch(e) {
      case "area":
        e = "corechart";
        b = "AreaChart";
        break;
      case "bar":
        e = "corechart";
        b = "BarChart";
        break;
      case "candle":
        e = "corechart";
        b = "CandlestickChart";
        break;
      case "column":
        e = "corechart";
        b = "ColumnChart";
        break;
      case "combo":
        e = "corechart";
        b = "ComboChart";
        break;
      case "gauge":
        e = "gauge";
        b = "Gauge";
        break;
      case "geo":
        e = "geochart";
        b = "GeoChart";
        break;
      case "line":
        e = "corechart";
        b = "LineChart";
        break;
      case "pie":
        e = "corechart";
        b = "PieChart";
        break;
      case "scatter":
        e = "corechart";
        b = "ScatterChart";
        break;
      case "table":
        e = "table";
        b = "Table";
        break;
      case "treemap":
        e = "treemap";
        b = "TreeMap";
        break;
      default:
        throw Error("unknown chart type: " + e);
    }
    google.load("visualization", "1", {packages:[e]});
    var j = JGM.exportToArray(a, d.map(function(b) {
      return b.key
    }));
    google.setOnLoadCallback(function() {
      for(var a = new google.visualization.DataTable, e = 0, f = d.length, h, i;e < f;e++) {
        h = d[e];
        i = h.type;
        switch(i) {
          case "boolean":
            i = "boolean";
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
            i = "number";
            break;
          case "string":
          ;
          case "text":
            i = "string"
        }
        a.addColumn(i || typeof j[0][e] || e === 0 && "string" || "number", h.name)
      }
      a.addRows(j);
      (new google.visualization[b](document.getElementById(g))).draw(a, c)
    })
  };
  JGM.exportToArray = function(g, e) {
    for(var d, c = [], a, b, j = 0, k = g.length, l, f = e.length;j < k;j++) {
      a = g[j];
      l = 0;
      for(d = [];l < f;l++) {
        b = e[l], d.push(b in a ? a[b] : null)
      }
      c.push(d)
    }
    return c
  };
  var h = {init:function() {
    this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
    this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
    this.OS = this.searchString(this.dataOS) || "an unknown OS"
  }, searchString:function(g) {
    for(var e = 0;e < g.length;e++) {
      var d = g[e].string, c = g[e].prop;
      this.versionSearchString = g[e].versionSearch || g[e].identity;
      if(d) {
        if(d.indexOf(g[e].subString) != -1) {
          return g[e].identity
        }
      }else {
        if(c) {
          return g[e].identity
        }
      }
    }
  }, searchVersion:function(g) {
    var e = g.indexOf(this.versionSearchString);
    return e == -1 ? void 0 : parseFloat(g.substring(e + this.versionSearchString.length + 1))
  }, dataBrowser:[{string:navigator.userAgent, subString:"Chrome", identity:"Chrome"}, {string:navigator.userAgent, subString:"OmniWeb", versionSearch:"OmniWeb/", identity:"OmniWeb"}, {string:navigator.vendor, subString:"Apple", identity:"Safari", versionSearch:"Version"}, {prop:window.opera, identity:"Opera", versionSearch:"Version"}, {string:navigator.vendor, subString:"iCab", identity:"iCab"}, {string:navigator.vendor, subString:"KDE", identity:"Konqueror"}, {string:navigator.userAgent, subString:"Firefox", 
  identity:"Firefox"}, {string:navigator.vendor, subString:"Camino", identity:"Camino"}, {string:navigator.userAgent, subString:"Netscape", identity:"Netscape"}, {string:navigator.userAgent, subString:"MSIE", identity:"Explorer", versionSearch:"MSIE"}, {string:navigator.userAgent, subString:"Gecko", identity:"Mozilla", versionSearch:"rv"}, {string:navigator.userAgent, subString:"Mozilla", identity:"Netscape", versionSearch:"Mozilla"}], dataOS:[{string:navigator.platform, subString:"Win", identity:"Windows"}, 
  {string:navigator.platform, subString:"Mac", identity:"Mac"}, {string:navigator.userAgent, subString:"iPhone", identity:"iPhone/iPod"}, {string:navigator.platform, subString:"Linux", identity:"Linux"}]};
  h.init();
  JGM.browser = h
})();
window.console && window.console.log && window.console.log('reading javascript source "renderer.js"...');
jx.grid.renderer = {};
(function() {
  var f = goog.getObjectByName("jx.grid");
  goog.getObjectByName("jx.util");
  f = f.renderer = {};
  goog.exportSymbol("jx.grid.renderer", f);
  f.selectBox = function(f) {
    var h = f.mapping, g = f.attr, e = f["default"], d = f.style, c = f.callback, a, b, j, k = 0, l = [], x = [], t = "<select";
    if(g) {
      for(j in g) {
        g.hasOwnProperty(j) && (t += " " + j + '="' + g[j] + '"')
      }
    }
    if(d) {
      t += ' style="';
      for(j in d) {
        d.hasOwnProperty(j) && (t += j + ":" + d[j] + ";")
      }
      t += '"'
    }
    t += ">";
    for(a in h) {
      h.hasOwnProperty(a) && (f = h[a], l.push(a), x.push(f), e == f && (b = k), k++)
    }
    return function(a) {
      var d, j, e = t;
      for(j = 0;j < k;j++) {
        if(a == x[j]) {
          d = j;
          break
        }
      }
      d === void 0 && (d = b);
      for(j = 0;j < k;j++) {
        e += '<option value="' + x[j] + '"', j === d && (e += ' selected="selected"'), e += ">" + l[j] + "</option>"
      }
      e += "</select>";
      c && (d = [], d.push(e), Array.prototype.push.apply(d, arguments), e = c.apply(this, d));
      return e
    }
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "Disposable.js"...');
jx.lang = {};
jx.lang.Disposable = {};
(function() {
  function f() {
  }
  function i(c, a, b) {
    if(typeof c != "object") {
      return!1
    }
    var d, k, e;
    if(a) {
      for(var b = 0, g = a.length;b < g;b++) {
        if(d = a[b], this.hasOwnProperty(d)) {
          if(c.hasOwnProperty(d)) {
            if(k = this[d], e = c[d], k !== c && !(k === k || e === e)) {
              return!1
            }
          }else {
            return!1
          }
        }else {
          if(c.hasOwnProperty(d)) {
            return!1
          }
        }
      }
    }else {
      if(b) {
        for(d in this) {
          if(this.hasOwnProperty(d)) {
            if(!c.hasOwnProperty(d)) {
              return!1
            }
            k = this[d];
            e = c[d];
            if(k !== e) {
              if(k) {
                if(typeof k != "object" || typeof e != "object") {
                  return!1
                }
                if(k.equals) {
                  if(!k.equals(e, null, b - 1)) {
                    return!1
                  }
                }else {
                  if(e.equals && !e.equals(k, null, b - 1)) {
                    return!1
                  }
                }
                if(!i.call(k, e, null, b - 1)) {
                  return!1
                }
              }else {
                if(!(k === k || e === e)) {
                  return!1
                }
              }
            }
          }
        }
      }else {
        for(d in this) {
          if(this.hasOwnProperty(d)) {
            if(c.hasOwnProperty(d)) {
              if(k = this[d], e = c[d], k !== c && !(k === k || e === e)) {
                return!1
              }
            }else {
              return!1
            }
          }
        }
      }
      for(d in c) {
        if(c.hasOwnProperty(d) && !this.hasOwnProperty(d)) {
          return!1
        }
      }
    }
    return!0
  }
  function h(c, a) {
    if(this != goog.global) {
      var b, j;
      if(c) {
        for(b in this) {
          if(this.hasOwnProperty(b)) {
            if((j = this[b]) && typeof j == "object") {
              if(j.dispose) {
                j.dispose(c - 1, a)
              }else {
                if(a) {
                  if(d(j)) {
                    j.length = 0
                  }
                  h.call(j, c - 1, a)
                }
              }
            }
            delete this[b]
          }
        }
      }else {
        for(b in this) {
          this.hasOwnProperty(b) && delete this[b]
        }
      }
    }
  }
  var g = goog.getObjectByName("jx.util");
  goog.exportSymbol("jx.lang.Disposable", f);
  goog.exportProperty(f.prototype, "dispose", h);
  var e = f.prototype, d = g.isArray;
  g.equals = Object.equals = function(c, a, b, d) {
    return typeof c == "object" ? i.call(c, a, b, d) : c !== c && a !== a
  };
  g.dispose = Object.dispose = function(c, a, b) {
    if(typeof c == "object") {
      return h.call(c, a, b)
    }
  };
  e.equals = i;
  e.dispose = h
})();
window.console && window.console.log && window.console.log('reading javascript source "Cell.js"...');
jx.grid.Cell = {};
(function() {
  function f(d) {
    this.grid = d.grid;
    this._datarow = d.datarow;
    this._colDef = d.colDef;
    this.__init(d)
  }
  goog.getObjectByName("jx.grid");
  var i = goog.getObjectByName("jx.util"), h = goog.getObjectByName("jx.lang.Disposable");
  goog.exportSymbol("jx.grid.Cell", f);
  goog.inherits(f, h);
  f.getInstance = function(d) {
    return new f(d)
  };
  var g = f.prototype, e = h.prototype.dispose;
  g.dispose = function() {
    e.call(this)
  };
  g.__init = function(d) {
    if(i.isNull(this._datarow)) {
      if(i.isNotNull(d.row)) {
        this._datarow = this.grid.dataMgr.getByIdx(d.row)
      }else {
        if(i.isNotNull(d.node)) {
          this._datarow = this.grid.dataMgr.getByNode(d.node.parentNode)
        }else {
          if(i.isNotNull(d.$)) {
            this._datarow = this.grid.dataMgr.getByNode(d.$[0].parentNode)
          }
        }
      }
    }
    if(i.isNull(this._colDef)) {
      if(i.isNotNull(d.col)) {
        this._colDef = this.grid.colDefMgr.get(d.col)
      }else {
        if(i.isNotNull(d.node)) {
          this._colDef = this.grid.colDefMgr.get(i.index(d.node))
        }else {
          if(i.isNotNull(d.$)) {
            this._colDef = this.grid.colDefMgr.get(i.index(d.$[0]))
          }
        }
      }
    }
    if(i.isNullOr(this._datarow, this._colDef) && i.isNotNull(d.event) && (d = this.grid.view._getClosestCell(d.event.target), i.isNotNull(d))) {
      this._datarow = this.grid.dataMgr.getByNode(d.parentNode), this._colDef = this.grid.colDefMgr.get(i.index(d))
    }
  };
  g.destroy = function() {
    this.dispose()
  };
  g.getRowIdx = function() {
    if(i.isNotNull(this._datarow)) {
      return this.grid.dataMgr.getIdx(this._datarow)
    }
  };
  g.getColIdx = function() {
    if(i.isNotNull(this._colDef)) {
      return this.grid.colDefMgr.getIdx(this._colDef)
    }
  };
  g.getNode = function() {
    if(i.isNotNullAnd(this._datarow, this._colDef)) {
      return this.grid.view.getCellByIdAndKey(this.grid.dataMgr.getId(this._datarow), this._colDef.key)
    }
  };
  g.getRowNode = function() {
    return this.grid.view.getRow(this._datarow)
  };
  g.get$ = function() {
    var d = this.getNode();
    return d !== void 0 ? $(d) : $([])
  };
  g.getDatarow = function() {
    return this._datarow
  };
  g.getColDef = function() {
    return this._colDef
  };
  g.getKey = function() {
    if(i.isNotNull(this._colDef)) {
      return this._colDef.key
    }
  };
  g.getId = function() {
    return this.grid.dataMgr.getId(this._datarow)
  };
  g.getValue = function() {
    if(i.isNotNullAnd(this._datarow, this._colDef)) {
      return this._datarow[this._colDef.key]
    }
  };
  g.isValid = function() {
    return i.isNotNull(this.getNode())
  };
  g.isInvalid = function() {
    return i.isNull(this.getNode())
  };
  g.isEmpty$ = function() {
    return this.get$().length === 0
  };
  g.has$ = function() {
    return this.get$().length !== 0
  };
  g.equals = function(d) {
    return d && this._datarow && this._datarow === d._datarow && this._colDef && this._colDef === d.__colDef
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "EventDispatcher.js"...');
jx.events = {};
jx.events.EventDispatcher = {};
(function() {
  function f() {
  }
  goog.getObjectByName("jx.grid");
  goog.getObjectByName("jx.util");
  var i = goog.getObjectByName("jx.lang.Disposable");
  goog.exportSymbol("jx.events.EventDispatcher", f);
  goog.inherits(f, i);
  var h = f.prototype, g = i.prototype.dispose;
  h.dispose = function() {
    g.call(this._handlers, -1, !0);
    g.call(this)
  };
  h.addEventListener = function(e, d) {
    if(!e) {
      throw Error("Invalid event type: " + e);
    }
    if(typeof d != "function") {
      throw Error("Event listener must be a function");
    }
    if(!this._handlers) {
      this._handlers = {}
    }
    var c = this._handlers, e = (e + "").toLowerCase();
    c.hasOwnProperty(e) || (c[e] = []);
    c = c[e];
    c.indexOf(d) === -1 && c.push(d)
  };
  h.removeEventListener = function(e, d) {
    if(this._handlers) {
      var e = (e + "").toLowerCase(), c = this._handlers;
      if(c.hasOwnProperty(e)) {
        for(var a = c[e], b = -1;(b = a.indexOf(d, b + 1)) !== -1;) {
          a.splice(b--, 1)
        }
        a.length === 0 && delete c[e]
      }
    }
  };
  h.dispatchEvent = function(e) {
    if(!e || !e.type) {
      throw Error("Invalid event");
    }
    if(!this._handlers) {
      if(e.cancelable && e.defaultPrevented) {
        return!1
      }
      e.defaultAction && e.defaultAction(this);
      return!0
    }
    var d = this._handlers, c = (e.type + "").toLowerCase();
    e.target = this;
    if(d.hasOwnProperty(c)) {
      for(var d = d[c].slice(), c = 0, a = d.length, b;c < a && !e.stopPropagation;c++) {
        b = d[c], b.handleEvent ? b.handleEvent(e) : b.call(this, e)
      }
    }
    if(e.cancelable && e.defaultPrevented) {
      return!1
    }
    e.defaultAction && e.defaultAction(this);
    return!0
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "Column.js"...');
jx.grid.Column = {};
(function() {
  function f(f) {
    if(!(f.manager && typeof f.manager == "object")) {
      throw Error("Column needs a valid manager!");
    }
    this.manager = f.manager;
    this.key = f.key + "";
    if(!this.key) {
      throw Error("Column needs a non-empty key!");
    }
    var g = "column key=" + this.key;
    if(this.manager.hasKey(this.key)) {
      throw Error("Duplicate column key!" + g);
    }
    this.name = f.name ? f.name + "" : "";
    this.title = f.title ? f.title + "" : "";
    this.noName = !!f.noName;
    this.noTitle = !!f.noTitle;
    this.type = f.type + "" || null;
    this.defaultValue = f.defaultValue;
    this.inputOnCreate = !!f.inputOnCreate;
    this.width = (this.width = Number(f.width)) || 90;
    this.minW = (this.minW = Number(f.minW)) || 30;
    this.maxW = Number(f.maxW) || null;
    this.resizable = !!f.resizable;
    this.hidden = !!f.hidden;
    this.noSearch = !!f.noSearch;
    this.tooltipEnabled = !!f.tooltipEnabled;
    this.colClass = f.colClass + "" || null;
    this.style = f.style + "" || null;
    this.headerStyle = f.headerStyle + "" || null;
    if(f.parser && typeof f.parser != "function") {
      throw Error("Invalid parser!" + g);
    }
    this.parser = f.parser || null;
    if(f.validator && typeof f.validator != "function") {
      throw Error("Invalid validator!" + g);
    }
    this.validator = f.validator || null;
    if(f.renderer && typeof f.renderer != "function") {
      throw Error("Invalid renderer!" + g);
    }
    this.renderer = f.renderer || null;
    if(f.sumRenderer && typeof f.sumRenderer != "function") {
      throw Error("Invalid sum renderer!" + g);
    }
    this.sumRenderer = f.sumRenderer || null;
    if(f.editor && typeof f.editor != "object") {
      throw Error("Invalid editor!" + g);
    }
    this.editor = f.editor || null;
    this.sorter = f.sorter || null;
    this.filter = f.filter || null
  }
  var i = goog.getObjectByName("jx.events.EventDispatcher");
  goog.exportSymbol("jx.grid.Column", f);
  goog.inherits(f, i);
  i = f.prototype;
  i.show = function() {
    return this.hidden ? (this.hidden = !1, this.dispatchEvent({type:"hidden", value:!1}), !0) : !1
  };
  i.hide = function() {
    return!this.hidden ? (this.hidden = !0, this.dispatchEvent({type:"hidden", value:!0}), !0) : !1
  };
  i.setHidden = function(f) {
    return f ? this.hide() : this.show()
  };
  i.setWidth = function(f) {
    return(f = Number(f)) && this.width !== f ? (this.width = f, this.dispatchEvent({type:"width", value:f}), f) : !1
  };
  i.setRenderer = function(f) {
    if(this.renderer !== f) {
      if(f && typeof f != "function") {
        throw Error("Invalid renderer!column key=" + this.key);
      }
      this.renderer = f || null;
      this.dispatchEvent({type:"renderer", value:f})
    }
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "BaseModule.js"...');
jx.grid.BaseModule = {};
(function() {
  function f(f) {
    if(f) {
      if(f.mid != null) {
        this.mid = f.mid
      }
      if(f.grid) {
        this.grid = f.grid
      }
    }
    this._view = this._evtmgr = this._colmgr = this._datamgr = null;
    var e = this._defaultOptions && this._defaultOptions(f.grid), d = f && f.options;
    if(d || e) {
      e || (e = {}), d && $.extend(!0, e, d), this._options = e, this.dispatchEvent({type:"afteroption", options:e})
    }
    this._init && (this.dispatchEvent({type:"beforeinit"}), this._init(f), this.dispatchEvent({type:"afterinit"}));
    var c = this, a = this.grid;
    a && ["Dispose", "CreateCss", "CreateDynamicCss", "Render", "Keydown", "Keyup", "Keypress", "Mousein", "Mouseout", "Mouseenter", "Mouseleave", "Mousemove", "Mouseover", "Mousedown", "Mouseup", "Click", "Dblclick", "Resize", "ResizeWidth", "ResizeHeight", "Scroll", "ScrollH", "ScrollV"].forEach(function(b) {
      var d = "before" + b, b = "after" + b, k = "_" + d, e = "_" + b;
      c[k] && a.addEventListener(d, function(b) {
        return c[k](b)
      });
      c[e] && a.addEventListener(b, function(b) {
        return c[e](b)
      })
    });
    this._bindEvents && (this.dispatchEvent({type:"beforebindevents"}), this._bindEvents(f), this.dispatchEvent({type:"afterbindevents"}));
    this.dispatchEvent({type:"complete"})
  }
  var i = goog.getObjectByName("jx.events.EventDispatcher");
  goog.exportSymbol("jx.grid.BaseModule", f);
  goog.inherits(f, i);
  var i = f.prototype, h = i.dispose;
  i._beforeDispose = function() {
    this.dispose()
  };
  i.dispose = function() {
    delete this.grid;
    delete this._datamgr;
    delete this._colmgr;
    delete this._evtmgr;
    delete this._view;
    this.dispatchEvent({type:"beforedispose"});
    h.call(this)
  };
  i.getDataMgr = function() {
    return this._datamgr || (this._datamgr = this.grid.dataMgr)
  };
  i.getAllData = function() {
    return this.getDataMgr().all
  };
  i.getDataList = function() {
    return this.getDataMgr().datalist
  };
  i.getIdKey = function() {
    return this.getDataMgr().idKey
  };
  i.getColMgr = function() {
    return this._colmgr || (this._colmgr = this.grid.colDefMgr)
  };
  i.getColumns = function() {
    return this.getColMgr().get()
  };
  i.getEventMgr = function() {
    return this._evtmgr || (this._evtmgr = this.grid.event)
  };
  i.getView = function() {
    return this._view || (this._view = this.grid.view)
  };
  i.getHeader = function() {
    return this.grid.header
  };
  i.bindGridEvent = function() {
    var f = this.getEventMgr();
    return f.bind.apply(f, arguments)
  };
  i.triggerGridEvent = function() {
    var f = this.getEventMgr();
    return f.trigger.apply(f, arguments)
  };
  i.toCssStyle = function(f, e, d) {
    var c = [];
    d || (f = "#" + this.grid.mid + " " + f);
    if(typeof e != "string") {
      var a, d = "";
      e.hasOwnProperty("_prepend") && (e._prepend && c.push(e._prepend), delete e._prepend);
      e.hasOwnProperty("_append") && (e._append && (d = ";" + e._append), delete e._append);
      for(a in e) {
        c.push(a + ":" + e[a])
      }
      c = c.join(";") + d
    }
    return f + "{" + c + "}"
  };
  i.toCssStyles = function(f, e, d) {
    var f = f || [], c;
    for(c in e) {
      f.push(this.toCssStyle(c, e[c], d))
    }
    return f
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "DataManager.js"...');
jx.data = {};
jx.data.DataManager = {};
(function() {
  function f(d) {
    this.mid = d.mid;
    this.grid = d.grid;
    this.grid.dataMgr = this;
    this.all = [];
    this.datalist = [];
    this.failed = [];
    this._options = i._extend({idKey:void 0, idColKeys:[], uniqueKeys:[]}, d.options);
    this._consts = {_auto:0, _given:1, _composite:2, _notReal:this.mid + "@NR" + h.random(1E4), _add:0, _addList:1, _update:2, _updateList:3, _remove:4, _removeList:5, unknown:0, number:1, string:2, "boolean":3, date:4, "enum":5};
    this._options.idKey != null ? (this._idMode = this._consts._given, this.idKey = this._options.idKey) : (this._idMode = this._options.idColKeys.length !== 0 ? this._consts._composite : this._consts._auto, this.idKey = "J@I" + this.mid + "@" + h.random(1E4));
    this._increment = 1;
    this._idToIdx = {};
    this._idToData = {};
    this._filters = [];
    this._history = [];
    this._redoHistory = [];
    this.uniqueMap = !1;
    this.__init(d)
  }
  var i = goog.getObjectByName("jx.grid"), h = goog.getObjectByName("jx.util"), g = goog.getObjectByName("jx.grid.Grid");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.data.DataManager", f);
  i._add("DataManager", f);
  f.getInstance = function(d) {
    return new f(d)
  };
  var e = f.prototype;
  e.__init = function(d) {
    var c = this.uniqueMap = {}, a = 0, b, j = this._options.uniqueKeys, k = !1;
    if(j && j.length) {
      k = !0;
      for(b = j.length;a < b;a++) {
        c[j[a]] = {}
      }
    }
    var j = this.grid.colDefMgr.getAll(), e, a = 0;
    for(b = j.length;a < b;a++) {
      e = j[a], e.unique && (k = !0, c[e.key] = {})
    }
    if(!k) {
      this.uniqueMap = !1
    }
    this.bindEvents();
    this.set(d.datalist)
  };
  e.bindEvents = function() {
    this.grid.event.bind({onDestroy:this._destroy, keydownCanvas:this._keydownCanvas}, this)
  };
  e._destroy = function() {
    this.grid.log("destroying DataManager instance...", g.V_INIT);
    this.cleanList(this.all);
    i._destroy(this, {name:"DataManager", path:"dataMgr", property:"all _idMode _increment idKey _sorter", map:"_consts _idToIdx _idToData _options", array:"datalist failed _history _redoHistory _filters"})
  };
  e.addUniqueIndex = function(d, c, a) {
    if(!a.hasOwnProperty(c)) {
      return this.grid.error("KEY_UNDEFINED", c)
    }
    var b = a[c];
    if(b == null || b === "") {
      return this.grid.error("BAD_NULL", c)
    }
    if(d.hasOwnProperty(b)) {
      return d[b] === a ? !1 : this.grid.error("DUP_ENTRY", b, c)
    }
    d[b] = a;
    return!0
  };
  e.addUniqueIndices = function(d, c, a) {
    var b, j = a.length, k = [], e, f;
    for(b = 0;b < j;b++) {
      if(f = a[b]) {
        if(e = this.addUniqueIndex(d, c, f)) {
          if(e instanceof Error) {
            return this.removeUniqueIndices(d, c, k), e
          }
          k.push(d[f[c]] = f)
        }
      }
    }
    return k.length > 0
  };
  e.updateUniqueIndex = function(d, c, a, b, j) {
    if(b.hasOwnProperty(c)) {
      if(!j.hasOwnProperty(c) || !a.hasOwnProperty(c)) {
        return this.grid.error("KEY_UNDEFINED", c)
      }
      if(!d.hasOwnProperty(j = j[c])) {
        return this.grid.error("KEY_NOT_FOUND", j, c)
      }
      b = b[c];
      if(b == null || b === "") {
        return this.grid.error("BAD_NULL", c)
      }
      if(d.hasOwnProperty(b)) {
        return d[b] === a ? !1 : this.grid.error("DUP_ENTRY", b, c)
      }
      d[b] = a;
      delete d[j];
      return j
    }
    return!1
  };
  e.updateUniqueIndices = function(d, c, a, b, j, k) {
    if(k !== !0) {
      if(h.isEmptyObj(d) || h.isEmptyString(c) || h.isEmptyArray(a) || h.isEmptyArray(b) || h.isEmptyArray(j)) {
        return!1
      }
      if(a.length !== b.length || a.length !== j.length) {
        return this.grid.error("LENGTH_NOT_EQUAL")
      }
    }
    for(var k = 0, e = a.length, f, g, i, o = [], m = [], n = [], q, r;k < e;k++) {
      if(!h.isNull(f = a[k])) {
        if((i = b[k]).hasOwnProperty(c)) {
          g = j[k];
          if(!g.hasOwnProperty(c) || !f.hasOwnProperty(c)) {
            return this.updateUniqueIndices(d, c, o, n, m), this.grid.error("KEY_UNDEFINED", c)
          }
          if(!d.hasOwnProperty(r = g[c])) {
            return this.updateUniqueIndices(d, c, o, n, m), this.grid.error("KEY_NOT_FOUND", r, c)
          }
          if(h.isEmptyString(q = i[c])) {
            return this.updateUniqueIndices(d, c, o, n, m), this.grid.error("BAD_NULL", c)
          }
          if(d.hasOwnProperty(q)) {
            if(d[q] === f) {
              continue
            }
            this.updateUniqueIndices(d, c, o, n, m);
            return this.grid.error("DUP_ENTRY", q, c)
          }
          d[q] = f;
          delete d[r];
          o.push(f);
          m.push(i);
          n.push(g)
        }
      }
    }
    return!o.length ? !1 : {datalist:o, changes:m, befores:n}
  };
  e.removeUniqueIndex = function(d, c, a) {
    var b;
    a.hasOwnProperty(c) && d.hasOwnProperty(b = a[c]) && delete d[b]
  };
  e.removeUniqueIndices = function(d, c, a, b) {
    if(!(b !== !0 && (h.isEmptyObj(d) || h.isEmptyString(c) || h.isEmptyArray(a)))) {
      for(var j = a.length, k, e, b = 0;b < j;b++) {
        e = a[b], e.hasOwnProperty(c) && d.hasOwnProperty(k = e[c]) && delete d[k]
      }
    }
  };
  e.addToUniqueMap = function(d) {
    if(this.uniqueMap) {
      var c = [], a, b = this.uniqueMap, j;
      for(a in b) {
        if(b.hasOwnProperty(a) && (j = this.addUniqueIndex(b[a], a, d))) {
          if(j instanceof Error) {
            a = 0;
            for(var k = c.length;a < k;a++) {
              this.removeUniqueIndex(b[c[a]], c[a], d)
            }
            return j
          }
          c.push(a)
        }
      }
      return c.length > 0
    }
    return!1
  };
  e.addListToUniqueMap = function(d) {
    if(this.uniqueMap) {
      var c = this.uniqueMap, a = [], b, j;
      for(b in c) {
        if(c.hasOwnProperty(b) && (j = this.addUniqueIndices(c[b], b, d))) {
          if(j instanceof Error) {
            b = 0;
            for(var k = a.length;b < k;b++) {
              this.removeUniqueIndices(c[a[b]], a[b], d)
            }
            return j
          }
          a.push(b)
        }
      }
      return a.length > 0
    }
    return!1
  };
  e.updateUniqueMap = function(d, c, a) {
    if(this.uniqueMap) {
      var b, j = this.uniqueMap, k = [], e;
      for(b in j) {
        if(j.hasOwnProperty(b) && (e = this.updateUniqueIndex(j[b], b, d, c, a))) {
          if(e instanceof Error) {
            b = 0;
            for(var f = k.length;b < f;b++) {
              this.updateUniqueIndex(j[k[b]], k[b], d, a, c)
            }
            return e
          }
          k.push(b)
        }
      }
      return k.length > 0
    }
    return!1
  };
  e.updateListUniqueMap = function(d, c, a) {
    if(this.uniqueMap) {
      var b, j = this.uniqueMap, k = [], e;
      for(b in j) {
        if(j.hasOwnProperty(b) && (e = this.updateUniqueIndices(j[b], b, d, c, a))) {
          if(e instanceof Error) {
            b = 0;
            for(var f = k.length;b < f;b++) {
              this.updateUniqueIndices(j[k[b]], k[b], d, a, c)
            }
            return e
          }
          k.push(b)
        }
      }
      return k.length > 0
    }
    return!1
  };
  e.removeFromUniqueMap = function(d) {
    if(this.uniqueMap) {
      var c, a = this.uniqueMap;
      for(c in a) {
        a.hasOwnProperty(c) && this.removeUniqueIndex(a[c], c, d)
      }
    }
  };
  e.removeListFromUniqueMap = function(d) {
    if(this.uniqueMap) {
      var c, a = this.uniqueMap;
      for(c in a) {
        a.hasOwnProperty(c) && this.removeUniqueIndices(a[c], c, d)
      }
    }
  };
  e.addToIdMap = function(d) {
    var c = this.idKey;
    switch(this._idMode) {
      case this._consts._auto:
        d.hasOwnProperty(c) || (d[c] = this._increment++);
      case this._consts._given:
      ;
      case this._consts._composite:
        return this.addUniqueIndex(this._idToData, c, d)
    }
    return!1
  };
  e.addListToIdMap = function(d) {
    var c = this.idKey;
    switch(this._idMode) {
      case this._consts._auto:
        for(var a = 0, b, j = d.length;a < j;a++) {
          if(!(b = d[a]).hasOwnProperty(c)) {
            b[c] = this._increment++
          }
        }
      ;
      case this._consts._given:
      ;
      case this._consts._composite:
        return this.addUniqueIndices(this._idToData, c, d)
    }
    return!1
  };
  e.updateIdMap = function(d, c, a) {
    if(h.isNullOr(d, a) || h.isEmptyObj(c)) {
      return!1
    }
    var b = this.idKey;
    switch(this._idMode) {
      case this._consts._auto:
        if(c.hasOwnProperty(b)) {
          return this.grid.error("NOT_MODIFIABLE", b)
        }
      ;
      case this._consts._given:
        return this.updateUniqueIndex(this._idToData, b, d, c, a);
      case this._consts._composite:
        if(c.hasOwnProperty(b)) {
          return this.grid.error("NOT_MODIFIABLE", b)
        }
        for(var a = this._options.idColKeys, j = a.length, k = 0;k < j;k++) {
          if(c.hasOwnProperty(a[k])) {
            for(var e = "", f = 0, g, i, o = {}, m = {}, k = m[b] = d[b];f < j;f++) {
              if(g = a[f], c.hasOwnProperty(g)) {
                if(h.isEmptyString(i = c[g])) {
                  return this.grid.error("BAD_NULL", g)
                }
                e += "&" + i
              }else {
                e += "&" + d[g]
              }
            }
            d[b] = o[b] = e;
            if(k === e) {
              break
            }
            c = this.updateUniqueIndex(this._idToData, b, d, o, m);
            c instanceof Error && (d[b] = k);
            return c
          }
        }
    }
    return!1
  };
  e.updateListIdMap = function(d, c, a) {
    if(h.isEmptyArray(d) || h.isEmptyArray(c) || h.isEmptyArray(a)) {
      return!1
    }
    var b = this.idKey, j = d.length, e = 0;
    switch(this._idMode) {
      case this._consts._auto:
        for(;e < j;e++) {
          if(c[e].hasOwnProperty(b)) {
            return this.grid.error("NOT_MODIFIABLE", b)
          }
        }
      ;
      case this._consts._given:
        return this.updateUniqueIndices(this._idToData, b, d, c, a);
      case this._consts._composite:
        for(var l = this._idToData, f, g, i = this._options.idColKeys, o = i.length, m, a = [], n = [], q = [], r = [], s, u, v, w;e < j;e++) {
          f = d[e];
          g = c[e];
          if(g.hasOwnProperty(b)) {
            s = 0;
            for(j = a.length;s < j;s++) {
              n[s][b] = a[s]
            }
            return this.grid.error("NOT_MODIFIABLE", b)
          }
          for(s = 0;s < o;s++) {
            if(g.hasOwnProperty(i[s])) {
              m = "";
              for(u = 0;u < o;u++) {
                if(v = i[u], g.hasOwnProperty(v)) {
                  if(h.isEmptyString(w = g[v])) {
                    s = 0;
                    for(j = a.length;s < j;s++) {
                      n[s][b] = a[s]
                    }
                    return this.grid.error("BAD_NULL", v)
                  }
                  m += "&" + w
                }else {
                  m += "&" + f[v]
                }
              }
              f[b] !== m && (n.push(f), q.push({}), r.push({}), a.push(f[b]), f[b] = m)
            }
          }
        }
        if(!n.length) {
          break
        }
        d = this.updateUniqueIndices(l, b, n, q, r);
        if(d instanceof Error) {
          s = 0;
          for(j = a.length;s < j;s++) {
            n[s][b] = a[s]
          }
        }
        return d
    }
    return!1
  };
  e.removeFromIdMap = function(d) {
    var c = this.idKey, a = this._idToData, b;
    h.isNotNull(d) && d.hasOwnProperty(c) && a.hasOwnProperty(b = d[c]) && delete a[b]
  };
  e.removeListFromIdMap = function(d) {
    if(!h.isEmptyArray(d)) {
      for(var c = this.idKey, a = d.length, b = this._idToData, j, e, l = 0;l < a;l++) {
        e = d[l], e.hasOwnProperty(c) && b.hasOwnProperty(j = e[c]) && delete b[j]
      }
    }
  };
  e.fillTemp = function(d, c) {
    var a = this.grid.colDefMgr.getAll(), b = a.length, j, e, l = 0;
    if(c && c.isNew) {
      for(;l < b;l++) {
        e = a[l], j = e.key, e.nullOnCreate && d[j] == null && (d[j] = "J@H" + this._increment++)
      }
    }
  };
  e.fillTempList = function(d, c) {
    var a = this.grid.colDefMgr.getAll(), b = a.length, j = d.length, e, l, f = 0;
    if(c && c.isNew) {
      for(;f < b;f++) {
        if(l = a[f], e = l.key, l.nullOnCreate) {
          for(l = 0;j;l++) {
            d[l][e] = "J@H" + this._increment++
          }
        }
      }
    }
  };
  e.query = function(d) {
    if(typeof d === "string" && (d = $.trim(d), d.length)) {
      var c, a, b, j, e;
      c = d.toLowerCase();
      a = d.indexOf(" ");
      if(a !== -1 && (b = c.substring(0, a), c = c.indexOf(" where "), j = c > -1, a = $.trim(j ? d.substring(a + 1, c) : d.substring(a + 1)), a.length)) {
        switch(j && (e = $.trim(d.substring(c + 7))), b) {
          case "select":
            return this.executeSelect(a, e);
          case "insert":
            return this.executeInsert(a, e);
          case "update":
            return this.executeUpdate(a, e);
          case "delete":
            return this.executeDelete(a, e)
        }
      }
    }
  };
  e.parseWhere = function(d) {
    typeof d === "string" && $.trim(d)
  };
  e.executeSelect = function(d) {
    var d = h.split(d, /[\s,]+/), c = d.length, a = 0, b = {}, j = this.all, e = [];
    if(!c) {
      return e
    }
    for(;a < c;a++) {
      if(d[a] === "*") {
        break
      }
      b[d[a]] = !0
    }
    a = 0;
    for(c = j.length;a < c;a++) {
      e.push(h.clone(j[a], b))
    }
    return e
  };
  e.parse = function(d, c) {
    var a = this.grid.colDefMgr, b = a.getParser(), a = a.getNullOnCreate(), j, e = c && c.isNew;
    try {
      for(j in b) {
        if(b.hasOwnProperty(j) && (!e || !a.hasOwnProperty(j))) {
          d[j] = b[j](d[j], d)
        }
      }
    }catch(l) {
      return this.grid.error("PARSE_ERROR", d[j], j)
    }
    return!0
  };
  e.parseList = function(d, c) {
    var a = this.grid.colDefMgr, b = a.getParser(), a = a.getNullOnCreate(), j, e, l = c && c.isNew, f, g = d.length, h;
    try {
      for(j in b) {
        if(b.hasOwnProperty(j) && (!l || !a.hasOwnProperty(j))) {
          e = b[j];
          for(f = 0;f < g;f++) {
            h = d[f], h[j] = e(h[j], h)
          }
        }
      }
    }catch(i) {
      return this.grid.error("PARSE_ERROR", h[j], j)
    }
    return!0
  };
  e.validate = function(d, c) {
    var a = this.grid.colDefMgr, b = a.getValidator(), a = a.getNullOnCreate(), j, e, l, f, g, h = c && c.isNew;
    try {
      for(j in b) {
        if(b.hasOwnProperty(j) && (!h || !a.hasOwnProperty(j))) {
          if(d.hasOwnProperty(j) && (e = d[j]) != null ? (f = !1, l = typeof e == "string" ? e : e.toString(), g = !l) : (e = null, g = f = !0, l = ""), !b[j](e, d, l, f, g)) {
            return this.grid.error("WRONG_VALUE", l, j)
          }
        }
      }
    }catch(i) {
      return this.grid.error("WRONG_VALUE", l, j)
    }
    return!0
  };
  e.validateList = function(d, c) {
    var a = this.grid.colDefMgr, b = a.getValidator(), a = a.getNullOnCreate(), j, e, l = c && c.isNew, f, g = d.length, h, i, m, n, q;
    try {
      for(j in b) {
        if(b.hasOwnProperty(j) && (!l || !a.hasOwnProperty(j))) {
          e = b[j];
          for(f = 0;f < g;f++) {
            if(q = d[f], q.hasOwnProperty(j) && (h = q[j]) != null ? (m = !1, i = typeof h == "string" ? h : h.toString(), n = !i) : (h = null, n = m = !0, i = ""), !e(h, q, i, m, n)) {
              return this.grid.error("WRONG_VALUE", i, j)
            }
          }
        }
      }
    }catch(r) {
      return this.grid.error("WRONG_VALUE", i, j)
    }
    return!0
  };
  e.makeCompositeKey = function(d, c) {
    if(this._idMode === this._consts._composite && (c || !d.hasOwnProperty(this.idKey))) {
      for(var a = this._options.idColKeys, b = a.length, j = 0, e = "";j < b;j++) {
        e += "&" + d[a[j]]
      }
      d[this.idKey] = e
    }
  };
  e.makeCompositeKeyList = function(d, c) {
    if(this._idMode === this._consts._composite) {
      var a = this.idKey, b = d.length, j = this._options.idColKeys, e = j.length, l, f = 0, g, h;
      if(c) {
        for(;f < b;f++) {
          l = d[f];
          h = "";
          for(g = 0;g < e;g++) {
            h += "&" + l[j[g]]
          }
          l[a] = h
        }
      }else {
        for(;f < b;f++) {
          if(!(l = d[f]).hasOwnProperty(a)) {
            h = "";
            for(g = 0;g < e;g++) {
              h += "&" + l[j[g]]
            }
            l[a] = h
          }
        }
      }
    }
  };
  e.map = function(d) {
    if(d) {
      var c = this._idToData, a = this.idKey, b;
      this.makeCompositeKey(d);
      if(d.hasOwnProperty(a) && c.hasOwnProperty(b = d[a])) {
        return c[b]
      }
    }
    return null
  };
  e.mapList = function(d) {
    if(d && d.length) {
      this.makeCompositeKeyList(d);
      for(var c = [], a = [], b = this.idKey, j = this._idToData, e = d.length, l = 0, f, g;l < e;l++) {
        (f = d[l]).hasOwnProperty(b) && j.hasOwnProperty(g = f[b]) ? c.push(j[g]) : a.push(f)
      }
      return{mapped:c, unmapped:a}
    }
    return{mapped:[], unmapped:[]}
  };
  e.getById = function(d) {
    return d != null && this._idToData.hasOwnProperty(d) ? this._idToData[d] : null
  };
  e.getByIdx = function(d) {
    return d != null && this.datalist.hasOwnProperty(d) ? this.datalist[d] : null
  };
  e.getByNode = function(d) {
    return this.getById(this.getIdByNode(d))
  };
  e.getIdx = function(d) {
    return this.getIdxById(this.getId(d))
  };
  e.getIdxById = function(d) {
    return d != null && this._idToIdx.hasOwnProperty(d) ? this._idToIdx[d] : -1
  };
  e.getIdxByNode = function(d) {
    return this.getIdxById(this.getIdByNode(d))
  };
  e.getId = function(d) {
    return d && d.hasOwnProperty(this.idKey) ? d[this.idKey] : null
  };
  e.getIdByIdx = function(d) {
    return this.getId(this.getByIdx(d))
  };
  e.getIdByNode = function(d) {
    return d ? d.getAttribute("i") : null
  };
  e._reidxFrom = function(d) {
    for(var c = this.datalist, a = c.length, b = this.idKey, j = this._idToIdx, d = d || 0;d < a;d++) {
      j[c[d][b]] = d
    }
  };
  e._reidx = function() {
    this._idToIdx = {};
    this._reidxFrom()
  };
  e.has = function(d) {
    return this.hasById(this.getId(d))
  };
  e.hasById = function(d) {
    return d == null ? !1 : this._idToIdx.hasOwnProperty(d)
  };
  e.contains = function(d) {
    return this.containsById(this.getId(d))
  };
  e.containsById = function(d) {
    return d == null ? !1 : this._idToData.hasOwnProperty(d)
  };
  e.set = function(d) {
    var c = this.all;
    if(c === d || !c.length && (!d || !d.length)) {
      return!1
    }
    var d = d || [], a = this.grid.event;
    a.trigger("onBeforeDataChange", !1, !0);
    a.trigger("onBeforeSetDatalist", [c, d], !0);
    this.cleanList(c);
    if(this.uniqueMap) {
      var b, c = this.uniqueMap;
      for(b in c) {
        c.hasOwnProperty(b) && (c[b] = {})
      }
    }
    this._idToData = {};
    this._history.length = 0;
    this._redoHistory.length = 0;
    if(d.length) {
      if((b = this.parseList(d)) instanceof Error) {
        return b
      }
      if((b = this.validateList(d)) instanceof Error) {
        return b
      }
      if((b = this.addListToUniqueMap(d)) instanceof Error) {
        return b
      }
      this.makeCompositeKeyList(d, !0);
      if((b = this.addListToIdMap(d)) instanceof Error) {
        return b
      }
    }
    this.all = d;
    a.trigger("onAfterSetDatalist", [d], !0);
    a.trigger("onDataChange", !1, !0);
    this.refresh();
    return!0
  };
  e.add = function(d, c) {
    if(!d || this.map(d)) {
      return!1
    }
    var a = this.grid.event;
    a.trigger("onBeforeDataChange", !1, !0);
    this.fillTemp(d, c);
    var b;
    if((b = this.parse(d, c)) instanceof Error) {
      return b
    }
    if((b = this.validate(d, c)) instanceof Error) {
      return b
    }
    if((b = this.addToUniqueMap(d)) instanceof Error) {
      return b
    }
    if((b = this.addToIdMap(d)) instanceof Error) {
      return b
    }
    this.all.push(d);
    if(!c || c.undo !== !0) {
      this._history.push({_action:this._consts._add, _target:d}), this._redoHistory.length = 0
    }
    a.trigger("onAddDatarow", [d, c], !0);
    a.trigger("onDataChange", !1, !0);
    (!c || c.noRefresh !== !0) && this.refresh(c);
    return!0
  };
  e.addList = function(d, c) {
    if(d && d.length) {
      var a = this.mapList(d).unmapped;
      if(!a.length) {
        return!1
      }
      this.grid.event.trigger("onBeforeDataChange", !1, !0);
      this.fillTempList(d, c);
      var b;
      if((b = this.parseList(a, c)) instanceof Error) {
        return b
      }
      if((b = this.validateList(a, c)) instanceof Error) {
        return b
      }
      if((b = this.addListToUniqueMap(a)) instanceof Error) {
        return b
      }
      if((b = this.addListToIdMap(a)) instanceof Error) {
        return b
      }
      this.all.pushList(a);
      if(!c || c.undo !== !0) {
        this._history.push({_action:this._consts._addList, _target:a}), this._redoHistory.length = 0
      }
      this.grid.event.trigger("onAddDatalist", [a, c], !0);
      this.grid.event.trigger("onDataChange", !1, !0);
      (!c || c.noRefresh !== !0) && this.refresh(c);
      return!0
    }
    return!1
  };
  e.updateByKey = function(d, c, a, b) {
    var j = {};
    j[c] = a;
    return this.update(d, j, b)
  };
  e.update = function(d, c, a) {
    if(!d || !c) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange", !1, !0);
    this.grid.event.trigger("onBeforeUpdateDatarow", [d, c], !0);
    var b = {}, j;
    for(j in c) {
      c.hasOwnProperty(j) && (d[j] === c[j] ? delete c[j] : (b[j] = d[j], d[j] = c[j]))
    }
    if(h.isEmptyObj(b)) {
      return!1
    }
    if((j = this.parse(d, a)) instanceof Error) {
      return this._rollback(d, b), j
    }
    if((j = this.validate(d, a)) instanceof Error) {
      return this._rollback(d, b), j
    }
    if((j = this.updateUniqueMap(d, c, b)) instanceof Error) {
      return this._rollback(d, b), j
    }
    if((j = this.updateIdMap(d, c, b)) instanceof Error) {
      return this._rollback(d, b), j
    }
    j !== !1 && this.grid.event.trigger("onIdChange", [d, j, d[this.idKey]], !0);
    if(!a || a.undo !== !0) {
      this._history.push({_action:this._consts._update, _target:d, _before:b, _change:c}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onUpdateDatarow", [d, c, b, a], !0);
    this.grid.event.trigger("onDataChange", !1, !0);
    (!a || a.noRefresh !== !0) && this.refresh(a);
    return!0
  };
  e.updateList = function(d, c) {
    if(!d || !d.length) {
      return!1
    }
    var a = this.grid.event;
    a.trigger("onBeforeDataChange", !1, !0);
    a.trigger("onBeforeUpdateDatalist", [d], !0);
    for(var b = [], j = [], e = [], l, f, g, i = d.length, o = 0, m;o < i;o++) {
      f = {};
      l = d[o].datarow;
      g = d[o].change;
      for(m in g) {
        g.hasOwnProperty(m) && (l[m] === g[m] ? delete g[m] : (f[m] = l[m], l[m] = g[m]))
      }
      h.isNotEmptyObj(f) && (b.push(l), j.push(f), e.push(g))
    }
    if(!b.length) {
      return!1
    }
    if((l = this.parseList(b, c)) instanceof Error) {
      return this._rollbackList(b, j), l
    }
    if((l = this.validateList(b, c)) instanceof Error) {
      return this._rollbackList(b, j), l
    }
    if((l = this.updateListUniqueMap(b, e, j)) instanceof Error) {
      return this._rollbackList(b, j), l
    }
    if((l = this.updateListIdMap(b, e, j)) instanceof Error) {
      return this._rollbackList(b, j), l
    }
    l !== !1 && a.trigger("onIdListChange", [l.list, l.befores, this.idKey], !0);
    if(!c || c.undo !== !0) {
      this._history.push({_action:this._consts._updateList, _target:b, _before:j, _change:e}), this._redoHistory.length = 0
    }
    a.trigger("onUpdateDatalist", [b, e, j, c], !0);
    a.trigger("onDataChange", !1, !0);
    (!c || c.noRefresh !== !0) && this.refresh(c);
    return!0
  };
  e._rollback = function(d, c) {
    for(var a in c) {
      c.hasOwnProperty(a) && (d[a] = c[a])
    }
  };
  e._rollbackList = function(d, c) {
    for(var a = d.length, b = 0, j, e, l;b < a;b++) {
      for(l in j = d[b], e = c[b], e) {
        e.hasOwnProperty(l) && (j[l] = e[l])
      }
    }
  };
  e.remove = function(d, c) {
    var a = this.map(d);
    if(a) {
      this.grid.event.trigger("onBeforeDataChange", !1, !0);
      this.removeFromIdMap(a);
      this.removeFromUniqueMap(a);
      this.all.remove(a);
      this.removeId(a);
      if(!c || c.undo !== !0) {
        this._history.push({_action:this._consts._remove, _target:a}), this._redoHistory.length = 0
      }
      this.grid.event.trigger("onRemoveDatarow", [a, c], !0);
      this.grid.event.trigger("onDataChange", !1, !0);
      (!c || c.noRefresh !== !0) && this.refresh(c);
      return!0
    }
    return!1
  };
  e.removeList = function(d, c) {
    if(d && d.length) {
      var a = this.mapList(d).mapped;
      if(a.length) {
        this.grid.event.trigger("onBeforeDataChange", !1, !0);
        this.removeListFromIdMap(a);
        this.removeListFromUniqueMap(a);
        this.all.removeList(a);
        this.cleanList(a);
        if(!c || c.undo !== !0) {
          this._history.push({_action:this._consts._removeList, _target:a}), this._redoHistory.length = 0
        }
        this.grid.event.trigger("onRemoveDatalist", [a, c], !0);
        this.grid.event.trigger("onDataChange", !1, !0);
        (!c || c.noRefresh !== !0) && this.refresh(c);
        return!0
      }
    }
    return!1
  };
  e._keydownCanvas = function(d) {
    if(d.ctrlKey) {
      switch(d.which) {
        case "Z".charCodeAt(0):
          this.undo();
          break;
        case "Y".charCodeAt(0):
          this.redo()
      }
    }
  };
  e.undo = function() {
    if(!this._history.length) {
      return!1
    }
    var d = this._history.pop();
    this._redoHistory.push(d);
    var c = d._target, a = d._before;
    switch(d._action) {
      case this._consts._add:
        return this.remove(c, {undo:!0});
      case this._consts._addList:
        return this.removeList(c, {undo:!0});
      case this._consts._update:
        return this.update(c, a, {undo:!0});
      case this._consts._updateList:
        for(var d = [], b = 0, j = c.length;b < j;b++) {
          d.push({datarow:c[b], change:a[b]})
        }
        return this.updateList(d, {undo:!0});
      case this._consts._remove:
        return this.add(c, {undo:!0});
      case this._consts._removeList:
        return this.addList(c, {undo:!0})
    }
  };
  e.redo = function() {
    if(!this._redoHistory.length) {
      return!1
    }
    var d = this._redoHistory.pop();
    this._history.push(d);
    var c = d._target, a = d._change;
    switch(d._action) {
      case this._consts._add:
        return this.add(c, {undo:!0});
      case this._consts._addList:
        return this.addList(c, {undo:!0});
      case this._consts._update:
        return this.update(c, a, {undo:!0});
      case this._consts._updateList:
        for(var d = [], b = 0, j = c.length;b < j;b++) {
          d.push({datarow:c[b], change:a[b]})
        }
        return this.updateList(d, {undo:!0});
      case this._consts._remove:
        return this.remove(c, {undo:!0});
      case this._consts._removeList:
        return this.removeList(c, {undo:!0})
    }
  };
  e.equals = function(d, c) {
    if(d && c) {
      if(d === c) {
        return!0
      }
      this._idMode === this._consts._composite && (this.makeCompositeKey(d), this.makeCompositeKey(c));
      var a = this.idKey, b = d[a];
      return b == null ? !1 : b === c[a]
    }
    return!1
  };
  e.getReal = function() {
    var d = this._consts._notReal;
    return this.all.filter(function(c) {
      return!c.hasOwnProperty(d)
    })
  };
  e.filterReal = function(d) {
    var c = this._consts._notReal;
    return d.filter(function(a) {
      return!a.hasOwnProperty(c)
    })
  };
  e.isReal = function(d) {
    return d && !d.hasOwnProperty(this._consts._notReal)
  };
  e.dropNonReal = function(d) {
    if(d && d.length) {
      for(var c = this._consts._notReal, a = d.length - 1;a >= 0;a--) {
        d[a].hasOwnProperty(c) && (delete d[a][c], d.removeAt(a))
      }
    }
  };
  e.removeIdCol = function(d) {
    if(!(this._idMode === this._consts._given || !d || !d.length)) {
      for(var c = this.idKey, a = 0, b = d.length;a < b;a++) {
        d[a].hasOwnProperty(c) && delete d[a][c]
      }
    }
  };
  e.removeId = function(d) {
    d && this._idMode !== this._consts._given && d.hasOwnProperty(this.idKey) && delete d[this.idKey]
  };
  e.cleanList = function(d) {
    d && d.length && (this.removeIdCol(d), this.dropNonReal(d))
  };
  e.setSorter = function(d) {
    this.grid.event.trigger("onChangeSorter", [this._sorter, d], !0);
    this._sorter = d
  };
  e._sort = function(d) {
    d ? this.setSorter(d) : d = this._sorter;
    if(d) {
      var c = this.all, a = this.grid.event, b = [c];
      a.trigger("onBeforeSort", b, !0);
      d.comparator ? (c.sort(d.comparator), d.desc && c.reverse()) : d.lexi && this.constructor._lexi(c, d.lexi, d.desc);
      a.trigger("onAfterSort", b, !0)
    }
  };
  e.addFilter = function(d) {
    this._filters.push(d);
    this.refresh()
  };
  e.removeFilter = function(d) {
    var c = this._filters.length;
    this._filters.remove(d);
    c !== this._filters.length && this.refresh()
  };
  e._filter = function() {
    var d = this.datalist, c = this.failed, a = 0, b = this._filters.length, j, e;
    this.grid.event.trigger("onBeforeFilter", [d, c], !0);
    d.length = 0;
    d.pushList(this.all);
    for(c.length = 0;a < b;a++) {
      j = this._filters[a];
      for(e = d.length - 1;e >= 0;e--) {
        j(d[e]) || (c.push(d[e]), d.removeAt(e))
      }
    }
    this.grid.event.trigger("onFilter", [d, c], !0);
    this.grid.event.trigger("onAfterFilter", [d, c], !0)
  };
  e._finish = function(d) {
    this._reidx();
    this.grid.event.trigger("onAfterRefresh", [d], !0)
  };
  e.refresh = function(d) {
    this.grid.event.trigger("onBeforeRefresh", !1, !0);
    d ? d.noSort || this._sort(d.sorter) : this._sort();
    (!d || !d.noFilter) && this._filter();
    this._finish(d)
  };
  e.exportRowToArray = function(d, c) {
    if(!(d in this.datalist)) {
      return null
    }
    c || (c = this.grid.colDefMgr.getKeys());
    for(var a = this.datalist[d], b = [], j, e = 0, l = c.length;e < l;e++) {
      j = c[e], b.push(j in a ? a[j] : null)
    }
    return b
  };
  e.exportToArray = function(d, c, a, b) {
    for(var d = d || this.grid.colDefMgr.getKeys(), b = b || this.datalist.slice(c, a), a = [], j, e, l = 0, f = b.length, g, h = d.length;l < f;l++) {
      j = b[l];
      g = 0;
      for(c = [];g < h;g++) {
        e = d[g], c.push(e in j ? j[e] : null)
      }
      a.push(c)
    }
    return a
  };
  e.select = function(d, c, a, b) {
    for(var d = d || this.grid.colDefMgr.getKeys(), b = b || this.datalist.slice(c, a), a = [], j, e, l = 0, f = b.length, g, h = d.length;l < f;l++) {
      j = b[l];
      g = 0;
      for(c = {};g < h;g++) {
        e = d[g], c[e] = j.hasOwnProperty(e) && j[e] != null ? j[e] : null
      }
      a.push(c)
    }
    return a
  };
  e.slice = function(d, c) {
    return this.select(null, d, c)
  };
  f._lexi = function(d, c, a) {
    var b = Object.prototype.toString;
    Object.prototype.toString = typeof c == "function" ? c : function() {
      return this[c]
    };
    d.sort();
    Object.prototype.toString = b;
    a && d.reverse()
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "EventManager.js"...');
jx.grid.EventManager = {};
(function() {
  function f(e) {
    this.mid = e.mid;
    this.grid = e.grid;
    e.grid.event = this;
    this._map = {}
  }
  var i = goog.getObjectByName("jx.grid"), h = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.EventManager", f);
  f.getInstance = function(e) {
    return new f(e)
  };
  var g = f.prototype;
  g.destroy = function() {
    var e, d = this._map;
    for(e in d) {
      d.hasOwnProperty(e) && i._deleteArray(d, e)
    }
    i._destroy(this, {name:"EventManager", path:"event", map:"_map"})
  };
  g.register = function(e, d, c) {
    if(h.isString(e)) {
      this._parseAndAdd(e, d, c)
    }else {
      if(h.isNotNull(e.e)) {
        this._parseAndAdd(e.e, e.f, e.t)
      }else {
        for(var a, d = e.length, b;a < d;a++) {
          h.isNotNull(b = e[a]) && this._parseAndAdd(b.e, b.f, b.t)
        }
      }
    }
  };
  g.bind = function(e, d, c) {
    if(h.isString(e)) {
      this._parseAndAdd(e, d, c)
    }else {
      for(var a in e) {
        e.hasOwnProperty(a) && this._parseAndAdd(a, e[a], d)
      }
    }
  };
  g._parseAndAdd = function(e, d, c) {
    h.isNull(c) && (c = window);
    var e = h.split(e), a = e.length, b = 0;
    if(h.isFunction(d)) {
      for(;b < a;b++) {
        this._addHandler(e[b], d, c)
      }
    }else {
      if(h.isString(d)) {
        for(var d = h.split(d), j = d.length, k, l;b < a;b++) {
          k = e[b];
          for(l = 0;l < j;l++) {
            this._addHandler(k, c[d[l]], c)
          }
        }
      }else {
        for(j = d.length;b < a;b++) {
          k = e[b];
          for(l = 0;l < j;l++) {
            this._addHandler(k, d[l], c)
          }
        }
      }
    }
  };
  g._addHandler = function(e, d, c) {
    this._map.hasOwnProperty(e) || (this._map[e] = []);
    this._map[e].push({fn:d, target:c})
  };
  g.unregister = function(e, d) {
    var c = this._map;
    if(c.hasOwnProperty(e)) {
      var a = c[e];
      if(h.isNull(d)) {
        a.length = 0, delete c[e]
      }else {
        for(var b = 0, j = a.length;b < j;b++) {
          if(a[b].fn === d) {
            a.removeAt(b);
            a.length === 0 && delete c[e];
            break
          }
        }
      }
    }
  };
  g.trigger = function(e, d, c, a) {
    this.grid.log("firing event=" + e, 3);
    var b = this._map;
    if(b.hasOwnProperty(e)) {
      var b = b[e], j = b.length;
      if(j) {
        if(this.grid.log(j + " handlers registered for event=" + e, 4), e = 0, c) {
          if(d && d.length) {
            for(;e < j;e++) {
              c = b[e], c.fn.apply(c.target, d)
            }
          }else {
            for(;e < j;e++) {
              c = b[e], c.fn.call(c.target)
            }
          }
        }else {
          a = a || [];
          if(d && d.length) {
            for(;e < j;e++) {
              c = b[e], a.push(c.fn.apply(c.target, d))
            }
          }else {
            for(;e < j;e++) {
              c = b[e], a.push(c.fn.call(c.target))
            }
          }
          return a
        }
      }else {
        this.grid.log("no handlers registered for event=" + e, 4)
      }
    }else {
      this.grid.log("no handlers registered for event=" + e, 4)
    }
  };
  g.triggerMultiple = function(e, d, c) {
    var e = e.split(","), a = 0, b = e.length;
    if(c) {
      for(c = [];a < b;a++) {
        this.trigger(e[a], d, !1, c)
      }
      return c
    }else {
      for(;a < b;a++) {
        this.trigger(e[a], d, !0)
      }
    }
  };
  g.triggerInvalid = function(e, d) {
    var c = this.trigger(e, d);
    return c && c.some(function(a) {
      return a === !1
    })
  };
  g.sendToBack = function(e, d) {
    for(var c = this._map[e], a = c.length, b, j = -1, k = 0;k < a;k++) {
      if(c[k].fn === d) {
        j = k;
        b = c[k];
        break
      }
    }
    j > -1 && (c.removeAt(k), c.push(b))
  };
  g.sendToFront = function(e, d) {
    for(var c = this._map[e], a = c.length, b, j = -1, k = 0;k < a;k++) {
      if(c[k].fn === d) {
        j = k;
        b = c[k];
        break
      }
    }
    j > -1 && (c.removeAt(k), c.unshift(b))
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "Tree.js"...');
jx.struct = {};
jx.struct.TreeNode = {};
jx.struct.Tree = {};
var TreeNode = {}, Tree = {};
(function() {
  function f(e) {
    this.tree = e.tree;
    this.data = e.data;
    this.nodeId = e.nodeId;
    this.childrenMap = {};
    this.children = []
  }
  function i(e) {
    this.list = e.list;
    this._options = JGM._extend({nodeKey:"nodeId", parentKey:"parentId"}, e.options);
    this.map = {};
    this.root = new f({tree:this});
    this.infants = {}
  }
  var h = goog.getObjectByName("jx.util");
  goog.exportSymbol("jx.struct.TreeNode", f);
  goog.exportSymbol("jx.struct.Tree", i);
  goog.exportSymbol("TreeNode", f);
  goog.exportSymbol("Tree", i);
  f.getInstance = function(e) {
    return new f(e)
  };
  var g = f.prototype;
  g.destroy = function() {
    this.detach();
    delete this.tree;
    delete this.data;
    delete this.nodeId;
    delete this.childrenMap;
    delete this.children
  };
  g.destroyCompletely = function() {
    this.detachCompletely();
    delete this.tree;
    delete this.data;
    delete this.nodeId;
    delete this.childrenMap;
    delete this.children
  };
  g.destroyDown = function() {
    h.isNotNull(this.parent) && this.parent.removeChild(this);
    this.traverse({post:!0, fn:function() {
      this.destroy()
    }})
  };
  g.detach = function() {
    delete this.parent;
    delete this.level;
    this.children.length = 0;
    this.childrenMap = {}
  };
  g.detachCompletely = function() {
    h.isNotNull(this.parent) && this.parent.removeChild(this);
    this.removeAllChildren();
    delete this.parent;
    delete this.level
  };
  g.detachDown = function() {
    h.isNotNull(this.parent) && this.parent.removeChild(this);
    this.traverse({post:!0, fn:function() {
      this.detach()
    }})
  };
  g.isRoot = function() {
    return h.isNull(this.parent)
  };
  g.getRoot = function() {
  };
  g.isLeaf = function() {
    return this.children.length === 0
  };
  g.setParent = function(e) {
    if(this.parent !== e) {
      h.isNotNull(this.parent) && this.parent.removeChild(this), this.parent = e, delete this.level, h.isNotNull(e) && e.addChild(this)
    }
  };
  g.hasChild = function(e) {
    return this.childrenMap.hasOwnProperty(e.nodeId)
  };
  g.addChild = function(e) {
    this.hasChild(e) || (this.children.push(e), this.childrenMap[e.nodeId] = this.children.length - 1, e.setParent(this))
  };
  g.addChildAt = function(e, d) {
    var c;
    if(this.hasChild(d)) {
      c = this.childrenMap[d.nodeId];
      if(c === e) {
        return
      }
      this.children.removeAt(c)
    }
    this.children.addAt(e, d);
    h.isNotNull(c) && c < e ? this.resetChildIdx(c) : this.resetChildIdx(e);
    d.setParent(this)
  };
  g.removeChild = function(e) {
    if(this.hasChild(e)) {
      var d = this.childrenMap[e.nodeId];
      this.children.removeAt(d);
      delete this.childrenMap[e.nodeId];
      this.resetChildIdx(d);
      delete e.parent;
      delete e.level
    }
  };
  g.removeChildAt = function(e) {
    var d = this.children[e];
    this.children.removeAt(e);
    delete this.childrenMap[d.nodeId];
    this.resetChildIdx(e);
    delete d.parent;
    delete d.level
  };
  g.resetChildIdx = function(e) {
    h.isNull(e) && (e = 0);
    for(var d = this.children, c = d.length, a = this.childrenMap;e < c;e++) {
      a[d[e].nodeId] = e
    }
  };
  g.removeAllChildren = function() {
    for(var e = 0, d = this.children, c = d.length;e < c;e++) {
      delete d[e].parent, delete d[e].level
    }
    d.length = 0;
    this.childrenMap = {}
  };
  g.getSiblings = function() {
    if(this.isRoot()) {
      return[]
    }
    var e = this.parent.children.slice();
    e.removeAt(this.parent.getChildIdx(this));
    return e
  };
  g.getChildIdx = function(e) {
    return this.childrenMap[e.nodeId]
  };
  g.getIdx = function() {
    return this.isRoot() ? -1 : this.parent.getChildIdx(this)
  };
  g.getPath = function() {
    return this.traverse({res:[], up:!0, post:!0, fn:function(e) {
      this.isRoot() || e.res.push(this.getIdx())
    }}).res
  };
  g.getAncestors = function() {
    var e = {res:[], up:!0, post:!0, fn:function(d) {
      d.res.push(this)
    }};
    this.traverse(e);
    e.res.pop();
    return e.res
  };
  g.getDescendents = function() {
    var e = {res:[], fn:function(d) {
      d.res.push(this)
    }};
    this.traverse(e);
    e.res.shift();
    return e.res
  };
  g.getLevel = function() {
    return this.isRoot() ? this.level = -1 : this.level = this.parent.getLevel() + 1
  };
  g.find = function(e) {
    return this.traverse({fn:function(d) {
      if(this.data === e) {
        d.res = this, d.stop = !0
      }
    }}).res
  };
  g.traverse = function(e, d) {
    if(e.stop) {
      return e
    }
    if(e.up) {
      this.isRoot() ? this.callFn(e) : e.post ? (this.parent.traverse(e), this.callFn(e)) : (this.callFn(e), this.parent.traverse(e))
    }else {
      var c = 0, a = this.children, b = a.length;
      if(e.post) {
        for(;c < b;c++) {
          a[c].traverse(e, c)
        }
        this.callFn(e, d)
      }else {
        if(this.callFn(e, d), e.propagate === !1) {
          delete e.propagate
        }else {
          for(;!e.stop && c < b;c++) {
            a[c].traverse(e, c)
          }
        }
      }
    }
    return e
  };
  g.traverseChildren = function(e) {
    for(var d = 0, c = this.children, a = c.length;d < a;d++) {
      c[d].traverse(e, d)
    }
  };
  g.traverseParent = function(e) {
    h.isNotNull(this.parent) && this.parent.traverse(e)
  };
  g.callFn = function(e, d) {
    if(!e.stop) {
      h.isNull(e.target) ? h.callFn(this, e.fn, e, d) : (e.node = this, h.callFn(e.target, e.fn, e, d))
    }
  };
  i.getInstance = function(e) {
    return new i(e)
  };
  g = i.prototype;
  g.__init = function() {
    this.makeTree()
  };
  g.destroy = function() {
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
  g.detach = function() {
    this.root.detachDown();
    this.emptyInfants()
  };
  g.emptyInfants = function() {
    var e, d = this.infants;
    for(e in d) {
      if(d.hasOwnProperty(e)) {
        d[e].length = 0
      }
    }
    this.infants = {}
  };
  g.reattach = function(e) {
    this.detach();
    if(h.isNull(e)) {
      e = this.list
    }
    for(var d = this._options.nodeKey, c = this.map, a = e.length, b = 0;b < a;b++) {
      this.attachNode(c[e[b][d]])
    }
  };
  g.makeTree = function(e) {
    if(h.isNull(e)) {
      e = this.list
    }
    for(var d = 0, c = e.length;d < c;d++) {
      this.createNode(e[d])
    }
  };
  g.hasNode = function(e) {
    return h.isNotNull(e) && this.map.hasOwnProperty(e[this._options.nodeKey])
  };
  g.getNode = function(e) {
    return this.map[e[this._options.nodeKey]]
  };
  g.getNodeByNodeId = function(e) {
    return this.map[e]
  };
  g.createNode = function(e) {
    if(!this.hasNode()) {
      var d = e[this._options.nodeKey], e = new f({tree:this, data:e, nodeId:d});
      this.map[d] = e;
      this.attachNode(e);
      return e
    }
  };
  g.adoptInfants = function(e, d) {
    if(this.infants.hasOwnProperty(d)) {
      for(var c = this.infants[d], a = 0, b = c.length;a < b;a++) {
        e.addChild(c[a])
      }
      c.length = 0;
      delete this.infants[d]
    }
  };
  g.attachNode = function(e) {
    var d = e.nodeId, c = e.data[this._options.parentKey];
    this.adoptInfants(e, d);
    if(h.isNull(c) || c == d) {
      return this.root.addChild(e), !0
    }
    if(this.map.hasOwnProperty(c)) {
      return this.map[c].addChild(e), !0
    }
    this.addToInfants(e, c);
    return!1
  };
  g.changeNodeId = function(e, d, c) {
    if(d !== c) {
      delete this.map[d], this.map[c] = e, this.removeChildren(e), e.nodeId = e.data[this._options.nodeKey] = c, h.isNotNull(e.parent) && (e.parent.childrenMap[c] = e.parent.childrenMap[d], delete e.parent.childrenMap[d]), this.adoptInfants(e, c)
    }
  };
  g.changeParentId = function(e, d, c) {
    d !== c && (h.isNull(e.parent) && this.removeFromInfants(e, d), d = this.map[c], e.setParent(d), e.data[this._options.parentKey] = c, h.isNull(d) && this.addToInfants(e, c))
  };
  g.destroyNodeByData = function(e) {
    this.destroyNode(this.getNode(e))
  };
  g.destroyNode = function(e) {
    this.removeChildren(e);
    this.removeFromInfants(e);
    this.removeFromMap(e);
    e.destroyCompletely()
  };
  g.removeFromMap = function(e) {
    delete this.map[e.nodeId]
  };
  g.addToInfants = function(e, d) {
    this.infants.hasOwnProperty(d) || (this.infants[d] = []);
    this.infants[d].push(e)
  };
  g.removeFromInfants = function(e, d) {
    h.isNull(d) && (d = e.data[this._options.parentKey]);
    this.infants.hasOwnProperty(d) && (this.infants[d].remove(e), this.infants[d].length === 0 && delete this.infants[d])
  };
  g.removeChildren = function(e) {
    e.children.length !== 0 && (this.infants.hasOwnProperty(e.nodeId) || (this.infants[e.nodeId] = []), this.infants[e.nodeId].pushList(e.children), e.removeAllChildren())
  };
  g.sortList = function(e) {
    h.isNull(e) ? e = [] : e.length = 0;
    this.root.traverseChildren({fn:function() {
      e.push(this.data)
    }})
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "Grid.js"...');
jx.grid.Grid = {};
(function() {
  function f(b) {
    this.mid = b.mid;
    this.log("creating new Grid instance...", c);
    e.call(this, b)
  }
  var i = goog.getObjectByName("jx.grid"), h = goog.getObjectByName("jx.util"), g = goog.getObjectByName("echo"), e = goog.getObjectByName("jx.grid.BaseModule"), d = goog.getObjectByName("TimeWatch"), c = 1;
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
  goog.inherits(f, e);
  f.getInstance = function(b) {
    return new f(b)
  };
  var a = f.prototype;
  a._defaultOptions = function() {
    return{classGrid:"jgrid", border:"1px solid #868686", width:"", font:"15px Arial,Helvetica,sans-serif", style:"", borderSide:!0, imageUrl:"../images/", links:{data:"dataMgr.all", datalen:"dataMgr.all.length", shown:"dataMgr.datalist", set:"dataMgr.set", add:"dataMgr.add", addList:"dataMgr.addList", update:"dataMgr.update", updateByKey:"dataMgr.updateByKey", updateList:"dataMgr.updateList", remove:"dataMgr.remove", removeList:"dataMgr.removeList", select:"dataMgr.executeSelect", undo:"dataMgr.undo", 
    redo:"dataMgr.redo", addFilter:"dataMgr.addFilter", removeFilter:"dataMgr.removeFilter", check:"collapser.checkMgr.checkList checkMgr.checkList", checked:"collapser.checkMgr.getCheckList checkMgr.getCheckList", removeChecked:"collapser.checkMgr.removeChecked checkMgr.removeChecked", register:"event.register", trigger:"event.trigger", bind:"event.bind", unregister:"event.unregister", unbind:"event.unregister", commit:"editMgr.commit", cancelEdit:"editMgr.cancel", beginEdit:"editMgr.begin", collen:"colDefMgr.length"}, 
    autoWidth:!1, showMessage:!1}
  };
  a._init = function(b) {
    var a = this._ctnr = b.container, c = this._options, d;
    this.name = c.name;
    this._drag = !1;
    this._lastH = this._lastW = null;
    this._vars = {scrollbarDim:void 0};
    if(d = c.width) {
      if(typeof d === "number" || d.indexOf("%") === -1) {
        d += "px"
      }
    }else {
      d = ""
    }
    a = this._ctnr = $("<div id='" + this.mid + "' class='" + c.classGrid + "' " + (d ? "style='width:" + d + "' " : "") + "tabIndex='0'>").appendTo(Util$.safe$(a));
    this._vars.scrollbarDim = Util$.calScrollbarDims(a);
    d = this.event = i.create("EventManager", {grid:this, options:c.EventManager});
    this.colDefMgr = i.create("ColumnManager", {grid:this, colDefs:b.colDefs, options:c.ColDefManager});
    this.dataMgr = i.create("DataManager", {grid:this, datalist:b.datalist, options:c.DataManager});
    c.CheckManager && (this.checkMgr = i.create("CheckManager", {grid:this, options:c.CheckManager}));
    if(!c.MenuBar && (c.columnHideEnabled || c.SearchManager)) {
      c.MenuBar = {}
    }
    if(c.Collapser) {
      this.collapser = i.create("Collapser", {grid:this, options:c.Collapser}), this.collapser.__init()
    }
    c.ColGroup && (this.colGroup = i.create("ColumnGroup", {grid:this, options:c.ColGroup}));
    c.SelectionManager && (this.selMgr = i.create("SelectionManager", {grid:this, options:c.SelectionManager}));
    c.EditManager && (this.editMgr = i.create("EditManager", {grid:this, options:c.EditManager}));
    c.ColHeader && (this.header = i.create("ColumnHeader", {grid:this, container:a, options:c.ColHeader}));
    c.SearchManager && (this.search = i.create("SearchManager", {grid:this, container:a, options:c.SearchManager}));
    c.MenuBar && (this.menubar = i.create("MenuBar", {grid:this, container:a, options:c.MenuBar}));
    this.view = i.create("ViewportManager", {grid:this, container:a, options:c.ViewportManager});
    c.TooltipManager && (this.tooltip = i.create("TooltipManager", {grid:this, container:a, options:c.TooltipManager}));
    c.DataCreator && (this.creator = i.create("DataCreator", {grid:this, container:a, options:c.DataCreator}));
    c.Footer && (this.footer = i.create("Footer", {grid:this, container:a, options:c.Footer}));
    c.autoWidth && d.bind("onResizeCanvasWidth", this.width, this);
    this._createCss();
    d.trigger("onBeforeRenderModules", !1, !0);
    d.trigger("onRenderModules", !1, !0);
    d.trigger("onAfterRenderModules", !1, !0);
    this.msg = $("<div id='" + this.mid + "msg' class='msg' onmousedown='$(this).hide(1000)' style='position:relative;padding-left:4px;overflow:hidden;z-index:100;font-size:12px;height:21px;line-height:21px'></div>").appendTo(a).hide();
    this._busyShader = $('<div style="position:absolute;background:black;opacity:0.3;filter:alpha(opacity=30)"></div>').appendTo(a).hide();
    a = a[0];
    this._lastW = a.clientWidth;
    this._lastH = a.clientHeight;
    this._registerLinks(c.links)
  };
  a._bindEvents = function() {
    i._bindGlobalEvents();
    this.log("binding Grid events...", c);
    var b = this;
    this._ctnr.bind({keydown:function(a) {
      b._keydown(a)
    }, keyup:function(a) {
      b._keyup(a)
    }, keypress:function(a) {
      b._keypress(a)
    }, mousein:function(a) {
      b._mousein(a)
    }, mouseout:function(a) {
      b._mouseout(a)
    }, mouseenter:function(a) {
      b._mouseenter(a)
    }, mouseleave:function(a) {
      b._mouseleave(a)
    }, mouseover:function(a) {
      b._mouseover(a)
    }, mousedown:function(a) {
      b._mousedown(a)
    }, click:function(a) {
      b._click(a)
    }, dblclick:function(a) {
      b._dblclick(a)
    }});
    this._charts = []
  };
  a.destroy = function() {
    this.log("destroying Grid...", c);
    try {
      var b = i.grids.indexOf(this);
      b > -1 && i.grids.splice(b, 1);
      this.name != null && delete i.gridMap[this.name];
      this.log("event:beforeDispose.", c);
      this.dispatchEvent({type:"beforeDispose"});
      h.isEmptyObj(i.m.Grid) && (this.log("unbinding global event handlers.", c), i._unbindGlobalEvents());
      this.log("event:onDestroy.", c);
      this.event.trigger("onDestroy", !1, !0);
      this.log("destroying grid vars...", c);
      i._destroy(this, {name:"Grid", module:"event", $:"_ctnr", map:"_options", style:"_style _dynStyle"});
      this.dispose()
    }catch(a) {
      return this.log(a.stack), a
    }
  };
  a._registerLinks = function(b) {
    var a, c, d, e, f, g, i, m, n, q;
    a:for(a in b) {
      if(b.hasOwnProperty(a) && !(a in this)) {
        c = h.split(b[a]);
        d = c.length;
        e = 0;
        b:for(;e < d;e++) {
          if(f = c[e].split("."), g = f.length, !(g < 1)) {
            i = this;
            m = this;
            n = "";
            for(q = 0;q < g;q++) {
              if(f[q] in i) {
                m = i, i = i[n = f[q]]
              }else {
                continue b
              }
            }
            this._registerLink(a, i, m, n);
            continue a
          }
        }
      }
    }
  };
  a._registerLink = function(b, a, c, d) {
    if(this.hasOwnProperty(b)) {
      return!1
    }
    this[b] = h.isFunction(a) ? function() {
      return a.apply(c, arguments)
    } : function() {
      return c[d]
    };
    return!0
  };
  a._createCss = function() {
    this.log("creating CSS...", c);
    var b = {type:"beforeCreateCss", css:[]}, a = this._options, d = this.event;
    this.dispatchEvent(b);
    this.log("creating CSS for Grid...", c);
    var e = d.trigger("onCreateCss"), e = e ? e.join("") : "", b = h.sprint("%selector%{overflow:hidden;height:100%;font:%font%;%border%%style%}%submodule%", {selector:"#" + this.mid, position:"relative", font:a.font, border:a.borderSide ? "border:" + a.border + ";" : "border-top:" + a.border + ";border-bottom:" + a.border + ";", style:a.style, submodule:b.css.join("") + e});
    this._style = h.createStyle(b);
    b = {type:"beforeCreateDynamicCss", css:[]};
    this.dispatchEvent(b);
    e = (e = d.trigger("onCreateDynamicCss")) ? e.join("") : "";
    this._dynStyle = h.createStyle(b.css.join("") + ";" + e)
  };
  a._recreateDynamicCss = function() {
    this.log("rewriting dynamic css...", 2);
    var b = this.event.trigger("onCreateDynamicCss");
    (b = b ? b.join("") : "") && h.setStyle(this._dynStyle, b)
  };
  a._keydown = function(b) {
    var a = this.event, c = [b], d = b.which;
    this.log("UI event:keydown detected. event=" + b.type + ", keycode=" + d, 3);
    a.triggerInvalid("onBeforeKeydown", c) ? this.log("UI event:keydown prevented.", 3) : (a.trigger("keydown_" + d, c, !0), a.trigger("keydown", c, !0))
  };
  a._keyup = function(b) {
    var a = this.event, c = [b], d = b.which;
    this.log("UI event:keyup detected. event=" + b.type + ", keycode=" + d, 3);
    a.triggerInvalid("onBeforeKeyup", c) ? this.log("UI event:keyup prevented.", 3) : (a.trigger("keyup_" + d, c, !0), a.trigger("keyup", c, !0))
  };
  a._keypress = function(b) {
    var a = this.event, c = [b], d = b.which;
    this.log("UI event:keypress detected. event=" + b.type + ", keycode=" + d, 3);
    a.triggerInvalid("onBeforeKeypress", c) ? this.log("UI event:keypress prevented.", 3) : (a.trigger("keypress_" + d, c, !0), a.trigger("keypress", c, !0))
  };
  a._mousein = function(b) {
    var a = this.event, c = [b];
    this.log("UI event:mousein detected. event=" + b.type, 4);
    a.triggerInvalid("onBeforeMousein", c) ? this.log("UI event:mousein prevented.", 4) : (this._drag && a.trigger("dragin", c, !0), a.trigger("mousein", c, !0))
  };
  a._mouseout = function(b) {
    var a = this.event, c = [b];
    this.log("UI event:mouseout detected. event=" + b.type, 4);
    a.triggerInvalid("onBeforeMouseout", c) ? this.log("UI event:mouseout prevented.", 4) : (this._drag && a.trigger("dragout", c, !0), a.trigger("mouseout", c, !0))
  };
  a._mouseenter = function(b) {
    var a = this.event, c = [b];
    this.log("UI event:mouseenter detected. event=" + b.type, 3);
    a.triggerInvalid("onBeforeMouseenter", c) ? this.log("UI event:mouseenter prevented.", 3) : (this._drag && a.trigger("dragenter", c, !0), a.trigger("mouseenter", c, !0))
  };
  a._mouseleave = function(b) {
    var a = this.event, c = [b];
    this.log("UI event:mouseleave detected. event=" + b.type, 3);
    a.triggerInvalid("onBeforeMouseleave", c) ? this.log("UI event:mouseleave prevented.", 3) : (this._drag && a.trigger("dragleave", c, !0), a.trigger("mouseleave", c, !0))
  };
  a._mousemove = function(b) {
    var a = this.event, c = [b];
    this.log("UI event:mousemove detected. event=" + b.type, 5);
    a.triggerInvalid("onBeforeMousemove", c) ? this.log("UI event:mousemove prevented.", 5) : (this._drag && a.trigger("dragmove", c, !0), a.trigger("mousemove", c, !0))
  };
  a._mouseover = function(b) {
    var a = this.event, c = [b];
    this.log("UI event:mouseover detected. event=" + b.type, 4);
    a.triggerInvalid("onBeforeMouseover", c) ? this.log("UI event:mouseover prevented.", 4) : (this._drag && a.trigger("dragover", c, !0), a.trigger("mouseover", c, !0))
  };
  a._mousedown = function(b) {
    var a = this.event, c = [b];
    this.log("UI event:mousedown detected. event=" + b.type, 3);
    this._drag = !0;
    a.triggerInvalid("onBeforeMousedown", c) ? this.log("UI event:mousedown prevented.", 3) : a.trigger("mousedown", c, !0)
  };
  a._mouseup = function(b) {
    var a = this.event, c = [b];
    this.log("UI event:mouseup detected. event=" + b.type, 3);
    this._drag = !1;
    a.trigger("unsetDrag", !1, !0);
    this.containsEvent(b) && (a.triggerInvalid("onBeforeMouseup", c) ? this.log("UI event:mouseup prevented.", 3) : a.trigger("mouseup", c, !0))
  };
  a._click = function(b) {
    var a = this.event, c = [b];
    this.log("UI event:click detected. event=" + b.type, 2);
    a.triggerInvalid("onBeforeClick", c) ? this.log("UI event:click prevented.", 2) : a.trigger("click", c, !0)
  };
  a._dblclick = function(b) {
    var a = this.event, c = [b];
    this.log("UI event:dblclick detected. event=" + b.type, 2);
    a.triggerInvalid("onBeforeDblclick", c) ? this.log("UI event:dblclick prevented.", 2) : a.trigger("dblclick", c, !0)
  };
  a._resize = function(b) {
    var a = this.event;
    this.log("event:resize detected. event=" + b.type, 2);
    var c = !1, d = this._ctnr, e = d[0], f = this._lastW, g = this._lastH, h = e.clientWidth || d.width(), d = e.clientHeight || d.height();
    if(h >= 1 && f !== h) {
      this.log("event:resizeWidth detected. " + f + "->" + h, 2), a.trigger("resizeWidth", [h, f], !0), this._lastW = h, c = !0
    }
    if(d >= 1 && g !== d) {
      this.log("event:resizeHeight detected. " + g + "->" + d, 2), a.trigger("resizeHeight", [d, g], !0), this._lastH = d, c = !0
    }
    c && a.trigger("resize", [b], !0)
  };
  a.width = function(b) {
    var a = this._ctnr[0], c = a.clientWidth, d = this.event;
    if(!b) {
      return c
    }
    typeof b != "number" && (b = parseInt(b, 10));
    if(b < 1 || b === c || !isFinite(b)) {
      return c
    }
    this.log("set width. " + this._lastW + "->" + b, 2);
    a.style.width = b + "px";
    d.trigger("resizeWidth", [b, this._lastW], !0);
    this._lastW = b;
    d.trigger("resize", !1, !0);
    return b
  };
  a.height = function(b) {
    var a = this._ctnr[0], c = a.clientHeight, d = this.event;
    if(!b) {
      return c
    }
    typeof b != "number" && (b = parseInt(b, 10));
    if(b < 1 || b === c || !isFinite(b)) {
      return c
    }
    this.log("set height. " + this._lastH + "->" + b, 2);
    a.style.height = b + "px";
    d.trigger("resizeHeight", [b, this._lastH], !0);
    this._lastH = b;
    d.trigger("resize", !1, !0);
    return b
  };
  a.syncScroll = function() {
    this.view._scroll()
  };
  a.getCellByIdAndKey = function(b, a) {
    if(b == null || a == null) {
      return null
    }
    var c = this.dataMgr.getById(b);
    if(!c) {
      return null
    }
    var d = this.colDefMgr.getByKey(a);
    return!d ? null : i.create("Cell", {grid:this, datarow:c, colDef:d})
  };
  a.getCellByIdx = function(b, a) {
    if(b == null || a == null) {
      return null
    }
    var c = this.dataMgr.getByIdx(b);
    if(!c) {
      return null
    }
    var d = this.colDefMgr.get(a);
    return!d ? null : i.create("Cell", {grid:this, datarow:c, colDef:d})
  };
  a.busy = function() {
    if(this._busyShader && !this._busy) {
      var b = this._ctnr, a = b.offset(), c = b[0], b = c.clientWidth + 1, c = c.clientHeight + 1, d = this._busyShader, e = d[0].style;
      e.top = a.top + "px";
      e.left = a.left + "px";
      e.width = b + "px";
      e.height = c + "px";
      d.show()
    }
    this._busy = !0
  };
  a.idle = function() {
    this._busyShader && this._busy && this._busyShader.hide();
    this._busy = !1
  };
  a.error = function(b) {
    for(var a = i.error[b], c = 1, d = arguments.length;c < d;c++) {
      a = a.replace(RegExp("%" + (c - 1), "g"), arguments[c])
    }
    a = Error(a);
    a.code = b;
    this.printError(a.message);
    this.log("error occurred... code=" + b + ", msg=" + a.message || a.msg);
    this.event.trigger("onError", [a], !0);
    return a
  };
  a.printError = function(b) {
    this.log("error message... msg=" + b);
    if(this._options.showMessage) {
      var a = this.msg, c = a[0], d = c.style;
      c.innerHTML = b;
      d.width = this._ctnr[0].clientWidth + "px";
      d.background = "#ffebe8";
      d.color = "#333";
      a.show();
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function() {
        a.hide(1E3)
      }, 5E3)
    }
  };
  a.printMessage = function(b) {
    this.log("message... msg=" + b);
    if(this._options.showMessage) {
      var a = this.msg, c = a[0], d = c.style;
      c.innerHTML = b;
      d.width = this._ctnr[0].clientWidth + "px";
      d.background = "#dfdfdf";
      d.color = "#6f6f6f";
      a.show();
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function() {
        a.hide(1E3)
      }, 5E3)
    }
  };
  a.containsEvent = function(b) {
    return h.contains(this._ctnr[0], b.target)
  };
  a.getChart = function(b) {
    return this._charts[b]
  };
  a.log = function(b, a) {
    2 >= (a || 0) && g("Grid[" + this.mid + "]: " + b)
  };
  a.twstart = function(b) {
    this._tw = new d(b)
  };
  a.twlap = function(b) {
    this._tw.lap(b)
  };
  a.twstop = function(b) {
    this._tw.stop(b)
  };
  a.twreset = function(b) {
    this._tw.reset(b)
  };
  a.twprint = function() {
    this.log(this._tw)
  };
  a.getShownColumns = function() {
    return this.colDefMgr.get().filter(function(b) {
      return b.width > 0
    })
  };
  a.chart = function(b, a, d, e, f, g) {
    this.log("creating chart... type=" + a + ", columns=[" + d.join(",") + "]", c);
    var h, i, a = a.toLowerCase();
    switch(a) {
      case "area":
        h = "corechart";
        i = "AreaChart";
        break;
      case "bar":
        h = "corechart";
        i = "BarChart";
        break;
      case "candle":
        h = "corechart";
        i = "CandlestickChart";
        break;
      case "column":
        h = "corechart";
        i = "ColumnChart";
        break;
      case "combo":
        h = "corechart";
        i = "ComboChart";
        break;
      case "gauge":
        h = "gauge";
        i = "Gauge";
        break;
      case "geo":
        h = "geochart";
        i = "GeoChart";
        break;
      case "line":
        h = "corechart";
        i = "LineChart";
        break;
      case "pie":
        h = "corechart";
        i = "PieChart";
        break;
      case "scatter":
        h = "corechart";
        i = "ScatterChart";
        break;
      case "table":
        h = "table";
        i = "Table";
        break;
      case "treemap":
        h = "treemap";
        i = "TreeMap";
        break;
      default:
        throw Error("unknown chart type: " + a);
    }
    google.load("visualization", "1", {packages:[h]});
    var m = this, n = this.colDefMgr, q = this.dataMgr, r = d.map(function(b) {
      if(b = n.getByKey(b)) {
        return b
      }
      throw Error("column key not found");
    }), s = q.exportToArray(d, f, g);
    google.setOnLoadCallback(function() {
      for(var c = new google.visualization.DataTable, h = 0, p = r.length, n, y;h < p;h++) {
        n = r[h];
        y = n.type;
        switch(y) {
          case "boolean":
            y = "boolean";
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
            y = "number";
            break;
          case "string":
          ;
          case "text":
            y = "string"
        }
        c.addColumn(y || s[0] && s[0][h] != null && typeof s[0][h] || h === 0 && "string" || "number", n.name)
      }
      c.addRows(s);
      var z = m._charts[b] = new google.visualization[i](document.getElementById(b));
      z.draw(c, e);
      m.event.bind("onAfterRefresh", function() {
        m.log("redrawing chart... type=" + a + ", columns=[" + d.join(",") + "]", 2);
        c.removeRows(0, c.getNumberOfRows());
        c.addRows(q.exportToArray(d, f, g));
        z.draw(c, e)
      });
      m.event.trigger("onChartLoaded", [z, c], !0)
    })
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "SelectionManager.js"...');
jx.grid.SelectionManager = {};
(function() {
  function f(c) {
    this.mid = c.mid;
    this.grid = c.grid;
    this.grid.selMgr = this;
    this._options = i._extend({rowSelKey:this.grid.dataMgr.idKey, bgColorSelection:"#DCEBFE", bgColorLast:"#f1ca7f", bgColorRange:"#D9D9D9", classSelection:"jgrid-selection", classLast:"selection-last", classRange:"selection-range", multiSelectEnabled:!1, classRowSelected:"rowSelected", highlightRowEnabled:!0, bgColorRowSelected:"#d8dfea"}, c.options);
    this._consts = {_UP:1, _DOWN:2, _LEFT:3, _RIGHT:4, _PGDN:5, _PGUP:6, _HOME:7, _END:8, _NAVKEYS:{}};
    this._consts._NAVKEYS = h.which(["enter", "tab", "arrow", "pgdn", "pgup", "home", "end"]);
    this._rows = {length:0};
    this._cols = {length:0};
    this.__init()
  }
  var i = goog.getObjectByName("jx.grid"), h = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var g = goog.getObjectByName("jx.grid.Grid"), e = goog.getObjectByName("jx.grid.Cell");
  goog.exportSymbol("jx.grid.SelectionManager", f);
  f.getInstance = function(c) {
    return new f(c)
  };
  var d = f.prototype;
  d.__init = function() {
    this.bindEvents()
  };
  d.bindEvents = function() {
    this.grid.event.bind({onAfterSetDatalist:this.empty, onGetCellClass:this._onGetCellClass, onCreateCss:this._onCreateCss, onDestroy:this._destroy, keydownCanvas:this._keydownCanvas, dragoverCanvas:this._dragoverCanvas, mousedownCanvas:this._mousedownCanvas, onBeforeRerender:this._onBeforeRerender, onAfterRerender:this.onAfterRerender, onBeforeDataChange:this.onBeforeDataChange}, this)
  };
  d._destroy = function() {
    this.grid.log("destroying SelectionManager instance...", g.V_INIT);
    i._deleteMap(this._consts, "_NAVKEYS");
    var c, a = this._rows, b = this._cols;
    for(c in a) {
      a.hasOwnProperty(c) && c !== "length" && i._deleteMap(a, c)
    }
    for(c in b) {
      b.hasOwnProperty(c) && c !== "length" && i._deleteMap(b, c)
    }
    i._destroy(this, {name:"SelectionManager", path:"selMgr", map:"_rows _cols _range _last _consts _options"})
  };
  d._onCreateCss = function() {
    var c = this.grid.event.trigger("onBeforeCreateSelCss"), a = "#" + this.grid.mid + " .", b = this._options, c = c || [];
    b.highlightRowEnabled === !0 && c.push(a + b.classRowSelected + " > *{background:" + b.bgColorRowSelected + "}");
    b.multiSelectEnabled === !0 && (c.push(a + b.classSelection + "{background:" + b.bgColorSelection + "}"), c.push(a + b.classRange + "{background:" + b.bgColorRange + "}"));
    c.push(a + b.classLast + "{background:" + b.bgColorLast + "}");
    return c.join("\n")
  };
  d._onGetCellClass = function(c, a, b, d) {
    var e = "", l = this._last, f = this._range, g = this._rows, h = this._options;
    l && l.getDatarow() === b && l.getColDef() === d && (e += h.classLast);
    h.multiSelectEnabled === !0 && (f && f.getDatarow() === b && f.getColDef() === d && (e += " " + h.classRange), g.hasOwnProperty(c) && g[c].hasOwnProperty(a) && (e += " " + h.classSelection));
    return e
  };
  d._mousedownCanvas = function(c, a) {
    if(!this._last || !this._last.equals(a)) {
      this.grid.event.trigger("onBeforeSelect", [c, a], !0), this._options.multiSelectEnabled === !1 ? this.selectCell(a) : c.shiftKey && this._last && this._range ? this.selectRange(a) : c.ctrlKey ? a.getKey() === this._options.rowSelKey ? this.addRow(a) : this.addCell(a) : this.selectCell(a)
    }
  };
  d._dragoverCanvas = function(c, a) {
    this._options.multiSelectEnabled === !1 ? this.selectCell(a) : this._last && this._range && this.selectRange(a)
  };
  d._keydownCanvas = function(c) {
    var a = this._last, b = c.which, d = this.grid.event;
    if(this._consts._NAVKEYS[b]) {
      if(!d.triggerInvalid("onBeforeNavigate", [c])) {
        var e;
        c.preventDefault();
        switch(b) {
          case h.keyMapKeydown.tab:
            e = c.shiftKey ? this._idxToCell(this._consts._LEFT, a) : this._idxToCell(this._consts._RIGHT, a);
            this.selectCell(e);
            break;
          case h.keyMapKeydown.enter:
            e = c.shiftKey ? this._idxToCell(this._consts._UP, a) : this._idxToCell(this._consts._DOWN, a);
            this.selectCell(e);
            break;
          case h.keyMapKeydown.up:
            this._options.multiSelectEnabled && c.shiftKey ? (e = this._idxToCell(this._consts._UP, this._range), this.selectRange(e)) : (e = this._idxToCell(this._consts._UP, a), this.selectCell(e));
            break;
          case h.keyMapKeydown.down:
            this._options.multiSelectEnabled && c.shiftKey ? (e = this._idxToCell(this._consts._DOWN, this._range), this.selectRange(e)) : (e = this._idxToCell(this._consts._DOWN, a), this.selectCell(e));
            break;
          case h.keyMapKeydown.left:
            this._options.multiSelectEnabled && c.shiftKey ? (e = this._idxToCell(this._consts._LEFT, this._range), this.selectRange(e)) : (e = this._idxToCell(this._consts._LEFT, a), this.selectCell(e));
            break;
          case h.keyMapKeydown.right:
            this._options.multiSelectEnabled && c.shiftKey ? (e = this._idxToCell(this._consts._RIGHT, this._range), this.selectRange(e)) : (e = this._idxToCell(this._consts._RIGHT, a), this.selectCell(e));
            break;
          case h.keyMapKeydown.pgup:
            this._options.multiSelectEnabled && c.shiftKey ? (e = this._idxToCell(this._consts._PGUP, this._range), this.selectRange(e)) : (e = this._idxToCell(this._consts._PGUP, a), this.selectCell(e));
            break;
          case h.keyMapKeydown.pgdn:
            this._options.multiSelectEnabled && c.shiftKey ? (e = this._idxToCell(this._consts._PGDN, this._range), this.selectRange(e)) : (e = this._idxToCell(this._consts._PGDN, a), this.selectCell(e));
            break;
          case h.keyMapKeydown.space:
            e = c.shiftKey ? this._idxToCell(this._consts._PGUP, a) : this._idxToCell(this._consts._PGDN, a);
            this.selectCell(e);
            break;
          case h.keyMapKeydown.home:
            this._options.multiSelectEnabled && c.shiftKey ? (e = this._idxToCell(this._consts._HOME, this._range), this.selectRange(e)) : (e = this._idxToCell(this._consts._HOME, a), this.selectCell(e));
            break;
          case h.keyMapKeydown.end:
            this._options.multiSelectEnabled && c.shiftKey ? (e = this._idxToCell(this._consts._END, this._range), this.selectRange(e)) : (e = this._idxToCell(this._consts._END, a), this.selectCell(e))
        }
        d.trigger("onAfterNavigate", [e], !0)
      }
    }else {
      if(this._cols.length === 1) {
        var l, f = this.grid.colDefMgr, g, i = this._cols;
        e = [c, null, a];
        for(g in i) {
          if(i.hasOwnProperty(g) && g !== "length") {
            l = f.get(g).key, l = "keydownColSel_" + l, e[1] = i[g], d.trigger(l + "_" + keycode, e, !0), d.trigger(l, e, !0)
          }
        }
      }
      if(this._rows.length === 1) {
        var o;
        g = this._rows;
        e = [c, null, a];
        for(o in g) {
          g.hasOwnProperty(o) && o !== "length" && (e[1] = g[o], d.trigger("keydownRowSel_" + keycode, e, !0), d.trigger("keydownRowSel", e, !0))
        }
      }
      e = [c, this._rows, this._cols];
      d.trigger("keydownSel_" + b, e, !0);
      d.trigger("keydownSel", e, !0)
    }
  };
  d.getCell = function() {
    return this._last || null
  };
  d._isSelected = function(c) {
    return c && this._last && this._last.equals(c)
  };
  e.prototype.isSelected = function() {
    return this.grid.selMgr._isSelected(this)
  };
  d._getCellIdxToNavigate = function(c, a, b) {
    switch(c) {
      case this._consts._RIGHT:
        b < this.grid.colDefMgr.length() - 1 && b++;
        break;
      case this._consts._LEFT:
        b > 0 && b--;
        break;
      case this._consts._DOWN:
        a < this.grid.dataMgr.datalist.length - 1 && a++;
        break;
      case this._consts._UP:
        a > 0 && a--;
        break;
      case this._consts._PGDN:
        a += this.grid.view._options.rowsPerPage;
        a > this.grid.dataMgr.datalist.length - 1 && (a = this.grid.dataMgr.datalist.length - 1);
        break;
      case this._consts._PGUP:
        a -= this.grid.view._options.rowsPerPage;
        a < 0 && (a = 0);
        break;
      case this._consts._HOME:
        a = 0;
        break;
      case this._consts._END:
        a = this.grid.dataMgr.datalist.length - 1
    }
    return[a, b]
  };
  d._idxToCell = function(c, a) {
    var b = this._getCellIdxToNavigate(c, a.getRowIdx(), a.getColIdx());
    return i.create("Cell", {grid:this.grid, row:b[0], col:b[1]})
  };
  d.selectRow = function(c) {
    var a = c.getRowIdx(), b = c.getColIdx();
    this._setRange(a, b, c);
    this._setLast(a, b, c);
    this._setSelMap(this._getRowMap(a, b, c))
  };
  d.selectCell = function(c, a) {
    this.grid.event.trigger("onBeforeSelectCell", [c], !0);
    if(this._options.multiSelectEnabled && c.getKey() === this._options.rowSelKey) {
      this.selectRow(c)
    }else {
      var b = c.getRowIdx(), d = c.getColIdx();
      this._setRange(b, d, c, a);
      this._setLast(b, d, c);
      this._setSelMap(this._getCellMap(b, d, c))
    }
    this.grid.event.trigger("onAfterSelectCell", [c], !0)
  };
  d.onBeforeDataChange = function() {
  };
  d._onBeforeRerender = function() {
    if(this._last) {
      this.toSelect = this._last
    }
    this.empty()
  };
  d.onAfterRerender = function() {
    this.toSelect && (this.selectCell(this.toSelect, !0), this.grid.view.scrollToRowLazy(this.toSelect.getRowIdx()))
  };
  d.addRow = function(c) {
    var a = c.getRowIdx(), b = c.getColIdx();
    this._setRange(a, b, c);
    this._setLast(a, b, c);
    this._addSelMap(this._getRowMap(a, b, c))
  };
  d.addCell = function(c) {
    var a = c.getRowIdx(), b = c.getColIdx();
    this._setRange(a, b, c);
    this._setLast(a, b, c);
    this._addSelMap(this._getCellMap(a, b, c))
  };
  d.selectRange = function(c) {
    var a = c.getRowIdx(), b = c.getColIdx(), d = this._last.getRowIdx(), e = this._last.getColIdx(), l = d < a ? d : a, d = d < a ? a : d, f;
    this._setRange(a, b, c);
    c.getKey() === this._options.rowSelKey ? (f = 0, e = this.grid.colDefMgr.length() - 1) : (f = e < b ? e : b, e = e < b ? b : e);
    this._setSelMap(this._getRangeMap(l, f, d, e, a, b, c));
    return{minRow:l, minCol:f, maxRow:d, maxCol:e}
  };
  d._setLast = function(c, a, b) {
    var a = this._last, d;
    a && (d = a.getRowIdx(), c !== d && this._range && d !== this._range.getRowIdx() && this.grid.view.unlockRowById(a.getId()), a.get$().removeClass(this._options.classLast), this._options.highlightRowEnabled === !0 && $(a.getRowNode()).removeClass(this._options.classRowSelected), b || delete this._last);
    if(b) {
      (this._last = b).get$().addClass(this._options.classLast), this._options.highlightRowEnabled === !0 && $(b.getRowNode()).addClass(this._options.classRowSelected), this.grid.view.lockRowByIdx(c)
    }
  };
  d._setRange = function(c, a, b, d) {
    var e = this._range;
    if(e) {
      var l = e.getRowIdx();
      if(c === l && a === e.getColIdx()) {
        return
      }
      c !== l && this._last && l !== this._last.getRowIdx() && this.grid.view.unlockRowById(e.getId());
      e.get$().removeClass(this._options.classRange);
      b || delete this._range
    }
    if(b) {
      (this._range = b).get$().addClass(this._options.classRange), b = this.grid.view, b.lockRowByIdx(c), d || b.scrollToLazy(c, a)
    }
  };
  d._addSelMap = function(c) {
    var a = this._rows, b, d, f, l;
    for(f in c) {
      if(c.hasOwnProperty(f) && (d = c[f], a.hasOwnProperty(f))) {
        for(l in b = a[f], d) {
          d.hasOwnProperty(l) && b.hasOwnProperty(l) && (d[l] instanceof e && (b[l] = d[l]), delete d[l])
        }
      }
    }
    this.addOrRemoveCss({}, !0);
    this._addToMaps(c)
  };
  d._setSelMap = function(c) {
    var a = this._rows, b, d, f, l, g = {};
    for(f in a) {
      if(a.hasOwnProperty(f) && f !== "length") {
        if(b = a[f], c.hasOwnProperty(f)) {
          for(l in d = c[f], b) {
            b.hasOwnProperty(l) && l !== "length" && (d.hasOwnProperty(l) ? (d[l] instanceof e && (b[l] = d[l]), delete d[l]) : (g.hasOwnProperty(f) || (g[f] = {}), g[f][l] = !0))
          }
        }else {
          for(l in d = g[f] = {}, b) {
            b.hasOwnProperty(l) && l !== "length" && (d[l] = !0)
          }
        }
      }
    }
    this._removeFromMaps(g);
    this.addOrRemoveCss({}, !1);
    this._addSelMap(c)
  };
  d.addOrRemoveCss = function(c, a) {
    var b = [], d, f, l, g = this.grid.view;
    for(d in c) {
      if(c.hasOwnProperty(d)) {
        for(f in l = c[d], l) {
          l.hasOwnProperty(f) && (l[f] instanceof e ? b.push(l[f].getNode()) : b.push(g.getCell(d, f)))
        }
      }
    }
    b = b.filter(function(b) {
      return b
    });
    a ? $(b).addClass(this._options.classSelection) : $(b).removeClass(this._options.classSelection)
  };
  d._addToMaps = function(c) {
    var a, b, d, e = this._rows, f = this._cols, g;
    for(a in c) {
      if(c.hasOwnProperty(a)) {
        for(b in g = c[a], g) {
          g.hasOwnProperty(b) && (d = (d = g[b]) ? !0 : d, e.hasOwnProperty(a) ? e[a].length++ : (e[a] = {length:1}, e.length++), e[a][b] = d, f.hasOwnProperty(b) ? f[b].length++ : (f[b] = {length:1}, f.length++), f[b][a] = d)
        }
      }
    }
  };
  d._removeFromMaps = function(c) {
    var a, b, d = this._rows, e = this._cols, f;
    for(a in c) {
      if(c.hasOwnProperty(a)) {
        for(b in f = c[a], f) {
          f.hasOwnProperty(b) && (--d[a].length === 0 ? (delete d[a], d.length--) : delete d[a][b], --e[b].length === 0 ? (delete e[b], e.length--) : delete e[b][a])
        }
      }
    }
  };
  d._getCellMap = function(c, a, b) {
    var d = {};
    d[c] = {};
    d[c][a] = b;
    return d
  };
  d._getRowMap = function(c, a, b) {
    var d = {}, e = this.grid.colDefMgr.length(), f = 0;
    for(d[c] = {};f < e;f++) {
      d[c][f] = !0
    }
    d[c][a] = b;
    return d
  };
  d._getRangeMap = function(c, a, b, d, e, f, g) {
    for(var h = {}, i;c <= b;c++) {
      h[c] = {};
      for(i = a;i <= d;i++) {
        h[c][i] = !0
      }
    }
    h[e][f] = g;
    return h
  };
  d.empty = function() {
    this._setLast();
    this._setRange();
    this._setSelMap({})
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "EditManager.js"...');
jx.grid.EditManager = {};
jx.grid.Editor = {};
(function() {
  function f(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    this.grid.editMgr = this;
    this._options = h._extend({classEdit:"jgrid-edit", classCellEditable:"jgrid-editable", classCellNotEditable:"jgrid-notEditable", editableBgEnabled:!1, notEditableBgEnabled:!1, editableBg:"#FFF", notEditableBg:"#F6F6F6", deleteEnabled:!1, editIconEnabled:!0, urlEditIcon:this.grid._options.imageUrl + "editable-small.png", classEditIcon:"edit-icon", editIconWidth:12, editIconPadding:3, basicBackground:"#FFF9D7", classSuccess:"edit-success", successBackground:"#cdf7b6", classFailure:"edit-failure", 
    failureBackground:"#ff0000"}, a.options);
    this._beginEditKeys = g.which(["number", "alphabet", "del", "backspace"]);
    this.__init()
  }
  function i(a) {
    for(var b in a) {
      a.hasOwnProperty(b) && (this[b] = a[b])
    }
  }
  var h = goog.getObjectByName("jx.grid"), g = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var e = goog.getObjectByName("jx.grid.Grid"), d = goog.getObjectByName("jx.grid.Cell");
  goog.exportSymbol("jx.grid.EditManager", f);
  goog.exportSymbol("jx.grid.Editor", i);
  f.getInstance = function(a) {
    return new f(a)
  };
  var c = f.prototype;
  c.__init = function() {
    this.bindEvents()
  };
  c.bindEvents = function() {
    var a = {onGetColCellClass:this._onGetColCellClass, keydownCanvas:this._keydownCanvas, onDestroy:this._destroy, dblclickCanvas:this._dblclickCanvas, onCreateDynamicCss:this.onCreateDynamicCss, "onBeforeNavigate onBeforeRefresh onBeforeSelect":this.commit, onBeforeFocusCanvas:this.notActive};
    g.isNull(this.grid.selMgr) ? a.onCreateCss = this._onBeforeCreateSelCss : a.onBeforeCreateSelCss = this._onBeforeCreateSelCss;
    if(this._options.deleteEnabled) {
      a["keydownSel_" + g.keyMapKeydown.del] = this._deleteContents
    }
    if(this._options.editIconEnabled) {
      for(var b = this.grid.colDefMgr.get(), c = b.length, d = 0;d < c;d++) {
        if(g.isNotNull(b[d].editor)) {
          a["onRenderHeader_" + b[d].key + "_prepend"] = this._onRenderHeader
        }
      }
    }
    this.grid.event.bind(a, this)
  };
  c._destroy = function() {
    this.grid.log("destroying EditManager instance...", e.V_INIT);
    this._deleteEditor();
    h._destroy(this, {name:"EditManager", path:"editMgr", map:"_beginEditKeys _options"})
  };
  c._onBeforeCreateSelCss = function() {
    var a = "#" + this.grid.mid + " .", b = this._options, c = [], d = this.grid.view._getRowInnerHeight();
    c.push(this.grid.view._getCellSelector() + "." + b.classEdit + "{background:" + b.basicBackground + "}");
    c.push(a + b.classEdit + " input{position:absolute;z-index:10;top:0;padding:0;border:0;margin:0;background:" + b.basicBackground + ";height:" + d + "px;line-height:" + d + "px}");
    b.editableBgEnabled && c.push(a + b.classCellEditable + "{background:" + b.editableBg + "}");
    b.notEditableBgEnabled && c.push(a + b.classCellNotEditable + "{background:" + b.notEditableBg + "}");
    b.editIconEnabled && c.push(a + b.classEditIcon + "{float:left;position:absolute;left:0;top:0;padding:0 " + b.editIconPadding + "px;width:" + b.editIconWidth + "px;height:" + d + "px;background:url(" + b.urlEditIcon + ") no-repeat center transparent}");
    c.push(a + b.classSuccess + "{background:" + b.successBackground + "}");
    c.push(a + b.classFailure + "{background:" + b.failureBackground + "}");
    return c.join("")
  };
  c.onCreateDynamicCss = function() {
    for(var a = this.grid.view._getCellSelector(), b = this.grid.view._getPadding(), c = this.grid.colDefMgr.get(), d = 0, e = "";d < c.length;d++) {
      g.isNotNull(c[d].editor) && (e += a + ".k_" + c[d].key + " .basic-editor{width:" + (c[d].width - 2 * b) + "px}")
    }
    return e
  };
  c._onRenderHeader = function(a) {
    a.push("<span class='" + this._options.classEditIcon + "'></span>")
  };
  c._onRenderCell = function(a, b, c, d, e) {
    this.grid.dataMgr.isReal(c) && e.push("<span class='" + this._options.classEditIcon + "' title='클릭하여 에디팅을 시작합니다' onclick='JGM.m.EditManager." + this.mid + '.beginEdit("' + c[this.grid.dataMgr.idKey] + '","' + d.key + "\")'></span>")
  };
  c.cancelMouseEvent = function(a) {
    return!g.hasTagAndClass(a.target, "DIV", this._options.classEditIcon)
  };
  c.beginEdit = function(a, b) {
    this.begin(h.create("Cell", {grid:this.grid, datarow:this.grid.dataMgr.getById(a), colDef:this.grid.colDefMgr.getByKey(b)}))
  };
  c._dblclickCanvas = function(a, b) {
    b.isEdited() || this.begin(b)
  };
  c._keydownCanvas = function(a) {
    this.active() ? a.which === g.keyMapKeydown.esc && this.cancel() : !a.ctrlKey && !a.altKey && g.isNotNull(this.grid.selMgr) && (a.which === g.keyMapKeydown.del && this._options.deleteEnabled ? this._deleteContent(this.grid.selMgr.getCell()) : this._beginEditKeys[a.which] ? this.begin(this.grid.selMgr.getCell()) : a.which === g.keyMapKeydown.f2 && (a.preventDefault(), this.begin(this.grid.selMgr.getCell())))
  };
  c.active = function() {
    return!!this.editor
  };
  c.notActive = function() {
    return g.isNull(this.editor)
  };
  c._isEdited = function(a) {
    return this.active() && this.editor.cell && this.editor.cell.equals(a)
  };
  c._onGetColCellClass = function(a) {
    return g.isNotNull(a.editor) ? this._options.classCellEditable : this._options.classCellNotEditable
  };
  d.prototype.isEdited = function() {
    return this.grid.editMgr._isEdited(this)
  };
  d.prototype.setValue = function(a) {
    var b = this.getDatarow(), c = this.getKey(), d;
    g.isNotNullAnd(b, c) && (d = this.grid.dataMgr.updateByKey(b, c, a, {noSort:!0, noFilter:!0, noRerender:!0}), d === !0 && this.grid.view.rerenderRow(b));
    return d
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
    g.isNotNull(this.editor) && (delete this.editor.grid, delete this.editor.cell, delete this.editor.before, delete this.editor)
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
            var b = a.setValue(b), c, d = a.get$();
            b instanceof Error ? (this.cancel(), c = this._options.classFailure) : (this._deleteEditor(), this.grid.view.focus(), this.grid.printMessage("Successfully Updated."), c = this._options.classSuccess);
            d.addClass(c);
            setTimeout(function() {
              d.removeClass(c)
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
  c._deleteContents = function(a, b, c) {
    if(!this.active()) {
      var a = {}, b = {}, d = [], e, f, h, i, o, m, n;
      a:for(e in c) {
        if(c.hasOwnProperty(e) && e !== "length") {
          for(n in i = h = f = void 0, m = c[e], m) {
            if(m.hasOwnProperty(n) && !(n === "length" || b.hasOwnProperty(n))) {
              o = m[n].cell;
              if(g.isNull(f) && (f = o.getColDef(), h = f.defaultValue, i = f.key, g.isNull(f.editor))) {
                continue a
              }
              o = g.isNotNull(a[n]) ? a[n].datarow : o.getDatarow();
              this.grid.dataMgr.isReal(o) ? h !== o[i] && (g.isNull(a[n]) && (a[n] = {datarow:o, change:{}}, d.push(a[n])), a[n].change[i] = h) : b[n] = !0
            }
          }
        }
      }
      d.length !== 0 && this.grid.dataMgr.updateList(d)
    }
  };
  i.getInstance = function(a) {
    return new i(a)
  };
  c = i.prototype;
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
  i.numberKeys = g.which(["number", "del", "backspace"]);
  i.isNumberKey = function(a) {
    return this.numberKeys[a] ? !0 : !1
  };
  i.numberEdit = function(a) {
    a = a.getValue();
    return"<input type='text' class='basic-editor' onkeydown='if (!jx.grid.Editor.isNumberKey(event.which)) return false;' value='" + g.ifNull(a, "") + "'/>"
  };
  i.floatKeys = g.which(["number", ".", "del", "backspace"]);
  i.isFloatKey = function(a) {
    return this.floatKeys[a] ? !0 : !1
  };
  i.floatEdit = function(a) {
    a = a.getValue();
    return"<input type='text' class='basic-editor' onkeydown='if (!jx.grid.Editor.isFloatKey(event.which)) return false;' value='" + g.ifNull(a, "") + "'/>"
  };
  i.alphabetKeys = g.which(["alphabet", "del", "backspace", "space"]);
  i.isAlphabet = function(a) {
    return this.alphabetKeys[a] ? !0 : !1
  };
  i.alphabetEdit = function(a) {
    a = a.getValue();
    return"<input type='text' class='basic-editor' onkeydown='if (!jx.grid.Editor.isAlphabet(event.which)) return false;' value='" + g.ifNull(a, "") + "'/>"
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "TooltipManager.js"...');
jx.grid.TooltipManager = {};
(function() {
  function f(d) {
    this.mid = d.mid;
    this.grid = d.grid;
    this.grid.tooltip = this;
    this._ctnr = d.container;
    this._options = i._extend({classTooltip:"jgrid-tooltip", tooltipSyncEnabled:!0, offsetX:0, offsetY:18, background:"#F5F5F5", border:"1px solid #868686", padding:"2px 10px", font:"14px Arial,Helvetica,sans-serif", color:"#333"}, d.options);
    this.__init()
  }
  var i = goog.getObjectByName("jx.grid"), h = goog.getObjectByName("jx.util"), g = goog.getObjectByName("jx.grid.Grid");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.TooltipManager", f);
  f.getInstance = function(d) {
    return new f(d)
  };
  var e = f.prototype;
  e.__init = function() {
    this.grid.event.bind({onCreateCss:this._onCreateCss, onDestroy:this._destroy, mouseoutCanvas:this._mouseoutCanvas, mousemoveCanvas:this._mousemoveCanvas, mouseoverCanvas:this._mouseoverCanvas}, this)
  };
  e._destroy = function() {
    this.grid.log("destroying TooltipManager instance...", g.V_INIT);
    i._destroy(this, {name:"TooltipManager", path:"tooltip", $:"_tooltip", property:"_ctnr", map:"_options"})
  };
  e._onCreateCss = function() {
    var d = this._options, c = [];
    c.push("#" + this.grid.mid + " ." + d.classTooltip + "{position:absolute;z-index:10;background:" + d.background + ";border:" + d.border + ";padding:" + d.padding + ";color:" + d.color + ";font:" + d.font + "}");
    return c.join("")
  };
  e._mouseoutCanvas = function() {
    h.isNotNull(this._tooltip) && (this._ctnr[0].removeChild(this._tooltip[0]), delete this._tooltip)
  };
  e._mousemoveCanvas = function(d) {
    var c = this._options;
    c.tooltipSyncEnabled && h.isNotNull(this._tooltip) && this._tooltip.css({left:d.pageX + c.offsetX + "px", top:d.pageY + c.offsetY + "px"})
  };
  e._mouseoverCanvas = function(d, c) {
    if(c.getColDef().tooltipEnabled && h.isNull(this._tooltip)) {
      var a = this._options, b = document.createElement("div");
      b.innerHTML = "<div class='" + a.classTooltip + "' style='left:" + (d.pageX + a.offsetX) + "px;top:" + (d.pageY + a.offsetY) + "px'>" + c.getValue() + "</div>";
      this._tooltip = $(b.firstChild);
      this._ctnr[0].appendChild(this._tooltip[0])
    }
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "PrintManager.js"...');
jx.grid.PrintManager = {};
(function() {
  function f(e) {
    this.mid = e.mid;
    this._ctnr = Util$.safe$(e.container);
    this.grid = e.grid;
    this._options = i._extend({title:"Print Preview", font:"15px arial,sans-serif", headerFontColor:"#27413E", headerBackgroundColor:"#DCDEDE", tableBorderColor:"#6E7174", headerBorderColor:"#909192", cellBorderColor:"#D0D7E5", winOptions:{name:"Print Preview", width:800, height:600, directories:"no", location:"no", menubar:"no", status:"no", toolbar:"no"}}, e.options);
    this.__init()
  }
  var i = goog.getObjectByName("jx.grid"), h = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.PrintManager", f);
  f.getInstance = function(e) {
    return new f(e)
  };
  var g = f.prototype;
  g.__init = function() {
    var e = this;
    this._ctnr[0].innerHTML = "<button type='button'>Print</button>";
    this._ctnr.click(function() {
      e.print()
    })
  };
  g.print = function() {
    var e = this.getPrintHtml(this.grid.colDefMgr.get(), this.grid.dataMgr.datalist), d = h.open(this._options.winOptions);
    d.document.write(e);
    d.document.close()
  };
  g.getPrintHtml = function(e, d) {
    var c = this._options, a = c.tableBorderColor, b = c.headerBorderColor, j = c.cellBorderColor, f = [], l = e.length, g = l - 1, h = d.length, i = h - 1, o = 0, m;
    f.push("<html><head>");
    f.push("<title>" + c.title + "</title>");
    f.push("</head><body onload='window.print();'>");
    f.push("<table width='100%' cellspacing='0' cellpadding='0'><tbody><tr><td align='left'>");
    f.push("<table width='100%' cellspacing='0' cellpadding='2' style='border-collapse:collapse'>");
    f.push("<tbody style='font:" + c.font + ";'>");
    for(f.push("<tr style='background-color:" + c.headerBackgroundColor + ";color:" + c.headerFontColor + ";text-align:center'>");o < l;o++) {
      f.push("<td style='border:solid 1px " + b + ";'>" + e[o].name + "</td>")
    }
    f.push("</tr>");
    for(o = 0;o < h;o++) {
      c = d[o];
      f.push("<tr>");
      if(o === 0) {
        for(m = 0;m < l;m++) {
          m === 0 ? f.push("<td style='border:solid 1px " + j + ";border-top:solid 1px " + b + ";border-left:solid 1px " + a + "'>" + c[e[m].key] + "</td>") : m === g ? f.push("<td style='border:solid 1px " + j + ";border-top:solid 1px " + b + ";border-right:solid 1px " + a + "'>" + c[e[m].key] + "</td>") : f.push("<td style='border:solid 1px " + j + ";border-top:solid 1px " + b + "'>" + c[e[m].key] + "</td>")
        }
      }else {
        if(o < i) {
          for(m = 0;m < l;m++) {
            m === 0 ? f.push("<td style='border:solid 1px " + j + ";border-left:solid 1px " + a + "'>" + c[e[m].key] + "</td>") : m === g ? f.push("<td style='border:solid 1px " + j + ";border-right:solid 1px " + a + "'>" + c[e[m].key] + "</td>") : f.push("<td style='border:solid 1px " + j + "'>" + c[e[m].key] + "</td>")
          }
        }else {
          for(m = 0;m < l;m++) {
            m === 0 ? f.push("<td style='border:solid 1px " + j + ";border-bottom:solid 1px " + a + ";border-left:solid 1px " + a + "'>" + c[e[m].key] + "</td>") : m === g ? f.push("<td style='border:solid 1px " + j + ";border-bottom:solid 1px " + a + ";border-right:solid 1px " + a + "'>" + c[e[m].key] + "</td>") : f.push("<td style='border:solid 1px " + j + ";border-bottom:solid 1px " + a + "'>" + c[e[m].key] + "</td>")
          }
        }
      }
      f.push("</tr>")
    }
    f.push("</tbody></table></td></tr></tbody></table></body></html>");
    return f.join("")
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "ViewportManager.js"...');
jx.grid.ViewportManager = {};
(function() {
  function f(b) {
    this.mid = b.mid;
    this._ctnr = b.container;
    this.grid = b.grid;
    this.grid.view = this;
    this._options = i._extend({attrRowIdx:"r", appendThreshold:3, renderThreshold:10, bufferSize:6, rowsPerPage:10, rowH:21, borderThickness:1, border:"solid #D0D7E5", padding:0, evenOddRows:!1, oddRowsBackground:"#F4F4F4", style:"", canvasStyle:"", rowStyle:"", cellStyle:"", classRow:"jgrid-row", classCell:"jgrid-cell", classView:"jgrid-viewport", classCanvas:"jgrid-canvas", focusBackground:"#FFF", focusOutline:"2px solid #f1ca7f", autoHeight:!1, autoWidth:!1}, b.options);
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
  var i = goog.getObjectByName("jx.grid"), h = goog.getObjectByName("jx.grid.Grid"), g = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var e = goog.getObjectByName("jx.grid.Cell"), d = {INPUT:!0, TEXTAREA:!0, LABEL:!0, FIELDSET:!0, LEGEND:!0, SELECT:!0, OPTGROUP:!0, OPTION:!0, BUTTON:!0}, c = {checkbox:!0, radio:!0};
  goog.exportSymbol("jx.grid.ViewportManager", f);
  f.getInstance = function(b) {
    return new f(b)
  };
  var a = f.prototype;
  a.__init = function() {
    this._mask = $("<div class='" + this._options.classView + "' tabIndex='0' style='width:100%' onscroll='JGM.m.ViewportManager." + this.mid + "._scroll()'>").appendTo(this._ctnr);
    this._canvas = $("<div class='" + this._options.classCanvas + "'>").appendTo(this._mask);
    this._canvasEl = this._canvas[0];
    this._mask.bind("selectstart.ui", function(b) {
      return $(b.target).is("input, textarea")
    });
    this._setColLefts();
    this._setCanvasWidth(this._calCanvasWidth());
    this._lastRowLen = this._datamgr.datalist.length;
    this._evtmgr.bind({canvasFind:this._canvasFind, onCreateCss:this._onCreateCss, onCreateDynamicCss:this._onCreateDynamicCss, onDestroy:this._onDestroy, keydown:this._keydown, keyup:this._keyup, keypress:this._keypress, mousein:this._mousein, mouseout:this._mouseout, mouseenter:this._mouseenter, mouseleave:this._mouseleave, mousemove:this._mousemove, mouseover:this._mouseover, mousedown:this._mousedown, mouseup:this._mouseup, click:this._click, dblclick:this._dblclick, resizeWidth:this._setWidth, 
    "resizeWidth onResizeCol onResizeCanvasHeight":this._resizeWidth, onAfterRefresh:this.onAfterRefresh, onRenderModules:this._render, changeVisibleColumns:this._onReorderCols, onResizeCanvasWidth:this._scroll, onUpdateDatarow:this.onUpdateDatarow, onUpdateDatalist:this.onUpdateDatalist, onRemoveDatarow:this.onRemoveDatarow, onRemoveDatalist:this.onRemoveDatalist, onIdChange:this.onIdChange, onIdListChange:this.onIdListChange, unsetDrag:this.unsetDrag}, this)
  };
  a.unsetDrag = function() {
    this._drag = !1
  };
  a._onDestroy = function() {
    this.grid.log("disposing ViewportManager instance...", h.V_INIT);
    i._destroy(this, {name:"ViewportManager", path:"view", $:"_canvas _mask", property:"_ctnr", map:"_vars _lockedRows _renderedRows _options"})
  };
  a._onCreateCss = function() {
    var b = "#" + this.grid.mid + " .", a = this._options, c = b + this._cellClass, d = b + this._rowClass, e = a.borderThickness + "px " + a.border, f = this._colmgr.get(), g = f.length, h = 0, i = [];
    i.push(b + a.classView + "{height:" + this._calHeight() + "px;outline:0;position:relative;white-space:nowrap;overflow:auto;line-height:" + a.rowH + "px;cursor:default;-moz-user-select:none;-webkit-user-select:none;" + a.style + ";}");
    i.push(b + a.classView + ":focus{background:" + a.focusBackground + ";outline:" + a.focusOutline + "}");
    i.push(b + a.classCanvas + "{height:" + this._calCanvasHeight() + "px;" + a.canvasStyle + ";}");
    i.push(d + "{background:white;position:absolute;" + a.rowStyle + "}");
    i.push(c + "{height:" + a.rowH + "px;border-bottom:" + e + ";display:inline-block;white-space:nowrap;overflow:hidden;float:left;text-overflow:ellipsis;padding-left:" + a.padding + "px;border-right:" + e + ";" + a.cellStyle + "}");
    for(a.evenOddRows && i.push(d + ".odd{background:" + a.oddRowsBackground + "}");h < g;h++) {
      i.push(c + ".k_" + f[h].key + "{" + f[h].style + "}")
    }
    return i.join("")
  };
  a._onCreateDynamicCss = function() {
    var b = "#" + this.grid.mid + " .", a = b + this._cellClass, c = b + this._rowClass;
    b += this._options.classCanvas;
    var d = this._calCanvasWidth(), e = this._colmgr.get(), f = "", g = e.length, h = 0;
    for(f += b + "{width:" + d + "px}" + c + "{width:" + d + "px}";h < g;h++) {
      f += a + ".k_" + e[h].key + "{width:" + e[h].width + "px}"
    }
    return f
  };
  a.onUpdateDatarow = function(b) {
    this.isRendered(b) && this.rerenderRow(b)
  };
  a.onUpdateDatalist = function(b) {
    for(var a, c = b.length, d = 0;d < c;d++) {
      a = b[d], this.isRendered(a) && this.rerenderRow(a)
    }
  };
  a.onRemoveDatarow = function(b) {
    this.destroyRow(b)
  };
  a.onRemoveDatalist = function(b) {
    for(var a = b.length, c = 0;c < a;c++) {
      this.destroyRow(b[c])
    }
  };
  a.onIdChange = function(b, a, c) {
    this.isRowLockedById(a) && (this._lockedRows[c] = this._lockedRows[a], delete this._lockedRows[a]);
    this.isRenderedById(a) && ((this._renderedRows[c] = this._renderedRows[a]).setAttribute("i", c), delete this._renderedRows[a])
  };
  a.onIdListChange = function(b, a, c) {
    for(var d = b.length, e = 0, f = this._lockedRows, g = this._renderedRows, h, i;e < d;e++) {
      h = a[e], i = b[e][c], f.hasOwnProperty(h) && (f[i] = f[h], delete f[h]), g.hasOwnProperty(h) && ((g[i] = g[h]).setAttribute("i", i), delete g[h])
    }
  };
  a._getCellSelector = function() {
    return"#" + this.grid.mid + " ." + this._cellClass
  };
  a._getRowSelector = function() {
    return"#" + this.grid.mid + " ." + this._rowClass
  };
  a.scrollTo = function(b, a) {
    this.scrollToRow(b);
    this.scrollToCol(a)
  };
  a.scrollToRowLazy = function(b) {
    var a = this.getScrollTop();
    return b == null ? a : this._getLastSafeVisibleRow() < b ? this.scrollToRow(this._getFirstRowForSafe(b)) : this._getFirstSafeVisibleRow() > b ? this.scrollToRow(b) : a
  };
  a.scrollToColLazy = function(b) {
    var a = this.getScrollLeft();
    if(b == null) {
      return a
    }
    if(this._getLastSafeVisibleCol() < b) {
      return this.setScrollLeft(this.getScrollHForSafe(b))
    }else {
      if(this._getFirstSafeVisibleCol() > b) {
        return this.scrollToCol(b)
      }
    }
    return a
  };
  a.scrollToLazy = function(b, a) {
    this.scrollToRowLazy(b);
    this.scrollToColLazy(a)
  };
  a.scrollToRow = function(b) {
    return b != null ? this.setScrollTop(this._getRowOuterHeight() * b) : this.getScrollTop()
  };
  a.scrollToCol = function(b) {
    return this.setScrollLeft(this.getColLeft(b))
  };
  a._getColInnerWidth = function(b) {
    return this._colmgr.get(b).width
  };
  a._getColInnerWidthByKey = function(b) {
    return this._colmgr.getByKey(b).width
  };
  a.getColWidth = function(b) {
    return this._colmgr.get(b).width + this._options.padding
  };
  a.getColWidthByKey = function(b) {
    return this._colmgr.getByKey(b).width + this._options.padding
  };
  a._getColOuterWidth = function(b) {
    return this._colmgr.get(b).width + this._options.padding + this._options.borderThickness
  };
  a._getColOuterWidthByKey = function(b) {
    return this._colmgr.getByKey(b).width + this._options.padding + this._options.borderThickness
  };
  a._getPadding = function() {
    return this._options.padding
  };
  a._colWidthPlus = function() {
    return i.browser.browser == "Explorer" && (i.browser.version < 7 || document.documentMode < 7) ? 0 : this._options.padding + this._options.borderThickness
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
    return this._getRowOuterHeight() * this._datamgr.datalist.length || 1
  };
  a.getCanvasHeight = function() {
    return this._canvasEl.clientHeight
  };
  a._setCanvasHeight = function(b) {
    b = parseInt(b, 10);
    if(isNaN(b) || b < 1) {
      b = 1
    }
    var a = this.getCanvasHeight();
    if(b != a) {
      this._canvasEl.style.height = b + "px", this._evtmgr.trigger("onResizeCanvasHeight", [b, a], !0)
    }
  };
  a._calCanvasWidth = function() {
    return this._colLefts[this._colmgr.length()]
  };
  a.getCanvasWidth = function() {
    return this._canvasEl.clientWidth
  };
  a._setCanvasWidth = function(b) {
    typeof b != "number" && (b = parseInt(b, 10));
    if(isFinite(b) && !(b < 1)) {
      var a = this.getCanvasWidth();
      if(b != a) {
        this.grid.log("set canvas width. " + a + "->" + b, h.V_RESIZE), this._canvasEl.style.width = b + "px", this._evtmgr.trigger("onResizeCanvasWidth", [b, a], !0)
      }
    }
  };
  a.getColLeft = function(b) {
    return this._colLefts[b]
  };
  a._getColLefts = function() {
    return this._colLefts
  };
  a._setColLefts = function(b, a) {
    for(var b = b || 0, c = this._colmgr.get(), d = this._colWidthPlus(), a = a || c.length;b < a;b++) {
      this._colLefts[b + 1] = this._colLefts[b] + c[b].width + d
    }
    return this._colLefts
  };
  a._onReorderCols = function() {
    this._setColLefts();
    this._rerender()
  };
  a.setWidthByKey = function(b, a) {
    var c = this._colmgr.getByKey(b), a = g.bound(a, c.minW, c.maxW);
    if(a !== c.width) {
      this.grid.log("set column width. key=" + b + ", w=" + a, h.V_RESIZE);
      var d = this._evtmgr, e = this._colmgr, f = [b, a, c.width];
      c.width = a;
      this._setCanvasWidth(this._setColLefts(e.getIdxByKey(b))[e.length()]);
      this.grid._recreateDynamicCss();
      d.trigger("onResizeCol_" + b, f, !0);
      d.trigger("onResizeCol", f, !0)
    }
  };
  a._autoColWidth = function(b) {
    for(var a = this._canvasFind(".k_" + b), c = Number.MIN_VALUE, d = a.length, e = 0;e < d;e++) {
      if(c < a[e].scrollWidth) {
        c = a[e].scrollWidth
      }
    }
    c -= this._getPadding();
    this.setWidthByKey(b, c)
  };
  a._setWidth = function() {
  };
  a.getScrollTop = function() {
    return this._mask[0].scrollTop
  };
  a.getScrollLeft = function() {
    return this._mask[0].scrollLeft
  };
  a.setScrollTop = function(b) {
    var a = this.getScrollTop();
    return b != null && a != b ? this._mask[0].scrollTop = b : a
  };
  a.setScrollLeft = function(b) {
    var a = this.getScrollLeft();
    return b != null && a != b ? this._mask[0].scrollLeft = b : a
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
  a._getFirstRowForSafe = function(b) {
    return b - Math.floor(this._mask[0].clientHeight / this._getRowOuterHeight()) + 1
  };
  a._getFirstVisibleCol = function() {
    for(var b = this.getScrollLeft(), a = this._colLefts, c = 0, d = a.length;c < d;c++) {
      if(a[c] > b) {
        return c - 1
      }
      if(a[c] === b) {
        return c
      }
    }
    return d - 2
  };
  a._getFirstSafeVisibleCol = function() {
    for(var b = this.getScrollLeft(), a = this._colLefts, c = 0, d = a.length;c < d;c++) {
      if(a[c] >= b) {
        return c
      }
    }
    return d - 2
  };
  a._getLastVisibleCol = function() {
    for(var b = this.getScrollLeft() + this._mask[0].clientWidth, a = this._colLefts, c = 0, d = a.length;c < d;c++) {
      if(a[c] >= b) {
        return c - 1
      }
    }
    return d - 2
  };
  a._getLastSafeVisibleCol = function() {
    for(var b = this.getScrollLeft() + this._mask[0].clientWidth, a = this._colLefts, c = 0, d = a.length;c < d;c++) {
      if(a[c] > b) {
        return c - 2
      }
    }
    return d - 2
  };
  a._getFirstColForSafe = function(b) {
    var a = this._colLefts, c = a[b + 1] - this._mask[0].clientWidth, d = b;
    if(c <= 0) {
      return 0
    }
    for(;d >= 0;d--) {
      if(d === b && a[d] <= c || a[d] === c) {
        return d
      }
      if(a[d] < c) {
        return d + 1
      }
    }
    return 0
  };
  a.getScrollHForSafe = function(b) {
    var a = this._colLefts, c = a[b + 1] - this._mask[0].clientWidth;
    return a[b] <= c ? a[b] : c
  };
  a._getRenderRange = function() {
    if(this._options.autoHeight) {
      return{start:0, end:this._datamgr.datalist.length - 1}
    }
    var b, a = this._datamgr.datalist.length - 1;
    return{start:(b = this._getFirstVisibleRow() - this._options.bufferSize) < 0 ? 0 : b, end:(b = this._getLastVisibleRow() + this._options.bufferSize) > a ? a : b}
  };
  a._fitHeight = function() {
    this._mask[0].style.height = this.getCanvasHeight() + this._heightPlus() + "px"
  };
  a._resizeWidth = function() {
    this._options.autoHeight && this._fitHeight()
  };
  a.onAfterRefresh = function(b) {
    b !== void 0 && b.noRerender === !0 || this._rerender()
  };
  a._rerender = function() {
    var b = this.getScrollTop(), a = this.getScrollLeft();
    this._evtmgr.trigger("onBeforeRerender", !1, !0);
    this.unlockAllRows();
    this._removeRows();
    var c = this._datamgr.datalist.length;
    if(this._lastRowLen !== c) {
      this._lastRowLen = c, this._setCanvasHeight(this._calCanvasHeight())
    }
    this._render();
    this.setScrollTop(b);
    this.setScrollLeft(a);
    this._evtmgr.trigger("onAfterRerender", !1, !0)
  };
  a._render = function(b) {
    this._removeAndRenderRows(b)
  };
  a._renderShift = function(b) {
    b = b || this._getRenderRange();
    this._removeRowsExcept(b);
    this._appendRows(b)
  };
  a._removeRows = function(b) {
    var a = this._canvasEl, c = this._renderedRows, d = this._lockedRows, e;
    if(b) {
      for(var f = b.start, b = b.end, g = this._datamgr;f <= b;f++) {
        if(!d.hasOwnProperty(e = g.getIdByIdx(f)) && c.hasOwnProperty(e)) {
          a.removeChild(c[e]), delete c[e]
        }
      }
    }else {
      if(this._lockExist()) {
        for(e in c) {
          c.hasOwnProperty(e) && d.hasOwnProperty(e) && (a.removeChild(c[e]), delete c[e])
        }
      }else {
        this._renderedRows = {}, a.innerHTML = ""
      }
    }
  };
  a._removeRowsExcept = function(b) {
    var a = this._canvasEl, c = this._renderedRows, d = this._lockedRows, e;
    if(b) {
      var f = b.start, b = b.end, g = this._datamgr, h;
      for(e in c) {
        if(c.hasOwnProperty(e) && !(d.hasOwnProperty(e) || f <= (h = g.getIdxById(e)) && h <= b)) {
          a.removeChild(c[e]), delete c[e]
        }
      }
    }else {
      if(this._lockExist()) {
        for(e in c) {
          c.hasOwnProperty(e) && d.hasOwnProperty(e) === !1 && (a.removeChild(c[e]), delete c[e])
        }
      }else {
        this._renderedRows = {}, a.innerHTML = ""
      }
    }
  };
  a.destroyRow = function(b) {
    return this.destroyRowById(this._datamgr.getId(b))
  };
  a.destroyRowById = function(b) {
    b != null && (this.unlockRowById(b), this._renderedRows.hasOwnProperty(b) && (this._canvasEl.removeChild(this._renderedRows[b]), delete this._renderedRows[b]))
  };
  a.destroyRowByIdx = function(b) {
    return this.destroyRowById(this._datamgr.getIdByIdx(b))
  };
  a._lockExist = function() {
    return g.isNotEmptyObj(this._lockedRows)
  };
  a.isRowLockedById = function(b) {
    return b != null ? this._lockedRows.hasOwnProperty(b) : !1
  };
  a.isRowLocked = function(b) {
    return this.isRowLockedById(this._datamgr.getId(b))
  };
  a.isRowLockedByIdx = function(b) {
    return this.isRowLockedById(this._datamgr.getIdByIdx(b))
  };
  a.lockRowById = function(b) {
    b != null && this._datamgr.hasById(b) && (this._lockedRows[b] = !0)
  };
  a.lockRow = function(b) {
    return this.lockRowById(this._datamgr.getId(b))
  };
  a.lockRowByIdx = function(b) {
    return this.lockRowById(this._datamgr.getIdByIdx(b))
  };
  a.unlockRowById = function(b) {
    this.isRowLockedById(b) && delete this._lockedRows[b]
  };
  a.unlockRow = function(b) {
    return this.unlockRowById(this._datamgr.getId(b))
  };
  a.unlockRowByIdx = function(b) {
    return this.unlockRowById(this._datamgr.getIdByIdx(b))
  };
  a.unlockAllRows = function() {
    this._lockedRows = {}
  };
  a.rerenderRowById = function(b) {
    if(this._datamgr.containsById(b)) {
      var a = this._renderedRows, c = this._canvasEl, d = this._datamgr, e = d.idKey, f = d.getIdxById(b), d = d.getById(b), h = this._colmgr.get(), i = this._getColCellClasses(h).map(function(b) {
        return"<div class='" + b + " "
      }), m = this._getRendererSettings(h), n = m[0], m = m[1], q = this._getRowOuterHeight(), r = "<div class='" + this._rowClass + " odd' i='", s = "<div class='" + this._rowClass + "' i='", u = "' " + this._rowIdxAttr + "='", v = [];
      a.hasOwnProperty(b) && (c.removeChild(a[b]), this._evtmgr.trigger("onBeforeRenderRows", [[f]], !0), v.push((f % 2 ? s : r) + d[e] + u + f + "' style='top:" + q * f + "px'>"), this._renderRow(v, f, d, h, i, n, m), a[b] = g.appendHTML(c, v.join(""))[0], this._evtmgr.trigger("onAppendRows", [[f]], !0))
    }
  };
  a._getRendererSettings = function(b) {
    for(var b = b || this._colmgr.get(), a = 0, c = b.length, d, e = [], f = [], g;a < c;a++) {
      d = b[a], (g = d.renderer) ? (e.push(!!d.rendererInput), f.push(g)) : (e.push(!1), f.push(!1))
    }
    return[f, e]
  };
  a.rerenderRow = function(b) {
    return this.rerenderRowById(this._datamgr.getId(b))
  };
  a.rerenderRowByIdx = function(b) {
    return this.rerenderRowById(this._datamgr.getIdByIdx(b))
  };
  a.rerenderCellByIdAndKey = function(b, a) {
    var c = this.getCellByIdAndKey(b, a);
    if(c) {
      var d = this._datamgr, e = this._colmgr, f = d.getById(b), g = e.getByKey(a), d = d.getIdxById(b), e = e.getIdxByKey(a), h = g.renderer, i = h ? g.rendererInput : !1, n = [];
      h ? i ? this._renderCell(n, d, e, f, g, h, !0) : this._renderCell(n, d, e, f, g, h) : this._renderCell(n, d, e, f, g);
      c.innerHTML = n.join("")
    }
  };
  a.rerenderCellByIdx = function(b, a) {
    return this.rerenderCellByIdAndKey(this._datamgr.getIdByIdx(b), this._colmgr.getKeyByIdx(a))
  };
  a._appendRows = function(b) {
    var a = this._evtmgr, c = [b], d = [], e = b.start, b = b.end, f = this._datamgr, h = f.datalist, i = f.idKey, m = this._colmgr.get(), n = this._getColCellClasses(m).map(function(b) {
      return"<div class='" + b + " "
    }), f = this._renderedRows, q = this._getRowOuterHeight(), r = this._canvasEl, s = "<div class='" + this._rowClass + " odd' i='", u = "<div class='" + this._rowClass + "' i='", v = "' " + this._rowIdxAttr + "='", w = this._getRendererSettings(m), B = w[0], y = w[1], z, A, w = [];
    a.trigger("onBeforeRenderRows", c, !0);
    for(this.grid.twstart();e <= b;e++) {
      z = h[e], A = z[i], f.hasOwnProperty(A) || (d[d.length] = (e % 2 ? u : s) + A + v + e + "' style='top:" + q * e + "px'>", this._renderRow(d, e, z, m, n, B, y), this.grid.twlap(), w.push(A))
    }
    this.grid.twprint();
    this.grid.twstop();
    d = g.appendHTML(r, d.join(""));
    e = 0;
    for(b = w.length;e < b;e++) {
      f[w[e]] = d[e]
    }
    a.trigger("onAppendRows", c, !0)
  };
  a._removeAndRenderRows = function(b) {
    var b = b || this._getRenderRange(), a = this._evtmgr, c = [b], d = [], e = b.start, b = b.end, f = this._datamgr, g = f.datalist, f = f.idKey, h = this._colmgr.get(), i = this._getColCellClasses(h).map(function(b) {
      return"<div class='" + b + " "
    }), n = this._getRowOuterHeight(), q = this._canvasEl, r = "<div class='" + this._rowClass + " odd' i='", s = "<div class='" + this._rowClass + "' i='", u = "' " + this._rowIdxAttr + "='", v = this._getRendererSettings(h), w = v[0], v = v[1], B, y, z = [], A = {};
    a.trigger("onBeforeRenderRows", c, !0);
    for(this.grid.twstart();e <= b;e++) {
      B = g[e], y = B[f], d[d.length] = (e % 2 ? s : r) + y + u + e + "' style='top:" + n * e + "px'>", this._renderRow(d, e, B, h, i, w, v), this.grid.twlap(), z.push(y)
    }
    this.grid.twprint();
    this.grid.twstop();
    q.innerHTML = d.join("");
    e = 0;
    for(b = z.length;e < b;e++) {
      A[z[e]] = q.childNodes[e]
    }
    this._renderedRows = A;
    a.trigger("onAppendRows", c, !0)
  };
  a._renderColumn = function(b, a, c, d, f, g, h) {
    for(var i = [], m, n = 0, q = c.length, r, s, u, v = a.key, w, B = this.grid, y = this._evtmgr, z = "onRenderCell_" + v, A = [null, b, s, a], C = [null, b, null, a, null];n < q;n++) {
      r = c[n];
      s = d[r];
      u = s[v];
      m = [];
      C[0] = A[0] = r;
      C[2] = s;
      C[4] = m;
      w = y.trigger("onGetCellClass", A);
      m[m.length] = w ? f + w.join(" ") + "'>" : f + "'>";
      y.trigger(z + "_prepend", C, !0);
      if(typeof u != "string" || u.substring(0, 3) !== "J@H") {
        g ? m[m.length] = h ? g(new e({grid:B, row:r, col:b, datarow:s, colDef:a})) : g(u, r, b, s, a) : u != null && (m[m.length] = u)
      }
      y.trigger(z + "_append", C, !0);
      m[m.length] = "</div>";
      i[i.length] = m.join("")
    }
    return i
  };
  a._getColCellClass = function(b) {
    var a = this._cellClass + " k_" + b.key;
    b.colClass && (a += " " + b.colClass);
    (b = this._evtmgr.trigger("onGetColCellClass", [b])) && (a += " " + b.join(" "));
    return a
  };
  a._getColCellClasses = function(b) {
    for(var b = b || this._colmgr.get(), a = [], c = 0, d = b.length;c < d;c++) {
      a.push(this._getColCellClass(b[c]))
    }
    return a
  };
  a._renderRow = function(b, a, c, d, e, f, g) {
    for(var h = 0, i = d.length, n, q = [a, null, c, null], r = this._evtmgr, s, u;h < i;h++) {
      n = d[h], q[1] = h, q[3] = n, s = r.trigger("onGetCellClass", q), b[b.length] = s ? e[h] + s.join(" ") + "'>" : e[h] + "'>", (u = f[h]) ? g[h] ? this._renderCell(b, a, h, c, n, u, !0) : this._renderCell(b, a, h, c, n, u) : this._renderCell(b, a, h, c, n), b[b.length] = "</div>"
    }
    b[b.length] = "</div>";
    return b
  };
  a._renderCell = function(b, a, c, d, f) {
    var g = f.key, h = d[g], i = [a, c, d, f, b], m = this._evtmgr, g = "onRenderCell_" + g;
    m.trigger(g + "_prepend", i, !0);
    if(typeof h != "string" || h.substring(0, 3) !== "J@H") {
      arguments.length > 5 ? b[b.length] = arguments[6] ? arguments[5](new e({grid:this.grid, row:a, col:c, datarow:d, colDef:f})) : arguments[5](h, a, c, d, f) : h != null && (b[b.length] = h)
    }
    m.trigger(g + "_append", i, !0)
  };
  e.prototype.rerender = function() {
    return this.grid.view.rerenderCellByIdAndKey(this.getId(), this.getKey())
  };
  e.prototype.scrollTo = function() {
    this.grid.view.scrollTo(this.getRowIdx(), this.getColIdx())
  };
  a._keydown = function(b) {
    g.contains(this._mask[0], document.activeElement, this._ctnr[0]) && (this.grid.log("UI event:keydown on Viewport. event=" + b.type + ", keycode=" + b.which, h.V_KEYDOWN), this._evtmgr.trigger("keydownCanvas_" + b.which, [b], !0), this._evtmgr.trigger("keydownCanvas", [b], !0))
  };
  a._keyup = function(b) {
    g.contains(this._mask[0], document.activeElement, this._ctnr[0]) && (this.grid.log("UI event:keyup on Viewport. event=" + b.type + ", keycode=" + b.which, h.V_KEYUP), this._evtmgr.trigger("keyupCanvas_" + b.which, [b], !0), this._evtmgr.trigger("keyupCanvas", [b], !0))
  };
  a._keypress = function(b) {
    g.contains(this._mask[0], document.activeElement, this._ctnr[0]) && (this.grid.log("UI event:keypress on Viewport. event=" + b.type + ", keycode=" + b.which, h.V_KEYPRESS), this._evtmgr.trigger("keypressCanvas_" + b.which, [b], !0), this._evtmgr.trigger("keypressCanvas", [b], !0))
  };
  a._mousein = function(b) {
    this._drag ? this._triggerMouseEvent(b, "draginCanvas,mouseinCanvas", h.V_MOUSEIN) : this._triggerMouseEvent(b, "mouseinCanvas", h.V_MOUSEIN)
  };
  a._mouseout = function(b) {
    this._drag ? this._triggerMouseEvent(b, "dragoutCanvas,mouseoutCanvas", h.V_MOUSEOUT) : this._triggerMouseEvent(b, "mouseoutCanvas", h.V_MOUSEOUT)
  };
  a._mouseenter = function(b) {
    this._drag ? this._triggerMouseEvent(b, "dragenterCanvas,mouseenterCanvas", h.V_MOUSEENTER) : this._triggerMouseEvent(b, "mouseenterCanvas", h.V_MOUSEENTER)
  };
  a._mouseleave = function(b) {
    this._drag ? this._triggerMouseEvent(b, "dragleaveCanvas,mouseleaveCanvas", h.V_MOUSELEAVE) : this._triggerMouseEvent(b, "mouseleaveCanvas", h.V_MOUSELEAVE)
  };
  a._mousemove = function(b) {
    this._drag ? this._triggerMouseEvent(b, "dragmoveCanvas,mousemoveCanvas", h.V_MOUSEMOVE) : this._triggerMouseEvent(b, "mousemoveCanvas", h.V_MOUSEMOVE)
  };
  a._mouseover = function(b) {
    this._drag ? this._triggerMouseEvent(b, "dragoverCanvas,mouseoverCanvas", h.V_MOUSEOVER) : this._triggerMouseEvent(b, "mouseoverCanvas", h.V_MOUSEOVER)
  };
  a._mousedown = function(b) {
    if(this._triggerMouseEvent(b, "mousedownCanvas", h.V_MOUSEDOWN)) {
      this._drag = !0
    }
  };
  a._mouseup = function(b) {
    this._drag = !1;
    this._triggerMouseEvent(b, "mouseupCanvas", h.V_MOUSEUP)
  };
  a._click = function(b) {
    this._triggerMouseEvent(b, "clickCanvas", h.V_CLICK) && this.focus(b)
  };
  a._dblclick = function(b) {
    this._triggerMouseEvent(b, "dblclickCanvas", h.V_DBLCLICK)
  };
  a._triggerMouseEvent = function(b, a, f) {
    var g = b.target;
    if(g) {
      var h = g.tagName, g = g.type && g.type.toLowerCase();
      if(c[g] || !d[h]) {
        if(h = this._getClosestCell(b.target)) {
          this.grid.log("UI event:" + a + " on Viewport. event=" + b.type, f);
          h = new e({grid:this.grid, node:h});
          f = h.getKey();
          b = [b, h];
          h = this._evtmgr;
          if(a.indexOf(",") > -1) {
            for(var a = a.split(","), g = 0, i = a.length, p;g < i;g++) {
              p = a[g], h.trigger(p + "_" + f, b, !0), h.trigger(p, b, !0)
            }
          }else {
            h.trigger(a + "_" + f, b, !0), h.trigger(a, b, !0)
          }
          return!0
        }
      }
    }
    return!1
  };
  a._scroll = function() {
    var a = this.getScrollTop(), c = a - this._lastScrollTop, d = this.getScrollLeft(), e = d - this._lastScrollLeft;
    if(c !== 0 || e !== 0) {
      this.grid.log("Viewport scrolled... h=" + e + ", v=" + c, h.V_SCROLL);
      var f = this._evtmgr, c = Math.abs(c / this._getRowOuterHeight());
      f.trigger("onScrollViewport", !1, !0);
      if(e) {
        this._lastScrollLeft = d, f.trigger("onScrollViewportH", [d], !0)
      }
      d = this.renderElapsed;
      d == null && (d = 50);
      d > 500 && (d = 500);
      if(c >= this._options.appendThreshold) {
        if(this.scrollHandlerId) {
          window.clearTimeout(this.scrollHandlerId), this.scrollHandlerId = null
        }
        var g = this;
        this.scrollHandlerId = window.setTimeout(function() {
          var c = (new Date).getTime();
          g._lastScrollTop = a;
          g._removeAndRenderRows();
          f.trigger("onScrollViewportV", !1, !0);
          g.renderElapsed = (new Date).getTime() - c
        }, d)
      }
    }
  };
  a.focus = function(a) {
    a && this._evtmgr.triggerInvalid("onBeforeFocusCanvas", [a])
  };
  a.isRenderedById = function(a) {
    return a != null ? this._renderedRows.hasOwnProperty(a) : !1
  };
  a.isRendered = function(a) {
    return this.isRenderedById(this._datamgr.getId(a))
  };
  a.isRenderedByIdx = function(a) {
    return this.isRenderedById(this._datamgr.getIdByIdx(a))
  };
  a.getRowById = function(a) {
    if(this.isRenderedById(a)) {
      return this._renderedRows[a]
    }
  };
  a.getRow = function(a) {
    return this.getRowById(this._datamgr.getId(a))
  };
  a.getRowByIdx = function(a) {
    return this.getRowById(this._datamgr.getIdByIdx(a))
  };
  a.getRenderedRowById = function(a) {
    if(this.isRenderedById(a)) {
      return this._renderedRows[a]
    }
  };
  a.getRenderedRow = function(a) {
    return this.getRenderedRowById(this._datamgr.getId(a))
  };
  a.getRenderedRowByIdx = function(a) {
    return this.getRenderedRowById(this._datamgr.getIdByIdx(a))
  };
  a.getRenderedRows = function() {
    return g.toArray(this._renderedRows)
  };
  a.getCell = function(a, c) {
    if(c != null) {
      var d = this.getRowByIdx(a);
      if(d) {
        return d.childNodes[c]
      }
    }
  };
  a.getCellByIdAndKey = function(a, c) {
    var d = this._colmgr.getIdxByKey(c);
    if(d != null) {
      var e = this.getRowById(a);
      if(e) {
        return e.childNodes[d]
      }
    }
  };
  a.getRenderedCell = function(a, c) {
    if(c != null) {
      var d = this.getRenderedRowByIdx(a);
      if(d) {
        return d.childNodes[c]
      }
    }
  };
  a.getRenderedCellByIdAndKey = function(a, c) {
    var d = this._colmgr.getIdxByKey(c);
    if(d != null) {
      var e = this.getRenderedRowById(a);
      if(e) {
        return e.childNodes[d]
      }
    }
  };
  a._getClosestCell = function(a) {
    return g.closestWithTag(a, "DIV", this._cellClass, this._canvasEl)
  };
  a._getClosestRow = function(a) {
    return g.closestWithTag(a, "DIV", this._rowClass, this._canvasEl)
  };
  a._getClosestRowIdx = function(a) {
    return this._datamgr.getIdxByNode(this._getClosestRow(a))
  };
  a._canvasFind = function(a) {
    return this._canvas.find(a)
  };
  f._renderer = function(a) {
    return a == null ? "" : a
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "ColumnManager.js"...');
jx.grid.ColumnManager = {};
(function() {
  function f(b) {
    this.mid = b.mid;
    this.grid = b.grid;
    this.grid.colDefMgr = this;
    this._options = a._extend({colDef:{type:"string", key:void 0, name:"", colClass:void 0, defaultValue:void 0, inputOnCreate:void 0, style:"", headerStyle:"", width:80, minW:0, maxW:void 0, editor:void 0, sorter:void 0, hidden:!1, sumRenderer:void 0, tooltipEnabled:!1, resizable:!1, renderer:void 0, rendererInput:!1, noTitle:!1, noName:!1, title:void 0, noSearch:!1, filter:void 0, parser:void 0, validator:void 0, nullOnCreate:!1, notNull:!1}}, b.options);
    this._colDefs = [];
    this._filtered = [];
    this._keyToDef = {};
    this._keyToIdx = {};
    this._parsers = {};
    this._sorters = {};
    this._validators = {};
    this._nullOnCreates = {};
    this._groupsByName = this._groups = null;
    this.__init(b)
  }
  function i(a) {
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
  function h(a) {
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
  function g(a) {
    return typeof a != "string" ? a == null ? "" : a.toString() : a
  }
  function e(a) {
    return new Date(Date.parse(a))
  }
  function d(a, b) {
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
  function c(a) {
    switch(typeof a) {
      case "undefined":
        return Number.MAX_VALUE;
      case "boolean":
        return a ? 1 : 0;
      case "number":
        return a
    }
    return a == null ? Number.MAX_VALUE : h(a) ? 1 : 0
  }
  var a = goog.getObjectByName("jx.grid"), b = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var j = goog.getObjectByName("jx.grid.Grid");
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
    this.grid.log("destroying ColumnManager instance...", j.V_INIT);
    a._destroy(this, {name:"ColumnManager", path:"colDefMgr", property:"_colDefs", map:"_keyToIdx _keyToDef _options", array:"_filtered"})
  };
  k.getAll = function() {
    return this._colDefs
  };
  k.empty = function() {
    this._colDefs = [];
    this._filtered.length = 0;
    this._keyToIdx = {};
    this._keyToDef = {};
    this._parsers = {};
    this._sorters = {};
    this._validators = {};
    this._nullOnCreates = {};
    this._groupsByName = this._groups = null
  };
  k.set = function(a) {
    a = a || [];
    if(this._colDefs === a) {
      return a
    }
    this.empty();
    this.eventChangeVisible();
    var b = 0, c = a.length, d, e, f = a.some(function(a) {
      return a.parent != null
    });
    if(f) {
      var g = this._groups = [], j = this._groupsByName = {}
    }
    for(;b < c;b++) {
      d = a[b];
      e = d.key;
      try {
        if(this.hasKey(e, !0)) {
          throw Error("duplicate column key, key = " + e);
        }
      }catch(h) {
        throw this.empty(), h;
      }
      if(f) {
        e = d.parent = d.parent == null ? d.name || d.key : d.parent, j.hasOwnProperty(e) || g.push(j[e] = []), j[e].push(d)
      }
      this._extend(d)
    }
    if(f) {
      b = 0;
      c = g.length;
      for(a = [];b < c;b++) {
        j = g[b];
        d = 0;
        for(f = j.length;d < f;d++) {
          a.push(j[d])
        }
      }
    }
    this._colDefs = a;
    this._filter();
    this.eventChangeVisible();
    return a
  };
  k.reorganizeGroups = function() {
    if(this.hasGroups()) {
      for(var a = this._colDefs, b = 0, c = a.length, d, e = this._groups = [], f = this._groupsByName = {}, g;b < c;b++) {
        d = a[b], g = d.parent = d.parent == null ? d.name || d.key : d.parent, f.hasOwnProperty(g) || e.push(f[g] = []), f[g].push(d)
      }
      b = 0;
      c = e.length;
      for(colDefs = [];b < c;b++) {
        f = e[b];
        a = 0;
        for(d = f.length;a < d;a++) {
          colDefs.push(f[a])
        }
      }
      this._colDefs = colDefs
    }
  };
  k.hasGroups = function() {
    return!!this._groups
  };
  k.getGroups = function() {
    return this._groups
  };
  k.getGroupByName = function(a) {
    if(a != null && this._groupsByName && this._groupsByName.hasOwnProperty(a)) {
      return this._groupsByName[a]
    }
  };
  k.getGroupByGroupIdx = function(a) {
    return this._groups[a]
  };
  k.getGroupIndexByKey = function(a) {
    var b = this._groups;
    if(b) {
      for(var c = 0, d = b.length, e, f, g;c < d;c++) {
        e = b[c];
        f = 0;
        for(g = e.length;f < g;f++) {
          if(e[f].key == a) {
            return c
          }
        }
      }
    }
    return null
  };
  k.getSorter = function(a) {
    if(a == null) {
      return this._sorters
    }
    if(this.hasKey(a, !0)) {
      var b = this._sorters;
      return b.hasOwnProperty(a) ? b[a] : null
    }
    throw Error("column key not found! key=" + a);
  };
  k.getValidator = function(a) {
    if(a == null) {
      return this._validators
    }
    if(this.hasKey(a, !0)) {
      var b = this._validators;
      return b.hasOwnProperty(a) ? b[a] : null
    }
    throw Error("column key not found! key=" + a);
  };
  k.getParser = function(a) {
    if(a == null) {
      return this._parsers
    }
    if(this.hasKey(a, !0)) {
      var b = this._parsers;
      return b.hasOwnProperty(a) ? b[a] : null
    }
    throw Error("column key not found! key=" + a);
  };
  k.getNullOnCreate = function(a) {
    if(a == null) {
      return this._nullOnCreates
    }
    if(this.hasKey(a, !0)) {
      return this._nullOnCreates.hasOwnProperty(a)
    }
    throw Error("column key not found! key=" + a);
  };
  k.push = function(a) {
    return this.addAt(this._filtered.length, a)
  };
  k.addAt = function(a, b) {
    var c = b.key, d = this._colDefs;
    if(this.hasKey(c, !0)) {
      throw Error("duplicate column key, key = " + c);
    }
    if(a < 0 || a > d.length) {
      throw Error("index out of bound, i = " + a);
    }
    d.addAt(a, this._extend(b));
    this.reorganizeGroups();
    this._filter();
    this.eventChangeVisible();
    return d.length
  };
  k._extend = function(a) {
    if(a && !a._extended) {
      a._extended = !0;
      var b = {}, c, d;
      $.extend(!0, b, this._options.colDef);
      $.extend(!0, b, a);
      $.extend(!0, a, b);
      d = a.type = i(a.type);
      b = a.key.toString();
      this._keyToDef[b] = a;
      if(c = a.sorter) {
        typeof c == "string" ? c = i(c) : d && (c = d);
        if(c = f.sorter(c, b)) {
          c.key = b, this._sorters[b] = c
        }
        a.sorter = c
      }
      if(c = a.parser) {
        if(d && typeof c != "function") {
          switch(d) {
            case "boolean":
              c = h;
              break;
            case "int":
              c = function(a) {
                return parseInt(a, 10)
              };
              break;
            case "float":
              c = parseFloat;
              break;
            case "string":
              c = g;
              break;
            case "date":
              c = e;
              break;
            default:
              c = null
          }
          a.parser = c
        }
        this._parsers[b] = c
      }
      a.inputOnCreate = !!a.inputOnCreate;
      a.hidden = !!a.hidden;
      a.tooltipEnabled = !!a.tooltipEnabled;
      a.resizable = !!a.resizable;
      a.rendererInput = !!a.rendererInput;
      a.noTitle = !!a.noTitle;
      a.noName = !!a.noName;
      a.noSearch = !!a.noSearch;
      a.nullOnCreate = !!a.nullOnCreate;
      if(d = a.validator) {
        this._validators[b] = d
      }
      a.nullOnCreate && (this._nullOnCreates[b] = !0)
    }
    return a
  };
  k.setVisible = function(a, b) {
    var c = this.getByKey(a, !0);
    if(!c) {
      throw Error("column key not found! key=" + a);
    }
    b = !!b;
    if(!c.hidden !== b) {
      c.hidden = !b, this._filter(), this.eventChangeVisible()
    }
    return c
  };
  k.show = function(a) {
    return this.setVisible(a, !0)
  };
  k.hide = function(a) {
    return this.setVisible(a, !1)
  };
  k._filter = function() {
    this._filtered = this._colDefs.filter(function(a) {
      return!a.hidden
    });
    this._reidx();
    return this._filtered
  };
  k._reidx = function(a) {
    for(var a = a || 0, b = this._filtered, c = b.length, d = this._keyToIdx = {};a < c;a++) {
      d[b[a].key] = a
    }
    return d
  };
  k.get = function(a) {
    if(a == null) {
      return this._filtered
    }
    var b = this._filtered;
    if(a < 0 || a >= b.length) {
      throw Error("index out of bound, i = " + a);
    }
    return this._filtered[a]
  };
  k.checkKey = function(a, b) {
    if(a == null) {
      if(b) {
        throw Error("column key is null");
      }
      return!1
    }
    typeof a != "string" && (a = a.toString());
    if(!a && b) {
      throw Error("column key is empty");
    }
    return!0
  };
  k.mapKeys = function(a) {
    var b = this;
    return a.map(function(a) {
      var c = b.getByKey(a, !0);
      if(!c) {
        throw Error("column key not found! key=" + a);
      }
      return c
    })
  };
  k.getByKey = function(a, b) {
    return this.hasKey(a, b) ? this._keyToDef[a] : null
  };
  k.hasKey = function(a, b) {
    return this.checkKey(a, b) ? this._keyToDef.hasOwnProperty(a) : !1
  };
  k.length = function() {
    return this._filtered.length
  };
  k.getIdxByKey = function(a) {
    return this._keyToIdx.hasOwnProperty(a) ? this._keyToIdx[a] : -1
  };
  k.getIdx = function(a) {
    return b.isNotNull(a) && this._keyToIdx.hasOwnProperty(a.key) ? this._keyToIdx[a.key] : -1
  };
  k.sortByKey = function(a) {
    var b = this._filtered, c = this._keyToIdx = {};
    b.length = 0;
    this.grid.event.trigger("onReorderCols", [this.mapKeys(a).forEach(function(a, d) {
      a.hidden || (b.push(a), c[a.key] = d)
    })], !0);
    this.eventChangeVisible();
    return b
  };
  k.eventChangeVisible = function() {
    this.grid.event.trigger("changeVisibleColumns", [this._filtered])
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
        return e.comparator = function(a, d) {
          return c(a[b]) - c(d[b])
        }, e;
      case "string":
        return e.lexi = b, e;
      case "int":
        return e.comparator = function(a, c) {
          return d(a[b], "toInt") - d(c[b], "toInt")
        }, e;
      case "float":
        return e.comparator = function(a, c) {
          return d(a[b], "toFloat") - d(c[b], "toFloat")
        }, e;
      case "date":
        return e.comparator = function(a, c) {
          return d(a[b], "toInt") - d(c[b], "toInt")
        }, e
    }
    return null
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "MenuBar.js"...');
jx.grid.MenuBar = {};
(function() {
  function f(c) {
    e.call(this, c);
    this.grid.menubar = this;
    this.columnWidths = {}
  }
  var i = goog.getObjectByName("jx.grid"), h = goog.getObjectByName("jx.util"), g = goog.getObjectByName("jx.grid.Grid"), e = goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.MenuBar", f);
  goog.inherits(f, e);
  f.getInstance = function(c) {
    return new f(c)
  };
  var d = f.prototype;
  d._defaultOptions = function() {
    var c = this.grid._options.imageUrl;
    return{background:"url(" + c + "menubar-bg.png) repeat-x scroll center", borderThickness:1, border:"solid #b6bac0", height:27, classMenuBar:"menubar", classIcon:"menu-icon", classColumnToggleIcon:"jgrid-column-toggle-icon", columnIconUrl:c + "data-creator-icon.png", columnIconWidth:15, columnIconHeight:15, iconBorderThickness:1, iconBorder:"solid transparent", iconBorderHover:"solid #d4d4d4", iconBorderActive:"solid #9a9a9a", iconMargin:2, iconBackground:"", iconBackgroundHover:"url(" + c + "menu-icon-hover.png) repeat-x scroll center", 
    iconBackgroundActive:"url(" + c + "menu-icon-active.png) repeat-x scroll center", iconHeight:21, iconWidth:21, iconBorderRadius:4, iconBorderFocus:"solid #5f5f5f"}
  };
  d._init = function(c) {
    var a = this._options;
    this._ctnr = c.container;
    this._menubar = $("<div class='" + a.classMenuBar + "'></div>").prependTo(this._ctnr);
    if(this.grid._options.columnHideEnabled) {
      for(var c = h.element, b = h.input, d = h.SAFE, e = this.getColumns(), f = 0, g = e.length, i = "", p = this.mid, o, m, n;f < g;f++) {
        o = e[f], m = o.key, n = p + "-toggle-column-" + m, i += c("label", {"for":n}, c("li", null, b("checkbox", {id:n, checked:!0, onclick:"JGM.m.MenuBar." + p + ".toggleColumn('" + m + "', this.checked, this)"}) + o.name, d), d)
      }
      var q = this.ul = $(c("ul", {"class":"jgrid-column-toggle-box"}, i, d)).appendTo(this.grid._ctnr);
      q.css({top:11, left:34});
      q.hide();
      this.columnIcon = this.addIcon(a.classColumnToggleIcon, "현재 보여지는 열을 숨기거나 숨겨진 열을 보이도록 합니다.", a.columnIconWidth, a.columnIconHeight, function() {
        q.toggle()
      })
    }
  };
  d.mousedown = function(c) {
    this.columnIcon && !h.contains(this.columnIcon[0], c.target) && !h.contains(this.ul[0], c.target) && (this.ul.hide(), this.columnIcon.hasClass("active") && this.columnIcon.toggleClass("active"))
  };
  d.toggleColumn = function(c, a, b) {
    columnWidths = this.columnWidths;
    a ? (this.getView().setWidthByKey(c, this.columnWidths[c]), $(b.parentNode).removeClass("unchecked")) : (this.columnWidths[c] = this.getColMgr().getByKey(c).width, this.getView().setWidthByKey(c, 0), $(b.parentNode).addClass("unchecked"))
  };
  d._bindEvents = function() {
    this.grid.event.bind({onCreateCss:this._onCreateCss, onDestroy:this._destroy, mousedown:this.mousedown}, this)
  };
  d._destroy = function() {
    this.grid && this.grid.log("destroying MenuBar instance...", g.V_INIT);
    i._destroy(this, {name:"MenuBar", path:"menubar", $:"_menubar", property:"_ctnr", map:"_options"})
  };
  d._onCreateCss = function() {
    var c = "#" + this.grid.mid + " .", a = this._options, b = [];
    b.push(c + a.classMenuBar + "{" + i._CONST._cssUnselectable + "position:relative;overflow:hidden;width:100%;background:" + a.background + ";border-bottom:" + (a.borderThickness + "px " + a.border) + ";height:" + a.height + "px}");
    b.push(c + a.classIcon + "{float:left;height:" + a.iconHeight + "px;width:" + a.iconWidth + "px;border:" + a.iconBorderThickness + "px " + a.iconBorder + ";margin:" + a.iconMargin + "px 0 0 " + a.iconMargin + "px;background:" + a.iconBackground + ";border-radius:" + a.iconBorderRadius + "px;-moz-border-radius:" + a.iconBorderRadius + "px}");
    b.push(c + a.classIcon + ":hover," + c + a.classIcon + ":focus{background:" + a.iconBackgroundHover + ";border:" + a.iconBorderThickness + "px " + a.iconBorderHover + "}");
    b.push(c + a.classIcon + ":active," + c + a.classIcon + ".active{cursor:default;background:" + a.iconBackgroundActive + ";border:" + a.iconBorderThickness + "px " + a.iconBorderActive + "}");
    b.push(c + a.classIcon + ".active:focus{border:" + a.iconBorderThickness + "px " + a.iconBorderFocus + "}");
    b.push(c + a.classColumnToggleIcon + "{background:url(" + a.columnIconUrl + ") no-repeat center;width:" + a.columnIconWidth + "px;height:" + a.columnIconHeight + "px}");
    b.push(".jgrid-column-toggle-box{position:absolute;top:0;left:0;z-index:100;list-style-type:none;margin:0;padding:0;border:1px solid #888;background:#eee}");
    b.push(".jgrid-column-toggle-box li{cursor:pointer;padding:1px 4px 1px 0px}");
    b.push(".jgrid-column-toggle-box li.unchecked{background:#ccc}");
    return b.join("")
  };
  d.addIcon = function(c, a, b, d, e) {
    function f(a) {
      e && e();
      g.toggleClass("active");
      a.preventDefault()
    }
    var g = $("<div class='" + this._options.classIcon + "' tabIndex='0' title='" + a + "'><div class='" + c + "' style='margin-top:" + (this._options.iconHeight - d) / 2 + "px;margin-left:" + (this._options.iconWidth - b) / 2 + "px'></div></div>").appendTo(this._menubar), i = h.keyMapKeydown.enter, p = h.keyMapKeydown.space;
    g.click(f).keydown(function(a) {
      var b = a.which;
      (b === i || b === p) && f(a)
    });
    return g
  };
  d.appendHtml = function(c) {
    return $(c).appendTo(this._menubar)
  };
  d.append$ = function(c) {
    return c.appendTo(this._menubar)
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "Footer.js"...');
jx.grid.Footer = {};
(function() {
  function f(c) {
    this.mid = c.mid;
    this._ctnr = c.container;
    this.grid = c.grid;
    this.grid.footer = this;
    this._options = i._extend({classCell:"footer-cell", background:"#F1F5FB", border:"0px solid #CCD9EA", color:"#000", fontSize:"13px", fontWeight:"normal", cellHeight:25, cellPadding:40, countTemplate:"현재 <span name='shownCount'></span> 건 / 총 <span name='totalCount'></span> 건", titleColor:"#5A6779", titleFontSize:"12px", titleFontWeight:"normal", contentColor:"#1E395B", contentFontSize:"12px", contentFontWeight:"normal", classFooter:"jgrid-footer", classTitle:"footer-title", classContent:"footer-content", 
    style:"", cellStyle:"", titleStyle:"", contentStyle:"", sumAlign:"right"}, c.options);
    this._sumMap = {};
    this.__init()
  }
  var i = goog.getObjectByName("jx.grid"), h = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var g = goog.getObjectByName("jx.grid.Grid"), e = h.element;
  goog.exportSymbol("jx.grid.Footer", f);
  f.getInstance = function(c) {
    return new f(c)
  };
  var d = f.prototype;
  d.__init = function() {
    this._hasSum = this.grid.colDefMgr.get().some(function(a) {
      return!!a.sumRenderer
    });
    var c = this._mask = $(e("div", {"class":"classSliderMask"})).appendTo(this._ctnr);
    if(this._hasSum) {
      this._slider = $(e("div", {"class":"classSlider"})).appendTo(c)
    }
    this._foot = $("<div class='" + this._options.classFooter + "'>").appendTo(this._ctnr);
    this.getNextCell().html(this._options.countTemplate);
    this._updateTotalCount();
    this._updateShownCount();
    this.renderCells();
    this._initSumCells();
    this.bindEvents()
  };
  d.bindEvents = function() {
    this.grid.event.bind({onCreateCss:this._onCreateCss, onDestroy:this._destroy, onDataChange:[this._updateTotalCount, this._updateSums], onAfterRefresh:this._updateShownCount, onResizeCol:this._setWidthByKey, changeVisibleColumns:this._onReorderCols, onScrollViewportH:this._onScrollViewportH}, this)
  };
  d._onReorderCols = function() {
    for(var c = this.grid.colDefMgr.get(), a = 0, b = c.length;a < b;a++) {
      this._slider[0].appendChild(this.getSumCell(c[a].key))
    }
  };
  d._setWidthByKey = function(c, a) {
    var b = this.getSumCell(c);
    if(b) {
      b.style.width = a + this.grid.view._colWidthPlus() - 1 + "px"
    }
  };
  d._onScrollViewportH = function(c) {
    if(this._hasSum) {
      this._slider[0].style.left = -1E4 - c + "px"
    }
  };
  d.renderCells = function() {
    if(this._hasSum) {
      for(var c = this.grid.colDefMgr.get(), a = 0, b = c.length, d = this.grid.view, f = [];a < b;a++) {
        f.push(e("div", {"class":"classSliderCell", id:this.mid + "_sum_" + c[a].key, style:{width:d._getColOuterWidth(a) - 1 + "px"}}))
      }
      this._slider[0].innerHTML = f.join("")
    }
  };
  d.getSumCell = function(c) {
    return document.getElementById(this.mid + "_sum_" + c)
  };
  d.setCellValue = function(c, a) {
    var b = this.getSumCell(c);
    if(b) {
      b.innerHTML = a
    }
  };
  d._destroy = function() {
    this.grid.log("destroying Footer instance...", g.V_INIT);
    var c, a = this._sumMap;
    for(c in a) {
      a.hasOwnProperty(c) && a[c] && a[c].remove && a[c].remove()
    }
    this._mask && (this._mask.remove(), delete this._mask);
    this._slider && (this._slider.remove(), delete this._slider);
    i._destroy(this, {name:"Footer", path:"footer", $:"_foot", property:"_ctnr", map:"_sumMap _options"})
  };
  d._onCreateCss = function() {
    var c = this._options, a = "#" + this.grid.mid + " ." + c.classFooter, b = [];
    b.push(a + "{float:left;cursor:default;width:100%;" + i._CONST._cssUnselectable + "background:" + c.background + ";border-top:" + c.border + ";border-collapse:collapse;color:" + c.color + ";font-size:" + c.fontSize + ";font-weight:" + c.fontWeight + ";padding-left:8px;" + c.style + "}");
    b.push(a + " ." + c.classCell + "{float:left;white-space:nowrap;line-height:" + c.cellHeight + "px;padding-right:" + c.cellPadding + "px;" + c.cellStyle + "}");
    b.push(a + " ." + c.classTitle + "{text-align:right;color:" + c.titleColor + ";font-size:" + c.titleFontSize + ";font-weight:" + c.titleFontWeight + ";" + c.titleStyle + "}");
    b.push(a + " ." + c.classContent + "{color:" + c.contentColor + ";font-size:" + c.contentFontSize + ";font-weight:" + c.contentFontWeight + ";" + c.contentStyle + "}");
    var a = {}, d = "#" + this.grid.mid;
    a[d + " .classSliderMask"] = {position:"relative", overflow:"hidden", width:"100%", "border-bottom":"1px solid #ddd"};
    a[d + " .classSlider"] = {position:"relative", overflow:"hidden", "white-space":"nowrap", cursor:"default", background:"#f0f0f0", left:"-10000px", width:"100000px", "line-height":"21px"};
    a[d + " .classSliderCell"] = {position:"relative", overflow:"hidden", "float":"left", "text-overflow":"ellipsis", "text-align":c.sumAlign, "vertical-align":"middle", height:"21px", left:1E4 - this.grid.view.getScrollLeft() + "px", "border-right":"1px solid #ddd"};
    var e, f;
    for(e in a) {
      if(a.hasOwnProperty(e)) {
        c = a[e];
        b.push(e + "{");
        for(f in c) {
          b.push(f + ":" + c[f] + ";")
        }
        b.push("}")
      }
    }
    return b.join("")
  };
  d._updateTotalCount = function() {
    this._foot.find("[name=totalCount]")[0].innerHTML = this.grid.dataMgr.getReal().length
  };
  d._updateShownCount = function() {
    this._foot.find("[name=shownCount]")[0].innerHTML = this.grid.dataMgr.filterReal(this.grid.dataMgr.datalist).length
  };
  d._initSumCells = function() {
    if(this._hasSum) {
      for(var c = this.grid.dataMgr.getReal(), a = this.grid.colDefMgr.get(), b = a.length, d, e, g, i, t, p = f._calSum, o = this._sumMap, m, n = 0;n < b;n++) {
        if(d = a[n], e = d.sumRenderer) {
          g = d.key;
          i = d.name;
          t = p(c, g);
          o[g] = !0;
          switch(typeof e) {
            case "function":
              m = e(i, t);
              break;
            case "string":
              d = e.toLowerCase();
              if(d === "krw" || e === "\\") {
                m = h.formatNumber(t)
              }else {
                if(d === "usd" || e === "$") {
                  m = h.formatNumber(t, 2, "$ ")
                }
              }
              break;
            default:
              m = d.renderer ? d.renderer(t) : t
          }
          this.setCellValue(g, m)
        }
      }
    }
  };
  d._updateSums = function() {
    if(this._hasSum) {
      var c = this.grid.dataMgr.getReal(), a, b = this._sumMap, d = this.grid.colDefMgr, e, g, i, t, p = f._calSum, o;
      for(a in b) {
        if(b.hasOwnProperty(a)) {
          e = d.getByKey(a);
          i = e.name;
          g = e.sumRenderer;
          t = p(c, a);
          switch(typeof g) {
            case "function":
              o = g(i, t);
              break;
            case "string":
              e = g.toLowerCase();
              if(e === "krw" || g === "\\") {
                o = h.formatNumber(t)
              }else {
                if(e === "usd" || g === "$") {
                  o = h.formatNumber(t, 2, "$ ")
                }
              }
              break;
            default:
              o = e.renderer ? e.renderer(t) : t
          }
          this.setCellValue(a, o)
        }
      }
    }
  };
  d.getNextCell = function() {
    return $("<div class='" + this._options.classCell + "'/>").appendTo(this._foot)
  };
  d._sumRenderer = function(c, a) {
    return"<span class='" + this._options.classTitle + "'>" + c + " 합계: </span><span class='" + this._options.classContent + "'>" + a + "</span>"
  };
  f._calSum = function(c, a) {
    for(var b = 0, d, e = c.length, f = 0;f < e;f++) {
      if(typeof(d = c[f][a]) === "string") {
        d = d.toFloat()
      }
      b += isNaN(d) ? 0 : d
    }
    return b
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "ColumnHeader.js"...');
jx.grid.ColumnHeader = {};
(function() {
  function f(a) {
    a.grid.log("creating new ColumnHeader instance...", e.V_INIT);
    g.call(this, a)
  }
  var i = goog.getObjectByName("jx.grid"), h = goog.getObjectByName("jx.util"), g = goog.getObjectByName("jx.grid.BaseModule"), e = goog.getObjectByName("jx.grid.Grid"), d = h.element;
  goog.exportSymbol("jx.grid.ColumnHeader", f);
  goog.inherits(f, g);
  f.getInstance = function(a) {
    return new f(a)
  };
  var c = f.prototype;
  c._init = function(a) {
    var j;
    this.grid.log("initializing ColumnHeader instance...", e.V_INIT);
    this.grid.header = this;
    this._map = {};
    this._resizeMap = {};
    this._resizeKey = this._resizeInitX = this._resizeHandleInitX = this._resizeInitWidth = this._resizeInitColWidth = this._resizeGuide = this._resizeHandleOffset = null;
    var b = this._options, a = this._mask = $(d("div", {"class":b.classHeaderMask})).prependTo(this._ctnr = a.container);
    if(this.getColMgr().hasGroups()) {
      this._doubleHead = $(d("div", {"class":b.classHeader})).appendTo(a)
    }
    j = this._head = $(d("div", {"class":b.classHeader})).appendTo(a), b = j;
    f._disableSel(b)
  };
  c._bindEvents = function() {
    this.grid.log("binding ColumnHeader events...", e.V_INIT);
    var a, b = this.getColumns(), c = b.length, d = 0;
    for(a = {onRenderModules:this._onRenderModules, onAfterRenderModules:this._onAfterRenderModules, mousedown:this._mousedown, mouseup:this._mouseup, dragmove:this._dragmove, onScrollViewportH:this._onScrollViewportH, onScrollViewportV:this._onScrollViewportV, onChangeSorter:this._onChangeSorter, click:this._click, onResizeCol:this._setWidthByKey};d < c;d++) {
      if(b[d].sorter) {
        a["clickHeader_" + b[d].key] = this._sort
      }
    }
    this.bindGridEvent(a, this)
  };
  c._defaultOptions = function(a) {
    this.grid.log("extending ColumnHeader options...", e.V_INIT);
    a = a._options.imageUrl;
    return{reorderEnabled:!1, reorderSyncEnabled:!0, background:"url(" + a + "column-headers-bg.png) repeat-x scroll center", backgroundHover:"url(" + a + "column-headers-over-bg.png) repeat-x scroll center", backgroundPlaceholder:"#646464", sortBackground:a + "sort.png", sortRight:4, sortWidth:7, sortBackgroundAsc:a + "sort-asc.png", sortBackgroundDesc:a + "sort-desc.png", headerMoreButton:a + "header-more-button.gif", font:"15px Arial,Helvetica,sans-serif", height:21, borderThickness:1, border:"solid #909192", 
    classHeaderMask:"jgrid-header-mask", classHeader:"jgrid-header", classColHeader:"jgrid-colheader", classColHeaderActive:"jgrid-colheader-active", classColHeaderPlaceholder:"jgrid-colheader-placeholder", classInteractive:"interactive", classColHeaderSorted:"jgrid-colheader-sorted", classSort:"jgrid-sort", classSortAsc:"jgrid-sort-asc", classSortDesc:"jgrid-sort-desc", classResizeHandle:"jgrid-resize-handle", resizeHandleWidth:5, style:"", headerStyle:"", scrollerLeft:1E4, scrollerWidth:1E5, classResizeGuide:"resize-guide", 
    resizeGuideWidth:1, resizeBackground:"black;filter:alpha(opacity=40);opacity:0.4", syncResize:!1, resizeHandleBackground:"black;filter:alpha(opacity=10);opacity:0.10"}
  };
  c._beforeDispose = function() {
    this.grid.log("disposing ColumnHeader instance...", e.V_INIT);
    this._head.sortable && this._head.sortable("destroy");
    this._destroyResizeHandles();
    i._destroy(this, {name:"ColumnHeader", path:"header", $:"_resizeGuide _mask _head", property:"_ctnr _resizeMap", map:"_map _options"});
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
  c._beforeCreateCss = function(a) {
    this.grid.log("creating CSS for ColumnHeader...", e.V_INIT);
    var b = "#" + this.grid.mid + " .", c = this._options, d = c.borderThickness + "px " + c.border, f = this.getColumns(), g = f.length, h = 0, i = "." + c.classColHeader, o = c.scrollerLeft, m = c.height + "px", n = c.classColHeaderActive, q = {};
    q["." + c.classHeaderMask] = {position:"relative", overflow:"hidden", width:"100%", font:c.font, background:c.background, "border-bottom":d, _append:c.style};
    q["." + c.classHeader] = {position:"relative", overflow:"hidden", "white-space":"nowrap", cursor:"default", background:c.background, left:-o + "px", width:c.scrollerWidth + "px", "line-height":m};
    q[i] = {position:"relative", overflow:"hidden", "float":"left", "text-overflow":"ellipsis", "text-align":"center", "vertical-align":"middle", height:m, left:o - this.getView().getScrollLeft() + "px", "border-right":d, _append:c.headerStyle};
    q[i + "." + c.classInteractive + ":hover, " + b + n] = {cursor:"pointer", background:c.backgroundHover};
    q["." + n] = {"border-left":d};
    q[i + "." + c.classColHeaderPlaceholder] = {background:c.backgroundPlaceholder + "!important"};
    q[".jgrid-header-text"] = {"vertical-align":"middle"};
    q[".jgrid-header-more"] = {position:"absolute", cursor:"pointer", height:"100%", width:"14px", right:0, top:0};
    q[".jgrid-header-more:hover"] = {"border-left":"1px solid black", background:"url(" + c.headerMoreButton + ") no-repeat left center"};
    q["." + c.classSort] = {position:"absolute", height:"100%", top:(c.sortTop || 0) + "px", width:c.sortWidth + "px", background:"url(" + c.sortBackground + ") no-repeat center transparent"};
    q["." + c.classSortAsc] = {background:"url(" + c.sortBackgroundAsc + ") no-repeat center transparent"};
    q["." + c.classSortDesc] = {background:"url(" + c.sortBackgroundDesc + ") no-repeat center transparent"};
    q["." + c.classResizeHandle] = {"z-index":10, background:c.resizeHandleBackground, cursor:"e-resize", position:"absolute", top:(c.resizeHandleTop || 0) + "px", height:"100%", width:c.resizeHandleWidth + "px"};
    for(q["." + c.classResizeGuide] = {"z-index":10, position:"absolute", background:c.resizeBackground, width:c.resizeGuideWidth + "px"};h < g;h++) {
      f[h].headerStyle && (q[i + "#" + this.mid + "h" + f[h].key] = {_append:f[h].headerStyle})
    }
    this.toCssStyles(a.css, q)
  };
  c._widthPlus = function() {
    return this._options.borderThickness
  };
  c._onScrollViewportH = function(a) {
    this.grid.log("adjusting Colheader style.left according to viewport scrollLeft...", e.V_RESIZE);
    a = -this._options.scrollerLeft - a;
    this._head[0].style.left = a + "px";
    if(this._doubleHead) {
      this._doubleHead[0].style.left = a + "px"
    }
  };
  c._onRenderModules = function() {
    this.grid.log("rendering Colheader...", e.V_INIT);
    var a = this.getColumns(), b = a.length, c = 0, f, g = [], h = this.getColMgr();
    if(h.hasGroups()) {
      var i = this._options;
      i.reorderEnabled = !1;
      for(var h = h.getGroups(), p = 0, o = h.length, m, n, q, r = [], s = 0, u = 0, v = this.getView(), w;p < o;p++) {
        m = h[p];
        n = m[0].parent;
        s = q = 0;
        for(w = m.length;s < w;s++) {
          m[s].hidden || (q += v._getColOuterWidth(u++))
        }
        r.push(d("div", {"class":i.classColHeader, title:n, style:{width:q - this._widthPlus() + "px"}}, n))
      }
      this._doubleHead[0].innerHTML = r.join("")
    }
    for(;c < b;c++) {
      (f = a[c]).hidden || this._render(g, f, c)
    }
    this._head[0].innerHTML = g.join("");
    this.triggerGridEvent("onRenderHeadersComplete", !1, !0)
  };
  c._onAfterRenderModules = function() {
    var a = this._options;
    !this.getColMgr().hasGroups() && a.reorderEnabled && this._initReorder();
    this._initResizeHandles();
    this._resizeGuide = $(d("div", {"class":a.classResizeGuide})).appendTo(this.getView()._mask).hide();
    this._resizeGuide[0].style.top = "0px";
    this._resizeGuide[0].style.height = "0px"
  };
  c._render = function(a, b, c) {
    var e = this._options, f = b.key, g = b.noName ? "" : b.name || f, i = this._widthPlus(), p = "onRenderHeader_" + f, o = [a], m = e.classColHeader;
    if(e.reorderEnabled || b.sorter) {
      m += " " + e.classInteractive
    }
    c = {id:this.mid + "h" + f, "class":m, colKey:f, style:{width:this.getView()._getColOuterWidth(c) - i + "px"}};
    if(!b.noTitle) {
      c.title = b.title || g
    }
    a.push(d("div", c, null, h.LEAVE_OPENED));
    this.triggerGridEvent(p + "_prepend", o, !0);
    a.push(g);
    this.triggerGridEvent(p + "_append", o, !0);
    b.sorter && a.push(d("span", {"class":e.classSort}));
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
    var c = this.get(a), d = this._options, e = c.find("." + d.classSort), f = d.classColHeaderSorted, g = d.classSortAsc, d = d.classSortDesc;
    b === 0 ? (c.removeClass(f), e.removeClass(g + " " + d)) : (c.addClass(f), b === 1 ? e.addClass(g).removeClass(d) : b === 2 && e.addClass(d).removeClass(g))
  };
  c._closest = function(a) {
    return Util$.safe$(a).closest("div." + this._options.classColHeader, this._head)
  };
  c._getDef = function(a) {
    return this.getColMgr().getByKey(a.attr("colKey"))
  };
  c._sort = function(a, b, c) {
    this.grid.log("Colheader clicked to sort. key=" + d, e.V_CLICK);
    var d = c.key, a = c.sorter;
    this.triggerGridEvent("onBeforeColSort_" + d, !1, !0);
    this.triggerGridEvent("onBeforeColSort", !1, !0);
    a.desc = a.desc === !1 ? !0 : !1;
    this.getDataMgr().refresh({sorter:a});
    this.getView()._scroll()
  };
  c._onChangeSorter = function(a, b) {
    a !== b && a && this._updateIndicator(a.key, 0);
    b && this._updateIndicator(b.key, b.desc ? 2 : 1)
  };
  c._initReorder = function() {
    this.grid.log("initializing Colheader reorder functionality...", e.V_INIT);
    var a = this, b = this._options, c = this.getColMgr(), d = this._head, f = this.mid.length + 1, g = function(a, b) {
      for(var e = $(d).sortable("toArray"), g = e.length, h, i = 0;i < g;i++) {
        h = e[i], e[i] = h === "" ? b.item.attr("id").substring(f) : h.substring(f)
      }
      c.sortByKey(e)
    };
    d.sortable({items:"." + b.classColHeader, axis:"x", forcePlaceholderSize:!0, placeholder:b.classColHeaderPlaceholder + " " + b.classColHeader, tolerance:"pointer", start:function(b, c) {
      c.item.addClass(a._options.classColHeaderActive)
    }, stop:function(b, c) {
      c.item.removeClass(a._options.classColHeaderActive);
      a._syncResizeHandles()
    }, update:g});
    b.reorderSyncEnabled && d.sortable("option", "change", g)
  };
  c._getDx = function(a, b) {
    var c = a.clientX - this._resizeInitX, d = b.minW, e = h.ifNull(b.maxW, Number.MAX_VALUE), f = this._resizeInitWidth;
    f + c < d && (c = d - f);
    f + c > e && (c = e - f);
    return c
  };
  c._click = function(a) {
    var b = this._closest(a.target);
    if(b.length !== 0) {
      var c = this._getDef(b), d = c.key, a = [a, b, c];
      this.grid.log("Colheader clicked. key=" + d, e.V_CLICK);
      this.getEventMgr().triggerInvalid("clickHeaderValid_" + d, a) || (this.triggerGridEvent("clickHeader_" + d, a, !0), this.triggerGridEvent("clickHeader", a, !0))
    }
  };
  c._mousedown = function(a) {
    var b = this._options;
    if(h.hasTagAndClass(a.target, "DIV", b.classResizeHandle)) {
      var c = this._resizeKey = a.target.getAttribute("key");
      this.grid.log("mousedown on ColumnHeader Resize Handle. key=" + c, e.V_MOUSEDOWN);
      this._resizeInitWidth = this.get(c)[0].clientWidth;
      this._resizeInitColWidth = this.getColMgr().getByKey(c).width;
      this._resizeInitX = a.clientX;
      this._resizeHandleInitX = this._resizeMap[c][0].offsetLeft;
      this._resizeGuide[0].style.left = Math.floor(this._resizeHandleInitX + (b.resizeHandleWidth - b.resizeGuideWidth) / 2 - b.scrollerLeft) + "px";
      this._resizeGuide[0].style.height = this.getView().getInnerHeight() + "px";
      this._resizeGuide.show()
    }else {
      if(b = this._closest(a.target), b.length) {
        var d = this._getDef(b), c = d.key, a = [a, b, d];
        this.grid.log("mousedown on ColumnHeader. key=" + c, e.V_MOUSEDOWN);
        this.triggerGridEvent("mousedownHeader", a, !0);
        this.triggerGridEvent("mousedownHeader_" + c, a, !0)
      }
    }
  };
  c._dragmove = function(a) {
    var b = this._resizeKey;
    if(b != null && (a = this._getDx(a, this.getColMgr().getByKey(b)), !(Math.abs(a) < 1))) {
      this.grid.log("drag on ColumnHeader Resize Handle. key=" + b, e.V_MOUSEMOVE);
      var c = this._options;
      this.get(b)[0].style.width = this._resizeInitWidth + a + "px";
      this._moveResizeHandles(this._resizeHandleInitX + a - this._resizeMap[b][0].offsetLeft, this.getColMgr().getIdxByKey(b));
      this._resizeGuide[0].style.left = Math.floor(this._resizeHandleInitX + a + (c.resizeHandleWidth - c.resizeGuideWidth) / 2 - c.scrollerLeft) + "px";
      c.syncResize && this.getView().setWidthByKey(b, this._resizeInitColWidth + a)
    }
  };
  c._mouseup = function(a) {
    var b = this._resizeKey;
    if(b != null) {
      this.grid.log("mouseup on ColumnHeader Resize Handle. key=" + b, e.V_MOUSEUP), this._resizeGuide.hide(), this._resizeGuide[0].style.height = "0px", a = this._getDx(a, this.getColMgr().getByKey(b)), Math.abs(a) >= 1 && this.getView().setWidthByKey(b, this._resizeInitColWidth + a), delete this._resizeKey, delete this._resizeInitX, delete this._resizeHandleInitX, delete this._resizeInitWidth, delete this._resizeInitColWidth
    }
  };
  c._setWidthByKey = function(a, b) {
    this.grid.log("setting ColumnHeader width=" + b + ". key=" + a, e.V_RESIZE);
    this.get(a)[0].style.width = b + this.getView()._colWidthPlus() - this._widthPlus() + "px";
    if(this._doubleHead) {
      for(var c = this.getColMgr(), d = this.getView()._colWidthPlus(), f = c.getGroupIndexByKey(a), c = c.getGroupByGroupIdx(f), g = 0, h = c.length, i = 0;g < h;g++) {
        c[g].hidden || (i += c[g].width + d)
      }
      this._doubleHead[0].childNodes[f].style.width = i - this._widthPlus() + "px"
    }
    this._syncResizeHandles(this.getColMgr().getIdxByKey(a));
    this.getView()._scroll()
  };
  c._syncResizeHandles = function(a) {
    for(var a = a || 0, b = this.getView()._getColLefts(), c = this.getColumns(), d = c.length, e = this._resizeMap, f;a < d;a++) {
      if(f = c[a].key, e.hasOwnProperty(f)) {
        e[f][0].style.left = b[a + 1] + this._resizeHandleOffset + "px"
      }
    }
  };
  c._moveResizeHandles = function(a, b) {
    for(var b = b || 0, c = this.getColumns(), d = c.length, e = this._resizeMap, f;b < d;b++) {
      if(f = c[b].key, e.hasOwnProperty(f)) {
        f = e[f][0], f.style.left = f.offsetLeft + a + "px"
      }
    }
  };
  c._onScrollViewportV = function() {
    this._resizeGuide[0].style.top = this.getView().getScrollTop() + "px"
  };
  c._initResizeHandles = function() {
    this.grid.log("initializing Colheader resize functionality...", e.V_INIT);
    for(var a = this.getColumns(), b = a.length, c = this.getView(), d = c.mid, c = c._getColLefts(), f = this._options, g = this._resizeMap, h, i = 0, o = this._resizeHandleOffset = Math.floor(f.scrollerLeft - f.resizeHandleWidth / 2), m = f.classResizeHandle, n = this._head;i < b;i++) {
      if(f = a[i], f.resizable) {
        h = f.key, g[h] = $("<div class='" + m + "' key='" + h + "' ondblclick='JGM.m.ViewportManager." + d + '._autoColWidth("' + h + "\")' style='left:" + (o + c[i + 1]) + "px' title='" + f.name + " 컬럼의 폭을 조절합니다.'>").appendTo(n)
      }
    }
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "CheckManager.js"...');
jx.grid.CheckManager = {};
(function() {
  function f(d) {
    function c() {
      var a = this._options, b = this._isRadio = a.isRadio = !!a.isRadio;
      this._hasMaster = a.master = !b && !!a.master;
      this._col = a.colDef;
      this._key = this._col.key;
      this._cssClass = a.classCheck;
      this._cssClassMaster = a.classMasterCheck;
      this._name = a.name || b && "radio" + this.mid || null
    }
    this.addEventListener("afteroption", c);
    g.call(this, d);
    this.removeEventListener("afteroption", c)
  }
  var i = goog.getObjectByName("jx.grid"), h = goog.getObjectByName("jx.util"), g = goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.CheckManager", f);
  goog.inherits(f, g);
  f.getInstance = function(d) {
    return new f(d)
  };
  var e = f.prototype;
  e._init = function() {
    this._map = {};
    this.disabledmap = {};
    this._count = 0;
    this._disabled = !1;
    var d, c = i._CONST;
    d = this.getColMgr();
    d.getByKey(this._col.key) || d.addAt(this._options.colIdx, this._col);
    if(!c._checkboxWidth) {
      d = h.calCheckSize(), c._checkboxWidth = d.checkboxW, c._checkboxHeight = d.checkboxH, c._radioWidth = d.radioW, c._radioHeight = d.radioH
    }
  };
  e._bindEvents = function() {
    var d = this._col.key, c;
    c = {onAfterSetDatalist:this.uncheckAll, onAfterRerender:this._updateMaster, onIdChange:this._onIdChange, onIdListChange:this._onIdListChange, onRemoveDatarow:this._onRemoveDatarow, onRemoveDatalist:this._onRemoveDatalist, onSearch:this._onSearch};
    c["onRenderCell_" + d + "_prepend"] = this._onRenderCell;
    c["keydownColSel_" + d + "_" + h.keyMapKeydown.space] = this._keydownColSel;
    if(this._hasMaster) {
      c["onRenderHeader_" + d + "_prepend"] = this._onRenderHeader, c.onRenderHeadersComplete = this._getMaster
    }
    this.bindGridEvent(c, this)
  };
  e._onSearch = function(d) {
    d ? this.disableMaster() : this.enableMaster()
  };
  e._defaultOptions = function() {
    return{colDef:{key:"checkbox", width:20, name:" ", noTitle:!0, resizable:!1, sorter:null, filter:null, noSearch:!0, editor:null, inputOnCreate:!1}, colIdx:0, name:void 0, classCheck:"checkmg", classMasterCheck:"checkm", master:!0, isRadio:!1}
  };
  e._beforeCreateCss = function(d) {
    var c, a, b = d.css;
    this._isRadio ? (d = i._CONST._radioWidth || 13, c = i._CONST._radioHeight || 13) : (d = i._CONST._checkboxWidth || 13, c = i._CONST._checkboxHeight || 13);
    a = "*overflow:hidden;padding:0;width:" + d + "px;height:" + c + "px;";
    b.push(this.getView()._getCellSelector() + " ." + this._cssClass + "[mid='" + this.mid + "']{" + a + "margin:" + (this.getView()._getRowInnerHeight() - c) / 2 + "px 0 0 " + (this._col.width - this.getView()._getPadding() - d) / 2 + "px}#" + this.mid + "h{" + a + "margin:" + (this.getHeader()._options.height - c) / 2 + "px 0 0 0}")
  };
  e.checkList = function(d, c) {
    if(!c) {
      d = this.getDataMgr().mapList(d).mapped
    }
    for(var a = 0, b = d.length;a < b;a++) {
      this.check(d[a], !0)
    }
  };
  e.setCheckList = function(d, c) {
    this.uncheckAll();
    this.checkList(d, c)
  };
  e.getCheckList = function() {
    return h.toArray(this._map)
  };
  e.getDisableds = function() {
    return h.toArray(this.disabledmap)
  };
  e.toggleCheckAll = function() {
    return this.isCheckedAll() ? this.uncheckAll() : this.checkAll()
  };
  e.clickMaster = function(d) {
    var c = this.getAllData(), a = this.getDataList();
    if(c.length === a.length) {
      return d ? this.checkAll() : this.uncheckAll()
    }
    if(d) {
      f._check(this.getCheckboxes());
      for(var d = a.length, c = this.getIdKey(), b, e = 0;e < d;e++) {
        b = a[e], this._add(b, b[c]) && this.triggerGridEvent("onCheckChange", [b, !0], !0)
      }
    }else {
      f._uncheck(this.getCheckboxes());
      d = a.length;
      c = this.getIdKey();
      for(e = 0;e < d;e++) {
        b = a[e], this._remove(b, b[c]) && this.triggerGridEvent("onCheckChange", [b, !1], !0)
      }
    }
  };
  e.checkAll = function() {
    this._hasMaster && f._check(this._master);
    f._check(this.getCheckboxes());
    for(var d = this.getAllData(), c = d.length, a = this.getIdKey(), b = this._map, e = 0;e < c;e++) {
      b[d[e][a]] = d[e]
    }
    this._count = c
  };
  e.uncheckAll = function() {
    this._hasMaster && f._uncheck(this._master);
    f._uncheck(this.getCheckboxes());
    this._map = {};
    this._count = 0
  };
  e.toggleCheck = function(d, c) {
    c || (d = this.getDataMgr().map(d));
    this.isChecked(d, !0) && !this._isRadio ? this.uncheck(d, !0) : this.check(d, !0)
  };
  e.toggleDisable = function(d, c) {
    c || (d = this.getDataMgr().map(d));
    this.isDisabled(d, !0) ? this.enable(d, !0) : this.disable(d, !0)
  };
  e.toggleById = function(d) {
    this.toggleCheck(this.getDataMgr().getById(d), !0)
  };
  e.check = function(d, c) {
    c || (d = this.getDataMgr().map(d));
    this._add(d) && (f._check(this.getCheckbox(d)), this._updateMaster(), this.triggerGridEvent("onCheckChange", [d, !0], !0))
  };
  e.uncheck = function(d, c) {
    c || (d = this.getDataMgr().map(d));
    this._remove(d) && (f._uncheck(this.getCheckbox(d)), this._hasMaster && f._uncheck(this._master), this.triggerGridEvent("onCheckChange", [d, !1], !0))
  };
  e.disable = function(d, c) {
    var a = this.getDataMgr();
    c || (d = a.map(d));
    var a = a.getId(d), b = this.disabledmap;
    b.hasOwnProperty(a) || (b[a] = d, f.disableNode(this.getCheckbox(d)), this.triggerGridEvent("onDisableCheck", [d], !0))
  };
  e.enable = function(d, c) {
    var a = this.getDataMgr();
    c || (d = a.map(d));
    var a = a.getId(d), b = this.disabledmap;
    b.hasOwnProperty(a) && (delete b[a], f.enableNode(this.getCheckbox(d)), this.triggerGridEvent("onEnableCheck", [d], !0))
  };
  e._updateMaster = function() {
    this._hasMaster && f._setCheck(this._master, this.isCheckedAll())
  };
  e._add = function(d, c) {
    c = c || d[this.getIdKey()];
    if(this._map.hasOwnProperty(c)) {
      return!1
    }
    if(this._isRadio) {
      this._map = {}, this._count = 0
    }
    this._map[c] = d;
    this._count++;
    return!0
  };
  e._remove = function(d, c) {
    var c = c || d[this.getIdKey()], a = this._map;
    if(!a.hasOwnProperty(c)) {
      return!1
    }
    delete a[c];
    this._count--;
    return!0
  };
  e.isChecked = function(d, c) {
    var a = this.getDataMgr();
    c || (d = a.map(d));
    return this._map.hasOwnProperty(a.getId(d))
  };
  e.isDisabled = function(d, c) {
    var a = this.getDataMgr();
    c || (d = a.map(d));
    return this.disabledmap.hasOwnProperty(a.getId(d))
  };
  e.splitChecked = function(d, c) {
    if(!c) {
      d = this.getDataMgr().mapList(d).mapped
    }
    for(var a = [], b = [], e = 0, f = d.length, g = this.getIdKey(), h, i = this._map;e < f;e++) {
      i.hasOwnProperty((h = d[e])[g]) ? a.push(h) : b.push(h)
    }
    return{checked:a, unchecked:b}
  };
  e.isCheckedAll = function() {
    var d = this._count;
    if(d) {
      var c = this.getAllData().length;
      if(d === c) {
        return!0
      }
      var d = this.getDataList(), a = d.length;
      if(a !== c) {
        for(c = 0;c < a;c++) {
          if(!this.isChecked(d[c], !0)) {
            return!1
          }
        }
        return!0
      }
    }
    return!1
  };
  e.removeChecked = function() {
    return this.getDataMgr().removeList(this.getCheckList())
  };
  e._getMaster = function() {
    this._master = $(document.getElementById(this.mid + "h"))
  };
  e._getChecks = function(d) {
    for(var c = d.length, a = [], b = 0, e = this.getColMgr().getIdxByKey(this._key);b < c;b++) {
      a.push(d[b].childNodes[e].childNodes[0])
    }
    return a
  };
  e.getCheckboxes = function() {
    return this._getChecks(this.getView().getRenderedRows())
  };
  e.getCheckboxById = function(d) {
    if(d = this.getView().getRowById(d)) {
      return d.childNodes[this.getColMgr().getIdxByKey(this._key)].childNodes[0]
    }
  };
  e.getCheckbox = function(d) {
    return this.getCheckboxById(this.getDataMgr().getId(d))
  };
  e.getCheckboxByIdx = function(d) {
    return this.getCheckboxById(this.getDataMgr().getIdByIdx(d))
  };
  e._onRemoveDatarow = function(d) {
    this.uncheck(d, !0);
    this.enable(d, !0)
  };
  e._onRemoveDatalist = function(d) {
    for(var c = 0, a = d.length;c < a;c++) {
      this.uncheck(d[c], !0), this.enable(d[c], !0)
    }
  };
  e._onIdChange = function(d, c, a) {
    var b = this._map, e = this.disabledmap;
    b.hasOwnProperty(c) && (delete b[c], b[a] = d);
    e.hasOwnProperty(c) && (delete e[c], e[a] = d)
  };
  e._onIdListChange = function(d, c, a) {
    for(var b = 0, e = d.length, f = this._map, g = this.disabledmap, h, i;b < e;b++) {
      h = d[b], i = c[b], f.hasOwnProperty(i) && (delete f[i], f[h[a]] = h), g.hasOwnProperty(i) && (delete g[i], g[h[a]] = h)
    }
  };
  e._keydownColSel = function(d, c, a) {
    d.preventDefault();
    if(c && a) {
      var d = this.isChecked(a.getDatarow(), !0), b, a = this.getDataList();
      if(this._isRadio) {
        for(b in c) {
          if(c.hasOwnProperty(b) && b !== "length") {
            this.check(a[b], !0);
            break
          }
        }
      }else {
        for(b in c) {
          c.hasOwnProperty(b) && b !== "length" && (d ? this.uncheck(a[b], !0) : this.check(a[b], !0))
        }
      }
    }
  };
  e._onRenderHeader = function(d) {
    d.push("<input id='" + this.mid + "h' type='checkbox' tabIndex='-1' onclick='JGM.m.CheckManager." + this.mid + ".clickMaster(this.checked);' class='" + this._cssClass + " " + this._cssClassMaster + "' mid='" + this.mid + "'");
    this.isCheckedAll() && d.push(" checked='checked'");
    this._disabled && d.push(" disabled='disabled'");
    d.push("/>")
  };
  e._onRenderCell = function(d, c, a, b, e) {
    e.push("<input tabIndex='-1' onclick=\"JGM.m.CheckManager." + this.mid + ".toggleById('" + a[this.getIdKey()] + "')\" type='" + (this._isRadio ? "radio" : "checkbox") + "' class='" + this._cssClass + "' mid='" + this.mid + "'");
    this._name && e.push(" name='" + this._name + "'");
    this.isChecked(a, !0) && e.push(" checked='checked'");
    (this._disabled || this.isDisabled(a, !0)) && e.push(" disabled='disabled'");
    e.push("/>")
  };
  e.disableAll = function() {
    if(!this._disabled) {
      this._disabled = !0, this._hasMaster && this._master.attr("disabled", "disabled"), $(this.getCheckboxes()).attr("disabled", "disabled")
    }
  };
  e.enableAll = function() {
    if(this._disabled) {
      this._disabled = !1, this._hasMaster && this._master.removeAttr("disabled"), $(this.getCheckboxes()).removeAttr("disabled")
    }
  };
  e.disableMaster = function() {
    this._hasMaster && this._master.attr("disabled", "disabled")
  };
  e.enableMaster = function() {
    this._hasMaster && this._master.removeAttr("disabled")
  };
  f._check = function(d) {
    d && Util$.safe$(d).attr("checked", "checked")
  };
  f._uncheck = function(d) {
    d && Util$.safe$(d).removeAttr("checked")
  };
  f.disableNode = function(d) {
    d && Util$.safe$(d).attr("disabled", "disabled")
  };
  f.enableNode = function(d) {
    d && Util$.safe$(d).removeAttr("disabled")
  };
  f._setCheck = function(d, c) {
    c ? f._check(d) : f._uncheck(d)
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "Collapser.js"...');
jx.grid.Collapser = {};
(function() {
  function f(c) {
    this.mid = c.mid;
    this.grid = c.grid;
    this.grid.collapser = this;
    this._options = i._extend({key:void 0, colDef:{key:"collapser", width:120, name:" ", noSearch:!0}, colIdx:0, urlCollapsed:this.grid._options.imageUrl + "collapsed.png", urlCollapsedHover:this.grid._options.imageUrl + "collapsed-hover.png", urlExpanded:this.grid._options.imageUrl + "expanded.png", urlExpandedHover:this.grid._options.imageUrl + "expanded-hover.png", width:6, padding:5, classCollapser:"jgrid-collapser", classCollapsed:"collapsed", classExpanded:"expanded", classIndent:"indent", 
    classMasterCollapser:"master", indentSize:12, beginCollapsed:!1, CheckManager:void 0, Tree:void 0}, c.options);
    if(this._options.CheckManager) {
      this.checkMgr = i.create("CheckManager", {grid:this.grid, options:this._options.CheckManager}), delete this._options.CheckManager, h.isNull(this._options.key) && this._options.colIdx++
    }
    this._tree = new e({list:this.grid.dataMgr.all, options:this._options.Tree})
  }
  var i = goog.getObjectByName("jx.grid"), h = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var g = goog.getObjectByName("jx.grid.Grid"), e = goog.getObjectByName("jx.struct.Tree");
  goog.exportSymbol("jx.grid.Collapser", f);
  f.getInstance = function(c) {
    return new f(c)
  };
  var d = f.prototype;
  d.__init = function() {
    h.isNull(this._options.key) && this.grid.colDefMgr.addAt(this._options.colIdx, this._options.colDef);
    this._makeTree();
    this._filterRefresh();
    this.key = h.isNull(this._options.key) ? this._options.colDef.key : this._options.key;
    this.bindEvents()
  };
  d.bindEvents = function() {
    var c = this.key, a;
    a = {onAfterFilter:this._onAfterFilter, onCreateCss:this._onCreateCss, onDestroy:this._destroy, onAfterSetDatalist:this._onAfterSetDatalist, onAddDatarow:this._onAddDatarow, onAddDatalist:this._onAddDatalist, onUpdateDatarow:this._onUpdateDatarow, onUpdateDatalist:this._onUpdateDatalist, onRemoveDatarow:this._onRemoveDatarow, onRemoveDatalist:this._onRemoveDatalist, onRenderHeadersComplete:this._getMaster};
    a["onRenderHeader_" + c + "_prepend"] = this._onRenderHeader;
    a["clickHeaderValid_" + c] = this._clickHeaderValid;
    a["onRenderCell_" + c + "_prepend"] = this._onRenderCell;
    a["dblclickCanvas_" + c] = this._dblclickCanvas;
    a["keydownColSel_" + c + "_" + h.keyMapKeydown.space] = this._keydownColSel;
    if(h.isNotNull(this.checkMgr)) {
      a.onCheckChange = this._onCheckChange
    }
    this.grid.event.bind(a, this)
  };
  d._destroy = function() {
    this.grid.log("destroying Collapser instance...", g.V_INIT);
    i._destroy(this, {name:"Collapser", path:"collapser", module:"_tree", $:"_master", property:"checkMgr", map:"_options"})
  };
  d._onCreateCss = function() {
    var c = "#" + this.grid.mid + " .", a = this._options, b = c + this.grid.view._options.classRow + " .", d = c + a.classCollapser, e = d + "." + a.classExpanded, f = d + "." + a.classCollapsed, g = this.grid.view._getRowInnerHeight(), i = [], p = this.grid.header;
    i.push(c + a.classIndent + "{height:" + g + "px;float:left;}");
    i.push(d + "{width:" + a.width + "px;float:left;padding:0 " + a.padding + "px}");
    i.push(b + a.classCollapser + "{height:" + g + "px}");
    i.push(e + "{background:url(" + a.urlExpanded + ") no-repeat center transparent}");
    i.push(e + ":hover{background:url(" + a.urlExpandedHover + ") no-repeat center transparent}");
    i.push(f + "{background:url(" + a.urlCollapsed + ") no-repeat center transparent}");
    i.push(f + ":hover{background:url(" + a.urlCollapsedHover + ") no-repeat center transparent}");
    h.isNotNull(p) && i.push(c + p._options.classColHeader + " ." + a.classCollapser + "{height:" + p._options.height + "px}");
    return i.join("")
  };
  d._onAfterSetDatalist = function() {
    this._tree.destroy();
    this._tree = new e({list:this.grid.dataMgr.all, options:this._options.Tree});
    this._makeTree()
  };
  d._onAddDatarow = function(c) {
    c = this._tree.createNode(c);
    c._collapsed = this._options.beginCollapsed;
    c._shown = h.isNotNull(c.parent) && (c.parent === c.tree.root || c.parent._shown && !c.parent._collapsed) ? !0 : !1;
    h.isNotNull(c.parent) && c.parent.children.length === 1 && this.grid.view.rerenderCellByIdAndKey(this.grid.dataMgr.getId(c.parent.data), this.key);
    c._collapsed === !0 || c._shown === !1 ? c.traverseChildren({fn:function() {
      this._shown = !1
    }}) : c.traverseChildren({fn:function(a) {
      h.isNotNull(this.parent) && (this.parent === this.tree.root || this.parent._shown && !this.parent._collapsed) ? this._shown = !0 : (a.propagate = !1, this.traverse({fn:function() {
        this._shown = !1
      }}))
    }});
    this.grid.event.trigger("onCollapserTreeChange", !1, !0)
  };
  d._onAddDatalist = function(c) {
    for(var a = 0, b = c.length, d = this._tree, e = d.root, f = this._options.beginCollapsed, g = this.key, i = this.grid.view, p = this.grid.dataMgr, o, m = [], n;a < b;a++) {
      o = d.createNode(c[a]), o._collapsed = f, h.isNotNull(o.parent) && o.parent.children.length === 1 && m.push(o.parent.data)
    }
    if(i !== void 0) {
      a = 0;
      for(b = m.length;a < b;a++) {
        i.rerenderCellByIdAndKey(p.getId(m[a]), g)
      }
    }
    e.traverseChildren({fn:function(a) {
      n = this.parent;
      h.isNotNull(n) && (n === e || n._shown && !n._collapsed) ? this._shown = !0 : (a.propagate = !1, this.traverse({fn:function() {
        this._shown = !1
      }}))
    }});
    this.grid.event.trigger("onCollapserTreeChange", !1, !0)
  };
  d._onUpdateDatarow = function(c, a, b) {
    var d = this._tree, e = d._options.nodeKey, f = d._options.parentKey, g;
    a.hasOwnProperty(e) && (g = d.getNodeByNodeId(b[e]), d.changeNodeId(g, b[e], a[e]), this.grid.event.trigger("onCollapserTreeChange", !1, !0));
    a.hasOwnProperty(f) && (h.isNull(g) && (g = d.getNode(c)), d.changeParentId(g, b[f], a[f]), this.grid.event.trigger("onCollapserTreeChange", !1, !0))
  };
  d._onUpdateDatalist = function(c, a, b) {
    for(var a = this._tree, d = a._options.nodeKey, e = a._options.parentKey, f, g, i, p = [], o = [], m = 0, n = c.length;m < n;m++) {
      f = b[m], g = c[m], i = void 0, f.hasOwnProperty(d) && (h.isNull(i) && (i = a.getNodeByNodeId(f[d])), p.push({node:i, before:f[d], newId:g[d]})), f.hasOwnProperty(e) && (h.isNull(i) && (i = a.getNode(g)), o.push({node:i, before:f[e], newId:g[e]}))
    }
    c = p.length;
    b = o.length;
    if(c + b !== 0) {
      if(c + b > 10) {
        a.reattach()
      }else {
        for(m = 0;m < c;m++) {
          d = p[m], a.changeNodeId(d.node, d.before, d.newId)
        }
        for(m = 0;m < b;m++) {
          d = o[m], a.changeParentId(d.node, d.before, d.newId)
        }
      }
      this.grid.event.trigger("onCollapserTreeChange", !1, !0)
    }
  };
  d._onRemoveDatarow = function(c) {
    this._tree.destroyNodeByData(c);
    this.grid.event.trigger("onCollapserTreeChange", !1, !0)
  };
  d._onRemoveDatalist = function(c) {
    for(var a = 0, b = c.length, d = this._tree;a < b;a++) {
      d.destroyNodeByData(c[a])
    }
    this.grid.event.trigger("onCollapserTreeChange", !1, !0)
  };
  d._onAfterFilter = function(c, a) {
    var b = this._tree;
    if(a.length > 0) {
      var d = this.grid.dataMgr, e = c.length, f = d._idToIdx, g = d.idKey, i, p = 0, o = function(b) {
        h.isNotNull(this.parent) ? (i = this.parent.data, h.isNotNull(i) && !d.has(i) && (c.push(i), a.remove(i), f[i[g]] = -1)) : b.stop = !0
      };
      d._reidx();
      for(b.reattach();p < e;p++) {
        b.getNode(c[p]).traverse({up:!0, fn:o})
      }
      b.reattach(c);
      b.sortList(c);
      this.grid.event.trigger("onCollapserTreeChange", !1, !0)
    }else {
      b.reattach(c), this.grid.event.trigger("onCollapserTreeChange", !1, !0), this._filter(c, a)
    }
  };
  d._filter = function(c, a) {
    c.length = 0;
    this._tree.root.traverseChildren({fn:function() {
      this._shown ? c.push(this.data) : a.push(this.data)
    }})
  };
  d.toggleById = function(c) {
    if(h.isNotNull(c)) {
      return this.toggleCollapse(this._tree.getNode(this.grid.dataMgr.getById(c)))
    }
  };
  d.toggle = function(c) {
    return this.toggleById(this.grid.dataMgr.getId(c))
  };
  d.toggleByIdx = function(c) {
    return this.toggleById(this.grid.dataMgr.getIdByIdx(c))
  };
  d._clickHeaderValid = function(c) {
    if(h.hasTagAndClass(c.target, "DIV", this._options.classCollapser)) {
      return!1
    }
  };
  d._dblclickCanvas = function(c, a) {
    h.hasTagAndClass(c.target, "DIV", this._options.classCollapser) || this.toggleCollapse(this._tree.getNode(a.getDatarow()))
  };
  d._keydownColSel = function(c, a, b) {
    c.preventDefault();
    if(h.isNotNullAnd(a, b)) {
      var c = this._tree, b = c.getNode(b.getDatarow())._collapsed, d = this.grid.dataMgr.datalist, e, f;
      for(f in a) {
        a.hasOwnProperty(f) && f !== "length" && (e = c.getNode(d[f]), b ? this.expand(e) : this.collapse(e))
      }
      this._filterRefresh()
    }
  };
  d._makeTree = function() {
    var c = this._tree, a, b;
    c.__init();
    b = c.map;
    c = c.root;
    if(this._options.beginCollapsed) {
      for(a in b) {
        if(b.hasOwnProperty(a)) {
          b[a]._collapsed = !0, b[a]._shown = !1
        }
      }
      b = c.children;
      var d = b.length;
      for(a = 0;a < d;a++) {
        b[a]._shown = !0
      }
      c._collapsed = !0
    }else {
      for(a in b) {
        if(b.hasOwnProperty(a)) {
          b[a]._collapsed = !1, b[a]._shown = !0
        }
      }
      c._collapsed = !1
    }
    this.grid.event.trigger("onCollapserTreeChange", !1, !0)
  };
  d._onRenderHeader = function(c) {
    c.push("<div id='" + this.mid + "h' onmousedown='JGM.m.Collapser." + this.mid + ".toggleMaster();' class='" + this._options.classCollapser + " " + this._options.classMasterCollapser);
    this._tree.root._collapsed ? c.push(" " + this._options.classCollapsed) : c.push(" " + this._options.classExpanded);
    c.push("'></div>")
  };
  d._onRenderCell = function(c, a, b, d, e) {
    c = this._tree.getNode(b);
    if(h.isNull(c)) {
      return null
    }
    b = this.grid.dataMgr.getId(b);
    a = this._options;
    e.push("<div class='" + a.classIndent + "' style='width:" + a.indentSize * c.getLevel() + "px;'></div><div ");
    c.isLeaf() ? e.push("class='" + a.classCollapser) : (e.push('onmousedown="JGM.m.Collapser.' + this.mid + ".toggleById('" + b + "');\" class='" + a.classCollapser), c._collapsed ? e.push(" " + a.classCollapsed) : e.push(" " + a.classExpanded));
    e.push("'></div>")
  };
  d.getLevel = function(c) {
    c = this._tree.getNode(c);
    return h.isNull(c) ? null : c.getLevel()
  };
  d.collapse = function(c, a) {
    if(!(c._collapsed === !0 || c.isLeaf())) {
      c._collapsed = !0;
      c.traverseChildren({fn:function(a) {
        this._shown = !1;
        this._collapsed && (a.propagate = !1)
      }});
      var b = this._getCollapser(c.data);
      b.length > 0 && this._setClass(b, !0);
      if(!a && c.parent === this._tree.root && this._tree.root._collapsed === !1) {
        this._setClass(this._master, this._tree.root._collapsed = !0)
      }
    }
  };
  d.expand = function(c, a) {
    if(!(c._collapsed === !1 || c.isLeaf())) {
      c._collapsed = !1;
      c.traverseChildren({fn:function(a) {
        this._shown = !0;
        this._collapsed && (a.propagate = !1)
      }});
      var b = this._getCollapser(c.data), d = this._tree;
      b.length > 0 && this._setClass(b, !1);
      if(!a && c.parent === d.root) {
        for(var b = d.root.children, e = b.length, f = 0;f < e;f++) {
          if(b[f]._collapsed) {
            return
          }
        }
        this._setClass(this._master, d.root._collapsed = !1)
      }
    }
  };
  d._setClass = function(c, a) {
    if(!h.isNull(c)) {
      var b = this._options;
      a ? c.addClass(b.classCollapsed).removeClass(b.classExpanded) : c.addClass(b.classExpanded).removeClass(b.classCollapsed)
    }
  };
  d.toggleMaster = function() {
    var c = this._tree.root, a = c.children, b = a.length, d = 0;
    if(c._collapsed) {
      for(;d < b;d++) {
        this.expand(a[d], !0)
      }
      this._setClass(this._master, c._collapsed = !1)
    }else {
      for(;d < b;d++) {
        this.collapse(a[d], !0)
      }
      this._setClass(this._master, c._collapsed = !0)
    }
    this._filterRefresh()
  };
  d.toggleCollapse = function(c) {
    c = c._collapsed ? this.expand(c) : this.collapse(c);
    this._filterRefresh();
    return c
  };
  d._onCheckChange = function(c, a) {
    var b = this._tree.getNode(c), d = this.checkMgr, e = [], f;
    a ? (b.traverseChildren({fn:function(a) {
      d.isChecked(this.data) ? a.propagate = !1 : (d._add(this.data), h.isNotNull(f = d.getCheckbox(this.data)) && e.push(f))
    }}), b.traverseParent({up:!0, fn:function(a) {
      h.isNull(this.data) || d.isChecked(this.data) ? a.stop = !0 : (d._add(this.data), h.isNotNull(f = d.getCheckbox(this.data)) && e.push(f))
    }}), i.CheckManager._check($(e)), d._updateMaster()) : (b.traverseChildren({fn:function(a) {
      d.isChecked(this.data) ? (d._remove(this.data), h.isNotNull(f = d.getCheckbox(this.data)) && e.push(f)) : a.propagate = !1
    }}), b.traverseParent({up:!0, fn:function(a) {
      if(h.isNull(this.data) || !d.isChecked(this.data)) {
        a.stop = !0
      }else {
        for(var b = 0, c = this.children, g = c.length;b < g;b++) {
          if(d.isChecked(c[b].data)) {
            a.stop = !0;
            return
          }
        }
        d._remove(this.data);
        h.isNotNull(f = d.getCheckbox(this.data)) && e.push(f)
      }
    }}), i.CheckManager._uncheck($(e)))
  };
  d._filterRefresh = function() {
    this._filter(this.grid.dataMgr.datalist, this.grid.dataMgr.failed);
    this.grid.dataMgr._finish()
  };
  d._getCollapser = function(c) {
    if(h.isNull(c)) {
      return $([])
    }
    c = h.findFirstByTagAndClass(this.grid.view.getCell(this.grid.dataMgr.getIdx(c), this.grid.colDefMgr.getIdxByKey(this.key)), "DIV", this._options.classCollapser);
    return c === void 0 ? $([]) : $(c)
  };
  d._getMaster = function() {
    this._master = $(document.getElementById(this.mid + "h"))
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "ColumnGroup.js"...');
jx.grid.ColumnGroup = {};
(function() {
  function f(d) {
    this.mid = d.mid;
    this.grid = d.grid;
    this.grid.colGroup = this;
    this._options = i._extend({key:void 0, padColKeys:[], sumColKeys:[], prefix:"합계: ", Collapser:{indentSize:0}}, d.options);
    this._options.Collapser.key = this._options.key;
    this._parentMap = {};
    this.__init()
  }
  var i = goog.getObjectByName("jx.grid"), h = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var g = goog.getObjectByName("jx.grid.Grid");
  goog.getObjectByName("jx.grid.Collapser");
  goog.exportSymbol("jx.grid.ColumnGroup", f);
  f.getInstance = function(d) {
    return new f(d)
  };
  var e = f.prototype;
  e.__init = function() {
    var d = this.grid, c = d.dataMgr, a = this._options;
    this.bindEvents();
    d = this.collapser = i.create("Collapser", {grid:d, options:a.Collapser});
    delete a.Collapser;
    this._processData(c.all);
    d.__init();
    c.refresh()
  };
  e.bindEvents = function() {
    var d;
    d = {onBeforeSetDatalist:this._removeAll, "onAfterSetDatalist onAddDatalist":this._processData, onAddDatarow:this._onAddDatarow, onUpdateDatarow:this._onUpdateDatarow, onUpdateDatalist:this._onUpdateDatalist, onRemoveDatarow:this._onRemoveDatarow, onRemoveDatalist:this._onRemoveDatalist, onDestroy:this._destroy};
    if(this._options.sumColKeys.length !== 0) {
      var c = this.mid, a = this.grid.dataMgr._consts._notReal, b = 0, e, f = this._options.sumColKeys, g = this._options.prefix, h = f.length;
      for(e = function(b, d, e, f, h) {
        e[a] === c && h.push(g)
      };b < h;b++) {
        d["onRenderCell_" + f[b] + "_prepend"] = e
      }
      d.onCollapserTreeChange = this._onCollapserTreeChange
    }
    this.grid.event.bind(d, this)
  };
  e._destroy = function() {
    this.grid.log("destroying ColumnGroup instance...", g.V_INIT);
    i._destroy(this, {name:"ColumnGroup", path:"colGroup", property:"collapser", map:"_parentMap _options"})
  };
  e._processData = function(d) {
    for(var c = d.length, a = this._options.key, b = this._options.padColKeys, e = this.grid.dataMgr, f = e._consts._notReal, g = e.idKey, i = this.collapser, t = i._tree._options.nodeKey, p = i._tree._options.parentKey, o = [], m = 0;m < c;m++) {
      this._addData(d[m], a, g, f, t, p, b, o)
    }
    o.length !== 0 && (e.all.pushList(o), e.makeCompositeKeyList(o, !0), e.addListToIdMap(o), h.isNotNull(i) && i._onAddDatalist(o));
    return o
  };
  e._addData = function(d, c, a, b, e, f, g, h) {
    var i = d[c], p = this._parentMap;
    p.hasOwnProperty(i) || (c = this._makeParent(d, c, a, i, b, e, g), h.push(c), p[i] = c);
    d[e] = d[a];
    d[f] = this.mid + i
  };
  e._makeParent = function(d, c, a, b, e, f, g) {
    var h = {}, i = 0, p = g.length;
    h[e] = this.mid;
    h[f] = this.mid + b;
    h[c] = b;
    for(h[a] = (this.grid.colDefMgr.getByKey(c).name || c) + ": " + b;i < p;i++) {
      h[g[i]] = d[g[i]]
    }
    return h
  };
  e._isParent = function(d) {
    return d[this.grid.dataMgr._consts._notReal] === this.mid
  };
  e._removeAll = function() {
    this._parentMap = {}
  };
  e._onAddDatarow = function(d) {
    var c = [], a = this._options, b = this.grid.dataMgr, e = this.collapser, f = e._tree._options;
    this._addData(d, a.key, b.idKey, b._consts._notReal, f.nodeKey, f.parentKey, a.padColKeys, c);
    c.length !== 0 && (d = c[0], b.all.push(d), b.makeCompositeKey(d, !0), b.addToIdMap(d), e._onAddDatarow(d))
  };
  e._onUpdateDatarow = function(d, c, a) {
    if(c.hasOwnProperty(this._options.key)) {
      var b = this._options.key, c = c[b], a = a[b], e = this.mid, b = this.collapser, f = b._tree, g = f._options.parentKey, h = {}, i = {}, p = this._parentMap;
      p.hasOwnProperty(c) || this._onAddDatarow(d);
      h[g] = e + c;
      i[g] = e + a;
      b._onUpdateDatarow(d, h, i);
      d = f.getNode(p[a]);
      d.children.length === 0 && (this.grid.dataMgr.all.remove(d.data), delete p[a], b._onRemoveDatarow(d.data))
    }
  };
  e._onUpdateDatalist = function(d, c, a) {
    var b = this._options.key, e = this.mid, f = this.collapser, g = f._tree, h = g._options.parentKey, i, p = {};
    i = {};
    for(var o = [], m = [], n = [], q = 0, r = d.length;q < r;q++) {
      i = c[q], i.hasOwnProperty(b) && (p = {}, p[h] = e + i[b], o.push(p), i = {}, i[h] = e + a[q][b], m.push(i), n.push(d[q]))
    }
    if(n.length !== 0) {
      d = this._parentMap;
      c = [];
      this._processData(n);
      f._onUpdateDatalist(n, o, m);
      q = 0;
      for(r = m.length;q < r;q++) {
        o = m[q][h], d.hasOwnProperty(o) && (n = g.getNode(d[o]), n.children.length === 0 && (delete d[o], c.push(n.data)))
      }
      c.length !== 0 && (f._onRemoveDatalist(c), this.grid.dataMgr.all.removeList(c))
    }
  };
  e._onRemoveDatarow = function(d) {
    this._isParent(d) ? delete this._parentMap[d[this._options.key]] : (d = this.collapser._tree.getNode(d).parent, d.children.length === 1 && this.grid.dataMgr.remove(d.data))
  };
  e._onRemoveDatalist = function(d) {
    for(var c = 0, a = d.length;c < a;c++) {
      this._onRemoveDatarow(d[c])
    }
  };
  e._onCollapserTreeChange = function() {
    for(var d = {}, c = this._options.sumColKeys, a = c.length, b = 0, e = this.grid.dataMgr._consts._notReal, f = this.mid, g, h, i;b < a;b++) {
      d[c[b]] = 0
    }
    this.collapser._tree.root.traverseChildren({post:!0, fn:function() {
      g = this.data;
      b = 0;
      if(g[e] === f) {
        for(;b < a;b++) {
          h = c[b], g[h] = d[h], d[h] = 0
        }
      }else {
        if(!g.hasOwnProperty(e)) {
          for(;b < a;b++) {
            if(typeof(i = g[c[b]]) === "string") {
              i = i.toFloat()
            }
            d[c[b]] += isNaN(i) ? 0 : i
          }
        }
      }
    }})
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "DataCreator.js"...');
jx.grid.DataCreator = {};
(function() {
  function f(d) {
    this.mid = d.mid;
    this._ctnr = d.container;
    this.grid = d.grid;
    this.grid.creator = this;
    this._options = i._extend({background:"#dfdfdf", borderThickness:0, border:"solid #D6D6D6", inputBorder:"solid #A7A7A7", inputBorderThickness:1, inputHeight:18, inputMargin:8, nameMargin:2, font:"12px Arial,Helvetica,sans-serif", height:28, padding:3, classCreatorIcon:"creator-icon", creatorIconUrl:this.grid._options.imageUrl + "data-creator-icon.png", creatorIconWidth:13, creatorIconHeight:13, classCreator:"data-creator", classColName:"data-creator-name", inputBorderRadius:3}, d.options);
    this._inputMap = {};
    this.__init()
  }
  var i = goog.getObjectByName("jx.grid"), h = goog.getObjectByName("jx.util"), g = goog.getObjectByName("jx.grid.Grid");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.DataCreator", f);
  f.getInstance = function(d) {
    return new f(d)
  };
  var e = f.prototype;
  e.__init = function() {
    this._creator = $("<div class='" + this._options.classCreator + "'>").appendTo(this._ctnr);
    this.bindEvents()
  };
  e.bindEvents = function() {
    this.grid.event.bind({onRenderModules:this._onRenderModules, onCreateCss:this._onCreateCss, onDestroy:this._destroy}, this)
  };
  e._onCreateCss = function() {
    var d = "#" + this.grid.mid + " .", c = this._options, a = [];
    a.push(d + c.classCreator + "{" + i._CONST._cssUnselectable + "float:left;width:100%;padding-left:8px;background:" + c.background + ";border-top:" + (c.borderThickness + "px " + c.border) + ";font:" + c.font + "}");
    a.push(d + c.classCreator + " button{float:left;margin:" + c.padding + "px " + c.padding + "px 0 0;height:" + (c.height - 2 * c.padding) + "px}");
    a.push(d + c.classCreator + " input{float:left;padding:0;margin-top:" + (c.height - c.inputHeight - 2 * c.inputBorderThickness) / 2 + "px;height:" + c.inputHeight + "px;border:" + c.inputBorderThickness + "px " + c.inputBorder + ";border-radius:" + c.inputBorderRadius + "px;-moz-border-radius:" + c.inputBorderRadius + "px}");
    a.push(d + c.classCol + "{float:left;overflow:hidden;white-space:nowrap;line-height:" + c.height + "px;margin-right:" + c.inputMargin + "px}");
    a.push(d + c.classColName + "{float:left;margin-right:" + c.nameMargin + "px}");
    a.push(d + c.classCreatorIcon + "{background:url(" + c.creatorIconUrl + ") no-repeat center;width:" + c.creatorIconWidth + "px;height:" + c.creatorIconHeight + "px}");
    return a.join("")
  };
  e._onRenderModules = function() {
    for(var d = [], c = this.grid.colDefMgr.getAll(), a = c.length, b, e = this._options, f = e.classCol, g = e.classColName, i = this, t = this._creator, p = this._inputMap, o = 0, m = function(a) {
      a.which === h.keyMapKeydown.enter && i._addData()
    };o < a;o++) {
      b = c[o], b.inputOnCreate === !0 && d.push("<div key='" + b.key + "' class='" + f + "'><div class='" + g + "'>" + b.name + "</div><input type='text' value='" + h.ifNull(b.defaultValue, "") + "' style='width:" + b.width + "px'/></div>")
    }
    t[0].innerHTML = d.join("") + "<button type='button' onclick='JGM.m.DataCreator." + this.mid + "._addData()'>등록</button><button type='button' onclick='JGM.m.DataCreator." + this.mid + "._reset()'>초기화</button>";
    for(o = 0;o < a;o++) {
      b = c[o], b.inputOnCreate === !0 && (p[b.key] = t.find("div[key='" + b.key + "'] input").keyup(m))
    }
    this.grid.menubar != null && (this.grid.menubar.addIcon(e.classCreatorIcon, "데이터 로우를 추가합니다.", e.creatorIconWidth, e.creatorIconHeight, function() {
      t.toggle("fast")
    }), t.hide())
  };
  e._addData = function() {
    var d, c = this._inputMap, a = this.grid.colDefMgr, b = {}, e = a.getAll(), f = e.length, g = 0;
    for(d in c) {
      c.hasOwnProperty(d) && a.getByKey(d)
    }
    for(;g < f;g++) {
      a = e[g], d = a.key, c.hasOwnProperty(d) ? b[d] = c[d][0].value : a.defaultValue !== void 0 && (b[d] = a.defaultValue)
    }
    this.grid.event.trigger("onAfterDataCreate", [b], !0);
    this.grid.dataMgr.add(b, {isNew:!0})
  };
  e._reset = function() {
    var d, c = this.grid.colDefMgr, a, b = this._inputMap;
    for(d in b) {
      if(b.hasOwnProperty(d) && (a = c.getByKey(d), a.defaultValue !== void 0)) {
        b[d][0].value = a.defaultValue
      }
    }
  };
  e._destroy = function() {
    this.grid.log("destroying DataCreator instance...", g.V_INIT);
    var d, c = this._inputMap;
    for(d in c) {
      c.hasOwnProperty(d) && i._delete$(c, d)
    }
    i._destroy(this, {name:"DataCreator", path:"creator", $:"_creator", map:"_inputMap _options"})
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "SearchManager.js"...');
jx.grid.SearchManager = {};
(function() {
  function f(a) {
    this.mid = a.mid;
    this._adv = this._advButton = this._tag = this._masterInput = this._mask = null;
    this.grid = a.grid;
    this.grid.search = this;
    this._options = i._extend({background:"#f0f0f0", borderThickness:0, border:"solid #d6d6d6", inputBorder:"1px solid #A7A7A7", inputPadding:0, searchbarAlign:"center", searchbarMargin:3, searchbarWidth:"140px", searchbarHeight:20, tagsHeight:26, tagsPadding:2, tagsBorderRadius:3, resetButton:!1, advButtonColor:"#123272", advButtonFont:"bold 12px Arial,Helvetica,sans-serif", advButtonPadding:5, advButtonBg:"", advButtonBgHover:"url(" + this.grid._options.imageUrl + "more-options-bg-hover.png) repeat-x scroll center", 
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
  var i = goog.getObjectByName("jx.grid"), h = goog.getObjectByName("jx.util"), g = goog.getObjectByName("jx.grid.Grid");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.SearchManager", f);
  var e = f.prototype;
  e._onCreateCss = function() {
    var a = "#" + this.grid.mid + " .", b = this._options, c = b.borderThickness + "px " + b.border, d = "border-radius:" + b.tagsBorderRadius + "px;-moz-border-radius:" + b.tagsBorderRadius + "px", e = b.advButtonBorderThickness + "px " + b.advButtonBorder, f = b.advButtonBorderThickness + "px " + b.advButtonBorderHover, g = b.advButtonBorderThickness + "px " + b.advButtonBorderActive, h = b.advButtonBorderThickness + "px " + b.advButtonBorderOpened, j = b.tagsHeight - 2 * b.tagsPadding, k = j - 
    2 * b.advButtonBorderThickness, l = j - 2 * b.tagBorderThickness, m = a + b.classMask, n = a + b.classSearchbar, o = a + b.classAdvButton, q = a + b.classRemoveTag, p = [];
    p.push(m + "{" + i._CONST._cssUnselectable + "overflow:hidden;float:left;background:" + b.background + "}");
    p.push(m + " button{margin:0;padding:0 3px}");
    p.push(m + " input{border:" + b.inputBorder + ";padding:" + b.inputPadding + "}");
    p.push(n + "{float:left;width:" + b.searchbarWidth + ";margin:" + b.searchbarMargin + "px 2px;height:" + b.searchbarHeight + "px;" + d + "}");
    p.push(a + b.classTagbar + "{float:left;cursor:default;height:" + (b.tagsHeight - b.tagsPadding) + "px;padding:" + b.tagsPadding + "px 0 0 " + b.tagsPadding + "px;border-bottom:" + c + "}");
    p.push(o + "{float:left;margin-right:" + b.tagsPadding + "px;background:" + b.advButtonBg + ";border:" + e + ";padding:0 " + b.advButtonPadding + "px;" + d + "}");
    p.push(o + ":hover{background:" + b.advButtonBgHover + ";border:" + f + "}");
    p.push(o + ".opened{background:" + b.advButtonBgOpened + ";border:" + h + "}");
    p.push(o + ":active{background:" + b.advButtonBgActive + ";border:" + g + "}");
    p.push(a + b.classAdvButtonName + "{float:left;color:" + b.advButtonColor + ";font:" + b.advButtonFont + ";line-height:" + k + "px}");
    p.push(a + b.classAdvButtonIcon + "{float:left;height:" + k + "px;margin-left:" + b.advButtonIconMargin + "px;background:url(" + b.advButtonIconUrl + ") no-repeat center;width:" + b.advButtonIconWidth + "px}");
    p.push(o + ".opened ." + b.classAdvButtonIcon + "{background:url(" + b.advButtonIconCloseUrl + ") no-repeat center}");
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
  e.__init = function() {
    this.grid.event.bind({onRenderModules:this._onRenderModules, onCreateCss:this._onCreateCss, onFilter:this._onFilter, onDestroy:this._destroy, onAfterRenderModules:this._onAfterRenderModules}, this)
  };
  e._onRenderModules = function() {
    var a = this._options;
    this.grid.colDefMgr.get();
    var b = this.mid, c = "jgrid-search-input-" + b, d = this._mask = $('<div class="' + a.classMask + '"><input type="text" id="' + c + '" class="' + a.classSearchbar + '" style="float:left;"/></div>');
    this._tag = $("<div class='" + a.classTagbar + "'>" + (a.resetButton ? "<button type='button' class='" + a.classClearTags + "' onclick='JGM.m.SearchManager." + b + "._removeAllOptions()'>초기화</button>" : "") + "</div>").appendTo(d);
    var b = this.grid.menubar, e = this;
    b.addIcon(a.classSearchIcon, "데이터 검색을 합니다.", a.searchIconWidth, a.searchIconHeight, function() {
      d.toggle("fast")
    });
    d.hide();
    b.appendHtml(d);
    var f = this._masterInput = document.getElementById(c);
    $(f).keyup(function(a) {
      a = a.which;
      a === h.keyMapKeydown.enter ? e._parse(f.value) : a === h.keyMapKeydown.esc && e._removeAllOptions()
    })
  };
  e._onAfterRenderModules = function() {
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
  e._destroy = function() {
    this.grid.log("destroying SearchManager instance...", g.V_INIT);
    var a, b, c, d = this._globalMap, e = this._filterMap, f = this._tagMap;
    for(a in d) {
      d.hasOwnProperty(a) && (i._delete$(d[a], "tag"), i._deleteArray(d[a], "list"))
    }
    for(a in e) {
      if(e.hasOwnProperty(a)) {
        d = e[a];
        for(b in d) {
          d.hasOwnProperty(b) && (b !== "andor" && b !== "parser" && b !== "validator" && i._delete$(d[b], "input"), i._deleteMap(d, b))
        }
        i._deleteMap(e, a)
      }
    }
    for(a in f) {
      if(f.hasOwnProperty(a)) {
        e = f[a];
        for(b in e) {
          if(e.hasOwnProperty(b)) {
            d = e[b];
            for(c in d) {
              d.hasOwnProperty(c) && (i._delete$(d[c], "tag"), i._deleteMap(d, c))
            }
            i._deleteMap(e, b)
          }
        }
        i._deleteMap(f, a)
      }
    }
    i._destroy(this, {name:"SearchManager", path:"search", $:"_advButton _mask _tag _adv", array:"_global", map:"_globalMap _filterMap _tagMap _codeMap _nameMap _options _keyToName"})
  };
  e._onFilter = function(a, b) {
    if(this._global.length === 0 && h.isEmptyObj(this._codeMap)) {
      this.grid.event.trigger("onSearch", [!1], !0)
    }else {
      this.grid.event.trigger("onSearch", [!0], !0);
      var c, d = this._tagMap, e, f, g = a.length, i, j = this._filterMap, k = this.constructor.CONST.and, l, m = this._global.length > 0, n, o;
      if(m) {
        var q = this._global, p;
        i = this.grid.colDefMgr.get().filter(function(a) {
          return!a.noSearch
        });
        var r = i.length, t = [];
        for(n = 0;n < r;n++) {
          t.push(i[n].key)
        }
      }
      n = g - 1;
      a:for(;n >= 0;n--) {
        g = a[n];
        if(m) {
          i = q.slice();
          c = 0;
          for(;i.length !== 0 && c < r;c++) {
            if((p = g[t[c]]) != null) {
              h.isString(p) || (p = p.toString());
              for(o = i.length - 1;o >= 0;o--) {
                p.indexOf(i[o]) !== -1 && i.removeAt(o)
              }
            }
          }
          if(i.length !== 0) {
            a.removeAt(n);
            b.push(g);
            continue a
          }
        }
        for(e in d) {
          if(d.hasOwnProperty(e)) {
            if(o = d[e], c = j[e].andor, i = g[e], c === k) {
              for(f in o) {
                if(o.hasOwnProperty(f)) {
                  for(l in c = o[f], c) {
                    if(c.hasOwnProperty(l) && !c[l].fn(i)) {
                      a.removeAt(n);
                      b.push(g);
                      continue a
                    }
                  }
                }
              }
            }else {
              for(f in o) {
                if(o.hasOwnProperty(f)) {
                  for(l in c = o[f], c) {
                    if(c.hasOwnProperty(l) && c[l].fn(i)) {
                      continue a
                    }
                  }
                }
              }
              a.removeAt(n);
              b.push(g);
              continue a
            }
          }
        }
      }
    }
  };
  e._registerFilter = function(a, b, c, d, e) {
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
  e._parse = function(a) {
    for(var b, c, d, e, f = h.split(a), g = f.length, i = 2, j = !1, k = [], l = this._nameMap, m = this._filterMap, n = 0;n < g;n++) {
      if(a = f[n], a !== "") {
        switch(i) {
          case 0:
            m[b].hasOwnProperty(a) && (d = a, i = 1);
            break;
          case 1:
            e = a;
            i = 2;
            break;
          case 2:
            a.charAt(0) === "@" ? (a = a.substring(1), l.hasOwnProperty(a) ? (h.isNotNullAnd(b, c, d, e) && this._registerOption(b, c, d, e, !0) && (j = !0), b = l[a], c = a, e = d = void 0, i = 0) : b == null ? k.push(a) : e += " " + a) : b == null ? k.push(a) : e += " " + a
        }
      }
    }
    h.isNotNullAnd(b, c, d, e) && this._registerOption(b, c, d, e, !0) && (j = !0);
    this._registerGlobal(k) && (j = !0);
    this._syncMasterInput();
    j && this.grid.dataMgr.refresh()
  };
  e._syncMasterInput = function() {
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
      this._masterInput.value = $.trim(a)
    }else {
      this._masterInput.value = ""
    }
  };
  e._registerGlobal = function(a) {
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
  e._removeGlobal = function(a) {
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
  e._registerOption = function(a, b, c, d, e) {
    var g = this._filterMap, h, i = this._codeMap;
    if(g.hasOwnProperty(a) && (h = g[a]).hasOwnProperty(c)) {
      g = h[c];
      if(d == null) {
        var j = g.input, d = $.trim(j.val());
        j.val("")
      }else {
        d = $.trim(d)
      }
      if(d.length === 0) {
        return!1
      }
      h.parser != null && (d = h.parser(d));
      if(i.hasOwnProperty(a + "@T" + c + "@B" + d)) {
        return!1
      }
      if(h.validator != null && !h.validator(d)) {
        return!1
      }
      g = g.option;
      h = h.andor
    }else {
      return!1
    }
    j = this._tagMap[a];
    if(j[c].hasOwnProperty(d)) {
      return!1
    }
    var k, l, m, n, o = this._filterMap[a], p;
    for(m in j) {
      if(j.hasOwnProperty(m)) {
        for(n in k = j[m], k) {
          k.hasOwnProperty(n) && (p = k[n], l = o.parser != null ? o.parser(n) : n, f._checkDisable(g.type, p.option.type, h, d, l) && (delete i[a + "@T" + p.option.tag + "@B" + l], p.tag.remove(), delete p.tag, delete p.option, delete p.fn, delete k[n]))
        }
      }
    }
    i[a + "@T" + c + "@B" + d] = !0;
    this._createTag(a, g, d, b);
    e || (this._syncMasterInput(), this.grid.dataMgr.refresh());
    return!0
  };
  e._removeOption = function(a, b, c) {
    var d = this._tagMap, e, f;
    if(d.hasOwnProperty(a) && (e = d[a]).hasOwnProperty(b) && (f = e[b]).hasOwnProperty(c)) {
      d = f[c], d.tag.remove(), delete d.tag, delete d.option, delete d.fn, delete f[c], delete this._codeMap[a + "@T" + b + "@B" + c], this._syncMasterInput(), this.grid.dataMgr.refresh()
    }
  };
  e._removeAllOptions = function() {
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
  e._createTag = function(a, b, c, d) {
    var e = this._options;
    return this._tagMap[a][b.tag][c] = {tag:$("<div class='" + e.classTag + "' title='" + b.comment(d, c) + "'><div class='" + e.classTagName + "'>@" + d + " " + b.tag + " " + c + "</div><div class='" + e.classRemoveTag + "' title='필터 제거' onclick=\"JGM.m.SearchManager." + this.mid + "._removeOption('" + a + "','" + b.tag + "','" + c + "')\"></div></div>").appendTo(this._tag), option:b, fn:b.fn(c)}
  };
  var d = f.CONST = {lt:0, lte:1, eq:2, neq:3, gt:4, gte:5, and:6, or:7, T:8, F:9}, e = d.lt, c = d.gt, a = d.eq, b = d.neq, j = d.and, k = d.or, l = d.T, d = d.F, x = f._comparator = {}, t = x[e] = function(a, b) {
    return a <= b
  }, p = x[c] = function(a, b) {
    return a >= b
  }, o = x[a] = function(a, b) {
    return a === b
  }, l = x[l] = function() {
    return!0
  }, m = f._disableMap = {}, n = m[e] = {}, q = m[c] = {}, r = m[a] = {}, m = m[b] = {};
  x[d] = function() {
    return!1
  };
  n[e] = {};
  n[e][j] = l;
  n[e][k] = l;
  n[c] = {};
  n[c][j] = t;
  n[c][k] = p;
  n[a] = {};
  n[a][j] = l;
  n[a][k] = p;
  n[b] = {};
  n[b][j] = t;
  n[b][k] = l;
  q[e] = {};
  q[e][j] = p;
  q[e][k] = t;
  q[c] = {};
  q[c][j] = l;
  q[c][k] = l;
  q[a] = {};
  q[a][j] = l;
  q[a][k] = t;
  q[b] = {};
  q[b][j] = p;
  q[b][k] = l;
  r[e] = {};
  r[e][j] = l;
  r[e][k] = t;
  r[c] = {};
  r[c][j] = l;
  r[c][k] = p;
  r[a] = {};
  r[a][j] = l;
  r[a][k] = o;
  r[b] = {};
  r[b][j] = l;
  r[b][k] = l;
  m[e] = {};
  m[e][j] = p;
  m[e][k] = l;
  m[c] = {};
  m[c][j] = t;
  m[c][k] = l;
  m[a] = {};
  m[a][j] = l;
  m[a][k] = l;
  m[b] = {};
  m[b][j] = o;
  m[b][k] = l;
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
    h.isString(a) && (a = a.toFloat());
    return function(b) {
      return b > a
    }
  }}, {name:"gte", tag:">=", type:c, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 크거나 같은"
  }, fn:function(a) {
    h.isString(a) && (a = a.toFloat());
    return function(b) {
      return b >= a
    }
  }}, {name:"lt", tag:"<", type:e, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 작은"
  }, fn:function(a) {
    h.isString(a) && (a = a.toFloat());
    return function(b) {
      return b < a
    }
  }}, {name:"lte", tag:"<=", type:e, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 작거나 같은"
  }, fn:function(a) {
    h.isString(a) && (a = a.toFloat());
    return function(b) {
      return b <= a
    }
  }}, {name:"eq", tag:"=", type:a, comment:function(a, b) {
    return a + " 이(가) " + b + "인"
  }, fn:function(a) {
    h.isString(a) && (a = a.toFloat());
    return function(b) {
      return b === a
    }
  }}, {name:"neq", tag:"!=", type:b, comment:function(a, b) {
    return a + " 이(가) " + b + "이(가) 아닌"
  }, fn:function(a) {
    h.isString(a) && (a = a.toFloat());
    return function(b) {
      return b !== a
    }
  }}, {name:"contains", tag:"*=", comment:function(a, b) {
    return a + " 이(가) 숫자 " + b + "를 포함하는"
  }, fn:function(a) {
    a = h.isNumber(a) ? a.toString() : $.trim(a);
    return function(b) {
      return b.toString().indexOf(a) !== -1
    }
  }}, {name:"parser", fn:function(a) {
    return a.toFloat()
  }}, {name:"validator", fn:function(a) {
    return!isNaN(a)
  }}];
  f._stringFilter = [{name:"to", tag:"<=", type:e, comment:function(a, b) {
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
  }}, {name:"equals", tag:"=", type:a, comment:function(a, b) {
    return a + " 이(가) " + b + "와(과) 같은"
  }, fn:function(a) {
    a = $.trim(a).toLowerCase();
    return function(b) {
      return b.toLowerCase() === a
    }
  }}, {name:"notEquals", tag:"!=", type:b, comment:function(a, b) {
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
    var a = a.toLowerCase(), b = h.split(a), c = b.length;
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
    var a = a.toLowerCase(), b = h.split(a), c = b.length;
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
