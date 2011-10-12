/**
 * JexGrid Build 49
 * Date: Wed Oct 12 17:41:18 KST 2011
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
  var g = Array.prototype;
  if(!g.indexOf) {
    g.indexOf = function(g) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var h = Object(this), e = h.length >>> 0;
      if(e === 0) {
        return-1
      }
      var b = 0;
      arguments.length > 0 && (b = Number(arguments[1]), b !== b ? b = 0 : b !== 0 && b !== 1 / 0 && b !== -(1 / 0) && (b = (b > 0 || -1) * Math.floor(Math.abs(b))));
      if(b >= e) {
        return-1
      }
      for(b = b >= 0 ? b : Math.max(e - Math.abs(b), 0);b < e;b++) {
        if(b in h && h[b] === g) {
          return b
        }
      }
      return-1
    }
  }
  if(!g.lastIndexOf) {
    g.lastIndexOf = function(g) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var h = Object(this), e = h.length >>> 0;
      if(e === 0) {
        return-1
      }
      var b = e;
      arguments.length > 1 && (b = Number(arguments[1]), b !== b ? b = 0 : b !== 0 && b !== 1 / 0 && b !== -(1 / 0) && (b = (b > 0 || -1) * Math.floor(Math.abs(b))));
      for(e = b >= 0 ? Math.min(b, e - 1) : e - Math.abs(b);e >= 0;e--) {
        if(e in h && h[e] === g) {
          return e
        }
      }
      return-1
    }
  }
  if(!g.filter) {
    g.filter = function(g, h) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var e = Object(this), b = e.length >>> 0;
      if(typeof g !== "function") {
        throw new TypeError;
      }
      for(var a = [], f = 0;f < b;f++) {
        if(f in e) {
          var c = e[f];
          g.call(h, c, f, e) && a.push(c)
        }
      }
      return a
    }
  }
  if(!g.forEach) {
    g.forEach = function(g, h) {
      var e, b = Object(this), a = b.length >>> 0, f = 0;
      if(!g || !g.call) {
        throw new TypeError;
      }
      for(h && (e = h);f < a;) {
        var c = String(f);
        b.hasOwnProperty(c) && (c = b[c], g.call(e, c, f, b));
        f++
      }
    }
  }
  if(!g.every) {
    g.every = function(g, h) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var e = Object(this), b = e.length >>> 0;
      if(typeof g !== "function") {
        throw new TypeError;
      }
      for(var a = 0;a < b;a++) {
        if(a in e && !g.call(h, e[a], a, e)) {
          return!1
        }
      }
      return!0
    }
  }
  if(!g.map) {
    g.map = function(g, h) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var e = Object(this), b = e.length >>> 0;
      if(typeof g !== "function") {
        throw new TypeError;
      }
      for(var a = Array(b), f = 0;f < b;f++) {
        f in e && (a[f] = g.call(h, e[f], f, e))
      }
      return a
    }
  }
  if(!g.some) {
    g.some = function(g, h) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var e = Object(this), b = e.length >>> 0;
      if(typeof g !== "function") {
        throw new TypeError;
      }
      for(var a = 0;a < b;a++) {
        if(a in e && g.call(h, e[a], a, e)) {
          return!0
        }
      }
      return!1
    }
  }
  if(!g.reduce) {
    g.reduce = function(g) {
      var h, e = this.length, b;
      if(typeof g !== "function") {
        throw new TypeError("First argument is not callable");
      }
      if((e == 0 || e === null) && arguments.length <= 1) {
        throw new TypeError("Array length is 0 and no second argument");
      }
      arguments.length <= 1 ? (b = this[0], h = 1) : b = arguments[1];
      for(h = h || 0;h < e;++h) {
        h in this && (b = g.call(void 0, b, this[h], h, this))
      }
      return b
    }
  }
  if(!g.reduceRight) {
    g.reduceRight = function(g) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var h = Object(this), e = h.length >>> 0;
      if(typeof g !== "function") {
        throw new TypeError;
      }
      if(e === 0 && arguments.length === 1) {
        throw new TypeError;
      }
      e -= 1;
      var b;
      if(arguments.length >= 2) {
        b = arguments[1]
      }else {
        do {
          if(e in this) {
            b = this[e--];
            break
          }
          if(--e < 0) {
            throw new TypeError;
          }
        }while(1)
      }
      for(;e >= 0;) {
        e in h && (b = g.call(void 0, b, h[e], e, h)), e--
      }
      return b
    }
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "engine_extension.js"...');
var engine_extension = {};
(function() {
  var g = Number.prototype, i = String.prototype, h = Array.prototype;
  if(!g.toFixedFloat) {
    g.toFixedFloat = function(e) {
      return parseFloat(this.toFixed(e))
    }
  }
  if(!i.toInt) {
    i.toInt = function() {
      var e;
      e = parseInt(this, 10);
      if(e === e) {
        return e
      }
      if((e = this.replace(/[^\d\.\-]/g, "")).length === 0) {
        return NaN
      }
      for(var b, a = 0, f = 0, c = e.length, d = 0, j = !1;d < c;d++) {
        if(b = e.charAt(d), b === ".") {
          if(++a === 2) {
            j = !0;
            break
          }
        }else {
          if(b === "-" && ++f === 2) {
            j = !0;
            break
          }
        }
      }
      return j === !0 && (e = e.replace(/[\.\-]/g, "")).length === 0 ? NaN : /^-*0*\./.test(e) || (e = e.replace(/^-0+/, "-")).length === 0 || (e = e.replace(/^0+/, "")).length === 0 ? 0 : parseInt(e, 10)
    }
  }
  if(!i.toFloat) {
    i.toFloat = function() {
      var e;
      if((e = this.replace(/[^-\d\.]/g, "")).length === 0) {
        return NaN
      }
      for(var b = 0, a = e.length, f, c = 0, d = 0;b < a;b++) {
        if(f = e.charAt(b), f === ".") {
          if(c !== 0) {
            return NaN
          }else {
            c++
          }
        }else {
          if(f === "-") {
            if(d !== 0) {
              return NaN
            }else {
              d++
            }
          }
        }
      }
      return parseFloat(e)
    }
  }
  if(!h.remove) {
    h.remove = function(e) {
      if(this.length === 0) {
        return-1
      }
      e = this.indexOf(e);
      e !== -1 && this.splice(e, 1);
      return e
    }
  }
  if(!h.removeAll) {
    h.removeAll = function(e) {
      if(this.length === 0) {
        return this
      }
      for(var b = this.length;(b = this.lastIndexOf(e, b - 1)) !== -1;) {
        if(this.splice(b, 1), b === 0) {
          break
        }
      }
      return this
    }
  }
  if(!h.removeList) {
    h.removeList = function(e) {
      if(this.length === 0 || e.length === 0) {
        return this
      }
      for(var b = e.length, a = 0, f;a < b;a++) {
        (f = this.indexOf(e[a])) !== -1 && this.splice(f, 1)
      }
      return this
    }
  }
  if(!h.removeAt) {
    h.removeAt = function(e) {
      if(this.length !== 0 && (e < 0 && (e = this.length + e), e < 0 && (e = 0), this.hasOwnProperty(e) && e < this.length)) {
        return this.splice(e, 1)[0]
      }
    }
  }
  if(!h.addAt) {
    h.addAt = function(e, b) {
      this.splice(e, 0, b);
      return b
    }
  }
  if(!h.pushList) {
    h.pushList = function(e) {
      return e.length === 0 ? this.length : h.push.apply(this, e)
    }
  }
  if(!h.pushListAt) {
    h.pushListAt = function(e, b) {
      if(b.length === 0) {
        return this.length
      }
      var a = [e, 0];
      h.push.apply(a, b);
      h.splice.apply(this, a);
      return this.length
    }
  }
})();
var COMPILED = !0, goog = goog || {};
goog.global = window;
window.goog = goog;
goog.DEBUG = !0;
goog.LOCALE = "en";
goog.provide = function(g) {
  if(!COMPILED) {
    if(goog.isProvided_(g)) {
      throw Error('Namespace "' + g + '" already declared.');
    }
    delete goog.implicitNamespaces_[g];
    for(var i = g;i = i.substring(0, i.lastIndexOf("."));) {
      if(goog.getObjectByName(i)) {
        break
      }
      goog.implicitNamespaces_[i] = !0
    }
  }
  goog.exportSymbol_(g)
};
goog.setTestOnly = function(g) {
  if(COMPILED && !goog.DEBUG) {
    throw g = g || "", Error("Importing test-only code into non-debug environment" + g ? ": " + g : ".");
  }
};
if(!COMPILED) {
  goog.isProvided_ = function(g) {
    return!goog.implicitNamespaces_[g] && !!goog.getObjectByName(g)
  }, goog.implicitNamespaces_ = {}
}
goog.exportSymbol_ = function(g, i, h) {
  g = g.split(".");
  h = h || goog.global;
  !(g[0] in h) && h.execScript && h.execScript("var " + g[0]);
  for(var e;g.length && (e = g.shift());) {
    !g.length && goog.isDef(i) ? h[e] = i : h = h[e] ? h[e] : h[e] = {}
  }
};
goog.getObjectByName = function(g, i) {
  for(var h = g.split("."), e = i || goog.global, b;b = h.shift();) {
    if(goog.isDefAndNotNull(e[b])) {
      e = e[b]
    }else {
      return null
    }
  }
  return e
};
goog.globalize = function(g, i) {
  var h = i || goog.global, e;
  for(e in g) {
    h[e] = g[e]
  }
};
goog.addDependency = function(g, i, h) {
  if(!COMPILED) {
    for(var e, g = g.replace(/\\/g, "/"), b = goog.dependencies_, a = 0;e = i[a];a++) {
      b.nameToPath[e] = g, g in b.pathToNames || (b.pathToNames[g] = {}), b.pathToNames[g][e] = !0
    }
    for(e = 0;i = h[e];e++) {
      g in b.requires || (b.requires[g] = {}), b.requires[g][i] = !0
    }
  }
};
goog.ENABLE_DEBUG_LOADER = !0;
goog.require = function(g) {
  if(!COMPILED && !goog.isProvided_(g)) {
    if(goog.ENABLE_DEBUG_LOADER) {
      var i = goog.getPathFromDeps_(g);
      if(i) {
        goog.included_[i] = !0;
        goog.writeScripts_();
        return
      }
    }
    g = "goog.require could not find: " + g;
    goog.global.console && goog.global.console.error(g);
    throw Error(g);
  }
};
goog.basePath = "";
goog.nullFunction = function() {
};
goog.identityFunction = function(g) {
  return g
};
goog.abstractMethod = function() {
  throw Error("unimplemented abstract method");
};
goog.addSingletonGetter = function(g) {
  g.getInstance = function() {
    return g.instance_ || (g.instance_ = new g)
  }
};
if(!COMPILED && goog.ENABLE_DEBUG_LOADER) {
  goog.included_ = {}, goog.dependencies_ = {pathToNames:{}, nameToPath:{}, requires:{}, visited:{}, written:{}}, goog.inHtmlDocument_ = function() {
    var g = goog.global.document;
    return typeof g != "undefined" && "write" in g
  }, goog.findBasePath_ = function() {
    if(goog.global.CLOSURE_BASE_PATH) {
      goog.basePath = goog.global.CLOSURE_BASE_PATH
    }else {
      if(goog.inHtmlDocument_()) {
        for(var g = goog.global.document.getElementsByTagName("script"), i = g.length - 1;i >= 0;--i) {
          var h = g[i].src, e = h.lastIndexOf("?"), e = e == -1 ? h.length : e;
          if(h.substr(e - 7, 7) == "base.js") {
            goog.basePath = h.substr(0, e - 7);
            break
          }
        }
      }
    }
  }, goog.importScript_ = function(g) {
    var i = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_;
    !goog.dependencies_.written[g] && i(g) && (goog.dependencies_.written[g] = !0)
  }, goog.writeScriptTag_ = function(g) {
    return goog.inHtmlDocument_() ? (goog.global.document.write('<script type="text/javascript" src="' + g + '"><\/script>'), !0) : !1
  }, goog.writeScripts_ = function() {
    function g(a) {
      if(!(a in e.written)) {
        if(!(a in e.visited) && (e.visited[a] = !0, a in e.requires)) {
          for(var b in e.requires[a]) {
            if(!goog.isProvided_(b)) {
              if(b in e.nameToPath) {
                g(e.nameToPath[b])
              }else {
                throw Error("Undefined nameToPath for " + b);
              }
            }
          }
        }
        a in h || (h[a] = !0, i.push(a))
      }
    }
    var i = [], h = {}, e = goog.dependencies_, b;
    for(b in goog.included_) {
      e.written[b] || g(b)
    }
    for(b = 0;b < i.length;b++) {
      if(i[b]) {
        goog.importScript_(goog.basePath + i[b])
      }else {
        throw Error("Undefined script input");
      }
    }
  }, goog.getPathFromDeps_ = function(g) {
    return g in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[g] : null
  }, goog.findBasePath_()
}
goog.typeOf = function(g) {
  var i = typeof g;
  if(i == "object") {
    if(g) {
      if(g instanceof Array) {
        return"array"
      }else {
        if(g instanceof Object) {
          return i
        }
      }
      var h = Object.prototype.toString.call(g);
      if(h == "[object Window]") {
        return"object"
      }
      if(h == "[object Array]" || typeof g.length == "number" && typeof g.splice != "undefined" && typeof g.propertyIsEnumerable != "undefined" && !g.propertyIsEnumerable("splice")) {
        return"array"
      }
      if(h == "[object Function]" || typeof g.call != "undefined" && typeof g.propertyIsEnumerable != "undefined" && !g.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if(i == "function" && typeof g.call == "undefined") {
      return"object"
    }
  }
  return i
};
goog.propertyIsEnumerableCustom_ = function(g, i) {
  if(i in g) {
    for(var h in g) {
      if(h == i && Object.prototype.hasOwnProperty.call(g, i)) {
        return!0
      }
    }
  }
  return!1
};
goog.propertyIsEnumerable_ = function(g, i) {
  return g instanceof Object ? Object.prototype.propertyIsEnumerable.call(g, i) : goog.propertyIsEnumerableCustom_(g, i)
};
goog.isDef = function(g) {
  return g !== void 0
};
goog.isNull = function(g) {
  return g === null
};
goog.isDefAndNotNull = function(g) {
  return g != null
};
goog.isArray = function(g) {
  return goog.typeOf(g) == "array"
};
goog.isArrayLike = function(g) {
  var i = goog.typeOf(g);
  return i == "array" || i == "object" && typeof g.length == "number"
};
goog.isDateLike = function(g) {
  return goog.isObject(g) && typeof g.getFullYear == "function"
};
goog.isString = function(g) {
  return typeof g == "string"
};
goog.isBoolean = function(g) {
  return typeof g == "boolean"
};
goog.isNumber = function(g) {
  return typeof g == "number"
};
goog.isFunction = function(g) {
  return goog.typeOf(g) == "function"
};
goog.isObject = function(g) {
  g = goog.typeOf(g);
  return g == "object" || g == "array" || g == "function"
};
goog.getUid = function(g) {
  return g[goog.UID_PROPERTY_] || (g[goog.UID_PROPERTY_] = ++goog.uidCounter_)
};
goog.removeUid = function(g) {
  "removeAttribute" in g && g.removeAttribute(goog.UID_PROPERTY_);
  try {
    delete g[goog.UID_PROPERTY_]
  }catch(i) {
  }
};
goog.UID_PROPERTY_ = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36);
goog.uidCounter_ = 0;
goog.getHashCode = goog.getUid;
goog.removeHashCode = goog.removeUid;
goog.cloneObject = function(g) {
  var i = goog.typeOf(g);
  if(i == "object" || i == "array") {
    if(g.clone) {
      return g.clone()
    }
    var i = i == "array" ? [] : {}, h;
    for(h in g) {
      i[h] = goog.cloneObject(g[h])
    }
    return i
  }
  return g
};
goog.bindNative_ = function(g, i, h) {
  return g.call.apply(g.bind, arguments)
};
goog.bindJs_ = function(g, i, h) {
  if(!g) {
    throw Error();
  }
  if(arguments.length > 2) {
    var e = Array.prototype.slice.call(arguments, 2);
    return function() {
      var b = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(b, e);
      return g.apply(i, b)
    }
  }else {
    return function() {
      return g.apply(i, arguments)
    }
  }
};
goog.bind = function(g, i, h) {
  goog.bind = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? goog.bindNative_ : goog.bindJs_;
  return goog.bind.apply(null, arguments)
};
goog.partial = function(g, i) {
  var h = Array.prototype.slice.call(arguments, 1);
  return function() {
    var e = Array.prototype.slice.call(arguments);
    e.unshift.apply(e, h);
    return g.apply(this, e)
  }
};
goog.mixin = function(g, i) {
  for(var h in i) {
    g[h] = i[h]
  }
};
goog.now = Date.now || function() {
  return+new Date
};
goog.globalEval = function(g) {
  if(goog.global.execScript) {
    goog.global.execScript(g, "JavaScript")
  }else {
    if(goog.global.eval) {
      if(goog.evalWorksForGlobals_ == null) {
        goog.global.eval("var _et_ = 1;"), typeof goog.global._et_ != "undefined" ? (delete goog.global._et_, goog.evalWorksForGlobals_ = !0) : goog.evalWorksForGlobals_ = !1
      }
      if(goog.evalWorksForGlobals_) {
        goog.global.eval(g)
      }else {
        var i = goog.global.document, h = i.createElement("script");
        h.type = "text/javascript";
        h.defer = !1;
        h.appendChild(i.createTextNode(g));
        i.body.appendChild(h);
        i.body.removeChild(h)
      }
    }else {
      throw Error("goog.globalEval not available");
    }
  }
};
goog.evalWorksForGlobals_ = null;
goog.getCssName = function(g, i) {
  var h = function(b) {
    return goog.cssNameMapping_[b] || b
  }, e;
  e = goog.cssNameMapping_ ? goog.cssNameMappingStyle_ == "BY_WHOLE" ? h : function(b) {
    for(var b = b.split("-"), a = [], f = 0;f < b.length;f++) {
      a.push(h(b[f]))
    }
    return a.join("-")
  } : function(b) {
    return b
  };
  return i ? g + "-" + e(i) : e(g)
};
goog.setCssNameMapping = function(g, i) {
  goog.cssNameMapping_ = g;
  goog.cssNameMappingStyle_ = i
};
goog.getMsg = function(g, i) {
  var h = i || {}, e;
  for(e in h) {
    var b = ("" + h[e]).replace(/\$/g, "$$$$"), g = g.replace(RegExp("\\{\\$" + e + "\\}", "gi"), b)
  }
  return g
};
goog.exportSymbol = function(g, i, h) {
  goog.exportSymbol_(g, i, h)
};
goog.exportProperty = function(g, i, h) {
  g[i] = h
};
goog.inherits = function(g, i) {
  function h() {
  }
  h.prototype = i.prototype;
  g.superClass_ = i.prototype;
  g.prototype = new h;
  g.prototype.constructor = g
};
goog.base = function(g, i, h) {
  var e = arguments.callee.caller;
  if(e.superClass_) {
    return e.superClass_.constructor.apply(g, Array.prototype.slice.call(arguments, 1))
  }
  for(var b = Array.prototype.slice.call(arguments, 2), a = !1, f = g.constructor;f;f = f.superClass_ && f.superClass_.constructor) {
    if(f.prototype[i] === e) {
      a = !0
    }else {
      if(a) {
        return f.prototype[i].apply(g, b)
      }
    }
  }
  if(g[i] === e) {
    return g.constructor.prototype[i].apply(g, b)
  }else {
    throw Error("goog.base called from a method of one name to a method of a different name");
  }
};
goog.scope = function(g) {
  g.call(goog.global)
};
window.console && window.console.log && window.console.log('reading javascript source "util.js"...');
var jx = {util:{}}, Util = {}, echo = {};
(function() {
  function g(d, a) {
    if(d) {
      var b = {}, f, c;
      if(a) {
        for(f in d) {
          if(d.hasOwnProperty(f) && (c = d[f]) !== void 0) {
            b[f] = c
          }
        }
      }else {
        for(f in d) {
          if(d.hasOwnProperty(f)) {
            switch(c = d[f], typeof c) {
              case "undefined":
                break;
              case "object":
                b[f] = g(c);
                break;
              default:
                b[f] = c
            }
          }
        }
      }
      return b
    }
    return null
  }
  function i(d, a, b) {
    if(a) {
      if(d) {
        var f, c, j;
        if(b) {
          for(f in a) {
            if(a.hasOwnProperty(f) && (j = a[f]) !== void 0) {
              d[f] = j
            }
          }
        }else {
          for(f in a) {
            if(a.hasOwnProperty(f)) {
              switch(j = a[f], typeof j) {
                case "undefined":
                  break;
                case "object":
                  j && d.hasOwnProperty(f) && (c = d[f]) && typeof c == "object" ? i(c, j) : d[f] = j;
                  break;
                default:
                  d[f] = j
              }
            }
          }
        }
        return d
      }
      return a
    }
    return d
  }
  function h(d, a, b, c) {
    if(s.hasOwnProperty(d)) {
      if(b != null) {
        throw Error("empty element, " + d + ", cannot have content!");
      }
      return o & c ? "<" + d + e(a, !0) + "/>" : "<" + f(d) + e(a, !1) + "/>"
    }
    o & c ? (a = "<" + d + e(a, !0) + ">", b != null && (a += b)) : (d = f(d), a = "<" + d + e(a, !1) + ">", b != null && (a += f(b)));
    return n & c ? a : a + "</" + d + ">"
  }
  function e(d, a) {
    if(d) {
      var c = "", j, e, s;
      if(d.style) {
        j = d.style, delete d.style
      }
      if(a) {
        for(e in d) {
          d.hasOwnProperty(e) && (k.hasOwnProperty(e) ? d[e] && (c += " " + e + '="' + e + '"') : (s = d[e], s != null && (c += " " + e + '="' + s + '"')))
        }
      }else {
        for(e in d) {
          d.hasOwnProperty(e) && (k.hasOwnProperty(e) ? d[e] && (c += " " + e + '="' + e + '"') : (s = d[e], s != null && (c += " " + f(e) + '="' + f(s) + '"')))
        }
      }
      if(j) {
        c += b(j, a), d.style = j
      }
      return c
    }
    return""
  }
  function b(d, a) {
    if(d) {
      if(typeof d == "string") {
        return' style="' + (a ? d : f(d)) + '"'
      }
      var b = ' style="', c, j;
      if(a) {
        for(c in d) {
          d.hasOwnProperty(c) && (j = d[c], j != null && (b += c + ":" + j + ";"))
        }
      }else {
        for(c in d) {
          d.hasOwnProperty(c) && (j = d[c], j != null && (b += f(c) + ":" + f(j) + ";"))
        }
      }
      return b + '"'
    }
    return""
  }
  function a(d) {
    switch(d) {
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
        return d
    }
  }
  function f(d) {
    return d != null ? (typeof d != "string" && (d = d.toString()), d.replace(/[&<>"'\/]/g, a)) : ""
  }
  var c = window.console, d = [], j;
  j = c && c.log ? function(d) {
    for(var a = 0, b = arguments.length;a < b;a++) {
      c.log(arguments[a])
    }
  } : function(a) {
    d.push.apply(d, arguments)
  };
  goog.exportSymbol("jx.util", Util);
  goog.exportSymbol("Util", Util);
  goog.exportSymbol("echo", j);
  Util.isNull = function(d) {
    return d == null
  };
  Util.isNotNull = function(d) {
    return d != null
  };
  Util.isNullAnd = function() {
    for(var d = 0, a = arguments.length;d < a;d++) {
      if(arguments[d] != null) {
        return!1
      }
    }
    return!0
  };
  Util.isNullOr = function() {
    for(var d = 0, a = arguments.length;d < a;d++) {
      if(arguments[d] == null) {
        return!0
      }
    }
    return!1
  };
  Util.isNotNullAnd = function() {
    for(var d = 0, a = arguments.length;d < a;d++) {
      if(arguments[d] == null) {
        return!1
      }
    }
    return!0
  };
  Util.isNotNullOr = function() {
    for(var d = 0, a = arguments.length;d < a;d++) {
      if(arguments[d] != null) {
        return!0
      }
    }
    return!1
  };
  Util.ifNull = function(d, a, b) {
    return d == null ? a : b === void 0 ? d : b
  };
  Util.ifTrue = function(d, a, b) {
    return d === !0 ? a : b === void 0 ? d : b
  };
  Util.isFunction = function(d) {
    return typeof d == "function"
  };
  Util.isString = function(d) {
    return typeof d == "string"
  };
  Util.isNumber = function(d) {
    return typeof d == "number"
  };
  Util.isObject = function(d) {
    return typeof d == "object"
  };
  Util.isArray = function(d) {
    var a = Array.isArray;
    return d && typeof d == "object" && (a && a(d) || typeof d.length == "number" && d.hasOwnProperty("length") && !d.propertyIsEnumerable("length"))
  };
  Util.split = function(d, a, b, c) {
    if(typeof d !== "string") {
      return[]
    }
    a = a === void 0 ? /\s+/ : a;
    b = b === void 0 ? function(d) {
      return!!d
    } : b;
    c = c === void 0 ? function(d) {
      return $.trim(d)
    } : c;
    d = d.split(a);
    c && (d = d.map(c));
    b && (d = d.filter(b));
    return d
  };
  Util.isEmpty = function(d) {
    if(!d) {
      return!0
    }
    if(typeof d != "object") {
      return!1
    }
    for(var a in d) {
      if(d.hasOwnProperty(a)) {
        return!1
      }
    }
    return!0
  };
  Util.isEmptyObj = function(d) {
    if(d == null) {
      return!0
    }
    if(typeof d != "object") {
      return!1
    }
    for(var a in d) {
      if(d.hasOwnProperty(a)) {
        return!1
      }
    }
    return!0
  };
  Util.isNotEmptyObj = function(d) {
    if(d == null || typeof d != "object") {
      return!1
    }
    for(var a in d) {
      if(d.hasOwnProperty(a)) {
        return!0
      }
    }
    return!1
  };
  Util.isEmptyString = function(d) {
    return d == null || d === ""
  };
  Util.isEmptyArray = function(d) {
    if(d == null) {
      return!0
    }
    if(!Util.isArray(d)) {
      return!1
    }
    for(var a = 0, b = d.length;a < b;a++) {
      if(d.hasOwnProperty(a)) {
        return!1
      }
    }
    return!0
  };
  Util.emptyObject = function(d) {
    if(!d || typeof d != "object") {
      return d
    }
    if(Util.isArray(d)) {
      return d.length = 0, d
    }
    for(var a in d) {
      d.hasOwnProperty(a) && delete d[a]
    }
    return d
  };
  Util.deleteUndefined = function(d) {
    if(!d || typeof d != "object") {
      return d
    }
    var a;
    if(Util.isArray(d)) {
      for(a = d.length - 1;a > -1;a--) {
        d.hasOwnProperty(a) && d[a] === void 0 && d.splice(a, 1)
      }
      return d
    }
    for(a in d) {
      d.hasOwnProperty(a) && d[a] === void 0 && delete d[a]
    }
    return d
  };
  Util.deepClone = function(d) {
    if(!d) {
      return d
    }
    switch(typeof d) {
      case "boolean":
      ;
      case "number":
      ;
      case "string":
      ;
      case "function":
        return d
    }
    if(Util.isArray(d)) {
      for(var a = [], b = 0, c = d.length;b < c;b++) {
        b in d && (a[b] = Util.deepClone(d[b]))
      }
      return a
    }
    a = {};
    for(b in d) {
      d.hasOwnProperty(b) && (a[b] = Util.deepClone(d[b]))
    }
    return a
  };
  Util.clone = function(d, a, b) {
    if(!d) {
      return d
    }
    switch(typeof d) {
      case "boolean":
      ;
      case "number":
      ;
      case "string":
      ;
      case "function":
        return d
    }
    if(Util.isArray(d)) {
      if(b === 1) {
        return Array.prototype.slice.call(d)
      }
      for(var c = [], f = d.length, j = 0, b = b !== void 0 ? b - 1 : void 0;j < f;j++) {
        j in d && (c[j] = Util.clone(d[j], a, b))
      }
      return c
    }
    c = {};
    f = Util.isEmptyObj(a);
    if(b === 1) {
      if(f) {
        for(j in d) {
          d.hasOwnProperty(j) && (c[j] = d[j])
        }
      }else {
        for(j in a) {
          a.hasOwnProperty(j) && d.hasOwnProperty(j) && (c[j] = d[j])
        }
      }
    }else {
      if(b = b !== void 0 ? b - 1 : void 0, f) {
        for(j in d) {
          d.hasOwnProperty(j) && (c[j] = Util.clone(d[j], void 0, b))
        }
      }else {
        for(j in a) {
          a.hasOwnProperty(j) && d.hasOwnProperty(j) && (c[j] = Util.clone(d[j], void 0, b))
        }
      }
    }
    return c
  };
  Util.toArray = function(d) {
    var a = [], b;
    for(b in d) {
      d.hasOwnProperty(b) && a.push(d[b])
    }
    return a
  };
  Util.toArrayWithKey = function(d) {
    var a = [], b;
    for(b in d) {
      d.hasOwnProperty(b) && a.push({key:b, val:d[b]})
    }
    return a
  };
  Util.random = function(d) {
    return Math.floor(d * Math.random())
  };
  Util.bound = function(d, a, b) {
    isNaN(b) || (d = Math.min(d, b));
    isNaN(a) || (d = Math.max(d, a));
    return d
  };
  Util.callFn = function() {
    return arguments.length <= 3 ? arguments[1].call(arguments[0], arguments[2]) : arguments[1].apply(arguments[0], Array.prototype.slice.call(arguments, 2))
  };
  Util.formatNumber = function(d, a, b, c, f) {
    var b = b === void 0 ? "&#8361; " : b, a = isNaN(a) ? 0 : a, c = c === void 0 ? "." : c, f = f === void 0 ? "," : f, j = d < 0 ? "-" : "", k = parseInt(d = Math.abs(+d || 0).toFixed(a), 10) + "", e = k.length, e = e > 3 ? e % 3 : 0;
    return b + j + (e ? k.substr(0, e) + f : "") + k.substr(e).replace(/(\d{3})(?=\d)/g, "$1" + f) + (a ? c + Math.abs(d - k).toFixed(a).slice(2) : "")
  };
  Util.getBodyScroll = function() {
    var d = 0, a = 0;
    if(typeof window.pageYOffset === "number") {
      a = window.pageYOffset, d = window.pageXOffset
    }else {
      if(document.body && (document.body.scrollLeft || document.body.scrollTop)) {
        a = document.body.scrollTop, d = document.body.scrollLeft
      }else {
        if(document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
          a = document.documentElement.scrollTop, d = document.documentElement.scrollLeft
        }
      }
    }
    return[d, a]
  };
  Util.hasClass = function(d, a) {
    if(d && a) {
      var b = d.className;
      if(b === a) {
        return!0
      }
      if(b && b.length >= a.length) {
        for(var b = d.classList || Util.split(b), c = 0, f = b.length;c < f;c++) {
          if(b[c] === a) {
            return!0
          }
        }
      }
    }
    return!1
  };
  Util.hasTagAndClass = function(d, a, b) {
    if(d && a && b && d.tagName === a) {
      a = d.className;
      if(a === b) {
        return!0
      }
      if(a && a.length >= b.length) {
        for(var d = d.classList || Util.split(a), a = 0, c = d.length;a < c;a++) {
          if(d[a] === b) {
            return!0
          }
        }
      }
    }
    return!1
  };
  Util.closest = function(d, a, b) {
    if(b) {
      for(var c = d, f = !1;c;) {
        if(c === b) {
          f = !0;
          break
        }
        c = c.parentNode
      }
      if(!f) {
        return null
      }
    }
    if(Util.hasClass(d, a)) {
      return d
    }
    for(d = d.parentNode;d && d !== b;d = d.parentNode) {
      if(Util.hasClass(d, a)) {
        return d
      }
    }
    return null
  };
  Util.closestWithTag = function(d, a, b, c) {
    if(c) {
      for(var f = d, j = !1;f;) {
        if(f === c) {
          j = !0;
          break
        }
        f = f.parentNode
      }
      if(!j) {
        return null
      }
    }
    if(Util.hasTagAndClass(d, a, b)) {
      return d
    }
    for(d = d.parentNode;d && d !== c;d = d.parentNode) {
      if(Util.hasTagAndClass(d, a, b)) {
        return d
      }
    }
    return null
  };
  Util.findFirstByClass = function(d, a) {
    if(d) {
      if(Util.hasClass(d, a)) {
        return d
      }
      for(var b = 0, c = d.childNodes, f = c.length, j, k;b < f;b++) {
        if((j = c[b]) && (k = Util.findFirstByClass(j, a)) !== void 0) {
          return k
        }
      }
    }
    return null
  };
  Util.findFirstByTagAndClass = function(d, a, b) {
    if(d) {
      if(Util.hasTagAndClass(d, a, b)) {
        return d
      }
      for(var c = 0, d = d.childNodes, f = d.length, j;c < f;c++) {
        if(Util.isNotNull(d[c]) && (j = Util.findFirstByTagAndClass(d[c], a, b)) !== void 0) {
          return j
        }
      }
    }
    return null
  };
  Util.findByClass = function(d, a, b) {
    b = b || [];
    if(d) {
      Util.hasClass(d, a) && b.push(d);
      for(var c = 0, d = d.childNodes, f = d.length;c < f;c++) {
        Util.isNotNull(d[c]) && Util.findByClass(d[c], a, b)
      }
    }
    return b
  };
  Util.findByTagAndClass = function(d, a, b, c) {
    c = c || [];
    if(d) {
      Util.hasTagAndClass(d, a, b) && c.push(d);
      for(var f = 0, d = d.childNodes, j = d.length;f < j;f++) {
        Util.isNotNull(d[f]) && Util.findByTagAndClass(d[f], a, b, c)
      }
    }
    return c
  };
  Util.getHead = function() {
    return document.head ? document.head : document.getElementsByTagName("head")[0]
  };
  Util.appendTag = function(d, a) {
    return d.appendChild(document.createElement(a))
  };
  Util.appendHTML = function(d, a) {
    var b = document.createElement("div"), c, f = 0, j = [];
    b.innerHTML = a;
    for(c = b.childNodes.length;f < c;f++) {
      j.push(d.appendChild(b.firstChild))
    }
    return j
  };
  Util.createStyle = function(d) {
    d == null && (d = "");
    var a = document.createElement("style");
    a.type = "text/css";
    a.rel = "stylesheet";
    a.styleSheet ? a.styleSheet.cssText = d : a.appendChild(document.createTextNode(d));
    Util.getHead().appendChild(a);
    return a
  };
  Util.removeStyle = function(d) {
    d != null && d.parentNode != null && Util.getHead().removeChild(d)
  };
  Util.setStyle = function(d, a) {
    return d == null ? "" : d.styleSheet ? d.styleSheet.cssText = a : d.childNodes[0].nodeValue = a
  };
  Util.appendStyle = function(d, a) {
    return d == null ? "" : d.styleSheet ? d.styleSheet.cssText += a : d.childNodes[0].nodeValue += a
  };
  Util.getStyle = function(d) {
    return d == null ? "" : d.styleSheet ? d.styleSheet.cssText : d.childNodes[0].nodeValue
  };
  Util.appendScript = function(d) {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.text ? a.text = d : a.innerHTML = d;
    Util.getHead().appendChild(a);
    return a
  };
  Util.appendScriptFile = function(d) {
    document.write('<script type="text/javascript" src="' + d + '"><\/script>')
  };
  Util.outerHTML = function(d) {
    if(d.outerHTML === void 0) {
      var a = document.createElement("div");
      a.appendChild(d.cloneNode(!0));
      return a.innerHTML
    }
    return d.outerHTML
  };
  Util.index = function(d) {
    for(var a = 0;(d = d.previousSibling) != null;) {
      ++a
    }
    return a
  };
  Util.contains = function(d, a, b) {
    for(;a != null;) {
      if(a === d) {
        return!0
      }
      if(a === b) {
        break
      }
      a = a.parentNode
    }
    return!1
  };
  Util.areEqualArrays = function(d, a) {
    if(d == null || a == null) {
      return!1
    }
    if(d === a) {
      return!0
    }
    if(d.length !== a.length) {
      return!1
    }
    for(var b = 0, c = d.length;b < c;b++) {
      if(d.hasOwnProperty(b) && !a.hasOwnProperty(b) || a.hasOwnProperty(b) && !d.hasOwnProperty(b) || d[b] !== a[b]) {
        return!1
      }
    }
    return!0
  };
  Util.areEqualObjects = function(d, a) {
    if(d == null || a == null) {
      return!1
    }
    if(d === a) {
      return!0
    }
    if(typeof d !== "object" || typeof a !== "object") {
      return!1
    }
    for(var b in d) {
      if(d.hasOwnProperty(b) && (!a.hasOwnProperty(b) || d[b] !== a[b])) {
        return!1
      }
    }
    for(b in a) {
      if(a.hasOwnProperty(b) && (!d.hasOwnProperty(b) || d[b] !== a[b])) {
        return!1
      }
    }
    return!0
  };
  Util.areEqualComplex = function(d, a, b) {
    if(d == null || a == null) {
      return!1
    }
    if(d === a) {
      return!0
    }
    var c = b.length, f = b[0];
    if(c === 1) {
      return f === "array" ? Util.areEqualArrays(d, a) : Util.areEqualObjects(d, a)
    }
    if(c > 1) {
      b = b.slice(1);
      c = 0;
      if(f === "array") {
        if(d.length !== a.length) {
          return!1
        }
        for(f = d.length;c < f;c++) {
          if(!a.hasOwnProperty(c) || !Util.areEqualComplex(d[c], a[c], b)) {
            return!1
          }
        }
      }else {
        for(c in d) {
          if(d.hasOwnProperty(c) && (!a.hasOwnProperty(c) || !Util.areEqualComplex(d[c], a[c], b))) {
            return!1
          }
        }
        for(c in a) {
          if(a.hasOwnProperty(c) && (!d.hasOwnProperty(c) || !Util.areEqualComplex(d[c], a[c], b))) {
            return!1
          }
        }
      }
      return!0
    }
  };
  Util.typeCheck = function(d, a, b, c, f) {
    if(b && a === void 0 || c && a === null) {
      return!0
    }
    switch(typeof d) {
      case "string":
        if(typeof a === d) {
          return!0
        }
        break;
      case "function":
        if(a instanceof d) {
          return!0
        }
    }
    if(f) {
      return!1
    }
    throw new TypeError("object is not a " + d + ", but is a " + typeof a);
  };
  Util.sprint = function(d, a, b, c) {
    Util.typeCheck("string", d);
    Util.typeCheck("object", a);
    Util.typeCheck("string", b, !0);
    Util.typeCheck("string", c, !0);
    var f;
    b === void 0 && (b = "%");
    c === void 0 && (c = "%");
    for(f in a) {
      a.hasOwnProperty(f) && (d = d.replace(RegExp(b + f + c, "gm"), a[f]))
    }
    return d
  };
  Util.tagReplaces = {"&":"&amp;", "<":"&lt;", ">":"&gt;"};
  Util.replaceTag = function(d) {
    return Util.tagReplaces[d] || d
  };
  Util.escapeHtmlTags = function(d) {
    return d.replace(/[&<>]/g, Util.replaceTag)
  };
  Util.escapeRegExp = function(d) {
    return d.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
  };
  Util.strReplace = function(d, a) {
    var b, c = [];
    for(b in a) {
      a.hasOwnProperty(b) && c.push(Util.escapeRegExp(b))
    }
    return d.replace(RegExp("(" + c.join("|") + ")", "gm"), function(d) {
      return a[d]
    })
  };
  Util.calCheckSize = function() {
    var d = {}, a = document.createElement("div");
    document.body.appendChild(a);
    a.innerHTML = "<input type='checkbox' style='margin:0;padding:0;overflow:hidden'/>";
    d.checkboxW = a.childNodes[0].offsetWidth;
    d.checkboxH = a.childNodes[0].offsetHeight;
    a.innerHTML = "<input type='radio' style='margin:0;padding:0;overflow:hidden'/>";
    d.radioW = a.childNodes[0].offsetWidth;
    d.radioH = a.childNodes[0].offsetHeight;
    document.body.removeChild(a);
    return d
  };
  Util.which = function(d) {
    for(var a = {}, b = 0, c;b < d.length;b++) {
      if(c = d[b].toLowerCase(), c === "number") {
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
  Util.printEventPos = function(d) {
    Util.print("client: (" + d.clientX + ", " + d.clientY + "), layer: (" + d.layerX + ", " + d.layerY + "), offset: (" + d.offsetX + ", " + d.offsetY + "), page: (" + d.pageX + ", " + d.pageY + "), screen: (" + d.screenX + ", " + d.screenY + "), xy: (" + d.x + ", " + d.y + ")")
  };
  Util.print = function(d) {
    if(j) {
      if(arguments.length === 1) {
        j(arguments[0])
      }else {
        for(var a = 0, b = arguments.length;a < b;a++) {
          j(arguments[a])
        }
      }
    }
  };
  Util.open = function(d) {
    var a = {url:"about:blank", name:"_blank", channelmode:"no", directories:"yes", fullscreen:"no", height:void 0, left:void 0, location:"yes", menubar:"yes", resizable:"yes", scrollbars:"yes", status:"yes", titlebar:"yes", toolbar:"yes", top:void 0, width:void 0, replace:void 0}, b;
    if(Util.isNotNull(d)) {
      for(b in a) {
        a.hasOwnProperty(b) && (a[b] = d[b])
      }
    }
    d = Util.ifNull(a.height, "", "height=" + a.height + ", ") + Util.ifNull(a.left, "", "left=" + a.left + ", ") + Util.ifNull(a.top, "", "top=" + a.top + ", ") + Util.ifNull(a.width, "", "width=" + a.width + ", ") + "channelmode=" + a.channelmode + ", directories=" + a.directories + ", fullscreen=" + a.fullscreen + ", location=" + a.location + ", menubar=" + a.menubar + ", resizable=" + a.resizable + ", scrollbars=" + a.scrollbars + ", status=" + a.status + ", titlebar=" + a.titlebar + ", toolbar=" + 
    a.toolbar;
    return a.replace == null ? window.open(a.url, a.name, d) : window.open(a.url, a.name, d, a.replace)
  };
  Util.cloneObject = g;
  Util.extendObject = i;
  Util.extendOrClone = function(d, a) {
    return a ? d ? i(d, a) : g(a) : d
  };
  Util.lcfirst = function(d) {
    return d ? d.charAt(0).toLowerCase() + d.substring(1) : ""
  };
  Util.ucfirst = function(d) {
    return d ? d.charAt(0).toUpperCase() + d.substring(1) : ""
  };
  var k = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, s = {area:!0, base:!0, basefont:!0, br:!0, col:!0, command:!0, embed:!0, frame:!0, hr:!0, img:!0, input:!0, isindex:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, wbr:!0}, p = {hidden:!0, text:!0, search:!0, tel:!0, url:!0, email:!0, password:!0, date:!0, month:!0, week:!0, time:!0, datetime:!0, number:!0, range:!0, 
  color:!0, checkbox:!0, radio:!0, file:!0, submit:!0, image:!0, reset:!0, button:!0};
  Util.emptyElements = s;
  Util.element = h;
  Util.input = function(d, a, b) {
    if(p.hasOwnProperty(d)) {
      return a.type = d, h("input", a, null, b)
    }else {
      throw Error("invalid input type, " + d + "!");
    }
  };
  Util.attribute = e;
  Util.style = b;
  Util.escapeChar = a;
  Util.encode = f;
  var o = 1, n = 2;
  Util.SAFE = o;
  Util.LEAVE_OPENED = n
})();
window.console && window.console.log && window.console.log('reading javascript source "Tracer.js"...');
var Tracer = {};
(function() {
  function g() {
    this.stack = "";
    this.timers = {}
  }
  var i = goog.getObjectByName("jx.util");
  goog.exportSymbol("Tracer", g);
  var h = g.prototype;
  h.print = function(e, b, a) {
    e === void 0 && (e = "");
    b === void 0 && (b = "timer");
    a === void 0 && (a = !0);
    var f = this.timers[b], c = (new Date).getTime(), f = i.isNull(f) ? 0 : c - f;
    i.print((this.stack.length > 0 ? this.stack + " :: " : "") + e + ", Time elapsed since last update: " + f + "ms");
    a && (this.timers[b] = c)
  };
  h.addStack = function(e) {
    this.stack = this.stack + " > " + e
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
  function g(h) {
    var e = this.laps = [];
    this._stopped = !1;
    e.push(h || null, (new Date).getTime())
  }
  goog.exportSymbol("TimeWatch", g);
  var i = g.prototype;
  i.lap = function(h) {
    if(this._stopped) {
      throw Error("TimeWatch was stopped, thus cannot lap. Please reset!");
    }
    this.laps.push(h || null, (new Date).getTime())
  };
  i.stop = function(h) {
    this._stopped = !0;
    this.laps.push(h || null, (new Date).getTime())
  };
  i.reset = function(h) {
    var e = this.laps;
    e.length = 0;
    this._stopped = !1;
    e.push(h || null, (new Date).getTime())
  };
  i.toString = function() {
    var h = this.laps, e = h.length, b = 2, a = e - (this._stopped ? 2 : 0), f = h[0], c = h[1], d = c, e = e > 2 ? [] : null, j = 0, k = "TimeWatch\n";
    for(k += "start" + (f ? ": " + f : "") + " @" + c + "\n";b < a;b += 2) {
      f = (f = h[b]) ? ": " + f : "", c = h[b + 1], e.push(d = c - d), j += d, k += "lap " + b / 2 + f + " @" + c + " +" + d + "ms\n", d = c
    }
    a >= 2 && this._stopped && (f = (f = h[a]) ? ": " + f : "", c = h[a + 1], e.push(d = c - d), j += d, k += "stop" + f + " @" + c + " +" + d + "ms\n");
    if(e) {
      var h = e.length, s = j / h, g = 0;
      k += "total number of laps: " + h + "\n";
      k += "total elapsed time: " + j + "ms\n";
      k += "average lap time: " + s.toFixed(2) + "ms\n";
      e.forEach(function(d) {
        g += (d - s) * (d - s)
      });
      g = Math.sqrt(g / h);
      k += "standard deviation: " + g.toFixed(2) + "ms\n"
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
  Util$.is$ = function(g) {
    return g instanceof jQuery ? !0 : !1
  };
  Util$.safe$ = function(g) {
    return g instanceof jQuery ? g : $(g)
  };
  Util$.unbindRemove = function(g) {
    g.unbind().remove()
  };
  jQuery.fn.getBoundingRect = function() {
    var g = this.offset();
    return{left:g.left, top:g.top, width:this.outerWidth(), height:this.outerHeight()}
  };
  jQuery.fn.containsEvent = function(g) {
    if(this.length === 0) {
      return!1
    }
    var i, h, e, b;
    if(this.length <= 1) {
      return i = this.getBoundingRect(), e = g.pageX, b = g.pageY, e >= i.left && e <= i.left + i.width && b >= i.top && b <= i.top + i.height
    }
    h = !1;
    this.each(function() {
      i = $(this).getBoundingRect();
      e = g.pageX;
      b = g.pageY;
      if(e >= i.left && e <= i.left + i.width && b >= i.top && b <= i.top + i.height) {
        return h = !0, !1
      }
    });
    return h
  };
  Util$.baseurlOfHeadScript = function(g) {
    var i = $(document.getElementsByTagName("head")[0]).find("script[src$='" + g + "']").attr("src");
    return i.substring(0, i.indexOf(g))
  };
  Util$.calScrollbarDims = function(g) {
    if(Util.isNotNull(window._SCROLLBAR)) {
      return window._SCROLLBAR
    }
    if(Util.isNotNull(window.opener) && Util.isNotNull(window.opener._SCROLLBAR)) {
      return window.opener._SCROLLBAR
    }
    var g = Util$.safe$(g), i;
    g[0].innerHTML = "<div id='scrollbardim' style='position:absolute;top:-10000px;left:-10000px;width:100px;height:100px;overflow:scroll;'></div>";
    i = $(document.getElementById("scrollbardim"));
    i = {w:i.width() - i[0].clientWidth, h:i.height() - i[0].clientHeight};
    g[0].innerHTML = "";
    return window._SCROLLBAR = i
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "bootstrap.js"...');
jx.grid = {};
var JGM = {};
(function() {
  var g = goog.getObjectByName("jx.util"), i = goog.getObjectByName("jx.util$");
  goog.exportSymbol("JGM", JGM);
  goog.exportSymbol("jx.grid", JGM);
  JGM.version = "2.0.0";
  JGM._map = {ArrayExtIE:{cacheModule:!1}, Cache:{cacheModule:!0}, Cell:{cacheModule:!1}, CheckManager:{cacheModule:!0}, ColumnManager:{cacheModule:!0}, ColumnGroup:{cacheModule:!0}, ColumnHeader:{cacheModule:!0}, Collapser:{cacheModule:!0}, DataManager:{cacheModule:!0}, DataCreator:{cacheModule:!0}, EditManager:{cacheModule:!0}, Editor:{cacheModule:!0}, EngineExt:{cacheModule:!1}, EventManager:{cacheModule:!0}, Footer:{cacheModule:!0}, HeaderTree:{cacheModule:!0}, Grid:{cacheModule:!0}, GridManager:{cacheModule:!1}, 
  MenuBar:{cacheModule:!0}, ViewportManager:{cacheModule:!0}, SelectionManager:{cacheModule:!0}, SearchManager:{cacheModule:!0}, TooltipManager:{cacheModule:!0}, Tracer:{cacheModule:!1}, Tree:{cacheModule:!0}, TreeNode:{cacheModule:!1}, Util:{cacheModule:!1}, Util$:{cacheModule:!1}};
  JGM.create = function(h, e) {
    e == null && (e = {});
    if(!JGM.hasOwnProperty(h)) {
      throw Error("cannot find a grid module: name=" + h);
    }
    if(JGM._map.hasOwnProperty(h)) {
      if(JGM._map[h].cacheModule) {
        var b = e.mid = "JGM" + JGM.m.length++, a = new JGM[h](e);
        JGM.m.hasOwnProperty(h) || (JGM.m[h] = {});
        JGM.m[h][b] = a;
        if(h === "Grid") {
          if(a.name == null) {
            a.name = JGM.grids.length
          }
          JGM.gridMap[a.name] = a;
          JGM.grids.push(a)
        }
        return a
      }else {
        return new JGM[h](e)
      }
    }else {
      return new JGM[h](e)
    }
  };
  JGM._destroy = function(h, e) {
    var b, a, f, c;
    for(a in e) {
      if(e.hasOwnProperty(a)) {
        switch(a) {
          case "map":
            b = e[a];
            if(g.isString(b)) {
              b = g.split(b);
              c = b.length;
              for(f = 0;f < c;f++) {
                JGM._deleteMap(h, b[f])
              }
            }else {
              if(b instanceof Array) {
                c = b.length;
                for(f = 0;f < c;f++) {
                  g.emptyObject(b[f])
                }
              }else {
                g.emptyObject(b)
              }
            }
            break;
          case "array":
            b = e[a];
            if(g.isString(b)) {
              b = g.split(b);
              c = b.length;
              for(f = 0;f < c;f++) {
                JGM._deleteArray(h, b[f])
              }
            }else {
              b.length = 0
            }
            break;
          case "$":
            b = e[a];
            if(g.isString(b)) {
              b = g.split(b);
              c = b.length;
              for(f = 0;f < c;f++) {
                JGM._delete$(h, b[f])
              }
            }else {
              if(b instanceof Array) {
                c = b.length;
                for(f = 0;f < c;f++) {
                  i.unbindRemove(b[f])
                }
              }else {
                i.unbindRemove(b)
              }
            }
            break;
          case "style":
            b = e[a];
            if(g.isString(b)) {
              b = g.split(b);
              c = b.length;
              for(f = 0;f < c;f++) {
                JGM._deleteStyle(h, b[f])
              }
            }else {
              if(b instanceof Array) {
                c = b.length;
                for(f = 0;f < c;f++) {
                  g.removeStyle(b[f])
                }
              }else {
                g.removeStyle(b)
              }
            }
            break;
          case "property":
            b = e[a];
            if(g.isString(b)) {
              b = g.split(b);
              c = b.length;
              for(f = 0;f < c;f++) {
                delete h[b[f]]
              }
            }else {
              if(b instanceof Array) {
                c = b.length;
                for(f = 0;f < c;f++) {
                  delete h[b[f]]
                }
              }
            }
            break;
          case "module":
            b = e[a];
            if(g.isString(b)) {
              b = g.split(b);
              c = b.length;
              for(f = 0;f < c;f++) {
                JGM._deleteModule(h, b[f])
              }
            }else {
              if(b instanceof Array) {
                c = b.length;
                for(f = 0;f < c;f++) {
                  b[f].destroy()
                }
              }else {
                b.destroy()
              }
            }
            break;
          case "name":
            h.hasOwnProperty("mid") && (JGM._remove(e[a], h.mid), delete h.mid);
            break;
          case "path":
            h.hasOwnProperty("grid") && h.grid.hasOwnProperty(e[a]) && (delete h.grid[e[a]], delete h.grid)
        }
      }
    }
    g.emptyObject(h)
  };
  JGM._deleteMap = function(h, e) {
    h.hasOwnProperty(e) && (g.emptyObject(h[e]), delete h[e])
  };
  JGM._deleteArray = function(h, e) {
    if(h.hasOwnProperty(e)) {
      h[e].length = 0, delete h[e]
    }
  };
  JGM._delete$ = function(h, e) {
    h.hasOwnProperty(e) && (i.unbindRemove(h[e]), delete h[e])
  };
  JGM._deleteStyle = function(h, e) {
    h.hasOwnProperty(e) && (g.removeStyle(h[e]), delete h[e])
  };
  JGM._deleteModule = function(h, e) {
    h.hasOwnProperty(e) && (h[e].destroy(), delete h[e])
  };
  JGM._remove = function(h, e) {
    delete JGM.m[h][e]
  };
  JGM.grid = function(h) {
    return JGM.create("Grid", h)
  };
  JGM.gridMap = {};
  JGM.getGrid = function(h) {
    if(JGM.gridMap.hasOwnProperty(h)) {
      return JGM.gridMap[h]
    }
  };
  JGM.grids = [];
  JGM._add = function(h, e) {
    JGM[h] = e
  };
  JGM._extend = function(h, e) {
    var b = g.ifNull(e, {});
    $.extend(!0, h, b);
    $.extend(!0, b, h);
    return b
  };
  JGM.m = {length:0};
  JGM._CONST = {_cssUnselectable:"-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none;", _checkboxWidth:void 0, _checkboxHeight:void 0, _radioWidth:void 0, _radioHeight:void 0};
  JGM._globalEventsBound = !1;
  JGM._globalEvents = {_mousemove:function(h) {
    var e, b = JGM.m.Grid;
    for(e in b) {
      b.hasOwnProperty(e) && b[e]._mousemove(h)
    }
  }, _mouseup:function(h) {
    var e, b = JGM.m.Grid;
    for(e in b) {
      b.hasOwnProperty(e) && b[e]._mouseup(h)
    }
  }, _resize:function(h) {
    var e, b = JGM.m.Grid;
    for(e in b) {
      b.hasOwnProperty(e) && b[e]._resize(h)
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
  JGM.chart = function(h, e, b, a, f) {
    var c, e = e.toLowerCase();
    switch(e) {
      case "area":
        e = "corechart";
        c = "AreaChart";
        break;
      case "bar":
        e = "corechart";
        c = "BarChart";
        break;
      case "candle":
        e = "corechart";
        c = "CandlestickChart";
        break;
      case "column":
        e = "corechart";
        c = "ColumnChart";
        break;
      case "combo":
        e = "corechart";
        c = "ComboChart";
        break;
      case "gauge":
        e = "gauge";
        c = "Gauge";
        break;
      case "geo":
        e = "geochart";
        c = "GeoChart";
        break;
      case "line":
        e = "corechart";
        c = "LineChart";
        break;
      case "pie":
        e = "corechart";
        c = "PieChart";
        break;
      case "scatter":
        e = "corechart";
        c = "ScatterChart";
        break;
      case "table":
        e = "table";
        c = "Table";
        break;
      case "treemap":
        e = "treemap";
        c = "TreeMap";
        break;
      default:
        throw Error("unknown chart type: " + e);
    }
    google.load("visualization", "1", {packages:[e]});
    var d = JGM.exportToArray(f, b.map(function(d) {
      return d.key
    }));
    google.setOnLoadCallback(function() {
      for(var f = new google.visualization.DataTable, k = 0, e = b.length, g, i;k < e;k++) {
        g = b[k];
        i = g.type;
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
        f.addColumn(i || typeof d[0][k] || k === 0 && "string" || "number", g.name)
      }
      f.addRows(d);
      (new google.visualization[c](document.getElementById(h))).draw(f, a)
    })
  };
  JGM.exportToArray = function(h, e) {
    for(var b, a = [], f, c, d = 0, j = h.length, k, s = e.length;d < j;d++) {
      f = h[d];
      k = 0;
      for(b = [];k < s;k++) {
        c = e[k], b.push(c in f ? f[c] : null)
      }
      a.push(b)
    }
    return a
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "renderer.js"...');
jx.grid.renderer = {};
(function() {
  var g = goog.getObjectByName("jx.grid");
  goog.getObjectByName("jx.util");
  g = g.renderer = {};
  goog.exportSymbol("jx.grid.renderer", g);
  g.selectBox = function(g) {
    var h = g.mapping, e = g.attr, b = g["default"], a = g.style, f = g.callback, c, d, j, k = 0, s = [], p = [], o = "<select";
    if(e) {
      for(j in e) {
        e.hasOwnProperty(j) && (o += " " + j + '="' + e[j] + '"')
      }
    }
    if(a) {
      o += ' style="';
      for(j in a) {
        a.hasOwnProperty(j) && (o += j + ":" + a[j] + ";")
      }
      o += '"'
    }
    o += ">";
    for(c in h) {
      h.hasOwnProperty(c) && (g = h[c], s.push(c), p.push(g), b == g && (d = k), k++)
    }
    return function(a) {
      var b, c, j = o;
      for(c = 0;c < k;c++) {
        if(a == p[c]) {
          b = c;
          break
        }
      }
      b === void 0 && (b = d);
      for(c = 0;c < k;c++) {
        j += '<option value="' + p[c] + '"', c === b && (j += ' selected="selected"'), j += ">" + s[c] + "</option>"
      }
      j += "</select>";
      f && (b = [], b.push(j), Array.prototype.push.apply(b, arguments), j = f.apply(this, b));
      return j
    }
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "Disposable.js"...');
jx.lang = {};
jx.lang.Disposable = {};
(function() {
  function g() {
  }
  function i(a, b, d) {
    if(typeof a != "object") {
      return!1
    }
    var j, k, e;
    if(b) {
      for(var d = 0, h = b.length;d < h;d++) {
        if(j = b[d], this.hasOwnProperty(j)) {
          if(a.hasOwnProperty(j)) {
            if(k = this[j], e = a[j], k !== a && !(k === k || e === e)) {
              return!1
            }
          }else {
            return!1
          }
        }else {
          if(a.hasOwnProperty(j)) {
            return!1
          }
        }
      }
    }else {
      if(d) {
        for(j in this) {
          if(this.hasOwnProperty(j)) {
            if(!a.hasOwnProperty(j)) {
              return!1
            }
            k = this[j];
            e = a[j];
            if(k !== e) {
              if(k) {
                if(typeof k != "object" || typeof e != "object") {
                  return!1
                }
                if(k.equals) {
                  if(!k.equals(e, null, d - 1)) {
                    return!1
                  }
                }else {
                  if(e.equals && !e.equals(k, null, d - 1)) {
                    return!1
                  }
                }
                if(!i.call(k, e, null, d - 1)) {
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
        for(j in this) {
          if(this.hasOwnProperty(j)) {
            if(a.hasOwnProperty(j)) {
              if(k = this[j], e = a[j], k !== a && !(k === k || e === e)) {
                return!1
              }
            }else {
              return!1
            }
          }
        }
      }
      for(j in a) {
        if(a.hasOwnProperty(j) && !this.hasOwnProperty(j)) {
          return!1
        }
      }
    }
    return!0
  }
  function h(b, c) {
    if(this != goog.global) {
      var d, j;
      if(b) {
        for(d in this) {
          if(this.hasOwnProperty(d)) {
            if((j = this[d]) && typeof j == "object") {
              if(j.dispose) {
                j.dispose(b - 1, c)
              }else {
                if(c) {
                  if(a(j)) {
                    j.length = 0
                  }
                  h.call(j, b - 1, c)
                }
              }
            }
            delete this[d]
          }
        }
      }else {
        for(d in this) {
          this.hasOwnProperty(d) && delete this[d]
        }
      }
    }
  }
  var e = goog.getObjectByName("jx.util");
  goog.exportSymbol("jx.lang.Disposable", g);
  goog.exportProperty(g.prototype, "dispose", h);
  var b = g.prototype, a = e.isArray;
  e.equals = Object.equals = function(a, b, d, j) {
    return typeof a == "object" ? i.call(a, b, d, j) : a !== a && b !== b
  };
  e.dispose = Object.dispose = function(a, b, d) {
    if(typeof a == "object") {
      return h.call(a, b, d)
    }
  };
  b.equals = i;
  b.dispose = h
})();
window.console && window.console.log && window.console.log('reading javascript source "Cell.js"...');
jx.grid.Cell = {};
(function() {
  function g(a) {
    this.grid = a.grid;
    this._datarow = a.datarow;
    this._colDef = a.colDef;
    this.__init(a)
  }
  goog.getObjectByName("jx.grid");
  var i = goog.getObjectByName("jx.util"), h = goog.getObjectByName("jx.lang.Disposable");
  goog.exportSymbol("jx.grid.Cell", g);
  goog.inherits(g, h);
  g.getInstance = function(a) {
    return new g(a)
  };
  var e = g.prototype, b = h.prototype.dispose;
  e.dispose = function() {
    b.call(this)
  };
  e.__init = function(a) {
    if(i.isNull(this._datarow)) {
      if(i.isNotNull(a.row)) {
        this._datarow = this.grid.dataMgr.getByIdx(a.row)
      }else {
        if(i.isNotNull(a.node)) {
          this._datarow = this.grid.dataMgr.getByNode(a.node.parentNode)
        }else {
          if(i.isNotNull(a.$)) {
            this._datarow = this.grid.dataMgr.getByNode(a.$[0].parentNode)
          }
        }
      }
    }
    if(i.isNull(this._colDef)) {
      if(i.isNotNull(a.col)) {
        this._colDef = this.grid.colDefMgr.get(a.col)
      }else {
        if(i.isNotNull(a.node)) {
          this._colDef = this.grid.colDefMgr.get(i.index(a.node))
        }else {
          if(i.isNotNull(a.$)) {
            this._colDef = this.grid.colDefMgr.get(i.index(a.$[0]))
          }
        }
      }
    }
    if(i.isNullOr(this._datarow, this._colDef) && i.isNotNull(a.event) && (a = this.grid.view._getClosestCell(a.event.target), i.isNotNull(a))) {
      this._datarow = this.grid.dataMgr.getByNode(a.parentNode), this._colDef = this.grid.colDefMgr.get(i.index(a))
    }
  };
  e.destroy = function() {
    this.dispose()
  };
  e.getRowIdx = function() {
    if(i.isNotNull(this._datarow)) {
      return this.grid.dataMgr.getIdx(this._datarow)
    }
  };
  e.getColIdx = function() {
    if(i.isNotNull(this._colDef)) {
      return this.grid.colDefMgr.getIdx(this._colDef)
    }
  };
  e.getNode = function() {
    if(i.isNotNullAnd(this._datarow, this._colDef)) {
      return this.grid.view.getCellByIdAndKey(this.grid.dataMgr.getId(this._datarow), this._colDef.key)
    }
  };
  e.getRowNode = function() {
    return this.grid.view.getRow(this._datarow)
  };
  e.get$ = function() {
    var a = this.getNode();
    return a !== void 0 ? $(a) : $([])
  };
  e.getDatarow = function() {
    return this._datarow
  };
  e.getColDef = function() {
    return this._colDef
  };
  e.getKey = function() {
    if(i.isNotNull(this._colDef)) {
      return this._colDef.key
    }
  };
  e.getId = function() {
    return this.grid.dataMgr.getId(this._datarow)
  };
  e.getValue = function() {
    if(i.isNotNullAnd(this._datarow, this._colDef)) {
      return this._datarow[this._colDef.key]
    }
  };
  e.isValid = function() {
    return i.isNotNull(this.getNode())
  };
  e.isInvalid = function() {
    return i.isNull(this.getNode())
  };
  e.isEmpty$ = function() {
    return this.get$().length === 0
  };
  e.has$ = function() {
    return this.get$().length !== 0
  };
  e.equals = function(a) {
    return a && this._datarow && this._datarow === a._datarow && this._colDef && this._colDef === a.__colDef
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "EventDispatcher.js"...');
jx.events = {};
jx.events.EventDispatcher = {};
(function() {
  function g() {
  }
  goog.getObjectByName("jx.grid");
  goog.getObjectByName("jx.util");
  var i = goog.getObjectByName("jx.lang.Disposable");
  goog.exportSymbol("jx.events.EventDispatcher", g);
  goog.inherits(g, i);
  var h = g.prototype, e = i.prototype.dispose;
  h.dispose = function() {
    e.call(this._handlers, -1, !0);
    e.call(this)
  };
  h.addEventListener = function(b, a) {
    if(!b) {
      throw Error("Invalid event type: " + b);
    }
    if(typeof a != "function") {
      throw Error("Event listener must be a function");
    }
    if(!this._handlers) {
      this._handlers = {}
    }
    var f = this._handlers, b = (b + "").toLowerCase();
    f.hasOwnProperty(b) || (f[b] = []);
    f = f[b];
    f.indexOf(a) === -1 && f.push(a)
  };
  h.removeEventListener = function(b, a) {
    if(this._handlers) {
      var b = (b + "").toLowerCase(), f = this._handlers;
      if(f.hasOwnProperty(b)) {
        for(var c = f[b], d = -1;(d = c.indexOf(a, d + 1)) !== -1;) {
          c.splice(d--, 1)
        }
        c.length === 0 && delete f[b]
      }
    }
  };
  h.dispatchEvent = function(b) {
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
    var a = this._handlers, f = (b.type + "").toLowerCase();
    b.target = this;
    if(a.hasOwnProperty(f)) {
      for(var a = a[f].slice(), f = 0, c = a.length, d;f < c && !b.stopPropagation;f++) {
        d = a[f], d.handleEvent ? d.handleEvent(b) : d.call(this, b)
      }
    }
    if(b.cancelable && b.defaultPrevented) {
      return!1
    }
    b.defaultAction && b.defaultAction(this);
    return!0
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "Column.js"...');
jx.grid.Column = {};
(function() {
  function g(h) {
    if(!(h.manager && typeof h.manager == "object")) {
      throw Error("Column needs a valid manager!");
    }
    this.manager = h.manager;
    this.key = h.key + "";
    if(!this.key) {
      throw Error("Column needs a non-empty key!");
    }
    var e = "column key=" + this.key;
    if(this.manager.hasKey(this.key)) {
      throw Error("Duplicate column key!" + e);
    }
    this.name = h.name ? h.name + "" : "";
    this.title = h.title ? h.title + "" : "";
    this.noName = !!h.noName;
    this.noTitle = !!h.noTitle;
    this.type = h.type + "" || null;
    this.defaultValue = h.defaultValue;
    this.inputOnCreate = !!h.inputOnCreate;
    this.width = (this.width = Number(h.width)) || 90;
    this.minW = (this.minW = Number(h.minW)) || 30;
    this.maxW = Number(h.maxW) || null;
    this.resizable = !!h.resizable;
    this.hidden = !!h.hidden;
    this.noSearch = !!h.noSearch;
    this.tooltipEnabled = !!h.tooltipEnabled;
    this.colClass = h.colClass + "" || null;
    this.style = h.style + "" || null;
    this.headerStyle = h.headerStyle + "" || null;
    if(h.parser && typeof h.parser != "function") {
      throw Error("Invalid parser!" + e);
    }
    this.parser = h.parser || null;
    if(h.validator && typeof h.validator != "function") {
      throw Error("Invalid validator!" + e);
    }
    this.validator = h.validator || null;
    if(h.renderer && typeof h.renderer != "function") {
      throw Error("Invalid renderer!" + e);
    }
    this.renderer = h.renderer || null;
    if(h.sumRenderer && typeof h.sumRenderer != "function") {
      throw Error("Invalid sum renderer!" + e);
    }
    this.sumRenderer = h.sumRenderer || null;
    if(h.editor && typeof h.editor != "object") {
      throw Error("Invalid editor!" + e);
    }
    this.editor = h.editor || null;
    this.sorter = h.sorter || null;
    this.filter = h.filter || null
  }
  var i = goog.getObjectByName("jx.events.EventDispatcher");
  goog.exportSymbol("jx.grid.Column", g);
  goog.inherits(g, i);
  i = g.prototype;
  i.show = function() {
    return this.hidden ? (this.hidden = !1, this.dispatchEvent({type:"hidden", value:!1}), !0) : !1
  };
  i.hide = function() {
    return!this.hidden ? (this.hidden = !0, this.dispatchEvent({type:"hidden", value:!0}), !0) : !1
  };
  i.setHidden = function(h) {
    return h ? this.hide() : this.show()
  };
  i.setWidth = function(h) {
    return(h = Number(h)) && this.width !== h ? (this.width = h, this.dispatchEvent({type:"width", value:h}), h) : !1
  };
  i.setRenderer = function(h) {
    if(this.renderer !== h) {
      if(h && typeof h != "function") {
        throw Error("Invalid renderer!column key=" + this.key);
      }
      this.renderer = h || null;
      this.dispatchEvent({type:"renderer", value:h})
    }
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "BaseModule.js"...');
jx.grid.BaseModule = {};
(function() {
  function g(e) {
    if(e) {
      if(e.mid != null) {
        this.mid = e.mid
      }
      if(e.grid) {
        this.grid = e.grid
      }
    }
    this._view = this._evtmgr = this._colmgr = this._datamgr = null;
    var b = this._defaultOptions && this._defaultOptions(e.grid), a = e && e.options;
    if(a || b) {
      b || (b = {}), a && $.extend(!0, b, a), this._options = b, this.dispatchEvent({type:"afteroption", options:b})
    }
    this._init && (this.dispatchEvent({type:"beforeinit"}), this._init(e), this.dispatchEvent({type:"afterinit"}));
    var f = this, c = this.grid;
    c && ["Dispose", "CreateCss", "CreateDynamicCss", "Render", "Keydown", "Keyup", "Keypress", "Mousein", "Mouseout", "Mouseenter", "Mouseleave", "Mousemove", "Mouseover", "Mousedown", "Mouseup", "Click", "Dblclick", "Resize", "ResizeWidth", "ResizeHeight", "Scroll", "ScrollH", "ScrollV"].forEach(function(d) {
      var a = "before" + d, d = "after" + d, b = "_" + a, e = "_" + d;
      f[b] && c.addEventListener(a, function(d) {
        return f[b](d)
      });
      f[e] && c.addEventListener(d, function(d) {
        return f[e](d)
      })
    });
    this._bindEvents && (this.dispatchEvent({type:"beforebindevents"}), this._bindEvents(e), this.dispatchEvent({type:"afterbindevents"}));
    this.dispatchEvent({type:"complete"})
  }
  var i = goog.getObjectByName("jx.events.EventDispatcher");
  goog.exportSymbol("jx.grid.BaseModule", g);
  goog.inherits(g, i);
  var i = g.prototype, h = i.dispose;
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
    var e = this.getEventMgr();
    return e.bind.apply(e, arguments)
  };
  i.triggerGridEvent = function() {
    var e = this.getEventMgr();
    return e.trigger.apply(e, arguments)
  };
  i.toCssStyle = function(e, b, a) {
    var f = [];
    a || (e = "#" + this.grid.mid + " " + e);
    if(typeof b != "string") {
      var c, a = "";
      b.hasOwnProperty("_prepend") && (b._prepend && f.push(b._prepend), delete b._prepend);
      b.hasOwnProperty("_append") && (b._append && (a = ";" + b._append), delete b._append);
      for(c in b) {
        f.push(c + ":" + b[c])
      }
      f = f.join(";") + a
    }
    return e + "{" + f + "}"
  };
  i.toCssStyles = function(e, b, a) {
    var e = e || [], f;
    for(f in b) {
      e.push(this.toCssStyle(f, b[f], a))
    }
    return e
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "DataManager.js"...');
jx.data = {};
jx.data.DataManager = {};
(function() {
  function g(b) {
    this.mid = b.mid;
    this.grid = b.grid;
    this.grid.dataMgr = this;
    this.all = [];
    this.datalist = [];
    this.failed = [];
    this._options = i._extend({idKey:void 0, idColKeys:[], uniqueKeys:[]}, b.options);
    this._consts = {_auto:0, _given:1, _composite:2, _notReal:this.mid + "@NR" + h.random(1E4), _add:0, _addList:1, _update:2, _updateList:3, _remove:4, _removeList:5, unknown:0, number:1, string:2, "boolean":3, date:4, "enum":5};
    this._options.idKey != null ? (this._idMode = this._consts._given, this.idKey = this._options.idKey) : (this._idMode = this._options.idColKeys.length !== 0 ? this._consts._composite : this._consts._auto, this.idKey = "J@I" + this.mid + "@" + h.random(1E4));
    this._increment = 1;
    this._idToIdx = {};
    this._idToData = {};
    this._filters = [];
    this._history = [];
    this._redoHistory = [];
    this.uniqueMap = !1;
    this.__init(b)
  }
  var i = goog.getObjectByName("jx.grid"), h = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.data.DataManager", g);
  i._add("DataManager", g);
  g.getInstance = function(b) {
    return new g(b)
  };
  var e = g.prototype;
  e.__init = function(b) {
    var a = this.uniqueMap = {}, f = 0, c, d = this._options.uniqueKeys, j = !1;
    if(d && d.length) {
      j = !0;
      for(c = d.length;f < c;f++) {
        a[d[f]] = {}
      }
    }
    var d = this.grid.colDefMgr.getAll(), k, f = 0;
    for(c = d.length;f < c;f++) {
      k = d[f], k.unique && (j = !0, a[k.key] = {})
    }
    if(!j) {
      this.uniqueMap = !1
    }
    this.bindEvents();
    this.set(b.datalist)
  };
  e.bindEvents = function() {
    this.grid.event.bind({onDestroy:this._destroy, keydownCanvas:this._keydownCanvas}, this)
  };
  e._destroy = function() {
    this.cleanList(this.all);
    i._destroy(this, {name:"DataManager", path:"dataMgr", property:"all _idMode _increment idKey _sorter", map:"_consts _idToIdx _idToData _options", array:"datalist failed _history _redoHistory _filters"})
  };
  e.addUniqueIndex = function(b, a, f) {
    if(!f.hasOwnProperty(a)) {
      return this.grid.error("KEY_UNDEFINED", a)
    }
    var c = f[a];
    if(c == null || c === "") {
      return this.grid.error("BAD_NULL", a)
    }
    if(b.hasOwnProperty(c)) {
      return b[c] === f ? !1 : this.grid.error("DUP_ENTRY", c, a)
    }
    b[c] = f;
    return!0
  };
  e.addUniqueIndices = function(b, a, f) {
    var c, d = f.length, j = [], k, e;
    for(c = 0;c < d;c++) {
      if(e = f[c]) {
        if(k = this.addUniqueIndex(b, a, e)) {
          if(k instanceof Error) {
            return this.removeUniqueIndices(b, a, j), k
          }
          j.push(b[e[a]] = e)
        }
      }
    }
    return j.length > 0
  };
  e.updateUniqueIndex = function(b, a, f, c, d) {
    if(c.hasOwnProperty(a)) {
      if(!d.hasOwnProperty(a) || !f.hasOwnProperty(a)) {
        return this.grid.error("KEY_UNDEFINED", a)
      }
      if(!b.hasOwnProperty(d = d[a])) {
        return this.grid.error("KEY_NOT_FOUND", d, a)
      }
      c = c[a];
      if(c == null || c === "") {
        return this.grid.error("BAD_NULL", a)
      }
      if(b.hasOwnProperty(c)) {
        return b[c] === f ? !1 : this.grid.error("DUP_ENTRY", c, a)
      }
      b[c] = f;
      delete b[d];
      return d
    }
    return!1
  };
  e.updateUniqueIndices = function(b, a, f, c, d, j) {
    if(j !== !0) {
      if(h.isEmptyObj(b) || h.isEmptyString(a) || h.isEmptyArray(f) || h.isEmptyArray(c) || h.isEmptyArray(d)) {
        return!1
      }
      if(f.length !== c.length || f.length !== d.length) {
        return this.grid.error("LENGTH_NOT_EQUAL")
      }
    }
    for(var j = 0, k = f.length, e, g, i, n = [], m = [], l = [], q, r;j < k;j++) {
      if(!h.isNull(e = f[j])) {
        if((i = c[j]).hasOwnProperty(a)) {
          g = d[j];
          if(!g.hasOwnProperty(a) || !e.hasOwnProperty(a)) {
            return this.updateUniqueIndices(b, a, n, l, m), this.grid.error("KEY_UNDEFINED", a)
          }
          if(!b.hasOwnProperty(r = g[a])) {
            return this.updateUniqueIndices(b, a, n, l, m), this.grid.error("KEY_NOT_FOUND", r, a)
          }
          if(h.isEmptyString(q = i[a])) {
            return this.updateUniqueIndices(b, a, n, l, m), this.grid.error("BAD_NULL", a)
          }
          if(b.hasOwnProperty(q)) {
            if(b[q] === e) {
              continue
            }
            this.updateUniqueIndices(b, a, n, l, m);
            return this.grid.error("DUP_ENTRY", q, a)
          }
          b[q] = e;
          delete b[r];
          n.push(e);
          m.push(i);
          l.push(g)
        }
      }
    }
    return!n.length ? !1 : {datalist:n, changes:m, befores:l}
  };
  e.removeUniqueIndex = function(b, a, f) {
    var c;
    f.hasOwnProperty(a) && b.hasOwnProperty(c = f[a]) && delete b[c]
  };
  e.removeUniqueIndices = function(b, a, f, c) {
    if(!(c !== !0 && (h.isEmptyObj(b) || h.isEmptyString(a) || h.isEmptyArray(f)))) {
      for(var d = f.length, j, k, c = 0;c < d;c++) {
        k = f[c], k.hasOwnProperty(a) && b.hasOwnProperty(j = k[a]) && delete b[j]
      }
    }
  };
  e.addToUniqueMap = function(b) {
    if(this.uniqueMap) {
      var a = [], f, c = this.uniqueMap, d;
      for(f in c) {
        if(c.hasOwnProperty(f) && (d = this.addUniqueIndex(c[f], f, b))) {
          if(d instanceof Error) {
            f = 0;
            for(var j = a.length;f < j;f++) {
              this.removeUniqueIndex(c[a[f]], a[f], b)
            }
            return d
          }
          a.push(f)
        }
      }
      return a.length > 0
    }
    return!1
  };
  e.addListToUniqueMap = function(b) {
    if(this.uniqueMap) {
      var a = this.uniqueMap, f = [], c, d;
      for(c in a) {
        if(a.hasOwnProperty(c) && (d = this.addUniqueIndices(a[c], c, b))) {
          if(d instanceof Error) {
            c = 0;
            for(var j = f.length;c < j;c++) {
              this.removeUniqueIndices(a[f[c]], f[c], b)
            }
            return d
          }
          f.push(c)
        }
      }
      return f.length > 0
    }
    return!1
  };
  e.updateUniqueMap = function(b, a, f) {
    if(this.uniqueMap) {
      var c, d = this.uniqueMap, j = [], k;
      for(c in d) {
        if(d.hasOwnProperty(c) && (k = this.updateUniqueIndex(d[c], c, b, a, f))) {
          if(k instanceof Error) {
            c = 0;
            for(var e = j.length;c < e;c++) {
              this.updateUniqueIndex(d[j[c]], j[c], b, f, a)
            }
            return k
          }
          j.push(c)
        }
      }
      return j.length > 0
    }
    return!1
  };
  e.updateListUniqueMap = function(b, a, f) {
    if(this.uniqueMap) {
      var c, d = this.uniqueMap, j = [], k;
      for(c in d) {
        if(d.hasOwnProperty(c) && (k = this.updateUniqueIndices(d[c], c, b, a, f))) {
          if(k instanceof Error) {
            c = 0;
            for(var e = j.length;c < e;c++) {
              this.updateUniqueIndices(d[j[c]], j[c], b, f, a)
            }
            return k
          }
          j.push(c)
        }
      }
      return j.length > 0
    }
    return!1
  };
  e.removeFromUniqueMap = function(b) {
    if(this.uniqueMap) {
      var a, f = this.uniqueMap;
      for(a in f) {
        f.hasOwnProperty(a) && this.removeUniqueIndex(f[a], a, b)
      }
    }
  };
  e.removeListFromUniqueMap = function(b) {
    if(this.uniqueMap) {
      var a, f = this.uniqueMap;
      for(a in f) {
        f.hasOwnProperty(a) && this.removeUniqueIndices(f[a], a, b)
      }
    }
  };
  e.addToIdMap = function(b) {
    var a = this.idKey;
    switch(this._idMode) {
      case this._consts._auto:
        b.hasOwnProperty(a) || (b[a] = this._increment++);
      case this._consts._given:
      ;
      case this._consts._composite:
        return this.addUniqueIndex(this._idToData, a, b)
    }
    return!1
  };
  e.addListToIdMap = function(b) {
    var a = this.idKey;
    switch(this._idMode) {
      case this._consts._auto:
        for(var f = 0, c, d = b.length;f < d;f++) {
          if(!(c = b[f]).hasOwnProperty(a)) {
            c[a] = this._increment++
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
  e.updateIdMap = function(b, a, f) {
    if(h.isNullOr(b, f) || h.isEmptyObj(a)) {
      return!1
    }
    var c = this.idKey;
    switch(this._idMode) {
      case this._consts._auto:
        if(a.hasOwnProperty(c)) {
          return this.grid.error("NOT_MODIFIABLE", c)
        }
      ;
      case this._consts._given:
        return this.updateUniqueIndex(this._idToData, c, b, a, f);
      case this._consts._composite:
        if(a.hasOwnProperty(c)) {
          return this.grid.error("NOT_MODIFIABLE", c)
        }
        for(var f = this._options.idColKeys, d = f.length, j = 0;j < d;j++) {
          if(a.hasOwnProperty(f[j])) {
            for(var k = "", e = 0, g, i, n = {}, m = {}, j = m[c] = b[c];e < d;e++) {
              if(g = f[e], a.hasOwnProperty(g)) {
                if(h.isEmptyString(i = a[g])) {
                  return this.grid.error("BAD_NULL", g)
                }
                k += "&" + i
              }else {
                k += "&" + b[g]
              }
            }
            b[c] = n[c] = k;
            if(j === k) {
              break
            }
            a = this.updateUniqueIndex(this._idToData, c, b, n, m);
            a instanceof Error && (b[c] = j);
            return a
          }
        }
    }
    return!1
  };
  e.updateListIdMap = function(b, a, f) {
    if(h.isEmptyArray(b) || h.isEmptyArray(a) || h.isEmptyArray(f)) {
      return!1
    }
    var c = this.idKey, d = b.length, j = 0;
    switch(this._idMode) {
      case this._consts._auto:
        for(;j < d;j++) {
          if(a[j].hasOwnProperty(c)) {
            return this.grid.error("NOT_MODIFIABLE", c)
          }
        }
      ;
      case this._consts._given:
        return this.updateUniqueIndices(this._idToData, c, b, a, f);
      case this._consts._composite:
        for(var k = this._idToData, e, g, i = this._options.idColKeys, n = i.length, m, f = [], l = [], q = [], r = [], t, u, v, x;j < d;j++) {
          e = b[j];
          g = a[j];
          if(g.hasOwnProperty(c)) {
            t = 0;
            for(d = f.length;t < d;t++) {
              l[t][c] = f[t]
            }
            return this.grid.error("NOT_MODIFIABLE", c)
          }
          for(t = 0;t < n;t++) {
            if(g.hasOwnProperty(i[t])) {
              m = "";
              for(u = 0;u < n;u++) {
                if(v = i[u], g.hasOwnProperty(v)) {
                  if(h.isEmptyString(x = g[v])) {
                    t = 0;
                    for(d = f.length;t < d;t++) {
                      l[t][c] = f[t]
                    }
                    return this.grid.error("BAD_NULL", v)
                  }
                  m += "&" + x
                }else {
                  m += "&" + e[v]
                }
              }
              e[c] !== m && (l.push(e), q.push({}), r.push({}), f.push(e[c]), e[c] = m)
            }
          }
        }
        if(!l.length) {
          break
        }
        b = this.updateUniqueIndices(k, c, l, q, r);
        if(b instanceof Error) {
          t = 0;
          for(d = f.length;t < d;t++) {
            l[t][c] = f[t]
          }
        }
        return b
    }
    return!1
  };
  e.removeFromIdMap = function(b) {
    var a = this.idKey, f = this._idToData, c;
    h.isNotNull(b) && b.hasOwnProperty(a) && f.hasOwnProperty(c = b[a]) && delete f[c]
  };
  e.removeListFromIdMap = function(b) {
    if(!h.isEmptyArray(b)) {
      for(var a = this.idKey, f = b.length, c = this._idToData, d, j, k = 0;k < f;k++) {
        j = b[k], j.hasOwnProperty(a) && c.hasOwnProperty(d = j[a]) && delete c[d]
      }
    }
  };
  e.fillTemp = function(b, a) {
    var f = this.grid.colDefMgr.getAll(), c = f.length, d, j, k = 0;
    if(a && a.isNew) {
      for(;k < c;k++) {
        j = f[k], d = j.key, j.nullOnCreate && b[d] == null && (b[d] = "J@H" + this._increment++)
      }
    }
  };
  e.fillTempList = function(b, a) {
    var f = this.grid.colDefMgr.getAll(), c = f.length, d = b.length, j, k, e = 0;
    if(a && a.isNew) {
      for(;e < c;e++) {
        if(k = f[e], j = k.key, k.nullOnCreate) {
          for(k = 0;d;k++) {
            b[k][j] = "J@H" + this._increment++
          }
        }
      }
    }
  };
  e.query = function(b) {
    if(typeof b === "string" && (b = $.trim(b), b.length)) {
      var a, f, c, d, j;
      a = b.toLowerCase();
      f = b.indexOf(" ");
      if(f !== -1 && (c = a.substring(0, f), a = a.indexOf(" where "), d = a > -1, f = $.trim(d ? b.substring(f + 1, a) : b.substring(f + 1)), f.length)) {
        switch(d && (j = $.trim(b.substring(a + 7))), c) {
          case "select":
            return this.executeSelect(f, j);
          case "insert":
            return this.executeInsert(f, j);
          case "update":
            return this.executeUpdate(f, j);
          case "delete":
            return this.executeDelete(f, j)
        }
      }
    }
  };
  e.parseWhere = function(b) {
    typeof b === "string" && $.trim(b)
  };
  e.executeSelect = function(b) {
    var b = h.split(b, /[\s,]+/), a = b.length, f = 0, c = {}, d = this.all, j = [];
    if(!a) {
      return j
    }
    for(;f < a;f++) {
      if(b[f] === "*") {
        break
      }
      c[b[f]] = !0
    }
    f = 0;
    for(a = d.length;f < a;f++) {
      j.push(h.clone(d[f], c))
    }
    return j
  };
  e.parse = function(b, a) {
    var f = this.grid.colDefMgr, c = f.getParser(), f = f.getNullOnCreate(), d, j = a && a.isNew;
    try {
      for(d in c) {
        if(c.hasOwnProperty(d) && (!j || !f.hasOwnProperty(d))) {
          b[d] = c[d](b[d], b)
        }
      }
    }catch(k) {
      return this.grid.error("PARSE_ERROR", b[d], d)
    }
    return!0
  };
  e.parseList = function(b, a) {
    var f = this.grid.colDefMgr, c = f.getParser(), f = f.getNullOnCreate(), d, j, k = a && a.isNew, e, h = b.length, g;
    try {
      for(d in c) {
        if(c.hasOwnProperty(d) && (!k || !f.hasOwnProperty(d))) {
          j = c[d];
          for(e = 0;e < h;e++) {
            g = b[e], g[d] = j(g[d], g)
          }
        }
      }
    }catch(i) {
      return this.grid.error("PARSE_ERROR", g[d], d)
    }
    return!0
  };
  e.validate = function(b, a) {
    var f = this.grid.colDefMgr, c = f.getValidator(), f = f.getNullOnCreate(), d, j, k, e, g, h = a && a.isNew;
    try {
      for(d in c) {
        if(c.hasOwnProperty(d) && (!h || !f.hasOwnProperty(d))) {
          if(b.hasOwnProperty(d) && (j = b[d]) != null ? (e = !1, k = typeof j == "string" ? j : j.toString(), g = !k) : (j = null, g = e = !0, k = ""), !c[d](j, b, k, e, g)) {
            return this.grid.error("WRONG_VALUE", k, d)
          }
        }
      }
    }catch(i) {
      return this.grid.error("WRONG_VALUE", k, d)
    }
    return!0
  };
  e.validateList = function(b, a) {
    var f = this.grid.colDefMgr, c = f.getValidator(), f = f.getNullOnCreate(), d, j, k = a && a.isNew, e, g = b.length, h, i, m, l, q;
    try {
      for(d in c) {
        if(c.hasOwnProperty(d) && (!k || !f.hasOwnProperty(d))) {
          j = c[d];
          for(e = 0;e < g;e++) {
            if(q = b[e], q.hasOwnProperty(d) && (h = q[d]) != null ? (m = !1, i = typeof h == "string" ? h : h.toString(), l = !i) : (h = null, l = m = !0, i = ""), !j(h, q, i, m, l)) {
              return this.grid.error("WRONG_VALUE", i, d)
            }
          }
        }
      }
    }catch(r) {
      return this.grid.error("WRONG_VALUE", i, d)
    }
    return!0
  };
  e.makeCompositeKey = function(b, a) {
    if(this._idMode === this._consts._composite && (a || !b.hasOwnProperty(this.idKey))) {
      for(var f = this._options.idColKeys, c = f.length, d = 0, j = "";d < c;d++) {
        j += "&" + b[f[d]]
      }
      b[this.idKey] = j
    }
  };
  e.makeCompositeKeyList = function(b, a) {
    if(this._idMode === this._consts._composite) {
      var f = this.idKey, c = b.length, d = this._options.idColKeys, j = d.length, k, e = 0, g, h;
      if(a) {
        for(;e < c;e++) {
          k = b[e];
          h = "";
          for(g = 0;g < j;g++) {
            h += "&" + k[d[g]]
          }
          k[f] = h
        }
      }else {
        for(;e < c;e++) {
          if(!(k = b[e]).hasOwnProperty(f)) {
            h = "";
            for(g = 0;g < j;g++) {
              h += "&" + k[d[g]]
            }
            k[f] = h
          }
        }
      }
    }
  };
  e.map = function(b) {
    if(b) {
      var a = this._idToData, f = this.idKey, c;
      this.makeCompositeKey(b);
      if(b.hasOwnProperty(f) && a.hasOwnProperty(c = b[f])) {
        return a[c]
      }
    }
    return null
  };
  e.mapList = function(b) {
    if(b && b.length) {
      this.makeCompositeKeyList(b);
      for(var a = [], f = [], c = this.idKey, d = this._idToData, j = b.length, k = 0, e, g;k < j;k++) {
        (e = b[k]).hasOwnProperty(c) && d.hasOwnProperty(g = e[c]) ? a.push(d[g]) : f.push(e)
      }
      return{mapped:a, unmapped:f}
    }
    return{mapped:[], unmapped:[]}
  };
  e.getById = function(b) {
    return b != null && this._idToData.hasOwnProperty(b) ? this._idToData[b] : null
  };
  e.getByIdx = function(b) {
    return b != null && this.datalist.hasOwnProperty(b) ? this.datalist[b] : null
  };
  e.getByNode = function(b) {
    return this.getById(this.getIdByNode(b))
  };
  e.getIdx = function(b) {
    return this.getIdxById(this.getId(b))
  };
  e.getIdxById = function(b) {
    return b != null && this._idToIdx.hasOwnProperty(b) ? this._idToIdx[b] : -1
  };
  e.getIdxByNode = function(b) {
    return this.getIdxById(this.getIdByNode(b))
  };
  e.getId = function(b) {
    return b && b.hasOwnProperty(this.idKey) ? b[this.idKey] : null
  };
  e.getIdByIdx = function(b) {
    return this.getId(this.getByIdx(b))
  };
  e.getIdByNode = function(b) {
    return b ? b.getAttribute("i") : null
  };
  e._reidxFrom = function(b) {
    for(var a = this.datalist, f = a.length, c = this.idKey, d = this._idToIdx, b = b || 0;b < f;b++) {
      d[a[b][c]] = b
    }
  };
  e._reidx = function() {
    this._idToIdx = {};
    this._reidxFrom()
  };
  e.has = function(b) {
    return this.hasById(this.getId(b))
  };
  e.hasById = function(b) {
    return b == null ? !1 : this._idToIdx.hasOwnProperty(b)
  };
  e.contains = function(b) {
    return this.containsById(this.getId(b))
  };
  e.containsById = function(b) {
    return b == null ? !1 : this._idToData.hasOwnProperty(b)
  };
  e.set = function(b) {
    var a = this.all;
    if(a === b || !a.length && (!b || !b.length)) {
      return!1
    }
    var b = b || [], f = this.grid.event;
    f.trigger("onBeforeDataChange", !1, !0);
    f.trigger("onBeforeSetDatalist", [a, b], !0);
    this.cleanList(a);
    if(this.uniqueMap) {
      var c, a = this.uniqueMap;
      for(c in a) {
        a.hasOwnProperty(c) && (a[c] = {})
      }
    }
    this._idToData = {};
    this._history.length = 0;
    this._redoHistory.length = 0;
    if(b.length) {
      if((c = this.parseList(b)) instanceof Error) {
        return c
      }
      if((c = this.validateList(b)) instanceof Error) {
        return c
      }
      if((c = this.addListToUniqueMap(b)) instanceof Error) {
        return c
      }
      this.makeCompositeKeyList(b, !0);
      if((c = this.addListToIdMap(b)) instanceof Error) {
        return c
      }
    }
    this.all = b;
    f.trigger("onAfterSetDatalist", [b], !0);
    f.trigger("onDataChange", !1, !0);
    this.refresh();
    return!0
  };
  e.add = function(b, a) {
    if(!b || this.map(b)) {
      return!1
    }
    var f = this.grid.event;
    f.trigger("onBeforeDataChange", !1, !0);
    this.fillTemp(b, a);
    var c;
    if((c = this.parse(b, a)) instanceof Error) {
      return c
    }
    if((c = this.validate(b, a)) instanceof Error) {
      return c
    }
    if((c = this.addToUniqueMap(b)) instanceof Error) {
      return c
    }
    if((c = this.addToIdMap(b)) instanceof Error) {
      return c
    }
    this.all.push(b);
    if(!a || a.undo !== !0) {
      this._history.push({_action:this._consts._add, _target:b}), this._redoHistory.length = 0
    }
    f.trigger("onAddDatarow", [b, a], !0);
    f.trigger("onDataChange", !1, !0);
    (!a || a.noRefresh !== !0) && this.refresh(a);
    return!0
  };
  e.addList = function(b, a) {
    if(b && b.length) {
      var f = this.mapList(b).unmapped;
      if(!f.length) {
        return!1
      }
      this.grid.event.trigger("onBeforeDataChange", !1, !0);
      this.fillTempList(b, a);
      var c;
      if((c = this.parseList(f, a)) instanceof Error) {
        return c
      }
      if((c = this.validateList(f, a)) instanceof Error) {
        return c
      }
      if((c = this.addListToUniqueMap(f)) instanceof Error) {
        return c
      }
      if((c = this.addListToIdMap(f)) instanceof Error) {
        return c
      }
      this.all.pushList(f);
      if(!a || a.undo !== !0) {
        this._history.push({_action:this._consts._addList, _target:f}), this._redoHistory.length = 0
      }
      this.grid.event.trigger("onAddDatalist", [f, a], !0);
      this.grid.event.trigger("onDataChange", !1, !0);
      (!a || a.noRefresh !== !0) && this.refresh(a);
      return!0
    }
    return!1
  };
  e.updateByKey = function(b, a, f, c) {
    var d = {};
    d[a] = f;
    return this.update(b, d, c)
  };
  e.update = function(b, a, f) {
    if(!b || !a) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange", !1, !0);
    this.grid.event.trigger("onBeforeUpdateDatarow", [b, a], !0);
    var c = {}, d;
    for(d in a) {
      a.hasOwnProperty(d) && (b[d] === a[d] ? delete a[d] : (c[d] = b[d], b[d] = a[d]))
    }
    if(h.isEmptyObj(c)) {
      return!1
    }
    if((d = this.parse(b, f)) instanceof Error) {
      return this._rollback(b, c), d
    }
    if((d = this.validate(b, f)) instanceof Error) {
      return this._rollback(b, c), d
    }
    if((d = this.updateUniqueMap(b, a, c)) instanceof Error) {
      return this._rollback(b, c), d
    }
    if((d = this.updateIdMap(b, a, c)) instanceof Error) {
      return this._rollback(b, c), d
    }
    d !== !1 && this.grid.event.trigger("onIdChange", [b, d, b[this.idKey]], !0);
    if(!f || f.undo !== !0) {
      this._history.push({_action:this._consts._update, _target:b, _before:c, _change:a}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onUpdateDatarow", [b, a, c, f], !0);
    this.grid.event.trigger("onDataChange", !1, !0);
    (!f || f.noRefresh !== !0) && this.refresh(f);
    return!0
  };
  e.updateList = function(b, a) {
    if(!b || !b.length) {
      return!1
    }
    var f = this.grid.event;
    f.trigger("onBeforeDataChange", !1, !0);
    f.trigger("onBeforeUpdateDatalist", [b], !0);
    for(var c = [], d = [], j = [], k, e, g, i = b.length, n = 0, m;n < i;n++) {
      e = {};
      k = b[n].datarow;
      g = b[n].change;
      for(m in g) {
        g.hasOwnProperty(m) && (k[m] === g[m] ? delete g[m] : (e[m] = k[m], k[m] = g[m]))
      }
      h.isNotEmptyObj(e) && (c.push(k), d.push(e), j.push(g))
    }
    if(!c.length) {
      return!1
    }
    if((k = this.parseList(c, a)) instanceof Error) {
      return this._rollbackList(c, d), k
    }
    if((k = this.validateList(c, a)) instanceof Error) {
      return this._rollbackList(c, d), k
    }
    if((k = this.updateListUniqueMap(c, j, d)) instanceof Error) {
      return this._rollbackList(c, d), k
    }
    if((k = this.updateListIdMap(c, j, d)) instanceof Error) {
      return this._rollbackList(c, d), k
    }
    k !== !1 && f.trigger("onIdListChange", [k.list, k.befores, this.idKey], !0);
    if(!a || a.undo !== !0) {
      this._history.push({_action:this._consts._updateList, _target:c, _before:d, _change:j}), this._redoHistory.length = 0
    }
    f.trigger("onUpdateDatalist", [c, j, d, a], !0);
    f.trigger("onDataChange", !1, !0);
    (!a || a.noRefresh !== !0) && this.refresh(a);
    return!0
  };
  e._rollback = function(b, a) {
    for(var f in a) {
      a.hasOwnProperty(f) && (b[f] = a[f])
    }
  };
  e._rollbackList = function(b, a) {
    for(var f = b.length, c = 0, d, j, k;c < f;c++) {
      for(k in d = b[c], j = a[c], j) {
        j.hasOwnProperty(k) && (d[k] = j[k])
      }
    }
  };
  e.remove = function(b, a) {
    var f = this.map(b);
    if(f) {
      this.grid.event.trigger("onBeforeDataChange", !1, !0);
      this.removeFromIdMap(f);
      this.removeFromUniqueMap(f);
      this.all.remove(f);
      this.removeId(f);
      if(!a || a.undo !== !0) {
        this._history.push({_action:this._consts._remove, _target:f}), this._redoHistory.length = 0
      }
      this.grid.event.trigger("onRemoveDatarow", [f, a], !0);
      this.grid.event.trigger("onDataChange", !1, !0);
      (!a || a.noRefresh !== !0) && this.refresh(a);
      return!0
    }
    return!1
  };
  e.removeList = function(b, a) {
    if(b && b.length) {
      var f = this.mapList(b).mapped;
      if(f.length) {
        this.grid.event.trigger("onBeforeDataChange", !1, !0);
        this.removeListFromIdMap(f);
        this.removeListFromUniqueMap(f);
        this.all.removeList(f);
        this.cleanList(f);
        if(!a || a.undo !== !0) {
          this._history.push({_action:this._consts._removeList, _target:f}), this._redoHistory.length = 0
        }
        this.grid.event.trigger("onRemoveDatalist", [f, a], !0);
        this.grid.event.trigger("onDataChange", !1, !0);
        (!a || a.noRefresh !== !0) && this.refresh(a);
        return!0
      }
    }
    return!1
  };
  e._keydownCanvas = function(b) {
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
  e.undo = function() {
    if(!this._history.length) {
      return!1
    }
    var b = this._history.pop();
    this._redoHistory.push(b);
    var a = b._target, f = b._before;
    switch(b._action) {
      case this._consts._add:
        return this.remove(a, {undo:!0});
      case this._consts._addList:
        return this.removeList(a, {undo:!0});
      case this._consts._update:
        return this.update(a, f, {undo:!0});
      case this._consts._updateList:
        for(var b = [], c = 0, d = a.length;c < d;c++) {
          b.push({datarow:a[c], change:f[c]})
        }
        return this.updateList(b, {undo:!0});
      case this._consts._remove:
        return this.add(a, {undo:!0});
      case this._consts._removeList:
        return this.addList(a, {undo:!0})
    }
  };
  e.redo = function() {
    if(!this._redoHistory.length) {
      return!1
    }
    var b = this._redoHistory.pop();
    this._history.push(b);
    var a = b._target, f = b._change;
    switch(b._action) {
      case this._consts._add:
        return this.add(a, {undo:!0});
      case this._consts._addList:
        return this.addList(a, {undo:!0});
      case this._consts._update:
        return this.update(a, f, {undo:!0});
      case this._consts._updateList:
        for(var b = [], c = 0, d = a.length;c < d;c++) {
          b.push({datarow:a[c], change:f[c]})
        }
        return this.updateList(b, {undo:!0});
      case this._consts._remove:
        return this.remove(a, {undo:!0});
      case this._consts._removeList:
        return this.removeList(a, {undo:!0})
    }
  };
  e.equals = function(b, a) {
    if(b && a) {
      if(b === a) {
        return!0
      }
      this._idMode === this._consts._composite && (this.makeCompositeKey(b), this.makeCompositeKey(a));
      var f = this.idKey, c = b[f];
      return c == null ? !1 : c === a[f]
    }
    return!1
  };
  e.getReal = function() {
    var b = this._consts._notReal;
    return this.all.filter(function(a) {
      return!a.hasOwnProperty(b)
    })
  };
  e.filterReal = function(b) {
    var a = this._consts._notReal;
    return b.filter(function(b) {
      return!b.hasOwnProperty(a)
    })
  };
  e.isReal = function(b) {
    return b && !b.hasOwnProperty(this._consts._notReal)
  };
  e.dropNonReal = function(b) {
    if(b && b.length) {
      for(var a = this._consts._notReal, f = b.length - 1;f >= 0;f--) {
        b[f].hasOwnProperty(a) && (delete b[f][a], b.removeAt(f))
      }
    }
  };
  e.removeIdCol = function(b) {
    if(!(this._idMode === this._consts._given || !b || !b.length)) {
      for(var a = this.idKey, f = 0, c = b.length;f < c;f++) {
        b[f].hasOwnProperty(a) && delete b[f][a]
      }
    }
  };
  e.removeId = function(b) {
    b && this._idMode !== this._consts._given && b.hasOwnProperty(this.idKey) && delete b[this.idKey]
  };
  e.cleanList = function(b) {
    b && b.length && (this.removeIdCol(b), this.dropNonReal(b))
  };
  e.setSorter = function(b) {
    this.grid.event.trigger("onChangeSorter", [this._sorter, b], !0);
    this._sorter = b
  };
  e._sort = function(b) {
    b ? this.setSorter(b) : b = this._sorter;
    if(b) {
      var a = this.all, f = this.grid.event, c = [a];
      f.trigger("onBeforeSort", c, !0);
      b.comparator ? (a.sort(b.comparator), b.desc && a.reverse()) : b.lexi && this.constructor._lexi(a, b.lexi, b.desc);
      f.trigger("onAfterSort", c, !0)
    }
  };
  e.addFilter = function(b) {
    this._filters.push(b);
    this.refresh()
  };
  e.removeFilter = function(b) {
    var a = this._filters.length;
    this._filters.remove(b);
    a !== this._filters.length && this.refresh()
  };
  e._filter = function() {
    var b = this.datalist, a = this.failed, f = 0, c = this._filters.length, d, j;
    this.grid.event.trigger("onBeforeFilter", [b, a], !0);
    b.length = 0;
    b.pushList(this.all);
    for(a.length = 0;f < c;f++) {
      d = this._filters[f];
      for(j = b.length - 1;j >= 0;j--) {
        d(b[j]) || (a.push(b[j]), b.removeAt(j))
      }
    }
    this.grid.event.trigger("onFilter", [b, a], !0);
    this.grid.event.trigger("onAfterFilter", [b, a], !0)
  };
  e._finish = function(b) {
    this._reidx();
    this.grid.event.trigger("onAfterRefresh", [b], !0)
  };
  e.refresh = function(b) {
    this.grid.event.trigger("onBeforeRefresh", !1, !0);
    b ? b.noSort || this._sort(b.sorter) : this._sort();
    (!b || !b.noFilter) && this._filter();
    this._finish(b)
  };
  e.exportRowToArray = function(b, a) {
    if(!(b in this.datalist)) {
      return null
    }
    a || (a = this.grid.colDefMgr.getKeys());
    for(var f = this.datalist[b], c = [], d, j = 0, k = a.length;j < k;j++) {
      d = a[j], c.push(d in f ? f[d] : null)
    }
    return c
  };
  e.exportToArray = function(b, a, f, c) {
    for(var b = b || this.grid.colDefMgr.getKeys(), c = c || this.datalist.slice(a, f), f = [], d, j, k = 0, e = c.length, g, h = b.length;k < e;k++) {
      d = c[k];
      g = 0;
      for(a = [];g < h;g++) {
        j = b[g], a.push(j in d ? d[j] : null)
      }
      f.push(a)
    }
    return f
  };
  e.select = function(b, a, f, c) {
    for(var b = b || this.grid.colDefMgr.getKeys(), c = c || this.datalist.slice(a, f), f = [], d, j, k = 0, e = c.length, g, h = b.length;k < e;k++) {
      d = c[k];
      g = 0;
      for(a = {};g < h;g++) {
        j = b[g], a[j] = d.hasOwnProperty(j) && d[j] != null ? d[j] : null
      }
      f.push(a)
    }
    return f
  };
  e.slice = function(b, a) {
    return this.select(null, b, a)
  };
  g._lexi = function(b, a, f) {
    var c = Object.prototype.toString;
    Object.prototype.toString = typeof a == "function" ? a : function() {
      return this[a]
    };
    b.sort();
    Object.prototype.toString = c;
    f && b.reverse()
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "EventManager.js"...');
jx.grid.EventManager = {};
(function() {
  function g(b) {
    this.mid = b.mid;
    this.grid = b.grid;
    b.grid.event = this;
    this._map = {}
  }
  var i = goog.getObjectByName("jx.grid"), h = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.EventManager", g);
  g.getInstance = function(b) {
    return new g(b)
  };
  var e = g.prototype;
  e.destroy = function() {
    var b, a = this._map;
    for(b in a) {
      a.hasOwnProperty(b) && i._deleteArray(a, b)
    }
    i._destroy(this, {name:"EventManager", path:"event", map:"_map"})
  };
  e.register = function(b, a, f) {
    if(h.isString(b)) {
      this._parseAndAdd(b, a, f)
    }else {
      if(h.isNotNull(b.e)) {
        this._parseAndAdd(b.e, b.f, b.t)
      }else {
        for(var c, a = b.length, d;c < a;c++) {
          h.isNotNull(d = b[c]) && this._parseAndAdd(d.e, d.f, d.t)
        }
      }
    }
  };
  e.bind = function(b, a, f) {
    if(h.isString(b)) {
      this._parseAndAdd(b, a, f)
    }else {
      for(var c in b) {
        b.hasOwnProperty(c) && this._parseAndAdd(c, b[c], a)
      }
    }
  };
  e._parseAndAdd = function(b, a, f) {
    h.isNull(f) && (f = window);
    var b = h.split(b), c = b.length, d = 0;
    if(h.isFunction(a)) {
      for(;d < c;d++) {
        this._addHandler(b[d], a, f)
      }
    }else {
      if(h.isString(a)) {
        for(var a = h.split(a), j = a.length, k, e;d < c;d++) {
          k = b[d];
          for(e = 0;e < j;e++) {
            this._addHandler(k, f[a[e]], f)
          }
        }
      }else {
        for(j = a.length;d < c;d++) {
          k = b[d];
          for(e = 0;e < j;e++) {
            this._addHandler(k, a[e], f)
          }
        }
      }
    }
  };
  e._addHandler = function(b, a, f) {
    this._map.hasOwnProperty(b) || (this._map[b] = []);
    this._map[b].push({fn:a, target:f})
  };
  e.unregister = function(b, a) {
    var f = this._map;
    if(f.hasOwnProperty(b)) {
      var c = f[b];
      if(h.isNull(a)) {
        c.length = 0, delete f[b]
      }else {
        for(var d = 0, j = c.length;d < j;d++) {
          if(c[d].fn === a) {
            c.removeAt(d);
            c.length === 0 && delete f[b];
            break
          }
        }
      }
    }
  };
  e.trigger = function(b, a, f, c) {
    this.grid.log("firing event=" + b, 3);
    var d = this._map;
    if(d.hasOwnProperty(b)) {
      var d = d[b], j = d.length;
      if(j) {
        if(this.grid.log(j + " handlers registered for event=" + b, 4), b = 0, f) {
          if(a && a.length) {
            for(;b < j;b++) {
              f = d[b], f.fn.apply(f.target, a)
            }
          }else {
            for(;b < j;b++) {
              f = d[b], f.fn.call(f.target)
            }
          }
        }else {
          c = c || [];
          if(a && a.length) {
            for(;b < j;b++) {
              f = d[b], c.push(f.fn.apply(f.target, a))
            }
          }else {
            for(;b < j;b++) {
              f = d[b], c.push(f.fn.call(f.target))
            }
          }
          return c
        }
      }else {
        this.grid.log("no handlers registered for event=" + b, 4)
      }
    }else {
      this.grid.log("no handlers registered for event=" + b, 4)
    }
  };
  e.triggerMultiple = function(b, a, f) {
    var b = b.split(","), c = 0, d = b.length;
    if(f) {
      for(f = [];c < d;c++) {
        this.trigger(b[c], a, !1, f)
      }
      return f
    }else {
      for(;c < d;c++) {
        this.trigger(b[c], a, !0)
      }
    }
  };
  e.triggerInvalid = function(b, a) {
    var f = this.trigger(b, a);
    return f && f.some(function(a) {
      return a === !1
    })
  };
  e.sendToBack = function(b, a) {
    for(var f = this._map[b], c = f.length, d, j = -1, k = 0;k < c;k++) {
      if(f[k].fn === a) {
        j = k;
        d = f[k];
        break
      }
    }
    j > -1 && (f.removeAt(k), f.push(d))
  };
  e.sendToFront = function(b, a) {
    for(var f = this._map[b], c = f.length, d, j = -1, k = 0;k < c;k++) {
      if(f[k].fn === a) {
        j = k;
        d = f[k];
        break
      }
    }
    j > -1 && (f.removeAt(k), f.unshift(d))
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "Tree.js"...');
jx.struct = {};
jx.struct.TreeNode = {};
jx.struct.Tree = {};
var TreeNode = {}, Tree = {};
(function() {
  function g(b) {
    this.tree = b.tree;
    this.data = b.data;
    this.nodeId = b.nodeId;
    this.childrenMap = {};
    this.children = []
  }
  function i(b) {
    this.list = b.list;
    this._options = JGM._extend({nodeKey:"nodeId", parentKey:"parentId"}, b.options);
    this.map = {};
    this.root = new g({tree:this});
    this.infants = {}
  }
  var h = goog.getObjectByName("jx.util");
  goog.exportSymbol("jx.struct.TreeNode", g);
  goog.exportSymbol("jx.struct.Tree", i);
  goog.exportSymbol("TreeNode", g);
  goog.exportSymbol("Tree", i);
  g.getInstance = function(b) {
    return new g(b)
  };
  var e = g.prototype;
  e.destroy = function() {
    this.detach();
    delete this.tree;
    delete this.data;
    delete this.nodeId;
    delete this.childrenMap;
    delete this.children
  };
  e.destroyCompletely = function() {
    this.detachCompletely();
    delete this.tree;
    delete this.data;
    delete this.nodeId;
    delete this.childrenMap;
    delete this.children
  };
  e.destroyDown = function() {
    h.isNotNull(this.parent) && this.parent.removeChild(this);
    this.traverse({post:!0, fn:function() {
      this.destroy()
    }})
  };
  e.detach = function() {
    delete this.parent;
    delete this.level;
    this.children.length = 0;
    this.childrenMap = {}
  };
  e.detachCompletely = function() {
    h.isNotNull(this.parent) && this.parent.removeChild(this);
    this.removeAllChildren();
    delete this.parent;
    delete this.level
  };
  e.detachDown = function() {
    h.isNotNull(this.parent) && this.parent.removeChild(this);
    this.traverse({post:!0, fn:function() {
      this.detach()
    }})
  };
  e.isRoot = function() {
    return h.isNull(this.parent)
  };
  e.getRoot = function() {
  };
  e.isLeaf = function() {
    return this.children.length === 0
  };
  e.setParent = function(b) {
    if(this.parent !== b) {
      h.isNotNull(this.parent) && this.parent.removeChild(this), this.parent = b, delete this.level, h.isNotNull(b) && b.addChild(this)
    }
  };
  e.hasChild = function(b) {
    return this.childrenMap.hasOwnProperty(b.nodeId)
  };
  e.addChild = function(b) {
    this.hasChild(b) || (this.children.push(b), this.childrenMap[b.nodeId] = this.children.length - 1, b.setParent(this))
  };
  e.addChildAt = function(b, a) {
    var f;
    if(this.hasChild(a)) {
      f = this.childrenMap[a.nodeId];
      if(f === b) {
        return
      }
      this.children.removeAt(f)
    }
    this.children.addAt(b, a);
    h.isNotNull(f) && f < b ? this.resetChildIdx(f) : this.resetChildIdx(b);
    a.setParent(this)
  };
  e.removeChild = function(b) {
    if(this.hasChild(b)) {
      var a = this.childrenMap[b.nodeId];
      this.children.removeAt(a);
      delete this.childrenMap[b.nodeId];
      this.resetChildIdx(a);
      delete b.parent;
      delete b.level
    }
  };
  e.removeChildAt = function(b) {
    var a = this.children[b];
    this.children.removeAt(b);
    delete this.childrenMap[a.nodeId];
    this.resetChildIdx(b);
    delete a.parent;
    delete a.level
  };
  e.resetChildIdx = function(b) {
    h.isNull(b) && (b = 0);
    for(var a = this.children, f = a.length, c = this.childrenMap;b < f;b++) {
      c[a[b].nodeId] = b
    }
  };
  e.removeAllChildren = function() {
    for(var b = 0, a = this.children, f = a.length;b < f;b++) {
      delete a[b].parent, delete a[b].level
    }
    a.length = 0;
    this.childrenMap = {}
  };
  e.getSiblings = function() {
    if(this.isRoot()) {
      return[]
    }
    var b = this.parent.children.slice();
    b.removeAt(this.parent.getChildIdx(this));
    return b
  };
  e.getChildIdx = function(b) {
    return this.childrenMap[b.nodeId]
  };
  e.getIdx = function() {
    return this.isRoot() ? -1 : this.parent.getChildIdx(this)
  };
  e.getPath = function() {
    return this.traverse({res:[], up:!0, post:!0, fn:function(b) {
      this.isRoot() || b.res.push(this.getIdx())
    }}).res
  };
  e.getAncestors = function() {
    var b = {res:[], up:!0, post:!0, fn:function(a) {
      a.res.push(this)
    }};
    this.traverse(b);
    b.res.pop();
    return b.res
  };
  e.getDescendents = function() {
    var b = {res:[], fn:function(a) {
      a.res.push(this)
    }};
    this.traverse(b);
    b.res.shift();
    return b.res
  };
  e.getLevel = function() {
    return this.isRoot() ? this.level = -1 : this.level = this.parent.getLevel() + 1
  };
  e.find = function(b) {
    return this.traverse({fn:function(a) {
      if(this.data === b) {
        a.res = this, a.stop = !0
      }
    }}).res
  };
  e.traverse = function(b, a) {
    if(b.stop) {
      return b
    }
    if(b.up) {
      this.isRoot() ? this.callFn(b) : b.post ? (this.parent.traverse(b), this.callFn(b)) : (this.callFn(b), this.parent.traverse(b))
    }else {
      var f = 0, c = this.children, d = c.length;
      if(b.post) {
        for(;f < d;f++) {
          c[f].traverse(b, f)
        }
        this.callFn(b, a)
      }else {
        if(this.callFn(b, a), b.propagate === !1) {
          delete b.propagate
        }else {
          for(;!b.stop && f < d;f++) {
            c[f].traverse(b, f)
          }
        }
      }
    }
    return b
  };
  e.traverseChildren = function(b) {
    for(var a = 0, f = this.children, c = f.length;a < c;a++) {
      f[a].traverse(b, a)
    }
  };
  e.traverseParent = function(b) {
    h.isNotNull(this.parent) && this.parent.traverse(b)
  };
  e.callFn = function(b, a) {
    if(!b.stop) {
      h.isNull(b.target) ? h.callFn(this, b.fn, b, a) : (b.node = this, h.callFn(b.target, b.fn, b, a))
    }
  };
  i.getInstance = function(b) {
    return new i(b)
  };
  e = i.prototype;
  e.__init = function() {
    this.makeTree()
  };
  e.destroy = function() {
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
  e.detach = function() {
    this.root.detachDown();
    this.emptyInfants()
  };
  e.emptyInfants = function() {
    var b, a = this.infants;
    for(b in a) {
      if(a.hasOwnProperty(b)) {
        a[b].length = 0
      }
    }
    this.infants = {}
  };
  e.reattach = function(b) {
    this.detach();
    if(h.isNull(b)) {
      b = this.list
    }
    for(var a = this._options.nodeKey, f = this.map, c = b.length, d = 0;d < c;d++) {
      this.attachNode(f[b[d][a]])
    }
  };
  e.makeTree = function(b) {
    if(h.isNull(b)) {
      b = this.list
    }
    for(var a = 0, f = b.length;a < f;a++) {
      this.createNode(b[a])
    }
  };
  e.hasNode = function(b) {
    return h.isNotNull(b) && this.map.hasOwnProperty(b[this._options.nodeKey])
  };
  e.getNode = function(b) {
    return this.map[b[this._options.nodeKey]]
  };
  e.getNodeByNodeId = function(b) {
    return this.map[b]
  };
  e.createNode = function(b) {
    if(!this.hasNode()) {
      var a = b[this._options.nodeKey], b = new g({tree:this, data:b, nodeId:a});
      this.map[a] = b;
      this.attachNode(b);
      return b
    }
  };
  e.adoptInfants = function(b, a) {
    if(this.infants.hasOwnProperty(a)) {
      for(var f = this.infants[a], c = 0, d = f.length;c < d;c++) {
        b.addChild(f[c])
      }
      f.length = 0;
      delete this.infants[a]
    }
  };
  e.attachNode = function(b) {
    var a = b.nodeId, f = b.data[this._options.parentKey];
    this.adoptInfants(b, a);
    if(h.isNull(f) || f == a) {
      return this.root.addChild(b), !0
    }
    if(this.map.hasOwnProperty(f)) {
      return this.map[f].addChild(b), !0
    }
    this.addToInfants(b, f);
    return!1
  };
  e.changeNodeId = function(b, a, f) {
    if(a !== f) {
      delete this.map[a], this.map[f] = b, this.removeChildren(b), b.nodeId = b.data[this._options.nodeKey] = f, h.isNotNull(b.parent) && (b.parent.childrenMap[f] = b.parent.childrenMap[a], delete b.parent.childrenMap[a]), this.adoptInfants(b, f)
    }
  };
  e.changeParentId = function(b, a, f) {
    a !== f && (h.isNull(b.parent) && this.removeFromInfants(b, a), a = this.map[f], b.setParent(a), b.data[this._options.parentKey] = f, h.isNull(a) && this.addToInfants(b, f))
  };
  e.destroyNodeByData = function(b) {
    this.destroyNode(this.getNode(b))
  };
  e.destroyNode = function(b) {
    this.removeChildren(b);
    this.removeFromInfants(b);
    this.removeFromMap(b);
    b.destroyCompletely()
  };
  e.removeFromMap = function(b) {
    delete this.map[b.nodeId]
  };
  e.addToInfants = function(b, a) {
    this.infants.hasOwnProperty(a) || (this.infants[a] = []);
    this.infants[a].push(b)
  };
  e.removeFromInfants = function(b, a) {
    h.isNull(a) && (a = b.data[this._options.parentKey]);
    this.infants.hasOwnProperty(a) && (this.infants[a].remove(b), this.infants[a].length === 0 && delete this.infants[a])
  };
  e.removeChildren = function(b) {
    b.children.length !== 0 && (this.infants.hasOwnProperty(b.nodeId) || (this.infants[b.nodeId] = []), this.infants[b.nodeId].pushList(b.children), b.removeAllChildren())
  };
  e.sortList = function(b) {
    h.isNull(b) ? b = [] : b.length = 0;
    this.root.traverseChildren({fn:function() {
      b.push(this.data)
    }})
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "Grid.js"...');
jx.grid.Grid = {};
(function() {
  function g(d) {
    this.mid = d.mid;
    this.log("creating new Grid instance...", f);
    b.call(this, d)
  }
  var i = goog.getObjectByName("jx.grid"), h = goog.getObjectByName("jx.util"), e = goog.getObjectByName("echo"), b = goog.getObjectByName("jx.grid.BaseModule"), a = goog.getObjectByName("TimeWatch"), f = 1;
  goog.exportSymbol("jx.grid.Grid", g);
  g.V_KEYDOWN = 3;
  g.V_KEYPRESS = 3;
  g.V_KEYUP = 3;
  g.V_MOUSEMOVE = 5;
  g.V_MOUSEOVER = 4;
  g.V_MOUSEOUT = 4;
  g.V_MOUSEIN = 4;
  g.V_MOUSEDOWN = 3;
  g.V_MOUSEUP = 3;
  g.V_MOUSEENTER = 3;
  g.V_MOUSELEAVE = 3;
  g.V_CLICK = 2;
  g.V_DBLCLICK = 2;
  g.V_RESIZE = 2;
  g.V_INIT = f;
  goog.inherits(g, b);
  g.getInstance = function(d) {
    return new g(d)
  };
  var c = g.prototype;
  c._defaultOptions = function() {
    return{classGrid:"jgrid", border:"1px solid #868686", width:"", font:"15px Arial,Helvetica,sans-serif", style:"", borderSide:!0, imageUrl:"../images/", links:{data:"dataMgr.all", datalen:"dataMgr.all.length", shown:"dataMgr.datalist", set:"dataMgr.set", add:"dataMgr.add", addList:"dataMgr.addList", update:"dataMgr.update", updateByKey:"dataMgr.updateByKey", updateList:"dataMgr.updateList", remove:"dataMgr.remove", removeList:"dataMgr.removeList", select:"dataMgr.executeSelect", undo:"dataMgr.undo", 
    redo:"dataMgr.redo", addFilter:"dataMgr.addFilter", removeFilter:"dataMgr.removeFilter", check:"collapser.checkMgr.checkList checkMgr.checkList", checked:"collapser.checkMgr.getCheckList checkMgr.getCheckList", removeChecked:"collapser.checkMgr.removeChecked checkMgr.removeChecked", register:"event.register", trigger:"event.trigger", bind:"event.bind", unregister:"event.unregister", unbind:"event.unregister", commit:"editMgr.commit", cancelEdit:"editMgr.cancel", beginEdit:"editMgr.begin", collen:"colDefMgr.length"}, 
    autoWidth:!1, showMessage:!1}
  };
  c._init = function(d) {
    var a = this._ctnr = d.container, b = this._options, c;
    this.name = b.name;
    this._drag = !1;
    this._lastH = this._lastW = null;
    this._vars = {scrollbarDim:void 0};
    if(c = b.width) {
      if(typeof c === "number" || c.indexOf("%") === -1) {
        c += "px"
      }
    }else {
      c = ""
    }
    a = this._ctnr = $("<div id='" + this.mid + "' class='" + b.classGrid + "' " + (c ? "style='width:" + c + "' " : "") + "tabIndex='0'>").appendTo(Util$.safe$(a));
    this._vars.scrollbarDim = Util$.calScrollbarDims(a);
    c = this.event = i.create("EventManager", {grid:this, options:b.EventManager});
    this.colDefMgr = i.create("ColumnManager", {grid:this, colDefs:d.colDefs, options:b.ColDefManager});
    this.dataMgr = i.create("DataManager", {grid:this, datalist:d.datalist, options:b.DataManager});
    b.CheckManager && (this.checkMgr = i.create("CheckManager", {grid:this, options:b.CheckManager}));
    b.MenuBar || (b.MenuBar = {});
    if(b.Collapser) {
      this.collapser = i.create("Collapser", {grid:this, options:b.Collapser}), this.collapser.__init()
    }
    b.ColGroup && (this.colGroup = i.create("ColumnGroup", {grid:this, options:b.ColGroup}));
    b.SelectionManager && (this.selMgr = i.create("SelectionManager", {grid:this, options:b.SelectionManager}));
    b.EditManager && (this.editMgr = i.create("EditManager", {grid:this, options:b.EditManager}));
    b.ColHeader && (this.header = i.create("ColumnHeader", {grid:this, container:a, options:b.ColHeader}));
    b.SearchManager && (this.search = i.create("SearchManager", {grid:this, container:a, options:b.SearchManager}));
    this.menubar = i.create("MenuBar", {grid:this, container:a, options:b.MenuBar});
    this.view = i.create("ViewportManager", {grid:this, container:a, options:b.ViewportManager});
    b.TooltipManager && (this.tooltip = i.create("TooltipManager", {grid:this, container:a, options:b.TooltipManager}));
    b.DataCreator && (this.creator = i.create("DataCreator", {grid:this, container:a, options:b.DataCreator}));
    b.Footer && (this.footer = i.create("Footer", {grid:this, container:a, options:b.Footer}));
    b.autoWidth && c.bind("onResizeCanvasWidth", this.width, this);
    this._createCss();
    c.trigger("onBeforeRenderModules", !1, !0);
    c.trigger("onRenderModules", !1, !0);
    c.trigger("onAfterRenderModules", !1, !0);
    this.msg = $("<div id='" + this.mid + "msg' class='msg' onmousedown='$(this).hide(1000)' style='position:relative;padding-left:4px;overflow:hidden;z-index:100;font-size:12px;height:21px;line-height:21px'></div>").appendTo(a).hide();
    this._busyShader = $('<div style="position:absolute;background:black;opacity:0.3;filter:alpha(opacity=30)"></div>').appendTo(a).hide();
    a = a[0];
    this._lastW = a.clientWidth;
    this._lastH = a.clientHeight;
    this._registerLinks(b.links)
  };
  c._bindEvents = function() {
    i._bindGlobalEvents();
    this.log("binding Grid events...", f);
    var d = this;
    this._ctnr.bind({keydown:function(a) {
      d._keydown(a)
    }, keyup:function(a) {
      d._keyup(a)
    }, keypress:function(a) {
      d._keypress(a)
    }, mousein:function(a) {
      d._mousein(a)
    }, mouseout:function(a) {
      d._mouseout(a)
    }, mouseenter:function(a) {
      d._mouseenter(a)
    }, mouseleave:function(a) {
      d._mouseleave(a)
    }, mouseover:function(a) {
      d._mouseover(a)
    }, mousedown:function(a) {
      d._mousedown(a)
    }, click:function(a) {
      d._click(a)
    }, dblclick:function(a) {
      d._dblclick(a)
    }});
    this._charts = []
  };
  c.destroy = function() {
    this.log("destroying Grid...", f);
    try {
      var d = i.grids.indexOf(this);
      d > -1 && i.grids.splice(d, 1);
      this.name != null && delete i.gridMap[this.name];
      this.log("event:beforeDispose.", f);
      this.dispatchEvent({type:"beforeDispose"});
      h.isEmptyObj(i.m.Grid) && (this.log("unbinding global event handlers.", f), i._unbindGlobalEvents());
      this.log("event:onDestroy.", f);
      this.event.trigger("onDestroy", !1, !0);
      this.log("destroying grid vars...", f);
      i._destroy(this, {name:"Grid", module:"event", $:"_ctnr", map:"_options", style:"_style _dynStyle"});
      this.dispose()
    }catch(a) {
      return a
    }
  };
  c._registerLinks = function(d) {
    var a, b, c, f, e, g, i, l, q, r;
    a:for(a in d) {
      if(d.hasOwnProperty(a) && !(a in this)) {
        b = h.split(d[a]);
        c = b.length;
        f = 0;
        b:for(;f < c;f++) {
          if(e = b[f].split("."), g = e.length, !(g < 1)) {
            i = this;
            l = this;
            q = "";
            for(r = 0;r < g;r++) {
              if(e[r] in i) {
                l = i, i = i[q = e[r]]
              }else {
                continue b
              }
            }
            this._registerLink(a, i, l, q);
            continue a
          }
        }
      }
    }
  };
  c._registerLink = function(d, a, b, c) {
    if(this.hasOwnProperty(d)) {
      return!1
    }
    this[d] = h.isFunction(a) ? function() {
      return a.apply(b, arguments)
    } : function() {
      return b[c]
    };
    return!0
  };
  c._createCss = function() {
    this.log("creating CSS...", f);
    var d = {type:"beforeCreateCss", css:[]}, a = this._options, b = this.event;
    this.dispatchEvent(d);
    this.log("creating CSS for Grid...", f);
    var c = b.trigger("onCreateCss"), c = c ? c.join("") : "", d = h.sprint("%selector%{overflow:hidden;height:100%;font:%font%;%border%%style%}%submodule%", {selector:"#" + this.mid, font:a.font, border:a.borderSide ? "border:" + a.border + ";" : "border-top:" + a.border + ";border-bottom:" + a.border + ";", style:a.style, submodule:d.css.join("") + c});
    this._style = h.createStyle(d);
    d = {type:"beforeCreateDynamicCss", css:[]};
    this.dispatchEvent(d);
    c = (c = b.trigger("onCreateDynamicCss")) ? c.join("") : "";
    this._dynStyle = h.createStyle(d.css.join("") + ";" + c)
  };
  c._recreateDynamicCss = function() {
    this.log("rewriting dynamic css...", 2);
    var d = this.event.trigger("onCreateDynamicCss");
    (d = d ? d.join("") : "") && h.setStyle(this._dynStyle, d)
  };
  c._keydown = function(d) {
    var a = this.event, b = [d], c = d.which;
    this.log("UI event:keydown detected. event=" + d.type + ", keycode=" + c, 3);
    a.triggerInvalid("onBeforeKeydown", b) ? this.log("UI event:keydown prevented.", 3) : (a.trigger("keydown_" + c, b, !0), a.trigger("keydown", b, !0))
  };
  c._keyup = function(d) {
    var a = this.event, b = [d], c = d.which;
    this.log("UI event:keyup detected. event=" + d.type + ", keycode=" + c, 3);
    a.triggerInvalid("onBeforeKeyup", b) ? this.log("UI event:keyup prevented.", 3) : (a.trigger("keyup_" + c, b, !0), a.trigger("keyup", b, !0))
  };
  c._keypress = function(d) {
    var a = this.event, b = [d], c = d.which;
    this.log("UI event:keypress detected. event=" + d.type + ", keycode=" + c, 3);
    a.triggerInvalid("onBeforeKeypress", b) ? this.log("UI event:keypress prevented.", 3) : (a.trigger("keypress_" + c, b, !0), a.trigger("keypress", b, !0))
  };
  c._mousein = function(d) {
    var a = this.event, b = [d];
    this.log("UI event:mousein detected. event=" + d.type, 4);
    a.triggerInvalid("onBeforeMousein", b) ? this.log("UI event:mousein prevented.", 4) : (this._drag && a.trigger("dragin", b, !0), a.trigger("mousein", b, !0))
  };
  c._mouseout = function(d) {
    var a = this.event, b = [d];
    this.log("UI event:mouseout detected. event=" + d.type, 4);
    a.triggerInvalid("onBeforeMouseout", b) ? this.log("UI event:mouseout prevented.", 4) : (this._drag && a.trigger("dragout", b, !0), a.trigger("mouseout", b, !0))
  };
  c._mouseenter = function(d) {
    var a = this.event, b = [d];
    this.log("UI event:mouseenter detected. event=" + d.type, 3);
    a.triggerInvalid("onBeforeMouseenter", b) ? this.log("UI event:mouseenter prevented.", 3) : (this._drag && a.trigger("dragenter", b, !0), a.trigger("mouseenter", b, !0))
  };
  c._mouseleave = function(d) {
    var a = this.event, b = [d];
    this.log("UI event:mouseleave detected. event=" + d.type, 3);
    a.triggerInvalid("onBeforeMouseleave", b) ? this.log("UI event:mouseleave prevented.", 3) : (this._drag && a.trigger("dragleave", b, !0), a.trigger("mouseleave", b, !0))
  };
  c._mousemove = function(d) {
    var a = this.event, b = [d];
    this.log("UI event:mousemove detected. event=" + d.type, 5);
    a.triggerInvalid("onBeforeMousemove", b) ? this.log("UI event:mousemove prevented.", 5) : (this._drag && a.trigger("dragmove", b, !0), a.trigger("mousemove", b, !0))
  };
  c._mouseover = function(d) {
    var a = this.event, b = [d];
    this.log("UI event:mouseover detected. event=" + d.type, 4);
    a.triggerInvalid("onBeforeMouseover", b) ? this.log("UI event:mouseover prevented.", 4) : (this._drag && a.trigger("dragover", b, !0), a.trigger("mouseover", b, !0))
  };
  c._mousedown = function(d) {
    var a = this.event, b = [d];
    this.log("UI event:mousedown detected. event=" + d.type, 3);
    this._drag = !0;
    a.triggerInvalid("onBeforeMousedown", b) ? this.log("UI event:mousedown prevented.", 3) : a.trigger("mousedown", b, !0)
  };
  c._mouseup = function(d) {
    var a = this.event, b = [d];
    this.log("UI event:mouseup detected. event=" + d.type, 3);
    this._drag = !1;
    a.trigger("unsetDrag", !1, !0);
    this.containsEvent(d) && (a.triggerInvalid("onBeforeMouseup", b) ? this.log("UI event:mouseup prevented.", 3) : a.trigger("mouseup", b, !0))
  };
  c._click = function(d) {
    var a = this.event, b = [d];
    this.log("UI event:click detected. event=" + d.type, 2);
    a.triggerInvalid("onBeforeClick", b) ? this.log("UI event:click prevented.", 2) : a.trigger("click", b, !0)
  };
  c._dblclick = function(d) {
    var a = this.event, b = [d];
    this.log("UI event:dblclick detected. event=" + d.type, 2);
    a.triggerInvalid("onBeforeDblclick", b) ? this.log("UI event:dblclick prevented.", 2) : a.trigger("dblclick", b, !0)
  };
  c._resize = function(d) {
    var a = this.event;
    this.log("event:resize detected. event=" + d.type, 2);
    var b = !1, c = this._ctnr, f = c[0], e = this._lastW, g = this._lastH, h = f.clientWidth || c.width(), c = f.clientHeight || c.height();
    if(h >= 1 && e !== h) {
      this.log("event:resizeWidth detected. " + e + "->" + h, 2), a.trigger("resizeWidth", [h, e], !0), this._lastW = h, b = !0
    }
    if(c >= 1 && g !== c) {
      this.log("event:resizeHeight detected. " + g + "->" + c, 2), a.trigger("resizeHeight", [c, g], !0), this._lastH = c, b = !0
    }
    b && a.trigger("resize", [d], !0)
  };
  c.width = function(d) {
    var a = this._ctnr[0], b = a.clientWidth, c = this.event;
    if(!d) {
      return b
    }
    typeof d != "number" && (d = parseInt(d, 10));
    if(d < 1 || d === b || !isFinite(d)) {
      return b
    }
    this.log("set width. " + this._lastW + "->" + d, 2);
    a.style.width = d + "px";
    c.trigger("resizeWidth", [d, this._lastW], !0);
    this._lastW = d;
    c.trigger("resize", !1, !0);
    return d
  };
  c.height = function(d) {
    var a = this._ctnr[0], b = a.clientHeight, c = this.event;
    if(!d) {
      return b
    }
    typeof d != "number" && (d = parseInt(d, 10));
    if(d < 1 || d === b || !isFinite(d)) {
      return b
    }
    this.log("set height. " + this._lastH + "->" + d, 2);
    a.style.height = d + "px";
    c.trigger("resizeHeight", [d, this._lastH], !0);
    this._lastH = d;
    c.trigger("resize", !1, !0);
    return d
  };
  c.syncScroll = function() {
    this.view._scroll()
  };
  c.getCellByIdAndKey = function(d, a) {
    if(d == null || a == null) {
      return null
    }
    var b = this.dataMgr.getById(d);
    if(!b) {
      return null
    }
    var c = this.colDefMgr.getByKey(a);
    return!c ? null : i.create("Cell", {grid:this, datarow:b, colDef:c})
  };
  c.getCellByIdx = function(d, a) {
    if(d == null || a == null) {
      return null
    }
    var b = this.dataMgr.getByIdx(d);
    if(!b) {
      return null
    }
    var c = this.colDefMgr.get(a);
    return!c ? null : i.create("Cell", {grid:this, datarow:b, colDef:c})
  };
  c.busy = function() {
    if(this._busyShader && !this._busy) {
      var d = this._ctnr, a = d.offset(), b = d[0], d = b.clientWidth + 1, b = b.clientHeight + 1, c = this._busyShader, f = c[0].style;
      f.top = a.top + "px";
      f.left = a.left + "px";
      f.width = d + "px";
      f.height = b + "px";
      c.show()
    }
    this._busy = !0
  };
  c.idle = function() {
    this._busyShader && this._busy && this._busyShader.hide();
    this._busy = !1
  };
  c.error = function(d) {
    for(var a = i.error[d], b = 1, c = arguments.length;b < c;b++) {
      a = a.replace(RegExp("%" + (b - 1), "g"), arguments[b])
    }
    a = Error(a);
    a.code = d;
    this.printError(a.message);
    this.log("error occurred... code=" + d + ", msg=" + a.message || a.msg);
    this.event.trigger("onError", [a], !0);
    return a
  };
  c.printError = function(a) {
    this.log("error message... msg=" + a);
    if(this._options.showMessage) {
      var b = this.msg, c = b[0], f = c.style;
      c.innerHTML = a;
      f.width = this._ctnr[0].clientWidth + "px";
      f.background = "#ffebe8";
      f.color = "#333";
      b.show();
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function() {
        b.hide(1E3)
      }, 5E3)
    }
  };
  c.printMessage = function(a) {
    this.log("message... msg=" + a);
    if(this._options.showMessage) {
      var b = this.msg, c = b[0], f = c.style;
      c.innerHTML = a;
      f.width = this._ctnr[0].clientWidth + "px";
      f.background = "#dfdfdf";
      f.color = "#6f6f6f";
      b.show();
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function() {
        b.hide(1E3)
      }, 5E3)
    }
  };
  c.containsEvent = function(a) {
    return h.contains(this._ctnr[0], a.target)
  };
  c.getChart = function(a) {
    return this._charts[a]
  };
  c.log = function(a, b) {
    2 >= (b || 0) && e("Grid[" + this.mid + "]: " + a)
  };
  c.twstart = function(d) {
    this._tw = new a(d)
  };
  c.twlap = function(a) {
    this._tw.lap(a)
  };
  c.twstop = function(a) {
    this._tw.stop(a)
  };
  c.twreset = function(a) {
    this._tw.reset(a)
  };
  c.twprint = function() {
    this.log(this._tw)
  };
  c.getShownColumns = function() {
    return this.colDefMgr.get().filter(function(a) {
      return a.width > 0
    })
  };
  c.chart = function(a, b, c, e, g, h) {
    this.log("creating chart... type=" + b + ", columns=[" + c.join(",") + "]", f);
    var i, m, b = b.toLowerCase();
    switch(b) {
      case "area":
        i = "corechart";
        m = "AreaChart";
        break;
      case "bar":
        i = "corechart";
        m = "BarChart";
        break;
      case "candle":
        i = "corechart";
        m = "CandlestickChart";
        break;
      case "column":
        i = "corechart";
        m = "ColumnChart";
        break;
      case "combo":
        i = "corechart";
        m = "ComboChart";
        break;
      case "gauge":
        i = "gauge";
        m = "Gauge";
        break;
      case "geo":
        i = "geochart";
        m = "GeoChart";
        break;
      case "line":
        i = "corechart";
        m = "LineChart";
        break;
      case "pie":
        i = "corechart";
        m = "PieChart";
        break;
      case "scatter":
        i = "corechart";
        m = "ScatterChart";
        break;
      case "table":
        i = "table";
        m = "Table";
        break;
      case "treemap":
        i = "treemap";
        m = "TreeMap";
        break;
      default:
        throw Error("unknown chart type: " + b);
    }
    google.load("visualization", "1", {packages:[i]});
    var l = this, q = this.colDefMgr, r = this.dataMgr, t = c.map(function(a) {
      if(a = q.getByKey(a)) {
        return a
      }
      throw Error("column key not found");
    }), u = r.exportToArray(c, g, h);
    google.setOnLoadCallback(function() {
      for(var f = new google.visualization.DataTable, i = 0, n = t.length, q, w;i < n;i++) {
        q = t[i];
        w = q.type;
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
        f.addColumn(w || u[0] && u[0][i] != null && typeof u[0][i] || i === 0 && "string" || "number", q.name)
      }
      f.addRows(u);
      var y = l._charts[a] = new google.visualization[m](document.getElementById(a));
      y.draw(f, e);
      l.event.bind("onAfterRefresh", function() {
        l.log("redrawing chart... type=" + b + ", columns=[" + c.join(",") + "]", 2);
        f.removeRows(0, f.getNumberOfRows());
        f.addRows(r.exportToArray(c, g, h));
        y.draw(f, e)
      });
      l.event.trigger("onChartLoaded", [y, f], !0)
    })
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "SelectionManager.js"...');
jx.grid.SelectionManager = {};
(function() {
  function g(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    this.grid.selMgr = this;
    this._options = i._extend({rowSelKey:this.grid.dataMgr.idKey, bgColorSelection:"#DCEBFE", bgColorLast:"#f1ca7f", bgColorRange:"#D9D9D9", classSelection:"jgrid-selection", classLast:"selection-last", classRange:"selection-range", multiSelectEnabled:!1, classRowSelected:"rowSelected", highlightRowEnabled:!0, bgColorRowSelected:"#d8dfea"}, a.options);
    this._consts = {_UP:1, _DOWN:2, _LEFT:3, _RIGHT:4, _PGDN:5, _PGUP:6, _HOME:7, _END:8, _NAVKEYS:{}};
    this._consts._NAVKEYS = h.which(["enter", "tab", "arrow", "pgdn", "pgup", "home", "end"]);
    this._rows = {length:0};
    this._cols = {length:0};
    this.__init()
  }
  var i = goog.getObjectByName("jx.grid"), h = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var e = goog.getObjectByName("jx.grid.Cell");
  goog.exportSymbol("jx.grid.SelectionManager", g);
  g.getInstance = function(a) {
    return new g(a)
  };
  var b = g.prototype;
  b.__init = function() {
    this.bindEvents()
  };
  b.bindEvents = function() {
    this.grid.event.bind({onAfterSetDatalist:this.empty, onGetCellClass:this._onGetCellClass, onCreateCss:this._onCreateCss, onDestroy:this._destroy, keydownCanvas:this._keydownCanvas, dragoverCanvas:this._dragoverCanvas, mousedownCanvas:this._mousedownCanvas, onBeforeRerender:this._onBeforeRerender, onAfterRerender:this.onAfterRerender, onBeforeDataChange:this.onBeforeDataChange}, this)
  };
  b._destroy = function() {
    i._deleteMap(this._consts, "_NAVKEYS");
    var a, b = this._rows, c = this._cols;
    for(a in b) {
      b.hasOwnProperty(a) && a !== "length" && i._deleteMap(b, a)
    }
    for(a in c) {
      c.hasOwnProperty(a) && a !== "length" && i._deleteMap(c, a)
    }
    i._destroy(this, {name:"SelectionManager", path:"selMgr", map:"_rows _cols _range _last _consts _options"})
  };
  b._onCreateCss = function() {
    var a = this.grid.event.trigger("onBeforeCreateSelCss"), b = "#" + this.grid.mid + " .", c = this._options, a = a || [];
    c.highlightRowEnabled === !0 && a.push(b + c.classRowSelected + " > *{background:" + c.bgColorRowSelected + "}");
    c.multiSelectEnabled === !0 && (a.push(b + c.classSelection + "{background:" + c.bgColorSelection + "}"), a.push(b + c.classRange + "{background:" + c.bgColorRange + "}"));
    a.push(b + c.classLast + "{background:" + c.bgColorLast + "}");
    return a.join("\n")
  };
  b._onGetCellClass = function(a, b, c, d) {
    var j = "", k = this._last, e = this._range, g = this._rows, h = this._options;
    k && k.getDatarow() === c && k.getColDef() === d && (j += h.classLast);
    h.multiSelectEnabled === !0 && (e && e.getDatarow() === c && e.getColDef() === d && (j += " " + h.classRange), g.hasOwnProperty(a) && g[a].hasOwnProperty(b) && (j += " " + h.classSelection));
    return j
  };
  b._mousedownCanvas = function(a, b) {
    if(!this._last || !this._last.equals(b)) {
      this.grid.event.trigger("onBeforeSelect", [a, b], !0), this._options.multiSelectEnabled === !1 ? this.selectCell(b) : a.shiftKey && this._last && this._range ? this.selectRange(b) : a.ctrlKey ? b.getKey() === this._options.rowSelKey ? this.addRow(b) : this.addCell(b) : this.selectCell(b)
    }
  };
  b._dragoverCanvas = function(a, b) {
    this._options.multiSelectEnabled === !1 ? this.selectCell(b) : this._last && this._range && this.selectRange(b)
  };
  b._keydownCanvas = function(a) {
    var b = this._last;
    if(b || this._range) {
      this._consts._NAVKEYS[a.which] && this.selectCell(i.create("Cell", {grid:this.grid, row:this.grid.view._getFirstSafeVisibleRow(), col:this.grid.view._getFirstSafeVisibleCol()}))
    }else {
      var c = this.grid.event;
      if(this._consts._NAVKEYS[a.which]) {
        if(!c.triggerInvalid("onBeforeNavigate", [a])) {
          var d;
          a.preventDefault();
          switch(a.which) {
            case h.keyMapKeydown.tab:
              d = a.shiftKey ? this._idxToCell(this._consts._LEFT, b) : this._idxToCell(this._consts._RIGHT, b);
              this.selectCell(d);
              break;
            case h.keyMapKeydown.enter:
              d = a.shiftKey ? this._idxToCell(this._consts._UP, b) : this._idxToCell(this._consts._DOWN, b);
              this.selectCell(d);
              break;
            case h.keyMapKeydown.up:
              this._options.multiSelectEnabled && a.shiftKey ? (d = this._idxToCell(this._consts._UP, this._range), this.selectRange(d)) : (d = this._idxToCell(this._consts._UP, b), this.selectCell(d));
              break;
            case h.keyMapKeydown.down:
              this._options.multiSelectEnabled && a.shiftKey ? (d = this._idxToCell(this._consts._DOWN, this._range), this.selectRange(d)) : (d = this._idxToCell(this._consts._DOWN, b), this.selectCell(d));
              break;
            case h.keyMapKeydown.left:
              this._options.multiSelectEnabled && a.shiftKey ? (d = this._idxToCell(this._consts._LEFT, this._range), this.selectRange(d)) : (d = this._idxToCell(this._consts._LEFT, b), this.selectCell(d));
              break;
            case h.keyMapKeydown.right:
              this._options.multiSelectEnabled && a.shiftKey ? (d = this._idxToCell(this._consts._RIGHT, this._range), this.selectRange(d)) : (d = this._idxToCell(this._consts._RIGHT, b), this.selectCell(d));
              break;
            case h.keyMapKeydown.pgup:
              this._options.multiSelectEnabled && a.shiftKey ? (d = this._idxToCell(this._consts._PGUP, this._range), this.selectRange(d)) : (d = this._idxToCell(this._consts._PGUP, b), this.selectCell(d));
              break;
            case h.keyMapKeydown.pgdn:
              this._options.multiSelectEnabled && a.shiftKey ? (d = this._idxToCell(this._consts._PGDN, this._range), this.selectRange(d)) : (d = this._idxToCell(this._consts._PGDN, b), this.selectCell(d));
              break;
            case h.keyMapKeydown.space:
              d = a.shiftKey ? this._idxToCell(this._consts._PGUP, b) : this._idxToCell(this._consts._PGDN, b);
              this.selectCell(d);
              break;
            case h.keyMapKeydown.home:
              this._options.multiSelectEnabled && a.shiftKey ? (d = this._idxToCell(this._consts._HOME, this._range), this.selectRange(d)) : (d = this._idxToCell(this._consts._HOME, b), this.selectCell(d));
              break;
            case h.keyMapKeydown.end:
              this._options.multiSelectEnabled && a.shiftKey ? (d = this._idxToCell(this._consts._END, this._range), this.selectRange(d)) : (d = this._idxToCell(this._consts._END, b), this.selectCell(d))
          }
          c.trigger("onAfterNavigate", [d], !0)
        }
      }else {
        if(this._cols.length === 1) {
          var j, k = this.grid.colDefMgr, e, g = this._cols;
          d = a.which;
          var o = [a, null, b];
          for(e in g) {
            if(g.hasOwnProperty(e) && e !== "length") {
              j = k.get(e).key, j = "keydownColSel_" + j, o[1] = g[e], c.trigger(j + "_" + d, o, !0), c.trigger(j, o, !0)
            }
          }
        }
        if(this._rows.length === 1) {
          var n;
          e = this._rows;
          d = a.which;
          o = [a, null, b];
          for(n in e) {
            e.hasOwnProperty(n) && n !== "length" && (o[1] = e[n], c.trigger("keydownRowSel_" + d, o, !0), c.trigger("keydownRowSel", o, !0))
          }
        }
        o = [a, this._rows, this._cols];
        c.trigger("keydownSel_" + a.which, o, !0);
        c.trigger("keydownSel", o, !0)
      }
    }
  };
  b.getCell = function() {
    return this._last || null
  };
  b._isSelected = function(a) {
    return a && this._last && this._last.equals(a)
  };
  e.prototype.isSelected = function() {
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
    return i.create("Cell", {grid:this.grid, row:c[0], col:c[1]})
  };
  b.selectRow = function(a) {
    var b = a.getRowIdx(), c = a.getColIdx();
    this._setRange(b, c, a);
    this._setLast(b, c, a);
    this._setSelMap(this._getRowMap(b, c, a))
  };
  b.selectCell = function(a, b) {
    this.grid.event.trigger("onBeforeSelectCell", [a], !0);
    if(this._options.multiSelectEnabled && a.getKey() === this._options.rowSelKey) {
      this.selectRow(a)
    }else {
      var c = a.getRowIdx(), d = a.getColIdx();
      this._setRange(c, d, a, b);
      this._setLast(c, d, a);
      this._setSelMap(this._getCellMap(c, d, a))
    }
    this.grid.event.trigger("onAfterSelectCell", [a], !0)
  };
  b.onBeforeDataChange = function() {
  };
  b._onBeforeRerender = function() {
    if(this._last) {
      this.toSelect = this._last
    }
    this.empty()
  };
  b.onAfterRerender = function() {
    this.toSelect && (this.selectCell(this.toSelect, !0), this.grid.view.scrollToRowLazy(this.toSelect.getRowIdx()))
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
    var b = a.getRowIdx(), c = a.getColIdx(), d = this._last.getRowIdx(), j = this._last.getColIdx(), e = d < b ? d : b, d = d < b ? b : d, g;
    this._setRange(b, c, a);
    a.getKey() === this._options.rowSelKey ? (g = 0, j = this.grid.colDefMgr.length() - 1) : (g = j < c ? j : c, j = j < c ? c : j);
    this._setSelMap(this._getRangeMap(e, g, d, j, b, c, a));
    return{minRow:e, minCol:g, maxRow:d, maxCol:j}
  };
  b._setLast = function(a, b, c) {
    var b = this._last, d;
    b && (d = b.getRowIdx(), a !== d && this._range && d !== this._range.getRowIdx() && this.grid.view.unlockRowById(b.getId()), b.get$().removeClass(this._options.classLast), this._options.highlightRowEnabled === !0 && $(b.getRowNode()).removeClass(this._options.classRowSelected), c || delete this._last);
    if(c) {
      (this._last = c).get$().addClass(this._options.classLast), this._options.highlightRowEnabled === !0 && $(c.getRowNode()).addClass(this._options.classRowSelected), this.grid.view.lockRowByIdx(a)
    }
  };
  b._setRange = function(a, b, c, d) {
    var j = this._range;
    if(j) {
      var e = j.getRowIdx();
      if(a === e && b === j.getColIdx()) {
        return
      }
      a !== e && this._last && e !== this._last.getRowIdx() && this.grid.view.unlockRowById(j.getId());
      j.get$().removeClass(this._options.classRange);
      c || delete this._range
    }
    if(c) {
      (this._range = c).get$().addClass(this._options.classRange), c = this.grid.view, c.lockRowByIdx(a), d || c.scrollToLazy(a, b)
    }
  };
  b._addSelMap = function(a) {
    var b = this._rows, c, d, j, k;
    for(j in a) {
      if(a.hasOwnProperty(j) && (d = a[j], b.hasOwnProperty(j))) {
        for(k in c = b[j], d) {
          d.hasOwnProperty(k) && c.hasOwnProperty(k) && (d[k] instanceof e && (c[k] = d[k]), delete d[k])
        }
      }
    }
    this.addOrRemoveCss({}, !0);
    this._addToMaps(a)
  };
  b._setSelMap = function(a) {
    var b = this._rows, c, d, j, k, g = {};
    for(j in b) {
      if(b.hasOwnProperty(j) && j !== "length") {
        if(c = b[j], a.hasOwnProperty(j)) {
          for(k in d = a[j], c) {
            c.hasOwnProperty(k) && k !== "length" && (d.hasOwnProperty(k) ? (d[k] instanceof e && (c[k] = d[k]), delete d[k]) : (g.hasOwnProperty(j) || (g[j] = {}), g[j][k] = !0))
          }
        }else {
          for(k in d = g[j] = {}, c) {
            c.hasOwnProperty(k) && k !== "length" && (d[k] = !0)
          }
        }
      }
    }
    this._removeFromMaps(g);
    this.addOrRemoveCss({}, !1);
    this._addSelMap(a)
  };
  b.addOrRemoveCss = function(a, b) {
    var c = [], d, j, k, g = this.grid.view;
    for(d in a) {
      if(a.hasOwnProperty(d)) {
        for(j in k = a[d], k) {
          k.hasOwnProperty(j) && (k[j] instanceof e ? c.push(k[j].getNode()) : c.push(g.getCell(d, j)))
        }
      }
    }
    c = c.filter(function(a) {
      return a
    });
    b ? $(c).addClass(this._options.classSelection) : $(c).removeClass(this._options.classSelection)
  };
  b._addToMaps = function(a) {
    var b, c, d, j = this._rows, e = this._cols, g;
    for(b in a) {
      if(a.hasOwnProperty(b)) {
        for(c in g = a[b], g) {
          g.hasOwnProperty(c) && (d = (d = g[c]) ? !0 : d, j.hasOwnProperty(b) ? j[b].length++ : (j[b] = {length:1}, j.length++), j[b][c] = d, e.hasOwnProperty(c) ? e[c].length++ : (e[c] = {length:1}, e.length++), e[c][b] = d)
        }
      }
    }
  };
  b._removeFromMaps = function(a) {
    var b, c, d = this._rows, j = this._cols, e;
    for(b in a) {
      if(a.hasOwnProperty(b)) {
        for(c in e = a[b], e) {
          e.hasOwnProperty(c) && (--d[b].length === 0 ? (delete d[b], d.length--) : delete d[b][c], --j[c].length === 0 ? (delete j[c], j.length--) : delete j[c][b])
        }
      }
    }
  };
  b._getCellMap = function(a, b, c) {
    var d = {};
    d[a] = {};
    d[a][b] = c;
    return d
  };
  b._getRowMap = function(a, b, c) {
    var d = {}, j = this.grid.colDefMgr.length(), e = 0;
    for(d[a] = {};e < j;e++) {
      d[a][e] = !0
    }
    d[a][b] = c;
    return d
  };
  b._getRangeMap = function(a, b, c, d, j, e, g) {
    for(var h = {}, i;a <= c;a++) {
      h[a] = {};
      for(i = b;i <= d;i++) {
        h[a][i] = !0
      }
    }
    h[j][e] = g;
    return h
  };
  b.empty = function() {
    this._setLast();
    this._setRange();
    this._setSelMap({})
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "EditManager.js"...');
jx.grid.EditManager = {};
jx.grid.Editor = {};
(function() {
  function g(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    this.grid.editMgr = this;
    this._options = h._extend({classEdit:"jgrid-edit", classCellEditable:"jgrid-editable", classCellNotEditable:"jgrid-notEditable", editableBgEnabled:!1, notEditableBgEnabled:!1, editableBg:"#FFF", notEditableBg:"#F6F6F6", deleteEnabled:!1, editIconEnabled:!0, urlEditIcon:this.grid._options.imageUrl + "editable-small.png", classEditIcon:"edit-icon", editIconWidth:12, editIconPadding:3, basicBackground:"#FFF9D7", classSuccess:"edit-success", successBackground:"#cdf7b6", classFailure:"edit-failure", 
    failureBackground:"#ff0000"}, a.options);
    this._beginEditKeys = e.which(["number", "alphabet", "del", "backspace"]);
    this.__init()
  }
  function i(a) {
    for(var b in a) {
      a.hasOwnProperty(b) && (this[b] = a[b])
    }
  }
  var h = goog.getObjectByName("jx.grid"), e = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var b = goog.getObjectByName("jx.grid.Cell");
  goog.exportSymbol("jx.grid.EditManager", g);
  goog.exportSymbol("jx.grid.Editor", i);
  g.getInstance = function(a) {
    return new g(a)
  };
  var a = g.prototype;
  a.__init = function() {
    this.bindEvents()
  };
  a.bindEvents = function() {
    var a = {onGetColCellClass:this._onGetColCellClass, keydownCanvas:this._keydownCanvas, onDestroy:this._destroy, dblclickCanvas:this._dblclickCanvas, onCreateDynamicCss:this.onCreateDynamicCss, "onBeforeNavigate onBeforeRefresh onBeforeSelect":this.commit, onBeforeFocusCanvas:this.notActive};
    e.isNull(this.grid.selMgr) ? a.onCreateCss = this._onBeforeCreateSelCss : a.onBeforeCreateSelCss = this._onBeforeCreateSelCss;
    if(this._options.deleteEnabled) {
      a["keydownSel_" + e.keyMapKeydown.del] = this._deleteContents
    }
    if(this._options.editIconEnabled) {
      for(var b = this.grid.colDefMgr.get(), d = b.length, j = 0;j < d;j++) {
        if(e.isNotNull(b[j].editor)) {
          a["onRenderHeader_" + b[j].key + "_prepend"] = this._onRenderHeader
        }
      }
    }
    this.grid.event.bind(a, this)
  };
  a._destroy = function() {
    this._deleteEditor();
    h._destroy(this, {name:"EditManager", path:"editMgr", map:"_beginEditKeys _options"})
  };
  a._onBeforeCreateSelCss = function() {
    var a = "#" + this.grid.mid + " .", b = this._options, d = [], j = this.grid.view._getRowInnerHeight();
    d.push(this.grid.view._getCellSelector() + "." + b.classEdit + "{background:" + b.basicBackground + "}");
    d.push(a + b.classEdit + " input{position:absolute;z-index:10;top:0;padding:0;border:0;margin:0;background:" + b.basicBackground + ";height:" + j + "px;line-height:" + j + "px}");
    b.editableBgEnabled && d.push(a + b.classCellEditable + "{background:" + b.editableBg + "}");
    b.notEditableBgEnabled && d.push(a + b.classCellNotEditable + "{background:" + b.notEditableBg + "}");
    b.editIconEnabled && d.push(a + b.classEditIcon + "{float:left;position:absolute;left:0;top:0;padding:0 " + b.editIconPadding + "px;width:" + b.editIconWidth + "px;height:" + j + "px;background:url(" + b.urlEditIcon + ") no-repeat center transparent}");
    d.push(a + b.classSuccess + "{background:" + b.successBackground + "}");
    d.push(a + b.classFailure + "{background:" + b.failureBackground + "}");
    return d.join("")
  };
  a.onCreateDynamicCss = function() {
    for(var a = this.grid.view._getCellSelector(), b = this.grid.view._getPadding(), d = this.grid.colDefMgr.get(), j = 0, k = "";j < d.length;j++) {
      e.isNotNull(d[j].editor) && (k += a + ".k_" + d[j].key + " .basic-editor{width:" + (d[j].width - 2 * b) + "px}")
    }
    return k
  };
  a._onRenderHeader = function(a) {
    a.push("<span class='" + this._options.classEditIcon + "'></span>")
  };
  a._onRenderCell = function(a, b, d, j, e) {
    this.grid.dataMgr.isReal(d) && e.push("<span class='" + this._options.classEditIcon + "' title='클릭하여 에디팅을 시작합니다' onclick='JGM.m.EditManager." + this.mid + '.beginEdit("' + d[this.grid.dataMgr.idKey] + '","' + j.key + "\")'></span>")
  };
  a.cancelMouseEvent = function(a) {
    return!e.hasTagAndClass(a.target, "DIV", this._options.classEditIcon)
  };
  a.beginEdit = function(a, b) {
    this.begin(h.create("Cell", {grid:this.grid, datarow:this.grid.dataMgr.getById(a), colDef:this.grid.colDefMgr.getByKey(b)}))
  };
  a._dblclickCanvas = function(a, b) {
    b.isEdited() || this.begin(b)
  };
  a._keydownCanvas = function(a) {
    this.active() ? a.which === e.keyMapKeydown.esc && this.cancel() : !a.ctrlKey && !a.altKey && e.isNotNull(this.grid.selMgr) && (a.which === e.keyMapKeydown.del && this._options.deleteEnabled ? this._deleteContent(this.grid.selMgr.getCell()) : this._beginEditKeys[a.which] ? this.begin(this.grid.selMgr.getCell()) : a.which === e.keyMapKeydown.f2 && (a.preventDefault(), this.begin(this.grid.selMgr.getCell())))
  };
  a.active = function() {
    return!!this.editor
  };
  a.notActive = function() {
    return e.isNull(this.editor)
  };
  a._isEdited = function(a) {
    return this.active() && this.editor.cell && this.editor.cell.equals(a)
  };
  a._onGetColCellClass = function(a) {
    return e.isNotNull(a.editor) ? this._options.classCellEditable : this._options.classCellNotEditable
  };
  b.prototype.isEdited = function() {
    return this.grid.editMgr._isEdited(this)
  };
  b.prototype.setValue = function(a) {
    var b = this.getDatarow(), d = this.getKey(), j;
    e.isNotNullAnd(b, d) && (j = this.grid.dataMgr.updateByKey(b, d, a, {noSort:!0, noFilter:!0, noRerender:!0}), j === !0 && this.grid.view.rerenderRow(b));
    return j
  };
  a.isEditable = function(a) {
    if(a) {
      var b = a.getColDef();
      if(b && b.editor) {
        return(a = a.getDatarow()) && this.grid.dataMgr.isReal(a)
      }
    }
    return!1
  };
  a.begin = function(a) {
    this.active() && this.commit();
    if(this.isEditable(a)) {
      var b = a.getNode();
      if(b) {
        var d = this.editor = a.getColDef().editor;
        d.cell = a;
        d.grid = this.grid;
        d.before = b.innerHTML;
        b.innerHTML = d.edit(a.getValue());
        a.get$().addClass(this._options.classEdit);
        d.focus()
      }
    }
  };
  a.cancel = function() {
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
  a._deleteEditor = function() {
    e.isNotNull(this.editor) && (delete this.editor.grid, delete this.editor.cell, delete this.editor.before, delete this.editor)
  };
  a.commit = function() {
    if(!this._beingCommitted && this.active()) {
      this._beingCommitted = !0;
      var a = this.editor.cell;
      if(a) {
        var b = a.getNode();
        if(b) {
          if(b = this.editor.value(b), b == null || b == a.getValue()) {
            this.cancel()
          }else {
            var b = a.setValue(b), d, j = a.get$();
            b instanceof Error ? (this.cancel(), d = this._options.classFailure) : (this._deleteEditor(), this.grid.view.focus(), this.grid.printMessage("Successfully Updated."), d = this._options.classSuccess);
            j.addClass(d);
            setTimeout(function() {
              j.removeClass(d)
            }, 1E3)
          }
        }
      }
      this._beingCommitted = !1
    }
  };
  a._deleteContent = function(a) {
    if(!this.active() && this.isEditable(a)) {
      var b = a.getColDef();
      a.getValue() !== b.defaultValue && a.setValue(b.defaultValue)
    }
  };
  a._deleteContents = function(a, b, d) {
    if(!this.active()) {
      var a = {}, b = {}, j = [], k, g, h, i, n, m, l;
      a:for(k in d) {
        if(d.hasOwnProperty(k) && k !== "length") {
          for(l in i = h = g = void 0, m = d[k], m) {
            if(m.hasOwnProperty(l) && !(l === "length" || b.hasOwnProperty(l))) {
              n = m[l].cell;
              if(e.isNull(g) && (g = n.getColDef(), h = g.defaultValue, i = g.key, e.isNull(g.editor))) {
                continue a
              }
              n = e.isNotNull(a[l]) ? a[l].datarow : n.getDatarow();
              this.grid.dataMgr.isReal(n) ? h !== n[i] && (e.isNull(a[l]) && (a[l] = {datarow:n, change:{}}, j.push(a[l])), a[l].change[i] = h) : b[l] = !0
            }
          }
        }
      }
      j.length !== 0 && this.grid.dataMgr.updateList(j)
    }
  };
  i.getInstance = function(a) {
    return new i(a)
  };
  a = i.prototype;
  a.edit = function(a) {
    return"<input type='text' class='basic-editor' value='" + (a == null ? "" : a) + "' style='position:relative'/>"
  };
  a.focus = function() {
    var a = this.cell;
    if(a) {
      var b = a.getNode();
      if(b && (b = b.childNodes[0])) {
        if(b.setActive) {
          try {
            b.setActive()
          }catch(d) {
          }
        }
        b.focus();
        document.activeElement !== b && a.get$().children(":eq(0)").focus()
      }
    }
  };
  a.value = function(a) {
    return a && (a = a.childNodes[0]) ? a.value : null
  };
  a.path = function() {
    return"JGM.m.Editor." + this.mid
  };
  i.numberKeys = e.which(["number", "del", "backspace"]);
  i.isNumberKey = function(a) {
    return this.numberKeys[a] ? !0 : !1
  };
  i.numberEdit = function(a) {
    a = a.getValue();
    return"<input type='text' class='basic-editor' onkeydown='if (!jx.grid.Editor.isNumberKey(event.which)) return false;' value='" + e.ifNull(a, "") + "'/>"
  };
  i.floatKeys = e.which(["number", ".", "del", "backspace"]);
  i.isFloatKey = function(a) {
    return this.floatKeys[a] ? !0 : !1
  };
  i.floatEdit = function(a) {
    a = a.getValue();
    return"<input type='text' class='basic-editor' onkeydown='if (!jx.grid.Editor.isFloatKey(event.which)) return false;' value='" + e.ifNull(a, "") + "'/>"
  };
  i.alphabetKeys = e.which(["alphabet", "del", "backspace", "space"]);
  i.isAlphabet = function(a) {
    return this.alphabetKeys[a] ? !0 : !1
  };
  i.alphabetEdit = function(a) {
    a = a.getValue();
    return"<input type='text' class='basic-editor' onkeydown='if (!jx.grid.Editor.isAlphabet(event.which)) return false;' value='" + e.ifNull(a, "") + "'/>"
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "TooltipManager.js"...');
jx.grid.TooltipManager = {};
(function() {
  function g(b) {
    this.mid = b.mid;
    this.grid = b.grid;
    this.grid.tooltip = this;
    this._ctnr = b.container;
    this._options = i._extend({classTooltip:"jgrid-tooltip", tooltipSyncEnabled:!0, offsetX:0, offsetY:18, background:"#F5F5F5", border:"1px solid #868686", padding:"2px 10px", font:"14px Arial,Helvetica,sans-serif", color:"#333"}, b.options);
    this.__init()
  }
  var i = goog.getObjectByName("jx.grid"), h = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.TooltipManager", g);
  g.getInstance = function(b) {
    return new g(b)
  };
  var e = g.prototype;
  e.__init = function() {
    this.grid.event.bind({onCreateCss:this._onCreateCss, onDestroy:this._destroy, mouseoutCanvas:this._mouseoutCanvas, mousemoveCanvas:this._mousemoveCanvas, mouseoverCanvas:this._mouseoverCanvas}, this)
  };
  e._destroy = function() {
    i._destroy(this, {name:"TooltipManager", path:"tooltip", $:"_tooltip", property:"_ctnr", map:"_options"})
  };
  e._onCreateCss = function() {
    var b = this._options, a = [];
    a.push("#" + this.grid.mid + " ." + b.classTooltip + "{position:absolute;z-index:10;background:" + b.background + ";border:" + b.border + ";padding:" + b.padding + ";color:" + b.color + ";font:" + b.font + "}");
    return a.join("")
  };
  e._mouseoutCanvas = function() {
    h.isNotNull(this._tooltip) && (this._ctnr[0].removeChild(this._tooltip[0]), delete this._tooltip)
  };
  e._mousemoveCanvas = function(b) {
    var a = this._options;
    a.tooltipSyncEnabled && h.isNotNull(this._tooltip) && this._tooltip.css({left:b.pageX + a.offsetX + "px", top:b.pageY + a.offsetY + "px"})
  };
  e._mouseoverCanvas = function(b, a) {
    if(a.getColDef().tooltipEnabled && h.isNull(this._tooltip)) {
      var f = this._options, c = document.createElement("div");
      c.innerHTML = "<div class='" + f.classTooltip + "' style='left:" + (b.pageX + f.offsetX) + "px;top:" + (b.pageY + f.offsetY) + "px'>" + a.getValue() + "</div>";
      this._tooltip = $(c.firstChild);
      this._ctnr[0].appendChild(this._tooltip[0])
    }
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "PrintManager.js"...');
jx.grid.PrintManager = {};
(function() {
  function g(b) {
    this.mid = b.mid;
    this._ctnr = Util$.safe$(b.container);
    this.grid = b.grid;
    this._options = i._extend({title:"Print Preview", font:"15px arial,sans-serif", headerFontColor:"#27413E", headerBackgroundColor:"#DCDEDE", tableBorderColor:"#6E7174", headerBorderColor:"#909192", cellBorderColor:"#D0D7E5", winOptions:{name:"Print Preview", width:800, height:600, directories:"no", location:"no", menubar:"no", status:"no", toolbar:"no"}}, b.options);
    this.__init()
  }
  var i = goog.getObjectByName("jx.grid"), h = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.PrintManager", g);
  g.getInstance = function(b) {
    return new g(b)
  };
  var e = g.prototype;
  e.__init = function() {
    var b = this;
    this._ctnr[0].innerHTML = "<button type='button'>Print</button>";
    this._ctnr.click(function() {
      b.print()
    })
  };
  e.print = function() {
    var b = this.getPrintHtml(this.grid.colDefMgr.get(), this.grid.dataMgr.datalist), a = h.open(this._options.winOptions);
    a.document.write(b);
    a.document.close()
  };
  e.getPrintHtml = function(b, a) {
    var f = this._options, c = f.tableBorderColor, d = f.headerBorderColor, j = f.cellBorderColor, e = [], g = b.length, h = g - 1, i = a.length, n = i - 1, m = 0, l;
    e.push("<html><head>");
    e.push("<title>" + f.title + "</title>");
    e.push("</head><body onload='window.print();'>");
    e.push("<table width='100%' cellspacing='0' cellpadding='0'><tbody><tr><td align='left'>");
    e.push("<table width='100%' cellspacing='0' cellpadding='2' style='border-collapse:collapse'>");
    e.push("<tbody style='font:" + f.font + ";'>");
    for(e.push("<tr style='background-color:" + f.headerBackgroundColor + ";color:" + f.headerFontColor + ";text-align:center'>");m < g;m++) {
      e.push("<td style='border:solid 1px " + d + ";'>" + b[m].name + "</td>")
    }
    e.push("</tr>");
    for(m = 0;m < i;m++) {
      f = a[m];
      e.push("<tr>");
      if(m === 0) {
        for(l = 0;l < g;l++) {
          l === 0 ? e.push("<td style='border:solid 1px " + j + ";border-top:solid 1px " + d + ";border-left:solid 1px " + c + "'>" + f[b[l].key] + "</td>") : l === h ? e.push("<td style='border:solid 1px " + j + ";border-top:solid 1px " + d + ";border-right:solid 1px " + c + "'>" + f[b[l].key] + "</td>") : e.push("<td style='border:solid 1px " + j + ";border-top:solid 1px " + d + "'>" + f[b[l].key] + "</td>")
        }
      }else {
        if(m < n) {
          for(l = 0;l < g;l++) {
            l === 0 ? e.push("<td style='border:solid 1px " + j + ";border-left:solid 1px " + c + "'>" + f[b[l].key] + "</td>") : l === h ? e.push("<td style='border:solid 1px " + j + ";border-right:solid 1px " + c + "'>" + f[b[l].key] + "</td>") : e.push("<td style='border:solid 1px " + j + "'>" + f[b[l].key] + "</td>")
          }
        }else {
          for(l = 0;l < g;l++) {
            l === 0 ? e.push("<td style='border:solid 1px " + j + ";border-bottom:solid 1px " + c + ";border-left:solid 1px " + c + "'>" + f[b[l].key] + "</td>") : l === h ? e.push("<td style='border:solid 1px " + j + ";border-bottom:solid 1px " + c + ";border-right:solid 1px " + c + "'>" + f[b[l].key] + "</td>") : e.push("<td style='border:solid 1px " + j + ";border-bottom:solid 1px " + c + "'>" + f[b[l].key] + "</td>")
          }
        }
      }
      e.push("</tr>")
    }
    e.push("</tbody></table></td></tr></tbody></table></body></html>");
    return e.join("")
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "ViewportManager.js"...');
jx.grid.ViewportManager = {};
(function() {
  function g(a) {
    this.mid = a.mid;
    this._ctnr = a.container;
    this.grid = a.grid;
    this.grid.view = this;
    this._options = i._extend({attrRowIdx:"r", appendThreshold:3, renderThreshold:10, bufferSize:6, rowsPerPage:10, rowH:21, borderThickness:1, border:"solid #D0D7E5", padding:0, evenOddRows:!1, oddRowsBackground:"#F4F4F4", style:"", canvasStyle:"", rowStyle:"", cellStyle:"", classRow:"jgrid-row", classCell:"jgrid-cell", classView:"jgrid-viewport", classCanvas:"jgrid-canvas", focusBackground:"#FFF", focusOutline:"2px solid #f1ca7f", autoHeight:!1, autoWidth:!1}, a.options);
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
  var i = goog.getObjectByName("jx.grid"), h = goog.getObjectByName("jx.grid.Grid"), e = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var b = goog.getObjectByName("jx.grid.Cell"), a = {INPUT:!0, TEXTAREA:!0, LABEL:!0, FIELDSET:!0, LEGEND:!0, SELECT:!0, OPTGROUP:!0, OPTION:!0, BUTTON:!0}, f = {checkbox:!0, radio:!0};
  goog.exportSymbol("jx.grid.ViewportManager", g);
  g.getInstance = function(a) {
    return new g(a)
  };
  var c = g.prototype;
  c.__init = function() {
    this._mask = $("<div class='" + this._options.classView + "' tabIndex='0' style='width:100%' onscroll='JGM.m.ViewportManager." + this.mid + "._scroll()'>").appendTo(this._ctnr);
    this._canvas = $("<div class='" + this._options.classCanvas + "'>").appendTo(this._mask);
    this._canvasEl = this._canvas[0];
    this._mask.bind("selectstart.ui", function(a) {
      return $(a.target).is("input, textarea")
    });
    this._setColLefts();
    this._setCanvasWidth(this._calCanvasWidth());
    this._lastRowLen = this._datamgr.datalist.length;
    this._evtmgr.bind({canvasFind:this._canvasFind, onCreateCss:this._onCreateCss, onCreateDynamicCss:this._onCreateDynamicCss, onDestroy:this._onDestroy, keydown:this._keydown, keyup:this._keyup, keypress:this._keypress, mousein:this._mousein, mouseout:this._mouseout, mouseenter:this._mouseenter, mouseleave:this._mouseleave, mousemove:this._mousemove, mouseover:this._mouseover, mousedown:this._mousedown, mouseup:this._mouseup, click:this._click, dblclick:this._dblclick, resizeWidth:this._setWidth, 
    "resizeWidth onResizeCol onResizeCanvasHeight":this._resizeWidth, onAfterRefresh:this.onAfterRefresh, onRenderModules:this._render, changeVisibleColumns:this._onReorderCols, onResizeCanvasWidth:this._scroll, onUpdateDatarow:this.onUpdateDatarow, onUpdateDatalist:this.onUpdateDatalist, onRemoveDatarow:this.onRemoveDatarow, onRemoveDatalist:this.onRemoveDatalist, onIdChange:this.onIdChange, onIdListChange:this.onIdListChange, unsetDrag:this.unsetDrag}, this)
  };
  c.unsetDrag = function() {
    this._drag = !1
  };
  c._onDestroy = function() {
    i._destroy(this, {name:"ViewportManager", path:"view", $:"_canvas _mask", property:"_ctnr", map:"_vars _lockedRows _renderedRows _options"})
  };
  c._onCreateCss = function() {
    var a = "#" + this.grid.mid + " .", b = this._options, c = a + this._cellClass, f = a + this._rowClass, e = b.borderThickness + "px " + b.border, g = f + "[" + this._rowIdxAttr, h = this._colmgr.get(), i = h.length, l = 0, q = [];
    q.push(a + b.classView + "{height:" + this._calHeight() + "px;outline:0;position:relative;white-space:nowrap;overflow:auto;line-height:" + b.rowH + "px;cursor:default;-moz-user-select:none;-webkit-user-select:none;" + b.style + ";}");
    q.push(a + b.classView + ":focus{background:" + b.focusBackground + ";outline:" + b.focusOutline + "}");
    q.push(a + b.classCanvas + "{height:" + this._calCanvasHeight() + "px;" + b.canvasStyle + ";}");
    q.push(f + "{background:white;position:absolute;" + b.rowStyle + "}");
    q.push(c + "{height:" + b.rowH + "px;border-bottom:" + e + ";display:inline-block;white-space:nowrap;overflow:hidden;float:left;text-overflow:ellipsis;padding-left:" + b.padding + "px;border-right:" + e + ";" + b.cellStyle + "}");
    for(b.evenOddRows && q.push(g + "$='1']," + g + "$='3']," + g + "$='5']," + g + "$='7']," + g + "$='9']{background:" + b.oddRowsBackground + "}");l < i;l++) {
      q.push(c + ".k_" + h[l].key + "{" + h[l].style + "}")
    }
    return q.join("")
  };
  c._onCreateDynamicCss = function() {
    var a = "#" + this.grid.mid + " .", b = a + this._cellClass, c = a + this._rowClass;
    a += this._options.classCanvas;
    var f = this._calCanvasWidth(), e = this._colmgr.get(), g = "", h = e.length, i = 0;
    for(g += a + "{width:" + f + "px}" + c + "{width:" + f + "px}";i < h;i++) {
      g += b + ".k_" + e[i].key + "{width:" + e[i].width + "px}"
    }
    return g
  };
  c.onUpdateDatarow = function(a) {
    this.isRendered(a) && this.rerenderRow(a)
  };
  c.onUpdateDatalist = function(a) {
    for(var b, c = a.length, f = 0;f < c;f++) {
      b = a[f], this.isRendered(b) && this.rerenderRow(b)
    }
  };
  c.onRemoveDatarow = function(a) {
    this.destroyRow(a)
  };
  c.onRemoveDatalist = function(a) {
    for(var b = a.length, c = 0;c < b;c++) {
      this.destroyRow(a[c])
    }
  };
  c.onIdChange = function(a, b, c) {
    this.isRowLockedById(b) && (this._lockedRows[c] = this._lockedRows[b], delete this._lockedRows[b]);
    this.isRenderedById(b) && ((this._renderedRows[c] = this._renderedRows[b]).setAttribute("i", c), delete this._renderedRows[b])
  };
  c.onIdListChange = function(a, b, c) {
    for(var f = a.length, e = 0, g = this._lockedRows, h = this._renderedRows, i, l;e < f;e++) {
      i = b[e], l = a[e][c], g.hasOwnProperty(i) && (g[l] = g[i], delete g[i]), h.hasOwnProperty(i) && ((h[l] = h[i]).setAttribute("i", l), delete h[i])
    }
  };
  c._getCellSelector = function() {
    return"#" + this.grid.mid + " ." + this._cellClass
  };
  c._getRowSelector = function() {
    return"#" + this.grid.mid + " ." + this._rowClass
  };
  c.scrollTo = function(a, b) {
    this.scrollToRow(a);
    this.scrollToCol(b)
  };
  c.scrollToRowLazy = function(a) {
    var b = this.getScrollTop();
    return a == null ? b : this._getLastSafeVisibleRow() < a ? this.scrollToRow(this._getFirstRowForSafe(a)) : this._getFirstSafeVisibleRow() > a ? this.scrollToRow(a) : b
  };
  c.scrollToColLazy = function(a) {
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
  c.scrollToLazy = function(a, b) {
    this.scrollToRowLazy(a);
    this.scrollToColLazy(b)
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
    return this._getRowOuterHeight() * this._datamgr.datalist.length || 1
  };
  c.getCanvasHeight = function() {
    return this._canvasEl.clientHeight
  };
  c._setCanvasHeight = function(a) {
    a = parseInt(a, 10);
    if(isNaN(a) || a < 1) {
      a = 1
    }
    var b = this.getCanvasHeight();
    if(a != b) {
      this._canvasEl.style.height = a + "px", this._evtmgr.trigger("onResizeCanvasHeight", [a, b], !0)
    }
  };
  c._calCanvasWidth = function() {
    return this._colLefts[this._colmgr.length()]
  };
  c.getCanvasWidth = function() {
    return this._canvasEl.clientWidth
  };
  c._setCanvasWidth = function(a) {
    typeof a != "number" && (a = parseInt(a, 10));
    if(isFinite(a) && !(a < 1)) {
      var b = this.getCanvasWidth();
      if(a != b) {
        this.grid.log("set canvas width. " + b + "->" + a, h.V_RESIZE), this._canvasEl.style.width = a + "px", this._evtmgr.trigger("onResizeCanvasWidth", [a, b], !0)
      }
    }
  };
  c.getColLeft = function(a) {
    return this._colLefts[a]
  };
  c._getColLefts = function() {
    return this._colLefts
  };
  c._setColLefts = function(a, b) {
    for(var a = a || 0, c = this._colmgr.get(), f = this._colWidthPlus(), b = b || c.length;a < b;a++) {
      this._colLefts[a + 1] = this._colLefts[a] + c[a].width + f
    }
    return this._colLefts
  };
  c._onReorderCols = function() {
    this._setColLefts();
    this._rerender()
  };
  c.setWidthByKey = function(a, b) {
    var c = this._colmgr.getByKey(a), b = e.bound(b, c.minW, c.maxW);
    if(b !== c.width) {
      this.grid.log("set column width. key=" + a + ", w=" + b, h.V_RESIZE);
      var f = this._evtmgr, g = this._colmgr, i = [a, b, c.width];
      c.width = b;
      this._setCanvasWidth(this._setColLefts(g.getIdxByKey(a))[g.length()]);
      this.grid._recreateDynamicCss();
      f.trigger("onResizeCol_" + a, i, !0);
      f.trigger("onResizeCol", i, !0)
    }
  };
  c._autoColWidth = function(a) {
    for(var b = this._canvasFind(".k_" + a), c = Number.MIN_VALUE, f = b.length, e = 0;e < f;e++) {
      if(c < b[e].scrollWidth) {
        c = b[e].scrollWidth
      }
    }
    c -= this._getPadding();
    this.setWidthByKey(a, c)
  };
  c._setWidth = function() {
  };
  c.getScrollTop = function() {
    return this._mask[0].scrollTop
  };
  c.getScrollLeft = function() {
    return this._mask[0].scrollLeft
  };
  c.setScrollTop = function(a) {
    var b = this.getScrollTop();
    return a != null && b != a ? this._mask[0].scrollTop = a : b
  };
  c.setScrollLeft = function(a) {
    var b = this.getScrollLeft();
    return a != null && b != a ? this._mask[0].scrollLeft = a : b
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
    for(var a = this.getScrollLeft(), b = this._colLefts, c = 0, f = b.length;c < f;c++) {
      if(b[c] > a) {
        return c - 1
      }
      if(b[c] === a) {
        return c
      }
    }
    return f - 2
  };
  c._getFirstSafeVisibleCol = function() {
    for(var a = this.getScrollLeft(), b = this._colLefts, c = 0, f = b.length;c < f;c++) {
      if(b[c] >= a) {
        return c
      }
    }
    return f - 2
  };
  c._getLastVisibleCol = function() {
    for(var a = this.getScrollLeft() + this._mask[0].clientWidth, b = this._colLefts, c = 0, f = b.length;c < f;c++) {
      if(b[c] >= a) {
        return c - 1
      }
    }
    return f - 2
  };
  c._getLastSafeVisibleCol = function() {
    for(var a = this.getScrollLeft() + this._mask[0].clientWidth, b = this._colLefts, c = 0, f = b.length;c < f;c++) {
      if(b[c] > a) {
        return c - 2
      }
    }
    return f - 2
  };
  c._getFirstColForSafe = function(a) {
    var b = this._colLefts, c = b[a + 1] - this._mask[0].clientWidth, f = a;
    if(c <= 0) {
      return 0
    }
    for(;f >= 0;f--) {
      if(f === a && b[f] <= c || b[f] === c) {
        return f
      }
      if(b[f] < c) {
        return f + 1
      }
    }
    return 0
  };
  c.getScrollHForSafe = function(a) {
    var b = this._colLefts, c = b[a + 1] - this._mask[0].clientWidth;
    return b[a] <= c ? b[a] : c
  };
  c._getRenderRange = function() {
    if(this._options.autoHeight) {
      return{start:0, end:this._datamgr.datalist.length - 1}
    }
    var a, b = this._datamgr.datalist.length - 1;
    return{start:(a = this._getFirstVisibleRow() - this._options.bufferSize) < 0 ? 0 : a, end:(a = this._getLastVisibleRow() + this._options.bufferSize) > b ? b : a}
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
  c._render = function(a) {
    this._removeAndRenderRows(a)
  };
  c._renderShift = function(a) {
    a = a || this._getRenderRange();
    this._removeRowsExcept(a);
    this._appendRows(a)
  };
  c._removeRows = function(a) {
    var b = this._canvasEl, c = this._renderedRows, f = this._lockedRows, e;
    if(a) {
      for(var g = a.start, a = a.end, h = this._datamgr;g <= a;g++) {
        if(!f.hasOwnProperty(e = h.getIdByIdx(g)) && c.hasOwnProperty(e)) {
          b.removeChild(c[e]), delete c[e]
        }
      }
    }else {
      if(this._lockExist()) {
        for(e in c) {
          c.hasOwnProperty(e) && f.hasOwnProperty(e) && (b.removeChild(c[e]), delete c[e])
        }
      }else {
        this._renderedRows = {}, b.innerHTML = ""
      }
    }
  };
  c._removeRowsExcept = function(a) {
    var b = this._canvasEl, c = this._renderedRows, f = this._lockedRows, e;
    if(a) {
      var g = a.start, a = a.end, h = this._datamgr, i;
      for(e in c) {
        if(c.hasOwnProperty(e) && !(f.hasOwnProperty(e) || g <= (i = h.getIdxById(e)) && i <= a)) {
          b.removeChild(c[e]), delete c[e]
        }
      }
    }else {
      if(this._lockExist()) {
        for(e in c) {
          c.hasOwnProperty(e) && f.hasOwnProperty(e) === !1 && (b.removeChild(c[e]), delete c[e])
        }
      }else {
        this._renderedRows = {}, b.innerHTML = ""
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
    return e.isNotEmptyObj(this._lockedRows)
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
      var b = this._renderedRows, c = this._canvasEl, f = this._datamgr, g = f.idKey, h = f.getIdxById(a), f = f.getById(a), i = this._colmgr.get(), m = this._getColCellClasses(i).map(function(a) {
        return"<div class='" + a + " "
      }), l = this._getRendererSettings(i), q = l[0], l = l[1], r = this._getRowOuterHeight(), t = "<div class='" + this._rowClass + "' i='", u = "' " + this._rowIdxAttr + "='", v = [];
      b.hasOwnProperty(a) && (c.removeChild(b[a]), this._evtmgr.trigger("onBeforeRenderRows", [[h]], !0), v.push(t + f[g] + u + h + "' style='top:" + r * h + "px'>"), this._renderRow(v, h, f, i, m, q, l), b[a] = e.appendHTML(c, v.join(""))[0], this._evtmgr.trigger("onAppendRows", [[h]], !0))
    }
  };
  c._getRendererSettings = function(a) {
    for(var a = a || this._colmgr.get(), b = 0, c = a.length, f, e = [], g = [], h;b < c;b++) {
      f = a[b], (h = f.renderer) ? (e.push(!!f.rendererInput), g.push(h)) : (e.push(!1), g.push(!1))
    }
    return[g, e]
  };
  c.rerenderRow = function(a) {
    return this.rerenderRowById(this._datamgr.getId(a))
  };
  c.rerenderRowByIdx = function(a) {
    return this.rerenderRowById(this._datamgr.getIdByIdx(a))
  };
  c.rerenderCellByIdAndKey = function(a, b) {
    var c = this.getCellByIdAndKey(a, b);
    if(c) {
      var f = this._datamgr, e = this._colmgr, g = f.getById(a), h = e.getByKey(b), f = f.getIdxById(a), e = e.getIdxByKey(b), i = h.renderer, l = i ? h.rendererInput : !1, q = [];
      i ? l ? this._renderCell(q, f, e, g, h, i, !0) : this._renderCell(q, f, e, g, h, i) : this._renderCell(q, f, e, g, h);
      c.innerHTML = q.join("")
    }
  };
  c.rerenderCellByIdx = function(a, b) {
    return this.rerenderCellByIdAndKey(this._datamgr.getIdByIdx(a), this._colmgr.getKeyByIdx(b))
  };
  c._appendRows = function(a) {
    var b = this._evtmgr, c = [a], f = [], g = a.start, a = a.end, h = this._datamgr, i = h.datalist, m = h.idKey, l = this._colmgr.get(), q = this._getColCellClasses(l).map(function(a) {
      return"<div class='" + a + " "
    }), h = this._renderedRows, r = this._getRowOuterHeight(), t = this._canvasEl, u = "<div class='" + this._rowClass + "' i='", v = "' " + this._rowIdxAttr + "='", x = this._getRendererSettings(l), z = x[0], A = x[1], w, y, x = [];
    b.trigger("onBeforeRenderRows", c, !0);
    for(this.grid.twstart();g <= a;g++) {
      w = i[g], y = w[m], h.hasOwnProperty(y) || (f[f.length] = u + y + v + g + "' style='top:" + r * g + "px'>", this._renderRow(f, g, w, l, q, z, A), this.grid.twlap(), x.push(y))
    }
    this.grid.twprint();
    this.grid.twstop();
    f = e.appendHTML(t, f.join(""));
    g = 0;
    for(a = x.length;g < a;g++) {
      h[x[g]] = f[g]
    }
    b.trigger("onAppendRows", c, !0)
  };
  c._removeAndRenderRows = function(a) {
    var a = a || this._getRenderRange(), b = this._evtmgr, c = [a], f = [], e = a.start, a = a.end, g = this._datamgr, h = g.datalist, g = g.idKey, i = this._colmgr.get(), l = this._getColCellClasses(i).map(function(a) {
      return"<div class='" + a + " "
    }), q = this._getRowOuterHeight(), r = this._canvasEl, t = "<div class='" + this._rowClass + "' i='", u = "' " + this._rowIdxAttr + "='", v = this._getRendererSettings(i), x = v[0], v = v[1], z, A, w = [], y = {};
    b.trigger("onBeforeRenderRows", c, !0);
    for(this.grid.twstart();e <= a;e++) {
      z = h[e], A = z[g], f[f.length] = t + A + u + e + "' style='top:" + q * e + "px'>", this._renderRow(f, e, z, i, l, x, v), this.grid.twlap(), w.push(A)
    }
    this.grid.twprint();
    this.grid.twstop();
    r.innerHTML = f.join("");
    e = 0;
    for(a = w.length;e < a;e++) {
      y[w[e]] = r.childNodes[e]
    }
    this._renderedRows = y;
    b.trigger("onAppendRows", c, !0)
  };
  c._renderColumn = function(a, c, f, e, g, h, i) {
    for(var m = [], l, q = 0, r = f.length, t, u, v, x = c.key, z, A = this.grid, w = this._evtmgr, y = "onRenderCell_" + x, C = [null, a, u, c], B = [null, a, null, c, null];q < r;q++) {
      t = f[q];
      u = e[t];
      v = u[x];
      l = [];
      B[0] = C[0] = t;
      B[2] = u;
      B[4] = l;
      z = w.trigger("onGetCellClass", C);
      l[l.length] = z ? g + z.join(" ") + "'>" : g + "'>";
      w.trigger(y + "_prepend", B, !0);
      if(typeof v != "string" || v.substring(0, 3) !== "J@H") {
        h ? l[l.length] = i ? h(new b({grid:A, row:t, col:a, datarow:u, colDef:c})) : h(v, t, a, u, c) : v != null && (l[l.length] = v)
      }
      w.trigger(y + "_append", B, !0);
      l[l.length] = "</div>";
      m[m.length] = l.join("")
    }
    return m
  };
  c._getColCellClass = function(a) {
    var b = this._cellClass + " k_" + a.key;
    a.colClass && (b += " " + a.colClass);
    (a = this._evtmgr.trigger("onGetColCellClass", [a])) && (b += " " + a.join(" "));
    return b
  };
  c._getColCellClasses = function(a) {
    for(var a = a || this._colmgr.get(), b = [], c = 0, f = a.length;c < f;c++) {
      b.push(this._getColCellClass(a[c]))
    }
    return b
  };
  c._renderRow = function(a, b, c, f, e, g, h) {
    for(var i = 0, l = f.length, q, r = [b, null, c, null], t = this._evtmgr, u, v;i < l;i++) {
      q = f[i], r[1] = i, r[3] = q, u = t.trigger("onGetCellClass", r), a[a.length] = u ? e[i] + u.join(" ") + "'>" : e[i] + "'>", (v = g[i]) ? h[i] ? this._renderCell(a, b, i, c, q, v, !0) : this._renderCell(a, b, i, c, q, v) : this._renderCell(a, b, i, c, q), a[a.length] = "</div>"
    }
    a[a.length] = "</div>";
    return a
  };
  c._renderCell = function(a, c, f, e, g) {
    var h = g.key, i = e[h], m = [c, f, e, g, a], l = this._evtmgr, h = "onRenderCell_" + h;
    l.trigger(h + "_prepend", m, !0);
    if(typeof i != "string" || i.substring(0, 3) !== "J@H") {
      arguments.length > 5 ? a[a.length] = arguments[6] ? arguments[5](new b({grid:this.grid, row:c, col:f, datarow:e, colDef:g})) : arguments[5](i, c, f, e, g) : i != null && (a[a.length] = i)
    }
    l.trigger(h + "_append", m, !0)
  };
  b.prototype.rerender = function() {
    return this.grid.view.rerenderCellByIdAndKey(this.getId(), this.getKey())
  };
  b.prototype.scrollTo = function() {
    this.grid.view.scrollTo(this.getRowIdx(), this.getColIdx())
  };
  c._keydown = function(a) {
    e.contains(this._mask[0], document.activeElement, this._ctnr[0]) && (this.grid.log("UI event:keydown on Viewport. event=" + a.type + ", keycode=" + a.which, h.V_KEYDOWN), this._evtmgr.trigger("keydownCanvas_" + a.which, [a], !0), this._evtmgr.trigger("keydownCanvas", [a], !0))
  };
  c._keyup = function(a) {
    e.contains(this._mask[0], document.activeElement, this._ctnr[0]) && (this.grid.log("UI event:keyup on Viewport. event=" + a.type + ", keycode=" + a.which, h.V_KEYUP), this._evtmgr.trigger("keyupCanvas_" + a.which, [a], !0), this._evtmgr.trigger("keyupCanvas", [a], !0))
  };
  c._keypress = function(a) {
    e.contains(this._mask[0], document.activeElement, this._ctnr[0]) && (this.grid.log("UI event:keypress on Viewport. event=" + a.type + ", keycode=" + a.which, h.V_KEYPRESS), this._evtmgr.trigger("keypressCanvas_" + a.which, [a], !0), this._evtmgr.trigger("keypressCanvas", [a], !0))
  };
  c._mousein = function(a) {
    this._drag ? this._triggerMouseEvent(a, "draginCanvas,mouseinCanvas", h.V_MOUSEIN) : this._triggerMouseEvent(a, "mouseinCanvas", h.V_MOUSEIN)
  };
  c._mouseout = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragoutCanvas,mouseoutCanvas", h.V_MOUSEOUT) : this._triggerMouseEvent(a, "mouseoutCanvas", h.V_MOUSEOUT)
  };
  c._mouseenter = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragenterCanvas,mouseenterCanvas", h.V_MOUSEENTER) : this._triggerMouseEvent(a, "mouseenterCanvas", h.V_MOUSEENTER)
  };
  c._mouseleave = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragleaveCanvas,mouseleaveCanvas", h.V_MOUSELEAVE) : this._triggerMouseEvent(a, "mouseleaveCanvas", h.V_MOUSELEAVE)
  };
  c._mousemove = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragmoveCanvas,mousemoveCanvas", h.V_MOUSEMOVE) : this._triggerMouseEvent(a, "mousemoveCanvas", h.V_MOUSEMOVE)
  };
  c._mouseover = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragoverCanvas,mouseoverCanvas", h.V_MOUSEOVER) : this._triggerMouseEvent(a, "mouseoverCanvas", h.V_MOUSEOVER)
  };
  c._mousedown = function(a) {
    if(this._triggerMouseEvent(a, "mousedownCanvas", h.V_MOUSEDOWN)) {
      this._drag = !0
    }
  };
  c._mouseup = function(a) {
    this._drag = !1;
    this._triggerMouseEvent(a, "mouseupCanvas", h.V_MOUSEUP)
  };
  c._click = function(a) {
    this._triggerMouseEvent(a, "clickCanvas", h.V_CLICK) && this.focus(a)
  };
  c._dblclick = function(a) {
    this._triggerMouseEvent(a, "dblclickCanvas", h.V_DBLCLICK)
  };
  c._triggerMouseEvent = function(c, e, g) {
    var h = c.target;
    if(h) {
      var i = h.tagName, h = h.type && h.type.toLowerCase();
      if(f[h] || !a[i]) {
        if(i = this._getClosestCell(c.target)) {
          this.grid.log("UI event:" + e + " on Viewport. event=" + c.type, g);
          i = new b({grid:this.grid, node:i});
          g = i.getKey();
          c = [c, i];
          i = this._evtmgr;
          if(e.indexOf(",") > -1) {
            for(var e = e.split(","), h = 0, o = e.length, n;h < o;h++) {
              n = e[h], i.trigger(n + "_" + g, c, !0), i.trigger(n, c, !0)
            }
          }else {
            i.trigger(e + "_" + g, c, !0), i.trigger(e, c, !0)
          }
          return!0
        }
      }
    }
    return!1
  };
  c._scroll = function() {
    var a = this.getScrollTop(), b = a - this._lastScrollTop, c = this.getScrollLeft(), f = c - this._lastScrollLeft;
    if(b !== 0 || f !== 0) {
      this.grid.log("Viewport scrolled... h=" + f + ", v=" + b, h.V_SCROLL);
      var e = this._evtmgr, b = Math.abs(b / this._getRowOuterHeight());
      e.trigger("onScrollViewport", !1, !0);
      if(f) {
        this._lastScrollLeft = c, e.trigger("onScrollViewportH", [c], !0)
      }
      c = this.renderElapsed;
      c == null && (c = 50);
      c > 500 && (c = 500);
      if(b >= this._options.appendThreshold) {
        if(this.scrollHandlerId) {
          window.clearTimeout(this.scrollHandlerId), this.scrollHandlerId = null
        }
        var g = this;
        this.scrollHandlerId = window.setTimeout(function() {
          var b = (new Date).getTime();
          g._lastScrollTop = a;
          g._removeAndRenderRows();
          e.trigger("onScrollViewportV", !1, !0);
          g.renderElapsed = (new Date).getTime() - b
        }, c)
      }
    }
  };
  c.focus = function(a) {
    if(!a || !this._evtmgr.triggerInvalid("onBeforeFocusCanvas", [a])) {
      if(a = this._mask[0], document.activeElement !== a) {
        this.grid.log("focusing canvas...", h.V_FOCUS);
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
    return e.toArray(this._renderedRows)
  };
  c.getCell = function(a, b) {
    if(b != null) {
      var c = this.getRowByIdx(a);
      if(c) {
        return c.childNodes[b]
      }
    }
  };
  c.getCellByIdAndKey = function(a, b) {
    var c = this._colmgr.getIdxByKey(b);
    if(c != null) {
      var f = this.getRowById(a);
      if(f) {
        return f.childNodes[c]
      }
    }
  };
  c.getRenderedCell = function(a, b) {
    if(b != null) {
      var c = this.getRenderedRowByIdx(a);
      if(c) {
        return c.childNodes[b]
      }
    }
  };
  c.getRenderedCellByIdAndKey = function(a, b) {
    var c = this._colmgr.getIdxByKey(b);
    if(c != null) {
      var f = this.getRenderedRowById(a);
      if(f) {
        return f.childNodes[c]
      }
    }
  };
  c._getClosestCell = function(a) {
    return e.closestWithTag(a, "DIV", this._cellClass, this._canvasEl)
  };
  c._getClosestRow = function(a) {
    return e.closestWithTag(a, "DIV", this._rowClass, this._canvasEl)
  };
  c._getClosestRowIdx = function(a) {
    return this._datamgr.getIdxByNode(this._getClosestRow(a))
  };
  c._canvasFind = function(a) {
    return this._canvas.find(a)
  };
  g._renderer = function(a) {
    return a == null ? "" : a
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "ColumnManager.js"...');
jx.grid.ColumnManager = {};
(function() {
  function g(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    this.grid.colDefMgr = this;
    this._options = c._extend({colDef:{type:"string", key:void 0, name:"", colClass:void 0, defaultValue:void 0, inputOnCreate:void 0, style:"", headerStyle:"", width:80, minW:0, maxW:void 0, editor:void 0, sorter:void 0, hidden:!1, sumRenderer:void 0, tooltipEnabled:!1, resizable:!1, renderer:void 0, rendererInput:!1, noTitle:!1, noName:!1, title:void 0, noSearch:!1, filter:void 0, parser:void 0, validator:void 0, nullOnCreate:!1, notNull:!1}}, a.options);
    this._colDefs = [];
    this._filtered = [];
    this._keyToDef = {};
    this._keyToIdx = {};
    this._parsers = {};
    this._sorters = {};
    this._validators = {};
    this._nullOnCreates = {};
    this._groupsByName = this._groups = null;
    this.__init(a)
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
  function e(a) {
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
  function f(a) {
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
  var c = goog.getObjectByName("jx.grid"), d = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.getObjectByName("jx.grid.Column");
  goog.getObjectByName("jx.grid.ViewportManager");
  goog.exportSymbol("jx.grid.ColumnManager", g);
  g.getInstance = function(a) {
    return new g(a)
  };
  var j = g.prototype;
  j.__init = function(a) {
    this.grid.event.bind("onDestroy", this._destroy, this);
    this.set(a.colDefs)
  };
  j._destroy = function() {
    c._destroy(this, {name:"ColumnManager", path:"colDefMgr", property:"_colDefs", map:"_keyToIdx _keyToDef _options", array:"_filtered"})
  };
  j.getAll = function() {
    return this._colDefs
  };
  j.empty = function() {
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
  j.set = function(a) {
    a = a || [];
    if(this._colDefs === a) {
      return a
    }
    this.empty();
    this.eventChangeVisible();
    var b = 0, c = a.length, d, f, e = a.some(function(a) {
      return a.parent != null
    });
    if(e) {
      var g = this._groups = [], j = this._groupsByName = {}
    }
    for(;b < c;b++) {
      d = a[b];
      f = d.key;
      try {
        if(this.hasKey(f, !0)) {
          throw Error("duplicate column key, key = " + f);
        }
      }catch(h) {
        throw this.empty(), h;
      }
      if(e) {
        f = d.parent = d.parent == null ? d.name || d.key : d.parent, j.hasOwnProperty(f) || g.push(j[f] = []), j[f].push(d)
      }
      this._extend(d)
    }
    if(e) {
      b = 0;
      c = g.length;
      for(a = [];b < c;b++) {
        j = g[b];
        d = 0;
        for(e = j.length;d < e;d++) {
          a.push(j[d])
        }
      }
    }
    this._colDefs = a;
    this._filter();
    this.eventChangeVisible();
    return a
  };
  j.reorganizeGroups = function() {
    if(this.hasGroups()) {
      for(var a = this._colDefs, b = 0, c = a.length, d, f = this._groups = [], e = this._groupsByName = {}, g;b < c;b++) {
        d = a[b], g = d.parent = d.parent == null ? d.name || d.key : d.parent, e.hasOwnProperty(g) || f.push(e[g] = []), e[g].push(d)
      }
      b = 0;
      c = f.length;
      for(colDefs = [];b < c;b++) {
        e = f[b];
        a = 0;
        for(d = e.length;a < d;a++) {
          colDefs.push(e[a])
        }
      }
      this._colDefs = colDefs
    }
  };
  j.hasGroups = function() {
    return!!this._groups
  };
  j.getGroups = function() {
    return this._groups
  };
  j.getGroupByName = function(a) {
    if(a != null && this._groupsByName && this._groupsByName.hasOwnProperty(a)) {
      return this._groupsByName[a]
    }
  };
  j.getGroupByGroupIdx = function(a) {
    return this._groups[a]
  };
  j.getGroupIndexByKey = function(a) {
    var b = this._groups;
    if(b) {
      for(var c = 0, d = b.length, f, e, g;c < d;c++) {
        f = b[c];
        e = 0;
        for(g = f.length;e < g;e++) {
          if(f[e].key == a) {
            return c
          }
        }
      }
    }
    return null
  };
  j.getSorter = function(a) {
    if(a == null) {
      return this._sorters
    }
    if(this.hasKey(a, !0)) {
      var b = this._sorters;
      return b.hasOwnProperty(a) ? b[a] : null
    }
    throw Error("column key not found! key=" + a);
  };
  j.getValidator = function(a) {
    if(a == null) {
      return this._validators
    }
    if(this.hasKey(a, !0)) {
      var b = this._validators;
      return b.hasOwnProperty(a) ? b[a] : null
    }
    throw Error("column key not found! key=" + a);
  };
  j.getParser = function(a) {
    if(a == null) {
      return this._parsers
    }
    if(this.hasKey(a, !0)) {
      var b = this._parsers;
      return b.hasOwnProperty(a) ? b[a] : null
    }
    throw Error("column key not found! key=" + a);
  };
  j.getNullOnCreate = function(a) {
    if(a == null) {
      return this._nullOnCreates
    }
    if(this.hasKey(a, !0)) {
      return this._nullOnCreates.hasOwnProperty(a)
    }
    throw Error("column key not found! key=" + a);
  };
  j.push = function(a) {
    return this.addAt(this._filtered.length, a)
  };
  j.addAt = function(a, b) {
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
  j._extend = function(a) {
    if(a && !a._extended) {
      a._extended = !0;
      var c = {}, d, f;
      $.extend(!0, c, this._options.colDef);
      $.extend(!0, c, a);
      $.extend(!0, a, c);
      f = a.type = i(a.type);
      c = a.key.toString();
      this._keyToDef[c] = a;
      if(d = a.sorter) {
        typeof d == "string" ? d = i(d) : f && (d = f);
        if(d = g.sorter(d, c)) {
          d.key = c, this._sorters[c] = d
        }
        a.sorter = d
      }
      if(d = a.parser) {
        if(f && typeof d != "function") {
          switch(f) {
            case "boolean":
              d = h;
              break;
            case "int":
              d = function(a) {
                return parseInt(a, 10)
              };
              break;
            case "float":
              d = parseFloat;
              break;
            case "string":
              d = e;
              break;
            case "date":
              d = b;
              break;
            default:
              d = null
          }
          a.parser = d
        }
        this._parsers[c] = d
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
      if(f = a.validator) {
        this._validators[c] = f
      }
      a.nullOnCreate && (this._nullOnCreates[c] = !0)
    }
    return a
  };
  j.setVisible = function(a, b) {
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
  j.show = function(a) {
    return this.setVisible(a, !0)
  };
  j.hide = function(a) {
    return this.setVisible(a, !1)
  };
  j._filter = function() {
    this._filtered = this._colDefs.filter(function(a) {
      return!a.hidden
    });
    this._reidx();
    return this._filtered
  };
  j._reidx = function(a) {
    for(var a = a || 0, b = this._filtered, c = b.length, d = this._keyToIdx = {};a < c;a++) {
      d[b[a].key] = a
    }
    return d
  };
  j.get = function(a) {
    if(a == null) {
      return this._filtered
    }
    var b = this._filtered;
    if(a < 0 || a >= b.length) {
      throw Error("index out of bound, i = " + a);
    }
    return this._filtered[a]
  };
  j.checkKey = function(a, b) {
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
  j.mapKeys = function(a) {
    var b = this;
    return a.map(function(a) {
      var c = b.getByKey(a, !0);
      if(!c) {
        throw Error("column key not found! key=" + a);
      }
      return c
    })
  };
  j.getByKey = function(a, b) {
    return this.hasKey(a, b) ? this._keyToDef[a] : null
  };
  j.hasKey = function(a, b) {
    return this.checkKey(a, b) ? this._keyToDef.hasOwnProperty(a) : !1
  };
  j.length = function() {
    return this._filtered.length
  };
  j.getIdxByKey = function(a) {
    return this._keyToIdx.hasOwnProperty(a) ? this._keyToIdx[a] : -1
  };
  j.getIdx = function(a) {
    return d.isNotNull(a) && this._keyToIdx.hasOwnProperty(a.key) ? this._keyToIdx[a.key] : -1
  };
  j.sortByKey = function(a) {
    var b = this._filtered, c = this._keyToIdx = {};
    b.length = 0;
    this.grid.event.trigger("onReorderCols", [this.mapKeys(a).forEach(function(a, d) {
      a.hidden || (b.push(a), c[a.key] = d)
    })], !0);
    this.eventChangeVisible();
    return b
  };
  j.eventChangeVisible = function() {
    this.grid.event.trigger("changeVisibleColumns", [this._filtered])
  };
  j.getKeys = function() {
    return this._filtered.map(function(a) {
      return a.key
    })
  };
  g.sorter = function(b, c, d) {
    d = {on:!!d, key:c};
    switch(b) {
      case "boolean":
        return d.comparator = function(a, b) {
          return f(a[c]) - f(b[c])
        }, d;
      case "string":
        return d.lexi = c, d;
      case "int":
        return d.comparator = function(b, d) {
          return a(b[c], "toInt") - a(d[c], "toInt")
        }, d;
      case "float":
        return d.comparator = function(b, d) {
          return a(b[c], "toFloat") - a(d[c], "toFloat")
        }, d;
      case "date":
        return d.comparator = function(b, d) {
          return a(b[c], "toInt") - a(d[c], "toInt")
        }, d
    }
    return null
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "MenuBar.js"...');
jx.grid.MenuBar = {};
(function() {
  function g(a) {
    e.call(this, a);
    this.grid.menubar = this;
    this.columnWidths = {}
  }
  var i = goog.getObjectByName("jx.grid"), h = goog.getObjectByName("jx.util"), e = goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.MenuBar", g);
  goog.inherits(g, e);
  g.getInstance = function(a) {
    return new g(a)
  };
  var b = g.prototype;
  b._defaultOptions = function() {
    var a = this.grid._options.imageUrl;
    return{background:"url(" + a + "menubar-bg.png) repeat-x scroll center", borderThickness:1, border:"solid #b6bac0", height:27, classMenuBar:"menubar", classIcon:"menu-icon", classColumnToggleIcon:"jgrid-column-toggle-icon", columnIconUrl:a + "data-creator-icon.png", columnIconWidth:15, columnIconHeight:15, iconBorderThickness:1, iconBorder:"solid transparent", iconBorderHover:"solid #d4d4d4", iconBorderActive:"solid #9a9a9a", iconMargin:2, iconBackground:"", iconBackgroundHover:"url(" + a + "menu-icon-hover.png) repeat-x scroll center", 
    iconBackgroundActive:"url(" + a + "menu-icon-active.png) repeat-x scroll center", iconHeight:21, iconWidth:21, iconBorderRadius:4, iconBorderFocus:"solid #5f5f5f"}
  };
  b._init = function(a) {
    var b = this._options;
    this._ctnr = a.container;
    this._menubar = $("<div class='" + b.classMenuBar + "'></div>").prependTo(this._ctnr);
    for(var a = h.element, c = h.input, d = h.SAFE, e = this.getColumns(), g = 0, i = e.length, p = "", o = this.mid, n, m, l;g < i;g++) {
      n = e[g], m = n.key, l = o + "-toggle-column-" + m, p += a("label", {"for":l}, a("li", {"class":n.hidden ? "unchecked" : null}, c("checkbox", {id:l, checked:!n.hidden, onclick:"JGM.m.MenuBar." + o + ".toggleColumn('" + m + "', this.checked, this)"}) + n.name, d), d)
    }
    var q = this.ul = $(a("ul", {"class":"jgrid-column-toggle-box"}, p, d)).appendTo(this.grid._ctnr), a = q.offset();
    q.css({top:a.top, left:a.left + 26});
    q.hide();
    this.columnIcon = this.addIcon(b.classColumnToggleIcon, "현재 보여지는 열을 숨기거나 숨겨진 열을 보이도록 합니다.", b.columnIconWidth, b.columnIconHeight, function() {
      q.toggle()
    })
  };
  b.mousedown = function(a) {
    !h.contains(this.columnIcon[0], a.target) && !h.contains(this.ul[0], a.target) && (this.ul.hide(), this.columnIcon.hasClass("active") && this.columnIcon.toggleClass("active"))
  };
  b.toggleColumn = function(a, b, c) {
    columnWidths = this.columnWidths;
    b ? (this.getView().setWidthByKey(a, this.columnWidths[a]), $(c.parentNode).removeClass("unchecked")) : (this.columnWidths[a] = this.getColMgr().getByKey(a).width, this.getView().setWidthByKey(a, 0), $(c.parentNode).addClass("unchecked"))
  };
  b._bindEvents = function() {
    this.grid.event.bind({onCreateCss:this._onCreateCss, onDestroy:this._destroy, mousedown:this.mousedown}, this)
  };
  b._destroy = function() {
    i._destroy(this, {name:"MenuBar", path:"menubar", $:"_menubar", property:"_ctnr", map:"_options"})
  };
  b._onCreateCss = function() {
    var a = "#" + this.grid.mid + " .", b = this._options, c = [];
    c.push(a + b.classMenuBar + "{" + i._CONST._cssUnselectable + "position:relative;overflow:hidden;width:100%;background:" + b.background + ";border-bottom:" + (b.borderThickness + "px " + b.border) + ";height:" + b.height + "px}");
    c.push(a + b.classIcon + "{float:left;height:" + b.iconHeight + "px;width:" + b.iconWidth + "px;border:" + b.iconBorderThickness + "px " + b.iconBorder + ";margin:" + b.iconMargin + "px 0 0 " + b.iconMargin + "px;background:" + b.iconBackground + ";border-radius:" + b.iconBorderRadius + "px;-moz-border-radius:" + b.iconBorderRadius + "px}");
    c.push(a + b.classIcon + ":hover," + a + b.classIcon + ":focus{background:" + b.iconBackgroundHover + ";border:" + b.iconBorderThickness + "px " + b.iconBorderHover + "}");
    c.push(a + b.classIcon + ":active," + a + b.classIcon + ".active{cursor:default;background:" + b.iconBackgroundActive + ";border:" + b.iconBorderThickness + "px " + b.iconBorderActive + "}");
    c.push(a + b.classIcon + ".active:focus{border:" + b.iconBorderThickness + "px " + b.iconBorderFocus + "}");
    c.push(a + b.classColumnToggleIcon + "{background:url(" + b.columnIconUrl + ") no-repeat center;width:" + b.columnIconWidth + "px;height:" + b.columnIconHeight + "px}");
    c.push(".jgrid-column-toggle-box{position:absolute;top:0;left:0;z-index:100;list-style-type:none;margin:0;padding:0;border:1px solid #888;background:#eee}");
    c.push(".jgrid-column-toggle-box li{cursor:pointer;padding:1px 4px 1px 0px}");
    c.push(".jgrid-column-toggle-box li.unchecked{background:#ccc}");
    return c.join("")
  };
  b.addIcon = function(a, b, c, d, e) {
    function g(a) {
      e && e();
      i.toggleClass("active");
      a.preventDefault()
    }
    var i = $("<div class='" + this._options.classIcon + "' tabIndex='0' title='" + b + "'><div class='" + a + "' style='margin-top:" + (this._options.iconHeight - d) / 2 + "px;margin-left:" + (this._options.iconWidth - c) / 2 + "px'></div></div>").appendTo(this._menubar), p = h.keyMapKeydown.enter, o = h.keyMapKeydown.space;
    i.click(g).keydown(function(a) {
      var b = a.which;
      (b === p || b === o) && g(a)
    });
    return i
  };
  b.appendHtml = function(a) {
    return $(a).appendTo(this._menubar)
  };
  b.append$ = function(a) {
    return a.appendTo(this._menubar)
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "Footer.js"...');
jx.grid.Footer = {};
(function() {
  function g(a) {
    this.mid = a.mid;
    this._ctnr = a.container;
    this.grid = a.grid;
    this.grid.footer = this;
    this._options = i._extend({classCell:"footer-cell", background:"#F1F5FB", border:"0px solid #CCD9EA", color:"#000", fontSize:"13px", fontWeight:"normal", cellHeight:25, cellPadding:40, countTemplate:"현재 <span name='shownCount'></span> 건 / 총 <span name='totalCount'></span> 건", titleColor:"#5A6779", titleFontSize:"12px", titleFontWeight:"normal", contentColor:"#1E395B", contentFontSize:"12px", contentFontWeight:"normal", classFooter:"jgrid-footer", classTitle:"footer-title", classContent:"footer-content", 
    style:"", cellStyle:"", titleStyle:"", contentStyle:""}, a.options);
    this._sumMap = {};
    this.__init()
  }
  var i = goog.getObjectByName("jx.grid"), h = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var e = h.element;
  goog.exportSymbol("jx.grid.Footer", g);
  g.getInstance = function(a) {
    return new g(a)
  };
  var b = g.prototype;
  b.__init = function() {
    this._hasSum = this.grid.colDefMgr.get().some(function(a) {
      return!!a.sumRenderer
    });
    var a = this._mask = $(e("div", {"class":"classSliderMask"})).appendTo(this._ctnr);
    if(this._hasSum) {
      this._slider = $(e("div", {"class":"classSlider"})).appendTo(a)
    }
    this._foot = $("<div class='" + this._options.classFooter + "'>").appendTo(this._ctnr);
    this.getNextCell().html(this._options.countTemplate);
    this._updateTotalCount();
    this._updateShownCount();
    this.renderCells();
    this._initSumCells();
    this.bindEvents()
  };
  b.bindEvents = function() {
    this.grid.event.bind({onCreateCss:this._onCreateCss, onDestroy:this._destroy, onDataChange:[this._updateTotalCount, this._updateSums], onAfterRefresh:this._updateShownCount, onResizeCol:this._setWidthByKey, onScrollViewportH:this._onScrollViewportH}, this)
  };
  b._setWidthByKey = function(a, b) {
    var c = this.getSumCell(a);
    if(c) {
      c.style.width = b + this.grid.view._colWidthPlus() - 1 + "px"
    }
  };
  b._onScrollViewportH = function(a) {
    if(this._hasSum) {
      this._slider[0].style.left = -1E4 - a + "px"
    }
  };
  b.renderCells = function() {
    if(this._hasSum) {
      for(var a = this.grid.colDefMgr.get(), b = 0, c = a.length, d = this.grid.view, g = [];b < c;b++) {
        g.push(e("div", {"class":"classSliderCell", id:this.mid + "_sum_" + a[b].key, style:{width:d._getColOuterWidth(b) - 1 + "px"}}))
      }
      this._slider[0].innerHTML = g.join("")
    }
  };
  b.getSumCell = function(a) {
    return document.getElementById(this.mid + "_sum_" + a)
  };
  b.setCellValue = function(a, b) {
    var c = this.getSumCell(a);
    if(c) {
      c.innerHTML = b
    }
  };
  b._destroy = function() {
    var a, b = this._sumMap;
    for(a in b) {
      b.hasOwnProperty(a) && b[a].remove()
    }
    i._destroy(this, {name:"Footer", path:"footer", $:"_foot", property:"_ctnr", map:"_sumMap _options"})
  };
  b._onCreateCss = function() {
    var a = this._options, b = "#" + this.grid.mid + " ." + a.classFooter, c = [];
    c.push(b + "{float:left;cursor:default;width:100%;" + i._CONST._cssUnselectable + "background:" + a.background + ";border-top:" + a.border + ";border-collapse:collapse;color:" + a.color + ";font-size:" + a.fontSize + ";font-weight:" + a.fontWeight + ";padding-left:8px;" + a.style + "}");
    c.push(b + " ." + a.classCell + "{float:left;white-space:nowrap;line-height:" + a.cellHeight + "px;padding-right:" + a.cellPadding + "px;" + a.cellStyle + "}");
    c.push(b + " ." + a.classTitle + "{text-align:right;color:" + a.titleColor + ";font-size:" + a.titleFontSize + ";font-weight:" + a.titleFontWeight + ";" + a.titleStyle + "}");
    c.push(b + " ." + a.classContent + "{color:" + a.contentColor + ";font-size:" + a.contentFontSize + ";font-weight:" + a.contentFontWeight + ";" + a.contentStyle + "}");
    a = {};
    b = "#" + this.grid.mid;
    a[b + " .classSliderMask"] = {position:"relative", overflow:"hidden", width:"100%", "border-bottom":"1px solid #ddd"};
    a[b + " .classSlider"] = {position:"relative", overflow:"hidden", "white-space":"nowrap", cursor:"default", background:"#f0f0f0", left:"-10000px", width:"100000px", "line-height":"21px"};
    a[b + " .classSliderCell"] = {position:"relative", overflow:"hidden", "float":"left", "text-overflow":"ellipsis", "text-align":"center", "vertical-align":"middle", height:"21px", left:1E4 - this.grid.view.getScrollLeft() + "px", "border-right":"1px solid #ddd"};
    var d, e;
    for(d in a) {
      if(a.hasOwnProperty(d)) {
        b = a[d];
        c.push(d + "{");
        for(e in b) {
          c.push(e + ":" + b[e] + ";")
        }
        c.push("}")
      }
    }
    return c.join("")
  };
  b._updateTotalCount = function() {
    this._foot.find("[name=totalCount]")[0].innerHTML = this.grid.dataMgr.getReal().length
  };
  b._updateShownCount = function() {
    this._foot.find("[name=shownCount]")[0].innerHTML = this.grid.dataMgr.filterReal(this.grid.dataMgr.datalist).length
  };
  b._initSumCells = function() {
    if(this._hasSum) {
      for(var a = this.grid.dataMgr.getReal(), b = this.grid.colDefMgr.get(), c = b.length, d, e, i, s, p, o = g._calSum, n = this._sumMap, m, l = 0;l < c;l++) {
        if(d = b[l], e = d.sumRenderer) {
          i = d.key;
          s = d.name;
          p = o(a, i);
          n[i] = !0;
          switch(typeof e) {
            case "function":
              m = e(s, p);
              break;
            case "string":
              d = e.toLowerCase();
              if(d === "krw" || e === "\\") {
                m = h.formatNumber(p)
              }else {
                if(d === "usd" || e === "$") {
                  m = h.formatNumber(p, 2, "$ ")
                }
              }
              break;
            default:
              m = d.renderer ? d.renderer(p) : p
          }
          this.setCellValue(i, m)
        }
      }
    }
  };
  b._updateSums = function() {
    if(this._hasSum) {
      var a = this.grid.dataMgr.getReal(), b, c = this._sumMap, d = this.grid.colDefMgr, e, i, s, p, o = g._calSum, n;
      for(b in c) {
        if(c.hasOwnProperty(b)) {
          e = d.getByKey(b);
          s = e.name;
          i = e.sumRenderer;
          p = o(a, b);
          switch(typeof i) {
            case "function":
              n = i(s, p);
              break;
            case "string":
              e = i.toLowerCase();
              if(e === "krw" || i === "\\") {
                n = h.formatNumber(p)
              }else {
                if(e === "usd" || i === "$") {
                  n = h.formatNumber(p, 2, "$ ")
                }
              }
              break;
            default:
              n = e.renderer ? e.renderer(p) : p
          }
          this.setCellValue(b, n)
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
  g._calSum = function(a, b) {
    for(var c = 0, d, e = a.length, g = 0;g < e;g++) {
      if(typeof(d = a[g][b]) === "string") {
        d = d.toFloat()
      }
      c += isNaN(d) ? 0 : d
    }
    return c
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "ColumnHeader.js"...');
jx.grid.ColumnHeader = {};
(function() {
  function g(a) {
    a.grid.log("creating new ColumnHeader instance...", b.V_INIT);
    e.call(this, a)
  }
  var i = goog.getObjectByName("jx.grid"), h = goog.getObjectByName("jx.util"), e = goog.getObjectByName("jx.grid.BaseModule"), b = goog.getObjectByName("jx.grid.Grid"), a = h.element;
  goog.exportSymbol("jx.grid.ColumnHeader", g);
  goog.inherits(g, e);
  g.getInstance = function(a) {
    return new g(a)
  };
  var f = g.prototype;
  f._init = function(c) {
    var j;
    this.grid.log("initializing ColumnHeader instance...", b.V_INIT);
    this.grid.header = this;
    this._map = {};
    this._resizeMap = {};
    this._resizeKey = this._resizeInitX = this._resizeHandleInitX = this._resizeInitWidth = this._resizeInitColWidth = this._resizeGuide = this._resizeHandleOffset = null;
    var d = this._options, c = this._mask = $(a("div", {"class":d.classHeaderMask})).prependTo(this._ctnr = c.container);
    if(this.getColMgr().hasGroups()) {
      this._doubleHead = $(a("div", {"class":d.classHeader})).appendTo(c)
    }
    j = this._head = $(a("div", {"class":d.classHeader})).appendTo(c), d = j;
    g._disableSel(d)
  };
  f._bindEvents = function() {
    this.grid.log("binding ColumnHeader events...", b.V_INIT);
    var a, d = this.getColumns(), f = d.length, e = 0;
    for(a = {onRenderModules:this._onRenderModules, onAfterRenderModules:this._onAfterRenderModules, mousedown:this._mousedown, mouseup:this._mouseup, dragmove:this._dragmove, onScrollViewportH:this._onScrollViewportH, onScrollViewportV:this._onScrollViewportV, onChangeSorter:this._onChangeSorter, click:this._click, onResizeCol:this._setWidthByKey};e < f;e++) {
      if(d[e].sorter) {
        a["clickHeader_" + d[e].key] = this._sort
      }
    }
    this.bindGridEvent(a, this)
  };
  f._defaultOptions = function(a) {
    this.grid.log("extending ColumnHeader options...", b.V_INIT);
    a = a._options.imageUrl;
    return{reorderEnabled:!1, reorderSyncEnabled:!0, background:"url(" + a + "column-headers-bg.png) repeat-x scroll center", backgroundHover:"url(" + a + "column-headers-over-bg.png) repeat-x scroll center", backgroundPlaceholder:"#646464", sortBackground:a + "sort.png", sortRight:4, sortWidth:7, sortBackgroundAsc:a + "sort-asc.png", sortBackgroundDesc:a + "sort-desc.png", headerMoreButton:a + "header-more-button.gif", font:"15px Arial,Helvetica,sans-serif", height:21, borderThickness:1, border:"solid #909192", 
    classHeaderMask:"jgrid-header-mask", classHeader:"jgrid-header", classColHeader:"jgrid-colheader", classColHeaderActive:"jgrid-colheader-active", classColHeaderPlaceholder:"jgrid-colheader-placeholder", classInteractive:"interactive", classColHeaderSorted:"jgrid-colheader-sorted", classSort:"jgrid-sort", classSortAsc:"jgrid-sort-asc", classSortDesc:"jgrid-sort-desc", classResizeHandle:"jgrid-resize-handle", resizeHandleWidth:5, style:"", headerStyle:"", scrollerLeft:1E4, scrollerWidth:1E5, classResizeGuide:"resize-guide", 
    resizeGuideWidth:1, resizeBackground:"black;filter:alpha(opacity=40);opacity:0.4", syncResize:!1, resizeHandleBackground:"black;filter:alpha(opacity=10);opacity:0.10"}
  };
  f._beforeDispose = function() {
    this.grid.log("disposing ColumnHeader instance...", b.V_INIT);
    this._head.sortable && this._head.sortable("destroy");
    this._destroyResizeHandles();
    i._destroy(this, {name:"ColumnHeader", path:"header", $:"_resizeGuide _mask _head", property:"_ctnr _resizeMap", map:"_map _options"});
    this.dispose()
  };
  f._destroyResizeHandles = function() {
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
  f._beforeCreateCss = function(a) {
    this.grid.log("creating CSS for ColumnHeader...", b.V_INIT);
    var d = "#" + this.grid.mid + " .", f = this._options, e = f.borderThickness + "px " + f.border, g = this.getColumns(), h = g.length, i = 0, n = "." + f.classColHeader, m = f.scrollerLeft, l = f.height + "px", q = f.classColHeaderActive, r = {};
    r["." + f.classHeaderMask] = {position:"relative", overflow:"hidden", width:"100%", font:f.font, background:f.background, "border-bottom":e, _append:f.style};
    r["." + f.classHeader] = {position:"relative", overflow:"hidden", "white-space":"nowrap", cursor:"default", background:f.background, left:-m + "px", width:f.scrollerWidth + "px", "line-height":l};
    r[n] = {position:"relative", overflow:"hidden", "float":"left", "text-overflow":"ellipsis", "text-align":"center", "vertical-align":"middle", height:l, left:m - this.getView().getScrollLeft() + "px", "border-right":e, _append:f.headerStyle};
    r[n + "." + f.classInteractive + ":hover, " + d + q] = {cursor:"pointer", background:f.backgroundHover};
    r["." + q] = {"border-left":e};
    r[n + "." + f.classColHeaderPlaceholder] = {background:f.backgroundPlaceholder + "!important"};
    r[".jgrid-header-text"] = {"vertical-align":"middle"};
    r[".jgrid-header-more"] = {position:"absolute", cursor:"pointer", height:"100%", width:"14px", right:0, top:0};
    r[".jgrid-header-more:hover"] = {"border-left":"1px solid black", background:"url(" + f.headerMoreButton + ") no-repeat left center"};
    r["." + f.classSort] = {position:"absolute", height:"100%", width:f.sortWidth + "px", background:"url(" + f.sortBackground + ") no-repeat center transparent"};
    r["." + f.classSortAsc] = {background:"url(" + f.sortBackgroundAsc + ") no-repeat center transparent"};
    r["." + f.classSortDesc] = {background:"url(" + f.sortBackgroundDesc + ") no-repeat center transparent"};
    r["." + f.classResizeHandle] = {"z-index":10, background:f.resizeHandleBackground, cursor:"e-resize", position:"absolute", height:"100%", width:f.resizeHandleWidth + "px"};
    for(r["." + f.classResizeGuide] = {"z-index":10, position:"absolute", background:f.resizeBackground, width:f.resizeGuideWidth + "px"};i < h;i++) {
      g[i].headerStyle && (r[n + "#" + this.mid + "h" + g[i].key] = {_append:g[i].headerStyle})
    }
    this.toCssStyles(a.css, r)
  };
  f._widthPlus = function() {
    return this._options.borderThickness
  };
  f._onScrollViewportH = function(a) {
    this.grid.log("adjusting Colheader style.left according to viewport scrollLeft...", b.V_RESIZE);
    a = -this._options.scrollerLeft - a;
    this._head[0].style.left = a + "px";
    if(this._doubleHead) {
      this._doubleHead[0].style.left = a + "px"
    }
  };
  f._onRenderModules = function() {
    this.grid.log("rendering Colheader...", b.V_INIT);
    var c = this.getColumns(), d = c.length, f = 0, e, g = [], h = this.getColMgr();
    if(h.hasGroups()) {
      var i = this._options;
      i.reorderEnabled = !1;
      for(var h = h.getGroups(), n = 0, m = h.length, l, q, r, t = [], u = 0, v = 0, x = this.getView(), z;n < m;n++) {
        l = h[n];
        q = l[0].parent;
        u = r = 0;
        for(z = l.length;u < z;u++) {
          l[u].hidden || (r += x._getColOuterWidth(v++))
        }
        t.push(a("div", {"class":i.classColHeader, title:q, style:{width:r - this._widthPlus() + "px"}}, q))
      }
      this._doubleHead[0].innerHTML = t.join("")
    }
    for(;f < d;f++) {
      (e = c[f]).hidden || this._render(g, e, f)
    }
    this._head[0].innerHTML = g.join("");
    this.triggerGridEvent("onRenderHeadersComplete", !1, !0)
  };
  f._onAfterRenderModules = function() {
    var b = this._options;
    !this.getColMgr().hasGroups() && b.reorderEnabled && this._initReorder();
    this._initResizeHandles();
    this._resizeGuide = $(a("div", {"class":b.classResizeGuide})).appendTo(this.getView()._mask).hide();
    this._resizeGuide[0].style.top = "0px";
    this._resizeGuide[0].style.height = "0px"
  };
  f._render = function(b, d, f) {
    var e = this._options, g = d.key, i = d.noName ? "" : d.name || g, o = this._widthPlus(), n = "onRenderHeader_" + g, m = [b], l = e.classColHeader;
    if(e.reorderEnabled || d.sorter) {
      l += " " + e.classInteractive
    }
    f = {id:this.mid + "h" + g, "class":l, colKey:g, style:{width:this.getView()._getColOuterWidth(f) - o + "px"}};
    if(!d.noTitle) {
      f.title = d.title || i
    }
    b.push(a("div", f, null, h.LEAVE_OPENED));
    this.triggerGridEvent(n + "_prepend", m, !0);
    b.push(i);
    this.triggerGridEvent(n + "_append", m, !0);
    d.sorter && b.push(a("span", {"class":e.classSort}));
    b.push("</div>")
  };
  g._disableSel = function(a) {
    Util$.safe$(a).attr("unselectable", "on").css("MozUserSelect", "none").bind("selectstart.ui", function() {
      return!1
    })
  };
  f.get = function(a) {
    if(this._map.hasOwnProperty(a)) {
      return this._map[a]
    }
    var b = document.getElementById(this.mid + "h" + a);
    return!b ? $([]) : this._map[a] = $(b)
  };
  f._updateIndicator = function(a, b) {
    var f = this.get(a), e = this._options, g = f.find("." + e.classSort), h = e.classColHeaderSorted, i = e.classSortAsc, e = e.classSortDesc;
    b === 0 ? (f.removeClass(h), g.removeClass(i + " " + e)) : (f.addClass(h), b === 1 ? g.addClass(i).removeClass(e) : b === 2 && g.addClass(e).removeClass(i))
  };
  f._closest = function(a) {
    return Util$.safe$(a).closest("div." + this._options.classColHeader, this._head)
  };
  f._getDef = function(a) {
    return this.getColMgr().getByKey(a.attr("colKey"))
  };
  f._sort = function(a, d, f) {
    this.grid.log("Colheader clicked to sort. key=" + e, b.V_CLICK);
    var e = f.key, a = f.sorter;
    this.triggerGridEvent("onBeforeColSort_" + e, !1, !0);
    this.triggerGridEvent("onBeforeColSort", !1, !0);
    a.desc = a.desc === !1 ? !0 : !1;
    this.getDataMgr().refresh({sorter:a});
    this.getView()._scroll()
  };
  f._onChangeSorter = function(a, b) {
    a !== b && a && this._updateIndicator(a.key, 0);
    b && this._updateIndicator(b.key, b.desc ? 2 : 1)
  };
  f._initReorder = function() {
    this.grid.log("initializing Colheader reorder functionality...", b.V_INIT);
    var a = this, d = this._options, f = this.getColMgr(), e = this._head, g = this.mid.length + 1, h = function(a, b) {
      for(var c = $(e).sortable("toArray"), d = c.length, h, i = 0;i < d;i++) {
        h = c[i], c[i] = h === "" ? b.item.attr("id").substring(g) : h.substring(g)
      }
      f.sortByKey(c)
    };
    e.sortable({items:"." + d.classColHeader, axis:"x", forcePlaceholderSize:!0, placeholder:d.classColHeaderPlaceholder + " " + d.classColHeader, tolerance:"pointer", start:function(b, d) {
      d.item.addClass(a._options.classColHeaderActive)
    }, stop:function(b, d) {
      d.item.removeClass(a._options.classColHeaderActive);
      a._syncResizeHandles()
    }, update:h});
    d.reorderSyncEnabled && e.sortable("option", "change", h)
  };
  f._getDx = function(a, b) {
    var f = a.clientX - this._resizeInitX, e = b.minW, g = h.ifNull(b.maxW, Number.MAX_VALUE), i = this._resizeInitWidth;
    i + f < e && (f = e - i);
    i + f > g && (f = g - i);
    return f
  };
  f._click = function(a) {
    var d = this._closest(a.target);
    if(d.length !== 0) {
      var f = this._getDef(d), e = f.key, a = [a, d, f];
      this.grid.log("Colheader clicked. key=" + e, b.V_CLICK);
      this.getEventMgr().triggerInvalid("clickHeaderValid_" + e, a) || (this.triggerGridEvent("clickHeader_" + e, a, !0), this.triggerGridEvent("clickHeader", a, !0))
    }
  };
  f._mousedown = function(a) {
    var d = this._options;
    if(h.hasTagAndClass(a.target, "DIV", d.classResizeHandle)) {
      var f = this._resizeKey = a.target.getAttribute("key");
      this.grid.log("mousedown on ColumnHeader Resize Handle. key=" + f, b.V_MOUSEDOWN);
      this._resizeInitWidth = this.get(f)[0].clientWidth;
      this._resizeInitColWidth = this.getColMgr().getByKey(f).width;
      this._resizeInitX = a.clientX;
      this._resizeHandleInitX = this._resizeMap[f][0].offsetLeft;
      this._resizeGuide[0].style.left = Math.floor(this._resizeHandleInitX + (d.resizeHandleWidth - d.resizeGuideWidth) / 2 - d.scrollerLeft) + "px";
      this._resizeGuide[0].style.height = this.getView().getInnerHeight() + "px";
      this._resizeGuide.show()
    }else {
      if(d = this._closest(a.target), d.length) {
        var e = this._getDef(d), f = e.key, a = [a, d, e];
        this.grid.log("mousedown on ColumnHeader. key=" + f, b.V_MOUSEDOWN);
        this.triggerGridEvent("mousedownHeader", a, !0);
        this.triggerGridEvent("mousedownHeader_" + f, a, !0)
      }
    }
  };
  f._dragmove = function(a) {
    var d = this._resizeKey;
    if(d != null && (a = this._getDx(a, this.getColMgr().getByKey(d)), !(Math.abs(a) < 1))) {
      this.grid.log("drag on ColumnHeader Resize Handle. key=" + d, b.V_MOUSEMOVE);
      var f = this._options;
      this.get(d)[0].style.width = this._resizeInitWidth + a + "px";
      this._moveResizeHandles(this._resizeHandleInitX + a - this._resizeMap[d][0].offsetLeft, this.getColMgr().getIdxByKey(d));
      this._resizeGuide[0].style.left = Math.floor(this._resizeHandleInitX + a + (f.resizeHandleWidth - f.resizeGuideWidth) / 2 - f.scrollerLeft) + "px";
      f.syncResize && this.getView().setWidthByKey(d, this._resizeInitColWidth + a)
    }
  };
  f._mouseup = function(a) {
    var d = this._resizeKey;
    if(d != null) {
      this.grid.log("mouseup on ColumnHeader Resize Handle. key=" + d, b.V_MOUSEUP), this._resizeGuide.hide(), this._resizeGuide[0].style.height = "0px", a = this._getDx(a, this.getColMgr().getByKey(d)), Math.abs(a) >= 1 && this.getView().setWidthByKey(d, this._resizeInitColWidth + a), delete this._resizeKey, delete this._resizeInitX, delete this._resizeHandleInitX, delete this._resizeInitWidth, delete this._resizeInitColWidth
    }
  };
  f._setWidthByKey = function(a, d) {
    this.grid.log("setting ColumnHeader width=" + d + ". key=" + a, b.V_RESIZE);
    this.get(a)[0].style.width = d + this.getView()._colWidthPlus() - this._widthPlus() + "px";
    if(this._doubleHead) {
      for(var f = this.getColMgr(), e = this.getView()._colWidthPlus(), g = f.getGroupIndexByKey(a), f = f.getGroupByGroupIdx(g), h = 0, i = f.length, n = 0;h < i;h++) {
        f[h].hidden || (n += f[h].width + e)
      }
      this._doubleHead[0].childNodes[g].style.width = n - this._widthPlus() + "px"
    }
    this._syncResizeHandles(this.getColMgr().getIdxByKey(a));
    this.getView()._scroll()
  };
  f._syncResizeHandles = function(a) {
    for(var a = a || 0, b = this.getView()._getColLefts(), f = this.getColumns(), e = f.length, g = this._resizeMap, h;a < e;a++) {
      if(h = f[a].key, g.hasOwnProperty(h)) {
        g[h][0].style.left = b[a + 1] + this._resizeHandleOffset + "px"
      }
    }
  };
  f._moveResizeHandles = function(a, b) {
    for(var b = b || 0, f = this.getColumns(), e = f.length, g = this._resizeMap, h;b < e;b++) {
      if(h = f[b].key, g.hasOwnProperty(h)) {
        h = g[h][0], h.style.left = h.offsetLeft + a + "px"
      }
    }
  };
  f._onScrollViewportV = function() {
    this._resizeGuide[0].style.top = this.getView().getScrollTop() + "px"
  };
  f._initResizeHandles = function() {
    this.grid.log("initializing Colheader resize functionality...", b.V_INIT);
    for(var a = this.getColumns(), d = a.length, f = this.getView(), e = f.mid, f = f._getColLefts(), g = this._options, h = this._resizeMap, i, n = 0, m = this._resizeHandleOffset = Math.floor(g.scrollerLeft - g.resizeHandleWidth / 2), l = g.classResizeHandle, q = this._head;n < d;n++) {
      if(g = a[n], g.resizable) {
        i = g.key, h[i] = $("<div class='" + l + "' key='" + i + "' ondblclick='JGM.m.ViewportManager." + e + '._autoColWidth("' + i + "\")' style='left:" + (m + f[n + 1]) + "px' title='" + g.name + " 컬럼의 폭을 조절합니다.'>").appendTo(q)
      }
    }
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "CheckManager.js"...');
jx.grid.CheckManager = {};
(function() {
  function g(a) {
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
    e.call(this, a);
    this.removeEventListener("afteroption", b)
  }
  var i = goog.getObjectByName("jx.grid"), h = goog.getObjectByName("jx.util"), e = goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.CheckManager", g);
  goog.inherits(g, e);
  g.getInstance = function(a) {
    return new g(a)
  };
  var b = g.prototype;
  b._init = function() {
    this._map = {};
    this.disabledmap = {};
    this._count = 0;
    this._disabled = !1;
    var a, b = i._CONST;
    a = this.getColMgr();
    a.getByKey(this._col.key) || a.addAt(this._options.colIdx, this._col);
    if(!b._checkboxWidth) {
      a = h.calCheckSize(), b._checkboxWidth = a.checkboxW, b._checkboxHeight = a.checkboxH, b._radioWidth = a.radioW, b._radioHeight = a.radioH
    }
  };
  b._bindEvents = function() {
    var a = this._col.key, b;
    b = {onAfterSetDatalist:this.uncheckAll, onAfterRerender:this._updateMaster, onIdChange:this._onIdChange, onIdListChange:this._onIdListChange, onRemoveDatarow:this._onRemoveDatarow, onRemoveDatalist:this._onRemoveDatalist, onSearch:this._onSearch};
    b["onRenderCell_" + a + "_prepend"] = this._onRenderCell;
    b["keydownColSel_" + a + "_" + h.keyMapKeydown.space] = this._keydownColSel;
    if(this._hasMaster) {
      b["onRenderHeader_" + a + "_prepend"] = this._onRenderHeader, b.onRenderHeadersComplete = this._getMaster
    }
    this.bindGridEvent(b, this)
  };
  b._onSearch = function(a) {
    a ? this.disableMaster() : this.enableMaster()
  };
  b._defaultOptions = function() {
    return{colDef:{key:"checkbox", width:20, name:" ", noTitle:!0, resizable:!1, sorter:null, filter:null, noSearch:!0, editor:null, inputOnCreate:!1}, colIdx:0, name:void 0, classCheck:"checkmg", classMasterCheck:"checkm", master:!0, isRadio:!1}
  };
  b._beforeCreateCss = function(a) {
    var b, c, d = a.css;
    this._isRadio ? (a = i._CONST._radioWidth || 13, b = i._CONST._radioHeight || 13) : (a = i._CONST._checkboxWidth || 13, b = i._CONST._checkboxHeight || 13);
    c = "*overflow:hidden;padding:0;width:" + a + "px;height:" + b + "px;";
    d.push(this.getView()._getCellSelector() + " ." + this._cssClass + "[mid='" + this.mid + "']{" + c + "margin:" + (this.getView()._getRowInnerHeight() - b) / 2 + "px 0 0 " + (this._col.width - this.getView()._getPadding() - a) / 2 + "px}#" + this.mid + "h{" + c + "margin:" + (this.getHeader()._options.height - b) / 2 + "px 0 0 0}")
  };
  b.checkList = function(a, b) {
    if(!b) {
      a = this.getDataMgr().mapList(a).mapped
    }
    for(var c = 0, d = a.length;c < d;c++) {
      this.check(a[c], !0)
    }
  };
  b.setCheckList = function(a, b) {
    this.uncheckAll();
    this.checkList(a, b)
  };
  b.getCheckList = function() {
    return h.toArray(this._map)
  };
  b.getDisableds = function() {
    return h.toArray(this.disabledmap)
  };
  b.toggleCheckAll = function() {
    return this.isCheckedAll() ? this.uncheckAll() : this.checkAll()
  };
  b.clickMaster = function(a) {
    var b = this.getAllData(), c = this.getDataList();
    if(b.length === c.length) {
      return a ? this.checkAll() : this.uncheckAll()
    }
    if(a) {
      g._check(this.getCheckboxes());
      for(var a = c.length, b = this.getIdKey(), d, e = 0;e < a;e++) {
        d = c[e], this._add(d, d[b]) && this.triggerGridEvent("onCheckChange", [d, !0], !0)
      }
    }else {
      g._uncheck(this.getCheckboxes());
      a = c.length;
      b = this.getIdKey();
      for(e = 0;e < a;e++) {
        d = c[e], this._remove(d, d[b]) && this.triggerGridEvent("onCheckChange", [d, !1], !0)
      }
    }
  };
  b.checkAll = function() {
    this._hasMaster && g._check(this._master);
    g._check(this.getCheckboxes());
    for(var a = this.getAllData(), b = a.length, c = this.getIdKey(), d = this._map, e = 0;e < b;e++) {
      d[a[e][c]] = a[e]
    }
    this._count = b
  };
  b.uncheckAll = function() {
    this._hasMaster && g._uncheck(this._master);
    g._uncheck(this.getCheckboxes());
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
    this._add(a) && (g._check(this.getCheckbox(a)), this._updateMaster(), this.triggerGridEvent("onCheckChange", [a, !0], !0))
  };
  b.uncheck = function(a, b) {
    b || (a = this.getDataMgr().map(a));
    this._remove(a) && (g._uncheck(this.getCheckbox(a)), this._hasMaster && g._uncheck(this._master), this.triggerGridEvent("onCheckChange", [a, !1], !0))
  };
  b.disable = function(a, b) {
    var c = this.getDataMgr();
    b || (a = c.map(a));
    var c = c.getId(a), d = this.disabledmap;
    d.hasOwnProperty(c) || (d[c] = a, g.disableNode(this.getCheckbox(a)), this.triggerGridEvent("onDisableCheck", [a], !0))
  };
  b.enable = function(a, b) {
    var c = this.getDataMgr();
    b || (a = c.map(a));
    var c = c.getId(a), d = this.disabledmap;
    d.hasOwnProperty(c) && (delete d[c], g.enableNode(this.getCheckbox(a)), this.triggerGridEvent("onEnableCheck", [a], !0))
  };
  b._updateMaster = function() {
    this._hasMaster && g._setCheck(this._master, this.isCheckedAll())
  };
  b._add = function(a, b) {
    b = b || a[this.getIdKey()];
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
  b._remove = function(a, b) {
    var b = b || a[this.getIdKey()], c = this._map;
    if(!c.hasOwnProperty(b)) {
      return!1
    }
    delete c[b];
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
    for(var c = [], d = [], e = 0, g = a.length, h = this.getIdKey(), i, o = this._map;e < g;e++) {
      o.hasOwnProperty((i = a[e])[h]) ? c.push(i) : d.push(i)
    }
    return{checked:c, unchecked:d}
  };
  b.isCheckedAll = function() {
    var a = this._count;
    if(a) {
      var b = this.getAllData().length;
      if(a === b) {
        return!0
      }
      var a = this.getDataList(), c = a.length;
      if(c !== b) {
        for(b = 0;b < c;b++) {
          if(!this.isChecked(a[b], !0)) {
            return!1
          }
        }
        return!0
      }
    }
    return!1
  };
  b.removeChecked = function() {
    return this.getDataMgr().removeList(this.getCheckList())
  };
  b._getMaster = function() {
    this._master = $(document.getElementById(this.mid + "h"))
  };
  b._getChecks = function(a) {
    for(var b = a.length, c = [], d = 0, e = this.getColMgr().getIdxByKey(this._key);d < b;d++) {
      c.push(a[d].childNodes[e].childNodes[0])
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
    var d = this._map, e = this.disabledmap;
    d.hasOwnProperty(b) && (delete d[b], d[c] = a);
    e.hasOwnProperty(b) && (delete e[b], e[c] = a)
  };
  b._onIdListChange = function(a, b, c) {
    for(var d = 0, e = a.length, g = this._map, h = this.disabledmap, i, o;d < e;d++) {
      i = a[d], o = b[d], g.hasOwnProperty(o) && (delete g[o], g[i[c]] = i), h.hasOwnProperty(o) && (delete h[o], h[i[c]] = i)
    }
  };
  b._keydownColSel = function(a, b, c) {
    a.preventDefault();
    if(b && c) {
      var a = this.isChecked(c.getDatarow(), !0), d, c = this.getDataList();
      if(this._isRadio) {
        for(d in b) {
          if(b.hasOwnProperty(d) && d !== "length") {
            this.check(c[d], !0);
            break
          }
        }
      }else {
        for(d in b) {
          b.hasOwnProperty(d) && d !== "length" && (a ? this.uncheck(c[d], !0) : this.check(c[d], !0))
        }
      }
    }
  };
  b._onRenderHeader = function(a) {
    a.push("<input id='" + this.mid + "h' type='checkbox' tabIndex='-1' onclick='JGM.m.CheckManager." + this.mid + ".clickMaster(this.checked);' class='" + this._cssClass + " " + this._cssClassMaster + "' mid='" + this.mid + "'");
    this.isCheckedAll() && a.push(" checked='checked'");
    this._disabled && a.push(" disabled='disabled'");
    a.push("/>")
  };
  b._onRenderCell = function(a, b, c, d, e) {
    e.push("<input tabIndex='-1' onclick=\"JGM.m.CheckManager." + this.mid + ".toggleById('" + c[this.getIdKey()] + "')\" type='" + (this._isRadio ? "radio" : "checkbox") + "' class='" + this._cssClass + "' mid='" + this.mid + "'");
    this._name && e.push(" name='" + this._name + "'");
    this.isChecked(c, !0) && e.push(" checked='checked'");
    (this._disabled || this.isDisabled(c, !0)) && e.push(" disabled='disabled'");
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
  b.disableMaster = function() {
    this._hasMaster && this._master.attr("disabled", "disabled")
  };
  b.enableMaster = function() {
    this._hasMaster && this._master.removeAttr("disabled")
  };
  g._check = function(a) {
    a && Util$.safe$(a).attr("checked", "checked")
  };
  g._uncheck = function(a) {
    a && Util$.safe$(a).removeAttr("checked")
  };
  g.disableNode = function(a) {
    a && Util$.safe$(a).attr("disabled", "disabled")
  };
  g.enableNode = function(a) {
    a && Util$.safe$(a).removeAttr("disabled")
  };
  g._setCheck = function(a, b) {
    b ? g._check(a) : g._uncheck(a)
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "Collapser.js"...');
jx.grid.Collapser = {};
(function() {
  function g(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    this.grid.collapser = this;
    this._options = i._extend({key:void 0, colDef:{key:"collapser", width:120, name:" ", noSearch:!0}, colIdx:0, urlCollapsed:this.grid._options.imageUrl + "collapsed.png", urlCollapsedHover:this.grid._options.imageUrl + "collapsed-hover.png", urlExpanded:this.grid._options.imageUrl + "expanded.png", urlExpandedHover:this.grid._options.imageUrl + "expanded-hover.png", width:6, padding:5, classCollapser:"jgrid-collapser", classCollapsed:"collapsed", classExpanded:"expanded", classIndent:"indent", 
    classMasterCollapser:"master", indentSize:12, beginCollapsed:!1, CheckManager:void 0, Tree:void 0}, a.options);
    if(this._options.CheckManager) {
      this.checkMgr = i.create("CheckManager", {grid:this.grid, options:this._options.CheckManager}), delete this._options.CheckManager, h.isNull(this._options.key) && this._options.colIdx++
    }
    this._tree = new e({list:this.grid.dataMgr.all, options:this._options.Tree})
  }
  var i = goog.getObjectByName("jx.grid"), h = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var e = goog.getObjectByName("jx.struct.Tree");
  goog.exportSymbol("jx.grid.Collapser", g);
  g.getInstance = function(a) {
    return new g(a)
  };
  var b = g.prototype;
  b.__init = function() {
    h.isNull(this._options.key) && this.grid.colDefMgr.addAt(this._options.colIdx, this._options.colDef);
    this._makeTree();
    this._filterRefresh();
    this.key = h.isNull(this._options.key) ? this._options.colDef.key : this._options.key;
    this.bindEvents()
  };
  b.bindEvents = function() {
    var a = this.key, b;
    b = {onAfterFilter:this._onAfterFilter, onCreateCss:this._onCreateCss, onDestroy:this._destroy, onAfterSetDatalist:this._onAfterSetDatalist, onAddDatarow:this._onAddDatarow, onAddDatalist:this._onAddDatalist, onUpdateDatarow:this._onUpdateDatarow, onUpdateDatalist:this._onUpdateDatalist, onRemoveDatarow:this._onRemoveDatarow, onRemoveDatalist:this._onRemoveDatalist, onRenderHeadersComplete:this._getMaster};
    b["onRenderHeader_" + a + "_prepend"] = this._onRenderHeader;
    b["clickHeaderValid_" + a] = this._clickHeaderValid;
    b["onRenderCell_" + a + "_prepend"] = this._onRenderCell;
    b["dblclickCanvas_" + a] = this._dblclickCanvas;
    b["keydownColSel_" + a + "_" + h.keyMapKeydown.space] = this._keydownColSel;
    if(h.isNotNull(this.checkMgr)) {
      b.onCheckChange = this._onCheckChange
    }
    this.grid.event.bind(b, this)
  };
  b._destroy = function() {
    i._destroy(this, {name:"Collapser", path:"collapser", module:"_tree", $:"_master", property:"checkMgr", map:"_options"})
  };
  b._onCreateCss = function() {
    var a = "#" + this.grid.mid + " .", b = this._options, c = a + this.grid.view._options.classRow + " .", d = a + b.classCollapser, e = d + "." + b.classExpanded, g = d + "." + b.classCollapsed, i = this.grid.view._getRowInnerHeight(), p = [], o = this.grid.header;
    p.push(a + b.classIndent + "{height:" + i + "px;float:left;}");
    p.push(d + "{width:" + b.width + "px;float:left;padding:0 " + b.padding + "px}");
    p.push(c + b.classCollapser + "{height:" + i + "px}");
    p.push(e + "{background:url(" + b.urlExpanded + ") no-repeat center transparent}");
    p.push(e + ":hover{background:url(" + b.urlExpandedHover + ") no-repeat center transparent}");
    p.push(g + "{background:url(" + b.urlCollapsed + ") no-repeat center transparent}");
    p.push(g + ":hover{background:url(" + b.urlCollapsedHover + ") no-repeat center transparent}");
    h.isNotNull(o) && p.push(a + o._options.classColHeader + " ." + b.classCollapser + "{height:" + o._options.height + "px}");
    return p.join("")
  };
  b._onAfterSetDatalist = function() {
    this._tree.destroy();
    this._tree = new e({list:this.grid.dataMgr.all, options:this._options.Tree});
    this._makeTree()
  };
  b._onAddDatarow = function(a) {
    a = this._tree.createNode(a);
    a._collapsed = this._options.beginCollapsed;
    a._shown = h.isNotNull(a.parent) && (a.parent === a.tree.root || a.parent._shown && !a.parent._collapsed) ? !0 : !1;
    h.isNotNull(a.parent) && a.parent.children.length === 1 && this.grid.view.rerenderCellByIdAndKey(this.grid.dataMgr.getId(a.parent.data), this.key);
    a._collapsed === !0 || a._shown === !1 ? a.traverseChildren({fn:function() {
      this._shown = !1
    }}) : a.traverseChildren({fn:function(a) {
      h.isNotNull(this.parent) && (this.parent === this.tree.root || this.parent._shown && !this.parent._collapsed) ? this._shown = !0 : (a.propagate = !1, this.traverse({fn:function() {
        this._shown = !1
      }}))
    }});
    this.grid.event.trigger("onCollapserTreeChange", !1, !0)
  };
  b._onAddDatalist = function(a) {
    for(var b = 0, c = a.length, d = this._tree, e = d.root, g = this._options.beginCollapsed, i = this.key, p = this.grid.view, o = this.grid.dataMgr, n, m = [], l;b < c;b++) {
      n = d.createNode(a[b]), n._collapsed = g, h.isNotNull(n.parent) && n.parent.children.length === 1 && m.push(n.parent.data)
    }
    if(p !== void 0) {
      b = 0;
      for(c = m.length;b < c;b++) {
        p.rerenderCellByIdAndKey(o.getId(m[b]), i)
      }
    }
    e.traverseChildren({fn:function(a) {
      l = this.parent;
      h.isNotNull(l) && (l === e || l._shown && !l._collapsed) ? this._shown = !0 : (a.propagate = !1, this.traverse({fn:function() {
        this._shown = !1
      }}))
    }});
    this.grid.event.trigger("onCollapserTreeChange", !1, !0)
  };
  b._onUpdateDatarow = function(a, b, c) {
    var d = this._tree, e = d._options.nodeKey, g = d._options.parentKey, i;
    b.hasOwnProperty(e) && (i = d.getNodeByNodeId(c[e]), d.changeNodeId(i, c[e], b[e]), this.grid.event.trigger("onCollapserTreeChange", !1, !0));
    b.hasOwnProperty(g) && (h.isNull(i) && (i = d.getNode(a)), d.changeParentId(i, c[g], b[g]), this.grid.event.trigger("onCollapserTreeChange", !1, !0))
  };
  b._onUpdateDatalist = function(a, b, c) {
    for(var b = this._tree, d = b._options.nodeKey, e = b._options.parentKey, g, i, p, o = [], n = [], m = 0, l = a.length;m < l;m++) {
      g = c[m], i = a[m], p = void 0, g.hasOwnProperty(d) && (h.isNull(p) && (p = b.getNodeByNodeId(g[d])), o.push({node:p, before:g[d], newId:i[d]})), g.hasOwnProperty(e) && (h.isNull(p) && (p = b.getNode(i)), n.push({node:p, before:g[e], newId:i[e]}))
    }
    a = o.length;
    c = n.length;
    if(a + c !== 0) {
      if(a + c > 10) {
        b.reattach()
      }else {
        for(m = 0;m < a;m++) {
          d = o[m], b.changeNodeId(d.node, d.before, d.newId)
        }
        for(m = 0;m < c;m++) {
          d = n[m], b.changeParentId(d.node, d.before, d.newId)
        }
      }
      this.grid.event.trigger("onCollapserTreeChange", !1, !0)
    }
  };
  b._onRemoveDatarow = function(a) {
    this._tree.destroyNodeByData(a);
    this.grid.event.trigger("onCollapserTreeChange", !1, !0)
  };
  b._onRemoveDatalist = function(a) {
    for(var b = 0, c = a.length, d = this._tree;b < c;b++) {
      d.destroyNodeByData(a[b])
    }
    this.grid.event.trigger("onCollapserTreeChange", !1, !0)
  };
  b._onAfterFilter = function(a, b) {
    var c = this._tree;
    if(b.length > 0) {
      var d = this.grid.dataMgr, e = a.length, g = d._idToIdx, i = d.idKey, p, o = 0, n = function(c) {
        h.isNotNull(this.parent) ? (p = this.parent.data, h.isNotNull(p) && !d.has(p) && (a.push(p), b.remove(p), g[p[i]] = -1)) : c.stop = !0
      };
      d._reidx();
      for(c.reattach();o < e;o++) {
        c.getNode(a[o]).traverse({up:!0, fn:n})
      }
      c.reattach(a);
      c.sortList(a);
      this.grid.event.trigger("onCollapserTreeChange", !1, !0)
    }else {
      c.reattach(a), this.grid.event.trigger("onCollapserTreeChange", !1, !0), this._filter(a, b)
    }
  };
  b._filter = function(a, b) {
    a.length = 0;
    this._tree.root.traverseChildren({fn:function() {
      this._shown ? a.push(this.data) : b.push(this.data)
    }})
  };
  b.toggleById = function(a) {
    if(h.isNotNull(a)) {
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
    if(h.hasTagAndClass(a.target, "DIV", this._options.classCollapser)) {
      return!1
    }
  };
  b._dblclickCanvas = function(a, b) {
    h.hasTagAndClass(a.target, "DIV", this._options.classCollapser) || this.toggleCollapse(this._tree.getNode(b.getDatarow()))
  };
  b._keydownColSel = function(a, b, c) {
    a.preventDefault();
    if(h.isNotNullAnd(b, c)) {
      var a = this._tree, c = a.getNode(c.getDatarow())._collapsed, d = this.grid.dataMgr.datalist, e, g;
      for(g in b) {
        b.hasOwnProperty(g) && g !== "length" && (e = a.getNode(d[g]), c ? this.expand(e) : this.collapse(e))
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
      var d = c.length;
      for(b = 0;b < d;b++) {
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
    this.grid.event.trigger("onCollapserTreeChange", !1, !0)
  };
  b._onRenderHeader = function(a) {
    a.push("<div id='" + this.mid + "h' onmousedown='JGM.m.Collapser." + this.mid + ".toggleMaster();' class='" + this._options.classCollapser + " " + this._options.classMasterCollapser);
    this._tree.root._collapsed ? a.push(" " + this._options.classCollapsed) : a.push(" " + this._options.classExpanded);
    a.push("'></div>")
  };
  b._onRenderCell = function(a, b, c, d, e) {
    a = this._tree.getNode(c);
    if(h.isNull(a)) {
      return null
    }
    c = this.grid.dataMgr.getId(c);
    b = this._options;
    e.push("<div class='" + b.classIndent + "' style='width:" + b.indentSize * a.getLevel() + "px;'></div><div ");
    a.isLeaf() ? e.push("class='" + b.classCollapser) : (e.push('onmousedown="JGM.m.Collapser.' + this.mid + ".toggleById('" + c + "');\" class='" + b.classCollapser), a._collapsed ? e.push(" " + b.classCollapsed) : e.push(" " + b.classExpanded));
    e.push("'></div>")
  };
  b.getLevel = function(a) {
    a = this._tree.getNode(a);
    return h.isNull(a) ? null : a.getLevel()
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
      var c = this._getCollapser(a.data), d = this._tree;
      c.length > 0 && this._setClass(c, !1);
      if(!b && a.parent === d.root) {
        for(var c = d.root.children, e = c.length, g = 0;g < e;g++) {
          if(c[g]._collapsed) {
            return
          }
        }
        this._setClass(this._master, d.root._collapsed = !1)
      }
    }
  };
  b._setClass = function(a, b) {
    if(!h.isNull(a)) {
      var c = this._options;
      b ? a.addClass(c.classCollapsed).removeClass(c.classExpanded) : a.addClass(c.classExpanded).removeClass(c.classCollapsed)
    }
  };
  b.toggleMaster = function() {
    var a = this._tree.root, b = a.children, c = b.length, d = 0;
    if(a._collapsed) {
      for(;d < c;d++) {
        this.expand(b[d], !0)
      }
      this._setClass(this._master, a._collapsed = !1)
    }else {
      for(;d < c;d++) {
        this.collapse(b[d], !0)
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
    var c = this._tree.getNode(a), d = this.checkMgr, e = [], g;
    b ? (c.traverseChildren({fn:function(a) {
      d.isChecked(this.data) ? a.propagate = !1 : (d._add(this.data), h.isNotNull(g = d.getCheckbox(this.data)) && e.push(g))
    }}), c.traverseParent({up:!0, fn:function(a) {
      h.isNull(this.data) || d.isChecked(this.data) ? a.stop = !0 : (d._add(this.data), h.isNotNull(g = d.getCheckbox(this.data)) && e.push(g))
    }}), i.CheckManager._check($(e)), d._updateMaster()) : (c.traverseChildren({fn:function(a) {
      d.isChecked(this.data) ? (d._remove(this.data), h.isNotNull(g = d.getCheckbox(this.data)) && e.push(g)) : a.propagate = !1
    }}), c.traverseParent({up:!0, fn:function(a) {
      if(h.isNull(this.data) || !d.isChecked(this.data)) {
        a.stop = !0
      }else {
        for(var b = 0, c = this.children, f = c.length;b < f;b++) {
          if(d.isChecked(c[b].data)) {
            a.stop = !0;
            return
          }
        }
        d._remove(this.data);
        h.isNotNull(g = d.getCheckbox(this.data)) && e.push(g)
      }
    }}), i.CheckManager._uncheck($(e)))
  };
  b._filterRefresh = function() {
    this._filter(this.grid.dataMgr.datalist, this.grid.dataMgr.failed);
    this.grid.dataMgr._finish()
  };
  b._getCollapser = function(a) {
    if(h.isNull(a)) {
      return $([])
    }
    a = h.findFirstByTagAndClass(this.grid.view.getCell(this.grid.dataMgr.getIdx(a), this.grid.colDefMgr.getIdxByKey(this.key)), "DIV", this._options.classCollapser);
    return a === void 0 ? $([]) : $(a)
  };
  b._getMaster = function() {
    this._master = $(document.getElementById(this.mid + "h"))
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "ColumnGroup.js"...');
jx.grid.ColumnGroup = {};
(function() {
  function g(b) {
    this.mid = b.mid;
    this.grid = b.grid;
    this.grid.colGroup = this;
    this._options = i._extend({key:void 0, padColKeys:[], sumColKeys:[], prefix:"합계: ", Collapser:{indentSize:0}}, b.options);
    this._options.Collapser.key = this._options.key;
    this._parentMap = {};
    this.__init()
  }
  var i = goog.getObjectByName("jx.grid"), h = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.getObjectByName("jx.grid.Collapser");
  goog.exportSymbol("jx.grid.ColumnGroup", g);
  g.getInstance = function(b) {
    return new g(b)
  };
  var e = g.prototype;
  e.__init = function() {
    var b = this.grid, a = b.dataMgr, e = this._options;
    this.bindEvents();
    b = this.collapser = i.create("Collapser", {grid:b, options:e.Collapser});
    delete e.Collapser;
    this._processData(a.all);
    b.__init();
    a.refresh()
  };
  e.bindEvents = function() {
    var b;
    b = {onBeforeSetDatalist:this._removeAll, "onAfterSetDatalist onAddDatalist":this._processData, onAddDatarow:this._onAddDatarow, onUpdateDatarow:this._onUpdateDatarow, onUpdateDatalist:this._onUpdateDatalist, onRemoveDatarow:this._onRemoveDatarow, onRemoveDatalist:this._onRemoveDatalist, onDestroy:this._destroy};
    if(this._options.sumColKeys.length !== 0) {
      var a = this.mid, e = this.grid.dataMgr._consts._notReal, c = 0, d, g = this._options.sumColKeys, h = this._options.prefix, i = g.length;
      for(d = function(b, c, d, g, i) {
        d[e] === a && i.push(h)
      };c < i;c++) {
        b["onRenderCell_" + g[c] + "_prepend"] = d
      }
      b.onCollapserTreeChange = this._onCollapserTreeChange
    }
    this.grid.event.bind(b, this)
  };
  e._destroy = function() {
    i._destroy(this, {name:"ColumnGroup", path:"colGroup", property:"collapser", map:"_parentMap _options"})
  };
  e._processData = function(b) {
    for(var a = b.length, e = this._options.key, c = this._options.padColKeys, d = this.grid.dataMgr, g = d._consts._notReal, i = d.idKey, s = this.collapser, p = s._tree._options.nodeKey, o = s._tree._options.parentKey, n = [], m = 0;m < a;m++) {
      this._addData(b[m], e, i, g, p, o, c, n)
    }
    n.length !== 0 && (d.all.pushList(n), d.makeCompositeKeyList(n, !0), d.addListToIdMap(n), h.isNotNull(s) && s._onAddDatalist(n));
    return n
  };
  e._addData = function(b, a, e, c, d, g, h, i) {
    var p = b[a], o = this._parentMap;
    o.hasOwnProperty(p) || (a = this._makeParent(b, a, e, p, c, d, h), i.push(a), o[p] = a);
    b[d] = b[e];
    b[g] = this.mid + p
  };
  e._makeParent = function(b, a, e, c, d, g, h) {
    var i = {}, p = 0, o = h.length;
    i[d] = this.mid;
    i[g] = this.mid + c;
    i[a] = c;
    for(i[e] = (this.grid.colDefMgr.getByKey(a).name || a) + ": " + c;p < o;p++) {
      i[h[p]] = b[h[p]]
    }
    return i
  };
  e._isParent = function(b) {
    return b[this.grid.dataMgr._consts._notReal] === this.mid
  };
  e._removeAll = function() {
    this._parentMap = {}
  };
  e._onAddDatarow = function(b) {
    var a = [], e = this._options, c = this.grid.dataMgr, d = this.collapser, g = d._tree._options;
    this._addData(b, e.key, c.idKey, c._consts._notReal, g.nodeKey, g.parentKey, e.padColKeys, a);
    a.length !== 0 && (b = a[0], c.all.push(b), c.makeCompositeKey(b, !0), c.addToIdMap(b), d._onAddDatarow(b))
  };
  e._onUpdateDatarow = function(b, a, e) {
    if(a.hasOwnProperty(this._options.key)) {
      var c = this._options.key, a = a[c], e = e[c], d = this.mid, c = this.collapser, g = c._tree, h = g._options.parentKey, i = {}, p = {}, o = this._parentMap;
      o.hasOwnProperty(a) || this._onAddDatarow(b);
      i[h] = d + a;
      p[h] = d + e;
      c._onUpdateDatarow(b, i, p);
      b = g.getNode(o[e]);
      b.children.length === 0 && (this.grid.dataMgr.all.remove(b.data), delete o[e], c._onRemoveDatarow(b.data))
    }
  };
  e._onUpdateDatalist = function(b, a, e) {
    var c = this._options.key, d = this.mid, g = this.collapser, h = g._tree, i = h._options.parentKey, p, o = {};
    p = {};
    for(var n = [], m = [], l = [], q = 0, r = b.length;q < r;q++) {
      p = a[q], p.hasOwnProperty(c) && (o = {}, o[i] = d + p[c], n.push(o), p = {}, p[i] = d + e[q][c], m.push(p), l.push(b[q]))
    }
    if(l.length !== 0) {
      b = this._parentMap;
      a = [];
      this._processData(l);
      g._onUpdateDatalist(l, n, m);
      q = 0;
      for(r = m.length;q < r;q++) {
        n = m[q][i], b.hasOwnProperty(n) && (l = h.getNode(b[n]), l.children.length === 0 && (delete b[n], a.push(l.data)))
      }
      a.length !== 0 && (g._onRemoveDatalist(a), this.grid.dataMgr.all.removeList(a))
    }
  };
  e._onRemoveDatarow = function(b) {
    this._isParent(b) ? delete this._parentMap[b[this._options.key]] : (b = this.collapser._tree.getNode(b).parent, b.children.length === 1 && this.grid.dataMgr.remove(b.data))
  };
  e._onRemoveDatalist = function(b) {
    for(var a = 0, e = b.length;a < e;a++) {
      this._onRemoveDatarow(b[a])
    }
  };
  e._onCollapserTreeChange = function() {
    for(var b = {}, a = this._options.sumColKeys, e = a.length, c = 0, d = this.grid.dataMgr._consts._notReal, g = this.mid, h, i, p;c < e;c++) {
      b[a[c]] = 0
    }
    this.collapser._tree.root.traverseChildren({post:!0, fn:function() {
      h = this.data;
      c = 0;
      if(h[d] === g) {
        for(;c < e;c++) {
          i = a[c], h[i] = b[i], b[i] = 0
        }
      }else {
        if(!h.hasOwnProperty(d)) {
          for(;c < e;c++) {
            if(typeof(p = h[a[c]]) === "string") {
              p = p.toFloat()
            }
            b[a[c]] += isNaN(p) ? 0 : p
          }
        }
      }
    }})
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "DataCreator.js"...');
jx.grid.DataCreator = {};
(function() {
  function g(b) {
    this.mid = b.mid;
    this._ctnr = b.container;
    this.grid = b.grid;
    this.grid.creator = this;
    this._options = i._extend({background:"#dfdfdf", borderThickness:0, border:"solid #D6D6D6", inputBorder:"solid #A7A7A7", inputBorderThickness:1, inputHeight:18, inputMargin:8, nameMargin:2, font:"12px Arial,Helvetica,sans-serif", height:28, padding:3, classCreatorIcon:"creator-icon", creatorIconUrl:this.grid._options.imageUrl + "data-creator-icon.png", creatorIconWidth:13, creatorIconHeight:13, classCreator:"data-creator", classColName:"data-creator-name", inputBorderRadius:3}, b.options);
    this._inputMap = {};
    this.__init()
  }
  var i = goog.getObjectByName("jx.grid"), h = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.DataCreator", g);
  g.getInstance = function(b) {
    return new g(b)
  };
  var e = g.prototype;
  e.__init = function() {
    this._creator = $("<div class='" + this._options.classCreator + "'>").appendTo(this._ctnr);
    this.bindEvents()
  };
  e.bindEvents = function() {
    this.grid.event.bind({onRenderModules:this._onRenderModules, onCreateCss:this._onCreateCss, onDestroy:this._destroy}, this)
  };
  e._onCreateCss = function() {
    var b = "#" + this.grid.mid + " .", a = this._options, e = [];
    e.push(b + a.classCreator + "{" + i._CONST._cssUnselectable + "float:left;width:100%;padding-left:8px;background:" + a.background + ";border-top:" + (a.borderThickness + "px " + a.border) + ";font:" + a.font + "}");
    e.push(b + a.classCreator + " button{float:left;margin:" + a.padding + "px " + a.padding + "px 0 0;height:" + (a.height - 2 * a.padding) + "px}");
    e.push(b + a.classCreator + " input{float:left;padding:0;margin-top:" + (a.height - a.inputHeight - 2 * a.inputBorderThickness) / 2 + "px;height:" + a.inputHeight + "px;border:" + a.inputBorderThickness + "px " + a.inputBorder + ";border-radius:" + a.inputBorderRadius + "px;-moz-border-radius:" + a.inputBorderRadius + "px}");
    e.push(b + a.classCol + "{float:left;overflow:hidden;white-space:nowrap;line-height:" + a.height + "px;margin-right:" + a.inputMargin + "px}");
    e.push(b + a.classColName + "{float:left;margin-right:" + a.nameMargin + "px}");
    e.push(b + a.classCreatorIcon + "{background:url(" + a.creatorIconUrl + ") no-repeat center;width:" + a.creatorIconWidth + "px;height:" + a.creatorIconHeight + "px}");
    return e.join("")
  };
  e._onRenderModules = function() {
    for(var b = [], a = this.grid.colDefMgr.getAll(), e = a.length, c, d = this._options, g = d.classCol, i = d.classColName, s = this, p = this._creator, o = this._inputMap, n = 0, m = function(a) {
      a.which === h.keyMapKeydown.enter && s._addData()
    };n < e;n++) {
      c = a[n], c.inputOnCreate === !0 && b.push("<div key='" + c.key + "' class='" + g + "'><div class='" + i + "'>" + c.name + "</div><input type='text' value='" + h.ifNull(c.defaultValue, "") + "' style='width:" + c.width + "px'/></div>")
    }
    p[0].innerHTML = b.join("") + "<button type='button' onclick='JGM.m.DataCreator." + this.mid + "._addData()'>등록</button><button type='button' onclick='JGM.m.DataCreator." + this.mid + "._reset()'>초기화</button>";
    for(n = 0;n < e;n++) {
      c = a[n], c.inputOnCreate === !0 && (o[c.key] = p.find("div[key='" + c.key + "'] input").keyup(m))
    }
    this.grid.menubar != null && (this.grid.menubar.addIcon(d.classCreatorIcon, "데이터 로우를 추가합니다.", d.creatorIconWidth, d.creatorIconHeight, function() {
      p.toggle("fast")
    }), p.hide())
  };
  e._addData = function() {
    var b, a = this._inputMap, e = this.grid.colDefMgr, c = {}, d = e.getAll(), g = d.length, h = 0;
    for(b in a) {
      a.hasOwnProperty(b) && e.getByKey(b)
    }
    for(;h < g;h++) {
      e = d[h], b = e.key, a.hasOwnProperty(b) ? c[b] = a[b][0].value : e.defaultValue !== void 0 && (c[b] = e.defaultValue)
    }
    this.grid.event.trigger("onAfterDataCreate", [c], !0);
    this.grid.dataMgr.add(c, {isNew:!0})
  };
  e._reset = function() {
    var b, a = this.grid.colDefMgr, e, c = this._inputMap;
    for(b in c) {
      if(c.hasOwnProperty(b) && (e = a.getByKey(b), e.defaultValue !== void 0)) {
        c[b][0].value = e.defaultValue
      }
    }
  };
  e._destroy = function() {
    var b, a = this._inputMap;
    for(b in a) {
      a.hasOwnProperty(b) && i._delete$(a, b)
    }
    i._destroy(this, {name:"DataCreator", path:"creator", $:"_creator", map:"_inputMap _options"})
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "SearchManager.js"...');
jx.grid.SearchManager = {};
(function() {
  function g(a) {
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
  var i = goog.getObjectByName("jx.grid"), h = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.SearchManager", g);
  var e = g.prototype;
  e._onCreateCss = function() {
    var a = "#" + this.grid.mid + " .", b = this._options, c = b.borderThickness + "px " + b.border, d = "border-radius:" + b.tagsBorderRadius + "px;-moz-border-radius:" + b.tagsBorderRadius + "px", e = b.advButtonBorderThickness + "px " + b.advButtonBorder, f = b.advButtonBorderThickness + "px " + b.advButtonBorderHover, g = b.advButtonBorderThickness + "px " + b.advButtonBorderActive, h = b.advButtonBorderThickness + "px " + b.advButtonBorderOpened, j = b.tagsHeight - 2 * b.tagsPadding, k = j - 
    2 * b.advButtonBorderThickness, l = j - 2 * b.tagBorderThickness, m = a + b.classMask, n = a + b.classSearchbar, p = a + b.classAdvButton, q = a + b.classRemoveTag, o = [];
    o.push(m + "{" + i._CONST._cssUnselectable + "overflow:hidden;float:left;background:" + b.background + "}");
    o.push(m + " button{margin:0;padding:0 3px}");
    o.push(m + " input{border:" + b.inputBorder + ";padding:" + b.inputPadding + "}");
    o.push(n + "{float:left;width:" + b.searchbarWidth + ";margin:" + b.searchbarMargin + "px 2px;height:" + b.searchbarHeight + "px;" + d + "}");
    o.push(a + b.classTagbar + "{float:left;cursor:default;height:" + (b.tagsHeight - b.tagsPadding) + "px;padding:" + b.tagsPadding + "px 0 0 " + b.tagsPadding + "px;border-bottom:" + c + "}");
    o.push(p + "{float:left;margin-right:" + b.tagsPadding + "px;background:" + b.advButtonBg + ";border:" + e + ";padding:0 " + b.advButtonPadding + "px;" + d + "}");
    o.push(p + ":hover{background:" + b.advButtonBgHover + ";border:" + f + "}");
    o.push(p + ".opened{background:" + b.advButtonBgOpened + ";border:" + h + "}");
    o.push(p + ":active{background:" + b.advButtonBgActive + ";border:" + g + "}");
    o.push(a + b.classAdvButtonName + "{float:left;color:" + b.advButtonColor + ";font:" + b.advButtonFont + ";line-height:" + k + "px}");
    o.push(a + b.classAdvButtonIcon + "{float:left;height:" + k + "px;margin-left:" + b.advButtonIconMargin + "px;background:url(" + b.advButtonIconUrl + ") no-repeat center;width:" + b.advButtonIconWidth + "px}");
    o.push(p + ".opened ." + b.classAdvButtonIcon + "{background:url(" + b.advButtonIconCloseUrl + ") no-repeat center}");
    o.push(a + b.classTag + "{float:left;border:" + b.tagBorderThickness + "px " + b.tagBorder + ";margin:0 " + b.tagsPadding + "px " + b.tagsPadding + "px 0;padding:0 " + b.tagPadding + "px;background:" + b.tagBackground + ";" + d + "}");
    o.push(a + b.classTagName + "{float:left;color:" + b.tagColor + ";font:" + b.tagFont + ";line-height:" + l + "px}");
    o.push(q + "{float:left;margin-left:" + b.tagPadding + "px;background:url(" + b.tagRemoveIconUrl + ") no-repeat center;width:" + b.tagRemoveIconWidth + "px;height:" + l + "px}");
    o.push(q + ":hover{background:url(" + b.tagRemoveIconHoverUrl + ") no-repeat center}");
    o.push(q + ":active{background:url(" + b.tagRemoveIconActiveUrl + ") no-repeat center}");
    o.push(a + b.classClearTags + "{height:" + j + "px}");
    o.push(a + b.classAdvanced + "{cursor:default;font:" + b.advFont + ";border-bottom:" + c + "}");
    o.push(a + b.classOptionCol + "{display:inline-block;vertical-align:top}");
    o.push(a + b.classOptionCol + " input{width:" + b.advInputWidth + "px;margin-right:2px;" + d + "}");
    o.push(a + b.classSearchIcon + "{background:url(" + b.searchIconUrl + ") no-repeat center;width:" + b.searchIconWidth + "px;height:" + b.searchIconHeight + "px}");
    return o.join("")
  };
  g.getInstance = function(a) {
    return new g(a)
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
        var p = this._global, q;
        i = this.grid.colDefMgr.get().filter(function(a) {
          return!a.noSearch
        });
        var r = i.length, s = [];
        for(n = 0;n < r;n++) {
          s.push(i[n].key)
        }
      }
      n = g - 1;
      a:for(;n >= 0;n--) {
        g = a[n];
        if(m) {
          i = p.slice();
          c = 0;
          for(;i.length !== 0 && c < r;c++) {
            if((q = g[s[c]]) != null) {
              h.isString(q) || (q = q.toString());
              for(o = i.length - 1;o >= 0;o--) {
                q.indexOf(i[o]) !== -1 && i.removeAt(o)
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
    var f = this._filterMap, h, i = this._codeMap;
    if(f.hasOwnProperty(a) && (h = f[a]).hasOwnProperty(c)) {
      f = h[c];
      if(d == null) {
        var j = f.input, d = $.trim(j.val());
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
      f = f.option;
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
          k.hasOwnProperty(n) && (p = k[n], l = o.parser != null ? o.parser(n) : n, g._checkDisable(f.type, p.option.type, h, d, l) && (delete i[a + "@T" + p.option.tag + "@B" + l], p.tag.remove(), delete p.tag, delete p.option, delete p.fn, delete k[n]))
        }
      }
    }
    i[a + "@T" + c + "@B" + d] = !0;
    this._createTag(a, f, d, b);
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
  var b = g.CONST = {lt:0, lte:1, eq:2, neq:3, gt:4, gte:5, and:6, or:7, T:8, F:9}, e = b.lt, a = b.gt, f = b.eq, c = b.neq, d = b.and, j = b.or, k = b.T, b = b.F, s = g._comparator = {}, p = s[e] = function(a, b) {
    return a <= b
  }, o = s[a] = function(a, b) {
    return a >= b
  }, n = s[f] = function(a, b) {
    return a === b
  }, k = s[k] = function() {
    return!0
  }, m = g._disableMap = {}, l = m[e] = {}, q = m[a] = {}, r = m[f] = {}, m = m[c] = {};
  s[b] = function() {
    return!1
  };
  l[e] = {};
  l[e][d] = k;
  l[e][j] = k;
  l[a] = {};
  l[a][d] = p;
  l[a][j] = o;
  l[f] = {};
  l[f][d] = k;
  l[f][j] = o;
  l[c] = {};
  l[c][d] = p;
  l[c][j] = k;
  q[e] = {};
  q[e][d] = o;
  q[e][j] = p;
  q[a] = {};
  q[a][d] = k;
  q[a][j] = k;
  q[f] = {};
  q[f][d] = k;
  q[f][j] = p;
  q[c] = {};
  q[c][d] = o;
  q[c][j] = k;
  r[e] = {};
  r[e][d] = k;
  r[e][j] = p;
  r[a] = {};
  r[a][d] = k;
  r[a][j] = o;
  r[f] = {};
  r[f][d] = k;
  r[f][j] = n;
  r[c] = {};
  r[c][d] = k;
  r[c][j] = k;
  m[e] = {};
  m[e][d] = o;
  m[e][j] = k;
  m[a] = {};
  m[a][d] = p;
  m[a][j] = k;
  m[f] = {};
  m[f][d] = k;
  m[f][j] = k;
  m[c] = {};
  m[c][d] = n;
  m[c][j] = k;
  g._checkDisable = function(a, b, c, d, e) {
    try {
      return this._disableMap[a][b][c](d, e)
    }catch(f) {
      return!1
    }
  };
  g._numberFilter = [{name:"gt", tag:">", type:a, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 큰"
  }, fn:function(a) {
    h.isString(a) && (a = a.toFloat());
    return function(b) {
      return b > a
    }
  }}, {name:"gte", tag:">=", type:a, comment:function(a, b) {
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
  }}, {name:"eq", tag:"=", type:f, comment:function(a, b) {
    return a + " 이(가) " + b + "인"
  }, fn:function(a) {
    h.isString(a) && (a = a.toFloat());
    return function(b) {
      return b === a
    }
  }}, {name:"neq", tag:"!=", type:c, comment:function(a, b) {
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
  g._stringFilter = [{name:"to", tag:"<=", type:e, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 사전에서 이전인"
  }, fn:function(a) {
    a = $.trim(a).toLowerCase();
    return function(b) {
      return b.toLowerCase() <= a
    }
  }}, {name:"from", tag:">=", type:a, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 사전에서 이후인"
  }, fn:function(a) {
    a = $.trim(a).toLowerCase();
    return function(b) {
      return b.toLowerCase() >= a
    }
  }}, {name:"equals", tag:"=", type:f, comment:function(a, b) {
    return a + " 이(가) " + b + "와(과) 같은"
  }, fn:function(a) {
    a = $.trim(a).toLowerCase();
    return function(b) {
      return b.toLowerCase() === a
    }
  }}, {name:"notEquals", tag:"!=", type:c, comment:function(a, b) {
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
