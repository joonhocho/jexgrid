/**
 * JexGrid Build 52
 * Date: Mon Oct 17 18:38:00 KST 2011
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
      var g = Object(this), d = g.length >>> 0;
      if(d === 0) {
        return-1
      }
      var b = 0;
      arguments.length > 0 && (b = Number(arguments[1]), b !== b ? b = 0 : b !== 0 && b !== 1 / 0 && b !== -(1 / 0) && (b = (b > 0 || -1) * Math.floor(Math.abs(b))));
      if(b >= d) {
        return-1
      }
      for(b = b >= 0 ? b : Math.max(d - Math.abs(b), 0);b < d;b++) {
        if(b in g && g[b] === f) {
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
      var g = Object(this), d = g.length >>> 0;
      if(d === 0) {
        return-1
      }
      var b = d;
      arguments.length > 1 && (b = Number(arguments[1]), b !== b ? b = 0 : b !== 0 && b !== 1 / 0 && b !== -(1 / 0) && (b = (b > 0 || -1) * Math.floor(Math.abs(b))));
      for(d = b >= 0 ? Math.min(b, d - 1) : d - Math.abs(b);d >= 0;d--) {
        if(d in g && g[d] === f) {
          return d
        }
      }
      return-1
    }
  }
  if(!f.filter) {
    f.filter = function(f, g) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var d = Object(this), b = d.length >>> 0;
      if(typeof f !== "function") {
        throw new TypeError;
      }
      for(var a = [], e = 0;e < b;e++) {
        if(e in d) {
          var c = d[e];
          f.call(g, c, e, d) && a.push(c)
        }
      }
      return a
    }
  }
  if(!f.forEach) {
    f.forEach = function(f, g) {
      var d, b = Object(this), a = b.length >>> 0, e = 0;
      if(!f || !f.call) {
        throw new TypeError;
      }
      for(g && (d = g);e < a;) {
        var c = String(e);
        b.hasOwnProperty(c) && (c = b[c], f.call(d, c, e, b));
        e++
      }
    }
  }
  if(!f.every) {
    f.every = function(f, g) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var d = Object(this), b = d.length >>> 0;
      if(typeof f !== "function") {
        throw new TypeError;
      }
      for(var a = 0;a < b;a++) {
        if(a in d && !f.call(g, d[a], a, d)) {
          return!1
        }
      }
      return!0
    }
  }
  if(!f.map) {
    f.map = function(f, g) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var d = Object(this), b = d.length >>> 0;
      if(typeof f !== "function") {
        throw new TypeError;
      }
      for(var a = Array(b), e = 0;e < b;e++) {
        e in d && (a[e] = f.call(g, d[e], e, d))
      }
      return a
    }
  }
  if(!f.some) {
    f.some = function(f, g) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var d = Object(this), b = d.length >>> 0;
      if(typeof f !== "function") {
        throw new TypeError;
      }
      for(var a = 0;a < b;a++) {
        if(a in d && f.call(g, d[a], a, d)) {
          return!0
        }
      }
      return!1
    }
  }
  if(!f.reduce) {
    f.reduce = function(f) {
      var g, d = this.length, b;
      if(typeof f !== "function") {
        throw new TypeError("First argument is not callable");
      }
      if((d == 0 || d === null) && arguments.length <= 1) {
        throw new TypeError("Array length is 0 and no second argument");
      }
      arguments.length <= 1 ? (b = this[0], g = 1) : b = arguments[1];
      for(g = g || 0;g < d;++g) {
        g in this && (b = f.call(void 0, b, this[g], g, this))
      }
      return b
    }
  }
  if(!f.reduceRight) {
    f.reduceRight = function(f) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var g = Object(this), d = g.length >>> 0;
      if(typeof f !== "function") {
        throw new TypeError;
      }
      if(d === 0 && arguments.length === 1) {
        throw new TypeError;
      }
      d -= 1;
      var b;
      if(arguments.length >= 2) {
        b = arguments[1]
      }else {
        do {
          if(d in this) {
            b = this[d--];
            break
          }
          if(--d < 0) {
            throw new TypeError;
          }
        }while(1)
      }
      for(;d >= 0;) {
        d in g && (b = f.call(void 0, b, g[d], d, g)), d--
      }
      return b
    }
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "engine_extension.js"...');
var engine_extension = {};
(function() {
  var f = Number.prototype, i = String.prototype, g = Array.prototype;
  if(!f.toFixedFloat) {
    f.toFixedFloat = function(d) {
      return parseFloat(this.toFixed(d))
    }
  }
  if(!i.toInt) {
    i.toInt = function() {
      var d;
      d = parseInt(this, 10);
      if(d === d) {
        return d
      }
      if((d = this.replace(/[^\d\.\-]/g, "")).length === 0) {
        return NaN
      }
      for(var b, a = 0, e = 0, c = d.length, h = 0, j = !1;h < c;h++) {
        if(b = d.charAt(h), b === ".") {
          if(++a === 2) {
            j = !0;
            break
          }
        }else {
          if(b === "-" && ++e === 2) {
            j = !0;
            break
          }
        }
      }
      return j === !0 && (d = d.replace(/[\.\-]/g, "")).length === 0 ? NaN : /^-*0*\./.test(d) || (d = d.replace(/^-0+/, "-")).length === 0 || (d = d.replace(/^0+/, "")).length === 0 ? 0 : parseInt(d, 10)
    }
  }
  if(!i.toFloat) {
    i.toFloat = function() {
      var d;
      if((d = this.replace(/[^-\d\.]/g, "")).length === 0) {
        return NaN
      }
      for(var b = 0, a = d.length, e, c = 0, h = 0;b < a;b++) {
        if(e = d.charAt(b), e === ".") {
          if(c !== 0) {
            return NaN
          }else {
            c++
          }
        }else {
          if(e === "-") {
            if(h !== 0) {
              return NaN
            }else {
              h++
            }
          }
        }
      }
      return parseFloat(d)
    }
  }
  if(!g.remove) {
    g.remove = function(d) {
      if(this.length === 0) {
        return-1
      }
      d = this.indexOf(d);
      d !== -1 && this.splice(d, 1);
      return d
    }
  }
  if(!g.removeAll) {
    g.removeAll = function(d) {
      if(this.length === 0) {
        return this
      }
      for(var b = this.length;(b = this.lastIndexOf(d, b - 1)) !== -1;) {
        if(this.splice(b, 1), b === 0) {
          break
        }
      }
      return this
    }
  }
  if(!g.removeList) {
    g.removeList = function(d) {
      if(this.length === 0 || d.length === 0) {
        return this
      }
      for(var b = d.length, a = 0, e;a < b;a++) {
        (e = this.indexOf(d[a])) !== -1 && this.splice(e, 1)
      }
      return this
    }
  }
  if(!g.removeAt) {
    g.removeAt = function(d) {
      if(this.length !== 0 && (d < 0 && (d = this.length + d), d < 0 && (d = 0), this.hasOwnProperty(d) && d < this.length)) {
        return this.splice(d, 1)[0]
      }
    }
  }
  if(!g.addAt) {
    g.addAt = function(d, b) {
      this.splice(d, 0, b);
      return b
    }
  }
  if(!g.pushList) {
    g.pushList = function(d) {
      return d.length === 0 ? this.length : g.push.apply(this, d)
    }
  }
  if(!g.pushListAt) {
    g.pushListAt = function(d, b) {
      if(b.length === 0) {
        return this.length
      }
      var a = [d, 0];
      g.push.apply(a, b);
      g.splice.apply(this, a);
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
goog.exportSymbol_ = function(f, i, g) {
  f = f.split(".");
  g = g || goog.global;
  !(f[0] in g) && g.execScript && g.execScript("var " + f[0]);
  for(var d;f.length && (d = f.shift());) {
    !f.length && goog.isDef(i) ? g[d] = i : g = g[d] ? g[d] : g[d] = {}
  }
};
goog.getObjectByName = function(f, i) {
  for(var g = f.split("."), d = i || goog.global, b;b = g.shift();) {
    if(goog.isDefAndNotNull(d[b])) {
      d = d[b]
    }else {
      return null
    }
  }
  return d
};
goog.globalize = function(f, i) {
  var g = i || goog.global, d;
  for(d in f) {
    g[d] = f[d]
  }
};
goog.addDependency = function(f, i, g) {
  if(!COMPILED) {
    for(var d, f = f.replace(/\\/g, "/"), b = goog.dependencies_, a = 0;d = i[a];a++) {
      b.nameToPath[d] = f, f in b.pathToNames || (b.pathToNames[f] = {}), b.pathToNames[f][d] = !0
    }
    for(d = 0;i = g[d];d++) {
      f in b.requires || (b.requires[f] = {}), b.requires[f][i] = !0
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
          var g = f[i].src, d = g.lastIndexOf("?"), d = d == -1 ? g.length : d;
          if(g.substr(d - 7, 7) == "base.js") {
            goog.basePath = g.substr(0, d - 7);
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
    function f(a) {
      if(!(a in d.written)) {
        if(!(a in d.visited) && (d.visited[a] = !0, a in d.requires)) {
          for(var b in d.requires[a]) {
            if(!goog.isProvided_(b)) {
              if(b in d.nameToPath) {
                f(d.nameToPath[b])
              }else {
                throw Error("Undefined nameToPath for " + b);
              }
            }
          }
        }
        a in g || (g[a] = !0, i.push(a))
      }
    }
    var i = [], g = {}, d = goog.dependencies_, b;
    for(b in goog.included_) {
      d.written[b] || f(b)
    }
    for(b = 0;b < i.length;b++) {
      if(i[b]) {
        goog.importScript_(goog.basePath + i[b])
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
      var g = Object.prototype.toString.call(f);
      if(g == "[object Window]") {
        return"object"
      }
      if(g == "[object Array]" || typeof f.length == "number" && typeof f.splice != "undefined" && typeof f.propertyIsEnumerable != "undefined" && !f.propertyIsEnumerable("splice")) {
        return"array"
      }
      if(g == "[object Function]" || typeof f.call != "undefined" && typeof f.propertyIsEnumerable != "undefined" && !f.propertyIsEnumerable("call")) {
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
    for(var g in f) {
      if(g == i && Object.prototype.hasOwnProperty.call(f, i)) {
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
    var i = i == "array" ? [] : {}, g;
    for(g in f) {
      i[g] = goog.cloneObject(f[g])
    }
    return i
  }
  return f
};
goog.bindNative_ = function(f, i, g) {
  return f.call.apply(f.bind, arguments)
};
goog.bindJs_ = function(f, i, g) {
  if(!f) {
    throw Error();
  }
  if(arguments.length > 2) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var b = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(b, d);
      return f.apply(i, b)
    }
  }else {
    return function() {
      return f.apply(i, arguments)
    }
  }
};
goog.bind = function(f, i, g) {
  goog.bind = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? goog.bindNative_ : goog.bindJs_;
  return goog.bind.apply(null, arguments)
};
goog.partial = function(f, i) {
  var g = Array.prototype.slice.call(arguments, 1);
  return function() {
    var d = Array.prototype.slice.call(arguments);
    d.unshift.apply(d, g);
    return f.apply(this, d)
  }
};
goog.mixin = function(f, i) {
  for(var g in i) {
    f[g] = i[g]
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
        var i = goog.global.document, g = i.createElement("script");
        g.type = "text/javascript";
        g.defer = !1;
        g.appendChild(i.createTextNode(f));
        i.body.appendChild(g);
        i.body.removeChild(g)
      }
    }else {
      throw Error("goog.globalEval not available");
    }
  }
};
goog.evalWorksForGlobals_ = null;
goog.getCssName = function(f, i) {
  var g = function(b) {
    return goog.cssNameMapping_[b] || b
  }, d;
  d = goog.cssNameMapping_ ? goog.cssNameMappingStyle_ == "BY_WHOLE" ? g : function(b) {
    for(var b = b.split("-"), a = [], e = 0;e < b.length;e++) {
      a.push(g(b[e]))
    }
    return a.join("-")
  } : function(b) {
    return b
  };
  return i ? f + "-" + d(i) : d(f)
};
goog.setCssNameMapping = function(f, i) {
  goog.cssNameMapping_ = f;
  goog.cssNameMappingStyle_ = i
};
goog.getMsg = function(f, i) {
  var g = i || {}, d;
  for(d in g) {
    var b = ("" + g[d]).replace(/\$/g, "$$$$"), f = f.replace(RegExp("\\{\\$" + d + "\\}", "gi"), b)
  }
  return f
};
goog.exportSymbol = function(f, i, g) {
  goog.exportSymbol_(f, i, g)
};
goog.exportProperty = function(f, i, g) {
  f[i] = g
};
goog.inherits = function(f, i) {
  function g() {
  }
  g.prototype = i.prototype;
  f.superClass_ = i.prototype;
  f.prototype = new g;
  f.prototype.constructor = f
};
goog.base = function(f, i, g) {
  var d = arguments.callee.caller;
  if(d.superClass_) {
    return d.superClass_.constructor.apply(f, Array.prototype.slice.call(arguments, 1))
  }
  for(var b = Array.prototype.slice.call(arguments, 2), a = !1, e = f.constructor;e;e = e.superClass_ && e.superClass_.constructor) {
    if(e.prototype[i] === d) {
      a = !0
    }else {
      if(a) {
        return e.prototype[i].apply(f, b)
      }
    }
  }
  if(f[i] === d) {
    return f.constructor.prototype[i].apply(f, b)
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
  function f(a, b) {
    if(a) {
      var h = {}, e, c;
      if(b) {
        for(e in a) {
          if(a.hasOwnProperty(e) && (c = a[e]) !== void 0) {
            h[e] = c
          }
        }
      }else {
        for(e in a) {
          if(a.hasOwnProperty(e)) {
            switch(c = a[e], typeof c) {
              case "undefined":
                break;
              case "object":
                h[e] = f(c);
                break;
              default:
                h[e] = c
            }
          }
        }
      }
      return h
    }
    return null
  }
  function i(a, b, h) {
    if(b) {
      if(a) {
        var e, c, j;
        if(h) {
          for(e in b) {
            if(b.hasOwnProperty(e) && (j = b[e]) !== void 0) {
              a[e] = j
            }
          }
        }else {
          for(e in b) {
            if(b.hasOwnProperty(e)) {
              switch(j = b[e], typeof j) {
                case "undefined":
                  break;
                case "object":
                  j && a.hasOwnProperty(e) && (c = a[e]) && typeof c == "object" ? i(c, j) : a[e] = j;
                  break;
                default:
                  a[e] = j
              }
            }
          }
        }
        return a
      }
      return b
    }
    return a
  }
  function g(a, b, h, c) {
    if(r.hasOwnProperty(a)) {
      if(h != null) {
        throw Error("empty element, " + a + ", cannot have content!");
      }
      return q & c ? "<" + a + d(b, !0) + "/>" : "<" + e(a) + d(b, !1) + "/>"
    }
    q & c ? (b = "<" + a + d(b, !0) + ">", h != null && (b += h)) : (a = e(a), b = "<" + a + d(b, !1) + ">", h != null && (b += e(h)));
    return n & c ? b : b + "</" + a + ">"
  }
  function d(a, h) {
    if(a) {
      var c = "", j, d, r;
      if(a.style) {
        j = a.style, delete a.style
      }
      if(h) {
        for(d in a) {
          a.hasOwnProperty(d) && (k.hasOwnProperty(d) ? a[d] && (c += " " + d + '="' + d + '"') : (r = a[d], r != null && (c += " " + d + '="' + r + '"')))
        }
      }else {
        for(d in a) {
          a.hasOwnProperty(d) && (k.hasOwnProperty(d) ? a[d] && (c += " " + d + '="' + d + '"') : (r = a[d], r != null && (c += " " + e(d) + '="' + e(r) + '"')))
        }
      }
      if(j) {
        c += b(j, h), a.style = j
      }
      return c
    }
    return""
  }
  function b(a, b) {
    if(a) {
      if(typeof a == "string") {
        return' style="' + (b ? a : e(a)) + '"'
      }
      var h = ' style="', c, j;
      if(b) {
        for(c in a) {
          a.hasOwnProperty(c) && (j = a[c], j != null && (h += c + ":" + j + ";"))
        }
      }else {
        for(c in a) {
          a.hasOwnProperty(c) && (j = a[c], j != null && (h += e(c) + ":" + e(j) + ";"))
        }
      }
      return h + '"'
    }
    return""
  }
  function a(a) {
    switch(a) {
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
        return a
    }
  }
  function e(b) {
    return b != null ? (typeof b != "string" && (b = b.toString()), b.replace(/[&<>"'\/]/g, a)) : ""
  }
  var c = window.console, h = [], j;
  j = c && c.log ? function(a) {
    for(var b = 0, h = arguments.length;b < h;b++) {
      c.log(arguments[b])
    }
  } : function(a) {
    h.push.apply(h, arguments)
  };
  goog.exportSymbol("jx.util", Util);
  goog.exportSymbol("Util", Util);
  goog.exportSymbol("echo", j);
  Util.isNull = function(a) {
    return a == null
  };
  Util.isNotNull = function(a) {
    return a != null
  };
  Util.isNullAnd = function() {
    for(var a = 0, b = arguments.length;a < b;a++) {
      if(arguments[a] != null) {
        return!1
      }
    }
    return!0
  };
  Util.isNullOr = function() {
    for(var a = 0, b = arguments.length;a < b;a++) {
      if(arguments[a] == null) {
        return!0
      }
    }
    return!1
  };
  Util.isNotNullAnd = function() {
    for(var a = 0, b = arguments.length;a < b;a++) {
      if(arguments[a] == null) {
        return!1
      }
    }
    return!0
  };
  Util.isNotNullOr = function() {
    for(var a = 0, b = arguments.length;a < b;a++) {
      if(arguments[a] != null) {
        return!0
      }
    }
    return!1
  };
  Util.ifNull = function(a, b, h) {
    return a == null ? b : h === void 0 ? a : h
  };
  Util.ifTrue = function(a, b, h) {
    return a === !0 ? b : h === void 0 ? a : h
  };
  Util.isFunction = function(a) {
    return typeof a == "function"
  };
  Util.isString = function(a) {
    return typeof a == "string"
  };
  Util.isNumber = function(a) {
    return typeof a == "number"
  };
  Util.isObject = function(a) {
    return typeof a == "object"
  };
  Util.isArray = function(a) {
    var b = Array.isArray;
    return a && typeof a == "object" && (b && b(a) || typeof a.length == "number" && a.hasOwnProperty("length") && !a.propertyIsEnumerable("length"))
  };
  Util.split = function(a, b, h, e) {
    if(typeof a !== "string") {
      return[]
    }
    b = b === void 0 ? /\s+/ : b;
    h = h === void 0 ? function(a) {
      return!!a
    } : h;
    e = e === void 0 ? function(a) {
      return $.trim(a)
    } : e;
    a = a.split(b);
    e && (a = a.map(e));
    h && (a = a.filter(h));
    return a
  };
  Util.isEmpty = function(a) {
    if(!a) {
      return!0
    }
    if(typeof a != "object") {
      return!1
    }
    for(var b in a) {
      if(a.hasOwnProperty(b)) {
        return!1
      }
    }
    return!0
  };
  Util.isEmptyObj = function(a) {
    if(a == null) {
      return!0
    }
    if(typeof a != "object") {
      return!1
    }
    for(var b in a) {
      if(a.hasOwnProperty(b)) {
        return!1
      }
    }
    return!0
  };
  Util.isNotEmptyObj = function(a) {
    if(a == null || typeof a != "object") {
      return!1
    }
    for(var b in a) {
      if(a.hasOwnProperty(b)) {
        return!0
      }
    }
    return!1
  };
  Util.isEmptyString = function(a) {
    return a == null || a === ""
  };
  Util.isEmptyArray = function(a) {
    if(a == null) {
      return!0
    }
    if(!Util.isArray(a)) {
      return!1
    }
    for(var b = 0, h = a.length;b < h;b++) {
      if(a.hasOwnProperty(b)) {
        return!1
      }
    }
    return!0
  };
  Util.emptyObject = function(a) {
    if(!a || typeof a != "object") {
      return a
    }
    if(Util.isArray(a)) {
      return a.length = 0, a
    }
    for(var b in a) {
      a.hasOwnProperty(b) && delete a[b]
    }
    return a
  };
  Util.deleteUndefined = function(a) {
    if(!a || typeof a != "object") {
      return a
    }
    var b;
    if(Util.isArray(a)) {
      for(b = a.length - 1;b > -1;b--) {
        a.hasOwnProperty(b) && a[b] === void 0 && a.splice(b, 1)
      }
      return a
    }
    for(b in a) {
      a.hasOwnProperty(b) && a[b] === void 0 && delete a[b]
    }
    return a
  };
  Util.deepClone = function(a) {
    if(!a) {
      return a
    }
    switch(typeof a) {
      case "boolean":
      ;
      case "number":
      ;
      case "string":
      ;
      case "function":
        return a
    }
    if(Util.isArray(a)) {
      for(var b = [], h = 0, e = a.length;h < e;h++) {
        h in a && (b[h] = Util.deepClone(a[h]))
      }
      return b
    }
    b = {};
    for(h in a) {
      a.hasOwnProperty(h) && (b[h] = Util.deepClone(a[h]))
    }
    return b
  };
  Util.clone = function(a, b, h) {
    if(!a) {
      return a
    }
    switch(typeof a) {
      case "boolean":
      ;
      case "number":
      ;
      case "string":
      ;
      case "function":
        return a
    }
    if(Util.isArray(a)) {
      if(h === 1) {
        return Array.prototype.slice.call(a)
      }
      for(var e = [], c = a.length, j = 0, h = h !== void 0 ? h - 1 : void 0;j < c;j++) {
        j in a && (e[j] = Util.clone(a[j], b, h))
      }
      return e
    }
    e = {};
    c = Util.isEmptyObj(b);
    if(h === 1) {
      if(c) {
        for(j in a) {
          a.hasOwnProperty(j) && (e[j] = a[j])
        }
      }else {
        for(j in b) {
          b.hasOwnProperty(j) && a.hasOwnProperty(j) && (e[j] = a[j])
        }
      }
    }else {
      if(h = h !== void 0 ? h - 1 : void 0, c) {
        for(j in a) {
          a.hasOwnProperty(j) && (e[j] = Util.clone(a[j], void 0, h))
        }
      }else {
        for(j in b) {
          b.hasOwnProperty(j) && a.hasOwnProperty(j) && (e[j] = Util.clone(a[j], void 0, h))
        }
      }
    }
    return e
  };
  Util.toArray = function(a) {
    var b = [], h;
    for(h in a) {
      a.hasOwnProperty(h) && b.push(a[h])
    }
    return b
  };
  Util.toArrayWithKey = function(a) {
    var b = [], h;
    for(h in a) {
      a.hasOwnProperty(h) && b.push({key:h, val:a[h]})
    }
    return b
  };
  Util.random = function(a) {
    return Math.floor(a * Math.random())
  };
  Util.bound = function(a, b, h) {
    isNaN(h) || (a = Math.min(a, h));
    isNaN(b) || (a = Math.max(a, b));
    return a
  };
  Util.callFn = function() {
    return arguments.length <= 3 ? arguments[1].call(arguments[0], arguments[2]) : arguments[1].apply(arguments[0], Array.prototype.slice.call(arguments, 2))
  };
  Util.formatNumber = function(a, b, h, e, c) {
    var h = h === void 0 ? "&#8361; " : h, b = isNaN(b) ? 0 : b, e = e === void 0 ? "." : e, c = c === void 0 ? "," : c, j = a < 0 ? "-" : "", k = parseInt(a = Math.abs(+a || 0).toFixed(b), 10) + "", d = k.length, d = d > 3 ? d % 3 : 0;
    return h + j + (d ? k.substr(0, d) + c : "") + k.substr(d).replace(/(\d{3})(?=\d)/g, "$1" + c) + (b ? e + Math.abs(a - k).toFixed(b).slice(2) : "")
  };
  Util.getBodyScroll = function() {
    var a = 0, b = 0;
    if(typeof window.pageYOffset === "number") {
      b = window.pageYOffset, a = window.pageXOffset
    }else {
      if(document.body && (document.body.scrollLeft || document.body.scrollTop)) {
        b = document.body.scrollTop, a = document.body.scrollLeft
      }else {
        if(document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
          b = document.documentElement.scrollTop, a = document.documentElement.scrollLeft
        }
      }
    }
    return[a, b]
  };
  Util.hasClass = function(a, b) {
    if(a && b) {
      var h = a.className;
      if(h === b) {
        return!0
      }
      if(h && h.length >= b.length) {
        for(var h = a.classList || Util.split(h), e = 0, c = h.length;e < c;e++) {
          if(h[e] === b) {
            return!0
          }
        }
      }
    }
    return!1
  };
  Util.hasTagAndClass = function(a, b, h) {
    if(a && b && h && a.tagName === b) {
      b = a.className;
      if(b === h) {
        return!0
      }
      if(b && b.length >= h.length) {
        for(var a = a.classList || Util.split(b), b = 0, e = a.length;b < e;b++) {
          if(a[b] === h) {
            return!0
          }
        }
      }
    }
    return!1
  };
  Util.closest = function(a, b, h) {
    if(h) {
      for(var e = a, c = !1;e;) {
        if(e === h) {
          c = !0;
          break
        }
        e = e.parentNode
      }
      if(!c) {
        return null
      }
    }
    if(Util.hasClass(a, b)) {
      return a
    }
    for(a = a.parentNode;a && a !== h;a = a.parentNode) {
      if(Util.hasClass(a, b)) {
        return a
      }
    }
    return null
  };
  Util.closestWithTag = function(a, b, h, e) {
    if(e) {
      for(var c = a, j = !1;c;) {
        if(c === e) {
          j = !0;
          break
        }
        c = c.parentNode
      }
      if(!j) {
        return null
      }
    }
    if(Util.hasTagAndClass(a, b, h)) {
      return a
    }
    for(a = a.parentNode;a && a !== e;a = a.parentNode) {
      if(Util.hasTagAndClass(a, b, h)) {
        return a
      }
    }
    return null
  };
  Util.findFirstByClass = function(a, b) {
    if(a) {
      if(Util.hasClass(a, b)) {
        return a
      }
      for(var h = 0, e = a.childNodes, c = e.length, j, k;h < c;h++) {
        if((j = e[h]) && (k = Util.findFirstByClass(j, b)) !== void 0) {
          return k
        }
      }
    }
    return null
  };
  Util.findFirstByTagAndClass = function(a, b, h) {
    if(a) {
      if(Util.hasTagAndClass(a, b, h)) {
        return a
      }
      for(var e = 0, a = a.childNodes, c = a.length, j;e < c;e++) {
        if(Util.isNotNull(a[e]) && (j = Util.findFirstByTagAndClass(a[e], b, h)) !== void 0) {
          return j
        }
      }
    }
    return null
  };
  Util.findByClass = function(a, b, h) {
    h = h || [];
    if(a) {
      Util.hasClass(a, b) && h.push(a);
      for(var e = 0, a = a.childNodes, c = a.length;e < c;e++) {
        Util.isNotNull(a[e]) && Util.findByClass(a[e], b, h)
      }
    }
    return h
  };
  Util.findByTagAndClass = function(a, b, h, e) {
    e = e || [];
    if(a) {
      Util.hasTagAndClass(a, b, h) && e.push(a);
      for(var c = 0, a = a.childNodes, j = a.length;c < j;c++) {
        Util.isNotNull(a[c]) && Util.findByTagAndClass(a[c], b, h, e)
      }
    }
    return e
  };
  Util.getHead = function() {
    return document.head ? document.head : document.getElementsByTagName("head")[0]
  };
  Util.appendTag = function(a, b) {
    return a.appendChild(document.createElement(b))
  };
  Util.appendHTML = function(a, b) {
    var h = document.createElement("div"), e, c = 0, j = [];
    h.innerHTML = b;
    for(e = h.childNodes.length;c < e;c++) {
      j.push(a.appendChild(h.firstChild))
    }
    return j
  };
  Util.createStyle = function(a) {
    a == null && (a = "");
    var b = document.createElement("style");
    b.type = "text/css";
    b.rel = "stylesheet";
    b.styleSheet ? b.styleSheet.cssText = a : b.appendChild(document.createTextNode(a));
    Util.getHead().appendChild(b);
    return b
  };
  Util.removeStyle = function(a) {
    a != null && a.parentNode != null && Util.getHead().removeChild(a)
  };
  Util.setStyle = function(a, b) {
    return a == null ? "" : a.styleSheet ? a.styleSheet.cssText = b : a.childNodes[0].nodeValue = b
  };
  Util.appendStyle = function(a, b) {
    return a == null ? "" : a.styleSheet ? a.styleSheet.cssText += b : a.childNodes[0].nodeValue += b
  };
  Util.getStyle = function(a) {
    return a == null ? "" : a.styleSheet ? a.styleSheet.cssText : a.childNodes[0].nodeValue
  };
  Util.appendScript = function(a) {
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.text ? b.text = a : b.innerHTML = a;
    Util.getHead().appendChild(b);
    return b
  };
  Util.appendScriptFile = function(a) {
    document.write('<script type="text/javascript" src="' + a + '"><\/script>')
  };
  Util.outerHTML = function(a) {
    if(a.outerHTML === void 0) {
      var b = document.createElement("div");
      b.appendChild(a.cloneNode(!0));
      return b.innerHTML
    }
    return a.outerHTML
  };
  Util.index = function(a) {
    for(var b = 0;(a = a.previousSibling) != null;) {
      ++b
    }
    return b
  };
  Util.contains = function(a, b, h) {
    for(;b != null;) {
      if(b === a) {
        return!0
      }
      if(b === h) {
        break
      }
      b = b.parentNode
    }
    return!1
  };
  Util.areEqualArrays = function(a, b) {
    if(a == null || b == null) {
      return!1
    }
    if(a === b) {
      return!0
    }
    if(a.length !== b.length) {
      return!1
    }
    for(var h = 0, e = a.length;h < e;h++) {
      if(a.hasOwnProperty(h) && !b.hasOwnProperty(h) || b.hasOwnProperty(h) && !a.hasOwnProperty(h) || a[h] !== b[h]) {
        return!1
      }
    }
    return!0
  };
  Util.areEqualObjects = function(a, b) {
    if(a == null || b == null) {
      return!1
    }
    if(a === b) {
      return!0
    }
    if(typeof a !== "object" || typeof b !== "object") {
      return!1
    }
    for(var h in a) {
      if(a.hasOwnProperty(h) && (!b.hasOwnProperty(h) || a[h] !== b[h])) {
        return!1
      }
    }
    for(h in b) {
      if(b.hasOwnProperty(h) && (!a.hasOwnProperty(h) || a[h] !== b[h])) {
        return!1
      }
    }
    return!0
  };
  Util.areEqualComplex = function(a, b, h) {
    if(a == null || b == null) {
      return!1
    }
    if(a === b) {
      return!0
    }
    var e = h.length, c = h[0];
    if(e === 1) {
      return c === "array" ? Util.areEqualArrays(a, b) : Util.areEqualObjects(a, b)
    }
    if(e > 1) {
      h = h.slice(1);
      e = 0;
      if(c === "array") {
        if(a.length !== b.length) {
          return!1
        }
        for(c = a.length;e < c;e++) {
          if(!b.hasOwnProperty(e) || !Util.areEqualComplex(a[e], b[e], h)) {
            return!1
          }
        }
      }else {
        for(e in a) {
          if(a.hasOwnProperty(e) && (!b.hasOwnProperty(e) || !Util.areEqualComplex(a[e], b[e], h))) {
            return!1
          }
        }
        for(e in b) {
          if(b.hasOwnProperty(e) && (!a.hasOwnProperty(e) || !Util.areEqualComplex(a[e], b[e], h))) {
            return!1
          }
        }
      }
      return!0
    }
  };
  Util.typeCheck = function(a, b, h, e, c) {
    if(h && b === void 0 || e && b === null) {
      return!0
    }
    switch(typeof a) {
      case "string":
        if(typeof b === a) {
          return!0
        }
        break;
      case "function":
        if(b instanceof a) {
          return!0
        }
    }
    if(c) {
      return!1
    }
    throw new TypeError("object is not a " + a + ", but is a " + typeof b);
  };
  Util.sprint = function(a, b, h, e) {
    Util.typeCheck("string", a);
    Util.typeCheck("object", b);
    Util.typeCheck("string", h, !0);
    Util.typeCheck("string", e, !0);
    var c;
    h === void 0 && (h = "%");
    e === void 0 && (e = "%");
    for(c in b) {
      b.hasOwnProperty(c) && (a = a.replace(RegExp(h + c + e, "gm"), b[c]))
    }
    return a
  };
  Util.tagReplaces = {"&":"&amp;", "<":"&lt;", ">":"&gt;"};
  Util.replaceTag = function(a) {
    return Util.tagReplaces[a] || a
  };
  Util.escapeHtmlTags = function(a) {
    return a.replace(/[&<>]/g, Util.replaceTag)
  };
  Util.escapeRegExp = function(a) {
    return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
  };
  Util.strReplace = function(a, b) {
    var h, e = [];
    for(h in b) {
      b.hasOwnProperty(h) && e.push(Util.escapeRegExp(h))
    }
    return a.replace(RegExp("(" + e.join("|") + ")", "gm"), function(a) {
      return b[a]
    })
  };
  Util.calCheckSize = function() {
    var a = {}, b = document.createElement("div");
    document.body.appendChild(b);
    b.innerHTML = "<input type='checkbox' style='margin:0;padding:0;overflow:hidden'/>";
    a.checkboxW = b.childNodes[0].offsetWidth;
    a.checkboxH = b.childNodes[0].offsetHeight;
    b.innerHTML = "<input type='radio' style='margin:0;padding:0;overflow:hidden'/>";
    a.radioW = b.childNodes[0].offsetWidth;
    a.radioH = b.childNodes[0].offsetHeight;
    document.body.removeChild(b);
    return a
  };
  Util.which = function(a) {
    for(var b = {}, h = 0, e;h < a.length;h++) {
      if(e = a[h].toLowerCase(), e === "number") {
        for(e = 48;e <= 57;e++) {
          b[e] = !0
        }
        for(e = 96;e <= 105;e++) {
          b[e] = !0
        }
      }else {
        if(e === "alphabet") {
          for(e = 65;e <= 90;e++) {
            b[e] = !0
          }
        }else {
          if(e === "arrow") {
            for(e = 37;e <= 40;e++) {
              b[e] = !0
            }
          }else {
            e.length > 1 && (e = e.replace(/\s/g, "")), e.length >= 3 && (e = e.replace(/numpad|num/g, "n").replace(/korean|kor/g, "kr")), b[Util.keyMapKeydown[e]] = !0
          }
        }
      }
    }
    return b
  };
  Util.keyMapKeydown = {backspace:8, tab:9, enter:13, shift:16, control:17, ctrl:17, alt:18, pause:19, "break":19, capslock:20, escape:27, esc:27, space:32, " ":32, pageup:33, pgup:33, pagedown:34, pgdown:34, pgdn:34, end:35, home:36, leftarrow:37, left:37, uparrow:38, up:38, rightarrow:39, right:39, downarrow:40, down:40, insert:45, ins:45, "delete":46, del:46, 0:48, ")":48, 1:49, "!":49, 2:50, "@":50, 3:51, "#":51, 4:52, $:52, 5:53, "%":53, 6:54, "^":54, 7:55, "&":55, 8:56, "*":56, 9:57, "(":57, 
  a:65, b:66, c:67, d:68, e:69, f:70, g:71, h:72, i:73, j:74, k:75, l:76, m:77, n:78, o:79, p:80, q:81, r:82, s:83, t:84, u:85, v:86, w:87, x:88, y:89, z:90, n0:96, n1:97, n2:98, n3:99, n4:100, n5:101, n6:102, n7:103, n8:104, n9:105, "n*":106, "n+":107, "n-":109, "n.":110, "n/":111, f1:112, f2:113, f3:114, f4:115, f5:116, f6:117, f7:118, f8:119, f9:120, f10:121, f11:122, f12:123, numlock:144, scrolllock:145, mute:173, volumedown:174, volumeup:175, ":":186, ";":186, "=":187, "+":187, ",":188, "<":188, 
  "-":189, _:189, ".":190, ">":190, "/":191, "?":191, "`":192, "~":192, "[":219, "{":219, "\\":220, "|":220, "]":221, "}":221, "'":222, '"':222, kr:229};
  Util.printEventPos = function(a) {
    Util.print("client: (" + a.clientX + ", " + a.clientY + "), layer: (" + a.layerX + ", " + a.layerY + "), offset: (" + a.offsetX + ", " + a.offsetY + "), page: (" + a.pageX + ", " + a.pageY + "), screen: (" + a.screenX + ", " + a.screenY + "), xy: (" + a.x + ", " + a.y + ")")
  };
  Util.print = function(a) {
    if(j) {
      if(arguments.length === 1) {
        j(arguments[0])
      }else {
        for(var b = 0, h = arguments.length;b < h;b++) {
          j(arguments[b])
        }
      }
    }
  };
  Util.open = function(a) {
    var b = {url:"about:blank", name:"_blank", channelmode:"no", directories:"yes", fullscreen:"no", height:void 0, left:void 0, location:"yes", menubar:"yes", resizable:"yes", scrollbars:"yes", status:"yes", titlebar:"yes", toolbar:"yes", top:void 0, width:void 0, replace:void 0}, h;
    if(Util.isNotNull(a)) {
      for(h in b) {
        b.hasOwnProperty(h) && (b[h] = a[h])
      }
    }
    a = Util.ifNull(b.height, "", "height=" + b.height + ", ") + Util.ifNull(b.left, "", "left=" + b.left + ", ") + Util.ifNull(b.top, "", "top=" + b.top + ", ") + Util.ifNull(b.width, "", "width=" + b.width + ", ") + "channelmode=" + b.channelmode + ", directories=" + b.directories + ", fullscreen=" + b.fullscreen + ", location=" + b.location + ", menubar=" + b.menubar + ", resizable=" + b.resizable + ", scrollbars=" + b.scrollbars + ", status=" + b.status + ", titlebar=" + b.titlebar + ", toolbar=" + 
    b.toolbar;
    return b.replace == null ? window.open(b.url, b.name, a) : window.open(b.url, b.name, a, b.replace)
  };
  Util.cloneObject = f;
  Util.extendObject = i;
  Util.extendOrClone = function(a, b) {
    return b ? a ? i(a, b) : f(b) : a
  };
  Util.lcfirst = function(a) {
    return a ? a.charAt(0).toLowerCase() + a.substring(1) : ""
  };
  Util.ucfirst = function(a) {
    return a ? a.charAt(0).toUpperCase() + a.substring(1) : ""
  };
  var k = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, r = {area:!0, base:!0, basefont:!0, br:!0, col:!0, command:!0, embed:!0, frame:!0, hr:!0, img:!0, input:!0, isindex:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, wbr:!0}, o = {hidden:!0, text:!0, search:!0, tel:!0, url:!0, email:!0, password:!0, date:!0, month:!0, week:!0, time:!0, datetime:!0, number:!0, range:!0, 
  color:!0, checkbox:!0, radio:!0, file:!0, submit:!0, image:!0, reset:!0, button:!0};
  Util.emptyElements = r;
  Util.element = g;
  Util.input = function(a, b, h) {
    if(o.hasOwnProperty(a)) {
      return b.type = a, g("input", b, null, h)
    }else {
      throw Error("invalid input type, " + a + "!");
    }
  };
  Util.attribute = d;
  Util.style = b;
  Util.escapeChar = a;
  Util.encode = e;
  var q = 1, n = 2;
  Util.SAFE = q;
  Util.LEAVE_OPENED = n
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
  var g = f.prototype;
  g.print = function(d, b, a) {
    d === void 0 && (d = "");
    b === void 0 && (b = "timer");
    a === void 0 && (a = !0);
    var e = this.timers[b], c = (new Date).getTime(), e = i.isNull(e) ? 0 : c - e;
    i.print((this.stack.length > 0 ? this.stack + " :: " : "") + d + ", Time elapsed since last update: " + e + "ms");
    a && (this.timers[b] = c)
  };
  g.addStack = function(d) {
    this.stack = this.stack + " > " + d
  };
  g.removeStack = function() {
    this.stack = this.stack.substring(0, this.stack.lastIndexOf(" > "))
  };
  g.clearStack = function() {
    this.stack = ""
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "TimeWatch.js"...');
var TimeWatch = {};
(function() {
  function f(g) {
    var d = this.laps = [];
    this._stopped = !1;
    d.push(g || null, (new Date).getTime())
  }
  goog.exportSymbol("TimeWatch", f);
  var i = f.prototype;
  i.lap = function(g) {
    if(this._stopped) {
      throw Error("TimeWatch was stopped, thus cannot lap. Please reset!");
    }
    this.laps.push(g || null, (new Date).getTime())
  };
  i.stop = function(g) {
    this._stopped = !0;
    this.laps.push(g || null, (new Date).getTime())
  };
  i.reset = function(g) {
    var d = this.laps;
    d.length = 0;
    this._stopped = !1;
    d.push(g || null, (new Date).getTime())
  };
  i.toString = function() {
    var g = this.laps, d = g.length, b = 2, a = d - (this._stopped ? 2 : 0), e = g[0], c = g[1], h = c, d = d > 2 ? [] : null, j = 0, k = "TimeWatch\n";
    for(k += "start" + (e ? ": " + e : "") + " @" + c + "\n";b < a;b += 2) {
      e = (e = g[b]) ? ": " + e : "", c = g[b + 1], d.push(h = c - h), j += h, k += "lap " + b / 2 + e + " @" + c + " +" + h + "ms\n", h = c
    }
    a >= 2 && this._stopped && (e = (e = g[a]) ? ": " + e : "", c = g[a + 1], d.push(h = c - h), j += h, k += "stop" + e + " @" + c + " +" + h + "ms\n");
    if(d) {
      var g = d.length, r = j / g, f = 0;
      k += "total number of laps: " + g + "\n";
      k += "total elapsed time: " + j + "ms\n";
      k += "average lap time: " + r.toFixed(2) + "ms\n";
      d.forEach(function(a) {
        f += (a - r) * (a - r)
      });
      f = Math.sqrt(f / g);
      k += "standard deviation: " + f.toFixed(2) + "ms\n"
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
    var i, g, d, b;
    if(this.length <= 1) {
      return i = this.getBoundingRect(), d = f.pageX, b = f.pageY, d >= i.left && d <= i.left + i.width && b >= i.top && b <= i.top + i.height
    }
    g = !1;
    this.each(function() {
      i = $(this).getBoundingRect();
      d = f.pageX;
      b = f.pageY;
      if(d >= i.left && d <= i.left + i.width && b >= i.top && b <= i.top + i.height) {
        return g = !0, !1
      }
    });
    return g
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
  JGM.create = function(g, d) {
    d == null && (d = {});
    if(!JGM.hasOwnProperty(g)) {
      throw Error("cannot find a grid module: name=" + g);
    }
    if(JGM._map.hasOwnProperty(g)) {
      if(JGM._map[g].cacheModule) {
        var b = d.mid = "JGM" + JGM.m.length++, a = new JGM[g](d);
        JGM.m.hasOwnProperty(g) || (JGM.m[g] = {});
        JGM.m[g][b] = a;
        if(g === "Grid") {
          if(a.name == null) {
            a.name = JGM.grids.length
          }
          JGM.gridMap[a.name] = a;
          JGM.grids.push(a)
        }
        return a
      }else {
        return new JGM[g](d)
      }
    }else {
      return new JGM[g](d)
    }
  };
  JGM._destroy = function(g, d) {
    var b, a, e, c;
    for(a in d) {
      if(d.hasOwnProperty(a)) {
        switch(a) {
          case "map":
            b = d[a];
            if(f.isString(b)) {
              b = f.split(b);
              c = b.length;
              for(e = 0;e < c;e++) {
                JGM._deleteMap(g, b[e])
              }
            }else {
              if(b instanceof Array) {
                c = b.length;
                for(e = 0;e < c;e++) {
                  f.emptyObject(b[e])
                }
              }else {
                f.emptyObject(b)
              }
            }
            break;
          case "array":
            b = d[a];
            if(f.isString(b)) {
              b = f.split(b);
              c = b.length;
              for(e = 0;e < c;e++) {
                JGM._deleteArray(g, b[e])
              }
            }else {
              b.length = 0
            }
            break;
          case "$":
            b = d[a];
            if(f.isString(b)) {
              b = f.split(b);
              c = b.length;
              for(e = 0;e < c;e++) {
                JGM._delete$(g, b[e])
              }
            }else {
              if(b instanceof Array) {
                c = b.length;
                for(e = 0;e < c;e++) {
                  i.unbindRemove(b[e])
                }
              }else {
                i.unbindRemove(b)
              }
            }
            break;
          case "style":
            b = d[a];
            if(f.isString(b)) {
              b = f.split(b);
              c = b.length;
              for(e = 0;e < c;e++) {
                JGM._deleteStyle(g, b[e])
              }
            }else {
              if(b instanceof Array) {
                c = b.length;
                for(e = 0;e < c;e++) {
                  f.removeStyle(b[e])
                }
              }else {
                f.removeStyle(b)
              }
            }
            break;
          case "property":
            b = d[a];
            if(f.isString(b)) {
              b = f.split(b);
              c = b.length;
              for(e = 0;e < c;e++) {
                delete g[b[e]]
              }
            }else {
              if(b instanceof Array) {
                c = b.length;
                for(e = 0;e < c;e++) {
                  delete g[b[e]]
                }
              }
            }
            break;
          case "module":
            b = d[a];
            if(f.isString(b)) {
              b = f.split(b);
              c = b.length;
              for(e = 0;e < c;e++) {
                JGM._deleteModule(g, b[e])
              }
            }else {
              if(b instanceof Array) {
                c = b.length;
                for(e = 0;e < c;e++) {
                  b[e].destroy()
                }
              }else {
                b.destroy()
              }
            }
            break;
          case "name":
            g.hasOwnProperty("mid") && (JGM._remove(d[a], g.mid), delete g.mid);
            break;
          case "path":
            g.hasOwnProperty("grid") && g.grid.hasOwnProperty(d[a]) && (delete g.grid[d[a]], delete g.grid)
        }
      }
    }
    f.emptyObject(g)
  };
  JGM._deleteMap = function(g, d) {
    g.hasOwnProperty(d) && (f.emptyObject(g[d]), delete g[d])
  };
  JGM._deleteArray = function(g, d) {
    if(g.hasOwnProperty(d)) {
      g[d].length = 0, delete g[d]
    }
  };
  JGM._delete$ = function(g, d) {
    g.hasOwnProperty(d) && (i.unbindRemove(g[d]), delete g[d])
  };
  JGM._deleteStyle = function(g, d) {
    g.hasOwnProperty(d) && (f.removeStyle(g[d]), delete g[d])
  };
  JGM._deleteModule = function(g, d) {
    g.hasOwnProperty(d) && (g[d].destroy(), delete g[d])
  };
  JGM._remove = function(g, d) {
    delete JGM.m[g][d]
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
  JGM._add = function(g, d) {
    JGM[g] = d
  };
  JGM._extend = function(g, d) {
    var b = f.ifNull(d, {});
    $.extend(!0, g, b);
    $.extend(!0, b, g);
    return b
  };
  JGM.m = {length:0};
  JGM._CONST = {_cssUnselectable:"-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none;", _checkboxWidth:void 0, _checkboxHeight:void 0, _radioWidth:void 0, _radioHeight:void 0};
  JGM._globalEventsBound = !1;
  JGM._globalEvents = {_mousemove:function(g) {
    var d, b = JGM.m.Grid;
    for(d in b) {
      b.hasOwnProperty(d) && b[d]._mousemove(g)
    }
  }, _mouseup:function(g) {
    var d, b = JGM.m.Grid;
    for(d in b) {
      b.hasOwnProperty(d) && b[d]._mouseup(g)
    }
  }, _resize:function(g) {
    var d, b = JGM.m.Grid;
    for(d in b) {
      b.hasOwnProperty(d) && b[d]._resize(g)
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
  JGM.chart = function(g, d, b, a, e) {
    var c, d = d.toLowerCase();
    switch(d) {
      case "area":
        d = "corechart";
        c = "AreaChart";
        break;
      case "bar":
        d = "corechart";
        c = "BarChart";
        break;
      case "candle":
        d = "corechart";
        c = "CandlestickChart";
        break;
      case "column":
        d = "corechart";
        c = "ColumnChart";
        break;
      case "combo":
        d = "corechart";
        c = "ComboChart";
        break;
      case "gauge":
        d = "gauge";
        c = "Gauge";
        break;
      case "geo":
        d = "geochart";
        c = "GeoChart";
        break;
      case "line":
        d = "corechart";
        c = "LineChart";
        break;
      case "pie":
        d = "corechart";
        c = "PieChart";
        break;
      case "scatter":
        d = "corechart";
        c = "ScatterChart";
        break;
      case "table":
        d = "table";
        c = "Table";
        break;
      case "treemap":
        d = "treemap";
        c = "TreeMap";
        break;
      default:
        throw Error("unknown chart type: " + d);
    }
    google.load("visualization", "1", {packages:[d]});
    var h = JGM.exportToArray(e, b.map(function(a) {
      return a.key
    }));
    google.setOnLoadCallback(function() {
      for(var e = new google.visualization.DataTable, k = 0, d = b.length, f, i;k < d;k++) {
        f = b[k];
        i = f.type;
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
        e.addColumn(i || typeof h[0][k] || k === 0 && "string" || "number", f.name)
      }
      e.addRows(h);
      (new google.visualization[c](document.getElementById(g))).draw(e, a)
    })
  };
  JGM.exportToArray = function(g, d) {
    for(var b, a = [], e, c, h = 0, j = g.length, k, r = d.length;h < j;h++) {
      e = g[h];
      k = 0;
      for(b = [];k < r;k++) {
        c = d[k], b.push(c in e ? e[c] : null)
      }
      a.push(b)
    }
    return a
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "renderer.js"...');
jx.grid.renderer = {};
(function() {
  var f = goog.getObjectByName("jx.grid");
  goog.getObjectByName("jx.util");
  f = f.renderer = {};
  goog.exportSymbol("jx.grid.renderer", f);
  f.selectBox = function(f) {
    var g = f.mapping, d = f.attr, b = f["default"], a = f.style, e = f.callback, c, h, j, k = 0, r = [], o = [], q = "<select";
    if(d) {
      for(j in d) {
        d.hasOwnProperty(j) && (q += " " + j + '="' + d[j] + '"')
      }
    }
    if(a) {
      q += ' style="';
      for(j in a) {
        a.hasOwnProperty(j) && (q += j + ":" + a[j] + ";")
      }
      q += '"'
    }
    q += ">";
    for(c in g) {
      g.hasOwnProperty(c) && (f = g[c], r.push(c), o.push(f), b == f && (h = k), k++)
    }
    return function(a) {
      var b, c, j = q;
      for(c = 0;c < k;c++) {
        if(a == o[c]) {
          b = c;
          break
        }
      }
      b === void 0 && (b = h);
      for(c = 0;c < k;c++) {
        j += '<option value="' + o[c] + '"', c === b && (j += ' selected="selected"'), j += ">" + r[c] + "</option>"
      }
      j += "</select>";
      e && (b = [], b.push(j), Array.prototype.push.apply(b, arguments), j = e.apply(this, b));
      return j
    }
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "Disposable.js"...');
jx.lang = {};
jx.lang.Disposable = {};
(function() {
  function f() {
  }
  function i(a, b, h) {
    if(typeof a != "object") {
      return!1
    }
    var j, k, d;
    if(b) {
      for(var h = 0, g = b.length;h < g;h++) {
        if(j = b[h], this.hasOwnProperty(j)) {
          if(a.hasOwnProperty(j)) {
            if(k = this[j], d = a[j], k !== a && !(k === k || d === d)) {
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
      if(h) {
        for(j in this) {
          if(this.hasOwnProperty(j)) {
            if(!a.hasOwnProperty(j)) {
              return!1
            }
            k = this[j];
            d = a[j];
            if(k !== d) {
              if(k) {
                if(typeof k != "object" || typeof d != "object") {
                  return!1
                }
                if(k.equals) {
                  if(!k.equals(d, null, h - 1)) {
                    return!1
                  }
                }else {
                  if(d.equals && !d.equals(k, null, h - 1)) {
                    return!1
                  }
                }
                if(!i.call(k, d, null, h - 1)) {
                  return!1
                }
              }else {
                if(!(k === k || d === d)) {
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
              if(k = this[j], d = a[j], k !== a && !(k === k || d === d)) {
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
  function g(b, c) {
    if(this != goog.global) {
      var h, j;
      if(b) {
        for(h in this) {
          if(this.hasOwnProperty(h)) {
            if((j = this[h]) && typeof j == "object") {
              if(j.dispose) {
                j.dispose(b - 1, c)
              }else {
                if(c) {
                  if(a(j)) {
                    j.length = 0
                  }
                  g.call(j, b - 1, c)
                }
              }
            }
            delete this[h]
          }
        }
      }else {
        for(h in this) {
          this.hasOwnProperty(h) && delete this[h]
        }
      }
    }
  }
  var d = goog.getObjectByName("jx.util");
  goog.exportSymbol("jx.lang.Disposable", f);
  goog.exportProperty(f.prototype, "dispose", g);
  var b = f.prototype, a = d.isArray;
  d.equals = Object.equals = function(a, b, h, j) {
    return typeof a == "object" ? i.call(a, b, h, j) : a !== a && b !== b
  };
  d.dispose = Object.dispose = function(a, b, h) {
    if(typeof a == "object") {
      return g.call(a, b, h)
    }
  };
  b.equals = i;
  b.dispose = g
})();
window.console && window.console.log && window.console.log('reading javascript source "Cell.js"...');
jx.grid.Cell = {};
(function() {
  function f(a) {
    this.grid = a.grid;
    this._datarow = a.datarow;
    this._colDef = a.colDef;
    this.__init(a)
  }
  goog.getObjectByName("jx.grid");
  var i = goog.getObjectByName("jx.util"), g = goog.getObjectByName("jx.lang.Disposable");
  goog.exportSymbol("jx.grid.Cell", f);
  goog.inherits(f, g);
  f.getInstance = function(a) {
    return new f(a)
  };
  var d = f.prototype, b = g.prototype.dispose;
  d.dispose = function() {
    b.call(this)
  };
  d.__init = function(a) {
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
  d.destroy = function() {
    this.dispose()
  };
  d.getRowIdx = function() {
    if(i.isNotNull(this._datarow)) {
      return this.grid.dataMgr.getIdx(this._datarow)
    }
  };
  d.getColIdx = function() {
    if(i.isNotNull(this._colDef)) {
      return this.grid.colDefMgr.getIdx(this._colDef)
    }
  };
  d.getNode = function() {
    if(i.isNotNullAnd(this._datarow, this._colDef)) {
      return this.grid.view.getCellByIdAndKey(this.grid.dataMgr.getId(this._datarow), this._colDef.key)
    }
  };
  d.getRowNode = function() {
    return this.grid.view.getRow(this._datarow)
  };
  d.get$ = function() {
    var a = this.getNode();
    return a !== void 0 ? $(a) : $([])
  };
  d.getDatarow = function() {
    return this._datarow
  };
  d.getColDef = function() {
    return this._colDef
  };
  d.getKey = function() {
    if(i.isNotNull(this._colDef)) {
      return this._colDef.key
    }
  };
  d.getId = function() {
    return this.grid.dataMgr.getId(this._datarow)
  };
  d.getValue = function() {
    if(i.isNotNullAnd(this._datarow, this._colDef)) {
      return this._datarow[this._colDef.key]
    }
  };
  d.isValid = function() {
    return i.isNotNull(this.getNode())
  };
  d.isInvalid = function() {
    return i.isNull(this.getNode())
  };
  d.isEmpty$ = function() {
    return this.get$().length === 0
  };
  d.has$ = function() {
    return this.get$().length !== 0
  };
  d.equals = function(a) {
    return a && this._datarow && this._datarow === a._datarow && this._colDef && this._colDef === a.__colDef
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
  var g = f.prototype, d = i.prototype.dispose;
  g.dispose = function() {
    d.call(this._handlers, -1, !0);
    d.call(this)
  };
  g.addEventListener = function(b, a) {
    if(!b) {
      throw Error("Invalid event type: " + b);
    }
    if(typeof a != "function") {
      throw Error("Event listener must be a function");
    }
    if(!this._handlers) {
      this._handlers = {}
    }
    var e = this._handlers, b = (b + "").toLowerCase();
    e.hasOwnProperty(b) || (e[b] = []);
    e = e[b];
    e.indexOf(a) === -1 && e.push(a)
  };
  g.removeEventListener = function(b, a) {
    if(this._handlers) {
      var b = (b + "").toLowerCase(), e = this._handlers;
      if(e.hasOwnProperty(b)) {
        for(var c = e[b], h = -1;(h = c.indexOf(a, h + 1)) !== -1;) {
          c.splice(h--, 1)
        }
        c.length === 0 && delete e[b]
      }
    }
  };
  g.dispatchEvent = function(b) {
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
    var a = this._handlers, e = (b.type + "").toLowerCase();
    b.target = this;
    if(a.hasOwnProperty(e)) {
      for(var a = a[e].slice(), e = 0, c = a.length, h;e < c && !b.stopPropagation;e++) {
        h = a[e], h.handleEvent ? h.handleEvent(b) : h.call(this, b)
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
  function f(g) {
    if(!(g.manager && typeof g.manager == "object")) {
      throw Error("Column needs a valid manager!");
    }
    this.manager = g.manager;
    this.key = g.key + "";
    if(!this.key) {
      throw Error("Column needs a non-empty key!");
    }
    var d = "column key=" + this.key;
    if(this.manager.hasKey(this.key)) {
      throw Error("Duplicate column key!" + d);
    }
    this.name = g.name ? g.name + "" : "";
    this.title = g.title ? g.title + "" : "";
    this.noName = !!g.noName;
    this.noTitle = !!g.noTitle;
    this.type = g.type + "" || null;
    this.defaultValue = g.defaultValue;
    this.inputOnCreate = !!g.inputOnCreate;
    this.width = (this.width = Number(g.width)) || 90;
    this.minW = (this.minW = Number(g.minW)) || 30;
    this.maxW = Number(g.maxW) || null;
    this.resizable = !!g.resizable;
    this.hidden = !!g.hidden;
    this.noSearch = !!g.noSearch;
    this.tooltipEnabled = !!g.tooltipEnabled;
    this.colClass = g.colClass + "" || null;
    this.style = g.style + "" || null;
    this.headerStyle = g.headerStyle + "" || null;
    if(g.parser && typeof g.parser != "function") {
      throw Error("Invalid parser!" + d);
    }
    this.parser = g.parser || null;
    if(g.validator && typeof g.validator != "function") {
      throw Error("Invalid validator!" + d);
    }
    this.validator = g.validator || null;
    if(g.renderer && typeof g.renderer != "function") {
      throw Error("Invalid renderer!" + d);
    }
    this.renderer = g.renderer || null;
    if(g.sumRenderer && typeof g.sumRenderer != "function") {
      throw Error("Invalid sum renderer!" + d);
    }
    this.sumRenderer = g.sumRenderer || null;
    if(g.editor && typeof g.editor != "object") {
      throw Error("Invalid editor!" + d);
    }
    this.editor = g.editor || null;
    this.sorter = g.sorter || null;
    this.filter = g.filter || null
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
  i.setHidden = function(g) {
    return g ? this.hide() : this.show()
  };
  i.setWidth = function(g) {
    return(g = Number(g)) && this.width !== g ? (this.width = g, this.dispatchEvent({type:"width", value:g}), g) : !1
  };
  i.setRenderer = function(g) {
    if(this.renderer !== g) {
      if(g && typeof g != "function") {
        throw Error("Invalid renderer!column key=" + this.key);
      }
      this.renderer = g || null;
      this.dispatchEvent({type:"renderer", value:g})
    }
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "BaseModule.js"...');
jx.grid.BaseModule = {};
(function() {
  function f(d) {
    if(d) {
      if(d.mid != null) {
        this.mid = d.mid
      }
      if(d.grid) {
        this.grid = d.grid
      }
    }
    this._view = this._evtmgr = this._colmgr = this._datamgr = null;
    var b = this._defaultOptions && this._defaultOptions(d.grid), a = d && d.options;
    if(a || b) {
      b || (b = {}), a && $.extend(!0, b, a), this._options = b, this.dispatchEvent({type:"afteroption", options:b})
    }
    this._init && (this.dispatchEvent({type:"beforeinit"}), this._init(d), this.dispatchEvent({type:"afterinit"}));
    var e = this, c = this.grid;
    c && ["Dispose", "CreateCss", "CreateDynamicCss", "Render", "Keydown", "Keyup", "Keypress", "Mousein", "Mouseout", "Mouseenter", "Mouseleave", "Mousemove", "Mouseover", "Mousedown", "Mouseup", "Click", "Dblclick", "Resize", "ResizeWidth", "ResizeHeight", "Scroll", "ScrollH", "ScrollV"].forEach(function(a) {
      var b = "before" + a, a = "after" + a, k = "_" + b, d = "_" + a;
      e[k] && c.addEventListener(b, function(a) {
        return e[k](a)
      });
      e[d] && c.addEventListener(a, function(a) {
        return e[d](a)
      })
    });
    this._bindEvents && (this.dispatchEvent({type:"beforebindevents"}), this._bindEvents(d), this.dispatchEvent({type:"afterbindevents"}));
    this.dispatchEvent({type:"complete"})
  }
  var i = goog.getObjectByName("jx.events.EventDispatcher");
  goog.exportSymbol("jx.grid.BaseModule", f);
  goog.inherits(f, i);
  var i = f.prototype, g = i.dispose;
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
    g.call(this)
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
    var d = this.getEventMgr();
    return d.bind.apply(d, arguments)
  };
  i.triggerGridEvent = function() {
    var d = this.getEventMgr();
    return d.trigger.apply(d, arguments)
  };
  i.toCssStyle = function(d, b, a) {
    var e = [];
    a || (d = "#" + this.grid.mid + " " + d);
    if(typeof b != "string") {
      var c, a = "";
      b.hasOwnProperty("_prepend") && (b._prepend && e.push(b._prepend), delete b._prepend);
      b.hasOwnProperty("_append") && (b._append && (a = ";" + b._append), delete b._append);
      for(c in b) {
        e.push(c + ":" + b[c])
      }
      e = e.join(";") + a
    }
    return d + "{" + e + "}"
  };
  i.toCssStyles = function(d, b, a) {
    var d = d || [], e;
    for(e in b) {
      d.push(this.toCssStyle(e, b[e], a))
    }
    return d
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "DataManager.js"...');
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
    this._options = i._extend({idKey:void 0, idColKeys:[], uniqueKeys:[]}, b.options);
    this._consts = {_auto:0, _given:1, _composite:2, _notReal:this.mid + "@NR" + g.random(1E4), _add:0, _addList:1, _update:2, _updateList:3, _remove:4, _removeList:5, unknown:0, number:1, string:2, "boolean":3, date:4, "enum":5};
    this._options.idKey != null ? (this._idMode = this._consts._given, this.idKey = this._options.idKey) : (this._idMode = this._options.idColKeys.length !== 0 ? this._consts._composite : this._consts._auto, this.idKey = "J@I" + this.mid + "@" + g.random(1E4));
    this._increment = 1;
    this._idToIdx = {};
    this._idToData = {};
    this._filters = [];
    this._history = [];
    this._redoHistory = [];
    this.uniqueMap = !1;
    this.__init(b)
  }
  var i = goog.getObjectByName("jx.grid"), g = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.data.DataManager", f);
  i._add("DataManager", f);
  f.getInstance = function(b) {
    return new f(b)
  };
  var d = f.prototype;
  d.__init = function(b) {
    var a = this.uniqueMap = {}, e = 0, c, h = this._options.uniqueKeys, j = !1;
    if(h && h.length) {
      j = !0;
      for(c = h.length;e < c;e++) {
        a[h[e]] = {}
      }
    }
    var h = this.grid.colDefMgr.getAll(), k, e = 0;
    for(c = h.length;e < c;e++) {
      k = h[e], k.unique && (j = !0, a[k.key] = {})
    }
    if(!j) {
      this.uniqueMap = !1
    }
    this.bindEvents();
    this.set(b.datalist)
  };
  d.bindEvents = function() {
    this.grid.event.bind({onDestroy:this._destroy, keydownCanvas:this._keydownCanvas}, this)
  };
  d._destroy = function() {
    this.cleanList(this.all);
    i._destroy(this, {name:"DataManager", path:"dataMgr", property:"all _idMode _increment idKey _sorter", map:"_consts _idToIdx _idToData _options", array:"datalist failed _history _redoHistory _filters"})
  };
  d.addUniqueIndex = function(b, a, e) {
    if(!e.hasOwnProperty(a)) {
      return this.grid.error("KEY_UNDEFINED", a)
    }
    var c = e[a];
    if(c == null || c === "") {
      return this.grid.error("BAD_NULL", a)
    }
    if(b.hasOwnProperty(c)) {
      return b[c] === e ? !1 : this.grid.error("DUP_ENTRY", c, a)
    }
    b[c] = e;
    return!0
  };
  d.addUniqueIndices = function(b, a, e) {
    var c, h = e.length, j = [], k, d;
    for(c = 0;c < h;c++) {
      if(d = e[c]) {
        if(k = this.addUniqueIndex(b, a, d)) {
          if(k instanceof Error) {
            return this.removeUniqueIndices(b, a, j), k
          }
          j.push(b[d[a]] = d)
        }
      }
    }
    return j.length > 0
  };
  d.updateUniqueIndex = function(b, a, e, c, h) {
    if(c.hasOwnProperty(a)) {
      if(!h.hasOwnProperty(a) || !e.hasOwnProperty(a)) {
        return this.grid.error("KEY_UNDEFINED", a)
      }
      if(!b.hasOwnProperty(h = h[a])) {
        return this.grid.error("KEY_NOT_FOUND", h, a)
      }
      c = c[a];
      if(c == null || c === "") {
        return this.grid.error("BAD_NULL", a)
      }
      if(b.hasOwnProperty(c)) {
        return b[c] === e ? !1 : this.grid.error("DUP_ENTRY", c, a)
      }
      b[c] = e;
      delete b[h];
      return h
    }
    return!1
  };
  d.updateUniqueIndices = function(b, a, e, c, h, j) {
    if(j !== !0) {
      if(g.isEmptyObj(b) || g.isEmptyString(a) || g.isEmptyArray(e) || g.isEmptyArray(c) || g.isEmptyArray(h)) {
        return!1
      }
      if(e.length !== c.length || e.length !== h.length) {
        return this.grid.error("LENGTH_NOT_EQUAL")
      }
    }
    for(var j = 0, k = e.length, d, f, i, n = [], m = [], l = [], p, s;j < k;j++) {
      if(!g.isNull(d = e[j])) {
        if((i = c[j]).hasOwnProperty(a)) {
          f = h[j];
          if(!f.hasOwnProperty(a) || !d.hasOwnProperty(a)) {
            return this.updateUniqueIndices(b, a, n, l, m), this.grid.error("KEY_UNDEFINED", a)
          }
          if(!b.hasOwnProperty(s = f[a])) {
            return this.updateUniqueIndices(b, a, n, l, m), this.grid.error("KEY_NOT_FOUND", s, a)
          }
          if(g.isEmptyString(p = i[a])) {
            return this.updateUniqueIndices(b, a, n, l, m), this.grid.error("BAD_NULL", a)
          }
          if(b.hasOwnProperty(p)) {
            if(b[p] === d) {
              continue
            }
            this.updateUniqueIndices(b, a, n, l, m);
            return this.grid.error("DUP_ENTRY", p, a)
          }
          b[p] = d;
          delete b[s];
          n.push(d);
          m.push(i);
          l.push(f)
        }
      }
    }
    return!n.length ? !1 : {datalist:n, changes:m, befores:l}
  };
  d.removeUniqueIndex = function(b, a, e) {
    var c;
    e.hasOwnProperty(a) && b.hasOwnProperty(c = e[a]) && delete b[c]
  };
  d.removeUniqueIndices = function(b, a, e, c) {
    if(!(c !== !0 && (g.isEmptyObj(b) || g.isEmptyString(a) || g.isEmptyArray(e)))) {
      for(var h = e.length, j, k, c = 0;c < h;c++) {
        k = e[c], k.hasOwnProperty(a) && b.hasOwnProperty(j = k[a]) && delete b[j]
      }
    }
  };
  d.addToUniqueMap = function(b) {
    if(this.uniqueMap) {
      var a = [], e, c = this.uniqueMap, h;
      for(e in c) {
        if(c.hasOwnProperty(e) && (h = this.addUniqueIndex(c[e], e, b))) {
          if(h instanceof Error) {
            e = 0;
            for(var j = a.length;e < j;e++) {
              this.removeUniqueIndex(c[a[e]], a[e], b)
            }
            return h
          }
          a.push(e)
        }
      }
      return a.length > 0
    }
    return!1
  };
  d.addListToUniqueMap = function(b) {
    if(this.uniqueMap) {
      var a = this.uniqueMap, e = [], c, h;
      for(c in a) {
        if(a.hasOwnProperty(c) && (h = this.addUniqueIndices(a[c], c, b))) {
          if(h instanceof Error) {
            c = 0;
            for(var j = e.length;c < j;c++) {
              this.removeUniqueIndices(a[e[c]], e[c], b)
            }
            return h
          }
          e.push(c)
        }
      }
      return e.length > 0
    }
    return!1
  };
  d.updateUniqueMap = function(b, a, e) {
    if(this.uniqueMap) {
      var c, h = this.uniqueMap, j = [], k;
      for(c in h) {
        if(h.hasOwnProperty(c) && (k = this.updateUniqueIndex(h[c], c, b, a, e))) {
          if(k instanceof Error) {
            c = 0;
            for(var d = j.length;c < d;c++) {
              this.updateUniqueIndex(h[j[c]], j[c], b, e, a)
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
  d.updateListUniqueMap = function(b, a, e) {
    if(this.uniqueMap) {
      var c, h = this.uniqueMap, j = [], k;
      for(c in h) {
        if(h.hasOwnProperty(c) && (k = this.updateUniqueIndices(h[c], c, b, a, e))) {
          if(k instanceof Error) {
            c = 0;
            for(var d = j.length;c < d;c++) {
              this.updateUniqueIndices(h[j[c]], j[c], b, e, a)
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
  d.removeFromUniqueMap = function(b) {
    if(this.uniqueMap) {
      var a, e = this.uniqueMap;
      for(a in e) {
        e.hasOwnProperty(a) && this.removeUniqueIndex(e[a], a, b)
      }
    }
  };
  d.removeListFromUniqueMap = function(b) {
    if(this.uniqueMap) {
      var a, e = this.uniqueMap;
      for(a in e) {
        e.hasOwnProperty(a) && this.removeUniqueIndices(e[a], a, b)
      }
    }
  };
  d.addToIdMap = function(b) {
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
  d.addListToIdMap = function(b) {
    var a = this.idKey;
    switch(this._idMode) {
      case this._consts._auto:
        for(var e = 0, c, h = b.length;e < h;e++) {
          if(!(c = b[e]).hasOwnProperty(a)) {
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
  d.updateIdMap = function(b, a, e) {
    if(g.isNullOr(b, e) || g.isEmptyObj(a)) {
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
        return this.updateUniqueIndex(this._idToData, c, b, a, e);
      case this._consts._composite:
        if(a.hasOwnProperty(c)) {
          return this.grid.error("NOT_MODIFIABLE", c)
        }
        for(var e = this._options.idColKeys, h = e.length, j = 0;j < h;j++) {
          if(a.hasOwnProperty(e[j])) {
            for(var k = "", d = 0, f, i, n = {}, m = {}, j = m[c] = b[c];d < h;d++) {
              if(f = e[d], a.hasOwnProperty(f)) {
                if(g.isEmptyString(i = a[f])) {
                  return this.grid.error("BAD_NULL", f)
                }
                k += "&" + i
              }else {
                k += "&" + b[f]
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
  d.updateListIdMap = function(b, a, e) {
    if(g.isEmptyArray(b) || g.isEmptyArray(a) || g.isEmptyArray(e)) {
      return!1
    }
    var c = this.idKey, h = b.length, j = 0;
    switch(this._idMode) {
      case this._consts._auto:
        for(;j < h;j++) {
          if(a[j].hasOwnProperty(c)) {
            return this.grid.error("NOT_MODIFIABLE", c)
          }
        }
      ;
      case this._consts._given:
        return this.updateUniqueIndices(this._idToData, c, b, a, e);
      case this._consts._composite:
        for(var k = this._idToData, d, f, i = this._options.idColKeys, n = i.length, m, e = [], l = [], p = [], s = [], t, u, v, w;j < h;j++) {
          d = b[j];
          f = a[j];
          if(f.hasOwnProperty(c)) {
            t = 0;
            for(h = e.length;t < h;t++) {
              l[t][c] = e[t]
            }
            return this.grid.error("NOT_MODIFIABLE", c)
          }
          for(t = 0;t < n;t++) {
            if(f.hasOwnProperty(i[t])) {
              m = "";
              for(u = 0;u < n;u++) {
                if(v = i[u], f.hasOwnProperty(v)) {
                  if(g.isEmptyString(w = f[v])) {
                    t = 0;
                    for(h = e.length;t < h;t++) {
                      l[t][c] = e[t]
                    }
                    return this.grid.error("BAD_NULL", v)
                  }
                  m += "&" + w
                }else {
                  m += "&" + d[v]
                }
              }
              d[c] !== m && (l.push(d), p.push({}), s.push({}), e.push(d[c]), d[c] = m)
            }
          }
        }
        if(!l.length) {
          break
        }
        b = this.updateUniqueIndices(k, c, l, p, s);
        if(b instanceof Error) {
          t = 0;
          for(h = e.length;t < h;t++) {
            l[t][c] = e[t]
          }
        }
        return b
    }
    return!1
  };
  d.removeFromIdMap = function(b) {
    var a = this.idKey, e = this._idToData, c;
    g.isNotNull(b) && b.hasOwnProperty(a) && e.hasOwnProperty(c = b[a]) && delete e[c]
  };
  d.removeListFromIdMap = function(b) {
    if(!g.isEmptyArray(b)) {
      for(var a = this.idKey, e = b.length, c = this._idToData, h, j, k = 0;k < e;k++) {
        j = b[k], j.hasOwnProperty(a) && c.hasOwnProperty(h = j[a]) && delete c[h]
      }
    }
  };
  d.fillTemp = function(b, a) {
    var e = this.grid.colDefMgr.getAll(), c = e.length, h, j, k = 0;
    if(a && a.isNew) {
      for(;k < c;k++) {
        j = e[k], h = j.key, j.nullOnCreate && b[h] == null && (b[h] = "J@H" + this._increment++)
      }
    }
  };
  d.fillTempList = function(b, a) {
    var e = this.grid.colDefMgr.getAll(), c = e.length, h = b.length, j, k, d = 0;
    if(a && a.isNew) {
      for(;d < c;d++) {
        if(k = e[d], j = k.key, k.nullOnCreate) {
          for(k = 0;h;k++) {
            b[k][j] = "J@H" + this._increment++
          }
        }
      }
    }
  };
  d.query = function(b) {
    if(typeof b === "string" && (b = $.trim(b), b.length)) {
      var a, e, c, h, j;
      a = b.toLowerCase();
      e = b.indexOf(" ");
      if(e !== -1 && (c = a.substring(0, e), a = a.indexOf(" where "), h = a > -1, e = $.trim(h ? b.substring(e + 1, a) : b.substring(e + 1)), e.length)) {
        switch(h && (j = $.trim(b.substring(a + 7))), c) {
          case "select":
            return this.executeSelect(e, j);
          case "insert":
            return this.executeInsert(e, j);
          case "update":
            return this.executeUpdate(e, j);
          case "delete":
            return this.executeDelete(e, j)
        }
      }
    }
  };
  d.parseWhere = function(b) {
    typeof b === "string" && $.trim(b)
  };
  d.executeSelect = function(b) {
    var b = g.split(b, /[\s,]+/), a = b.length, e = 0, c = {}, h = this.all, j = [];
    if(!a) {
      return j
    }
    for(;e < a;e++) {
      if(b[e] === "*") {
        break
      }
      c[b[e]] = !0
    }
    e = 0;
    for(a = h.length;e < a;e++) {
      j.push(g.clone(h[e], c))
    }
    return j
  };
  d.parse = function(b, a) {
    var e = this.grid.colDefMgr, c = e.getParser(), e = e.getNullOnCreate(), h, j = a && a.isNew;
    try {
      for(h in c) {
        if(c.hasOwnProperty(h) && (!j || !e.hasOwnProperty(h))) {
          b[h] = c[h](b[h], b)
        }
      }
    }catch(k) {
      return this.grid.error("PARSE_ERROR", b[h], h)
    }
    return!0
  };
  d.parseList = function(b, a) {
    var e = this.grid.colDefMgr, c = e.getParser(), e = e.getNullOnCreate(), h, j, k = a && a.isNew, d, f = b.length, g;
    try {
      for(h in c) {
        if(c.hasOwnProperty(h) && (!k || !e.hasOwnProperty(h))) {
          j = c[h];
          for(d = 0;d < f;d++) {
            g = b[d], g[h] = j(g[h], g)
          }
        }
      }
    }catch(i) {
      return this.grid.error("PARSE_ERROR", g[h], h)
    }
    return!0
  };
  d.validate = function(b, a) {
    var e = this.grid.colDefMgr, c = e.getValidator(), e = e.getNullOnCreate(), h, j, k, d, g, f = a && a.isNew;
    try {
      for(h in c) {
        if(c.hasOwnProperty(h) && (!f || !e.hasOwnProperty(h))) {
          if(b.hasOwnProperty(h) && (j = b[h]) != null ? (d = !1, k = typeof j == "string" ? j : j.toString(), g = !k) : (j = null, g = d = !0, k = ""), !c[h](j, b, k, d, g)) {
            return this.grid.error("WRONG_VALUE", k, h)
          }
        }
      }
    }catch(i) {
      return this.grid.error("WRONG_VALUE", k, h)
    }
    return!0
  };
  d.validateList = function(b, a) {
    var e = this.grid.colDefMgr, c = e.getValidator(), e = e.getNullOnCreate(), h, j, k = a && a.isNew, d, g = b.length, f, i, m, l, p;
    try {
      for(h in c) {
        if(c.hasOwnProperty(h) && (!k || !e.hasOwnProperty(h))) {
          j = c[h];
          for(d = 0;d < g;d++) {
            if(p = b[d], p.hasOwnProperty(h) && (f = p[h]) != null ? (m = !1, i = typeof f == "string" ? f : f.toString(), l = !i) : (f = null, l = m = !0, i = ""), !j(f, p, i, m, l)) {
              return this.grid.error("WRONG_VALUE", i, h)
            }
          }
        }
      }
    }catch(s) {
      return this.grid.error("WRONG_VALUE", i, h)
    }
    return!0
  };
  d.makeCompositeKey = function(b, a) {
    if(this._idMode === this._consts._composite && (a || !b.hasOwnProperty(this.idKey))) {
      for(var e = this._options.idColKeys, c = e.length, h = 0, j = "";h < c;h++) {
        j += "&" + b[e[h]]
      }
      b[this.idKey] = j
    }
  };
  d.makeCompositeKeyList = function(b, a) {
    if(this._idMode === this._consts._composite) {
      var e = this.idKey, c = b.length, h = this._options.idColKeys, j = h.length, k, d = 0, g, f;
      if(a) {
        for(;d < c;d++) {
          k = b[d];
          f = "";
          for(g = 0;g < j;g++) {
            f += "&" + k[h[g]]
          }
          k[e] = f
        }
      }else {
        for(;d < c;d++) {
          if(!(k = b[d]).hasOwnProperty(e)) {
            f = "";
            for(g = 0;g < j;g++) {
              f += "&" + k[h[g]]
            }
            k[e] = f
          }
        }
      }
    }
  };
  d.map = function(b) {
    if(b) {
      var a = this._idToData, e = this.idKey, c;
      this.makeCompositeKey(b);
      if(b.hasOwnProperty(e) && a.hasOwnProperty(c = b[e])) {
        return a[c]
      }
    }
    return null
  };
  d.mapList = function(b) {
    if(b && b.length) {
      this.makeCompositeKeyList(b);
      for(var a = [], e = [], c = this.idKey, h = this._idToData, j = b.length, k = 0, d, g;k < j;k++) {
        (d = b[k]).hasOwnProperty(c) && h.hasOwnProperty(g = d[c]) ? a.push(h[g]) : e.push(d)
      }
      return{mapped:a, unmapped:e}
    }
    return{mapped:[], unmapped:[]}
  };
  d.getById = function(b) {
    return b != null && this._idToData.hasOwnProperty(b) ? this._idToData[b] : null
  };
  d.getByIdx = function(b) {
    return b != null && this.datalist.hasOwnProperty(b) ? this.datalist[b] : null
  };
  d.getByNode = function(b) {
    return this.getById(this.getIdByNode(b))
  };
  d.getIdx = function(b) {
    return this.getIdxById(this.getId(b))
  };
  d.getIdxById = function(b) {
    return b != null && this._idToIdx.hasOwnProperty(b) ? this._idToIdx[b] : -1
  };
  d.getIdxByNode = function(b) {
    return this.getIdxById(this.getIdByNode(b))
  };
  d.getId = function(b) {
    return b && b.hasOwnProperty(this.idKey) ? b[this.idKey] : null
  };
  d.getIdByIdx = function(b) {
    return this.getId(this.getByIdx(b))
  };
  d.getIdByNode = function(b) {
    return b ? b.getAttribute("i") : null
  };
  d._reidxFrom = function(b) {
    for(var a = this.datalist, e = a.length, c = this.idKey, h = this._idToIdx, b = b || 0;b < e;b++) {
      h[a[b][c]] = b
    }
  };
  d._reidx = function() {
    this._idToIdx = {};
    this._reidxFrom()
  };
  d.has = function(b) {
    return this.hasById(this.getId(b))
  };
  d.hasById = function(b) {
    return b == null ? !1 : this._idToIdx.hasOwnProperty(b)
  };
  d.contains = function(b) {
    return this.containsById(this.getId(b))
  };
  d.containsById = function(b) {
    return b == null ? !1 : this._idToData.hasOwnProperty(b)
  };
  d.set = function(b) {
    var a = this.all;
    if(a === b || !a.length && (!b || !b.length)) {
      return!1
    }
    var b = b || [], e = this.grid.event;
    e.trigger("onBeforeDataChange", !1, !0);
    e.trigger("onBeforeSetDatalist", [a, b], !0);
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
    e.trigger("onAfterSetDatalist", [b], !0);
    e.trigger("onDataChange", !1, !0);
    this.refresh();
    return!0
  };
  d.add = function(b, a) {
    if(!b || this.map(b)) {
      return!1
    }
    var e = this.grid.event;
    e.trigger("onBeforeDataChange", !1, !0);
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
    e.trigger("onAddDatarow", [b, a], !0);
    e.trigger("onDataChange", !1, !0);
    (!a || a.noRefresh !== !0) && this.refresh(a);
    return!0
  };
  d.addList = function(b, a) {
    if(b && b.length) {
      var e = this.mapList(b).unmapped;
      if(!e.length) {
        return!1
      }
      this.grid.event.trigger("onBeforeDataChange", !1, !0);
      this.fillTempList(b, a);
      var c;
      if((c = this.parseList(e, a)) instanceof Error) {
        return c
      }
      if((c = this.validateList(e, a)) instanceof Error) {
        return c
      }
      if((c = this.addListToUniqueMap(e)) instanceof Error) {
        return c
      }
      if((c = this.addListToIdMap(e)) instanceof Error) {
        return c
      }
      this.all.pushList(e);
      if(!a || a.undo !== !0) {
        this._history.push({_action:this._consts._addList, _target:e}), this._redoHistory.length = 0
      }
      this.grid.event.trigger("onAddDatalist", [e, a], !0);
      this.grid.event.trigger("onDataChange", !1, !0);
      (!a || a.noRefresh !== !0) && this.refresh(a);
      return!0
    }
    return!1
  };
  d.updateByKey = function(b, a, e, c) {
    var h = {};
    h[a] = e;
    return this.update(b, h, c)
  };
  d.update = function(b, a, e) {
    if(!b || !a) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange", !1, !0);
    this.grid.event.trigger("onBeforeUpdateDatarow", [b, a], !0);
    var c = {}, h;
    for(h in a) {
      a.hasOwnProperty(h) && (b[h] === a[h] ? delete a[h] : (c[h] = b[h], b[h] = a[h]))
    }
    if(g.isEmptyObj(c)) {
      return!1
    }
    if((h = this.parse(b, e)) instanceof Error) {
      return this._rollback(b, c), h
    }
    if((h = this.validate(b, e)) instanceof Error) {
      return this._rollback(b, c), h
    }
    if((h = this.updateUniqueMap(b, a, c)) instanceof Error) {
      return this._rollback(b, c), h
    }
    if((h = this.updateIdMap(b, a, c)) instanceof Error) {
      return this._rollback(b, c), h
    }
    h !== !1 && this.grid.event.trigger("onIdChange", [b, h, b[this.idKey]], !0);
    if(!e || e.undo !== !0) {
      this._history.push({_action:this._consts._update, _target:b, _before:c, _change:a}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onUpdateDatarow", [b, a, c, e], !0);
    this.grid.event.trigger("onDataChange", !1, !0);
    (!e || e.noRefresh !== !0) && this.refresh(e);
    return!0
  };
  d.updateList = function(b, a) {
    if(!b || !b.length) {
      return!1
    }
    var e = this.grid.event;
    e.trigger("onBeforeDataChange", !1, !0);
    e.trigger("onBeforeUpdateDatalist", [b], !0);
    for(var c = [], h = [], j = [], k, d, f, i = b.length, n = 0, m;n < i;n++) {
      d = {};
      k = b[n].datarow;
      f = b[n].change;
      for(m in f) {
        f.hasOwnProperty(m) && (k[m] === f[m] ? delete f[m] : (d[m] = k[m], k[m] = f[m]))
      }
      g.isNotEmptyObj(d) && (c.push(k), h.push(d), j.push(f))
    }
    if(!c.length) {
      return!1
    }
    if((k = this.parseList(c, a)) instanceof Error) {
      return this._rollbackList(c, h), k
    }
    if((k = this.validateList(c, a)) instanceof Error) {
      return this._rollbackList(c, h), k
    }
    if((k = this.updateListUniqueMap(c, j, h)) instanceof Error) {
      return this._rollbackList(c, h), k
    }
    if((k = this.updateListIdMap(c, j, h)) instanceof Error) {
      return this._rollbackList(c, h), k
    }
    k !== !1 && e.trigger("onIdListChange", [k.list, k.befores, this.idKey], !0);
    if(!a || a.undo !== !0) {
      this._history.push({_action:this._consts._updateList, _target:c, _before:h, _change:j}), this._redoHistory.length = 0
    }
    e.trigger("onUpdateDatalist", [c, j, h, a], !0);
    e.trigger("onDataChange", !1, !0);
    (!a || a.noRefresh !== !0) && this.refresh(a);
    return!0
  };
  d._rollback = function(b, a) {
    for(var e in a) {
      a.hasOwnProperty(e) && (b[e] = a[e])
    }
  };
  d._rollbackList = function(b, a) {
    for(var e = b.length, c = 0, h, j, k;c < e;c++) {
      for(k in h = b[c], j = a[c], j) {
        j.hasOwnProperty(k) && (h[k] = j[k])
      }
    }
  };
  d.remove = function(b, a) {
    var e = this.map(b);
    if(e) {
      this.grid.event.trigger("onBeforeDataChange", !1, !0);
      this.removeFromIdMap(e);
      this.removeFromUniqueMap(e);
      this.all.remove(e);
      this.removeId(e);
      if(!a || a.undo !== !0) {
        this._history.push({_action:this._consts._remove, _target:e}), this._redoHistory.length = 0
      }
      this.grid.event.trigger("onRemoveDatarow", [e, a], !0);
      this.grid.event.trigger("onDataChange", !1, !0);
      (!a || a.noRefresh !== !0) && this.refresh(a);
      return!0
    }
    return!1
  };
  d.removeList = function(b, a) {
    if(b && b.length) {
      var e = this.mapList(b).mapped;
      if(e.length) {
        this.grid.event.trigger("onBeforeDataChange", !1, !0);
        this.removeListFromIdMap(e);
        this.removeListFromUniqueMap(e);
        this.all.removeList(e);
        this.cleanList(e);
        if(!a || a.undo !== !0) {
          this._history.push({_action:this._consts._removeList, _target:e}), this._redoHistory.length = 0
        }
        this.grid.event.trigger("onRemoveDatalist", [e, a], !0);
        this.grid.event.trigger("onDataChange", !1, !0);
        (!a || a.noRefresh !== !0) && this.refresh(a);
        return!0
      }
    }
    return!1
  };
  d._keydownCanvas = function(b) {
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
  d.undo = function() {
    if(!this._history.length) {
      return!1
    }
    var b = this._history.pop();
    this._redoHistory.push(b);
    var a = b._target, e = b._before;
    switch(b._action) {
      case this._consts._add:
        return this.remove(a, {undo:!0});
      case this._consts._addList:
        return this.removeList(a, {undo:!0});
      case this._consts._update:
        return this.update(a, e, {undo:!0});
      case this._consts._updateList:
        for(var b = [], c = 0, h = a.length;c < h;c++) {
          b.push({datarow:a[c], change:e[c]})
        }
        return this.updateList(b, {undo:!0});
      case this._consts._remove:
        return this.add(a, {undo:!0});
      case this._consts._removeList:
        return this.addList(a, {undo:!0})
    }
  };
  d.redo = function() {
    if(!this._redoHistory.length) {
      return!1
    }
    var b = this._redoHistory.pop();
    this._history.push(b);
    var a = b._target, e = b._change;
    switch(b._action) {
      case this._consts._add:
        return this.add(a, {undo:!0});
      case this._consts._addList:
        return this.addList(a, {undo:!0});
      case this._consts._update:
        return this.update(a, e, {undo:!0});
      case this._consts._updateList:
        for(var b = [], c = 0, h = a.length;c < h;c++) {
          b.push({datarow:a[c], change:e[c]})
        }
        return this.updateList(b, {undo:!0});
      case this._consts._remove:
        return this.remove(a, {undo:!0});
      case this._consts._removeList:
        return this.removeList(a, {undo:!0})
    }
  };
  d.equals = function(b, a) {
    if(b && a) {
      if(b === a) {
        return!0
      }
      this._idMode === this._consts._composite && (this.makeCompositeKey(b), this.makeCompositeKey(a));
      var e = this.idKey, c = b[e];
      return c == null ? !1 : c === a[e]
    }
    return!1
  };
  d.getReal = function() {
    var b = this._consts._notReal;
    return this.all.filter(function(a) {
      return!a.hasOwnProperty(b)
    })
  };
  d.filterReal = function(b) {
    var a = this._consts._notReal;
    return b.filter(function(b) {
      return!b.hasOwnProperty(a)
    })
  };
  d.isReal = function(b) {
    return b && !b.hasOwnProperty(this._consts._notReal)
  };
  d.dropNonReal = function(b) {
    if(b && b.length) {
      for(var a = this._consts._notReal, e = b.length - 1;e >= 0;e--) {
        b[e].hasOwnProperty(a) && (delete b[e][a], b.removeAt(e))
      }
    }
  };
  d.removeIdCol = function(b) {
    if(!(this._idMode === this._consts._given || !b || !b.length)) {
      for(var a = this.idKey, e = 0, c = b.length;e < c;e++) {
        b[e].hasOwnProperty(a) && delete b[e][a]
      }
    }
  };
  d.removeId = function(b) {
    b && this._idMode !== this._consts._given && b.hasOwnProperty(this.idKey) && delete b[this.idKey]
  };
  d.cleanList = function(b) {
    b && b.length && (this.removeIdCol(b), this.dropNonReal(b))
  };
  d.setSorter = function(b) {
    this.grid.event.trigger("onChangeSorter", [this._sorter, b], !0);
    this._sorter = b
  };
  d._sort = function(b) {
    b ? this.setSorter(b) : b = this._sorter;
    if(b) {
      var a = this.all, e = this.grid.event, c = [a];
      e.trigger("onBeforeSort", c, !0);
      b.comparator ? (a.sort(b.comparator), b.desc && a.reverse()) : b.lexi && this.constructor._lexi(a, b.lexi, b.desc);
      e.trigger("onAfterSort", c, !0)
    }
  };
  d.addFilter = function(b) {
    this._filters.push(b);
    this.refresh()
  };
  d.removeFilter = function(b) {
    var a = this._filters.length;
    this._filters.remove(b);
    a !== this._filters.length && this.refresh()
  };
  d._filter = function() {
    var b = this.datalist, a = this.failed, e = 0, c = this._filters.length, h, j;
    this.grid.event.trigger("onBeforeFilter", [b, a], !0);
    b.length = 0;
    b.pushList(this.all);
    for(a.length = 0;e < c;e++) {
      h = this._filters[e];
      for(j = b.length - 1;j >= 0;j--) {
        h(b[j]) || (a.push(b[j]), b.removeAt(j))
      }
    }
    this.grid.event.trigger("onFilter", [b, a], !0);
    this.grid.event.trigger("onAfterFilter", [b, a], !0)
  };
  d._finish = function(b) {
    this._reidx();
    this.grid.event.trigger("onAfterRefresh", [b], !0)
  };
  d.refresh = function(b) {
    this.grid.event.trigger("onBeforeRefresh", !1, !0);
    b ? b.noSort || this._sort(b.sorter) : this._sort();
    (!b || !b.noFilter) && this._filter();
    this._finish(b)
  };
  d.exportRowToArray = function(b, a) {
    if(!(b in this.datalist)) {
      return null
    }
    a || (a = this.grid.colDefMgr.getKeys());
    for(var e = this.datalist[b], c = [], h, j = 0, k = a.length;j < k;j++) {
      h = a[j], c.push(h in e ? e[h] : null)
    }
    return c
  };
  d.exportToArray = function(b, a, e, c) {
    for(var b = b || this.grid.colDefMgr.getKeys(), c = c || this.datalist.slice(a, e), e = [], h, j, k = 0, d = c.length, f, g = b.length;k < d;k++) {
      h = c[k];
      f = 0;
      for(a = [];f < g;f++) {
        j = b[f], a.push(j in h ? h[j] : null)
      }
      e.push(a)
    }
    return e
  };
  d.select = function(b, a, e, c) {
    for(var b = b || this.grid.colDefMgr.getKeys(), c = c || this.datalist.slice(a, e), e = [], h, j, k = 0, d = c.length, f, g = b.length;k < d;k++) {
      h = c[k];
      f = 0;
      for(a = {};f < g;f++) {
        j = b[f], a[j] = h.hasOwnProperty(j) && h[j] != null ? h[j] : null
      }
      e.push(a)
    }
    return e
  };
  d.slice = function(b, a) {
    return this.select(null, b, a)
  };
  f._lexi = function(b, a, e) {
    var c = Object.prototype.toString;
    Object.prototype.toString = typeof a == "function" ? a : function() {
      return this[a]
    };
    b.sort();
    Object.prototype.toString = c;
    e && b.reverse()
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "EventManager.js"...');
jx.grid.EventManager = {};
(function() {
  function f(b) {
    this.mid = b.mid;
    this.grid = b.grid;
    b.grid.event = this;
    this._map = {}
  }
  var i = goog.getObjectByName("jx.grid"), g = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.EventManager", f);
  f.getInstance = function(b) {
    return new f(b)
  };
  var d = f.prototype;
  d.destroy = function() {
    var b, a = this._map;
    for(b in a) {
      a.hasOwnProperty(b) && i._deleteArray(a, b)
    }
    i._destroy(this, {name:"EventManager", path:"event", map:"_map"})
  };
  d.register = function(b, a, e) {
    if(g.isString(b)) {
      this._parseAndAdd(b, a, e)
    }else {
      if(g.isNotNull(b.e)) {
        this._parseAndAdd(b.e, b.f, b.t)
      }else {
        for(var c, a = b.length, h;c < a;c++) {
          g.isNotNull(h = b[c]) && this._parseAndAdd(h.e, h.f, h.t)
        }
      }
    }
  };
  d.bind = function(b, a, e) {
    if(g.isString(b)) {
      this._parseAndAdd(b, a, e)
    }else {
      for(var c in b) {
        b.hasOwnProperty(c) && this._parseAndAdd(c, b[c], a)
      }
    }
  };
  d._parseAndAdd = function(b, a, e) {
    g.isNull(e) && (e = window);
    var b = g.split(b), c = b.length, h = 0;
    if(g.isFunction(a)) {
      for(;h < c;h++) {
        this._addHandler(b[h], a, e)
      }
    }else {
      if(g.isString(a)) {
        for(var a = g.split(a), j = a.length, k, d;h < c;h++) {
          k = b[h];
          for(d = 0;d < j;d++) {
            this._addHandler(k, e[a[d]], e)
          }
        }
      }else {
        for(j = a.length;h < c;h++) {
          k = b[h];
          for(d = 0;d < j;d++) {
            this._addHandler(k, a[d], e)
          }
        }
      }
    }
  };
  d._addHandler = function(b, a, e) {
    this._map.hasOwnProperty(b) || (this._map[b] = []);
    this._map[b].push({fn:a, target:e})
  };
  d.unregister = function(b, a) {
    var e = this._map;
    if(e.hasOwnProperty(b)) {
      var c = e[b];
      if(g.isNull(a)) {
        c.length = 0, delete e[b]
      }else {
        for(var h = 0, j = c.length;h < j;h++) {
          if(c[h].fn === a) {
            c.removeAt(h);
            c.length === 0 && delete e[b];
            break
          }
        }
      }
    }
  };
  d.trigger = function(b, a, e, c) {
    this.grid.log("firing event=" + b, 3);
    var h = this._map;
    if(h.hasOwnProperty(b)) {
      var h = h[b], j = h.length;
      if(j) {
        if(this.grid.log(j + " handlers registered for event=" + b, 4), b = 0, e) {
          if(a && a.length) {
            for(;b < j;b++) {
              e = h[b], e.fn.apply(e.target, a)
            }
          }else {
            for(;b < j;b++) {
              e = h[b], e.fn.call(e.target)
            }
          }
        }else {
          c = c || [];
          if(a && a.length) {
            for(;b < j;b++) {
              e = h[b], c.push(e.fn.apply(e.target, a))
            }
          }else {
            for(;b < j;b++) {
              e = h[b], c.push(e.fn.call(e.target))
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
  d.triggerMultiple = function(b, a, e) {
    var b = b.split(","), c = 0, h = b.length;
    if(e) {
      for(e = [];c < h;c++) {
        this.trigger(b[c], a, !1, e)
      }
      return e
    }else {
      for(;c < h;c++) {
        this.trigger(b[c], a, !0)
      }
    }
  };
  d.triggerInvalid = function(b, a) {
    var e = this.trigger(b, a);
    return e && e.some(function(a) {
      return a === !1
    })
  };
  d.sendToBack = function(b, a) {
    for(var e = this._map[b], c = e.length, h, j = -1, k = 0;k < c;k++) {
      if(e[k].fn === a) {
        j = k;
        h = e[k];
        break
      }
    }
    j > -1 && (e.removeAt(k), e.push(h))
  };
  d.sendToFront = function(b, a) {
    for(var e = this._map[b], c = e.length, h, j = -1, k = 0;k < c;k++) {
      if(e[k].fn === a) {
        j = k;
        h = e[k];
        break
      }
    }
    j > -1 && (e.removeAt(k), e.unshift(h))
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "Tree.js"...');
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
  function i(b) {
    this.list = b.list;
    this._options = JGM._extend({nodeKey:"nodeId", parentKey:"parentId"}, b.options);
    this.map = {};
    this.root = new f({tree:this});
    this.infants = {}
  }
  var g = goog.getObjectByName("jx.util");
  goog.exportSymbol("jx.struct.TreeNode", f);
  goog.exportSymbol("jx.struct.Tree", i);
  goog.exportSymbol("TreeNode", f);
  goog.exportSymbol("Tree", i);
  f.getInstance = function(b) {
    return new f(b)
  };
  var d = f.prototype;
  d.destroy = function() {
    this.detach();
    delete this.tree;
    delete this.data;
    delete this.nodeId;
    delete this.childrenMap;
    delete this.children
  };
  d.destroyCompletely = function() {
    this.detachCompletely();
    delete this.tree;
    delete this.data;
    delete this.nodeId;
    delete this.childrenMap;
    delete this.children
  };
  d.destroyDown = function() {
    g.isNotNull(this.parent) && this.parent.removeChild(this);
    this.traverse({post:!0, fn:function() {
      this.destroy()
    }})
  };
  d.detach = function() {
    delete this.parent;
    delete this.level;
    this.children.length = 0;
    this.childrenMap = {}
  };
  d.detachCompletely = function() {
    g.isNotNull(this.parent) && this.parent.removeChild(this);
    this.removeAllChildren();
    delete this.parent;
    delete this.level
  };
  d.detachDown = function() {
    g.isNotNull(this.parent) && this.parent.removeChild(this);
    this.traverse({post:!0, fn:function() {
      this.detach()
    }})
  };
  d.isRoot = function() {
    return g.isNull(this.parent)
  };
  d.getRoot = function() {
  };
  d.isLeaf = function() {
    return this.children.length === 0
  };
  d.setParent = function(b) {
    if(this.parent !== b) {
      g.isNotNull(this.parent) && this.parent.removeChild(this), this.parent = b, delete this.level, g.isNotNull(b) && b.addChild(this)
    }
  };
  d.hasChild = function(b) {
    return this.childrenMap.hasOwnProperty(b.nodeId)
  };
  d.addChild = function(b) {
    this.hasChild(b) || (this.children.push(b), this.childrenMap[b.nodeId] = this.children.length - 1, b.setParent(this))
  };
  d.addChildAt = function(b, a) {
    var e;
    if(this.hasChild(a)) {
      e = this.childrenMap[a.nodeId];
      if(e === b) {
        return
      }
      this.children.removeAt(e)
    }
    this.children.addAt(b, a);
    g.isNotNull(e) && e < b ? this.resetChildIdx(e) : this.resetChildIdx(b);
    a.setParent(this)
  };
  d.removeChild = function(b) {
    if(this.hasChild(b)) {
      var a = this.childrenMap[b.nodeId];
      this.children.removeAt(a);
      delete this.childrenMap[b.nodeId];
      this.resetChildIdx(a);
      delete b.parent;
      delete b.level
    }
  };
  d.removeChildAt = function(b) {
    var a = this.children[b];
    this.children.removeAt(b);
    delete this.childrenMap[a.nodeId];
    this.resetChildIdx(b);
    delete a.parent;
    delete a.level
  };
  d.resetChildIdx = function(b) {
    g.isNull(b) && (b = 0);
    for(var a = this.children, e = a.length, c = this.childrenMap;b < e;b++) {
      c[a[b].nodeId] = b
    }
  };
  d.removeAllChildren = function() {
    for(var b = 0, a = this.children, e = a.length;b < e;b++) {
      delete a[b].parent, delete a[b].level
    }
    a.length = 0;
    this.childrenMap = {}
  };
  d.getSiblings = function() {
    if(this.isRoot()) {
      return[]
    }
    var b = this.parent.children.slice();
    b.removeAt(this.parent.getChildIdx(this));
    return b
  };
  d.getChildIdx = function(b) {
    return this.childrenMap[b.nodeId]
  };
  d.getIdx = function() {
    return this.isRoot() ? -1 : this.parent.getChildIdx(this)
  };
  d.getPath = function() {
    return this.traverse({res:[], up:!0, post:!0, fn:function(b) {
      this.isRoot() || b.res.push(this.getIdx())
    }}).res
  };
  d.getAncestors = function() {
    var b = {res:[], up:!0, post:!0, fn:function(a) {
      a.res.push(this)
    }};
    this.traverse(b);
    b.res.pop();
    return b.res
  };
  d.getDescendents = function() {
    var b = {res:[], fn:function(a) {
      a.res.push(this)
    }};
    this.traverse(b);
    b.res.shift();
    return b.res
  };
  d.getLevel = function() {
    return this.isRoot() ? this.level = -1 : this.level = this.parent.getLevel() + 1
  };
  d.find = function(b) {
    return this.traverse({fn:function(a) {
      if(this.data === b) {
        a.res = this, a.stop = !0
      }
    }}).res
  };
  d.traverse = function(b, a) {
    if(b.stop) {
      return b
    }
    if(b.up) {
      this.isRoot() ? this.callFn(b) : b.post ? (this.parent.traverse(b), this.callFn(b)) : (this.callFn(b), this.parent.traverse(b))
    }else {
      var e = 0, c = this.children, h = c.length;
      if(b.post) {
        for(;e < h;e++) {
          c[e].traverse(b, e)
        }
        this.callFn(b, a)
      }else {
        if(this.callFn(b, a), b.propagate === !1) {
          delete b.propagate
        }else {
          for(;!b.stop && e < h;e++) {
            c[e].traverse(b, e)
          }
        }
      }
    }
    return b
  };
  d.traverseChildren = function(b) {
    for(var a = 0, e = this.children, c = e.length;a < c;a++) {
      e[a].traverse(b, a)
    }
  };
  d.traverseParent = function(b) {
    g.isNotNull(this.parent) && this.parent.traverse(b)
  };
  d.callFn = function(b, a) {
    if(!b.stop) {
      g.isNull(b.target) ? g.callFn(this, b.fn, b, a) : (b.node = this, g.callFn(b.target, b.fn, b, a))
    }
  };
  i.getInstance = function(b) {
    return new i(b)
  };
  d = i.prototype;
  d.__init = function() {
    this.makeTree()
  };
  d.destroy = function() {
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
  d.detach = function() {
    this.root.detachDown();
    this.emptyInfants()
  };
  d.emptyInfants = function() {
    var b, a = this.infants;
    for(b in a) {
      if(a.hasOwnProperty(b)) {
        a[b].length = 0
      }
    }
    this.infants = {}
  };
  d.reattach = function(b) {
    this.detach();
    if(g.isNull(b)) {
      b = this.list
    }
    for(var a = this._options.nodeKey, e = this.map, c = b.length, h = 0;h < c;h++) {
      this.attachNode(e[b[h][a]])
    }
  };
  d.makeTree = function(b) {
    if(g.isNull(b)) {
      b = this.list
    }
    for(var a = 0, e = b.length;a < e;a++) {
      this.createNode(b[a])
    }
  };
  d.hasNode = function(b) {
    return g.isNotNull(b) && this.map.hasOwnProperty(b[this._options.nodeKey])
  };
  d.getNode = function(b) {
    return this.map[b[this._options.nodeKey]]
  };
  d.getNodeByNodeId = function(b) {
    return this.map[b]
  };
  d.createNode = function(b) {
    if(!this.hasNode()) {
      var a = b[this._options.nodeKey], b = new f({tree:this, data:b, nodeId:a});
      this.map[a] = b;
      this.attachNode(b);
      return b
    }
  };
  d.adoptInfants = function(b, a) {
    if(this.infants.hasOwnProperty(a)) {
      for(var e = this.infants[a], c = 0, h = e.length;c < h;c++) {
        b.addChild(e[c])
      }
      e.length = 0;
      delete this.infants[a]
    }
  };
  d.attachNode = function(b) {
    var a = b.nodeId, e = b.data[this._options.parentKey];
    this.adoptInfants(b, a);
    if(g.isNull(e) || e == a) {
      return this.root.addChild(b), !0
    }
    if(this.map.hasOwnProperty(e)) {
      return this.map[e].addChild(b), !0
    }
    this.addToInfants(b, e);
    return!1
  };
  d.changeNodeId = function(b, a, e) {
    if(a !== e) {
      delete this.map[a], this.map[e] = b, this.removeChildren(b), b.nodeId = b.data[this._options.nodeKey] = e, g.isNotNull(b.parent) && (b.parent.childrenMap[e] = b.parent.childrenMap[a], delete b.parent.childrenMap[a]), this.adoptInfants(b, e)
    }
  };
  d.changeParentId = function(b, a, e) {
    a !== e && (g.isNull(b.parent) && this.removeFromInfants(b, a), a = this.map[e], b.setParent(a), b.data[this._options.parentKey] = e, g.isNull(a) && this.addToInfants(b, e))
  };
  d.destroyNodeByData = function(b) {
    this.destroyNode(this.getNode(b))
  };
  d.destroyNode = function(b) {
    this.removeChildren(b);
    this.removeFromInfants(b);
    this.removeFromMap(b);
    b.destroyCompletely()
  };
  d.removeFromMap = function(b) {
    delete this.map[b.nodeId]
  };
  d.addToInfants = function(b, a) {
    this.infants.hasOwnProperty(a) || (this.infants[a] = []);
    this.infants[a].push(b)
  };
  d.removeFromInfants = function(b, a) {
    g.isNull(a) && (a = b.data[this._options.parentKey]);
    this.infants.hasOwnProperty(a) && (this.infants[a].remove(b), this.infants[a].length === 0 && delete this.infants[a])
  };
  d.removeChildren = function(b) {
    b.children.length !== 0 && (this.infants.hasOwnProperty(b.nodeId) || (this.infants[b.nodeId] = []), this.infants[b.nodeId].pushList(b.children), b.removeAllChildren())
  };
  d.sortList = function(b) {
    g.isNull(b) ? b = [] : b.length = 0;
    this.root.traverseChildren({fn:function() {
      b.push(this.data)
    }})
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "Grid.js"...');
jx.grid.Grid = {};
(function() {
  function f(a) {
    this.mid = a.mid;
    this.log("creating new Grid instance...", e);
    b.call(this, a)
  }
  var i = goog.getObjectByName("jx.grid"), g = goog.getObjectByName("jx.util"), d = goog.getObjectByName("echo"), b = goog.getObjectByName("jx.grid.BaseModule"), a = goog.getObjectByName("TimeWatch"), e = 1;
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
  f.V_INIT = e;
  goog.inherits(f, b);
  f.getInstance = function(a) {
    return new f(a)
  };
  var c = f.prototype;
  c._defaultOptions = function() {
    return{classGrid:"jgrid", border:"1px solid #868686", width:"", font:"15px Arial,Helvetica,sans-serif", style:"", borderSide:!0, imageUrl:"../images/", links:{data:"dataMgr.all", datalen:"dataMgr.all.length", shown:"dataMgr.datalist", set:"dataMgr.set", add:"dataMgr.add", addList:"dataMgr.addList", update:"dataMgr.update", updateByKey:"dataMgr.updateByKey", updateList:"dataMgr.updateList", remove:"dataMgr.remove", removeList:"dataMgr.removeList", select:"dataMgr.executeSelect", undo:"dataMgr.undo", 
    redo:"dataMgr.redo", addFilter:"dataMgr.addFilter", removeFilter:"dataMgr.removeFilter", check:"collapser.checkMgr.checkList checkMgr.checkList", checked:"collapser.checkMgr.getCheckList checkMgr.getCheckList", removeChecked:"collapser.checkMgr.removeChecked checkMgr.removeChecked", register:"event.register", trigger:"event.trigger", bind:"event.bind", unregister:"event.unregister", unbind:"event.unregister", commit:"editMgr.commit", cancelEdit:"editMgr.cancel", beginEdit:"editMgr.begin", collen:"colDefMgr.length"}, 
    autoWidth:!1, showMessage:!1}
  };
  c._init = function(a) {
    var b = this._ctnr = a.container, e = this._options, c;
    this.name = e.name;
    this._drag = !1;
    this._lastH = this._lastW = null;
    this._vars = {scrollbarDim:void 0};
    if(c = e.width) {
      if(typeof c === "number" || c.indexOf("%") === -1) {
        c += "px"
      }
    }else {
      c = ""
    }
    b = this._ctnr = $("<div id='" + this.mid + "' class='" + e.classGrid + "' " + (c ? "style='width:" + c + "' " : "") + "tabIndex='0'>").appendTo(Util$.safe$(b));
    this._vars.scrollbarDim = Util$.calScrollbarDims(b);
    c = this.event = i.create("EventManager", {grid:this, options:e.EventManager});
    this.colDefMgr = i.create("ColumnManager", {grid:this, colDefs:a.colDefs, options:e.ColDefManager});
    this.dataMgr = i.create("DataManager", {grid:this, datalist:a.datalist, options:e.DataManager});
    e.CheckManager && (this.checkMgr = i.create("CheckManager", {grid:this, options:e.CheckManager}));
    if(!e.MenuBar && (e.columnHideEnabled || e.SearchManager)) {
      e.MenuBar = {}
    }
    if(e.Collapser) {
      this.collapser = i.create("Collapser", {grid:this, options:e.Collapser}), this.collapser.__init()
    }
    e.ColGroup && (this.colGroup = i.create("ColumnGroup", {grid:this, options:e.ColGroup}));
    e.SelectionManager && (this.selMgr = i.create("SelectionManager", {grid:this, options:e.SelectionManager}));
    e.EditManager && (this.editMgr = i.create("EditManager", {grid:this, options:e.EditManager}));
    e.ColHeader && (this.header = i.create("ColumnHeader", {grid:this, container:b, options:e.ColHeader}));
    e.SearchManager && (this.search = i.create("SearchManager", {grid:this, container:b, options:e.SearchManager}));
    e.MenuBar && (this.menubar = i.create("MenuBar", {grid:this, container:b, options:e.MenuBar}));
    this.view = i.create("ViewportManager", {grid:this, container:b, options:e.ViewportManager});
    e.TooltipManager && (this.tooltip = i.create("TooltipManager", {grid:this, container:b, options:e.TooltipManager}));
    e.DataCreator && (this.creator = i.create("DataCreator", {grid:this, container:b, options:e.DataCreator}));
    e.Footer && (this.footer = i.create("Footer", {grid:this, container:b, options:e.Footer}));
    e.autoWidth && c.bind("onResizeCanvasWidth", this.width, this);
    this._createCss();
    c.trigger("onBeforeRenderModules", !1, !0);
    c.trigger("onRenderModules", !1, !0);
    c.trigger("onAfterRenderModules", !1, !0);
    this.msg = $("<div id='" + this.mid + "msg' class='msg' onmousedown='$(this).hide(1000)' style='position:relative;padding-left:4px;overflow:hidden;z-index:100;font-size:12px;height:21px;line-height:21px'></div>").appendTo(b).hide();
    this._busyShader = $('<div style="position:absolute;background:black;opacity:0.3;filter:alpha(opacity=30)"></div>').appendTo(b).hide();
    b = b[0];
    this._lastW = b.clientWidth;
    this._lastH = b.clientHeight;
    this._registerLinks(e.links)
  };
  c._bindEvents = function() {
    i._bindGlobalEvents();
    this.log("binding Grid events...", e);
    var a = this;
    this._ctnr.bind({keydown:function(b) {
      a._keydown(b)
    }, keyup:function(b) {
      a._keyup(b)
    }, keypress:function(b) {
      a._keypress(b)
    }, mousein:function(b) {
      a._mousein(b)
    }, mouseout:function(b) {
      a._mouseout(b)
    }, mouseenter:function(b) {
      a._mouseenter(b)
    }, mouseleave:function(b) {
      a._mouseleave(b)
    }, mouseover:function(b) {
      a._mouseover(b)
    }, mousedown:function(b) {
      a._mousedown(b)
    }, click:function(b) {
      a._click(b)
    }, dblclick:function(b) {
      a._dblclick(b)
    }});
    this._charts = []
  };
  c.destroy = function() {
    this.log("destroying Grid...", e);
    try {
      var a = i.grids.indexOf(this);
      a > -1 && i.grids.splice(a, 1);
      this.name != null && delete i.gridMap[this.name];
      this.log("event:beforeDispose.", e);
      this.dispatchEvent({type:"beforeDispose"});
      g.isEmptyObj(i.m.Grid) && (this.log("unbinding global event handlers.", e), i._unbindGlobalEvents());
      this.log("event:onDestroy.", e);
      this.event.trigger("onDestroy", !1, !0);
      this.log("destroying grid vars...", e);
      i._destroy(this, {name:"Grid", module:"event", $:"_ctnr", map:"_options", style:"_style _dynStyle"});
      this.dispose()
    }catch(b) {
      return b
    }
  };
  c._registerLinks = function(a) {
    var b, e, c, d, f, i, m, l, p, s;
    a:for(b in a) {
      if(a.hasOwnProperty(b) && !(b in this)) {
        e = g.split(a[b]);
        c = e.length;
        d = 0;
        b:for(;d < c;d++) {
          if(f = e[d].split("."), i = f.length, !(i < 1)) {
            m = this;
            l = this;
            p = "";
            for(s = 0;s < i;s++) {
              if(f[s] in m) {
                l = m, m = m[p = f[s]]
              }else {
                continue b
              }
            }
            this._registerLink(b, m, l, p);
            continue a
          }
        }
      }
    }
  };
  c._registerLink = function(a, b, e, c) {
    if(this.hasOwnProperty(a)) {
      return!1
    }
    this[a] = g.isFunction(b) ? function() {
      return b.apply(e, arguments)
    } : function() {
      return e[c]
    };
    return!0
  };
  c._createCss = function() {
    this.log("creating CSS...", e);
    var a = {type:"beforeCreateCss", css:[]}, b = this._options, c = this.event;
    this.dispatchEvent(a);
    this.log("creating CSS for Grid...", e);
    var d = c.trigger("onCreateCss"), d = d ? d.join("") : "", a = g.sprint("%selector%{overflow:hidden;height:100%;font:%font%;%border%%style%}%submodule%", {selector:"#" + this.mid, position:"relative", font:b.font, border:b.borderSide ? "border:" + b.border + ";" : "border-top:" + b.border + ";border-bottom:" + b.border + ";", style:b.style, submodule:a.css.join("") + d});
    this._style = g.createStyle(a);
    a = {type:"beforeCreateDynamicCss", css:[]};
    this.dispatchEvent(a);
    d = (d = c.trigger("onCreateDynamicCss")) ? d.join("") : "";
    this._dynStyle = g.createStyle(a.css.join("") + ";" + d)
  };
  c._recreateDynamicCss = function() {
    this.log("rewriting dynamic css...", 2);
    var a = this.event.trigger("onCreateDynamicCss");
    (a = a ? a.join("") : "") && g.setStyle(this._dynStyle, a)
  };
  c._keydown = function(a) {
    var b = this.event, e = [a], c = a.which;
    this.log("UI event:keydown detected. event=" + a.type + ", keycode=" + c, 3);
    b.triggerInvalid("onBeforeKeydown", e) ? this.log("UI event:keydown prevented.", 3) : (b.trigger("keydown_" + c, e, !0), b.trigger("keydown", e, !0))
  };
  c._keyup = function(a) {
    var b = this.event, e = [a], c = a.which;
    this.log("UI event:keyup detected. event=" + a.type + ", keycode=" + c, 3);
    b.triggerInvalid("onBeforeKeyup", e) ? this.log("UI event:keyup prevented.", 3) : (b.trigger("keyup_" + c, e, !0), b.trigger("keyup", e, !0))
  };
  c._keypress = function(a) {
    var b = this.event, e = [a], c = a.which;
    this.log("UI event:keypress detected. event=" + a.type + ", keycode=" + c, 3);
    b.triggerInvalid("onBeforeKeypress", e) ? this.log("UI event:keypress prevented.", 3) : (b.trigger("keypress_" + c, e, !0), b.trigger("keypress", e, !0))
  };
  c._mousein = function(a) {
    var b = this.event, e = [a];
    this.log("UI event:mousein detected. event=" + a.type, 4);
    b.triggerInvalid("onBeforeMousein", e) ? this.log("UI event:mousein prevented.", 4) : (this._drag && b.trigger("dragin", e, !0), b.trigger("mousein", e, !0))
  };
  c._mouseout = function(a) {
    var b = this.event, e = [a];
    this.log("UI event:mouseout detected. event=" + a.type, 4);
    b.triggerInvalid("onBeforeMouseout", e) ? this.log("UI event:mouseout prevented.", 4) : (this._drag && b.trigger("dragout", e, !0), b.trigger("mouseout", e, !0))
  };
  c._mouseenter = function(a) {
    var b = this.event, e = [a];
    this.log("UI event:mouseenter detected. event=" + a.type, 3);
    b.triggerInvalid("onBeforeMouseenter", e) ? this.log("UI event:mouseenter prevented.", 3) : (this._drag && b.trigger("dragenter", e, !0), b.trigger("mouseenter", e, !0))
  };
  c._mouseleave = function(a) {
    var b = this.event, e = [a];
    this.log("UI event:mouseleave detected. event=" + a.type, 3);
    b.triggerInvalid("onBeforeMouseleave", e) ? this.log("UI event:mouseleave prevented.", 3) : (this._drag && b.trigger("dragleave", e, !0), b.trigger("mouseleave", e, !0))
  };
  c._mousemove = function(a) {
    var b = this.event, e = [a];
    this.log("UI event:mousemove detected. event=" + a.type, 5);
    b.triggerInvalid("onBeforeMousemove", e) ? this.log("UI event:mousemove prevented.", 5) : (this._drag && b.trigger("dragmove", e, !0), b.trigger("mousemove", e, !0))
  };
  c._mouseover = function(a) {
    var b = this.event, e = [a];
    this.log("UI event:mouseover detected. event=" + a.type, 4);
    b.triggerInvalid("onBeforeMouseover", e) ? this.log("UI event:mouseover prevented.", 4) : (this._drag && b.trigger("dragover", e, !0), b.trigger("mouseover", e, !0))
  };
  c._mousedown = function(a) {
    var b = this.event, e = [a];
    this.log("UI event:mousedown detected. event=" + a.type, 3);
    this._drag = !0;
    b.triggerInvalid("onBeforeMousedown", e) ? this.log("UI event:mousedown prevented.", 3) : b.trigger("mousedown", e, !0)
  };
  c._mouseup = function(a) {
    var b = this.event, e = [a];
    this.log("UI event:mouseup detected. event=" + a.type, 3);
    this._drag = !1;
    b.trigger("unsetDrag", !1, !0);
    this.containsEvent(a) && (b.triggerInvalid("onBeforeMouseup", e) ? this.log("UI event:mouseup prevented.", 3) : b.trigger("mouseup", e, !0))
  };
  c._click = function(a) {
    var b = this.event, e = [a];
    this.log("UI event:click detected. event=" + a.type, 2);
    b.triggerInvalid("onBeforeClick", e) ? this.log("UI event:click prevented.", 2) : b.trigger("click", e, !0)
  };
  c._dblclick = function(a) {
    var b = this.event, e = [a];
    this.log("UI event:dblclick detected. event=" + a.type, 2);
    b.triggerInvalid("onBeforeDblclick", e) ? this.log("UI event:dblclick prevented.", 2) : b.trigger("dblclick", e, !0)
  };
  c._resize = function(a) {
    var b = this.event;
    this.log("event:resize detected. event=" + a.type, 2);
    var e = !1, c = this._ctnr, d = c[0], f = this._lastW, g = this._lastH, i = d.clientWidth || c.width(), c = d.clientHeight || c.height();
    if(i >= 1 && f !== i) {
      this.log("event:resizeWidth detected. " + f + "->" + i, 2), b.trigger("resizeWidth", [i, f], !0), this._lastW = i, e = !0
    }
    if(c >= 1 && g !== c) {
      this.log("event:resizeHeight detected. " + g + "->" + c, 2), b.trigger("resizeHeight", [c, g], !0), this._lastH = c, e = !0
    }
    e && b.trigger("resize", [a], !0)
  };
  c.width = function(a) {
    var b = this._ctnr[0], e = b.clientWidth, c = this.event;
    if(!a) {
      return e
    }
    typeof a != "number" && (a = parseInt(a, 10));
    if(a < 1 || a === e || !isFinite(a)) {
      return e
    }
    this.log("set width. " + this._lastW + "->" + a, 2);
    b.style.width = a + "px";
    c.trigger("resizeWidth", [a, this._lastW], !0);
    this._lastW = a;
    c.trigger("resize", !1, !0);
    return a
  };
  c.height = function(a) {
    var b = this._ctnr[0], e = b.clientHeight, c = this.event;
    if(!a) {
      return e
    }
    typeof a != "number" && (a = parseInt(a, 10));
    if(a < 1 || a === e || !isFinite(a)) {
      return e
    }
    this.log("set height. " + this._lastH + "->" + a, 2);
    b.style.height = a + "px";
    c.trigger("resizeHeight", [a, this._lastH], !0);
    this._lastH = a;
    c.trigger("resize", !1, !0);
    return a
  };
  c.syncScroll = function() {
    this.view._scroll()
  };
  c.getCellByIdAndKey = function(a, b) {
    if(a == null || b == null) {
      return null
    }
    var e = this.dataMgr.getById(a);
    if(!e) {
      return null
    }
    var c = this.colDefMgr.getByKey(b);
    return!c ? null : i.create("Cell", {grid:this, datarow:e, colDef:c})
  };
  c.getCellByIdx = function(a, b) {
    if(a == null || b == null) {
      return null
    }
    var e = this.dataMgr.getByIdx(a);
    if(!e) {
      return null
    }
    var c = this.colDefMgr.get(b);
    return!c ? null : i.create("Cell", {grid:this, datarow:e, colDef:c})
  };
  c.busy = function() {
    if(this._busyShader && !this._busy) {
      var a = this._ctnr, b = a.offset(), e = a[0], a = e.clientWidth + 1, e = e.clientHeight + 1, c = this._busyShader, d = c[0].style;
      d.top = b.top + "px";
      d.left = b.left + "px";
      d.width = a + "px";
      d.height = e + "px";
      c.show()
    }
    this._busy = !0
  };
  c.idle = function() {
    this._busyShader && this._busy && this._busyShader.hide();
    this._busy = !1
  };
  c.error = function(a) {
    for(var b = i.error[a], e = 1, c = arguments.length;e < c;e++) {
      b = b.replace(RegExp("%" + (e - 1), "g"), arguments[e])
    }
    b = Error(b);
    b.code = a;
    this.printError(b.message);
    this.log("error occurred... code=" + a + ", msg=" + b.message || b.msg);
    this.event.trigger("onError", [b], !0);
    return b
  };
  c.printError = function(a) {
    this.log("error message... msg=" + a);
    if(this._options.showMessage) {
      var b = this.msg, e = b[0], c = e.style;
      e.innerHTML = a;
      c.width = this._ctnr[0].clientWidth + "px";
      c.background = "#ffebe8";
      c.color = "#333";
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
      var b = this.msg, e = b[0], c = e.style;
      e.innerHTML = a;
      c.width = this._ctnr[0].clientWidth + "px";
      c.background = "#dfdfdf";
      c.color = "#6f6f6f";
      b.show();
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function() {
        b.hide(1E3)
      }, 5E3)
    }
  };
  c.containsEvent = function(a) {
    return g.contains(this._ctnr[0], a.target)
  };
  c.getChart = function(a) {
    return this._charts[a]
  };
  c.log = function(a, b) {
    2 >= (b || 0) && d("Grid[" + this.mid + "]: " + a)
  };
  c.twstart = function(b) {
    this._tw = new a(b)
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
  c.chart = function(a, b, c, d, f, g) {
    this.log("creating chart... type=" + b + ", columns=[" + c.join(",") + "]", e);
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
    var l = this, p = this.colDefMgr, s = this.dataMgr, t = c.map(function(a) {
      if(a = p.getByKey(a)) {
        return a
      }
      throw Error("column key not found");
    }), u = s.exportToArray(c, f, g);
    google.setOnLoadCallback(function() {
      for(var e = new google.visualization.DataTable, i = 0, n = t.length, p, x;i < n;i++) {
        p = t[i];
        x = p.type;
        switch(x) {
          case "boolean":
            x = "boolean";
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
            x = "number";
            break;
          case "string":
          ;
          case "text":
            x = "string"
        }
        e.addColumn(x || u[0] && u[0][i] != null && typeof u[0][i] || i === 0 && "string" || "number", p.name)
      }
      e.addRows(u);
      var z = l._charts[a] = new google.visualization[m](document.getElementById(a));
      z.draw(e, d);
      l.event.bind("onAfterRefresh", function() {
        l.log("redrawing chart... type=" + b + ", columns=[" + c.join(",") + "]", 2);
        e.removeRows(0, e.getNumberOfRows());
        e.addRows(s.exportToArray(c, f, g));
        z.draw(e, d)
      });
      l.event.trigger("onChartLoaded", [z, e], !0)
    })
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "SelectionManager.js"...');
jx.grid.SelectionManager = {};
(function() {
  function f(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    this.grid.selMgr = this;
    this._options = i._extend({rowSelKey:this.grid.dataMgr.idKey, bgColorSelection:"#DCEBFE", bgColorLast:"#f1ca7f", bgColorRange:"#D9D9D9", classSelection:"jgrid-selection", classLast:"selection-last", classRange:"selection-range", multiSelectEnabled:!1, classRowSelected:"rowSelected", highlightRowEnabled:!0, bgColorRowSelected:"#d8dfea"}, a.options);
    this._consts = {_UP:1, _DOWN:2, _LEFT:3, _RIGHT:4, _PGDN:5, _PGUP:6, _HOME:7, _END:8, _NAVKEYS:{}};
    this._consts._NAVKEYS = g.which(["enter", "tab", "arrow", "pgdn", "pgup", "home", "end"]);
    this._rows = {length:0};
    this._cols = {length:0};
    this.__init()
  }
  var i = goog.getObjectByName("jx.grid"), g = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var d = goog.getObjectByName("jx.grid.Cell");
  goog.exportSymbol("jx.grid.SelectionManager", f);
  f.getInstance = function(a) {
    return new f(a)
  };
  var b = f.prototype;
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
  b._onGetCellClass = function(a, b, c, h) {
    var j = "", k = this._last, d = this._range, f = this._rows, g = this._options;
    k && k.getDatarow() === c && k.getColDef() === h && (j += g.classLast);
    g.multiSelectEnabled === !0 && (d && d.getDatarow() === c && d.getColDef() === h && (j += " " + g.classRange), f.hasOwnProperty(a) && f[a].hasOwnProperty(b) && (j += " " + g.classSelection));
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
    var b = this._last, c = a.which, h = this.grid.event;
    if(this._consts._NAVKEYS[c]) {
      if(!h.triggerInvalid("onBeforeNavigate", [a])) {
        var j;
        a.preventDefault();
        switch(c) {
          case g.keyMapKeydown.tab:
            j = a.shiftKey ? this._idxToCell(this._consts._LEFT, b) : this._idxToCell(this._consts._RIGHT, b);
            this.selectCell(j);
            break;
          case g.keyMapKeydown.enter:
            j = a.shiftKey ? this._idxToCell(this._consts._UP, b) : this._idxToCell(this._consts._DOWN, b);
            this.selectCell(j);
            break;
          case g.keyMapKeydown.up:
            this._options.multiSelectEnabled && a.shiftKey ? (j = this._idxToCell(this._consts._UP, this._range), this.selectRange(j)) : (j = this._idxToCell(this._consts._UP, b), this.selectCell(j));
            break;
          case g.keyMapKeydown.down:
            this._options.multiSelectEnabled && a.shiftKey ? (j = this._idxToCell(this._consts._DOWN, this._range), this.selectRange(j)) : (j = this._idxToCell(this._consts._DOWN, b), this.selectCell(j));
            break;
          case g.keyMapKeydown.left:
            this._options.multiSelectEnabled && a.shiftKey ? (j = this._idxToCell(this._consts._LEFT, this._range), this.selectRange(j)) : (j = this._idxToCell(this._consts._LEFT, b), this.selectCell(j));
            break;
          case g.keyMapKeydown.right:
            this._options.multiSelectEnabled && a.shiftKey ? (j = this._idxToCell(this._consts._RIGHT, this._range), this.selectRange(j)) : (j = this._idxToCell(this._consts._RIGHT, b), this.selectCell(j));
            break;
          case g.keyMapKeydown.pgup:
            this._options.multiSelectEnabled && a.shiftKey ? (j = this._idxToCell(this._consts._PGUP, this._range), this.selectRange(j)) : (j = this._idxToCell(this._consts._PGUP, b), this.selectCell(j));
            break;
          case g.keyMapKeydown.pgdn:
            this._options.multiSelectEnabled && a.shiftKey ? (j = this._idxToCell(this._consts._PGDN, this._range), this.selectRange(j)) : (j = this._idxToCell(this._consts._PGDN, b), this.selectCell(j));
            break;
          case g.keyMapKeydown.space:
            j = a.shiftKey ? this._idxToCell(this._consts._PGUP, b) : this._idxToCell(this._consts._PGDN, b);
            this.selectCell(j);
            break;
          case g.keyMapKeydown.home:
            this._options.multiSelectEnabled && a.shiftKey ? (j = this._idxToCell(this._consts._HOME, this._range), this.selectRange(j)) : (j = this._idxToCell(this._consts._HOME, b), this.selectCell(j));
            break;
          case g.keyMapKeydown.end:
            this._options.multiSelectEnabled && a.shiftKey ? (j = this._idxToCell(this._consts._END, this._range), this.selectRange(j)) : (j = this._idxToCell(this._consts._END, b), this.selectCell(j))
        }
        h.trigger("onAfterNavigate", [j], !0)
      }
    }else {
      if(this._cols.length === 1) {
        var k, d = this.grid.colDefMgr, f, i = this._cols;
        j = [a, null, b];
        for(f in i) {
          if(i.hasOwnProperty(f) && f !== "length") {
            k = d.get(f).key, k = "keydownColSel_" + k, j[1] = i[f], h.trigger(k + "_" + keycode, j, !0), h.trigger(k, j, !0)
          }
        }
      }
      if(this._rows.length === 1) {
        var n;
        f = this._rows;
        j = [a, null, b];
        for(n in f) {
          f.hasOwnProperty(n) && n !== "length" && (j[1] = f[n], h.trigger("keydownRowSel_" + keycode, j, !0), h.trigger("keydownRowSel", j, !0))
        }
      }
      j = [a, this._rows, this._cols];
      h.trigger("keydownSel_" + c, j, !0);
      h.trigger("keydownSel", j, !0)
    }
  };
  b.getCell = function() {
    return this._last || null
  };
  b._isSelected = function(a) {
    return a && this._last && this._last.equals(a)
  };
  d.prototype.isSelected = function() {
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
      var c = a.getRowIdx(), h = a.getColIdx();
      this._setRange(c, h, a, b);
      this._setLast(c, h, a);
      this._setSelMap(this._getCellMap(c, h, a))
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
    var b = a.getRowIdx(), c = a.getColIdx(), h = this._last.getRowIdx(), j = this._last.getColIdx(), d = h < b ? h : b, h = h < b ? b : h, f;
    this._setRange(b, c, a);
    a.getKey() === this._options.rowSelKey ? (f = 0, j = this.grid.colDefMgr.length() - 1) : (f = j < c ? j : c, j = j < c ? c : j);
    this._setSelMap(this._getRangeMap(d, f, h, j, b, c, a));
    return{minRow:d, minCol:f, maxRow:h, maxCol:j}
  };
  b._setLast = function(a, b, c) {
    var b = this._last, h;
    b && (h = b.getRowIdx(), a !== h && this._range && h !== this._range.getRowIdx() && this.grid.view.unlockRowById(b.getId()), b.get$().removeClass(this._options.classLast), this._options.highlightRowEnabled === !0 && $(b.getRowNode()).removeClass(this._options.classRowSelected), c || delete this._last);
    if(c) {
      (this._last = c).get$().addClass(this._options.classLast), this._options.highlightRowEnabled === !0 && $(c.getRowNode()).addClass(this._options.classRowSelected), this.grid.view.lockRowByIdx(a)
    }
  };
  b._setRange = function(a, b, c, h) {
    var j = this._range;
    if(j) {
      var d = j.getRowIdx();
      if(a === d && b === j.getColIdx()) {
        return
      }
      a !== d && this._last && d !== this._last.getRowIdx() && this.grid.view.unlockRowById(j.getId());
      j.get$().removeClass(this._options.classRange);
      c || delete this._range
    }
    if(c) {
      (this._range = c).get$().addClass(this._options.classRange), c = this.grid.view, c.lockRowByIdx(a), h || c.scrollToLazy(a, b)
    }
  };
  b._addSelMap = function(a) {
    var b = this._rows, c, h, j, k;
    for(j in a) {
      if(a.hasOwnProperty(j) && (h = a[j], b.hasOwnProperty(j))) {
        for(k in c = b[j], h) {
          h.hasOwnProperty(k) && c.hasOwnProperty(k) && (h[k] instanceof d && (c[k] = h[k]), delete h[k])
        }
      }
    }
    this.addOrRemoveCss({}, !0);
    this._addToMaps(a)
  };
  b._setSelMap = function(a) {
    var b = this._rows, c, h, j, k, f = {};
    for(j in b) {
      if(b.hasOwnProperty(j) && j !== "length") {
        if(c = b[j], a.hasOwnProperty(j)) {
          for(k in h = a[j], c) {
            c.hasOwnProperty(k) && k !== "length" && (h.hasOwnProperty(k) ? (h[k] instanceof d && (c[k] = h[k]), delete h[k]) : (f.hasOwnProperty(j) || (f[j] = {}), f[j][k] = !0))
          }
        }else {
          for(k in h = f[j] = {}, c) {
            c.hasOwnProperty(k) && k !== "length" && (h[k] = !0)
          }
        }
      }
    }
    this._removeFromMaps(f);
    this.addOrRemoveCss({}, !1);
    this._addSelMap(a)
  };
  b.addOrRemoveCss = function(a, b) {
    var c = [], h, j, k, f = this.grid.view;
    for(h in a) {
      if(a.hasOwnProperty(h)) {
        for(j in k = a[h], k) {
          k.hasOwnProperty(j) && (k[j] instanceof d ? c.push(k[j].getNode()) : c.push(f.getCell(h, j)))
        }
      }
    }
    c = c.filter(function(a) {
      return a
    });
    b ? $(c).addClass(this._options.classSelection) : $(c).removeClass(this._options.classSelection)
  };
  b._addToMaps = function(a) {
    var b, c, h, j = this._rows, d = this._cols, f;
    for(b in a) {
      if(a.hasOwnProperty(b)) {
        for(c in f = a[b], f) {
          f.hasOwnProperty(c) && (h = (h = f[c]) ? !0 : h, j.hasOwnProperty(b) ? j[b].length++ : (j[b] = {length:1}, j.length++), j[b][c] = h, d.hasOwnProperty(c) ? d[c].length++ : (d[c] = {length:1}, d.length++), d[c][b] = h)
        }
      }
    }
  };
  b._removeFromMaps = function(a) {
    var b, c, h = this._rows, j = this._cols, d;
    for(b in a) {
      if(a.hasOwnProperty(b)) {
        for(c in d = a[b], d) {
          d.hasOwnProperty(c) && (--h[b].length === 0 ? (delete h[b], h.length--) : delete h[b][c], --j[c].length === 0 ? (delete j[c], j.length--) : delete j[c][b])
        }
      }
    }
  };
  b._getCellMap = function(a, b, c) {
    var h = {};
    h[a] = {};
    h[a][b] = c;
    return h
  };
  b._getRowMap = function(a, b, c) {
    var h = {}, j = this.grid.colDefMgr.length(), d = 0;
    for(h[a] = {};d < j;d++) {
      h[a][d] = !0
    }
    h[a][b] = c;
    return h
  };
  b._getRangeMap = function(a, b, c, h, j, d, f) {
    for(var g = {}, i;a <= c;a++) {
      g[a] = {};
      for(i = b;i <= h;i++) {
        g[a][i] = !0
      }
    }
    g[j][d] = f;
    return g
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
  function f(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    this.grid.editMgr = this;
    this._options = g._extend({classEdit:"jgrid-edit", classCellEditable:"jgrid-editable", classCellNotEditable:"jgrid-notEditable", editableBgEnabled:!1, notEditableBgEnabled:!1, editableBg:"#FFF", notEditableBg:"#F6F6F6", deleteEnabled:!1, editIconEnabled:!0, urlEditIcon:this.grid._options.imageUrl + "editable-small.png", classEditIcon:"edit-icon", editIconWidth:12, editIconPadding:3, basicBackground:"#FFF9D7", classSuccess:"edit-success", successBackground:"#cdf7b6", classFailure:"edit-failure", 
    failureBackground:"#ff0000"}, a.options);
    this._beginEditKeys = d.which(["number", "alphabet", "del", "backspace"]);
    this.__init()
  }
  function i(a) {
    for(var b in a) {
      a.hasOwnProperty(b) && (this[b] = a[b])
    }
  }
  var g = goog.getObjectByName("jx.grid"), d = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var b = goog.getObjectByName("jx.grid.Cell");
  goog.exportSymbol("jx.grid.EditManager", f);
  goog.exportSymbol("jx.grid.Editor", i);
  f.getInstance = function(a) {
    return new f(a)
  };
  var a = f.prototype;
  a.__init = function() {
    this.bindEvents()
  };
  a.bindEvents = function() {
    var a = {onGetColCellClass:this._onGetColCellClass, keydownCanvas:this._keydownCanvas, onDestroy:this._destroy, dblclickCanvas:this._dblclickCanvas, onCreateDynamicCss:this.onCreateDynamicCss, "onBeforeNavigate onBeforeRefresh onBeforeSelect":this.commit, onBeforeFocusCanvas:this.notActive};
    d.isNull(this.grid.selMgr) ? a.onCreateCss = this._onBeforeCreateSelCss : a.onBeforeCreateSelCss = this._onBeforeCreateSelCss;
    if(this._options.deleteEnabled) {
      a["keydownSel_" + d.keyMapKeydown.del] = this._deleteContents
    }
    if(this._options.editIconEnabled) {
      for(var b = this.grid.colDefMgr.get(), h = b.length, j = 0;j < h;j++) {
        if(d.isNotNull(b[j].editor)) {
          a["onRenderHeader_" + b[j].key + "_prepend"] = this._onRenderHeader
        }
      }
    }
    this.grid.event.bind(a, this)
  };
  a._destroy = function() {
    this._deleteEditor();
    g._destroy(this, {name:"EditManager", path:"editMgr", map:"_beginEditKeys _options"})
  };
  a._onBeforeCreateSelCss = function() {
    var a = "#" + this.grid.mid + " .", b = this._options, h = [], j = this.grid.view._getRowInnerHeight();
    h.push(this.grid.view._getCellSelector() + "." + b.classEdit + "{background:" + b.basicBackground + "}");
    h.push(a + b.classEdit + " input{position:absolute;z-index:10;top:0;padding:0;border:0;margin:0;background:" + b.basicBackground + ";height:" + j + "px;line-height:" + j + "px}");
    b.editableBgEnabled && h.push(a + b.classCellEditable + "{background:" + b.editableBg + "}");
    b.notEditableBgEnabled && h.push(a + b.classCellNotEditable + "{background:" + b.notEditableBg + "}");
    b.editIconEnabled && h.push(a + b.classEditIcon + "{float:left;position:absolute;left:0;top:0;padding:0 " + b.editIconPadding + "px;width:" + b.editIconWidth + "px;height:" + j + "px;background:url(" + b.urlEditIcon + ") no-repeat center transparent}");
    h.push(a + b.classSuccess + "{background:" + b.successBackground + "}");
    h.push(a + b.classFailure + "{background:" + b.failureBackground + "}");
    return h.join("")
  };
  a.onCreateDynamicCss = function() {
    for(var a = this.grid.view._getCellSelector(), b = this.grid.view._getPadding(), h = this.grid.colDefMgr.get(), j = 0, k = "";j < h.length;j++) {
      d.isNotNull(h[j].editor) && (k += a + ".k_" + h[j].key + " .basic-editor{width:" + (h[j].width - 2 * b) + "px}")
    }
    return k
  };
  a._onRenderHeader = function(a) {
    a.push("<span class='" + this._options.classEditIcon + "'></span>")
  };
  a._onRenderCell = function(a, b, h, j, d) {
    this.grid.dataMgr.isReal(h) && d.push("<span class='" + this._options.classEditIcon + "' title='클릭하여 에디팅을 시작합니다' onclick='JGM.m.EditManager." + this.mid + '.beginEdit("' + h[this.grid.dataMgr.idKey] + '","' + j.key + "\")'></span>")
  };
  a.cancelMouseEvent = function(a) {
    return!d.hasTagAndClass(a.target, "DIV", this._options.classEditIcon)
  };
  a.beginEdit = function(a, b) {
    this.begin(g.create("Cell", {grid:this.grid, datarow:this.grid.dataMgr.getById(a), colDef:this.grid.colDefMgr.getByKey(b)}))
  };
  a._dblclickCanvas = function(a, b) {
    b.isEdited() || this.begin(b)
  };
  a._keydownCanvas = function(a) {
    this.active() ? a.which === d.keyMapKeydown.esc && this.cancel() : !a.ctrlKey && !a.altKey && d.isNotNull(this.grid.selMgr) && (a.which === d.keyMapKeydown.del && this._options.deleteEnabled ? this._deleteContent(this.grid.selMgr.getCell()) : this._beginEditKeys[a.which] ? this.begin(this.grid.selMgr.getCell()) : a.which === d.keyMapKeydown.f2 && (a.preventDefault(), this.begin(this.grid.selMgr.getCell())))
  };
  a.active = function() {
    return!!this.editor
  };
  a.notActive = function() {
    return d.isNull(this.editor)
  };
  a._isEdited = function(a) {
    return this.active() && this.editor.cell && this.editor.cell.equals(a)
  };
  a._onGetColCellClass = function(a) {
    return d.isNotNull(a.editor) ? this._options.classCellEditable : this._options.classCellNotEditable
  };
  b.prototype.isEdited = function() {
    return this.grid.editMgr._isEdited(this)
  };
  b.prototype.setValue = function(a) {
    var b = this.getDatarow(), h = this.getKey(), j;
    d.isNotNullAnd(b, h) && (j = this.grid.dataMgr.updateByKey(b, h, a, {noSort:!0, noFilter:!0, noRerender:!0}), j === !0 && this.grid.view.rerenderRow(b));
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
        var h = this.editor = a.getColDef().editor;
        h.cell = a;
        h.grid = this.grid;
        h.before = b.innerHTML;
        b.innerHTML = h.edit(a.getValue());
        a.get$().addClass(this._options.classEdit);
        h.focus()
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
    d.isNotNull(this.editor) && (delete this.editor.grid, delete this.editor.cell, delete this.editor.before, delete this.editor)
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
            var b = a.setValue(b), h, j = a.get$();
            b instanceof Error ? (this.cancel(), h = this._options.classFailure) : (this._deleteEditor(), this.grid.view.focus(), this.grid.printMessage("Successfully Updated."), h = this._options.classSuccess);
            j.addClass(h);
            setTimeout(function() {
              j.removeClass(h)
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
  a._deleteContents = function(a, b, h) {
    if(!this.active()) {
      var a = {}, b = {}, j = [], k, f, g, i, n, m, l;
      a:for(k in h) {
        if(h.hasOwnProperty(k) && k !== "length") {
          for(l in i = g = f = void 0, m = h[k], m) {
            if(m.hasOwnProperty(l) && !(l === "length" || b.hasOwnProperty(l))) {
              n = m[l].cell;
              if(d.isNull(f) && (f = n.getColDef(), g = f.defaultValue, i = f.key, d.isNull(f.editor))) {
                continue a
              }
              n = d.isNotNull(a[l]) ? a[l].datarow : n.getDatarow();
              this.grid.dataMgr.isReal(n) ? g !== n[i] && (d.isNull(a[l]) && (a[l] = {datarow:n, change:{}}, j.push(a[l])), a[l].change[i] = g) : b[l] = !0
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
          }catch(h) {
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
  i.numberKeys = d.which(["number", "del", "backspace"]);
  i.isNumberKey = function(a) {
    return this.numberKeys[a] ? !0 : !1
  };
  i.numberEdit = function(a) {
    a = a.getValue();
    return"<input type='text' class='basic-editor' onkeydown='if (!jx.grid.Editor.isNumberKey(event.which)) return false;' value='" + d.ifNull(a, "") + "'/>"
  };
  i.floatKeys = d.which(["number", ".", "del", "backspace"]);
  i.isFloatKey = function(a) {
    return this.floatKeys[a] ? !0 : !1
  };
  i.floatEdit = function(a) {
    a = a.getValue();
    return"<input type='text' class='basic-editor' onkeydown='if (!jx.grid.Editor.isFloatKey(event.which)) return false;' value='" + d.ifNull(a, "") + "'/>"
  };
  i.alphabetKeys = d.which(["alphabet", "del", "backspace", "space"]);
  i.isAlphabet = function(a) {
    return this.alphabetKeys[a] ? !0 : !1
  };
  i.alphabetEdit = function(a) {
    a = a.getValue();
    return"<input type='text' class='basic-editor' onkeydown='if (!jx.grid.Editor.isAlphabet(event.which)) return false;' value='" + d.ifNull(a, "") + "'/>"
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "TooltipManager.js"...');
jx.grid.TooltipManager = {};
(function() {
  function f(b) {
    this.mid = b.mid;
    this.grid = b.grid;
    this.grid.tooltip = this;
    this._ctnr = b.container;
    this._options = i._extend({classTooltip:"jgrid-tooltip", tooltipSyncEnabled:!0, offsetX:0, offsetY:18, background:"#F5F5F5", border:"1px solid #868686", padding:"2px 10px", font:"14px Arial,Helvetica,sans-serif", color:"#333"}, b.options);
    this.__init()
  }
  var i = goog.getObjectByName("jx.grid"), g = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.TooltipManager", f);
  f.getInstance = function(b) {
    return new f(b)
  };
  var d = f.prototype;
  d.__init = function() {
    this.grid.event.bind({onCreateCss:this._onCreateCss, onDestroy:this._destroy, mouseoutCanvas:this._mouseoutCanvas, mousemoveCanvas:this._mousemoveCanvas, mouseoverCanvas:this._mouseoverCanvas}, this)
  };
  d._destroy = function() {
    i._destroy(this, {name:"TooltipManager", path:"tooltip", $:"_tooltip", property:"_ctnr", map:"_options"})
  };
  d._onCreateCss = function() {
    var b = this._options, a = [];
    a.push("#" + this.grid.mid + " ." + b.classTooltip + "{position:absolute;z-index:10;background:" + b.background + ";border:" + b.border + ";padding:" + b.padding + ";color:" + b.color + ";font:" + b.font + "}");
    return a.join("")
  };
  d._mouseoutCanvas = function() {
    g.isNotNull(this._tooltip) && (this._ctnr[0].removeChild(this._tooltip[0]), delete this._tooltip)
  };
  d._mousemoveCanvas = function(b) {
    var a = this._options;
    a.tooltipSyncEnabled && g.isNotNull(this._tooltip) && this._tooltip.css({left:b.pageX + a.offsetX + "px", top:b.pageY + a.offsetY + "px"})
  };
  d._mouseoverCanvas = function(b, a) {
    if(a.getColDef().tooltipEnabled && g.isNull(this._tooltip)) {
      var e = this._options, c = document.createElement("div");
      c.innerHTML = "<div class='" + e.classTooltip + "' style='left:" + (b.pageX + e.offsetX) + "px;top:" + (b.pageY + e.offsetY) + "px'>" + a.getValue() + "</div>";
      this._tooltip = $(c.firstChild);
      this._ctnr[0].appendChild(this._tooltip[0])
    }
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "PrintManager.js"...');
jx.grid.PrintManager = {};
(function() {
  function f(b) {
    this.mid = b.mid;
    this._ctnr = Util$.safe$(b.container);
    this.grid = b.grid;
    this._options = i._extend({title:"Print Preview", font:"15px arial,sans-serif", headerFontColor:"#27413E", headerBackgroundColor:"#DCDEDE", tableBorderColor:"#6E7174", headerBorderColor:"#909192", cellBorderColor:"#D0D7E5", winOptions:{name:"Print Preview", width:800, height:600, directories:"no", location:"no", menubar:"no", status:"no", toolbar:"no"}}, b.options);
    this.__init()
  }
  var i = goog.getObjectByName("jx.grid"), g = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.PrintManager", f);
  f.getInstance = function(b) {
    return new f(b)
  };
  var d = f.prototype;
  d.__init = function() {
    var b = this;
    this._ctnr[0].innerHTML = "<button type='button'>Print</button>";
    this._ctnr.click(function() {
      b.print()
    })
  };
  d.print = function() {
    var b = this.getPrintHtml(this.grid.colDefMgr.get(), this.grid.dataMgr.datalist), a = g.open(this._options.winOptions);
    a.document.write(b);
    a.document.close()
  };
  d.getPrintHtml = function(b, a) {
    var e = this._options, c = e.tableBorderColor, h = e.headerBorderColor, j = e.cellBorderColor, d = [], f = b.length, g = f - 1, i = a.length, n = i - 1, m = 0, l;
    d.push("<html><head>");
    d.push("<title>" + e.title + "</title>");
    d.push("</head><body onload='window.print();'>");
    d.push("<table width='100%' cellspacing='0' cellpadding='0'><tbody><tr><td align='left'>");
    d.push("<table width='100%' cellspacing='0' cellpadding='2' style='border-collapse:collapse'>");
    d.push("<tbody style='font:" + e.font + ";'>");
    for(d.push("<tr style='background-color:" + e.headerBackgroundColor + ";color:" + e.headerFontColor + ";text-align:center'>");m < f;m++) {
      d.push("<td style='border:solid 1px " + h + ";'>" + b[m].name + "</td>")
    }
    d.push("</tr>");
    for(m = 0;m < i;m++) {
      e = a[m];
      d.push("<tr>");
      if(m === 0) {
        for(l = 0;l < f;l++) {
          l === 0 ? d.push("<td style='border:solid 1px " + j + ";border-top:solid 1px " + h + ";border-left:solid 1px " + c + "'>" + e[b[l].key] + "</td>") : l === g ? d.push("<td style='border:solid 1px " + j + ";border-top:solid 1px " + h + ";border-right:solid 1px " + c + "'>" + e[b[l].key] + "</td>") : d.push("<td style='border:solid 1px " + j + ";border-top:solid 1px " + h + "'>" + e[b[l].key] + "</td>")
        }
      }else {
        if(m < n) {
          for(l = 0;l < f;l++) {
            l === 0 ? d.push("<td style='border:solid 1px " + j + ";border-left:solid 1px " + c + "'>" + e[b[l].key] + "</td>") : l === g ? d.push("<td style='border:solid 1px " + j + ";border-right:solid 1px " + c + "'>" + e[b[l].key] + "</td>") : d.push("<td style='border:solid 1px " + j + "'>" + e[b[l].key] + "</td>")
          }
        }else {
          for(l = 0;l < f;l++) {
            l === 0 ? d.push("<td style='border:solid 1px " + j + ";border-bottom:solid 1px " + c + ";border-left:solid 1px " + c + "'>" + e[b[l].key] + "</td>") : l === g ? d.push("<td style='border:solid 1px " + j + ";border-bottom:solid 1px " + c + ";border-right:solid 1px " + c + "'>" + e[b[l].key] + "</td>") : d.push("<td style='border:solid 1px " + j + ";border-bottom:solid 1px " + c + "'>" + e[b[l].key] + "</td>")
          }
        }
      }
      d.push("</tr>")
    }
    d.push("</tbody></table></td></tr></tbody></table></body></html>");
    return d.join("")
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "ViewportManager.js"...');
jx.grid.ViewportManager = {};
(function() {
  function f(a) {
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
  var i = goog.getObjectByName("jx.grid"), g = goog.getObjectByName("jx.grid.Grid"), d = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var b = goog.getObjectByName("jx.grid.Cell"), a = {INPUT:!0, TEXTAREA:!0, LABEL:!0, FIELDSET:!0, LEGEND:!0, SELECT:!0, OPTGROUP:!0, OPTION:!0, BUTTON:!0}, e = {checkbox:!0, radio:!0};
  goog.exportSymbol("jx.grid.ViewportManager", f);
  f.getInstance = function(a) {
    return new f(a)
  };
  var c = f.prototype;
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
    var a = "#" + this.grid.mid + " .", b = this._options, c = a + this._cellClass, e = a + this._rowClass, d = b.borderThickness + "px " + b.border, f = this._colmgr.get(), g = f.length, i = 0, l = [];
    l.push(a + b.classView + "{height:" + this._calHeight() + "px;outline:0;position:relative;white-space:nowrap;overflow:auto;line-height:" + b.rowH + "px;cursor:default;-moz-user-select:none;-webkit-user-select:none;" + b.style + ";}");
    l.push(a + b.classView + ":focus{background:" + b.focusBackground + ";outline:" + b.focusOutline + "}");
    l.push(a + b.classCanvas + "{height:" + this._calCanvasHeight() + "px;" + b.canvasStyle + ";}");
    l.push(e + "{background:white;position:absolute;" + b.rowStyle + "}");
    l.push(c + "{height:" + b.rowH + "px;border-bottom:" + d + ";display:inline-block;white-space:nowrap;overflow:hidden;float:left;text-overflow:ellipsis;padding-left:" + b.padding + "px;border-right:" + d + ";" + b.cellStyle + "}");
    for(b.evenOddRows && l.push(e + ".odd{background:" + b.oddRowsBackground + "}");i < g;i++) {
      l.push(c + ".k_" + f[i].key + "{" + f[i].style + "}")
    }
    return l.join("")
  };
  c._onCreateDynamicCss = function() {
    var a = "#" + this.grid.mid + " .", b = a + this._cellClass, c = a + this._rowClass;
    a += this._options.classCanvas;
    var e = this._calCanvasWidth(), d = this._colmgr.get(), f = "", g = d.length, i = 0;
    for(f += a + "{width:" + e + "px}" + c + "{width:" + e + "px}";i < g;i++) {
      f += b + ".k_" + d[i].key + "{width:" + d[i].width + "px}"
    }
    return f
  };
  c.onUpdateDatarow = function(a) {
    this.isRendered(a) && this.rerenderRow(a)
  };
  c.onUpdateDatalist = function(a) {
    for(var b, c = a.length, e = 0;e < c;e++) {
      b = a[e], this.isRendered(b) && this.rerenderRow(b)
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
    for(var e = a.length, d = 0, f = this._lockedRows, g = this._renderedRows, i, l;d < e;d++) {
      i = b[d], l = a[d][c], f.hasOwnProperty(i) && (f[l] = f[i], delete f[i]), g.hasOwnProperty(i) && ((g[l] = g[i]).setAttribute("i", l), delete g[i])
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
        this.grid.log("set canvas width. " + b + "->" + a, g.V_RESIZE), this._canvasEl.style.width = a + "px", this._evtmgr.trigger("onResizeCanvasWidth", [a, b], !0)
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
    for(var a = a || 0, c = this._colmgr.get(), e = this._colWidthPlus(), b = b || c.length;a < b;a++) {
      this._colLefts[a + 1] = this._colLefts[a] + c[a].width + e
    }
    return this._colLefts
  };
  c._onReorderCols = function() {
    this._setColLefts();
    this._rerender()
  };
  c.setWidthByKey = function(a, b) {
    var c = this._colmgr.getByKey(a), b = d.bound(b, c.minW, c.maxW);
    if(b !== c.width) {
      this.grid.log("set column width. key=" + a + ", w=" + b, g.V_RESIZE);
      var e = this._evtmgr, f = this._colmgr, i = [a, b, c.width];
      c.width = b;
      this._setCanvasWidth(this._setColLefts(f.getIdxByKey(a))[f.length()]);
      this.grid._recreateDynamicCss();
      e.trigger("onResizeCol_" + a, i, !0);
      e.trigger("onResizeCol", i, !0)
    }
  };
  c._autoColWidth = function(a) {
    for(var b = this._canvasFind(".k_" + a), c = Number.MIN_VALUE, e = b.length, d = 0;d < e;d++) {
      if(c < b[d].scrollWidth) {
        c = b[d].scrollWidth
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
  c._getFirstSafeVisibleCol = function() {
    for(var a = this.getScrollLeft(), b = this._colLefts, c = 0, e = b.length;c < e;c++) {
      if(b[c] >= a) {
        return c
      }
    }
    return e - 2
  };
  c._getLastVisibleCol = function() {
    for(var a = this.getScrollLeft() + this._mask[0].clientWidth, b = this._colLefts, c = 0, e = b.length;c < e;c++) {
      if(b[c] >= a) {
        return c - 1
      }
    }
    return e - 2
  };
  c._getLastSafeVisibleCol = function() {
    for(var a = this.getScrollLeft() + this._mask[0].clientWidth, b = this._colLefts, c = 0, e = b.length;c < e;c++) {
      if(b[c] > a) {
        return c - 2
      }
    }
    return e - 2
  };
  c._getFirstColForSafe = function(a) {
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
    var b = this._canvasEl, c = this._renderedRows, e = this._lockedRows, d;
    if(a) {
      for(var f = a.start, a = a.end, g = this._datamgr;f <= a;f++) {
        if(!e.hasOwnProperty(d = g.getIdByIdx(f)) && c.hasOwnProperty(d)) {
          b.removeChild(c[d]), delete c[d]
        }
      }
    }else {
      if(this._lockExist()) {
        for(d in c) {
          c.hasOwnProperty(d) && e.hasOwnProperty(d) && (b.removeChild(c[d]), delete c[d])
        }
      }else {
        this._renderedRows = {}, b.innerHTML = ""
      }
    }
  };
  c._removeRowsExcept = function(a) {
    var b = this._canvasEl, c = this._renderedRows, e = this._lockedRows, d;
    if(a) {
      var f = a.start, a = a.end, g = this._datamgr, i;
      for(d in c) {
        if(c.hasOwnProperty(d) && !(e.hasOwnProperty(d) || f <= (i = g.getIdxById(d)) && i <= a)) {
          b.removeChild(c[d]), delete c[d]
        }
      }
    }else {
      if(this._lockExist()) {
        for(d in c) {
          c.hasOwnProperty(d) && e.hasOwnProperty(d) === !1 && (b.removeChild(c[d]), delete c[d])
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
    return d.isNotEmptyObj(this._lockedRows)
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
      var b = this._renderedRows, c = this._canvasEl, e = this._datamgr, f = e.idKey, g = e.getIdxById(a), e = e.getById(a), i = this._colmgr.get(), m = this._getColCellClasses(i).map(function(a) {
        return"<div class='" + a + " "
      }), l = this._getRendererSettings(i), p = l[0], l = l[1], s = this._getRowOuterHeight(), t = "<div class='" + this._rowClass + " odd' i='", u = "<div class='" + this._rowClass + "' i='", v = "' " + this._rowIdxAttr + "='", w = [];
      b.hasOwnProperty(a) && (c.removeChild(b[a]), this._evtmgr.trigger("onBeforeRenderRows", [[g]], !0), w.push((g % 2 ? u : t) + e[f] + v + g + "' style='top:" + s * g + "px'>"), this._renderRow(w, g, e, i, m, p, l), b[a] = d.appendHTML(c, w.join(""))[0], this._evtmgr.trigger("onAppendRows", [[g]], !0))
    }
  };
  c._getRendererSettings = function(a) {
    for(var a = a || this._colmgr.get(), b = 0, c = a.length, e, d = [], f = [], g;b < c;b++) {
      e = a[b], (g = e.renderer) ? (d.push(!!e.rendererInput), f.push(g)) : (d.push(!1), f.push(!1))
    }
    return[f, d]
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
      var e = this._datamgr, d = this._colmgr, f = e.getById(a), g = d.getByKey(b), e = e.getIdxById(a), d = d.getIdxByKey(b), i = g.renderer, l = i ? g.rendererInput : !1, p = [];
      i ? l ? this._renderCell(p, e, d, f, g, i, !0) : this._renderCell(p, e, d, f, g, i) : this._renderCell(p, e, d, f, g);
      c.innerHTML = p.join("")
    }
  };
  c.rerenderCellByIdx = function(a, b) {
    return this.rerenderCellByIdAndKey(this._datamgr.getIdByIdx(a), this._colmgr.getKeyByIdx(b))
  };
  c._appendRows = function(a) {
    var b = this._evtmgr, c = [a], e = [], f = a.start, a = a.end, g = this._datamgr, i = g.datalist, m = g.idKey, l = this._colmgr.get(), p = this._getColCellClasses(l).map(function(a) {
      return"<div class='" + a + " "
    }), g = this._renderedRows, s = this._getRowOuterHeight(), t = this._canvasEl, u = "<div class='" + this._rowClass + " odd' i='", v = "<div class='" + this._rowClass + "' i='", w = "' " + this._rowIdxAttr + "='", y = this._getRendererSettings(l), B = y[0], x = y[1], z, A, y = [];
    b.trigger("onBeforeRenderRows", c, !0);
    for(this.grid.twstart();f <= a;f++) {
      z = i[f], A = z[m], g.hasOwnProperty(A) || (e[e.length] = (f % 2 ? v : u) + A + w + f + "' style='top:" + s * f + "px'>", this._renderRow(e, f, z, l, p, B, x), this.grid.twlap(), y.push(A))
    }
    this.grid.twprint();
    this.grid.twstop();
    e = d.appendHTML(t, e.join(""));
    f = 0;
    for(a = y.length;f < a;f++) {
      g[y[f]] = e[f]
    }
    b.trigger("onAppendRows", c, !0)
  };
  c._removeAndRenderRows = function(a) {
    var a = a || this._getRenderRange(), b = this._evtmgr, c = [a], e = [], d = a.start, a = a.end, f = this._datamgr, g = f.datalist, f = f.idKey, i = this._colmgr.get(), l = this._getColCellClasses(i).map(function(a) {
      return"<div class='" + a + " "
    }), p = this._getRowOuterHeight(), s = this._canvasEl, t = "<div class='" + this._rowClass + " odd' i='", u = "<div class='" + this._rowClass + "' i='", v = "' " + this._rowIdxAttr + "='", w = this._getRendererSettings(i), y = w[0], w = w[1], B, x, z = [], A = {};
    b.trigger("onBeforeRenderRows", c, !0);
    for(this.grid.twstart();d <= a;d++) {
      B = g[d], x = B[f], e[e.length] = (d % 2 ? u : t) + x + v + d + "' style='top:" + p * d + "px'>", this._renderRow(e, d, B, i, l, y, w), this.grid.twlap(), z.push(x)
    }
    this.grid.twprint();
    this.grid.twstop();
    s.innerHTML = e.join("");
    d = 0;
    for(a = z.length;d < a;d++) {
      A[z[d]] = s.childNodes[d]
    }
    this._renderedRows = A;
    b.trigger("onAppendRows", c, !0)
  };
  c._renderColumn = function(a, c, e, d, f, g, i) {
    for(var m = [], l, p = 0, s = e.length, t, u, v, w = c.key, y, B = this.grid, x = this._evtmgr, z = "onRenderCell_" + w, A = [null, a, u, c], C = [null, a, null, c, null];p < s;p++) {
      t = e[p];
      u = d[t];
      v = u[w];
      l = [];
      C[0] = A[0] = t;
      C[2] = u;
      C[4] = l;
      y = x.trigger("onGetCellClass", A);
      l[l.length] = y ? f + y.join(" ") + "'>" : f + "'>";
      x.trigger(z + "_prepend", C, !0);
      if(typeof v != "string" || v.substring(0, 3) !== "J@H") {
        g ? l[l.length] = i ? g(new b({grid:B, row:t, col:a, datarow:u, colDef:c})) : g(v, t, a, u, c) : v != null && (l[l.length] = v)
      }
      x.trigger(z + "_append", C, !0);
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
    for(var a = a || this._colmgr.get(), b = [], c = 0, e = a.length;c < e;c++) {
      b.push(this._getColCellClass(a[c]))
    }
    return b
  };
  c._renderRow = function(a, b, c, e, d, f, g) {
    for(var i = 0, l = e.length, p, s = [b, null, c, null], t = this._evtmgr, u, v;i < l;i++) {
      p = e[i], s[1] = i, s[3] = p, u = t.trigger("onGetCellClass", s), a[a.length] = u ? d[i] + u.join(" ") + "'>" : d[i] + "'>", (v = f[i]) ? g[i] ? this._renderCell(a, b, i, c, p, v, !0) : this._renderCell(a, b, i, c, p, v) : this._renderCell(a, b, i, c, p), a[a.length] = "</div>"
    }
    a[a.length] = "</div>";
    return a
  };
  c._renderCell = function(a, c, e, d, f) {
    var g = f.key, i = d[g], m = [c, e, d, f, a], l = this._evtmgr, g = "onRenderCell_" + g;
    l.trigger(g + "_prepend", m, !0);
    if(typeof i != "string" || i.substring(0, 3) !== "J@H") {
      arguments.length > 5 ? a[a.length] = arguments[6] ? arguments[5](new b({grid:this.grid, row:c, col:e, datarow:d, colDef:f})) : arguments[5](i, c, e, d, f) : i != null && (a[a.length] = i)
    }
    l.trigger(g + "_append", m, !0)
  };
  b.prototype.rerender = function() {
    return this.grid.view.rerenderCellByIdAndKey(this.getId(), this.getKey())
  };
  b.prototype.scrollTo = function() {
    this.grid.view.scrollTo(this.getRowIdx(), this.getColIdx())
  };
  c._keydown = function(a) {
    d.contains(this._mask[0], document.activeElement, this._ctnr[0]) && (this.grid.log("UI event:keydown on Viewport. event=" + a.type + ", keycode=" + a.which, g.V_KEYDOWN), this._evtmgr.trigger("keydownCanvas_" + a.which, [a], !0), this._evtmgr.trigger("keydownCanvas", [a], !0))
  };
  c._keyup = function(a) {
    d.contains(this._mask[0], document.activeElement, this._ctnr[0]) && (this.grid.log("UI event:keyup on Viewport. event=" + a.type + ", keycode=" + a.which, g.V_KEYUP), this._evtmgr.trigger("keyupCanvas_" + a.which, [a], !0), this._evtmgr.trigger("keyupCanvas", [a], !0))
  };
  c._keypress = function(a) {
    d.contains(this._mask[0], document.activeElement, this._ctnr[0]) && (this.grid.log("UI event:keypress on Viewport. event=" + a.type + ", keycode=" + a.which, g.V_KEYPRESS), this._evtmgr.trigger("keypressCanvas_" + a.which, [a], !0), this._evtmgr.trigger("keypressCanvas", [a], !0))
  };
  c._mousein = function(a) {
    this._drag ? this._triggerMouseEvent(a, "draginCanvas,mouseinCanvas", g.V_MOUSEIN) : this._triggerMouseEvent(a, "mouseinCanvas", g.V_MOUSEIN)
  };
  c._mouseout = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragoutCanvas,mouseoutCanvas", g.V_MOUSEOUT) : this._triggerMouseEvent(a, "mouseoutCanvas", g.V_MOUSEOUT)
  };
  c._mouseenter = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragenterCanvas,mouseenterCanvas", g.V_MOUSEENTER) : this._triggerMouseEvent(a, "mouseenterCanvas", g.V_MOUSEENTER)
  };
  c._mouseleave = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragleaveCanvas,mouseleaveCanvas", g.V_MOUSELEAVE) : this._triggerMouseEvent(a, "mouseleaveCanvas", g.V_MOUSELEAVE)
  };
  c._mousemove = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragmoveCanvas,mousemoveCanvas", g.V_MOUSEMOVE) : this._triggerMouseEvent(a, "mousemoveCanvas", g.V_MOUSEMOVE)
  };
  c._mouseover = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragoverCanvas,mouseoverCanvas", g.V_MOUSEOVER) : this._triggerMouseEvent(a, "mouseoverCanvas", g.V_MOUSEOVER)
  };
  c._mousedown = function(a) {
    if(this._triggerMouseEvent(a, "mousedownCanvas", g.V_MOUSEDOWN)) {
      this._drag = !0
    }
  };
  c._mouseup = function(a) {
    this._drag = !1;
    this._triggerMouseEvent(a, "mouseupCanvas", g.V_MOUSEUP)
  };
  c._click = function(a) {
    this._triggerMouseEvent(a, "clickCanvas", g.V_CLICK) && this.focus(a)
  };
  c._dblclick = function(a) {
    this._triggerMouseEvent(a, "dblclickCanvas", g.V_DBLCLICK)
  };
  c._triggerMouseEvent = function(c, d, f) {
    var g = c.target;
    if(g) {
      var i = g.tagName, g = g.type && g.type.toLowerCase();
      if(e[g] || !a[i]) {
        if(i = this._getClosestCell(c.target)) {
          this.grid.log("UI event:" + d + " on Viewport. event=" + c.type, f);
          i = new b({grid:this.grid, node:i});
          f = i.getKey();
          c = [c, i];
          i = this._evtmgr;
          if(d.indexOf(",") > -1) {
            for(var d = d.split(","), g = 0, q = d.length, n;g < q;g++) {
              n = d[g], i.trigger(n + "_" + f, c, !0), i.trigger(n, c, !0)
            }
          }else {
            i.trigger(d + "_" + f, c, !0), i.trigger(d, c, !0)
          }
          return!0
        }
      }
    }
    return!1
  };
  c._scroll = function() {
    var a = this.getScrollTop(), b = a - this._lastScrollTop, c = this.getScrollLeft(), e = c - this._lastScrollLeft;
    if(b !== 0 || e !== 0) {
      this.grid.log("Viewport scrolled... h=" + e + ", v=" + b, g.V_SCROLL);
      var d = this._evtmgr, b = Math.abs(b / this._getRowOuterHeight());
      d.trigger("onScrollViewport", !1, !0);
      if(e) {
        this._lastScrollLeft = c, d.trigger("onScrollViewportH", [c], !0)
      }
      c = this.renderElapsed;
      c == null && (c = 50);
      c > 500 && (c = 500);
      if(b >= this._options.appendThreshold) {
        if(this.scrollHandlerId) {
          window.clearTimeout(this.scrollHandlerId), this.scrollHandlerId = null
        }
        var f = this;
        this.scrollHandlerId = window.setTimeout(function() {
          var b = (new Date).getTime();
          f._lastScrollTop = a;
          f._removeAndRenderRows();
          d.trigger("onScrollViewportV", !1, !0);
          f.renderElapsed = (new Date).getTime() - b
        }, c)
      }
    }
  };
  c.focus = function(a) {
    a && this._evtmgr.triggerInvalid("onBeforeFocusCanvas", [a])
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
    return d.toArray(this._renderedRows)
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
      var e = this.getRowById(a);
      if(e) {
        return e.childNodes[c]
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
      var e = this.getRenderedRowById(a);
      if(e) {
        return e.childNodes[c]
      }
    }
  };
  c._getClosestCell = function(a) {
    return d.closestWithTag(a, "DIV", this._cellClass, this._canvasEl)
  };
  c._getClosestRow = function(a) {
    return d.closestWithTag(a, "DIV", this._rowClass, this._canvasEl)
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
window.console && window.console.log && window.console.log('reading javascript source "ColumnManager.js"...');
jx.grid.ColumnManager = {};
(function() {
  function f(a) {
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
  function g(a) {
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
  function d(a) {
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
  function e(a) {
    switch(typeof a) {
      case "undefined":
        return Number.MAX_VALUE;
      case "boolean":
        return a ? 1 : 0;
      case "number":
        return a
    }
    return a == null ? Number.MAX_VALUE : g(a) ? 1 : 0
  }
  var c = goog.getObjectByName("jx.grid"), h = goog.getObjectByName("jx.util");
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
    var b = 0, c = a.length, e, d, h = a.some(function(a) {
      return a.parent != null
    });
    if(h) {
      var j = this._groups = [], f = this._groupsByName = {}
    }
    for(;b < c;b++) {
      e = a[b];
      d = e.key;
      try {
        if(this.hasKey(d, !0)) {
          throw Error("duplicate column key, key = " + d);
        }
      }catch(g) {
        throw this.empty(), g;
      }
      if(h) {
        d = e.parent = e.parent == null ? e.name || e.key : e.parent, f.hasOwnProperty(d) || j.push(f[d] = []), f[d].push(e)
      }
      this._extend(e)
    }
    if(h) {
      b = 0;
      c = j.length;
      for(a = [];b < c;b++) {
        f = j[b];
        e = 0;
        for(h = f.length;e < h;e++) {
          a.push(f[e])
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
      for(var a = this._colDefs, b = 0, c = a.length, e, d = this._groups = [], h = this._groupsByName = {}, j;b < c;b++) {
        e = a[b], j = e.parent = e.parent == null ? e.name || e.key : e.parent, h.hasOwnProperty(j) || d.push(h[j] = []), h[j].push(e)
      }
      b = 0;
      c = d.length;
      for(colDefs = [];b < c;b++) {
        h = d[b];
        a = 0;
        for(e = h.length;a < e;a++) {
          colDefs.push(h[a])
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
      for(var c = 0, e = b.length, d, h, j;c < e;c++) {
        d = b[c];
        h = 0;
        for(j = d.length;h < j;h++) {
          if(d[h].key == a) {
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
    var c = b.key, e = this._colDefs;
    if(this.hasKey(c, !0)) {
      throw Error("duplicate column key, key = " + c);
    }
    if(a < 0 || a > e.length) {
      throw Error("index out of bound, i = " + a);
    }
    e.addAt(a, this._extend(b));
    this.reorganizeGroups();
    this._filter();
    this.eventChangeVisible();
    return e.length
  };
  j._extend = function(a) {
    if(a && !a._extended) {
      a._extended = !0;
      var c = {}, e, h;
      $.extend(!0, c, this._options.colDef);
      $.extend(!0, c, a);
      $.extend(!0, a, c);
      h = a.type = i(a.type);
      c = a.key.toString();
      this._keyToDef[c] = a;
      if(e = a.sorter) {
        typeof e == "string" ? e = i(e) : h && (e = h);
        if(e = f.sorter(e, c)) {
          e.key = c, this._sorters[c] = e
        }
        a.sorter = e
      }
      if(e = a.parser) {
        if(h && typeof e != "function") {
          switch(h) {
            case "boolean":
              e = g;
              break;
            case "int":
              e = function(a) {
                return parseInt(a, 10)
              };
              break;
            case "float":
              e = parseFloat;
              break;
            case "string":
              e = d;
              break;
            case "date":
              e = b;
              break;
            default:
              e = null
          }
          a.parser = e
        }
        this._parsers[c] = e
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
      if(h = a.validator) {
        this._validators[c] = h
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
    for(var a = a || 0, b = this._filtered, c = b.length, e = this._keyToIdx = {};a < c;a++) {
      e[b[a].key] = a
    }
    return e
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
    return h.isNotNull(a) && this._keyToIdx.hasOwnProperty(a.key) ? this._keyToIdx[a.key] : -1
  };
  j.sortByKey = function(a) {
    var b = this._filtered, c = this._keyToIdx = {};
    b.length = 0;
    this.grid.event.trigger("onReorderCols", [this.mapKeys(a).forEach(function(a, e) {
      a.hidden || (b.push(a), c[a.key] = e)
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
  f.sorter = function(b, c, d) {
    d = {on:!!d, key:c};
    switch(b) {
      case "boolean":
        return d.comparator = function(a, b) {
          return e(a[c]) - e(b[c])
        }, d;
      case "string":
        return d.lexi = c, d;
      case "int":
        return d.comparator = function(b, e) {
          return a(b[c], "toInt") - a(e[c], "toInt")
        }, d;
      case "float":
        return d.comparator = function(b, e) {
          return a(b[c], "toFloat") - a(e[c], "toFloat")
        }, d;
      case "date":
        return d.comparator = function(b, e) {
          return a(b[c], "toInt") - a(e[c], "toInt")
        }, d
    }
    return null
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "MenuBar.js"...');
jx.grid.MenuBar = {};
(function() {
  function f(a) {
    d.call(this, a);
    this.grid.menubar = this;
    this.columnWidths = {}
  }
  var i = goog.getObjectByName("jx.grid"), g = goog.getObjectByName("jx.util"), d = goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.MenuBar", f);
  goog.inherits(f, d);
  f.getInstance = function(a) {
    return new f(a)
  };
  var b = f.prototype;
  b._defaultOptions = function() {
    var a = this.grid._options.imageUrl;
    return{background:"url(" + a + "menubar-bg.png) repeat-x scroll center", borderThickness:1, border:"solid #b6bac0", height:27, classMenuBar:"menubar", classIcon:"menu-icon", classColumnToggleIcon:"jgrid-column-toggle-icon", columnIconUrl:a + "data-creator-icon.png", columnIconWidth:15, columnIconHeight:15, iconBorderThickness:1, iconBorder:"solid transparent", iconBorderHover:"solid #d4d4d4", iconBorderActive:"solid #9a9a9a", iconMargin:2, iconBackground:"", iconBackgroundHover:"url(" + a + "menu-icon-hover.png) repeat-x scroll center", 
    iconBackgroundActive:"url(" + a + "menu-icon-active.png) repeat-x scroll center", iconHeight:21, iconWidth:21, iconBorderRadius:4, iconBorderFocus:"solid #5f5f5f"}
  };
  b._init = function(a) {
    var b = this._options;
    this._ctnr = a.container;
    this._menubar = $("<div class='" + b.classMenuBar + "'></div>").prependTo(this._ctnr);
    if(this.grid._options.columnHideEnabled) {
      for(var a = g.element, c = g.input, d = g.SAFE, j = this.getColumns(), f = 0, i = j.length, o = "", q = this.mid, n, m, l;f < i;f++) {
        n = j[f], m = n.key, l = q + "-toggle-column-" + m, o += a("label", {"for":l}, a("li", null, c("checkbox", {id:l, checked:!0, onclick:"JGM.m.MenuBar." + q + ".toggleColumn('" + m + "', this.checked, this)"}) + n.name, d), d)
      }
      var p = this.ul = $(a("ul", {"class":"jgrid-column-toggle-box"}, o, d)).appendTo(this.grid._ctnr);
      p.css({top:11, left:34});
      p.hide();
      this.columnIcon = this.addIcon(b.classColumnToggleIcon, "현재 보여지는 열을 숨기거나 숨겨진 열을 보이도록 합니다.", b.columnIconWidth, b.columnIconHeight, function() {
        p.toggle()
      })
    }
  };
  b.mousedown = function(a) {
    this.columnIcon && !g.contains(this.columnIcon[0], a.target) && !g.contains(this.ul[0], a.target) && (this.ul.hide(), this.columnIcon.hasClass("active") && this.columnIcon.toggleClass("active"))
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
  b.addIcon = function(a, b, c, d, j) {
    function f(a) {
      j && j();
      i.toggleClass("active");
      a.preventDefault()
    }
    var i = $("<div class='" + this._options.classIcon + "' tabIndex='0' title='" + b + "'><div class='" + a + "' style='margin-top:" + (this._options.iconHeight - d) / 2 + "px;margin-left:" + (this._options.iconWidth - c) / 2 + "px'></div></div>").appendTo(this._menubar), o = g.keyMapKeydown.enter, q = g.keyMapKeydown.space;
    i.click(f).keydown(function(a) {
      var b = a.which;
      (b === o || b === q) && f(a)
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
  function f(a) {
    this.mid = a.mid;
    this._ctnr = a.container;
    this.grid = a.grid;
    this.grid.footer = this;
    this._options = i._extend({classCell:"footer-cell", background:"#F1F5FB", border:"0px solid #CCD9EA", color:"#000", fontSize:"13px", fontWeight:"normal", cellHeight:25, cellPadding:40, countTemplate:"현재 <span name='shownCount'></span> 건 / 총 <span name='totalCount'></span> 건", titleColor:"#5A6779", titleFontSize:"12px", titleFontWeight:"normal", contentColor:"#1E395B", contentFontSize:"12px", contentFontWeight:"normal", classFooter:"jgrid-footer", classTitle:"footer-title", classContent:"footer-content", 
    style:"", cellStyle:"", titleStyle:"", contentStyle:""}, a.options);
    this._sumMap = {};
    this.__init()
  }
  var i = goog.getObjectByName("jx.grid"), g = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var d = g.element;
  goog.exportSymbol("jx.grid.Footer", f);
  f.getInstance = function(a) {
    return new f(a)
  };
  var b = f.prototype;
  b.__init = function() {
    this._hasSum = this.grid.colDefMgr.get().some(function(a) {
      return!!a.sumRenderer
    });
    var a = this._mask = $(d("div", {"class":"classSliderMask"})).appendTo(this._ctnr);
    if(this._hasSum) {
      this._slider = $(d("div", {"class":"classSlider"})).appendTo(a)
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
    this.grid.event.bind({onCreateCss:this._onCreateCss, onDestroy:this._destroy, onDataChange:[this._updateTotalCount, this._updateSums], onAfterRefresh:this._updateShownCount, onResizeCol:this._setWidthByKey, changeVisibleColumns:this._onReorderCols, onScrollViewportH:this._onScrollViewportH}, this)
  };
  b._onReorderCols = function() {
    for(var a = this.grid.colDefMgr.get(), b = 0, c = a.length;b < c;b++) {
      this._slider[0].appendChild(this.getSumCell(a[b].key))
    }
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
      for(var a = this.grid.colDefMgr.get(), b = 0, c = a.length, h = this.grid.view, j = [];b < c;b++) {
        j.push(d("div", {"class":"classSliderCell", id:this.mid + "_sum_" + a[b].key, style:{width:h._getColOuterWidth(b) - 1 + "px"}}))
      }
      this._slider[0].innerHTML = j.join("")
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
    var d, j;
    for(d in a) {
      if(a.hasOwnProperty(d)) {
        b = a[d];
        c.push(d + "{");
        for(j in b) {
          c.push(j + ":" + b[j] + ";")
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
      for(var a = this.grid.dataMgr.getReal(), b = this.grid.colDefMgr.get(), c = b.length, d, j, i, r, o, q = f._calSum, n = this._sumMap, m, l = 0;l < c;l++) {
        if(d = b[l], j = d.sumRenderer) {
          i = d.key;
          r = d.name;
          o = q(a, i);
          n[i] = !0;
          switch(typeof j) {
            case "function":
              m = j(r, o);
              break;
            case "string":
              d = j.toLowerCase();
              if(d === "krw" || j === "\\") {
                m = g.formatNumber(o)
              }else {
                if(d === "usd" || j === "$") {
                  m = g.formatNumber(o, 2, "$ ")
                }
              }
              break;
            default:
              m = d.renderer ? d.renderer(o) : o
          }
          this.setCellValue(i, m)
        }
      }
    }
  };
  b._updateSums = function() {
    if(this._hasSum) {
      var a = this.grid.dataMgr.getReal(), b, c = this._sumMap, d = this.grid.colDefMgr, j, i, r, o, q = f._calSum, n;
      for(b in c) {
        if(c.hasOwnProperty(b)) {
          j = d.getByKey(b);
          r = j.name;
          i = j.sumRenderer;
          o = q(a, b);
          switch(typeof i) {
            case "function":
              n = i(r, o);
              break;
            case "string":
              j = i.toLowerCase();
              if(j === "krw" || i === "\\") {
                n = g.formatNumber(o)
              }else {
                if(j === "usd" || i === "$") {
                  n = g.formatNumber(o, 2, "$ ")
                }
              }
              break;
            default:
              n = j.renderer ? j.renderer(o) : o
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
  f._calSum = function(a, b) {
    for(var c = 0, d, j = a.length, f = 0;f < j;f++) {
      if(typeof(d = a[f][b]) === "string") {
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
  function f(a) {
    a.grid.log("creating new ColumnHeader instance...", b.V_INIT);
    d.call(this, a)
  }
  var i = goog.getObjectByName("jx.grid"), g = goog.getObjectByName("jx.util"), d = goog.getObjectByName("jx.grid.BaseModule"), b = goog.getObjectByName("jx.grid.Grid"), a = g.element;
  goog.exportSymbol("jx.grid.ColumnHeader", f);
  goog.inherits(f, d);
  f.getInstance = function(a) {
    return new f(a)
  };
  var e = f.prototype;
  e._init = function(c) {
    var h;
    this.grid.log("initializing ColumnHeader instance...", b.V_INIT);
    this.grid.header = this;
    this._map = {};
    this._resizeMap = {};
    this._resizeKey = this._resizeInitX = this._resizeHandleInitX = this._resizeInitWidth = this._resizeInitColWidth = this._resizeGuide = this._resizeHandleOffset = null;
    var e = this._options, c = this._mask = $(a("div", {"class":e.classHeaderMask})).prependTo(this._ctnr = c.container);
    if(this.getColMgr().hasGroups()) {
      this._doubleHead = $(a("div", {"class":e.classHeader})).appendTo(c)
    }
    h = this._head = $(a("div", {"class":e.classHeader})).appendTo(c), e = h;
    f._disableSel(e)
  };
  e._bindEvents = function() {
    this.grid.log("binding ColumnHeader events...", b.V_INIT);
    var a, e = this.getColumns(), d = e.length, f = 0;
    for(a = {onRenderModules:this._onRenderModules, onAfterRenderModules:this._onAfterRenderModules, mousedown:this._mousedown, mouseup:this._mouseup, dragmove:this._dragmove, onScrollViewportH:this._onScrollViewportH, onScrollViewportV:this._onScrollViewportV, onChangeSorter:this._onChangeSorter, click:this._click, onResizeCol:this._setWidthByKey};f < d;f++) {
      if(e[f].sorter) {
        a["clickHeader_" + e[f].key] = this._sort
      }
    }
    this.bindGridEvent(a, this)
  };
  e._defaultOptions = function(a) {
    this.grid.log("extending ColumnHeader options...", b.V_INIT);
    a = a._options.imageUrl;
    return{reorderEnabled:!1, reorderSyncEnabled:!0, background:"url(" + a + "column-headers-bg.png) repeat-x scroll center", backgroundHover:"url(" + a + "column-headers-over-bg.png) repeat-x scroll center", backgroundPlaceholder:"#646464", sortBackground:a + "sort.png", sortRight:4, sortWidth:7, sortBackgroundAsc:a + "sort-asc.png", sortBackgroundDesc:a + "sort-desc.png", headerMoreButton:a + "header-more-button.gif", font:"15px Arial,Helvetica,sans-serif", height:21, borderThickness:1, border:"solid #909192", 
    classHeaderMask:"jgrid-header-mask", classHeader:"jgrid-header", classColHeader:"jgrid-colheader", classColHeaderActive:"jgrid-colheader-active", classColHeaderPlaceholder:"jgrid-colheader-placeholder", classInteractive:"interactive", classColHeaderSorted:"jgrid-colheader-sorted", classSort:"jgrid-sort", classSortAsc:"jgrid-sort-asc", classSortDesc:"jgrid-sort-desc", classResizeHandle:"jgrid-resize-handle", resizeHandleWidth:5, style:"", headerStyle:"", scrollerLeft:1E4, scrollerWidth:1E5, classResizeGuide:"resize-guide", 
    resizeGuideWidth:1, resizeBackground:"black;filter:alpha(opacity=40);opacity:0.4", syncResize:!1, resizeHandleBackground:"black;filter:alpha(opacity=10);opacity:0.10"}
  };
  e._beforeDispose = function() {
    this.grid.log("disposing ColumnHeader instance...", b.V_INIT);
    this._head.sortable && this._head.sortable("destroy");
    this._destroyResizeHandles();
    i._destroy(this, {name:"ColumnHeader", path:"header", $:"_resizeGuide _mask _head", property:"_ctnr _resizeMap", map:"_map _options"});
    this.dispose()
  };
  e._destroyResizeHandles = function() {
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
  e._beforeCreateCss = function(a) {
    this.grid.log("creating CSS for ColumnHeader...", b.V_INIT);
    var e = "#" + this.grid.mid + " .", d = this._options, f = d.borderThickness + "px " + d.border, g = this.getColumns(), i = g.length, q = 0, n = "." + d.classColHeader, m = d.scrollerLeft, l = d.height + "px", p = d.classColHeaderActive, s = {};
    s["." + d.classHeaderMask] = {position:"relative", overflow:"hidden", width:"100%", font:d.font, background:d.background, "border-bottom":f, _append:d.style};
    s["." + d.classHeader] = {position:"relative", overflow:"hidden", "white-space":"nowrap", cursor:"default", background:d.background, left:-m + "px", width:d.scrollerWidth + "px", "line-height":l};
    s[n] = {position:"relative", overflow:"hidden", "float":"left", "text-overflow":"ellipsis", "text-align":"center", "vertical-align":"middle", height:l, left:m - this.getView().getScrollLeft() + "px", "border-right":f, _append:d.headerStyle};
    s[n + "." + d.classInteractive + ":hover, " + e + p] = {cursor:"pointer", background:d.backgroundHover};
    s["." + p] = {"border-left":f};
    s[n + "." + d.classColHeaderPlaceholder] = {background:d.backgroundPlaceholder + "!important"};
    s[".jgrid-header-text"] = {"vertical-align":"middle"};
    s[".jgrid-header-more"] = {position:"absolute", cursor:"pointer", height:"100%", width:"14px", right:0, top:0};
    s[".jgrid-header-more:hover"] = {"border-left":"1px solid black", background:"url(" + d.headerMoreButton + ") no-repeat left center"};
    s["." + d.classSort] = {position:"absolute", height:"100%", width:d.sortWidth + "px", background:"url(" + d.sortBackground + ") no-repeat center transparent"};
    s["." + d.classSortAsc] = {background:"url(" + d.sortBackgroundAsc + ") no-repeat center transparent"};
    s["." + d.classSortDesc] = {background:"url(" + d.sortBackgroundDesc + ") no-repeat center transparent"};
    s["." + d.classResizeHandle] = {"z-index":10, background:d.resizeHandleBackground, cursor:"e-resize", position:"absolute", height:"100%", width:d.resizeHandleWidth + "px"};
    for(s["." + d.classResizeGuide] = {"z-index":10, position:"absolute", background:d.resizeBackground, width:d.resizeGuideWidth + "px"};q < i;q++) {
      g[q].headerStyle && (s[n + "#" + this.mid + "h" + g[q].key] = {_append:g[q].headerStyle})
    }
    this.toCssStyles(a.css, s)
  };
  e._widthPlus = function() {
    return this._options.borderThickness
  };
  e._onScrollViewportH = function(a) {
    this.grid.log("adjusting Colheader style.left according to viewport scrollLeft...", b.V_RESIZE);
    a = -this._options.scrollerLeft - a;
    this._head[0].style.left = a + "px";
    if(this._doubleHead) {
      this._doubleHead[0].style.left = a + "px"
    }
  };
  e._onRenderModules = function() {
    this.grid.log("rendering Colheader...", b.V_INIT);
    var c = this.getColumns(), e = c.length, d = 0, f, g = [], i = this.getColMgr();
    if(i.hasGroups()) {
      var q = this._options;
      q.reorderEnabled = !1;
      for(var i = i.getGroups(), n = 0, m = i.length, l, p, s, t = [], u = 0, v = 0, w = this.getView(), y;n < m;n++) {
        l = i[n];
        p = l[0].parent;
        u = s = 0;
        for(y = l.length;u < y;u++) {
          l[u].hidden || (s += w._getColOuterWidth(v++))
        }
        t.push(a("div", {"class":q.classColHeader, title:p, style:{width:s - this._widthPlus() + "px"}}, p))
      }
      this._doubleHead[0].innerHTML = t.join("")
    }
    for(;d < e;d++) {
      (f = c[d]).hidden || this._render(g, f, d)
    }
    this._head[0].innerHTML = g.join("");
    this.triggerGridEvent("onRenderHeadersComplete", !1, !0)
  };
  e._onAfterRenderModules = function() {
    var b = this._options;
    !this.getColMgr().hasGroups() && b.reorderEnabled && this._initReorder();
    this._initResizeHandles();
    this._resizeGuide = $(a("div", {"class":b.classResizeGuide})).appendTo(this.getView()._mask).hide();
    this._resizeGuide[0].style.top = "0px";
    this._resizeGuide[0].style.height = "0px"
  };
  e._render = function(b, e, d) {
    var f = this._options, i = e.key, o = e.noName ? "" : e.name || i, q = this._widthPlus(), n = "onRenderHeader_" + i, m = [b], l = f.classColHeader;
    if(f.reorderEnabled || e.sorter) {
      l += " " + f.classInteractive
    }
    d = {id:this.mid + "h" + i, "class":l, colKey:i, style:{width:this.getView()._getColOuterWidth(d) - q + "px"}};
    if(!e.noTitle) {
      d.title = e.title || o
    }
    b.push(a("div", d, null, g.LEAVE_OPENED));
    this.triggerGridEvent(n + "_prepend", m, !0);
    b.push(o);
    this.triggerGridEvent(n + "_append", m, !0);
    e.sorter && b.push(a("span", {"class":f.classSort}));
    b.push("</div>")
  };
  f._disableSel = function(a) {
    Util$.safe$(a).attr("unselectable", "on").css("MozUserSelect", "none").bind("selectstart.ui", function() {
      return!1
    })
  };
  e.get = function(a) {
    if(this._map.hasOwnProperty(a)) {
      return this._map[a]
    }
    var b = document.getElementById(this.mid + "h" + a);
    return!b ? $([]) : this._map[a] = $(b)
  };
  e._updateIndicator = function(a, b) {
    var e = this.get(a), d = this._options, f = e.find("." + d.classSort), g = d.classColHeaderSorted, i = d.classSortAsc, d = d.classSortDesc;
    b === 0 ? (e.removeClass(g), f.removeClass(i + " " + d)) : (e.addClass(g), b === 1 ? f.addClass(i).removeClass(d) : b === 2 && f.addClass(d).removeClass(i))
  };
  e._closest = function(a) {
    return Util$.safe$(a).closest("div." + this._options.classColHeader, this._head)
  };
  e._getDef = function(a) {
    return this.getColMgr().getByKey(a.attr("colKey"))
  };
  e._sort = function(a, e, d) {
    this.grid.log("Colheader clicked to sort. key=" + f, b.V_CLICK);
    var f = d.key, a = d.sorter;
    this.triggerGridEvent("onBeforeColSort_" + f, !1, !0);
    this.triggerGridEvent("onBeforeColSort", !1, !0);
    a.desc = a.desc === !1 ? !0 : !1;
    this.getDataMgr().refresh({sorter:a});
    this.getView()._scroll()
  };
  e._onChangeSorter = function(a, b) {
    a !== b && a && this._updateIndicator(a.key, 0);
    b && this._updateIndicator(b.key, b.desc ? 2 : 1)
  };
  e._initReorder = function() {
    this.grid.log("initializing Colheader reorder functionality...", b.V_INIT);
    var a = this, e = this._options, d = this.getColMgr(), f = this._head, g = this.mid.length + 1, i = function(a, b) {
      for(var c = $(f).sortable("toArray"), e = c.length, h, i = 0;i < e;i++) {
        h = c[i], c[i] = h === "" ? b.item.attr("id").substring(g) : h.substring(g)
      }
      d.sortByKey(c)
    };
    f.sortable({items:"." + e.classColHeader, axis:"x", forcePlaceholderSize:!0, placeholder:e.classColHeaderPlaceholder + " " + e.classColHeader, tolerance:"pointer", start:function(b, e) {
      e.item.addClass(a._options.classColHeaderActive)
    }, stop:function(b, e) {
      e.item.removeClass(a._options.classColHeaderActive);
      a._syncResizeHandles()
    }, update:i});
    e.reorderSyncEnabled && f.sortable("option", "change", i)
  };
  e._getDx = function(a, b) {
    var e = a.clientX - this._resizeInitX, d = b.minW, f = g.ifNull(b.maxW, Number.MAX_VALUE), i = this._resizeInitWidth;
    i + e < d && (e = d - i);
    i + e > f && (e = f - i);
    return e
  };
  e._click = function(a) {
    var e = this._closest(a.target);
    if(e.length !== 0) {
      var d = this._getDef(e), f = d.key, a = [a, e, d];
      this.grid.log("Colheader clicked. key=" + f, b.V_CLICK);
      this.getEventMgr().triggerInvalid("clickHeaderValid_" + f, a) || (this.triggerGridEvent("clickHeader_" + f, a, !0), this.triggerGridEvent("clickHeader", a, !0))
    }
  };
  e._mousedown = function(a) {
    var e = this._options;
    if(g.hasTagAndClass(a.target, "DIV", e.classResizeHandle)) {
      var d = this._resizeKey = a.target.getAttribute("key");
      this.grid.log("mousedown on ColumnHeader Resize Handle. key=" + d, b.V_MOUSEDOWN);
      this._resizeInitWidth = this.get(d)[0].clientWidth;
      this._resizeInitColWidth = this.getColMgr().getByKey(d).width;
      this._resizeInitX = a.clientX;
      this._resizeHandleInitX = this._resizeMap[d][0].offsetLeft;
      this._resizeGuide[0].style.left = Math.floor(this._resizeHandleInitX + (e.resizeHandleWidth - e.resizeGuideWidth) / 2 - e.scrollerLeft) + "px";
      this._resizeGuide[0].style.height = this.getView().getInnerHeight() + "px";
      this._resizeGuide.show()
    }else {
      if(e = this._closest(a.target), e.length) {
        var f = this._getDef(e), d = f.key, a = [a, e, f];
        this.grid.log("mousedown on ColumnHeader. key=" + d, b.V_MOUSEDOWN);
        this.triggerGridEvent("mousedownHeader", a, !0);
        this.triggerGridEvent("mousedownHeader_" + d, a, !0)
      }
    }
  };
  e._dragmove = function(a) {
    var e = this._resizeKey;
    if(e != null && (a = this._getDx(a, this.getColMgr().getByKey(e)), !(Math.abs(a) < 1))) {
      this.grid.log("drag on ColumnHeader Resize Handle. key=" + e, b.V_MOUSEMOVE);
      var d = this._options;
      this.get(e)[0].style.width = this._resizeInitWidth + a + "px";
      this._moveResizeHandles(this._resizeHandleInitX + a - this._resizeMap[e][0].offsetLeft, this.getColMgr().getIdxByKey(e));
      this._resizeGuide[0].style.left = Math.floor(this._resizeHandleInitX + a + (d.resizeHandleWidth - d.resizeGuideWidth) / 2 - d.scrollerLeft) + "px";
      d.syncResize && this.getView().setWidthByKey(e, this._resizeInitColWidth + a)
    }
  };
  e._mouseup = function(a) {
    var e = this._resizeKey;
    if(e != null) {
      this.grid.log("mouseup on ColumnHeader Resize Handle. key=" + e, b.V_MOUSEUP), this._resizeGuide.hide(), this._resizeGuide[0].style.height = "0px", a = this._getDx(a, this.getColMgr().getByKey(e)), Math.abs(a) >= 1 && this.getView().setWidthByKey(e, this._resizeInitColWidth + a), delete this._resizeKey, delete this._resizeInitX, delete this._resizeHandleInitX, delete this._resizeInitWidth, delete this._resizeInitColWidth
    }
  };
  e._setWidthByKey = function(a, e) {
    this.grid.log("setting ColumnHeader width=" + e + ". key=" + a, b.V_RESIZE);
    this.get(a)[0].style.width = e + this.getView()._colWidthPlus() - this._widthPlus() + "px";
    if(this._doubleHead) {
      for(var d = this.getColMgr(), f = this.getView()._colWidthPlus(), g = d.getGroupIndexByKey(a), d = d.getGroupByGroupIdx(g), i = 0, q = d.length, n = 0;i < q;i++) {
        d[i].hidden || (n += d[i].width + f)
      }
      this._doubleHead[0].childNodes[g].style.width = n - this._widthPlus() + "px"
    }
    this._syncResizeHandles(this.getColMgr().getIdxByKey(a));
    this.getView()._scroll()
  };
  e._syncResizeHandles = function(a) {
    for(var a = a || 0, b = this.getView()._getColLefts(), e = this.getColumns(), d = e.length, f = this._resizeMap, g;a < d;a++) {
      if(g = e[a].key, f.hasOwnProperty(g)) {
        f[g][0].style.left = b[a + 1] + this._resizeHandleOffset + "px"
      }
    }
  };
  e._moveResizeHandles = function(a, b) {
    for(var b = b || 0, e = this.getColumns(), d = e.length, f = this._resizeMap, g;b < d;b++) {
      if(g = e[b].key, f.hasOwnProperty(g)) {
        g = f[g][0], g.style.left = g.offsetLeft + a + "px"
      }
    }
  };
  e._onScrollViewportV = function() {
    this._resizeGuide[0].style.top = this.getView().getScrollTop() + "px"
  };
  e._initResizeHandles = function() {
    this.grid.log("initializing Colheader resize functionality...", b.V_INIT);
    for(var a = this.getColumns(), e = a.length, d = this.getView(), f = d.mid, d = d._getColLefts(), g = this._options, i = this._resizeMap, q, n = 0, m = this._resizeHandleOffset = Math.floor(g.scrollerLeft - g.resizeHandleWidth / 2), l = g.classResizeHandle, p = this._head;n < e;n++) {
      if(g = a[n], g.resizable) {
        q = g.key, i[q] = $("<div class='" + l + "' key='" + q + "' ondblclick='JGM.m.ViewportManager." + f + '._autoColWidth("' + q + "\")' style='left:" + (m + d[n + 1]) + "px' title='" + g.name + " 컬럼의 폭을 조절합니다.'>").appendTo(p)
      }
    }
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "CheckManager.js"...');
jx.grid.CheckManager = {};
(function() {
  function f(a) {
    function b() {
      var a = this._options, e = this._isRadio = a.isRadio = !!a.isRadio;
      this._hasMaster = a.master = !e && !!a.master;
      this._col = a.colDef;
      this._key = this._col.key;
      this._cssClass = a.classCheck;
      this._cssClassMaster = a.classMasterCheck;
      this._name = a.name || e && "radio" + this.mid || null
    }
    this.addEventListener("afteroption", b);
    d.call(this, a);
    this.removeEventListener("afteroption", b)
  }
  var i = goog.getObjectByName("jx.grid"), g = goog.getObjectByName("jx.util"), d = goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.CheckManager", f);
  goog.inherits(f, d);
  f.getInstance = function(a) {
    return new f(a)
  };
  var b = f.prototype;
  b._init = function() {
    this._map = {};
    this.disabledmap = {};
    this._count = 0;
    this._disabled = !1;
    var a, b = i._CONST;
    a = this.getColMgr();
    a.getByKey(this._col.key) || a.addAt(this._options.colIdx, this._col);
    if(!b._checkboxWidth) {
      a = g.calCheckSize(), b._checkboxWidth = a.checkboxW, b._checkboxHeight = a.checkboxH, b._radioWidth = a.radioW, b._radioHeight = a.radioH
    }
  };
  b._bindEvents = function() {
    var a = this._col.key, b;
    b = {onAfterSetDatalist:this.uncheckAll, onAfterRerender:this._updateMaster, onIdChange:this._onIdChange, onIdListChange:this._onIdListChange, onRemoveDatarow:this._onRemoveDatarow, onRemoveDatalist:this._onRemoveDatalist, onSearch:this._onSearch};
    b["onRenderCell_" + a + "_prepend"] = this._onRenderCell;
    b["keydownColSel_" + a + "_" + g.keyMapKeydown.space] = this._keydownColSel;
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
    return g.toArray(this._map)
  };
  b.getDisableds = function() {
    return g.toArray(this.disabledmap)
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
      f._check(this.getCheckboxes());
      for(var a = c.length, b = this.getIdKey(), d, g = 0;g < a;g++) {
        d = c[g], this._add(d, d[b]) && this.triggerGridEvent("onCheckChange", [d, !0], !0)
      }
    }else {
      f._uncheck(this.getCheckboxes());
      a = c.length;
      b = this.getIdKey();
      for(g = 0;g < a;g++) {
        d = c[g], this._remove(d, d[b]) && this.triggerGridEvent("onCheckChange", [d, !1], !0)
      }
    }
  };
  b.checkAll = function() {
    this._hasMaster && f._check(this._master);
    f._check(this.getCheckboxes());
    for(var a = this.getAllData(), b = a.length, c = this.getIdKey(), d = this._map, g = 0;g < b;g++) {
      d[a[g][c]] = a[g]
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
    this._add(a) && (f._check(this.getCheckbox(a)), this._updateMaster(), this.triggerGridEvent("onCheckChange", [a, !0], !0))
  };
  b.uncheck = function(a, b) {
    b || (a = this.getDataMgr().map(a));
    this._remove(a) && (f._uncheck(this.getCheckbox(a)), this._hasMaster && f._uncheck(this._master), this.triggerGridEvent("onCheckChange", [a, !1], !0))
  };
  b.disable = function(a, b) {
    var c = this.getDataMgr();
    b || (a = c.map(a));
    var c = c.getId(a), d = this.disabledmap;
    d.hasOwnProperty(c) || (d[c] = a, f.disableNode(this.getCheckbox(a)), this.triggerGridEvent("onDisableCheck", [a], !0))
  };
  b.enable = function(a, b) {
    var c = this.getDataMgr();
    b || (a = c.map(a));
    var c = c.getId(a), d = this.disabledmap;
    d.hasOwnProperty(c) && (delete d[c], f.enableNode(this.getCheckbox(a)), this.triggerGridEvent("onEnableCheck", [a], !0))
  };
  b._updateMaster = function() {
    this._hasMaster && f._setCheck(this._master, this.isCheckedAll())
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
    for(var c = [], d = [], f = 0, g = a.length, i = this.getIdKey(), o, q = this._map;f < g;f++) {
      q.hasOwnProperty((o = a[f])[i]) ? c.push(o) : d.push(o)
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
    for(var b = a.length, c = [], d = 0, f = this.getColMgr().getIdxByKey(this._key);d < b;d++) {
      c.push(a[d].childNodes[f].childNodes[0])
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
    var d = this._map, f = this.disabledmap;
    d.hasOwnProperty(b) && (delete d[b], d[c] = a);
    f.hasOwnProperty(b) && (delete f[b], f[c] = a)
  };
  b._onIdListChange = function(a, b, c) {
    for(var d = 0, f = a.length, g = this._map, i = this.disabledmap, o, q;d < f;d++) {
      o = a[d], q = b[d], g.hasOwnProperty(q) && (delete g[q], g[o[c]] = o), i.hasOwnProperty(q) && (delete i[q], i[o[c]] = o)
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
  b._onRenderCell = function(a, b, c, d, f) {
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
  b.disableMaster = function() {
    this._hasMaster && this._master.attr("disabled", "disabled")
  };
  b.enableMaster = function() {
    this._hasMaster && this._master.removeAttr("disabled")
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
window.console && window.console.log && window.console.log('reading javascript source "Collapser.js"...');
jx.grid.Collapser = {};
(function() {
  function f(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    this.grid.collapser = this;
    this._options = i._extend({key:void 0, colDef:{key:"collapser", width:120, name:" ", noSearch:!0}, colIdx:0, urlCollapsed:this.grid._options.imageUrl + "collapsed.png", urlCollapsedHover:this.grid._options.imageUrl + "collapsed-hover.png", urlExpanded:this.grid._options.imageUrl + "expanded.png", urlExpandedHover:this.grid._options.imageUrl + "expanded-hover.png", width:6, padding:5, classCollapser:"jgrid-collapser", classCollapsed:"collapsed", classExpanded:"expanded", classIndent:"indent", 
    classMasterCollapser:"master", indentSize:12, beginCollapsed:!1, CheckManager:void 0, Tree:void 0}, a.options);
    if(this._options.CheckManager) {
      this.checkMgr = i.create("CheckManager", {grid:this.grid, options:this._options.CheckManager}), delete this._options.CheckManager, g.isNull(this._options.key) && this._options.colIdx++
    }
    this._tree = new d({list:this.grid.dataMgr.all, options:this._options.Tree})
  }
  var i = goog.getObjectByName("jx.grid"), g = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var d = goog.getObjectByName("jx.struct.Tree");
  goog.exportSymbol("jx.grid.Collapser", f);
  f.getInstance = function(a) {
    return new f(a)
  };
  var b = f.prototype;
  b.__init = function() {
    g.isNull(this._options.key) && this.grid.colDefMgr.addAt(this._options.colIdx, this._options.colDef);
    this._makeTree();
    this._filterRefresh();
    this.key = g.isNull(this._options.key) ? this._options.colDef.key : this._options.key;
    this.bindEvents()
  };
  b.bindEvents = function() {
    var a = this.key, b;
    b = {onAfterFilter:this._onAfterFilter, onCreateCss:this._onCreateCss, onDestroy:this._destroy, onAfterSetDatalist:this._onAfterSetDatalist, onAddDatarow:this._onAddDatarow, onAddDatalist:this._onAddDatalist, onUpdateDatarow:this._onUpdateDatarow, onUpdateDatalist:this._onUpdateDatalist, onRemoveDatarow:this._onRemoveDatarow, onRemoveDatalist:this._onRemoveDatalist, onRenderHeadersComplete:this._getMaster};
    b["onRenderHeader_" + a + "_prepend"] = this._onRenderHeader;
    b["clickHeaderValid_" + a] = this._clickHeaderValid;
    b["onRenderCell_" + a + "_prepend"] = this._onRenderCell;
    b["dblclickCanvas_" + a] = this._dblclickCanvas;
    b["keydownColSel_" + a + "_" + g.keyMapKeydown.space] = this._keydownColSel;
    if(g.isNotNull(this.checkMgr)) {
      b.onCheckChange = this._onCheckChange
    }
    this.grid.event.bind(b, this)
  };
  b._destroy = function() {
    i._destroy(this, {name:"Collapser", path:"collapser", module:"_tree", $:"_master", property:"checkMgr", map:"_options"})
  };
  b._onCreateCss = function() {
    var a = "#" + this.grid.mid + " .", b = this._options, c = a + this.grid.view._options.classRow + " .", d = a + b.classCollapser, f = d + "." + b.classExpanded, i = d + "." + b.classCollapsed, r = this.grid.view._getRowInnerHeight(), o = [], q = this.grid.header;
    o.push(a + b.classIndent + "{height:" + r + "px;float:left;}");
    o.push(d + "{width:" + b.width + "px;float:left;padding:0 " + b.padding + "px}");
    o.push(c + b.classCollapser + "{height:" + r + "px}");
    o.push(f + "{background:url(" + b.urlExpanded + ") no-repeat center transparent}");
    o.push(f + ":hover{background:url(" + b.urlExpandedHover + ") no-repeat center transparent}");
    o.push(i + "{background:url(" + b.urlCollapsed + ") no-repeat center transparent}");
    o.push(i + ":hover{background:url(" + b.urlCollapsedHover + ") no-repeat center transparent}");
    g.isNotNull(q) && o.push(a + q._options.classColHeader + " ." + b.classCollapser + "{height:" + q._options.height + "px}");
    return o.join("")
  };
  b._onAfterSetDatalist = function() {
    this._tree.destroy();
    this._tree = new d({list:this.grid.dataMgr.all, options:this._options.Tree});
    this._makeTree()
  };
  b._onAddDatarow = function(a) {
    a = this._tree.createNode(a);
    a._collapsed = this._options.beginCollapsed;
    a._shown = g.isNotNull(a.parent) && (a.parent === a.tree.root || a.parent._shown && !a.parent._collapsed) ? !0 : !1;
    g.isNotNull(a.parent) && a.parent.children.length === 1 && this.grid.view.rerenderCellByIdAndKey(this.grid.dataMgr.getId(a.parent.data), this.key);
    a._collapsed === !0 || a._shown === !1 ? a.traverseChildren({fn:function() {
      this._shown = !1
    }}) : a.traverseChildren({fn:function(a) {
      g.isNotNull(this.parent) && (this.parent === this.tree.root || this.parent._shown && !this.parent._collapsed) ? this._shown = !0 : (a.propagate = !1, this.traverse({fn:function() {
        this._shown = !1
      }}))
    }});
    this.grid.event.trigger("onCollapserTreeChange", !1, !0)
  };
  b._onAddDatalist = function(a) {
    for(var b = 0, c = a.length, d = this._tree, f = d.root, i = this._options.beginCollapsed, r = this.key, o = this.grid.view, q = this.grid.dataMgr, n, m = [], l;b < c;b++) {
      n = d.createNode(a[b]), n._collapsed = i, g.isNotNull(n.parent) && n.parent.children.length === 1 && m.push(n.parent.data)
    }
    if(o !== void 0) {
      b = 0;
      for(c = m.length;b < c;b++) {
        o.rerenderCellByIdAndKey(q.getId(m[b]), r)
      }
    }
    f.traverseChildren({fn:function(a) {
      l = this.parent;
      g.isNotNull(l) && (l === f || l._shown && !l._collapsed) ? this._shown = !0 : (a.propagate = !1, this.traverse({fn:function() {
        this._shown = !1
      }}))
    }});
    this.grid.event.trigger("onCollapserTreeChange", !1, !0)
  };
  b._onUpdateDatarow = function(a, b, c) {
    var d = this._tree, f = d._options.nodeKey, i = d._options.parentKey, r;
    b.hasOwnProperty(f) && (r = d.getNodeByNodeId(c[f]), d.changeNodeId(r, c[f], b[f]), this.grid.event.trigger("onCollapserTreeChange", !1, !0));
    b.hasOwnProperty(i) && (g.isNull(r) && (r = d.getNode(a)), d.changeParentId(r, c[i], b[i]), this.grid.event.trigger("onCollapserTreeChange", !1, !0))
  };
  b._onUpdateDatalist = function(a, b, c) {
    for(var b = this._tree, d = b._options.nodeKey, f = b._options.parentKey, i, r, o, q = [], n = [], m = 0, l = a.length;m < l;m++) {
      i = c[m], r = a[m], o = void 0, i.hasOwnProperty(d) && (g.isNull(o) && (o = b.getNodeByNodeId(i[d])), q.push({node:o, before:i[d], newId:r[d]})), i.hasOwnProperty(f) && (g.isNull(o) && (o = b.getNode(r)), n.push({node:o, before:i[f], newId:r[f]}))
    }
    a = q.length;
    c = n.length;
    if(a + c !== 0) {
      if(a + c > 10) {
        b.reattach()
      }else {
        for(m = 0;m < a;m++) {
          d = q[m], b.changeNodeId(d.node, d.before, d.newId)
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
      var d = this.grid.dataMgr, f = a.length, i = d._idToIdx, r = d.idKey, o, q = 0, n = function(c) {
        g.isNotNull(this.parent) ? (o = this.parent.data, g.isNotNull(o) && !d.has(o) && (a.push(o), b.remove(o), i[o[r]] = -1)) : c.stop = !0
      };
      d._reidx();
      for(c.reattach();q < f;q++) {
        c.getNode(a[q]).traverse({up:!0, fn:n})
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
    if(g.isNotNull(a)) {
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
    if(g.hasTagAndClass(a.target, "DIV", this._options.classCollapser)) {
      return!1
    }
  };
  b._dblclickCanvas = function(a, b) {
    g.hasTagAndClass(a.target, "DIV", this._options.classCollapser) || this.toggleCollapse(this._tree.getNode(b.getDatarow()))
  };
  b._keydownColSel = function(a, b, c) {
    a.preventDefault();
    if(g.isNotNullAnd(b, c)) {
      var a = this._tree, c = a.getNode(c.getDatarow())._collapsed, d = this.grid.dataMgr.datalist, f, i;
      for(i in b) {
        b.hasOwnProperty(i) && i !== "length" && (f = a.getNode(d[i]), c ? this.expand(f) : this.collapse(f))
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
  b._onRenderCell = function(a, b, c, d, f) {
    a = this._tree.getNode(c);
    if(g.isNull(a)) {
      return null
    }
    c = this.grid.dataMgr.getId(c);
    b = this._options;
    f.push("<div class='" + b.classIndent + "' style='width:" + b.indentSize * a.getLevel() + "px;'></div><div ");
    a.isLeaf() ? f.push("class='" + b.classCollapser) : (f.push('onmousedown="JGM.m.Collapser.' + this.mid + ".toggleById('" + c + "');\" class='" + b.classCollapser), a._collapsed ? f.push(" " + b.classCollapsed) : f.push(" " + b.classExpanded));
    f.push("'></div>")
  };
  b.getLevel = function(a) {
    a = this._tree.getNode(a);
    return g.isNull(a) ? null : a.getLevel()
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
        for(var c = d.root.children, f = c.length, g = 0;g < f;g++) {
          if(c[g]._collapsed) {
            return
          }
        }
        this._setClass(this._master, d.root._collapsed = !1)
      }
    }
  };
  b._setClass = function(a, b) {
    if(!g.isNull(a)) {
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
    var c = this._tree.getNode(a), d = this.checkMgr, f = [], k;
    b ? (c.traverseChildren({fn:function(a) {
      d.isChecked(this.data) ? a.propagate = !1 : (d._add(this.data), g.isNotNull(k = d.getCheckbox(this.data)) && f.push(k))
    }}), c.traverseParent({up:!0, fn:function(a) {
      g.isNull(this.data) || d.isChecked(this.data) ? a.stop = !0 : (d._add(this.data), g.isNotNull(k = d.getCheckbox(this.data)) && f.push(k))
    }}), i.CheckManager._check($(f)), d._updateMaster()) : (c.traverseChildren({fn:function(a) {
      d.isChecked(this.data) ? (d._remove(this.data), g.isNotNull(k = d.getCheckbox(this.data)) && f.push(k)) : a.propagate = !1
    }}), c.traverseParent({up:!0, fn:function(a) {
      if(g.isNull(this.data) || !d.isChecked(this.data)) {
        a.stop = !0
      }else {
        for(var b = 0, c = this.children, e = c.length;b < e;b++) {
          if(d.isChecked(c[b].data)) {
            a.stop = !0;
            return
          }
        }
        d._remove(this.data);
        g.isNotNull(k = d.getCheckbox(this.data)) && f.push(k)
      }
    }}), i.CheckManager._uncheck($(f)))
  };
  b._filterRefresh = function() {
    this._filter(this.grid.dataMgr.datalist, this.grid.dataMgr.failed);
    this.grid.dataMgr._finish()
  };
  b._getCollapser = function(a) {
    if(g.isNull(a)) {
      return $([])
    }
    a = g.findFirstByTagAndClass(this.grid.view.getCell(this.grid.dataMgr.getIdx(a), this.grid.colDefMgr.getIdxByKey(this.key)), "DIV", this._options.classCollapser);
    return a === void 0 ? $([]) : $(a)
  };
  b._getMaster = function() {
    this._master = $(document.getElementById(this.mid + "h"))
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "ColumnGroup.js"...');
jx.grid.ColumnGroup = {};
(function() {
  function f(b) {
    this.mid = b.mid;
    this.grid = b.grid;
    this.grid.colGroup = this;
    this._options = i._extend({key:void 0, padColKeys:[], sumColKeys:[], prefix:"합계: ", Collapser:{indentSize:0}}, b.options);
    this._options.Collapser.key = this._options.key;
    this._parentMap = {};
    this.__init()
  }
  var i = goog.getObjectByName("jx.grid"), g = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.getObjectByName("jx.grid.Collapser");
  goog.exportSymbol("jx.grid.ColumnGroup", f);
  f.getInstance = function(b) {
    return new f(b)
  };
  var d = f.prototype;
  d.__init = function() {
    var b = this.grid, a = b.dataMgr, e = this._options;
    this.bindEvents();
    b = this.collapser = i.create("Collapser", {grid:b, options:e.Collapser});
    delete e.Collapser;
    this._processData(a.all);
    b.__init();
    a.refresh()
  };
  d.bindEvents = function() {
    var b;
    b = {onBeforeSetDatalist:this._removeAll, "onAfterSetDatalist onAddDatalist":this._processData, onAddDatarow:this._onAddDatarow, onUpdateDatarow:this._onUpdateDatarow, onUpdateDatalist:this._onUpdateDatalist, onRemoveDatarow:this._onRemoveDatarow, onRemoveDatalist:this._onRemoveDatalist, onDestroy:this._destroy};
    if(this._options.sumColKeys.length !== 0) {
      var a = this.mid, e = this.grid.dataMgr._consts._notReal, c = 0, d, f = this._options.sumColKeys, g = this._options.prefix, i = f.length;
      for(d = function(b, c, d, f, h) {
        d[e] === a && h.push(g)
      };c < i;c++) {
        b["onRenderCell_" + f[c] + "_prepend"] = d
      }
      b.onCollapserTreeChange = this._onCollapserTreeChange
    }
    this.grid.event.bind(b, this)
  };
  d._destroy = function() {
    i._destroy(this, {name:"ColumnGroup", path:"colGroup", property:"collapser", map:"_parentMap _options"})
  };
  d._processData = function(b) {
    for(var a = b.length, d = this._options.key, c = this._options.padColKeys, f = this.grid.dataMgr, i = f._consts._notReal, k = f.idKey, r = this.collapser, o = r._tree._options.nodeKey, q = r._tree._options.parentKey, n = [], m = 0;m < a;m++) {
      this._addData(b[m], d, k, i, o, q, c, n)
    }
    n.length !== 0 && (f.all.pushList(n), f.makeCompositeKeyList(n, !0), f.addListToIdMap(n), g.isNotNull(r) && r._onAddDatalist(n));
    return n
  };
  d._addData = function(b, a, d, c, f, g, i, r) {
    var o = b[a], q = this._parentMap;
    q.hasOwnProperty(o) || (a = this._makeParent(b, a, d, o, c, f, i), r.push(a), q[o] = a);
    b[f] = b[d];
    b[g] = this.mid + o
  };
  d._makeParent = function(b, a, d, c, f, g, i) {
    var r = {}, o = 0, q = i.length;
    r[f] = this.mid;
    r[g] = this.mid + c;
    r[a] = c;
    for(r[d] = (this.grid.colDefMgr.getByKey(a).name || a) + ": " + c;o < q;o++) {
      r[i[o]] = b[i[o]]
    }
    return r
  };
  d._isParent = function(b) {
    return b[this.grid.dataMgr._consts._notReal] === this.mid
  };
  d._removeAll = function() {
    this._parentMap = {}
  };
  d._onAddDatarow = function(b) {
    var a = [], d = this._options, c = this.grid.dataMgr, f = this.collapser, g = f._tree._options;
    this._addData(b, d.key, c.idKey, c._consts._notReal, g.nodeKey, g.parentKey, d.padColKeys, a);
    a.length !== 0 && (b = a[0], c.all.push(b), c.makeCompositeKey(b, !0), c.addToIdMap(b), f._onAddDatarow(b))
  };
  d._onUpdateDatarow = function(b, a, d) {
    if(a.hasOwnProperty(this._options.key)) {
      var c = this._options.key, a = a[c], d = d[c], f = this.mid, c = this.collapser, g = c._tree, i = g._options.parentKey, r = {}, o = {}, q = this._parentMap;
      q.hasOwnProperty(a) || this._onAddDatarow(b);
      r[i] = f + a;
      o[i] = f + d;
      c._onUpdateDatarow(b, r, o);
      b = g.getNode(q[d]);
      b.children.length === 0 && (this.grid.dataMgr.all.remove(b.data), delete q[d], c._onRemoveDatarow(b.data))
    }
  };
  d._onUpdateDatalist = function(b, a, d) {
    var c = this._options.key, f = this.mid, g = this.collapser, i = g._tree, r = i._options.parentKey, o, q = {};
    o = {};
    for(var n = [], m = [], l = [], p = 0, s = b.length;p < s;p++) {
      o = a[p], o.hasOwnProperty(c) && (q = {}, q[r] = f + o[c], n.push(q), o = {}, o[r] = f + d[p][c], m.push(o), l.push(b[p]))
    }
    if(l.length !== 0) {
      b = this._parentMap;
      a = [];
      this._processData(l);
      g._onUpdateDatalist(l, n, m);
      p = 0;
      for(s = m.length;p < s;p++) {
        n = m[p][r], b.hasOwnProperty(n) && (l = i.getNode(b[n]), l.children.length === 0 && (delete b[n], a.push(l.data)))
      }
      a.length !== 0 && (g._onRemoveDatalist(a), this.grid.dataMgr.all.removeList(a))
    }
  };
  d._onRemoveDatarow = function(b) {
    this._isParent(b) ? delete this._parentMap[b[this._options.key]] : (b = this.collapser._tree.getNode(b).parent, b.children.length === 1 && this.grid.dataMgr.remove(b.data))
  };
  d._onRemoveDatalist = function(b) {
    for(var a = 0, d = b.length;a < d;a++) {
      this._onRemoveDatarow(b[a])
    }
  };
  d._onCollapserTreeChange = function() {
    for(var b = {}, a = this._options.sumColKeys, d = a.length, c = 0, f = this.grid.dataMgr._consts._notReal, g = this.mid, i, r, o;c < d;c++) {
      b[a[c]] = 0
    }
    this.collapser._tree.root.traverseChildren({post:!0, fn:function() {
      i = this.data;
      c = 0;
      if(i[f] === g) {
        for(;c < d;c++) {
          r = a[c], i[r] = b[r], b[r] = 0
        }
      }else {
        if(!i.hasOwnProperty(f)) {
          for(;c < d;c++) {
            if(typeof(o = i[a[c]]) === "string") {
              o = o.toFloat()
            }
            b[a[c]] += isNaN(o) ? 0 : o
          }
        }
      }
    }})
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "DataCreator.js"...');
jx.grid.DataCreator = {};
(function() {
  function f(b) {
    this.mid = b.mid;
    this._ctnr = b.container;
    this.grid = b.grid;
    this.grid.creator = this;
    this._options = i._extend({background:"#dfdfdf", borderThickness:0, border:"solid #D6D6D6", inputBorder:"solid #A7A7A7", inputBorderThickness:1, inputHeight:18, inputMargin:8, nameMargin:2, font:"12px Arial,Helvetica,sans-serif", height:28, padding:3, classCreatorIcon:"creator-icon", creatorIconUrl:this.grid._options.imageUrl + "data-creator-icon.png", creatorIconWidth:13, creatorIconHeight:13, classCreator:"data-creator", classColName:"data-creator-name", inputBorderRadius:3}, b.options);
    this._inputMap = {};
    this.__init()
  }
  var i = goog.getObjectByName("jx.grid"), g = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.DataCreator", f);
  f.getInstance = function(b) {
    return new f(b)
  };
  var d = f.prototype;
  d.__init = function() {
    this._creator = $("<div class='" + this._options.classCreator + "'>").appendTo(this._ctnr);
    this.bindEvents()
  };
  d.bindEvents = function() {
    this.grid.event.bind({onRenderModules:this._onRenderModules, onCreateCss:this._onCreateCss, onDestroy:this._destroy}, this)
  };
  d._onCreateCss = function() {
    var b = "#" + this.grid.mid + " .", a = this._options, d = [];
    d.push(b + a.classCreator + "{" + i._CONST._cssUnselectable + "float:left;width:100%;padding-left:8px;background:" + a.background + ";border-top:" + (a.borderThickness + "px " + a.border) + ";font:" + a.font + "}");
    d.push(b + a.classCreator + " button{float:left;margin:" + a.padding + "px " + a.padding + "px 0 0;height:" + (a.height - 2 * a.padding) + "px}");
    d.push(b + a.classCreator + " input{float:left;padding:0;margin-top:" + (a.height - a.inputHeight - 2 * a.inputBorderThickness) / 2 + "px;height:" + a.inputHeight + "px;border:" + a.inputBorderThickness + "px " + a.inputBorder + ";border-radius:" + a.inputBorderRadius + "px;-moz-border-radius:" + a.inputBorderRadius + "px}");
    d.push(b + a.classCol + "{float:left;overflow:hidden;white-space:nowrap;line-height:" + a.height + "px;margin-right:" + a.inputMargin + "px}");
    d.push(b + a.classColName + "{float:left;margin-right:" + a.nameMargin + "px}");
    d.push(b + a.classCreatorIcon + "{background:url(" + a.creatorIconUrl + ") no-repeat center;width:" + a.creatorIconWidth + "px;height:" + a.creatorIconHeight + "px}");
    return d.join("")
  };
  d._onRenderModules = function() {
    for(var b = [], a = this.grid.colDefMgr.getAll(), d = a.length, c, f = this._options, i = f.classCol, k = f.classColName, r = this, o = this._creator, q = this._inputMap, n = 0, m = function(a) {
      a.which === g.keyMapKeydown.enter && r._addData()
    };n < d;n++) {
      c = a[n], c.inputOnCreate === !0 && b.push("<div key='" + c.key + "' class='" + i + "'><div class='" + k + "'>" + c.name + "</div><input type='text' value='" + g.ifNull(c.defaultValue, "") + "' style='width:" + c.width + "px'/></div>")
    }
    o[0].innerHTML = b.join("") + "<button type='button' onclick='JGM.m.DataCreator." + this.mid + "._addData()'>등록</button><button type='button' onclick='JGM.m.DataCreator." + this.mid + "._reset()'>초기화</button>";
    for(n = 0;n < d;n++) {
      c = a[n], c.inputOnCreate === !0 && (q[c.key] = o.find("div[key='" + c.key + "'] input").keyup(m))
    }
    this.grid.menubar != null && (this.grid.menubar.addIcon(f.classCreatorIcon, "데이터 로우를 추가합니다.", f.creatorIconWidth, f.creatorIconHeight, function() {
      o.toggle("fast")
    }), o.hide())
  };
  d._addData = function() {
    var b, a = this._inputMap, d = this.grid.colDefMgr, c = {}, f = d.getAll(), g = f.length, i = 0;
    for(b in a) {
      a.hasOwnProperty(b) && d.getByKey(b)
    }
    for(;i < g;i++) {
      d = f[i], b = d.key, a.hasOwnProperty(b) ? c[b] = a[b][0].value : d.defaultValue !== void 0 && (c[b] = d.defaultValue)
    }
    this.grid.event.trigger("onAfterDataCreate", [c], !0);
    this.grid.dataMgr.add(c, {isNew:!0})
  };
  d._reset = function() {
    var b, a = this.grid.colDefMgr, d, c = this._inputMap;
    for(b in c) {
      if(c.hasOwnProperty(b) && (d = a.getByKey(b), d.defaultValue !== void 0)) {
        c[b][0].value = d.defaultValue
      }
    }
  };
  d._destroy = function() {
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
  var i = goog.getObjectByName("jx.grid"), g = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.SearchManager", f);
  var d = f.prototype;
  d._onCreateCss = function() {
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
  d.__init = function() {
    this.grid.event.bind({onRenderModules:this._onRenderModules, onCreateCss:this._onCreateCss, onFilter:this._onFilter, onDestroy:this._destroy, onAfterRenderModules:this._onAfterRenderModules}, this)
  };
  d._onRenderModules = function() {
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
      a === g.keyMapKeydown.enter ? e._parse(f.value) : a === g.keyMapKeydown.esc && e._removeAllOptions()
    })
  };
  d._onAfterRenderModules = function() {
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
  d._destroy = function() {
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
  d._onFilter = function(a, b) {
    if(this._global.length === 0 && g.isEmptyObj(this._codeMap)) {
      this.grid.event.trigger("onSearch", [!1], !0)
    }else {
      this.grid.event.trigger("onSearch", [!0], !0);
      var c, d = this._tagMap, e, f, h = a.length, i, j = this._filterMap, k = this.constructor.CONST.and, l, m = this._global.length > 0, n, o;
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
      n = h - 1;
      a:for(;n >= 0;n--) {
        h = a[n];
        if(m) {
          i = p.slice();
          c = 0;
          for(;i.length !== 0 && c < r;c++) {
            if((q = h[s[c]]) != null) {
              g.isString(q) || (q = q.toString());
              for(o = i.length - 1;o >= 0;o--) {
                q.indexOf(i[o]) !== -1 && i.removeAt(o)
              }
            }
          }
          if(i.length !== 0) {
            a.removeAt(n);
            b.push(h);
            continue a
          }
        }
        for(e in d) {
          if(d.hasOwnProperty(e)) {
            if(o = d[e], c = j[e].andor, i = h[e], c === k) {
              for(f in o) {
                if(o.hasOwnProperty(f)) {
                  for(l in c = o[f], c) {
                    if(c.hasOwnProperty(l) && !c[l].fn(i)) {
                      a.removeAt(n);
                      b.push(h);
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
              b.push(h);
              continue a
            }
          }
        }
      }
    }
  };
  d._registerFilter = function(a, b, c, d, e) {
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
  d._parse = function(a) {
    for(var b, c, d, e, f = g.split(a), h = f.length, i = 2, j = !1, k = [], l = this._nameMap, m = this._filterMap, n = 0;n < h;n++) {
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
            a.charAt(0) === "@" ? (a = a.substring(1), l.hasOwnProperty(a) ? (g.isNotNullAnd(b, c, d, e) && this._registerOption(b, c, d, e, !0) && (j = !0), b = l[a], c = a, e = d = void 0, i = 0) : b == null ? k.push(a) : e += " " + a) : b == null ? k.push(a) : e += " " + a
        }
      }
    }
    g.isNotNullAnd(b, c, d, e) && this._registerOption(b, c, d, e, !0) && (j = !0);
    this._registerGlobal(k) && (j = !0);
    this._syncMasterInput();
    j && this.grid.dataMgr.refresh()
  };
  d._syncMasterInput = function() {
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
  d._registerGlobal = function(a) {
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
  d._removeGlobal = function(a) {
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
  d._registerOption = function(a, b, c, d, e) {
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
  d._removeOption = function(a, b, c) {
    var d = this._tagMap, e, f;
    if(d.hasOwnProperty(a) && (e = d[a]).hasOwnProperty(b) && (f = e[b]).hasOwnProperty(c)) {
      d = f[c], d.tag.remove(), delete d.tag, delete d.option, delete d.fn, delete f[c], delete this._codeMap[a + "@T" + b + "@B" + c], this._syncMasterInput(), this.grid.dataMgr.refresh()
    }
  };
  d._removeAllOptions = function() {
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
  d._createTag = function(a, b, c, d) {
    var e = this._options;
    return this._tagMap[a][b.tag][c] = {tag:$("<div class='" + e.classTag + "' title='" + b.comment(d, c) + "'><div class='" + e.classTagName + "'>@" + d + " " + b.tag + " " + c + "</div><div class='" + e.classRemoveTag + "' title='필터 제거' onclick=\"JGM.m.SearchManager." + this.mid + "._removeOption('" + a + "','" + b.tag + "','" + c + "')\"></div></div>").appendTo(this._tag), option:b, fn:b.fn(c)}
  };
  var b = f.CONST = {lt:0, lte:1, eq:2, neq:3, gt:4, gte:5, and:6, or:7, T:8, F:9}, d = b.lt, a = b.gt, e = b.eq, c = b.neq, h = b.and, j = b.or, k = b.T, b = b.F, r = f._comparator = {}, o = r[d] = function(a, b) {
    return a <= b
  }, q = r[a] = function(a, b) {
    return a >= b
  }, n = r[e] = function(a, b) {
    return a === b
  }, k = r[k] = function() {
    return!0
  }, m = f._disableMap = {}, l = m[d] = {}, p = m[a] = {}, s = m[e] = {}, m = m[c] = {};
  r[b] = function() {
    return!1
  };
  l[d] = {};
  l[d][h] = k;
  l[d][j] = k;
  l[a] = {};
  l[a][h] = o;
  l[a][j] = q;
  l[e] = {};
  l[e][h] = k;
  l[e][j] = q;
  l[c] = {};
  l[c][h] = o;
  l[c][j] = k;
  p[d] = {};
  p[d][h] = q;
  p[d][j] = o;
  p[a] = {};
  p[a][h] = k;
  p[a][j] = k;
  p[e] = {};
  p[e][h] = k;
  p[e][j] = o;
  p[c] = {};
  p[c][h] = q;
  p[c][j] = k;
  s[d] = {};
  s[d][h] = k;
  s[d][j] = o;
  s[a] = {};
  s[a][h] = k;
  s[a][j] = q;
  s[e] = {};
  s[e][h] = k;
  s[e][j] = n;
  s[c] = {};
  s[c][h] = k;
  s[c][j] = k;
  m[d] = {};
  m[d][h] = q;
  m[d][j] = k;
  m[a] = {};
  m[a][h] = o;
  m[a][j] = k;
  m[e] = {};
  m[e][h] = k;
  m[e][j] = k;
  m[c] = {};
  m[c][h] = n;
  m[c][j] = k;
  f._checkDisable = function(a, b, c, d, e) {
    try {
      return this._disableMap[a][b][c](d, e)
    }catch(f) {
      return!1
    }
  };
  f._numberFilter = [{name:"gt", tag:">", type:a, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 큰"
  }, fn:function(a) {
    g.isString(a) && (a = a.toFloat());
    return function(b) {
      return b > a
    }
  }}, {name:"gte", tag:">=", type:a, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 크거나 같은"
  }, fn:function(a) {
    g.isString(a) && (a = a.toFloat());
    return function(b) {
      return b >= a
    }
  }}, {name:"lt", tag:"<", type:d, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 작은"
  }, fn:function(a) {
    g.isString(a) && (a = a.toFloat());
    return function(b) {
      return b < a
    }
  }}, {name:"lte", tag:"<=", type:d, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 작거나 같은"
  }, fn:function(a) {
    g.isString(a) && (a = a.toFloat());
    return function(b) {
      return b <= a
    }
  }}, {name:"eq", tag:"=", type:e, comment:function(a, b) {
    return a + " 이(가) " + b + "인"
  }, fn:function(a) {
    g.isString(a) && (a = a.toFloat());
    return function(b) {
      return b === a
    }
  }}, {name:"neq", tag:"!=", type:c, comment:function(a, b) {
    return a + " 이(가) " + b + "이(가) 아닌"
  }, fn:function(a) {
    g.isString(a) && (a = a.toFloat());
    return function(b) {
      return b !== a
    }
  }}, {name:"contains", tag:"*=", comment:function(a, b) {
    return a + " 이(가) 숫자 " + b + "를 포함하는"
  }, fn:function(a) {
    a = g.isNumber(a) ? a.toString() : $.trim(a);
    return function(b) {
      return b.toString().indexOf(a) !== -1
    }
  }}, {name:"parser", fn:function(a) {
    return a.toFloat()
  }}, {name:"validator", fn:function(a) {
    return!isNaN(a)
  }}];
  f._stringFilter = [{name:"to", tag:"<=", type:d, comment:function(a, b) {
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
  }}, {name:"equals", tag:"=", type:e, comment:function(a, b) {
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
    var a = a.toLowerCase(), b = g.split(a), c = b.length;
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
    var a = a.toLowerCase(), b = g.split(a), c = b.length;
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
