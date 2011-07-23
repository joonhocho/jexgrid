(function(){if(!Number.prototype.toFixedFloat) {
  Number.prototype.toFixedFloat = function(b) {
    return parseFloat(this.toFixed(b))
  }
}
if(!String.prototype.toInt) {
  String.prototype.toInt = function() {
    var b;
    if((b = this.replace(/[^\d\.\-]/g, "")).length === 0) {
      return NaN
    }
    for(var c, a = 0, d = 0, e = b.length, f = 0, i = !1;f < e;f++) {
      if(c = b.charAt(f), c === ".") {
        if(++a === 2) {
          i = !0;
          break
        }
      }else {
        if(c === "-" && ++d === 2) {
          i = !0;
          break
        }
      }
    }
    return i === !0 && (b = b.replace(/[\.\-]/g, "")).length === 0 ? NaN : /^-*0*\./.test(b) || (b = b.replace(/^-0+/, "-")).length === 0 || (b = b.replace(/^0+/, "")).length === 0 ? 0 : parseInt(b, 10)
  }
}
if(!String.prototype.toFloat) {
  String.prototype.toFloat = function() {
    var b;
    if((b = this.replace(/[^-\d\.]/g, "")).length === 0) {
      return NaN
    }
    for(var c = 0, a = b.length, d, e = 0, f = 0;c < a;c++) {
      if(d = b.charAt(c), d === ".") {
        if(e !== 0) {
          return NaN
        }else {
          e++
        }
      }else {
        if(d === "-") {
          if(f !== 0) {
            return NaN
          }else {
            f++
          }
        }
      }
    }
    return parseFloat(b)
  }
}
if(!Array.prototype.remove) {
  Array.prototype.remove = function(b) {
    if(this.length === 0) {
      return-1
    }
    b = this.indexOf(b);
    b !== -1 && this.splice(b, 1);
    return b
  }
}
if(!Array.prototype.removeAll) {
  Array.prototype.removeAll = function(b) {
    if(this.length === 0) {
      return this
    }
    for(var c = this.length;(c = this.lastIndexOf(b, c - 1)) !== -1;) {
      if(this.splice(c, 1), c === 0) {
        break
      }
    }
    return this
  }
}
if(!Array.prototype.removeList) {
  Array.prototype.removeList = function(b) {
    if(this.length === 0 || b.length === 0) {
      return this
    }
    for(var c = b.length, a = 0, d;a < c;a++) {
      (d = this.indexOf(b[a])) !== -1 && this.splice(d, 1)
    }
    return this
  }
}
if(!Array.prototype.removeAt) {
  Array.prototype.removeAt = function(b) {
    if(this.length !== 0 && (b < 0 && (b = this.length + b), b < 0 && (b = 0), this.hasOwnProperty(b) && b < this.length)) {
      return this.splice(b, 1)[0]
    }
  }
}
if(!Array.prototype.addAt) {
  Array.prototype.addAt = function(b, c) {
    this.splice(b, 0, c);
    return c
  }
}
if(!Array.prototype.pushList) {
  Array.prototype.pushList = function(b) {
    return b.length === 0 ? this.length : Array.prototype.push.apply(this, b)
  }
}
if(!Array.prototype.pushListAt) {
  Array.prototype.pushListAt = function(b, c) {
    if(c.length === 0) {
      return this.length
    }
    var a = [b, 0];
    Array.prototype.push.apply(a, c);
    Array.prototype.splice.apply(this, a);
    return this.length
  }
}
;(function() {
  var b = Array.prototype;
  if(!b.indexOf) {
    b.indexOf = function(c) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var a = Object(this), d = a.length >>> 0;
      if(d === 0) {
        return-1
      }
      var e = 0;
      arguments.length > 0 && (e = Number(arguments[1]), e !== e ? e = 0 : e !== 0 && e !== 1 / 0 && e !== -(1 / 0) && (e = (e > 0 || -1) * Math.floor(Math.abs(e))));
      if(e >= d) {
        return-1
      }
      for(e = e >= 0 ? e : Math.max(d - Math.abs(e), 0);e < d;e++) {
        if(e in a && a[e] === c) {
          return e
        }
      }
      return-1
    }
  }
  if(!b.lastIndexOf) {
    b.lastIndexOf = function(c) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var a = Object(this), d = a.length >>> 0;
      if(d === 0) {
        return-1
      }
      var e = d;
      arguments.length > 1 && (e = Number(arguments[1]), e !== e ? e = 0 : e !== 0 && e !== 1 / 0 && e !== -(1 / 0) && (e = (e > 0 || -1) * Math.floor(Math.abs(e))));
      for(d = e >= 0 ? Math.min(e, d - 1) : d - Math.abs(e);d >= 0;d--) {
        if(d in a && a[d] === c) {
          return d
        }
      }
      return-1
    }
  }
  if(!b.filter) {
    b.filter = function(c, a) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var d = Object(this), e = d.length >>> 0;
      if(typeof c !== "function") {
        throw new TypeError;
      }
      for(var f = [], b = 0;b < e;b++) {
        if(b in d) {
          var g = d[b];
          c.call(a, g, b, d) && f.push(g)
        }
      }
      return f
    }
  }
  if(!b.forEach) {
    b.forEach = function(c, a) {
      var d, e = Object(this), f = e.length >>> 0, b = 0;
      if(!c || !c.call) {
        throw new TypeError;
      }
      for(a && (d = a);b < f;) {
        var g = String(b);
        e.hasOwnProperty(g) && (g = e[g], c.call(d, g, b, e));
        b++
      }
    }
  }
  if(!b.every) {
    b.every = function(c, a) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var d = Object(this), e = d.length >>> 0;
      if(typeof c !== "function") {
        throw new TypeError;
      }
      for(var f = 0;f < e;f++) {
        if(f in d && !c.call(a, d[f], f, d)) {
          return!1
        }
      }
      return!0
    }
  }
  if(!b.map) {
    b.map = function(c, a) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var d = Object(this), e = d.length >>> 0;
      if(typeof c !== "function") {
        throw new TypeError;
      }
      for(var f = Array(e), b = 0;b < e;b++) {
        b in d && (f[b] = c.call(a, d[b], b, d))
      }
      return f
    }
  }
  if(!b.some) {
    b.some = function(b, a) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var d = Object(this), e = d.length >>> 0;
      if(typeof b !== "function") {
        throw new TypeError;
      }
      for(var f = 0;f < e;f++) {
        if(f in d && b.call(a, d[f], f, d)) {
          return!0
        }
      }
      return!1
    }
  }
  if(!b.reduce) {
    b.reduce = function(b) {
      var a, d = this.length, e;
      if(typeof b !== "function") {
        throw new TypeError("First argument is not callable");
      }
      if((d == 0 || d === null) && arguments.length <= 1) {
        throw new TypeError("Array length is 0 and no second argument");
      }
      arguments.length <= 1 ? (e = this[0], a = 1) : e = arguments[1];
      for(a = a || 0;a < d;++a) {
        a in this && (e = b.call(void 0, e, this[a], a, this))
      }
      return e
    }
  }
  if(!b.reduceRight) {
    b.reduceRight = function(b) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var a = Object(this), d = a.length >>> 0;
      if(typeof b !== "function") {
        throw new TypeError;
      }
      if(d === 0 && arguments.length === 1) {
        throw new TypeError;
      }
      d -= 1;
      var e;
      if(arguments.length >= 2) {
        e = arguments[1]
      }else {
        do {
          if(d in this) {
            e = this[d--];
            break
          }
          if(--d < 0) {
            throw new TypeError;
          }
        }while(1)
      }
      for(;d >= 0;) {
        d in a && (e = b.call(void 0, e, a[d], d, a)), d--
      }
      return e
    }
  }
})();
var COMPILED = !0, goog = goog || {};
goog.global = window;
window.goog = goog;
goog.DEBUG = !0;
goog.LOCALE = "en";
goog.provide = function(b) {
  if(!COMPILED) {
    if(goog.isProvided_(b)) {
      throw Error('Namespace "' + b + '" already declared.');
    }
    delete goog.implicitNamespaces_[b];
    for(var c = b;c = c.substring(0, c.lastIndexOf("."));) {
      if(goog.getObjectByName(c)) {
        break
      }
      goog.implicitNamespaces_[c] = !0
    }
  }
  goog.exportSymbol_(b)
};
goog.setTestOnly = function(b) {
  if(COMPILED && !goog.DEBUG) {
    throw b = b || "", Error("Importing test-only code into non-debug environment" + b ? ": " + b : ".");
  }
};
if(!COMPILED) {
  goog.isProvided_ = function(b) {
    return!goog.implicitNamespaces_[b] && !!goog.getObjectByName(b)
  }, goog.implicitNamespaces_ = {}
}
goog.exportSymbol_ = function(b, c, a) {
  b = b.split(".");
  a = a || goog.global;
  !(b[0] in a) && a.execScript && a.execScript("var " + b[0]);
  for(var d;b.length && (d = b.shift());) {
    !b.length && goog.isDef(c) ? a[d] = c : a = a[d] ? a[d] : a[d] = {}
  }
};
goog.getObjectByName = function(b, c) {
  for(var a = b.split("."), d = c || goog.global, e;e = a.shift();) {
    if(goog.isDefAndNotNull(d[e])) {
      d = d[e]
    }else {
      return null
    }
  }
  return d
};
goog.globalize = function(b, c) {
  var a = c || goog.global, d;
  for(d in b) {
    a[d] = b[d]
  }
};
goog.addDependency = function(b, c, a) {
  if(!COMPILED) {
    for(var d, b = b.replace(/\\/g, "/"), e = goog.dependencies_, f = 0;d = c[f];f++) {
      e.nameToPath[d] = b, b in e.pathToNames || (e.pathToNames[b] = {}), e.pathToNames[b][d] = !0
    }
    for(d = 0;c = a[d];d++) {
      b in e.requires || (e.requires[b] = {}), e.requires[b][c] = !0
    }
  }
};
goog.ENABLE_DEBUG_LOADER = !0;
goog.require = function(b) {
  if(!COMPILED && !goog.isProvided_(b)) {
    if(goog.ENABLE_DEBUG_LOADER) {
      var c = goog.getPathFromDeps_(b);
      if(c) {
        goog.included_[c] = !0;
        goog.writeScripts_();
        return
      }
    }
    b = "goog.require could not find: " + b;
    goog.global.console && goog.global.console.error(b);
    throw Error(b);
  }
};
goog.basePath = "";
goog.nullFunction = function() {
};
goog.identityFunction = function(b) {
  return b
};
goog.abstractMethod = function() {
  throw Error("unimplemented abstract method");
};
goog.addSingletonGetter = function(b) {
  b.getInstance = function() {
    return b.instance_ || (b.instance_ = new b)
  }
};
if(!COMPILED && goog.ENABLE_DEBUG_LOADER) {
  goog.included_ = {}, goog.dependencies_ = {pathToNames:{}, nameToPath:{}, requires:{}, visited:{}, written:{}}, goog.inHtmlDocument_ = function() {
    var b = goog.global.document;
    return typeof b != "undefined" && "write" in b
  }, goog.findBasePath_ = function() {
    if(goog.global.CLOSURE_BASE_PATH) {
      goog.basePath = goog.global.CLOSURE_BASE_PATH
    }else {
      if(goog.inHtmlDocument_()) {
        for(var b = goog.global.document.getElementsByTagName("script"), c = b.length - 1;c >= 0;--c) {
          var a = b[c].src, d = a.lastIndexOf("?"), d = d == -1 ? a.length : d;
          if(a.substr(d - 7, 7) == "base.js") {
            goog.basePath = a.substr(0, d - 7);
            break
          }
        }
      }
    }
  }, goog.importScript_ = function(b) {
    var c = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_;
    !goog.dependencies_.written[b] && c(b) && (goog.dependencies_.written[b] = !0)
  }, goog.writeScriptTag_ = function(b) {
    return goog.inHtmlDocument_() ? (goog.global.document.write('<script type="text/javascript" src="' + b + '"><\/script>'), !0) : !1
  }, goog.writeScripts_ = function() {
    function b(e) {
      if(!(e in d.written)) {
        if(!(e in d.visited) && (d.visited[e] = !0, e in d.requires)) {
          for(var i in d.requires[e]) {
            if(!goog.isProvided_(i)) {
              if(i in d.nameToPath) {
                b(d.nameToPath[i])
              }else {
                throw Error("Undefined nameToPath for " + i);
              }
            }
          }
        }
        e in a || (a[e] = !0, c.push(e))
      }
    }
    var c = [], a = {}, d = goog.dependencies_, e;
    for(e in goog.included_) {
      d.written[e] || b(e)
    }
    for(e = 0;e < c.length;e++) {
      if(c[e]) {
        goog.importScript_(goog.basePath + c[e])
      }else {
        throw Error("Undefined script input");
      }
    }
  }, goog.getPathFromDeps_ = function(b) {
    return b in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[b] : null
  }, goog.findBasePath_()
}
goog.typeOf = function(b) {
  var c = typeof b;
  if(c == "object") {
    if(b) {
      if(b instanceof Array) {
        return"array"
      }else {
        if(b instanceof Object) {
          return c
        }
      }
      var a = Object.prototype.toString.call(b);
      if(a == "[object Window]") {
        return"object"
      }
      if(a == "[object Array]" || typeof b.length == "number" && typeof b.splice != "undefined" && typeof b.propertyIsEnumerable != "undefined" && !b.propertyIsEnumerable("splice")) {
        return"array"
      }
      if(a == "[object Function]" || typeof b.call != "undefined" && typeof b.propertyIsEnumerable != "undefined" && !b.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if(c == "function" && typeof b.call == "undefined") {
      return"object"
    }
  }
  return c
};
goog.propertyIsEnumerableCustom_ = function(b, c) {
  if(c in b) {
    for(var a in b) {
      if(a == c && Object.prototype.hasOwnProperty.call(b, c)) {
        return!0
      }
    }
  }
  return!1
};
goog.propertyIsEnumerable_ = function(b, c) {
  return b instanceof Object ? Object.prototype.propertyIsEnumerable.call(b, c) : goog.propertyIsEnumerableCustom_(b, c)
};
goog.isDef = function(b) {
  return b !== void 0
};
goog.isNull = function(b) {
  return b === null
};
goog.isDefAndNotNull = function(b) {
  return b != null
};
goog.isArray = function(b) {
  return goog.typeOf(b) == "array"
};
goog.isArrayLike = function(b) {
  var c = goog.typeOf(b);
  return c == "array" || c == "object" && typeof b.length == "number"
};
goog.isDateLike = function(b) {
  return goog.isObject(b) && typeof b.getFullYear == "function"
};
goog.isString = function(b) {
  return typeof b == "string"
};
goog.isBoolean = function(b) {
  return typeof b == "boolean"
};
goog.isNumber = function(b) {
  return typeof b == "number"
};
goog.isFunction = function(b) {
  return goog.typeOf(b) == "function"
};
goog.isObject = function(b) {
  b = goog.typeOf(b);
  return b == "object" || b == "array" || b == "function"
};
goog.getUid = function(b) {
  return b[goog.UID_PROPERTY_] || (b[goog.UID_PROPERTY_] = ++goog.uidCounter_)
};
goog.removeUid = function(b) {
  "removeAttribute" in b && b.removeAttribute(goog.UID_PROPERTY_);
  try {
    delete b[goog.UID_PROPERTY_]
  }catch(c) {
  }
};
goog.UID_PROPERTY_ = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36);
goog.uidCounter_ = 0;
goog.getHashCode = goog.getUid;
goog.removeHashCode = goog.removeUid;
goog.cloneObject = function(b) {
  var c = goog.typeOf(b);
  if(c == "object" || c == "array") {
    if(b.clone) {
      return b.clone()
    }
    var c = c == "array" ? [] : {}, a;
    for(a in b) {
      c[a] = goog.cloneObject(b[a])
    }
    return c
  }
  return b
};
goog.bindNative_ = function(b, c, a) {
  return b.call.apply(b.bind, arguments)
};
goog.bindJs_ = function(b, c, a) {
  if(!b) {
    throw Error();
  }
  if(arguments.length > 2) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var a = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(a, d);
      return b.apply(c, a)
    }
  }else {
    return function() {
      return b.apply(c, arguments)
    }
  }
};
goog.bind = function(b, c, a) {
  goog.bind = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? goog.bindNative_ : goog.bindJs_;
  return goog.bind.apply(null, arguments)
};
goog.partial = function(b, c) {
  var a = Array.prototype.slice.call(arguments, 1);
  return function() {
    var d = Array.prototype.slice.call(arguments);
    d.unshift.apply(d, a);
    return b.apply(this, d)
  }
};
goog.mixin = function(b, c) {
  for(var a in c) {
    b[a] = c[a]
  }
};
goog.now = Date.now || function() {
  return+new Date
};
goog.globalEval = function(b) {
  if(goog.global.execScript) {
    goog.global.execScript(b, "JavaScript")
  }else {
    if(goog.global.eval) {
      if(goog.evalWorksForGlobals_ == null) {
        goog.global.eval("var _et_ = 1;"), typeof goog.global._et_ != "undefined" ? (delete goog.global._et_, goog.evalWorksForGlobals_ = !0) : goog.evalWorksForGlobals_ = !1
      }
      if(goog.evalWorksForGlobals_) {
        goog.global.eval(b)
      }else {
        var c = goog.global.document, a = c.createElement("script");
        a.type = "text/javascript";
        a.defer = !1;
        a.appendChild(c.createTextNode(b));
        c.body.appendChild(a);
        c.body.removeChild(a)
      }
    }else {
      throw Error("goog.globalEval not available");
    }
  }
};
goog.evalWorksForGlobals_ = null;
goog.getCssName = function(b, c) {
  var a = function(d) {
    return goog.cssNameMapping_[d] || d
  }, d;
  d = goog.cssNameMapping_ ? goog.cssNameMappingStyle_ == "BY_WHOLE" ? a : function(d) {
    for(var d = d.split("-"), f = [], b = 0;b < d.length;b++) {
      f.push(a(d[b]))
    }
    return f.join("-")
  } : function(d) {
    return d
  };
  return c ? b + "-" + d(c) : d(b)
};
goog.setCssNameMapping = function(b, c) {
  goog.cssNameMapping_ = b;
  goog.cssNameMappingStyle_ = c
};
goog.getMsg = function(b, c) {
  var a = c || {}, d;
  for(d in a) {
    var e = ("" + a[d]).replace(/\$/g, "$$$$"), b = b.replace(RegExp("\\{\\$" + d + "\\}", "gi"), e)
  }
  return b
};
goog.exportSymbol = function(b, c, a) {
  goog.exportSymbol_(b, c, a)
};
goog.exportProperty = function(b, c, a) {
  b[c] = a
};
goog.inherits = function(b, c) {
  function a() {
  }
  a.prototype = c.prototype;
  b.superClass_ = c.prototype;
  b.prototype = new a;
  b.prototype.constructor = b
};
goog.base = function(b, c, a) {
  var d = arguments.callee.caller;
  if(d.superClass_) {
    return d.superClass_.constructor.apply(b, Array.prototype.slice.call(arguments, 1))
  }
  for(var e = Array.prototype.slice.call(arguments, 2), f = !1, i = b.constructor;i;i = i.superClass_ && i.superClass_.constructor) {
    if(i.prototype[c] === d) {
      f = !0
    }else {
      if(f) {
        return i.prototype[c].apply(b, e)
      }
    }
  }
  if(b[c] === d) {
    return b.constructor.prototype[c].apply(b, e)
  }else {
    throw Error("goog.base called from a method of one name to a method of a different name");
  }
};
goog.scope = function(b) {
  b.call(goog.global)
};
var jx = {util:{}}, Util = {}, echo = {};
(function() {
  var b = window.console, c = [], a;
  a = b && b.log ? function(d) {
    b.log.apply(b, arguments)
  } : function(d) {
    c.push.apply(c, arguments)
  };
  goog.exportSymbol("jx.util", Util);
  goog.exportSymbol("echo", a);
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
  Util.ifNull = function(d, a, f) {
    return d == null ? a : f === void 0 ? d : f
  };
  Util.ifTrue = function(d, a, f) {
    return d === !0 ? a : f === void 0 ? d : f
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
  Util.split = function(d, a, f, b) {
    if(typeof d !== "string") {
      return[]
    }
    a = a === void 0 ? /\s+/ : a;
    f = f === void 0 ? function(d) {
      return!!d
    } : f;
    b = b === void 0 ? function(d) {
      return $.trim(d)
    } : b;
    d = d.split(a);
    b && (d = d.map(b));
    f && (d = d.filter(f));
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
    for(var a = 0, f = d.length;a < f;a++) {
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
      for(var a = [], f = 0, b = d.length;f < b;f++) {
        f in d && (a[f] = Util.deepClone(d[f]))
      }
      return a
    }
    a = {};
    for(f in d) {
      d.hasOwnProperty(f) && (a[f] = Util.deepClone(d[f]))
    }
    return a
  };
  Util.clone = function(d, a, f) {
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
      if(f === 1) {
        return Array.prototype.slice.call(d)
      }
      for(var b = [], c = d.length, h = 0, f = f !== void 0 ? f - 1 : void 0;h < c;h++) {
        h in d && (b[h] = Util.clone(d[h], a, f))
      }
      return b
    }
    b = {};
    c = Util.isEmptyObj(a);
    if(f === 1) {
      if(c) {
        for(h in d) {
          d.hasOwnProperty(h) && (b[h] = d[h])
        }
      }else {
        for(h in a) {
          a.hasOwnProperty(h) && d.hasOwnProperty(h) && (b[h] = d[h])
        }
      }
    }else {
      if(f = f !== void 0 ? f - 1 : void 0, c) {
        for(h in d) {
          d.hasOwnProperty(h) && (b[h] = Util.clone(d[h], void 0, f))
        }
      }else {
        for(h in a) {
          a.hasOwnProperty(h) && d.hasOwnProperty(h) && (b[h] = Util.clone(d[h], void 0, f))
        }
      }
    }
    return b
  };
  Util.toArray = function(d) {
    var a = [], f;
    for(f in d) {
      d.hasOwnProperty(f) && a.push(d[f])
    }
    return a
  };
  Util.toArrayWithKey = function(d) {
    var a = [], f;
    for(f in d) {
      d.hasOwnProperty(f) && a.push({key:f, val:d[f]})
    }
    return a
  };
  Util.random = function(a) {
    return Math.floor(a * Math.random())
  };
  Util.bound = function(a, e, f) {
    isNaN(f) || (a = Math.min(a, f));
    isNaN(e) || (a = Math.max(a, e));
    return a
  };
  Util.callFn = function() {
    return arguments.length <= 3 ? arguments[1].call(arguments[0], arguments[2]) : arguments[1].apply(arguments[0], Array.prototype.slice.call(arguments, 2))
  };
  Util.formatNumber = function(a, e, f, b, c) {
    var f = f === void 0 ? "&#8361; " : f, e = isNaN(e) ? 0 : e, b = b === void 0 ? "." : b, c = c === void 0 ? "," : c, h = a < 0 ? "-" : "", k = parseInt(a = Math.abs(+a || 0).toFixed(e), 10) + "", j = k.length, j = j > 3 ? j % 3 : 0;
    return f + h + (j ? k.substr(0, j) + c : "") + k.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + c) + (e ? b + Math.abs(a - k).toFixed(e).slice(2) : "")
  };
  Util.getBodyScroll = function() {
    var a = 0, e = 0;
    if(typeof window.pageYOffset === "number") {
      e = window.pageYOffset, a = window.pageXOffset
    }else {
      if(document.body && (document.body.scrollLeft || document.body.scrollTop)) {
        e = document.body.scrollTop, a = document.body.scrollLeft
      }else {
        if(document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
          e = document.documentElement.scrollTop, a = document.documentElement.scrollLeft
        }
      }
    }
    return[a, e]
  };
  Util.hasClass = function(a, e) {
    if(a == null || e == null) {
      return!1
    }
    if(a.className === e) {
      return!0
    }
    if(a.className) {
      for(var f = a.classList ? a.classList : Util.split(a.className), b = 0, c = f.length;b < c;b++) {
        if(f[b] === e) {
          return!0
        }
      }
    }
    return!1
  };
  Util.hasTagAndClass = function(a, e, f) {
    if(a == null || e == null || f == null) {
      return!1
    }
    if(a.tagName === e) {
      if(a.className === f) {
        return!0
      }
      if(a.className && a.className.length >= f.length) {
        for(var a = a.classList ? a.classList : Util.split(a.className), e = 0, b = a.length;e < b;e++) {
          if(a[e] === f) {
            return!0
          }
        }
      }
    }
    return!1
  };
  Util.closest = function(a, e, f) {
    if(Util.hasClass(a, e)) {
      return a
    }
    for(a = a.parentNode;Util.isNotNull(a) && a !== f;a = a.parentNode) {
      if(Util.hasClass(a, e)) {
        return a
      }
    }
  };
  Util.closestWithTag = function(a, e, f, b) {
    if(Util.hasTagAndClass(a, e, f)) {
      return a
    }
    for(a = a.parentNode;Util.isNotNull(a) && a !== b;a = a.parentNode) {
      if(Util.hasTagAndClass(a, e, f)) {
        return a
      }
    }
  };
  Util.findFirstByClass = function(a, e) {
    if(a != null) {
      if(Util.hasClass(a, e)) {
        return a
      }
      for(var f = 0, b = a.childNodes, c = b.length, h;f < c;f++) {
        if(Util.isNotNull(b[f]) && (h = Util.findFirstByClass(b[f], e)) !== void 0) {
          return h
        }
      }
    }
  };
  Util.findFirstByTagAndClass = function(a, e, f) {
    if(a != null) {
      if(Util.hasTagAndClass(a, e, f)) {
        return a
      }
      for(var b = 0, a = a.childNodes, c = a.length, h;b < c;b++) {
        if(Util.isNotNull(a[b]) && (h = Util.findFirstByTagAndClass(a[b], e, f)) !== void 0) {
          return h
        }
      }
    }
  };
  Util.findByClass = function(a, e, f) {
    f === void 0 && (f = []);
    if(a == null) {
      return f
    }
    Util.hasClass(a, e) && f.push(a);
    for(var b = 0, a = a.childNodes, c = a.length;b < c;b++) {
      Util.isNotNull(a[b]) && Util.findByClass(a[b], e, f)
    }
    return f
  };
  Util.findByTagAndClass = function(a, e, f, b) {
    b === void 0 && (b = []);
    if(a == null) {
      return b
    }
    Util.hasTagAndClass(a, e, f) && b.push(a);
    for(var c = 0, a = a.childNodes, h = a.length;c < h;c++) {
      Util.isNotNull(a[c]) && Util.findByTagAndClass(a[c], e, f, b)
    }
    return b
  };
  Util.getHead = function() {
    return document.head ? document.head : document.getElementsByTagName("head")[0]
  };
  Util.appendTag = function(a, e) {
    return a.appendChild(document.createElement(e))
  };
  Util.appendHTML = function(a, e) {
    var f = document.createElement("div"), b, c = 0, h = [];
    f.innerHTML = e;
    for(b = f.childNodes.length;c < b;c++) {
      h.push(a.appendChild(f.firstChild))
    }
    return h
  };
  Util.createStyle = function(a) {
    a == null && (a = "");
    var e = document.createElement("style");
    e.type = "text/css";
    e.rel = "stylesheet";
    e.styleSheet ? e.styleSheet.cssText = a : e.appendChild(document.createTextNode(a));
    Util.getHead().appendChild(e);
    return e
  };
  Util.removeStyle = function(a) {
    a != null && a.parentNode != null && Util.getHead().removeChild(a)
  };
  Util.setStyle = function(a, e) {
    return a == null ? "" : a.styleSheet ? a.styleSheet.cssText = e : a.childNodes[0].nodeValue = e
  };
  Util.appendStyle = function(a, e) {
    return a == null ? "" : a.styleSheet ? a.styleSheet.cssText += e : a.childNodes[0].nodeValue += e
  };
  Util.getStyle = function(a) {
    return a == null ? "" : a.styleSheet ? a.styleSheet.cssText : a.childNodes[0].nodeValue
  };
  Util.appendScript = function(a) {
    var e = document.createElement("script");
    e.type = "text/javascript";
    e.text ? e.text = a : e.innerHTML = a;
    Util.getHead().appendChild(e);
    return e
  };
  Util.appendScriptFile = function(a) {
    document.write('<script type="text/javascript" src="' + a + '"><\/script>')
  };
  Util.outerHTML = function(a) {
    if(a.outerHTML === void 0) {
      var e = document.createElement("div");
      e.appendChild(a.cloneNode(!0));
      return e.innerHTML
    }
    return a.outerHTML
  };
  Util.index = function(a) {
    for(var e = 0;(a = a.previousSibling) != null;) {
      ++e
    }
    return e
  };
  Util.contains = function(a, e, f) {
    for(;e != null;) {
      if(e === a) {
        return!0
      }
      if(e === f) {
        break
      }
      e = e.parentNode
    }
    return!1
  };
  Util.areEqualArrays = function(a, e) {
    if(a == null || e == null) {
      return!1
    }
    if(a === e) {
      return!0
    }
    if(a.length !== e.length) {
      return!1
    }
    for(var f = 0, b = a.length;f < b;f++) {
      if(a.hasOwnProperty(f) && !e.hasOwnProperty(f) || e.hasOwnProperty(f) && !a.hasOwnProperty(f) || a[f] !== e[f]) {
        return!1
      }
    }
    return!0
  };
  Util.areEqualObjects = function(a, e) {
    if(a == null || e == null) {
      return!1
    }
    if(a === e) {
      return!0
    }
    if(typeof a !== "object" || typeof e !== "object") {
      return!1
    }
    for(var f in a) {
      if(a.hasOwnProperty(f) && (!e.hasOwnProperty(f) || a[f] !== e[f])) {
        return!1
      }
    }
    for(f in e) {
      if(e.hasOwnProperty(f) && (!a.hasOwnProperty(f) || a[f] !== e[f])) {
        return!1
      }
    }
    return!0
  };
  Util.areEqualComplex = function(a, e, f) {
    if(a == null || e == null) {
      return!1
    }
    if(a === e) {
      return!0
    }
    var b = f.length, c = f[0];
    if(b === 1) {
      return c === "array" ? Util.areEqualArrays(a, e) : Util.areEqualObjects(a, e)
    }
    if(b > 1) {
      f = f.slice(1);
      b = 0;
      if(c === "array") {
        if(a.length !== e.length) {
          return!1
        }
        for(c = a.length;b < c;b++) {
          if(!e.hasOwnProperty(b) || !Util.areEqualComplex(a[b], e[b], f)) {
            return!1
          }
        }
      }else {
        for(b in a) {
          if(a.hasOwnProperty(b) && (!e.hasOwnProperty(b) || !Util.areEqualComplex(a[b], e[b], f))) {
            return!1
          }
        }
        for(b in e) {
          if(e.hasOwnProperty(b) && (!a.hasOwnProperty(b) || !Util.areEqualComplex(a[b], e[b], f))) {
            return!1
          }
        }
      }
      return!0
    }
  };
  Util.typeCheck = function(a, e, b, c, g) {
    if(b && e === void 0 || c && e === null) {
      return!0
    }
    switch(typeof a) {
      case "string":
        if(typeof e === a) {
          return!0
        }
        break;
      case "function":
        if(e instanceof a) {
          return!0
        }
    }
    if(g) {
      return!1
    }
    throw new TypeError("object is not a " + a + ", but is a " + typeof e);
  };
  Util.sprint = function(a, e, b, c) {
    Util.typeCheck("string", a);
    Util.typeCheck("object", e);
    Util.typeCheck("string", b, !0);
    Util.typeCheck("string", c, !0);
    var g;
    b === void 0 && (b = "%");
    c === void 0 && (c = "%");
    for(g in e) {
      e.hasOwnProperty(g) && (a = a.replace(RegExp(b + g + c, "gm"), e[g]))
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
  Util.strReplace = function(a, e) {
    var b, c = [];
    for(b in e) {
      e.hasOwnProperty(b) && c.push(Util.escapeRegExp(b))
    }
    return a.replace(RegExp("(" + c.join("|") + ")", "gm"), function(a) {
      return e[a]
    })
  };
  Util.calCheckSize = function() {
    var a = {}, e = document.createElement("div");
    document.body.appendChild(e);
    e.innerHTML = "<input type='checkbox' style='margin:0;padding:0;overflow:hidden'/>";
    a.checkboxW = e.childNodes[0].offsetWidth;
    a.checkboxH = e.childNodes[0].offsetHeight;
    e.innerHTML = "<input type='radio' style='margin:0;padding:0;overflow:hidden'/>";
    a.radioW = e.childNodes[0].offsetWidth;
    a.radioH = e.childNodes[0].offsetHeight;
    document.body.removeChild(e);
    return a
  };
  Util.which = function(a) {
    for(var e = {}, b = 0, c;b < a.length;b++) {
      if(c = a[b].toLowerCase(), c === "number") {
        for(c = 48;c <= 57;c++) {
          e[c] = !0
        }
        for(c = 96;c <= 105;c++) {
          e[c] = !0
        }
      }else {
        if(c === "alphabet") {
          for(c = 65;c <= 90;c++) {
            e[c] = !0
          }
        }else {
          if(c === "arrow") {
            for(c = 37;c <= 40;c++) {
              e[c] = !0
            }
          }else {
            c.length > 1 && (c = c.replace(/\s/g, "")), c.length >= 3 && (c = c.replace(/numpad|num/g, "n").replace(/korean|kor/g, "kr")), e[Util.keyMapKeydown[c]] = !0
          }
        }
      }
    }
    return e
  };
  Util.keyMapKeydown = {backspace:8, tab:9, enter:13, shift:16, control:17, ctrl:17, alt:18, pause:19, "break":19, capslock:20, escape:27, esc:27, space:32, " ":32, pageup:33, pgup:33, pagedown:34, pgdown:34, pgdn:34, end:35, home:36, leftarrow:37, left:37, uparrow:38, up:38, rightarrow:39, right:39, downarrow:40, down:40, insert:45, ins:45, "delete":46, del:46, 0:48, ")":48, 1:49, "!":49, 2:50, "@":50, 3:51, "#":51, 4:52, $:52, 5:53, "%":53, 6:54, "^":54, 7:55, "&":55, 8:56, "*":56, 9:57, "(":57, 
  a:65, b:66, c:67, d:68, e:69, f:70, g:71, h:72, i:73, j:74, k:75, l:76, m:77, n:78, o:79, p:80, q:81, r:82, s:83, t:84, u:85, v:86, w:87, x:88, y:89, z:90, n0:96, n1:97, n2:98, n3:99, n4:100, n5:101, n6:102, n7:103, n8:104, n9:105, "n*":106, "n+":107, "n-":109, "n.":110, "n/":111, f1:112, f2:113, f3:114, f4:115, f5:116, f6:117, f7:118, f8:119, f9:120, f10:121, f11:122, f12:123, numlock:144, scrolllock:145, mute:173, volumedown:174, volumeup:175, ":":186, ";":186, "=":187, "+":187, ",":188, "<":188, 
  "-":189, _:189, ".":190, ">":190, "/":191, "?":191, "`":192, "~":192, "[":219, "{":219, "\\":220, "|":220, "]":221, "}":221, "'":222, '"':222, kr:229};
  Util.printEventPos = function(a) {
    Util.print("client: (" + a.clientX + ", " + a.clientY + "), layer: (" + a.layerX + ", " + a.layerY + "), offset: (" + a.offsetX + ", " + a.offsetY + "), page: (" + a.pageX + ", " + a.pageY + "), screen: (" + a.screenX + ", " + a.screenY + "), xy: (" + a.x + ", " + a.y + ")")
  };
  Util.print = function(d) {
    if(a) {
      if(arguments.length === 1) {
        a(arguments[0])
      }else {
        for(var e = 0, b = arguments.length;e < b;e++) {
          a(arguments[e])
        }
      }
    }
  };
  Util.open = function(a) {
    var e = {url:"about:blank", name:"_blank", channelmode:"no", directories:"yes", fullscreen:"no", height:void 0, left:void 0, location:"yes", menubar:"yes", resizable:"yes", scrollbars:"yes", status:"yes", titlebar:"yes", toolbar:"yes", top:void 0, width:void 0, replace:void 0}, b;
    if(Util.isNotNull(a)) {
      for(b in e) {
        e.hasOwnProperty(b) && (e[b] = a[b])
      }
    }
    a = Util.ifNull(e.height, "", "height=" + e.height + ", ") + Util.ifNull(e.left, "", "left=" + e.left + ", ") + Util.ifNull(e.top, "", "top=" + e.top + ", ") + Util.ifNull(e.width, "", "width=" + e.width + ", ") + "channelmode=" + e.channelmode + ", directories=" + e.directories + ", fullscreen=" + e.fullscreen + ", location=" + e.location + ", menubar=" + e.menubar + ", resizable=" + e.resizable + ", scrollbars=" + e.scrollbars + ", status=" + e.status + ", titlebar=" + e.titlebar + ", toolbar=" + 
    e.toolbar;
    return Util.isNull(e.replace) ? window.open(e.url, e.name, a) : window.open(e.url, e.name, a, e.replace)
  }
})();
jx.util$ = {};
var Util$ = {};
(function() {
  goog.exportSymbol("jx.util$", Util$);
  Util$.is$ = function(b) {
    return b instanceof jQuery ? !0 : !1
  };
  Util$.safe$ = function(b) {
    return b instanceof jQuery ? b : $(b)
  };
  Util$.unbindRemove = function(b) {
    b.unbind().remove()
  };
  jQuery.fn.getBoundingRect = function() {
    var b = this.offset();
    return{left:b.left, top:b.top, width:this.outerWidth(), height:this.outerHeight()}
  };
  jQuery.fn.containsEvent = function(b) {
    if(this.length === 0) {
      return!1
    }
    var c, a, d, e;
    if(this.length <= 1) {
      return c = this.getBoundingRect(), d = b.pageX, e = b.pageY, d >= c.left && d <= c.left + c.width && e >= c.top && e <= c.top + c.height
    }
    a = !1;
    this.each(function() {
      c = $(this).getBoundingRect();
      d = b.pageX;
      e = b.pageY;
      if(d >= c.left && d <= c.left + c.width && e >= c.top && e <= c.top + c.height) {
        return a = !0, !1
      }
    });
    return a
  };
  Util$.baseurlOfHeadScript = function(b) {
    var c = $(document.getElementsByTagName("head")[0]).find("script[src$='" + b + "']").attr("src");
    return c.substring(0, c.indexOf(b))
  };
  Util$.calScrollbarDims = function(b) {
    if(Util.isNotNull(window.__SCROLLBAR_DIM__)) {
      return window.__SCROLLBAR_DIM__
    }
    if(Util.isNotNull(window.opener) && Util.isNotNull(window.opener.__SCROLLBAR_DIM__)) {
      return window.opener.__SCROLLBAR_DIM__
    }
    var b = Util$.safe$(b), c;
    b[0].innerHTML = "<div id='scrollbardim' style='position:absolute;top:-10000px;left:-10000px;width:100px;height:100px;overflow:scroll;'></div>";
    c = $(document.getElementById("scrollbardim"));
    c = {w:c.width() - c[0].clientWidth, h:c.height() - c[0].clientHeight};
    b[0].innerHTML = "";
    return window.__SCROLLBAR_DIM__ = c
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
  JGM.create = function(b, c) {
    Util.isNull(c) && (c = {});
    if(this.__map_a__[b].cacheModule) {
      c.mid = "JGM" + this.m.length++;
      var a = this[b].getInstance(c);
      this.m.hasOwnProperty(b) || (this.m[b] = {});
      this.m[b][a.mid] = a;
      b === "Grid" && Util.isNotNull(a.name) && (this.gridMap[a.name] = a);
      return a
    }else {
      return this[b].getInstance(c)
    }
  };
  JGM._destroy = function(b, c) {
    var a, d, e, f;
    for(d in c) {
      if(c.hasOwnProperty(d)) {
        switch(d) {
          case "map":
            a = c[d];
            if(Util.isString(a)) {
              a = Util.split(a);
              f = a.length;
              for(e = 0;e < f;e++) {
                JGM.__deleteMap_l__(b, a[e])
              }
            }else {
              if(a instanceof Array) {
                f = a.length;
                for(e = 0;e < f;e++) {
                  Util.emptyObject(a[e])
                }
              }else {
                Util.emptyObject(a)
              }
            }
            break;
          case "array":
            a = c[d];
            if(Util.isString(a)) {
              a = Util.split(a);
              f = a.length;
              for(e = 0;e < f;e++) {
                JGM.__deleteArray_r__(b, a[e])
              }
            }else {
              a.length = 0
            }
            break;
          case "$":
            a = c[d];
            if(Util.isString(a)) {
              a = Util.split(a);
              f = a.length;
              for(e = 0;e < f;e++) {
                JGM.__delete$_n__(b, a[e])
              }
            }else {
              if(a instanceof Array) {
                f = a.length;
                for(e = 0;e < f;e++) {
                  Util$.unbindRemove(a[e])
                }
              }else {
                Util$.unbindRemove(a)
              }
            }
            break;
          case "style":
            a = c[d];
            if(Util.isString(a)) {
              a = Util.split(a);
              f = a.length;
              for(e = 0;e < f;e++) {
                JGM.__deleteStyle_o__(b, a[e])
              }
            }else {
              if(a instanceof Array) {
                f = a.length;
                for(e = 0;e < f;e++) {
                  Util.removeStyle(a[e])
                }
              }else {
                Util.removeStyle(a)
              }
            }
            break;
          case "property":
            a = c[d];
            if(Util.isString(a)) {
              a = Util.split(a);
              f = a.length;
              for(e = 0;e < f;e++) {
                delete b[a[e]]
              }
            }else {
              if(a instanceof Array) {
                f = a.length;
                for(e = 0;e < f;e++) {
                  delete b[a[e]]
                }
              }
            }
            break;
          case "module":
            a = c[d];
            if(Util.isString(a)) {
              a = Util.split(a);
              f = a.length;
              for(e = 0;e < f;e++) {
                JGM.__deleteModule_p__(b, a[e])
              }
            }else {
              if(a instanceof Array) {
                f = a.length;
                for(e = 0;e < f;e++) {
                  a[e].destroy()
                }
              }else {
                a.destroy()
              }
            }
            break;
          case "name":
            b.hasOwnProperty("mid") && (JGM.__remove_f__(c[d], b.mid), delete b.mid);
            break;
          case "path":
            b.hasOwnProperty("grid") && b.grid.hasOwnProperty(c[d]) && (delete b.grid[c[d]], delete b.grid)
        }
      }
    }
    Util.emptyObject(b)
  };
  JGM.__deleteMap_l__ = function(b, c) {
    b.hasOwnProperty(c) && (Util.emptyObject(b[c]), delete b[c])
  };
  JGM.__deleteArray_r__ = function(b, c) {
    if(b.hasOwnProperty(c)) {
      b[c].length = 0, delete b[c]
    }
  };
  JGM.__delete$_n__ = function(b, c) {
    b.hasOwnProperty(c) && (Util$.unbindRemove(b[c]), delete b[c])
  };
  JGM.__deleteStyle_o__ = function(b, c) {
    b.hasOwnProperty(c) && (Util.removeStyle(b[c]), delete b[c])
  };
  JGM.__deleteModule_p__ = function(b, c) {
    b.hasOwnProperty(c) && (b[c].destroy(), delete b[c])
  };
  JGM.__remove_f__ = function(b, c) {
    delete this.m[b][c]
  };
  JGM.grid = function(b) {
    return this.create("Grid", b)
  };
  JGM.gridMap = {};
  JGM.getGrid = function(b) {
    if(Util.isNotNull(b) && this.gridMap.hasOwnProperty(b)) {
      return this.gridMap[b]
    }
  };
  JGM._add = function(b, c) {
    Util.isNotNull(c) && (this[b] = c);
    this.__map_a__[b].readyState = "loaded";
    $("body").trigger({type:"moduleload.Grid", modulename:b, readyState:"loaded"})
  };
  JGM.__has_c__ = function(b) {
    return this.__map_a__[b].readyState === "loaded"
  };
  JGM.__load_d__ = function(b, c) {
    var a, d = Util$.baseurlOfHeadScript(this.GridManager.filename), e, f, i, g, h, k;
    if(b instanceof Array) {
      a = [];
      f = b.length;
      for(e = 0;e < f;e++) {
        i = d + this[b[e]].filename;
        g = !1;
        for(h = 0;h < a.length;h++) {
          if(a[h] === i) {
            g = !0;
            break
          }
        }
        !g && !this.__has_c__(b[e]) && a.push(i)
      }
      Util.isFunction(c) && (k = function() {
        for(var a = 0;a < b.length;a++) {
          if(!JGM.__has_c__(b[a])) {
            return!1
          }
        }
        return!0
      }, $("body").bind("moduleload.Grid", function() {
        k() && ($("body").unbind("moduleload.Grid"), c())
      }));
      a.length === 0 && c();
      for(e = 0;e < a.length;e++) {
        Util.appendScriptFile(a[e])
      }
    }else {
      this.__has_c__(b) && Util.isFunction(c) && c(), a = d + this.__map_a__[b].filename, Util.isFunction(c) && $("body").bind("moduleload.Grid", function(a) {
        a.modulename === b && a.readyState === "loaded" && ($("body").unbind("moduleload.Grid"), c())
      }), Util.appendScriptFile(a)
    }
  };
  JGM.start = function(b, c, a) {
    for(var d = [], e = 3, f = arguments.length, i = JGM.__map_a__;e < f;e++) {
      d.push(arguments[e])
    }
    /MSIE (\d+\.\d+);/.test(navigator.userAgent) && d.push("ArrayExtIE");
    Util.isNotNull(b.CheckManager) && d.push("CheckManager");
    Util.isNotNull(b.Collapser) && d.push("Collapser");
    Util.isNotNull(b.EditManager) && d.push("EditManager");
    f = d.length;
    for(e = 0;e < f;e++) {
      i[d[e]].required = !0
    }
    d = [];
    for(e in i) {
      i.hasOwnProperty(e) && (f = i[e], !Util.isFunction(f) && f.readyState === "notloaded" && f.required === !0 && d.push(e))
    }
    this.__load_d__(d, a)
  };
  JGM.__extend_e__ = function(b, c, a) {
    var c = Util.ifNull(c, {}), d;
    if(Util.isNotNull(a)) {
      for(d in a) {
        a.hasOwnProperty(d) && c.hasOwnProperty(d) && (c[a[d]] = c[d], delete c[d])
      }
    }
    $.extend(!0, b, c);
    $.extend(!0, c, b);
    return c
  };
  JGM.m = {length:0};
  JGM.__CONST_g__ = {__cssUnselectable_a__:"-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none;", __cssUnselectable_b__:"-webkit-user-drag:none;-moz-user-drag:none;user-drag:none;", __checkboxWidth_c__:void 0, __checkboxHeight_d__:void 0, __radioWidth_e__:void 0, __radioHeight_f__:void 0};
  JGM.__globalEventsBound_h__ = !1;
  JGM.__globalEvents_i__ = {__mousemove_a__:function(b) {
    var c, a = JGM.m.Grid;
    for(c in a) {
      a.hasOwnProperty(c) && a[c]._mousemove(b)
    }
  }, __mouseup_b__:function(b) {
    var c, a = JGM.m.Grid;
    for(c in a) {
      a.hasOwnProperty(c) && a[c]._mouseup(b)
    }
  }, __resize_c__:function(b) {
    var c, a = JGM.m.Grid;
    for(c in a) {
      a.hasOwnProperty(c) && a[c]._resize(b)
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
jx.lang = {};
jx.lang.Disposable = {};
(function() {
  function b() {
  }
  function c(d, e) {
    var d = d || 0, b, i;
    if(d !== 0) {
      for(b in this) {
        if(this.hasOwnProperty(b)) {
          if(i = this[b]) {
            if(i.dispose) {
              i.dispose(d - 1, e)
            }else {
              if(e && typeof i == "object") {
                a(i) ? i.length = 0 : c.call(i, d - 1, e)
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
  goog.exportSymbol("jx.lang.Disposable", b);
  goog.exportProperty(b.prototype, "dispose", c);
  var a = Util.isArray
})();
jx.events = {};
jx.events.EventDispatcher = {};
(function() {
  function b() {
  }
  goog.exportSymbol("jx.events.EventDispatcher", b);
  goog.inherits(b, JGM.lang.Disposable);
  var c = b.prototype, a = c.dispose;
  c.dispose = function() {
    a.call(this, -1, !0)
  };
  c.addEventListener = function(a, e) {
    if(!a) {
      throw Error("Invalid event type: " + a);
    }
    if(typeof e != "function") {
      throw Error("Event listener must be a function");
    }
    if(!this._handlers) {
      this._handlers = {}
    }
    var b = this._handlers, a = (a + "").toLowerCase();
    b.hasOwnProperty(a) || (b[a] = []);
    b = b[a];
    b.indexOf(e) === -1 && b.push(e)
  };
  c.removeEventListener = function(a, e) {
    if(this._handlers) {
      var a = (a + "").toLowerCase(), b = this._handlers;
      if(b.hasOwnProperty(a)) {
        for(var c = b[a], g = -1;(g = c.indexOf(e, g + 1)) !== -1;) {
          c.splice(g, 1)
        }
        c.length === 0 && delete b[a]
      }
    }
  };
  c.dispatchEvent = function(a) {
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
    var e = this._handlers, b = (a.type + "").toLowerCase();
    a.target = this;
    if(e.hasOwnProperty(b)) {
      for(var e = e[b], b = 0, c = e.length, g;b < c && !a.stopPropagation;b++) {
        g = e[b], g.handleEvent ? g.handleEvent(a) : g.call(this, a)
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
  function b(a) {
    if(!(a.manager && typeof a.manager == "object")) {
      throw Error("Column needs a valid manager!");
    }
    this.manager = a.manager;
    this.key = a.key + "";
    if(!this.key) {
      throw Error("Column needs a non-empty key!");
    }
    var d = "column key=" + this.key;
    if(this.manager.hasKey(this.key)) {
      throw Error("Duplicate column key!" + d);
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
      throw Error("Invalid parser!" + d);
    }
    this.parser = a.parser || null;
    if(a.validator && typeof a.validator != "function") {
      throw Error("Invalid validator!" + d);
    }
    this.validator = a.validator || null;
    if(a.renderer && typeof a.renderer != "function") {
      throw Error("Invalid renderer!" + d);
    }
    this.renderer = a.renderer || null;
    if(a.sumRenderer && typeof a.sumRenderer != "function") {
      throw Error("Invalid sum renderer!" + d);
    }
    this.sumRenderer = a.sumRenderer || null;
    if(a.editor && typeof a.editor != "object") {
      throw Error("Invalid editor!" + d);
    }
    this.editor = a.editor || null;
    this.sorter = a.sorter || null;
    this.filter = a.filter || null
  }
  goog.exportSymbol("jx.grid.Column", b);
  goog.inherits(b, jx.events.EventDispatcher);
  var c = b.prototype;
  c.show = function() {
    return this.hidden ? (this.hidden = !1, this.dispatchEvent({type:"hidden", value:!1}), !0) : !1
  };
  c.hide = function() {
    return!this.hidden ? (this.hidden = !0, this.dispatchEvent({type:"hidden", value:!0}), !0) : !1
  };
  c.setHidden = function(a) {
    return a ? this.hide() : this.show()
  };
  c.setWidth = function(a) {
    return(a = Number(a)) && this.width !== a ? (this.width = a, this.dispatchEvent({type:"width", value:a}), a) : !1
  };
  c.setRenderer = function(a) {
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
  function b(a) {
    if(a) {
      if(a.mid != null) {
        this.mid = a.mid
      }
      if(a.grid) {
        this.grid = a.grid
      }
    }
    var e = this._defaultOptions && this._defaultOptions(), b = a && a.options;
    if(b || e) {
      e || (e = {}), b && $.extend(!0, e, b), this._options = e
    }
    this._init && (this.dispatchEvent({type:"beforeinit"}), this._init(a), this.dispatchEvent({type:"afterinit"}));
    var c = this, g = this.grid;
    g && ["dispose", "createcss", "createdynamiccss", "render", "keydown", "keyup", "keypress", "mousein", "mouseout", "mouseenter", "mouseleave", "mousemove", "mouseover", "mousedown", "mouseup", "click", "dblclick", "resize", "resizewidth", "resizeheight", "scroll", "scrollh", "scrollv"].forEach(function(a) {
      var d = "_before" + a, e = "_after" + a;
      c[d] && g.addEventListener(d, function(a) {
        return c[d](a)
      });
      c[e] && g.addEventListener(e, function(a) {
        return c[e](a)
      })
    });
    this._bindEvents && (this.dispatchEvent({type:"beforebindevents"}), this._bindEvents(a), this.dispatchEvent({type:"afterbindevents"}));
    this.dispatchEvent({type:"complete"})
  }
  goog.exportSymbol("jx.grid.BaseModule", b);
  goog.inherits(b, EventDispatcher);
  var c = b.prototype, a = c.dispose;
  c._beforedispose = function() {
    this.dispose()
  };
  c.dispose = function() {
    delete this.grid;
    this.dispatchEvent({type:"beforedispose"});
    a.call(this);
    this.dispatchEvent({type:"afterdispose"})
  }
})();
jx.data = {};
jx.data.DataManager = {};
(function() {
  function b(a) {
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
  goog.exportSymbol("jx.data.DataManager", b);
  JGM._add("DataManager", b);
  b.getInstance = function(a) {
    return new b(a)
  };
  var c = b.prototype;
  c.__init = function(a) {
    for(var d = 0, e = this._options.uniqueKeys, b, c = this.uniqueMap, g = e.length, h = this.keyToType, k = this.grid.colDefMgr.getAll();d < g;d++) {
      b = e[d], typeof b === "string" && (c[b] = {})
    }
    g = k.length;
    for(d = 0;d < g;d++) {
      e = k[d], b = e.key, e.hasOwnProperty("unique") && e.unique === !0 && !c.hasOwnProperty(b) && (c[b] = {}), h[b] = this.mapDatatype(e.type)
    }
    Util.ifNull(a.datalist, []);
    this.bindEvents();
    this.set(a.datalist)
  };
  c.mapDatatype = function(a) {
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
  c.bindEvents = function() {
    this.grid.event.bind({onDestroy:this.__destroy_aA__, keydownCanvas:this.__keydownCanvas_ba__}, this)
  };
  c.__destroy_aA__ = function() {
    this.cleanList(this.all);
    JGM._destroy(this, {name:"DataManager", path:"dataMgr", property:"all __idMode_m__ __increment_l__ idKey __sorter_h__", map:"__consts_n__ __idToIdx_b__ __idToData_a__ _options", array:"datalist failed __history_e__ __redoHistory_q__ __filters_r__"})
  };
  c.addUniqueIndex = function(a, d, e, b) {
    if(b !== !0 && (Util.isNull(a) || Util.isEmptyString(d) || Util.isNull(e))) {
      return!1
    }
    if(e.hasOwnProperty(d) === !1) {
      return this.grid.error("KEY_UNDEFINED", d)
    }
    if(Util.isEmptyString(b = e[d])) {
      return this.grid.error("BAD_NULL", d)
    }
    if(a.hasOwnProperty(b)) {
      return a[b] === e ? !1 : this.grid.error("DUP_ENTRY", b, d)
    }
    a[b] = e;
    return!0
  };
  c.addUniqueIndices = function(a, d, e, b) {
    if(b !== !0 && (Util.isNull(a) || Util.isEmptyString(d) || Util.isEmptyArray(e))) {
      return!1
    }
    for(var c = e.length, g = [], h, k, b = 0;b < c;b++) {
      if(!Util.isNull(k = e[b])) {
        if(k.hasOwnProperty(d) === !1) {
          return this.removeUniqueIndices(a, d, g), this.grid.error("KEY_UNDEFINED", d)
        }
        if(Util.isEmptyString(h = k[d])) {
          return this.removeUniqueIndices(a, d, g), this.grid.error("BAD_NULL", d)
        }
        if(a.hasOwnProperty(h)) {
          if(a[h] === k) {
            continue
          }
          this.removeUniqueIndices(a, d, g);
          return this.grid.error("DUP_ENTRY", h, d)
        }
        g.push(a[h] = k)
      }
    }
    return g.length > 0
  };
  c.updateUniqueIndex = function(a, d, e, b, c, g) {
    if(g !== !0 && (Util.isEmptyObj(a) || Util.isEmptyString(d) || Util.isNullOr(e, c) || Util.isEmptyObj(b))) {
      return!1
    }
    if(b.hasOwnProperty(d) === !1) {
      return!1
    }
    if(c.hasOwnProperty(d) === !1 || e.hasOwnProperty(d) === !1) {
      return this.grid.error("KEY_UNDEFINED", d)
    }
    if(a.hasOwnProperty(c = c[d]) === !1) {
      return this.grid.error("KEY_NOT_FOUND", c, d)
    }
    if(Util.isEmptyString(b = b[d])) {
      return this.grid.error("BAD_NULL", d)
    }
    if(a.hasOwnProperty(b)) {
      return a[b] === e ? !1 : this.grid.error("DUP_ENTRY", b, d)
    }
    a[b] = e;
    delete a[c];
    return c
  };
  c.updateUniqueIndices = function(a, d, e, b, c, g) {
    if(g !== !0) {
      if(Util.isEmptyObj(a) || Util.isEmptyString(d) || Util.isEmptyArray(e) || Util.isEmptyArray(b) || Util.isEmptyArray(c)) {
        return!1
      }
      if(e.length !== b.length || e.length !== c.length) {
        return this.grid.error("LENGTH_NOT_EQUAL")
      }
    }
    for(var g = 0, h = e.length, k, j, m, l = [], p = [], n = [], r, q;g < h;g++) {
      if(!Util.isNull(k = e[g])) {
        if((m = b[g]).hasOwnProperty(d) !== !1) {
          j = c[g];
          if(j.hasOwnProperty(d) === !1 || k.hasOwnProperty(d) === !1) {
            return this.updateUniqueIndices(a, d, l, n, p), this.grid.error("KEY_UNDEFINED", d)
          }
          if(a.hasOwnProperty(q = j[d]) === !1) {
            return this.updateUniqueIndices(a, d, l, n, p), this.grid.error("KEY_NOT_FOUND", q, d)
          }
          if(Util.isEmptyString(r = m[d])) {
            return this.updateUniqueIndices(a, d, l, n, p), this.grid.error("BAD_NULL", d)
          }
          if(a.hasOwnProperty(r)) {
            if(a[r] === k) {
              continue
            }
            this.updateUniqueIndices(a, d, l, n, p);
            return this.grid.error("DUP_ENTRY", r, d)
          }
          a[r] = k;
          delete a[q];
          l.push(k);
          p.push(m);
          n.push(j)
        }
      }
    }
    return l.length === 0 ? !1 : {datalist:l, changes:p, befores:n}
  };
  c.removeUniqueIndex = function(a, d, e, b) {
    if(!(b !== !0 && (Util.isEmptyObj(a) || Util.isEmptyString(d) || Util.isEmptyObj(e)))) {
      var c;
      e.hasOwnProperty(d) && a.hasOwnProperty(c = e[d]) && delete a[c]
    }
  };
  c.removeUniqueIndices = function(a, d, e, b) {
    if(!(b !== !0 && (Util.isEmptyObj(a) || Util.isEmptyString(d) || Util.isEmptyArray(e)))) {
      for(var c = e.length, g, h, b = 0;b < c;b++) {
        h = e[b], h.hasOwnProperty(d) && a.hasOwnProperty(g = h[d]) && delete a[g]
      }
    }
  };
  c.addToUniqueMap = function(a) {
    if(Util.isEmptyObj(a) || Util.isEmptyObj(this.uniqueMap)) {
      return!1
    }
    var d = [], e, b = this.uniqueMap, c;
    for(e in b) {
      if(b.hasOwnProperty(e)) {
        if(c = this.addUniqueIndex(b[e], e, a), c === !0) {
          d.push(e)
        }else {
          if(c instanceof Error) {
            e = 0;
            for(var g = d.length;e < g;e++) {
              this.removeUniqueIndex(b[d[e]], d[e], a)
            }
            return c
          }
        }
      }
    }
    return d.length > 0
  };
  c.addListToUniqueMap = function(a) {
    if(Util.isEmptyArray(a) || Util.isEmptyObj(this.uniqueMap)) {
      return!1
    }
    var d = this.uniqueMap, e = [], b, c;
    for(b in d) {
      if(d.hasOwnProperty(b)) {
        if(c = this.addUniqueIndices(d[b], b, a), c === !0) {
          e.push(b)
        }else {
          if(c instanceof Error) {
            b = 0;
            for(var g = e.length;b < g;b++) {
              this.removeUniqueIndices(d[e[b]], e[b], a)
            }
            return c
          }
        }
      }
    }
    return e.length > 0
  };
  c.updateUniqueMap = function(a, d, e) {
    if(Util.isNullOr(a, d, e) || Util.isEmptyObj(this.uniqueMap)) {
      return!1
    }
    var b, c = this.uniqueMap, g = [], h;
    for(b in c) {
      if(c.hasOwnProperty(b)) {
        h = this.updateUniqueIndex(c[b], b, a, d, e);
        if(h instanceof Error) {
          b = 0;
          for(var k = g.length;b < k;b++) {
            this.updateUniqueIndex(c[g[b]], g[b], a, e, d)
          }
          return h
        }
        h !== !1 && g.push(b)
      }
    }
    return g.length > 0
  };
  c.updateListUniqueMap = function(a, d, e) {
    if(Util.isEmptyArray(a) || Util.isEmptyArray(d) || Util.isEmptyArray(e) || Util.isEmptyObj(this.uniqueMap)) {
      return!1
    }
    if(a.length !== d.length || a.length !== e.length) {
      return this.grid.error("LENGTH_NOT_EQUAL")
    }
    var b, c = this.uniqueMap, g = [], h;
    for(b in c) {
      if(c.hasOwnProperty(b)) {
        h = this.updateUniqueIndices(c[b], b, a, d, e);
        if(h instanceof Error) {
          b = 0;
          for(var k = g.length;b < k;b++) {
            this.updateUniqueIndices(c[g[b]], g[b], a, e, d)
          }
          return h
        }
        h !== !1 && g.push(b)
      }
    }
    return g.length > 0
  };
  c.removeFromUniqueMap = function(a) {
    if(!Util.isEmptyObj(a) && !Util.isEmptyObj(this.uniqueMap)) {
      var d, e = this.uniqueMap;
      for(d in e) {
        e.hasOwnProperty(d) && this.removeUniqueIndex(e[d], d, a)
      }
    }
  };
  c.removeListFromUniqueMap = function(a) {
    if(!Util.isEmptyArray(a) && !Util.isEmptyObj(this.uniqueMap)) {
      var d, e = this.uniqueMap;
      for(d in e) {
        e.hasOwnProperty(d) && this.removeUniqueIndices(e[d], d, a)
      }
    }
  };
  c.addToIdMap = function(a) {
    if(Util.isNull(a)) {
      return!1
    }
    var d = this.idKey;
    switch(this.__idMode_m__) {
      case this.__consts_n__.__auto_a__:
        a.hasOwnProperty(d) === !1 && (a[d] = this.__increment_l__++);
      case this.__consts_n__.__given_b__:
      ;
      case this.__consts_n__.__composite_c__:
        return this.addUniqueIndex(this.__idToData_a__, d, a)
    }
    return!1
  };
  c.addListToIdMap = function(a) {
    if(Util.isEmptyArray(a)) {
      return!1
    }
    var d = this.idKey;
    switch(this.__idMode_m__) {
      case this.__consts_n__.__auto_a__:
        for(var e = 0, b, c = a.length;e < c;e++) {
          if((b = a[e]).hasOwnProperty(d) === !1) {
            b[d] = this.__increment_l__++
          }
        }
      ;
      case this.__consts_n__.__given_b__:
      ;
      case this.__consts_n__.__composite_c__:
        return this.addUniqueIndices(this.__idToData_a__, d, a)
    }
    return!1
  };
  c.updateIdMap = function(a, d, e) {
    if(Util.isNullOr(a, e) || Util.isEmptyObj(d)) {
      return!1
    }
    var b = this.idKey;
    switch(this.__idMode_m__) {
      case this.__consts_n__.__auto_a__:
        if(d.hasOwnProperty(b)) {
          return this.grid.error("NOT_MODIFIABLE", b)
        }
      ;
      case this.__consts_n__.__given_b__:
        return this.updateUniqueIndex(this.__idToData_a__, b, a, d, e);
      case this.__consts_n__.__composite_c__:
        if(d.hasOwnProperty(b)) {
          return this.grid.error("NOT_MODIFIABLE", b)
        }
        for(var e = this._options.__idColKeys_c__, c = e.length, g = 0;g < c;g++) {
          if(d.hasOwnProperty(e[g])) {
            for(var h = "", k = 0, j, m, l = {}, p = {}, g = p[b] = a[b];k < c;k++) {
              if(j = e[k], d.hasOwnProperty(j)) {
                if(Util.isEmptyString(m = d[j])) {
                  return this.grid.error("BAD_NULL", j)
                }
                h += "&" + m
              }else {
                h += "&" + a[j]
              }
            }
            a[b] = l[b] = h;
            if(g === h) {
              break
            }
            d = this.updateUniqueIndex(this.__idToData_a__, b, a, l, p);
            d instanceof Error && (a[b] = g);
            return d
          }
        }
    }
    return!1
  };
  c.updateListIdMap = function(a, d, e) {
    if(Util.isEmptyArray(a) || Util.isEmptyArray(d) || Util.isEmptyArray(e)) {
      return!1
    }
    var b = this.idKey, c = a.length, g = 0;
    switch(this.__idMode_m__) {
      case this.__consts_n__.__auto_a__:
        for(;g < c;g++) {
          if(d[g].hasOwnProperty(b)) {
            return this.grid.error("NOT_MODIFIABLE", b)
          }
        }
      ;
      case this.__consts_n__.__given_b__:
        return this.updateUniqueIndices(this.__idToData_a__, b, a, d, e);
      case this.__consts_n__.__composite_c__:
        for(var h = this.__idToData_a__, k, j, m = this._options.__idColKeys_c__, l = m.length, p, e = [], n = [], r = [], q = [], o, s, t, u;g < c;g++) {
          k = a[g];
          j = d[g];
          if(j.hasOwnProperty(b)) {
            o = 0;
            for(c = e.length;o < c;o++) {
              n[o][b] = e[o]
            }
            return this.grid.error("NOT_MODIFIABLE", b)
          }
          for(o = 0;o < l;o++) {
            if(j.hasOwnProperty(m[o])) {
              p = "";
              for(s = 0;s < l;s++) {
                if(t = m[s], j.hasOwnProperty(t)) {
                  if(Util.isEmptyString(u = j[t])) {
                    o = 0;
                    for(c = e.length;o < c;o++) {
                      n[o][b] = e[o]
                    }
                    return this.grid.error("BAD_NULL", t)
                  }
                  p += "&" + u
                }else {
                  p += "&" + k[t]
                }
              }
              k[b] !== p && (n.push(k), r.push({}), q.push({}), e.push(k[b]), k[b] = p)
            }
          }
        }
        if(n.length === 0) {
          break
        }
        a = this.updateUniqueIndices(h, b, n, r, q);
        if(a instanceof Error) {
          o = 0;
          for(c = e.length;o < c;o++) {
            n[o][b] = e[o]
          }
        }
        return a
    }
    return!1
  };
  c.removeFromIdMap = function(a) {
    var d = this.idKey, e = this.__idToData_a__, b;
    Util.isNotNull(a) && a.hasOwnProperty(d) && e.hasOwnProperty(b = a[d]) && delete e[b]
  };
  c.removeListFromIdMap = function(a) {
    if(!Util.isEmptyArray(a)) {
      for(var d = this.idKey, e = a.length, b = this.__idToData_a__, c, g, h = 0;h < e;h++) {
        g = a[h], g.hasOwnProperty(d) && b.hasOwnProperty(c = g[d]) && delete b[c]
      }
    }
  };
  c.fillTemp = function(a, d) {
    if(!Util.isNull(a)) {
      var e = this.grid.colDefMgr.getAll(), b = e.length, c, g, h = 0;
      if(d !== void 0 && d.isNew) {
        for(;h < b;h++) {
          g = e[h], c = g.key, g.nullOnCreate && Util.isNull(a[c]) && (a[c] = "J@H" + this.__increment_l__++)
        }
      }
    }
  };
  c.fillTempList = function(a, d) {
    if(!Util.isEmptyArray(a)) {
      var e = this.grid.colDefMgr.getAll(), b = e.length, c = a.length, g, h, k = 0;
      if(d !== void 0 && d.isNew) {
        for(;k < b;k++) {
          if(h = e[k], g = h.key, h.nullOnCreate) {
            for(h = 0;c;h++) {
              a[h][g] = "J@H" + this.__increment_l__++
            }
          }
        }
      }
    }
  };
  c.query = function(a) {
    if(typeof a === "string" && (a = $.trim(a), a.length !== 0)) {
      var d, e, b, c, g;
      d = a.toLowerCase();
      e = a.indexOf(" ");
      if(e !== -1 && (b = d.substring(0, e), d = d.indexOf(" where "), c = d > -1, e = $.trim(c ? a.substring(e + 1, d) : a.substring(e + 1)), e.length !== 0)) {
        switch(c && (g = $.trim(a.substring(d + 7))), b) {
          case "select":
            return this.executeSelect(e, g);
          case "insert":
            return this.executeInsert(e, g);
          case "update":
            return this.executeUpdate(e, g);
          case "delete":
            return this.executeDelete(e, g)
        }
      }
    }
  };
  c.parseWhere = function(a) {
    typeof a === "string" && $.trim(a)
  };
  c.executeSelect = function(a) {
    var a = Util.split(a, /[\s,]+/), d = a.length, e = 0, b = {}, c = this.all, g = [];
    if(d === 0) {
      return g
    }
    for(;e < d;e++) {
      if(a[e] === "*") {
        break
      }
      b[a[e]] = !0
    }
    e = 0;
    for(d = c.length;e < d;e++) {
      g.push(Util.clone(c[e], b))
    }
    return g
  };
  c.parse = function(a, d) {
    if(Util.isNull(a)) {
      return!1
    }
    for(var e = this.grid.colDefMgr.getAll(), b = e.length, c, g, h = d !== void 0 && d.isNew, k = 0;k < b;k++) {
      if(g = e[k], !h || !g.nullOnCreate) {
        if(Util.isFunction(c = g.parser)) {
          if(g = g.key, a.hasOwnProperty(g)) {
            try {
              a[g] = c(a[g], a)
            }catch(j) {
              return Util.isNull(a) ? this.grid.error("PARSE_ERROR", a, g) : this.grid.error("PARSE_ERROR", a[g], g)
            }
          }
        }
      }
    }
    return!0
  };
  c.parseList = function(a, d) {
    if(Util.isNull(a)) {
      return!1
    }
    if(a.length === 0) {
      return!0
    }
    for(var e = this.grid.colDefMgr.getAll(), b = e.length, c = a.length, g, h, k = 0, j, m = d !== void 0 && d.isNew, l;k < b;k++) {
      if(h = e[k], !m || !h.nullOnCreate) {
        if(Util.isFunction(g = h.parser)) {
          h = h.key;
          try {
            for(j = 0;j < c;j++) {
              l = a[j], l.hasOwnProperty(h) && (l[h] = g(l[h], l))
            }
          }catch(p) {
            return Util.isNull(l) ? this.grid.error("PARSE_ERROR", l, h) : this.grid.error("PARSE_ERROR", l[h], h)
          }
        }
      }
    }
    return!0
  };
  c.validate = function(a, d) {
    if(Util.isNull(a)) {
      return!1
    }
    for(var e = this.grid.colDefMgr.getAll(), b = e.length, c, g, h, k, j, m, l, p = d !== void 0 && d.isNew, n = 0;n < b;n++) {
      if(c = e[n], g = c.key, j = void 0, k = h = !1, !p || !c.nullOnCreate) {
        if(c.notNull === !0) {
          if(a.hasOwnProperty(g) === !1 || Util.isEmptyString(j = a[g])) {
            return this.grid.error("BAD_NULL", g)
          }
          m = j.toString()
        }else {
          a.hasOwnProperty(g) === !1 || Util.isNull(j = a[g]) ? k = h = !0 : j === "" && (k = !0), m = h === !1 ? j.toString() : ""
        }
        if(h === !1) {
          if(Util.isNotNull(l = c.max) && k === !1 && j > l) {
            return this.grid.error("BIGGER_THAN", j, g, l)
          }
          if(Util.isNotNull(l = c.min) && k === !1 && j < l) {
            return this.grid.error("SMALLER_THAN", j, g, l)
          }
          if(Util.isNotNull(l = c.length)) {
            if(k === !0 || m.length !== l) {
              return this.grid.error("WRONG_LENGTH", m, l, g)
            }
          }else {
            if(Util.isNotNull(l = c.maxlength) && k === !1 && m.length > l) {
              return this.grid.error("DATA_TOO_LONG", m, g, l)
            }
            if(Util.isNotNull(l = c.minlength)) {
              if(k === !0 || m.length < l) {
                return this.grid.error("DATA_TOO_SHORT", m, g, l)
              }
            }
          }
        }
        if(Util.isFunction(c = c.validator)) {
          try {
            if(c(j, a, m, h, k) !== !0) {
              return this.grid.error("WRONG_VALUE", m, g)
            }
          }catch(r) {
            return this.grid.error("WRONG_VALUE", m, g)
          }
        }
      }
    }
    return!0
  };
  c.validateList = function(a, d) {
    if(Util.isNull(a)) {
      return!1
    }
    if(a.length === 0) {
      return!0
    }
    for(var e = this.grid.colDefMgr.getAll(), b = e.length, c = a.length, g, h, k = 0, j, m, l, p, n, r = d !== void 0 && d.isNew, q = [], o = [];k < b;k++) {
      if(g = e[k], h = g.key, m = {}, l = {}, q.length = 0, o.length = 0, !r || !g.nullOnCreate) {
        if(g.notNull === !0) {
          for(j = 0;j < c;j++) {
            if(a[j].hasOwnProperty(h) === !1 || Util.isEmptyString(p = a[j][h])) {
              return this.grid.error("BAD_NULL", h)
            }
            q.push(p);
            o.push(p.toString())
          }
        }else {
          for(j = 0;j < c;j++) {
            p = void 0, a[j].hasOwnProperty(h) === !1 || Util.isNull(p = a[j][h]) ? (m[j] = !0, l[j] = !0) : p === "" && (l[j] = !0), q.push(p), m.hasOwnProperty(j) ? o.push("") : o.push(p.toString())
          }
        }
        if(Util.isNotNull(n = g.max)) {
          for(j = 0;j < c;j++) {
            if(l.hasOwnProperty(j) === !1 && q[j] > n) {
              return this.grid.error("BIGGER_THAN", q[j], h, n)
            }
          }
        }
        if(Util.isNotNull(n = g.min)) {
          for(j = 0;j < c;j++) {
            if(l.hasOwnProperty(j) === !1 && q[j] < n) {
              return this.grid.error("SMALLER_THAN", q[j], h, n)
            }
          }
        }
        if(Util.isNotNull(n = g.length)) {
          for(j = 0;j < c;j++) {
            if(m.hasOwnProperty(j) === !1 && (l.hasOwnProperty(j) || o[j].length !== n)) {
              return this.grid.error("WRONG_LENGTH", o[j], n, h)
            }
          }
        }else {
          if(Util.isNotNull(n = g.maxlength)) {
            for(j = 0;j < c;j++) {
              if(l.hasOwnProperty(j) === !1 && o[j].length > n) {
                return this.grid.error("DATA_TOO_LONG", o[j], h, n)
              }
            }
          }
          if(Util.isNotNull(n = g.minlength)) {
            for(j = 0;j < c;j++) {
              if(m.hasOwnProperty(j) === !1 && (l.hasOwnProperty(j) || o[j].length < n)) {
                return this.grid.error("DATA_TOO_SHORT", o[j], h, n)
              }
            }
          }
        }
        if(Util.isFunction(g = g.validator)) {
          try {
            for(j = 0;j < c;j++) {
              if(g(q[j], a[j], o[j], m.hasOwnProperty(j), l.hasOwnProperty(j)) !== !0) {
                return this.grid.error("WRONG_VALUE", o[j], h)
              }
            }
          }catch(s) {
            return this.grid.error("WRONG_VALUE", o[j], h)
          }
        }
      }
    }
    return!0
  };
  c.makeCompositeKey = function(a, d) {
    if(!(this.__idMode_m__ !== this.__consts_n__.__composite_c__ || Util.isNull(a))) {
      if(d === !0 || a.hasOwnProperty(this.idKey) === !1) {
        for(var e = this._options.__idColKeys_c__, b = e.length, c = 0, g = "";c < b;c++) {
          g += "&" + a[e[c]]
        }
        a[this.idKey] = g
      }
    }
  };
  c.makeCompositeKeyList = function(a, d) {
    if(!(this.__idMode_m__ !== this.__consts_n__.__composite_c__ || a.length === 0)) {
      var e = this.idKey, b = a.length, c = this._options.__idColKeys_c__, g = c.length, h, k = 0, j, m;
      if(d === !0) {
        for(;k < b;k++) {
          h = a[k];
          m = "";
          for(j = 0;j < g;j++) {
            m += "&" + h[c[j]]
          }
          h[e] = m
        }
      }else {
        for(;k < b;k++) {
          if((h = a[k]).hasOwnProperty(e) === !1) {
            m = "";
            for(j = 0;j < g;j++) {
              m += "&" + h[c[j]]
            }
            h[e] = m
          }
        }
      }
    }
  };
  c.map = function(a) {
    if(!Util.isNull(a)) {
      var d = this.__idToData_a__, e = this.idKey, b;
      this.makeCompositeKey(a);
      if(a.hasOwnProperty(e) && d.hasOwnProperty(b = a[e])) {
        return d[b]
      }
    }
  };
  c.mapList = function(a) {
    if(Util.isEmptyArray(a)) {
      return{mapped:[], unmapped:[]}
    }
    this.makeCompositeKeyList(a);
    for(var d = [], e = [], b = this.idKey, c = this.__idToData_a__, g = a.length, h = 0, k, j;h < g;h++) {
      (k = a[h]).hasOwnProperty(b) && c.hasOwnProperty(j = k[b]) ? d.push(c[j]) : e.push(k)
    }
    return{mapped:d, unmapped:e}
  };
  c.getById = function(a) {
    if(Util.isNotNull(a) && this.__idToData_a__.hasOwnProperty(a)) {
      return this.__idToData_a__[a]
    }
  };
  c.getByIdx = function(a) {
    if(Util.isNotNull(a) && this.datalist.hasOwnProperty(a)) {
      return this.datalist[a]
    }
  };
  c.getByNode = function(a) {
    return this.getById(this.getIdByNode(a))
  };
  c.getIdx = function(a) {
    return this.getIdxById(this.getId(a))
  };
  c.getIdxById = function(a) {
    return Util.isNotNull(a) && this.__idToIdx_b__.hasOwnProperty(a) ? this.__idToIdx_b__[a] : -1
  };
  c.getIdxByNode = function(a) {
    return this.getIdxById(this.getIdByNode(a))
  };
  c.getId = function(a) {
    if(Util.isNotNull(a) && a.hasOwnProperty(this.idKey)) {
      return a[this.idKey]
    }
  };
  c.getIdByIdx = function(a) {
    return this.getId(this.getByIdx(a))
  };
  c.getIdByNode = function(a) {
    if(Util.isNotNull(a)) {
      return a.getAttribute("i")
    }
  };
  c.__reidxFrom_f__ = function(a) {
    Util.isNull(a) && (a = 0);
    for(var d = this.datalist, e = d.length, b = this.idKey, c = this.__idToIdx_b__;a < e;a++) {
      c[d[a][b]] = a
    }
  };
  c.__reidx_g__ = function() {
    this.__idToIdx_b__ = {};
    this.__reidxFrom_f__()
  };
  c.has = function(a) {
    return this.hasById(this.getId(a))
  };
  c.hasById = function(a) {
    return Util.isNotNull(a) ? this.__idToIdx_b__.hasOwnProperty(a) : !1
  };
  c.contains = function(a) {
    return this.containsById(this.getId(a))
  };
  c.containsById = function(a) {
    return Util.isNotNull(a) ? this.__idToData_a__.hasOwnProperty(a) : !1
  };
  c.set = function(a) {
    if(this.all === a || Util.isEmptyArray(a) && this.all === 0) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange");
    this.grid.event.trigger("onBeforeSetDatalist", [this.all, a]);
    this.cleanList(this.all);
    var d, e = this.uniqueMap;
    for(d in e) {
      e.hasOwnProperty(d) && (e[d] = {})
    }
    this.__idToData_a__ = {};
    this.all = [];
    this.__history_e__.length = 0;
    this.__redoHistory_q__.length = 0;
    Util.isNull(a) && (a = []);
    if((d = this.parseList(a)) instanceof Error) {
      return d
    }
    if((d = this.validateList(a)) instanceof Error) {
      return d
    }
    if((d = this.addListToUniqueMap(a)) instanceof Error) {
      return d
    }
    this.makeCompositeKeyList(a, !0);
    if((d = this.addListToIdMap(a)) instanceof Error) {
      return d
    }
    this.all = a;
    this.grid.event.trigger("onAfterSetDatalist", [a]);
    this.grid.event.trigger("onDataChange");
    this.refresh();
    return!0
  };
  c.add = function(a, d) {
    if(Util.isNull(a) || Util.isNotNull(this.map(a))) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange");
    this.fillTemp(a, d);
    var e;
    if((e = this.parse(a, d)) instanceof Error) {
      return e
    }
    if((e = this.validate(a, d)) instanceof Error) {
      return e
    }
    if((e = this.addToUniqueMap(a)) instanceof Error) {
      return e
    }
    if((e = this.addToIdMap(a)) instanceof Error) {
      return e
    }
    this.all.push(a);
    if(Util.isNull(d) || d.undo !== !0) {
      this.__history_e__.push({__action_a__:this.__consts_n__.__add_e__, __target_b__:a}), this.__redoHistory_q__.length = 0
    }
    this.grid.event.trigger("onAddDatarow", [a, d]);
    this.grid.event.trigger("onDataChange");
    (d === void 0 || d.noRefresh !== !0) && this.refresh(d);
    return!0
  };
  c.addList = function(a, d) {
    if(Util.isEmptyArray(a)) {
      return!1
    }
    var e = this.mapList(a).unmapped;
    if(e.length === 0) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange");
    this.fillTempList(a, d);
    var b;
    if((b = this.parseList(e, d)) instanceof Error) {
      return b
    }
    if((b = this.validateList(e, d)) instanceof Error) {
      return b
    }
    if((b = this.addListToUniqueMap(e)) instanceof Error) {
      return b
    }
    if((b = this.addListToIdMap(e)) instanceof Error) {
      return b
    }
    this.all.pushList(e);
    if(Util.isNull(d) || d.undo !== !0) {
      this.__history_e__.push({__action_a__:this.__consts_n__.__addList_f__, __target_b__:e}), this.__redoHistory_q__.length = 0
    }
    this.grid.event.trigger("onAddDatalist", [e, d]);
    this.grid.event.trigger("onDataChange");
    (d === void 0 || d.noRefresh !== !0) && this.refresh(d);
    return!0
  };
  c.updateByKey = function(a, d, b, c) {
    var i = {};
    i[d] = b;
    return this.update(a, i, c)
  };
  c.update = function(a, d, b) {
    if(Util.isNullOr(a, d)) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange");
    this.grid.event.trigger("onBeforeUpdateDatarow", [a, d]);
    var c = {}, i;
    for(i in d) {
      d.hasOwnProperty(i) && (a[i] === d[i] ? delete d[i] : (c[i] = a[i], a[i] = d[i]))
    }
    if(Util.isEmptyObj(c)) {
      return!1
    }
    if((i = this.parse(a, b)) instanceof Error) {
      return this.__rollback_o__(a, c), i
    }
    if((i = this.validate(a, b)) instanceof Error) {
      return this.__rollback_o__(a, c), i
    }
    if((i = this.updateUniqueMap(a, d, c)) instanceof Error) {
      return this.__rollback_o__(a, c), i
    }
    if((i = this.updateIdMap(a, d, c)) instanceof Error) {
      return this.__rollback_o__(a, c), i
    }
    i !== !1 && this.grid.event.trigger("onIdChange", [a, i, a[this.idKey]]);
    if(Util.isNull(b) || b.undo !== !0) {
      this.__history_e__.push({__action_a__:this.__consts_n__.__update_g__, __target_b__:a, __before_c__:c, __change_d__:d}), this.__redoHistory_q__.length = 0
    }
    this.grid.event.trigger("onUpdateDatarow", [a, d, c, b]);
    this.grid.event.trigger("onDataChange");
    (b === void 0 || b.noRefresh !== !0) && this.refresh(b);
    return!0
  };
  c.updateList = function(a, d) {
    if(Util.isEmptyArray(a)) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange");
    this.grid.event.trigger("onBeforeUpdateDatalist", [a]);
    for(var b = [], c = [], i = [], g, h, k, j = a.length, m = 0, l;m < j;m++) {
      h = {};
      g = a[m].datarow;
      k = a[m].change;
      for(l in k) {
        k.hasOwnProperty(l) && (g[l] === k[l] ? delete k[l] : (h[l] = g[l], g[l] = k[l]))
      }
      Util.isNotEmptyObj(h) && (b.push(g), c.push(h), i.push(k))
    }
    if(b.length === 0) {
      return!1
    }
    if((g = this.parseList(b, d)) instanceof Error) {
      return this.__rollbackList_p__(b, c), g
    }
    if((g = this.validateList(b, d)) instanceof Error) {
      return this.__rollbackList_p__(b, c), g
    }
    if((g = this.updateListUniqueMap(b, i, c)) instanceof Error) {
      return this.__rollbackList_p__(b, c), g
    }
    if((g = this.updateListIdMap(b, i, c)) instanceof Error) {
      return this.__rollbackList_p__(b, c), g
    }
    g !== !1 && this.grid.event.trigger("onIdListChange", [g.list, g.befores, this.idKey]);
    if(Util.isNull(d) || d.undo !== !0) {
      this.__history_e__.push({__action_a__:this.__consts_n__.__updateList_h__, __target_b__:b, __before_c__:c, __change_d__:i}), this.__redoHistory_q__.length = 0
    }
    this.grid.event.trigger("onUpdateDatalist", [b, i, c, d]);
    this.grid.event.trigger("onDataChange");
    (d === void 0 || d.noRefresh !== !0) && this.refresh(d);
    return!0
  };
  c.__rollback_o__ = function(a, d) {
    for(var b in d) {
      d.hasOwnProperty(b) && (a[b] = d[b])
    }
  };
  c.__rollbackList_p__ = function(a, d) {
    for(var b = a.length, c = 0, i, g, h;c < b;c++) {
      for(h in i = a[c], g = d[c], g) {
        g.hasOwnProperty(h) && (i[h] = g[h])
      }
    }
  };
  c.remove = function(a, d) {
    if(Util.isNull(a)) {
      return!1
    }
    var b = this.map(a);
    if(Util.isNull(b)) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange");
    this.removeFromIdMap(b);
    this.removeFromUniqueMap(b);
    this.all.remove(b);
    this.removeId(b);
    if(Util.isNull(d) || d.undo !== !0) {
      this.__history_e__.push({__action_a__:this.__consts_n__.__remove_i__, __target_b__:b}), this.__redoHistory_q__.length = 0
    }
    this.grid.event.trigger("onRemoveDatarow", [b, d]);
    this.grid.event.trigger("onDataChange");
    (d === void 0 || d.noRefresh !== !0) && this.refresh(d);
    return!0
  };
  c.removeList = function(a, d) {
    if(Util.isEmptyArray(a)) {
      return!1
    }
    var b = this.mapList(a).mapped;
    if(b.length === 0) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange");
    this.removeListFromIdMap(b);
    this.removeListFromUniqueMap(b);
    this.all.removeList(b);
    this.cleanList(b);
    if(Util.isNull(d) || d.undo !== !0) {
      this.__history_e__.push({__action_a__:this.__consts_n__.__removeList_j__, __target_b__:b}), this.__redoHistory_q__.length = 0
    }
    this.grid.event.trigger("onRemoveDatalist", [b, d]);
    this.grid.event.trigger("onDataChange");
    (d === void 0 || d.noRefresh !== !0) && this.refresh(d);
    return!0
  };
  c.__keydownCanvas_ba__ = function(a) {
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
  c.undo = function() {
    if(this.__history_e__.length === 0) {
      return!1
    }
    var a = this.__history_e__.pop();
    this.__redoHistory_q__.push(a);
    var d = a.__target_b__, b = a.__before_c__;
    switch(a.__action_a__) {
      case this.__consts_n__.__add_e__:
        return this.remove(d, {undo:!0});
      case this.__consts_n__.__addList_f__:
        return this.removeList(d, {undo:!0});
      case this.__consts_n__.__update_g__:
        return this.update(d, b, {undo:!0});
      case this.__consts_n__.__updateList_h__:
        for(var a = [], c = 0, i = d.length;c < i;c++) {
          a.push({datarow:d[c], change:b[c]})
        }
        return this.updateList(a, {undo:!0});
      case this.__consts_n__.__remove_i__:
        return this.add(d, {undo:!0});
      case this.__consts_n__.__removeList_j__:
        return this.addList(d, {undo:!0})
    }
  };
  c.redo = function() {
    if(this.__redoHistory_q__.length === 0) {
      return!1
    }
    var a = this.__redoHistory_q__.pop();
    this.__history_e__.push(a);
    var d = a.__target_b__, b = a.__change_d__;
    switch(a.__action_a__) {
      case this.__consts_n__.__add_e__:
        return this.add(d, {undo:!0});
      case this.__consts_n__.__addList_f__:
        return this.addList(d, {undo:!0});
      case this.__consts_n__.__update_g__:
        return this.update(d, b, {undo:!0});
      case this.__consts_n__.__updateList_h__:
        for(var a = [], c = 0, i = d.length;c < i;c++) {
          a.push({datarow:d[c], change:b[c]})
        }
        return this.updateList(a, {undo:!0});
      case this.__consts_n__.__remove_i__:
        return this.remove(d, {undo:!0});
      case this.__consts_n__.__removeList_j__:
        return this.removeList(d, {undo:!0})
    }
  };
  c.equals = function(a, d) {
    if(Util.isNullOr(a, d)) {
      return!1
    }
    if(a === d) {
      return!0
    }
    this.__idMode_m__ === this.__consts_n__.__composite_c__ && (this.makeCompositeKey(a), this.makeCompositeKey(d));
    var b = this.idKey;
    return Util.isNull(a[b]) || Util.isNull(d[b]) ? !1 : a[b] === d[b]
  };
  c.getReal = function() {
    var a = this.__consts_n__.__notReal_d__;
    return this.all.filter(function(d) {
      return d.hasOwnProperty(a) === !1
    })
  };
  c.filterReal = function(a) {
    var d = this.__consts_n__.__notReal_d__;
    return a.filter(function(a) {
      return a.hasOwnProperty(d) === !1
    })
  };
  c.isReal = function(a) {
    return Util.isNotNull(a) && a.hasOwnProperty(this.__consts_n__.__notReal_d__) === !1
  };
  c.dropNonReal = function(a) {
    if(!Util.isEmptyArray(a)) {
      for(var d = this.__consts_n__.__notReal_d__, b = a.length - 1;b >= 0;b--) {
        a[b].hasOwnProperty(d) && (delete a[b][d], a.removeAt(b))
      }
    }
  };
  c.removeIdCol = function(a) {
    if(!(this.__idMode_m__ === this.__consts_n__.__given_b__ || Util.isEmptyArray(a))) {
      for(var d = this.idKey, b = 0, c = a.length;b < c;b++) {
        a[b].hasOwnProperty(d) && delete a[b][d]
      }
    }
  };
  c.removeId = function(a) {
    Util.isNotNull(a) && this.__idMode_m__ !== this.__consts_n__.__given_b__ && a.hasOwnProperty(this.idKey) && delete a[this.idKey]
  };
  c.cleanList = function(a) {
    Util.isEmptyArray(a) || (this.removeIdCol(a), this.dropNonReal(a))
  };
  c.purify = function(a) {
    if(a !== void 0) {
      a = this.all
    }
    if(Util.isEmptyArray(a)) {
      return[]
    }
    for(var d = [], b = a.length, c = 0, i, g, h = this.__consts_n__.__notReal_d__;c < b;c++) {
      if((g = a[c]).hasOwnProperty(h) === !1) {
        for(i in d.push({}), g) {
          g.hasOwnProperty(i) && g.hasOwnProperty(i) && i.substring(0, 3)
        }
      }
    }
    return d
  };
  c.setSorter = function(a) {
    this.grid.event.trigger("onChangeSorter", [this.__sorter_h__, a]);
    this.__sorter_h__ = a
  };
  c.__sort_i__ = function(a) {
    Util.isNull(a) ? a = this.__sorter_h__ : this.setSorter(a);
    if(!Util.isNull(a)) {
      var d = this.all;
      this.grid.event.trigger("onBeforeSort", [d]);
      Util.isNotNull(a.comparator) ? (d.sort(a.comparator), a.desc && d.reverse()) : Util.isNotNull(a.lexi) && this.constructor.__lexi_a__(d, a.lexi, a.desc);
      this.grid.event.trigger("onAfterSort", [d])
    }
  };
  c.addFilter = function(a) {
    this.__filters_r__.push(a);
    this.refresh()
  };
  c.removeFilter = function(a) {
    var d = this.__filters_r__.length;
    this.__filters_r__.remove(a);
    d !== this.__filters_r__.length && this.refresh()
  };
  c.__filter_j__ = function() {
    var a = this.datalist, d = this.failed, b = 0, c = this.__filters_r__.length, i, g;
    this.grid.event.trigger("onBeforeFilter", [a, d]);
    a.length = 0;
    a.pushList(this.all);
    for(d.length = 0;b < c;b++) {
      i = this.__filters_r__[b];
      for(g = a.length - 1;g >= 0;g--) {
        i(a[g]) || (d.push(a[g]), a.removeAt(g))
      }
    }
    this.grid.event.trigger("onFilter", [a, d]);
    this.grid.event.trigger("onAfterFilter", [a, d])
  };
  c.__finish_k__ = function(a) {
    this.__reidx_g__();
    this.grid.event.trigger("onAfterRefresh", [a])
  };
  c.refresh = function(a) {
    this.grid.event.trigger("onBeforeRefresh");
    a === void 0 ? this.__sort_i__() : a.noSort !== !0 && this.__sort_i__(a.sorter);
    (a === void 0 || a.noFilter !== !0) && this.__filter_j__();
    this.__finish_k__(a)
  };
  c.exportRowToArray = function(a, d) {
    if(!(a in this.datalist)) {
      return null
    }
    d || (d = this.grid.colDefMgr.getKeys());
    for(var b = this.datalist[a], c = [], i, g = 0, h = d.length;g < h;g++) {
      i = d[g], c.push(i in b ? b[i] : null)
    }
    return c
  };
  c.exportToArray = function(a, d, b) {
    a || (a = this.grid.colDefMgr.getKeys());
    for(var d = this.datalist.slice(d, b), c = [], i, g, h = 0, k = d.length, j, m = a.length;h < k;h++) {
      i = d[h];
      j = 0;
      for(b = [];j < m;j++) {
        g = a[j], b.push(g in i ? i[g] : null)
      }
      c.push(b)
    }
    return c
  };
  b.__lexi_a__ = function(a, b, c) {
    var f = Object.prototype.toString;
    Object.prototype.toString = Util.isFunction(b) ? b : function() {
      return this[b]
    };
    a.sort();
    Object.prototype.toString = f;
    c && a.reverse()
  }
})();
jx.grid.EventManager = {};
(function() {
  function b(a) {
    this.mid = a.mid;
    a.grid.event = this;
    this.__map_a__ = {}
  }
  goog.exportSymbol("jx.grid.EventManager", b);
  JGM._add("EventManager", b);
  b.getInstance = function(a) {
    return new b(a)
  };
  var c = b.prototype;
  c.destroy = function() {
    var a, b = this.__map_a__;
    for(a in b) {
      b.hasOwnProperty(a) && JGM.__deleteArray_r__(b, a)
    }
    JGM._destroy(this, {name:"EventManager", path:"event", map:"__map_a__"})
  };
  c.register = function(a, b, c) {
    if(Util.isString(a)) {
      this.__parseAndAdd_b__(a, b, c)
    }else {
      if(Util.isNotNull(a.e)) {
        this.__parseAndAdd_b__(a.e, a.f, a.t)
      }else {
        for(var f, b = a.length, i;f < b;f++) {
          Util.isNotNull(i = a[f]) && this.__parseAndAdd_b__(i.e, i.f, i.t)
        }
      }
    }
  };
  c.bind = function(a, b, c) {
    if(Util.isString(a)) {
      this.__parseAndAdd_b__(a, b, c)
    }else {
      for(var f in a) {
        a.hasOwnProperty(f) && this.__parseAndAdd_b__(f, a[f], b)
      }
    }
  };
  c.__parseAndAdd_b__ = function(a, b, c) {
    Util.isNull(c) && (c = window);
    var a = Util.split(a), f = a.length, i = 0;
    if(Util.isFunction(b)) {
      for(;i < f;i++) {
        this.__addHandler_c__(a[i], b, c)
      }
    }else {
      if(Util.isString(b)) {
        for(var b = Util.split(b), g = b.length, h, k;i < f;i++) {
          h = a[i];
          for(k = 0;k < g;k++) {
            this.__addHandler_c__(h, c[b[k]], c)
          }
        }
      }else {
        for(g = b.length;i < f;i++) {
          h = a[i];
          for(k = 0;k < g;k++) {
            this.__addHandler_c__(h, b[k], c)
          }
        }
      }
    }
  };
  c.__addHandler_c__ = function(a, b, c) {
    this.__map_a__.hasOwnProperty(a) || (this.__map_a__[a] = []);
    this.__map_a__[a].push({fn:b, target:c})
  };
  c.unregister = function(a, b) {
    var c = this.__map_a__;
    if(c.hasOwnProperty(a)) {
      var f = c[a];
      if(Util.isNull(b)) {
        f.length = 0, delete c[a]
      }else {
        for(var i = 0, g = f.length;i < g;i++) {
          if(f[i].fn === b) {
            f.removeAt(i);
            f.length === 0 && delete c[a];
            break
          }
        }
      }
    }
  };
  c.trigger = function(a, b, c) {
    for(var f, i, g = this.__map_a__, h = [], a = Util.split(a), k = a.length, j = Util.isEmptyArray(b), m = Util.isFunction(c), l, p = 0;p < k;p++) {
      if(f = a[p], g.hasOwnProperty(f) && (f = g[f], i = f.length, i !== 0)) {
        if(l = 0, m) {
          var n;
          if(j) {
            for(;l < i;l++) {
              n = f[l].fn.call(f[l].target), c(n) && h.push(n)
            }
          }else {
            for(;l < i;l++) {
              n = f[l].fn.apply(f[l].target, b), c(n) && h.push(n)
            }
          }
        }else {
          if(j) {
            for(;l < i;l++) {
              h.push(f[l].fn.call(f[l].target))
            }
          }else {
            for(;l < i;l++) {
              h.push(f[l].fn.apply(f[l].target, b))
            }
          }
        }
      }
    }
    return h
  };
  c.triggerInvalid = function(a, b) {
    return this.trigger(a, b, function(a) {
      return a === !1
    }).length !== 0
  };
  c.sendToBack = function(a, b) {
    for(var c = this.__map_a__[a], f = c.length, i, g = -1, h = 0;h < f;h++) {
      if(c[h].fn === b) {
        g = h;
        i = c[h];
        break
      }
    }
    g > -1 && (c.removeAt(h), c.push(i))
  };
  c.sendToFront = function(a, b) {
    for(var c = this.__map_a__[a], f = c.length, i, g = -1, h = 0;h < f;h++) {
      if(c[h].fn === b) {
        g = h;
        i = c[h];
        break
      }
    }
    g > -1 && (c.removeAt(h), c.unshift(i))
  }
})();
jx.grid.ColumnManager = {};
(function() {
  function b(a) {
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
  goog.exportSymbol("jx.grid.ColumnManager", b);
  JGM._add("ColDefManager", b);
  b.getInstance = function(a) {
    return new b(a)
  };
  var c = b.prototype;
  c.__init = function(a) {
    this.grid.event.bind("onDestroy", this.__destroy_aA__, this);
    this.set(a.colDefs)
  };
  c.__destroy_aA__ = function() {
    JGM._destroy(this, {name:"ColDefManager", path:"colDefMgr", property:"__colDefs_a__", map:"__keyToIdx_d__ __keyToDef_c__ _options", array:"__filtered_b__"})
  };
  c.getAll = function() {
    return this.__colDefs_a__
  };
  c.set = function(a) {
    if(this.__colDefs_a__ === a || Util.areEqualArrays(this.__colDefs_a__, a)) {
      return a
    }
    if(Util.isNull(a)) {
      a = []
    }else {
      var b = a.filter(function(a) {
        return Util.isNotNull(a)
      });
      a.length = 0;
      a.pushList(b)
    }
    this.grid.event.trigger("onBeforeSetColDefs", [this.__colDefs_a__, a]);
    this.__colDefs_a__ = [];
    this.__filtered_b__.length = 0;
    this.__keyToIdx_d__ = {};
    this.__keyToDef_c__ = {};
    this.grid.event.trigger("onEmptyColDefs");
    for(var b = 0, c = a.length, f = this.__keyToDef_c__, i, g;b < c;b++) {
      i = a[b];
      if(!i.hasOwnProperty("key")) {
        return this.__keyToDef_c__ = {}, this.grid.error("KEY_UNDEFINED", b)
      }
      g = i.key;
      if(Util.isEmptyString(g)) {
        return this.__keyToDef_c__ = {}, this.grid.error("BAD_NULL", b)
      }
      if(f.hasOwnProperty(g)) {
        return this.__keyToDef_c__ = {}, this.grid.error("DUP_KEY", g)
      }
      f[g] = i
    }
    this.__colDefs_a__ = a;
    for(b = 0;b < c;b++) {
      this.__extend_i__(a[b])
    }
    this.grid.event.trigger("onAfterSetColDefs", [a, this.__filter_e__()]);
    return a
  };
  c.push = function(a) {
    return this.addAt(this.__filtered_b__.length, a)
  };
  c.addAt = function(a, b) {
    if(!Util.isNull(b)) {
      var c = b.key, f = this.__keyToDef_c__, i = this.__filtered_b__;
      Util.isNull(a) || a > i.length ? a = i.length : a < 0 && (a += i.length);
      this.grid.event.trigger("onBeforeAddColDef", [b]);
      if(Util.isNull(c)) {
        return this.grid.error("KEY_UNDEFINED")
      }
      if(f.hasOwnProperty(c)) {
        return this.grid.error("DUP_KEY", c)
      }
      this.__colDefs_a__.addAt(a, this.__extend_i__(f[c] = b));
      b.hidden !== !0 && (i.addAt(a, b), this.__reidx_f__());
      this.grid.event.trigger("onAfterAddColDef", [b, a]);
      return i.length
    }
  };
  c.__extend_i__ = function(a) {
    if(!Util.isNull(a)) {
      var d = {};
      $.extend(!0, d, this._options.__colDef_a__);
      $.extend(!0, d, a);
      $.extend(!0, a, d);
      a.sorter = d = b.sorter(a.sorter, a.key);
      if(Util.isNotNull(d)) {
        d.key = a.key
      }
      return a
    }
  };
  c.hide = function(a) {
    var b = this.__filtered_b__[a];
    if(!Util.isNull(b)) {
      return b.hidden = !0, this.__filtered_b__.removeAt(a), this.__reidx_f__(), this.grid.event.trigger("onHideCol", [b, a]), b
    }
  };
  c.show = function(a) {
    if(!Util.isNull(a)) {
      if(!Util.isString(a)) {
        if(!Util.isObject(a)) {
          return
        }
        a = a.key
      }
      var b = this.__keyToDef_c__;
      if(b.hasOwnProperty(a)) {
        if(this.__keyToIdx_d__.hasOwnProperty(a)) {
          return b[a]
        }
        b = b[a];
        b.hidden = !1;
        this.__filter_e__();
        this.__reidx_f__();
        this.grid.event.trigger("onShowCol", [b, this.__keyToIdx_d__[a]]);
        return b
      }
    }
  };
  c.__filter_e__ = function() {
    this.__filtered_b__ = this.__colDefs_a__.filter(function(a) {
      return a.hidden !== !0
    });
    this.__reidx_f__();
    return this.__filtered_b__
  };
  c.__reidx_f__ = function() {
    this.__keyToIdx_d__ = {};
    return this.__reidxFrom_g__()
  };
  c.__reidxFrom_g__ = function(a) {
    Util.isNull(a) && (a = 0);
    for(var b = this.__filtered_b__, c = b.length, f = this.__keyToIdx_d__;a < c;a++) {
      f[b[a].key] = a
    }
    return f
  };
  c.get = function(a) {
    if(Util.isNull(a)) {
      return this.__filtered_b__
    }
    if(this.__filtered_b__.hasOwnProperty(a)) {
      return this.__filtered_b__[a]
    }
  };
  c.getByKey = function(a) {
    if(Util.isNotNull(a) && this.__keyToDef_c__.hasOwnProperty(a)) {
      return this.__keyToDef_c__[a]
    }
  };
  c.length = function() {
    return this.__filtered_b__.length
  };
  c.getIdxByKey = function(a) {
    return this.__keyToIdx_d__.hasOwnProperty(a) ? this.__keyToIdx_d__[a] : -1
  };
  c.getIdx = function(a) {
    return Util.isNotNull(a) && this.__keyToIdx_d__.hasOwnProperty(a.key) ? this.__keyToIdx_d__[a.key] : -1
  };
  c.sortByKey = function(a) {
    this.__filtered_b__.length = 0;
    this.__keyToIdx_d__ = {};
    for(var b = 0, c = a.length, f = this.__filtered_b__, i = this.__keyToIdx_d__, g = this.__keyToDef_c__;b < c;b++) {
      f.push(g[a[b]]), i[a[b]] = b
    }
    this.grid.event.trigger("onReorderCols", a);
    return this.__filtered_b__
  };
  c.getKeys = function() {
    return this.__filtered_b__.map(function(a) {
      return a.key
    })
  };
  b.sorter = function(a, b, c) {
    c = c ? !0 : !1;
    if(a === "text") {
      return{lexi:b, on:c, key:b}
    }
    if(a === "int") {
      return{on:c, comparator:function(a, c) {
        var e = a[b], h = c[b];
        Util.isNull(e) ? e = Number.MAX_VALUE : typeof e === "string" && (e = e.toInt());
        Util.isNull(h) ? h = Number.MAX_VALUE : typeof h === "string" && (h = h.toInt());
        return e - h
      }, key:b}
    }
    if(a === "float ÇÑ±¹ tehu") {
      return{on:c, comparator:function(a, c) {
        var e = a[b], h = c[b];
        Util.isNull(e) ? e = Number.MAX_VALUE : typeof e === "string" && (e = e.toFloat());
        Util.isNull(h) ? h = Number.MAX_VALUE : typeof h === "string" && (h = h.toFloat());
        return e - h
      }, key:b}
    }
  }
})();
jx.grid.Grid = {};
(function() {
  function b(a) {
    JGM.core.BaseModule.call(this, a)
  }
  goog.exportSymbol("jx.grid.Grid", b);
  JGM._add("Grid", b);
  goog.inherits(b, JGM.core.BaseModule);
  b.getInstance = function(a) {
    return new b(a)
  };
  var c = b.prototype;
  c._defaultOptions = function() {
    return{classGrid:"jgrid", border:"1px solid #868686", width:void 0, font:"15px Arial,Helvetica,sans-serif", style:"", borderSide:!0, imageUrl:"../images/", links:{data:"dataMgr.all", datalen:"dataMgr.all.length", shown:"dataMgr.datalist", set:"dataMgr.set", add:"dataMgr.add", addList:"dataMgr.addList", update:"dataMgr.update", updateByKey:"dataMgr.updateByKey", updateList:"dataMgr.updateList", remove:"dataMgr.remove", removeList:"dataMgr.removeList", select:"dataMgr.executeSelect", undo:"dataMgr.undo", 
    redo:"dataMgr.redo", addFilter:"dataMgr.addFilter", removeFilter:"dataMgr.removeFilter", check:"collapser.checkMgr.checkList checkMgr.checkList", checked:"collapser.checkMgr.getCheckList checkMgr.getCheckList", removeChecked:"collapser.checkMgr.removeChecked checkMgr.removeChecked", register:"event.register", trigger:"event.trigger", bind:"event.bind", unregister:"event.unregister", unbind:"event.unregister", collen:"colDefMgr.length"}, autoWidth:!1, showMessage:!1}
  };
  c._init = function(a) {
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
    for(var a = 10, b = this.colDefMgr.getAll(), c = b.length;a < c;a++) {
      if(colDef = b[a], colDef.CheckManager) {
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
  c._bindEvents = function() {
    JGM._bindGlobalEvents();
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
    }})
  };
  c.destroy = function() {
    try {
      Util.isEmptyObj(JGM.m.Grid) && JGM._unbindGlobalEvents(), this.event.trigger("onDestroy"), JGM._destroy(this, {name:"Grid", module:"event", $:"_ctnr", map:"_vars _options", style:"_style _dynStyle"})
    }catch(a) {
      return a
    }
  };
  c._registerLinks = function(a) {
    var b, c, f, i, g, h, k, j, m, l;
    a:for(b in a) {
      if(a.hasOwnProperty(b) && !(b in this)) {
        c = Util.split(a[b]);
        f = c.length;
        i = 0;
        b:for(;i < f;i++) {
          if(g = c[i].split("."), h = g.length, !(h < 1)) {
            k = this;
            j = this;
            m = "";
            for(l = 0;l < h;l++) {
              if(g[l] in k) {
                j = k, k = k[m = g[l]]
              }else {
                continue b
              }
            }
            this._registerLink(b, k, j, m);
            continue a
          }
        }
      }
    }
  };
  c._registerLink = function(a, b, c, f) {
    if(this.hasOwnProperty(a)) {
      return!1
    }
    this[a] = Util.isFunction(b) ? function() {
      return b.apply(c, arguments)
    } : function() {
      return c[f]
    };
    return!0
  };
  c._createCss = function() {
    var a = Util.sprint("%selector%{overflow:hidden;font:%font%;%border%%style%}%submodule%", {selector:"#" + this.mid, font:this._options.font, border:this._options.borderSide ? "border:" + this._options.border + ";" : "border-top:" + this._options.border + ";border-bottom:" + this._options.border + ";", style:this._options.style, submodule:this.event.trigger("onCreateCss").join("")});
    this._style = Util.createStyle(a);
    this._dynStyle = Util.createStyle(this.event.trigger("onCreateDynamicCss").join(""))
  };
  c._recreateDynamicCss = function() {
    Util.setStyle(this._dynStyle, this.event.trigger("onCreateDynamicCss").join(""))
  };
  c._keydown = function(a) {
    this.event.triggerInvalid("onBeforeKeydown", [a]) || this.event.trigger("keydown_" + a.which + " keydown", [a])
  };
  c._keyup = function(a) {
    this.event.triggerInvalid("onBeforeKeyup", [a]) || this.event.trigger("keyup_" + a.which + " keyup", [a])
  };
  c._keypress = function(a) {
    this.event.triggerInvalid("onBeforeKeypress", [a]) || this.event.trigger("keypress_" + a.which + " keypress", [a])
  };
  c._mousein = function(a) {
    this.event.triggerInvalid("onBeforeMousein", [a]) || (this._vars.drag ? this.event.trigger("dragin mousein", [a]) : this.event.trigger("mousein", [a]))
  };
  c._mouseout = function(a) {
    this.event.triggerInvalid("onBeforeMouseout", [a]) || (this._vars.drag ? this.event.trigger("dragout mouseout", [a]) : this.event.trigger("mouseout", [a]))
  };
  c._mouseenter = function(a) {
    this.event.triggerInvalid("onBeforeMouseenter", [a]) || (this._vars.drag ? this.event.trigger("dragenter mouseenter", [a]) : this.event.trigger("mouseenter", [a]))
  };
  c._mouseleave = function(a) {
    this.event.triggerInvalid("onBeforeMouseleave", [a]) || (this._vars.drag ? this.event.trigger("dragleave mouseleave", [a]) : this.event.trigger("mouseleave", [a]))
  };
  c._mousemove = function(a) {
    this.event.triggerInvalid("onBeforeMousemove", [a]) || (this._vars.drag ? this.event.trigger("dragmove mousemove", [a]) : this.event.trigger("mousemove", [a]))
  };
  c._mouseover = function(a) {
    this.event.triggerInvalid("onBeforeMouseover", [a]) || (this._vars.drag ? this.event.trigger("dragover mouseover", [a]) : this.event.trigger("mouseover", [a]))
  };
  c._mousedown = function(a) {
    this._vars.drag = !0;
    this.event.triggerInvalid("onBeforeMousedown", [a]) || this.event.trigger("mousedown", [a])
  };
  c._mouseup = function(a) {
    this._vars.drag = !1;
    this.event.trigger("unsetDrag");
    this.containsEvent(a) && (this.event.triggerInvalid("onBeforeMouseup", [a]) || this.event.trigger("mouseup", [a]))
  };
  c._click = function(a) {
    this.event.triggerInvalid("onBeforeClick", [a]) || this.event.trigger("click", [a])
  };
  c._dblclick = function(a) {
    this.event.triggerInvalid("onBeforeDblclick", [a]) || this.event.trigger("dblclick", [a])
  };
  c._resize = function(a) {
    var b = !1, c = this._ctnr[0].clientWidth;
    if(c >= 1 && this._vars.lastW !== c) {
      this.event.trigger("resizeWidth", [c, this._vars.lastW]), this._vars.lastW = c, b = !0
    }
    c = this._ctnr[0].clientHeight;
    if(c >= 1 && this._vars.lastH !== c) {
      this.event.trigger("resizeHeight", [c, this._vars.lastH]), this._vars.lastH = c, b = !0
    }
    b && this.event.trigger("resize", [a])
  };
  c.width = function(a) {
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
  c.height = function(a) {
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
  c.getCellByIdAndKey = function(a, b) {
    return JGM.create("Cell", {grid:this, datarow:this.dataMgr.getById(a), colDef:this.colDefMgr.getByKey(b)})
  };
  c.getCellByIdx = function(a, b) {
    return JGM.create("Cell", {grid:this, row:a, col:b})
  };
  c.error = function(a) {
    for(var b = JGM.error[a], c = 1, f = arguments.length;c < f;c++) {
      b = b.replace(RegExp("%" + (c - 1), "g"), arguments[c])
    }
    b = Error(b);
    b.code = a;
    this.printError(b.message);
    this.event.trigger("onError", [b]);
    return b
  };
  c.printError = function(a) {
    if(this._options.showMessage) {
      var b = this.msg;
      b[0].innerHTML = a;
      b[0].style.width = this._ctnr[0].clientWidth + "px";
      b[0].style.background = "#ffebe8";
      b[0].style.color = "#333";
      b.show();
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function() {
        b.hide(1E3)
      }, 5E3)
    }
  };
  c.printMessage = function(a) {
    if(this._options.showMessage) {
      var b = this.msg;
      b[0].innerHTML = a;
      b[0].style.width = this._ctnr[0].clientWidth + "px";
      b[0].style.background = "#dfdfdf";
      b[0].style.color = "#6f6f6f";
      b.show();
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function() {
        b.hide(1E3)
      }, 5E3)
    }
  };
  c.containsEvent = function(a) {
    return Util.contains(this._ctnr[0], a.target)
  }
})();
jx.grid.Cell = {};
(function() {
  function b(a) {
    this.grid = a.grid;
    this.__datarow_h__ = a.datarow;
    this.__colDef_i__ = a.colDef;
    this.__init(a)
  }
  goog.exportSymbol("jx.grid.Cell", b);
  JGM._add("Cell", b);
  b.getInstance = function(a) {
    return new b(a)
  };
  var c = b.prototype;
  c.__init = function(a) {
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
  c.destroy = function() {
    delete this.grid;
    delete this.__datarow_h__;
    delete this.__colDef_i__
  };
  c.getRowIdx = function() {
    if(Util.isNotNull(this.__datarow_h__)) {
      return this.grid.dataMgr.getIdx(this.__datarow_h__)
    }
  };
  c.getColIdx = function() {
    if(Util.isNotNull(this.__colDef_i__)) {
      return this.grid.colDefMgr.getIdx(this.__colDef_i__)
    }
  };
  c.getNode = function() {
    if(Util.isNotNullAnd(this.__datarow_h__, this.__colDef_i__)) {
      return this.grid.view.getCellByIdAndKey(this.grid.dataMgr.getId(this.__datarow_h__), this.__colDef_i__.key)
    }
  };
  c.getRowNode = function() {
    return this.grid.view.getRow(this.__datarow_h__)
  };
  c.get$ = function() {
    var a = this.getNode();
    return a !== void 0 ? $(a) : $([])
  };
  c.getDatarow = function() {
    return this.__datarow_h__
  };
  c.getColDef = function() {
    return this.__colDef_i__
  };
  c.getKey = function() {
    if(Util.isNotNull(this.__colDef_i__)) {
      return this.__colDef_i__.key
    }
  };
  c.getId = function() {
    return this.grid.dataMgr.getId(this.__datarow_h__)
  };
  c.getValue = function() {
    if(Util.isNotNullAnd(this.__datarow_h__, this.__colDef_i__)) {
      return this.__datarow_h__[this.__colDef_i__.key]
    }
  };
  c.isValid = function() {
    return Util.isNotNull(this.getNode())
  };
  c.isInvalid = function() {
    return Util.isNull(this.getNode())
  };
  c.isEmpty$ = function() {
    return this.get$().length === 0
  };
  c.has$ = function() {
    return this.get$().length !== 0
  };
  c.equals = function(a) {
    return Util.isNotNull(a) && Util.isNotNull(this.__datarow_h__) && this.__datarow_h__ === a.getDatarow() && Util.isNotNull(this.__colDef_i__) && this.__colDef_i__ === a.getColDef()
  }
})();
})();
