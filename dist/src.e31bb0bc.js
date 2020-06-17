// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === "function" && parcelRequire;
  var nodeRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof parcelRequire === "function" && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === "string") {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = "MODULE_NOT_FOUND";
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === "function" && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})(
  {
    "../node_modules/preact/dist/preact.module.js": [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        exports.render = H;
        exports.hydrate = I;
        exports.h = exports.createElement = h;
        exports.Fragment = d;
        exports.createRef = p;
        exports.Component = m;
        exports.cloneElement = L;
        exports.createContext = M;
        exports.toChildArray = x;
        exports._unmount = D;
        exports.options = exports.isValidElement = void 0;
        var n,
          l,
          u,
          i,
          t,
          o,
          r,
          f,
          e = {},
          c = [],
          a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
        exports.isValidElement = l;
        exports.options = n;

        function s(n, l) {
          for (var u in l) n[u] = l[u];

          return n;
        }

        function v(n) {
          var l = n.parentNode;
          l && l.removeChild(n);
        }

        function h(n, l, u) {
          var i,
            t = arguments,
            o = {};

          for (i in l) "key" !== i && "ref" !== i && (o[i] = l[i]);

          if (arguments.length > 3)
            for (u = [u], i = 3; i < arguments.length; i++) u.push(t[i]);
          if (
            (null != u && (o.children = u),
            "function" == typeof n && null != n.defaultProps)
          )
            for (i in n.defaultProps)
              void 0 === o[i] && (o[i] = n.defaultProps[i]);
          return y(n, o, l && l.key, l && l.ref, null);
        }

        function y(l, u, i, t, o) {
          var r = {
            type: l,
            props: u,
            key: i,
            ref: t,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            constructor: void 0,
            __v: o,
          };
          return null == o && (r.__v = r), n.vnode && n.vnode(r), r;
        }

        function p() {
          return {};
        }

        function d(n) {
          return n.children;
        }

        function m(n, l) {
          (this.props = n), (this.context = l);
        }

        function w(n, l) {
          if (null == l) return n.__ ? w(n.__, n.__.__k.indexOf(n) + 1) : null;

          for (var u; l < n.__k.length; l++)
            if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

          return "function" == typeof n.type ? w(n) : null;
        }

        function k(n) {
          var l, u;

          if (null != (n = n.__) && null != n.__c) {
            for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)
              if (null != (u = n.__k[l]) && null != u.__e) {
                n.__e = n.__c.base = u.__e;
                break;
              }

            return k(n);
          }
        }

        function g(l) {
          ((!l.__d && (l.__d = !0) && u.push(l) && !i++) ||
            o !== n.debounceRendering) &&
            ((o = n.debounceRendering) || t)(_);
        }

        function _() {
          for (var n; (i = u.length); )
            (n = u.sort(function (n, l) {
              return n.__v.__b - l.__v.__b;
            })),
              (u = []),
              n.some(function (n) {
                var l, u, i, t, o, r, f;
                n.__d &&
                  ((r = (o = (l = n).__v).__e),
                  (f = l.__P) &&
                    ((u = []),
                    ((i = s({}, o)).__v = i),
                    (t = z(
                      f,
                      o,
                      i,
                      l.__n,
                      void 0 !== f.ownerSVGElement,
                      null,
                      u,
                      null == r ? w(o) : r
                    )),
                    T(u, o),
                    t != r && k(o)));
              });
        }

        function b(n, l, u, i, t, o, r, f, a, s) {
          var h,
            p,
            m,
            k,
            g,
            _,
            b,
            x,
            A,
            P = (i && i.__k) || c,
            C = P.length;

          for (
            a == e && (a = null != r ? r[0] : C ? w(i, 0) : null),
              u.__k = [],
              h = 0;
            h < l.length;
            h++
          )
            if (
              null !=
              (k = u.__k[h] =
                null == (k = l[h]) || "boolean" == typeof k
                  ? null
                  : "string" == typeof k || "number" == typeof k
                  ? y(null, k, null, null, k)
                  : Array.isArray(k)
                  ? y(
                      d,
                      {
                        children: k,
                      },
                      null,
                      null,
                      null
                    )
                  : null != k.__e || null != k.__c
                  ? y(k.type, k.props, k.key, null, k.__v)
                  : k)
            ) {
              if (
                ((k.__ = u),
                (k.__b = u.__b + 1),
                null === (m = P[h]) ||
                  (m && k.key == m.key && k.type === m.type))
              )
                P[h] = void 0;
              else
                for (p = 0; p < C; p++) {
                  if ((m = P[p]) && k.key == m.key && k.type === m.type) {
                    P[p] = void 0;
                    break;
                  }

                  m = null;
                }

              if (
                ((g = z(n, k, (m = m || e), t, o, r, f, a, s)),
                (p = k.ref) &&
                  m.ref != p &&
                  (x || (x = []),
                  m.ref && x.push(m.ref, null, k),
                  x.push(p, k.__c || g, k)),
                null != g)
              ) {
                if ((null == b && (b = g), (A = void 0), void 0 !== k.__d))
                  (A = k.__d), (k.__d = void 0);
                else if (r == m || g != a || null == g.parentNode) {
                  n: if (null == a || a.parentNode !== n)
                    n.appendChild(g), (A = null);
                  else {
                    for (_ = a, p = 0; (_ = _.nextSibling) && p < C; p += 2)
                      if (_ == g) break n;

                    n.insertBefore(g, a), (A = a);
                  }

                  "option" == u.type && (n.value = "");
                }
                (a = void 0 !== A ? A : g.nextSibling),
                  "function" == typeof u.type && (u.__d = a);
              } else a && m.__e == a && a.parentNode != n && (a = w(m));
            }

          if (((u.__e = b), null != r && "function" != typeof u.type))
            for (h = r.length; h--; ) null != r[h] && v(r[h]);

          for (h = C; h--; ) null != P[h] && D(P[h], P[h]);

          if (x) for (h = 0; h < x.length; h++) j(x[h], x[++h], x[++h]);
        }

        function x(n) {
          return null == n || "boolean" == typeof n
            ? []
            : Array.isArray(n)
            ? c.concat.apply([], n.map(x))
            : [n];
        }

        function A(n, l, u, i, t) {
          var o;

          for (o in u)
            "children" === o || "key" === o || o in l || C(n, o, null, u[o], i);

          for (o in l)
            (t && "function" != typeof l[o]) ||
              "children" === o ||
              "key" === o ||
              "value" === o ||
              "checked" === o ||
              u[o] === l[o] ||
              C(n, o, l[o], u[o], i);
        }

        function P(n, l, u) {
          "-" === l[0]
            ? n.setProperty(l, u)
            : (n[l] =
                "number" == typeof u && !1 === a.test(l)
                  ? u + "px"
                  : null == u
                  ? ""
                  : u);
        }

        function C(n, l, u, i, t) {
          var o, r, f, e, c;
          if (
            (t
              ? "className" === l && (l = "class")
              : "class" === l && (l = "className"),
            "style" === l)
          ) {
            if (((o = n.style), "string" == typeof u)) o.cssText = u;
            else {
              if (("string" == typeof i && ((o.cssText = ""), (i = null)), i))
                for (e in i) (u && e in u) || P(o, e, "");
              if (u) for (c in u) (i && u[c] === i[c]) || P(o, c, u[c]);
            }
          } else
            "o" === l[0] && "n" === l[1]
              ? ((r = l !== (l = l.replace(/Capture$/, ""))),
                (f = l.toLowerCase()),
                (l = (f in n ? f : l).slice(2)),
                u
                  ? (i || n.addEventListener(l, N, r),
                    ((n.l || (n.l = {}))[l] = u))
                  : n.removeEventListener(l, N, r))
              : "list" !== l &&
                "tagName" !== l &&
                "form" !== l &&
                "type" !== l &&
                "size" !== l &&
                !t &&
                l in n
              ? (n[l] = null == u ? "" : u)
              : "function" != typeof u &&
                "dangerouslySetInnerHTML" !== l &&
                (l !== (l = l.replace(/^xlink:?/, ""))
                  ? null == u || !1 === u
                    ? n.removeAttributeNS(
                        "http://www.w3.org/1999/xlink",
                        l.toLowerCase()
                      )
                    : n.setAttributeNS(
                        "http://www.w3.org/1999/xlink",
                        l.toLowerCase(),
                        u
                      )
                  : null == u || (!1 === u && !/^ar/.test(l))
                  ? n.removeAttribute(l)
                  : n.setAttribute(l, u));
        }

        function N(l) {
          this.l[l.type](n.event ? n.event(l) : l);
        }

        function z(l, u, i, t, o, r, f, e, c) {
          var a,
            v,
            h,
            y,
            p,
            w,
            k,
            g,
            _,
            x,
            A,
            P = u.type;

          if (void 0 !== u.constructor) return null;
          (a = n.__b) && a(u);

          try {
            n: if ("function" == typeof P) {
              if (
                ((g = u.props),
                (_ = (a = P.contextType) && t[a.__c]),
                (x = a ? (_ ? _.props.value : a.__) : t),
                i.__c
                  ? (k = (v = u.__c = i.__c).__ = v.__E)
                  : ("prototype" in P && P.prototype.render
                      ? (u.__c = v = new P(g, x))
                      : ((u.__c = v = new m(g, x)),
                        (v.constructor = P),
                        (v.render = E)),
                    _ && _.sub(v),
                    (v.props = g),
                    v.state || (v.state = {}),
                    (v.context = x),
                    (v.__n = t),
                    (h = v.__d = !0),
                    (v.__h = [])),
                null == v.__s && (v.__s = v.state),
                null != P.getDerivedStateFromProps &&
                  (v.__s == v.state && (v.__s = s({}, v.__s)),
                  s(v.__s, P.getDerivedStateFromProps(g, v.__s))),
                (y = v.props),
                (p = v.state),
                h)
              )
                null == P.getDerivedStateFromProps &&
                  null != v.componentWillMount &&
                  v.componentWillMount(),
                  null != v.componentDidMount &&
                    v.__h.push(v.componentDidMount);
              else {
                if (
                  (null == P.getDerivedStateFromProps &&
                    g !== y &&
                    null != v.componentWillReceiveProps &&
                    v.componentWillReceiveProps(g, x),
                  (!v.__e &&
                    null != v.shouldComponentUpdate &&
                    !1 === v.shouldComponentUpdate(g, v.__s, x)) ||
                    u.__v === i.__v)
                ) {
                  for (
                    v.props = g,
                      v.state = v.__s,
                      u.__v !== i.__v && (v.__d = !1),
                      v.__v = u,
                      u.__e = i.__e,
                      u.__k = i.__k,
                      v.__h.length && f.push(v),
                      a = 0;
                    a < u.__k.length;
                    a++
                  )
                    u.__k[a] && (u.__k[a].__ = u);

                  break n;
                }

                null != v.componentWillUpdate &&
                  v.componentWillUpdate(g, v.__s, x),
                  null != v.componentDidUpdate &&
                    v.__h.push(function () {
                      v.componentDidUpdate(y, p, w);
                    });
              }
              (v.context = x),
                (v.props = g),
                (v.state = v.__s),
                (a = n.__r) && a(u),
                (v.__d = !1),
                (v.__v = u),
                (v.__P = l),
                (a = v.render(v.props, v.state, v.context)),
                null != v.getChildContext &&
                  (t = s(s({}, t), v.getChildContext())),
                h ||
                  null == v.getSnapshotBeforeUpdate ||
                  (w = v.getSnapshotBeforeUpdate(y, p)),
                (A =
                  null != a && a.type == d && null == a.key
                    ? a.props.children
                    : a),
                b(l, Array.isArray(A) ? A : [A], u, i, t, o, r, f, e, c),
                (v.base = u.__e),
                v.__h.length && f.push(v),
                k && (v.__E = v.__ = null),
                (v.__e = !1);
            } else
              null == r && u.__v === i.__v
                ? ((u.__k = i.__k), (u.__e = i.__e))
                : (u.__e = $(i.__e, u, i, t, o, r, f, c));

            (a = n.diffed) && a(u);
          } catch (l) {
            (u.__v = null), n.__e(l, u, i);
          }

          return u.__e;
        }

        function T(l, u) {
          n.__c && n.__c(u, l),
            l.some(function (u) {
              try {
                (l = u.__h),
                  (u.__h = []),
                  l.some(function (n) {
                    n.call(u);
                  });
              } catch (l) {
                n.__e(l, u.__v);
              }
            });
        }

        function $(n, l, u, i, t, o, r, f) {
          var a,
            s,
            v,
            h,
            y,
            p = u.props,
            d = l.props;
          if (((t = "svg" === l.type || t), null != o))
            for (a = 0; a < o.length; a++)
              if (
                null != (s = o[a]) &&
                ((null === l.type
                  ? 3 === s.nodeType
                  : s.localName === l.type) ||
                  n == s)
              ) {
                (n = s), (o[a] = null);
                break;
              }

          if (null == n) {
            if (null === l.type) return document.createTextNode(d);
            (n = t
              ? document.createElementNS("http://www.w3.org/2000/svg", l.type)
              : document.createElement(
                  l.type,
                  d.is && {
                    is: d.is,
                  }
                )),
              (o = null),
              (f = !1);
          }

          if (null === l.type) p !== d && n.data != d && (n.data = d);
          else {
            if (
              (null != o && (o = c.slice.call(n.childNodes)),
              (v = (p = u.props || e).dangerouslySetInnerHTML),
              (h = d.dangerouslySetInnerHTML),
              !f)
            ) {
              if (null != o)
                for (p = {}, y = 0; y < n.attributes.length; y++)
                  p[n.attributes[y].name] = n.attributes[y].value;
              (h || v) &&
                ((h && v && h.__html == v.__html) ||
                  (n.innerHTML = (h && h.__html) || ""));
            }

            A(n, d, p, t, f),
              h
                ? (l.__k = [])
                : ((a = l.props.children),
                  b(
                    n,
                    Array.isArray(a) ? a : [a],
                    l,
                    u,
                    i,
                    "foreignObject" !== l.type && t,
                    o,
                    r,
                    e,
                    f
                  )),
              f ||
                ("value" in d &&
                  void 0 !== (a = d.value) &&
                  a !== n.value &&
                  C(n, "value", a, p.value, !1),
                "checked" in d &&
                  void 0 !== (a = d.checked) &&
                  a !== n.checked &&
                  C(n, "checked", a, p.checked, !1));
          }
          return n;
        }

        function j(l, u, i) {
          try {
            "function" == typeof l ? l(u) : (l.current = u);
          } catch (l) {
            n.__e(l, i);
          }
        }

        function D(l, u, i) {
          var t, o, r;

          if (
            (n.unmount && n.unmount(l),
            (t = l.ref) &&
              ((t.current && t.current !== l.__e) || j(t, null, u)),
            i || "function" == typeof l.type || (i = null != (o = l.__e)),
            (l.__e = l.__d = void 0),
            null != (t = l.__c))
          ) {
            if (t.componentWillUnmount)
              try {
                t.componentWillUnmount();
              } catch (l) {
                n.__e(l, u);
              }
            t.base = t.__P = null;
          }

          if ((t = l.__k)) for (r = 0; r < t.length; r++) t[r] && D(t[r], u, i);
          null != o && v(o);
        }

        function E(n, l, u) {
          return this.constructor(n, u);
        }

        function H(l, u, i) {
          var t, o, f;
          n.__ && n.__(l, u),
            (o = (t = i === r) ? null : (i && i.__k) || u.__k),
            (l = h(d, null, [l])),
            (f = []),
            z(
              u,
              ((t ? u : i || u).__k = l),
              o || e,
              e,
              void 0 !== u.ownerSVGElement,
              i && !t
                ? [i]
                : o
                ? null
                : u.childNodes.length
                ? c.slice.call(u.childNodes)
                : null,
              f,
              i || e,
              t
            ),
            T(f, l);
        }

        function I(n, l) {
          H(n, l, r);
        }

        function L(n, l) {
          var u, i;

          for (i in ((l = s(s({}, n.props), l)),
          arguments.length > 2 && (l.children = c.slice.call(arguments, 2)),
          (u = {}),
          l))
            "key" !== i && "ref" !== i && (u[i] = l[i]);

          return y(n.type, u, l.key || n.key, l.ref || n.ref, null);
        }

        function M(n) {
          var l = {},
            u = {
              __c: "__cC" + f++,
              __: n,
              Consumer: function (n, l) {
                return n.children(l);
              },
              Provider: function (n) {
                var i,
                  t = this;
                return (
                  this.getChildContext ||
                    ((i = []),
                    (this.getChildContext = function () {
                      return (l[u.__c] = t), l;
                    }),
                    (this.shouldComponentUpdate = function (n) {
                      t.props.value !== n.value &&
                        i.some(function (l) {
                          (l.context = n.value), g(l);
                        });
                    }),
                    (this.sub = function (n) {
                      i.push(n);
                      var l = n.componentWillUnmount;

                      n.componentWillUnmount = function () {
                        i.splice(i.indexOf(n), 1), l && l.call(n);
                      };
                    })),
                  n.children
                );
              },
            };
          return (u.Consumer.contextType = u), (u.Provider.__ = u), u;
        }

        (exports.options = n = {
          __e: function (n, l) {
            for (var u, i; (l = l.__); )
              if ((u = l.__c) && !u.__)
                try {
                  if (
                    (u.constructor &&
                      null != u.constructor.getDerivedStateFromError &&
                      ((i = !0),
                      u.setState(u.constructor.getDerivedStateFromError(n))),
                    null != u.componentDidCatch &&
                      ((i = !0), u.componentDidCatch(n)),
                    i)
                  )
                    return g((u.__E = u));
                } catch (l) {
                  n = l;
                }

            throw n;
          },
        }),
          (exports.isValidElement = l = function (n) {
            return null != n && void 0 === n.constructor;
          }),
          (m.prototype.setState = function (n, l) {
            var u;
            (u =
              this.__s !== this.state
                ? this.__s
                : (this.__s = s({}, this.state))),
              "function" == typeof n && (n = n(u, this.props)),
              n && s(u, n),
              null != n && this.__v && (l && this.__h.push(l), g(this));
          }),
          (m.prototype.forceUpdate = function (n) {
            this.__v && ((this.__e = !0), n && this.__h.push(n), g(this));
          }),
          (m.prototype.render = d),
          (u = []),
          (i = 0),
          (t =
            "function" == typeof Promise
              ? Promise.prototype.then.bind(Promise.resolve())
              : setTimeout),
          (r = e),
          (f = 0);
      },
      {},
    ],
    "index.js": [
      function (require, module, exports) {
        "use strict";

        var _preact = require("preact");

        (0, _preact.render)(
          (0, _preact.h)("h1", null, "Anthony Ngo!"),
          document.body
        );
      },
      { preact: "../node_modules/preact/dist/preact.module.js" },
    ],
    "../node_modules/parcel-bundler/src/builtins/hmr-runtime.js": [
      function (require, module, exports) {
        var global = arguments[3];
        var OVERLAY_ID = "__parcel__error__overlay__";
        var OldModule = module.bundle.Module;

        function Module(moduleName) {
          OldModule.call(this, moduleName);
          this.hot = {
            data: module.bundle.hotData,
            _acceptCallbacks: [],
            _disposeCallbacks: [],
            accept: function (fn) {
              this._acceptCallbacks.push(fn || function () {});
            },
            dispose: function (fn) {
              this._disposeCallbacks.push(fn);
            },
          };
          module.bundle.hotData = null;
        }

        module.bundle.Module = Module;
        var checkedAssets, assetsToAccept;
        var parent = module.bundle.parent;

        if (
          (!parent || !parent.isParcelRequire) &&
          typeof WebSocket !== "undefined"
        ) {
          var hostname = "" || location.hostname;
          var protocol = location.protocol === "https:" ? "wss" : "ws";
          var ws = new WebSocket(
            protocol + "://" + hostname + ":" + "65420" + "/"
          );

          ws.onmessage = function (event) {
            checkedAssets = {};
            assetsToAccept = [];
            var data = JSON.parse(event.data);

            if (data.type === "update") {
              var handled = false;
              data.assets.forEach(function (asset) {
                if (!asset.isNew) {
                  var didAccept = hmrAcceptCheck(
                    global.parcelRequire,
                    asset.id
                  );

                  if (didAccept) {
                    handled = true;
                  }
                }
              }); // Enable HMR for CSS by default.

              handled =
                handled ||
                data.assets.every(function (asset) {
                  return asset.type === "css" && asset.generated.js;
                });

              if (handled) {
                console.clear();
                data.assets.forEach(function (asset) {
                  hmrApply(global.parcelRequire, asset);
                });
                assetsToAccept.forEach(function (v) {
                  hmrAcceptRun(v[0], v[1]);
                });
              } else if (location.reload) {
                // `location` global exists in a web worker context but lacks `.reload()` function.
                location.reload();
              }
            }

            if (data.type === "reload") {
              ws.close();

              ws.onclose = function () {
                location.reload();
              };
            }

            if (data.type === "error-resolved") {
              console.log("[parcel] ✨ Error resolved");
              removeErrorOverlay();
            }

            if (data.type === "error") {
              console.error(
                "[parcel] 🚨  " + data.error.message + "\n" + data.error.stack
              );
              removeErrorOverlay();
              var overlay = createErrorOverlay(data);
              document.body.appendChild(overlay);
            }
          };
        }

        function removeErrorOverlay() {
          var overlay = document.getElementById(OVERLAY_ID);

          if (overlay) {
            overlay.remove();
          }
        }

        function createErrorOverlay(data) {
          var overlay = document.createElement("div");
          overlay.id = OVERLAY_ID; // html encode message and stack trace

          var message = document.createElement("div");
          var stackTrace = document.createElement("pre");
          message.innerText = data.error.message;
          stackTrace.innerText = data.error.stack;
          overlay.innerHTML =
            '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' +
            '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' +
            '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' +
            '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' +
            message.innerHTML +
            "</div>" +
            "<pre>" +
            stackTrace.innerHTML +
            "</pre>" +
            "</div>";
          return overlay;
        }

        function getParents(bundle, id) {
          var modules = bundle.modules;

          if (!modules) {
            return [];
          }

          var parents = [];
          var k, d, dep;

          for (k in modules) {
            for (d in modules[k][1]) {
              dep = modules[k][1][d];

              if (
                dep === id ||
                (Array.isArray(dep) && dep[dep.length - 1] === id)
              ) {
                parents.push(k);
              }
            }
          }

          if (bundle.parent) {
            parents = parents.concat(getParents(bundle.parent, id));
          }

          return parents;
        }

        function hmrApply(bundle, asset) {
          var modules = bundle.modules;

          if (!modules) {
            return;
          }

          if (modules[asset.id] || !bundle.parent) {
            var fn = new Function(
              "require",
              "module",
              "exports",
              asset.generated.js
            );
            asset.isNew = !modules[asset.id];
            modules[asset.id] = [fn, asset.deps];
          } else if (bundle.parent) {
            hmrApply(bundle.parent, asset);
          }
        }

        function hmrAcceptCheck(bundle, id) {
          var modules = bundle.modules;

          if (!modules) {
            return;
          }

          if (!modules[id] && bundle.parent) {
            return hmrAcceptCheck(bundle.parent, id);
          }

          if (checkedAssets[id]) {
            return;
          }

          checkedAssets[id] = true;
          var cached = bundle.cache[id];
          assetsToAccept.push([bundle, id]);

          if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
            return true;
          }

          return getParents(global.parcelRequire, id).some(function (id) {
            return hmrAcceptCheck(global.parcelRequire, id);
          });
        }

        function hmrAcceptRun(bundle, id) {
          var cached = bundle.cache[id];
          bundle.hotData = {};

          if (cached) {
            cached.hot.data = bundle.hotData;
          }

          if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
            cached.hot._disposeCallbacks.forEach(function (cb) {
              cb(bundle.hotData);
            });
          }

          delete bundle.cache[id];
          bundle(id);
          cached = bundle.cache[id];

          if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
            cached.hot._acceptCallbacks.forEach(function (cb) {
              cb();
            });

            return true;
          }
        }
      },
      {},
    ],
  },
  {},
  ["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js", "index.js"],
  null
);
//# sourceMappingURL=/src.e31bb0bc.js.map
