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

(function(){var array_extension = {};
(function() {
  var f = Array.prototype;
  if(!f.indexOf) {
    f.indexOf = function(f) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var d = Object(this), b = d.length >>> 0;
      if(b === 0) {
        return-1
      }
      var a = 0;
      arguments.length > 0 && (a = Number(arguments[1]), a !== a ? a = 0 : a !== 0 && a !== 1 / 0 && a !== -(1 / 0) && (a = (a > 0 || -1) * Math.floor(Math.abs(a))));
      if(a >= b) {
        return-1
      }
      for(a = a >= 0 ? a : Math.max(b - Math.abs(a), 0);a < b;a++) {
        if(a in d && d[a] === f) {
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
      var d = Object(this), b = d.length >>> 0;
      if(b === 0) {
        return-1
      }
      var a = b;
      arguments.length > 1 && (a = Number(arguments[1]), a !== a ? a = 0 : a !== 0 && a !== 1 / 0 && a !== -(1 / 0) && (a = (a > 0 || -1) * Math.floor(Math.abs(a))));
      for(b = a >= 0 ? Math.min(a, b - 1) : b - Math.abs(a);b >= 0;b--) {
        if(b in d && d[b] === f) {
          return b
        }
      }
      return-1
    }
  }
  if(!f.filter) {
    f.filter = function(f, d) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var b = Object(this), a = b.length >>> 0;
      if(typeof f !== "function") {
        throw new TypeError;
      }
      for(var c = [], e = 0;e < a;e++) {
        if(e in b) {
          var i = b[e];
          f.call(d, i, e, b) && c.push(i)
        }
      }
      return c
    }
  }
  if(!f.forEach) {
    f.forEach = function(f, d) {
      var b, a = Object(this), c = a.length >>> 0, e = 0;
      if(!f || !f.call) {
        throw new TypeError;
      }
      for(d && (b = d);e < c;) {
        var i = String(e);
        a.hasOwnProperty(i) && (i = a[i], f.call(b, i, e, a));
        e++
      }
    }
  }
  if(!f.every) {
    f.every = function(f, d) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var b = Object(this), a = b.length >>> 0;
      if(typeof f !== "function") {
        throw new TypeError;
      }
      for(var c = 0;c < a;c++) {
        if(c in b && !f.call(d, b[c], c, b)) {
          return!1
        }
      }
      return!0
    }
  }
  if(!f.map) {
    f.map = function(f, d) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var b = Object(this), a = b.length >>> 0;
      if(typeof f !== "function") {
        throw new TypeError;
      }
      for(var c = Array(a), e = 0;e < a;e++) {
        e in b && (c[e] = f.call(d, b[e], e, b))
      }
      return c
    }
  }
  if(!f.some) {
    f.some = function(f, d) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var b = Object(this), a = b.length >>> 0;
      if(typeof f !== "function") {
        throw new TypeError;
      }
      for(var c = 0;c < a;c++) {
        if(c in b && f.call(d, b[c], c, b)) {
          return!0
        }
      }
      return!1
    }
  }
  if(!f.reduce) {
    f.reduce = function(f) {
      var d, b = this.length, a;
      if(typeof f !== "function") {
        throw new TypeError("First argument is not callable");
      }
      if((b == 0 || b === null) && arguments.length <= 1) {
        throw new TypeError("Array length is 0 and no second argument");
      }
      arguments.length <= 1 ? (a = this[0], d = 1) : a = arguments[1];
      for(d = d || 0;d < b;++d) {
        d in this && (a = f.call(void 0, a, this[d], d, this))
      }
      return a
    }
  }
  if(!f.reduceRight) {
    f.reduceRight = function(f) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var d = Object(this), b = d.length >>> 0;
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
        b in d && (a = f.call(void 0, a, d[b], b, d)), b--
      }
      return a
    }
  }
})();
var engine_extension = {};
(function() {
  var f = Number.prototype, g = String.prototype, d = Array.prototype;
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
      for(var a, c = 0, e = 0, i = b.length, l = 0, j = !1;l < i;l++) {
        if(a = b.charAt(l), a === ".") {
          if(++c === 2) {
            j = !0;
            break
          }
        }else {
          if(a === "-" && ++e === 2) {
            j = !0;
            break
          }
        }
      }
      return j === !0 && (b = b.replace(/[\.\-]/g, "")).length === 0 ? NaN : /^-*0*\./.test(b) || (b = b.replace(/^-0+/, "-")).length === 0 || (b = b.replace(/^0+/, "")).length === 0 ? 0 : parseInt(b, 10)
    }
  }
  if(!g.toFloat) {
    g.toFloat = function() {
      var b;
      if((b = this.replace(/[^-\d\.]/g, "")).length === 0) {
        return NaN
      }
      for(var a = 0, c = b.length, e, i = 0, l = 0;a < c;a++) {
        if(e = b.charAt(a), e === ".") {
          if(i !== 0) {
            return NaN
          }else {
            i++
          }
        }else {
          if(e === "-") {
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
  if(!d.remove) {
    d.remove = function(b) {
      if(this.length === 0) {
        return-1
      }
      b = this.indexOf(b);
      b !== -1 && this.splice(b, 1);
      return b
    }
  }
  if(!d.removeAll) {
    d.removeAll = function(b) {
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
  if(!d.removeList) {
    d.removeList = function(b) {
      if(this.length === 0 || b.length === 0) {
        return this
      }
      for(var a = b.length, c = 0, e;c < a;c++) {
        (e = this.indexOf(b[c])) !== -1 && this.splice(e, 1)
      }
      return this
    }
  }
  if(!d.removeAt) {
    d.removeAt = function(b) {
      if(this.length !== 0 && (b < 0 && (b = this.length + b), b < 0 && (b = 0), this.hasOwnProperty(b) && b < this.length)) {
        return this.splice(b, 1)[0]
      }
    }
  }
  if(!d.addAt) {
    d.addAt = function(b, a) {
      this.splice(b, 0, a);
      return a
    }
  }
  if(!d.pushList) {
    d.pushList = function(b) {
      return b.length === 0 ? this.length : d.push.apply(this, b)
    }
  }
  if(!d.pushListAt) {
    d.pushListAt = function(b, a) {
      if(a.length === 0) {
        return this.length
      }
      var c = [b, 0];
      d.push.apply(c, a);
      d.splice.apply(this, c);
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
goog.exportSymbol_ = function(f, g, d) {
  f = f.split(".");
  d = d || goog.global;
  !(f[0] in d) && d.execScript && d.execScript("var " + f[0]);
  for(var b;f.length && (b = f.shift());) {
    !f.length && goog.isDef(g) ? d[b] = g : d = d[b] ? d[b] : d[b] = {}
  }
};
goog.getObjectByName = function(f, g) {
  for(var d = f.split("."), b = g || goog.global, a;a = d.shift();) {
    if(goog.isDefAndNotNull(b[a])) {
      b = b[a]
    }else {
      return null
    }
  }
  return b
};
goog.globalize = function(f, g) {
  var d = g || goog.global, b;
  for(b in f) {
    d[b] = f[b]
  }
};
goog.addDependency = function(f, g, d) {
  if(!COMPILED) {
    for(var b, f = f.replace(/\\/g, "/"), a = goog.dependencies_, c = 0;b = g[c];c++) {
      a.nameToPath[b] = f, f in a.pathToNames || (a.pathToNames[f] = {}), a.pathToNames[f][b] = !0
    }
    for(b = 0;g = d[b];b++) {
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
          var d = f[g].src, b = d.lastIndexOf("?"), b = b == -1 ? d.length : b;
          if(d.substr(b - 7, 7) == "base.js") {
            goog.basePath = d.substr(0, b - 7);
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
    function f(c) {
      if(!(c in b.written)) {
        if(!(c in b.visited) && (b.visited[c] = !0, c in b.requires)) {
          for(var e in b.requires[c]) {
            if(!goog.isProvided_(e)) {
              if(e in b.nameToPath) {
                f(b.nameToPath[e])
              }else {
                throw Error("Undefined nameToPath for " + e);
              }
            }
          }
        }
        c in d || (d[c] = !0, g.push(c))
      }
    }
    var g = [], d = {}, b = goog.dependencies_, a;
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
      var d = Object.prototype.toString.call(f);
      if(d == "[object Window]") {
        return"object"
      }
      if(d == "[object Array]" || typeof f.length == "number" && typeof f.splice != "undefined" && typeof f.propertyIsEnumerable != "undefined" && !f.propertyIsEnumerable("splice")) {
        return"array"
      }
      if(d == "[object Function]" || typeof f.call != "undefined" && typeof f.propertyIsEnumerable != "undefined" && !f.propertyIsEnumerable("call")) {
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
    for(var d in f) {
      if(d == g && Object.prototype.hasOwnProperty.call(f, g)) {
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
    var g = g == "array" ? [] : {}, d;
    for(d in f) {
      g[d] = goog.cloneObject(f[d])
    }
    return g
  }
  return f
};
goog.bindNative_ = function(f, g, d) {
  return f.call.apply(f.bind, arguments)
};
goog.bindJs_ = function(f, g, d) {
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
goog.bind = function(f, g, d) {
  goog.bind = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? goog.bindNative_ : goog.bindJs_;
  return goog.bind.apply(null, arguments)
};
goog.partial = function(f, g) {
  var d = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, d);
    return f.apply(this, b)
  }
};
goog.mixin = function(f, g) {
  for(var d in g) {
    f[d] = g[d]
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
        var g = goog.global.document, d = g.createElement("script");
        d.type = "text/javascript";
        d.defer = !1;
        d.appendChild(g.createTextNode(f));
        g.body.appendChild(d);
        g.body.removeChild(d)
      }
    }else {
      throw Error("goog.globalEval not available");
    }
  }
};
goog.evalWorksForGlobals_ = null;
goog.getCssName = function(f, g) {
  var d = function(a) {
    return goog.cssNameMapping_[a] || a
  }, b;
  b = goog.cssNameMapping_ ? goog.cssNameMappingStyle_ == "BY_WHOLE" ? d : function(a) {
    for(var a = a.split("-"), c = [], e = 0;e < a.length;e++) {
      c.push(d(a[e]))
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
  var d = g || {}, b;
  for(b in d) {
    var a = ("" + d[b]).replace(/\$/g, "$$$$"), f = f.replace(RegExp("\\{\\$" + b + "\\}", "gi"), a)
  }
  return f
};
goog.exportSymbol = function(f, g, d) {
  goog.exportSymbol_(f, g, d)
};
goog.exportProperty = function(f, g, d) {
  f[g] = d
};
goog.inherits = function(f, g) {
  function d() {
  }
  d.prototype = g.prototype;
  f.superClass_ = g.prototype;
  f.prototype = new d;
  f.prototype.constructor = f
};
goog.base = function(f, g, d) {
  var b = arguments.callee.caller;
  if(b.superClass_) {
    return b.superClass_.constructor.apply(f, Array.prototype.slice.call(arguments, 1))
  }
  for(var a = Array.prototype.slice.call(arguments, 2), c = !1, e = f.constructor;e;e = e.superClass_ && e.superClass_.constructor) {
    if(e.prototype[g] === b) {
      c = !0
    }else {
      if(c) {
        return e.prototype[g].apply(f, a)
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
var jx = {util:{}}, Util = {}, echo = {};
(function() {
  var f = window.console, g = [], d;
  d = f && f.log ? function(b) {
    for(var a = 0, c = arguments.length;a < c;a++) {
      f.log(arguments[a])
    }
  } : function(b) {
    g.push.apply(g, arguments)
  };
  goog.exportSymbol("jx.util", Util);
  goog.exportSymbol("Util", Util);
  goog.exportSymbol("echo", d);
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
  Util.split = function(b, a, c, e) {
    if(typeof b !== "string") {
      return[]
    }
    a = a === void 0 ? /\s+/ : a;
    c = c === void 0 ? function(e) {
      return!!e
    } : c;
    e = e === void 0 ? function(e) {
      return $.trim(e)
    } : e;
    b = b.split(a);
    e && (b = b.map(e));
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
      for(var a = [], c = 0, e = b.length;c < e;c++) {
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
      for(var e = [], i = b.length, l = 0, c = c !== void 0 ? c - 1 : void 0;l < i;l++) {
        l in b && (e[l] = Util.clone(b[l], a, c))
      }
      return e
    }
    e = {};
    i = Util.isEmptyObj(a);
    if(c === 1) {
      if(i) {
        for(l in b) {
          b.hasOwnProperty(l) && (e[l] = b[l])
        }
      }else {
        for(l in a) {
          a.hasOwnProperty(l) && b.hasOwnProperty(l) && (e[l] = b[l])
        }
      }
    }else {
      if(c = c !== void 0 ? c - 1 : void 0, i) {
        for(l in b) {
          b.hasOwnProperty(l) && (e[l] = Util.clone(b[l], void 0, c))
        }
      }else {
        for(l in a) {
          a.hasOwnProperty(l) && b.hasOwnProperty(l) && (e[l] = Util.clone(b[l], void 0, c))
        }
      }
    }
    return e
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
  Util.formatNumber = function(b, a, c, e, i) {
    var c = c === void 0 ? "&#8361; " : c, a = isNaN(a) ? 0 : a, e = e === void 0 ? "." : e, i = i === void 0 ? "," : i, l = b < 0 ? "-" : "", j = parseInt(b = Math.abs(+b || 0).toFixed(a), 10) + "", h = j.length, h = h > 3 ? h % 3 : 0;
    return c + l + (h ? j.substr(0, h) + i : "") + j.substr(h).replace(/(\d{3})(?=\d)/g, "$1" + i) + (a ? e + Math.abs(b - j).toFixed(a).slice(2) : "")
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
      for(var c = b.classList ? b.classList : Util.split(b.className), e = 0, i = c.length;e < i;e++) {
        if(c[e] === a) {
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
        for(var b = b.classList ? b.classList : Util.split(b.className), a = 0, e = b.length;a < e;a++) {
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
  Util.closestWithTag = function(b, a, c, e) {
    if(Util.hasTagAndClass(b, a, c)) {
      return b
    }
    for(b = b.parentNode;Util.isNotNull(b) && b !== e;b = b.parentNode) {
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
      for(var c = 0, e = b.childNodes, i = e.length, l;c < i;c++) {
        if(Util.isNotNull(e[c]) && (l = Util.findFirstByClass(e[c], a)) !== void 0) {
          return l
        }
      }
    }
  };
  Util.findFirstByTagAndClass = function(b, a, c) {
    if(b != null) {
      if(Util.hasTagAndClass(b, a, c)) {
        return b
      }
      for(var e = 0, b = b.childNodes, i = b.length, l;e < i;e++) {
        if(Util.isNotNull(b[e]) && (l = Util.findFirstByTagAndClass(b[e], a, c)) !== void 0) {
          return l
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
    for(var e = 0, b = b.childNodes, i = b.length;e < i;e++) {
      Util.isNotNull(b[e]) && Util.findByClass(b[e], a, c)
    }
    return c
  };
  Util.findByTagAndClass = function(b, a, c, e) {
    e === void 0 && (e = []);
    if(b == null) {
      return e
    }
    Util.hasTagAndClass(b, a, c) && e.push(b);
    for(var i = 0, b = b.childNodes, l = b.length;i < l;i++) {
      Util.isNotNull(b[i]) && Util.findByTagAndClass(b[i], a, c, e)
    }
    return e
  };
  Util.getHead = function() {
    return document.head ? document.head : document.getElementsByTagName("head")[0]
  };
  Util.appendTag = function(b, a) {
    return b.appendChild(document.createElement(a))
  };
  Util.appendHTML = function(b, a) {
    var c = document.createElement("div"), e, i = 0, l = [];
    c.innerHTML = a;
    for(e = c.childNodes.length;i < e;i++) {
      l.push(b.appendChild(c.firstChild))
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
    for(var c = 0, e = b.length;c < e;c++) {
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
    var e = c.length, i = c[0];
    if(e === 1) {
      return i === "array" ? Util.areEqualArrays(b, a) : Util.areEqualObjects(b, a)
    }
    if(e > 1) {
      c = c.slice(1);
      e = 0;
      if(i === "array") {
        if(b.length !== a.length) {
          return!1
        }
        for(i = b.length;e < i;e++) {
          if(!a.hasOwnProperty(e) || !Util.areEqualComplex(b[e], a[e], c)) {
            return!1
          }
        }
      }else {
        for(e in b) {
          if(b.hasOwnProperty(e) && (!a.hasOwnProperty(e) || !Util.areEqualComplex(b[e], a[e], c))) {
            return!1
          }
        }
        for(e in a) {
          if(a.hasOwnProperty(e) && (!b.hasOwnProperty(e) || !Util.areEqualComplex(b[e], a[e], c))) {
            return!1
          }
        }
      }
      return!0
    }
  };
  Util.typeCheck = function(b, a, c, e, i) {
    if(c && a === void 0 || e && a === null) {
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
    if(i) {
      return!1
    }
    throw new TypeError("object is not a " + b + ", but is a " + typeof a);
  };
  Util.sprint = function(b, a, c, e) {
    Util.typeCheck("string", b);
    Util.typeCheck("object", a);
    Util.typeCheck("string", c, !0);
    Util.typeCheck("string", e, !0);
    var i;
    c === void 0 && (c = "%");
    e === void 0 && (e = "%");
    for(i in a) {
      a.hasOwnProperty(i) && (b = b.replace(RegExp(c + i + e, "gm"), a[i]))
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
    var c, e = [];
    for(c in a) {
      a.hasOwnProperty(c) && e.push(Util.escapeRegExp(c))
    }
    return b.replace(RegExp("(" + e.join("|") + ")", "gm"), function(e) {
      return a[e]
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
    for(var a = {}, c = 0, e;c < b.length;c++) {
      if(e = b[c].toLowerCase(), e === "number") {
        for(e = 48;e <= 57;e++) {
          a[e] = !0
        }
        for(e = 96;e <= 105;e++) {
          a[e] = !0
        }
      }else {
        if(e === "alphabet") {
          for(e = 65;e <= 90;e++) {
            a[e] = !0
          }
        }else {
          if(e === "arrow") {
            for(e = 37;e <= 40;e++) {
              a[e] = !0
            }
          }else {
            e.length > 1 && (e = e.replace(/\s/g, "")), e.length >= 3 && (e = e.replace(/numpad|num/g, "n").replace(/korean|kor/g, "kr")), a[Util.keyMapKeydown[e]] = !0
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
    if(d) {
      if(arguments.length === 1) {
        d(arguments[0])
      }else {
        for(var a = 0, c = arguments.length;a < c;a++) {
          d(arguments[a])
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
var Tracer = {};
(function() {
  function f() {
    this.stack = "";
    this.timers = {}
  }
  var g = goog.getObjectByName("jx.util");
  goog.exportSymbol("Tracer", f);
  var d = f.prototype;
  d.print = function(b, a, c) {
    b === void 0 && (b = "");
    a === void 0 && (a = "timer");
    c === void 0 && (c = !0);
    var e = this.timers[a], i = (new Date).getTime(), e = g.isNull(e) ? 0 : i - e;
    g.print((this.stack.length > 0 ? this.stack + " :: " : "") + b + ", Time elapsed since last update: " + e + "ms");
    c && (this.timers[a] = i)
  };
  d.addStack = function(b) {
    this.stack = this.stack + " > " + b
  };
  d.removeStack = function() {
    this.stack = this.stack.substring(0, this.stack.lastIndexOf(" > "))
  };
  d.clearStack = function() {
    this.stack = ""
  }
})();
var TimeWatch = {};
(function() {
  function f(d) {
    var b = this.laps = [];
    this._stopped = !1;
    b.push(d || null, (new Date).getTime())
  }
  goog.exportSymbol("TimeWatch", f);
  var g = f.prototype;
  g.lap = function(d) {
    if(this._stopped) {
      throw Error("TimeWatch was stopped, thus cannot lap. Please reset!");
    }
    this.laps.push(d || null, (new Date).getTime())
  };
  g.stop = function(d) {
    this._stopped = !0;
    this.laps.push(d || null, (new Date).getTime())
  };
  g.reset = function(d) {
    var b = this.laps;
    b.length = 0;
    this._stopped = !1;
    b.push(d || null, (new Date).getTime())
  };
  g.toString = function() {
    var d = this.laps, b = d.length, a = 2, c = b - (this._stopped ? 2 : 0), e = d[0], i = d[1], l = i, b = b > 2 ? [] : null, j = 0, h = "TimeWatch\n";
    for(h += "start" + (e ? ": " + e : "") + " @" + i + "\n";a < c;a += 2) {
      e = (e = d[a]) ? ": " + e : "", i = d[a + 1], b.push(l = i - l), j += l, h += "lap " + a / 2 + e + " @" + i + " +" + l + "ms\n", l = i
    }
    c >= 2 && this._stopped && (e = (e = d[c]) ? ": " + e : "", i = d[c + 1], b.push(l = i - l), j += l, h += "stop" + e + " @" + i + " +" + l + "ms\n");
    if(b) {
      var d = b.length, f = j / d, k = 0;
      h += "total number of laps: " + d + "\n";
      h += "total elapsed time: " + j + "ms\n";
      h += "average lap time: " + f.toFixed(2) + "ms\n";
      b.forEach(function(e) {
        k += (e - f) * (e - f)
      });
      k = Math.sqrt(k / d);
      h += "standard deviation: " + k.toFixed(2) + "ms\n"
    }
    return h
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
    var g, d, b, a;
    if(this.length <= 1) {
      return g = this.getBoundingRect(), b = f.pageX, a = f.pageY, b >= g.left && b <= g.left + g.width && a >= g.top && a <= g.top + g.height
    }
    d = !1;
    this.each(function() {
      g = $(this).getBoundingRect();
      b = f.pageX;
      a = f.pageY;
      if(b >= g.left && b <= g.left + g.width && a >= g.top && a <= g.top + g.height) {
        return d = !0, !1
      }
    });
    return d
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
  JGM.create = function(d, b) {
    b == null && (b = {});
    if(!this.hasOwnProperty(d)) {
      throw Error("cannot find a grid module: name=" + d);
    }
    if(this._map.hasOwnProperty(d)) {
      if(this._map[d].cacheModule) {
        var a = b.mid = "JGM" + this.m.length++, c = new this[d](b);
        this.m.hasOwnProperty(d) || (this.m[d] = {});
        this.m[d][a] = c;
        d === "Grid" && c.name && (this.gridMap[c.name] = c);
        return c
      }else {
        return new this[d](b)
      }
    }else {
      return new this[d](b)
    }
  };
  JGM._destroy = function(d, b) {
    var a, c, e, i;
    for(c in b) {
      if(b.hasOwnProperty(c)) {
        switch(c) {
          case "map":
            a = b[c];
            if(f.isString(a)) {
              a = f.split(a);
              i = a.length;
              for(e = 0;e < i;e++) {
                JGM._deleteMap(d, a[e])
              }
            }else {
              if(a instanceof Array) {
                i = a.length;
                for(e = 0;e < i;e++) {
                  f.emptyObject(a[e])
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
              i = a.length;
              for(e = 0;e < i;e++) {
                JGM._deleteArray(d, a[e])
              }
            }else {
              a.length = 0
            }
            break;
          case "$":
            a = b[c];
            if(f.isString(a)) {
              a = f.split(a);
              i = a.length;
              for(e = 0;e < i;e++) {
                JGM._delete$(d, a[e])
              }
            }else {
              if(a instanceof Array) {
                i = a.length;
                for(e = 0;e < i;e++) {
                  g.unbindRemove(a[e])
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
              i = a.length;
              for(e = 0;e < i;e++) {
                JGM._deleteStyle(d, a[e])
              }
            }else {
              if(a instanceof Array) {
                i = a.length;
                for(e = 0;e < i;e++) {
                  f.removeStyle(a[e])
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
              i = a.length;
              for(e = 0;e < i;e++) {
                delete d[a[e]]
              }
            }else {
              if(a instanceof Array) {
                i = a.length;
                for(e = 0;e < i;e++) {
                  delete d[a[e]]
                }
              }
            }
            break;
          case "module":
            a = b[c];
            if(f.isString(a)) {
              a = f.split(a);
              i = a.length;
              for(e = 0;e < i;e++) {
                JGM._deleteModule(d, a[e])
              }
            }else {
              if(a instanceof Array) {
                i = a.length;
                for(e = 0;e < i;e++) {
                  a[e].destroy()
                }
              }else {
                a.destroy()
              }
            }
            break;
          case "name":
            d.hasOwnProperty("mid") && (JGM._remove(b[c], d.mid), delete d.mid);
            break;
          case "path":
            d.hasOwnProperty("grid") && d.grid.hasOwnProperty(b[c]) && (delete d.grid[b[c]], delete d.grid)
        }
      }
    }
    f.emptyObject(d)
  };
  JGM._deleteMap = function(d, b) {
    d.hasOwnProperty(b) && (f.emptyObject(d[b]), delete d[b])
  };
  JGM._deleteArray = function(d, b) {
    if(d.hasOwnProperty(b)) {
      d[b].length = 0, delete d[b]
    }
  };
  JGM._delete$ = function(d, b) {
    d.hasOwnProperty(b) && (g.unbindRemove(d[b]), delete d[b])
  };
  JGM._deleteStyle = function(d, b) {
    d.hasOwnProperty(b) && (f.removeStyle(d[b]), delete d[b])
  };
  JGM._deleteModule = function(d, b) {
    d.hasOwnProperty(b) && (d[b].destroy(), delete d[b])
  };
  JGM._remove = function(d, b) {
    delete this.m[d][b]
  };
  JGM.grid = function(d) {
    return this.create("Grid", d)
  };
  JGM.gridMap = {};
  JGM.getGrid = function(d) {
    if(this.gridMap.hasOwnProperty(d)) {
      return this.gridMap[d]
    }
  };
  JGM._add = function(d, b) {
    this[d] = b
  };
  JGM._extend = function(d, b) {
    var a = f.ifNull(b, {});
    $.extend(!0, d, a);
    $.extend(!0, a, d);
    return a
  };
  JGM.m = {length:0};
  JGM._CONST = {_cssUnselectable:"-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none;", _checkboxWidth:void 0, _checkboxHeight:void 0, _radioWidth:void 0, _radioHeight:void 0};
  JGM._globalEventsBound = !1;
  JGM._globalEvents = {_mousemove:function(d) {
    var b, a = JGM.m.Grid;
    for(b in a) {
      a.hasOwnProperty(b) && a[b]._mousemove(d)
    }
  }, _mouseup:function(d) {
    var b, a = JGM.m.Grid;
    for(b in a) {
      a.hasOwnProperty(b) && a[b]._mouseup(d)
    }
  }, _resize:function(d) {
    var b, a = JGM.m.Grid;
    for(b in a) {
      a.hasOwnProperty(b) && a[b]._resize(d)
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
    var d = f.mapping, b = f.attr, a = f["default"], c = f.style, e = f.callback, i, l, j, h = 0, q = [], k = [], n = "<select";
    if(b) {
      for(j in b) {
        b.hasOwnProperty(j) && (n += " " + j + '="' + b[j] + '"')
      }
    }
    if(c) {
      n += ' style="';
      for(j in c) {
        c.hasOwnProperty(j) && (n += j + ":" + c[j] + ";")
      }
      n += '"'
    }
    n += ">";
    for(i in d) {
      d.hasOwnProperty(i) && (f = d[i], q.push(i), k.push(f), a == f && (l = h), h++)
    }
    return function(c) {
      var a, i, b = n;
      for(i = 0;i < h;i++) {
        if(c == k[i]) {
          a = i;
          break
        }
      }
      a === void 0 && (a = l);
      for(i = 0;i < h;i++) {
        b += '<option value="' + k[i] + '"', i === a && (b += ' selected="selected"'), b += ">" + q[i] + "</option>"
      }
      b += "</select>";
      e && (a = [], a.push(b), Array.prototype.push.apply(a, arguments), b = e.apply(this, a));
      return b
    }
  }
})();
jx.lang = {};
jx.lang.Disposable = {};
(function() {
  function f() {
  }
  function g(e, c, a) {
    if(typeof e != "object") {
      return!1
    }
    var b, h, d;
    if(c) {
      for(var a = 0, f = c.length;a < f;a++) {
        if(b = c[a], this.hasOwnProperty(b)) {
          if(e.hasOwnProperty(b)) {
            if(h = this[b], d = e[b], h !== e && !(h === h || d === d)) {
              return!1
            }
          }else {
            return!1
          }
        }else {
          if(e.hasOwnProperty(b)) {
            return!1
          }
        }
      }
    }else {
      if(a) {
        for(b in this) {
          if(this.hasOwnProperty(b)) {
            if(!e.hasOwnProperty(b)) {
              return!1
            }
            h = this[b];
            d = e[b];
            if(h !== d) {
              if(h) {
                if(typeof h != "object" || typeof d != "object") {
                  return!1
                }
                if(h.equals) {
                  if(!h.equals(d, null, a - 1)) {
                    return!1
                  }
                }else {
                  if(d.equals && !d.equals(h, null, a - 1)) {
                    return!1
                  }
                }
                if(!g.call(h, d, null, a - 1)) {
                  return!1
                }
              }else {
                if(!(h === h || d === d)) {
                  return!1
                }
              }
            }
          }
        }
      }else {
        for(b in this) {
          if(this.hasOwnProperty(b)) {
            if(e.hasOwnProperty(b)) {
              if(h = this[b], d = e[b], h !== e && !(h === h || d === d)) {
                return!1
              }
            }else {
              return!1
            }
          }
        }
      }
      for(b in e) {
        if(e.hasOwnProperty(b) && !this.hasOwnProperty(b)) {
          return!1
        }
      }
    }
    return!0
  }
  function d(e, a) {
    if(this != goog.global) {
      var b, j;
      if(e) {
        for(b in this) {
          if(this.hasOwnProperty(b)) {
            if((j = this[b]) && typeof j == "object") {
              if(j.dispose) {
                j.dispose(e - 1, a)
              }else {
                if(a) {
                  if(c(j)) {
                    j.length = 0
                  }
                  d.call(j, e - 1, a)
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
  var b = goog.getObjectByName("jx.util");
  goog.exportSymbol("jx.lang.Disposable", f);
  goog.exportProperty(f.prototype, "dispose", d);
  var a = f.prototype, c = b.isArray;
  b.equals = Object.equals = function(e, c, a, b) {
    return typeof e == "object" ? g.call(e, c, a, b) : e !== e && c !== c
  };
  b.dispose = Object.dispose = function(e, c, a) {
    if(typeof e == "object") {
      return d.call(e, c, a)
    }
  };
  a.equals = g;
  a.dispose = d
})();
jx.grid.Cell = {};
(function() {
  function f(c) {
    this.grid = c.grid;
    this._datarow = c.datarow;
    this._colDef = c.colDef;
    this.__init(c)
  }
  goog.getObjectByName("jx.grid");
  var g = goog.getObjectByName("jx.util"), d = goog.getObjectByName("jx.lang.Disposable");
  goog.exportSymbol("jx.grid.Cell", f);
  goog.inherits(f, d);
  f.getInstance = function(c) {
    return new f(c)
  };
  var b = f.prototype, a = d.prototype.dispose;
  b.dispose = function() {
    a.call(this)
  };
  b.__init = function(c) {
    if(g.isNull(this._datarow)) {
      if(g.isNotNull(c.row)) {
        this._datarow = this.grid.dataMgr.getByIdx(c.row)
      }else {
        if(g.isNotNull(c.node)) {
          this._datarow = this.grid.dataMgr.getByNode(c.node.parentNode)
        }else {
          if(g.isNotNull(c.$)) {
            this._datarow = this.grid.dataMgr.getByNode(c.$[0].parentNode)
          }
        }
      }
    }
    if(g.isNull(this._colDef)) {
      if(g.isNotNull(c.col)) {
        this._colDef = this.grid.colDefMgr.get(c.col)
      }else {
        if(g.isNotNull(c.node)) {
          this._colDef = this.grid.colDefMgr.get(g.index(c.node))
        }else {
          if(g.isNotNull(c.$)) {
            this._colDef = this.grid.colDefMgr.get(g.index(c.$[0]))
          }
        }
      }
    }
    if(g.isNullOr(this._datarow, this._colDef) && g.isNotNull(c.event) && (c = this.grid.view._getClosestCell(c.event.target), g.isNotNull(c))) {
      this._datarow = this.grid.dataMgr.getByNode(c.parentNode), this._colDef = this.grid.colDefMgr.get(g.index(c))
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
    var c = this.getNode();
    return c !== void 0 ? $(c) : $([])
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
  b.equals = function(c) {
    return c && this._datarow && this._datarow === c._datarow && this._colDef && this._colDef === c.__colDef
  }
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
  var d = f.prototype, b = g.prototype.dispose;
  d.dispose = function() {
    b.call(this._handlers, -1, !0);
    b.call(this)
  };
  d.addEventListener = function(a, c) {
    if(!a) {
      throw Error("Invalid event type: " + a);
    }
    if(typeof c != "function") {
      throw Error("Event listener must be a function");
    }
    if(!this._handlers) {
      this._handlers = {}
    }
    var e = this._handlers, a = (a + "").toLowerCase();
    e.hasOwnProperty(a) || (e[a] = []);
    e = e[a];
    e.indexOf(c) === -1 && e.push(c)
  };
  d.removeEventListener = function(a, c) {
    if(this._handlers) {
      var a = (a + "").toLowerCase(), e = this._handlers;
      if(e.hasOwnProperty(a)) {
        for(var i = e[a], b = -1;(b = i.indexOf(c, b + 1)) !== -1;) {
          i.splice(b, 1)
        }
        i.length === 0 && delete e[a]
      }
    }
  };
  d.dispatchEvent = function(a) {
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
    var c = this._handlers, e = (a.type + "").toLowerCase();
    a.target = this;
    if(c.hasOwnProperty(e)) {
      for(var c = c[e], e = 0, i = c.length, b;e < i && !a.stopPropagation;e++) {
        b = c[e], b.handleEvent ? b.handleEvent(a) : b.call(this, a)
      }
    }
    if(a.cancelable && a.defaultPrevented) {
      return!1
    }
    a.defaultAction && a.defaultAction(this);
    return!0
  }
})();
jx.grid.Column = {};
(function() {
  function f(d) {
    if(!(d.manager && typeof d.manager == "object")) {
      throw Error("Column needs a valid manager!");
    }
    this.manager = d.manager;
    this.key = d.key + "";
    if(!this.key) {
      throw Error("Column needs a non-empty key!");
    }
    var b = "column key=" + this.key;
    if(this.manager.hasKey(this.key)) {
      throw Error("Duplicate column key!" + b);
    }
    this.name = d.name ? d.name + "" : "";
    this.title = d.title ? d.title + "" : "";
    this.noName = !!d.noName;
    this.noTitle = !!d.noTitle;
    this.type = d.type + "" || null;
    this.defaultValue = d.defaultValue;
    this.inputOnCreate = !!d.inputOnCreate;
    this.width = (this.width = Number(d.width)) || 90;
    this.minW = (this.minW = Number(d.minW)) || 30;
    this.maxW = Number(d.maxW) || null;
    this.resizable = !!d.resizable;
    this.hidden = !!d.hidden;
    this.noSearch = !!d.noSearch;
    this.tooltipEnabled = !!d.tooltipEnabled;
    this.colClass = d.colClass + "" || null;
    this.style = d.style + "" || null;
    this.headerStyle = d.headerStyle + "" || null;
    if(d.parser && typeof d.parser != "function") {
      throw Error("Invalid parser!" + b);
    }
    this.parser = d.parser || null;
    if(d.validator && typeof d.validator != "function") {
      throw Error("Invalid validator!" + b);
    }
    this.validator = d.validator || null;
    if(d.renderer && typeof d.renderer != "function") {
      throw Error("Invalid renderer!" + b);
    }
    this.renderer = d.renderer || null;
    if(d.sumRenderer && typeof d.sumRenderer != "function") {
      throw Error("Invalid sum renderer!" + b);
    }
    this.sumRenderer = d.sumRenderer || null;
    if(d.editor && typeof d.editor != "object") {
      throw Error("Invalid editor!" + b);
    }
    this.editor = d.editor || null;
    this.sorter = d.sorter || null;
    this.filter = d.filter || null
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
  g.setHidden = function(d) {
    return d ? this.hide() : this.show()
  };
  g.setWidth = function(d) {
    return(d = Number(d)) && this.width !== d ? (this.width = d, this.dispatchEvent({type:"width", value:d}), d) : !1
  };
  g.setRenderer = function(d) {
    if(this.renderer !== d) {
      if(d && typeof d != "function") {
        throw Error("Invalid renderer!column key=" + this.key);
      }
      this.renderer = d || null;
      this.dispatchEvent({type:"renderer", value:d})
    }
  }
})();
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
    var e = this, i = this.grid;
    i && ["Dispose", "CreateCss", "CreateDynamicCss", "Render", "Keydown", "Keyup", "Keypress", "Mousein", "Mouseout", "Mouseenter", "Mouseleave", "Mousemove", "Mouseover", "Mousedown", "Mouseup", "Click", "Dblclick", "Resize", "ResizeWidth", "ResizeHeight", "Scroll", "ScrollH", "ScrollV"].forEach(function(c) {
      var a = "before" + c, c = "after" + c, b = "_" + a, d = "_" + c;
      e[b] && i.addEventListener(a, function(c) {
        return e[b](c)
      });
      e[d] && i.addEventListener(c, function(c) {
        return e[d](c)
      })
    });
    this._bindEvents && (this.dispatchEvent({type:"beforebindevents"}), this._bindEvents(b), this.dispatchEvent({type:"afterbindevents"}));
    this.dispatchEvent({type:"complete"})
  }
  var g = goog.getObjectByName("jx.events.EventDispatcher");
  goog.exportSymbol("jx.grid.BaseModule", f);
  goog.inherits(f, g);
  var g = f.prototype, d = g.dispose;
  g._beforeDispose = function() {
    this.dispose()
  };
  g.dispose = function() {
    delete this.grid;
    this.dispatchEvent({type:"beforedispose"});
    d.call(this)
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
    var e = [];
    c || (b = "#" + this.grid.mid + " " + b);
    if(typeof a != "string") {
      var i, c = "";
      a.hasOwnProperty("_prepend") && (a._prepend && e.push(a._prepend), delete a._prepend);
      a.hasOwnProperty("_append") && (a._append && (c = ";" + a._append), delete a._append);
      for(i in a) {
        e.push(i + ":" + a[i])
      }
      e = e.join(";") + c
    }
    return b + "{" + e + "}"
  };
  g.toCssStyles = function(b, a, c) {
    var b = b || [], e;
    for(e in a) {
      b.push(this.toCssStyle(e, a[e], c))
    }
    return b
  }
})();
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
    this._consts = {_auto:0, _given:1, _composite:2, _notReal:this.mid + "@NR" + d.random(1E4), _add:0, _addList:1, _update:2, _updateList:3, _remove:4, _removeList:5, unknown:0, number:1, string:2, "boolean":3, date:4, "enum":5};
    d.isNotNull(this._options.idKey) ? (this._idMode = this._consts._given, this.idKey = this._options.idKey) : (this._idMode = this._options.idColKeys.length !== 0 ? this._consts._composite : this._consts._auto, this.idKey = "J@I" + this.mid + "@" + d.random(1E4));
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
  var g = goog.getObjectByName("jx.grid"), d = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.data.DataManager", f);
  g._add("DataManager", f);
  f.getInstance = function(a) {
    return new f(a)
  };
  var b = f.prototype;
  b.__init = function(a) {
    for(var c = 0, e = this._options.uniqueKeys, i, b = this.uniqueMap, j = e.length, h = this.keyToType, f = this.grid.colDefMgr.getAll();c < j;c++) {
      i = e[c], typeof i === "string" && (b[i] = {})
    }
    j = f.length;
    for(c = 0;c < j;c++) {
      e = f[c], i = e.key, e.hasOwnProperty("unique") && e.unique === !0 && !b.hasOwnProperty(i) && (b[i] = {}), h[i] = this.mapDatatype(e.type)
    }
    d.ifNull(a.datalist, []);
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
  b.addUniqueIndex = function(a, c, e, i) {
    if(i !== !0 && (d.isNull(a) || d.isEmptyString(c) || d.isNull(e))) {
      return!1
    }
    if(e.hasOwnProperty(c) === !1) {
      return this.grid.error("KEY_UNDEFINED", c)
    }
    if(d.isEmptyString(i = e[c])) {
      return this.grid.error("BAD_NULL", c)
    }
    if(a.hasOwnProperty(i)) {
      return a[i] === e ? !1 : this.grid.error("DUP_ENTRY", i, c)
    }
    a[i] = e;
    return!0
  };
  b.addUniqueIndices = function(a, c, e, i) {
    if(i !== !0 && (d.isNull(a) || d.isEmptyString(c) || d.isEmptyArray(e))) {
      return!1
    }
    for(var b = e.length, j = [], h, f, i = 0;i < b;i++) {
      if(!d.isNull(f = e[i])) {
        if(f.hasOwnProperty(c) === !1) {
          return this.removeUniqueIndices(a, c, j), this.grid.error("KEY_UNDEFINED", c)
        }
        if(d.isEmptyString(h = f[c])) {
          return this.removeUniqueIndices(a, c, j), this.grid.error("BAD_NULL", c)
        }
        if(a.hasOwnProperty(h)) {
          if(a[h] === f) {
            continue
          }
          this.removeUniqueIndices(a, c, j);
          return this.grid.error("DUP_ENTRY", h, c)
        }
        j.push(a[h] = f)
      }
    }
    return j.length > 0
  };
  b.updateUniqueIndex = function(a, c, e, i, b, j) {
    if(j !== !0 && (d.isEmptyObj(a) || d.isEmptyString(c) || d.isNullOr(e, b) || d.isEmptyObj(i))) {
      return!1
    }
    if(i.hasOwnProperty(c) === !1) {
      return!1
    }
    if(b.hasOwnProperty(c) === !1 || e.hasOwnProperty(c) === !1) {
      return this.grid.error("KEY_UNDEFINED", c)
    }
    if(a.hasOwnProperty(b = b[c]) === !1) {
      return this.grid.error("KEY_NOT_FOUND", b, c)
    }
    if(d.isEmptyString(i = i[c])) {
      return this.grid.error("BAD_NULL", c)
    }
    if(a.hasOwnProperty(i)) {
      return a[i] === e ? !1 : this.grid.error("DUP_ENTRY", i, c)
    }
    a[i] = e;
    delete a[b];
    return b
  };
  b.updateUniqueIndices = function(a, c, e, i, b, j) {
    if(j !== !0) {
      if(d.isEmptyObj(a) || d.isEmptyString(c) || d.isEmptyArray(e) || d.isEmptyArray(i) || d.isEmptyArray(b)) {
        return!1
      }
      if(e.length !== i.length || e.length !== b.length) {
        return this.grid.error("LENGTH_NOT_EQUAL")
      }
    }
    for(var j = 0, h = e.length, f, k, g, m = [], o = [], p = [], r, s;j < h;j++) {
      if(!d.isNull(f = e[j])) {
        if((g = i[j]).hasOwnProperty(c) !== !1) {
          k = b[j];
          if(k.hasOwnProperty(c) === !1 || f.hasOwnProperty(c) === !1) {
            return this.updateUniqueIndices(a, c, m, p, o), this.grid.error("KEY_UNDEFINED", c)
          }
          if(a.hasOwnProperty(s = k[c]) === !1) {
            return this.updateUniqueIndices(a, c, m, p, o), this.grid.error("KEY_NOT_FOUND", s, c)
          }
          if(d.isEmptyString(r = g[c])) {
            return this.updateUniqueIndices(a, c, m, p, o), this.grid.error("BAD_NULL", c)
          }
          if(a.hasOwnProperty(r)) {
            if(a[r] === f) {
              continue
            }
            this.updateUniqueIndices(a, c, m, p, o);
            return this.grid.error("DUP_ENTRY", r, c)
          }
          a[r] = f;
          delete a[s];
          m.push(f);
          o.push(g);
          p.push(k)
        }
      }
    }
    return m.length === 0 ? !1 : {datalist:m, changes:o, befores:p}
  };
  b.removeUniqueIndex = function(a, c, e, i) {
    if(!(i !== !0 && (d.isEmptyObj(a) || d.isEmptyString(c) || d.isEmptyObj(e)))) {
      var b;
      e.hasOwnProperty(c) && a.hasOwnProperty(b = e[c]) && delete a[b]
    }
  };
  b.removeUniqueIndices = function(a, c, e, i) {
    if(!(i !== !0 && (d.isEmptyObj(a) || d.isEmptyString(c) || d.isEmptyArray(e)))) {
      for(var b = e.length, j, h, i = 0;i < b;i++) {
        h = e[i], h.hasOwnProperty(c) && a.hasOwnProperty(j = h[c]) && delete a[j]
      }
    }
  };
  b.addToUniqueMap = function(a) {
    if(d.isEmptyObj(a) || d.isEmptyObj(this.uniqueMap)) {
      return!1
    }
    var c = [], e, i = this.uniqueMap, b;
    for(e in i) {
      if(i.hasOwnProperty(e)) {
        if(b = this.addUniqueIndex(i[e], e, a), b === !0) {
          c.push(e)
        }else {
          if(b instanceof Error) {
            e = 0;
            for(var j = c.length;e < j;e++) {
              this.removeUniqueIndex(i[c[e]], c[e], a)
            }
            return b
          }
        }
      }
    }
    return c.length > 0
  };
  b.addListToUniqueMap = function(a) {
    if(d.isEmptyArray(a) || d.isEmptyObj(this.uniqueMap)) {
      return!1
    }
    var c = this.uniqueMap, e = [], i, b;
    for(i in c) {
      if(c.hasOwnProperty(i)) {
        if(b = this.addUniqueIndices(c[i], i, a), b === !0) {
          e.push(i)
        }else {
          if(b instanceof Error) {
            i = 0;
            for(var j = e.length;i < j;i++) {
              this.removeUniqueIndices(c[e[i]], e[i], a)
            }
            return b
          }
        }
      }
    }
    return e.length > 0
  };
  b.updateUniqueMap = function(a, c, e) {
    if(d.isNullOr(a, c, e) || d.isEmptyObj(this.uniqueMap)) {
      return!1
    }
    var i, b = this.uniqueMap, j = [], h;
    for(i in b) {
      if(b.hasOwnProperty(i)) {
        h = this.updateUniqueIndex(b[i], i, a, c, e);
        if(h instanceof Error) {
          i = 0;
          for(var f = j.length;i < f;i++) {
            this.updateUniqueIndex(b[j[i]], j[i], a, e, c)
          }
          return h
        }
        h !== !1 && j.push(i)
      }
    }
    return j.length > 0
  };
  b.updateListUniqueMap = function(a, c, e) {
    if(d.isEmptyArray(a) || d.isEmptyArray(c) || d.isEmptyArray(e) || d.isEmptyObj(this.uniqueMap)) {
      return!1
    }
    if(a.length !== c.length || a.length !== e.length) {
      return this.grid.error("LENGTH_NOT_EQUAL")
    }
    var i, b = this.uniqueMap, j = [], h;
    for(i in b) {
      if(b.hasOwnProperty(i)) {
        h = this.updateUniqueIndices(b[i], i, a, c, e);
        if(h instanceof Error) {
          i = 0;
          for(var f = j.length;i < f;i++) {
            this.updateUniqueIndices(b[j[i]], j[i], a, e, c)
          }
          return h
        }
        h !== !1 && j.push(i)
      }
    }
    return j.length > 0
  };
  b.removeFromUniqueMap = function(a) {
    if(!d.isEmptyObj(a) && !d.isEmptyObj(this.uniqueMap)) {
      var c, e = this.uniqueMap;
      for(c in e) {
        e.hasOwnProperty(c) && this.removeUniqueIndex(e[c], c, a)
      }
    }
  };
  b.removeListFromUniqueMap = function(a) {
    if(!d.isEmptyArray(a) && !d.isEmptyObj(this.uniqueMap)) {
      var c, e = this.uniqueMap;
      for(c in e) {
        e.hasOwnProperty(c) && this.removeUniqueIndices(e[c], c, a)
      }
    }
  };
  b.addToIdMap = function(a) {
    if(d.isNull(a)) {
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
    if(d.isEmptyArray(a)) {
      return!1
    }
    var c = this.idKey;
    switch(this._idMode) {
      case this._consts._auto:
        for(var e = 0, i, b = a.length;e < b;e++) {
          if((i = a[e]).hasOwnProperty(c) === !1) {
            i[c] = this._increment++
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
  b.updateIdMap = function(a, c, e) {
    if(d.isNullOr(a, e) || d.isEmptyObj(c)) {
      return!1
    }
    var i = this.idKey;
    switch(this._idMode) {
      case this._consts._auto:
        if(c.hasOwnProperty(i)) {
          return this.grid.error("NOT_MODIFIABLE", i)
        }
      ;
      case this._consts._given:
        return this.updateUniqueIndex(this._idToData, i, a, c, e);
      case this._consts._composite:
        if(c.hasOwnProperty(i)) {
          return this.grid.error("NOT_MODIFIABLE", i)
        }
        for(var e = this._options.idColKeys, b = e.length, j = 0;j < b;j++) {
          if(c.hasOwnProperty(e[j])) {
            for(var h = "", f = 0, k, g, m = {}, o = {}, j = o[i] = a[i];f < b;f++) {
              if(k = e[f], c.hasOwnProperty(k)) {
                if(d.isEmptyString(g = c[k])) {
                  return this.grid.error("BAD_NULL", k)
                }
                h += "&" + g
              }else {
                h += "&" + a[k]
              }
            }
            a[i] = m[i] = h;
            if(j === h) {
              break
            }
            c = this.updateUniqueIndex(this._idToData, i, a, m, o);
            c instanceof Error && (a[i] = j);
            return c
          }
        }
    }
    return!1
  };
  b.updateListIdMap = function(a, c, e) {
    if(d.isEmptyArray(a) || d.isEmptyArray(c) || d.isEmptyArray(e)) {
      return!1
    }
    var i = this.idKey, b = a.length, j = 0;
    switch(this._idMode) {
      case this._consts._auto:
        for(;j < b;j++) {
          if(c[j].hasOwnProperty(i)) {
            return this.grid.error("NOT_MODIFIABLE", i)
          }
        }
      ;
      case this._consts._given:
        return this.updateUniqueIndices(this._idToData, i, a, c, e);
      case this._consts._composite:
        for(var h = this._idToData, f, k, g = this._options.idColKeys, m = g.length, o, e = [], p = [], r = [], s = [], t, u, v, w;j < b;j++) {
          f = a[j];
          k = c[j];
          if(k.hasOwnProperty(i)) {
            t = 0;
            for(b = e.length;t < b;t++) {
              p[t][i] = e[t]
            }
            return this.grid.error("NOT_MODIFIABLE", i)
          }
          for(t = 0;t < m;t++) {
            if(k.hasOwnProperty(g[t])) {
              o = "";
              for(u = 0;u < m;u++) {
                if(v = g[u], k.hasOwnProperty(v)) {
                  if(d.isEmptyString(w = k[v])) {
                    t = 0;
                    for(b = e.length;t < b;t++) {
                      p[t][i] = e[t]
                    }
                    return this.grid.error("BAD_NULL", v)
                  }
                  o += "&" + w
                }else {
                  o += "&" + f[v]
                }
              }
              f[i] !== o && (p.push(f), r.push({}), s.push({}), e.push(f[i]), f[i] = o)
            }
          }
        }
        if(p.length === 0) {
          break
        }
        a = this.updateUniqueIndices(h, i, p, r, s);
        if(a instanceof Error) {
          t = 0;
          for(b = e.length;t < b;t++) {
            p[t][i] = e[t]
          }
        }
        return a
    }
    return!1
  };
  b.removeFromIdMap = function(a) {
    var c = this.idKey, e = this._idToData, i;
    d.isNotNull(a) && a.hasOwnProperty(c) && e.hasOwnProperty(i = a[c]) && delete e[i]
  };
  b.removeListFromIdMap = function(a) {
    if(!d.isEmptyArray(a)) {
      for(var c = this.idKey, e = a.length, i = this._idToData, b, j, h = 0;h < e;h++) {
        j = a[h], j.hasOwnProperty(c) && i.hasOwnProperty(b = j[c]) && delete i[b]
      }
    }
  };
  b.fillTemp = function(a, c) {
    if(!d.isNull(a)) {
      var e = this.grid.colDefMgr.getAll(), i = e.length, b, j, h = 0;
      if(c !== void 0 && c.isNew) {
        for(;h < i;h++) {
          j = e[h], b = j.key, j.nullOnCreate && d.isNull(a[b]) && (a[b] = "J@H" + this._increment++)
        }
      }
    }
  };
  b.fillTempList = function(a, c) {
    if(!d.isEmptyArray(a)) {
      var e = this.grid.colDefMgr.getAll(), i = e.length, b = a.length, j, h, f = 0;
      if(c !== void 0 && c.isNew) {
        for(;f < i;f++) {
          if(h = e[f], j = h.key, h.nullOnCreate) {
            for(h = 0;b;h++) {
              a[h][j] = "J@H" + this._increment++
            }
          }
        }
      }
    }
  };
  b.query = function(a) {
    if(typeof a === "string" && (a = $.trim(a), a.length !== 0)) {
      var c, e, i, b, d;
      c = a.toLowerCase();
      e = a.indexOf(" ");
      if(e !== -1 && (i = c.substring(0, e), c = c.indexOf(" where "), b = c > -1, e = $.trim(b ? a.substring(e + 1, c) : a.substring(e + 1)), e.length !== 0)) {
        switch(b && (d = $.trim(a.substring(c + 7))), i) {
          case "select":
            return this.executeSelect(e, d);
          case "insert":
            return this.executeInsert(e, d);
          case "update":
            return this.executeUpdate(e, d);
          case "delete":
            return this.executeDelete(e, d)
        }
      }
    }
  };
  b.parseWhere = function(a) {
    typeof a === "string" && $.trim(a)
  };
  b.executeSelect = function(a) {
    var a = d.split(a, /[\s,]+/), c = a.length, e = 0, i = {}, b = this.all, j = [];
    if(c === 0) {
      return j
    }
    for(;e < c;e++) {
      if(a[e] === "*") {
        break
      }
      i[a[e]] = !0
    }
    e = 0;
    for(c = b.length;e < c;e++) {
      j.push(d.clone(b[e], i))
    }
    return j
  };
  b.parse = function(a, c) {
    if(d.isNull(a)) {
      return!1
    }
    for(var e = this.grid.colDefMgr.getAll(), i = e.length, b, j, h = c !== void 0 && c.isNew, f = 0;f < i;f++) {
      if(j = e[f], !h || !j.nullOnCreate) {
        if(d.isFunction(b = j.parser)) {
          if(j = j.key, a.hasOwnProperty(j)) {
            try {
              a[j] = b(a[j], a)
            }catch(k) {
              return d.isNull(a) ? this.grid.error("PARSE_ERROR", a, j) : this.grid.error("PARSE_ERROR", a[j], j)
            }
          }
        }
      }
    }
    return!0
  };
  b.parseList = function(a, c) {
    if(d.isNull(a)) {
      return!1
    }
    if(a.length === 0) {
      return!0
    }
    for(var e = this.grid.colDefMgr.getAll(), i = e.length, b = a.length, j, h, f = 0, k, g = c !== void 0 && c.isNew, m;f < i;f++) {
      if(h = e[f], !g || !h.nullOnCreate) {
        if(d.isFunction(j = h.parser)) {
          h = h.key;
          try {
            for(k = 0;k < b;k++) {
              m = a[k], m.hasOwnProperty(h) && (m[h] = j(m[h], m))
            }
          }catch(o) {
            return d.isNull(m) ? this.grid.error("PARSE_ERROR", m, h) : this.grid.error("PARSE_ERROR", m[h], h)
          }
        }
      }
    }
    return!0
  };
  b.validate = function(a, c) {
    if(d.isNull(a)) {
      return!1
    }
    for(var e = this.grid.colDefMgr.getAll(), i = e.length, b, j, h, f, k, g, m, o = c !== void 0 && c.isNew, p = 0;p < i;p++) {
      if(b = e[p], j = b.key, k = void 0, f = h = !1, !o || !b.nullOnCreate) {
        if(b.notNull === !0) {
          if(a.hasOwnProperty(j) === !1 || d.isEmptyString(k = a[j])) {
            return this.grid.error("BAD_NULL", j)
          }
          g = k.toString()
        }else {
          a.hasOwnProperty(j) === !1 || d.isNull(k = a[j]) ? f = h = !0 : k === "" && (f = !0), g = h === !1 ? k.toString() : ""
        }
        if(h === !1) {
          if(d.isNotNull(m = b.max) && f === !1 && k > m) {
            return this.grid.error("BIGGER_THAN", k, j, m)
          }
          if(d.isNotNull(m = b.min) && f === !1 && k < m) {
            return this.grid.error("SMALLER_THAN", k, j, m)
          }
          if(d.isNotNull(m = b.length)) {
            if(f === !0 || g.length !== m) {
              return this.grid.error("WRONG_LENGTH", g, m, j)
            }
          }else {
            if(d.isNotNull(m = b.maxlength) && f === !1 && g.length > m) {
              return this.grid.error("DATA_TOO_LONG", g, j, m)
            }
            if(d.isNotNull(m = b.minlength)) {
              if(f === !0 || g.length < m) {
                return this.grid.error("DATA_TOO_SHORT", g, j, m)
              }
            }
          }
        }
        if(d.isFunction(b = b.validator)) {
          try {
            if(b(k, a, g, h, f) !== !0) {
              return this.grid.error("WRONG_VALUE", g, j)
            }
          }catch(r) {
            return this.grid.error("WRONG_VALUE", g, j)
          }
        }
      }
    }
    return!0
  };
  b.validateList = function(a, c) {
    if(d.isNull(a)) {
      return!1
    }
    if(a.length === 0) {
      return!0
    }
    for(var e = this.grid.colDefMgr.getAll(), i = e.length, b = a.length, j, h, f = 0, k, g, m, o, p, r = c !== void 0 && c.isNew, s = [], t = [];f < i;f++) {
      if(j = e[f], h = j.key, g = {}, m = {}, s.length = 0, t.length = 0, !r || !j.nullOnCreate) {
        if(j.notNull === !0) {
          for(k = 0;k < b;k++) {
            if(a[k].hasOwnProperty(h) === !1 || d.isEmptyString(o = a[k][h])) {
              return this.grid.error("BAD_NULL", h)
            }
            s.push(o);
            t.push(o.toString())
          }
        }else {
          for(k = 0;k < b;k++) {
            o = void 0, a[k].hasOwnProperty(h) === !1 || d.isNull(o = a[k][h]) ? (g[k] = !0, m[k] = !0) : o === "" && (m[k] = !0), s.push(o), g.hasOwnProperty(k) ? t.push("") : t.push(o.toString())
          }
        }
        if(d.isNotNull(p = j.max)) {
          for(k = 0;k < b;k++) {
            if(m.hasOwnProperty(k) === !1 && s[k] > p) {
              return this.grid.error("BIGGER_THAN", s[k], h, p)
            }
          }
        }
        if(d.isNotNull(p = j.min)) {
          for(k = 0;k < b;k++) {
            if(m.hasOwnProperty(k) === !1 && s[k] < p) {
              return this.grid.error("SMALLER_THAN", s[k], h, p)
            }
          }
        }
        if(d.isNotNull(p = j.length)) {
          for(k = 0;k < b;k++) {
            if(g.hasOwnProperty(k) === !1 && (m.hasOwnProperty(k) || t[k].length !== p)) {
              return this.grid.error("WRONG_LENGTH", t[k], p, h)
            }
          }
        }else {
          if(d.isNotNull(p = j.maxlength)) {
            for(k = 0;k < b;k++) {
              if(m.hasOwnProperty(k) === !1 && t[k].length > p) {
                return this.grid.error("DATA_TOO_LONG", t[k], h, p)
              }
            }
          }
          if(d.isNotNull(p = j.minlength)) {
            for(k = 0;k < b;k++) {
              if(g.hasOwnProperty(k) === !1 && (m.hasOwnProperty(k) || t[k].length < p)) {
                return this.grid.error("DATA_TOO_SHORT", t[k], h, p)
              }
            }
          }
        }
        if(d.isFunction(j = j.validator)) {
          try {
            for(k = 0;k < b;k++) {
              if(j(s[k], a[k], t[k], g.hasOwnProperty(k), m.hasOwnProperty(k)) !== !0) {
                return this.grid.error("WRONG_VALUE", t[k], h)
              }
            }
          }catch(u) {
            return this.grid.error("WRONG_VALUE", t[k], h)
          }
        }
      }
    }
    return!0
  };
  b.makeCompositeKey = function(a, c) {
    if(!(this._idMode !== this._consts._composite || d.isNull(a))) {
      if(c === !0 || a.hasOwnProperty(this.idKey) === !1) {
        for(var e = this._options.idColKeys, i = e.length, b = 0, j = "";b < i;b++) {
          j += "&" + a[e[b]]
        }
        a[this.idKey] = j
      }
    }
  };
  b.makeCompositeKeyList = function(a, c) {
    if(!(this._idMode !== this._consts._composite || a.length === 0)) {
      var e = this.idKey, i = a.length, b = this._options.idColKeys, d = b.length, h, f = 0, k, g;
      if(c === !0) {
        for(;f < i;f++) {
          h = a[f];
          g = "";
          for(k = 0;k < d;k++) {
            g += "&" + h[b[k]]
          }
          h[e] = g
        }
      }else {
        for(;f < i;f++) {
          if((h = a[f]).hasOwnProperty(e) === !1) {
            g = "";
            for(k = 0;k < d;k++) {
              g += "&" + h[b[k]]
            }
            h[e] = g
          }
        }
      }
    }
  };
  b.map = function(a) {
    if(!d.isNull(a)) {
      var c = this._idToData, e = this.idKey, i;
      this.makeCompositeKey(a);
      if(a.hasOwnProperty(e) && c.hasOwnProperty(i = a[e])) {
        return c[i]
      }
    }
  };
  b.mapList = function(a) {
    if(d.isEmptyArray(a)) {
      return{mapped:[], unmapped:[]}
    }
    this.makeCompositeKeyList(a);
    for(var c = [], e = [], i = this.idKey, b = this._idToData, j = a.length, h = 0, f, k;h < j;h++) {
      (f = a[h]).hasOwnProperty(i) && b.hasOwnProperty(k = f[i]) ? c.push(b[k]) : e.push(f)
    }
    return{mapped:c, unmapped:e}
  };
  b.getById = function(a) {
    if(d.isNotNull(a) && this._idToData.hasOwnProperty(a)) {
      return this._idToData[a]
    }
  };
  b.getByIdx = function(a) {
    if(d.isNotNull(a) && this.datalist.hasOwnProperty(a)) {
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
    return d.isNotNull(a) && this._idToIdx.hasOwnProperty(a) ? this._idToIdx[a] : -1
  };
  b.getIdxByNode = function(a) {
    return this.getIdxById(this.getIdByNode(a))
  };
  b.getId = function(a) {
    if(d.isNotNull(a) && a.hasOwnProperty(this.idKey)) {
      return a[this.idKey]
    }
  };
  b.getIdByIdx = function(a) {
    return this.getId(this.getByIdx(a))
  };
  b.getIdByNode = function(a) {
    if(d.isNotNull(a)) {
      return a.getAttribute("i")
    }
  };
  b._reidxFrom = function(a) {
    d.isNull(a) && (a = 0);
    for(var c = this.datalist, e = c.length, i = this.idKey, b = this._idToIdx;a < e;a++) {
      b[c[a][i]] = a
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
    return d.isNotNull(a) ? this._idToIdx.hasOwnProperty(a) : !1
  };
  b.contains = function(a) {
    return this.containsById(this.getId(a))
  };
  b.containsById = function(a) {
    return d.isNotNull(a) ? this._idToData.hasOwnProperty(a) : !1
  };
  b.set = function(a) {
    if(this.all === a || d.isEmptyArray(a) && this.all === 0) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange", !1, !0);
    this.grid.event.trigger("onBeforeSetDatalist", [this.all, a], !0);
    this.cleanList(this.all);
    var c, e = this.uniqueMap;
    for(c in e) {
      e.hasOwnProperty(c) && (e[c] = {})
    }
    this._idToData = {};
    this.all = [];
    this._history.length = 0;
    this._redoHistory.length = 0;
    d.isNull(a) && (a = []);
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
    if(d.isNull(a) || d.isNotNull(this.map(a))) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange", !1, !0);
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
    if(d.isNull(c) || c.undo !== !0) {
      this._history.push({_action:this._consts._add, _target:a}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onAddDatarow", [a, c], !0);
    this.grid.event.trigger("onDataChange", !1, !0);
    (c === void 0 || c.noRefresh !== !0) && this.refresh(c);
    return!0
  };
  b.addList = function(a, c) {
    if(d.isEmptyArray(a)) {
      return!1
    }
    var e = this.mapList(a).unmapped;
    if(e.length === 0) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange", !1, !0);
    this.fillTempList(a, c);
    var b;
    if((b = this.parseList(e, c)) instanceof Error) {
      return b
    }
    if((b = this.validateList(e, c)) instanceof Error) {
      return b
    }
    if((b = this.addListToUniqueMap(e)) instanceof Error) {
      return b
    }
    if((b = this.addListToIdMap(e)) instanceof Error) {
      return b
    }
    this.all.pushList(e);
    if(d.isNull(c) || c.undo !== !0) {
      this._history.push({_action:this._consts._addList, _target:e}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onAddDatalist", [e, c], !0);
    this.grid.event.trigger("onDataChange", !1, !0);
    (c === void 0 || c.noRefresh !== !0) && this.refresh(c);
    return!0
  };
  b.updateByKey = function(a, c, e, b) {
    var l = {};
    l[c] = e;
    return this.update(a, l, b)
  };
  b.update = function(a, c, e) {
    if(d.isNullOr(a, c)) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange", !1, !0);
    this.grid.event.trigger("onBeforeUpdateDatarow", [a, c], !0);
    var b = {}, l;
    for(l in c) {
      c.hasOwnProperty(l) && (a[l] === c[l] ? delete c[l] : (b[l] = a[l], a[l] = c[l]))
    }
    if(d.isEmptyObj(b)) {
      return!1
    }
    if((l = this.parse(a, e)) instanceof Error) {
      return this._rollback(a, b), l
    }
    if((l = this.validate(a, e)) instanceof Error) {
      return this._rollback(a, b), l
    }
    if((l = this.updateUniqueMap(a, c, b)) instanceof Error) {
      return this._rollback(a, b), l
    }
    if((l = this.updateIdMap(a, c, b)) instanceof Error) {
      return this._rollback(a, b), l
    }
    l !== !1 && this.grid.event.trigger("onIdChange", [a, l, a[this.idKey]], !0);
    if(d.isNull(e) || e.undo !== !0) {
      this._history.push({_action:this._consts._update, _target:a, _before:b, _change:c}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onUpdateDatarow", [a, c, b, e], !0);
    this.grid.event.trigger("onDataChange", !1, !0);
    (e === void 0 || e.noRefresh !== !0) && this.refresh(e);
    return!0
  };
  b.updateList = function(a, c) {
    if(d.isEmptyArray(a)) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange", !1, !0);
    this.grid.event.trigger("onBeforeUpdateDatalist", [a], !0);
    for(var e = [], b = [], l = [], j, h, f, k = a.length, g = 0, m;g < k;g++) {
      h = {};
      j = a[g].datarow;
      f = a[g].change;
      for(m in f) {
        f.hasOwnProperty(m) && (j[m] === f[m] ? delete f[m] : (h[m] = j[m], j[m] = f[m]))
      }
      d.isNotEmptyObj(h) && (e.push(j), b.push(h), l.push(f))
    }
    if(e.length === 0) {
      return!1
    }
    if((j = this.parseList(e, c)) instanceof Error) {
      return this._rollbackList(e, b), j
    }
    if((j = this.validateList(e, c)) instanceof Error) {
      return this._rollbackList(e, b), j
    }
    if((j = this.updateListUniqueMap(e, l, b)) instanceof Error) {
      return this._rollbackList(e, b), j
    }
    if((j = this.updateListIdMap(e, l, b)) instanceof Error) {
      return this._rollbackList(e, b), j
    }
    j !== !1 && this.grid.event.trigger("onIdListChange", [j.list, j.befores, this.idKey], !0);
    if(d.isNull(c) || c.undo !== !0) {
      this._history.push({_action:this._consts._updateList, _target:e, _before:b, _change:l}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onUpdateDatalist", [e, l, b, c], !0);
    this.grid.event.trigger("onDataChange", !1, !0);
    (c === void 0 || c.noRefresh !== !0) && this.refresh(c);
    return!0
  };
  b._rollback = function(a, c) {
    for(var e in c) {
      c.hasOwnProperty(e) && (a[e] = c[e])
    }
  };
  b._rollbackList = function(a, c) {
    for(var e = a.length, b = 0, l, d, h;b < e;b++) {
      for(h in l = a[b], d = c[b], d) {
        d.hasOwnProperty(h) && (l[h] = d[h])
      }
    }
  };
  b.remove = function(a, c) {
    if(d.isNull(a)) {
      return!1
    }
    var e = this.map(a);
    if(d.isNull(e)) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange", !1, !0);
    this.removeFromIdMap(e);
    this.removeFromUniqueMap(e);
    this.all.remove(e);
    this.removeId(e);
    if(d.isNull(c) || c.undo !== !0) {
      this._history.push({_action:this._consts._remove, _target:e}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onRemoveDatarow", [e, c], !0);
    this.grid.event.trigger("onDataChange", !1, !0);
    (c === void 0 || c.noRefresh !== !0) && this.refresh(c);
    return!0
  };
  b.removeList = function(a, c) {
    if(d.isEmptyArray(a)) {
      return!1
    }
    var e = this.mapList(a).mapped;
    if(e.length === 0) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange", !1, !0);
    this.removeListFromIdMap(e);
    this.removeListFromUniqueMap(e);
    this.all.removeList(e);
    this.cleanList(e);
    if(d.isNull(c) || c.undo !== !0) {
      this._history.push({_action:this._consts._removeList, _target:e}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onRemoveDatalist", [e, c], !0);
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
    var c = a._target, e = a._before;
    switch(a._action) {
      case this._consts._add:
        return this.remove(c, {undo:!0});
      case this._consts._addList:
        return this.removeList(c, {undo:!0});
      case this._consts._update:
        return this.update(c, e, {undo:!0});
      case this._consts._updateList:
        for(var a = [], b = 0, l = c.length;b < l;b++) {
          a.push({datarow:c[b], change:e[b]})
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
    var c = a._target, e = a._change;
    switch(a._action) {
      case this._consts._add:
        return this.add(c, {undo:!0});
      case this._consts._addList:
        return this.addList(c, {undo:!0});
      case this._consts._update:
        return this.update(c, e, {undo:!0});
      case this._consts._updateList:
        for(var a = [], b = 0, l = c.length;b < l;b++) {
          a.push({datarow:c[b], change:e[b]})
        }
        return this.updateList(a, {undo:!0});
      case this._consts._remove:
        return this.remove(c, {undo:!0});
      case this._consts._removeList:
        return this.removeList(c, {undo:!0})
    }
  };
  b.equals = function(a, c) {
    if(d.isNullOr(a, c)) {
      return!1
    }
    if(a === c) {
      return!0
    }
    this._idMode === this._consts._composite && (this.makeCompositeKey(a), this.makeCompositeKey(c));
    var e = this.idKey;
    return d.isNull(a[e]) || d.isNull(c[e]) ? !1 : a[e] === c[e]
  };
  b.getReal = function() {
    var a = this._consts._notReal;
    return this.all.filter(function(c) {
      return c.hasOwnProperty(a) === !1
    })
  };
  b.filterReal = function(a) {
    var c = this._consts._notReal;
    return a.filter(function(e) {
      return e.hasOwnProperty(c) === !1
    })
  };
  b.isReal = function(a) {
    return d.isNotNull(a) && a.hasOwnProperty(this._consts._notReal) === !1
  };
  b.dropNonReal = function(a) {
    if(!d.isEmptyArray(a)) {
      for(var c = this._consts._notReal, e = a.length - 1;e >= 0;e--) {
        a[e].hasOwnProperty(c) && (delete a[e][c], a.removeAt(e))
      }
    }
  };
  b.removeIdCol = function(a) {
    if(!(this._idMode === this._consts._given || d.isEmptyArray(a))) {
      for(var c = this.idKey, e = 0, b = a.length;e < b;e++) {
        a[e].hasOwnProperty(c) && delete a[e][c]
      }
    }
  };
  b.removeId = function(a) {
    d.isNotNull(a) && this._idMode !== this._consts._given && a.hasOwnProperty(this.idKey) && delete a[this.idKey]
  };
  b.cleanList = function(a) {
    d.isEmptyArray(a) || (this.removeIdCol(a), this.dropNonReal(a))
  };
  b.purify = function(a) {
    if(a !== void 0) {
      a = this.all
    }
    if(d.isEmptyArray(a)) {
      return[]
    }
    for(var c = [], e = a.length, b = 0, l, j, h = this._consts._notReal;b < e;b++) {
      if((j = a[b]).hasOwnProperty(h) === !1) {
        for(l in c.push({}), j) {
          j.hasOwnProperty(l) && j.hasOwnProperty(l) && l.substring(0, 3)
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
    d.isNull(a) ? a = this._sorter : this.setSorter(a);
    if(!d.isNull(a)) {
      var c = this.all;
      this.grid.event.trigger("onBeforeSort", [c], !0);
      d.isNotNull(a.comparator) ? (c.sort(a.comparator), a.desc && c.reverse()) : d.isNotNull(a.lexi) && this.constructor._lexi(c, a.lexi, a.desc);
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
    var a = this.datalist, c = this.failed, e = 0, b = this._filters.length, l, d;
    this.grid.event.trigger("onBeforeFilter", [a, c], !0);
    a.length = 0;
    a.pushList(this.all);
    for(c.length = 0;e < b;e++) {
      l = this._filters[e];
      for(d = a.length - 1;d >= 0;d--) {
        l(a[d]) || (c.push(a[d]), a.removeAt(d))
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
    for(var e = this.datalist[a], b = [], l, d = 0, h = c.length;d < h;d++) {
      l = c[d], b.push(l in e ? e[l] : null)
    }
    return b
  };
  b.exportToArray = function(a, c, e) {
    a || (a = this.grid.colDefMgr.getKeys());
    for(var c = this.datalist.slice(c, e), b = [], l, d, h = 0, f = c.length, k, g = a.length;h < f;h++) {
      l = c[h];
      k = 0;
      for(e = [];k < g;k++) {
        d = a[k], e.push(d in l ? l[d] : null)
      }
      b.push(e)
    }
    return b
  };
  f._lexi = function(a, c, e) {
    var b = Object.prototype.toString;
    Object.prototype.toString = d.isFunction(c) ? c : function() {
      return this[c]
    };
    a.sort();
    Object.prototype.toString = b;
    e && a.reverse()
  }
})();
jx.grid.EventManager = {};
(function() {
  function f(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    a.grid.event = this;
    this._map = {}
  }
  var g = goog.getObjectByName("jx.grid"), d = goog.getObjectByName("jx.util");
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
  b.register = function(a, c, e) {
    if(d.isString(a)) {
      this._parseAndAdd(a, c, e)
    }else {
      if(d.isNotNull(a.e)) {
        this._parseAndAdd(a.e, a.f, a.t)
      }else {
        for(var b, c = a.length, l;b < c;b++) {
          d.isNotNull(l = a[b]) && this._parseAndAdd(l.e, l.f, l.t)
        }
      }
    }
  };
  b.bind = function(a, c, e) {
    if(d.isString(a)) {
      this._parseAndAdd(a, c, e)
    }else {
      for(var b in a) {
        a.hasOwnProperty(b) && this._parseAndAdd(b, a[b], c)
      }
    }
  };
  b._parseAndAdd = function(a, c, e) {
    d.isNull(e) && (e = window);
    var a = d.split(a), b = a.length, l = 0;
    if(d.isFunction(c)) {
      for(;l < b;l++) {
        this._addHandler(a[l], c, e)
      }
    }else {
      if(d.isString(c)) {
        for(var c = d.split(c), j = c.length, h, f;l < b;l++) {
          h = a[l];
          for(f = 0;f < j;f++) {
            this._addHandler(h, e[c[f]], e)
          }
        }
      }else {
        for(j = c.length;l < b;l++) {
          h = a[l];
          for(f = 0;f < j;f++) {
            this._addHandler(h, c[f], e)
          }
        }
      }
    }
  };
  b._addHandler = function(a, c, e) {
    this._map.hasOwnProperty(a) || (this._map[a] = []);
    this._map[a].push({fn:c, target:e})
  };
  b.unregister = function(a, c) {
    var e = this._map;
    if(e.hasOwnProperty(a)) {
      var b = e[a];
      if(d.isNull(c)) {
        b.length = 0, delete e[a]
      }else {
        for(var l = 0, j = b.length;l < j;l++) {
          if(b[l].fn === c) {
            b.removeAt(l);
            b.length === 0 && delete e[a];
            break
          }
        }
      }
    }
  };
  b.trigger = function(a, c, e, b) {
    var l = this._map;
    if(l.hasOwnProperty(a) && (a = l[a], l = a.length)) {
      var d = 0;
      if(e) {
        if(c && c.length) {
          for(;d < l;d++) {
            e = a[d], e.fn.apply(e.target, c)
          }
        }else {
          for(;d < l;d++) {
            e = a[d], e.fn.call(e.target)
          }
        }
      }else {
        b = b || [];
        if(c && c.length) {
          for(;d < l;d++) {
            e = a[d], b.push(e.fn.apply(e.target, c))
          }
        }else {
          for(;d < l;d++) {
            e = a[d], b.push(e.fn.call(e.target))
          }
        }
        return b
      }
    }
  };
  b.triggerMultiple = function(a, c, e) {
    var a = a.split(","), b = 0, l = a.length;
    if(e) {
      for(e = [];b < l;b++) {
        this.trigger(a[b], c, !1, e)
      }
      return e
    }else {
      for(;b < l;b++) {
        this.trigger(a[b], c, !0)
      }
    }
  };
  b.triggerInvalid = function(a, c) {
    var e = this.trigger(a, c);
    return e && e.some(function(e) {
      return e === !1
    })
  };
  b.sendToBack = function(a, c) {
    for(var e = this._map[a], b = e.length, l, d = -1, h = 0;h < b;h++) {
      if(e[h].fn === c) {
        d = h;
        l = e[h];
        break
      }
    }
    d > -1 && (e.removeAt(h), e.push(l))
  };
  b.sendToFront = function(a, c) {
    for(var e = this._map[a], b = e.length, l, d = -1, h = 0;h < b;h++) {
      if(e[h].fn === c) {
        d = h;
        l = e[h];
        break
      }
    }
    d > -1 && (e.removeAt(h), e.unshift(l))
  }
})();
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
  var d = goog.getObjectByName("jx.util");
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
    d.isNotNull(this.parent) && this.parent.removeChild(this);
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
    d.isNotNull(this.parent) && this.parent.removeChild(this);
    this.removeAllChildren();
    delete this.parent;
    delete this.level
  };
  b.detachDown = function() {
    d.isNotNull(this.parent) && this.parent.removeChild(this);
    this.traverse({post:!0, fn:function() {
      this.detach()
    }})
  };
  b.isRoot = function() {
    return d.isNull(this.parent)
  };
  b.getRoot = function() {
  };
  b.isLeaf = function() {
    return this.children.length === 0
  };
  b.setParent = function(a) {
    if(this.parent !== a) {
      d.isNotNull(this.parent) && this.parent.removeChild(this), this.parent = a, delete this.level, d.isNotNull(a) && a.addChild(this)
    }
  };
  b.hasChild = function(a) {
    return this.childrenMap.hasOwnProperty(a.nodeId)
  };
  b.addChild = function(a) {
    this.hasChild(a) || (this.children.push(a), this.childrenMap[a.nodeId] = this.children.length - 1, a.setParent(this))
  };
  b.addChildAt = function(a, c) {
    var e;
    if(this.hasChild(c)) {
      e = this.childrenMap[c.nodeId];
      if(e === a) {
        return
      }
      this.children.removeAt(e)
    }
    this.children.addAt(a, c);
    d.isNotNull(e) && e < a ? this.resetChildIdx(e) : this.resetChildIdx(a);
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
    d.isNull(a) && (a = 0);
    for(var c = this.children, e = c.length, b = this.childrenMap;a < e;a++) {
      b[c[a].nodeId] = a
    }
  };
  b.removeAllChildren = function() {
    for(var a = 0, c = this.children, e = c.length;a < e;a++) {
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
    var a = {res:[], up:!0, post:!0, fn:function(c) {
      c.res.push(this)
    }};
    this.traverse(a);
    a.res.pop();
    return a.res
  };
  b.getDescendents = function() {
    var a = {res:[], fn:function(c) {
      c.res.push(this)
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
      var e = 0, b = this.children, l = b.length;
      if(a.post) {
        for(;e < l;e++) {
          b[e].traverse(a, e)
        }
        this.callFn(a, c)
      }else {
        if(this.callFn(a, c), a.propagate === !1) {
          delete a.propagate
        }else {
          for(;!a.stop && e < l;e++) {
            b[e].traverse(a, e)
          }
        }
      }
    }
    return a
  };
  b.traverseChildren = function(a) {
    for(var c = 0, e = this.children, b = e.length;c < b;c++) {
      e[c].traverse(a, c)
    }
  };
  b.traverseParent = function(a) {
    d.isNotNull(this.parent) && this.parent.traverse(a)
  };
  b.callFn = function(a, c) {
    if(!a.stop) {
      d.isNull(a.target) ? d.callFn(this, a.fn, a, c) : (a.node = this, d.callFn(a.target, a.fn, a, c))
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
    if(d.isNull(a)) {
      a = this.list
    }
    for(var c = this._options.nodeKey, e = this.map, b = a.length, l = 0;l < b;l++) {
      this.attachNode(e[a[l][c]])
    }
  };
  b.makeTree = function(a) {
    if(d.isNull(a)) {
      a = this.list
    }
    for(var c = 0, e = a.length;c < e;c++) {
      this.createNode(a[c])
    }
  };
  b.hasNode = function(a) {
    return d.isNotNull(a) && this.map.hasOwnProperty(a[this._options.nodeKey])
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
      for(var e = this.infants[c], b = 0, l = e.length;b < l;b++) {
        a.addChild(e[b])
      }
      e.length = 0;
      delete this.infants[c]
    }
  };
  b.attachNode = function(a) {
    var c = a.nodeId, e = a.data[this._options.parentKey];
    this.adoptInfants(a, c);
    if(d.isNull(e) || e == c) {
      return this.root.addChild(a), !0
    }
    if(this.map.hasOwnProperty(e)) {
      return this.map[e].addChild(a), !0
    }
    this.addToInfants(a, e);
    return!1
  };
  b.changeNodeId = function(a, c, e) {
    if(c !== e) {
      delete this.map[c], this.map[e] = a, this.removeChildren(a), a.nodeId = a.data[this._options.nodeKey] = e, d.isNotNull(a.parent) && (a.parent.childrenMap[e] = a.parent.childrenMap[c], delete a.parent.childrenMap[c]), this.adoptInfants(a, e)
    }
  };
  b.changeParentId = function(a, c, e) {
    c !== e && (d.isNull(a.parent) && this.removeFromInfants(a, c), c = this.map[e], a.setParent(c), a.data[this._options.parentKey] = e, d.isNull(c) && this.addToInfants(a, e))
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
    d.isNull(c) && (c = a.data[this._options.parentKey]);
    this.infants.hasOwnProperty(c) && (this.infants[c].remove(a), this.infants[c].length === 0 && delete this.infants[c])
  };
  b.removeChildren = function(a) {
    a.children.length !== 0 && (this.infants.hasOwnProperty(a.nodeId) || (this.infants[a.nodeId] = []), this.infants[a.nodeId].pushList(a.children), a.removeAllChildren())
  };
  b.sortList = function(a) {
    d.isNull(a) ? a = [] : a.length = 0;
    this.root.traverseChildren({fn:function() {
      a.push(this.data)
    }})
  }
})();
jx.grid.Grid = {};
(function() {
  function f(c) {
    this.mid = c.mid;
    b.call(this, c)
  }
  var g = goog.getObjectByName("jx.grid"), d = goog.getObjectByName("jx.util");
  goog.getObjectByName("echo");
  var b = goog.getObjectByName("jx.grid.BaseModule");
  goog.getObjectByName("TimeWatch");
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
  goog.inherits(f, b);
  f.getInstance = function(c) {
    return new f(c)
  };
  var a = f.prototype;
  a._defaultOptions = function() {
    return{classGrid:"jgrid", border:"1px solid #868686", width:void 0, font:"15px Arial,Helvetica,sans-serif", style:"", borderSide:!0, imageUrl:"../images/", links:{data:"dataMgr.all", datalen:"dataMgr.all.length", shown:"dataMgr.datalist", set:"dataMgr.set", add:"dataMgr.add", addList:"dataMgr.addList", update:"dataMgr.update", updateByKey:"dataMgr.updateByKey", updateList:"dataMgr.updateList", remove:"dataMgr.remove", removeList:"dataMgr.removeList", select:"dataMgr.executeSelect", undo:"dataMgr.undo", 
    redo:"dataMgr.redo", addFilter:"dataMgr.addFilter", removeFilter:"dataMgr.removeFilter", check:"collapser.checkMgr.checkList checkMgr.checkList", checked:"collapser.checkMgr.getCheckList checkMgr.getCheckList", removeChecked:"collapser.checkMgr.removeChecked checkMgr.removeChecked", register:"event.register", trigger:"event.trigger", bind:"event.bind", unregister:"event.unregister", unbind:"event.unregister", collen:"colDefMgr.length"}, autoWidth:!1, showMessage:!1}
  };
  a._init = function(c) {
    var e = this._ctnr = c.container, a = this._options, b;
    this.name = a.name;
    this._drag = !1;
    this._lastH = this._lastW = null;
    this._vars = {scrollbarDim:void 0};
    e = this._ctnr = $("<div id='" + this.mid + "' class='" + a.classGrid + "' " + (d.isNull(a.width) ? "" : "style='width:" + a.width + "px' ") + "tabIndex='0'>").appendTo(Util$.safe$(e));
    this._vars.scrollbarDim = Util$.calScrollbarDims(e);
    b = this.event = g.create("EventManager", {grid:this, options:a.EventManager});
    this.colDefMgr = g.create("ColumnManager", {grid:this, colDefs:c.colDefs, options:a.ColDefManager});
    this.dataMgr = g.create("DataManager", {grid:this, datalist:c.datalist, options:a.DataManager});
    a.CheckManager && (this.checkMgr = g.create("CheckManager", {grid:this, options:a.CheckManager}));
    if(a.Collapser) {
      this.collapser = g.create("Collapser", {grid:this, options:a.Collapser}), this.collapser.__init()
    }
    a.ColGroup && (this.colGroup = g.create("ColumnGroup", {grid:this, options:a.ColGroup}));
    a.SelectionManager && (this.selMgr = g.create("SelectionManager", {grid:this, options:a.SelectionManager}));
    a.EditManager && (this.editMgr = g.create("EditManager", {grid:this, options:a.EditManager}));
    a.ColHeader && (this.header = g.create("ColumnHeader", {grid:this, container:e, options:a.ColHeader}));
    a.SearchManager && (this.search = g.create("SearchManager", {grid:this, container:e, options:a.SearchManager}));
    a.MenuBar && (this.menubar = g.create("MenuBar", {grid:this, container:e, options:a.MenuBar}));
    this.view = g.create("ViewportManager", {grid:this, container:e, options:a.ViewportManager});
    a.TooltipManager && (this.tooltip = g.create("TooltipManager", {grid:this, container:e, options:a.TooltipManager}));
    a.DataCreator && (this.creator = g.create("DataCreator", {grid:this, container:e, options:a.DataCreator}));
    a.Footer && (this.footer = g.create("Footer", {grid:this, container:e, options:a.Footer}));
    a.autoWidth && b.bind("onResizeCanvasWidth", this.width, this);
    this._createCss();
    b.trigger("onBeforeRenderModules", !1, !0);
    b.trigger("onRenderModules", !1, !0);
    b.trigger("onAfterRenderModules", !1, !0);
    this.msg = $("<div id='" + this.mid + "msg' class='msg' onmousedown='$(this).hide(1000)' style='position:relative;padding-left:4px;overflow:hidden;z-index:100;font-size:12px;height:21px;line-height:21px'></div>").appendTo(e).hide();
    e = e[0];
    this._lastW = e.clientWidth;
    this._lastH = e.clientHeight;
    this._registerLinks(a.links)
  };
  a._bindEvents = function() {
    g._bindGlobalEvents();
    var c = this;
    this._ctnr.bind({keydown:function(e) {
      c._keydown(e)
    }, keyup:function(e) {
      c._keyup(e)
    }, keypress:function(e) {
      c._keypress(e)
    }, mousein:function(e) {
      c._mousein(e)
    }, mouseout:function(e) {
      c._mouseout(e)
    }, mouseenter:function(e) {
      c._mouseenter(e)
    }, mouseleave:function(e) {
      c._mouseleave(e)
    }, mouseover:function(e) {
      c._mouseover(e)
    }, mousedown:function(e) {
      c._mousedown(e)
    }, click:function(e) {
      c._click(e)
    }, dblclick:function(e) {
      c._dblclick(e)
    }});
    this._charts = []
  };
  a.destroy = function() {
    try {
      this.dispatchEvent({type:"beforeDispose"}), d.isEmptyObj(g.m.Grid) && g._unbindGlobalEvents(), this.event.trigger("onDestroy", !1, !0), g._destroy(this, {name:"Grid", module:"event", $:"_ctnr", map:"_options", style:"_style _dynStyle"}), this.dispose()
    }catch(c) {
      return c
    }
  };
  a._registerLinks = function(c) {
    var e, a, b, j, h, f, g, n, m, o;
    a:for(e in c) {
      if(c.hasOwnProperty(e) && !(e in this)) {
        a = d.split(c[e]);
        b = a.length;
        j = 0;
        b:for(;j < b;j++) {
          if(h = a[j].split("."), f = h.length, !(f < 1)) {
            g = this;
            n = this;
            m = "";
            for(o = 0;o < f;o++) {
              if(h[o] in g) {
                n = g, g = g[m = h[o]]
              }else {
                continue b
              }
            }
            this._registerLink(e, g, n, m);
            continue a
          }
        }
      }
    }
  };
  a._registerLink = function(c, e, a, b) {
    if(this.hasOwnProperty(c)) {
      return!1
    }
    this[c] = d.isFunction(e) ? function() {
      return e.apply(a, arguments)
    } : function() {
      return a[b]
    };
    return!0
  };
  a._createCss = function() {
    var c = {type:"beforeCreateCss", css:[]}, e = this._options, a = this.event;
    this.dispatchEvent(c);
    var b = a.trigger("onCreateCss"), b = b ? b.join("") : "", c = d.sprint("%selector%{overflow:hidden;font:%font%;%border%%style%}%submodule%", {selector:"#" + this.mid, font:e.font, border:e.borderSide ? "border:" + e.border + ";" : "border-top:" + e.border + ";border-bottom:" + e.border + ";", style:e.style, submodule:c.css.join("") + b});
    this._style = d.createStyle(c);
    c = {type:"beforeCreateDynamicCss", css:[]};
    this.dispatchEvent(c);
    b = (b = a.trigger("onCreateDynamicCss")) ? b.join("") : "";
    this._dynStyle = d.createStyle(c.css.join("") + ";" + b)
  };
  a._recreateDynamicCss = function() {
    var c = this.event.trigger("onCreateDynamicCss");
    (c = c ? c.join("") : "") && d.setStyle(this._dynStyle, c)
  };
  a._keydown = function(c) {
    var e = this.event, a = [c], c = c.which;
    e.triggerInvalid("onBeforeKeydown", a) || (e.trigger("keydown_" + c, a, !0), e.trigger("keydown", a, !0))
  };
  a._keyup = function(c) {
    var e = this.event, a = [c], c = c.which;
    e.triggerInvalid("onBeforeKeyup", a) || (e.trigger("keyup_" + c, a, !0), e.trigger("keyup", a, !0))
  };
  a._keypress = function(c) {
    var e = this.event, a = [c], c = c.which;
    e.triggerInvalid("onBeforeKeypress", a) || (e.trigger("keypress_" + c, a, !0), e.trigger("keypress", a, !0))
  };
  a._mousein = function(c) {
    var e = this.event, c = [c];
    e.triggerInvalid("onBeforeMousein", c) || (this._drag && e.trigger("dragin", c, !0), e.trigger("mousein", c, !0))
  };
  a._mouseout = function(c) {
    var e = this.event, c = [c];
    e.triggerInvalid("onBeforeMouseout", c) || (this._drag && e.trigger("dragout", c, !0), e.trigger("mouseout", c, !0))
  };
  a._mouseenter = function(c) {
    var e = this.event, c = [c];
    e.triggerInvalid("onBeforeMouseenter", c) || (this._drag && e.trigger("dragenter", c, !0), e.trigger("mouseenter", c, !0))
  };
  a._mouseleave = function(c) {
    var e = this.event, c = [c];
    e.triggerInvalid("onBeforeMouseleave", c) || (this._drag && e.trigger("dragleave", c, !0), e.trigger("mouseleave", c, !0))
  };
  a._mousemove = function(c) {
    var e = this.event, c = [c];
    e.triggerInvalid("onBeforeMousemove", c) || (this._drag && e.trigger("dragmove", c, !0), e.trigger("mousemove", c, !0))
  };
  a._mouseover = function(c) {
    var e = this.event, c = [c];
    e.triggerInvalid("onBeforeMouseover", c) || (this._drag && e.trigger("dragover", c, !0), e.trigger("mouseover", c, !0))
  };
  a._mousedown = function(c) {
    var e = this.event, c = [c];
    this._drag = !0;
    e.triggerInvalid("onBeforeMousedown", c) || e.trigger("mousedown", c, !0)
  };
  a._mouseup = function(c) {
    var e = this.event, a = [c];
    this._drag = !1;
    e.trigger("unsetDrag", !1, !0);
    this.containsEvent(c) && (e.triggerInvalid("onBeforeMouseup", a) || e.trigger("mouseup", a, !0))
  };
  a._click = function(c) {
    var e = this.event, c = [c];
    e.triggerInvalid("onBeforeClick", c) || e.trigger("click", c, !0)
  };
  a._dblclick = function(c) {
    var e = this.event, c = [c];
    e.triggerInvalid("onBeforeDblclick", c) || e.trigger("dblclick", c, !0)
  };
  a._resize = function(c) {
    var e = this.event, a = !1, b = this._ctnr[0], d = this._lastW, h = this._lastH, f = b.clientWidth, b = b.clientHeight;
    if(f >= 1 && d !== f) {
      e.trigger("resizeWidth", [f, d], !0), this._lastW = f, a = !0
    }
    if(b >= 1 && h !== b) {
      e.trigger("resizeHeight", [b, h], !0), this._lastH = b, a = !0
    }
    a && e.trigger("resize", [c], !0)
  };
  a.width = function(c) {
    var e = this._ctnr[0], a = e.clientWidth, b = this.event;
    if(!c) {
      return a
    }
    typeof c != "number" && (c = parseInt(c));
    if(c < 1 || c === a || !isFinite(c)) {
      return a
    }
    e.style.width = c + "px";
    b.trigger("resizeWidth", [c, this._lastW], !0);
    this._lastW = c;
    b.trigger("resize", !1, !0);
    return c
  };
  a.height = function(c) {
    var e = this._ctnr[0], a = e.clientHeight, b = this.event;
    if(!c) {
      return a
    }
    typeof c != "number" && (c = parseInt(c));
    if(c < 1 || c === a || !isFinite(c)) {
      return a
    }
    e.style.height = c + "px";
    b.trigger("resizeHeight", [c, this._lastH], !0);
    this._lastH = c;
    b.trigger("resize", !1, !0);
    return c
  };
  a.getCellByIdAndKey = function(c, e) {
    return g.create("Cell", {grid:this, datarow:this.dataMgr.getById(c), colDef:this.colDefMgr.getByKey(e)})
  };
  a.getCellByIdx = function(c, e) {
    return g.create("Cell", {grid:this, row:c, col:e})
  };
  a.error = function(c) {
    for(var e = g.error[c], a = 1, b = arguments.length;a < b;a++) {
      e = e.replace(RegExp("%" + (a - 1), "g"), arguments[a])
    }
    e = Error(e);
    e.code = c;
    this.printError(e.message);
    this.event.trigger("onError", [e], !0);
    return e
  };
  a.printError = function(c) {
    if(this._options.showMessage) {
      var e = this.msg, a = e[0], b = a.style;
      a.innerHTML = c;
      b.width = this._ctnr[0].clientWidth + "px";
      b.background = "#ffebe8";
      b.color = "#333";
      e.show();
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function() {
        e.hide(1E3)
      }, 5E3)
    }
  };
  a.printMessage = function(c) {
    if(this._options.showMessage) {
      var e = this.msg, a = e[0], b = a.style;
      a.innerHTML = c;
      b.width = this._ctnr[0].clientWidth + "px";
      b.background = "#dfdfdf";
      b.color = "#6f6f6f";
      e.show();
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function() {
        e.hide(1E3)
      }, 5E3)
    }
  };
  a.containsEvent = function(c) {
    return d.contains(this._ctnr[0], c.target)
  };
  a.getChart = function(c) {
    return this._charts[c]
  };
  a.chart = function(c, e, a, b) {
    var d, e = e.toLowerCase();
    switch(e) {
      case "area":
        e = "corechart";
        d = "AreaChart";
        break;
      case "bar":
        e = "corechart";
        d = "BarChart";
        break;
      case "candle":
        e = "corechart";
        d = "CandlestickChart";
        break;
      case "column":
        e = "corechart";
        d = "ColumnChart";
        break;
      case "combo":
        e = "corechart";
        d = "ComboChart";
        break;
      case "gauge":
        e = "gauge";
        d = "Gauge";
        break;
      case "geo":
        e = "geochart";
        d = "GeoChart";
        break;
      case "line":
        e = "corechart";
        d = "LineChart";
        break;
      case "pie":
        e = "corechart";
        d = "PieChart";
        break;
      case "scatter":
        e = "corechart";
        d = "ScatterChart";
        break;
      case "table":
        e = "table";
        d = "Table";
        break;
      case "treemap":
        e = "treemap";
        d = "TreeMap";
        break;
      default:
        throw Error("unknown chart type: " + e);
    }
    google.load("visualization", "1", {packages:[e]});
    var h = this, f = this.colDefMgr, g = this.dataMgr, n = a.map(function(e) {
      if(e = f.getByKey(e)) {
        return e
      }
      throw Error("column key not found");
    }), m = g.exportToArray(a);
    google.setOnLoadCallback(function() {
      for(var e = new google.visualization.DataTable, f = 0, q = n.length, s, t;f < q;f++) {
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
        e.addColumn(t || f === 0 && "string" || "number", s.name)
      }
      e.addRows(m);
      var u = h._charts[c] = new google.visualization[d](document.getElementById(c));
      u.draw(e, b);
      h.event.bind("onAfterRefresh", function() {
        e.removeRows(0, e.getNumberOfRows());
        e.addRows(g.exportToArray(a));
        u.draw(e, b)
      })
    })
  }
})();
jx.grid.SelectionManager = {};
(function() {
  function f(c) {
    this.mid = c.mid;
    this.grid = c.grid;
    this.grid.selMgr = this;
    this._options = g._extend({rowSelKey:this.grid.dataMgr.idKey, bgColorSelection:"#DCEBFE", bgColorLast:"#f1ca7f", bgColorRange:"#D9D9D9", classSelection:"jgrid-selection", classLast:"selection-last", classRange:"selection-range", multiSelectEnabled:!1, classRowSelected:"rowSelected", highlightRowEnabled:!0, bgColorRowSelected:"#d8dfea"}, c.options);
    this._consts = {_UP:1, _DOWN:2, _LEFT:3, _RIGHT:4, _PGDN:5, _PGUP:6, _HOME:7, _END:8, _NAVKEYS:{}};
    this._consts._NAVKEYS = d.which(["enter", "tab", "arrow", "pgdn", "pgup", "home", "end"]);
    this._rows = {length:0};
    this._cols = {length:0};
    this.__init()
  }
  var g = goog.getObjectByName("jx.grid"), d = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var b = goog.getObjectByName("jx.grid.Cell");
  goog.exportSymbol("jx.grid.SelectionManager", f);
  f.getInstance = function(c) {
    return new f(c)
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
    var c, e = this._rows, a = this._cols;
    for(c in e) {
      e.hasOwnProperty(c) && c !== "length" && g._deleteMap(e, c)
    }
    for(c in a) {
      a.hasOwnProperty(c) && c !== "length" && g._deleteMap(a, c)
    }
    g._destroy(this, {name:"SelectionManager", path:"selMgr", map:"_rows _cols _range _last _consts _options"})
  };
  a._onCreateCss = function() {
    var c = this.grid.event.trigger("onBeforeCreateSelCss"), e = "#" + this.grid.mid + " .", a = this._options, c = c || [];
    a.highlightRowEnabled === !0 && c.push(e + a.classRowSelected + " > *{background:" + a.bgColorRowSelected + "}");
    a.multiSelectEnabled === !0 && (c.push(e + a.classSelection + "{background:" + a.bgColorSelection + "}"), c.push(e + a.classRange + "{background:" + a.bgColorRange + "}"));
    c.push(e + a.classLast + "{background:" + a.bgColorLast + "}");
    return c.join("\n")
  };
  a._onGetCellClass = function(c, e, a, b) {
    var f = "", h = this._last, g = this._range, k = this._rows, n = this._options;
    d.isNotNull(h) && h.getDatarow() === a && h.getColDef() === b && (f += n.classLast);
    n.multiSelectEnabled === !0 && (d.isNotNull(g) && g.getDatarow() === a && g.getColDef() === b && (f += " " + n.classRange), k.hasOwnProperty(c) && k[c].hasOwnProperty(e) && (f += " " + n.classSelection));
    return f
  };
  a._mousedownCanvas = function(c, e) {
    if(!d.isNotNull(this._last) || !this._last.equals(e)) {
      this.grid.event.trigger("onBeforeSelect", [c, e], !0), this._options.multiSelectEnabled === !1 ? this.selectCell(e) : c.shiftKey && d.isNotNullAnd(this._last, this._range) ? this.selectRange(e) : c.ctrlKey ? e.getKey() === this._options.rowSelKey ? this.addRow(e) : this.addCell(e) : this.selectCell(e)
    }
  };
  a._dragoverCanvas = function(c, e) {
    this._options.multiSelectEnabled === !1 ? this.selectCell(e) : d.isNotNullAnd(this._last, this._range) && this.selectRange(e)
  };
  a._keydownCanvas = function(c) {
    var e = this._last;
    if(d.isNullOr(e, this._range)) {
      this._consts._NAVKEYS[c.which] && this.selectCell(g.create("Cell", {grid:this.grid, row:this.grid.view._getFirstSafeVisibleRow(), col:this.grid.view._getFirstSafeVisibleCol()}))
    }else {
      var a = this.grid.event;
      if(this._consts._NAVKEYS[c.which]) {
        if(!a.triggerInvalid("onBeforeNavigate", [c])) {
          var b;
          c.preventDefault();
          switch(c.which) {
            case d.keyMapKeydown.tab:
              b = c.shiftKey ? this._idxToCell(this._consts._LEFT, e) : this._idxToCell(this._consts._RIGHT, e);
              this.selectCell(b);
              break;
            case d.keyMapKeydown.enter:
              b = c.shiftKey ? this._idxToCell(this._consts._UP, e) : this._idxToCell(this._consts._DOWN, e);
              this.selectCell(b);
              break;
            case d.keyMapKeydown.up:
              this._options.multiSelectEnabled && c.shiftKey ? (b = this._idxToCell(this._consts._UP, this._range), this.selectRange(b)) : (b = this._idxToCell(this._consts._UP, e), this.selectCell(b));
              break;
            case d.keyMapKeydown.down:
              this._options.multiSelectEnabled && c.shiftKey ? (b = this._idxToCell(this._consts._DOWN, this._range), this.selectRange(b)) : (b = this._idxToCell(this._consts._DOWN, e), this.selectCell(b));
              break;
            case d.keyMapKeydown.left:
              this._options.multiSelectEnabled && c.shiftKey ? (b = this._idxToCell(this._consts._LEFT, this._range), this.selectRange(b)) : (b = this._idxToCell(this._consts._LEFT, e), this.selectCell(b));
              break;
            case d.keyMapKeydown.right:
              this._options.multiSelectEnabled && c.shiftKey ? (b = this._idxToCell(this._consts._RIGHT, this._range), this.selectRange(b)) : (b = this._idxToCell(this._consts._RIGHT, e), this.selectCell(b));
              break;
            case d.keyMapKeydown.pgup:
              this._options.multiSelectEnabled && c.shiftKey ? (b = this._idxToCell(this._consts._PGUP, this._range), this.selectRange(b)) : (b = this._idxToCell(this._consts._PGUP, e), this.selectCell(b));
              break;
            case d.keyMapKeydown.pgdn:
              this._options.multiSelectEnabled && c.shiftKey ? (b = this._idxToCell(this._consts._PGDN, this._range), this.selectRange(b)) : (b = this._idxToCell(this._consts._PGDN, e), this.selectCell(b));
              break;
            case d.keyMapKeydown.space:
              b = c.shiftKey ? this._idxToCell(this._consts._PGUP, e) : this._idxToCell(this._consts._PGDN, e);
              this.selectCell(b);
              break;
            case d.keyMapKeydown.home:
              this._options.multiSelectEnabled && c.shiftKey ? (b = this._idxToCell(this._consts._HOME, this._range), this.selectRange(b)) : (b = this._idxToCell(this._consts._HOME, e), this.selectCell(b));
              break;
            case d.keyMapKeydown.end:
              this._options.multiSelectEnabled && c.shiftKey ? (b = this._idxToCell(this._consts._END, this._range), this.selectRange(b)) : (b = this._idxToCell(this._consts._END, e), this.selectCell(b))
          }
          a.trigger("onAfterNavigate", [b], !0)
        }
      }else {
        if(this._cols.length === 1) {
          var f, h = this.grid.colDefMgr, q, k = this._cols;
          b = c.which;
          var n = [c, null, e];
          for(q in k) {
            if(k.hasOwnProperty(q) && q !== "length") {
              f = h.get(q).key, f = "keydownColSel_" + f, n[1] = k[q], a.trigger(f + "_" + b, n, !0), a.trigger(f, n, !0)
            }
          }
        }
        if(this._rows.length === 1) {
          var m;
          q = this._rows;
          b = c.which;
          n = [c, null, e];
          for(m in q) {
            q.hasOwnProperty(m) && m !== "length" && (n[1] = q[m], a.trigger("keydownRowSel_" + b, n, !0), a.trigger("keydownRowSel", n, !0))
          }
        }
        n = [c, this._rows, this._cols];
        a.trigger("keydownSel_" + c.which, n, !0);
        a.trigger("keydownSel", n, !0)
      }
    }
  };
  a.getCell = function() {
    if(d.isNotNull(this._last)) {
      return this._last
    }
  };
  a._isSelected = function(c) {
    return d.isNotNull(this._last) && this._last.equals(c)
  };
  b.prototype.isSelected = function() {
    return this.grid.selMgr._isSelected(this)
  };
  a._getCellIdxToNavigate = function(c, e, a) {
    switch(c) {
      case this._consts._RIGHT:
        a < this.grid.colDefMgr.length() - 1 && a++;
        break;
      case this._consts._LEFT:
        a > 0 && a--;
        break;
      case this._consts._DOWN:
        e < this.grid.dataMgr.datalist.length - 1 && e++;
        break;
      case this._consts._UP:
        e > 0 && e--;
        break;
      case this._consts._PGDN:
        e += this.grid.view._options.rowsPerPage;
        e > this.grid.dataMgr.datalist.length - 1 && (e = this.grid.dataMgr.datalist.length - 1);
        break;
      case this._consts._PGUP:
        e -= this.grid.view._options.rowsPerPage;
        e < 0 && (e = 0);
        break;
      case this._consts._HOME:
        e = 0;
        break;
      case this._consts._END:
        e = this.grid.dataMgr.datalist.length - 1
    }
    return[e, a]
  };
  a._idxToCell = function(c, e) {
    var a = this._getCellIdxToNavigate(c, e.getRowIdx(), e.getColIdx());
    return g.create("Cell", {grid:this.grid, row:a[0], col:a[1]})
  };
  a.selectRow = function(c) {
    var e = c.getRowIdx(), a = c.getColIdx();
    this._setRange(e, a, c);
    this._setLast(e, a, c);
    this._setSelMap(this._getRowMap(e, a, c))
  };
  a.selectCell = function(c, e) {
    this.grid.event.trigger("onBeforeSelectCell", [c], !0);
    if(this._options.multiSelectEnabled && c.getKey() === this._options.rowSelKey) {
      this.selectRow(c)
    }else {
      var a = c.getRowIdx(), b = c.getColIdx();
      this._setRange(a, b, c, e);
      this._setLast(a, b, c);
      this._setSelMap(this._getCellMap(a, b, c))
    }
    this.grid.event.trigger("onAfterSelectCell", [c], !0)
  };
  a.onBeforeDataChange = function() {
  };
  a._onBeforeRerender = function() {
    if(d.isNotNull(this._last)) {
      this.toSelect = this._last
    }
    this.empty()
  };
  a.onAfterRerender = function() {
    d.isNotNull(this.toSelect) && (this.selectCell(this.toSelect, !0), this.grid.view.scrollToRowLazy(this.toSelect.getRowIdx()))
  };
  a.addRow = function(c) {
    var e = c.getRowIdx(), a = c.getColIdx();
    this._setRange(e, a, c);
    this._setLast(e, a, c);
    this._addSelMap(this._getRowMap(e, a, c))
  };
  a.addCell = function(c) {
    var e = c.getRowIdx(), a = c.getColIdx();
    this._setRange(e, a, c);
    this._setLast(e, a, c);
    this._addSelMap(this._getCellMap(e, a, c))
  };
  a.selectRange = function(c) {
    var e = c.getRowIdx(), a = c.getColIdx(), b = this._last.getRowIdx(), d = this._last.getColIdx(), h = b < e ? b : e, b = b < e ? e : b, f;
    this._setRange(e, a, c);
    c.getKey() === this._options.rowSelKey ? (f = 0, d = this.grid.colDefMgr.length() - 1) : (f = d < a ? d : a, d = d < a ? a : d);
    this._setSelMap(this._getRangeMap(h, f, b, d, e, a, c));
    return{minRow:h, minCol:f, maxRow:b, maxCol:d}
  };
  a._setLast = function(c, e, a) {
    var e = this._last, b;
    d.isNotNull(e) && (b = e.getRowIdx(), c !== b && d.isNotNull(this._range) && b !== this._range.getRowIdx() && this.grid.view.unlockRowById(e.getId()), e.get$().removeClass(this._options.classLast), this._options.highlightRowEnabled === !0 && $(e.getRowNode()).removeClass(this._options.classRowSelected), d.isNull(a) && delete this._last);
    if(!d.isNull(a)) {
      (this._last = a).get$().addClass(this._options.classLast), this._options.highlightRowEnabled === !0 && $(a.getRowNode()).addClass(this._options.classRowSelected), this.grid.view.lockRowByIdx(c)
    }
  };
  a._setRange = function(c, e, a, b) {
    var f = this._range;
    if(d.isNotNull(f)) {
      var h = f.getRowIdx();
      if(c === h && e === f.getColIdx()) {
        return
      }
      c !== h && d.isNotNull(this._last) && h !== this._last.getRowIdx() && this.grid.view.unlockRowById(f.getId());
      f.get$().removeClass(this._options.classRange);
      d.isNull(a) && delete this._range
    }
    if(!d.isNull(a)) {
      (this._range = a).get$().addClass(this._options.classRange), a = this.grid.view, a.lockRowByIdx(c), b || a.scrollToLazy(c, e)
    }
  };
  a._addSelMap = function(c) {
    var e = this._rows, a, d, f, h;
    for(f in c) {
      if(c.hasOwnProperty(f) && (d = c[f], e.hasOwnProperty(f))) {
        for(h in a = e[f], d) {
          d.hasOwnProperty(h) && a.hasOwnProperty(h) && (d[h] instanceof b && (a[h] = d[h]), delete d[h])
        }
      }
    }
    this.addOrRemoveCss({}, !0);
    this._addToMaps(c)
  };
  a._setSelMap = function(c) {
    var e = this._rows, a, d, f, h, g = {};
    for(f in e) {
      if(e.hasOwnProperty(f) && f !== "length") {
        if(a = e[f], c.hasOwnProperty(f)) {
          for(h in d = c[f], a) {
            a.hasOwnProperty(h) && h !== "length" && (d.hasOwnProperty(h) ? (d[h] instanceof b && (a[h] = d[h]), delete d[h]) : (g.hasOwnProperty(f) || (g[f] = {}), g[f][h] = !0))
          }
        }else {
          for(h in d = g[f] = {}, a) {
            a.hasOwnProperty(h) && h !== "length" && (d[h] = !0)
          }
        }
      }
    }
    this._removeFromMaps(g);
    this.addOrRemoveCss({}, !1);
    this._addSelMap(c)
  };
  a.addOrRemoveCss = function(c, e) {
    var a = [], f, j, h, g = this.grid.view;
    for(f in c) {
      if(c.hasOwnProperty(f)) {
        for(j in h = c[f], h) {
          h.hasOwnProperty(j) && (h[j] instanceof b ? a.push(h[j].getNode()) : a.push(g.getCell(f, j)))
        }
      }
    }
    a = a.filter(function(e) {
      return d.isNotNull(e)
    });
    e ? $(a).addClass(this._options.classSelection) : $(a).removeClass(this._options.classSelection)
  };
  a._addToMaps = function(c) {
    var e, a, b, f = this._rows, h = this._cols, g;
    for(e in c) {
      if(c.hasOwnProperty(e)) {
        for(a in g = c[e], g) {
          g.hasOwnProperty(a) && (b = d.isNull(b = g[a]) ? !0 : b, f.hasOwnProperty(e) ? f[e].length++ : (f[e] = {length:1}, f.length++), f[e][a] = b, h.hasOwnProperty(a) ? h[a].length++ : (h[a] = {length:1}, h.length++), h[a][e] = b)
        }
      }
    }
  };
  a._removeFromMaps = function(a) {
    var e, b, d = this._rows, f = this._cols, h;
    for(e in a) {
      if(a.hasOwnProperty(e)) {
        for(b in h = a[e], h) {
          h.hasOwnProperty(b) && (--d[e].length === 0 ? (delete d[e], d.length--) : delete d[e][b], --f[b].length === 0 ? (delete f[b], f.length--) : delete f[b][e])
        }
      }
    }
  };
  a._getCellMap = function(a, e, b) {
    var d = {};
    d[a] = {};
    d[a][e] = b;
    return d
  };
  a._getRowMap = function(a, e, b) {
    var d = {}, f = this.grid.colDefMgr.length(), h = 0;
    for(d[a] = {};h < f;h++) {
      d[a][h] = !0
    }
    d[a][e] = b;
    return d
  };
  a._getRangeMap = function(a, e, b, d, f, h, g) {
    for(var k = {}, n;a <= b;a++) {
      k[a] = {};
      for(n = e;n <= d;n++) {
        k[a][n] = !0
      }
    }
    k[f][h] = g;
    return k
  };
  a.empty = function() {
    this._setLast();
    this._setRange();
    this._setSelMap({})
  }
})();
jx.grid.EditManager = {};
jx.grid.Editor = {};
(function() {
  function f(e) {
    this.mid = e.mid;
    this.grid = e.grid;
    this.grid.editMgr = this;
    this._options = d._extend({classEdit:"jgrid-edit", classCellEditable:"jgrid-editable", classCellNotEditable:"jgrid-notEditable", editableBgEnabled:!1, notEditableBgEnabled:!1, editableBg:"#FFF", notEditableBg:"#F6F6F6", deleteEnabled:!1, editIconEnabled:!0, urlEditIcon:this.grid._options.imageUrl + "editable-small.png", classEditIcon:"edit-icon", editIconWidth:12, editIconPadding:3, basicBackground:"#FFF9D7", classSuccess:"edit-success", successBackground:"#cdf7b6", classFailure:"edit-failure", 
    failureBackground:"#ffcec5"}, e.options);
    this._beginEditKeys = b.which(["number", "alphabet", "del", "backspace"]);
    this.__init()
  }
  function g(e) {
    for(var a in e) {
      e.hasOwnProperty(a) && (this[a] = e[a])
    }
  }
  var d = goog.getObjectByName("jx.grid"), b = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var a = goog.getObjectByName("jx.grid.Cell");
  goog.exportSymbol("jx.grid.EditManager", f);
  goog.exportSymbol("jx.grid.Editor", g);
  f.getInstance = function(e) {
    return new f(e)
  };
  var c = f.prototype;
  c.__init = function() {
    this.bindEvents()
  };
  c.bindEvents = function() {
    var e = {onGetColCellClass:this._onGetColCellClass, keydownCanvas:this._keydownCanvas, onDestroy:this._destroy, dblclickCanvas:this._dblclickCanvas, onCreateDynamicCss:this.onCreateDynamicCss, "onBeforeNavigate onBeforeRefresh onBeforeSelect":this.commit, onBeforeFocusCanvas:this.notActive};
    b.isNull(this.grid.selMgr) ? e.onCreateCss = this._onBeforeCreateSelCss : e.onBeforeCreateSelCss = this._onBeforeCreateSelCss;
    if(this._options.deleteEnabled) {
      e["keydownSel_" + b.keyMapKeydown.del] = this._deleteContents
    }
    if(this._options.editIconEnabled) {
      for(var a = this.grid.colDefMgr.get(), c = a.length, d = 0;d < c;d++) {
        if(b.isNotNull(a[d].editor)) {
          e["onRenderHeader_" + a[d].key + "_prepend"] = this._onRenderHeader
        }
      }
    }
    this.grid.event.bind(e, this)
  };
  c._destroy = function() {
    this._deleteEditor();
    d._destroy(this, {name:"EditManager", path:"editMgr", map:"_beginEditKeys _options"})
  };
  c._onBeforeCreateSelCss = function() {
    var e = "#" + this.grid.mid + " .", a = this._options, c = [], b = this.grid.view._getRowInnerHeight();
    c.push(this.grid.view._getCellSelector() + "." + a.classEdit + "{background:" + a.basicBackground + "}");
    c.push(e + a.classEdit + " input{position:absolute;z-index:10;top:0;padding:0;border:0;margin:0;background:" + a.basicBackground + ";height:" + b + "px;line-height:" + b + "px}");
    a.editableBgEnabled && c.push(e + a.classCellEditable + "{background:" + a.editableBg + "}");
    a.notEditableBgEnabled && c.push(e + a.classCellNotEditable + "{background:" + a.notEditableBg + "}");
    a.editIconEnabled && c.push(e + a.classEditIcon + "{float:left;position:absolute;left:0;top:0;padding:0 " + a.editIconPadding + "px;width:" + a.editIconWidth + "px;height:" + b + "px;background:url(" + a.urlEditIcon + ") no-repeat center transparent}");
    c.push(e + a.classSuccess + "{background:" + a.successBackground + "}");
    c.push(e + a.classFailure + "{background:" + a.failureBackground + "}");
    return c.join("")
  };
  c.onCreateDynamicCss = function() {
    for(var a = this.grid.view._getCellSelector(), c = this.grid.view._getPadding(), d = this.grid.colDefMgr.get(), f = 0, h = "";f < d.length;f++) {
      b.isNotNull(d[f].editor) && (h += a + ".k_" + d[f].key + " .basic-editor{width:" + (d[f].width - 2 * c) + "px}")
    }
    return h
  };
  c._onRenderHeader = function(a) {
    a.push("<span class='" + this._options.classEditIcon + "'></span>")
  };
  c._onRenderCell = function(a, c, b, d, f) {
    this.grid.dataMgr.isReal(b) && f.push("<span class='" + this._options.classEditIcon + "' title='클릭하여 에디팅을 시작합니다' onclick='JGM.m.EditManager." + this.mid + '.beginEdit("' + b[this.grid.dataMgr.idKey] + '","' + d.key + "\")'></span>")
  };
  c.cancelMouseEvent = function(a) {
    return!b.hasTagAndClass(a.target, "DIV", this._options.classEditIcon)
  };
  c.beginEdit = function(a, c) {
    this.begin(d.create("Cell", {grid:this.grid, datarow:this.grid.dataMgr.getById(a), colDef:this.grid.colDefMgr.getByKey(c)}))
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
    var c = this.getDatarow(), d = this.getKey(), f;
    b.isNotNullAnd(c, d) && (f = this.grid.dataMgr.updateByKey(c, d, a, {noSort:!0, noFilter:!0, noRerender:!0}), f === !0 && this.grid.view.rerenderRow(c));
    return f
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
      if(c == a.getValue()) {
        this.cancel()
      }else {
        var c = a.setValue(c), d;
        b = a.get$();
        c instanceof Error ? (this.cancel(), d = this._options.classFailure) : (this._deleteEditor(), this.grid.view.focus(), d = this._options.classSuccess, this.grid.printMessage("Successfully Updated."));
        b.addClass(d);
        setTimeout(function() {
          b.removeClass(d)
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
  c._deleteContents = function(a, c, d) {
    if(!this.active()) {
      var a = {}, c = {}, f = [], h, g, k, n, m, o, p;
      a:for(h in d) {
        if(d.hasOwnProperty(h) && h !== "length") {
          for(p in n = k = g = void 0, o = d[h], o) {
            if(o.hasOwnProperty(p) && !(p === "length" || c.hasOwnProperty(p))) {
              m = o[p].cell;
              if(b.isNull(g) && (g = m.getColDef(), k = g.defaultValue, n = g.key, b.isNull(g.editor))) {
                continue a
              }
              m = b.isNotNull(a[p]) ? a[p].datarow : m.getDatarow();
              this.grid.dataMgr.isReal(m) ? k !== m[n] && (b.isNull(a[p]) && (a[p] = {datarow:m, change:{}}, f.push(a[p])), a[p].change[n] = k) : c[p] = !0
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
    return a.childNodes[0].value
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
  var g = goog.getObjectByName("jx.grid"), d = goog.getObjectByName("jx.util");
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
    d.isNotNull(this._tooltip) && (this._ctnr[0].removeChild(this._tooltip[0]), delete this._tooltip)
  };
  b._mousemoveCanvas = function(a) {
    var c = this._options;
    c.tooltipSyncEnabled && d.isNotNull(this._tooltip) && this._tooltip.css({left:a.pageX + c.offsetX + "px", top:a.pageY + c.offsetY + "px"})
  };
  b._mouseoverCanvas = function(a, c) {
    if(c.getColDef().tooltipEnabled && d.isNull(this._tooltip)) {
      var e = this._options, b = document.createElement("div");
      b.innerHTML = "<div class='" + e.classTooltip + "' style='left:" + (a.pageX + e.offsetX) + "px;top:" + (a.pageY + e.offsetY) + "px'>" + c.getValue() + "</div>";
      this._tooltip = $(b.firstChild);
      this._ctnr[0].appendChild(this._tooltip[0])
    }
  }
})();
jx.grid.PrintManager = {};
(function() {
  function f(a) {
    this.mid = a.mid;
    this._ctnr = Util$.safe$(a.container);
    this.grid = a.grid;
    this._options = g._extend({title:"Print Preview", font:"15px arial,sans-serif", headerFontColor:"#27413E", headerBackgroundColor:"#DCDEDE", tableBorderColor:"#6E7174", headerBorderColor:"#909192", cellBorderColor:"#D0D7E5", winOptions:{name:"Print Preview", width:800, height:600, directories:"no", location:"no", menubar:"no", status:"no", toolbar:"no"}}, a.options);
    this.__init()
  }
  var g = goog.getObjectByName("jx.grid"), d = goog.getObjectByName("jx.util");
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
    var a = this.getPrintHtml(this.grid.colDefMgr.get(), this.grid.dataMgr.datalist), c = d.open(this._options.winOptions);
    c.document.write(a);
    c.document.close()
  };
  b.getPrintHtml = function(a, c) {
    var e = this._options, b = e.tableBorderColor, d = e.headerBorderColor, f = e.cellBorderColor, h = [], g = a.length, k = g - 1, n = c.length, m = n - 1, o = 0, p;
    h.push("<html><head>");
    h.push("<title>" + e.title + "</title>");
    h.push("</head><body onload='window.print();'>");
    h.push("<table width='100%' cellspacing='0' cellpadding='0'><tbody><tr><td align='left'>");
    h.push("<table width='100%' cellspacing='0' cellpadding='2' style='border-collapse:collapse'>");
    h.push("<tbody style='font:" + e.font + ";'>");
    for(h.push("<tr style='background-color:" + e.headerBackgroundColor + ";color:" + e.headerFontColor + ";text-align:center'>");o < g;o++) {
      h.push("<td style='border:solid 1px " + d + ";'>" + a[o].name + "</td>")
    }
    h.push("</tr>");
    for(o = 0;o < n;o++) {
      e = c[o];
      h.push("<tr>");
      if(o === 0) {
        for(p = 0;p < g;p++) {
          p === 0 ? h.push("<td style='border:solid 1px " + f + ";border-top:solid 1px " + d + ";border-left:solid 1px " + b + "'>" + e[a[p].key] + "</td>") : p === k ? h.push("<td style='border:solid 1px " + f + ";border-top:solid 1px " + d + ";border-right:solid 1px " + b + "'>" + e[a[p].key] + "</td>") : h.push("<td style='border:solid 1px " + f + ";border-top:solid 1px " + d + "'>" + e[a[p].key] + "</td>")
        }
      }else {
        if(o < m) {
          for(p = 0;p < g;p++) {
            p === 0 ? h.push("<td style='border:solid 1px " + f + ";border-left:solid 1px " + b + "'>" + e[a[p].key] + "</td>") : p === k ? h.push("<td style='border:solid 1px " + f + ";border-right:solid 1px " + b + "'>" + e[a[p].key] + "</td>") : h.push("<td style='border:solid 1px " + f + "'>" + e[a[p].key] + "</td>")
          }
        }else {
          for(p = 0;p < g;p++) {
            p === 0 ? h.push("<td style='border:solid 1px " + f + ";border-bottom:solid 1px " + b + ";border-left:solid 1px " + b + "'>" + e[a[p].key] + "</td>") : p === k ? h.push("<td style='border:solid 1px " + f + ";border-bottom:solid 1px " + b + ";border-right:solid 1px " + b + "'>" + e[a[p].key] + "</td>") : h.push("<td style='border:solid 1px " + f + ";border-bottom:solid 1px " + b + "'>" + e[a[p].key] + "</td>")
          }
        }
      }
      h.push("</tr>")
    }
    h.push("</tbody></table></td></tr></tbody></table></body></html>");
    return h.join("")
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
    this._evtmgr = this.grid.event;
    this._datamgr = this.grid.dataMgr;
    this._colmgr = this.grid.colDefMgr;
    this._rowClass = this._options.classRow;
    this._cellClass = this._options.classCell;
    this._rowIdxAttr = this._options.attrRowIdx;
    this.__init()
  }
  var g = goog.getObjectByName("jx.grid"), d = goog.getObjectByName("jx.grid.Grid"), b = goog.getObjectByName("jx.util");
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
    var a = "#" + this.grid.mid + " .", c = this._options, b = a + this._cellClass, d = a + this._rowClass, f = c.borderThickness + "px " + c.border, g = d + "[" + this._rowIdxAttr, k = this._colmgr.get(), n = k.length, m = 0, o = [];
    o.push(a + c.classView + "{height:" + this._calHeight() + "px;outline:0;position:relative;white-space:nowrap;overflow:auto;line-height:" + c.rowH + "px;cursor:default;-moz-user-select:none;-webkit-user-select:none;" + c.style + "}");
    o.push(a + c.classView + ":focus{background:" + c.focusBackground + ";outline:" + c.focusOutline + "}");
    o.push(a + c.classCanvas + "{height:" + this._calCanvasHeight() + "px;" + c.canvasStyle + ";background:#fff}");
    o.push(d + "{position:absolute;" + c.rowStyle + "}");
    o.push(b + "{height:" + c.rowH + "px;border-bottom:" + f + ";display:inline-block;white-space:nowrap;overflow:hidden;float:left;text-overflow:ellipsis;padding-left:" + c.padding + "px;border-right:" + f + ";" + c.cellStyle + "}");
    for(c.evenOddRows && o.push(g + "$='1']," + g + "$='3']," + g + "$='5']," + g + "$='7']," + g + "$='9']{background:" + c.oddRowsBackground + "}");m < n;m++) {
      o.push(b + ".k_" + k[m].key + "{" + k[m].style + "}")
    }
    return o.join("")
  };
  c._onCreateDynamicCss = function() {
    var a = "#" + this.grid.mid + " .", c = a + this._cellClass, b = a + this._rowClass;
    a += this._options.classCanvas;
    var d = this._calCanvasWidth(), f = this._colmgr.get(), g = "", k = f.length, n = 0;
    for(g += a + "{width:" + d + "px}" + b + "{width:" + d + "px}";n < k;n++) {
      g += c + ".k_" + f[n].key + "{width:" + f[n].width + "px}"
    }
    return g
  };
  c.onUpdateDatarow = function(a) {
    this.isRendered(a) && this.rerenderRow(a)
  };
  c.onUpdateDatalist = function(a) {
    for(var c, b = a.length, d = 0;d < b;d++) {
      c = a[d], this.isRendered(c) && this.rerenderRow(c)
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
    for(var d = a.length, f = 0, g = this._lockedRows, k = this._renderedRows, n, m;f < d;f++) {
      n = c[f], m = a[f][b], g.hasOwnProperty(n) && (g[m] = g[n], delete g[n]), k.hasOwnProperty(n) && ((k[m] = k[n]).setAttribute("i", m), delete k[n])
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
    return b.isNull(a) ? c : this._getLastSafeVisibleRow() < a ? this.scrollToRow(this._getFirstRowForSafe(a)) : this._getFirstSafeVisibleRow() > a ? this.scrollToRow(a) : c
  };
  c.scrollToColLazy = function(a) {
    var c = this.getScrollLeft();
    if(b.isNull(a)) {
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
    return b.isNotNull(a) ? this.setScrollTop(this._getRowOuterHeight() * a) : this.getScrollTop()
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
    return this._canvas[0].clientHeight
  };
  c._setCanvasHeight = function(a) {
    a = parseInt(a);
    if(!(isNaN(a) || a < 1)) {
      var c = this.getCanvasHeight();
      if(a != c) {
        this._canvas[0].style.height = a + "px", this._evtmgr.trigger("onResizeCanvasHeight", [a, c], !0)
      }
    }
  };
  c._calCanvasWidth = function() {
    return this._colLefts[this._colmgr.length()]
  };
  c.getCanvasWidth = function() {
    return this._canvas[0].clientWidth
  };
  c._setCanvasWidth = function(a) {
    typeof a != "number" && (a = parseInt(a));
    if(isFinite(a) && !(a < 1)) {
      var c = this.getCanvasWidth();
      if(a != c) {
        this._canvas[0].style.width = a + "px", this._evtmgr.trigger("onResizeCanvasWidth", [a, c], !0)
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
    b.isNull(a) && (a = 0);
    var d = this._colmgr.get(), f = this._colWidthPlus();
    if(b.isNull(c)) {
      c = d.length
    }
    for(;a < c;a++) {
      this._colLefts[a + 1] = this._colLefts[a] + d[a].width + f
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
      var f = this._evtmgr, h = this._colmgr, g = [a, c, d.width];
      d.width = c;
      this._setCanvasWidth(this._setColLefts(h.getIdxByKey(a))[h.length()]);
      this.grid._recreateDynamicCss();
      f.trigger("onResizeCol_" + a, g, !0);
      f.trigger("onResizeCol", g, !0)
    }
  };
  c._autoColWidth = function(a) {
    for(var c = this._canvasFind(".k_" + a), b = Number.MIN_VALUE, d = c.length, f = 0;f < d;f++) {
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
    return b.isNotNull(a) && c != a ? this._mask[0].scrollTop = a : c
  };
  c.setScrollLeft = function(a) {
    var c = this.getScrollLeft();
    return b.isNotNull(a) && c != a ? this._mask[0].scrollLeft = a : c
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
    for(var a = this.getScrollLeft(), c = this._colLefts, b = 0, d = c.length;b < d;b++) {
      if(c[b] > a) {
        return b - 1
      }
      if(c[b] === a) {
        return b
      }
    }
    return d - 2
  };
  c._getFirstSafeVisibleCol = function() {
    for(var a = this.getScrollLeft(), c = this._colLefts, b = 0, d = c.length;b < d;b++) {
      if(c[b] >= a) {
        return b
      }
    }
    return d - 2
  };
  c._getLastVisibleCol = function() {
    for(var a = this.getScrollLeft() + this._mask[0].clientWidth, c = this._colLefts, b = 0, d = c.length;b < d;b++) {
      if(c[b] >= a) {
        return b - 1
      }
    }
    return d - 2
  };
  c._getLastSafeVisibleCol = function() {
    for(var a = this.getScrollLeft() + this._mask[0].clientWidth, c = this._colLefts, b = 0, d = c.length;b < d;b++) {
      if(c[b] > a) {
        return b - 2
      }
    }
    return d - 2
  };
  c._getFirstColForSafe = function(a) {
    var c = this._colLefts, b = c[a + 1] - this._mask[0].clientWidth, d = a;
    if(b <= 0) {
      return 0
    }
    for(;d >= 0;d--) {
      if(d === a && c[d] <= b || c[d] === b) {
        return d
      }
      if(c[d] < b) {
        return d + 1
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
    b.isNull(a) && (a = this._getRenderRange());
    this._removeRowsExcept(a);
    this._appendRows(a)
  };
  c._removeRows = function(a) {
    var c = this._canvas[0], d = this._renderedRows, f = this._lockedRows, h;
    if(b.isNull(a)) {
      if(this._lockExist()) {
        for(h in d) {
          d.hasOwnProperty(h) && f.hasOwnProperty(h) && (c.removeChild(d[h]), delete d[h])
        }
      }else {
        this._renderedRows = {}, c.innerHTML = ""
      }
    }else {
      for(var g = a.start, a = a.end, k = this._datamgr;g <= a;g++) {
        if(!f.hasOwnProperty(h = k.getIdByIdx(g)) && d.hasOwnProperty(h)) {
          c.removeChild(d[h]), delete d[h]
        }
      }
    }
  };
  c._removeRowsExcept = function(a) {
    var c = this._canvas[0], d = this._renderedRows, f = this._lockedRows, h;
    if(b.isNull(a)) {
      if(this._lockExist()) {
        for(h in d) {
          d.hasOwnProperty(h) && f.hasOwnProperty(h) === !1 && (c.removeChild(d[h]), delete d[h])
        }
      }else {
        this._renderedRows = {}, c.innerHTML = ""
      }
    }else {
      var g = a.start, a = a.end, k = this._datamgr, n;
      for(h in d) {
        if(d.hasOwnProperty(h) && !(f.hasOwnProperty(h) || g <= (n = k.getIdxById(h)) && n <= a)) {
          c.removeChild(d[h]), delete d[h]
        }
      }
    }
  };
  c.destroyRow = function(a) {
    return this.destroyRowById(this._datamgr.getId(a))
  };
  c.destroyRowById = function(a) {
    b.isNotNull(a) && (this.unlockRowById(a), this._renderedRows.hasOwnProperty(a) && (this._canvas[0].removeChild(this._renderedRows[a]), delete this._renderedRows[a]))
  };
  c.destroyRowByIdx = function(a) {
    return this.destroyRowById(this._datamgr.getIdByIdx(a))
  };
  c._lockExist = function() {
    return b.isNotEmptyObj(this._lockedRows)
  };
  c.isRowLockedById = function(a) {
    return b.isNotNull(a) ? this._lockedRows.hasOwnProperty(a) : !1
  };
  c.isRowLocked = function(a) {
    return this.isRowLockedById(this._datamgr.getId(a))
  };
  c.isRowLockedByIdx = function(a) {
    return this.isRowLockedById(this._datamgr.getIdByIdx(a))
  };
  c.lockRowById = function(a) {
    b.isNotNull(a) && this._datamgr.hasById(a) && (this._lockedRows[a] = !0)
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
      var c = this._renderedRows, d = this._canvas[0], f = this._datamgr, h = f.idKey, g = f.getIdxById(a), f = f.getById(a), k = this._colmgr.get(), n = this._getColCellClasses(k).map(function(a) {
        return"<div class='" + a + " "
      }), m = this.getRendererSettings(k), o = m[0], m = m[1], p = this._getRowOuterHeight(), r = "<div class='" + this._rowClass + "' i='", s = "' " + this._rowIdxAttr + "='", t = [];
      c.hasOwnProperty(a) && (d.removeChild(c[a]), this._evtmgr.trigger("onBeforeRenderRows", [[g]], !0), t.push(r + f[h] + s + g + "' style='top:" + p * g + "px'>"), this._renderRow(t, g, f, k, n, o, m), c[a] = b.appendHTML(d, t.join(""))[0], this._evtmgr.trigger("onAppendRows", [[g]], !0))
    }
  };
  c.getRendererSettings = function(a) {
    for(var a = a || this._colmgr.get(), c = 0, b = a.length, d, f = [], g = [], k;c < b;c++) {
      d = a[c], (k = d.renderer) ? (f.push(!!d.rendererInput), g.push(k)) : (f.push(!1), g.push(!1))
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
    if(b !== void 0) {
      var d = this._datamgr, f = this._colmgr, g = d.getById(a), k = f.getByKey(c), d = d.getIdxById(a), f = f.getIdxByKey(c), n = [];
      this._renderCell(n, d, f, g, k, k.renderer ? k.rendererInput ? 2 : 1 : 0);
      b.innerHTML = n.join("")
    }
  };
  c.rerenderCellByIdx = function(a, c) {
    return this.rerenderCellByIdAndKey(this._datamgr.getIdByIdx(a), this._colmgr.getKeyByIdx(c))
  };
  c._appendRows = function(a) {
    this._evtmgr.trigger("onBeforeRenderRows", [a], !0);
    for(var c = [], d = a.start, f = a.end, h = this._datamgr.datalist, g = this._datamgr.idKey, k = this._colmgr.get(), n = this._getColCellClasses(k).map(function(a) {
      return"<div class='" + a + " "
    }), m = this._renderedRows, o = this._getRowOuterHeight(), p = this._canvas[0], r = "<div class='" + this._rowClass + "' i='", s = "' " + this._rowIdxAttr + "='", t = this.getRendererSettings(k), u = t[0], v = t[1], w, x, t = [];d <= f;d++) {
      if(w = h[d], !m.hasOwnProperty(x = w[g])) {
        c[c.length] = r + w[g] + s + d + "' style='top:" + o * d + "px'>", this._renderRow(c, d, w, k, n, u, v), t.push(x)
      }
    }
    c = b.appendHTML(p, c.join(""));
    d = 0;
    for(f = t.length;d < f;d++) {
      m[t[d]] = c[d]
    }
    this._evtmgr.trigger("onAppendRows", [a], !0)
  };
  c._removeAndRenderRows = function(a) {
    b.isNull(a) && (a = this._getRenderRange());
    this._evtmgr.trigger("onBeforeRenderRows", [a], !0);
    for(var c = [], d = a.start, f = a.end, h = this._datamgr, g = h.datalist, k = h.idKey, n = this._colmgr.get(), m = this._getColCellClasses(n).map(function(a) {
      return"<div class='" + a + " "
    }), h = this._canvas[0], o = this._getRowOuterHeight(), p = "<div class='" + this._rowClass + "' i='", r = "' " + this._rowIdxAttr + "='", s = this.getRendererSettings(n), t = s[0], u = s[1], v, s = [], w = {};d <= f;d++) {
      v = g[d], c[c.length] = p + v[k] + r + d + "' style='top:" + o * d + "px'>", this._renderRow(c, d, v, n, m, t, u), s.push(v[k])
    }
    h.innerHTML = c.join("");
    d = 0;
    for(c = s.length;d < c;d++) {
      w[s[d]] = h.childNodes[d]
    }
    this._renderedRows = w;
    this._evtmgr.trigger("onAppendRows", [a], !0)
  };
  c._getColCellClass = function(a) {
    var c = this._cellClass + " k_" + a.key;
    a.colClass && (c += " " + a.colClass);
    (a = this._evtmgr.trigger("onGetColCellClass", [a])) && (c += " " + a.join(" "));
    return c
  };
  c._getColCellClasses = function(a) {
    for(var a = a || this._colmgr.get(), c = [], b = 0, d = a.length;b < d;b++) {
      c.push(this._getColCellClass(a[b]))
    }
    return c
  };
  c._renderRow = function(a, c, b, d, f, g, k) {
    for(var n = 0, m = d.length, o, p = [c, null, b, null], r = this._evtmgr, s;n < m;n++) {
      o = d[n], p[1] = n, p[3] = o, s = (s = r.trigger("onGetCellClass", p)) ? s.join(" ") : "", a[a.length] = f[n] + s + "'>", g[n] ? k[n] ? this._renderCell(a, c, n, b, o, g[n], !0) : this._renderCell(a, c, n, b, o, g[n]) : this._renderCell(a, c, n, b, o), a[a.length] = "</div>"
    }
    a[a.length] = "</div>";
    return a
  };
  c._renderCell = function(c, b, d, f, h) {
    var g = h.key, k = [b, d, f, h, c], n = this._evtmgr, m = "onRenderCell_" + g;
    n.trigger(m + "_prepend", k, !0);
    g = f[g];
    if(typeof g != "string" || g.substring(0, 3) !== "J@H") {
      arguments.length > 5 ? c[c.length] = arguments[6] ? arguments[5](new a({grid:this.grid, row:b, col:d, datarow:f, colDef:h})) : arguments[5](g, b, d, f, h) : g != null && (c[c.length] = g)
    }
    n.trigger(m + "_append", k, !0)
  };
  a.prototype.rerender = function() {
    return this.grid.view.rerenderCellByIdAndKey(this.getId(), this.getKey())
  };
  a.prototype.scrollTo = function() {
    this.grid.view.scrollTo(this.getRowIdx(), this.getColIdx())
  };
  c._keydown = function(a) {
    b.contains(this._mask[0], document.activeElement, this._ctnr[0]) && (this._evtmgr.trigger("keydownCanvas_" + a.which, [a], !0), this._evtmgr.trigger("keydownCanvas", [a], !0))
  };
  c._keyup = function(a) {
    b.contains(this._mask[0], document.activeElement, this._ctnr[0]) && (this._evtmgr.trigger("keyupCanvas_" + a.which, [a], !0), this._evtmgr.trigger("keyupCanvas", [a], !0))
  };
  c._keypress = function(a) {
    b.contains(this._mask[0], document.activeElement, this._ctnr[0]) && (this._evtmgr.trigger("keypressCanvas_" + a.which, [a], !0), this._evtmgr.trigger("keypressCanvas", [a], !0))
  };
  c._mousein = function(a) {
    this._drag ? this._triggerMouseEvent(a, "draginCanvas,mouseinCanvas", d.V_MOUSEIN) : this._triggerMouseEvent(a, "mouseinCanvas", d.V_MOUSEIN)
  };
  c._mouseout = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragoutCanvas,mouseoutCanvas", d.V_MOUSEOUT) : this._triggerMouseEvent(a, "mouseoutCanvas", d.V_MOUSEOUT)
  };
  c._mouseenter = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragenterCanvas,mouseenterCanvas", d.V_MOUSEENTER) : this._triggerMouseEvent(a, "mouseenterCanvas", d.V_MOUSEENTER)
  };
  c._mouseleave = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragleaveCanvas,mouseleaveCanvas", d.V_MOUSELEAVE) : this._triggerMouseEvent(a, "mouseleaveCanvas", d.V_MOUSELEAVE)
  };
  c._mousemove = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragmoveCanvas,mousemoveCanvas", d.V_MOUSEMOVE) : this._triggerMouseEvent(a, "mousemoveCanvas", d.V_MOUSEMOVE)
  };
  c._mouseover = function(a) {
    this._drag ? this._triggerMouseEvent(a, "dragoverCanvas,mouseoverCanvas", d.V_MOUSEOVER) : this._triggerMouseEvent(a, "mouseoverCanvas", d.V_MOUSEOVER)
  };
  c._mousedown = function(a) {
    if(this._triggerMouseEvent(a, "mousedownCanvas", d.V_MOUSEDOWN)) {
      this._drag = !0
    }
  };
  c._mouseup = function(a) {
    this._drag = !1;
    this._triggerMouseEvent(a, "mouseupCanvas", d.V_MOUSEUP)
  };
  c._click = function(a) {
    this._triggerMouseEvent(a, "clickCanvas", d.V_CLICK) && this.focus(a)
  };
  c._dblclick = function(a) {
    this._triggerMouseEvent(a, "dblclickCanvas", d.V_DBLCLICK)
  };
  c._triggerMouseEvent = function(c, b) {
    var d = this._getClosestCell(c.target);
    if(d) {
      var f = new a({grid:this.grid, node:d}), d = f.getKey(), f = [c, f], h = this._evtmgr;
      if(b.indexOf(",") > -1) {
        for(var g = event.split(","), k = 0, n = g.length, m;k < n;k++) {
          m = g[k], h.trigger(m + "_" + d, f, !0), h.trigger(m, f, !0)
        }
      }else {
        h.trigger(b + "_" + d, f, !0), h.trigger(b, f, !0)
      }
      return!0
    }else {
      return!1
    }
  };
  c._scroll = function() {
    var a = this.getScrollTop(), c = a - this._lastScrollTop, b = this.getScrollLeft(), d = b - this._lastScrollLeft;
    if(!(c === 0 && d === 0)) {
      this._evtmgr.trigger("onScrollViewport", !1, !0);
      if(d) {
        this._lastScrollLeft = b, this._evtmgr.trigger("onScrollViewportH", [b], !0)
      }
      if(!(Math.abs(c / this._getRowOuterHeight()) < this._options.appendThreshold)) {
        this._lastScrollTop = a, this._render(), this._evtmgr.trigger("onScrollViewportV", !1, !0)
      }
    }
  };
  c.focus = function(a) {
    if(!b.isNotNull(a) || !this._evtmgr.triggerInvalid("onBeforeFocusCanvas", [a])) {
      if(a = this._mask[0], document.activeElement !== a) {
        if(b.isFunction(a.setActive)) {
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
    return b.isNotNull(a) ? this._renderedRows.hasOwnProperty(a) : !1
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
    var d = this.getRowByIdx(a);
    if(b.isNotNull(d, c)) {
      return d.childNodes[c]
    }
  };
  c.getCellByIdAndKey = function(a, c) {
    var d = this.getRowById(a), f = this._colmgr.getIdxByKey(c);
    if(b.isNotNullAnd(d, f)) {
      return d.childNodes[f]
    }
  };
  c.getRenderedCell = function(a, c) {
    var d = this.getRenderedRowByIdx(a);
    if(b.isNotNull(d)) {
      return d.childNodes[c]
    }
  };
  c.getRenderedCellByIdAndKey = function(a, c) {
    var d = this.getRenderedRowById(a), f = this._colmgr.getIdxByKey(c);
    if(b.isNotNullAnd(d, f)) {
      return d.childNodes[f]
    }
  };
  c._getClosestCell = function(a) {
    return b.closestWithTag(a, "DIV", this._cellClass, this._canvas[0])
  };
  c._getClosestRow = function(a) {
    return b.closestWithTag(a, "DIV", this._rowClass, this._canvas[0])
  };
  c._getClosestRowIdx = function(a) {
    return this._datamgr.getIdxByNode(this._getClosestRow(a))
  };
  c._canvasFind = function(a) {
    return this._canvas.find(a)
  };
  f._renderer = function(a) {
    return b.ifNull(a, "")
  }
})();
jx.grid.ColumnManager = {};
(function() {
  function f(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    this.grid.colDefMgr = this;
    this._options = i._extend({colDef:{type:"string", key:void 0, name:"", colClass:void 0, defaultValue:void 0, inputOnCreate:void 0, style:"", headerStyle:"", width:80, minW:30, maxW:void 0, editor:void 0, sorter:void 0, hidden:!1, sumRenderer:void 0, tooltipEnabled:!1, resizable:!1, renderer:void 0, rendererInput:!1, noTitle:!1, noName:!1, title:void 0, noSearch:!1, filter:void 0, parser:void 0, validator:void 0}}, a.options);
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
  function d(a) {
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
  function e(a) {
    switch(typeof a) {
      case "undefined":
        return Number.MAX_VALUE;
      case "boolean":
        return a ? 1 : 0;
      case "number":
        return a
    }
    return a == null ? Number.MAX_VALUE : d(a) ? 1 : 0
  }
  var i = goog.getObjectByName("jx.grid"), l = goog.getObjectByName("jx.util");
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
    i._destroy(this, {name:"ColumnManager", path:"colDefMgr", property:"_colDefs", map:"_keyToIdx _keyToDef _options", array:"_filtered"})
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
    for(var c = 0, b = a.length, e = this._keyToDef, d, f;c < b;c++) {
      d = a[c];
      if(!d.hasOwnProperty("key")) {
        return this._keyToDef = {}, this.grid.error("KEY_UNDEFINED", c)
      }
      f = d.key;
      if(l.isEmptyString(f)) {
        return this._keyToDef = {}, this.grid.error("BAD_NULL", c)
      }
      if(e.hasOwnProperty(f)) {
        return this._keyToDef = {}, this.grid.error("DUP_KEY", f)
      }
      e[f] = d
    }
    this._colDefs = a;
    for(c = 0;c < b;c++) {
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
      var b = c.key, e = this._keyToDef, d = this._filtered;
      l.isNull(a) || a > d.length ? a = d.length : a < 0 && (a += d.length);
      this.grid.event.trigger("onBeforeAddColDef", [c], !0);
      if(l.isNull(b)) {
        return this.grid.error("KEY_UNDEFINED")
      }
      if(e.hasOwnProperty(b)) {
        return this.grid.error("DUP_KEY", b)
      }
      this._colDefs.addAt(a, this._extend(e[b] = c));
      c.hidden !== !0 && (d.addAt(a, c), this._reidx());
      this.grid.event.trigger("onAfterAddColDef", [c, a], !0);
      return d.length
    }
  };
  j._extend = function(c) {
    if(c) {
      var e = {}, i, l;
      $.extend(!0, e, this._options.colDef);
      $.extend(!0, e, c);
      $.extend(!0, c, e);
      e = c.type = g(c.type);
      l = c.key;
      l != null && typeof l != "string" && (c.key = l = l.toString());
      if(!l) {
        throw Error("column key is not defined!");
      }
      if(i = c.sorter) {
        typeof i == "string" ? i = g(i) : e && (i = e);
        if(i = f.sorter(i, l)) {
          i.key = l
        }
        c.sorter = i
      }
      if((i = c.parser) && e && typeof i != "function") {
        switch(e) {
          case "boolean":
            i = d;
            break;
          case "int":
            i = parseInt;
            break;
          case "float":
            i = parseFloat;
            break;
          case "string":
            i = b;
            break;
          case "date":
            i = a;
            break;
          default:
            i = null
        }
        c.parser = i
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
    for(var c = this._filtered, b = c.length, e = this._keyToIdx;a < b;a++) {
      e[c[a].key] = a
    }
    return e
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
    for(var c = 0, b = a.length, e = this._filtered, d = this._keyToIdx, f = this._keyToDef;c < b;c++) {
      e.push(f[a[c]]), d[a[c]] = c
    }
    this.grid.event.trigger("onReorderCols", a, !0);
    return this._filtered
  };
  j.getKeys = function() {
    return this._filtered.map(function(a) {
      return a.key
    })
  };
  f.sorter = function(a, b, d) {
    d = {on:!!d, key:b};
    switch(a) {
      case "boolean":
        return d.comparator = function(a, c) {
          return e(a[b]) - e(c[b])
        }, d;
      case "string":
        return d.lexi = b, d;
      case "int":
        return d.comparator = function(a, e) {
          return c(a[b], "toInt") - c(e[b], "toInt")
        }, d;
      case "float":
        return d.comparator = function(a, e) {
          return c(a[b], "toFloat") - c(e[b], "toFloat")
        }, d;
      case "date":
        return d.comparator = function(a, e) {
          return c(a[b], "toInt") - c(e[b], "toInt")
        }, d
    }
    return null
  }
})();
jx.grid.MenuBar = {};
(function() {
  function f(a) {
    b.call(this, a);
    this.grid.menubar = this
  }
  var g = goog.getObjectByName("jx.grid"), d = goog.getObjectByName("jx.util"), b = goog.getObjectByName("jx.grid.BaseModule");
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
    var a = "#" + this.grid.mid + " .", b = this._options, d = [];
    d.push(a + b.classMenuBar + "{" + g._CONST._cssUnselectable + "overflow:hidden;width:100%;background:" + b.background + ";border-bottom:" + (b.borderThickness + "px " + b.border) + ";height:" + b.height + "px}");
    d.push(a + b.classIcon + "{float:left;height:" + b.iconHeight + "px;width:" + b.iconWidth + "px;border:" + b.iconBorderThickness + "px " + b.iconBorder + ";margin:" + b.iconMargin + "px 0 0 " + b.iconMargin + "px;background:" + b.iconBackground + ";border-radius:" + b.iconBorderRadius + "px;-moz-border-radius:" + b.iconBorderRadius + "px}");
    d.push(a + b.classIcon + ":hover," + a + b.classIcon + ":focus{background:" + b.iconBackgroundHover + ";border:" + b.iconBorderThickness + "px " + b.iconBorderHover + "}");
    d.push(a + b.classIcon + ":active," + a + b.classIcon + ".active{cursor:default;background:" + b.iconBackgroundActive + ";border:" + b.iconBorderThickness + "px " + b.iconBorderActive + "}");
    d.push(a + b.classIcon + ".active:focus{border:" + b.iconBorderThickness + "px " + b.iconBorderFocus + "}");
    return d.join("")
  };
  a.addIcon = function(a, b, f, g, j) {
    return $("<div class='" + this._options.classIcon + "' tabIndex='0' title='" + b + "'><div class='" + a + "' style='margin-top:" + (this._options.iconHeight - g) / 2 + "px;margin-left:" + (this._options.iconWidth - f) / 2 + "px'></div></div>").appendTo(this._menubar).click(function(a) {
      j();
      $(this).toggleClass("active");
      a.preventDefault()
    }).keydown(function(a) {
      if(a.which === d.keyMapKeydown.enter || a.which === d.keyMapKeydown.space) {
        j(), $(this).toggleClass("active"), a.preventDefault()
      }
    })
  }
})();
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
  var g = goog.getObjectByName("jx.grid"), d = goog.getObjectByName("jx.util");
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
    for(var a = this.grid.dataMgr.getReal(), c = this.grid.colDefMgr.get(), b = c.length, i, g, j, h, q = f._calSum, k = this._sumMap, n, m = 0;m < b;m++) {
      if(i = c[m], g = i.sumRenderer, d.isNotNull(g)) {
        if(j = i.key, i = i.name, h = q(a, j), j = k[j] = this.getNextCell(), n = j[0], d.isFunction(g)) {
          n.innerHTML = g(i, h)
        }else {
          if(d.isString(g)) {
            if(j = g.toLowerCase(), j === "krw" || g === "\\") {
              n.innerHTML = this._sumRenderer(i, d.formatNumber(h))
            }else {
              if(j === "usd" || g === "$") {
                n.innerHTML = this._sumRenderer(i, d.formatNumber(h, 2, "$ "))
              }
            }
          }else {
            n.innerHTML = this._sumRenderer(i, h)
          }
        }
      }
    }
  };
  b._updateSums = function() {
    var a = this.grid.dataMgr.getReal(), c, b = this._sumMap, i = this.grid.colDefMgr, g, j, h, q = f._calSum, k, n, m = this._options.classContent;
    for(c in b) {
      if(b.hasOwnProperty(c)) {
        if(g = i.getByKey(c), j = g.sumRenderer, h = q(a, c), k = b[c], n = k[0], d.isFunction(j)) {
          n.innerHTML = j(g.name, h)
        }else {
          if(d.isString(j)) {
            if(g = j.toLowerCase(), g === "krw" || j === "\\") {
              k.find("span." + m)[0].innerHTML = d.formatNumber(h)
            }else {
              if(g === "usd" || j === "$") {
                k.find("span." + m)[0].innerHTML = d.formatNumber(h, 2, "$ ")
              }
            }
          }else {
            k.find("span." + m)[0].innerHTML = h
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
    for(var b = 0, d, f = a.length, g = 0;g < f;g++) {
      if(typeof(d = a[g][c]) === "string") {
        d = d.toFloat()
      }
      b += isNaN(d) ? 0 : d
    }
    return b
  }
})();
jx.grid.ColumnHeader = {};
(function() {
  function f(a) {
    b.call(this, a)
  }
  var g = goog.getObjectByName("jx.grid"), d = goog.getObjectByName("jx.util"), b = goog.getObjectByName("jx.grid.BaseModule");
  goog.getObjectByName("jx.grid.Grid");
  goog.exportSymbol("jx.grid.ColumnHeader", f);
  goog.inherits(f, b);
  f.getInstance = function(a) {
    return new f(a)
  };
  var a = f.prototype;
  a._init = function(a) {
    this.grid.header = this;
    this._ctnr = a.container;
    this._map = {};
    this._resizeMap = {};
    a = this._options;
    this._mask = $("<div class='" + a.classHeaderMask + "'>").prependTo(this._ctnr);
    this._head = $("<div class='" + a.classHeader + "'>").appendTo(this._mask);
    f._disableSel(this._head)
  };
  a._bindEvents = function() {
    var a, b = this.getColumns(), d = b.length, f = 0;
    for(a = {onRenderModules:this._onRenderModules, onAfterRenderModules:this._onAfterRenderModules, mousedown:this._mousedown, mouseup:this._mouseup, dragmove:this._dragmove, onScrollViewportH:this._onScrollViewportH, onScrollViewportV:this._onScrollViewportV, onChangeSorter:this._onChangeSorter, click:this._click, onResizeCol:this._setWidthByKey};f < d;f++) {
      if(b[f].sorter) {
        a["clickHeader_" + b[f].key] = this._sort
      }
    }
    this.bindGridEvent(a, this)
  };
  a._defaultOptions = function(a) {
    a = a._options.imageUrl;
    return{reorderEnabled:!1, reorderSyncEnabled:!0, background:"url(" + a + "column-headers-bg.png) repeat-x scroll center", backgroundHover:"url(" + a + "column-headers-over-bg.png) repeat-x scroll center", backgroundPlaceholder:"#646464", sortBackground:a + "sort.png", sortRight:4, sortWidth:7, sortBackgroundAsc:a + "sort-asc.png", sortBackgroundDesc:a + "sort-desc.png", font:"15px Arial,Helvetica,sans-serif", height:21, borderThickness:1, border:"solid #909192", classHeaderMask:"jgrid-header-mask", 
    classHeader:"jgrid-header", classColHeader:"jgrid-colheader", classColHeaderActive:"jgrid-colheader-active", classColHeaderPlaceholder:"jgrid-colheader-placeholder", classInteractive:"interactive", classColHeaderSorted:"jgrid-colheader-sorted", classSort:"jgrid-sort", classSortAsc:"jgrid-sort-asc", classSortDesc:"jgrid-sort-desc", classResizeHandle:"jgrid-resize-handle", resizeHandleWidth:11, style:"", headerStyle:"", scrollerLeft:1E4, scrollerWidth:1E5, classResizeGuide:"resize-guide", resizeGuideWidth:1, 
    resizeBackground:"black;filter:alpha(opacity=40);opacity:0.4", syncResize:!1, resizeHandleBackground:"black;filter:alpha(opacity=5);opacity:0.05"}
  };
  a._beforeDispose = function() {
    this._head.sortable && this._head.sortable("destroy");
    this._destroyResizeHandles();
    g._destroy(this, {name:"ColumnHeader", path:"header", $:"_resizeGuide _mask _head", property:"_ctnr _resizeMap", map:"_map _options"});
    this.dispose()
  };
  a._destroyResizeHandles = function() {
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
  a._beforeCreateCss = function(a) {
    var b = "#" + this.grid.mid + " .", d = this._options, f = d.borderThickness + "px " + d.border, g = this.getColumns(), h = g.length, q = 0, k = "." + d.classHeaderMask, n = "." + d.classColHeader, m = d.scrollerLeft, m = d.scrollerLeft, o = d.height + "px", p = d.classColHeaderActive, r = {};
    r[k] = {position:"relative", overflow:"hidden", width:"100%", font:d.font, background:d.background, "border-bottom":f, _append:d.style};
    r["." + d.classHeader] = {position:"relative", overflow:"hidden", "white-space":"nowrap", cursor:"default", left:-m + "px", width:d.scrollerWidth + "px", "line-height":o};
    r[n] = {position:"relative", overflow:"hidden", "float":"left", "text-overflow":"ellipsis", "text-align":"center", height:o, left:m - this.getView().getScrollLeft() + "px", "border-right":f, _append:d.headerStyle};
    r[n + "." + d.classInteractive + ":hover, " + b + p] = {background:d.backgroundHover};
    r["." + p] = {"border-left":f};
    r[n + "." + d.classColHeaderPlaceholder] = {background:d.backgroundPlaceholder + "!important"};
    r["." + d.classSort] = {position:"absolute", height:o, right:d.sortRight + "px", width:d.sortWidth + "px", background:"url(" + d.sortBackground + ") no-repeat center transparent"};
    r["." + d.classSortAsc] = {background:"url(" + d.sortBackgroundAsc + ") no-repeat center transparent"};
    r["." + d.classSortDesc] = {background:"url(" + d.sortBackgroundDesc + ") no-repeat center transparent"};
    r["." + d.classResizeHandle] = {"z-index":10, background:d.resizeHandleBackground, cursor:"e-resize", position:"absolute", height:o, width:d.resizeHandleWidth + "px"};
    for(r["." + d.classResizeGuide] = {"z-index":10, position:"absolute", background:d.resizeBackground, width:d.resizeGuideWidth + "px"};q < h;q++) {
      g[q].headerStyle && (r[n + "#" + this.mid + "h" + g[q].key] = {_append:g[q].headerStyle})
    }
    this.toCssStyles(a.css, r)
  };
  a._widthPlus = function() {
    return this._options.borderThickness
  };
  a._onScrollViewportH = function(a) {
    this._head[0].style.left = -this._options.scrollerLeft - a + "px"
  };
  a._onRenderModules = function() {
    for(var a = this.getColumns(), b = a.length, d = 0, f, g = [];d < b;d++) {
      (f = a[d]).hidden || this._render(g, f, d)
    }
    this._head[0].innerHTML = g.join("");
    this.triggerGridEvent("onRenderHeadersComplete", !1, !0)
  };
  a._onAfterRenderModules = function() {
    var a = this._options;
    a.reorderEnabled && this._initReorder();
    this._initResizeHandles();
    this._resizeGuide = $("<div class='" + a.classResizeGuide + "'>").appendTo(this.getView()._mask);
    this._resizeGuide[0].style.top = "0px";
    this._resizeGuide[0].style.height = "0px"
  };
  a._render = function(a, b, d) {
    var f = this._options, g = b.key, h = b.noName ? "" : b.name || g, q = this._widthPlus(), k = "onRenderHeader_" + g, n = [a];
    a.push("<div id='" + this.mid + "h" + g + "' class='" + f.classColHeader + " " + (f.reorderEnabled || b.sorter ? " " + f.classInteractive : "") + "' " + (b.noTitle ? "" : "title='" + (b.title || h) + "' ") + "style='width:" + (this.getView()._getColOuterWidth(d) - q) + "px;' colKey='" + g + "'>");
    this.triggerGridEvent(k + "_prepend", n, !0);
    a.push(h);
    this.triggerGridEvent(k + "_append", n, !0);
    b.sorter && a.push("<span class='" + f.classSort + "'></span>");
    a.push("</div>")
  };
  f._disableSel = function(a) {
    Util$.safe$(a).attr("unselectable", "on").css("MozUserSelect", "none").bind("selectstart.ui", function() {
      return!1
    })
  };
  a.get = function(a) {
    if(this._map.hasOwnProperty(a)) {
      return this._map[a]
    }
    var b = document.getElementById(this.mid + "h" + a);
    return!b ? $([]) : this._map[a] = $(b)
  };
  a._updateIndicator = function(a, b) {
    var d = this.get(a), f = this._options, g = d.find("." + f.classSort), h = f.classColHeaderSorted, q = f.classSortAsc, f = f.classSortDesc;
    b === 0 ? (d.removeClass(h), g.removeClass(q + " " + f)) : (d.addClass(h), b === 1 ? g.addClass(q).removeClass(f) : b === 2 && g.addClass(f).removeClass(q))
  };
  a._closest = function(a) {
    return Util$.safe$(a).closest("div." + this._options.classColHeader, this._head)
  };
  a._getDef = function(a) {
    return this.getColMgr().getByKey(a.attr("colKey"))
  };
  a._sort = function(a, b, d) {
    a = d.sorter;
    this.triggerGridEvent("onBeforeColSort_" + d.key, !1, !0);
    this.triggerGridEvent("onBeforeColSort", !1, !0);
    a.desc = a.desc === !1 ? !0 : !1;
    this.getDataMgr().refresh({sorter:a});
    this.getView()._scroll()
  };
  a._onChangeSorter = function(a, b) {
    a !== b && a && this._updateIndicator(a.key, 0);
    b && this._updateIndicator(b.key, b.desc ? 2 : 1)
  };
  a._initReorder = function() {
    var a = this, b = this._options, d = this.getColMgr(), f = this._head, g = this.mid.length + 1, h = function(a, c) {
      for(var b = $(f).sortable("toArray"), e = b.length, h, p = 0;p < e;p++) {
        h = b[p], b[p] = h === "" ? c.item.attr("id").substring(g) : h.substring(g)
      }
      d.sortByKey(b)
    };
    f.sortable({items:"." + b.classColHeader, axis:"x", forcePlaceholderSize:!0, placeholder:b.classColHeaderPlaceholder + " " + b.classColHeader, tolerance:"pointer", start:function(b, e) {
      e.item.addClass(a._options.classColHeaderActive)
    }, stop:function(b, e) {
      e.item.removeClass(a._options.classColHeaderActive);
      a._syncResizeHandles()
    }, update:h});
    b.reorderSyncEnabled && f.sortable("option", "change", h)
  };
  a._getDx = function(a, b) {
    var f = a.clientX - this._resizeInitX, g = b.minW, j = d.ifNull(b.maxW, Number.MAX_VALUE), h = this._resizeInitWidth;
    h + f < g && (f = g - h);
    h + f > j && (f = j - h);
    return f
  };
  a._click = function(a) {
    var b = this._closest(a.target);
    if(b.length !== 0) {
      var d = this._getDef(b), f = d.key, a = [a, b, d];
      this.getEventMgr().triggerInvalid("clickHeaderValid_" + f, a) || (this.triggerGridEvent("clickHeader_" + f, a, !0), this.triggerGridEvent("clickHeader", a, !0))
    }
  };
  a._mousedown = function(a) {
    var b = this._options;
    if(d.hasTagAndClass(a.target, "DIV", b.classResizeHandle)) {
      var f = this._resizeKey = a.target.getAttribute("key");
      this._resizeInitWidth = this.get(f)[0].clientWidth;
      this._resizeInitColWidth = this.getColMgr().getByKey(f).width;
      this._resizeInitX = a.clientX;
      this._resizeHandleInitX = this._resizeMap[f][0].offsetLeft;
      this._resizeGuide[0].style.left = Math.floor(this._resizeHandleInitX + (b.resizeHandleWidth - b.resizeGuideWidth) / 2 - b.scrollerLeft) + "px";
      this._resizeGuide[0].style.height = this.getView().getInnerHeight() + "px"
    }else {
      if(b = this._closest(a.target), b.length) {
        var g = this._getDef(b), f = g.key, a = [a, b, g];
        this.triggerGridEvent("mousedownHeader", a, !0);
        this.triggerGridEvent("mousedownHeader_" + f, a, !0)
      }
    }
  };
  a._dragmove = function(a) {
    var b = this._resizeKey;
    if(b != null && (a = this._getDx(a, this.getColMgr().getByKey(b)), !(Math.abs(a) < 1))) {
      var d = this._options;
      this.get(b)[0].style.width = this._resizeInitWidth + a + "px";
      this._moveResizeHandles(this._resizeHandleInitX + a - this._resizeMap[b][0].offsetLeft, this.getColMgr().getIdxByKey(b));
      this._resizeGuide[0].style.left = Math.floor(this._resizeHandleInitX + a + (d.resizeHandleWidth - d.resizeGuideWidth) / 2 - d.scrollerLeft) + "px";
      d.syncResize && this.getView().setWidthByKey(b, this._resizeInitColWidth + a)
    }
  };
  a._mouseup = function(a) {
    var b = this._resizeKey;
    if(b != null) {
      this._resizeGuide[0].style.height = "0px", a = this._getDx(a, this.getColMgr().getByKey(b)), Math.abs(a) >= 1 && this.getView().setWidthByKey(b, this._resizeInitColWidth + a), delete this._resizeKey, delete this._resizeInitX, delete this._resizeHandleInitX, delete this._resizeInitWidth, delete this._resizeInitColWidth
    }
  };
  a._setWidthByKey = function(a, b) {
    this.get(a)[0].style.width = b + this.getView()._colWidthPlus() - this._widthPlus() + "px";
    this._syncResizeHandles(this.getColMgr().getIdxByKey(a));
    this.getView()._scroll()
  };
  a._syncResizeHandles = function(a) {
    for(var a = a || 0, b = this.getView()._getColLefts(), d = this.getColumns(), f = d.length, g = this._resizeMap, h;a < f;a++) {
      if(h = d[a].key, g.hasOwnProperty(h)) {
        g[h][0].style.left = b[a + 1] + this._resizeHandleOffset + "px"
      }
    }
  };
  a._moveResizeHandles = function(a, b) {
    for(var b = b || 0, d = this.getColumns(), f = d.length, g = this._resizeMap, h;b < f;b++) {
      if(h = d[b].key, g.hasOwnProperty(h)) {
        h = g[h][0], h.style.left = h.offsetLeft + a + "px"
      }
    }
  };
  a._onScrollViewportV = function() {
    this._resizeGuide[0].style.top = this.getView().getScrollTop() + "px"
  };
  a._initResizeHandles = function() {
    for(var a = this.getColumns(), b = a.length, d = this.getView(), f = d.mid, d = d._getColLefts(), g = this._options, h = this._resizeMap, q, k = 0, n = this._resizeHandleOffset = Math.floor(g.scrollerLeft - g.resizeHandleWidth / 2), m = g.classResizeHandle, o = this._head;k < b;k++) {
      if(g = a[k], g.resizable) {
        q = g.key, h[q] = $("<div class='" + m + "' key='" + q + "' ondblclick='JGM.m.ViewportManager." + f + '._autoColWidth("' + q + "\")' style='left:" + (n + d[k + 1]) + "px' title='" + g.name + " 컬럼의 폭을 조절합니다.'>").appendTo(o)
      }
    }
  }
})();
jx.grid.CheckManager = {};
(function() {
  function f(a) {
    function e() {
      var a = this._options, c = this._isRadio = a.isRadio = !!a.isRadio;
      this._hasMaster = a.master = !c && !!a.master;
      this._col = a.colDef;
      this._key = this._col.key;
      this._cssClass = a.classCheck;
      this._cssClassMaster = a.classMasterCheck;
      this._name = a.name || c && "radio" + this.mid || null
    }
    this.addEventListener("afteroption", e);
    b.call(this, a);
    this.removeEventListener("afteroption", e)
  }
  var g = goog.getObjectByName("jx.grid"), d = goog.getObjectByName("jx.util"), b = goog.getObjectByName("jx.grid.BaseModule");
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
    if(d.isNull(b._checkboxWidth)) {
      a = d.calCheckSize(), b._checkboxWidth = a.checkboxW, b._checkboxHeight = a.checkboxH, b._radioWidth = a.radioW, b._radioHeight = a.radioH
    }
  };
  a._bindEvents = function() {
    var a = this._col.key, b;
    b = {onAfterSetDatalist:this.uncheckAll, onIdChange:this._onIdChange, onIdListChange:this._onIdListChange, onRemoveDatarow:this._onRemoveDatarow, onRemoveDatalist:this._onRemoveDatalist};
    b["onRenderCell_" + a + "_prepend"] = this._onRenderCell;
    b["keydownColSel_" + a + "_" + d.keyMapKeydown.space] = this._keydownColSel;
    if(this._hasMaster) {
      b["onRenderHeader_" + a + "_prepend"] = this._onRenderHeader, b.onRenderHeadersComplete = this._getMaster
    }
    this.bindGridEvent(b, this)
  };
  a._defaultOptions = function() {
    return{colDef:{key:"checkbox", width:20, name:" ", noTitle:!0, resizable:!1, sorter:null, filter:null, noSearch:!0, editor:null, inputOnCreate:!1}, colIdx:0, name:void 0, classCheck:"checkmg", classMasterCheck:"checkm", master:!0, isRadio:!1}
  };
  a._beforeCreateCss = function(a) {
    var b, d, f = a.css;
    this._isRadio ? (a = g._CONST._radioWidth, b = g._CONST._radioHeight) : (a = g._CONST._checkboxWidth, b = g._CONST._checkboxHeight);
    d = "*overflow:hidden;padding:0;width:" + a + "px;height:" + b + "px;";
    f.push(this.getView()._getCellSelector() + " ." + this._cssClass + "[mid='" + this.mid + "']{" + d + "margin:" + (this.getView()._getRowInnerHeight() - b) / 2 + "px 0 0 " + (this._col.width - this.getView()._getPadding() - a) / 2 + "px}#" + this.mid + "h{" + d + "margin:" + (this.getHeader()._options.height - b) / 2 + "px 0 0 0}")
  };
  a.checkList = function(a, b) {
    if(!b) {
      a = this.getDataMgr().mapList(a).mapped
    }
    for(var d = 0, f = a.length;d < f;d++) {
      this.check(a[d], !0)
    }
  };
  a.setCheckList = function(a, b) {
    this.uncheckAll();
    this.checkList(a, b)
  };
  a.getCheckList = function() {
    return d.toArray(this._map)
  };
  a.getDisableds = function() {
    return d.toArray(this.disabledmap)
  };
  a.toggleCheckAll = function() {
    this.isCheckedAll() ? this.uncheckAll() : this.checkAll()
  };
  a.checkAll = function() {
    this._hasMaster && f._check(this._master);
    f._check(this.getCheckboxes());
    for(var a = this.getAllData(), b = a.length, d = this.getIdKey(), g = this._map, j = 0;j < b;j++) {
      g[a[j][d]] = a[j]
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
    var d = this.getDataMgr();
    b || (a = d.map(a));
    var d = d.getId(a), g = this.disabledmap;
    g.hasOwnProperty(d) || (g[d] = a, f.disableNode(this.getCheckbox(a)), this.triggerGridEvent("onDisableCheck", [a], !0))
  };
  a.enable = function(a, b) {
    var d = this.getDataMgr();
    b || (a = d.map(a));
    var d = d.getId(a), g = this.disabledmap;
    g.hasOwnProperty(d) && (delete g[d], f.enableNode(this.getCheckbox(a)), this.triggerGridEvent("onEnableCheck", [a], !0))
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
    var d = this.getDataMgr();
    b || (a = d.map(a));
    return this._map.hasOwnProperty(d.getId(a))
  };
  a.isDisabled = function(a, b) {
    var d = this.getDataMgr();
    b || (a = d.map(a));
    return this.disabledmap.hasOwnProperty(d.getId(a))
  };
  a.splitChecked = function(a, b) {
    if(!b) {
      a = this.getDataMgr().mapList(a).mapped
    }
    for(var d = [], f = [], g = 0, h = a.length, q = this.getIdKey(), k, n = this._map;g < h;g++) {
      n.hasOwnProperty((k = a[g])[q]) ? d.push(k) : f.push(k)
    }
    return{checked:d, unchecked:f}
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
    for(var b = a.length, d = [], f = 0, g = this.getColMgr().getIdxByKey(this._key);f < b;f++) {
      d.push(a[f].childNodes[g].childNodes[0])
    }
    return d
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
    for(var b = 0, d = a.length;b < d;b++) {
      this.uncheck(a[b], !0), this.enable(a[b], !0)
    }
  };
  a._onIdChange = function(a, b, d) {
    var f = this._map, g = this.disabledmap;
    f.hasOwnProperty(b) && (delete f[b], f[d] = a);
    g.hasOwnProperty(b) && (delete g[b], g[d] = a)
  };
  a._onIdListChange = function(a, b, d) {
    for(var f = 0, g = a.length, h = this._map, q = this.disabledmap, k, n;f < g;f++) {
      k = a[f], n = b[f], h.hasOwnProperty(n) && (delete h[n], h[k[d]] = k), q.hasOwnProperty(n) && (delete q[n], q[k[d]] = k)
    }
  };
  a._keydownColSel = function(a, b, d) {
    a.preventDefault();
    if(b && d) {
      var a = this.isChecked(d.getDatarow(), !0), f, d = this.getDataList();
      if(this._isRadio) {
        for(f in b) {
          if(b.hasOwnProperty(f) && f !== "length") {
            this.check(d[f], !0);
            break
          }
        }
      }else {
        for(f in b) {
          b.hasOwnProperty(f) && f !== "length" && (a ? this.uncheck(d[f], !0) : this.check(d[f], !0))
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
  a._onRenderCell = function(a, b, d, f, g) {
    g.push("<input tabIndex='-1' onclick=\"JGM.m.CheckManager." + this.mid + ".toggleById('" + d[this.getIdKey()] + "')\" type='" + (this._isRadio ? "radio" : "checkbox") + "' class='" + this._cssClass + "' mid='" + this.mid + "'");
    this._name && g.push(" name='" + this._name + "'");
    this.isChecked(d, !0) && g.push(" checked='checked'");
    (this._disabled || this.isDisabled(d, !0)) && g.push(" disabled='disabled'");
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
jx.grid.Collapser = {};
(function() {
  function f(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    this.grid.collapser = this;
    this._options = g._extend({key:void 0, colDef:{key:"collapser", width:120, name:" ", noSearch:!0}, colIdx:0, urlCollapsed:this.grid._options.imageUrl + "collapsed.png", urlCollapsedHover:this.grid._options.imageUrl + "collapsed-hover.png", urlExpanded:this.grid._options.imageUrl + "expanded.png", urlExpandedHover:this.grid._options.imageUrl + "expanded-hover.png", width:6, padding:5, classCollapser:"jgrid-collapser", classCollapsed:"collapsed", classExpanded:"expanded", classIndent:"indent", 
    classMasterCollapser:"master", indentSize:12, beginCollapsed:!1, CheckManager:void 0, Tree:void 0}, a.options);
    if(this._options.CheckManager) {
      this.checkMgr = g.create("CheckManager", {grid:this.grid, options:this._options.CheckManager}), delete this._options.CheckManager, d.isNull(this._options.key) && this._options.colIdx++
    }
    this._tree = new b({list:this.grid.dataMgr.all, options:this._options.Tree})
  }
  var g = goog.getObjectByName("jx.grid"), d = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  var b = goog.getObjectByName("jx.struct.Tree");
  goog.exportSymbol("jx.grid.Collapser", f);
  f.getInstance = function(a) {
    return new f(a)
  };
  var a = f.prototype;
  a.__init = function() {
    d.isNull(this._options.key) && this.grid.colDefMgr.addAt(this._options.colIdx, this._options.colDef);
    this._makeTree();
    this._filterRefresh();
    this.key = d.isNull(this._options.key) ? this._options.colDef.key : this._options.key;
    this.bindEvents()
  };
  a.bindEvents = function() {
    var a = this.key, b;
    b = {onAfterFilter:this._onAfterFilter, onCreateCss:this._onCreateCss, onDestroy:this._destroy, onAfterSetDatalist:this._onAfterSetDatalist, onAddDatarow:this._onAddDatarow, onAddDatalist:this._onAddDatalist, onUpdateDatarow:this._onUpdateDatarow, onUpdateDatalist:this._onUpdateDatalist, onRemoveDatarow:this._onRemoveDatarow, onRemoveDatalist:this._onRemoveDatalist, onRenderHeadersComplete:this._getMaster};
    b["onRenderHeader_" + a + "_prepend"] = this._onRenderHeader;
    b["clickHeaderValid_" + a] = this._clickHeaderValid;
    b["onRenderCell_" + a + "_prepend"] = this._onRenderCell;
    b["dblclickCanvas_" + a] = this._dblclickCanvas;
    b["keydownColSel_" + a + "_" + d.keyMapKeydown.space] = this._keydownColSel;
    if(d.isNotNull(this.checkMgr)) {
      b.onCheckChange = this._onCheckChange
    }
    this.grid.event.bind(b, this)
  };
  a._destroy = function() {
    g._destroy(this, {name:"Collapser", path:"collapser", module:"_tree", $:"_master", property:"checkMgr", map:"_options"})
  };
  a._onCreateCss = function() {
    var a = "#" + this.grid.mid + " .", b = this._options, f = a + this.grid.view._options.classRow + " .", g = a + b.classCollapser, j = g + "." + b.classExpanded, h = g + "." + b.classCollapsed, q = this.grid.view._getRowInnerHeight(), k = [], n = this.grid.header;
    k.push(a + b.classIndent + "{height:" + q + "px;float:left;}");
    k.push(g + "{width:" + b.width + "px;float:left;padding:0 " + b.padding + "px}");
    k.push(f + b.classCollapser + "{height:" + q + "px}");
    k.push(j + "{background:url(" + b.urlExpanded + ") no-repeat center transparent}");
    k.push(j + ":hover{background:url(" + b.urlExpandedHover + ") no-repeat center transparent}");
    k.push(h + "{background:url(" + b.urlCollapsed + ") no-repeat center transparent}");
    k.push(h + ":hover{background:url(" + b.urlCollapsedHover + ") no-repeat center transparent}");
    d.isNotNull(n) && k.push(a + n._options.classColHeader + " ." + b.classCollapser + "{height:" + n._options.height + "px}");
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
    a._shown = d.isNotNull(a.parent) && (a.parent === a.tree.root || a.parent._shown && !a.parent._collapsed) ? !0 : !1;
    d.isNotNull(a.parent) && a.parent.children.length === 1 && this.grid.view.rerenderCellByIdAndKey(this.grid.dataMgr.getId(a.parent.data), this.key);
    a._collapsed === !0 || a._shown === !1 ? a.traverseChildren({fn:function() {
      this._shown = !1
    }}) : a.traverseChildren({fn:function(a) {
      d.isNotNull(this.parent) && (this.parent === this.tree.root || this.parent._shown && !this.parent._collapsed) ? this._shown = !0 : (a.propagate = !1, this.traverse({fn:function() {
        this._shown = !1
      }}))
    }});
    this.grid.event.trigger("onCollapserTreeChange", !1, !0)
  };
  a._onAddDatalist = function(a) {
    for(var b = 0, f = a.length, g = this._tree, j = g.root, h = this._options.beginCollapsed, q = this.key, k = this.grid.view, n = this.grid.dataMgr, m, o = [], p;b < f;b++) {
      m = g.createNode(a[b]), m._collapsed = h, d.isNotNull(m.parent) && m.parent.children.length === 1 && o.push(m.parent.data)
    }
    if(k !== void 0) {
      b = 0;
      for(f = o.length;b < f;b++) {
        k.rerenderCellByIdAndKey(n.getId(o[b]), q)
      }
    }
    j.traverseChildren({fn:function(a) {
      p = this.parent;
      d.isNotNull(p) && (p === j || p._shown && !p._collapsed) ? this._shown = !0 : (a.propagate = !1, this.traverse({fn:function() {
        this._shown = !1
      }}))
    }});
    this.grid.event.trigger("onCollapserTreeChange", !1, !0)
  };
  a._onUpdateDatarow = function(a, b, f) {
    var g = this._tree, j = g._options.nodeKey, h = g._options.parentKey, q;
    b.hasOwnProperty(j) && (q = g.getNodeByNodeId(f[j]), g.changeNodeId(q, f[j], b[j]), this.grid.event.trigger("onCollapserTreeChange", !1, !0));
    b.hasOwnProperty(h) && (d.isNull(q) && (q = g.getNode(a)), g.changeParentId(q, f[h], b[h]), this.grid.event.trigger("onCollapserTreeChange", !1, !0))
  };
  a._onUpdateDatalist = function(a, b, f) {
    for(var b = this._tree, g = b._options.nodeKey, j = b._options.parentKey, h, q, k, n = [], m = [], o = 0, p = a.length;o < p;o++) {
      h = f[o], q = a[o], k = void 0, h.hasOwnProperty(g) && (d.isNull(k) && (k = b.getNodeByNodeId(h[g])), n.push({node:k, before:h[g], newId:q[g]})), h.hasOwnProperty(j) && (d.isNull(k) && (k = b.getNode(q)), m.push({node:k, before:h[j], newId:q[j]}))
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
    for(var b = 0, d = a.length, f = this._tree;b < d;b++) {
      f.destroyNodeByData(a[b])
    }
    this.grid.event.trigger("onCollapserTreeChange", !1, !0)
  };
  a._onAfterFilter = function(a, b) {
    var f = this._tree;
    if(b.length > 0) {
      var g = this.grid.dataMgr, j = a.length, h = g._idToIdx, q = g.idKey, k, n = 0, m = function(f) {
        d.isNotNull(this.parent) ? (k = this.parent.data, d.isNotNull(k) && !g.has(k) && (a.push(k), b.remove(k), h[k[q]] = -1)) : f.stop = !0
      };
      g._reidx();
      for(f.reattach();n < j;n++) {
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
    if(d.isNotNull(a)) {
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
    if(d.hasTagAndClass(a.target, "DIV", this._options.classCollapser)) {
      return!1
    }
  };
  a._dblclickCanvas = function(a, b) {
    d.hasTagAndClass(a.target, "DIV", this._options.classCollapser) || this.toggleCollapse(this._tree.getNode(b.getDatarow()))
  };
  a._keydownColSel = function(a, b, f) {
    a.preventDefault();
    if(d.isNotNullAnd(b, f)) {
      var a = this._tree, f = a.getNode(f.getDatarow())._collapsed, g = this.grid.dataMgr.datalist, j, h;
      for(h in b) {
        b.hasOwnProperty(h) && h !== "length" && (j = a.getNode(g[h]), f ? this.expand(j) : this.collapse(j))
      }
      this._filterRefresh()
    }
  };
  a._makeTree = function() {
    var a = this._tree, b, d;
    a.__init();
    d = a.map;
    a = a.root;
    if(this._options.beginCollapsed) {
      for(b in d) {
        if(d.hasOwnProperty(b)) {
          d[b]._collapsed = !0, d[b]._shown = !1
        }
      }
      d = a.children;
      var f = d.length;
      for(b = 0;b < f;b++) {
        d[b]._shown = !0
      }
      a._collapsed = !0
    }else {
      for(b in d) {
        if(d.hasOwnProperty(b)) {
          d[b]._collapsed = !1, d[b]._shown = !0
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
  a._onRenderCell = function(a, b, f, g, j) {
    a = this._tree.getNode(f);
    if(d.isNull(a)) {
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
    return d.isNull(a) ? null : a.getLevel()
  };
  a.collapse = function(a, b) {
    if(!(a._collapsed === !0 || a.isLeaf())) {
      a._collapsed = !0;
      a.traverseChildren({fn:function(a) {
        this._shown = !1;
        this._collapsed && (a.propagate = !1)
      }});
      var d = this._getCollapser(a.data);
      d.length > 0 && this._setClass(d, !0);
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
      var d = this._getCollapser(a.data), f = this._tree;
      d.length > 0 && this._setClass(d, !1);
      if(!b && a.parent === f.root) {
        for(var d = f.root.children, g = d.length, h = 0;h < g;h++) {
          if(d[h]._collapsed) {
            return
          }
        }
        this._setClass(this._master, f.root._collapsed = !1)
      }
    }
  };
  a._setClass = function(a, b) {
    if(!d.isNull(a)) {
      var f = this._options;
      b ? a.addClass(f.classCollapsed).removeClass(f.classExpanded) : a.addClass(f.classExpanded).removeClass(f.classCollapsed)
    }
  };
  a.toggleMaster = function() {
    var a = this._tree.root, b = a.children, d = b.length, f = 0;
    if(a._collapsed) {
      for(;f < d;f++) {
        this.expand(b[f], !0)
      }
      this._setClass(this._master, a._collapsed = !1)
    }else {
      for(;f < d;f++) {
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
    var f = this._tree.getNode(a), l = this.checkMgr, j = [], h;
    b ? (f.traverseChildren({fn:function(a) {
      l.isChecked(this.data) ? a.propagate = !1 : (l._add(this.data), d.isNotNull(h = l.getCheckbox(this.data)) && j.push(h))
    }}), f.traverseParent({up:!0, fn:function(a) {
      d.isNull(this.data) || l.isChecked(this.data) ? a.stop = !0 : (l._add(this.data), d.isNotNull(h = l.getCheckbox(this.data)) && j.push(h))
    }}), g.CheckManager._check($(j)), l._updateMaster()) : (f.traverseChildren({fn:function(a) {
      l.isChecked(this.data) ? (l._remove(this.data), d.isNotNull(h = l.getCheckbox(this.data)) && j.push(h)) : a.propagate = !1
    }}), f.traverseParent({up:!0, fn:function(a) {
      if(d.isNull(this.data) || !l.isChecked(this.data)) {
        a.stop = !0
      }else {
        for(var b = 0, c = this.children, e = c.length;b < e;b++) {
          if(l.isChecked(c[b].data)) {
            a.stop = !0;
            return
          }
        }
        l._remove(this.data);
        d.isNotNull(h = l.getCheckbox(this.data)) && j.push(h)
      }
    }}), g.CheckManager._uncheck($(j)))
  };
  a._filterRefresh = function() {
    this._filter(this.grid.dataMgr.datalist, this.grid.dataMgr.failed);
    this.grid.dataMgr._finish()
  };
  a._getCollapser = function(a) {
    if(d.isNull(a)) {
      return $([])
    }
    a = d.findFirstByTagAndClass(this.grid.view.getCell(this.grid.dataMgr.getIdx(a), this.grid.colDefMgr.getIdxByKey(this.key)), "DIV", this._options.classCollapser);
    return a === void 0 ? $([]) : $(a)
  };
  a._getMaster = function() {
    this._master = $(document.getElementById(this.mid + "h"))
  }
})();
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
  var g = goog.getObjectByName("jx.grid"), d = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.getObjectByName("jx.grid.Collapser");
  goog.exportSymbol("jx.grid.ColumnGroup", f);
  f.getInstance = function(a) {
    return new f(a)
  };
  var b = f.prototype;
  b.__init = function() {
    var a = this.grid, b = a.dataMgr, e = this._options;
    this.bindEvents();
    a = this.collapser = g.create("Collapser", {grid:a, options:e.Collapser});
    delete e.Collapser;
    this._processData(b.all);
    a.__init();
    b.refresh()
  };
  b.bindEvents = function() {
    var a;
    a = {onBeforeSetDatalist:this._removeAll, "onAfterSetDatalist onAddDatalist":this._processData, onAddDatarow:this._onAddDatarow, onUpdateDatarow:this._onUpdateDatarow, onUpdateDatalist:this._onUpdateDatalist, onRemoveDatarow:this._onRemoveDatarow, onRemoveDatalist:this._onRemoveDatalist, onDestroy:this._destroy};
    if(this._options.sumColKeys.length !== 0) {
      var b = this.mid, e = this.grid.dataMgr._consts._notReal, d = 0, f, g = this._options.sumColKeys, h = this._options.prefix, q = g.length;
      for(f = function(a, d, f, g, i) {
        f[e] === b && i.push(h)
      };d < q;d++) {
        a["onRenderCell_" + g[d] + "_prepend"] = f
      }
      a.onCollapserTreeChange = this._onCollapserTreeChange
    }
    this.grid.event.bind(a, this)
  };
  b._destroy = function() {
    g._destroy(this, {name:"ColumnGroup", path:"colGroup", property:"collapser", map:"_parentMap _options"})
  };
  b._processData = function(a) {
    for(var b = a.length, e = this._options.key, f = this._options.padColKeys, g = this.grid.dataMgr, j = g._consts._notReal, h = g.idKey, q = this.collapser, k = q._tree._options.nodeKey, n = q._tree._options.parentKey, m = [], o = 0;o < b;o++) {
      this._addData(a[o], e, h, j, k, n, f, m)
    }
    m.length !== 0 && (g.all.pushList(m), g.makeCompositeKeyList(m, !0), g.addListToIdMap(m), d.isNotNull(q) && q._onAddDatalist(m));
    return m
  };
  b._addData = function(a, b, e, d, f, g, h, q) {
    var k = a[b], n = this._parentMap;
    n.hasOwnProperty(k) || (b = this._makeParent(a, b, e, k, d, f, h), q.push(b), n[k] = b);
    a[f] = a[e];
    a[g] = this.mid + k
  };
  b._makeParent = function(a, b, d, f, g, j, h) {
    var q = {}, k = 0, n = h.length;
    q[g] = this.mid;
    q[j] = this.mid + f;
    q[b] = f;
    for(q[d] = (this.grid.colDefMgr.getByKey(b).name || b) + ": " + f;k < n;k++) {
      q[h[k]] = a[h[k]]
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
    var b = [], d = this._options, f = this.grid.dataMgr, g = this.collapser, j = g._tree._options;
    this._addData(a, d.key, f.idKey, f._consts._notReal, j.nodeKey, j.parentKey, d.padColKeys, b);
    b.length !== 0 && (a = b[0], f.all.push(a), f.makeCompositeKey(a, !0), f.addToIdMap(a), g._onAddDatarow(a))
  };
  b._onUpdateDatarow = function(a, b, d) {
    if(b.hasOwnProperty(this._options.key)) {
      var f = this._options.key, b = b[f], d = d[f], g = this.mid, f = this.collapser, j = f._tree, h = j._options.parentKey, q = {}, k = {}, n = this._parentMap;
      n.hasOwnProperty(b) || this._onAddDatarow(a);
      q[h] = g + b;
      k[h] = g + d;
      f._onUpdateDatarow(a, q, k);
      a = j.getNode(n[d]);
      a.children.length === 0 && (this.grid.dataMgr.all.remove(a.data), delete n[d], f._onRemoveDatarow(a.data))
    }
  };
  b._onUpdateDatalist = function(a, b, d) {
    var f = this._options.key, g = this.mid, j = this.collapser, h = j._tree, q = h._options.parentKey, k, n = {};
    k = {};
    for(var m = [], o = [], p = [], r = 0, s = a.length;r < s;r++) {
      k = b[r], k.hasOwnProperty(f) && (n = {}, n[q] = g + k[f], m.push(n), k = {}, k[q] = g + d[r][f], o.push(k), p.push(a[r]))
    }
    if(p.length !== 0) {
      a = this._parentMap;
      b = [];
      this._processData(p);
      j._onUpdateDatalist(p, m, o);
      r = 0;
      for(s = o.length;r < s;r++) {
        m = o[r][q], a.hasOwnProperty(m) && (p = h.getNode(a[m]), p.children.length === 0 && (delete a[m], b.push(p.data)))
      }
      b.length !== 0 && (j._onRemoveDatalist(b), this.grid.dataMgr.all.removeList(b))
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
    for(var a = {}, b = this._options.sumColKeys, d = b.length, f = 0, g = this.grid.dataMgr._consts._notReal, j = this.mid, h, q, k;f < d;f++) {
      a[b[f]] = 0
    }
    this.collapser._tree.root.traverseChildren({post:!0, fn:function() {
      h = this.data;
      f = 0;
      if(h[g] === j) {
        for(;f < d;f++) {
          q = b[f], h[q] = a[q], a[q] = 0
        }
      }else {
        if(!h.hasOwnProperty(g)) {
          for(;f < d;f++) {
            if(typeof(k = h[b[f]]) === "string") {
              k = k.toFloat()
            }
            a[b[f]] += isNaN(k) ? 0 : k
          }
        }
      }
    }})
  }
})();
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
  var g = goog.getObjectByName("jx.grid"), d = goog.getObjectByName("jx.util");
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
    for(var a = [], b = this.grid.colDefMgr.getAll(), e = b.length, f, g = this._options, j = g.classCol, h = g.classColName, q = this, k = this._creator, n = this._inputMap, m = 0, o = function(a) {
      a.which === d.keyMapKeydown.enter && q._addData()
    };m < e;m++) {
      f = b[m], f.inputOnCreate === !0 && a.push("<div key='" + f.key + "' class='" + j + "'><div class='" + h + "'>" + f.name + "</div><input type='text' value='" + d.ifNull(f.defaultValue, "") + "' style='width:" + f.width + "px'/></div>")
    }
    k[0].innerHTML = a.join("") + "<button type='button' onclick='JGM.m.DataCreator." + this.mid + "._addData()'>등록</button><button type='button' onclick='JGM.m.DataCreator." + this.mid + "._reset()'>초기화</button>";
    for(m = 0;m < e;m++) {
      f = b[m], f.inputOnCreate === !0 && (n[f.key] = k.find("div[key='" + f.key + "'] input").keyup(o))
    }
    d.isNotNull(this.grid.menubar) && (this.grid.menubar.addIcon(g.classCreatorIcon, "데이터 로우를 추가합니다.", g.creatorIconWidth, g.creatorIconHeight, function() {
      k.toggle("fast")
    }), k.hide())
  };
  b._addData = function() {
    var a, b = this._inputMap, d = this.grid.colDefMgr, f = {}, g = d.getAll(), j = g.length, h = 0;
    for(a in b) {
      b.hasOwnProperty(a) && d.getByKey(a)
    }
    for(;h < j;h++) {
      d = g[h], a = d.key, b.hasOwnProperty(a) ? f[a] = b[a][0].value : d.defaultValue !== void 0 && (f[a] = d.defaultValue)
    }
    this.grid.event.trigger("onAfterDataCreate", [f], !0);
    this.grid.dataMgr.add(f, {isNew:!0})
  };
  b._reset = function() {
    var a, b = this.grid.colDefMgr, d, f = this._inputMap;
    for(a in f) {
      if(f.hasOwnProperty(a) && (d = b.getByKey(a), d.defaultValue !== void 0)) {
        f[a][0].value = d.defaultValue
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
  var g = goog.getObjectByName("jx.grid"), d = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.SearchManager", f);
  var b = f.prototype;
  b._onCreateCss = function() {
    var a = "#" + this.grid.mid + " .", b = this._options, c = b.borderThickness + "px " + b.border, d = "border-radius:" + b.tagsBorderRadius + "px;-moz-border-radius:" + b.tagsBorderRadius + "px", e = b.advButtonBorderThickness + "px " + b.advButtonBorder, f = b.advButtonBorderThickness + "px " + b.advButtonBorderHover, h = b.advButtonBorderThickness + "px " + b.advButtonBorderActive, i = b.advButtonBorderThickness + "px " + b.advButtonBorderOpened, j = b.tagsHeight - 2 * b.tagsPadding, k = j - 
    2 * b.advButtonBorderThickness, l = j - 2 * b.tagBorderThickness, m = a + b.classMask, n = a + b.classSearchbar, o = a + b.classAdvButton, p = a + b.classRemoveTag, q = [];
    q.push(m + "{" + g._CONST._cssUnselectable + "overflow:hidden;width:100%;background:" + b.background + "}");
    q.push(m + " button{margin:0;padding:0 3px}");
    q.push(m + " input{border:" + b.inputBorder + ";padding:" + b.inputPadding + "}");
    q.push(n + "{text-align:" + b.searchbarAlign + ";border-bottom:" + c + "}");
    q.push(n + " input{width:" + b.searchbarWidth + ";margin:" + b.searchbarMargin + "px 0;height:" + b.searchbarHeight + "px;" + d + "}");
    q.push(a + b.classTagbar + "{cursor:default;height:" + (b.tagsHeight - b.tagsPadding) + "px;padding:" + b.tagsPadding + "px 0 0 " + b.tagsPadding + "px;border-bottom:" + c + "}");
    q.push(o + "{float:left;margin-right:" + b.tagsPadding + "px;background:" + b.advButtonBg + ";border:" + e + ";padding:0 " + b.advButtonPadding + "px;" + d + "}");
    q.push(o + ":hover{background:" + b.advButtonBgHover + ";border:" + f + "}");
    q.push(o + ".opened{background:" + b.advButtonBgOpened + ";border:" + i + "}");
    q.push(o + ":active{background:" + b.advButtonBgActive + ";border:" + h + "}");
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
    var a = this._options, b = this, c, e, f;
    c = this._mask = $("<div class='" + a.classMask + "'>").prependTo(this._ctnr);
    this._search = $("<div class='" + a.classSearchbar + "'><input type='text'/></div>").appendTo(c);
    this._masterInput = this._search.children(":eq(0)").keyup(function(a) {
      a.which === d.keyMapKeydown.enter ? b._parse($(this)[0].value) : a.which === d.keyMapKeydown.esc && b._removeAllOptions()
    });
    e = this._hasFilter = this.grid.colDefMgr.get().some(function(a) {
      return d.isNotNull(a.filter)
    });
    f = this._tag = $("<div class='" + a.classTagbar + "'>" + (e ? "<div class='" + a.classAdvButton + "'><div class='" + a.classAdvButtonName + "'>추가 옵션</div><div class='" + a.classAdvButtonIcon + "'></div></div>" : "") + "<button type='button' class='" + a.classClearTags + "' onclick='JGM.m.SearchManager." + this.mid + "._removeAllOptions()'>모든 필터 제거</button></div>").appendTo(c);
    if(e) {
      var g = this._adv = $("<div class='" + a.classAdvanced + "'>").appendTo(c).hide().keyup(function(a) {
        if(a.which === d.keyMapKeydown.enter) {
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
      for(var e = this.grid.colDefMgr.get(), f = e.length, g = b.keyMap, h = this._nameMap, i = this._keyToName, j, k, l, m = 0;m < f;m++) {
        if(j = e[m], d.isNotNull(j.filter)) {
          l = j.key, k = d.isNull(g) || !g.hasOwnProperty(l) ? j.name || l : g[l], h[k] = l, i[l] = k, a.push("<div class='" + b.classOptionCol + "'>"), this._registerFilter(l, k, j.name, j.filter, a), a.push("</div>")
        }
      }
      this._adv[0].innerHTML = a.join("")
    }
    d.isNotNull(this.grid.menubar) && (this.grid.menubar.addIcon(b.classSearchIcon, "데이터 검색을 합니다.", b.searchIconWidth, b.searchIconHeight, function() {
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
      d.hasOwnProperty(a) && (g._delete$(d[a], "tag"), g._deleteArray(d[a], "list"))
    }
    for(a in e) {
      if(e.hasOwnProperty(a)) {
        d = e[a];
        for(b in d) {
          d.hasOwnProperty(b) && (b !== "andor" && b !== "parser" && b !== "validator" && g._delete$(d[b], "input"), g._deleteMap(d, b))
        }
        g._deleteMap(e, a)
      }
    }
    for(a in f) {
      if(f.hasOwnProperty(a)) {
        e = f[a];
        for(b in e) {
          if(e.hasOwnProperty(b)) {
            d = e[b];
            for(c in d) {
              d.hasOwnProperty(c) && (g._delete$(d[c], "tag"), g._deleteMap(d, c))
            }
            g._deleteMap(e, b)
          }
        }
        g._deleteMap(f, a)
      }
    }
    g._destroy(this, {name:"SearchManager", path:"search", $:"_masterInput _advButton _mask _search _tag _adv", property:"_ctnr _hasFilter", array:"_global", map:"_globalMap _filterMap _tagMap _codeMap _nameMap _options _keyToName"})
  };
  b._onFilter = function(a, b) {
    if(!(this._global.length === 0 && d.isEmptyObj(this._codeMap))) {
      var c, e = this._tagMap, f, g, h = a.length, i, j = this._filterMap, k = this.constructor.CONST.and, l, m = this._global.length > 0, n, o;
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
            if(!d.isNull(q = h[s[c]])) {
              d.isString(q) || (q = q.toString());
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
        for(f in e) {
          if(e.hasOwnProperty(f)) {
            if(o = e[f], c = j[f].andor, i = h[f], c === k) {
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
    for(var b, c, e, f, g = d.split(a), h = g.length, i = 2, j = !1, k = [], l = this._nameMap, m = this._filterMap, n = 0;n < h;n++) {
      if(a = g[n], a !== "") {
        switch(i) {
          case 0:
            m[b].hasOwnProperty(a) && (e = a, i = 1);
            break;
          case 1:
            f = a;
            i = 2;
            break;
          case 2:
            a.charAt(0) === "@" ? (a = a.substring(1), l.hasOwnProperty(a) ? (d.isNotNullAnd(b, c, e, f) && this._registerOption(b, c, e, f, !0) && (j = !0), b = l[a], c = a, f = e = void 0, i = 0) : d.isNull(b) ? k.push(a) : f += " " + a) : d.isNull(b) ? k.push(a) : f += " " + a
        }
      }
    }
    d.isNotNullAnd(b, c, e, f) && this._registerOption(b, c, e, f, !0) && (j = !0);
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
  b._registerOption = function(a, b, c, e, g) {
    var h = this._filterMap, i, j = this._codeMap;
    if(h.hasOwnProperty(a) && (i = h[a]).hasOwnProperty(c)) {
      h = i[c];
      if(d.isNull(e)) {
        var k = h.input, e = $.trim(k.val());
        k.val("")
      }else {
        e = $.trim(e)
      }
      if(e.length === 0) {
        return!1
      }
      d.isNotNull(i.parser) && (e = i.parser(e));
      if(j.hasOwnProperty(a + "@T" + c + "@B" + e)) {
        return!1
      }
      if(d.isNotNull(i.validator) && !i.validator(e)) {
        return!1
      }
      h = h.option;
      i = i.andor
    }else {
      return!1
    }
    k = this._tagMap[a];
    if(k[c].hasOwnProperty(e)) {
      return!1
    }
    var l, m, n, o, q = this._filterMap[a], p;
    for(n in k) {
      if(k.hasOwnProperty(n)) {
        for(o in l = k[n], l) {
          l.hasOwnProperty(o) && (p = l[o], m = d.isNotNull(q.parser) ? q.parser(o) : o, f._checkDisable(h.type, p.option.type, i, e, m) && (delete j[a + "@T" + p.option.tag + "@B" + m], p.tag.remove(), delete p.tag, delete p.option, delete p.fn, delete l[o]))
        }
      }
    }
    j[a + "@T" + c + "@B" + e] = !0;
    this._createTag(a, h, e, b);
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
  var a = f.CONST = {lt:0, lte:1, eq:2, neq:3, gt:4, gte:5, and:6, or:7, T:8, F:9}, b = a.lt, c = a.gt, e = a.eq, i = a.neq, l = a.and, j = a.or, h = a.T, a = a.F, q = f._comparator = {}, k = q[b] = function(a, b) {
    return a <= b
  }, n = q[c] = function(a, b) {
    return a >= b
  }, m = q[e] = function(a, b) {
    return a === b
  }, h = q[h] = function() {
    return!0
  }, o = f._disableMap = {}, p = o[b] = {}, r = o[c] = {}, s = o[e] = {}, o = o[i] = {};
  q[a] = function() {
    return!1
  };
  p[b] = {};
  p[b][l] = h;
  p[b][j] = h;
  p[c] = {};
  p[c][l] = k;
  p[c][j] = n;
  p[e] = {};
  p[e][l] = h;
  p[e][j] = n;
  p[i] = {};
  p[i][l] = k;
  p[i][j] = h;
  r[b] = {};
  r[b][l] = n;
  r[b][j] = k;
  r[c] = {};
  r[c][l] = h;
  r[c][j] = h;
  r[e] = {};
  r[e][l] = h;
  r[e][j] = k;
  r[i] = {};
  r[i][l] = n;
  r[i][j] = h;
  s[b] = {};
  s[b][l] = h;
  s[b][j] = k;
  s[c] = {};
  s[c][l] = h;
  s[c][j] = n;
  s[e] = {};
  s[e][l] = h;
  s[e][j] = m;
  s[i] = {};
  s[i][l] = h;
  s[i][j] = h;
  o[b] = {};
  o[b][l] = n;
  o[b][j] = h;
  o[c] = {};
  o[c][l] = k;
  o[c][j] = h;
  o[e] = {};
  o[e][l] = h;
  o[e][j] = h;
  o[i] = {};
  o[i][l] = m;
  o[i][j] = h;
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
    d.isString(a) && (a = a.toFloat());
    return function(b) {
      return b > a
    }
  }}, {name:"gte", tag:">=", type:c, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 크거나 같은"
  }, fn:function(a) {
    d.isString(a) && (a = a.toFloat());
    return function(b) {
      return b >= a
    }
  }}, {name:"lt", tag:"<", type:b, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 작은"
  }, fn:function(a) {
    d.isString(a) && (a = a.toFloat());
    return function(b) {
      return b < a
    }
  }}, {name:"lte", tag:"<=", type:b, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 작거나 같은"
  }, fn:function(a) {
    d.isString(a) && (a = a.toFloat());
    return function(b) {
      return b <= a
    }
  }}, {name:"eq", tag:"=", type:e, comment:function(a, b) {
    return a + " 이(가) " + b + "인"
  }, fn:function(a) {
    d.isString(a) && (a = a.toFloat());
    return function(b) {
      return b === a
    }
  }}, {name:"neq", tag:"!=", type:i, comment:function(a, b) {
    return a + " 이(가) " + b + "이(가) 아닌"
  }, fn:function(a) {
    d.isString(a) && (a = a.toFloat());
    return function(b) {
      return b !== a
    }
  }}, {name:"contains", tag:"*=", comment:function(a, b) {
    return a + " 이(가) 숫자 " + b + "를 포함하는"
  }, fn:function(a) {
    a = d.isNumber(a) ? a.toString() : $.trim(a);
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
  }}, {name:"equals", tag:"=", type:e, comment:function(a, b) {
    return a + " 이(가) " + b + "와(과) 같은"
  }, fn:function(a) {
    a = $.trim(a).toLowerCase();
    return function(b) {
      return b.toLowerCase() === a
    }
  }}, {name:"notEquals", tag:"!=", type:i, comment:function(a, b) {
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
    var a = a.toLowerCase(), b = d.split(a), c = b.length;
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
    var a = a.toLowerCase(), b = d.split(a), c = b.length;
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
