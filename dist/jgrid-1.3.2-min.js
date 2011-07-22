var b = null;
alert("hi");
(function() {
  alert(this.s);
  this.s.D()
})();
var g = g || {};
g.global = window;
window.N = g;
g.g = !0;
g.v = "en";
g.$ = function(a) {
  g.f(a)
};
g.da = function(a) {
  if(!g.g) {
    throw a = a || "", Error("Importing test-only code into non-debug environment" + a ? ": " + a : ".");
  }
};
g.f = function(a, c, d) {
  a = a.split(".");
  d = d || g.global;
  !(a[0] in d) && d.execScript && d.execScript("var " + a[0]);
  for(var e;a.length && (e = a.shift());) {
    !a.length && g.n(c) ? d[e] = c : d = d[e] ? d[e] : d[e] = {}
  }
};
g.L = function(a, c) {
  for(var d = a.split("."), e = c || g.global, f;f = d.shift();) {
    if(g.o(e[f])) {
      e = e[f]
    }else {
      return b
    }
  }
  return e
};
g.M = function(a, c) {
  var d = c || g.global, e;
  for(e in a) {
    d[e] = a[e]
  }
};
g.z = function() {
};
g.u = !0;
g.ba = function() {
};
g.C = "";
g.X = function() {
};
g.O = function(a) {
  return a
};
g.w = function() {
  throw Error("unimplemented abstract method");
};
g.A = function(a) {
  a.J = function() {
    return a.m || (a.m = new a)
  }
};
g.a = function(a) {
  var c = typeof a;
  if(c == "object") {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }else {
        if(a instanceof Object) {
          return c
        }
      }
      var d = Object.prototype.toString.call(a);
      if(d == "[object Window]") {
        return"object"
      }
      if(d == "[object Array]" || typeof a.length == "number" && typeof a.splice != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if(d == "[object Function]" || typeof a.call != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if(c == "function" && typeof a.call == "undefined") {
      return"object"
    }
  }
  return c
};
g.q = function(a, c) {
  if(c in a) {
    for(var d in a) {
      if(d == c && Object.prototype.hasOwnProperty.call(a, c)) {
        return!0
      }
    }
  }
  return!1
};
g.Z = function(a, c) {
  return a instanceof Object ? Object.prototype.propertyIsEnumerable.call(a, c) : g.q(a, c)
};
g.n = function(a) {
  return a !== void 0
};
g.T = function(a) {
  return a === b
};
g.o = function(a) {
  return a != b
};
g.isArray = function(a) {
  return g.a(a) == "array"
};
g.Q = function(a) {
  var c = g.a(a);
  return c == "array" || c == "object" && typeof a.length == "number"
};
g.S = function(a) {
  return g.p(a) && typeof a.getFullYear == "function"
};
g.V = function(a) {
  return typeof a == "string"
};
g.R = function(a) {
  return typeof a == "boolean"
};
g.U = function(a) {
  return typeof a == "number"
};
g.isFunction = function(a) {
  return g.a(a) == "function"
};
g.p = function(a) {
  a = g.a(a);
  return a == "object" || a == "array" || a == "function"
};
g.l = function(a) {
  return a[g.b] || (a[g.b] = ++g.t)
};
g.r = function(a) {
  "removeAttribute" in a && a.removeAttribute(g.b);
  try {
    delete a[g.b]
  }catch(c) {
  }
};
g.b = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36);
g.t = 0;
g.I = g.l;
g.aa = g.r;
g.j = function(a) {
  var c = g.a(a);
  if(c == "object" || c == "array") {
    if(a.clone) {
      return a.clone()
    }
    var c = c == "array" ? [] : {}, d;
    for(d in a) {
      c[d] = g.j(a[d])
    }
    return c
  }
  return a
};
g.i = function(a, c, d) {
  return a.call.apply(a.bind, arguments)
};
g.h = function(a, c, d) {
  if(!a) {
    throw Error();
  }
  if(arguments.length > 2) {
    var e = Array.prototype.slice.call(arguments, 2);
    return function() {
      var d = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(d, e);
      return a.apply(c, d)
    }
  }else {
    return function() {
      return a.apply(c, arguments)
    }
  }
};
g.bind = function(a, c, d) {
  g.bind = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? g.i : g.h;
  return g.bind.apply(b, arguments)
};
g.Y = function(a, c) {
  var d = Array.prototype.slice.call(arguments, 1);
  return function() {
    var c = Array.prototype.slice.call(arguments);
    c.unshift.apply(c, d);
    return a.apply(this, c)
  }
};
g.W = function(a, c) {
  for(var d in c) {
    a[d] = c[d]
  }
};
g.now = Date.now || function() {
  return+new Date
};
g.globalEval = function(a) {
  if(g.global.execScript) {
    g.global.execScript(a, "JavaScript")
  }else {
    if(g.global.eval) {
      if(g.c == b) {
        g.global.eval("var _et_ = 1;"), typeof g.global._et_ != "undefined" ? (delete g.global._et_, g.c = !0) : g.c = !1
      }
      if(g.c) {
        g.global.eval(a)
      }else {
        var c = g.global.document, d = c.createElement("script");
        d.type = "text/javascript";
        d.defer = !1;
        d.appendChild(c.createTextNode(a));
        c.body.appendChild(d);
        c.body.removeChild(d)
      }
    }else {
      throw Error("goog.globalEval not available");
    }
  }
};
g.c = b;
g.H = function(a, c) {
  function d(a) {
    return g.e[a] || a
  }
  var e;
  e = g.e ? g.k == "BY_WHOLE" ? d : function(a) {
    for(var a = a.split("-"), c = [], e = 0;e < a.length;e++) {
      c.push(d(a[e]))
    }
    return c.join("-")
  } : function(a) {
    return a
  };
  return c ? a + "-" + e(c) : e(a)
};
g.ca = function(a, c) {
  g.e = a;
  g.k = c
};
g.K = function(a, c) {
  var d = c || {}, e;
  for(e in d) {
    var f = ("" + d[e]).replace(/\$/g, "$$$$"), a = a.replace(RegExp("\\{\\$" + e + "\\}", "gi"), f)
  }
  return a
};
g.G = function(a, c, d) {
  g.f(a, c, d)
};
g.F = function(a, c, d) {
  a[c] = d
};
g.P = function(a, c) {
  function d() {
  }
  d.prototype = c.prototype;
  a.d = c.prototype;
  a.prototype = new d;
  a.prototype.constructor = a
};
g.B = function(a, c, d) {
  var e = arguments.callee.caller;
  if(e.d) {
    return e.d.constructor.apply(a, Array.prototype.slice.call(arguments, 1))
  }
  for(var f = Array.prototype.slice.call(arguments, 2), i = !1, h = a.constructor;h;h = h.d && h.d.constructor) {
    if(h.prototype[c] === e) {
      i = !0
    }else {
      if(i) {
        return h.prototype[c].apply(a, f)
      }
    }
  }
  if(a[c] === e) {
    return a.constructor.prototype[c].apply(a, f)
  }else {
    throw Error("goog.base called from a method of one name to a method of a different name");
  }
};
g.scope = function(a) {
  a.call(g.global)
};

