!function (e) {
    function r(r) {
        for (var n, p, c = r[0], i = r[1], u = r[2], s = 0, l = []; s < c.length; s++) p = c[s], Object.prototype.hasOwnProperty.call(o, p) && o[p] && l.push(o[p][0]), o[p] = 0;
        for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        for (f && f(r); l.length;) l.shift()();
        return a.push.apply(a, u || []), t()
    }

    function t() {
        for (var e, r = 0; r < a.length; r++) {
            for (var t = a[r], n = !0, c = 1; c < t.length; c++) {
                var i = t[c];
                0 !== o[i] && (n = !1)
            }
            n && (a.splice(r--, 1), e = p(p.s = t[0]))
        }
        return e
    }

    var n = {}, o = {runtime: 0}, a = [];

    function p(r) {
        if (n[r]) return n[r].exports;
        var t = n[r] = {i: r, l: !1, exports: {}};
        return e[r].call(t.exports, t, t.exports, p), t.l = !0, t.exports
    }

    p.e = function (e) {
        var r = [], t = o[e];
        if (0 !== t) if (t) r.push(t[2]); else {
            var n = new Promise((function (r, n) {
                t = o[e] = [r, n]
            }));
            r.push(t[2] = n);
            var a, c = document.createElement("script");
            c.charset = "utf-8", c.timeout = 120, p.nc && c.setAttribute("nonce", p.nc), c.src = function (e) {
                return p.p + "latest/" + ({
                    "vendors~manifests/economic-impact~map-app/MapApp": "vendors~manifests/economic-impact~map-app/MapApp",
                    "map-app/MapApp": "map-app/MapApp"
                }[e] || e) + "-" + {
                    "vendors~manifests/economic-impact~map-app/MapApp": "adf275e9def5a0e2b6bdede30d39f5a0a113d10092236cdeb10e7160b132c015",
                    "map-app/MapApp": "ef742bab4771905c6fb95d81fb8300e3f4302f113bad12dfa11339084bb63e15"
                }[e] + ".js"
            }(e);
            var i = new Error;
            a = function (r) {
                c.onerror = c.onload = null, clearTimeout(u);
                var t = o[e];
                if (0 !== t) {
                    if (t) {
                        var n = r && ("load" === r.type ? "missing" : r.type), a = r && r.target && r.target.src;
                        i.message = "Loading chunk " + e + " failed.\n(" + n + ": " + a + ")", i.name = "ChunkLoadError", i.type = n, i.request = a, t[1](i)
                    }
                    o[e] = void 0
                }
            };
            var u = setTimeout((function () {
                a({type: "timeout", target: c})
            }), 12e4);
            c.onerror = c.onload = a, document.head.appendChild(c)
        }
        return Promise.all(r)
    }, p.m = e, p.c = n, p.d = function (e, r, t) {
        p.o(e, r) || Object.defineProperty(e, r, {enumerable: !0, get: t})
    }, p.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, p.t = function (e, r) {
        if (1 & r && (e = p(e)), 8 & r) return e;
        if (4 & r && "object" == typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (p.r(t), Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        }), 2 & r && "string" != typeof e) for (var n in e) p.d(t, n, function (r) {
            return e[r]
        }.bind(null, n));
        return t
    }, p.n = function (e) {
        var r = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return p.d(r, "a", r), r
    }, p.o = function (e, r) {
        return Object.prototype.hasOwnProperty.call(e, r)
    }, p.p = "https://cdn.shopify.com/shopifycloud/brochure/bundles/", p.oe = function (e) {
        throw console.error(e), e
    };
    var c = self.webpackJsonp = self.webpackJsonp || [], i = c.push.bind(c);
    c.push = r, c = c.slice();
    for (var u = 0; u < c.length; u++) r(c[u]);
    var f = i;
    t()
}([]);