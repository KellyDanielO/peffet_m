!(function (e) {
  function t(t) {
    for (var n, i, r = t[0], a = t[1], l = 0, s = []; l < r.length; l++)
      (i = r[l]),
        Object.prototype.hasOwnProperty.call(o, i) && o[i] && s.push(o[i][0]),
        (o[i] = 0);
    for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    for (d && d(t); s.length; ) s.shift()();
  }
  var n = {},
    o = { 1: 0 };
  function i(t) {
    if (n[t]) return n[t].exports;
    var o = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(o.exports, o, o.exports, i), (o.l = !0), o.exports;
  }
  (i.e = function (e) {
    var t = [],
      n = o[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var r = new Promise(function (t, i) {
          n = o[e] = [t, i];
        });
        t.push((n[2] = r));
        var a,
          l = document.createElement("script");
        (l.charset = "utf-8"),
          (l.timeout = 120),
          i.nc && l.setAttribute("nonce", i.nc),
          (l.src = (function (e) {
            return (
              i.p +
              "" +
              ({
                0: "dashjs",
                2: "vendors~dashjs",
                3: "vendors~hlsjs",
                4: "vendors~panolens",
                5: "vendors~vttjs",
                6: "vttjs",
                7: "webvtt",
              }[e] || e) +
              "." +
              {
                0: "b32084e48d3367df5b4e",
                2: "37ab9c99410c87ac983c",
                3: "3a92772ba05de22d2a0f",
                4: "ffe8209be8e30f4febb0",
                5: "86199655cecb3e6eea10",
                6: "7523ffd480c5f2a968ef",
                7: "77a7dbbe57f30a74ad42",
              }[e] +
              ".min.js"
            );
          })(e));
        var d = new Error();
        a = function (t) {
          (l.onerror = l.onload = null), clearTimeout(s);
          var n = o[e];
          if (0 !== n) {
            if (n) {
              var i = t && ("load" === t.type ? "missing" : t.type),
                r = t && t.target && t.target.src;
              (d.message =
                "Loading chunk " + e + " failed.\n(" + i + ": " + r + ")"),
                (d.name = "ChunkLoadError"),
                (d.type = i),
                (d.request = r),
                n[1](d);
            }
            o[e] = void 0;
          }
        };
        var s = setTimeout(function () {
          a({ type: "timeout", target: l });
        }, 12e4);
        (l.onerror = l.onload = a), document.head.appendChild(l);
      }
    return Promise.all(t);
  }),
    (i.m = e),
    (i.c = n),
    (i.d = function (e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          i.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = "https://cdn.fluidplayer.com/v3/current/"),
    (i.oe = function (e) {
      throw (console.error(e), e);
    });
  var r = (window.webpackJsonp = window.webpackJsonp || []),
    a = r.push.bind(r);
  (r.push = t), (r = r.slice());
  for (var l = 0; l < r.length; l++) t(r[l]);
  var d = a;
  i((i.s = 13));
})([
  function (e, t, n) {
    (function (t, n) {
      /*!
       * @overview es6-promise - a tiny implementation of Promises/A+.
       * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
       * @license   Licensed under MIT license
       *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
       * @version   v4.2.8+1e68dce6
       */ var o;
      (o = function () {
        "use strict";
        function e(e) {
          return "function" == typeof e;
        }
        var o = Array.isArray
            ? Array.isArray
            : function (e) {
                return "[object Array]" === Object.prototype.toString.call(e);
              },
          i = 0,
          r = void 0,
          a = void 0,
          l = function (e, t) {
            (_[i] = e), (_[i + 1] = t), 2 === (i += 2) && (a ? a(y) : b());
          },
          d = "undefined" != typeof window ? window : void 0,
          s = d || {},
          u = s.MutationObserver || s.WebKitMutationObserver,
          c =
            "undefined" == typeof self &&
            void 0 !== t &&
            "[object process]" === {}.toString.call(t),
          p =
            "undefined" != typeof Uint8ClampedArray &&
            "undefined" != typeof importScripts &&
            "undefined" != typeof MessageChannel;
        function f() {
          var e = setTimeout;
          return function () {
            return e(y, 1);
          };
        }
        var _ = new Array(1e3);
        function y() {
          for (var e = 0; e < i; e += 2)
            (0, _[e])(_[e + 1]), (_[e] = void 0), (_[e + 1] = void 0);
          i = 0;
        }
        var m,
          v,
          g,
          h,
          b = void 0;
        function w(e, t) {
          var n = this,
            o = new this.constructor(k);
          void 0 === o[E] && S(o);
          var i = n._state;
          if (i) {
            var r = arguments[i - 1];
            l(function () {
              return R(i, o, r, n._result);
            });
          } else I(n, o, e, t);
          return o;
        }
        function C(e) {
          if (e && "object" == typeof e && e.constructor === this) return e;
          var t = new this(k);
          return x(t, e), t;
        }
        c
          ? (b = function () {
              return t.nextTick(y);
            })
          : u
          ? ((v = 0),
            (g = new u(y)),
            (h = document.createTextNode("")),
            g.observe(h, { characterData: !0 }),
            (b = function () {
              h.data = v = ++v % 2;
            }))
          : p
          ? (((m = new MessageChannel()).port1.onmessage = y),
            (b = function () {
              return m.port2.postMessage(0);
            }))
          : (b =
              void 0 === d
                ? (function () {
                    try {
                      var e = Function("return this")().require("vertx");
                      return void 0 !== (r = e.runOnLoop || e.runOnContext)
                        ? function () {
                            r(y);
                          }
                        : f();
                    } catch (e) {
                      return f();
                    }
                  })()
                : f());
        var E = Math.random().toString(36).substring(2);
        function k() {}
        function P(t, n, o) {
          n.constructor === t.constructor &&
          o === w &&
          n.constructor.resolve === C
            ? (function (e, t) {
                1 === t._state
                  ? L(e, t._result)
                  : 2 === t._state
                  ? T(e, t._result)
                  : I(
                      t,
                      void 0,
                      function (t) {
                        return x(e, t);
                      },
                      function (t) {
                        return T(e, t);
                      }
                    );
              })(t, n)
            : void 0 === o
            ? L(t, n)
            : e(o)
            ? (function (e, t, n) {
                l(function (e) {
                  var o = !1,
                    i = (function (e, t, n, o) {
                      try {
                        e.call(t, n, o);
                      } catch (e) {
                        return e;
                      }
                    })(
                      n,
                      t,
                      function (n) {
                        o || ((o = !0), t !== n ? x(e, n) : L(e, n));
                      },
                      function (t) {
                        o || ((o = !0), T(e, t));
                      },
                      e._label
                    );
                  !o && i && ((o = !0), T(e, i));
                }, e);
              })(t, n, o)
            : L(t, n);
        }
        function x(e, t) {
          if (e === t)
            T(e, new TypeError("You cannot resolve a promise with itself"));
          else if (
            ((i = typeof (o = t)),
            null === o || ("object" !== i && "function" !== i))
          )
            L(e, t);
          else {
            var n = void 0;
            try {
              n = t.then;
            } catch (t) {
              return void T(e, t);
            }
            P(e, t, n);
          }
          var o, i;
        }
        function A(e) {
          e._onerror && e._onerror(e._result), O(e);
        }
        function L(e, t) {
          void 0 === e._state &&
            ((e._result = t),
            (e._state = 1),
            0 !== e._subscribers.length && l(O, e));
        }
        function T(e, t) {
          void 0 === e._state && ((e._state = 2), (e._result = t), l(A, e));
        }
        function I(e, t, n, o) {
          var i = e._subscribers,
            r = i.length;
          (e._onerror = null),
            (i[r] = t),
            (i[r + 1] = n),
            (i[r + 2] = o),
            0 === r && e._state && l(O, e);
        }
        function O(e) {
          var t = e._subscribers,
            n = e._state;
          if (0 !== t.length) {
            for (
              var o = void 0, i = void 0, r = e._result, a = 0;
              a < t.length;
              a += 3
            )
              (o = t[a]), (i = t[a + n]), o ? R(n, o, i, r) : i(r);
            e._subscribers.length = 0;
          }
        }
        function R(t, n, o, i) {
          var r = e(o),
            a = void 0,
            l = void 0,
            d = !0;
          if (r) {
            try {
              a = o(i);
            } catch (e) {
              (d = !1), (l = e);
            }
            if (n === a)
              return void T(
                n,
                new TypeError(
                  "A promises callback cannot return that same promise."
                )
              );
          } else a = i;
          void 0 !== n._state ||
            (r && d
              ? x(n, a)
              : !1 === d
              ? T(n, l)
              : 1 === t
              ? L(n, a)
              : 2 === t && T(n, a));
        }
        var V = 0;
        function S(e) {
          (e[E] = V++),
            (e._state = void 0),
            (e._result = void 0),
            (e._subscribers = []);
        }
        var B = (function () {
            function e(e, t) {
              (this._instanceConstructor = e),
                (this.promise = new e(k)),
                this.promise[E] || S(this.promise),
                o(t)
                  ? ((this.length = t.length),
                    (this._remaining = t.length),
                    (this._result = new Array(this.length)),
                    0 === this.length
                      ? L(this.promise, this._result)
                      : ((this.length = this.length || 0),
                        this._enumerate(t),
                        0 === this._remaining && L(this.promise, this._result)))
                  : T(
                      this.promise,
                      new Error("Array Methods must be provided an Array")
                    );
            }
            return (
              (e.prototype._enumerate = function (e) {
                for (var t = 0; void 0 === this._state && t < e.length; t++)
                  this._eachEntry(e[t], t);
              }),
              (e.prototype._eachEntry = function (e, t) {
                var n = this._instanceConstructor,
                  o = n.resolve;
                if (o === C) {
                  var i = void 0,
                    r = void 0,
                    a = !1;
                  try {
                    i = e.then;
                  } catch (e) {
                    (a = !0), (r = e);
                  }
                  if (i === w && void 0 !== e._state)
                    this._settledAt(e._state, t, e._result);
                  else if ("function" != typeof i)
                    this._remaining--, (this._result[t] = e);
                  else if (n === N) {
                    var l = new n(k);
                    a ? T(l, r) : P(l, e, i), this._willSettleAt(l, t);
                  } else
                    this._willSettleAt(
                      new n(function (t) {
                        return t(e);
                      }),
                      t
                    );
                } else this._willSettleAt(o(e), t);
              }),
              (e.prototype._settledAt = function (e, t, n) {
                var o = this.promise;
                void 0 === o._state &&
                  (this._remaining--,
                  2 === e ? T(o, n) : (this._result[t] = n)),
                  0 === this._remaining && L(o, this._result);
              }),
              (e.prototype._willSettleAt = function (e, t) {
                var n = this;
                I(
                  e,
                  void 0,
                  function (e) {
                    return n._settledAt(1, t, e);
                  },
                  function (e) {
                    return n._settledAt(2, t, e);
                  }
                );
              }),
              e
            );
          })(),
          N = (function () {
            function t(e) {
              (this[E] = V++),
                (this._result = this._state = void 0),
                (this._subscribers = []),
                k !== e &&
                  ("function" != typeof e &&
                    (function () {
                      throw new TypeError(
                        "You must pass a resolver function as the first argument to the promise constructor"
                      );
                    })(),
                  this instanceof t
                    ? (function (e, t) {
                        try {
                          t(
                            function (t) {
                              x(e, t);
                            },
                            function (t) {
                              T(e, t);
                            }
                          );
                        } catch (t) {
                          T(e, t);
                        }
                      })(this, e)
                    : (function () {
                        throw new TypeError(
                          "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                        );
                      })());
            }
            return (
              (t.prototype.catch = function (e) {
                return this.then(null, e);
              }),
              (t.prototype.finally = function (t) {
                var n = this.constructor;
                return e(t)
                  ? this.then(
                      function (e) {
                        return n.resolve(t()).then(function () {
                          return e;
                        });
                      },
                      function (e) {
                        return n.resolve(t()).then(function () {
                          throw e;
                        });
                      }
                    )
                  : this.then(t, t);
              }),
              t
            );
          })();
        return (
          (N.prototype.then = w),
          (N.all = function (e) {
            return new B(this, e).promise;
          }),
          (N.race = function (e) {
            var t = this;
            return o(e)
              ? new t(function (n, o) {
                  for (var i = e.length, r = 0; r < i; r++)
                    t.resolve(e[r]).then(n, o);
                })
              : new t(function (e, t) {
                  return t(new TypeError("You must pass an array to race."));
                });
          }),
          (N.resolve = C),
          (N.reject = function (e) {
            var t = new this(k);
            return T(t, e), t;
          }),
          (N._setScheduler = function (e) {
            a = e;
          }),
          (N._setAsap = function (e) {
            l = e;
          }),
          (N._asap = l),
          (N.polyfill = function () {
            var e = void 0;
            if (void 0 !== n) e = n;
            else if ("undefined" != typeof self) e = self;
            else
              try {
                e = Function("return this")();
              } catch (e) {
                throw new Error(
                  "polyfill failed because global object is unavailable in this environment"
                );
              }
            var t = e.Promise;
            if (t) {
              var o = null;
              try {
                o = Object.prototype.toString.call(t.resolve());
              } catch (e) {}
              if ("[object Promise]" === o && !t.cast) return;
            }
            e.Promise = N;
          }),
          (N.Promise = N),
          N
        );
      }),
        (e.exports = o());
    }.call(this, n(2), n(1)));
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t) {
    var n,
      o,
      i = (e.exports = {});
    function r() {
      throw new Error("setTimeout has not been defined");
    }
    function a() {
      throw new Error("clearTimeout has not been defined");
    }
    function l(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === r || !n) && setTimeout)
        return (n = setTimeout), setTimeout(e, 0);
      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : r;
      } catch (e) {
        n = r;
      }
      try {
        o = "function" == typeof clearTimeout ? clearTimeout : a;
      } catch (e) {
        o = a;
      }
    })();
    var d,
      s = [],
      u = !1,
      c = -1;
    function p() {
      u &&
        d &&
        ((u = !1), d.length ? (s = d.concat(s)) : (c = -1), s.length && f());
    }
    function f() {
      if (!u) {
        var e = l(p);
        u = !0;
        for (var t = s.length; t; ) {
          for (d = s, s = []; ++c < t; ) d && d[c].run();
          (c = -1), (t = s.length);
        }
        (d = null),
          (u = !1),
          (function (e) {
            if (o === clearTimeout) return clearTimeout(e);
            if ((o === a || !o) && clearTimeout)
              return (o = clearTimeout), clearTimeout(e);
            try {
              o(e);
            } catch (t) {
              try {
                return o.call(null, e);
              } catch (t) {
                return o.call(this, e);
              }
            }
          })(e);
      }
    }
    function _(e, t) {
      (this.fun = e), (this.array = t);
    }
    function y() {}
    (i.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      s.push(new _(e, t)), 1 !== s.length || u || l(f);
    }),
      (_.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (i.title = "browser"),
      (i.browser = !0),
      (i.env = {}),
      (i.argv = []),
      (i.version = ""),
      (i.versions = {}),
      (i.on = y),
      (i.addListener = y),
      (i.once = y),
      (i.off = y),
      (i.removeListener = y),
      (i.removeAllListeners = y),
      (i.emit = y),
      (i.prependListener = y),
      (i.prependOnceListener = y),
      (i.listeners = function (e) {
        return [];
      }),
      (i.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (i.cwd = function () {
        return "/";
      }),
      (i.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (i.umask = function () {
        return 0;
      });
  },
  function (e, t, n) {
    var o = n(4),
      i = n(5);
    "string" == typeof (i = i.__esModule ? i.default : i) &&
      (i = [[e.i, i, ""]]);
    var r = { insert: "head", singleton: !1 };
    o(i, r);
    e.exports = i.locals || {};
  },
  function (e, t, n) {
    "use strict";
    var o,
      i = function () {
        return (
          void 0 === o &&
            (o = Boolean(window && document && document.all && !window.atob)),
          o
        );
      },
      r = (function () {
        var e = {};
        return function (t) {
          if (void 0 === e[t]) {
            var n = document.querySelector(t);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
            e[t] = n;
          }
          return e[t];
        };
      })(),
      a = [];
    function l(e) {
      for (var t = -1, n = 0; n < a.length; n++)
        if (a[n].identifier === e) {
          t = n;
          break;
        }
      return t;
    }
    function d(e, t) {
      for (var n = {}, o = [], i = 0; i < e.length; i++) {
        var r = e[i],
          d = t.base ? r[0] + t.base : r[0],
          s = n[d] || 0,
          u = "".concat(d, " ").concat(s);
        n[d] = s + 1;
        var c = l(u),
          p = { css: r[1], media: r[2], sourceMap: r[3] };
        -1 !== c
          ? (a[c].references++, a[c].updater(p))
          : a.push({ identifier: u, updater: m(p, t), references: 1 }),
          o.push(u);
      }
      return o;
    }
    function s(e) {
      var t = document.createElement("style"),
        o = e.attributes || {};
      if (void 0 === o.nonce) {
        var i = n.nc;
        i && (o.nonce = i);
      }
      if (
        (Object.keys(o).forEach(function (e) {
          t.setAttribute(e, o[e]);
        }),
        "function" == typeof e.insert)
      )
        e.insert(t);
      else {
        var a = r(e.insert || "head");
        if (!a)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        a.appendChild(t);
      }
      return t;
    }
    var u,
      c =
        ((u = []),
        function (e, t) {
          return (u[e] = t), u.filter(Boolean).join("\n");
        });
    function p(e, t, n, o) {
      var i = n
        ? ""
        : o.media
        ? "@media ".concat(o.media, " {").concat(o.css, "}")
        : o.css;
      if (e.styleSheet) e.styleSheet.cssText = c(t, i);
      else {
        var r = document.createTextNode(i),
          a = e.childNodes;
        a[t] && e.removeChild(a[t]),
          a.length ? e.insertBefore(r, a[t]) : e.appendChild(r);
      }
    }
    function f(e, t, n) {
      var o = n.css,
        i = n.media,
        r = n.sourceMap;
      if (
        (i ? e.setAttribute("media", i) : e.removeAttribute("media"),
        r &&
          "undefined" != typeof btoa &&
          (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
            " */"
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = o;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(o));
      }
    }
    var _ = null,
      y = 0;
    function m(e, t) {
      var n, o, i;
      if (t.singleton) {
        var r = y++;
        (n = _ || (_ = s(t))),
          (o = p.bind(null, n, r, !1)),
          (i = p.bind(null, n, r, !0));
      } else
        (n = s(t)),
          (o = f.bind(null, n, t)),
          (i = function () {
            !(function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(n);
          });
      return (
        o(e),
        function (t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            o((e = t));
          } else i();
        }
      );
    }
    e.exports = function (e, t) {
      (t = t || {}).singleton ||
        "boolean" == typeof t.singleton ||
        (t.singleton = i());
      var n = d((e = e || []), t);
      return function (e) {
        if (
          ((e = e || []),
          "[object Array]" === Object.prototype.toString.call(e))
        ) {
          for (var o = 0; o < n.length; o++) {
            var i = l(n[o]);
            a[i].references--;
          }
          for (var r = d(e, t), s = 0; s < n.length; s++) {
            var u = l(n[s]);
            0 === a[u].references && (a[u].updater(), a.splice(u, 1));
          }
          n = r;
        }
      };
    };
  },
  function (e, t, n) {
    var o = n(6),
      i = n(7),
      r = n(8),
      a = n(9),
      l = n(10),
      d = n(11),
      s = n(12);
    t = o(!1);
    var u = i(r),
      c = i(a),
      p = i(l),
      f = i(d),
      _ = i(s);
    t.push([
      e.i,
      ".fluid_video_wrapper {\n    animation: none;\n    animation-delay: 0;\n    animation-direction: normal;\n    animation-duration: 0;\n    animation-fill-mode: none;\n    animation-iteration-count: 1;\n    animation-name: none;\n    animation-play-state: running;\n    animation-timing-function: ease;\n    backface-visibility: visible;\n    background: 0;\n    background-attachment: scroll;\n    background-clip: border-box;\n    background-color: transparent;\n    background-image: none;\n    background-origin: padding-box;\n    background-position: 0 0;\n    background-position-x: 0;\n    background-position-y: 0;\n    background-repeat: repeat;\n    background-size: auto auto;\n    border: 0;\n    border-style: none;\n    border-width: medium;\n    border-color: inherit;\n    border-bottom: 0;\n    border-bottom-color: inherit;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    border-bottom-style: none;\n    border-bottom-width: medium;\n    border-collapse: separate;\n    border-image: none;\n    border-left: 0;\n    border-left-color: inherit;\n    border-left-style: none;\n    border-left-width: medium;\n    border-radius: 0;\n    border-right: 0;\n    border-right-color: inherit;\n    border-right-style: none;\n    border-right-width: medium;\n    border-spacing: 0;\n    border-top: 0;\n    border-top-color: inherit;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    border-top-style: none;\n    border-top-width: medium;\n    bottom: auto;\n    box-shadow: none;\n    -webkit-box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n    caption-side: top;\n    clear: none;\n    clip: auto;\n    color: inherit;\n    columns: auto;\n    column-count: auto;\n    column-fill: balance;\n    column-gap: normal;\n    column-rule: medium none currentColor;\n    column-rule-color: currentColor;\n    column-rule-style: none;\n    column-rule-width: none;\n    column-span: 1;\n    column-width: auto;\n    content: normal;\n    counter-increment: none;\n    counter-reset: none;\n    cursor: auto;\n    direction: ltr;\n    display: inline;\n    empty-cells: show;\n    float: none;\n    font: normal;\n    font-family: -apple-system, BlinkMacSystemFont, 'segoe ui', roboto, oxygen-sans, ubuntu, cantarell, 'helvetica neue', 'arial', sans-serif, 'apple color emoji', 'segoe ui emoji', 'segoe ui symbol';\n    font-size: medium;\n    font-style: normal;\n    font-variant: normal;\n    font-weight: normal;\n    height: auto;\n    hyphens: none;\n    left: auto;\n    letter-spacing: normal;\n    line-height: normal;\n    list-style: none;\n    list-style-image: none;\n    list-style-position: outside;\n    list-style-type: disc;\n    margin: 0;\n    margin-bottom: 0;\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n    max-height: none;\n    max-width: none;\n    min-height: 0;\n    min-width: 0;\n    opacity: 1;\n    orphans: 0;\n    outline: 0;\n    outline-color: invert;\n    outline-style: none;\n    outline-width: medium;\n    overflow: visible;\n    overflow-x: visible;\n    overflow-y: visible;\n    padding: 0;\n    padding-bottom: 0;\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 0;\n    page-break-after: auto;\n    page-break-before: auto;\n    page-break-inside: auto;\n    perspective: none;\n    perspective-origin: 50% 50%;\n    position: static;\n    /* May need to alter quotes for different locales (e.g fr) */\n    quotes: '\\201C' '\\201D' '\\2018' '\\2019';\n    right: auto;\n    tab-size: 8;\n    table-layout: auto;\n    text-align: inherit;\n    text-align-last: auto;\n    text-decoration: none;\n    text-decoration-color: inherit;\n    text-decoration-line: none;\n    text-decoration-style: solid;\n    text-indent: 0;\n    text-shadow: none;\n    text-transform: none;\n    top: auto;\n    transform: none;\n    transform-style: flat;\n    transition: none;\n    transition-delay: 0s;\n    transition-duration: 0s;\n    transition-property: none;\n    transition-timing-function: ease;\n    unicode-bidi: normal;\n    vertical-align: baseline;\n    visibility: visible;\n    white-space: normal;\n    widows: 0;\n    width: auto;\n    word-spacing: normal;\n    z-index: auto;\n    -webkit-tap-highlight-color: transparent;\n}\n\n.fluid_video_wrapper canvas {\n    pointer-events: none;\n}\n\n.fluid_video_wrapper,\n.fluid_video_wrapper * {\n    -webkit-box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n}\n\n.fluid_video_wrapper:after, .fluid_video_wrapper:before {\n    content: none;\n}\n\n.fluid_video_wrapper {\n    position: relative;\n    display: inline-block;\n}\n\n.fluid_video_wrapper video {\n    position: relative;\n    background-color: #000000;\n    display: block;\n}\n\n.fluid_video_wrapper .vast_video_loading {\n    display: table;\n    text-align: center;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    pointer-events: auto;\n    z-index: 1;\n}\n\n.fluid_video_wrapper .vast_video_loading:before {\n    background-image: url(" +
        u +
        ");\n    background-position: center, center;\n    background-repeat: no-repeat, repeat;\n    background-color: rgba(0, 0, 0, 0.2);\n    content: '';\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n}\n\n.skip_button {\n    position: absolute;\n    bottom: 50px;\n    right: 0;\n    background-color: rgba(0, 0, 0, 0.7);\n    padding: 13px 21px 13px 21px;\n}\n\n.skip_button, .skip_button a {\n    color: #ffffff;\n    text-decoration: none;\n    cursor: pointer;\n    z-index: 10;\n    font-size: 13px;\n    font-family: -apple-system, BlinkMacSystemFont, 'segoe ui', roboto, oxygen-sans, ubuntu, cantarell, 'helvetica neue', 'arial', sans-serif, 'apple color emoji', 'segoe ui emoji', 'segoe ui symbol';\n    font-weight: normal;\n    white-space: nowrap;\n    text-align: start;\n}\n\n.skip_button a span.skip_button_icon {\n    display: inline-block;\n    text-align: left;\n    width: 21px;\n    position: relative;\n    bottom: 20px;\n}\n\n.skip_button a span.skip_button_icon:before {\n    background: url(" +
        c +
        ') no-repeat;\n    position: absolute;\n    height: 18px;\n    width: 18px;\n    top: 6px;\n    content: "";\n    opacity: 0.8;\n    -webkit-transition: opacity 0.3s ease-in-out;\n    -moz-transition: opacity 0.3s ease-in-out;\n    -ms-transition: opacity 0.3s ease-in-out;\n    -o-transition: opacity 0.3s ease-in-out;\n    transition: opacity 0.3s ease-in-out;\n    background-position: -122px -57px;\n}\n\n.skip_button a span.skip_button_icon:before:hover {\n    opacity: 1;\n}\n\n.skip_button_disabled {\n    cursor: default !important;\n    padding: 13px 21px 13px 21px;\n}\n\n.close_button {\n    position: absolute;\n    background: #000000 url(' +
        p +
        ") no-repeat scroll center center;\n    height: 16px;\n    width: 16px;\n    top: 0;\n    right: 0;\n    background-size: 18px 18px;\n    cursor: pointer;\n    padding: 1px;\n    z-index: 31;\n}\n\n.close_button:hover {\n    background-color: #000000;\n    border: 1px solid #ffffff;\n}\n\n.vast_clickthrough_layer {\n    /*IE Fix*/\n    background-color: white;\n    opacity: 0;\n}\n\n.fluid_ad_playing {\n    position: absolute;\n    background-color: black;\n    opacity: 0.8;\n    border-radius: 1px;\n    color: #ffffff;\n    font-size: 13px;\n    font-family: -apple-system, BlinkMacSystemFont, 'segoe ui', roboto, oxygen-sans, ubuntu, cantarell, 'helvetica neue', 'arial', sans-serif, 'apple color emoji', 'segoe ui emoji', 'segoe ui symbol';\n    font-weight: normal;\n    white-space: nowrap;\n    text-align: start;\n    line-height: 18px;\n    z-index: 10;\n    padding: 13px 21px 13px 21px;\n}\n\n.fluid_ad_cta {\n    position: absolute;\n    background-color: rgba(0, 0, 0, 0.7);\n    color: #ffffff;\n    font-size: 13px;\n    font-family: -apple-system, BlinkMacSystemFont, 'segoe ui', roboto, oxygen-sans, ubuntu, cantarell, 'helvetica neue', 'arial', sans-serif, 'apple color emoji', 'segoe ui emoji', 'segoe ui symbol';\n    font-weight: normal;\n    text-align: right;\n    cursor: pointer;\n    z-index: 10;\n    padding: 13px 21px 13px 13px;\n}\n\n.fluid_ad_cta a {\n    text-decoration: none;\n    color: #ffffff;\n    line-height: 18px;\n}\n\n.fluid_ad_cta:hover,\n.skip_button:not(.skip_button_disabled):hover {\n    background-color: rgba(0, 0, 0, 1);\n}\n\n.fluid_html_on_pause,\n.fluid_pseudo_poster {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    z-index: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    pointer-events: none;\n}\n\n.fluid_html_on_pause * {\n    pointer-events: auto;\n}\n\n/*Mobile Layout*/\n.fluid_video_wrapper.mobile .skip_button {\n    bottom: 75px;\n}\n\n/*\n.fluid_video_wrapper.mobile .fluid_ad_cta {\n        bottom: 125px;\n}\n*/\n.fluid_initial_play {\n    width: 60px;\n    height: 60px;\n    border-radius: 50px;\n    cursor: pointer;\n}\n\n.fluid_initial_play_button {\n    margin-top: 15px;\n    margin-left: 23px;\n    border-style: solid;\n    border-width: 15px 0 15px 21px;\n    border-color: transparent transparent transparent #ffffff;\n}\n\n.fluid_initial_pause_button {\n    margin-top: 15px;\n    margin-left: 17px;\n    width: 8px;\n    height: 31px;\n    border: 9px solid white;\n    border-top: 0;\n    border-bottom: 0;\n}\n\n.fluid_timeline_preview {\n    bottom: 11px;\n    color: #ffffff;\n    font-size: 13px;\n    line-height: 18px;\n    font-family: -apple-system, BlinkMacSystemFont, 'segoe ui', roboto, oxygen-sans, ubuntu, cantarell, 'helvetica neue', 'arial', sans-serif, 'apple color emoji', 'segoe ui emoji', 'segoe ui symbol';\n    font-weight: normal;\n    text-align: start;\n    padding: 13px 21px 13px 21px;\n    background-color: rgba(0, 0, 0, 0.85);\n    border-radius: 1px;\n}\n\n/* Duration */\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_fluid_control_duration {\n    display: inline-block;\n    position: absolute;\n    left: 32px;\n    height: 24px;\n    font-family: -apple-system, BlinkMacSystemFont, 'segoe ui', roboto, oxygen-sans, ubuntu, cantarell, 'helvetica neue', 'arial', sans-serif, 'apple color emoji', 'segoe ui emoji', 'segoe ui symbol';\n    font-size: 13px;\n    font-weight: normal;\n    font-style: normal;\n    text-align: left;\n    text-decoration: none;\n    line-height: 21px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_fluid_control_duration.cardboard_time {\n    left: 13px;\n    top: -15px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_fluid_control_duration.cardboard_time .ad_timer_prefix {\n    color: #F2C94C;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .ad_countdown .ad_timer_prefix {\n    color: #F2C94C;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .ad_countdown {\n    /*display: none;*/\n    position: absolute;\n    right: 0;\n    width: 75px;\n    bottom: 5px;\n    height: 24px;\n    color: red;\n    font-family: -apple-system, BlinkMacSystemFont, 'segoe ui', roboto, oxygen-sans, ubuntu, cantarell, 'helvetica neue', 'arial', sans-serif, 'apple color emoji', 'segoe ui emoji', 'segoe ui symbol';\n    font-size: 13px;\n    font-weight: normal;\n    font-style: normal;\n    text-align: left;\n    text-decoration: none;\n    line-height: 21px;\n}\n\n.initial_controls_show {\n    visibility: visible !important;\n    opacity: 1 !important;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_vr_container {\n    color: white;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: -moz-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%); /* FF3.6-15 */\n    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%); /* Chrome10-25,Safari5.1-6 */\n    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#ad000000', GradientType=0); /* IE6-9 */\n    height: 100%;\n    width: 100%;\n    z-index: 0;\n    pointer-events: none;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_vr_container .fluid_vr_joystick_panel {\n    height: 96px;\n    width: 72px;\n    left: 10px;\n    top: 10px;\n    position: absolute;\n    background: rgba(0, 0, 0, 0.7);\n    text-align: center;\n    border-radius: 6px;\n    overflow: hidden;\n    pointer-events: auto;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_vr_container .fluid_vr_joystick_panel .fluid_vr_button {\n    cursor: pointer;\n    display: inline-block;\n    text-align: left;\n    height: 24px;\n    width: 24px;\n    position: relative;\n    background: url(" +
        c +
        ") no-repeat;\n    opacity: 0.8;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_vr_container .fluid_vr_joystick_panel .fluid_vr_button:hover {\n    opacity: 1;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_vr_container .fluid_vr_joystick_panel .fluid_vr_joystick_up {\n    background-position: -336px -55px;\n    -webkit-transform: rotate(270deg); /* Chrome, Opera 15+, Safari 3.1+ */\n    -ms-transform: rotate(270deg); /* IE 9 */\n    transform: rotate(270deg); /* Firefox 16+, IE 10+, Opera  */\n    display: block;\n    left: calc(50% - 12px);\n    top: 0;\n    position: absolute;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_vr_container .fluid_vr_joystick_panel .fluid_vr_joystick_left {\n    background-position: -336px -55px;\n    -webkit-transform: rotate(180deg); /* Chrome, Opera 15+, Safari 3.1+ */\n    -ms-transform: rotate(1890deg); /* IE 9 */\n    transform: rotate(180deg); /* Firefox 16+, IE 10+, Opera  */\n    display: block;\n    left: 0;\n    top: 24px;\n    position: absolute;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_vr_container .fluid_vr_joystick_panel .fluid_vr_joystick_right {\n    background-position: -336px -55px;\n    -webkit-transform: rotate(0deg); /* Chrome, Opera 15+, Safari 3.1+ */\n    -ms-transform: rotate(0deg); /* IE 9 */\n    transform: rotate(0deg); /* Firefox 16+, IE 10+, Opera  */\n    display: block;\n    right: 0;\n    top: 24px;\n    position: absolute;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_vr_container .fluid_vr_joystick_panel .fluid_vr_joystick_down {\n    background-position: -336px -55px;\n    -webkit-transform: rotate(90deg); /* Chrome, Opera 15+, Safari 3.1+ */\n    -ms-transform: rotate(90deg); /* IE 9 */\n    transform: rotate(90deg); /* Firefox 16+, IE 10+, Opera  */\n    display: block;\n    left: calc(50% - 12px);\n    top: 48px;\n    position: absolute;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_vr_container .fluid_vr_joystick_panel .fluid_vr_joystick_zoomdefault {\n    background-position: -336px -17px;\n    top: 72px;\n    -webkit-transform: rotate(0deg); /* Chrome, Opera 15+, Safari 3.1+ */\n    -ms-transform: rotate(0deg); /* IE 9 */\n    transform: rotate(0deg); /* Firefox 16+, IE 10+, Opera  */\n    position: absolute;\n    left: calc(50% - 12px);\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_vr_container .fluid_vr_joystick_panel .fluid_vr_joystick_zoomin {\n    background-position: -305px -55px;\n    top: 72px;\n    -webkit-transform: rotate(0deg); /* Chrome, Opera 15+, Safari 3.1+ */\n    -ms-transform: rotate(0deg); /* IE 9 */\n    transform: rotate(0deg); /* Firefox 16+, IE 10+, Opera  */\n    position: absolute;\n    right: 0;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_vr_container .fluid_vr_joystick_panel .fluid_vr_joystick_zoomout {\n    background-position: -305px -17px;\n    top: 72px;\n    -webkit-transform: rotate(0deg); /* Chrome, Opera 15+, Safari 3.1+ */\n    -ms-transform: rotate(0deg); /* IE 9 */\n    transform: rotate(0deg); /* Firefox 16+, IE 10+, Opera  */\n    position: absolute;\n    left: 0;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container.fluid_vr_controls_container {\n    width: 50% !important;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container.fluid_vr2_controls_container {\n    width: 50% !important;\n    left: 50%;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container {\n    color: white;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: -moz-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%); /* FF3.6-15 */\n    background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%); /* Chrome10-25,Safari5.1-6 */\n    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#ad000000', GradientType=0); /* IE6-9 */\n    height: 53px;\n    z-index: 1;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_vpaid_iframe {\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    z-index: -10;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_vpaid_nonlinear_slot_iframe {\n    z-index: 30;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_vpaid_slot {\n    position: absolute !important;\n    top: 0 !important;\n    width: 100% !important;\n    height: 100% !important;\n    left: 0 !important;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_subtitles_container {\n    color: white;\n    position: absolute;\n    bottom: 46px;\n    left: 0;\n    right: 0;\n    height: auto;\n    z-index: 1;\n    text-align: center;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_subtitles_container div {\n    display: inline;\n    background: black;\n    color: white;\n    font-size: 1em;\n    font-family: -apple-system, BlinkMacSystemFont, 'segoe ui', roboto, oxygen-sans, ubuntu, cantarell, 'helvetica neue', 'arial', sans-serif, 'apple color emoji', 'segoe ui emoji', 'segoe ui symbol';\n    padding: 0.25em;\n    border-radius: 4px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fade_out {\n    visibility: hidden;\n    opacity: 0;\n    -webkit-transition: visibility 0.5s, opacity 0.5s; /* Safari */\n    transition: visibility 0.5s, opacity 0.5s;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fade_in {\n    visibility: visible;\n    opacity: 1;\n    -webkit-transition: visibility 0.5s, opacity 0.5s; /* Safari */\n    transition: visibility 0.5s, opacity 0.5s;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default.pseudo_fullscreen {\n    width: 100% !important;\n    height: 100% !important;\n    top: 0;\n    left: 0;\n    position: fixed;\n    z-index: 99999;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default:-webkit-full-screen {\n    width: 100% !important;\n    height: 100% !important;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default:-ms-fullscreen {\n    width: 100% !important;\n    height: 100% !important;\n    position: absolute;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_context_menu {\n    background-color: #000000;\n    color: #ffffff;\n    font-size: 13px;\n    font-family: -apple-system, BlinkMacSystemFont, 'segoe ui', roboto, oxygen-sans, ubuntu, cantarell, 'helvetica neue', 'arial', sans-serif, 'apple color emoji', 'segoe ui emoji', 'segoe ui symbol';\n    font-weight: normal;\n    white-space: nowrap;\n    text-align: start;\n    z-index: 11;\n    opacity: 0.8;\n    border-radius: 1px;\n}\n\n/* IE 10+ */\n_:-ms-lang(x),\n.fluid_video_wrapper.fluid_player_layout_default .fluid_context_menu {\n    text-align: left;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_context_menu ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_context_menu ul li {\n    padding: 13px 71px 13px 21px;\n    cursor: pointer;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_context_menu ul li + li {\n    border-top: 1px solid #000000;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_context_menu ul li:hover {\n    background-color: #1e1e1e;\n    color: #fbfaff;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_left {\n    width: 24px;\n    left: 20px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container.skip_controls .fluid_controls_left {\n    width: 80px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button {\n    width: 24px;\n    height: 24px;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right {\n    left: 60px;\n    right: 20px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container.skip_controls .fluid_controls_right {\n    left: 110px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_left,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right {\n    position: absolute;\n    height: 24px;\n    top: 23px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container {\n    height: 14px;\n    position: absolute;\n    left: 13px;\n    right: 13px;\n    z-index: 1;\n    top: 8px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container .fluid_controls_progress {\n    position: absolute;\n    top: 5px;\n    width: 100%;\n    height: 4px;\n    background-color: rgba(255, 255, 255, 0.25);\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container .fluid_controls_buffered {\n    position: absolute;\n    top: 5px;\n    width: 0;\n    height: 3px;\n    background-color: rgba(255, 255, 255, 0.5);\n    z-index: -1;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container .fluid_controls_progress,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container .fluid_controls_progress .fluid_controls_currentprogress {\n    position: absolute;\n    height: 3px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container:hover .fluid_controls_progress,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container:hover .fluid_controls_buffered,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container:hover .fluid_controls_ad_markers_holder {\n    margin-top: -1px;\n    height: 5px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container:hover .fluid_controls_progress .fluid_controls_currentprogress {\n    height: 5px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container .fluid_timeline_preview_container {\n    border: 1px solid #262626;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container .fluid_timeline_preview_container, .fluid_timeline_preview_container_shadow {\n    bottom: 14px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container.fluid_slider .fluid_controls_progress .fluid_controls_currentprogress .fluid_controls_currentpos {\n    background-color: white;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container.fluid_slider .fluid_controls_progress .fluid_controls_currentprogress .fluid_controls_currentpos,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container.fluid_ad_slider .fluid_controls_progress .fluid_controls_currentprogress .fluid_controls_currentpos {\n    opacity: 0;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container.fluid_slider:hover .fluid_controls_progress .fluid_controls_currentprogress .fluid_controls_currentpos {\n    opacity: 1;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container.fluid_slider .fluid_controls_progress .fluid_controls_currentprogress .fluid_controls_currentpos {\n    -webkit-transition: opacity 0.3s; /* Safari */\n    transition: opacity 0.3s;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_ad_markers_holder {\n    position: absolute;\n    top: 5px;\n    width: 100%;\n    height: 3px;\n    z-index: 2;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_ad_marker {\n    position: absolute;\n    background-color: #FFCC00;\n    height: 100%;\n    width: 6px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_control_volume_container {\n    height: 24px;\n    width: 56px;\n    left: 25px;\n    top: -1px;\n    z-index: 2;\n    opacity: 0.8;\n    -webkit-transition: opacity 0.3s ease-in-out;\n    -moz-transition: opacity 0.3s ease-in-out;\n    -ms-transition: opacity 0.3s ease-in-out;\n    -o-transition: opacity 0.3s ease-in-out;\n    transition: opacity 0.3s ease-in-out;\n    display: none;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_control_volume_container:hover {\n    opacity: 1;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_control_volume_container .fluid_control_volume {\n    position: relative;\n    height: 3px;\n    width: 100%;\n    margin-top: 10px;\n    background-color: rgba(171, 172, 172, 0.68);\n    z-index: 3;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_control_volume_container .fluid_control_volume .fluid_control_currentvolume {\n    float: left;\n    background-color: white;\n    height: 3px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_control_volume_container .fluid_control_volume .fluid_control_currentvolume .fluid_control_volume_currentpos {\n    background-color: white;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container .fluid_controls_progress .fluid_controls_currentpos {\n    right: -4px;\n    z-index: 3;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_control_volume_container .fluid_control_volume .fluid_control_currentvolume .fluid_control_volume_currentpos,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container .fluid_controls_progress .fluid_controls_currentpos {\n    width: 11px;\n    height: 11px;\n    position: absolute;\n    top: -4px;\n    border-radius: 6px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_progress_container .fluid_controls_progress .fluid_controls_currentpos {\n    width: 13px;\n    height: 13px;\n    position: absolute;\n    top: -4px;\n    border-radius: 6px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container.no_volume_bar .fluid_controls_right .fluid_control_volume_container {\n    display: none;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_slider {\n    cursor: pointer;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container div div {\n    display: block;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button.fluid_button_fullscreen,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button.fluid_button_fullscreen_exit {\n    float: right;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button_video_source,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button_subtitles,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button_cardboard {\n    font-size: 13px;\n    height: 24px;\n    line-height: 24px;\n    float: right;\n    cursor: pointer;\n    position: relative;\n    text-align: right;\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */\n    -khtml-user-select: none; /* Konqueror HTML */\n    -moz-user-select: none; /* Firefox */\n    -ms-user-select: none; /* Internet Explorer/Edge */\n    user-select: none;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button_video_source .fluid_video_sources_title,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button_subtitles .fluid_subtitles_title {\n    width: 80px;\n    overflow: hidden;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button_subtitles .fluid_subtitles_list,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button_video_source .fluid_video_sources_list,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_video_playback_rates {\n    position: absolute;\n    bottom: 25px;\n    right: 3px;\n    z-index: 888888;\n    opacity: 99%;\n    background-color: rgba(0, 0, 0, 1);\n    border-radius: 2px;\n    color: #ffffff;\n    font-size: 13px;\n    font-family: -apple-system, BlinkMacSystemFont, 'segoe ui', roboto, oxygen-sans, ubuntu, cantarell, 'helvetica neue', 'arial', sans-serif, 'apple color emoji', 'segoe ui emoji', 'segoe ui symbol';\n    font-weight: normal;\n    white-space: nowrap;\n    text-align: start;\n    width: max-content;\n    padding: 0.5em;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button_subtitles .fluid_subtitles_list .fluid_subtitle_list_item,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button_video_source .fluid_video_sources_list .fluid_video_source_list_item {\n    padding: 12px 34px 12px 24px;\n    line-height: 15px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button_video_source .fluid_video_sources_list .fluid_video_source_list_item:hover,\n.fluid_video_playback_rates_item:hover,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button_subtitles .fluid_subtitles_list .fluid_subtitle_list_item:hover {\n    background-color: #3a3a3a;\n}\n\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_control_volume_container,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button.fluid_button_volume,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button.fluid_button_mute {\n    position: absolute;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button.fluid_button_volume,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button.fluid_button_mute {\n    left: -10px;\n}\n\n/* Button Icons */\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_play,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_pause,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_skip_back,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_skip_forward,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_volume,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_mute,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_video_source,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_fullscreen,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_fullscreen_exit,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_playback_rate,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_download,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_theatre,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_subtitles,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_cardboard {\n    display: inline-block;\n    text-align: left;\n    height: 24px;\n    width: 24px;\n    position: relative;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_play:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_pause:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_skip_back:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_skip_forward:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_volume:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_mute:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_video_source:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_fullscreen:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_fullscreen_exit:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_playback_rate:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_download:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_theatre:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_subtitles:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_cardboard:before {\n    background: url(" +
        c +
        ') no-repeat;\n    position: absolute;\n    height: 24px;\n    width: 24px;\n    top: 1px;\n    left: 5px;\n    content: "";\n    opacity: 0.8;\n    -webkit-transition: opacity 0.3s ease-in-out;\n    -moz-transition: opacity 0.3s ease-in-out;\n    -ms-transition: opacity 0.3s ease-in-out;\n    -o-transition: opacity 0.3s ease-in-out;\n    transition: opacity 0.3s ease-in-out;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_play:before {\n    background-position: -15px -19px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_pause:before {\n    background-position: -15px -57px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_volume:before {\n    background-position: -52px -19px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_mute:before {\n    background-position: -52px -57px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_fullscreen:before {\n    background-position: -88px -19px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_fullscreen_exit:before {\n    background-position: -88px -57px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_video_source:before {\n    background-position: -122px -19px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_playback_rate:before {\n    background-position: -232px -19px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_download:before {\n    background-position: -194px -18px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_theatre:before {\n    background-position: -195px -56px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_subtitles:before {\n    background-position: -269px -19px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_cardboard:before {\n    background-position: -269px -56px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_skip_back:before {\n    background: url(' +
        f +
        ") no-repeat;\n    background-position: -2px -2px;\n}\n\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_skip_forward:before {\n    background: url(" +
        _ +
        ") no-repeat;\n    background-position: -2px -2px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_skip_back {\n    margin-left: 5px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_video_source:hover:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_fullscreen_exit:hover:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_fullscreen:hover:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_mute:hover:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_volume:hover:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_pause:hover:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_play:hover:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_skip_back:hover:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_skip_forward:hover:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_playback_rate:hover:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_download:hover:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_theatre:hover:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_subtitles:hover:before,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_cardboard:hover:before {\n    opacity: 1;\n}\n\n.fp_title {\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    color: #ffffff;\n    font-size: 15px;\n    font-family: -apple-system, BlinkMacSystemFont, 'segoe ui', roboto, oxygen-sans, ubuntu, cantarell, 'helvetica neue', 'arial', sans-serif, 'apple color emoji', 'segoe ui emoji', 'segoe ui symbol';\n    font-weight: normal;\n    white-space: nowrap;\n}\n\n/* Pulse class and keyframe animation */\n.transform-active {\n    animation: flash 1s infinite;\n    display: inline-block !important;\n    opacity: 0;\n}\n\n@-webkit-keyframes flash {\n    0% {\n        opacity: 0.6;\n        -webkit-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);\n    }\n    70% {\n        -webkit-box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);\n    }\n    100% {\n        opacity: 0;\n        display: none;\n        -webkit-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);\n    }\n}\n\n@keyframes flash {\n    0% {\n        opacity: 0.6;\n        -moz-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5);\n        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.6);\n    }\n    70% {\n        -moz-box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);\n        box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);\n    }\n    100% {\n        opacity: 0;\n        display: none;\n        -moz-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);\n        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);\n    }\n}\n\n.fluid_nonLinear_top, .fluid_nonLinear_middle, .fluid_nonLinear_bottom {\n    flex-direction: column;\n    align-items: center;\n    cursor: pointer;\n    display: flex;\n    vertical-align: middle;\n    align-content: center;\n    border: 1px solid #777777;\n    position: absolute;\n    left: 50%;\n    margin-right: -50%;\n    background-color: rgba(0, 0, 0, 0.7);\n}\n\n.fluid_nonLinear_top {\n    top: 20px;\n    transform: translate(-50%);\n}\n\n.fluid_nonLinear_middle {\n    top: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.fluid_nonLinear_bottom {\n    bottom: 50px;\n    transform: translate(-50%);\n}\n\n.fluid_vpaidNonLinear_top, .fluid_vpaidNonLinear_middle, .fluid_vpaidNonLinear_bottom {\n    flex-direction: column;\n    align-items: center;\n    cursor: pointer;\n    vertical-align: middle;\n    align-content: center;\n    position: absolute;\n    display: flex;\n}\n\n.fluid_vpaidNonLinear_frame {\n    margin: auto;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n}\n\n.fluid_vpaidNonLinear_top {\n    top: 20px;\n}\n\n.fluid_vpaidNonLinear_middle {\n    top: 50%;\n}\n\n.fluid_vpaidNonLinear_bottom {\n    bottom: 50px;\n}\n\n.add_icon_clickthrough {\n    color: #F2C94C;\n    line-height: 18px;\n}\n\n.add_icon_clickthrough:before {\n    background: url(" +
        c +
        ') no-repeat;\n    height: 18px;\n    width: 18px;\n    top: 30px;\n    padding: 1px 22px 0 0;\n    content: "";\n    background-position: -162px -57px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_theatre,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_playback_rate,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_video_source,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_download,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_subtitles,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_cardboard {\n    float: right;\n    padding-right: 5px;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_theatre,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_playback_rate,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_video_source,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_download,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_subtitles,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_button.fluid_button_cardboard {\n    display: none;\n}\n\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button_subtitles .fluid_subtitles_list,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_button_video_source .fluid_video_sources_list,\n.fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_video_playback_rates {\n    z-index: 888888 !important;\n    opacity: 0.9 !important;\n}\n\n.fluid_video_playback_rates_item {\n    padding: 9px 25px 9px 25px;\n    line-height: 15px;\n    text-align: center;\n}\n\n.fluid_theatre_mode {\n    position: fixed;\n    float: left;\n    top: 0;\n    z-index: 10;\n    box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.8);\n}\n\n.source_button_icon {\n    background: url(' +
        c +
        ") no-repeat;\n    float: left;\n    cursor: pointer;\n    height: 18px;\n    width: 18px;\n    background-position: -164px -21px;\n    opacity: 0;\n}\n\n.subtitle_button_icon {\n    background: url(" +
        c +
        ") no-repeat;\n    float: left;\n    cursor: pointer;\n    height: 18px;\n    width: 18px;\n    background-position: -164px -21px;\n    opacity: 0;\n}\n\n.source_selected {\n    opacity: 1 !important;\n}\n\n.subtitle_selected {\n    opacity: 1 !important;\n}\n\n@media only screen and (min-device-width: 375px) {\n    .fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_fluid_control_duration {\n        left: 105px;\n    }\n\n    .fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container.no_volume_bar .fluid_fluid_control_duration {\n        left: 32px;\n    }\n\n    .fluid_video_wrapper.fluid_player_layout_default .fluid_controls_container .fluid_controls_right .fluid_control_volume_container {\n        display: block;\n    }\n}\n\n.fp_logo {\n    visibility: hidden;\n    opacity: 0;\n    -webkit-transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;\n    -moz-transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;\n    -ms-transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;\n    -o-transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;\n    transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;\n}\n\n.fp_hd_source::before {\n    font-weight: bolder;\n    font-size: 6pt;\n    content: 'HD';\n    padding-left: 3px;\n}\n",
      "",
    ]),
      (e.exports = t);
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      var t = [];
      return (
        (t.toString = function () {
          return this.map(function (t) {
            var n = (function (e, t) {
              var n = e[1] || "",
                o = e[3];
              if (!o) return n;
              if (t && "function" == typeof btoa) {
                var i =
                    ((a = o),
                    (l = btoa(unescape(encodeURIComponent(JSON.stringify(a))))),
                    (d =
                      "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                        l
                      )),
                    "/*# ".concat(d, " */")),
                  r = o.sources.map(function (e) {
                    return "/*# sourceURL="
                      .concat(o.sourceRoot || "")
                      .concat(e, " */");
                  });
                return [n].concat(r).concat([i]).join("\n");
              }
              var a, l, d;
              return [n].join("\n");
            })(t, e);
            return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
          }).join("");
        }),
        (t.i = function (e, n, o) {
          "string" == typeof e && (e = [[null, e, ""]]);
          var i = {};
          if (o)
            for (var r = 0; r < this.length; r++) {
              var a = this[r][0];
              null != a && (i[a] = !0);
            }
          for (var l = 0; l < e.length; l++) {
            var d = [].concat(e[l]);
            (o && i[d[0]]) ||
              (n &&
                (d[2]
                  ? (d[2] = "".concat(n, " and ").concat(d[2]))
                  : (d[2] = n)),
              t.push(d));
          }
        }),
        t
      );
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e, t) {
      return (
        t || (t = {}),
        "string" != typeof (e = e && e.__esModule ? e.default : e)
          ? e
          : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
            t.hash && (e += t.hash),
            /["'() \t\n]/.test(e) || t.needQuotes
              ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"')
              : e)
      );
    };
  },
  function (e, t) {
    e.exports =
      "data:image/svg+xml,%3Csvg class='lds-eclipse' width='200' height='200' style='background:0 0' preserveAspectRatio='xMidYMid' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M68.095 59.578A20 20 0 0031.14 44.27a22 20-67.5 0136.955 15.308' fill='%23fff'%3E %3CanimateTransform attributeName='transform' begin='0s' calcMode='linear' dur='0.8s' keyTimes='0;1' repeatCount='indefinite' type='rotate' values='0 50 51;360 50 51'/%3E %3C/path%3E %3C/svg%3E";
  },
  function (e, t) {
    e.exports =
      "data:image/svg+xml,%3Csvg xmlns:xlink='http://www.w3.org/1999/xlink' xmlns='http://www.w3.org/2000/svg' width='388.75' height='96' version='1.1' viewBox='0 0 388.75 96' id='svg63'%3E %3Cpath id='path4087' d='m 347.64062,35.959 a 6.9826789,6.9826789 0 0 0 6.98438,-6.984375 6.9826789,6.9826789 0 0 0 -6.98438,-6.982422 6.9826789,6.9826789 0 0 0 -6.98242,6.982422 6.9826789,6.9826789 0 0 0 6.98242,6.984375 z m 0,-2.476562 a 4.5078053,4.5078053 0 0 1 -4.50781,-4.507813 4.5078053,4.5078053 0 0 1 4.50781,-4.507812 4.5078053,4.5078053 0 0 1 4.50781,4.507812 4.5078053,4.5078053 0 0 1 -4.50781,4.507813 z' style='fill:%23ffffff;fill-opacity:1;stroke-width:1.70873225' /%3E %3Cpath style='fill:%23ffffff;fill-opacity:1;stroke-width:1.00886583' d='M 273.55469,22 C 272.69375,22 272,22.693749 272,23.554688 V 34.445312 C 272,35.306251 272.69375,36 273.55469,36 h 10.89062 C 285.30625,36 286,35.306251 286,34.445312 V 23.554688 C 286,22.693749 285.30625,22 284.44531,22 Z m 3.61133,4.541016 c 0.22916,0 0.45442,0.02083 0.67578,0.0625 0.22396,0.03906 0.44661,0.09896 0.66797,0.179687 v 1.140625 c -0.19011,-0.130208 -0.38151,-0.226562 -0.57422,-0.289062 -0.19011,-0.0625 -0.38802,-0.09375 -0.59375,-0.09375 -0.39063,0 -0.69532,0.114583 -0.91407,0.34375 -0.21614,0.226562 -0.32421,0.54427 -0.32421,0.953125 0,0.408854 0.10807,0.727864 0.32421,0.957031 0.21875,0.226562 0.52344,0.339844 0.91407,0.339844 0.21875,0 0.42578,-0.03255 0.62109,-0.09766 0.19792,-0.0651 0.38021,-0.161458 0.54688,-0.289062 v 1.144531 c -0.21875,0.08073 -0.44141,0.140625 -0.66797,0.179688 -0.22396,0.04167 -0.44922,0.0625 -0.67578,0.0625 -0.78907,0 -1.40625,-0.201823 -1.85157,-0.605469 -0.44531,-0.40625 -0.66797,-0.970052 -0.66797,-1.691406 0,-0.721355 0.22266,-1.283855 0.66797,-1.6875 0.44532,-0.40625 1.0625,-0.609375 1.85157,-0.609375 z m 4.75,0 c 0.22916,0 0.45442,0.02083 0.67578,0.0625 0.22396,0.03906 0.44661,0.09896 0.66797,0.179687 v 1.140625 c -0.19011,-0.130208 -0.38151,-0.226562 -0.57422,-0.289062 -0.19011,-0.0625 -0.38802,-0.09375 -0.59375,-0.09375 -0.39063,0 -0.69532,0.114583 -0.91407,0.34375 -0.21614,0.226562 -0.32421,0.54427 -0.32421,0.953125 0,0.408854 0.10807,0.727864 0.32421,0.957031 0.21875,0.226562 0.52344,0.339844 0.91407,0.339844 0.21875,0 0.42578,-0.03255 0.62109,-0.09766 0.19792,-0.0651 0.38021,-0.161458 0.54688,-0.289062 v 1.144531 c -0.21875,0.08073 -0.44141,0.140625 -0.66797,0.179688 -0.22396,0.04167 -0.44922,0.0625 -0.67578,0.0625 -0.78907,0 -1.40625,-0.201823 -1.85157,-0.605469 -0.44531,-0.40625 -0.66797,-0.970052 -0.66797,-1.691406 0,-0.721355 0.22266,-1.283855 0.66797,-1.6875 0.44532,-0.40625 1.0625,-0.609375 1.85157,-0.609375 z' id='rect7816' /%3E %3Cg transform='translate(-3702,106)' id='g44'%3E %3CclipPath id='q' style='clip-rule:evenodd'%3E %3Cpath d='m 3702,-106 h 272 v 96 h -272 z' id='path6' style='fill:%23ffffff'/%3E %3C/clipPath%3E %3Cg clip-path='url(%23q)' id='g42'%3E %3Cuse transform='translate(3757,-86)' xlink:href='%23o' id='use9' style='fill:%23ffffff' x='0' y='0' width='100%25' height='100%25'/%3E %3Cuse transform='translate(3757,-48)' xlink:href='%23i' id='use11' style='fill:%23ffffff' x='0' y='0' width='100%25' height='100%25'/%3E %3Cuse transform='translate(3830,-84)' xlink:href='%23h' id='use13' style='fill:%23ffffff' x='0' y='0' width='100%25' height='100%25'/%3E %3Cuse transform='translate(3723,-86)' xlink:href='%23g' id='use15' style='fill:%23ffffff' x='0' y='0' width='100%25' height='100%25'/%3E %3Cuse transform='translate(3723,-48)' xlink:href='%23f' id='use17' style='fill:%23ffffff' x='0' y='0' width='100%25' height='100%25'/%3E %3Cuse transform='translate(3795,-46)' xlink:href='%23e' id='use19' style='fill:%23ffffff' x='0' y='0' width='100%25' height='100%25'/%3E %3Cuse transform='translate(3831,-46)' xlink:href='%23d' id='use21' style='fill:%23ffffff' x='0' y='0' width='100%25' height='100%25'/%3E %3Cuse transform='translate(3865,-44)' xlink:href='%23c' id='use23' style='fill:%23f2c94c' x='0' y='0' width='100%25' height='100%25'/%3E %3Cuse transform='translate(3795,-84)' xlink:href='%23b' id='use25' style='fill:%23ffffff' x='0' y='0' width='100%25' height='100%25'/%3E %3Cuse transform='translate(3866,-83)' xlink:href='%23a' id='use27' style='fill:%23ffffff' x='0' y='0' width='100%25' height='100%25'/%3E %3Cuse transform='translate(3939,-47)' xlink:href='%23n' id='use29' style='fill:%23ffffff' x='0' y='0' width='100%25' height='100%25'/%3E %3Cmask id='p'%3E %3Cuse transform='translate(3902,-46)' xlink:href='%23m' id='use31' style='fill:%23ffffff' x='0' y='0' width='100%25' height='100%25'/%3E %3C/mask%3E %3Cg mask='url(%23p)' id='g36'%3E %3Cuse transform='translate(3902,-46)' xlink:href='%23l' id='use34' style='fill:%23ffffff' x='0' y='0' width='100%25' height='100%25'/%3E %3C/g%3E %3Cuse transform='translate(3904,-85)' xlink:href='%23k' id='use38' style='fill:%23ffffff' x='0' y='0' width='100%25' height='100%25'/%3E %3Cuse transform='translate(3939,-85)' xlink:href='%23j' id='use40' style='fill:%23ffffff' x='0' y='0' width='100%25' height='100%25'/%3E %3C/g%3E %3C/g%3E %3Cdefs id='defs61'%3E %3Cpath id='o' d='m 0,5.5924 v 5.8152 H 3.7778 L 8.5,16.2537 V 0.7467 L 3.7778,5.5928 H 0 Z M 12.75,8.5 c 0,-1.7155 -0.9633,-3.1887 -2.3611,-3.9059 v 7.8021 C 11.7867,11.6887 12.75,10.2155 12.75,8.5 Z M 10.3889,0 v 1.9966 c 2.7294,0.83352 4.7222,3.431 4.7222,6.5034 0,3.0724 -1.9928,5.6699 -4.7222,6.5034 V 17 C 14.1761,16.118 17,12.6482 17,8.5 17,4.3518 14.1761,0.882 10.3889,0 Z' /%3E %3Cpath id='i' d='m 12.75,8.5 c 0,-1.6717 -0.9633,-3.1072 -2.3611,-3.8061 V 6.7811 L 12.7028,9.095 C 12.7311,8.90611 12.75,8.70778 12.75,8.5 Z m 2.3611,0 c 0,0.88778 -0.1889,1.7189 -0.51,2.4933 l 1.4261,1.4261 C 16.6506,11.2483 17,9.9167 17,8.5 17,4.4578 14.1761,1.0767 10.3889,0.2172 V 2.1628 C 13.1183,2.97502 15.1111,5.5061 15.1111,8.5 Z M 1.1991,0 -3e-4,1.1994 4.4669,5.6666 H -3e-4 v 5.6666 h 3.7778 l 4.7222,4.7223 V 9.6993 l 4.0139,4.0139 c -0.6328,0.4911 -1.3411,0.8784 -2.125,1.1145 v 1.9455 c 1.3033,-0.2927 2.4839,-0.8972 3.485,-1.7094 l 1.9267,1.9361 1.1994,-1.1994 -8.5,-8.5 L 1.1991,-1e-4 Z m 7.3006,0.94444 -1.9739,1.9739 1.9739,1.9739 z' /%3E %3Cpath id='h' d='M 12.444,0 H 1.555 C 0.69166,0 -6e-4,0.7 -6e-4,1.5556 v 10.889 c 0,0.8556 0.69222,1.5556 1.5556,1.5556 h 10.889 c 0.8556,0 1.5556,-0.7 1.5556,-1.5556 V 1.5556 C 13.9996,0.70004 13.2996,0 12.444,0 Z M 6.2218,9.3333 H 5.0551 V 7.7777 H 3.4995 V 9.3333 H 2.3328 V 4.6666 H 3.4995 V 6.611 H 5.0551 V 4.6666 H 6.2218 Z M 7.7774,4.6666 h 3.1111 c 0.4278,0 0.7778,0.35 0.7778,0.77777 v 3.1111 c 0,0.42777 -0.35,0.77777 -0.7778,0.77777 H 7.7774 v -4.6667 z m 1.1667,3.5 h 1.5556 V 5.8333 H 8.9441 Z' /%3E %3Cpath id='g' d='M 0,0 V 17 L 13,8.5 Z' /%3E %3Cpath id='f' d='M 0,17 H 4.3333 V 0 H 0 Z M 8.6667,0 V 17 H 13 V 0 Z' /%3E %3Cpath id='e' d='m 0,11 h 3 v 3 H 5 V 9 H 0 Z M 3,3 H 0 V 5 H 5 V 0 H 3 Z m 6,11 h 2 v -3 h 3 V 9 H 9 Z M 11,3 V 0 H 9 v 5 h 5 V 3 Z' /%3E %3Cpath id='d' d='M 0,12 8.5,6 0,0 Z M 10,0 v 12 h 2 V 0 Z' /%3E %3Cpath id='c' d='M 1.52,4.5 C 1.52,2.961 2.632,1.71 4,1.71 H 7.2 V 0 H 4 C 1.792,0 0,2.016 0,4.5 0,6.984 1.792,9 4,9 H 7.2 V 7.29 H 4 C 2.632,7.29 1.52,6.039 1.52,4.5 Z M 4.8,5.4 h 6.4 V 3.6 H 4.8 Z M 12,0 H 8.8 V 1.71 H 12 c 1.368,0 2.48,1.251 2.48,2.79 0,1.539 -1.112,2.79 -2.48,2.79 H 8.8 V 9 H 12 C 14.208,9 16,6.984 16,4.5 16,2.016 14.208,0 12,0 Z' /%3E %3Cpath id='b' d='M 2,9 H 0 v 5 H 5 V 12 H 2 Z M 0,5 H 2 V 2 H 5 V 0 H 0 Z m 12,7 H 9 v 2 h 5 V 9 H 12 Z M 9,0 v 2 h 3 v 3 h 2 V 0 Z' /%3E %3Cpath id='a' d='M 4.4546,8.7015 1.1137,5.2537 1e-4,6.403 4.4546,11 14,1.1492 12.8864,-1e-4 4.4546,8.7014 Z' /%3E %3Cpath id='n' d='M 12.348,7.686 C 12.3768,7.462 12.3984,7.238 12.3984,7 12.3984,6.762 12.3768,6.538 12.348,6.314 L 13.8664,5.159 C 14.0032,5.054 14.0391,4.865 13.9528,4.711 L 12.5135,2.289 C 12.4272,2.135 12.2329,2.079 12.0745,2.135 l -1.7919,0.7 C 9.90842,2.555 9.50543,2.324 9.0664,2.149 L 8.79294,0.294 C 8.77135,0.126 8.62022,0 8.44031,0 H 5.56171 C 5.38181,0 5.23068,0.126 5.20909,0.294 L 4.93563,2.149 C 4.49665,2.324 4.09365,2.562 3.71943,2.835 l -1.7919,-0.7 C 1.76201,2.072 1.5749,2.135 1.48855,2.289 l -1.4393,2.422 c -0.093553,0.154 -0.050374,0.343 0.086356,0.448 l 1.5184,1.155 C 1.625226,6.538 1.603636,6.769 1.603636,7 c 0,0.231 0.02159,0.462 0.05037,0.686 l -1.5184,1.155 c -0.13673,0.105 -0.17271,0.294 -0.086356,0.448 l 1.4393,2.422 c 0.08635,0.154 0.28066,0.21 0.43898,0.154 l 1.7919,-0.7 c 0.37421,0.28 0.77721,0.511 1.2162,0.686 l 0.27346,1.855 C 5.23068,13.874 5.38181,14 5.56171,14 h 2.8786 c 0.17991,0 0.33104,-0.126 0.35263,-0.294 L 9.0664,11.851 c 0.43898,-0.175 0.84197,-0.413 1.2162,-0.686 l 1.7919,0.7 c 0.1655,0.063 0.3527,0 0.439,-0.154 L 13.9528,9.289 C 14.0391,9.135 14.0032,8.946 13.8664,8.841 Z M 7.0011,9.45 C 5.6122,9.45 4.4824,8.351 4.4824,7 4.4824,5.649 5.6122,4.55 7.0011,4.55 8.39,4.55 9.5198,5.649 9.5198,7 9.5198,8.351 8.39,9.45 7.0011,9.45 Z' /%3E %3Cpath id='m' d='M 0,0 H 16 V 12 H 0 Z' /%3E %3Cpath id='l' d='m 0,0 v -2 h -2 v 2 z m 16,0 h 2 v -2 h -2 z m 0,12 v 2 h 2 V 12 Z M 0,12 h -2 v 2 H 0 Z M 0,2 H 16 V -2 H 0 Z M 14,0 v 12 h 4 V 0 Z m 2,10 H 0 v 4 H 16 Z M 2,12 V 0 h -4 v 12 z' /%3E %3Cpath id='k' d='M 12,5.2941 H 8.5714 V 0 H 3.4285 V 5.2941 H -1e-4 l 6,6.1765 6,-6.1765 z M 0,13.2353 V 15 h 12 v -1.7647 z' /%3E %3Cpath id='j' d='M 9.3333,0 H 4.6666 V 1.5238 H 9.3333 Z M 6.2222,9.9048 H 7.7778 V 5.3334 H 6.2222 Z M 12.4678,4.8686 13.5722,3.7867 C 13.2378,3.39813 12.8722,3.03241 12.4756,2.7124 L 11.3711,3.7943 C 10.1656,2.84953 8.6489,2.2857 7,2.2857 3.1344,2.2857 0,5.3562 0,9.1429 0,12.9295 3.1267,16 7,16 10.8733,16 14,12.9295 14,9.1429 14,7.5277 13.4244,6.0419 12.4678,4.8686 Z M 7,14.4762 C 3.99,14.4762 1.5556,12.0914 1.5556,9.1429 1.5556,6.1943 3.99,3.8096 7,3.8096 c 3.01,0 5.4444,2.3848 5.4444,5.3333 0,2.9485 -2.4344,5.3333 -5.4444,5.3333 z' /%3E %3C/defs%3E %3Cg id='g3989' transform='matrix(0.03107656,0,0,0.03432918,271.52581,57.128037)' style='fill:%23ffffff'%3E %3Cg id='g3979' style='fill:%23ffffff'%3E %3Cpath style='fill:%23ffffff;stroke-width:0.03266241' d='m 273.49023,60.4375 c -1.07158,0 -1.96484,0.958273 -1.96484,2.169922 v 6.61914 c 0,1.216352 0.89727,2.167935 1.96484,2.167969 h 2.87305 c 0.52417,0 1.01765,-0.2246 1.39063,-0.634765 l 1,-1.103516 c 0.19059,-0.211639 0.45448,-0.333984 0.72656,-0.333984 0.27207,0 0.53829,0.122547 0.73047,0.335937 l 0.99804,1.101563 c 0.37212,0.409203 0.86646,0.634765 1.39063,0.634765 h 2.87305 c 1.07158,0 1.96484,-0.95632 1.96484,-2.167969 v -6.61914 c 0,-1.216352 -0.89727,-2.169922 -1.96484,-2.169922 z m 2.4961,3.308594 c 1.08295,0 1.96484,0.973618 1.96484,2.169922 0,1.196303 -0.88185,2.169921 -1.96484,2.169922 -1.08299,0 -1.96485,-0.973619 -1.96485,-2.169922 0,-1.196304 0.88189,-2.169922 1.96485,-2.169922 z m 6.99023,0 c 1.08296,0 1.96485,0.973618 1.96485,2.169922 0,1.196303 -0.88189,2.169922 -1.96485,2.169922 -1.08298,0 -1.96484,-0.973619 -1.96484,-2.169922 0,-1.196304 0.88189,-2.169922 1.96484,-2.169922 z' transform='matrix(32.178594,0,0,29.129737,-8737.3187,-1664.1247)' id='path3977' /%3E %3C/g%3E %3Cg id='g3983' style='fill:%23ffffff'/%3E %3Cg id='g3987' style='fill:%23ffffff'/%3E %3C/g%3E %3Cpath style='fill:%23ffffff;fill-opacity:1' d='M 317.03125 21.992188 A 6.9826789 6.9826789 0 0 0 310.04883 28.976562 A 6.9826789 6.9826789 0 0 0 317.03125 35.958984 A 6.9826789 6.9826789 0 0 0 324.01367 28.976562 A 6.9826789 6.9826789 0 0 0 317.03125 21.992188 z M 312.20703 27.580078 L 321.94336 27.642578 C 322.32865 27.645013 322.63647 27.956519 322.63281 28.341797 L 322.62109 29.603516 C 322.61743 29.988794 322.30326 30.297356 321.91797 30.294922 L 312.18164 30.232422 C 311.79635 30.229987 311.48853 29.918481 311.49219 29.533203 L 311.50391 28.271484 C 311.50757 27.886206 311.82174 27.577644 312.20703 27.580078 z ' id='path3997'/%3E %3Cpath style='fill:%23ffffff;fill-opacity:1' d='M 317.03125 59.992188 A 6.9826789 6.9826789 0 0 0 310.04883 66.976562 A 6.9826789 6.9826789 0 0 0 317.03125 73.958984 A 6.9826789 6.9826789 0 0 0 324.01367 66.976562 A 6.9826789 6.9826789 0 0 0 317.03125 59.992188 z M 316.49805 61.365234 L 317.76172 61.382812 C 318.14697 61.388692 318.45192 61.704576 318.44727 62.089844 L 318.4043 65.619141 L 321.94336 65.642578 C 322.32865 65.645013 322.63647 65.956519 322.63281 66.341797 L 322.62109 67.603516 C 322.61743 67.988794 322.30326 68.297356 321.91797 68.294922 L 318.37305 68.271484 L 318.33008 71.826172 C 318.32543 72.21144 318.0122 72.515645 317.62695 72.509766 L 316.36328 72.492188 C 315.97803 72.486309 315.67308 72.170424 315.67773 71.785156 L 315.7207 68.255859 L 312.18164 68.232422 C 311.79635 68.229987 311.48853 67.918481 311.49219 67.533203 L 311.50391 66.271484 C 311.50757 65.886206 311.82174 65.577644 312.20703 65.580078 L 315.75195 65.603516 L 315.79492 62.048828 C 315.79957 61.66356 316.1128 61.359355 316.49805 61.365234 z ' id='path3997-6'/%3E %3Cellipse style='fill:%23800000;fill-opacity:1;stroke-width:1.10310566' id='circle4073' cx='353.64172' cy='-28.97954' transform='scale(1,-1)' /%3E %3Cg id='g7787' transform='matrix(-0.02885349,0,0,-0.02885337,352.04486,75.172258)' style='fill:%23ffffff;fill-opacity:1'%3E %3Cg id='g7731' transform='translate(-90.566882,42.049084)' style='fill:%23ffffff;fill-opacity:1'%3E %3Cpath id='path7729' d='M 242.607,0 C 108.629,0 0.001,108.628 0.001,242.606 c 0,133.976 108.628,242.606 242.606,242.606 133.978,0 242.604,-108.631 242.604,-242.606 C 485.212,108.628 376.585,0 242.607,0 Z M 401.815,288.094 H 219.862 v 90.979 L 83.397,242.606 219.862,106.141 v 90.978 h 181.953 z' style='fill:%23ffffff;fill-opacity:1'/%3E %3C/g%3E %3Cg id='g7733' style='fill:%23ffffff;fill-opacity:1'%3E %3C/g%3E %3Cg id='g7735' style='fill:%23ffffff;fill-opacity:1'%3E %3C/g%3E %3Cg id='g7737' style='fill:%23ffffff;fill-opacity:1'%3E %3C/g%3E %3Cg id='g7739' style='fill:%23ffffff;fill-opacity:1'%3E %3C/g%3E %3Cg id='g7741' style='fill:%23ffffff;fill-opacity:1'%3E %3C/g%3E %3Cg id='g7743' style='fill:%23ffffff;fill-opacity:1'%3E %3C/g%3E %3Cg id='g7745' style='fill:%23ffffff;fill-opacity:1'%3E %3C/g%3E %3Cg id='g7747' style='fill:%23ffffff;fill-opacity:1'%3E %3C/g%3E %3Cg id='g7749' style='fill:%23ffffff;fill-opacity:1'%3E %3C/g%3E %3Cg id='g7751' style='fill:%23ffffff;fill-opacity:1'%3E %3C/g%3E %3Cg id='g7753' style='fill:%23ffffff;fill-opacity:1'%3E %3C/g%3E %3Cg id='g7755' style='fill:%23ffffff;fill-opacity:1'%3E %3C/g%3E %3Cg id='g7757' style='fill:%23ffffff;fill-opacity:1'%3E %3C/g%3E %3Cg id='g7759' style='fill:%23ffffff;fill-opacity:1'%3E %3C/g%3E %3Cg id='g7761' style='fill:%23ffffff;fill-opacity:1'%3E %3C/g%3E %3C/g%3E %3C/svg%3E";
  },
  function (e, t) {
    e.exports =
      "data:image/svg+xml,%3Csvg fill='%23FFF' height='24' width='24' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/%3E %3Cpath d='M0 0h24v24H0z' fill='none'/%3E %3C/svg%3E";
  },
  function (e, t) {
    e.exports =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white' width='24px' height='24px'%3E %3Cpath d='M0 0h24v24H0V0z' fill='none'/%3E %3Cpath d='M11.99 5V1l-5 5 5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6h-2c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8zm-1.1 11h-.85v-3.26l-1.01.31v-.69l1.77-.63h.09V16zm4.28-1.76c0 .32-.03.6-.1.82s-.17.42-.29.57-.28.26-.45.33-.37.1-.59.1-.41-.03-.59-.1-.33-.18-.46-.33-.23-.34-.3-.57-.11-.5-.11-.82v-.74c0-.32.03-.6.1-.82s.17-.42.29-.57.28-.26.45-.33.37-.1.59-.1.41.03.59.1.33.18.46.33.23.34.3.57.11.5.11.82v.74zm-.85-.86c0-.19-.01-.35-.04-.48s-.07-.23-.12-.31-.11-.14-.19-.17-.16-.05-.25-.05-.18.02-.25.05-.14.09-.19.17-.09.18-.12.31-.04.29-.04.48v.97c0 .19.01.35.04.48s.07.24.12.32.11.14.19.17.16.05.25.05.18-.02.25-.05.14-.09.19-.17.09-.19.11-.32.04-.29.04-.48v-.97z'/%3E %3C/svg%3E";
  },
  function (e, t) {
    e.exports =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 24 24' viewBox='0 0 24 24' fill='white' width='24px' height='24px'%3E %3Cg%3E %3Crect fill='none' height='24' width='24'/%3E %3Crect fill='none' height='24' width='24'/%3E %3Crect fill='none' height='24' width='24'/%3E %3C/g%3E %3Cg%3E %3Cg/%3E %3Cg%3E %3Cpath d='M18,13c0,3.31-2.69,6-6,6s-6-2.69-6-6s2.69-6,6-6v4l5-5l-5-5v4c-4.42,0-8,3.58-8,8c0,4.42,3.58,8,8,8s8-3.58,8-8H18z'/%3E %3Cpolygon points='10.9,16 10.9,11.73 10.81,11.73 9.04,12.36 9.04,13.05 10.05,12.74 10.05,16'/%3E %3Cpath d='M14.32,11.78c-0.18-0.07-0.37-0.1-0.59-0.1s-0.41,0.03-0.59,0.1s-0.33,0.18-0.45,0.33s-0.23,0.34-0.29,0.57 s-0.1,0.5-0.1,0.82v0.74c0,0.32,0.04,0.6,0.11,0.82s0.17,0.42,0.3,0.57s0.28,0.26,0.46,0.33s0.37,0.1,0.59,0.1s0.41-0.03,0.59-0.1 s0.33-0.18,0.45-0.33s0.22-0.34,0.29-0.57s0.1-0.5,0.1-0.82V13.5c0-0.32-0.04-0.6-0.11-0.82s-0.17-0.42-0.3-0.57 S14.49,11.85,14.32,11.78z M14.33,14.35c0,0.19-0.01,0.35-0.04,0.48s-0.06,0.24-0.11,0.32s-0.11,0.14-0.19,0.17 s-0.16,0.05-0.25,0.05s-0.18-0.02-0.25-0.05s-0.14-0.09-0.19-0.17s-0.09-0.19-0.12-0.32s-0.04-0.29-0.04-0.48v-0.97 c0-0.19,0.01-0.35,0.04-0.48s0.06-0.23,0.12-0.31s0.11-0.14,0.19-0.17s0.16-0.05,0.25-0.05s0.18,0.02,0.25,0.05 s0.14,0.09,0.19,0.17s0.09,0.18,0.12,0.31s0.04,0.29,0.04,0.48V14.35z'/%3E %3C/g%3E %3C/g%3E %3C/svg%3E";
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var o = n(0),
      i = n.n(o);
    "function" != typeof Object.assign &&
      Object.defineProperty(Object, "assign", {
        value: function (e, t) {
          if (null == e)
            throw new TypeError("Cannot convert undefined or null to object");
          for (var n = Object(e), o = 1; o < arguments.length; o++) {
            var i = arguments[o];
            if (null != i)
              for (var r in i)
                Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r]);
          }
          return n;
        },
        writable: !0,
        configurable: !0,
      }),
      (function () {
        if ("function" == typeof window.CustomEvent) return !1;
        function e(e, t) {
          t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
          var n = document.createEvent("CustomEvent");
          return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
        }
        (e.prototype = window.Event.prototype), (window.CustomEvent = e);
      })(),
      [
        Element.prototype,
        CharacterData.prototype,
        DocumentType.prototype,
      ].forEach(function (e) {
        e.hasOwnProperty("remove") ||
          Object.defineProperty(e, "remove", {
            configurable: !0,
            enumerable: !0,
            writable: !0,
            value: function () {
              null !== this.parentNode && this.parentNode.removeChild(this);
            },
          });
      }),
      i.a.polyfill();
    function r(e) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    "undefined" == typeof window ||
      window.dashjs ||
      (window.dashjs = { skipAutoCreate: !0, isDefaultSubject: !0 });
    function a(e) {
      return (a =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function l(e, t) {
      var n =
        ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
      if (!n) {
        if (
          Array.isArray(e) ||
          (n = (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return d(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return d(e, t);
          })(e)) ||
          (t && e && "number" == typeof e.length)
        ) {
          n && (e = n);
          var o = 0,
            i = function () {};
          return {
            s: i,
            n: function () {
              return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
            },
            e: function (e) {
              throw e;
            },
            f: i,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var r,
        a = !0,
        l = !1;
      return {
        s: function () {
          n = n.call(e);
        },
        n: function () {
          var e = n.next();
          return (a = e.done), e;
        },
        e: function (e) {
          (l = !0), (r = e);
        },
        f: function () {
          try {
            a || null == n.return || n.return();
          } finally {
            if (l) throw r;
          }
        },
      };
    }
    function d(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
      return o;
    }
    var s = [
        function (e, t) {
          var n = {
            AdStarted: function () {
              return e.onStartVpaidAd;
            },
            AdStopped: function () {
              return e.onStopVpaidAd;
            },
            AdSkipped: function () {
              return e.onSkipVpaidAd;
            },
            AdLoaded: function () {
              return e.onVpaidAdLoaded;
            },
            AdLinearChange: function () {
              return e.onVpaidAdLinearChange;
            },
            AdSizeChange: function () {
              return e.onVpaidAdSizeChange;
            },
            AdExpandedChange: function () {
              return e.onVpaidAdExpandedChange;
            },
            AdSkippableStateChange: function () {
              return e.onVpaidAdSkippableStateChange;
            },
            AdDurationChange: function () {
              return e.onVpaidAdDurationChange;
            },
            AdRemainingTimeChange: function () {
              return e.onVpaidAdRemainingTimeChange;
            },
            AdVolumeChange: function () {
              return e.onVpaidAdVolumeChange;
            },
            AdImpression: function () {
              return e.onVpaidAdImpression;
            },
            AdClickThru: function () {
              return e.onVpaidAdClickThru;
            },
            AdInteraction: function () {
              return e.onVpaidAdInteraction;
            },
            AdVideoStart: function () {
              return e.onVpaidAdVideoStart;
            },
            AdVideoFirstQuartile: function () {
              return e.onVpaidAdVideoFirstQuartile;
            },
            AdVideoMidpoint: function () {
              return e.onVpaidAdVideoMidpoint;
            },
            AdVideoThirdQuartile: function () {
              return e.onVpaidAdVideoThirdQuartile;
            },
            AdVideoComplete: function () {
              return e.onVpaidAdVideoComplete;
            },
            AdUserAcceptInvitation: function () {
              return e.onVpaidAdUserAcceptInvitation;
            },
            AdUserMinimize: function () {
              return e.onVpaidAdUserMinimize;
            },
            AdUserClose: function () {
              return e.onVpaidAdUserClose;
            },
            AdPaused: function () {
              return e.onVpaidAdPaused;
            },
            AdPlaying: function () {
              return e.onVpaidAdPlaying;
            },
            AdError: function () {
              return e.onVpaidAdError;
            },
            AdLog: function () {
              return e.onVpaidAdLog;
            },
          };
          (e.checkVPAIDInterface = function (e) {
            var t = e;
            return !!(
              t.handshakeVersion &&
              "function" == typeof t.handshakeVersion &&
              t.initAd &&
              "function" == typeof t.initAd &&
              t.startAd &&
              "function" == typeof t.startAd &&
              t.stopAd &&
              "function" == typeof t.stopAd &&
              t.skipAd &&
              "function" == typeof t.skipAd &&
              t.resizeAd &&
              "function" == typeof t.resizeAd &&
              t.pauseAd &&
              "function" == typeof t.pauseAd &&
              t.resumeAd &&
              "function" == typeof t.resumeAd &&
              t.expandAd &&
              "function" == typeof t.expandAd &&
              t.collapseAd &&
              "function" == typeof t.collapseAd &&
              t.subscribe &&
              "function" == typeof t.subscribe &&
              t.unsubscribe &&
              "function" == typeof t.unsubscribe
            );
          }),
            (e.onVpaidAdPaused = function () {
              e.vpaidTimeoutTimerClear(), e.debugMessage("onAdPaused");
            }),
            (e.onVpaidAdPlaying = function () {
              e.vpaidTimeoutTimerClear(), e.debugMessage("onAdPlaying");
            }),
            (e.onVpaidAdError = function (t) {
              e.debugMessage("onAdError: " + t),
                e.vpaidTimeoutTimerClear(),
                e.onVpaidEnded();
            }),
            (e.onVpaidAdLog = function (t) {
              e.debugMessage("onAdLog: " + t);
            }),
            (e.onVpaidAdUserAcceptInvitation = function () {
              e.debugMessage("onAdUserAcceptInvitation");
            }),
            (e.onVpaidAdUserMinimize = function () {
              e.debugMessage("onAdUserMinimize");
            }),
            (e.onVpaidAdUserClose = function () {
              e.debugMessage("onAdUserClose");
            }),
            (e.onVpaidAdSkippableStateChange = function () {
              e.vpaidAdUnit &&
                e.debugMessage(
                  "Ad Skippable State Changed to: " +
                    e.vpaidAdUnit.getAdSkippableState()
                );
            }),
            (e.onVpaidAdExpandedChange = function () {
              e.vpaidAdUnit &&
                e.debugMessage(
                  "Ad Expanded Changed to: " + e.vpaidAdUnit.getAdExpanded()
                );
            }),
            (e.getVpaidAdExpanded = function () {
              if ((e.debugMessage("getAdExpanded"), e.vpaidAdUnit))
                return e.vpaidAdUnit.getAdExpanded();
            }),
            (e.getVpaidAdSkippableState = function () {
              if ((e.debugMessage("getAdSkippableState"), e.vpaidAdUnit))
                return e.vpaidAdUnit.getAdSkippableState();
            }),
            (e.onVpaidAdSizeChange = function () {
              e.vpaidAdUnit &&
                e.debugMessage(
                  "Ad size changed to: w=" +
                    e.vpaidAdUnit.getAdWidth() +
                    " h=" +
                    e.vpaidAdUnit.getAdHeight()
                );
            }),
            (e.onVpaidAdDurationChange = function () {
              e.vpaidAdUnit &&
                e.debugMessage(
                  "Ad Duration Changed to: " + e.vpaidAdUnit.getAdDuration()
                );
            }),
            (e.onVpaidAdRemainingTimeChange = function () {
              e.vpaidAdUnit &&
                e.debugMessage(
                  "Ad Remaining Time Changed to: " +
                    e.vpaidAdUnit.getAdRemainingTime()
                );
            }),
            (e.getVpaidAdRemainingTime = function () {
              if ((e.debugMessage("getAdRemainingTime"), e.vpaidAdUnit))
                return e.vpaidAdUnit.getAdRemainingTime();
            }),
            (e.onVpaidAdImpression = function () {
              e.debugMessage("Ad Impression"), e.trackSingleEvent("impression");
            }),
            (e.onVpaidAdClickThru = function (t, n, o) {
              e.debugMessage("Clickthrough portion of the ad was clicked"),
                o && window.open(e.vastOptions.clickthroughUrl),
                e.pauseVpaidAd(),
                e.callUris(e.vastOptions.clicktracking);
            }),
            (e.onVpaidAdInteraction = function (t) {
              e.debugMessage("A non-clickthrough event has occured");
            }),
            (e.onVpaidAdVideoStart = function () {
              e.debugMessage("Video 0% completed"), e.trackSingleEvent("start");
            }),
            (e.onVpaidAdVideoFirstQuartile = function () {
              e.debugMessage("Video 25% completed"),
                e.trackSingleEvent("firstQuartile");
            }),
            (e.onVpaidAdVideoMidpoint = function () {
              e.debugMessage("Video 50% completed"),
                e.trackSingleEvent("midpoint");
            }),
            (e.onVpaidAdVideoThirdQuartile = function () {
              e.debugMessage("Video 75% completed"),
                e.trackSingleEvent("thirdQuartile");
            }),
            (e.onVpaidAdVideoComplete = function () {
              e.debugMessage("Video 100% completed"),
                e.trackSingleEvent("complete");
            }),
            (e.onVpaidAdLinearChange = function () {
              var t = document.getElementsByClassName(
                  "fluid_vpaidNonLinear_ad"
                )[0],
                n = document.getElementById("close_button_" + e.videoPlayerId),
                o = t.getAttribute("adlistid");
              if (
                (e.debugMessage(
                  "Ad linear has changed: " + e.vpaidAdUnit.getAdLinear()
                ),
                e.vpaidAdUnit.getAdLinear())
              ) {
                e.backupMainVideoContentTime(o),
                  (e.isCurrentlyPlayingAd = !0),
                  n && n.remove(),
                  (t.className = "fluid_vpaid_slot"),
                  (t.id = e.videoPlayerId + "_fluid_vpaid_slot"),
                  (e.domRef.player.loop = !1),
                  e.domRef.player.removeAttribute("controls");
                for (
                  var i = e.domRef.player.parentNode.getElementsByClassName(
                      "fluid_controls_currentprogress"
                    ),
                    r = 0;
                  r < i.length;
                  r++
                )
                  i[r].style.backgroundColor =
                    e.displayOptions.layoutControls.adProgressColor;
                e.toggleLoader(!1);
              }
            }),
            (e.getVpaidAdLinear = function () {
              return e.debugMessage("getAdLinear"), e.vpaidAdUnit.getAdLinear();
            }),
            (e.startVpaidAd = function () {
              e.debugMessage("startAd"),
                e.vpaidTimeoutTimerStart(),
                e.vpaidAdUnit.startAd();
            }),
            (e.onVpaidAdLoaded = function () {
              e.debugMessage("ad has been loaded"),
                e.vpaidTimeoutTimerClear(),
                e.startVpaidAd();
            }),
            (e.onStartVpaidAd = function () {
              e.debugMessage("Ad has started"), e.vpaidTimeoutTimerClear();
            }),
            (e.stopVpaidAd = function () {
              e.vpaidTimeoutTimerStart(), e.vpaidAdUnit.stopAd();
            }),
            (e.hardStopVpaidAd = function (t) {
              e.vpaidAdUnit && (e.vpaidAdUnit.stopAd(), (e.vpaidAdUnit = null));
              for (
                var n = document.getElementsByClassName("fluid_vpaid_iframe"),
                  o = document.getElementsByClassName("fluid_vpaid_slot"),
                  i = document.getElementsByClassName(
                    "fluid_vpaidNonLinear_ad"
                  ),
                  r = 0;
                r < n.length;
                r++
              )
                n[r].getAttribute("adListId") !== t && n[r].remove();
              for (var a = 0; a < o.length; a++)
                o[a].getAttribute("adListId") !== t && o[a].remove();
              for (var l = 0; l < i.length; l++)
                i[l].getAttribute("adListId") !== t && i[l].remove();
            }),
            (e.onStopVpaidAd = function () {
              e.debugMessage("Ad has stopped"),
                e.vpaidTimeoutTimerClear(),
                e.onVpaidEnded();
            }),
            (e.onSkipVpaidAd = function () {
              e.debugMessage("Ad was skipped"),
                e.vpaidTimeoutTimerClear(),
                e.onVpaidEnded();
            }),
            (e.skipVpaidAd = function () {
              e.vpaidTimeoutTimerStart(),
                e.vpaidAdUnit &&
                  (e.vpaidAdUnit.skipAd(),
                  e.vpaidTimeoutTimerClear(),
                  e.onVpaidEnded());
            }),
            (e.setVpaidAdVolume = function (t) {
              e.vpaidAdUnit && e.vpaidAdUnit.setAdVolume(t);
            }),
            (e.getVpaidAdVolume = function () {
              if (e.vpaidAdUnit) return e.vpaidAdUnit.getAdVolume();
            }),
            (e.onVpaidAdVolumeChange = function () {
              e.vpaidAdUnit &&
                e.debugMessage(
                  "Ad Volume has changed to - " + e.vpaidAdUnit.getAdVolume()
                );
            }),
            (e.resizeVpaidAuto = function () {
              if (
                null !== e.vastOptions &&
                e.vastOptions.vpaid &&
                e.vastOptions.linear
              ) {
                var t = e.domRef.player.offsetWidth,
                  n = e.domRef.player.offsetHeight,
                  o = e.fullscreenMode ? "fullscreen" : "normal";
                e.resizeVpaidAd(t, n, o);
              }
            }),
            (e.resizeVpaidAd = function (t, n, o) {
              e.vpaidAdUnit && e.vpaidAdUnit.resizeAd(t, n, o);
            }),
            (e.pauseVpaidAd = function () {
              e.vpaidTimeoutTimerStart(),
                e.vpaidAdUnit && e.vpaidAdUnit.pauseAd();
            }),
            (e.resumeVpaidAd = function () {
              e.vpaidTimeoutTimerStart(),
                e.vpaidAdUnit && e.vpaidAdUnit.resumeAd();
            }),
            (e.expandVpaidAd = function () {
              e.vpaidAdUnit && e.vpaidAdUnit.expandAd();
            }),
            (e.collapseVpaidAd = function () {
              e.vpaidAdUnit && e.vpaidAdUnit.collapseAd();
            }),
            (e.vpaidTimeoutTimerClear = function () {
              e.vpaidTimer && clearTimeout(e.vpaidTimer);
            }),
            (e.vpaidTimeoutTimerStart = function () {
              e.vpaidTimeoutTimerClear(),
                (e.vpaidTimer = setTimeout(function () {
                  e.announceLocalError("901"), e.onVpaidEnded();
                }, e.displayOptions.vastOptions.vpaidTimeout));
            }),
            (e.vpaidCallbackListenersAttach = function () {
              for (var t in n) e.vpaidAdUnit.subscribe(n[t](), t, e);
            }),
            (e.vpaidCallbackListenersDetach = function () {
              if (e.vpaidAdUnit)
                for (var t in n) e.vpaidAdUnit.unsubscribe(n[t](), t, e);
            }),
            (e.loadVpaid = function (t, n) {
              var o = document.createElement("iframe");
              (o.id = e.videoPlayerId + "_" + t + "_fluid_vpaid_iframe"),
                (o.className = "fluid_vpaid_iframe"),
                o.setAttribute("adListId", t),
                o.setAttribute("frameborder", "0"),
                e.domRef.player.parentNode.insertBefore(
                  o,
                  e.domRef.player.nextSibling
                ),
                o.contentWindow.document.write(
                  '<script src="' + n + '"></script>'
                ),
                (e.tempVpaidCounter = 0),
                (e.getVPAIDAdInterval = setInterval(function () {
                  var n = o.contentWindow.getVPAIDAd;
                  if (n && "function" == typeof n)
                    e.vpaidAdUnit && e.hardStopVpaidAd(t),
                      (e.vpaidAdUnit = n()),
                      clearInterval(e.getVPAIDAdInterval),
                      e.checkVPAIDInterface(e.vpaidAdUnit) &&
                        (e.getVpaidAdLinear()
                          ? ((e.isCurrentlyPlayingAd = !0),
                            e.switchPlayerToVpaidMode(t))
                          : (e.debugMessage("non linear vpaid ad is loaded"),
                            e.loadVpaidNonlinearAssets(t)));
                  else {
                    if ((e.tempVpaidCounter++, e.tempVpaidCounter >= 20))
                      return (
                        clearInterval(e.getVPAIDAdInterval),
                        (e.adList[t].error = !0),
                        e.playMainVideoWhenVpaidFails(403),
                        !1
                      );
                    e.debugMessage(e.tempVpaidCounter);
                  }
                }, 100));
            }),
            (e.onVpaidEnded = function (t) {
              t && t.stopImmediatePropagation();
              var n = document.getElementById(
                e.videoPlayerId + "_fluid_vpaid_slot"
              );
              e.vpaidCallbackListenersDetach(),
                (e.vpaidAdUnit = null),
                clearInterval(e.getVPAIDAdInterval),
                n && n.remove(),
                e.checkForNextAd();
            }),
            (e.playMainVideoWhenVpaidFails = function (t) {
              var n = document.getElementById(
                e.videoPlayerId + "_fluid_vpaid_slot"
              );
              n && n.remove(),
                clearInterval(e.getVPAIDAdInterval),
                e.playMainVideoWhenVastFails(t);
            }),
            (e.switchPlayerToVpaidMode = function () {});
        },
        function (e, t) {
          (e.setCTAFromVast = function (t, n) {
            if (e.displayOptions.vastOptions.adCTATextVast && t) {
              var o = e.extractNodeDataByTagName(t, "MobileText"),
                i = e.extractNodeDataByTagName(t, "PCText"),
                r =
                  e.extractNodeDataByTagName(t, "DisplayUrl") ||
                  e.extractNodeDataByTagName(t, "Link"),
                a = e.extractNodeDataByTagName(t, "Tracking"),
                l = window.matchMedia("(max-width: 768px)").matches;
              (i || o) &&
                a &&
                (n.titleCTA = {
                  text: l ? o || i : i || o,
                  link: r || null,
                  tracking: a,
                });
            }
          }),
            (e.getClickThroughUrlFromLinear = function (t) {
              var n = t.getElementsByTagName("VideoClicks");
              if (n.length) {
                var o = n[0].getElementsByTagName("ClickThrough");
                if (o.length) return e.extractNodeData(o[0]);
              }
              return !1;
            }),
            (e.getVastAdTagUriFromWrapper = function (t) {
              var n = t.getElementsByTagName("Wrapper");
              if (void 0 !== n && n.length) {
                var o = n[0].getElementsByTagName("VASTAdTagURI");
                if (o.length) return e.extractNodeData(o[0]);
              }
              return !1;
            }),
            (e.hasInLine = function (e) {
              var t = e.getElementsByTagName("InLine");
              return void 0 !== t && t.length;
            }),
            (e.hasVastAdTagUri = function (e) {
              var t = e.getElementsByTagName("VASTAdTagURI");
              return void 0 !== t && t.length;
            }),
            (e.getClickThroughUrlFromNonLinear = function (t) {
              var n = "";
              if (t.getElementsByTagName("NonLinear").length) {
                var o = t.getElementsByTagName("NonLinearClickThrough");
                o.length && (n = e.extractNodeData(o[0]));
              }
              return n;
            }),
            (e.getTrackingFromLinear = function (e) {
              var t = e.getElementsByTagName("TrackingEvents");
              return t.length ? t[0].getElementsByTagName("Tracking") : [];
            }),
            (e.getDurationFromLinear = function (t) {
              var n = t.getElementsByTagName("Duration");
              if (n.length && void 0 !== n[0].childNodes[0]) {
                var o = e.extractNodeData(n[0]);
                return e.convertTimeStringToSeconds(o);
              }
              return !1;
            }),
            (e.getDurationFromNonLinear = function (t) {
              var n = 0,
                o = t.getElementsByTagName("NonLinear");
              return (
                o.length &&
                  void 0 !== o[0].getAttribute("minSuggestedDuration") &&
                  (n = e.convertTimeStringToSeconds(
                    o[0].getAttribute("minSuggestedDuration")
                  )),
                n
              );
            }),
            (e.getDimensionFromNonLinear = function (e) {
              var t = { width: null, height: null },
                n = e.getElementsByTagName("NonLinear");
              return (
                n.length &&
                  (void 0 !== n[0].getAttribute("width") &&
                    (t.width = n[0].getAttribute("width")),
                  void 0 !== n[0].getAttribute("height") &&
                    (t.height = n[0].getAttribute("height"))),
                t
              );
            }),
            (e.getCreativeTypeFromStaticResources = function (e) {
              var t = "",
                n = e.getElementsByTagName("NonLinear");
              return (
                n.length &&
                  void 0 !== n[0].childNodes[0] &&
                  (t = n[0]
                    .getElementsByTagName("StaticResource")[0]
                    .getAttribute("creativeType")),
                t.toLowerCase()
              );
            }),
            (e.getMediaFilesFromLinear = function (e) {
              var t = e.getElementsByTagName("MediaFiles");
              return t.length ? t[0].getElementsByTagName("MediaFile") : [];
            }),
            (e.getStaticResourcesFromNonLinear = function (e) {
              var t = [],
                n = e.getElementsByTagName("NonLinear");
              return (
                n.length && (t = n[0].getElementsByTagName("StaticResource")), t
              );
            }),
            (e.extractNodeDataByTagName = function (t, n) {
              var o = t.getElementsByTagName(n);
              return o && o.length ? e.extractNodeData(o[0]) : null;
            }),
            (e.extractNodeData = function (e) {
              for (var t = "", n = 0; n < e.childNodes.length; n++) {
                var o = e.childNodes[n];
                8 === o.nodeType ||
                  (3 === o.nodeType && /^\s*$/.test(o.nodeValue)) ||
                  (t += o.nodeValue);
              }
              return t.replace(/(^\s+|\s+$)/g, "");
            }),
            (e.getAdParametersFromLinear = function (t) {
              var n = t.getElementsByTagName("AdParameters"),
                o = null;
              return n.length && (o = e.extractNodeData(n[0])), o;
            }),
            (e.getMediaFileListFromLinear = function (t) {
              var n = [],
                o = e.getMediaFilesFromLinear(t);
              if (!o.length) return n;
              for (var i = 0; i < o.length; i++) {
                var r = o[i].getAttribute("mediaType");
                r || (r = "2D"),
                  n.push({
                    src: e.extractNodeData(o[i]),
                    type: o[i].getAttribute("type"),
                    apiFramework: o[i].getAttribute("apiFramework"),
                    codec: o[i].getAttribute("codec"),
                    id: o[i].getAttribute("codec"),
                    fileSize: o[i].getAttribute("fileSize"),
                    delivery: o[i].getAttribute("delivery"),
                    width: o[i].getAttribute("width"),
                    height: o[i].getAttribute("height"),
                    mediaType: r.toLowerCase(),
                  });
              }
              return n;
            }),
            (e.getIconClickThroughFromLinear = function (t) {
              var n = t.getElementsByTagName("IconClickThrough");
              return n.length ? e.extractNodeData(n[0]) : "";
            }),
            (e.getStaticResourceFromNonLinear = function (t) {
              for (
                var n, o = e.getStaticResourcesFromNonLinear(t), i = 0;
                i < o.length;
                i++
              )
                if (
                  (o[i].getAttribute("type") || (n = e.extractNodeData(o[i])),
                  o[i].getAttribute("type") === e.displayOptions.staticResource)
                )
                  return e.extractNodeData(o[i]);
              return n;
            }),
            (e.registerTrackingEvents = function (t, n) {
              for (
                var o = e.getTrackingFromLinear(t), i = "", r = 0, a = 0;
                a < o.length;
                a++
              )
                switch ((i = o[a].getAttribute("event"))) {
                  case "start":
                  case "firstQuartile":
                  case "midpoint":
                  case "thirdQuartile":
                  case "complete":
                    void 0 === n.tracking[i] && (n.tracking[i] = []),
                      void 0 === n.stopTracking[i] && (n.stopTracking[i] = []),
                      n.tracking[i].push(o[a].childNodes[0].nodeValue),
                      (n.stopTracking[i] = !1);
                    break;
                  case "progress":
                    void 0 === n.tracking[i] && (n.tracking[i] = []),
                      (r = e.convertTimeStringToSeconds(
                        o[a].getAttribute("offset")
                      )),
                      void 0 === n.tracking[i][r] &&
                        (n.tracking[i][r] = { elements: [], stopTracking: !1 }),
                      n.tracking[i][r].elements.push(
                        o[a].childNodes[0].nodeValue
                      );
                }
            }),
            (e.registerClickTracking = function (e, t) {
              if (e && e.length)
                for (var n = 0; n < e.length; n++)
                  "" !== e[n] && t.clicktracking.push(e[n]);
            }),
            (e.registerImpressionEvents = function (t, n) {
              if (t.length)
                for (var o = 0; o < t.length; o++) {
                  var i = e.extractNodeData(t[o]);
                  n.impression.push(i);
                }
            }),
            (e.registerErrorEvents = function (e, t) {
              null != e &&
                1 === e.length &&
                1 === e[0].childNodes.length &&
                (t.errorUrl = e[0].childNodes[0].nodeValue);
            }),
            (e.announceError = function (t) {
              if (void 0 !== e.vastOptions.errorUrl && e.vastOptions.errorUrl) {
                var n = void 0 !== t ? parseInt(t) : 900,
                  o = e.vastOptions.errorUrl.replace("[ERRORCODE]", n);
                e.callUris([o]);
              }
            }),
            (e.getClickTrackingEvents = function (t) {
              var n = [],
                o = t.getElementsByTagName("VideoClicks");
              if (o.length) {
                var i = o[0].getElementsByTagName("ClickTracking");
                if (i.length) {
                  for (var r = 0; r < i.length; r++) {
                    var a = e.extractNodeData(i[r]);
                    n.push(a);
                  }
                  return n;
                }
              }
            }),
            (e.getNonLinearClickTrackingEvents = function (t) {
              var n = [];
              if (t.getElementsByTagName("NonLinear").length) {
                var o = t.getElementsByTagName("NonLinearClickTracking");
                if (o.length) {
                  for (var i = 0; i < o.length; i++) {
                    var r = e.extractNodeData(o[i]);
                    n.push(r);
                  }
                  return n;
                }
              }
            }),
            (e.callUris = function (e) {
              for (var t = 0; t < e.length; t++) new Image().src = e[t];
            }),
            (e.recalculateAdDimensions = function () {
              var t = document.getElementById(e.videoPlayerId),
                n = document.getElementById(
                  "vast_clickthrough_layer_" + e.videoPlayerId
                );
              n &&
                ((n.style.width = t.offsetWidth + "px"),
                (n.style.height = t.offsetHeight + "px"));
              var o = e.checkFullscreenSupport(
                  "fluid_video_wrapper_" + e.videoPlayerId
                ),
                i = document.getElementById(
                  e.videoPlayerId + "_fluid_control_fullscreen"
                ),
                r = document.getElementById(
                  e.videoPlayerId + "context_option_fullscreen"
                );
              if (o)
                null === document[o.isFullscreen]
                  ? e.fullscreenOff(i, r)
                  : e.fullscreenOn(i, r);
              else {
                var a = document.getElementById(
                  "fluid_video_wrapper_" + e.videoPlayerId
                );
                -1 !== a.className.search(/\bpseudo_fullscreen\b/g)
                  ? ((a.className += " pseudo_fullscreen"),
                    e.fullscreenOn(i, r))
                  : ((a.className = a.className.replace(
                      /\bpseudo_fullscreen\b/g,
                      ""
                    )),
                    e.fullscreenOff(i, r));
              }
            }),
            (e.prepareVast = function (t) {
              for (var n = e.findRoll(t), o = 0; o < n.length; o++) {
                var i = n[o];
                !0 !== e.adList[i].vastLoaded &&
                  !0 !== e.adList[i].error &&
                  (e.processVastWithRetries(e.adList[i]),
                  e.domRef.player.addEventListener("adId_" + i, e[t]));
              }
            }),
            (e.playMainVideoWhenVastFails = function (t) {
              e.debugMessage("playMainVideoWhenVastFails called"),
                e.domRef.player.removeEventListener(
                  "loadedmetadata",
                  e.switchPlayerToVastMode
                ),
                e.domRef.player.pause(),
                e.toggleLoader(!1),
                e.displayOptions.vastOptions.vastAdvanced.noVastVideoCallback(),
                e.vastOptions && void 0 !== e.vastOptions.errorUrl
                  ? e.announceError(t)
                  : e.announceLocalError(t),
                e.switchToMainVideo();
            }),
            (e.switchPlayerToVastMode = function () {}),
            (e.processVastXml = function (t, n, o) {
              var i;
              if (t) {
                var r = t.getElementsByTagName("Impression");
                null !== r && e.registerImpressionEvents(r, n);
                var a = t.getElementsByTagName("Error");
                null !== a && e.registerErrorEvents(a, n);
                var l = t.getElementsByTagName("TitleCTA");
                null !== l && l.length && e.setCTAFromVast(l[0], n);
                var d = t.getElementsByTagName("Creative");
                if (void 0 !== d && d.length) {
                  var s = d[0].getElementsByTagName("Linear");
                  if (null != s && s.length) {
                    var u = s[0];
                    e.registerTrackingEvents(u, n),
                      (i = e.getClickTrackingEvents(u)),
                      e.registerClickTracking(i, n),
                      !e.hasVastAdTagUri(t) &&
                        e.hasInLine(t) &&
                        ((n.adFinished = !1),
                        (n.adType = "linear"),
                        (n.vpaid = !1),
                        (n.skipoffset = e.convertTimeStringToSeconds(
                          u.getAttribute("skipoffset")
                        )),
                        (n.clickthroughUrl = e.getClickThroughUrlFromLinear(u)),
                        (n.duration = e.getDurationFromLinear(u)),
                        (n.mediaFileList = e.getMediaFileListFromLinear(u)),
                        (n.adParameters = e.getAdParametersFromLinear(u)),
                        (n.iconClick =
                          n.iconClick || e.getIconClickThroughFromLinear(u)),
                        n.adParameters && (n.vpaid = !0));
                  }
                  var c = d[0].getElementsByTagName("NonLinearAds");
                  if (null != c && c.length) {
                    var p = c[0];
                    e.registerTrackingEvents(p, n),
                      (i = e.getNonLinearClickTrackingEvents(p)),
                      e.registerClickTracking(i, n),
                      !e.hasVastAdTagUri(t) &&
                        e.hasInLine(t) &&
                        ((n.adType = "nonLinear"),
                        (n.vpaid = !1),
                        (n.clickthroughUrl =
                          e.getClickThroughUrlFromNonLinear(p)),
                        (n.duration = e.getDurationFromNonLinear(p)),
                        (n.dimension = e.getDimensionFromNonLinear(p)),
                        (n.staticResource =
                          e.getStaticResourceFromNonLinear(p)),
                        (n.creativeType =
                          e.getCreativeTypeFromStaticResources(p)),
                        (n.adParameters = e.getAdParametersFromLinear(p)),
                        n.adParameters && (n.vpaid = !0));
                  }
                  !e.hasVastAdTagUri(t) &&
                    e.hasInLine(t) &&
                    (void 0 !== n.mediaFileList || void 0 !== n.staticResource
                      ? o(!0, n)
                      : o(!1));
                } else o(!1);
              } else o(!1);
            }),
            (e.processVastWithRetries = function (t) {
              var n = t.vastTag,
                o = t.id;
              e.processUrl(n, function i(r, a) {
                if (
                  (r &&
                    void 0 !== a &&
                    a.vpaid &&
                    !e.displayOptions.vastOptions.allowVPAID &&
                    ((r = !1),
                    e.announceLocalError(
                      "103",
                      "VPAID not allowed, so skipping this VAST tag."
                    )),
                  r)
                ) {
                  if ("linear" === a.adType) {
                    void 0 !== a.iconClick &&
                      null !== a.iconClick &&
                      a.iconClick.length &&
                      (e.adList[o].landingPage = a.iconClick);
                    var l = e.getSupportedMediaFileObject(a.mediaFileList);
                    l && (e.adList[o].mediaType = l.mediaType);
                  }
                  (e.adList[o].adType = a.adType ? a.adType : "unknown"),
                    (e.adList[o].vastLoaded = !0),
                    (e.adPool[o] = Object.assign({}, a));
                  var d = document.createEvent("Event");
                  if (
                    (d.initEvent("adId_" + o, !1, !0),
                    e.domRef.player.dispatchEvent(d),
                    e.displayOptions.vastOptions.vastAdvanced.vastLoadedCallback(),
                    e.hasTitle())
                  )
                    document.getElementById(
                      e.videoPlayerId + "_title"
                    ).style.display = "none";
                } else e.announceLocalError("101"), t.hasOwnProperty("fallbackVastTags") && t.fallbackVastTags.length > 0 ? ((n = t.fallbackVastTags.shift()), e.processUrl(n, i)) : ("preRoll" === t.roll && e.preRollFail(t), (e.adList[o].error = !0));
              });
            }),
            (e.processUrl = function (t, n) {
              e.resolveVastTag(
                t,
                0,
                {
                  tracking: [],
                  stopTracking: [],
                  impression: [],
                  clicktracking: [],
                  vastLoaded: !1,
                },
                n
              );
            }),
            (e.resolveVastTag = function (t, n, o, i) {
              if (t && "" !== t) {
                n <= e.displayOptions.vastOptions.maxAllowedVastTagRedirects &&
                  e.sendRequest(
                    t,
                    !0,
                    e.displayOptions.vastOptions.vastTimeout,
                    function () {
                      var t = !1;
                      if (4 !== this.readyState || 404 !== this.status)
                        if (4 !== this.readyState || 0 !== this.status) {
                          if (4 === this.readyState && 200 === this.status)
                            if (4 !== this.readyState || 200 === this.status) {
                              try {
                                t = this.responseXML;
                              } catch (e) {
                                return void i(!1);
                              }
                              if (t) {
                                if (
                                  ((e.inLineFound = e.hasInLine(t)),
                                  !e.inLineFound && e.hasVastAdTagUri(t))
                                ) {
                                  var r = e.getVastAdTagUriFromWrapper(t);
                                  if (!r) return void i(!1);
                                  e.resolveVastTag(r, n, o, i);
                                }
                                n >
                                  e.displayOptions.vastOptions
                                    .maxAllowedVastTagRedirects &&
                                !e.inLineFound
                                  ? i(!1)
                                  : e.processVastXml(t, o, i);
                              } else i(!1);
                            } else i(!1);
                        } else i(!1);
                      else i(!1);
                    }
                  ),
                  n++;
              } else i(!1);
            }),
            (e.setVastList = function () {
              var t,
                n,
                o = {},
                i = { preRoll: [], postRoll: [], midRoll: [], onPauseRoll: [] },
                r = {
                  id: null,
                  roll: null,
                  played: !1,
                  vastLoaded: !1,
                  error: !1,
                  adText: null,
                  adTextPosition: null,
                },
                a = 0,
                l = function (e) {
                  var t = !1;
                  return (
                    "midRoll" === e.roll && void 0 === e.timer && (t = !0), t
                  );
                };
              if (e.displayOptions.vastOptions.hasOwnProperty("adList"))
                for (var d in e.displayOptions.vastOptions.adList) {
                  var s = e.displayOptions.vastOptions.adList[d];
                  if (
                    ((n = void 0),
                    (n = !1),
                    (t = s).vastTag ||
                      (e.announceLocalError(
                        102,
                        '"vastTag" property is missing from adList.'
                      ),
                      (n = !0)),
                    t.roll ||
                      (e.announceLocalError(
                        102,
                        '"roll" is missing from adList.'
                      ),
                      (n = !0)),
                    -1 === e.availableRolls.indexOf(t.roll) &&
                      (e.announceLocalError(
                        102,
                        "Only " +
                          e.availableRolls.join(",") +
                          " rolls are supported."
                      ),
                      (n = !0)),
                    t.size &&
                      -1 === e.supportedNonLinearAd.indexOf(t.size) &&
                      (e.announceLocalError(
                        102,
                        "Only " +
                          e.supportedNonLinearAd.join(",") +
                          " size are supported."
                      ),
                      (n = !0)),
                    n)
                  )
                    e.announceLocalError(102, "Wrong adList parameters.");
                  else {
                    var u = "ID" + a;
                    (o[u] = Object.assign({}, r)),
                      (o[u] = Object.assign(
                        o[u],
                        e.displayOptions.vastOptions.adList[d]
                      )),
                      "midRoll" == s.roll && (o[u].error = l("midRoll")),
                      (o[u].id = u),
                      a++;
                  }
                }
              Object.keys(o).map(function (e) {
                switch (o[e].roll.toLowerCase()) {
                  case "preRoll".toLowerCase():
                    i.preRoll.push(o[e]);
                    break;
                  case "midRoll".toLowerCase():
                    i.midRoll.push(o[e]);
                    break;
                  case "postRoll".toLowerCase():
                    i.postRoll.push(o[e]);
                    break;
                  case "onPauseRoll".toLowerCase():
                    i.onPauseRoll.push(o[e]);
                    break;
                  default:
                    console.error(
                      "".concat(
                        o[e].roll.toLowerCase(),
                        " is not a recognized roll"
                      )
                    );
                }
              }),
                (e.adGroupedByRolls = i),
                (e.adList = o);
            }),
            (e.onVastAdEnded = function (t) {
              t && t.stopImmediatePropagation(),
                e.deleteVastAdElements(),
                e.checkForNextAd();
            }),
            (e.vastLogoBehaviour = function (t) {
              if (!e.displayOptions.layoutControls.logo.showOverAds) {
                var n = document.getElementById(e.videoPlayerId + "_logo"),
                  o = document.getElementById(e.videoPlayerId + "_logo_image");
                if (!n || !o) return;
                n.style.display = t ? "none" : "inline";
              }
            }),
            (e.deleteVastAdElements = function () {
              e.removeClickthrough(),
                e.removeSkipButton(),
                e.removeAdCountdown(),
                e.removeAdPlayingText(),
                e.removeCTAButton(),
                e.vastLogoBehaviour(!1);
            });
        },
        function (e, t) {
          (e.createCardboardJoystickButton = function (t) {
            var n = document.getElementById(
                e.videoPlayerId + "_fluid_vr_joystick_panel"
              ),
              o = document.createElement("div");
            return (
              (o.id = e.videoPlayerId + "_fluid_vr_joystick_" + t),
              (o.className = "fluid_vr_button fluid_vr_joystick_" + t),
              n.appendChild(o),
              o
            );
          }),
            (e.cardboardRotateLeftRight = function (t) {
              var n = e.vrROTATION_POSITION,
                o = -e.vrROTATION_POSITION,
                i = { val: t < 1 ? n : o };
              new TWEEN.Tween(i)
                .to({ val: 0 }, e.vrROTATION_SPEED)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function () {
                  e.vrViewer.OrbitControls.rotateLeft(i.val);
                })
                .start();
            }),
            (e.cardboardRotateUpDown = function (t) {
              var n = e.vrROTATION_POSITION,
                o = -e.vrROTATION_POSITION,
                i = { val: t < 1 ? n : o };
              new TWEEN.Tween(i)
                .to({ val: 0 }, e.vrROTATION_SPEED)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function () {
                  e.vrViewer.OrbitControls.rotateUp(i.val);
                })
                .start();
            }),
            (e.createCardboardJoystick = function () {
              var t = document.getElementById(
                  e.videoPlayerId + "_fluid_vr_container"
                ),
                n = document.createElement("div");
              (n.id = e.videoPlayerId + "_fluid_vr_joystick_panel"),
                (n.className = "fluid_vr_joystick_panel"),
                t.appendChild(n);
              var o = e.createCardboardJoystickButton("up"),
                i = e.createCardboardJoystickButton("left"),
                r = e.createCardboardJoystickButton("right"),
                a = e.createCardboardJoystickButton("down"),
                l = e.createCardboardJoystickButton("zoomdefault"),
                d = e.createCardboardJoystickButton("zoomin"),
                s = e.createCardboardJoystickButton("zoomout");
              o.addEventListener("click", function () {
                e.cardboardRotateUpDown(1);
              }),
                a.addEventListener("click", function () {
                  e.cardboardRotateUpDown(0);
                }),
                r.addEventListener("click", function () {
                  e.cardboardRotateLeftRight(0);
                }),
                i.addEventListener("click", function () {
                  e.cardboardRotateLeftRight(1);
                }),
                l.addEventListener("click", function () {
                  (e.vrViewer.camera.fov = 60),
                    e.vrViewer.camera.updateProjectionMatrix();
                }),
                s.addEventListener("click", function () {
                  (e.vrViewer.camera.fov *= 1.1),
                    e.vrViewer.camera.updateProjectionMatrix();
                }),
                d.addEventListener("click", function () {
                  (e.vrViewer.camera.fov *= 0.9),
                    e.vrViewer.camera.updateProjectionMatrix();
                });
            }),
            (e.cardBoardResize = function () {
              e.domRef.player.addEventListener("theatreModeOn", function () {
                e.vrViewer.onWindowResize();
              }),
                e.domRef.player.addEventListener("theatreModeOff", function () {
                  e.vrViewer.onWindowResize();
                });
            }),
            (e.cardBoardSwitchToNormal = function () {
              var t = document.getElementById(
                  e.videoPlayerId + "_fluid_vr_joystick_panel"
                ),
                n = document.getElementById(
                  e.videoPlayerId + "_fluid_controls_container"
                ),
                o = e.domRef.player;
              e.vrViewer.enableEffect(PANOLENS.MODES.NORMAL),
                e.vrViewer.onWindowResize(),
                (e.vrMode = !1);
              var i = o.parentNode.getElementsByClassName(
                "fluid_vr2_controls_container"
              )[0];
              o.parentNode.removeChild(i),
                e.displayOptions.layoutControls.showCardBoardJoystick &&
                  t &&
                  (t.style.display = "block"),
                n.classList.remove("fluid_vr_controls_container"),
                (document.getElementById(
                  e.videoPlayerId + "_fluid_control_volume_container"
                ).style.display = "block");
              var r = document.getElementById("ad_countdown" + e.videoPlayerId),
                a = document.getElementById(e.videoPlayerId + "_fluid_cta"),
                l = document.getElementById(
                  e.videoPlayerId + "_fluid_ad_playing"
                ),
                d = document.getElementById("skip_button_" + e.videoPlayerId);
              r && (r.style.display = "block"),
                a && (a.style.display = "block"),
                l && (l.style.display = "block"),
                d && (d.style.display = "block");
            }),
            (e.cardBoardHideDefaultControls = function () {
              var t = document.getElementById(
                  e.videoPlayerId + "_fluid_vr_joystick_panel"
                ),
                n = document.getElementById(
                  e.videoPlayerId + "_fluid_initial_play"
                ),
                o = document.getElementById(
                  e.videoPlayerId + "_fluid_control_volume_container"
                );
              e.displayOptions.layoutControls.showCardBoardJoystick &&
                t &&
                (t.style.display = "none"),
                n &&
                  ((document.getElementById(
                    e.videoPlayerId + "_fluid_initial_play"
                  ).style.display = "none"),
                  (document.getElementById(
                    e.videoPlayerId + "_fluid_initial_play_button"
                  ).style.opacity = "1")),
                (o.style.display = "none");
            }),
            (e.cardBoardCreateVRControls = function () {
              var t = document
                .getElementById(e.videoPlayerId + "_fluid_controls_container")
                .cloneNode(!0);
              t.removeAttribute("id"),
                t.querySelectorAll("*").forEach(function (e) {
                  e.removeAttribute("id");
                }),
                t.classList.add("fluid_vr2_controls_container"),
                e.domRef.player.parentNode.insertBefore(
                  t,
                  e.domRef.player.nextSibling
                ),
                e.copyEvents(t);
            }),
            (e.cardBoardSwitchToVR = function () {
              var t = document.getElementById(
                e.videoPlayerId + "_fluid_controls_container"
              );
              e.vrViewer.enableEffect(PANOLENS.MODES.CARDBOARD),
                e.vrViewer.onWindowResize(),
                e.vrViewer.disableReticleControl(),
                (e.vrMode = !0),
                t.classList.add("fluid_vr_controls_container"),
                e.cardBoardHideDefaultControls(),
                e.cardBoardCreateVRControls();
              var n = document.getElementById("ad_countdown" + e.videoPlayerId),
                o = document.getElementById(e.videoPlayerId + "_fluid_cta"),
                i = document.getElementById(
                  e.videoPlayerId + "_fluid_ad_playing"
                ),
                r = document.getElementById("skip_button_" + e.videoPlayerId);
              n && (n.style.display = "none"),
                o && (o.style.display = "none"),
                i && (i.style.display = "none"),
                r && (r.style.display = "none");
            }),
            (e.cardBoardMoveTimeInfo = function () {
              var t = document.getElementById(
                  e.videoPlayerId + "_fluid_control_duration"
                ),
                n = document.getElementById(
                  e.videoPlayerId + "_fluid_controls_container"
                );
              t.classList.add("cardboard_time"),
                n.appendChild(t),
                (e.controlDurationUpdate = function () {
                  var t = e.formatTime(e.domRef.player.currentTime),
                    n = e.formatTime(e.currentVideoDuration),
                    o = e.domRef.player.parentNode.getElementsByClassName(
                      "fluid_control_duration"
                    ),
                    i = "";
                  if (e.isCurrentlyPlayingAd) {
                    i =
                      "<span class='ad_timer_prefix'>AD : </span>" +
                      t +
                      " / " +
                      n;
                    for (var r = 0; r < o.length; r++)
                      o[r].classList.add("ad_timer_prefix");
                  } else {
                    i = t + " / " + n;
                    for (var a = 0; a < o.length; a++)
                      o[a].classList.remove("ad_timer_prefix");
                  }
                  for (var l = 0; l < o.length; l++) o[l].innerHTML = i;
                });
            }),
            (e.cardBoardAlterDefaultControls = function () {
              e.cardBoardMoveTimeInfo();
            }),
            (e.createCardboardView = function () {
              var t = document.createElement("div");
              (t.id = e.videoPlayerId + "_fluid_vr_container"),
                (t.className = "fluid_vr_container"),
                e.domRef.player.parentNode.insertBefore(
                  t,
                  e.domRef.player.nextSibling
                ),
                (PANOLENS.VideoPanorama.prototype.pauseVideo = function () {}),
                (PANOLENS.VideoPanorama.prototype.playVideo = function () {}),
                (e.vrPanorama = new PANOLENS.VideoPanorama("", {
                  videoElement: e.domRef.player,
                  autoplay: e.displayOptions.layoutControls.autoPlay,
                  loop: !!e.displayOptions.layoutControls.loop,
                })),
                (e.vrViewer = new PANOLENS.Viewer({
                  container: t,
                  controlBar: !0,
                  controlButtons: [],
                  enableReticle: !1,
                })),
                e.vrViewer.add(e.vrPanorama),
                e.vrViewer.enableEffect(PANOLENS.MODES.NORMAL),
                e.vrViewer.onWindowResize(),
                ("Android" !== e.getMobileOs().userOs &&
                  "iOS" !== e.getMobileOs().userOs) ||
                  e.vrViewer.enableControl(1),
                e.cardBoardAlterDefaultControls(),
                e.cardBoardResize(),
                (e.vrViewer.initialCameraPosition = JSON.parse(
                  JSON.stringify(e.vrViewer.camera.position)
                )),
                e.displayOptions.layoutControls.showCardBoardJoystick &&
                  ("Android" !== e.getMobileOs().userOs &&
                    "iOS" !== e.getMobileOs().userOs &&
                    e.createCardboardJoystick(),
                  (e.vrViewer.OrbitControls.noZoom = !0)),
                e.trackEvent(
                  e.domRef.player.parentNode,
                  "click",
                  ".fluid_control_cardboard",
                  function () {
                    e.vrMode
                      ? e.cardBoardSwitchToNormal()
                      : e.cardBoardSwitchToVR();
                  }
                );
            }),
            (e.createCardboard = function () {
              e.displayOptions.layoutControls.showCardBoardView &&
                ((document.getElementById(
                  e.videoPlayerId + "_fluid_control_cardboard"
                ).style.display = "inline-block"),
                window.PANOLENS
                  ? e.createCardboardView()
                  : n
                      .e(4)
                      .then(n.bind(null, 268))
                      .then(function (t) {
                        (window.PANOLENS = t), e.createCardboardView();
                      }));
            });
        },
        function (e, t) {
          (e.subtitleFetchParse = function (t) {
            e.sendRequest(
              t.url,
              !0,
              e.displayOptions.vastOptions.vastTimeout,
              function () {
                if (
                  (4 !== this.readyState || 200 === this.status) &&
                  4 === this.readyState &&
                  200 === this.status
                ) {
                  var t = this.responseText,
                    n = new WebVTT.Parser(window, WebVTT.StringDecoder()),
                    o = [],
                    i = [];
                  (n.oncue = function (e) {
                    o.push(e);
                  }),
                    (n.onregion = function (e) {
                      i.push(e);
                    }),
                    n.parse(t),
                    n.flush(),
                    (e.subtitlesData = o);
                }
              }
            );
          }),
            (e.createSubtitlesSwitch = function () {
              if (
                ((e.subtitlesData = []),
                e.displayOptions.layoutControls.subtitlesEnabled)
              ) {
                var t = [];
                t.push({ label: "OFF", url: "na", lang: "OFF" });
                var n = e.domRef.player.querySelectorAll("track");
                [].forEach.call(n, function (e) {
                  "metadata" === e.kind &&
                    e.src &&
                    t.push({ label: e.label, url: e.src, lang: e.srclang });
                }),
                  (e.subtitlesTracks = t);
                var o = document.getElementById(
                  e.videoPlayerId + "_fluid_control_subtitles"
                );
                o.style.display = "inline-block";
                var i = !1,
                  r = document.createElement("div");
                (r.id = e.videoPlayerId + "_fluid_control_subtitles_list"),
                  (r.className = "fluid_subtitles_list"),
                  (r.style.display = "none");
                var a = !0;
                e.subtitlesTracks.forEach(function (t) {
                  var n = a ? "subtitle_selected" : "";
                  a = !1;
                  var o = document.createElement("div");
                  (o.id = "subtitle_" + e.videoPlayerId + "_" + t.label),
                    (o.className = "fluid_subtitle_list_item"),
                    (o.innerHTML =
                      '<span class="subtitle_button_icon ' +
                      n +
                      '"></span>' +
                      t.label),
                    o.addEventListener("click", function (t) {
                      t.stopPropagation();
                      for (
                        var n = this,
                          o = document.getElementsByClassName(
                            "subtitle_button_icon"
                          ),
                          i = 0;
                        i < o.length;
                        i++
                      )
                        o[i].className = o[i].className.replace(
                          "subtitle_selected",
                          ""
                        );
                      (n.firstChild.className += " subtitle_selected"),
                        e.subtitlesTracks.forEach(function (t) {
                          t.label ===
                            n.innerText.replace(/(\r\n\t|\n|\r\t)/gm, "") &&
                            ("OFF" === t.label
                              ? (e.subtitlesData = [])
                              : e.subtitleFetchParse(t));
                        }),
                        e.openCloseSubtitlesSwitch();
                    }),
                    r.appendChild(o),
                    (i = !0);
                }),
                  i
                    ? (o.appendChild(r),
                      o.addEventListener("click", function () {
                        e.openCloseSubtitlesSwitch();
                      }))
                    : (document.getElementById(
                        e.videoPlayerId + "_fluid_control_subtitles"
                      ).style.display = "none");
                e.domRef.player.addEventListener("timeupdate", function () {
                  e.renderSubtitles();
                });
              } else
                document.getElementById(
                  e.videoPlayerId + "_fluid_control_subtitles"
                ).style.display = "none";
            }),
            (e.renderSubtitles = function () {
              var t = e.domRef.player,
                n = Math.floor(t.currentTime),
                o = !1,
                i = document.getElementById(
                  e.videoPlayerId + "_fluid_subtitles_container"
                );
              if (e.isCurrentlyPlayingAd) i.innerHTML = "";
              else {
                for (var r = 0; r < e.subtitlesData.length; r++)
                  n >= e.subtitlesData[r].startTime &&
                    n <= e.subtitlesData[r].endTime &&
                    ((i.innerHTML = ""),
                    i.appendChild(
                      WebVTT.convertCueToDOMTree(
                        window,
                        e.subtitlesData[r].text
                      )
                    ),
                    (o = !0));
                o || (i.innerHTML = "");
              }
            }),
            (e.openCloseSubtitlesSwitch = function () {
              var t = document.getElementById(
                e.videoPlayerId + "_fluid_control_subtitles_list"
              );
              if (e.isCurrentlyPlayingAd) t.style.display = "none";
              else if ("none" === t.style.display) {
                t.style.display = "block";
                t.addEventListener("mouseleave", function e(n) {
                  t.removeEventListener("mouseleave", e),
                    (t.style.display = "none");
                });
              } else t.style.display = "none";
            }),
            (e.createSubtitles = function () {
              var t = document.createElement("div");
              (t.id = e.videoPlayerId + "_fluid_subtitles_container"),
                (t.className = "fluid_subtitles_container"),
                e.domRef.player.parentNode.insertBefore(
                  t,
                  e.domRef.player.nextSibling
                ),
                e.displayOptions.layoutControls.subtitlesEnabled &&
                  Promise.all([n.e(5), n.e(6)])
                    .then(n.t.bind(null, 269, 7))
                    .then(function (t) {
                      (window.WebVTT = t.WebVTT), e.createSubtitlesSwitch();
                    });
            });
        },
        function (e, t) {
          (e.setupThumbnailPreviewVtt = function () {
            e.sendRequest(
              e.displayOptions.layoutControls.timelinePreview.file,
              !0,
              e.displayOptions.vastOptions.vastTimeout,
              function () {
                if (
                  (4 !== this.readyState || 200 === this.status) &&
                  4 === this.readyState &&
                  200 === this.status
                ) {
                  var t = this.responseText,
                    n = new window.WebVTTParser().parse(t);
                  e.timelinePreviewData = (function (t) {
                    if (void 0 === t.cues || !t.cues.length) return [];
                    for (
                      var n = [], o = null, i = null, r = 0;
                      r < t.cues.length;
                      r++
                    ) {
                      var a = 0,
                        l = 0,
                        d = 122.5,
                        s = 69;
                      2 === (o = t.cues[r].text.split("#")).length &&
                        0 === o[1].indexOf("xywh=") &&
                        4 === (i = (i = o[1].substring(5)).split(",")).length &&
                        ((e.displayOptions.layoutControls.timelinePreview.spriteImage =
                          !0),
                        (a = parseInt(i[0])),
                        (l = parseInt(i[1])),
                        (d = parseInt(i[2])),
                        (s = parseInt(i[3])));
                      var u = void 0;
                      !e.displayOptions.layoutControls.timelinePreview
                        .spriteRelativePath ||
                      -1 ===
                        e.displayOptions.layoutControls.timelinePreview.file.indexOf(
                          "/"
                        ) ||
                      (void 0 !==
                        e.displayOptions.layoutControls.timelinePreview
                          .sprite &&
                        "" !==
                          e.displayOptions.layoutControls.timelinePreview
                            .sprite)
                        ? (u = e.displayOptions.layoutControls.timelinePreview
                            .sprite
                            ? e.displayOptions.layoutControls.timelinePreview
                                .sprite
                            : o[0])
                        : ((u =
                            e.displayOptions.layoutControls.timelinePreview.file.substring(
                              0,
                              e.displayOptions.layoutControls.timelinePreview.file.lastIndexOf(
                                "/"
                              )
                            )),
                          (u += "/" + o[0])),
                        n.push({
                          startTime: t.cues[r].startTime,
                          endTime: t.cues[r].endTime,
                          image: u,
                          x: a,
                          y: l,
                          w: d,
                          h: s,
                        });
                    }
                    return n;
                  })(n);
                }
              }
            );
          }),
            (e.generateTimelinePreviewTags = function () {
              var t = document.getElementById(
                  e.videoPlayerId + "_fluid_controls_progress_container"
                ),
                n = document.createElement("div");
              (n.id = e.videoPlayerId + "_fluid_timeline_preview_container"),
                (n.className = "fluid_timeline_preview_container"),
                (n.style.display = "none"),
                (n.style.position = "absolute"),
                t.appendChild(n);
              var o = document.createElement("div");
              (o.id =
                e.videoPlayerId + "_fluid_timeline_preview_container_shadow"),
                (o.className = "fluid_timeline_preview_container_shadow"),
                (o.style.position = "absolute"),
                (o.style.display = "none"),
                (o.style.opacity = 1),
                t.appendChild(o);
            }),
            (e.getThumbnailCoordinates = function (t) {
              if (e.timelinePreviewData.length)
                for (var n = 0; n < e.timelinePreviewData.length; n++)
                  if (
                    t >= e.timelinePreviewData[n].startTime &&
                    t <= e.timelinePreviewData[n].endTime
                  )
                    return e.timelinePreviewData[n];
              return !1;
            }),
            (e.drawTimelinePreview = function (t) {
              var n = document.getElementById(
                  e.videoPlayerId + "_fluid_timeline_preview_container"
                ),
                o = document.getElementById(
                  e.videoPlayerId + "_fluid_timeline_preview_container_shadow"
                ),
                i = document.getElementById(
                  e.videoPlayerId + "_fluid_controls_progress_container"
                ),
                r = i.clientWidth;
              if (e.isCurrentlyPlayingAd)
                "none" !== n.style.display && (n.style.display = "none");
              else {
                var a = e.getEventOffsetX(t, i),
                  l = null;
                if (r) {
                  l = (e.currentVideoDuration * a) / r;
                  var d = e.getThumbnailCoordinates(l);
                  (o.style.width = r + "px"),
                    (o.style.display = "block"),
                    !1 !== d
                      ? ((n.style.width = d.w + "px"),
                        (n.style.height = d.h + "px"),
                        (o.style.height = d.h + "px"),
                        (n.style.background =
                          "url(" +
                          d.image +
                          ") no-repeat scroll -" +
                          d.x +
                          "px -" +
                          d.y +
                          "px"),
                        (n.style.left = a - d.w / 2 + "px"),
                        (n.style.display = "block"),
                        e.displayOptions.layoutControls.timelinePreview
                          .spriteImage || (n.style.backgroundSize = "contain"))
                      : (n.style.display = "none");
                }
              }
            }),
            (e.setupThumbnailPreview = function () {
              var t = e.displayOptions.layoutControls.timelinePreview;
              if (t && t.type) {
                var o = "mousemove",
                  i = "mouseleave";
                if (
                  (e.mobileInfo.userOs && ((o = "touchmove"), (i = "touchend")),
                  document
                    .getElementById(
                      e.videoPlayerId + "_fluid_controls_progress_container"
                    )
                    .addEventListener(o, e.drawTimelinePreview.bind(e), !1),
                  document
                    .getElementById(
                      e.videoPlayerId + "_fluid_controls_progress_container"
                    )
                    .addEventListener(
                      i,
                      function (t) {
                        var n = document.getElementById(
                          e.videoPlayerId + "_fluid_controls_progress_container"
                        );
                        (void 0 !== t.clientX &&
                          n.contains(
                            document.elementFromPoint(t.clientX, t.clientY)
                          )) ||
                          ((document.getElementById(
                            e.videoPlayerId +
                              "_fluid_timeline_preview_container"
                          ).style.display = "none"),
                          (document.getElementById(
                            e.videoPlayerId +
                              "_fluid_timeline_preview_container_shadow"
                          ).style.display = "none"));
                      },
                      !1
                    ),
                  e.generateTimelinePreviewTags(),
                  "VTT" === t.type && "string" == typeof t.file)
                )
                  n.e(7)
                    .then(n.bind(null, 270))
                    .then(function (t) {
                      (window.WebVTTParser = t.default),
                        e.setupThumbnailPreviewVtt();
                    });
                else {
                  if ("static" !== t.type || "object" !== r(t.frames))
                    throw "Invalid thumbnail-preview - type must be VTT or static";
                  (t.spriteImage = !0), (e.timelinePreviewData = t.frames);
                }
                e.showTimeOnHover = !1;
              }
            });
        },
        function (e, t) {
          (e.renderLinearAd = function (t, o) {
            e.toggleLoader(!1),
              (e.vastOptions = e.adPool[t]),
              o && e.backupMainVideoContentTime(t);
            !(function (t) {
              (e.switchPlayerToVpaidMode = function (t) {
                e.debugMessage("starting function switchPlayerToVpaidMode");
                var n = e.videoPlayerId + "_" + t + "_fluid_vpaid_iframe",
                  o = {};
                o.AdParameters = e.adPool[t].adParameters;
                var i = document.createElement("div");
                (i.id = e.videoPlayerId + "_fluid_vpaid_slot"),
                  (i.className = "fluid_vpaid_slot"),
                  i.setAttribute("adListId", t),
                  e.domRef.player.parentNode.insertBefore(i, n.nextSibling);
                var r = {
                    slot: i,
                    videoSlot: e.domRef.player,
                    videoSlotCanAutoPlay: !0,
                  },
                  a = e.vpaidAdUnit.handshakeVersion("2.0");
                if (1 === e.compareVersion("2.0", a))
                  return (
                    (e.adList[t].error = !0),
                    e.playMainVideoWhenVpaidFails(403),
                    !1
                  );
                !1 !== e.vastOptions.skipoffset && e.addSkipButton(),
                  (e.domRef.player.loop = !1),
                  e.domRef.player.removeAttribute("controls"),
                  e.vpaidCallbackListenersAttach();
                var l = e.fullscreenMode ? "fullscreen" : "normal",
                  d = e.domRef.player.offsetWidth,
                  s = e.domRef.player.offsetHeight;
                e.vpaidAdUnit.initAd(d, s, l, 3e3, o, r);
                for (
                  var u = e.domRef.player.parentNode.getElementsByClassName(
                      "fluid_controls_currentprogress"
                    ),
                    c = 0;
                  c < u.length;
                  c++
                )
                  u[c].style.backgroundColor =
                    e.displayOptions.layoutControls.adProgressColor;
                e.toggleLoader(!1),
                  (e.adList[t].played = !0),
                  (e.adFinished = !1);
              }),
                (e.switchPlayerToVastMode = function () {
                  (e.vastOptions.duration ||
                    (e.vastOptions.duration =
                      "streaming" === o.delivery
                        ? 1 / 0
                        : e.domRef.player.duration),
                  e.displayOptions.layoutControls.showCardBoardView)
                    ? e.adList[t].landingPage
                      ? e.addCTAButton(e.adList[t].landingPage)
                      : e.addCTAButton(e.adPool[t].clickthroughUrl)
                    : ((void 0 !== e.adList[t].adClickable
                        ? e.adList[t].adClickable
                        : e.displayOptions.vastOptions.adClickable) &&
                        e.addClickthroughLayer(e.videoPlayerId),
                      e.addCTAButton(e.adList[t].landingPage));
                  !1 !== e.vastOptions.skipoffset && e.addSkipButton(),
                    (e.domRef.player.loop = !1),
                    e.addAdCountdown(),
                    e.domRef.player.removeAttribute("controls"),
                    e.vastLogoBehaviour(!0);
                  for (
                    var n = e.domRef.player.parentNode.getElementsByClassName(
                        "fluid_controls_currentprogress"
                      ),
                      i = 0;
                    i < n.length;
                    i++
                  )
                    n[i].style.backgroundColor =
                      e.displayOptions.layoutControls.adProgressColor;
                  if (
                    e.displayOptions.vastOptions.adText ||
                    e.adList[t].adText
                  ) {
                    var r =
                      null !== e.adList[t].adText
                        ? e.adList[t].adText
                        : e.displayOptions.vastOptions.adText;
                    e.addAdPlayingText(r);
                  }
                  if (
                    (e.positionTextElements(e.adList[t]),
                    e.toggleLoader(!1),
                    (e.adList[t].played = !0),
                    (e.adFinished = !1),
                    e.domRef.player.play(),
                    e.trackSingleEvent("impression"),
                    e.domRef.player.removeEventListener(
                      "loadedmetadata",
                      e.switchPlayerToVastMode
                    ),
                    e.vrMode)
                  ) {
                    var a = document.getElementById(
                        "ad_countdown" + e.videoPlayerId
                      ),
                      l = document.getElementById(
                        e.videoPlayerId + "_fluid_cta"
                      ),
                      d = document.getElementById(
                        e.videoPlayerId + "_fluid_ad_playing"
                      ),
                      s = document.getElementById(
                        "skip_button_" + e.videoPlayerId
                      );
                    a && (a.style.display = "none"),
                      l && (l.style.display = "none"),
                      d && (d.style.display = "none"),
                      s && (s.style.display = "none");
                  }
                }),
                e.domRef.player.pause(),
                e.detachStreamers();
              var o = e.getSupportedMediaFileObject(
                e.vastOptions.mediaFileList
              );
              if (
                e.displayOptions.layoutControls.showCardBoardView &&
                "360" !== e.adList[t].mediaType
              )
                return (
                  (e.adList[t].error = !0),
                  e.playMainVideoWhenVastFails(403),
                  !1
                );
              var i = e.vastOptions.vpaid;
              if (!i && o.isUnsuportedHls)
                n.e(3)
                  .then(n.t.bind(null, 271, 7))
                  .then(function (t) {
                    window.Hls = t.default;
                    var n = new Hls({
                      debug: !1,
                      p2pConfig: { logLevel: !1 },
                      enableWebVTT: !1,
                      enableCEA708Captions: !1,
                    });
                    n.attachMedia(e.domRef.player),
                      n.loadSource(o.src),
                      (e.isCurrentlyPlayingAd = !0),
                      (e.hlsPlayer = n),
                      e.domRef.player.addEventListener(
                        "loadedmetadata",
                        e.switchPlayerToVastMode
                      ),
                      e.domRef.player.addEventListener("ended", function () {
                        n.detachMedia(),
                          n.destroy(),
                          (e.hlsPlayer = !1),
                          e.onVastAdEnded();
                      }),
                      e.domRef.player.play();
                  });
              else if (i)
                e.loadVpaid(t, o.src),
                  e.displayOptions.vastOptions.showProgressbarMarkers &&
                    e.hideAdMarkers();
              else {
                if (!1 === o.src)
                  return (
                    (e.adList[t].error = !0),
                    e.playMainVideoWhenVastFails(403),
                    !1
                  );
                e.domRef.player.addEventListener(
                  "loadedmetadata",
                  e.switchPlayerToVastMode
                ),
                  (e.domRef.player.src = o.src),
                  (e.isCurrentlyPlayingAd = !0),
                  e.displayOptions.vastOptions.showProgressbarMarkers &&
                    e.hideAdMarkers(),
                  e.domRef.player.load(),
                  e.domRef.player.addEventListener("ended", e.onVastAdEnded);
              }
            })(t),
              e.domRef.player.addEventListener("timeupdate", function t() {
                if (e.adFinished)
                  e.domRef.player.removeEventListener("timeupdate", t);
                else {
                  var n = Math.floor(e.domRef.player.currentTime);
                  0 !== e.vastOptions.duration &&
                    e.scheduleTrackingEvent(n, e.vastOptions.duration),
                    n >= e.vastOptions.duration - 1 &&
                      0 !== e.vastOptions.duration &&
                      (e.domRef.player.removeEventListener("timeupdate", t),
                      (e.adFinished = !0));
                }
              });
          }),
            (e.playRoll = function (t) {
              for (var n = 0; n < t.length; n++) {
                if (!e.adPool.hasOwnProperty(t[n]))
                  return void e.announceLocalError(101);
                e.temporaryAdPods.push(e.adList[t[n]]);
              }
              if (
                null === e.vastOptions ||
                "linear" !== e.vastOptions.adType.toLowerCase()
              ) {
                var o = e.getNextAdPod();
                null !== o && e.renderLinearAd(o, !0);
              }
            }),
            (e.backupMainVideoContentTime = function (t) {
              switch (e.adList[t].roll) {
                case "midRoll":
                  e.domRef.player.mainVideoCurrentTime =
                    e.domRef.player.currentTime - 1;
                  break;
                case "postRoll":
                  (e.domRef.player.mainVideoCurrentTime = e.mainVideoDuration),
                    (e.autoplayAfterAd = !1),
                    (e.domRef.player.currentTime = e.mainVideoDuration);
                  break;
                case "preRoll":
                  e.domRef.player.currentTime > 0 &&
                    (e.domRef.player.mainVideoCurrentTime =
                      e.domRef.player.currentTime - 1);
              }
            }),
            (e.getSupportedMediaFileObject = function (t) {
              var n = null,
                o = !1;
              if (t.length)
                for (var i = 0; i < t.length; i++) {
                  if ("VPAID" === t[i].apiFramework) {
                    (n = t[i]), (o = !0);
                    break;
                  }
                  var r = e.getMediaFileTypeSupportLevel(t[i].type);
                  if (
                    (("maybe" !== r && "probably" !== r) ||
                      ((n = t[i]), (o = !0)),
                    "probably" === r)
                  )
                    break;
                  "no" !== r ||
                    "streaming" !== t[i].delivery ||
                    ("application/vnd.apple.mpegurl" !== t[i].type &&
                      "application/x-mpegURL" !== t[i].type) ||
                    (((n = t[i]).isUnsuportedHls = !0), (o = !0));
                }
              return !1 !== o && n;
            }),
            (e.getMediaFileTypeSupportLevel = function (e) {
              if (null === e) return null;
              var t = document.createElement("video").canPlayType(e);
              return t || "no";
            }),
            (e.scheduleTrackingEvent = function (t, n) {
              0 === t && e.trackSingleEvent("start"),
                void 0 !== e.vastOptions.tracking.progress &&
                  e.vastOptions.tracking.progress.length &&
                  void 0 !== e.vastOptions.tracking.progress[t] &&
                  e.trackSingleEvent("progress", t),
                t === Math.floor(n / 4) && e.trackSingleEvent("firstQuartile"),
                t === Math.floor(n / 2) && e.trackSingleEvent("midpoint"),
                t === Math.floor((3 * n) / 4) &&
                  e.trackSingleEvent("thirdQuartile"),
                t >= n - 1 && e.trackSingleEvent("complete");
            }),
            (e.trackSingleEvent = function (t, n) {
              if (void 0 !== e.vastOptions && null !== e.vastOptions) {
                var o = [];
                switch (((o.length = 0), t)) {
                  case "start":
                  case "firstQuartile":
                  case "midpoint":
                  case "thirdQuartile":
                  case "complete":
                    !1 === e.vastOptions.stopTracking[t] &&
                      (null !== e.vastOptions.tracking[t] &&
                        (o = e.vastOptions.tracking[t]),
                      (e.vastOptions.stopTracking[t] = !0));
                    break;
                  case "progress":
                    e.vastOptions.tracking.progress[n].elements.forEach(
                      function (t, i) {
                        !1 ===
                          e.vastOptions.tracking.progress[n].stopTracking &&
                          e.vastOptions.tracking.progress[n].elements.length &&
                          (o = e.vastOptions.tracking.progress[n].elements),
                          (e.vastOptions.tracking.progress[n].stopTracking =
                            !0);
                      }
                    );
                    break;
                  case "impression":
                    void 0 !== e.vastOptions.impression &&
                      null !== e.vastOptions.impression &&
                      void 0 !== e.vastOptions.impression.length &&
                      (o = e.vastOptions.impression);
                }
                e.callUris(o);
              }
            }),
            (e.completeNonLinearStatic = function (t) {
              e.closeNonLinear(t),
                !1 === e.adFinished &&
                  ((e.adFinished = !0), e.trackSingleEvent("complete")),
                clearInterval(e.nonLinearTracking);
            }),
            (e.createNonLinearStatic = function (t) {
              if (e.adPool.hasOwnProperty(t) && !0 !== e.adPool[t].error) {
                if (
                  ((e.vastOptions = e.adPool[t]),
                  e.createBoard(t),
                  !0 !== e.adList[t].error)
                ) {
                  var n;
                  (e.adFinished = !1),
                    e.vastOptions.vpaid ||
                      (e.trackSingleEvent("start"),
                      (n = e.adList[t].nonLinearDuration
                        ? e.adList[t].nonLinearDuration
                        : e.vastOptions.duration),
                      (e.nonLinearTracking = setInterval(function () {
                        if (!0 !== e.adFinished) {
                          var t = Math.floor(e.domRef.player.currentTime);
                          e.scheduleTrackingEvent(t, n),
                            t >= n - 1 && (e.adFinished = !0);
                        }
                      }, 400)));
                  var o = parseInt(e.getCurrentTime()) + parseInt(n);
                  e.scheduleTask({ time: o, closeStaticAd: t });
                }
              } else e.announceLocalError(101);
            }),
            (e.createVpaidNonLinearBoard = function (t) {
              var n = e.adPool[t];
              (e.loadVpaidNonlinearAssets = function (t) {
                e.debugMessage("starting function switchPlayerToVpaidMode");
                var o = e.adList[t].vAlign
                    ? e.adList[t].vAlign
                    : e.nonLinearVerticalAlign,
                  i = e.adList[t].vpaidNonLinearCloseButton
                    ? e.adList[t].vpaidNonLinearCloseButton
                    : e.vpaidNonLinearCloseButton,
                  r = e.videoPlayerId + "_" + t + "_fluid_vpaid_iframe",
                  a = {};
                a.AdParameters = e.adPool[t].adParameters;
                var l = document.createElement("div");
                (l.id = "fluid_vpaidNonLinear_" + t),
                  (l.className = "fluid_vpaidNonLinear_" + o),
                  (l.className += " fluid_vpaidNonLinear_ad"),
                  l.setAttribute("adListId", t);
                var d = Math.min(468, e.domRef.player.offsetWidth),
                  s = Math.min(
                    60,
                    Math.floor(e.domRef.player.offsetHeight / 4)
                  );
                if (void 0 !== e.adList[t].size) {
                  var u = e.adList[t].size.split("x");
                  (d = u[0]), (s = u[1]);
                } else
                  n.dimension.width &&
                    n.dimension.height &&
                    ((d = n.dimension.width), (s = n.dimension.height));
                if (
                  ((l.style.width = "100%"), (l.style.height = s + "px"), i)
                ) {
                  var c = document.createElement("div");
                  (c.className = "fluid_vpaidNonLinear_frame"),
                    (c.style.width = d + "px"),
                    (c.style.height = s + "px"),
                    l.appendChild(c);
                  var p = document.createElement("div");
                  (p.id = "close_button_" + e.videoPlayerId),
                    (p.className = "close_button"),
                    (p.innerHTML = ""),
                    (p.title =
                      e.displayOptions.layoutControls.closeButtonCaption);
                  var f = t;
                  (p.onclick = function (t) {
                    if (
                      (e.hardStopVpaidAd(""),
                      void 0 !== t.stopImmediatePropagation &&
                        t.stopImmediatePropagation(),
                      (e.adFinished = !0),
                      "onPauseRoll" === e.adList[f].roll &&
                        e.onPauseRollAdPods[0])
                    ) {
                      var n = e.onPauseRollAdPods[0];
                      e.createBoard(n),
                        (e.currentOnPauseRollAd = e.onPauseRollAdPods[0]),
                        delete e.onPauseRollAdPods[0];
                    }
                    return !1;
                  }),
                    c.appendChild(p);
                }
                var _ = document.createElement("iframe");
                (_.id = e.videoPlayerId + "non_linear_vapid_slot_iframe"),
                  (_.className = "fluid_vpaid_nonlinear_slot_iframe"),
                  _.setAttribute("width", d + "px"),
                  _.setAttribute("height", s + "px"),
                  _.setAttribute(
                    "sandbox",
                    "allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                  ),
                  _.setAttribute("frameborder", "0"),
                  _.setAttribute("scrolling", "no"),
                  _.setAttribute("marginwidth", "0"),
                  _.setAttribute("marginheight", "0"),
                  l.appendChild(_),
                  e.domRef.player.parentNode.insertBefore(l, r.nextSibling);
                var y = _.contentWindow.document.createElement("div");
                _.contentWindow.document.body.appendChild(y),
                  (e.vastOptions.slotIframe = _),
                  (e.vastOptions.slotFrame = void 0);
                var m = {
                  slot: y,
                  videoSlot: e.domRef.player,
                  videoSlotCanAutoPlay: !0,
                };
                e.debugMessage(e.adList[t]);
                var v = e.vpaidAdUnit.handshakeVersion("2.0");
                if (1 === e.compareVersion("2.0", v))
                  return (
                    (e.adList[t].error = !0),
                    e.playMainVideoWhenVpaidFails(403),
                    !1
                  );
                (e.domRef.player.loop = !1),
                  e.domRef.player.removeAttribute("controls"),
                  e.vpaidCallbackListenersAttach();
                var g = e.fullscreenMode ? "fullscreen" : "normal";
                e.vpaidAdUnit.initAd(d, s, g, 3e3, a, m),
                  e.toggleLoader(!1),
                  (e.adList[t].played = !0),
                  (e.adFinished = !1);
              }),
                e.loadVpaid(t, n.staticResource),
                e.debugMessage("create non linear vpaid");
            }),
            (e.createNonLinearBoard = function (t) {
              var n = e.adPool[t];
              e.adList[t].played = !0;
              var o = e.domRef.player.clientWidth,
                i =
                  (e.domRef.player.clientHeight, document.createElement("div")),
                r = e.adList[t].vAlign
                  ? e.adList[t].vAlign
                  : e.nonLinearVerticalAlign,
                a = new Image();
              (a.src = n.staticResource),
                (a.id =
                  "fluid_nonLinear_imgCreative_" + t + "_" + e.videoPlayerId),
                (a.onerror = function () {
                  (e.adList[t].error = !0), e.announceError(500);
                }),
                (a.onload = function () {
                  var i, r, l, d;
                  void 0 !== e.adList[t].size
                    ? ((i = e.adList[t].size.split("x")[0]),
                      (r = e.adList[t].size.split("x")[1]))
                    : n.dimension.width && n.dimension.height
                    ? ((i = n.dimension.width), (r = n.dimension.height))
                    : ((i = a.width), (r = a.height)),
                    i > o ? (d = (r * (l = o - 5)) / i) : ((l = i), (d = r)),
                    "onPauseRoll" !== e.adList[t].roll &&
                      (document.getElementById(
                        "fluid_nonLinear_" + t
                      ).style.display = "");
                  var s = document.getElementById(a.id);
                  (s.width = l),
                    (s.height = d),
                    e.trackSingleEvent("impression");
                }),
                (i.id = "fluid_nonLinear_" + t),
                (i.className = "fluid_nonLinear_" + r),
                (i.className += " fluid_nonLinear_ad"),
                (i.innerHTML = a.outerHTML),
                (i.style.display = "none"),
                (i.onclick = function () {
                  void 0 !== n.clickthroughUrl &&
                    window.open(n.clickthroughUrl),
                    void 0 !== n.clicktracking && e.callUris([n.clicktracking]);
                }),
                void 0 !== n.clickthroughUrl && (i.style.cursor = "pointer");
              var l = document.createElement("div");
              (l.id = "close_button_" + e.videoPlayerId),
                (l.className = "close_button"),
                (l.innerHTML = ""),
                (l.title = e.displayOptions.layoutControls.closeButtonCaption);
              var d = t;
              (l.onclick = function (t) {
                if (
                  (this.parentElement.remove(),
                  void 0 !== t.stopImmediatePropagation &&
                    t.stopImmediatePropagation(),
                  (e.adFinished = !0),
                  clearInterval(e.nonLinearTracking),
                  "onPauseRoll" === e.adList[d].roll && e.onPauseRollAdPods[0])
                ) {
                  var n = e.onPauseRollAdPods[0];
                  e.createBoard(n),
                    (e.currentOnPauseRollAd = e.onPauseRollAdPods[0]),
                    delete e.onPauseRollAdPods[0];
                }
                return !1;
              }),
                i.appendChild(l),
                e.domRef.player.parentNode.insertBefore(
                  i,
                  e.domRef.player.nextSibling
                );
            }),
            (e.createBoard = function (t) {
              var n = e.adPool[t];
              if (n.vpaid)
                e.hardStopVpaidAd(""), e.createVpaidNonLinearBoard(t);
              else {
                if (
                  void 0 === n.staticResource ||
                  -1 === e.supportedStaticTypes.indexOf(n.creativeType)
                )
                  return (
                    (e.adList[t].error = !0),
                    void (e.vastOptions && void 0 !== e.vastOptions.errorUrl
                      ? e.announceError(503)
                      : e.announceLocalError(503))
                  );
                e.createNonLinearBoard(t);
              }
            }),
            (e.closeNonLinear = function (e) {
              var t = document.getElementById("fluid_nonLinear_" + e);
              t && t.remove();
            }),
            (e.rollGroupContainsLinear = function (t) {
              for (var n = !1, o = 0; o < t.length; o++)
                if (
                  e.adList[t[o].id].adType &&
                  "linear" === e.adList[t[o].id].adType
                ) {
                  n = !0;
                  break;
                }
              return n;
            }),
            (e.rollGroupContainsNonlinear = function (t) {
              for (var n = !1, o = 0; o < t.length; o++)
                if ("nonlinear" === e.adList[t[o].id].adType.toLowerCase()) {
                  n = !0;
                  break;
                }
              return n;
            }),
            (e.preRollFail = function () {
              var t = e.preRollAdPodsLength;
              e.preRollVastResolved++,
                e.preRollVastResolved === t && e.preRollAdsPlay();
            }),
            (e.preRollSuccess = function () {
              var t = e.preRollAdPodsLength;
              e.preRollVastResolved++,
                e.preRollVastResolved === t && e.preRollAdsPlay();
            }),
            (e.preRollAdsPlay = function () {
              var t = e.preRollAdPods,
                n = { linear: [], nonLinear: [] };
              e.firstPlayLaunched = !0;
              for (var o = 0; o < t.length; o++) {
                if (!0 === e.adList[t[o]].played) return;
                "linear" === e.adList[t[o]].adType && n.linear.push(t[o]),
                  "nonLinear" === e.adList[t[o]].adType &&
                    (n.nonLinear.push(t[o]),
                    e.scheduleTask({
                      time: 0,
                      playRoll: "midRoll",
                      adListId: n.nonLinear.shift(),
                    }));
              }
              n.linear.length > 0
                ? (e.toggleLoader(!1), e.playRoll(n.linear))
                : e.playMainVideoWhenVastFails(900);
            }),
            (e.preRoll = function (t) {
              var n = t.vastObj;
              e.domRef.player.removeEventListener(t.type, e.preRoll);
              var o = [];
              o[0] = t.type.replace("adId_", "");
              !0 !== e.adList[o[0]].played &&
                (e.preRollAdPods.push(o[0]), e.preRollSuccess(n));
            }),
            (e.createAdMarker = function (t, n) {
              var o = document.getElementById(
                  e.videoPlayerId + "_ad_markers_holder"
                ),
                i = document.createElement("div");
              (i.id = "ad_marker_" + e.videoPlayerId + "_" + t),
                (i.className = "fluid_controls_ad_marker"),
                (i.style.left = (n / e.mainVideoDuration) * 100 + "%"),
                e.isCurrentlyPlayingAd && (i.style.display = "none"),
                o.appendChild(i);
            }),
            (e.hideAdMarker = function (t) {
              var n = document.getElementById(
                "ad_marker_" + e.videoPlayerId + "_" + t
              );
              n && (n.style.display = "none");
            }),
            (e.showAdMarkers = function () {
              for (
                var t = document
                    .getElementById(e.videoPlayerId + "_ad_markers_holder")
                    .getElementsByClassName("fluid_controls_ad_marker"),
                  n = "ad_marker_" + e.videoPlayerId + "_",
                  o = 0;
                o < t.length;
                ++o
              ) {
                var i = t[o],
                  r = i.id.replace(n, "");
                !1 === e.adList[r].played && (i.style.display = "");
              }
            }),
            (e.hideAdMarkers = function () {
              for (
                var t = document
                    .getElementById(e.videoPlayerId + "_ad_markers_holder")
                    .getElementsByClassName("fluid_controls_ad_marker"),
                  n = 0;
                n < t.length;
                ++n
              ) {
                t[n].style.display = "none";
              }
            }),
            (e.midRoll = function (t) {
              e.domRef.player.removeEventListener(t.type, e.midRoll);
              var n = t.type.replace("adId_", "");
              if (!0 !== e.adList[n].played) {
                var o = e.adList[n].timer;
                "string" == typeof o &&
                  -1 !== o.indexOf("%") &&
                  ((o = o.replace("%", "")),
                  (o = Math.floor((e.mainVideoDuration / 100) * o))),
                  e.displayOptions.vastOptions.showProgressbarMarkers &&
                    "nonLinear" === e.adList[n].adType &&
                    e.createAdMarker(n, o),
                  e.scheduleTask({ time: o, playRoll: "midRoll", adListId: n });
              }
            }),
            (e.postRoll = function (t) {
              e.domRef.player.removeEventListener(t.type, e.postRoll);
              var n = t.type.replace("adId_", "");
              e.scheduleTask({
                time: Math.floor(e.mainVideoDuration),
                playRoll: "postRoll",
                adListId: n,
              });
            }),
            (e.onPauseRoll = function (t) {
              e.domRef.player.removeEventListener(t.type, e.onPauseRoll);
              var n = t.type.replace("adId_", "");
              if ("nonLinear" === e.adList[n].adType) {
                if (!e.adPool.hasOwnProperty(n) || !0 === e.adPool[n].error)
                  return void e.announceLocalError(101);
                if (document.getElementsByClassName("fluid_nonLinear_ad")[0])
                  e.onPauseRollAdPods.push(n);
                else {
                  e.createBoard(n), (e.currentOnPauseRollAd = n);
                  var o = document.getElementById("fluid_nonLinear_" + n);
                  o && (o.style.display = "none");
                }
              }
            }),
            (e.hasValidOnPauseAd = function () {
              var t = e.findRoll("onPauseRoll");
              return (
                0 !== t.length && e.adList[t[0]] && !1 === e.adList[t[0]].error
              );
            }),
            (e.toggleOnPauseAd = function () {
              if (
                (e.toggleLoader(!1),
                e.hasValidOnPauseAd() && !e.isCurrentlyPlayingAd)
              ) {
                var t,
                  n = e.findRoll("onPauseRoll");
                (t =
                  "" !== e.currentOnPauseRollAd
                    ? e.currentOnPauseRollAd
                    : n[0]),
                  (e.vastOptions = e.adPool[t]);
                var o = document.getElementById("fluid_nonLinear_" + t);
                o && e.domRef.player.paused
                  ? setTimeout(function () {
                      (o.style.display = "flex"),
                        (e.adList[t].played = !1),
                        e.trackingOnPauseNonLinearAd(t, "start");
                    }, 500)
                  : o &&
                    !e.domRef.player.paused &&
                    ((o.style.display = "none"),
                    (e.adFinished = !0),
                    e.trackingOnPauseNonLinearAd(t, "complete"));
              }
            }),
            (e.trackingOnPauseNonLinearAd = function (t, n) {
              e.adPool.hasOwnProperty(t) && !0 !== e.adPool[t].error
                ? ((e.vastOptions = e.adPool[t]), e.trackSingleEvent(n))
                : e.announceLocalError(101);
            }),
            (e.getLinearAdsFromKeyTime = function (t) {
              for (var n = [], o = 0; o < t.length; o++)
                !1 === e.adList[t[o].adListId].played && n.push(t[o].adListId);
              return n;
            }),
            (e.adKeytimePlay = function (t) {
              if (e.timerPool[t] && !e.isCurrentlyPlayingAd) {
                var n = e.timerPool[t].closeStaticAd.length,
                  o = e.timerPool[t].linear.length,
                  i = e.timerPool[t].nonLinear.length;
                if (0 !== n || 0 !== o || 0 !== i) {
                  if (n > 0) {
                    for (var r = 0; r < n; r++) {
                      var a = e.timerPool[t].closeStaticAd[r].closeStaticAd;
                      !0 === e.adList[a].played && e.completeNonLinearStatic(a);
                    }
                    e.timerPool[t].closeStaticAd = [];
                  }
                  if (o > 0) {
                    var l = e.getLinearAdsFromKeyTime(e.timerPool[t].linear);
                    if (l.length > 0)
                      return e.playRoll(l), void (e.timerPool[t].linear = []);
                  }
                  if (i > 0)
                    for (var d = 0; d < i; d++) {
                      var s = e.timerPool[t].nonLinear[d].adListId;
                      e.adPool[s];
                      if (
                        !1 === e.adList[s].played &&
                        !e.displayOptions.layoutControls.showCardBoardView
                      )
                        return (
                          e.createNonLinearStatic(s),
                          e.displayOptions.vastOptions.showProgressbarMarkers &&
                            e.hideAdMarker(s),
                          void e.timerPool[t].nonLinear.splice(d, 1)
                        );
                    }
                } else delete e.timerPool[t];
              }
            }),
            (e.adTimer = function () {
              e.isTimer ||
                ((e.isTimer = !e.isTimer),
                (e.timer = setInterval(function () {
                  var t = Math.floor(e.getCurrentTime());
                  e.adKeytimePlay(t);
                }, 800)));
            }),
            (e.scheduleTask = function (t) {
              e.timerPool.hasOwnProperty(t.time) ||
                (e.timerPool[t.time] = {
                  linear: [],
                  nonLinear: [],
                  closeStaticAd: [],
                }),
                t.hasOwnProperty("playRoll") &&
                "linear" === e.adList[t.adListId].adType
                  ? e.timerPool[t.time].linear.push(t)
                  : t.hasOwnProperty("playRoll") &&
                    "nonLinear" === e.adList[t.adListId].adType
                  ? e.timerPool[t.time].nonLinear.push(t)
                  : t.hasOwnProperty("closeStaticAd") &&
                    e.timerPool[t.time].closeStaticAd.push(t);
            }),
            (e.switchToMainVideo = function () {
              e.debugMessage("starting main video"),
                (e.domRef.player.src = e.originalSrc),
                e.initialiseStreamers();
              var t =
                void 0 !== e.domRef.player.mainVideoCurrentTime
                  ? Math.floor(e.domRef.player.mainVideoCurrentTime)
                  : 0;
              if (
                (e.domRef.player.hasOwnProperty("currentTime") &&
                  (e.domRef.player.currentTime = t),
                e.displayOptions.layoutControls.loop &&
                  (e.domRef.player.loop = !0),
                e.setCurrentTimeAndPlay(t, e.autoplayAfterAd),
                (e.isCurrentlyPlayingAd = !1),
                e.deleteVastAdElements(),
                (e.adFinished = !0),
                e.displayOptions.vastOptions.vastAdvanced.vastVideoEndedCallback(),
                (e.vastOptions = null),
                e.setBuffering(),
                null !==
                  document.getElementById(
                    e.videoPlayerId + "_fluid_controls_progress_container"
                  ))
              )
                for (
                  var n = e.displayOptions.layoutControls.primaryColor
                      ? e.displayOptions.layoutControls.primaryColor
                      : "white",
                    o = e.domRef.player.parentNode.getElementsByClassName(
                      "fluid_controls_currentprogress"
                    ),
                    i = 0;
                  i < o.length;
                  i++
                )
                  o[i].style.backgroundColor = n;
              (e.domRef.player.removeEventListener("ended", e.onVastAdEnded),
              e.displayOptions.vastOptions.showProgressbarMarkers &&
                e.showAdMarkers(),
              e.hasTitle()) &&
                (document.getElementById(
                  e.videoPlayerId + "_title"
                ).style.display = "inline");
            }),
            (e.getNextAdPod = function () {
              var t = null;
              e.temporaryAdPods.length > 0 &&
                (t = e.temporaryAdPods.shift().id);
              return t;
            }),
            (e.checkForNextAd = function () {
              var t = e.getNextAdPod();
              null === t
                ? (e.switchToMainVideo(),
                  (e.vastOptions = null),
                  (e.adFinished = !0))
                : (e.domRef.player.removeEventListener(
                    "ended",
                    e.onVastAdEnded
                  ),
                  (e.isCurrentlyPlayingAd = !1),
                  (e.vastOptions = null),
                  (e.adFinished = !0),
                  e.renderLinearAd(t, !1));
            }),
            (e.addSkipButton = function () {
              var t = document.createElement("div");
              (t.id = "skip_button_" + e.videoPlayerId),
                (t.className = "skip_button skip_button_disabled"),
                (t.innerHTML =
                  e.displayOptions.vastOptions.skipButtonCaption.replace(
                    "[seconds]",
                    e.vastOptions.skipoffset
                  )),
                document
                  .getElementById("fluid_video_wrapper_" + e.videoPlayerId)
                  .appendChild(t),
                e.domRef.player.addEventListener(
                  "timeupdate",
                  e.decreaseSkipOffset,
                  !1
                );
            }),
            (e.addAdCountdown = function () {
              if (
                !(
                  (e.isCurrentlyPlayingAd && e.hlsPlayer) ||
                  e.currentVideoDuration === 1 / 0
                )
              ) {
                var t = document.getElementById(
                    "fluid_video_wrapper_" + e.videoPlayerId
                  ),
                  n = document.createElement("div"),
                  o =
                    e.pad(parseInt(e.currentVideoDuration / 60)) +
                    ":" +
                    e.pad(parseInt(e.currentVideoDuration % 60)),
                  i = parseInt(o);
                (n.id = "ad_countdown" + e.videoPlayerId),
                  (n.className = "ad_countdown"),
                  (n.innerHTML =
                    "<span class='ad_timer_prefix'>Ad - </span>" + i),
                  t.appendChild(n),
                  e.domRef.player.addEventListener(
                    "timeupdate",
                    e.decreaseAdCountdown,
                    !1
                  ),
                  t.addEventListener(
                    "mouseover",
                    function () {
                      n.style.display = "none";
                    },
                    !1
                  );
              }
            }),
            (e.decreaseAdCountdown = function () {
              var t =
                  parseInt(e.currentVideoDuration) -
                  parseInt(e.domRef.player.currentTime),
                n = document.getElementById("ad_countdown" + e.videoPlayerId);
              n && isNaN(t)
                ? n.parentNode.removeChild(n)
                : n
                ? (n.innerHTML =
                    "<span class='ad_timer_prefix'>Ad - </span> " +
                    e.pad(parseInt(t / 60)) +
                    ":" +
                    e.pad(parseInt(t % 60)))
                : e.domRef.player.removeEventListener(
                    "timeupdate",
                    e.decreaseAdCountdown
                  );
            }),
            (e.removeAdCountdown = function () {
              var t = document.getElementById("ad_countdown" + e.videoPlayerId);
              t && t.parentElement.removeChild(t);
            }),
            (e.toggleAdCountdown = function (t) {
              var n = document.getElementById("ad_countdown" + e.videoPlayerId);
              n && (n.style.display = t ? "inline-block" : "none");
            }),
            (e.addAdPlayingText = function (t) {
              var n = document.createElement("div");
              (n.id = e.videoPlayerId + "_fluid_ad_playing"),
                e.displayOptions.layoutControls.primaryColor &&
                  ((n.style.backgroundColor =
                    e.displayOptions.layoutControls.primaryColor),
                  (n.style.opacity = 1)),
                (n.className = "fluid_ad_playing"),
                (n.innerText = t),
                document
                  .getElementById("fluid_video_wrapper_" + e.videoPlayerId)
                  .appendChild(n);
            }),
            (e.positionTextElements = function (t) {
              var n,
                o,
                i,
                r = ["top left", "top right", "bottom left", "bottom right"],
                a = document.getElementById("skip_button_" + e.videoPlayerId),
                l = document.getElementById(
                  e.videoPlayerId + "_fluid_ad_playing"
                ),
                d = document.getElementById(e.videoPlayerId + "_fluid_cta"),
                s = 0,
                u = 0,
                c = !1,
                p = 0,
                f = [],
                _ = {
                  top: { left: { h: 34, v: 34 }, right: { h: 0, v: 34 } },
                  bottom: { left: { h: 34, v: 50 }, right: { h: 0, v: 50 } },
                };
              null !== a &&
                ((p = a.offsetHeight + 8),
                e.domRef.wrapper.classList.contains("mobile") &&
                  ((_.bottom.left.v = 75), (_.bottom.right.v = 75)));
              null !== d &&
                ((n =
                  e.displayOptions.vastOptions.adCTATextPosition.toLowerCase()),
                -1 === r.indexOf(n) &&
                  (console.log(
                    '[FP Error] Invalid position for CTAText. Reverting to "bottom right"'
                  ),
                  (n = "bottom right")),
                (c = "bottom" === (f = n.split(" "))[0]),
                (d.style[f[0]] = _[f[0]][f[1]].v + "px"),
                (d.style[f[1]] = _[f[0]][f[1]].h + "px"),
                c &&
                  "right" === f[1] &&
                  (d.style[f[0]] = _[f[0]][f[1]].v + p + "px"),
                (s = d.offsetHeight + 8 + "px")),
                null !== l &&
                  ((o =
                    null !== t.adTextPosition
                      ? t.adTextPosition.toLowerCase()
                      : e.displayOptions.vastOptions.adTextPosition.toLowerCase()),
                  -1 === r.indexOf(o) &&
                    (console.log(
                      '[FP Error] Invalid position for adText. Reverting to "top left"'
                    ),
                    (o = "top left")),
                  (i = o.split(" ")),
                  (l.style[i[0]] = _[i[0]][i[1]].v + "px"),
                  (l.style[i[1]] = _[i[0]][i[1]].h + "px"),
                  (u = l.offsetHeight + 8 + "px")),
                s > 0 &&
                  u > 0 &&
                  n === o &&
                  (c
                    ? "right" === f[1]
                      ? (l.style.bottom = _[i[0]][i[1]].v + p + s + "px")
                      : (l.style.bottom = _[i[0]][i[1]].v + s + "px")
                    : (d.style.top = _[f[0]][f[1]].v + u + "px"));
            }),
            (e.removeAdPlayingText = function () {
              var t = document.getElementById(
                e.videoPlayerId + "_fluid_ad_playing"
              );
              t && t.parentElement.removeChild(t);
            }),
            (e.addCTAButton = function (t) {
              if (e.vastOptions.titleCTA) {
                var n = e.vastOptions.titleCTA,
                  o = n.text,
                  i = n.link,
                  r = n.tracking;
                return e.createAndAppendCTAButton(o, i, r);
              }
              if (t)
                return e.createAndAppendCTAButton(
                  e.displayOptions.vastOptions.adCTAText,
                  t,
                  e.vastOptions.clickthroughUrl
                );
            }),
            (e.createAndAppendCTAButton = function (t, n, o) {
              var i = document.createElement("div");
              (i.id = e.videoPlayerId + "_fluid_cta"),
                (i.className = "fluid_ad_cta");
              var r = document.createElement("span"),
                a = t;
              n &&
                (a +=
                  '<br/><span class="add_icon_clickthrough">' + n + "</span>"),
                (r.innerHTML = a),
                i.addEventListener(
                  "click",
                  function () {
                    return (
                      e.domRef.player.paused || e.domRef.player.pause(),
                      window.open(o, "_blank").focus(),
                      !0
                    );
                  },
                  !1
                ),
                i.appendChild(r),
                document
                  .getElementById("fluid_video_wrapper_" + e.videoPlayerId)
                  .appendChild(i);
            }),
            (e.removeCTAButton = function () {
              var t = document.getElementById(e.videoPlayerId + "_fluid_cta");
              t && t.parentElement.removeChild(t);
            }),
            (e.decreaseSkipOffset = function () {
              var t =
                  e.vastOptions.skipoffset -
                  Math.floor(e.domRef.player.currentTime),
                n = document.getElementById("skip_button_" + e.videoPlayerId);
              if (n)
                if (t >= 1)
                  n.innerHTML =
                    e.displayOptions.vastOptions.skipButtonCaption.replace(
                      "[seconds]",
                      t
                    );
                else {
                  var o = document.createElement("a");
                  (o.href = "#"),
                    (o.id = "skipHref_" + e.videoPlayerId),
                    (o.innerHTML =
                      e.displayOptions.vastOptions.skipButtonClickCaption),
                    (o.onclick = function (t) {
                      t.preventDefault(),
                        t.stopPropagation(),
                        e.pressSkipButton();
                    }),
                    (n.innerHTML = ""),
                    n.appendChild(o),
                    (n.className = n.className.replace(
                      /\bskip_button_disabled\b/,
                      ""
                    )),
                    e.domRef.player.removeEventListener(
                      "timeupdate",
                      e.decreaseSkipOffset
                    );
                }
              else
                e.domRef.player.removeEventListener(
                  "timeupdate",
                  e.decreaseSkipOffset
                );
            }),
            (e.pressSkipButton = function () {
              if (
                (e.removeSkipButton(),
                e.removeAdPlayingText(),
                e.removeCTAButton(),
                e.vastOptions.vpaid)
              )
                e.skipVpaidAd();
              else {
                e.displayOptions.vastOptions.vastAdvanced.vastVideoSkippedCallback();
                var t = document.createEvent("Event");
                t.initEvent("ended", !1, !0), e.domRef.player.dispatchEvent(t);
              }
            }),
            (e.removeSkipButton = function () {
              var t = document.getElementById("skip_button_" + e.videoPlayerId);
              t && t.parentElement.removeChild(t);
            }),
            (e.addClickthroughLayer = function () {
              var t = e.domRef.wrapper,
                n = document.createElement("div");
              (n.className = "vast_clickthrough_layer"),
                (n.id = "vast_clickthrough_layer_" + e.videoPlayerId),
                n.setAttribute(
                  "style",
                  "position: absolute; cursor: pointer; top: 0; left: 0; width: " +
                    e.domRef.player.offsetWidth +
                    "px; height: " +
                    e.domRef.player.offsetHeight +
                    "px;"
                ),
                t.appendChild(n);
              var o = function () {
                  window.open(e.vastOptions.clickthroughUrl),
                    void 0 !== e.vastOptions.clicktracking &&
                      e.callUris(e.vastOptions.clicktracking);
                },
                i = document.getElementById(
                  "vast_clickthrough_layer_" + e.videoPlayerId
                ),
                r =
                  "iPhone" === e.mobileInfo.device &&
                  !1 !== e.mobileInfo.userOsMajor &&
                  e.mobileInfo.userOsMajor <= 9;
              i.onclick = function () {
                e.domRef.player.paused
                  ? r && !e.suppressClickthrough
                    ? (o(), (e.suppressClickthrough = !0))
                    : e.domRef.player.play()
                  : (o(), e.domRef.player.pause());
              };
            }),
            (e.removeClickthrough = function () {
              var t = document.getElementById(
                "vast_clickthrough_layer_" + e.videoPlayerId
              );
              t && t.parentNode.removeChild(t);
            });
        },
        function (e, t) {
          (e.initialiseStreamers = function () {
            switch (
              (e.detachStreamers(), e.displayOptions.layoutControls.mediaType)
            ) {
              case "application/dash+xml":
                e.dashScriptLoaded ||
                (window.dashjs && !window.dashjs.isDefaultSubject)
                  ? e.initialiseDash()
                  : ((e.dashScriptLoaded = !0),
                    Promise.all([n.e(2), n.e(0)])
                      .then(n.t.bind(null, 272, 7))
                      .then(function (t) {
                        (window.dashjs = t.default), e.initialiseDash();
                      }));
                break;
              case "application/x-mpegurl":
                e.hlsScriptLoaded || window.Hls
                  ? e.initialiseHls()
                  : ((e.hlsScriptLoaded = !0),
                    n
                      .e(3)
                      .then(n.t.bind(null, 271, 7))
                      .then(function (t) {
                        (window.Hls = t.default), e.initialiseHls();
                      }));
            }
          }),
            (e.initialiseDash = function () {
              if (
                "function" ==
                typeof (window.MediaSource || window.WebKitMediaSource)
              ) {
                var t = e.autoplayAfterAd
                    ? e.displayOptions.layoutControls.autoPlay
                    : e.autoplayAfterAd,
                  n = { debug: { logLevel: dashjs.Debug.LOG_LEVEL_FATAL } },
                  o = dashjs.MediaPlayer().create(),
                  i = e.displayOptions.modules.configureDash(n);
                o.updateSettings(i),
                  e.displayOptions.modules.onBeforeInitDash(o),
                  o.initialize(e.domRef.player, e.originalSrc, t),
                  o.on("streamInitializing", function () {
                    e.toggleLoader(!0);
                  }),
                  o.on("canPlay", function () {
                    e.toggleLoader(!1);
                  }),
                  o.on("playbackPlaying", function () {
                    e.toggleLoader(!1);
                  }),
                  e.displayOptions.modules.onAfterInitDash(o),
                  (e.dashPlayer = o);
              } else
                e.nextSource(),
                  console.log(
                    "[FP_WARNING] Media type not supported by this browser using DASH.js. (application/dash+xml)"
                  );
            }),
            (e.initialiseHls = function () {
              if (Hls.isSupported()) {
                var t = e.displayOptions.modules.configureHls({
                    debug: !1,
                    p2pConfig: { logLevel: !1 },
                    enableWebVTT: !1,
                    enableCEA708Captions: !1,
                  }),
                  n = new Hls(t);
                e.displayOptions.modules.onBeforeInitHls(n),
                  n.attachMedia(e.domRef.player),
                  n.loadSource(e.originalSrc),
                  e.displayOptions.modules.onAfterInitHls(n),
                  (e.hlsPlayer = n),
                  !e.firstPlayLaunched &&
                    e.displayOptions.layoutControls.autoPlay &&
                    e.domRef.player.play();
              } else
                e.nextSource(),
                  console.log(
                    "[FP_WARNING] Media type not supported by this browser using HLS.js. (application/x-mpegURL)"
                  );
            }),
            (e.detachStreamers = function () {
              e.dashPlayer
                ? (e.dashPlayer.reset(), (e.dashPlayer = !1))
                : e.hlsPlayer &&
                  (e.hlsPlayer.detachMedia(), (e.hlsPlayer = !1));
            });
        },
        function (e, t) {
          (e.isTouchDevice = function () {
            return !(!("ontouchstart" in window) && !navigator.maxTouchPoints);
          }),
            (e.getMobileOs = function () {
              var e,
                t = navigator.userAgent || "",
                n = { device: !1, userOs: !1, userOsVer: !1, userOsMajor: !1 };
              if (
                (t.match(/Android/i)
                  ? ((n.userOs = "Android"), (e = t.indexOf("Android ")))
                  : t.match(/iPhone/i)
                  ? ((n.device = "iPhone"),
                    (n.userOs = "iOS"),
                    (e = t.indexOf("OS ")))
                  : t.match(/iPad/i)
                  ? ((n.device = "iPad"),
                    (n.userOs = "iOS"),
                    (e = t.indexOf("OS ")))
                  : (n.userOs = !1),
                "iOS" === n.userOs && e > -1)
              ) {
                var o = t.substr(e + 3);
                -1 !== o.indexOf(" ") &&
                  ((n.userOsVer = o
                    .substring(0, o.indexOf(" "))
                    .replace(/_/g, ".")),
                  (n.userOsMajor = parseInt(n.userOsVer)));
              } else
                "Android" === n.userOs && e > -1
                  ? (n.userOsVer = t.substr(e + 8, 3))
                  : (n.userOsVer = !1);
              return n;
            }),
            (e.getBrowserVersion = function () {
              var e,
                t,
                n = navigator.userAgent || "",
                o = {
                  browserName: !1,
                  fullVersion: !1,
                  majorVersion: !1,
                  userOsMajor: !1,
                };
              try {
                (o.browserName = navigator.appName),
                  -1 !== (e = n.indexOf("OPR/"))
                    ? ((o.browserName = "Opera"),
                      (o.fullVersion = n.substring(e + 4)))
                    : -1 !== (e = n.indexOf("Opera"))
                    ? ((o.browserName = "Opera"),
                      (o.fullVersion = n.substring(e + 6)),
                      -1 !== (e = n.indexOf("Version")) &&
                        (o.fullVersion = n.substring(e + 8)))
                    : -1 !== (e = n.indexOf("MSIE"))
                    ? ((o.browserName = "Microsoft Internet Explorer"),
                      (o.fullVersion = n.substring(e + 5)))
                    : -1 !== (e = n.indexOf("Chrome"))
                    ? ((o.browserName = "Google Chrome"),
                      (o.fullVersion = n.substring(e + 7)))
                    : -1 !== (e = n.indexOf("Safari"))
                    ? ((o.browserName = "Safari"),
                      (o.fullVersion = n.substring(e + 7)),
                      -1 !== (e = n.indexOf("Version")) &&
                        (o.fullVersion = n.substring(e + 8)))
                    : -1 !== (e = n.indexOf("Firefox"))
                    ? ((o.browserName = "Mozilla Firefox"),
                      (o.fullVersion = n.substring(e + 8)))
                    : (t = n.lastIndexOf(" ") + 1) < (e = n.lastIndexOf("/")) &&
                      ((o.browserName = n.substring(t, e)),
                      (o.fullVersion = n.substring(e + 1)),
                      o.browserName.toLowerCase() ===
                        o.browserName.toUpperCase() &&
                        (o.browserName = navigator.appName)),
                  -1 !== (t = o.fullVersion.indexOf(";")) &&
                    (o.fullVersion = o.fullVersion.substring(0, t)),
                  -1 !== (t = o.fullVersion.indexOf(" ")) &&
                    (o.fullVersion = o.fullVersion.substring(0, t)),
                  (o.majorVersion = parseInt("" + o.fullVersion, 10)),
                  isNaN(o.majorVersion) &&
                    ((o.fullVersion = "" + parseFloat(navigator.appVersion)),
                    (o.majorVersion = parseInt(navigator.appVersion, 10)));
              } catch (e) {}
              return o;
            }),
            (e.compareVersion = function (e, t) {
              if ("string" != typeof e) return !1;
              if ("string" != typeof t) return !1;
              (e = e.split(".")), (t = t.split("."));
              for (var n = Math.min(e.length, t.length), o = 0; o < n; ++o) {
                if (
                  ((e[o] = parseInt(e[o], 10)),
                  (t[o] = parseInt(t[o], 10)),
                  e[o] > t[o])
                )
                  return 1;
                if (e[o] < t[o]) return -1;
              }
              return e.length === t.length ? 0 : e.length < t.length ? -1 : 1;
            }),
            (e.convertTimeStringToSeconds = function (e) {
              if (!e || !e.match(/^(\d){2}(:[0-5][0-9]){2}(.(\d){1,3})?$/))
                return !1;
              var t = e.split(":");
              return (
                3600 * parseInt(t[0], 10) +
                60 * parseInt(t[1], 10) +
                parseInt(t[2], 10)
              );
            }),
            (e.formatTime = function (t) {
              var n = new Date(1e3 * t),
                o = e.pad(n.getUTCHours()),
                i = e.pad(n.getUTCMinutes()),
                r = e.pad(n.getSeconds());
              return o >= 1 ? o + ":" + i + ":" + r : i + ":" + r;
            }),
            (e.pad = function (e) {
              return e < 10 ? "0" + e : e;
            });
        },
      ],
      u = 0,
      c = function () {
        var e = this,
          t = this;
        (t.domRef = { player: null }),
          (t.version = "3.5.0"),
          (t.homepage =
            "https://fluidplayer.com/?utm_source=player&utm_medium=context_menu&utm_campaign=organic"),
          (t.destructors = []),
          (t.init = function (e, n) {
            var o,
              i,
              r = { development: !1, debug: !1 },
              d = l(s);
            try {
              for (d.s(); !(o = d.n()).done; ) {
                (0, o.value)(t, r);
              }
            } catch (e) {
              d.e(e);
            } finally {
              d.f();
            }
            if (e instanceof HTMLVideoElement)
              (i = e),
                e.id || (e.id = "fluid_player_instance_" + (u++).toString());
            else {
              if (!("string" == typeof e || e instanceof String))
                throw "Invalid initializer - player target must be HTMLVideoElement or ID";
              i = document.getElementById(e);
            }
            if (!i)
              throw (
                "Could not find a HTML node to attach to for target " + e + '"'
              );
            for (var c in (i.setAttribute("playsinline", ""),
            i.setAttribute("webkit-playsinline", ""),
            (t.domRef.player = i),
            (t.vrROTATION_POSITION = 0.1),
            (t.vrROTATION_SPEED = 80),
            (t.vrMode = !1),
            (t.vrPanorama = null),
            (t.vrViewer = null),
            (t.vpaidTimer = null),
            (t.vpaidAdUnit = null),
            (t.vastOptions = null),
            (t.videoPlayerId = i.id),
            (t.originalSrc = t.getCurrentSrc()),
            (t.isCurrentlyPlayingAd = !1),
            (t.recentWaiting = !1),
            (t.latestVolume = 1),
            (t.currentVideoDuration = 0),
            (t.firstPlayLaunched = !1),
            (t.suppressClickthrough = !1),
            (t.timelinePreviewData = []),
            (t.mainVideoCurrentTime = 0),
            (t.mainVideoDuration = 0),
            (t.isTimer = !1),
            (t.timer = null),
            (t.timerPool = {}),
            (t.adList = {}),
            (t.adPool = {}),
            (t.adGroupedByRolls = {}),
            (t.onPauseRollAdPods = []),
            (t.currentOnPauseRollAd = ""),
            (t.preRollAdsResolved = !1),
            (t.preRollAdPods = []),
            (t.preRollAdPodsLength = 0),
            (t.preRollVastResolved = 0),
            (t.temporaryAdPods = []),
            (t.availableRolls = [
              "preRoll",
              "midRoll",
              "postRoll",
              "onPauseRoll",
            ]),
            (t.supportedNonLinearAd = ["300x250", "468x60", "728x90"]),
            (t.autoplayAfterAd = !0),
            (t.nonLinearDuration = 15),
            (t.supportedStaticTypes = ["image/gif", "image/jpeg", "image/png"]),
            (t.inactivityTimeout = null),
            (t.isUserActive = null),
            (t.nonLinearVerticalAlign = "bottom"),
            (t.vpaidNonLinearCloseButton = !0),
            (t.showTimeOnHover = !0),
            (t.initialAnimationSet = !0),
            (t.theatreMode = !1),
            (t.theatreModeAdvanced = !1),
            (t.fullscreenMode = !1),
            (t.originalWidth = i.offsetWidth),
            (t.originalHeight = i.offsetHeight),
            (t.dashPlayer = !1),
            (t.hlsPlayer = !1),
            (t.dashScriptLoaded = !1),
            (t.hlsScriptLoaded = !1),
            (t.isPlayingMedia = !1),
            (t.isSwitchingSource = !1),
            (t.isLoading = !1),
            (t.isInIframe = t.inIframe()),
            (t.mainVideoReadyState = !1),
            (t.xmlCollection = []),
            (t.inLineFound = null),
            (t.fluidStorage = {}),
            (t.fluidPseudoPause = !1),
            (t.mobileInfo = t.getMobileOs()),
            (t.events = {}),
            (t.displayOptions = {
              layoutControls: {
                mediaType: t.getCurrentSrcType(),
                primaryColor: !1,
                posterImage: !1,
                posterImageSize: "contain",
                adProgressColor: "#f9d300",
                playButtonShowing: !0,
                playPauseAnimation: !0,
                closeButtonCaption: "Close",
                fillToContainer: !1,
                autoPlay: !1,
                preload: "auto",
                mute: !1,
                loop: null,
                keyboardControl: !0,
                allowDownload: !1,
                playbackRateEnabled: !1,
                subtitlesEnabled: !1,
                showCardBoardView: !1,
                showCardBoardJoystick: !1,
                allowTheatre: !0,
                doubleclickFullscreen: !0,
                theatreSettings: {
                  width: "100%",
                  height: "60%",
                  marginTop: 0,
                  horizontalAlign: "center",
                  keepPosition: !1,
                },
                theatreAdvanced: !1,
                title: null,
                logo: {
                  imageUrl: null,
                  position: "top left",
                  clickUrl: null,
                  opacity: 1,
                  mouseOverImageUrl: null,
                  imageMargin: "2px",
                  hideWithControls: !1,
                  showOverAds: !1,
                },
                controlBar: { autoHide: !1, autoHideTimeout: 3, animated: !0 },
                timelinePreview: { spriteImage: !1, spriteRelativePath: !1 },
                htmlOnPauseBlock: { html: null, height: null, width: null },
                layout: "default",
                playerInitCallback: function () {},
                persistentSettings: {
                  volume: !0,
                  quality: !0,
                  speed: !0,
                  theatre: !0,
                },
                controlForwardBackward: { show: !1 },
                contextMenu: { controls: !0, links: [] },
              },
              vastOptions: {
                adList: {},
                skipButtonCaption: "Skip ad in [seconds]",
                skipButtonClickCaption:
                  'Skip Ad <span class="skip_button_icon"></span>',
                adText: null,
                adTextPosition: "top left",
                adCTAText: "Visit now!",
                adCTATextPosition: "bottom right",
                adCTATextVast: !1,
                adClickable: !0,
                vastTimeout: 5e3,
                showProgressbarMarkers: !1,
                allowVPAID: !1,
                showPlayButton: !1,
                maxAllowedVastTagRedirects: 3,
                vpaidTimeout: 3e3,
                vastAdvanced: {
                  vastLoadedCallback: function () {},
                  noVastVideoCallback: function () {},
                  vastVideoSkippedCallback: function () {},
                  vastVideoEndedCallback: function () {},
                },
              },
              captions: {
                play: "Play",
                pause: "Pause",
                mute: "Mute",
                unmute: "Unmute",
                fullscreen: "Fullscreen",
                subtitles: "Subtitles",
                exitFullscreen: "Exit Fullscreen",
              },
              debug: !1,
              modules: {
                configureHls: function (e) {
                  return e;
                },
                onBeforeInitHls: function (e) {},
                onAfterInitHls: function (e) {},
                configureDash: function (e) {
                  return e;
                },
                onBeforeInitDash: function (e) {},
                onAfterInitDash: function (e) {},
              },
              onBeforeXMLHttpRequestOpen: function (e) {},
              onBeforeXMLHttpRequest: function (e) {
                0;
              },
            }),
            n.hlsjsConfig &&
              console.error(
                "[FP_ERROR] player option hlsjsConfig is removed and has no effect. Use module callbacks instead!"
              ),
            n))
              if (n.hasOwnProperty(c))
                if ("object" == a(n[c]))
                  for (var p in n[c])
                    n[c].hasOwnProperty(p) &&
                      (t.displayOptions[c][p] = n[c][p]);
                else t.displayOptions[c] = n[c];
            (t.domRef.wrapper = t.setupPlayerWrapper()),
              i.addEventListener(
                "webkitfullscreenchange",
                t.recalculateAdDimensions
              ),
              i.addEventListener("fullscreenchange", t.recalculateAdDimensions),
              i.addEventListener("waiting", t.onRecentWaiting),
              i.addEventListener("pause", t.onFluidPlayerPause),
              i.addEventListener("error", t.onErrorDetection),
              i.addEventListener("ended", t.onMainVideoEnded),
              i.addEventListener("durationchange", function () {
                t.currentVideoDuration = t.getCurrentVideoDuration();
              }),
              i.readyState > 0
                ? t.mainVideoReady()
                : i.addEventListener("loadedmetadata", t.mainVideoReady),
              t.displayOptions.layoutControls.showCardBoardView &&
                i.setAttribute("crossOrigin", "anonymous"),
              (t.currentVideoDuration = t.getCurrentVideoDuration()),
              (!isNaN(t.currentVideoDuration) &&
                isFinite(t.currentVideoDuration)) ||
                (t.currentVideoDuration = 0),
              t.setLayout(),
              (t.latestVolume = i.volume),
              (t.initialAnimationSet =
                t.displayOptions.layoutControls.playPauseAnimation),
              t.handleFullscreen(),
              t.initLogo(),
              t.initTitle(),
              t.initMute(),
              t.initLoop(),
              t.displayOptions.layoutControls.playerInitCallback(),
              t.createVideoSourceSwitch(),
              t.createSubtitles(),
              t.createCardboard(),
              t.userActivityChecker(),
              t.setVastList(),
              t.setPersistentSettings();
            var f = t.findRoll("preRoll");
            (f && 0 !== f.length) || t.initialiseStreamers();
            var _ = i.play;
            i.play = function () {
              var e = null;
              t.displayOptions.layoutControls.showCardBoardView &&
                "undefined" != typeof DeviceOrientationEvent &&
                "function" == typeof DeviceOrientationEvent.requestPermission &&
                DeviceOrientationEvent.requestPermission()
                  .then(function (e) {
                    "granted" === e &&
                      t.debugMessage(
                        "DeviceOrientationEvent permission granted!"
                      );
                  })
                  .catch(console.error);
              try {
                return (
                  null != (e = _.apply(this, arguments)) &&
                    (e
                      .then(function () {
                        (t.isPlayingMedia = !0), clearTimeout(t.promiseTimeout);
                      })
                      .catch(function (e) {
                        console.error("[FP_ERROR] Playback error", e),
                          (void 0 !== e.name && "AbortError" === e.name) ||
                            t.announceLocalError(202, "Failed to play video."),
                          clearTimeout(t.promiseTimeout);
                      }),
                    (t.promiseTimeout = setTimeout(function () {
                      !1 === t.isPlayingMedia &&
                        t.announceLocalError(
                          204,
                          "[FP_ERROR] Timeout error. Failed to play video?"
                        );
                    }, 5e3))),
                  e
                );
              } catch (e) {
                console.error("[FP_ERROR] Playback error", e),
                  t.announceLocalError(201, "Failed to play video.");
              }
            };
            var y = i.pause;
            if (
              ((i.pause = function () {
                if (!0 === t.isPlayingMedia)
                  return (t.isPlayingMedia = !1), y.apply(this, arguments);
                if (t.isCurrentlyPlayingVideo(t.domRef.player))
                  try {
                    return (t.isPlayingMedia = !1), y.apply(this, arguments);
                  } catch (e) {
                    t.announceLocalError(203, "Failed to play video.");
                  }
              }),
              t.displayOptions.layoutControls.autoPlay &&
                !t.dashScriptLoaded &&
                !t.hlsScriptLoaded)
            ) {
              if ("Safari" === t.getBrowserVersion().browserName) return;
              i.play();
            }
            var m = document.getElementById("fluid_video_wrapper_" + i.id);
            t.mobileInfo.userOs
              ? (t.hideControlBar(),
                m.addEventListener("touchstart", t.showControlBar, !1))
              : (m.addEventListener("mouseleave", t.handleMouseleave, !1),
                m.addEventListener("mouseenter", t.showControlBar, !1),
                m.addEventListener("mouseenter", t.showTitle, !1)),
              t.displayOptions.layoutControls.keyboardControl &&
                t.keyboardControl(),
              t.displayOptions.layoutControls.controlBar.autoHide &&
                t.linkControlBarUserActivity();
            try {
              if (t.domRef.player.textTracks) {
                var v,
                  g = l(t.domRef.player.textTracks);
                try {
                  for (g.s(); !(v = g.n()).done; ) {
                    v.value.mode = "hidden";
                  }
                } catch (e) {
                  g.e(e);
                } finally {
                  g.f();
                }
              }
            } catch (e) {}
          }),
          (t.getCurrentVideoDuration = function () {
            return t.domRef.player ? t.domRef.player.duration : 0;
          }),
          (t.toggleLoader = function (e) {
            (t.isLoading = !!e),
              (document.getElementById(
                "vast_video_loading_" + t.videoPlayerId
              ).style.display = e ? "table" : "none");
          }),
          (t.sendRequest = function (e, n, o, i) {
            var r = new XMLHttpRequest();
            (r.onreadystatechange = i),
              t.displayOptions.onBeforeXMLHttpRequestOpen(r),
              r.open("GET", e, !0),
              (r.withCredentials = n),
              (r.timeout = o),
              t.displayOptions.onBeforeXMLHttpRequest(r),
              r.send();
          }),
          (t.announceLocalError = function (e, t) {
            var n = "[Error] (" + (void 0 !== e ? parseInt(e) : 900) + "): ";
            (n += t || "Failed to load Vast"), console.warn(n);
          }),
          (t.debugMessage = function (e) {
            t.displayOptions.debug && console.log(e);
          }),
          (t.onMainVideoEnded = function (e) {
            t.debugMessage("onMainVideoEnded is called"),
              (t.isCurrentlyPlayingAd && t.autoplayAfterAd) ||
                (Math.floor(t.getCurrentTime()) >=
                  Math.floor(t.mainVideoDuration) &&
                  (t.adKeytimePlay(Math.floor(t.mainVideoDuration)),
                  clearInterval(t.timer)),
                t.displayOptions.layoutControls.loop &&
                  (t.switchToMainVideo(), t.playPauseToggle()));
          }),
          (t.getCurrentTime = function () {
            return t.isCurrentlyPlayingAd
              ? t.mainVideoCurrentTime
              : t.domRef.player.currentTime;
          }),
          (t.getCurrentSrc = function () {
            var e = t.domRef.player.getElementsByTagName("source");
            return e.length ? e[0].getAttribute("src") : null;
          }),
          (t.getCurrentSrcType = function () {
            var e = t.domRef.player.getElementsByTagName("source");
            if (!e.length) return null;
            for (var n = 0; n < e.length; n++)
              if (e[n].getAttribute("src") === t.originalSrc)
                return e[n].getAttribute("type").toLowerCase();
            return null;
          }),
          (t.onRecentWaiting = function () {
            (t.recentWaiting = !0),
              setTimeout(function () {
                t.recentWaiting = !1;
              }, 1e3);
          }),
          (t.onFluidPlayerPause = function () {
            setTimeout(function () {
              if (!t.recentWaiting) {
                var e = document.createEvent("CustomEvent");
                e.initEvent("fluidplayerpause", !1, !0),
                  t.domRef.player.dispatchEvent(e);
              }
            }, 100);
          }),
          (t.checkShouldDisplayVolumeBar = function () {
            return "iOS" !== t.getMobileOs().userOs;
          }),
          (t.generateCustomControlTags = function (e) {
            var n = {};
            return (
              (n.loader = document.createElement("div")),
              (n.loader.className = "vast_video_loading"),
              (n.loader.id = "vast_video_loading_" + t.videoPlayerId),
              (n.loader.style.display = "none"),
              (n.root = document.createElement("div")),
              (n.root.className = "fluid_controls_container"),
              (n.root.id = t.videoPlayerId + "_fluid_controls_container"),
              e.displayVolumeBar ||
                (n.root.className = n.root.className + " no_volume_bar"),
              e.controlForwardBackward &&
                (n.root.className = n.root.className + " skip_controls"),
              (n.leftContainer = document.createElement("div")),
              (n.leftContainer.className = "fluid_controls_left"),
              n.root.appendChild(n.leftContainer),
              (n.playPause = document.createElement("div")),
              (n.playPause.className =
                "fluid_button fluid_button_play fluid_control_playpause"),
              (n.playPause.id = t.videoPlayerId + "_fluid_control_playpause"),
              n.leftContainer.appendChild(n.playPause),
              e.controlForwardBackward &&
                ((n.skipBack = document.createElement("div")),
                (n.skipBack.className = "fluid_button fluid_button_skip_back"),
                (n.skipBack.id = t.videoPlayerId + "_fluid_control_skip_back"),
                n.leftContainer.appendChild(n.skipBack),
                (n.skipForward = document.createElement("div")),
                (n.skipForward.className =
                  "fluid_button fluid_button_skip_forward"),
                (n.skipForward.id =
                  t.videoPlayerId + "_fluid_control_skip_forward"),
                n.leftContainer.appendChild(n.skipForward)),
              (n.progressContainer = document.createElement("div")),
              (n.progressContainer.className =
                "fluid_controls_progress_container fluid_slider"),
              (n.progressContainer.id =
                t.videoPlayerId + "_fluid_controls_progress_container"),
              n.root.appendChild(n.progressContainer),
              (n.progressWrapper = document.createElement("div")),
              (n.progressWrapper.className = "fluid_controls_progress"),
              n.progressContainer.appendChild(n.progressWrapper),
              (n.progressCurrent = document.createElement("div")),
              (n.progressCurrent.className = "fluid_controls_currentprogress"),
              (n.progressCurrent.id =
                t.videoPlayerId + "_vast_control_currentprogress"),
              (n.progressCurrent.style.backgroundColor = e.primaryColor),
              n.progressWrapper.appendChild(n.progressCurrent),
              (n.progress_current_marker = document.createElement("div")),
              (n.progress_current_marker.className =
                "fluid_controls_currentpos"),
              (n.progress_current_marker.id =
                t.videoPlayerId + "_vast_control_currentpos"),
              n.progressCurrent.appendChild(n.progress_current_marker),
              (n.bufferedIndicator = document.createElement("div")),
              (n.bufferedIndicator.className = "fluid_controls_buffered"),
              (n.bufferedIndicator.id = t.videoPlayerId + "_buffered_amount"),
              n.progressContainer.appendChild(n.bufferedIndicator),
              (n.adMarkers = document.createElement("div")),
              (n.adMarkers.className = "fluid_controls_ad_markers_holder"),
              (n.adMarkers.id = t.videoPlayerId + "_ad_markers_holder"),
              n.progressContainer.appendChild(n.adMarkers),
              (n.rightContainer = document.createElement("div")),
              (n.rightContainer.className = "fluid_controls_right"),
              n.root.appendChild(n.rightContainer),
              (n.fullscreen = document.createElement("div")),
              (n.fullscreen.id = t.videoPlayerId + "_fluid_control_fullscreen"),
              (n.fullscreen.className =
                "fluid_button fluid_control_fullscreen fluid_button_fullscreen"),
              n.rightContainer.appendChild(n.fullscreen),
              (n.theatre = document.createElement("div")),
              (n.theatre.id = t.videoPlayerId + "_fluid_control_theatre"),
              (n.theatre.className =
                "fluid_button fluid_control_theatre fluid_button_theatre"),
              n.rightContainer.appendChild(n.theatre),
              (n.cardboard = document.createElement("div")),
              (n.cardboard.id = t.videoPlayerId + "_fluid_control_cardboard"),
              (n.cardboard.className =
                "fluid_button fluid_control_cardboard fluid_button_cardboard"),
              n.rightContainer.appendChild(n.cardboard),
              (n.subtitles = document.createElement("div")),
              (n.subtitles.id = t.videoPlayerId + "_fluid_control_subtitles"),
              (n.subtitles.className = "fluid_button fluid_button_subtitles"),
              n.rightContainer.appendChild(n.subtitles),
              (n.videoSource = document.createElement("div")),
              (n.videoSource.id =
                t.videoPlayerId + "_fluid_control_video_source"),
              (n.videoSource.className =
                "fluid_button fluid_button_video_source"),
              n.rightContainer.appendChild(n.videoSource),
              (n.playbackRate = document.createElement("div")),
              (n.playbackRate.id =
                t.videoPlayerId + "_fluid_control_playback_rate"),
              (n.playbackRate.className =
                "fluid_button fluid_button_playback_rate"),
              n.rightContainer.appendChild(n.playbackRate),
              (n.download = document.createElement("div")),
              (n.download.id = t.videoPlayerId + "_fluid_control_download"),
              (n.download.className = "fluid_button fluid_button_download"),
              n.rightContainer.appendChild(n.download),
              (n.volumeContainer = document.createElement("div")),
              (n.volumeContainer.id =
                t.videoPlayerId + "_fluid_control_volume_container"),
              (n.volumeContainer.className =
                "fluid_control_volume_container fluid_slider"),
              n.rightContainer.appendChild(n.volumeContainer),
              (n.volume = document.createElement("div")),
              (n.volume.id = t.videoPlayerId + "_fluid_control_volume"),
              (n.volume.className = "fluid_control_volume"),
              n.volumeContainer.appendChild(n.volume),
              (n.volumeCurrent = document.createElement("div")),
              (n.volumeCurrent.id =
                t.videoPlayerId + "_fluid_control_currentvolume"),
              (n.volumeCurrent.className = "fluid_control_currentvolume"),
              n.volume.appendChild(n.volumeCurrent),
              (n.volumeCurrentPos = document.createElement("div")),
              (n.volumeCurrentPos.id =
                t.videoPlayerId + "_fluid_control_volume_currentpos"),
              (n.volumeCurrentPos.className =
                "fluid_control_volume_currentpos"),
              n.volumeCurrent.appendChild(n.volumeCurrentPos),
              (n.mute = document.createElement("div")),
              (n.mute.id = t.videoPlayerId + "_fluid_control_mute"),
              (n.mute.className =
                "fluid_button fluid_button_volume fluid_control_mute"),
              n.rightContainer.appendChild(n.mute),
              (n.duration = document.createElement("div")),
              (n.duration.id = t.videoPlayerId + "_fluid_control_duration"),
              (n.duration.className =
                "fluid_control_duration fluid_fluid_control_duration"),
              (n.duration.innerText = "00:00 / 00:00"),
              n.rightContainer.appendChild(n.duration),
              n
            );
          }),
          (t.controlPlayPauseToggle = function () {
            var e = t.domRef.player.parentNode.getElementsByClassName(
                "fluid_control_playpause"
              ),
              n = document.getElementById(
                t.videoPlayerId + "context_option_play"
              ),
              o = t.domRef.player.parentNode.getElementsByClassName(
                "fluid_controls_container"
              ),
              i = document.getElementById(t.videoPlayerId + "_logo");
            if (
              (document.getElementById(
                t.videoPlayerId + "_fluid_initial_play"
              ) &&
                ((document.getElementById(
                  t.videoPlayerId + "_fluid_initial_play"
                ).style.display = "none"),
                (document.getElementById(
                  t.videoPlayerId + "_fluid_initial_play_button"
                ).style.opacity = "1")),
              !t.domRef.player.paused)
            ) {
              for (var r = 0; r < e.length; r++)
                e[r].className = e[r].className.replace(
                  /\bfluid_button_play\b/g,
                  "fluid_button_pause"
                );
              for (var a = 0; a < o.length; a++)
                o[a].classList.remove("initial_controls_show");
              return (
                i && i.classList.remove("initial_controls_show"),
                void (
                  null !== n && (n.innerHTML = t.displayOptions.captions.pause)
                )
              );
            }
            for (var l = 0; l < e.length; l++)
              e[l].className = e[l].className.replace(
                /\bfluid_button_pause\b/g,
                "fluid_button_play"
              );
            for (var d = 0; d < o.length; d++)
              o[d].classList.add("initial_controls_show");
            t.isCurrentlyPlayingAd &&
              t.displayOptions.vastOptions.showPlayButton &&
              ((document.getElementById(
                t.videoPlayerId + "_fluid_initial_play"
              ).style.display = "block"),
              (document.getElementById(
                t.videoPlayerId + "_fluid_initial_play_button"
              ).style.opacity = "1")),
              i && i.classList.add("initial_controls_show"),
              null !== n && (n.innerHTML = t.displayOptions.captions.play);
          }),
          (t.playPauseAnimationToggle = function (e) {
            t.isCurrentlyPlayingAd ||
              !t.displayOptions.layoutControls.playPauseAnimation ||
              t.isSwitchingSource ||
              (e
                ? (document
                    .getElementById(t.videoPlayerId + "_fluid_state_button")
                    .classList.remove("fluid_initial_pause_button"),
                  document
                    .getElementById(t.videoPlayerId + "_fluid_state_button")
                    .classList.add("fluid_initial_play_button"))
                : (document
                    .getElementById(t.videoPlayerId + "_fluid_state_button")
                    .classList.remove("fluid_initial_play_button"),
                  document
                    .getElementById(t.videoPlayerId + "_fluid_state_button")
                    .classList.add("fluid_initial_pause_button")),
              document
                .getElementById(t.videoPlayerId + "_fluid_initial_play")
                .classList.add("transform-active"),
              setTimeout(function () {
                document
                  .getElementById(t.videoPlayerId + "_fluid_initial_play")
                  .classList.remove("transform-active");
              }, 800));
          }),
          (t.contolProgressbarUpdate = function () {
            for (
              var e = t.domRef.player.parentNode.getElementsByClassName(
                  "fluid_controls_currentprogress"
                ),
                n = 0;
              n < e.length;
              n++
            )
              e[n].style.width =
                (t.domRef.player.currentTime / t.currentVideoDuration) * 100 +
                "%";
          }),
          (t.controlDurationUpdate = function () {
            var e,
              n = t.formatTime(t.domRef.player.currentTime),
              o = !1;
            (t.hlsPlayer &&
              (o =
                t.hlsPlayer.levels &&
                t.hlsPlayer.levels[t.hlsPlayer.currentLevel] &&
                t.hlsPlayer.levels[t.hlsPlayer.currentLevel].details.live),
            isNaN(t.currentVideoDuration) ||
              !isFinite(t.currentVideoDuration) ||
              o)
              ? (e = n)
              : (e = n + " / " + t.formatTime(t.currentVideoDuration));
            for (
              var i = t.domRef.player.parentNode.getElementsByClassName(
                  "fluid_control_duration"
                ),
                r = 0;
              r < i.length;
              r++
            )
              i[r].innerHTML = e;
          }),
          (t.contolVolumebarUpdate = function () {
            var e = document.getElementById(
                t.videoPlayerId + "_fluid_control_currentvolume"
              ),
              n = document.getElementById(
                t.videoPlayerId + "_fluid_control_volume_currentpos"
              ),
              o = document.getElementById(
                t.videoPlayerId + "_fluid_control_volume"
              ).clientWidth,
              i = n.clientWidth,
              r =
                t.domRef.player.parentNode.getElementsByClassName(
                  "fluid_control_mute"
                ),
              a = document.getElementById(
                t.videoPlayerId + "context_option_mute"
              );
            if (
              (0 !== t.domRef.player.volume
                ? ((t.latestVolume = t.domRef.player.volume),
                  (t.fluidStorage.fluidMute = !1))
                : (t.fluidStorage.fluidMute = !0),
              t.domRef.player.volume && !t.domRef.player.muted)
            ) {
              for (var l = 0; l < r.length; l++)
                r[l].className = r[l].className.replace(
                  /\bfluid_button_mute\b/g,
                  "fluid_button_volume"
                );
              null !== a && (a.innerHTML = t.displayOptions.captions.mute);
            } else {
              for (var d = 0; d < r.length; d++)
                r[d].className = r[d].className.replace(
                  /\bfluid_button_volume\b/g,
                  "fluid_button_mute"
                );
              null !== a && (a.innerHTML = t.displayOptions.captions.unmute);
            }
            (e.style.width = t.domRef.player.volume * o + "px"),
              (n.style.left = t.domRef.player.volume * o - i / 2 + "px");
          }),
          (t.muteToggle = function () {
            0 === t.domRef.player.volume || t.domRef.player.muted
              ? ((t.domRef.player.volume = t.latestVolume),
                (t.domRef.player.muted = !1))
              : ((t.domRef.player.volume = 0), (t.domRef.player.muted = !0)),
              (t.fluidStorage.fluidVolume = t.latestVolume),
              (t.fluidStorage.fluidMute = t.domRef.player.muted);
          }),
          (t.checkFullscreenSupport = function (e) {
            var n = document.getElementById(e);
            return n.mozRequestFullScreen
              ? {
                  goFullscreen: "mozRequestFullScreen",
                  exitFullscreen: "mozCancelFullScreen",
                  isFullscreen: "mozFullScreenElement",
                }
              : n.webkitRequestFullscreen
              ? {
                  goFullscreen: "webkitRequestFullscreen",
                  exitFullscreen: "webkitExitFullscreen",
                  isFullscreen: "webkitFullscreenElement",
                }
              : n.msRequestFullscreen
              ? {
                  goFullscreen: "msRequestFullscreen",
                  exitFullscreen: "msExitFullscreen",
                  isFullscreen: "msFullscreenElement",
                }
              : n.requestFullscreen
              ? {
                  goFullscreen: "requestFullscreen",
                  exitFullscreen: "exitFullscreen",
                  isFullscreen: "fullscreenElement",
                }
              : !!t.domRef.player.webkitSupportsFullscreen && {
                  goFullscreen: "webkitEnterFullscreen",
                  exitFullscreen: "webkitExitFullscreen",
                  isFullscreen: "webkitDisplayingFullscreen",
                };
          }),
          (t.fullscreenOff = function (e, n) {
            for (var o = 0; o < e.length; o++)
              e[o].className = e[o].className.replace(
                /\bfluid_button_fullscreen_exit\b/g,
                "fluid_button_fullscreen"
              );
            null !== n && (n.innerHTML = "Fullscreen"), (t.fullscreenMode = !1);
          }),
          (t.fullscreenOn = function (e, n) {
            for (var o = 0; o < e.length; o++)
              e[o].className = e[o].className.replace(
                /\bfluid_button_fullscreen\b/g,
                "fluid_button_fullscreen_exit"
              );
            null !== n &&
              (n.innerHTML = t.displayOptions.captions.exitFullscreen),
              (t.fullscreenMode = !0);
          }),
          (t.fullscreenToggle = function () {
            var e,
              n = t.domRef.player,
              o = document.getElementById(
                "fluid_video_wrapper_" + t.videoPlayerId
              ),
              i = t.checkFullscreenSupport(
                "fluid_video_wrapper_" + t.videoPlayerId
              ),
              r = n.parentNode.getElementsByClassName(
                "fluid_control_fullscreen"
              ),
              a = document.getElementById(
                t.videoPlayerId + "context_option_fullscreen"
              );
            t.theatreMode && t.theatreToggle(),
              i
                ? "webkitEnterFullscreen" === i.goFullscreen
                  ? n[i.isFullscreen] ||
                    ((e = "videoPlayerTag." + i.goFullscreen + "();"),
                    t.fullscreenOn(r, a),
                    new Function("videoPlayerTag", e)(n))
                  : (null === document[i.isFullscreen]
                      ? ((e = "videoPlayerTag." + i.goFullscreen + "();"),
                        t.fullscreenOn(r, a))
                      : ((e = "document." + i.exitFullscreen + "();"),
                        t.fullscreenOff(r, a)),
                    new Function("videoPlayerTag", e)(o))
                : -1 !== o.className.search(/\bpseudo_fullscreen\b/g)
                ? ((o.className = o.className.replace(
                    /\bpseudo_fullscreen\b/g,
                    ""
                  )),
                  t.fullscreenOff(r, a))
                : ((o.className += " pseudo_fullscreen"), t.fullscreenOn(r, a)),
              t.resizeVpaidAuto();
          }),
          (t.findClosestParent = function (e, t) {
            var n,
              o = null;
            if (
              ([
                "matches",
                "webkitMatchesSelector",
                "mozMatchesSelector",
                "msMatchesSelector",
                "oMatchesSelector",
              ].some(function (e) {
                return "function" == typeof document.body[e] && ((o = e), !0);
              }),
              e[o](t))
            )
              return e;
            for (; e; ) {
              if ((n = e.parentElement) && n[o](t)) return n;
              e = n;
            }
            return null;
          }),
          (t.getTranslateX = function (e) {
            var t = null;
            try {
              var n = e.style.transform.match(
                /translate3d\((-?\d+px,\s?){2}-?\d+px\)/
              );
              n &&
                n.length &&
                (t = n[0]
                  .replace("translate3d(", "")
                  .replace(")", "")
                  .replace(/\s/g, "")
                  .replace(/px/g, "")
                  .split(","));
            } catch (e) {
              t = null;
            }
            return t && 3 === t.length ? parseInt(t[0]) : 0;
          }),
          (t.getEventOffsetX = function (e, n) {
            for (var o = 0, i = 0; n && !isNaN(n.offsetLeft); )
              (i = t.getTranslateX(n)),
                "BODY" === n.tagName
                  ? (o +=
                      n.offsetLeft +
                      n.clientLeft +
                      i -
                      (n.scrollLeft || document.documentElement.scrollLeft))
                  : (o += n.offsetLeft + n.clientLeft + i - n.scrollLeft),
                (n = n.offsetParent);
            return (
              (void 0 !== e.touches && void 0 !== e.touches[0]
                ? e.touches[0].clientX
                : e.clientX) - o
            );
          }),
          (t.getEventOffsetY = function (e, n) {
            var o = 1,
              i = t.findClosestParent(n, 'div[id^="fluid_video_wrapper_"]');
            if (i) {
              var r = i.id.replace("fluid_video_wrapper_", ""),
                a = t.checkFullscreenSupport("fluid_video_wrapper_" + r);
              a && document[a.isFullscreen] && (o = 0);
            }
            for (var l = 0; n && !isNaN(n.offsetTop); )
              "BODY" === n.tagName
                ? (l +=
                    n.offsetTop -
                    (n.scrollTop || document.documentElement.scrollTop) * o)
                : (l += n.offsetTop - n.scrollTop * o),
                (n = n.offsetParent);
            return e.clientY - l;
          }),
          (t.onProgressbarMouseDown = function (e) {
            var n;
            if (
              ((t.displayOptions.layoutControls.playPauseAnimation = !1),
              (n = t.displayOptions.layoutControls.showCardBoardView
                ? t.getEventOffsetX(e, e.target.parentNode)
                : t.getEventOffsetX(
                    e,
                    document.getElementById(
                      t.videoPlayerId + "_fluid_controls_progress_container"
                    )
                  )),
              !t.isCurrentlyPlayingAd)
            ) {
              t.fluidPseudoPause = !0;
              var o = t.domRef.player.paused;
              o || t.domRef.player.pause();
              var i = function (e) {
                  var n = document.getElementById(
                    t.videoPlayerId + "_fluid_controls_progress_container"
                  ).clientWidth;
                  n &&
                    (t.domRef.player.currentTime =
                      (t.currentVideoDuration * e) / n);
                },
                r = function (e) {
                  var o = t.getEventOffsetX(e, e.target.parentNode);
                  (n = NaN),
                    i(o),
                    t.contolProgressbarUpdate(t.videoPlayerId),
                    t.controlDurationUpdate(t.videoPlayerId);
                },
                a = function e(a) {
                  document.removeEventListener("mousemove", r),
                    document.removeEventListener("touchmove", r),
                    document.removeEventListener("mouseup", e),
                    document.removeEventListener("touchend", e);
                  var l = t.getEventOffsetX(a, a.target.parentNode);
                  isNaN(l) && !isNaN(n) && (l = n),
                    isNaN(l) || i(l),
                    o || t.play(),
                    t.initialAnimationSet &&
                      setTimeout(function () {
                        t.displayOptions.layoutControls.playPauseAnimation =
                          t.initialAnimationSet;
                      }, 200),
                    (t.fluidPseudoPause = !1);
                };
              document.addEventListener("mouseup", a),
                document.addEventListener("touchend", a),
                document.addEventListener("mousemove", r),
                document.addEventListener("touchmove", r);
            }
          }),
          (t.onVolumeBarMouseDown = function () {
            var e = function (e) {
                var n = t.domRef.controls.volumeContainer.clientWidth;
                if (n) {
                  var o = e / n;
                  o < 0.05
                    ? ((o = 0), (t.domRef.player.muted = !0))
                    : o > 0.95 && (o = 1),
                    t.domRef.player.muted &&
                      o > 0 &&
                      (t.domRef.player.muted = !1),
                    t.setVolume(o);
                }
              },
              n = function (n) {
                var o = t.getEventOffsetX(n, t.domRef.controls.volumeContainer);
                e(o);
              },
              o = function o(i) {
                document.removeEventListener("mousemove", n),
                  document.removeEventListener("touchmove", n),
                  document.removeEventListener("mouseup", o),
                  document.removeEventListener("touchend", o);
                var r = t.getEventOffsetX(i, t.domRef.controls.volumeContainer);
                isNaN(r) || e(r);
              };
            document.addEventListener("mouseup", o),
              document.addEventListener("touchend", o),
              document.addEventListener("mousemove", n),
              document.addEventListener("touchmove", n);
          }),
          (t.findRoll = function (e) {
            var n = [];
            if (((n.length = 0), e && t.hasOwnProperty("adList"))) {
              for (var o in t.adList)
                t.adList.hasOwnProperty(o) &&
                  t.adList[o].roll === e &&
                  n.push(o);
              return n;
            }
          }),
          (t.onKeyboardVolumeChange = function (e) {
            var n = t.domRef.player.volume;
            "asc" === e ? (n += 0.05) : "desc" === e && (n -= 0.05),
              n < 0.05 ? (n = 0) : n > 0.95 && (n = 1),
              t.setVolume(n);
          }),
          (t.onKeyboardSeekPosition = function (e) {
            t.isCurrentlyPlayingAd ||
              (t.domRef.player.currentTime = t.getNewCurrentTimeValueByKeyCode(
                e,
                t.domRef.player.currentTime,
                t.domRef.player.duration
              ));
          }),
          (t.getNewCurrentTimeValueByKeyCode = function (e, t, n) {
            var o = t;
            switch (e) {
              case 37:
                o = (o -= 5) < 5 ? 0 : o;
                break;
              case 39:
                o = (o += 5) > n - 5 ? n : o;
                break;
              case 35:
                o = n;
                break;
              case 36:
                o = 0;
                break;
              case 48:
              case 49:
              case 50:
              case 51:
              case 52:
              case 53:
              case 54:
              case 55:
              case 56:
              case 57:
                if (e < 58 && e > 47) o = (n * (10 * (e - 48))) / 100;
            }
            return o;
          }),
          (t.handleMouseleave = function (e) {
            (void 0 !== e.clientX &&
              t.domRef.wrapper.contains(
                document.elementFromPoint(e.clientX, e.clientY)
              )) ||
              (t.hideControlBar(), t.hideTitle());
          }),
          (t.handleMouseenterForKeyboard = function () {
            t.captureKey ||
              ((t.captureKey = function (e) {
                e.stopPropagation();
                var n = e.keyCode;
                switch (n) {
                  case 70:
                    t.fullscreenToggle(), e.preventDefault();
                    break;
                  case 13:
                  case 32:
                    t.playPauseToggle(), e.preventDefault();
                    break;
                  case 77:
                    t.muteToggle(), e.preventDefault();
                    break;
                  case 38:
                    t.onKeyboardVolumeChange("asc"), e.preventDefault();
                    break;
                  case 40:
                    t.onKeyboardVolumeChange("desc"), e.preventDefault();
                    break;
                  case 37:
                  case 39:
                  case 35:
                  case 36:
                  case 48:
                  case 49:
                  case 50:
                  case 51:
                  case 52:
                  case 53:
                  case 54:
                  case 55:
                  case 56:
                  case 57:
                    t.onKeyboardSeekPosition(n), e.preventDefault();
                }
                return !1;
              }),
              document.addEventListener("keydown", t.captureKey, !0));
          }),
          (t.keyboardControl = function () {
            t.domRef.wrapper.addEventListener(
              "click",
              t.handleMouseenterForKeyboard,
              !1
            );
            var e = t.handleWindowClick.bind(t);
            t.destructors.push(function () {
              window.removeEventListener("click", e);
            }),
              window.addEventListener("click", e);
          }),
          (t.handleWindowClick = function (e) {
            t.domRef.wrapper
              ? t.domRef.wrapper.contains(e.target) ||
                e.target.id === "skipHref_" + t.videoPlayerId ||
                (document.removeEventListener("keydown", t.captureKey, !0),
                delete t.captureKey,
                t.theatreMode && !t.theatreModeAdvanced && t.theatreToggle())
              : console.warn(
                  "Dangling click event listener should be collected for unknown wrapper " +
                    t.videoPlayerId +
                    ". Did you forget to call destroy on player instance?"
                );
          }),
          (t.initialPlay = function () {
            if (
              (t.domRef.player.addEventListener("playing", function () {
                t.toggleLoader(!1);
              }),
              t.domRef.player.addEventListener("timeupdate", function () {
                t.toggleLoader(!1);
              }),
              t.domRef.player.addEventListener("waiting", function () {
                t.toggleLoader(!0);
              }),
              !t.displayOptions.layoutControls.playButtonShowing)
            ) {
              document
                .getElementById(t.videoPlayerId + "_fluid_controls_container")
                .classList.remove("initial_controls_show");
              var e = document.getElementById(t.videoPlayerId + "_logo");
              e && e.classList.remove("initial_controls_show");
            }
            t.firstPlayLaunched ||
              (t.playPauseToggle(),
              t.domRef.player.removeEventListener("play", t.initialPlay));
          }),
          (t.playPauseToggle = function () {
            var e = !t.firstPlayLaunched,
              n = t.findRoll("preRoll");
            if (e && 0 !== n.length) {
              t.isCurrentlyPlayingAd = !0;
              var o = t.getBrowserVersion(),
                i =
                  !1 !== t.mobileInfo.userOs &&
                  "Android" === t.mobileInfo.userOs &&
                  "Google Chrome" === o.browserName;
              ("Safari" === o.browserName || i) &&
                ((t.domRef.player.src =
                  "https://cdn.fluidplayer.com/static/blank.mp4"),
                t.domRef.player.play(),
                t.playPauseAnimationToggle(!0)),
                (t.firstPlayLaunched = !0),
                t.prepareVast("preRoll"),
                (t.preRollAdPodsLength = n.length);
            } else
              e &&
                0 === n.length &&
                ((t.firstPlayLaunched = !0),
                t.displayOptions.vastOptions.vastAdvanced.noVastVideoCallback()),
                t.domRef.player.paused
                  ? (t.isCurrentlyPlayingAd &&
                    null !== t.vastOptions &&
                    t.vastOptions.vpaid
                      ? t.resumeVpaidAd()
                      : (Math.floor(t.currentVideoDuration) ===
                          Math.floor(t.domRef.player.currentTime) &&
                          (t.initialiseStreamers(),
                          (t.domRef.player.currentTime = 0)),
                        t.dashPlayer
                          ? t.dashPlayer.play()
                          : t.domRef.player.play()),
                    t.playPauseAnimationToggle(!0))
                  : e ||
                    (t.isCurrentlyPlayingAd &&
                    null !== t.vastOptions &&
                    t.vastOptions.vpaid
                      ? t.pauseVpaidAd()
                      : t.domRef.player.pause(),
                    t.playPauseAnimationToggle(!1)),
                t.toggleOnPauseAd();
            var r = function () {
              t.prepareVast("onPauseRoll"),
                t.prepareVast("postRoll"),
                t.prepareVast("midRoll");
            };
            if (e) {
              var a = document.getElementById(
                t.videoPlayerId + "_fluid_pseudo_poster"
              );
              a && a.parentNode.removeChild(a),
                t.mainVideoDuration > 0
                  ? r()
                  : t.domRef.player.addEventListener("mainVideoDurationSet", r);
            }
            t.adTimer();
            var l = document.getElementById(
              t.videoPlayerId + "_fluid_html_on_pause"
            );
            l &&
              !t.isCurrentlyPlayingAd &&
              (t.domRef.player.paused
                ? (l.style.display = "flex")
                : (l.style.display = "none"));
          }),
          (t.setCustomControls = function () {
            t.trackEvent(
              t.domRef.player.parentNode,
              "click",
              ".fluid_control_playpause",
              function () {
                t.firstPlayLaunched ||
                  t.domRef.player.removeEventListener("play", t.initialPlay),
                  t.playPauseToggle();
              },
              !1
            ),
              t.domRef.player.addEventListener(
                "play",
                function () {
                  t.controlPlayPauseToggle(), t.contolVolumebarUpdate();
                },
                !1
              ),
              t.domRef.player.addEventListener(
                "fluidplayerpause",
                function () {
                  t.controlPlayPauseToggle();
                },
                !1
              ),
              t.domRef.player.addEventListener("timeupdate", function () {
                t.contolProgressbarUpdate(), t.controlDurationUpdate();
              });
            var e = t.getMobileOs().userOs ? "touchstart" : "mousedown";
            t.displayOptions.layoutControls.showCardBoardView
              ? t.trackEvent(
                  t.domRef.player.parentNode,
                  e,
                  ".fluid_controls_progress_container",
                  function (e) {
                    return t.onProgressbarMouseDown(e);
                  },
                  !1
                )
              : document
                  .getElementById(
                    t.videoPlayerId + "_fluid_controls_progress_container"
                  )
                  .addEventListener(
                    e,
                    function (e) {
                      return t.onProgressbarMouseDown(e);
                    },
                    !1
                  ),
              document
                .getElementById(
                  t.videoPlayerId + "_fluid_control_volume_container"
                )
                .addEventListener(
                  e,
                  function (e) {
                    return t.onVolumeBarMouseDown();
                  },
                  !1
                ),
              t.domRef.player.addEventListener("volumechange", function () {
                return t.contolVolumebarUpdate();
              }),
              t.trackEvent(
                t.domRef.player.parentNode,
                "click",
                ".fluid_control_mute",
                function () {
                  return t.muteToggle();
                }
              ),
              t.setBuffering(),
              t.trackEvent(
                t.domRef.player.parentNode,
                "click",
                ".fluid_control_fullscreen",
                function () {
                  return t.fullscreenToggle();
                }
              ),
              t.displayOptions.layoutControls.allowTheatre && !t.isInIframe
                ? ((document.getElementById(
                    t.videoPlayerId + "_fluid_control_theatre"
                  ).style.display = "inline-block"),
                  t.trackEvent(
                    t.domRef.player.parentNode,
                    "click",
                    ".fluid_control_theatre",
                    function () {
                      return t.theatreToggle();
                    }
                  ))
                : (document.getElementById(
                    t.videoPlayerId + "_fluid_control_theatre"
                  ).style.display = "none"),
              t.domRef.player.addEventListener("ratechange", function () {
                t.isCurrentlyPlayingAd && (t.playbackRate = 1);
              });
          }),
          (t.createTimePositionPreview = function () {
            if (t.showTimeOnHover) {
              var e = document.getElementById(
                  t.videoPlayerId + "_fluid_controls_progress_container"
                ),
                n = document.createElement("div");
              (n.id = t.videoPlayerId + "_fluid_timeline_preview"),
                (n.className = "fluid_timeline_preview"),
                (n.style.display = "none"),
                (n.style.position = "absolute"),
                e.appendChild(n),
                document
                  .getElementById(
                    t.videoPlayerId + "_fluid_controls_progress_container"
                  )
                  .addEventListener(
                    "mousemove",
                    function (e) {
                      var n = document.getElementById(
                          t.videoPlayerId + "_fluid_controls_progress_container"
                        ),
                        o = n.clientWidth,
                        i = document.getElementById(
                          t.videoPlayerId + "_fluid_timeline_preview"
                        ),
                        r = t.getEventOffsetX(e, n),
                        a = (t.currentVideoDuration * r) / o;
                      (i.innerText = t.formatTime(a)),
                        (i.style.display = "block"),
                        (i.style.left =
                          (a / t.domRef.player.duration) * 100 + "%");
                    },
                    !1
                  ),
                document
                  .getElementById(
                    t.videoPlayerId + "_fluid_controls_progress_container"
                  )
                  .addEventListener(
                    "mouseout",
                    function () {
                      document.getElementById(
                        t.videoPlayerId + "_fluid_timeline_preview"
                      ).style.display = "none";
                    },
                    !1
                  );
            }
          }),
          (t.setCustomContextMenu = function () {
            var e = t.domRef.wrapper,
              n = t.displayOptions.layoutControls.contextMenu.controls,
              o = t.displayOptions.layoutControls.contextMenu.links,
              i = document.createElement("div");
            (i.id = t.videoPlayerId + "_fluid_context_menu"),
              (i.className = "fluid_context_menu"),
              (i.style.display = "none"),
              (i.style.position = "absolute");
            var r = document.createElement("ul");
            if (
              (i.appendChild(r),
              Array.isArray(o) &&
                o.forEach(function (e, n) {
                  var o = document.createElement("li");
                  (o.id = t.videoPlayerId + "_extra_link_" + n),
                    (o.innerHTML = e.label),
                    o.addEventListener(
                      "click",
                      function () {
                        return window.open(e.href, "_blank");
                      },
                      !1
                    ),
                    r.appendChild(o);
                }),
              n)
            ) {
              var a = document.createElement("li");
              (a.id = t.videoPlayerId + "context_option_play"),
                (a.innerHTML = t.displayOptions.captions.play),
                a.addEventListener(
                  "click",
                  function () {
                    return t.playPauseToggle();
                  },
                  !1
                ),
                r.appendChild(a);
              var l = document.createElement("li");
              (l.id = t.videoPlayerId + "context_option_mute"),
                (l.innerHTML = t.displayOptions.captions.mute),
                l.addEventListener(
                  "click",
                  function () {
                    return t.muteToggle();
                  },
                  !1
                ),
                r.appendChild(l);
              var d = document.createElement("li");
              (d.id = t.videoPlayerId + "context_option_fullscreen"),
                (d.innerHTML = t.displayOptions.captions.fullscreen),
                d.addEventListener(
                  "click",
                  function () {
                    return t.fullscreenToggle();
                  },
                  !1
                ),
                r.appendChild(d);
            }
            var s = document.createElement("li");
            (s.id = t.videoPlayerId + "context_option_homepage"),
              (s.innerHTML = "Fluid Player " + t.version),
              s.addEventListener(
                "click",
                function () {
                  return window.open(t.homepage, "_blank");
                },
                !1
              ),
              r.appendChild(s),
              t.domRef.player.parentNode.insertBefore(
                i,
                t.domRef.player.nextSibling
              ),
              e.addEventListener(
                "contextmenu",
                function (e) {
                  e.preventDefault(),
                    (i.style.left =
                      t.getEventOffsetX(e, t.domRef.player) + "px"),
                    (i.style.top =
                      t.getEventOffsetY(e, t.domRef.player) + "px"),
                    (i.style.display = "block");
                },
                !1
              ),
              document.addEventListener(
                "click",
                function (e) {
                  (e.target === t.domRef.player && 2 === e.button) ||
                    (i.style.display = "none");
                },
                !1
              );
          }),
          (t.setDefaultLayout = function () {
            (t.domRef.wrapper.className +=
              " fluid_player_layout_" + t.displayOptions.layoutControls.layout),
              t.setCustomContextMenu();
            var e = t.generateCustomControlTags({
              displayVolumeBar: t.checkShouldDisplayVolumeBar(),
              primaryColor: t.displayOptions.layoutControls.primaryColor
                ? t.displayOptions.layoutControls.primaryColor
                : "red",
              controlForwardBackward:
                !!t.displayOptions.layoutControls.controlForwardBackward.show,
            });
            t.domRef.player.removeAttribute("controls"),
              t.domRef.player.parentNode.insertBefore(
                e.root,
                t.domRef.player.nextSibling
              ),
              t.domRef.player.parentNode.insertBefore(
                e.loader,
                t.domRef.player.nextSibling
              ),
              (t.domRef.controls = e);
            var n = 100,
              o = setInterval(function () {
                n
                  ? t.checkIfVolumebarIsRendered()
                    ? (clearInterval(o),
                      t.contolVolumebarUpdate(t.videoPlayerId))
                    : n--
                  : clearInterval(o);
              }, 100);
            t.displayOptions.layoutControls.doubleclickFullscreen &&
              t.domRef.player.addEventListener("dblclick", t.fullscreenToggle),
              t.initHtmlOnPauseBlock(),
              t.setCustomControls(),
              t.setupThumbnailPreview(),
              t.createTimePositionPreview(),
              t.posterImage(),
              t.initPlayButton(),
              t.setVideoPreload(),
              t.createPlaybackList(),
              t.createDownload(),
              t.displayOptions.layoutControls.controlForwardBackward.show &&
                t.initSkipControls();
          }),
          (t.initSkipControls = function () {
            var n = function (e) {
              if (!t.isCurrentlyPlayingAd) {
                var n = t.domRef.player.currentTime + e;
                n < 0 && (n = 0), (t.domRef.player.currentTime = n);
              }
            };
            t.domRef.controls.skipBack.addEventListener(
              "click",
              n.bind(e, -10)
            ),
              t.domRef.controls.skipForward.addEventListener(
                "click",
                n.bind(e, 10)
              );
          }),
          (t.checkIfVolumebarIsRendered = function () {
            var e = document.getElementById(
                t.videoPlayerId + "_fluid_control_volume_currentpos"
              ),
              n = document.getElementById(
                t.videoPlayerId + "_fluid_control_volume"
              ).clientWidth;
            return e.clientWidth !== n;
          }),
          (t.setLayout = function () {
            var e = t.isTouchDevice() ? "touchend" : "click";
            t.domRef.player.addEventListener(
              e,
              function () {
                return t.playPauseToggle();
              },
              !1
            ),
              t.domRef.player.addEventListener("play", t.initialPlay, !1),
              t.setDefaultLayout();
          }),
          (t.handleFullscreen = function () {
            void 0 === document.vastFullsreenChangeEventListenersAdded &&
              ([
                "fullscreenchange",
                "webkitfullscreenchange",
                "mozfullscreenchange",
                "msfullscreenchange",
              ].forEach(function (e) {
                "object" === a(document["on" + e]) &&
                  document.addEventListener(
                    e,
                    function (e) {
                      t.recalculateAdDimensions();
                    },
                    !1
                  );
              }),
              (document.vastFullsreenChangeEventListenersAdded = !0));
          }),
          (t.setupPlayerWrapper = function () {
            var e = document.createElement("div");
            return (
              (e.id = "fluid_video_wrapper_" + t.videoPlayerId),
              (e.className = t.isTouchDevice()
                ? "fluid_video_wrapper mobile"
                : "fluid_video_wrapper"),
              t.displayOptions.layoutControls.fillToContainer
                ? ((e.style.width = "100%"), (e.style.height = "100%"))
                : ((e.style.height = t.domRef.player.clientHeight + "px"),
                  (e.style.width = t.domRef.player.clientWidth + "px")),
              (t.domRef.player.style.height = "100%"),
              (t.domRef.player.style.width = "100%"),
              t.domRef.player.parentNode.insertBefore(e, t.domRef.player),
              e.appendChild(t.domRef.player),
              e
            );
          }),
          (t.onErrorDetection = function () {
            t.domRef.player.networkState ===
              t.domRef.player.NETWORK_NO_SOURCE &&
              t.isCurrentlyPlayingAd &&
              t.playMainVideoWhenVastFails(401);
          }),
          (t.createVideoSourceSwitch = function () {
            var e = [],
              n = t.domRef.player.querySelectorAll("source");
            if (
              ([].forEach.call(n, function (t) {
                t.title &&
                  t.src &&
                  e.push({
                    title: t.title,
                    url: t.src,
                    isHD: null != t.getAttribute("data-fluid-hd"),
                  });
              }),
              (t.videoSources = e),
              !(t.videoSources.length <= 1))
            ) {
              var o = document.getElementById(
                t.videoPlayerId + "_fluid_control_video_source"
              );
              o.style.display = "inline-block";
              var i = !1,
                r = document.createElement("div");
              (r.id = t.videoPlayerId + "_fluid_control_video_source_list"),
                (r.className = "fluid_video_sources_list"),
                (r.style.display = "none");
              var a,
                d = !0,
                s = l(t.videoSources);
              try {
                for (s.s(); !(a = s.n()).done; ) {
                  var u = a.value,
                    c = u.url.split(".").pop();
                  if ("iOS" !== t.mobileInfo.userOs || "mkv" !== c) {
                    var p = d ? "source_selected" : "",
                      f = u.isHD
                        ? '<sup style="color:' +
                          t.displayOptions.layoutControls.primaryColor +
                          '" class="fp_hd_source"></sup>'
                        : "";
                    d = !1;
                    var _ = document.createElement("div");
                    (_.id = "source_" + t.videoPlayerId + "_" + u.title),
                      (_.className = "fluid_video_source_list_item"),
                      (_.innerHTML =
                        '<span class="source_button_icon ' +
                        p +
                        '"></span>' +
                        u.title +
                        f),
                      _.addEventListener("click", function (e) {
                        e.stopPropagation(),
                          (t.domRef.player.style.width =
                            t.domRef.player.clientWidth + "px"),
                          (t.domRef.player.style.height =
                            t.domRef.player.clientHeight + "px");
                        for (
                          var n = this,
                            o =
                              document.getElementsByClassName(
                                "source_button_icon"
                              ),
                            i = 0;
                          i < o.length;
                          i++
                        )
                          o[i].className = o[i].className.replace(
                            "source_selected",
                            ""
                          );
                        (n.firstChild.className += " source_selected"),
                          t.videoSources.forEach(function (e) {
                            e.title ===
                              n.innerText.replace(/(\r\n\t|\n|\r\t)/gm, "") &&
                              (t.setBuffering(),
                              t.setVideoSource(e.url),
                              (t.fluidStorage.fluidQuality = e.title));
                          }),
                          t.openCloseVideoSourceSwitch();
                      }),
                      r.appendChild(_),
                      (i = !0);
                  }
                }
              } catch (e) {
                s.e(e);
              } finally {
                s.f();
              }
              i
                ? (o.appendChild(r),
                  o.addEventListener("click", function () {
                    t.openCloseVideoSourceSwitch();
                  }))
                : (document.getElementById(
                    t.videoPlayerId + "_fluid_control_video_source"
                  ).style.display = "none");
            }
          }),
          (t.openCloseVideoSourceSwitch = function () {
            var e = document.getElementById(
              t.videoPlayerId + "_fluid_control_video_source_list"
            );
            if (t.isCurrentlyPlayingAd) e.style.display = "none";
            else if ("none" === e.style.display) {
              e.style.display = "block";
              e.addEventListener("mouseleave", function t() {
                e.removeEventListener("mouseleave", t),
                  (e.style.display = "none");
              });
            } else e.style.display = "none";
          }),
          (t.setVideoSource = function (e) {
            if ("iOS" === t.mobileInfo.userOs && e.indexOf(".mkv") > 0)
              return (
                console.log(
                  "[FP_ERROR] .mkv files not supported by iOS devices."
                ),
                !1
              );
            if (t.isCurrentlyPlayingAd) t.originalSrc = e;
            else {
              t.isSwitchingSource = !0;
              var n = !1;
              t.domRef.player.paused || (t.domRef.player.pause(), (n = !0));
              var o = t.domRef.player.currentTime;
              t.setCurrentTimeAndPlay(o, n),
                (t.domRef.player.src = e),
                (t.originalSrc = e),
                (t.displayOptions.layoutControls.mediaType =
                  t.getCurrentSrcType()),
                t.initialiseStreamers();
            }
          }),
          (t.setCurrentTimeAndPlay = function (e, n) {
            var o = function n() {
              (t.currentTime = e),
                t.domRef.player.removeEventListener("playing", n);
            };
            t.domRef.player.addEventListener(
              "loadedmetadata",
              function i() {
                (t.domRef.player.currentTime = e),
                  t.domRef.player.removeEventListener("loadedmetadata", i),
                  ("iOS" !== t.mobileInfo.userOs &&
                    "safari" !==
                      t.getBrowserVersion().browserName.toLowerCase()) ||
                    t.domRef.player.addEventListener("playing", o),
                  n
                    ? t.domRef.player.play()
                    : (t.domRef.player.pause(),
                      t.controlPlayPauseToggle(t.videoPlayerId)),
                  (t.isSwitchingSource = !1),
                  (t.domRef.player.style.width = "100%"),
                  (t.domRef.player.style.height = "100%");
              },
              !1
            ),
              t.domRef.player.load();
          }),
          (t.initTitle = function () {
            if (t.displayOptions.layoutControls.title) {
              var e = document.createElement("div");
              (e.id = t.videoPlayerId + "_title"),
                t.domRef.player.parentNode.insertBefore(e, null),
                (e.innerHTML += t.displayOptions.layoutControls.title),
                e.classList.add("fp_title");
            }
          }),
          (t.hasTitle = function () {
            var e = document.getElementById(t.videoPlayerId + "_title"),
              n = t.displayOptions.layoutControls.title;
            return e && null != n;
          }),
          (t.hideTitle = function () {
            var e = document.getElementById(t.videoPlayerId + "_title");
            t.hasTitle() && e.classList.add("fade_out");
          }),
          (t.showTitle = function () {
            var e = document.getElementById(t.videoPlayerId + "_title");
            t.hasTitle() && e.classList.remove("fade_out");
          }),
          (t.initLogo = function () {
            if (t.displayOptions.layoutControls.logo.imageUrl) {
              var e = document.createElement("div");
              (e.id = t.videoPlayerId + "_logo"),
                t.displayOptions.layoutControls.logo.hideWithControls
                  ? e.classList.add("initial_controls_show", "fp_logo")
                  : e.classList.add("logo_maintain_display");
              var n = document.createElement("img");
              (n.id = t.videoPlayerId + "_logo_image"),
                t.displayOptions.layoutControls.logo.imageUrl &&
                  (n.src = t.displayOptions.layoutControls.logo.imageUrl),
                (n.style.position = "absolute"),
                (n.style.margin =
                  t.displayOptions.layoutControls.logo.imageMargin);
              var o =
                t.displayOptions.layoutControls.logo.position.toLowerCase();
              -1 !== o.indexOf("bottom")
                ? (n.style.bottom = 0)
                : (n.style.top = 0),
                -1 !== o.indexOf("right")
                  ? (n.style.right = 0)
                  : (n.style.left = 0),
                t.displayOptions.layoutControls.logo.opacity &&
                  (n.style.opacity =
                    t.displayOptions.layoutControls.logo.opacity),
                null !== t.displayOptions.layoutControls.logo.clickUrl &&
                  ((n.style.cursor = "pointer"),
                  n.addEventListener("click", function () {
                    window
                      .open(
                        t.displayOptions.layoutControls.logo.clickUrl,
                        "_blank"
                      )
                      .focus();
                  })),
                t.displayOptions.layoutControls.logo.mouseOverImageUrl &&
                  (n.addEventListener(
                    "mouseover",
                    function () {
                      n.src =
                        t.displayOptions.layoutControls.logo.mouseOverImageUrl;
                    },
                    !1
                  ),
                  n.addEventListener(
                    "mouseout",
                    function () {
                      n.src = t.displayOptions.layoutControls.logo.imageUrl;
                    },
                    !1
                  )),
                t.domRef.player.parentNode.insertBefore(e, null),
                e.appendChild(n, null);
            }
          }),
          (t.initHtmlOnPauseBlock = function () {
            if (
              !t.hasValidOnPauseAd() &&
              t.displayOptions.layoutControls.htmlOnPauseBlock.html
            ) {
              var e = document.createElement("div");
              (e.id = t.videoPlayerId + "_fluid_html_on_pause"),
                (e.className = "fluid_html_on_pause"),
                (e.style.display = "none"),
                (e.innerHTML =
                  t.displayOptions.layoutControls.htmlOnPauseBlock.html),
                (e.onclick = function (e) {
                  t.playPauseToggle();
                }),
                t.displayOptions.layoutControls.htmlOnPauseBlock.width &&
                  (e.style.width =
                    t.displayOptions.layoutControls.htmlOnPauseBlock.width +
                    "px"),
                t.displayOptions.layoutControls.htmlOnPauseBlock.height &&
                  (e.style.height =
                    t.displayOptions.layoutControls.htmlOnPauseBlock.height +
                    "px"),
                t.domRef.player.parentNode.insertBefore(e, null);
            }
          }),
          (t.initPlayButton = function () {
            var e = document.createElement("div");
            (e.id = t.videoPlayerId + "_fluid_initial_play_button"),
              (e.className = "fluid_html_on_pause");
            var n = t.displayOptions.layoutControls.primaryColor
              ? t.displayOptions.layoutControls.primaryColor
              : "#333333";
            e.innerHTML =
              '<div id="' +
              t.videoPlayerId +
              '_fluid_initial_play" class="fluid_initial_play" style="background-color:' +
              n +
              '"><div id="' +
              t.videoPlayerId +
              '_fluid_state_button" class="fluid_initial_play_button"></div></div>';
            (e.addEventListener("click", function n() {
              t.playPauseToggle(), e.removeEventListener("click", n);
            }),
            t.displayOptions.layoutControls.playButtonShowing) ||
              (document
                .getElementById(t.videoPlayerId + "_fluid_controls_container")
                .classList.add("initial_controls_show"),
              (e.style.opacity = "0"));
            t.domRef.player.parentNode.insertBefore(e, null);
          }),
          (t.mainVideoReady = function () {
            if (
              0 === t.mainVideoDuration &&
              !t.isCurrentlyPlayingAd &&
              !1 === t.mainVideoReadyState
            ) {
              var e = new CustomEvent("mainVideoDurationSet");
              (t.mainVideoDuration = t.domRef.player.duration),
                (t.mainVideoReadyState = !0),
                t.domRef.player.dispatchEvent(e),
                t.domRef.player.removeEventListener(
                  "loadedmetadata",
                  t.mainVideoReady
                );
            }
          }),
          (t.userActivityChecker = function () {
            var e = t.domRef.wrapper;
            t.newActivity = null;
            var n = !1,
              o = function (e) {
                ("touchstart" !== e.type && "mousedown" !== e.type) || (n = !0),
                  ("touchend" !== e.type && "mouseup" !== e.type) || (n = !1),
                  (t.newActivity = !0);
              };
            setInterval(function () {
              if (!0 === t.newActivity) {
                if (
                  (n || t.isLoading || (t.newActivity = !1),
                  !1 === t.isUserActive || !t.isControlBarVisible())
                ) {
                  var e = new CustomEvent("userActive");
                  t.domRef.player.dispatchEvent(e), (t.isUserActive = !0);
                }
                clearTimeout(t.inactivityTimeout),
                  (t.inactivityTimeout = setTimeout(function () {
                    if (!0 !== t.newActivity) {
                      t.isUserActive = !1;
                      var e = new CustomEvent("userInactive");
                      t.domRef.player.dispatchEvent(e);
                    } else clearTimeout(t.inactivityTimeout);
                  }, 1e3 *
                    t.displayOptions.layoutControls.controlBar
                      .autoHideTimeout));
              }
            }, 300);
            for (
              var i = t.isTouchDevice()
                  ? ["touchstart", "touchmove", "touchend"]
                  : ["mousemove", "mousedown", "mouseup"],
                r = 0;
              r < i.length;
              r++
            )
              e.addEventListener(i[r], o);
          }),
          (t.hasControlBar = function () {
            return !!document.getElementById(
              t.videoPlayerId + "_fluid_controls_container"
            );
          }),
          (t.isControlBarVisible = function () {
            if (!1 === t.hasControlBar()) return !1;
            var e = document.getElementById(
                t.videoPlayerId + "_fluid_controls_container"
              ),
              n = window.getComputedStyle(e, null);
            return !(0 === n.opacity || "hidden" === n.visibility);
          }),
          (t.setVideoPreload = function () {
            t.domRef.player.setAttribute(
              "preload",
              t.displayOptions.layoutControls.preload
            );
          }),
          (t.hideControlBar = function () {
            if (
              (t.isCurrentlyPlayingAd &&
                !t.domRef.player.paused &&
                t.toggleAdCountdown(!0),
              (t.domRef.player.style.cursor = "none"),
              t.hasControlBar())
            ) {
              for (
                var e = t.domRef.player.parentNode.getElementsByClassName(
                    "fluid_controls_container"
                  ),
                  n =
                    t.domRef.player.parentNode.getElementsByClassName(
                      "fp_logo"
                    ),
                  o = 0;
                o < e.length;
                o++
              )
                t.displayOptions.layoutControls.controlBar.animated
                  ? (e[o].classList.remove("fade_in"),
                    e[o].classList.add("fade_out"))
                  : (e[o].style.display = "none");
              if (t.displayOptions.layoutControls.logo.hideWithControls)
                for (var i = 0; i < n.length; i++)
                  t.displayOptions.layoutControls.controlBar.animated
                    ? n[i] &&
                      (n[i].classList.remove("fade_in"),
                      n[i].classList.add("fade_out"))
                    : n[i] && (n[i].style.display = "none");
            }
          }),
          (t.showControlBar = function (e) {
            if (
              (t.isCurrentlyPlayingAd &&
                !t.domRef.player.paused &&
                t.toggleAdCountdown(!1),
              "mouseenter" === e.type &&
                (t.domRef.player.style.cursor = "default"),
              t.hasControlBar())
            ) {
              for (
                var n = t.domRef.player.parentNode.getElementsByClassName(
                    "fluid_controls_container"
                  ),
                  o =
                    t.domRef.player.parentNode.getElementsByClassName(
                      "fp_logo"
                    ),
                  i = 0;
                i < n.length;
                i++
              )
                t.displayOptions.layoutControls.controlBar.animated
                  ? (n[i].classList.remove("fade_out"),
                    n[i].classList.add("fade_in"))
                  : (n[i].style.display = "block");
              if (t.displayOptions.layoutControls.logo.hideWithControls)
                for (var r = 0; r < o.length; r++)
                  t.displayOptions.layoutControls.controlBar.animated
                    ? o[r] &&
                      (o[r].classList.remove("fade_out"),
                      o[r].classList.add("fade_in"))
                    : o[r] && (o[r].style.display = "block");
            }
          }),
          (t.linkControlBarUserActivity = function () {
            t.domRef.player.addEventListener("userInactive", t.hideControlBar),
              t.domRef.player.addEventListener("userInactive", t.hideTitle),
              t.domRef.player.addEventListener("userActive", t.showControlBar),
              t.domRef.player.addEventListener("userActive", t.showTitle);
          }),
          (t.initMute = function () {
            !0 === t.displayOptions.layoutControls.mute &&
              (t.domRef.player.volume = 0);
          }),
          (t.initLoop = function () {
            t.domRef.player.loop = !!t.displayOptions.layoutControls.loop;
          }),
          (t.setBuffering = function () {
            for (
              var e,
                n = t.domRef.player.parentNode.getElementsByClassName(
                  "fluid_controls_buffered"
                ),
                o = 0;
              o < n.length;
              o++
            )
              n[o].style.width = 0;
            e = setInterval(function () {
              var o = t.domRef.player.duration;
              if (!(o <= 0))
                for (var i = 0; i < t.domRef.player.buffered.length; i++)
                  if (
                    !(
                      t.domRef.player.buffered.start(
                        t.domRef.player.buffered.length - 1 - i
                      ) >= t.domRef.player.currentTime
                    )
                  ) {
                    for (
                      var r =
                          (t.domRef.player.buffered.end(
                            t.domRef.player.buffered.length - 1 - i
                          ) /
                            o) *
                            100 +
                          "%",
                        a = 0;
                      a < n.length;
                      a++
                    )
                      n[a].style.width = r;
                    e &&
                      1 ==
                        t.domRef.player.buffered.end(
                          t.domRef.player.buffered.length - 1 - i
                        ) /
                          o &&
                      clearInterval(e);
                    break;
                  }
            }, 500);
          }),
          (t.createPlaybackList = function () {
            if (t.displayOptions.layoutControls.playbackRateEnabled) {
              document.getElementById(
                t.videoPlayerId + "_fluid_control_playback_rate"
              ).style.display = "inline-block";
              var e = document.getElementById(
                  t.videoPlayerId + "_fluid_control_playback_rate"
                ),
                n = document.createElement("div");
              (n.id = t.videoPlayerId + "_fluid_control_video_playback_rate"),
                (n.className = "fluid_video_playback_rates"),
                (n.style.display = "none"),
                ["x2", "x1.5", "x1", "x0.5"].forEach(function (e) {
                  var o = document.createElement("div");
                  (o.className = "fluid_video_playback_rates_item"),
                    (o.innerText = e),
                    o.addEventListener("click", function (e) {
                      e.stopPropagation();
                      var n = this.innerText.replace("x", "");
                      t.setPlaybackSpeed(n), t.openCloseVideoPlaybackRate();
                    }),
                    n.appendChild(o);
                }),
                e.appendChild(n),
                e.addEventListener("click", function () {
                  t.openCloseVideoPlaybackRate();
                });
            }
          }),
          (t.openCloseVideoPlaybackRate = function () {
            var e = document.getElementById(
              t.videoPlayerId + "_fluid_control_video_playback_rate"
            );
            if (t.isCurrentlyPlayingAd || "none" !== e.style.display)
              e.style.display = "none";
            else {
              e.style.display = "block";
              e.addEventListener("mouseleave", function t() {
                e.removeEventListener("mouseleave", t),
                  (e.style.display = "none");
              });
            }
          }),
          (t.createDownload = function () {
            var e = document.getElementById(
              t.videoPlayerId + "_fluid_control_download"
            );
            if (t.displayOptions.layoutControls.allowDownload) {
              e.style.display = "inline-block";
              var n = document.createElement("a");
              (n.id = t.videoPlayerId + "_download"),
                (n.onclick = function (e) {
                  var t = this;
                  void 0 !== e.stopImmediatePropagation &&
                    e.stopImmediatePropagation(),
                    setInterval(function () {
                      (t.download = ""), (t.href = "");
                    }, 100);
                }),
                e.appendChild(n),
                e.addEventListener("click", function () {
                  var e = document.getElementById(
                    t.videoPlayerId + "_download"
                  );
                  (e.download = t.originalSrc),
                    (e.href = t.originalSrc),
                    n.click();
                });
            }
          }),
          (t.theatreToggle = function () {
            if (!t.isInIframe) {
              if (
                (t.fullscreenMode && t.fullscreenToggle(),
                t.displayOptions.layoutControls.theatreAdvanced)
              ) {
                var e = document.getElementById(
                    t.displayOptions.layoutControls.theatreAdvanced
                      .theatreElement
                  ),
                  n =
                    t.displayOptions.layoutControls.theatreAdvanced
                      .classToApply;
                null != e && null != n
                  ? (t.theatreMode ? e.classList.remove(n) : e.classList.add(n),
                    (t.theatreModeAdvanced = !t.theatreModeAdvanced))
                  : (console.log(
                      "[FP_ERROR] Theatre mode elements could not be found, defaulting behaviour."
                    ),
                    t.defaultTheatre());
              } else t.defaultTheatre();
              (t.theatreMode = !t.theatreMode),
                (t.fluidStorage.fluidTheatre = t.theatreMode);
              var o = t.theatreMode ? "theatreModeOn" : "theatreModeOff",
                i = document.createEvent("CustomEvent");
              i.initEvent(o, !1, !0),
                t.domRef.player.dispatchEvent(i),
                t.resizeVpaidAuto();
            }
          }),
          (t.defaultTheatre = function () {
            var e = document.getElementById(
              "fluid_video_wrapper_" + t.videoPlayerId
            );
            if (t.theatreMode)
              return (
                e.classList.remove("fluid_theatre_mode"),
                (e.style.maxHeight = ""),
                (e.style.marginTop = ""),
                (e.style.left = ""),
                (e.style.right = ""),
                (e.style.position = ""),
                void (t.displayOptions.layoutControls.fillToContainer
                  ? ((e.style.width = "100%"), (e.style.height = "100%"))
                  : ((e.style.width = t.originalWidth + "px"),
                    (e.style.height = t.originalHeight + "px")))
              );
            e.classList.add("fluid_theatre_mode");
            var n = t.displayOptions.layoutControls.theatreSettings.width,
              o = "10px";
            switch (
              ((e.style.width = n),
              (e.style.height =
                t.displayOptions.layoutControls.theatreSettings.height),
              (e.style.maxHeight = screen.height + "px"),
              (e.style.marginTop =
                t.displayOptions.layoutControls.theatreSettings.marginTop +
                "px"),
              t.displayOptions.layoutControls.theatreSettings.horizontalAlign)
            ) {
              case "center":
                "string" == typeof n && "%" === n.substr(n.length - 1)
                  ? (o =
                      (100 - parseInt(n.substring(0, n.length - 1))) / 2 + "%")
                  : "string" == typeof n && "px" === n.substr(n.length - 2)
                  ? (o =
                      (((screen.width -
                        parseInt(n.substring(0, n.length - 2))) /
                        screen.width) *
                        100) /
                        2 +
                      "%")
                  : console.log("[FP_ERROR] Theatre width specified invalid."),
                  (e.style.left = o);
                break;
              case "right":
                e.style.right = o;
                break;
              case "left":
              default:
                e.style.left = o;
            }
          }),
          (t.posterImage = function () {
            if (t.displayOptions.layoutControls.posterImage) {
              var e = document.createElement("div");
              (e.id = t.videoPlayerId + "_fluid_pseudo_poster"),
                (e.className = "fluid_pseudo_poster"),
                -1 !==
                ["auto", "contain", "cover"].indexOf(
                  t.displayOptions.layoutControls.posterImageSize
                )
                  ? ((e.style.background =
                      "url('" +
                      t.displayOptions.layoutControls.posterImage +
                      "') center center / " +
                      t.displayOptions.layoutControls.posterImageSize +
                      " no-repeat black"),
                    t.domRef.player.parentNode.insertBefore(e, null))
                  : console.log(
                      "[FP_ERROR] Not allowed value in posterImageSize"
                    );
            }
          }),
          (t.nextSource = function () {
            var e = t.domRef.player.getElementsByTagName("source");
            if (!e.length) return null;
            for (var n = 0; n < e.length - 1; n++)
              if (
                e[n].getAttribute("src") === t.originalSrc &&
                e[n + 1].getAttribute("src")
              )
                return void t.setVideoSource(e[n + 1].getAttribute("src"));
          }),
          (t.inIframe = function () {
            try {
              return window.self !== window.top;
            } catch (e) {
              return !0;
            }
          }),
          (t.setPersistentSettings = function () {
            if (
              "undefined" != typeof Storage &&
              "undefined" != typeof localStorage
            ) {
              var e = localStorage;
              try {
                e.setItem("_fp_storage_enabled", "1"),
                  e.removeItem("_fp_storage_enabled");
              } catch (e) {
                return !1;
              }
              if (
                ((t.fluidStorage = localStorage),
                void 0 !== t.fluidStorage.fluidVolume &&
                  t.displayOptions.layoutControls.persistentSettings.volume &&
                  (t.setVolume(t.fluidStorage.fluidVolume),
                  void 0 !== t.fluidStorage.fluidMute &&
                    "true" === t.fluidStorage.fluidMute &&
                    t.muteToggle()),
                void 0 !== t.fluidStorage.fluidQuality &&
                  t.displayOptions.layoutControls.persistentSettings.quality)
              ) {
                var n = document.getElementById(
                    "source_" +
                      t.videoPlayerId +
                      "_" +
                      t.fluidStorage.fluidQuality
                  ),
                  o = document.getElementById(
                    t.videoPlayerId + "_fluid_control_video_source"
                  );
                n && (n.click(), o.click());
              }
              void 0 !== t.fluidStorage.fluidSpeed &&
                t.displayOptions.layoutControls.persistentSettings.speed &&
                t.setPlaybackSpeed(t.fluidStorage.fluidSpeed),
                void 0 !== t.fluidStorage.fluidTheatre &&
                  "true" === t.fluidStorage.fluidTheatre &&
                  t.displayOptions.layoutControls.persistentSettings.theatre &&
                  t.theatreToggle();
            }
          }),
          (t.play = function () {
            if (t.domRef.player.paused) return t.playPauseToggle(), !0;
          }),
          (t.pause = function () {
            return t.domRef.player.paused || t.playPauseToggle(), !0;
          }),
          (t.skipTo = function (e) {
            t.domRef.player.currentTime = e;
          }),
          (t.setPlaybackSpeed = function (e) {
            t.isCurrentlyPlayingAd ||
              ((t.domRef.player.playbackRate = e),
              (t.fluidStorage.fluidSpeed = e));
          }),
          (t.setVolume = function (e) {
            t.domRef.player.volume = e;
            var n = 0 === e ? 1 : e;
            (t.latestVolume = n), (t.fluidStorage.fluidVolume = n);
          }),
          (t.isCurrentlyPlayingVideo = function (e) {
            return (
              e &&
              e.currentTime > 0 &&
              !e.paused &&
              !e.ended &&
              e.readyState > 2
            );
          }),
          (t.setHtmlOnPauseBlock = function (e) {
            if ("object" != a(e) || void 0 === e.html) return !1;
            var n = document.getElementById(
              t.videoPlayerId + "_fluid_html_on_pause"
            );
            if (!n) {
              var o = document.createElement("div");
              return (
                (o.id = t.videoPlayerId + "_fluid_html_on_pause"),
                (o.className = "fluid_html_on_pause"),
                (o.style.display = "none"),
                (o.innerHTML = e.html),
                (o.onclick = function () {
                  t.playPauseToggle();
                }),
                e.width && (o.style.width = e.width + "px"),
                e.height && (o.style.height = e.height + "px"),
                void t.domRef.player.parentNode.insertBefore(o, null)
              );
            }
            (n.innerHTML = e.html),
              e.width && (n.style.width = e.width + "px"),
              e.height && (n.style.height = e.height + "px");
          }),
          (t.toggleControlBar = function (e) {
            var n = document.getElementById(
              t.videoPlayerId + "fluid_controls_container"
            );
            e
              ? (n.className += " initial_controls_show")
              : (n.className = n.className.replace(
                  " initial_controls_show",
                  ""
                ));
          }),
          (t.on = function (e, n) {
            switch (e) {
              case "play":
                t.domRef.player.onplay = n;
                break;
              case "seeked":
                t.domRef.player.onseeked = n;
                break;
              case "ended":
                t.domRef.player.onended = n;
                break;
              case "pause":
                t.domRef.player.addEventListener("pause", function () {
                  t.fluidPseudoPause || n();
                });
                break;
              case "playing":
                t.domRef.player.addEventListener("playing", n);
                break;
              case "theatreModeOn":
                t.domRef.player.addEventListener("theatreModeOn", n);
                break;
              case "theatreModeOff":
                t.domRef.player.addEventListener("theatreModeOff", n);
                break;
              case "timeupdate":
                t.domRef.player.addEventListener("timeupdate", function () {
                  n(t.getCurrentTime());
                });
                break;
              default:
                console.log("[FP_ERROR] Event not recognised");
            }
          }),
          (t.toggleLogo = function (e) {
            if ("object" != a(e) || !e.imageUrl) return !1;
            var n = document.getElementById(t.videoPlayerId + "_logo");
            (t.displayOptions.layoutControls.logo.imageUrl = e.imageUrl
              ? e.imageUrl
              : null),
              (t.displayOptions.layoutControls.logo.position = e.position
                ? e.position
                : "top left"),
              (t.displayOptions.layoutControls.logo.clickUrl = e.clickUrl
                ? e.clickUrl
                : null),
              (t.displayOptions.layoutControls.logo.opacity = e.opacity
                ? e.opacity
                : 1),
              (t.displayOptions.layoutControls.logo.mouseOverImageUrl =
                e.mouseOverImageUrl ? e.mouseOverImageUrl : null),
              (t.displayOptions.layoutControls.logo.imageMargin = e.imageMargin
                ? e.imageMargin
                : "2px"),
              (t.displayOptions.layoutControls.logo.hideWithControls =
                !!e.hideWithControls && e.hideWithControls),
              (t.displayOptions.layoutControls.logo.showOverAds =
                !!e.showOverAds && e.showOverAds),
              n && n.remove(),
              t.initLogo();
          }),
          (t.trackEvent = function (e, n, o, i) {
            void 0 === t.events[o] && (t.events[o] = {}),
              void 0 === t.events[o][n] && (t.events[o][n] = []),
              t.events[o][n].push(i),
              t.registerListener(e, n, o, i);
          }),
          (t.registerListener = function (e, t, n, o) {
            for (var i = e.querySelectorAll(n), r = 0; r < i.length; r++)
              i[r].addEventListener(t, o);
          }),
          (t.copyEvents = function (e) {
            for (var n in t.events)
              if (t.events.hasOwnProperty(n))
                for (var o in t.events[n])
                  if (t.events[n].hasOwnProperty(o))
                    for (var i = 0; i < t.events[n][o].length; i++)
                      t.registerListener(e, o, n, t.events[n][o][i]);
          }),
          (t.destroy = function () {
            var n = t.destructors.length;
            if (0 !== n) {
              for (var o = 0; o < n; ++o) t.destructors[o].bind(e)();
              var i = document.getElementById(
                "fluid_video_wrapper_" + t.videoPlayerId
              );
              i
                ? "function" != typeof i.remove
                  ? i.parentNode
                    ? i.parentNode.removeChild(i)
                    : console.error(
                        "Unable to remove wrapper element for Fluid Player instance - no parent" +
                          t.videoPlayerId
                      )
                  : i.remove()
                : console.warn(
                    "Unable to remove wrapper element for Fluid Player instance - element not found " +
                      t.videoPlayerId
                  );
            }
          });
      },
      p = function (e) {
        (this.play = function () {
          return e.play();
        }),
          (this.pause = function () {
            return e.pause();
          }),
          (this.skipTo = function (t) {
            return e.skipTo(t);
          }),
          (this.setPlaybackSpeed = function (t) {
            return e.setPlaybackSpeed(t);
          }),
          (this.setVolume = function (t) {
            return e.setVolume(t);
          }),
          (this.setHtmlOnPauseBlock = function (t) {
            return e.setHtmlOnPauseBlock(t);
          }),
          (this.toggleControlBar = function (t) {
            return e.toggleControlBar(t);
          }),
          (this.toggleFullScreen = function (t) {
            return e.fullscreenToggle(t);
          }),
          (this.destroy = function () {
            return e.destroy();
          }),
          (this.dashInstance = function () {
            return e.dashPlayer ? e.dashPlayer : null;
          }),
          (this.hlsInstance = function () {
            return e.hlsPlayer ? e.hlsPlayer : null;
          }),
          (this.on = function (t, n) {
            return e.on(t, n);
          });
      };
    var f = function (e, t) {
      var n = new c();
      t || (t = {}), n.init(e, t);
      var o = new p(n);
      return window, o;
    };
    n(3);
    window && (window.fluidPlayer || (window.fluidPlayer = f));
  },
]);
