! function (e, t) {
    function n(e) {
        var t = e.length,
            n = ct.type(e);
        return ct.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e) {
        var t = Et[e] = {};
        return ct.each(e.match(dt) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function i(e, n, r, i) {
        if (ct.acceptData(e)) {
            var o, s, a = ct.expando,
                l = e.nodeType,
                u = l ? ct.cache : e,
                c = l ? e[a] : e[a] && a;
            if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[a] = tt.pop() || ct.guid++ : a), u[c] || (u[c] = l ? {} : {
                toJSON: ct.noop
            }), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = ct.extend(u[c], n) : u[c].data = ct.extend(u[c].data, n)), s = u[c], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[ct.camelCase(n)] = r), "string" == typeof n ? (o = s[n], null == o && (o = s[ct.camelCase(n)])) : o = s, o
        }
    }

    function o(e, t, n) {
        if (ct.acceptData(e)) {
            var r, i, o = e.nodeType,
                s = o ? ct.cache : e,
                l = o ? e[ct.expando] : ct.expando;
            if (s[l]) {
                if (t && (r = n ? s[l] : s[l].data)) {
                    ct.isArray(t) ? t = t.concat(ct.map(t, ct.camelCase)) : t in r ? t = [t] : (t = ct.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    for (; i--;) delete r[t[i]];
                    if (n ? !a(r) : !ct.isEmptyObject(r)) return
                }(n || (delete s[l].data, a(s[l]))) && (o ? ct.cleanData([e], !0) : ct.support.deleteExpando || s != s.window ? delete s[l] : s[l] = null)
            }
        }
    }

    function s(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(St, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : Nt.test(r) ? ct.parseJSON(r) : r
                } catch (o) {}
                ct.data(e, n, r)
            } else r = t
        }
        return r
    }

    function a(e) {
        var t;
        for (t in e)
            if (("data" !== t || !ct.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function l() {
        return !0
    }

    function u() {
        return !1
    }

    function c() {
        try {
            return G.activeElement
        } catch (e) {}
    }

    function f(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function d(e, t, n) {
        if (ct.isFunction(t)) return ct.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType) return ct.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (Wt.test(t)) return ct.filter(t, e, n);
            t = ct.filter(t, e)
        }
        return ct.grep(e, function (e) {
            return ct.inArray(e, t) >= 0 !== n
        })
    }

    function p(e) {
        var t = Ut.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function h(e, t) {
        return ct.nodeName(e, "table") && ct.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function g(e) {
        return e.type = (null !== ct.find.attr(e, "type")) + "/" + e.type, e
    }

    function m(e) {
        var t = on.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function y(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) ct._data(n, "globalEval", !t || ct._data(t[r], "globalEval"))
    }

    function v(e, t) {
        if (1 === t.nodeType && ct.hasData(e)) {
            var n, r, i, o = ct._data(e),
                s = ct._data(t, o),
                a = o.events;
            if (a) {
                delete s.handle, s.events = {};
                for (n in a)
                    for (r = 0, i = a[n].length; i > r; r++) ct.event.add(t, n, a[n][r])
            }
            s.data && (s.data = ct.extend({}, s.data))
        }
    }

    function x(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ct.support.noCloneEvent && t[ct.expando]) {
                i = ct._data(t);
                for (r in i.events) ct.removeEvent(t, r, i.handle);
                t.removeAttribute(ct.expando)
            }
            "script" === n && t.text !== e.text ? (g(t).text = e.text, m(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ct.support.html5Clone && e.innerHTML && !ct.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function b(e, n) {
        var r, i, o = 0,
            s = typeof e.getElementsByTagName !== Y ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== Y ? e.querySelectorAll(n || "*") : t;
        if (!s)
            for (s = [], r = e.childNodes || e; null != (i = r[o]); o++) !n || ct.nodeName(i, n) ? s.push(i) : ct.merge(s, b(i, n));
        return n === t || n && ct.nodeName(e, n) ? ct.merge([e], s) : s
    }

    function w(e) {
        tn.test(e.type) && (e.defaultChecked = e.checked)
    }

    function T(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = En.length; i--;)
            if (t = En[i] + n, t in e) return t;
        return r
    }

    function C(e, t) {
        return e = t || e, "none" === ct.css(e, "display") || !ct.contains(e.ownerDocument, e)
    }

    function k(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++) r = e[s], r.style && (o[s] = ct._data(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && C(r) && (o[s] = ct._data(r, "olddisplay", A(r.nodeName)))) : o[s] || (i = C(r), (n && "none" !== n || !i) && ct._data(r, "olddisplay", i ? n : ct.css(r, "display"))));
        for (s = 0; a > s; s++) r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function E(e, t, n) {
        var r = vn.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function N(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += ct.css(e, n + kn[o], !0, i)), r ? ("content" === n && (s -= ct.css(e, "padding" + kn[o], !0, i)), "margin" !== n && (s -= ct.css(e, "border" + kn[o] + "Width", !0, i))) : (s += ct.css(e, "padding" + kn[o], !0, i), "padding" !== n && (s += ct.css(e, "border" + kn[o] + "Width", !0, i)));
        return s
    }

    function S(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = fn(e),
            s = ct.support.boxSizing && "border-box" === ct.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = dn(e, t, o), (0 > i || null == i) && (i = e.style[t]), xn.test(i)) return i;
            r = s && (ct.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + N(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function A(e) {
        var t = G,
            n = wn[e];
        return n || (n = j(e, t), "none" !== n && n || (cn = (cn || ct("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (cn[0].contentWindow || cn[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = j(e, t), cn.detach()), wn[e] = n), n
    }

    function j(e, t) {
        var n = ct(t.createElement(e)).appendTo(t.body),
            r = ct.css(n[0], "display");
        return n.remove(), r
    }

    function D(e, t, n, r) {
        var i;
        if (ct.isArray(t)) ct.each(t, function (t, i) {
            n || Sn.test(e) ? r(e, i) : D(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== ct.type(t)) r(e, t);
        else
            for (i in t) D(e + "[" + i + "]", t[i], n, r)
    }

    function L(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(dt) || [];
            if (ct.isFunction(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function H(e, t, n, r) {
        function i(a) {
            var l;
            return o[a] = !0, ct.each(e[a] || [], function (e, a) {
                var u = a(t, n, r);
                return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), i(u), !1)
            }), l
        }
        var o = {},
            s = e === zn;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function $(e, n) {
        var r, i, o = ct.ajaxSettings.flatOptions || {};
        for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && ct.extend(!0, e, r), e
    }

    function q(e, n, r) {
        for (var i, o, s, a, l = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)
            for (a in l)
                if (l[a] && l[a].test(o)) {
                    u.unshift(a);
                    break
                }
        if (u[0] in r) s = u[0];
        else {
            for (a in r) {
                if (!u[0] || e.converters[a + " " + u[0]]) {
                    s = a;
                    break
                }
                i || (i = a)
            }
            s = s || i
        }
        return s ? (s !== u[0] && u.unshift(s), r[s]) : void 0
    }

    function F(e, t, n, r) {
        var i, o, s, a, l, u = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (s = u[l + " " + o] || u["* " + o], !s)
                for (i in u)
                    if (a = i.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                        s === !0 ? s = u[i] : u[i] !== !0 && (o = a[0], c.unshift(a[1]));
                        break
                    }
            if (s !== !0)
                if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch (f) {
                    return {
                        state: "parsererror",
                        error: s ? f : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function I() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function M() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function O() {
        return setTimeout(function () {
            Zn = t
        }), Zn = ct.now()
    }

    function _(e, t, n) {
        for (var r, i = (or[t] || []).concat(or["*"]), o = 0, s = i.length; s > o; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function R(e, t, n) {
        var r, i, o = 0,
            s = ir.length,
            a = ct.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (i) return !1;
                for (var t = Zn || O(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(o);
                return a.notifyWith(e, [u, o, n]), 1 > o && l ? n : (a.resolveWith(e, [u]), !1)
            },
            u = a.promise({
                elem: e,
                props: ct.extend({}, t),
                opts: ct.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Zn || O(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = ct.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) u.tweens[n].run(1);
                    return t ? a.resolveWith(e, [u, t]) : a.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (P(c, u.opts.specialEasing); s > o; o++)
            if (r = ir[o].call(u, e, c, u.opts)) return r;
        return ct.map(c, _, u), ct.isFunction(u.opts.start) && u.opts.start.call(e, u), ct.fx.timer(ct.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function P(e, t) {
        var n, r, i, o, s;
        for (n in e)
            if (r = ct.camelCase(n), i = t[r], o = e[n], ct.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = ct.cssHooks[r], s && "expand" in s) {
                o = s.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function W(e, t, n) {
        var r, i, o, s, a, l, u = this,
            c = {},
            f = e.style,
            d = e.nodeType && C(e),
            p = ct._data(e, "fxshow");
        n.queue || (a = ct._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
            a.unqueued || l()
        }), a.unqueued++, u.always(function () {
            u.always(function () {
                a.unqueued--, ct.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ct.css(e, "display") && "none" === ct.css(e, "float") && (ct.support.inlineBlockNeedsLayout && "inline" !== A(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ct.support.shrinkWrapBlocks || u.always(function () {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r], tr.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (d ? "hide" : "show")) continue;
                c[r] = p && p[r] || ct.style(e, r)
            }
        if (!ct.isEmptyObject(c)) {
            p ? "hidden" in p && (d = p.hidden) : p = ct._data(e, "fxshow", {}), o && (p.hidden = !d), d ? ct(e).show() : u.done(function () {
                ct(e).hide()
            }), u.done(function () {
                var t;
                ct._removeData(e, "fxshow");
                for (t in c) ct.style(e, t, c[t])
            });
            for (r in c) s = _(d ? p[r] : 0, r, u), r in p || (p[r] = s.start, d && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function B(e, t, n, r, i) {
        return new B.prototype.init(e, t, n, r, i)
    }

    function z(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = kn[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function X(e) {
        return ct.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var U, V, Y = typeof t,
        J = e.location,
        G = e.document,
        Q = G.documentElement,
        K = e.jQuery,
        Z = e.$,
        et = {},
        tt = [],
        nt = "1.10.2",
        rt = tt.concat,
        it = tt.push,
        ot = tt.slice,
        st = tt.indexOf,
        at = et.toString,
        lt = et.hasOwnProperty,
        ut = nt.trim,
        ct = function (e, t) {
            return new ct.fn.init(e, t, V)
        },
        ft = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        dt = /\S+/g,
        pt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ht = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        gt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        mt = /^[\],:{}\s]*$/,
        yt = /(?:^|:|,)(?:\s*\[)+/g,
        vt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        xt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        bt = /^-ms-/,
        wt = /-([\da-z])/gi,
        Tt = function (e, t) {
            return t.toUpperCase()
        },
        Ct = function (e) {
            (G.addEventListener || "load" === e.type || "complete" === G.readyState) && (kt(), ct.ready())
        },
        kt = function () {
            G.addEventListener ? (G.removeEventListener("DOMContentLoaded", Ct, !1), e.removeEventListener("load", Ct, !1)) : (G.detachEvent("onreadystatechange", Ct), e.detachEvent("onload", Ct))
        };
    ct.fn = ct.prototype = {
            jquery: nt,
            constructor: ct,
            init: function (e, n, r) {
                var i, o;
                if (!e) return this;
                if ("string" == typeof e) {
                    if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ht.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                    if (i[1]) {
                        if (n = n instanceof ct ? n[0] : n, ct.merge(this, ct.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : G, !0)), gt.test(i[1]) && ct.isPlainObject(n))
                            for (i in n) ct.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                        return this
                    }
                    if (o = G.getElementById(i[2]), o && o.parentNode) {
                        if (o.id !== i[2]) return r.find(e);
                        this.length = 1, this[0] = o
                    }
                    return this.context = G, this.selector = e, this
                }
                return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ct.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ct.makeArray(e, this))
            },
            selector: "",
            length: 0,
            toArray: function () {
                return ot.call(this)
            },
            get: function (e) {
                return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
            },
            pushStack: function (e) {
                var t = ct.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function (e, t) {
                return ct.each(this, e, t)
            },
            ready: function (e) {
                return ct.ready.promise().done(e), this
            },
            slice: function () {
                return this.pushStack(ot.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            map: function (e) {
                return this.pushStack(ct.map(this, function (t, n) {
                    return e.call(t, n, t)
                }))
            },
            end: function () {
                return this.prevObject || this.constructor(null)
            },
            push: it,
            sort: [].sort,
            splice: [].splice
        }, ct.fn.init.prototype = ct.fn, ct.extend = ct.fn.extend = function () {
            var e, n, r, i, o, s, a = arguments[0] || {},
                l = 1,
                u = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[1] || {}, l = 2), "object" == typeof a || ct.isFunction(a) || (a = {}), u === l && (a = this, --l); u > l; l++)
                if (null != (o = arguments[l]))
                    for (i in o) e = a[i], r = o[i], a !== r && (c && r && (ct.isPlainObject(r) || (n = ct.isArray(r))) ? (n ? (n = !1, s = e && ct.isArray(e) ? e : []) : s = e && ct.isPlainObject(e) ? e : {}, a[i] = ct.extend(c, s, r)) : r !== t && (a[i] = r));
            return a
        }, ct.extend({
            expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
            noConflict: function (t) {
                return e.$ === ct && (e.$ = Z), t && e.jQuery === ct && (e.jQuery = K), ct
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function (e) {
                e ? ct.readyWait++ : ct.ready(!0)
            },
            ready: function (e) {
                if (e === !0 ? !--ct.readyWait : !ct.isReady) {
                    if (!G.body) return setTimeout(ct.ready);
                    ct.isReady = !0, e !== !0 && --ct.readyWait > 0 || (U.resolveWith(G, [ct]), ct.fn.trigger && ct(G).trigger("ready").off("ready"))
                }
            },
            isFunction: function (e) {
                return "function" === ct.type(e)
            },
            isArray: Array.isArray || function (e) {
                return "array" === ct.type(e)
            },
            isWindow: function (e) {
                return null != e && e == e.window
            },
            isNumeric: function (e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function (e) {
                return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? et[at.call(e)] || "object" : typeof e
            },
            isPlainObject: function (e) {
                var n;
                if (!e || "object" !== ct.type(e) || e.nodeType || ct.isWindow(e)) return !1;
                try {
                    if (e.constructor && !lt.call(e, "constructor") && !lt.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (r) {
                    return !1
                }
                if (ct.support.ownLast)
                    for (n in e) return lt.call(e, n);
                for (n in e);
                return n === t || lt.call(e, n)
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            error: function (e) {
                throw new Error(e)
            },
            parseHTML: function (e, t, n) {
                if (!e || "string" != typeof e) return null;
                "boolean" == typeof t && (n = t, t = !1), t = t || G;
                var r = gt.exec(e),
                    i = !n && [];
                return r ? [t.createElement(r[1])] : (r = ct.buildFragment([e], t, i), i && ct(i).remove(), ct.merge([], r.childNodes))
            },
            parseJSON: function (t) {
                return e.JSON && e.JSON.parse ? e.JSON.parse(t) : null === t ? t : "string" == typeof t && (t = ct.trim(t), t && mt.test(t.replace(vt, "@").replace(xt, "]").replace(yt, ""))) ? new Function("return " + t)() : (ct.error("Invalid JSON: " + t), void 0)
            },
            parseXML: function (n) {
                var r, i;
                if (!n || "string" != typeof n) return null;
                try {
                    e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
                } catch (o) {
                    r = t
                }
                return r && r.documentElement && !r.getElementsByTagName("parsererror").length || ct.error("Invalid XML: " + n), r
            },
            noop: function () {},
            globalEval: function (t) {
                t && ct.trim(t) && (e.execScript || function (t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function (e) {
                return e.replace(bt, "ms-").replace(wt, Tt)
            },
            nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function (e, t, r) {
                var i, o = 0,
                    s = e.length,
                    a = n(e);
                if (r) {
                    if (a)
                        for (; s > o && (i = t.apply(e[o], r), i !== !1); o++);
                    else
                        for (o in e)
                            if (i = t.apply(e[o], r), i === !1) break
                } else if (a)
                    for (; s > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
                else
                    for (o in e)
                        if (i = t.call(e[o], o, e[o]), i === !1) break; return e
            },
            trim: ut && !ut.call("﻿ ") ? function (e) {
                return null == e ? "" : ut.call(e)
            } : function (e) {
                return null == e ? "" : (e + "").replace(pt, "")
            },
            makeArray: function (e, t) {
                var r = t || [];
                return null != e && (n(Object(e)) ? ct.merge(r, "string" == typeof e ? [e] : e) : it.call(r, e)), r
            },
            inArray: function (e, t, n) {
                var r;
                if (t) {
                    if (st) return st.call(t, e, n);
                    for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function (e, n) {
                var r = n.length,
                    i = e.length,
                    o = 0;
                if ("number" == typeof r)
                    for (; r > o; o++) e[i++] = n[o];
                else
                    for (; n[o] !== t;) e[i++] = n[o++];
                return e.length = i, e
            },
            grep: function (e, t, n) {
                var r, i = [],
                    o = 0,
                    s = e.length;
                for (n = !!n; s > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
                return i
            },
            map: function (e, t, r) {
                var i, o = 0,
                    s = e.length,
                    a = n(e),
                    l = [];
                if (a)
                    for (; s > o; o++) i = t(e[o], o, r), null != i && (l[l.length] = i);
                else
                    for (o in e) i = t(e[o], o, r), null != i && (l[l.length] = i);
                return rt.apply([], l)
            },
            guid: 1,
            proxy: function (e, n) {
                var r, i, o;
                return "string" == typeof n && (o = e[n], n = e, e = o), ct.isFunction(e) ? (r = ot.call(arguments, 2), i = function () {
                    return e.apply(n || this, r.concat(ot.call(arguments)))
                }, i.guid = e.guid = e.guid || ct.guid++, i) : t
            },
            access: function (e, n, r, i, o, s, a) {
                var l = 0,
                    u = e.length,
                    c = null == r;
                if ("object" === ct.type(r)) {
                    o = !0;
                    for (l in r) ct.access(e, n, l, r[l], !0, s, a)
                } else if (i !== t && (o = !0, ct.isFunction(i) || (a = !0), c && (a ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) {
                        return c.call(ct(e), n)
                    })), n))
                    for (; u > l; l++) n(e[l], r, a ? i : i.call(e[l], l, n(e[l], r)));
                return o ? e : c ? n.call(e) : u ? n(e[0], r) : s
            },
            now: function () {
                return (new Date).getTime()
            },
            swap: function (e, t, n, r) {
                var i, o, s = {};
                for (o in t) s[o] = e.style[o], e.style[o] = t[o];
                i = n.apply(e, r || []);
                for (o in t) e.style[o] = s[o];
                return i
            }
        }), ct.ready.promise = function (t) {
            if (!U)
                if (U = ct.Deferred(), "complete" === G.readyState) setTimeout(ct.ready);
                else if (G.addEventListener) G.addEventListener("DOMContentLoaded", Ct, !1), e.addEventListener("load", Ct, !1);
            else {
                G.attachEvent("onreadystatechange", Ct), e.attachEvent("onload", Ct);
                var n = !1;
                try {
                    n = null == e.frameElement && G.documentElement
                } catch (r) {}
                n && n.doScroll && ! function i() {
                    if (!ct.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(i, 50)
                        }
                        kt(), ct.ready()
                    }
                }()
            }
            return U.promise(t)
        }, ct.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
            et["[object " + t + "]"] = t.toLowerCase()
        }), V = ct(G),
        function (e, t) {
            function n(e, t, n, r) {
                var i, o, s, a, l, u, c, f, h, g;
                if ((t ? t.ownerDocument || t : R) !== H && L(t), t = t || H, n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (a = t.nodeType) && 9 !== a) return [];
                if (q && !r) {
                    if (i = xt.exec(e))
                        if (s = i[1]) {
                            if (9 === a) {
                                if (o = t.getElementById(s), !o || !o.parentNode) return n;
                                if (o.id === s) return n.push(o), n
                            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && O(t, o) && o.id === s) return n.push(o), n
                        } else {
                            if (i[2]) return et.apply(n, t.getElementsByTagName(e)), n;
                            if ((s = i[3]) && C.getElementsByClassName && t.getElementsByClassName) return et.apply(n, t.getElementsByClassName(s)), n
                        }
                    if (C.qsa && (!F || !F.test(e))) {
                        if (f = c = _, h = t, g = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                            for (u = d(e), (c = t.getAttribute("id")) ? f = c.replace(Tt, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;) u[l] = f + p(u[l]);
                            h = pt.test(e) && t.parentNode || t, g = u.join(",")
                        }
                        if (g) try {
                            return et.apply(n, h.querySelectorAll(g)), n
                        } catch (m) {} finally {
                            c || t.removeAttribute("id")
                        }
                    }
                }
                return w(e.replace(ut, "$1"), t, n, r)
            }

            function r() {
                function e(n, r) {
                    return t.push(n += " ") > E.cacheLength && delete e[t.shift()], e[n] = r
                }
                var t = [];
                return e
            }

            function i(e) {
                return e[_] = !0, e
            }

            function o(e) {
                var t = H.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function s(e, t) {
                for (var n = e.split("|"), r = e.length; r--;) E.attrHandle[n[r]] = t
            }

            function a(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || J) - (~e.sourceIndex || J);
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function l(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function u(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function c(e) {
                return i(function (t) {
                    return t = +t, i(function (n, r) {
                        for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function f() {}

            function d(e, t) {
                var r, i, o, s, a, l, u, c = z[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (a = e, l = [], u = E.preFilter; a;) {
                    (!r || (i = ft.exec(a))) && (i && (a = a.slice(i[0].length) || a), l.push(o = [])), r = !1, (i = dt.exec(a)) && (r = i.shift(), o.push({
                        value: r,
                        type: i[0].replace(ut, " ")
                    }), a = a.slice(r.length));
                    for (s in E.filter) !(i = yt[s].exec(a)) || u[s] && !(i = u[s](i)) || (r = i.shift(), o.push({
                        value: r,
                        type: s,
                        matches: i
                    }), a = a.slice(r.length));
                    if (!r) break
                }
                return t ? a.length : a ? n.error(e) : z(e, l).slice(0)
            }

            function p(e) {
                for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
                return r
            }

            function h(e, t, n) {
                var r = t.dir,
                    i = n && "parentNode" === r,
                    o = W++;
                return t.first ? function (t, n, o) {
                    for (; t = t[r];)
                        if (1 === t.nodeType || i) return e(t, n, o)
                } : function (t, n, s) {
                    var a, l, u, c = P + " " + o;
                    if (s) {
                        for (; t = t[r];)
                            if ((1 === t.nodeType || i) && e(t, n, s)) return !0
                    } else
                        for (; t = t[r];)
                            if (1 === t.nodeType || i)
                                if (u = t[_] || (t[_] = {}), (l = u[r]) && l[0] === c) {
                                    if ((a = l[1]) === !0 || a === k) return a === !0
                                } else if (l = u[r] = [c], l[1] = e(t, n, s) || k, l[1] === !0) return !0
                }
            }

            function g(e) {
                return e.length > 1 ? function (t, n, r) {
                    for (var i = e.length; i--;)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function m(e, t, n, r, i) {
                for (var o, s = [], a = 0, l = e.length, u = null != t; l > a; a++)(o = e[a]) && (!n || n(o, r, i)) && (s.push(o), u && t.push(a));
                return s
            }

            function y(e, t, n, r, o, s) {
                return r && !r[_] && (r = y(r)), o && !o[_] && (o = y(o, s)), i(function (i, s, a, l) {
                    var u, c, f, d = [],
                        p = [],
                        h = s.length,
                        g = i || b(t || "*", a.nodeType ? [a] : a, []),
                        y = !e || !i && t ? g : m(g, d, e, a, l),
                        v = n ? o || (i ? e : h || r) ? [] : s : y;
                    if (n && n(y, v, a, l), r)
                        for (u = m(v, p), r(u, [], a, l), c = u.length; c--;)(f = u[c]) && (v[p[c]] = !(y[p[c]] = f));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (u = [], c = v.length; c--;)(f = v[c]) && u.push(y[c] = f);
                                o(null, v = [], u, l)
                            }
                            for (c = v.length; c--;)(f = v[c]) && (u = o ? nt.call(i, f) : d[c]) > -1 && (i[u] = !(s[u] = f))
                        }
                    } else v = m(v === s ? v.splice(h, v.length) : v), o ? o(null, s, v, l) : et.apply(s, v)
                })
            }

            function v(e) {
                for (var t, n, r, i = e.length, o = E.relative[e[0].type], s = o || E.relative[" "], a = o ? 1 : 0, l = h(function (e) {
                        return e === t
                    }, s, !0), u = h(function (e) {
                        return nt.call(t, e) > -1
                    }, s, !0), c = [function (e, n, r) {
                        return !o && (r || n !== j) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r))
                    }]; i > a; a++)
                    if (n = E.relative[e[a].type]) c = [h(g(c), n)];
                    else {
                        if (n = E.filter[e[a].type].apply(null, e[a].matches), n[_]) {
                            for (r = ++a; i > r && !E.relative[e[r].type]; r++);
                            return y(a > 1 && g(c), a > 1 && p(e.slice(0, a - 1).concat({
                                value: " " === e[a - 2].type ? "*" : ""
                            })).replace(ut, "$1"), n, r > a && v(e.slice(a, r)), i > r && v(e = e.slice(r)), i > r && p(e))
                        }
                        c.push(n)
                    }
                return g(c)
            }

            function x(e, t) {
                var r = 0,
                    o = t.length > 0,
                    s = e.length > 0,
                    a = function (i, a, l, u, c) {
                        var f, d, p, h = [],
                            g = 0,
                            y = "0",
                            v = i && [],
                            x = null != c,
                            b = j,
                            w = i || s && E.find.TAG("*", c && a.parentNode || a),
                            T = P += null == b ? 1 : Math.random() || .1;
                        for (x && (j = a !== H && a, k = r); null != (f = w[y]); y++) {
                            if (s && f) {
                                for (d = 0; p = e[d++];)
                                    if (p(f, a, l)) {
                                        u.push(f);
                                        break
                                    }
                                x && (P = T, k = ++r)
                            }
                            o && ((f = !p && f) && g--, i && v.push(f))
                        }
                        if (g += y, o && y !== g) {
                            for (d = 0; p = t[d++];) p(v, h, a, l);
                            if (i) {
                                if (g > 0)
                                    for (; y--;) v[y] || h[y] || (h[y] = K.call(u));
                                h = m(h)
                            }
                            et.apply(u, h), x && !i && h.length > 0 && g + t.length > 1 && n.uniqueSort(u)
                        }
                        return x && (P = T, j = b), v
                    };
                return o ? i(a) : a
            }

            function b(e, t, r) {
                for (var i = 0, o = t.length; o > i; i++) n(e, t[i], r);
                return r
            }

            function w(e, t, n, r) {
                var i, o, s, a, l, u = d(e);
                if (!r && 1 === u.length) {
                    if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && C.getById && 9 === t.nodeType && q && E.relative[o[1].type]) {
                        if (t = (E.find.ID(s.matches[0].replace(Ct, kt), t) || [])[0], !t) return n;
                        e = e.slice(o.shift().value.length)
                    }
                    for (i = yt.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !E.relative[a = s.type]);)
                        if ((l = E.find[a]) && (r = l(s.matches[0].replace(Ct, kt), pt.test(o[0].type) && t.parentNode || t))) {
                            if (o.splice(i, 1), e = r.length && p(o), !e) return et.apply(n, r), n;
                            break
                        }
                }
                return A(e, u)(r, t, !q, n, pt.test(e)), n
            }
            var T, C, k, E, N, S, A, j, D, L, H, $, q, F, I, M, O, _ = "sizzle" + -new Date,
                R = e.document,
                P = 0,
                W = 0,
                B = r(),
                z = r(),
                X = r(),
                U = !1,
                V = function (e, t) {
                    return e === t ? (U = !0, 0) : 0
                },
                Y = typeof t,
                J = 1 << 31,
                G = {}.hasOwnProperty,
                Q = [],
                K = Q.pop,
                Z = Q.push,
                et = Q.push,
                tt = Q.slice,
                nt = Q.indexOf || function (e) {
                    for (var t = 0, n = this.length; n > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                rt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                it = "[\\x20\\t\\r\\n\\f]",
                ot = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                st = ot.replace("w", "w#"),
                at = "\\[" + it + "*(" + ot + ")" + it + "*(?:([*^$|!~]?=)" + it + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + st + ")|)|)" + it + "*\\]",
                lt = ":(" + ot + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + at.replace(3, 8) + ")*)|.*)\\)|)",
                ut = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
                ft = new RegExp("^" + it + "*," + it + "*"),
                dt = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
                pt = new RegExp(it + "*[+~]"),
                ht = new RegExp("=" + it + "*([^\\]'\"]*)" + it + "*\\]", "g"),
                gt = new RegExp(lt),
                mt = new RegExp("^" + st + "$"),
                yt = {
                    ID: new RegExp("^#(" + ot + ")"),
                    CLASS: new RegExp("^\\.(" + ot + ")"),
                    TAG: new RegExp("^(" + ot.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + at),
                    PSEUDO: new RegExp("^" + lt),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + rt + ")$", "i"),
                    needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
                },
                vt = /^[^{]+\{\s*\[native \w/,
                xt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                bt = /^(?:input|select|textarea|button)$/i,
                wt = /^h\d$/i,
                Tt = /'|\\/g,
                Ct = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
                kt = function (e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
                };
            try {
                et.apply(Q = tt.call(R.childNodes), R.childNodes), Q[R.childNodes.length].nodeType
            } catch (Et) {
                et = {
                    apply: Q.length ? function (e, t) {
                        Z.apply(e, tt.call(t))
                    } : function (e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }
            S = n.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, C = n.support = {}, L = n.setDocument = function (e) {
                var t = e ? e.ownerDocument || e : R,
                    n = t.defaultView;
                return t !== H && 9 === t.nodeType && t.documentElement ? (H = t, $ = t.documentElement, q = !S(t), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload", function () {
                    L()
                }), C.attributes = o(function (e) {
                    return e.className = "i", !e.getAttribute("className")
                }), C.getElementsByTagName = o(function (e) {
                    return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length
                }), C.getElementsByClassName = o(function (e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), C.getById = o(function (e) {
                    return $.appendChild(e).id = _, !t.getElementsByName || !t.getElementsByName(_).length
                }), C.getById ? (E.find.ID = function (e, t) {
                    if (typeof t.getElementById !== Y && q) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, E.filter.ID = function (e) {
                    var t = e.replace(Ct, kt);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete E.find.ID, E.filter.ID = function (e) {
                    var t = e.replace(Ct, kt);
                    return function (e) {
                        var n = typeof e.getAttributeNode !== Y && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), E.find.TAG = C.getElementsByTagName ? function (e, t) {
                    return typeof t.getElementsByTagName !== Y ? t.getElementsByTagName(e) : void 0
                } : function (e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, E.find.CLASS = C.getElementsByClassName && function (e, t) {
                    return typeof t.getElementsByClassName !== Y && q ? t.getElementsByClassName(e) : void 0
                }, I = [], F = [], (C.qsa = vt.test(t.querySelectorAll)) && (o(function (e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || F.push("\\[" + it + "*(?:value|" + rt + ")"), e.querySelectorAll(":checked").length || F.push(":checked")
                }), o(function (e) {
                    var n = t.createElement("input");
                    n.setAttribute("type", "hidden"), e.appendChild(n).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && F.push("[*^$]=" + it + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
                })), (C.matchesSelector = vt.test(M = $.webkitMatchesSelector || $.mozMatchesSelector || $.oMatchesSelector || $.msMatchesSelector)) && o(function (e) {
                    C.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), I.push("!=", lt)
                }), F = F.length && new RegExp(F.join("|")), I = I.length && new RegExp(I.join("|")), O = vt.test($.contains) || $.compareDocumentPosition ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function (e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, V = $.compareDocumentPosition ? function (e, n) {
                    if (e === n) return U = !0, 0;
                    var r = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n);
                    return r ? 1 & r || !C.sortDetached && n.compareDocumentPosition(e) === r ? e === t || O(R, e) ? -1 : n === t || O(R, n) ? 1 : D ? nt.call(D, e) - nt.call(D, n) : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                } : function (e, n) {
                    var r, i = 0,
                        o = e.parentNode,
                        s = n.parentNode,
                        l = [e],
                        u = [n];
                    if (e === n) return U = !0, 0;
                    if (!o || !s) return e === t ? -1 : n === t ? 1 : o ? -1 : s ? 1 : D ? nt.call(D, e) - nt.call(D, n) : 0;
                    if (o === s) return a(e, n);
                    for (r = e; r = r.parentNode;) l.unshift(r);
                    for (r = n; r = r.parentNode;) u.unshift(r);
                    for (; l[i] === u[i];) i++;
                    return i ? a(l[i], u[i]) : l[i] === R ? -1 : u[i] === R ? 1 : 0
                }, t) : H
            }, n.matches = function (e, t) {
                return n(e, null, null, t)
            }, n.matchesSelector = function (e, t) {
                if ((e.ownerDocument || e) !== H && L(e), t = t.replace(ht, "='$1']"), !(!C.matchesSelector || !q || I && I.test(t) || F && F.test(t))) try {
                    var r = M.call(e, t);
                    if (r || C.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
                } catch (i) {}
                return n(t, H, null, [e]).length > 0
            }, n.contains = function (e, t) {
                return (e.ownerDocument || e) !== H && L(e), O(e, t)
            }, n.attr = function (e, n) {
                (e.ownerDocument || e) !== H && L(e);
                var r = E.attrHandle[n.toLowerCase()],
                    i = r && G.call(E.attrHandle, n.toLowerCase()) ? r(e, n, !q) : t;
                return i === t ? C.attributes || !q ? e.getAttribute(n) : (i = e.getAttributeNode(n)) && i.specified ? i.value : null : i
            }, n.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, n.uniqueSort = function (e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (U = !C.detectDuplicates, D = !C.sortStable && e.slice(0), e.sort(V), U) {
                    for (; t = e[i++];) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1)
                }
                return e
            }, N = n.getText = function (e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += N(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r]; r++) n += N(t);
                return n
            }, E = n.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: yt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(Ct, kt), e[3] = (e[4] || e[5] || "").replace(Ct, kt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e
                    },
                    PSEUDO: function (e) {
                        var n, r = !e[5] && e[2];
                        return yt.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && gt.test(r) && (n = d(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(Ct, kt).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        } : function (e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function (e) {
                        var t = B[e + " "];
                        return t || (t = new RegExp("(^|" + it + ")" + e + "(" + it + "|$)")) && B(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== Y && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (e, t, r) {
                        return function (i) {
                            var o = n.attr(i, e);
                            return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === r : "!=" === t ? o !== r : "^=" === t ? r && 0 === o.indexOf(r) : "*=" === t ? r && o.indexOf(r) > -1 : "$=" === t ? r && o.slice(-r.length) === r : "~=" === t ? (" " + o + " ").indexOf(r) > -1 : "|=" === t ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                        }
                    },
                    CHILD: function (e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            s = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === r && 0 === i ? function (e) {
                            return !!e.parentNode
                        } : function (t, n, l) {
                            var u, c, f, d, p, h, g = o !== s ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                y = a && t.nodeName.toLowerCase(),
                                v = !l && !a;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (f = t; f = f[g];)
                                            if (a ? f.nodeName.toLowerCase() === y : 1 === f.nodeType) return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? m.firstChild : m.lastChild], s && v) {
                                    for (c = m[_] || (m[_] = {}), u = c[e] || [], p = u[0] === P && u[1], d = u[0] === P && u[2], f = p && m.childNodes[p]; f = ++p && f && f[g] || (d = p = 0) || h.pop();)
                                        if (1 === f.nodeType && ++d && f === t) {
                                            c[e] = [P, p, d];
                                            break
                                        }
                                } else if (v && (u = (t[_] || (t[_] = {}))[e]) && u[0] === P) d = u[1];
                                else
                                    for (;
                                        (f = ++p && f && f[g] || (d = p = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++d || (v && ((f[_] || (f[_] = {}))[e] = [P, d]), f !== t)););
                                return d -= i, d === r || 0 === d % r && d / r >= 0
                            }
                        }
                    },
                    PSEUDO: function (e, t) {
                        var r, o = E.pseudos[e] || E.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                        return o[_] ? o(t) : o.length > 1 ? (r = [e, e, "", t], E.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, n) {
                            for (var r, i = o(e, t), s = i.length; s--;) r = nt.call(e, i[s]), e[r] = !(n[r] = i[s])
                        }) : function (e) {
                            return o(e, 0, r)
                        }) : o
                    }
                },
                pseudos: {
                    not: i(function (e) {
                        var t = [],
                            n = [],
                            r = A(e.replace(ut, "$1"));
                        return r[_] ? i(function (e, t, n, i) {
                            for (var o, s = r(e, null, i, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                        }) : function (e, i, o) {
                            return t[0] = e, r(t, null, o, n), !n.pop()
                        }
                    }),
                    has: i(function (e) {
                        return function (t) {
                            return n(e, t).length > 0
                        }
                    }),
                    contains: i(function (e) {
                        return function (t) {
                            return (t.textContent || t.innerText || N(t)).indexOf(e) > -1
                        }
                    }),
                    lang: i(function (e) {
                        return mt.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(Ct, kt).toLowerCase(),
                            function (t) {
                                var n;
                                do
                                    if (n = q ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function (e) {
                        return e === $
                    },
                    focus: function (e) {
                        return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function (e) {
                        return e.disabled === !1
                    },
                    disabled: function (e) {
                        return e.disabled === !0
                    },
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !E.pseudos.empty(e)
                    },
                    header: function (e) {
                        return wt.test(e.nodeName)
                    },
                    input: function (e) {
                        return bt.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                    },
                    first: c(function () {
                        return [0]
                    }),
                    last: c(function (e, t) {
                        return [t - 1]
                    }),
                    eq: c(function (e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: c(function (e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: c(function (e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: c(function (e, t, n) {
                        for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: c(function (e, t, n) {
                        for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }, E.pseudos.nth = E.pseudos.eq;
            for (T in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) E.pseudos[T] = l(T);
            for (T in {
                    submit: !0,
                    reset: !0
                }) E.pseudos[T] = u(T);
            f.prototype = E.filters = E.pseudos, E.setFilters = new f, A = n.compile = function (e, t) {
                var n, r = [],
                    i = [],
                    o = X[e + " "];
                if (!o) {
                    for (t || (t = d(e)), n = t.length; n--;) o = v(t[n]), o[_] ? r.push(o) : i.push(o);
                    o = X(e, x(i, r))
                }
                return o
            }, C.sortStable = _.split("").sort(V).join("") === _, C.detectDuplicates = U, L(), C.sortDetached = o(function (e) {
                return 1 & e.compareDocumentPosition(H.createElement("div"))
            }), o(function (e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || s("type|href|height|width", function (e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), C.attributes && o(function (e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || s("value", function (e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), o(function (e) {
                return null == e.getAttribute("disabled")
            }) || s(rt, function (e, t, n) {
                var r;
                return n ? void 0 : (r = e.getAttributeNode(t)) && r.specified ? r.value : e[t] === !0 ? t.toLowerCase() : null
            }), ct.find = n, ct.expr = n.selectors, ct.expr[":"] = ct.expr.pseudos, ct.unique = n.uniqueSort, ct.text = n.getText, ct.isXMLDoc = n.isXML, ct.contains = n.contains
        }(e);
    var Et = {};
    ct.Callbacks = function (e) {
        e = "string" == typeof e ? Et[e] || r(e) : ct.extend({}, e);
        var n, i, o, s, a, l, u = [],
            c = !e.once && [],
            f = function (t) {
                for (i = e.memory && t, o = !0, a = l || 0, l = 0, s = u.length, n = !0; u && s > a; a++)
                    if (u[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        i = !1;
                        break
                    }
                n = !1, u && (c ? c.length && f(c.shift()) : i ? u = [] : d.disable())
            },
            d = {
                add: function () {
                    if (u) {
                        var t = u.length;
                        ! function r(t) {
                            ct.each(t, function (t, n) {
                                var i = ct.type(n);
                                "function" === i ? e.unique && d.has(n) || u.push(n) : n && n.length && "string" !== i && r(n)
                            })
                        }(arguments), n ? s = u.length : i && (l = t, f(i))
                    }
                    return this
                },
                remove: function () {
                    return u && ct.each(arguments, function (e, t) {
                        for (var r;
                            (r = ct.inArray(t, u, r)) > -1;) u.splice(r, 1), n && (s >= r && s--, a >= r && a--)
                    }), this
                },
                has: function (e) {
                    return e ? ct.inArray(e, u) > -1 : !(!u || !u.length)
                },
                empty: function () {
                    return u = [], s = 0, this
                },
                disable: function () {
                    return u = c = i = t, this
                },
                disabled: function () {
                    return !u
                },
                lock: function () {
                    return c = t, i || d.disable(), this
                },
                locked: function () {
                    return !c
                },
                fireWith: function (e, t) {
                    return !u || o && !c || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? c.push(t) : f(t)), this
                },
                fire: function () {
                    return d.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!o
                }
            };
        return d
    }, ct.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", ct.Callbacks("once memory"), "resolved"], ["reject", "fail", ct.Callbacks("once memory"), "rejected"], ["notify", "progress", ct.Callbacks("memory")]],
                n = "pending",
                r = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var e = arguments;
                        return ct.Deferred(function (n) {
                            ct.each(t, function (t, o) {
                                var s = o[0],
                                    a = ct.isFunction(e[t]) && e[t];
                                i[o[1]](function () {
                                    var e = a && a.apply(this, arguments);
                                    e && ct.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function (e) {
                        return null != e ? ct.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, ct.each(t, function (e, o) {
                var s = o[2],
                    a = o[3];
                r[o[1]] = s.add, a && s.add(function () {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = s.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function (e) {
            var t, n, r, i = 0,
                o = ot.call(arguments),
                s = o.length,
                a = 1 !== s || e && ct.isFunction(e.promise) ? s : 0,
                l = 1 === a ? e : ct.Deferred(),
                u = function (e, n, r) {
                    return function (i) {
                        n[e] = this, r[e] = arguments.length > 1 ? ot.call(arguments) : i, r === t ? l.notifyWith(n, r) : --a || l.resolveWith(n, r)
                    }
                };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), r = new Array(s); s > i; i++) o[i] && ct.isFunction(o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(l.reject).progress(u(i, n, t)) : --a;
            return a || l.resolveWith(r, o), l.promise()
        }
    }), ct.support = function (t) {
        var n, r, i, o, s, a, l, u, c, f = G.createElement("div");
        if (f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = f.getElementsByTagName("*") || [], r = f.getElementsByTagName("a")[0], !r || !r.style || !n.length) return t;
        o = G.createElement("select"), a = o.appendChild(G.createElement("option")), i = f.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== f.className, t.leadingWhitespace = 3 === f.firstChild.nodeType, t.tbody = !f.getElementsByTagName("tbody").length, t.htmlSerialize = !!f.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!i.value, t.optSelected = a.selected, t.enctype = !!G.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== G.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, i.checked = !0, t.noCloneChecked = i.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !a.disabled;
        try {
            delete f.test
        } catch (d) {
            t.deleteExpando = !1
        }
        i = G.createElement("input"), i.setAttribute("value", ""), t.input = "" === i.getAttribute("value"), i.value = "t", i.setAttribute("type", "radio"), t.radioValue = "t" === i.value, i.setAttribute("checked", "t"), i.setAttribute("name", "t"), s = G.createDocumentFragment(), s.appendChild(i), t.appendChecked = i.checked, t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, f.attachEvent && (f.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), f.cloneNode(!0).click());
        for (c in {
                submit: !0,
                change: !0,
                focusin: !0
            }) f.setAttribute(l = "on" + c, "t"), t[c + "Bubbles"] = l in e || f.attributes[l].expando === !1;
        f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === f.style.backgroundClip;
        for (c in ct(t)) break;
        return t.ownLast = "0" !== c, ct(function () {
            var n, r, i, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                s = G.getElementsByTagName("body")[0];
            s && (n = G.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(n).appendChild(f), f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = f.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = u && 0 === i[0].offsetHeight, f.innerHTML = "", f.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ct.swap(s, null != s.style.zoom ? {
                zoom: 1
            } : {}, function () {
                t.boxSizing = 4 === f.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(f, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(f, null) || {
                width: "4px"
            }).width, r = f.appendChild(G.createElement("div")), r.style.cssText = f.style.cssText = o, r.style.marginRight = r.style.width = "0", f.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof f.style.zoom !== Y && (f.innerHTML = "", f.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === f.offsetWidth, f.style.display = "block", f.innerHTML = "<div></div>", f.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== f.offsetWidth, t.inlineBlockNeedsLayout && (s.style.zoom = 1)), s.removeChild(n), n = f = i = r = null)
        }), n = o = s = a = r = i = null, t
    }({});
    var Nt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        St = /([A-Z])/g;
    ct.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (e) {
            return e = e.nodeType ? ct.cache[e[ct.expando]] : e[ct.expando], !!e && !a(e)
        },
        data: function (e, t, n) {
            return i(e, t, n)
        },
        removeData: function (e, t) {
            return o(e, t)
        },
        _data: function (e, t, n) {
            return i(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return o(e, t, !0)
        },
        acceptData: function (e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
            var t = e.nodeName && ct.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), ct.fn.extend({
        data: function (e, n) {
            var r, i, o = null,
                a = 0,
                l = this[0];
            if (e === t) {
                if (this.length && (o = ct.data(l), 1 === l.nodeType && !ct._data(l, "parsedAttrs"))) {
                    for (r = l.attributes; a < r.length; a++) i = r[a].name, 0 === i.indexOf("data-") && (i = ct.camelCase(i.slice(5)), s(l, i, o[i]));
                    ct._data(l, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function () {
                ct.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                ct.data(this, e, n)
            }) : l ? s(l, e, ct.data(l, e)) : null
        },
        removeData: function (e) {
            return this.each(function () {
                ct.removeData(this, e)
            })
        }
    }), ct.extend({
        queue: function (e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = ct._data(e, t), n && (!r || ct.isArray(n) ? r = ct._data(e, t, ct.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = ct.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = ct._queueHooks(e, t),
                s = function () {
                    ct.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return ct._data(e, n) || ct._data(e, n, {
                empty: ct.Callbacks("once memory").add(function () {
                    ct._removeData(e, t + "queue"), ct._removeData(e, n)
                })
            })
        }
    }), ct.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), arguments.length < r ? ct.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = ct.queue(this, e, n);
                ct._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ct.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                ct.dequeue(this, e)
            })
        },
        delay: function (e, t) {
            return e = ct.fx ? ct.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, n) {
            var r, i = 1,
                o = ct.Deferred(),
                s = this,
                a = this.length,
                l = function () {
                    --i || o.resolveWith(s, [s])
                };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; a--;) r = ct._data(s[a], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
            return l(), o.promise(n)
        }
    });
    var At, jt, Dt = /[\t\r\n\f]/g,
        Lt = /\r/g,
        Ht = /^(?:input|select|textarea|button|object)$/i,
        $t = /^(?:a|area)$/i,
        qt = /^(?:checked|selected)$/i,
        Ft = ct.support.getSetAttribute,
        It = ct.support.input;
    ct.fn.extend({
        attr: function (e, t) {
            return ct.access(this, ct.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                ct.removeAttr(this, e)
            })
        },
        prop: function (e, t) {
            return ct.access(this, ct.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = ct.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function (e) {
            var t, n, r, i, o, s = 0,
                a = this.length,
                l = "string" == typeof e && e;
            if (ct.isFunction(e)) return this.each(function (t) {
                ct(this).addClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(dt) || []; a > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Dt, " ") : " ")) {
                        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        n.className = ct.trim(r)
                    }
            return this
        },
        removeClass: function (e) {
            var t, n, r, i, o, s = 0,
                a = this.length,
                l = 0 === arguments.length || "string" == typeof e && e;
            if (ct.isFunction(e)) return this.each(function (t) {
                ct(this).removeClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(dt) || []; a > s; s++)
                    if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Dt, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        n.className = e ? ct.trim(r) : ""
                    }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ct.isFunction(e) ? this.each(function (n) {
                ct(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if ("string" === n)
                    for (var t, r = 0, i = ct(this), o = e.match(dt) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else(n === Y || "boolean" === n) && (this.className && ct._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ct._data(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Dt, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function (e) {
            var n, r, i, o = this[0]; {
                if (arguments.length) return i = ct.isFunction(e), this.each(function (n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, ct(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ct.isArray(o) && (o = ct.map(o, function (e) {
                        return null == e ? "" : e + ""
                    })), r = ct.valHooks[this.type] || ct.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
                });
                if (o) return r = ct.valHooks[o.type] || ct.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(Lt, "") : null == n ? "" : n)
            }
        }
    }), ct.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = ct.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            },
            select: {
                get: function (e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, l = 0 > i ? a : o ? i : 0; a > l; l++)
                        if (n = r[l], !(!n.selected && l !== i || (ct.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ct.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ct(n).val(), o) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function (e, t) {
                    for (var n, r, i = e.options, o = ct.makeArray(t), s = i.length; s--;) r = i[s], (r.selected = ct.inArray(ct(r).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        },
        attr: function (e, n, r) {
            var i, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === Y ? ct.prop(e, n, r) : (1 === s && ct.isXMLDoc(e) || (n = n.toLowerCase(), i = ct.attrHooks[n] || (ct.expr.match.bool.test(n) ? jt : At)), r === t ? i && "get" in i && null !== (o = i.get(e, n)) ? o : (o = ct.find.attr(e, n), null == o ? t : o) : null !== r ? i && "set" in i && (o = i.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), r) : (ct.removeAttr(e, n), void 0))
        },
        removeAttr: function (e, t) {
            var n, r, i = 0,
                o = t && t.match(dt);
            if (o && 1 === e.nodeType)
                for (; n = o[i++];) r = ct.propFix[n] || n, ct.expr.match.bool.test(n) ? It && Ft || !qt.test(n) ? e[r] = !1 : e[ct.camelCase("default-" + n)] = e[r] = !1 : ct.attr(e, n, ""), e.removeAttribute(Ft ? n : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!ct.support.radioValue && "radio" === t && ct.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (e, n, r) {
            var i, o, s, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return s = 1 !== a || !ct.isXMLDoc(e), s && (n = ct.propFix[n] || n, o = ct.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = ct.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Ht.test(e.nodeName) || $t.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), jt = {
        set: function (e, t, n) {
            return t === !1 ? ct.removeAttr(e, n) : It && Ft || !qt.test(n) ? e.setAttribute(!Ft && ct.propFix[n] || n, n) : e[ct.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, ct.each(ct.expr.match.bool.source.match(/\w+/g), function (e, n) {
        var r = ct.expr.attrHandle[n] || ct.find.attr;
        ct.expr.attrHandle[n] = It && Ft || !qt.test(n) ? function (e, n, i) {
            var o = ct.expr.attrHandle[n],
                s = i ? t : (ct.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return ct.expr.attrHandle[n] = o, s
        } : function (e, n, r) {
            return r ? t : e[ct.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), It && Ft || (ct.attrHooks.value = {
        set: function (e, t, n) {
            return ct.nodeName(e, "input") ? (e.defaultValue = t, void 0) : At && At.set(e, t, n)
        }
    }), Ft || (At = {
        set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, ct.expr.attrHandle.id = ct.expr.attrHandle.name = ct.expr.attrHandle.coords = function (e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
    }, ct.valHooks.button = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        },
        set: At.set
    }, ct.attrHooks.contenteditable = {
        set: function (e, t, n) {
            At.set(e, "" === t ? !1 : t, n)
        }
    }, ct.each(["width", "height"], function (e, t) {
        ct.attrHooks[t] = {
            set: function (e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), ct.support.hrefNormalized || ct.each(["href", "src"], function (e, t) {
        ct.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), ct.support.style || (ct.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || t
        },
        set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), ct.support.optSelected || (ct.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), ct.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ct.propFix[this.toLowerCase()] = this
    }), ct.support.enctype || (ct.propFix.enctype = "encoding"), ct.each(["radio", "checkbox"], function () {
        ct.valHooks[this] = {
            set: function (e, t) {
                return ct.isArray(t) ? e.checked = ct.inArray(ct(e).val(), t) >= 0 : void 0
            }
        }, ct.support.checkOn || (ct.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Mt = /^(?:input|select|textarea)$/i,
        Ot = /^key/,
        _t = /^(?:mouse|contextmenu)|click/,
        Rt = /^(?:focusinfocus|focusoutblur)$/,
        Pt = /^([^.]*)(?:\.(.+)|)$/;
    ct.event = {
        global: {},
        add: function (e, n, r, i, o) {
            var s, a, l, u, c, f, d, p, h, g, m, y = ct._data(e);
            if (y) {
                for (r.handler && (u = r, r = u.handler, o = u.selector), r.guid || (r.guid = ct.guid++), (a = y.events) || (a = y.events = {}), (f = y.handle) || (f = y.handle = function (e) {
                        return typeof ct === Y || e && ct.event.triggered === e.type ? t : ct.event.dispatch.apply(f.elem, arguments)
                    }, f.elem = e), n = (n || "").match(dt) || [""], l = n.length; l--;) s = Pt.exec(n[l]) || [], h = m = s[1], g = (s[2] || "").split(".").sort(), h && (c = ct.event.special[h] || {}, h = (o ? c.delegateType : c.bindType) || h, c = ct.event.special[h] || {}, d = ct.extend({
                    type: h,
                    origType: m,
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && ct.expr.match.needsContext.test(o),
                    namespace: g.join(".")
                }, u), (p = a[h]) || (p = a[h] = [], p.delegateCount = 0, c.setup && c.setup.call(e, i, g, f) !== !1 || (e.addEventListener ? e.addEventListener(h, f, !1) : e.attachEvent && e.attachEvent("on" + h, f))), c.add && (c.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), o ? p.splice(p.delegateCount++, 0, d) : p.push(d), ct.event.global[h] = !0);
                e = null
            }
        },
        remove: function (e, t, n, r, i) {
            var o, s, a, l, u, c, f, d, p, h, g, m = ct.hasData(e) && ct._data(e);
            if (m && (c = m.events)) {
                for (t = (t || "").match(dt) || [""], u = t.length; u--;)
                    if (a = Pt.exec(t[u]) || [], p = g = a[1], h = (a[2] || "").split(".").sort(), p) {
                        for (f = ct.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, d = c[p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;) s = d[o], !i && g !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || r && r !== s.selector && ("**" !== r || !s.selector) || (d.splice(o, 1), s.selector && d.delegateCount--, f.remove && f.remove.call(e, s));
                        l && !d.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || ct.removeEvent(e, p, m.handle), delete c[p])
                    } else
                        for (p in c) ct.event.remove(e, p + t[u], n, r, !0);
                ct.isEmptyObject(c) && (delete m.handle, ct._removeData(e, "events"))
            }
        },
        trigger: function (n, r, i, o) {
            var s, a, l, u, c, f, d, p = [i || G],
                h = lt.call(n, "type") ? n.type : n,
                g = lt.call(n, "namespace") ? n.namespace.split(".") : [];
            if (l = f = i = i || G, 3 !== i.nodeType && 8 !== i.nodeType && !Rt.test(h + ct.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."), h = g.shift(), g.sort()), a = h.indexOf(":") < 0 && "on" + h, n = n[ct.expando] ? n : new ct.Event(h, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = g.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : ct.makeArray(r, [n]), c = ct.event.special[h] || {}, o || !c.trigger || c.trigger.apply(i, r) !== !1)) {
                if (!o && !c.noBubble && !ct.isWindow(i)) {
                    for (u = c.delegateType || h, Rt.test(u + h) || (l = l.parentNode); l; l = l.parentNode) p.push(l), f = l;
                    f === (i.ownerDocument || G) && p.push(f.defaultView || f.parentWindow || e)
                }
                for (d = 0;
                    (l = p[d++]) && !n.isPropagationStopped();) n.type = d > 1 ? u : c.bindType || h, s = (ct._data(l, "events") || {})[n.type] && ct._data(l, "handle"), s && s.apply(l, r), s = a && l[a], s && ct.acceptData(l) && s.apply && s.apply(l, r) === !1 && n.preventDefault();
                if (n.type = h, !o && !n.isDefaultPrevented() && (!c._default || c._default.apply(p.pop(), r) === !1) && ct.acceptData(i) && a && i[h] && !ct.isWindow(i)) {
                    f = i[a], f && (i[a] = null), ct.event.triggered = h;
                    try {
                        i[h]()
                    } catch (m) {}
                    ct.event.triggered = t, f && (i[a] = f)
                }
                return n.result
            }
        },
        dispatch: function (e) {
            e = ct.event.fix(e);
            var n, r, i, o, s, a = [],
                l = ot.call(arguments),
                u = (ct._data(this, "events") || {})[e.type] || [],
                c = ct.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (a = ct.event.handlers.call(this, e, u), n = 0;
                    (o = a[n++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = o.elem, s = 0;
                        (i = o.handlers[s++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((ct.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, n) {
            var r, i, o, s, a = [],
                l = n.delegateCount,
                u = e.target;
            if (l && u.nodeType && (!e.button || "click" !== e.type))
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], s = 0; l > s; s++) i = n[s], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? ct(r, this).index(u) >= 0 : ct.find(r, this, null, [u]).length), o[r] && o.push(i);
                        o.length && a.push({
                            elem: u,
                            handlers: o
                        })
                    }
            return l < n.length && a.push({
                elem: this,
                handlers: n.slice(l)
            }), a
        },
        fix: function (e) {
            if (e[ct.expando]) return e;
            var t, n, r, i = e.type,
                o = e,
                s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = _t.test(i) ? this.mouseHooks : Ot.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new ct.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || G), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, i, o, s = n.button,
                    a = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || G, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== c() && this.focus) try {
                        return this.focus(), !1
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === c() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return ct.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function (e) {
                    return ct.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = ct.extend(new ct.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? ct.event.trigger(i, null, t) : ct.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, ct.removeEvent = G.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === Y && (e[r] = null), e.detachEvent(r, n))
    }, ct.Event = function (e, t) {
        return this instanceof ct.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l : u) : this.type = e, t && ct.extend(this, t), this.timeStamp = e && e.timeStamp || ct.now(), this[ct.expando] = !0, void 0) : new ct.Event(e, t)
    }, ct.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = l, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = l, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = l, this.stopPropagation()
        }
    }, ct.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        ct.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !ct.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ct.support.submitBubbles || (ct.event.special.submit = {
        setup: function () {
            return ct.nodeName(this, "form") ? !1 : (ct.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target,
                    r = ct.nodeName(n, "input") || ct.nodeName(n, "button") ? n.form : t;
                r && !ct._data(r, "submitBubbles") && (ct.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), ct._data(r, "submitBubbles", !0))
            }), void 0)
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ct.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            return ct.nodeName(this, "form") ? !1 : (ct.event.remove(this, "._submit"), void 0)
        }
    }), ct.support.changeBubbles || (ct.event.special.change = {
        setup: function () {
            return Mt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ct.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), ct.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), ct.event.simulate("change", this, e, !0)
            })), !1) : (ct.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Mt.test(t.nodeName) && !ct._data(t, "changeBubbles") && (ct.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ct.event.simulate("change", this.parentNode, e, !0)
                }), ct._data(t, "changeBubbles", !0))
            }), void 0)
        },
        handle: function (e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return ct.event.remove(this, "._change"), !Mt.test(this.nodeName)
        }
    }), ct.support.focusinBubbles || ct.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = 0,
            r = function (e) {
                ct.event.simulate(t, e.target, ct.event.fix(e), !0)
            };
        ct.event.special[t] = {
            setup: function () {
                0 === n++ && G.addEventListener(e, r, !0)
            },
            teardown: function () {
                0 === --n && G.removeEventListener(e, r, !0)
            }
        }
    }), ct.fn.extend({
        on: function (e, n, r, i, o) {
            var s, a;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (s in e) this.on(s, n, r, e[s], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = u;
            else if (!i) return this;
            return 1 === o && (a = i, i = function (e) {
                return ct().off(e), a.apply(this, arguments)
            }, i.guid = a.guid || (a.guid = ct.guid++)), this.each(function () {
                ct.event.add(this, e, i, r, n)
            })
        },
        one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function (e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ct(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = u), this.each(function () {
                ct.event.remove(this, e, r, n)
            })
        },
        trigger: function (e, t) {
            return this.each(function () {
                ct.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            var n = this[0];
            return n ? ct.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Wt = /^.[^:#\[\.,]*$/,
        Bt = /^(?:parents|prev(?:Until|All))/,
        zt = ct.expr.match.needsContext,
        Xt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ct.fn.extend({
        find: function (e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) return this.pushStack(ct(e).filter(function () {
                for (t = 0; i > t; t++)
                    if (ct.contains(r[t], this)) return !0
            }));
            for (t = 0; i > t; t++) ct.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? ct.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        has: function (e) {
            var t, n = ct(e, this),
                r = n.length;
            return this.filter(function () {
                for (t = 0; r > t; t++)
                    if (ct.contains(this, n[t])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(d(this, e || [], !0))
        },
        filter: function (e) {
            return this.pushStack(d(this, e || [], !1))
        },
        is: function (e) {
            return !!d(this, "string" == typeof e && zt.test(e) ? ct(e) : e || [], !1).length
        },
        closest: function (e, t) {
            for (var n, r = 0, i = this.length, o = [], s = zt.test(e) || "string" != typeof e ? ct(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ct.find.matchesSelector(n, e))) {
                        n = o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? ct.unique(o) : o)
        },
        index: function (e) {
            return e ? "string" == typeof e ? ct.inArray(this[0], ct(e)) : ct.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            var n = "string" == typeof e ? ct(e, t) : ct.makeArray(e && e.nodeType ? [e] : e),
                r = ct.merge(this.get(), n);
            return this.pushStack(ct.unique(r))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ct.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return ct.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return ct.dir(e, "parentNode", n)
        },
        next: function (e) {
            return f(e, "nextSibling")
        },
        prev: function (e) {
            return f(e, "previousSibling")
        },
        nextAll: function (e) {
            return ct.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return ct.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return ct.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return ct.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return ct.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return ct.sibling(e.firstChild)
        },
        contents: function (e) {
            return ct.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ct.merge([], e.childNodes)
        }
    }, function (e, t) {
        ct.fn[e] = function (n, r) {
            var i = ct.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ct.filter(r, i)), this.length > 1 && (Xt[e] || (i = ct.unique(i)), Bt.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    }), ct.extend({
        filter: function (e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ct.find.matchesSelector(r, e) ? [r] : [] : ct.find.matches(e, ct.grep(t, function (e) {
                return 1 === e.nodeType
            }))
        },
        dir: function (e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !ct(o).is(r));) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        },
        sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var Ut = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Vt = / jQuery\d+="(?:null|\d+)"/g,
        Yt = new RegExp("<(?:" + Ut + ")[\\s/>]", "i"),
        Jt = /^\s+/,
        Gt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Qt = /<([\w:]+)/,
        Kt = /<tbody/i,
        Zt = /<|&#?\w+;/,
        en = /<(?:script|style|link)/i,
        tn = /^(?:checkbox|radio)$/i,
        nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rn = /^$|\/(?:java|ecma)script/i,
        on = /^true\/(.*)/,
        sn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        an = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ct.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        ln = p(G),
        un = ln.appendChild(G.createElement("div"));
    an.optgroup = an.option, an.tbody = an.tfoot = an.colgroup = an.caption = an.thead, an.th = an.td, ct.fn.extend({
        text: function (e) {
            return ct.access(this, function (e) {
                return e === t ? ct.text(this) : this.empty().append((this[0] && this[0].ownerDocument || G).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = h(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = h(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function (e, t) {
            for (var n, r = e ? ct.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ct.cleanData(b(n)), n.parentNode && (t && ct.contains(n.ownerDocument, n) && y(b(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ct.cleanData(b(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && ct.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return ct.clone(this, e, t)
            })
        },
        html: function (e) {
            return ct.access(this, function (e) {
                var n = this[0] || {},
                    r = 0,
                    i = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Vt, "") : t;
                if (!("string" != typeof e || en.test(e) || !ct.support.htmlSerialize && Yt.test(e) || !ct.support.leadingWhitespace && Jt.test(e) || an[(Qt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Gt, "<$1></$2>");
                    try {
                        for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (ct.cleanData(b(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function () {
            var e = ct.map(this, function (e) {
                    return [e.nextSibling, e.parentNode]
                }),
                t = 0;
            return this.domManip(arguments, function (n) {
                var r = e[t++],
                    i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), ct(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, t, n) {
            e = rt.apply([], e);
            var r, i, o, s, a, l, u = 0,
                c = this.length,
                f = this,
                d = c - 1,
                p = e[0],
                h = ct.isFunction(p);
            if (h || !(1 >= c || "string" != typeof p || ct.support.checkClone) && nn.test(p)) return this.each(function (r) {
                var i = f.eq(r);
                h && (e[0] = p.call(this, r, i.html())), i.domManip(e, t, n)
            });
            if (c && (l = ct.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
                for (s = ct.map(b(l, "script"), g), o = s.length; c > u; u++) i = l, u !== d && (i = ct.clone(i, !0, !0), o && ct.merge(s, b(i, "script"))), t.call(this[u], i, u);
                if (o)
                    for (a = s[s.length - 1].ownerDocument, ct.map(s, m), u = 0; o > u; u++) i = s[u], rn.test(i.type || "") && !ct._data(i, "globalEval") && ct.contains(a, i) && (i.src ? ct._evalUrl(i.src) : ct.globalEval((i.text || i.textContent || i.innerHTML || "").replace(sn, "")));
                l = r = null
            }
            return this
        }
    }), ct.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        ct.fn[e] = function (e) {
            for (var n, r = 0, i = [], o = ct(e), s = o.length - 1; s >= r; r++) n = r === s ? this : this.clone(!0), ct(o[r])[t](n), it.apply(i, n.get());
            return this.pushStack(i)
        }
    }), ct.extend({
        clone: function (e, t, n) {
            var r, i, o, s, a, l = ct.contains(e.ownerDocument, e);
            if (ct.support.html5Clone || ct.isXMLDoc(e) || !Yt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (un.innerHTML = e.outerHTML, un.removeChild(o = un.firstChild)), !(ct.support.noCloneEvent && ct.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ct.isXMLDoc(e)))
                for (r = b(o), a = b(e), s = 0; null != (i = a[s]); ++s) r[s] && x(i, r[s]);
            if (t)
                if (n)
                    for (a = a || b(e), r = r || b(o), s = 0; null != (i = a[s]); s++) v(i, r[s]);
                else v(e, o);
            return r = b(o, "script"), r.length > 0 && y(r, !l && b(e, "script")), r = a = i = null, o
        },
        buildFragment: function (e, t, n, r) {
            for (var i, o, s, a, l, u, c, f = e.length, d = p(t), h = [], g = 0; f > g; g++)
                if (o = e[g], o || 0 === o)
                    if ("object" === ct.type(o)) ct.merge(h, o.nodeType ? [o] : o);
                    else if (Zt.test(o)) {
                for (a = a || d.appendChild(t.createElement("div")), l = (Qt.exec(o) || ["", ""])[1].toLowerCase(), c = an[l] || an._default, a.innerHTML = c[1] + o.replace(Gt, "<$1></$2>") + c[2], i = c[0]; i--;) a = a.lastChild;
                if (!ct.support.leadingWhitespace && Jt.test(o) && h.push(t.createTextNode(Jt.exec(o)[0])), !ct.support.tbody)
                    for (o = "table" !== l || Kt.test(o) ? "<table>" !== c[1] || Kt.test(o) ? 0 : a : a.firstChild, i = o && o.childNodes.length; i--;) ct.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u);
                for (ct.merge(h, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = d.lastChild
            } else h.push(t.createTextNode(o));
            for (a && d.removeChild(a), ct.support.appendChecked || ct.grep(b(h, "input"), w), g = 0; o = h[g++];)
                if ((!r || -1 === ct.inArray(o, r)) && (s = ct.contains(o.ownerDocument, o), a = b(d.appendChild(o), "script"), s && y(a), n))
                    for (i = 0; o = a[i++];) rn.test(o.type || "") && n.push(o);
            return a = null, d
        },
        cleanData: function (e, t) {
            for (var n, r, i, o, s = 0, a = ct.expando, l = ct.cache, u = ct.support.deleteExpando, c = ct.event.special; null != (n = e[s]); s++)
                if ((t || ct.acceptData(n)) && (i = n[a], o = i && l[i])) {
                    if (o.events)
                        for (r in o.events) c[r] ? ct.event.remove(n, r) : ct.removeEvent(n, r, o.handle);
                    l[i] && (delete l[i], u ? delete n[a] : typeof n.removeAttribute !== Y ? n.removeAttribute(a) : n[a] = null, tt.push(i))
                }
        },
        _evalUrl: function (e) {
            return ct.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), ct.fn.extend({
        wrapAll: function (e) {
            if (ct.isFunction(e)) return this.each(function (t) {
                ct(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = ct(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return ct.isFunction(e) ? this.each(function (t) {
                ct(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = ct(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = ct.isFunction(e);
            return this.each(function (n) {
                ct(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                ct.nodeName(this, "body") || ct(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var cn, fn, dn, pn = /alpha\([^)]*\)/i,
        hn = /opacity\s*=\s*([^)]*)/,
        gn = /^(top|right|bottom|left)$/,
        mn = /^(none|table(?!-c[ea]).+)/,
        yn = /^margin/,
        vn = new RegExp("^(" + ft + ")(.*)$", "i"),
        xn = new RegExp("^(" + ft + ")(?!px)[a-z%]+$", "i"),
        bn = new RegExp("^([+-])=(" + ft + ")", "i"),
        wn = {
            BODY: "block"
        },
        Tn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Cn = {
            letterSpacing: 0,
            fontWeight: 400
        },
        kn = ["Top", "Right", "Bottom", "Left"],
        En = ["Webkit", "O", "Moz", "ms"];
    ct.fn.extend({
        css: function (e, n) {
            return ct.access(this, function (e, n, r) {
                var i, o, s = {},
                    a = 0;
                if (ct.isArray(n)) {
                    for (o = fn(e), i = n.length; i > a; a++) s[n[a]] = ct.css(e, n[a], !1, o);
                    return s
                }
                return r !== t ? ct.style(e, n, r) : ct.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function () {
            return k(this, !0)
        },
        hide: function () {
            return k(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                C(this) ? ct(this).show() : ct(this).hide()
            })
        }
    }), ct.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = dn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ct.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, s, a, l = ct.camelCase(n),
                    u = e.style;
                if (n = ct.cssProps[l] || (ct.cssProps[l] = T(u, l)), a = ct.cssHooks[n] || ct.cssHooks[l], r === t) return a && "get" in a && (o = a.get(e, !1, i)) !== t ? o : u[n];
                if (s = typeof r, "string" === s && (o = bn.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(ct.css(e, n)), s = "number"), !(null == r || "number" === s && isNaN(r) || ("number" !== s || ct.cssNumber[l] || (r += "px"), ct.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), a && "set" in a && (r = a.set(e, r, i)) === t))) try {
                    u[n] = r
                } catch (c) {}
            }
        },
        css: function (e, n, r, i) {
            var o, s, a, l = ct.camelCase(n);
            return n = ct.cssProps[l] || (ct.cssProps[l] = T(e.style, l)), a = ct.cssHooks[n] || ct.cssHooks[l], a && "get" in a && (s = a.get(e, !0, r)), s === t && (s = dn(e, n, i)), "normal" === s && n in Cn && (s = Cn[n]), "" === r || r ? (o = parseFloat(s), r === !0 || ct.isNumeric(o) ? o || 0 : s) : s
        }
    }), e.getComputedStyle ? (fn = function (t) {
        return e.getComputedStyle(t, null)
    }, dn = function (e, n, r) {
        var i, o, s, a = r || fn(e),
            l = a ? a.getPropertyValue(n) || a[n] : t,
            u = e.style;
        return a && ("" !== l || ct.contains(e.ownerDocument, e) || (l = ct.style(e, n)), xn.test(l) && yn.test(n) && (i = u.width, o = u.minWidth, s = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = a.width, u.width = i, u.minWidth = o, u.maxWidth = s)), l
    }) : G.documentElement.currentStyle && (fn = function (e) {
        return e.currentStyle
    }, dn = function (e, n, r) {
        var i, o, s, a = r || fn(e),
            l = a ? a[n] : t,
            u = e.style;
        return null == l && u && u[n] && (l = u[n]), xn.test(l) && !gn.test(n) && (i = u.left, o = e.runtimeStyle, s = o && o.left, s && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, s && (o.left = s)), "" === l ? "auto" : l
    }), ct.each(["height", "width"], function (e, t) {
        ct.cssHooks[t] = {
            get: function (e, n, r) {
                return n ? 0 === e.offsetWidth && mn.test(ct.css(e, "display")) ? ct.swap(e, Tn, function () {
                    return S(e, t, r)
                }) : S(e, t, r) : void 0
            },
            set: function (e, n, r) {
                var i = r && fn(e);
                return E(e, n, r ? N(e, t, r, ct.support.boxSizing && "border-box" === ct.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), ct.support.opacity || (ct.cssHooks.opacity = {
        get: function (e, t) {
            return hn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = ct.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === ct.trim(o.replace(pn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = pn.test(o) ? o.replace(pn, i) : o + " " + i)
        }
    }), ct(function () {
        ct.support.reliableMarginRight || (ct.cssHooks.marginRight = {
            get: function (e, t) {
                return t ? ct.swap(e, {
                    display: "inline-block"
                }, dn, [e, "marginRight"]) : void 0
            }
        }), !ct.support.pixelPosition && ct.fn.position && ct.each(["top", "left"], function (e, t) {
            ct.cssHooks[t] = {
                get: function (e, n) {
                    return n ? (n = dn(e, t), xn.test(n) ? ct(e).position()[t] + "px" : n) : void 0
                }
            }
        })
    }), ct.expr && ct.expr.filters && (ct.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ct.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ct.css(e, "display"))
    }, ct.expr.filters.visible = function (e) {
        return !ct.expr.filters.hidden(e)
    }), ct.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        ct.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + kn[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, yn.test(e) || (ct.cssHooks[e + t].set = E)
    });
    var Nn = /%20/g,
        Sn = /\[\]$/,
        An = /\r?\n/g,
        jn = /^(?:submit|button|image|reset|file)$/i,
        Dn = /^(?:input|select|textarea|keygen)/i;
    ct.fn.extend({
        serialize: function () {
            return ct.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var e = ct.prop(this, "elements");
                return e ? ct.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !ct(this).is(":disabled") && Dn.test(this.nodeName) && !jn.test(e) && (this.checked || !tn.test(e))
            }).map(function (e, t) {
                var n = ct(this).val();
                return null == n ? null : ct.isArray(n) ? ct.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(An, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(An, "\r\n")
                }
            }).get()
        }
    }), ct.param = function (e, n) {
        var r, i = [],
            o = function (e, t) {
                t = ct.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = ct.ajaxSettings && ct.ajaxSettings.traditional), ct.isArray(e) || e.jquery && !ct.isPlainObject(e)) ct.each(e, function () {
            o(this.name, this.value)
        });
        else
            for (r in e) D(r, e[r], n, o);
        return i.join("&").replace(Nn, "+")
    }, ct.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        ct.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ct.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Ln, Hn, $n = ct.now(),
        qn = /\?/,
        Fn = /#.*$/,
        In = /([?&])_=[^&]*/,
        Mn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        On = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        _n = /^(?:GET|HEAD)$/,
        Rn = /^\/\//,
        Pn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Wn = ct.fn.load,
        Bn = {},
        zn = {},
        Xn = "*/".concat("*");
    try {
        Hn = J.href
    } catch (Un) {
        Hn = G.createElement("a"), Hn.href = "", Hn = Hn.href
    }
    Ln = Pn.exec(Hn.toLowerCase()) || [], ct.fn.load = function (e, n, r) {
        if ("string" != typeof e && Wn) return Wn.apply(this, arguments);
        var i, o, s, a = this,
            l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), ct.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (s = "POST"), a.length > 0 && ct.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: n
        }).done(function (e) {
            o = arguments, a.html(i ? ct("<div>").append(ct.parseHTML(e)).find(i) : e)
        }).complete(r && function (e, t) {
            a.each(r, o || [e.responseText, t, e])
        }), this
    }, ct.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        ct.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), ct.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Hn,
            type: "GET",
            isLocal: On.test(Ln[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Xn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ct.parseJSON,
                "text xml": ct.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (e, t) {
            return t ? $($(e, ct.ajaxSettings), t) : $(ct.ajaxSettings, e)
        },
        ajaxPrefilter: L(Bn),
        ajaxTransport: L(zn),
        ajax: function (e, n) {
            function r(e, n, r, i) {
                var o, f, v, x, w, C = n;
                2 !== b && (b = 2, l && clearTimeout(l), c = t, a = i || "", T.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, r && (x = q(d, T, r)), x = F(d, x, T, o), o ? (d.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (ct.lastModified[s] = w), w = T.getResponseHeader("etag"), w && (ct.etag[s] = w)), 204 === e || "HEAD" === d.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = x.state, f = x.data, v = x.error, o = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (n || C) + "", o ? g.resolveWith(p, [f, C, T]) : g.rejectWith(p, [T, C, v]), T.statusCode(y), y = t, u && h.trigger(o ? "ajaxSuccess" : "ajaxError", [T, d, o ? f : v]), m.fireWith(p, [T, C]), u && (h.trigger("ajaxComplete", [T, d]), --ct.active || ct.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, o, s, a, l, u, c, f, d = ct.ajaxSetup({}, n),
                p = d.context || d,
                h = d.context && (p.nodeType || p.jquery) ? ct(p) : ct.event,
                g = ct.Deferred(),
                m = ct.Callbacks("once memory"),
                y = d.statusCode || {},
                v = {},
                x = {},
                b = 0,
                w = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === b) {
                            if (!f)
                                for (f = {}; t = Mn.exec(a);) f[t[1].toLowerCase()] = t[2];
                            t = f[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return b || (e = x[n] = x[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function (e) {
                        return b || (d.mimeType = e), this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (2 > b)
                                for (t in e) y[t] = [y[t], e[t]];
                            else T.always(e[T.status]);
                        return this
                    },
                    abort: function (e) {
                        var t = e || w;
                        return c && c.abort(t), r(0, t), this
                    }
                };
            if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, d.url = ((e || d.url || Hn) + "").replace(Fn, "").replace(Rn, Ln[1] + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = ct.trim(d.dataType || "*").toLowerCase().match(dt) || [""], null == d.crossDomain && (i = Pn.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Ln[1] && i[2] === Ln[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Ln[3] || ("http:" === Ln[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ct.param(d.data, d.traditional)), H(Bn, d, n, T), 2 === b) return T;
            u = d.global, u && 0 === ct.active++ && ct.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !_n.test(d.type), s = d.url, d.hasContent || (d.data && (s = d.url += (qn.test(s) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = In.test(s) ? s.replace(In, "$1_=" + $n++) : s + (qn.test(s) ? "&" : "?") + "_=" + $n++)), d.ifModified && (ct.lastModified[s] && T.setRequestHeader("If-Modified-Since", ct.lastModified[s]), ct.etag[s] && T.setRequestHeader("If-None-Match", ct.etag[s])), (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", d.contentType), T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Xn + "; q=0.01" : "") : d.accepts["*"]);
            for (o in d.headers) T.setRequestHeader(o, d.headers[o]);
            if (d.beforeSend && (d.beforeSend.call(p, T, d) === !1 || 2 === b)) return T.abort();
            w = "abort";
            for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[o](d[o]);
            if (c = H(zn, d, n, T)) {
                T.readyState = 1, u && h.trigger("ajaxSend", [T, d]), d.async && d.timeout > 0 && (l = setTimeout(function () {
                    T.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, c.send(v, r)
                } catch (C) {
                    if (!(2 > b)) throw C;
                    r(-1, C)
                }
            } else r(-1, "No Transport");
            return T
        },
        getJSON: function (e, t, n) {
            return ct.get(e, t, n, "json")
        },
        getScript: function (e, n) {
            return ct.get(e, t, n, "script")
        }
    }), ct.each(["get", "post"], function (e, n) {
        ct[n] = function (e, r, i, o) {
            return ct.isFunction(r) && (o = o || i, i = r, r = t), ct.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    }), ct.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (e) {
                return ct.globalEval(e), e
            }
        }
    }), ct.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), ct.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = G.head || ct("head")[0] || G.documentElement;
            return {
                send: function (t, i) {
                    n = G.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function () {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Vn = [],
        Yn = /(=)\?(?=&|$)|\?\?/;
    ct.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Vn.pop() || ct.expando + "_" + $n++;
            return this[e] = !0, e
        }
    }), ct.ajaxPrefilter("json jsonp", function (n, r, i) {
        var o, s, a, l = n.jsonp !== !1 && (Yn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Yn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ct.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Yn, "$1" + o) : n.jsonp !== !1 && (n.url += (qn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
            return a || ct.error(o + " was not called"), a[0]
        }, n.dataTypes[0] = "json", s = e[o], e[o] = function () {
            a = arguments
        }, i.always(function () {
            e[o] = s, n[o] && (n.jsonpCallback = r.jsonpCallback, Vn.push(o)), a && ct.isFunction(s) && s(a[0]), a = s = t
        }), "script") : void 0
    });
    var Jn, Gn, Qn = 0,
        Kn = e.ActiveXObject && function () {
            var e;
            for (e in Jn) Jn[e](t, !0)
        };
    ct.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && I() || M()
    } : I, Gn = ct.ajaxSettings.xhr(), ct.support.cors = !!Gn && "withCredentials" in Gn, Gn = ct.support.ajax = !!Gn, Gn && ct.ajaxTransport(function (n) {
        if (!n.crossDomain || ct.support.cors) {
            var r;
            return {
                send: function (i, o) {
                    var s, a, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                        for (a in n.xhrFields) l[a] = n.xhrFields[a];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (a in i) l.setRequestHeader(a, i[a])
                    } catch (u) {}
                    l.send(n.hasContent && n.data || null), r = function (e, i) {
                        var a, u, c, f;
                        try {
                            if (r && (i || 4 === l.readyState))
                                if (r = t, s && (l.onreadystatechange = ct.noop, Kn && delete Jn[s]), i) 4 !== l.readyState && l.abort();
                                else {
                                    f = {}, a = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (f.text = l.responseText);
                                    try {
                                        c = l.statusText
                                    } catch (d) {
                                        c = ""
                                    }
                                    a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = f.text ? 200 : 404
                                }
                        } catch (p) {
                            i || o(-1, p)
                        }
                        f && o(a, c, f, u)
                    }, n.async ? 4 === l.readyState ? setTimeout(r) : (s = ++Qn, Kn && (Jn || (Jn = {}, ct(e).unload(Kn)), Jn[s] = r), l.onreadystatechange = r) : r()
                },
                abort: function () {
                    r && r(t, !0)
                }
            }
        }
    });
    var Zn, er, tr = /^(?:toggle|show|hide)$/,
        nr = new RegExp("^(?:([+-])=|)(" + ft + ")([a-z%]*)$", "i"),
        rr = /queueHooks$/,
        ir = [W],
        or = {
            "*": [function (e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = nr.exec(t),
                    o = i && i[3] || (ct.cssNumber[e] ? "" : "px"),
                    s = (ct.cssNumber[e] || "px" !== o && +r) && nr.exec(ct.css(n.elem, e)),
                    a = 1,
                    l = 20;
                if (s && s[3] !== o) {
                    o = o || s[3], i = i || [], s = +r || 1;
                    do a = a || ".5", s /= a, ct.style(n.elem, e, s + o); while (a !== (a = n.cur() / r) && 1 !== a && --l)
                }
                return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    ct.Animation = ct.extend(R, {
        tweener: function (e, t) {
            ct.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++) n = e[r], or[n] = or[n] || [], or[n].unshift(t)
        },
        prefilter: function (e, t) {
            t ? ir.unshift(e) : ir.push(e)
        }
    }), ct.Tween = B, B.prototype = {
        constructor: B,
        init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ct.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var e = B.propHooks[this.prop];
            return e && e.get ? e.get(this) : B.propHooks._default.get(this)
        },
        run: function (e) {
            var t, n = B.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ct.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : B.propHooks._default.set(this), this
        }
    }, B.prototype.init.prototype = B.prototype, B.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ct.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function (e) {
                ct.fx.step[e.prop] ? ct.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ct.cssProps[e.prop]] || ct.cssHooks[e.prop]) ? ct.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, B.propHooks.scrollTop = B.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ct.each(["toggle", "show", "hide"], function (e, t) {
        var n = ct.fn[t];
        ct.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(z(t, !0), e, r, i)
        }
    }), ct.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(C).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (e, t, n, r) {
            var i = ct.isEmptyObject(e),
                o = ct.speed(t, n, r),
                s = function () {
                    var t = R(this, ct.extend({}, e), o);
                    (i || ct._data(this, "finish")) && t.stop(!0)
                };
            return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = ct.timers,
                    s = ct._data(this);
                if (n) s[n] && s[n].stop && i(s[n]);
                else
                    for (n in s) s[n] && s[n].stop && rr.test(n) && i(s[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && ct.dequeue(this, e)
            })
        },
        finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = ct._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = ct.timers,
                    s = r ? r.length : 0;
                for (n.finish = !0, ct.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; s > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), ct.each({
        slideDown: z("show"),
        slideUp: z("hide"),
        slideToggle: z("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        ct.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), ct.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? ct.extend({}, e) : {
            complete: n || !n && t || ct.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !ct.isFunction(t) && t
        };
        return r.duration = ct.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ct.fx.speeds ? ct.fx.speeds[r.duration] : ct.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            ct.isFunction(r.old) && r.old.call(this), r.queue && ct.dequeue(this, r.queue)
        }, r
    }, ct.easing = {
        linear: function (e) {
            return e
        },
        swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, ct.timers = [], ct.fx = B.prototype.init, ct.fx.tick = function () {
        var e, n = ct.timers,
            r = 0;
        for (Zn = ct.now(); r < n.length; r++) e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || ct.fx.stop(), Zn = t
    }, ct.fx.timer = function (e) {
        e() && ct.timers.push(e) && ct.fx.start()
    }, ct.fx.interval = 13, ct.fx.start = function () {
        er || (er = setInterval(ct.fx.tick, ct.fx.interval))
    }, ct.fx.stop = function () {
        clearInterval(er), er = null
    }, ct.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ct.fx.step = {}, ct.expr && ct.expr.filters && (ct.expr.filters.animated = function (e) {
        return ct.grep(ct.timers, function (t) {
            return e === t.elem
        }).length
    }), ct.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
            ct.offset.setOffset(this, e, t)
        });
        var n, r, i = {
                top: 0,
                left: 0
            },
            o = this[0],
            s = o && o.ownerDocument;
        if (s) return n = s.documentElement, ct.contains(n, o) ? (typeof o.getBoundingClientRect !== Y && (i = o.getBoundingClientRect()), r = X(s), {
            top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : i
    }, ct.offset = {
        setOffset: function (e, t, n) {
            var r = ct.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, s = ct(e),
                a = s.offset(),
                l = ct.css(e, "top"),
                u = ct.css(e, "left"),
                c = ("absolute" === r || "fixed" === r) && ct.inArray("auto", [l, u]) > -1,
                f = {},
                d = {};
            c ? (d = s.position(), i = d.top, o = d.left) : (i = parseFloat(l) || 0, o = parseFloat(u) || 0), ct.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (f.top = t.top - a.top + i), null != t.left && (f.left = t.left - a.left + o), "using" in t ? t.using.call(e, f) : s.css(f)
        }
    }, ct.fn.extend({
        position: function () {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === ct.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ct.nodeName(e[0], "html") || (n = e.offset()), n.top += ct.css(e[0], "borderTopWidth", !0), n.left += ct.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - ct.css(r, "marginTop", !0),
                    left: t.left - n.left - ct.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || Q; e && !ct.nodeName(e, "html") && "static" === ct.css(e, "position");) e = e.offsetParent;
                return e || Q
            })
        }
    }), ct.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, n) {
        var r = /Y/.test(n);
        ct.fn[e] = function (i) {
            return ct.access(this, function (e, i, o) {
                var s = X(e);
                return o === t ? s ? n in s ? s[n] : s.document.documentElement[i] : e[i] : (s ? s.scrollTo(r ? ct(s).scrollLeft() : o, r ? o : ct(s).scrollTop()) : e[i] = o, void 0)
            }, e, i, arguments.length, null)
        }
    }), ct.each({
        Height: "height",
        Width: "width"
    }, function (e, n) {
        ct.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function (r, i) {
            ct.fn[i] = function (i, o) {
                var s = arguments.length && (r || "boolean" != typeof i),
                    a = r || (i === !0 || o === !0 ? "margin" : "border");
                return ct.access(this, function (n, r, i) {
                    var o;
                    return ct.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? ct.css(n, r, a) : ct.style(n, r, i, a)
                }, n, s ? i : t, s, null)
            }
        })
    }), ct.fn.size = function () {
        return this.length
    }, ct.fn.andSelf = ct.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ct : (e.jQuery = e.$ = ct, "function" == typeof define && define.amd && define("jquery", [], function () {
        return ct
    }))
}(window),
function () {
    var e = function (e, t) {
        return function () {
            return e.apply(t, arguments)
        }
    };
    this.ScrollWatch = function () {
        function t(t, n, r, i) {
            this.element = t, this.classTarget = n, this.klass = r, this.threshold = i, this.requestTick = e(this.requestTick, this), this.update = e(this.update, this), this.scrollEvent = e(this.scrollEvent, this), this.init = e(this.init, this), this.latestElTop = 0, this.ticking = !1, this.init()
        }
        return t.prototype.init = function () {
            return $("html").hasClass("no-touch") && $("body").hasClass("home-index") ? $(window).on("scroll", this.scrollEvent) : this.element.find(this.classTarget).addClass(this.klass)
        }, t.prototype.scrollEvent = function () {
            return this.element.find(this.classTarget).hasClass(this.klass) ? void 0 : (this.latestElTop = this.element[0].getBoundingClientRect().top, this.requestTick())
        }, t.prototype.update = function () {
            var e, t;
            return this.ticking = !1, t = this.latestElTop, e = t - $(window).height(), e <= -1 * this.threshold && this.element.find(this.classTarget).addClass(this.klass), requestAnimationFrame(this.update)
        }, t.prototype.requestTick = function () {
            return this.ticking || requestAnimationFrame(this.update), this.ticking = !0
        }, t
    }(), this.ParallaxScroll = function () {
        function t(t, n) {
            this.element = t, this.ratio = n, this.update = e(this.update, this), this.requestTick = e(this.requestTick, this), this.scrollEvent = e(this.scrollEvent, this), this.init = e(this.init, this), this.latestScrollTop = document.body.scrollTop, this.yArray = [], this.element.each(function (e) {
                return function (t, n) {
                    return e.yArray.push($(n).position().top)
                }
            }(this)), this.ticking = !1, this.init()
        }
        return t.prototype.init = function () {
            return $("html").hasClass("no-touch") && $("body").hasClass("home-index") ? $(window).on("scroll", this.scrollEvent) : void 0
        }, t.prototype.scrollEvent = function () {
            return this.latestScrollTop = document.body.scrollTop, this.requestTick()
        }, t.prototype.requestTick = function () {
            return this.ticking || requestAnimationFrame(this.update), this.ticking = !0
        }, t.prototype.update = function () {
            var e;
            return this.ticking = !1, e = this.latestScrollTop, this.element.each(function (t) {
                return function (n, r) {
                    var i, o, s;
                    return o = t.yArray[n], s = 50 + (e - o) * t.ratio, i = $(r).children().first(), i.css({
                        "-webkit-transform": "translate3d(-50%,-" + s + "%,0)",
                        "-moz-transform": "translate3d(-50%,-" + s + "%,0)",
                        transform: "translate3d(-50%,-" + s + "%,0)"
                    })
                }
            }(this))
        }, t
    }()
}.call(this),
    function () {
        var e = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        };
        this.IntroAnimation = function () {
            function t() {
                this.$sliderInner = e(this.$sliderInner, this), this.$slider = e(this.$slider, this), this.$folio = e(this.$folio, this), this.$list = e(this.$list, this), this.$screen = e(this.$screen, this), this.hidePortolio = e(this.hidePortolio, this), this.beginReverse = e(this.beginReverse, this), this.startSlider = e(this.startSlider, this), this.showSlider = e(this.showSlider, this), this.showPortfolio = e(this.showPortfolio, this), this.initAnimation = e(this.initAnimation, this), this.init = e(this.init, this), this.transitionEnd = "transitionend webkitTransitionEnd oTransitionEnd otransitionend", this.init(), this.currentSlide = 1, this.sliderInterval = null
            }
            return t.prototype.init = function () {
                return this.initAnimation()
            }, t.prototype.initAnimation = function () {
                var e;
                return e = 3e3, setTimeout(function (e) {
                    return function () {
                        return e.$list().addClass("active").on(e.transitionEnd, function () {
                            return $(e).off(e.transitionEnd), e.showPortfolio()
                        })
                    }
                }(this), e)
            }, t.prototype.showPortfolio = function () {
                var e;
                return e = 1e3, setTimeout(function (e) {
                    return function () {
                        return e.$folio().addClass("active").on(e.transitionEnd, function () {
                            return $(e).off(e.transitionEnd), e.$list().removeClass("active"), 1 === e.currentSlide ? e.showSlider() : void 0
                        })
                    }
                }(this), e)
            }, t.prototype.showSlider = function () {
                var e;
                return e = 1500, setTimeout(function (e) {
                    return function () {
                        return e.$slider().addClass("active").on(e.transitionEnd, function () {
                            return $(e).off(e.transitionEnd), e.$sliderInner().addClass("animated"), clearInterval(e.sliderInterval), e.startSlider()
                        })
                    }
                }(this), e)
            }, t.prototype.startSlider = function () {
                var e;
                return e = 1500, this.sliderInterval = setInterval(function (e) {
                    return function () {
                        return e.currentSlide++, e.currentSlide < 8 ? e.$sliderInner().addClass("slide-" + e.currentSlide) : e.beginReverse()
                    }
                }(this), e)
            }, t.prototype.beginReverse = function () {
                var e;
                return e = 2e3, clearInterval(this.sliderInterval), setTimeout(function (e) {
                    return function () {
                        return e.$slider().removeClass("active").on(e.transitionEnd, function () {
                            return e.$slider().off(e.transitionEnd), e.hidePortolio()
                        })
                    }
                }(this), e)
            }, t.prototype.hidePortolio = function () {
                var e;
                return e = 1e3, setTimeout(function (e) {
                    return function () {
                        return e.$folio().removeClass("active").on(e.transitionEnd, function () {
                            return $(e).off(e.transitionEnd)
                        })
                    }
                }(this), e)
            }, t.prototype.$screen = function () {
                return $(".ipad-intro-left .screen")
            }, t.prototype.$list = function () {
                return $(".screen .portfolio-list")
            }, t.prototype.$folio = function () {
                return $(".screen .portfolio")
            }, t.prototype.$slider = function () {
                return $(".screen .slider")
            }, t.prototype.$sliderInner = function () {
                return $(".screen .slider-inner")
            }, t
        }()
    }.call(this),
    function () {
        var e, t = function (e, t) {
            return function () {
                return e.apply(t, arguments)
            }
        };
        this.KredoMarketing = function () {
            function t() {}
            var n;
            return n = null, t.get = function () {
                return null != n ? n : n = e.createInstance()
            }, t
        }(), e = function () {
            function e() {
                this.deferScreenVisibility = t(this.deferScreenVisibility, this), this.init = t(this.init, this), this.transitionEnd = "transitionend webkitTransitionEnd oTransitionEnd otransitionend"
            }
            return e.createInstance = function () {
                var t;
                return t = new e, t.init(), t
            }, e.prototype.init = function () {
                var e, t, n, r;
                return t = new ScrollWatch($(".discover"), ".ipads", "animated", 610), e = new ScrollWatch($(".customize"), ".ipads", "animated", 610), r = new ScrollWatch($(".share"), ".share-icons", "animated", 810), n = new ParallaxScroll($(".section-divider"), .01), $(window).resize(function () {
                    return n = new ParallaxScroll($(".section-divider"), .01)
                }), this.deferScreenVisibility()
            }, e.prototype.deferScreenVisibility = function () {
                var e, t, n, r;
                return e = $(".ipad-intro-left"), n = e.css("background"), n ? (r = n.replace(/.*\s?url\([\'\"]?/, "").replace(/[\'\"]?\).*/, ""), t = $("<img>").attr("src", r).on("load", function (e) {
                    return function () {
                        return $(".ipad-intro-left, .ipad-intro-right, .screen").addClass("active").on(e.transitionEnd, function () {
                            var t;
                            return $(".ipad-intro-left, .ipad-intro-right, .screen").off(e.transitionEnd), t = new IntroAnimation
                        })
                    }
                }(this))) : void 0
            }, e
        }(), $(document).ready(function () {
            var e;
            return e = KredoMarketing.get()
        })
    }.call(this),
    function (e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : e.viewportUnitsBuggyfill = t()
    }(this, function () {
        "use strict";

        function e(e) {
            m || !e && !b || (m = !0, g = document.createElement("style"), g.id = "patched-viewport", document.head.appendChild(g), u(function () {
                window.addEventListener("orientationchange", n, !0), n()
            }))
        }

        function t() {
            g.textContent = o()
        }

        function n() {
            m && (r(), t())
        }

        function r() {
            return h = [], v.call(document.styleSheets, function (e) {
                "patched-viewport" !== e.ownerNode.id && e.cssRules && (!e.media.mediaText || window.matchMedia(e.media.mediaText).matches) && v.call(e.cssRules, i)
            }), h
        }

        function i(e) {
            if (7 === e.type) {
                var t = e.cssText;
                return y.lastIndex = 0, y.test(t) && h.push([e, null, t]), void 0
            }
            if (!e.style) {
                if (!e.cssRules) return;
                return v.call(e.cssRules, function (e) {
                    i(e)
                }), void 0
            }
            v.call(e.style, function (t) {
                var n = e.style.getPropertyValue(t);
                y.lastIndex = 0, y.test(n) && h.push([e, t, n])
            })
        }

        function o() {
            p = l();
            var e, t, n = [],
                r = [];
            return h.forEach(function (i) {
                var o = s.apply(null, i),
                    a = o.selector.length ? o.selector.join(" {\n") + " {\n" : "",
                    l = new Array(o.selector.length + 1).join("\n}");
                return a && a === e ? (a && !e && (e = a, t = l), r.push(o.content), void 0) : (r.length && (n.push(e + r.join("\n") + t), r.length = 0), a ? (e = a, t = l, r.push(o.content)) : (n.push(o.content), e = null, t = null), void 0)
            }), r.length && n.push(e + r.join("\n") + t), n.join("\n\n")
        }

        function s(e, t, n) {
            var r = n.replace(y, a),
                i = [];
            t && (i.push(e.selectorText), r = t + ": " + r + ";");
            for (var o = e.parentRule; o;) i.unshift("@media " + x.call(o.media, ", ")), o = o.parentRule;
            return {
                selector: i,
                content: r
            }
        }

        function a(e, t, n) {
            var r = p[n],
                i = parseFloat(t) / 100;
            return i * r + "px"
        }

        function l() {
            var e = window.innerHeight,
                t = window.innerWidth;
            return {
                vh: e,
                vw: t,
                vmax: Math.max(t, e),
                vmin: Math.min(t, e)
            }
        }

        function u(e) {
            var t = 0,
                n = function () {
                    t--, t || e()
                };
            v.call(document.styleSheets, function (e) {
                e.href && c(e.href) !== c(location.href) && (t++, f(e.ownerNode, n))
            }), t || e()
        }

        function c(e) {
            return e.slice(0, e.indexOf("/", e.indexOf("://") + 3))
        }

        function f(e, t) {
            d(e.href, function () {
                var n = document.createElement("style");
                n.media = e.media, n.setAttribute("data-href", e.href), n.textContent = this.responseText, e.parentNode.replaceChild(n, e), t()
            }, t)
        }

        function d(e, t, n) {
            var r = new XMLHttpRequest;
            if ("withCredentials" in r) r.open("GET", e, !0);
            else {
                if ("undefined" == typeof XDomainRequest) throw new Error("cross-domain XHR not supported");
                r = new XDomainRequest, r.open("GET", e)
            }
            return r.onload = t, r.onerror = n, r.send(), r
        }
        var p, h, g, m = !1,
            y = /([0-9.-]+)(vh|vw|vmin|vmax)/g,
            v = [].forEach,
            x = [].join,
            b = /(iPhone|iPod|iPad).+AppleWebKit/i.test(window.navigator.userAgent);
        return {
            version: "0.3.1",
            findProperties: r,
            getCss: o,
            init: e,
            refresh: n
        }
    }),
    function (e, t) {
        var n = function (e, t, n) {
            var r;
            return function () {
                function i() {
                    n || e.apply(o, s), r = null
                }
                var o = this,
                    s = arguments;
                r ? clearTimeout(r) : n && e.apply(o, s), r = setTimeout(i, t || 100)
            }
        };
        jQuery.fn[t] = function (e) {
            return e ? this.bind("resize", n(e)) : this.trigger(t)
        }
    }(jQuery, "smartresize"),
    function (e) {
        e.fn.fluidbox = function (t) {
            var n = e.extend(!0, {
                viewportFill: .95,
                debounceResize: !0,
                stackIndex: 1e3,
                stackIndexDelta: 10,
                closeTrigger: [{
                    selector: ".fluidbox-overlay",
                    event: "click"
                }, {
                    selector: "document",
                    event: "keyup",
                    keyCode: 27
                }]
            }, t);
            n.stackIndex < n.stackIndexDelta && (n.stackIndexDelta = n.stackIndex), $fbOverlay = e("<div />", {
                "class": "fluidbox-overlay",
                css: {
                    "z-index": n.stackIndex
                }
            });
            var r, i = this,
                o = e(window),
                s = function () {
                    e(".fluidbox-opened").trigger("click")
                },
                a = function (e) {
                    var t = e.find("img"),
                        i = e.find(".fluidbox-ghost"),
                        s = e.find(".fluidbox-wrap"),
                        a = e.data(),
                        l = 0,
                        u = 0;
                    r > t.data().imgRatio ? (l = a.natHeight < o.height() * n.viewportFill ? a.natHeight : o.height() * n.viewportFill, a.imgScale = l / t.height()) : (u = a.natWidth < o.width() * n.viewportFill ? a.natWidth : o.width() * n.viewportFill, a.imgScale = u / t.width());
                    var c = o.scrollTop() - t.offset().top + .5 * t.data("imgHeight") * (t.data("imgScale") - 1) + .5 * (o.height() - t.data("imgHeight") * t.data("imgScale")),
                        f = .5 * t.data("imgWidth") * (t.data("imgScale") - 1) + .5 * (o.width() - t.data("imgWidth") * t.data("imgScale")) - t.offset().left,
                        d = a.imgScale;
                    i.css({
                        transform: "translate(" + parseInt(10 * f) / 10 + "px," + parseInt(10 * c) / 10 + "px) scale(" + parseInt(1e3 * d) / 1e3 + ")",
                        top: t.offset().top - s.offset().top,
                        left: t.offset().left - s.offset().left
                    })
                },
                l = function () {
                    i.each(function () {
                        u(e(this))
                    })
                },
                u = function (e) {
                    function t() {
                        l.imgWidth = i.width(), l.imgHeight = i.height(), l.imgRatio = i.width() / i.height(), s.css({
                            width: i.width(),
                            height: i.height(),
                            top: i.offset().top - a.offset().top + parseInt(i.css("borderTopWidth")) + parseInt(i.css("paddingTop")),
                            left: i.offset().left - a.offset().left + parseInt(i.css("borderLeftWidth")) + parseInt(i.css("paddingLeft"))
                        }), l.imgScale = r > l.imgRatio ? o.height() * n.viewportFill / i.height() : o.width() * n.viewportFill / i.width()
                    }
                    if (r = o.width() / o.height(), e.hasClass("fluidbox")) {
                        var i = e.find("img"),
                            s = e.find(".fluidbox-ghost"),
                            a = e.find(".fluidbox-wrap"),
                            l = i.data();
                        t(), i.load(t)
                    }
                },
                c = function (t) {
                    if (e(this).hasClass("fluidbox")) {
                        var r = e(this),
                            i = e(this).find("img"),
                            o = e(this).find(".fluidbox-ghost"),
                            s = e(this).find(".fluidbox-wrap"),
                            l = {};
                        0 !== e(this).data("fluidbox-state") && e(this).data("fluidbox-state") ? (r.data("fluidbox-state", 0).removeClass("fluidbox-opened").addClass("fluidbox-closed"), l.open && window.clearTimeout(l.open), l.close = window.setTimeout(function () {
                            e(".fluidbox-overlay").remove(), s.css({
                                "z-index": n.stackIndex - n.stackIndexDelta
                            })
                        }, 10), e(".fluidbox-overlay").css({
                            opacity: 0
                        }), o.css({
                            transform: "translate(0,0) scale(1)",
                            opacity: 0,
                            top: i.offset().top - s.offset().top + parseInt(i.css("borderTopWidth")) + parseInt(i.css("paddingTop")),
                            left: i.offset().left - s.offset().left + parseInt(i.css("borderLeftWidth")) + parseInt(i.css("paddingLeft"))
                        }), i.css({
                            opacity: 1
                        })) : e("<img />", {
                            src: i.attr("src")
                        }).load(function () {
                            e("<img />", {
                                src: r.attr("href")
                            }).load(function () {
                                r.data("natWidth", e(this)[0].naturalWidth).data("natHeight", e(this)[0].naturalHeight), r.append($fbOverlay).data("fluidbox-state", 1).removeClass("fluidbox-closed").addClass("fluidbox-opened"), l.close && window.clearTimeout(l.close), l.open = window.setTimeout(function () {
                                    e(".fluidbox-overlay").css({
                                        opacity: 1
                                    })
                                }, 10), e(".fluidbox-wrap").css({
                                    zIndex: n.stackIndex - n.stackIndexDelta - 1
                                }), s.css({
                                    "z-index": n.stackIndex + n.stackIndexDelta
                                }), o.css({
                                    "background-image": "url(" + i.attr("src") + ")",
                                    opacity: 1
                                }), i.css({
                                    opacity: 0
                                }), o.css({
                                    "background-image": "url(" + r.attr("href") + ")"
                                }), a(r)
                            })
                        }), t.preventDefault()
                    }
                };
            n.closeTrigger && e.each(n.closeTrigger, function (t) {
                var r = n.closeTrigger[t];
                "window" != r.selector ? "document" == r.selector ? r.keyCode ? e(document).on(r.event, function (e) {
                    e.keyCode == r.keyCode && s()
                }) : e(document).on(r.event, s) : e(document).on(r.event, n.closeTrigger[t].selector, s) : o.on(r.event, s)
            }), i.each(function () {
                if (e(this).is("a") && 1 === e(this).children().length && e(this).children().is("img") && "none" !== e(this).css("display") && "none" !== e(this).parents().css("display")) {
                    var t = e("<div />", {
                            "class": "fluidbox-wrap",
                            css: {
                                "z-index": n.stackIndex - n.stackIndexDelta
                            }
                        }),
                        r = e(this);
                    r.addClass("fluidbox").wrapInner(t).find("img").css({
                        opacity: 1
                    }).after('<div class="fluidbox-ghost" />').each(function () {
                        var t = e(this);
                        t.width() > 0 && t.height() > 0 ? (u(r), r.click(c)) : t.load(function () {
                            u(r), r.click(c)
                        })
                    })
                }
            });
            var f = function () {
                l();
                var t = e("a.fluidbox.fluidbox-opened");
                t.length > 0 && a(t)
            };
            return n.debounceResize ? e(window).smartresize(f) : e(window).resize(f), i
        }
    }(jQuery),
    function () {
        $(function () {
            return $(document).ready(function () {
                return window.viewportUnitsBuggyfill.init(), $('.article-content a[rel="lightbox"]').fluidbox()
            })
        })
    }.call(this),
    function () {}.call(this);