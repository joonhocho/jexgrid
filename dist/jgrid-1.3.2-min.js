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
    for(var d, a = 0, c = 0, e = b.length, k = 0, g = !1;k < e;k++) {
      if(d = b.charAt(k), d === ".") {
        if(++a === 2) {
          g = !0;
          break
        }
      }else {
        if(d === "-" && ++c === 2) {
          g = !0;
          break
        }
      }
    }
    return g === !0 && (b = b.replace(/[\.\-]/g, "")).length === 0 ? NaN : /^-*0*\./.test(b) || (b = b.replace(/^-0+/, "-")).length === 0 || (b = b.replace(/^0+/, "")).length === 0 ? 0 : parseInt(b, 10)
  }
}
if(!String.prototype.toFloat) {
  String.prototype.toFloat = function() {
    var b;
    if((b = this.replace(/[^-\d\.]/g, "")).length === 0) {
      return NaN
    }
    for(var d = 0, a = b.length, c, e = 0, k = 0;d < a;d++) {
      if(c = b.charAt(d), c === ".") {
        if(e !== 0) {
          return NaN
        }else {
          e++
        }
      }else {
        if(c === "-") {
          if(k !== 0) {
            return NaN
          }else {
            k++
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
    for(var d = this.length;(d = this.lastIndexOf(b, d - 1)) !== -1;) {
      if(this.splice(d, 1), d === 0) {
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
    for(var d = b.length, a = 0, c;a < d;a++) {
      (c = this.indexOf(b[a])) !== -1 && this.splice(c, 1)
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
  Array.prototype.addAt = function(b, d) {
    this.splice(b, 0, d);
    return d
  }
}
if(!Array.prototype.pushList) {
  Array.prototype.pushList = function(b) {
    return b.length === 0 ? this.length : Array.prototype.push.apply(this, b)
  }
}
if(!Array.prototype.pushListAt) {
  Array.prototype.pushListAt = function(b, d) {
    if(d.length === 0) {
      return this.length
    }
    var a = [b, 0];
    Array.prototype.push.apply(a, d);
    Array.prototype.splice.apply(this, a);
    return this.length
  }
}
;(function() {
  var b = Array.prototype;
  if(!b.indexOf) {
    b.indexOf = function(b) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var a = Object(this), c = a.length >>> 0;
      if(c === 0) {
        return-1
      }
      var e = 0;
      arguments.length > 0 && (e = Number(arguments[1]), e !== e ? e = 0 : e !== 0 && e !== 1 / 0 && e !== -(1 / 0) && (e = (e > 0 || -1) * Math.floor(Math.abs(e))));
      if(e >= c) {
        return-1
      }
      for(e = e >= 0 ? e : Math.max(c - Math.abs(e), 0);e < c;e++) {
        if(e in a && a[e] === b) {
          return e
        }
      }
      return-1
    }
  }
  if(!b.lastIndexOf) {
    b.lastIndexOf = function(b) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var a = Object(this), c = a.length >>> 0;
      if(c === 0) {
        return-1
      }
      var e = c;
      arguments.length > 1 && (e = Number(arguments[1]), e !== e ? e = 0 : e !== 0 && e !== 1 / 0 && e !== -(1 / 0) && (e = (e > 0 || -1) * Math.floor(Math.abs(e))));
      for(c = e >= 0 ? Math.min(e, c - 1) : c - Math.abs(e);c >= 0;c--) {
        if(c in a && a[c] === b) {
          return c
        }
      }
      return-1
    }
  }
  if(!b.filter) {
    b.filter = function(b, a) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var c = Object(this), e = c.length >>> 0;
      if(typeof b !== "function") {
        throw new TypeError;
      }
      for(var k = [], g = 0;g < e;g++) {
        if(g in c) {
          var f = c[g];
          b.call(a, f, g, c) && k.push(f)
        }
      }
      return k
    }
  }
  if(!b.forEach) {
    b.forEach = function(b, a) {
      var c, e = Object(this), k = e.length >>> 0, g = 0;
      if(!b || !b.call) {
        throw new TypeError;
      }
      for(a && (c = a);g < k;) {
        var f = String(g);
        e.hasOwnProperty(f) && (f = e[f], b.call(c, f, g, e));
        g++
      }
    }
  }
  if(!b.every) {
    b.every = function(b, a) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var c = Object(this), e = c.length >>> 0;
      if(typeof b !== "function") {
        throw new TypeError;
      }
      for(var k = 0;k < e;k++) {
        if(k in c && !b.call(a, c[k], k, c)) {
          return!1
        }
      }
      return!0
    }
  }
  if(!b.map) {
    b.map = function(b, a) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var c = Object(this), e = c.length >>> 0;
      if(typeof b !== "function") {
        throw new TypeError;
      }
      for(var k = Array(e), g = 0;g < e;g++) {
        g in c && (k[g] = b.call(a, c[g], g, c))
      }
      return k
    }
  }
  if(!b.some) {
    b.some = function(b, a) {
      if(this === void 0 || this === null) {
        throw new TypeError;
      }
      var c = Object(this), e = c.length >>> 0;
      if(typeof b !== "function") {
        throw new TypeError;
      }
      for(var k = 0;k < e;k++) {
        if(k in c && b.call(a, c[k], k, c)) {
          return!0
        }
      }
      return!1
    }
  }
  if(!b.reduce) {
    b.reduce = function(b) {
      var a, c = this.length, e;
      if(typeof b !== "function") {
        throw new TypeError("First argument is not callable");
      }
      if((c == 0 || c === null) && arguments.length <= 1) {
        throw new TypeError("Array length is 0 and no second argument");
      }
      arguments.length <= 1 ? (e = this[0], a = 1) : e = arguments[1];
      for(a = a || 0;a < c;++a) {
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
      var a = Object(this), c = a.length >>> 0;
      if(typeof b !== "function") {
        throw new TypeError;
      }
      if(c === 0 && arguments.length === 1) {
        throw new TypeError;
      }
      c -= 1;
      var e;
      if(arguments.length >= 2) {
        e = arguments[1]
      }else {
        do {
          if(c in this) {
            e = this[c--];
            break
          }
          if(--c < 0) {
            throw new TypeError;
          }
        }while(1)
      }
      for(;c >= 0;) {
        c in a && (e = b.call(void 0, e, a[c], c, a)), c--
      }
      return e
    }
  }
})();
(function() {
  var b = {}, d = window.console, a = [], c;
  c = d && d.log ? function(e) {
    d.log.apply(d, arguments)
  } : function(e) {
    a.push.apply(a, arguments)
  };
  goog.exportSymbol("Util", b);
  goog.exportSymbol("echo", c);
  b.isNull = function(e) {
    return e == null
  };
  b.isNotNull = function(e) {
    return e != null
  };
  b.isNullAnd = function() {
    for(var e = 0, a = arguments.length;e < a;e++) {
      if(arguments[e] != null) {
        return!1
      }
    }
    return!0
  };
  b.isNullOr = function() {
    for(var e = 0, a = arguments.length;e < a;e++) {
      if(arguments[e] == null) {
        return!0
      }
    }
    return!1
  };
  b.isNotNullAnd = function() {
    for(var e = 0, a = arguments.length;e < a;e++) {
      if(arguments[e] == null) {
        return!1
      }
    }
    return!0
  };
  b.isNotNullOr = function() {
    for(var e = 0, a = arguments.length;e < a;e++) {
      if(arguments[e] != null) {
        return!0
      }
    }
    return!1
  };
  b.ifNull = function(e, a, c) {
    return e == null ? a : c === void 0 ? e : c
  };
  b.ifTrue = function(e, a, c) {
    return e === !0 ? a : c === void 0 ? e : c
  };
  b.isFunction = function(e) {
    return typeof e == "function"
  };
  b.isString = function(e) {
    return typeof e == "string"
  };
  b.isNumber = function(e) {
    return typeof e == "number"
  };
  b.isObject = function(e) {
    return typeof e == "object"
  };
  b.isArray = function(e) {
    var a = Array.isArray;
    return e && typeof e == "object" && (a && a(e) || typeof e.length == "number" && e.hasOwnProperty("length") && !e.propertyIsEnumerable("length"))
  };
  b.split = function(e, a, c, b) {
    if(typeof e !== "string") {
      return[]
    }
    a = a === void 0 ? /\s+/ : a;
    c = c === void 0 ? function(e) {
      return!!e
    } : c;
    b = b === void 0 ? function(e) {
      return $.trim(e)
    } : b;
    e = e.split(a);
    b && (e = e.map(b));
    c && (e = e.filter(c));
    return e
  };
  b.isEmpty = function(e) {
    if(!e) {
      return!0
    }
    if(typeof e != "object") {
      return!1
    }
    for(var a in e) {
      if(e.hasOwnProperty(a)) {
        return!1
      }
    }
    return!0
  };
  b.isEmptyObj = function(e) {
    if(e == null) {
      return!0
    }
    if(typeof e != "object") {
      return!1
    }
    for(var a in e) {
      if(e.hasOwnProperty(a)) {
        return!1
      }
    }
    return!0
  };
  b.isNotEmptyObj = function(e) {
    if(e == null || typeof e != "object") {
      return!1
    }
    for(var a in e) {
      if(e.hasOwnProperty(a)) {
        return!0
      }
    }
    return!1
  };
  b.isEmptyString = function(e) {
    return e == null || e === ""
  };
  b.isEmptyArray = function(e) {
    if(e == null) {
      return!0
    }
    if(!b.isArray(e)) {
      return!1
    }
    for(var a = 0, c = e.length;a < c;a++) {
      if(e.hasOwnProperty(a)) {
        return!1
      }
    }
    return!0
  };
  b.emptyObject = function(e) {
    if(!e || typeof e != "object") {
      return e
    }
    if(b.isArray(e)) {
      return e.length = 0, e
    }
    for(var a in e) {
      e.hasOwnProperty(a) && delete e[a]
    }
    return e
  };
  b.deleteUndefined = function(e) {
    if(!e || typeof e != "object") {
      return e
    }
    var a;
    if(b.isArray(e)) {
      for(a = e.length - 1;a > -1;a--) {
        e.hasOwnProperty(a) && e[a] === void 0 && e.splice(a, 1)
      }
      return e
    }
    for(a in e) {
      e.hasOwnProperty(a) && e[a] === void 0 && delete e[a]
    }
    return e
  };
  b.deepClone = function(e) {
    if(!e) {
      return e
    }
    switch(typeof e) {
      case "boolean":
      ;
      case "number":
      ;
      case "string":
      ;
      case "function":
        return e
    }
    if(b.isArray(e)) {
      for(var a = [], c = 0, f = e.length;c < f;c++) {
        c in e && (a[c] = b.deepClone(e[c]))
      }
      return a
    }
    a = {};
    for(c in e) {
      e.hasOwnProperty(c) && (a[c] = b.deepClone(e[c]))
    }
    return a
  };
  b.clone = function(e, a, c) {
    if(!e) {
      return e
    }
    switch(typeof e) {
      case "boolean":
      ;
      case "number":
      ;
      case "string":
      ;
      case "function":
        return e
    }
    if(b.isArray(e)) {
      if(c === 1) {
        return Array.prototype.slice.call(e)
      }
      for(var f = [], d = e.length, i = 0, c = c !== void 0 ? c - 1 : void 0;i < d;i++) {
        i in e && (f[i] = b.clone(e[i], a, c))
      }
      return f
    }
    f = {};
    d = b.isEmptyObj(a);
    if(c === 1) {
      if(d) {
        for(i in e) {
          e.hasOwnProperty(i) && (f[i] = e[i])
        }
      }else {
        for(i in a) {
          a.hasOwnProperty(i) && e.hasOwnProperty(i) && (f[i] = e[i])
        }
      }
    }else {
      if(c = c !== void 0 ? c - 1 : void 0, d) {
        for(i in e) {
          e.hasOwnProperty(i) && (f[i] = b.clone(e[i], void 0, c))
        }
      }else {
        for(i in a) {
          a.hasOwnProperty(i) && e.hasOwnProperty(i) && (f[i] = b.clone(e[i], void 0, c))
        }
      }
    }
    return f
  };
  b.toArray = function(e) {
    var a = [], c;
    for(c in e) {
      e.hasOwnProperty(c) && a.push(e[c])
    }
    return a
  };
  b.toArrayWithKey = function(e) {
    var a = [], c;
    for(c in e) {
      e.hasOwnProperty(c) && a.push({key:c, val:e[c]})
    }
    return a
  };
  b.random = function(e) {
    return Math.floor(e * Math.random())
  };
  b.bound = function(e, a, c) {
    isNaN(c) || (e = Math.min(e, c));
    isNaN(a) || (e = Math.max(e, a));
    return e
  };
  b.callFn = function() {
    return arguments.length <= 3 ? arguments[1].call(arguments[0], arguments[2]) : arguments[1].apply(arguments[0], Array.prototype.slice.call(arguments, 2))
  };
  b.formatNumber = function(a, c, b, f, d) {
    var b = b === void 0 ? "&#8361; " : b, c = isNaN(c) ? 0 : c, f = f === void 0 ? "." : f, d = d === void 0 ? "," : d, i = a < 0 ? "-" : "", j = parseInt(a = Math.abs(+a || 0).toFixed(c), 10) + "", m = j.length, m = m > 3 ? m % 3 : 0;
    return b + i + (m ? j.substr(0, m) + d : "") + j.substr(m).replace(/(\d{3})(?=\d)/g, "$1" + d) + (c ? f + Math.abs(a - j).toFixed(c).slice(2) : "")
  };
  b.getBodyScroll = function() {
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
  b.hasClass = function(a, c) {
    if(a == null || c == null) {
      return!1
    }
    if(a.className === c) {
      return!0
    }
    if(a.className) {
      for(var g = a.classList ? a.classList : b.split(a.className), f = 0, d = g.length;f < d;f++) {
        if(g[f] === c) {
          return!0
        }
      }
    }
    return!1
  };
  b.hasTagAndClass = function(a, c, g) {
    if(a == null || c == null || g == null) {
      return!1
    }
    if(a.tagName === c) {
      if(a.className === g) {
        return!0
      }
      if(a.className && a.className.length >= g.length) {
        for(var a = a.classList ? a.classList : b.split(a.className), c = 0, f = a.length;c < f;c++) {
          if(a[c] === g) {
            return!0
          }
        }
      }
    }
    return!1
  };
  b.closest = function(a, c, g) {
    if(b.hasClass(a, c)) {
      return a
    }
    for(a = a.parentNode;b.isNotNull(a) && a !== g;a = a.parentNode) {
      if(b.hasClass(a, c)) {
        return a
      }
    }
  };
  b.closestWithTag = function(a, c, g, f) {
    if(b.hasTagAndClass(a, c, g)) {
      return a
    }
    for(a = a.parentNode;b.isNotNull(a) && a !== f;a = a.parentNode) {
      if(b.hasTagAndClass(a, c, g)) {
        return a
      }
    }
  };
  b.findFirstByClass = function(a, c) {
    if(a != null) {
      if(b.hasClass(a, c)) {
        return a
      }
      for(var g = 0, f = a.childNodes, d = f.length, i;g < d;g++) {
        if(b.isNotNull(f[g]) && (i = b.findFirstByClass(f[g], c)) !== void 0) {
          return i
        }
      }
    }
  };
  b.findFirstByTagAndClass = function(a, c, g) {
    if(a != null) {
      if(b.hasTagAndClass(a, c, g)) {
        return a
      }
      for(var f = 0, a = a.childNodes, d = a.length, i;f < d;f++) {
        if(b.isNotNull(a[f]) && (i = b.findFirstByTagAndClass(a[f], c, g)) !== void 0) {
          return i
        }
      }
    }
  };
  b.findByClass = function(a, c, g) {
    g === void 0 && (g = []);
    if(a == null) {
      return g
    }
    b.hasClass(a, c) && g.push(a);
    for(var f = 0, a = a.childNodes, d = a.length;f < d;f++) {
      b.isNotNull(a[f]) && b.findByClass(a[f], c, g)
    }
    return g
  };
  b.findByTagAndClass = function(a, c, g, f) {
    f === void 0 && (f = []);
    if(a == null) {
      return f
    }
    b.hasTagAndClass(a, c, g) && f.push(a);
    for(var d = 0, a = a.childNodes, i = a.length;d < i;d++) {
      b.isNotNull(a[d]) && b.findByTagAndClass(a[d], c, g, f)
    }
    return f
  };
  b.getHead = function() {
    return document.head ? document.head : document.getElementsByTagName("head")[0]
  };
  b.appendTag = function(a, c) {
    return a.appendChild(document.createElement(c))
  };
  b.appendHTML = function(a, c) {
    var b = document.createElement("div"), f, d = 0, i = [];
    b.innerHTML = c;
    for(f = b.childNodes.length;d < f;d++) {
      i.push(a.appendChild(b.firstChild))
    }
    return i
  };
  b.createStyle = function(a) {
    a == null && (a = "");
    var c = document.createElement("style");
    c.type = "text/css";
    c.rel = "stylesheet";
    c.styleSheet ? c.styleSheet.cssText = a : c.appendChild(document.createTextNode(a));
    b.getHead().appendChild(c);
    return c
  };
  b.removeStyle = function(a) {
    a != null && a.parentNode != null && b.getHead().removeChild(a)
  };
  b.setStyle = function(a, c) {
    return a == null ? "" : a.styleSheet ? a.styleSheet.cssText = c : a.childNodes[0].nodeValue = c
  };
  b.appendStyle = function(a, c) {
    return a == null ? "" : a.styleSheet ? a.styleSheet.cssText += c : a.childNodes[0].nodeValue += c
  };
  b.getStyle = function(a) {
    return a == null ? "" : a.styleSheet ? a.styleSheet.cssText : a.childNodes[0].nodeValue
  };
  b.appendScript = function(a) {
    var c = document.createElement("script");
    c.type = "text/javascript";
    c.text ? c.text = a : c.innerHTML = a;
    b.getHead().appendChild(c);
    return c
  };
  b.appendScriptFile = function(a) {
    document.write('<script type="text/javascript" src="' + a + '"><\/script>')
  };
  b.outerHTML = function(a) {
    if(a.outerHTML === void 0) {
      var c = document.createElement("div");
      c.appendChild(a.cloneNode(!0));
      return c.innerHTML
    }
    return a.outerHTML
  };
  b.index = function(a) {
    for(var c = 0;(a = a.previousSibling) != null;) {
      ++c
    }
    return c
  };
  b.contains = function(a, c, b) {
    for(;c != null;) {
      if(c === a) {
        return!0
      }
      if(c === b) {
        break
      }
      c = c.parentNode
    }
    return!1
  };
  b.areEqualArrays = function(a, c) {
    if(a == null || c == null) {
      return!1
    }
    if(a === c) {
      return!0
    }
    if(a.length !== c.length) {
      return!1
    }
    for(var b = 0, f = a.length;b < f;b++) {
      if(a.hasOwnProperty(b) && !c.hasOwnProperty(b) || c.hasOwnProperty(b) && !a.hasOwnProperty(b) || a[b] !== c[b]) {
        return!1
      }
    }
    return!0
  };
  b.areEqualObjects = function(a, c) {
    if(a == null || c == null) {
      return!1
    }
    if(a === c) {
      return!0
    }
    if(typeof a !== "object" || typeof c !== "object") {
      return!1
    }
    for(var b in a) {
      if(a.hasOwnProperty(b) && (!c.hasOwnProperty(b) || a[b] !== c[b])) {
        return!1
      }
    }
    for(b in c) {
      if(c.hasOwnProperty(b) && (!a.hasOwnProperty(b) || a[b] !== c[b])) {
        return!1
      }
    }
    return!0
  };
  b.areEqualComplex = function(a, c, g) {
    if(a == null || c == null) {
      return!1
    }
    if(a === c) {
      return!0
    }
    var f = g.length, d = g[0];
    if(f === 1) {
      return d === "array" ? b.areEqualArrays(a, c) : b.areEqualObjects(a, c)
    }
    if(f > 1) {
      g = g.slice(1);
      f = 0;
      if(d === "array") {
        if(a.length !== c.length) {
          return!1
        }
        for(d = a.length;f < d;f++) {
          if(!c.hasOwnProperty(f) || !b.areEqualComplex(a[f], c[f], g)) {
            return!1
          }
        }
      }else {
        for(f in a) {
          if(a.hasOwnProperty(f) && (!c.hasOwnProperty(f) || !b.areEqualComplex(a[f], c[f], g))) {
            return!1
          }
        }
        for(f in c) {
          if(c.hasOwnProperty(f) && (!a.hasOwnProperty(f) || !b.areEqualComplex(a[f], c[f], g))) {
            return!1
          }
        }
      }
      return!0
    }
  };
  b.typeCheck = function(a, c, b, f, d) {
    if(b && c === void 0 || f && c === null) {
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
    if(d) {
      return!1
    }
    throw new TypeError("object is not a " + a + ", but is a " + typeof c);
  };
  b.sprint = function(a, c, d, f) {
    b.typeCheck("string", a);
    b.typeCheck("object", c);
    b.typeCheck("string", d, !0);
    b.typeCheck("string", f, !0);
    var h;
    d === void 0 && (d = "%");
    f === void 0 && (f = "%");
    for(h in c) {
      c.hasOwnProperty(h) && (a = a.replace(RegExp(d + h + f, "gm"), c[h]))
    }
    return a
  };
  b.tagReplaces = {"&":"&amp;", "<":"&lt;", ">":"&gt;"};
  b.replaceTag = function(a) {
    return b.tagReplaces[a] || a
  };
  b.escapeHtmlTags = function(a) {
    return a.replace(/[&<>]/g, b.replaceTag)
  };
  b.escapeRegExp = function(a) {
    return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
  };
  b.strReplace = function(a, c) {
    var d, f = [];
    for(d in c) {
      c.hasOwnProperty(d) && f.push(b.escapeRegExp(d))
    }
    return a.replace(RegExp("(" + f.join("|") + ")", "gm"), function(a) {
      return c[a]
    })
  };
  b.calCheckSize = function() {
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
  b.which = function(a) {
    for(var c = {}, d = 0, f;d < a.length;d++) {
      if(f = a[d].toLowerCase(), f === "number") {
        for(f = 48;f <= 57;f++) {
          c[f] = !0
        }
        for(f = 96;f <= 105;f++) {
          c[f] = !0
        }
      }else {
        if(f === "alphabet") {
          for(f = 65;f <= 90;f++) {
            c[f] = !0
          }
        }else {
          if(f === "arrow") {
            for(f = 37;f <= 40;f++) {
              c[f] = !0
            }
          }else {
            f.length > 1 && (f = f.replace(/\s/g, "")), f.length >= 3 && (f = f.replace(/numpad|num/g, "n").replace(/korean|kor/g, "kr")), c[b.keyMapKeydown[f]] = !0
          }
        }
      }
    }
    return c
  };
  b.keyMapKeydown = {backspace:8, tab:9, enter:13, shift:16, control:17, ctrl:17, alt:18, pause:19, "break":19, capslock:20, escape:27, esc:27, space:32, " ":32, pageup:33, pgup:33, pagedown:34, pgdown:34, pgdn:34, end:35, home:36, leftarrow:37, left:37, uparrow:38, up:38, rightarrow:39, right:39, downarrow:40, down:40, insert:45, ins:45, "delete":46, del:46, 0:48, ")":48, 1:49, "!":49, 2:50, "@":50, 3:51, "#":51, 4:52, $:52, 5:53, "%":53, 6:54, "^":54, 7:55, "&":55, 8:56, "*":56, 9:57, "(":57, a:65, 
  b:66, c:67, d:68, e:69, f:70, g:71, h:72, i:73, j:74, k:75, l:76, m:77, n:78, o:79, p:80, q:81, r:82, s:83, t:84, u:85, v:86, w:87, x:88, y:89, z:90, n0:96, n1:97, n2:98, n3:99, n4:100, n5:101, n6:102, n7:103, n8:104, n9:105, "n*":106, "n+":107, "n-":109, "n.":110, "n/":111, f1:112, f2:113, f3:114, f4:115, f5:116, f6:117, f7:118, f8:119, f9:120, f10:121, f11:122, f12:123, numlock:144, scrolllock:145, mute:173, volumedown:174, volumeup:175, ":":186, ";":186, "=":187, "+":187, ",":188, "<":188, "-":189, 
  _:189, ".":190, ">":190, "/":191, "?":191, "`":192, "~":192, "[":219, "{":219, "\\":220, "|":220, "]":221, "}":221, "'":222, '"':222, kr:229};
  b.printEventPos = function(a) {
    b.print("client: (" + a.clientX + ", " + a.clientY + "), layer: (" + a.layerX + ", " + a.layerY + "), offset: (" + a.offsetX + ", " + a.offsetY + "), page: (" + a.pageX + ", " + a.pageY + "), screen: (" + a.screenX + ", " + a.screenY + "), xy: (" + a.x + ", " + a.y + ")")
  };
  b.print = function(a) {
    if(c) {
      if(arguments.length === 1) {
        c(arguments[0])
      }else {
        for(var b = 0, d = arguments.length;b < d;b++) {
          c(arguments[b])
        }
      }
    }
  };
  b.open = function(a) {
    var c = {url:"about:blank", name:"_blank", channelmode:"no", directories:"yes", fullscreen:"no", height:void 0, left:void 0, location:"yes", menubar:"yes", resizable:"yes", scrollbars:"yes", status:"yes", titlebar:"yes", toolbar:"yes", top:void 0, width:void 0, replace:void 0}, d;
    if(b.isNotNull(a)) {
      for(d in c) {
        c.hasOwnProperty(d) && (c[d] = a[d])
      }
    }
    a = b.ifNull(c.height, "", "height=" + c.height + ", ") + b.ifNull(c.left, "", "left=" + c.left + ", ") + b.ifNull(c.top, "", "top=" + c.top + ", ") + b.ifNull(c.width, "", "width=" + c.width + ", ") + "channelmode=" + c.channelmode + ", directories=" + c.directories + ", fullscreen=" + c.fullscreen + ", location=" + c.location + ", menubar=" + c.menubar + ", resizable=" + c.resizable + ", scrollbars=" + c.scrollbars + ", status=" + c.status + ", titlebar=" + c.titlebar + ", toolbar=" + c.toolbar;
    return b.isNull(c.replace) ? window.open(c.url, c.name, a) : window.open(c.url, c.name, a, c.replace)
  }
})();
(function() {
  function b() {
  }
  function d(c, e) {
    var c = c || 0, b, g;
    if(c !== 0) {
      for(b in this) {
        if(this.hasOwnProperty(b)) {
          if(g = this[b]) {
            if(g.dispose) {
              g.dispose(c - 1, e)
            }else {
              if(e && typeof g == "object") {
                a(g) ? g.length = 0 : d.call(g, c - 1, e)
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
  goog.exportSymbol("JGM.lang.Disposable", b);
  goog.exportProperty(b.prototype, "dispose", d);
  var a = goog.getObjectByName("Util").isArray
})();
(function() {
  var b = {}, d = goog.getObjectByName("Util");
  goog.exportSymbol("Util$", b);
  b.is$ = function(a) {
    return a instanceof jQuery ? !0 : !1
  };
  b.safe$ = function(a) {
    return a instanceof jQuery ? a : $(a)
  };
  b.unbindRemove = function(a) {
    a.unbind().remove()
  };
  jQuery.fn.getBoundingRect = function() {
    var a = this.offset();
    return{left:a.left, top:a.top, width:this.outerWidth(), height:this.outerHeight()}
  };
  jQuery.fn.containsEvent = function(a) {
    if(this.length === 0) {
      return!1
    }
    var c, e, b, d;
    if(this.length <= 1) {
      return c = this.getBoundingRect(), b = a.pageX, d = a.pageY, b >= c.left && b <= c.left + c.width && d >= c.top && d <= c.top + c.height
    }
    e = !1;
    this.each(function() {
      c = $(this).getBoundingRect();
      b = a.pageX;
      d = a.pageY;
      if(b >= c.left && b <= c.left + c.width && d >= c.top && d <= c.top + c.height) {
        return e = !0, !1
      }
    });
    return e
  };
  b.baseurlOfHeadScript = function(a) {
    var c = $(document.getElementsByTagName("head")[0]).find("script[src$='" + a + "']").attr("src");
    return c.substring(0, c.indexOf(a))
  };
  b.calScrollbarDims = function(a) {
    if(d.isNotNull(window.__SCROLLBAR_DIM__)) {
      return window.__SCROLLBAR_DIM__
    }
    if(d.isNotNull(window.opener) && d.isNotNull(window.opener.__SCROLLBAR_DIM__)) {
      return window.opener.__SCROLLBAR_DIM__
    }
    var a = b.safe$(a), c;
    a[0].innerHTML = "<div id='scrollbardim' style='position:absolute;top:-10000px;left:-10000px;width:100px;height:100px;overflow:scroll;'></div>";
    c = $(document.getElementById("scrollbardim"));
    c = {w:c.width() - c[0].clientWidth, h:c.height() - c[0].clientHeight};
    a[0].innerHTML = "";
    return window.__SCROLLBAR_DIM__ = c
  }
})();
(function() {
  function b() {
  }
  JGM.events = {};
  JGM.events.EventDispatcher = {};
  goog.exportSymbol("JGM.events.EventDispatcher", b);
  goog.inherits(b, JGM.lang.Disposable);
  var d = b.prototype, a = d.dispose;
  d.dispose = function() {
    a.call(this, -1, !0)
  };
  d.addEventListener = function(a, e) {
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
  d.removeEventListener = function(a, e) {
    if(this._handlers) {
      var a = (a + "").toLowerCase(), b = this._handlers;
      if(b.hasOwnProperty(a)) {
        for(var d = b[a], f = -1;(f = d.indexOf(e, f + 1)) !== -1;) {
          d.splice(f, 1)
        }
        d.length === 0 && delete b[a]
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
    var e = this._handlers, b = (a.type + "").toLowerCase();
    a.target = this;
    if(e.hasOwnProperty(b)) {
      for(var e = e[b], b = 0, d = e.length, f;b < d && !a.stopPropagation;b++) {
        f = e[b], f.handleEvent ? f.handleEvent(a) : f.call(this, a)
      }
    }
    if(a.cancelable && a.defaultPrevented) {
      return!1
    }
    a.defaultAction && a.defaultAction(this);
    return!0
  };
  JGM.events.EventDispatcher = b
})();
(function() {
  var b = goog.getObjectByName("jQuery"), d = goog.getObjectByName("Util"), a = goog.getObjectByName("Util$");
  goog.exportSymbol("JGM", JGM);
  JGM.version = "1.2.3";
  JGM.__map_a__ = {ArrayExtIE:{filename:"array_ext_ie.js", readyState:"notloaded", required:!1, cacheModule:!1}, Cache:{filename:"jgrid_cache.js", readyState:"notloaded", required:!0, cacheModule:!0}, Cell:{filename:"jgrid_cell.js", readyState:"notloaded", required:!0, cacheModule:!1}, CheckManager:{filename:"jgrid_checkmanager.js", readyState:"notloaded", required:!1, cacheModule:!0}, ColDefManager:{filename:"jgrid_coldefmanager.js", readyState:"notloaded", required:!0, cacheModule:!0}, ColGroup:{filename:"jgrid_colgroup.js", 
  readyState:"notloaded", required:!1, cacheModule:!0}, ColHeader:{filename:"jgrid_colheader.js", readyState:"notloaded", required:!0, cacheModule:!0}, Collapser:{filename:"jgrid_collapser.js", readyState:"notloaded", required:!1, cacheModule:!0}, DataManager:{filename:"jgrid_datamanager.js", readyState:"notloaded", required:!0, cacheModule:!0}, DataCreator:{filename:"jgrid_datacreator.js", readyState:"notloaded", required:!1, cacheModule:!0}, EditManager:{filename:"jgrid_editmanager.js", readyState:"notloaded", 
  required:!0, cacheModule:!0}, Editor:{filename:"jgrid_editmanager.js", readyState:"notloaded", required:!0, cacheModule:!0}, EngineExt:{filename:"engine_ext.js", readyState:"notloaded", required:!0, cacheModule:!1}, EventManager:{filename:"jgrid_eventmanager.js", readyState:"notloaded", required:!0, cacheModule:!0}, Footer:{filename:"jgrid_footer.js", readyState:"notloaded", required:!1, cacheModule:!0}, HeaderTree:{filename:"jgrid_headertree.js", readyState:"notloaded", required:!1, cacheModule:!0}, 
  Grid:{filename:"jgrid_grid.js", readyState:"notloaded", required:!0, cacheModule:!0}, GridManager:{filename:"jgrid_manager.js", readyState:"loaded", required:!0, cacheModule:!1}, MenuBar:{filename:"jgrid_menubar.js", readyState:"notloaded", required:!0, cacheModule:!0}, ViewportManager:{filename:"jgrid_viewportmanager.js", readyState:"notloaded", required:!0, cacheModule:!0}, SelectionManager:{filename:"jgrid_selectionmanager.js", readyState:"notloaded", required:!1, cacheModule:!0}, SearchManager:{filename:"jgrid_searchmanager.js", 
  readyState:"notloaded", required:!1, cacheModule:!0}, TooltipManager:{filename:"jgrid_tooltipmanager.js", readyState:"notloaded", required:!1, cacheModule:!0}, Tracer:{filename:"tracer.js", readyState:"notloaded", required:!1, cacheModule:!1}, Tree:{filename:"tree.js", readyState:"notloaded", required:!1, cacheModule:!0}, TreeNode:{filename:"tree.js", readyState:"notloaded", required:!1, cacheModule:!1}, Util:{filename:"util.js", readyState:"notloaded", required:!0, cacheModule:!1}, Util$:{filename:"util_jquery.js", 
  readyState:"notloaded", required:!0, cacheModule:!1}};
  JGM.create = function(a, e) {
    d.isNull(e) && (e = {});
    if(this.__map_a__[a].cacheModule) {
      e.mid = "JGM" + this.m.length++;
      var b = this[a].getInstance(e);
      this.m.hasOwnProperty(a) || (this.m[a] = {});
      this.m[a][b.mid] = b;
      a === "Grid" && d.isNotNull(b.name) && (this.gridMap[b.name] = b);
      return b
    }else {
      return this[a].getInstance(e)
    }
  };
  JGM._destroy = function(c, e) {
    var b, g, f, h;
    for(g in e) {
      if(e.hasOwnProperty(g)) {
        switch(g) {
          case "map":
            b = e[g];
            if(d.isString(b)) {
              b = d.split(b);
              h = b.length;
              for(f = 0;f < h;f++) {
                JGM.__deleteMap_l__(c, b[f])
              }
            }else {
              if(b instanceof Array) {
                h = b.length;
                for(f = 0;f < h;f++) {
                  d.emptyObject(b[f])
                }
              }else {
                d.emptyObject(b)
              }
            }
            break;
          case "array":
            b = e[g];
            if(d.isString(b)) {
              b = d.split(b);
              h = b.length;
              for(f = 0;f < h;f++) {
                JGM.__deleteArray_r__(c, b[f])
              }
            }else {
              b.length = 0
            }
            break;
          case "$":
            b = e[g];
            if(d.isString(b)) {
              b = d.split(b);
              h = b.length;
              for(f = 0;f < h;f++) {
                JGM.__delete$_n__(c, b[f])
              }
            }else {
              if(b instanceof Array) {
                h = b.length;
                for(f = 0;f < h;f++) {
                  a.unbindRemove(b[f])
                }
              }else {
                a.unbindRemove(b)
              }
            }
            break;
          case "style":
            b = e[g];
            if(d.isString(b)) {
              b = d.split(b);
              h = b.length;
              for(f = 0;f < h;f++) {
                JGM.__deleteStyle_o__(c, b[f])
              }
            }else {
              if(b instanceof Array) {
                h = b.length;
                for(f = 0;f < h;f++) {
                  d.removeStyle(b[f])
                }
              }else {
                d.removeStyle(b)
              }
            }
            break;
          case "property":
            b = e[g];
            if(d.isString(b)) {
              b = d.split(b);
              h = b.length;
              for(f = 0;f < h;f++) {
                delete c[b[f]]
              }
            }else {
              if(b instanceof Array) {
                h = b.length;
                for(f = 0;f < h;f++) {
                  delete c[b[f]]
                }
              }
            }
            break;
          case "module":
            b = e[g];
            if(d.isString(b)) {
              b = d.split(b);
              h = b.length;
              for(f = 0;f < h;f++) {
                JGM.__deleteModule_p__(c, b[f])
              }
            }else {
              if(b instanceof Array) {
                h = b.length;
                for(f = 0;f < h;f++) {
                  b[f].destroy()
                }
              }else {
                b.destroy()
              }
            }
            break;
          case "name":
            c.hasOwnProperty("mid") && (JGM.__remove_f__(e[g], c.mid), delete c.mid);
            break;
          case "path":
            c.hasOwnProperty("grid") && c.grid.hasOwnProperty(e[g]) && (delete c.grid[e[g]], delete c.grid)
        }
      }
    }
    d.emptyObject(c)
  };
  JGM.__deleteMap_l__ = function(a, e) {
    a.hasOwnProperty(e) && (d.emptyObject(a[e]), delete a[e])
  };
  JGM.__deleteArray_r__ = function(a, e) {
    if(a.hasOwnProperty(e)) {
      a[e].length = 0, delete a[e]
    }
  };
  JGM.__delete$_n__ = function(c, e) {
    c.hasOwnProperty(e) && (a.unbindRemove(c[e]), delete c[e])
  };
  JGM.__deleteStyle_o__ = function(a, e) {
    a.hasOwnProperty(e) && (d.removeStyle(a[e]), delete a[e])
  };
  JGM.__deleteModule_p__ = function(a, e) {
    a.hasOwnProperty(e) && (a[e].destroy(), delete a[e])
  };
  JGM.__remove_f__ = function(a, e) {
    delete this.m[a][e]
  };
  JGM.grid = function(a) {
    return this.create("Grid", a)
  };
  JGM.gridMap = {};
  JGM.getGrid = function(a) {
    if(d.isNotNull(a) && this.gridMap.hasOwnProperty(a)) {
      return this.gridMap[a]
    }
  };
  JGM._add = function(a, e) {
    d.isNotNull(e) && (this[a] = e);
    this.__map_a__[a].readyState = "loaded";
    b("body").trigger({type:"moduleload.Grid", modulename:a, readyState:"loaded"})
  };
  JGM.__has_c__ = function(a) {
    return this.__map_a__[a].readyState === "loaded"
  };
  JGM.__load_d__ = function(c, e) {
    var k, g = a.baseurlOfHeadScript(this.GridManager.filename), f, h, i, j, m, l;
    if(c instanceof Array) {
      k = [];
      h = c.length;
      for(f = 0;f < h;f++) {
        i = g + this[c[f]].filename;
        j = !1;
        for(m = 0;m < k.length;m++) {
          if(k[m] === i) {
            j = !0;
            break
          }
        }
        !j && !this.__has_c__(c[f]) && k.push(i)
      }
      d.isFunction(e) && (l = function() {
        for(var a = 0;a < c.length;a++) {
          if(!JGM.__has_c__(c[a])) {
            return!1
          }
        }
        return!0
      }, b("body").bind("moduleload.Grid", function() {
        l() && (b("body").unbind("moduleload.Grid"), e())
      }));
      k.length === 0 && e();
      for(f = 0;f < k.length;f++) {
        d.appendScriptFile(k[f])
      }
    }else {
      this.__has_c__(c) && d.isFunction(e) && e(), k = g + this.__map_a__[c].filename, d.isFunction(e) && b("body").bind("moduleload.Grid", function(a) {
        a.modulename === c && a.readyState === "loaded" && (b("body").unbind("moduleload.Grid"), e())
      }), d.appendScriptFile(k)
    }
  };
  JGM.start = function(a, e, b) {
    for(var g = [], f = 3, h = arguments.length, i = JGM.__map_a__;f < h;f++) {
      g.push(arguments[f])
    }
    /MSIE (\d+\.\d+);/.test(navigator.userAgent) && g.push("ArrayExtIE");
    d.isNotNull(a.CheckManager) && g.push("CheckManager");
    d.isNotNull(a.Collapser) && g.push("Collapser");
    d.isNotNull(a.EditManager) && g.push("EditManager");
    h = g.length;
    for(f = 0;f < h;f++) {
      i[g[f]].required = !0
    }
    g = [];
    for(f in i) {
      i.hasOwnProperty(f) && (h = i[f], !d.isFunction(h) && h.readyState === "notloaded" && h.required === !0 && g.push(f))
    }
    this.__load_d__(g, b)
  };
  JGM.__extend_e__ = function(a, e, k) {
    var e = d.ifNull(e, {}), g;
    if(d.isNotNull(k)) {
      for(g in k) {
        k.hasOwnProperty(g) && e.hasOwnProperty(g) && (e[k[g]] = e[g], delete e[g])
      }
    }
    b.extend(!0, a, e);
    b.extend(!0, e, a);
    return e
  };
  JGM.m = {length:0};
  JGM.__CONST_g__ = {__cssUnselectable_a__:"-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-o-user-select:none;user-select:none;", __cssUnselectable_b__:"-webkit-user-drag:none;-moz-user-drag:none;user-drag:none;", __checkboxWidth_c__:void 0, __checkboxHeight_d__:void 0, __radioWidth_e__:void 0, __radioHeight_f__:void 0};
  JGM.__globalEventsBound_h__ = !1;
  JGM.__globalEvents_i__ = {__mousemove_a__:function(a) {
    var e, b = JGM.m.Grid;
    for(e in b) {
      b.hasOwnProperty(e) && b[e]._mousemove(a)
    }
  }, __mouseup_b__:function(a) {
    var e, b = JGM.m.Grid;
    for(e in b) {
      b.hasOwnProperty(e) && b[e]._mouseup(a)
    }
  }, __resize_c__:function(a) {
    var e, b = JGM.m.Grid;
    for(e in b) {
      b.hasOwnProperty(e) && b[e]._resize(a)
    }
  }};
  JGM._bindGlobalEvents = function() {
    if(!this.__globalEventsBound_h__) {
      b(document).bind({mousemove:this.__globalEvents_i__.__mousemove_a__, mouseup:this.__globalEvents_i__.__mouseup_b__}), b(window).resize(this.__globalEvents_i__.__resize_c__), this.__globalEventsBound_h__ = !0
    }
  };
  JGM._unbindGlobalEvents = function() {
    if(this.__globalEventsBound_h__) {
      b(document).unbind({mousemove:this.__globalEvents_i__.__mousemove_a__, mouseup:this.__globalEvents_i__.__mouseup_b__}), b(window).unbind("resize", this.__globalEvents_i__.__resize_c__), this.__globalEventsBound_h__ = !1
    }
  };
  JGM.error = {LENGTH_NOT_EQUAL:"Lengths are not equal", NOT_MODIFIABLE:"Cannot modify value for '%0'.", KEY_UNDEFINED:"Column '%0' is undefined.", BAD_NULL:"Column '%0' cannot be null.", DUP_KEY:"Duplicate column key '%0'.", DUP_ENTRY:"Duplicate entry '%0' for '%1'.", KEY_NOT_FOUND:"'%0' for '%1' doesn't exist in table.", PARSE_ERROR:"Cannot parse '%0' for '%1'.", INVALID_DEFAULT:"Invalid default value '%0' for '%1'.", MULTIPLE_PRI_KEY:"Multiple primary key defined.", DATA_TOO_LONG:"Data '%0' too long for column '%1'. Maximum is %2.", 
  DATA_TOO_SHORT:"Data '%0' too short for column '%1'. Minimum is %2.", WRONG_LENGTH:"Length of data '%0' is not '%1' characters long for column '%2'.", BIGGER_THAN:"Data '%0' too big for column '%1'. Maximum is %2.", SMALLER_THAN:"Data '%0' too small for column '%1'. Minimum is %2.", WRONG_VALUE:"Incorrect value: '%0' for '%1'."}
})();
JGM.core = {};
JGM.core.Grid = {};
(function() {
  function b(a) {
    JGM.core.BaseModule.call(this, a)
  }
  goog.exportSymbol("JGM.core.Grid", b);
  goog.inherits(b, JGM.core.BaseModule);
  b.getInstance = function(a) {
    return new b(a)
  };
  var d = b.prototype;
  d._defaultOptions = function() {
    return{classGrid:"jgrid", border:"1px solid #868686", width:void 0, font:"15px Arial,Helvetica,sans-serif", style:"", borderSide:!0, imageUrl:"../images/", links:{data:"dataMgr.all", datalen:"dataMgr.all.length", shown:"dataMgr.datalist", set:"dataMgr.set", add:"dataMgr.add", addList:"dataMgr.addList", update:"dataMgr.update", updateByKey:"dataMgr.updateByKey", updateList:"dataMgr.updateList", remove:"dataMgr.remove", removeList:"dataMgr.removeList", select:"dataMgr.executeSelect", undo:"dataMgr.undo", 
    redo:"dataMgr.redo", addFilter:"dataMgr.addFilter", removeFilter:"dataMgr.removeFilter", check:"collapser.checkMgr.checkList checkMgr.checkList", checked:"collapser.checkMgr.getCheckList checkMgr.getCheckList", removeChecked:"collapser.checkMgr.removeChecked checkMgr.removeChecked", register:"event.register", trigger:"event.trigger", bind:"event.bind", unregister:"event.unregister", unbind:"event.unregister", collen:"colDefMgr.length"}, autoWidth:!1, showMessage:!1}
  };
  d._init = function(a) {
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
    for(var a = 10, c = this.colDefMgr.getAll(), e = c.length;a < e;a++) {
      if(colDef = c[a], colDef.CheckManager) {
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
  d._bindEvents = function() {
    JGM._bindGlobalEvents();
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
    }})
  };
  d.destroy = function() {
    try {
      Util.isEmptyObj(JGM.m.Grid) && JGM._unbindGlobalEvents(), this.event.trigger("onDestroy"), JGM._destroy(this, {name:"Grid", module:"event", $:"_ctnr", map:"_vars _options", style:"_style _dynStyle"})
    }catch(a) {
      return a
    }
  };
  d._registerLinks = function(a) {
    var c, e, b, d, f, h, i, j, m, l;
    a:for(c in a) {
      if(a.hasOwnProperty(c) && !(c in this)) {
        e = Util.split(a[c]);
        b = e.length;
        d = 0;
        b:for(;d < b;d++) {
          if(f = e[d].split("."), h = f.length, !(h < 1)) {
            i = this;
            j = this;
            m = "";
            for(l = 0;l < h;l++) {
              if(f[l] in i) {
                j = i, i = i[m = f[l]]
              }else {
                continue b
              }
            }
            this._registerLink(c, i, j, m);
            continue a
          }
        }
      }
    }
  };
  d._registerLink = function(a, c, e, b) {
    if(this.hasOwnProperty(a)) {
      return!1
    }
    this[a] = Util.isFunction(c) ? function() {
      return c.apply(e, arguments)
    } : function() {
      return e[b]
    };
    return!0
  };
  d._createCss = function() {
    var a = Util.sprint("%selector%{overflow:hidden;font:%font%;%border%%style%}%submodule%", {selector:"#" + this.mid, font:this._options.font, border:this._options.borderSide ? "border:" + this._options.border + ";" : "border-top:" + this._options.border + ";border-bottom:" + this._options.border + ";", style:this._options.style, submodule:this.event.trigger("onCreateCss").join("")});
    this._style = Util.createStyle(a);
    this._dynStyle = Util.createStyle(this.event.trigger("onCreateDynamicCss").join(""))
  };
  d._recreateDynamicCss = function() {
    Util.setStyle(this._dynStyle, this.event.trigger("onCreateDynamicCss").join(""))
  };
  d._keydown = function(a) {
    this.event.triggerInvalid("onBeforeKeydown", [a]) || this.event.trigger("keydown_" + a.which + " keydown", [a])
  };
  d._keyup = function(a) {
    this.event.triggerInvalid("onBeforeKeyup", [a]) || this.event.trigger("keyup_" + a.which + " keyup", [a])
  };
  d._keypress = function(a) {
    this.event.triggerInvalid("onBeforeKeypress", [a]) || this.event.trigger("keypress_" + a.which + " keypress", [a])
  };
  d._mousein = function(a) {
    this.event.triggerInvalid("onBeforeMousein", [a]) || (this._vars.drag ? this.event.trigger("dragin mousein", [a]) : this.event.trigger("mousein", [a]))
  };
  d._mouseout = function(a) {
    this.event.triggerInvalid("onBeforeMouseout", [a]) || (this._vars.drag ? this.event.trigger("dragout mouseout", [a]) : this.event.trigger("mouseout", [a]))
  };
  d._mouseenter = function(a) {
    this.event.triggerInvalid("onBeforeMouseenter", [a]) || (this._vars.drag ? this.event.trigger("dragenter mouseenter", [a]) : this.event.trigger("mouseenter", [a]))
  };
  d._mouseleave = function(a) {
    this.event.triggerInvalid("onBeforeMouseleave", [a]) || (this._vars.drag ? this.event.trigger("dragleave mouseleave", [a]) : this.event.trigger("mouseleave", [a]))
  };
  d._mousemove = function(a) {
    this.event.triggerInvalid("onBeforeMousemove", [a]) || (this._vars.drag ? this.event.trigger("dragmove mousemove", [a]) : this.event.trigger("mousemove", [a]))
  };
  d._mouseover = function(a) {
    this.event.triggerInvalid("onBeforeMouseover", [a]) || (this._vars.drag ? this.event.trigger("dragover mouseover", [a]) : this.event.trigger("mouseover", [a]))
  };
  d._mousedown = function(a) {
    this._vars.drag = !0;
    this.event.triggerInvalid("onBeforeMousedown", [a]) || this.event.trigger("mousedown", [a])
  };
  d._mouseup = function(a) {
    this._vars.drag = !1;
    this.event.trigger("unsetDrag");
    this.containsEvent(a) && (this.event.triggerInvalid("onBeforeMouseup", [a]) || this.event.trigger("mouseup", [a]))
  };
  d._click = function(a) {
    this.event.triggerInvalid("onBeforeClick", [a]) || this.event.trigger("click", [a])
  };
  d._dblclick = function(a) {
    this.event.triggerInvalid("onBeforeDblclick", [a]) || this.event.trigger("dblclick", [a])
  };
  d._resize = function(a) {
    var c = !1, e = this._ctnr[0].clientWidth;
    if(e >= 1 && this._vars.lastW !== e) {
      this.event.trigger("resizeWidth", [e, this._vars.lastW]), this._vars.lastW = e, c = !0
    }
    e = this._ctnr[0].clientHeight;
    if(e >= 1 && this._vars.lastH !== e) {
      this.event.trigger("resizeHeight", [e, this._vars.lastH]), this._vars.lastH = e, c = !0
    }
    c && this.event.trigger("resize", [a])
  };
  d.width = function(a) {
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
  d.height = function(a) {
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
  d.getCellByIdAndKey = function(a, c) {
    return JGM.create("Cell", {grid:this, datarow:this.dataMgr.getById(a), colDef:this.colDefMgr.getByKey(c)})
  };
  d.getCellByIdx = function(a, c) {
    return JGM.create("Cell", {grid:this, row:a, col:c})
  };
  d.error = function(a) {
    for(var c = JGM.error[a], e = 1, b = arguments.length;e < b;e++) {
      c = c.replace(RegExp("%" + (e - 1), "g"), arguments[e])
    }
    c = Error(c);
    c.code = a;
    this.printError(c.message);
    this.event.trigger("onError", [c]);
    return c
  };
  d.printError = function(a) {
    if(this._options.showMessage) {
      var c = this.msg;
      c[0].innerHTML = a;
      c[0].style.width = this._ctnr[0].clientWidth + "px";
      c[0].style.background = "#ffebe8";
      c[0].style.color = "#333";
      c.show();
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function() {
        c.hide(1E3)
      }, 5E3)
    }
  };
  d.printMessage = function(a) {
    if(this._options.showMessage) {
      var c = this.msg;
      c[0].innerHTML = a;
      c[0].style.width = this._ctnr[0].clientWidth + "px";
      c[0].style.background = "#dfdfdf";
      c[0].style.color = "#6f6f6f";
      c.show();
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function() {
        c.hide(1E3)
      }, 5E3)
    }
  };
  d.containsEvent = function(a) {
    return Util.contains(this._ctnr[0], a.target)
  };
  JGM._add("Grid", b)
})();
JGM.core.BaseModule = {};
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
    var d = this, f = this.grid;
    f && ["dispose", "createcss", "createdynamiccss", "render", "keydown", "keyup", "keypress", "mousein", "mouseout", "mouseenter", "mouseleave", "mousemove", "mouseover", "mousedown", "mouseup", "click", "dblclick", "resize", "resizewidth", "resizeheight", "scroll", "scrollh", "scrollv"].forEach(function(a) {
      var c = "_before" + a, e = "_after" + a;
      d[c] && f.addEventListener(c, function(a) {
        return d[c](a)
      });
      d[e] && f.addEventListener(e, function(a) {
        return d[e](a)
      })
    });
    this._bindEvents && (this.dispatchEvent({type:"beforebindevents"}), this._bindEvents(a), this.dispatchEvent({type:"afterbindevents"}));
    this.dispatchEvent({type:"complete"})
  }
  goog.exportSymbol("JGM.core.BaseModule", b);
  goog.inherits(b, EventDispatcher);
  var d = b.prototype, a = d.dispose;
  d._beforedispose = function() {
    this.dispose()
  };
  d.dispose = function() {
    delete this.grid;
    this.dispatchEvent({type:"beforedispose"});
    a.call(this);
    this.dispatchEvent({type:"afterdispose"})
  }
})();
JGM.data = {};
JGM.data.DataManager = {};
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
  goog.exportSymbol("JGM.data.DataManager", b);
  b.getInstance = function(a) {
    return new b(a)
  };
  var d = b.prototype;
  d.__init = function(a) {
    for(var c = 0, e = this._options.uniqueKeys, b, d = this.uniqueMap, f = e.length, h = this.keyToType, i = this.grid.colDefMgr.getAll();c < f;c++) {
      b = e[c], typeof b === "string" && (d[b] = {})
    }
    f = i.length;
    for(c = 0;c < f;c++) {
      e = i[c], b = e.key, e.hasOwnProperty("unique") && e.unique === !0 && !d.hasOwnProperty(b) && (d[b] = {}), h[b] = this.mapDatatype(e.type)
    }
    Util.ifNull(a.datalist, []);
    this.bindEvents();
    this.set(a.datalist)
  };
  d.mapDatatype = function(a) {
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
  d.bindEvents = function() {
    this.grid.event.bind({onDestroy:this.__destroy_aA__, keydownCanvas:this.__keydownCanvas_ba__}, this)
  };
  d.__destroy_aA__ = function() {
    this.cleanList(this.all);
    JGM._destroy(this, {name:"DataManager", path:"dataMgr", property:"all __idMode_m__ __increment_l__ idKey __sorter_h__", map:"__consts_n__ __idToIdx_b__ __idToData_a__ _options", array:"datalist failed __history_e__ __redoHistory_q__ __filters_r__"})
  };
  d.addUniqueIndex = function(a, c, e, b) {
    if(b !== !0 && (Util.isNull(a) || Util.isEmptyString(c) || Util.isNull(e))) {
      return!1
    }
    if(e.hasOwnProperty(c) === !1) {
      return this.grid.error("KEY_UNDEFINED", c)
    }
    if(Util.isEmptyString(b = e[c])) {
      return this.grid.error("BAD_NULL", c)
    }
    if(a.hasOwnProperty(b)) {
      return a[b] === e ? !1 : this.grid.error("DUP_ENTRY", b, c)
    }
    a[b] = e;
    return!0
  };
  d.addUniqueIndices = function(a, c, e, b) {
    if(b !== !0 && (Util.isNull(a) || Util.isEmptyString(c) || Util.isEmptyArray(e))) {
      return!1
    }
    for(var d = e.length, f = [], h, i, b = 0;b < d;b++) {
      if(!Util.isNull(i = e[b])) {
        if(i.hasOwnProperty(c) === !1) {
          return this.removeUniqueIndices(a, c, f), this.grid.error("KEY_UNDEFINED", c)
        }
        if(Util.isEmptyString(h = i[c])) {
          return this.removeUniqueIndices(a, c, f), this.grid.error("BAD_NULL", c)
        }
        if(a.hasOwnProperty(h)) {
          if(a[h] === i) {
            continue
          }
          this.removeUniqueIndices(a, c, f);
          return this.grid.error("DUP_ENTRY", h, c)
        }
        f.push(a[h] = i)
      }
    }
    return f.length > 0
  };
  d.updateUniqueIndex = function(a, c, e, b, d, f) {
    if(f !== !0 && (Util.isEmptyObj(a) || Util.isEmptyString(c) || Util.isNullOr(e, d) || Util.isEmptyObj(b))) {
      return!1
    }
    if(b.hasOwnProperty(c) === !1) {
      return!1
    }
    if(d.hasOwnProperty(c) === !1 || e.hasOwnProperty(c) === !1) {
      return this.grid.error("KEY_UNDEFINED", c)
    }
    if(a.hasOwnProperty(d = d[c]) === !1) {
      return this.grid.error("KEY_NOT_FOUND", d, c)
    }
    if(Util.isEmptyString(b = b[c])) {
      return this.grid.error("BAD_NULL", c)
    }
    if(a.hasOwnProperty(b)) {
      return a[b] === e ? !1 : this.grid.error("DUP_ENTRY", b, c)
    }
    a[b] = e;
    delete a[d];
    return d
  };
  d.updateUniqueIndices = function(a, c, e, b, d, f) {
    if(f !== !0) {
      if(Util.isEmptyObj(a) || Util.isEmptyString(c) || Util.isEmptyArray(e) || Util.isEmptyArray(b) || Util.isEmptyArray(d)) {
        return!1
      }
      if(e.length !== b.length || e.length !== d.length) {
        return this.grid.error("LENGTH_NOT_EQUAL")
      }
    }
    for(var f = 0, h = e.length, i, j, m, l = [], p = [], n = [], r, q;f < h;f++) {
      if(!Util.isNull(i = e[f])) {
        if((m = b[f]).hasOwnProperty(c) !== !1) {
          j = d[f];
          if(j.hasOwnProperty(c) === !1 || i.hasOwnProperty(c) === !1) {
            return this.updateUniqueIndices(a, c, l, n, p), this.grid.error("KEY_UNDEFINED", c)
          }
          if(a.hasOwnProperty(q = j[c]) === !1) {
            return this.updateUniqueIndices(a, c, l, n, p), this.grid.error("KEY_NOT_FOUND", q, c)
          }
          if(Util.isEmptyString(r = m[c])) {
            return this.updateUniqueIndices(a, c, l, n, p), this.grid.error("BAD_NULL", c)
          }
          if(a.hasOwnProperty(r)) {
            if(a[r] === i) {
              continue
            }
            this.updateUniqueIndices(a, c, l, n, p);
            return this.grid.error("DUP_ENTRY", r, c)
          }
          a[r] = i;
          delete a[q];
          l.push(i);
          p.push(m);
          n.push(j)
        }
      }
    }
    return l.length === 0 ? !1 : {datalist:l, changes:p, befores:n}
  };
  d.removeUniqueIndex = function(a, c, e, b) {
    if(!(b !== !0 && (Util.isEmptyObj(a) || Util.isEmptyString(c) || Util.isEmptyObj(e)))) {
      var d;
      e.hasOwnProperty(c) && a.hasOwnProperty(d = e[c]) && delete a[d]
    }
  };
  d.removeUniqueIndices = function(a, c, e, b) {
    if(!(b !== !0 && (Util.isEmptyObj(a) || Util.isEmptyString(c) || Util.isEmptyArray(e)))) {
      for(var d = e.length, f, h, b = 0;b < d;b++) {
        h = e[b], h.hasOwnProperty(c) && a.hasOwnProperty(f = h[c]) && delete a[f]
      }
    }
  };
  d.addToUniqueMap = function(a) {
    if(Util.isEmptyObj(a) || Util.isEmptyObj(this.uniqueMap)) {
      return!1
    }
    var c = [], e, b = this.uniqueMap, d;
    for(e in b) {
      if(b.hasOwnProperty(e)) {
        if(d = this.addUniqueIndex(b[e], e, a), d === !0) {
          c.push(e)
        }else {
          if(d instanceof Error) {
            e = 0;
            for(var f = c.length;e < f;e++) {
              this.removeUniqueIndex(b[c[e]], c[e], a)
            }
            return d
          }
        }
      }
    }
    return c.length > 0
  };
  d.addListToUniqueMap = function(a) {
    if(Util.isEmptyArray(a) || Util.isEmptyObj(this.uniqueMap)) {
      return!1
    }
    var c = this.uniqueMap, e = [], b, d;
    for(b in c) {
      if(c.hasOwnProperty(b)) {
        if(d = this.addUniqueIndices(c[b], b, a), d === !0) {
          e.push(b)
        }else {
          if(d instanceof Error) {
            b = 0;
            for(var f = e.length;b < f;b++) {
              this.removeUniqueIndices(c[e[b]], e[b], a)
            }
            return d
          }
        }
      }
    }
    return e.length > 0
  };
  d.updateUniqueMap = function(a, c, b) {
    if(Util.isNullOr(a, c, b) || Util.isEmptyObj(this.uniqueMap)) {
      return!1
    }
    var d, g = this.uniqueMap, f = [], h;
    for(d in g) {
      if(g.hasOwnProperty(d)) {
        h = this.updateUniqueIndex(g[d], d, a, c, b);
        if(h instanceof Error) {
          d = 0;
          for(var i = f.length;d < i;d++) {
            this.updateUniqueIndex(g[f[d]], f[d], a, b, c)
          }
          return h
        }
        h !== !1 && f.push(d)
      }
    }
    return f.length > 0
  };
  d.updateListUniqueMap = function(a, c, b) {
    if(Util.isEmptyArray(a) || Util.isEmptyArray(c) || Util.isEmptyArray(b) || Util.isEmptyObj(this.uniqueMap)) {
      return!1
    }
    if(a.length !== c.length || a.length !== b.length) {
      return this.grid.error("LENGTH_NOT_EQUAL")
    }
    var d, g = this.uniqueMap, f = [], h;
    for(d in g) {
      if(g.hasOwnProperty(d)) {
        h = this.updateUniqueIndices(g[d], d, a, c, b);
        if(h instanceof Error) {
          d = 0;
          for(var i = f.length;d < i;d++) {
            this.updateUniqueIndices(g[f[d]], f[d], a, b, c)
          }
          return h
        }
        h !== !1 && f.push(d)
      }
    }
    return f.length > 0
  };
  d.removeFromUniqueMap = function(a) {
    if(!Util.isEmptyObj(a) && !Util.isEmptyObj(this.uniqueMap)) {
      var c, b = this.uniqueMap;
      for(c in b) {
        b.hasOwnProperty(c) && this.removeUniqueIndex(b[c], c, a)
      }
    }
  };
  d.removeListFromUniqueMap = function(a) {
    if(!Util.isEmptyArray(a) && !Util.isEmptyObj(this.uniqueMap)) {
      var c, b = this.uniqueMap;
      for(c in b) {
        b.hasOwnProperty(c) && this.removeUniqueIndices(b[c], c, a)
      }
    }
  };
  d.addToIdMap = function(a) {
    if(Util.isNull(a)) {
      return!1
    }
    var c = this.idKey;
    switch(this.__idMode_m__) {
      case this.__consts_n__.__auto_a__:
        a.hasOwnProperty(c) === !1 && (a[c] = this.__increment_l__++);
      case this.__consts_n__.__given_b__:
      ;
      case this.__consts_n__.__composite_c__:
        return this.addUniqueIndex(this.__idToData_a__, c, a)
    }
    return!1
  };
  d.addListToIdMap = function(a) {
    if(Util.isEmptyArray(a)) {
      return!1
    }
    var c = this.idKey;
    switch(this.__idMode_m__) {
      case this.__consts_n__.__auto_a__:
        for(var b = 0, d, g = a.length;b < g;b++) {
          if((d = a[b]).hasOwnProperty(c) === !1) {
            d[c] = this.__increment_l__++
          }
        }
      ;
      case this.__consts_n__.__given_b__:
      ;
      case this.__consts_n__.__composite_c__:
        return this.addUniqueIndices(this.__idToData_a__, c, a)
    }
    return!1
  };
  d.updateIdMap = function(a, c, b) {
    if(Util.isNullOr(a, b) || Util.isEmptyObj(c)) {
      return!1
    }
    var d = this.idKey;
    switch(this.__idMode_m__) {
      case this.__consts_n__.__auto_a__:
        if(c.hasOwnProperty(d)) {
          return this.grid.error("NOT_MODIFIABLE", d)
        }
      ;
      case this.__consts_n__.__given_b__:
        return this.updateUniqueIndex(this.__idToData_a__, d, a, c, b);
      case this.__consts_n__.__composite_c__:
        if(c.hasOwnProperty(d)) {
          return this.grid.error("NOT_MODIFIABLE", d)
        }
        for(var b = this._options.__idColKeys_c__, g = b.length, f = 0;f < g;f++) {
          if(c.hasOwnProperty(b[f])) {
            for(var h = "", i = 0, j, m, l = {}, p = {}, f = p[d] = a[d];i < g;i++) {
              if(j = b[i], c.hasOwnProperty(j)) {
                if(Util.isEmptyString(m = c[j])) {
                  return this.grid.error("BAD_NULL", j)
                }
                h += "&" + m
              }else {
                h += "&" + a[j]
              }
            }
            a[d] = l[d] = h;
            if(f === h) {
              break
            }
            c = this.updateUniqueIndex(this.__idToData_a__, d, a, l, p);
            c instanceof Error && (a[d] = f);
            return c
          }
        }
    }
    return!1
  };
  d.updateListIdMap = function(a, c, b) {
    if(Util.isEmptyArray(a) || Util.isEmptyArray(c) || Util.isEmptyArray(b)) {
      return!1
    }
    var d = this.idKey, g = a.length, f = 0;
    switch(this.__idMode_m__) {
      case this.__consts_n__.__auto_a__:
        for(;f < g;f++) {
          if(c[f].hasOwnProperty(d)) {
            return this.grid.error("NOT_MODIFIABLE", d)
          }
        }
      ;
      case this.__consts_n__.__given_b__:
        return this.updateUniqueIndices(this.__idToData_a__, d, a, c, b);
      case this.__consts_n__.__composite_c__:
        for(var h = this.__idToData_a__, i, j, m = this._options.__idColKeys_c__, l = m.length, p, b = [], n = [], r = [], q = [], o, s, t, u;f < g;f++) {
          i = a[f];
          j = c[f];
          if(j.hasOwnProperty(d)) {
            o = 0;
            for(g = b.length;o < g;o++) {
              n[o][d] = b[o]
            }
            return this.grid.error("NOT_MODIFIABLE", d)
          }
          for(o = 0;o < l;o++) {
            if(j.hasOwnProperty(m[o])) {
              p = "";
              for(s = 0;s < l;s++) {
                if(t = m[s], j.hasOwnProperty(t)) {
                  if(Util.isEmptyString(u = j[t])) {
                    o = 0;
                    for(g = b.length;o < g;o++) {
                      n[o][d] = b[o]
                    }
                    return this.grid.error("BAD_NULL", t)
                  }
                  p += "&" + u
                }else {
                  p += "&" + i[t]
                }
              }
              i[d] !== p && (n.push(i), r.push({}), q.push({}), b.push(i[d]), i[d] = p)
            }
          }
        }
        if(n.length === 0) {
          break
        }
        a = this.updateUniqueIndices(h, d, n, r, q);
        if(a instanceof Error) {
          o = 0;
          for(g = b.length;o < g;o++) {
            n[o][d] = b[o]
          }
        }
        return a
    }
    return!1
  };
  d.removeFromIdMap = function(a) {
    var c = this.idKey, b = this.__idToData_a__, d;
    Util.isNotNull(a) && a.hasOwnProperty(c) && b.hasOwnProperty(d = a[c]) && delete b[d]
  };
  d.removeListFromIdMap = function(a) {
    if(!Util.isEmptyArray(a)) {
      for(var c = this.idKey, b = a.length, d = this.__idToData_a__, g, f, h = 0;h < b;h++) {
        f = a[h], f.hasOwnProperty(c) && d.hasOwnProperty(g = f[c]) && delete d[g]
      }
    }
  };
  d.fillTemp = function(a, c) {
    if(!Util.isNull(a)) {
      var b = this.grid.colDefMgr.getAll(), d = b.length, g, f, h = 0;
      if(c !== void 0 && c.isNew) {
        for(;h < d;h++) {
          f = b[h], g = f.key, f.nullOnCreate && Util.isNull(a[g]) && (a[g] = "J@H" + this.__increment_l__++)
        }
      }
    }
  };
  d.fillTempList = function(a, c) {
    if(!Util.isEmptyArray(a)) {
      var b = this.grid.colDefMgr.getAll(), d = b.length, g = a.length, f, h, i = 0;
      if(c !== void 0 && c.isNew) {
        for(;i < d;i++) {
          if(h = b[i], f = h.key, h.nullOnCreate) {
            for(h = 0;g;h++) {
              a[h][f] = "J@H" + this.__increment_l__++
            }
          }
        }
      }
    }
  };
  d.query = function(a) {
    if(typeof a === "string" && (a = $.trim(a), a.length !== 0)) {
      var c, b, d, g, f;
      c = a.toLowerCase();
      b = a.indexOf(" ");
      if(b !== -1 && (d = c.substring(0, b), c = c.indexOf(" where "), g = c > -1, b = $.trim(g ? a.substring(b + 1, c) : a.substring(b + 1)), b.length !== 0)) {
        switch(g && (f = $.trim(a.substring(c + 7))), d) {
          case "select":
            return this.executeSelect(b, f);
          case "insert":
            return this.executeInsert(b, f);
          case "update":
            return this.executeUpdate(b, f);
          case "delete":
            return this.executeDelete(b, f)
        }
      }
    }
  };
  d.parseWhere = function(a) {
    typeof a === "string" && $.trim(a)
  };
  d.executeSelect = function(a) {
    var a = Util.split(a, /[\s,]+/), c = a.length, b = 0, d = {}, g = this.all, f = [];
    if(c === 0) {
      return f
    }
    for(;b < c;b++) {
      if(a[b] === "*") {
        break
      }
      d[a[b]] = !0
    }
    b = 0;
    for(c = g.length;b < c;b++) {
      f.push(Util.clone(g[b], d))
    }
    return f
  };
  d.parse = function(a, c) {
    if(Util.isNull(a)) {
      return!1
    }
    for(var b = this.grid.colDefMgr.getAll(), d = b.length, g, f, h = c !== void 0 && c.isNew, i = 0;i < d;i++) {
      if(f = b[i], !h || !f.nullOnCreate) {
        if(Util.isFunction(g = f.parser)) {
          if(f = f.key, a.hasOwnProperty(f)) {
            try {
              a[f] = g(a[f], a)
            }catch(j) {
              return Util.isNull(a) ? this.grid.error("PARSE_ERROR", a, f) : this.grid.error("PARSE_ERROR", a[f], f)
            }
          }
        }
      }
    }
    return!0
  };
  d.parseList = function(a, c) {
    if(Util.isNull(a)) {
      return!1
    }
    if(a.length === 0) {
      return!0
    }
    for(var b = this.grid.colDefMgr.getAll(), d = b.length, g = a.length, f, h, i = 0, j, m = c !== void 0 && c.isNew, l;i < d;i++) {
      if(h = b[i], !m || !h.nullOnCreate) {
        if(Util.isFunction(f = h.parser)) {
          h = h.key;
          try {
            for(j = 0;j < g;j++) {
              l = a[j], l.hasOwnProperty(h) && (l[h] = f(l[h], l))
            }
          }catch(p) {
            return Util.isNull(l) ? this.grid.error("PARSE_ERROR", l, h) : this.grid.error("PARSE_ERROR", l[h], h)
          }
        }
      }
    }
    return!0
  };
  d.validate = function(a, c) {
    if(Util.isNull(a)) {
      return!1
    }
    for(var b = this.grid.colDefMgr.getAll(), d = b.length, g, f, h, i, j, m, l, p = c !== void 0 && c.isNew, n = 0;n < d;n++) {
      if(g = b[n], f = g.key, j = void 0, i = h = !1, !p || !g.nullOnCreate) {
        if(g.notNull === !0) {
          if(a.hasOwnProperty(f) === !1 || Util.isEmptyString(j = a[f])) {
            return this.grid.error("BAD_NULL", f)
          }
          m = j.toString()
        }else {
          a.hasOwnProperty(f) === !1 || Util.isNull(j = a[f]) ? i = h = !0 : j === "" && (i = !0), m = h === !1 ? j.toString() : ""
        }
        if(h === !1) {
          if(Util.isNotNull(l = g.max) && i === !1 && j > l) {
            return this.grid.error("BIGGER_THAN", j, f, l)
          }
          if(Util.isNotNull(l = g.min) && i === !1 && j < l) {
            return this.grid.error("SMALLER_THAN", j, f, l)
          }
          if(Util.isNotNull(l = g.length)) {
            if(i === !0 || m.length !== l) {
              return this.grid.error("WRONG_LENGTH", m, l, f)
            }
          }else {
            if(Util.isNotNull(l = g.maxlength) && i === !1 && m.length > l) {
              return this.grid.error("DATA_TOO_LONG", m, f, l)
            }
            if(Util.isNotNull(l = g.minlength)) {
              if(i === !0 || m.length < l) {
                return this.grid.error("DATA_TOO_SHORT", m, f, l)
              }
            }
          }
        }
        if(Util.isFunction(g = g.validator)) {
          try {
            if(g(j, a, m, h, i) !== !0) {
              return this.grid.error("WRONG_VALUE", m, f)
            }
          }catch(r) {
            return this.grid.error("WRONG_VALUE", m, f)
          }
        }
      }
    }
    return!0
  };
  d.validateList = function(a, c) {
    if(Util.isNull(a)) {
      return!1
    }
    if(a.length === 0) {
      return!0
    }
    for(var b = this.grid.colDefMgr.getAll(), d = b.length, g = a.length, f, h, i = 0, j, m, l, p, n, r = c !== void 0 && c.isNew, q = [], o = [];i < d;i++) {
      if(f = b[i], h = f.key, m = {}, l = {}, q.length = 0, o.length = 0, !r || !f.nullOnCreate) {
        if(f.notNull === !0) {
          for(j = 0;j < g;j++) {
            if(a[j].hasOwnProperty(h) === !1 || Util.isEmptyString(p = a[j][h])) {
              return this.grid.error("BAD_NULL", h)
            }
            q.push(p);
            o.push(p.toString())
          }
        }else {
          for(j = 0;j < g;j++) {
            p = void 0, a[j].hasOwnProperty(h) === !1 || Util.isNull(p = a[j][h]) ? (m[j] = !0, l[j] = !0) : p === "" && (l[j] = !0), q.push(p), m.hasOwnProperty(j) ? o.push("") : o.push(p.toString())
          }
        }
        if(Util.isNotNull(n = f.max)) {
          for(j = 0;j < g;j++) {
            if(l.hasOwnProperty(j) === !1 && q[j] > n) {
              return this.grid.error("BIGGER_THAN", q[j], h, n)
            }
          }
        }
        if(Util.isNotNull(n = f.min)) {
          for(j = 0;j < g;j++) {
            if(l.hasOwnProperty(j) === !1 && q[j] < n) {
              return this.grid.error("SMALLER_THAN", q[j], h, n)
            }
          }
        }
        if(Util.isNotNull(n = f.length)) {
          for(j = 0;j < g;j++) {
            if(m.hasOwnProperty(j) === !1 && (l.hasOwnProperty(j) || o[j].length !== n)) {
              return this.grid.error("WRONG_LENGTH", o[j], n, h)
            }
          }
        }else {
          if(Util.isNotNull(n = f.maxlength)) {
            for(j = 0;j < g;j++) {
              if(l.hasOwnProperty(j) === !1 && o[j].length > n) {
                return this.grid.error("DATA_TOO_LONG", o[j], h, n)
              }
            }
          }
          if(Util.isNotNull(n = f.minlength)) {
            for(j = 0;j < g;j++) {
              if(m.hasOwnProperty(j) === !1 && (l.hasOwnProperty(j) || o[j].length < n)) {
                return this.grid.error("DATA_TOO_SHORT", o[j], h, n)
              }
            }
          }
        }
        if(Util.isFunction(f = f.validator)) {
          try {
            for(j = 0;j < g;j++) {
              if(f(q[j], a[j], o[j], m.hasOwnProperty(j), l.hasOwnProperty(j)) !== !0) {
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
  d.makeCompositeKey = function(a, c) {
    if(!(this.__idMode_m__ !== this.__consts_n__.__composite_c__ || Util.isNull(a))) {
      if(c === !0 || a.hasOwnProperty(this.idKey) === !1) {
        for(var b = this._options.__idColKeys_c__, d = b.length, g = 0, f = "";g < d;g++) {
          f += "&" + a[b[g]]
        }
        a[this.idKey] = f
      }
    }
  };
  d.makeCompositeKeyList = function(a, c) {
    if(!(this.__idMode_m__ !== this.__consts_n__.__composite_c__ || a.length === 0)) {
      var b = this.idKey, d = a.length, g = this._options.__idColKeys_c__, f = g.length, h, i = 0, j, m;
      if(c === !0) {
        for(;i < d;i++) {
          h = a[i];
          m = "";
          for(j = 0;j < f;j++) {
            m += "&" + h[g[j]]
          }
          h[b] = m
        }
      }else {
        for(;i < d;i++) {
          if((h = a[i]).hasOwnProperty(b) === !1) {
            m = "";
            for(j = 0;j < f;j++) {
              m += "&" + h[g[j]]
            }
            h[b] = m
          }
        }
      }
    }
  };
  d.map = function(a) {
    if(!Util.isNull(a)) {
      var c = this.__idToData_a__, b = this.idKey, d;
      this.makeCompositeKey(a);
      if(a.hasOwnProperty(b) && c.hasOwnProperty(d = a[b])) {
        return c[d]
      }
    }
  };
  d.mapList = function(a) {
    if(Util.isEmptyArray(a)) {
      return{mapped:[], unmapped:[]}
    }
    this.makeCompositeKeyList(a);
    for(var c = [], b = [], d = this.idKey, g = this.__idToData_a__, f = a.length, h = 0, i, j;h < f;h++) {
      (i = a[h]).hasOwnProperty(d) && g.hasOwnProperty(j = i[d]) ? c.push(g[j]) : b.push(i)
    }
    return{mapped:c, unmapped:b}
  };
  d.getById = function(a) {
    if(Util.isNotNull(a) && this.__idToData_a__.hasOwnProperty(a)) {
      return this.__idToData_a__[a]
    }
  };
  d.getByIdx = function(a) {
    if(Util.isNotNull(a) && this.datalist.hasOwnProperty(a)) {
      return this.datalist[a]
    }
  };
  d.getByNode = function(a) {
    return this.getById(this.getIdByNode(a))
  };
  d.getIdx = function(a) {
    return this.getIdxById(this.getId(a))
  };
  d.getIdxById = function(a) {
    return Util.isNotNull(a) && this.__idToIdx_b__.hasOwnProperty(a) ? this.__idToIdx_b__[a] : -1
  };
  d.getIdxByNode = function(a) {
    return this.getIdxById(this.getIdByNode(a))
  };
  d.getId = function(a) {
    if(Util.isNotNull(a) && a.hasOwnProperty(this.idKey)) {
      return a[this.idKey]
    }
  };
  d.getIdByIdx = function(a) {
    return this.getId(this.getByIdx(a))
  };
  d.getIdByNode = function(a) {
    if(Util.isNotNull(a)) {
      return a.getAttribute("i")
    }
  };
  d.__reidxFrom_f__ = function(a) {
    Util.isNull(a) && (a = 0);
    for(var c = this.datalist, b = c.length, d = this.idKey, g = this.__idToIdx_b__;a < b;a++) {
      g[c[a][d]] = a
    }
  };
  d.__reidx_g__ = function() {
    this.__idToIdx_b__ = {};
    this.__reidxFrom_f__()
  };
  d.has = function(a) {
    return this.hasById(this.getId(a))
  };
  d.hasById = function(a) {
    return Util.isNotNull(a) ? this.__idToIdx_b__.hasOwnProperty(a) : !1
  };
  d.contains = function(a) {
    return this.containsById(this.getId(a))
  };
  d.containsById = function(a) {
    return Util.isNotNull(a) ? this.__idToData_a__.hasOwnProperty(a) : !1
  };
  d.set = function(a) {
    if(this.all === a || Util.isEmptyArray(a) && this.all === 0) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange");
    this.grid.event.trigger("onBeforeSetDatalist", [this.all, a]);
    this.cleanList(this.all);
    var c, b = this.uniqueMap;
    for(c in b) {
      b.hasOwnProperty(c) && (b[c] = {})
    }
    this.__idToData_a__ = {};
    this.all = [];
    this.__history_e__.length = 0;
    this.__redoHistory_q__.length = 0;
    Util.isNull(a) && (a = []);
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
  d.add = function(a, c) {
    if(Util.isNull(a) || Util.isNotNull(this.map(a))) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange");
    this.fillTemp(a, c);
    var b;
    if((b = this.parse(a, c)) instanceof Error) {
      return b
    }
    if((b = this.validate(a, c)) instanceof Error) {
      return b
    }
    if((b = this.addToUniqueMap(a)) instanceof Error) {
      return b
    }
    if((b = this.addToIdMap(a)) instanceof Error) {
      return b
    }
    this.all.push(a);
    if(Util.isNull(c) || c.undo !== !0) {
      this.__history_e__.push({__action_a__:this.__consts_n__.__add_e__, __target_b__:a}), this.__redoHistory_q__.length = 0
    }
    this.grid.event.trigger("onAddDatarow", [a, c]);
    this.grid.event.trigger("onDataChange");
    (c === void 0 || c.noRefresh !== !0) && this.refresh(c);
    return!0
  };
  d.addList = function(a, c) {
    if(Util.isEmptyArray(a)) {
      return!1
    }
    var b = this.mapList(a).unmapped;
    if(b.length === 0) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange");
    this.fillTempList(a, c);
    var d;
    if((d = this.parseList(b, c)) instanceof Error) {
      return d
    }
    if((d = this.validateList(b, c)) instanceof Error) {
      return d
    }
    if((d = this.addListToUniqueMap(b)) instanceof Error) {
      return d
    }
    if((d = this.addListToIdMap(b)) instanceof Error) {
      return d
    }
    this.all.pushList(b);
    if(Util.isNull(c) || c.undo !== !0) {
      this.__history_e__.push({__action_a__:this.__consts_n__.__addList_f__, __target_b__:b}), this.__redoHistory_q__.length = 0
    }
    this.grid.event.trigger("onAddDatalist", [b, c]);
    this.grid.event.trigger("onDataChange");
    (c === void 0 || c.noRefresh !== !0) && this.refresh(c);
    return!0
  };
  d.updateByKey = function(a, c, b, d) {
    var g = {};
    g[c] = b;
    return this.update(a, g, d)
  };
  d.update = function(a, c, b) {
    if(Util.isNullOr(a, c)) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange");
    this.grid.event.trigger("onBeforeUpdateDatarow", [a, c]);
    var d = {}, g;
    for(g in c) {
      c.hasOwnProperty(g) && (a[g] === c[g] ? delete c[g] : (d[g] = a[g], a[g] = c[g]))
    }
    if(Util.isEmptyObj(d)) {
      return!1
    }
    if((g = this.parse(a, b)) instanceof Error) {
      return this.__rollback_o__(a, d), g
    }
    if((g = this.validate(a, b)) instanceof Error) {
      return this.__rollback_o__(a, d), g
    }
    if((g = this.updateUniqueMap(a, c, d)) instanceof Error) {
      return this.__rollback_o__(a, d), g
    }
    if((g = this.updateIdMap(a, c, d)) instanceof Error) {
      return this.__rollback_o__(a, d), g
    }
    g !== !1 && this.grid.event.trigger("onIdChange", [a, g, a[this.idKey]]);
    if(Util.isNull(b) || b.undo !== !0) {
      this.__history_e__.push({__action_a__:this.__consts_n__.__update_g__, __target_b__:a, __before_c__:d, __change_d__:c}), this.__redoHistory_q__.length = 0
    }
    this.grid.event.trigger("onUpdateDatarow", [a, c, d, b]);
    this.grid.event.trigger("onDataChange");
    (b === void 0 || b.noRefresh !== !0) && this.refresh(b);
    return!0
  };
  d.updateList = function(a, c) {
    if(Util.isEmptyArray(a)) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange");
    this.grid.event.trigger("onBeforeUpdateDatalist", [a]);
    for(var b = [], d = [], g = [], f, h, i, j = a.length, m = 0, l;m < j;m++) {
      h = {};
      f = a[m].datarow;
      i = a[m].change;
      for(l in i) {
        i.hasOwnProperty(l) && (f[l] === i[l] ? delete i[l] : (h[l] = f[l], f[l] = i[l]))
      }
      Util.isNotEmptyObj(h) && (b.push(f), d.push(h), g.push(i))
    }
    if(b.length === 0) {
      return!1
    }
    if((f = this.parseList(b, c)) instanceof Error) {
      return this.__rollbackList_p__(b, d), f
    }
    if((f = this.validateList(b, c)) instanceof Error) {
      return this.__rollbackList_p__(b, d), f
    }
    if((f = this.updateListUniqueMap(b, g, d)) instanceof Error) {
      return this.__rollbackList_p__(b, d), f
    }
    if((f = this.updateListIdMap(b, g, d)) instanceof Error) {
      return this.__rollbackList_p__(b, d), f
    }
    f !== !1 && this.grid.event.trigger("onIdListChange", [f.list, f.befores, this.idKey]);
    if(Util.isNull(c) || c.undo !== !0) {
      this.__history_e__.push({__action_a__:this.__consts_n__.__updateList_h__, __target_b__:b, __before_c__:d, __change_d__:g}), this.__redoHistory_q__.length = 0
    }
    this.grid.event.trigger("onUpdateDatalist", [b, g, d, c]);
    this.grid.event.trigger("onDataChange");
    (c === void 0 || c.noRefresh !== !0) && this.refresh(c);
    return!0
  };
  d.__rollback_o__ = function(a, c) {
    for(var b in c) {
      c.hasOwnProperty(b) && (a[b] = c[b])
    }
  };
  d.__rollbackList_p__ = function(a, c) {
    for(var b = a.length, d = 0, g, f, h;d < b;d++) {
      for(h in g = a[d], f = c[d], f) {
        f.hasOwnProperty(h) && (g[h] = f[h])
      }
    }
  };
  d.remove = function(a, c) {
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
    if(Util.isNull(c) || c.undo !== !0) {
      this.__history_e__.push({__action_a__:this.__consts_n__.__remove_i__, __target_b__:b}), this.__redoHistory_q__.length = 0
    }
    this.grid.event.trigger("onRemoveDatarow", [b, c]);
    this.grid.event.trigger("onDataChange");
    (c === void 0 || c.noRefresh !== !0) && this.refresh(c);
    return!0
  };
  d.removeList = function(a, b) {
    if(Util.isEmptyArray(a)) {
      return!1
    }
    var d = this.mapList(a).mapped;
    if(d.length === 0) {
      return!1
    }
    this.grid.event.trigger("onBeforeDataChange");
    this.removeListFromIdMap(d);
    this.removeListFromUniqueMap(d);
    this.all.removeList(d);
    this.cleanList(d);
    if(Util.isNull(b) || b.undo !== !0) {
      this.__history_e__.push({__action_a__:this.__consts_n__.__removeList_j__, __target_b__:d}), this.__redoHistory_q__.length = 0
    }
    this.grid.event.trigger("onRemoveDatalist", [d, b]);
    this.grid.event.trigger("onDataChange");
    (b === void 0 || b.noRefresh !== !0) && this.refresh(b);
    return!0
  };
  d.__keydownCanvas_ba__ = function(a) {
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
  d.undo = function() {
    if(this.__history_e__.length === 0) {
      return!1
    }
    var a = this.__history_e__.pop();
    this.__redoHistory_q__.push(a);
    var b = a.__target_b__, d = a.__before_c__;
    switch(a.__action_a__) {
      case this.__consts_n__.__add_e__:
        return this.remove(b, {undo:!0});
      case this.__consts_n__.__addList_f__:
        return this.removeList(b, {undo:!0});
      case this.__consts_n__.__update_g__:
        return this.update(b, d, {undo:!0});
      case this.__consts_n__.__updateList_h__:
        for(var a = [], k = 0, g = b.length;k < g;k++) {
          a.push({datarow:b[k], change:d[k]})
        }
        return this.updateList(a, {undo:!0});
      case this.__consts_n__.__remove_i__:
        return this.add(b, {undo:!0});
      case this.__consts_n__.__removeList_j__:
        return this.addList(b, {undo:!0})
    }
  };
  d.redo = function() {
    if(this.__redoHistory_q__.length === 0) {
      return!1
    }
    var a = this.__redoHistory_q__.pop();
    this.__history_e__.push(a);
    var b = a.__target_b__, d = a.__change_d__;
    switch(a.__action_a__) {
      case this.__consts_n__.__add_e__:
        return this.add(b, {undo:!0});
      case this.__consts_n__.__addList_f__:
        return this.addList(b, {undo:!0});
      case this.__consts_n__.__update_g__:
        return this.update(b, d, {undo:!0});
      case this.__consts_n__.__updateList_h__:
        for(var a = [], k = 0, g = b.length;k < g;k++) {
          a.push({datarow:b[k], change:d[k]})
        }
        return this.updateList(a, {undo:!0});
      case this.__consts_n__.__remove_i__:
        return this.remove(b, {undo:!0});
      case this.__consts_n__.__removeList_j__:
        return this.removeList(b, {undo:!0})
    }
  };
  d.equals = function(a, b) {
    if(Util.isNullOr(a, b)) {
      return!1
    }
    if(a === b) {
      return!0
    }
    this.__idMode_m__ === this.__consts_n__.__composite_c__ && (this.makeCompositeKey(a), this.makeCompositeKey(b));
    var d = this.idKey;
    return Util.isNull(a[d]) || Util.isNull(b[d]) ? !1 : a[d] === b[d]
  };
  d.getReal = function() {
    var a = this.__consts_n__.__notReal_d__;
    return this.all.filter(function(b) {
      return b.hasOwnProperty(a) === !1
    })
  };
  d.filterReal = function(a) {
    var b = this.__consts_n__.__notReal_d__;
    return a.filter(function(a) {
      return a.hasOwnProperty(b) === !1
    })
  };
  d.isReal = function(a) {
    return Util.isNotNull(a) && a.hasOwnProperty(this.__consts_n__.__notReal_d__) === !1
  };
  d.dropNonReal = function(a) {
    if(!Util.isEmptyArray(a)) {
      for(var b = this.__consts_n__.__notReal_d__, d = a.length - 1;d >= 0;d--) {
        a[d].hasOwnProperty(b) && (delete a[d][b], a.removeAt(d))
      }
    }
  };
  d.removeIdCol = function(a) {
    if(!(this.__idMode_m__ === this.__consts_n__.__given_b__ || Util.isEmptyArray(a))) {
      for(var b = this.idKey, d = 0, k = a.length;d < k;d++) {
        a[d].hasOwnProperty(b) && delete a[d][b]
      }
    }
  };
  d.removeId = function(a) {
    Util.isNotNull(a) && this.__idMode_m__ !== this.__consts_n__.__given_b__ && a.hasOwnProperty(this.idKey) && delete a[this.idKey]
  };
  d.cleanList = function(a) {
    Util.isEmptyArray(a) || (this.removeIdCol(a), this.dropNonReal(a))
  };
  d.purify = function(a) {
    if(a !== void 0) {
      a = this.all
    }
    if(Util.isEmptyArray(a)) {
      return[]
    }
    for(var b = [], d = a.length, k = 0, g, f, h = this.__consts_n__.__notReal_d__;k < d;k++) {
      if((f = a[k]).hasOwnProperty(h) === !1) {
        for(g in b.push({}), f) {
          f.hasOwnProperty(g) && f.hasOwnProperty(g) && g.substring(0, 3)
        }
      }
    }
    return b
  };
  d.setSorter = function(a) {
    this.grid.event.trigger("onChangeSorter", [this.__sorter_h__, a]);
    this.__sorter_h__ = a
  };
  d.__sort_i__ = function(a) {
    Util.isNull(a) ? a = this.__sorter_h__ : this.setSorter(a);
    if(!Util.isNull(a)) {
      var b = this.all;
      this.grid.event.trigger("onBeforeSort", [b]);
      Util.isNotNull(a.comparator) ? (b.sort(a.comparator), a.desc && b.reverse()) : Util.isNotNull(a.lexi) && this.constructor.__lexi_a__(b, a.lexi, a.desc);
      this.grid.event.trigger("onAfterSort", [b])
    }
  };
  d.addFilter = function(a) {
    this.__filters_r__.push(a);
    this.refresh()
  };
  d.removeFilter = function(a) {
    var b = this.__filters_r__.length;
    this.__filters_r__.remove(a);
    b !== this.__filters_r__.length && this.refresh()
  };
  d.__filter_j__ = function() {
    var a = this.datalist, b = this.failed, d = 0, k = this.__filters_r__.length, g, f;
    this.grid.event.trigger("onBeforeFilter", [a, b]);
    a.length = 0;
    a.pushList(this.all);
    for(b.length = 0;d < k;d++) {
      g = this.__filters_r__[d];
      for(f = a.length - 1;f >= 0;f--) {
        g(a[f]) || (b.push(a[f]), a.removeAt(f))
      }
    }
    this.grid.event.trigger("onFilter", [a, b]);
    this.grid.event.trigger("onAfterFilter", [a, b])
  };
  d.__finish_k__ = function(a) {
    this.__reidx_g__();
    this.grid.event.trigger("onAfterRefresh", [a])
  };
  d.refresh = function(a) {
    this.grid.event.trigger("onBeforeRefresh");
    a === void 0 ? this.__sort_i__() : a.noSort !== !0 && this.__sort_i__(a.sorter);
    (a === void 0 || a.noFilter !== !0) && this.__filter_j__();
    this.__finish_k__(a)
  };
  d.exportRowToArray = function(a, b) {
    if(!(a in this.datalist)) {
      return null
    }
    b || (b = this.grid.colDefMgr.getKeys());
    for(var d = this.datalist[a], k = [], g, f = 0, h = b.length;f < h;f++) {
      g = b[f], k.push(g in d ? d[g] : null)
    }
    return k
  };
  d.exportToArray = function(a, b, d) {
    a || (a = this.grid.colDefMgr.getKeys());
    for(var b = this.datalist.slice(b, d), k = [], g, f, h = 0, i = b.length, j, m = a.length;h < i;h++) {
      g = b[h];
      j = 0;
      for(d = [];j < m;j++) {
        f = a[j], d.push(f in g ? g[f] : null)
      }
      k.push(d)
    }
    return k
  };
  b.__lexi_a__ = function(a, b, d) {
    var k = Object.prototype.toString;
    Object.prototype.toString = Util.isFunction(b) ? b : function() {
      return this[b]
    };
    a.sort();
    Object.prototype.toString = k;
    d && a.reverse()
  };
  JGM._add("DataManager", b)
})();
JGM.column = {};
JGM.column.Column = {};
JGM.column.ColDefManager = {};
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
  goog.exportSymbol("JGM.column.ColDefManager", b);
  b.getInstance = function(a) {
    return new b(a)
  };
  var d = b.prototype;
  d.__init = function(a) {
    this.grid.event.bind("onDestroy", this.__destroy_aA__, this);
    this.set(a.colDefs)
  };
  d.__destroy_aA__ = function() {
    JGM._destroy(this, {name:"ColDefManager", path:"colDefMgr", property:"__colDefs_a__", map:"__keyToIdx_d__ __keyToDef_c__ _options", array:"__filtered_b__"})
  };
  d.getAll = function() {
    return this.__colDefs_a__
  };
  d.set = function(a) {
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
    for(var b = 0, d = a.length, k = this.__keyToDef_c__, g, f;b < d;b++) {
      g = a[b];
      if(!g.hasOwnProperty("key")) {
        return this.__keyToDef_c__ = {}, this.grid.error("KEY_UNDEFINED", b)
      }
      f = g.key;
      if(Util.isEmptyString(f)) {
        return this.__keyToDef_c__ = {}, this.grid.error("BAD_NULL", b)
      }
      if(k.hasOwnProperty(f)) {
        return this.__keyToDef_c__ = {}, this.grid.error("DUP_KEY", f)
      }
      k[f] = g
    }
    this.__colDefs_a__ = a;
    for(b = 0;b < d;b++) {
      this.__extend_i__(a[b])
    }
    this.grid.event.trigger("onAfterSetColDefs", [a, this.__filter_e__()]);
    return a
  };
  d.push = function(a) {
    return this.addAt(this.__filtered_b__.length, a)
  };
  d.addAt = function(a, b) {
    if(!Util.isNull(b)) {
      var d = b.key, k = this.__keyToDef_c__, g = this.__filtered_b__;
      Util.isNull(a) || a > g.length ? a = g.length : a < 0 && (a += g.length);
      this.grid.event.trigger("onBeforeAddColDef", [b]);
      if(Util.isNull(d)) {
        return this.grid.error("KEY_UNDEFINED")
      }
      if(k.hasOwnProperty(d)) {
        return this.grid.error("DUP_KEY", d)
      }
      this.__colDefs_a__.addAt(a, this.__extend_i__(k[d] = b));
      b.hidden !== !0 && (g.addAt(a, b), this.__reidx_f__());
      this.grid.event.trigger("onAfterAddColDef", [b, a]);
      return g.length
    }
  };
  d.__extend_i__ = function(a) {
    if(!Util.isNull(a)) {
      var c = {};
      $.extend(!0, c, this._options.__colDef_a__);
      $.extend(!0, c, a);
      $.extend(!0, a, c);
      a.sorter = c = b.sorter(a.sorter, a.key);
      if(Util.isNotNull(c)) {
        c.key = a.key
      }
      return a
    }
  };
  d.hide = function(a) {
    var b = this.__filtered_b__[a];
    if(!Util.isNull(b)) {
      return b.hidden = !0, this.__filtered_b__.removeAt(a), this.__reidx_f__(), this.grid.event.trigger("onHideCol", [b, a]), b
    }
  };
  d.show = function(a) {
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
  d.__filter_e__ = function() {
    this.__filtered_b__ = this.__colDefs_a__.filter(function(a) {
      return a.hidden !== !0
    });
    this.__reidx_f__();
    return this.__filtered_b__
  };
  d.__reidx_f__ = function() {
    this.__keyToIdx_d__ = {};
    return this.__reidxFrom_g__()
  };
  d.__reidxFrom_g__ = function(a) {
    Util.isNull(a) && (a = 0);
    for(var b = this.__filtered_b__, d = b.length, k = this.__keyToIdx_d__;a < d;a++) {
      k[b[a].key] = a
    }
    return k
  };
  d.get = function(a) {
    if(Util.isNull(a)) {
      return this.__filtered_b__
    }
    if(this.__filtered_b__.hasOwnProperty(a)) {
      return this.__filtered_b__[a]
    }
  };
  d.getByKey = function(a) {
    if(Util.isNotNull(a) && this.__keyToDef_c__.hasOwnProperty(a)) {
      return this.__keyToDef_c__[a]
    }
  };
  d.length = function() {
    return this.__filtered_b__.length
  };
  d.getIdxByKey = function(a) {
    return this.__keyToIdx_d__.hasOwnProperty(a) ? this.__keyToIdx_d__[a] : -1
  };
  d.getIdx = function(a) {
    return Util.isNotNull(a) && this.__keyToIdx_d__.hasOwnProperty(a.key) ? this.__keyToIdx_d__[a.key] : -1
  };
  d.sortByKey = function(a) {
    this.__filtered_b__.length = 0;
    this.__keyToIdx_d__ = {};
    for(var b = 0, d = a.length, k = this.__filtered_b__, g = this.__keyToIdx_d__, f = this.__keyToDef_c__;b < d;b++) {
      k.push(f[a[b]]), g[a[b]] = b
    }
    this.grid.event.trigger("onReorderCols", a);
    return this.__filtered_b__
  };
  d.getKeys = function() {
    return this.__filtered_b__.map(function(a) {
      return a.key
    })
  };
  b.sorter = function(a, b, d) {
    d = d ? !0 : !1;
    if(a === "text") {
      return{lexi:b, on:d, key:b}
    }
    if(a === "int") {
      return{on:d, comparator:function(a, d) {
        var e = a[b], h = d[b];
        Util.isNull(e) ? e = Number.MAX_VALUE : typeof e === "string" && (e = e.toInt());
        Util.isNull(h) ? h = Number.MAX_VALUE : typeof h === "string" && (h = h.toInt());
        return e - h
      }, key:b}
    }
    if(a === "float ÇÑ±¹ tehu") {
      return{on:d, comparator:function(a, d) {
        var e = a[b], h = d[b];
        Util.isNull(e) ? e = Number.MAX_VALUE : typeof e === "string" && (e = e.toFloat());
        Util.isNull(h) ? h = Number.MAX_VALUE : typeof h === "string" && (h = h.toFloat());
        return e - h
      }, key:b}
    }
  };
  JGM._add("ColDefManager", b)
})();
JGM.cell = {};
JGM.cell.Cell = {};
(function() {
  function b(a) {
    this.grid = a.grid;
    this.__datarow_h__ = a.datarow;
    this.__colDef_i__ = a.colDef;
    this.__init(a)
  }
  goog.exportSymbol("JGM.cell.Cell", b);
  b.getInstance = function(a) {
    return new b(a)
  };
  var d = b.prototype;
  d.__init = function(a) {
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
  d.destroy = function() {
    delete this.grid;
    delete this.__datarow_h__;
    delete this.__colDef_i__
  };
  d.getRowIdx = function() {
    if(Util.isNotNull(this.__datarow_h__)) {
      return this.grid.dataMgr.getIdx(this.__datarow_h__)
    }
  };
  d.getColIdx = function() {
    if(Util.isNotNull(this.__colDef_i__)) {
      return this.grid.colDefMgr.getIdx(this.__colDef_i__)
    }
  };
  d.getNode = function() {
    if(Util.isNotNullAnd(this.__datarow_h__, this.__colDef_i__)) {
      return this.grid.view.getCellByIdAndKey(this.grid.dataMgr.getId(this.__datarow_h__), this.__colDef_i__.key)
    }
  };
  d.getRowNode = function() {
    return this.grid.view.getRow(this.__datarow_h__)
  };
  d.get$ = function() {
    var a = this.getNode();
    return a !== void 0 ? $(a) : $([])
  };
  d.getDatarow = function() {
    return this.__datarow_h__
  };
  d.getColDef = function() {
    return this.__colDef_i__
  };
  d.getKey = function() {
    if(Util.isNotNull(this.__colDef_i__)) {
      return this.__colDef_i__.key
    }
  };
  d.getId = function() {
    return this.grid.dataMgr.getId(this.__datarow_h__)
  };
  d.getValue = function() {
    if(Util.isNotNullAnd(this.__datarow_h__, this.__colDef_i__)) {
      return this.__datarow_h__[this.__colDef_i__.key]
    }
  };
  d.isValid = function() {
    return Util.isNotNull(this.getNode())
  };
  d.isInvalid = function() {
    return Util.isNull(this.getNode())
  };
  d.isEmpty$ = function() {
    return this.get$().length === 0
  };
  d.has$ = function() {
    return this.get$().length !== 0
  };
  d.equals = function(a) {
    return Util.isNotNull(a) && Util.isNotNull(this.__datarow_h__) && this.__datarow_h__ === a.getDatarow() && Util.isNotNull(this.__colDef_i__) && this.__colDef_i__ === a.getColDef()
  };
  JGM._add("Cell", b)
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
    for(var d = b;d = d.substring(0, d.lastIndexOf("."));) {
      if(goog.getObjectByName(d)) {
        break
      }
      goog.implicitNamespaces_[d] = !0
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
goog.exportSymbol_ = function(b, d, a) {
  b = b.split(".");
  a = a || goog.global;
  !(b[0] in a) && a.execScript && a.execScript("var " + b[0]);
  for(var c;b.length && (c = b.shift());) {
    !b.length && goog.isDef(d) ? a[c] = d : a = a[c] ? a[c] : a[c] = {}
  }
};
goog.getObjectByName = function(b, d) {
  for(var a = b.split("."), c = d || goog.global, e;e = a.shift();) {
    if(goog.isDefAndNotNull(c[e])) {
      c = c[e]
    }else {
      return null
    }
  }
  return c
};
goog.globalize = function(b, d) {
  var a = d || goog.global, c;
  for(c in b) {
    a[c] = b[c]
  }
};
goog.addDependency = function(b, d, a) {
  if(!COMPILED) {
    for(var c, b = b.replace(/\\/g, "/"), e = goog.dependencies_, k = 0;c = d[k];k++) {
      e.nameToPath[c] = b, b in e.pathToNames || (e.pathToNames[b] = {}), e.pathToNames[b][c] = !0
    }
    for(c = 0;d = a[c];c++) {
      b in e.requires || (e.requires[b] = {}), e.requires[b][d] = !0
    }
  }
};
goog.ENABLE_DEBUG_LOADER = !0;
goog.require = function(b) {
  if(!COMPILED && !goog.isProvided_(b)) {
    if(goog.ENABLE_DEBUG_LOADER) {
      var d = goog.getPathFromDeps_(b);
      if(d) {
        goog.included_[d] = !0;
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
        for(var b = goog.global.document.getElementsByTagName("script"), d = b.length - 1;d >= 0;--d) {
          var a = b[d].src, c = a.lastIndexOf("?"), c = c == -1 ? a.length : c;
          if(a.substr(c - 7, 7) == "base.js") {
            goog.basePath = a.substr(0, c - 7);
            break
          }
        }
      }
    }
  }, goog.importScript_ = function(b) {
    var d = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_;
    !goog.dependencies_.written[b] && d(b) && (goog.dependencies_.written[b] = !0)
  }, goog.writeScriptTag_ = function(b) {
    return goog.inHtmlDocument_() ? (goog.global.document.write('<script type="text/javascript" src="' + b + '"><\/script>'), !0) : !1
  }, goog.writeScripts_ = function() {
    function b(e) {
      if(!(e in c.written)) {
        if(!(e in c.visited) && (c.visited[e] = !0, e in c.requires)) {
          for(var g in c.requires[e]) {
            if(!goog.isProvided_(g)) {
              if(g in c.nameToPath) {
                b(c.nameToPath[g])
              }else {
                throw Error("Undefined nameToPath for " + g);
              }
            }
          }
        }
        e in a || (a[e] = !0, d.push(e))
      }
    }
    var d = [], a = {}, c = goog.dependencies_, e;
    for(e in goog.included_) {
      c.written[e] || b(e)
    }
    for(e = 0;e < d.length;e++) {
      if(d[e]) {
        goog.importScript_(goog.basePath + d[e])
      }else {
        throw Error("Undefined script input");
      }
    }
  }, goog.getPathFromDeps_ = function(b) {
    return b in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[b] : null
  }, goog.findBasePath_()
}
goog.typeOf = function(b) {
  var d = typeof b;
  if(d == "object") {
    if(b) {
      if(b instanceof Array) {
        return"array"
      }else {
        if(b instanceof Object) {
          return d
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
    if(d == "function" && typeof b.call == "undefined") {
      return"object"
    }
  }
  return d
};
goog.propertyIsEnumerableCustom_ = function(b, d) {
  if(d in b) {
    for(var a in b) {
      if(a == d && Object.prototype.hasOwnProperty.call(b, d)) {
        return!0
      }
    }
  }
  return!1
};
goog.propertyIsEnumerable_ = function(b, d) {
  return b instanceof Object ? Object.prototype.propertyIsEnumerable.call(b, d) : goog.propertyIsEnumerableCustom_(b, d)
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
  var d = goog.typeOf(b);
  return d == "array" || d == "object" && typeof b.length == "number"
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
  }catch(d) {
  }
};
goog.UID_PROPERTY_ = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36);
goog.uidCounter_ = 0;
goog.getHashCode = goog.getUid;
goog.removeHashCode = goog.removeUid;
goog.cloneObject = function(b) {
  var d = goog.typeOf(b);
  if(d == "object" || d == "array") {
    if(b.clone) {
      return b.clone()
    }
    var d = d == "array" ? [] : {}, a;
    for(a in b) {
      d[a] = goog.cloneObject(b[a])
    }
    return d
  }
  return b
};
goog.bindNative_ = function(b, d, a) {
  return b.call.apply(b.bind, arguments)
};
goog.bindJs_ = function(b, d, a) {
  if(!b) {
    throw Error();
  }
  if(arguments.length > 2) {
    var c = Array.prototype.slice.call(arguments, 2);
    return function() {
      var a = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(a, c);
      return b.apply(d, a)
    }
  }else {
    return function() {
      return b.apply(d, arguments)
    }
  }
};
goog.bind = function(b, d, a) {
  goog.bind = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? goog.bindNative_ : goog.bindJs_;
  return goog.bind.apply(null, arguments)
};
goog.partial = function(b, d) {
  var a = Array.prototype.slice.call(arguments, 1);
  return function() {
    var c = Array.prototype.slice.call(arguments);
    c.unshift.apply(c, a);
    return b.apply(this, c)
  }
};
goog.mixin = function(b, d) {
  for(var a in d) {
    b[a] = d[a]
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
        var d = goog.global.document, a = d.createElement("script");
        a.type = "text/javascript";
        a.defer = !1;
        a.appendChild(d.createTextNode(b));
        d.body.appendChild(a);
        d.body.removeChild(a)
      }
    }else {
      throw Error("goog.globalEval not available");
    }
  }
};
goog.evalWorksForGlobals_ = null;
goog.getCssName = function(b, d) {
  var a = function(a) {
    return goog.cssNameMapping_[a] || a
  }, c;
  c = goog.cssNameMapping_ ? goog.cssNameMappingStyle_ == "BY_WHOLE" ? a : function(b) {
    for(var b = b.split("-"), c = [], d = 0;d < b.length;d++) {
      c.push(a(b[d]))
    }
    return c.join("-")
  } : function(a) {
    return a
  };
  return d ? b + "-" + c(d) : c(b)
};
goog.setCssNameMapping = function(b, d) {
  goog.cssNameMapping_ = b;
  goog.cssNameMappingStyle_ = d
};
goog.getMsg = function(b, d) {
  var a = d || {}, c;
  for(c in a) {
    var e = ("" + a[c]).replace(/\$/g, "$$$$"), b = b.replace(RegExp("\\{\\$" + c + "\\}", "gi"), e)
  }
  return b
};
goog.exportSymbol = function(b, d, a) {
  goog.exportSymbol_(b, d, a)
};
goog.exportProperty = function(b, d, a) {
  b[d] = a
};
goog.inherits = function(b, d) {
  function a() {
  }
  a.prototype = d.prototype;
  b.superClass_ = d.prototype;
  b.prototype = new a;
  b.prototype.constructor = b
};
goog.base = function(b, d, a) {
  var c = arguments.callee.caller;
  if(c.superClass_) {
    return c.superClass_.constructor.apply(b, Array.prototype.slice.call(arguments, 1))
  }
  for(var e = Array.prototype.slice.call(arguments, 2), k = !1, g = b.constructor;g;g = g.superClass_ && g.superClass_.constructor) {
    if(g.prototype[d] === c) {
      k = !0
    }else {
      if(k) {
        return g.prototype[d].apply(b, e)
      }
    }
  }
  if(b[d] === c) {
    return b.constructor.prototype[d].apply(b, e)
  }else {
    throw Error("goog.base called from a method of one name to a method of a different name");
  }
};
goog.scope = function(b) {
  b.call(goog.global)
};
})();
