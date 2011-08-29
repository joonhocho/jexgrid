/**
 * JexGrid Build 40
 * Date: Mon Aug 29 10:58:21 KST 2011
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
      var f = Object(this), b = f.length >>> 0;
      if(b === 0) {
        return-1
      }
      var a = 0;
      arguments.length > 0 && (a = Number(arguments[1]), a !== a ? a = 0 : a !== 0 && a !== 1 / 0 && a !== -(1 / 0) && (a = (a > 0 || -1) * Math.floor(Math.abs(a))));
      if(a >= b) {
        return-1
      }
      for(a = a >= 0 ? a : Math.max(b - Math.abs(a), 0);a < b;a++) {
        if(a in f && f[a] === g) {
          return a
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
      var f = Object(this), b = f.length >>> 0;
      if(b === 0) {
        return-1
      }
      var a = b;
      arguments.length > 1 && (a = Number(arguments[1]), a !== a ? a = 0 : a !== 0 && a !== 1 / 0 && a !== -(1 / 0) && (a = (a > 0 || -1) * Math.floor(Math.abs(a))));
      for(b = a >= 0 ? Math.min(a, b - 1) : b - Math.abs(a);b >= 0;b--) {
        if(b in f && f[b] === g) {
          return b
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
      var b = Object(this), a = b.length >>> 0;
      if(typeof g !== "function") {
        throw new TypeError;
      }
      for(var c = [], d = 0;d < a;d++) {
        if(d in b) {
          var e = b[d];
          g.call(f, e, d, b) && c.push(e)
        }
      }
      return c
    }
  }
  if(!g.forEach) {
    g.forEach = function(g, f) {
      var b, a = Object(this), c = a.length >>> 0, d = 0;
      if(!g || !g.call) {
        throw new TypeError;
      }
      for(f && (b = f);d < c;) {
        var e = String(d);
        a.hasOwnProperty(e) && (e = a[e], g.call(b, e, d, a));
        d++
      }
    }
  }
  if(!g.every) {
    g.every = function(g, f) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var b = Object(this), a = b.length >>> 0;
      if(typeof g !== "function") {
        throw new TypeError;
      }
      for(var c = 0;c < a;c++) {
        if(c in b && !g.call(f, b[c], c, b)) {
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
      var b = Object(this), a = b.length >>> 0;
      if(typeof g !== "function") {
        throw new TypeError;
      }
      for(var c = Array(a), d = 0;d < a;d++) {
        d in b && (c[d] = g.call(f, b[d], d, b))
      }
      return c
    }
  }
  if(!g.some) {
    g.some = function(g, f) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var b = Object(this), a = b.length >>> 0;
      if(typeof g !== "function") {
        throw new TypeError;
      }
      for(var c = 0;c < a;c++) {
        if(c in b && g.call(f, b[c], c, b)) {
          return!0
        }
      }
      return!1
    }
  }
  if(!g.reduce) {
    g.reduce = function(g) {
      var f, b = this.length, a;
      if(typeof g !== "function") {
        throw new TypeError("First argument is not callable");
      }
      if((b == 0 || b === null) && arguments.length <= 1) {
        throw new TypeError("Array length is 0 and no second argument");
      }
      arguments.length <= 1 ? (a = this[0], f = 1) : a = arguments[1];
      for(f = f || 0;f < b;++f) {
        f in this && (a = g.call(void 0, a, this[f], f, this))
      }
      return a
    }
  }
  if(!g.reduceRight) {
    g.reduceRight = function(g) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var f = Object(this), b = f.length >>> 0;
      if(typeof g !== "function") {
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
        b in f && (a = g.call(void 0, a, f[b], b, f)), b--
      }
      return a
    }
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "engine_extension.js"...');
var engine_extension = {};
(function() {
  var g = Number.prototype, h = String.prototype, f = Array.prototype;
  if(!g.toFixedFloat) {
    g.toFixedFloat = function(b) {
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
      for(var a, c = 0, d = 0, e = b.length, i = 0, n = !1;i < e;i++) {
        if(a = b.charAt(i), a === ".") {
          if(++c === 2) {
            n = !0;
            break
          }
        }else {
          if(a === "-" && ++d === 2) {
            n = !0;
            break
          }
        }
      }
      return n === !0 && (b = b.replace(/[\.\-]/g, "")).length === 0 ? NaN : /^-*0*\./.test(b) || (b = b.replace(/^-0+/, "-")).length === 0 || (b = b.replace(/^0+/, "")).length === 0 ? 0 : parseInt(b, 10)
    }
  }
  if(!h.toFloat) {
    h.toFloat = function() {
      var b;
      if((b = this.replace(/[^-\d\.]/g, "")).length === 0) {
        return NaN
      }
      for(var a = 0, c = b.length, d, e = 0, i = 0;a < c;a++) {
        if(d = b.charAt(a), d === ".") {
          if(e !== 0) {
            return NaN
          }else {
            e++
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
  if(!f.remove) {
    f.remove = function(b) {
      if(this.length === 0) {
        return-1
      }
      b = this.indexOf(b);
      b !== -1 && this.splice(b, 1);
      return b
    }
  }
  if(!f.removeAll) {
    f.removeAll = function(b) {
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
  if(!f.removeList) {
    f.removeList = function(b) {
      if(this.length === 0 || b.length === 0) {
        return this
      }
      for(var a = b.length, c = 0, d;c < a;c++) {
        (d = this.indexOf(b[c])) !== -1 && this.splice(d, 1)
      }
      return this
    }
  }
  if(!f.removeAt) {
    f.removeAt = function(b) {
      if(this.length !== 0 && (b < 0 && (b = this.length + b), b < 0 && (b = 0), this.hasOwnProperty(b) && b < this.length)) {
        return this.splice(b, 1)[0]
      }
    }
  }
  if(!f.addAt) {
    f.addAt = function(b, a) {
      this.splice(b, 0, a);
      return a
    }
  }
  if(!f.pushList) {
    f.pushList = function(b) {
      return b.length === 0 ? this.length : f.push.apply(this, b)
    }
  }
  if(!f.pushListAt) {
    f.pushListAt = function(b, a) {
      if(a.length === 0) {
        return this.length
      }
      var c = [b, 0];
      f.push.apply(c, a);
      f.splice.apply(this, c);
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
    for(var h = g;h = h.substring(0, h.lastIndexOf("."));) {
      if(goog.getObjectByName(h)) {
        break
      }
      goog.implicitNamespaces_[h] = !0
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
goog.exportSymbol_ = function(g, h, f) {
  g = g.split(".");
  f = f || goog.global;
  !(g[0] in f) && f.execScript && f.execScript("var " + g[0]);
  for(var b;g.length && (b = g.shift());) {
    !g.length && goog.isDef(h) ? f[b] = h : f = f[b] ? f[b] : f[b] = {}
  }
};
goog.getObjectByName = function(g, h) {
  for(var f = g.split("."), b = h || goog.global, a;a = f.shift();) {
    if(goog.isDefAndNotNull(b[a])) {
      b = b[a]
    }else {
      return null
    }
  }
  return b
};
goog.globalize = function(g, h) {
  var f = h || goog.global, b;
  for(b in g) {
    f[b] = g[b]
  }
};
goog.addDependency = function(g, h, f) {
  if(!COMPILED) {
    for(var b, g = g.replace(/\\/g, "/"), a = goog.dependencies_, c = 0;b = h[c];c++) {
      a.nameToPath[b] = g, g in a.pathToNames || (a.pathToNames[g] = {}), a.pathToNames[g][b] = !0
    }
    for(b = 0;h = f[b];b++) {
      g in a.requires || (a.requires[g] = {}), a.requires[g][h] = !0
    }
  }
};
goog.ENABLE_DEBUG_LOADER = !0;
goog.require = function(g) {
  if(!COMPILED && !goog.isProvided_(g)) {
    if(goog.ENABLE_DEBUG_LOADER) {
      var h = goog.getPathFromDeps_(g);
      if(h) {
        goog.included_[h] = !0;
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
        for(var g = goog.global.document.getElementsByTagName("script"), h = g.length - 1;h >= 0;--h) {
          var f = g[h].src, b = f.lastIndexOf("?"), b = b == -1 ? f.length : b;
          if(f.substr(b - 7, 7) == "base.js") {
            goog.basePath = f.substr(0, b - 7);
            break
          }
        }
      }
    }
  }, goog.importScript_ = function(g) {
    var h = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_;
    !goog.dependencies_.written[g] && h(g) && (goog.dependencies_.written[g] = !0)
  }, goog.writeScriptTag_ = function(g) {
    return goog.inHtmlDocument_() ? (goog.global.document.write('<script type="text/javascript" src="' + g + '"><\/script>'), !0) : !1
  }, goog.writeScripts_ = function() {
    function g(a) {
      if(!(a in b.written)) {
        if(!(a in b.visited) && (b.visited[a] = !0, a in b.requires)) {
          for(var d in b.requires[a]) {
            if(!goog.isProvided_(d)) {
              if(d in b.nameToPath) {
                g(b.nameToPath[d])
              }else {
                throw Error("Undefined nameToPath for " + d);
              }
            }
          }
        }
        a in f || (f[a] = !0, h.push(a))
      }
    }
    var h = [], f = {}, b = goog.dependencies_, a;
    for(a in goog.included_) {
      b.written[a] || g(a)
    }
    for(a = 0;a < h.length;a++) {
      if(h[a]) {
        goog.importScript_(goog.basePath + h[a])
      }else {
        throw Error("Undefined script input");
      }
    }
  }, goog.getPathFromDeps_ = function(g) {
    return g in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[g] : null
  }, goog.findBasePath_()
}
goog.typeOf = function(g) {
  var h = typeof g;
  if(h == "object") {
    if(g) {
      if(g instanceof Array) {
        return"array"
      }else {
        if(g instanceof Object) {
          return h
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
    if(h == "function" && typeof g.call == "undefined") {
      return"object"
    }
  }
  return h
};
goog.propertyIsEnumerableCustom_ = function(g, h) {
  if(h in g) {
    for(var f in g) {
      if(f == h && Object.prototype.hasOwnProperty.call(g, h)) {
        return!0
      }
    }
  }
  return!1
};
goog.propertyIsEnumerable_ = function(g, h) {
  return g instanceof Object ? Object.prototype.propertyIsEnumerable.call(g, h) : goog.propertyIsEnumerableCustom_(g, h)
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
  var h = goog.typeOf(g);
  return h == "array" || h == "object" && typeof g.length == "number"
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
  }catch(h) {
  }
};
goog.UID_PROPERTY_ = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36);
goog.uidCounter_ = 0;
goog.getHashCode = goog.getUid;
goog.removeHashCode = goog.removeUid;
goog.cloneObject = function(g) {
  var h = goog.typeOf(g);
  if(h == "object" || h == "array") {
    if(g.clone) {
      return g.clone()
    }
    var h = h == "array" ? [] : {}, f;
    for(f in g) {
      h[f] = goog.cloneObject(g[f])
    }
    return h
  }
  return g
};
goog.bindNative_ = function(g, h, f) {
  return g.call.apply(g.bind, arguments)
};
goog.bindJs_ = function(g, h, f) {
  if(!g) {
    throw Error();
  }
  if(arguments.length > 2) {
    var b = Array.prototype.slice.call(arguments, 2);
    return function() {
      var a = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(a, b);
      return g.apply(h, a)
    }
  }else {
    return function() {
      return g.apply(h, arguments)
    }
  }
};
goog.bind = function(g, h, f) {
  goog.bind = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? goog.bindNative_ : goog.bindJs_;
  return goog.bind.apply(null, arguments)
};
goog.partial = function(g, h) {
  var f = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, f);
    return g.apply(this, b)
  }
};
goog.mixin = function(g, h) {
  for(var f in h) {
    g[f] = h[f]
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
        var h = goog.global.document, f = h.createElement("script");
        f.type = "text/javascript";
        f.defer = !1;
        f.appendChild(h.createTextNode(g));
        h.body.appendChild(f);
        h.body.removeChild(f)
      }
    }else {
      throw Error("goog.globalEval not available");
    }
  }
};
goog.evalWorksForGlobals_ = null;
goog.getCssName = function(g, h) {
  var f = function(a) {
    return goog.cssNameMapping_[a] || a
  }, b;
  b = goog.cssNameMapping_ ? goog.cssNameMappingStyle_ == "BY_WHOLE" ? f : function(a) {
    for(var a = a.split("-"), c = [], d = 0;d < a.length;d++) {
      c.push(f(a[d]))
    }
    return c.join("-")
  } : function(a) {
    return a
  };
  return h ? g + "-" + b(h) : b(g)
};
goog.setCssNameMapping = function(g, h) {
  goog.cssNameMapping_ = g;
  goog.cssNameMappingStyle_ = h
};
goog.getMsg = function(g, h) {
  var f = h || {}, b;
  for(b in f) {
    var a = ("" + f[b]).replace(/\$/g, "$$$$"), g = g.replace(RegExp("\\{\\$" + b + "\\}", "gi"), a)
  }
  return g
};
goog.exportSymbol = function(g, h, f) {
  goog.exportSymbol_(g, h, f)
};
goog.exportProperty = function(g, h, f) {
  g[h] = f
};
goog.inherits = function(g, h) {
  function f() {
  }
  f.prototype = h.prototype;
  g.superClass_ = h.prototype;
  g.prototype = new f;
  g.prototype.constructor = g
};
goog.base = function(g, h, f) {
  var b = arguments.callee.caller;
  if(b.superClass_) {
    return b.superClass_.constructor.apply(g, Array.prototype.slice.call(arguments, 1))
  }
  for(var a = Array.prototype.slice.call(arguments, 2), c = !1, d = g.constructor;d;d = d.superClass_ && d.superClass_.constructor) {
    if(d.prototype[h] === b) {
      c = !0
    }else {
      if(c) {
        return d.prototype[h].apply(g, a)
      }
    }
  }
  if(g[h] === b) {
    return g.constructor.prototype[h].apply(g, a)
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
  var g = window.console, h = [], f;
  f = g && g.log ? function(b) {
    for(var a = 0, c = arguments.length;a < c;a++) {
      g.log(arguments[a])
    }
  } : function(b) {
    h.push.apply(h, arguments)
  };
  goog.exportSymbol("jx.util", Util);
  goog.exportSymbol("Util", Util);
  goog.exportSymbol("echo", f);
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
      for(var d = [], e = b.length, i = 0, c = c !== void 0 ? c - 1 : void 0;i < e;i++) {
        i in b && (d[i] = Util.clone(b[i], a, c))
      }
      return d
    }
    d = {};
    e = Util.isEmptyObj(a);
    if(c === 1) {
      if(e) {
        for(i in b) {
          b.hasOwnProperty(i) && (d[i] = b[i])
        }
      }else {
        for(i in a) {
          a.hasOwnProperty(i) && b.hasOwnProperty(i) && (d[i] = b[i])
        }
      }
    }else {
      if(c = c !== void 0 ? c - 1 : void 0, e) {
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
  Util.formatNumber = function(b, a, c, d, e) {
    var c = c === void 0 ? "&#8361; " : c, a = isNaN(a) ? 0 : a, d = d === void 0 ? "." : d, e = e === void 0 ? "," : e, i = b < 0 ? "-" : "", n = parseInt(b = Math.abs(+b || 0).toFixed(a), 10) + "", j = n.length, j = j > 3 ? j % 3 : 0;
    return c + i + (j ? n.substr(0, j) + e : "") + n.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + e) + (a ? d + Math.abs(b - n).toFixed(a).slice(2) : "")
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
      for(var c = b.classList ? b.classList : Util.split(b.className), d = 0, e = c.length;d < e;d++) {
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
      for(var c = 0, d = b.childNodes, e = d.length, i;c < e;c++) {
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
      for(var d = 0, b = b.childNodes, e = b.length, i;d < e;d++) {
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
    for(var d = 0, b = b.childNodes, e = b.length;d < e;d++) {
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
    for(var e = 0, b = b.childNodes, i = b.length;e < i;e++) {
      Util.isNotNull(b[e]) && Util.findByTagAndClass(b[e], a, c, d)
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
    var c = document.createElement("div"), d, e = 0, i = [];
    c.innerHTML = a;
    for(d = c.childNodes.length;e < d;e++) {
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
    var d = c.length, e = c[0];
    if(d === 1) {
      return e === "array" ? Util.areEqualArrays(b, a) : Util.areEqualObjects(b, a)
    }
    if(d > 1) {
      c = c.slice(1);
      d = 0;
      if(e === "array") {
        if(b.length !== a.length) {
          return!1
        }
        for(e = b.length;d < e;d++) {
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
  Util.typeCheck = function(b, a, c, d, e) {
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
    if(e) {
      return!1
    }
    throw new TypeError("object is not a " + b + ", but is a " + typeof a);
  };
  Util.sprint = function(b, a, c, d) {
    Util.typeCheck("string", b);
    Util.typeCheck("object", a);
    Util.typeCheck("string", c, !0);
    Util.typeCheck("string", d, !0);
    var e;
    c === void 0 && (c = "%");
    d === void 0 && (d = "%");
    for(e in a) {
      a.hasOwnProperty(e) && (b = b.replace(RegExp(c + e + d, "gm"), a[e]))
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
    if(f) {
      if(arguments.length === 1) {
        f(arguments[0])
      }else {
        for(var a = 0, c = arguments.length;a < c;a++) {
          f(arguments[a])
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
window.console && window.console.log && window.console.log('reading javascript source "Tracer.js"...');
var Tracer = {};
(function() {
  function g() {
    this.stack = "";
    this.timers = {}
  }
  var h = goog.getObjectByName("jx.util");
  goog.exportSymbol("Tracer", g);
  var f = g.prototype;
  f.print = function(b, a, c) {
    b === void 0 && (b = "");
    a === void 0 && (a = "timer");
    c === void 0 && (c = !0);
    var d = this.timers[a], e = (new Date).getTime(), d = h.isNull(d) ? 0 : e - d;
    h.print((this.stack.length > 0 ? this.stack + " :: " : "") + b + ", Time elapsed since last update: " + d + "ms");
    c && (this.timers[a] = e)
  };
  f.addStack = function(b) {
    this.stack = this.stack + " > " + b
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
    var b = this.laps = [];
    this._stopped = !1;
    b.push(f || null, (new Date).getTime())
  }
  goog.exportSymbol("TimeWatch", g);
  var h = g.prototype;
  h.lap = function(f) {
    if(this._stopped) {
      throw Error("TimeWatch was stopped, thus cannot lap. Please reset!");
    }
    this.laps.push(f || null, (new Date).getTime())
  };
  h.stop = function(f) {
    this._stopped = !0;
    this.laps.push(f || null, (new Date).getTime())
  };
  h.reset = function(f) {
    var b = this.laps;
    b.length = 0;
    this._stopped = !1;
    b.push(f || null, (new Date).getTime())
  };
  h.toString = function() {
    var f = this.laps, b = f.length, a = 2, c = b - (this._stopped ? 2 : 0), d = f[0], e = f[1], i = e, b = b > 2 ? [] : null, n = 0, j = "TimeWatch\n";
    for(j += "start" + (d ? ": " + d : "") + " @" + e + "\n";a < c;a += 2) {
      d = (d = f[a]) ? ": " + d : "", e = f[a + 1], b.push(i = e - i), n += i, j += "lap " + a / 2 + d + " @" + e + " +" + i + "ms\n", i = e
    }
    c >= 2 && this._stopped && (d = (d = f[c]) ? ": " + d : "", e = f[c + 1], b.push(i = e - i), n += i, j += "stop" + d + " @" + e + " +" + i + "ms\n");
    if(b) {
      var f = b.length, o = n / f, g = 0;
      j += "total number of laps: " + f + "\n";
      j += "total elapsed time: " + n + "ms\n";
      j += "average lap time: " + o.toFixed(2) + "ms\n";
      b.forEach(function(a) {
        g += (a - o) * (a - o)
      });
      g = Math.sqrt(g / f);
      j += "standard deviation: " + g.toFixed(2) + "ms\n"
    }
    return j
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
    var h, f, b, a;
    if(this.length <= 1) {
      return h = this.getBoundingRect(), b = g.pageX, a = g.pageY, b >= h.left && b <= h.left + h.width && a >= h.top && a <= h.top + h.height
    }
    f = !1;
    this.each(function() {
      h = $(this).getBoundingRect();
      b = g.pageX;
      a = g.pageY;
      if(b >= h.left && b <= h.left + h.width && a >= h.top && a <= h.top + h.height) {
        return f = !0, !1
      }
    });
    return f
  };
  Util$.baseurlOfHeadScript = function(g) {
    var h = $(document.getElementsByTagName("head")[0]).find("script[src$='" + g + "']").attr("src");
    return h.substring(0, h.indexOf(g))
  };
  Util$.calScrollbarDims = function(g) {
    if(Util.isNotNull(window._SCROLLBAR)) {
      return window._SCROLLBAR
    }
    if(Util.isNotNull(window.opener) && Util.isNotNull(window.opener._SCROLLBAR)) {
      return window.opener._SCROLLBAR
    }
    var g = Util$.safe$(g), h;
    g[0].innerHTML = "<div id='scrollbardim' style='position:absolute;top:-10000px;left:-10000px;width:100px;height:100px;overflow:scroll;'></div>";
    h = $(document.getElementById("scrollbardim"));
    h = {w:h.width() - h[0].clientWidth, h:h.height() - h[0].clientHeight};
    g[0].innerHTML = "";
    return window._SCROLLBAR = h
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "bootstrap.js"...');
jx.grid = {};
var JGM = {};
(function() {
  var g = goog.getObjectByName("jx.util"), h = goog.getObjectByName("jx.util$");
  goog.exportSymbol("JGM", JGM);
  goog.exportSymbol("jx.grid", JGM);
  JGM.version = "2.0.0";
  JGM._map = {ArrayExtIE:{cacheModule:!1}, Cache:{cacheModule:!0}, Cell:{cacheModule:!1}, CheckManager:{cacheModule:!0}, ColumnManager:{cacheModule:!0}, ColumnGroup:{cacheModule:!0}, ColumnHeader:{cacheModule:!0}, Collapser:{cacheModule:!0}, DataManager:{cacheModule:!0}, DataCreator:{cacheModule:!0}, EditManager:{cacheModule:!0}, Editor:{cacheModule:!0}, EngineExt:{cacheModule:!1}, EventManager:{cacheModule:!0}, Footer:{cacheModule:!0}, HeaderTree:{cacheModule:!0}, Grid:{cacheModule:!0}, GridManager:{cacheModule:!1}, 
  MenuBar:{cacheModule:!0}, ViewportManager:{cacheModule:!0}, SelectionManager:{cacheModule:!0}, SearchManager:{cacheModule:!0}, TooltipManager:{cacheModule:!0}, Tracer:{cacheModule:!1}, Tree:{cacheModule:!0}, TreeNode:{cacheModule:!1}, Util:{cacheModule:!1}, Util$:{cacheModule:!1}};
  JGM.create = function(f, b) {
    b == null && (b = {});
    if(!JGM.hasOwnProperty(f)) {
      throw Error("cannot find a grid module: name=" + f);
    }
    if(JGM._map.hasOwnProperty(f)) {
      if(JGM._map[f].cacheModule) {
        var a = b.mid = "JGM" + JGM.m.length++, c = new JGM[f](b);
        JGM.m.hasOwnProperty(f) || (JGM.m[f] = {});
        JGM.m[f][a] = c;
        if(f === "Grid") {
          if(c.name == null) {
            c.name = JGM.grids.length
          }
          JGM.gridMap[c.name] = c;
          JGM.grids.push(c)
        }
        return c
      }else {
        return new JGM[f](b)
      }
    }else {
      return new JGM[f](b)
    }
  };
  JGM._destroy = function(f, b) {
    var a, c, d, e;
    for(c in b) {
      if(b.hasOwnProperty(c)) {
        switch(c) {
          case "map":
            a = b[c];
            if(g.isString(a)) {
              a = g.split(a);
              e = a.length;
              for(d = 0;d < e;d++) {
                JGM._deleteMap(f, a[d])
              }
            }else {
              if(a instanceof Array) {
                e = a.length;
                for(d = 0;d < e;d++) {
                  g.emptyObject(a[d])
                }
              }else {
                g.emptyObject(a)
              }
            }
            break;
          case "array":
            a = b[c];
            if(g.isString(a)) {
              a = g.split(a);
              e = a.length;
              for(d = 0;d < e;d++) {
                JGM._deleteArray(f, a[d])
              }
            }else {
              a.length = 0
            }
            break;
          case "$":
            a = b[c];
            if(g.isString(a)) {
              a = g.split(a);
              e = a.length;
              for(d = 0;d < e;d++) {
                JGM._delete$(f, a[d])
              }
            }else {
              if(a instanceof Array) {
                e = a.length;
                for(d = 0;d < e;d++) {
                  h.unbindRemove(a[d])
                }
              }else {
                h.unbindRemove(a)
              }
            }
            break;
          case "style":
            a = b[c];
            if(g.isString(a)) {
              a = g.split(a);
              e = a.length;
              for(d = 0;d < e;d++) {
                JGM._deleteStyle(f, a[d])
              }
            }else {
              if(a instanceof Array) {
                e = a.length;
                for(d = 0;d < e;d++) {
                  g.removeStyle(a[d])
                }
              }else {
                g.removeStyle(a)
              }
            }
            break;
          case "property":
            a = b[c];
            if(g.isString(a)) {
              a = g.split(a);
              e = a.length;
              for(d = 0;d < e;d++) {
                delete f[a[d]]
              }
            }else {
              if(a instanceof Array) {
                e = a.length;
                for(d = 0;d < e;d++) {
                  delete f[a[d]]
                }
              }
            }
            break;
          case "module":
            a = b[c];
            if(g.isString(a)) {
              a = g.split(a);
              e = a.length;
              for(d = 0;d < e;d++) {
                JGM._deleteModule(f, a[d])
              }
            }else {
              if(a instanceof Array) {
                e = a.length;
                for(d = 0;d < e;d++) {
                  a[d].destroy()
                }
              }else {
                a.destroy()
              }
            }
            break;
          case "name":
            f.hasOwnProperty("mid") && (JGM._remove(b[c], f.mid), delete f.mid);
            break;
          case "path":
            f.hasOwnProperty("grid") && f.grid.hasOwnProperty(b[c]) && (delete f.grid[b[c]], delete f.grid)
        }
      }
    }
    g.emptyObject(f)
  };
  JGM._deleteMap = function(f, b) {
    f.hasOwnProperty(b) && (g.emptyObject(f[b]), delete f[b])
  };
  JGM._deleteArray = function(f, b) {
    if(f.hasOwnProperty(b)) {
      f[b].length = 0, delete f[b]
    }
  };
  JGM._delete$ = function(f, b) {
    f.hasOwnProperty(b) && (h.unbindRemove(f[b]), delete f[b])
  };
  JGM._deleteStyle = function(f, b) {
    f.hasOwnProperty(b) && (g.removeStyle(f[b]), delete f[b])
  };
  JGM._deleteModule = function(f, b) {
    f.hasOwnProperty(b) && (f[b].destroy(), delete f[b])
  };
  JGM._remove = function(f, b) {
    delete JGM.m[f][b]
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
  JGM._add = function(f, b) {
    JGM[f] = b
  };
  JGM._extend = function(f, b) {
    var a = g.ifNull(b, {});
    $.extend(!0, f, a);
    $.extend(!0, a, f);
    return a
  };
  JGM.m = {length:0};
  JGM._CONST = {_cssUnselectable:"-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none;", _checkboxWidth:void 0, _checkboxHeight:void 0, _radioWidth:void 0, _radioHeight:void 0};
  JGM._globalEventsBound = !1;
  JGM._globalEvents = {_mousemove:function(f) {
    var b, a = JGM.m.Grid;
    for(b in a) {
      a.hasOwnProperty(b) && a[b]._mousemove(f)
    }
  }, _mouseup:function(f) {
    var b, a = JGM.m.Grid;
    for(b in a) {
      a.hasOwnProperty(b) && a[b]._mouseup(f)
    }
  }, _resize:function(f) {
    var b, a = JGM.m.Grid;
    for(b in a) {
      a.hasOwnProperty(b) && a[b]._resize(f)
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
  JGM.chart = function(f, b, a, c, d) {
    var e, b = b.toLowerCase();
    switch(b) {
      case "area":
        b = "corechart";
        e = "AreaChart";
        break;
      case "bar":
        b = "corechart";
        e = "BarChart";
        break;
      case "candle":
        b = "corechart";
        e = "CandlestickChart";
        break;
      case "column":
        b = "corechart";
        e = "ColumnChart";
        break;
      case "combo":
        b = "corechart";
        e = "ComboChart";
        break;
      case "gauge":
        b = "gauge";
        e = "Gauge";
        break;
      case "geo":
        b = "geochart";
        e = "GeoChart";
        break;
      case "line":
        b = "corechart";
        e = "LineChart";
        break;
      case "pie":
        b = "corechart";
        e = "PieChart";
        break;
      case "scatter":
        b = "corechart";
        e = "ScatterChart";
        break;
      case "table":
        b = "table";
        e = "Table";
        break;
      case "treemap":
        b = "treemap";
        e = "TreeMap";
        break;
      default:
        throw Error("unknown chart type: " + b);
    }
    google.load("visualization", "1", {packages:[b]});
    var i = JGM.exportToArray(d, a.map(function(a) {
      return a.key
    }));
    google.setOnLoadCallback(function() {
      for(var d = new google.visualization.DataTable, b = 0, o = a.length, g, h;b < o;b++) {
        g = a[b];
        h = g.type;
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
        d.addColumn(h || typeof i[0][b] || b === 0 && "string" || "number", g.name)
      }
      d.addRows(i);
      (new google.visualization[e](document.getElementById(f))).draw(d, c)
    })
  };
  JGM.exportToArray = function(f, b) {
    for(var a, c = [], d, e, i = 0, n = f.length, j, o = b.length;i < n;i++) {
      d = f[i];
      j = 0;
      for(a = [];j < o;j++) {
        e = b[j], a.push(e in d ? d[e] : null)
      }
      c.push(a)
    }
    return c
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
    var f = g.mapping, b = g.attr, a = g["default"], c = g.style, d = g.callback, e, i, n, j = 0, o = [], m = [], p = "<select";
    if(b) {
      for(n in b) {
        b.hasOwnProperty(n) && (p += " " + n + '="' + b[n] + '"')
      }
    }
    if(c) {
      p += ' style="';
      for(n in c) {
        c.hasOwnProperty(n) && (p += n + ":" + c[n] + ";")
      }
      p += '"'
    }
    p += ">";
    for(e in f) {
      f.hasOwnProperty(e) && (g = f[e], o.push(e), m.push(g), a == g && (i = j), j++)
    }
    return function(a) {
      var c, e, b = p;
      for(e = 0;e < j;e++) {
        if(a == m[e]) {
          c = e;
          break
        }
      }
      c === void 0 && (c = i);
      for(e = 0;e < j;e++) {
        b += '<option value="' + m[e] + '"', e === c && (b += ' selected="selected"'), b += ">" + o[e] + "</option>"
      }
      b += "</select>";
      d && (c = [], c.push(b), Array.prototype.push.apply(c, arguments), b = d.apply(this, c));
      return b
    }
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "Disposable.js"...');
jx.lang = {};
jx.lang.Disposable = {};
(function() {
  function g() {
  }
  function h(a, c, i) {
    if(typeof a != "object") {
      return!1
    }
    var b, j, f;
    if(c) {
      for(var i = 0, g = c.length;i < g;i++) {
        if(b = c[i], this.hasOwnProperty(b)) {
          if(a.hasOwnProperty(b)) {
            if(j = this[b], f = a[b], j !== a && !(j === j || f === f)) {
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
            f = a[b];
            if(j !== f) {
              if(j) {
                if(typeof j != "object" || typeof f != "object") {
                  return!1
                }
                if(j.equals) {
                  if(!j.equals(f, null, i - 1)) {
                    return!1
                  }
                }else {
                  if(f.equals && !f.equals(j, null, i - 1)) {
                    return!1
                  }
                }
                if(!h.call(j, f, null, i - 1)) {
                  return!1
                }
              }else {
                if(!(j === j || f === f)) {
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
              if(j = this[b], f = a[b], j !== a && !(j === j || f === f)) {
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
  function f(a, e) {
    if(this != goog.global) {
      var i, b;
      if(a) {
        for(i in this) {
          if(this.hasOwnProperty(i)) {
            if((b = this[i]) && typeof b == "object") {
              if(b.dispose) {
                b.dispose(a - 1, e)
              }else {
                if(e) {
                  if(c(b)) {
                    b.length = 0
                  }
                  f.call(b, a - 1, e)
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
  goog.exportSymbol("jx.lang.Disposable", g);
  goog.exportProperty(g.prototype, "dispose", f);
  var a = g.prototype, c = b.isArray;
  b.equals = Object.equals = function(a, c, i, b) {
    return typeof a == "object" ? h.call(a, c, i, b) : a !== a && c !== c
  };
  b.dispose = Object.dispose = function(a, c, i) {
    if(typeof a == "object") {
      return f.call(a, c, i)
    }
  };
  a.equals = h;
  a.dispose = f
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
  var h = goog.getObjectByName("jx.util"), f = goog.getObjectByName("jx.lang.Disposable");
  goog.exportSymbol("jx.grid.Cell", g);
  goog.inherits(g, f);
  g.getInstance = function(a) {
    return new g(a)
  };
  var b = g.prototype, a = f.prototype.dispose;
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
window.console && window.console.log && window.console.log('reading javascript source "EventDispatcher.js"...');
jx.events = {};
jx.events.EventDispatcher = {};
(function() {
  function g() {
  }
  goog.getObjectByName("jx.grid");
  goog.getObjectByName("jx.util");
  var h = goog.getObjectByName("jx.lang.Disposable");
  goog.exportSymbol("jx.events.EventDispatcher", g);
  goog.inherits(g, h);
  var f = g.prototype, b = h.prototype.dispose;
  f.dispose = function() {
    b.call(this._handlers, -1, !0);
    b.call(this)
  };
  f.addEventListener = function(a, c) {
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
  f.removeEventListener = function(a, c) {
    if(this._handlers) {
      var a = (a + "").toLowerCase(), d = this._handlers;
      if(d.hasOwnProperty(a)) {
        for(var e = d[a], i = -1;(i = e.indexOf(c, i + 1)) !== -1;) {
          e.splice(i--, 1)
        }
        e.length === 0 && delete d[a]
      }
    }
  };
  f.dispatchEvent = function(a) {
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
      for(var c = c[d].slice(), d = 0, e = c.length, i;d < e && !a.stopPropagation;d++) {
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
    var b = "column key=" + this.key;
    if(this.manager.hasKey(this.key)) {
      throw Error("Duplicate column key!" + b);
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
      throw Error("Invalid parser!" + b);
    }
    this.parser = f.parser || null;
    if(f.validator && typeof f.validator != "function") {
      throw Error("Invalid validator!" + b);
    }
    this.validator = f.validator || null;
    if(f.renderer && typeof f.renderer != "function") {
      throw Error("Invalid renderer!" + b);
    }
    this.renderer = f.renderer || null;
    if(f.sumRenderer && typeof f.sumRenderer != "function") {
      throw Error("Invalid sum renderer!" + b);
    }
    this.sumRenderer = f.sumRenderer || null;
    if(f.editor && typeof f.editor != "object") {
      throw Error("Invalid editor!" + b);
    }
    this.editor = f.editor || null;
    this.sorter = f.sorter || null;
    this.filter = f.filter || null
  }
  var h = goog.getObjectByName("jx.events.EventDispatcher");
  goog.exportSymbol("jx.grid.Column", g);
  goog.inherits(g, h);
  h = g.prototype;
  h.show = function() {
    return this.hidden ? (this.hidden = !1, this.dispatchEvent({type:"hidden", value:!1}), !0) : !1
  };
  h.hide = function() {
    return!this.hidden ? (this.hidden = !0, this.dispatchEvent({type:"hidden", value:!0}), !0) : !1
  };
  h.setHidden = function(f) {
    return f ? this.hide() : this.show()
  };
  h.setWidth = function(f) {
    return(f = Number(f)) && this.width !== f ? (this.width = f, this.dispatchEvent({type:"width", value:f}), f) : !1
  };
  h.setRenderer = function(f) {
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
  function g(b) {
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
    var d = this, e = this.grid;
    e && ["Dispose", "CreateCss", "CreateDynamicCss", "Render", "Keydown", "Keyup", "Keypress", "Mousein", "Mouseout", "Mouseenter", "Mouseleave", "Mousemove", "Mouseover", "Mousedown", "Mouseup", "Click", "Dblclick", "Resize", "ResizeWidth", "ResizeHeight", "Scroll", "ScrollH", "ScrollV"].forEach(function(a) {
      var c = "before" + a, a = "after" + a, b = "_" + c, f = "_" + a;
      d[b] && e.addEventListener(c, function(a) {
        return d[b](a)
      });
      d[f] && e.addEventListener(a, function(a) {
        return d[f](a)
      })
    });
    this._bindEvents && (this.dispatchEvent({type:"beforebindevents"}), this._bindEvents(b), this.dispatchEvent({type:"afterbindevents"}));
    this.dispatchEvent({type:"complete"})
  }
  var h = goog.getObjectByName("jx.events.EventDispatcher");
  goog.exportSymbol("jx.grid.BaseModule", g);
  goog.inherits(g, h);
  var h = g.prototype, f = h.dispose;
  h._beforeDispose = function() {
    this.dispose()
  };
  h.dispose = function() {
    delete this.grid;
    this.dispatchEvent({type:"beforedispose"});
    f.call(this)
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
      var e, c = "";
      a.hasOwnProperty("_prepend") && (a._prepend && d.push(a._prepend), delete a._prepend);
      a.hasOwnProperty("_append") && (a._append && (c = ";" + a._append), delete a._append);
      for(e in a) {
        d.push(e + ":" + a[e])
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
window.console && window.console.log && window.console.log('reading javascript source "DataManager.js"...');
jx.data = {};
jx.data.DataManager = {};
(function() {
  function g(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    this.grid.dataMgr = this;
    this.all = [];
    this.datalist = [];
    this.failed = [];
    this._options = h._extend({idKey:void 0, idColKeys:[], uniqueKeys:[]}, a.options);
    this._consts = {_auto:0, _given:1, _composite:2, _notReal:this.mid + "@NR" + f.random(1E4), _add:0, _addList:1, _update:2, _updateList:3, _remove:4, _removeList:5, unknown:0, number:1, string:2, "boolean":3, date:4, "enum":5};
    this._options.idKey != null ? (this._idMode = this._consts._given, this.idKey = this._options.idKey) : (this._idMode = this._options.idColKeys.length !== 0 ? this._consts._composite : this._consts._auto, this.idKey = "J@I" + this.mid + "@" + f.random(1E4));
    this._increment = 1;
    this._idToIdx = {};
    this._idToData = {};
    this._filters = [];
    this._history = [];
    this._redoHistory = [];
    this.uniqueMap = !1;
    this.__init(a)
  }
  var h = goog.getObjectByName("jx.grid"), f = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.data.DataManager", g);
  h._add("DataManager", g);
  g.getInstance = function(a) {
    return new g(a)
  };
  var b = g.prototype;
  b.__init = function(a) {
    var c = this.uniqueMap = {}, d = 0, e, i = this._options.uniqueKeys, b = !1;
    if(i && i.length) {
      b = !0;
      for(e = i.length;d < e;d++) {
        c[i[d]] = {}
      }
    }
    var i = this.grid.colDefMgr.getAll(), j, d = 0;
    for(e = i.length;d < e;d++) {
      j = i[d], j.unique && (b = !0, c[j.key] = {})
    }
    if(!b) {
      this.uniqueMap = !1
    }
    this.bindEvents();
    this.set(a.datalist)
  };
  b.bindEvents = function() {
    this.grid.event.bind({onDestroy:this._destroy, keydownCanvas:this._keydownCanvas}, this)
  };
  b._destroy = function() {
    this.cleanList(this.all);
    h._destroy(this, {name:"DataManager", path:"dataMgr", property:"all _idMode _increment idKey _sorter", map:"_consts _idToIdx _idToData _options", array:"datalist failed _history _redoHistory _filters"})
  };
  b.addUniqueIndex = function(a, c, d) {
    if(!d.hasOwnProperty(c)) {
      return this.grid.error("KEY_UNDEFINED", c)
    }
    var e = d[c];
    if(e == null || e === "") {
      return this.grid.error("BAD_NULL", c)
    }
    if(a.hasOwnProperty(e)) {
      return a[e] === d ? !1 : this.grid.error("DUP_ENTRY", e, c)
    }
    a[e] = d;
    return!0
  };
  b.addUniqueIndices = function(a, c, d) {
    var e, i = d.length, b = [], j, f;
    for(e = 0;e < i;e++) {
      if(f = d[e]) {
        if(j = this.addUniqueIndex(a, c, f)) {
          if(j instanceof Error) {
            return this.removeUniqueIndices(a, c, b), j
          }
          b.push(a[f[c]] = f)
        }
      }
    }
    return b.length > 0
  };
  b.updateUniqueIndex = function(a, c, d, e, i) {
    if(e.hasOwnProperty(c)) {
      if(!i.hasOwnProperty(c) || !d.hasOwnProperty(c)) {
        return this.grid.error("KEY_UNDEFINED", c)
      }
      if(!a.hasOwnProperty(i = i[c])) {
        return this.grid.error("KEY_NOT_FOUND", i, c)
      }
      e = e[c];
      if(e == null || e === "") {
        return this.grid.error("BAD_NULL", c)
      }
      if(a.hasOwnProperty(e)) {
        return a[e] === d ? !1 : this.grid.error("DUP_ENTRY", e, c)
      }
      a[e] = d;
      delete a[i];
      return i
    }
    return!1
  };
  b.updateUniqueIndices = function(a, c, d, e, i, b) {
    if(b !== !0) {
      if(f.isEmptyObj(a) || f.isEmptyString(c) || f.isEmptyArray(d) || f.isEmptyArray(e) || f.isEmptyArray(i)) {
        return!1
      }
      if(d.length !== e.length || d.length !== i.length) {
        return this.grid.error("LENGTH_NOT_EQUAL")
      }
    }
    for(var b = 0, j = d.length, o, g, h, q = [], l = [], k = [], r, s;b < j;b++) {
      if(!f.isNull(o = d[b])) {
        if((h = e[b]).hasOwnProperty(c)) {
          g = i[b];
          if(!g.hasOwnProperty(c) || !o.hasOwnProperty(c)) {
            return this.updateUniqueIndices(a, c, q, k, l), this.grid.error("KEY_UNDEFINED", c)
          }
          if(!a.hasOwnProperty(s = g[c])) {
            return this.updateUniqueIndices(a, c, q, k, l), this.grid.error("KEY_NOT_FOUND", s, c)
          }
          if(f.isEmptyString(r = h[c])) {
            return this.updateUniqueIndices(a, c, q, k, l), this.grid.error("BAD_NULL", c)
          }
          if(a.hasOwnProperty(r)) {
            if(a[r] === o) {
              continue
            }
            this.updateUniqueIndices(a, c, q, k, l);
            return this.grid.error("DUP_ENTRY", r, c)
          }
          a[r] = o;
          delete a[s];
          q.push(o);
          l.push(h);
          k.push(g)
        }
      }
    }
    return!q.length ? !1 : {datalist:q, changes:l, befores:k}
  };
  b.removeUniqueIndex = function(a, c, d) {
    var e;
    d.hasOwnProperty(c) && a.hasOwnProperty(e = d[c]) && delete a[e]
  };
  b.removeUniqueIndices = function(a, c, d, e) {
    if(!(e !== !0 && (f.isEmptyObj(a) || f.isEmptyString(c) || f.isEmptyArray(d)))) {
      for(var i = d.length, b, j, e = 0;e < i;e++) {
        j = d[e], j.hasOwnProperty(c) && a.hasOwnProperty(b = j[c]) && delete a[b]
      }
    }
  };
  b.addToUniqueMap = function(a) {
    if(this.uniqueMap) {
      var c = [], d, e = this.uniqueMap, i;
      for(d in e) {
        if(e.hasOwnProperty(d) && (i = this.addUniqueIndex(e[d], d, a))) {
          if(i instanceof Error) {
            d = 0;
            for(var b = c.length;d < b;d++) {
              this.removeUniqueIndex(e[c[d]], c[d], a)
            }
            return i
          }
          c.push(d)
        }
      }
      return c.length > 0
    }
    return!1
  };
  b.addListToUniqueMap = function(a) {
    if(this.uniqueMap) {
      var c = this.uniqueMap, d = [], e, i;
      for(e in c) {
        if(c.hasOwnProperty(e) && (i = this.addUniqueIndices(c[e], e, a))) {
          if(i instanceof Error) {
            e = 0;
            for(var b = d.length;e < b;e++) {
              this.removeUniqueIndices(c[d[e]], d[e], a)
            }
            return i
          }
          d.push(e)
        }
      }
      return d.length > 0
    }
    return!1
  };
  b.updateUniqueMap = function(a, c, d) {
    if(this.uniqueMap) {
      var e, i = this.uniqueMap, b = [], j;
      for(e in i) {
        if(i.hasOwnProperty(e) && (j = this.updateUniqueIndex(i[e], e, a, c, d))) {
          if(j instanceof Error) {
            e = 0;
            for(var f = b.length;e < f;e++) {
              this.updateUniqueIndex(i[b[e]], b[e], a, d, c)
            }
            return j
          }
          b.push(e)
        }
      }
      return b.length > 0
    }
    return!1
  };
  b.updateListUniqueMap = function(a, c, d) {
    if(this.uniqueMap) {
      var e, i = this.uniqueMap, b = [], j;
      for(e in i) {
        if(i.hasOwnProperty(e) && (j = this.updateUniqueIndices(i[e], e, a, c, d))) {
          if(j instanceof Error) {
            e = 0;
            for(var f = b.length;e < f;e++) {
              this.updateUniqueIndices(i[b[e]], b[e], a, d, c)
            }
            return j
          }
          b.push(e)
        }
      }
      return b.length > 0
    }
    return!1
  };
  b.removeFromUniqueMap = function(a) {
    if(this.uniqueMap) {
      var c, d = this.uniqueMap;
      for(c in d) {
        d.hasOwnProperty(c) && this.removeUniqueIndex(d[c], c, a)
      }
    }
  };
  b.removeListFromUniqueMap = function(a) {
    if(this.uniqueMap) {
      var c, d = this.uniqueMap;
      for(c in d) {
        d.hasOwnProperty(c) && this.removeUniqueIndices(d[c], c, a)
      }
    }
  };
  b.addToIdMap = function(a) {
    var c = this.idKey;
    switch(this._idMode) {
      case this._consts._auto:
        a.hasOwnProperty(c) || (a[c] = this._increment++);
      case this._consts._given:
      ;
      case this._consts._composite:
        return this.addUniqueIndex(this._idToData, c, a)
    }
    return!1
  };
  b.addListToIdMap = function(a) {
    var c = this.idKey;
    switch(this._idMode) {
      case this._consts._auto:
        for(var d = 0, e, i = a.length;d < i;d++) {
          if(!(e = a[d]).hasOwnProperty(c)) {
            e[c] = this._increment++
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
    if(f.isNullOr(a, d) || f.isEmptyObj(c)) {
      return!1
    }
    var e = this.idKey;
    switch(this._idMode) {
      case this._consts._auto:
        if(c.hasOwnProperty(e)) {
          return this.grid.error("NOT_MODIFIABLE", e)
        }
      ;
      case this._consts._given:
        return this.updateUniqueIndex(this._idToData, e, a, c, d);
      case this._consts._composite:
        if(c.hasOwnProperty(e)) {
          return this.grid.error("NOT_MODIFIABLE", e)
        }
        for(var d = this._options.idColKeys, i = d.length, b = 0;b < i;b++) {
          if(c.hasOwnProperty(d[b])) {
            for(var j = "", g = 0, m, h, q = {}, l = {}, b = l[e] = a[e];g < i;g++) {
              if(m = d[g], c.hasOwnProperty(m)) {
                if(f.isEmptyString(h = c[m])) {
                  return this.grid.error("BAD_NULL", m)
                }
                j += "&" + h
              }else {
                j += "&" + a[m]
              }
            }
            a[e] = q[e] = j;
            if(b === j) {
              break
            }
            c = this.updateUniqueIndex(this._idToData, e, a, q, l);
            c instanceof Error && (a[e] = b);
            return c
          }
        }
    }
    return!1
  };
  b.updateListIdMap = function(a, c, d) {
    if(f.isEmptyArray(a) || f.isEmptyArray(c) || f.isEmptyArray(d)) {
      return!1
    }
    var e = this.idKey, i = a.length, b = 0;
    switch(this._idMode) {
      case this._consts._auto:
        for(;b < i;b++) {
          if(c[b].hasOwnProperty(e)) {
            return this.grid.error("NOT_MODIFIABLE", e)
          }
        }
      ;
      case this._consts._given:
        return this.updateUniqueIndices(this._idToData, e, a, c, d);
      case this._consts._composite:
        for(var j = this._idToData, g, m, h = this._options.idColKeys, q = h.length, l, d = [], k = [], r = [], s = [], t, v, u, x;b < i;b++) {
          g = a[b];
          m = c[b];
          if(m.hasOwnProperty(e)) {
            t = 0;
            for(i = d.length;t < i;t++) {
              k[t][e] = d[t]
            }
            return this.grid.error("NOT_MODIFIABLE", e)
          }
          for(t = 0;t < q;t++) {
            if(m.hasOwnProperty(h[t])) {
              l = "";
              for(v = 0;v < q;v++) {
                if(u = h[v], m.hasOwnProperty(u)) {
                  if(f.isEmptyString(x = m[u])) {
                    t = 0;
                    for(i = d.length;t < i;t++) {
                      k[t][e] = d[t]
                    }
                    return this.grid.error("BAD_NULL", u)
                  }
                  l += "&" + x
                }else {
                  l += "&" + g[u]
                }
              }
              g[e] !== l && (k.push(g), r.push({}), s.push({}), d.push(g[e]), g[e] = l)
            }
          }
        }
        if(!k.length) {
          break
        }
        a = this.updateUniqueIndices(j, e, k, r, s);
        if(a instanceof Error) {
          t = 0;
          for(i = d.length;t < i;t++) {
            k[t][e] = d[t]
          }
        }
        return a
    }
    return!1
  };
  b.removeFromIdMap = function(a) {
    var c = this.idKey, d = this._idToData, e;
    f.isNotNull(a) && a.hasOwnProperty(c) && d.hasOwnProperty(e = a[c]) && delete d[e]
  };
  b.removeListFromIdMap = function(a) {
    if(!f.isEmptyArray(a)) {
      for(var c = this.idKey, d = a.length, e = this._idToData, i, b, j = 0;j < d;j++) {
        b = a[j], b.hasOwnProperty(c) && e.hasOwnProperty(i = b[c]) && delete e[i]
      }
    }
  };
  b.fillTemp = function(a, c) {
    var d = this.grid.colDefMgr.getAll(), e = d.length, i, b, j = 0;
    if(c && c.isNew) {
      for(;j < e;j++) {
        b = d[j], i = b.key, b.nullOnCreate && a[i] == null && (a[i] = "J@H" + this._increment++)
      }
    }
  };
  b.fillTempList = function(a, c) {
    var d = this.grid.colDefMgr.getAll(), e = d.length, i = a.length, b, j, f = 0;
    if(c && c.isNew) {
      for(;f < e;f++) {
        if(j = d[f], b = j.key, j.nullOnCreate) {
          for(j = 0;i;j++) {
            a[j][b] = "J@H" + this._increment++
          }
        }
      }
    }
  };
  b.query = function(a) {
    if(typeof a === "string" && (a = $.trim(a), a.length)) {
      var c, d, e, i, b;
      c = a.toLowerCase();
      d = a.indexOf(" ");
      if(d !== -1 && (e = c.substring(0, d), c = c.indexOf(" where "), i = c > -1, d = $.trim(i ? a.substring(d + 1, c) : a.substring(d + 1)), d.length)) {
        switch(i && (b = $.trim(a.substring(c + 7))), e) {
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
    var a = f.split(a, /[\s,]+/), c = a.length, d = 0, e = {}, i = this.all, b = [];
    if(!c) {
      return b
    }
    for(;d < c;d++) {
      if(a[d] === "*") {
        break
      }
      e[a[d]] = !0
    }
    d = 0;
    for(c = i.length;d < c;d++) {
      b.push(f.clone(i[d], e))
    }
    return b
  };
  b.parse = function(a, c) {
    var d = this.grid.colDefMgr, e = d.getParser(), d = d.getNullOnCreate(), i, b = c && c.isNew;
    try {
      for(i in e) {
        if(e.hasOwnProperty(i) && (!b || !d.hasOwnProperty(i))) {
          a[i] = e[i](a[i], a)
        }
      }
    }catch(j) {
      return this.grid.error("PARSE_ERROR", a[i], i)
    }
    return!0
  };
  b.parseList = function(a, c) {
    var d = this.grid.colDefMgr, e = d.getParser(), d = d.getNullOnCreate(), i, b, j = c && c.isNew, f, g = a.length, h;
    try {
      for(i in e) {
        if(e.hasOwnProperty(i) && (!j || !d.hasOwnProperty(i))) {
          b = e[i];
          for(f = 0;f < g;f++) {
            h = a[f], h[i] = b(h[i], h)
          }
        }
      }
    }catch(q) {
      return this.grid.error("PARSE_ERROR", h[i], i)
    }
    return!0
  };
  b.validate = function(a, c) {
    var d = this.grid.colDefMgr, e = d.getValidator(), d = d.getNullOnCreate(), i, b, j, f, g, h = c && c.isNew;
    try {
      for(i in e) {
        if(e.hasOwnProperty(i) && (!h || !d.hasOwnProperty(i))) {
          if(a.hasOwnProperty(i) && (b = a[i]) != null ? (f = !1, j = typeof b == "string" ? b : b.toString(), g = !j) : (b = null, g = f = !0, j = ""), !e[i](b, a, j, f, g)) {
            return this.grid.error("WRONG_VALUE", j, i)
          }
        }
      }
    }catch(q) {
      return this.grid.error("WRONG_VALUE", j, i)
    }
    return!0
  };
  b.validateList = function(a, c) {
    var d = this.grid.colDefMgr, e = d.getValidator(), d = d.getNullOnCreate(), i, b, j = c && c.isNew, f, g = a.length, h, q, l, k, r;
    try {
      for(i in e) {
        if(e.hasOwnProperty(i) && (!j || !d.hasOwnProperty(i))) {
          b = e[i];
          for(f = 0;f < g;f++) {
            if(r = a[f], r.hasOwnProperty(i) && (h = r[i]) != null ? (l = !1, q = typeof h == "string" ? h : h.toString(), k = !q) : (h = null, k = l = !0, q = ""), !b(h, r, q, l, k)) {
              return this.grid.error("WRONG_VALUE", q, i)
            }
          }
        }
      }
    }catch(s) {
      return this.grid.error("WRONG_VALUE", q, i)
    }
    return!0
  };
  b.makeCompositeKey = function(a, c) {
    if(this._idMode === this._consts._composite && (c || !a.hasOwnProperty(this.idKey))) {
      for(var d = this._options.idColKeys, e = d.length, i = 0, b = "";i < e;i++) {
        b += "&" + a[d[i]]
      }
      a[this.idKey] = b
    }
  };
  b.makeCompositeKeyList = function(a, c) {
    if(this._idMode === this._consts._composite) {
      var d = this.idKey, e = a.length, i = this._options.idColKeys, b = i.length, j, f = 0, g, h;
      if(c) {
        for(;f < e;f++) {
          j = a[f];
          h = "";
          for(g = 0;g < b;g++) {
            h += "&" + j[i[g]]
          }
          j[d] = h
        }
      }else {
        for(;f < e;f++) {
          if(!(j = a[f]).hasOwnProperty(d)) {
            h = "";
            for(g = 0;g < b;g++) {
              h += "&" + j[i[g]]
            }
            j[d] = h
          }
        }
      }
    }
  };
  b.map = function(a) {
    if(a) {
      var c = this._idToData, d = this.idKey, e;
      this.makeCompositeKey(a);
      if(a.hasOwnProperty(d) && c.hasOwnProperty(e = a[d])) {
        return c[e]
      }
    }
    return null
  };
  b.mapList = function(a) {
    if(a && a.length) {
      this.makeCompositeKeyList(a);
      for(var c = [], d = [], e = this.idKey, i = this._idToData, b = a.length, j = 0, f, g;j < b;j++) {
        (f = a[j]).hasOwnProperty(e) && i.hasOwnProperty(g = f[e]) ? c.push(i[g]) : d.push(f)
      }
      return{mapped:c, unmapped:d}
    }
    return{mapped:[], unmapped:[]}
  };
  b.getById = function(a) {
    return a != null && this._idToData.hasOwnProperty(a) ? this._idToData[a] : null
  };
  b.getByIdx = function(a) {
    return a != null && this.datalist.hasOwnProperty(a) ? this.datalist[a] : null
  };
  b.getByNode = function(a) {
    return this.getById(this.getIdByNode(a))
  };
  b.getIdx = function(a) {
    return this.getIdxById(this.getId(a))
  };
  b.getIdxById = function(a) {
    return a != null && this._idToIdx.hasOwnProperty(a) ? this._idToIdx[a] : -1
  };
  b.getIdxByNode = function(a) {
    return this.getIdxById(this.getIdByNode(a))
  };
  b.getId = function(a) {
    return a && a.hasOwnProperty(this.idKey) ? a[this.idKey] : null
  };
  b.getIdByIdx = function(a) {
    return this.getId(this.getByIdx(a))
  };
  b.getIdByNode = function(a) {
    return a ? a.getAttribute("i") : null
  };
  b._reidxFrom = function(a) {
    for(var c = this.datalist, d = c.length, e = this.idKey, i = this._idToIdx, a = a || 0;a < d;a++) {
      i[c[a][e]] = a
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
    return a == null ? !1 : this._idToIdx.hasOwnProperty(a)
  };
  b.contains = function(a) {
    return this.containsById(this.getId(a))
  };
  b.containsById = function(a) {
    return a == null ? !1 : this._idToData.hasOwnProperty(a)
  };
  b.set = function(a) {
    var c = this.all;
    if(c === a || !c.length && (!a || !a.length)) {
      return!1
    }
    var a = a || [], d = this.grid.event;
    d.trigger("onBeforeDataChange", !1, !0);
    d.trigger("onBeforeSetDatalist", [c, a], !0);
    this.cleanList(c);
    if(this.uniqueMap) {
      var e, c = this.uniqueMap;
      for(e in c) {
        c.hasOwnProperty(e) && (c[e] = {})
      }
    }
    this._idToData = {};
    this._history.length = 0;
    this._redoHistory.length = 0;
    if(a.length) {
      if((e = this.parseList(a)) instanceof Error) {
        return e
      }
      if((e = this.validateList(a)) instanceof Error) {
        return e
      }
      if((e = this.addListToUniqueMap(a)) instanceof Error) {
        return e
      }
      this.makeCompositeKeyList(a, !0);
      if((e = this.addListToIdMap(a)) instanceof Error) {
        return e
      }
    }
    this.all = a;
    d.trigger("onAfterSetDatalist", [a], !0);
    d.trigger("onDataChange", !1, !0);
    this.refresh();
    return!0
  };
  b.add = function(a, c) {
    if(!a || this.map(a)) {
      return!1
    }
    var d = this.grid.event;
    d.trigger("onBeforeDataChange", !1, !0);
    this.fillTemp(a, c);
    var e;
    if((e = this.parse(a, c)) instanceof Error) {
      return e
    }
    if((e = this.validate(a, c)) instanceof Error) {
      return e
    }
    if((e = this.addToUniqueMap(a)) instanceof Error) {
      return e
    }
    if((e = this.addToIdMap(a)) instanceof Error) {
      return e
    }
    this.all.push(a);
    if(!c || c.undo !== !0) {
      this._history.push({_action:this._consts._add, _target:a}), this._redoHistory.length = 0
    }
    d.trigger("onAddDatarow", [a, c], !0);
    d.trigger("onDataChange", !1, !0);
    (!c || c.noRefresh !== !0) && this.refresh(c);
    return!0
  };
  b.addList = function(a, c) {
    if(a && a.length) {
      var d = this.mapList(a).unmapped;
      if(!d.length) {
        return!1
      }
      this.grid.event.trigger("onBeforeDataChange", !1, !0);
      this.fillTempList(a, c);
      var e;
      if((e = this.parseList(d, c)) instanceof Error) {
        return e
      }
      if((e = this.validateList(d, c)) instanceof Error) {
        return e
      }
      if((e = this.addListToUniqueMap(d)) instanceof Error) {
        return e
      }
      if((e = this.addListToIdMap(d)) instanceof Error) {
        return e
      }
      this.all.pushList(d);
      if(!c || c.undo !== !0) {
        this._history.push({_action:this._consts._addList, _target:d}), this._redoHistory.length = 0
      }
      this.grid.event.trigger("onAddDatalist", [d, c], !0);
      this.grid.event.trigger("onDataChange", !1, !0);
      (!c || c.noRefresh !== !0) && this.refresh(c);
      return!0
    }
    return!1
  };
  b.updateByKey = function(a, c, d, e) {
    var i = {};
    i[c] = d;
    return this.update(a, i, e)
  };
  b.update = function(a, c, d) {
    if(!a || !c) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange", !1, !0);
    this.grid.event.trigger("onBeforeUpdateDatarow", [a, c], !0);
    var e = {}, i;
    for(i in c) {
      c.hasOwnProperty(i) && (a[i] === c[i] ? delete c[i] : (e[i] = a[i], a[i] = c[i]))
    }
    if(f.isEmptyObj(e)) {
      return!1
    }
    if((i = this.parse(a, d)) instanceof Error) {
      return this._rollback(a, e), i
    }
    if((i = this.validate(a, d)) instanceof Error) {
      return this._rollback(a, e), i
    }
    if((i = this.updateUniqueMap(a, c, e)) instanceof Error) {
      return this._rollback(a, e), i
    }
    if((i = this.updateIdMap(a, c, e)) instanceof Error) {
      return this._rollback(a, e), i
    }
    i !== !1 && this.grid.event.trigger("onIdChange", [a, i, a[this.idKey]], !0);
    if(!d || d.undo !== !0) {
      this._history.push({_action:this._consts._update, _target:a, _before:e, _change:c}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onUpdateDatarow", [a, c, e, d], !0);
    this.grid.event.trigger("onDataChange", !1, !0);
    (!d || d.noRefresh !== !0) && this.refresh(d);
    return!0
  };
  b.updateList = function(a, c) {
    if(!a || !a.length) {
      return!1
    }
    var d = this.grid.event;
    d.trigger("onBeforeDataChange", !1, !0);
    d.trigger("onBeforeUpdateDatalist", [a], !0);
    for(var e = [], i = [], b = [], j, g, h, p = a.length, q = 0, l;q < p;q++) {
      g = {};
      j = a[q].datarow;
      h = a[q].change;
      for(l in h) {
        h.hasOwnProperty(l) && (j[l] === h[l] ? delete h[l] : (g[l] = j[l], j[l] = h[l]))
      }
      f.isNotEmptyObj(g) && (e.push(j), i.push(g), b.push(h))
    }
    if(!e.length) {
      return!1
    }
    if((j = this.parseList(e, c)) instanceof Error) {
      return this._rollbackList(e, i), j
    }
    if((j = this.validateList(e, c)) instanceof Error) {
      return this._rollbackList(e, i), j
    }
    if((j = this.updateListUniqueMap(e, b, i)) instanceof Error) {
      return this._rollbackList(e, i), j
    }
    if((j = this.updateListIdMap(e, b, i)) instanceof Error) {
      return this._rollbackList(e, i), j
    }
    j !== !1 && d.trigger("onIdListChange", [j.list, j.befores, this.idKey], !0);
    if(!c || c.undo !== !0) {
      this._history.push({_action:this._consts._updateList, _target:e, _before:i, _change:b}), this._redoHistory.length = 0
    }
    d.trigger("onUpdateDatalist", [e, b, i, c], !0);
    d.trigger("onDataChange", !1, !0);
    (!c || c.noRefresh !== !0) && this.refresh(c);
    return!0
  };
  b._rollback = function(a, c) {
    for(var d in c) {
      c.hasOwnProperty(d) && (a[d] = c[d])
    }
  };
  b._rollbackList = function(a, c) {
    for(var d = a.length, e = 0, i, b, j;e < d;e++) {
      for(j in i = a[e], b = c[e], b) {
        b.hasOwnProperty(j) && (i[j] = b[j])
      }
    }
  };
  b.remove = function(a, c) {
    var d = this.map(a);
    if(d) {
      this.grid.event.trigger("onBeforeDataChange", !1, !0);
      this.removeFromIdMap(d);
      this.removeFromUniqueMap(d);
      this.all.remove(d);
      this.removeId(d);
      if(!c || c.undo !== !0) {
        this._history.push({_action:this._consts._remove, _target:d}), this._redoHistory.length = 0
      }
      this.grid.event.trigger("onRemoveDatarow", [d, c], !0);
      this.grid.event.trigger("onDataChange", !1, !0);
      (!c || c.noRefresh !== !0) && this.refresh(c);
      return!0
    }
    return!1
  };
  b.removeList = function(a, c) {
    if(a && a.length) {
      var d = this.mapList(a).mapped;
      if(d.length) {
        this.grid.event.trigger("onBeforeDataChange", !1, !0);
        this.removeListFromIdMap(d);
        this.removeListFromUniqueMap(d);
        this.all.removeList(d);
        this.cleanList(d);
        if(!c || c.undo !== !0) {
          this._history.push({_action:this._consts._removeList, _target:d}), this._redoHistory.length = 0
        }
        this.grid.event.trigger("onRemoveDatalist", [d, c], !0);
        this.grid.event.trigger("onDataChange", !1, !0);
        (!c || c.noRefresh !== !0) && this.refresh(c);
        return!0
      }
    }
    return!1
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
    if(!this._history.length) {
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
        for(var a = [], e = 0, i = c.length;e < i;e++) {
          a.push({datarow:c[e], change:d[e]})
        }
        return this.updateList(a, {undo:!0});
      case this._consts._remove:
        return this.add(c, {undo:!0});
      case this._consts._removeList:
        return this.addList(c, {undo:!0})
    }
  };
  b.redo = function() {
    if(!this._redoHistory.length) {
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
        for(var a = [], e = 0, i = c.length;e < i;e++) {
          a.push({datarow:c[e], change:d[e]})
        }
        return this.updateList(a, {undo:!0});
      case this._consts._remove:
        return this.remove(c, {undo:!0});
      case this._consts._removeList:
        return this.removeList(c, {undo:!0})
    }
  };
  b.equals = function(a, c) {
    if(a && c) {
      if(a === c) {
        return!0
      }
      this._idMode === this._consts._composite && (this.makeCompositeKey(a), this.makeCompositeKey(c));
      var d = this.idKey, e = a[d];
      return e == null ? !1 : e === c[d]
    }
    return!1
  };
  b.getReal = function() {
    var a = this._consts._notReal;
    return this.all.filter(function(c) {
      return!c.hasOwnProperty(a)
    })
  };
  b.filterReal = function(a) {
    var c = this._consts._notReal;
    return a.filter(function(a) {
      return!a.hasOwnProperty(c)
    })
  };
  b.isReal = function(a) {
    return a && !a.hasOwnProperty(this._consts._notReal)
  };
  b.dropNonReal = function(a) {
    if(a && a.length) {
      for(var c = this._consts._notReal, d = a.length - 1;d >= 0;d--) {
        a[d].hasOwnProperty(c) && (delete a[d][c], a.removeAt(d))
      }
    }
  };
  b.removeIdCol = function(a) {
    if(!(this._idMode === this._consts._given || !a || !a.length)) {
      for(var c = this.idKey, d = 0, e = a.length;d < e;d++) {
        a[d].hasOwnProperty(c) && delete a[d][c]
      }
    }
  };
  b.removeId = function(a) {
    a && this._idMode !== this._consts._given && a.hasOwnProperty(this.idKey) && delete a[this.idKey]
  };
  b.cleanList = function(a) {
    a && a.length && (this.removeIdCol(a), this.dropNonReal(a))
  };
  b.setSorter = function(a) {
    this.grid.event.trigger("onChangeSorter", [this._sorter, a], !0);
    this._sorter = a
  };
  b._sort = function(a) {
    a ? this.setSorter(a) : a = this._sorter;
    if(a) {
      var c = this.all, d = this.grid.event, e = [c];
      d.trigger("onBeforeSort", e, !0);
      a.comparator ? (c.sort(a.comparator), a.desc && c.reverse()) : a.lexi && this.constructor._lexi(c, a.lexi, a.desc);
      d.trigger("onAfterSort", e, !0)
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
    var a = this.datalist, c = this.failed, d = 0, e = this._filters.length, i, b;
    this.grid.event.trigger("onBeforeFilter", [a, c], !0);
    a.length = 0;
    a.pushList(this.all);
    for(c.length = 0;d < e;d++) {
      i = this._filters[d];
      for(b = a.length - 1;b >= 0;b--) {
        i(a[b]) || (c.push(a[b]), a.removeAt(b))
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
    for(var d = this.datalist[a], e = [], i, b = 0, j = c.length;b < j;b++) {
      i = c[b], e.push(i in d ? d[i] : null)
    }
    return e
  };
  b.exportToArray = function(a, c, d, e) {
    for(var a = a || this.grid.colDefMgr.getKeys(), e = e || this.datalist.slice(c, d), d = [], i, b, j = 0, f = e.length, g, h = a.length;j < f;j++) {
      i = e[j];
      g = 0;
      for(c = [];g < h;g++) {
        b = a[g], c.push(b in i ? i[b] : null)
      }
      d.push(c)
    }
    return d
  };
  g._lexi = function(a, c, d) {
    var e = Object.prototype.toString;
    Object.prototype.toString = typeof c == "function" ? c : function() {
      return this[c]
    };
    a.sort();
    Object.prototype.toString = e;
    d && a.reverse()
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "EventManager.js"...');
jx.grid.EventManager = {};
(function() {
  function g(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    a.grid.event = this;
    this._map = {}
  }
  var h = goog.getObjectByName("jx.grid"), f = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.EventManager", g);
  g.getInstance = function(a) {
    return new g(a)
  };
  var b = g.prototype;
  b.destroy = function() {
    var a, c = this._map;
    for(a in c) {
      c.hasOwnProperty(a) && h._deleteArray(c, a)
    }
    h._destroy(this, {name:"EventManager", path:"event", map:"_map"})
  };
  b.register = function(a, c, d) {
    if(f.isString(a)) {
      this._parseAndAdd(a, c, d)
    }else {
      if(f.isNotNull(a.e)) {
        this._parseAndAdd(a.e, a.f, a.t)
      }else {
        for(var e, c = a.length, i;e < c;e++) {
          f.isNotNull(i = a[e]) && this._parseAndAdd(i.e, i.f, i.t)
        }
      }
    }
  };
  b.bind = function(a, c, d) {
    if(f.isString(a)) {
      this._parseAndAdd(a, c, d)
    }else {
      for(var e in a) {
        a.hasOwnProperty(e) && this._parseAndAdd(e, a[e], c)
      }
    }
  };
  b._parseAndAdd = function(a, c, d) {
    f.isNull(d) && (d = window);
    var a = f.split(a), e = a.length, i = 0;
    if(f.isFunction(c)) {
      for(;i < e;i++) {
        this._addHandler(a[i], c, d)
      }
    }else {
      if(f.isString(c)) {
        for(var c = f.split(c), b = c.length, j, g;i < e;i++) {
          j = a[i];
          for(g = 0;g < b;g++) {
            this._addHandler(j, d[c[g]], d)
          }
        }
      }else {
        for(b = c.length;i < e;i++) {
          j = a[i];
          for(g = 0;g < b;g++) {
            this._addHandler(j, c[g], d)
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
      if(f.isNull(c)) {
        b.length = 0, delete d[a]
      }else {
        for(var i = 0, n = b.length;i < n;i++) {
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
      var i = i[a], n = i.length;
      if(n) {
        if(this.grid.log(n + " handlers registered for event=" + a, 4), a = 0, d) {
          if(c && c.length) {
            for(;a < n;a++) {
              d = i[a], d.fn.apply(d.target, c)
            }
          }else {
            for(;a < n;a++) {
              d = i[a], d.fn.call(d.target)
            }
          }
        }else {
          b = b || [];
          if(c && c.length) {
            for(;a < n;a++) {
              d = i[a], b.push(d.fn.apply(d.target, c))
            }
          }else {
            for(;a < n;a++) {
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
    for(var d = this._map[a], b = d.length, i, n = -1, j = 0;j < b;j++) {
      if(d[j].fn === c) {
        n = j;
        i = d[j];
        break
      }
    }
    n > -1 && (d.removeAt(j), d.push(i))
  };
  b.sendToFront = function(a, c) {
    for(var d = this._map[a], b = d.length, i, n = -1, j = 0;j < b;j++) {
      if(d[j].fn === c) {
        n = j;
        i = d[j];
        break
      }
    }
    n > -1 && (d.removeAt(j), d.unshift(i))
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "Tree.js"...');
jx.struct = {};
jx.struct.TreeNode = {};
jx.struct.Tree = {};
var TreeNode = {}, Tree = {};
(function() {
  function g(a) {
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
    this.root = new g({tree:this});
    this.infants = {}
  }
  var f = goog.getObjectByName("jx.util");
  goog.exportSymbol("jx.struct.TreeNode", g);
  goog.exportSymbol("jx.struct.Tree", h);
  goog.exportSymbol("TreeNode", g);
  goog.exportSymbol("Tree", h);
  g.getInstance = function(a) {
    return new g(a)
  };
  var b = g.prototype;
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
    f.isNotNull(this.parent) && this.parent.removeChild(this);
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
    f.isNotNull(this.parent) && this.parent.removeChild(this);
    this.removeAllChildren();
    delete this.parent;
    delete this.level
  };
  b.detachDown = function() {
    f.isNotNull(this.parent) && this.parent.removeChild(this);
    this.traverse({post:!0, fn:function() {
      this.detach()
    }})
  };
  b.isRoot = function() {
    return f.isNull(this.parent)
  };
  b.getRoot = function() {
  };
  b.isLeaf = function() {
    return this.children.length === 0
  };
  b.setParent = function(a) {
    if(this.parent !== a) {
      f.isNotNull(this.parent) && this.parent.removeChild(this), this.parent = a, delete this.level, f.isNotNull(a) && a.addChild(this)
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
    f.isNotNull(d) && d < a ? this.resetChildIdx(d) : this.resetChildIdx(a);
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
    f.isNull(a) && (a = 0);
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
    f.isNotNull(this.parent) && this.parent.traverse(a)
  };
  b.callFn = function(a, c) {
    if(!a.stop) {
      f.isNull(a.target) ? f.callFn(this, a.fn, a, c) : (a.node = this, f.callFn(a.target, a.fn, a, c))
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
    if(f.isNull(a)) {
      a = this.list
    }
    for(var c = this._options.nodeKey, d = this.map, b = a.length, i = 0;i < b;i++) {
      this.attachNode(d[a[i][c]])
    }
  };
  b.makeTree = function(a) {
    if(f.isNull(a)) {
      a = this.list
    }
    for(var c = 0, d = a.length;c < d;c++) {
      this.createNode(a[c])
    }
  };
  b.hasNode = function(a) {
    return f.isNotNull(a) && this.map.hasOwnProperty(a[this._options.nodeKey])
  };
  b.getNode = function(a) {
    return this.map[a[this._options.nodeKey]]
  };
  b.getNodeByNodeId = function(a) {
    return this.map[a]
  };
  b.createNode = function(a) {
    if(!this.hasNode()) {
      var c = a[this._options.nodeKey], a = new g({tree:this, data:a, nodeId:c});
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
    if(f.isNull(d) || d == c) {
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
      delete this.map[c], this.map[d] = a, this.removeChildren(a), a.nodeId = a.data[this._options.nodeKey] = d, f.isNotNull(a.parent) && (a.parent.childrenMap[d] = a.parent.childrenMap[c], delete a.parent.childrenMap[c]), this.adoptInfants(a, d)
    }
  };
  b.changeParentId = function(a, c, d) {
    c !== d && (f.isNull(a.parent) && this.removeFromInfants(a, c), c = this.map[d], a.setParent(c), a.data[this._options.parentKey] = d, f.isNull(c) && this.addToInfants(a, d))
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
    f.isNull(c) && (c = a.data[this._options.parentKey]);
    this.infants.hasOwnProperty(c) && (this.infants[c].remove(a), this.infants[c].length === 0 && delete this.infants[c])
  };
  b.removeChildren = function(a) {
    a.children.length !== 0 && (this.infants.hasOwnProperty(a.nodeId) || (this.infants[a.nodeId] = []), this.infants[a.nodeId].pushList(a.children), a.removeAllChildren())
  };
  b.sortList = function(a) {
    f.isNull(a) ? a = [] : a.length = 0;
    this.root.traverseChildren({fn:function() {
      a.push(this.data)
    }})
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "Grid.js"...');
jx.grid.Grid = {};
(function() {
  function g(c) {
    this.mid = c.mid;
    this.log("creating new Grid instance...", d);
    a.call(this, c)
  }
  var h = goog.getObjectByName("jx.grid"), f = goog.getObjectByName("jx.util"), b = goog.getObjectByName("echo"), a = goog.getObjectByName("jx.grid.BaseModule"), c = goog.getObjectByName("TimeWatch"), d = 1;
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
  g.V_INIT = d;
  goog.inherits(g, a);
  g.getInstance = function(a) {
    return new g(a)
  };
  var e = g.prototype;
  e._defaultOptions = function() {
    return{classGrid:"jgrid", border:"1px solid #868686", width:"", font:"15px Arial,Helvetica,sans-serif", style:"", borderSide:!0, imageUrl:"../images/", links:{data:"dataMgr.all", datalen:"dataMgr.all.length", shown:"dataMgr.datalist", set:"dataMgr.set", add:"dataMgr.add", addList:"dataMgr.addList", update:"dataMgr.update", updateByKey:"dataMgr.updateByKey", updateList:"dataMgr.updateList", remove:"dataMgr.remove", removeList:"dataMgr.removeList", select:"dataMgr.executeSelect", undo:"dataMgr.undo", 
    redo:"dataMgr.redo", addFilter:"dataMgr.addFilter", removeFilter:"dataMgr.removeFilter", check:"collapser.checkMgr.checkList checkMgr.checkList", checked:"collapser.checkMgr.getCheckList checkMgr.getCheckList", removeChecked:"collapser.checkMgr.removeChecked checkMgr.removeChecked", register:"event.register", trigger:"event.trigger", bind:"event.bind", unregister:"event.unregister", unbind:"event.unregister", commit:"editMgr.commit", cancelEdit:"editMgr.cancel", beginEdit:"editMgr.begin", collen:"colDefMgr.length"}, 
    autoWidth:!1, showMessage:!1}
  };
  e._init = function(a) {
    var c = this._ctnr = a.container, d = this._options, b;
    this.name = d.name;
    this._drag = !1;
    this._lastH = this._lastW = null;
    this._vars = {scrollbarDim:void 0};
    (b = d.width) ? b.indexOf("%") === -1 && (b += "px") : b = "";
    c = this._ctnr = $("<div id='" + this.mid + "' class='" + d.classGrid + "' " + (b ? "" : "style='width:" + b + "' ") + "tabIndex='0'>").appendTo(Util$.safe$(c));
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
  e._bindEvents = function() {
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
  e.destroy = function() {
    this.log("destroying Grid...", d);
    try {
      var a = h.grids.indexOf(this);
      a > -1 && h.grids.splice(a, 1);
      this.name != null && delete h.gridMap[this.name];
      this.log("event:beforeDispose.", d);
      this.dispatchEvent({type:"beforeDispose"});
      f.isEmptyObj(h.m.Grid) && (this.log("unbinding global event handlers.", d), h._unbindGlobalEvents());
      this.log("event:onDestroy.", d);
      this.event.trigger("onDestroy", !1, !0);
      this.log("destroying grid vars...", d);
      h._destroy(this, {name:"Grid", module:"event", $:"_ctnr", map:"_options", style:"_style _dynStyle"});
      this.dispose()
    }catch(c) {
      return c
    }
  };
  e._registerLinks = function(a) {
    var c, d, b, e, g, h, l, k, r, s;
    a:for(c in a) {
      if(a.hasOwnProperty(c) && !(c in this)) {
        d = f.split(a[c]);
        b = d.length;
        e = 0;
        b:for(;e < b;e++) {
          if(g = d[e].split("."), h = g.length, !(h < 1)) {
            l = this;
            k = this;
            r = "";
            for(s = 0;s < h;s++) {
              if(g[s] in l) {
                k = l, l = l[r = g[s]]
              }else {
                continue b
              }
            }
            this._registerLink(c, l, k, r);
            continue a
          }
        }
      }
    }
  };
  e._registerLink = function(a, c, d, b) {
    if(this.hasOwnProperty(a)) {
      return!1
    }
    this[a] = f.isFunction(c) ? function() {
      return c.apply(d, arguments)
    } : function() {
      return d[b]
    };
    return!0
  };
  e._createCss = function() {
    this.log("creating CSS...", d);
    var a = {type:"beforeCreateCss", css:[]}, c = this._options, b = this.event;
    this.dispatchEvent(a);
    this.log("creating CSS for Grid...", d);
    var e = b.trigger("onCreateCss"), e = e ? e.join("") : "", a = f.sprint("%selector%{overflow:hidden;height:100%;font:%font%;%border%%style%}%submodule%", {selector:"#" + this.mid, font:c.font, border:c.borderSide ? "border:" + c.border + ";" : "border-top:" + c.border + ";border-bottom:" + c.border + ";", style:c.style, submodule:a.css.join("") + e});
    this._style = f.createStyle(a);
    a = {type:"beforeCreateDynamicCss", css:[]};
    this.dispatchEvent(a);
    e = (e = b.trigger("onCreateDynamicCss")) ? e.join("") : "";
    this._dynStyle = f.createStyle(a.css.join("") + ";" + e)
  };
  e._recreateDynamicCss = function() {
    this.log("rewriting dynamic css...", 2);
    var a = this.event.trigger("onCreateDynamicCss");
    (a = a ? a.join("") : "") && f.setStyle(this._dynStyle, a)
  };
  e._keydown = function(a) {
    var c = this.event, d = [a], b = a.which;
    this.log("UI event:keydown detected. event=" + a.type + ", keycode=" + b, 3);
    c.triggerInvalid("onBeforeKeydown", d) ? this.log("UI event:keydown prevented.", 3) : (c.trigger("keydown_" + b, d, !0), c.trigger("keydown", d, !0))
  };
  e._keyup = function(a) {
    var c = this.event, d = [a], b = a.which;
    this.log("UI event:keyup detected. event=" + a.type + ", keycode=" + b, 3);
    c.triggerInvalid("onBeforeKeyup", d) ? this.log("UI event:keyup prevented.", 3) : (c.trigger("keyup_" + b, d, !0), c.trigger("keyup", d, !0))
  };
  e._keypress = function(a) {
    var c = this.event, d = [a], b = a.which;
    this.log("UI event:keypress detected. event=" + a.type + ", keycode=" + b, 3);
    c.triggerInvalid("onBeforeKeypress", d) ? this.log("UI event:keypress prevented.", 3) : (c.trigger("keypress_" + b, d, !0), c.trigger("keypress", d, !0))
  };
  e._mousein = function(a) {
    var c = this.event, d = [a];
    this.log("UI event:mousein detected. event=" + a.type, 4);
    c.triggerInvalid("onBeforeMousein", d) ? this.log("UI event:mousein prevented.", 4) : (this._drag && c.trigger("dragin", d, !0), c.trigger("mousein", d, !0))
  };
  e._mouseout = function(a) {
    var c = this.event, d = [a];
    this.log("UI event:mouseout detected. event=" + a.type, 4);
    c.triggerInvalid("onBeforeMouseout", d) ? this.log("UI event:mouseout prevented.", 4) : (this._drag && c.trigger("dragout", d, !0), c.trigger("mouseout", d, !0))
  };
  e._mouseenter = function(a) {
    var c = this.event, d = [a];
    this.log("UI event:mouseenter detected. event=" + a.type, 3);
    c.triggerInvalid("onBeforeMouseenter", d) ? this.log("UI event:mouseenter prevented.", 3) : (this._drag && c.trigger("dragenter", d, !0), c.trigger("mouseenter", d, !0))
  };
  e._mouseleave = function(a) {
    var c = this.event, d = [a];
    this.log("UI event:mouseleave detected. event=" + a.type, 3);
    c.triggerInvalid("onBeforeMouseleave", d) ? this.log("UI event:mouseleave prevented.", 3) : (this._drag && c.trigger("dragleave", d, !0), c.trigger("mouseleave", d, !0))
  };
  e._mousemove = function(a) {
    var c = this.event, d = [a];
    this.log("UI event:mousemove detected. event=" + a.type, 5);
    c.triggerInvalid("onBeforeMousemove", d) ? this.log("UI event:mousemove prevented.", 5) : (this._drag && c.trigger("dragmove", d, !0), c.trigger("mousemove", d, !0))
  };
  e._mouseover = function(a) {
    var c = this.event, d = [a];
    this.log("UI event:mouseover detected. event=" + a.type, 4);
    c.triggerInvalid("onBeforeMouseover", d) ? this.log("UI event:mouseover prevented.", 4) : (this._drag && c.trigger("dragover", d, !0), c.trigger("mouseover", d, !0))
  };
  e._mousedown = function(a) {
    var c = this.event, d = [a];
    this.log("UI event:mousedown detected. event=" + a.type, 3);
    this._drag = !0;
    c.triggerInvalid("onBeforeMousedown", d) ? this.log("UI event:mousedown prevented.", 3) : c.trigger("mousedown", d, !0)
  };
  e._mouseup = function(a) {
    var c = this.event, d = [a];
    this.log("UI event:mouseup detected. event=" + a.type, 3);
    this._drag = !1;
    c.trigger("unsetDrag", !1, !0);
    this.containsEvent(a) && (c.triggerInvalid("onBeforeMouseup", d) ? this.log("UI event:mouseup prevented.", 3) : c.trigger("mouseup", d, !0))
  };
  e._click = function(a) {
    var c = this.event, d = [a];
    this.log("UI event:click detected. event=" + a.type, 2);
    c.triggerInvalid("onBeforeClick", d) ? this.log("UI event:click prevented.", 2) : c.trigger("click", d, !0)
  };
  e._dblclick = function(a) {
    var c = this.event, d = [a];
    this.log("UI event:dblclick detected. event=" + a.type, 2);
    c.triggerInvalid("onBeforeDblclick", d) ? this.log("UI event:dblclick prevented.", 2) : c.trigger("dblclick", d, !0)
  };
  e._resize = function(a) {
    var c = this.event;
    this.log("event:resize detected. event=" + a.type, 2);
    var d = !1, b = this._ctnr, e = b[0], f = this._lastW, g = this._lastH, h = e.clientWidth || b.width(), b = e.clientHeight || b.height();
    if(h >= 1 && f !== h) {
      this.log("event:resizeWidth detected. " + f + "->" + h, 2), c.trigger("resizeWidth", [h, f], !0), this._lastW = h, d = !0
    }
    if(b >= 1 && g !== b) {
      this.log("event:resizeHeight detected. " + g + "->" + b, 2), c.trigger("resizeHeight", [b, g], !0), this._lastH = b, d = !0
    }
    d && c.trigger("resize", [a], !0)
  };
  e.width = function(a) {
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
  e.height = function(a) {
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
  e.syncScroll = function() {
    this.view._scroll()
  };
  e.getCellByIdAndKey = function(a, c) {
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
  e.getCellByIdx = function(a, c) {
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
  e.busy = function() {
    if(this._busyShader && !this._busy) {
      var a = this._ctnr, c = a.offset(), d = a[0], a = d.clientWidth + 1, d = d.clientHeight + 1, b = this._busyShader, e = b[0].style;
      e.top = c.top + "px";
      e.left = c.left + "px";
      e.width = a + "px";
      e.height = d + "px";
      b.show()
    }
    this._busy = !0
  };
  e.idle = function() {
    this._busyShader && this._busy && this._busyShader.hide();
    this._busy = !1
  };
  e.error = function(a) {
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
  e.printError = function(a) {
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
  e.printMessage = function(a) {
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
  e.containsEvent = function(a) {
    return f.contains(this._ctnr[0], a.target)
  };
  e.getChart = function(a) {
    return this._charts[a]
  };
  e.log = function(a, c) {
    2 >= (c || 0) && b("Grid[" + this.mid + "]: " + a)
  };
  e.twstart = function(a) {
    this._tw = new c(a)
  };
  e.twlap = function(a) {
    this._tw.lap(a)
  };
  e.twstop = function(a) {
    this._tw.stop(a)
  };
  e.twreset = function(a) {
    this._tw.reset(a)
  };
  e.twprint = function() {
    this.log(this._tw)
  };
  e.chart = function(a, c, b, e, f, g) {
    this.log("creating chart... type=" + c + ", columns=[" + b.join(",") + "]", d);
    var h, l, c = c.toLowerCase();
    switch(c) {
      case "area":
        h = "corechart";
        l = "AreaChart";
        break;
      case "bar":
        h = "corechart";
        l = "BarChart";
        break;
      case "candle":
        h = "corechart";
        l = "CandlestickChart";
        break;
      case "column":
        h = "corechart";
        l = "ColumnChart";
        break;
      case "combo":
        h = "corechart";
        l = "ComboChart";
        break;
      case "gauge":
        h = "gauge";
        l = "Gauge";
        break;
      case "geo":
        h = "geochart";
        l = "GeoChart";
        break;
      case "line":
        h = "corechart";
        l = "LineChart";
        break;
      case "pie":
        h = "corechart";
        l = "PieChart";
        break;
      case "scatter":
        h = "corechart";
        l = "ScatterChart";
        break;
      case "table":
        h = "table";
        l = "Table";
        break;
      case "treemap":
        h = "treemap";
        l = "TreeMap";
        break;
      default:
        throw Error("unknown chart type: " + c);
    }
    google.load("visualization", "1", {packages:[h]});
    var k = this, r = this.colDefMgr, s = this.dataMgr, t = b.map(function(a) {
      if(a = r.getByKey(a)) {
        return a
      }
      throw Error("column key not found");
    }), v = s.exportToArray(b, f, g);
    google.setOnLoadCallback(function() {
      for(var d = new google.visualization.DataTable, h = 0, q = t.length, r, w;h < q;h++) {
        r = t[h];
        w = r.type;
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
        d.addColumn(w || v[0] && v[0][h] != null && typeof v[0][h] || h === 0 && "string" || "number", r.name)
      }
      d.addRows(v);
      var y = k._charts[a] = new google.visualization[l](document.getElementById(a));
      y.draw(d, e);
      k.event.bind("onAfterRefresh", function() {
        k.log("redrawing chart... type=" + c + ", columns=[" + b.join(",") + "]", 2);
        d.removeRows(0, d.getNumberOfRows());
        d.addRows(s.exportToArray(b, f, g));
        y.draw(d, e)
      });
      k.event.trigger("onChartLoaded", [y, d], !0)
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
    this._options = h._extend({rowSelKey:this.grid.dataMgr.idKey, bgColorSelection:"#DCEBFE", bgColorLast:"#f1ca7f", bgColorRange:"#D9D9D9", classSelection:"jgrid-selection", classLast:"selection-last", classRange:"selection-range", multiSelectEnabled:!1, classRowSelected:"rowSelected", highlightRowEnabled:!0, bgColorRowSelected:"#d8dfea"}, a.options);
    this._consts = {_UP:1, _DOWN:2, _LEFT:3, _RIGHT:4, _PGDN:5, _PGUP:6, _HOME:7, _END:8, _NAVKEYS:{}};
    this._consts._NAVKEYS = f.which(["enter", "tab", "arrow", "pgdn", "pgup", "home", "end"]);
    this._rows = {length:0};
    this._cols = {length:0};
    this.__init()
  }
  var h = goog.getObjectByName("jx.grid"), f = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var b = goog.getObjectByName("jx.grid.Cell");
  goog.exportSymbol("jx.grid.SelectionManager", g);
  g.getInstance = function(a) {
    return new g(a)
  };
  var a = g.prototype;
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
    var g = "", j = this._last, h = this._range, m = this._rows, p = this._options;
    f.isNotNull(j) && j.getDatarow() === b && j.getColDef() === i && (g += p.classLast);
    p.multiSelectEnabled === !0 && (f.isNotNull(h) && h.getDatarow() === b && h.getColDef() === i && (g += " " + p.classRange), m.hasOwnProperty(a) && m[a].hasOwnProperty(d) && (g += " " + p.classSelection));
    return g
  };
  a._mousedownCanvas = function(a, d) {
    if(!f.isNotNull(this._last) || !this._last.equals(d)) {
      this.grid.event.trigger("onBeforeSelect", [a, d], !0), this._options.multiSelectEnabled === !1 ? this.selectCell(d) : a.shiftKey && f.isNotNullAnd(this._last, this._range) ? this.selectRange(d) : a.ctrlKey ? d.getKey() === this._options.rowSelKey ? this.addRow(d) : this.addCell(d) : this.selectCell(d)
    }
  };
  a._dragoverCanvas = function(a, d) {
    this._options.multiSelectEnabled === !1 ? this.selectCell(d) : f.isNotNullAnd(this._last, this._range) && this.selectRange(d)
  };
  a._keydownCanvas = function(a) {
    var d = this._last;
    if(f.isNullOr(d, this._range)) {
      this._consts._NAVKEYS[a.which] && this.selectCell(h.create("Cell", {grid:this.grid, row:this.grid.view._getFirstSafeVisibleRow(), col:this.grid.view._getFirstSafeVisibleCol()}))
    }else {
      var b = this.grid.event;
      if(this._consts._NAVKEYS[a.which]) {
        if(!b.triggerInvalid("onBeforeNavigate", [a])) {
          var i;
          a.preventDefault();
          switch(a.which) {
            case f.keyMapKeydown.tab:
              i = a.shiftKey ? this._idxToCell(this._consts._LEFT, d) : this._idxToCell(this._consts._RIGHT, d);
              this.selectCell(i);
              break;
            case f.keyMapKeydown.enter:
              i = a.shiftKey ? this._idxToCell(this._consts._UP, d) : this._idxToCell(this._consts._DOWN, d);
              this.selectCell(i);
              break;
            case f.keyMapKeydown.up:
              this._options.multiSelectEnabled && a.shiftKey ? (i = this._idxToCell(this._consts._UP, this._range), this.selectRange(i)) : (i = this._idxToCell(this._consts._UP, d), this.selectCell(i));
              break;
            case f.keyMapKeydown.down:
              this._options.multiSelectEnabled && a.shiftKey ? (i = this._idxToCell(this._consts._DOWN, this._range), this.selectRange(i)) : (i = this._idxToCell(this._consts._DOWN, d), this.selectCell(i));
              break;
            case f.keyMapKeydown.left:
              this._options.multiSelectEnabled && a.shiftKey ? (i = this._idxToCell(this._consts._LEFT, this._range), this.selectRange(i)) : (i = this._idxToCell(this._consts._LEFT, d), this.selectCell(i));
              break;
            case f.keyMapKeydown.right:
              this._options.multiSelectEnabled && a.shiftKey ? (i = this._idxToCell(this._consts._RIGHT, this._range), this.selectRange(i)) : (i = this._idxToCell(this._consts._RIGHT, d), this.selectCell(i));
              break;
            case f.keyMapKeydown.pgup:
              this._options.multiSelectEnabled && a.shiftKey ? (i = this._idxToCell(this._consts._PGUP, this._range), this.selectRange(i)) : (i = this._idxToCell(this._consts._PGUP, d), this.selectCell(i));
              break;
            case f.keyMapKeydown.pgdn:
              this._options.multiSelectEnabled && a.shiftKey ? (i = this._idxToCell(this._consts._PGDN, this._range), this.selectRange(i)) : (i = this._idxToCell(this._consts._PGDN, d), this.selectCell(i));
              break;
            case f.keyMapKeydown.space:
              i = a.shiftKey ? this._idxToCell(this._consts._PGUP, d) : this._idxToCell(this._consts._PGDN, d);
              this.selectCell(i);
              break;
            case f.keyMapKeydown.home:
              this._options.multiSelectEnabled && a.shiftKey ? (i = this._idxToCell(this._consts._HOME, this._range), this.selectRange(i)) : (i = this._idxToCell(this._consts._HOME, d), this.selectCell(i));
              break;
            case f.keyMapKeydown.end:
              this._options.multiSelectEnabled && a.shiftKey ? (i = this._idxToCell(this._consts._END, this._range), this.selectRange(i)) : (i = this._idxToCell(this._consts._END, d), this.selectCell(i))
          }
          b.trigger("onAfterNavigate", [i], !0)
        }
      }else {
        if(this._cols.length === 1) {
          var g, j = this.grid.colDefMgr, o, m = this._cols;
          i = a.which;
          var p = [a, null, d];
          for(o in m) {
            if(m.hasOwnProperty(o) && o !== "length") {
              g = j.get(o).key, g = "keydownColSel_" + g, p[1] = m[o], b.trigger(g + "_" + i, p, !0), b.trigger(g, p, !0)
            }
          }
        }
        if(this._rows.length === 1) {
          var q;
          o = this._rows;
          i = a.which;
          p = [a, null, d];
          for(q in o) {
            o.hasOwnProperty(q) && q !== "length" && (p[1] = o[q], b.trigger("keydownRowSel_" + i, p, !0), b.trigger("keydownRowSel", p, !0))
          }
        }
        p = [a, this._rows, this._cols];
        b.trigger("keydownSel_" + a.which, p, !0);
        b.trigger("keydownSel", p, !0)
      }
    }
  };
  a.getCell = function() {
    if(f.isNotNull(this._last)) {
      return this._last
    }
  };
  a._isSelected = function(a) {
    return f.isNotNull(this._last) && this._last.equals(a)
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
    if(f.isNotNull(this._last)) {
      this.toSelect = this._last
    }
    this.empty()
  };
  a.onAfterRerender = function() {
    f.isNotNull(this.toSelect) && (this.selectCell(this.toSelect, !0), this.grid.view.scrollToRowLazy(this.toSelect.getRowIdx()))
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
    var d = a.getRowIdx(), b = a.getColIdx(), i = this._last.getRowIdx(), f = this._last.getColIdx(), j = i < d ? i : d, i = i < d ? d : i, g;
    this._setRange(d, b, a);
    a.getKey() === this._options.rowSelKey ? (g = 0, f = this.grid.colDefMgr.length() - 1) : (g = f < b ? f : b, f = f < b ? b : f);
    this._setSelMap(this._getRangeMap(j, g, i, f, d, b, a));
    return{minRow:j, minCol:g, maxRow:i, maxCol:f}
  };
  a._setLast = function(a, d, b) {
    var d = this._last, i;
    f.isNotNull(d) && (i = d.getRowIdx(), a !== i && f.isNotNull(this._range) && i !== this._range.getRowIdx() && this.grid.view.unlockRowById(d.getId()), d.get$().removeClass(this._options.classLast), this._options.highlightRowEnabled === !0 && $(d.getRowNode()).removeClass(this._options.classRowSelected), f.isNull(b) && delete this._last);
    if(!f.isNull(b)) {
      (this._last = b).get$().addClass(this._options.classLast), this._options.highlightRowEnabled === !0 && $(b.getRowNode()).addClass(this._options.classRowSelected), this.grid.view.lockRowByIdx(a)
    }
  };
  a._setRange = function(a, d, b, i) {
    var g = this._range;
    if(f.isNotNull(g)) {
      var j = g.getRowIdx();
      if(a === j && d === g.getColIdx()) {
        return
      }
      a !== j && f.isNotNull(this._last) && j !== this._last.getRowIdx() && this.grid.view.unlockRowById(g.getId());
      g.get$().removeClass(this._options.classRange);
      f.isNull(b) && delete this._range
    }
    if(!f.isNull(b)) {
      (this._range = b).get$().addClass(this._options.classRange), b = this.grid.view, b.lockRowByIdx(a), i || b.scrollToLazy(a, d)
    }
  };
  a._addSelMap = function(a) {
    var d = this._rows, e, i, f, j;
    for(f in a) {
      if(a.hasOwnProperty(f) && (i = a[f], d.hasOwnProperty(f))) {
        for(j in e = d[f], i) {
          i.hasOwnProperty(j) && e.hasOwnProperty(j) && (i[j] instanceof b && (e[j] = i[j]), delete i[j])
        }
      }
    }
    this.addOrRemoveCss({}, !0);
    this._addToMaps(a)
  };
  a._setSelMap = function(a) {
    var d = this._rows, e, i, f, j, g = {};
    for(f in d) {
      if(d.hasOwnProperty(f) && f !== "length") {
        if(e = d[f], a.hasOwnProperty(f)) {
          for(j in i = a[f], e) {
            e.hasOwnProperty(j) && j !== "length" && (i.hasOwnProperty(j) ? (i[j] instanceof b && (e[j] = i[j]), delete i[j]) : (g.hasOwnProperty(f) || (g[f] = {}), g[f][j] = !0))
          }
        }else {
          for(j in i = g[f] = {}, e) {
            e.hasOwnProperty(j) && j !== "length" && (i[j] = !0)
          }
        }
      }
    }
    this._removeFromMaps(g);
    this.addOrRemoveCss({}, !1);
    this._addSelMap(a)
  };
  a.addOrRemoveCss = function(a, d) {
    var e = [], i, g, j, h = this.grid.view;
    for(i in a) {
      if(a.hasOwnProperty(i)) {
        for(g in j = a[i], j) {
          j.hasOwnProperty(g) && (j[g] instanceof b ? e.push(j[g].getNode()) : e.push(h.getCell(i, g)))
        }
      }
    }
    e = e.filter(function(a) {
      return f.isNotNull(a)
    });
    d ? $(e).addClass(this._options.classSelection) : $(e).removeClass(this._options.classSelection)
  };
  a._addToMaps = function(a) {
    var d, b, i, g = this._rows, j = this._cols, h;
    for(d in a) {
      if(a.hasOwnProperty(d)) {
        for(b in h = a[d], h) {
          h.hasOwnProperty(b) && (i = f.isNull(i = h[b]) ? !0 : i, g.hasOwnProperty(d) ? g[d].length++ : (g[d] = {length:1}, g.length++), g[d][b] = i, j.hasOwnProperty(b) ? j[b].length++ : (j[b] = {length:1}, j.length++), j[b][d] = i)
        }
      }
    }
  };
  a._removeFromMaps = function(a) {
    var d, b, i = this._rows, f = this._cols, j;
    for(d in a) {
      if(a.hasOwnProperty(d)) {
        for(b in j = a[d], j) {
          j.hasOwnProperty(b) && (--i[d].length === 0 ? (delete i[d], i.length--) : delete i[d][b], --f[b].length === 0 ? (delete f[b], f.length--) : delete f[b][d])
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
    var i = {}, f = this.grid.colDefMgr.length(), j = 0;
    for(i[a] = {};j < f;j++) {
      i[a][j] = !0
    }
    i[a][d] = b;
    return i
  };
  a._getRangeMap = function(a, d, b, i, f, j, g) {
    for(var h = {}, p;a <= b;a++) {
      h[a] = {};
      for(p = d;p <= i;p++) {
        h[a][p] = !0
      }
    }
    h[f][j] = g;
    return h
  };
  a.empty = function() {
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
    this._beginEditKeys = b.which(["number", "alphabet", "del", "backspace"]);
    this.__init()
  }
  function h(a) {
    for(var b in a) {
      a.hasOwnProperty(b) && (this[b] = a[b])
    }
  }
  var f = goog.getObjectByName("jx.grid"), b = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var a = goog.getObjectByName("jx.grid.Cell");
  goog.exportSymbol("jx.grid.EditManager", g);
  goog.exportSymbol("jx.grid.Editor", h);
  g.getInstance = function(a) {
    return new g(a)
  };
  var c = g.prototype;
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
      for(var c = this.grid.colDefMgr.get(), i = c.length, f = 0;f < i;f++) {
        if(b.isNotNull(c[f].editor)) {
          a["onRenderHeader_" + c[f].key + "_prepend"] = this._onRenderHeader
        }
      }
    }
    this.grid.event.bind(a, this)
  };
  c._destroy = function() {
    this._deleteEditor();
    f._destroy(this, {name:"EditManager", path:"editMgr", map:"_beginEditKeys _options"})
  };
  c._onBeforeCreateSelCss = function() {
    var a = "#" + this.grid.mid + " .", b = this._options, c = [], f = this.grid.view._getRowInnerHeight();
    c.push(this.grid.view._getCellSelector() + "." + b.classEdit + "{background:" + b.basicBackground + "}");
    c.push(a + b.classEdit + " input{position:absolute;z-index:10;top:0;padding:0;border:0;margin:0;background:" + b.basicBackground + ";height:" + f + "px;line-height:" + f + "px}");
    b.editableBgEnabled && c.push(a + b.classCellEditable + "{background:" + b.editableBg + "}");
    b.notEditableBgEnabled && c.push(a + b.classCellNotEditable + "{background:" + b.notEditableBg + "}");
    b.editIconEnabled && c.push(a + b.classEditIcon + "{float:left;position:absolute;left:0;top:0;padding:0 " + b.editIconPadding + "px;width:" + b.editIconWidth + "px;height:" + f + "px;background:url(" + b.urlEditIcon + ") no-repeat center transparent}");
    c.push(a + b.classSuccess + "{background:" + b.successBackground + "}");
    c.push(a + b.classFailure + "{background:" + b.failureBackground + "}");
    return c.join("")
  };
  c.onCreateDynamicCss = function() {
    for(var a = this.grid.view._getCellSelector(), c = this.grid.view._getPadding(), i = this.grid.colDefMgr.get(), f = 0, j = "";f < i.length;f++) {
      b.isNotNull(i[f].editor) && (j += a + ".k_" + i[f].key + " .basic-editor{width:" + (i[f].width - 2 * c) + "px}")
    }
    return j
  };
  c._onRenderHeader = function(a) {
    a.push("<span class='" + this._options.classEditIcon + "'></span>")
  };
  c._onRenderCell = function(a, b, c, f, j) {
    this.grid.dataMgr.isReal(c) && j.push("<span class='" + this._options.classEditIcon + "' title='클릭하여 에디팅을 시작합니다' onclick='JGM.m.EditManager." + this.mid + '.beginEdit("' + c[this.grid.dataMgr.idKey] + '","' + f.key + "\")'></span>")
  };
  c.cancelMouseEvent = function(a) {
    return!b.hasTagAndClass(a.target, "DIV", this._options.classEditIcon)
  };
  c.beginEdit = function(a, b) {
    this.begin(f.create("Cell", {grid:this.grid, datarow:this.grid.dataMgr.getById(a), colDef:this.grid.colDefMgr.getByKey(b)}))
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
    var c = this.getDatarow(), i = this.getKey(), f;
    b.isNotNullAnd(c, i) && (f = this.grid.dataMgr.updateByKey(c, i, a, {noSort:!0, noFilter:!0, noRerender:!0}), f === !0 && this.grid.view.rerenderRow(c));
    return f
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
            var b = a.setValue(b), c, f = a.get$();
            b instanceof Error ? (this.cancel(), c = this._options.classFailure) : (this._deleteEditor(), this.grid.view.focus(), this.grid.printMessage("Successfully Updated."), c = this._options.classSuccess);
            f.addClass(c);
            setTimeout(function() {
              f.removeClass(c)
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
      var a = {}, c = {}, f = [], j, g, h, p, q, l, k;
      a:for(j in i) {
        if(i.hasOwnProperty(j) && j !== "length") {
          for(k in p = h = g = void 0, l = i[j], l) {
            if(l.hasOwnProperty(k) && !(k === "length" || c.hasOwnProperty(k))) {
              q = l[k].cell;
              if(b.isNull(g) && (g = q.getColDef(), h = g.defaultValue, p = g.key, b.isNull(g.editor))) {
                continue a
              }
              q = b.isNotNull(a[k]) ? a[k].datarow : q.getDatarow();
              this.grid.dataMgr.isReal(q) ? h !== q[p] && (b.isNull(a[k]) && (a[k] = {datarow:q, change:{}}, f.push(a[k])), a[k].change[p] = h) : c[k] = !0
            }
          }
        }
      }
      f.length !== 0 && this.grid.dataMgr.updateList(f)
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
window.console && window.console.log && window.console.log('reading javascript source "TooltipManager.js"...');
jx.grid.TooltipManager = {};
(function() {
  function g(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    this.grid.tooltip = this;
    this._ctnr = a.container;
    this._options = h._extend({classTooltip:"jgrid-tooltip", tooltipSyncEnabled:!0, offsetX:0, offsetY:18, background:"#F5F5F5", border:"1px solid #868686", padding:"2px 10px", font:"14px Arial,Helvetica,sans-serif", color:"#333"}, a.options);
    this.__init()
  }
  var h = goog.getObjectByName("jx.grid"), f = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.TooltipManager", g);
  g.getInstance = function(a) {
    return new g(a)
  };
  var b = g.prototype;
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
    f.isNotNull(this._tooltip) && (this._ctnr[0].removeChild(this._tooltip[0]), delete this._tooltip)
  };
  b._mousemoveCanvas = function(a) {
    var b = this._options;
    b.tooltipSyncEnabled && f.isNotNull(this._tooltip) && this._tooltip.css({left:a.pageX + b.offsetX + "px", top:a.pageY + b.offsetY + "px"})
  };
  b._mouseoverCanvas = function(a, b) {
    if(b.getColDef().tooltipEnabled && f.isNull(this._tooltip)) {
      var d = this._options, e = document.createElement("div");
      e.innerHTML = "<div class='" + d.classTooltip + "' style='left:" + (a.pageX + d.offsetX) + "px;top:" + (a.pageY + d.offsetY) + "px'>" + b.getValue() + "</div>";
      this._tooltip = $(e.firstChild);
      this._ctnr[0].appendChild(this._tooltip[0])
    }
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "PrintManager.js"...');
jx.grid.PrintManager = {};
(function() {
  function g(a) {
    this.mid = a.mid;
    this._ctnr = Util$.safe$(a.container);
    this.grid = a.grid;
    this._options = h._extend({title:"Print Preview", font:"15px arial,sans-serif", headerFontColor:"#27413E", headerBackgroundColor:"#DCDEDE", tableBorderColor:"#6E7174", headerBorderColor:"#909192", cellBorderColor:"#D0D7E5", winOptions:{name:"Print Preview", width:800, height:600, directories:"no", location:"no", menubar:"no", status:"no", toolbar:"no"}}, a.options);
    this.__init()
  }
  var h = goog.getObjectByName("jx.grid"), f = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.PrintManager", g);
  g.getInstance = function(a) {
    return new g(a)
  };
  var b = g.prototype;
  b.__init = function() {
    var a = this;
    this._ctnr[0].innerHTML = "<button type='button'>Print</button>";
    this._ctnr.click(function() {
      a.print()
    })
  };
  b.print = function() {
    var a = this.getPrintHtml(this.grid.colDefMgr.get(), this.grid.dataMgr.datalist), b = f.open(this._options.winOptions);
    b.document.write(a);
    b.document.close()
  };
  b.getPrintHtml = function(a, b) {
    var d = this._options, e = d.tableBorderColor, i = d.headerBorderColor, f = d.cellBorderColor, j = [], g = a.length, h = g - 1, p = b.length, q = p - 1, l = 0, k;
    j.push("<html><head>");
    j.push("<title>" + d.title + "</title>");
    j.push("</head><body onload='window.print();'>");
    j.push("<table width='100%' cellspacing='0' cellpadding='0'><tbody><tr><td align='left'>");
    j.push("<table width='100%' cellspacing='0' cellpadding='2' style='border-collapse:collapse'>");
    j.push("<tbody style='font:" + d.font + ";'>");
    for(j.push("<tr style='background-color:" + d.headerBackgroundColor + ";color:" + d.headerFontColor + ";text-align:center'>");l < g;l++) {
      j.push("<td style='border:solid 1px " + i + ";'>" + a[l].name + "</td>")
    }
    j.push("</tr>");
    for(l = 0;l < p;l++) {
      d = b[l];
      j.push("<tr>");
      if(l === 0) {
        for(k = 0;k < g;k++) {
          k === 0 ? j.push("<td style='border:solid 1px " + f + ";border-top:solid 1px " + i + ";border-left:solid 1px " + e + "'>" + d[a[k].key] + "</td>") : k === h ? j.push("<td style='border:solid 1px " + f + ";border-top:solid 1px " + i + ";border-right:solid 1px " + e + "'>" + d[a[k].key] + "</td>") : j.push("<td style='border:solid 1px " + f + ";border-top:solid 1px " + i + "'>" + d[a[k].key] + "</td>")
        }
      }else {
        if(l < q) {
          for(k = 0;k < g;k++) {
            k === 0 ? j.push("<td style='border:solid 1px " + f + ";border-left:solid 1px " + e + "'>" + d[a[k].key] + "</td>") : k === h ? j.push("<td style='border:solid 1px " + f + ";border-right:solid 1px " + e + "'>" + d[a[k].key] + "</td>") : j.push("<td style='border:solid 1px " + f + "'>" + d[a[k].key] + "</td>")
          }
        }else {
          for(k = 0;k < g;k++) {
            k === 0 ? j.push("<td style='border:solid 1px " + f + ";border-bottom:solid 1px " + e + ";border-left:solid 1px " + e + "'>" + d[a[k].key] + "</td>") : k === h ? j.push("<td style='border:solid 1px " + f + ";border-bottom:solid 1px " + e + ";border-right:solid 1px " + e + "'>" + d[a[k].key] + "</td>") : j.push("<td style='border:solid 1px " + f + ";border-bottom:solid 1px " + e + "'>" + d[a[k].key] + "</td>")
          }
        }
      }
      j.push("</tr>")
    }
    j.push("</tbody></table></td></tr></tbody></table></body></html>");
    return j.join("")
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
  var h = goog.getObjectByName("jx.grid"), f = goog.getObjectByName("jx.grid.Grid"), b = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var a = goog.getObjectByName("jx.grid.Cell"), c = {INPUT:!0, TEXTAREA:!0, LABEL:!0, FIELDSET:!0, LEGEND:!0, SELECT:!0, OPTGROUP:!0, OPTION:!0, BUTTON:!0}, d = {checkbox:!0, radio:!0};
  goog.exportSymbol("jx.grid.ViewportManager", g);
  g.getInstance = function(a) {
    return new g(a)
  };
  var e = g.prototype;
  e.__init = function() {
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
  e.unsetDrag = function() {
    this._drag = !1
  };
  e._onDestroy = function() {
    h._destroy(this, {name:"ViewportManager", path:"view", $:"_canvas _mask", property:"_ctnr", map:"_vars _lockedRows _renderedRows _options"})
  };
  e._onCreateCss = function() {
    var a = "#" + this.grid.mid + " .", b = this._options, c = a + this._cellClass, d = a + this._rowClass, e = b.borderThickness + "px " + b.border, f = d + "[" + this._rowIdxAttr, g = this._colmgr.get(), h = g.length, k = 0, r = [];
    r.push(a + b.classView + "{height:" + this._calHeight() + "px;outline:0;position:relative;white-space:nowrap;overflow:auto;line-height:" + b.rowH + "px;cursor:default;-moz-user-select:none;-webkit-user-select:none;" + b.style + ";background:url(" + this.grid._options.imageUrl + "loading.gif) repeat center}");
    r.push(a + b.classView + ":focus{background:" + b.focusBackground + ";outline:" + b.focusOutline + "}");
    r.push(a + b.classCanvas + "{height:" + this._calCanvasHeight() + "px;" + b.canvasStyle + ";}");
    r.push(d + "{background:white;position:absolute;" + b.rowStyle + "}");
    r.push(c + "{height:" + b.rowH + "px;border-bottom:" + e + ";display:inline-block;white-space:nowrap;overflow:hidden;float:left;text-overflow:ellipsis;padding-left:" + b.padding + "px;border-right:" + e + ";" + b.cellStyle + "}");
    for(b.evenOddRows && r.push(f + "$='1']," + f + "$='3']," + f + "$='5']," + f + "$='7']," + f + "$='9']{background:" + b.oddRowsBackground + "}");k < h;k++) {
      r.push(c + ".k_" + g[k].key + "{" + g[k].style + "}")
    }
    return r.join("")
  };
  e._onCreateDynamicCss = function() {
    var a = "#" + this.grid.mid + " .", b = a + this._cellClass, c = a + this._rowClass;
    a += this._options.classCanvas;
    var d = this._calCanvasWidth(), e = this._colmgr.get(), f = "", g = e.length, h = 0;
    for(f += a + "{width:" + d + "px}" + c + "{width:" + d + "px}";h < g;h++) {
      f += b + ".k_" + e[h].key + "{width:" + e[h].width + "px}"
    }
    return f
  };
  e.onUpdateDatarow = function(a) {
    this.isRendered(a) && this.rerenderRow(a)
  };
  e.onUpdateDatalist = function(a) {
    for(var b, c = a.length, d = 0;d < c;d++) {
      b = a[d], this.isRendered(b) && this.rerenderRow(b)
    }
  };
  e.onRemoveDatarow = function(a) {
    this.destroyRow(a)
  };
  e.onRemoveDatalist = function(a) {
    for(var b = a.length, c = 0;c < b;c++) {
      this.destroyRow(a[c])
    }
  };
  e.onIdChange = function(a, b, c) {
    this.isRowLockedById(b) && (this._lockedRows[c] = this._lockedRows[b], delete this._lockedRows[b]);
    this.isRenderedById(b) && ((this._renderedRows[c] = this._renderedRows[b]).setAttribute("i", c), delete this._renderedRows[b])
  };
  e.onIdListChange = function(a, b, c) {
    for(var d = a.length, e = 0, f = this._lockedRows, g = this._renderedRows, h, k;e < d;e++) {
      h = b[e], k = a[e][c], f.hasOwnProperty(h) && (f[k] = f[h], delete f[h]), g.hasOwnProperty(h) && ((g[k] = g[h]).setAttribute("i", k), delete g[h])
    }
  };
  e._getCellSelector = function() {
    return"#" + this.grid.mid + " ." + this._cellClass
  };
  e._getRowSelector = function() {
    return"#" + this.grid.mid + " ." + this._rowClass
  };
  e.scrollTo = function(a, b) {
    this.scrollToRow(a);
    this.scrollToCol(b)
  };
  e.scrollToRowLazy = function(a) {
    var b = this.getScrollTop();
    return a == null ? b : this._getLastSafeVisibleRow() < a ? this.scrollToRow(this._getFirstRowForSafe(a)) : this._getFirstSafeVisibleRow() > a ? this.scrollToRow(a) : b
  };
  e.scrollToColLazy = function(a) {
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
  e.scrollToLazy = function(a, b) {
    this.scrollToRowLazy(a);
    this.scrollToColLazy(b)
  };
  e.scrollToRow = function(a) {
    return a != null ? this.setScrollTop(this._getRowOuterHeight() * a) : this.getScrollTop()
  };
  e.scrollToCol = function(a) {
    return this.setScrollLeft(this.getColLeft(a))
  };
  e._getColInnerWidth = function(a) {
    return this._colmgr.get(a).width
  };
  e._getColInnerWidthByKey = function(a) {
    return this._colmgr.getByKey(a).width
  };
  e.getColWidth = function(a) {
    return this._colmgr.get(a).width + this._options.padding
  };
  e.getColWidthByKey = function(a) {
    return this._colmgr.getByKey(a).width + this._options.padding
  };
  e._getColOuterWidth = function(a) {
    return this._colmgr.get(a).width + this._options.padding + this._options.borderThickness
  };
  e._getColOuterWidthByKey = function(a) {
    return this._colmgr.getByKey(a).width + this._options.padding + this._options.borderThickness
  };
  e._getPadding = function() {
    return this._options.padding
  };
  e._colWidthPlus = function() {
    return this._options.padding + this._options.borderThickness
  };
  e._getRowOuterHeight = function() {
    return this._options.rowH + this._options.borderThickness
  };
  e._getRowInnerHeight = function() {
    return this._options.rowH
  };
  e._calHeight = function() {
    return this._options.autoHeight ? this._calCanvasHeight() + (this.grid.width() < this._calCanvasWidth() ? this.grid._vars.scrollbarDim.h : 0) : this._getRowOuterHeight() * this._options.rowsPerPage
  };
  e.getHeight = function() {
    return this._mask[0].offsetHeight
  };
  e.getInnerHeight = function() {
    return this._mask[0].clientHeight
  };
  e._getWidth = function() {
    return this._mask[0].offsetWidth
  };
  e.getInnerWidth = function() {
    return this._mask[0].clientWidth
  };
  e._calCanvasHeight = function() {
    return this._getRowOuterHeight() * this._datamgr.datalist.length || 1
  };
  e.getCanvasHeight = function() {
    return this._canvasEl.clientHeight
  };
  e._setCanvasHeight = function(a) {
    a = parseInt(a, 10);
    if(isNaN(a) || a < 1) {
      a = 1
    }
    var b = this.getCanvasHeight();
    if(a != b) {
      this._canvasEl.style.height = a + "px", this._evtmgr.trigger("onResizeCanvasHeight", [a, b], !0)
    }
  };
  e._calCanvasWidth = function() {
    return this._colLefts[this._colmgr.length()]
  };
  e.getCanvasWidth = function() {
    return this._canvasEl.clientWidth
  };
  e._setCanvasWidth = function(a) {
    typeof a != "number" && (a = parseInt(a, 10));
    if(isFinite(a) && !(a < 1)) {
      var b = this.getCanvasWidth();
      if(a != b) {
        this.grid.log("set canvas width. " + b + "->" + a, f.V_RESIZE), this._canvasEl.style.width = a + "px", this._evtmgr.trigger("onResizeCanvasWidth", [a, b], !0)
      }
    }
  };
  e.getColLeft = function(a) {
    return this._colLefts[a]
  };
  e._getColLefts = function() {
    return this._colLefts
  };
  e._setColLefts = function(a, b) {
    for(var a = a || 0, c = this._colmgr.get(), d = this._colWidthPlus(), b = b || c.length;a < b;a++) {
      this._colLefts[a + 1] = this._colLefts[a] + c[a].width + d
    }
    return this._colLefts
  };
  e._onReorderCols = function() {
    this._setColLefts();
    this._rerender()
  };
  e.setWidthByKey = function(a, c) {
    var d = this._colmgr.getByKey(a), c = b.bound(c, d.minW, d.maxW);
    if(c !== d.width) {
      this.grid.log("set column width. key=" + a + ", w=" + c, f.V_RESIZE);
      var e = this._evtmgr, g = this._colmgr, h = [a, c, d.width];
      d.width = c;
      this._setCanvasWidth(this._setColLefts(g.getIdxByKey(a))[g.length()]);
      this.grid._recreateDynamicCss();
      e.trigger("onResizeCol_" + a, h, !0);
      e.trigger("onResizeCol", h, !0)
    }
  };
  e._autoColWidth = function(a) {
    for(var b = this._canvasFind(".k_" + a), c = Number.MIN_VALUE, d = b.length, e = 0;e < d;e++) {
      if(c < b[e].scrollWidth) {
        c = b[e].scrollWidth
      }
    }
    c -= this._getPadding();
    this.setWidthByKey(a, c)
  };
  e._setWidth = function() {
  };
  e.getScrollTop = function() {
    return this._mask[0].scrollTop
  };
  e.getScrollLeft = function() {
    return this._mask[0].scrollLeft
  };
  e.setScrollTop = function(a) {
    var b = this.getScrollTop();
    return a != null && b != a ? this._mask[0].scrollTop = a : b
  };
  e.setScrollLeft = function(a) {
    var b = this.getScrollLeft();
    return a != null && b != a ? this._mask[0].scrollLeft = a : b
  };
  e._hasHScrollbar = function() {
    return this._mask[0].offsetHeight > this._mask[0].clientHeight
  };
  e._hasVScrollbar = function() {
    return this._mask[0].offsetWidth > this._mask[0].clientWidth
  };
  e._heightPlus = function() {
    return this._mask[0].offsetHeight - this._mask[0].clientHeight
  };
  e._widthPlus = function() {
    return this._mask[0].offsetWidth - this._mask[0].clientWidth
  };
  e._getFirstVisibleRow = function() {
    return Math.floor(this.getScrollTop() / this._getRowOuterHeight())
  };
  e._getFirstSafeVisibleRow = function() {
    return Math.ceil(this.getScrollTop() / this._getRowOuterHeight())
  };
  e._getLastVisibleRow = function() {
    return Math.ceil((this.getScrollTop() + this._mask[0].clientHeight) / this._getRowOuterHeight()) - 1
  };
  e._getLastSafeVisibleRow = function() {
    return Math.floor((this.getScrollTop() + this._mask[0].clientHeight) / this._getRowOuterHeight()) - 1
  };
  e._getFirstRowForSafe = function(a) {
    return a - Math.floor(this._mask[0].clientHeight / this._getRowOuterHeight()) + 1
  };
  e._getFirstVisibleCol = function() {
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
  e._getFirstSafeVisibleCol = function() {
    for(var a = this.getScrollLeft(), b = this._colLefts, c = 0, d = b.length;c < d;c++) {
      if(b[c] >= a) {
        return c
      }
    }
    return d - 2
  };
  e._getLastVisibleCol = function() {
    for(var a = this.getScrollLeft() + this._mask[0].clientWidth, b = this._colLefts, c = 0, d = b.length;c < d;c++) {
      if(b[c] >= a) {
        return c - 1
      }
    }
    return d - 2
  };
  e._getLastSafeVisibleCol = function() {
    for(var a = this.getScrollLeft() + this._mask[0].clientWidth, b = this._colLefts, c = 0, d = b.length;c < d;c++) {
      if(b[c] > a) {
        return c - 2
      }
    }
    return d - 2
  };
  e._getFirstColForSafe = function(a) {
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
  e.getScrollHForSafe = function(a) {
    var b = this._colLefts, c = b[a + 1] - this._mask[0].clientWidth;
    return b[a] <= c ? b[a] : c
  };
  e._getRenderRange = function() {
    if(this._options.autoHeight) {
      return{start:0, end:this._datamgr.datalist.length - 1}
    }
    var a, b = this._datamgr.datalist.length - 1;
    return{start:(a = this._getFirstVisibleRow() - this._options.bufferSize) < 0 ? 0 : a, end:(a = this._getLastVisibleRow() + this._options.bufferSize) > b ? b : a}
  };
  e._fitHeight = function() {
    this._mask[0].style.height = this.getCanvasHeight() + this._heightPlus() + "px"
  };
  e._resizeWidth = function() {
    this._options.autoHeight && this._fitHeight()
  };
  e.onAfterRefresh = function(a) {
    a !== void 0 && a.noRerender === !0 || this._rerender()
  };
  e._rerender = function() {
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
  e._render = function(a) {
    this._removeAndRenderRows(a)
  };
  e._renderShift = function(a) {
    a = a || this._getRenderRange();
    this._removeRowsExcept(a);
    this._appendRows(a)
  };
  e._removeRows = function(a) {
    var b = this._canvasEl, c = this._renderedRows, d = this._lockedRows, e;
    if(a) {
      for(var f = a.start, a = a.end, g = this._datamgr;f <= a;f++) {
        if(!d.hasOwnProperty(e = g.getIdByIdx(f)) && c.hasOwnProperty(e)) {
          b.removeChild(c[e]), delete c[e]
        }
      }
    }else {
      if(this._lockExist()) {
        for(e in c) {
          c.hasOwnProperty(e) && d.hasOwnProperty(e) && (b.removeChild(c[e]), delete c[e])
        }
      }else {
        this._renderedRows = {}, b.innerHTML = ""
      }
    }
  };
  e._removeRowsExcept = function(a) {
    var b = this._canvasEl, c = this._renderedRows, d = this._lockedRows, e;
    if(a) {
      var f = a.start, a = a.end, g = this._datamgr, h;
      for(e in c) {
        if(c.hasOwnProperty(e) && !(d.hasOwnProperty(e) || f <= (h = g.getIdxById(e)) && h <= a)) {
          b.removeChild(c[e]), delete c[e]
        }
      }
    }else {
      if(this._lockExist()) {
        for(e in c) {
          c.hasOwnProperty(e) && d.hasOwnProperty(e) === !1 && (b.removeChild(c[e]), delete c[e])
        }
      }else {
        this._renderedRows = {}, b.innerHTML = ""
      }
    }
  };
  e.destroyRow = function(a) {
    return this.destroyRowById(this._datamgr.getId(a))
  };
  e.destroyRowById = function(a) {
    a != null && (this.unlockRowById(a), this._renderedRows.hasOwnProperty(a) && (this._canvasEl.removeChild(this._renderedRows[a]), delete this._renderedRows[a]))
  };
  e.destroyRowByIdx = function(a) {
    return this.destroyRowById(this._datamgr.getIdByIdx(a))
  };
  e._lockExist = function() {
    return b.isNotEmptyObj(this._lockedRows)
  };
  e.isRowLockedById = function(a) {
    return a != null ? this._lockedRows.hasOwnProperty(a) : !1
  };
  e.isRowLocked = function(a) {
    return this.isRowLockedById(this._datamgr.getId(a))
  };
  e.isRowLockedByIdx = function(a) {
    return this.isRowLockedById(this._datamgr.getIdByIdx(a))
  };
  e.lockRowById = function(a) {
    a != null && this._datamgr.hasById(a) && (this._lockedRows[a] = !0)
  };
  e.lockRow = function(a) {
    return this.lockRowById(this._datamgr.getId(a))
  };
  e.lockRowByIdx = function(a) {
    return this.lockRowById(this._datamgr.getIdByIdx(a))
  };
  e.unlockRowById = function(a) {
    this.isRowLockedById(a) && delete this._lockedRows[a]
  };
  e.unlockRow = function(a) {
    return this.unlockRowById(this._datamgr.getId(a))
  };
  e.unlockRowByIdx = function(a) {
    return this.unlockRowById(this._datamgr.getIdByIdx(a))
  };
  e.unlockAllRows = function() {
    this._lockedRows = {}
  };
  e.rerenderRowById = function(a) {
    if(this._datamgr.containsById(a)) {
      var c = this._renderedRows, d = this._canvasEl, e = this._datamgr, f = e.idKey, g = e.getIdxById(a), e = e.getById(a), h = this._colmgr.get(), l = this._getColCellClasses(h).map(function(a) {
        return"<div class='" + a + " "
      }), k = this._getRendererSettings(h), r = k[0], k = k[1], s = this._getRowOuterHeight(), t = "<div class='" + this._rowClass + "' i='", v = "' " + this._rowIdxAttr + "='", u = [];
      c.hasOwnProperty(a) && (d.removeChild(c[a]), this._evtmgr.trigger("onBeforeRenderRows", [[g]], !0), u.push(t + e[f] + v + g + "' style='top:" + s * g + "px'>"), this._renderRow(u, g, e, h, l, r, k), c[a] = b.appendHTML(d, u.join(""))[0], this._evtmgr.trigger("onAppendRows", [[g]], !0))
    }
  };
  e._getRendererSettings = function(a) {
    for(var a = a || this._colmgr.get(), b = 0, c = a.length, d, e = [], f = [], g;b < c;b++) {
      d = a[b], (g = d.renderer) ? (e.push(!!d.rendererInput), f.push(g)) : (e.push(!1), f.push(!1))
    }
    return[f, e]
  };
  e.rerenderRow = function(a) {
    return this.rerenderRowById(this._datamgr.getId(a))
  };
  e.rerenderRowByIdx = function(a) {
    return this.rerenderRowById(this._datamgr.getIdByIdx(a))
  };
  e.rerenderCellByIdAndKey = function(a, b) {
    var c = this.getCellByIdAndKey(a, b);
    if(c) {
      var d = this._datamgr, e = this._colmgr, f = d.getById(a), g = e.getByKey(b), d = d.getIdxById(a), e = e.getIdxByKey(b), h = g.renderer, k = h ? g.rendererInput : !1, r = [];
      h ? k ? this._renderCell(r, d, e, f, g, h, !0) : this._renderCell(r, d, e, f, g, h) : this._renderCell(r, d, e, f, g);
      c.innerHTML = r.join("")
    }
  };
  e.rerenderCellByIdx = function(a, b) {
    return this.rerenderCellByIdAndKey(this._datamgr.getIdByIdx(a), this._colmgr.getKeyByIdx(b))
  };
  e._appendRows = function(a) {
    var c = this._evtmgr, d = [a], e = [], f = a.start, a = a.end, g = this._datamgr, h = g.datalist, l = g.idKey, k = this._colmgr.get(), r = this._getColCellClasses(k).map(function(a) {
      return"<div class='" + a + " "
    }), g = this._renderedRows, s = this._getRowOuterHeight(), t = this._canvasEl, v = "<div class='" + this._rowClass + "' i='", u = "' " + this._rowIdxAttr + "='", x = this._getRendererSettings(k), z = x[0], A = x[1], w, y, x = [];
    c.trigger("onBeforeRenderRows", d, !0);
    for(this.grid.twstart();f <= a;f++) {
      w = h[f], y = w[l], g.hasOwnProperty(y) || (e[e.length] = v + y + u + f + "' style='top:" + s * f + "px'>", this._renderRow(e, f, w, k, r, z, A), this.grid.twlap(), x.push(y))
    }
    this.grid.twprint();
    this.grid.twstop();
    e = b.appendHTML(t, e.join(""));
    f = 0;
    for(a = x.length;f < a;f++) {
      g[x[f]] = e[f]
    }
    c.trigger("onAppendRows", d, !0)
  };
  e._removeAndRenderRows = function(a) {
    var a = a || this._getRenderRange(), b = this._evtmgr, c = [a], d = [], e = a.start, a = a.end, f = this._datamgr, g = f.datalist, f = f.idKey, h = this._colmgr.get(), k = this._getColCellClasses(h).map(function(a) {
      return"<div class='" + a + " "
    }), r = this._getRowOuterHeight(), s = this._canvasEl, t = "<div class='" + this._rowClass + "' i='", v = "' " + this._rowIdxAttr + "='", u = this._getRendererSettings(h), x = u[0], u = u[1], z, A, w = [], y = {};
    b.trigger("onBeforeRenderRows", c, !0);
    for(this.grid.twstart();e <= a;e++) {
      z = g[e], A = z[f], d[d.length] = t + A + v + e + "' style='top:" + r * e + "px'>", this._renderRow(d, e, z, h, k, x, u), this.grid.twlap(), w.push(A)
    }
    this.grid.twprint();
    this.grid.twstop();
    s.innerHTML = d.join("");
    e = 0;
    for(a = w.length;e < a;e++) {
      y[w[e]] = s.childNodes[e]
    }
    this._renderedRows = y;
    b.trigger("onAppendRows", c, !0)
  };
  e._renderColumn = function(b, c, d, e, f, g, h) {
    for(var l = [], k, r = 0, s = d.length, t, v, u, x = c.key, z, A = this.grid, w = this._evtmgr, y = "onRenderCell_" + x, C = [null, b, v, c], B = [null, b, null, c, null];r < s;r++) {
      t = d[r];
      v = e[t];
      u = v[x];
      k = [];
      B[0] = C[0] = t;
      B[2] = v;
      B[4] = k;
      z = w.trigger("onGetCellClass", C);
      k[k.length] = z ? f + z.join(" ") + "'>" : f + "'>";
      w.trigger(y + "_prepend", B, !0);
      if(typeof u != "string" || u.substring(0, 3) !== "J@H") {
        g ? k[k.length] = h ? g(new a({grid:A, row:t, col:b, datarow:v, colDef:c})) : g(u, t, b, v, c) : u != null && (k[k.length] = u)
      }
      w.trigger(y + "_append", B, !0);
      k[k.length] = "</div>";
      l[l.length] = k.join("")
    }
    return l
  };
  e._getColCellClass = function(a) {
    var b = this._cellClass + " k_" + a.key;
    a.colClass && (b += " " + a.colClass);
    (a = this._evtmgr.trigger("onGetColCellClass", [a])) && (b += " " + a.join(" "));
    return b
  };
  e._getColCellClasses = function(a) {
    for(var a = a || this._colmgr.get(), b = [], c = 0, d = a.length;c < d;c++) {
      b.push(this._getColCellClass(a[c]))
    }
    return b
  };
  e._renderRow = function(a, b, c, d, e, f, g) {
    for(var h = 0, k = d.length, r, s = [b, null, c, null], t = this._evtmgr, v, u;h < k;h++) {
      r = d[h], s[1] = h, s[3] = r, v = t.trigger("onGetCellClass", s), a[a.length] = v ? e[h] + v.join(" ") + "'>" : e[h] + "'>", (u = f[h]) ? g[h] ? this._renderCell(a, b, h, c, r, u, !0) : this._renderCell(a, b, h, c, r, u) : this._renderCell(a, b, h, c, r), a[a.length] = "</div>"
    }
    a[a.length] = "</div>";
    return a
  };
  e._renderCell = function(b, c, d, e, f) {
    var g = f.key, h = e[g], l = [c, d, e, f, b], k = this._evtmgr, g = "onRenderCell_" + g;
    k.trigger(g + "_prepend", l, !0);
    if(typeof h != "string" || h.substring(0, 3) !== "J@H") {
      arguments.length > 5 ? b[b.length] = arguments[6] ? arguments[5](new a({grid:this.grid, row:c, col:d, datarow:e, colDef:f})) : arguments[5](h, c, d, e, f) : h != null && (b[b.length] = h)
    }
    k.trigger(g + "_append", l, !0)
  };
  a.prototype.rerender = function() {
    return this.grid.view.rerenderCellByIdAndKey(this.getId(), this.getKey())
  };
  a.prototype.scrollTo = function() {
    this.grid.view.scrollTo(this.getRowIdx(), this.getColIdx())
  };
  e._keydown = function(a) {
    b.contains(this._mask[0], document.activeElement, this._ctnr[0]) && (this.grid.log("UI event:keydown on Viewport. event=" + a.type + ", keycode=" + a.which, f.V_KEYDOWN), this._evtmgr.trigger("keydownCanvas_" + a.which, [a], !0), this._evtmgr.trigger("keydownCanvas", [a], !0))
  };
  e._keyup = function(a) {
    b.contains(this._mask[0], document.activeElement, this._ctnr[0]) && (this.grid.log("UI event:keyup on Viewport. event=" + a.type + ", keycode=" + a.which, f.V_KEYUP), this._evtmgr.trigger("keyupCanvas_" + a.which, [a], !0), this._evtmgr.trigger("keyupCanvas", [a], !0))
  };
  e._keypress = function(a) {
    b.contains(this._mask[0], document.activeElement, this._ctnr[0]) && (this.grid.log("UI event:keypress on Viewport. event=" + a.type + ", keycode=" + a.which, f.V_KEYPRESS), this._evtmgr.trigger("keypressCanvas_" + a.which, [a], !0), this._evtmgr.trigger("keypressCanvas", [a], !0))
  };
  e._mousein = function(a) {
    this._drag ? this._triggerMouseEvent(a, "draginCanvas,mouseinCanvas", f.V_MOUSEIN) : this._triggerMouseEvent(a, "mouseinCanvas", f.V_MOUSEIN)
  };
  e._mouseout = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragoutCanvas,mouseoutCanvas", f.V_MOUSEOUT) : this._triggerMouseEvent(a, "mouseoutCanvas", f.V_MOUSEOUT)
  };
  e._mouseenter = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragenterCanvas,mouseenterCanvas", f.V_MOUSEENTER) : this._triggerMouseEvent(a, "mouseenterCanvas", f.V_MOUSEENTER)
  };
  e._mouseleave = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragleaveCanvas,mouseleaveCanvas", f.V_MOUSELEAVE) : this._triggerMouseEvent(a, "mouseleaveCanvas", f.V_MOUSELEAVE)
  };
  e._mousemove = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragmoveCanvas,mousemoveCanvas", f.V_MOUSEMOVE) : this._triggerMouseEvent(a, "mousemoveCanvas", f.V_MOUSEMOVE)
  };
  e._mouseover = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragoverCanvas,mouseoverCanvas", f.V_MOUSEOVER) : this._triggerMouseEvent(a, "mouseoverCanvas", f.V_MOUSEOVER)
  };
  e._mousedown = function(a) {
    if(this._triggerMouseEvent(a, "mousedownCanvas", f.V_MOUSEDOWN)) {
      this._drag = !0
    }
  };
  e._mouseup = function(a) {
    this._drag = !1;
    this._triggerMouseEvent(a, "mouseupCanvas", f.V_MOUSEUP)
  };
  e._click = function(a) {
    this._triggerMouseEvent(a, "clickCanvas", f.V_CLICK) && this.focus(a)
  };
  e._dblclick = function(a) {
    this._triggerMouseEvent(a, "dblclickCanvas", f.V_DBLCLICK)
  };
  e._triggerMouseEvent = function(b, e, f) {
    var g = b.target;
    if(g) {
      var h = g.tagName, g = g.type && g.type.toLowerCase();
      if(d[g] || !c[h]) {
        if(h = this._getClosestCell(b.target)) {
          this.grid.log("UI event:" + e + " on Viewport. event=" + b.type, f);
          h = new a({grid:this.grid, node:h});
          f = h.getKey();
          b = [b, h];
          h = this._evtmgr;
          if(e.indexOf(",") > -1) {
            for(var e = e.split(","), g = 0, p = e.length, q;g < p;g++) {
              q = e[g], h.trigger(q + "_" + f, b, !0), h.trigger(q, b, !0)
            }
          }else {
            h.trigger(e + "_" + f, b, !0), h.trigger(e, b, !0)
          }
          return!0
        }
      }
    }
    return!1
  };
  e._scroll = function() {
    var a = this.getScrollTop(), b = a - this._lastScrollTop, c = this.getScrollLeft(), d = c - this._lastScrollLeft;
    if(b !== 0 || d !== 0) {
      this.grid.log("Viewport scrolled... h=" + d + ", v=" + b, f.V_SCROLL);
      var e = this._evtmgr, b = Math.abs(b / this._getRowOuterHeight());
      e.trigger("onScrollViewport", !1, !0);
      if(d) {
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
  e.focus = function(a) {
    if(!a || !this._evtmgr.triggerInvalid("onBeforeFocusCanvas", [a])) {
      if(a = this._mask[0], document.activeElement !== a) {
        this.grid.log("focusing canvas...", f.V_FOCUS);
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
  e.isRenderedById = function(a) {
    return a != null ? this._renderedRows.hasOwnProperty(a) : !1
  };
  e.isRendered = function(a) {
    return this.isRenderedById(this._datamgr.getId(a))
  };
  e.isRenderedByIdx = function(a) {
    return this.isRenderedById(this._datamgr.getIdByIdx(a))
  };
  e.getRowById = function(a) {
    if(this.isRenderedById(a)) {
      return this._renderedRows[a]
    }
  };
  e.getRow = function(a) {
    return this.getRowById(this._datamgr.getId(a))
  };
  e.getRowByIdx = function(a) {
    return this.getRowById(this._datamgr.getIdByIdx(a))
  };
  e.getRenderedRowById = function(a) {
    if(this.isRenderedById(a)) {
      return this._renderedRows[a]
    }
  };
  e.getRenderedRow = function(a) {
    return this.getRenderedRowById(this._datamgr.getId(a))
  };
  e.getRenderedRowByIdx = function(a) {
    return this.getRenderedRowById(this._datamgr.getIdByIdx(a))
  };
  e.getRenderedRows = function() {
    return b.toArray(this._renderedRows)
  };
  e.getCell = function(a, b) {
    if(b != null) {
      var c = this.getRowByIdx(a);
      if(c) {
        return c.childNodes[b]
      }
    }
  };
  e.getCellByIdAndKey = function(a, b) {
    var c = this._colmgr.getIdxByKey(b);
    if(c != null) {
      var d = this.getRowById(a);
      if(d) {
        return d.childNodes[c]
      }
    }
  };
  e.getRenderedCell = function(a, b) {
    if(b != null) {
      var c = this.getRenderedRowByIdx(a);
      if(c) {
        return c.childNodes[b]
      }
    }
  };
  e.getRenderedCellByIdAndKey = function(a, b) {
    var c = this._colmgr.getIdxByKey(b);
    if(c != null) {
      var d = this.getRenderedRowById(a);
      if(d) {
        return d.childNodes[c]
      }
    }
  };
  e._getClosestCell = function(a) {
    return b.closestWithTag(a, "DIV", this._cellClass, this._canvasEl)
  };
  e._getClosestRow = function(a) {
    return b.closestWithTag(a, "DIV", this._rowClass, this._canvasEl)
  };
  e._getClosestRowIdx = function(a) {
    return this._datamgr.getIdxByNode(this._getClosestRow(a))
  };
  e._canvasFind = function(a) {
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
    this._options = e._extend({colDef:{type:"string", key:void 0, name:"", colClass:void 0, defaultValue:void 0, inputOnCreate:void 0, style:"", headerStyle:"", width:80, minW:30, maxW:void 0, editor:void 0, sorter:void 0, hidden:!1, sumRenderer:void 0, tooltipEnabled:!1, resizable:!1, renderer:void 0, rendererInput:!1, noTitle:!1, noName:!1, title:void 0, noSearch:!1, filter:void 0, parser:void 0, validator:void 0, nullOnCreate:!1, notNull:!1}}, a.options);
    this._colDefs = [];
    this._filtered = [];
    this._keyToDef = {};
    this._keyToIdx = {};
    this._parsers = {};
    this._sorters = {};
    this._validators = {};
    this._nullOnCreates = {};
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
    return a == null ? Number.MAX_VALUE : f(a) ? 1 : 0
  }
  var e = goog.getObjectByName("jx.grid"), i = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.getObjectByName("jx.grid.Column");
  goog.getObjectByName("jx.grid.ViewportManager");
  goog.exportSymbol("jx.grid.ColumnManager", g);
  g.getInstance = function(a) {
    return new g(a)
  };
  var n = g.prototype;
  n.__init = function(a) {
    this.grid.event.bind("onDestroy", this._destroy, this);
    this.set(a.colDefs)
  };
  n._destroy = function() {
    e._destroy(this, {name:"ColumnManager", path:"colDefMgr", property:"_colDefs", map:"_keyToIdx _keyToDef _options", array:"_filtered"})
  };
  n.getAll = function() {
    return this._colDefs
  };
  n.empty = function() {
    this._colDefs = [];
    this._filtered.length = 0;
    this._keyToIdx = {};
    this._keyToDef = {};
    this._parsers = {};
    this._sorters = {};
    this._validators = {};
    this._nullOnCreates = {}
  };
  n.set = function(a) {
    a = a || [];
    if(this._colDefs === a) {
      return a
    }
    this.empty();
    this.eventChangeVisible();
    for(var b = 0, c = a.length, d, e;b < c;b++) {
      d = a[b];
      e = d.key;
      try {
        if(this.hasKey(e, !0)) {
          throw Error("duplicate column key, key = " + e);
        }
      }catch(f) {
        throw this.empty(), f;
      }
      this._extend(d)
    }
    this._colDefs = a;
    this._filter();
    this.eventChangeVisible();
    return a
  };
  n.getSorter = function(a) {
    if(a == null) {
      return this._sorters
    }
    if(this.hasKey(a, !0)) {
      var b = this._sorters;
      return b.hasOwnProperty(a) ? b[a] : null
    }
    throw Error("column key not found! key=" + a);
  };
  n.getValidator = function(a) {
    if(a == null) {
      return this._validators
    }
    if(this.hasKey(a, !0)) {
      var b = this._validators;
      return b.hasOwnProperty(a) ? b[a] : null
    }
    throw Error("column key not found! key=" + a);
  };
  n.getParser = function(a) {
    if(a == null) {
      return this._parsers
    }
    if(this.hasKey(a, !0)) {
      var b = this._parsers;
      return b.hasOwnProperty(a) ? b[a] : null
    }
    throw Error("column key not found! key=" + a);
  };
  n.getNullOnCreate = function(a) {
    if(a == null) {
      return this._nullOnCreates
    }
    if(this.hasKey(a, !0)) {
      return this._nullOnCreates.hasOwnProperty(a)
    }
    throw Error("column key not found! key=" + a);
  };
  n.push = function(a) {
    return this.addAt(this._filtered.length, a)
  };
  n.addAt = function(a, b) {
    var c = b.key, d = this._colDefs;
    if(this.hasKey(c, !0)) {
      throw Error("duplicate column key, key = " + c);
    }
    if(a < 0 || a > d.length) {
      throw Error("index out of bound, i = " + a);
    }
    d.addAt(a, this._extend(b));
    this._filter();
    this.eventChangeVisible();
    return d.length
  };
  n._extend = function(c) {
    if(c && !c._extended) {
      c._extended = !0;
      var d = {}, e, i;
      $.extend(!0, d, this._options.colDef);
      $.extend(!0, d, c);
      $.extend(!0, c, d);
      i = c.type = h(c.type);
      d = c.key.toString();
      this._keyToDef[d] = c;
      if(e = c.sorter) {
        typeof e == "string" ? e = h(e) : i && (e = i);
        if(e = g.sorter(e, d)) {
          e.key = d, this._sorters[d] = e
        }
        c.sorter = e
      }
      if(e = c.parser) {
        if(i && typeof e != "function") {
          switch(i) {
            case "boolean":
              e = f;
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
              e = b;
              break;
            case "date":
              e = a;
              break;
            default:
              e = null
          }
          c.parser = e
        }
        this._parsers[d] = e
      }
      c.inputOnCreate = !!c.inputOnCreate;
      c.hidden = !!c.hidden;
      c.tooltipEnabled = !!c.tooltipEnabled;
      c.resizable = !!c.resizable;
      c.rendererInput = !!c.rendererInput;
      c.noTitle = !!c.noTitle;
      c.noName = !!c.noName;
      c.noSearch = !!c.noSearch;
      c.nullOnCreate = !!c.nullOnCreate;
      if(i = c.validator) {
        this._validators[d] = i
      }
      c.nullOnCreate && (this._nullOnCreates[d] = !0)
    }
    return c
  };
  n.setVisible = function(a, b) {
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
  n.show = function(a) {
    return this.setVisible(a, !0)
  };
  n.hide = function(a) {
    return this.setVisible(a, !1)
  };
  n._filter = function() {
    this._filtered = this._colDefs.filter(function(a) {
      return!a.hidden
    });
    this._reidx();
    return this._filtered
  };
  n._reidx = function(a) {
    for(var a = a || 0, b = this._filtered, c = b.length, d = this._keyToIdx = {};a < c;a++) {
      d[b[a].key] = a
    }
    return d
  };
  n.get = function(a) {
    if(a == null) {
      return this._filtered
    }
    var b = this._filtered;
    if(a < 0 || a >= b.length) {
      throw Error("index out of bound, i = " + a);
    }
    return this._filtered[a]
  };
  n.checkKey = function(a, b) {
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
  n.mapKeys = function(a) {
    var b = this;
    return a.map(function(a) {
      var c = b.getByKey(a, !0);
      if(!c) {
        throw Error("column key not found! key=" + a);
      }
      return c
    })
  };
  n.getByKey = function(a, b) {
    return this.hasKey(a, b) ? this._keyToDef[a] : null
  };
  n.hasKey = function(a, b) {
    return this.checkKey(a, b) ? this._keyToDef.hasOwnProperty(a) : !1
  };
  n.length = function() {
    return this._filtered.length
  };
  n.getIdxByKey = function(a) {
    return this._keyToIdx.hasOwnProperty(a) ? this._keyToIdx[a] : -1
  };
  n.getIdx = function(a) {
    return i.isNotNull(a) && this._keyToIdx.hasOwnProperty(a.key) ? this._keyToIdx[a.key] : -1
  };
  n.sortByKey = function(a) {
    var b = this._filtered, c = this._keyToIdx = {};
    b.length = 0;
    this.grid.event.trigger("onReorderCols", [this.mapKeys(a).forEach(function(a, d) {
      a.hidden || (b.push(a), c[a.key] = d)
    })], !0);
    this.eventChangeVisible();
    return b
  };
  n.eventChangeVisible = function() {
    this.grid.event.trigger("changeVisibleColumns", [this._filtered])
  };
  n.getKeys = function() {
    return this._filtered.map(function(a) {
      return a.key
    })
  };
  g.sorter = function(a, b, e) {
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
window.console && window.console.log && window.console.log('reading javascript source "MenuBar.js"...');
jx.grid.MenuBar = {};
(function() {
  function g(a) {
    b.call(this, a);
    this.grid.menubar = this
  }
  var h = goog.getObjectByName("jx.grid"), f = goog.getObjectByName("jx.util"), b = goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.MenuBar", g);
  goog.inherits(g, b);
  g.getInstance = function(a) {
    return new g(a)
  };
  var a = g.prototype;
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
    var a = "#" + this.grid.mid + " .", b = this._options, e = [];
    e.push(a + b.classMenuBar + "{" + h._CONST._cssUnselectable + "overflow:hidden;width:100%;background:" + b.background + ";border-bottom:" + (b.borderThickness + "px " + b.border) + ";height:" + b.height + "px}");
    e.push(a + b.classIcon + "{float:left;height:" + b.iconHeight + "px;width:" + b.iconWidth + "px;border:" + b.iconBorderThickness + "px " + b.iconBorder + ";margin:" + b.iconMargin + "px 0 0 " + b.iconMargin + "px;background:" + b.iconBackground + ";border-radius:" + b.iconBorderRadius + "px;-moz-border-radius:" + b.iconBorderRadius + "px}");
    e.push(a + b.classIcon + ":hover," + a + b.classIcon + ":focus{background:" + b.iconBackgroundHover + ";border:" + b.iconBorderThickness + "px " + b.iconBorderHover + "}");
    e.push(a + b.classIcon + ":active," + a + b.classIcon + ".active{cursor:default;background:" + b.iconBackgroundActive + ";border:" + b.iconBorderThickness + "px " + b.iconBorderActive + "}");
    e.push(a + b.classIcon + ".active:focus{border:" + b.iconBorderThickness + "px " + b.iconBorderFocus + "}");
    return e.join("")
  };
  a.addIcon = function(a, b, e, i, g) {
    return $("<div class='" + this._options.classIcon + "' tabIndex='0' title='" + b + "'><div class='" + a + "' style='margin-top:" + (this._options.iconHeight - i) / 2 + "px;margin-left:" + (this._options.iconWidth - e) / 2 + "px'></div></div>").appendTo(this._menubar).click(function(a) {
      g();
      $(this).toggleClass("active");
      a.preventDefault()
    }).keydown(function(a) {
      if(a.which === f.keyMapKeydown.enter || a.which === f.keyMapKeydown.space) {
        g(), $(this).toggleClass("active"), a.preventDefault()
      }
    })
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
    this._options = h._extend({classCell:"footer-cell", background:"#F1F5FB", border:"0px solid #CCD9EA", color:"#000", fontSize:"13px", fontWeight:"normal", cellHeight:25, cellPadding:40, countTemplate:"현재 <span name='shownCount'></span> 건 / 총 <span name='totalCount'></span> 건", titleColor:"#5A6779", titleFontSize:"12px", titleFontWeight:"normal", contentColor:"#1E395B", contentFontSize:"12px", contentFontWeight:"normal", classFooter:"jgrid-footer", classTitle:"footer-title", classContent:"footer-content", 
    style:"", cellStyle:"", titleStyle:"", contentStyle:""}, a.options);
    this._sumMap = {};
    this.__init()
  }
  var h = goog.getObjectByName("jx.grid"), f = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.Footer", g);
  g.getInstance = function(a) {
    return new g(a)
  };
  var b = g.prototype;
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
    for(var a = this.grid.dataMgr.getReal(), b = this.grid.colDefMgr.get(), d = b.length, e, i, h, j, o = g._calSum, m = this._sumMap, p, q = 0;q < d;q++) {
      if(e = b[q], i = e.sumRenderer, f.isNotNull(i)) {
        if(h = e.key, e = e.name, j = o(a, h), h = m[h] = this.getNextCell(), p = h[0], f.isFunction(i)) {
          p.innerHTML = i(e, j)
        }else {
          if(f.isString(i)) {
            if(h = i.toLowerCase(), h === "krw" || i === "\\") {
              p.innerHTML = this._sumRenderer(e, f.formatNumber(j))
            }else {
              if(h === "usd" || i === "$") {
                p.innerHTML = this._sumRenderer(e, f.formatNumber(j, 2, "$ "))
              }
            }
          }else {
            p.innerHTML = this._sumRenderer(e, j)
          }
        }
      }
    }
  };
  b._updateSums = function() {
    var a = this.grid.dataMgr.getReal(), b, d = this._sumMap, e = this.grid.colDefMgr, i, h, j, o = g._calSum, m, p, q = this._options.classContent;
    for(b in d) {
      if(d.hasOwnProperty(b)) {
        if(i = e.getByKey(b), h = i.sumRenderer, j = o(a, b), m = d[b], p = m[0], f.isFunction(h)) {
          p.innerHTML = h(i.name, j)
        }else {
          if(f.isString(h)) {
            if(i = h.toLowerCase(), i === "krw" || h === "\\") {
              m.find("span." + q)[0].innerHTML = f.formatNumber(j)
            }else {
              if(i === "usd" || h === "$") {
                m.find("span." + q)[0].innerHTML = f.formatNumber(j, 2, "$ ")
              }
            }
          }else {
            m.find("span." + q)[0].innerHTML = j
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
  g._calSum = function(a, b) {
    for(var d = 0, e, f = a.length, g = 0;g < f;g++) {
      if(typeof(e = a[g][b]) === "string") {
        e = e.toFloat()
      }
      d += isNaN(e) ? 0 : e
    }
    return d
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "ColumnHeader.js"...');
jx.grid.ColumnHeader = {};
(function() {
  function g(c) {
    c.grid.log("creating new ColumnHeader instance...", a.V_INIT);
    b.call(this, c)
  }
  var h = goog.getObjectByName("jx.grid"), f = goog.getObjectByName("jx.util"), b = goog.getObjectByName("jx.grid.BaseModule"), a = goog.getObjectByName("jx.grid.Grid");
  goog.exportSymbol("jx.grid.ColumnHeader", g);
  goog.inherits(g, b);
  g.getInstance = function(a) {
    return new g(a)
  };
  var c = g.prototype;
  c._init = function(b) {
    this.grid.log("initializing ColumnHeader instance...", a.V_INIT);
    this.grid.header = this;
    this._ctnr = b.container;
    this._map = {};
    this._resizeMap = {};
    b = this._options;
    this._mask = $("<div class='" + b.classHeaderMask + "'>").prependTo(this._ctnr);
    this._head = $("<div class='" + b.classHeader + "'>").appendTo(this._mask);
    g._disableSel(this._head)
  };
  c._bindEvents = function() {
    this.grid.log("binding ColumnHeader events...", a.V_INIT);
    var b, c = this.getColumns(), f = c.length, g = 0;
    for(b = {onRenderModules:this._onRenderModules, onAfterRenderModules:this._onAfterRenderModules, mousedown:this._mousedown, mouseup:this._mouseup, dragmove:this._dragmove, onScrollViewportH:this._onScrollViewportH, onScrollViewportV:this._onScrollViewportV, onChangeSorter:this._onChangeSorter, click:this._click, onResizeCol:this._setWidthByKey};g < f;g++) {
      if(c[g].sorter) {
        b["clickHeader_" + c[g].key] = this._sort
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
    var c = "#" + this.grid.mid + " .", f = this._options, g = f.borderThickness + "px " + f.border, h = this.getColumns(), o = h.length, m = 0, p = "." + f.classHeaderMask, q = "." + f.classColHeader, l = f.scrollerLeft, l = f.scrollerLeft, k = f.height + "px", r = f.classColHeaderActive, s = {};
    s[p] = {position:"relative", overflow:"hidden", width:"100%", font:f.font, background:f.background, "border-bottom":g, _append:f.style};
    s["." + f.classHeader] = {position:"relative", overflow:"hidden", "white-space":"nowrap", cursor:"default", left:-l + "px", width:f.scrollerWidth + "px", "line-height":k};
    s[q] = {position:"relative", overflow:"hidden", "float":"left", "text-overflow":"ellipsis", "text-align":"center", height:k, left:l - this.getView().getScrollLeft() + "px", "border-right":g, _append:f.headerStyle};
    s[q + "." + f.classInteractive + ":hover, " + c + r] = {background:f.backgroundHover};
    s["." + r] = {"border-left":g};
    s[q + "." + f.classColHeaderPlaceholder] = {background:f.backgroundPlaceholder + "!important"};
    s["." + f.classSort] = {position:"absolute", height:k, right:f.sortRight + "px", width:f.sortWidth + "px", background:"url(" + f.sortBackground + ") no-repeat center transparent"};
    s["." + f.classSortAsc] = {background:"url(" + f.sortBackgroundAsc + ") no-repeat center transparent"};
    s["." + f.classSortDesc] = {background:"url(" + f.sortBackgroundDesc + ") no-repeat center transparent"};
    s["." + f.classResizeHandle] = {"z-index":10, background:f.resizeHandleBackground, cursor:"e-resize", position:"absolute", height:k, width:f.resizeHandleWidth + "px"};
    for(s["." + f.classResizeGuide] = {"z-index":10, position:"absolute", background:f.resizeBackground, width:f.resizeGuideWidth + "px"};m < o;m++) {
      h[m].headerStyle && (s[q + "#" + this.mid + "h" + h[m].key] = {_append:h[m].headerStyle})
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
    for(var b = this.getColumns(), c = b.length, f = 0, g, h = [];f < c;f++) {
      (g = b[f]).hidden || this._render(h, g, f)
    }
    this._head[0].innerHTML = h.join("");
    this.triggerGridEvent("onRenderHeadersComplete", !1, !0)
  };
  c._onAfterRenderModules = function() {
    var a = this._options;
    a.reorderEnabled && this._initReorder();
    this._initResizeHandles();
    this._resizeGuide = $("<div class='" + a.classResizeGuide + "'>").appendTo(this.getView()._mask).hide();
    this._resizeGuide[0].style.top = "0px";
    this._resizeGuide[0].style.height = "0px"
  };
  c._render = function(a, b, c) {
    var f = this._options, g = b.key, h = b.noName ? "" : b.name || g, m = this._widthPlus(), p = "onRenderHeader_" + g, q = [a];
    a.push("<div id='" + this.mid + "h" + g + "' class='" + f.classColHeader + " " + (f.reorderEnabled || b.sorter ? " " + f.classInteractive : "") + "' " + (b.noTitle ? "" : "title='" + (b.title || h) + "' ") + "style='width:" + (this.getView()._getColOuterWidth(c) - m) + "px;' colKey='" + g + "'>");
    this.triggerGridEvent(p + "_prepend", q, !0);
    a.push(h);
    this.triggerGridEvent(p + "_append", q, !0);
    b.sorter && a.push("<span class='" + f.classSort + "'></span>");
    a.push("</div>")
  };
  g._disableSel = function(a) {
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
    var c = this.get(a), f = this._options, g = c.find("." + f.classSort), h = f.classColHeaderSorted, m = f.classSortAsc, f = f.classSortDesc;
    b === 0 ? (c.removeClass(h), g.removeClass(m + " " + f)) : (c.addClass(h), b === 1 ? g.addClass(m).removeClass(f) : b === 2 && g.addClass(f).removeClass(m))
  };
  c._closest = function(a) {
    return Util$.safe$(a).closest("div." + this._options.classColHeader, this._head)
  };
  c._getDef = function(a) {
    return this.getColMgr().getByKey(a.attr("colKey"))
  };
  c._sort = function(b, c, f) {
    this.grid.log("Colheader clicked to sort. key=" + g, a.V_CLICK);
    var g = f.key, b = f.sorter;
    this.triggerGridEvent("onBeforeColSort_" + g, !1, !0);
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
    var b = this, c = this._options, f = this.getColMgr(), g = this._head, h = this.mid.length + 1, o = function(a, b) {
      for(var c = $(g).sortable("toArray"), d = c.length, e, o = 0;o < d;o++) {
        e = c[o], c[o] = e === "" ? b.item.attr("id").substring(h) : e.substring(h)
      }
      f.sortByKey(c)
    };
    g.sortable({items:"." + c.classColHeader, axis:"x", forcePlaceholderSize:!0, placeholder:c.classColHeaderPlaceholder + " " + c.classColHeader, tolerance:"pointer", start:function(a, c) {
      c.item.addClass(b._options.classColHeaderActive)
    }, stop:function(a, c) {
      c.item.removeClass(b._options.classColHeaderActive);
      b._syncResizeHandles()
    }, update:o});
    c.reorderSyncEnabled && g.sortable("option", "change", o)
  };
  c._getDx = function(a, b) {
    var c = a.clientX - this._resizeInitX, g = b.minW, h = f.ifNull(b.maxW, Number.MAX_VALUE), o = this._resizeInitWidth;
    o + c < g && (c = g - o);
    o + c > h && (c = h - o);
    return c
  };
  c._click = function(b) {
    var c = this._closest(b.target);
    if(c.length !== 0) {
      var f = this._getDef(c), g = f.key, b = [b, c, f];
      this.grid.log("Colheader clicked. key=" + g, a.V_CLICK);
      this.getEventMgr().triggerInvalid("clickHeaderValid_" + g, b) || (this.triggerGridEvent("clickHeader_" + g, b, !0), this.triggerGridEvent("clickHeader", b, !0))
    }
  };
  c._mousedown = function(b) {
    var c = this._options;
    if(f.hasTagAndClass(b.target, "DIV", c.classResizeHandle)) {
      var g = this._resizeKey = b.target.getAttribute("key");
      this.grid.log("mousedown on ColumnHeader Resize Handle. key=" + g, a.V_MOUSEDOWN);
      this._resizeInitWidth = this.get(g)[0].clientWidth;
      this._resizeInitColWidth = this.getColMgr().getByKey(g).width;
      this._resizeInitX = b.clientX;
      this._resizeHandleInitX = this._resizeMap[g][0].offsetLeft;
      this._resizeGuide[0].style.left = Math.floor(this._resizeHandleInitX + (c.resizeHandleWidth - c.resizeGuideWidth) / 2 - c.scrollerLeft) + "px";
      this._resizeGuide[0].style.height = this.getView().getInnerHeight() + "px";
      this._resizeGuide.show()
    }else {
      if(c = this._closest(b.target), c.length) {
        var h = this._getDef(c), g = h.key, b = [b, c, h];
        this.grid.log("mousedown on ColumnHeader. key=" + g, a.V_MOUSEDOWN);
        this.triggerGridEvent("mousedownHeader", b, !0);
        this.triggerGridEvent("mousedownHeader_" + g, b, !0)
      }
    }
  };
  c._dragmove = function(b) {
    var c = this._resizeKey;
    if(c != null && (b = this._getDx(b, this.getColMgr().getByKey(c)), !(Math.abs(b) < 1))) {
      this.grid.log("drag on ColumnHeader Resize Handle. key=" + c, a.V_MOUSEMOVE);
      var f = this._options;
      this.get(c)[0].style.width = this._resizeInitWidth + b + "px";
      this._moveResizeHandles(this._resizeHandleInitX + b - this._resizeMap[c][0].offsetLeft, this.getColMgr().getIdxByKey(c));
      this._resizeGuide[0].style.left = Math.floor(this._resizeHandleInitX + b + (f.resizeHandleWidth - f.resizeGuideWidth) / 2 - f.scrollerLeft) + "px";
      f.syncResize && this.getView().setWidthByKey(c, this._resizeInitColWidth + b)
    }
  };
  c._mouseup = function(b) {
    var c = this._resizeKey;
    if(c != null) {
      this.grid.log("mouseup on ColumnHeader Resize Handle. key=" + c, a.V_MOUSEUP), this._resizeGuide.hide(), this._resizeGuide[0].style.height = "0px", b = this._getDx(b, this.getColMgr().getByKey(c)), Math.abs(b) >= 1 && this.getView().setWidthByKey(c, this._resizeInitColWidth + b), delete this._resizeKey, delete this._resizeInitX, delete this._resizeHandleInitX, delete this._resizeInitWidth, delete this._resizeInitColWidth
    }
  };
  c._setWidthByKey = function(b, c) {
    this.grid.log("setting ColumnHeader width=" + c + ". key=" + b, a.V_RESIZE);
    this.get(b)[0].style.width = c + this.getView()._colWidthPlus() - this._widthPlus() + "px";
    this._syncResizeHandles(this.getColMgr().getIdxByKey(b));
    this.getView()._scroll()
  };
  c._syncResizeHandles = function(a) {
    for(var a = a || 0, b = this.getView()._getColLefts(), c = this.getColumns(), f = c.length, g = this._resizeMap, h;a < f;a++) {
      if(h = c[a].key, g.hasOwnProperty(h)) {
        g[h][0].style.left = b[a + 1] + this._resizeHandleOffset + "px"
      }
    }
  };
  c._moveResizeHandles = function(a, b) {
    for(var b = b || 0, c = this.getColumns(), f = c.length, g = this._resizeMap, h;b < f;b++) {
      if(h = c[b].key, g.hasOwnProperty(h)) {
        h = g[h][0], h.style.left = h.offsetLeft + a + "px"
      }
    }
  };
  c._onScrollViewportV = function() {
    this._resizeGuide[0].style.top = this.getView().getScrollTop() + "px"
  };
  c._initResizeHandles = function() {
    this.grid.log("initializing Colheader resize functionality...", a.V_INIT);
    for(var b = this.getColumns(), c = b.length, f = this.getView(), g = f.mid, f = f._getColLefts(), h = this._options, o = this._resizeMap, m, p = 0, q = this._resizeHandleOffset = Math.floor(h.scrollerLeft - h.resizeHandleWidth / 2), l = h.classResizeHandle, k = this._head;p < c;p++) {
      if(h = b[p], h.resizable) {
        m = h.key, o[m] = $("<div class='" + l + "' key='" + m + "' ondblclick='JGM.m.ViewportManager." + g + '._autoColWidth("' + m + "\")' style='left:" + (q + f[p + 1]) + "px' title='" + h.name + " 컬럼의 폭을 조절합니다.'>").appendTo(k)
      }
    }
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "CheckManager.js"...');
jx.grid.CheckManager = {};
(function() {
  function g(a) {
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
  var h = goog.getObjectByName("jx.grid"), f = goog.getObjectByName("jx.util"), b = goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.CheckManager", g);
  goog.inherits(g, b);
  g.getInstance = function(a) {
    return new g(a)
  };
  var a = g.prototype;
  a._init = function() {
    this._map = {};
    this.disabledmap = {};
    this._count = 0;
    this._disabled = !1;
    var a, b = h._CONST;
    a = this.getColMgr();
    a.getByKey(this._col.key) || a.addAt(this._options.colIdx, this._col);
    if(f.isNull(b._checkboxWidth)) {
      a = f.calCheckSize(), b._checkboxWidth = a.checkboxW, b._checkboxHeight = a.checkboxH, b._radioWidth = a.radioW, b._radioHeight = a.radioH
    }
  };
  a._bindEvents = function() {
    var a = this._col.key, b;
    b = {onAfterSetDatalist:this.uncheckAll, onIdChange:this._onIdChange, onIdListChange:this._onIdListChange, onRemoveDatarow:this._onRemoveDatarow, onRemoveDatalist:this._onRemoveDatalist};
    b["onRenderCell_" + a + "_prepend"] = this._onRenderCell;
    b["keydownColSel_" + a + "_" + f.keyMapKeydown.space] = this._keydownColSel;
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
    return f.toArray(this._map)
  };
  a.getDisableds = function() {
    return f.toArray(this.disabledmap)
  };
  a.toggleCheckAll = function() {
    this.isCheckedAll() ? this.uncheckAll() : this.checkAll()
  };
  a.checkAll = function() {
    this._hasMaster && g._check(this._master);
    g._check(this.getCheckboxes());
    for(var a = this.getAllData(), b = a.length, e = this.getIdKey(), f = this._map, h = 0;h < b;h++) {
      f[a[h][e]] = a[h]
    }
    this._count = b
  };
  a.uncheckAll = function() {
    this._hasMaster && g._uncheck(this._master);
    g._uncheck(this.getCheckboxes());
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
    this._add(a) && (g._check(this.getCheckbox(a)), this._updateMaster(), this.triggerGridEvent("onCheckChange", [a, !0], !0))
  };
  a.uncheck = function(a, b) {
    b || (a = this.getDataMgr().map(a));
    this._remove(a) && (g._uncheck(this.getCheckbox(a)), this._hasMaster && g._uncheck(this._master), this.triggerGridEvent("onCheckChange", [a, !1], !0))
  };
  a.disable = function(a, b) {
    var e = this.getDataMgr();
    b || (a = e.map(a));
    var e = e.getId(a), f = this.disabledmap;
    f.hasOwnProperty(e) || (f[e] = a, g.disableNode(this.getCheckbox(a)), this.triggerGridEvent("onDisableCheck", [a], !0))
  };
  a.enable = function(a, b) {
    var e = this.getDataMgr();
    b || (a = e.map(a));
    var e = e.getId(a), f = this.disabledmap;
    f.hasOwnProperty(e) && (delete f[e], g.enableNode(this.getCheckbox(a)), this.triggerGridEvent("onEnableCheck", [a], !0))
  };
  a._updateMaster = function() {
    this._hasMaster && g._setCheck(this._master, this.isCheckedAll())
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
    for(var e = [], f = [], g = 0, h = a.length, o = this.getIdKey(), m, p = this._map;g < h;g++) {
      p.hasOwnProperty((m = a[g])[o]) ? e.push(m) : f.push(m)
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
    for(var f = 0, g = a.length, h = this._map, o = this.disabledmap, m, p;f < g;f++) {
      m = a[f], p = b[f], h.hasOwnProperty(p) && (delete h[p], h[m[e]] = m), o.hasOwnProperty(p) && (delete o[p], o[m[e]] = m)
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
    this._options = h._extend({key:void 0, colDef:{key:"collapser", width:120, name:" ", noSearch:!0}, colIdx:0, urlCollapsed:this.grid._options.imageUrl + "collapsed.png", urlCollapsedHover:this.grid._options.imageUrl + "collapsed-hover.png", urlExpanded:this.grid._options.imageUrl + "expanded.png", urlExpandedHover:this.grid._options.imageUrl + "expanded-hover.png", width:6, padding:5, classCollapser:"jgrid-collapser", classCollapsed:"collapsed", classExpanded:"expanded", classIndent:"indent", 
    classMasterCollapser:"master", indentSize:12, beginCollapsed:!1, CheckManager:void 0, Tree:void 0}, a.options);
    if(this._options.CheckManager) {
      this.checkMgr = h.create("CheckManager", {grid:this.grid, options:this._options.CheckManager}), delete this._options.CheckManager, f.isNull(this._options.key) && this._options.colIdx++
    }
    this._tree = new b({list:this.grid.dataMgr.all, options:this._options.Tree})
  }
  var h = goog.getObjectByName("jx.grid"), f = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var b = goog.getObjectByName("jx.struct.Tree");
  goog.exportSymbol("jx.grid.Collapser", g);
  g.getInstance = function(a) {
    return new g(a)
  };
  var a = g.prototype;
  a.__init = function() {
    f.isNull(this._options.key) && this.grid.colDefMgr.addAt(this._options.colIdx, this._options.colDef);
    this._makeTree();
    this._filterRefresh();
    this.key = f.isNull(this._options.key) ? this._options.colDef.key : this._options.key;
    this.bindEvents()
  };
  a.bindEvents = function() {
    var a = this.key, b;
    b = {onAfterFilter:this._onAfterFilter, onCreateCss:this._onCreateCss, onDestroy:this._destroy, onAfterSetDatalist:this._onAfterSetDatalist, onAddDatarow:this._onAddDatarow, onAddDatalist:this._onAddDatalist, onUpdateDatarow:this._onUpdateDatarow, onUpdateDatalist:this._onUpdateDatalist, onRemoveDatarow:this._onRemoveDatarow, onRemoveDatalist:this._onRemoveDatalist, onRenderHeadersComplete:this._getMaster};
    b["onRenderHeader_" + a + "_prepend"] = this._onRenderHeader;
    b["clickHeaderValid_" + a] = this._clickHeaderValid;
    b["onRenderCell_" + a + "_prepend"] = this._onRenderCell;
    b["dblclickCanvas_" + a] = this._dblclickCanvas;
    b["keydownColSel_" + a + "_" + f.keyMapKeydown.space] = this._keydownColSel;
    if(f.isNotNull(this.checkMgr)) {
      b.onCheckChange = this._onCheckChange
    }
    this.grid.event.bind(b, this)
  };
  a._destroy = function() {
    h._destroy(this, {name:"Collapser", path:"collapser", module:"_tree", $:"_master", property:"checkMgr", map:"_options"})
  };
  a._onCreateCss = function() {
    var a = "#" + this.grid.mid + " .", b = this._options, e = a + this.grid.view._options.classRow + " .", g = a + b.classCollapser, h = g + "." + b.classExpanded, j = g + "." + b.classCollapsed, o = this.grid.view._getRowInnerHeight(), m = [], p = this.grid.header;
    m.push(a + b.classIndent + "{height:" + o + "px;float:left;}");
    m.push(g + "{width:" + b.width + "px;float:left;padding:0 " + b.padding + "px}");
    m.push(e + b.classCollapser + "{height:" + o + "px}");
    m.push(h + "{background:url(" + b.urlExpanded + ") no-repeat center transparent}");
    m.push(h + ":hover{background:url(" + b.urlExpandedHover + ") no-repeat center transparent}");
    m.push(j + "{background:url(" + b.urlCollapsed + ") no-repeat center transparent}");
    m.push(j + ":hover{background:url(" + b.urlCollapsedHover + ") no-repeat center transparent}");
    f.isNotNull(p) && m.push(a + p._options.classColHeader + " ." + b.classCollapser + "{height:" + p._options.height + "px}");
    return m.join("")
  };
  a._onAfterSetDatalist = function() {
    this._tree.destroy();
    this._tree = new b({list:this.grid.dataMgr.all, options:this._options.Tree});
    this._makeTree()
  };
  a._onAddDatarow = function(a) {
    a = this._tree.createNode(a);
    a._collapsed = this._options.beginCollapsed;
    a._shown = f.isNotNull(a.parent) && (a.parent === a.tree.root || a.parent._shown && !a.parent._collapsed) ? !0 : !1;
    f.isNotNull(a.parent) && a.parent.children.length === 1 && this.grid.view.rerenderCellByIdAndKey(this.grid.dataMgr.getId(a.parent.data), this.key);
    a._collapsed === !0 || a._shown === !1 ? a.traverseChildren({fn:function() {
      this._shown = !1
    }}) : a.traverseChildren({fn:function(a) {
      f.isNotNull(this.parent) && (this.parent === this.tree.root || this.parent._shown && !this.parent._collapsed) ? this._shown = !0 : (a.propagate = !1, this.traverse({fn:function() {
        this._shown = !1
      }}))
    }});
    this.grid.event.trigger("onCollapserTreeChange", !1, !0)
  };
  a._onAddDatalist = function(a) {
    for(var b = 0, e = a.length, g = this._tree, h = g.root, j = this._options.beginCollapsed, o = this.key, m = this.grid.view, p = this.grid.dataMgr, q, l = [], k;b < e;b++) {
      q = g.createNode(a[b]), q._collapsed = j, f.isNotNull(q.parent) && q.parent.children.length === 1 && l.push(q.parent.data)
    }
    if(m !== void 0) {
      b = 0;
      for(e = l.length;b < e;b++) {
        m.rerenderCellByIdAndKey(p.getId(l[b]), o)
      }
    }
    h.traverseChildren({fn:function(a) {
      k = this.parent;
      f.isNotNull(k) && (k === h || k._shown && !k._collapsed) ? this._shown = !0 : (a.propagate = !1, this.traverse({fn:function() {
        this._shown = !1
      }}))
    }});
    this.grid.event.trigger("onCollapserTreeChange", !1, !0)
  };
  a._onUpdateDatarow = function(a, b, e) {
    var g = this._tree, h = g._options.nodeKey, j = g._options.parentKey, o;
    b.hasOwnProperty(h) && (o = g.getNodeByNodeId(e[h]), g.changeNodeId(o, e[h], b[h]), this.grid.event.trigger("onCollapserTreeChange", !1, !0));
    b.hasOwnProperty(j) && (f.isNull(o) && (o = g.getNode(a)), g.changeParentId(o, e[j], b[j]), this.grid.event.trigger("onCollapserTreeChange", !1, !0))
  };
  a._onUpdateDatalist = function(a, b, e) {
    for(var b = this._tree, g = b._options.nodeKey, h = b._options.parentKey, j, o, m, p = [], q = [], l = 0, k = a.length;l < k;l++) {
      j = e[l], o = a[l], m = void 0, j.hasOwnProperty(g) && (f.isNull(m) && (m = b.getNodeByNodeId(j[g])), p.push({node:m, before:j[g], newId:o[g]})), j.hasOwnProperty(h) && (f.isNull(m) && (m = b.getNode(o)), q.push({node:m, before:j[h], newId:o[h]}))
    }
    a = p.length;
    e = q.length;
    if(a + e !== 0) {
      if(a + e > 10) {
        b.reattach()
      }else {
        for(l = 0;l < a;l++) {
          g = p[l], b.changeNodeId(g.node, g.before, g.newId)
        }
        for(l = 0;l < e;l++) {
          g = q[l], b.changeParentId(g.node, g.before, g.newId)
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
    var e = this._tree;
    if(b.length > 0) {
      var g = this.grid.dataMgr, h = a.length, j = g._idToIdx, o = g.idKey, m, p = 0, q = function(e) {
        f.isNotNull(this.parent) ? (m = this.parent.data, f.isNotNull(m) && !g.has(m) && (a.push(m), b.remove(m), j[m[o]] = -1)) : e.stop = !0
      };
      g._reidx();
      for(e.reattach();p < h;p++) {
        e.getNode(a[p]).traverse({up:!0, fn:q})
      }
      e.reattach(a);
      e.sortList(a);
      this.grid.event.trigger("onCollapserTreeChange", !1, !0)
    }else {
      e.reattach(a), this.grid.event.trigger("onCollapserTreeChange", !1, !0), this._filter(a, b)
    }
  };
  a._filter = function(a, b) {
    a.length = 0;
    this._tree.root.traverseChildren({fn:function() {
      this._shown ? a.push(this.data) : b.push(this.data)
    }})
  };
  a.toggleById = function(a) {
    if(f.isNotNull(a)) {
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
    if(f.hasTagAndClass(a.target, "DIV", this._options.classCollapser)) {
      return!1
    }
  };
  a._dblclickCanvas = function(a, b) {
    f.hasTagAndClass(a.target, "DIV", this._options.classCollapser) || this.toggleCollapse(this._tree.getNode(b.getDatarow()))
  };
  a._keydownColSel = function(a, b, e) {
    a.preventDefault();
    if(f.isNotNullAnd(b, e)) {
      var a = this._tree, e = a.getNode(e.getDatarow())._collapsed, g = this.grid.dataMgr.datalist, h, j;
      for(j in b) {
        b.hasOwnProperty(j) && j !== "length" && (h = a.getNode(g[j]), e ? this.expand(h) : this.collapse(h))
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
  a._onRenderCell = function(a, b, e, g, h) {
    a = this._tree.getNode(e);
    if(f.isNull(a)) {
      return null
    }
    e = this.grid.dataMgr.getId(e);
    b = this._options;
    h.push("<div class='" + b.classIndent + "' style='width:" + b.indentSize * a.getLevel() + "px;'></div><div ");
    a.isLeaf() ? h.push("class='" + b.classCollapser) : (h.push('onmousedown="JGM.m.Collapser.' + this.mid + ".toggleById('" + e + "');\" class='" + b.classCollapser), a._collapsed ? h.push(" " + b.classCollapsed) : h.push(" " + b.classExpanded));
    h.push("'></div>")
  };
  a.getLevel = function(a) {
    a = this._tree.getNode(a);
    return f.isNull(a) ? null : a.getLevel()
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
        for(var e = f.root.children, g = e.length, h = 0;h < g;h++) {
          if(e[h]._collapsed) {
            return
          }
        }
        this._setClass(this._master, f.root._collapsed = !1)
      }
    }
  };
  a._setClass = function(a, b) {
    if(!f.isNull(a)) {
      var e = this._options;
      b ? a.addClass(e.classCollapsed).removeClass(e.classExpanded) : a.addClass(e.classExpanded).removeClass(e.classCollapsed)
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
    var e = this._tree.getNode(a), g = this.checkMgr, n = [], j;
    b ? (e.traverseChildren({fn:function(a) {
      g.isChecked(this.data) ? a.propagate = !1 : (g._add(this.data), f.isNotNull(j = g.getCheckbox(this.data)) && n.push(j))
    }}), e.traverseParent({up:!0, fn:function(a) {
      f.isNull(this.data) || g.isChecked(this.data) ? a.stop = !0 : (g._add(this.data), f.isNotNull(j = g.getCheckbox(this.data)) && n.push(j))
    }}), h.CheckManager._check($(n)), g._updateMaster()) : (e.traverseChildren({fn:function(a) {
      g.isChecked(this.data) ? (g._remove(this.data), f.isNotNull(j = g.getCheckbox(this.data)) && n.push(j)) : a.propagate = !1
    }}), e.traverseParent({up:!0, fn:function(a) {
      if(f.isNull(this.data) || !g.isChecked(this.data)) {
        a.stop = !0
      }else {
        for(var b = 0, c = this.children, d = c.length;b < d;b++) {
          if(g.isChecked(c[b].data)) {
            a.stop = !0;
            return
          }
        }
        g._remove(this.data);
        f.isNotNull(j = g.getCheckbox(this.data)) && n.push(j)
      }
    }}), h.CheckManager._uncheck($(n)))
  };
  a._filterRefresh = function() {
    this._filter(this.grid.dataMgr.datalist, this.grid.dataMgr.failed);
    this.grid.dataMgr._finish()
  };
  a._getCollapser = function(a) {
    if(f.isNull(a)) {
      return $([])
    }
    a = f.findFirstByTagAndClass(this.grid.view.getCell(this.grid.dataMgr.getIdx(a), this.grid.colDefMgr.getIdxByKey(this.key)), "DIV", this._options.classCollapser);
    return a === void 0 ? $([]) : $(a)
  };
  a._getMaster = function() {
    this._master = $(document.getElementById(this.mid + "h"))
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "ColumnGroup.js"...');
jx.grid.ColumnGroup = {};
(function() {
  function g(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    this.grid.colGroup = this;
    this._options = h._extend({key:void 0, padColKeys:[], sumColKeys:[], prefix:"합계: ", Collapser:{indentSize:0}}, a.options);
    this._options.Collapser.key = this._options.key;
    this._parentMap = {};
    this.__init()
  }
  var h = goog.getObjectByName("jx.grid"), f = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.getObjectByName("jx.grid.Collapser");
  goog.exportSymbol("jx.grid.ColumnGroup", g);
  g.getInstance = function(a) {
    return new g(a)
  };
  var b = g.prototype;
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
      var b = this.mid, d = this.grid.dataMgr._consts._notReal, e = 0, f, g = this._options.sumColKeys, h = this._options.prefix, o = g.length;
      for(f = function(a, e, f, g, i) {
        f[d] === b && i.push(h)
      };e < o;e++) {
        a["onRenderCell_" + g[e] + "_prepend"] = f
      }
      a.onCollapserTreeChange = this._onCollapserTreeChange
    }
    this.grid.event.bind(a, this)
  };
  b._destroy = function() {
    h._destroy(this, {name:"ColumnGroup", path:"colGroup", property:"collapser", map:"_parentMap _options"})
  };
  b._processData = function(a) {
    for(var b = a.length, d = this._options.key, e = this._options.padColKeys, g = this.grid.dataMgr, h = g._consts._notReal, j = g.idKey, o = this.collapser, m = o._tree._options.nodeKey, p = o._tree._options.parentKey, q = [], l = 0;l < b;l++) {
      this._addData(a[l], d, j, h, m, p, e, q)
    }
    q.length !== 0 && (g.all.pushList(q), g.makeCompositeKeyList(q, !0), g.addListToIdMap(q), f.isNotNull(o) && o._onAddDatalist(q));
    return q
  };
  b._addData = function(a, b, d, e, f, g, h, o) {
    var m = a[b], p = this._parentMap;
    p.hasOwnProperty(m) || (b = this._makeParent(a, b, d, m, e, f, h), o.push(b), p[m] = b);
    a[f] = a[d];
    a[g] = this.mid + m
  };
  b._makeParent = function(a, b, d, e, f, g, h) {
    var o = {}, m = 0, p = h.length;
    o[f] = this.mid;
    o[g] = this.mid + e;
    o[b] = e;
    for(o[d] = (this.grid.colDefMgr.getByKey(b).name || b) + ": " + e;m < p;m++) {
      o[h[m]] = a[h[m]]
    }
    return o
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
      var e = this._options.key, b = b[e], d = d[e], f = this.mid, e = this.collapser, g = e._tree, h = g._options.parentKey, o = {}, m = {}, p = this._parentMap;
      p.hasOwnProperty(b) || this._onAddDatarow(a);
      o[h] = f + b;
      m[h] = f + d;
      e._onUpdateDatarow(a, o, m);
      a = g.getNode(p[d]);
      a.children.length === 0 && (this.grid.dataMgr.all.remove(a.data), delete p[d], e._onRemoveDatarow(a.data))
    }
  };
  b._onUpdateDatalist = function(a, b, d) {
    var e = this._options.key, f = this.mid, g = this.collapser, h = g._tree, o = h._options.parentKey, m, p = {};
    m = {};
    for(var q = [], l = [], k = [], r = 0, s = a.length;r < s;r++) {
      m = b[r], m.hasOwnProperty(e) && (p = {}, p[o] = f + m[e], q.push(p), m = {}, m[o] = f + d[r][e], l.push(m), k.push(a[r]))
    }
    if(k.length !== 0) {
      a = this._parentMap;
      b = [];
      this._processData(k);
      g._onUpdateDatalist(k, q, l);
      r = 0;
      for(s = l.length;r < s;r++) {
        q = l[r][o], a.hasOwnProperty(q) && (k = h.getNode(a[q]), k.children.length === 0 && (delete a[q], b.push(k.data)))
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
    for(var a = {}, b = this._options.sumColKeys, d = b.length, e = 0, f = this.grid.dataMgr._consts._notReal, g = this.mid, h, o, m;e < d;e++) {
      a[b[e]] = 0
    }
    this.collapser._tree.root.traverseChildren({post:!0, fn:function() {
      h = this.data;
      e = 0;
      if(h[f] === g) {
        for(;e < d;e++) {
          o = b[e], h[o] = a[o], a[o] = 0
        }
      }else {
        if(!h.hasOwnProperty(f)) {
          for(;e < d;e++) {
            if(typeof(m = h[b[e]]) === "string") {
              m = m.toFloat()
            }
            a[b[e]] += isNaN(m) ? 0 : m
          }
        }
      }
    }})
  }
})();
window.console && window.console.log && window.console.log('reading javascript source "DataCreator.js"...');
jx.grid.DataCreator = {};
(function() {
  function g(a) {
    this.mid = a.mid;
    this._ctnr = a.container;
    this.grid = a.grid;
    this.grid.creator = this;
    this._options = h._extend({background:"#dfdfdf", borderThickness:0, border:"solid #D6D6D6", inputBorder:"solid #A7A7A7", inputBorderThickness:1, inputHeight:18, inputMargin:8, nameMargin:2, font:"12px Arial,Helvetica,sans-serif", height:28, padding:3, classCreatorIcon:"creator-icon", creatorIconUrl:this.grid._options.imageUrl + "data-creator-icon.png", creatorIconWidth:13, creatorIconHeight:13, classCreator:"data-creator", classColName:"data-creator-name", inputBorderRadius:3}, a.options);
    this._inputMap = {};
    this.__init()
  }
  var h = goog.getObjectByName("jx.grid"), f = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.DataCreator", g);
  g.getInstance = function(a) {
    return new g(a)
  };
  var b = g.prototype;
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
    for(var a = [], b = this.grid.colDefMgr.getAll(), d = b.length, e, g = this._options, h = g.classCol, j = g.classColName, o = this, m = this._creator, p = this._inputMap, q = 0, l = function(a) {
      a.which === f.keyMapKeydown.enter && o._addData()
    };q < d;q++) {
      e = b[q], e.inputOnCreate === !0 && a.push("<div key='" + e.key + "' class='" + h + "'><div class='" + j + "'>" + e.name + "</div><input type='text' value='" + f.ifNull(e.defaultValue, "") + "' style='width:" + e.width + "px'/></div>")
    }
    m[0].innerHTML = a.join("") + "<button type='button' onclick='JGM.m.DataCreator." + this.mid + "._addData()'>등록</button><button type='button' onclick='JGM.m.DataCreator." + this.mid + "._reset()'>초기화</button>";
    for(q = 0;q < d;q++) {
      e = b[q], e.inputOnCreate === !0 && (p[e.key] = m.find("div[key='" + e.key + "'] input").keyup(l))
    }
    f.isNotNull(this.grid.menubar) && (this.grid.menubar.addIcon(g.classCreatorIcon, "데이터 로우를 추가합니다.", g.creatorIconWidth, g.creatorIconHeight, function() {
      m.toggle("fast")
    }), m.hide())
  };
  b._addData = function() {
    var a, b = this._inputMap, d = this.grid.colDefMgr, e = {}, f = d.getAll(), g = f.length, h = 0;
    for(a in b) {
      b.hasOwnProperty(a) && d.getByKey(a)
    }
    for(;h < g;h++) {
      d = f[h], a = d.key, b.hasOwnProperty(a) ? e[a] = b[a][0].value : d.defaultValue !== void 0 && (e[a] = d.defaultValue)
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
window.console && window.console.log && window.console.log('reading javascript source "SearchManager.js"...');
jx.grid.SearchManager = {};
(function() {
  function g(a) {
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
  var h = goog.getObjectByName("jx.grid"), f = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.SearchManager", g);
  var b = g.prototype;
  b._onCreateCss = function() {
    var a = "#" + this.grid.mid + " .", b = this._options, c = b.borderThickness + "px " + b.border, d = "border-radius:" + b.tagsBorderRadius + "px;-moz-border-radius:" + b.tagsBorderRadius + "px", e = b.advButtonBorderThickness + "px " + b.advButtonBorder, f = b.advButtonBorderThickness + "px " + b.advButtonBorderHover, g = b.advButtonBorderThickness + "px " + b.advButtonBorderActive, i = b.advButtonBorderThickness + "px " + b.advButtonBorderOpened, j = b.tagsHeight - 2 * b.tagsPadding, k = j - 
    2 * b.advButtonBorderThickness, l = j - 2 * b.tagBorderThickness, m = a + b.classMask, o = a + b.classSearchbar, p = a + b.classAdvButton, q = a + b.classRemoveTag, n = [];
    n.push(m + "{" + h._CONST._cssUnselectable + "overflow:hidden;width:100%;background:" + b.background + "}");
    n.push(m + " button{margin:0;padding:0 3px}");
    n.push(m + " input{border:" + b.inputBorder + ";padding:" + b.inputPadding + "}");
    n.push(o + "{text-align:" + b.searchbarAlign + ";border-bottom:" + c + "}");
    n.push(o + " input{width:" + b.searchbarWidth + ";margin:" + b.searchbarMargin + "px 0;height:" + b.searchbarHeight + "px;" + d + "}");
    n.push(a + b.classTagbar + "{cursor:default;height:" + (b.tagsHeight - b.tagsPadding) + "px;padding:" + b.tagsPadding + "px 0 0 " + b.tagsPadding + "px;border-bottom:" + c + "}");
    n.push(p + "{float:left;margin-right:" + b.tagsPadding + "px;background:" + b.advButtonBg + ";border:" + e + ";padding:0 " + b.advButtonPadding + "px;" + d + "}");
    n.push(p + ":hover{background:" + b.advButtonBgHover + ";border:" + f + "}");
    n.push(p + ".opened{background:" + b.advButtonBgOpened + ";border:" + i + "}");
    n.push(p + ":active{background:" + b.advButtonBgActive + ";border:" + g + "}");
    n.push(a + b.classAdvButtonName + "{float:left;color:" + b.advButtonColor + ";font:" + b.advButtonFont + ";line-height:" + k + "px}");
    n.push(a + b.classAdvButtonIcon + "{float:left;height:" + k + "px;margin-left:" + b.advButtonIconMargin + "px;background:url(" + b.advButtonIconUrl + ") no-repeat center;width:" + b.advButtonIconWidth + "px}");
    n.push(p + ".opened ." + b.classAdvButtonIcon + "{background:url(" + b.advButtonIconCloseUrl + ") no-repeat center}");
    n.push(a + b.classTag + "{float:left;border:" + b.tagBorderThickness + "px " + b.tagBorder + ";margin:0 " + b.tagsPadding + "px " + b.tagsPadding + "px 0;padding:0 " + b.tagPadding + "px;background:" + b.tagBackground + ";" + d + "}");
    n.push(a + b.classTagName + "{float:left;color:" + b.tagColor + ";font:" + b.tagFont + ";line-height:" + l + "px}");
    n.push(q + "{float:left;margin-left:" + b.tagPadding + "px;background:url(" + b.tagRemoveIconUrl + ") no-repeat center;width:" + b.tagRemoveIconWidth + "px;height:" + l + "px}");
    n.push(q + ":hover{background:url(" + b.tagRemoveIconHoverUrl + ") no-repeat center}");
    n.push(q + ":active{background:url(" + b.tagRemoveIconActiveUrl + ") no-repeat center}");
    n.push(a + b.classClearTags + "{height:" + j + "px}");
    n.push(a + b.classAdvanced + "{cursor:default;font:" + b.advFont + ";border-bottom:" + c + "}");
    n.push(a + b.classOptionCol + "{display:inline-block;vertical-align:top}");
    n.push(a + b.classOptionCol + " input{width:" + b.advInputWidth + "px;margin-right:2px;" + d + "}");
    n.push(a + b.classSearchIcon + "{background:url(" + b.searchIconUrl + ") no-repeat center;width:" + b.searchIconWidth + "px;height:" + b.searchIconHeight + "px}");
    return n.join("")
  };
  g.getInstance = function(a) {
    return new g(a)
  };
  b.__init = function() {
    var a = this._options, b = this, c, d, e;
    c = this._mask = $("<div class='" + a.classMask + "'>").prependTo(this._ctnr);
    this._search = $("<div class='" + a.classSearchbar + "'><input type='text'/></div>").appendTo(c);
    this._masterInput = this._search.children(":eq(0)").keyup(function(a) {
      a.which === f.keyMapKeydown.enter ? b._parse($(this)[0].value) : a.which === f.keyMapKeydown.esc && b._removeAllOptions()
    });
    d = this._hasFilter = this.grid.colDefMgr.get().some(function(a) {
      return f.isNotNull(a.filter)
    });
    e = this._tag = $("<div class='" + a.classTagbar + "'>" + (d ? "<div class='" + a.classAdvButton + "'><div class='" + a.classAdvButtonName + "'>추가 옵션</div><div class='" + a.classAdvButtonIcon + "'></div></div>" : "") + "<button type='button' class='" + a.classClearTags + "' onclick='JGM.m.SearchManager." + this.mid + "._removeAllOptions()'>모든 필터 제거</button></div>").appendTo(c);
    if(d) {
      var g = this._adv = $("<div class='" + a.classAdvanced + "'>").appendTo(c).hide().keyup(function(a) {
        if(a.which === f.keyMapKeydown.enter) {
          var c = a.target.getAttribute("key");
          b._registerOption(c, b._keyToName[c], a.target.getAttribute("tag"), a.target.value);
          a.target.value = ""
        }
      });
      this._advButton = e.children(":eq(0)").click(function() {
        $(this).toggleClass("opened");
        g.toggle("fast")
      })
    }
    this.grid.event.bind({onRenderModules:this._onRenderModules, onCreateCss:this._onCreateCss, onFilter:this._onFilter, onDestroy:this._destroy, onAfterRenderModules:this._onAfterRenderModules}, this)
  };
  b._onRenderModules = function() {
    var a = [], b = this._options, c = this._mask;
    if(this._hasFilter) {
      for(var d = this.grid.colDefMgr.get(), e = d.length, g = b.keyMap, h = this._nameMap, i = this._keyToName, j, k, l, m = 0;m < e;m++) {
        if(j = d[m], f.isNotNull(j.filter)) {
          l = j.key, k = f.isNull(g) || !g.hasOwnProperty(l) ? j.name || l : g[l], h[k] = l, i[l] = k, a.push("<div class='" + b.classOptionCol + "'>"), this._registerFilter(l, k, j.name, j.filter, a), a.push("</div>")
        }
      }
      this._adv[0].innerHTML = a.join("")
    }
    f.isNotNull(this.grid.menubar) && (this.grid.menubar.addIcon(b.classSearchIcon, "데이터 검색을 합니다.", b.searchIconWidth, b.searchIconHeight, function() {
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
    if(!(this._global.length === 0 && f.isEmptyObj(this._codeMap))) {
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
            if(!f.isNull(q = h[s[c]])) {
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
            a.charAt(0) === "@" ? (a = a.substring(1), l.hasOwnProperty(a) ? (f.isNotNullAnd(b, c, d, e) && this._registerOption(b, c, d, e, !0) && (j = !0), b = l[a], c = a, e = d = void 0, i = 0) : f.isNull(b) ? k.push(a) : e += " " + a) : f.isNull(b) ? k.push(a) : e += " " + a
        }
      }
    }
    f.isNotNullAnd(b, c, d, e) && this._registerOption(b, c, d, e, !0) && (j = !0);
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
  b._registerOption = function(a, b, c, d, e) {
    var h = this._filterMap, i, j = this._codeMap;
    if(h.hasOwnProperty(a) && (i = h[a]).hasOwnProperty(c)) {
      h = i[c];
      if(f.isNull(d)) {
        var k = h.input, d = $.trim(k.val());
        k.val("")
      }else {
        d = $.trim(d)
      }
      if(d.length === 0) {
        return!1
      }
      f.isNotNull(i.parser) && (d = i.parser(d));
      if(j.hasOwnProperty(a + "@T" + c + "@B" + d)) {
        return!1
      }
      if(f.isNotNull(i.validator) && !i.validator(d)) {
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
          l.hasOwnProperty(o) && (p = l[o], m = f.isNotNull(q.parser) ? q.parser(o) : o, g._checkDisable(h.type, p.option.type, i, d, m) && (delete j[a + "@T" + p.option.tag + "@B" + m], p.tag.remove(), delete p.tag, delete p.option, delete p.fn, delete l[o]))
        }
      }
    }
    j[a + "@T" + c + "@B" + d] = !0;
    this._createTag(a, h, d, b);
    e || (this._syncMasterInput(), this.grid.dataMgr.refresh());
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
  var a = g.CONST = {lt:0, lte:1, eq:2, neq:3, gt:4, gte:5, and:6, or:7, T:8, F:9}, b = a.lt, c = a.gt, d = a.eq, e = a.neq, i = a.and, n = a.or, j = a.T, a = a.F, o = g._comparator = {}, m = o[b] = function(a, b) {
    return a <= b
  }, p = o[c] = function(a, b) {
    return a >= b
  }, q = o[d] = function(a, b) {
    return a === b
  }, j = o[j] = function() {
    return!0
  }, l = g._disableMap = {}, k = l[b] = {}, r = l[c] = {}, s = l[d] = {}, l = l[e] = {};
  o[a] = function() {
    return!1
  };
  k[b] = {};
  k[b][i] = j;
  k[b][n] = j;
  k[c] = {};
  k[c][i] = m;
  k[c][n] = p;
  k[d] = {};
  k[d][i] = j;
  k[d][n] = p;
  k[e] = {};
  k[e][i] = m;
  k[e][n] = j;
  r[b] = {};
  r[b][i] = p;
  r[b][n] = m;
  r[c] = {};
  r[c][i] = j;
  r[c][n] = j;
  r[d] = {};
  r[d][i] = j;
  r[d][n] = m;
  r[e] = {};
  r[e][i] = p;
  r[e][n] = j;
  s[b] = {};
  s[b][i] = j;
  s[b][n] = m;
  s[c] = {};
  s[c][i] = j;
  s[c][n] = p;
  s[d] = {};
  s[d][i] = j;
  s[d][n] = q;
  s[e] = {};
  s[e][i] = j;
  s[e][n] = j;
  l[b] = {};
  l[b][i] = p;
  l[b][n] = j;
  l[c] = {};
  l[c][i] = m;
  l[c][n] = j;
  l[d] = {};
  l[d][i] = j;
  l[d][n] = j;
  l[e] = {};
  l[e][i] = q;
  l[e][n] = j;
  g._checkDisable = function(a, b, c, d, e) {
    try {
      return this._disableMap[a][b][c](d, e)
    }catch(f) {
      return!1
    }
  };
  g._numberFilter = [{name:"gt", tag:">", type:c, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 큰"
  }, fn:function(a) {
    f.isString(a) && (a = a.toFloat());
    return function(b) {
      return b > a
    }
  }}, {name:"gte", tag:">=", type:c, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 크거나 같은"
  }, fn:function(a) {
    f.isString(a) && (a = a.toFloat());
    return function(b) {
      return b >= a
    }
  }}, {name:"lt", tag:"<", type:b, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 작은"
  }, fn:function(a) {
    f.isString(a) && (a = a.toFloat());
    return function(b) {
      return b < a
    }
  }}, {name:"lte", tag:"<=", type:b, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 작거나 같은"
  }, fn:function(a) {
    f.isString(a) && (a = a.toFloat());
    return function(b) {
      return b <= a
    }
  }}, {name:"eq", tag:"=", type:d, comment:function(a, b) {
    return a + " 이(가) " + b + "인"
  }, fn:function(a) {
    f.isString(a) && (a = a.toFloat());
    return function(b) {
      return b === a
    }
  }}, {name:"neq", tag:"!=", type:e, comment:function(a, b) {
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
  g._stringFilter = [{name:"to", tag:"<=", type:b, comment:function(a, b) {
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
  }}, {name:"notEquals", tag:"!=", type:e, comment:function(a, b) {
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
