/*
AUTHOR

	The JexGrid was written and is maintained by:
		Joon Ho Cho <joonho1101@gmail.com>

COPYRIGHT

	Copyright (c) 2010-2011, WebCash Inc. All rights reserved.

LICENSE

	- JexGrid License Policy -

	JexGrid �� ����� �뵵�� ���� ���� ���� �뵵�� ���� ����� �ΰ��� �ٸ� ���̼��� ��å�� �����ϴ�.
	����� �뵵�� ���� ��� ���̼����� �����Ͽ��� �ϰ�, ���� �뵵�� ���� ��쿡�� GNU GPL License Version 3 ��å�� �����ϴ�.

	1. �����: Commercial Software License
		- ������ �� 1����� ���̼��� ������ û���˴ϴ�. (List Price ����)
		- ���ɽ� ���� ���� ������Ʈ�� ���� ���� ������ ��å�� �����ϴ�.
			- ���� �Ⱓ ������� ���: ������Ʈ ���� �η� * 100���� / 1��
			- ��ǰ�� ���ԵǾ� �ܺη� �ǸŵǴ� ���: ������Ʈ ������ �� 1000������ �ַ�� ������ û���˴ϴ�.

	2. ���ο�: Open Source License

		- GNU GPL License Version 3 ���̼����� ��Ģ�� �����ϴ�.

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

		- �߿� ���� ���:
			- ��� �̿� ����
			- ���� �ҽ� ������ �ǹ�
			- Ư�� ��� ����
			- ���̼��� ������ �ǹ�
			- JexGrid �ۼ��ڴ� ����� ��û�� ���� ���� ��ġ�� �ǹ��� �����ϴ�.

	��� ��쿡�� ����ڴ� ���� ���̼��� ��å�� �����ϰų� ������ �� �����ϴ�.


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
          var h = b[e];
          f.call(d, h, e, b) && c.push(h)
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
        var h = String(e);
        a.hasOwnProperty(h) && (h = a[h], f.call(b, h, e, a));
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
console && console.log && console.log('reading javascript source "engine_extension.js"...');
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
      for(var a, c = 0, e = 0, h = b.length, q = 0, i = !1;q < h;q++) {
        if(a = b.charAt(q), a === ".") {
          if(++c === 2) {
            i = !0;
            break
          }
        }else {
          if(a === "-" && ++e === 2) {
            i = !0;
            break
          }
        }
      }
      return i === !0 && (b = b.replace(/[\.\-]/g, "")).length === 0 ? NaN : /^-*0*\./.test(b) || (b = b.replace(/^-0+/, "-")).length === 0 || (b = b.replace(/^0+/, "")).length === 0 ? 0 : parseInt(b, 10)
    }
  }
  if(!g.toFloat) {
    g.toFloat = function() {
      var b;
      if((b = this.replace(/[^-\d\.]/g, "")).length === 0) {
        return NaN
      }
      for(var a = 0, c = b.length, e, h = 0, q = 0;a < c;a++) {
        if(e = b.charAt(a), e === ".") {
          if(h !== 0) {
            return NaN
          }else {
            h++
          }
        }else {
          if(e === "-") {
            if(q !== 0) {
              return NaN
            }else {
              q++
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
    function f(a) {
      if(!(a in b.written)) {
        if(!(a in b.visited) && (b.visited[a] = !0, a in b.requires)) {
          for(var e in b.requires[a]) {
            if(!goog.isProvided_(e)) {
              if(e in b.nameToPath) {
                f(b.nameToPath[e])
              }else {
                throw Error("Undefined nameToPath for " + e);
              }
            }
          }
        }
        a in d || (d[a] = !0, g.push(a))
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
console && console.log && console.log('reading javascript source "util.js"...');
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
      for(var e = [], h = b.length, q = 0, c = c !== void 0 ? c - 1 : void 0;q < h;q++) {
        q in b && (e[q] = Util.clone(b[q], a, c))
      }
      return e
    }
    e = {};
    h = Util.isEmptyObj(a);
    if(c === 1) {
      if(h) {
        for(q in b) {
          b.hasOwnProperty(q) && (e[q] = b[q])
        }
      }else {
        for(q in a) {
          a.hasOwnProperty(q) && b.hasOwnProperty(q) && (e[q] = b[q])
        }
      }
    }else {
      if(c = c !== void 0 ? c - 1 : void 0, h) {
        for(q in b) {
          b.hasOwnProperty(q) && (e[q] = Util.clone(b[q], void 0, c))
        }
      }else {
        for(q in a) {
          a.hasOwnProperty(q) && b.hasOwnProperty(q) && (e[q] = Util.clone(b[q], void 0, c))
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
  Util.formatNumber = function(b, a, c, e, h) {
    var c = c === void 0 ? "&#8361; " : c, a = isNaN(a) ? 0 : a, e = e === void 0 ? "." : e, h = h === void 0 ? "," : h, q = b < 0 ? "-" : "", i = parseInt(b = Math.abs(+b || 0).toFixed(a), 10) + "", d = i.length, d = d > 3 ? d % 3 : 0;
    return c + q + (d ? i.substr(0, d) + h : "") + i.substr(d).replace(/(\d{3})(?=\d)/g, "$1" + h) + (a ? e + Math.abs(b - i).toFixed(a).slice(2) : "")
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
      for(var c = b.classList ? b.classList : Util.split(b.className), e = 0, h = c.length;e < h;e++) {
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
      for(var c = 0, e = b.childNodes, h = e.length, q;c < h;c++) {
        if(Util.isNotNull(e[c]) && (q = Util.findFirstByClass(e[c], a)) !== void 0) {
          return q
        }
      }
    }
  };
  Util.findFirstByTagAndClass = function(b, a, c) {
    if(b != null) {
      if(Util.hasTagAndClass(b, a, c)) {
        return b
      }
      for(var e = 0, b = b.childNodes, h = b.length, q;e < h;e++) {
        if(Util.isNotNull(b[e]) && (q = Util.findFirstByTagAndClass(b[e], a, c)) !== void 0) {
          return q
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
    for(var e = 0, b = b.childNodes, h = b.length;e < h;e++) {
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
    for(var h = 0, b = b.childNodes, q = b.length;h < q;h++) {
      Util.isNotNull(b[h]) && Util.findByTagAndClass(b[h], a, c, e)
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
    var c = document.createElement("div"), e, h = 0, q = [];
    c.innerHTML = a;
    for(e = c.childNodes.length;h < e;h++) {
      q.push(b.appendChild(c.firstChild))
    }
    return q
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
    var e = c.length, h = c[0];
    if(e === 1) {
      return h === "array" ? Util.areEqualArrays(b, a) : Util.areEqualObjects(b, a)
    }
    if(e > 1) {
      c = c.slice(1);
      e = 0;
      if(h === "array") {
        if(b.length !== a.length) {
          return!1
        }
        for(h = b.length;e < h;e++) {
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
  Util.typeCheck = function(b, a, c, e, h) {
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
    if(h) {
      return!1
    }
    throw new TypeError("object is not a " + b + ", but is a " + typeof a);
  };
  Util.sprint = function(b, a, c, e) {
    Util.typeCheck("string", b);
    Util.typeCheck("object", a);
    Util.typeCheck("string", c, !0);
    Util.typeCheck("string", e, !0);
    var h;
    c === void 0 && (c = "%");
    e === void 0 && (e = "%");
    for(h in a) {
      a.hasOwnProperty(h) && (b = b.replace(RegExp(c + h + e, "gm"), a[h]))
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
console && console.log && console.log('reading javascript source "Tracer.js"...');
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
    var e = this.timers[a], h = (new Date).getTime(), e = g.isNull(e) ? 0 : h - e;
    g.print((this.stack.length > 0 ? this.stack + " :: " : "") + b + ", Time elapsed since last update: " + e + "ms");
    c && (this.timers[a] = h)
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
  JGM.create = function(d, b) {
    f.isNull(b) && (b = {});
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
    var a, c, e, h;
    for(c in b) {
      if(b.hasOwnProperty(c)) {
        switch(c) {
          case "map":
            a = b[c];
            if(f.isString(a)) {
              a = f.split(a);
              h = a.length;
              for(e = 0;e < h;e++) {
                JGM._deleteMap(d, a[e])
              }
            }else {
              if(a instanceof Array) {
                h = a.length;
                for(e = 0;e < h;e++) {
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
              h = a.length;
              for(e = 0;e < h;e++) {
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
              h = a.length;
              for(e = 0;e < h;e++) {
                JGM._delete$(d, a[e])
              }
            }else {
              if(a instanceof Array) {
                h = a.length;
                for(e = 0;e < h;e++) {
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
              h = a.length;
              for(e = 0;e < h;e++) {
                JGM._deleteStyle(d, a[e])
              }
            }else {
              if(a instanceof Array) {
                h = a.length;
                for(e = 0;e < h;e++) {
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
              h = a.length;
              for(e = 0;e < h;e++) {
                delete d[a[e]]
              }
            }else {
              if(a instanceof Array) {
                h = a.length;
                for(e = 0;e < h;e++) {
                  delete d[a[e]]
                }
              }
            }
            break;
          case "module":
            a = b[c];
            if(f.isString(a)) {
              a = f.split(a);
              h = a.length;
              for(e = 0;e < h;e++) {
                JGM._deleteModule(d, a[e])
              }
            }else {
              if(a instanceof Array) {
                h = a.length;
                for(e = 0;e < h;e++) {
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
  JGM._CONST = {_cssUnselectable:"-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none;", _cssUnselectable:"-webkit-user-drag:none;-moz-user-drag:none;user-drag:none;", _checkboxWidth:void 0, _checkboxHeight:void 0, _radioWidth:void 0, _radioHeight:void 0};
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
console && console.log && console.log('reading javascript source "renderer.js"...');
jx.grid.renderer = {};
(function() {
  var f = goog.getObjectByName("jx.grid");
  goog.getObjectByName("jx.util");
  f = f.renderer = {};
  goog.exportSymbol("jx.grid.renderer", f);
  f.selectBox = function(f) {
    var d = f.mapping, b = f.attr, a = f["default"], c = f.style, e = f.callback, h, q, i, k = 0, m = [], j = [], o = "<select";
    if(b) {
      for(i in b) {
        b.hasOwnProperty(i) && (o += " " + i + '="' + b[i] + '"')
      }
    }
    if(c) {
      o += ' style="';
      for(i in c) {
        c.hasOwnProperty(i) && (o += i + ":" + c[i] + ";")
      }
      o += '"'
    }
    o += ">";
    for(h in d) {
      d.hasOwnProperty(h) && (f = d[h], m.push(h), j.push(f), a == f && (q = k), k++)
    }
    return function(a) {
      var c, h, b = o;
      for(h = 0;h < k;h++) {
        if(a == j[h]) {
          c = h;
          break
        }
      }
      c === void 0 && (c = q);
      for(h = 0;h < k;h++) {
        b += '<option value="' + j[h] + '"', h === c && (b += ' selected="selected"'), b += ">" + m[h] + "</option>"
      }
      b += "</select>";
      e && (c = [], c.push(b), Array.prototype.push.apply(c, arguments), b = e.apply(this, c));
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
  function g(e, a, c) {
    if(typeof e != "object") {
      return!1
    }
    var b, d, f;
    if(a) {
      for(var c = 0, j = a.length;c < j;c++) {
        if(b = a[c], this.hasOwnProperty(b)) {
          if(e.hasOwnProperty(b)) {
            if(d = this[b], f = e[b], d !== e && !(d === d || f === f)) {
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
      if(c) {
        for(b in this) {
          if(this.hasOwnProperty(b)) {
            if(!e.hasOwnProperty(b)) {
              return!1
            }
            d = this[b];
            f = e[b];
            if(d !== f) {
              if(d) {
                if(typeof d != "object" || typeof f != "object") {
                  return!1
                }
                if(d.equals) {
                  if(!d.equals(f, null, c - 1)) {
                    return!1
                  }
                }else {
                  if(f.equals && !f.equals(d, null, c - 1)) {
                    return!1
                  }
                }
                if(!g.call(d, f, null, c - 1)) {
                  return!1
                }
              }else {
                if(!(d === d || f === f)) {
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
              if(d = this[b], f = e[b], d !== e && !(d === d || f === f)) {
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
    var b, i;
    if(e) {
      for(b in this) {
        if(this.hasOwnProperty(b)) {
          if((i = this[b]) && typeof i == "object") {
            if(i.dispose) {
              i.dispose(e - 1, a)
            }else {
              if(a) {
                if(c(i)) {
                  i.length = 0
                }
                d.call(i, e - 1, a)
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
  var b = goog.getObjectByName("jx.util");
  goog.exportSymbol("jx.lang.Disposable", f);
  goog.exportProperty(f.prototype, "dispose", d);
  var a = f.prototype, c = b.isArray;
  b.equals = Object.equals = function(e, a, c, b) {
    return typeof e == "object" ? g.call(e, a, c, b) : e !== e && a !== a
  };
  b.dispose = Object.dispose = function(e, a, c) {
    if(typeof e == "object") {
      return d.call(e, a, c)
    }
  };
  a.equals = g;
  a.dispose = d
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
  var g = goog.getObjectByName("jx.util"), d = goog.getObjectByName("jx.lang.Disposable");
  goog.exportSymbol("jx.grid.Cell", f);
  goog.inherits(f, d);
  f.getInstance = function(a) {
    return new f(a)
  };
  var b = f.prototype, a = d.prototype.dispose;
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
        for(var h = e[a], b = -1;(b = h.indexOf(c, b + 1)) !== -1;) {
          h.splice(b, 1)
        }
        h.length === 0 && delete e[a]
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
      for(var c = c[e], e = 0, h = c.length, b;e < h && !a.stopPropagation;e++) {
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
console && console.log && console.log('reading javascript source "Column.js"...');
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
    var e = this, h = this.grid;
    h && ["Dispose", "CreateCss", "CreateDynamicCss", "Render", "Keydown", "Keyup", "Keypress", "Mousein", "Mouseout", "Mouseenter", "Mouseleave", "Mousemove", "Mouseover", "Mousedown", "Mouseup", "Click", "Dblclick", "Resize", "ResizeWidth", "ResizeHeight", "Scroll", "ScrollH", "ScrollV"].forEach(function(a) {
      var c = "before" + a, a = "after" + a, b = "_" + c, d = "_" + a;
      e[b] && h.addEventListener(c, function(a) {
        return e[b](a)
      });
      e[d] && h.addEventListener(a, function(a) {
        return e[d](a)
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
    d.call(this);
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
      var h, c = "";
      a.hasOwnProperty("_prepend") && (a._prepend && e.push(a._prepend), delete a._prepend);
      a.hasOwnProperty("_append") && (a._append && (c = ";" + a._append), delete a._append);
      for(h in a) {
        e.push(h + ":" + a[h])
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
    for(var c = 0, e = this._options.uniqueKeys, h, b = this.uniqueMap, i = e.length, k = this.keyToType, f = this.grid.colDefMgr.getAll();c < i;c++) {
      h = e[c], typeof h === "string" && (b[h] = {})
    }
    i = f.length;
    for(c = 0;c < i;c++) {
      e = f[c], h = e.key, e.hasOwnProperty("unique") && e.unique === !0 && !b.hasOwnProperty(h) && (b[h] = {}), k[h] = this.mapDatatype(e.type)
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
  b.addUniqueIndex = function(a, c, e, h) {
    if(h !== !0 && (d.isNull(a) || d.isEmptyString(c) || d.isNull(e))) {
      return!1
    }
    if(e.hasOwnProperty(c) === !1) {
      return this.grid.error("KEY_UNDEFINED", c)
    }
    if(d.isEmptyString(h = e[c])) {
      return this.grid.error("BAD_NULL", c)
    }
    if(a.hasOwnProperty(h)) {
      return a[h] === e ? !1 : this.grid.error("DUP_ENTRY", h, c)
    }
    a[h] = e;
    return!0
  };
  b.addUniqueIndices = function(a, c, e, h) {
    if(h !== !0 && (d.isNull(a) || d.isEmptyString(c) || d.isEmptyArray(e))) {
      return!1
    }
    for(var b = e.length, i = [], k, f, h = 0;h < b;h++) {
      if(!d.isNull(f = e[h])) {
        if(f.hasOwnProperty(c) === !1) {
          return this.removeUniqueIndices(a, c, i), this.grid.error("KEY_UNDEFINED", c)
        }
        if(d.isEmptyString(k = f[c])) {
          return this.removeUniqueIndices(a, c, i), this.grid.error("BAD_NULL", c)
        }
        if(a.hasOwnProperty(k)) {
          if(a[k] === f) {
            continue
          }
          this.removeUniqueIndices(a, c, i);
          return this.grid.error("DUP_ENTRY", k, c)
        }
        i.push(a[k] = f)
      }
    }
    return i.length > 0
  };
  b.updateUniqueIndex = function(a, c, e, h, b, i) {
    if(i !== !0 && (d.isEmptyObj(a) || d.isEmptyString(c) || d.isNullOr(e, b) || d.isEmptyObj(h))) {
      return!1
    }
    if(h.hasOwnProperty(c) === !1) {
      return!1
    }
    if(b.hasOwnProperty(c) === !1 || e.hasOwnProperty(c) === !1) {
      return this.grid.error("KEY_UNDEFINED", c)
    }
    if(a.hasOwnProperty(b = b[c]) === !1) {
      return this.grid.error("KEY_NOT_FOUND", b, c)
    }
    if(d.isEmptyString(h = h[c])) {
      return this.grid.error("BAD_NULL", c)
    }
    if(a.hasOwnProperty(h)) {
      return a[h] === e ? !1 : this.grid.error("DUP_ENTRY", h, c)
    }
    a[h] = e;
    delete a[b];
    return b
  };
  b.updateUniqueIndices = function(a, c, e, h, b, i) {
    if(i !== !0) {
      if(d.isEmptyObj(a) || d.isEmptyString(c) || d.isEmptyArray(e) || d.isEmptyArray(h) || d.isEmptyArray(b)) {
        return!1
      }
      if(e.length !== h.length || e.length !== b.length) {
        return this.grid.error("LENGTH_NOT_EQUAL")
      }
    }
    for(var i = 0, k = e.length, f, j, g, l = [], p = [], n = [], r, s;i < k;i++) {
      if(!d.isNull(f = e[i])) {
        if((g = h[i]).hasOwnProperty(c) !== !1) {
          j = b[i];
          if(j.hasOwnProperty(c) === !1 || f.hasOwnProperty(c) === !1) {
            return this.updateUniqueIndices(a, c, l, n, p), this.grid.error("KEY_UNDEFINED", c)
          }
          if(a.hasOwnProperty(s = j[c]) === !1) {
            return this.updateUniqueIndices(a, c, l, n, p), this.grid.error("KEY_NOT_FOUND", s, c)
          }
          if(d.isEmptyString(r = g[c])) {
            return this.updateUniqueIndices(a, c, l, n, p), this.grid.error("BAD_NULL", c)
          }
          if(a.hasOwnProperty(r)) {
            if(a[r] === f) {
              continue
            }
            this.updateUniqueIndices(a, c, l, n, p);
            return this.grid.error("DUP_ENTRY", r, c)
          }
          a[r] = f;
          delete a[s];
          l.push(f);
          p.push(g);
          n.push(j)
        }
      }
    }
    return l.length === 0 ? !1 : {datalist:l, changes:p, befores:n}
  };
  b.removeUniqueIndex = function(a, c, e, h) {
    if(!(h !== !0 && (d.isEmptyObj(a) || d.isEmptyString(c) || d.isEmptyObj(e)))) {
      var b;
      e.hasOwnProperty(c) && a.hasOwnProperty(b = e[c]) && delete a[b]
    }
  };
  b.removeUniqueIndices = function(a, c, e, h) {
    if(!(h !== !0 && (d.isEmptyObj(a) || d.isEmptyString(c) || d.isEmptyArray(e)))) {
      for(var b = e.length, i, k, h = 0;h < b;h++) {
        k = e[h], k.hasOwnProperty(c) && a.hasOwnProperty(i = k[c]) && delete a[i]
      }
    }
  };
  b.addToUniqueMap = function(a) {
    if(d.isEmptyObj(a) || d.isEmptyObj(this.uniqueMap)) {
      return!1
    }
    var c = [], e, h = this.uniqueMap, b;
    for(e in h) {
      if(h.hasOwnProperty(e)) {
        if(b = this.addUniqueIndex(h[e], e, a), b === !0) {
          c.push(e)
        }else {
          if(b instanceof Error) {
            e = 0;
            for(var i = c.length;e < i;e++) {
              this.removeUniqueIndex(h[c[e]], c[e], a)
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
    var c = this.uniqueMap, e = [], h, b;
    for(h in c) {
      if(c.hasOwnProperty(h)) {
        if(b = this.addUniqueIndices(c[h], h, a), b === !0) {
          e.push(h)
        }else {
          if(b instanceof Error) {
            h = 0;
            for(var i = e.length;h < i;h++) {
              this.removeUniqueIndices(c[e[h]], e[h], a)
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
    var h, b = this.uniqueMap, i = [], k;
    for(h in b) {
      if(b.hasOwnProperty(h)) {
        k = this.updateUniqueIndex(b[h], h, a, c, e);
        if(k instanceof Error) {
          h = 0;
          for(var f = i.length;h < f;h++) {
            this.updateUniqueIndex(b[i[h]], i[h], a, e, c)
          }
          return k
        }
        k !== !1 && i.push(h)
      }
    }
    return i.length > 0
  };
  b.updateListUniqueMap = function(a, c, e) {
    if(d.isEmptyArray(a) || d.isEmptyArray(c) || d.isEmptyArray(e) || d.isEmptyObj(this.uniqueMap)) {
      return!1
    }
    if(a.length !== c.length || a.length !== e.length) {
      return this.grid.error("LENGTH_NOT_EQUAL")
    }
    var h, b = this.uniqueMap, i = [], k;
    for(h in b) {
      if(b.hasOwnProperty(h)) {
        k = this.updateUniqueIndices(b[h], h, a, c, e);
        if(k instanceof Error) {
          h = 0;
          for(var f = i.length;h < f;h++) {
            this.updateUniqueIndices(b[i[h]], i[h], a, e, c)
          }
          return k
        }
        k !== !1 && i.push(h)
      }
    }
    return i.length > 0
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
        for(var e = 0, h, b = a.length;e < b;e++) {
          if((h = a[e]).hasOwnProperty(c) === !1) {
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
  b.updateIdMap = function(a, c, e) {
    if(d.isNullOr(a, e) || d.isEmptyObj(c)) {
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
        return this.updateUniqueIndex(this._idToData, h, a, c, e);
      case this._consts._composite:
        if(c.hasOwnProperty(h)) {
          return this.grid.error("NOT_MODIFIABLE", h)
        }
        for(var e = this._options.idColKeys, b = e.length, i = 0;i < b;i++) {
          if(c.hasOwnProperty(e[i])) {
            for(var k = "", f = 0, j, g, l = {}, p = {}, i = p[h] = a[h];f < b;f++) {
              if(j = e[f], c.hasOwnProperty(j)) {
                if(d.isEmptyString(g = c[j])) {
                  return this.grid.error("BAD_NULL", j)
                }
                k += "&" + g
              }else {
                k += "&" + a[j]
              }
            }
            a[h] = l[h] = k;
            if(i === k) {
              break
            }
            c = this.updateUniqueIndex(this._idToData, h, a, l, p);
            c instanceof Error && (a[h] = i);
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
    var h = this.idKey, b = a.length, i = 0;
    switch(this._idMode) {
      case this._consts._auto:
        for(;i < b;i++) {
          if(c[i].hasOwnProperty(h)) {
            return this.grid.error("NOT_MODIFIABLE", h)
          }
        }
      ;
      case this._consts._given:
        return this.updateUniqueIndices(this._idToData, h, a, c, e);
      case this._consts._composite:
        for(var k = this._idToData, f, j, g = this._options.idColKeys, l = g.length, p, e = [], n = [], r = [], s = [], t, v, w, u;i < b;i++) {
          f = a[i];
          j = c[i];
          if(j.hasOwnProperty(h)) {
            t = 0;
            for(b = e.length;t < b;t++) {
              n[t][h] = e[t]
            }
            return this.grid.error("NOT_MODIFIABLE", h)
          }
          for(t = 0;t < l;t++) {
            if(j.hasOwnProperty(g[t])) {
              p = "";
              for(v = 0;v < l;v++) {
                if(w = g[v], j.hasOwnProperty(w)) {
                  if(d.isEmptyString(u = j[w])) {
                    t = 0;
                    for(b = e.length;t < b;t++) {
                      n[t][h] = e[t]
                    }
                    return this.grid.error("BAD_NULL", w)
                  }
                  p += "&" + u
                }else {
                  p += "&" + f[w]
                }
              }
              f[h] !== p && (n.push(f), r.push({}), s.push({}), e.push(f[h]), f[h] = p)
            }
          }
        }
        if(n.length === 0) {
          break
        }
        a = this.updateUniqueIndices(k, h, n, r, s);
        if(a instanceof Error) {
          t = 0;
          for(b = e.length;t < b;t++) {
            n[t][h] = e[t]
          }
        }
        return a
    }
    return!1
  };
  b.removeFromIdMap = function(a) {
    var c = this.idKey, e = this._idToData, h;
    d.isNotNull(a) && a.hasOwnProperty(c) && e.hasOwnProperty(h = a[c]) && delete e[h]
  };
  b.removeListFromIdMap = function(a) {
    if(!d.isEmptyArray(a)) {
      for(var c = this.idKey, e = a.length, h = this._idToData, b, i, k = 0;k < e;k++) {
        i = a[k], i.hasOwnProperty(c) && h.hasOwnProperty(b = i[c]) && delete h[b]
      }
    }
  };
  b.fillTemp = function(a, c) {
    if(!d.isNull(a)) {
      var e = this.grid.colDefMgr.getAll(), h = e.length, b, i, k = 0;
      if(c !== void 0 && c.isNew) {
        for(;k < h;k++) {
          i = e[k], b = i.key, i.nullOnCreate && d.isNull(a[b]) && (a[b] = "J@H" + this._increment++)
        }
      }
    }
  };
  b.fillTempList = function(a, c) {
    if(!d.isEmptyArray(a)) {
      var e = this.grid.colDefMgr.getAll(), h = e.length, b = a.length, i, k, f = 0;
      if(c !== void 0 && c.isNew) {
        for(;f < h;f++) {
          if(k = e[f], i = k.key, k.nullOnCreate) {
            for(k = 0;b;k++) {
              a[k][i] = "J@H" + this._increment++
            }
          }
        }
      }
    }
  };
  b.query = function(a) {
    if(typeof a === "string" && (a = $.trim(a), a.length !== 0)) {
      var c, e, h, b, i;
      c = a.toLowerCase();
      e = a.indexOf(" ");
      if(e !== -1 && (h = c.substring(0, e), c = c.indexOf(" where "), b = c > -1, e = $.trim(b ? a.substring(e + 1, c) : a.substring(e + 1)), e.length !== 0)) {
        switch(b && (i = $.trim(a.substring(c + 7))), h) {
          case "select":
            return this.executeSelect(e, i);
          case "insert":
            return this.executeInsert(e, i);
          case "update":
            return this.executeUpdate(e, i);
          case "delete":
            return this.executeDelete(e, i)
        }
      }
    }
  };
  b.parseWhere = function(a) {
    typeof a === "string" && $.trim(a)
  };
  b.executeSelect = function(a) {
    var a = d.split(a, /[\s,]+/), c = a.length, e = 0, h = {}, b = this.all, i = [];
    if(c === 0) {
      return i
    }
    for(;e < c;e++) {
      if(a[e] === "*") {
        break
      }
      h[a[e]] = !0
    }
    e = 0;
    for(c = b.length;e < c;e++) {
      i.push(d.clone(b[e], h))
    }
    return i
  };
  b.parse = function(a, c) {
    if(d.isNull(a)) {
      return!1
    }
    for(var e = this.grid.colDefMgr.getAll(), h = e.length, b, i, f = c !== void 0 && c.isNew, m = 0;m < h;m++) {
      if(i = e[m], !f || !i.nullOnCreate) {
        if(d.isFunction(b = i.parser)) {
          if(i = i.key, a.hasOwnProperty(i)) {
            try {
              a[i] = b(a[i], a)
            }catch(j) {
              return d.isNull(a) ? this.grid.error("PARSE_ERROR", a, i) : this.grid.error("PARSE_ERROR", a[i], i)
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
    for(var e = this.grid.colDefMgr.getAll(), h = e.length, b = a.length, i, f, m = 0, j, g = c !== void 0 && c.isNew, l;m < h;m++) {
      if(f = e[m], !g || !f.nullOnCreate) {
        if(d.isFunction(i = f.parser)) {
          f = f.key;
          try {
            for(j = 0;j < b;j++) {
              l = a[j], l.hasOwnProperty(f) && (l[f] = i(l[f], l))
            }
          }catch(p) {
            return d.isNull(l) ? this.grid.error("PARSE_ERROR", l, f) : this.grid.error("PARSE_ERROR", l[f], f)
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
    for(var e = this.grid.colDefMgr.getAll(), h = e.length, b, i, f, m, j, g, l, p = c !== void 0 && c.isNew, n = 0;n < h;n++) {
      if(b = e[n], i = b.key, j = void 0, m = f = !1, !p || !b.nullOnCreate) {
        if(b.notNull === !0) {
          if(a.hasOwnProperty(i) === !1 || d.isEmptyString(j = a[i])) {
            return this.grid.error("BAD_NULL", i)
          }
          g = j.toString()
        }else {
          a.hasOwnProperty(i) === !1 || d.isNull(j = a[i]) ? m = f = !0 : j === "" && (m = !0), g = f === !1 ? j.toString() : ""
        }
        if(f === !1) {
          if(d.isNotNull(l = b.max) && m === !1 && j > l) {
            return this.grid.error("BIGGER_THAN", j, i, l)
          }
          if(d.isNotNull(l = b.min) && m === !1 && j < l) {
            return this.grid.error("SMALLER_THAN", j, i, l)
          }
          if(d.isNotNull(l = b.length)) {
            if(m === !0 || g.length !== l) {
              return this.grid.error("WRONG_LENGTH", g, l, i)
            }
          }else {
            if(d.isNotNull(l = b.maxlength) && m === !1 && g.length > l) {
              return this.grid.error("DATA_TOO_LONG", g, i, l)
            }
            if(d.isNotNull(l = b.minlength)) {
              if(m === !0 || g.length < l) {
                return this.grid.error("DATA_TOO_SHORT", g, i, l)
              }
            }
          }
        }
        if(d.isFunction(b = b.validator)) {
          try {
            if(b(j, a, g, f, m) !== !0) {
              return this.grid.error("WRONG_VALUE", g, i)
            }
          }catch(r) {
            return this.grid.error("WRONG_VALUE", g, i)
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
    for(var e = this.grid.colDefMgr.getAll(), h = e.length, b = a.length, i, f, m = 0, j, g, l, p, n, r = c !== void 0 && c.isNew, s = [], t = [];m < h;m++) {
      if(i = e[m], f = i.key, g = {}, l = {}, s.length = 0, t.length = 0, !r || !i.nullOnCreate) {
        if(i.notNull === !0) {
          for(j = 0;j < b;j++) {
            if(a[j].hasOwnProperty(f) === !1 || d.isEmptyString(p = a[j][f])) {
              return this.grid.error("BAD_NULL", f)
            }
            s.push(p);
            t.push(p.toString())
          }
        }else {
          for(j = 0;j < b;j++) {
            p = void 0, a[j].hasOwnProperty(f) === !1 || d.isNull(p = a[j][f]) ? (g[j] = !0, l[j] = !0) : p === "" && (l[j] = !0), s.push(p), g.hasOwnProperty(j) ? t.push("") : t.push(p.toString())
          }
        }
        if(d.isNotNull(n = i.max)) {
          for(j = 0;j < b;j++) {
            if(l.hasOwnProperty(j) === !1 && s[j] > n) {
              return this.grid.error("BIGGER_THAN", s[j], f, n)
            }
          }
        }
        if(d.isNotNull(n = i.min)) {
          for(j = 0;j < b;j++) {
            if(l.hasOwnProperty(j) === !1 && s[j] < n) {
              return this.grid.error("SMALLER_THAN", s[j], f, n)
            }
          }
        }
        if(d.isNotNull(n = i.length)) {
          for(j = 0;j < b;j++) {
            if(g.hasOwnProperty(j) === !1 && (l.hasOwnProperty(j) || t[j].length !== n)) {
              return this.grid.error("WRONG_LENGTH", t[j], n, f)
            }
          }
        }else {
          if(d.isNotNull(n = i.maxlength)) {
            for(j = 0;j < b;j++) {
              if(l.hasOwnProperty(j) === !1 && t[j].length > n) {
                return this.grid.error("DATA_TOO_LONG", t[j], f, n)
              }
            }
          }
          if(d.isNotNull(n = i.minlength)) {
            for(j = 0;j < b;j++) {
              if(g.hasOwnProperty(j) === !1 && (l.hasOwnProperty(j) || t[j].length < n)) {
                return this.grid.error("DATA_TOO_SHORT", t[j], f, n)
              }
            }
          }
        }
        if(d.isFunction(i = i.validator)) {
          try {
            for(j = 0;j < b;j++) {
              if(i(s[j], a[j], t[j], g.hasOwnProperty(j), l.hasOwnProperty(j)) !== !0) {
                return this.grid.error("WRONG_VALUE", t[j], f)
              }
            }
          }catch(v) {
            return this.grid.error("WRONG_VALUE", t[j], f)
          }
        }
      }
    }
    return!0
  };
  b.makeCompositeKey = function(a, c) {
    if(!(this._idMode !== this._consts._composite || d.isNull(a))) {
      if(c === !0 || a.hasOwnProperty(this.idKey) === !1) {
        for(var e = this._options.idColKeys, h = e.length, b = 0, i = "";b < h;b++) {
          i += "&" + a[e[b]]
        }
        a[this.idKey] = i
      }
    }
  };
  b.makeCompositeKeyList = function(a, c) {
    if(!(this._idMode !== this._consts._composite || a.length === 0)) {
      var e = this.idKey, h = a.length, b = this._options.idColKeys, i = b.length, d, f = 0, j, g;
      if(c === !0) {
        for(;f < h;f++) {
          d = a[f];
          g = "";
          for(j = 0;j < i;j++) {
            g += "&" + d[b[j]]
          }
          d[e] = g
        }
      }else {
        for(;f < h;f++) {
          if((d = a[f]).hasOwnProperty(e) === !1) {
            g = "";
            for(j = 0;j < i;j++) {
              g += "&" + d[b[j]]
            }
            d[e] = g
          }
        }
      }
    }
  };
  b.map = function(a) {
    if(!d.isNull(a)) {
      var c = this._idToData, e = this.idKey, h;
      this.makeCompositeKey(a);
      if(a.hasOwnProperty(e) && c.hasOwnProperty(h = a[e])) {
        return c[h]
      }
    }
  };
  b.mapList = function(a) {
    if(d.isEmptyArray(a)) {
      return{mapped:[], unmapped:[]}
    }
    this.makeCompositeKeyList(a);
    for(var c = [], e = [], h = this.idKey, b = this._idToData, i = a.length, f = 0, m, j;f < i;f++) {
      (m = a[f]).hasOwnProperty(h) && b.hasOwnProperty(j = m[h]) ? c.push(b[j]) : e.push(m)
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
    for(var c = this.datalist, e = c.length, h = this.idKey, b = this._idToIdx;a < e;a++) {
      b[c[a][h]] = a
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
    this.grid.event.trigger("onBeforeDataChange");
    this.grid.event.trigger("onBeforeSetDatalist", [this.all, a]);
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
    this.grid.event.trigger("onAfterSetDatalist", [a]);
    this.grid.event.trigger("onDataChange");
    this.refresh();
    return!0
  };
  b.add = function(a, c) {
    if(d.isNull(a) || d.isNotNull(this.map(a))) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange");
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
    this.grid.event.trigger("onAddDatarow", [a, c]);
    this.grid.event.trigger("onDataChange");
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
    this.grid.event.trigger("onBeforeDataChange");
    this.fillTempList(a, c);
    var h;
    if((h = this.parseList(e, c)) instanceof Error) {
      return h
    }
    if((h = this.validateList(e, c)) instanceof Error) {
      return h
    }
    if((h = this.addListToUniqueMap(e)) instanceof Error) {
      return h
    }
    if((h = this.addListToIdMap(e)) instanceof Error) {
      return h
    }
    this.all.pushList(e);
    if(d.isNull(c) || c.undo !== !0) {
      this._history.push({_action:this._consts._addList, _target:e}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onAddDatalist", [e, c]);
    this.grid.event.trigger("onDataChange");
    (c === void 0 || c.noRefresh !== !0) && this.refresh(c);
    return!0
  };
  b.updateByKey = function(a, c, e, h) {
    var b = {};
    b[c] = e;
    return this.update(a, b, h)
  };
  b.update = function(a, c, e) {
    if(d.isNullOr(a, c)) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange");
    this.grid.event.trigger("onBeforeUpdateDatarow", [a, c]);
    var h = {}, b;
    for(b in c) {
      c.hasOwnProperty(b) && (a[b] === c[b] ? delete c[b] : (h[b] = a[b], a[b] = c[b]))
    }
    if(d.isEmptyObj(h)) {
      return!1
    }
    if((b = this.parse(a, e)) instanceof Error) {
      return this._rollback(a, h), b
    }
    if((b = this.validate(a, e)) instanceof Error) {
      return this._rollback(a, h), b
    }
    if((b = this.updateUniqueMap(a, c, h)) instanceof Error) {
      return this._rollback(a, h), b
    }
    if((b = this.updateIdMap(a, c, h)) instanceof Error) {
      return this._rollback(a, h), b
    }
    b !== !1 && this.grid.event.trigger("onIdChange", [a, b, a[this.idKey]]);
    if(d.isNull(e) || e.undo !== !0) {
      this._history.push({_action:this._consts._update, _target:a, _before:h, _change:c}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onUpdateDatarow", [a, c, h, e]);
    this.grid.event.trigger("onDataChange");
    (e === void 0 || e.noRefresh !== !0) && this.refresh(e);
    return!0
  };
  b.updateList = function(a, c) {
    if(d.isEmptyArray(a)) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange");
    this.grid.event.trigger("onBeforeUpdateDatalist", [a]);
    for(var e = [], h = [], b = [], i, f, m, j = a.length, g = 0, l;g < j;g++) {
      f = {};
      i = a[g].datarow;
      m = a[g].change;
      for(l in m) {
        m.hasOwnProperty(l) && (i[l] === m[l] ? delete m[l] : (f[l] = i[l], i[l] = m[l]))
      }
      d.isNotEmptyObj(f) && (e.push(i), h.push(f), b.push(m))
    }
    if(e.length === 0) {
      return!1
    }
    if((i = this.parseList(e, c)) instanceof Error) {
      return this._rollbackList(e, h), i
    }
    if((i = this.validateList(e, c)) instanceof Error) {
      return this._rollbackList(e, h), i
    }
    if((i = this.updateListUniqueMap(e, b, h)) instanceof Error) {
      return this._rollbackList(e, h), i
    }
    if((i = this.updateListIdMap(e, b, h)) instanceof Error) {
      return this._rollbackList(e, h), i
    }
    i !== !1 && this.grid.event.trigger("onIdListChange", [i.list, i.befores, this.idKey]);
    if(d.isNull(c) || c.undo !== !0) {
      this._history.push({_action:this._consts._updateList, _target:e, _before:h, _change:b}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onUpdateDatalist", [e, b, h, c]);
    this.grid.event.trigger("onDataChange");
    (c === void 0 || c.noRefresh !== !0) && this.refresh(c);
    return!0
  };
  b._rollback = function(a, c) {
    for(var e in c) {
      c.hasOwnProperty(e) && (a[e] = c[e])
    }
  };
  b._rollbackList = function(a, c) {
    for(var e = a.length, h = 0, b, i, d;h < e;h++) {
      for(d in b = a[h], i = c[h], i) {
        i.hasOwnProperty(d) && (b[d] = i[d])
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
    this.grid.event.trigger("onBeforeDataChange");
    this.removeFromIdMap(e);
    this.removeFromUniqueMap(e);
    this.all.remove(e);
    this.removeId(e);
    if(d.isNull(c) || c.undo !== !0) {
      this._history.push({_action:this._consts._remove, _target:e}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onRemoveDatarow", [e, c]);
    this.grid.event.trigger("onDataChange");
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
    this.grid.event.trigger("onBeforeDataChange");
    this.removeListFromIdMap(e);
    this.removeListFromUniqueMap(e);
    this.all.removeList(e);
    this.cleanList(e);
    if(d.isNull(c) || c.undo !== !0) {
      this._history.push({_action:this._consts._removeList, _target:e}), this._redoHistory.length = 0
    }
    this.grid.event.trigger("onRemoveDatalist", [e, c]);
    this.grid.event.trigger("onDataChange");
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
        for(var a = [], h = 0, b = c.length;h < b;h++) {
          a.push({datarow:c[h], change:e[h]})
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
        for(var a = [], h = 0, b = c.length;h < b;h++) {
          a.push({datarow:c[h], change:e[h]})
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
      for(var c = this.idKey, e = 0, h = a.length;e < h;e++) {
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
    for(var c = [], e = a.length, h = 0, b, i, f = this._consts._notReal;h < e;h++) {
      if((i = a[h]).hasOwnProperty(f) === !1) {
        for(b in c.push({}), i) {
          i.hasOwnProperty(b) && i.hasOwnProperty(b) && b.substring(0, 3)
        }
      }
    }
    return c
  };
  b.setSorter = function(a) {
    this.grid.event.trigger("onChangeSorter", [this._sorter, a]);
    this._sorter = a
  };
  b._sort = function(a) {
    d.isNull(a) ? a = this._sorter : this.setSorter(a);
    if(!d.isNull(a)) {
      var c = this.all;
      this.grid.event.trigger("onBeforeSort", [c]);
      d.isNotNull(a.comparator) ? (c.sort(a.comparator), a.desc && c.reverse()) : d.isNotNull(a.lexi) && this.constructor._lexi(c, a.lexi, a.desc);
      this.grid.event.trigger("onAfterSort", [c])
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
    var a = this.datalist, c = this.failed, e = 0, h = this._filters.length, b, i;
    this.grid.event.trigger("onBeforeFilter", [a, c]);
    a.length = 0;
    a.pushList(this.all);
    for(c.length = 0;e < h;e++) {
      b = this._filters[e];
      for(i = a.length - 1;i >= 0;i--) {
        b(a[i]) || (c.push(a[i]), a.removeAt(i))
      }
    }
    this.grid.event.trigger("onFilter", [a, c]);
    this.grid.event.trigger("onAfterFilter", [a, c])
  };
  b._finish = function(a) {
    this._reidx();
    this.grid.event.trigger("onAfterRefresh", [a])
  };
  b.refresh = function(a) {
    this.grid.event.trigger("onBeforeRefresh");
    a === void 0 ? this._sort() : a.noSort !== !0 && this._sort(a.sorter);
    (a === void 0 || a.noFilter !== !0) && this._filter();
    this._finish(a)
  };
  b.exportRowToArray = function(a, c) {
    if(!(a in this.datalist)) {
      return null
    }
    c || (c = this.grid.colDefMgr.getKeys());
    for(var e = this.datalist[a], h = [], b, i = 0, d = c.length;i < d;i++) {
      b = c[i], h.push(b in e ? e[b] : null)
    }
    return h
  };
  b.exportToArray = function(a, c, e) {
    a || (a = this.grid.colDefMgr.getKeys());
    for(var c = this.datalist.slice(c, e), h = [], b, i, d = 0, f = c.length, j, g = a.length;d < f;d++) {
      b = c[d];
      j = 0;
      for(e = [];j < g;j++) {
        i = a[j], e.push(i in b ? b[i] : null)
      }
      h.push(e)
    }
    return h
  };
  f._lexi = function(a, c, e) {
    var h = Object.prototype.toString;
    Object.prototype.toString = d.isFunction(c) ? c : function() {
      return this[c]
    };
    a.sort();
    Object.prototype.toString = h;
    e && a.reverse()
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
        for(var h, c = a.length, b;h < c;h++) {
          d.isNotNull(b = a[h]) && this._parseAndAdd(b.e, b.f, b.t)
        }
      }
    }
  };
  b.bind = function(a, c, e) {
    if(d.isString(a)) {
      this._parseAndAdd(a, c, e)
    }else {
      for(var h in a) {
        a.hasOwnProperty(h) && this._parseAndAdd(h, a[h], c)
      }
    }
  };
  b._parseAndAdd = function(a, c, e) {
    d.isNull(e) && (e = window);
    var a = d.split(a), h = a.length, b = 0;
    if(d.isFunction(c)) {
      for(;b < h;b++) {
        this._addHandler(a[b], c, e)
      }
    }else {
      if(d.isString(c)) {
        for(var c = d.split(c), i = c.length, f, m;b < h;b++) {
          f = a[b];
          for(m = 0;m < i;m++) {
            this._addHandler(f, e[c[m]], e)
          }
        }
      }else {
        for(i = c.length;b < h;b++) {
          f = a[b];
          for(m = 0;m < i;m++) {
            this._addHandler(f, c[m], e)
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
        for(var q = 0, i = b.length;q < i;q++) {
          if(b[q].fn === c) {
            b.removeAt(q);
            b.length === 0 && delete e[a];
            break
          }
        }
      }
    }
  };
  b.trigger = function(a, c, e) {
    for(var b, q = this._map, i = [], f = d.split(a), m = f.length, j = d.isEmptyArray(c), g = d.isFunction(e), l, p = 0;p < m;p++) {
      if(l = f[p], this.grid.log("firing event=" + l, 3), q.hasOwnProperty(l)) {
        if(a = q[l], b = a.length, b === 0) {
          this.grid.log("no handlers registered for event=" + l, 4)
        }else {
          if(this.grid.log(b + " handlers registered for event=" + l, 4), l = 0, g) {
            var n;
            if(j) {
              for(;l < b;l++) {
                n = a[l].fn.call(a[l].target), e(n) && i.push(n)
              }
            }else {
              for(;l < b;l++) {
                n = a[l].fn.apply(a[l].target, c), e(n) && i.push(n)
              }
            }
          }else {
            if(j) {
              for(;l < b;l++) {
                i.push(a[l].fn.call(a[l].target))
              }
            }else {
              for(;l < b;l++) {
                i.push(a[l].fn.apply(a[l].target, c))
              }
            }
          }
        }
      }else {
        this.grid.log("no handlers registered for event=" + l, 4)
      }
    }
    return i
  };
  b.triggerInvalid = function(a, c) {
    return this.trigger(a, c, function(e) {
      return e === !1
    }).length !== 0
  };
  b.sendToBack = function(a, c) {
    for(var e = this._map[a], b = e.length, q, d = -1, f = 0;f < b;f++) {
      if(e[f].fn === c) {
        d = f;
        q = e[f];
        break
      }
    }
    d > -1 && (e.removeAt(f), e.push(q))
  };
  b.sendToFront = function(a, c) {
    for(var e = this._map[a], b = e.length, q, d = -1, f = 0;f < b;f++) {
      if(e[f].fn === c) {
        d = f;
        q = e[f];
        break
      }
    }
    d > -1 && (e.removeAt(f), e.unshift(q))
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
      var e = 0, b = this.children, q = b.length;
      if(a.post) {
        for(;e < q;e++) {
          b[e].traverse(a, e)
        }
        this.callFn(a, c)
      }else {
        if(this.callFn(a, c), a.propagate === !1) {
          delete a.propagate
        }else {
          for(;!a.stop && e < q;e++) {
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
    for(var c = this._options.nodeKey, e = this.map, b = a.length, q = 0;q < b;q++) {
      this.attachNode(e[a[q][c]])
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
      for(var e = this.infants[c], b = 0, q = e.length;b < q;b++) {
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
console && console.log && console.log('reading javascript source "Grid.js"...');
jx.grid.Grid = {};
(function() {
  function f(e) {
    this.mid = e.mid;
    this.log("creating new Grid instance...", c);
    a.call(this, e)
  }
  var g = goog.getObjectByName("jx.grid"), d = goog.getObjectByName("jx.util"), b = goog.getObjectByName("echo"), a = goog.getObjectByName("jx.grid.BaseModule"), c = 1;
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
  goog.inherits(f, a);
  f.getInstance = function(e) {
    return new f(e)
  };
  var e = f.prototype;
  e._defaultOptions = function() {
    return{classGrid:"jgrid", border:"1px solid #868686", width:void 0, font:"15px Arial,Helvetica,sans-serif", style:"", borderSide:!0, imageUrl:"../images/", links:{data:"dataMgr.all", datalen:"dataMgr.all.length", shown:"dataMgr.datalist", set:"dataMgr.set", add:"dataMgr.add", addList:"dataMgr.addList", update:"dataMgr.update", updateByKey:"dataMgr.updateByKey", updateList:"dataMgr.updateList", remove:"dataMgr.remove", removeList:"dataMgr.removeList", select:"dataMgr.executeSelect", undo:"dataMgr.undo", 
    redo:"dataMgr.redo", addFilter:"dataMgr.addFilter", removeFilter:"dataMgr.removeFilter", check:"collapser.checkMgr.checkList checkMgr.checkList", checked:"collapser.checkMgr.getCheckList checkMgr.getCheckList", removeChecked:"collapser.checkMgr.removeChecked checkMgr.removeChecked", register:"event.register", trigger:"event.trigger", bind:"event.bind", unregister:"event.unregister", unbind:"event.unregister", collen:"colDefMgr.length"}, autoWidth:!1, showMessage:!1}
  };
  e._init = function(e) {
    var a = this._ctnr = e.container, c = this._options, b;
    this.name = c.name;
    this._drag = !1;
    this._lastH = this._lastW = null;
    this._vars = {scrollbarDim:void 0};
    a = this._ctnr = $("<div id='" + this.mid + "' class='" + c.classGrid + "' " + (d.isNull(c.width) ? "" : "style='width:" + c.width + "px' ") + "tabIndex='0'>").appendTo(Util$.safe$(a));
    this._vars.scrollbarDim = Util$.calScrollbarDims(a);
    b = this.event = g.create("EventManager", {grid:this, options:c.EventManager});
    this.colDefMgr = g.create("ColumnManager", {grid:this, colDefs:e.colDefs, options:c.ColDefManager});
    this.dataMgr = g.create("DataManager", {grid:this, datalist:e.datalist, options:c.DataManager});
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
    b.trigger("onBeforeRenderModules onRenderModules onAfterRenderModules");
    this.msg = $("<div id='" + this.mid + "msg' class='msg' onmousedown='$(this).hide(1000)' style='position:relative;padding-left:4px;overflow:hidden;z-index:100;font-size:12px;height:21px;line-height:21px'></div>").appendTo(a).hide();
    a = a[0];
    this._lastW = a.clientWidth;
    this._lastH = a.clientHeight;
    this._registerLinks(c.links)
  };
  e._bindEvents = function() {
    g._bindGlobalEvents();
    this.log("binding Grid events...", c);
    var e = this;
    this._ctnr.bind({keydown:function(a) {
      e._keydown(a)
    }, keyup:function(a) {
      e._keyup(a)
    }, keypress:function(a) {
      e._keypress(a)
    }, mousein:function(a) {
      e._mousein(a)
    }, mouseout:function(a) {
      e._mouseout(a)
    }, mouseenter:function(a) {
      e._mouseenter(a)
    }, mouseleave:function(a) {
      e._mouseleave(a)
    }, mouseover:function(a) {
      e._mouseover(a)
    }, mousedown:function(a) {
      e._mousedown(a)
    }, click:function(a) {
      e._click(a)
    }, dblclick:function(a) {
      e._dblclick(a)
    }});
    this._charts = []
  };
  e.destroy = function() {
    this.log("destroying Grid...", c);
    try {
      this.log("event:beforeDispose.", c), this.dispatchEvent({type:"beforeDispose"}), d.isEmptyObj(g.m.Grid) && (this.log("unbinding global event handlers.", c), g._unbindGlobalEvents()), this.log("event:onDestroy.", c), this.event.trigger("onDestroy"), this.log("destroying grid vars...", c), g._destroy(this, {name:"Grid", module:"event", $:"_ctnr", map:"_options", style:"_style _dynStyle"}), this.log("disposing grid...", c), this.dispose()
    }catch(e) {
      return e
    }
  };
  e._registerLinks = function(e) {
    var a, c, b, f, j, g, l, p, n, r;
    a:for(a in e) {
      if(e.hasOwnProperty(a) && !(a in this)) {
        c = d.split(e[a]);
        b = c.length;
        f = 0;
        b:for(;f < b;f++) {
          if(j = c[f].split("."), g = j.length, !(g < 1)) {
            l = this;
            p = this;
            n = "";
            for(r = 0;r < g;r++) {
              if(j[r] in l) {
                p = l, l = l[n = j[r]]
              }else {
                continue b
              }
            }
            this._registerLink(a, l, p, n);
            continue a
          }
        }
      }
    }
  };
  e._registerLink = function(e, a, c, b) {
    if(this.hasOwnProperty(e)) {
      return!1
    }
    this[e] = d.isFunction(a) ? function() {
      return a.apply(c, arguments)
    } : function() {
      return c[b]
    };
    return!0
  };
  e._createCss = function() {
    this.log("creating CSS...", c);
    var e = {type:"beforeCreateCss", css:[]}, a = this._options, b = this.event;
    this.dispatchEvent(e);
    this.log("creating CSS for Grid...", c);
    e = d.sprint("%selector%{overflow:hidden;font:%font%;%border%%style%}%submodule%", {selector:"#" + this.mid, font:a.font, border:a.borderSide ? "border:" + a.border + ";" : "border-top:" + a.border + ";border-bottom:" + a.border + ";", style:a.style, submodule:e.css.join("") + b.trigger("onCreateCss").join("")});
    this._style = d.createStyle(e);
    e = {type:"beforeCreateDynamicCss", css:[]};
    this.dispatchEvent(e);
    this._dynStyle = d.createStyle(e.css.join("") + ";" + b.trigger("onCreateDynamicCss").join(""))
  };
  e._recreateDynamicCss = function() {
    this.log("rewriting dynamic css...", 2);
    d.setStyle(this._dynStyle, this.event.trigger("onCreateDynamicCss").join(""))
  };
  e._keydown = function(e) {
    var a = this.event;
    this.log("UI event:keydown detected. event=" + e.type + ", keycode=" + e.which, 3);
    a.triggerInvalid("onBeforeKeydown", [e]) ? this.log("UI event:keydown prevented.", 3) : a.trigger("keydown_" + e.which + " keydown", [e])
  };
  e._keyup = function(e) {
    var a = this.event;
    this.log("UI event:keyup detected. event=" + e.type + ", keycode=" + e.which, 3);
    a.triggerInvalid("onBeforeKeyup", [e]) ? this.log("UI event:keyup prevented.", 3) : a.trigger("keyup_" + e.which + " keyup", [e])
  };
  e._keypress = function(e) {
    var a = this.event;
    this.log("UI event:keypress detected. event=" + e.type + ", keycode=" + e.which, 3);
    a.triggerInvalid("onBeforeKeypress", [e]) ? this.log("UI event:keypress prevented.", 3) : a.trigger("keypress_" + e.which + " keypress", [e])
  };
  e._mousein = function(e) {
    var a = this.event;
    this.log("UI event:mousein detected. event=" + e.type, 4);
    a.triggerInvalid("onBeforeMousein", [e]) ? this.log("UI event:mousein prevented.", 4) : this._drag ? a.trigger("dragin mousein", [e]) : a.trigger("mousein", [e])
  };
  e._mouseout = function(e) {
    var a = this.event;
    this.log("UI event:mouseout detected. event=" + e.type, 4);
    a.triggerInvalid("onBeforeMouseout", [e]) ? this.log("UI event:mouseout prevented.", 4) : this._drag ? a.trigger("dragout mouseout", [e]) : a.trigger("mouseout", [e])
  };
  e._mouseenter = function(e) {
    var a = this.event;
    this.log("UI event:mouseenter detected. event=" + e.type, 3);
    a.triggerInvalid("onBeforeMouseenter", [e]) ? this.log("UI event:mouseenter prevented.", 3) : this._drag ? a.trigger("dragenter mouseenter", [e]) : a.trigger("mouseenter", [e])
  };
  e._mouseleave = function(e) {
    var a = this.event;
    this.log("UI event:mouseleave detected. event=" + e.type, 3);
    a.triggerInvalid("onBeforeMouseleave", [e]) ? this.log("UI event:mouseleave prevented.", 3) : this._drag ? a.trigger("dragleave mouseleave", [e]) : a.trigger("mouseleave", [e])
  };
  e._mousemove = function(e) {
    var a = this.event;
    this.log("UI event:mousemove detected. event=" + e.type, 5);
    a.triggerInvalid("onBeforeMousemove", [e]) ? this.log("UI event:mousemove prevented.", 5) : this._drag ? a.trigger("dragmove mousemove", [e]) : a.trigger("mousemove", [e])
  };
  e._mouseover = function(e) {
    var a = this.event;
    this.log("UI event:mouseover detected. event=" + e.type, 4);
    a.triggerInvalid("onBeforeMouseover", [e]) ? this.log("UI event:mouseover prevented.", 4) : this._drag ? a.trigger("dragover mouseover", [e]) : a.trigger("mouseover", [e])
  };
  e._mousedown = function(e) {
    var a = this.event;
    this.log("UI event:mousedown detected. event=" + e.type, 3);
    this._drag = !0;
    a.triggerInvalid("onBeforeMousedown", [e]) ? this.log("UI event:mousedown prevented.", 3) : a.trigger("mousedown", [e])
  };
  e._mouseup = function(e) {
    var a = this.event;
    this.log("UI event:mouseup detected. event=" + e.type, 3);
    this._drag = !1;
    a.trigger("unsetDrag");
    this.containsEvent(e) && (a.triggerInvalid("onBeforeMouseup", [e]) ? this.log("UI event:mouseup prevented.", 3) : a.trigger("mouseup", [e]))
  };
  e._click = function(e) {
    var a = this.event;
    this.log("UI event:click detected. event=" + e.type, 2);
    a.triggerInvalid("onBeforeClick", [e]) ? this.log("UI event:click prevented.", 2) : a.trigger("click", [e])
  };
  e._dblclick = function(e) {
    var a = this.event;
    this.log("UI event:dblclick detected. event=" + e.type, 2);
    a.triggerInvalid("onBeforeDblclick", [e]) ? this.log("UI event:dblclick prevented.", 2) : a.trigger("dblclick", [e])
  };
  e._resize = function(e) {
    var a = this.event;
    this.log("event:resize detected. event=" + e.type, 2);
    var c = !1, b = this._ctnr[0], d = this._lastW, f = this._lastH, g = b.clientWidth, b = b.clientHeight;
    if(g >= 1 && d !== g) {
      this.log("event:resizeWidth detected. " + d + "->" + g, 2), a.trigger("resizeWidth", [g, d]), this._lastW = g, c = !0
    }
    if(b >= 1 && f !== b) {
      this.log("event:resizeHeight detected. " + f + "->" + b, 2), a.trigger("resizeHeight", [b, f]), this._lastH = b, c = !0
    }
    c && a.trigger("resize", [e])
  };
  e.width = function(e) {
    var a = this._ctnr[0], c = a.clientWidth, b = this.event;
    if(!e) {
      return c
    }
    typeof e != "number" && (e = parseInt(e));
    if(e < 1 || e === c || !isFinite(e)) {
      return c
    }
    this.log("set width. " + this._lastW + "->" + e, 2);
    a.style.width = e + "px";
    b.trigger("resizeWidth", [e, this._lastW]);
    this._lastW = e;
    b.trigger("resize");
    return e
  };
  e.height = function(e) {
    var a = this._ctnr[0], c = a.clientHeight, b = this.event;
    if(!e) {
      return c
    }
    typeof e != "number" && (e = parseInt(e));
    if(e < 1 || e === c || !isFinite(e)) {
      return c
    }
    this.log("set height. " + this._lastH + "->" + e, 2);
    a.style.height = e + "px";
    b.trigger("resizeHeight", [e, this._lastH]);
    this._lastH = e;
    b.trigger("resize");
    return e
  };
  e.getCellByIdAndKey = function(e, a) {
    return g.create("Cell", {grid:this, datarow:this.dataMgr.getById(e), colDef:this.colDefMgr.getByKey(a)})
  };
  e.getCellByIdx = function(e, a) {
    return g.create("Cell", {grid:this, row:e, col:a})
  };
  e.error = function(e) {
    for(var a = g.error[e], c = 1, b = arguments.length;c < b;c++) {
      a = a.replace(RegExp("%" + (c - 1), "g"), arguments[c])
    }
    a = Error(a);
    a.code = e;
    this.printError(a.message);
    this.log("error occurred... code=" + e + ", msg=" + a.message || a.msg);
    this.event.trigger("onError", [a]);
    return a
  };
  e.printError = function(e) {
    this.log("error message... msg=" + e);
    if(this._options.showMessage) {
      var a = this.msg, c = a[0], b = c.style;
      c.innerHTML = e;
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
  e.printMessage = function(e) {
    this.log("message... msg=" + e);
    if(this._options.showMessage) {
      var a = this.msg, c = a[0], b = c.style;
      c.innerHTML = e;
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
  e.containsEvent = function(e) {
    return d.contains(this._ctnr[0], e.target)
  };
  e.getChart = function(e) {
    return this._charts[e]
  };
  e.log = function(e, a) {
    2 >= (a || 0) && b("Grid[" + this.mid + "]: " + e)
  };
  e.chart = function(e, a, b, d) {
    this.log("creating chart... type=" + a + ", columns=[" + b.join(",") + "]", c);
    var f, j, a = a.toLowerCase();
    switch(a) {
      case "area":
        f = "corechart";
        j = "AreaChart";
        break;
      case "bar":
        f = "corechart";
        j = "BarChart";
        break;
      case "candle":
        f = "corechart";
        j = "CandlestickChart";
        break;
      case "column":
        f = "corechart";
        j = "ColumnChart";
        break;
      case "combo":
        f = "corechart";
        j = "ComboChart";
        break;
      case "gauge":
        f = "gauge";
        j = "Gauge";
        break;
      case "geo":
        f = "geochart";
        j = "GeoChart";
        break;
      case "line":
        f = "corechart";
        j = "LineChart";
        break;
      case "pie":
        f = "corechart";
        j = "PieChart";
        break;
      case "scatter":
        f = "corechart";
        j = "ScatterChart";
        break;
      case "table":
        f = "table";
        j = "Table";
        break;
      case "treemap":
        f = "treemap";
        j = "TreeMap";
        break;
      default:
        throw Error("unknown chart type: " + a);
    }
    google.load("visualization", "1", {packages:[f]});
    var g = this, l = this.colDefMgr, p = this.dataMgr, n = b.map(function(e) {
      if(e = l.getByKey(e)) {
        return e
      }
      throw Error("column key not found");
    }), r = p.exportToArray(b);
    google.setOnLoadCallback(function() {
      for(var c = new google.visualization.DataTable, f = 0, m = n.length, l, u;f < m;f++) {
        l = n[f];
        u = l.type;
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
        c.addColumn(u || f === 0 && "string" || "number", l.name)
      }
      c.addRows(r);
      var x = g._charts[e] = new google.visualization[j](document.getElementById(e));
      x.draw(c, d);
      g.event.bind("onAfterRefresh", function() {
        this.log("redrawing chart... type=" + a + ", columns=[" + b.join(",") + "]", 2);
        c.removeRows(0, c.getNumberOfRows());
        c.addRows(p.exportToArray(b));
        x.draw(c, d)
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
    this._consts._NAVKEYS = d.which(["enter", "tab", "arrow", "pgdn", "pgup", "home", "end"]);
    this._rows = {length:0};
    this._cols = {length:0};
    this.__init()
  }
  var g = goog.getObjectByName("jx.grid"), d = goog.getObjectByName("jx.util");
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
    var a, e = this._rows, b = this._cols;
    for(a in e) {
      e.hasOwnProperty(a) && a !== "length" && g._deleteMap(e, a)
    }
    for(a in b) {
      b.hasOwnProperty(a) && a !== "length" && g._deleteMap(b, a)
    }
    g._destroy(this, {name:"SelectionManager", path:"selMgr", map:"_rows _cols _range _last _consts _options"})
  };
  a._onCreateCss = function() {
    var a = this.grid.event.trigger("onBeforeCreateSelCss"), e = "#" + this.grid.mid + " .", b = this._options;
    b.highlightRowEnabled === !0 && a.push(e + b.classRowSelected + " > *{background:" + b.bgColorRowSelected + "}");
    b.multiSelectEnabled === !0 && (a.push(e + b.classSelection + "{background:" + b.bgColorSelection + "}"), a.push(e + b.classRange + "{background:" + b.bgColorRange + "}"));
    a.push(e + b.classLast + "{background:" + b.bgColorLast + "}");
    return a.join("\n")
  };
  a._onGetCellClass = function(a, e, b, f) {
    var i = "", k = this._last, m = this._range, j = this._rows, g = this._options;
    d.isNotNull(k) && k.getDatarow() === b && k.getColDef() === f && (i += g.classLast);
    g.multiSelectEnabled === !0 && (d.isNotNull(m) && m.getDatarow() === b && m.getColDef() === f && (i += " " + g.classRange), j.hasOwnProperty(a) && j[a].hasOwnProperty(e) && (i += " " + g.classSelection));
    return i
  };
  a._mousedownCanvas = function(a, e) {
    if(!d.isNotNull(this._last) || !this._last.equals(e)) {
      this.grid.event.trigger("onBeforeSelect", [a, e]), this._options.multiSelectEnabled === !1 ? this.selectCell(e) : a.shiftKey && d.isNotNullAnd(this._last, this._range) ? this.selectRange(e) : a.ctrlKey ? e.getKey() === this._options.rowSelKey ? this.addRow(e) : this.addCell(e) : this.selectCell(e)
    }
  };
  a._dragoverCanvas = function(a, e) {
    this._options.multiSelectEnabled === !1 ? this.selectCell(e) : d.isNotNullAnd(this._last, this._range) && this.selectRange(e)
  };
  a._keydownCanvas = function(a) {
    if(d.isNullOr(this._last, this._range)) {
      this._consts._NAVKEYS[a.which] && this.selectCell(g.create("Cell", {grid:this.grid, row:this.grid.view._getFirstSafeVisibleRow(), col:this.grid.view._getFirstSafeVisibleCol()}))
    }else {
      if(this._consts._NAVKEYS[a.which]) {
        if(!this.grid.event.triggerInvalid("onBeforeNavigate", [a])) {
          var e;
          a.preventDefault();
          switch(a.which) {
            case d.keyMapKeydown.tab:
              e = a.shiftKey ? this._idxToCell(this._consts._LEFT, this._last) : this._idxToCell(this._consts._RIGHT, this._last);
              this.selectCell(e);
              break;
            case d.keyMapKeydown.enter:
              e = a.shiftKey ? this._idxToCell(this._consts._UP, this._last) : this._idxToCell(this._consts._DOWN, this._last);
              this.selectCell(e);
              break;
            case d.keyMapKeydown.up:
              this._options.multiSelectEnabled && a.shiftKey ? (e = this._idxToCell(this._consts._UP, this._range), this.selectRange(e)) : (e = this._idxToCell(this._consts._UP, this._last), this.selectCell(e));
              break;
            case d.keyMapKeydown.down:
              this._options.multiSelectEnabled && a.shiftKey ? (e = this._idxToCell(this._consts._DOWN, this._range), this.selectRange(e)) : (e = this._idxToCell(this._consts._DOWN, this._last), this.selectCell(e));
              break;
            case d.keyMapKeydown.left:
              this._options.multiSelectEnabled && a.shiftKey ? (e = this._idxToCell(this._consts._LEFT, this._range), this.selectRange(e)) : (e = this._idxToCell(this._consts._LEFT, this._last), this.selectCell(e));
              break;
            case d.keyMapKeydown.right:
              this._options.multiSelectEnabled && a.shiftKey ? (e = this._idxToCell(this._consts._RIGHT, this._range), this.selectRange(e)) : (e = this._idxToCell(this._consts._RIGHT, this._last), this.selectCell(e));
              break;
            case d.keyMapKeydown.pgup:
              this._options.multiSelectEnabled && a.shiftKey ? (e = this._idxToCell(this._consts._PGUP, this._range), this.selectRange(e)) : (e = this._idxToCell(this._consts._PGUP, this._last), this.selectCell(e));
              break;
            case d.keyMapKeydown.pgdn:
              this._options.multiSelectEnabled && a.shiftKey ? (e = this._idxToCell(this._consts._PGDN, this._range), this.selectRange(e)) : (e = this._idxToCell(this._consts._PGDN, this._last), this.selectCell(e));
              break;
            case d.keyMapKeydown.space:
              e = a.shiftKey ? this._idxToCell(this._consts._PGUP, this._last) : this._idxToCell(this._consts._PGDN, this._last);
              this.selectCell(e);
              break;
            case d.keyMapKeydown.home:
              this._options.multiSelectEnabled && a.shiftKey ? (e = this._idxToCell(this._consts._HOME, this._range), this.selectRange(e)) : (e = this._idxToCell(this._consts._HOME, this._last), this.selectCell(e));
              break;
            case d.keyMapKeydown.end:
              this._options.multiSelectEnabled && a.shiftKey ? (e = this._idxToCell(this._consts._END, this._range), this.selectRange(e)) : (e = this._idxToCell(this._consts._END, this._last), this.selectCell(e))
          }
          this.grid.event.trigger("onAfterNavigate", [e])
        }
      }else {
        if(this._cols.length === 1) {
          var b = this.grid.colDefMgr, f, i = this._cols;
          for(f in i) {
            if(i.hasOwnProperty(f) && f !== "length") {
              e = b.get(f).key, this.grid.event.trigger("keydownColSel_" + e + "_" + a.which + " keydownColSel_" + e, [a, i[f], this._last])
            }
          }
        }
        if(this._rows.length === 1) {
          var k;
          f = this._rows;
          for(k in f) {
            f.hasOwnProperty(k) && k !== "length" && this.grid.event.trigger("keydownRowSel_" + a.which + " keydownRowSel", [a, f[k], this._last])
          }
        }
        this.grid.event.trigger("keydownSel_" + a.which + " keydownSel", [a, this._rows, this._cols])
      }
    }
  };
  a.getCell = function() {
    if(d.isNotNull(this._last)) {
      return this._last
    }
  };
  a._isSelected = function(a) {
    return d.isNotNull(this._last) && this._last.equals(a)
  };
  b.prototype.isSelected = function() {
    return this.grid.selMgr._isSelected(this)
  };
  a._getCellIdxToNavigate = function(a, e, b) {
    switch(a) {
      case this._consts._RIGHT:
        b < this.grid.colDefMgr.length() - 1 && b++;
        break;
      case this._consts._LEFT:
        b > 0 && b--;
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
    return[e, b]
  };
  a._idxToCell = function(a, e) {
    var b = this._getCellIdxToNavigate(a, e.getRowIdx(), e.getColIdx());
    return g.create("Cell", {grid:this.grid, row:b[0], col:b[1]})
  };
  a.selectRow = function(a) {
    var e = a.getRowIdx(), b = a.getColIdx();
    this._setRange(e, b, a);
    this._setLast(e, b, a);
    this._setSelMap(this._getRowMap(e, b, a))
  };
  a.selectCell = function(a, e) {
    this.grid.event.trigger("onBeforeSelectCell", [a]);
    if(this._options.multiSelectEnabled && a.getKey() === this._options.rowSelKey) {
      this.selectRow(a)
    }else {
      var b = a.getRowIdx(), d = a.getColIdx();
      this._setRange(b, d, a, e);
      this._setLast(b, d, a);
      this._setSelMap(this._getCellMap(b, d, a))
    }
    this.grid.event.trigger("onAfterSelectCell", [a])
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
  a.addRow = function(a) {
    var e = a.getRowIdx(), b = a.getColIdx();
    this._setRange(e, b, a);
    this._setLast(e, b, a);
    this._addSelMap(this._getRowMap(e, b, a))
  };
  a.addCell = function(a) {
    var e = a.getRowIdx(), b = a.getColIdx();
    this._setRange(e, b, a);
    this._setLast(e, b, a);
    this._addSelMap(this._getCellMap(e, b, a))
  };
  a.selectRange = function(a) {
    var e = a.getRowIdx(), b = a.getColIdx(), d = this._last.getRowIdx(), f = this._last.getColIdx(), k = d < e ? d : e, d = d < e ? e : d, m;
    this._setRange(e, b, a);
    a.getKey() === this._options.rowSelKey ? (m = 0, f = this.grid.colDefMgr.length() - 1) : (m = f < b ? f : b, f = f < b ? b : f);
    this._setSelMap(this._getRangeMap(k, m, d, f, e, b, a));
    return{minRow:k, minCol:m, maxRow:d, maxCol:f}
  };
  a._setLast = function(a, e, b) {
    var e = this._last, f;
    d.isNotNull(e) && (f = e.getRowIdx(), a !== f && d.isNotNull(this._range) && f !== this._range.getRowIdx() && this.grid.view.unlockRowById(e.getId()), e.get$().removeClass(this._options.classLast), this._options.highlightRowEnabled === !0 && $(e.getRowNode()).removeClass(this._options.classRowSelected), d.isNull(b) && delete this._last);
    if(!d.isNull(b)) {
      (this._last = b).get$().addClass(this._options.classLast), this._options.highlightRowEnabled === !0 && $(b.getRowNode()).addClass(this._options.classRowSelected), this.grid.view.lockRowByIdx(a)
    }
  };
  a._setRange = function(a, e, b, f) {
    var i = this._range;
    if(d.isNotNull(i)) {
      var k = i.getRowIdx();
      if(a === k && e === i.getColIdx()) {
        return
      }
      a !== k && d.isNotNull(this._last) && k !== this._last.getRowIdx() && this.grid.view.unlockRowById(i.getId());
      i.get$().removeClass(this._options.classRange);
      d.isNull(b) && delete this._range
    }
    if(!d.isNull(b)) {
      (this._range = b).get$().addClass(this._options.classRange), b = this.grid.view, b.lockRowByIdx(a), f || b.scrollToLazy(a, e)
    }
  };
  a._addSelMap = function(a) {
    var e = this._rows, h, d, f, k;
    for(f in a) {
      if(a.hasOwnProperty(f) && (d = a[f], e.hasOwnProperty(f))) {
        for(k in h = e[f], d) {
          d.hasOwnProperty(k) && h.hasOwnProperty(k) && (d[k] instanceof b && (h[k] = d[k]), delete d[k])
        }
      }
    }
    this.addOrRemoveCss({}, !0);
    this._addToMaps(a)
  };
  a._setSelMap = function(a) {
    var e = this._rows, h, d, f, k, m = {};
    for(f in e) {
      if(e.hasOwnProperty(f) && f !== "length") {
        if(h = e[f], a.hasOwnProperty(f)) {
          for(k in d = a[f], h) {
            h.hasOwnProperty(k) && k !== "length" && (d.hasOwnProperty(k) ? (d[k] instanceof b && (h[k] = d[k]), delete d[k]) : (m.hasOwnProperty(f) || (m[f] = {}), m[f][k] = !0))
          }
        }else {
          for(k in d = m[f] = {}, h) {
            h.hasOwnProperty(k) && k !== "length" && (d[k] = !0)
          }
        }
      }
    }
    this._removeFromMaps(m);
    this.addOrRemoveCss({}, !1);
    this._addSelMap(a)
  };
  a.addOrRemoveCss = function(a, e) {
    var h = [], f, i, k, m = this.grid.view;
    for(f in a) {
      if(a.hasOwnProperty(f)) {
        for(i in k = a[f], k) {
          k.hasOwnProperty(i) && (k[i] instanceof b ? h.push(k[i].getNode()) : h.push(m.getCell(f, i)))
        }
      }
    }
    h = h.filter(function(e) {
      return d.isNotNull(e)
    });
    e ? $(h).addClass(this._options.classSelection) : $(h).removeClass(this._options.classSelection)
  };
  a._addToMaps = function(a) {
    var e, b, f, i = this._rows, k = this._cols, m;
    for(e in a) {
      if(a.hasOwnProperty(e)) {
        for(b in m = a[e], m) {
          m.hasOwnProperty(b) && (f = d.isNull(f = m[b]) ? !0 : f, i.hasOwnProperty(e) ? i[e].length++ : (i[e] = {length:1}, i.length++), i[e][b] = f, k.hasOwnProperty(b) ? k[b].length++ : (k[b] = {length:1}, k.length++), k[b][e] = f)
        }
      }
    }
  };
  a._removeFromMaps = function(a) {
    var e, b, d = this._rows, f = this._cols, k;
    for(e in a) {
      if(a.hasOwnProperty(e)) {
        for(b in k = a[e], k) {
          k.hasOwnProperty(b) && (--d[e].length === 0 ? (delete d[e], d.length--) : delete d[e][b], --f[b].length === 0 ? (delete f[b], f.length--) : delete f[b][e])
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
    var d = {}, f = this.grid.colDefMgr.length(), k = 0;
    for(d[a] = {};k < f;k++) {
      d[a][k] = !0
    }
    d[a][e] = b;
    return d
  };
  a._getRangeMap = function(a, e, b, d, f, k, m) {
    for(var g = {}, o;a <= b;a++) {
      g[a] = {};
      for(o = e;o <= d;o++) {
        g[a][o] = !0
      }
    }
    g[f][k] = m;
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
  function f(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    this.grid.editMgr = this;
    this._options = d._extend({classEdit:"jgrid-edit", classCellEditable:"jgrid-editable", classCellNotEditable:"jgrid-notEditable", editableBgEnabled:!1, notEditableBgEnabled:!1, editableBg:"#FFF", notEditableBg:"#F6F6F6", deleteEnabled:!1, editIconEnabled:!0, urlEditIcon:this.grid._options.imageUrl + "editable-small.png", classEditIcon:"edit-icon", editIconWidth:12, editIconPadding:3, basicBackground:"#FFF9D7", classSuccess:"edit-success", successBackground:"#cdf7b6", classFailure:"edit-failure", 
    failureBackground:"#ffcec5"}, a.options);
    this._beginEditKeys = b.which(["number", "alphabet", "del", "backspace"]);
    this.__init()
  }
  function g(a) {
    for(var c in a) {
      a.hasOwnProperty(c) && (this[c] = a[c])
    }
  }
  var d = goog.getObjectByName("jx.grid"), b = goog.getObjectByName("jx.util");
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
      for(var c = this.grid.colDefMgr.get(), d = c.length, f = 0;f < d;f++) {
        if(b.isNotNull(c[f].editor)) {
          a["onRenderHeader_" + c[f].key + "_prepend"] = this._onRenderHeader
        }
      }
    }
    this.grid.event.bind(a, this)
  };
  c._destroy = function() {
    this._deleteEditor();
    d._destroy(this, {name:"EditManager", path:"editMgr", map:"_beginEditKeys _options"})
  };
  c._onBeforeCreateSelCss = function() {
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
  c.onCreateDynamicCss = function() {
    for(var a = this.grid.view._getCellSelector(), c = this.grid.view._getPadding(), d = this.grid.colDefMgr.get(), f = 0, k = "";f < d.length;f++) {
      b.isNotNull(d[f].editor) && (k += a + ".k_" + d[f].key + " .basic-editor{width:" + (d[f].width - 2 * c) + "px}")
    }
    return k
  };
  c._onRenderHeader = function(a) {
    a.push("<span class='" + this._options.classEditIcon + "'></span>")
  };
  c._onRenderCell = function(a, c, b, d, f) {
    this.grid.dataMgr.isReal(b) && f.push("<span class='" + this._options.classEditIcon + "' title='Ŭ���Ͽ� �������� �����մϴ�' onclick='JGM.m.EditManager." + this.mid + '.beginEdit("' + b[this.grid.dataMgr.idKey] + '","' + d.key + "\")'></span>")
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
      var a = {}, c = {}, f = [], k, g, j, o, l, p, n;
      a:for(k in d) {
        if(d.hasOwnProperty(k) && k !== "length") {
          for(n in o = j = g = void 0, p = d[k], p) {
            if(p.hasOwnProperty(n) && !(n === "length" || c.hasOwnProperty(n))) {
              l = p[n].cell;
              if(b.isNull(g) && (g = l.getColDef(), j = g.defaultValue, o = g.key, b.isNull(g.editor))) {
                continue a
              }
              l = b.isNotNull(a[n]) ? a[n].datarow : l.getDatarow();
              this.grid.dataMgr.isReal(l) ? j !== l[o] && (b.isNull(a[n]) && (a[n] = {datarow:l, change:{}}, f.push(a[n])), a[n].change[o] = j) : c[n] = !0
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
    var e = this._options, b = e.tableBorderColor, d = e.headerBorderColor, f = e.cellBorderColor, k = [], g = a.length, j = g - 1, o = c.length, l = o - 1, p = 0, n;
    k.push("<html><head>");
    k.push("<title>" + e.title + "</title>");
    k.push("</head><body onload='window.print();'>");
    k.push("<table width='100%' cellspacing='0' cellpadding='0'><tbody><tr><td align='left'>");
    k.push("<table width='100%' cellspacing='0' cellpadding='2' style='border-collapse:collapse'>");
    k.push("<tbody style='font:" + e.font + ";'>");
    for(k.push("<tr style='background-color:" + e.headerBackgroundColor + ";color:" + e.headerFontColor + ";text-align:center'>");p < g;p++) {
      k.push("<td style='border:solid 1px " + d + ";'>" + a[p].name + "</td>")
    }
    k.push("</tr>");
    for(p = 0;p < o;p++) {
      e = c[p];
      k.push("<tr>");
      if(p === 0) {
        for(n = 0;n < g;n++) {
          n === 0 ? k.push("<td style='border:solid 1px " + f + ";border-top:solid 1px " + d + ";border-left:solid 1px " + b + "'>" + e[a[n].key] + "</td>") : n === j ? k.push("<td style='border:solid 1px " + f + ";border-top:solid 1px " + d + ";border-right:solid 1px " + b + "'>" + e[a[n].key] + "</td>") : k.push("<td style='border:solid 1px " + f + ";border-top:solid 1px " + d + "'>" + e[a[n].key] + "</td>")
        }
      }else {
        if(p < l) {
          for(n = 0;n < g;n++) {
            n === 0 ? k.push("<td style='border:solid 1px " + f + ";border-left:solid 1px " + b + "'>" + e[a[n].key] + "</td>") : n === j ? k.push("<td style='border:solid 1px " + f + ";border-right:solid 1px " + b + "'>" + e[a[n].key] + "</td>") : k.push("<td style='border:solid 1px " + f + "'>" + e[a[n].key] + "</td>")
          }
        }else {
          for(n = 0;n < g;n++) {
            n === 0 ? k.push("<td style='border:solid 1px " + f + ";border-bottom:solid 1px " + b + ";border-left:solid 1px " + b + "'>" + e[a[n].key] + "</td>") : n === j ? k.push("<td style='border:solid 1px " + f + ";border-bottom:solid 1px " + b + ";border-right:solid 1px " + b + "'>" + e[a[n].key] + "</td>") : k.push("<td style='border:solid 1px " + f + ";border-bottom:solid 1px " + b + "'>" + e[a[n].key] + "</td>")
          }
        }
      }
      k.push("</tr>")
    }
    k.push("</tbody></table></td></tr></tbody></table></body></html>");
    return k.join("")
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
    this._lastRowLen = this.grid.dataMgr.datalist.length;
    this.grid.event.bind({canvasFind:this._canvasFind, onCreateCss:this._onCreateCss, onCreateDynamicCss:this._onCreateDynamicCss, onDestroy:this._onDestroy, keydown:this._keydown, keyup:this._keyup, keypress:this._keypress, mousein:this._mousein, mouseout:this._mouseout, mouseenter:this._mouseenter, mouseleave:this._mouseleave, mousemove:this._mousemove, mouseover:this._mouseover, mousedown:this._mousedown, mouseup:this._mouseup, click:this._click, dblclick:this._dblclick, resizeWidth:this._setWidth, 
    "resizeWidth onResizeCol onResizeCanvasHeight":this._resizeWidth, onAfterRefresh:this.onAfterRefresh, onRenderModules:this._render, onReorderCols:this._onReorderCols, onResizeCanvasWidth:this._scroll, onUpdateDatarow:this.onUpdateDatarow, onUpdateDatalist:this.onUpdateDatalist, onRemoveDatarow:this.onRemoveDatarow, onRemoveDatalist:this.onRemoveDatalist, onIdChange:this.onIdChange, onIdListChange:this.onIdListChange, unsetDrag:this.unsetDrag}, this)
  };
  c.unsetDrag = function() {
    this._drag = !1
  };
  c._onDestroy = function() {
    g._destroy(this, {name:"ViewportManager", path:"view", $:"_canvas _mask", property:"_ctnr", map:"_vars _lockedRows _renderedRows _options"})
  };
  c._onCreateCss = function() {
    var a = "#" + this.grid.mid + " .", c = this._options, b = a + c.classCell, d = a + c.classRow, f = c.borderThickness + "px " + c.border, g = d + "[" + c.attrRowIdx, j = this.grid.colDefMgr.get(), o = j.length, l = 0, p = [];
    p.push(a + c.classView + "{height:" + this._calHeight() + "px;outline:0;position:relative;white-space:nowrap;overflow:auto;line-height:" + c.rowH + "px;cursor:default;-moz-user-select:none;-webkit-user-select:none;" + c.style + "}");
    p.push(a + c.classView + ":focus{background:" + c.focusBackground + ";outline:" + c.focusOutline + "}");
    p.push(a + c.classCanvas + "{height:" + this._calCanvasHeight() + "px;" + c.canvasStyle + ";background:#fff}");
    p.push(d + "{position:absolute;" + c.rowStyle + "}");
    p.push(b + "{height:" + c.rowH + "px;border-bottom:" + f + ";display:inline-block;white-space:nowrap;overflow:hidden;float:left;text-overflow:ellipsis;padding-left:" + c.padding + "px;border-right:" + f + ";" + c.cellStyle + "}");
    for(c.evenOddRows && p.push(g + "$='1']," + g + "$='3']," + g + "$='5']," + g + "$='7']," + g + "$='9']{background:" + c.oddRowsBackground + "}");l < o;l++) {
      p.push(b + ".k_" + j[l].key + "{" + j[l].style + "}")
    }
    return p.join("")
  };
  c._onCreateDynamicCss = function() {
    for(var a = "#" + this.grid.mid + " ." + this._options.classCell, c = this._getRowSelector() + "{width:" + this._calCanvasWidth() + "px}", b = this.grid.colDefMgr.get(), d = b.length, f = 0;f < d;f++) {
      c += a + ".k_" + b[f].key + "{width:" + b[f].width + "px}"
    }
    return c
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
    for(var d = a.length, f = 0, g = this._lockedRows, j = this._renderedRows, o, l;f < d;f++) {
      o = c[f], l = a[f][b], g.hasOwnProperty(o) && (g[l] = g[o], delete g[o]), j.hasOwnProperty(o) && ((j[l] = j[o]).setAttribute("i", l), delete j[o])
    }
  };
  c._getCellSelector = function() {
    return"#" + this.grid.mid + " ." + this._options.classCell
  };
  c._getRowSelector = function() {
    return"#" + this.grid.mid + " ." + this._options.classRow
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
    return this.grid.colDefMgr.get(a).width
  };
  c._getColInnerWidthByKey = function(a) {
    return this.grid.colDefMgr.getByKey(a).width
  };
  c.getColWidth = function(a) {
    return this.grid.colDefMgr.get(a).width + this._options.padding
  };
  c.getColWidthByKey = function(a) {
    return this.grid.colDefMgr.getByKey(a).width + this._options.padding
  };
  c._getColOuterWidth = function(a) {
    return this.grid.colDefMgr.get(a).width + this._options.padding + this._options.borderThickness
  };
  c._getColOuterWidthByKey = function(a) {
    return this.grid.colDefMgr.getByKey(a).width + this._options.padding + this._options.borderThickness
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
    return this._getRowOuterHeight() * this.grid.dataMgr.datalist.length
  };
  c.getCanvasHeight = function() {
    return this._canvas[0].clientHeight
  };
  c._setCanvasHeight = function(a) {
    a = parseInt(a);
    if(!(isNaN(a) || a < 1)) {
      var c = this.getCanvasHeight();
      if(a != c) {
        this._canvas[0].style.height = a + "px", this.grid.event.trigger("onResizeCanvasHeight", [a, c])
      }
    }
  };
  c._calCanvasWidth = function() {
    return this._colLefts[this.grid.colDefMgr.length()]
  };
  c.getCanvasWidth = function() {
    return this._canvas[0].clientWidth
  };
  c._setCanvasWidth = function(a) {
    typeof a != "number" && (a = parseInt(a));
    if(isFinite(a) && !(a < 1)) {
      var c = this.getCanvasWidth();
      if(a != c) {
        this.grid.log("set canvas width. " + c + "->" + a, d.V_RESIZE), this._canvas[0].style.width = a + "px", this.grid.event.trigger("onResizeCanvasWidth", [a, c])
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
    var d = this.grid.colDefMgr.get(), f = this._colWidthPlus();
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
    var f = this.grid.colDefMgr.getByKey(a), c = b.bound(c, f.minW, f.maxW);
    if(c !== f.width) {
      this.grid.log("set column width. key=" + a + ", w=" + c, d.V_RESIZE);
      var i = f.width;
      f.width = c;
      this._setCanvasWidth(this._setColLefts(this.grid.colDefMgr.getIdxByKey(a))[this.grid.colDefMgr.length()]);
      this.grid._recreateDynamicCss();
      this.grid.event.trigger("onResizeCol_" + a + " onResizeCol", [a, c, i])
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
      return{start:0, end:this.grid.dataMgr.datalist.length - 1}
    }
    var a, c = this.grid.dataMgr.datalist.length - 1;
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
    this.grid.event.trigger("onBeforeRerender");
    this.unlockAllRows();
    this._removeRows();
    var b = this.grid.dataMgr.datalist.length;
    if(this._lastRowLen !== b) {
      this._lastRowLen = b, this._setCanvasHeight(this._calCanvasHeight())
    }
    this._render();
    this.setScrollTop(a);
    this.setScrollLeft(c);
    this.grid.event.trigger("onAfterRerender")
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
    var c = this._canvas[0], d = this._renderedRows, f = this._lockedRows, g;
    if(b.isNull(a)) {
      if(this._lockExist()) {
        for(g in d) {
          d.hasOwnProperty(g) && f.hasOwnProperty(g) && (c.removeChild(d[g]), delete d[g])
        }
      }else {
        this._renderedRows = {}, c.innerHTML = ""
      }
    }else {
      for(var m = a.start, a = a.end, j = this.grid.dataMgr;m <= a;m++) {
        if(!f.hasOwnProperty(g = j.getIdByIdx(m)) && d.hasOwnProperty(g)) {
          c.removeChild(d[g]), delete d[g]
        }
      }
    }
  };
  c._removeRowsExcept = function(a) {
    var c = this._canvas[0], d = this._renderedRows, f = this._lockedRows, g;
    if(b.isNull(a)) {
      if(this._lockExist()) {
        for(g in d) {
          d.hasOwnProperty(g) && f.hasOwnProperty(g) === !1 && (c.removeChild(d[g]), delete d[g])
        }
      }else {
        this._renderedRows = {}, c.innerHTML = ""
      }
    }else {
      var m = a.start, a = a.end, j = this.grid.dataMgr, o;
      for(g in d) {
        if(d.hasOwnProperty(g) && !(f.hasOwnProperty(g) || m <= (o = j.getIdxById(g)) && o <= a)) {
          c.removeChild(d[g]), delete d[g]
        }
      }
    }
  };
  c.destroyRow = function(a) {
    return this.destroyRowById(this.grid.dataMgr.getId(a))
  };
  c.destroyRowById = function(a) {
    b.isNotNull(a) && (this.unlockRowById(a), this._renderedRows.hasOwnProperty(a) && (this._canvas[0].removeChild(this._renderedRows[a]), delete this._renderedRows[a]))
  };
  c.destroyRowByIdx = function(a) {
    return this.destroyRowById(this.grid.dataMgr.getIdByIdx(a))
  };
  c._lockExist = function() {
    return b.isNotEmptyObj(this._lockedRows)
  };
  c.isRowLockedById = function(a) {
    return b.isNotNull(a) ? this._lockedRows.hasOwnProperty(a) : !1
  };
  c.isRowLocked = function(a) {
    return this.isRowLockedById(this.grid.dataMgr.getId(a))
  };
  c.isRowLockedByIdx = function(a) {
    return this.isRowLockedById(this.grid.dataMgr.getIdByIdx(a))
  };
  c.lockRowById = function(a) {
    b.isNotNull(a) && this.grid.dataMgr.hasById(a) && (this._lockedRows[a] = !0)
  };
  c.lockRow = function(a) {
    return this.lockRowById(this.grid.dataMgr.getId(a))
  };
  c.lockRowByIdx = function(a) {
    return this.lockRowById(this.grid.dataMgr.getIdByIdx(a))
  };
  c.unlockRowById = function(a) {
    this.isRowLockedById(a) && delete this._lockedRows[a]
  };
  c.unlockRow = function(a) {
    return this.unlockRowById(this.grid.dataMgr.getId(a))
  };
  c.unlockRowByIdx = function(a) {
    return this.unlockRowById(this.grid.dataMgr.getIdByIdx(a))
  };
  c.unlockAllRows = function() {
    this._lockedRows = {}
  };
  c.rerenderRowById = function(a) {
    if(this.grid.dataMgr.containsById(a)) {
      var c = this._renderedRows, d = this._canvas[0], f = this.grid.dataMgr, g = f.getIdxById(a), f = f.getById(a), m = this.grid.colDefMgr.get(), j = this._getColCellClasses(m), o = this._getRowOuterHeight(), l = [];
      c.hasOwnProperty(a) && (d.removeChild(c[a]), this.grid.event.trigger("onBeforeRenderRows", [[g]]), this._renderRow(l, g, f, m, j, o), c[a] = b.appendHTML(d, l.join(""))[0], this.grid.event.trigger("onAppendRows", [[g]]))
    }
  };
  c.rerenderRow = function(a) {
    return this.rerenderRowById(this.grid.dataMgr.getId(a))
  };
  c.rerenderRowByIdx = function(a) {
    return this.rerenderRowById(this.grid.dataMgr.getIdByIdx(a))
  };
  c.rerenderCellByIdAndKey = function(a, c) {
    var b = this.getCellByIdAndKey(a, c);
    if(b !== void 0) {
      var d = this.grid.dataMgr, f = this.grid.colDefMgr, g = d.getById(a), j = f.getByKey(c), d = d.getIdxById(a), f = f.getIdxByKey(c);
      b.innerHTML = this._renderCell([], d, f, g, j).join("")
    }
  };
  c.rerenderCellByIdx = function(a, c) {
    return this.rerenderCellByIdAndKey(this.grid.dataMgr.getIdByIdx(a), this.grid.colDefMgr.getKeyByIdx(c))
  };
  c._appendRows = function(a) {
    this.grid.event.trigger("onBeforeRenderRows", [a]);
    for(var c = [], d = a.start, f = a.end, g = this.grid.dataMgr.datalist, m = this.grid.dataMgr.idKey, j = this.grid.colDefMgr.get(), o = this._getColCellClasses(j), l = this._renderedRows, p = this._getRowOuterHeight(), n = this._canvas[0], r, s, t = [];d <= f;d++) {
      if(r = g[d], !l.hasOwnProperty(s = r[m])) {
        this._renderRow(c, d, r, j, o, p), t.push(s)
      }
    }
    c = b.appendHTML(n, c.join(""));
    d = 0;
    for(f = t.length;d < f;d++) {
      l[t[d]] = c[d]
    }
    this.grid.event.trigger("onAppendRows", [a])
  };
  c._removeAndRenderRows = function(a) {
    b.isNull(a) && (a = this._getRenderRange());
    this.grid.event.trigger("onBeforeRenderRows", [a]);
    for(var c = [], d = a.start, f = a.end, g = this.grid.dataMgr, m = g.datalist, j = g.idKey, o = this.grid.colDefMgr.get(), l = this._getColCellClasses(o), g = this._canvas[0], p = this._getRowOuterHeight(), n, r = [], s = {};d <= f;d++) {
      n = m[d], this._renderRow(c, d, n, o, l, p), r.push(n[j])
    }
    g.innerHTML = c.join("");
    d = 0;
    for(c = r.length;d < c;d++) {
      s[r[d]] = g.childNodes[d]
    }
    this._renderedRows = s;
    this.grid.event.trigger("onAppendRows", [a])
  };
  c._getColCellClass = function(a) {
    var c = this._options.classCell + " k_" + a.key;
    b.isNotNull(a.colClass) && (c += " " + a.colClass);
    c += " " + this.grid.event.trigger("onGetColCellClass", [a]).join(" ");
    return c
  };
  c._getColCellClasses = function(a) {
    var c = [], d = 0, f = a.length;
    for(b.isNull(a) && (a = this.grid.colDefMgr.get());d < f;d++) {
      c.push(this._getColCellClass(a[d]))
    }
    return c
  };
  c._renderRow = function(a, c, b, d, f, g) {
    a.push("<div class='" + this._options.classRow + "' i='" + b[this.grid.dataMgr.idKey] + "' " + this._options.attrRowIdx + "='" + c + "' style='top:" + g * c + "px'>");
    for(var g = 0, j = d.length;g < j;g++) {
      a.push("<div class='" + f[g] + " " + this.grid.event.trigger("onGetCellClass", [c, g, b, d[g]]).join(" ") + "'>"), this._renderCell(a, c, g, b, d[g]), a.push("</div>")
    }
    a.push("</div>");
    return a
  };
  c._renderCell = function(a, c, b, d, f) {
    this.grid.event.trigger("onRenderCell_" + f.key + "_prepend", [c, b, d, f, a]);
    var m = d[f.key];
    if(typeof m !== "string" || m.substring(0, 3) !== "J@H") {
      f.rendererInput ? a.push(f.renderer(g.create("Cell", {grid:this.grid, row:c, col:b, datarow:d, colDef:f}))) : a.push(f.renderer(m, c, b, d, f, this))
    }
    this.grid.event.trigger("onRenderCell_" + f.key + "_append", [c, b, d, f, a]);
    return a
  };
  a.prototype.rerender = function() {
    return this.grid.view.rerenderCellByIdAndKey(this.getId(), this.getKey())
  };
  a.prototype.scrollTo = function() {
    this.grid.view.scrollTo(this.getRowIdx(), this.getColIdx())
  };
  c._keydown = function(a) {
    b.contains(this._mask[0], document.activeElement, this._ctnr[0]) && (this.grid.log("UI event:keydown on Viewport. event=" + a.type + ", keycode=" + a.which, d.V_KEYDOWN), this.grid.event.trigger("keydownCanvas_" + a.which + " keydownCanvas", [a]))
  };
  c._keyup = function(a) {
    b.contains(this._mask[0], document.activeElement, this._ctnr[0]) && (this.grid.log("UI event:keyup on Viewport. event=" + a.type + ", keycode=" + a.which, d.V_KEYUP), this.grid.event.trigger("keyupCanvas_" + a.which + " keyupCanvas", [a]))
  };
  c._keypress = function(a) {
    b.contains(this._mask[0], document.activeElement, this._ctnr[0]) && (this.grid.log("UI event:keypress on Viewport. event=" + a.type + ", keycode=" + a.which, d.V_KEYPRESS), this.grid.event.trigger("keypressCanvas_" + a.which + " keypressCanvas", [a]))
  };
  c._mousein = function(a) {
    this._drag ? this._triggerMouseEvent(a, {event:"draginCanvas mouseinCanvas"}, d.V_MOUSEIN) : this._triggerMouseEvent(a, {event:"mouseinCanvas"}, d.V_MOUSEIN)
  };
  c._mouseout = function(a) {
    this._drag ? this._triggerMouseEvent(a, {event:"dragoutCanvas mouseoutCanvas"}, d.V_MOUSEOUT) : this._triggerMouseEvent(a, {event:"mouseoutCanvas"}, d.V_MOUSEOUT)
  };
  c._mouseenter = function(a) {
    this._drag ? this._triggerMouseEvent(a, {event:"dragenterCanvas mouseenterCanvas"}, d.V_MOUSEENTER) : this._triggerMouseEvent(a, {event:"mouseenterCanvas"}, d.V_MOUSEENTER)
  };
  c._mouseleave = function(a) {
    this._drag ? this._triggerMouseEvent(a, {event:"dragleaveCanvas mouseleaveCanvas"}, d.V_MOUSELEAVE) : this._triggerMouseEvent(a, {event:"mouseleaveCanvas"}, d.V_MOUSELEAVE)
  };
  c._mousemove = function(a) {
    this._drag ? this._triggerMouseEvent(a, {event:"dragmoveCanvas mousemoveCanvas"}, d.V_MOUSEMOVE) : this._triggerMouseEvent(a, {event:"mousemoveCanvas"}, d.V_MOUSEMOVE)
  };
  c._mouseover = function(a) {
    this._drag ? this._triggerMouseEvent(a, {event:"dragoverCanvas mouseoverCanvas"}, d.V_MOUSEOVER) : this._triggerMouseEvent(a, {event:"mouseoverCanvas"}, d.V_MOUSEOVER)
  };
  c._mousedown = function(a) {
    if(this._triggerMouseEvent(a, {event:"mousedownCanvas"}, d.V_MOUSEDOWN)) {
      this._drag = !0
    }
  };
  c._mouseup = function(a) {
    this._drag = !1;
    this._triggerMouseEvent(a, {event:"mouseupCanvas"}, d.V_MOUSEUP)
  };
  c._click = function(a) {
    this._triggerMouseEvent(a, {event:"clickCanvas"}, d.V_CLICK) && this.focus(a)
  };
  c._dblclick = function(a) {
    this._triggerMouseEvent(a, {event:"dblclickCanvas"}, d.V_DBLCLICK)
  };
  c._triggerMouseEvent = function(a, c, d) {
    var f = this._getClosestCell(a.target), k, m;
    if(f === void 0) {
      return!1
    }
    this.grid.log("UI event:" + c.event + " on Viewport. event=" + a.type, d);
    c.cell = g.create("Cell", {grid:this.grid, node:f});
    d = b.split(c.event);
    m = d.length;
    f = [];
    for(k = 0;k < m;k++) {
      f.push(d[k] + "_" + c.cell.getKey()), f.push(d[k])
    }
    this.grid.event.trigger(f.join(" "), [a, c.cell]);
    return!0
  };
  c._scroll = function() {
    var a = this.getScrollTop(), c = a - this._lastScrollTop, b = this.getScrollLeft(), f = b - this._lastScrollLeft;
    if(!(c === 0 && f === 0)) {
      this.grid.log("Viewport scrolled... h=" + f + ", v=" + c, d.V_SCROLL);
      this.grid.event.trigger("onScrollViewport");
      if(f) {
        this._lastScrollLeft = b, this.grid.event.trigger("onScrollViewportH", [b])
      }
      if(!(Math.abs(c / this._getRowOuterHeight()) < this._options.appendThreshold)) {
        this._lastScrollTop = a, this._render(), this.grid.event.trigger("onScrollViewportV")
      }
    }
  };
  c.focus = function(a) {
    if(!b.isNotNull(a) || !this.grid.event.triggerInvalid("onBeforeFocusCanvas", [a])) {
      if(a = this._mask[0], document.activeElement !== a) {
        this.grid.log("focusing canvas...", d.V_FOCUS);
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
    return this.isRenderedById(this.grid.dataMgr.getId(a))
  };
  c.isRenderedByIdx = function(a) {
    return this.isRenderedById(this.grid.dataMgr.getIdByIdx(a))
  };
  c.getRowById = function(a) {
    if(this.isRenderedById(a)) {
      return this._renderedRows[a]
    }
  };
  c.getRow = function(a) {
    return this.getRowById(this.grid.dataMgr.getId(a))
  };
  c.getRowByIdx = function(a) {
    return this.getRowById(this.grid.dataMgr.getIdByIdx(a))
  };
  c.getRenderedRowById = function(a) {
    if(this.isRenderedById(a)) {
      return this._renderedRows[a]
    }
  };
  c.getRenderedRow = function(a) {
    return this.getRenderedRowById(this.grid.dataMgr.getId(a))
  };
  c.getRenderedRowByIdx = function(a) {
    return this.getRenderedRowById(this.grid.dataMgr.getIdByIdx(a))
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
    var d = this.getRowById(a), f = this.grid.colDefMgr.getIdxByKey(c);
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
    var d = this.getRenderedRowById(a), f = this.grid.colDefMgr.getIdxByKey(c);
    if(b.isNotNullAnd(d, f)) {
      return d.childNodes[f]
    }
  };
  c._getClosestCell = function(a) {
    return b.closestWithTag(a, "DIV", this._options.classCell, this._canvas[0])
  };
  c._getClosestRow = function(a) {
    return b.closestWithTag(a, "DIV", this._options.classRow, this._canvas[0])
  };
  c._getClosestRowIdx = function(a) {
    return this.grid.dataMgr.getIdxByNode(this._getClosestRow(a))
  };
  c._canvasFind = function(a) {
    return this._canvas.find(a)
  };
  f._renderer = function(a) {
    return b.ifNull(a, "")
  }
})();
console && console.log && console.log('reading javascript source "ColumnManager.js"...');
jx.grid.ColumnManager = {};
(function() {
  function f(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    this.grid.colDefMgr = this;
    this._options = h._extend({colDef:{type:"string", key:void 0, name:"", colClass:void 0, defaultValue:void 0, inputOnCreate:void 0, style:"", headerStyle:"", width:80, minW:30, maxW:void 0, editor:void 0, sorter:void 0, hidden:!1, sumRenderer:void 0, tooltipEnabled:!1, resizable:!1, renderer:i._renderer, rendererInput:!1, noTitle:!1, noName:!1, title:void 0, noSearch:!1, filter:void 0, parser:void 0, validator:void 0}}, a.options);
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
  var h = goog.getObjectByName("jx.grid"), q = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.getObjectByName("jx.grid.Column");
  var i = goog.getObjectByName("jx.grid.ViewportManager");
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
    if(this._colDefs === a || q.areEqualArrays(this._colDefs, a)) {
      return a
    }
    if(q.isNull(a)) {
      a = []
    }else {
      var c = a.filter(function(a) {
        return q.isNotNull(a)
      });
      a.length = 0;
      a.pushList(c)
    }
    this.grid.event.trigger("onBeforeSetColDefs", [this._colDefs, a]);
    this._colDefs = [];
    this._filtered.length = 0;
    this._keyToIdx = {};
    this._keyToDef = {};
    this.grid.event.trigger("onEmptyColDefs");
    for(var c = 0, b = a.length, e = this._keyToDef, d, f;c < b;c++) {
      d = a[c];
      if(!d.hasOwnProperty("key")) {
        return this._keyToDef = {}, this.grid.error("KEY_UNDEFINED", c)
      }
      f = d.key;
      if(q.isEmptyString(f)) {
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
    this.grid.event.trigger("onAfterSetColDefs", [a, this._filter()]);
    return a
  };
  k.push = function(a) {
    return this.addAt(this._filtered.length, a)
  };
  k.addAt = function(a, c) {
    if(!q.isNull(c)) {
      var b = c.key, e = this._keyToDef, d = this._filtered;
      q.isNull(a) || a > d.length ? a = d.length : a < 0 && (a += d.length);
      this.grid.event.trigger("onBeforeAddColDef", [c]);
      if(q.isNull(b)) {
        return this.grid.error("KEY_UNDEFINED")
      }
      if(e.hasOwnProperty(b)) {
        return this.grid.error("DUP_KEY", b)
      }
      this._colDefs.addAt(a, this._extend(e[b] = c));
      c.hidden !== !0 && (d.addAt(a, c), this._reidx());
      this.grid.event.trigger("onAfterAddColDef", [c, a]);
      return d.length
    }
  };
  k._extend = function(c) {
    if(c) {
      var e = {}, h, i;
      $.extend(!0, e, this._options.colDef);
      $.extend(!0, e, c);
      $.extend(!0, c, e);
      e = c.type = g(c.type);
      i = c.key;
      i != null && typeof i != "string" && (c.key = i = i.toString());
      if(!i) {
        throw Error("column key is not defined!");
      }
      if(h = c.sorter) {
        typeof h == "string" ? h = g(h) : e && (h = e);
        if(h = f.sorter(h, i)) {
          h.key = i
        }
        c.sorter = h
      }
      if((h = c.parser) && e && typeof h != "function") {
        switch(e) {
          case "boolean":
            h = d;
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
    if(!q.isNull(c)) {
      return c.hidden = !0, this._filtered.removeAt(a), this._reidx(), this.grid.event.trigger("onHideCol", [c, a]), c
    }
  };
  k.show = function(a) {
    if(!q.isNull(a)) {
      if(!q.isString(a)) {
        if(!q.isObject(a)) {
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
        this.grid.event.trigger("onShowCol", [c, this._keyToIdx[a]]);
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
    q.isNull(a) && (a = 0);
    for(var c = this._filtered, b = c.length, e = this._keyToIdx;a < b;a++) {
      e[c[a].key] = a
    }
    return e
  };
  k.get = function(a) {
    if(q.isNull(a)) {
      return this._filtered
    }
    if(this._filtered.hasOwnProperty(a)) {
      return this._filtered[a]
    }
  };
  k.getByKey = function(a) {
    if(q.isNotNull(a) && this._keyToDef.hasOwnProperty(a)) {
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
    return q.isNotNull(a) && this._keyToIdx.hasOwnProperty(a.key) ? this._keyToIdx[a.key] : -1
  };
  k.sortByKey = function(a) {
    this._filtered.length = 0;
    this._keyToIdx = {};
    for(var c = 0, b = a.length, e = this._filtered, d = this._keyToIdx, f = this._keyToDef;c < b;c++) {
      e.push(f[a[c]]), d[a[c]] = c
    }
    this.grid.event.trigger("onReorderCols", a);
    return this._filtered
  };
  k.getKeys = function() {
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
console && console.log && console.log('reading javascript source "MenuBar.js"...');
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
  a.addIcon = function(a, b, f, g, i) {
    return $("<div class='" + this._options.classIcon + "' tabIndex='0' title='" + b + "'><div class='" + a + "' style='margin-top:" + (this._options.iconHeight - g) / 2 + "px;margin-left:" + (this._options.iconWidth - f) / 2 + "px'></div></div>").appendTo(this._menubar).click(function(a) {
      i();
      $(this).toggleClass("active");
      a.preventDefault()
    }).keydown(function(a) {
      if(a.which === d.keyMapKeydown.enter || a.which === d.keyMapKeydown.space) {
        i(), $(this).toggleClass("active"), a.preventDefault()
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
    this._options = g._extend({classCell:"footer-cell", background:"#F1F5FB", border:"0px solid #CCD9EA", color:"#000", fontSize:"13px", fontWeight:"normal", cellHeight:25, cellPadding:40, countTemplate:"���� <span name='shownCount'></span> �� / �� <span name='totalCount'></span> ��", titleColor:"#5A6779", titleFontSize:"12px", titleFontWeight:"normal", contentColor:"#1E395B", contentFontSize:"12px", contentFontWeight:"normal", classFooter:"jgrid-footer", classTitle:"footer-title", classContent:"footer-content", 
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
    for(var a = this.grid.dataMgr.getReal(), c = this.grid.colDefMgr.get(), b = c.length, h, g, i, k, m = f._calSum, j = this._sumMap, o, l = 0;l < b;l++) {
      if(h = c[l], g = h.sumRenderer, d.isNotNull(g)) {
        if(i = h.key, h = h.name, k = m(a, i), i = j[i] = this.getNextCell(), o = i[0], d.isFunction(g)) {
          o.innerHTML = g(h, k)
        }else {
          if(d.isString(g)) {
            if(i = g.toLowerCase(), i === "krw" || g === "\\") {
              o.innerHTML = this._sumRenderer(h, d.formatNumber(k))
            }else {
              if(i === "usd" || g === "$") {
                o.innerHTML = this._sumRenderer(h, d.formatNumber(k, 2, "$ "))
              }
            }
          }else {
            o.innerHTML = this._sumRenderer(h, k)
          }
        }
      }
    }
  };
  b._updateSums = function() {
    var a = this.grid.dataMgr.getReal(), c, b = this._sumMap, h = this.grid.colDefMgr, g, i, k, m = f._calSum, j, o, l = this._options.classContent;
    for(c in b) {
      if(b.hasOwnProperty(c)) {
        if(g = h.getByKey(c), i = g.sumRenderer, k = m(a, c), j = b[c], o = j[0], d.isFunction(i)) {
          o.innerHTML = i(g.name, k)
        }else {
          if(d.isString(i)) {
            if(g = i.toLowerCase(), g === "krw" || i === "\\") {
              j.find("span." + l)[0].innerHTML = d.formatNumber(k)
            }else {
              if(g === "usd" || i === "$") {
                j.find("span." + l)[0].innerHTML = d.formatNumber(k, 2, "$ ")
              }
            }
          }else {
            j.find("span." + l)[0].innerHTML = k
          }
        }
      }
    }
  };
  b.getNextCell = function() {
    return $("<div class='" + this._options.classCell + "'/>").appendTo(this._foot)
  };
  b._sumRenderer = function(a, c) {
    return"<span class='" + this._options.classTitle + "'>" + a + " �հ�: </span><span class='" + this._options.classContent + "'>" + c + "</span>"
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
console && console.log && console.log('reading javascript source "ColumnHeader.js"...');
jx.grid.ColumnHeader = {};
(function() {
  function f(c) {
    c.grid.log("creating new ColumnHeader instance...", a.V_INIT);
    b.call(this, c)
  }
  var g = goog.getObjectByName("jx.grid"), d = goog.getObjectByName("jx.util"), b = goog.getObjectByName("jx.grid.BaseModule"), a = goog.getObjectByName("jx.grid.Grid");
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
    var c, b = this.getColumns(), d = b.length, f = 0;
    for(c = {onRenderModules:this._onRenderModules, onAfterRenderModules:this._onAfterRenderModules, mousedown:this._mousedown, mouseup:this._mouseup, dragmove:this._dragmove, onScrollViewportH:this._onScrollViewportH, onScrollViewportV:this._onScrollViewportV, onChangeSorter:this._onChangeSorter, click:this._click, onResizeCol:this._setWidthByKey};f < d;f++) {
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
    var b = "#" + this.grid.mid + " .", d = this._options, f = d.borderThickness + "px " + d.border, g = this.getColumns(), m = g.length, j = 0, o = "." + d.classHeaderMask, l = "." + d.classColHeader, p = d.scrollerLeft, p = d.scrollerLeft, n = d.height + "px", r = d.classColHeaderActive, s = {};
    s[o] = {position:"relative", overflow:"hidden", width:"100%", font:d.font, background:d.background, "border-bottom":f, _append:d.style};
    s["." + d.classHeader] = {position:"relative", overflow:"hidden", "white-space":"nowrap", cursor:"default", left:-p + "px", width:d.scrollerWidth + "px", "line-height":n};
    s[l] = {position:"relative", overflow:"hidden", "float":"left", "text-overflow":"ellipsis", "text-align":"center", height:n, left:p - this.getView().getScrollLeft() + "px", "border-right":f, _append:d.headerStyle};
    s[l + "." + d.classInteractive + ":hover, " + b + r] = {background:d.backgroundHover};
    s["." + r] = {"border-left":f};
    s[l + "." + d.classColHeaderPlaceholder] = {background:d.backgroundPlaceholder + "!important"};
    s["." + d.classSort] = {position:"absolute", height:n, right:d.sortRight + "px", width:d.sortWidth + "px", background:"url(" + d.sortBackground + ") no-repeat center transparent"};
    s["." + d.classSortAsc] = {background:"url(" + d.sortBackgroundAsc + ") no-repeat center transparent"};
    s["." + d.classSortDesc] = {background:"url(" + d.sortBackgroundDesc + ") no-repeat center transparent"};
    s["." + d.classResizeHandle] = {"z-index":10, background:d.resizeHandleBackground, cursor:"e-resize", position:"absolute", height:n, width:d.resizeHandleWidth + "px"};
    for(s["." + d.classResizeGuide] = {"z-index":10, position:"absolute", background:d.resizeBackground, width:d.resizeGuideWidth + "px"};j < m;j++) {
      g[j].headerStyle && (s[l + "#" + this.mid + "h" + g[j].key] = {_append:g[j].headerStyle})
    }
    this.toCssStyles(c.css, s)
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
    for(var c = this.getColumns(), b = c.length, d = 0, f, g = [];d < b;d++) {
      (f = c[d]).hidden || this._render(g, f, d)
    }
    this._head[0].innerHTML = g.join("");
    this.triggerGridEvent("onRenderHeadersComplete")
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
    var d = this._options, f = c.key, g = c.noName ? "" : c.name || f, j = this._widthPlus();
    a.push("<div id='" + this.mid + "h" + f + "' class='" + d.classColHeader + " " + (d.reorderEnabled || c.sorter ? " " + d.classInteractive : "") + "' " + (c.noTitle ? "" : "title='" + (c.title || g) + "' ") + "style='width:" + (this.getView()._getColOuterWidth(b) - j) + "px;' colKey='" + f + "'>");
    this.triggerGridEvent("onRenderHeader_" + f + "_prepend", [a]);
    a.push(g);
    this.triggerGridEvent("onRenderHeader_" + f + "_append", [a]);
    c.sorter && a.push("<span class='" + d.classSort + "'></span>");
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
    var b = this.get(a), d = this._options, f = b.find("." + d.classSort), g = d.classColHeaderSorted, j = d.classSortAsc, d = d.classSortDesc;
    c === 0 ? (b.removeClass(g), f.removeClass(j + " " + d)) : (b.addClass(g), c === 1 ? f.addClass(j).removeClass(d) : c === 2 && f.addClass(d).removeClass(j))
  };
  c._closest = function(a) {
    return Util$.safe$(a).closest("div." + this._options.classColHeader, this._head)
  };
  c._getDef = function(a) {
    return this.getColMgr().getByKey(a.attr("colKey"))
  };
  c._sort = function(c, b, d) {
    this.grid.log("Colheader clicked to sort. key=" + d.key, a.V_CLICK);
    c = d.sorter;
    this.triggerGridEvent("onBeforeColSort_" + d.key + " onBeforeColSort");
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
    var c = this, b = this._options, d = this.getColMgr(), f = this._head, g = this.mid.length + 1, m = function(a, c) {
      for(var b = $(f).sortable("toArray"), e = b.length, h, m = 0;m < e;m++) {
        h = b[m], b[m] = h === "" ? c.item.attr("id").substring(g) : h.substring(g)
      }
      d.sortByKey(b)
    };
    f.sortable({items:"." + b.classColHeader, axis:"x", forcePlaceholderSize:!0, placeholder:b.classColHeaderPlaceholder + " " + b.classColHeader, tolerance:"pointer", start:function(a, b) {
      b.item.addClass(c._options.classColHeaderActive)
    }, stop:function(a, b) {
      b.item.removeClass(c._options.classColHeaderActive);
      c._syncResizeHandles()
    }, update:m});
    b.reorderSyncEnabled && f.sortable("option", "change", m)
  };
  c._getDx = function(a, c) {
    var b = a.clientX - this._resizeInitX, f = c.minW, g = d.ifNull(c.maxW, Number.MAX_VALUE), m = this._resizeInitWidth;
    m + b < f && (b = f - m);
    m + b > g && (b = g - m);
    return b
  };
  c._click = function(c) {
    var b = this._closest(c.target);
    if(b.length !== 0) {
      var d = this._getDef(b), f = d.key;
      this.grid.log("Colheader clicked. key=" + f, a.V_CLICK);
      this.getEventMgr().triggerInvalid("clickHeaderValid_" + f, [c, b, d]) || this.triggerGridEvent("clickHeader_" + f + " clickHeader", [c, b, d])
    }
  };
  c._mousedown = function(c) {
    var b = this._options;
    if(d.hasTagAndClass(c.target, "DIV", b.classResizeHandle)) {
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
        var g = this._getDef(b), f = g.key;
        this.grid.log("mousedown on ColumnHeader. key=" + f, a.V_MOUSEDOWN);
        this.triggerGridEvent("mousedownHeader", [c, b]);
        this.triggerGridEvent("mousedownHeader_" + f, [c, b, g])
      }
    }
  };
  c._dragmove = function(c) {
    var b = this._resizeKey;
    if(b != null && (c = this._getDx(c, this.getColMgr().getByKey(b)), !(Math.abs(c) < 1))) {
      this.grid.log("drag on ColumnHeader Resize Handle. key=" + b, a.V_MOUSEMOVE);
      var d = this._options;
      this.get(b)[0].style.width = this._resizeInitWidth + c + "px";
      this._moveResizeHandles(this._resizeHandleInitX + c - this._resizeMap[b][0].offsetLeft, this.getColMgr().getIdxByKey(b));
      this._resizeGuide[0].style.left = Math.floor(this._resizeHandleInitX + c + (d.resizeHandleWidth - d.resizeGuideWidth) / 2 - d.scrollerLeft) + "px";
      d.syncResize && this.getView().setWidthByKey(b, this._resizeInitColWidth + c)
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
    for(var a = a || 0, c = this.getView()._getColLefts(), b = this.getColumns(), d = b.length, f = this._resizeMap, g;a < d;a++) {
      if(g = b[a].key, f.hasOwnProperty(g)) {
        f[g][0].style.left = c[a + 1] + this._resizeHandleOffset + "px"
      }
    }
  };
  c._moveResizeHandles = function(a, c) {
    for(var c = c || 0, b = this.getColumns(), d = b.length, f = this._resizeMap, g;c < d;c++) {
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
    for(var c = this.getColumns(), b = c.length, d = this.getView(), f = d.mid, d = d._getColLefts(), g = this._options, m = this._resizeMap, j, o = 0, l = this._resizeHandleOffset = Math.floor(g.scrollerLeft - g.resizeHandleWidth / 2), p = g.classResizeHandle, n = this._head;o < b;o++) {
      if(g = c[o], g.resizable) {
        j = g.key, m[j] = $("<div class='" + p + "' key='" + j + "' ondblclick='JGM.m.ViewportManager." + f + '._autoColWidth("' + j + "\")' style='left:" + (l + d[o + 1]) + "px' title='" + g.name + " �÷��� ���� �����մϴ�.'>").appendTo(n)
      }
    }
  }
})();
console && console.log && console.log('reading javascript source "CheckManager.js"...');
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
  a._beforeDispose = function() {
    this.dispose()
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
    for(var a = this.getAllData(), b = a.length, d = this.getIdKey(), g = this._map, i = 0;i < b;i++) {
      g[a[i][d]] = a[i]
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
    this._add(a) && (f._check(this.getCheckbox(a)), this._updateMaster(), this.triggerGridEvent("onCheckChange", [a, !0]))
  };
  a.uncheck = function(a, b) {
    b || (a = this.getDataMgr().map(a));
    this._remove(a) && (f._uncheck(this.getCheckbox(a)), this._hasMaster && f._uncheck(this._master), this.triggerGridEvent("onCheckChange", [a, !1]))
  };
  a.disable = function(a, b) {
    var d = this.getDataMgr();
    b || (a = d.map(a));
    var d = d.getId(a), g = this.disabledmap;
    g.hasOwnProperty(d) || (g[d] = a, f.disableNode(this.getCheckbox(a)), this.triggerGridEvent("onDisableCheck", [a]))
  };
  a.enable = function(a, b) {
    var d = this.getDataMgr();
    b || (a = d.map(a));
    var d = d.getId(a), g = this.disabledmap;
    g.hasOwnProperty(d) && (delete g[d], f.enableNode(this.getCheckbox(a)), this.triggerGridEvent("onEnableCheck", [a]))
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
    for(var d = [], f = [], g = 0, k = a.length, m = this.getIdKey(), j, o = this._map;g < k;g++) {
      o.hasOwnProperty((j = a[g])[m]) ? d.push(j) : f.push(j)
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
    for(var f = 0, g = a.length, k = this._map, m = this.disabledmap, j, o;f < g;f++) {
      j = a[f], o = b[f], k.hasOwnProperty(o) && (delete k[o], k[j[d]] = j), m.hasOwnProperty(o) && (delete m[o], m[j[d]] = j)
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
    var a = "#" + this.grid.mid + " .", b = this._options, f = a + this.grid.view._options.classRow + " .", g = a + b.classCollapser, i = g + "." + b.classExpanded, k = g + "." + b.classCollapsed, m = this.grid.view._getRowInnerHeight(), j = [], o = this.grid.header;
    j.push(a + b.classIndent + "{height:" + m + "px;float:left;}");
    j.push(g + "{width:" + b.width + "px;float:left;padding:0 " + b.padding + "px}");
    j.push(f + b.classCollapser + "{height:" + m + "px}");
    j.push(i + "{background:url(" + b.urlExpanded + ") no-repeat center transparent}");
    j.push(i + ":hover{background:url(" + b.urlExpandedHover + ") no-repeat center transparent}");
    j.push(k + "{background:url(" + b.urlCollapsed + ") no-repeat center transparent}");
    j.push(k + ":hover{background:url(" + b.urlCollapsedHover + ") no-repeat center transparent}");
    d.isNotNull(o) && j.push(a + o._options.classColHeader + " ." + b.classCollapser + "{height:" + o._options.height + "px}");
    return j.join("")
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
    this.grid.event.trigger("onCollapserTreeChange")
  };
  a._onAddDatalist = function(a) {
    for(var b = 0, f = a.length, g = this._tree, i = g.root, k = this._options.beginCollapsed, m = this.key, j = this.grid.view, o = this.grid.dataMgr, l, p = [], n;b < f;b++) {
      l = g.createNode(a[b]), l._collapsed = k, d.isNotNull(l.parent) && l.parent.children.length === 1 && p.push(l.parent.data)
    }
    if(j !== void 0) {
      b = 0;
      for(f = p.length;b < f;b++) {
        j.rerenderCellByIdAndKey(o.getId(p[b]), m)
      }
    }
    i.traverseChildren({fn:function(a) {
      n = this.parent;
      d.isNotNull(n) && (n === i || n._shown && !n._collapsed) ? this._shown = !0 : (a.propagate = !1, this.traverse({fn:function() {
        this._shown = !1
      }}))
    }});
    this.grid.event.trigger("onCollapserTreeChange")
  };
  a._onUpdateDatarow = function(a, b, f) {
    var g = this._tree, i = g._options.nodeKey, k = g._options.parentKey, m;
    b.hasOwnProperty(i) && (m = g.getNodeByNodeId(f[i]), g.changeNodeId(m, f[i], b[i]), this.grid.event.trigger("onCollapserTreeChange"));
    b.hasOwnProperty(k) && (d.isNull(m) && (m = g.getNode(a)), g.changeParentId(m, f[k], b[k]), this.grid.event.trigger("onCollapserTreeChange"))
  };
  a._onUpdateDatalist = function(a, b, f) {
    for(var b = this._tree, g = b._options.nodeKey, i = b._options.parentKey, k, m, j, o = [], l = [], p = 0, n = a.length;p < n;p++) {
      k = f[p], m = a[p], j = void 0, k.hasOwnProperty(g) && (d.isNull(j) && (j = b.getNodeByNodeId(k[g])), o.push({node:j, before:k[g], newId:m[g]})), k.hasOwnProperty(i) && (d.isNull(j) && (j = b.getNode(m)), l.push({node:j, before:k[i], newId:m[i]}))
    }
    a = o.length;
    f = l.length;
    if(a + f !== 0) {
      if(a + f > 10) {
        b.reattach()
      }else {
        for(p = 0;p < a;p++) {
          g = o[p], b.changeNodeId(g.node, g.before, g.newId)
        }
        for(p = 0;p < f;p++) {
          g = l[p], b.changeParentId(g.node, g.before, g.newId)
        }
      }
      this.grid.event.trigger("onCollapserTreeChange")
    }
  };
  a._onRemoveDatarow = function(a) {
    this._tree.destroyNodeByData(a);
    this.grid.event.trigger("onCollapserTreeChange")
  };
  a._onRemoveDatalist = function(a) {
    for(var b = 0, d = a.length, f = this._tree;b < d;b++) {
      f.destroyNodeByData(a[b])
    }
    this.grid.event.trigger("onCollapserTreeChange")
  };
  a._onAfterFilter = function(a, b) {
    var f = this._tree;
    if(b.length > 0) {
      var g = this.grid.dataMgr, i = a.length, k = g._idToIdx, m = g.idKey, j, o = 0, l = function(f) {
        d.isNotNull(this.parent) ? (j = this.parent.data, d.isNotNull(j) && !g.has(j) && (a.push(j), b.remove(j), k[j[m]] = -1)) : f.stop = !0
      };
      g._reidx();
      for(f.reattach();o < i;o++) {
        f.getNode(a[o]).traverse({up:!0, fn:l})
      }
      f.reattach(a);
      f.sortList(a);
      this.grid.event.trigger("onCollapserTreeChange")
    }else {
      f.reattach(a), this.grid.event.trigger("onCollapserTreeChange"), this._filter(a, b)
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
      var a = this._tree, f = a.getNode(f.getDatarow())._collapsed, g = this.grid.dataMgr.datalist, i, k;
      for(k in b) {
        b.hasOwnProperty(k) && k !== "length" && (i = a.getNode(g[k]), f ? this.expand(i) : this.collapse(i))
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
    this.grid.event.trigger("onCollapserTreeChange")
  };
  a._onRenderHeader = function(a) {
    a.push("<div id='" + this.mid + "h' onmousedown='JGM.m.Collapser." + this.mid + ".toggleMaster();' class='" + this._options.classCollapser + " " + this._options.classMasterCollapser);
    this._tree.root._collapsed ? a.push(" " + this._options.classCollapsed) : a.push(" " + this._options.classExpanded);
    a.push("'></div>")
  };
  a._onRenderCell = function(a, b, f, g, i) {
    a = this._tree.getNode(f);
    if(d.isNull(a)) {
      return null
    }
    f = this.grid.dataMgr.getId(f);
    b = this._options;
    i.push("<div class='" + b.classIndent + "' style='width:" + b.indentSize * a.getLevel() + "px;'></div><div ");
    a.isLeaf() ? i.push("class='" + b.classCollapser) : (i.push('onmousedown="JGM.m.Collapser.' + this.mid + ".toggleById('" + f + "');\" class='" + b.classCollapser), a._collapsed ? i.push(" " + b.classCollapsed) : i.push(" " + b.classExpanded));
    i.push("'></div>")
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
        for(var d = f.root.children, g = d.length, k = 0;k < g;k++) {
          if(d[k]._collapsed) {
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
    var f = this._tree.getNode(a), q = this.checkMgr, i = [], k;
    b ? (f.traverseChildren({fn:function(a) {
      q.isChecked(this.data) ? a.propagate = !1 : (q._add(this.data), d.isNotNull(k = q.getCheckbox(this.data)) && i.push(k))
    }}), f.traverseParent({up:!0, fn:function(a) {
      d.isNull(this.data) || q.isChecked(this.data) ? a.stop = !0 : (q._add(this.data), d.isNotNull(k = q.getCheckbox(this.data)) && i.push(k))
    }}), g.CheckManager._check($(i)), q._updateMaster()) : (f.traverseChildren({fn:function(a) {
      q.isChecked(this.data) ? (q._remove(this.data), d.isNotNull(k = q.getCheckbox(this.data)) && i.push(k)) : a.propagate = !1
    }}), f.traverseParent({up:!0, fn:function(a) {
      if(d.isNull(this.data) || !q.isChecked(this.data)) {
        a.stop = !0
      }else {
        for(var b = 0, c = this.children, e = c.length;b < e;b++) {
          if(q.isChecked(c[b].data)) {
            a.stop = !0;
            return
          }
        }
        q._remove(this.data);
        d.isNotNull(k = q.getCheckbox(this.data)) && i.push(k)
      }
    }}), g.CheckManager._uncheck($(i)))
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
console && console.log && console.log('reading javascript source "ColumnGroup.js"...');
jx.grid.ColumnGroup = {};
(function() {
  function f(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    this.grid.colGroup = this;
    this._options = g._extend({key:void 0, padColKeys:[], sumColKeys:[], prefix:"�հ�: ", Collapser:{indentSize:0}}, a.options);
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
      var b = this.mid, e = this.grid.dataMgr._consts._notReal, d = 0, f, g = this._options.sumColKeys, k = this._options.prefix, m = g.length;
      for(f = function(a, d, f, g, h) {
        f[e] === b && h.push(k)
      };d < m;d++) {
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
    for(var b = a.length, e = this._options.key, f = this._options.padColKeys, g = this.grid.dataMgr, i = g._consts._notReal, k = g.idKey, m = this.collapser, j = m._tree._options.nodeKey, o = m._tree._options.parentKey, l = [], p = 0;p < b;p++) {
      this._addData(a[p], e, k, i, j, o, f, l)
    }
    l.length !== 0 && (g.all.pushList(l), g.makeCompositeKeyList(l, !0), g.addListToIdMap(l), d.isNotNull(m) && m._onAddDatalist(l));
    return l
  };
  b._addData = function(a, b, e, d, f, g, k, m) {
    var j = a[b], o = this._parentMap;
    o.hasOwnProperty(j) || (b = this._makeParent(a, b, e, j, d, f, k), m.push(b), o[j] = b);
    a[f] = a[e];
    a[g] = this.mid + j
  };
  b._makeParent = function(a, b, e, d, f, g, k) {
    var m = {}, j = 0, o = k.length;
    m[f] = this.mid;
    m[g] = this.mid + d;
    m[b] = d;
    for(m[e] = (this.grid.colDefMgr.getByKey(b).name || b) + ": " + d;j < o;j++) {
      m[k[j]] = a[k[j]]
    }
    return m
  };
  b._isParent = function(a) {
    return a[this.grid.dataMgr._consts._notReal] === this.mid
  };
  b._removeAll = function() {
    this._parentMap = {}
  };
  b._onAddDatarow = function(a) {
    var b = [], e = this._options, d = this.grid.dataMgr, f = this.collapser, g = f._tree._options;
    this._addData(a, e.key, d.idKey, d._consts._notReal, g.nodeKey, g.parentKey, e.padColKeys, b);
    b.length !== 0 && (a = b[0], d.all.push(a), d.makeCompositeKey(a, !0), d.addToIdMap(a), f._onAddDatarow(a))
  };
  b._onUpdateDatarow = function(a, b, e) {
    if(b.hasOwnProperty(this._options.key)) {
      var d = this._options.key, b = b[d], e = e[d], f = this.mid, d = this.collapser, g = d._tree, k = g._options.parentKey, m = {}, j = {}, o = this._parentMap;
      o.hasOwnProperty(b) || this._onAddDatarow(a);
      m[k] = f + b;
      j[k] = f + e;
      d._onUpdateDatarow(a, m, j);
      a = g.getNode(o[e]);
      a.children.length === 0 && (this.grid.dataMgr.all.remove(a.data), delete o[e], d._onRemoveDatarow(a.data))
    }
  };
  b._onUpdateDatalist = function(a, b, e) {
    var d = this._options.key, f = this.mid, g = this.collapser, k = g._tree, m = k._options.parentKey, j, o = {};
    j = {};
    for(var l = [], p = [], n = [], r = 0, s = a.length;r < s;r++) {
      j = b[r], j.hasOwnProperty(d) && (o = {}, o[m] = f + j[d], l.push(o), j = {}, j[m] = f + e[r][d], p.push(j), n.push(a[r]))
    }
    if(n.length !== 0) {
      a = this._parentMap;
      b = [];
      this._processData(n);
      g._onUpdateDatalist(n, l, p);
      r = 0;
      for(s = p.length;r < s;r++) {
        l = p[r][m], a.hasOwnProperty(l) && (n = k.getNode(a[l]), n.children.length === 0 && (delete a[l], b.push(n.data)))
      }
      b.length !== 0 && (g._onRemoveDatalist(b), this.grid.dataMgr.all.removeList(b))
    }
  };
  b._onRemoveDatarow = function(a) {
    this._isParent(a) ? delete this._parentMap[a[this._options.key]] : (a = this.collapser._tree.getNode(a).parent, a.children.length === 1 && this.grid.dataMgr.remove(a.data))
  };
  b._onRemoveDatalist = function(a) {
    for(var b = 0, e = a.length;b < e;b++) {
      this._onRemoveDatarow(a[b])
    }
  };
  b._onCollapserTreeChange = function() {
    for(var a = {}, b = this._options.sumColKeys, e = b.length, d = 0, f = this.grid.dataMgr._consts._notReal, g = this.mid, k, m, j;d < e;d++) {
      a[b[d]] = 0
    }
    this.collapser._tree.root.traverseChildren({post:!0, fn:function() {
      k = this.data;
      d = 0;
      if(k[f] === g) {
        for(;d < e;d++) {
          m = b[d], k[m] = a[m], a[m] = 0
        }
      }else {
        if(!k.hasOwnProperty(f)) {
          for(;d < e;d++) {
            if(typeof(j = k[b[d]]) === "string") {
              j = j.toFloat()
            }
            a[b[d]] += isNaN(j) ? 0 : j
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
    for(var a = [], b = this.grid.colDefMgr.getAll(), e = b.length, f, g = this._options, i = g.classCol, k = g.classColName, m = this, j = this._creator, o = this._inputMap, l = 0, p = function(a) {
      a.which === d.keyMapKeydown.enter && m._addData()
    };l < e;l++) {
      f = b[l], f.inputOnCreate === !0 && a.push("<div key='" + f.key + "' class='" + i + "'><div class='" + k + "'>" + f.name + "</div><input type='text' value='" + d.ifNull(f.defaultValue, "") + "' style='width:" + f.width + "px'/></div>")
    }
    j[0].innerHTML = a.join("") + "<button type='button' onclick='JGM.m.DataCreator." + this.mid + "._addData()'>���</button><button type='button' onclick='JGM.m.DataCreator." + this.mid + "._reset()'>�ʱ�ȭ</button>";
    for(l = 0;l < e;l++) {
      f = b[l], f.inputOnCreate === !0 && (o[f.key] = j.find("div[key='" + f.key + "'] input").keyup(p))
    }
    d.isNotNull(this.grid.menubar) && (this.grid.menubar.addIcon(g.classCreatorIcon, "������ �ο츦 �߰��մϴ�.", g.creatorIconWidth, g.creatorIconHeight, function() {
      j.toggle("fast")
    }), j.hide())
  };
  b._addData = function() {
    var a, b = this._inputMap, d = this.grid.colDefMgr, f = {}, g = d.getAll(), i = g.length, k = 0;
    for(a in b) {
      b.hasOwnProperty(a) && d.getByKey(a)
    }
    for(;k < i;k++) {
      d = g[k], a = d.key, b.hasOwnProperty(a) ? f[a] = b[a][0].value : d.defaultValue !== void 0 && (f[a] = d.defaultValue)
    }
    this.grid.event.trigger("onAfterDataCreate", [f]);
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
  var g = goog.getObjectByName("jx.grid"), d = goog.getObjectByName("jx.util");
  goog.getObjectByName("jx.grid.BaseModule");
  goog.exportSymbol("jx.grid.SearchManager", f);
  var b = f.prototype;
  b._onCreateCss = function() {
    var a = "#" + this.grid.mid + " .", b = this._options, c = b.borderThickness + "px " + b.border, d = "border-radius:" + b.tagsBorderRadius + "px;-moz-border-radius:" + b.tagsBorderRadius + "px", e = b.advButtonBorderThickness + "px " + b.advButtonBorder, f = b.advButtonBorderThickness + "px " + b.advButtonBorderHover, h = b.advButtonBorderThickness + "px " + b.advButtonBorderActive, i = b.advButtonBorderThickness + "px " + b.advButtonBorderOpened, j = b.tagsHeight - 2 * b.tagsPadding, k = j - 
    2 * b.advButtonBorderThickness, l = j - 2 * b.tagBorderThickness, m = a + b.classMask, n = a + b.classSearchbar, p = a + b.classAdvButton, q = a + b.classRemoveTag, o = [];
    o.push(m + "{" + g._CONST._cssUnselectable + "overflow:hidden;width:100%;background:" + b.background + "}");
    o.push(m + " button{margin:0;padding:0 3px}");
    o.push(m + " input{border:" + b.inputBorder + ";padding:" + b.inputPadding + "}");
    o.push(n + "{text-align:" + b.searchbarAlign + ";border-bottom:" + c + "}");
    o.push(n + " input{width:" + b.searchbarWidth + ";margin:" + b.searchbarMargin + "px 0;height:" + b.searchbarHeight + "px;" + d + "}");
    o.push(a + b.classTagbar + "{cursor:default;height:" + (b.tagsHeight - b.tagsPadding) + "px;padding:" + b.tagsPadding + "px 0 0 " + b.tagsPadding + "px;border-bottom:" + c + "}");
    o.push(p + "{float:left;margin-right:" + b.tagsPadding + "px;background:" + b.advButtonBg + ";border:" + e + ";padding:0 " + b.advButtonPadding + "px;" + d + "}");
    o.push(p + ":hover{background:" + b.advButtonBgHover + ";border:" + f + "}");
    o.push(p + ".opened{background:" + b.advButtonBgOpened + ";border:" + i + "}");
    o.push(p + ":active{background:" + b.advButtonBgActive + ";border:" + h + "}");
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
    f = this._tag = $("<div class='" + a.classTagbar + "'>" + (e ? "<div class='" + a.classAdvButton + "'><div class='" + a.classAdvButtonName + "'>�߰� �ɼ�</div><div class='" + a.classAdvButtonIcon + "'></div></div>" : "") + "<button type='button' class='" + a.classClearTags + "' onclick='JGM.m.SearchManager." + this.mid + "._removeAllOptions()'>��� ���� ����</button></div>").appendTo(c);
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
    d.isNotNull(this.grid.menubar) && (this.grid.menubar.addIcon(b.classSearchIcon, "������ �˻��� �մϴ�.", b.searchIconWidth, b.searchIconHeight, function() {
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
        f = d[h], n = f.name, n === "parser" ? k.parser = f.fn : n === "validator" ? k.validator = f.fn : (m = f.tag, k[m] = {option:f}, l[m] = {}, e.push("<tr title='" + f.comment(c, "�Է°�") + "'><td><div class='" + j + "'>" + c + " " + m + "</td><td><input id='" + a + n + "' key='" + a + "' tag='" + m + "' type='text'><button type='button' onclick=\"JGM.m.SearchManager." + i + "._registerOption('" + a + "','" + b + "','" + m + "',this.previousSibling.value)\">���</button></div></td></tr>"))
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
    this._globalMap[a[0]] = {tag:$("<div class='" + b.classTag + "' title='" + a.join(", ") + " �� �����ϴ�'><div class='" + b.classTagName + "'>" + a.join(" ") + "</div><div class='" + b.classRemoveTag + "' title='���� ����' onclick=\"JGM.m.SearchManager." + this.mid + "._removeGlobal('" + a[0] + "')\"></div></div>").appendTo(this._tag), list:a};
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
    return this._tagMap[a][b.tag][c] = {tag:$("<div class='" + e.classTag + "' title='" + b.comment(d, c) + "'><div class='" + e.classTagName + "'>@" + d + " " + b.tag + " " + c + "</div><div class='" + e.classRemoveTag + "' title='���� ����' onclick=\"JGM.m.SearchManager." + this.mid + "._removeOption('" + a + "','" + b.tag + "','" + c + "')\"></div></div>").appendTo(this._tag), option:b, fn:b.fn(c)}
  };
  var a = f.CONST = {lt:0, lte:1, eq:2, neq:3, gt:4, gte:5, and:6, or:7, T:8, F:9}, b = a.lt, c = a.gt, e = a.eq, h = a.neq, q = a.and, i = a.or, k = a.T, a = a.F, m = f._comparator = {}, j = m[b] = function(a, b) {
    return a <= b
  }, o = m[c] = function(a, b) {
    return a >= b
  }, l = m[e] = function(a, b) {
    return a === b
  }, k = m[k] = function() {
    return!0
  }, p = f._disableMap = {}, n = p[b] = {}, r = p[c] = {}, s = p[e] = {}, p = p[h] = {};
  m[a] = function() {
    return!1
  };
  n[b] = {};
  n[b][q] = k;
  n[b][i] = k;
  n[c] = {};
  n[c][q] = j;
  n[c][i] = o;
  n[e] = {};
  n[e][q] = k;
  n[e][i] = o;
  n[h] = {};
  n[h][q] = j;
  n[h][i] = k;
  r[b] = {};
  r[b][q] = o;
  r[b][i] = j;
  r[c] = {};
  r[c][q] = k;
  r[c][i] = k;
  r[e] = {};
  r[e][q] = k;
  r[e][i] = j;
  r[h] = {};
  r[h][q] = o;
  r[h][i] = k;
  s[b] = {};
  s[b][q] = k;
  s[b][i] = j;
  s[c] = {};
  s[c][q] = k;
  s[c][i] = o;
  s[e] = {};
  s[e][q] = k;
  s[e][i] = l;
  s[h] = {};
  s[h][q] = k;
  s[h][i] = k;
  p[b] = {};
  p[b][q] = o;
  p[b][i] = k;
  p[c] = {};
  p[c][q] = j;
  p[c][i] = k;
  p[e] = {};
  p[e][q] = k;
  p[e][i] = k;
  p[h] = {};
  p[h][q] = l;
  p[h][i] = k;
  f._checkDisable = function(a, b, c, d, e) {
    try {
      return this._disableMap[a][b][c](d, e)
    }catch(f) {
      return!1
    }
  };
  f._numberFilter = [{name:"gt", tag:">", type:c, comment:function(a, b) {
    return a + " ��(��) " + b + "���� ū"
  }, fn:function(a) {
    d.isString(a) && (a = a.toFloat());
    return function(b) {
      return b > a
    }
  }}, {name:"gte", tag:">=", type:c, comment:function(a, b) {
    return a + " ��(��) " + b + "���� ũ�ų� ����"
  }, fn:function(a) {
    d.isString(a) && (a = a.toFloat());
    return function(b) {
      return b >= a
    }
  }}, {name:"lt", tag:"<", type:b, comment:function(a, b) {
    return a + " ��(��) " + b + "���� ����"
  }, fn:function(a) {
    d.isString(a) && (a = a.toFloat());
    return function(b) {
      return b < a
    }
  }}, {name:"lte", tag:"<=", type:b, comment:function(a, b) {
    return a + " ��(��) " + b + "���� �۰ų� ����"
  }, fn:function(a) {
    d.isString(a) && (a = a.toFloat());
    return function(b) {
      return b <= a
    }
  }}, {name:"eq", tag:"=", type:e, comment:function(a, b) {
    return a + " ��(��) " + b + "��"
  }, fn:function(a) {
    d.isString(a) && (a = a.toFloat());
    return function(b) {
      return b === a
    }
  }}, {name:"neq", tag:"!=", type:h, comment:function(a, b) {
    return a + " ��(��) " + b + "��(��) �ƴ�"
  }, fn:function(a) {
    d.isString(a) && (a = a.toFloat());
    return function(b) {
      return b !== a
    }
  }}, {name:"contains", tag:"*=", comment:function(a, b) {
    return a + " ��(��) ���� " + b + "�� �����ϴ�"
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
    return a + " ��(��) " + b + "���� �������� ������"
  }, fn:function(a) {
    a = $.trim(a).toLowerCase();
    return function(b) {
      return b.toLowerCase() <= a
    }
  }}, {name:"from", tag:">=", type:c, comment:function(a, b) {
    return a + " ��(��) " + b + "���� �������� ������"
  }, fn:function(a) {
    a = $.trim(a).toLowerCase();
    return function(b) {
      return b.toLowerCase() >= a
    }
  }}, {name:"equals", tag:"=", type:e, comment:function(a, b) {
    return a + " ��(��) " + b + "��(��) ����"
  }, fn:function(a) {
    a = $.trim(a).toLowerCase();
    return function(b) {
      return b.toLowerCase() === a
    }
  }}, {name:"notEquals", tag:"!=", type:h, comment:function(a, b) {
    return a + " ��(��) " + b + "��(��) �ƴ�"
  }, fn:function(a) {
    a = $.trim(a).toLowerCase();
    return function(b) {
      return b.toLowerCase() !== a
    }
  }}, {name:"startsWith", tag:"^=", comment:function(a, b) {
    return a + " ��(��) " + b + "(��)�� �����ϴ�"
  }, fn:function(a) {
    var a = $.trim(a).toLowerCase(), b = a.length;
    return function(c) {
      return c.substr(0, b).toLowerCase() === a
    }
  }}, {name:"endsWith", tag:"$=", comment:function(a, b) {
    return a + " ��(��) " + b + "(��)�� ������"
  }, fn:function(a) {
    var a = $.trim(a).toLowerCase(), b = a.length;
    return function(c) {
      return c.substr(c.length - b, c.length).toLowerCase() === a
    }
  }}, {name:"contains", tag:"*=", comment:function(a, b) {
    return a + " ��(��) " + b + "��(��) �����ϴ�"
  }, fn:function(a) {
    a = $.trim(a).toLowerCase();
    return function(b) {
      return b.toLowerCase().indexOf(a) !== -1
    }
  }}, {name:"containsAny", tag:"|=", comment:function(a, b) {
    return a + " ��(��) " + b + "�� �� �ϳ� �̻��� �����ϴ�"
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
    return a + " ��(��) " + b + "�� ��θ� �����ϴ�"
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