(function() {
    var ba = "&action=",
        ca = ".wikipedia.org",
        da = "CSSStyleDeclaration",
        ea = "Clobbering detected",
        fa = "Edge",
        ha = "Element",
        ia = "GET",
        ja = "Never attached to DOM.",
        ka = "SPAN",
        la = "STYLE",
        ma = "SW_READER_LIST_",
        na = "SW_READER_LIST_CLOSED_",
        oa = "Share this post",
        pa = "Symbol.iterator",
        qa = "_blank",
        ra = "about:invalid#zClosurez",
        sa = "about:invalid#zSoyz",
        ta = "attributes",
        ua = "block",
        va = "chooseWidget",
        wa = "click",
        xa = "collapsed",
        ya = "collapsible",
        za = "comment-editor",
        Aa = "commentId",
        Ba = "complete",
        Ca = "configure",
        Da = "contact-form-email",
        Ea = "contact-form-email-message",
        Fa = "contact-form-error-message",
        Ga = "contact-form-error-message-with-border",
        Ha = "contact-form-name",
        Ia = "contact-form-submit",
        Ja = "contact-form-success-message",
        Ka = "contact-form-success-message-with-border",
        La = "data-height",
        Ma = "data-sanitizer-",
        Na = "data-viewurl",
        Oa = "displayModeFull",
        Pa = "displayModeLayout",
        Qa = "displayModeNone",
        l = "div",
        Ra = "dropdown-toggle",
        Sa = "error",
        Ta = "expanded",
        Ua = "followers-grid",
        m = "function",
        Va = "getAttribute",
        Wa = "getElementsByTagName",
        Xa = "getPropertyValue",
        Ya = "hasAttribute",
        Za = "hidden",
        $a = "layout-widget-description",
        ab = "layout-widget-title",
        bb = "max-height: 0;",
        cb = "msMatchesSelector",
        p = "none",
        db = "number",
        q = "object",
        eb = "ready",
        fb = "removeAttribute",
        gb = "rotate(-45deg)",
        hb = "setAttribute",
        ib = "status-message",
        jb = "status-message-inner",
        r = "string",
        kb = "style",
        lb = "success",
        mb = "text/javascript",
        nb = "thread-collapsed",
        ob = "thread-expanded",
        pb = "toggle",
        qb = "visible",
        rb = "wikipedia-search-input",
        sb = "wikipedia-search-more",
        tb = "wikipedia-search-results",
        ub = "wikipedia-search-results-header",
        vb = "zClosurez",
        t;

    function xb(a) { var b = 0; return function() { return b < a.length ? { done: !1, value: a[b++] } : { done: !0 } } }
    var yb = typeof Object.defineProperties == m ? Object.defineProperty : function(a, b, c) { if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value; return a };

    function zb(a) { a = [q == typeof globalThis && globalThis, a, q == typeof window && window, q == typeof self && self, q == typeof global && global]; for (var b = 0; b < a.length; ++b) { var c = a[b]; if (c && c.Math == Math) return c } throw Error("Cannot find global object"); }
    var Ab = zb(this);

    function Bb(a, b) { if (b) a: { var c = Ab;a = a.split("."); for (var d = 0; d < a.length - 1; d++) { var e = a[d]; if (!(e in c)) break a;
                c = c[e] }
            a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && yb(c, a, { configurable: !0, writable: !0, value: b }) } }
    Bb("Symbol", function(a) {
        function b(f) { if (this instanceof b) throw new TypeError("Symbol is not a constructor"); return new c(d + (f || "") + "_" + e++, f) }

        function c(f, g) { this.C = f;
            yb(this, "description", { configurable: !0, writable: !0, value: g }) } if (a) return a;
        c.prototype.toString = function() { return this.C }; var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0; return b });
    Bb(pa, function(a) { if (a) return a;
        a = Symbol(pa); for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) { var d = Ab[b[c]];
            typeof d === m && typeof d.prototype[a] != m && yb(d.prototype, a, { configurable: !0, writable: !0, value: function() { return Cb(xb(this)) } }) } return a });

    function Cb(a) { a = { next: a };
        a[Symbol.iterator] = function() { return this }; return a }

    function Db(a) { var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator]; return b ? b.call(a) : { next: xb(a) } }
    var Eb = typeof Object.create == m ? Object.create : function(a) {
            function b() {}
            b.prototype = a; return new b },
        Fb;
    if (typeof Object.setPrototypeOf == m) Fb = Object.setPrototypeOf;
    else { var Gb;
        a: { var Hb = { a: !0 },
                Ib = {}; try { Ib.__proto__ = Hb;
                Gb = Ib.a; break a } catch (a) {}
            Gb = !1 }
        Fb = Gb ? function(a, b) { a.__proto__ = b; if (a.__proto__ !== b) throw new TypeError(a + " is not extensible"); return a } : null }
    var Jb = Fb;

    function u(a, b) { a.prototype = Eb(b.prototype);
        a.prototype.constructor = a; if (Jb) Jb(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) { var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d) } else a[c] = b[c];
        a.O = b.prototype }

    function Kb(a, b) { return Object.prototype.hasOwnProperty.call(a, b) }
    Bb("WeakMap", function(a) {
        function b(k) { this.fa = (h += Math.random() + 1).toString(); if (k) { k = Db(k); for (var n; !(n = k.next()).done;) n = n.value, this.set(n[0], n[1]) } }

        function c() {}

        function d(k) { var n = typeof k; return n === q && null !== k || n === m }

        function e(k) { if (!Kb(k, g)) { var n = new c;
                yb(k, g, { value: n }) } }

        function f(k) { var n = Object[k];
            n && (Object[k] = function(v) { if (v instanceof c) return v;
                Object.isExtensible(v) && e(v); return n(v) }) }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var k = Object.seal({}),
                        n = Object.seal({}),
                        v = new a([
                            [k,
                                2
                            ],
                            [n, 3]
                        ]);
                    if (2 != v.get(k) || 3 != v.get(n)) return !1;
                    v.delete(k);
                    v.set(n, 4);
                    return !v.has(k) && 4 == v.get(n)
                } catch (B) { return !1 }
            }()) return a;
        var g = "$jscomp_hidden_" + Math.random();
        f("freeze");
        f("preventExtensions");
        f("seal");
        var h = 0;
        b.prototype.set = function(k, n) { if (!d(k)) throw Error("Invalid WeakMap key");
            e(k); if (!Kb(k, g)) throw Error("WeakMap key fail: " + k);
            k[g][this.fa] = n; return this };
        b.prototype.get = function(k) { return d(k) && Kb(k, g) ? k[g][this.fa] : void 0 };
        b.prototype.has = function(k) {
            return d(k) && Kb(k, g) && Kb(k[g],
                this.fa)
        };
        b.prototype.delete = function(k) { return d(k) && Kb(k, g) && Kb(k[g], this.fa) ? delete k[g][this.fa] : !1 };
        return b
    });
    Bb("Map", function(a) {
        function b() { var h = {}; return h.na = h.next = h.head = h }

        function c(h, k) { var n = h.C; return Cb(function() { if (n) { for (; n.head != h.C;) n = n.na; for (; n.next != n.head;) return n = n.next, { done: !1, value: k(n) };
                    n = null } return { done: !0, value: void 0 } }) }

        function d(h, k) {
            var n = k && typeof k;
            n == q || n == m ? f.has(k) ? n = f.get(k) : (n = "" + ++g, f.set(k, n)) : n = "p_" + k;
            var v = h.D[n];
            if (v && Kb(h.D, n))
                for (h = 0; h < v.length; h++) { var B = v[h]; if (k !== k && B.key !== B.key || k === B.key) return { id: n, list: v, index: h, aa: B } }
            return {
                id: n,
                list: v,
                index: -1,
                aa: void 0
            }
        }

        function e(h) { this.D = {};
            this.C = b();
            this.size = 0; if (h) { h = Db(h); for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1]) } }
        if (function() {
                if (!a || typeof a != m || !a.prototype.entries || typeof Object.seal != m) return !1;
                try {
                    var h = Object.seal({ x: 4 }),
                        k = new a(Db([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({ x: 4 }) || k.set({ x: 4 }, "t") != k || 2 != k.size) return !1;
                    var n = k.entries(),
                        v = n.next();
                    if (v.done || v.value[0] != h || "s" != v.value[1]) return !1;
                    v = n.next();
                    return v.done || 4 != v.value[0].x || "t" != v.value[1] || !n.next().done ?
                        !1 : !0
                } catch (B) { return !1 }
            }()) return a;
        var f = new WeakMap;
        e.prototype.set = function(h, k) { h = 0 === h ? 0 : h; var n = d(this, h);
            n.list || (n.list = this.D[n.id] = []);
            n.aa ? n.aa.value = k : (n.aa = { next: this.C, na: this.C.na, head: this.C, key: h, value: k }, n.list.push(n.aa), this.C.na.next = n.aa, this.C.na = n.aa, this.size++); return this };
        e.prototype.delete = function(h) {
            h = d(this, h);
            return h.aa && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.D[h.id], h.aa.na.next = h.aa.next, h.aa.next.na = h.aa.na, h.aa.head = null, this.size--, !0) :
                !1
        };
        e.prototype.clear = function() { this.D = {};
            this.C = this.C.na = b();
            this.size = 0 };
        e.prototype.has = function(h) { return !!d(this, h).aa };
        e.prototype.get = function(h) { return (h = d(this, h).aa) && h.value };
        e.prototype.entries = function() { return c(this, function(h) { return [h.key, h.value] }) };
        e.prototype.keys = function() { return c(this, function(h) { return h.key }) };
        e.prototype.values = function() { return c(this, function(h) { return h.value }) };
        e.prototype.forEach = function(h, k) {
            for (var n = this.entries(), v; !(v = n.next()).done;) v = v.value,
                h.call(k, v[1], v[0], this)
        };
        e.prototype[Symbol.iterator] = e.prototype.entries;
        var g = 0;
        return e
    });
    Bb("String.prototype.endsWith", function(a) { return a ? a : function(b, c) { if (null == this) throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined"); if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression"); var d = this + "";
            b += "";
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length)); for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e } });
    Bb("Array.prototype.find", function(a) { return a ? a : function(b, c) { a: { var d = this;d instanceof String && (d = String(d)); for (var e = d.length, f = 0; f < e; f++) { var g = d[f]; if (b.call(c, g, f, d)) { b = g; break a } }
                b = void 0 } return b } });

    function Lb(a, b) { a instanceof String && (a += ""); var c = 0,
            d = !1,
            e = { next: function() { if (!d && c < a.length) { var f = c++; return { value: b(f, a[f]), done: !1 } }
                    d = !0; return { done: !0, value: void 0 } } };
        e[Symbol.iterator] = function() { return e }; return e }
    Bb("Array.prototype.keys", function(a) { return a ? a : function() { return Lb(this, function(b) { return b }) } });
    Bb("Array.from", function(a) { return a ? a : function(b, c, d) { c = null != c ? c : function(h) { return h }; var e = [],
                f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator]; if (typeof f == m) { b = f.call(b); for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++)) } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g)); return e } });
    Bb("Array.prototype.values", function(a) { return a ? a : function() { return Lb(this, function(b, c) { return c }) } });
    var Mb = typeof Object.assign == m ? Object.assign : function(a, b) { for (var c = 1; c < arguments.length; c++) { var d = arguments[c]; if (d)
                for (var e in d) Kb(d, e) && (a[e] = d[e]) } return a };
    Bb("Object.assign", function(a) { return a || Mb });
    window.jstiming && window.jstiming.load.tick("widgetJsStart");

    function Nb() { window.jstiming.load.tick("ol") }

    function Ob(a, b) { a.addEventListener ? a.addEventListener("load", b, !1) : a.attachEvent("onload", b) }

    function Pb(a, b) { return a.className && -1 != a.className.indexOf(b) ? a : a.parentNode ? Pb(a.parentNode, b) : null }

    function Qb() { window.jstiming.load.tick("prt");
        window.tickAboveFold && window.tickAboveFold(this) }
    window.BLOG_attachCsiOnload = function(a, b) {
        if (window.jstiming) {
            window.jstiming.load.tick("widgetJsEnd");
            window.jstiming.load.tick("prt");
            window.jstiming.load.name = a + "blogspot";
            a = document.getElementsByTagName("img");
            for (var c = 0; c < a.length; c++) a[c].complete ? null != Pb(a[c], "post") && Qb.apply(a[c]) : null != Pb(a[c], "post") && Ob(a[c], Qb);
            Ob(window, Nb);
            a = function() {
                for (var d = {}, e = window.blogger_blog_id, f = ["google_blogger_adsense_experiment_id", "blogger_csi_e", "blogger_templates_experiment_id", "blogger_active_experiments"],
                        g = [], h = f.length, k = 0; k < h; k++) { var n = f[k];
                    n in window && g.push(window[n]) }
                e && (d.blogId = e);
                0 < g.length && (d.e = g.join(","));
                e = ("https:" == document.location.protocol ? "https:" : "http:") + "//csi.gstatic.com/csi";
                window.jstiming.report(window.jstiming.load, d, b || e)
            };
            window.addEventListener ? window.addEventListener("beforeunload", a, !1) : window.attachEvent("onbeforeunload", a)
        }
    };
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var Rb = Rb || {},
        w = this || self;

    function Sb() {}

    function Tb(a) { a.Aa = void 0;
        a.Ya = function() { return a.Aa ? a.Aa : a.Aa = new a } }

    function Ub(a) { var b = typeof a;
        b = b != q ? b : a ? Array.isArray(a) ? "array" : b : "null"; return "array" == b || b == q && typeof a.length == db }

    function Vb(a) { var b = typeof a; return b == q && null != a || b == m }
    var Wb = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Xb = 0;

    function Yb(a, b, c) { return a.call.apply(a.bind, arguments) }

    function Zb(a, b, c) { if (!a) throw Error(); if (2 < arguments.length) { var d = Array.prototype.slice.call(arguments, 2); return function() { var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d); return a.apply(b, e) } } return function() { return a.apply(b, arguments) } }

    function x(a, b, c) { Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? x = Yb : x = Zb; return x.apply(null, arguments) }

    function $b(a, b) { var c = Array.prototype.slice.call(arguments, 1); return function() { var d = c.slice();
            d.push.apply(d, arguments); return a.apply(this, d) } }

    function y(a, b) { a = a.split("."); var c = w;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]); for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b }

    function z(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.O = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Rd = function(d, e, f) { for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h]; return b.prototype[e].apply(d, g) } }

    function ac(a) { return a };

    function bc(a) { if (Error.captureStackTrace) Error.captureStackTrace(this, bc);
        else { var b = Error().stack;
            b && (this.stack = b) }
        a && (this.message = String(a)) }
    z(bc, Error);
    bc.prototype.name = "CustomError";
    var cc;

    function dc(a, b) { a = a.split("%s"); for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        bc.call(this, c + a[d]) }
    z(dc, bc);
    dc.prototype.name = "AssertionError";
    var ec = Array.prototype.indexOf ? function(a, b) { return Array.prototype.indexOf.call(a, b, void 0) } : function(a, b) { if (typeof a === r) return typeof b !== r || 1 != b.length ? -1 : a.indexOf(b, 0); for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1 },
        fc = Array.prototype.forEach ? function(a, b, c) { Array.prototype.forEach.call(a, b, c) } : function(a, b, c) { for (var d = a.length, e = typeof a === r ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a) },
        gc = Array.prototype.map ? function(a, b, c) { return Array.prototype.map.call(a, b, c) } :
        function(a, b, c) { for (var d = a.length, e = Array(d), f = typeof a === r ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a)); return e },
        hc = Array.prototype.some ? function(a, b) { return Array.prototype.some.call(a, b, void 0) } : function(a, b) { for (var c = a.length, d = typeof a === r ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1 };

    function ic(a, b) { return 0 <= ec(a, b) }

    function jc(a) { if (!Array.isArray(a))
            for (var b = a.length - 1; 0 <= b; b--) delete a[b];
        a.length = 0 }

    function kc(a, b) { b = ec(a, b); var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1); return c }

    function lc(a) { return Array.prototype.concat.apply([], arguments) }

    function mc(a) { var b = a.length; if (0 < b) { for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d]; return c } return [] }

    function nc(a) { if (!arguments.length) return []; for (var b = [], c = arguments[0].length, d = 1; d < arguments.length; d++) arguments[d].length < c && (c = arguments[d].length); for (d = 0; d < c; d++) { for (var e = [], f = 0; f < arguments.length; f++) e.push(arguments[f][d]);
            b.push(e) } return b }

    function oc(a, b) { return lc.apply([], gc(a, b, void 0)) };

    function pc(a) { a = a.className; return typeof a === r && a.match(/\S+/g) || [] }

    function qc(a, b) { var c = pc(a);
        rc(c, Array.prototype.slice.call(arguments, 1));
        a.className = c.join(" ") }

    function sc(a, b) { var c = pc(a);
        c = tc(c, Array.prototype.slice.call(arguments, 1));
        a.className = c.join(" ") }

    function rc(a, b) { for (var c = 0; c < b.length; c++) ic(a, b[c]) || a.push(b[c]) }

    function tc(a, b) { return a.filter(function(c) { return !ic(b, c) }) }

    function uc(a, b, c) { for (var d = pc(a), e = !1, f = 0; f < d.length; f++) d[f] == b && (d.splice(f--, 1), e = !0);
        e && (d.push(c), a.className = d.join(" ")) }

    function A(a, b) { return ic(pc(a), b) };

    function vc(a) { return function() { return a } }

    function wc() { return null }

    function xc(a) { return a };

    function yc(a, b, c) { for (var d in a) b.call(c, a[d], d, a) }

    function zc(a) { var b = [],
            c = 0,
            d; for (d in a) b[c++] = a[d]; return b }

    function Ac(a) { var b = [],
            c = 0,
            d; for (d in a) b[c++] = d; return b }

    function Bc(a, b) { for (var c in a)
            if (a[c] == b) return !0;
        return !1 }

    function Cc(a) { for (var b in a) return !1; return !0 }

    function Dc(a) { var b = {},
            c; for (c in a) b[c] = a[c]; return b }
    var Ec = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Fc(a, b) { for (var c, d, e = 1; e < arguments.length; e++) { d = arguments[e]; for (c in d) a[c] = d[c]; for (var f = 0; f < Ec.length; f++) c = Ec[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]) } };
    var Gc = { area: !0, base: !0, br: !0, col: !0, command: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 };
    var Hc;

    function Ic() { if (void 0 === Hc) { var a = null,
                b = w.trustedTypes; if (b && b.createPolicy) { try { a = b.createPolicy("goog#html", { createHTML: ac, createScript: ac, createScriptURL: ac }) } catch (c) { w.console && w.console.error(c.message) }
                Hc = a } else Hc = a } return Hc };

    function Jc(a, b) { this.C = a === Kc && b || "";
        this.D = Lc }
    Jc.prototype.ka = !0;
    Jc.prototype.ea = function() { return this.C };

    function Mc(a) { return a instanceof Jc && a.constructor === Jc && a.D === Lc ? a.C : "type_error:Const" }

    function Nc(a) { return new Jc(Kc, a) }
    var Lc = {},
        Kc = {};
    var Oc = {};

    function Pc(a, b) { this.C = b === Oc ? a : "";
        this.ka = !0 }
    Pc.prototype.ea = function() { return this.C.toString() };

    function Qc(a) { return a instanceof Pc && a.constructor === Pc ? a.C : "type_error:SafeScript" }
    Pc.prototype.toString = function() { return this.C.toString() };

    function Rc(a, b) { this.C = b === Sc ? a : "" }
    t = Rc.prototype;
    t.ka = !0;
    t.ea = function() { return this.C.toString() };
    t.Db = !0;
    t.za = function() { return 1 };
    t.toString = function() { return this.C + "" };

    function Tc(a) { return a instanceof Rc && a.constructor === Rc ? a.C : "type_error:TrustedResourceUrl" }
    var Uc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        Sc = {};

    function Vc(a) { var b = Ic();
        a = b ? b.createScriptURL(a) : a; return new Rc(a, Sc) }

    function Wc(a, b, c) { if (null == c) return b; if (typeof c === r) return c ? a + encodeURIComponent(c) : ""; for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) { var e = c[d];
                e = Array.isArray(e) ? e : [e]; for (var f = 0; f < e.length; f++) { var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g))) } }
        return b };

    function Xc(a, b) { return 0 == a.lastIndexOf(b, 0) }
    var C = String.prototype.trim ? function(a) { return a.trim() } : function(a) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1] };

    function Yc(a, b) { if (b) a = a.replace(Zc, "&amp;").replace($c, "&lt;").replace(ad, "&gt;").replace(bd, "&quot;").replace(cd, "&#39;").replace(dd, "&#0;");
        else { if (!ed.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Zc, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace($c, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(ad, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(bd, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(cd, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(dd, "&#0;")) } return a }
    var Zc = /&/g,
        $c = /</g,
        ad = />/g,
        bd = /"/g,
        cd = /'/g,
        dd = /\x00/g,
        ed = /[\x00&<>"']/;

    function fd(a, b) { return a < b ? -1 : a > b ? 1 : 0 };

    function D(a, b) { this.C = b === gd ? a : "" }
    t = D.prototype;
    t.ka = !0;
    t.ea = function() { return this.C.toString() };
    t.Db = !0;
    t.za = function() { return 1 };
    t.toString = function() { return this.C.toString() };

    function hd(a) { return a instanceof D && a.constructor === D ? a.C : "type_error:SafeUrl" }
    var id = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
        jd = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        kd = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function ld(a) { if (!(a instanceof D))
            if (a = typeof a == q && a.ka ? a.ea() : String(a), kd.test(a)) a = new D(a, gd);
            else { a = String(a);
                a = a.replace(/(%0A|%0D)/g, ""); var b = a.match(jd);
                a = b && id.test(b[1]) ? new D(a, gd) : null }
        return a || md }
    var gd = {},
        md = new D(ra, gd);
    var nd = {};

    function od(a, b) { this.C = b === nd ? a : "";
        this.ka = !0 }
    od.prototype.ea = function() { return this.C };
    od.prototype.toString = function() { return this.C.toString() };

    function pd(a) { return a instanceof od && a.constructor === od ? a.C : "type_error:SafeStyle" }

    function qd(a) { var b = "",
            c; for (c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) { if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c); var d = a[c];
                null != d && (d = Array.isArray(d) ? d.map(rd).join(" ") : rd(d), b += c + ":" + d + ";") }
        return b ? new od(b, nd) : sd }
    var sd = new od("", nd);

    function rd(a) { if (a instanceof D) return 'url("' + hd(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        a = a instanceof Jc ? Mc(a) : td(String(a)); if (/[{;}]/.test(a)) throw new dc("Value does not allow [{;}], got: %s.", [a]); return a }

    function td(a) { var b = a.replace(ud, "$1").replace(ud, "$1").replace(vd, "url"); if (wd.test(b)) { if (xd.test(a)) return vb; for (var c = b = !0, d = 0; d < a.length; d++) { var e = a.charAt(d); "'" == e && c ? b = !b : '"' == e && b && (c = !c) } if (!b || !c || !yd(a)) return vb } else return vb; return zd(a) }

    function yd(a) { for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) { var e = a.charAt(d); if ("]" == e) { if (b) return !1;
                b = !0 } else if ("[" == e) { if (!b) return !1;
                b = !1 } else if (!b && !c.test(e)) return !1 } return b }
    var wd = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/,
        vd = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
        ud = /\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|var)\([-+*/0-9a-z.%\[\], ]+\)/g,
        xd = /\/\*/;

    function zd(a) { return a.replace(vd, function(b, c, d, e) { var f = "";
            d = d.replace(/^(['"])(.*)\1$/, function(g, h, k) { f = h; return k });
            b = ld(d).ea(); return c + f + b + f + e }) };
    var Ad = {};

    function Bd(a, b) { this.C = b === Ad ? a : "";
        this.ka = !0 }

    function Cd(a) {
        function b(d) { Array.isArray(d) ? d.forEach(b) : c += Dd(d) } var c = "";
        Array.prototype.forEach.call(arguments, b); return new Bd(c, Ad) }
    Bd.prototype.ea = function() { return this.C };

    function Dd(a) { return a instanceof Bd && a.constructor === Bd ? a.C : "type_error:SafeStyleSheet" }
    Bd.prototype.toString = function() { return this.C.toString() };
    var Ed = new Bd("", Ad);
    var Fd;
    a: { var Gd = w.navigator; if (Gd) { var Hd = Gd.userAgent; if (Hd) { Fd = Hd; break a } }
        Fd = "" }

    function E(a) { return -1 != Fd.indexOf(a) };

    function Id() { return (E("Chrome") || E("CriOS")) && !E(fa) };
    var Jd = {};

    function Kd(a, b, c) { this.C = c === Jd ? a : "";
        this.D = b;
        this.ka = this.Db = !0 }
    Kd.prototype.za = function() { return this.D };
    Kd.prototype.ea = function() { return this.C.toString() };
    Kd.prototype.toString = function() { return this.C.toString() };

    function Ld(a) { return a instanceof Kd && a.constructor === Kd ? a.C : "type_error:SafeHtml" }

    function Md(a) { if (a instanceof Kd) return a; var b = typeof a == q,
            c = null;
        b && a.Db && (c = a.za()); return Nd(Yc(b && a.ka ? a.ea() : String(a)), c) }

    function Od(a) { if (!Pd.test("body")) throw Error(""); if ("BODY" in Qd) throw Error(""); return Rd("body", {}, a) }

    function Sd(a) { var b = { nonce: Td(void 0) }; for (d in b)
            if (Object.prototype.hasOwnProperty.call(b, d)) { var c = d.toLowerCase(); if ("language" == c || "src" == c || "text" == c || "type" == c) throw Error(""); }
        var d = "";
        a = lc(a); for (c = 0; c < a.length; c++) d += Qc(a[c]).toString();
        a = Nd(d, 0); return Rd("script", b, a) }

    function Ud(a) {
        function b(f) { Array.isArray(f) ? f.forEach(b) : (f = Md(f), e.push(Ld(f).toString()), f = f.za(), 0 == d ? d = f : 0 != f && d != f && (d = null)) } var c = Md(Vd),
            d = c.za(),
            e = [];
        a.forEach(b); return Nd(e.join(Ld(c).toString()), d) }

    function Wd(a) { return Ud(Array.prototype.slice.call(arguments)) }

    function Nd(a, b) { var c = Ic();
        a = c ? c.createHTML(a) : a; return new Kd(a, b, Jd) }

    function Rd(a, b, c) {
        var d = null,
            e = "";
        if (b)
            for (h in b)
                if (Object.prototype.hasOwnProperty.call(b, h)) {
                    if (!Pd.test(h)) throw Error("");
                    var f = b[h];
                    if (null != f) {
                        var g = h;
                        if (f instanceof Jc) f = Mc(f);
                        else if (g.toLowerCase() == kb) { if (!Vb(f)) throw Error("");
                            f instanceof od || (f = qd(f));
                            f = pd(f) } else { if (/^on/i.test(g)) throw Error(""); if (g.toLowerCase() in Xd)
                                if (f instanceof Rc) f = Tc(f).toString();
                                else if (f instanceof D) f = hd(f);
                            else if (typeof f === r) f = ld(f).ea();
                            else throw Error(""); }
                        f.ka && (f = f.ea());
                        g = g + '="' + Yc(String(f)) +
                            '"';
                        e += " " + g
                    }
                }
        var h = "<" + a + e;
        null == c ? c = [] : Array.isArray(c) || (c = [c]);
        !0 === Gc[a.toLowerCase()] ? h += ">" : (d = Wd(c), h += ">" + Ld(d).toString() + "</" + a + ">", d = d.za());
        (a = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? d = 0 : d = null);
        return Nd(h, d)
    }
    var Pd = /^[a-zA-Z0-9-]+$/,
        Xd = { action: !0, cite: !0, data: !0, formaction: !0, href: !0, manifest: !0, poster: !0, src: !0 },
        Qd = { APPLET: !0, BASE: !0, EMBED: !0, IFRAME: !0, LINK: !0, MATH: !0, META: !0, OBJECT: !0, SCRIPT: !0, STYLE: !0, SVG: !0, TEMPLATE: !0 },
        Yd = Nd("<!DOCTYPE html>", 0),
        Vd = new Kd(w.trustedTypes && w.trustedTypes.emptyHTML || "", 0, Jd),
        Zd = Nd("<br>", 0);

    function $d(a, b, c) { Mc(a);
        Mc(a); return Nd(b, c || null) }

    function ae(a, b) { Mc(a);
        Mc(a);
        b = (a = Ic()) ? a.createScript(b) : b; return new Pc(b, Oc) }

    function be(a) { var b = Nc("Output of CSS sanitizer");
        Mc(b);
        Mc(b); return new od(a, nd) }

    function ce(a, b) { Mc(a);
        Mc(a); return Vc(b) };
    var de = function(a) { var b = !1,
            c; return function() { b || (c = a(), b = !0); return c } }(function() { var a = document.createElement(l),
            b = document.createElement(l);
        b.appendChild(document.createElement(l));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = Ld(Vd); return !b.parentElement });

    function G(a, b) { if (de())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = Ld(b) }

    function ee(a, b) { a.src = Tc(b);
        (b = Td(a.ownerDocument && a.ownerDocument.defaultView)) && a.setAttribute("nonce", b) }
    var fe = /^[\w+/_-]+[=]{0,2}$/;

    function Td(a) { a = (a || w).document; return a.querySelector ? (a = a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && fe.test(a) ? a : "" : "" };

    function ge(a) { he(); return Nd(a, null) }
    var he = Sb;

    function ie() { return function(a) { return 500 <= je(a) ? (a.responseText.length ? document.body.innerHTML = a.responseText : window.alert(LayoutsMessages.SERVER_ERROR), !1) : !0 } };

    function ke(a, b) {
        var c = H,
            d = a.ownerDocument;
        b = b._GetHelper();
        var e = b._GetData(),
            f = c._GetAllData();
        a = le(d, a, l, "widget-wrap1");
        a = le(d, a, l, "widget-wrap2");
        a = le(d, a, l, "widget-wrap3");
        var g = le(d, a, l, "widget-content");
        if (a = e.version && 1 < e.version) g.className += " visibility", le(d, g, l, "layout-widget-state " + (e.isVisible ? qb : "not-visible")).setAttribute("title", e.visibilityTooltipMessage);
        var h = le(d, g, l, "layout-title");
        if (e[ab]) {
            var k = le(d, g, l, $a);
            k.appendChild(d.createTextNode(e[ab]));
            k.setAttribute("title",
                e[$a])
        }
        h.appendChild(d.createTextNode(e["layout-title"]));
        e = le(d, g, "a", "editlink");
        var n = b._GenerateWidgetMetadata();
        e.target = va;
        e.onclick = function() { return c._PopupConfig(d.getElementById(n.instanceId)) };
        a && (e.className += " icon");
        e.appendChild(d.createTextNode(f.messages.edit || "Edit"))
    }

    function le(a, b, c, d) { a = a.createElement(c);
        a.className = d;
        b.appendChild(a); return a };

    function me(a) { return a = Yc(a, void 0) }
    var ne = String.prototype.repeat ? function(a, b) { return a.repeat(b) } : function(a, b) { return Array(b + 1).join(a) };

    function oe(a) { return String(a).replace(/\-([a-z])/g, function(b, c) { return c.toUpperCase() }) }

    function pe(a) { return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) { return c + d.toUpperCase() }) };

    function qe(a) { qe[" "](a); return a }
    qe[" "] = Sb;

    function re(a, b) { var c = se; return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a) };
    var te = E("Opera"),
        I = E("Trident") || E("MSIE"),
        ue = E(fa),
        ve = E("Gecko") && !(-1 != Fd.toLowerCase().indexOf("webkit") && !E(fa)) && !(E("Trident") || E("MSIE")) && !E(fa),
        we = -1 != Fd.toLowerCase().indexOf("webkit") && !E(fa);

    function xe() { var a = w.document; return a ? a.documentMode : void 0 }
    var ye;
    a: { var ze = "",
            Ae = function() { var a = Fd; if (ve) return /rv:([^\);]+)(\)|;)/.exec(a); if (ue) return /Edge\/([\d\.]+)/.exec(a); if (I) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a); if (we) return /WebKit\/(\S+)/.exec(a); if (te) return /(?:Version)[ \/]?(\S+)/.exec(a) }();Ae && (ze = Ae ? Ae[1] : ""); if (I) { var Be = xe(); if (null != Be && Be > parseFloat(ze)) { ye = String(Be); break a } }
        ye = ze }
    var Ce = ye,
        se = {};

    function De(a) { return re(a, function() { for (var b = 0, c = C(String(Ce)).split("."), d = C(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) { var g = c[f] || "",
                    h = d[f] || "";
                do { g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""]; if (0 == g[0].length && 0 == h[0].length) break;
                    b = fd(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || fd(0 == g[2].length, 0 == h[2].length) || fd(g[2], h[2]);
                    g = g[3];
                    h = h[3] } while (0 == b) } return 0 <= b }) }
    var Ee;
    if (w.document && I) { var Fe = xe();
        Ee = Fe ? Fe : parseInt(Ce, 10) || void 0 } else Ee = void 0;
    var Ge = Ee;
    try {
        (new self.OffscreenCanvas(0, 0)).getContext("2d") } catch (a) {}
    var He = !I || 9 <= Number(Ge),
        Ie = I || we;

    function Je(a, b) { this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0 }
    Je.prototype.ceil = function() { this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y); return this };
    Je.prototype.floor = function() { this.x = Math.floor(this.x);
        this.y = Math.floor(this.y); return this };
    Je.prototype.round = function() { this.x = Math.round(this.x);
        this.y = Math.round(this.y); return this };

    function Ke(a, b) { this.width = a;
        this.height = b }
    t = Ke.prototype;
    t.aspectRatio = function() { return this.width / this.height };
    t.la = function() { return !(this.width * this.height) };
    t.ceil = function() { this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height); return this };
    t.floor = function() { this.width = Math.floor(this.width);
        this.height = Math.floor(this.height); return this };
    t.round = function() { this.width = Math.round(this.width);
        this.height = Math.round(this.height); return this };

    function J(a) { return Le(document, a) }

    function Le(a, b) { return typeof b === r ? a.getElementById(b) : b }

    function Me(a, b) { var c = b || document; return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : Ne(document, "*", a, b) }

    function K(a, b) { var c = b || document; if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
        else { c = document; var d = b || c;
            a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : Ne(c, "*", a, b)[0] || null } return a || null }

    function Ne(a, b, c, d) { a = d || a;
        b = b && "*" != b ? String(b).toUpperCase() : ""; if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : "")); if (c && a.getElementsByClassName) { a = a.getElementsByClassName(c); if (b) { d = {}; for (var e = 0, f = 0, g; g = a[f]; f++) b == g.nodeName && (d[e++] = g);
                d.length = e; return d } return a }
        a = a.getElementsByTagName(b || "*"); if (c) { d = {}; for (f = e = 0; g = a[f]; f++) b = g.className, typeof b.split == m && ic(b.split(/\s+/), c) && (d[e++] = g);
            d.length = e; return d } return a }

    function Oe(a, b) { yc(b, function(c, d) { c && typeof c == q && c.ka && (c = c.ea());
            d == kb ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Pe.hasOwnProperty(d) ? a.setAttribute(Pe[d], c) : Xc(d, "aria-") || Xc(d, "data-") ? a.setAttribute(d, c) : a[d] = c }) }
    var Pe = { cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", nonce: "nonce", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width" };

    function Qe(a, b, c) { return Re(document, arguments) }

    function Re(a, b) { var c = String(b[0]),
            d = b[1]; if (!He && d && (d.name || d.type)) { c = ["<", c];
            d.name && c.push(' name="', me(d.name), '"'); if (d.type) { c.push(' type="', me(d.type), '"'); var e = {};
                Fc(e, d);
                delete e.type;
                d = e }
            c.push(">");
            c = c.join("") }
        c = Se(a, c);
        d && (typeof d === r ? c.className = d : Array.isArray(d) ? c.className = d.join(" ") : Oe(c, d));
        2 < b.length && Te(a, c, b); return c }

    function Te(a, b, c) {
        function d(h) { h && b.appendChild(typeof h === r ? a.createTextNode(h) : h) } for (var e = 2; e < c.length; e++) { var f = c[e]; if (!Ub(f) || Vb(f) && 0 < f.nodeType) d(f);
            else { a: { if (f && typeof f.length == db) { if (Vb(f)) { var g = typeof f.item == m || typeof f.item == r; break a } if (typeof f === m) { g = typeof f.item == m; break a } }
                    g = !1 }
                fc(g ? mc(f) : f, d) } } }

    function Se(a, b) { b = String(b); "application/xhtml+xml" === a.contentType && (b = b.toLowerCase()); return a.createElement(b) }

    function Ue(a) { for (var b; b = a.firstChild;) a.removeChild(b) }

    function Ve(a) { return a && a.parentNode ? a.parentNode.removeChild(a) : null }

    function We(a) { var b; if (Ie && !(I && De("9") && !De("10") && w.SVGElement && a instanceof w.SVGElement) && (b = a.parentElement)) return b;
        b = a.parentNode; return Vb(b) && 1 == b.nodeType ? b : null }

    function Xe(a, b) { if ("textContent" in a) a.textContent = b;
        else if (3 == a.nodeType) a.data = String(b);
        else if (a.firstChild && 3 == a.firstChild.nodeType) { for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
            a.firstChild.data = String(b) } else Ue(a), a.appendChild((9 == a.nodeType ? a : a.ownerDocument || a.document).createTextNode(String(b))) }
    var Ye = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 },
        Ze = { IMG: " ", BR: "\n" };

    function $e(a, b, c) { if (!(a.nodeName in Ye))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Ze) b.push(Ze[a.nodeName]);
        else
            for (a = a.firstChild; a;) $e(a, b, c), a = a.nextSibling }

    function af(a, b, c, d) { if (!b && !c) return null; var e = b ? String(b).toUpperCase() : null; return bf(a, function(f) { return (!e || f.nodeName == e) && (!c || typeof f.className === r && ic(f.className.split(/\s+/), c)) }, d) }

    function bf(a, b, c) { for (var d = 0; a && (null == c || d <= c);) { if (b(a)) return a;
            a = a.parentNode;
            d++ } return null }

    function cf(a) { this.D = a || w.document || document }
    cf.prototype.Xa = function() { return Le(this.D, void 0) };
    cf.prototype.C = function(a, b, c) { return Re(this.D, arguments) };

    function df(a, b) { return Se(a.D, b) }
    cf.prototype.appendChild = function(a, b) { a.appendChild(b) };
    cf.prototype.contains = function(a, b) { if (!a || !b) return !1; if (a.contains && 1 == b.nodeType) return a == b || a.contains(b); if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16); for (; b && a != b;) b = b.parentNode; return b == a };

    function ef() { this.N = this.N;
        this.ga = this.ga }
    ef.prototype.N = !1;
    ef.prototype.isDisposed = function() { return this.N };
    ef.prototype.xa = function() { this.N || (this.N = !0, this.W()) };
    ef.prototype.W = function() { if (this.ga)
            for (; this.ga.length;) this.ga.shift()() };
    var ff = function() { if (!w.addEventListener || !Object.defineProperty) return !1; var a = !1,
            b = Object.defineProperty({}, "passive", { get: function() { a = !0 } }); try { w.addEventListener("test", Sb, b), w.removeEventListener("test", Sb, b) } catch (c) {} return a }();

    function gf(a, b) { this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.Ja = !1 }
    gf.prototype.stopPropagation = function() { this.Ja = !0 };
    gf.prototype.preventDefault = function() { this.defaultPrevented = !0 };

    function hf(a, b) { gf.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.key = "";
        this.charCode = this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.pointerId = 0;
        this.pointerType = "";
        this.C = null;
        a && this.init(a, b) }
    z(hf, gf);
    var lf = { 2: "touch", 3: "pen", 4: "mouse" };
    hf.prototype.init = function(a, b) {
        var c = this.type = a.type,
            d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        if (b = a.relatedTarget) { if (ve) { a: { try { qe(b.nodeName); var e = !0; break a } catch (f) {}
                    e = !1 }
                e || (b = null) } } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY =
            d.screenY || 0) : (this.offsetX = we || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = we || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId =
            a.pointerId || 0;
        this.pointerType = typeof a.pointerType === r ? a.pointerType : lf[a.pointerType] || "";
        this.state = a.state;
        this.C = a;
        a.defaultPrevented && hf.O.preventDefault.call(this)
    };
    hf.prototype.stopPropagation = function() { hf.O.stopPropagation.call(this);
        this.C.stopPropagation ? this.C.stopPropagation() : this.C.cancelBubble = !0 };
    hf.prototype.preventDefault = function() { hf.O.preventDefault.call(this); var a = this.C;
        a.preventDefault ? a.preventDefault() : a.returnValue = !1 };
    var mf = "closure_listenable_" + (1E6 * Math.random() | 0);

    function nf(a) { return !(!a || !a[mf]) };
    var of = 0;

    function pf(a, b, c, d, e) { this.listener = a;
        this.C = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.ab = e;
        this.key = ++of;
        this.Ka = this.Va = !1 }

    function qf(a) { a.Ka = !0;
        a.listener = null;
        a.C = null;
        a.src = null;
        a.ab = null };

    function rf(a) { this.src = a;
        this.C = {};
        this.D = 0 }
    rf.prototype.add = function(a, b, c, d, e) { var f = a.toString();
        a = this.C[f];
        a || (a = this.C[f] = [], this.D++); var g = sf(a, b, d, e); - 1 < g ? (b = a[g], c || (b.Va = !1)) : (b = new pf(b, this.src, f, !!d, e), b.Va = c, a.push(b)); return b };

    function tf(a, b) { var c = b.type; if (!(c in a.C)) return !1; var d = kc(a.C[c], b);
        d && (qf(b), 0 == a.C[c].length && (delete a.C[c], a.D--)); return d }

    function uf(a) { var b = 0,
            c; for (c in a.C) { for (var d = a.C[c], e = 0; e < d.length; e++) ++b, qf(d[e]);
            delete a.C[c];
            a.D-- } }

    function vf(a, b, c, d, e) { a = a.C[b.toString()];
        b = -1;
        a && (b = sf(a, c, d, e)); return -1 < b ? a[b] : null }

    function sf(a, b, c, d) { for (var e = 0; e < a.length; ++e) { var f = a[e]; if (!f.Ka && f.listener == b && f.capture == !!c && f.ab == d) return e } return -1 };
    var wf = "closure_lm_" + (1E6 * Math.random() | 0),
        xf = {},
        yf = 0;

    function L(a, b, c, d, e) { if (d && d.once) return zf(a, b, c, d, e); if (Array.isArray(b)) { for (var f = 0; f < b.length; f++) L(a, b[f], c, d, e); return null }
        c = Af(c);
        nf(a) ? f = a.da.add(String(b), c, !1, Vb(d) ? !!d.capture : !!d, e) : f = Bf(a, b, c, !1, d, e); return f }

    function Bf(a, b, c, d, e, f) { if (!b) throw Error("Invalid event type"); var g = Vb(e) ? !!e.capture : !!e,
            h = Cf(a);
        h || (a[wf] = h = new rf(a));
        c = h.add(b, c, d, g, f); if (c.C) return c;
        d = Df();
        c.C = d;
        d.src = a;
        d.listener = c; if (a.addEventListener) ff || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent) a.attachEvent(Ef(b.toString()), d);
        else if (a.addListener && a.removeListener) a.addListener(d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        yf++; return c }

    function Df() {
        function a(c) { return b.call(a.src, a.listener, c) } var b = Ff; return a }

    function zf(a, b, c, d, e) { if (Array.isArray(b)) { for (var f = 0; f < b.length; f++) zf(a, b[f], c, d, e); return null }
        c = Af(c); return nf(a) ? a.da.add(String(b), c, !0, Vb(d) ? !!d.capture : !!d, e) : Bf(a, b, c, !0, d, e) }

    function Gf(a, b, c, d, e) { if (Array.isArray(b))
            for (var f = 0; f < b.length; f++) Gf(a, b[f], c, d, e);
        else d = Vb(d) ? !!d.capture : !!d, c = Af(c), nf(a) ? (a = a.da, b = String(b).toString(), b in a.C && (f = a.C[b], c = sf(f, c, d, e), -1 < c && (qf(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.C[b], a.D--)))) : a && (a = Cf(a)) && (c = vf(a, b, c, d, e)) && Hf(c) }

    function Hf(a) { if (typeof a === db || !a || a.Ka) return !1; var b = a.src; if (nf(b)) return tf(b.da, a); var c = a.type,
            d = a.C;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Ef(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        yf--;
        (c = Cf(b)) ? (tf(c, a), 0 == c.D && (c.src = null, b[wf] = null)) : qf(a); return !0 }

    function If(a) { if (a)
            if (nf(a)) a.da && uf(a.da);
            else if (a = Cf(a)) { var b = 0,
                c; for (c in a.C)
                for (var d = a.C[c].concat(), e = 0; e < d.length; ++e) Hf(d[e]) && ++b } }

    function Ef(a) { return a in xf ? xf[a] : xf[a] = "on" + a }

    function Ff(a, b) { if (a.Ka) a = !0;
        else { b = new hf(b, this); var c = a.listener,
                d = a.ab || a.src;
            a.Va && Hf(a);
            a = c.call(d, b) } return a }

    function Cf(a) { a = a[wf]; return a instanceof rf ? a : null }
    var Jf = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function Af(a) { if (typeof a === m) return a;
        a[Jf] || (a[Jf] = function(b) { return a.handleEvent(b) }); return a[Jf] };

    function Kf(a) { ef.call(this);
        this.D = a;
        this.C = {} }
    z(Kf, ef);
    var Lf = [];

    function Mf(a, b, c, d) { Array.isArray(c) || (c && (Lf[0] = c.toString()), c = Lf); for (var e = 0; e < c.length; e++) { var f = L(b, c[e], d || a.handleEvent, !1, a.D || a); if (!f) break;
            a.C[f.key] = f } }

    function Nf(a, b, c, d, e, f) { if (Array.isArray(c))
            for (var g = 0; g < c.length; g++) Nf(a, b, c[g], d, e, f);
        else d = d || a.handleEvent, e = Vb(e) ? !!e.capture : !!e, f = f || a.D || a, d = Af(d), e = !!e, c = nf(b) ? vf(b.da, String(c), d, e, f) : b ? (b = Cf(b)) ? vf(b, c, d, e, f) : null : null, c && (Hf(c), delete a.C[c.key]) }

    function Of(a) { yc(a.C, function(b, c) { this.C.hasOwnProperty(c) && Hf(b) }, a);
        a.C = {} }
    Kf.prototype.W = function() { Kf.O.W.call(this);
        Of(this) };
    Kf.prototype.handleEvent = function() { throw Error("EventHandler.handleEvent not implemented"); };

    function N() { ef.call(this);
        this.da = new rf(this);
        this.fd = this;
        this.wb = null }
    z(N, ef);
    N.prototype[mf] = !0;
    N.prototype.addEventListener = function(a, b, c, d) { L(this, a, b, c, d) };
    N.prototype.removeEventListener = function(a, b, c, d) { Gf(this, a, b, c, d) };

    function O(a, b) { var c = a.wb; if (c) { var d = []; for (var e = 1; c; c = c.wb) d.push(c), ++e }
        a = a.fd;
        c = b.type || b;
        typeof b === r ? b = new gf(b, a) : b instanceof gf ? b.target = b.target || a : (e = b, b = new gf(c, a), Fc(b, e));
        e = !0; if (d)
            for (var f = d.length - 1; !b.Ja && 0 <= f; f--) { var g = b.currentTarget = d[f];
                e = Pf(g, c, !0, b) && e }
        b.Ja || (g = b.currentTarget = a, e = Pf(g, c, !0, b) && e, b.Ja || (e = Pf(g, c, !1, b) && e)); if (d)
            for (f = 0; !b.Ja && f < d.length; f++) g = b.currentTarget = d[f], e = Pf(g, c, !1, b) && e }
    N.prototype.W = function() { N.O.W.call(this);
        this.da && uf(this.da);
        this.wb = null };

    function Pf(a, b, c, d) { b = a.da.C[String(b)]; if (!b) return !0;
        b = b.concat(); for (var e = !0, f = 0; f < b.length; ++f) { var g = b[f]; if (g && !g.Ka && g.capture == c) { var h = g.listener,
                    k = g.ab || g.src;
                g.Va && tf(a.da, g);
                e = !1 !== h.call(k, d) && e } } return e && !d.defaultPrevented };

    function Qf(a, b) { this.F = a;
        this.G = b;
        this.D = 0;
        this.C = null }
    Qf.prototype.get = function() { if (0 < this.D) { this.D--; var a = this.C;
            this.C = a.next;
            a.next = null } else a = this.F(); return a };

    function Rf(a, b) { a.G(b);
        100 > a.D && (a.D++, b.next = a.C, a.C = b) };
    var Sf;

    function Tf() {
        var a = w.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !E("Presto") && (a = function() {
            var e = Se(document, "IFRAME");
            e.style.display = p;
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var g = "callImmediate" + Math.random(),
                h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = x(function(k) { if (("*" == h || k.origin == h) && k.data == g) this.port1.onmessage() }, this);
            f.addEventListener("message",
                e, !1);
            this.port1 = {};
            this.port2 = { postMessage: function() { f.postMessage(g, h) } }
        });
        if ("undefined" !== typeof a && !E("Trident") && !E("MSIE")) { var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() { if (void 0 !== c.next) { c = c.next; var e = c.Xb;
                    c.Xb = null;
                    e() } }; return function(e) { d.next = { Xb: e };
                d = d.next;
                b.port2.postMessage(0) } }
        return function(e) { w.setTimeout(e, 0) }
    };

    function Uf(a) { w.setTimeout(function() { throw a; }, 0) };

    function Vf() { this.D = this.C = null }
    Vf.prototype.add = function(a, b) { var c = Wf.get();
        c.set(a, b);
        this.D ? this.D.next = c : this.C = c;
        this.D = c };

    function Xf() { var a = Yf,
            b = null;
        a.C && (b = a.C, a.C = a.C.next, a.C || (a.D = null), b.next = null); return b }
    var Wf = new Qf(function() { return new Zf }, function(a) { return a.reset() });

    function Zf() { this.next = this.scope = this.C = null }
    Zf.prototype.set = function(a, b) { this.C = a;
        this.scope = b;
        this.next = null };
    Zf.prototype.reset = function() { this.next = this.scope = this.C = null };

    function $f(a, b) { ag || bg();
        cg || (ag(), cg = !0);
        Yf.add(a, b) }
    var ag;

    function bg() { if (w.Promise && w.Promise.resolve) { var a = w.Promise.resolve(void 0);
            ag = function() { a.then(dg) } } else ag = function() { var b = dg;
            typeof w.setImmediate !== m || w.Window && w.Window.prototype && !E(fa) && w.Window.prototype.setImmediate == w.setImmediate ? (Sf || (Sf = Tf()), Sf(b)) : w.setImmediate(b) } }
    var cg = !1,
        Yf = new Vf;

    function dg() { for (var a; a = Xf();) { try { a.C.call(a.scope) } catch (b) { Uf(b) }
            Rf(Wf, a) }
        cg = !1 };

    function eg(a) { if (!a) return !1; try { return !!a.$goog_Thenable } catch (b) { return !1 } };

    function fg(a) { this.C = 0;
        this.N = void 0;
        this.G = this.D = this.F = null;
        this.J = this.K = !1; if (a != Sb) try { var b = this;
            a.call(void 0, function(c) { gg(b, 2, c) }, function(c) { gg(b, 3, c) }) } catch (c) { gg(this, 3, c) } }

    function hg() { this.next = this.F = this.D = this.G = this.C = null;
        this.J = !1 }
    hg.prototype.reset = function() { this.F = this.D = this.G = this.C = null;
        this.J = !1 };
    var ig = new Qf(function() { return new hg }, function(a) { a.reset() });

    function jg(a, b, c) { var d = ig.get();
        d.G = a;
        d.D = b;
        d.F = c; return d }

    function kg() { var a, b, c = new fg(function(d, e) { a = d;
            b = e }); return new lg(c, a, b) }
    fg.prototype.then = function(a, b, c) { return mg(this, typeof a === m ? a : null, typeof b === m ? b : null, c) };
    fg.prototype.$goog_Thenable = !0;
    fg.prototype.cancel = function(a) { if (0 == this.C) { var b = new ng(a);
            $f(function() { og(this, b) }, this) } };

    function og(a, b) { if (0 == a.C)
            if (a.F) { var c = a.F; if (c.D) { for (var d = 0, e = null, f = null, g = c.D; g && (g.J || (d++, g.C == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                    e && (0 == c.C && 1 == d ? og(c, b) : (f ? (d = f, d.next == c.G && (c.G = d), d.next = d.next.next) : pg(c), qg(c, e, 3, b))) }
                a.F = null } else gg(a, 3, b) }

    function rg(a, b) { a.D || 2 != a.C && 3 != a.C || sg(a);
        a.G ? a.G.next = b : a.D = b;
        a.G = b }

    function mg(a, b, c, d) { var e = jg(null, null, null);
        e.C = new fg(function(f, g) { e.G = b ? function(h) { try { var k = b.call(d, h);
                    f(k) } catch (n) { g(n) } } : f;
            e.D = c ? function(h) { try { var k = c.call(d, h);
                    void 0 === k && h instanceof ng ? g(h) : f(k) } catch (n) { g(n) } } : g });
        e.C.F = a;
        rg(a, e); return e.C }
    fg.prototype.R = function(a) { this.C = 0;
        gg(this, 2, a) };
    fg.prototype.T = function(a) { this.C = 0;
        gg(this, 3, a) };

    function gg(a, b, c) { if (0 == a.C) { a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
            a.C = 1;
            a: { var d = c,
                    e = a.R,
                    f = a.T; if (d instanceof fg) { rg(d, jg(e || Sb, f || null, a)); var g = !0 } else if (eg(d)) d.then(e, f, a), g = !0;
                else { if (Vb(d)) try { var h = d.then; if (typeof h === m) { tg(d, h, e, f, a);
                            g = !0; break a } } catch (k) { f.call(a, k);
                        g = !0; break a }
                    g = !1 } }
            g || (a.N = c, a.C = b, a.F = null, sg(a), 3 != b || c instanceof ng || ug(a, c)) } }

    function tg(a, b, c, d, e) {
        function f(k) { h || (h = !0, d.call(e, k)) }

        function g(k) { h || (h = !0, c.call(e, k)) } var h = !1; try { b.call(a, g, f) } catch (k) { f(k) } }

    function sg(a) { a.K || (a.K = !0, $f(a.M, a)) }

    function pg(a) { var b = null;
        a.D && (b = a.D, a.D = b.next, b.next = null);
        a.D || (a.G = null); return b }
    fg.prototype.M = function() { for (var a; a = pg(this);) qg(this, a, this.C, this.N);
        this.K = !1 };

    function qg(a, b, c, d) { if (3 == c && b.D && !b.J)
            for (; a && a.J; a = a.F) a.J = !1; if (b.C) b.C.F = null, vg(b, c, d);
        else try { b.J ? b.G.call(b.F) : vg(b, c, d) } catch (e) { wg.call(null, e) }
        Rf(ig, b) }

    function vg(a, b, c) { 2 == b ? a.G.call(a.F, c) : a.D && a.D.call(a.F, c) }

    function ug(a, b) { a.J = !0;
        $f(function() { a.J && wg.call(null, b) }) }
    var wg = Uf;

    function ng(a) { bc.call(this, a) }
    z(ng, bc);
    ng.prototype.name = "cancel";

    function lg(a, b, c) { this.promise = a;
        this.D = b;
        this.C = c };

    function xg(a, b) { N.call(this);
        this.D = a || 1;
        this.C = b || w;
        this.F = x(this.Pd, this);
        this.G = Date.now() }
    z(xg, N);
    t = xg.prototype;
    t.Pa = !1;
    t.ma = null;
    t.Pd = function() { if (this.Pa) { var a = Date.now() - this.G;
            0 < a && a < .8 * this.D ? this.ma = this.C.setTimeout(this.F, this.D - a) : (this.ma && (this.C.clearTimeout(this.ma), this.ma = null), O(this, "tick"), this.Pa && (yg(this), this.start())) } };
    t.start = function() { this.Pa = !0;
        this.ma || (this.ma = this.C.setTimeout(this.F, this.D), this.G = Date.now()) };

    function yg(a) { a.Pa = !1;
        a.ma && (a.C.clearTimeout(a.ma), a.ma = null) }
    t.W = function() { xg.O.W.call(this);
        yg(this);
        delete this.C };

    function zg(a, b, c) { if (typeof a === m) c && (a = x(a, c));
        else if (a && typeof a.handleEvent == m) a = x(a.handleEvent, a);
        else throw Error("Invalid listener argument"); return 2147483647 < Number(b) ? -1 : w.setTimeout(a, b || 0) };

    function Ag() { this.K = {};
        this.C = {};
        this.F = {};
        this.G = null;
        this.D = [] }
    Tb(Ag);

    function Bg(a) { var b = Ag.Ya(),
            c = b.K,
            d = b.C;
        d.lightbox ? a(d.lightbox[1]) : c.lightbox ? c.lightbox.push([1, a]) : (c.lightbox = [
            [1, a]
        ], typeof b.G === r ? Cg(b, "lightbox") : b.D.push("lightbox")) }

    function Dg() { return function() { var a = arguments;
            Bg(function(b) { b.apply(null, a) }) } }
    Ag.prototype.J = function(a, b) { return a + "_" + b + ".js" };

    function Eg(a) { eval(a) }
    Ag.prototype.init = function(a, b) { y("__gjsload__", Eg);
        this.G = a.replace(/\.js$/, "");
        b && (this.J = b);
        this.D.forEach(function(c) { Cg(this, c) }, this);
        jc(this.D) };

    function Cg(a, b) { zg(function() { if (!this.C[b]) { var c = this.J(this.G, b),
                    d = Bc(this.F, c);
                this.F[b] = c;
                d || (d = Qe("SCRIPT", { type: mb }), he(), c = Vc(c), ee(d, c), document.body.appendChild(d)) } }, 0, a) };

    function Fg(a, b) { this.C = a[w.Symbol.iterator]();
        this.D = b;
        this.F = 0 }
    Fg.prototype[Symbol.iterator] = function() { return this };
    Fg.prototype.next = function() { var a = this.C.next(); return { value: a.done ? void 0 : this.D.call(void 0, a.value, this.F++), done: a.done } };

    function Gg(a, b) { return new Fg(a, b) };
    var Hg = "StopIteration" in w ? w.StopIteration : { message: "StopIteration", stack: "" };

    function Ig() {}
    Ig.prototype.next = function() { return Ig.prototype.C.call(this) };
    Ig.prototype.C = function() { throw Hg; };
    Ig.prototype.sa = function() { return this };

    function Jg(a) { if (a instanceof Kg || a instanceof Lg || a instanceof Mg) return a; if (typeof a.next == m) return new Kg(function() { return Ng(a) }); if (typeof a[Symbol.iterator] == m) return new Kg(function() { return a[Symbol.iterator]() }); if (typeof a.sa == m) return new Kg(function() { return Ng(a.sa()) }); throw Error("Not an iterator or iterable."); }

    function Ng(a) { if (!(a instanceof Ig)) return a; var b = !1; return { next: function() { for (var c; !b;) try { c = a.next(); break } catch (d) { if (d !== Hg) throw d;
                    b = !0 }
                return { value: c, done: b } } } }

    function Kg(a) { this.C = a }
    Kg.prototype.sa = function() { return new Lg(this.C()) };
    Kg.prototype[Symbol.iterator] = function() { return new Mg(this.C()) };
    Kg.prototype.F = function() { return new Mg(this.C()) };

    function Lg(a) { this.D = a }
    u(Lg, Ig);
    Lg.prototype.C = function() { var a = this.D.next(); if (a.done) throw Hg; return a.value };
    Lg.prototype.next = function() { return Lg.prototype.C.call(this) };
    Lg.prototype[Symbol.iterator] = function() { return new Mg(this.D) };
    Lg.prototype.F = function() { return new Mg(this.D) };

    function Mg(a) { Kg.call(this, function() { return a });
        this.D = a }
    u(Mg, Kg);
    Mg.prototype.next = function() { return this.D.next() };

    function Og(a) { try { return w.JSON.parse(a) } catch (b) {}
        a = String(a); if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try { return eval("(" + a + ")") } catch (b) {}
        throw Error("Invalid JSON string: " + a); };

    function Pg() {}
    Pg.prototype.C = null;

    function Qg(a) { var b;
        (b = a.C) || (b = {}, Rg(a) && (b[0] = !0, b[1] = !0), b = a.C = b); return b };
    var Sg;

    function Tg() {}
    z(Tg, Pg);

    function Ug(a) { return (a = Rg(a)) ? new ActiveXObject(a) : new XMLHttpRequest }

    function Rg(a) { if (!a.D && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) { for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) { var d = b[c]; try { return new ActiveXObject(d), a.D = d } catch (e) {} } throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"); } return a.D }
    Sg = new Tg;

    function Vg(a, b) { this.C = {};
        this.D = [];
        this.F = this.size = 0; var c = arguments.length; if (1 < c) { if (c % 2) throw Error("Uneven number of arguments"); for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]) } else if (a)
            if (a instanceof Vg)
                for (c = a.ia(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d]) }
    t = Vg.prototype;
    t.V = function() { return this.size };
    t.X = function() { Wg(this); for (var a = [], b = 0; b < this.D.length; b++) a.push(this.C[this.D[b]]); return a };
    t.ia = function() { Wg(this); return this.D.concat() };
    t.has = function(a) { return Xg(this.C, a) };
    t.la = function() { return 0 == this.size };

    function Yg(a, b) { return Xg(a.C, b) ? (delete a.C[b], --a.size, a.F++, a.D.length > 2 * a.size && Wg(a), !0) : !1 }

    function Wg(a) { if (a.size != a.D.length) { for (var b = 0, c = 0; b < a.D.length;) { var d = a.D[b];
                Xg(a.C, d) && (a.D[c++] = d);
                b++ }
            a.D.length = c } if (a.size != a.D.length) { var e = {}; for (c = b = 0; b < a.D.length;) d = a.D[b], Xg(e, d) || (a.D[c++] = d, e[d] = 1), b++;
            a.D.length = c } }
    t.get = function(a, b) { return Xg(this.C, a) ? this.C[a] : b };
    t.set = function(a, b) { Xg(this.C, a) || (this.size += 1, this.D.push(a), this.F++);
        this.C[a] = b };
    t.forEach = function(a, b) { for (var c = this.ia(), d = 0; d < c.length; d++) { var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this) } };
    t.keys = function() { return Jg(this.sa(!0)).F() };
    t.values = function() { return Jg(this.sa(!1)).F() };
    t.entries = function() { var a = this; return Gg(this.keys(), function(b) { return [b, a.get(b)] }) };
    t.sa = function(a) { Wg(this); var b = 0,
            c = this.F,
            d = this,
            e = new Ig;
        e.C = function() { if (c != d.F) throw Error("The map has changed since the iterator was created"); if (b >= d.D.length) throw Hg; var f = d.D[b++]; return a ? f : d.C[f] };
        e.next = e.C.bind(e); return e };

    function Xg(a, b) { return Object.prototype.hasOwnProperty.call(a, b) };

    function Zg(a) { if (a.X && typeof a.X == m) return a.X(); if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set) return Array.from(a.values()); if (typeof a === r) return a.split(""); if (Ub(a)) { for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]); return b } return zc(a) }

    function $g(a) { if (a.ia && typeof a.ia == m) return a.ia(); if (!a.X || typeof a.X != m) { if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys()); if (!("undefined" !== typeof Set && a instanceof Set)) { if (Ub(a) || typeof a === r) { var b = [];
                    a = a.length; for (var c = 0; c < a; c++) b.push(c); return b } return Ac(a) } } }

    function ah(a, b, c) { if (a.forEach && typeof a.forEach == m) a.forEach(b, c);
        else if (Ub(a) || typeof a === r) Array.prototype.forEach.call(a, b, c);
        else
            for (var d = $g(a), e = Zg(a), f = e.length, g = 0; g < f; g++) b.call(c, e[g], d && d[g], a) };
    var bh = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function ch(a, b) { if (a) { a = a.split("&"); for (var c = 0; c < a.length; c++) { var d = a[c].indexOf("="),
                    e = null; if (0 <= d) { var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1) } else f = a[c];
                b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "") } } };

    function dh(a) { N.call(this);
        this.headers = new Vg;
        this.ca = a || null;
        this.D = !1;
        this.Z = this.C = null;
        this.ub = "";
        this.J = 0;
        this.G = this.tb = this.T = this.ra = !1;
        this.R = 0;
        this.Y = null;
        this.M = "";
        this.fb = this.K = !1 }
    z(dh, N);
    var eh = /^https?$/i,
        fh = ["POST", "PUT"],
        gh = [];

    function hh(a, b, c, d) { var e = new dh;
        gh.push(e);
        b && e.da.add(Ba, b, !1, void 0, void 0);
        e.da.add(eb, e.rd, !0, void 0, void 0);
        ih(e, a, c, d, void 0) }
    t = dh.prototype;
    t.rd = function() { this.xa();
        kc(gh, this) };
    t.fc = function() { return this.M };
    t.hc = function() { return this.K };

    function ih(a, b, c, d, e) {
        if (a.C) throw Error("[goog.net.XhrIo] Object is active with another request=" + a.ub + "; newUri=" + b);
        c = c ? c.toUpperCase() : ia;
        a.ub = b;
        a.J = 0;
        a.ra = !1;
        a.D = !0;
        a.C = a.ca ? Ug(a.ca) : Ug(Sg);
        a.Z = a.ca ? Qg(a.ca) : Qg(Sg);
        a.C.onreadystatechange = x(a.kc, a);
        try { a.tb = !0, a.C.open(c, String(b), !0), a.tb = !1 } catch (g) { jh(a); return }
        b = d || "";
        var f = new Vg(a.headers);
        e && ah(e, function(g, h) { f.set(h, g) });
        e = f.ia().find(function(g) { return "content-type" == g.toLowerCase() });
        d = w.FormData && b instanceof w.FormData;
        !ic(fh, c) ||
            e || d || f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        f.forEach(function(g, h) { this.C.setRequestHeader(h, g) }, a);
        a.M && (a.C.responseType = a.M);
        "withCredentials" in a.C && a.C.withCredentials !== a.K && (a.C.withCredentials = a.K);
        try { kh(a), 0 < a.R && (a.fb = lh(a.C), a.fb ? (a.C.timeout = a.R, a.C.ontimeout = x(a.ua, a)) : a.Y = zg(a.ua, a.R, a)), a.T = !0, a.C.send(b), a.T = !1 } catch (g) { jh(a) }
    }

    function lh(a) { return I && De(9) && typeof a.timeout === db && void 0 !== a.ontimeout }
    t.ua = function() { "undefined" != typeof Rb && this.C && (this.J = 8, O(this, "timeout"), this.abort(8)) };

    function jh(a) { a.D = !1;
        a.C && (a.G = !0, a.C.abort(), a.G = !1);
        a.J = 5;
        mh(a);
        nh(a) }

    function mh(a) { a.ra || (a.ra = !0, O(a, Ba), O(a, Sa)) }
    t.abort = function(a) { this.C && this.D && (this.D = !1, this.G = !0, this.C.abort(), this.G = !1, this.J = a || 7, O(this, Ba), O(this, "abort"), nh(this)) };
    t.W = function() { this.C && (this.D && (this.D = !1, this.G = !0, this.C.abort(), this.G = !1), nh(this, !0));
        dh.O.W.call(this) };
    t.kc = function() { this.isDisposed() || (this.tb || this.T || this.G ? oh(this) : this.Ed()) };
    t.Ed = function() { oh(this) };

    function oh(a) { if (a.D && "undefined" != typeof Rb && (!a.Z[1] || 4 != (a.C ? a.C.readyState : 0) || 2 != ph(a)))
            if (a.T && 4 == (a.C ? a.C.readyState : 0)) zg(a.kc, 0, a);
            else if (O(a, "readystatechange"), 4 == (a.C ? a.C.readyState : 0)) { a.D = !1; try { qh(a) ? (O(a, Ba), O(a, lb)) : (a.J = 6, mh(a)) } finally { nh(a) } } }

    function nh(a, b) { if (a.C) { kh(a); var c = a.C,
                d = a.Z[0] ? Sb : null;
            a.C = null;
            a.Z = null;
            b || O(a, eb); try { c.onreadystatechange = d } catch (e) {} } }

    function kh(a) { a.C && a.fb && (a.C.ontimeout = null);
        a.Y && (w.clearTimeout(a.Y), a.Y = null) }

    function qh(a) { var b = ph(a);
        a: switch (b) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                var c = !0; break a;
            default:
                c = !1 }
        if (!c) { if (b = 0 === b) a = String(a.ub).match(bh)[1] || null, !a && w.self && w.self.location && (a = w.self.location.protocol, a = a.substr(0, a.length - 1)), b = !eh.test(a ? a.toLowerCase() : "");
            c = b } return c }

    function ph(a) { try { return 2 < (a.C ? a.C.readyState : 0) ? a.C.status : -1 } catch (b) { return -1 } }

    function rh(a) { try { return a.C ? a.C.responseText : "" } catch (b) { return "" } };

    function sh() { this.D = [];
        this.C = [] }

    function th(a) { 0 === a.D.length && (a.D = a.C, a.D.reverse(), a.C = []); return a.D.pop() }
    sh.prototype.V = function() { return this.D.length + this.C.length };
    sh.prototype.la = function() { return 0 === this.D.length && 0 === this.C.length };
    sh.prototype.contains = function(a) { return ic(this.D, a) || ic(this.C, a) };
    sh.prototype.X = function() { for (var a = [], b = this.D.length - 1; 0 <= b; --b) a.push(this.D[b]); var c = this.C.length; for (b = 0; b < c; ++b) a.push(this.C[b]); return a };

    function uh() { this.C = new Vg;
        this.size = 0 }

    function vh(a) { var b = typeof a; return b == q && a || b == m ? "o" + (Object.prototype.hasOwnProperty.call(a, Wb) && a[Wb] || (a[Wb] = ++Xb)) : b.substr(0, 1) + a }
    t = uh.prototype;
    t.V = function() { return this.C.size };
    t.add = function(a) { this.C.set(vh(a), a);
        this.size = this.C.size };

    function wh(a, b) { b = vh(b);
        b = Yg(a.C, b);
        a.size = a.C.size; return b }
    t.la = function() { return 0 === this.C.size };
    t.has = function(a) { a = vh(a); return this.C.has(a) };
    t.contains = function(a) { a = vh(a); return this.C.has(a) };
    t.X = function() { return this.C.X() };
    t.values = function() { return this.C.values() };
    t.sa = function() { return this.C.sa(!1) };
    uh.prototype[Symbol.iterator] = function() { return this.values() };

    function xh(a, b) { ef.call(this);
        this.M = a || 0;
        this.F = b || 10; if (this.M > this.F) throw Error("[goog.structs.Pool] Min can not be greater than max");
        this.C = new sh;
        this.D = new uh;
        this.delay = 0;
        this.J = null;
        this.Sa() }
    z(xh, ef);
    t = xh.prototype;
    t.Za = function() { var a = Date.now(); if (!(null != this.J && a - this.J < this.delay)) { for (var b; 0 < this.C.V() && (b = th(this.C), !this.Eb(b));) this.Sa();!b && this.V() < this.F && (b = this.Ab());
            b && (this.J = a, this.D.add(b)); return b } };
    t.Fa = function(a) { wh(this.D, a);
        this.Eb(a) && this.V() < this.F ? this.C.C.push(a) : yh(a) };
    t.Sa = function() { for (var a = this.C; this.V() < this.M;) { var b = this.Ab();
            a.C.push(b) } for (; this.V() > this.F && 0 < this.C.V();) yh(th(a)) };
    t.Ab = function() { return {} };

    function yh(a) { if (typeof a.xa == m) a.xa();
        else
            for (var b in a) a[b] = null }
    t.Eb = function(a) { return typeof a.qd == m ? a.qd() : !0 };
    t.contains = function(a) { return this.C.contains(a) || this.D.contains(a) };
    t.V = function() { return this.C.V() + this.D.V() };
    t.la = function() { return this.C.la() && this.D.la() };
    t.W = function() { xh.O.W.call(this); if (0 < this.D.V()) throw Error("[goog.structs.Pool] Objects not released");
        delete this.D; for (var a = this.C; !a.la();) yh(th(a));
        delete this.C };

    function zh(a, b) { this.C = a;
        this.D = b };

    function Ah(a) { this.C = []; if (a) a: { if (a instanceof Ah) { var b = a.ia();
                a = a.X(); if (0 >= this.V()) { for (var c = this.C, d = 0; d < b.length; d++) c.push(new zh(b[d], a[d])); break a } } else b = Ac(a), a = zc(a); for (d = 0; d < b.length; d++) this.insert(b[d], a[d]) } }
    t = Ah.prototype;
    t.insert = function(a, b) { var c = this.C;
        c.push(new zh(a, b));
        a = c.length - 1;
        b = this.C; for (c = b[a]; 0 < a;) { var d = a - 1 >> 1; if (b[d].C > c.C) b[a] = b[d], a = d;
            else break }
        b[a] = c };
    t.X = function() { for (var a = this.C, b = [], c = a.length, d = 0; d < c; d++) b.push(a[d].D); return b };
    t.ia = function() { for (var a = this.C, b = [], c = a.length, d = 0; d < c; d++) b.push(a[d].C); return b };
    t.V = function() { return this.C.length };
    t.la = function() { return 0 === this.C.length };

    function Bh() { Ah.call(this) }
    z(Bh, Ah);

    function Ch(a, b) { this.K = void 0;
        this.G = new Bh;
        xh.call(this, a, b) }
    z(Ch, xh);
    t = Ch.prototype;
    t.Za = function(a, b) { if (!a) return (a = Ch.O.Za.call(this)) && this.delay && (this.K = w.setTimeout(x(this.$a, this), this.delay)), a;
        this.G.insert(void 0 !== b ? b : 100, a);
        this.$a() };
    t.$a = function() { for (var a = this.G; 0 < a.V();) { var b = this.Za(); if (b) { var c = a,
                    d = c.C,
                    e = d.length; var f = d[0]; if (0 >= e) f = void 0;
                else { if (1 == e) jc(d);
                    else { d[0] = d.pop();
                        d = 0;
                        c = c.C;
                        e = c.length; for (var g = c[d]; d < e >> 1;) { var h = 2 * d + 1,
                                k = 2 * d + 2;
                            h = k < e && c[k].C < c[h].C ? k : h; if (c[h].C > g.C) break;
                            c[d] = c[h];
                            d = h }
                        c[d] = g }
                    f = f.D }
                f.apply(this, [b]) } else break } };
    t.Fa = function(a) { Ch.O.Fa.call(this, a);
        this.$a() };
    t.Sa = function() { Ch.O.Sa.call(this);
        this.$a() };
    t.W = function() { Ch.O.W.call(this);
        w.clearTimeout(this.K);
        jc(this.G.C);
        this.G = null };

    function Dh(a, b, c, d) { this.R = a;
        this.T = !!d;
        Ch.call(this, b, c) }
    z(Dh, Ch);
    Dh.prototype.Ab = function() { var a = new dh,
            b = this.R;
        b && b.forEach(function(c, d) { a.headers.set(d, c) });
        this.T && (a.K = !0); return a };
    Dh.prototype.Eb = function(a) { return !a.isDisposed() && !a.C };

    function Eh(a, b, c, d, e, f) { N.call(this);
        this.G = void 0 !== a ? a : 1;
        this.J = void 0 !== e ? Math.max(0, e) : 0;
        this.K = !!f;
        this.D = new Dh(b, c, d, f);
        this.C = new Vg;
        this.F = new Kf(this) }
    z(Eh, N);
    var Fh = [eb, Ba, lb, Sa, "abort", "timeout"];

    function Gh(a, b, c, d, e, f) { if (a.C.get(b)) throw Error("[goog.net.XhrManager] ID in use");
        c = new Hh(c, x(a.R, a, b), d, e, f, a.G, a.K);
        a.C.set(b, c);
        b = x(a.M, a, b);
        a.D.Za(b, null) }
    Eh.prototype.abort = function(a, b) { var c = this.C.get(a); if (c) { var d = c.cb;
            c.Ub = !0;
            b && (d && (Nf(this.F, d, Fh, c.Ib), zf(d, eb, function() { var e = this.D;
                wh(e.D, d) && e.Fa(d) }, !1, this)), Yg(this.C, a));
            d && d.abort() } };
    Eh.prototype.M = function(a, b) { var c = this.C.get(a);
        c && !c.cb ? (Mf(this.F, b, Fh, c.Ib), b.R = Math.max(0, this.J), b.M = c.fc(), b.K = c.hc(), c.cb = b, O(this, new Ih(eb, this, a, b)), Jh(this, a, b), c.Ub && b.abort()) : (a = this.D, wh(a.D, b) && a.Fa(b)) };
    Eh.prototype.R = function(a, b) { var c = b.target; switch (b.type) {
            case eb:
                Jh(this, a, c); break;
            case Ba:
                a: { var d = this.C.get(a); if (7 == c.J || qh(c) || d.Ta > d.ib)
                        if (O(this, new Ih(Ba, this, a, c)), d && (d.Zb = !0, d.Yb)) { a = d.Yb.call(c, b); break a }
                    a = null }
                return a;
            case lb:
                O(this, new Ih(lb, this, a, c)); break;
            case "timeout":
            case Sa:
                b = this.C.get(a);
                b.Ta > b.ib && O(this, new Ih(Sa, this, a, c)); break;
            case "abort":
                O(this, new Ih("abort", this, a, c)) } return null };

    function Jh(a, b, c) { var d = a.C.get(b);!d || d.Zb || d.Ta > d.ib ? (d && (Nf(a.F, c, Fh, d.Ib), Yg(a.C, b)), a = a.D, wh(a.D, c) && a.Fa(c)) : (d.Ta++, ih(c, d.getUrl(), d.Cd, d.Cb(), d.Dc)) }
    Eh.prototype.W = function() { Eh.O.W.call(this);
        this.D.xa();
        this.D = null;
        this.F.xa();
        this.F = null; var a = this.C;
        a.C = {};
        a.D.length = 0;
        a.size = 0;
        a.F = 0;
        this.C = null };

    function Ih(a, b, c, d) { gf.call(this, a, b);
        this.id = c;
        this.cb = d }
    z(Ih, gf);

    function Hh(a, b, c, d, e, f, g) { this.C = a;
        this.Cd = c || ia;
        this.F = d;
        this.Dc = null;
        this.ib = void 0 !== f ? f : 1;
        this.Ta = 0;
        this.Ub = this.Zb = !1;
        this.Ib = b;
        this.Yb = e;
        this.D = !!g;
        this.cb = null }
    Hh.prototype.getUrl = function() { return this.C };
    Hh.prototype.Cb = function() { return this.F };
    Hh.prototype.hc = function() { return this.D };
    Hh.prototype.fc = function() { return "" };

    function Kh(a, b, c, d, e) { this.D = a;
        this.J = b;
        this.C = c || null;
        this.data = d || null; if (e) { if (this.F = e, "displayModeSnippet" != e && e != Oa && e != Pa && e != Qa) throw "bad display mode: " + e; } else this.F = Qa;
        this.G = !1 }
    Kh.prototype.K = function() { return this.D };

    function Lh(a) { this.J = !0;
        this.L = a;
        this.D = null }

    function P(a, b) { return document.getElementById(a.L.D + "_" + b) }

    function Mh(a, b) { a = P(a, b); if (!a) throw "did not find element for id " + b; return a }
    Lh.prototype.G = function() { return this.L.data };
    Lh.prototype.F = function() { var a = {};
        a.type = this.D.Oa();
        a.instanceId = this.L.D;
        a.sectionId = this.L.J;
        a.actionUrl = H.xb;
        a.quickEditUrl = H.ac + "&widgetType=" + this.D.Oa() + "&widgetId=" + this.L.D + "&sectionId=" + this.L.J + ba + H.Lb; return a };
    Lh.prototype.wa = function(a, b, c, d) { b = b || {};
        window.__wavt && (b.xssi_token = window.__wavt);
        H.wa(a, b, this.L.D, this.D.Oa(), c, d) };

    function je(a) { var b = -1; try { b = a.status } catch (c) {} return b }

    function H() {}
    H.Cc = function(a, b) { H.va = {};
        H.ac = a;
        H.xb = b;
        H.Ga = {};
        H.eb = new Eh;
        H.jc = 0;
        H.Gb = 0;
        L(H.eb, eb, function() { H.Gb++ });
        L(H.eb, Ba, function() { H.Gb-- }) };
    H.Vc = function(a, b) { H.mc = a;
        H.lc = b };
    H.dd = function() { var a = H.uc();
        document.body.appendChild(a) };
    H.Yc = function(a) { H.dd(); if (window.parent == window) { var b = "Preview";
            a && (b = a);
            a = H.tc(b);
            document.body.appendChild(a[0]);
            document.body.appendChild(a[1]) } };
    H.Ic = va;
    H.rc = va;
    H.Lb = "editWidget";
    H.xc = function() { return H.xb };
    H.Wc = function(a, b) { H.Fb = a;
        H.Gd = b };
    H.zc = function() { return H.Fb };
    H.Xc = function(a) { H.Qd = a };
    H.Nb = function() { return H.Qd };
    H.Uc = function(a) { H.Ga = a };
    H.wc = function() { var a = {},
            b; for (b in H.Ga) { var c = H.Ga[b];
            a[c.name] = c.data }
        c = {}; for (b in H.va) c[b] = H.va[b].H.L.data;
        a.widgets = c; return a };
    H.Rb = function(a, b) { var c = new Lh(b);
        a = new window[a](c);
        c.D = a;
        H.va[b.D] = a;
        H.Kb(a); return a };
    H.Nc = function(a, b) { a = H.Rb(a, b);
        a.H.L.G = !0; return a };
    H.Kb = function(a) { var b = a.H;
        b.L.F != Qa && (b.L.F == Oa && a.ha(), a.H.J = !1) };
    H.Ba = function(a) { return H.va ? H.va[a] : null };
    H.sb = function(a, b, c, d, e) { var f = "";
        d && (f = "&widgetId=" + d);
        a = H.ac + ba + a + "&sectionId=" + b + "&widgetType=" + c + f; if (window.name == e) return window.location.replace(a), window.focus(), window;
        e = window.open(a, e, "width=570,height=600,left=75,top=20,resizable=yes,scrollbars=yes");
        e.focus(); return e };
    H.Lc = function(a) { var b = a.getAttribute("id"),
            c = a.parentNode.getAttribute("id"),
            d = a.getAttribute("widgetType"); if (H.lc && H.lc(c, d, b)) return !1; if (a = H.Ba(b)) { var e = a.H.C; if (null != e && !e.closed) return e.focus(), !1 }
        b = H.sb(H.Lb, c, d, b, "config" + b);
        a && (a.H.C = b); return !1 };
    H.Mc = function(a) { var b = a.parentNode.getAttribute("id"); if (H.mc && H.mc(b)) return !1;
        H.sb(H.rc, b, a.getAttribute("widgetType"), a.getAttribute("id"), H.Ic); return !1 };
    H.vc = function(a, b, c) { H.qa(c, c.LayoutsMessages.DELETING);
        H.Tb("delete", {}, a, b) };
    H.Rc = function(a, b) { var c = window,
            d = document.getElementById("sectionId").value;
        a.sectionid = d;
        H.qa(c, c.LayoutsMessages.SAVING);
        H.Tb("addnew", a, "", b) };
    H.Sc = function(a, b, c) { b = H.Ba(b);
        b.H.L.G ? H.Rc(a, c) : (c = b.H, b = window, H.qa(b, b.LayoutsMessages.SAVING), c.wa(Ca, a)) };
    H.wa = function(a, b, c, d, e, f) { H.Sb(H.xb, a, b, c, d, e, f) };
    H.Tb = function(a, b, c, d) { H.Fb && (b.security_token = H.Gd, H.Sb(H.Fb, a, b, c, d, void 0)) };
    H.Sb = function(a, b, c, d, e, f, g) {
        function h() { n(this.C) && window.eval(rh(this)) }
        b = ["action=" + encodeURIComponent(b), "widgetId=" + encodeURIComponent(d), "widgetType=" + encodeURIComponent(e), "responseType=js"];
        for (var k in c)
            if (typeof c[k] == q)
                for (d = c[k], e = 0; e < d.length; ++e) b.push(encodeURIComponent(k) + "=" + encodeURIComponent(d[e]));
            else b.push(encodeURIComponent(k) + "=" + encodeURIComponent(c[k]));
        var n = f || ie();
        g == ia ? (a = 0 <= a.indexOf("?") ? a + "&" : a + "?", Gh(H.eb, "" + H.jc++, a + b.join("&"), ia, void 0, h)) : Gh(H.eb, "" + H.jc++,
            a, "POST", b.join("&"), h)
    };
    H.Tc = function(a, b) { a && (a = H.Ba(a)) && (a.H.C = b) };
    H.Ma = function(a, b) { 0 == H.Gb ? a.setTimeout(function() { a.close() }, b) : a.setTimeout(function() { H.Ma(a, b) }, 200) };
    H.Fc = function(a, b) { a && (H.Ma(a, 100), H.ed(a, b)) };
    H.ed = function(a, b) { if (a) { var c = a.document.getElementById(jb);
            c && (c = c.innerHTML);
            c && a && a.opener.parent && a.opener.parent.editor && a.opener.parent.editor.SetSaveMessage(c, b) } };
    H.ja = function(a, b, c) { a = H.va[a]; if (null != c.errors) { var d = a ? a.H.C : null;
            d || (d = window);
            H.qa(d, c.errors);
            a && a.Ca ? a.Ca(b, c, d) : H.Ca(c, d) } else a.ja(b, c) };
    H.Ca = function(a, b) { a = a["error-details"]; for (var c in a) Nh(c, a[c], b.document) };

    function Oh(a, b) { H.qa(a.C, b[ib]);
        H.Mb(a.L.D, "_OnWidgetConfigured", function(c) { window.opener._WidgetManager._OnWidgetConfigured(c, b) }) }
    H.Jc = function(a, b) { window.parent && window.parent.editor && b ? H.Qb(a, b) : window.location.replace(window.location.href) };
    H.Qb = function(a, b) { var c = H.Ba(a);
        c.H.L.data = b.data;
        a = document.getElementById(a);
        Ue(a);
        ke(a, c);
        c.H.C = null };
    H.Bc = function(a, b, c) {
        var d = c[ib];
        if (null != c.errors) H.qa(window, c.errors), H.Ca(c, window);
        else if ("addnew" == b) {
            if (H.hb(window)) { if (window.opener && window.opener.parent) var e = window.opener.parent;
                e && e.editor && e.editor.HandleAddNewWidget(c) }
            H.qa(window, d);
            null == window.opener ? (b = "/rearrange?blogID=" + c.blogID, a = window.location, b instanceof D || b instanceof D || (b = typeof b == q && b.ka ? b.ea() : String(b), kd.test(b) || (b = ra), b = new D(b, gd)), a.href = hd(b)) : e && e._WidgetManager ? e._WidgetManager._KillPopupDelay(window) :
                H.Ma(window, 100)
        } else c = H.va[a], "delete" == b && (H.qa(c.H.C, d), H.Mb(a, "_OnWidgetDeleted"))
    };
    H.Kc = function(a) { var b = H.Ba(a);
        b && (b.H.L.F == Pa ? top.editor.HandleDeleteWidget(b.H.L.C) : (b = b.H.L.C, b.parentNode.removeChild(b)), delete H.va[a]) };
    H.Mb = function(a, b, c) { if (H.hb(window)) { var d = window.opener;
            c || (c = d._WidgetManager[b]);
            c(a);
            d._WidgetManager ? d._WidgetManager._KillPopupDelay(window, a) : H.Ma(window, 100) } else a = H.Nb() + "?widgetId=" + a, a += "&func=" + encodeURIComponent(b), window.location.replace(a) };
    H.hb = function(a) { var b = !1; try { if (a.opener) { var c = "X" + a.opener.document.domain;
                c && "X" != c && (b = !0) } } catch (d) {} return b };
    H.Qc = "status-msg-yellow-on-white";
    H.qa = function(a, b) { a || (a = self); var c = a.document.getElementById(jb);
        c && (b = ge(b), G(c, b));
        (a = a.document.getElementById(ib)) && qc(a, H.Qc) };
    H.Na = function(a, b) { if (A(a, b)) return a; if (a)
            for (var c = a.childNodes.length, d = 0; d < c; d++) { var e = H.Na(a.childNodes.item(d), b); if (e) return e }
        return null };
    H.uc = function() { var a = window.document.createElement(l);
        a.className = "blogger-clickTrap singleton-element";
        a.style.position = "fixed";
        a.style.top = "0";
        a.style.left = "0";
        a.style.width = "100%";
        a.style.height = "100%";
        I && !De(7) && (a.style.height = "expression(this.parentNode.clientHeight)");
        a.style.zIndex = "1000";
        a.style.cursor = "default";
        a.onclick = H.rb;
        a.onmousedown = H.rb;
        a.onmouseup = H.rb;
        a.style.background = "white";
        a.style.filter = "alpha(opacity=1)";
        a.style.opacity = ".01";
        a.textContent = "\u00a0"; return a };
    H.tc = function(a) { var b = window.document,
            c = H.Jb(b, a);
        a = H.Jb(b, a);
        c.style.backgroundColor = "#000";
        c.style.border = "1px solid #aaa";
        I && (c.style.filter = ' progid:DXImageTransform.Microsoft.Matrix(sizingMethod="auto expand", M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678) alpha(opacity=50)');
        c.style.opacity = ".5";
        a.style.border = "1px solid transparent";
        c.style.zIndex = 1200;
        a.style.zIndex = 1200; return [c, a] };
    H.Jb = function(a, b) {
        a = a.createElement(l);
        a.style.position = "absolute";
        a.style.top = "75px";
        a.style.left = "-225px";
        a.style.width = "600px";
        a.style.height = "28px";
        a.style.margin = "0";
        a.style.padding = "10px";
        a.style.fontSize = "24px";
        a.style.textAlign = "center";
        a.style.color = "#fff";
        a.style.fontFamily = '"trebuchet ms",verdana,arial,sans-serif';
        I && (a.style.top = "-140px", a.style.left = "-140px", a.style.filter = ' progid:DXImageTransform.Microsoft.Matrix(sizingMethod="auto expand", M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)');
        a.style.MozTransform = gb;
        a.style.MozTransformOrigin = "50% 0";
        a.style.WebkitTransform = gb;
        a.style.WebkitTransformOrigin = "50% 0";
        b = ge(b);
        G(a, b);
        a.className = "singleton-element";
        return a
    };
    H.rb = function(a) { a || (a = window.event);
        a && (a.cancelBubble = !0, a.stopPropagation && a.stopPropagation()); return !1 };

    function Ph(a) { if (a)
            if ("checkbox" == a.type) { if (a.checked) return a.value } else { if (null == a.type) { for (var b = [], c = 0; c < a.length; c++) a[c].checked && (b[b.length] = a[c].value); switch (b.length) {
                        case 0:
                            return;
                        case 1:
                            return b[0];
                        default:
                            return b } } return a.value } }

    function Qh(a, b) { b || (b = document); return b.getElementById("errormessage_" + a) }

    function Nh(a, b, c) { if (a = Qh(a, c)) b = ge(b), G(a, b), a.className = "errorbox-bad errormsg" }

    function Rh() { this.C = []; for (var a = 0; a < H.Ga.length; ++a) this.C[this.C.length] = H.Ga[a] }

    function Sh(a, b) { null == b && (b = ""); for (var c = a.C.length - 1; 0 <= c; --c)
            if (a.C[c].name == b) return a.C[c].data;
        return null }

    function Th(a, b) { var c = Sh(a, b); if (null !== c) return c; var d = b.split("."); if (1 == d.length) return c = Sh(a, ""), c[b];
        c = Sh(a, d[0]);
        b = 0;
        c ? b = 1 : c = Sh(a, ""); for (a = b; a < d.length; a++) { if (null == c) return null;
            c = c[d[a]] } return c }

    function Q(a, b) { this.M = a;
        this.H = b }
    t = Q.prototype;
    t.Oa = function() { return this.M };
    t.yc = function() { return this.H };
    t.ja = function(a, b) { a == Ca && Oh(this.H, b) };
    t.Ca = function(a, b, c) { H.Ca(b, c) };
    t.ha = function() {};
    y("_WidgetManager", H);
    H._SetOpenWidgetDialogs = H.Vc;
    H._Init = H.Cc;
    H._SetPageActionUrl = H.Wc;
    H._GetPageActionUrl = H.zc;
    H._SetWidgetRefreshUrl = H.Xc;
    H._GetWidgetRefreshUrl = H.Nb;
    H._GetCallbackUrl = H.xc;
    H._DeleteWidgetFromPage = H.vc;
    H._DisplayWidget = H.Kb;
    H._GetWidget = H.Ba;
    H._HandleControllerResult = H.ja;
    H._HandlePageActionResult = H.Bc;
    H._IsOpenerReachable = H.hb;
    H._SetConfigWin = H.Tc;
    H._SetDataContext = H.Uc;
    H._SetupPreview = H.Yc;
    H._RegisterWidget = H.Rb;
    H._RegisterNewWidget = H.Nc;
    H._PopupPaneFromParams = H.sb;
    H._PopupConfig = H.Lc;
    H._PopupToolbox = H.Mc;
    H._KillPopupDelay = H.Fc;
    H._OnWidgetConfigured = H.Jc;
    H._OnWidgetConfiguredWithData = H.Qb;
    H._OnWidgetDeleted = H.Kc;
    y("_WidgetInfo", Kh);
    Kh.prototype._getInstanceId = Kh.prototype.K;
    Q.prototype._GetHelper = Q.prototype.yc;
    Lh.prototype._GetData = Lh.prototype.G;
    Lh.prototype._GenerateWidgetMetadata = Lh.prototype.F;
    H._GetAllData = H.wc;
    y("widget_module_provide", function(a, b, c) { var d = Ag.Ya(),
            e = d.C,
            f = d.K;
        e[a] || (e[a] = {}); if (c) e[a][b] = c;
        else if (f[a]) { for (b = 0; b < f[a].length; ++b)(0, f[a][b][1])(e[a][f[a][b][0]]);
            delete f[a];
            delete d.F[a] } });

    function Uh(a) { Q.call(this, "AdSense", a);
        this.H = a }
    u(Uh, Q);
    y("_AdSenseView", Uh);
    var Vh = {};

    function Wh(a) {
        if (I && !De(9)) return [0, 0, 0, 0];
        var b = Vh.hasOwnProperty(a) ? Vh[a] : null;
        if (b) return b;
        65536 < Object.keys(Vh).length && (Vh = {});
        var c = [0, 0, 0, 0];
        b = Xh(a, /\\[0-9A-Fa-f]{6}\s?/g);
        b = Xh(b, /\\[0-9A-Fa-f]{1,5}\s/g);
        b = Xh(b, /\\./g);
        b = b.replace(/:not\(([^\)]*)\)/g, "     $1 ");
        b = b.replace(/{[^]*/gm, "");
        b = Yh(b, c, /(\[[^\]]+\])/g, 2);
        b = Yh(b, c, /(#[^\#\s\+>~\.\[:]+)/g, 1);
        b = Yh(b, c, /(\.[^\s\+>~\.\[:]+)/g, 2);
        b = Yh(b, c, /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi, 3);
        b = Yh(b, c, /(:[\w-]+\([^\)]*\))/gi, 2);
        b = Yh(b, c, /(:[^\s\+>~\.\[:]+)/g, 2);
        b = b.replace(/[\*\s\+>~]/g, " ");
        b = b.replace(/[#\.]/g, " ");
        Yh(b, c, /([^\s\+>~\.\[:]+)/g, 3);
        b = c;
        return Vh[a] = b
    }

    function Yh(a, b, c, d) { return a.replace(c, function(e) { b[d] += 1; return Array(e.length + 1).join(" ") }) }

    function Xh(a, b) { return a.replace(b, function(c) { return Array(c.length + 1).join("A") }) };
    var Zh = { rgb: !0, rgba: !0, alpha: !0, rect: !0, image: !0, "linear-gradient": !0, "radial-gradient": !0, "repeating-linear-gradient": !0, "repeating-radial-gradient": !0, "cubic-bezier": !0, matrix: !0, perspective: !0, rotate: !0, rotate3d: !0, rotatex: !0, rotatey: !0, steps: !0, rotatez: !0, scale: !0, scale3d: !0, scalex: !0, scaley: !0, scalez: !0, skew: !0, skewx: !0, skewy: !0, translate: !0, translate3d: !0, translatex: !0, translatey: !0, translatez: !0 },
        $h = /[\n\f\r"'()*<>]/g,
        ai = {
            "\n": "%0a",
            "\f": "%0c",
            "\r": "%0d",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "*": "%2a",
            "<": "%3c",
            ">": "%3e"
        };

    function bi(a) { return ai[a] }

    function ci(a, b, c) {
        b = C(b);
        if ("" == b) return null;
        var d = String(b.substr(0, 4)).toLowerCase();
        if (0 == ("url(" < d ? -1 : "url(" == d ? 0 : 1)) { if (!b.endsWith(")") || 1 < (b ? b.split("(").length - 1 : 0) || 1 < (b ? b.split(")").length - 1 : 0) || !c) a = null;
            else { a: for (b = b.substring(4, b.length - 1), d = 0; 2 > d; d++) { var e = "\"'".charAt(d); if (b.charAt(0) == e && b.charAt(b.length - 1) == e) { b = b.substring(1, b.length - 1); break a } }
                a = c ? (a = c(b, a)) && hd(a) != ra ? 'url("' + hd(a).replace($h, bi) + '")' : null : null } return a }
        if (0 < b.indexOf("(")) {
            if (/"|'/.test(b)) return null;
            for (a = /([\-\w]+)\(/g; c = a.exec(b);)
                if (!(c[1].toLowerCase() in Zh)) return null
        }
        return b
    };

    function di(a, b) { a = w[a]; return a && a.prototype ? (b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get || null : null }

    function ei(a, b) { return (a = w[a]) && a.prototype && a.prototype[b] || null }
    var fi = di(ha, ta) || di("Node", ta),
        gi = ei(ha, Ya),
        hi = ei(ha, Va),
        ii = ei(ha, hb),
        ji = ei(ha, fb),
        ki = ei(ha, Wa),
        li = ei(ha, "matches") || ei(ha, cb),
        mi = di("Node", "nodeName"),
        ni = di("Node", "nodeType"),
        oi = di("Node", "parentNode"),
        pi = di("HTMLElement", kb) || di(ha, kb),
        qi = di("HTMLStyleElement", "sheet"),
        ri = ei(da, Xa),
        si = ei(da, "setProperty");

    function ti(a, b, c, d) { if (a) return a.apply(b);
        a = b[c]; if (!d(a)) throw Error(ea); return a }

    function ui(a, b, c, d) { if (a) return a.apply(b, d); if (I && 10 > document.documentMode) { if (!b[c].call) throw Error("IE Clobbering detected"); } else if (typeof b[c] != m) throw Error(ea); return b[c].apply(b, d) }

    function vi(a) { return ti(fi, a, ta, function(b) { return b instanceof NamedNodeMap }) }

    function wi(a, b, c) { try { ui(ii, a, hb, [b, c]) } catch (d) { if (-1 == d.message.indexOf("A security problem occurred")) throw d; } }

    function xi(a) { return ti(pi, a, kb, function(b) { return b instanceof CSSStyleDeclaration }) }

    function yi(a) { return ti(qi, a, "sheet", function(b) { return b instanceof CSSStyleSheet }) }

    function zi(a) { return ti(mi, a, "nodeName", function(b) { return typeof b == r }) }

    function Ai(a) { return ti(ni, a, "nodeType", function(b) { return typeof b == db }) }

    function Bi(a) { return ti(oi, a, "parentNode", function(b) { return !(b && typeof b.name == r && b.name && "parentnode" == b.name.toLowerCase()) }) }

    function Ci(a, b) { return ui(ri, a, a.getPropertyValue ? Xa : Va, [b]) || "" }

    function Di(a, b, c) { ui(si, a, a.setProperty ? "setProperty" : hb, [b, c]) };
    var Ei = I && 10 > document.documentMode ? null : /\s*([^\s'",]+[^'",]*(('([^'\r\n\f\\]|\\[^])*')|("([^"\r\n\f\\]|\\[^])*")|[^'",])*)/g,
        Fi = { "-webkit-border-horizontal-spacing": !0, "-webkit-border-vertical-spacing": !0 };

    function Gi(a, b, c) {
        var d = [];
        Hi(mc(a.cssRules)).forEach(function(e) {
            if (b && !/[a-zA-Z][\w-:\.]*/.test(b)) throw Error("Invalid container id");
            if (!(b && I && 10 == document.documentMode && /\\['"]/.test(e.selectorText))) {
                var f = b ? e.selectorText.replace(Ei, "#" + b + " $1") : e.selectorText,
                    g = d.push;
                e = Ii(e.style, c);
                if (-1 != f.indexOf("<")) throw Error("Selector does not allow '<', got: " + f);
                var h = f.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
                if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(h)) throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " +
                    f);
                a: { for (var k = { "(": ")", "[": "]" }, n = [], v = 0; v < h.length; v++) { var B = h[v]; if (k[B]) n.push(k[B]);
                        else if (Bc(k, B) && n.pop() != B) { h = !1; break a } }
                    h = 0 == n.length }
                if (!h) throw Error("() and [] in selector must be balanced, got: " + f);
                e instanceof od || (e = qd(e));
                f = f + "{" + pd(e).replace(/</g, "\\3C ") + "}";
                g.call(d, new Bd(f, Ad))
            }
        });
        return Cd(d)
    }

    function Hi(a) { return a.filter(function(b) { return b instanceof CSSStyleRule || b.type == CSSRule.STYLE_RULE }) }

    function Ji(a, b, c) { a = Ki("<style>" + a + "</style>"); return null == a || null == a.sheet ? Ed : Gi(a.sheet, void 0 != b ? b : null, c) }

    function Ki(a) { if (I && !De(10) || typeof w.DOMParser != m) return null;
        a = $d(Nc(ja), "<html><head></head><body>" + a + "</body></html>"); return (new DOMParser).parseFromString(Ld(a), "text/html").body.children[0] }

    function Ii(a, b) { if (!a) return sd; var c = document.createElement(l).style;
        Li(a).forEach(function(d) { var e = we && d in Fi ? d : d.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
            Xc(e, "--") || Xc(e, "var") || (d = Ci(a, d), d = ci(e, d, b), null != d && Di(c, e, d)) }); return be(c.cssText || "") }

    function Mi(a) {
        var b = Array.from(ui(ki, a, Wa, [la])),
            c = oc(b, function(e) { return mc(yi(e).cssRules) });
        c = Hi(c);
        c.sort(function(e, f) { e = Wh(e.selectorText);
            a: { f = Wh(f.selectorText); for (var g = Math.min(e.length, f.length), h = 0; h < g; h++) { var k = e[h],
                        n = f[h];
                    k = k > n ? 1 : k < n ? -1 : 0; if (0 != k) { e = k; break a } }
                e = e.length;f = f.length;e = e > f ? 1 : e < f ? -1 : 0 }
            return -e });
        a = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, null, !1);
        for (var d; d = a.nextNode();) c.forEach(function(e) {
            ui(li, d, d.matches ? "matches" : cb, [e.selectorText]) && e.style && Ni(d,
                e.style)
        });
        b.forEach(Ve)
    }

    function Ni(a, b) { var c = Li(a.style);
        Li(b).forEach(function(d) { if (!(0 <= c.indexOf(d))) { var e = Ci(b, d);
                Di(a.style, d, e) } }) }

    function Li(a) { Ub(a) ? a = mc(a) : (a = Ac(a), kc(a, "cssText")); return a };

    function Oi(a, b, c) { if (typeof b === r)(b = Pi(a, b)) && (a.style[b] = c);
        else
            for (var d in b) { c = a; var e = b[d],
                    f = Pi(c, d);
                f && (c.style[f] = e) } }
    var Qi = {};

    function Pi(a, b) { var c = Qi[b]; if (!c) { var d = oe(b);
            c = d;
            void 0 === a.style[d] && (d = (we ? "Webkit" : ve ? "Moz" : I ? "ms" : null) + pe(d), void 0 !== a.style[d] && (c = d));
            Qi[b] = c } return c };
    var Ri = {
            "* ARIA-CHECKED": !0,
            "* ARIA-COLCOUNT": !0,
            "* ARIA-COLINDEX": !0,
            "* ARIA-CONTROLS": !0,
            "* ARIA-DESCRIBEDBY": !0,
            "* ARIA-DISABLED": !0,
            "* ARIA-EXPANDED": !0,
            "* ARIA-GOOG-EDITABLE": !0,
            "* ARIA-HASPOPUP": !0,
            "* ARIA-HIDDEN": !0,
            "* ARIA-LABEL": !0,
            "* ARIA-LABELLEDBY": !0,
            "* ARIA-MULTILINE": !0,
            "* ARIA-MULTISELECTABLE": !0,
            "* ARIA-ORIENTATION": !0,
            "* ARIA-PLACEHOLDER": !0,
            "* ARIA-READONLY": !0,
            "* ARIA-REQUIRED": !0,
            "* ARIA-ROLEDESCRIPTION": !0,
            "* ARIA-ROWCOUNT": !0,
            "* ARIA-ROWINDEX": !0,
            "* ARIA-SELECTED": !0,
            "* ABBR": !0,
            "* ACCEPT": !0,
            "* ACCESSKEY": !0,
            "* ALIGN": !0,
            "* ALT": !0,
            "* AUTOCOMPLETE": !0,
            "* AXIS": !0,
            "* BGCOLOR": !0,
            "* BORDER": !0,
            "* CELLPADDING": !0,
            "* CELLSPACING": !0,
            "* CHAROFF": !0,
            "* CHAR": !0,
            "* CHECKED": !0,
            "* CLEAR": !0,
            "* COLOR": !0,
            "* COLSPAN": !0,
            "* COLS": !0,
            "* COMPACT": !0,
            "* COORDS": !0,
            "* DATETIME": !0,
            "* DIR": !0,
            "* DISABLED": !0,
            "* ENCTYPE": !0,
            "* FACE": !0,
            "* FRAME": !0,
            "* HEIGHT": !0,
            "* HREFLANG": !0,
            "* HSPACE": !0,
            "* ISMAP": !0,
            "* LABEL": !0,
            "* LANG": !0,
            "* MAX": !0,
            "* MAXLENGTH": !0,
            "* METHOD": !0,
            "* MULTIPLE": !0,
            "* NOHREF": !0,
            "* NOSHADE": !0,
            "* NOWRAP": !0,
            "* OPEN": !0,
            "* READONLY": !0,
            "* REQUIRED": !0,
            "* REL": !0,
            "* REV": !0,
            "* ROLE": !0,
            "* ROWSPAN": !0,
            "* ROWS": !0,
            "* RULES": !0,
            "* SCOPE": !0,
            "* SELECTED": !0,
            "* SHAPE": !0,
            "* SIZE": !0,
            "* SPAN": !0,
            "* START": !0,
            "* SUMMARY": !0,
            "* TABINDEX": !0,
            "* TITLE": !0,
            "* TYPE": !0,
            "* VALIGN": !0,
            "* VALUE": !0,
            "* VSPACE": !0,
            "* WIDTH": !0
        },
        Ti = {
            "* USEMAP": !0,
            "* ACTION": !0,
            "* CITE": !0,
            "* HREF": !0,
            "* LONGDESC": !0,
            "* SRC": !0,
            "LINK HREF": !0,
            "* FOR": !0,
            "* HEADERS": !0,
            "* NAME": !0,
            "A TARGET": !0,
            "* CLASS": !0,
            "* ID": !0,
            "* STYLE": !0
        };
    var Ui = "undefined" != typeof WeakMap && -1 != WeakMap.toString().indexOf("[native code]"),
        Vi = 0;

    function Wi() { this.F = [];
        this.D = [];
        this.C = "data-elementweakmap-index-" + Vi++ }
    Wi.prototype.set = function(a, b) { if (ui(gi, a, Ya, [this.C])) { var c = parseInt(ui(hi, a, Va, [this.C]) || null, 10);
            this.D[c] = b } else c = this.D.push(b) - 1, wi(a, this.C, c.toString()), this.F.push(a); return this };
    Wi.prototype.get = function(a) { if (ui(gi, a, Ya, [this.C])) return a = parseInt(ui(hi, a, Va, [this.C]) || null, 10), this.D[a] };
    Wi.prototype.clear = function() { this.F.forEach(function(a) { ui(ji, a, fb, [this.C]) }, this);
        this.F = [];
        this.D = [] };
    var Xi = !I || 10 <= Number(Ge),
        Yi = !I || null == document.documentMode;

    function Zi() {};
    var $i = { APPLET: !0, AUDIO: !0, BASE: !0, BGSOUND: !0, EMBED: !0, FORM: !0, IFRAME: !0, ISINDEX: !0, KEYGEN: !0, LAYER: !0, LINK: !0, META: !0, OBJECT: !0, SCRIPT: !0, SVG: !0, STYLE: !0, TEMPLATE: !0, VIDEO: !0 };
    var aj = {
        A: !0,
        ABBR: !0,
        ACRONYM: !0,
        ADDRESS: !0,
        AREA: !0,
        ARTICLE: !0,
        ASIDE: !0,
        B: !0,
        BDI: !0,
        BDO: !0,
        BIG: !0,
        BLOCKQUOTE: !0,
        BR: !0,
        BUTTON: !0,
        CAPTION: !0,
        CENTER: !0,
        CITE: !0,
        CODE: !0,
        COL: !0,
        COLGROUP: !0,
        DATA: !0,
        DATALIST: !0,
        DD: !0,
        DEL: !0,
        DETAILS: !0,
        DFN: !0,
        DIALOG: !0,
        DIR: !0,
        DIV: !0,
        DL: !0,
        DT: !0,
        EM: !0,
        FIELDSET: !0,
        FIGCAPTION: !0,
        FIGURE: !0,
        FONT: !0,
        FOOTER: !0,
        FORM: !0,
        H1: !0,
        H2: !0,
        H3: !0,
        H4: !0,
        H5: !0,
        H6: !0,
        HEADER: !0,
        HGROUP: !0,
        HR: !0,
        I: !0,
        IMG: !0,
        INPUT: !0,
        INS: !0,
        KBD: !0,
        LABEL: !0,
        LEGEND: !0,
        LI: !0,
        MAIN: !0,
        MAP: !0,
        MARK: !0,
        MENU: !0,
        METER: !0,
        NAV: !0,
        NOSCRIPT: !0,
        OL: !0,
        OPTGROUP: !0,
        OPTION: !0,
        OUTPUT: !0,
        P: !0,
        PRE: !0,
        PROGRESS: !0,
        Q: !0,
        S: !0,
        SAMP: !0,
        SECTION: !0,
        SELECT: !0,
        SMALL: !0,
        SOURCE: !0,
        SPAN: !0,
        STRIKE: !0,
        STRONG: !0,
        STYLE: !0,
        SUB: !0,
        SUMMARY: !0,
        SUP: !0,
        TABLE: !0,
        TBODY: !0,
        TD: !0,
        TEXTAREA: !0,
        TFOOT: !0,
        TH: !0,
        THEAD: !0,
        TIME: !0,
        TR: !0,
        TT: !0,
        U: !0,
        UL: !0,
        VAR: !0,
        WBR: !0
    };
    var bj = { "ANNOTATION-XML": !0, "COLOR-PROFILE": !0, "FONT-FACE": !0, "FONT-FACE-SRC": !0, "FONT-FACE-URI": !0, "FONT-FACE-FORMAT": !0, "FONT-FACE-NAME": !0, "MISSING-GLYPH": !0 };

    function cj(a) {
        a = a || new dj;
        ej(a);
        this.C = Dc(a.C);
        this.J = Dc(a.Z);
        this.D = Dc(a.G);
        this.M = a.ga;
        a.ra.forEach(function(b) { if (!Xc(b, "data-")) throw new dc('Only "data-" attributes allowed, got: %s.', [b]); if (Xc(b, Ma)) throw new dc('Attributes with "%s" prefix are not allowed, got: %s.', [Ma, b]);
            this.C["* " + b.toUpperCase()] = fj }, this);
        a.ca.forEach(function(b) { b = b.toUpperCase(); if (-1 == b.indexOf("-") || bj[b]) throw new dc("Only valid custom element tag names allowed, got: %s.", [b]);
            this.D[b] = !0 }, this);
        this.N = a.F;
        this.G =
            a.Y;
        this.F = null;
        this.K = a.T
    }
    z(cj, Zi);

    function gj(a) { return function(b, c) { return (b = a(C(b), c)) && hd(b) != ra ? hd(b) : null } }

    function dj() { this.C = {};
        fc([Ri, Ti], function(a) { Ac(a).forEach(function(b) { this.C[b] = fj }, this) }, this);
        this.D = {};
        this.ra = [];
        this.ca = [];
        this.Z = Dc($i);
        this.G = Dc(aj);
        this.ga = !1;
        this.R = ld;
        this.M = this.J = this.K = this.F = wc;
        this.Y = null;
        this.N = this.T = !1 }

    function hj() { var a = new dj;
        a.G = { SPAN: !0 }; "a b br em i strong".split(" ").forEach(function(b) { b = b.toUpperCase(); if (aj[b]) this.G[b] = !0;
            else throw Error("Only whitelisted tags can be allowed. See goog.html.sanitizer.TagWhitelist."); }, a); return a }

    function ij(a, b) { return function(c, d, e, f) { c = a(c, d, e, f); return null == c ? null : b(c, d, e, f) } }

    function jj(a, b, c, d) { a[c] && !b[c] && (a[c] = ij(a[c], d)) }

    function ej(a) {
        if (a.N) throw Error("HtmlSanitizer.Builder.build() can only be used once.");
        jj(a.C, a.D, "* USEMAP", kj);
        var b = gj(a.R);
        ["* ACTION", "* CITE", "* HREF"].forEach(function(d) { jj(this.C, this.D, d, b) }, a);
        var c = gj(a.F);
        ["* LONGDESC", "* SRC", "LINK HREF"].forEach(function(d) { jj(this.C, this.D, d, c) }, a);
        ["* FOR", "* HEADERS", "* NAME"].forEach(function(d) { jj(this.C, this.D, d, $b(lj, this.K)) }, a);
        jj(a.C, a.D, "A TARGET", $b(mj, [qa, "_self"]));
        jj(a.C, a.D, "* CLASS", $b(nj, a.J));
        jj(a.C, a.D, "* ID", $b(oj, a.J));
        jj(a.C,
            a.D, "* STYLE", $b(a.M, c));
        a.N = !0
    }

    function pj(a, b) { a || (a = "*"); return (a + " " + b).toUpperCase() }

    function qj(a, b, c, d) { if (!d.Bb) return null;
        b = pd(Ii(d.Bb, function(e, f) { c.ud = f;
            e = a(e, c);
            null == e ? e = null : (f = Nc("HtmlSanitizerPolicy created with networkRequestUrlPolicy_ when installing '* STYLE' handler."), Mc(f), Mc(f), e = new D(e, gd)); return e })); return "" == b ? null : b }

    function fj(a) { return C(a) }

    function mj(a, b) { b = C(b); return ic(a, b.toLowerCase()) ? b : null }

    function kj(a) { return (a = C(a)) && "#" == a.charAt(0) ? a : null }

    function lj(a, b, c) { return a(C(b), c) }

    function nj(a, b, c) { b = b.split(/(?:\s+)/); for (var d = [], e = 0; e < b.length; e++) { var f = a(b[e], c);
            f && d.push(f) } return 0 == d.length ? null : d.join(" ") }

    function oj(a, b, c) { return a(C(b), c) }

    function rj(a, b) {
        var c = !(la in a.J) && la in a.D;
        c = "*" == a.G && c ? "sanitizer-" + (Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)) : a.G;
        a.F = c;
        if (Xi) {
            c = b;
            if (Xi) {
                b = Se(document, ka);
                a.F && "*" == a.G && (b.id = a.F);
                a.K && (c = Ki("<div>" + c + "</div>"), Mi(c), c = c.innerHTML);
                c = $d(Nc(ja), c);
                var d = document.createElement("template");
                if (Yi && "content" in d) G(d, c), d = d.content;
                else { var e = document.implementation.createHTMLDocument("x");
                    d = e.body;
                    G(e.body, c) }
                c = document.createTreeWalker(d,
                    NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null, !1);
                for (d = Ui ? new WeakMap : new Wi; e = c.nextNode();) {
                    c: {
                        var f = a;
                        var g = e;
                        switch (Ai(g)) {
                            case 3:
                                f = sj(f, g);
                                break c;
                            case 1:
                                if ("TEMPLATE" == zi(g).toUpperCase()) f = null;
                                else {
                                    var h = zi(g).toUpperCase();
                                    if (h in f.J) var k = null;
                                    else f.D[h] ? k = document.createElement(h) : (k = Se(document, ka), f.M && wi(k, "data-sanitizer-original-tag", h.toLowerCase()));
                                    if (k) {
                                        var n = k,
                                            v = vi(g);
                                        if (null != v)
                                            for (var B = 0; h = v[B]; B++)
                                                if (h.specified) {
                                                    var F = f;
                                                    var M = g,
                                                        aa = h,
                                                        wb = aa.name;
                                                    if (Xc(wb, Ma)) F = null;
                                                    else { var Si = zi(M);
                                                        aa = aa.value; var jf = { tagName: C(Si).toLowerCase(), attributeName: C(wb).toLowerCase() },
                                                            kf = { Bb: void 0 };
                                                        jf.attributeName == kb && (kf.Bb = xi(M));
                                                        M = pj(Si, wb);
                                                        M in F.C ? (F = F.C[M], F = F(aa, jf, kf)) : (wb = pj(null, wb), wb in F.C ? (F = F.C[wb], F = F(aa, jf, kf)) : F = null) }
                                                    null !== F && wi(n, h.name, F)
                                                }
                                        f = k
                                    } else f = null
                                }
                                break c;
                            default:
                                f = null
                        }
                    }
                    if (f) {
                        if (1 == Ai(f) && d.set(e, f), e = Bi(e), g = !1, e) h = Ai(e), k = zi(e).toLowerCase(), n = Bi(e), 11 != h || n ? "body" == k && n && (h = Bi(n)) && !Bi(h) && (g = !0) : g = !0, h = null, g || !e ? h = b : 1 == Ai(e) && (h = d.get(e)), h.content &&
                            (h = h.content), h.appendChild(f)
                    } else Ue(e)
                }
                d.clear && d.clear();
                a = b
            } else a = Se(document, ka);
            0 < vi(a).length && (b = Se(document, ka), b.appendChild(a), a = b);
            a = (new XMLSerializer).serializeToString(a);
            a = a.slice(a.indexOf(">") + 1, a.lastIndexOf("</"))
        } else a = "";
        return $d(Nc("Output of HTML sanitizer"), a)
    }

    function sj(a, b) { var c = b.data;
        (b = Bi(b)) && zi(b).toLowerCase() == kb && !(la in a.J) && la in a.D && (c = Dd(Ji(c, a.F, x(function(d, e) { return this.N(d, { ud: e }) }, a)))); return document.createTextNode(c) };

    function tj(a) { var b = new cj(new dj); return rj(b, a) };

    function uj(a) { Q.call(this, "BlogArchive", a);
        this.C = a.L }
    z(uj, Q);
    var vj = "&#9658;&nbsp;";
    t = uj.prototype;
    t.ja = function(a, b) { if (a == Ca) Oh(this.H, b);
        else if ("getTitles" == a) { a: { a = b.path; var c = this.C.C.getElementsByTagName("A"); for (e in c) { var d = c[e]; if (d.href == a) { var e = af(d, "li", "archivedate"); break a } }
                e = void 0 }
            a = K("posts", e);
            (c = af(e, l, ya)) && Oe(c, { style: "", "data-height": "" });Ue(a); for (c = 0; c < b.posts.length; c++) { var f = b.posts[c];
                d = document.createElement("li");
                f = ge("<a href=" + f.url + ">" + f.title + "</a>");
                G(d, f);
                a.appendChild(d) }
            wj(this, e);xj(this, e) }
        else uj.O.ja.call(this, a, b) };
    t.ha = function() {
        if (P(this.H, "ArchiveList")) {
            var a = Ne(document, "a", pb, this.C.C);
            1 > a.length && (a = Ne(document, "li", pb, this.C.C));
            if (0 < a.length && a[0].currentStyle) var b = a[0].parentNode.currentStyle.color;
            for (var c = 0; c < a.length; c++) { var d = a[c];
                0 < Ne(document, l, ya, d).length ? (d.onclick = this.Zc.bind(this), wj(this, d)) : d.onclick = this.$c.bind(this);
                b && (d.style.color = b) }
            if (d = P(this.H, "ArchiveMenu")) {
                for (c = 1; c < d.options.length; c++)
                    if (a = d.options[c].value, a == window.location.href || null != window.location.href.match(a)) {
                        d.selectedIndex =
                            c;
                        break
                    }
                d.onchange = this.Ac.bind(this)
            } else
                for (a = Ne(document, l, Ra, this.C.C), c = 0; c < a.length; c++) d = a[c], d.addEventListener(wa, this.cd.bind(this), !1), d.addEventListener(wa, this.Pc.bind(this), !1);
            "rtl" == this.H.L.data.languageDirection && (vj = "&#9668;&nbsp;")
        }
    };
    t.Ac = function() { var a = P(this.H, "ArchiveMenu");
        a && "" != a.value && (window.location.href = a.value) };
    t.$c = function(a) { a = a || window.event; var b = a.currentTarget || a.srcElement;
        b && !A(b, pb) && (b = b.parentNode);
        a = H.Na(b, "zippy");
        b = b.parentNode; if (A(b, Ta)) return uc(b, Ta, xa), b = tj(vj), G(a, b), sc(a, "toggle-open"), !1;
        uc(b, xa, Ta); var c = tj("&#9660;&nbsp;");
        G(a, c);
        qc(a, "toggle-open");
        yj(this, b); return !1 };
    t.cd = function(a) { a = a || window.event;
        a = a.currentTarget || a.srcElement;
        (a = A(a, Ra) ? a : af(a, l, Ra)) && (a = K("menu", a)) && (A(a, "open") ? sc(a, "open") : qc(a, "open")) };
    t.Pc = function(a) {
        a = a || window.event;
        var b = a.currentTarget || a.srcElement;
        if (b = A(b, "ripple") ? b : af(b, l, "ripple")) {
            var c = K("splash", b);
            if (!c) { c = document.createElement("span");
                qc(c, "splash"); var d = document.createElement(l);
                qc(d, "splash-wrapper");
                d.appendChild(c);
                b.insertBefore(d, b.firstChild) }
            sc(c, "animate");
            d = b.offsetWidth;
            var e = getComputedStyle(b);
            d += parseInt(e.marginLeft) + parseInt(e.marginRight);
            d = Math.max(d, zj(b));
            Oe(c, {
                style: "height: " + d + "px; width: " + d + "px; left: " + (a.pageX - b.offsetLeft - d / 2) + "px; top: " +
                    (a.pageY - b.offsetTop - d / 2) + "px;"
            });
            qc(c, "animate")
        }
    };
    t.Zc = function(a) { a = a || window.event; if (!a.currentTarget || a.currentTarget == a.srcElement || "A" != a.srcElement.tagName) { var b = a.currentTarget || a.srcElement;
            b && !A(b, pb) && (b = b.parentNode);
            a.stopPropagation();
            a = A(b, "archivedate") ? b : b.parentNode;
            A(a, Ta) ? (Aj(this, a), uc(a, Ta, xa)) : (yj(this, a), xj(this, a), uc(a, xa, Ta)) } };

    function yj(a, b) {
        var c = b.getElementsByTagName("UL");
        0 < c.length && !A(c[0], "posts") ? c = !1 : (c = H.Na(b, "post-count"), c = parseInt(c.innerHTML.match(/\d+/), 10), c = b.getElementsByTagName("LI").length < c);
        if (c) {
            var d = K(ya, b);
            c = K("posts", b);
            c || (c = document.createElement("UL"), d ? d.appendChild(c) : b.appendChild(c), qc(c, "posts"));
            d && Oe(d, { style: "", "data-height": "" });
            (d = af(b, l, ya)) && Oe(d, { style: "", "data-height": "" });
            d = document.createElement("LI");
            var e = ge(a.H.L.data.loadingMessage || "Loading...");
            G(d, e);
            c.appendChild(d);
            a.H.wa("getTitles", { path: H.Na(b, "post-count-link").href }, null, ia)
        }
    }

    function xj(a, b) { var c = K(ya, b);
        c.getAttribute(La) || wj(a, b); var d = (a = c.getAttribute(La) || zj(c)) ? a + "px" : p;
        window.setTimeout(function() { Oe(c, { style: "max-height: " + d + ";" }) }, 10) }

    function Aj(a, b) { var c = K(ya, b);
        c.getAttribute(La) || wj(a, b);
        window.setTimeout(function() { Oe(c, { style: bb }) }, 10) }

    function wj(a, b) { var c = K(ya, b);
        Oe(c, { style: "max-height: none;" }); for (var d = 0, e = Ne(document, l, ya, c), f = 0; f < e.length; f++) { var g = e[f],
                h = af(g, "li", pb); if (A(h, xa)) { var k = g.getAttribute(La);
                k || (wj(a, h), k = g.getAttribute(La));
                d += parseInt(k) } }
        a = d + zj(c);
        c.setAttribute(La, a);
        c.setAttribute(kb, "max-height: " + a + "px;");
        A(b, xa) && c.setAttribute(kb, bb) }

    function zj(a) { var b = a.offsetHeight;
        a = getComputedStyle(a); return b += parseInt(a.marginTop) + parseInt(a.marginBottom) }
    y("_BlogArchiveView", uj);

    function Bj(a) { Q.call(this, Bj.$, a) }
    z(Bj, Q);
    Bj.$ = "Attribution";
    y("_AttributionView", Bj);
    var Cj = {},
        Dj = null;
    var Ej = typeof Uint8Array === m;

    function Fj(a, b, c) { return typeof a === q ? Ej && !Array.isArray(a) && a instanceof Uint8Array ? c(a) : Gj(a, b, c) : b(a) }

    function Gj(a, b, c) { if (Array.isArray(a)) { for (var d = Array(a.length), e = 0; e < a.length; e++) { var f = a[e];
                null != f && (d[e] = Fj(f, b, c)) }
            Array.isArray(a) && a.wd && Hj(d); return d }
        d = {}; for (e in a) f = a[e], null != f && (d[e] = Fj(f, b, c)); return d }

    function Ij(a) {
        return Gj(a, function(b) { return typeof b === db ? isFinite(b) ? b : String(b) : b }, function(b) {
            var c;
            void 0 === c && (c = 0);
            if (!Dj) { Dj = {}; for (var d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), e = ["+/=", "+/", "-_=", "-_.", "-_"], f = 0; 5 > f; f++) { var g = d.concat(e[f].split(""));
                    Cj[f] = g; for (var h = 0; h < g.length; h++) { var k = g[h];
                        void 0 === Dj[k] && (Dj[k] = h) } } }
            c = Cj[c];
            d = Array(Math.floor(b.length / 3));
            e = c[64] || "";
            for (f = g = 0; g < b.length - 2; g += 3) {
                var n = b[g],
                    v = b[g + 1];
                k = b[g + 2];
                h = c[n >> 2];
                n = c[(n & 3) <<
                    4 | v >> 4];
                v = c[(v & 15) << 2 | k >> 6];
                k = c[k & 63];
                d[f++] = "" + h + n + v + k
            }
            h = 0;
            k = e;
            switch (b.length - g) {
                case 2:
                    h = b[g + 1], k = c[(h & 15) << 2] || e;
                case 1:
                    b = b[g], d[f] = "" + c[b >> 2] + c[(b & 3) << 4 | h >> 4] + k + e }
            return d.join("")
        })
    }
    var Jj = { wd: { value: !0, configurable: !0 } };

    function Hj(a) { Array.isArray(a) && !Object.isFrozen(a) && Object.defineProperties(a, Jj); return a };
    var Kj;

    function Lj(a, b, c, d) {
        var e = Kj;
        Kj = null;
        a || (a = e);
        e = this.constructor.Sd;
        a || (a = e ? [e] : []);
        this.F = e ? 0 : -1;
        this.C = a;
        a: { e = this.C.length;a = e - 1; if (e && (e = this.C[a], !(null === e || typeof e != q || Array.isArray(e) || Ej && e instanceof Uint8Array))) { this.G = a - this.F;
                this.D = e; break a }
            void 0 !== b && -1 < b ? (this.G = Math.max(b, a + 1 - this.F), this.D = null) : this.G = Number.MAX_VALUE }
        if (c)
            for (b = 0; b < c.length; b++) a = c[b], a < this.G ? (a += this.F, (e = this.C[a]) ? Hj(e) : this.C[a] = Mj) : (Nj(this), (e = this.D[a]) ? Hj(e) : this.D[a] = Mj);
        if (d && d.length)
            for (c = 0; c <
                d.length; c++) { a = b = void 0;
                e = d[c]; for (var f = 0; f < e.length; f++) { var g = e[f],
                        h = R(this, g);
                    null != h && (a = g, b = h, S(this, g, void 0)) }
                a && S(this, a, b) }
    }
    var Mj = Object.freeze(Hj([]));

    function Nj(a) { var b = a.G + a.F;
        a.C[b] || (a.D = a.C[b] = {}) }

    function R(a, b) { if (b < a.G) { b += a.F; var c = a.C[b]; return c !== Mj ? c : a.C[b] = Hj([]) } if (a.D) return c = a.D[b], c !== Mj ? c : a.D[b] = Hj([]) }

    function Oj(a, b) { a = R(a, b); return null == a ? a : +a }

    function T(a, b) { a = R(a, b); return null == a ? a : !!a }

    function U(a, b) { var c = !1;
        c = void 0 === c ? !1 : c;
        a = T(a, b); return null == a ? c : a }

    function S(a, b, c) { b < a.G ? a.C[b + a.F] = c : (Nj(a), a.D[b] = c); return a }
    Lj.prototype.toJSON = function() { return Ij(this.C) };
    Lj.prototype.toString = function() { return this.C.toString() };

    function Pj(a, b) { this.G = this.M = this.F = "";
        this.K = null;
        this.N = this.J = "";
        this.D = !1; if (a instanceof Pj) { this.D = void 0 !== b ? b : a.D;
            Qj(this, a.F);
            this.M = a.M;
            this.G = a.G;
            Rj(this, a.K);
            Sj(this, a.J);
            b = a.C; var c = new Tj;
            c.F = b.F;
            b.C && (c.C = new Vg(b.C), c.D = b.D);
            Uj(this, c);
            this.N = a.N } else a && (c = String(a).match(bh)) ? (this.D = !!b, Qj(this, c[1] || "", !0), this.M = Vj(c[2] || ""), this.G = Vj(c[3] || "", !0), Rj(this, c[4]), Sj(this, c[5] || "", !0), Uj(this, c[6] || "", !0), this.N = Vj(c[7] || "")) : (this.D = !!b, this.C = new Tj(null, this.D)) }
    Pj.prototype.toString = function() { var a = [],
            b = this.F;
        b && a.push(Wj(b, Xj, !0), ":"); var c = this.G; if (c || "file" == b) a.push("//"), (b = this.M) && a.push(Wj(b, Xj, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.K, null != c && a.push(":", String(c)); if (c = this.J) this.G && "/" != c.charAt(0) && a.push("/"), a.push(Wj(c, "/" == c.charAt(0) ? Yj : Zj, !0));
        (c = this.C.toString()) && a.push("?", c);
        (c = this.N) && a.push("#", Wj(c, ak)); return a.join("") };

    function Qj(a, b, c) { a.F = c ? Vj(b, !0) : b;
        a.F && (a.F = a.F.replace(/:$/, "")) }

    function Rj(a, b) { if (b) { b = Number(b); if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
            a.K = b } else a.K = null }

    function Sj(a, b, c) { a.J = c ? Vj(b, !0) : b; return a }

    function Uj(a, b, c) { b instanceof Tj ? (a.C = b, bk(a.C, a.D)) : (c || (b = Wj(b, ck)), a.C = new Tj(b, a.D)) }

    function dk(a, b, c) { a.C.set(b, c); return a }

    function ek(a, b) { return a instanceof Pj ? new Pj(a) : new Pj(a, b) }

    function Vj(a, b) { return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "" }

    function Wj(a, b, c) { return typeof a === r ? (a = encodeURI(a).replace(b, fk), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null }

    function fk(a) { a = a.charCodeAt(0); return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16) }
    var Xj = /[#\/\?@]/g,
        Zj = /[#\?:]/g,
        Yj = /[#\?]/g,
        ck = /[#\?@]/g,
        ak = /#/g;

    function Tj(a, b) { this.D = this.C = null;
        this.F = a || null;
        this.G = !!b }

    function gk(a) { a.C || (a.C = new Vg, a.D = 0, a.F && ch(a.F, function(b, c) { a.add(decodeURIComponent(b.replace(/\+/g, " ")), c) })) }

    function hk(a) { var b = $g(a); if ("undefined" == typeof b) throw Error("Keys are undefined"); var c = new Tj(null, void 0);
        a = Zg(a); for (var d = 0; d < b.length; d++) { var e = b[d],
                f = a[d];
            Array.isArray(f) ? ik(c, e, f) : c.add(e, f) } return c }
    t = Tj.prototype;
    t.V = function() { gk(this); return this.D };
    t.add = function(a, b) { gk(this);
        this.F = null;
        a = jk(this, a); var c = this.C.get(a);
        c || this.C.set(a, c = []);
        c.push(b);
        this.D = this.D + 1; return this };

    function kk(a, b) { gk(a);
        b = jk(a, b);
        a.C.has(b) && (a.F = null, a.D = a.D - a.C.get(b).length, Yg(a.C, b)) }
    t.la = function() { gk(this); return 0 == this.D };

    function lk(a, b) { gk(a);
        b = jk(a, b); return a.C.has(b) }
    t.forEach = function(a, b) { gk(this);
        this.C.forEach(function(c, d) { c.forEach(function(e) { a.call(b, e, d, this) }, this) }, this) };
    t.ia = function() { gk(this); for (var a = this.C.X(), b = this.C.ia(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]); return c };
    t.X = function(a) { gk(this); var b = []; if (typeof a === r) lk(this, a) && (b = b.concat(this.C.get(jk(this, a))));
        else { a = this.C.X(); for (var c = 0; c < a.length; c++) b = b.concat(a[c]) } return b };
    t.set = function(a, b) { gk(this);
        this.F = null;
        a = jk(this, a);
        lk(this, a) && (this.D = this.D - this.C.get(a).length);
        this.C.set(a, [b]);
        this.D = this.D + 1; return this };
    t.get = function(a, b) { if (!a) return b;
        a = this.X(a); return 0 < a.length ? String(a[0]) : b };

    function ik(a, b, c) { kk(a, b);
        0 < c.length && (a.F = null, a.C.set(jk(a, b), mc(c)), a.D = a.D + c.length) }
    t.toString = function() { if (this.F) return this.F; if (!this.C) return ""; for (var a = [], b = this.C.ia(), c = 0; c < b.length; c++) { var d = b[c],
                e = encodeURIComponent(String(d));
            d = this.X(d); for (var f = 0; f < d.length; f++) { var g = e; "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g) } } return this.F = a.join("&") };

    function jk(a, b) { b = String(b);
        a.G && (b = b.toLowerCase()); return b }

    function bk(a, b) { b && !a.G && (gk(a), a.F = null, a.C.forEach(function(c, d) { var e = d.toLowerCase();
            d != e && (kk(this, d), ik(this, e, c)) }, a));
        a.G = b }
    t.Ec = function(a) { for (var b = 0; b < arguments.length; b++) ah(arguments[b], function(c, d) { this.add(d, c) }, this) };
    var mk = {},
        nk = {},
        ok = {};

    function pk() { throw Error("Do not instantiate directly"); }
    pk.prototype.zb = null;
    pk.prototype.Cb = function() { return this.content };
    pk.prototype.toString = function() { return this.content };

    function qk() { pk.call(this) }
    z(qk, pk);
    qk.prototype.$b = mk;

    function rk(a, b) { return null != a && a.$b === b };
    var sk = {};

    function tk() { var a = "undefined" !== typeof window ? window.trustedTypes : void 0; return null !== a && void 0 !== a ? a : null }
    var uk;

    function vk() { var a, b;
        void 0 === uk && (uk = null !== (b = null === (a = tk()) || void 0 === a ? void 0 : a.createPolicy("google#safe", { createHTML: function(c) { return c }, createScript: function(c) { return c }, createScriptURL: function(c) { return c } })) && void 0 !== b ? b : null); return uk };

    function wk() {}

    function xk(a, b) { if (b !== sk) throw Error("Bad secret");
        this.C = a }
    u(xk, wk);
    xk.prototype.toString = function() { return this.C.toString() };

    function yk(a) { var b; if (null === (b = tk()) || void 0 === b ? 0 : b.isScript(a)) return a; if (a instanceof xk) return a.C; throw Error("wrong type"); };

    function zk(a) { if (null != a) switch (a.zb) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0 }
        return null }

    function Ak(a) { return rk(a, mk) ? a : a instanceof Kd ? Bk(Ld(a).toString(), a.za()) : Bk(String(String(a)).replace(Ck, Dk), zk(a)) }
    var Bk = function(a) {
        function b(c) { this.content = c }
        b.prototype = a.prototype; return function(c, d) { c = new b(String(c));
            void 0 !== d && (c.zb = d); return c } }(qk);

    function Ek(a) { if (rk(a, mk)) { var b = String;
            a = String(a.Cb()).replace(Fk, "").replace(Gk, "&lt;");
            b = b(a).replace(Hk, Dk) } else b = String(a).replace(Ck, Dk); return b }

    function Ik(a) { rk(a, nk) || rk(a, ok) ? a = Jk(a) : a instanceof D ? a = Jk(hd(a)) : a instanceof Rc ? a = Jk(Tc(a).toString()) : (a = String(a), a = Kk.test(a) ? a.replace(Lk, Mk) : sa); return a }
    var Nk = { "\x00": "&#0;", "\t": "&#9;", "\n": "&#10;", "\x0B": "&#11;", "\f": "&#12;", "\r": "&#13;", " ": "&#32;", '"': "&quot;", "&": "&amp;", "'": "&#39;", "-": "&#45;", "/": "&#47;", "<": "&lt;", "=": "&#61;", ">": "&gt;", "`": "&#96;", "\u0085": "&#133;", "\u00a0": "&#160;", "\u2028": "&#8232;", "\u2029": "&#8233;" };

    function Dk(a) { return Nk[a] }
    var Ok = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\x0B": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function Mk(a) { return Ok[a] }
    var Ck = /[\x00\x22\x26\x27\x3c\x3e]/g,
        Hk = /[\x00\x22\x27\x3c\x3e]/g,
        Lk = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Kk = /^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,
        Pk = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;

    function Jk(a) { return String(a).replace(Lk, Mk) }
    var Fk = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        Gk = /</g;
    /*

     Copyright 2018 The Incremental DOM Authors. All Rights Reserved.

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

          http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS-IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
    */
    var Qk = Object.prototype.hasOwnProperty;

    function Rk() {}
    Rk.prototype = Object.create(null);

    function Sk(a, b, c) { a = a.style; if (typeof c === r) a.cssText = c;
        else { a.cssText = ""; for (var d in c)
                if (Qk.call(c, d)) { b = d; var e = c[d];
                    0 <= b.indexOf("-") ? a.setProperty(b, e) : a[b] = e } } }

    function Tk(a, b, c) { var d = typeof c;
        d === q || d === m ? a[b] = c : null == c ? a.removeAttribute(b) : (d = 0 === b.lastIndexOf("xml:", 0) ? "http://www.w3.org/XML/1998/namespace" : 0 === b.lastIndexOf("xlink:", 0) ? "http://www.w3.org/1999/xlink" : null) ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c) }
    Uk();

    function Uk() { var a = new Rk;
        a.__default = Tk;
        a.style = Sk; return a };
    var Vk = Uk();
    var Wk = {};
    Vk.checked = function(a, b, c) { null == c ? (a.removeAttribute("checked"), a.checked = !1) : (a.setAttribute("checked", c), a.checked = !(!1 === c || "false" === c)) };
    Vk.value = function(a, b, c) { null == c ? (a.removeAttribute("value"), a.value = "") : (a.setAttribute("value", c), a.value = c) };

    function Xk(a, b) { return Yk(b, a.config, a.Bd, a.td, a.depth) }

    function Yk(a, b, c, d, e) {
        var f = d.extraIconClass,
            g = '<li class="comment" id="c' + Ek(d.id) + '"><div class="avatar-image-container"><img src="',
            h = d.authorAvatarSrc;
        rk(h, nk) || rk(h, ok) ? h = Jk(h) : h instanceof D ? h = Jk(hd(h)) : h instanceof Rc ? h = Jk(Tc(h).toString()) : (h = String(h), h = Pk.test(h) ? h.replace(Lk, Mk) : sa);
        f = g + Ek(h) + '" alt=""/></div><div class="comment-block"><div class="comment-header"><cite class="user">' + (d.authorUrl ? '<a href="' + Ek(Ik(d.authorUrl)) + '" rel="nofollow">' + Ak(d.author) + "</a>" : Ak(d.author)) + '</cite><span class="icon user ' +
            Ek(null != f ? f : "") + '"></span><span class="datetime secondary-text"><a rel="nofollow" href="' + Ek(Ik(d.url)) + '">' + Ak(d.timestamp) + '</a></span></div><p class="comment-content">' + Ak(d.body) + '</p><span class="comment-actions secondary-text">' + (e < b.maxDepth ? '<a class="comment-reply" target="_self" data-comment-id="' + Ek(d.id) + '">' + Ak(c.reply) + "</a>" : "") + '<span class="item-control blog-admin ' + Ek(d.adminClass) + '"><a target="_self" href="' + Ek(Ik(d.deleteUrl)) + '">' + Ak(c["delete"]) + '</a></span></span></div><div class="comment-replies">';
        g = d.replies;
        g = null != g ? g : [];
        f += '<div id="c' + Ek(d.id) + '-rt" class="comment-thread inline-thread' + (0 == g.length ? " hidden" : "") + '"><span class="thread-toggle thread-expanded"><span class="thread-arrow"></span><span class="thread-count"><a target="_self">' + Ak(c.replies) + '</a></span></span><ol id="c' + Ek(d.id) + '-ra" class="thread-chrome thread-expanded"><div>';
        h = g.length;
        for (var k = 0; k < h; k++) f += Yk(a, b, c, g[k], e ? e + 1 : 1);
        f += '</div><div id="c' + Ek(d.id) + '-continue" class="continue"><a class="comment-reply" target="_self" data-comment-id="' +
            Ek(d.id) + '">' + Ak(c.reply) + '</a></div></ol></div></div><div class="comment-replybox-single" id="c' + Ek(d.id) + '-ce"></div></li>';
        return Bk(f)
    };

    function Zk() {}
    Tb(Zk);

    function $k(a) { N.call(this);
        this.Z = a || cc || (cc = new cf);
        this.fa = null;
        this.ta = !1;
        this.C = null;
        this.D = void 0;
        this.Y = this.R = null }
    z($k, N);
    Zk.Ya();
    t = $k.prototype;
    t.Xa = function() { return this.C };

    function al(a) { a.D || (a.D = new Kf(a)); return a.D }
    t.Ob = function() { this.C = df(this.Z, "DIV") };
    t.render = function(a) { if (this.ta) throw Error("Component already rendered");
        this.C || this.Ob();
        a ? a.insertBefore(this.C, null) : this.Z.D.body.appendChild(this.C);
        this.R && !this.R.ta || this.Wa() };
    t.Wa = function() { this.ta = !0;
        bl(this, function(a) {!a.ta && a.Xa() && a.Wa() }) };

    function cl(a) { bl(a, function(b) { b.ta && cl(b) });
        a.D && Of(a.D);
        a.ta = !1 }
    t.W = function() { this.ta && cl(this);
        this.D && (this.D.xa(), delete this.D);
        bl(this, function(a) { a.xa() });
        this.C && Ve(this.C);
        this.R = this.C = this.Y = null;
        $k.O.W.call(this) };

    function bl(a, b) { a.Y && a.Y.forEach(b, void 0) };

    function dl(a, b, c, d, e) { $k.call(this, e);
        this.J = d || window;
        this.ca = a;
        this.M = b;
        this.T = {};
        this.K = this.F = null;
        this.G = {};
        c || (this.G.GOOGLEPLUS = { Ia: "Google+", Ua: this.kd });
        this.G.EMAIL = { Ia: "Email", Ua: this.hd };
        this.G.FACEBOOK = { Ia: "Facebook", Ua: this.jd };
        this.G.TWITTER = { Ia: "Twitter", Ua: this.ld } }
    u(dl, $k);
    t = dl.prototype;
    t.Ob = function() {
        var a = this.Z,
            b = a.C("DIV", { style: "position:absolute;width:100%;left:0;top:0;height:100%;z-index:100;", "class": "mobile-share-panel-outer" });
        this.F = a.C("DIV", { style: "position:absolute;;width:230px;height:200px;", "class": "mobile-share-panel-inner" });
        b.appendChild(this.F);
        var c = a.C("DIV", { "class": "mobile-share-panel-title" });
        c.innerText = oa;
        c.textContent = oa;
        this.F.appendChild(c);
        this.K = a.C("A", { href: "javascript:void(0)", "class": "mobile-share-panel-button-close" });
        this.K.textContent = "\u00d7";
        c.appendChild(this.K);
        for (var d in this.G) { c = a.C("A", { target: qa, display: ua, "class": "mobile-share-panel-button mobile-share-panel-button-" + d.toLowerCase() }); var e = a.C(ka),
                f = this.G[d];
            e.innerText = f.Ia;
            e.textContent = f.Ia;
            c.href = f.Ua.call(this);
            c.appendChild(e);
            this.F.appendChild(c);
            this.T[d] = c }
        this.C = b
    };
    t.Wa = function() { $k.prototype.Wa.call(this); for (var a in this.T) { var b = this.T[a];
            b && Mf(al(this), b, wa, this.yb) }
        Mf(al(this), this.K, wa, this.yb);
        a = this.Xa();
        Mf(al(this), a, wa, this.yb);
        this.Vb();
        Mf(al(this), this.J, "scroll", this.Vb) };
    t.show = function(a) { var b = this.Xa();
        b && (b.style.display = a ? "" : p) };
    t.Vb = function() { var a = this.J.innerHeight,
            b = this.J.innerWidth,
            c = this.J.pageYOffset,
            d = this.J.pageXOffset,
            e = 0;
        200 < a && (e = (a - 200) / 2);
        Oi(this.F, "top", e + c + "px");
        a = 0;
        230 < b && (a = (b - 230) / 2);
        Oi(this.F, "left", a + d + "px") };
    t.ld = function() { return "https://twitter.com/intent/tweet?text=" + encodeURIComponent(this.ca + ": " + this.M) };
    t.jd = function() { return "https://m.facebook.com/sharer.php?u=" + encodeURIComponent(this.M) + "&t=" + encodeURIComponent(this.ca) };
    t.hd = function() { return "mailto:?subject=" + encodeURIComponent(this.ca) + "&body=" + encodeURIComponent(this.M) };
    t.kd = function() { return "https://plus.google.com/share?source=blogger:mobile:share&url=" + encodeURIComponent(this.M) };
    t.yb = function() { this.show(!1) };
    var el = /^((http(s)?):)?\/\/((((lh[3-6](-tt|-d[a-g,z]|-testonly)?\.((ggpht)|(googleusercontent)|(google)|(sandbox\.google)))|(([1-4]\.bp\.blogspot)|(bp[0-3]\.blogger))|(ccp-lh\.googleusercontent)|((((cp|ci|gp)[3-6])|(ap[1-2]))\.(ggpht|googleusercontent))|(gm[1-4]\.ggpht)|(play-(ti-)?lh\.googleusercontent)|(gz0\.googleusercontent)|(((yt[3-4])|(sp[1-3]))\.(ggpht|googleusercontent)))\.com)|(dp[3-6]\.googleusercontent\.cn)|(lh[3-6]\.(googleadsserving\.cn|xn--9kr7l\.com))|(photos\-image\-(dev|qa)(-auth)?\.corp\.google\.com)|((dev|dev2|dev3|qa|qa2|qa3|qa-red|qa-blue|canary)[-.]lighthouse\.sandbox\.google\.com\/image)|(image\-(dev|qa)\-lighthouse(-auth)?\.sandbox\.google\.com(\/image)?))\//i,
        fl = /^(https?:)?\/\/sp[1-4]\.((ggpht)|(googleusercontent))\.com\//i,
        gl = /^(https?:)?\/\/(qa(-red|-blue)?|dev2?|image-dev)(-|\.)lighthouse(-auth)?\.sandbox\.google\.com\//i,
        hl = /^(https?:)?\/\/lighthouse-(qa(-red|-blue)?|dev2)\.corp\.google\.com\//i;

    function il(a) { return el.test(a) || fl.test(a) || gl.test(a) || hl.test(a) };

    function jl(a) { return Lj.call(this, a) || this }
    u(jl, Lj);
    jl.prototype.getToken = function() { return R(this, 24) };
    jl.prototype.setToken = function(a) { return S(this, 24, a) };

    function kl() { this.D = void 0;
        this.C = {} }
    t = kl.prototype;
    t.set = function(a, b) { ll(this, a, b, !1) };
    t.add = function(a, b) { ll(this, a, b, !0) };

    function ll(a, b, c, d) { for (var e = 0; e < b.length; e++) { var f = b.charAt(e);
            a.C[f] || (a.C[f] = new kl);
            a = a.C[f] } if (d && void 0 !== a.D) throw Error('The collection already contains the key "' + b + '"');
        a.D = c }

    function ml(a, b) { for (var c = 0; c < b.length; c++)
            if (a = a.C[b.charAt(c)], !a) return;
        return a }
    t.get = function(a) { return (a = ml(this, a)) ? a.D : void 0 };
    t.X = function() { var a = [];
        nl(this, a); return a };

    function nl(a, b) { void 0 !== a.D && b.push(a.D); for (var c in a.C) nl(a.C[c], b) }
    t.ia = function(a) { var b = []; if (a) { for (var c = this, d = 0; d < a.length; d++) { var e = a.charAt(d); if (!c.C[e]) return [];
                c = c.C[e] }
            ol(c, a, b) } else ol(this, "", b); return b };

    function ol(a, b, c) { void 0 !== a.D && c.push(b); for (var d in a.C) ol(a.C[d], b + d, c) }
    t.V = function() { var a = this.X(); if (a.V && typeof a.V == m) a = a.V();
        else if (Ub(a) || typeof a === r) a = a.length;
        else { var b = 0,
                c; for (c in a) b++;
            a = b } return a };
    t.la = function() { return void 0 === this.D && Cc(this.C) };

    function pl() { if (!ql) { var a = ql = new kl,
                b; for (b in rl) a.add(b, rl[b]) } }
    var ql;

    function V(a, b) { this.types = a;
        this.C = b }
    var rl = {
        a: new V([3, 0], [function(a, b) { S(a, 21, b) }, function(a, b) { S(a, 56, b) }]),
        al: new V([3], [function(a, b) { S(a, 74, b) }]),
        b: new V([3, 0], [function(a, b) { S(a, 23, b) }, function(a, b) { S(a, 38, b) }]),
        ba: new V([0], [function(a, b) { S(a, 85, b) }]),
        bc: new V([0], [function(a, b) { S(a, 87, b) }]),
        br: new V([0], [function(a, b) { S(a, 86, b) }]),
        c: new V([3, 0], [function(a, b) { S(a, 2, b) }, function(a, b) { S(a, 39, b) }]),
        cc: new V([3], [function(a, b) { S(a, 51, b) }]),
        ci: new V([3], [function(a, b) { S(a, 32, b) }]),
        cp: new V([0], [function(a, b) { S(a, 92, b) }]),
        cv: new V([0], [function(a, b) { S(a, 94, b) }]),
        d: new V([3], [function(a, b) { S(a, 3, b) }]),
        dc: new V([5], [function(a, b) { S(a, 99, b) }]),
        df: new V([3], [function(a, b) { S(a, 80, b) }]),
        dv: new V([3], [function(a, b) { S(a, 90, b) }]),
        e: new V([0], [function(a, b) { S(a, 15, b) }]),
        f: new V([4], [function(a, b) { S(a, 16, b) }]),
        fg: new V([3], [function(a, b) { S(a, 34, b) }]),
        fh: new V([3], [function(a, b) { S(a, 30, b) }]),
        fm: new V([3], [function(a, b) { S(a, 84, b) }]),
        fo: new V([2], [function(a, b) { S(a, 79, b) }]),
        ft: new V([3], [function(a, b) { S(a, 50, b) }]),
        fv: new V([3], [function(a, b) {
            S(a,
                31, b)
        }]),
        g: new V([3], [function(a, b) { S(a, 14, b) }]),
        gd: new V([3], [function(a, b) { S(a, 83, b) }]),
        h: new V([3, 0], [function(a, b) { S(a, 4, b) }, function(a, b) { S(a, 13, b) }]),
        i: new V([3], [function(a, b) { S(a, 22, b) }]),
        ic: new V([0], [function(a, b) { S(a, 71, b) }]),
        id: new V([3], [function(a, b) { S(a, 70, b) }]),
        il: new V([3], [function(a, b) { S(a, 96, b) }]),
        ip: new V([3], [function(a, b) { S(a, 54, b) }]),
        iv: new V([0], [function(a, b) { S(a, 75, b) }]),
        j: new V([1], [function(a, b) { S(a, 29, b) }]),
        k: new V([3, 0], [function(a, b) { S(a, 17, b) }, function(a, b) {
            S(a, 42,
                b)
        }]),
        l: new V([0], [function(a, b) { S(a, 44, b) }]),
        lf: new V([3], [function(a, b) { S(a, 65, b) }]),
        lo: new V([3], [function(a, b) { S(a, 97, b) }]),
        m: new V([0], [function(a, b) { S(a, 63, b) }]),
        md: new V([3], [function(a, b) { S(a, 91, b) }]),
        mm: new V([4], [function(a, b) { S(a, 81, b) }]),
        mo: new V([3], [function(a, b) { S(a, 73, b) }]),
        mv: new V([3], [function(a, b) { S(a, 66, b) }]),
        n: new V([3], [function(a, b) { S(a, 20, b) }]),
        nc: new V([3], [function(a, b) { S(a, 55, b) }]),
        nd: new V([3], [function(a, b) { S(a, 53, b) }]),
        ng: new V([3], [function(a, b) { S(a, 95, b) }]),
        no: new V([3], [function(a, b) { S(a, 37, b) }]),
        ns: new V([3], [function(a, b) { S(a, 40, b) }]),
        nt0: new V([4], [function(a, b) { S(a, 36, b) }]),
        nu: new V([3], [function(a, b) { S(a, 46, b) }]),
        nw: new V([3], [function(a, b) { S(a, 48, b) }]),
        o: new V([1, 3], [function(a, b) { S(a, 7, b) }, function(a, b) { S(a, 27, b) }]),
        p: new V([3, 0], [function(a, b) { S(a, 19, b) }, function(a, b) { S(a, 43, b) }]),
        pa: new V([3], [function(a, b) { S(a, 61, b) }]),
        pc: new V([0], [function(a, b) { S(a, 88, b) }]),
        pd: new V([3], [function(a, b) { S(a, 60, b) }]),
        pf: new V([3], [function(a, b) { S(a, 67, b) }]),
        pg: new V([3], [function(a, b) { S(a, 72, b) }]),
        pi: new V([2], [function(a, b) { S(a, 76, b) }]),
        pp: new V([3], [function(a, b) { S(a, 52, b) }]),
        q: new V([4], [function(a, b) { S(a, 28, b) }]),
        r: new V([3, 0], [function(a, b) { S(a, 6, b) }, function(a, b) { S(a, 26, b) }]),
        rf: new V([3], [function(a, b) { S(a, 100, b) }]),
        rg: new V([3], [function(a, b) { S(a, 59, b) }]),
        rh: new V([3], [function(a, b) { S(a, 49, b) }]),
        rj: new V([3], [function(a, b) { S(a, 57, b) }]),
        ro: new V([2], [function(a, b) { S(a, 78, b) }]),
        rp: new V([3], [function(a, b) { S(a, 58, b) }]),
        rw: new V([3], [function(a, b) { S(a, 35, b) }]),
        rwa: new V([3], [function(a, b) { S(a, 64, b) }]),
        rwu: new V([3], [function(a, b) { S(a, 41, b) }]),
        s: new V([3, 0], [function(a, b) { S(a, 33, b) }, function(a, b) { S(a, 1, b) }]),
        sc: new V([0], [function(a, b) { S(a, 89, b) }]),
        sg: new V([3], [function(a, b) { S(a, 82, b) }]),
        sm: new V([3], [function(a, b) { S(a, 93, b) }]),
        t: new V([4], [function(a, b) { a.setToken(b) }]),
        u: new V([3], [function(a, b) { S(a, 18, b) }]),
        ut: new V([3], [function(a, b) { S(a, 45, b) }]),
        v: new V([0], [function(a, b) { S(a, 62, b) }]),
        vb: new V([0], [function(a, b) { S(a, 68, b) }]),
        vl: new V([0], [function(a,
            b) { S(a, 69, b) }]),
        vm: new V([3], [function(a, b) { S(a, 98, b) }]),
        w: new V([0], [function(a, b) { S(a, 12, b) }]),
        x: new V([0], [function(a, b) { S(a, 9, b) }]),
        y: new V([0], [function(a, b) { S(a, 10, b) }]),
        ya: new V([2], [function(a, b) { S(a, 77, b) }]),
        z: new V([0], [function(a, b) { S(a, 11, b) }])
    };
    t = pl.prototype;
    t.parse = function(a) {
        var b = new jl,
            c = new jl;
        if ("" != a) {
            a = a.split("-");
            for (var d = 0; d < a.length; d++) {
                var e = a[d];
                if (0 != e.length) {
                    var f = e,
                        g = !1,
                        h = f;
                    var k = f.substring(0, 1);
                    k != k.toLowerCase() && (g = !0, h = f.substring(0, 1).toLowerCase() + f.substring(1));
                    var n = ql;
                    for (k = 1; k <= h.length; ++k) { var v = n,
                            B = h.substring(0, k); if (0 == B.length ? v.la() : !ml(v, B)) break }
                    k = 1 == k ? null : (h = n.get(h.substring(0, k - 1))) ? { Fd: f.substring(0, k - 1), value: f.substring(k - 1), Od: g, attributes: h } : null;
                    if (k) {
                        f = [];
                        g = [];
                        h = !1;
                        for (n = 0; n < k.attributes.types.length; n++) {
                            v =
                                k.attributes.types[n];
                            var F = k.value;
                            B = d;
                            if (k.Od && 1 == v)
                                for (var M = F.length; 12 > M && B < a.length - 1;) F += "-" + a[B + 1], M = F.length, ++B;
                            else if (2 == v)
                                for (; B < a.length - 1 && a[B + 1].match(/^[\d\.]/);) F += "-" + a[B + 1], ++B;
                            M = k.attributes.C[n];
                            F = sl(this, v)(k.Fd, F, b, c, M);
                            if (null === F) { h = !0;
                                d = B; break } else f.push(v), g.push(F)
                        }
                        if (!h)
                            for (k = 0; k < g.length; k++) h = f[k], F = g[k], tl(this, h)(e, F)
                    }
                }
            }
        }
        return new ul(b, c)
    };

    function vl(a, b, c, d, e) { e(c, b);
        a = a.substring(0, 1);
        e(d, a == a.toUpperCase()) }
    t.Jd = function(a, b, c, d, e) { if ("" == b) return 0;
        isFinite(b) && (b = String(b));
        b = typeof b === r ? /^\s*-?0x/i.test(b) ? parseInt(b, 16) : parseInt(b, 10) : NaN; if (isNaN(b)) return 1;
        vl(a, b, c, d, e); return null };
    t.zd = function() {};
    t.Id = function(a, b, c, d, e) { if ("" == b) return 0; var f = Number(b);
        b = 0 == f && /^[\s\xa0]*$/.test(b) ? NaN : f; if (isNaN(b)) return 1;
        vl(a, b, c, d, e); return null };
    t.yd = function() {};
    t.Hd = function(a, b, c, d, e) { if ("" != b) return 2;
        vl(a, !0, c, d, e); return null };
    t.xd = function() {};
    t.Kd = function(a, b, c, d, e) { if ("" == b) return 0;
        vl(a, b, c, d, e); return null };
    t.Ad = function() {};

    function sl(a, b) { switch (b) {
            case 0:
                return x(a.Jd, a);
            case 2:
                return x(a.Id, a);
            case 3:
                return x(a.Hd, a);
            case 4:
            case 1:
                return x(a.Kd, a);
            default:
                return function() {} } }

    function tl(a, b) { switch (b) {
            case 0:
                return x(a.zd, a);
            case 2:
                return x(a.yd, a);
            case 3:
                return x(a.xd, a);
            case 4:
            case 1:
                return x(a.Ad, a);
            default:
                return function() {} } }

    function ul(a, b) { this.C = a;
        this.D = b };

    function wl(a, b) { null != a && this.D.apply(this, arguments) }
    wl.prototype.C = "";
    wl.prototype.set = function(a) { this.C = "" + a };
    wl.prototype.D = function(a, b, c) { this.C += String(a); if (null != b)
            for (var d = 1; d < arguments.length; d++) this.C += arguments[d]; return this };
    wl.prototype.toString = function() { return this.C };

    function xl(a) { this.G = null;
        this.F = [];
        this.C = null;
        yl(this, a) }

    function zl(a) { null == a.G && (a.G = new pl); return a.G }

    function yl(a, b) { a.C = b ? typeof b === r ? zl(a).parse(b) : b : zl(a).parse("") }

    function Al(a, b) { return a == b ? !1 : !0 }
    t = xl.prototype;
    t.lb = function(a) { a = a || void 0; var b = this.C,
            c = b.C;
        Al(a, U(c, 2), U(b.D, 2)) && S(c, 2, a); return this };
    t.kb = function(a) { a = a || void 0; var b = this.C,
            c = b.C;
        Al(a, T(c, 51), T(b.D, 51)) && S(c, 51, a); return this };
    t.mb = function(a) { a = a || void 0; var b = this.C,
            c = b.C;
        Al(a, T(c, 32), T(b.D, 32)) && S(c, 32, a); return this };
    t.Qa = function(a) { var b = this.C,
            c = b.C;
        Al(a, R(c, 13), R(b.D, 13)) && S(c, 13, a); return this };
    t.jb = function(a) { a = a || void 0; var b = this.C,
            c = b.C;
        Al(a, U(c, 20), U(b.D, 20)) && S(c, 20, a); return this };
    t.ob = function(a) { a = a || void 0; var b = this.C,
            c = b.C;
        Al(a, U(c, 19), U(b.D, 19)) && S(c, 19, a); return this };
    t.nb = function(a) { a = a || void 0; var b = this.C,
            c = b.C;
        Al(a, T(c, 60), T(b.D, 60)) && S(c, 60, a); return this };
    t.qb = function(a) { a = a || void 0; var b = this.C,
            c = b.C;
        Al(a, U(c, 67), U(b.D, 67)) && S(c, 67, a); return this };
    t.pb = function(a) { a = a || void 0; var b = this.C,
            c = b.C;
        Al(a, U(c, 52), U(b.D, 52)) && S(c, 52, a); return this };
    t.Da = function(a) { var b = this.C,
            c = b.C;
        Al(a, R(c, 1), R(b.D, 1)) && S(c, 1, a); return this };
    t.setToken = function(a) { a = a || void 0; var b = this.C,
            c = b.C;
        Al(a, c.getToken(), b.D.getToken()) && c.setToken(a); return this };
    t.Ra = function(a) { var b = this.C,
            c = b.C;
        Al(a, R(c, 12), R(b.D, 12)) && S(c, 12, a); return this };

    function Bl(a) { yl(a, ""); return a }
    t.oa = function() {
        this.F.length = 0;
        var a = this.C,
            b = a.C;
        a = a.D;
        W(this, "s", R(b, 1), R(a, 1));
        W(this, "w", R(b, 12), R(a, 12));
        X(this, "c", U(b, 2), U(a, 2));
        X(this, "d", U(b, 3), U(a, 3));
        W(this, "h", R(b, 13), R(a, 13));
        X(this, "s", T(b, 33), T(a, 33));
        X(this, "h", U(b, 4), U(a, 4));
        X(this, "p", U(b, 19), U(a, 19));
        X(this, "pp", U(b, 52), U(a, 52));
        X(this, "pf", U(b, 67), U(a, 67));
        X(this, "n", U(b, 20), U(a, 20));
        W(this, "r", R(b, 26), R(a, 26));
        X(this, "r", U(b, 6), U(a, 6));
        X(this, "o", T(b, 27), T(a, 27));
        var c = R(b, 7);
        Cl(this, "o", c, R(a, 7));
        c = R(b, 29);
        Cl(this, "j", c, R(a,
            29));
        W(this, "x", R(b, 9), R(a, 9));
        W(this, "y", R(b, 10), R(a, 10));
        W(this, "z", R(b, 11), R(a, 11));
        X(this, "g", U(b, 14), U(a, 14));
        W(this, "e", R(b, 15), R(a, 15));
        Cl(this, "f", R(b, 16), R(a, 16));
        X(this, "k", T(b, 17), T(a, 17));
        X(this, "u", T(b, 18), T(a, 18));
        X(this, "ut", T(b, 45), T(a, 45));
        X(this, "i", T(b, 22), T(a, 22));
        X(this, "a", T(b, 21), T(a, 21));
        X(this, "b", U(b, 23), U(a, 23));
        W(this, "b", R(b, 38), R(a, 38));
        W(this, "c", R(b, 39), R(a, 39), 16, 8);
        Cl(this, "q", R(b, 28), R(a, 28));
        X(this, "fh", T(b, 30), T(a, 30));
        X(this, "fv", T(b, 31), T(a, 31));
        X(this, "fg",
            U(b, 34), U(a, 34));
        X(this, "ci", T(b, 32), T(a, 32));
        Cl(this, "t", b.getToken(), a.getToken());
        Cl(this, "nt0", R(b, 36), R(a, 36));
        X(this, "rw", U(b, 35), U(a, 35));
        X(this, "rwu", U(b, 41), U(a, 41));
        X(this, "rwa", U(b, 64), U(a, 64));
        X(this, "nw", U(b, 48), U(a, 48));
        X(this, "rh", U(b, 49), U(a, 49));
        X(this, "no", U(b, 37), U(a, 37));
        X(this, "ns", T(b, 40), T(a, 40));
        W(this, "k", R(b, 42), R(a, 42));
        W(this, "p", R(b, 43), R(a, 43));
        W(this, "l", R(b, 44), R(a, 44));
        W(this, "v", R(b, 62), R(a, 62));
        X(this, "nu", T(b, 46), T(a, 46));
        X(this, "ft", T(b, 50), T(a, 50));
        X(this, "cc",
            T(b, 51), T(a, 51));
        X(this, "nd", T(b, 53), T(a, 53));
        X(this, "ip", T(b, 54), T(a, 54));
        X(this, "nc", T(b, 55), T(a, 55));
        W(this, "a", R(b, 56), R(a, 56));
        X(this, "rj", T(b, 57), T(a, 57));
        X(this, "rp", T(b, 58), T(a, 58));
        X(this, "rg", T(b, 59), T(a, 59));
        X(this, "pd", T(b, 60), T(a, 60));
        X(this, "pa", T(b, 61), T(a, 61));
        W(this, "m", R(b, 63), R(a, 63));
        W(this, "vb", R(b, 68), R(a, 68));
        W(this, "vl", R(b, 69), R(a, 69));
        X(this, "lf", T(b, 65), T(a, 65));
        X(this, "mv", T(b, 66), T(a, 66));
        X(this, "id", T(b, 70), T(a, 70));
        W(this, "ic", R(b, 71), R(a, 71));
        X(this, "pg", U(b, 72), U(a,
            72));
        X(this, "mo", T(b, 73), T(a, 73));
        X(this, "al", T(b, 74), T(a, 74));
        W(this, "iv", R(b, 75), R(a, 75));
        W(this, "pi", Oj(b, 76), Oj(a, 76));
        W(this, "ya", Oj(b, 77), Oj(a, 77));
        W(this, "ro", Oj(b, 78), Oj(a, 78));
        W(this, "fo", Oj(b, 79), Oj(a, 79));
        X(this, "df", T(b, 80), T(a, 80));
        Cl(this, "mm", R(b, 81), R(a, 81));
        X(this, "sg", T(b, 82), T(a, 82));
        X(this, "gd", T(b, 83), T(a, 83));
        X(this, "fm", T(b, 84), T(a, 84));
        W(this, "ba", R(b, 85), R(a, 85));
        W(this, "br", R(b, 86), R(a, 86));
        W(this, "bc", R(b, 87), R(a, 87), 16, 8);
        W(this, "pc", R(b, 88), R(a, 88), 16, 8);
        W(this, "sc", R(b,
            89), R(a, 89), 16, 8);
        X(this, "dv", T(b, 90), T(a, 90));
        X(this, "md", T(b, 91), T(a, 91));
        W(this, "cp", R(b, 92), R(a, 92));
        X(this, "sm", T(b, 93), T(a, 93));
        W(this, "cv", R(b, 94), R(a, 94));
        X(this, "ng", T(b, 95), T(a, 95));
        X(this, "il", T(b, 96), T(a, 96));
        X(this, "lo", T(b, 97), T(a, 97));
        X(this, "vm", T(b, 98), T(a, 98));
        Cl(this, "dc", R(b, 99), R(a, 99));
        X(this, "rf", T(b, 100), T(a, 100));
        return this.F.join("-")
    };

    function W(a, b, c, d, e, f) { if (null != c) { var g = void 0 == e || 10 != e && 16 != e ? 10 : e;
            c = c.toString(g);
            e = new wl;
            e.D(16 == g ? "0x" : "");
            g = e.D;
            void 0 == f ? f = "" : (f -= c.length, f = 0 >= f ? "" : ne("0", f));
            g.call(e, f);
            e.D(c);
            Dl(a, b, e.toString(), !!d) } }

    function X(a, b, c, d) { c && Dl(a, b, "", !!d) }

    function Cl(a, b, c, d) { c && Dl(a, b, c, !!d) }

    function Dl(a, b, c, d) { d && (b = b.substring(0, 1).toUpperCase() + b.substring(1));
        a.F.push(b + c) };

    function Y(a) { xl.call(this, a) }
    z(Y, xl);
    t = Y.prototype;
    t.lb = function(a) { a && El(this); return Y.O.lb.call(this, a) };
    t.Qa = function(a) { a = null == a || 0 > a ? void 0 : a;
        null != a && this.Da(); return Y.O.Qa.call(this, a) };
    t.mb = function(a) { a && El(this); return Y.O.mb.call(this, a) };
    t.kb = function(a) { a && El(this); return Y.O.kb.call(this, a) };
    t.Da = function(a) { Vb(a) && (a = Math.max(a.width, a.height));
        a = null == a || 0 > a ? void 0 : a;
        null != a && (this.Ra(), this.Qa()); return Y.O.Da.call(this, a) };
    t.ob = function(a) { a && El(this); return Y.O.ob.call(this, a) };
    t.pb = function(a) { a && El(this); return Y.O.pb.call(this, a) };
    t.qb = function(a) { a && El(this); return Y.O.qb.call(this, a) };
    t.jb = function(a) { a && El(this); return Y.O.jb.call(this, a) };
    t.nb = function(a) { a && El(this); return Y.O.nb.call(this, a) };
    t.Ra = function(a) { a = null == a || 0 > a ? void 0 : a;
        null != a && this.Da(); return Y.O.Ra.call(this, a) };

    function El(a) { a.jb();
        a.kb();
        a.lb();
        a.mb();
        a.nb();
        a.ob();
        a.pb();
        a.qb() }
    t.oa = function() { var a = this.C.C;
        T(a, 18) || T(a, 45) ? R(a, 1) || this.Da(0) : (a = this.C.C, R(a, 1) || R(a, 12) || R(a, 13) || (this.Da(), this.Qa(), this.Ra(), El(this))); return Y.O.oa.call(this) };
    var Fl = /^[^\/]*\/\//;

    function Gl(a) { this.G = a;
        this.J = "";
        (a = this.G.match(Fl)) && a[0] ? (this.J = a[0], a = this.J.match(/\w+/) ? this.G : "http://" + this.G.substring(this.J.length)) : a = "http://" + this.G;
        this.D = ek(a, !0);
        this.K = !0;
        this.Y = !1 }

    function Hl(a, b) { a.F = a.F ? a.F + ("/" + b) : b }

    function Il(a) { if (void 0 == a.C) { a.F = null;
            a.C = a.D.J.substring(1).split("/"); var b = a.C.length;
            2 < b && "u" == a.C[0] && (Hl(a, a.C[0] + "/" + a.C[1]), a.C.shift(), a.C.shift(), b -= 2); if (0 == b || 4 == b || 7 < b) return a.K = !1, a.C; if (2 == b) Hl(a, a.C[0]);
            else if ("image" == a.C[0]) Hl(a, a.C[0]);
            else if (7 == b || 3 == b) return a.K = !1, a.C; if (3 >= b) { a.Y = !0;
                3 == b && (Hl(a, a.C[1]), a.C.shift(), --b);--b; var c = a.C[b],
                    d = c.indexOf("="); - 1 != d && (a.C[b] = c.substr(0, d), a.C.push(c.substr(d + 1))) } } return a.C }

    function Jl(a) { Il(a); return a.Y }

    function Kl(a) { Il(a);
        void 0 == a.F && (a.F = null); return a.F }

    function Ll(a) { switch (Il(a).length) {
            case 7:
                return !0;
            case 6:
                return null == Kl(a);
            case 5:
                return !1;
            case 3:
                return !0;
            case 2:
                return null == Kl(a);
            case 1:
                return !1;
            default:
                return !1 } }

    function Ml(a, b) { if (Jl(a)) a: { var c = null != Kl(a) ? 1 : 0; switch (b) {
                case 6:
                    b = 0 + c; break;
                case 4:
                    if (!Ll(a)) { a = null; break a }
                    b = 1 + c; break;
                default:
                    a = null; break a }
            a = Il(a)[b] }
        else a: { c = null != Kl(a) ? 1 : 0; switch (b) {
                case 0:
                    b = 0 + c; break;
                case 1:
                    b = 1 + c; break;
                case 2:
                    b = 2 + c; break;
                case 3:
                    b = 3 + c; break;
                case 4:
                    if (!Ll(a)) { a = null; break a }
                    b = 4 + c; break;
                case 5:
                    b = Ll(a) ? 1 : 0;
                    b = 4 + c + b; break;
                default:
                    a = null; break a }
            a = Il(a)[b] }
        return a }

    function Nl(a) { void 0 == a.Z && (a.Z = Ml(a, 4)); return a.Z };

    function Ol() {}
    Ol.prototype.parse = function(a) { return new Pl(a) };

    function Pl(a) { Gl.call(this, a) }
    u(Pl, Gl);

    function Ql(a) { this.D = null;
        a instanceof Pl || (void 0 == Rl && (Rl = new Ol), a = Rl.parse(a.toString()));
        a = this.D = a; if (void 0 == a.N) { var b = Nl(a);
            b || (b = "");
            a.N = (new pl).parse(b) }
        xl.call(this, a.N);
        this.N = this.D.J;
        a = this.D;
        b = a.D.K;
        this.K = a.D.G + (b ? ":" + b : "");
        this.J = this.D.D.C.toString() }
    var Rl;
    z(Ql, Y);

    function Sl(a) { a.J = ""; return a }
    Ql.prototype.oa = function() {
        var a = this.D;
        Il(a);
        if (!a.K) return this.D.G;
        var b = Ql.O.oa.call(this);
        a = [];
        null != Kl(this.D) && a.push(Kl(this.D));
        if (Jl(this.D)) { var c = this.D;
            void 0 == c.T && (c.T = Ml(c, 6));
            a.push(c.T + (b ? "=" + b : "")) } else {
            c = a.push;
            var d = this.D;
            void 0 == d.ga && (d.ga = Ml(d, 0));
            c.call(a, d.ga);
            c = a.push;
            d = this.D;
            void 0 == d.ca && (d.ca = Ml(d, 1));
            c.call(a, d.ca);
            c = a.push;
            d = this.D;
            void 0 == d.R && (d.R = Ml(d, 2));
            c.call(a, d.R);
            c = a.push;
            d = this.D;
            void 0 == d.ra && (d.ra = Ml(d, 3));
            c.call(a, d.ra);
            b && a.push(b);
            b = a.push;
            c = this.D;
            void 0 == c.M && (c.M = Ml(c, 5));
            b.call(a, c.M)
        }
        return this.N + this.K + "/" + a.join("/") + (this.J ? "?" + this.J : "")
    };
    var Tl = new Ol;

    function Ul() { var a = Vl; if (a.Aa && a.hasOwnProperty("Aa")) return a.Aa; var b = new a; return a.Aa = b };

    function Vl() { this.F = null;
        this.C = {};
        this.D = !1 }
    Vl.prototype.init = function(a, b) { var c = vc(a);
        Ag.Ya().init(a, c);
        this.G = b };
    Vl.prototype.J = function(a, b, c) { c.ctrlKey || c.altKey || c.shiftKey || c.metaKey || (a = this.C[a]) && 0 < a.length && (Wl(this), Dg()(a, b), c.preventDefault()) };
    Vl.prototype.K = function() { Wl(this);
        Bg(Sb) };

    function Wl(a) { a.D || (document.body.appendChild(Qe("LINK", { type: "text/css", rel: "stylesheet", href: a.G })), a.D = !0) };

    function Xl() { this.D = {};
        this.C = 0;
        this.J = [];
        this.F = []; var a = this;
        this.K = function() { Yl(a) } }
    Xl.prototype.init = function() { for (var a = this.D, b = Ne(document, "img", "delayLoad", void 0), c = 0; c < b.length; c++)
            if (b[c].style.display == p && (b[c].style.display = ""), 5 > c) { var d = b[c]; "" != d.longDesc && (d.src = d.longDesc) } else d = b[c].id, "" == d && (d = "av-delay-tempId-" + c), a[d] = { ec: b[c], key: d }, this.C++;
        0 != this.C && (this.M = L(window, "scroll", this.K), this.N = L(window, "resize", this.K), Zl(this)) };

    function Yl(a) { a.G && window.clearTimeout(a.G);
        a.G = window.setTimeout(function() { a.G = null;
            Zl(a) }, 100) }

    function Zl(a) {
        if (!(0 > a.C))
            if (0 == a.C) Hf(a.M), Hf(a.N), a.C = -1;
            else {
                var b = !1,
                    c;
                for (c in a.D) {
                    a: {
                        var d = a;
                        var e = a.D[c],
                            f = window.document;f = "CSS1Compat" == f.compatMode ? f.documentElement : f.body;f = (new Ke(f.clientWidth, f.clientHeight)).height;
                        var g = e.ec;
                        if (1 == g.nodeType) { try { var h = g.getBoundingClientRect() } catch (k) { h = { left: 0, top: 0, right: 0, bottom: 0 } }
                            g = new Je(h.left, h.top) } else g = g.changedTouches ? g.changedTouches[0] : g,
                        g = new Je(g.clientX, g.clientY);g = g.y;
                        if (0 <= g && g <= f) d.J.push(e);
                        else if (0 < g && g < Math.round(2.25 *
                                f)) d.F.push(e);
                        else if (0 > g && g > Math.round(-1.25 * f)) d.F.push(e);
                        else { d = !1; break a }
                        d = !0
                    }
                    d && (b = !0)
                }
                if (b) { b = a.J.concat(a.F); for (c = 0; c < b.length; c++) h = b[c].ec, "" != h.longDesc && (h.src = h.longDesc), a.C--, delete a.D[b[c].key];
                    a.J = [];
                    a.F = [] }
            }
    };
    var $l = !I && !(E("Safari") && !(Id() || E("Coast") || E("Opera") || E(fa) || E("Edg/") || E("OPR") || E("Firefox") || E("FxiOS") || E("Silk") || E("Android")));

    function am(a) { if (/-[a-z]/.test(Aa)) return null; if ($l && a.dataset) { if (!(!E("Android") || Id() || E("Firefox") || E("FxiOS") || E("Opera") || E("Silk") || Aa in a.dataset)) return null;
            a = a.dataset.commentId; return void 0 === a ? null : a } return a.getAttribute("data-" + Aa.replace(/([A-Z])/g, "-$1").toLowerCase()) };

    function bm(a) {
        Q.call(this, "Blog", a);
        this.C = a.L;
        this.J = new cj(hj());
        if (this.C.data) {
            a = new Rh;
            this.K = Th(a, "blog.canonicalUrl");
            if (this.C.data.lightboxEnabled) {
                var b = this.C.data.lightboxModuleUrl,
                    c = this.C.data.lightboxCssUrl;
                Ul().init(b, c);
                b = Ne(document, "DIV", "post-body", this.C.C);
                for (c = 0; c < b.length; c++) {
                    for (var d = "fakeId" + cm++, e = Ul(), f = Ne(document, "IMG", void 0, b[c]), g = f.length, h = [], k = 0; k < g; k++) {
                        var n = f[k].src,
                            v = null,
                            B = af(f[k], "A");
                        if (B) {
                            B = B.href;
                            var F = B;
                            var M = n;
                            if (il(F) && il(M)) {
                                var aa = new Ol;
                                F = aa.parse(F ?
                                    Bl(Sl(new Ql(F))).oa() : "");
                                M = aa.parse(M ? Bl(Sl(new Ql(M))).oa() : "");
                                M = F.D.J == M.D.J
                            } else M = !1;
                            if (M) { if (B != n && (v = n), n = B, B = Nl(Tl.parse(n))) B = (new pl).parse(B), B = new Y(B), M = (M = void 0, void 0), aa = B.C, F = aa.C, Al(M, U(F, 4), U(aa.D, 4)) && S(F, 4, M), M = (M = void 0, void 0), aa = B.C, F = aa.C, Al(M, U(F, 6), U(aa.D, 6)) && S(F, 6, M), B = B.oa(), n = new Ql(n), yl(n, B), n = n.oa() } else if (B != n) continue;
                            h.push({ imageUrl: n, thumbnailUrl: v });
                            L(f[k], wa, x(e.J, e, d, h.length - 1))
                        }
                    }
                    0 < h.length && (e.C[d] = h, e.F || (e.F = L(window, "load", e.K, !1, e)))
                }
            }
            this.C.data.mobile &&
                (this.F = new dl(Th(a, "blog.pageTitle"), this.K, !!Th(a, "blog.sharing.disableGooglePlus")));
            this.G = this.D = null
        }
    }
    u(bm, Q);
    t = bm.prototype;
    t.ja = function(a, b) {
        if ("getComments" == a) {
            if (b.comments && b.messages) {
                a = b.comments;
                for (var c = b.config, d = 0; d < a.length; d++) a: {
                    var e = b,
                        f = a[d];
                    if (!document.getElementById("c" + f.id)) {
                        f.author = rj(this.J, f.author);
                        f.body = rj(this.J, f.body);
                        var g = 1;
                        if (f.inReplyTo) { var h = document.getElementById("c" + f.inReplyTo); if (h) { var k;
                                g = h; for (k = []; g;) A(g, "comment") && k.push(g), g = We(g);
                                g = k.length + 1;
                                k.length + 1 > e.config.maxDepth && ((h = af(h.parentNode, null, "comment", void 0)) ? (g--, f.inReplyTo = h.id.slice(1)) : g = 1) } }
                        h = document.getElementById("c" +
                            f.inReplyTo + "-ra");
                        if (!h && (h = document.getElementById("top-ra"), !h)) break a;
                        g = { config: e.config, Bd: e.messages, td: f, depth: g };
                        k = Xk;
                        e = cc || (cc = new cf);
                        g = k(g || Wk, void 0);
                        if (Vb(g))
                            if (g instanceof pk) { if (g.$b !== mk) throw Error("Sanitized content was not of kind HTML.");
                                g = $d(Nc("Soy SanitizedContent of kind HTML produces SafeHtml-contract-compliant value."), g.toString(), g.zb) } else g = Md("zSoyz");
                        else g = Md(String(g));
                        e = e.D;
                        k = g;
                        g = Se(e, "DIV");
                        I ? (k = Wd(Zd, k), G(g, k), g.removeChild(g.firstChild)) : G(g, k);
                        if (1 == g.childNodes.length) e =
                            g.removeChild(g.firstChild);
                        else
                            for (e = e.createDocumentFragment(); g.firstChild;) e.appendChild(g.firstChild);
                        dm(this, e);
                        h.appendChild(e);
                        f.inReplyTo && (f = document.getElementById("c" + f.inReplyTo + "-rt")) && sc(f, Za)
                    }
                }
                a.length < c.commentsPerPage ? (this.D = null, b = K("loadmore", this.C.C), qc(b, Za)) : this.D = a[a.length - 1].timestampAbs + 1
            }
        } else Q.prototype.ja.call(this, a, b)
    };
    t.bd = function(a) { var b = null,
            c = null;
        a = af(a.currentTarget, null, "thread-toggle", void 0);
        A(a, ob) ? (b = nb, c = ob) : (b = ob, c = nb);
        fc(Me(c, We(a)), function(d) { uc(d, c, b) }) };
    t.Oc = function(a) { a = am(a.currentTarget);
        em(this, a || void 0) };

    function em(a, b) { var c = document.getElementById(za); if (c) { var d = ek(c.src),
                e = b ? "c" + b : "top",
                f = document.getElementById(e + "-ce");
            f && f !== We(c) && (c.height = "250px", c.style.display = ua, c.src = "", f.appendChild(c), b ? d.C.set("parentID", b) : kk(d.C, "parentID"), c.src = d.toString());
            fc(Me("continue", a.C.C), function(g) { sc(g, Za) });
            (a = document.getElementById(e + "-continue")) && qc(a, Za) } }
    t.Hc = function() { this.G && this.D && this.H.wa("getComments", { postId: this.G, publishedMin: this.D }, function(a) { return 500 > je(a) }, ia) };
    t.ha = function() {
        if (this.C.data.mobile) { var a = J(za),
                b = window.location.href.split("#");
            b[b.length - 1] && "comment-form" == b[b.length - 1] ? a && (a.style.display = ua) : a && (a.style.display = p);
            a = P(this.H, "comment-editor-toggle-link");
            null != a && (a.onclick = this.ad);
            (a = J("mobile-share-button")) && this.F && (a.onclick = x(this.Dd, this)) }
        this.N = new Xl;
        this.N.init();
        dm(this, this.C.C);
        if (a = K("loadmore", this.C.C)) {
            a.onclick = this.Hc.bind(this);
            if ($l && a.dataset) b = a.dataset;
            else {
                b = {};
                for (var c = a.attributes, d = 0; d < c.length; ++d) {
                    var e =
                        c[d];
                    if (Xc(e.name, "data-")) { var f = oe(e.name.substr(5));
                        b[f] = e.value }
                }
            }
            b.publishedMin && b.postId && (this.D = parseInt(b.publishedMin, 10) + 1, this.G = b.postId, sc(a, Za))
        }
        em(this)
    };

    function dm(a, b) { fc(Me("thread-toggle", b), function(c) { c.onclick = this.bd.bind(this);
            fc((c || document).getElementsByTagName("A"), function(d) { d.href = "javascript:;" }) }, a);
        fc(Me("comment-reply", b), function(c) { c.onclick = this.Oc.bind(this);
            c.href = "javascript:;" }, a) }
    t.Dd = function() { this.F.ta ? this.F.show(!0) : this.F.render() };
    t.ad = function() { var a = J(za);
        a && (a.style.display = a.style.display == p ? ua : p); return !1 };
    var cm = 0;
    y("_BlogView", bm);

    function fm(a) { Q.call(this, "BlogList", a) }
    u(fm, Q);
    t = fm.prototype;
    t.ha = function() { var a = this.H.L.data;
        this.Hb = a.totalItems;
        this.bb = a.numItemsToShow;
        0 != this.bb && this.Hb > this.bb && (Mh(this.H, "show-all").onclick = this.qc.bind(this), Mh(this.H, "show-n").onclick = this.qc.bind(this));
        L(window, "load", this.Gc) };
    t.qc = function() { var a = P(this.H, "blogs"); if (null != a) { a = a.getElementsByTagName("li"); for (var b = this.bb; b < this.Hb; b++) { var c = a[b];
                c.style.display = c.style.display == p ? ua : p }
            a = Mh(this.H, "show-all");
            a.style.display = a.style.display == p ? "inline" : p;
            a = Mh(this.H, "show-n");
            a.style.display = a.style.display == p ? "inline" : p } };
    t.Gc = function() { for (var a = 0, b = document.images.length; a < b; a++) { var c = document.images[a],
                d = null; if (d = c.getAttribute("data-lateloadsrc")) L(c, Sa, function() { this.style.visibility = Za }), c.src = d } };
    t.Hb = null;
    t.bb = null;
    y("_BlogListView", fm);

    function gm(a) { Q.call(this, "BlogSearch", a) }
    u(gm, Q);
    y("_BlogSearchView", gm);
    var hm = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;

    function im(a) { Q.call(this, "ContactForm", a);
        this.C = a.L;
        this.F = this.C.data }
    z(im, Q);
    y("_ContactFormView", im);
    im.prototype.ha = function() { var a = J(P(this.H, Ia)); if (a) { var b = this;
            a.onclick = function() { jm(b) && km(b) } } };

    function jm(a) {
        J(P(a.H, Fa)).className = Fa;
        J(P(a.H, Fa)).textContent = "";
        J(P(a.H, Ja)).className = Ja;
        J(P(a.H, Ja)).textContent = "";
        var b = Se(document, "IMG");
        b.src = "https://resources.blogblog.com/img/widgets/icon_contactform_cross.gif";
        b.className = "contact-form-cross";
        b.onclick = function() { J(P(a.H, Fa)).className = Fa;
            J(P(a.H, Fa)).textContent = "" };
        var c = C(J(P(a.H, Da)).value);
        if (!hm.test(c)) return J(P(a.H, Fa)).className = Ga, J(P(a.H, Fa)).innerHTML = a.F.contactFormInvalidEmailMsg, J(P(a.H, Fa)).appendChild(b), !1;
        c = J(P(a.H,
            Ea)).value;
        return null == c || "" == C(c) ? (J(P(a.H, Fa)).className = Ga, J(P(a.H, Fa)).innerHTML = a.F.contactFormEmptyMessageMsg, J(P(a.H, Fa)).appendChild(b), !1) : !0
    }

    function km(a) {
        J(P(a.H, Ia)).className = "contact-form-button contact-form-button-submit disabled";
        J(P(a.H, Ia)).disabled = !0;
        J(P(a.H, Ja)).className = Ka;
        J(P(a.H, Ja)).innerHTML = a.F.contactFormMessageSendingMsg;
        var b = encodeURIComponent(C(J(P(a.H, Ha)).value)),
            c = encodeURIComponent(C(J(P(a.H, Da)).value)),
            d = encodeURIComponent(C(J(P(a.H, Ea)).value)),
            e = encodeURIComponent(a.F.blogId);
        b = ["name=" + b, "email=" + c, "message=" + d, "blogID=" + e];
        c = a.F.submitUrl;
        if (window.XDomainRequest && I && !De("10")) {
            var f = new XDomainRequest;
            f.onload = function() { var g = eval("(" + f.responseText + ")");
                g = eval(g.details.emailSentStatus);
                lm(a, g) };
            f.open("post", c, !0);
            f.send(b.join("&"))
        } else hh(c, a.od.bind(a), "POST", b.join("&"))
    }
    im.prototype.od = function(a) { a = a.target; var b = eval("(" + rh(a) + ")");
        b = eval(b.details.emailSentStatus);
        lm(this, qh(a) && b) };

    function lm(a, b) { J(P(a.H, Ja)).className = Ka;
        b ? (J(P(a.H, Ha)).value = "", J(P(a.H, Da)).value = "", J(P(a.H, Ea)).value = "", J(P(a.H, Ja)).innerHTML = a.F.contactFormMessageSentMsg) : J(P(a.H, Ja)).innerHTML = a.F.contactFormMessageNotSentMsg;
        setTimeout(function() { J(P(a.H, Ja)).className = Ja;
            J(P(a.H, Ja)).textContent = "";
            J(P(a.H, Ia)).className = "contact-form-button contact-form-button-submit";
            J(P(a.H, Ia)).removeAttribute("disabled") }, 3E3) };

    function mm(a) { Q.call(this, "Example", a) }
    u(mm, Q);
    y("_ExampleView", mm);

    function nm(a) { Q.call(this, "FeaturedPost", a) }
    u(nm, Q);
    y("_FeaturedPostView", nm);
    /*

     Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: MIT
    */
    function om(a) { var b = pm;
        this.J = [];
        this.Y = b;
        this.ga = a || null;
        this.G = this.F = !1;
        this.D = void 0;
        this.R = this.Z = this.N = !1;
        this.K = 0;
        this.C = null;
        this.M = 0 }
    om.prototype.cancel = function(a) { if (this.F) this.D instanceof om && this.D.cancel();
        else { if (this.C) { var b = this.C;
                delete this.C;
                a ? b.cancel(a) : (b.M--, 0 >= b.M && b.cancel()) }
            this.Y ? this.Y.call(this.ga, this) : this.R = !0;
            this.F || (a = new qm(this), rm(this), sm(this, !1, a)) } };
    om.prototype.T = function(a, b) { this.N = !1;
        sm(this, a, b) };

    function sm(a, b, c) { a.F = !0;
        a.D = c;
        a.G = !b;
        tm(a) }

    function rm(a) { if (a.F) { if (!a.R) throw new um(a);
            a.R = !1 } }
    om.prototype.callback = function(a) { rm(this);
        sm(this, !0, a) };

    function vm(a, b, c, d) { a.J.push([b, c, d]);
        a.F && tm(a) }
    om.prototype.then = function(a, b, c) { var d, e, f = new fg(function(g, h) { e = g;
            d = h });
        vm(this, e, function(g) { g instanceof qm ? f.cancel() : d(g) }); return f.then(a, b, c) };
    om.prototype.$goog_Thenable = !0;

    function wm(a) { return hc(a.J, function(b) { return typeof b[1] === m }) }

    function tm(a) {
        if (a.K && a.F && wm(a)) { var b = a.K,
                c = xm[b];
            c && (w.clearTimeout(c.fa), delete xm[b]);
            a.K = 0 }
        a.C && (a.C.M--, delete a.C);
        b = a.D;
        for (var d = c = !1; a.J.length && !a.N;) { var e = a.J.shift(),
                f = e[0],
                g = e[1];
            e = e[2]; if (f = a.G ? g : f) try { var h = f.call(e || a.ga, b);
                void 0 !== h && (a.G = a.G && (h == b || h instanceof Error), a.D = b = h); if (eg(b) || typeof w.Promise === m && b instanceof w.Promise) d = !0, a.N = !0 } catch (k) { b = k, a.G = !0, wm(a) || (c = !0) } }
        a.D = b;
        d && (h = x(a.T, a, !0), d = x(a.T, a, !1), b instanceof om ? (vm(b, h, d), b.Z = !0) : b.then(h, d));
        c && (b = new ym(b),
            xm[b.fa] = b, a.K = b.fa)
    }

    function um() { bc.call(this) }
    z(um, bc);
    um.prototype.message = "Deferred has already fired";
    um.prototype.name = "AlreadyCalledError";

    function qm() { bc.call(this) }
    z(qm, bc);
    qm.prototype.message = "Deferred was canceled";
    qm.prototype.name = "CanceledError";

    function ym(a) { this.fa = w.setTimeout(x(this.D, this), 0);
        this.C = a }
    ym.prototype.D = function() { delete xm[this.fa]; throw this.C; };
    var xm = {};

    function zm(a, b) {
        var c = b || {};
        b = c.document || document;
        var d = Tc(a).toString(),
            e = df(new cf(b), "SCRIPT"),
            f = { oc: e, ua: void 0 },
            g = new om(f),
            h = null,
            k = null != c.timeout ? c.timeout : 5E3;
        0 < k && (h = window.setTimeout(function() { Am(e, !0); var n = new Bm(1, "Timeout reached for loading script " + d);
            rm(g);
            sm(g, !1, n) }, k), f.ua = h);
        e.onload = e.onreadystatechange = function() { e.readyState && "loaded" != e.readyState && e.readyState != Ba || (Am(e, c.sd || !1, h), g.callback(null)) };
        e.onerror = function() {
            Am(e, !0, h);
            var n = new Bm(0, "Error while loading script " +
                d);
            rm(g);
            sm(g, !1, n)
        };
        f = c.attributes || {};
        Fc(f, { type: mb, charset: "UTF-8" });
        Oe(e, f);
        ee(e, a);
        Cm(b).appendChild(e);
        return g
    }

    function Cm(a) { var b = (a || document).getElementsByTagName("HEAD"); return b && 0 !== b.length ? b[0] : a.documentElement }

    function pm() { if (this && this.oc) { var a = this.oc;
            a && "SCRIPT" == a.tagName && Am(a, !0, this.ua) } }

    function Am(a, b, c) { null != c && w.clearTimeout(c);
        a.onload = Sb;
        a.onerror = Sb;
        a.onreadystatechange = Sb;
        b && window.setTimeout(function() { Ve(a) }, 0) }

    function Bm(a, b) { var c = "Jsloader error (code #" + a + ")";
        b && (c += ": " + b);
        bc.call(this, c);
        this.code = a }
    z(Bm, bc);

    function Dm() { this.C = Em;
        this.ua = 5E3 }
    var Fm = 0;
    Dm.prototype.cancel = function(a) { a && (a.vd && a.vd.cancel(), a.fa && Gm(a.fa, !1)) };

    function Hm(a) { return function() { Gm(a, !1) } }

    function Im(a, b) { return function(c) { Gm(a, !0);
            b.apply(void 0, arguments) } }

    function Gm(a, b) { a = "_callbacks___" + a; if (w[a])
            if (b) try { delete w[a] } catch (c) { w[a] = void 0 } else w[a] = Sb };

    function Jm(a) { Q.call(this, "Feed", a) }
    u(Jm, Q);
    Jm.prototype.ja = function(a, b) { "getFeed" == a ? (this.C.F = b, Km(this.C)) : Q.prototype.ja.call(this, a, b) };
    Jm.prototype.ha = function() { if (this.D = P(this.H, "feedItemListDisplay")) { var a = this.H.L.data;
            this.C = new Lm(a.feedUrl, this.D, { numItemsShow: a.numItemsShow, showItemAuthor: a.showItemAuthor, showItemDate: a.showItemDate, linkTarget: a.openLinksInNewWindow ? qa : "_self", useFeedWidgetServ: "true" === a.useFeedWidgetServ }); "true" === a.useFeedWidgetServ ? this.H.wa("getFeed", null, null, ia) : Km(this.C) } };
    var Mm = { moduleTitle: null, feedUrl: function(a) { a = a.replace(/^\s+/, "").replace(/\s+$/, ""); if (0 == a.length) return LayoutsMessages.FIELD_CANNOT_BE_BLANK }, numItemsShow: function(a, b) { return function(c) { c = parseInt(c, 10); if (isNaN(c)) return LayoutsMessages.MUST_SPECIFY_A_NUMBER; if (c < a) return LayoutsMessages.NUMBER_TOO_SMALL + " " + a; if (c > b) return LayoutsMessages.NUMBER_TOO_LARGE + " " + b } }(1, 5), showItemDate: null, showItemAuthor: null, securityToken: null, openLinksInNewWindow: null };

    function Lm(a, b, c) { this.N = a;
        this.D = b;
        this.C = c }

    function Km(a) { if (a.C.useFeedWidgetServ) "ok" == a.F.status ? Nm(a, a.F.feed) : Om(a);
        else { var b = new Dm;
            b.ua = -1; var c = { q: a.N, num: a.C.numItemsShow, output: "json", v: "1.0" },
                d = x(a.G, a);
            a = c ? Dc(c) : {};
            c = "_" + (Fm++).toString(36) + Date.now().toString(36); var e = "_callbacks___" + c;
            d && (w[e] = Im(c, d), a.callback = e);
            d = { timeout: b.ua, sd: !0 };
            b = Tc(b.C).toString();
            b = Uc.exec(b);
            e = b[3] || "";
            a = Vc(b[1] + Wc("?", b[2] || "", a) + Wc("#", e, void 0));
            a = zm(a, d);
            vm(a, null, Hm(c), void 0) } }
    Lm.prototype.G = function(a) { 200 == a.responseStatus ? Nm(this, a.responseData.feed) : Om(this) };

    function Nm(a, b) {
        Ue(a.D);
        var c = Se(document, "ul");
        a.D.appendChild(c);
        for (var d = Math.min(b.entries.length, a.C.numItemsShow), e = 0; e < d; e++) {
            var f = b.entries[e],
                g = Se(document, "li");
            c.appendChild(g);
            var h;
            (h = a.C.previewMode) || (h = (new Pj(f.link)).F, h = !("" == h || "http" == h || "https" == h));
            h = h ? Qe("A", { href: "javascript:void(0);" }, f.title) : Qe("A", { href: f.link }, f.title);
            h.target = a.C.linkTarget;
            g.appendChild(Qe(ka, { "class": "item-title" }, h));
            a.C.showItemDate && (h = Qe(ka, { "class": "item-date" }, "\u00a0-\u00a0" + (new Date(f.publishedDate)).toLocaleDateString()),
                g.appendChild(h));
            a.C.showItemAuthor && (f = Qe(ka, { "class": "item-author" }, "\u00a0-\u00a0" + f.author), g.appendChild(f))
        }
        a.J && a.J(b)
    }

    function Om(a) { Ue(a.D);
        a.D.appendChild(Qe(ka, null, "Error loading feed."));
        a.K && a.K() }
    var Em = Vc(Mc(Nc("//ajax.googleapis.com/ajax/services/feed/load")));
    y("_FeedView", Jm);
    Jm._setConfigurationOptions = function() { var a;
        Mm.security_token = null;
        Mm.visible = null;
        a || (a = "config"); var b = document.forms[a].widgetId.value,
            c = document.forms[a].widgetType.value;
        a = document.forms[a]; var d = !0,
            e = {},
            f; for (f in Mm) { var g = Ph(a[f]); if (void 0 !== g) { var h = Mm[f],
                    k = Qh(f);
                k && (Ue(k), k.className = "errorbox-good");
                h && (h = h(g)) && (Nh(f, h), d = !1);
                e[f] = g } }
        d && H.Sc(e, b, c) };

    function Pm(a) { Q.call(this, Pm.$, a) }
    z(Pm, Q);
    Pm.$ = "FollowByEmail";
    y("_FollowByEmailView", Pm);

    function Qm(a) { Q.call(this, "Followers", a);
        this.C = a.L }
    u(Qm, Q);
    Qm.prototype.ja = function(a, b) { "getFacepile" == a ? (Rm(this, b), Sm(this), Tm(this, b)) : Q.prototype.ja.call(this, a, b) };
    Qm.prototype.ha = function() { Cc(this.C.data) || (Sm(this), Tm(this, this.C.data)) };

    function Rm(a, b) { a = K(Ua, a.C.C);
        b = nc(b.followers, Ne(document, "a", "follower-link", a)); for (a = 0; a < b.length; a++) { var c = b[a][0],
                d = b[a][1];
            d.setAttribute(Na, c.viewUrl);
            d.onclick = function() { return !1 };
            d = K("follower-thumbnail", d);
            d.setAttribute("src", c.thumbnailUrl);
            d.setAttribute("title", c.displayName) } }

    function Sm(a) { var b = K(Ua, a.C.C); if (b) { b = Ne(document, "a", "follower-link", b); for (var c = 0; c < b.length; c++) { var d = b[c];
                d.getAttribute(Na) && (d.onclick = x(Um, a, d.getAttribute(Na))) } } }

    function Tm(a, b) { var c = K("followers-next-link", a.C.C);
        c && (b.nextTimestamp ? (c.style.display = "inline", c = K("next-page-link", c), c.href = "#", c.onclick = function() { return !1 }, If(c), L(c, wa, x(Qm.prototype.D, a, b.nextTimestamp))) : c.style.display = p) }
    Qm.prototype.D = function(a) { this.H.wa("getFacepile", { fcMT: a }, null, ia) };

    function Um(a) { window.open(a, qa, "height=600, width=640, toolbar=no, menubar=no, scrollbars=yes, resizable=yes, location=no, directories=no, status=no") }
    y("_FollowersView", Qm);

    function Vm(a) { Q.call(this, Vm.$, a) }
    z(Vm, Q);
    Vm.$ = "Header";
    y("_HeaderView", Vm);

    function Wm(a, b) { Q.call(this, b, a) }
    u(Wm, Q);

    function Xm(a) { Q.call(this, "Text", a) }
    u(Xm, Wm);

    function Ym(a) { Q.call(this, "HTML", a) }
    u(Ym, Wm);
    y("_TextView", Xm);
    y("_HTMLView", Ym);

    function Zm(a) { Q.call(this, "Image", a);
        this.C = a.L }
    u(Zm, Q);
    Zm.prototype.ha = function() { if (1 == this.C.data.resize) { var a = P(this.H, "img"),
                b = this.C.C; if (a && b) { if (document.defaultView) b = parseInt(document.defaultView.getComputedStyle(b, null).width, 10);
                else if (b.currentStyle) a.style.display = p, b = b.offsetWidth, a.style.display = "";
                else return;
                a.width > b && (a.height = Math.round(b / a.width * a.height), a.width = b);
                a.style.visibility = qb } } };
    y("_ImageView", Zm);

    function $m(a) { Q.call(this, "Label", a) }
    u($m, Q);
    y("_LabelView", $m);

    function an(a) { Q.call(this, an.$, a) }
    z(an, Q);
    an.$ = "TextList";
    y("_TextListView", an);

    function bn(a) { Q.call(this, bn.$, a) }
    z(bn, Q);
    bn.$ = "LinkList";
    y("_LinkListView", bn);

    function cn(a) { Q.call(this, "BloggerButton", a) }
    u(cn, Q);
    y("_BloggerButtonView", cn);

    function dn(a) { Q.call(this, "Navbar", a) }
    u(dn, Q);
    y("_NavbarView", dn);

    function en(a) { Q.call(this, "PageList", a) }
    u(en, Q);
    en.prototype.Oa = function() { return "PageList" };
    en.prototype.ha = function() { if (0 != this.H.L.data.mobile) { var a = P(this.H, "select");
            a && (a.onchange = function(b) { b = b || window.event;
                b = b.target || b.srcElement; if (b = b.options[b.selectedIndex].value) window.location = b }) } };
    var _PageListView = en;
    y("_PageListView", en);

    function fn(a) { Q.call(this, "Poll", a);
        this.F = this.D = this.C = null; if (a = this.H.L.data) this.C = "poll-widget" + a.pollid, this.D = a.iframeurl, this.F = L(window, "message", this.G, !1, this), a = document.getElementsByName(this.C)[0], void 0 != a && (a.src.src = Tc(this.D).toString()) }
    u(fn, Q);
    fn.prototype.G = function(a) { var b = document.getElementsByName(this.C)[0];
        void 0 != b && (a = a.C, a.source === b.contentWindow && Xc(this.D, a.origin) && (a = a.data, typeof a !== db || 0 > a || (b.height = a + "px", Hf(this.F)))) };
    y("_PollView", fn);

    function gn(a) { Q.call(this, "PopularPosts", a) }
    u(gn, Q);
    y("_PopularPostsView", gn);

    function hn(a) { Q.call(this, "Profile", a);
        this.C = a.L }
    u(hn, Q);
    hn.prototype.ha = function() { this.C && this.C.C && 0 == this.H.L.data.isDisplayable && (this.C.C.style.display = p) };
    y("_ProfileView", hn);

    function jn(a) { Q.call(this, "RecentPosts", a) }
    u(jn, Q);
    y("_RecentPostsView", jn);

    function kn(a) { Q.call(this, "ReportAbuse", a) }
    u(kn, Q);
    y("_ReportAbuseView", kn);

    function ln(a) { Q.call(this, ln.$, a) }
    z(ln, Q);
    ln.$ = "Sharing";
    y("_SharingView", ln);

    function mn(a) { Q.call(this, "Stats", a) }
    u(mn, Q);
    mn.prototype.ha = function() { null != P(this.H, "totalCount") && hh(this.H.L.data.statsUrl, x(this.G, this)) };
    mn.prototype.G = function(a) {
        a = a.target;
        if (qh(a)) {
            if (a.C) b: { a = a.C.responseText; if (w.JSON) try { var b = w.JSON.parse(a); break b } catch (h) {}
                b = Og(a) }
            else b = void 0;
            a = this.H.L.data;
            var c = P(this.H, "totalCount");
            if (null != c) {
                if (a.showGraphicalCounter) {
                    this.F = b.total;
                    for (var d = "" + b.total, e = 0; e < d.length; e++) c.appendChild(Qe(ka, { "class": "digit stage-0" }, Qe("STRONG", null, document.createTextNode(String(d.charAt(e)))), Qe(ka, { "class": "blind-plate" })));
                    a.showAnimatedCounter && (this.D = new xg(b.nextTickMs), L(this.D, "tick",
                        x(this.J, this, c)), this.D.start())
                } else { d = b.total; if (isNaN(d) || 0 > d) d = "NaN";
                    else { d = d.toString();
                        e = []; for (var f = 0, g = d.length; f < g; f++) 0 < f && 0 == f % 3 && e.push(","), e.push(d.charAt(g - 1 - f));
                        d = e.reverse().join("") }
                    Xe(c, d) }
                a.showSparkline && (a = Mh(this.H, "sparklinespan"), c = b.sparklineData, b = b.sparklineOptions, a && c && b ? nn(a, c, b) : a && a.parentNode.removeChild(a));
                Mh(this.H, "content").style.display = ""
            }
        }
    };

    function nn(a, b, c) { google.charts.load("current", { packages: ["corechart"] });
        google.charts.setOnLoadCallback(function() {
            (new google.visualization.AreaChart(a)).draw(google.visualization.arrayToDataTable(b, !0), Object.assign({ enableInteractivity: !1, chartArea: { top: 0, left: 0, width: 75, height: 30 }, hAxis: { textPosition: p, gridlines: { color: "transparent" } }, vAxis: { textPosition: p, gridlines: { color: "transparent" } }, legend: { position: p } }, c)) }) }
    mn.prototype.J = function(a) { if (on(this.F + 1) > on(this.F)) If(this.D), yg(this.D);
        else { this.F++; for (var b = "" + this.F, c = 0; c < b.length; c++) { var d = a.childNodes[c],
                    e = b.charAt(c); var f = [];
                $e(d.firstChild, f, !0);
                f = f.join("");
                f = f.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
                f = f.replace(/\u200B/g, "");
                f = f.replace(/ +/g, " "); " " != f && (f = f.replace(/^\s*/, ""));
                f != e && (Xe(d.firstChild, e), zg(x(this.C, this, d, 1), 50), zg(x(this.C, this, d, 2), 100), zg(x(this.C, this, d, 3), 150), zg(x(this.C, this, d, 0), 200)) } } };

    function on(a) { return 0 == a ? 1 : Math.floor(Math.log(a) / Math.LN10) + 1 }
    mn.prototype.C = function(a, b) { var c = "stage-" + (0 != b ? b - 1 : 3);
        b = "stage-" + b; var d = pc(a);
        typeof c === r ? kc(d, c) : Array.isArray(c) && (d = tc(d, c));
        typeof b !== r || ic(d, b) ? Array.isArray(b) && rc(d, b) : d.push(b);
        a.className = d.join(" ") };
    y("_StatsView", mn);

    function pn(a) { Q.call(this, "Subscribe", a) }
    u(pn, Q);

    function qn(a, b) { a.style.zIndex = 1 == b ? "20" : "" }

    function rn(a, b) { return a ? a.className && -1 != a.className.search(b) ? a : rn(a.parentNode, b) : null }

    function sn(a, b) { qn(a.parentNode, b); if (I) { var c = rn(a, "section");
            c && (c.parentNode.className && -1 != c.parentNode.className.search("columns-cell") && qn(c.parentNode.parentNode.parentNode.parentNode, b), qn(c, b));
            (a = rn(a, "widget Subscribe")) && qn(a.parentNode.parentNode, b) } }
    var tn = null,
        un = null;
    y("_SubscribeView", pn);
    y("_SW_toggleReaderList", function(a, b) {
        var c = document.getElementById(ma + b),
            d = document.getElementById(na + b);
        a || (a = window.event);
        a.cancelBubble = !0;
        a.stopPropagation && a.stopPropagation();
        var e = document.onclick;
        null != tn && tn != c && (sn(tn, !1), tn.style.display = p, un.style.visibility = qb);
        c.style.display == p ? (sn(c, !0), c.style.display = "", tn = c, un = d, d.style.visibility = Za, document.onclick = function() { c.style.display = p;
            sn(c, !1);
            d.style.visibility = qb;
            e && (document.onclick = e) }) : (c.style.display = p, sn(c, !1), d.style.visibility =
            qb, e && (document.onclick = e));
        return !1
    });
    y("_SW_hideReaderList", function(a) { var b = document.getElementById(ma + a);
        a = document.getElementById(na + a);
        b.style.display = p;
        sn(b, !1);
        a.style.visibility = qb });

    function vn(a) { Q.call(this, vn.$, a) }
    z(vn, Q);
    vn.$ = "Translate";
    y("_TranslateView", vn);

    function wn(a) { return Lj.call(this, a) || this }
    u(wn, Lj);

    function xn() {
        var a = new wn([null, null, null, null, null, '(function(){/*\n\n Copyright The Closure Library Authors.\n SPDX-License-Identifier: Apache-2.0\n*/\nvar d="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},e;if("function"==typeof Object.setPrototypeOf)e=Object.setPrototypeOf;else{var f;a:{var k={a:!0},l={};try{l.__proto__=k;f=l.a;break a}catch(a){}f=!1}e=f?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var m=e;var n={};function p(){var a="undefined"!==typeof window?window.trustedTypes:void 0;return null!==a&&void 0!==a?a:null}var q;function r(){var a,b;void 0===q&&(q=null!==(b=null===(a=p())||void 0===a?void 0:a.createPolicy("google#safe",{createHTML:function(c){return c},createScript:function(c){return c},createScriptURL:function(c){return c}}))&&void 0!==b?b:null);return q};var t=function(a,b){if(b!==n)throw Error("Bad secret");this.g=a},u=function(){};t.prototype=d(u.prototype);t.prototype.constructor=t;if(m)m(t,u);else for(var v in u)if("prototype"!=v)if(Object.defineProperties){var w=Object.getOwnPropertyDescriptor(u,v);w&&Object.defineProperty(t,v,w)}else t[v]=u[v];t.prototype.toString=function(){return this.g.toString()};function x(a){var b;if(null===(b=p())||void 0===b?0:b.isScriptURL(a))return a;if(a instanceof t)return a.g;throw Error("wrong type");};function y(a){var b,c=null===(b=r())||void 0===b?void 0:b.createScriptURL(a);return new t(null!==c&&void 0!==c?c:a,n)};if(!function(){if(self.origin)return"null"===self.origin;if(""!==location.host)return!1;try{return window.parent.escape(""),!1}catch(a){return!0}}())throw Error("sandboxing error");\nwindow.addEventListener("message",function(a){var b=a.ports[0];a=a.data;var c=a.callbackName.split("."),g=window;"window"===c[0]&&c.unshift();for(var h=0;h<c.length-1;h++)g[c[h]]={},g=g[c[h]];g[c[c.length-1]]=function(z){b.postMessage(JSON.stringify(z))};c=document.createElement("script");a=y(a.url);c.src=x(a);document.body.appendChild(c)},!0);}).call(this);\n']);
        if (!a) return null;
        a = R(a, 6);
        if (null === a) var b = null;
        else { var c = null === (b = vk()) || void 0 === b ? void 0 : b.createScript(a);
            b = new xk(null !== c && void 0 !== c ? c : a, sk) }
        return b
    };

    function yn(a) { this.url = a;
        this.timeout = 5E3;
        this.G = "callback";
        this.C = this.D = null }

    function zn(a) { var b = { callback: "?" };
        b = void 0 === b ? {} : b;
        a.C = kg(); var c = new Pj(a.url),
            d = new Map;
        d.set("callback", a.G);
        c.C.Ec(hk(b), d);
        An(a).then(function() { Bn(a, c.toString()) }).then(function() { return a.C.promise }).then(function() { Cn(a) }, function() { Cn(a) });
        0 < a.timeout && (a.F = setTimeout(function() { a.C.C("Timeout!") }, a.timeout)); return a.C.promise }

    function Bn(a, b) { var c = new MessageChannel;
        a.D.contentWindow.postMessage({ url: b, callbackName: a.G }, "*", [c.port2]);
        c.port1.onmessage = function(d) { var e = {};
            void 0 !== a.F && (clearTimeout(a.F), a.F = void 0);
            void 0 === d.data && a.C.C("Callback called, but no data received");
            typeof d.data !== r && a.C.C("Exploitation attempt! Data is not a string!"); try { e = JSON.parse(d.data) } catch (f) { a.C.C("Invalid Data received: " + f.message) }
            a.C.D(e) } }

    function An(a) {
        var b = kg(),
            c = Se(document, "IFRAME");
        if (!c.sandbox) throw Error("iframe sandboxes not supported");
        c.sandbox.value = "allow-scripts";
        c.style.display = p;
        a.D = c;
        a = xn();
        a = Wd(Yd, Od(Sd(ae(Nc("TS-Closure conversions of the same types"), (a instanceof wk ? yk(a) : Qc(a)).toString()))));
        c.srcdoc = Ld(a);
        a = ce(Nc("data URL to be opened only in a sandbox"), "data:text/html;charset=UTF-8;base64," + btoa(Ld(a).toString()));
        c.src = Tc(a).toString();
        c.addEventListener("load", function() { return b.D(c) }, !1);
        c.addEventListener(Sa,
            function(d) { b.C(d) }, !1);
        document.documentElement.appendChild(c);
        return b.promise
    }

    function Cn(a) { null !== a.D && (document.documentElement.removeChild(a.D), a.D = null) };

    function Z(a) { Q.call(this, Z.$, a) }
    z(Z, Q);
    Z.$ = "Wikipedia";
    y("_WikipediaView", Z);
    Z.Pb = 5;
    Z.Ha = "";
    Z.gb = "en";
    t = Z.prototype;
    t.La = !1;
    t.Ea = !1;
    t.ha = function() { var a = P(this.H, "wikipedia-search-form"); if (a) { Z.Ha = this.H.L.data.language || "en"; var b = this;
            L(a, "submit", function(c) { Z.prototype.Ea || (Z.prototype.Ea = !0, Dn(b));
                c.preventDefault() }) } };

    function Dn(a) { Ue(J(P(a.H, tb)));
        Ue(J(P(a.H, sb))); var b = C(J(P(a.H, rb)).value);
        b ? (b = dk(dk(dk(Sj(new Pj("https://" + (a.La && Z.gb || Z.Ha) + ca), "/w/api.php"), "action", "opensearch"), "search", b), "format", "json"), b = new yn(b), P(a.H, ub), P(a.H, tb), zn(b).then(x(a.Md, a), x(a.Ld, a))) : (J(P(a.H, ub)).style.display = p, b = Mh(a.H, tb), a = ge(a.H.L.data.enterTextMsg), G(b, a), Z.prototype.Ea = !1) }
    t.Md = function(a) {
        var b = P(this.H, ub),
            c = P(this.H, tb),
            d = C(J(P(this.H, rb)).value),
            e = [];
        a = a[1];
        var f = a.length;
        if (0 == f) b = J(b), b.style.display = ua, b = ge(this.H.L.data.noResultsFoundMsg), G(c, b), Z.prototype.Ea = !1;
        else {
            for (var g = 0; g < f; g++) e.push('<div id="wikipedia-search-result-link"><a target="_blank" href=https://' + ((this.La && Z.gb || Z.Ha) + ".wikipedia.org/wiki/" + a[g].replace(/ /g, "_")) + ">" + a[g] + "</a></div>");
            if (f > Z.Pb) {
                for (g = 0; g < Z.Pb; g++) J(c).innerHTML += e[g];
                J(P(this.H, sb)).style.display = ua;
                d = '<a target="_blank" href=' +
                    dk(dk(dk(dk(Sj(new Pj("https://" + (this.La && Z.gb || Z.Ha) + ca), "/w/index.php"), "title", "Special:Search"), "profile", "default"), "search", d), "fulltext", "Search") + ">" + this.H.L.data.moreMsg + "</a>";
                c = J(P(this.H, sb));
                e = new dj;
                e.M = qj;
                e.K = xc;
                e.J = xc;
                e.F = ld;
                e.R = ld;
                e = new cj(e);
                d = rj(e, d);
                G(c, d)
            } else
                for (g = 0; g < f; g++) J(c).innerHTML += e[g];
            b = J(b);
            b.style.display = ua;
            this.La = Z.prototype.Ea = !1
        }
    };
    t.Ld = function() { if ("en" != Z.Ha) this.La = !0, Dn(this);
        else { J(P(this.H, ub)).style.display = p; var a = Mh(this.H, tb),
                b = ge(this.H.L.data.fetchingErrorMsg);
            G(a, b);
            Z.prototype.Ea = !1 } };
    if (window.jstiming) {
        window.jstiming.Wb = {};
        window.jstiming.Nd = 1;
        var En = function(a, b, c) { var d = a.t[b],
                    e = a.t.start; if (d && (e || c)) return d = a.t[b][0], void 0 != c ? e = c : e = e[0], Math.round(d - e) },
            Fn = function(a, b, c) {
                var d = "";
                window.jstiming.srt && (d += "&srt=" + window.jstiming.srt, delete window.jstiming.srt);
                window.jstiming.pt && (d += "&tbsrt=" + window.jstiming.pt, delete window.jstiming.pt);
                try {
                    window.external && window.external.tran ? d += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? d += "&tran=" +
                        window.gtbExternal.tran() : window.chrome && window.chrome.csi && (d += "&tran=" + window.chrome.csi().tran)
                } catch (B) {}
                var e = window.chrome;
                if (e && (e = e.loadTimes)) { e().wasFetchedViaSpdy && (d += "&p=s"); if (e().wasNpnNegotiated) { d += "&npn=1"; var f = e().npnNegotiatedProtocol;
                        f && (d += "&npnv=" + (encodeURIComponent || escape)(f)) }
                    e().wasAlternateProtocolAvailable && (d += "&apa=1") }
                var g = a.t,
                    h = g.start;
                e = [];
                f = [];
                for (var k in g)
                    if ("start" != k && 0 != k.indexOf("_")) {
                        var n = g[k][1];
                        n ? g[n] && f.push(k + "." + En(a, k, g[n][0])) : h && e.push(k + "." +
                            En(a, k))
                    }
                delete g.start;
                if (b)
                    for (var v in b) d += "&" + v + "=" + b[v];
                (b = c) || (b = "https:" == document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
                return [b, "?v=3", "&s=" + (window.jstiming.sn || "blogger") + ba, a.name, f.length ? "&it=" + f.join(",") : "", d, "&rt=", e.join(",")].join("")
            },
            Gn = function(a, b, c) { a = Fn(a, b, c); if (!a) return "";
                b = new Image; var d = window.jstiming.Nd++;
                window.jstiming.Wb[d] = b;
                b.onload = b.onerror = function() { window.jstiming && delete window.jstiming.Wb[d] };
                b.src = a;
                b = null; return a };
        window.jstiming.report = function(a, b, c) { var d = document.visibilityState,
                e = "visibilitychange";
            d || (d = document.webkitVisibilityState, e = "webkitvisibilitychange"); if ("prerender" == d) { var f = !1,
                    g = function() { if (!f) { b ? b.prerender = "1" : b = { prerender: "1" }; if ("prerender" == (document.visibilityState || document.webkitVisibilityState)) var h = !1;
                            else Gn(a, b, c), h = !0;
                            h && (f = !0, document.removeEventListener(e, g, !1)) } };
                document.addEventListener(e, g, !1); return "" } return Gn(a, b, c) }
    };
}).call(this);