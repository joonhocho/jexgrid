/**
 * JexGrid Build 53
 * Date: Tue Oct 18 18:08:10 KST 2011
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
      var f = Object(this), h = f.length >>> 0;
      if(h === 0) {
        return-1
      }
      var e = 0;
      arguments.length > 0 && (e = Number(arguments[1]), e !== e ? e = 0 : e !== 0 && e !== 1 / 0 && e !== -(1 / 0) && (e = (e > 0 || -1) * Math.floor(Math.abs(e))));
      if(e >= h) {
        return-1
      }
      for(e = e >= 0 ? e : Math.max(h - Math.abs(e), 0);e < h;e++) {
        if(e in f && f[e] === g) {
          return e
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
      var f = Object(this), h = f.length >>> 0;
      if(h === 0) {
        return-1
      }
      var e = h;
      arguments.length > 1 && (e = Number(arguments[1]), e !== e ? e = 0 : e !== 0 && e !== 1 / 0 && e !== -(1 / 0) && (e = (e > 0 || -1) * Math.floor(Math.abs(e))));
      for(h = e >= 0 ? Math.min(e, h - 1) : h - Math.abs(e);h >= 0;h--) {
        if(h in f && f[h] === g) {
          return h
        }
      }
      return-1
    }
  }
  if(!g.filter) {
    g.filter = function(g, f) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var h = Object(this), e = h.length >>> 0;
      if(typeof g !== "function") {
        throw new TypeError;
      }
      for(var d = [], b = 0;b < e;b++) {
        if(b in h) {
          var a = h[b];
          g.call(f, a, b, h) && d.push(a)
        }
      }
      return d
    }
  }
  if(!g.forEach) {
    g.forEach = function(g, f) {
      var h, e = Object(this), d = e.length >>> 0, b = 0;
      if(!g || !g.call) {
        throw new TypeError;
      }
      for(f && (h = f);b < d;) {
        var a = String(b);
        e.hasOwnProperty(a) && (a = e[a], g.call(h, a, b, e));
        b++
      }
    }
  }
  if(!g.every) {
    g.every = function(g, f) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var h = Object(this), e = h.length >>> 0;
      if(typeof g !== "function") {
        throw new TypeError;
      }
      for(var d = 0;d < e;d++) {
        if(d in h && !g.call(f, h[d], d, h)) {
          return!1
        }
      }
      return!0
    }
  }
  if(!g.map) {
    g.map = function(g, f) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var h = Object(this), e = h.length >>> 0;
      if(typeof g !== "function") {
        throw new TypeError;
      }
      for(var d = Array(e), b = 0;b < e;b++) {
        b in h && (d[b] = g.call(f, h[b], b, h))
      }
      return d
    }
  }
  if(!g.some) {
    g.some = function(g, f) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var h = Object(this), e = h.length >>> 0;
      if(typeof g !== "function") {
        throw new TypeError;
      }
      for(var d = 0;d < e;d++) {
        if(d in h && g.call(f, h[d], d, h)) {
          return!0
        }
      }
      return!1
    }
  }
  if(!g.reduce) {
    g.reduce = function(g) {
      var f, h = this.length, e;
      if(typeof g !== "function") {
        throw new TypeError("First argument is not callable");
      }
      if((h == 0 || h === null) && arguments.length <= 1) {
        throw new TypeError("Array length is 0 and no second argument");
      }
      arguments.length <= 1 ? (e = this[0], f = 1) : e = arguments[1];
      for(f = f || 0;f < h;++f) {
        f in this && (e = g.call(void 0, e, this[f], f, this))
      }
      return e
    }
  }
  if(!g.reduceRight) {
    g.reduceRight = function(g) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var f = Object(this), h = f.length >>> 0;
      if(typeof g !== "function") {
        throw new TypeError;
      }
      if(h === 0 && arguments.length === 1) {
        throw new TypeError;
      }
      h -= 1;
      var e;
      if(arguments.length >= 2) {
        e = arguments[1]
      }else {
        do {
          if(h in this) {
            e = this[h--];
            break
          }
          if(--h < 0) {
            throw new TypeError;
          }
        }while(1)
      }
      for(;h >= 0;) {
        h in f && (e = g.call(void 0, e, f[h], h, f)), h--
      }
      return e
    }
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "engine_extension.js"...');
var engine_extension = {};
(function() {
  var g = Number.prototype, i = String.prototype, f = Array.prototype;
  if(!g.toFixedFloat) {
    g.toFixedFloat = function(f) {
      return parseFloat(this.toFixed(f))
    }
  }
  if(!i.toInt) {
    i.toInt = function() {
      var f;
      f = parseInt(this, 10);
      if(f === f) {
        return f
      }
      if((f = this.replace(/[^\d\.\-]/g, "")).length === 0) {
        return NaN
      }
      for(var e, d = 0, b = 0, a = f.length, c = 0, j = !1;c < a;c++) {
        if(e = f.charAt(c), e === ".") {
          if(++d === 2) {
            j = !0;
            break
          }
        }else {
          if(e === "-" && ++b === 2) {
            j = !0;
            break
          }
        }
      }
      return j === !0 && (f = f.replace(/[\.\-]/g, "")).length === 0 ? NaN : /^-*0*\./.test(f) || (f = f.replace(/^-0+/, "-")).length === 0 || (f = f.replace(/^0+/, "")).length === 0 ? 0 : parseInt(f, 10)
    }
  }
  if(!i.toFloat) {
    i.toFloat = function() {
      var f;
      if((f = this.replace(/[^-\d\.]/g, "")).length === 0) {
        return NaN
      }
      for(var e = 0, d = f.length, b, a = 0, c = 0;e < d;e++) {
        if(b = f.charAt(e), b === ".") {
          if(a !== 0) {
            return NaN
          }else {
            a++
          }
        }else {
          if(b === "-") {
            if(c !== 0) {
              return NaN
            }else {
              c++
            }
          }
        }
      }
      return parseFloat(f)
    }
  }
  if(!f.remove) {
    f.remove = function(f) {
      if(this.length === 0) {
        return-1
      }
      f = this.indexOf(f);
      f !== -1 && this.splice(f, 1);
      return f
    }
  }
  if(!f.removeAll) {
    f.removeAll = function(f) {
      if(this.length === 0) {
        return this
      }
      for(var e = this.length;(e = this.lastIndexOf(f, e - 1)) !== -1;) {
        if(this.splice(e, 1), e === 0) {
          break
        }
      }
      return this
    }
  }
  if(!f.removeList) {
    f.removeList = function(f) {
      if(this.length === 0 || f.length === 0) {
        return this
      }
      for(var e = f.length, d = 0, b;d < e;d++) {
        (b = this.indexOf(f[d])) !== -1 && this.splice(b, 1)
      }
      return this
    }
  }
  if(!f.removeAt) {
    f.removeAt = function(f) {
      if(this.length !== 0 && (f < 0 && (f = this.length + f), f < 0 && (f = 0), this.hasOwnProperty(f) && f < this.length)) {
        return this.splice(f, 1)[0]
      }
    }
  }
  if(!f.addAt) {
    f.addAt = function(f, e) {
      this.splice(f, 0, e);
      return e
    }
  }
  if(!f.pushList) {
    f.pushList = function(g) {
      return g.length === 0 ? this.length : f.push.apply(this, g)
    }
  }
  if(!f.pushListAt) {
    f.pushListAt = function(g, e) {
      if(e.length === 0) {
        return this.length
      }
      var d = [g, 0];
      f.push.apply(d, e);
      f.splice.apply(this, d);
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
goog.exportSymbol_ = function(g, i, f) {
  g = g.split(".");
  f = f || goog.global;
  !(g[0] in f) && f.execScript && f.execScript("var " + g[0]);
  for(var h;g.length && (h = g.shift());) {
    !g.length && goog.isDef(i) ? f[h] = i : f = f[h] ? f[h] : f[h] = {}
  }
};
goog.getObjectByName = function(g, i) {
  for(var f = g.split("."), h = i || goog.global, e;e = f.shift();) {
    if(goog.isDefAndNotNull(h[e])) {
      h = h[e]
    }else {
      return null
    }
  }
  return h
};
goog.globalize = function(g, i) {
  var f = i || goog.global, h;
  for(h in g) {
    f[h] = g[h]
  }
};
goog.addDependency = function(g, i, f) {
  if(!COMPILED) {
    for(var h, g = g.replace(/\\/g, "/"), e = goog.dependencies_, d = 0;h = i[d];d++) {
      e.nameToPath[h] = g, g in e.pathToNames || (e.pathToNames[g] = {}), e.pathToNames[g][h] = !0
    }
    for(h = 0;i = f[h];h++) {
      g in e.requires || (e.requires[g] = {}), e.requires[g][i] = !0
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
          var f = g[i].src, h = f.lastIndexOf("?"), h = h == -1 ? f.length : h;
          if(f.substr(h - 7, 7) == "base.js") {
            goog.basePath = f.substr(0, h - 7);
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
    function g(d) {
      if(!(d in h.written)) {
        if(!(d in h.visited) && (h.visited[d] = !0, d in h.requires)) {
          for(var b in h.requires[d]) {
            if(!goog.isProvided_(b)) {
              if(b in h.nameToPath) {
                g(h.nameToPath[b])
              }else {
                throw Error("Undefined nameToPath for " + b);
              }
            }
          }
        }
        d in f || (f[d] = !0, i.push(d))
      }
    }
    var i = [], f = {}, h = goog.dependencies_, e;
    for(e in goog.included_) {
      h.written[e] || g(e)
    }
    for(e = 0;e < i.length;e++) {
      if(i[e]) {
        goog.importScript_(goog.basePath + i[e])
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
      var f = Object.prototype.toString.call(g);
      if(f == "[object Window]") {
        return"object"
      }
      if(f == "[object Array]" || typeof g.length == "number" && typeof g.splice != "undefined" && typeof g.propertyIsEnumerable != "undefined" && !g.propertyIsEnumerable("splice")) {
        return"array"
      }
      if(f == "[object Function]" || typeof g.call != "undefined" && typeof g.propertyIsEnumerable != "undefined" && !g.propertyIsEnumerable("call")) {
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
    for(var f in g) {
      if(f == i && Object.prototype.hasOwnProperty.call(g, i)) {
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
    var i = i == "array" ? [] : {}, f;
    for(f in g) {
      i[f] = goog.cloneObject(g[f])
    }
    return i
  }
  return g
};
goog.bindNative_ = function(g, i, f) {
  return g.call.apply(g.bind, arguments)
};
goog.bindJs_ = function(g, i, f) {
  if(!g) {
    throw Error();
  }
  if(arguments.length > 2) {
    var h = Array.prototype.slice.call(arguments, 2);
    return function() {
      var e = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(e, h);
      return g.apply(i, e)
    }
  }else {
    return function() {
      return g.apply(i, arguments)
    }
  }
};
goog.bind = function(g, i, f) {
  goog.bind = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? goog.bindNative_ : goog.bindJs_;
  return goog.bind.apply(null, arguments)
};
goog.partial = function(g, i) {
  var f = Array.prototype.slice.call(arguments, 1);
  return function() {
    var h = Array.prototype.slice.call(arguments);
    h.unshift.apply(h, f);
    return g.apply(this, h)
  }
};
goog.mixin = function(g, i) {
  for(var f in i) {
    g[f] = i[f]
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
        var i = goog.global.document, f = i.createElement("script");
        f.type = "text/javascript";
        f.defer = !1;
        f.appendChild(i.createTextNode(g));
        i.body.appendChild(f);
        i.body.removeChild(f)
      }
    }else {
      throw Error("goog.globalEval not available");
    }
  }
};
goog.evalWorksForGlobals_ = null;
goog.getCssName = function(g, i) {
  var f = function(e) {
    return goog.cssNameMapping_[e] || e
  }, h;
  h = goog.cssNameMapping_ ? goog.cssNameMappingStyle_ == "BY_WHOLE" ? f : function(e) {
    for(var e = e.split("-"), d = [], b = 0;b < e.length;b++) {
      d.push(f(e[b]))
    }
    return d.join("-")
  } : function(e) {
    return e
  };
  return i ? g + "-" + h(i) : h(g)
};
goog.setCssNameMapping = function(g, i) {
  goog.cssNameMapping_ = g;
  goog.cssNameMappingStyle_ = i
};
goog.getMsg = function(g, i) {
  var f = i || {}, h;
  for(h in f) {
    var e = ("" + f[h]).replace(/\$/g, "$$$$"), g = g.replace(RegExp("\\{\\$" + h + "\\}", "gi"), e)
  }
  return g
};
goog.exportSymbol = function(g, i, f) {
  goog.exportSymbol_(g, i, f)
};
goog.exportProperty = function(g, i, f) {
  g[i] = f
};
goog.inherits = function(g, i) {
  function f() {
  }
  f.prototype = i.prototype;
  g.superClass_ = i.prototype;
  g.prototype = new f;
  g.prototype.constructor = g
};
goog.base = function(g, i, f) {
  var h = arguments.callee.caller;
  if(h.superClass_) {
    return h.superClass_.constructor.apply(g, Array.prototype.slice.call(arguments, 1))
  }
  for(var e = Array.prototype.slice.call(arguments, 2), d = !1, b = g.constructor;b;b = b.superClass_ && b.superClass_.constructor) {
    if(b.prototype[i] === h) {
      d = !0
    }else {
      if(d) {
        return b.prototype[i].apply(g, e)
      }
    }
  }
  if(g[i] === h) {
    return g.constructor.prototype[i].apply(g, e)
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
  function g(c, a) {
    if(c) {
      var b = {}, d, j;
      if(a) {
        for(d in c) {
          if(c.hasOwnProperty(d) && (j = c[d]) !== void 0) {
            b[d] = j
          }
        }
      }else {
        for(d in c) {
          if(c.hasOwnProperty(d)) {
            switch(j = c[d], typeof j) {
              case "undefined":
                break;
              case "object":
                b[d] = g(j);
                break;
              default:
                b[d] = j
            }
          }
        }
      }
      return b
    }
    return null
  }
  function i(c, a, b) {
    if(a) {
      if(c) {
        var d, j, k;
        if(b) {
          for(d in a) {
            if(a.hasOwnProperty(d) && (k = a[d]) !== void 0) {
              c[d] = k
            }
          }
        }else {
          for(d in a) {
            if(a.hasOwnProperty(d)) {
              switch(k = a[d], typeof k) {
                case "undefined":
                  break;
                case "object":
                  k && c.hasOwnProperty(d) && (j = c[d]) && typeof j == "object" ? i(j, k) : c[d] = k;
                  break;
                default:
                  c[d] = k
              }
            }
          }
        }
        return c
      }
      return a
    }
    return c
  }
  function f(c, a, d, j) {
    if(m.hasOwnProperty(c)) {
      if(d != null) {
        throw Error("empty element, " + c + ", cannot have content!");
      }
      return r & j ? "<" + c + h(a, !0) + "/>" : "<" + b(c) + h(a, !1) + "/>"
    }
    r & j ? (a = "<" + c + h(a, !0) + ">", d != null && (a += d)) : (c = b(c), a = "<" + c + h(a, !1) + ">", d != null && (a += b(d)));
    return o & j ? a : a + "</" + c + ">"
  }
  function h(c, a) {
    if(c) {
      var d = "", j, m, f;
      if(c.style) {
        j = c.style, delete c.style
      }
      if(a) {
        for(m in c) {
          c.hasOwnProperty(m) && (k.hasOwnProperty(m) ? c[m] && (d += " " + m + '="' + m + '"') : (f = c[m], f != null && (d += " " + m + '="' + f + '"')))
        }
      }else {
        for(m in c) {
          c.hasOwnProperty(m) && (k.hasOwnProperty(m) ? c[m] && (d += " " + m + '="' + m + '"') : (f = c[m], f != null && (d += " " + b(m) + '="' + b(f) + '"')))
        }
      }
      if(j) {
        d += e(j, a), c.style = j
      }
      return d
    }
    return""
  }
  function e(c, a) {
    if(c) {
      if(typeof c == "string") {
        return' style="' + (a ? c : b(c)) + '"'
      }
      var d = ' style="', j, k;
      if(a) {
        for(j in c) {
          c.hasOwnProperty(j) && (k = c[j], k != null && (d += j + ":" + k + ";"))
        }
      }else {
        for(j in c) {
          c.hasOwnProperty(j) && (k = c[j], k != null && (d += b(j) + ":" + b(k) + ";"))
        }
      }
      return d + '"'
    }
    return""
  }
  function d(c) {
    switch(c) {
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
        return c
    }
  }
  function b(c) {
    return c != null ? (typeof c != "string" && (c = c.toString()), c.replace(/[&<>"'\/]/g, d)) : ""
  }
  var a = window.console, c = [], j;
  j = a && a.log ? function(c) {
    for(var b = 0, d = arguments.length;b < d;b++) {
      a.log(arguments[b])
    }
  } : function(a) {
    c.push.apply(c, arguments)
  };
  goog.exportSymbol("jx.util", Util);
  goog.exportSymbol("Util", Util);
  goog.exportSymbol("echo", j);
  Util.isNull = function(c) {
    return c == null
  };
  Util.isNotNull = function(c) {
    return c != null
  };
  Util.isNullAnd = function() {
    for(var c = 0, a = arguments.length;c < a;c++) {
      if(arguments[c] != null) {
        return!1
      }
    }
    return!0
  };
  Util.isNullOr = function() {
    for(var c = 0, a = arguments.length;c < a;c++) {
      if(arguments[c] == null) {
        return!0
      }
    }
    return!1
  };
  Util.isNotNullAnd = function() {
    for(var c = 0, a = arguments.length;c < a;c++) {
      if(arguments[c] == null) {
        return!1
      }
    }
    return!0
  };
  Util.isNotNullOr = function() {
    for(var c = 0, a = arguments.length;c < a;c++) {
      if(arguments[c] != null) {
        return!0
      }
    }
    return!1
  };
  Util.ifNull = function(c, a, b) {
    return c == null ? a : b === void 0 ? c : b
  };
  Util.ifTrue = function(c, a, b) {
    return c === !0 ? a : b === void 0 ? c : b
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
    var a = Array.isArray;
    return c && typeof c == "object" && (a && a(c) || typeof c.length == "number" && c.hasOwnProperty("length") && !c.propertyIsEnumerable("length"))
  };
  Util.split = function(c, a, b, d) {
    if(typeof c !== "string") {
      return[]
    }
    a = a === void 0 ? /\s+/ : a;
    b = b === void 0 ? function(c) {
      return!!c
    } : b;
    d = d === void 0 ? function(c) {
      return $.trim(c)
    } : d;
    c = c.split(a);
    d && (c = c.map(d));
    b && (c = c.filter(b));
    return c
  };
  Util.isEmpty = function(c) {
    if(!c) {
      return!0
    }
    if(typeof c != "object") {
      return!1
    }
    for(var a in c) {
      if(c.hasOwnProperty(a)) {
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
    for(var a in c) {
      if(c.hasOwnProperty(a)) {
        return!1
      }
    }
    return!0
  };
  Util.isNotEmptyObj = function(c) {
    if(c == null || typeof c != "object") {
      return!1
    }
    for(var a in c) {
      if(c.hasOwnProperty(a)) {
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
    for(var a = 0, b = c.length;a < b;a++) {
      if(c.hasOwnProperty(a)) {
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
    for(var a in c) {
      c.hasOwnProperty(a) && delete c[a]
    }
    return c
  };
  Util.deleteUndefined = function(c) {
    if(!c || typeof c != "object") {
      return c
    }
    var a;
    if(Util.isArray(c)) {
      for(a = c.length - 1;a > -1;a--) {
        c.hasOwnProperty(a) && c[a] === void 0 && c.splice(a, 1)
      }
      return c
    }
    for(a in c) {
      c.hasOwnProperty(a) && c[a] === void 0 && delete c[a]
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
      for(var a = [], b = 0, d = c.length;b < d;b++) {
        b in c && (a[b] = Util.deepClone(c[b]))
      }
      return a
    }
    a = {};
    for(b in c) {
      c.hasOwnProperty(b) && (a[b] = Util.deepClone(c[b]))
    }
    return a
  };
  Util.clone = function(c, a, b) {
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
      if(b === 1) {
        return Array.prototype.slice.call(c)
      }
      for(var d = [], j = c.length, k = 0, b = b !== void 0 ? b - 1 : void 0;k < j;k++) {
        k in c && (d[k] = Util.clone(c[k], a, b))
      }
      return d
    }
    d = {};
    j = Util.isEmptyObj(a);
    if(b === 1) {
      if(j) {
        for(k in c) {
          c.hasOwnProperty(k) && (d[k] = c[k])
        }
      }else {
        for(k in a) {
          a.hasOwnProperty(k) && c.hasOwnProperty(k) && (d[k] = c[k])
        }
      }
    }else {
      if(b = b !== void 0 ? b - 1 : void 0, j) {
        for(k in c) {
          c.hasOwnProperty(k) && (d[k] = Util.clone(c[k], void 0, b))
        }
      }else {
        for(k in a) {
          a.hasOwnProperty(k) && c.hasOwnProperty(k) && (d[k] = Util.clone(c[k], void 0, b))
        }
      }
    }
    return d
  };
  Util.toArray = function(c) {
    var a = [], b;
    for(b in c) {
      c.hasOwnProperty(b) && a.push(c[b])
    }
    return a
  };
  Util.toArrayWithKey = function(c) {
    var a = [], b;
    for(b in c) {
      c.hasOwnProperty(b) && a.push({key:b, val:c[b]})
    }
    return a
  };
  Util.random = function(c) {
    return Math.floor(c * Math.random())
  };
  Util.bound = function(c, a, b) {
    isNaN(b) || (c = Math.min(c, b));
    isNaN(a) || (c = Math.max(c, a));
    return c
  };
  Util.callFn = function() {
    return arguments.length <= 3 ? arguments[1].call(arguments[0], arguments[2]) : arguments[1].apply(arguments[0], Array.prototype.slice.call(arguments, 2))
  };
  Util.formatNumber = function(c, a, b, d, j) {
    var b = b === void 0 ? "&#8361; " : b, a = isNaN(a) ? 0 : a, d = d === void 0 ? "." : d, j = j === void 0 ? "," : j, k = c < 0 ? "-" : "", e = parseInt(c = Math.abs(+c || 0).toFixed(a), 10) + "", m = e.length, m = m > 3 ? m % 3 : 0;
    return b + k + (m ? e.substr(0, m) + j : "") + e.substr(m).replace(/(\d{3})(?=\d)/g, "$1" + j) + (a ? d + Math.abs(c - e).toFixed(a).slice(2) : "")
  };
  Util.getBodyScroll = function() {
    var c = 0, a = 0;
    if(typeof window.pageYOffset === "number") {
      a = window.pageYOffset, c = window.pageXOffset
    }else {
      if(document.body && (document.body.scrollLeft || document.body.scrollTop)) {
        a = document.body.scrollTop, c = document.body.scrollLeft
      }else {
        if(document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
          a = document.documentElement.scrollTop, c = document.documentElement.scrollLeft
        }
      }
    }
    return[c, a]
  };
  Util.hasClass = function(c, a) {
    if(c && a) {
      var b = c.className;
      if(b === a) {
        return!0
      }
      if(b && b.length >= a.length) {
        for(var b = c.classList || Util.split(b), d = 0, j = b.length;d < j;d++) {
          if(b[d] === a) {
            return!0
          }
        }
      }
    }
    return!1
  };
  Util.hasTagAndClass = function(c, a, b) {
    if(c && a && b && c.tagName === a) {
      a = c.className;
      if(a === b) {
        return!0
      }
      if(a && a.length >= b.length) {
        for(var c = c.classList || Util.split(a), a = 0, d = c.length;a < d;a++) {
          if(c[a] === b) {
            return!0
          }
        }
      }
    }
    return!1
  };
  Util.closest = function(c, a, b) {
    if(b) {
      for(var d = c, j = !1;d;) {
        if(d === b) {
          j = !0;
          break
        }
        d = d.parentNode
      }
      if(!j) {
        return null
      }
    }
    if(Util.hasClass(c, a)) {
      return c
    }
    for(c = c.parentNode;c && c !== b;c = c.parentNode) {
      if(Util.hasClass(c, a)) {
        return c
      }
    }
    return null
  };
  Util.closestWithTag = function(c, a, b, d) {
    if(d) {
      for(var j = c, k = !1;j;) {
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
    if(Util.hasTagAndClass(c, a, b)) {
      return c
    }
    for(c = c.parentNode;c && c !== d;c = c.parentNode) {
      if(Util.hasTagAndClass(c, a, b)) {
        return c
      }
    }
    return null
  };
  Util.findFirstByClass = function(c, a) {
    if(c) {
      if(Util.hasClass(c, a)) {
        return c
      }
      for(var b = 0, d = c.childNodes, j = d.length, k, e;b < j;b++) {
        if((k = d[b]) && (e = Util.findFirstByClass(k, a)) !== void 0) {
          return e
        }
      }
    }
    return null
  };
  Util.findFirstByTagAndClass = function(c, a, b) {
    if(c) {
      if(Util.hasTagAndClass(c, a, b)) {
        return c
      }
      for(var d = 0, c = c.childNodes, j = c.length, k;d < j;d++) {
        if(Util.isNotNull(c[d]) && (k = Util.findFirstByTagAndClass(c[d], a, b)) !== void 0) {
          return k
        }
      }
    }
    return null
  };
  Util.findByClass = function(c, a, b) {
    b = b || [];
    if(c) {
      Util.hasClass(c, a) && b.push(c);
      for(var d = 0, c = c.childNodes, j = c.length;d < j;d++) {
        Util.isNotNull(c[d]) && Util.findByClass(c[d], a, b)
      }
    }
    return b
  };
  Util.findByTagAndClass = function(c, a, b, d) {
    d = d || [];
    if(c) {
      Util.hasTagAndClass(c, a, b) && d.push(c);
      for(var j = 0, c = c.childNodes, k = c.length;j < k;j++) {
        Util.isNotNull(c[j]) && Util.findByTagAndClass(c[j], a, b, d)
      }
    }
    return d
  };
  Util.getHead = function() {
    return document.head ? document.head : document.getElementsByTagName("head")[0]
  };
  Util.appendTag = function(c, a) {
    return c.appendChild(document.createElement(a))
  };
  Util.appendHTML = function(c, a) {
    var b = document.createElement("div"), d, j = 0, k = [];
    b.innerHTML = a;
    for(d = b.childNodes.length;j < d;j++) {
      k.push(c.appendChild(b.firstChild))
    }
    return k
  };
  Util.createStyle = function(c) {
    c == null && (c = "");
    var a = document.createElement("style");
    a.type = "text/css";
    a.rel = "stylesheet";
    a.styleSheet ? a.styleSheet.cssText = c : a.appendChild(document.createTextNode(c));
    Util.getHead().appendChild(a);
    return a
  };
  Util.removeStyle = function(c) {
    c != null && c.parentNode != null && Util.getHead().removeChild(c)
  };
  Util.setStyle = function(c, a) {
    return c == null ? "" : c.styleSheet ? c.styleSheet.cssText = a : c.childNodes[0].nodeValue = a
  };
  Util.appendStyle = function(c, a) {
    return c == null ? "" : c.styleSheet ? c.styleSheet.cssText += a : c.childNodes[0].nodeValue += a
  };
  Util.getStyle = function(c) {
    return c == null ? "" : c.styleSheet ? c.styleSheet.cssText : c.childNodes[0].nodeValue
  };
  Util.appendScript = function(c) {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.text ? a.text = c : a.innerHTML = c;
    Util.getHead().appendChild(a);
    return a
  };
  Util.appendScriptFile = function(c) {
    document.write('<script type="text/javascript" src="' + c + '"><\/script>')
  };
  Util.outerHTML = function(c) {
    if(c.outerHTML === void 0) {
      var a = document.createElement("div");
      a.appendChild(c.cloneNode(!0));
      return a.innerHTML
    }
    return c.outerHTML
  };
  Util.index = function(c) {
    for(var a = 0;(c = c.previousSibling) != null;) {
      ++a
    }
    return a
  };
  Util.contains = function(c, a, b) {
    for(;a != null;) {
      if(a === c) {
        return!0
      }
      if(a === b) {
        break
      }
      a = a.parentNode
    }
    return!1
  };
  Util.areEqualArrays = function(c, a) {
    if(c == null || a == null) {
      return!1
    }
    if(c === a) {
      return!0
    }
    if(c.length !== a.length) {
      return!1
    }
    for(var b = 0, d = c.length;b < d;b++) {
      if(c.hasOwnProperty(b) && !a.hasOwnProperty(b) || a.hasOwnProperty(b) && !c.hasOwnProperty(b) || c[b] !== a[b]) {
        return!1
      }
    }
    return!0
  };
  Util.areEqualObjects = function(c, a) {
    if(c == null || a == null) {
      return!1
    }
    if(c === a) {
      return!0
    }
    if(typeof c !== "object" || typeof a !== "object") {
      return!1
    }
    for(var b in c) {
      if(c.hasOwnProperty(b) && (!a.hasOwnProperty(b) || c[b] !== a[b])) {
        return!1
      }
    }
    for(b in a) {
      if(a.hasOwnProperty(b) && (!c.hasOwnProperty(b) || c[b] !== a[b])) {
        return!1
      }
    }
    return!0
  };
  Util.areEqualComplex = function(c, a, b) {
    if(c == null || a == null) {
      return!1
    }
    if(c === a) {
      return!0
    }
    var d = b.length, j = b[0];
    if(d === 1) {
      return j === "array" ? Util.areEqualArrays(c, a) : Util.areEqualObjects(c, a)
    }
    if(d > 1) {
      b = b.slice(1);
      d = 0;
      if(j === "array") {
        if(c.length !== a.length) {
          return!1
        }
        for(j = c.length;d < j;d++) {
          if(!a.hasOwnProperty(d) || !Util.areEqualComplex(c[d], a[d], b)) {
            return!1
          }
        }
      }else {
        for(d in c) {
          if(c.hasOwnProperty(d) && (!a.hasOwnProperty(d) || !Util.areEqualComplex(c[d], a[d], b))) {
            return!1
          }
        }
        for(d in a) {
          if(a.hasOwnProperty(d) && (!c.hasOwnProperty(d) || !Util.areEqualComplex(c[d], a[d], b))) {
            return!1
          }
        }
      }
      return!0
    }
  };
  Util.typeCheck = function(c, a, b, d, j) {
    if(b && a === void 0 || d && a === null) {
      return!0
    }
    switch(typeof c) {
      case "string":
        if(typeof a === c) {
          return!0
        }
        break;
      case "function":
        if(a instanceof c) {
          return!0
        }
    }
    if(j) {
      return!1
    }
    throw new TypeError("object is not a " + c + ", but is a " + typeof a);
  };
  Util.sprint = function(c, a, b, d) {
    Util.typeCheck("string", c);
    Util.typeCheck("object", a);
    Util.typeCheck("string", b, !0);
    Util.typeCheck("string", d, !0);
    var j;
    b === void 0 && (b = "%");
    d === void 0 && (d = "%");
    for(j in a) {
      a.hasOwnProperty(j) && (c = c.replace(RegExp(b + j + d, "gm"), a[j]))
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
  Util.strReplace = function(c, a) {
    var b, d = [];
    for(b in a) {
      a.hasOwnProperty(b) && d.push(Util.escapeRegExp(b))
    }
    return c.replace(RegExp("(" + d.join("|") + ")", "gm"), function(c) {
      return a[c]
    })
  };
  Util.calCheckSize = function() {
    var c = {}, a = document.createElement("div");
    document.body.appendChild(a);
    a.innerHTML = "<input type='checkbox' style='margin:0;padding:0;overflow:hidden'/>";
    c.checkboxW = a.childNodes[0].offsetWidth;
    c.checkboxH = a.childNodes[0].offsetHeight;
    a.innerHTML = "<input type='radio' style='margin:0;padding:0;overflow:hidden'/>";
    c.radioW = a.childNodes[0].offsetWidth;
    c.radioH = a.childNodes[0].offsetHeight;
    document.body.removeChild(a);
    return c
  };
  Util.which = function(c) {
    for(var a = {}, b = 0, d;b < c.length;b++) {
      if(d = c[b].toLowerCase(), d === "number") {
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
  Util.printEventPos = function(c) {
    Util.print("client: (" + c.clientX + ", " + c.clientY + "), layer: (" + c.layerX + ", " + c.layerY + "), offset: (" + c.offsetX + ", " + c.offsetY + "), page: (" + c.pageX + ", " + c.pageY + "), screen: (" + c.screenX + ", " + c.screenY + "), xy: (" + c.x + ", " + c.y + ")")
  };
  Util.print = function(c) {
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
  Util.open = function(c) {
    var a = {url:"about:blank", name:"_blank", channelmode:"no", directories:"yes", fullscreen:"no", height:void 0, left:void 0, location:"yes", menubar:"yes", resizable:"yes", scrollbars:"yes", status:"yes", titlebar:"yes", toolbar:"yes", top:void 0, width:void 0, replace:void 0}, b;
    if(Util.isNotNull(c)) {
      for(b in a) {
        a.hasOwnProperty(b) && (a[b] = c[b])
      }
    }
    c = Util.ifNull(a.height, "", "height=" + a.height + ", ") + Util.ifNull(a.left, "", "left=" + a.left + ", ") + Util.ifNull(a.top, "", "top=" + a.top + ", ") + Util.ifNull(a.width, "", "width=" + a.width + ", ") + "channelmode=" + a.channelmode + ", directories=" + a.directories + ", fullscreen=" + a.fullscreen + ", location=" + a.location + ", menubar=" + a.menubar + ", resizable=" + a.resizable + ", scrollbars=" + a.scrollbars + ", status=" + a.status + ", titlebar=" + a.titlebar + ", toolbar=" + 
    a.toolbar;
    return a.replace == null ? window.open(a.url, a.name, c) : window.open(a.url, a.name, c, a.replace)
  };
  Util.cloneObject = g;
  Util.extendObject = i;
  Util.extendOrClone = function(c, a) {
    return a ? c ? i(c, a) : g(a) : c
  };
  Util.lcfirst = function(c) {
    return c ? c.charAt(0).toLowerCase() + c.substring(1) : ""
  };
  Util.ucfirst = function(c) {
    return c ? c.charAt(0).toUpperCase() + c.substring(1) : ""
  };
  var k = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, m = {area:!0, base:!0, basefont:!0, br:!0, col:!0, command:!0, embed:!0, frame:!0, hr:!0, img:!0, input:!0, isindex:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, wbr:!0}, x = {hidden:!0, text:!0, search:!0, tel:!0, url:!0, email:!0, password:!0, date:!0, month:!0, week:!0, time:!0, datetime:!0, number:!0, range:!0, 
  color:!0, checkbox:!0, radio:!0, file:!0, submit:!0, image:!0, reset:!0, button:!0};
  Util.emptyElements = m;
  Util.element = f;
  Util.input = function(c, a, b) {
    if(x.hasOwnProperty(c)) {
      return a.type = c, f("input", a, null, b)
    }else {
      throw Error("invalid input type, " + c + "!");
    }
  };
  Util.attribute = h;
  Util.style = e;
  Util.escapeChar = d;
  Util.encode = b;
  var r = 1, o = 2;
  Util.SAFE = r;
  Util.LEAVE_OPENED = o
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
  var f = g.prototype;
  f.print = function(f, e, d) {
    f === void 0 && (f = "");
    e === void 0 && (e = "timer");
    d === void 0 && (d = !0);
    var b = this.timers[e], a = (new Date).getTime(), b = i.isNull(b) ? 0 : a - b;
    i.print((this.stack.length > 0 ? this.stack + " :: " : "") + f + ", Time elapsed since last update: " + b + "ms");
    d && (this.timers[e] = a)
  };
  f.addStack = function(f) {
    this.stack = this.stack + " > " + f
  };
  f.removeStack = function() {
    this.stack = this.stack.substring(0, this.stack.lastIndexOf(" > "))
  };
  f.clearStack = function() {
    this.stack = ""
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "TimeWatch.js"...');
var TimeWatch = {};
(function() {
  function g(f) {
    var g = this.laps = [];
    this._stopped = !1;
    g.push(f || null, (new Date).getTime())
  }
  goog.exportSymbol("TimeWatch", g);
  var i = g.prototype;
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
    var f = this.laps, g = f.length, e = 2, d = g - (this._stopped ? 2 : 0), b = f[0], a = f[1], c = a, g = g > 2 ? [] : null, j = 0, k = "TimeWatch\n";
    for(k += "start" + (b ? ": " + b : "") + " @" + a + "\n";e < d;e += 2) {
      b = (b = f[e]) ? ": " + b : "", a = f[e + 1], g.push(c = a - c), j += c, k += "lap " + e / 2 + b + " @" + a + " +" + c + "ms\n", c = a
    }
    d >= 2 && this._stopped && (b = (b = f[d]) ? ": " + b : "", a = f[d + 1], g.push(c = a - c), j += c, k += "stop" + b + " @" + a + " +" + c + "ms\n");
    if(g) {
      var f = g.length, m = j / f, x = 0;
      k += "total number of laps: " + f + "\n";
      k += "total elapsed time: " + j + "ms\n";
      k += "average lap time: " + m.toFixed(2) + "ms\n";
      g.forEach(function(c) {
        x += (c - m) * (c - m)
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
    var i, f, h, e;
    if(this.length <= 1) {
      return i = this.getBoundingRect(), h = g.pageX, e = g.pageY, h >= i.left && h <= i.left + i.width && e >= i.top && e <= i.top + i.height
    }
    f = !1;
    this.each(function() {
      i = $(this).getBoundingRect();
      h = g.pageX;
      e = g.pageY;
      if(h >= i.left && h <= i.left + i.width && e >= i.top && e <= i.top + i.height) {
        return f = !0, !1
      }
    });
    return f
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
  JGM.create = function(f, g) {
    g == null && (g = {});
    if(!JGM.hasOwnProperty(f)) {
      throw Error("cannot find a grid module: name=" + f);
    }
    if(JGM._map.hasOwnProperty(f)) {
      if(JGM._map[f].cacheModule) {
        var e = g.mid = "JGM" + JGM.m.length++, d = new JGM[f](g);
        JGM.m.hasOwnProperty(f) || (JGM.m[f] = {});
        JGM.m[f][e] = d;
        if(f === "Grid") {
          if(d.name == null) {
            d.name = JGM.grids.length
          }
          JGM.gridMap[d.name] = d;
          JGM.grids.push(d)
        }
        return d
      }else {
        return new JGM[f](g)
      }
    }else {
      return new JGM[f](g)
    }
  };
  JGM._destroy = function(f, h) {
    if(f && h) {
      var e, d, b, a;
      for(d in h) {
        if(h.hasOwnProperty(d)) {
          switch(d) {
            case "map":
              e = h[d];
              if(typeof e == "string") {
                e = g.split(e);
                a = e.length;
                for(b = 0;b < a;b++) {
                  JGM._deleteMap(f, e[b])
                }
              }else {
                if(e instanceof Array) {
                  a = e.length;
                  for(b = 0;b < a;b++) {
                    g.emptyObject(e[b])
                  }
                }else {
                  g.emptyObject(e)
                }
              }
              break;
            case "array":
              e = h[d];
              if(typeof e == "string") {
                e = g.split(e);
                a = e.length;
                for(b = 0;b < a;b++) {
                  JGM._deleteArray(f, e[b])
                }
              }else {
                e.length = 0
              }
              break;
            case "$":
              e = h[d];
              if(typeof e == "string") {
                e = g.split(e);
                a = e.length;
                for(b = 0;b < a;b++) {
                  JGM._delete$(f, e[b])
                }
              }else {
                if(e instanceof Array) {
                  a = e.length;
                  for(b = 0;b < a;b++) {
                    i.unbindRemove(e[b])
                  }
                }else {
                  i.unbindRemove(e)
                }
              }
              break;
            case "style":
              e = h[d];
              if(typeof e == "string") {
                e = g.split(e);
                a = e.length;
                for(b = 0;b < a;b++) {
                  JGM._deleteStyle(f, e[b])
                }
              }else {
                if(e instanceof Array) {
                  a = e.length;
                  for(b = 0;b < a;b++) {
                    g.removeStyle(e[b])
                  }
                }else {
                  g.removeStyle(e)
                }
              }
              break;
            case "property":
              e = h[d];
              if(typeof e == "string") {
                e = g.split(e);
                a = e.length;
                for(b = 0;b < a;b++) {
                  delete f[e[b]]
                }
              }else {
                if(e instanceof Array) {
                  a = e.length;
                  for(b = 0;b < a;b++) {
                    delete f[e[b]]
                  }
                }
              }
              break;
            case "module":
              e = h[d];
              if(typeof e == "string") {
                e = g.split(e);
                a = e.length;
                for(b = 0;b < a;b++) {
                  JGM._deleteModule(f, e[b])
                }
              }else {
                if(e instanceof Array) {
                  a = e.length;
                  for(b = 0;b < a;b++) {
                    e[b].destroy()
                  }
                }else {
                  e.destroy()
                }
              }
              break;
            case "name":
              f.hasOwnProperty("mid") && (JGM._remove(h[d], f.mid), delete f.mid);
              break;
            case "path":
              f.hasOwnProperty("grid") && f.grid.hasOwnProperty(h[d]) && (delete f.grid[h[d]], delete f.grid)
          }
        }
      }
      g.emptyObject(f)
    }
  };
  JGM._deleteMap = function(f, h) {
    f && f.hasOwnProperty(h) && f[h] && (g.emptyObject(f[h]), delete f[h])
  };
  JGM._deleteArray = function(f, g) {
    if(f && f.hasOwnProperty(g) && f[g]) {
      f[g].length = 0, delete f[g]
    }
  };
  JGM._delete$ = function(f, g) {
    f && f.hasOwnProperty(g) && f[g] && (i.unbindRemove(f[g]), delete f[g])
  };
  JGM._deleteStyle = function(f, h) {
    f && f.hasOwnProperty(h) && f[h] && (g.removeStyle(f[h]), delete f[h])
  };
  JGM._deleteModule = function(f, g) {
    f && f.hasOwnProperty(g) && f[g] && (f[g].destroy(), delete f[g])
  };
  JGM._remove = function(f, g) {
    delete JGM.m[f][g]
  };
  JGM.grid = function(f) {
    return JGM.create("Grid", f)
  };
  JGM.gridMap = {};
  JGM.getGrid = function(f) {
    if(JGM.gridMap.hasOwnProperty(f)) {
      return JGM.gridMap[f]
    }
  };
  JGM.grids = [];
  JGM._add = function(f, g) {
    JGM[f] = g
  };
  JGM._extend = function(f, h) {
    var e = g.ifNull(h, {});
    $.extend(!0, f, e);
    $.extend(!0, e, f);
    return e
  };
  JGM.m = {length:0};
  JGM._CONST = {_cssUnselectable:"-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none;", _checkboxWidth:void 0, _checkboxHeight:void 0, _radioWidth:void 0, _radioHeight:void 0};
  JGM._globalEventsBound = !1;
  JGM._globalEvents = {_mousemove:function(f) {
    var g, e = JGM.m.Grid;
    for(g in e) {
      e.hasOwnProperty(g) && e[g]._mousemove(f)
    }
  }, _mouseup:function(f) {
    var g, e = JGM.m.Grid;
    for(g in e) {
      e.hasOwnProperty(g) && e[g]._mouseup(f)
    }
  }, _resize:function(f) {
    var g, e = JGM.m.Grid;
    for(g in e) {
      e.hasOwnProperty(g) && e[g]._resize(f)
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
  JGM.chart = function(f, g, e, d, b) {
    var a, g = g.toLowerCase();
    switch(g) {
      case "area":
        g = "corechart";
        a = "AreaChart";
        break;
      case "bar":
        g = "corechart";
        a = "BarChart";
        break;
      case "candle":
        g = "corechart";
        a = "CandlestickChart";
        break;
      case "column":
        g = "corechart";
        a = "ColumnChart";
        break;
      case "combo":
        g = "corechart";
        a = "ComboChart";
        break;
      case "gauge":
        g = "gauge";
        a = "Gauge";
        break;
      case "geo":
        g = "geochart";
        a = "GeoChart";
        break;
      case "line":
        g = "corechart";
        a = "LineChart";
        break;
      case "pie":
        g = "corechart";
        a = "PieChart";
        break;
      case "scatter":
        g = "corechart";
        a = "ScatterChart";
        break;
      case "table":
        g = "table";
        a = "Table";
        break;
      case "treemap":
        g = "treemap";
        a = "TreeMap";
        break;
      default:
        throw Error("unknown chart type: " + g);
    }
    google.load("visualization", "1", {packages:[g]});
    var c = JGM.exportToArray(b, e.map(function(c) {
      return c.key
    }));
    google.setOnLoadCallback(function() {
      for(var b = new google.visualization.DataTable, k = 0, m = e.length, g, r;k < m;k++) {
        g = e[k];
        r = g.type;
        switch(r) {
          case "boolean":
            r = "boolean";
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
            r = "number";
            break;
          case "string":
          ;
          case "text":
            r = "string"
        }
        b.addColumn(r || typeof c[0][k] || k === 0 && "string" || "number", g.name)
      }
      b.addRows(c);
      (new google.visualization[a](document.getElementById(f))).draw(b, d)
    })
  };
  JGM.exportToArray = function(f, g) {
    for(var e, d = [], b, a, c = 0, j = f.length, k, m = g.length;c < j;c++) {
      b = f[c];
      k = 0;
      for(e = [];k < m;k++) {
        a = g[k], e.push(a in b ? b[a] : null)
      }
      d.push(e)
    }
    return d
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
    var f = g.mapping, h = g.attr, e = g["default"], d = g.style, b = g.callback, a, c, j, k = 0, m = [], x = [], r = "<select";
    if(h) {
      for(j in h) {
        h.hasOwnProperty(j) && (r += " " + j + '="' + h[j] + '"')
      }
    }
    if(d) {
      r += ' style="';
      for(j in d) {
        d.hasOwnProperty(j) && (r += j + ":" + d[j] + ";")
      }
      r += '"'
    }
    r += ">";
    for(a in f) {
      f.hasOwnProperty(a) && (g = f[a], m.push(a), x.push(g), e == g && (c = k), k++)
    }
    return function(a) {
      var d, j, e = r;
      for(j = 0;j < k;j++) {
        if(a == x[j]) {
          d = j;
          break
        }
      }
      d === void 0 && (d = c);
      for(j = 0;j < k;j++) {
        e += '<option value="' + x[j] + '"', j === d && (e += ' selected="selected"'), e += ">" + m[j] + "</option>"
      }
      e += "</select>";
      b && (d = [], d.push(e), Array.prototype.push.apply(d, arguments), e = b.apply(this, d));
      return e
    }
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "Disposable.js"...');
jx.lang = {};
jx.lang.Disposable = {};
(function() {
  function g() {
  }
  function i(b, a, c) {
    if(typeof b != "object") {
      return!1
    }
    var d, k, e;
    if(a) {
      for(var c = 0, f = a.length;c < f;c++) {
        if(d = a[c], this.hasOwnProperty(d)) {
          if(b.hasOwnProperty(d)) {
            if(k = this[d], e = b[d], k !== b && !(k === k || e === e)) {
              return!1
            }
          }else {
            return!1
          }
        }else {
          if(b.hasOwnProperty(d)) {
            return!1
          }
        }
      }
    }else {
      if(c) {
        for(d in this) {
          if(this.hasOwnProperty(d)) {
            if(!b.hasOwnProperty(d)) {
              return!1
            }
            k = this[d];
            e = b[d];
            if(k !== e) {
              if(k) {
                if(typeof k != "object" || typeof e != "object") {
                  return!1
                }
                if(k.equals) {
                  if(!k.equals(e, null, c - 1)) {
                    return!1
                  }
                }else {
                  if(e.equals && !e.equals(k, null, c - 1)) {
                    return!1
                  }
                }
                if(!i.call(k, e, null, c - 1)) {
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
            if(b.hasOwnProperty(d)) {
              if(k = this[d], e = b[d], k !== b && !(k === k || e === e)) {
                return!1
              }
            }else {
              return!1
            }
          }
        }
      }
      for(d in b) {
        if(b.hasOwnProperty(d) && !this.hasOwnProperty(d)) {
          return!1
        }
      }
    }
    return!0
  }
  function f(b, a) {
    if(this != goog.global) {
      var c, j;
      if(b) {
        for(c in this) {
          if(this.hasOwnProperty(c)) {
            if((j = this[c]) && typeof j == "object") {
              if(j.dispose) {
                j.dispose(b - 1, a)
              }else {
                if(a) {
                  if(d(j)) {
                    j.length = 0
                  }
                  f.call(j, b - 1, a)
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
  }
  var h = goog.getObjectByName("jx.util");
  goog.exportSymbol("jx.lang.Disposable", g);
  goog.exportProperty(g.prototype, "dispose", f);
  var e = g.prototype, d = h.isArray;
  h.equals = Object.equals = function(b, a, c, d) {
    return typeof b == "object" ? i.call(b, a, c, d) : b !== b && a !== a
  };
  h.dispose = Object.dispose = function(b, a, c) {
    if(typeof b == "object") {
      return f.call(b, a, c)
    }
  };
  e.equals = i;
  e.dispose = f
})();
window.console && window.console.log && window.console.log('reading javascript source "Cell.js"...');
jx.grid.Cell = {};
(function() {
  function g(d) {
    this.grid = d.grid;
    this._datarow = d.datarow;
    this._colDef = d.colDef;
    this.__init(d)
  }
  goog.getObjectByName("jx.grid");
  var i = goog.getObjectByName("jx.util"), f = goog.getObjectByName("jx.lang.Disposable");
  goog.exportSymbol("jx.grid.Cell", g);
  goog.inherits(g, f);
  g.getInstance = function(d) {
    return new g(d)
  };
  var h = g.prototype, e = f.prototype.dispose;
  h.dispose = function() {
    e.call(this)
  };
  h.__init = function(d) {
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
  h.destroy = function() {
    this.dispose()
  };
  h.getRowIdx = function() {
    if(i.isNotNull(this._datarow)) {
      return this.grid.dataMgr.getIdx(this._datarow)
    }
  };
  h.getColIdx = function() {
    if(i.isNotNull(this._colDef)) {
      return this.grid.colDefMgr.getIdx(this._colDef)
    }
  };
  h.getNode = function() {
    if(i.isNotNullAnd(this._datarow, this._colDef)) {
      return this.grid.view.getCellByIdAndKey(this.grid.dataMgr.getId(this._datarow), this._colDef.key)
    }
  };
  h.getRowNode = function() {
    return this.grid.view.getRow(this._datarow)
  };
  h.get$ = function() {
    var d = this.getNode();
    return d !== void 0 ? $(d) : $([])
  };
  h.getDatarow = function() {
    return this._datarow
  };
  h.getColDef = function() {
    return this._colDef
  };
  h.getKey = function() {
    if(i.isNotNull(this._colDef)) {
      return this._colDef.key
    }
  };
  h.getId = function() {
    return this.grid.dataMgr.getId(this._datarow)
  };
  h.getValue = function() {
    if(i.isNotNullAnd(this._datarow, this._colDef)) {
      return this._datarow[this._colDef.key]
    }
  };
  h.isValid = function() {
    return i.isNotNull(this.getNode())
  };
  h.isInvalid = function() {
    return i.isNull(this.getNode())
  };
  h.isEmpty$ = function() {
    return this.get$().length === 0
  };
  h.has$ = function() {
    return this.get$().length !== 0
  };
  h.equals = function(d) {
    return d && this._datarow && this._datarow === d._datarow && this._colDef && this._colDef === d.__colDef
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
  var f = g.prototype, h = i.prototype.dispose;
  f.dispose = function() {
    h.call(this._handlers, -1, !0);
    h.call(this)
  };
  f.addEventListener = function(e, d) {
    if(!e) {
      throw Error("Invalid event type: " + e);
    }
    if(typeof d != "function") {
      throw Error("Event listener must be a function");
    }
    if(!this._handlers) {
      this._handlers = {}
    }
    var b = this._handlers, e = (e + "").toLowerCase();
    b.hasOwnProperty(e) || (b[e] = []);
    b = b[e];
    b.indexOf(d) === -1 && b.push(d)
  };
  f.removeEventListener = function(e, d) {
    if(this._handlers) {
      var e = (e + "").toLowerCase(), b = this._handlers;
      if(b.hasOwnProperty(e)) {
        for(var a = b[e], c = -1;(c = a.indexOf(d, c + 1)) !== -1;) {
          a.splice(c--, 1)
        }
        a.length === 0 && delete b[e]
      }
    }
  };
  f.dispatchEvent = function(e) {
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
    var d = this._handlers, b = (e.type + "").toLowerCase();
    e.target = this;
    if(d.hasOwnProperty(b)) {
      for(var d = d[b].slice(), b = 0, a = d.length, c;b < a && !e.stopPropagation;b++) {
        c = d[b], c.handleEvent ? c.handleEvent(e) : c.call(this, e)
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
  function g(f) {
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
  goog.exportSymbol("jx.grid.Column", g);
  goog.inherits(g, i);
  i = g.prototype;
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
  function g(f) {
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
    var b = this, a = this.grid;
    a && ["Dispose", "CreateCss", "CreateDynamicCss", "Render", "Keydown", "Keyup", "Keypress", "Mousein", "Mouseout", "Mouseenter", "Mouseleave", "Mousemove", "Mouseover", "Mousedown", "Mouseup", "Click", "Dblclick", "Resize", "ResizeWidth", "ResizeHeight", "Scroll", "ScrollH", "ScrollV"].forEach(function(c) {
      var d = "before" + c, c = "after" + c, k = "_" + d, e = "_" + c;
      b[k] && a.addEventListener(d, function(c) {
        return b[k](c)
      });
      b[e] && a.addEventListener(c, function(c) {
        return b[e](c)
      })
    });
    this._bindEvents && (this.dispatchEvent({type:"beforebindevents"}), this._bindEvents(f), this.dispatchEvent({type:"afterbindevents"}));
    this.dispatchEvent({type:"complete"})
  }
  var i = goog.getObjectByName("jx.events.EventDispatcher");
  goog.exportSymbol("jx.grid.BaseModule", g);
  goog.inherits(g, i);
  var i = g.prototype, f = i.dispose;
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
    f.call(this)
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
    var b = [];
    d || (f = "#" + this.grid.mid + " " + f);
    if(typeof e != "string") {
      var a, d = "";
      e.hasOwnProperty("_prepend") && (e._prepend && b.push(e._prepend), delete e._prepend);
      e.hasOwnProperty("_append") && (e._append && (d = ";" + e._append), delete e._append);
      for(a in e) {
        b.push(a + ":" + e[a])
      }
      b = b.join(";") + d
    }
    return f + "{" + b + "}"
  };
  i.toCssStyles = function(f, e, d) {
    var f = f || [], b;
    for(b in e) {
      f.push(this.toCssStyle(b, e[b], d))
    }
    return f
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "DataManager.js"...');
jx.data = {};
jx.data.DataManager = {};
(function() {
  function g(d) {
    this.mid = d.mid;
    this.grid = d.grid;
    this.grid.dataMgr = this;
    this.all = [];
    this.datalist = [];
    this.failed = [];
    this._options = i._extend({idKey:void 0, idColKeys:[], uniqueKeys:[]}, d.options);
    this._consts = {_auto:0, _given:1, _composite:2, _notReal:this.mid + "@NR" + f.random(1E4), _add:0, _addList:1, _update:2, _updateList:3, _remove:4, _removeList:5, unknown:0, number:1, string:2, "boolean":3, date:4, "enum":5};
    this._options.idKey != null ? (this._idMode = this._consts._given, this.idKey = this._options.idKey) : (this._idMode = this._options.idColKeys.length !== 0 ? this._consts._composite : this._consts._auto, this.idKey = "J@I" + this.mid + "@" + f.random(1E4));
    this._increment = 1;
    this._idToIdx = {};
    this._idToData = {};
    this._filters = [];
    this._history = [];
    this._redoHistory = [];
    this.uniqueMap = !1;
    this.__init(d)
  }
  var i = goog.getObjectByName("jx.grid"), f = goog.getObjectByName("jx.util"), h = goog.getObjectByName("jx.grid.Grid");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.data.DataManager", g);
  i._add("DataManager", g);
  g.getInstance = function(d) {
    return new g(d)
  };
  var e = g.prototype;
  e.__init = function(d) {
    var b = this.uniqueMap = {}, a = 0, c, j = this._options.uniqueKeys, k = !1;
    if(j && j.length) {
      k = !0;
      for(c = j.length;a < c;a++) {
        b[j[a]] = {}
      }
    }
    var j = this.grid.colDefMgr.getAll(), e, a = 0;
    for(c = j.length;a < c;a++) {
      e = j[a], e.unique && (k = !0, b[e.key] = {})
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
    this.grid.log("destroying DataManager instance...", h.V_INIT);
    this.cleanList(this.all);
    i._destroy(this, {name:"DataManager", path:"dataMgr", property:"all _idMode _increment idKey _sorter", map:"_consts _idToIdx _idToData _options", array:"datalist failed _history _redoHistory _filters"})
  };
  e.addUniqueIndex = function(d, b, a) {
    if(!a.hasOwnProperty(b)) {
      return this.grid.error("KEY_UNDEFINED", b)
    }
    var c = a[b];
    if(c == null || c === "") {
      return this.grid.error("BAD_NULL", b)
    }
    if(d.hasOwnProperty(c)) {
      return d[c] === a ? !1 : this.grid.error("DUP_ENTRY", c, b)
    }
    d[c] = a;
    return!0
  };
  e.addUniqueIndices = function(d, b, a) {
    var c, j = a.length, k = [], e, f;
    for(c = 0;c < j;c++) {
      if(f = a[c]) {
        if(e = this.addUniqueIndex(d, b, f)) {
          if(e instanceof Error) {
            return this.removeUniqueIndices(d, b, k), e
          }
          k.push(d[f[b]] = f)
        }
      }
    }
    return k.length > 0
  };
  e.updateUniqueIndex = function(d, b, a, c, j) {
    if(c.hasOwnProperty(b)) {
      if(!j.hasOwnProperty(b) || !a.hasOwnProperty(b)) {
        return this.grid.error("KEY_UNDEFINED", b)
      }
      if(!d.hasOwnProperty(j = j[b])) {
        return this.grid.error("KEY_NOT_FOUND", j, b)
      }
      c = c[b];
      if(c == null || c === "") {
        return this.grid.error("BAD_NULL", b)
      }
      if(d.hasOwnProperty(c)) {
        return d[c] === a ? !1 : this.grid.error("DUP_ENTRY", c, b)
      }
      d[c] = a;
      delete d[j];
      return j
    }
    return!1
  };
  e.updateUniqueIndices = function(d, b, a, c, j, k) {
    if(k !== !0) {
      if(f.isEmptyObj(d) || f.isEmptyString(b) || f.isEmptyArray(a) || f.isEmptyArray(c) || f.isEmptyArray(j)) {
        return!1
      }
      if(a.length !== c.length || a.length !== j.length) {
        return this.grid.error("LENGTH_NOT_EQUAL")
      }
    }
    for(var k = 0, e = a.length, g, r, h, i = [], l = [], n = [], q, s;k < e;k++) {
      if(!f.isNull(g = a[k])) {
        if((h = c[k]).hasOwnProperty(b)) {
          r = j[k];
          if(!r.hasOwnProperty(b) || !g.hasOwnProperty(b)) {
            return this.updateUniqueIndices(d, b, i, n, l), this.grid.error("KEY_UNDEFINED", b)
          }
          if(!d.hasOwnProperty(s = r[b])) {
            return this.updateUniqueIndices(d, b, i, n, l), this.grid.error("KEY_NOT_FOUND", s, b)
          }
          if(f.isEmptyString(q = h[b])) {
            return this.updateUniqueIndices(d, b, i, n, l), this.grid.error("BAD_NULL", b)
          }
          if(d.hasOwnProperty(q)) {
            if(d[q] === g) {
              continue
            }
            this.updateUniqueIndices(d, b, i, n, l);
            return this.grid.error("DUP_ENTRY", q, b)
          }
          d[q] = g;
          delete d[s];
          i.push(g);
          l.push(h);
          n.push(r)
        }
      }
    }
    return!i.length ? !1 : {datalist:i, changes:l, befores:n}
  };
  e.removeUniqueIndex = function(d, b, a) {
    var c;
    a.hasOwnProperty(b) && d.hasOwnProperty(c = a[b]) && delete d[c]
  };
  e.removeUniqueIndices = function(d, b, a, c) {
    if(!(c !== !0 && (f.isEmptyObj(d) || f.isEmptyString(b) || f.isEmptyArray(a)))) {
      for(var j = a.length, k, e, c = 0;c < j;c++) {
        e = a[c], e.hasOwnProperty(b) && d.hasOwnProperty(k = e[b]) && delete d[k]
      }
    }
  };
  e.addToUniqueMap = function(d) {
    if(this.uniqueMap) {
      var b = [], a, c = this.uniqueMap, j;
      for(a in c) {
        if(c.hasOwnProperty(a) && (j = this.addUniqueIndex(c[a], a, d))) {
          if(j instanceof Error) {
            a = 0;
            for(var k = b.length;a < k;a++) {
              this.removeUniqueIndex(c[b[a]], b[a], d)
            }
            return j
          }
          b.push(a)
        }
      }
      return b.length > 0
    }
    return!1
  };
  e.addListToUniqueMap = function(d) {
    if(this.uniqueMap) {
      var b = this.uniqueMap, a = [], c, j;
      for(c in b) {
        if(b.hasOwnProperty(c) && (j = this.addUniqueIndices(b[c], c, d))) {
          if(j instanceof Error) {
            c = 0;
            for(var k = a.length;c < k;c++) {
              this.removeUniqueIndices(b[a[c]], a[c], d)
            }
            return j
          }
          a.push(c)
        }
      }
      return a.length > 0
    }
    return!1
  };
  e.updateUniqueMap = function(d, b, a) {
    if(this.uniqueMap) {
      var c, j = this.uniqueMap, k = [], e;
      for(c in j) {
        if(j.hasOwnProperty(c) && (e = this.updateUniqueIndex(j[c], c, d, b, a))) {
          if(e instanceof Error) {
            c = 0;
            for(var f = k.length;c < f;c++) {
              this.updateUniqueIndex(j[k[c]], k[c], d, a, b)
            }
            return e
          }
          k.push(c)
        }
      }
      return k.length > 0
    }
    return!1
  };
  e.updateListUniqueMap = function(d, b, a) {
    if(this.uniqueMap) {
      var c, j = this.uniqueMap, k = [], e;
      for(c in j) {
        if(j.hasOwnProperty(c) && (e = this.updateUniqueIndices(j[c], c, d, b, a))) {
          if(e instanceof Error) {
            c = 0;
            for(var f = k.length;c < f;c++) {
              this.updateUniqueIndices(j[k[c]], k[c], d, a, b)
            }
            return e
          }
          k.push(c)
        }
      }
      return k.length > 0
    }
    return!1
  };
  e.removeFromUniqueMap = function(d) {
    if(this.uniqueMap) {
      var b, a = this.uniqueMap;
      for(b in a) {
        a.hasOwnProperty(b) && this.removeUniqueIndex(a[b], b, d)
      }
    }
  };
  e.removeListFromUniqueMap = function(d) {
    if(this.uniqueMap) {
      var b, a = this.uniqueMap;
      for(b in a) {
        a.hasOwnProperty(b) && this.removeUniqueIndices(a[b], b, d)
      }
    }
  };
  e.addToIdMap = function(d) {
    var b = this.idKey;
    switch(this._idMode) {
      case this._consts._auto:
        d.hasOwnProperty(b) || (d[b] = this._increment++);
      case this._consts._given:
      ;
      case this._consts._composite:
        return this.addUniqueIndex(this._idToData, b, d)
    }
    return!1
  };
  e.addListToIdMap = function(d) {
    var b = this.idKey;
    switch(this._idMode) {
      case this._consts._auto:
        for(var a = 0, c, j = d.length;a < j;a++) {
          if(!(c = d[a]).hasOwnProperty(b)) {
            c[b] = this._increment++
          }
        }
      ;
      case this._consts._given:
      ;
      case this._consts._composite:
        return this.addUniqueIndices(this._idToData, b, d)
    }
    return!1
  };
  e.updateIdMap = function(d, b, a) {
    if(f.isNullOr(d, a) || f.isEmptyObj(b)) {
      return!1
    }
    var c = this.idKey;
    switch(this._idMode) {
      case this._consts._auto:
        if(b.hasOwnProperty(c)) {
          return this.grid.error("NOT_MODIFIABLE", c)
        }
      ;
      case this._consts._given:
        return this.updateUniqueIndex(this._idToData, c, d, b, a);
      case this._consts._composite:
        if(b.hasOwnProperty(c)) {
          return this.grid.error("NOT_MODIFIABLE", c)
        }
        for(var a = this._options.idColKeys, j = a.length, k = 0;k < j;k++) {
          if(b.hasOwnProperty(a[k])) {
            for(var e = "", g = 0, r, h, i = {}, l = {}, k = l[c] = d[c];g < j;g++) {
              if(r = a[g], b.hasOwnProperty(r)) {
                if(f.isEmptyString(h = b[r])) {
                  return this.grid.error("BAD_NULL", r)
                }
                e += "&" + h
              }else {
                e += "&" + d[r]
              }
            }
            d[c] = i[c] = e;
            if(k === e) {
              break
            }
            b = this.updateUniqueIndex(this._idToData, c, d, i, l);
            b instanceof Error && (d[c] = k);
            return b
          }
        }
    }
    return!1
  };
  e.updateListIdMap = function(d, b, a) {
    if(f.isEmptyArray(d) || f.isEmptyArray(b) || f.isEmptyArray(a)) {
      return!1
    }
    var c = this.idKey, j = d.length, k = 0;
    switch(this._idMode) {
      case this._consts._auto:
        for(;k < j;k++) {
          if(b[k].hasOwnProperty(c)) {
            return this.grid.error("NOT_MODIFIABLE", c)
          }
        }
      ;
      case this._consts._given:
        return this.updateUniqueIndices(this._idToData, c, d, b, a);
      case this._consts._composite:
        for(var e = this._idToData, g, r, h = this._options.idColKeys, i = h.length, l, a = [], n = [], q = [], s = [], t, u, v, w;k < j;k++) {
          g = d[k];
          r = b[k];
          if(r.hasOwnProperty(c)) {
            t = 0;
            for(j = a.length;t < j;t++) {
              n[t][c] = a[t]
            }
            return this.grid.error("NOT_MODIFIABLE", c)
          }
          for(t = 0;t < i;t++) {
            if(r.hasOwnProperty(h[t])) {
              l = "";
              for(u = 0;u < i;u++) {
                if(v = h[u], r.hasOwnProperty(v)) {
                  if(f.isEmptyString(w = r[v])) {
                    t = 0;
                    for(j = a.length;t < j;t++) {
                      n[t][c] = a[t]
                    }
                    return this.grid.error("BAD_NULL", v)
                  }
                  l += "&" + w
                }else {
                  l += "&" + g[v]
                }
              }
              g[c] !== l && (n.push(g), q.push({}), s.push({}), a.push(g[c]), g[c] = l)
            }
          }
        }
        if(!n.length) {
          break
        }
        d = this.updateUniqueIndices(e, c, n, q, s);
        if(d instanceof Error) {
          t = 0;
          for(j = a.length;t < j;t++) {
            n[t][c] = a[t]
          }
        }
        return d
    }
    return!1
  };
  e.removeFromIdMap = function(d) {
    var b = this.idKey, a = this._idToData, c;
    f.isNotNull(d) && d.hasOwnProperty(b) && a.hasOwnProperty(c = d[b]) && delete a[c]
  };
  e.removeListFromIdMap = function(d) {
    if(!f.isEmptyArray(d)) {
      for(var b = this.idKey, a = d.length, c = this._idToData, j, k, e = 0;e < a;e++) {
        k = d[e], k.hasOwnProperty(b) && c.hasOwnProperty(j = k[b]) && delete c[j]
      }
    }
  };
  e.fillTemp = function(d, b) {
    var a = this.grid.colDefMgr.getAll(), c = a.length, j, k, e = 0;
    if(b && b.isNew) {
      for(;e < c;e++) {
        k = a[e], j = k.key, k.nullOnCreate && d[j] == null && (d[j] = "J@H" + this._increment++)
      }
    }
  };
  e.fillTempList = function(d, b) {
    var a = this.grid.colDefMgr.getAll(), c = a.length, j = d.length, k, e, f = 0;
    if(b && b.isNew) {
      for(;f < c;f++) {
        if(e = a[f], k = e.key, e.nullOnCreate) {
          for(e = 0;j;e++) {
            d[e][k] = "J@H" + this._increment++
          }
        }
      }
    }
  };
  e.query = function(d) {
    if(typeof d === "string" && (d = $.trim(d), d.length)) {
      var b, a, c, j, k;
      b = d.toLowerCase();
      a = d.indexOf(" ");
      if(a !== -1 && (c = b.substring(0, a), b = b.indexOf(" where "), j = b > -1, a = $.trim(j ? d.substring(a + 1, b) : d.substring(a + 1)), a.length)) {
        switch(j && (k = $.trim(d.substring(b + 7))), c) {
          case "select":
            return this.executeSelect(a, k);
          case "insert":
            return this.executeInsert(a, k);
          case "update":
            return this.executeUpdate(a, k);
          case "delete":
            return this.executeDelete(a, k)
        }
      }
    }
  };
  e.parseWhere = function(d) {
    typeof d === "string" && $.trim(d)
  };
  e.executeSelect = function(d) {
    var d = f.split(d, /[\s,]+/), b = d.length, a = 0, c = {}, j = this.all, k = [];
    if(!b) {
      return k
    }
    for(;a < b;a++) {
      if(d[a] === "*") {
        break
      }
      c[d[a]] = !0
    }
    a = 0;
    for(b = j.length;a < b;a++) {
      k.push(f.clone(j[a], c))
    }
    return k
  };
  e.parse = function(d, b) {
    var a = this.grid.colDefMgr, c = a.getParser(), a = a.getNullOnCreate(), j, k = b && b.isNew;
    try {
      for(j in c) {
        if(c.hasOwnProperty(j) && (!k || !a.hasOwnProperty(j))) {
          d[j] = c[j](d[j], d)
        }
      }
    }catch(e) {
      return this.grid.error("PARSE_ERROR", d[j], j)
    }
    return!0
  };
  e.parseList = function(d, b) {
    var a = this.grid.colDefMgr, c = a.getParser(), a = a.getNullOnCreate(), j, k, e = b && b.isNew, f, g = d.length, h;
    try {
      for(j in c) {
        if(c.hasOwnProperty(j) && (!e || !a.hasOwnProperty(j))) {
          k = c[j];
          for(f = 0;f < g;f++) {
            h = d[f], h[j] = k(h[j], h)
          }
        }
      }
    }catch(i) {
      return this.grid.error("PARSE_ERROR", h[j], j)
    }
    return!0
  };
  e.validate = function(d, b) {
    var a = this.grid.colDefMgr, c = a.getValidator(), a = a.getNullOnCreate(), j, k, e, f, g, h = b && b.isNew;
    try {
      for(j in c) {
        if(c.hasOwnProperty(j) && (!h || !a.hasOwnProperty(j))) {
          if(d.hasOwnProperty(j) && (k = d[j]) != null ? (f = !1, e = typeof k == "string" ? k : k.toString(), g = !e) : (k = null, g = f = !0, e = ""), !c[j](k, d, e, f, g)) {
            return this.grid.error("WRONG_VALUE", e, j)
          }
        }
      }
    }catch(i) {
      return this.grid.error("WRONG_VALUE", e, j)
    }
    return!0
  };
  e.validateList = function(d, b) {
    var a = this.grid.colDefMgr, c = a.getValidator(), a = a.getNullOnCreate(), j, e, m = b && b.isNew, f, g = d.length, h, i, l, n, q;
    try {
      for(j in c) {
        if(c.hasOwnProperty(j) && (!m || !a.hasOwnProperty(j))) {
          e = c[j];
          for(f = 0;f < g;f++) {
            if(q = d[f], q.hasOwnProperty(j) && (h = q[j]) != null ? (l = !1, i = typeof h == "string" ? h : h.toString(), n = !i) : (h = null, n = l = !0, i = ""), !e(h, q, i, l, n)) {
              return this.grid.error("WRONG_VALUE", i, j)
            }
          }
        }
      }
    }catch(s) {
      return this.grid.error("WRONG_VALUE", i, j)
    }
    return!0
  };
  e.makeCompositeKey = function(d, b) {
    if(this._idMode === this._consts._composite && (b || !d.hasOwnProperty(this.idKey))) {
      for(var a = this._options.idColKeys, c = a.length, j = 0, e = "";j < c;j++) {
        e += "&" + d[a[j]]
      }
      d[this.idKey] = e
    }
  };
  e.makeCompositeKeyList = function(d, b) {
    if(this._idMode === this._consts._composite) {
      var a = this.idKey, c = d.length, j = this._options.idColKeys, e = j.length, m, f = 0, g, h;
      if(b) {
        for(;f < c;f++) {
          m = d[f];
          h = "";
          for(g = 0;g < e;g++) {
            h += "&" + m[j[g]]
          }
          m[a] = h
        }
      }else {
        for(;f < c;f++) {
          if(!(m = d[f]).hasOwnProperty(a)) {
            h = "";
            for(g = 0;g < e;g++) {
              h += "&" + m[j[g]]
            }
            m[a] = h
          }
        }
      }
    }
  };
  e.map = function(d) {
    if(d) {
      var b = this._idToData, a = this.idKey, c;
      this.makeCompositeKey(d);
      if(d.hasOwnProperty(a) && b.hasOwnProperty(c = d[a])) {
        return b[c]
      }
    }
    return null
  };
  e.mapList = function(d) {
    if(d && d.length) {
      this.makeCompositeKeyList(d);
      for(var b = [], a = [], c = this.idKey, j = this._idToData, e = d.length, m = 0, f, g;m < e;m++) {
        (f = d[m]).hasOwnProperty(c) && j.hasOwnProperty(g = f[c]) ? b.push(j[g]) : a.push(f)
      }
      return{mapped:b, unmapped:a}
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
    for(var b = this.datalist, a = b.length, c = this.idKey, j = this._idToIdx, d = d || 0;d < a;d++) {
      j[b[d][c]] = d
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
    var b = this.all;
    if(b === d || !b.length && (!d || !d.length)) {
      return!1
    }
    var d = d || [], a = this.grid.event;
    a.trigger("onBeforeDataChange", !1, !0);
    a.trigger("onBeforeSetDatalist", [b, d], !0);
    this.cleanList(b);
    if(this.uniqueMap) {
      var c, b = this.uniqueMap;
      for(c in b) {
        b.hasOwnProperty(c) && (b[c] = {})
      }
    }
    this._idToData = {};
    this._history.length = 0;
    this._redoHistory.length = 0;
    if(d.length) {
      if((c = this.parseList(d)) instanceof Error) {
        return c
      }
      if((c = this.validateList(d)) instanceof Error) {
        return c
      }
      if((c = this.addListToUniqueMap(d)) instanceof Error) {
        return c
      }
      this.makeCompositeKeyList(d, !0);
      if((c = this.addListToIdMap(d)) instanceof Error) {
        return c
      }
    }
    this.all = d;
    a.trigger("onAfterSetDatalist", [d], !0);
    a.trigger("onDataChange", !1, !0);
    this.refresh();
    return!0
  };
  e.add = function(d, b) {
    if(!d || this.map(d)) {
      return!1
    }
    var a = this.grid.event;
    a.trigger("onBeforeDataChange", !1, !0);
    this.fillTemp(d, b);
    var c;
    if((c = this.parse(d, b)) instanceof Error) {
      return c
    }
    if((c = this.validate(d, b)) instanceof Error) {
      return c
    }
    if((c = this.addToUniqueMap(d)) instanceof Error) {
      return c
    }
    if((c = this.addToIdMap(d)) instanceof Error) {
      return c
    }
    this.all.push(d);
    if(!b || b.undo !== !0) {
      this._history.push({_action:this._consts._add, _target:d}), this._redoHistory.length = 0
    }
    a.trigger("onAddDatarow", [d, b], !0);
    a.trigger("onDataChange", !1, !0);
    (!b || b.noRefresh !== !0) && this.refresh(b);
    return!0
  };
  e.addList = function(d, b) {
    if(d && d.length) {
      var a = this.mapList(d).unmapped;
      if(!a.length) {
        return!1
      }
      this.grid.event.trigger("onBeforeDataChange", !1, !0);
      this.fillTempList(d, b);
      var c;
      if((c = this.parseList(a, b)) instanceof Error) {
        return c
      }
      if((c = this.validateList(a, b)) instanceof Error) {
        return c
      }
      if((c = this.addListToUniqueMap(a)) instanceof Error) {
        return c
      }
      if((c = this.addListToIdMap(a)) instanceof Error) {
        return c
      }
      this.all.pushList(a);
      if(!b || b.undo !== !0) {
        this._history.push({_action:this._consts._addList, _target:a}), this._redoHistory.length = 0
      }
      this.grid.event.trigger("onAddDatalist", [a, b], !0);
      this.grid.event.trigger("onDataChange", !1, !0);
      (!b || b.noRefresh !== !0) && this.refresh(b);
      return!0
    }
    return!1
  };
  e.updateByKey = function(d, b, a, c) {
    var j = {};
    j[b] = a;
    return this.update(d, j, c)
  };
  e.update = function(d, b, a) {
    if(!d || !b) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange", !1, !0);
    this.grid.event.trigger("onBeforeUpdateDatarow", [d, b], !0);
    var c = {}, j;
    for(j in b) {
      b.hasOwnProperty(j) && (d[j] === b[j] ? delete b[j] : (c[j] = d[j], d[j] = b[j]))
    }
    if(f.isEmptyObj(c)) {
      return!1
    }
    if((j = this.parse(d, a)) instanceof Error) {
      return this._rollback(d, c), j
    }
    if((j = this.validate(d, a)) instanceof Error) {
      return this._rollback(d, c), j
    }
    if((j = this.updateUniqueMap(d, b, c)) instanceof Error) {
      return this._rollback(d, c), j
    }
    if((j = this.updateIdMap(d, b, c)) instanceof Error) {
      return this._rollback(d, c), j
    }
    j !== !1 && this.grid.event.trigger("onIdChange", [d, j, d[this.idKey]], !0);
    if(!a || a.undo !== !0) {
      this._history.push({_action:this._consts._update, _target:d, _before:c, _change:b}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onUpdateDatarow", [d, b, c, a], !0);
    this.grid.event.trigger("onDataChange", !1, !0);
    (!a || a.noRefresh !== !0) && this.refresh(a);
    return!0
  };
  e.updateList = function(d, b) {
    if(!d || !d.length) {
      return!1
    }
    var a = this.grid.event;
    a.trigger("onBeforeDataChange", !1, !0);
    a.trigger("onBeforeUpdateDatalist", [d], !0);
    for(var c = [], j = [], e = [], m, g, r, h = d.length, i = 0, l;i < h;i++) {
      g = {};
      m = d[i].datarow;
      r = d[i].change;
      for(l in r) {
        r.hasOwnProperty(l) && (m[l] === r[l] ? delete r[l] : (g[l] = m[l], m[l] = r[l]))
      }
      f.isNotEmptyObj(g) && (c.push(m), j.push(g), e.push(r))
    }
    if(!c.length) {
      return!1
    }
    if((m = this.parseList(c, b)) instanceof Error) {
      return this._rollbackList(c, j), m
    }
    if((m = this.validateList(c, b)) instanceof Error) {
      return this._rollbackList(c, j), m
    }
    if((m = this.updateListUniqueMap(c, e, j)) instanceof Error) {
      return this._rollbackList(c, j), m
    }
    if((m = this.updateListIdMap(c, e, j)) instanceof Error) {
      return this._rollbackList(c, j), m
    }
    m !== !1 && a.trigger("onIdListChange", [m.list, m.befores, this.idKey], !0);
    if(!b || b.undo !== !0) {
      this._history.push({_action:this._consts._updateList, _target:c, _before:j, _change:e}), this._redoHistory.length = 0
    }
    a.trigger("onUpdateDatalist", [c, e, j, b], !0);
    a.trigger("onDataChange", !1, !0);
    (!b || b.noRefresh !== !0) && this.refresh(b);
    return!0
  };
  e._rollback = function(d, b) {
    for(var a in b) {
      b.hasOwnProperty(a) && (d[a] = b[a])
    }
  };
  e._rollbackList = function(d, b) {
    for(var a = d.length, c = 0, j, e, m;c < a;c++) {
      for(m in j = d[c], e = b[c], e) {
        e.hasOwnProperty(m) && (j[m] = e[m])
      }
    }
  };
  e.remove = function(d, b) {
    var a = this.map(d);
    if(a) {
      this.grid.event.trigger("onBeforeDataChange", !1, !0);
      this.removeFromIdMap(a);
      this.removeFromUniqueMap(a);
      this.all.remove(a);
      this.removeId(a);
      if(!b || b.undo !== !0) {
        this._history.push({_action:this._consts._remove, _target:a}), this._redoHistory.length = 0
      }
      this.grid.event.trigger("onRemoveDatarow", [a, b], !0);
      this.grid.event.trigger("onDataChange", !1, !0);
      (!b || b.noRefresh !== !0) && this.refresh(b);
      return!0
    }
    return!1
  };
  e.removeList = function(d, b) {
    if(d && d.length) {
      var a = this.mapList(d).mapped;
      if(a.length) {
        this.grid.event.trigger("onBeforeDataChange", !1, !0);
        this.removeListFromIdMap(a);
        this.removeListFromUniqueMap(a);
        this.all.removeList(a);
        this.cleanList(a);
        if(!b || b.undo !== !0) {
          this._history.push({_action:this._consts._removeList, _target:a}), this._redoHistory.length = 0
        }
        this.grid.event.trigger("onRemoveDatalist", [a, b], !0);
        this.grid.event.trigger("onDataChange", !1, !0);
        (!b || b.noRefresh !== !0) && this.refresh(b);
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
    var b = d._target, a = d._before;
    switch(d._action) {
      case this._consts._add:
        return this.remove(b, {undo:!0});
      case this._consts._addList:
        return this.removeList(b, {undo:!0});
      case this._consts._update:
        return this.update(b, a, {undo:!0});
      case this._consts._updateList:
        for(var d = [], c = 0, j = b.length;c < j;c++) {
          d.push({datarow:b[c], change:a[c]})
        }
        return this.updateList(d, {undo:!0});
      case this._consts._remove:
        return this.add(b, {undo:!0});
      case this._consts._removeList:
        return this.addList(b, {undo:!0})
    }
  };
  e.redo = function() {
    if(!this._redoHistory.length) {
      return!1
    }
    var d = this._redoHistory.pop();
    this._history.push(d);
    var b = d._target, a = d._change;
    switch(d._action) {
      case this._consts._add:
        return this.add(b, {undo:!0});
      case this._consts._addList:
        return this.addList(b, {undo:!0});
      case this._consts._update:
        return this.update(b, a, {undo:!0});
      case this._consts._updateList:
        for(var d = [], c = 0, j = b.length;c < j;c++) {
          d.push({datarow:b[c], change:a[c]})
        }
        return this.updateList(d, {undo:!0});
      case this._consts._remove:
        return this.remove(b, {undo:!0});
      case this._consts._removeList:
        return this.removeList(b, {undo:!0})
    }
  };
  e.equals = function(d, b) {
    if(d && b) {
      if(d === b) {
        return!0
      }
      this._idMode === this._consts._composite && (this.makeCompositeKey(d), this.makeCompositeKey(b));
      var a = this.idKey, c = d[a];
      return c == null ? !1 : c === b[a]
    }
    return!1
  };
  e.getReal = function() {
    var d = this._consts._notReal;
    return this.all.filter(function(b) {
      return!b.hasOwnProperty(d)
    })
  };
  e.filterReal = function(d) {
    var b = this._consts._notReal;
    return d.filter(function(a) {
      return!a.hasOwnProperty(b)
    })
  };
  e.isReal = function(d) {
    return d && !d.hasOwnProperty(this._consts._notReal)
  };
  e.dropNonReal = function(d) {
    if(d && d.length) {
      for(var b = this._consts._notReal, a = d.length - 1;a >= 0;a--) {
        d[a].hasOwnProperty(b) && (delete d[a][b], d.removeAt(a))
      }
    }
  };
  e.removeIdCol = function(d) {
    if(!(this._idMode === this._consts._given || !d || !d.length)) {
      for(var b = this.idKey, a = 0, c = d.length;a < c;a++) {
        d[a].hasOwnProperty(b) && delete d[a][b]
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
      var b = this.all, a = this.grid.event, c = [b];
      a.trigger("onBeforeSort", c, !0);
      d.comparator ? (b.sort(d.comparator), d.desc && b.reverse()) : d.lexi && this.constructor._lexi(b, d.lexi, d.desc);
      a.trigger("onAfterSort", c, !0)
    }
  };
  e.addFilter = function(d) {
    this._filters.push(d);
    this.refresh()
  };
  e.removeFilter = function(d) {
    var b = this._filters.length;
    this._filters.remove(d);
    b !== this._filters.length && this.refresh()
  };
  e._filter = function() {
    var d = this.datalist, b = this.failed, a = 0, c = this._filters.length, j, e;
    this.grid.event.trigger("onBeforeFilter", [d, b], !0);
    d.length = 0;
    d.pushList(this.all);
    for(b.length = 0;a < c;a++) {
      j = this._filters[a];
      for(e = d.length - 1;e >= 0;e--) {
        j(d[e]) || (b.push(d[e]), d.removeAt(e))
      }
    }
    this.grid.event.trigger("onFilter", [d, b], !0);
    this.grid.event.trigger("onAfterFilter", [d, b], !0)
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
  e.exportRowToArray = function(d, b) {
    if(!(d in this.datalist)) {
      return null
    }
    b || (b = this.grid.colDefMgr.getKeys());
    for(var a = this.datalist[d], c = [], j, e = 0, m = b.length;e < m;e++) {
      j = b[e], c.push(j in a ? a[j] : null)
    }
    return c
  };
  e.exportToArray = function(d, b, a, c) {
    for(var d = d || this.grid.colDefMgr.getKeys(), c = c || this.datalist.slice(b, a), a = [], j, e, m = 0, f = c.length, g, h = d.length;m < f;m++) {
      j = c[m];
      g = 0;
      for(b = [];g < h;g++) {
        e = d[g], b.push(e in j ? j[e] : null)
      }
      a.push(b)
    }
    return a
  };
  e.select = function(d, b, a, c) {
    for(var d = d || this.grid.colDefMgr.getKeys(), c = c || this.datalist.slice(b, a), a = [], j, e, m = 0, f = c.length, g, h = d.length;m < f;m++) {
      j = c[m];
      g = 0;
      for(b = {};g < h;g++) {
        e = d[g], b[e] = j.hasOwnProperty(e) && j[e] != null ? j[e] : null
      }
      a.push(b)
    }
    return a
  };
  e.slice = function(d, b) {
    return this.select(null, d, b)
  };
  g._lexi = function(d, b, a) {
    var c = Object.prototype.toString;
    Object.prototype.toString = typeof b == "function" ? b : function() {
      return this[b]
    };
    d.sort();
    Object.prototype.toString = c;
    a && d.reverse()
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "EventManager.js"...');
jx.grid.EventManager = {};
(function() {
  function g(e) {
    this.mid = e.mid;
    this.grid = e.grid;
    e.grid.event = this;
    this._map = {}
  }
  var i = goog.getObjectByName("jx.grid"), f = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.EventManager", g);
  g.getInstance = function(e) {
    return new g(e)
  };
  var h = g.prototype;
  h.destroy = function() {
    var e, d = this._map;
    for(e in d) {
      d.hasOwnProperty(e) && i._deleteArray(d, e)
    }
    i._destroy(this, {name:"EventManager", path:"event", map:"_map"})
  };
  h.register = function(e, d, b) {
    if(f.isString(e)) {
      this._parseAndAdd(e, d, b)
    }else {
      if(f.isNotNull(e.e)) {
        this._parseAndAdd(e.e, e.f, e.t)
      }else {
        for(var a, d = e.length, c;a < d;a++) {
          f.isNotNull(c = e[a]) && this._parseAndAdd(c.e, c.f, c.t)
        }
      }
    }
  };
  h.bind = function(e, d, b) {
    if(f.isString(e)) {
      this._parseAndAdd(e, d, b)
    }else {
      for(var a in e) {
        e.hasOwnProperty(a) && this._parseAndAdd(a, e[a], d)
      }
    }
  };
  h._parseAndAdd = function(e, d, b) {
    f.isNull(b) && (b = window);
    var e = f.split(e), a = e.length, c = 0;
    if(f.isFunction(d)) {
      for(;c < a;c++) {
        this._addHandler(e[c], d, b)
      }
    }else {
      if(f.isString(d)) {
        for(var d = f.split(d), j = d.length, k, m;c < a;c++) {
          k = e[c];
          for(m = 0;m < j;m++) {
            this._addHandler(k, b[d[m]], b)
          }
        }
      }else {
        for(j = d.length;c < a;c++) {
          k = e[c];
          for(m = 0;m < j;m++) {
            this._addHandler(k, d[m], b)
          }
        }
      }
    }
  };
  h._addHandler = function(e, d, b) {
    this._map.hasOwnProperty(e) || (this._map[e] = []);
    this._map[e].push({fn:d, target:b})
  };
  h.unregister = function(e, d) {
    var b = this._map;
    if(b.hasOwnProperty(e)) {
      var a = b[e];
      if(f.isNull(d)) {
        a.length = 0, delete b[e]
      }else {
        for(var c = 0, j = a.length;c < j;c++) {
          if(a[c].fn === d) {
            a.removeAt(c);
            a.length === 0 && delete b[e];
            break
          }
        }
      }
    }
  };
  h.trigger = function(e, d, b, a) {
    this.grid.log("firing event=" + e, 3);
    var c = this._map;
    if(c.hasOwnProperty(e)) {
      var c = c[e], j = c.length;
      if(j) {
        if(this.grid.log(j + " handlers registered for event=" + e, 4), e = 0, b) {
          if(d && d.length) {
            for(;e < j;e++) {
              b = c[e], b.fn.apply(b.target, d)
            }
          }else {
            for(;e < j;e++) {
              b = c[e], b.fn.call(b.target)
            }
          }
        }else {
          a = a || [];
          if(d && d.length) {
            for(;e < j;e++) {
              b = c[e], a.push(b.fn.apply(b.target, d))
            }
          }else {
            for(;e < j;e++) {
              b = c[e], a.push(b.fn.call(b.target))
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
  h.triggerMultiple = function(e, d, b) {
    var e = e.split(","), a = 0, c = e.length;
    if(b) {
      for(b = [];a < c;a++) {
        this.trigger(e[a], d, !1, b)
      }
      return b
    }else {
      for(;a < c;a++) {
        this.trigger(e[a], d, !0)
      }
    }
  };
  h.triggerInvalid = function(e, d) {
    var b = this.trigger(e, d);
    return b && b.some(function(a) {
      return a === !1
    })
  };
  h.sendToBack = function(e, d) {
    for(var b = this._map[e], a = b.length, c, j = -1, k = 0;k < a;k++) {
      if(b[k].fn === d) {
        j = k;
        c = b[k];
        break
      }
    }
    j > -1 && (b.removeAt(k), b.push(c))
  };
  h.sendToFront = function(e, d) {
    for(var b = this._map[e], a = b.length, c, j = -1, k = 0;k < a;k++) {
      if(b[k].fn === d) {
        j = k;
        c = b[k];
        break
      }
    }
    j > -1 && (b.removeAt(k), b.unshift(c))
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "Tree.js"...');
jx.struct = {};
jx.struct.TreeNode = {};
jx.struct.Tree = {};
var TreeNode = {}, Tree = {};
(function() {
  function g(e) {
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
    this.root = new g({tree:this});
    this.infants = {}
  }
  var f = goog.getObjectByName("jx.util");
  goog.exportSymbol("jx.struct.TreeNode", g);
  goog.exportSymbol("jx.struct.Tree", i);
  goog.exportSymbol("TreeNode", g);
  goog.exportSymbol("Tree", i);
  g.getInstance = function(e) {
    return new g(e)
  };
  var h = g.prototype;
  h.destroy = function() {
    this.detach();
    delete this.tree;
    delete this.data;
    delete this.nodeId;
    delete this.childrenMap;
    delete this.children
  };
  h.destroyCompletely = function() {
    this.detachCompletely();
    delete this.tree;
    delete this.data;
    delete this.nodeId;
    delete this.childrenMap;
    delete this.children
  };
  h.destroyDown = function() {
    f.isNotNull(this.parent) && this.parent.removeChild(this);
    this.traverse({post:!0, fn:function() {
      this.destroy()
    }})
  };
  h.detach = function() {
    delete this.parent;
    delete this.level;
    this.children.length = 0;
    this.childrenMap = {}
  };
  h.detachCompletely = function() {
    f.isNotNull(this.parent) && this.parent.removeChild(this);
    this.removeAllChildren();
    delete this.parent;
    delete this.level
  };
  h.detachDown = function() {
    f.isNotNull(this.parent) && this.parent.removeChild(this);
    this.traverse({post:!0, fn:function() {
      this.detach()
    }})
  };
  h.isRoot = function() {
    return f.isNull(this.parent)
  };
  h.getRoot = function() {
  };
  h.isLeaf = function() {
    return this.children.length === 0
  };
  h.setParent = function(e) {
    if(this.parent !== e) {
      f.isNotNull(this.parent) && this.parent.removeChild(this), this.parent = e, delete this.level, f.isNotNull(e) && e.addChild(this)
    }
  };
  h.hasChild = function(e) {
    return this.childrenMap.hasOwnProperty(e.nodeId)
  };
  h.addChild = function(e) {
    this.hasChild(e) || (this.children.push(e), this.childrenMap[e.nodeId] = this.children.length - 1, e.setParent(this))
  };
  h.addChildAt = function(e, d) {
    var b;
    if(this.hasChild(d)) {
      b = this.childrenMap[d.nodeId];
      if(b === e) {
        return
      }
      this.children.removeAt(b)
    }
    this.children.addAt(e, d);
    f.isNotNull(b) && b < e ? this.resetChildIdx(b) : this.resetChildIdx(e);
    d.setParent(this)
  };
  h.removeChild = function(e) {
    if(this.hasChild(e)) {
      var d = this.childrenMap[e.nodeId];
      this.children.removeAt(d);
      delete this.childrenMap[e.nodeId];
      this.resetChildIdx(d);
      delete e.parent;
      delete e.level
    }
  };
  h.removeChildAt = function(e) {
    var d = this.children[e];
    this.children.removeAt(e);
    delete this.childrenMap[d.nodeId];
    this.resetChildIdx(e);
    delete d.parent;
    delete d.level
  };
  h.resetChildIdx = function(e) {
    f.isNull(e) && (e = 0);
    for(var d = this.children, b = d.length, a = this.childrenMap;e < b;e++) {
      a[d[e].nodeId] = e
    }
  };
  h.removeAllChildren = function() {
    for(var e = 0, d = this.children, b = d.length;e < b;e++) {
      delete d[e].parent, delete d[e].level
    }
    d.length = 0;
    this.childrenMap = {}
  };
  h.getSiblings = function() {
    if(this.isRoot()) {
      return[]
    }
    var e = this.parent.children.slice();
    e.removeAt(this.parent.getChildIdx(this));
    return e
  };
  h.getChildIdx = function(e) {
    return this.childrenMap[e.nodeId]
  };
  h.getIdx = function() {
    return this.isRoot() ? -1 : this.parent.getChildIdx(this)
  };
  h.getPath = function() {
    return this.traverse({res:[], up:!0, post:!0, fn:function(e) {
      this.isRoot() || e.res.push(this.getIdx())
    }}).res
  };
  h.getAncestors = function() {
    var e = {res:[], up:!0, post:!0, fn:function(d) {
      d.res.push(this)
    }};
    this.traverse(e);
    e.res.pop();
    return e.res
  };
  h.getDescendents = function() {
    var e = {res:[], fn:function(d) {
      d.res.push(this)
    }};
    this.traverse(e);
    e.res.shift();
    return e.res
  };
  h.getLevel = function() {
    return this.isRoot() ? this.level = -1 : this.level = this.parent.getLevel() + 1
  };
  h.find = function(e) {
    return this.traverse({fn:function(d) {
      if(this.data === e) {
        d.res = this, d.stop = !0
      }
    }}).res
  };
  h.traverse = function(e, d) {
    if(e.stop) {
      return e
    }
    if(e.up) {
      this.isRoot() ? this.callFn(e) : e.post ? (this.parent.traverse(e), this.callFn(e)) : (this.callFn(e), this.parent.traverse(e))
    }else {
      var b = 0, a = this.children, c = a.length;
      if(e.post) {
        for(;b < c;b++) {
          a[b].traverse(e, b)
        }
        this.callFn(e, d)
      }else {
        if(this.callFn(e, d), e.propagate === !1) {
          delete e.propagate
        }else {
          for(;!e.stop && b < c;b++) {
            a[b].traverse(e, b)
          }
        }
      }
    }
    return e
  };
  h.traverseChildren = function(e) {
    for(var d = 0, b = this.children, a = b.length;d < a;d++) {
      b[d].traverse(e, d)
    }
  };
  h.traverseParent = function(e) {
    f.isNotNull(this.parent) && this.parent.traverse(e)
  };
  h.callFn = function(e, d) {
    if(!e.stop) {
      f.isNull(e.target) ? f.callFn(this, e.fn, e, d) : (e.node = this, f.callFn(e.target, e.fn, e, d))
    }
  };
  i.getInstance = function(e) {
    return new i(e)
  };
  h = i.prototype;
  h.__init = function() {
    this.makeTree()
  };
  h.destroy = function() {
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
  h.detach = function() {
    this.root.detachDown();
    this.emptyInfants()
  };
  h.emptyInfants = function() {
    var e, d = this.infants;
    for(e in d) {
      if(d.hasOwnProperty(e)) {
        d[e].length = 0
      }
    }
    this.infants = {}
  };
  h.reattach = function(e) {
    this.detach();
    if(f.isNull(e)) {
      e = this.list
    }
    for(var d = this._options.nodeKey, b = this.map, a = e.length, c = 0;c < a;c++) {
      this.attachNode(b[e[c][d]])
    }
  };
  h.makeTree = function(e) {
    if(f.isNull(e)) {
      e = this.list
    }
    for(var d = 0, b = e.length;d < b;d++) {
      this.createNode(e[d])
    }
  };
  h.hasNode = function(e) {
    return f.isNotNull(e) && this.map.hasOwnProperty(e[this._options.nodeKey])
  };
  h.getNode = function(e) {
    return this.map[e[this._options.nodeKey]]
  };
  h.getNodeByNodeId = function(e) {
    return this.map[e]
  };
  h.createNode = function(e) {
    if(!this.hasNode()) {
      var d = e[this._options.nodeKey], e = new g({tree:this, data:e, nodeId:d});
      this.map[d] = e;
      this.attachNode(e);
      return e
    }
  };
  h.adoptInfants = function(e, d) {
    if(this.infants.hasOwnProperty(d)) {
      for(var b = this.infants[d], a = 0, c = b.length;a < c;a++) {
        e.addChild(b[a])
      }
      b.length = 0;
      delete this.infants[d]
    }
  };
  h.attachNode = function(e) {
    var d = e.nodeId, b = e.data[this._options.parentKey];
    this.adoptInfants(e, d);
    if(f.isNull(b) || b == d) {
      return this.root.addChild(e), !0
    }
    if(this.map.hasOwnProperty(b)) {
      return this.map[b].addChild(e), !0
    }
    this.addToInfants(e, b);
    return!1
  };
  h.changeNodeId = function(e, d, b) {
    if(d !== b) {
      delete this.map[d], this.map[b] = e, this.removeChildren(e), e.nodeId = e.data[this._options.nodeKey] = b, f.isNotNull(e.parent) && (e.parent.childrenMap[b] = e.parent.childrenMap[d], delete e.parent.childrenMap[d]), this.adoptInfants(e, b)
    }
  };
  h.changeParentId = function(e, d, b) {
    d !== b && (f.isNull(e.parent) && this.removeFromInfants(e, d), d = this.map[b], e.setParent(d), e.data[this._options.parentKey] = b, f.isNull(d) && this.addToInfants(e, b))
  };
  h.destroyNodeByData = function(e) {
    this.destroyNode(this.getNode(e))
  };
  h.destroyNode = function(e) {
    this.removeChildren(e);
    this.removeFromInfants(e);
    this.removeFromMap(e);
    e.destroyCompletely()
  };
  h.removeFromMap = function(e) {
    delete this.map[e.nodeId]
  };
  h.addToInfants = function(e, d) {
    this.infants.hasOwnProperty(d) || (this.infants[d] = []);
    this.infants[d].push(e)
  };
  h.removeFromInfants = function(e, d) {
    f.isNull(d) && (d = e.data[this._options.parentKey]);
    this.infants.hasOwnProperty(d) && (this.infants[d].remove(e), this.infants[d].length === 0 && delete this.infants[d])
  };
  h.removeChildren = function(e) {
    e.children.length !== 0 && (this.infants.hasOwnProperty(e.nodeId) || (this.infants[e.nodeId] = []), this.infants[e.nodeId].pushList(e.children), e.removeAllChildren())
  };
  h.sortList = function(e) {
    f.isNull(e) ? e = [] : e.length = 0;
    this.root.traverseChildren({fn:function() {
      e.push(this.data)
    }})
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "Grid.js"...');
jx.grid.Grid = {};
(function() {
  function g(c) {
    this.mid = c.mid;
    this.log("creating new Grid instance...", b);
    e.call(this, c)
  }
  var i = goog.getObjectByName("jx.grid"), f = goog.getObjectByName("jx.util"), h = goog.getObjectByName("echo"), e = goog.getObjectByName("jx.grid.BaseModule"), d = goog.getObjectByName("TimeWatch"), b = 1;
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
  g.V_INIT = b;
  goog.inherits(g, e);
  g.getInstance = function(c) {
    return new g(c)
  };
  var a = g.prototype;
  a._defaultOptions = function() {
    return{classGrid:"jgrid", border:"1px solid #868686", width:"", font:"15px Arial,Helvetica,sans-serif", style:"", borderSide:!0, imageUrl:"../images/", links:{data:"dataMgr.all", datalen:"dataMgr.all.length", shown:"dataMgr.datalist", set:"dataMgr.set", add:"dataMgr.add", addList:"dataMgr.addList", update:"dataMgr.update", updateByKey:"dataMgr.updateByKey", updateList:"dataMgr.updateList", remove:"dataMgr.remove", removeList:"dataMgr.removeList", select:"dataMgr.executeSelect", undo:"dataMgr.undo", 
    redo:"dataMgr.redo", addFilter:"dataMgr.addFilter", removeFilter:"dataMgr.removeFilter", check:"collapser.checkMgr.checkList checkMgr.checkList", checked:"collapser.checkMgr.getCheckList checkMgr.getCheckList", removeChecked:"collapser.checkMgr.removeChecked checkMgr.removeChecked", register:"event.register", trigger:"event.trigger", bind:"event.bind", unregister:"event.unregister", unbind:"event.unregister", commit:"editMgr.commit", cancelEdit:"editMgr.cancel", beginEdit:"editMgr.begin", collen:"colDefMgr.length"}, 
    autoWidth:!1, showMessage:!1}
  };
  a._init = function(c) {
    var a = this._ctnr = c.container, b = this._options, d;
    this.name = b.name;
    this._drag = !1;
    this._lastH = this._lastW = null;
    this._vars = {scrollbarDim:void 0};
    if(d = b.width) {
      if(typeof d === "number" || d.indexOf("%") === -1) {
        d += "px"
      }
    }else {
      d = ""
    }
    a = this._ctnr = $("<div id='" + this.mid + "' class='" + b.classGrid + "' " + (d ? "style='width:" + d + "' " : "") + "tabIndex='0'>").appendTo(Util$.safe$(a));
    this._vars.scrollbarDim = Util$.calScrollbarDims(a);
    d = this.event = i.create("EventManager", {grid:this, options:b.EventManager});
    this.colDefMgr = i.create("ColumnManager", {grid:this, colDefs:c.colDefs, options:b.ColDefManager});
    this.dataMgr = i.create("DataManager", {grid:this, datalist:c.datalist, options:b.DataManager});
    b.CheckManager && (this.checkMgr = i.create("CheckManager", {grid:this, options:b.CheckManager}));
    if(!b.MenuBar && (b.columnHideEnabled || b.SearchManager)) {
      b.MenuBar = {}
    }
    if(b.Collapser) {
      this.collapser = i.create("Collapser", {grid:this, options:b.Collapser}), this.collapser.__init()
    }
    b.ColGroup && (this.colGroup = i.create("ColumnGroup", {grid:this, options:b.ColGroup}));
    b.SelectionManager && (this.selMgr = i.create("SelectionManager", {grid:this, options:b.SelectionManager}));
    b.EditManager && (this.editMgr = i.create("EditManager", {grid:this, options:b.EditManager}));
    b.ColHeader && (this.header = i.create("ColumnHeader", {grid:this, container:a, options:b.ColHeader}));
    b.SearchManager && (this.search = i.create("SearchManager", {grid:this, container:a, options:b.SearchManager}));
    b.MenuBar && (this.menubar = i.create("MenuBar", {grid:this, container:a, options:b.MenuBar}));
    this.view = i.create("ViewportManager", {grid:this, container:a, options:b.ViewportManager});
    b.TooltipManager && (this.tooltip = i.create("TooltipManager", {grid:this, container:a, options:b.TooltipManager}));
    b.DataCreator && (this.creator = i.create("DataCreator", {grid:this, container:a, options:b.DataCreator}));
    b.Footer && (this.footer = i.create("Footer", {grid:this, container:a, options:b.Footer}));
    b.autoWidth && d.bind("onResizeCanvasWidth", this.width, this);
    this._createCss();
    d.trigger("onBeforeRenderModules", !1, !0);
    d.trigger("onRenderModules", !1, !0);
    d.trigger("onAfterRenderModules", !1, !0);
    this.msg = $("<div id='" + this.mid + "msg' class='msg' onmousedown='$(this).hide(1000)' style='position:relative;padding-left:4px;overflow:hidden;z-index:100;font-size:12px;height:21px;line-height:21px'></div>").appendTo(a).hide();
    this._busyShader = $('<div style="position:absolute;background:black;opacity:0.3;filter:alpha(opacity=30)"></div>').appendTo(a).hide();
    a = a[0];
    this._lastW = a.clientWidth;
    this._lastH = a.clientHeight;
    this._registerLinks(b.links)
  };
  a._bindEvents = function() {
    i._bindGlobalEvents();
    this.log("binding Grid events...", b);
    var c = this;
    this._ctnr.bind({keydown:function(a) {
      c._keydown(a)
    }, keyup:function(a) {
      c._keyup(a)
    }, keypress:function(a) {
      c._keypress(a)
    }, mousein:function(a) {
      c._mousein(a)
    }, mouseout:function(a) {
      c._mouseout(a)
    }, mouseenter:function(a) {
      c._mouseenter(a)
    }, mouseleave:function(a) {
      c._mouseleave(a)
    }, mouseover:function(a) {
      c._mouseover(a)
    }, mousedown:function(a) {
      c._mousedown(a)
    }, click:function(a) {
      c._click(a)
    }, dblclick:function(a) {
      c._dblclick(a)
    }});
    this._charts = []
  };
  a.destroy = function() {
    this.log("destroying Grid...", b);
    try {
      var c = i.grids.indexOf(this);
      c > -1 && i.grids.splice(c, 1);
      this.name != null && delete i.gridMap[this.name];
      this.log("event:beforeDispose.", b);
      this.dispatchEvent({type:"beforeDispose"});
      f.isEmptyObj(i.m.Grid) && (this.log("unbinding global event handlers.", b), i._unbindGlobalEvents());
      this.log("event:onDestroy.", b);
      this.event.trigger("onDestroy", !1, !0);
      this.log("destroying grid vars...", b);
      i._destroy(this, {name:"Grid", module:"event", $:"_ctnr", map:"_options", style:"_style _dynStyle"});
      this.dispose()
    }catch(a) {
      return this.log(a.stack), a
    }
  };
  a._registerLinks = function(c) {
    var a, b, d, e, g, h, i, l, n, q;
    a:for(a in c) {
      if(c.hasOwnProperty(a) && !(a in this)) {
        b = f.split(c[a]);
        d = b.length;
        e = 0;
        b:for(;e < d;e++) {
          if(g = b[e].split("."), h = g.length, !(h < 1)) {
            i = this;
            l = this;
            n = "";
            for(q = 0;q < h;q++) {
              if(g[q] in i) {
                l = i, i = i[n = g[q]]
              }else {
                continue b
              }
            }
            this._registerLink(a, i, l, n);
            continue a
          }
        }
      }
    }
  };
  a._registerLink = function(c, a, b, d) {
    if(this.hasOwnProperty(c)) {
      return!1
    }
    this[c] = f.isFunction(a) ? function() {
      return a.apply(b, arguments)
    } : function() {
      return b[d]
    };
    return!0
  };
  a._createCss = function() {
    this.log("creating CSS...", b);
    var c = {type:"beforeCreateCss", css:[]}, a = this._options, d = this.event;
    this.dispatchEvent(c);
    this.log("creating CSS for Grid...", b);
    var e = d.trigger("onCreateCss"), e = e ? e.join("") : "", c = f.sprint("%selector%{overflow:hidden;height:100%;font:%font%;%border%%style%}%submodule%", {selector:"#" + this.mid, position:"relative", font:a.font, border:a.borderSide ? "border:" + a.border + ";" : "border-top:" + a.border + ";border-bottom:" + a.border + ";", style:a.style, submodule:c.css.join("") + e});
    this._style = f.createStyle(c);
    c = {type:"beforeCreateDynamicCss", css:[]};
    this.dispatchEvent(c);
    e = (e = d.trigger("onCreateDynamicCss")) ? e.join("") : "";
    this._dynStyle = f.createStyle(c.css.join("") + ";" + e)
  };
  a._recreateDynamicCss = function() {
    this.log("rewriting dynamic css...", 2);
    var c = this.event.trigger("onCreateDynamicCss");
    (c = c ? c.join("") : "") && f.setStyle(this._dynStyle, c)
  };
  a._keydown = function(c) {
    var a = this.event, b = [c], d = c.which;
    this.log("UI event:keydown detected. event=" + c.type + ", keycode=" + d, 3);
    a.triggerInvalid("onBeforeKeydown", b) ? this.log("UI event:keydown prevented.", 3) : (a.trigger("keydown_" + d, b, !0), a.trigger("keydown", b, !0))
  };
  a._keyup = function(c) {
    var a = this.event, b = [c], d = c.which;
    this.log("UI event:keyup detected. event=" + c.type + ", keycode=" + d, 3);
    a.triggerInvalid("onBeforeKeyup", b) ? this.log("UI event:keyup prevented.", 3) : (a.trigger("keyup_" + d, b, !0), a.trigger("keyup", b, !0))
  };
  a._keypress = function(c) {
    var a = this.event, b = [c], d = c.which;
    this.log("UI event:keypress detected. event=" + c.type + ", keycode=" + d, 3);
    a.triggerInvalid("onBeforeKeypress", b) ? this.log("UI event:keypress prevented.", 3) : (a.trigger("keypress_" + d, b, !0), a.trigger("keypress", b, !0))
  };
  a._mousein = function(c) {
    var a = this.event, b = [c];
    this.log("UI event:mousein detected. event=" + c.type, 4);
    a.triggerInvalid("onBeforeMousein", b) ? this.log("UI event:mousein prevented.", 4) : (this._drag && a.trigger("dragin", b, !0), a.trigger("mousein", b, !0))
  };
  a._mouseout = function(c) {
    var a = this.event, b = [c];
    this.log("UI event:mouseout detected. event=" + c.type, 4);
    a.triggerInvalid("onBeforeMouseout", b) ? this.log("UI event:mouseout prevented.", 4) : (this._drag && a.trigger("dragout", b, !0), a.trigger("mouseout", b, !0))
  };
  a._mouseenter = function(c) {
    var a = this.event, b = [c];
    this.log("UI event:mouseenter detected. event=" + c.type, 3);
    a.triggerInvalid("onBeforeMouseenter", b) ? this.log("UI event:mouseenter prevented.", 3) : (this._drag && a.trigger("dragenter", b, !0), a.trigger("mouseenter", b, !0))
  };
  a._mouseleave = function(c) {
    var a = this.event, b = [c];
    this.log("UI event:mouseleave detected. event=" + c.type, 3);
    a.triggerInvalid("onBeforeMouseleave", b) ? this.log("UI event:mouseleave prevented.", 3) : (this._drag && a.trigger("dragleave", b, !0), a.trigger("mouseleave", b, !0))
  };
  a._mousemove = function(c) {
    var a = this.event, b = [c];
    this.log("UI event:mousemove detected. event=" + c.type, 5);
    a.triggerInvalid("onBeforeMousemove", b) ? this.log("UI event:mousemove prevented.", 5) : (this._drag && a.trigger("dragmove", b, !0), a.trigger("mousemove", b, !0))
  };
  a._mouseover = function(c) {
    var a = this.event, b = [c];
    this.log("UI event:mouseover detected. event=" + c.type, 4);
    a.triggerInvalid("onBeforeMouseover", b) ? this.log("UI event:mouseover prevented.", 4) : (this._drag && a.trigger("dragover", b, !0), a.trigger("mouseover", b, !0))
  };
  a._mousedown = function(c) {
    var a = this.event, b = [c];
    this.log("UI event:mousedown detected. event=" + c.type, 3);
    this._drag = !0;
    a.triggerInvalid("onBeforeMousedown", b) ? this.log("UI event:mousedown prevented.", 3) : a.trigger("mousedown", b, !0)
  };
  a._mouseup = function(c) {
    var a = this.event, b = [c];
    this.log("UI event:mouseup detected. event=" + c.type, 3);
    this._drag = !1;
    a.trigger("unsetDrag", !1, !0);
    this.containsEvent(c) && (a.triggerInvalid("onBeforeMouseup", b) ? this.log("UI event:mouseup prevented.", 3) : a.trigger("mouseup", b, !0))
  };
  a._click = function(c) {
    var a = this.event, b = [c];
    this.log("UI event:click detected. event=" + c.type, 2);
    a.triggerInvalid("onBeforeClick", b) ? this.log("UI event:click prevented.", 2) : a.trigger("click", b, !0)
  };
  a._dblclick = function(c) {
    var a = this.event, b = [c];
    this.log("UI event:dblclick detected. event=" + c.type, 2);
    a.triggerInvalid("onBeforeDblclick", b) ? this.log("UI event:dblclick prevented.", 2) : a.trigger("dblclick", b, !0)
  };
  a._resize = function(c) {
    var a = this.event;
    this.log("event:resize detected. event=" + c.type, 2);
    var b = !1, d = this._ctnr, e = d[0], f = this._lastW, g = this._lastH, h = e.clientWidth || d.width(), d = e.clientHeight || d.height();
    if(h >= 1 && f !== h) {
      this.log("event:resizeWidth detected. " + f + "->" + h, 2), a.trigger("resizeWidth", [h, f], !0), this._lastW = h, b = !0
    }
    if(d >= 1 && g !== d) {
      this.log("event:resizeHeight detected. " + g + "->" + d, 2), a.trigger("resizeHeight", [d, g], !0), this._lastH = d, b = !0
    }
    b && a.trigger("resize", [c], !0)
  };
  a.width = function(c) {
    var a = this._ctnr[0], b = a.clientWidth, d = this.event;
    if(!c) {
      return b
    }
    typeof c != "number" && (c = parseInt(c, 10));
    if(c < 1 || c === b || !isFinite(c)) {
      return b
    }
    this.log("set width. " + this._lastW + "->" + c, 2);
    a.style.width = c + "px";
    d.trigger("resizeWidth", [c, this._lastW], !0);
    this._lastW = c;
    d.trigger("resize", !1, !0);
    return c
  };
  a.height = function(c) {
    var a = this._ctnr[0], b = a.clientHeight, d = this.event;
    if(!c) {
      return b
    }
    typeof c != "number" && (c = parseInt(c, 10));
    if(c < 1 || c === b || !isFinite(c)) {
      return b
    }
    this.log("set height. " + this._lastH + "->" + c, 2);
    a.style.height = c + "px";
    d.trigger("resizeHeight", [c, this._lastH], !0);
    this._lastH = c;
    d.trigger("resize", !1, !0);
    return c
  };
  a.syncScroll = function() {
    this.view._scroll()
  };
  a.getCellByIdAndKey = function(c, a) {
    if(c == null || a == null) {
      return null
    }
    var b = this.dataMgr.getById(c);
    if(!b) {
      return null
    }
    var d = this.colDefMgr.getByKey(a);
    return!d ? null : i.create("Cell", {grid:this, datarow:b, colDef:d})
  };
  a.getCellByIdx = function(c, a) {
    if(c == null || a == null) {
      return null
    }
    var b = this.dataMgr.getByIdx(c);
    if(!b) {
      return null
    }
    var d = this.colDefMgr.get(a);
    return!d ? null : i.create("Cell", {grid:this, datarow:b, colDef:d})
  };
  a.busy = function() {
    if(this._busyShader && !this._busy) {
      var c = this._ctnr, a = c.offset(), b = c[0], c = b.clientWidth + 1, b = b.clientHeight + 1, d = this._busyShader, e = d[0].style;
      e.top = a.top + "px";
      e.left = a.left + "px";
      e.width = c + "px";
      e.height = b + "px";
      d.show()
    }
    this._busy = !0
  };
  a.idle = function() {
    this._busyShader && this._busy && this._busyShader.hide();
    this._busy = !1
  };
  a.error = function(c) {
    for(var a = i.error[c], b = 1, d = arguments.length;b < d;b++) {
      a = a.replace(RegExp("%" + (b - 1), "g"), arguments[b])
    }
    a = Error(a);
    a.code = c;
    this.printError(a.message);
    this.log("error occurred... code=" + c + ", msg=" + a.message || a.msg);
    this.event.trigger("onError", [a], !0);
    return a
  };
  a.printError = function(c) {
    this.log("error message... msg=" + c);
    if(this._options.showMessage) {
      var a = this.msg, b = a[0], d = b.style;
      b.innerHTML = c;
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
  a.printMessage = function(c) {
    this.log("message... msg=" + c);
    if(this._options.showMessage) {
      var a = this.msg, b = a[0], d = b.style;
      b.innerHTML = c;
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
  a.containsEvent = function(c) {
    return f.contains(this._ctnr[0], c.target)
  };
  a.getChart = function(c) {
    return this._charts[c]
  };
  a.log = function(c, a) {
    2 >= (a || 0) && h("Grid[" + this.mid + "]: " + c)
  };
  a.twstart = function(c) {
    this._tw = new d(c)
  };
  a.twlap = function(c) {
    this._tw.lap(c)
  };
  a.twstop = function(c) {
    this._tw.stop(c)
  };
  a.twreset = function(c) {
    this._tw.reset(c)
  };
  a.twprint = function() {
    this.log(this._tw)
  };
  a.getShownColumns = function() {
    return this.colDefMgr.get().filter(function(c) {
      return c.width > 0
    })
  };
  a.chart = function(c, a, d, e, f, g) {
    this.log("creating chart... type=" + a + ", columns=[" + d.join(",") + "]", b);
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
    var l = this, n = this.colDefMgr, q = this.dataMgr, s = d.map(function(c) {
      if(c = n.getByKey(c)) {
        return c
      }
      throw Error("column key not found");
    }), t = q.exportToArray(d, f, g);
    google.setOnLoadCallback(function() {
      for(var b = new google.visualization.DataTable, h = 0, o = s.length, n, y;h < o;h++) {
        n = s[h];
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
        b.addColumn(y || t[0] && t[0][h] != null && typeof t[0][h] || h === 0 && "string" || "number", n.name)
      }
      b.addRows(t);
      var z = l._charts[c] = new google.visualization[i](document.getElementById(c));
      z.draw(b, e);
      l.event.bind("onAfterRefresh", function() {
        l.log("redrawing chart... type=" + a + ", columns=[" + d.join(",") + "]", 2);
        b.removeRows(0, b.getNumberOfRows());
        b.addRows(q.exportToArray(d, f, g));
        z.draw(b, e)
      });
      l.event.trigger("onChartLoaded", [z, b], !0)
    })
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "SelectionManager.js"...');
jx.grid.SelectionManager = {};
(function() {
  function g(b) {
    this.mid = b.mid;
    this.grid = b.grid;
    this.grid.selMgr = this;
    this._options = i._extend({rowSelKey:this.grid.dataMgr.idKey, bgColorSelection:"#DCEBFE", bgColorLast:"#f1ca7f", bgColorRange:"#D9D9D9", classSelection:"jgrid-selection", classLast:"selection-last", classRange:"selection-range", multiSelectEnabled:!1, classRowSelected:"rowSelected", highlightRowEnabled:!0, bgColorRowSelected:"#d8dfea"}, b.options);
    this._consts = {_UP:1, _DOWN:2, _LEFT:3, _RIGHT:4, _PGDN:5, _PGUP:6, _HOME:7, _END:8, _NAVKEYS:{}};
    this._consts._NAVKEYS = f.which(["enter", "tab", "arrow", "pgdn", "pgup", "home", "end"]);
    this._rows = {length:0};
    this._cols = {length:0};
    this.__init()
  }
  var i = goog.getObjectByName("jx.grid"), f = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var h = goog.getObjectByName("jx.grid.Grid"), e = goog.getObjectByName("jx.grid.Cell");
  goog.exportSymbol("jx.grid.SelectionManager", g);
  g.getInstance = function(b) {
    return new g(b)
  };
  var d = g.prototype;
  d.__init = function() {
    this.bindEvents()
  };
  d.bindEvents = function() {
    this.grid.event.bind({onAfterSetDatalist:this.empty, onGetCellClass:this._onGetCellClass, onCreateCss:this._onCreateCss, onDestroy:this._destroy, keydownCanvas:this._keydownCanvas, dragoverCanvas:this._dragoverCanvas, mousedownCanvas:this._mousedownCanvas, onBeforeRerender:this._onBeforeRerender, onAfterRerender:this.onAfterRerender, onBeforeDataChange:this.onBeforeDataChange}, this)
  };
  d._destroy = function() {
    this.grid.log("destroying SelectionManager instance...", h.V_INIT);
    i._deleteMap(this._consts, "_NAVKEYS");
    var b, a = this._rows, c = this._cols;
    for(b in a) {
      a.hasOwnProperty(b) && b !== "length" && i._deleteMap(a, b)
    }
    for(b in c) {
      c.hasOwnProperty(b) && b !== "length" && i._deleteMap(c, b)
    }
    i._destroy(this, {name:"SelectionManager", path:"selMgr", map:"_rows _cols _range _last _consts _options"})
  };
  d._onCreateCss = function() {
    var b = this.grid.event.trigger("onBeforeCreateSelCss"), a = "#" + this.grid.mid + " .", c = this._options, b = b || [];
    c.highlightRowEnabled === !0 && b.push(a + c.classRowSelected + " > *{background:" + c.bgColorRowSelected + "}");
    c.multiSelectEnabled === !0 && (b.push(a + c.classSelection + "{background:" + c.bgColorSelection + "}"), b.push(a + c.classRange + "{background:" + c.bgColorRange + "}"));
    b.push(a + c.classLast + "{background:" + c.bgColorLast + "}");
    return b.join("\n")
  };
  d._onGetCellClass = function(b, a, c, d) {
    var e = "", f = this._last, g = this._range, h = this._rows, i = this._options;
    f && f.getDatarow() === c && f.getColDef() === d && (e += i.classLast);
    i.multiSelectEnabled === !0 && (g && g.getDatarow() === c && g.getColDef() === d && (e += " " + i.classRange), h.hasOwnProperty(b) && h[b].hasOwnProperty(a) && (e += " " + i.classSelection));
    return e
  };
  d._mousedownCanvas = function(b, a) {
    if(!this._last || !this._last.equals(a)) {
      this.grid.event.trigger("onBeforeSelect", [b, a], !0), this._options.multiSelectEnabled === !1 ? this.selectCell(a) : b.shiftKey && this._last && this._range ? this.selectRange(a) : b.ctrlKey ? a.getKey() === this._options.rowSelKey ? this.addRow(a) : this.addCell(a) : this.selectCell(a)
    }
  };
  d._dragoverCanvas = function(b, a) {
    this._options.multiSelectEnabled === !1 ? this.selectCell(a) : this._last && this._range && this.selectRange(a)
  };
  d._keydownCanvas = function(b) {
    var a = this._last, c = b.which, d = this.grid.event;
    if(this._consts._NAVKEYS[c]) {
      if(!d.triggerInvalid("onBeforeNavigate", [b])) {
        var e;
        b.preventDefault();
        switch(c) {
          case f.keyMapKeydown.tab:
            e = b.shiftKey ? this._idxToCell(this._consts._LEFT, a) : this._idxToCell(this._consts._RIGHT, a);
            this.selectCell(e);
            break;
          case f.keyMapKeydown.enter:
            e = b.shiftKey ? this._idxToCell(this._consts._UP, a) : this._idxToCell(this._consts._DOWN, a);
            this.selectCell(e);
            break;
          case f.keyMapKeydown.up:
            this._options.multiSelectEnabled && b.shiftKey ? (e = this._idxToCell(this._consts._UP, this._range), this.selectRange(e)) : (e = this._idxToCell(this._consts._UP, a), this.selectCell(e));
            break;
          case f.keyMapKeydown.down:
            this._options.multiSelectEnabled && b.shiftKey ? (e = this._idxToCell(this._consts._DOWN, this._range), this.selectRange(e)) : (e = this._idxToCell(this._consts._DOWN, a), this.selectCell(e));
            break;
          case f.keyMapKeydown.left:
            this._options.multiSelectEnabled && b.shiftKey ? (e = this._idxToCell(this._consts._LEFT, this._range), this.selectRange(e)) : (e = this._idxToCell(this._consts._LEFT, a), this.selectCell(e));
            break;
          case f.keyMapKeydown.right:
            this._options.multiSelectEnabled && b.shiftKey ? (e = this._idxToCell(this._consts._RIGHT, this._range), this.selectRange(e)) : (e = this._idxToCell(this._consts._RIGHT, a), this.selectCell(e));
            break;
          case f.keyMapKeydown.pgup:
            this._options.multiSelectEnabled && b.shiftKey ? (e = this._idxToCell(this._consts._PGUP, this._range), this.selectRange(e)) : (e = this._idxToCell(this._consts._PGUP, a), this.selectCell(e));
            break;
          case f.keyMapKeydown.pgdn:
            this._options.multiSelectEnabled && b.shiftKey ? (e = this._idxToCell(this._consts._PGDN, this._range), this.selectRange(e)) : (e = this._idxToCell(this._consts._PGDN, a), this.selectCell(e));
            break;
          case f.keyMapKeydown.space:
            e = b.shiftKey ? this._idxToCell(this._consts._PGUP, a) : this._idxToCell(this._consts._PGDN, a);
            this.selectCell(e);
            break;
          case f.keyMapKeydown.home:
            this._options.multiSelectEnabled && b.shiftKey ? (e = this._idxToCell(this._consts._HOME, this._range), this.selectRange(e)) : (e = this._idxToCell(this._consts._HOME, a), this.selectCell(e));
            break;
          case f.keyMapKeydown.end:
            this._options.multiSelectEnabled && b.shiftKey ? (e = this._idxToCell(this._consts._END, this._range), this.selectRange(e)) : (e = this._idxToCell(this._consts._END, a), this.selectCell(e))
        }
        d.trigger("onAfterNavigate", [e], !0)
      }
    }else {
      if(this._cols.length === 1) {
        var m, g = this.grid.colDefMgr, h, i = this._cols;
        e = [b, null, a];
        for(h in i) {
          if(i.hasOwnProperty(h) && h !== "length") {
            m = g.get(h).key, m = "keydownColSel_" + m, e[1] = i[h], d.trigger(m + "_" + keycode, e, !0), d.trigger(m, e, !0)
          }
        }
      }
      if(this._rows.length === 1) {
        var p;
        h = this._rows;
        e = [b, null, a];
        for(p in h) {
          h.hasOwnProperty(p) && p !== "length" && (e[1] = h[p], d.trigger("keydownRowSel_" + keycode, e, !0), d.trigger("keydownRowSel", e, !0))
        }
      }
      e = [b, this._rows, this._cols];
      d.trigger("keydownSel_" + c, e, !0);
      d.trigger("keydownSel", e, !0)
    }
  };
  d.getCell = function() {
    return this._last || null
  };
  d._isSelected = function(b) {
    return b && this._last && this._last.equals(b)
  };
  e.prototype.isSelected = function() {
    return this.grid.selMgr._isSelected(this)
  };
  d._getCellIdxToNavigate = function(b, a, c) {
    switch(b) {
      case this._consts._RIGHT:
        c < this.grid.colDefMgr.length() - 1 && c++;
        break;
      case this._consts._LEFT:
        c > 0 && c--;
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
    return[a, c]
  };
  d._idxToCell = function(b, a) {
    var c = this._getCellIdxToNavigate(b, a.getRowIdx(), a.getColIdx());
    return i.create("Cell", {grid:this.grid, row:c[0], col:c[1]})
  };
  d.selectRow = function(b) {
    var a = b.getRowIdx(), c = b.getColIdx();
    this._setRange(a, c, b);
    this._setLast(a, c, b);
    this._setSelMap(this._getRowMap(a, c, b))
  };
  d.selectCell = function(b, a) {
    this.grid.event.trigger("onBeforeSelectCell", [b], !0);
    if(this._options.multiSelectEnabled && b.getKey() === this._options.rowSelKey) {
      this.selectRow(b)
    }else {
      var c = b.getRowIdx(), d = b.getColIdx();
      this._setRange(c, d, b, a);
      this._setLast(c, d, b);
      this._setSelMap(this._getCellMap(c, d, b))
    }
    this.grid.event.trigger("onAfterSelectCell", [b], !0)
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
  d.addRow = function(b) {
    var a = b.getRowIdx(), c = b.getColIdx();
    this._setRange(a, c, b);
    this._setLast(a, c, b);
    this._addSelMap(this._getRowMap(a, c, b))
  };
  d.addCell = function(b) {
    var a = b.getRowIdx(), c = b.getColIdx();
    this._setRange(a, c, b);
    this._setLast(a, c, b);
    this._addSelMap(this._getCellMap(a, c, b))
  };
  d.selectRange = function(b) {
    var a = b.getRowIdx(), c = b.getColIdx(), d = this._last.getRowIdx(), e = this._last.getColIdx(), f = d < a ? d : a, d = d < a ? a : d, g;
    this._setRange(a, c, b);
    b.getKey() === this._options.rowSelKey ? (g = 0, e = this.grid.colDefMgr.length() - 1) : (g = e < c ? e : c, e = e < c ? c : e);
    this._setSelMap(this._getRangeMap(f, g, d, e, a, c, b));
    return{minRow:f, minCol:g, maxRow:d, maxCol:e}
  };
  d._setLast = function(b, a, c) {
    var a = this._last, d;
    a && (d = a.getRowIdx(), b !== d && this._range && d !== this._range.getRowIdx() && this.grid.view.unlockRowById(a.getId()), a.get$().removeClass(this._options.classLast), this._options.highlightRowEnabled === !0 && $(a.getRowNode()).removeClass(this._options.classRowSelected), c || delete this._last);
    if(c) {
      (this._last = c).get$().addClass(this._options.classLast), this._options.highlightRowEnabled === !0 && $(c.getRowNode()).addClass(this._options.classRowSelected), this.grid.view.lockRowByIdx(b)
    }
  };
  d._setRange = function(b, a, c, d) {
    var e = this._range;
    if(e) {
      var f = e.getRowIdx();
      if(b === f && a === e.getColIdx()) {
        return
      }
      b !== f && this._last && f !== this._last.getRowIdx() && this.grid.view.unlockRowById(e.getId());
      e.get$().removeClass(this._options.classRange);
      c || delete this._range
    }
    if(c) {
      (this._range = c).get$().addClass(this._options.classRange), c = this.grid.view, c.lockRowByIdx(b), d || c.scrollToLazy(b, a)
    }
  };
  d._addSelMap = function(b) {
    var a = this._rows, c, d, f, g;
    for(f in b) {
      if(b.hasOwnProperty(f) && (d = b[f], a.hasOwnProperty(f))) {
        for(g in c = a[f], d) {
          d.hasOwnProperty(g) && c.hasOwnProperty(g) && (d[g] instanceof e && (c[g] = d[g]), delete d[g])
        }
      }
    }
    this.addOrRemoveCss({}, !0);
    this._addToMaps(b)
  };
  d._setSelMap = function(b) {
    var a = this._rows, c, d, f, g, h = {};
    for(f in a) {
      if(a.hasOwnProperty(f) && f !== "length") {
        if(c = a[f], b.hasOwnProperty(f)) {
          for(g in d = b[f], c) {
            c.hasOwnProperty(g) && g !== "length" && (d.hasOwnProperty(g) ? (d[g] instanceof e && (c[g] = d[g]), delete d[g]) : (h.hasOwnProperty(f) || (h[f] = {}), h[f][g] = !0))
          }
        }else {
          for(g in d = h[f] = {}, c) {
            c.hasOwnProperty(g) && g !== "length" && (d[g] = !0)
          }
        }
      }
    }
    this._removeFromMaps(h);
    this.addOrRemoveCss({}, !1);
    this._addSelMap(b)
  };
  d.addOrRemoveCss = function(b, a) {
    var c = [], d, f, g, h = this.grid.view;
    for(d in b) {
      if(b.hasOwnProperty(d)) {
        for(f in g = b[d], g) {
          g.hasOwnProperty(f) && (g[f] instanceof e ? c.push(g[f].getNode()) : c.push(h.getCell(d, f)))
        }
      }
    }
    c = c.filter(function(c) {
      return c
    });
    a ? $(c).addClass(this._options.classSelection) : $(c).removeClass(this._options.classSelection)
  };
  d._addToMaps = function(b) {
    var a, c, d, e = this._rows, f = this._cols, g;
    for(a in b) {
      if(b.hasOwnProperty(a)) {
        for(c in g = b[a], g) {
          g.hasOwnProperty(c) && (d = (d = g[c]) ? !0 : d, e.hasOwnProperty(a) ? e[a].length++ : (e[a] = {length:1}, e.length++), e[a][c] = d, f.hasOwnProperty(c) ? f[c].length++ : (f[c] = {length:1}, f.length++), f[c][a] = d)
        }
      }
    }
  };
  d._removeFromMaps = function(b) {
    var a, c, d = this._rows, e = this._cols, f;
    for(a in b) {
      if(b.hasOwnProperty(a)) {
        for(c in f = b[a], f) {
          f.hasOwnProperty(c) && (--d[a].length === 0 ? (delete d[a], d.length--) : delete d[a][c], --e[c].length === 0 ? (delete e[c], e.length--) : delete e[c][a])
        }
      }
    }
  };
  d._getCellMap = function(b, a, c) {
    var d = {};
    d[b] = {};
    d[b][a] = c;
    return d
  };
  d._getRowMap = function(b, a, c) {
    var d = {}, e = this.grid.colDefMgr.length(), f = 0;
    for(d[b] = {};f < e;f++) {
      d[b][f] = !0
    }
    d[b][a] = c;
    return d
  };
  d._getRangeMap = function(b, a, c, d, e, f, g) {
    for(var h = {}, i;b <= c;b++) {
      h[b] = {};
      for(i = a;i <= d;i++) {
        h[b][i] = !0
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
  function g(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    this.grid.editMgr = this;
    this._options = f._extend({classEdit:"jgrid-edit", classCellEditable:"jgrid-editable", classCellNotEditable:"jgrid-notEditable", editableBgEnabled:!1, notEditableBgEnabled:!1, editableBg:"#FFF", notEditableBg:"#F6F6F6", deleteEnabled:!1, editIconEnabled:!0, urlEditIcon:this.grid._options.imageUrl + "editable-small.png", classEditIcon:"edit-icon", editIconWidth:12, editIconPadding:3, basicBackground:"#FFF9D7", classSuccess:"edit-success", successBackground:"#cdf7b6", classFailure:"edit-failure", 
    failureBackground:"#ff0000"}, a.options);
    this._beginEditKeys = h.which(["number", "alphabet", "del", "backspace"]);
    this.__init()
  }
  function i(a) {
    for(var c in a) {
      a.hasOwnProperty(c) && (this[c] = a[c])
    }
  }
  var f = goog.getObjectByName("jx.grid"), h = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var e = goog.getObjectByName("jx.grid.Grid"), d = goog.getObjectByName("jx.grid.Cell");
  goog.exportSymbol("jx.grid.EditManager", g);
  goog.exportSymbol("jx.grid.Editor", i);
  g.getInstance = function(a) {
    return new g(a)
  };
  var b = g.prototype;
  b.__init = function() {
    this.bindEvents()
  };
  b.bindEvents = function() {
    var a = {onGetColCellClass:this._onGetColCellClass, keydownCanvas:this._keydownCanvas, onDestroy:this._destroy, dblclickCanvas:this._dblclickCanvas, onCreateDynamicCss:this.onCreateDynamicCss, "onBeforeNavigate onBeforeRefresh onBeforeSelect":this.commit, onBeforeFocusCanvas:this.notActive};
    h.isNull(this.grid.selMgr) ? a.onCreateCss = this._onBeforeCreateSelCss : a.onBeforeCreateSelCss = this._onBeforeCreateSelCss;
    if(this._options.deleteEnabled) {
      a["keydownSel_" + h.keyMapKeydown.del] = this._deleteContents
    }
    if(this._options.editIconEnabled) {
      for(var c = this.grid.colDefMgr.get(), b = c.length, d = 0;d < b;d++) {
        if(h.isNotNull(c[d].editor)) {
          a["onRenderHeader_" + c[d].key + "_prepend"] = this._onRenderHeader
        }
      }
    }
    this.grid.event.bind(a, this)
  };
  b._destroy = function() {
    this.grid.log("destroying EditManager instance...", e.V_INIT);
    this._deleteEditor();
    f._destroy(this, {name:"EditManager", path:"editMgr", map:"_beginEditKeys _options"})
  };
  b._onBeforeCreateSelCss = function() {
    var a = "#" + this.grid.mid + " .", c = this._options, b = [], d = this.grid.view._getRowInnerHeight();
    b.push(this.grid.view._getCellSelector() + "." + c.classEdit + "{background:" + c.basicBackground + "}");
    b.push(a + c.classEdit + " input{position:absolute;z-index:10;top:0;padding:0;border:0;margin:0;background:" + c.basicBackground + ";height:" + d + "px;line-height:" + d + "px}");
    c.editableBgEnabled && b.push(a + c.classCellEditable + "{background:" + c.editableBg + "}");
    c.notEditableBgEnabled && b.push(a + c.classCellNotEditable + "{background:" + c.notEditableBg + "}");
    c.editIconEnabled && b.push(a + c.classEditIcon + "{float:left;position:absolute;left:0;top:0;padding:0 " + c.editIconPadding + "px;width:" + c.editIconWidth + "px;height:" + d + "px;background:url(" + c.urlEditIcon + ") no-repeat center transparent}");
    b.push(a + c.classSuccess + "{background:" + c.successBackground + "}");
    b.push(a + c.classFailure + "{background:" + c.failureBackground + "}");
    return b.join("")
  };
  b.onCreateDynamicCss = function() {
    for(var a = this.grid.view._getCellSelector(), c = this.grid.view._getPadding(), b = this.grid.colDefMgr.get(), d = 0, e = "";d < b.length;d++) {
      h.isNotNull(b[d].editor) && (e += a + ".k_" + b[d].key + " .basic-editor{width:" + (b[d].width - 2 * c) + "px}")
    }
    return e
  };
  b._onRenderHeader = function(a) {
    a.push("<span class='" + this._options.classEditIcon + "'></span>")
  };
  b._onRenderCell = function(a, c, b, d, e) {
    this.grid.dataMgr.isReal(b) && e.push("<span class='" + this._options.classEditIcon + "' title='클릭하여 에디팅을 시작합니다' onclick='JGM.m.EditManager." + this.mid + '.beginEdit("' + b[this.grid.dataMgr.idKey] + '","' + d.key + "\")'></span>")
  };
  b.cancelMouseEvent = function(a) {
    return!h.hasTagAndClass(a.target, "DIV", this._options.classEditIcon)
  };
  b.beginEdit = function(a, c) {
    this.begin(f.create("Cell", {grid:this.grid, datarow:this.grid.dataMgr.getById(a), colDef:this.grid.colDefMgr.getByKey(c)}))
  };
  b._dblclickCanvas = function(a, c) {
    c.isEdited() || this.begin(c)
  };
  b._keydownCanvas = function(a) {
    this.active() ? a.which === h.keyMapKeydown.esc && this.cancel() : !a.ctrlKey && !a.altKey && h.isNotNull(this.grid.selMgr) && (a.which === h.keyMapKeydown.del && this._options.deleteEnabled ? this._deleteContent(this.grid.selMgr.getCell()) : this._beginEditKeys[a.which] ? this.begin(this.grid.selMgr.getCell()) : a.which === h.keyMapKeydown.f2 && (a.preventDefault(), this.begin(this.grid.selMgr.getCell())))
  };
  b.active = function() {
    return!!this.editor
  };
  b.notActive = function() {
    return h.isNull(this.editor)
  };
  b._isEdited = function(a) {
    return this.active() && this.editor.cell && this.editor.cell.equals(a)
  };
  b._onGetColCellClass = function(a) {
    return h.isNotNull(a.editor) ? this._options.classCellEditable : this._options.classCellNotEditable
  };
  d.prototype.isEdited = function() {
    return this.grid.editMgr._isEdited(this)
  };
  d.prototype.setValue = function(a) {
    var c = this.getDatarow(), b = this.getKey(), d;
    h.isNotNullAnd(c, b) && (d = this.grid.dataMgr.updateByKey(c, b, a, {noSort:!0, noFilter:!0, noRerender:!0}), d === !0 && this.grid.view.rerenderRow(c));
    return d
  };
  b.isEditable = function(a) {
    if(a) {
      var c = a.getColDef();
      if(c && c.editor) {
        return(a = a.getDatarow()) && this.grid.dataMgr.isReal(a)
      }
    }
    return!1
  };
  b.begin = function(a) {
    this.active() && this.commit();
    if(this.isEditable(a)) {
      var c = a.getNode();
      if(c) {
        var b = this.editor = a.getColDef().editor;
        b.cell = a;
        b.grid = this.grid;
        b.before = c.innerHTML;
        c.innerHTML = b.edit(a.getValue());
        a.get$().addClass(this._options.classEdit);
        b.focus()
      }
    }
  };
  b.cancel = function() {
    if(this.active()) {
      var a = this.editor.cell;
      if(a) {
        var c = a.getNode();
        if(c) {
          c.innerHTML = this.editor.before, a.get$().removeClass(this._options.classEdit)
        }
      }
      this._deleteEditor();
      this.grid.view.focus()
    }
  };
  b._deleteEditor = function() {
    h.isNotNull(this.editor) && (delete this.editor.grid, delete this.editor.cell, delete this.editor.before, delete this.editor)
  };
  b.commit = function() {
    if(!this._beingCommitted && this.active()) {
      this._beingCommitted = !0;
      var a = this.editor.cell;
      if(a) {
        var c = a.getNode();
        if(c) {
          if(c = this.editor.value(c), c == null || c == a.getValue()) {
            this.cancel()
          }else {
            var c = a.setValue(c), b, d = a.get$();
            c instanceof Error ? (this.cancel(), b = this._options.classFailure) : (this._deleteEditor(), this.grid.view.focus(), this.grid.printMessage("Successfully Updated."), b = this._options.classSuccess);
            d.addClass(b);
            setTimeout(function() {
              d.removeClass(b)
            }, 1E3)
          }
        }
      }
      this._beingCommitted = !1
    }
  };
  b._deleteContent = function(a) {
    if(!this.active() && this.isEditable(a)) {
      var c = a.getColDef();
      a.getValue() !== c.defaultValue && a.setValue(c.defaultValue)
    }
  };
  b._deleteContents = function(a, c, b) {
    if(!this.active()) {
      var a = {}, c = {}, d = [], e, f, g, i, p, l, n;
      a:for(e in b) {
        if(b.hasOwnProperty(e) && e !== "length") {
          for(n in i = g = f = void 0, l = b[e], l) {
            if(l.hasOwnProperty(n) && !(n === "length" || c.hasOwnProperty(n))) {
              p = l[n].cell;
              if(h.isNull(f) && (f = p.getColDef(), g = f.defaultValue, i = f.key, h.isNull(f.editor))) {
                continue a
              }
              p = h.isNotNull(a[n]) ? a[n].datarow : p.getDatarow();
              this.grid.dataMgr.isReal(p) ? g !== p[i] && (h.isNull(a[n]) && (a[n] = {datarow:p, change:{}}, d.push(a[n])), a[n].change[i] = g) : c[n] = !0
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
  b = i.prototype;
  b.edit = function(a) {
    return"<input type='text' class='basic-editor' value='" + (a == null ? "" : a) + "' style='position:relative'/>"
  };
  b.focus = function() {
    var a = this.cell;
    if(a) {
      var c = a.getNode();
      if(c && (c = c.childNodes[0])) {
        if(c.setActive) {
          try {
            c.setActive()
          }catch(b) {
          }
        }
        c.focus();
        document.activeElement !== c && a.get$().children(":eq(0)").focus()
      }
    }
  };
  b.value = function(a) {
    return a && (a = a.childNodes[0]) ? a.value : null
  };
  b.path = function() {
    return"JGM.m.Editor." + this.mid
  };
  i.numberKeys = h.which(["number", "del", "backspace"]);
  i.isNumberKey = function(a) {
    return this.numberKeys[a] ? !0 : !1
  };
  i.numberEdit = function(a) {
    a = a.getValue();
    return"<input type='text' class='basic-editor' onkeydown='if (!jx.grid.Editor.isNumberKey(event.which)) return false;' value='" + h.ifNull(a, "") + "'/>"
  };
  i.floatKeys = h.which(["number", ".", "del", "backspace"]);
  i.isFloatKey = function(a) {
    return this.floatKeys[a] ? !0 : !1
  };
  i.floatEdit = function(a) {
    a = a.getValue();
    return"<input type='text' class='basic-editor' onkeydown='if (!jx.grid.Editor.isFloatKey(event.which)) return false;' value='" + h.ifNull(a, "") + "'/>"
  };
  i.alphabetKeys = h.which(["alphabet", "del", "backspace", "space"]);
  i.isAlphabet = function(a) {
    return this.alphabetKeys[a] ? !0 : !1
  };
  i.alphabetEdit = function(a) {
    a = a.getValue();
    return"<input type='text' class='basic-editor' onkeydown='if (!jx.grid.Editor.isAlphabet(event.which)) return false;' value='" + h.ifNull(a, "") + "'/>"
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "TooltipManager.js"...');
jx.grid.TooltipManager = {};
(function() {
  function g(d) {
    this.mid = d.mid;
    this.grid = d.grid;
    this.grid.tooltip = this;
    this._ctnr = d.container;
    this._options = i._extend({classTooltip:"jgrid-tooltip", tooltipSyncEnabled:!0, offsetX:0, offsetY:18, background:"#F5F5F5", border:"1px solid #868686", padding:"2px 10px", font:"14px Arial,Helvetica,sans-serif", color:"#333"}, d.options);
    this.__init()
  }
  var i = goog.getObjectByName("jx.grid"), f = goog.getObjectByName("jx.util"), h = goog.getObjectByName("jx.grid.Grid");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.TooltipManager", g);
  g.getInstance = function(d) {
    return new g(d)
  };
  var e = g.prototype;
  e.__init = function() {
    this.grid.event.bind({onCreateCss:this._onCreateCss, onDestroy:this._destroy, mouseoutCanvas:this._mouseoutCanvas, mousemoveCanvas:this._mousemoveCanvas, mouseoverCanvas:this._mouseoverCanvas}, this)
  };
  e._destroy = function() {
    this.grid.log("destroying TooltipManager instance...", h.V_INIT);
    i._destroy(this, {name:"TooltipManager", path:"tooltip", $:"_tooltip", property:"_ctnr", map:"_options"})
  };
  e._onCreateCss = function() {
    var d = this._options, b = [];
    b.push("#" + this.grid.mid + " ." + d.classTooltip + "{position:absolute;z-index:10;background:" + d.background + ";border:" + d.border + ";padding:" + d.padding + ";color:" + d.color + ";font:" + d.font + "}");
    return b.join("")
  };
  e._mouseoutCanvas = function() {
    f.isNotNull(this._tooltip) && (this._ctnr[0].removeChild(this._tooltip[0]), delete this._tooltip)
  };
  e._mousemoveCanvas = function(d) {
    var b = this._options;
    b.tooltipSyncEnabled && f.isNotNull(this._tooltip) && this._tooltip.css({left:d.pageX + b.offsetX + "px", top:d.pageY + b.offsetY + "px"})
  };
  e._mouseoverCanvas = function(d, b) {
    if(b.getColDef().tooltipEnabled && f.isNull(this._tooltip)) {
      var a = this._options, c = document.createElement("div");
      c.innerHTML = "<div class='" + a.classTooltip + "' style='left:" + (d.pageX + a.offsetX) + "px;top:" + (d.pageY + a.offsetY) + "px'>" + b.getValue() + "</div>";
      this._tooltip = $(c.firstChild);
      this._ctnr[0].appendChild(this._tooltip[0])
    }
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "PrintManager.js"...');
jx.grid.PrintManager = {};
(function() {
  function g(e) {
    this.mid = e.mid;
    this._ctnr = Util$.safe$(e.container);
    this.grid = e.grid;
    this._options = i._extend({title:"Print Preview", font:"15px arial,sans-serif", headerFontColor:"#27413E", headerBackgroundColor:"#DCDEDE", tableBorderColor:"#6E7174", headerBorderColor:"#909192", cellBorderColor:"#D0D7E5", winOptions:{name:"Print Preview", width:800, height:600, directories:"no", location:"no", menubar:"no", status:"no", toolbar:"no"}}, e.options);
    this.__init()
  }
  var i = goog.getObjectByName("jx.grid"), f = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.PrintManager", g);
  g.getInstance = function(e) {
    return new g(e)
  };
  var h = g.prototype;
  h.__init = function() {
    var e = this;
    this._ctnr[0].innerHTML = "<button type='button'>Print</button>";
    this._ctnr.click(function() {
      e.print()
    })
  };
  h.print = function() {
    var e = this.getPrintHtml(this.grid.colDefMgr.get(), this.grid.dataMgr.datalist), d = f.open(this._options.winOptions);
    d.document.write(e);
    d.document.close()
  };
  h.getPrintHtml = function(e, d) {
    var b = this._options, a = b.tableBorderColor, c = b.headerBorderColor, j = b.cellBorderColor, f = [], g = e.length, h = g - 1, i = d.length, o = i - 1, p = 0, l;
    f.push("<html><head>");
    f.push("<title>" + b.title + "</title>");
    f.push("</head><body onload='window.print();'>");
    f.push("<table width='100%' cellspacing='0' cellpadding='0'><tbody><tr><td align='left'>");
    f.push("<table width='100%' cellspacing='0' cellpadding='2' style='border-collapse:collapse'>");
    f.push("<tbody style='font:" + b.font + ";'>");
    for(f.push("<tr style='background-color:" + b.headerBackgroundColor + ";color:" + b.headerFontColor + ";text-align:center'>");p < g;p++) {
      f.push("<td style='border:solid 1px " + c + ";'>" + e[p].name + "</td>")
    }
    f.push("</tr>");
    for(p = 0;p < i;p++) {
      b = d[p];
      f.push("<tr>");
      if(p === 0) {
        for(l = 0;l < g;l++) {
          l === 0 ? f.push("<td style='border:solid 1px " + j + ";border-top:solid 1px " + c + ";border-left:solid 1px " + a + "'>" + b[e[l].key] + "</td>") : l === h ? f.push("<td style='border:solid 1px " + j + ";border-top:solid 1px " + c + ";border-right:solid 1px " + a + "'>" + b[e[l].key] + "</td>") : f.push("<td style='border:solid 1px " + j + ";border-top:solid 1px " + c + "'>" + b[e[l].key] + "</td>")
        }
      }else {
        if(p < o) {
          for(l = 0;l < g;l++) {
            l === 0 ? f.push("<td style='border:solid 1px " + j + ";border-left:solid 1px " + a + "'>" + b[e[l].key] + "</td>") : l === h ? f.push("<td style='border:solid 1px " + j + ";border-right:solid 1px " + a + "'>" + b[e[l].key] + "</td>") : f.push("<td style='border:solid 1px " + j + "'>" + b[e[l].key] + "</td>")
          }
        }else {
          for(l = 0;l < g;l++) {
            l === 0 ? f.push("<td style='border:solid 1px " + j + ";border-bottom:solid 1px " + a + ";border-left:solid 1px " + a + "'>" + b[e[l].key] + "</td>") : l === h ? f.push("<td style='border:solid 1px " + j + ";border-bottom:solid 1px " + a + ";border-right:solid 1px " + a + "'>" + b[e[l].key] + "</td>") : f.push("<td style='border:solid 1px " + j + ";border-bottom:solid 1px " + a + "'>" + b[e[l].key] + "</td>")
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
  function g(c) {
    this.mid = c.mid;
    this._ctnr = c.container;
    this.grid = c.grid;
    this.grid.view = this;
    this._options = i._extend({attrRowIdx:"r", appendThreshold:3, renderThreshold:10, bufferSize:6, rowsPerPage:10, rowH:21, borderThickness:1, border:"solid #D0D7E5", padding:0, evenOddRows:!1, oddRowsBackground:"#F4F4F4", style:"", canvasStyle:"", rowStyle:"", cellStyle:"", classRow:"jgrid-row", classCell:"jgrid-cell", classView:"jgrid-viewport", classCanvas:"jgrid-canvas", focusBackground:"#FFF", focusOutline:"2px solid #f1ca7f", autoHeight:!1, autoWidth:!1}, c.options);
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
  var i = goog.getObjectByName("jx.grid"), f = goog.getObjectByName("jx.grid.Grid"), h = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var e = goog.getObjectByName("jx.grid.Cell"), d = {INPUT:!0, TEXTAREA:!0, LABEL:!0, FIELDSET:!0, LEGEND:!0, SELECT:!0, OPTGROUP:!0, OPTION:!0, BUTTON:!0}, b = {checkbox:!0, radio:!0};
  goog.exportSymbol("jx.grid.ViewportManager", g);
  g.getInstance = function(c) {
    return new g(c)
  };
  var a = g.prototype;
  a.__init = function() {
    this._mask = $("<div class='" + this._options.classView + "' tabIndex='0' style='width:100%' onscroll='JGM.m.ViewportManager." + this.mid + "._scroll()'>").appendTo(this._ctnr);
    this._canvas = $("<div class='" + this._options.classCanvas + "'>").appendTo(this._mask);
    this._canvasEl = this._canvas[0];
    this._mask.bind("selectstart.ui", function(c) {
      return $(c.target).is("input, textarea")
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
    this.grid.log("disposing ViewportManager instance...", f.V_INIT);
    i._destroy(this, {name:"ViewportManager", path:"view", $:"_canvas _mask", property:"_ctnr", map:"_vars _lockedRows _renderedRows _options"})
  };
  a._onCreateCss = function() {
    var c = "#" + this.grid.mid + " .", a = this._options, b = c + this._cellClass, d = c + this._rowClass, e = a.borderThickness + "px " + a.border, f = this._colmgr.get(), g = f.length, h = 0, i = [];
    i.push(c + a.classView + "{height:" + this._calHeight() + "px;outline:0;position:relative;white-space:nowrap;overflow:auto;line-height:" + a.rowH + "px;cursor:default;-moz-user-select:none;-webkit-user-select:none;" + a.style + ";}");
    i.push(c + a.classView + ":focus{background:" + a.focusBackground + ";outline:" + a.focusOutline + "}");
    i.push(c + a.classCanvas + "{height:" + this._calCanvasHeight() + "px;" + a.canvasStyle + ";}");
    i.push(d + "{background:white;position:absolute;" + a.rowStyle + "}");
    i.push(b + "{height:" + a.rowH + "px;border-bottom:" + e + ";display:inline-block;white-space:nowrap;overflow:hidden;float:left;text-overflow:ellipsis;padding-left:" + a.padding + "px;border-right:" + e + ";" + a.cellStyle + "}");
    for(a.evenOddRows && i.push(d + ".odd{background:" + a.oddRowsBackground + "}");h < g;h++) {
      i.push(b + ".k_" + f[h].key + "{" + f[h].style + "}")
    }
    return i.join("")
  };
  a._onCreateDynamicCss = function() {
    var c = "#" + this.grid.mid + " .", a = c + this._cellClass, b = c + this._rowClass;
    c += this._options.classCanvas;
    var d = this._calCanvasWidth(), e = this._colmgr.get(), f = "", g = e.length, h = 0;
    for(f += c + "{width:" + d + "px}" + b + "{width:" + d + "px}";h < g;h++) {
      f += a + ".k_" + e[h].key + "{width:" + e[h].width + "px}"
    }
    return f
  };
  a.onUpdateDatarow = function(c) {
    this.isRendered(c) && this.rerenderRow(c)
  };
  a.onUpdateDatalist = function(c) {
    for(var a, b = c.length, d = 0;d < b;d++) {
      a = c[d], this.isRendered(a) && this.rerenderRow(a)
    }
  };
  a.onRemoveDatarow = function(c) {
    this.destroyRow(c)
  };
  a.onRemoveDatalist = function(c) {
    for(var a = c.length, b = 0;b < a;b++) {
      this.destroyRow(c[b])
    }
  };
  a.onIdChange = function(c, a, b) {
    this.isRowLockedById(a) && (this._lockedRows[b] = this._lockedRows[a], delete this._lockedRows[a]);
    this.isRenderedById(a) && ((this._renderedRows[b] = this._renderedRows[a]).setAttribute("i", b), delete this._renderedRows[a])
  };
  a.onIdListChange = function(c, a, b) {
    for(var d = c.length, e = 0, f = this._lockedRows, g = this._renderedRows, h, i;e < d;e++) {
      h = a[e], i = c[e][b], f.hasOwnProperty(h) && (f[i] = f[h], delete f[h]), g.hasOwnProperty(h) && ((g[i] = g[h]).setAttribute("i", i), delete g[h])
    }
  };
  a._getCellSelector = function() {
    return"#" + this.grid.mid + " ." + this._cellClass
  };
  a._getRowSelector = function() {
    return"#" + this.grid.mid + " ." + this._rowClass
  };
  a.scrollTo = function(c, a) {
    this.scrollToRow(c);
    this.scrollToCol(a)
  };
  a.scrollToRowLazy = function(c) {
    var a = this.getScrollTop();
    return c == null ? a : this._getLastSafeVisibleRow() < c ? this.scrollToRow(this._getFirstRowForSafe(c)) : this._getFirstSafeVisibleRow() > c ? this.scrollToRow(c) : a
  };
  a.scrollToColLazy = function(c) {
    var a = this.getScrollLeft();
    if(c == null) {
      return a
    }
    if(this._getLastSafeVisibleCol() < c) {
      return this.setScrollLeft(this.getScrollHForSafe(c))
    }else {
      if(this._getFirstSafeVisibleCol() > c) {
        return this.scrollToCol(c)
      }
    }
    return a
  };
  a.scrollToLazy = function(c, a) {
    this.scrollToRowLazy(c);
    this.scrollToColLazy(a)
  };
  a.scrollToRow = function(c) {
    return c != null ? this.setScrollTop(this._getRowOuterHeight() * c) : this.getScrollTop()
  };
  a.scrollToCol = function(c) {
    return this.setScrollLeft(this.getColLeft(c))
  };
  a._getColInnerWidth = function(c) {
    return this._colmgr.get(c).width
  };
  a._getColInnerWidthByKey = function(c) {
    return this._colmgr.getByKey(c).width
  };
  a.getColWidth = function(c) {
    return this._colmgr.get(c).width + this._options.padding
  };
  a.getColWidthByKey = function(c) {
    return this._colmgr.getByKey(c).width + this._options.padding
  };
  a._getColOuterWidth = function(c) {
    return this._colmgr.get(c).width + this._options.padding + this._options.borderThickness
  };
  a._getColOuterWidthByKey = function(c) {
    return this._colmgr.getByKey(c).width + this._options.padding + this._options.borderThickness
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
    return this._getRowOuterHeight() * this._datamgr.datalist.length || 1
  };
  a.getCanvasHeight = function() {
    return this._canvasEl.clientHeight
  };
  a._setCanvasHeight = function(c) {
    c = parseInt(c, 10);
    if(isNaN(c) || c < 1) {
      c = 1
    }
    var a = this.getCanvasHeight();
    if(c != a) {
      this._canvasEl.style.height = c + "px", this._evtmgr.trigger("onResizeCanvasHeight", [c, a], !0)
    }
  };
  a._calCanvasWidth = function() {
    return this._colLefts[this._colmgr.length()]
  };
  a.getCanvasWidth = function() {
    return this._canvasEl.clientWidth
  };
  a._setCanvasWidth = function(c) {
    typeof c != "number" && (c = parseInt(c, 10));
    if(isFinite(c) && !(c < 1)) {
      var a = this.getCanvasWidth();
      if(c != a) {
        this.grid.log("set canvas width. " + a + "->" + c, f.V_RESIZE), this._canvasEl.style.width = c + "px", this._evtmgr.trigger("onResizeCanvasWidth", [c, a], !0)
      }
    }
  };
  a.getColLeft = function(c) {
    return this._colLefts[c]
  };
  a._getColLefts = function() {
    return this._colLefts
  };
  a._setColLefts = function(c, a) {
    for(var c = c || 0, b = this._colmgr.get(), d = this._colWidthPlus(), a = a || b.length;c < a;c++) {
      this._colLefts[c + 1] = this._colLefts[c] + b[c].width + d
    }
    return this._colLefts
  };
  a._onReorderCols = function() {
    this._setColLefts();
    this._rerender()
  };
  a.setWidthByKey = function(c, a) {
    var b = this._colmgr.getByKey(c), a = h.bound(a, b.minW, b.maxW);
    if(a !== b.width) {
      this.grid.log("set column width. key=" + c + ", w=" + a, f.V_RESIZE);
      var d = this._evtmgr, e = this._colmgr, g = [c, a, b.width];
      b.width = a;
      this._setCanvasWidth(this._setColLefts(e.getIdxByKey(c))[e.length()]);
      this.grid._recreateDynamicCss();
      d.trigger("onResizeCol_" + c, g, !0);
      d.trigger("onResizeCol", g, !0)
    }
  };
  a._autoColWidth = function(c) {
    for(var a = this._canvasFind(".k_" + c), b = Number.MIN_VALUE, d = a.length, e = 0;e < d;e++) {
      if(b < a[e].scrollWidth) {
        b = a[e].scrollWidth
      }
    }
    b -= this._getPadding();
    this.setWidthByKey(c, b)
  };
  a._setWidth = function() {
  };
  a.getScrollTop = function() {
    return this._mask[0].scrollTop
  };
  a.getScrollLeft = function() {
    return this._mask[0].scrollLeft
  };
  a.setScrollTop = function(c) {
    var a = this.getScrollTop();
    return c != null && a != c ? this._mask[0].scrollTop = c : a
  };
  a.setScrollLeft = function(c) {
    var a = this.getScrollLeft();
    return c != null && a != c ? this._mask[0].scrollLeft = c : a
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
  a._getFirstRowForSafe = function(c) {
    return c - Math.floor(this._mask[0].clientHeight / this._getRowOuterHeight()) + 1
  };
  a._getFirstVisibleCol = function() {
    for(var c = this.getScrollLeft(), a = this._colLefts, b = 0, d = a.length;b < d;b++) {
      if(a[b] > c) {
        return b - 1
      }
      if(a[b] === c) {
        return b
      }
    }
    return d - 2
  };
  a._getFirstSafeVisibleCol = function() {
    for(var c = this.getScrollLeft(), a = this._colLefts, b = 0, d = a.length;b < d;b++) {
      if(a[b] >= c) {
        return b
      }
    }
    return d - 2
  };
  a._getLastVisibleCol = function() {
    for(var c = this.getScrollLeft() + this._mask[0].clientWidth, a = this._colLefts, b = 0, d = a.length;b < d;b++) {
      if(a[b] >= c) {
        return b - 1
      }
    }
    return d - 2
  };
  a._getLastSafeVisibleCol = function() {
    for(var c = this.getScrollLeft() + this._mask[0].clientWidth, a = this._colLefts, b = 0, d = a.length;b < d;b++) {
      if(a[b] > c) {
        return b - 2
      }
    }
    return d - 2
  };
  a._getFirstColForSafe = function(c) {
    var a = this._colLefts, b = a[c + 1] - this._mask[0].clientWidth, d = c;
    if(b <= 0) {
      return 0
    }
    for(;d >= 0;d--) {
      if(d === c && a[d] <= b || a[d] === b) {
        return d
      }
      if(a[d] < b) {
        return d + 1
      }
    }
    return 0
  };
  a.getScrollHForSafe = function(c) {
    var a = this._colLefts, b = a[c + 1] - this._mask[0].clientWidth;
    return a[c] <= b ? a[c] : b
  };
  a._getRenderRange = function() {
    if(this._options.autoHeight) {
      return{start:0, end:this._datamgr.datalist.length - 1}
    }
    var c, a = this._datamgr.datalist.length - 1;
    return{start:(c = this._getFirstVisibleRow() - this._options.bufferSize) < 0 ? 0 : c, end:(c = this._getLastVisibleRow() + this._options.bufferSize) > a ? a : c}
  };
  a._fitHeight = function() {
    this._mask[0].style.height = this.getCanvasHeight() + this._heightPlus() + "px"
  };
  a._resizeWidth = function() {
    this._options.autoHeight && this._fitHeight()
  };
  a.onAfterRefresh = function(c) {
    c !== void 0 && c.noRerender === !0 || this._rerender()
  };
  a._rerender = function() {
    var c = this.getScrollTop(), a = this.getScrollLeft();
    this._evtmgr.trigger("onBeforeRerender", !1, !0);
    this.unlockAllRows();
    this._removeRows();
    var b = this._datamgr.datalist.length;
    if(this._lastRowLen !== b) {
      this._lastRowLen = b, this._setCanvasHeight(this._calCanvasHeight())
    }
    this._render();
    this.setScrollTop(c);
    this.setScrollLeft(a);
    this._evtmgr.trigger("onAfterRerender", !1, !0)
  };
  a._render = function(c) {
    this._removeAndRenderRows(c)
  };
  a._renderShift = function(c) {
    c = c || this._getRenderRange();
    this._removeRowsExcept(c);
    this._appendRows(c)
  };
  a._removeRows = function(c) {
    var a = this._canvasEl, b = this._renderedRows, d = this._lockedRows, e;
    if(c) {
      for(var f = c.start, c = c.end, g = this._datamgr;f <= c;f++) {
        if(!d.hasOwnProperty(e = g.getIdByIdx(f)) && b.hasOwnProperty(e)) {
          a.removeChild(b[e]), delete b[e]
        }
      }
    }else {
      if(this._lockExist()) {
        for(e in b) {
          b.hasOwnProperty(e) && d.hasOwnProperty(e) && (a.removeChild(b[e]), delete b[e])
        }
      }else {
        this._renderedRows = {}, a.innerHTML = ""
      }
    }
  };
  a._removeRowsExcept = function(c) {
    var a = this._canvasEl, b = this._renderedRows, d = this._lockedRows, e;
    if(c) {
      var f = c.start, c = c.end, g = this._datamgr, h;
      for(e in b) {
        if(b.hasOwnProperty(e) && !(d.hasOwnProperty(e) || f <= (h = g.getIdxById(e)) && h <= c)) {
          a.removeChild(b[e]), delete b[e]
        }
      }
    }else {
      if(this._lockExist()) {
        for(e in b) {
          b.hasOwnProperty(e) && d.hasOwnProperty(e) === !1 && (a.removeChild(b[e]), delete b[e])
        }
      }else {
        this._renderedRows = {}, a.innerHTML = ""
      }
    }
  };
  a.destroyRow = function(c) {
    return this.destroyRowById(this._datamgr.getId(c))
  };
  a.destroyRowById = function(c) {
    c != null && (this.unlockRowById(c), this._renderedRows.hasOwnProperty(c) && (this._canvasEl.removeChild(this._renderedRows[c]), delete this._renderedRows[c]))
  };
  a.destroyRowByIdx = function(c) {
    return this.destroyRowById(this._datamgr.getIdByIdx(c))
  };
  a._lockExist = function() {
    return h.isNotEmptyObj(this._lockedRows)
  };
  a.isRowLockedById = function(c) {
    return c != null ? this._lockedRows.hasOwnProperty(c) : !1
  };
  a.isRowLocked = function(c) {
    return this.isRowLockedById(this._datamgr.getId(c))
  };
  a.isRowLockedByIdx = function(c) {
    return this.isRowLockedById(this._datamgr.getIdByIdx(c))
  };
  a.lockRowById = function(c) {
    c != null && this._datamgr.hasById(c) && (this._lockedRows[c] = !0)
  };
  a.lockRow = function(c) {
    return this.lockRowById(this._datamgr.getId(c))
  };
  a.lockRowByIdx = function(c) {
    return this.lockRowById(this._datamgr.getIdByIdx(c))
  };
  a.unlockRowById = function(c) {
    this.isRowLockedById(c) && delete this._lockedRows[c]
  };
  a.unlockRow = function(c) {
    return this.unlockRowById(this._datamgr.getId(c))
  };
  a.unlockRowByIdx = function(c) {
    return this.unlockRowById(this._datamgr.getIdByIdx(c))
  };
  a.unlockAllRows = function() {
    this._lockedRows = {}
  };
  a.rerenderRowById = function(c) {
    if(this._datamgr.containsById(c)) {
      var a = this._renderedRows, b = this._canvasEl, d = this._datamgr, e = d.idKey, f = d.getIdxById(c), d = d.getById(c), g = this._colmgr.get(), i = this._getColCellClasses(g).map(function(c) {
        return"<div class='" + c + " "
      }), l = this._getRendererSettings(g), n = l[0], l = l[1], q = this._getRowOuterHeight(), s = "<div class='" + this._rowClass + " odd' i='", t = "<div class='" + this._rowClass + "' i='", u = "' " + this._rowIdxAttr + "='", v = [];
      a.hasOwnProperty(c) && (b.removeChild(a[c]), this._evtmgr.trigger("onBeforeRenderRows", [[f]], !0), v.push((f % 2 ? t : s) + d[e] + u + f + "' style='top:" + q * f + "px'>"), this._renderRow(v, f, d, g, i, n, l), a[c] = h.appendHTML(b, v.join(""))[0], this._evtmgr.trigger("onAppendRows", [[f]], !0))
    }
  };
  a._getRendererSettings = function(c) {
    for(var c = c || this._colmgr.get(), a = 0, b = c.length, d, e = [], f = [], g;a < b;a++) {
      d = c[a], (g = d.renderer) ? (e.push(!!d.rendererInput), f.push(g)) : (e.push(!1), f.push(!1))
    }
    return[f, e]
  };
  a.rerenderRow = function(c) {
    return this.rerenderRowById(this._datamgr.getId(c))
  };
  a.rerenderRowByIdx = function(c) {
    return this.rerenderRowById(this._datamgr.getIdByIdx(c))
  };
  a.rerenderCellByIdAndKey = function(c, a) {
    var b = this.getCellByIdAndKey(c, a);
    if(b) {
      var d = this._datamgr, e = this._colmgr, f = d.getById(c), g = e.getByKey(a), d = d.getIdxById(c), e = e.getIdxByKey(a), h = g.renderer, i = h ? g.rendererInput : !1, n = [];
      h ? i ? this._renderCell(n, d, e, f, g, h, !0) : this._renderCell(n, d, e, f, g, h) : this._renderCell(n, d, e, f, g);
      b.innerHTML = n.join("")
    }
  };
  a.rerenderCellByIdx = function(c, a) {
    return this.rerenderCellByIdAndKey(this._datamgr.getIdByIdx(c), this._colmgr.getKeyByIdx(a))
  };
  a._appendRows = function(c) {
    var a = this._evtmgr, b = [c], d = [], e = c.start, c = c.end, f = this._datamgr, g = f.datalist, i = f.idKey, l = this._colmgr.get(), n = this._getColCellClasses(l).map(function(c) {
      return"<div class='" + c + " "
    }), f = this._renderedRows, q = this._getRowOuterHeight(), s = this._canvasEl, t = "<div class='" + this._rowClass + " odd' i='", u = "<div class='" + this._rowClass + "' i='", v = "' " + this._rowIdxAttr + "='", w = this._getRendererSettings(l), B = w[0], y = w[1], z, A, w = [];
    a.trigger("onBeforeRenderRows", b, !0);
    for(this.grid.twstart();e <= c;e++) {
      z = g[e], A = z[i], f.hasOwnProperty(A) || (d[d.length] = (e % 2 ? u : t) + A + v + e + "' style='top:" + q * e + "px'>", this._renderRow(d, e, z, l, n, B, y), this.grid.twlap(), w.push(A))
    }
    this.grid.twprint();
    this.grid.twstop();
    d = h.appendHTML(s, d.join(""));
    e = 0;
    for(c = w.length;e < c;e++) {
      f[w[e]] = d[e]
    }
    a.trigger("onAppendRows", b, !0)
  };
  a._removeAndRenderRows = function(c) {
    var c = c || this._getRenderRange(), a = this._evtmgr, b = [c], d = [], e = c.start, c = c.end, f = this._datamgr, g = f.datalist, f = f.idKey, h = this._colmgr.get(), i = this._getColCellClasses(h).map(function(c) {
      return"<div class='" + c + " "
    }), n = this._getRowOuterHeight(), q = this._canvasEl, s = "<div class='" + this._rowClass + " odd' i='", t = "<div class='" + this._rowClass + "' i='", u = "' " + this._rowIdxAttr + "='", v = this._getRendererSettings(h), w = v[0], v = v[1], B, y, z = [], A = {};
    a.trigger("onBeforeRenderRows", b, !0);
    for(this.grid.twstart();e <= c;e++) {
      B = g[e], y = B[f], d[d.length] = (e % 2 ? t : s) + y + u + e + "' style='top:" + n * e + "px'>", this._renderRow(d, e, B, h, i, w, v), this.grid.twlap(), z.push(y)
    }
    this.grid.twprint();
    this.grid.twstop();
    q.innerHTML = d.join("");
    e = 0;
    for(c = z.length;e < c;e++) {
      A[z[e]] = q.childNodes[e]
    }
    this._renderedRows = A;
    a.trigger("onAppendRows", b, !0)
  };
  a._renderColumn = function(c, a, b, d, f, g, h) {
    for(var i = [], l, n = 0, q = b.length, s, t, u, v = a.key, w, B = this.grid, y = this._evtmgr, z = "onRenderCell_" + v, A = [null, c, t, a], C = [null, c, null, a, null];n < q;n++) {
      s = b[n];
      t = d[s];
      u = t[v];
      l = [];
      C[0] = A[0] = s;
      C[2] = t;
      C[4] = l;
      w = y.trigger("onGetCellClass", A);
      l[l.length] = w ? f + w.join(" ") + "'>" : f + "'>";
      y.trigger(z + "_prepend", C, !0);
      if(typeof u != "string" || u.substring(0, 3) !== "J@H") {
        g ? l[l.length] = h ? g(new e({grid:B, row:s, col:c, datarow:t, colDef:a})) : g(u, s, c, t, a) : u != null && (l[l.length] = u)
      }
      y.trigger(z + "_append", C, !0);
      l[l.length] = "</div>";
      i[i.length] = l.join("")
    }
    return i
  };
  a._getColCellClass = function(a) {
    var b = this._cellClass + " k_" + a.key;
    a.colClass && (b += " " + a.colClass);
    (a = this._evtmgr.trigger("onGetColCellClass", [a])) && (b += " " + a.join(" "));
    return b
  };
  a._getColCellClasses = function(a) {
    for(var a = a || this._colmgr.get(), b = [], d = 0, e = a.length;d < e;d++) {
      b.push(this._getColCellClass(a[d]))
    }
    return b
  };
  a._renderRow = function(a, b, d, e, f, g, h) {
    for(var i = 0, l = e.length, n, q = [b, null, d, null], s = this._evtmgr, t, u;i < l;i++) {
      n = e[i], q[1] = i, q[3] = n, t = s.trigger("onGetCellClass", q), a[a.length] = t ? f[i] + t.join(" ") + "'>" : f[i] + "'>", (u = g[i]) ? h[i] ? this._renderCell(a, b, i, d, n, u, !0) : this._renderCell(a, b, i, d, n, u) : this._renderCell(a, b, i, d, n), a[a.length] = "</div>"
    }
    a[a.length] = "</div>";
    return a
  };
  a._renderCell = function(a, b, d, f, g) {
    var h = g.key, i = f[h], p = [b, d, f, g, a], l = this._evtmgr, h = "onRenderCell_" + h;
    l.trigger(h + "_prepend", p, !0);
    if(typeof i != "string" || i.substring(0, 3) !== "J@H") {
      arguments.length > 5 ? a[a.length] = arguments[6] ? arguments[5](new e({grid:this.grid, row:b, col:d, datarow:f, colDef:g})) : arguments[5](i, b, d, f, g) : i != null && (a[a.length] = i)
    }
    l.trigger(h + "_append", p, !0)
  };
  e.prototype.rerender = function() {
    return this.grid.view.rerenderCellByIdAndKey(this.getId(), this.getKey())
  };
  e.prototype.scrollTo = function() {
    this.grid.view.scrollTo(this.getRowIdx(), this.getColIdx())
  };
  a._keydown = function(a) {
    h.contains(this._mask[0], document.activeElement, this._ctnr[0]) && (this.grid.log("UI event:keydown on Viewport. event=" + a.type + ", keycode=" + a.which, f.V_KEYDOWN), this._evtmgr.trigger("keydownCanvas_" + a.which, [a], !0), this._evtmgr.trigger("keydownCanvas", [a], !0))
  };
  a._keyup = function(a) {
    h.contains(this._mask[0], document.activeElement, this._ctnr[0]) && (this.grid.log("UI event:keyup on Viewport. event=" + a.type + ", keycode=" + a.which, f.V_KEYUP), this._evtmgr.trigger("keyupCanvas_" + a.which, [a], !0), this._evtmgr.trigger("keyupCanvas", [a], !0))
  };
  a._keypress = function(a) {
    h.contains(this._mask[0], document.activeElement, this._ctnr[0]) && (this.grid.log("UI event:keypress on Viewport. event=" + a.type + ", keycode=" + a.which, f.V_KEYPRESS), this._evtmgr.trigger("keypressCanvas_" + a.which, [a], !0), this._evtmgr.trigger("keypressCanvas", [a], !0))
  };
  a._mousein = function(a) {
    this._drag ? this._triggerMouseEvent(a, "draginCanvas,mouseinCanvas", f.V_MOUSEIN) : this._triggerMouseEvent(a, "mouseinCanvas", f.V_MOUSEIN)
  };
  a._mouseout = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragoutCanvas,mouseoutCanvas", f.V_MOUSEOUT) : this._triggerMouseEvent(a, "mouseoutCanvas", f.V_MOUSEOUT)
  };
  a._mouseenter = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragenterCanvas,mouseenterCanvas", f.V_MOUSEENTER) : this._triggerMouseEvent(a, "mouseenterCanvas", f.V_MOUSEENTER)
  };
  a._mouseleave = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragleaveCanvas,mouseleaveCanvas", f.V_MOUSELEAVE) : this._triggerMouseEvent(a, "mouseleaveCanvas", f.V_MOUSELEAVE)
  };
  a._mousemove = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragmoveCanvas,mousemoveCanvas", f.V_MOUSEMOVE) : this._triggerMouseEvent(a, "mousemoveCanvas", f.V_MOUSEMOVE)
  };
  a._mouseover = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragoverCanvas,mouseoverCanvas", f.V_MOUSEOVER) : this._triggerMouseEvent(a, "mouseoverCanvas", f.V_MOUSEOVER)
  };
  a._mousedown = function(a) {
    if(this._triggerMouseEvent(a, "mousedownCanvas", f.V_MOUSEDOWN)) {
      this._drag = !0
    }
  };
  a._mouseup = function(a) {
    this._drag = !1;
    this._triggerMouseEvent(a, "mouseupCanvas", f.V_MOUSEUP)
  };
  a._click = function(a) {
    this._triggerMouseEvent(a, "clickCanvas", f.V_CLICK) && this.focus(a)
  };
  a._dblclick = function(a) {
    this._triggerMouseEvent(a, "dblclickCanvas", f.V_DBLCLICK)
  };
  a._triggerMouseEvent = function(a, f, g) {
    var m = a.target;
    if(m) {
      var h = m.tagName, m = m.type && m.type.toLowerCase();
      if(b[m] || !d[h]) {
        if(h = this._getClosestCell(a.target)) {
          this.grid.log("UI event:" + f + " on Viewport. event=" + a.type, g);
          h = new e({grid:this.grid, node:h});
          g = h.getKey();
          a = [a, h];
          h = this._evtmgr;
          if(f.indexOf(",") > -1) {
            for(var f = f.split(","), m = 0, i = f.length, o;m < i;m++) {
              o = f[m], h.trigger(o + "_" + g, a, !0), h.trigger(o, a, !0)
            }
          }else {
            h.trigger(f + "_" + g, a, !0), h.trigger(f, a, !0)
          }
          return!0
        }
      }
    }
    return!1
  };
  a._scroll = function() {
    var a = this.getScrollTop(), b = a - this._lastScrollTop, d = this.getScrollLeft(), e = d - this._lastScrollLeft;
    if(b !== 0 || e !== 0) {
      this.grid.log("Viewport scrolled... h=" + e + ", v=" + b, f.V_SCROLL);
      var g = this._evtmgr, b = Math.abs(b / this._getRowOuterHeight());
      g.trigger("onScrollViewport", !1, !0);
      if(e) {
        this._lastScrollLeft = d, g.trigger("onScrollViewportH", [d], !0)
      }
      d = this.renderElapsed;
      d == null && (d = 50);
      d > 500 && (d = 500);
      if(b >= this._options.appendThreshold) {
        if(this.scrollHandlerId) {
          window.clearTimeout(this.scrollHandlerId), this.scrollHandlerId = null
        }
        var h = this;
        this.scrollHandlerId = window.setTimeout(function() {
          var b = (new Date).getTime();
          h._lastScrollTop = a;
          h._removeAndRenderRows();
          g.trigger("onScrollViewportV", !1, !0);
          h.renderElapsed = (new Date).getTime() - b
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
    return h.toArray(this._renderedRows)
  };
  a.getCell = function(a, b) {
    if(b != null) {
      var d = this.getRowByIdx(a);
      if(d) {
        return d.childNodes[b]
      }
    }
  };
  a.getCellByIdAndKey = function(a, b) {
    var d = this._colmgr.getIdxByKey(b);
    if(d != null) {
      var e = this.getRowById(a);
      if(e) {
        return e.childNodes[d]
      }
    }
  };
  a.getRenderedCell = function(a, b) {
    if(b != null) {
      var d = this.getRenderedRowByIdx(a);
      if(d) {
        return d.childNodes[b]
      }
    }
  };
  a.getRenderedCellByIdAndKey = function(a, b) {
    var d = this._colmgr.getIdxByKey(b);
    if(d != null) {
      var e = this.getRenderedRowById(a);
      if(e) {
        return e.childNodes[d]
      }
    }
  };
  a._getClosestCell = function(a) {
    return h.closestWithTag(a, "DIV", this._cellClass, this._canvasEl)
  };
  a._getClosestRow = function(a) {
    return h.closestWithTag(a, "DIV", this._rowClass, this._canvasEl)
  };
  a._getClosestRowIdx = function(a) {
    return this._datamgr.getIdxByNode(this._getClosestRow(a))
  };
  a._canvasFind = function(a) {
    return this._canvas.find(a)
  };
  g._renderer = function(a) {
    return a == null ? "" : a
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "ColumnManager.js"...');
jx.grid.ColumnManager = {};
(function() {
  function g(c) {
    this.mid = c.mid;
    this.grid = c.grid;
    this.grid.colDefMgr = this;
    this._options = a._extend({colDef:{type:"string", key:void 0, name:"", colClass:void 0, defaultValue:void 0, inputOnCreate:void 0, style:"", headerStyle:"", width:80, minW:0, maxW:void 0, editor:void 0, sorter:void 0, hidden:!1, sumRenderer:void 0, tooltipEnabled:!1, resizable:!1, renderer:void 0, rendererInput:!1, noTitle:!1, noName:!1, title:void 0, noSearch:!1, filter:void 0, parser:void 0, validator:void 0, nullOnCreate:!1, notNull:!1}}, c.options);
    this._colDefs = [];
    this._filtered = [];
    this._keyToDef = {};
    this._keyToIdx = {};
    this._parsers = {};
    this._sorters = {};
    this._validators = {};
    this._nullOnCreates = {};
    this._groupsByName = this._groups = null;
    this.__init(c)
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
  function f(a) {
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
  function h(a) {
    return typeof a != "string" ? a == null ? "" : a.toString() : a
  }
  function e(a) {
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
  function b(a) {
    switch(typeof a) {
      case "undefined":
        return Number.MAX_VALUE;
      case "boolean":
        return a ? 1 : 0;
      case "number":
        return a
    }
    return a == null ? Number.MAX_VALUE : f(a) ? 1 : 0
  }
  var a = goog.getObjectByName("jx.grid"), c = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var j = goog.getObjectByName("jx.grid.Grid");
  goog.getObjectByName("jx.grid.Column");
  goog.getObjectByName("jx.grid.ViewportManager");
  goog.exportSymbol("jx.grid.ColumnManager", g);
  g.getInstance = function(a) {
    return new g(a)
  };
  var k = g.prototype;
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
    var c = 0, b = a.length, d, e, f = a.some(function(a) {
      return a.parent != null
    });
    if(f) {
      var g = this._groups = [], j = this._groupsByName = {}
    }
    for(;c < b;c++) {
      d = a[c];
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
      c = 0;
      b = g.length;
      for(a = [];c < b;c++) {
        j = g[c];
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
      for(var a = this._colDefs, c = 0, b = a.length, d, e = this._groups = [], f = this._groupsByName = {}, g;c < b;c++) {
        d = a[c], g = d.parent = d.parent == null ? d.name || d.key : d.parent, f.hasOwnProperty(g) || e.push(f[g] = []), f[g].push(d)
      }
      c = 0;
      b = e.length;
      for(colDefs = [];c < b;c++) {
        f = e[c];
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
    var c = this._groups;
    if(c) {
      for(var b = 0, d = c.length, e, f, g;b < d;b++) {
        e = c[b];
        f = 0;
        for(g = e.length;f < g;f++) {
          if(e[f].key == a) {
            return b
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
      var c = this._sorters;
      return c.hasOwnProperty(a) ? c[a] : null
    }
    throw Error("column key not found! key=" + a);
  };
  k.getValidator = function(a) {
    if(a == null) {
      return this._validators
    }
    if(this.hasKey(a, !0)) {
      var c = this._validators;
      return c.hasOwnProperty(a) ? c[a] : null
    }
    throw Error("column key not found! key=" + a);
  };
  k.getParser = function(a) {
    if(a == null) {
      return this._parsers
    }
    if(this.hasKey(a, !0)) {
      var c = this._parsers;
      return c.hasOwnProperty(a) ? c[a] : null
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
  k.addAt = function(a, c) {
    var b = c.key, d = this._colDefs;
    if(this.hasKey(b, !0)) {
      throw Error("duplicate column key, key = " + b);
    }
    if(a < 0 || a > d.length) {
      throw Error("index out of bound, i = " + a);
    }
    d.addAt(a, this._extend(c));
    this.reorganizeGroups();
    this._filter();
    this.eventChangeVisible();
    return d.length
  };
  k._extend = function(a) {
    if(a && !a._extended) {
      a._extended = !0;
      var c = {}, b, d;
      $.extend(!0, c, this._options.colDef);
      $.extend(!0, c, a);
      $.extend(!0, a, c);
      d = a.type = i(a.type);
      c = a.key.toString();
      this._keyToDef[c] = a;
      if(b = a.sorter) {
        typeof b == "string" ? b = i(b) : d && (b = d);
        if(b = g.sorter(b, c)) {
          b.key = c, this._sorters[c] = b
        }
        a.sorter = b
      }
      if(b = a.parser) {
        if(d && typeof b != "function") {
          switch(d) {
            case "boolean":
              b = f;
              break;
            case "int":
              b = function(a) {
                return parseInt(a, 10)
              };
              break;
            case "float":
              b = parseFloat;
              break;
            case "string":
              b = h;
              break;
            case "date":
              b = e;
              break;
            default:
              b = null
          }
          a.parser = b
        }
        this._parsers[c] = b
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
        this._validators[c] = d
      }
      a.nullOnCreate && (this._nullOnCreates[c] = !0)
    }
    return a
  };
  k.setVisible = function(a, c) {
    var b = this.getByKey(a, !0);
    if(!b) {
      throw Error("column key not found! key=" + a);
    }
    c = !!c;
    if(!b.hidden !== c) {
      b.hidden = !c, this._filter(), this.eventChangeVisible()
    }
    return b
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
    for(var a = a || 0, c = this._filtered, b = c.length, d = this._keyToIdx = {};a < b;a++) {
      d[c[a].key] = a
    }
    return d
  };
  k.get = function(a) {
    if(a == null) {
      return this._filtered
    }
    var c = this._filtered;
    if(a < 0 || a >= c.length) {
      throw Error("index out of bound, i = " + a);
    }
    return this._filtered[a]
  };
  k.checkKey = function(a, c) {
    if(a == null) {
      if(c) {
        throw Error("column key is null");
      }
      return!1
    }
    typeof a != "string" && (a = a.toString());
    if(!a && c) {
      throw Error("column key is empty");
    }
    return!0
  };
  k.mapKeys = function(a) {
    var c = this;
    return a.map(function(a) {
      var b = c.getByKey(a, !0);
      if(!b) {
        throw Error("column key not found! key=" + a);
      }
      return b
    })
  };
  k.getByKey = function(a, c) {
    return this.hasKey(a, c) ? this._keyToDef[a] : null
  };
  k.hasKey = function(a, c) {
    return this.checkKey(a, c) ? this._keyToDef.hasOwnProperty(a) : !1
  };
  k.length = function() {
    return this._filtered.length
  };
  k.getIdxByKey = function(a) {
    return this._keyToIdx.hasOwnProperty(a) ? this._keyToIdx[a] : -1
  };
  k.getIdx = function(a) {
    return c.isNotNull(a) && this._keyToIdx.hasOwnProperty(a.key) ? this._keyToIdx[a.key] : -1
  };
  k.sortByKey = function(a) {
    var c = this._filtered, b = this._keyToIdx = {};
    c.length = 0;
    this.grid.event.trigger("onReorderCols", [this.mapKeys(a).forEach(function(a, d) {
      a.hidden || (c.push(a), b[a.key] = d)
    })], !0);
    this.eventChangeVisible();
    return c
  };
  k.eventChangeVisible = function() {
    this.grid.event.trigger("changeVisibleColumns", [this._filtered])
  };
  k.getKeys = function() {
    return this._filtered.map(function(a) {
      return a.key
    })
  };
  g.sorter = function(a, c, e) {
    e = {on:!!e, key:c};
    switch(a) {
      case "boolean":
        return e.comparator = function(a, d) {
          return b(a[c]) - b(d[c])
        }, e;
      case "string":
        return e.lexi = c, e;
      case "int":
        return e.comparator = function(a, b) {
          return d(a[c], "toInt") - d(b[c], "toInt")
        }, e;
      case "float":
        return e.comparator = function(a, b) {
          return d(a[c], "toFloat") - d(b[c], "toFloat")
        }, e;
      case "date":
        return e.comparator = function(a, b) {
          return d(a[c], "toInt") - d(b[c], "toInt")
        }, e
    }
    return null
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "MenuBar.js"...');
jx.grid.MenuBar = {};
(function() {
  function g(b) {
    e.call(this, b);
    this.grid.menubar = this;
    this.columnWidths = {}
  }
  var i = goog.getObjectByName("jx.grid"), f = goog.getObjectByName("jx.util"), h = goog.getObjectByName("jx.grid.Grid"), e = goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.MenuBar", g);
  goog.inherits(g, e);
  g.getInstance = function(b) {
    return new g(b)
  };
  var d = g.prototype;
  d._defaultOptions = function() {
    var b = this.grid._options.imageUrl;
    return{background:"url(" + b + "menubar-bg.png) repeat-x scroll center", borderThickness:1, border:"solid #b6bac0", height:27, classMenuBar:"menubar", classIcon:"menu-icon", classColumnToggleIcon:"jgrid-column-toggle-icon", columnIconUrl:b + "data-creator-icon.png", columnIconWidth:15, columnIconHeight:15, iconBorderThickness:1, iconBorder:"solid transparent", iconBorderHover:"solid #d4d4d4", iconBorderActive:"solid #9a9a9a", iconMargin:2, iconBackground:"", iconBackgroundHover:"url(" + b + "menu-icon-hover.png) repeat-x scroll center", 
    iconBackgroundActive:"url(" + b + "menu-icon-active.png) repeat-x scroll center", iconHeight:21, iconWidth:21, iconBorderRadius:4, iconBorderFocus:"solid #5f5f5f"}
  };
  d._init = function(b) {
    var a = this._options;
    this._ctnr = b.container;
    this._menubar = $("<div class='" + a.classMenuBar + "'></div>").prependTo(this._ctnr);
    if(this.grid._options.columnHideEnabled) {
      for(var b = f.element, c = f.input, d = f.SAFE, e = this.getColumns(), g = 0, h = e.length, i = "", o = this.mid, p, l, n;g < h;g++) {
        p = e[g], l = p.key, n = o + "-toggle-column-" + l, i += b("label", {"for":n}, b("li", null, c("checkbox", {id:n, checked:!0, onclick:"JGM.m.MenuBar." + o + ".toggleColumn('" + l + "', this.checked, this)"}) + p.name, d), d)
      }
      var q = this.ul = $(b("ul", {"class":"jgrid-column-toggle-box"}, i, d)).appendTo(this.grid._ctnr);
      q.css({top:11, left:34});
      q.hide();
      this.columnIcon = this.addIcon(a.classColumnToggleIcon, "현재 보여지는 열을 숨기거나 숨겨진 열을 보이도록 합니다.", a.columnIconWidth, a.columnIconHeight, function() {
        q.toggle()
      })
    }
  };
  d.mousedown = function(b) {
    this.columnIcon && !f.contains(this.columnIcon[0], b.target) && !f.contains(this.ul[0], b.target) && (this.ul.hide(), this.columnIcon.hasClass("active") && this.columnIcon.toggleClass("active"))
  };
  d.toggleColumn = function(b, a, c) {
    columnWidths = this.columnWidths;
    a ? (this.getView().setWidthByKey(b, this.columnWidths[b]), $(c.parentNode).removeClass("unchecked")) : (this.columnWidths[b] = this.getColMgr().getByKey(b).width, this.getView().setWidthByKey(b, 0), $(c.parentNode).addClass("unchecked"))
  };
  d._bindEvents = function() {
    this.grid.event.bind({onCreateCss:this._onCreateCss, onDestroy:this._destroy, mousedown:this.mousedown}, this)
  };
  d._destroy = function() {
    this.grid && this.grid.log("destroying MenuBar instance...", h.V_INIT);
    i._destroy(this, {name:"MenuBar", path:"menubar", $:"_menubar", property:"_ctnr", map:"_options"})
  };
  d._onCreateCss = function() {
    var b = "#" + this.grid.mid + " .", a = this._options, c = [];
    c.push(b + a.classMenuBar + "{" + i._CONST._cssUnselectable + "position:relative;overflow:hidden;width:100%;background:" + a.background + ";border-bottom:" + (a.borderThickness + "px " + a.border) + ";height:" + a.height + "px}");
    c.push(b + a.classIcon + "{float:left;height:" + a.iconHeight + "px;width:" + a.iconWidth + "px;border:" + a.iconBorderThickness + "px " + a.iconBorder + ";margin:" + a.iconMargin + "px 0 0 " + a.iconMargin + "px;background:" + a.iconBackground + ";border-radius:" + a.iconBorderRadius + "px;-moz-border-radius:" + a.iconBorderRadius + "px}");
    c.push(b + a.classIcon + ":hover," + b + a.classIcon + ":focus{background:" + a.iconBackgroundHover + ";border:" + a.iconBorderThickness + "px " + a.iconBorderHover + "}");
    c.push(b + a.classIcon + ":active," + b + a.classIcon + ".active{cursor:default;background:" + a.iconBackgroundActive + ";border:" + a.iconBorderThickness + "px " + a.iconBorderActive + "}");
    c.push(b + a.classIcon + ".active:focus{border:" + a.iconBorderThickness + "px " + a.iconBorderFocus + "}");
    c.push(b + a.classColumnToggleIcon + "{background:url(" + a.columnIconUrl + ") no-repeat center;width:" + a.columnIconWidth + "px;height:" + a.columnIconHeight + "px}");
    c.push(".jgrid-column-toggle-box{position:absolute;top:0;left:0;z-index:100;list-style-type:none;margin:0;padding:0;border:1px solid #888;background:#eee}");
    c.push(".jgrid-column-toggle-box li{cursor:pointer;padding:1px 4px 1px 0px}");
    c.push(".jgrid-column-toggle-box li.unchecked{background:#ccc}");
    return c.join("")
  };
  d.addIcon = function(b, a, c, d, e) {
    function g(a) {
      e && e();
      h.toggleClass("active");
      a.preventDefault()
    }
    var h = $("<div class='" + this._options.classIcon + "' tabIndex='0' title='" + a + "'><div class='" + b + "' style='margin-top:" + (this._options.iconHeight - d) / 2 + "px;margin-left:" + (this._options.iconWidth - c) / 2 + "px'></div></div>").appendTo(this._menubar), i = f.keyMapKeydown.enter, o = f.keyMapKeydown.space;
    h.click(g).keydown(function(a) {
      var c = a.which;
      (c === i || c === o) && g(a)
    });
    return h
  };
  d.appendHtml = function(b) {
    return $(b).appendTo(this._menubar)
  };
  d.append$ = function(b) {
    return b.appendTo(this._menubar)
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "Footer.js"...');
jx.grid.Footer = {};
(function() {
  function g(b) {
    this.mid = b.mid;
    this._ctnr = b.container;
    this.grid = b.grid;
    this.grid.footer = this;
    this._options = i._extend({classCell:"footer-cell", background:"#F1F5FB", border:"0px solid #CCD9EA", color:"#000", fontSize:"13px", fontWeight:"normal", cellHeight:25, cellPadding:40, countTemplate:"현재 <span name='shownCount'></span> 건 / 총 <span name='totalCount'></span> 건", titleColor:"#5A6779", titleFontSize:"12px", titleFontWeight:"normal", contentColor:"#1E395B", contentFontSize:"12px", contentFontWeight:"normal", classFooter:"jgrid-footer", classTitle:"footer-title", classContent:"footer-content", 
    style:"", cellStyle:"", titleStyle:"", contentStyle:""}, b.options);
    this._sumMap = {};
    this.__init()
  }
  var i = goog.getObjectByName("jx.grid"), f = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var h = goog.getObjectByName("jx.grid.Grid"), e = f.element;
  goog.exportSymbol("jx.grid.Footer", g);
  g.getInstance = function(b) {
    return new g(b)
  };
  var d = g.prototype;
  d.__init = function() {
    this._hasSum = this.grid.colDefMgr.get().some(function(a) {
      return!!a.sumRenderer
    });
    var b = this._mask = $(e("div", {"class":"classSliderMask"})).appendTo(this._ctnr);
    if(this._hasSum) {
      this._slider = $(e("div", {"class":"classSlider"})).appendTo(b)
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
    for(var b = this.grid.colDefMgr.get(), a = 0, c = b.length;a < c;a++) {
      this._slider[0].appendChild(this.getSumCell(b[a].key))
    }
  };
  d._setWidthByKey = function(b, a) {
    var c = this.getSumCell(b);
    if(c) {
      c.style.width = a + this.grid.view._colWidthPlus() - 1 + "px"
    }
  };
  d._onScrollViewportH = function(b) {
    if(this._hasSum) {
      this._slider[0].style.left = -1E4 - b + "px"
    }
  };
  d.renderCells = function() {
    if(this._hasSum) {
      for(var b = this.grid.colDefMgr.get(), a = 0, c = b.length, d = this.grid.view, f = [];a < c;a++) {
        f.push(e("div", {"class":"classSliderCell", id:this.mid + "_sum_" + b[a].key, style:{width:d._getColOuterWidth(a) - 1 + "px"}}))
      }
      this._slider[0].innerHTML = f.join("")
    }
  };
  d.getSumCell = function(b) {
    return document.getElementById(this.mid + "_sum_" + b)
  };
  d.setCellValue = function(b, a) {
    var c = this.getSumCell(b);
    if(c) {
      c.innerHTML = a
    }
  };
  d._destroy = function() {
    this.grid.log("destroying Footer instance...", h.V_INIT);
    var b, a = this._sumMap;
    for(b in a) {
      a.hasOwnProperty(b) && a[b] && a[b].remove && a[b].remove()
    }
    this._mask && (this._mask.remove(), delete this._mask);
    this._slider && (this._slider.remove(), delete this._slider);
    i._destroy(this, {name:"Footer", path:"footer", $:"_foot", property:"_ctnr", map:"_sumMap _options"})
  };
  d._onCreateCss = function() {
    var b = this._options, a = "#" + this.grid.mid + " ." + b.classFooter, c = [];
    c.push(a + "{float:left;cursor:default;width:100%;" + i._CONST._cssUnselectable + "background:" + b.background + ";border-top:" + b.border + ";border-collapse:collapse;color:" + b.color + ";font-size:" + b.fontSize + ";font-weight:" + b.fontWeight + ";padding-left:8px;" + b.style + "}");
    c.push(a + " ." + b.classCell + "{float:left;white-space:nowrap;line-height:" + b.cellHeight + "px;padding-right:" + b.cellPadding + "px;" + b.cellStyle + "}");
    c.push(a + " ." + b.classTitle + "{text-align:right;color:" + b.titleColor + ";font-size:" + b.titleFontSize + ";font-weight:" + b.titleFontWeight + ";" + b.titleStyle + "}");
    c.push(a + " ." + b.classContent + "{color:" + b.contentColor + ";font-size:" + b.contentFontSize + ";font-weight:" + b.contentFontWeight + ";" + b.contentStyle + "}");
    b = {};
    a = "#" + this.grid.mid;
    b[a + " .classSliderMask"] = {position:"relative", overflow:"hidden", width:"100%", "border-bottom":"1px solid #ddd"};
    b[a + " .classSlider"] = {position:"relative", overflow:"hidden", "white-space":"nowrap", cursor:"default", background:"#f0f0f0", left:"-10000px", width:"100000px", "line-height":"21px"};
    b[a + " .classSliderCell"] = {position:"relative", overflow:"hidden", "float":"left", "text-overflow":"ellipsis", "text-align":"center", "vertical-align":"middle", height:"21px", left:1E4 - this.grid.view.getScrollLeft() + "px", "border-right":"1px solid #ddd"};
    var d, e;
    for(d in b) {
      if(b.hasOwnProperty(d)) {
        a = b[d];
        c.push(d + "{");
        for(e in a) {
          c.push(e + ":" + a[e] + ";")
        }
        c.push("}")
      }
    }
    return c.join("")
  };
  d._updateTotalCount = function() {
    this._foot.find("[name=totalCount]")[0].innerHTML = this.grid.dataMgr.getReal().length
  };
  d._updateShownCount = function() {
    this._foot.find("[name=shownCount]")[0].innerHTML = this.grid.dataMgr.filterReal(this.grid.dataMgr.datalist).length
  };
  d._initSumCells = function() {
    if(this._hasSum) {
      for(var b = this.grid.dataMgr.getReal(), a = this.grid.colDefMgr.get(), c = a.length, d, e, h, i, r, o = g._calSum, p = this._sumMap, l, n = 0;n < c;n++) {
        if(d = a[n], e = d.sumRenderer) {
          h = d.key;
          i = d.name;
          r = o(b, h);
          p[h] = !0;
          switch(typeof e) {
            case "function":
              l = e(i, r);
              break;
            case "string":
              d = e.toLowerCase();
              if(d === "krw" || e === "\\") {
                l = f.formatNumber(r)
              }else {
                if(d === "usd" || e === "$") {
                  l = f.formatNumber(r, 2, "$ ")
                }
              }
              break;
            default:
              l = d.renderer ? d.renderer(r) : r
          }
          this.setCellValue(h, l)
        }
      }
    }
  };
  d._updateSums = function() {
    if(this._hasSum) {
      var b = this.grid.dataMgr.getReal(), a, c = this._sumMap, d = this.grid.colDefMgr, e, h, i, r, o = g._calSum, p;
      for(a in c) {
        if(c.hasOwnProperty(a)) {
          e = d.getByKey(a);
          i = e.name;
          h = e.sumRenderer;
          r = o(b, a);
          switch(typeof h) {
            case "function":
              p = h(i, r);
              break;
            case "string":
              e = h.toLowerCase();
              if(e === "krw" || h === "\\") {
                p = f.formatNumber(r)
              }else {
                if(e === "usd" || h === "$") {
                  p = f.formatNumber(r, 2, "$ ")
                }
              }
              break;
            default:
              p = e.renderer ? e.renderer(r) : r
          }
          this.setCellValue(a, p)
        }
      }
    }
  };
  d.getNextCell = function() {
    return $("<div class='" + this._options.classCell + "'/>").appendTo(this._foot)
  };
  d._sumRenderer = function(b, a) {
    return"<span class='" + this._options.classTitle + "'>" + b + " 합계: </span><span class='" + this._options.classContent + "'>" + a + "</span>"
  };
  g._calSum = function(b, a) {
    for(var c = 0, d, e = b.length, f = 0;f < e;f++) {
      if(typeof(d = b[f][a]) === "string") {
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
    a.grid.log("creating new ColumnHeader instance...", e.V_INIT);
    h.call(this, a)
  }
  var i = goog.getObjectByName("jx.grid"), f = goog.getObjectByName("jx.util"), h = goog.getObjectByName("jx.grid.BaseModule"), e = goog.getObjectByName("jx.grid.Grid"), d = f.element;
  goog.exportSymbol("jx.grid.ColumnHeader", g);
  goog.inherits(g, h);
  g.getInstance = function(a) {
    return new g(a)
  };
  var b = g.prototype;
  b._init = function(a) {
    var j;
    this.grid.log("initializing ColumnHeader instance...", e.V_INIT);
    this.grid.header = this;
    this._map = {};
    this._resizeMap = {};
    this._resizeKey = this._resizeInitX = this._resizeHandleInitX = this._resizeInitWidth = this._resizeInitColWidth = this._resizeGuide = this._resizeHandleOffset = null;
    var c = this._options, a = this._mask = $(d("div", {"class":c.classHeaderMask})).prependTo(this._ctnr = a.container);
    if(this.getColMgr().hasGroups()) {
      this._doubleHead = $(d("div", {"class":c.classHeader})).appendTo(a)
    }
    j = this._head = $(d("div", {"class":c.classHeader})).appendTo(a), c = j;
    g._disableSel(c)
  };
  b._bindEvents = function() {
    this.grid.log("binding ColumnHeader events...", e.V_INIT);
    var a, c = this.getColumns(), b = c.length, d = 0;
    for(a = {onRenderModules:this._onRenderModules, onAfterRenderModules:this._onAfterRenderModules, mousedown:this._mousedown, mouseup:this._mouseup, dragmove:this._dragmove, onScrollViewportH:this._onScrollViewportH, onScrollViewportV:this._onScrollViewportV, onChangeSorter:this._onChangeSorter, click:this._click, onResizeCol:this._setWidthByKey};d < b;d++) {
      if(c[d].sorter) {
        a["clickHeader_" + c[d].key] = this._sort
      }
    }
    this.bindGridEvent(a, this)
  };
  b._defaultOptions = function(a) {
    this.grid.log("extending ColumnHeader options...", e.V_INIT);
    a = a._options.imageUrl;
    return{reorderEnabled:!1, reorderSyncEnabled:!0, background:"url(" + a + "column-headers-bg.png) repeat-x scroll center", backgroundHover:"url(" + a + "column-headers-over-bg.png) repeat-x scroll center", backgroundPlaceholder:"#646464", sortBackground:a + "sort.png", sortRight:4, sortWidth:7, sortBackgroundAsc:a + "sort-asc.png", sortBackgroundDesc:a + "sort-desc.png", headerMoreButton:a + "header-more-button.gif", font:"15px Arial,Helvetica,sans-serif", height:21, borderThickness:1, border:"solid #909192", 
    classHeaderMask:"jgrid-header-mask", classHeader:"jgrid-header", classColHeader:"jgrid-colheader", classColHeaderActive:"jgrid-colheader-active", classColHeaderPlaceholder:"jgrid-colheader-placeholder", classInteractive:"interactive", classColHeaderSorted:"jgrid-colheader-sorted", classSort:"jgrid-sort", classSortAsc:"jgrid-sort-asc", classSortDesc:"jgrid-sort-desc", classResizeHandle:"jgrid-resize-handle", resizeHandleWidth:5, style:"", headerStyle:"", scrollerLeft:1E4, scrollerWidth:1E5, classResizeGuide:"resize-guide", 
    resizeGuideWidth:1, resizeBackground:"black;filter:alpha(opacity=40);opacity:0.4", syncResize:!1, resizeHandleBackground:"black;filter:alpha(opacity=10);opacity:0.10"}
  };
  b._beforeDispose = function() {
    this.grid.log("disposing ColumnHeader instance...", e.V_INIT);
    this._head.sortable && this._head.sortable("destroy");
    this._destroyResizeHandles();
    i._destroy(this, {name:"ColumnHeader", path:"header", $:"_resizeGuide _mask _head", property:"_ctnr _resizeMap", map:"_map _options"});
    this.dispose()
  };
  b._destroyResizeHandles = function() {
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
  b._beforeCreateCss = function(a) {
    this.grid.log("creating CSS for ColumnHeader...", e.V_INIT);
    var c = "#" + this.grid.mid + " .", b = this._options, d = b.borderThickness + "px " + b.border, f = this.getColumns(), g = f.length, h = 0, i = "." + b.classColHeader, p = b.scrollerLeft, l = b.height + "px", n = b.classColHeaderActive, q = {};
    q["." + b.classHeaderMask] = {position:"relative", overflow:"hidden", width:"100%", font:b.font, background:b.background, "border-bottom":d, _append:b.style};
    q["." + b.classHeader] = {position:"relative", overflow:"hidden", "white-space":"nowrap", cursor:"default", background:b.background, left:-p + "px", width:b.scrollerWidth + "px", "line-height":l};
    q[i] = {position:"relative", overflow:"hidden", "float":"left", "text-overflow":"ellipsis", "text-align":"center", "vertical-align":"middle", height:l, left:p - this.getView().getScrollLeft() + "px", "border-right":d, _append:b.headerStyle};
    q[i + "." + b.classInteractive + ":hover, " + c + n] = {cursor:"pointer", background:b.backgroundHover};
    q["." + n] = {"border-left":d};
    q[i + "." + b.classColHeaderPlaceholder] = {background:b.backgroundPlaceholder + "!important"};
    q[".jgrid-header-text"] = {"vertical-align":"middle"};
    q[".jgrid-header-more"] = {position:"absolute", cursor:"pointer", height:"100%", width:"14px", right:0, top:0};
    q[".jgrid-header-more:hover"] = {"border-left":"1px solid black", background:"url(" + b.headerMoreButton + ") no-repeat left center"};
    q["." + b.classSort] = {position:"absolute", height:"100%", width:b.sortWidth + "px", background:"url(" + b.sortBackground + ") no-repeat center transparent"};
    q["." + b.classSortAsc] = {background:"url(" + b.sortBackgroundAsc + ") no-repeat center transparent"};
    q["." + b.classSortDesc] = {background:"url(" + b.sortBackgroundDesc + ") no-repeat center transparent"};
    q["." + b.classResizeHandle] = {"z-index":10, background:b.resizeHandleBackground, cursor:"e-resize", position:"absolute", height:"100%", width:b.resizeHandleWidth + "px"};
    for(q["." + b.classResizeGuide] = {"z-index":10, position:"absolute", background:b.resizeBackground, width:b.resizeGuideWidth + "px"};h < g;h++) {
      f[h].headerStyle && (q[i + "#" + this.mid + "h" + f[h].key] = {_append:f[h].headerStyle})
    }
    this.toCssStyles(a.css, q)
  };
  b._widthPlus = function() {
    return this._options.borderThickness
  };
  b._onScrollViewportH = function(a) {
    this.grid.log("adjusting Colheader style.left according to viewport scrollLeft...", e.V_RESIZE);
    a = -this._options.scrollerLeft - a;
    this._head[0].style.left = a + "px";
    if(this._doubleHead) {
      this._doubleHead[0].style.left = a + "px"
    }
  };
  b._onRenderModules = function() {
    this.grid.log("rendering Colheader...", e.V_INIT);
    var a = this.getColumns(), c = a.length, b = 0, f, g = [], h = this.getColMgr();
    if(h.hasGroups()) {
      var i = this._options;
      i.reorderEnabled = !1;
      for(var h = h.getGroups(), o = 0, p = h.length, l, n, q, s = [], t = 0, u = 0, v = this.getView(), w;o < p;o++) {
        l = h[o];
        n = l[0].parent;
        t = q = 0;
        for(w = l.length;t < w;t++) {
          l[t].hidden || (q += v._getColOuterWidth(u++))
        }
        s.push(d("div", {"class":i.classColHeader, title:n, style:{width:q - this._widthPlus() + "px"}}, n))
      }
      this._doubleHead[0].innerHTML = s.join("")
    }
    for(;b < c;b++) {
      (f = a[b]).hidden || this._render(g, f, b)
    }
    this._head[0].innerHTML = g.join("");
    this.triggerGridEvent("onRenderHeadersComplete", !1, !0)
  };
  b._onAfterRenderModules = function() {
    var a = this._options;
    !this.getColMgr().hasGroups() && a.reorderEnabled && this._initReorder();
    this._initResizeHandles();
    this._resizeGuide = $(d("div", {"class":a.classResizeGuide})).appendTo(this.getView()._mask).hide();
    this._resizeGuide[0].style.top = "0px";
    this._resizeGuide[0].style.height = "0px"
  };
  b._render = function(a, c, b) {
    var e = this._options, g = c.key, h = c.noName ? "" : c.name || g, i = this._widthPlus(), o = "onRenderHeader_" + g, p = [a], l = e.classColHeader;
    if(e.reorderEnabled || c.sorter) {
      l += " " + e.classInteractive
    }
    b = {id:this.mid + "h" + g, "class":l, colKey:g, style:{width:this.getView()._getColOuterWidth(b) - i + "px"}};
    if(!c.noTitle) {
      b.title = c.title || h
    }
    a.push(d("div", b, null, f.LEAVE_OPENED));
    this.triggerGridEvent(o + "_prepend", p, !0);
    a.push(h);
    this.triggerGridEvent(o + "_append", p, !0);
    c.sorter && a.push(d("span", {"class":e.classSort}));
    a.push("</div>")
  };
  g._disableSel = function(a) {
    Util$.safe$(a).attr("unselectable", "on").css("MozUserSelect", "none").bind("selectstart.ui", function() {
      return!1
    })
  };
  b.get = function(a) {
    if(this._map.hasOwnProperty(a)) {
      return this._map[a]
    }
    var c = document.getElementById(this.mid + "h" + a);
    return!c ? $([]) : this._map[a] = $(c)
  };
  b._updateIndicator = function(a, c) {
    var b = this.get(a), d = this._options, e = b.find("." + d.classSort), f = d.classColHeaderSorted, g = d.classSortAsc, d = d.classSortDesc;
    c === 0 ? (b.removeClass(f), e.removeClass(g + " " + d)) : (b.addClass(f), c === 1 ? e.addClass(g).removeClass(d) : c === 2 && e.addClass(d).removeClass(g))
  };
  b._closest = function(a) {
    return Util$.safe$(a).closest("div." + this._options.classColHeader, this._head)
  };
  b._getDef = function(a) {
    return this.getColMgr().getByKey(a.attr("colKey"))
  };
  b._sort = function(a, c, b) {
    this.grid.log("Colheader clicked to sort. key=" + d, e.V_CLICK);
    var d = b.key, a = b.sorter;
    this.triggerGridEvent("onBeforeColSort_" + d, !1, !0);
    this.triggerGridEvent("onBeforeColSort", !1, !0);
    a.desc = a.desc === !1 ? !0 : !1;
    this.getDataMgr().refresh({sorter:a});
    this.getView()._scroll()
  };
  b._onChangeSorter = function(a, c) {
    a !== c && a && this._updateIndicator(a.key, 0);
    c && this._updateIndicator(c.key, c.desc ? 2 : 1)
  };
  b._initReorder = function() {
    this.grid.log("initializing Colheader reorder functionality...", e.V_INIT);
    var a = this, c = this._options, b = this.getColMgr(), d = this._head, f = this.mid.length + 1, g = function(a, c) {
      for(var e = $(d).sortable("toArray"), g = e.length, h, i = 0;i < g;i++) {
        h = e[i], e[i] = h === "" ? c.item.attr("id").substring(f) : h.substring(f)
      }
      b.sortByKey(e)
    };
    d.sortable({items:"." + c.classColHeader, axis:"x", forcePlaceholderSize:!0, placeholder:c.classColHeaderPlaceholder + " " + c.classColHeader, tolerance:"pointer", start:function(c, b) {
      b.item.addClass(a._options.classColHeaderActive)
    }, stop:function(b, c) {
      c.item.removeClass(a._options.classColHeaderActive);
      a._syncResizeHandles()
    }, update:g});
    c.reorderSyncEnabled && d.sortable("option", "change", g)
  };
  b._getDx = function(a, c) {
    var b = a.clientX - this._resizeInitX, d = c.minW, e = f.ifNull(c.maxW, Number.MAX_VALUE), g = this._resizeInitWidth;
    g + b < d && (b = d - g);
    g + b > e && (b = e - g);
    return b
  };
  b._click = function(a) {
    var b = this._closest(a.target);
    if(b.length !== 0) {
      var d = this._getDef(b), f = d.key, a = [a, b, d];
      this.grid.log("Colheader clicked. key=" + f, e.V_CLICK);
      this.getEventMgr().triggerInvalid("clickHeaderValid_" + f, a) || (this.triggerGridEvent("clickHeader_" + f, a, !0), this.triggerGridEvent("clickHeader", a, !0))
    }
  };
  b._mousedown = function(a) {
    var b = this._options;
    if(f.hasTagAndClass(a.target, "DIV", b.classResizeHandle)) {
      var d = this._resizeKey = a.target.getAttribute("key");
      this.grid.log("mousedown on ColumnHeader Resize Handle. key=" + d, e.V_MOUSEDOWN);
      this._resizeInitWidth = this.get(d)[0].clientWidth;
      this._resizeInitColWidth = this.getColMgr().getByKey(d).width;
      this._resizeInitX = a.clientX;
      this._resizeHandleInitX = this._resizeMap[d][0].offsetLeft;
      this._resizeGuide[0].style.left = Math.floor(this._resizeHandleInitX + (b.resizeHandleWidth - b.resizeGuideWidth) / 2 - b.scrollerLeft) + "px";
      this._resizeGuide[0].style.height = this.getView().getInnerHeight() + "px";
      this._resizeGuide.show()
    }else {
      if(b = this._closest(a.target), b.length) {
        var g = this._getDef(b), d = g.key, a = [a, b, g];
        this.grid.log("mousedown on ColumnHeader. key=" + d, e.V_MOUSEDOWN);
        this.triggerGridEvent("mousedownHeader", a, !0);
        this.triggerGridEvent("mousedownHeader_" + d, a, !0)
      }
    }
  };
  b._dragmove = function(a) {
    var b = this._resizeKey;
    if(b != null && (a = this._getDx(a, this.getColMgr().getByKey(b)), !(Math.abs(a) < 1))) {
      this.grid.log("drag on ColumnHeader Resize Handle. key=" + b, e.V_MOUSEMOVE);
      var d = this._options;
      this.get(b)[0].style.width = this._resizeInitWidth + a + "px";
      this._moveResizeHandles(this._resizeHandleInitX + a - this._resizeMap[b][0].offsetLeft, this.getColMgr().getIdxByKey(b));
      this._resizeGuide[0].style.left = Math.floor(this._resizeHandleInitX + a + (d.resizeHandleWidth - d.resizeGuideWidth) / 2 - d.scrollerLeft) + "px";
      d.syncResize && this.getView().setWidthByKey(b, this._resizeInitColWidth + a)
    }
  };
  b._mouseup = function(a) {
    var b = this._resizeKey;
    if(b != null) {
      this.grid.log("mouseup on ColumnHeader Resize Handle. key=" + b, e.V_MOUSEUP), this._resizeGuide.hide(), this._resizeGuide[0].style.height = "0px", a = this._getDx(a, this.getColMgr().getByKey(b)), Math.abs(a) >= 1 && this.getView().setWidthByKey(b, this._resizeInitColWidth + a), delete this._resizeKey, delete this._resizeInitX, delete this._resizeHandleInitX, delete this._resizeInitWidth, delete this._resizeInitColWidth
    }
  };
  b._setWidthByKey = function(a, b) {
    this.grid.log("setting ColumnHeader width=" + b + ". key=" + a, e.V_RESIZE);
    this.get(a)[0].style.width = b + this.getView()._colWidthPlus() - this._widthPlus() + "px";
    if(this._doubleHead) {
      for(var d = this.getColMgr(), f = this.getView()._colWidthPlus(), g = d.getGroupIndexByKey(a), d = d.getGroupByGroupIdx(g), h = 0, i = d.length, o = 0;h < i;h++) {
        d[h].hidden || (o += d[h].width + f)
      }
      this._doubleHead[0].childNodes[g].style.width = o - this._widthPlus() + "px"
    }
    this._syncResizeHandles(this.getColMgr().getIdxByKey(a));
    this.getView()._scroll()
  };
  b._syncResizeHandles = function(a) {
    for(var a = a || 0, b = this.getView()._getColLefts(), d = this.getColumns(), e = d.length, f = this._resizeMap, g;a < e;a++) {
      if(g = d[a].key, f.hasOwnProperty(g)) {
        f[g][0].style.left = b[a + 1] + this._resizeHandleOffset + "px"
      }
    }
  };
  b._moveResizeHandles = function(a, b) {
    for(var b = b || 0, d = this.getColumns(), e = d.length, f = this._resizeMap, g;b < e;b++) {
      if(g = d[b].key, f.hasOwnProperty(g)) {
        g = f[g][0], g.style.left = g.offsetLeft + a + "px"
      }
    }
  };
  b._onScrollViewportV = function() {
    this._resizeGuide[0].style.top = this.getView().getScrollTop() + "px"
  };
  b._initResizeHandles = function() {
    this.grid.log("initializing Colheader resize functionality...", e.V_INIT);
    for(var a = this.getColumns(), b = a.length, d = this.getView(), f = d.mid, d = d._getColLefts(), g = this._options, h = this._resizeMap, i, o = 0, p = this._resizeHandleOffset = Math.floor(g.scrollerLeft - g.resizeHandleWidth / 2), l = g.classResizeHandle, n = this._head;o < b;o++) {
      if(g = a[o], g.resizable) {
        i = g.key, h[i] = $("<div class='" + l + "' key='" + i + "' ondblclick='JGM.m.ViewportManager." + f + '._autoColWidth("' + i + "\")' style='left:" + (p + d[o + 1]) + "px' title='" + g.name + " 컬럼의 폭을 조절합니다.'>").appendTo(n)
      }
    }
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "CheckManager.js"...');
jx.grid.CheckManager = {};
(function() {
  function g(d) {
    function b() {
      var a = this._options, b = this._isRadio = a.isRadio = !!a.isRadio;
      this._hasMaster = a.master = !b && !!a.master;
      this._col = a.colDef;
      this._key = this._col.key;
      this._cssClass = a.classCheck;
      this._cssClassMaster = a.classMasterCheck;
      this._name = a.name || b && "radio" + this.mid || null
    }
    this.addEventListener("afteroption", b);
    h.call(this, d);
    this.removeEventListener("afteroption", b)
  }
  var i = goog.getObjectByName("jx.grid"), f = goog.getObjectByName("jx.util"), h = goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.CheckManager", g);
  goog.inherits(g, h);
  g.getInstance = function(d) {
    return new g(d)
  };
  var e = g.prototype;
  e._init = function() {
    this._map = {};
    this.disabledmap = {};
    this._count = 0;
    this._disabled = !1;
    var d, b = i._CONST;
    d = this.getColMgr();
    d.getByKey(this._col.key) || d.addAt(this._options.colIdx, this._col);
    if(!b._checkboxWidth) {
      d = f.calCheckSize(), b._checkboxWidth = d.checkboxW, b._checkboxHeight = d.checkboxH, b._radioWidth = d.radioW, b._radioHeight = d.radioH
    }
  };
  e._bindEvents = function() {
    var d = this._col.key, b;
    b = {onAfterSetDatalist:this.uncheckAll, onAfterRerender:this._updateMaster, onIdChange:this._onIdChange, onIdListChange:this._onIdListChange, onRemoveDatarow:this._onRemoveDatarow, onRemoveDatalist:this._onRemoveDatalist, onSearch:this._onSearch};
    b["onRenderCell_" + d + "_prepend"] = this._onRenderCell;
    b["keydownColSel_" + d + "_" + f.keyMapKeydown.space] = this._keydownColSel;
    if(this._hasMaster) {
      b["onRenderHeader_" + d + "_prepend"] = this._onRenderHeader, b.onRenderHeadersComplete = this._getMaster
    }
    this.bindGridEvent(b, this)
  };
  e._onSearch = function(d) {
    d ? this.disableMaster() : this.enableMaster()
  };
  e._defaultOptions = function() {
    return{colDef:{key:"checkbox", width:20, name:" ", noTitle:!0, resizable:!1, sorter:null, filter:null, noSearch:!0, editor:null, inputOnCreate:!1}, colIdx:0, name:void 0, classCheck:"checkmg", classMasterCheck:"checkm", master:!0, isRadio:!1}
  };
  e._beforeCreateCss = function(d) {
    var b, a, c = d.css;
    this._isRadio ? (d = i._CONST._radioWidth || 13, b = i._CONST._radioHeight || 13) : (d = i._CONST._checkboxWidth || 13, b = i._CONST._checkboxHeight || 13);
    a = "*overflow:hidden;padding:0;width:" + d + "px;height:" + b + "px;";
    c.push(this.getView()._getCellSelector() + " ." + this._cssClass + "[mid='" + this.mid + "']{" + a + "margin:" + (this.getView()._getRowInnerHeight() - b) / 2 + "px 0 0 " + (this._col.width - this.getView()._getPadding() - d) / 2 + "px}#" + this.mid + "h{" + a + "margin:" + (this.getHeader()._options.height - b) / 2 + "px 0 0 0}")
  };
  e.checkList = function(d, b) {
    if(!b) {
      d = this.getDataMgr().mapList(d).mapped
    }
    for(var a = 0, c = d.length;a < c;a++) {
      this.check(d[a], !0)
    }
  };
  e.setCheckList = function(d, b) {
    this.uncheckAll();
    this.checkList(d, b)
  };
  e.getCheckList = function() {
    return f.toArray(this._map)
  };
  e.getDisableds = function() {
    return f.toArray(this.disabledmap)
  };
  e.toggleCheckAll = function() {
    return this.isCheckedAll() ? this.uncheckAll() : this.checkAll()
  };
  e.clickMaster = function(d) {
    var b = this.getAllData(), a = this.getDataList();
    if(b.length === a.length) {
      return d ? this.checkAll() : this.uncheckAll()
    }
    if(d) {
      g._check(this.getCheckboxes());
      for(var d = a.length, b = this.getIdKey(), c, e = 0;e < d;e++) {
        c = a[e], this._add(c, c[b]) && this.triggerGridEvent("onCheckChange", [c, !0], !0)
      }
    }else {
      g._uncheck(this.getCheckboxes());
      d = a.length;
      b = this.getIdKey();
      for(e = 0;e < d;e++) {
        c = a[e], this._remove(c, c[b]) && this.triggerGridEvent("onCheckChange", [c, !1], !0)
      }
    }
  };
  e.checkAll = function() {
    this._hasMaster && g._check(this._master);
    g._check(this.getCheckboxes());
    for(var d = this.getAllData(), b = d.length, a = this.getIdKey(), c = this._map, e = 0;e < b;e++) {
      c[d[e][a]] = d[e]
    }
    this._count = b
  };
  e.uncheckAll = function() {
    this._hasMaster && g._uncheck(this._master);
    g._uncheck(this.getCheckboxes());
    this._map = {};
    this._count = 0
  };
  e.toggleCheck = function(d, b) {
    b || (d = this.getDataMgr().map(d));
    this.isChecked(d, !0) && !this._isRadio ? this.uncheck(d, !0) : this.check(d, !0)
  };
  e.toggleDisable = function(d, b) {
    b || (d = this.getDataMgr().map(d));
    this.isDisabled(d, !0) ? this.enable(d, !0) : this.disable(d, !0)
  };
  e.toggleById = function(d) {
    this.toggleCheck(this.getDataMgr().getById(d), !0)
  };
  e.check = function(d, b) {
    b || (d = this.getDataMgr().map(d));
    this._add(d) && (g._check(this.getCheckbox(d)), this._updateMaster(), this.triggerGridEvent("onCheckChange", [d, !0], !0))
  };
  e.uncheck = function(d, b) {
    b || (d = this.getDataMgr().map(d));
    this._remove(d) && (g._uncheck(this.getCheckbox(d)), this._hasMaster && g._uncheck(this._master), this.triggerGridEvent("onCheckChange", [d, !1], !0))
  };
  e.disable = function(d, b) {
    var a = this.getDataMgr();
    b || (d = a.map(d));
    var a = a.getId(d), c = this.disabledmap;
    c.hasOwnProperty(a) || (c[a] = d, g.disableNode(this.getCheckbox(d)), this.triggerGridEvent("onDisableCheck", [d], !0))
  };
  e.enable = function(d, b) {
    var a = this.getDataMgr();
    b || (d = a.map(d));
    var a = a.getId(d), c = this.disabledmap;
    c.hasOwnProperty(a) && (delete c[a], g.enableNode(this.getCheckbox(d)), this.triggerGridEvent("onEnableCheck", [d], !0))
  };
  e._updateMaster = function() {
    this._hasMaster && g._setCheck(this._master, this.isCheckedAll())
  };
  e._add = function(d, b) {
    b = b || d[this.getIdKey()];
    if(this._map.hasOwnProperty(b)) {
      return!1
    }
    if(this._isRadio) {
      this._map = {}, this._count = 0
    }
    this._map[b] = d;
    this._count++;
    return!0
  };
  e._remove = function(d, b) {
    var b = b || d[this.getIdKey()], a = this._map;
    if(!a.hasOwnProperty(b)) {
      return!1
    }
    delete a[b];
    this._count--;
    return!0
  };
  e.isChecked = function(d, b) {
    var a = this.getDataMgr();
    b || (d = a.map(d));
    return this._map.hasOwnProperty(a.getId(d))
  };
  e.isDisabled = function(d, b) {
    var a = this.getDataMgr();
    b || (d = a.map(d));
    return this.disabledmap.hasOwnProperty(a.getId(d))
  };
  e.splitChecked = function(d, b) {
    if(!b) {
      d = this.getDataMgr().mapList(d).mapped
    }
    for(var a = [], c = [], e = 0, f = d.length, g = this.getIdKey(), h, i = this._map;e < f;e++) {
      i.hasOwnProperty((h = d[e])[g]) ? a.push(h) : c.push(h)
    }
    return{checked:a, unchecked:c}
  };
  e.isCheckedAll = function() {
    var d = this._count;
    if(d) {
      var b = this.getAllData().length;
      if(d === b) {
        return!0
      }
      var d = this.getDataList(), a = d.length;
      if(a !== b) {
        for(b = 0;b < a;b++) {
          if(!this.isChecked(d[b], !0)) {
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
    for(var b = d.length, a = [], c = 0, e = this.getColMgr().getIdxByKey(this._key);c < b;c++) {
      a.push(d[c].childNodes[e].childNodes[0])
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
    for(var b = 0, a = d.length;b < a;b++) {
      this.uncheck(d[b], !0), this.enable(d[b], !0)
    }
  };
  e._onIdChange = function(d, b, a) {
    var c = this._map, e = this.disabledmap;
    c.hasOwnProperty(b) && (delete c[b], c[a] = d);
    e.hasOwnProperty(b) && (delete e[b], e[a] = d)
  };
  e._onIdListChange = function(d, b, a) {
    for(var c = 0, e = d.length, f = this._map, g = this.disabledmap, h, i;c < e;c++) {
      h = d[c], i = b[c], f.hasOwnProperty(i) && (delete f[i], f[h[a]] = h), g.hasOwnProperty(i) && (delete g[i], g[h[a]] = h)
    }
  };
  e._keydownColSel = function(d, b, a) {
    d.preventDefault();
    if(b && a) {
      var d = this.isChecked(a.getDatarow(), !0), c, a = this.getDataList();
      if(this._isRadio) {
        for(c in b) {
          if(b.hasOwnProperty(c) && c !== "length") {
            this.check(a[c], !0);
            break
          }
        }
      }else {
        for(c in b) {
          b.hasOwnProperty(c) && c !== "length" && (d ? this.uncheck(a[c], !0) : this.check(a[c], !0))
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
  e._onRenderCell = function(d, b, a, c, e) {
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
  g._check = function(d) {
    d && Util$.safe$(d).attr("checked", "checked")
  };
  g._uncheck = function(d) {
    d && Util$.safe$(d).removeAttr("checked")
  };
  g.disableNode = function(d) {
    d && Util$.safe$(d).attr("disabled", "disabled")
  };
  g.enableNode = function(d) {
    d && Util$.safe$(d).removeAttr("disabled")
  };
  g._setCheck = function(d, b) {
    b ? g._check(d) : g._uncheck(d)
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "Collapser.js"...');
jx.grid.Collapser = {};
(function() {
  function g(b) {
    this.mid = b.mid;
    this.grid = b.grid;
    this.grid.collapser = this;
    this._options = i._extend({key:void 0, colDef:{key:"collapser", width:120, name:" ", noSearch:!0}, colIdx:0, urlCollapsed:this.grid._options.imageUrl + "collapsed.png", urlCollapsedHover:this.grid._options.imageUrl + "collapsed-hover.png", urlExpanded:this.grid._options.imageUrl + "expanded.png", urlExpandedHover:this.grid._options.imageUrl + "expanded-hover.png", width:6, padding:5, classCollapser:"jgrid-collapser", classCollapsed:"collapsed", classExpanded:"expanded", classIndent:"indent", 
    classMasterCollapser:"master", indentSize:12, beginCollapsed:!1, CheckManager:void 0, Tree:void 0}, b.options);
    if(this._options.CheckManager) {
      this.checkMgr = i.create("CheckManager", {grid:this.grid, options:this._options.CheckManager}), delete this._options.CheckManager, f.isNull(this._options.key) && this._options.colIdx++
    }
    this._tree = new e({list:this.grid.dataMgr.all, options:this._options.Tree})
  }
  var i = goog.getObjectByName("jx.grid"), f = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var h = goog.getObjectByName("jx.grid.Grid"), e = goog.getObjectByName("jx.struct.Tree");
  goog.exportSymbol("jx.grid.Collapser", g);
  g.getInstance = function(b) {
    return new g(b)
  };
  var d = g.prototype;
  d.__init = function() {
    f.isNull(this._options.key) && this.grid.colDefMgr.addAt(this._options.colIdx, this._options.colDef);
    this._makeTree();
    this._filterRefresh();
    this.key = f.isNull(this._options.key) ? this._options.colDef.key : this._options.key;
    this.bindEvents()
  };
  d.bindEvents = function() {
    var b = this.key, a;
    a = {onAfterFilter:this._onAfterFilter, onCreateCss:this._onCreateCss, onDestroy:this._destroy, onAfterSetDatalist:this._onAfterSetDatalist, onAddDatarow:this._onAddDatarow, onAddDatalist:this._onAddDatalist, onUpdateDatarow:this._onUpdateDatarow, onUpdateDatalist:this._onUpdateDatalist, onRemoveDatarow:this._onRemoveDatarow, onRemoveDatalist:this._onRemoveDatalist, onRenderHeadersComplete:this._getMaster};
    a["onRenderHeader_" + b + "_prepend"] = this._onRenderHeader;
    a["clickHeaderValid_" + b] = this._clickHeaderValid;
    a["onRenderCell_" + b + "_prepend"] = this._onRenderCell;
    a["dblclickCanvas_" + b] = this._dblclickCanvas;
    a["keydownColSel_" + b + "_" + f.keyMapKeydown.space] = this._keydownColSel;
    if(f.isNotNull(this.checkMgr)) {
      a.onCheckChange = this._onCheckChange
    }
    this.grid.event.bind(a, this)
  };
  d._destroy = function() {
    this.grid.log("destroying Collapser instance...", h.V_INIT);
    i._destroy(this, {name:"Collapser", path:"collapser", module:"_tree", $:"_master", property:"checkMgr", map:"_options"})
  };
  d._onCreateCss = function() {
    var b = "#" + this.grid.mid + " .", a = this._options, c = b + this.grid.view._options.classRow + " .", d = b + a.classCollapser, e = d + "." + a.classExpanded, g = d + "." + a.classCollapsed, h = this.grid.view._getRowInnerHeight(), i = [], o = this.grid.header;
    i.push(b + a.classIndent + "{height:" + h + "px;float:left;}");
    i.push(d + "{width:" + a.width + "px;float:left;padding:0 " + a.padding + "px}");
    i.push(c + a.classCollapser + "{height:" + h + "px}");
    i.push(e + "{background:url(" + a.urlExpanded + ") no-repeat center transparent}");
    i.push(e + ":hover{background:url(" + a.urlExpandedHover + ") no-repeat center transparent}");
    i.push(g + "{background:url(" + a.urlCollapsed + ") no-repeat center transparent}");
    i.push(g + ":hover{background:url(" + a.urlCollapsedHover + ") no-repeat center transparent}");
    f.isNotNull(o) && i.push(b + o._options.classColHeader + " ." + a.classCollapser + "{height:" + o._options.height + "px}");
    return i.join("")
  };
  d._onAfterSetDatalist = function() {
    this._tree.destroy();
    this._tree = new e({list:this.grid.dataMgr.all, options:this._options.Tree});
    this._makeTree()
  };
  d._onAddDatarow = function(b) {
    b = this._tree.createNode(b);
    b._collapsed = this._options.beginCollapsed;
    b._shown = f.isNotNull(b.parent) && (b.parent === b.tree.root || b.parent._shown && !b.parent._collapsed) ? !0 : !1;
    f.isNotNull(b.parent) && b.parent.children.length === 1 && this.grid.view.rerenderCellByIdAndKey(this.grid.dataMgr.getId(b.parent.data), this.key);
    b._collapsed === !0 || b._shown === !1 ? b.traverseChildren({fn:function() {
      this._shown = !1
    }}) : b.traverseChildren({fn:function(a) {
      f.isNotNull(this.parent) && (this.parent === this.tree.root || this.parent._shown && !this.parent._collapsed) ? this._shown = !0 : (a.propagate = !1, this.traverse({fn:function() {
        this._shown = !1
      }}))
    }});
    this.grid.event.trigger("onCollapserTreeChange", !1, !0)
  };
  d._onAddDatalist = function(b) {
    for(var a = 0, c = b.length, d = this._tree, e = d.root, g = this._options.beginCollapsed, h = this.key, i = this.grid.view, o = this.grid.dataMgr, p, l = [], n;a < c;a++) {
      p = d.createNode(b[a]), p._collapsed = g, f.isNotNull(p.parent) && p.parent.children.length === 1 && l.push(p.parent.data)
    }
    if(i !== void 0) {
      a = 0;
      for(c = l.length;a < c;a++) {
        i.rerenderCellByIdAndKey(o.getId(l[a]), h)
      }
    }
    e.traverseChildren({fn:function(a) {
      n = this.parent;
      f.isNotNull(n) && (n === e || n._shown && !n._collapsed) ? this._shown = !0 : (a.propagate = !1, this.traverse({fn:function() {
        this._shown = !1
      }}))
    }});
    this.grid.event.trigger("onCollapserTreeChange", !1, !0)
  };
  d._onUpdateDatarow = function(b, a, c) {
    var d = this._tree, e = d._options.nodeKey, g = d._options.parentKey, h;
    a.hasOwnProperty(e) && (h = d.getNodeByNodeId(c[e]), d.changeNodeId(h, c[e], a[e]), this.grid.event.trigger("onCollapserTreeChange", !1, !0));
    a.hasOwnProperty(g) && (f.isNull(h) && (h = d.getNode(b)), d.changeParentId(h, c[g], a[g]), this.grid.event.trigger("onCollapserTreeChange", !1, !0))
  };
  d._onUpdateDatalist = function(b, a, c) {
    for(var a = this._tree, d = a._options.nodeKey, e = a._options.parentKey, g, h, i, o = [], p = [], l = 0, n = b.length;l < n;l++) {
      g = c[l], h = b[l], i = void 0, g.hasOwnProperty(d) && (f.isNull(i) && (i = a.getNodeByNodeId(g[d])), o.push({node:i, before:g[d], newId:h[d]})), g.hasOwnProperty(e) && (f.isNull(i) && (i = a.getNode(h)), p.push({node:i, before:g[e], newId:h[e]}))
    }
    b = o.length;
    c = p.length;
    if(b + c !== 0) {
      if(b + c > 10) {
        a.reattach()
      }else {
        for(l = 0;l < b;l++) {
          d = o[l], a.changeNodeId(d.node, d.before, d.newId)
        }
        for(l = 0;l < c;l++) {
          d = p[l], a.changeParentId(d.node, d.before, d.newId)
        }
      }
      this.grid.event.trigger("onCollapserTreeChange", !1, !0)
    }
  };
  d._onRemoveDatarow = function(b) {
    this._tree.destroyNodeByData(b);
    this.grid.event.trigger("onCollapserTreeChange", !1, !0)
  };
  d._onRemoveDatalist = function(b) {
    for(var a = 0, c = b.length, d = this._tree;a < c;a++) {
      d.destroyNodeByData(b[a])
    }
    this.grid.event.trigger("onCollapserTreeChange", !1, !0)
  };
  d._onAfterFilter = function(b, a) {
    var c = this._tree;
    if(a.length > 0) {
      var d = this.grid.dataMgr, e = b.length, g = d._idToIdx, h = d.idKey, i, o = 0, p = function(c) {
        f.isNotNull(this.parent) ? (i = this.parent.data, f.isNotNull(i) && !d.has(i) && (b.push(i), a.remove(i), g[i[h]] = -1)) : c.stop = !0
      };
      d._reidx();
      for(c.reattach();o < e;o++) {
        c.getNode(b[o]).traverse({up:!0, fn:p})
      }
      c.reattach(b);
      c.sortList(b);
      this.grid.event.trigger("onCollapserTreeChange", !1, !0)
    }else {
      c.reattach(b), this.grid.event.trigger("onCollapserTreeChange", !1, !0), this._filter(b, a)
    }
  };
  d._filter = function(b, a) {
    b.length = 0;
    this._tree.root.traverseChildren({fn:function() {
      this._shown ? b.push(this.data) : a.push(this.data)
    }})
  };
  d.toggleById = function(b) {
    if(f.isNotNull(b)) {
      return this.toggleCollapse(this._tree.getNode(this.grid.dataMgr.getById(b)))
    }
  };
  d.toggle = function(b) {
    return this.toggleById(this.grid.dataMgr.getId(b))
  };
  d.toggleByIdx = function(b) {
    return this.toggleById(this.grid.dataMgr.getIdByIdx(b))
  };
  d._clickHeaderValid = function(b) {
    if(f.hasTagAndClass(b.target, "DIV", this._options.classCollapser)) {
      return!1
    }
  };
  d._dblclickCanvas = function(b, a) {
    f.hasTagAndClass(b.target, "DIV", this._options.classCollapser) || this.toggleCollapse(this._tree.getNode(a.getDatarow()))
  };
  d._keydownColSel = function(b, a, c) {
    b.preventDefault();
    if(f.isNotNullAnd(a, c)) {
      var b = this._tree, c = b.getNode(c.getDatarow())._collapsed, d = this.grid.dataMgr.datalist, e, g;
      for(g in a) {
        a.hasOwnProperty(g) && g !== "length" && (e = b.getNode(d[g]), c ? this.expand(e) : this.collapse(e))
      }
      this._filterRefresh()
    }
  };
  d._makeTree = function() {
    var b = this._tree, a, c;
    b.__init();
    c = b.map;
    b = b.root;
    if(this._options.beginCollapsed) {
      for(a in c) {
        if(c.hasOwnProperty(a)) {
          c[a]._collapsed = !0, c[a]._shown = !1
        }
      }
      c = b.children;
      var d = c.length;
      for(a = 0;a < d;a++) {
        c[a]._shown = !0
      }
      b._collapsed = !0
    }else {
      for(a in c) {
        if(c.hasOwnProperty(a)) {
          c[a]._collapsed = !1, c[a]._shown = !0
        }
      }
      b._collapsed = !1
    }
    this.grid.event.trigger("onCollapserTreeChange", !1, !0)
  };
  d._onRenderHeader = function(b) {
    b.push("<div id='" + this.mid + "h' onmousedown='JGM.m.Collapser." + this.mid + ".toggleMaster();' class='" + this._options.classCollapser + " " + this._options.classMasterCollapser);
    this._tree.root._collapsed ? b.push(" " + this._options.classCollapsed) : b.push(" " + this._options.classExpanded);
    b.push("'></div>")
  };
  d._onRenderCell = function(b, a, c, d, e) {
    b = this._tree.getNode(c);
    if(f.isNull(b)) {
      return null
    }
    c = this.grid.dataMgr.getId(c);
    a = this._options;
    e.push("<div class='" + a.classIndent + "' style='width:" + a.indentSize * b.getLevel() + "px;'></div><div ");
    b.isLeaf() ? e.push("class='" + a.classCollapser) : (e.push('onmousedown="JGM.m.Collapser.' + this.mid + ".toggleById('" + c + "');\" class='" + a.classCollapser), b._collapsed ? e.push(" " + a.classCollapsed) : e.push(" " + a.classExpanded));
    e.push("'></div>")
  };
  d.getLevel = function(b) {
    b = this._tree.getNode(b);
    return f.isNull(b) ? null : b.getLevel()
  };
  d.collapse = function(b, a) {
    if(!(b._collapsed === !0 || b.isLeaf())) {
      b._collapsed = !0;
      b.traverseChildren({fn:function(a) {
        this._shown = !1;
        this._collapsed && (a.propagate = !1)
      }});
      var c = this._getCollapser(b.data);
      c.length > 0 && this._setClass(c, !0);
      if(!a && b.parent === this._tree.root && this._tree.root._collapsed === !1) {
        this._setClass(this._master, this._tree.root._collapsed = !0)
      }
    }
  };
  d.expand = function(b, a) {
    if(!(b._collapsed === !1 || b.isLeaf())) {
      b._collapsed = !1;
      b.traverseChildren({fn:function(a) {
        this._shown = !0;
        this._collapsed && (a.propagate = !1)
      }});
      var c = this._getCollapser(b.data), d = this._tree;
      c.length > 0 && this._setClass(c, !1);
      if(!a && b.parent === d.root) {
        for(var c = d.root.children, e = c.length, f = 0;f < e;f++) {
          if(c[f]._collapsed) {
            return
          }
        }
        this._setClass(this._master, d.root._collapsed = !1)
      }
    }
  };
  d._setClass = function(b, a) {
    if(!f.isNull(b)) {
      var c = this._options;
      a ? b.addClass(c.classCollapsed).removeClass(c.classExpanded) : b.addClass(c.classExpanded).removeClass(c.classCollapsed)
    }
  };
  d.toggleMaster = function() {
    var b = this._tree.root, a = b.children, c = a.length, d = 0;
    if(b._collapsed) {
      for(;d < c;d++) {
        this.expand(a[d], !0)
      }
      this._setClass(this._master, b._collapsed = !1)
    }else {
      for(;d < c;d++) {
        this.collapse(a[d], !0)
      }
      this._setClass(this._master, b._collapsed = !0)
    }
    this._filterRefresh()
  };
  d.toggleCollapse = function(b) {
    b = b._collapsed ? this.expand(b) : this.collapse(b);
    this._filterRefresh();
    return b
  };
  d._onCheckChange = function(b, a) {
    var c = this._tree.getNode(b), d = this.checkMgr, e = [], g;
    a ? (c.traverseChildren({fn:function(a) {
      d.isChecked(this.data) ? a.propagate = !1 : (d._add(this.data), f.isNotNull(g = d.getCheckbox(this.data)) && e.push(g))
    }}), c.traverseParent({up:!0, fn:function(a) {
      f.isNull(this.data) || d.isChecked(this.data) ? a.stop = !0 : (d._add(this.data), f.isNotNull(g = d.getCheckbox(this.data)) && e.push(g))
    }}), i.CheckManager._check($(e)), d._updateMaster()) : (c.traverseChildren({fn:function(a) {
      d.isChecked(this.data) ? (d._remove(this.data), f.isNotNull(g = d.getCheckbox(this.data)) && e.push(g)) : a.propagate = !1
    }}), c.traverseParent({up:!0, fn:function(a) {
      if(f.isNull(this.data) || !d.isChecked(this.data)) {
        a.stop = !0
      }else {
        for(var b = 0, c = this.children, h = c.length;b < h;b++) {
          if(d.isChecked(c[b].data)) {
            a.stop = !0;
            return
          }
        }
        d._remove(this.data);
        f.isNotNull(g = d.getCheckbox(this.data)) && e.push(g)
      }
    }}), i.CheckManager._uncheck($(e)))
  };
  d._filterRefresh = function() {
    this._filter(this.grid.dataMgr.datalist, this.grid.dataMgr.failed);
    this.grid.dataMgr._finish()
  };
  d._getCollapser = function(b) {
    if(f.isNull(b)) {
      return $([])
    }
    b = f.findFirstByTagAndClass(this.grid.view.getCell(this.grid.dataMgr.getIdx(b), this.grid.colDefMgr.getIdxByKey(this.key)), "DIV", this._options.classCollapser);
    return b === void 0 ? $([]) : $(b)
  };
  d._getMaster = function() {
    this._master = $(document.getElementById(this.mid + "h"))
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "ColumnGroup.js"...');
jx.grid.ColumnGroup = {};
(function() {
  function g(d) {
    this.mid = d.mid;
    this.grid = d.grid;
    this.grid.colGroup = this;
    this._options = i._extend({key:void 0, padColKeys:[], sumColKeys:[], prefix:"합계: ", Collapser:{indentSize:0}}, d.options);
    this._options.Collapser.key = this._options.key;
    this._parentMap = {};
    this.__init()
  }
  var i = goog.getObjectByName("jx.grid"), f = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var h = goog.getObjectByName("jx.grid.Grid");
  goog.getObjectByName("jx.grid.Collapser");
  goog.exportSymbol("jx.grid.ColumnGroup", g);
  g.getInstance = function(d) {
    return new g(d)
  };
  var e = g.prototype;
  e.__init = function() {
    var d = this.grid, b = d.dataMgr, a = this._options;
    this.bindEvents();
    d = this.collapser = i.create("Collapser", {grid:d, options:a.Collapser});
    delete a.Collapser;
    this._processData(b.all);
    d.__init();
    b.refresh()
  };
  e.bindEvents = function() {
    var d;
    d = {onBeforeSetDatalist:this._removeAll, "onAfterSetDatalist onAddDatalist":this._processData, onAddDatarow:this._onAddDatarow, onUpdateDatarow:this._onUpdateDatarow, onUpdateDatalist:this._onUpdateDatalist, onRemoveDatarow:this._onRemoveDatarow, onRemoveDatalist:this._onRemoveDatalist, onDestroy:this._destroy};
    if(this._options.sumColKeys.length !== 0) {
      var b = this.mid, a = this.grid.dataMgr._consts._notReal, c = 0, e, f = this._options.sumColKeys, g = this._options.prefix, h = f.length;
      for(e = function(c, d, e, f, h) {
        e[a] === b && h.push(g)
      };c < h;c++) {
        d["onRenderCell_" + f[c] + "_prepend"] = e
      }
      d.onCollapserTreeChange = this._onCollapserTreeChange
    }
    this.grid.event.bind(d, this)
  };
  e._destroy = function() {
    this.grid.log("destroying ColumnGroup instance...", h.V_INIT);
    i._destroy(this, {name:"ColumnGroup", path:"colGroup", property:"collapser", map:"_parentMap _options"})
  };
  e._processData = function(d) {
    for(var b = d.length, a = this._options.key, c = this._options.padColKeys, e = this.grid.dataMgr, g = e._consts._notReal, h = e.idKey, i = this.collapser, r = i._tree._options.nodeKey, o = i._tree._options.parentKey, p = [], l = 0;l < b;l++) {
      this._addData(d[l], a, h, g, r, o, c, p)
    }
    p.length !== 0 && (e.all.pushList(p), e.makeCompositeKeyList(p, !0), e.addListToIdMap(p), f.isNotNull(i) && i._onAddDatalist(p));
    return p
  };
  e._addData = function(d, b, a, c, e, f, g, h) {
    var i = d[b], o = this._parentMap;
    o.hasOwnProperty(i) || (b = this._makeParent(d, b, a, i, c, e, g), h.push(b), o[i] = b);
    d[e] = d[a];
    d[f] = this.mid + i
  };
  e._makeParent = function(d, b, a, c, e, f, g) {
    var h = {}, i = 0, o = g.length;
    h[e] = this.mid;
    h[f] = this.mid + c;
    h[b] = c;
    for(h[a] = (this.grid.colDefMgr.getByKey(b).name || b) + ": " + c;i < o;i++) {
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
    var b = [], a = this._options, c = this.grid.dataMgr, e = this.collapser, f = e._tree._options;
    this._addData(d, a.key, c.idKey, c._consts._notReal, f.nodeKey, f.parentKey, a.padColKeys, b);
    b.length !== 0 && (d = b[0], c.all.push(d), c.makeCompositeKey(d, !0), c.addToIdMap(d), e._onAddDatarow(d))
  };
  e._onUpdateDatarow = function(d, b, a) {
    if(b.hasOwnProperty(this._options.key)) {
      var c = this._options.key, b = b[c], a = a[c], e = this.mid, c = this.collapser, f = c._tree, g = f._options.parentKey, h = {}, i = {}, o = this._parentMap;
      o.hasOwnProperty(b) || this._onAddDatarow(d);
      h[g] = e + b;
      i[g] = e + a;
      c._onUpdateDatarow(d, h, i);
      d = f.getNode(o[a]);
      d.children.length === 0 && (this.grid.dataMgr.all.remove(d.data), delete o[a], c._onRemoveDatarow(d.data))
    }
  };
  e._onUpdateDatalist = function(d, b, a) {
    var c = this._options.key, e = this.mid, f = this.collapser, g = f._tree, h = g._options.parentKey, i, o = {};
    i = {};
    for(var p = [], l = [], n = [], q = 0, s = d.length;q < s;q++) {
      i = b[q], i.hasOwnProperty(c) && (o = {}, o[h] = e + i[c], p.push(o), i = {}, i[h] = e + a[q][c], l.push(i), n.push(d[q]))
    }
    if(n.length !== 0) {
      d = this._parentMap;
      b = [];
      this._processData(n);
      f._onUpdateDatalist(n, p, l);
      q = 0;
      for(s = l.length;q < s;q++) {
        p = l[q][h], d.hasOwnProperty(p) && (n = g.getNode(d[p]), n.children.length === 0 && (delete d[p], b.push(n.data)))
      }
      b.length !== 0 && (f._onRemoveDatalist(b), this.grid.dataMgr.all.removeList(b))
    }
  };
  e._onRemoveDatarow = function(d) {
    this._isParent(d) ? delete this._parentMap[d[this._options.key]] : (d = this.collapser._tree.getNode(d).parent, d.children.length === 1 && this.grid.dataMgr.remove(d.data))
  };
  e._onRemoveDatalist = function(d) {
    for(var b = 0, a = d.length;b < a;b++) {
      this._onRemoveDatarow(d[b])
    }
  };
  e._onCollapserTreeChange = function() {
    for(var d = {}, b = this._options.sumColKeys, a = b.length, c = 0, e = this.grid.dataMgr._consts._notReal, f = this.mid, g, h, i;c < a;c++) {
      d[b[c]] = 0
    }
    this.collapser._tree.root.traverseChildren({post:!0, fn:function() {
      g = this.data;
      c = 0;
      if(g[e] === f) {
        for(;c < a;c++) {
          h = b[c], g[h] = d[h], d[h] = 0
        }
      }else {
        if(!g.hasOwnProperty(e)) {
          for(;c < a;c++) {
            if(typeof(i = g[b[c]]) === "string") {
              i = i.toFloat()
            }
            d[b[c]] += isNaN(i) ? 0 : i
          }
        }
      }
    }})
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "DataCreator.js"...');
jx.grid.DataCreator = {};
(function() {
  function g(d) {
    this.mid = d.mid;
    this._ctnr = d.container;
    this.grid = d.grid;
    this.grid.creator = this;
    this._options = i._extend({background:"#dfdfdf", borderThickness:0, border:"solid #D6D6D6", inputBorder:"solid #A7A7A7", inputBorderThickness:1, inputHeight:18, inputMargin:8, nameMargin:2, font:"12px Arial,Helvetica,sans-serif", height:28, padding:3, classCreatorIcon:"creator-icon", creatorIconUrl:this.grid._options.imageUrl + "data-creator-icon.png", creatorIconWidth:13, creatorIconHeight:13, classCreator:"data-creator", classColName:"data-creator-name", inputBorderRadius:3}, d.options);
    this._inputMap = {};
    this.__init()
  }
  var i = goog.getObjectByName("jx.grid"), f = goog.getObjectByName("jx.util"), h = goog.getObjectByName("jx.grid.Grid");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.DataCreator", g);
  g.getInstance = function(d) {
    return new g(d)
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
    var d = "#" + this.grid.mid + " .", b = this._options, a = [];
    a.push(d + b.classCreator + "{" + i._CONST._cssUnselectable + "float:left;width:100%;padding-left:8px;background:" + b.background + ";border-top:" + (b.borderThickness + "px " + b.border) + ";font:" + b.font + "}");
    a.push(d + b.classCreator + " button{float:left;margin:" + b.padding + "px " + b.padding + "px 0 0;height:" + (b.height - 2 * b.padding) + "px}");
    a.push(d + b.classCreator + " input{float:left;padding:0;margin-top:" + (b.height - b.inputHeight - 2 * b.inputBorderThickness) / 2 + "px;height:" + b.inputHeight + "px;border:" + b.inputBorderThickness + "px " + b.inputBorder + ";border-radius:" + b.inputBorderRadius + "px;-moz-border-radius:" + b.inputBorderRadius + "px}");
    a.push(d + b.classCol + "{float:left;overflow:hidden;white-space:nowrap;line-height:" + b.height + "px;margin-right:" + b.inputMargin + "px}");
    a.push(d + b.classColName + "{float:left;margin-right:" + b.nameMargin + "px}");
    a.push(d + b.classCreatorIcon + "{background:url(" + b.creatorIconUrl + ") no-repeat center;width:" + b.creatorIconWidth + "px;height:" + b.creatorIconHeight + "px}");
    return a.join("")
  };
  e._onRenderModules = function() {
    for(var d = [], b = this.grid.colDefMgr.getAll(), a = b.length, c, e = this._options, g = e.classCol, h = e.classColName, i = this, r = this._creator, o = this._inputMap, p = 0, l = function(a) {
      a.which === f.keyMapKeydown.enter && i._addData()
    };p < a;p++) {
      c = b[p], c.inputOnCreate === !0 && d.push("<div key='" + c.key + "' class='" + g + "'><div class='" + h + "'>" + c.name + "</div><input type='text' value='" + f.ifNull(c.defaultValue, "") + "' style='width:" + c.width + "px'/></div>")
    }
    r[0].innerHTML = d.join("") + "<button type='button' onclick='JGM.m.DataCreator." + this.mid + "._addData()'>등록</button><button type='button' onclick='JGM.m.DataCreator." + this.mid + "._reset()'>초기화</button>";
    for(p = 0;p < a;p++) {
      c = b[p], c.inputOnCreate === !0 && (o[c.key] = r.find("div[key='" + c.key + "'] input").keyup(l))
    }
    this.grid.menubar != null && (this.grid.menubar.addIcon(e.classCreatorIcon, "데이터 로우를 추가합니다.", e.creatorIconWidth, e.creatorIconHeight, function() {
      r.toggle("fast")
    }), r.hide())
  };
  e._addData = function() {
    var d, b = this._inputMap, a = this.grid.colDefMgr, c = {}, e = a.getAll(), f = e.length, g = 0;
    for(d in b) {
      b.hasOwnProperty(d) && a.getByKey(d)
    }
    for(;g < f;g++) {
      a = e[g], d = a.key, b.hasOwnProperty(d) ? c[d] = b[d][0].value : a.defaultValue !== void 0 && (c[d] = a.defaultValue)
    }
    this.grid.event.trigger("onAfterDataCreate", [c], !0);
    this.grid.dataMgr.add(c, {isNew:!0})
  };
  e._reset = function() {
    var d, b = this.grid.colDefMgr, a, c = this._inputMap;
    for(d in c) {
      if(c.hasOwnProperty(d) && (a = b.getByKey(d), a.defaultValue !== void 0)) {
        c[d][0].value = a.defaultValue
      }
    }
  };
  e._destroy = function() {
    this.grid.log("destroying DataCreator instance...", h.V_INIT);
    var d, b = this._inputMap;
    for(d in b) {
      b.hasOwnProperty(d) && i._delete$(b, d)
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
  var i = goog.getObjectByName("jx.grid"), f = goog.getObjectByName("jx.util"), h = goog.getObjectByName("jx.grid.Grid");
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
    var g = this._masterInput = document.getElementById(c);
    $(g).keyup(function(a) {
      a = a.which;
      a === f.keyMapKeydown.enter ? e._parse(g.value) : a === f.keyMapKeydown.esc && e._removeAllOptions()
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
    this.grid.log("destroying SearchManager instance...", h.V_INIT);
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
    if(this._global.length === 0 && f.isEmptyObj(this._codeMap)) {
      this.grid.event.trigger("onSearch", [!1], !0)
    }else {
      this.grid.event.trigger("onSearch", [!0], !0);
      var c, d = this._tagMap, e, g, h = a.length, i, j = this._filterMap, k = this.constructor.CONST.and, l, m = this._global.length > 0, n, o;
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
              f.isString(q) || (q = q.toString());
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
    for(var b, c, d, e, g = f.split(a), h = g.length, i = 2, j = !1, k = [], l = this._nameMap, m = this._filterMap, n = 0;n < h;n++) {
      if(a = g[n], a !== "") {
        switch(i) {
          case 0:
            m[b].hasOwnProperty(a) && (d = a, i = 1);
            break;
          case 1:
            e = a;
            i = 2;
            break;
          case 2:
            a.charAt(0) === "@" ? (a = a.substring(1), l.hasOwnProperty(a) ? (f.isNotNullAnd(b, c, d, e) && this._registerOption(b, c, d, e, !0) && (j = !0), b = l[a], c = a, e = d = void 0, i = 0) : b == null ? k.push(a) : e += " " + a) : b == null ? k.push(a) : e += " " + a
        }
      }
    }
    f.isNotNullAnd(b, c, d, e) && this._registerOption(b, c, d, e, !0) && (j = !0);
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
  var d = g.CONST = {lt:0, lte:1, eq:2, neq:3, gt:4, gte:5, and:6, or:7, T:8, F:9}, e = d.lt, b = d.gt, a = d.eq, c = d.neq, j = d.and, k = d.or, m = d.T, d = d.F, x = g._comparator = {}, r = x[e] = function(a, b) {
    return a <= b
  }, o = x[b] = function(a, b) {
    return a >= b
  }, p = x[a] = function(a, b) {
    return a === b
  }, m = x[m] = function() {
    return!0
  }, l = g._disableMap = {}, n = l[e] = {}, q = l[b] = {}, s = l[a] = {}, l = l[c] = {};
  x[d] = function() {
    return!1
  };
  n[e] = {};
  n[e][j] = m;
  n[e][k] = m;
  n[b] = {};
  n[b][j] = r;
  n[b][k] = o;
  n[a] = {};
  n[a][j] = m;
  n[a][k] = o;
  n[c] = {};
  n[c][j] = r;
  n[c][k] = m;
  q[e] = {};
  q[e][j] = o;
  q[e][k] = r;
  q[b] = {};
  q[b][j] = m;
  q[b][k] = m;
  q[a] = {};
  q[a][j] = m;
  q[a][k] = r;
  q[c] = {};
  q[c][j] = o;
  q[c][k] = m;
  s[e] = {};
  s[e][j] = m;
  s[e][k] = r;
  s[b] = {};
  s[b][j] = m;
  s[b][k] = o;
  s[a] = {};
  s[a][j] = m;
  s[a][k] = p;
  s[c] = {};
  s[c][j] = m;
  s[c][k] = m;
  l[e] = {};
  l[e][j] = o;
  l[e][k] = m;
  l[b] = {};
  l[b][j] = r;
  l[b][k] = m;
  l[a] = {};
  l[a][j] = m;
  l[a][k] = m;
  l[c] = {};
  l[c][j] = p;
  l[c][k] = m;
  g._checkDisable = function(a, b, c, d, e) {
    try {
      return this._disableMap[a][b][c](d, e)
    }catch(f) {
      return!1
    }
  };
  g._numberFilter = [{name:"gt", tag:">", type:b, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 큰"
  }, fn:function(a) {
    f.isString(a) && (a = a.toFloat());
    return function(b) {
      return b > a
    }
  }}, {name:"gte", tag:">=", type:b, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 크거나 같은"
  }, fn:function(a) {
    f.isString(a) && (a = a.toFloat());
    return function(b) {
      return b >= a
    }
  }}, {name:"lt", tag:"<", type:e, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 작은"
  }, fn:function(a) {
    f.isString(a) && (a = a.toFloat());
    return function(b) {
      return b < a
    }
  }}, {name:"lte", tag:"<=", type:e, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 작거나 같은"
  }, fn:function(a) {
    f.isString(a) && (a = a.toFloat());
    return function(b) {
      return b <= a
    }
  }}, {name:"eq", tag:"=", type:a, comment:function(a, b) {
    return a + " 이(가) " + b + "인"
  }, fn:function(a) {
    f.isString(a) && (a = a.toFloat());
    return function(b) {
      return b === a
    }
  }}, {name:"neq", tag:"!=", type:c, comment:function(a, b) {
    return a + " 이(가) " + b + "이(가) 아닌"
  }, fn:function(a) {
    f.isString(a) && (a = a.toFloat());
    return function(b) {
      return b !== a
    }
  }}, {name:"contains", tag:"*=", comment:function(a, b) {
    return a + " 이(가) 숫자 " + b + "를 포함하는"
  }, fn:function(a) {
    a = f.isNumber(a) ? a.toString() : $.trim(a);
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
  }}, {name:"from", tag:">=", type:b, comment:function(a, b) {
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
    var a = a.toLowerCase(), b = f.split(a), c = b.length;
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
    var a = a.toLowerCase(), b = f.split(a), c = b.length;
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
