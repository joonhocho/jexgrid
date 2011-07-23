(function(){(function() {
  var d = Number.prototype, b = String.prototype, a = Array.prototype;
  if(!d.toFixedFloat) {
    d.toFixedFloat = function(a) {
      return parseFloat(this.toFixed(a))
    }
  }
  if(!b.toInt) {
    b.toInt = function() {
      var a;
      if((a = this.replace(/[^\d\.\-]/g, "")).length === 0) {
        return NaN
      }
      for(var c, g = 0, b = 0, f = a.length, d = 0, k = !1;d < f;d++) {
        if(c = a.charAt(d), c === ".") {
          if(++g === 2) {
            k = !0;
            break
          }
        }else {
          if(c === "-" && ++b === 2) {
            k = !0;
            break
          }
        }
      }
      return k === !0 && (a = a.replace(/[\.\-]/g, "")).length === 0 ? NaN : /^-*0*\./.test(a) || (a = a.replace(/^-0+/, "-")).length === 0 || (a = a.replace(/^0+/, "")).length === 0 ? 0 : parseInt(a, 10)
    }
  }
  if(!b.toFloat) {
    b.toFloat = function() {
      var a;
      if((a = this.replace(/[^-\d\.]/g, "")).length === 0) {
        return NaN
      }
      for(var c = 0, g = a.length, b, f = 0, d = 0;c < g;c++) {
        if(b = a.charAt(c), b === ".") {
          if(f !== 0) {
            return NaN
          }else {
            f++
          }
        }else {
          if(b === "-") {
            if(d !== 0) {
              return NaN
            }else {
              d++
            }
          }
        }
      }
      return parseFloat(a)
    }
  }
  if(!a.remove) {
    a.remove = function(a) {
      if(this.length === 0) {
        return-1
      }
      a = this.indexOf(a);
      a !== -1 && this.splice(a, 1);
      return a
    }
  }
  if(!a.removeAll) {
    a.removeAll = function(a) {
      if(this.length === 0) {
        return this
      }
      for(var c = this.length;(c = this.lastIndexOf(a, c - 1)) !== -1;) {
        if(this.splice(c, 1), c === 0) {
          break
        }
      }
      return this
    }
  }
  if(!a.removeList) {
    a.removeList = function(a) {
      if(this.length === 0 || a.length === 0) {
        return this
      }
      for(var c = a.length, g = 0, b;g < c;g++) {
        (b = this.indexOf(a[g])) !== -1 && this.splice(b, 1)
      }
      return this
    }
  }
  if(!a.removeAt) {
    a.removeAt = function(a) {
      if(this.length !== 0 && (a < 0 && (a = this.length + a), a < 0 && (a = 0), this.hasOwnProperty(a) && a < this.length)) {
        return this.splice(a, 1)[0]
      }
    }
  }
  if(!a.addAt) {
    a.addAt = function(a, c) {
      this.splice(a, 0, c);
      return c
    }
  }
  if(!a.pushList) {
    a.pushList = function(e) {
      return e.length === 0 ? this.length : a.push.apply(this, e)
    }
  }
  if(!a.pushListAt) {
    a.pushListAt = function(e, c) {
      if(c.length === 0) {
        return this.length
      }
      var g = [e, 0];
      a.push.apply(g, c);
      a.splice.apply(this, g);
      return this.length
    }
  }
})();
(function() {
  var d = Array.prototype;
  if(!d.indexOf) {
    d.indexOf = function(b) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var a = Object(this), e = a.length >>> 0;
      if(e === 0) {
        return-1
      }
      var c = 0;
      arguments.length > 0 && (c = Number(arguments[1]), c !== c ? c = 0 : c !== 0 && c !== 1 / 0 && c !== -(1 / 0) && (c = (c > 0 || -1) * Math.floor(Math.abs(c))));
      if(c >= e) {
        return-1
      }
      for(c = c >= 0 ? c : Math.max(e - Math.abs(c), 0);c < e;c++) {
        if(c in a && a[c] === b) {
          return c
        }
      }
      return-1
    }
  }
  if(!d.lastIndexOf) {
    d.lastIndexOf = function(b) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var a = Object(this), e = a.length >>> 0;
      if(e === 0) {
        return-1
      }
      var c = e;
      arguments.length > 1 && (c = Number(arguments[1]), c !== c ? c = 0 : c !== 0 && c !== 1 / 0 && c !== -(1 / 0) && (c = (c > 0 || -1) * Math.floor(Math.abs(c))));
      for(e = c >= 0 ? Math.min(c, e - 1) : e - Math.abs(c);e >= 0;e--) {
        if(e in a && a[e] === b) {
          return e
        }
      }
      return-1
    }
  }
  if(!d.filter) {
    d.filter = function(b, a) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var e = Object(this), c = e.length >>> 0;
      if(typeof b !== "function") {
        throw new TypeError;
      }
      for(var g = [], i = 0;i < c;i++) {
        if(i in e) {
          var f = e[i];
          b.call(a, f, i, e) && g.push(f)
        }
      }
      return g
    }
  }
  if(!d.forEach) {
    d.forEach = function(b, a) {
      var e, c = Object(this), g = c.length >>> 0, i = 0;
      if(!b || !b.call) {
        throw new TypeError;
      }
      for(a && (e = a);i < g;) {
        var f = String(i);
        c.hasOwnProperty(f) && (f = c[f], b.call(e, f, i, c));
        i++
      }
    }
  }
  if(!d.every) {
    d.every = function(b, a) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var e = Object(this), c = e.length >>> 0;
      if(typeof b !== "function") {
        throw new TypeError;
      }
      for(var g = 0;g < c;g++) {
        if(g in e && !b.call(a, e[g], g, e)) {
          return!1
        }
      }
      return!0
    }
  }
  if(!d.map) {
    d.map = function(b, a) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var e = Object(this), c = e.length >>> 0;
      if(typeof b !== "function") {
        throw new TypeError;
      }
      for(var g = Array(c), i = 0;i < c;i++) {
        i in e && (g[i] = b.call(a, e[i], i, e))
      }
      return g
    }
  }
  if(!d.some) {
    d.some = function(b, a) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var e = Object(this), c = e.length >>> 0;
      if(typeof b !== "function") {
        throw new TypeError;
      }
      for(var g = 0;g < c;g++) {
        if(g in e && b.call(a, e[g], g, e)) {
          return!0
        }
      }
      return!1
    }
  }
  if(!d.reduce) {
    d.reduce = function(b) {
      var a, e = this.length, c;
      if(typeof b !== "function") {
        throw new TypeError("First argument is not callable");
      }
      if((e == 0 || e === null) && arguments.length <= 1) {
        throw new TypeError("Array length is 0 and no second argument");
      }
      arguments.length <= 1 ? (c = this[0], a = 1) : c = arguments[1];
      for(a = a || 0;a < e;++a) {
        a in this && (c = b.call(void 0, c, this[a], a, this))
      }
      return c
    }
  }
  if(!d.reduceRight) {
    d.reduceRight = function(b) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var a = Object(this), e = a.length >>> 0;
      if(typeof b !== "function") {
        throw new TypeError;
      }
      if(e === 0 && arguments.length === 1) {
        throw new TypeError;
      }
      e -= 1;
      var c;
      if(arguments.length >= 2) {
        c = arguments[1]
      }else {
        do {
          if(e in this) {
            c = this[e--];
            break
          }
          if(--e < 0) {
            throw new TypeError;
          }
        }while(1)
      }
      for(;e >= 0;) {
        e in a && (c = b.call(void 0, c, a[e], e, a)), e--
      }
      return c
    }
  }
})();
var COMPILED = !0, goog = goog || {};
goog.global = window;
window.goog = goog;
goog.DEBUG = !0;
goog.LOCALE = "en";
goog.provide = function(d) {
  if(!COMPILED) {
    if(goog.isProvided_(d)) {
      throw Error('Namespace "' + d + '" already declared.');
    }
    delete goog.implicitNamespaces_[d];
    for(var b = d;b = b.substring(0, b.lastIndexOf("."));) {
      if(goog.getObjectByName(b)) {
        break
      }
      goog.implicitNamespaces_[b] = !0
    }
  }
  goog.exportSymbol_(d)
};
goog.setTestOnly = function(d) {
  if(COMPILED && !goog.DEBUG) {
    throw d = d || "", Error("Importing test-only code into non-debug environment" + d ? ": " + d : ".");
  }
};
if(!COMPILED) {
  goog.isProvided_ = function(d) {
    return!goog.implicitNamespaces_[d] && !!goog.getObjectByName(d)
  }, goog.implicitNamespaces_ = {}
}
goog.exportSymbol_ = function(d, b, a) {
  d = d.split(".");
  a = a || goog.global;
  !(d[0] in a) && a.execScript && a.execScript("var " + d[0]);
  for(var e;d.length && (e = d.shift());) {
    !d.length && goog.isDef(b) ? a[e] = b : a = a[e] ? a[e] : a[e] = {}
  }
};
goog.getObjectByName = function(d, b) {
  for(var a = d.split("."), e = b || goog.global, c;c = a.shift();) {
    if(goog.isDefAndNotNull(e[c])) {
      e = e[c]
    }else {
      return null
    }
  }
  return e
};
goog.globalize = function(d, b) {
  var a = b || goog.global, e;
  for(e in d) {
    a[e] = d[e]
  }
};
goog.addDependency = function(d, b, a) {
  if(!COMPILED) {
    for(var e, d = d.replace(/\\/g, "/"), c = goog.dependencies_, g = 0;e = b[g];g++) {
      c.nameToPath[e] = d, d in c.pathToNames || (c.pathToNames[d] = {}), c.pathToNames[d][e] = !0
    }
    for(e = 0;b = a[e];e++) {
      d in c.requires || (c.requires[d] = {}), c.requires[d][b] = !0
    }
  }
};
goog.ENABLE_DEBUG_LOADER = !0;
goog.require = function(d) {
  if(!COMPILED && !goog.isProvided_(d)) {
    if(goog.ENABLE_DEBUG_LOADER) {
      var b = goog.getPathFromDeps_(d);
      if(b) {
        goog.included_[b] = !0;
        goog.writeScripts_();
        return
      }
    }
    d = "goog.require could not find: " + d;
    goog.global.console && goog.global.console.error(d);
    throw Error(d);
  }
};
goog.basePath = "";
goog.nullFunction = function() {
};
goog.identityFunction = function(d) {
  return d
};
goog.abstractMethod = function() {
  throw Error("unimplemented abstract method");
};
goog.addSingletonGetter = function(d) {
  d.getInstance = function() {
    return d.instance_ || (d.instance_ = new d)
  }
};
if(!COMPILED && goog.ENABLE_DEBUG_LOADER) {
  goog.included_ = {}, goog.dependencies_ = {pathToNames:{}, nameToPath:{}, requires:{}, visited:{}, written:{}}, goog.inHtmlDocument_ = function() {
    var d = goog.global.document;
    return typeof d != "undefined" && "write" in d
  }, goog.findBasePath_ = function() {
    if(goog.global.CLOSURE_BASE_PATH) {
      goog.basePath = goog.global.CLOSURE_BASE_PATH
    }else {
      if(goog.inHtmlDocument_()) {
        for(var d = goog.global.document.getElementsByTagName("script"), b = d.length - 1;b >= 0;--b) {
          var a = d[b].src, e = a.lastIndexOf("?"), e = e == -1 ? a.length : e;
          if(a.substr(e - 7, 7) == "base.js") {
            goog.basePath = a.substr(0, e - 7);
            break
          }
        }
      }
    }
  }, goog.importScript_ = function(d) {
    var b = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_;
    !goog.dependencies_.written[d] && b(d) && (goog.dependencies_.written[d] = !0)
  }, goog.writeScriptTag_ = function(d) {
    return goog.inHtmlDocument_() ? (goog.global.document.write('<script type="text/javascript" src="' + d + '"><\/script>'), !0) : !1
  }, goog.writeScripts_ = function() {
    function d(c) {
      if(!(c in e.written)) {
        if(!(c in e.visited) && (e.visited[c] = !0, c in e.requires)) {
          for(var i in e.requires[c]) {
            if(!goog.isProvided_(i)) {
              if(i in e.nameToPath) {
                d(e.nameToPath[i])
              }else {
                throw Error("Undefined nameToPath for " + i);
              }
            }
          }
        }
        c in a || (a[c] = !0, b.push(c))
      }
    }
    var b = [], a = {}, e = goog.dependencies_, c;
    for(c in goog.included_) {
      e.written[c] || d(c)
    }
    for(c = 0;c < b.length;c++) {
      if(b[c]) {
        goog.importScript_(goog.basePath + b[c])
      }else {
        throw Error("Undefined script input");
      }
    }
  }, goog.getPathFromDeps_ = function(d) {
    return d in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[d] : null
  }, goog.findBasePath_()
}
goog.typeOf = function(d) {
  var b = typeof d;
  if(b == "object") {
    if(d) {
      if(d instanceof Array) {
        return"array"
      }else {
        if(d instanceof Object) {
          return b
        }
      }
      var a = Object.prototype.toString.call(d);
      if(a == "[object Window]") {
        return"object"
      }
      if(a == "[object Array]" || typeof d.length == "number" && typeof d.splice != "undefined" && typeof d.propertyIsEnumerable != "undefined" && !d.propertyIsEnumerable("splice")) {
        return"array"
      }
      if(a == "[object Function]" || typeof d.call != "undefined" && typeof d.propertyIsEnumerable != "undefined" && !d.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if(b == "function" && typeof d.call == "undefined") {
      return"object"
    }
  }
  return b
};
goog.propertyIsEnumerableCustom_ = function(d, b) {
  if(b in d) {
    for(var a in d) {
      if(a == b && Object.prototype.hasOwnProperty.call(d, b)) {
        return!0
      }
    }
  }
  return!1
};
goog.propertyIsEnumerable_ = function(d, b) {
  return d instanceof Object ? Object.prototype.propertyIsEnumerable.call(d, b) : goog.propertyIsEnumerableCustom_(d, b)
};
goog.isDef = function(d) {
  return d !== void 0
};
goog.isNull = function(d) {
  return d === null
};
goog.isDefAndNotNull = function(d) {
  return d != null
};
goog.isArray = function(d) {
  return goog.typeOf(d) == "array"
};
goog.isArrayLike = function(d) {
  var b = goog.typeOf(d);
  return b == "array" || b == "object" && typeof d.length == "number"
};
goog.isDateLike = function(d) {
  return goog.isObject(d) && typeof d.getFullYear == "function"
};
goog.isString = function(d) {
  return typeof d == "string"
};
goog.isBoolean = function(d) {
  return typeof d == "boolean"
};
goog.isNumber = function(d) {
  return typeof d == "number"
};
goog.isFunction = function(d) {
  return goog.typeOf(d) == "function"
};
goog.isObject = function(d) {
  d = goog.typeOf(d);
  return d == "object" || d == "array" || d == "function"
};
goog.getUid = function(d) {
  return d[goog.UID_PROPERTY_] || (d[goog.UID_PROPERTY_] = ++goog.uidCounter_)
};
goog.removeUid = function(d) {
  "removeAttribute" in d && d.removeAttribute(goog.UID_PROPERTY_);
  try {
    delete d[goog.UID_PROPERTY_]
  }catch(b) {
  }
};
goog.UID_PROPERTY_ = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36);
goog.uidCounter_ = 0;
goog.getHashCode = goog.getUid;
goog.removeHashCode = goog.removeUid;
goog.cloneObject = function(d) {
  var b = goog.typeOf(d);
  if(b == "object" || b == "array") {
    if(d.clone) {
      return d.clone()
    }
    var b = b == "array" ? [] : {}, a;
    for(a in d) {
      b[a] = goog.cloneObject(d[a])
    }
    return b
  }
  return d
};
goog.bindNative_ = function(d, b, a) {
  return d.call.apply(d.bind, arguments)
};
goog.bindJs_ = function(d, b, a) {
  if(!d) {
    throw Error();
  }
  if(arguments.length > 2) {
    var e = Array.prototype.slice.call(arguments, 2);
    return function() {
      var a = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(a, e);
      return d.apply(b, a)
    }
  }else {
    return function() {
      return d.apply(b, arguments)
    }
  }
};
goog.bind = function(d, b, a) {
  goog.bind = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? goog.bindNative_ : goog.bindJs_;
  return goog.bind.apply(null, arguments)
};
goog.partial = function(d, b) {
  var a = Array.prototype.slice.call(arguments, 1);
  return function() {
    var e = Array.prototype.slice.call(arguments);
    e.unshift.apply(e, a);
    return d.apply(this, e)
  }
};
goog.mixin = function(d, b) {
  for(var a in b) {
    d[a] = b[a]
  }
};
goog.now = Date.now || function() {
  return+new Date
};
goog.globalEval = function(d) {
  if(goog.global.execScript) {
    goog.global.execScript(d, "JavaScript")
  }else {
    if(goog.global.eval) {
      if(goog.evalWorksForGlobals_ == null) {
        goog.global.eval("var _et_ = 1;"), typeof goog.global._et_ != "undefined" ? (delete goog.global._et_, goog.evalWorksForGlobals_ = !0) : goog.evalWorksForGlobals_ = !1
      }
      if(goog.evalWorksForGlobals_) {
        goog.global.eval(d)
      }else {
        var b = goog.global.document, a = b.createElement("script");
        a.type = "text/javascript";
        a.defer = !1;
        a.appendChild(b.createTextNode(d));
        b.body.appendChild(a);
        b.body.removeChild(a)
      }
    }else {
      throw Error("goog.globalEval not available");
    }
  }
};
goog.evalWorksForGlobals_ = null;
goog.getCssName = function(d, b) {
  var a = function(a) {
    return goog.cssNameMapping_[a] || a
  }, e;
  e = goog.cssNameMapping_ ? goog.cssNameMappingStyle_ == "BY_WHOLE" ? a : function(e) {
    for(var e = e.split("-"), g = [], b = 0;b < e.length;b++) {
      g.push(a(e[b]))
    }
    return g.join("-")
  } : function(a) {
    return a
  };
  return b ? d + "-" + e(b) : e(d)
};
goog.setCssNameMapping = function(d, b) {
  goog.cssNameMapping_ = d;
  goog.cssNameMappingStyle_ = b
};
goog.getMsg = function(d, b) {
  var a = b || {}, e;
  for(e in a) {
    var c = ("" + a[e]).replace(/\$/g, "$$$$"), d = d.replace(RegExp("\\{\\$" + e + "\\}", "gi"), c)
  }
  return d
};
goog.exportSymbol = function(d, b, a) {
  goog.exportSymbol_(d, b, a)
};
goog.exportProperty = function(d, b, a) {
  d[b] = a
};
goog.inherits = function(d, b) {
  function a() {
  }
  a.prototype = b.prototype;
  d.superClass_ = b.prototype;
  d.prototype = new a;
  d.prototype.constructor = d
};
goog.base = function(d, b, a) {
  var e = arguments.callee.caller;
  if(e.superClass_) {
    return e.superClass_.constructor.apply(d, Array.prototype.slice.call(arguments, 1))
  }
  for(var c = Array.prototype.slice.call(arguments, 2), g = !1, i = d.constructor;i;i = i.superClass_ && i.superClass_.constructor) {
    if(i.prototype[b] === e) {
      g = !0
    }else {
      if(g) {
        return i.prototype[b].apply(d, c)
      }
    }
  }
  if(d[b] === e) {
    return d.constructor.prototype[b].apply(d, c)
  }else {
    throw Error("goog.base called from a method of one name to a method of a different name");
  }
};
goog.scope = function(d) {
  d.call(goog.global)
};
var jx = {util:{}}, Util = {}, echo = {};
(function() {
  var d = window.console, b = [], a;
  a = d && d.log ? function(a) {
    d.log.apply(d, arguments)
  } : function(a) {
    b.push.apply(b, arguments)
  };
  goog.exportSymbol("jx.util", Util);
  goog.exportSymbol("echo", a);
  Util.isNull = function(a) {
    return a == null
  };
  Util.isNotNull = function(a) {
    return a != null
  };
  Util.isNullAnd = function() {
    for(var a = 0, c = arguments.length;a < c;a++) {
      if(arguments[a] != null) {
        return!1
      }
    }
    return!0
  };
  Util.isNullOr = function() {
    for(var a = 0, c = arguments.length;a < c;a++) {
      if(arguments[a] == null) {
        return!0
      }
    }
    return!1
  };
  Util.isNotNullAnd = function() {
    for(var a = 0, c = arguments.length;a < c;a++) {
      if(arguments[a] == null) {
        return!1
      }
    }
    return!0
  };
  Util.isNotNullOr = function() {
    for(var a = 0, c = arguments.length;a < c;a++) {
      if(arguments[a] != null) {
        return!0
      }
    }
    return!1
  };
  Util.ifNull = function(a, c, g) {
    return a == null ? c : g === void 0 ? a : g
  };
  Util.ifTrue = function(a, c, g) {
    return a === !0 ? c : g === void 0 ? a : g
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
    var c = Array.isArray;
    return a && typeof a == "object" && (c && c(a) || typeof a.length == "number" && a.hasOwnProperty("length") && !a.propertyIsEnumerable("length"))
  };
  Util.split = function(a, c, g, b) {
    if(typeof a !== "string") {
      return[]
    }
    c = c === void 0 ? /\s+/ : c;
    g = g === void 0 ? function(a) {
      return!!a
    } : g;
    b = b === void 0 ? function(a) {
      return $.trim(a)
    } : b;
    a = a.split(c);
    b && (a = a.map(b));
    g && (a = a.filter(g));
    return a
  };
  Util.isEmpty = function(a) {
    if(!a) {
      return!0
    }
    if(typeof a != "object") {
      return!1
    }
    for(var c in a) {
      if(a.hasOwnProperty(c)) {
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
    for(var c in a) {
      if(a.hasOwnProperty(c)) {
        return!1
      }
    }
    return!0
  };
  Util.isNotEmptyObj = function(a) {
    if(a == null || typeof a != "object") {
      return!1
    }
    for(var c in a) {
      if(a.hasOwnProperty(c)) {
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
    for(var c = 0, g = a.length;c < g;c++) {
      if(a.hasOwnProperty(c)) {
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
    for(var c in a) {
      a.hasOwnProperty(c) && delete a[c]
    }
    return a
  };
  Util.deleteUndefined = function(a) {
    if(!a || typeof a != "object") {
      return a
    }
    var c;
    if(Util.isArray(a)) {
      for(c = a.length - 1;c > -1;c--) {
        a.hasOwnProperty(c) && a[c] === void 0 && a.splice(c, 1)
      }
      return a
    }
    for(c in a) {
      a.hasOwnProperty(c) && a[c] === void 0 && delete a[c]
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
      for(var c = [], g = 0, b = a.length;g < b;g++) {
        g in a && (c[g] = Util.deepClone(a[g]))
      }
      return c
    }
    c = {};
    for(g in a) {
      a.hasOwnProperty(g) && (c[g] = Util.deepClone(a[g]))
    }
    return c
  };
  Util.clone = function(a, c, g) {
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
      if(g === 1) {
        return Array.prototype.slice.call(a)
      }
      for(var b = [], f = a.length, d = 0, g = g !== void 0 ? g - 1 : void 0;d < f;d++) {
        d in a && (b[d] = Util.clone(a[d], c, g))
      }
      return b
    }
    b = {};
    f = Util.isEmptyObj(c);
    if(g === 1) {
      if(f) {
        for(d in a) {
          a.hasOwnProperty(d) && (b[d] = a[d])
        }
      }else {
        for(d in c) {
          c.hasOwnProperty(d) && a.hasOwnProperty(d) && (b[d] = a[d])
        }
      }
    }else {
      if(g = g !== void 0 ? g - 1 : void 0, f) {
        for(d in a) {
          a.hasOwnProperty(d) && (b[d] = Util.clone(a[d], void 0, g))
        }
      }else {
        for(d in c) {
          c.hasOwnProperty(d) && a.hasOwnProperty(d) && (b[d] = Util.clone(a[d], void 0, g))
        }
      }
    }
    return b
  };
  Util.toArray = function(a) {
    var c = [], g;
    for(g in a) {
      a.hasOwnProperty(g) && c.push(a[g])
    }
    return c
  };
  Util.toArrayWithKey = function(a) {
    var c = [], g;
    for(g in a) {
      a.hasOwnProperty(g) && c.push({key:g, val:a[g]})
    }
    return c
  };
  Util.random = function(a) {
    return Math.floor(a * Math.random())
  };
  Util.bound = function(a, c, g) {
    isNaN(g) || (a = Math.min(a, g));
    isNaN(c) || (a = Math.max(a, c));
    return a
  };
  Util.callFn = function() {
    return arguments.length <= 3 ? arguments[1].call(arguments[0], arguments[2]) : arguments[1].apply(arguments[0], Array.prototype.slice.call(arguments, 2))
  };
  Util.formatNumber = function(a, c, g, b, f) {
    var g = g === void 0 ? "&#8361; " : g, c = isNaN(c) ? 0 : c, b = b === void 0 ? "." : b, f = f === void 0 ? "," : f, d = a < 0 ? "-" : "", k = parseInt(a = Math.abs(+a || 0).toFixed(c), 10) + "", j = k.length, j = j > 3 ? j % 3 : 0;
    return g + d + (j ? k.substr(0, j) + f : "") + k.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + f) + (c ? b + Math.abs(a - k).toFixed(c).slice(2) : "")
  };
  Util.getBodyScroll = function() {
    var a = 0, c = 0;
    if(typeof window.pageYOffset === "number") {
      c = window.pageYOffset, a = window.pageXOffset
    }else {
      if(document.body && (document.body.scrollLeft || document.body.scrollTop)) {
        c = document.body.scrollTop, a = document.body.scrollLeft
      }else {
        if(document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
          c = document.documentElement.scrollTop, a = document.documentElement.scrollLeft
        }
      }
    }
    return[a, c]
  };
  Util.hasClass = function(a, c) {
    if(a == null || c == null) {
      return!1
    }
    if(a.className === c) {
      return!0
    }
    if(a.className) {
      for(var g = a.classList ? a.classList : Util.split(a.className), b = 0, f = g.length;b < f;b++) {
        if(g[b] === c) {
          return!0
        }
      }
    }
    return!1
  };
  Util.hasTagAndClass = function(a, c, g) {
    if(a == null || c == null || g == null) {
      return!1
    }
    if(a.tagName === c) {
      if(a.className === g) {
        return!0
      }
      if(a.className && a.className.length >= g.length) {
        for(var a = a.classList ? a.classList : Util.split(a.className), c = 0, b = a.length;c < b;c++) {
          if(a[c] === g) {
            return!0
          }
        }
      }
    }
    return!1
  };
  Util.closest = function(a, c, g) {
    if(Util.hasClass(a, c)) {
      return a
    }
    for(a = a.parentNode;Util.isNotNull(a) && a !== g;a = a.parentNode) {
      if(Util.hasClass(a, c)) {
        return a
      }
    }
  };
  Util.closestWithTag = function(a, c, g, b) {
    if(Util.hasTagAndClass(a, c, g)) {
      return a
    }
    for(a = a.parentNode;Util.isNotNull(a) && a !== b;a = a.parentNode) {
      if(Util.hasTagAndClass(a, c, g)) {
        return a
      }
    }
  };
  Util.findFirstByClass = function(a, c) {
    if(a != null) {
      if(Util.hasClass(a, c)) {
        return a
      }
      for(var g = 0, b = a.childNodes, f = b.length, d;g < f;g++) {
        if(Util.isNotNull(b[g]) && (d = Util.findFirstByClass(b[g], c)) !== void 0) {
          return d
        }
      }
    }
  };
  Util.findFirstByTagAndClass = function(a, c, g) {
    if(a != null) {
      if(Util.hasTagAndClass(a, c, g)) {
        return a
      }
      for(var b = 0, a = a.childNodes, f = a.length, d;b < f;b++) {
        if(Util.isNotNull(a[b]) && (d = Util.findFirstByTagAndClass(a[b], c, g)) !== void 0) {
          return d
        }
      }
    }
  };
  Util.findByClass = function(a, c, g) {
    g === void 0 && (g = []);
    if(a == null) {
      return g
    }
    Util.hasClass(a, c) && g.push(a);
    for(var b = 0, a = a.childNodes, f = a.length;b < f;b++) {
      Util.isNotNull(a[b]) && Util.findByClass(a[b], c, g)
    }
    return g
  };
  Util.findByTagAndClass = function(a, c, g, b) {
    b === void 0 && (b = []);
    if(a == null) {
      return b
    }
    Util.hasTagAndClass(a, c, g) && b.push(a);
    for(var f = 0, a = a.childNodes, d = a.length;f < d;f++) {
      Util.isNotNull(a[f]) && Util.findByTagAndClass(a[f], c, g, b)
    }
    return b
  };
  Util.getHead = function() {
    return document.head ? document.head : document.getElementsByTagName("head")[0]
  };
  Util.appendTag = function(a, c) {
    return a.appendChild(document.createElement(c))
  };
  Util.appendHTML = function(a, c) {
    var g = document.createElement("div"), b, f = 0, d = [];
    g.innerHTML = c;
    for(b = g.childNodes.length;f < b;f++) {
      d.push(a.appendChild(g.firstChild))
    }
    return d
  };
  Util.createStyle = function(a) {
    a == null && (a = "");
    var c = document.createElement("style");
    c.type = "text/css";
    c.rel = "stylesheet";
    c.styleSheet ? c.styleSheet.cssText = a : c.appendChild(document.createTextNode(a));
    Util.getHead().appendChild(c);
    return c
  };
  Util.removeStyle = function(a) {
    a != null && a.parentNode != null && Util.getHead().removeChild(a)
  };
  Util.setStyle = function(a, c) {
    return a == null ? "" : a.styleSheet ? a.styleSheet.cssText = c : a.childNodes[0].nodeValue = c
  };
  Util.appendStyle = function(a, c) {
    return a == null ? "" : a.styleSheet ? a.styleSheet.cssText += c : a.childNodes[0].nodeValue += c
  };
  Util.getStyle = function(a) {
    return a == null ? "" : a.styleSheet ? a.styleSheet.cssText : a.childNodes[0].nodeValue
  };
  Util.appendScript = function(a) {
    var c = document.createElement("script");
    c.type = "text/javascript";
    c.text ? c.text = a : c.innerHTML = a;
    Util.getHead().appendChild(c);
    return c
  };
  Util.appendScriptFile = function(a) {
    document.write('<script type="text/javascript" src="' + a + '"><\/script>')
  };
  Util.outerHTML = function(a) {
    if(a.outerHTML === void 0) {
      var c = document.createElement("div");
      c.appendChild(a.cloneNode(!0));
      return c.innerHTML
    }
    return a.outerHTML
  };
  Util.index = function(a) {
    for(var c = 0;(a = a.previousSibling) != null;) {
      ++c
    }
    return c
  };
  Util.contains = function(a, c, g) {
    for(;c != null;) {
      if(c === a) {
        return!0
      }
      if(c === g) {
        break
      }
      c = c.parentNode
    }
    return!1
  };
  Util.areEqualArrays = function(a, c) {
    if(a == null || c == null) {
      return!1
    }
    if(a === c) {
      return!0
    }
    if(a.length !== c.length) {
      return!1
    }
    for(var g = 0, b = a.length;g < b;g++) {
      if(a.hasOwnProperty(g) && !c.hasOwnProperty(g) || c.hasOwnProperty(g) && !a.hasOwnProperty(g) || a[g] !== c[g]) {
        return!1
      }
    }
    return!0
  };
  Util.areEqualObjects = function(a, c) {
    if(a == null || c == null) {
      return!1
    }
    if(a === c) {
      return!0
    }
    if(typeof a !== "object" || typeof c !== "object") {
      return!1
    }
    for(var g in a) {
      if(a.hasOwnProperty(g) && (!c.hasOwnProperty(g) || a[g] !== c[g])) {
        return!1
      }
    }
    for(g in c) {
      if(c.hasOwnProperty(g) && (!a.hasOwnProperty(g) || a[g] !== c[g])) {
        return!1
      }
    }
    return!0
  };
  Util.areEqualComplex = function(a, c, g) {
    if(a == null || c == null) {
      return!1
    }
    if(a === c) {
      return!0
    }
    var b = g.length, f = g[0];
    if(b === 1) {
      return f === "array" ? Util.areEqualArrays(a, c) : Util.areEqualObjects(a, c)
    }
    if(b > 1) {
      g = g.slice(1);
      b = 0;
      if(f === "array") {
        if(a.length !== c.length) {
          return!1
        }
        for(f = a.length;b < f;b++) {
          if(!c.hasOwnProperty(b) || !Util.areEqualComplex(a[b], c[b], g)) {
            return!1
          }
        }
      }else {
        for(b in a) {
          if(a.hasOwnProperty(b) && (!c.hasOwnProperty(b) || !Util.areEqualComplex(a[b], c[b], g))) {
            return!1
          }
        }
        for(b in c) {
          if(c.hasOwnProperty(b) && (!a.hasOwnProperty(b) || !Util.areEqualComplex(a[b], c[b], g))) {
            return!1
          }
        }
      }
      return!0
    }
  };
  Util.typeCheck = function(a, c, g, b, f) {
    if(g && c === void 0 || b && c === null) {
      return!0
    }
    switch(typeof a) {
      case "string":
        if(typeof c === a) {
          return!0
        }
        break;
      case "function":
        if(c instanceof a) {
          return!0
        }
    }
    if(f) {
      return!1
    }
    throw new TypeError("object is not a " + a + ", but is a " + typeof c);
  };
  Util.sprint = function(a, c, g, b) {
    Util.typeCheck("string", a);
    Util.typeCheck("object", c);
    Util.typeCheck("string", g, !0);
    Util.typeCheck("string", b, !0);
    var f;
    g === void 0 && (g = "%");
    b === void 0 && (b = "%");
    for(f in c) {
      c.hasOwnProperty(f) && (a = a.replace(RegExp(g + f + b, "gm"), c[f]))
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
  Util.strReplace = function(a, c) {
    var g, b = [];
    for(g in c) {
      c.hasOwnProperty(g) && b.push(Util.escapeRegExp(g))
    }
    return a.replace(RegExp("(" + b.join("|") + ")", "gm"), function(a) {
      return c[a]
    })
  };
  Util.calCheckSize = function() {
    var a = {}, c = document.createElement("div");
    document.body.appendChild(c);
    c.innerHTML = "<input type='checkbox' style='margin:0;padding:0;overflow:hidden'/>";
    a.checkboxW = c.childNodes[0].offsetWidth;
    a.checkboxH = c.childNodes[0].offsetHeight;
    c.innerHTML = "<input type='radio' style='margin:0;padding:0;overflow:hidden'/>";
    a.radioW = c.childNodes[0].offsetWidth;
    a.radioH = c.childNodes[0].offsetHeight;
    document.body.removeChild(c);
    return a
  };
  Util.which = function(a) {
    for(var c = {}, g = 0, b;g < a.length;g++) {
      if(b = a[g].toLowerCase(), b === "number") {
        for(b = 48;b <= 57;b++) {
          c[b] = !0
        }
        for(b = 96;b <= 105;b++) {
          c[b] = !0
        }
      }else {
        if(b === "alphabet") {
          for(b = 65;b <= 90;b++) {
            c[b] = !0
          }
        }else {
          if(b === "arrow") {
            for(b = 37;b <= 40;b++) {
              c[b] = !0
            }
          }else {
            b.length > 1 && (b = b.replace(/\s/g, "")), b.length >= 3 && (b = b.replace(/numpad|num/g, "n").replace(/korean|kor/g, "kr")), c[Util.keyMapKeydown[b]] = !0
          }
        }
      }
    }
    return c
  };
  Util.keyMapKeydown = {backspace:8, tab:9, enter:13, shift:16, control:17, ctrl:17, alt:18, pause:19, "break":19, capslock:20, escape:27, esc:27, space:32, " ":32, pageup:33, pgup:33, pagedown:34, pgdown:34, pgdn:34, end:35, home:36, leftarrow:37, left:37, uparrow:38, up:38, rightarrow:39, right:39, downarrow:40, down:40, insert:45, ins:45, "delete":46, del:46, 0:48, ")":48, 1:49, "!":49, 2:50, "@":50, 3:51, "#":51, 4:52, $:52, 5:53, "%":53, 6:54, "^":54, 7:55, "&":55, 8:56, "*":56, 9:57, "(":57, 
  a:65, b:66, c:67, d:68, e:69, f:70, g:71, h:72, i:73, j:74, k:75, l:76, m:77, n:78, o:79, p:80, q:81, r:82, s:83, t:84, u:85, v:86, w:87, x:88, y:89, z:90, n0:96, n1:97, n2:98, n3:99, n4:100, n5:101, n6:102, n7:103, n8:104, n9:105, "n*":106, "n+":107, "n-":109, "n.":110, "n/":111, f1:112, f2:113, f3:114, f4:115, f5:116, f6:117, f7:118, f8:119, f9:120, f10:121, f11:122, f12:123, numlock:144, scrolllock:145, mute:173, volumedown:174, volumeup:175, ":":186, ";":186, "=":187, "+":187, ",":188, "<":188, 
  "-":189, _:189, ".":190, ">":190, "/":191, "?":191, "`":192, "~":192, "[":219, "{":219, "\\":220, "|":220, "]":221, "}":221, "'":222, '"':222, kr:229};
  Util.printEventPos = function(a) {
    Util.print("client: (" + a.clientX + ", " + a.clientY + "), layer: (" + a.layerX + ", " + a.layerY + "), offset: (" + a.offsetX + ", " + a.offsetY + "), page: (" + a.pageX + ", " + a.pageY + "), screen: (" + a.screenX + ", " + a.screenY + "), xy: (" + a.x + ", " + a.y + ")")
  };
  Util.print = function(e) {
    if(a) {
      if(arguments.length === 1) {
        a(arguments[0])
      }else {
        for(var c = 0, g = arguments.length;c < g;c++) {
          a(arguments[c])
        }
      }
    }
  };
  Util.open = function(a) {
    var c = {url:"about:blank", name:"_blank", channelmode:"no", directories:"yes", fullscreen:"no", height:void 0, left:void 0, location:"yes", menubar:"yes", resizable:"yes", scrollbars:"yes", status:"yes", titlebar:"yes", toolbar:"yes", top:void 0, width:void 0, replace:void 0}, g;
    if(Util.isNotNull(a)) {
      for(g in c) {
        c.hasOwnProperty(g) && (c[g] = a[g])
      }
    }
    a = Util.ifNull(c.height, "", "height=" + c.height + ", ") + Util.ifNull(c.left, "", "left=" + c.left + ", ") + Util.ifNull(c.top, "", "top=" + c.top + ", ") + Util.ifNull(c.width, "", "width=" + c.width + ", ") + "channelmode=" + c.channelmode + ", directories=" + c.directories + ", fullscreen=" + c.fullscreen + ", location=" + c.location + ", menubar=" + c.menubar + ", resizable=" + c.resizable + ", scrollbars=" + c.scrollbars + ", status=" + c.status + ", titlebar=" + c.titlebar + ", toolbar=" + 
    c.toolbar;
    return Util.isNull(c.replace) ? window.open(c.url, c.name, a) : window.open(c.url, c.name, a, c.replace)
  }
})();
var Tracer = {};
(function() {
  goog.exportSymbol("Tracer", Tracer);
  Tracer = function() {
    this.stack = "";
    this.timers = {}
  };
  var d = Tracer.prototype;
  d.print = function(b, a, e) {
    b === void 0 && (b = "");
    a === void 0 && (a = "timer");
    e === void 0 && (e = !0);
    var c = this.timers[a], g = (new Date).getTime(), c = Util.isNull(c) ? 0 : g - c;
    Util.print((this.stack.length > 0 ? this.stack + " :: " : "") + b + ", Time elapsed since last update: " + c + "ms");
    e && (this.timers[a] = g)
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
jx.util$ = {};
var Util$ = {};
(function() {
  goog.exportSymbol("jx.util$", Util$);
  Util$.is$ = function(d) {
    return d instanceof jQuery ? !0 : !1
  };
  Util$.safe$ = function(d) {
    return d instanceof jQuery ? d : $(d)
  };
  Util$.unbindRemove = function(d) {
    d.unbind().remove()
  };
  jQuery.fn.getBoundingRect = function() {
    var d = this.offset();
    return{left:d.left, top:d.top, width:this.outerWidth(), height:this.outerHeight()}
  };
  jQuery.fn.containsEvent = function(d) {
    if(this.length === 0) {
      return!1
    }
    var b, a, e, c;
    if(this.length <= 1) {
      return b = this.getBoundingRect(), e = d.pageX, c = d.pageY, e >= b.left && e <= b.left + b.width && c >= b.top && c <= b.top + b.height
    }
    a = !1;
    this.each(function() {
      b = $(this).getBoundingRect();
      e = d.pageX;
      c = d.pageY;
      if(e >= b.left && e <= b.left + b.width && c >= b.top && c <= b.top + b.height) {
        return a = !0, !1
      }
    });
    return a
  };
  Util$.baseurlOfHeadScript = function(d) {
    var b = $(document.getElementsByTagName("head")[0]).find("script[src$='" + d + "']").attr("src");
    return b.substring(0, b.indexOf(d))
  };
  Util$.calScrollbarDims = function(d) {
    if(Util.isNotNull(window.__SCROLLBAR_DIM__)) {
      return window.__SCROLLBAR_DIM__
    }
    if(Util.isNotNull(window.opener) && Util.isNotNull(window.opener.__SCROLLBAR_DIM__)) {
      return window.opener.__SCROLLBAR_DIM__
    }
    var d = Util$.safe$(d), b;
    d[0].innerHTML = "<div id='scrollbardim' style='position:absolute;top:-10000px;left:-10000px;width:100px;height:100px;overflow:scroll;'></div>";
    b = $(document.getElementById("scrollbardim"));
    b = {w:b.width() - b[0].clientWidth, h:b.height() - b[0].clientHeight};
    d[0].innerHTML = "";
    return window.__SCROLLBAR_DIM__ = b
  }
})();
jx.grid = {};
var JGM = {};
(function() {
  goog.exportSymbol("JGM", JGM);
  goog.exportSymbol("jx.grid", JGM);
  JGM.version = "1.2.3";
  JGM.__map_a__ = {ArrayExtIE:{filename:"array_ext_ie.js", readyState:"notloaded", required:!1, cacheModule:!1}, Cache:{filename:"jgrid_cache.js", readyState:"notloaded", required:!0, cacheModule:!0}, Cell:{filename:"jgrid_cell.js", readyState:"notloaded", required:!0, cacheModule:!1}, CheckManager:{filename:"jgrid_checkmanager.js", readyState:"notloaded", required:!1, cacheModule:!0}, ColDefManager:{filename:"jgrid_coldefmanager.js", readyState:"notloaded", required:!0, cacheModule:!0}, ColGroup:{filename:"jgrid_colgroup.js", 
  readyState:"notloaded", required:!1, cacheModule:!0}, ColHeader:{filename:"jgrid_colheader.js", readyState:"notloaded", required:!0, cacheModule:!0}, Collapser:{filename:"jgrid_collapser.js", readyState:"notloaded", required:!1, cacheModule:!0}, DataManager:{filename:"jgrid_datamanager.js", readyState:"notloaded", required:!0, cacheModule:!0}, DataCreator:{filename:"jgrid_datacreator.js", readyState:"notloaded", required:!1, cacheModule:!0}, EditManager:{filename:"jgrid_editmanager.js", readyState:"notloaded", 
  required:!0, cacheModule:!0}, Editor:{filename:"jgrid_editmanager.js", readyState:"notloaded", required:!0, cacheModule:!0}, EngineExt:{filename:"engine_ext.js", readyState:"notloaded", required:!0, cacheModule:!1}, EventManager:{filename:"jgrid_eventmanager.js", readyState:"notloaded", required:!0, cacheModule:!0}, Footer:{filename:"jgrid_footer.js", readyState:"notloaded", required:!1, cacheModule:!0}, HeaderTree:{filename:"jgrid_headertree.js", readyState:"notloaded", required:!1, cacheModule:!0}, 
  Grid:{filename:"jgrid_grid.js", readyState:"notloaded", required:!0, cacheModule:!0}, GridManager:{filename:"jgrid_manager.js", readyState:"loaded", required:!0, cacheModule:!1}, MenuBar:{filename:"jgrid_menubar.js", readyState:"notloaded", required:!0, cacheModule:!0}, ViewportManager:{filename:"jgrid_viewportmanager.js", readyState:"notloaded", required:!0, cacheModule:!0}, SelectionManager:{filename:"jgrid_selectionmanager.js", readyState:"notloaded", required:!1, cacheModule:!0}, SearchManager:{filename:"jgrid_searchmanager.js", 
  readyState:"notloaded", required:!1, cacheModule:!0}, TooltipManager:{filename:"jgrid_tooltipmanager.js", readyState:"notloaded", required:!1, cacheModule:!0}, Tracer:{filename:"tracer.js", readyState:"notloaded", required:!1, cacheModule:!1}, Tree:{filename:"tree.js", readyState:"notloaded", required:!1, cacheModule:!0}, TreeNode:{filename:"tree.js", readyState:"notloaded", required:!1, cacheModule:!1}, Util:{filename:"util.js", readyState:"notloaded", required:!0, cacheModule:!1}, Util$:{filename:"util_jquery.js", 
  readyState:"notloaded", required:!0, cacheModule:!1}};
  JGM.create = function(d, b) {
    Util.isNull(b) && (b = {});
    if(this.__map_a__[d].cacheModule) {
      b.mid = "JGM" + this.m.length++;
      var a = this[d].getInstance(b);
      this.m.hasOwnProperty(d) || (this.m[d] = {});
      this.m[d][a.mid] = a;
      d === "Grid" && Util.isNotNull(a.name) && (this.gridMap[a.name] = a);
      return a
    }else {
      return this[d].getInstance(b)
    }
  };
  JGM._destroy = function(d, b) {
    var a, e, c, g;
    for(e in b) {
      if(b.hasOwnProperty(e)) {
        switch(e) {
          case "map":
            a = b[e];
            if(Util.isString(a)) {
              a = Util.split(a);
              g = a.length;
              for(c = 0;c < g;c++) {
                JGM.__deleteMap_l__(d, a[c])
              }
            }else {
              if(a instanceof Array) {
                g = a.length;
                for(c = 0;c < g;c++) {
                  Util.emptyObject(a[c])
                }
              }else {
                Util.emptyObject(a)
              }
            }
            break;
          case "array":
            a = b[e];
            if(Util.isString(a)) {
              a = Util.split(a);
              g = a.length;
              for(c = 0;c < g;c++) {
                JGM.__deleteArray_r__(d, a[c])
              }
            }else {
              a.length = 0
            }
            break;
          case "$":
            a = b[e];
            if(Util.isString(a)) {
              a = Util.split(a);
              g = a.length;
              for(c = 0;c < g;c++) {
                JGM.__delete$_n__(d, a[c])
              }
            }else {
              if(a instanceof Array) {
                g = a.length;
                for(c = 0;c < g;c++) {
                  Util$.unbindRemove(a[c])
                }
              }else {
                Util$.unbindRemove(a)
              }
            }
            break;
          case "style":
            a = b[e];
            if(Util.isString(a)) {
              a = Util.split(a);
              g = a.length;
              for(c = 0;c < g;c++) {
                JGM.__deleteStyle_o__(d, a[c])
              }
            }else {
              if(a instanceof Array) {
                g = a.length;
                for(c = 0;c < g;c++) {
                  Util.removeStyle(a[c])
                }
              }else {
                Util.removeStyle(a)
              }
            }
            break;
          case "property":
            a = b[e];
            if(Util.isString(a)) {
              a = Util.split(a);
              g = a.length;
              for(c = 0;c < g;c++) {
                delete d[a[c]]
              }
            }else {
              if(a instanceof Array) {
                g = a.length;
                for(c = 0;c < g;c++) {
                  delete d[a[c]]
                }
              }
            }
            break;
          case "module":
            a = b[e];
            if(Util.isString(a)) {
              a = Util.split(a);
              g = a.length;
              for(c = 0;c < g;c++) {
                JGM.__deleteModule_p__(d, a[c])
              }
            }else {
              if(a instanceof Array) {
                g = a.length;
                for(c = 0;c < g;c++) {
                  a[c].destroy()
                }
              }else {
                a.destroy()
              }
            }
            break;
          case "name":
            d.hasOwnProperty("mid") && (JGM.__remove_f__(b[e], d.mid), delete d.mid);
            break;
          case "path":
            d.hasOwnProperty("grid") && d.grid.hasOwnProperty(b[e]) && (delete d.grid[b[e]], delete d.grid)
        }
      }
    }
    Util.emptyObject(d)
  };
  JGM.__deleteMap_l__ = function(d, b) {
    d.hasOwnProperty(b) && (Util.emptyObject(d[b]), delete d[b])
  };
  JGM.__deleteArray_r__ = function(d, b) {
    if(d.hasOwnProperty(b)) {
      d[b].length = 0, delete d[b]
    }
  };
  JGM.__delete$_n__ = function(d, b) {
    d.hasOwnProperty(b) && (Util$.unbindRemove(d[b]), delete d[b])
  };
  JGM.__deleteStyle_o__ = function(d, b) {
    d.hasOwnProperty(b) && (Util.removeStyle(d[b]), delete d[b])
  };
  JGM.__deleteModule_p__ = function(d, b) {
    d.hasOwnProperty(b) && (d[b].destroy(), delete d[b])
  };
  JGM.__remove_f__ = function(d, b) {
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
    Util.isNotNull(b) && (this[d] = b);
    this.__map_a__[d].readyState = "loaded";
    $("body").trigger({type:"moduleload.Grid", modulename:d, readyState:"loaded"})
  };
  JGM.__extend_e__ = function(d, b, a) {
    var b = Util.ifNull(b, {}), e;
    if(Util.isNotNull(a)) {
      for(e in a) {
        a.hasOwnProperty(e) && b.hasOwnProperty(e) && (b[a[e]] = b[e], delete b[e])
      }
    }
    $.extend(!0, d, b);
    $.extend(!0, b, d);
    return b
  };
  JGM.m = {length:0};
  JGM.__CONST_g__ = {__cssUnselectable_a__:"-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none;", __cssUnselectable_b__:"-webkit-user-drag:none;-moz-user-drag:none;user-drag:none;", __checkboxWidth_c__:void 0, __checkboxHeight_d__:void 0, __radioWidth_e__:void 0, __radioHeight_f__:void 0};
  JGM.__globalEventsBound_h__ = !1;
  JGM.__globalEvents_i__ = {__mousemove_a__:function(d) {
    var b, a = JGM.m.Grid;
    for(b in a) {
      a.hasOwnProperty(b) && a[b]._mousemove(d)
    }
  }, __mouseup_b__:function(d) {
    var b, a = JGM.m.Grid;
    for(b in a) {
      a.hasOwnProperty(b) && a[b]._mouseup(d)
    }
  }, __resize_c__:function(d) {
    var b, a = JGM.m.Grid;
    for(b in a) {
      a.hasOwnProperty(b) && a[b]._resize(d)
    }
  }};
  JGM._bindGlobalEvents = function() {
    if(!this.__globalEventsBound_h__) {
      $(document).bind({mousemove:this.__globalEvents_i__.__mousemove_a__, mouseup:this.__globalEvents_i__.__mouseup_b__}), $(window).resize(this.__globalEvents_i__.__resize_c__), this.__globalEventsBound_h__ = !0
    }
  };
  JGM._unbindGlobalEvents = function() {
    if(this.__globalEventsBound_h__) {
      $(document).unbind({mousemove:this.__globalEvents_i__.__mousemove_a__, mouseup:this.__globalEvents_i__.__mouseup_b__}), $(window).unbind("resize", this.__globalEvents_i__.__resize_c__), this.__globalEventsBound_h__ = !1
    }
  };
  JGM.error = {LENGTH_NOT_EQUAL:"Lengths are not equal", NOT_MODIFIABLE:"Cannot modify value for '%0'.", KEY_UNDEFINED:"Column '%0' is undefined.", BAD_NULL:"Column '%0' cannot be null.", DUP_KEY:"Duplicate column key '%0'.", DUP_ENTRY:"Duplicate entry '%0' for '%1'.", KEY_NOT_FOUND:"'%0' for '%1' doesn't exist in table.", PARSE_ERROR:"Cannot parse '%0' for '%1'.", INVALID_DEFAULT:"Invalid default value '%0' for '%1'.", MULTIPLE_PRI_KEY:"Multiple primary key defined.", DATA_TOO_LONG:"Data '%0' too long for column '%1'. Maximum is %2.", 
  DATA_TOO_SHORT:"Data '%0' too short for column '%1'. Minimum is %2.", WRONG_LENGTH:"Length of data '%0' is not '%1' characters long for column '%2'.", BIGGER_THAN:"Data '%0' too big for column '%1'. Maximum is %2.", SMALLER_THAN:"Data '%0' too small for column '%1'. Minimum is %2.", WRONG_VALUE:"Incorrect value: '%0' for '%1'."}
})();
jx.grid.renderer = {};
(function() {
  goog.exportSymbol("jx.grid.renderer", d);
  var d = JGM.renderer = jx.grid.renderer;
  d.selectBox = function(b) {
    var a = b.mapping, e = b.attr, c = b["default"], g = b.style, i = b.callback, f, d, k, j = 0, m = [], l = [], n = "<select";
    if(e) {
      for(k in e) {
        e.hasOwnProperty(k) && (n += " " + k + '="' + e[k] + '"')
      }
    }
    if(g) {
      n += ' style="';
      for(k in g) {
        g.hasOwnProperty(k) && (n += k + ":" + g[k] + ";")
      }
      n += '"'
    }
    n += ">";
    for(f in a) {
      a.hasOwnProperty(f) && (b = a[f], m.push(f), l.push(b), c == b && (d = j), j++)
    }
    return function(a) {
      var e, c, g = n;
      for(c = 0;c < j;c++) {
        if(a == l[c]) {
          e = c;
          break
        }
      }
      e === void 0 && (e = d);
      for(c = 0;c < j;c++) {
        g += '<option value="' + l[c] + '"', c === e && (g += ' selected="selected"'), g += ">" + m[c] + "</option>"
      }
      g += "</select>";
      i && (e = [], e.push(g), Array.prototype.push.apply(e, arguments), g = i.apply(this, e));
      return g
    }
  }
})();
jx.lang = {};
jx.lang.Disposable = {};
(function() {
  function d() {
  }
  function b(e, c) {
    var e = e || 0, g, i;
    if(e !== 0) {
      for(g in this) {
        if(this.hasOwnProperty(g)) {
          if(i = this[g]) {
            if(i.dispose) {
              i.dispose(e - 1, c)
            }else {
              if(c && typeof i == "object") {
                a(i) ? i.length = 0 : b.call(i, e - 1, c)
              }
            }
          }
          delete this[g]
        }
      }
    }else {
      for(g in this) {
        this.hasOwnProperty(g) && delete this[g]
      }
    }
  }
  goog.exportSymbol("jx.lang.Disposable", d);
  goog.exportProperty(d.prototype, "dispose", b);
  var a = Util.isArray
})();
jx.events = {};
jx.events.EventDispatcher = {};
(function() {
  function d() {
  }
  goog.exportSymbol("jx.events.EventDispatcher", d);
  goog.inherits(d, JGM.lang.Disposable);
  var b = d.prototype, a = b.dispose;
  b.dispose = function() {
    a.call(this, -1, !0)
  };
  b.addEventListener = function(a, c) {
    if(!a) {
      throw Error("Invalid event type: " + a);
    }
    if(typeof c != "function") {
      throw Error("Event listener must be a function");
    }
    if(!this._handlers) {
      this._handlers = {}
    }
    var g = this._handlers, a = (a + "").toLowerCase();
    g.hasOwnProperty(a) || (g[a] = []);
    g = g[a];
    g.indexOf(c) === -1 && g.push(c)
  };
  b.removeEventListener = function(a, c) {
    if(this._handlers) {
      var a = (a + "").toLowerCase(), g = this._handlers;
      if(g.hasOwnProperty(a)) {
        for(var b = g[a], f = -1;(f = b.indexOf(c, f + 1)) !== -1;) {
          b.splice(f, 1)
        }
        b.length === 0 && delete g[a]
      }
    }
  };
  b.dispatchEvent = function(a) {
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
    var c = this._handlers, g = (a.type + "").toLowerCase();
    a.target = this;
    if(c.hasOwnProperty(g)) {
      for(var c = c[g], g = 0, b = c.length, f;g < b && !a.stopPropagation;g++) {
        f = c[g], f.handleEvent ? f.handleEvent(a) : f.call(this, a)
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
  function d(a) {
    if(!(a.manager && typeof a.manager == "object")) {
      throw Error("Column needs a valid manager!");
    }
    this.manager = a.manager;
    this.key = a.key + "";
    if(!this.key) {
      throw Error("Column needs a non-empty key!");
    }
    var e = "column key=" + this.key;
    if(this.manager.hasKey(this.key)) {
      throw Error("Duplicate column key!" + e);
    }
    this.name = a.name ? a.name + "" : "";
    this.title = a.title ? a.title + "" : "";
    this.noName = !!a.noName;
    this.noTitle = !!a.noTitle;
    this.type = a.type + "" || null;
    this.defaultValue = a.defaultValue;
    this.inputOnCreate = !!a.inputOnCreate;
    this.width = (this.width = Number(a.width)) || 90;
    this.minW = (this.minW = Number(a.minW)) || 30;
    this.maxW = Number(a.maxW) || null;
    this.resizable = !!a.resizable;
    this.hidden = !!a.hidden;
    this.noSearch = !!a.noSearch;
    this.tooltipEnabled = !!a.tooltipEnabled;
    this.colClass = a.colClass + "" || null;
    this.style = a.style + "" || null;
    this.headerStyle = a.headerStyle + "" || null;
    if(a.parser && typeof a.parser != "function") {
      throw Error("Invalid parser!" + e);
    }
    this.parser = a.parser || null;
    if(a.validator && typeof a.validator != "function") {
      throw Error("Invalid validator!" + e);
    }
    this.validator = a.validator || null;
    if(a.renderer && typeof a.renderer != "function") {
      throw Error("Invalid renderer!" + e);
    }
    this.renderer = a.renderer || null;
    if(a.sumRenderer && typeof a.sumRenderer != "function") {
      throw Error("Invalid sum renderer!" + e);
    }
    this.sumRenderer = a.sumRenderer || null;
    if(a.editor && typeof a.editor != "object") {
      throw Error("Invalid editor!" + e);
    }
    this.editor = a.editor || null;
    this.sorter = a.sorter || null;
    this.filter = a.filter || null
  }
  goog.exportSymbol("jx.grid.Column", d);
  goog.inherits(d, jx.events.EventDispatcher);
  var b = d.prototype;
  b.show = function() {
    return this.hidden ? (this.hidden = !1, this.dispatchEvent({type:"hidden", value:!1}), !0) : !1
  };
  b.hide = function() {
    return!this.hidden ? (this.hidden = !0, this.dispatchEvent({type:"hidden", value:!0}), !0) : !1
  };
  b.setHidden = function(a) {
    return a ? this.hide() : this.show()
  };
  b.setWidth = function(a) {
    return(a = Number(a)) && this.width !== a ? (this.width = a, this.dispatchEvent({type:"width", value:a}), a) : !1
  };
  b.setRenderer = function(a) {
    if(this.renderer !== a) {
      if(a && typeof a != "function") {
        throw Error("Invalid renderer!column key=" + this.key);
      }
      this.renderer = a || null;
      this.dispatchEvent({type:"renderer", value:a})
    }
  }
})();
jx.grid.BaseModule = {};
(function() {
  function d(a) {
    if(a) {
      if(a.mid != null) {
        this.mid = a.mid
      }
      if(a.grid) {
        this.grid = a.grid
      }
    }
    var c = this._defaultOptions && this._defaultOptions(), g = a && a.options;
    if(g || c) {
      c || (c = {}), g && $.extend(!0, c, g), this._options = c
    }
    this._init && (this.dispatchEvent({type:"beforeinit"}), this._init(a), this.dispatchEvent({type:"afterinit"}));
    var b = this, f = this.grid;
    f && ["dispose", "createcss", "createdynamiccss", "render", "keydown", "keyup", "keypress", "mousein", "mouseout", "mouseenter", "mouseleave", "mousemove", "mouseover", "mousedown", "mouseup", "click", "dblclick", "resize", "resizewidth", "resizeheight", "scroll", "scrollh", "scrollv"].forEach(function(a) {
      var e = "_before" + a, c = "_after" + a;
      b[e] && f.addEventListener(e, function(a) {
        return b[e](a)
      });
      b[c] && f.addEventListener(c, function(a) {
        return b[c](a)
      })
    });
    this._bindEvents && (this.dispatchEvent({type:"beforebindevents"}), this._bindEvents(a), this.dispatchEvent({type:"afterbindevents"}));
    this.dispatchEvent({type:"complete"})
  }
  goog.exportSymbol("jx.grid.BaseModule", d);
  goog.inherits(d, EventDispatcher);
  var b = d.prototype, a = b.dispose;
  b._beforedispose = function() {
    this.dispose()
  };
  b.dispose = function() {
    delete this.grid;
    this.dispatchEvent({type:"beforedispose"});
    a.call(this);
    this.dispatchEvent({type:"afterdispose"})
  }
})();
jx.data = {};
jx.data.DataManager = {};
(function() {
  function d(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    this.grid.dataMgr = this;
    this.all = [];
    this.datalist = [];
    this.failed = [];
    this._options = JGM.__extend_e__({__idKey_a__:void 0, __idColKeys_c__:[], uniqueKeys:[]}, a.options, {idKey:"__idKey_a__", idColKeys:"__idColKeys_c__"});
    this.__consts_n__ = {__auto_a__:0, __given_b__:1, __composite_c__:2, __notReal_d__:this.mid + "@NR" + Util.random(1E4), __add_e__:0, __addList_f__:1, __update_g__:2, __updateList_h__:3, __remove_i__:4, __removeList_j__:5, unknown:0, number:1, string:2, "boolean":3, date:4, "enum":5};
    Util.isNotNull(this._options.__idKey_a__) ? (this.__idMode_m__ = this.__consts_n__.__given_b__, this.idKey = this._options.__idKey_a__) : (this.__idMode_m__ = this._options.__idColKeys_c__.length !== 0 ? this.__consts_n__.__composite_c__ : this.__consts_n__.__auto_a__, this.idKey = "J@I" + this.mid + "@" + Util.random(1E4));
    this.__increment_l__ = 0;
    this.keyToType = {};
    this.__idToIdx_b__ = {};
    this.__idToData_a__ = {};
    this.__filters_r__ = [];
    this.__history_e__ = [];
    this.__redoHistory_q__ = [];
    this.uniqueMap = {};
    this.__init(a)
  }
  goog.exportSymbol("jx.data.DataManager", d);
  JGM._add("DataManager", d);
  d.getInstance = function(a) {
    return new d(a)
  };
  var b = d.prototype;
  b.__init = function(a) {
    for(var e = 0, c = this._options.uniqueKeys, g, b = this.uniqueMap, f = c.length, d = this.keyToType, k = this.grid.colDefMgr.getAll();e < f;e++) {
      g = c[e], typeof g === "string" && (b[g] = {})
    }
    f = k.length;
    for(e = 0;e < f;e++) {
      c = k[e], g = c.key, c.hasOwnProperty("unique") && c.unique === !0 && !b.hasOwnProperty(g) && (b[g] = {}), d[g] = this.mapDatatype(c.type)
    }
    Util.ifNull(a.datalist, []);
    this.bindEvents();
    this.set(a.datalist)
  };
  b.mapDatatype = function(a) {
    if(typeof a === "string") {
      switch(a = a.toLowerCase(), a) {
        case "number":
          return this.__consts_n__.number;
        case "string":
          return this.__consts_n__.string;
        case "boolean":
          return this.__consts_n__["boolean"];
        case "date":
          return this.__consts_n__.date;
        case "enum":
          return this.__consts_n__["enum"]
      }
    }
    return this.__consts_n__.unknown
  };
  b.bindEvents = function() {
    this.grid.event.bind({onDestroy:this.__destroy_aA__, keydownCanvas:this.__keydownCanvas_ba__}, this)
  };
  b.__destroy_aA__ = function() {
    this.cleanList(this.all);
    JGM._destroy(this, {name:"DataManager", path:"dataMgr", property:"all __idMode_m__ __increment_l__ idKey __sorter_h__", map:"__consts_n__ __idToIdx_b__ __idToData_a__ _options", array:"datalist failed __history_e__ __redoHistory_q__ __filters_r__"})
  };
  b.addUniqueIndex = function(a, e, c, g) {
    if(g !== !0 && (Util.isNull(a) || Util.isEmptyString(e) || Util.isNull(c))) {
      return!1
    }
    if(c.hasOwnProperty(e) === !1) {
      return this.grid.error("KEY_UNDEFINED", e)
    }
    if(Util.isEmptyString(g = c[e])) {
      return this.grid.error("BAD_NULL", e)
    }
    if(a.hasOwnProperty(g)) {
      return a[g] === c ? !1 : this.grid.error("DUP_ENTRY", g, e)
    }
    a[g] = c;
    return!0
  };
  b.addUniqueIndices = function(a, e, c, g) {
    if(g !== !0 && (Util.isNull(a) || Util.isEmptyString(e) || Util.isEmptyArray(c))) {
      return!1
    }
    for(var b = c.length, f = [], d, k, g = 0;g < b;g++) {
      if(!Util.isNull(k = c[g])) {
        if(k.hasOwnProperty(e) === !1) {
          return this.removeUniqueIndices(a, e, f), this.grid.error("KEY_UNDEFINED", e)
        }
        if(Util.isEmptyString(d = k[e])) {
          return this.removeUniqueIndices(a, e, f), this.grid.error("BAD_NULL", e)
        }
        if(a.hasOwnProperty(d)) {
          if(a[d] === k) {
            continue
          }
          this.removeUniqueIndices(a, e, f);
          return this.grid.error("DUP_ENTRY", d, e)
        }
        f.push(a[d] = k)
      }
    }
    return f.length > 0
  };
  b.updateUniqueIndex = function(a, e, c, g, b, f) {
    if(f !== !0 && (Util.isEmptyObj(a) || Util.isEmptyString(e) || Util.isNullOr(c, b) || Util.isEmptyObj(g))) {
      return!1
    }
    if(g.hasOwnProperty(e) === !1) {
      return!1
    }
    if(b.hasOwnProperty(e) === !1 || c.hasOwnProperty(e) === !1) {
      return this.grid.error("KEY_UNDEFINED", e)
    }
    if(a.hasOwnProperty(b = b[e]) === !1) {
      return this.grid.error("KEY_NOT_FOUND", b, e)
    }
    if(Util.isEmptyString(g = g[e])) {
      return this.grid.error("BAD_NULL", e)
    }
    if(a.hasOwnProperty(g)) {
      return a[g] === c ? !1 : this.grid.error("DUP_ENTRY", g, e)
    }
    a[g] = c;
    delete a[b];
    return b
  };
  b.updateUniqueIndices = function(a, e, c, g, b, f) {
    if(f !== !0) {
      if(Util.isEmptyObj(a) || Util.isEmptyString(e) || Util.isEmptyArray(c) || Util.isEmptyArray(g) || Util.isEmptyArray(b)) {
        return!1
      }
      if(c.length !== g.length || c.length !== b.length) {
        return this.grid.error("LENGTH_NOT_EQUAL")
      }
    }
    for(var f = 0, d = c.length, k, j, m, l = [], n = [], o = [], p, q;f < d;f++) {
      if(!Util.isNull(k = c[f])) {
        if((m = g[f]).hasOwnProperty(e) !== !1) {
          j = b[f];
          if(j.hasOwnProperty(e) === !1 || k.hasOwnProperty(e) === !1) {
            return this.updateUniqueIndices(a, e, l, o, n), this.grid.error("KEY_UNDEFINED", e)
          }
          if(a.hasOwnProperty(q = j[e]) === !1) {
            return this.updateUniqueIndices(a, e, l, o, n), this.grid.error("KEY_NOT_FOUND", q, e)
          }
          if(Util.isEmptyString(p = m[e])) {
            return this.updateUniqueIndices(a, e, l, o, n), this.grid.error("BAD_NULL", e)
          }
          if(a.hasOwnProperty(p)) {
            if(a[p] === k) {
              continue
            }
            this.updateUniqueIndices(a, e, l, o, n);
            return this.grid.error("DUP_ENTRY", p, e)
          }
          a[p] = k;
          delete a[q];
          l.push(k);
          n.push(m);
          o.push(j)
        }
      }
    }
    return l.length === 0 ? !1 : {datalist:l, changes:n, befores:o}
  };
  b.removeUniqueIndex = function(a, e, c, g) {
    if(!(g !== !0 && (Util.isEmptyObj(a) || Util.isEmptyString(e) || Util.isEmptyObj(c)))) {
      var b;
      c.hasOwnProperty(e) && a.hasOwnProperty(b = c[e]) && delete a[b]
    }
  };
  b.removeUniqueIndices = function(a, e, c, g) {
    if(!(g !== !0 && (Util.isEmptyObj(a) || Util.isEmptyString(e) || Util.isEmptyArray(c)))) {
      for(var b = c.length, f, d, g = 0;g < b;g++) {
        d = c[g], d.hasOwnProperty(e) && a.hasOwnProperty(f = d[e]) && delete a[f]
      }
    }
  };
  b.addToUniqueMap = function(a) {
    if(Util.isEmptyObj(a) || Util.isEmptyObj(this.uniqueMap)) {
      return!1
    }
    var e = [], c, g = this.uniqueMap, b;
    for(c in g) {
      if(g.hasOwnProperty(c)) {
        if(b = this.addUniqueIndex(g[c], c, a), b === !0) {
          e.push(c)
        }else {
          if(b instanceof Error) {
            c = 0;
            for(var f = e.length;c < f;c++) {
              this.removeUniqueIndex(g[e[c]], e[c], a)
            }
            return b
          }
        }
      }
    }
    return e.length > 0
  };
  b.addListToUniqueMap = function(a) {
    if(Util.isEmptyArray(a) || Util.isEmptyObj(this.uniqueMap)) {
      return!1
    }
    var e = this.uniqueMap, c = [], g, b;
    for(g in e) {
      if(e.hasOwnProperty(g)) {
        if(b = this.addUniqueIndices(e[g], g, a), b === !0) {
          c.push(g)
        }else {
          if(b instanceof Error) {
            g = 0;
            for(var f = c.length;g < f;g++) {
              this.removeUniqueIndices(e[c[g]], c[g], a)
            }
            return b
          }
        }
      }
    }
    return c.length > 0
  };
  b.updateUniqueMap = function(a, e, c) {
    if(Util.isNullOr(a, e, c) || Util.isEmptyObj(this.uniqueMap)) {
      return!1
    }
    var g, b = this.uniqueMap, f = [], d;
    for(g in b) {
      if(b.hasOwnProperty(g)) {
        d = this.updateUniqueIndex(b[g], g, a, e, c);
        if(d instanceof Error) {
          g = 0;
          for(var k = f.length;g < k;g++) {
            this.updateUniqueIndex(b[f[g]], f[g], a, c, e)
          }
          return d
        }
        d !== !1 && f.push(g)
      }
    }
    return f.length > 0
  };
  b.updateListUniqueMap = function(a, e, c) {
    if(Util.isEmptyArray(a) || Util.isEmptyArray(e) || Util.isEmptyArray(c) || Util.isEmptyObj(this.uniqueMap)) {
      return!1
    }
    if(a.length !== e.length || a.length !== c.length) {
      return this.grid.error("LENGTH_NOT_EQUAL")
    }
    var g, b = this.uniqueMap, f = [], d;
    for(g in b) {
      if(b.hasOwnProperty(g)) {
        d = this.updateUniqueIndices(b[g], g, a, e, c);
        if(d instanceof Error) {
          g = 0;
          for(var k = f.length;g < k;g++) {
            this.updateUniqueIndices(b[f[g]], f[g], a, c, e)
          }
          return d
        }
        d !== !1 && f.push(g)
      }
    }
    return f.length > 0
  };
  b.removeFromUniqueMap = function(a) {
    if(!Util.isEmptyObj(a) && !Util.isEmptyObj(this.uniqueMap)) {
      var e, c = this.uniqueMap;
      for(e in c) {
        c.hasOwnProperty(e) && this.removeUniqueIndex(c[e], e, a)
      }
    }
  };
  b.removeListFromUniqueMap = function(a) {
    if(!Util.isEmptyArray(a) && !Util.isEmptyObj(this.uniqueMap)) {
      var e, c = this.uniqueMap;
      for(e in c) {
        c.hasOwnProperty(e) && this.removeUniqueIndices(c[e], e, a)
      }
    }
  };
  b.addToIdMap = function(a) {
    if(Util.isNull(a)) {
      return!1
    }
    var e = this.idKey;
    switch(this.__idMode_m__) {
      case this.__consts_n__.__auto_a__:
        a.hasOwnProperty(e) === !1 && (a[e] = this.__increment_l__++);
      case this.__consts_n__.__given_b__:
      ;
      case this.__consts_n__.__composite_c__:
        return this.addUniqueIndex(this.__idToData_a__, e, a)
    }
    return!1
  };
  b.addListToIdMap = function(a) {
    if(Util.isEmptyArray(a)) {
      return!1
    }
    var e = this.idKey;
    switch(this.__idMode_m__) {
      case this.__consts_n__.__auto_a__:
        for(var c = 0, g, b = a.length;c < b;c++) {
          if((g = a[c]).hasOwnProperty(e) === !1) {
            g[e] = this.__increment_l__++
          }
        }
      ;
      case this.__consts_n__.__given_b__:
      ;
      case this.__consts_n__.__composite_c__:
        return this.addUniqueIndices(this.__idToData_a__, e, a)
    }
    return!1
  };
  b.updateIdMap = function(a, e, c) {
    if(Util.isNullOr(a, c) || Util.isEmptyObj(e)) {
      return!1
    }
    var g = this.idKey;
    switch(this.__idMode_m__) {
      case this.__consts_n__.__auto_a__:
        if(e.hasOwnProperty(g)) {
          return this.grid.error("NOT_MODIFIABLE", g)
        }
      ;
      case this.__consts_n__.__given_b__:
        return this.updateUniqueIndex(this.__idToData_a__, g, a, e, c);
      case this.__consts_n__.__composite_c__:
        if(e.hasOwnProperty(g)) {
          return this.grid.error("NOT_MODIFIABLE", g)
        }
        for(var c = this._options.__idColKeys_c__, b = c.length, f = 0;f < b;f++) {
          if(e.hasOwnProperty(c[f])) {
            for(var d = "", k = 0, j, m, l = {}, n = {}, f = n[g] = a[g];k < b;k++) {
              if(j = c[k], e.hasOwnProperty(j)) {
                if(Util.isEmptyString(m = e[j])) {
                  return this.grid.error("BAD_NULL", j)
                }
                d += "&" + m
              }else {
                d += "&" + a[j]
              }
            }
            a[g] = l[g] = d;
            if(f === d) {
              break
            }
            e = this.updateUniqueIndex(this.__idToData_a__, g, a, l, n);
            e instanceof Error && (a[g] = f);
            return e
          }
        }
    }
    return!1
  };
  b.updateListIdMap = function(a, e, c) {
    if(Util.isEmptyArray(a) || Util.isEmptyArray(e) || Util.isEmptyArray(c)) {
      return!1
    }
    var g = this.idKey, b = a.length, f = 0;
    switch(this.__idMode_m__) {
      case this.__consts_n__.__auto_a__:
        for(;f < b;f++) {
          if(e[f].hasOwnProperty(g)) {
            return this.grid.error("NOT_MODIFIABLE", g)
          }
        }
      ;
      case this.__consts_n__.__given_b__:
        return this.updateUniqueIndices(this.__idToData_a__, g, a, e, c);
      case this.__consts_n__.__composite_c__:
        for(var d = this.__idToData_a__, k, j, m = this._options.__idColKeys_c__, l = m.length, n, c = [], o = [], p = [], q = [], r, s, t, u;f < b;f++) {
          k = a[f];
          j = e[f];
          if(j.hasOwnProperty(g)) {
            r = 0;
            for(b = c.length;r < b;r++) {
              o[r][g] = c[r]
            }
            return this.grid.error("NOT_MODIFIABLE", g)
          }
          for(r = 0;r < l;r++) {
            if(j.hasOwnProperty(m[r])) {
              n = "";
              for(s = 0;s < l;s++) {
                if(t = m[s], j.hasOwnProperty(t)) {
                  if(Util.isEmptyString(u = j[t])) {
                    r = 0;
                    for(b = c.length;r < b;r++) {
                      o[r][g] = c[r]
                    }
                    return this.grid.error("BAD_NULL", t)
                  }
                  n += "&" + u
                }else {
                  n += "&" + k[t]
                }
              }
              k[g] !== n && (o.push(k), p.push({}), q.push({}), c.push(k[g]), k[g] = n)
            }
          }
        }
        if(o.length === 0) {
          break
        }
        a = this.updateUniqueIndices(d, g, o, p, q);
        if(a instanceof Error) {
          r = 0;
          for(b = c.length;r < b;r++) {
            o[r][g] = c[r]
          }
        }
        return a
    }
    return!1
  };
  b.removeFromIdMap = function(a) {
    var e = this.idKey, c = this.__idToData_a__, g;
    Util.isNotNull(a) && a.hasOwnProperty(e) && c.hasOwnProperty(g = a[e]) && delete c[g]
  };
  b.removeListFromIdMap = function(a) {
    if(!Util.isEmptyArray(a)) {
      for(var e = this.idKey, c = a.length, g = this.__idToData_a__, b, f, d = 0;d < c;d++) {
        f = a[d], f.hasOwnProperty(e) && g.hasOwnProperty(b = f[e]) && delete g[b]
      }
    }
  };
  b.fillTemp = function(a, e) {
    if(!Util.isNull(a)) {
      var c = this.grid.colDefMgr.getAll(), g = c.length, b, f, d = 0;
      if(e !== void 0 && e.isNew) {
        for(;d < g;d++) {
          f = c[d], b = f.key, f.nullOnCreate && Util.isNull(a[b]) && (a[b] = "J@H" + this.__increment_l__++)
        }
      }
    }
  };
  b.fillTempList = function(a, e) {
    if(!Util.isEmptyArray(a)) {
      var c = this.grid.colDefMgr.getAll(), g = c.length, b = a.length, d, h, k = 0;
      if(e !== void 0 && e.isNew) {
        for(;k < g;k++) {
          if(h = c[k], d = h.key, h.nullOnCreate) {
            for(h = 0;b;h++) {
              a[h][d] = "J@H" + this.__increment_l__++
            }
          }
        }
      }
    }
  };
  b.query = function(a) {
    if(typeof a === "string" && (a = $.trim(a), a.length !== 0)) {
      var e, c, g, b, d;
      e = a.toLowerCase();
      c = a.indexOf(" ");
      if(c !== -1 && (g = e.substring(0, c), e = e.indexOf(" where "), b = e > -1, c = $.trim(b ? a.substring(c + 1, e) : a.substring(c + 1)), c.length !== 0)) {
        switch(b && (d = $.trim(a.substring(e + 7))), g) {
          case "select":
            return this.executeSelect(c, d);
          case "insert":
            return this.executeInsert(c, d);
          case "update":
            return this.executeUpdate(c, d);
          case "delete":
            return this.executeDelete(c, d)
        }
      }
    }
  };
  b.parseWhere = function(a) {
    typeof a === "string" && $.trim(a)
  };
  b.executeSelect = function(a) {
    var a = Util.split(a, /[\s,]+/), e = a.length, c = 0, g = {}, b = this.all, d = [];
    if(e === 0) {
      return d
    }
    for(;c < e;c++) {
      if(a[c] === "*") {
        break
      }
      g[a[c]] = !0
    }
    c = 0;
    for(e = b.length;c < e;c++) {
      d.push(Util.clone(b[c], g))
    }
    return d
  };
  b.parse = function(a, e) {
    if(Util.isNull(a)) {
      return!1
    }
    for(var c = this.grid.colDefMgr.getAll(), g = c.length, b, d, h = e !== void 0 && e.isNew, k = 0;k < g;k++) {
      if(d = c[k], !h || !d.nullOnCreate) {
        if(Util.isFunction(b = d.parser)) {
          if(d = d.key, a.hasOwnProperty(d)) {
            try {
              a[d] = b(a[d], a)
            }catch(j) {
              return Util.isNull(a) ? this.grid.error("PARSE_ERROR", a, d) : this.grid.error("PARSE_ERROR", a[d], d)
            }
          }
        }
      }
    }
    return!0
  };
  b.parseList = function(a, e) {
    if(Util.isNull(a)) {
      return!1
    }
    if(a.length === 0) {
      return!0
    }
    for(var c = this.grid.colDefMgr.getAll(), g = c.length, b = a.length, d, h, k = 0, j, m = e !== void 0 && e.isNew, l;k < g;k++) {
      if(h = c[k], !m || !h.nullOnCreate) {
        if(Util.isFunction(d = h.parser)) {
          h = h.key;
          try {
            for(j = 0;j < b;j++) {
              l = a[j], l.hasOwnProperty(h) && (l[h] = d(l[h], l))
            }
          }catch(n) {
            return Util.isNull(l) ? this.grid.error("PARSE_ERROR", l, h) : this.grid.error("PARSE_ERROR", l[h], h)
          }
        }
      }
    }
    return!0
  };
  b.validate = function(a, e) {
    if(Util.isNull(a)) {
      return!1
    }
    for(var c = this.grid.colDefMgr.getAll(), g = c.length, b, d, h, k, j, m, l, n = e !== void 0 && e.isNew, o = 0;o < g;o++) {
      if(b = c[o], d = b.key, j = void 0, k = h = !1, !n || !b.nullOnCreate) {
        if(b.notNull === !0) {
          if(a.hasOwnProperty(d) === !1 || Util.isEmptyString(j = a[d])) {
            return this.grid.error("BAD_NULL", d)
          }
          m = j.toString()
        }else {
          a.hasOwnProperty(d) === !1 || Util.isNull(j = a[d]) ? k = h = !0 : j === "" && (k = !0), m = h === !1 ? j.toString() : ""
        }
        if(h === !1) {
          if(Util.isNotNull(l = b.max) && k === !1 && j > l) {
            return this.grid.error("BIGGER_THAN", j, d, l)
          }
          if(Util.isNotNull(l = b.min) && k === !1 && j < l) {
            return this.grid.error("SMALLER_THAN", j, d, l)
          }
          if(Util.isNotNull(l = b.length)) {
            if(k === !0 || m.length !== l) {
              return this.grid.error("WRONG_LENGTH", m, l, d)
            }
          }else {
            if(Util.isNotNull(l = b.maxlength) && k === !1 && m.length > l) {
              return this.grid.error("DATA_TOO_LONG", m, d, l)
            }
            if(Util.isNotNull(l = b.minlength)) {
              if(k === !0 || m.length < l) {
                return this.grid.error("DATA_TOO_SHORT", m, d, l)
              }
            }
          }
        }
        if(Util.isFunction(b = b.validator)) {
          try {
            if(b(j, a, m, h, k) !== !0) {
              return this.grid.error("WRONG_VALUE", m, d)
            }
          }catch(p) {
            return this.grid.error("WRONG_VALUE", m, d)
          }
        }
      }
    }
    return!0
  };
  b.validateList = function(a, e) {
    if(Util.isNull(a)) {
      return!1
    }
    if(a.length === 0) {
      return!0
    }
    for(var c = this.grid.colDefMgr.getAll(), g = c.length, b = a.length, d, h, k = 0, j, m, l, n, o, p = e !== void 0 && e.isNew, q = [], r = [];k < g;k++) {
      if(d = c[k], h = d.key, m = {}, l = {}, q.length = 0, r.length = 0, !p || !d.nullOnCreate) {
        if(d.notNull === !0) {
          for(j = 0;j < b;j++) {
            if(a[j].hasOwnProperty(h) === !1 || Util.isEmptyString(n = a[j][h])) {
              return this.grid.error("BAD_NULL", h)
            }
            q.push(n);
            r.push(n.toString())
          }
        }else {
          for(j = 0;j < b;j++) {
            n = void 0, a[j].hasOwnProperty(h) === !1 || Util.isNull(n = a[j][h]) ? (m[j] = !0, l[j] = !0) : n === "" && (l[j] = !0), q.push(n), m.hasOwnProperty(j) ? r.push("") : r.push(n.toString())
          }
        }
        if(Util.isNotNull(o = d.max)) {
          for(j = 0;j < b;j++) {
            if(l.hasOwnProperty(j) === !1 && q[j] > o) {
              return this.grid.error("BIGGER_THAN", q[j], h, o)
            }
          }
        }
        if(Util.isNotNull(o = d.min)) {
          for(j = 0;j < b;j++) {
            if(l.hasOwnProperty(j) === !1 && q[j] < o) {
              return this.grid.error("SMALLER_THAN", q[j], h, o)
            }
          }
        }
        if(Util.isNotNull(o = d.length)) {
          for(j = 0;j < b;j++) {
            if(m.hasOwnProperty(j) === !1 && (l.hasOwnProperty(j) || r[j].length !== o)) {
              return this.grid.error("WRONG_LENGTH", r[j], o, h)
            }
          }
        }else {
          if(Util.isNotNull(o = d.maxlength)) {
            for(j = 0;j < b;j++) {
              if(l.hasOwnProperty(j) === !1 && r[j].length > o) {
                return this.grid.error("DATA_TOO_LONG", r[j], h, o)
              }
            }
          }
          if(Util.isNotNull(o = d.minlength)) {
            for(j = 0;j < b;j++) {
              if(m.hasOwnProperty(j) === !1 && (l.hasOwnProperty(j) || r[j].length < o)) {
                return this.grid.error("DATA_TOO_SHORT", r[j], h, o)
              }
            }
          }
        }
        if(Util.isFunction(d = d.validator)) {
          try {
            for(j = 0;j < b;j++) {
              if(d(q[j], a[j], r[j], m.hasOwnProperty(j), l.hasOwnProperty(j)) !== !0) {
                return this.grid.error("WRONG_VALUE", r[j], h)
              }
            }
          }catch(s) {
            return this.grid.error("WRONG_VALUE", r[j], h)
          }
        }
      }
    }
    return!0
  };
  b.makeCompositeKey = function(a, e) {
    if(!(this.__idMode_m__ !== this.__consts_n__.__composite_c__ || Util.isNull(a))) {
      if(e === !0 || a.hasOwnProperty(this.idKey) === !1) {
        for(var c = this._options.__idColKeys_c__, b = c.length, d = 0, f = "";d < b;d++) {
          f += "&" + a[c[d]]
        }
        a[this.idKey] = f
      }
    }
  };
  b.makeCompositeKeyList = function(a, e) {
    if(!(this.__idMode_m__ !== this.__consts_n__.__composite_c__ || a.length === 0)) {
      var c = this.idKey, b = a.length, d = this._options.__idColKeys_c__, f = d.length, h, k = 0, j, m;
      if(e === !0) {
        for(;k < b;k++) {
          h = a[k];
          m = "";
          for(j = 0;j < f;j++) {
            m += "&" + h[d[j]]
          }
          h[c] = m
        }
      }else {
        for(;k < b;k++) {
          if((h = a[k]).hasOwnProperty(c) === !1) {
            m = "";
            for(j = 0;j < f;j++) {
              m += "&" + h[d[j]]
            }
            h[c] = m
          }
        }
      }
    }
  };
  b.map = function(a) {
    if(!Util.isNull(a)) {
      var e = this.__idToData_a__, c = this.idKey, b;
      this.makeCompositeKey(a);
      if(a.hasOwnProperty(c) && e.hasOwnProperty(b = a[c])) {
        return e[b]
      }
    }
  };
  b.mapList = function(a) {
    if(Util.isEmptyArray(a)) {
      return{mapped:[], unmapped:[]}
    }
    this.makeCompositeKeyList(a);
    for(var e = [], c = [], b = this.idKey, d = this.__idToData_a__, f = a.length, h = 0, k, j;h < f;h++) {
      (k = a[h]).hasOwnProperty(b) && d.hasOwnProperty(j = k[b]) ? e.push(d[j]) : c.push(k)
    }
    return{mapped:e, unmapped:c}
  };
  b.getById = function(a) {
    if(Util.isNotNull(a) && this.__idToData_a__.hasOwnProperty(a)) {
      return this.__idToData_a__[a]
    }
  };
  b.getByIdx = function(a) {
    if(Util.isNotNull(a) && this.datalist.hasOwnProperty(a)) {
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
    return Util.isNotNull(a) && this.__idToIdx_b__.hasOwnProperty(a) ? this.__idToIdx_b__[a] : -1
  };
  b.getIdxByNode = function(a) {
    return this.getIdxById(this.getIdByNode(a))
  };
  b.getId = function(a) {
    if(Util.isNotNull(a) && a.hasOwnProperty(this.idKey)) {
      return a[this.idKey]
    }
  };
  b.getIdByIdx = function(a) {
    return this.getId(this.getByIdx(a))
  };
  b.getIdByNode = function(a) {
    if(Util.isNotNull(a)) {
      return a.getAttribute("i")
    }
  };
  b.__reidxFrom_f__ = function(a) {
    Util.isNull(a) && (a = 0);
    for(var e = this.datalist, c = e.length, b = this.idKey, d = this.__idToIdx_b__;a < c;a++) {
      d[e[a][b]] = a
    }
  };
  b.__reidx_g__ = function() {
    this.__idToIdx_b__ = {};
    this.__reidxFrom_f__()
  };
  b.has = function(a) {
    return this.hasById(this.getId(a))
  };
  b.hasById = function(a) {
    return Util.isNotNull(a) ? this.__idToIdx_b__.hasOwnProperty(a) : !1
  };
  b.contains = function(a) {
    return this.containsById(this.getId(a))
  };
  b.containsById = function(a) {
    return Util.isNotNull(a) ? this.__idToData_a__.hasOwnProperty(a) : !1
  };
  b.set = function(a) {
    if(this.all === a || Util.isEmptyArray(a) && this.all === 0) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange");
    this.grid.event.trigger("onBeforeSetDatalist", [this.all, a]);
    this.cleanList(this.all);
    var e, c = this.uniqueMap;
    for(e in c) {
      c.hasOwnProperty(e) && (c[e] = {})
    }
    this.__idToData_a__ = {};
    this.all = [];
    this.__history_e__.length = 0;
    this.__redoHistory_q__.length = 0;
    Util.isNull(a) && (a = []);
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
    this.all = a;
    this.grid.event.trigger("onAfterSetDatalist", [a]);
    this.grid.event.trigger("onDataChange");
    this.refresh();
    return!0
  };
  b.add = function(a, e) {
    if(Util.isNull(a) || Util.isNotNull(this.map(a))) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange");
    this.fillTemp(a, e);
    var c;
    if((c = this.parse(a, e)) instanceof Error) {
      return c
    }
    if((c = this.validate(a, e)) instanceof Error) {
      return c
    }
    if((c = this.addToUniqueMap(a)) instanceof Error) {
      return c
    }
    if((c = this.addToIdMap(a)) instanceof Error) {
      return c
    }
    this.all.push(a);
    if(Util.isNull(e) || e.undo !== !0) {
      this.__history_e__.push({__action_a__:this.__consts_n__.__add_e__, __target_b__:a}), this.__redoHistory_q__.length = 0
    }
    this.grid.event.trigger("onAddDatarow", [a, e]);
    this.grid.event.trigger("onDataChange");
    (e === void 0 || e.noRefresh !== !0) && this.refresh(e);
    return!0
  };
  b.addList = function(a, e) {
    if(Util.isEmptyArray(a)) {
      return!1
    }
    var c = this.mapList(a).unmapped;
    if(c.length === 0) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange");
    this.fillTempList(a, e);
    var b;
    if((b = this.parseList(c, e)) instanceof Error) {
      return b
    }
    if((b = this.validateList(c, e)) instanceof Error) {
      return b
    }
    if((b = this.addListToUniqueMap(c)) instanceof Error) {
      return b
    }
    if((b = this.addListToIdMap(c)) instanceof Error) {
      return b
    }
    this.all.pushList(c);
    if(Util.isNull(e) || e.undo !== !0) {
      this.__history_e__.push({__action_a__:this.__consts_n__.__addList_f__, __target_b__:c}), this.__redoHistory_q__.length = 0
    }
    this.grid.event.trigger("onAddDatalist", [c, e]);
    this.grid.event.trigger("onDataChange");
    (e === void 0 || e.noRefresh !== !0) && this.refresh(e);
    return!0
  };
  b.updateByKey = function(a, e, c, b) {
    var d = {};
    d[e] = c;
    return this.update(a, d, b)
  };
  b.update = function(a, e, c) {
    if(Util.isNullOr(a, e)) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange");
    this.grid.event.trigger("onBeforeUpdateDatarow", [a, e]);
    var b = {}, d;
    for(d in e) {
      e.hasOwnProperty(d) && (a[d] === e[d] ? delete e[d] : (b[d] = a[d], a[d] = e[d]))
    }
    if(Util.isEmptyObj(b)) {
      return!1
    }
    if((d = this.parse(a, c)) instanceof Error) {
      return this.__rollback_o__(a, b), d
    }
    if((d = this.validate(a, c)) instanceof Error) {
      return this.__rollback_o__(a, b), d
    }
    if((d = this.updateUniqueMap(a, e, b)) instanceof Error) {
      return this.__rollback_o__(a, b), d
    }
    if((d = this.updateIdMap(a, e, b)) instanceof Error) {
      return this.__rollback_o__(a, b), d
    }
    d !== !1 && this.grid.event.trigger("onIdChange", [a, d, a[this.idKey]]);
    if(Util.isNull(c) || c.undo !== !0) {
      this.__history_e__.push({__action_a__:this.__consts_n__.__update_g__, __target_b__:a, __before_c__:b, __change_d__:e}), this.__redoHistory_q__.length = 0
    }
    this.grid.event.trigger("onUpdateDatarow", [a, e, b, c]);
    this.grid.event.trigger("onDataChange");
    (c === void 0 || c.noRefresh !== !0) && this.refresh(c);
    return!0
  };
  b.updateList = function(a, e) {
    if(Util.isEmptyArray(a)) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange");
    this.grid.event.trigger("onBeforeUpdateDatalist", [a]);
    for(var c = [], b = [], d = [], f, h, k, j = a.length, m = 0, l;m < j;m++) {
      h = {};
      f = a[m].datarow;
      k = a[m].change;
      for(l in k) {
        k.hasOwnProperty(l) && (f[l] === k[l] ? delete k[l] : (h[l] = f[l], f[l] = k[l]))
      }
      Util.isNotEmptyObj(h) && (c.push(f), b.push(h), d.push(k))
    }
    if(c.length === 0) {
      return!1
    }
    if((f = this.parseList(c, e)) instanceof Error) {
      return this.__rollbackList_p__(c, b), f
    }
    if((f = this.validateList(c, e)) instanceof Error) {
      return this.__rollbackList_p__(c, b), f
    }
    if((f = this.updateListUniqueMap(c, d, b)) instanceof Error) {
      return this.__rollbackList_p__(c, b), f
    }
    if((f = this.updateListIdMap(c, d, b)) instanceof Error) {
      return this.__rollbackList_p__(c, b), f
    }
    f !== !1 && this.grid.event.trigger("onIdListChange", [f.list, f.befores, this.idKey]);
    if(Util.isNull(e) || e.undo !== !0) {
      this.__history_e__.push({__action_a__:this.__consts_n__.__updateList_h__, __target_b__:c, __before_c__:b, __change_d__:d}), this.__redoHistory_q__.length = 0
    }
    this.grid.event.trigger("onUpdateDatalist", [c, d, b, e]);
    this.grid.event.trigger("onDataChange");
    (e === void 0 || e.noRefresh !== !0) && this.refresh(e);
    return!0
  };
  b.__rollback_o__ = function(a, e) {
    for(var c in e) {
      e.hasOwnProperty(c) && (a[c] = e[c])
    }
  };
  b.__rollbackList_p__ = function(a, e) {
    for(var c = a.length, b = 0, d, f, h;b < c;b++) {
      for(h in d = a[b], f = e[b], f) {
        f.hasOwnProperty(h) && (d[h] = f[h])
      }
    }
  };
  b.remove = function(a, e) {
    if(Util.isNull(a)) {
      return!1
    }
    var c = this.map(a);
    if(Util.isNull(c)) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange");
    this.removeFromIdMap(c);
    this.removeFromUniqueMap(c);
    this.all.remove(c);
    this.removeId(c);
    if(Util.isNull(e) || e.undo !== !0) {
      this.__history_e__.push({__action_a__:this.__consts_n__.__remove_i__, __target_b__:c}), this.__redoHistory_q__.length = 0
    }
    this.grid.event.trigger("onRemoveDatarow", [c, e]);
    this.grid.event.trigger("onDataChange");
    (e === void 0 || e.noRefresh !== !0) && this.refresh(e);
    return!0
  };
  b.removeList = function(a, e) {
    if(Util.isEmptyArray(a)) {
      return!1
    }
    var c = this.mapList(a).mapped;
    if(c.length === 0) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange");
    this.removeListFromIdMap(c);
    this.removeListFromUniqueMap(c);
    this.all.removeList(c);
    this.cleanList(c);
    if(Util.isNull(e) || e.undo !== !0) {
      this.__history_e__.push({__action_a__:this.__consts_n__.__removeList_j__, __target_b__:c}), this.__redoHistory_q__.length = 0
    }
    this.grid.event.trigger("onRemoveDatalist", [c, e]);
    this.grid.event.trigger("onDataChange");
    (e === void 0 || e.noRefresh !== !0) && this.refresh(e);
    return!0
  };
  b.__keydownCanvas_ba__ = function(a) {
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
    if(this.__history_e__.length === 0) {
      return!1
    }
    var a = this.__history_e__.pop();
    this.__redoHistory_q__.push(a);
    var e = a.__target_b__, c = a.__before_c__;
    switch(a.__action_a__) {
      case this.__consts_n__.__add_e__:
        return this.remove(e, {undo:!0});
      case this.__consts_n__.__addList_f__:
        return this.removeList(e, {undo:!0});
      case this.__consts_n__.__update_g__:
        return this.update(e, c, {undo:!0});
      case this.__consts_n__.__updateList_h__:
        for(var a = [], b = 0, d = e.length;b < d;b++) {
          a.push({datarow:e[b], change:c[b]})
        }
        return this.updateList(a, {undo:!0});
      case this.__consts_n__.__remove_i__:
        return this.add(e, {undo:!0});
      case this.__consts_n__.__removeList_j__:
        return this.addList(e, {undo:!0})
    }
  };
  b.redo = function() {
    if(this.__redoHistory_q__.length === 0) {
      return!1
    }
    var a = this.__redoHistory_q__.pop();
    this.__history_e__.push(a);
    var e = a.__target_b__, c = a.__change_d__;
    switch(a.__action_a__) {
      case this.__consts_n__.__add_e__:
        return this.add(e, {undo:!0});
      case this.__consts_n__.__addList_f__:
        return this.addList(e, {undo:!0});
      case this.__consts_n__.__update_g__:
        return this.update(e, c, {undo:!0});
      case this.__consts_n__.__updateList_h__:
        for(var a = [], b = 0, d = e.length;b < d;b++) {
          a.push({datarow:e[b], change:c[b]})
        }
        return this.updateList(a, {undo:!0});
      case this.__consts_n__.__remove_i__:
        return this.remove(e, {undo:!0});
      case this.__consts_n__.__removeList_j__:
        return this.removeList(e, {undo:!0})
    }
  };
  b.equals = function(a, e) {
    if(Util.isNullOr(a, e)) {
      return!1
    }
    if(a === e) {
      return!0
    }
    this.__idMode_m__ === this.__consts_n__.__composite_c__ && (this.makeCompositeKey(a), this.makeCompositeKey(e));
    var c = this.idKey;
    return Util.isNull(a[c]) || Util.isNull(e[c]) ? !1 : a[c] === e[c]
  };
  b.getReal = function() {
    var a = this.__consts_n__.__notReal_d__;
    return this.all.filter(function(e) {
      return e.hasOwnProperty(a) === !1
    })
  };
  b.filterReal = function(a) {
    var e = this.__consts_n__.__notReal_d__;
    return a.filter(function(a) {
      return a.hasOwnProperty(e) === !1
    })
  };
  b.isReal = function(a) {
    return Util.isNotNull(a) && a.hasOwnProperty(this.__consts_n__.__notReal_d__) === !1
  };
  b.dropNonReal = function(a) {
    if(!Util.isEmptyArray(a)) {
      for(var e = this.__consts_n__.__notReal_d__, c = a.length - 1;c >= 0;c--) {
        a[c].hasOwnProperty(e) && (delete a[c][e], a.removeAt(c))
      }
    }
  };
  b.removeIdCol = function(a) {
    if(!(this.__idMode_m__ === this.__consts_n__.__given_b__ || Util.isEmptyArray(a))) {
      for(var e = this.idKey, c = 0, b = a.length;c < b;c++) {
        a[c].hasOwnProperty(e) && delete a[c][e]
      }
    }
  };
  b.removeId = function(a) {
    Util.isNotNull(a) && this.__idMode_m__ !== this.__consts_n__.__given_b__ && a.hasOwnProperty(this.idKey) && delete a[this.idKey]
  };
  b.cleanList = function(a) {
    Util.isEmptyArray(a) || (this.removeIdCol(a), this.dropNonReal(a))
  };
  b.purify = function(a) {
    if(a !== void 0) {
      a = this.all
    }
    if(Util.isEmptyArray(a)) {
      return[]
    }
    for(var e = [], c = a.length, b = 0, d, f, h = this.__consts_n__.__notReal_d__;b < c;b++) {
      if((f = a[b]).hasOwnProperty(h) === !1) {
        for(d in e.push({}), f) {
          f.hasOwnProperty(d) && f.hasOwnProperty(d) && d.substring(0, 3)
        }
      }
    }
    return e
  };
  b.setSorter = function(a) {
    this.grid.event.trigger("onChangeSorter", [this.__sorter_h__, a]);
    this.__sorter_h__ = a
  };
  b.__sort_i__ = function(a) {
    Util.isNull(a) ? a = this.__sorter_h__ : this.setSorter(a);
    if(!Util.isNull(a)) {
      var e = this.all;
      this.grid.event.trigger("onBeforeSort", [e]);
      Util.isNotNull(a.comparator) ? (e.sort(a.comparator), a.desc && e.reverse()) : Util.isNotNull(a.lexi) && this.constructor.__lexi_a__(e, a.lexi, a.desc);
      this.grid.event.trigger("onAfterSort", [e])
    }
  };
  b.addFilter = function(a) {
    this.__filters_r__.push(a);
    this.refresh()
  };
  b.removeFilter = function(a) {
    var e = this.__filters_r__.length;
    this.__filters_r__.remove(a);
    e !== this.__filters_r__.length && this.refresh()
  };
  b.__filter_j__ = function() {
    var a = this.datalist, e = this.failed, c = 0, b = this.__filters_r__.length, d, f;
    this.grid.event.trigger("onBeforeFilter", [a, e]);
    a.length = 0;
    a.pushList(this.all);
    for(e.length = 0;c < b;c++) {
      d = this.__filters_r__[c];
      for(f = a.length - 1;f >= 0;f--) {
        d(a[f]) || (e.push(a[f]), a.removeAt(f))
      }
    }
    this.grid.event.trigger("onFilter", [a, e]);
    this.grid.event.trigger("onAfterFilter", [a, e])
  };
  b.__finish_k__ = function(a) {
    this.__reidx_g__();
    this.grid.event.trigger("onAfterRefresh", [a])
  };
  b.refresh = function(a) {
    this.grid.event.trigger("onBeforeRefresh");
    a === void 0 ? this.__sort_i__() : a.noSort !== !0 && this.__sort_i__(a.sorter);
    (a === void 0 || a.noFilter !== !0) && this.__filter_j__();
    this.__finish_k__(a)
  };
  b.exportRowToArray = function(a, e) {
    if(!(a in this.datalist)) {
      return null
    }
    e || (e = this.grid.colDefMgr.getKeys());
    for(var c = this.datalist[a], b = [], d, f = 0, h = e.length;f < h;f++) {
      d = e[f], b.push(d in c ? c[d] : null)
    }
    return b
  };
  b.exportToArray = function(a, e, c) {
    a || (a = this.grid.colDefMgr.getKeys());
    for(var e = this.datalist.slice(e, c), b = [], d, f, h = 0, k = e.length, j, m = a.length;h < k;h++) {
      d = e[h];
      j = 0;
      for(c = [];j < m;j++) {
        f = a[j], c.push(f in d ? d[f] : null)
      }
      b.push(c)
    }
    return b
  };
  d.__lexi_a__ = function(a, e, c) {
    var b = Object.prototype.toString;
    Object.prototype.toString = Util.isFunction(e) ? e : function() {
      return this[e]
    };
    a.sort();
    Object.prototype.toString = b;
    c && a.reverse()
  }
})();
jx.grid.EventManager = {};
(function() {
  function d(a) {
    this.mid = a.mid;
    a.grid.event = this;
    this.__map_a__ = {}
  }
  goog.exportSymbol("jx.grid.EventManager", d);
  JGM._add("EventManager", d);
  d.getInstance = function(a) {
    return new d(a)
  };
  var b = d.prototype;
  b.destroy = function() {
    var a, e = this.__map_a__;
    for(a in e) {
      e.hasOwnProperty(a) && JGM.__deleteArray_r__(e, a)
    }
    JGM._destroy(this, {name:"EventManager", path:"event", map:"__map_a__"})
  };
  b.register = function(a, e, c) {
    if(Util.isString(a)) {
      this.__parseAndAdd_b__(a, e, c)
    }else {
      if(Util.isNotNull(a.e)) {
        this.__parseAndAdd_b__(a.e, a.f, a.t)
      }else {
        for(var b, e = a.length, d;b < e;b++) {
          Util.isNotNull(d = a[b]) && this.__parseAndAdd_b__(d.e, d.f, d.t)
        }
      }
    }
  };
  b.bind = function(a, e, c) {
    if(Util.isString(a)) {
      this.__parseAndAdd_b__(a, e, c)
    }else {
      for(var b in a) {
        a.hasOwnProperty(b) && this.__parseAndAdd_b__(b, a[b], e)
      }
    }
  };
  b.__parseAndAdd_b__ = function(a, e, c) {
    Util.isNull(c) && (c = window);
    var a = Util.split(a), b = a.length, d = 0;
    if(Util.isFunction(e)) {
      for(;d < b;d++) {
        this.__addHandler_c__(a[d], e, c)
      }
    }else {
      if(Util.isString(e)) {
        for(var e = Util.split(e), f = e.length, h, k;d < b;d++) {
          h = a[d];
          for(k = 0;k < f;k++) {
            this.__addHandler_c__(h, c[e[k]], c)
          }
        }
      }else {
        for(f = e.length;d < b;d++) {
          h = a[d];
          for(k = 0;k < f;k++) {
            this.__addHandler_c__(h, e[k], c)
          }
        }
      }
    }
  };
  b.__addHandler_c__ = function(a, e, c) {
    this.__map_a__.hasOwnProperty(a) || (this.__map_a__[a] = []);
    this.__map_a__[a].push({fn:e, target:c})
  };
  b.unregister = function(a, e) {
    var c = this.__map_a__;
    if(c.hasOwnProperty(a)) {
      var b = c[a];
      if(Util.isNull(e)) {
        b.length = 0, delete c[a]
      }else {
        for(var d = 0, f = b.length;d < f;d++) {
          if(b[d].fn === e) {
            b.removeAt(d);
            b.length === 0 && delete c[a];
            break
          }
        }
      }
    }
  };
  b.trigger = function(a, e, c) {
    for(var b, d, f = this.__map_a__, h = [], a = Util.split(a), k = a.length, j = Util.isEmptyArray(e), m = Util.isFunction(c), l, n = 0;n < k;n++) {
      if(b = a[n], f.hasOwnProperty(b) && (b = f[b], d = b.length, d !== 0)) {
        if(l = 0, m) {
          var o;
          if(j) {
            for(;l < d;l++) {
              o = b[l].fn.call(b[l].target), c(o) && h.push(o)
            }
          }else {
            for(;l < d;l++) {
              o = b[l].fn.apply(b[l].target, e), c(o) && h.push(o)
            }
          }
        }else {
          if(j) {
            for(;l < d;l++) {
              h.push(b[l].fn.call(b[l].target))
            }
          }else {
            for(;l < d;l++) {
              h.push(b[l].fn.apply(b[l].target, e))
            }
          }
        }
      }
    }
    return h
  };
  b.triggerInvalid = function(a, e) {
    return this.trigger(a, e, function(a) {
      return a === !1
    }).length !== 0
  };
  b.sendToBack = function(a, e) {
    for(var c = this.__map_a__[a], b = c.length, d, f = -1, h = 0;h < b;h++) {
      if(c[h].fn === e) {
        f = h;
        d = c[h];
        break
      }
    }
    f > -1 && (c.removeAt(h), c.push(d))
  };
  b.sendToFront = function(a, e) {
    for(var c = this.__map_a__[a], b = c.length, d, f = -1, h = 0;h < b;h++) {
      if(c[h].fn === e) {
        f = h;
        d = c[h];
        break
      }
    }
    f > -1 && (c.removeAt(h), c.unshift(d))
  }
})();
jx.grid.ColumnManager = {};
(function() {
  function d(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    this.grid.colDefMgr = this;
    this._options = JGM.__extend_e__({__colDef_a__:{key:void 0, name:"", colClass:void 0, defaultValue:void 0, inputOnCreate:void 0, style:"", headerStyle:"", width:80, minW:30, maxW:void 0, editor:void 0, sorter:void 0, hidden:!1, sumRenderer:void 0, tooltipEnabled:!1, resizable:!1, renderer:JGM.ViewportManager.__renderer_AD__, rendererInput:!1, noTitle:!1, noName:!1, title:void 0, noSearch:!1, filter:void 0, parser:void 0, validator:void 0}}, a.options, {colDef:"__colDef_a__"});
    this.__colDefs_a__ = [];
    this.__filtered_b__ = [];
    this.__keyToDef_c__ = {};
    this.__keyToIdx_d__ = {};
    this.__init(a)
  }
  goog.exportSymbol("jx.grid.ColumnManager", d);
  JGM._add("ColDefManager", d);
  d.getInstance = function(a) {
    return new d(a)
  };
  var b = d.prototype;
  b.__init = function(a) {
    this.grid.event.bind("onDestroy", this.__destroy_aA__, this);
    this.set(a.colDefs)
  };
  b.__destroy_aA__ = function() {
    JGM._destroy(this, {name:"ColDefManager", path:"colDefMgr", property:"__colDefs_a__", map:"__keyToIdx_d__ __keyToDef_c__ _options", array:"__filtered_b__"})
  };
  b.getAll = function() {
    return this.__colDefs_a__
  };
  b.set = function(a) {
    if(this.__colDefs_a__ === a || Util.areEqualArrays(this.__colDefs_a__, a)) {
      return a
    }
    if(Util.isNull(a)) {
      a = []
    }else {
      var e = a.filter(function(a) {
        return Util.isNotNull(a)
      });
      a.length = 0;
      a.pushList(e)
    }
    this.grid.event.trigger("onBeforeSetColDefs", [this.__colDefs_a__, a]);
    this.__colDefs_a__ = [];
    this.__filtered_b__.length = 0;
    this.__keyToIdx_d__ = {};
    this.__keyToDef_c__ = {};
    this.grid.event.trigger("onEmptyColDefs");
    for(var e = 0, c = a.length, b = this.__keyToDef_c__, d, f;e < c;e++) {
      d = a[e];
      if(!d.hasOwnProperty("key")) {
        return this.__keyToDef_c__ = {}, this.grid.error("KEY_UNDEFINED", e)
      }
      f = d.key;
      if(Util.isEmptyString(f)) {
        return this.__keyToDef_c__ = {}, this.grid.error("BAD_NULL", e)
      }
      if(b.hasOwnProperty(f)) {
        return this.__keyToDef_c__ = {}, this.grid.error("DUP_KEY", f)
      }
      b[f] = d
    }
    this.__colDefs_a__ = a;
    for(e = 0;e < c;e++) {
      this.__extend_i__(a[e])
    }
    this.grid.event.trigger("onAfterSetColDefs", [a, this.__filter_e__()]);
    return a
  };
  b.push = function(a) {
    return this.addAt(this.__filtered_b__.length, a)
  };
  b.addAt = function(a, e) {
    if(!Util.isNull(e)) {
      var c = e.key, b = this.__keyToDef_c__, d = this.__filtered_b__;
      Util.isNull(a) || a > d.length ? a = d.length : a < 0 && (a += d.length);
      this.grid.event.trigger("onBeforeAddColDef", [e]);
      if(Util.isNull(c)) {
        return this.grid.error("KEY_UNDEFINED")
      }
      if(b.hasOwnProperty(c)) {
        return this.grid.error("DUP_KEY", c)
      }
      this.__colDefs_a__.addAt(a, this.__extend_i__(b[c] = e));
      e.hidden !== !0 && (d.addAt(a, e), this.__reidx_f__());
      this.grid.event.trigger("onAfterAddColDef", [e, a]);
      return d.length
    }
  };
  b.__extend_i__ = function(a) {
    if(!Util.isNull(a)) {
      var e = {};
      $.extend(!0, e, this._options.__colDef_a__);
      $.extend(!0, e, a);
      $.extend(!0, a, e);
      a.sorter = e = d.sorter(a.sorter, a.key);
      if(Util.isNotNull(e)) {
        e.key = a.key
      }
      return a
    }
  };
  b.hide = function(a) {
    var e = this.__filtered_b__[a];
    if(!Util.isNull(e)) {
      return e.hidden = !0, this.__filtered_b__.removeAt(a), this.__reidx_f__(), this.grid.event.trigger("onHideCol", [e, a]), e
    }
  };
  b.show = function(a) {
    if(!Util.isNull(a)) {
      if(!Util.isString(a)) {
        if(!Util.isObject(a)) {
          return
        }
        a = a.key
      }
      var e = this.__keyToDef_c__;
      if(e.hasOwnProperty(a)) {
        if(this.__keyToIdx_d__.hasOwnProperty(a)) {
          return e[a]
        }
        e = e[a];
        e.hidden = !1;
        this.__filter_e__();
        this.__reidx_f__();
        this.grid.event.trigger("onShowCol", [e, this.__keyToIdx_d__[a]]);
        return e
      }
    }
  };
  b.__filter_e__ = function() {
    this.__filtered_b__ = this.__colDefs_a__.filter(function(a) {
      return a.hidden !== !0
    });
    this.__reidx_f__();
    return this.__filtered_b__
  };
  b.__reidx_f__ = function() {
    this.__keyToIdx_d__ = {};
    return this.__reidxFrom_g__()
  };
  b.__reidxFrom_g__ = function(a) {
    Util.isNull(a) && (a = 0);
    for(var e = this.__filtered_b__, c = e.length, b = this.__keyToIdx_d__;a < c;a++) {
      b[e[a].key] = a
    }
    return b
  };
  b.get = function(a) {
    if(Util.isNull(a)) {
      return this.__filtered_b__
    }
    if(this.__filtered_b__.hasOwnProperty(a)) {
      return this.__filtered_b__[a]
    }
  };
  b.getByKey = function(a) {
    if(Util.isNotNull(a) && this.__keyToDef_c__.hasOwnProperty(a)) {
      return this.__keyToDef_c__[a]
    }
  };
  b.length = function() {
    return this.__filtered_b__.length
  };
  b.getIdxByKey = function(a) {
    return this.__keyToIdx_d__.hasOwnProperty(a) ? this.__keyToIdx_d__[a] : -1
  };
  b.getIdx = function(a) {
    return Util.isNotNull(a) && this.__keyToIdx_d__.hasOwnProperty(a.key) ? this.__keyToIdx_d__[a.key] : -1
  };
  b.sortByKey = function(a) {
    this.__filtered_b__.length = 0;
    this.__keyToIdx_d__ = {};
    for(var e = 0, c = a.length, b = this.__filtered_b__, d = this.__keyToIdx_d__, f = this.__keyToDef_c__;e < c;e++) {
      b.push(f[a[e]]), d[a[e]] = e
    }
    this.grid.event.trigger("onReorderCols", a);
    return this.__filtered_b__
  };
  b.getKeys = function() {
    return this.__filtered_b__.map(function(a) {
      return a.key
    })
  };
  d.sorter = function(a, e, c) {
    c = c ? !0 : !1;
    if(a === "text") {
      return{lexi:e, on:c, key:e}
    }
    if(a === "int") {
      return{on:c, comparator:function(a, c) {
        var b = a[e], d = c[e];
        Util.isNull(b) ? b = Number.MAX_VALUE : typeof b === "string" && (b = b.toInt());
        Util.isNull(d) ? d = Number.MAX_VALUE : typeof d === "string" && (d = d.toInt());
        return b - d
      }, key:e}
    }
    if(a === "float 한국 tehu") {
      return{on:c, comparator:function(a, c) {
        var b = a[e], d = c[e];
        Util.isNull(b) ? b = Number.MAX_VALUE : typeof b === "string" && (b = b.toFloat());
        Util.isNull(d) ? d = Number.MAX_VALUE : typeof d === "string" && (d = d.toFloat());
        return b - d
      }, key:e}
    }
  }
})();
jx.data.TreeNode = {};
jx.data.Tree = {};
var TreeNode = {}, Tree = {};
(function() {
  function d(a) {
    this.tree = a.tree;
    this.data = a.data;
    this.nodeId = a.nodeId;
    this.childrenMap = {};
    this.children = []
  }
  function b(a) {
    this.mid = a.mid;
    this.list = a.list;
    this._options = JGM.__extend_e__({nodeKey:"nodeId", parentKey:"parentId"}, a.options);
    this.map = {};
    this.root = new d({tree:this});
    this.infants = {}
  }
  goog.exportSymbol("jx.data.TreeNode", d);
  goog.exportSymbol("jx.data.Tree", b);
  goog.exportSymbol("TreeNode", d);
  goog.exportSymbol("Tree", b);
  d.getInstance = function(a) {
    return new d(a)
  };
  var a = d.prototype;
  a.destroy = function() {
    this.detach();
    delete this.tree;
    delete this.data;
    delete this.nodeId;
    delete this.childrenMap;
    delete this.children
  };
  a.destroyCompletely = function() {
    this.detachCompletely();
    delete this.tree;
    delete this.data;
    delete this.nodeId;
    delete this.childrenMap;
    delete this.children
  };
  a.destroyDown = function() {
    Util.isNotNull(this.parent) && this.parent.removeChild(this);
    this.traverse({post:!0, fn:function() {
      this.destroy()
    }})
  };
  a.detach = function() {
    delete this.parent;
    delete this.level;
    this.children.length = 0;
    this.childrenMap = {}
  };
  a.detachCompletely = function() {
    Util.isNotNull(this.parent) && this.parent.removeChild(this);
    this.removeAllChildren();
    delete this.parent;
    delete this.level
  };
  a.detachDown = function() {
    Util.isNotNull(this.parent) && this.parent.removeChild(this);
    this.traverse({post:!0, fn:function() {
      this.detach()
    }})
  };
  a.isRoot = function() {
    return Util.isNull(this.parent)
  };
  a.getRoot = function() {
  };
  a.isLeaf = function() {
    return this.children.length === 0
  };
  a.setParent = function(a) {
    if(this.parent !== a) {
      Util.isNotNull(this.parent) && this.parent.removeChild(this), this.parent = a, delete this.level, Util.isNotNull(a) && a.addChild(this)
    }
  };
  a.hasChild = function(a) {
    return this.childrenMap.hasOwnProperty(a.nodeId)
  };
  a.addChild = function(a) {
    this.hasChild(a) || (this.children.push(a), this.childrenMap[a.nodeId] = this.children.length - 1, a.setParent(this))
  };
  a.addChildAt = function(a, c) {
    var b;
    if(this.hasChild(c)) {
      b = this.childrenMap[c.nodeId];
      if(b === a) {
        return
      }
      this.children.removeAt(b)
    }
    this.children.addAt(a, c);
    Util.isNotNull(b) && b < a ? this.resetChildIdx(b) : this.resetChildIdx(a);
    c.setParent(this)
  };
  a.removeChild = function(a) {
    if(this.hasChild(a)) {
      var c = this.childrenMap[a.nodeId];
      this.children.removeAt(c);
      delete this.childrenMap[a.nodeId];
      this.resetChildIdx(c);
      delete a.parent;
      delete a.level
    }
  };
  a.removeChildAt = function(a) {
    var c = this.children[a];
    this.children.removeAt(a);
    delete this.childrenMap[c.nodeId];
    this.resetChildIdx(a);
    delete c.parent;
    delete c.level
  };
  a.resetChildIdx = function(a) {
    Util.isNull(a) && (a = 0);
    for(var c = this.children, b = c.length, d = this.childrenMap;a < b;a++) {
      d[c[a].nodeId] = a
    }
  };
  a.removeAllChildren = function() {
    for(var a = 0, c = this.children, b = c.length;a < b;a++) {
      delete c[a].parent, delete c[a].level
    }
    c.length = 0;
    this.childrenMap = {}
  };
  a.getSiblings = function() {
    if(this.isRoot()) {
      return[]
    }
    var a = this.parent.children.slice();
    a.removeAt(this.parent.getChildIdx(this));
    return a
  };
  a.getChildIdx = function(a) {
    return this.childrenMap[a.nodeId]
  };
  a.getIdx = function() {
    return this.isRoot() ? -1 : this.parent.getChildIdx(this)
  };
  a.getPath = function() {
    return this.traverse({res:[], up:!0, post:!0, fn:function(a) {
      this.isRoot() || a.res.push(this.getIdx())
    }}).res
  };
  a.getAncestors = function() {
    var a = {res:[], up:!0, post:!0, fn:function(a) {
      a.res.push(this)
    }};
    this.traverse(a);
    a.res.pop();
    return a.res
  };
  a.getDescendents = function() {
    var a = {res:[], fn:function(a) {
      a.res.push(this)
    }};
    this.traverse(a);
    a.res.shift();
    return a.res
  };
  a.getLevel = function() {
    return this.isRoot() ? this.level = -1 : this.level = this.parent.getLevel() + 1
  };
  a.find = function(a) {
    return this.traverse({fn:function(c) {
      if(this.data === a) {
        c.res = this, c.stop = !0
      }
    }}).res
  };
  a.traverse = function(a, c) {
    if(a.stop) {
      return a
    }
    if(a.up) {
      this.isRoot() ? this.callFn(a) : a.post ? (this.parent.traverse(a), this.callFn(a)) : (this.callFn(a), this.parent.traverse(a))
    }else {
      var b = 0, d = this.children, f = d.length;
      if(a.post) {
        for(;b < f;b++) {
          d[b].traverse(a, b)
        }
        this.callFn(a, c)
      }else {
        if(this.callFn(a, c), a.propagate === !1) {
          delete a.propagate
        }else {
          for(;!a.stop && b < f;b++) {
            d[b].traverse(a, b)
          }
        }
      }
    }
    return a
  };
  a.traverseChildren = function(a) {
    for(var c = 0, b = this.children, d = b.length;c < d;c++) {
      b[c].traverse(a, c)
    }
  };
  a.traverseParent = function(a) {
    Util.isNotNull(this.parent) && this.parent.traverse(a)
  };
  a.callFn = function(a, c) {
    if(!a.stop) {
      Util.isNull(a.target) ? Util.callFn(this, a.fn, a, c) : (a.node = this, Util.callFn(a.target, a.fn, a, c))
    }
  };
  b.getInstance = function(a) {
    return new b(a)
  };
  a = b.prototype;
  a.__init = function() {
    this.makeTree()
  };
  a.destroy = function() {
    this.root.destroyDown();
    this.map = {};
    this.emptyInfants();
    delete this.list;
    delete this._options;
    delete this.map;
    delete this.root;
    delete this.infants;
    JGM.__remove_f__("Tree", this.mid);
    delete this.mid
  };
  a.detach = function() {
    this.root.detachDown();
    this.emptyInfants()
  };
  a.emptyInfants = function() {
    var a, c = this.infants;
    for(a in c) {
      if(c.hasOwnProperty(a)) {
        c[a].length = 0
      }
    }
    this.infants = {}
  };
  a.reattach = function(a) {
    this.detach();
    if(Util.isNull(a)) {
      a = this.list
    }
    for(var c = this._options.nodeKey, b = this.map, d = a.length, f = 0;f < d;f++) {
      this.attachNode(b[a[f][c]])
    }
  };
  a.makeTree = function(a) {
    if(Util.isNull(a)) {
      a = this.list
    }
    for(var c = 0, b = a.length;c < b;c++) {
      this.createNode(a[c])
    }
  };
  a.hasNode = function(a) {
    return Util.isNotNull(a) && this.map.hasOwnProperty(a[this._options.nodeKey])
  };
  a.getNode = function(a) {
    return this.map[a[this._options.nodeKey]]
  };
  a.getNodeByNodeId = function(a) {
    return this.map[a]
  };
  a.createNode = function(a) {
    if(!this.hasNode()) {
      var c = a[this._options.nodeKey], a = new d({tree:this, data:a, nodeId:c});
      this.map[c] = a;
      this.attachNode(a);
      return a
    }
  };
  a.adoptInfants = function(a, c) {
    if(this.infants.hasOwnProperty(c)) {
      for(var b = this.infants[c], d = 0, f = b.length;d < f;d++) {
        a.addChild(b[d])
      }
      b.length = 0;
      delete this.infants[c]
    }
  };
  a.attachNode = function(a) {
    var c = a.nodeId, b = a.data[this._options.parentKey];
    this.adoptInfants(a, c);
    if(Util.isNull(b) || b == c) {
      return this.root.addChild(a), !0
    }
    if(this.map.hasOwnProperty(b)) {
      return this.map[b].addChild(a), !0
    }
    this.addToInfants(a, b);
    return!1
  };
  a.changeNodeId = function(a, c, b) {
    if(c !== b) {
      delete this.map[c], this.map[b] = a, this.removeChildren(a), a.nodeId = a.data[this._options.nodeKey] = b, Util.isNotNull(a.parent) && (a.parent.childrenMap[b] = a.parent.childrenMap[c], delete a.parent.childrenMap[c]), this.adoptInfants(a, b)
    }
  };
  a.changeParentId = function(a, c, b) {
    c !== b && (Util.isNull(a.parent) && this.removeFromInfants(a, c), c = this.map[b], a.setParent(c), a.data[this._options.parentKey] = b, Util.isNull(c) && this.addToInfants(a, b))
  };
  a.destroyNodeByData = function(a) {
    this.destroyNode(this.getNode(a))
  };
  a.destroyNode = function(a) {
    this.removeChildren(a);
    this.removeFromInfants(a);
    this.removeFromMap(a);
    a.destroyCompletely()
  };
  a.removeFromMap = function(a) {
    delete this.map[a.nodeId]
  };
  a.addToInfants = function(a, c) {
    this.infants.hasOwnProperty(c) || (this.infants[c] = []);
    this.infants[c].push(a)
  };
  a.removeFromInfants = function(a, c) {
    Util.isNull(c) && (c = a.data[this._options.parentKey]);
    this.infants.hasOwnProperty(c) && (this.infants[c].remove(a), this.infants[c].length === 0 && delete this.infants[c])
  };
  a.removeChildren = function(a) {
    a.children.length !== 0 && (this.infants.hasOwnProperty(a.nodeId) || (this.infants[a.nodeId] = []), this.infants[a.nodeId].pushList(a.children), a.removeAllChildren())
  };
  a.sortList = function(a) {
    Util.isNull(a) ? a = [] : a.length = 0;
    this.root.traverseChildren({fn:function() {
      a.push(this.data)
    }})
  }
})();
jx.grid.Grid = {};
(function() {
  function d(a) {
    JGM.core.BaseModule.call(this, a)
  }
  goog.exportSymbol("jx.grid.Grid", d);
  JGM._add("Grid", d);
  goog.inherits(d, JGM.core.BaseModule);
  d.getInstance = function(a) {
    return new d(a)
  };
  var b = d.prototype;
  b._defaultOptions = function() {
    return{classGrid:"jgrid", border:"1px solid #868686", width:void 0, font:"15px Arial,Helvetica,sans-serif", style:"", borderSide:!0, imageUrl:"../images/", links:{data:"dataMgr.all", datalen:"dataMgr.all.length", shown:"dataMgr.datalist", set:"dataMgr.set", add:"dataMgr.add", addList:"dataMgr.addList", update:"dataMgr.update", updateByKey:"dataMgr.updateByKey", updateList:"dataMgr.updateList", remove:"dataMgr.remove", removeList:"dataMgr.removeList", select:"dataMgr.executeSelect", undo:"dataMgr.undo", 
    redo:"dataMgr.redo", addFilter:"dataMgr.addFilter", removeFilter:"dataMgr.removeFilter", check:"collapser.checkMgr.checkList checkMgr.checkList", checked:"collapser.checkMgr.getCheckList checkMgr.getCheckList", removeChecked:"collapser.checkMgr.removeChecked checkMgr.removeChecked", register:"event.register", trigger:"event.trigger", bind:"event.bind", unregister:"event.unregister", unbind:"event.unregister", collen:"colDefMgr.length"}, autoWidth:!1, showMessage:!1}
  };
  b._init = function(a) {
    this._ctnr = a.container;
    this.name = this._options.name;
    this._vars = {drag:!1, scrollbarDim:void 0, lastW:void 0, lastH:void 0};
    this._ctnr = $("<div id='" + this.mid + "' class='" + this._options.classGrid + "' " + (Util.isNull(this._options.width) ? "" : "style='width:" + this._options.width + "px' ") + "tabIndex='0'>").appendTo(Util$.safe$(this._ctnr));
    this._vars.scrollbarDim = Util$.calScrollbarDims(this._ctnr);
    this.event = JGM.create("EventManager", {grid:this, options:this._options.EventManager});
    delete this._options.EventManager;
    this.colDefMgr = JGM.create("ColDefManager", {grid:this, colDefs:a.colDefs, options:this._options.ColDefManager});
    delete this._options.ColDefManager;
    this.dataMgr = JGM.create("DataManager", {grid:this, datalist:a.datalist, options:this._options.DataManager});
    delete this._options.DataManager;
    if(this._options.CheckManager) {
      this.checkMgr = JGM.create("CheckManager", {grid:this, options:this._options.CheckManager}), delete this._options.CheckManager
    }
    for(var a = 10, e = this.colDefMgr.getAll(), c = e.length;a < c;a++) {
      if(colDef = e[a], colDef.CheckManager) {
        colDef.CheckManager.colDef = colDef, colDef.checkMgr = JGM.create("CheckManager", {grid:this, options:colDef.CheckManager})
      }
    }
    if(this._options.Collapser) {
      this.collapser = JGM.create("Collapser", {grid:this, options:this._options.Collapser}), this.collapser.__init(), delete this._options.Collapser
    }
    if(this._options.ColGroup) {
      this.colGroup = JGM.create("ColGroup", {grid:this, options:this._options.ColGroup}), delete this._options.ColGroup
    }
    if(this._options.SelectionManager) {
      this.selMgr = JGM.create("SelectionManager", {grid:this, options:this._options.SelectionManager}), delete this._options.SelectionManager
    }
    if(this._options.EditManager) {
      this.editMgr = JGM.create("EditManager", {grid:this, options:this._options.EditManager}), delete this._options.EditManager
    }
    if(this._options.ColHeader) {
      this.header = JGM.create("ColHeader", {grid:this, container:this._ctnr, options:this._options.ColHeader}), delete this._options.ColHeader
    }
    if(this._options.SearchManager) {
      this.search = JGM.create("SearchManager", {grid:this, container:this._ctnr, options:this._options.SearchManager}), delete this._options.SearchManager
    }
    if(this._options.MenuBar) {
      this.menubar = JGM.create("MenuBar", {grid:this, container:this._ctnr, options:this._options.MenuBar}), delete this._options.MenuBar
    }
    this.view = JGM.create("ViewportManager", {grid:this, container:this._ctnr, options:this._options.ViewportManager});
    delete this._options.ViewportManager;
    if(this._options.TooltipManager) {
      this.tooltip = JGM.create("TooltipManager", {grid:this, container:this._ctnr, options:this._options.TooltipManager}), delete this._options.TooltipManager
    }
    if(this._options.DataCreator) {
      this.creator = JGM.create("DataCreator", {grid:this, container:this._ctnr, options:this._options.DataCreator}), delete this._options.DataCreator
    }
    if(this._options.Footer) {
      this.footer = JGM.create("Footer", {grid:this, container:this._ctnr, options:this._options.Footer}), delete this._options.Footer
    }
    this._options.autoWidth && this.event.bind("onResizeCanvasWidth", this.width, this);
    this._createCss();
    this.event.trigger("onBeforeRenderModules onRenderModules onAfterRenderModules");
    this.msg = $("<div id='" + this.mid + "msg' class='msg' onmousedown='$(this).hide(1000)' style='position:relative;padding-left:4px;overflow:hidden;z-index:100;font-size:12px;height:21px;line-height:21px'></div>").appendTo(this._ctnr).hide();
    this._vars.lastW = this._ctnr[0].clientWidth;
    this._vars.lastH = this._ctnr[0].clientHeight;
    this._registerLinks(this._options.links)
  };
  b._bindEvents = function() {
    JGM._bindGlobalEvents();
    var a = this;
    this._ctnr.bind({keydown:function(e) {
      a._keydown(e)
    }, keyup:function(e) {
      a._keyup(e)
    }, keypress:function(e) {
      a._keypress(e)
    }, mousein:function(e) {
      a._mousein(e)
    }, mouseout:function(e) {
      a._mouseout(e)
    }, mouseenter:function(e) {
      a._mouseenter(e)
    }, mouseleave:function(e) {
      a._mouseleave(e)
    }, mouseover:function(e) {
      a._mouseover(e)
    }, mousedown:function(e) {
      a._mousedown(e)
    }, click:function(e) {
      a._click(e)
    }, dblclick:function(e) {
      a._dblclick(e)
    }})
  };
  b.destroy = function() {
    try {
      Util.isEmptyObj(JGM.m.Grid) && JGM._unbindGlobalEvents(), this.event.trigger("onDestroy"), JGM._destroy(this, {name:"Grid", module:"event", $:"_ctnr", map:"_vars _options", style:"_style _dynStyle"})
    }catch(a) {
      return a
    }
  };
  b._registerLinks = function(a) {
    var e, c, b, d, f, h, k, j, m, l;
    a:for(e in a) {
      if(a.hasOwnProperty(e) && !(e in this)) {
        c = Util.split(a[e]);
        b = c.length;
        d = 0;
        b:for(;d < b;d++) {
          if(f = c[d].split("."), h = f.length, !(h < 1)) {
            k = this;
            j = this;
            m = "";
            for(l = 0;l < h;l++) {
              if(f[l] in k) {
                j = k, k = k[m = f[l]]
              }else {
                continue b
              }
            }
            this._registerLink(e, k, j, m);
            continue a
          }
        }
      }
    }
  };
  b._registerLink = function(a, e, c, b) {
    if(this.hasOwnProperty(a)) {
      return!1
    }
    this[a] = Util.isFunction(e) ? function() {
      return e.apply(c, arguments)
    } : function() {
      return c[b]
    };
    return!0
  };
  b._createCss = function() {
    var a = Util.sprint("%selector%{overflow:hidden;font:%font%;%border%%style%}%submodule%", {selector:"#" + this.mid, font:this._options.font, border:this._options.borderSide ? "border:" + this._options.border + ";" : "border-top:" + this._options.border + ";border-bottom:" + this._options.border + ";", style:this._options.style, submodule:this.event.trigger("onCreateCss").join("")});
    this._style = Util.createStyle(a);
    this._dynStyle = Util.createStyle(this.event.trigger("onCreateDynamicCss").join(""))
  };
  b._recreateDynamicCss = function() {
    Util.setStyle(this._dynStyle, this.event.trigger("onCreateDynamicCss").join(""))
  };
  b._keydown = function(a) {
    this.event.triggerInvalid("onBeforeKeydown", [a]) || this.event.trigger("keydown_" + a.which + " keydown", [a])
  };
  b._keyup = function(a) {
    this.event.triggerInvalid("onBeforeKeyup", [a]) || this.event.trigger("keyup_" + a.which + " keyup", [a])
  };
  b._keypress = function(a) {
    this.event.triggerInvalid("onBeforeKeypress", [a]) || this.event.trigger("keypress_" + a.which + " keypress", [a])
  };
  b._mousein = function(a) {
    this.event.triggerInvalid("onBeforeMousein", [a]) || (this._vars.drag ? this.event.trigger("dragin mousein", [a]) : this.event.trigger("mousein", [a]))
  };
  b._mouseout = function(a) {
    this.event.triggerInvalid("onBeforeMouseout", [a]) || (this._vars.drag ? this.event.trigger("dragout mouseout", [a]) : this.event.trigger("mouseout", [a]))
  };
  b._mouseenter = function(a) {
    this.event.triggerInvalid("onBeforeMouseenter", [a]) || (this._vars.drag ? this.event.trigger("dragenter mouseenter", [a]) : this.event.trigger("mouseenter", [a]))
  };
  b._mouseleave = function(a) {
    this.event.triggerInvalid("onBeforeMouseleave", [a]) || (this._vars.drag ? this.event.trigger("dragleave mouseleave", [a]) : this.event.trigger("mouseleave", [a]))
  };
  b._mousemove = function(a) {
    this.event.triggerInvalid("onBeforeMousemove", [a]) || (this._vars.drag ? this.event.trigger("dragmove mousemove", [a]) : this.event.trigger("mousemove", [a]))
  };
  b._mouseover = function(a) {
    this.event.triggerInvalid("onBeforeMouseover", [a]) || (this._vars.drag ? this.event.trigger("dragover mouseover", [a]) : this.event.trigger("mouseover", [a]))
  };
  b._mousedown = function(a) {
    this._vars.drag = !0;
    this.event.triggerInvalid("onBeforeMousedown", [a]) || this.event.trigger("mousedown", [a])
  };
  b._mouseup = function(a) {
    this._vars.drag = !1;
    this.event.trigger("unsetDrag");
    this.containsEvent(a) && (this.event.triggerInvalid("onBeforeMouseup", [a]) || this.event.trigger("mouseup", [a]))
  };
  b._click = function(a) {
    this.event.triggerInvalid("onBeforeClick", [a]) || this.event.trigger("click", [a])
  };
  b._dblclick = function(a) {
    this.event.triggerInvalid("onBeforeDblclick", [a]) || this.event.trigger("dblclick", [a])
  };
  b._resize = function(a) {
    var e = !1, c = this._ctnr[0].clientWidth;
    if(c >= 1 && this._vars.lastW !== c) {
      this.event.trigger("resizeWidth", [c, this._vars.lastW]), this._vars.lastW = c, e = !0
    }
    c = this._ctnr[0].clientHeight;
    if(c >= 1 && this._vars.lastH !== c) {
      this.event.trigger("resizeHeight", [c, this._vars.lastH]), this._vars.lastH = c, e = !0
    }
    e && this.event.trigger("resize", [a])
  };
  b.width = function(a) {
    a = parseInt(a);
    if(Util.isNull(a) || isNaN(a) || a < 1 || a === this._ctnr[0].clientWidth) {
      return this._ctnr[0].clientWidth
    }
    this._ctnr[0].style.width = a + "px";
    this.event.trigger("resizeWidth", [a, this._vars.lastW]);
    this._vars.lastW = a;
    this.event.trigger("resize");
    return a
  };
  b.height = function(a) {
    a = parseInt(a);
    if(Util.isNull(a) || isNaN(a) || a < 1 || a === this._ctnr[0].clientHeight) {
      return this._ctnr[0].clientHeight
    }
    this._ctnr[0].style.height = a + "px";
    this.event.trigger("resizeHeight", [a, this._vars.lastH]);
    this._vars.lastH = a;
    this.event.trigger("resize");
    return a
  };
  b.getCellByIdAndKey = function(a, e) {
    return JGM.create("Cell", {grid:this, datarow:this.dataMgr.getById(a), colDef:this.colDefMgr.getByKey(e)})
  };
  b.getCellByIdx = function(a, e) {
    return JGM.create("Cell", {grid:this, row:a, col:e})
  };
  b.error = function(a) {
    for(var e = JGM.error[a], c = 1, b = arguments.length;c < b;c++) {
      e = e.replace(RegExp("%" + (c - 1), "g"), arguments[c])
    }
    e = Error(e);
    e.code = a;
    this.printError(e.message);
    this.event.trigger("onError", [e]);
    return e
  };
  b.printError = function(a) {
    if(this._options.showMessage) {
      var e = this.msg;
      e[0].innerHTML = a;
      e[0].style.width = this._ctnr[0].clientWidth + "px";
      e[0].style.background = "#ffebe8";
      e[0].style.color = "#333";
      e.show();
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function() {
        e.hide(1E3)
      }, 5E3)
    }
  };
  b.printMessage = function(a) {
    if(this._options.showMessage) {
      var e = this.msg;
      e[0].innerHTML = a;
      e[0].style.width = this._ctnr[0].clientWidth + "px";
      e[0].style.background = "#dfdfdf";
      e[0].style.color = "#6f6f6f";
      e.show();
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function() {
        e.hide(1E3)
      }, 5E3)
    }
  };
  b.containsEvent = function(a) {
    return Util.contains(this._ctnr[0], a.target)
  }
})();
jx.grid.MenuBar = {};
(function() {
  function d(a) {
    JGM.grids.BaseModule.call(this, a);
    this.grid.menubar = this
  }
  goog.exportSymbol("jx.grid.MenuBar", d);
  JGM._add("MenuBar", d);
  goog.inherits(d, JGM.grids.BaseModule);
  d.getInstance = function(a) {
    return new d(a)
  };
  var b = d.prototype;
  b._defaultOptions = function() {
    return{background:"url(" + this.grid._options.imageUrl + "menubar-bg.png) repeat-x scroll center", borderThickness:1, border:"solid #b6bac0", height:27, classMenuBar:"menubar", classIcon:"menu-icon", iconBorderThickness:1, iconBorder:"solid transparent", iconBorderHover:"solid #d4d4d4", iconBorderActive:"solid #9a9a9a", iconMargin:2, iconBackground:"", iconBackgroundHover:"url(" + this.grid._options.imageUrl + "menu-icon-hover.png) repeat-x scroll center", iconBackgroundActive:"url(" + this.grid._options.imageUrl + 
    "menu-icon-active.png) repeat-x scroll center", iconHeight:21, iconWidth:21, iconBorderRadius:4, iconBorderFocus:"solid #5f5f5f"}
  };
  b._init = function(a) {
    this._ctnr = a.container;
    this.__menubar_a__ = $("<div class='" + this._options.__classMenuBar_e__ + "'></div>").prependTo(this._ctnr)
  };
  b._bindEvents = function() {
    this.grid.event.bind({onCreateCss:this.__onCreateCss_V__, onDestroy:this.__destroy_aA__}, this)
  };
  b.__destroy_aA__ = function() {
    JGM._destroy(this, {name:"MenuBar", path:"menubar", $:"__menubar_a__", property:"_ctnr", map:"_options"})
  };
  b.__onCreateCss_V__ = function() {
    var a = "#" + this.grid.mid + " .", e = this._options, c = [];
    c.push(a + e.__classMenuBar_e__ + "{" + JGM.__CONST_g__.__cssUnselectable_a__ + "overflow:hidden;width:100%;background:" + e.__background_a__ + ";border-bottom:" + (e.__borderThickness_b__ + "px " + e.__border_c__) + ";height:" + e.__height_d__ + "px}");
    c.push(a + e.__classIcon_f__ + "{float:left;height:" + e.__iconHeight_o__ + "px;width:" + e.__iconWidth_p__ + "px;border:" + e.__iconBorderThickness_g__ + "px " + e.__iconBorder_h__ + ";margin:" + e.__iconMargin_k__ + "px 0 0 " + e.__iconMargin_k__ + "px;background:" + e.__iconBackground_l__ + ";border-radius:" + e.__iconBorderRadius_q__ + "px;-moz-border-radius:" + e.__iconBorderRadius_q__ + "px}");
    c.push(a + e.__classIcon_f__ + ":hover," + a + e.__classIcon_f__ + ":focus{background:" + e.__iconBackgroundHover_m__ + ";border:" + e.__iconBorderThickness_g__ + "px " + e.__iconBorderHover_i__ + "}");
    c.push(a + e.__classIcon_f__ + ":active," + a + e.__classIcon_f__ + ".active{cursor:default;background:" + e.__iconBackgroundActive_n__ + ";border:" + e.__iconBorderThickness_g__ + "px " + e.__iconBorderActive_j__ + "}");
    c.push(a + e.__classIcon_f__ + ".active:focus{border:" + e.__iconBorderThickness_g__ + "px " + e.__iconBorderFocus_r__ + "}");
    return c.join("")
  };
  b.addIcon = function(a, e, c, b, d) {
    return $("<div class='" + this._options.__classIcon_f__ + "' tabIndex='0' title='" + e + "'><div class='" + a + "' style='margin-top:" + (this._options.__iconHeight_o__ - b) / 2 + "px;margin-left:" + (this._options.__iconWidth_p__ - c) / 2 + "px'></div></div>").appendTo(this.__menubar_a__).click(function(a) {
      d();
      $(this).toggleClass("active");
      a.preventDefault()
    }).keydown(function(a) {
      if(a.which === Util.keyMapKeydown.enter || a.which === Util.keyMapKeydown.space) {
        d(), $(this).toggleClass("active"), a.preventDefault()
      }
    })
  }
})();
jx.grid.TooltipManager = {};
(function() {
  function d(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    this.grid.tooltip = this;
    this._ctnr = a.container;
    this._options = JGM.__extend_e__({__classTooltip_a__:"jgrid-tooltip", __tooltipSyncEnabled_b__:!0, __offsetX_c__:0, __offsetY_d__:18, __background_e__:"#F5F5F5", __border_f__:"1px solid #868686", __padding_g__:"2px 10px", __font_h__:"14px Arial,Helvetica,sans-serif", __color_i__:"#333"}, a.options, {classTooltip:"__classTooltip_a__", tooltipSyncEnabled:"__tooltipSyncEnabled_b__", offsetX:"__offsetX_c__", offsetY:"__offsetY_d__", background:"__background_e__", border:"__border_f__", padding:"__padding_g__", 
    font:"__font_h__", color:"__color_i__"});
    this.__init()
  }
  goog.exportSymbol("jx.grid.TooltipManager", d);
  JGM._add("TooltipManager", d);
  d.getInstance = function(a) {
    return new d(a)
  };
  var b = d.prototype;
  b.__init = function() {
    this.grid.event.bind({onCreateCss:this.__onCreateCss_V__, onDestroy:this.__destroy_aA__, mouseoutCanvas:this.__mouseoutCanvas_bb__, mousemoveCanvas:this.__mousemoveCanvas_bc__, mouseoverCanvas:this.__mouseoverCanvas_bd__}, this)
  };
  b.__destroy_aA__ = function() {
    JGM._destroy(this, {name:"TooltipManager", path:"tooltip", $:"__tooltip_a__", property:"_ctnr", map:"_options"})
  };
  b.__onCreateCss_V__ = function() {
    var a = this._options, e = [];
    e.push("#" + this.grid.mid + " ." + a.__classTooltip_a__ + "{position:absolute;z-index:10;background:" + a.__background_e__ + ";border:" + a.__border_f__ + ";padding:" + a.__padding_g__ + ";color:" + a.__color_i__ + ";font:" + a.__font_h__ + "}");
    return e.join("")
  };
  b.__mouseoutCanvas_bb__ = function() {
    Util.isNotNull(this.__tooltip_a__) && (this._ctnr[0].removeChild(this.__tooltip_a__[0]), delete this.__tooltip_a__)
  };
  b.__mousemoveCanvas_bc__ = function(a) {
    var e = this._options;
    e.__tooltipSyncEnabled_b__ && Util.isNotNull(this.__tooltip_a__) && this.__tooltip_a__.css({left:a.pageX + e.__offsetX_c__ + "px", top:a.pageY + e.__offsetY_d__ + "px"})
  };
  b.__mouseoverCanvas_bd__ = function(a, e) {
    if(e.getColDef().tooltipEnabled && Util.isNull(this.__tooltip_a__)) {
      var c = this._options, b = document.createElement("div");
      b.innerHTML = "<div class='" + c.__classTooltip_a__ + "' style='left:" + (a.pageX + c.__offsetX_c__) + "px;top:" + (a.pageY + c.__offsetY_d__) + "px'>" + e.getValue() + "</div>";
      this.__tooltip_a__ = $(b.firstChild);
      this._ctnr[0].appendChild(this.__tooltip_a__[0])
    }
  }
})();
jx.grid.Footer = {};
(function() {
  function d(a) {
    this.mid = a.mid;
    this._ctnr = a.container;
    this.grid = a.grid;
    this.grid.footer = this;
    this._options = JGM.__extend_e__({__classCell_a__:"footer-cell", __background_b__:"#F1F5FB", __border_c__:"0px solid #CCD9EA", __color_d__:"#000", __fontSize_e__:"13px", __fontWeight_f__:"normal", __cellHeight_g__:25, __cellPadding_h__:40, __countTemplate_i__:"현재 <span name='shownCount'></span> 건 / 총 <span name='totalCount'></span> 건", __titleColor_j__:"#5A6779", __titleFontSize_k__:"12px", __titleFontWeight_l__:"normal", __contentColor_n__:"#1E395B", __contentFontSize_o__:"12px", __contentFontWeight_p__:"normal", 
    __classFooter_q__:"jgrid-footer", __classTitle_r__:"footer-title", __classContent_s__:"footer-content", __style_u__:"", __cellStyle_v__:"", __titleStyle_w__:"", __contentStyle_x__:""}, a.options, {classCell:"__classCell_a__", background:"__background_b__", border:"__border_c__", color:"__color_d__", fontSize:"__fontSize_e__", fontWeight:"__fontWeight_f__", cellHeight:"__cellHeight_g__", cellPadding:"__cellPadding_h__", countTemplate:"__countTemplate_i__", titleColor:"__titleColor_j__", titleFontSize:"__titleFontSize_k__", 
    titleFontWeight:"__titleFontWeight_l__", contentColor:"__contentColor_n__", contentFontSize:"__contentFontSize_o__", contentFontWeight:"__contentFontWeight_p__", classFooter:"__classFooter_q__", classTitle:"__classTitle_r__", classContent:"__classContent_s__", style:"__style_u__", cellStyle:"__cellStyle_v__", titleStyle:"__titleStyle_w__", contentStyle:"__contentStyle_x__"});
    this.__sumMap_g__ = {};
    this.__init()
  }
  goog.exportSymbol("jx.grid.Footer", d);
  JGM._add("Footer", d);
  d.getInstance = function(a) {
    return new d(a)
  };
  var b = d.prototype;
  b.__init = function() {
    this.__foot_a__ = $("<div class='" + this._options.__classFooter_q__ + "'>").appendTo(this._ctnr);
    this.getNextCell().html(this._options.__countTemplate_i__);
    this.__updateTotalCount_d__();
    this.__updateShownCount_c__();
    this.__initSumCells_f__();
    this.bindEvents()
  };
  b.bindEvents = function() {
    this.grid.event.bind({onCreateCss:this.__onCreateCss_V__, onDestroy:this.__destroy_aA__, onDataChange:[this.__updateTotalCount_d__, this.__updateSums_e__], onAfterRefresh:this.__updateShownCount_c__}, this)
  };
  b.__destroy_aA__ = function() {
    var a, e = this.__sumMap_g__;
    for(a in e) {
      e.hasOwnProperty(a) && e[a].remove()
    }
    JGM._destroy(this, {name:"Footer", path:"footer", $:"__foot_a__", property:"_ctnr", map:"__sumMap_g__ _options"})
  };
  b.__onCreateCss_V__ = function() {
    var a = this._options, e = "#" + this.grid.mid + " ." + a.__classFooter_q__, c = [];
    c.push(e + "{float:left;cursor:default;width:100%;" + JGM.__CONST_g__.__cssUnselectable_a__ + "background:" + a.__background_b__ + ";border-top:" + a.__border_c__ + ";border-collapse:collapse;color:" + a.__color_d__ + ";font-size:" + a.__fontSize_e__ + ";font-weight:" + a.__fontWeight_f__ + ";padding-left:8px;" + a.__style_u__ + "}");
    c.push(e + " ." + a.__classCell_a__ + "{float:left;white-space:nowrap;line-height:" + a.__cellHeight_g__ + "px;padding-right:" + a.__cellPadding_h__ + "px;" + a.__cellStyle_v__ + "}");
    c.push(e + " ." + a.__classTitle_r__ + "{text-align:right;color:" + a.__titleColor_j__ + ";font-size:" + a.__titleFontSize_k__ + ";font-weight:" + a.__titleFontWeight_l__ + ";" + a.__titleStyle_w__ + "}");
    c.push(e + " ." + a.__classContent_s__ + "{color:" + a.__contentColor_n__ + ";font-size:" + a.__contentFontSize_o__ + ";font-weight:" + a.__contentFontWeight_p__ + ";" + a.__contentStyle_x__ + "}");
    return c.join("")
  };
  b.__updateTotalCount_d__ = function() {
    this.__foot_a__.find("[name=totalCount]")[0].innerHTML = this.grid.dataMgr.getReal().length
  };
  b.__updateShownCount_c__ = function() {
    this.__foot_a__.find("[name=shownCount]")[0].innerHTML = this.grid.dataMgr.filterReal(this.grid.dataMgr.datalist).length
  };
  b.__initSumCells_f__ = function() {
    for(var a = this.grid.dataMgr.getReal(), e = this.grid.colDefMgr.get(), c = e.length, b, i, f, h, k = d.__calSum_a__, j = this.__sumMap_g__, m, l = 0;l < c;l++) {
      if(b = e[l], i = b.sumRenderer, Util.isNotNull(i)) {
        if(f = b.key, b = b.name, h = k(a, f), f = j[f] = this.getNextCell(), m = f[0], Util.isFunction(i)) {
          m.innerHTML = i(b, h)
        }else {
          if(Util.isString(i)) {
            if(f = i.toLowerCase(), f === "krw" || i === "\\") {
              m.innerHTML = this.__sumRenderer_h__(b, Util.formatNumber(h))
            }else {
              if(f === "usd" || i === "$") {
                m.innerHTML = this.__sumRenderer_h__(b, Util.formatNumber(h, 2, "$ "))
              }
            }
          }else {
            m.innerHTML = this.__sumRenderer_h__(b, h)
          }
        }
      }
    }
  };
  b.__updateSums_e__ = function() {
    var a = this.grid.dataMgr.getReal(), e, c = this.__sumMap_g__, b = this.grid.colDefMgr, i, f, h, k = d.__calSum_a__, j, m, l = this._options.__classContent_s__;
    for(e in c) {
      if(c.hasOwnProperty(e)) {
        if(i = b.getByKey(e), f = i.sumRenderer, h = k(a, e), j = c[e], m = j[0], Util.isFunction(f)) {
          m.innerHTML = f(i.name, h)
        }else {
          if(Util.isString(f)) {
            if(i = f.toLowerCase(), i === "krw" || f === "\\") {
              j.find("span." + l)[0].innerHTML = Util.formatNumber(h)
            }else {
              if(i === "usd" || f === "$") {
                j.find("span." + l)[0].innerHTML = Util.formatNumber(h, 2, "$ ")
              }
            }
          }else {
            j.find("span." + l)[0].innerHTML = h
          }
        }
      }
    }
  };
  b.getNextCell = function() {
    return $("<div class='" + this._options.__classCell_a__ + "'/>").appendTo(this.__foot_a__)
  };
  b.__sumRenderer_h__ = function(a, e) {
    return"<span class='" + this._options.__classTitle_r__ + "'>" + a + " 합계: </span><span class='" + this._options.__classContent_s__ + "'>" + e + "</span>"
  };
  d.__calSum_a__ = function(a, e) {
    for(var c = 0, b, d = a.length, f = 0;f < d;f++) {
      if(typeof(b = a[f][e]) === "string") {
        b = b.toFloat()
      }
      c += isNaN(b) ? 0 : b
    }
    return c
  }
})();
jx.grid.Cell = {};
(function() {
  function d(a) {
    this.grid = a.grid;
    this.__datarow_h__ = a.datarow;
    this.__colDef_i__ = a.colDef;
    this.__init(a)
  }
  goog.exportSymbol("jx.grid.Cell", d);
  JGM._add("Cell", d);
  d.getInstance = function(a) {
    return new d(a)
  };
  var b = d.prototype;
  b.__init = function(a) {
    if(Util.isNull(this.__datarow_h__)) {
      if(Util.isNotNull(a.row)) {
        this.__datarow_h__ = this.grid.dataMgr.getByIdx(a.row)
      }else {
        if(Util.isNotNull(a.node)) {
          this.__datarow_h__ = this.grid.dataMgr.getByNode(a.node.parentNode)
        }else {
          if(Util.isNotNull(a.$)) {
            this.__datarow_h__ = this.grid.dataMgr.getByNode(a.$[0].parentNode)
          }
        }
      }
    }
    if(Util.isNull(this.__colDef_i__)) {
      if(Util.isNotNull(a.col)) {
        this.__colDef_i__ = this.grid.colDefMgr.get(a.col)
      }else {
        if(Util.isNotNull(a.node)) {
          this.__colDef_i__ = this.grid.colDefMgr.get(Util.index(a.node))
        }else {
          if(Util.isNotNull(a.$)) {
            this.__colDef_i__ = this.grid.colDefMgr.get(Util.index(a.$[0]))
          }
        }
      }
    }
    if(Util.isNullOr(this.__datarow_h__, this.__colDef_i__) && Util.isNotNull(a.event) && (a = this.grid.view.__getClosestCell_Az__(a.event.target), Util.isNotNull(a))) {
      this.__datarow_h__ = this.grid.dataMgr.getByNode(a.parentNode), this.__colDef_i__ = this.grid.colDefMgr.get(Util.index(a))
    }
  };
  b.destroy = function() {
    delete this.grid;
    delete this.__datarow_h__;
    delete this.__colDef_i__
  };
  b.getRowIdx = function() {
    if(Util.isNotNull(this.__datarow_h__)) {
      return this.grid.dataMgr.getIdx(this.__datarow_h__)
    }
  };
  b.getColIdx = function() {
    if(Util.isNotNull(this.__colDef_i__)) {
      return this.grid.colDefMgr.getIdx(this.__colDef_i__)
    }
  };
  b.getNode = function() {
    if(Util.isNotNullAnd(this.__datarow_h__, this.__colDef_i__)) {
      return this.grid.view.getCellByIdAndKey(this.grid.dataMgr.getId(this.__datarow_h__), this.__colDef_i__.key)
    }
  };
  b.getRowNode = function() {
    return this.grid.view.getRow(this.__datarow_h__)
  };
  b.get$ = function() {
    var a = this.getNode();
    return a !== void 0 ? $(a) : $([])
  };
  b.getDatarow = function() {
    return this.__datarow_h__
  };
  b.getColDef = function() {
    return this.__colDef_i__
  };
  b.getKey = function() {
    if(Util.isNotNull(this.__colDef_i__)) {
      return this.__colDef_i__.key
    }
  };
  b.getId = function() {
    return this.grid.dataMgr.getId(this.__datarow_h__)
  };
  b.getValue = function() {
    if(Util.isNotNullAnd(this.__datarow_h__, this.__colDef_i__)) {
      return this.__datarow_h__[this.__colDef_i__.key]
    }
  };
  b.isValid = function() {
    return Util.isNotNull(this.getNode())
  };
  b.isInvalid = function() {
    return Util.isNull(this.getNode())
  };
  b.isEmpty$ = function() {
    return this.get$().length === 0
  };
  b.has$ = function() {
    return this.get$().length !== 0
  };
  b.equals = function(a) {
    return Util.isNotNull(a) && Util.isNotNull(this.__datarow_h__) && this.__datarow_h__ === a.getDatarow() && Util.isNotNull(this.__colDef_i__) && this.__colDef_i__ === a.getColDef()
  }
})();
jx.grid.SelectionManager = {};
(function() {
  function d(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    this.grid.selMgr = this;
    this._options = JGM.__extend_e__({__rowSelKey_a__:this.grid.dataMgr.idKey, __bgColorSelection_b__:"#DCEBFE", __bgColorLast_c__:"#f1ca7f", __bgColorRange_d__:"#D9D9D9", __classSelection_e__:"jgrid-selection", __classLast_f__:"selection-last", __classRange_g__:"selection-range", __multiSelectEnabled_h__:!1, classRowSelected:"rowSelected", highlightRowEnabled:!0, bgColorRowSelected:"#d8dfea"}, a.options, {rowSelKey:"__rowSelKey_a__", bgColorSelection:"__bgColorSelection_b__", bgColorLast:"__bgColorLast_c__", 
    bgColorRange:"__bgColorRange_d__", classSelection:"__classSelection_e__", classLast:"__classLast_f__", classRange:"__classRange_g__", multiSelectEnabled:"__multiSelectEnabled_h__"});
    this.__consts_a__ = {__UP_a__:1, __DOWN_b__:2, __LEFT_c__:3, __RIGHT_d__:4, __PGDN_f__:5, __PGUP_g__:6, __HOME_h__:7, __END_i__:8, __NAVKEYS_e__:{}};
    this.__consts_a__.__NAVKEYS_e__ = Util.which(["enter", "tab", "arrow", "pgdn", "pgup", "home", "end"]);
    this.__rows_d__ = {length:0};
    this.__cols_e__ = {length:0};
    this.__init()
  }
  goog.exportSymbol("jx.grid.SelectionManager", d);
  JGM._add("SelectionManager", d);
  d.getInstance = function(a) {
    return new d(a)
  };
  var b = d.prototype;
  b.__init = function() {
    this.bindEvents()
  };
  b.bindEvents = function() {
    this.grid.event.bind({onGetCellClass:this.__onGetCellClass_aI__, onCreateCss:this.__onCreateCss_V__, onDestroy:this.__destroy_aA__, keydownCanvas:this.__keydownCanvas_ba__, dragoverCanvas:this.__dragoverCanvas_be__, mousedownCanvas:this.__mousedownCanvas_bf__, onBeforeRerender:this.__onBeforeRerender_t__, onAfterRerender:this.onAfterRerender, onBeforeDataChange:this.onBeforeDataChange}, this)
  };
  b.__destroy_aA__ = function() {
    JGM.__deleteMap_l__(this.__consts_a__, "__NAVKEYS_e__");
    var a, e = this.__rows_d__, c = this.__cols_e__;
    for(a in e) {
      e.hasOwnProperty(a) && a !== "length" && JGM.__deleteMap_l__(e, a)
    }
    for(a in c) {
      c.hasOwnProperty(a) && a !== "length" && JGM.__deleteMap_l__(c, a)
    }
    JGM._destroy(this, {name:"SelectionManager", path:"selMgr", map:"__rows_d__ __cols_e__ __range_c__ __last_b__ __consts_a__ _options"})
  };
  b.__onCreateCss_V__ = function() {
    var a = this.grid.event.trigger("onBeforeCreateSelCss"), e = "#" + this.grid.mid + " .", c = this._options;
    c.highlightRowEnabled === !0 && a.push(e + c.classRowSelected + " > *{background:" + c.bgColorRowSelected + "}");
    c.__multiSelectEnabled_h__ === !0 && (a.push(e + c.__classSelection_e__ + "{background:" + c.__bgColorSelection_b__ + "}"), a.push(e + c.__classRange_g__ + "{background:" + c.__bgColorRange_d__ + "}"));
    a.push(e + c.__classLast_f__ + "{background:" + c.__bgColorLast_c__ + "}");
    return a.join("\n")
  };
  b.__onGetCellClass_aI__ = function(a, e, c, b) {
    var d = "", f = this.__last_b__, h = this.__range_c__, k = this.__rows_d__, j = this._options;
    Util.isNotNull(f) && f.getDatarow() === c && f.getColDef() === b && (d += j.__classLast_f__);
    j.__multiSelectEnabled_h__ === !0 && (Util.isNotNull(h) && h.getDatarow() === c && h.getColDef() === b && (d += " " + j.__classRange_g__), k.hasOwnProperty(a) && k[a].hasOwnProperty(e) && (d += " " + j.__classSelection_e__));
    return d
  };
  b.__mousedownCanvas_bf__ = function(a, e) {
    if(!Util.isNotNull(this.__last_b__) || !this.__last_b__.equals(e)) {
      this.grid.event.trigger("onBeforeSelect", [a, e]), this._options.__multiSelectEnabled_h__ === !1 ? this.selectCell(e) : a.shiftKey && Util.isNotNullAnd(this.__last_b__, this.__range_c__) ? this.selectRange(e) : a.ctrlKey ? e.getKey() === this._options.__rowSelKey_a__ ? this.addRow(e) : this.addCell(e) : this.selectCell(e)
    }
  };
  b.__dragoverCanvas_be__ = function(a, e) {
    this._options.__multiSelectEnabled_h__ === !1 ? this.selectCell(e) : Util.isNotNullAnd(this.__last_b__, this.__range_c__) && this.selectRange(e)
  };
  b.__keydownCanvas_ba__ = function(a) {
    if(Util.isNullOr(this.__last_b__, this.__range_c__)) {
      this.__consts_a__.__NAVKEYS_e__[a.which] && this.selectCell(JGM.create("Cell", {grid:this.grid, row:this.grid.view.__getFirstSafeVisibleRow_l__(), col:this.grid.view.__getFirstSafeVisibleCol_q__()}))
    }else {
      if(this.__consts_a__.__NAVKEYS_e__[a.which]) {
        if(!this.grid.event.triggerInvalid("onBeforeNavigate", [a])) {
          var e;
          a.preventDefault();
          switch(a.which) {
            case Util.keyMapKeydown.tab:
              e = a.shiftKey ? this.__idxToCell_j__(this.__consts_a__.__LEFT_c__, this.__last_b__) : this.__idxToCell_j__(this.__consts_a__.__RIGHT_d__, this.__last_b__);
              this.selectCell(e);
              break;
            case Util.keyMapKeydown.enter:
              e = a.shiftKey ? this.__idxToCell_j__(this.__consts_a__.__UP_a__, this.__last_b__) : this.__idxToCell_j__(this.__consts_a__.__DOWN_b__, this.__last_b__);
              this.selectCell(e);
              break;
            case Util.keyMapKeydown.up:
              this._options.__multiSelectEnabled_h__ && a.shiftKey ? (e = this.__idxToCell_j__(this.__consts_a__.__UP_a__, this.__range_c__), this.selectRange(e)) : (e = this.__idxToCell_j__(this.__consts_a__.__UP_a__, this.__last_b__), this.selectCell(e));
              break;
            case Util.keyMapKeydown.down:
              this._options.__multiSelectEnabled_h__ && a.shiftKey ? (e = this.__idxToCell_j__(this.__consts_a__.__DOWN_b__, this.__range_c__), this.selectRange(e)) : (e = this.__idxToCell_j__(this.__consts_a__.__DOWN_b__, this.__last_b__), this.selectCell(e));
              break;
            case Util.keyMapKeydown.left:
              this._options.__multiSelectEnabled_h__ && a.shiftKey ? (e = this.__idxToCell_j__(this.__consts_a__.__LEFT_c__, this.__range_c__), this.selectRange(e)) : (e = this.__idxToCell_j__(this.__consts_a__.__LEFT_c__, this.__last_b__), this.selectCell(e));
              break;
            case Util.keyMapKeydown.right:
              this._options.__multiSelectEnabled_h__ && a.shiftKey ? (e = this.__idxToCell_j__(this.__consts_a__.__RIGHT_d__, this.__range_c__), this.selectRange(e)) : (e = this.__idxToCell_j__(this.__consts_a__.__RIGHT_d__, this.__last_b__), this.selectCell(e));
              break;
            case Util.keyMapKeydown.pgup:
              this._options.__multiSelectEnabled_h__ && a.shiftKey ? (e = this.__idxToCell_j__(this.__consts_a__.__PGUP_g__, this.__range_c__), this.selectRange(e)) : (e = this.__idxToCell_j__(this.__consts_a__.__PGUP_g__, this.__last_b__), this.selectCell(e));
              break;
            case Util.keyMapKeydown.pgdn:
              this._options.__multiSelectEnabled_h__ && a.shiftKey ? (e = this.__idxToCell_j__(this.__consts_a__.__PGDN_f__, this.__range_c__), this.selectRange(e)) : (e = this.__idxToCell_j__(this.__consts_a__.__PGDN_f__, this.__last_b__), this.selectCell(e));
              break;
            case Util.keyMapKeydown.space:
              e = a.shiftKey ? this.__idxToCell_j__(this.__consts_a__.__PGUP_g__, this.__last_b__) : this.__idxToCell_j__(this.__consts_a__.__PGDN_f__, this.__last_b__);
              this.selectCell(e);
              break;
            case Util.keyMapKeydown.home:
              this._options.__multiSelectEnabled_h__ && a.shiftKey ? (e = this.__idxToCell_j__(this.__consts_a__.__HOME_h__, this.__range_c__), this.selectRange(e)) : (e = this.__idxToCell_j__(this.__consts_a__.__HOME_h__, this.__last_b__), this.selectCell(e));
              break;
            case Util.keyMapKeydown.end:
              this._options.__multiSelectEnabled_h__ && a.shiftKey ? (e = this.__idxToCell_j__(this.__consts_a__.__END_i__, this.__range_c__), this.selectRange(e)) : (e = this.__idxToCell_j__(this.__consts_a__.__END_i__, this.__last_b__), this.selectCell(e))
          }
          this.grid.event.trigger("onAfterNavigate", [e])
        }
      }else {
        if(this.__cols_e__.length === 1) {
          var c = this.grid.colDefMgr, b, d = this.__cols_e__;
          for(b in d) {
            if(d.hasOwnProperty(b) && b !== "length") {
              e = c.get(b).key, this.grid.event.trigger("keydownColSel_" + e + "_" + a.which + " keydownColSel_" + e, [a, d[b], this.__last_b__])
            }
          }
        }
        if(this.__rows_d__.length === 1) {
          var f;
          b = this.__rows_d__;
          for(f in b) {
            b.hasOwnProperty(f) && f !== "length" && this.grid.event.trigger("keydownRowSel_" + a.which + " keydownRowSel", [a, b[f], this.__last_b__])
          }
        }
        this.grid.event.trigger("keydownSel_" + a.which + " keydownSel", [a, this.__rows_d__, this.__cols_e__])
      }
    }
  };
  b.getCell = function() {
    if(Util.isNotNull(this.__last_b__)) {
      return this.__last_b__
    }
  };
  b.__isSelected_h__ = function(a) {
    return Util.isNotNull(this.__last_b__) && this.__last_b__.equals(a)
  };
  JGM.Cell.prototype.isSelected = function() {
    return this.grid.selMgr.__isSelected_h__(this)
  };
  b.__getCellIdxToNavigate_i__ = function(a, e, c) {
    switch(a) {
      case this.__consts_a__.__RIGHT_d__:
        c < this.grid.colDefMgr.length() - 1 && c++;
        break;
      case this.__consts_a__.__LEFT_c__:
        c > 0 && c--;
        break;
      case this.__consts_a__.__DOWN_b__:
        e < this.grid.dataMgr.datalist.length - 1 && e++;
        break;
      case this.__consts_a__.__UP_a__:
        e > 0 && e--;
        break;
      case this.__consts_a__.__PGDN_f__:
        e += this.grid.view._options.__rowsPerPage_e__;
        e > this.grid.dataMgr.datalist.length - 1 && (e = this.grid.dataMgr.datalist.length - 1);
        break;
      case this.__consts_a__.__PGUP_g__:
        e -= this.grid.view._options.__rowsPerPage_e__;
        e < 0 && (e = 0);
        break;
      case this.__consts_a__.__HOME_h__:
        e = 0;
        break;
      case this.__consts_a__.__END_i__:
        e = this.grid.dataMgr.datalist.length - 1
    }
    return[e, c]
  };
  b.__idxToCell_j__ = function(a, e) {
    var c = this.__getCellIdxToNavigate_i__(a, e.getRowIdx(), e.getColIdx());
    return JGM.create("Cell", {grid:this.grid, row:c[0], col:c[1]})
  };
  b.selectRow = function(a) {
    var e = a.getRowIdx(), c = a.getColIdx();
    this.__setRange_l__(e, c, a);
    this.__setLast_k__(e, c, a);
    this.__setSelMap_p__(this.__getRowMap_s__(e, c, a))
  };
  b.selectCell = function(a, e) {
    this.grid.event.trigger("onBeforeSelectCell", [a]);
    if(this._options.__multiSelectEnabled_h__ && a.getKey() === this._options.__rowSelKey_a__) {
      this.selectRow(a)
    }else {
      var c = a.getRowIdx(), b = a.getColIdx();
      this.__setRange_l__(c, b, a, e);
      this.__setLast_k__(c, b, a);
      this.__setSelMap_p__(this.__getCellMap_q__(c, b, a))
    }
    this.grid.event.trigger("onAfterSelectCell", [a])
  };
  b.onBeforeDataChange = function() {
  };
  b.__onBeforeRerender_t__ = function() {
    if(Util.isNotNull(this.__last_b__)) {
      this.toSelect = this.__last_b__
    }
    this.empty()
  };
  b.onAfterRerender = function() {
    Util.isNotNull(this.toSelect) && (this.selectCell(this.toSelect, !0), this.grid.view.scrollToRowLazy(this.toSelect.getRowIdx()))
  };
  b.addRow = function(a) {
    var e = a.getRowIdx(), c = a.getColIdx();
    this.__setRange_l__(e, c, a);
    this.__setLast_k__(e, c, a);
    this.__addSelMap_m__(this.__getRowMap_s__(e, c, a))
  };
  b.addCell = function(a) {
    var e = a.getRowIdx(), c = a.getColIdx();
    this.__setRange_l__(e, c, a);
    this.__setLast_k__(e, c, a);
    this.__addSelMap_m__(this.__getCellMap_q__(e, c, a))
  };
  b.selectRange = function(a) {
    var e = a.getRowIdx(), c = a.getColIdx(), b = this.__last_b__.getRowIdx(), d = this.__last_b__.getColIdx(), f = b < e ? b : e, b = b < e ? e : b, h;
    this.__setRange_l__(e, c, a);
    a.getKey() === this._options.__rowSelKey_a__ ? (h = 0, d = this.grid.colDefMgr.length() - 1) : (h = d < c ? d : c, d = d < c ? c : d);
    this.__setSelMap_p__(this.__getRangeMap_r__(f, h, b, d, e, c, a));
    return{minRow:f, minCol:h, maxRow:b, maxCol:d}
  };
  b.__setLast_k__ = function(a, e, c) {
    var e = this.__last_b__, b;
    Util.isNotNull(e) && (b = e.getRowIdx(), a !== b && Util.isNotNull(this.__range_c__) && b !== this.__range_c__.getRowIdx() && this.grid.view.unlockRowById(e.getId()), e.get$().removeClass(this._options.__classLast_f__), this._options.highlightRowEnabled === !0 && $(e.getRowNode()).removeClass(this._options.classRowSelected), Util.isNull(c) && delete this.__last_b__);
    if(!Util.isNull(c)) {
      (this.__last_b__ = c).get$().addClass(this._options.__classLast_f__), this._options.highlightRowEnabled === !0 && $(c.getRowNode()).addClass(this._options.classRowSelected), this.grid.view.lockRowByIdx(a)
    }
  };
  b.__setRange_l__ = function(a, e, c, b) {
    var d = this.__range_c__;
    if(Util.isNotNull(d)) {
      var f = d.getRowIdx();
      if(a === f && e === d.getColIdx()) {
        return
      }
      a !== f && Util.isNotNull(this.__last_b__) && f !== this.__last_b__.getRowIdx() && this.grid.view.unlockRowById(d.getId());
      d.get$().removeClass(this._options.__classRange_g__);
      Util.isNull(c) && delete this.__range_c__
    }
    if(!Util.isNull(c)) {
      (this.__range_c__ = c).get$().addClass(this._options.__classRange_g__), c = this.grid.view, c.lockRowByIdx(a), b || c.scrollToLazy(a, e)
    }
  };
  b.__addSelMap_m__ = function(a) {
    var e = this.__rows_d__, c, b, d, f;
    for(d in a) {
      if(a.hasOwnProperty(d) && (b = a[d], e.hasOwnProperty(d))) {
        for(f in c = e[d], b) {
          b.hasOwnProperty(f) && c.hasOwnProperty(f) && (b[f] instanceof JGM.Cell && (c[f] = b[f]), delete b[f])
        }
      }
    }
    this.addOrRemoveCss({}, !0);
    this.__addToMaps_n__(a)
  };
  b.__setSelMap_p__ = function(a) {
    var e = this.__rows_d__, c, b, d, f, h = {};
    for(d in e) {
      if(e.hasOwnProperty(d) && d !== "length") {
        if(c = e[d], a.hasOwnProperty(d)) {
          for(f in b = a[d], c) {
            c.hasOwnProperty(f) && f !== "length" && (b.hasOwnProperty(f) ? (b[f] instanceof JGM.Cell && (c[f] = b[f]), delete b[f]) : (h.hasOwnProperty(d) || (h[d] = {}), h[d][f] = !0))
          }
        }else {
          for(f in b = h[d] = {}, c) {
            c.hasOwnProperty(f) && f !== "length" && (b[f] = !0)
          }
        }
      }
    }
    this.__removeFromMaps_o__(h);
    this.addOrRemoveCss({}, !1);
    this.__addSelMap_m__(a)
  };
  b.addOrRemoveCss = function(a, e) {
    var c = [], b, d, f, h = this.grid.view;
    for(b in a) {
      if(a.hasOwnProperty(b)) {
        for(d in f = a[b], f) {
          f.hasOwnProperty(d) && (f[d] instanceof JGM.Cell ? c.push(f[d].getNode()) : c.push(h.getCell(b, d)))
        }
      }
    }
    c = c.filter(function(a) {
      return Util.isNotNull(a)
    });
    e ? $(c).addClass(this._options.__classSelection_e__) : $(c).removeClass(this._options.__classSelection_e__)
  };
  b.__addToMaps_n__ = function(a) {
    var e, c, b, d = this.__rows_d__, f = this.__cols_e__, h;
    for(e in a) {
      if(a.hasOwnProperty(e)) {
        for(c in h = a[e], h) {
          h.hasOwnProperty(c) && (b = Util.isNull(b = h[c]) ? !0 : b, d.hasOwnProperty(e) ? d[e].length++ : (d[e] = {length:1}, d.length++), d[e][c] = b, f.hasOwnProperty(c) ? f[c].length++ : (f[c] = {length:1}, f.length++), f[c][e] = b)
        }
      }
    }
  };
  b.__removeFromMaps_o__ = function(a) {
    var e, c, b = this.__rows_d__, d = this.__cols_e__, f;
    for(e in a) {
      if(a.hasOwnProperty(e)) {
        for(c in f = a[e], f) {
          f.hasOwnProperty(c) && (--b[e].length === 0 ? (delete b[e], b.length--) : delete b[e][c], --d[c].length === 0 ? (delete d[c], d.length--) : delete d[c][e])
        }
      }
    }
  };
  b.__getCellMap_q__ = function(a, e, c) {
    var b = {};
    b[a] = {};
    b[a][e] = c;
    return b
  };
  b.__getRowMap_s__ = function(a, e, c) {
    var b = {}, d = this.grid.colDefMgr.length(), f = 0;
    for(b[a] = {};f < d;f++) {
      b[a][f] = !0
    }
    b[a][e] = c;
    return b
  };
  b.__getRangeMap_r__ = function(a, e, c, b, d, f, h) {
    for(var k = {}, j;a <= c;a++) {
      k[a] = {};
      for(j = e;j <= b;j++) {
        k[a][j] = !0
      }
    }
    k[d][f] = h;
    return k
  };
  b.empty = function() {
    this.__setLast_k__();
    this.__setRange_l__();
    this.__setSelMap_p__({})
  }
})();
jx.grid.EditManager = {};
jx.grid.Editor = {};
(function() {
  function d(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    this.grid.editMgr = this;
    this._options = JGM.__extend_e__({__classEdit_a__:"jgrid-edit", __classCellEditable_b__:"jgrid-editable", __classCellNotEditable_c__:"jgrid-notEditable", __editableBgEnabled_d__:!1, __notEditableBgEnabled_e__:!1, __editableBg_f__:"#FFF", __notEditableBg_g__:"#F6F6F6", __deleteEnabled_h__:!1, __editIconEnabled_i__:!0, __urlEditIcon_j__:this.grid._options.imageUrl + "editable-small.png", __classEditIcon_k__:"edit-icon", __editIconWidth_l__:12, __editIconPadding_m__:3, __basicBackground_n__:"#FFF9D7", 
    classSuccess:"edit-success", successBackground:"#cdf7b6", classFailure:"edit-failure", failureBackground:"#ffcec5"}, a.options, {classEdit:"__classEdit_a__", classCellEditable:"__classCellEditable_b__", classCellNotEditable:"__classCellNotEditable_c__", editableBgEnabled:"__editableBgEnabled_d__", notEditableBgEnabled:"__notEditableBgEnabled_e__", editableBg:"__editableBg_f__", notEditableBg:"__notEditableBg_g__", deleteEnabled:"__deleteEnabled_h__", editIconEnabled:"__editIconEnabled_i__", urlEditIcon:"__urlEditIcon_j__", 
    classEditIcon:"__classEditIcon_k__", editIconWidth:"__editIconWidth_l__", editIconPadding:"__editIconPadding_m__", basicBackground:"__basicBackground_n__"});
    this.__beginEditKeys_c__ = Util.which(["number", "alphabet", "del", "backspace"]);
    this.__init()
  }
  function b(a) {
    for(var c in a) {
      a.hasOwnProperty(c) && (this[c] = a[c])
    }
  }
  goog.exportSymbol("jx.grid.EditManager", d);
  goog.exportSymbol("jx.grid.Editor", b);
  JGM._add("EditManager", d);
  JGM._add("Editor", b);
  d.getInstance = function(a) {
    return new d(a)
  };
  var a = d.prototype;
  a.__init = function() {
    this.bindEvents()
  };
  a.bindEvents = function() {
    var a = {onGetColCellClass:this.__onGetColCellClass_f__, keydownCanvas:this.__keydownCanvas_ba__, onDestroy:this.__destroy_aA__, dblclickCanvas:this.__dblclickCanvas_bi__, onCreateDynamicCss:this.onCreateDynamicCss, "onBeforeNavigate onBeforeRefresh onBeforeSelect":this.commit, onBeforeFocusCanvas:this.notActive};
    Util.isNull(this.grid.selMgr) ? a.onCreateCss = this.__onBeforeCreateSelCss_d__ : a.onBeforeCreateSelCss = this.__onBeforeCreateSelCss_d__;
    if(this._options.__deleteEnabled_h__) {
      a["keydownSel_" + Util.keyMapKeydown.del] = this.__deleteContents_i__
    }
    if(this._options.__editIconEnabled_i__) {
      for(var c = this.grid.colDefMgr.get(), b = c.length, d = 0;d < b;d++) {
        if(Util.isNotNull(c[d].editor)) {
          a["onRenderHeader_" + c[d].key + "_prepend"] = this.__onRenderHeader_aH__
        }
      }
    }
    this.grid.event.bind(a, this)
  };
  a.__destroy_aA__ = function() {
    this.__deleteEditor_g__();
    JGM._destroy(this, {name:"EditManager", path:"editMgr", map:"__beginEditKeys_c__ _options"})
  };
  a.__onBeforeCreateSelCss_d__ = function() {
    var a = "#" + this.grid.mid + " .", c = this._options, b = [], d = this.grid.view.__getRowInnerHeight_AO__();
    b.push(this.grid.view.__getCellSelector_AG__() + "." + c.__classEdit_a__ + "{background:" + c.__basicBackground_n__ + "}");
    b.push(a + c.__classEdit_a__ + " input{position:absolute;z-index:10;top:0;padding:0;border:0;margin:0;background:" + c.__basicBackground_n__ + ";height:" + d + "px;line-height:" + d + "px}");
    c.__editableBgEnabled_d__ && b.push(a + c.__classCellEditable_b__ + "{background:" + c.__editableBg_f__ + "}");
    c.__notEditableBgEnabled_e__ && b.push(a + c.__classCellNotEditable_c__ + "{background:" + c.__notEditableBg_g__ + "}");
    c.__editIconEnabled_i__ && b.push(a + c.__classEditIcon_k__ + "{float:left;position:absolute;left:0;top:0;padding:0 " + c.__editIconPadding_m__ + "px;width:" + c.__editIconWidth_l__ + "px;height:" + d + "px;background:url(" + c.__urlEditIcon_j__ + ") no-repeat center transparent}");
    b.push(a + c.classSuccess + "{background:" + c.successBackground + "}");
    b.push(a + c.classFailure + "{background:" + c.failureBackground + "}");
    return b.join("")
  };
  a.onCreateDynamicCss = function() {
    for(var a = this.grid.view.__getCellSelector_AG__(), c = this.grid.view.__getPadding_AM__(), b = this.grid.colDefMgr.get(), d = 0, f = "";d < b.length;d++) {
      Util.isNotNull(b[d].editor) && (f += a + ".k_" + b[d].key + " .basic-editor{width:" + (b[d].width - 2 * c) + "px}")
    }
    return f
  };
  a.__onRenderHeader_aH__ = function(a) {
    a.push("<span class='" + this._options.__classEditIcon_k__ + "'></span>")
  };
  a.__onRenderCell_aH__ = function(a, c, b, d, f) {
    this.grid.dataMgr.isReal(b) && f.push("<span class='" + this._options.__classEditIcon_k__ + "' title='클릭하여 에디팅을 시작합니다' onclick='JGM.m.EditManager." + this.mid + '.beginEdit("' + b[this.grid.dataMgr.idKey] + '","' + d.key + "\")'></span>")
  };
  a.cancelMouseEvent = function(a) {
    return!Util.hasTagAndClass(a.target, "DIV", this._options.__classEditIcon_k__)
  };
  a.beginEdit = function(a, c) {
    this.begin(JGM.create("Cell", {grid:this.grid, datarow:this.grid.dataMgr.getById(a), colDef:this.grid.colDefMgr.getByKey(c)}))
  };
  a.__dblclickCanvas_bi__ = function(a, c) {
    c.isEdited() || this.begin(c)
  };
  a.__keydownCanvas_ba__ = function(a) {
    this.active() ? a.which === Util.keyMapKeydown.esc && this.cancel() : !a.ctrlKey && !a.altKey && Util.isNotNull(this.grid.selMgr) && (a.which === Util.keyMapKeydown.del && this._options.__deleteEnabled_h__ ? this.__deleteContent_h__(this.grid.selMgr.getCell()) : this.__beginEditKeys_c__[a.which] ? this.begin(this.grid.selMgr.getCell()) : a.which === Util.keyMapKeydown.f2 && (a.preventDefault(), this.begin(this.grid.selMgr.getCell())))
  };
  a.active = function() {
    return Util.isNotNull(this.editor)
  };
  a.notActive = function() {
    return Util.isNull(this.editor)
  };
  a.__isEdited_e__ = function(a) {
    return this.active() && this.editor.cell.equals(a)
  };
  a.__onGetColCellClass_f__ = function(a) {
    return Util.isNotNull(a.editor) ? this._options.__classCellEditable_b__ : this._options.__classCellNotEditable_c__
  };
  JGM.Cell.prototype.isEdited = function() {
    return this.grid.editMgr.__isEdited_e__(this)
  };
  JGM.Cell.prototype.setValue = function(a) {
    var c = this.getDatarow(), b = this.getKey(), d;
    Util.isNotNullAnd(c, b) && (d = this.grid.dataMgr.updateByKey(c, b, a, {noSort:!0, noFilter:!0, noRerender:!0}), d === !0 && this.grid.view.rerenderRow(c));
    return d
  };
  a.isEditable = function(a) {
    return Util.isNotNull(a) && Util.isNotNull(a.getColDef().editor) && this.grid.dataMgr.isReal(a.getDatarow())
  };
  a.begin = function(a) {
    this.active() && this.commit();
    if(this.isEditable(a)) {
      this.editor = a.getColDef().editor;
      this.editor.cell = a;
      this.editor.grid = this.grid;
      var c = a.getNode();
      this.editor.before = c.innerHTML;
      c.innerHTML = this.editor.edit(a.getValue());
      a.get$().addClass(this._options.__classEdit_a__);
      this.editor.focus()
    }
  };
  a.cancel = function() {
    if(this.active()) {
      var a = this.editor.cell;
      a.getNode().innerHTML = this.editor.before;
      this.__deleteEditor_g__();
      a.get$().removeClass(this._options.__classEdit_a__);
      this.grid.view.focus()
    }
  };
  a.__deleteEditor_g__ = function() {
    Util.isNotNull(this.editor) && (delete this.editor.grid, delete this.editor.cell, delete this.editor.before, delete this.editor)
  };
  a.commit = function() {
    if(!this.beingCommitted && this.active()) {
      this.beingCommitted = !0;
      var a = this.editor.cell, c = this.editor.value(a.getNode()), b;
      if(c == a.getValue()) {
        this.cancel()
      }else {
        var c = a.setValue(c), d;
        b = a.get$();
        c instanceof Error ? (this.cancel(), d = this._options.classFailure) : (this.__deleteEditor_g__(), this.grid.view.focus(), d = this._options.classSuccess, this.grid.printMessage("Successfully Updated."));
        b.addClass(d);
        setTimeout(function() {
          b.removeClass(d)
        }, 1E3)
      }
      a.get$().removeClass(this._options.__classEdit_a__);
      this.beingCommitted = !1
    }
  };
  a.__deleteContent_h__ = function(a) {
    if(!this.active() && this.isEditable(a)) {
      var c = a.getColDef();
      a.getValue() !== c.defaultValue && a.setValue(c.defaultValue)
    }
  };
  a.__deleteContents_i__ = function(a, c, b) {
    if(!this.active()) {
      var a = {}, c = {}, d = [], f, h, k, j, m, l, n;
      a:for(f in b) {
        if(b.hasOwnProperty(f) && f !== "length") {
          for(n in j = k = h = void 0, l = b[f], l) {
            if(l.hasOwnProperty(n) && !(n === "length" || c.hasOwnProperty(n))) {
              m = l[n].cell;
              if(Util.isNull(h) && (h = m.getColDef(), k = h.defaultValue, j = h.key, Util.isNull(h.editor))) {
                continue a
              }
              m = Util.isNotNull(a[n]) ? a[n].datarow : m.getDatarow();
              this.grid.dataMgr.isReal(m) ? k !== m[j] && (Util.isNull(a[n]) && (a[n] = {datarow:m, change:{}}, d.push(a[n])), a[n].change[j] = k) : c[n] = !0
            }
          }
        }
      }
      d.length !== 0 && this.grid.dataMgr.updateList(d)
    }
  };
  b.getInstance = function(a) {
    return new b(a)
  };
  a = b.prototype;
  a.edit = function(a) {
    return"<input type='text' class='basic-editor' value='" + Util.ifNull(a, "") + "' style='position:relative'/>"
  };
  a.focus = function() {
    var a = this.cell.getNode().childNodes[0];
    if(Util.isFunction(a.setActive)) {
      try {
        a.setActive()
      }catch(c) {
      }
    }
    a.focus();
    document.activeElement !== a && this.cell.get$().children(":eq(0)").focus()
  };
  a.value = function(a) {
    return a.childNodes[0].value
  };
  a.path = function() {
    return"JGM.m.Editor." + this.mid
  };
  b.numberKeys = Util.which(["number", "del", "backspace"]);
  b.isNumberKey = function(a) {
    return this.numberKeys[a] ? !0 : !1
  };
  b.numberEdit = function(a) {
    a = a.getValue();
    return"<input type='text' class='basic-editor' onkeydown='if (!JGM.Editor.isNumberKey(event.which)) return false;' value='" + Util.ifNull(a, "") + "'/>"
  };
  b.floatKeys = Util.which(["number", ".", "del", "backspace"]);
  b.isFloatKey = function(a) {
    return this.floatKeys[a] ? !0 : !1
  };
  b.floatEdit = function(a) {
    a = a.getValue();
    return"<input type='text' class='basic-editor' onkeydown='if (!JGM.Editor.isFloatKey(event.which)) return false;' value='" + Util.ifNull(a, "") + "'/>"
  };
  b.alphabetKeys = Util.which(["alphabet", "del", "backspace", "space"]);
  b.isAlphabet = function(a) {
    return this.alphabetKeys[a] ? !0 : !1
  };
  b.alphabetEdit = function(a) {
    a = a.getValue();
    return"<input type='text' class='basic-editor' onkeydown='if (!JGM.Editor.isAlphabet(event.which)) return false;' value='" + Util.ifNull(a, "") + "'/>"
  }
})();
jx.grid.PrintManager = {};
(function() {
  function d(a) {
    this.mid = a.mid;
    this._ctnr = Util$.safe$(a.container);
    this.grid = a.grid;
    this._options = JGM.__extend_e__({title:"Print Preview", font:"15px arial,sans-serif", headerFontColor:"#27413E", headerBackgroundColor:"#DCDEDE", tableBorderColor:"#6E7174", headerBorderColor:"#909192", cellBorderColor:"#D0D7E5", winOptions:{name:"Print Preview", width:800, height:600, directories:"no", location:"no", menubar:"no", status:"no", toolbar:"no"}}, a.options);
    this.__init()
  }
  goog.exportSymbol("jx.grid.PrintManager", d);
  JGM._add("PrintManager", d);
  d.getInstance = function(a) {
    return new d(a)
  };
  var b = d.prototype;
  b.__init = function() {
    var a = this;
    this._ctnr[0].innerHTML = "<button type='button'>Print</button>";
    this._ctnr.click(function() {
      a.print()
    })
  };
  b.print = function() {
    var a = this.getPrintHtml(this.grid.colDefMgr.get(), this.grid.dataMgr.datalist), e = Util.open(this._options.winOptions);
    e.document.write(a);
    e.document.close()
  };
  b.getPrintHtml = function(a, e) {
    var c = this._options, b = c.tableBorderColor, d = c.headerBorderColor, f = c.cellBorderColor, h = [], k = a.length, j = k - 1, m = e.length, l = m - 1, n = 0, o;
    h.push("<html><head>");
    h.push("<title>" + c.title + "</title>");
    h.push("</head><body onload='window.print();'>");
    h.push("<table width='100%' cellspacing='0' cellpadding='0'><tbody><tr><td align='left'>");
    h.push("<table width='100%' cellspacing='0' cellpadding='2' style='border-collapse:collapse'>");
    h.push("<tbody style='font:" + c.font + ";'>");
    for(h.push("<tr style='background-color:" + c.headerBackgroundColor + ";color:" + c.headerFontColor + ";text-align:center'>");n < k;n++) {
      h.push("<td style='border:solid 1px " + d + ";'>" + a[n].name + "</td>")
    }
    h.push("</tr>");
    for(n = 0;n < m;n++) {
      c = e[n];
      h.push("<tr>");
      if(n === 0) {
        for(o = 0;o < k;o++) {
          o === 0 ? h.push("<td style='border:solid 1px " + f + ";border-top:solid 1px " + d + ";border-left:solid 1px " + b + "'>" + c[a[o].key] + "</td>") : o === j ? h.push("<td style='border:solid 1px " + f + ";border-top:solid 1px " + d + ";border-right:solid 1px " + b + "'>" + c[a[o].key] + "</td>") : h.push("<td style='border:solid 1px " + f + ";border-top:solid 1px " + d + "'>" + c[a[o].key] + "</td>")
        }
      }else {
        if(n < l) {
          for(o = 0;o < k;o++) {
            o === 0 ? h.push("<td style='border:solid 1px " + f + ";border-left:solid 1px " + b + "'>" + c[a[o].key] + "</td>") : o === j ? h.push("<td style='border:solid 1px " + f + ";border-right:solid 1px " + b + "'>" + c[a[o].key] + "</td>") : h.push("<td style='border:solid 1px " + f + "'>" + c[a[o].key] + "</td>")
          }
        }else {
          for(o = 0;o < k;o++) {
            o === 0 ? h.push("<td style='border:solid 1px " + f + ";border-bottom:solid 1px " + b + ";border-left:solid 1px " + b + "'>" + c[a[o].key] + "</td>") : o === j ? h.push("<td style='border:solid 1px " + f + ";border-bottom:solid 1px " + b + ";border-right:solid 1px " + b + "'>" + c[a[o].key] + "</td>") : h.push("<td style='border:solid 1px " + f + ";border-bottom:solid 1px " + b + "'>" + c[a[o].key] + "</td>")
          }
        }
      }
      h.push("</tr>")
    }
    h.push("</tbody></table></td></tr></tbody></table></body></html>");
    return h.join("")
  }
})();
jx.grid.ColumnHeader = {};
(function() {
  function d(a) {
    this.mid = a.mid;
    this._ctnr = a.container;
    this.grid = a.grid;
    this.grid.header = this;
    this._options = JGM.__extend_e__({__reorderEnabled_a__:!1, __reorderSyncEnabled_b__:!0, __background_c__:"url(" + this.grid._options.imageUrl + "column-headers-bg.png) repeat-x scroll center", __backgroundHover_d__:"url(" + this.grid._options.imageUrl + "column-headers-over-bg.png) repeat-x scroll center", __backgroundPlaceholder_e__:"#646464", __sortBackground_f__:this.grid._options.imageUrl + "sort.png", __sortRight_g__:4, __sortWidth_h__:7, __sortBackgroundAsc_i__:this.grid._options.imageUrl + 
    "sort-asc.png", __sortBackgroundDesc_j__:this.grid._options.imageUrl + "sort-desc.png", __font_k__:"15px Arial,Helvetica,sans-serif", __height_l__:21, __borderThickness_n__:1, __border_o__:"solid #909192", __classHeaderMask_p__:"jgrid-header-mask", __classHeader_q__:"jgrid-header", __classColHeader_r__:"jgrid-colheader", __classColHeaderActive_s__:"jgrid-colheader-active", __classColHeaderPlaceholder_t__:"jgrid-colheader-placeholder", __classInteractive_u__:"interactive", __classColHeaderSorted_v__:"jgrid-colheader-sorted", 
    __classSort_w__:"jgrid-sort", __classSortAsc_x__:"jgrid-sort-asc", __classSortDesc_y__:"jgrid-sort-desc", __classResizeHandle_z__:"jgrid-resize-handle", __resizeHandleWidth_A__:11, __style_B__:"", __headerStyle_C__:"", __scrollerLeft_D__:1E4, __scrollerWidth_E__:1E5, __classResizeGuide_F__:"resize-guide", __resizeGuideWidth_G__:1, __resizeBackground_H__:"black;filter:alpha(opacity=40);opacity:0.4", __syncResize_I__:!1, __resizeHandleBackground_J__:"black;filter:alpha(opacity=5);opacity:0.05"}, 
    a.options, {reorderEnabled:"__reorderEnabled_a__", reorderSyncEnabled:"__reorderSyncEnabled_b__", background:"__background_c__", backgroundHover:"__backgroundHover_d__", backgroundPlaceholder:"__backgroundPlaceholder_e__", sortBackground:"__sortBackground_f__", sortRight:"__sortRight_g__", sortWidth:"__sortWidth_h__", sortBackgroundAsc:"__sortBackgroundAsc_i__", sortBackgroundDesc:"__sortBackgroundDesc_j__", font:"__font_k__", height:"__height_l__", borderThickness:"__borderThickness_n__", border:"__border_o__", 
    classHeaderMask:"__classHeaderMask_p__", classHeader:"__classHeader_q__", classColHeader:"__classColHeader_r__", classColHeaderActive:"__classColHeaderActive_s__", classColHeaderPlaceholder:"__classColHeaderPlaceholder_t__", classInteractive:"__classInteractive_u__", classColHeaderSorted:"__classColHeaderSorted_v__", classSort:"__classSort_w__", classSortAsc:"__classSortAsc_x__", classSortDesc:"__classSortDesc_y__", classResizeHandle:"__classResizeHandle_z__", resizeHandleWidth:"__resizeHandleWidth_A__", 
    style:"__style_B__", headerStyle:"__headerStyle_C__", scrollerLeft:"__scrollerLeft_D__", scrollerWidth:"__scrollerWidth_E__", classResizeGuide:"__classResizeGuide_F__", resizeGuideWidth:"__resizeGuideWidth_G__", resizeBackground:"__resizeBackground_H__", syncResize:"__syncResize_I__", resizeHandleBackground:"__resizeHandleBackground_J__"});
    this.__map_d__ = {};
    this.__resizeMap_r__ = {};
    this.__init()
  }
  goog.exportSymbol("jx.grid.ColumnHeader", d);
  JGM._add("ColHeader", d);
  d.getInstance = function(a) {
    return new d(a)
  };
  var b = d.prototype;
  b.__init = function() {
    this.__mask_a__ = $("<div class='" + this._options.__classHeaderMask_p__ + "'>").prependTo(this._ctnr);
    this.__head_c__ = $("<div class='" + this._options.__classHeader_q__ + "'>").appendTo(this.__mask_a__);
    d.__disableSel_e__(this.__head_c__);
    this.bindEvents()
  };
  b.bindEvents = function() {
    var a, e = this.grid.colDefMgr.get(), c = e.length, b = 0;
    for(a = {onRenderModules:this.__onRenderModules_aE__, onAfterRenderModules:this.__onAfterRenderModules_aF__, onCreateCss:this.__onCreateCss_V__, onDestroy:this.__destroy_aA__, mousedown:this._mousedown, mouseup:this._mouseup, dragmove:this.__dragmove_H__, onScrollViewportH:this.__onScrollViewportH_bo__, onScrollViewportV:this.__onScrollViewportV_C__, onChangeSorter:this.__onChangeSorter_l__, click:this._click, onResizeCol:this.__setWidthByKey_z__};b < c;b++) {
      if(Util.isNotNull(e[b].sorter)) {
        a["clickHeader_" + e[b].key] = this.__sort_i__
      }
    }
    this.grid.event.bind(a, this)
  };
  b.__destroy_aA__ = function() {
    this.__head_c__.sortable && this.__head_c__.sortable("destroy");
    this.__destroyResizeHandles_t__();
    JGM._destroy(this, {name:"ColHeader", path:"header", $:"__resizeGuide_w__ __mask_a__ __head_c__", property:"_ctnr __resizeMap_r__", map:"__map_d__ _options"})
  };
  b.__onCreateCss_V__ = function() {
    var a = "#" + this.grid.mid + " .", e = this._options, c = e.__borderThickness_n__ + "px " + e.__border_o__, b = [], d = this.grid.colDefMgr.get(), f = d.length, h = 0;
    b.push(a + e.__classHeaderMask_p__ + "{position:relative;overflow:hidden;width:100%;font:" + e.__font_k__ + ";background:" + e.__background_c__ + ";border-bottom:" + c + ";" + e.__style_B__ + "}");
    b.push(a + e.__classHeader_q__ + "{position:relative;overflow:hidden;white-space:nowrap;cursor:default;left:" + -e.__scrollerLeft_D__ + "px;width:" + e.__scrollerWidth_E__ + "px;line-height:" + e.__height_l__ + "px}");
    b.push(a + e.__classColHeader_r__ + "{position:relative;overflow:hidden;float:left;text-overflow:ellipsis;text-align:center;height:" + e.__height_l__ + "px;left:" + (e.__scrollerLeft_D__ - this.grid.view.getScrollLeft()) + "px;border-right:" + c + ";" + e.__headerStyle_C__ + "}");
    b.push(a + e.__classColHeader_r__ + "." + e.__classInteractive_u__ + ":hover, " + a + e.__classColHeaderActive_s__ + "{background:" + e.__backgroundHover_d__ + "}");
    b.push(a + e.__classColHeaderActive_s__ + "{border-left:" + c + "}");
    b.push(a + e.__classColHeader_r__ + "." + e.__classColHeaderPlaceholder_t__ + "{background:" + e.__backgroundPlaceholder_e__ + "!important}");
    b.push(a + e.__classSort_w__ + "{position:absolute;height:" + e.__height_l__ + "px;right:" + e.__sortRight_g__ + "px;width:" + e.__sortWidth_h__ + "px;background:url(" + e.__sortBackground_f__ + ") no-repeat center transparent}");
    b.push(a + e.__classSortAsc_x__ + "{background:url(" + e.__sortBackgroundAsc_i__ + ") no-repeat center transparent}");
    b.push(a + e.__classSortDesc_y__ + "{background:url(" + e.__sortBackgroundDesc_j__ + ") no-repeat center transparent}");
    b.push(a + e.__classResizeHandle_z__ + "{z-index:10;background:" + e.__resizeHandleBackground_J__ + ";cursor:e-resize;position:absolute;height:" + e.__height_l__ + "px;width:" + e.__resizeHandleWidth_A__ + "px}");
    for(b.push(a + e.__classResizeGuide_F__ + "{z-index:10;position:absolute;background:" + e.__resizeBackground_H__ + ";width:" + e.__resizeGuideWidth_G__ + "px}");h < f;h++) {
      b.push(a + e.__classColHeader_r__ + "#" + this.mid + "h" + d[h].key + "{" + d[h].headerStyle + "}")
    }
    return b.join("")
  };
  b.__widthPlus_f__ = function() {
    return this._options.__borderThickness_n__
  };
  b.__onScrollViewportH_bo__ = function(a) {
    this.__head_c__[0].style.left = -this._options.__scrollerLeft_D__ - a + "px"
  };
  b.__onRenderModules_aE__ = function() {
    for(var a = this.grid.colDefMgr.get(), e = a.length, c = 0, b, d = [];c < e;c++) {
      (b = a[c]).hidden || this.__render_g__(d, b, c)
    }
    this.__head_c__[0].innerHTML = d.join("");
    this.grid.event.trigger("onRenderHeadersComplete")
  };
  b.__onAfterRenderModules_aF__ = function() {
    this._options.__reorderEnabled_a__ && this.__initReorder_k__();
    this.__initResizeHandles_u__();
    this.__resizeGuide_w__ = $("<div class='" + this._options.__classResizeGuide_F__ + "'>").appendTo(this.grid.view.__mask_a__);
    this.__resizeGuide_w__[0].style.top = "0px";
    this.__resizeGuide_w__[0].style.height = "0px"
  };
  b.__render_g__ = function(a, e, c) {
    if(!Util.isNull(e)) {
      var b = e.noName ? "" : e.name || e.key, d = this.__widthPlus_f__();
      a.push("<div id='" + this.mid + "h" + e.key + "' class='" + this._options.__classColHeader_r__ + " " + (this._options.__reorderEnabled_a__ || Util.isNotNull(e.sorter) ? " " + this._options.__classInteractive_u__ : "") + "' " + (e.noTitle ? "" : "title='" + (e.title || b) + "' ") + "style='width:" + (this.grid.view.__getColOuterWidth_AK__(c) - d) + "px;' colKey='" + e.key + "'>");
      this.grid.event.trigger("onRenderHeader_" + e.key + "_prepend", [a]);
      a.push(b);
      this.grid.event.trigger("onRenderHeader_" + e.key + "_append", [a]);
      Util.isNotNull(e.sorter) && a.push("<span class='" + this._options.__classSort_w__ + "'></span>");
      a.push("</div>")
    }
  };
  d.__disableSel_e__ = function(a) {
    Util$.safe$(a).attr("unselectable", "on").css("MozUserSelect", "none").bind("selectstart.ui", function() {
      return!1
    })
  };
  b.get = function(a) {
    if(this.__map_d__.hasOwnProperty(a)) {
      return this.__map_d__[a]
    }
    var e = document.getElementById(this.mid + "h" + a);
    return Util.isNull(e) ? $([]) : this.__map_d__[a] = $(e)
  };
  b.__updateIndicator_m__ = function(a, e) {
    var c = this.get(a);
    if(c.length !== 0) {
      var b = this._options, d = c.find("." + b.__classSort_w__);
      e === 0 ? (c.removeClass(b.__classColHeaderSorted_v__), d.removeClass(b.__classSortAsc_x__ + " " + b.__classSortDesc_y__)) : (c.addClass(b.__classColHeaderSorted_v__), e === 1 ? d.addClass(b.__classSortAsc_x__).removeClass(b.__classSortDesc_y__) : e === 2 && d.addClass(b.__classSortDesc_y__).removeClass(b.__classSortAsc_x__))
    }
  };
  b.__closest_h__ = function(a) {
    return Util$.safe$(a).closest("div." + this._options.__classColHeader_r__, this.__head_c__)
  };
  b.__getDef_y__ = function(a) {
    return this.grid.colDefMgr.getByKey(a.attr("colKey"))
  };
  b.__sort_i__ = function(a, e, c) {
    a = c.sorter;
    if(!Util.isNull(a)) {
      this.grid.event.trigger("onBeforeColSort_" + c.key + " onBeforeColSort"), a.desc = a.desc === !1 ? !0 : !1, this.grid.dataMgr.refresh({sorter:a}), this.grid.view.__scroll_As__()
    }
  };
  b.__onChangeSorter_l__ = function(a, e) {
    a !== e && Util.isNotNull(a) && this.__updateIndicator_m__(a.key, 0);
    Util.isNotNull(e) && this.__updateIndicator_m__(e.key, e.desc ? 2 : 1)
  };
  b.__initReorder_k__ = function() {
    var a = this, e = this._options, c = this.grid.colDefMgr, b = this.__head_c__, d = this.mid.length + 1, f = function(a, e) {
      for(var f = $(b).sortable("toArray"), m = f.length, l, n = 0;n < m;n++) {
        l = f[n], f[n] = l === "" ? e.item.attr("id").substring(d) : l.substring(d)
      }
      c.sortByKey(f)
    };
    b.sortable({items:"." + e.__classColHeader_r__, axis:"x", forcePlaceholderSize:!0, placeholder:e.__classColHeaderPlaceholder_t__ + " " + e.__classColHeader_r__, tolerance:"pointer", start:function(c, e) {
      e.item.addClass(a._options.__classColHeaderActive_s__)
    }, stop:function(c, e) {
      e.item.removeClass(a._options.__classColHeaderActive_s__);
      a.__syncResizeHandles_A__()
    }, update:f});
    e.__reorderSyncEnabled_b__ && b.sortable("option", "change", f)
  };
  b.__getDx_s__ = function(a, e) {
    var c = a.clientX - this.__resizeInitX_o__, b = e.minW, d = Util.ifNull(e.maxW, Number.MAX_VALUE), f = this.__resizeInitWidth_q__;
    f + c < b && (c = b - f);
    f + c > d && (c = d - f);
    return c
  };
  b._click = function(a) {
    var e = this.__closest_h__(a.target);
    if(e.length !== 0) {
      var c = this.__getDef_y__(e);
      this.grid.event.triggerInvalid("clickHeaderValid_" + c.key, [a, e, c]) || this.grid.event.trigger("clickHeader_" + c.key + " clickHeader", [a, e, c])
    }
  };
  b._mousedown = function(a) {
    if(Util.hasTagAndClass(a.target, "DIV", this._options.__classResizeHandle_z__)) {
      this.__resizeKey_n__ = a.target.getAttribute("key"), this.__resizeInitWidth_q__ = this.get(this.__resizeKey_n__)[0].clientWidth, this.__resizeInitColWidth_v__ = this.grid.colDefMgr.getByKey(this.__resizeKey_n__).width, this.__resizeInitX_o__ = a.clientX, this.__resizeHandleInitX_p__ = this.__resizeMap_r__[this.__resizeKey_n__][0].offsetLeft, this.__resizeGuide_w__[0].style.left = Math.floor(this.__resizeHandleInitX_p__ + (this._options.__resizeHandleWidth_A__ - this._options.__resizeGuideWidth_G__) / 
      2 - this._options.__scrollerLeft_D__) + "px", this.__resizeGuide_w__[0].style.height = this.grid.view.getInnerHeight() + "px"
    }else {
      var e = this.__closest_h__(a.target);
      if(e.length !== 0) {
        this.grid.event.trigger("mousedownHeader", [a, e]);
        var c = this.__getDef_y__(e);
        this.grid.event.trigger("mousedownHeader_" + c.key, [a, e, c])
      }
    }
  };
  b.__dragmove_H__ = function(a) {
    if(!Util.isNull(this.__resizeKey_n__) && (a = this.__getDx_s__(a, this.grid.colDefMgr.getByKey(this.__resizeKey_n__)), !(Math.abs(a) < 1))) {
      this.get(this.__resizeKey_n__)[0].style.width = this.__resizeInitWidth_q__ + a + "px", this.__moveResizeHandles_B__(this.__resizeHandleInitX_p__ + a - this.__resizeMap_r__[this.__resizeKey_n__][0].offsetLeft, this.grid.colDefMgr.getIdxByKey(this.__resizeKey_n__)), this.__resizeGuide_w__[0].style.left = Math.floor(this.__resizeHandleInitX_p__ + a + (this._options.__resizeHandleWidth_A__ - this._options.__resizeGuideWidth_G__) / 2 - this._options.__scrollerLeft_D__) + "px", this._options.__syncResize_I__ && 
      this.grid.view.setWidthByKey(this.__resizeKey_n__, this.__resizeInitColWidth_v__ + a)
    }
  };
  b._mouseup = function(a) {
    if(!Util.isNull(this.__resizeKey_n__)) {
      this.__resizeGuide_w__[0].style.height = "0px", a = this.__getDx_s__(a, this.grid.colDefMgr.getByKey(this.__resizeKey_n__)), Math.abs(a) >= 1 && this.grid.view.setWidthByKey(this.__resizeKey_n__, this.__resizeInitColWidth_v__ + a), delete this.__resizeKey_n__, delete this.__resizeInitX_o__, delete this.__resizeHandleInitX_p__, delete this.__resizeInitWidth_q__, delete this.__resizeInitColWidth_v__
    }
  };
  b.__setWidthByKey_z__ = function(a, e) {
    this.get(a)[0].style.width = e + this.grid.view.__colWidthPlus_f__() - this.__widthPlus_f__() + "px";
    this.__syncResizeHandles_A__(this.grid.colDefMgr.getIdxByKey(a))
  };
  b.__syncResizeHandles_A__ = function(a) {
    Util.isNull(a) && (a = 0);
    for(var e = this.grid.view.__getColLefts_Bh__(), c = this.grid.colDefMgr.get(), b = c.length, d = this.__resizeMap_r__, f;a < b;a++) {
      if(f = c[a].key, d.hasOwnProperty(f)) {
        d[f][0].style.left = e[a + 1] + this.__resizeHandleOffset_D__ + "px"
      }
    }
  };
  b.__moveResizeHandles_B__ = function(a, e) {
    Util.isNull(e) && (e = 0);
    for(var c = this.grid.colDefMgr.get(), b = c.length, d = this.__resizeMap_r__, f;e < b;e++) {
      if(f = c[e].key, d.hasOwnProperty(f)) {
        f = d[f][0], f.style.left = f.offsetLeft + a + "px"
      }
    }
  };
  b.__onScrollViewportV_C__ = function() {
    this.__resizeGuide_w__[0].style.top = this.grid.view.getScrollTop() + "px"
  };
  b.__destroyResizeHandles_t__ = function() {
    var a = this.__resizeMap_r__, e;
    for(e in a) {
      a.hasOwnProperty(e) && (a[e].remove(), delete a[e])
    }
    delete this.__resizeKey_n__;
    delete this.__resizeInitX_o__;
    delete this.__resizeHandleInitX_p__;
    delete this.__resizeInitWidth_q__;
    delete this.__resizeInitColWidth_v__
  };
  b.__initResizeHandles_u__ = function() {
    for(var a = this.grid.colDefMgr.get(), e = a.length, c = this.grid.view.__getColLefts_Bh__(), b = this._options, d = this.__resizeMap_r__, f, h = 0, k = this.__resizeHandleOffset_D__ = Math.floor(b.__scrollerLeft_D__ - b.__resizeHandleWidth_A__ / 2), j = this.grid.view.mid, m = b.__classResizeHandle_z__, l = this.__head_c__;h < e;h++) {
      if(b = a[h], b.resizable) {
        f = b.key, d[f] = $("<div class='" + m + "' key='" + f + "' ondblclick='JGM.m.ViewportManager." + j + '.__autoColWidth_Bg__("' + f + "\")' style='left:" + (k + c[h + 1]) + "px' title='" + b.name + " 컬럼의 폭을 조절합니다.'>").appendTo(l)
      }
    }
  }
})();
jx.grid.CheckManager = {};
(function() {
  function d(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    this._options = JGM.__extend_e__({__colDef_a__:{key:"checkbox", width:20, name:" ", noTitle:!0, resizable:!1, sorter:null, filter:null, noSearch:!0, editor:null, inputOnCreate:!1}, __colIdx_b__:0, __name_c__:void 0, __classCheck_d__:"checkmg", __classMasterCheck_e__:"checkm", __master_f__:!0, __isRadio_g__:!1}, a.options, {colDef:"__colDef_a__", colIdx:"__colIdx_b__", name:"__name_c__", classCheck:"__classCheck_d__", classMasterCheck:"__classMasterCheck_e__", master:"__master_f__", isRadio:"__isRadio_g__"});
    if(this._options.__isRadio_g__) {
      if(Util.isNull(this._options.__name_c__)) {
        this._options.__name_c__ = "radio" + this.mid
      }
      this._options.__master_f__ = !1
    }
    this.__map_a__ = {};
    this.disabledmap = {};
    this.__count_b__ = 0;
    this.__disabled_d__ = !1;
    this.__init()
  }
  goog.exportSymbol("jx.grid.CheckManager", d);
  JGM._add("CheckManager", d);
  d.getInstance = function(a) {
    return new d(a)
  };
  var b = d.prototype;
  b.__init = function() {
    var a = this._options, e = JGM.__CONST_g__;
    this.grid.colDefMgr.getByKey(a.__colDef_a__.key) === void 0 && this.grid.colDefMgr.addAt(a.__colIdx_b__, a.__colDef_a__);
    if(Util.isNull(e.__checkboxWidth_c__)) {
      a = Util.calCheckSize(), e.__checkboxWidth_c__ = a.checkboxW, e.__checkboxHeight_d__ = a.checkboxH, e.__radioWidth_e__ = a.radioW, e.__radioHeight_f__ = a.radioH
    }
    this.bindEvents()
  };
  b.bindEvents = function() {
    var a = this._options, e = a.__colDef_a__.key, c;
    c = {onCreateCss:this.__onCreateCss_V__, onDestroy:this.__destroy_aA__, onAfterSetDatalist:this.uncheckAll, onIdChange:this.__onIdChange_ai__, onIdListChange:this.__onIdListChange_aj__, onRemoveDatarow:this.__onRemoveDatarow_af__, onRemoveDatalist:this.__onRemoveDatalist_ag__};
    c["onRenderCell_" + e + "_prepend"] = this.__onRenderCell_aH__;
    c["keydownColSel_" + e + "_" + Util.keyMapKeydown.space] = this.__keydownColSel_bA__;
    if(a.__master_f__) {
      c["onRenderHeader_" + e + "_prepend"] = this.__onRenderHeader_aG__, c.onRenderHeadersComplete = this.__getMaster_h__
    }
    this.grid.event.bind(c, this)
  };
  b.__destroy_aA__ = function() {
    JGM._destroy(this, {name:"CheckManager", path:"checkMgr", $:"__master_c__", property:"__count_b__ __disabled_d__", map:"__map_a__ _options"})
  };
  b.__onCreateCss_V__ = function() {
    var a, e, c;
    this._options.__isRadio_g__ ? (a = JGM.__CONST_g__.__radioWidth_e__, e = JGM.__CONST_g__.__radioHeight_f__) : (a = JGM.__CONST_g__.__checkboxWidth_c__, e = JGM.__CONST_g__.__checkboxHeight_d__);
    c = "*overflow:hidden;padding:0;width:" + a + "px;height:" + e + "px;";
    return this.grid.view.__getCellSelector_AG__() + " ." + this._options.__classCheck_d__ + "[mid='" + this.mid + "']{" + c + "margin:" + (this.grid.view.__getRowInnerHeight_AO__() - e) / 2 + "px 0 0 " + (this._options.__colDef_a__.width - this.grid.view.__getPadding_AM__() - a) / 2 + "px}#" + this.mid + "h{" + c + "margin:" + (this.grid.header._options.__height_l__ - e) / 2 + "px 0 0 0}"
  };
  b.checkList = function(a, e) {
    if(!e) {
      a = this.grid.dataMgr.mapList(a).mapped
    }
    for(var c = 0, b = a.length;c < b;c++) {
      this.check(a[c], !0)
    }
  };
  b.setCheckList = function(a, b) {
    this.uncheckAll();
    this.checkList(a, b)
  };
  b.getCheckList = function() {
    return Util.toArray(this.__map_a__)
  };
  b.getDisableds = function() {
    return Util.toArray(this.disabledmap)
  };
  b.toggleCheckAll = function() {
    this.isCheckedAll() ? this.uncheckAll() : this.checkAll()
  };
  b.checkAll = function() {
    this._options.__master_f__ && d.__check_a__(this.__master_c__);
    d.__check_a__(this.getCheckboxes());
    for(var a = this.grid.dataMgr.all, b = a.length, c = this.grid.dataMgr.idKey, g = this.__map_a__, i = 0;i < b;i++) {
      g[a[i][c]] = a[i]
    }
    this.__count_b__ = b
  };
  b.uncheckAll = function() {
    this._options.__master_f__ && d.__uncheck_b__(this.__master_c__);
    d.__uncheck_b__(this.getCheckboxes());
    this.__map_a__ = {};
    this.__count_b__ = 0
  };
  b.toggleCheck = function(a, b) {
    b || (a = this.grid.dataMgr.map(a));
    this.isChecked(a, !0) && !this._options.__isRadio_g__ ? this.uncheck(a, !0) : this.check(a, !0)
  };
  b.toggleDisable = function(a, b) {
    b || (a = this.grid.dataMgr.map(a));
    this.isDisabled(a, !0) ? this.enable(a, !0) : this.disable(a, !0)
  };
  b.toggleById = function(a) {
    this.toggleCheck(this.grid.dataMgr.getById(a), !0)
  };
  b.check = function(a, b) {
    b || (a = this.grid.dataMgr.map(a));
    this.__add_f__(a) && (d.__check_a__(this.getCheckbox(a)), this.__updateMaster_e__(), this.grid.event.trigger("onCheckChange", [a, !0]))
  };
  b.uncheck = function(a, b) {
    b || (a = this.grid.dataMgr.map(a));
    this.__remove_g__(a) && (d.__uncheck_b__(this.getCheckbox(a)), this._options.__master_f__ && d.__uncheck_b__(this.__master_c__), this.grid.event.trigger("onCheckChange", [a, !1]))
  };
  b.disable = function(a, b) {
    var c = this.grid.dataMgr;
    b || (a = c.map(a));
    var c = c.getId(a), g = this.disabledmap;
    g.hasOwnProperty(c) || (g[c] = a, d.disableNode(this.getCheckbox(a)), this.grid.event.trigger("onDisableCheck", [a]))
  };
  b.enable = function(a, b) {
    var c = this.grid.dataMgr;
    b || (a = this.grid.dataMgr.map(a));
    var c = c.getId(a), g = this.disabledmap;
    g.hasOwnProperty(c) && (delete g[c], d.enableNode(this.getCheckbox(a)), this.grid.event.trigger("onEnableCheck", [a]))
  };
  b.__updateMaster_e__ = function() {
    this._options.__master_f__ && d.__setCheck_c__(this.__master_c__, this.isCheckedAll())
  };
  b.__add_f__ = function(a) {
    var b = a[this.grid.dataMgr.idKey];
    if(this.__map_a__.hasOwnProperty(b)) {
      return!1
    }
    if(this._options.__isRadio_g__ === !0) {
      this.__map_a__ = {}, this.__count_b__ = 0
    }
    this.__map_a__[b] = a;
    this.__count_b__++;
    return!0
  };
  b.__remove_g__ = function(a) {
    var a = a[this.grid.dataMgr.idKey], b = this.__map_a__;
    if(!b.hasOwnProperty(a)) {
      return!1
    }
    delete b[a];
    this.__count_b__--;
    return!0
  };
  b.isChecked = function(a, b) {
    var c = this.grid.dataMgr;
    b || (a = c.map(a));
    return this.__map_a__.hasOwnProperty(c.getId(a))
  };
  b.isDisabled = function(a, b) {
    var c = this.grid.dataMgr;
    b || (a = c.map(a));
    return this.disabledmap.hasOwnProperty(c.getId(a))
  };
  b.splitChecked = function(a, b) {
    if(!b) {
      a = this.grid.dataMgr.mapList(a).mapped
    }
    for(var c = [], d = [], i = 0, f = a.length, h = this.grid.dataMgr.idKey, k, j = this.__map_a__;i < f;i++) {
      j.hasOwnProperty((k = a[i])[h]) ? c.push(k) : d.push(k)
    }
    return{checked:c, unchecked:d}
  };
  b.isCheckedAll = function() {
    return this.__count_b__ !== 0 && this.__count_b__ === this.grid.dataMgr.all.length ? !0 : !1
  };
  b.removeChecked = function() {
    return this.grid.dataMgr.removeList(this.getCheckList())
  };
  b.__getMaster_h__ = function() {
    this.__master_c__ = $(document.getElementById(this.mid + "h"))
  };
  b.__getChecks_i__ = function(a) {
    for(var b = a.length, c = [], d = 0, i = this.grid.colDefMgr.getIdxByKey(this._options.__colDef_a__.key);d < b;d++) {
      c.push(a[d].childNodes[i].childNodes[0])
    }
    return c
  };
  b.getCheckboxes = function() {
    return this.__getChecks_i__(this.grid.view.getRenderedRows())
  };
  b.getCheckboxById = function(a) {
    a = this.grid.view.getRowById(a);
    if(Util.isNotNull(a)) {
      return a.childNodes[this.grid.colDefMgr.getIdxByKey(this._options.__colDef_a__.key)].childNodes[0]
    }
  };
  b.getCheckbox = function(a) {
    return this.getCheckboxById(this.grid.dataMgr.getId(a))
  };
  b.getCheckboxByIdx = function(a) {
    return this.getCheckboxById(this.grid.dataMgr.getIdByIdx(a))
  };
  b.__onRemoveDatarow_af__ = function(a) {
    this.uncheck(a, !0);
    this.enable(a, !0)
  };
  b.__onRemoveDatalist_ag__ = function(a) {
    for(var b = 0, c = a.length;b < c;b++) {
      this.uncheck(a[b], !0), this.enable(a[b], !0)
    }
  };
  b.__onIdChange_ai__ = function(a, b, c) {
    var d = this.__map_a__, i = this.disabledmap;
    d.hasOwnProperty(b) && (delete d[b], d[c] = a);
    i.hasOwnProperty(b) && (delete i[b], i[c] = a)
  };
  b.__onIdListChange_aj__ = function(a, b, c) {
    for(var d = 0, i = a.length, f = this.__map_a__, h = this.disabledmap, k, j;d < i;d++) {
      k = a[d], j = b[d], f.hasOwnProperty(j) && (delete f[j], f[k[c]] = k), h.hasOwnProperty(j) && (delete h[j], h[k[c]] = k)
    }
  };
  b.__keydownColSel_bA__ = function(a, b, c) {
    a.preventDefault();
    if(Util.isNotNullAnd(b, c)) {
      var a = this.isChecked(c.getDatarow(), !0), d, c = this.grid.dataMgr.datalist;
      if(this._options.__isRadio_g__) {
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
  b.__onRenderHeader_aG__ = function(a) {
    a.push("<input id='" + this.mid + "h' type='checkbox' tabIndex='-1' onclick='JGM.m.CheckManager." + this.mid + ".toggleCheckAll();' class='" + this._options.__classCheck_d__ + " " + this._options.__classMasterCheck_e__ + "' mid='" + this.mid + "'");
    this.isCheckedAll() && a.push(" checked='checked'");
    this.__disabled_d__ && a.push(" disabled='disabled'");
    a.push("/>")
  };
  b.__onRenderCell_aH__ = function(a, b, c, d, i) {
    i.push("<input tabIndex='-1' onclick=\"JGM.m.CheckManager." + this.mid + ".toggleById('" + c[this.grid.dataMgr.idKey] + "')\" type='" + (this._options.__isRadio_g__ ? "radio" : "checkbox") + "' class='" + this._options.__classCheck_d__ + "' mid='" + this.mid + "'");
    Util.isNotNull(this._options.__name_c__) && i.push(" name='" + this._options.__name_c__ + "'");
    this.isChecked(c, !0) && i.push(" checked='checked'");
    (this.__disabled_d__ || this.isDisabled(c, !0)) && i.push(" disabled='disabled'");
    i.push("/>")
  };
  b.disableAll = function() {
    if(!this.__disabled_d__) {
      this.__disabled_d__ = !0, this._options.__master_f__ && this.__master_c__.attr("disabled", "disabled"), $(this.getCheckboxes()).attr("disabled", "disabled")
    }
  };
  b.enableAll = function() {
    if(this.__disabled_d__) {
      this.__disabled_d__ = !1, this._options.__master_f__ && this.__master_c__.removeAttr("disabled"), $(this.getCheckboxes()).removeAttr("disabled")
    }
  };
  d.__check_a__ = function(a) {
    Util.isNotNull(a) && Util$.safe$(a).attr("checked", "checked")
  };
  d.__uncheck_b__ = function(a) {
    Util.isNotNull(a) && Util$.safe$(a).removeAttr("checked")
  };
  d.disableNode = function(a) {
    Util.isNotNull(a) && Util$.safe$(a).attr("disabled", "disabled")
  };
  d.enableNode = function(a) {
    Util.isNotNull(a) && Util$.safe$(a).removeAttr("disabled")
  };
  d.__setCheck_c__ = function(a, b) {
    b ? d.__check_a__(a) : d.__uncheck_b__(a)
  }
})();
jx.grid.Collapser = {};
(function() {
  function d(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    this.grid.collapser = this;
    this._options = JGM.__extend_e__({__key_e__:void 0, __colDef_a__:{key:"collapser", width:120, name:" ", noSearch:!0}, __colIdx_b__:0, __urlCollapsed_c__:this.grid._options.imageUrl + "collapsed.png", __urlCollapsedHover_d__:this.grid._options.imageUrl + "collapsed-hover.png", __urlExpanded_f__:this.grid._options.imageUrl + "expanded.png", __urlExpandedHover_g__:this.grid._options.imageUrl + "expanded-hover.png", __width_h__:6, __padding_i__:5, __classCollapser_j__:"jgrid-collapser", __classCollapsed_k__:"collapsed", 
    __classExpanded_l__:"expanded", __classIndent_m__:"indent", __classMasterCollapser_n__:"master", __indentSize_o__:12, __beginCollapsed_p__:!1, CheckManager:void 0, Tree:void 0}, a.options, {colDef:"__colDef_a__", colIdx:"__colIdx_b__", urlCollapsed:"__urlCollapsed_c__", urlCollapsedHover:"__urlCollapsedHover_d__", key:"__key_e__", urlExpanded:"__urlExpanded_f__", urlExpandedHover:"__urlExpandedHover_g__", width:"__width_h__", padding:"__padding_i__", classCollapser:"__classCollapser_j__", classCollapsed:"__classCollapsed_k__", 
    classExpanded:"__classExpanded_l__", classIndent:"__classIndent_m__", classMasterCollapser:"__classMasterCollapser_n__", indentSize:"__indentSize_o__", beginCollapsed:"__beginCollapsed_p__"});
    if(this._options.CheckManager) {
      this.checkMgr = JGM.create("CheckManager", {grid:this.grid, options:this._options.CheckManager}), delete this._options.CheckManager, Util.isNull(this._options.__key_e__) && this._options.__colIdx_b__++
    }
    this.__tree_a__ = JGM.create("Tree", {list:this.grid.dataMgr.all, options:this._options.Tree})
  }
  goog.exportSymbol("JGM.module.Collapser", d);
  JGM._add("Collapser", d);
  d.getInstance = function(a) {
    return new d(a)
  };
  var b = d.prototype;
  b.__init = function() {
    Util.isNull(this._options.__key_e__) && this.grid.colDefMgr.addAt(this._options.__colIdx_b__, this._options.__colDef_a__);
    this.__makeTree_d__();
    this.__filterRefresh_g__();
    this.key = Util.isNull(this._options.__key_e__) ? this._options.__colDef_a__.key : this._options.__key_e__;
    this.bindEvents()
  };
  b.bindEvents = function() {
    var a = this.key, b;
    b = {onAfterFilter:this.__onAfterFilter_as__, onCreateCss:this.__onCreateCss_V__, onDestroy:this.__destroy_aA__, onAfterSetDatalist:this.__onAfterSetDatalist_ab__, onAddDatarow:this.__onAddDatarow_ac__, onAddDatalist:this.__onAddDatalist_ad__, onUpdateDatarow:this.__onUpdateDatarow_ae__, onUpdateDatalist:this.__onUpdateDatalist_ah__, onRemoveDatarow:this.__onRemoveDatarow_A__, onRemoveDatalist:this.__onRemoveDatalist_ag__, onRenderHeadersComplete:this.__getMaster_h__};
    b["onRenderHeader_" + a + "_prepend"] = this.__onRenderHeader_aG__;
    b["clickHeaderValid_" + a] = this.__clickHeaderValid_bO__;
    b["onRenderCell_" + a + "_prepend"] = this.__onRenderCell_aH__;
    b["dblclickCanvas_" + a] = this.__dblclickCanvas_bi__;
    b["keydownColSel_" + a + "_" + Util.keyMapKeydown.space] = this.__keydownColSel_bA__;
    if(Util.isNotNull(this.checkMgr)) {
      b.onCheckChange = this.__onCheckChange_f__
    }
    this.grid.event.bind(b, this)
  };
  b.__destroy_aA__ = function() {
    JGM._destroy(this, {name:"Collapser", path:"collapser", module:"__tree_a__", $:"__master_c__", property:"checkMgr", map:"_options"})
  };
  b.__onCreateCss_V__ = function() {
    var a = "#" + this.grid.mid + " .", b = this._options, c = a + this.grid.view._options.__classRow_l__ + " .", d = a + b.__classCollapser_j__, i = d + "." + b.__classExpanded_l__, f = d + "." + b.__classCollapsed_k__, h = this.grid.view.__getRowInnerHeight_AO__(), k = [], j = this.grid.header;
    k.push(a + b.__classIndent_m__ + "{height:" + h + "px;float:left;}");
    k.push(d + "{width:" + b.__width_h__ + "px;float:left;padding:0 " + b.__padding_i__ + "px}");
    k.push(c + b.__classCollapser_j__ + "{height:" + h + "px}");
    k.push(i + "{background:url(" + b.__urlExpanded_f__ + ") no-repeat center transparent}");
    k.push(i + ":hover{background:url(" + b.__urlExpandedHover_g__ + ") no-repeat center transparent}");
    k.push(f + "{background:url(" + b.__urlCollapsed_c__ + ") no-repeat center transparent}");
    k.push(f + ":hover{background:url(" + b.__urlCollapsedHover_d__ + ") no-repeat center transparent}");
    Util.isNotNull(j) && k.push(a + j._options.__classColHeader_r__ + " ." + b.__classCollapser_j__ + "{height:" + j._options.__height_l__ + "px}");
    return k.join("")
  };
  b.__onAfterSetDatalist_ab__ = function() {
    this.__tree_a__.destroy();
    this.__tree_a__ = JGM.create("Tree", {list:this.grid.dataMgr.all, options:this._options.Tree});
    this.__makeTree_d__()
  };
  b.__onAddDatarow_ac__ = function(a) {
    a = this.__tree_a__.createNode(a);
    a._collapsed = this._options.__beginCollapsed_p__;
    a._shown = Util.isNotNull(a.parent) && (a.parent === a.tree.root || a.parent._shown && !a.parent._collapsed) ? !0 : !1;
    Util.isNotNull(a.parent) && a.parent.children.length === 1 && this.grid.view.rerenderCellByIdAndKey(this.grid.dataMgr.getId(a.parent.data), this.key);
    a._collapsed === !0 || a._shown === !1 ? a.traverseChildren({fn:function() {
      this._shown = !1
    }}) : a.traverseChildren({fn:function(a) {
      Util.isNotNull(this.parent) && (this.parent === this.tree.root || this.parent._shown && !this.parent._collapsed) ? this._shown = !0 : (a.propagate = !1, this.traverse({fn:function() {
        this._shown = !1
      }}))
    }});
    this.grid.event.trigger("onCollapserTreeChange")
  };
  b.__onAddDatalist_ad__ = function(a) {
    for(var b = 0, c = a.length, d = this.__tree_a__, i = d.root, f = this._options.__beginCollapsed_p__, h = this.key, k = this.grid.view, j = this.grid.dataMgr, m, l = [], n;b < c;b++) {
      m = d.createNode(a[b]), m._collapsed = f, Util.isNotNull(m.parent) && m.parent.children.length === 1 && l.push(m.parent.data)
    }
    if(k !== void 0) {
      b = 0;
      for(c = l.length;b < c;b++) {
        k.rerenderCellByIdAndKey(j.getId(l[b]), h)
      }
    }
    i.traverseChildren({fn:function(a) {
      n = this.parent;
      Util.isNotNull(n) && (n === i || n._shown && !n._collapsed) ? this._shown = !0 : (a.propagate = !1, this.traverse({fn:function() {
        this._shown = !1
      }}))
    }});
    this.grid.event.trigger("onCollapserTreeChange")
  };
  b.__onUpdateDatarow_ae__ = function(a, b, c) {
    var d = this.__tree_a__, i = d._options.nodeKey, f = d._options.parentKey, h;
    b.hasOwnProperty(i) && (h = d.getNodeByNodeId(c[i]), d.changeNodeId(h, c[i], b[i]), this.grid.event.trigger("onCollapserTreeChange"));
    b.hasOwnProperty(f) && (Util.isNull(h) && (h = d.getNode(a)), d.changeParentId(h, c[f], b[f]), this.grid.event.trigger("onCollapserTreeChange"))
  };
  b.__onUpdateDatalist_ah__ = function(a, b, c) {
    for(var b = this.__tree_a__, d = b._options.nodeKey, i = b._options.parentKey, f, h, k, j = [], m = [], l = 0, n = a.length;l < n;l++) {
      f = c[l], h = a[l], k = void 0, f.hasOwnProperty(d) && (Util.isNull(k) && (k = b.getNodeByNodeId(f[d])), j.push({node:k, before:f[d], newId:h[d]})), f.hasOwnProperty(i) && (Util.isNull(k) && (k = b.getNode(h)), m.push({node:k, before:f[i], newId:h[i]}))
    }
    a = j.length;
    c = m.length;
    if(a + c !== 0) {
      if(a + c > 10) {
        b.reattach()
      }else {
        for(l = 0;l < a;l++) {
          d = j[l], b.changeNodeId(d.node, d.before, d.newId)
        }
        for(l = 0;l < c;l++) {
          d = m[l], b.changeParentId(d.node, d.before, d.newId)
        }
      }
      this.grid.event.trigger("onCollapserTreeChange")
    }
  };
  b.__onRemoveDatarow_A__ = function(a) {
    this.__tree_a__.destroyNodeByData(a);
    this.grid.event.trigger("onCollapserTreeChange")
  };
  b.__onRemoveDatalist_ag__ = function(a) {
    for(var b = 0, c = a.length, d = this.__tree_a__;b < c;b++) {
      d.destroyNodeByData(a[b])
    }
    this.grid.event.trigger("onCollapserTreeChange")
  };
  b.__onAfterFilter_as__ = function(a, b) {
    var c = this.__tree_a__;
    if(b.length > 0) {
      var d = this.grid.dataMgr, i = a.length, f = d.__idToIdx_b__, h = d.idKey, k, j = 0, m = function(c) {
        Util.isNotNull(this.parent) ? (k = this.parent.data, Util.isNotNull(k) && !d.has(k) && (a.push(k), b.remove(k), f[k[h]] = -1)) : c.stop = !0
      };
      d.__reidx_g__();
      for(c.reattach();j < i;j++) {
        c.getNode(a[j]).traverse({up:!0, fn:m})
      }
      c.reattach(a);
      c.sortList(a);
      this.grid.event.trigger("onCollapserTreeChange")
    }else {
      c.reattach(a), this.grid.event.trigger("onCollapserTreeChange"), this.__filter_b__(a, b)
    }
  };
  b.__filter_b__ = function(a, b) {
    a.length = 0;
    this.__tree_a__.root.traverseChildren({fn:function() {
      this._shown ? a.push(this.data) : b.push(this.data)
    }})
  };
  b.toggleById = function(a) {
    if(Util.isNotNull(a)) {
      return this.toggleCollapse(this.__tree_a__.getNode(this.grid.dataMgr.getById(a)))
    }
  };
  b.toggle = function(a) {
    return this.toggleById(this.grid.dataMgr.getId(a))
  };
  b.toggleByIdx = function(a) {
    return this.toggleById(this.grid.dataMgr.getIdByIdx(a))
  };
  b.__clickHeaderValid_bO__ = function(a) {
    if(Util.hasTagAndClass(a.target, "DIV", this._options.__classCollapser_j__)) {
      return!1
    }
  };
  b.__dblclickCanvas_bi__ = function(a, b) {
    Util.hasTagAndClass(a.target, "DIV", this._options.__classCollapser_j__) || this.toggleCollapse(this.__tree_a__.getNode(b.getDatarow()))
  };
  b.__keydownColSel_bA__ = function(a, b, c) {
    a.preventDefault();
    if(Util.isNotNullAnd(b, c)) {
      var a = this.__tree_a__, c = a.getNode(c.getDatarow())._collapsed, d = this.grid.dataMgr.datalist, i, f;
      for(f in b) {
        b.hasOwnProperty(f) && f !== "length" && (i = a.getNode(d[f]), c ? this.expand(i) : this.collapse(i))
      }
      this.__filterRefresh_g__()
    }
  };
  b.__makeTree_d__ = function() {
    var a = this.__tree_a__, b, c;
    a.__init();
    c = a.map;
    a = a.root;
    if(this._options.__beginCollapsed_p__) {
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
    this.grid.event.trigger("onCollapserTreeChange")
  };
  b.__onRenderHeader_aG__ = function(a) {
    a.push("<div id='" + this.mid + "h' onmousedown='JGM.m.Collapser." + this.mid + ".toggleMaster();' class='" + this._options.__classCollapser_j__ + " " + this._options.__classMasterCollapser_n__);
    this.__tree_a__.root._collapsed ? a.push(" " + this._options.__classCollapsed_k__) : a.push(" " + this._options.__classExpanded_l__);
    a.push("'></div>")
  };
  b.__onRenderCell_aH__ = function(a, b, c, d, i) {
    a = this.__tree_a__.getNode(c);
    if(Util.isNull(a)) {
      return null
    }
    c = this.grid.dataMgr.getId(c);
    b = this._options;
    i.push("<div class='" + b.__classIndent_m__ + "' style='width:" + b.__indentSize_o__ * a.getLevel() + "px;'></div><div ");
    a.isLeaf() ? i.push("class='" + b.__classCollapser_j__) : (i.push('onmousedown="JGM.m.Collapser.' + this.mid + ".toggleById('" + c + "');\" class='" + b.__classCollapser_j__), a._collapsed ? i.push(" " + b.__classCollapsed_k__) : i.push(" " + b.__classExpanded_l__));
    i.push("'></div>")
  };
  b.getLevel = function(a) {
    a = this.__tree_a__.getNode(a);
    return Util.isNull(a) ? null : a.getLevel()
  };
  b.collapse = function(a, b) {
    if(!(a._collapsed === !0 || a.isLeaf())) {
      a._collapsed = !0;
      a.traverseChildren({fn:function(a) {
        this._shown = !1;
        if(this._collapsed) {
          a.propagate = !1
        }
      }});
      var c = this.__getCollapser_i__(a.data);
      c.length > 0 && this.__setClass_e__(c, !0);
      if(!b && a.parent === this.__tree_a__.root && this.__tree_a__.root._collapsed === !1) {
        this.__setClass_e__(this.__master_c__, this.__tree_a__.root._collapsed = !0)
      }
    }
  };
  b.expand = function(a, b) {
    if(!(a._collapsed === !1 || a.isLeaf())) {
      a._collapsed = !1;
      a.traverseChildren({fn:function(a) {
        this._shown = !0;
        if(this._collapsed) {
          a.propagate = !1
        }
      }});
      var c = this.__getCollapser_i__(a.data), d = this.__tree_a__;
      c.length > 0 && this.__setClass_e__(c, !1);
      if(!b && a.parent === d.root) {
        for(var c = d.root.children, i = c.length, f = 0;f < i;f++) {
          if(c[f]._collapsed) {
            return
          }
        }
        this.__setClass_e__(this.__master_c__, d.root._collapsed = !1)
      }
    }
  };
  b.__setClass_e__ = function(a, b) {
    if(!Util.isNull(a)) {
      var c = this._options;
      b ? a.addClass(c.__classCollapsed_k__).removeClass(c.__classExpanded_l__) : a.addClass(c.__classExpanded_l__).removeClass(c.__classCollapsed_k__)
    }
  };
  b.toggleMaster = function() {
    var a = this.__tree_a__.root, b = a.children, c = b.length, d = 0;
    if(a._collapsed) {
      for(;d < c;d++) {
        this.expand(b[d], !0)
      }
      this.__setClass_e__(this.__master_c__, a._collapsed = !1)
    }else {
      for(;d < c;d++) {
        this.collapse(b[d], !0)
      }
      this.__setClass_e__(this.__master_c__, a._collapsed = !0)
    }
    this.__filterRefresh_g__()
  };
  b.toggleCollapse = function(a) {
    a = a._collapsed ? this.expand(a) : this.collapse(a);
    this.__filterRefresh_g__();
    return a
  };
  b.__onCheckChange_f__ = function(a, b) {
    var c = this.__tree_a__.getNode(a), d = this.checkMgr, i = [], f;
    b ? (c.traverseChildren({fn:function(a) {
      d.isChecked(this.data) ? a.propagate = !1 : (d.__add_f__(this.data), Util.isNotNull(f = d.getCheckbox(this.data)) && i.push(f))
    }}), c.traverseParent({up:!0, fn:function(a) {
      Util.isNull(this.data) || d.isChecked(this.data) ? a.stop = !0 : (d.__add_f__(this.data), Util.isNotNull(f = d.getCheckbox(this.data)) && i.push(f))
    }}), JGM.CheckManager.__check_a__($(i)), d.__updateMaster_e__()) : (c.traverseChildren({fn:function(a) {
      d.isChecked(this.data) ? (d.__remove_g__(this.data), Util.isNotNull(f = d.getCheckbox(this.data)) && i.push(f)) : a.propagate = !1
    }}), c.traverseParent({up:!0, fn:function(a) {
      if(Util.isNull(this.data) || !d.isChecked(this.data)) {
        a.stop = !0
      }else {
        for(var b = 0, c = this.children, e = c.length;b < e;b++) {
          if(d.isChecked(c[b].data)) {
            a.stop = !0;
            return
          }
        }
        d.__remove_g__(this.data);
        Util.isNotNull(f = d.getCheckbox(this.data)) && i.push(f)
      }
    }}), JGM.CheckManager.__uncheck_b__($(i)))
  };
  b.__filterRefresh_g__ = function() {
    this.__filter_b__(this.grid.dataMgr.datalist, this.grid.dataMgr.failed);
    this.grid.dataMgr.__finish_k__()
  };
  b.__getCollapser_i__ = function(a) {
    if(Util.isNull(a)) {
      return $([])
    }
    a = Util.findFirstByTagAndClass(this.grid.view.getCell(this.grid.dataMgr.getIdx(a), this.grid.colDefMgr.getIdxByKey(this.key)), "DIV", this._options.__classCollapser_j__);
    return a === void 0 ? $([]) : $(a)
  };
  b.__getMaster_h__ = function() {
    this.__master_c__ = $(document.getElementById(this.mid + "h"))
  }
})();
jx.grid.ColumnGroup = {};
(function() {
  function d(a) {
    this.mid = a.mid;
    this.grid = a.grid;
    this.grid.colGroup = this;
    this._options = JGM.__extend_e__({__key_a__:void 0, __padColKeys_b__:[], __sumColKeys_c__:[], prefix:"합계: ", Collapser:{indentSize:0}}, a.options, {key:"__key_a__", padColKeys:"__padColKeys_b__", sumColKeys:"__sumColKeys_c__"});
    this._options.Collapser.key = this._options.__key_a__;
    this.__parentMap_a__ = {};
    this.__init()
  }
  goog.exportSymbol("jx.grid.ColumnGroup", d);
  JGM._add("ColGroup", d);
  d.getInstance = function(a) {
    return new d(a)
  };
  var b = d.prototype;
  b.__init = function() {
    var a = this.grid, b = a.dataMgr, c = this._options;
    this.bindEvents();
    a = this.collapser = JGM.create("Collapser", {grid:a, options:c.Collapser});
    delete c.Collapser;
    this.__processData_b__(b.all);
    a.__init();
    b.refresh()
  };
  b.bindEvents = function() {
    var a;
    a = {onBeforeSetDatalist:this.__removeAll_f__, "onAfterSetDatalist onAddDatalist":this.__processData_b__, onAddDatarow:this.__onAddDatarow_ac__, onUpdateDatarow:this.__onUpdateDatarow_ae__, onUpdateDatalist:this.__onUpdateDatalist_ah__, onRemoveDatarow:this.__onRemoveDatarow_af__, onRemoveDatalist:this.__onRemoveDatalist_ag__, onDestroy:this.__destroy_aA__};
    if(this._options.__sumColKeys_c__.length !== 0) {
      var b = this.mid, c = this.grid.dataMgr.__consts_n__.__notReal_d__, d = 0, i, f = this._options.__sumColKeys_c__, h = this._options.prefix, k = f.length;
      for(i = function(a, d, g, f, i) {
        g[c] === b && i.push(h)
      };d < k;d++) {
        a["onRenderCell_" + f[d] + "_prepend"] = i
      }
      a.onCollapserTreeChange = this.__onCollapserTreeChange_g__
    }
    this.grid.event.bind(a, this)
  };
  b.__destroy_aA__ = function() {
    JGM._destroy(this, {name:"ColGroup", path:"colGroup", property:"collapser", map:"__parentMap_a__ _options"})
  };
  b.__processData_b__ = function(a) {
    for(var b = a.length, c = this._options.__key_a__, d = this._options.__padColKeys_b__, i = this.grid.dataMgr, f = i.__consts_n__.__notReal_d__, h = i.idKey, k = this.collapser, j = k.__tree_a__._options.nodeKey, m = k.__tree_a__._options.parentKey, l = [], n = 0;n < b;n++) {
      this.__addData_c__(a[n], c, h, f, j, m, d, l)
    }
    l.length !== 0 && (i.all.pushList(l), i.makeCompositeKeyList(l, !0), i.addListToIdMap(l), Util.isNotNull(k) && k.__onAddDatalist_ad__(l));
    return l
  };
  b.__addData_c__ = function(a, b, c, d, i, f, h, k) {
    var j = a[b], m = this.__parentMap_a__;
    m.hasOwnProperty(j) || (b = this.__makeParent_d__(a, b, c, j, d, i, h), k.push(b), m[j] = b);
    a[i] = a[c];
    a[f] = this.mid + j
  };
  b.__makeParent_d__ = function(a, b, c, d, i, f, h) {
    var k = {}, j = 0, m = h.length;
    k[i] = this.mid;
    k[f] = this.mid + d;
    k[b] = d;
    for(k[c] = (this.grid.colDefMgr.getByKey(b).name || b) + ": " + d;j < m;j++) {
      k[h[j]] = a[h[j]]
    }
    return k
  };
  b.__isParent_e__ = function(a) {
    return a[this.grid.dataMgr.__consts_n__.__notReal_d__] === this.mid
  };
  b.__removeAll_f__ = function() {
    this.__parentMap_a__ = {}
  };
  b.__onAddDatarow_ac__ = function(a) {
    var b = [], c = this._options, d = this.grid.dataMgr, i = this.collapser, f = i.__tree_a__._options;
    this.__addData_c__(a, c.__key_a__, d.idKey, d.__consts_n__.__notReal_d__, f.nodeKey, f.parentKey, c.__padColKeys_b__, b);
    b.length !== 0 && (a = b[0], d.all.push(a), d.makeCompositeKey(a, !0), d.addToIdMap(a), i.__onAddDatarow_ac__(a))
  };
  b.__onUpdateDatarow_ae__ = function(a, b, c) {
    if(b.hasOwnProperty(this._options.__key_a__)) {
      var d = this._options.__key_a__, b = b[d], c = c[d], i = this.mid, d = this.collapser, f = d.__tree_a__, h = f._options.parentKey, k = {}, j = {}, m = this.__parentMap_a__;
      m.hasOwnProperty(b) || this.__onAddDatarow_ac__(a);
      k[h] = i + b;
      j[h] = i + c;
      d.__onUpdateDatarow_ae__(a, k, j);
      a = f.getNode(m[c]);
      a.children.length === 0 && (this.grid.dataMgr.all.remove(a.data), delete m[c], d.__onRemoveDatarow_A__(a.data))
    }
  };
  b.__onUpdateDatalist_ah__ = function(a, b, c) {
    var d = this._options.__key_a__, i = this.mid, f = this.collapser, h = f.__tree_a__, k = h._options.parentKey, j, m = {};
    j = {};
    for(var l = [], n = [], o = [], p = 0, q = a.length;p < q;p++) {
      j = b[p], j.hasOwnProperty(d) && (m = {}, m[k] = i + j[d], l.push(m), j = {}, j[k] = i + c[p][d], n.push(j), o.push(a[p]))
    }
    if(o.length !== 0) {
      a = this.__parentMap_a__;
      b = [];
      this.__processData_b__(o);
      f.__onUpdateDatalist_ah__(o, l, n);
      p = 0;
      for(q = n.length;p < q;p++) {
        l = n[p][k], a.hasOwnProperty(l) && (o = h.getNode(a[l]), o.children.length === 0 && (delete a[l], b.push(o.data)))
      }
      b.length !== 0 && (f.__onRemoveDatalist_ag__(b), this.grid.dataMgr.all.removeList(b))
    }
  };
  b.__onRemoveDatarow_af__ = function(a) {
    this.__isParent_e__(a) ? delete this.__parentMap_a__[a[this._options.__key_a__]] : (a = this.collapser.__tree_a__.getNode(a).parent, a.children.length === 1 && this.grid.dataMgr.remove(a.data))
  };
  b.__onRemoveDatalist_ag__ = function(a) {
    for(var b = 0, c = a.length;b < c;b++) {
      this.__onRemoveDatarow_af__(a[b])
    }
  };
  b.__onCollapserTreeChange_g__ = function() {
    for(var a = {}, b = this._options.__sumColKeys_c__, c = b.length, d = 0, i = this.grid.dataMgr.__consts_n__.__notReal_d__, f = this.mid, h, k, j;d < c;d++) {
      a[b[d]] = 0
    }
    this.collapser.__tree_a__.root.traverseChildren({post:!0, fn:function() {
      h = this.data;
      d = 0;
      if(h[i] === f) {
        for(;d < c;d++) {
          k = b[d], h[k] = a[k], a[k] = 0
        }
      }else {
        if(!h.hasOwnProperty(i)) {
          for(;d < c;d++) {
            if(typeof(j = h[b[d]]) === "string") {
              j = j.toFloat()
            }
            a[b[d]] += isNaN(j) ? 0 : j
          }
        }
      }
    }})
  }
})();
jx.grid.ViewportManager = {};
(function() {
  function d(a) {
    this.mid = a.mid;
    this._ctnr = a.container;
    this.grid = a.grid;
    this.grid.view = this;
    this._options = JGM.__extend_e__({__attrRowIdx_a__:"r", __appendThreshold_b__:3, __renderThreshold_c__:10, __bufferSize_d__:6, __rowsPerPage_e__:10, __rowH_f__:21, __borderThickness_g__:1, __border_h__:"solid #D0D7E5", __padding_i__:1, __evenOddRows_j__:!1, __oddRowsBackground_k__:"#F4F4F4", __style_q__:"", __canvasStyle_r__:"", __rowStyle_s__:"", __cellStyle_t__:"", __classRow_l__:"jgrid-row", __classCell_m__:"jgrid-cell", __classView_n__:"jgrid-viewport", __classCanvas_o__:"jgrid-canvas", __focusBackground_u__:"#FFF", 
    __focusOutline_v__:"2px solid #f1ca7f", __autoHeight_w__:!1, __autoWidth_x__:!1}, a.options, {attrRowIdx:"__attrRowIdx_a__", appendThreshold:"__appendThreshold_b__", renderThreshold:"__renderThreshold_c__", bufferSize:"__bufferSize_d__", rowsPerPage:"__rowsPerPage_e__", rowH:"__rowH_f__", borderThickness:"__borderThickness_g__", border:"__border_h__", padding:"__padding_i__", evenOddRows:"__evenOddRows_j__", oddRowsBackground:"__oddRowsBackground_k__", classRow:"__classRow_l__", classCell:"__classCell_m__", 
    classView:"__classView_n__", classCanvas:"__classCanvas_o__", style:"__style_q__", canvasStyle:"__canvasStyle_r__", rowStyle:"__rowStyle_s__", cellStyle:"__cellStyle_t__", focusBackground:"__focusBackground_u__", focusOutline:"__focusOutline_v__", autoHeight:"__autoHeight_w__", autoWidth:"__autoWidth_x__"});
    this._vars = {drag:!1, __lastScrollTop_d__:0, __lastScrollLeft_e__:0, __lastRowLen_l__:0};
    this.__renderedRows_A__ = {};
    this.__lockedRows_B__ = {};
    this.__colLefts_Bd__ = [0];
    this.__init()
  }
  goog.exportSymbol("jx.grid.ViewportManager", d);
  JGM._add("ViewportManager", d);
  d.getInstance = function(a) {
    return new d(a)
  };
  var b = d.prototype;
  b.__init = function() {
    this.__mask_a__ = $("<div class='" + this._options.__classView_n__ + "' tabIndex='0' onscroll='JGM.m.ViewportManager." + this.mid + ".__scroll_As__()'>").appendTo(this._ctnr);
    this.__canvas_c__ = $("<div class='" + this._options.__classCanvas_o__ + "'>").appendTo(this.__mask_a__);
    this.__mask_a__.bind("selectstart.ui", function(a) {
      return $(a.target).is("input, textarea")
    });
    this.__setColLefts_Be__();
    this._vars.__lastRowLen_l__ = this.grid.dataMgr.datalist.length;
    this.grid.event.bind({canvasFind:this.__canvasFind_AC__, onCreateCss:this.__onCreateCss_V__, onCreateDynamicCss:this.__onCreateDynamicCss_C__, onDestroy:this.__onDestroy_e__, keydown:this._keydown, keyup:this._keyup, keypress:this._keypress, mousein:this._mousein, mouseout:this._mouseout, mouseenter:this._mouseenter, mouseleave:this._mouseleave, mousemove:this._mousemove, mouseover:this._mouseover, mousedown:this._mousedown, mouseup:this._mouseup, click:this._click, dblclick:this._dblclick, resizeWidth:this.__setWidth_AV__, 
    "resizeWidth onResizeCol onResizeCanvasHeight":this.__resizeWidth_AZ__, onAfterRefresh:this.onAfterRefresh, onRenderModules:this.__render_w__, onReorderCols:this.__onReorderCols_Bf__, onResizeCanvasWidth:this.__scroll_As__, onUpdateDatarow:this.onUpdateDatarow, onUpdateDatalist:this.onUpdateDatalist, onRemoveDatarow:this.onRemoveDatarow, onRemoveDatalist:this.onRemoveDatalist, onIdChange:this.onIdChange, onIdListChange:this.onIdListChange, unsetDrag:this.unsetDrag}, this)
  };
  b.unsetDrag = function() {
    this._vars.drag = !1
  };
  b.__onDestroy_e__ = function() {
    JGM._destroy(this, {name:"ViewportManager", path:"view", $:"__canvas_c__ __mask_a__", property:"_ctnr", map:"_vars __lockedRows_B__ __renderedRows_A__ _options"})
  };
  b.__onCreateCss_V__ = function() {
    var a = "#" + this.grid.mid + " .", b = this._options, c = a + b.__classCell_m__, d = a + b.__classRow_l__, i = b.__borderThickness_g__ + "px " + b.__border_h__, f = d + "[" + b.__attrRowIdx_a__, h = this.grid.colDefMgr.get(), k = h.length, j = 0, m = [];
    m.push(a + b.__classView_n__ + "{height:" + this.__calHeight_AP__() + "px;outline:0;position:relative;white-space:nowrap;overflow:auto;line-height:" + b.__rowH_f__ + "px;cursor:default;-moz-user-select:none;-webkit-user-select:none;" + b.__style_q__ + "}");
    m.push(a + b.__classView_n__ + ":focus{background:" + b.__focusBackground_u__ + ";outline:" + b.__focusOutline_v__ + "}");
    m.push(a + b.__classCanvas_o__ + "{height:" + this.__calCanvasHeight_AR__() + "px;" + b.__canvasStyle_r__ + ";background:#fff}");
    m.push(d + "{position:absolute;" + b.__rowStyle_s__ + "}");
    m.push(c + "{height:" + b.__rowH_f__ + "px;border-bottom:" + i + ";display:inline-block;white-space:nowrap;overflow:hidden;float:left;text-overflow:ellipsis;padding-left:" + b.__padding_i__ + "px;border-right:" + i + ";" + b.__cellStyle_t__ + "}");
    for(b.__evenOddRows_j__ && m.push(f + "$='1']," + f + "$='3']," + f + "$='5']," + f + "$='7']," + f + "$='9']{background:" + b.__oddRowsBackground_k__ + "}");j < k;j++) {
      m.push(c + ".k_" + h[j].key + "{" + h[j].style + "}")
    }
    return m.join("")
  };
  b.__onCreateDynamicCss_C__ = function() {
    for(var a = "#" + this.grid.mid + " ." + this._options.__classCell_m__, b = this.__getRowSelector_AH__() + "{width:" + this.__calCanvasWidth_AT__() + "px}", c = this.grid.colDefMgr.get(), d = c.length, i = 0;i < d;i++) {
      b += a + ".k_" + c[i].key + "{width:" + c[i].width + "px}"
    }
    return b
  };
  b.onUpdateDatarow = function(a) {
    this.isRendered(a) && this.rerenderRow(a)
  };
  b.onUpdateDatalist = function(a) {
    for(var b, c = a.length, d = 0;d < c;d++) {
      b = a[d], this.isRendered(b) && this.rerenderRow(b)
    }
  };
  b.onRemoveDatarow = function(a) {
    this.destroyRow(a)
  };
  b.onRemoveDatalist = function(a) {
    for(var b = a.length, c = 0;c < b;c++) {
      this.destroyRow(a[c])
    }
  };
  b.onIdChange = function(a, b, c) {
    this.isRowLockedById(b) && (this.__lockedRows_B__[c] = this.__lockedRows_B__[b], delete this.__lockedRows_B__[b]);
    this.isRenderedById(b) && ((this.__renderedRows_A__[c] = this.__renderedRows_A__[b]).setAttribute("i", c), delete this.__renderedRows_A__[b])
  };
  b.onIdListChange = function(a, b, c) {
    for(var d = a.length, i = 0, f = this.__lockedRows_B__, h = this.__renderedRows_A__, k, j;i < d;i++) {
      k = b[i], j = a[i][c], f.hasOwnProperty(k) && (f[j] = f[k], delete f[k]), h.hasOwnProperty(k) && ((h[j] = h[k]).setAttribute("i", j), delete h[k])
    }
  };
  b.__getCellSelector_AG__ = function() {
    return"#" + this.grid.mid + " ." + this._options.__classCell_m__
  };
  b.__getRowSelector_AH__ = function() {
    return"#" + this.grid.mid + " ." + this._options.__classRow_l__
  };
  b.scrollTo = function(a, b) {
    this.scrollToRow(a);
    this.scrollToCol(b)
  };
  b.scrollToRowLazy = function(a) {
    var b = this.getScrollTop();
    return Util.isNull(a) ? b : this.__getLastSafeVisibleRow_n__() < a ? this.scrollToRow(this.__getFirstRowForSafe_o__(a)) : this.__getFirstSafeVisibleRow_l__() > a ? this.scrollToRow(a) : b
  };
  b.scrollToColLazy = function(a) {
    var b = this.getScrollLeft();
    if(Util.isNull(a)) {
      return b
    }
    if(this.__getLastSafeVisibleCol_s__() < a) {
      return this.setScrollLeft(this.getScrollHForSafe(a))
    }else {
      if(this.__getFirstSafeVisibleCol_q__() > a) {
        return this.scrollToCol(a)
      }
    }
    return b
  };
  b.scrollToLazy = function(a, b) {
    this.scrollToRowLazy(a);
    this.scrollToColLazy(b)
  };
  b.scrollToRow = function(a) {
    return Util.isNotNull(a) ? this.setScrollTop(this.__getRowOuterHeight_AN__() * a) : this.getScrollTop()
  };
  b.scrollToCol = function(a) {
    return this.setScrollLeft(this.getColLeft(a))
  };
  b.__getColInnerWidth_AI__ = function(a) {
    return this.grid.colDefMgr.get(a).width
  };
  b.__getColInnerWidthByKey_AJ__ = function(a) {
    return this.grid.colDefMgr.getByKey(a).width
  };
  b.getColWidth = function(a) {
    return this.grid.colDefMgr.get(a).width + this._options.__padding_i__
  };
  b.getColWidthByKey = function(a) {
    return this.grid.colDefMgr.getByKey(a).width + this._options.__padding_i__
  };
  b.__getColOuterWidth_AK__ = function(a) {
    return this.grid.colDefMgr.get(a).width + this._options.__padding_i__ + this._options.__borderThickness_g__
  };
  b.__getColOuterWidthByKey_AL__ = function(a) {
    return this.grid.colDefMgr.getByKey(a).width + this._options.__padding_i__ + this._options.__borderThickness_g__
  };
  b.__getPadding_AM__ = function() {
    return this._options.__padding_i__
  };
  b.__colWidthPlus_f__ = function() {
    return this._options.__padding_i__ + this._options.__borderThickness_g__
  };
  b.__getRowOuterHeight_AN__ = function() {
    return this._options.__rowH_f__ + this._options.__borderThickness_g__
  };
  b.__getRowInnerHeight_AO__ = function() {
    return this._options.__rowH_f__
  };
  b.__calHeight_AP__ = function() {
    return this._options.__autoHeight_w__ ? this.__calCanvasHeight_AR__() + (this.grid.width() < this.__calCanvasWidth_AT__() ? this.grid._vars.scrollbarDim.h : 0) : this.__getRowOuterHeight_AN__() * this._options.__rowsPerPage_e__
  };
  b.getHeight = function() {
    return this.__mask_a__[0].offsetHeight
  };
  b.getInnerHeight = function() {
    return this.__mask_a__[0].clientHeight
  };
  b.__getWidth_AQ__ = function() {
    return this.__mask_a__[0].offsetWidth
  };
  b.getInnerWidth = function() {
    return this.__mask_a__[0].clientWidth
  };
  b.__calCanvasHeight_AR__ = function() {
    return this.__getRowOuterHeight_AN__() * this.grid.dataMgr.datalist.length
  };
  b.getCanvasHeight = function() {
    return this.__canvas_c__[0].clientHeight
  };
  b.__setCanvasHeight_AS__ = function(a) {
    a = parseInt(a);
    if(!(isNaN(a) || a < 1)) {
      var b = this.getCanvasHeight();
      if(a != b) {
        this.__canvas_c__[0].style.height = a + "px", this.grid.event.trigger("onResizeCanvasHeight", [a, b])
      }
    }
  };
  b.__calCanvasWidth_AT__ = function() {
    return this.__colLefts_Bd__[this.grid.colDefMgr.length()]
  };
  b.getCanvasWidth = function() {
    return this.__canvas_c__[0].clientWidth
  };
  b.__setCanvasWidth_AU__ = function(a) {
    a = parseInt(a);
    if(!(isNaN(a) || a < 1)) {
      var b = this.getCanvasWidth();
      if(a != b) {
        this.__canvas_c__[0].style.width = a + "px", this.grid.event.trigger("onResizeCanvasWidth", [a, b])
      }
    }
  };
  b.getColLeft = function(a) {
    return this.__colLefts_Bd__[a]
  };
  b.__getColLefts_Bh__ = function() {
    return this.__colLefts_Bd__
  };
  b.__setColLefts_Be__ = function(a, b) {
    Util.isNull(a) && (a = 0);
    var c = this.grid.colDefMgr.get(), d = this.__colWidthPlus_f__();
    if(Util.isNull(b)) {
      b = c.length
    }
    for(;a < b;a++) {
      this.__colLefts_Bd__[a + 1] = this.__colLefts_Bd__[a] + c[a].width + d
    }
    return this.__colLefts_Bd__
  };
  b.__onReorderCols_Bf__ = function() {
    this.__setColLefts_Be__();
    this.__rerender_Ba__()
  };
  b.setWidthByKey = function(a, b) {
    var c = this.grid.colDefMgr.getByKey(a), b = Util.bound(b, c.minW, c.maxW);
    if(b !== c.width) {
      var d = c.width;
      c.width = b;
      this.__setCanvasWidth_AU__(this.__setColLefts_Be__(this.grid.colDefMgr.getIdxByKey(a))[this.grid.colDefMgr.length()]);
      this.grid._recreateDynamicCss();
      this.grid.event.trigger("onResizeCol_" + a + " onResizeCol", [a, b, d])
    }
  };
  b.__autoColWidth_Bg__ = function(a) {
    for(var b = this.__canvasFind_AC__(".k_" + a), c = Number.MIN_VALUE, d = b.length, i = 0;i < d;i++) {
      if(c < b[i].scrollWidth) {
        c = b[i].scrollWidth
      }
    }
    c -= this.__getPadding_AM__();
    this.setWidthByKey(a, c)
  };
  b.__setWidth_AV__ = function(a) {
    a = parseInt(a);
    if(!(isNaN(a) || a < 1)) {
      this.__mask_a__[0].style.width = a + "px"
    }
  };
  b.getScrollTop = function() {
    return this.__mask_a__[0].scrollTop
  };
  b.getScrollLeft = function() {
    return this.__mask_a__[0].scrollLeft
  };
  b.setScrollTop = function(a) {
    var b = this.getScrollTop();
    return Util.isNotNull(a) && b != a ? this.__mask_a__[0].scrollTop = a : b
  };
  b.setScrollLeft = function(a) {
    var b = this.getScrollLeft();
    return Util.isNotNull(a) && b != a ? this.__mask_a__[0].scrollLeft = a : b
  };
  b.__hasHScrollbar_i__ = function() {
    return this.__mask_a__[0].offsetHeight > this.__mask_a__[0].clientHeight
  };
  b.__hasVScrollbar_j__ = function() {
    return this.__mask_a__[0].offsetWidth > this.__mask_a__[0].clientWidth
  };
  b.__heightPlus_AW__ = function() {
    return this.__mask_a__[0].offsetHeight - this.__mask_a__[0].clientHeight
  };
  b.__widthPlus_AX__ = function() {
    return this.__mask_a__[0].offsetWidth - this.__mask_a__[0].clientWidth
  };
  b.__getFirstVisibleRow_k__ = function() {
    return Math.floor(this.getScrollTop() / this.__getRowOuterHeight_AN__())
  };
  b.__getFirstSafeVisibleRow_l__ = function() {
    return Math.ceil(this.getScrollTop() / this.__getRowOuterHeight_AN__())
  };
  b.__getLastVisibleRow_m__ = function() {
    return Math.ceil((this.getScrollTop() + this.__mask_a__[0].clientHeight) / this.__getRowOuterHeight_AN__()) - 1
  };
  b.__getLastSafeVisibleRow_n__ = function() {
    return Math.floor((this.getScrollTop() + this.__mask_a__[0].clientHeight) / this.__getRowOuterHeight_AN__()) - 1
  };
  b.__getFirstRowForSafe_o__ = function(a) {
    return a - Math.floor(this.__mask_a__[0].clientHeight / this.__getRowOuterHeight_AN__()) + 1
  };
  b.__getFirstVisibleCol_p__ = function() {
    for(var a = this.getScrollLeft(), b = this.__colLefts_Bd__, c = 0, d = b.length;c < d;c++) {
      if(b[c] > a) {
        return c - 1
      }
      if(b[c] === a) {
        return c
      }
    }
    return d - 2
  };
  b.__getFirstSafeVisibleCol_q__ = function() {
    for(var a = this.getScrollLeft(), b = this.__colLefts_Bd__, c = 0, d = b.length;c < d;c++) {
      if(b[c] >= a) {
        return c
      }
    }
    return d - 2
  };
  b.__getLastVisibleCol_r__ = function() {
    for(var a = this.getScrollLeft() + this.__mask_a__[0].clientWidth, b = this.__colLefts_Bd__, c = 0, d = b.length;c < d;c++) {
      if(b[c] >= a) {
        return c - 1
      }
    }
    return d - 2
  };
  b.__getLastSafeVisibleCol_s__ = function() {
    for(var a = this.getScrollLeft() + this.__mask_a__[0].clientWidth, b = this.__colLefts_Bd__, c = 0, d = b.length;c < d;c++) {
      if(b[c] > a) {
        return c - 2
      }
    }
    return d - 2
  };
  b.__getFirstColForSafe_t__ = function(a) {
    var b = this.__colLefts_Bd__, c = b[a + 1] - this.__mask_a__[0].clientWidth, d = a;
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
  b.getScrollHForSafe = function(a) {
    var b = this.__colLefts_Bd__, c = b[a + 1] - this.__mask_a__[0].clientWidth;
    return b[a] <= c ? b[a] : c
  };
  b.__getRenderRange_u__ = function() {
    if(this._options.__autoHeight_w__) {
      return{start:0, end:this.grid.dataMgr.datalist.length - 1}
    }
    var a, b = this.grid.dataMgr.datalist.length - 1;
    return{start:(a = this.__getFirstVisibleRow_k__() - this._options.__bufferSize_d__) < 0 ? 0 : a, end:(a = this.__getLastVisibleRow_m__() + this._options.__bufferSize_d__) > b ? b : a}
  };
  b.__fitHeight_AY__ = function() {
    this.__mask_a__[0].style.height = this.getCanvasHeight() + this.__heightPlus_AW__() + "px"
  };
  b.__resizeWidth_AZ__ = function() {
    this._options.__autoHeight_w__ && this.__fitHeight_AY__()
  };
  b.onAfterRefresh = function(a) {
    a !== void 0 && a.noRerender === !0 || this.__rerender_Ba__()
  };
  b.__rerender_Ba__ = function() {
    var a = this.getScrollTop(), b = this.getScrollLeft();
    this.grid.event.trigger("onBeforeRerender");
    this.unlockAllRows();
    this.__removeRows_y__();
    var c = this.grid.dataMgr.datalist.length;
    if(this._vars.__lastRowLen_l__ !== c) {
      this._vars.__lastRowLen_l__ = c, this.__setCanvasHeight_AS__(this.__calCanvasHeight_AR__())
    }
    this.__render_w__();
    this.setScrollTop(a);
    this.setScrollLeft(b);
    this.grid.event.trigger("onAfterRerender")
  };
  b.__render_w__ = function(a) {
    this.__removeAndRenderRows_Am__(a)
  };
  b.__renderShift_x__ = function(a) {
    Util.isNull(a) && (a = this.__getRenderRange_u__());
    this.__removeRowsExcept_z__(a);
    this.__appendRows_Al__(a)
  };
  b.__removeRows_y__ = function(a) {
    var b = this.__canvas_c__[0], c = this.__renderedRows_A__, d = this.__lockedRows_B__, i;
    if(Util.isNull(a)) {
      if(this.__lockExist_Ad__()) {
        for(i in c) {
          c.hasOwnProperty(i) && d.hasOwnProperty(i) && (b.removeChild(c[i]), delete c[i])
        }
      }else {
        this.__renderedRows_A__ = {}, b.innerHTML = ""
      }
    }else {
      for(var f = a.start, a = a.end, h = this.grid.dataMgr;f <= a;f++) {
        if(!d.hasOwnProperty(i = h.getIdByIdx(f)) && c.hasOwnProperty(i)) {
          b.removeChild(c[i]), delete c[i]
        }
      }
    }
  };
  b.__removeRowsExcept_z__ = function(a) {
    var b = this.__canvas_c__[0], c = this.__renderedRows_A__, d = this.__lockedRows_B__, i;
    if(Util.isNull(a)) {
      if(this.__lockExist_Ad__()) {
        for(i in c) {
          c.hasOwnProperty(i) && d.hasOwnProperty(i) === !1 && (b.removeChild(c[i]), delete c[i])
        }
      }else {
        this.__renderedRows_A__ = {}, b.innerHTML = ""
      }
    }else {
      var f = a.start, a = a.end, h = this.grid.dataMgr, k;
      for(i in c) {
        if(c.hasOwnProperty(i) && !(d.hasOwnProperty(i) || f <= (k = h.getIdxById(i)) && k <= a)) {
          b.removeChild(c[i]), delete c[i]
        }
      }
    }
  };
  b.destroyRow = function(a) {
    return this.destroyRowById(this.grid.dataMgr.getId(a))
  };
  b.destroyRowById = function(a) {
    Util.isNotNull(a) && (this.unlockRowById(a), this.__renderedRows_A__.hasOwnProperty(a) && (this.__canvas_c__[0].removeChild(this.__renderedRows_A__[a]), delete this.__renderedRows_A__[a]))
  };
  b.destroyRowByIdx = function(a) {
    return this.destroyRowById(this.grid.dataMgr.getIdByIdx(a))
  };
  b.__lockExist_Ad__ = function() {
    return Util.isNotEmptyObj(this.__lockedRows_B__)
  };
  b.isRowLockedById = function(a) {
    return Util.isNotNull(a) ? this.__lockedRows_B__.hasOwnProperty(a) : !1
  };
  b.isRowLocked = function(a) {
    return this.isRowLockedById(this.grid.dataMgr.getId(a))
  };
  b.isRowLockedByIdx = function(a) {
    return this.isRowLockedById(this.grid.dataMgr.getIdByIdx(a))
  };
  b.lockRowById = function(a) {
    Util.isNotNull(a) && this.grid.dataMgr.hasById(a) && (this.__lockedRows_B__[a] = !0)
  };
  b.lockRow = function(a) {
    return this.lockRowById(this.grid.dataMgr.getId(a))
  };
  b.lockRowByIdx = function(a) {
    return this.lockRowById(this.grid.dataMgr.getIdByIdx(a))
  };
  b.unlockRowById = function(a) {
    this.isRowLockedById(a) && delete this.__lockedRows_B__[a]
  };
  b.unlockRow = function(a) {
    return this.unlockRowById(this.grid.dataMgr.getId(a))
  };
  b.unlockRowByIdx = function(a) {
    return this.unlockRowById(this.grid.dataMgr.getIdByIdx(a))
  };
  b.unlockAllRows = function() {
    this.__lockedRows_B__ = {}
  };
  b.rerenderRowById = function(a) {
    if(this.grid.dataMgr.containsById(a)) {
      var b = this.__renderedRows_A__, c = this.__canvas_c__[0], d = this.grid.dataMgr, i = d.getIdxById(a), d = d.getById(a), f = this.grid.colDefMgr.get(), h = this.__getColCellClasses_An__(f), k = this.__getRowOuterHeight_AN__(), j = [];
      b.hasOwnProperty(a) && (c.removeChild(b[a]), this.grid.event.trigger("onBeforeRenderRows", [[i]]), this.__renderRow_Ap__(j, i, d, f, h, k), b[a] = Util.appendHTML(c, j.join(""))[0], this.grid.event.trigger("onAppendRows", [[i]]))
    }
  };
  b.rerenderRow = function(a) {
    return this.rerenderRowById(this.grid.dataMgr.getId(a))
  };
  b.rerenderRowByIdx = function(a) {
    return this.rerenderRowById(this.grid.dataMgr.getIdByIdx(a))
  };
  b.rerenderCellByIdAndKey = function(a, b) {
    var c = this.getCellByIdAndKey(a, b);
    if(c !== void 0) {
      var d = this.grid.dataMgr, i = this.grid.colDefMgr, f = d.getById(a), h = i.getByKey(b), d = d.getIdxById(a), i = i.getIdxByKey(b);
      c.innerHTML = this.__renderCell_Aq__([], d, i, f, h).join("")
    }
  };
  b.rerenderCellByIdx = function(a, b) {
    return this.rerenderCellByIdAndKey(this.grid.dataMgr.getIdByIdx(a), this.grid.colDefMgr.getKeyByIdx(b))
  };
  b.__appendRows_Al__ = function(a) {
    this.grid.event.trigger("onBeforeRenderRows", [a]);
    for(var b = [], c = a.start, d = a.end, i = this.grid.dataMgr.datalist, f = this.grid.dataMgr.idKey, h = this.grid.colDefMgr.get(), k = this.__getColCellClasses_An__(h), j = this.__renderedRows_A__, m = this.__getRowOuterHeight_AN__(), l = this.__canvas_c__[0], n, o, p = [];c <= d;c++) {
      if(n = i[c], !j.hasOwnProperty(o = n[f])) {
        this.__renderRow_Ap__(b, c, n, h, k, m), p.push(o)
      }
    }
    b = Util.appendHTML(l, b.join(""));
    c = 0;
    for(d = p.length;c < d;c++) {
      j[p[c]] = b[c]
    }
    this.grid.event.trigger("onAppendRows", [a])
  };
  b.__removeAndRenderRows_Am__ = function(a) {
    Util.isNull(a) && (a = this.__getRenderRange_u__());
    this.grid.event.trigger("onBeforeRenderRows", [a]);
    for(var b = [], c = a.start, d = a.end, i = this.grid.dataMgr, f = i.datalist, h = i.idKey, k = this.grid.colDefMgr.get(), j = this.__getColCellClasses_An__(k), i = this.__canvas_c__[0], m = this.__getRowOuterHeight_AN__(), l, n = [], o = {};c <= d;c++) {
      l = f[c], this.__renderRow_Ap__(b, c, l, k, j, m), n.push(l[h])
    }
    i.innerHTML = b.join("");
    c = 0;
    for(b = n.length;c < b;c++) {
      o[n[c]] = i.childNodes[c]
    }
    this.__renderedRows_A__ = o;
    this.grid.event.trigger("onAppendRows", [a])
  };
  b.__getColCellClass_Ao__ = function(a) {
    var b = this._options.__classCell_m__ + " k_" + a.key;
    Util.isNotNull(a.colClass) && (b += " " + a.colClass);
    b += " " + this.grid.event.trigger("onGetColCellClass", [a]).join(" ");
    return b
  };
  b.__getColCellClasses_An__ = function(a) {
    var b = [], c = 0, d = a.length;
    for(Util.isNull(a) && (a = this.grid.colDefMgr.get());c < d;c++) {
      b.push(this.__getColCellClass_Ao__(a[c]))
    }
    return b
  };
  b.__renderRow_Ap__ = function(a, b, c, d, i, f) {
    a.push("<div class='" + this._options.__classRow_l__ + "' i='" + c[this.grid.dataMgr.idKey] + "' " + this._options.__attrRowIdx_a__ + "='" + b + "' style='top:" + f * b + "px'>");
    for(var f = 0, h = d.length;f < h;f++) {
      a.push("<div class='" + i[f] + " " + this.grid.event.trigger("onGetCellClass", [b, f, c, d[f]]).join(" ") + "'>"), this.__renderCell_Aq__(a, b, f, c, d[f]), a.push("</div>")
    }
    a.push("</div>");
    return a
  };
  b.__renderCell_Aq__ = function(a, b, c, d, i) {
    this.grid.event.trigger("onRenderCell_" + i.key + "_prepend", [b, c, d, i, a]);
    var f = d[i.key];
    if(typeof f !== "string" || f.substring(0, 3) !== "J@H") {
      i.rendererInput ? a.push(i.renderer(JGM.create("Cell", {grid:this.grid, row:b, col:c, datarow:d, colDef:i}))) : a.push(i.renderer(f, b, c, d, i, this))
    }
    this.grid.event.trigger("onRenderCell_" + i.key + "_append", [b, c, d, i, a]);
    return a
  };
  JGM.Cell.prototype.rerender = function() {
    return this.grid.view.rerenderCellByIdAndKey(this.getId(), this.getKey())
  };
  JGM.Cell.prototype.scrollTo = function() {
    this.grid.view.scrollTo(this.getRowIdx(), this.getColIdx())
  };
  b._keydown = function(a) {
    Util.contains(this.__mask_a__[0], document.activeElement, this._ctnr[0]) && this.grid.event.trigger("keydownCanvas_" + a.which + " keydownCanvas", [a])
  };
  b._keyup = function(a) {
    Util.contains(this.__mask_a__[0], document.activeElement, this._ctnr[0]) && this.grid.event.trigger("keyupCanvas_" + a.which + " keyupCanvas", [a])
  };
  b._keypress = function(a) {
    Util.contains(this.__mask_a__[0], document.activeElement, this._ctnr[0]) && this.grid.event.trigger("keypressCanvas_" + a.which + " keypressCanvas", [a])
  };
  b._mousein = function(a) {
    this._vars.drag ? this.__triggerMouseEvent_Ar__(a, {event:"draginCanvas mouseinCanvas"}) : this.__triggerMouseEvent_Ar__(a, {event:"mouseinCanvas"})
  };
  b._mouseout = function(a) {
    this._vars.drag ? this.__triggerMouseEvent_Ar__(a, {event:"dragoutCanvas mouseoutCanvas"}) : this.__triggerMouseEvent_Ar__(a, {event:"mouseoutCanvas"})
  };
  b._mouseenter = function(a) {
    this._vars.drag ? this.__triggerMouseEvent_Ar__(a, {event:"dragenterCanvas mouseenterCanvas"}) : this.__triggerMouseEvent_Ar__(a, {event:"mouseenterCanvas"})
  };
  b._mouseleave = function(a) {
    this._vars.drag ? this.__triggerMouseEvent_Ar__(a, {event:"dragleaveCanvas mouseleaveCanvas"}) : this.__triggerMouseEvent_Ar__(a, {event:"mouseleaveCanvas"})
  };
  b._mousemove = function(a) {
    this._vars.drag ? this.__triggerMouseEvent_Ar__(a, {event:"dragmoveCanvas mousemoveCanvas"}) : this.__triggerMouseEvent_Ar__(a, {event:"mousemoveCanvas"})
  };
  b._mouseover = function(a) {
    this._vars.drag ? this.__triggerMouseEvent_Ar__(a, {event:"dragoverCanvas mouseoverCanvas"}) : this.__triggerMouseEvent_Ar__(a, {event:"mouseoverCanvas"})
  };
  b._mousedown = function(a) {
    if(this.__triggerMouseEvent_Ar__(a, {event:"mousedownCanvas"})) {
      this._vars.drag = !0, this.focus(a)
    }
  };
  b._mouseup = function(a) {
    this._vars.drag = !1;
    this.__triggerMouseEvent_Ar__(a, {event:"mouseupCanvas"}) && this.focus(a)
  };
  b._click = function(a) {
    this.__triggerMouseEvent_Ar__(a, {event:"clickCanvas"})
  };
  b._dblclick = function(a) {
    this.__triggerMouseEvent_Ar__(a, {event:"dblclickCanvas"})
  };
  b.__triggerMouseEvent_Ar__ = function(a, b) {
    var c = this.__getClosestCell_Az__(a.target), d, i, f;
    if(c === void 0) {
      return!1
    }
    b.cell = JGM.create("Cell", {grid:this.grid, node:c});
    c = Util.split(b.event);
    f = c.length;
    d = [];
    for(i = 0;i < f;i++) {
      d.push(c[i] + "_" + b.cell.getKey()), d.push(c[i])
    }
    this.grid.event.trigger(d.join(" "), [a, b.cell]);
    return!0
  };
  b.__scroll_As__ = function() {
    var a = this.getScrollTop(), b = a - this._vars.__lastScrollTop_d__, c = this.getScrollLeft(), d = c - this._vars.__lastScrollLeft_e__;
    if(!(b === 0 && d === 0)) {
      this.grid.event.trigger("onScrollViewport");
      if(d !== 0) {
        this._vars.__lastScrollLeft_e__ = c, this.grid.event.trigger("onScrollViewportH", [c])
      }
      if(!(Math.abs(b / this.__getRowOuterHeight_AN__()) < this._options.__appendThreshold_b__)) {
        this._vars.__lastScrollTop_d__ = a, this.__render_w__(), this.grid.event.trigger("onScrollViewportV")
      }
    }
  };
  b.focus = function(a) {
    if((!Util.isNotNull(a) || !this.grid.event.triggerInvalid("onBeforeFocusCanvas", [a])) && this.__mask_a__[0] !== document.activeElement) {
      if(Util.isFunction(this.__mask_a__[0].setActive)) {
        try {
          this.__mask_a__[0].setActive()
        }catch(b) {
        }
      }
      this.__mask_a__[0].focus();
      document.activeElement !== this.__mask_a__[0] && this.__mask_a__.focus()
    }
  };
  b.isRenderedById = function(a) {
    return Util.isNotNull(a) ? this.__renderedRows_A__.hasOwnProperty(a) : !1
  };
  b.isRendered = function(a) {
    return this.isRenderedById(this.grid.dataMgr.getId(a))
  };
  b.isRenderedByIdx = function(a) {
    return this.isRenderedById(this.grid.dataMgr.getIdByIdx(a))
  };
  b.getRowById = function(a) {
    if(this.isRenderedById(a)) {
      return this.__renderedRows_A__[a]
    }
  };
  b.getRow = function(a) {
    return this.getRowById(this.grid.dataMgr.getId(a))
  };
  b.getRowByIdx = function(a) {
    return this.getRowById(this.grid.dataMgr.getIdByIdx(a))
  };
  b.getRenderedRowById = function(a) {
    if(this.isRenderedById(a)) {
      return this.__renderedRows_A__[a]
    }
  };
  b.getRenderedRow = function(a) {
    return this.getRenderedRowById(this.grid.dataMgr.getId(a))
  };
  b.getRenderedRowByIdx = function(a) {
    return this.getRenderedRowById(this.grid.dataMgr.getIdByIdx(a))
  };
  b.getRenderedRows = function() {
    return Util.toArray(this.__renderedRows_A__)
  };
  b.getCell = function(a, b) {
    var c = this.getRowByIdx(a);
    if(Util.isNotNull(c, b)) {
      return c.childNodes[b]
    }
  };
  b.getCellByIdAndKey = function(a, b) {
    var c = this.getRowById(a), d = this.grid.colDefMgr.getIdxByKey(b);
    if(Util.isNotNullAnd(c, d)) {
      return c.childNodes[d]
    }
  };
  b.getRenderedCell = function(a, b) {
    var c = this.getRenderedRowByIdx(a);
    if(Util.isNotNull(c)) {
      return c.childNodes[b]
    }
  };
  b.getRenderedCellByIdAndKey = function(a, b) {
    var c = this.getRenderedRowById(a), d = this.grid.colDefMgr.getIdxByKey(b);
    if(Util.isNotNullAnd(c, d)) {
      return c.childNodes[d]
    }
  };
  b.__getClosestCell_Az__ = function(a) {
    return Util.closestWithTag(a, "DIV", this._options.__classCell_m__, this.__canvas_c__[0])
  };
  b.__getClosestRow_AA__ = function(a) {
    return Util.closestWithTag(a, "DIV", this._options.__classRow_l__, this.__canvas_c__[0])
  };
  b.__getClosestRowIdx_AB__ = function(a) {
    return this.grid.dataMgr.getIdxByNode(this.__getClosestRow_AA__(a))
  };
  b.__canvasFind_AC__ = function(a) {
    return this.__canvas_c__.find(a)
  };
  d.__renderer_AD__ = function(a) {
    return Util.ifNull(a, "")
  }
})();
jx.grid.DataCreator = {};
(function() {
  function d(a) {
    this.mid = a.mid;
    this._ctnr = a.container;
    this.grid = a.grid;
    this.grid.creator = this;
    this._options = JGM.__extend_e__({__background_a__:"#dfdfdf", __borderThickness_b__:0, __border_c__:"solid #D6D6D6", __inputBorder_d__:"solid #A7A7A7", __inputBorderThickness_e__:1, __inputHeight_f__:18, __inputMargin_g__:8, __nameMargin_h__:2, __font_i__:"12px Arial,Helvetica,sans-serif", __height_j__:28, __padding_k__:3, __classCreatorIcon_l__:"creator-icon", __creatorIconUrl_m__:this.grid._options.imageUrl + "data-creator-icon.png", __creatorIconWidth_n__:13, __creatorIconHeight_o__:13, __classCreator_p__:"data-creator", 
    __classColName_q__:"data-creator-name", __inputBorderRadius_r__:3}, a.options, {background:"__background_a__", borderThickness:"__borderThickness_b__", border:"__border_c__", inputBorder:"__inputBorder_d__", inputBorderThickness:"__inputBorderThickness_e__", inputHeight:"__inputHeight_f__", inputMargin:"__inputMargin_g__", nameMargin:"__nameMargin_h__", font:"__font_i__", height:"__height_j__", padding:"__padding_k__", classCreatorIcon:"__classCreatorIcon_l__", creatorIconUrl:"__creatorIconUrl_m__", 
    creatorIconWidth:"__creatorIconWidth_n__", creatorIconHeight:"__creatorIconHeight_o__", classCreator:"__classCreator_p__", classColName:"__classColName_q__", inputBorderRadius:"__inputBorderRadius_r__"});
    this.__inputMap_c__ = {};
    this.__init()
  }
  goog.exportSymbol("jx.grid.DataCreator", d);
  JGM._add("DataCreator", d);
  d.getInstance = function(a) {
    return new d(a)
  };
  var b = d.prototype;
  b.__init = function() {
    this.__creator_a__ = $("<div class='" + this._options.__classCreator_p__ + "'>").appendTo(this._ctnr);
    this.bindEvents()
  };
  b.bindEvents = function() {
    this.grid.event.bind({onRenderModules:this.__onRenderModules_aE__, onCreateCss:this.__onCreateCss_V__, onDestroy:this.__destroy_aA__}, this)
  };
  b.__onCreateCss_V__ = function() {
    var a = "#" + this.grid.mid + " .", b = this._options, c = [];
    c.push(a + b.__classCreator_p__ + "{" + JGM.__CONST_g__.__cssUnselectable_a__ + "float:left;width:100%;padding-left:8px;background:" + b.__background_a__ + ";border-top:" + (b.__borderThickness_b__ + "px " + b.__border_c__) + ";font:" + b.__font_i__ + "}");
    c.push(a + b.__classCreator_p__ + " button{float:left;margin:" + b.__padding_k__ + "px " + b.__padding_k__ + "px 0 0;height:" + (b.__height_j__ - 2 * b.__padding_k__) + "px}");
    c.push(a + b.__classCreator_p__ + " input{float:left;padding:0;margin-top:" + (b.__height_j__ - b.__inputHeight_f__ - 2 * b.__inputBorderThickness_e__) / 2 + "px;height:" + b.__inputHeight_f__ + "px;border:" + b.__inputBorderThickness_e__ + "px " + b.__inputBorder_d__ + ";border-radius:" + b.__inputBorderRadius_r__ + "px;-moz-border-radius:" + b.__inputBorderRadius_r__ + "px}");
    c.push(a + b.classCol + "{float:left;overflow:hidden;white-space:nowrap;line-height:" + b.__height_j__ + "px;margin-right:" + b.__inputMargin_g__ + "px}");
    c.push(a + b.__classColName_q__ + "{float:left;margin-right:" + b.__nameMargin_h__ + "px}");
    c.push(a + b.__classCreatorIcon_l__ + "{background:url(" + b.__creatorIconUrl_m__ + ") no-repeat center;width:" + b.__creatorIconWidth_n__ + "px;height:" + b.__creatorIconHeight_o__ + "px}");
    return c.join("")
  };
  b.__onRenderModules_aE__ = function() {
    for(var a = [], b = this.grid.colDefMgr.getAll(), c = b.length, d, i = this._options, f = i.classCol, h = i.__classColName_q__, k = this, j = this.__creator_a__, m = this.__inputMap_c__, l = 0, n = function(a) {
      a.which === Util.keyMapKeydown.enter && k.__addData_d__()
    };l < c;l++) {
      d = b[l], d.inputOnCreate === !0 && a.push("<div key='" + d.key + "' class='" + f + "'><div class='" + h + "'>" + d.name + "</div><input type='text' value='" + Util.ifNull(d.defaultValue, "") + "' style='width:" + d.width + "px'/></div>")
    }
    j[0].innerHTML = a.join("") + "<button type='button' onclick='JGM.m.DataCreator." + this.mid + ".__addData_d__()'>등록</button><button type='button' onclick='JGM.m.DataCreator." + this.mid + ".__reset_e__()'>초기화</button>";
    for(l = 0;l < c;l++) {
      d = b[l], d.inputOnCreate === !0 && (m[d.key] = j.find("div[key='" + d.key + "'] input").keyup(n))
    }
    Util.isNotNull(this.grid.menubar) && (this.grid.menubar.addIcon(i.__classCreatorIcon_l__, "데이터 로우를 추가합니다.", i.__creatorIconWidth_n__, i.__creatorIconHeight_o__, function() {
      j.toggle("fast")
    }), j.hide())
  };
  b.__addData_d__ = function() {
    var a, b = this.__inputMap_c__, c = this.grid.colDefMgr, d = {}, i = c.getAll(), f = i.length, h = 0;
    for(a in b) {
      b.hasOwnProperty(a) && c.getByKey(a)
    }
    for(;h < f;h++) {
      if(c = i[h], a = c.key, b.hasOwnProperty(a)) {
        d[a] = b[a][0].value
      }else {
        if(c.defaultValue !== void 0) {
          d[a] = c.defaultValue
        }
      }
    }
    this.grid.event.trigger("onAfterDataCreate", [d]);
    this.grid.dataMgr.add(d, {isNew:!0})
  };
  b.__reset_e__ = function() {
    var a, b = this.grid.colDefMgr, c, d = this.__inputMap_c__;
    for(a in d) {
      if(d.hasOwnProperty(a) && (c = b.getByKey(a), c.defaultValue !== void 0)) {
        d[a][0].value = c.defaultValue
      }
    }
  };
  b.__destroy_aA__ = function() {
    var a, b = this.__inputMap_c__;
    for(a in b) {
      b.hasOwnProperty(a) && JGM.__delete$_n__(b, a)
    }
    JGM._destroy(this, {name:"DataCreator", path:"creator", $:"__creator_a__", map:"__inputMap_c__ _options"})
  }
})();
jx.grid.SearchManager = {};
(function() {
  function d(a) {
    this.mid = a.mid;
    this._ctnr = a.container;
    this.grid = a.grid;
    this.grid.search = this;
    this._options = JGM.__extend_e__({__background_a__:"#f0f0f0", __borderThickness_b__:1, __border_c__:"solid #d6d6d6", __inputBorder_d__:"1px solid #A7A7A7", __inputPadding_e__:0, __searchbarAlign_f__:"center", __searchbarMargin_g__:3, __searchbarWidth_h__:"99%", __searchbarHeight_i__:20, __tagsHeight_j__:26, __tagsPadding_k__:2, __tagsBorderRadius_l__:3, __advButtonColor_m__:"#123272", __advButtonFont_n__:"bold 12px Arial,Helvetica,sans-serif", __advButtonPadding_o__:5, __advButtonBg_p__:"", __advButtonBgHover_q__:"url(" + 
    this.grid._options.imageUrl + "more-options-bg-hover.png) repeat-x scroll center", __advButtonBgActive_r__:"url(" + this.grid._options.imageUrl + "more-options-bg-active.png) repeat-x scroll center", __advButtonBgOpened_s__:"url(" + this.grid._options.imageUrl + "more-options-bg-opened.png) repeat-x scroll center", __advButtonBorderThickness_t__:1, __advButtonBorder_u__:"solid transparent", __advButtonBorderHover_v__:"solid #a4a4a4", __advButtonBorderActive_w__:"solid #c5c5c5", __advButtonBorderOpened_x__:"solid #bfbfbf", 
    __advButtonIconWidth_y__:9, __advButtonIconMargin_z__:2, __advButtonIconUrl_A__:this.grid._options.imageUrl + "more-options.png", __advButtonIconCloseUrl_B__:this.grid._options.imageUrl + "more-options-close.png", __tagPadding_C__:2, __tagBorder_D__:"solid #93979D", __tagBorderThickness_E__:1, __tagFont_F__:"bold 13px Arial", __tagColor_G__:"#282853", __tagBackground_H__:"url(" + this.grid._options.imageUrl + "tag-background.png) repeat-x scroll center", __tagRemoveIconWidth_I__:12, __tagRemoveIconUrl_J__:this.grid._options.imageUrl + 
    "tag-close.png", __tagRemoveIconHoverUrl_K__:this.grid._options.imageUrl + "tag-close-hover.png", __advFont_L__:"11px Arial", __advInputWidth_M__:30, __classMask_N__:"search-mask", __classSearchbar_O__:"search-bar", __classAdvButtonName_P__:"more-option-name", __classAdvButton_Q__:"more-options", __classAdvButtonIcon_R__:"more-icon", __classClearTags_S__:"clear-tags", __classTagbar_T__:"search-tags", __classTag_U__:"search-tag", __classTagName_V__:"search-tag-name", __classRemoveTag_W__:"search-tag-remove", 
    __classAdvanced_X__:"search-advanced", __classOptionCol_Y__:"search-option-col", __classOption_Z__:"search-option", __classSearchIcon_aa__:"search-icon", __searchIconUrl_ab__:this.grid._options.imageUrl + "search-icon.png", __searchIconWidth_ac__:15, __searchIconHeight_ad__:15, __keyMap_ae__:void 0, __tagRemoveIconActiveUrl_af__:this.grid._options.imageUrl + "tag-close-active.png", __syncMaster_ag__:!1}, a.options, {background:"__background_a__", borderThickness:"__borderThickness_b__", border:"__border_c__", 
    inputBorder:"__inputBorder_d__", inputPadding:"__inputPadding_e__", searchbarAlign:"__searchbarAlign_f__", searchbarMargin:"__searchbarMargin_g__", searchbarWidth:"__searchbarWidth_h__", searchbarHeight:"__searchbarHeight_i__", tagsHeight:"__tagsHeight_j__", tagsPadding:"__tagsPadding_k__", tagsBorderRadius:"__tagsBorderRadius_l__", advButtonColor:"__advButtonColor_m__", advButtonFont:"__advButtonFont_n__", advButtonPadding:"__advButtonPadding_o__", advButtonBg:"__advButtonBg_p__", advButtonBgHover:"__advButtonBgHover_q__", 
    advButtonBgActive:"__advButtonBgActive_r__", advButtonBgOpened:"__advButtonBgOpened_s__", advButtonBorderThickness:"__advButtonBorderThickness_t__", advButtonBorder:"__advButtonBorder_u__", advButtonBorderHover:"__advButtonBorderHover_v__", advButtonBorderActive:"__advButtonBorderActive_w__", advButtonBorderOpened:"__advButtonBorderOpened_x__", advButtonIconWidth:"__advButtonIconWidth_y__", advButtonIconMargin:"__advButtonIconMargin_z__", advButtonIconUrl:"__advButtonIconUrl_A__", advButtonIconCloseUrl:"__advButtonIconCloseUrl_B__", 
    tagPadding:"__tagPadding_C__", tagBorder:"__tagBorder_D__", tagBorderThickness:"__tagBorderThickness_E__", tagFont:"__tagFont_F__", tagColor:"__tagColor_G__", tagBackground:"__tagBackground_H__", tagRemoveIconWidth:"__tagRemoveIconWidth_I__", tagRemoveIconUrl:"__tagRemoveIconUrl_J__", tagRemoveIconHoverUrl:"__tagRemoveIconHoverUrl_K__", advFont:"__advFont_L__", advInputWidth:"__advInputWidth_M__", classMask:"__classMask_N__", classSearchbar:"__classSearchbar_O__", classAdvButtonName:"__classAdvButtonName_P__", 
    classAdvButton:"__classAdvButton_Q__", classAdvButtonIcon:"__classAdvButtonIcon_R__", classClearTags:"__classClearTags_S__", classTagbar:"__classTagbar_T__", classTag:"__classTag_U__", classTagName:"__classTagName_V__", classRemoveTag:"__classRemoveTag_W__", classAdvanced:"__classAdvanced_X__", classOptionCol:"__classOptionCol_Y__", classOption:"__classOption_Z__", classSearchIcon:"__classSearchIcon_aa__", searchIconUrl:"__searchIconUrl_ab__", searchIconWidth:"__searchIconWidth_ac__", searchIconHeight:"__searchIconHeight_ad__", 
    keyMap:"__keyMap_ae__", tagRemoveIconActiveUrl:"__tagRemoveIconActiveUrl_af__", syncMaster:"__syncMaster_ag__"});
    this.__filterMap_f__ = {};
    this.__tagMap_g__ = {};
    this.__nameMap_h__ = {};
    this.__codeMap_i__ = {};
    this.__global_r__ = [];
    this.__globalMap_s__ = {};
    this.__keyToName_y__ = {};
    this.__init()
  }
  goog.exportSymbol("jx.grid.SearchManager", d);
  JGM._add("SearchManager", d);
  var b = d.prototype;
  b.__onCreateCss_V__ = function() {
    var a = "#" + this.grid.mid + " .", b = this._options, c = b.__borderThickness_b__ + "px " + b.__border_c__, d = "border-radius:" + b.__tagsBorderRadius_l__ + "px;-moz-border-radius:" + b.__tagsBorderRadius_l__ + "px", e = b.__advButtonBorderThickness_t__ + "px " + b.__advButtonBorder_u__, f = b.__advButtonBorderThickness_t__ + "px " + b.__advButtonBorderHover_v__, g = b.__advButtonBorderThickness_t__ + "px " + b.__advButtonBorderActive_w__, h = b.__advButtonBorderThickness_t__ + "px " + b.__advButtonBorderOpened_x__, 
    i = b.__tagsHeight_j__ - 2 * b.__tagsPadding_k__, j = i - 2 * b.__advButtonBorderThickness_t__, k = i - 2 * b.__tagBorderThickness_E__, l = a + b.__classMask_N__, m = a + b.__classSearchbar_O__, n = a + b.__classAdvButton_Q__, o = a + b.__classRemoveTag_W__, p = [];
    p.push(l + "{" + JGM.__CONST_g__.__cssUnselectable_a__ + "overflow:hidden;width:100%;background:" + b.__background_a__ + "}");
    p.push(l + " button{margin:0;padding:0 3px}");
    p.push(l + " input{border:" + b.__inputBorder_d__ + ";padding:" + b.__inputPadding_e__ + "}");
    p.push(m + "{text-align:" + b.__searchbarAlign_f__ + ";border-bottom:" + c + "}");
    p.push(m + " input{width:" + b.__searchbarWidth_h__ + ";margin:" + b.__searchbarMargin_g__ + "px 0;height:" + b.__searchbarHeight_i__ + "px;" + d + "}");
    p.push(a + b.__classTagbar_T__ + "{cursor:default;height:" + (b.__tagsHeight_j__ - b.__tagsPadding_k__) + "px;padding:" + b.__tagsPadding_k__ + "px 0 0 " + b.__tagsPadding_k__ + "px;border-bottom:" + c + "}");
    p.push(n + "{float:left;margin-right:" + b.__tagsPadding_k__ + "px;background:" + b.__advButtonBg_p__ + ";border:" + e + ";padding:0 " + b.__advButtonPadding_o__ + "px;" + d + "}");
    p.push(n + ":hover{background:" + b.__advButtonBgHover_q__ + ";border:" + f + "}");
    p.push(n + ".opened{background:" + b.__advButtonBgOpened_s__ + ";border:" + h + "}");
    p.push(n + ":active{background:" + b.__advButtonBgActive_r__ + ";border:" + g + "}");
    p.push(a + b.__classAdvButtonName_P__ + "{float:left;color:" + b.__advButtonColor_m__ + ";font:" + b.__advButtonFont_n__ + ";line-height:" + j + "px}");
    p.push(a + b.__classAdvButtonIcon_R__ + "{float:left;height:" + j + "px;margin-left:" + b.__advButtonIconMargin_z__ + "px;background:url(" + b.__advButtonIconUrl_A__ + ") no-repeat center;width:" + b.__advButtonIconWidth_y__ + "px}");
    p.push(n + ".opened ." + b.__classAdvButtonIcon_R__ + "{background:url(" + b.__advButtonIconCloseUrl_B__ + ") no-repeat center}");
    p.push(a + b.__classTag_U__ + "{float:left;border:" + b.__tagBorderThickness_E__ + "px " + b.__tagBorder_D__ + ";margin:0 " + b.__tagsPadding_k__ + "px " + b.__tagsPadding_k__ + "px 0;padding:0 " + b.__tagPadding_C__ + "px;background:" + b.__tagBackground_H__ + ";" + d + "}");
    p.push(a + b.__classTagName_V__ + "{float:left;color:" + b.__tagColor_G__ + ";font:" + b.__tagFont_F__ + ";line-height:" + k + "px}");
    p.push(o + "{float:left;margin-left:" + b.__tagPadding_C__ + "px;background:url(" + b.__tagRemoveIconUrl_J__ + ") no-repeat center;width:" + b.__tagRemoveIconWidth_I__ + "px;height:" + k + "px}");
    p.push(o + ":hover{background:url(" + b.__tagRemoveIconHoverUrl_K__ + ") no-repeat center}");
    p.push(o + ":active{background:url(" + b.__tagRemoveIconActiveUrl_af__ + ") no-repeat center}");
    p.push(a + b.__classClearTags_S__ + "{height:" + i + "px}");
    p.push(a + b.__classAdvanced_X__ + "{cursor:default;font:" + b.__advFont_L__ + ";border-bottom:" + c + "}");
    p.push(a + b.__classOptionCol_Y__ + "{display:inline-block;vertical-align:top}");
    p.push(a + b.__classOptionCol_Y__ + " input{width:" + b.__advInputWidth_M__ + "px;margin-right:2px;" + d + "}");
    p.push(a + b.__classSearchIcon_aa__ + "{background:url(" + b.__searchIconUrl_ab__ + ") no-repeat center;width:" + b.__searchIconWidth_ac__ + "px;height:" + b.__searchIconHeight_ad__ + "px}");
    return p.join("")
  };
  d.getInstance = function(a) {
    return new d(a)
  };
  b.__init = function() {
    var a = this._options, b = this, c, d, e;
    c = this.__mask_a__ = $("<div class='" + a.__classMask_N__ + "'>").prependTo(this._ctnr);
    this.__search_c__ = $("<div class='" + a.__classSearchbar_O__ + "'><input type='text'/></div>").appendTo(c);
    this.__masterInput_p__ = this.__search_c__.children(":eq(0)").keyup(function(a) {
      a.which === Util.keyMapKeydown.enter ? b.__parse_k__($(this)[0].value) : a.which === Util.keyMapKeydown.esc && b.__removeAllOptions_n__()
    });
    d = this.__hasFilter_x__ = this.grid.colDefMgr.get().some(function(a) {
      return Util.isNotNull(a.filter)
    });
    e = this.__tag_d__ = $("<div class='" + a.__classTagbar_T__ + "'>" + (d ? "<div class='" + a.__classAdvButton_Q__ + "'><div class='" + a.__classAdvButtonName_P__ + "'>추가 옵션</div><div class='" + a.__classAdvButtonIcon_R__ + "'></div></div>" : "") + "<button type='button' class='" + a.__classClearTags_S__ + "' onclick='JGM.m.SearchManager." + this.mid + ".__removeAllOptions_n__()'>모든 필터 제거</button></div>").appendTo(c);
    if(d) {
      var f = this.__adv_e__ = $("<div class='" + a.__classAdvanced_X__ + "'>").appendTo(c).hide().keyup(function(a) {
        if(a.which === Util.keyMapKeydown.enter) {
          var c = a.target.getAttribute("key");
          b.__registerOption_l__(c, b.__keyToName_y__[c], a.target.getAttribute("tag"), a.target.value);
          a.target.value = ""
        }
      });
      this.__advButton_q__ = e.children(":eq(0)").click(function() {
        $(this).toggleClass("opened");
        f.toggle("fast")
      })
    }
    this.grid.event.bind({onRenderModules:this.__onRenderModules_aE__, onCreateCss:this.__onCreateCss_V__, onFilter:this.__onFilter_ar__, onDestroy:this.__destroy_aA__, onAfterRenderModules:this.__onAfterRenderModules_aF__}, this)
  };
  b.__onRenderModules_aE__ = function() {
    var a = [], b = this._options, c = this.__mask_a__;
    if(this.__hasFilter_x__) {
      for(var d = this.grid.colDefMgr.get(), e = d.length, f = b.__keyMap_ae__, g = this.__nameMap_h__, h = this.__keyToName_y__, i, j, k, l = 0;l < e;l++) {
        if(i = d[l], Util.isNotNull(i.filter)) {
          k = i.key, j = Util.isNull(f) || !f.hasOwnProperty(k) ? i.name || k : f[k], g[j] = k, h[k] = j, a.push("<div class='" + b.__classOptionCol_Y__ + "'>"), this.__registerFilter_j__(k, j, i.name, i.filter, a), a.push("</div>")
        }
      }
      this.__adv_e__[0].innerHTML = a.join("")
    }
    Util.isNotNull(this.grid.menubar) && (this.grid.menubar.addIcon(b.__classSearchIcon_aa__, "데이터 검색을 합니다.", b.__searchIconWidth_ac__, b.__searchIconHeight_ad__, function() {
      c.toggle("fast")
    }), c.hide())
  };
  b.__onAfterRenderModules_aF__ = function() {
    var a = this.__filterMap_f__, b, c, d, e, f = this.__adv_e__;
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
  b.__destroy_aA__ = function() {
    var a, b, c, d = this.__globalMap_s__, e = this.__filterMap_f__, f = this.__tagMap_g__;
    for(a in d) {
      d.hasOwnProperty(a) && (JGM.__delete$_n__(d[a], "tag"), JGM.__deleteArray_r__(d[a], "list"))
    }
    for(a in e) {
      if(e.hasOwnProperty(a)) {
        d = e[a];
        for(b in d) {
          d.hasOwnProperty(b) && (b !== "andor" && b !== "parser" && b !== "validator" && JGM.__delete$_n__(d[b], "input"), JGM.__deleteMap_l__(d, b))
        }
        JGM.__deleteMap_l__(e, a)
      }
    }
    for(a in f) {
      if(f.hasOwnProperty(a)) {
        e = f[a];
        for(b in e) {
          if(e.hasOwnProperty(b)) {
            d = e[b];
            for(c in d) {
              d.hasOwnProperty(c) && (JGM.__delete$_n__(d[c], "tag"), JGM.__deleteMap_l__(d, c))
            }
            JGM.__deleteMap_l__(e, b)
          }
        }
        JGM.__deleteMap_l__(f, a)
      }
    }
    JGM._destroy(this, {name:"SearchManager", path:"search", $:"__masterInput_p__ __advButton_q__ __mask_a__ __search_c__ __tag_d__ __adv_e__", property:"_ctnr __hasFilter_x__", array:"__global_r__", map:"__globalMap_s__ __filterMap_f__ __tagMap_g__ __codeMap_i__ __nameMap_h__ _options __keyToName_y__"})
  };
  b.__onFilter_ar__ = function(a, b) {
    if(!(this.__global_r__.length === 0 && Util.isEmptyObj(this.__codeMap_i__))) {
      var c, d = this.__tagMap_g__, e, f, g = a.length, h, i = this.__filterMap_f__, j = this.constructor.CONST.and, k, l = this.__global_r__.length > 0, m, n;
      if(l) {
        var o = this.__global_r__, p;
        h = this.grid.colDefMgr.get().filter(function(a) {
          return!a.noSearch
        });
        var q = h.length, v = [];
        for(m = 0;m < q;m++) {
          v.push(h[m].key)
        }
      }
      m = g - 1;
      a:for(;m >= 0;m--) {
        g = a[m];
        if(l) {
          h = o.slice();
          c = 0;
          for(;h.length !== 0 && c < q;c++) {
            if(!Util.isNull(p = g[v[c]])) {
              Util.isString(p) || (p = p.toString());
              for(n = h.length - 1;n >= 0;n--) {
                p.indexOf(h[n]) !== -1 && h.removeAt(n)
              }
            }
          }
          if(h.length !== 0) {
            a.removeAt(m);
            b.push(g);
            continue a
          }
        }
        for(e in d) {
          if(d.hasOwnProperty(e)) {
            if(n = d[e], c = i[e].andor, h = g[e], c === j) {
              for(f in n) {
                if(n.hasOwnProperty(f)) {
                  for(k in c = n[f], c) {
                    if(c.hasOwnProperty(k) && !c[k].fn(h)) {
                      a.removeAt(m);
                      b.push(g);
                      continue a
                    }
                  }
                }
              }
            }else {
              for(f in n) {
                if(n.hasOwnProperty(f)) {
                  for(k in c = n[f], c) {
                    if(c.hasOwnProperty(k) && c[k].fn(h)) {
                      continue a
                    }
                  }
                }
              }
              a.removeAt(m);
              b.push(g);
              continue a
            }
          }
        }
      }
    }
  };
  b.__registerFilter_j__ = function(a, b, c, d, e) {
    if(!this.__filterMap_f__.hasOwnProperty(a)) {
      if(d === "number") {
        d = this.constructor.__numberFilter_d__
      }else {
        if(d === "string") {
          d = this.constructor.__stringFilter_e__
        }
      }
      var f, g = d.length, h = 0, i = this.mid, k = this._options.__classOption_Z__, j, l, m, n;
      j = this.__filterMap_f__[a] = {andor:this.constructor.CONST.and};
      l = this.__tagMap_g__[a] = {};
      for(e.push("<table>");h < g;h++) {
        f = d[h], n = f.name, n === "parser" ? j.parser = f.fn : n === "validator" ? j.validator = f.fn : (m = f.tag, j[m] = {option:f}, l[m] = {}, e.push("<tr title='" + f.comment(c, "입력값") + "'><td><div class='" + k + "'>" + c + " " + m + "</td><td><input id='" + a + n + "' key='" + a + "' tag='" + m + "' type='text'><button type='button' onclick=\"JGM.m.SearchManager." + i + ".__registerOption_l__('" + a + "','" + b + "','" + m + "',this.previousSibling.value)\">등록</button></div></td></tr>"))
      }
      e.push("</table>")
    }
  };
  b.__parse_k__ = function(a) {
    for(var b, c, d, e, f = Util.split(a), g = f.length, h = 2, i = !1, j = [], k = this.__nameMap_h__, l = this.__filterMap_f__, m = 0;m < g;m++) {
      if(a = f[m], a !== "") {
        switch(h) {
          case 0:
            l[b].hasOwnProperty(a) && (d = a, h = 1);
            break;
          case 1:
            e = a;
            h = 2;
            break;
          case 2:
            a.charAt(0) === "@" ? (a = a.substring(1), k.hasOwnProperty(a) ? (Util.isNotNullAnd(b, c, d, e) && this.__registerOption_l__(b, c, d, e, !0) && (i = !0), b = k[a], c = a, e = d = void 0, h = 0) : Util.isNull(b) ? j.push(a) : e += " " + a) : Util.isNull(b) ? j.push(a) : e += " " + a
        }
      }
    }
    Util.isNotNullAnd(b, c, d, e) && this.__registerOption_l__(b, c, d, e, !0) && (i = !0);
    this.__registerGlobal_v__(j) && (i = !0);
    this.__syncMasterInput_u__();
    i && this.grid.dataMgr.refresh()
  };
  b.__syncMasterInput_u__ = function() {
    if(this._options.__syncMaster_ag__) {
      var a = this.__global_r__.join(" "), b = this.__tagMap_g__, c = this.__keyToName_y__, d, e, f, g, h;
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
      this.__masterInput_p__[0].value = $.trim(a)
    }else {
      this.__masterInput_p__[0].value = ""
    }
  };
  b.__registerGlobal_v__ = function(a) {
    for(var b = 0, c = a.length, d = this.__global_r__;b < c;b++) {
      d.indexOf(a[b]) !== -1 ? a.removeAt(b--) : d.push(a[b])
    }
    if(a.length === 0) {
      return!1
    }
    b = this._options;
    this.__globalMap_s__[a[0]] = {tag:$("<div class='" + b.__classTag_U__ + "' title='" + a.join(", ") + " 를 포함하는'><div class='" + b.__classTagName_V__ + "'>" + a.join(" ") + "</div><div class='" + b.__classRemoveTag_W__ + "' title='필터 제거' onclick=\"JGM.m.SearchManager." + this.mid + ".__removeGlobal_w__('" + a[0] + "')\"></div></div>").appendTo(this.__tag_d__), list:a};
    return!0
  };
  b.__removeGlobal_w__ = function(a) {
    var b = this.__globalMap_s__;
    if(b.hasOwnProperty(a)) {
      var c = b[a];
      c.tag.remove();
      delete c.tag;
      this.__global_r__.removeList(c.list);
      c.list.length = 0;
      delete c.list;
      delete b[a];
      this.__syncMasterInput_u__();
      this.grid.dataMgr.refresh()
    }
  };
  b.__registerOption_l__ = function(a, b, c, e, f) {
    var g = this.__filterMap_f__, h, i = this.__codeMap_i__;
    if(g.hasOwnProperty(a) && (h = g[a]).hasOwnProperty(c)) {
      g = h[c];
      if(Util.isNull(e)) {
        var j = g.input, e = $.trim(j.val());
        j.val("")
      }else {
        e = $.trim(e)
      }
      if(e.length === 0) {
        return!1
      }
      Util.isNotNull(h.parser) && (e = h.parser(e));
      if(i.hasOwnProperty(a + "@T" + c + "@B" + e)) {
        return!1
      }
      if(Util.isNotNull(h.validator) && !h.validator(e)) {
        return!1
      }
      g = g.option;
      h = h.andor
    }else {
      return!1
    }
    j = this.__tagMap_g__[a];
    if(j[c].hasOwnProperty(e)) {
      return!1
    }
    var k, l, m, n, o = this.__filterMap_f__[a], p;
    for(m in j) {
      if(j.hasOwnProperty(m)) {
        for(n in k = j[m], k) {
          k.hasOwnProperty(n) && (p = k[n], l = Util.isNotNull(o.parser) ? o.parser(n) : n, d.__checkDisable_c__(g.type, p.option.type, h, e, l) && (delete i[a + "@T" + p.option.tag + "@B" + l], p.tag.remove(), delete p.tag, delete p.option, delete p.fn, delete k[n]))
        }
      }
    }
    i[a + "@T" + c + "@B" + e] = !0;
    this.__createTag_o__(a, g, e, b);
    f || (this.__syncMasterInput_u__(), this.grid.dataMgr.refresh());
    return!0
  };
  b.__removeOption_m__ = function(a, b, c) {
    var d = this.__tagMap_g__, e, f;
    if(d.hasOwnProperty(a) && (e = d[a]).hasOwnProperty(b) && (f = e[b]).hasOwnProperty(c)) {
      d = f[c], d.tag.remove(), delete d.tag, delete d.option, delete d.fn, delete f[c], delete this.__codeMap_i__[a + "@T" + b + "@B" + c], this.__syncMasterInput_u__(), this.grid.dataMgr.refresh()
    }
  };
  b.__removeAllOptions_n__ = function() {
    var a, b = this.__globalMap_s__, c, d = this.__tagMap_g__, e, f, g;
    for(a in b) {
      if(b.hasOwnProperty(a)) {
        c = b[a], c.tag.remove(), delete c.tag, c.list.length = 0, delete c.list, delete b[a]
      }
    }
    this.__global_r__.length = 0;
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
    this.__codeMap_i__ = {};
    this.__syncMasterInput_u__();
    this.grid.dataMgr.refresh()
  };
  b.__createTag_o__ = function(a, b, c, d) {
    var e = this._options;
    return this.__tagMap_g__[a][b.tag][c] = {tag:$("<div class='" + e.__classTag_U__ + "' title='" + b.comment(d, c) + "'><div class='" + e.__classTagName_V__ + "'>@" + d + " " + b.tag + " " + c + "</div><div class='" + e.__classRemoveTag_W__ + "' title='필터 제거' onclick=\"JGM.m.SearchManager." + this.mid + ".__removeOption_m__('" + a + "','" + b.tag + "','" + c + "')\"></div></div>").appendTo(this.__tag_d__), option:b, fn:b.fn(c)}
  };
  var a = d.CONST = {lt:0, lte:1, eq:2, neq:3, gt:4, gte:5, and:6, or:7, T:8, F:9}, b = a.lt, e = a.gt, c = a.eq, g = a.neq, i = a.and, f = a.or, h = a.T, a = a.F, k = d.__comparator_a__ = {}, j = k[b] = function(a, b) {
    return a <= b
  }, m = k[e] = function(a, b) {
    return a >= b
  }, l = k[c] = function(a, b) {
    return a === b
  }, h = k[h] = function() {
    return!0
  }, n = d.__disableMap_b__ = {}, o = n[b] = {}, p = n[e] = {}, q = n[c] = {}, n = n[g] = {};
  k[a] = function() {
    return!1
  };
  o[b] = {};
  o[b][i] = h;
  o[b][f] = h;
  o[e] = {};
  o[e][i] = j;
  o[e][f] = m;
  o[c] = {};
  o[c][i] = h;
  o[c][f] = m;
  o[g] = {};
  o[g][i] = j;
  o[g][f] = h;
  p[b] = {};
  p[b][i] = m;
  p[b][f] = j;
  p[e] = {};
  p[e][i] = h;
  p[e][f] = h;
  p[c] = {};
  p[c][i] = h;
  p[c][f] = j;
  p[g] = {};
  p[g][i] = m;
  p[g][f] = h;
  q[b] = {};
  q[b][i] = h;
  q[b][f] = j;
  q[e] = {};
  q[e][i] = h;
  q[e][f] = m;
  q[c] = {};
  q[c][i] = h;
  q[c][f] = l;
  q[g] = {};
  q[g][i] = h;
  q[g][f] = h;
  n[b] = {};
  n[b][i] = m;
  n[b][f] = h;
  n[e] = {};
  n[e][i] = j;
  n[e][f] = h;
  n[c] = {};
  n[c][i] = h;
  n[c][f] = h;
  n[g] = {};
  n[g][i] = l;
  n[g][f] = h;
  d.__checkDisable_c__ = function(a, b, c, d, e) {
    try {
      return this.__disableMap_b__[a][b][c](d, e)
    }catch(f) {
      return!1
    }
  };
  d.__numberFilter_d__ = [{name:"gt", tag:">", type:e, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 큰"
  }, fn:function(a) {
    Util.isString(a) && (a = a.toFloat());
    return function(b) {
      return b > a
    }
  }}, {name:"gte", tag:">=", type:e, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 크거나 같은"
  }, fn:function(a) {
    Util.isString(a) && (a = a.toFloat());
    return function(b) {
      return b >= a
    }
  }}, {name:"lt", tag:"<", type:b, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 작은"
  }, fn:function(a) {
    Util.isString(a) && (a = a.toFloat());
    return function(b) {
      return b < a
    }
  }}, {name:"lte", tag:"<=", type:b, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 작거나 같은"
  }, fn:function(a) {
    Util.isString(a) && (a = a.toFloat());
    return function(b) {
      return b <= a
    }
  }}, {name:"eq", tag:"=", type:c, comment:function(a, b) {
    return a + " 이(가) " + b + "인"
  }, fn:function(a) {
    Util.isString(a) && (a = a.toFloat());
    return function(b) {
      return b === a
    }
  }}, {name:"neq", tag:"!=", type:g, comment:function(a, b) {
    return a + " 이(가) " + b + "이(가) 아닌"
  }, fn:function(a) {
    Util.isString(a) && (a = a.toFloat());
    return function(b) {
      return b !== a
    }
  }}, {name:"contains", tag:"*=", comment:function(a, b) {
    return a + " 이(가) 숫자 " + b + "를 포함하는"
  }, fn:function(a) {
    a = Util.isNumber(a) ? a.toString() : $.trim(a);
    return function(b) {
      return b.toString().indexOf(a) !== -1
    }
  }}, {name:"parser", fn:function(a) {
    return a.toFloat()
  }}, {name:"validator", fn:function(a) {
    return!isNaN(a)
  }}];
  d.__stringFilter_e__ = [{name:"to", tag:"<=", type:b, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 사전에서 이전인"
  }, fn:function(a) {
    a = $.trim(a).toLowerCase();
    return function(b) {
      return b.toLowerCase() <= a
    }
  }}, {name:"from", tag:">=", type:e, comment:function(a, b) {
    return a + " 이(가) " + b + "보다 사전에서 이후인"
  }, fn:function(a) {
    a = $.trim(a).toLowerCase();
    return function(b) {
      return b.toLowerCase() >= a
    }
  }}, {name:"equals", tag:"=", type:c, comment:function(a, b) {
    return a + " 이(가) " + b + "와(과) 같은"
  }, fn:function(a) {
    a = $.trim(a).toLowerCase();
    return function(b) {
      return b.toLowerCase() === a
    }
  }}, {name:"notEquals", tag:"!=", type:g, comment:function(a, b) {
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
    var a = a.toLowerCase(), b = Util.split(a), c = b.length;
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
    var a = a.toLowerCase(), b = Util.split(a), c = b.length;
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
