!function () {
    var e = {
        344: function () {
            !function (e) {
                var t = "currentScript"
                    , n = e.getElementsByTagName("script");
                t in e || Object.defineProperty(e, t, {
                    get: function () {
                        try {
                            throw new Error
                        } catch (r) {
                            var e, t = (/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(r.stack) || [!1])[1];
                            for (e in n)
                                if (n[e].src == t || "interactive" == n[e].readyState)
                                    return n[e];
                            return null
                        }
                    }
                })
            }(document)
        },
        264: function (e, t, n) {
            !function (e) {
                var t = function () {
                    try {
                        return !!Symbol.iterator
                    } catch (e) {
                        return !1
                    }
                }()
                    , n = function (e) {
                        var n = {
                            next: function () {
                                var t = e.shift();
                                return {
                                    done: void 0 === t,
                                    value: t
                                }
                            }
                        };
                        return t && (n[Symbol.iterator] = function () {
                            return n
                        }
                        ),
                            n
                    }
                    , r = function (e) {
                        return encodeURIComponent(e).replace(/%20/g, "+")
                    }
                    , i = function (e) {
                        return decodeURIComponent(String(e).replace(/\+/g, " "))
                    };
                (function () {
                    try {
                        var t = e.URLSearchParams;
                        return "a=1" === new t("?a=1").toString() && "function" == typeof t.prototype.set && "function" == typeof t.prototype.entries
                    } catch (e) {
                        return !1
                    }
                }
                )() || function () {
                    var i = function (e) {
                        Object.defineProperty(this, "_entries", {
                            writable: !0,
                            value: {}
                        });
                        var t = typeof e;
                        if ("undefined" === t)
                            ;
                        else if ("string" === t)
                            "" !== e && this._fromString(e);
                        else if (e instanceof i) {
                            var n = this;
                            e.forEach((function (e, t) {
                                n.append(t, e)
                            }
                            ))
                        } else {
                            if (null === e || "object" !== t)
                                throw new TypeError("Unsupported input's type for URLSearchParams");
                            if ("[object Array]" === Object.prototype.toString.call(e))
                                for (var r = 0; r < e.length; r++) {
                                    var o = e[r];
                                    if ("[object Array]" !== Object.prototype.toString.call(o) && 2 === o.length)
                                        throw new TypeError("Expected [string, any] as entry at index " + r + " of URLSearchParams's input");
                                    this.append(o[0], o[1])
                                }
                            else
                                for (var a in e)
                                    e.hasOwnProperty(a) && this.append(a, e[a])
                        }
                    }
                        , o = i.prototype;
                    o.append = function (e, t) {
                        e in this._entries ? this._entries[e].push(String(t)) : this._entries[e] = [String(t)]
                    }
                        ,
                        o.delete = function (e) {
                            delete this._entries[e]
                        }
                        ,
                        o.get = function (e) {
                            return e in this._entries ? this._entries[e][0] : null
                        }
                        ,
                        o.getAll = function (e) {
                            return e in this._entries ? this._entries[e].slice(0) : []
                        }
                        ,
                        o.has = function (e) {
                            return e in this._entries
                        }
                        ,
                        o.set = function (e, t) {
                            this._entries[e] = [String(t)]
                        }
                        ,
                        o.forEach = function (e, t) {
                            var n;
                            for (var r in this._entries)
                                if (this._entries.hasOwnProperty(r)) {
                                    n = this._entries[r];
                                    for (var i = 0; i < n.length; i++)
                                        e.call(t, n[i], r, this)
                                }
                        }
                        ,
                        o.keys = function () {
                            var e = [];
                            return this.forEach((function (t, n) {
                                e.push(n)
                            }
                            )),
                                n(e)
                        }
                        ,
                        o.values = function () {
                            var e = [];
                            return this.forEach((function (t) {
                                e.push(t)
                            }
                            )),
                                n(e)
                        }
                        ,
                        o.entries = function () {
                            var e = [];
                            return this.forEach((function (t, n) {
                                e.push([n, t])
                            }
                            )),
                                n(e)
                        }
                        ,
                        t && (o[Symbol.iterator] = o.entries),
                        o.toString = function () {
                            var e = [];
                            return this.forEach((function (t, n) {
                                e.push(r(n) + "=" + r(t))
                            }
                            )),
                                e.join("&")
                        }
                        ,
                        e.URLSearchParams = i
                }();
                var o = e.URLSearchParams.prototype;
                "function" != typeof o.sort && (o.sort = function () {
                    var e = this
                        , t = [];
                    this.forEach((function (n, r) {
                        t.push([r, n]),
                            e._entries || e.delete(r)
                    }
                    )),
                        t.sort((function (e, t) {
                            return e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : 0
                        }
                        )),
                        e._entries && (e._entries = {});
                    for (var n = 0; n < t.length; n++)
                        this.append(t[n][0], t[n][1])
                }
                ),
                    "function" != typeof o._fromString && Object.defineProperty(o, "_fromString", {
                        enumerable: !1,
                        configurable: !1,
                        writable: !1,
                        value: function (e) {
                            if (this._entries)
                                this._entries = {};
                            else {
                                var t = [];
                                this.forEach((function (e, n) {
                                    t.push(n)
                                }
                                ));
                                for (var n = 0; n < t.length; n++)
                                    this.delete(t[n])
                            }
                            var r, o = (e = e.replace(/^\?/, "")).split("&");
                            for (n = 0; n < o.length; n++)
                                r = o[n].split("="),
                                    this.append(i(r[0]), r.length > 1 ? i(r[1]) : "")
                        }
                    })
            }(void 0 !== n.g ? n.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : this),
                function (e) {
                    if (function () {
                        try {
                            var t = new e.URL("b", "http://a");
                            return t.pathname = "c d",
                                "http://a/c%20d" === t.href && t.searchParams
                        } catch (e) {
                            return !1
                        }
                    }() || function () {
                        var t = e.URL
                            , n = function (t, n) {
                                "string" != typeof t && (t = String(t)),
                                    n && "string" != typeof n && (n = String(n));
                                var r, i = document;
                                if (n && (void 0 === e.location || n !== e.location.href)) {
                                    n = n.toLowerCase(),
                                        (r = (i = document.implementation.createHTMLDocument("")).createElement("base")).href = n,
                                        i.head.appendChild(r);
                                    try {
                                        if (0 !== r.href.indexOf(n))
                                            throw new Error(r.href)
                                    } catch (e) {
                                        throw new Error("URL unable to set base " + n + " due to " + e)
                                    }
                                }
                                var o = i.createElement("a");
                                o.href = t,
                                    r && (i.body.appendChild(o),
                                        o.href = o.href);
                                var a = i.createElement("input");
                                if (a.type = "url",
                                    a.value = t,
                                    ":" === o.protocol || !/:/.test(o.href) || !a.checkValidity() && !n)
                                    throw new TypeError("Invalid URL");
                                Object.defineProperty(this, "_anchorElement", {
                                    value: o
                                });
                                var c = new e.URLSearchParams(this.search)
                                    , u = !0
                                    , s = !0
                                    , p = this;
                                ["append", "delete", "set"].forEach((function (e) {
                                    var t = c[e];
                                    c[e] = function () {
                                        t.apply(c, arguments),
                                            u && (s = !1,
                                                p.search = c.toString(),
                                                s = !0)
                                    }
                                }
                                )),
                                    Object.defineProperty(this, "searchParams", {
                                        value: c,
                                        enumerable: !0
                                    });
                                var d = void 0;
                                Object.defineProperty(this, "_updateSearchParams", {
                                    enumerable: !1,
                                    configurable: !1,
                                    writable: !1,
                                    value: function () {
                                        this.search !== d && (d = this.search,
                                            s && (u = !1,
                                                this.searchParams._fromString(this.search),
                                                u = !0))
                                    }
                                })
                            }
                            , r = n.prototype;
                        ["hash", "host", "hostname", "port", "protocol"].forEach((function (e) {
                            !function (e) {
                                Object.defineProperty(r, e, {
                                    get: function () {
                                        return this._anchorElement[e]
                                    },
                                    set: function (t) {
                                        this._anchorElement[e] = t
                                    },
                                    enumerable: !0
                                })
                            }(e)
                        }
                        )),
                            Object.defineProperty(r, "search", {
                                get: function () {
                                    return this._anchorElement.search
                                },
                                set: function (e) {
                                    this._anchorElement.search = e,
                                        this._updateSearchParams()
                                },
                                enumerable: !0
                            }),
                            Object.defineProperties(r, {
                                toString: {
                                    get: function () {
                                        var e = this;
                                        return function () {
                                            return e.href
                                        }
                                    }
                                },
                                href: {
                                    get: function () {
                                        return this._anchorElement.href.replace(/\?$/, "")
                                    },
                                    set: function (e) {
                                        this._anchorElement.href = e,
                                            this._updateSearchParams()
                                    },
                                    enumerable: !0
                                },
                                pathname: {
                                    get: function () {
                                        return this._anchorElement.pathname.replace(/(^\/?)/, "/")
                                    },
                                    set: function (e) {
                                        this._anchorElement.pathname = e
                                    },
                                    enumerable: !0
                                },
                                origin: {
                                    get: function () {
                                        var e = {
                                            "http:": 80,
                                            "https:": 443,
                                            "ftp:": 21
                                        }[this._anchorElement.protocol]
                                            , t = this._anchorElement.port != e && "" !== this._anchorElement.port;
                                        return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (t ? ":" + this._anchorElement.port : "")
                                    },
                                    enumerable: !0
                                },
                                password: {
                                    get: function () {
                                        return ""
                                    },
                                    set: function (e) { },
                                    enumerable: !0
                                },
                                username: {
                                    get: function () {
                                        return ""
                                    },
                                    set: function (e) { },
                                    enumerable: !0
                                }
                            }),
                            n.createObjectURL = function (e) {
                                return t.createObjectURL.apply(t, arguments)
                            }
                            ,
                            n.revokeObjectURL = function (e) {
                                return t.revokeObjectURL.apply(t, arguments)
                            }
                            ,
                            e.URL = n
                    }(),
                        void 0 !== e.location && !("origin" in e.location)) {
                        var t = function () {
                            return e.location.protocol + "//" + e.location.hostname + (e.location.port ? ":" + e.location.port : "")
                        };
                        try {
                            Object.defineProperty(e.location, "origin", {
                                get: t,
                                enumerable: !0
                            })
                        } catch (n) {
                            setInterval((function () {
                                e.location.origin = t()
                            }
                            ), 100)
                        }
                    }
                }(void 0 !== n.g ? n.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : this)
        }
    }
        , t = {};
    function n(r) {
        var i = t[r];
        if (void 0 !== i)
            return i.exports;
        var o = t[r] = {
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n),
            o.exports
    }
    n.g = function () {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
        function () {
            "use strict";
            n(344),
                n(264);
            var e, t = function (e, t, n) {
                var r = {
                    value: t,
                    expiry: (new Date).getTime() + 60 * n * 1e3
                };
                localStorage.setItem(e, JSON.stringify(r))
            }, r = function (e) {
                var t = localStorage.getItem(e);
                if (!t)
                    return null;
                try {
                    var n = JSON.parse(t);
                    return (new Date).getTime() > n.expiry ? (localStorage.removeItem(e),
                        null) : n.value
                } catch (e) { }
                return null
            }, i = new Uint8Array(16);
            function o() {
                if (!e && !(e = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
                    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                return e(i)
            }
            for (var a = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, c = function (e) {
                return "string" == typeof e && a.test(e)
            }, u = [], s = 0; s < 256; ++s)
                u.push((s + 256).toString(16).substr(1));
            var p, d = function (e, t, n) {
                var r = (e = e || {}).random || (e.rng || o)();
                if (r[6] = 15 & r[6] | 64,
                    r[8] = 63 & r[8] | 128,
                    t) {
                    n = n || 0;
                    for (var i = 0; i < 16; ++i)
                        t[n + i] = r[i];
                    return t
                }
                return function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                        , n = (u[e[t + 0]] + u[e[t + 1]] + u[e[t + 2]] + u[e[t + 3]] + "-" + u[e[t + 4]] + u[e[t + 5]] + "-" + u[e[t + 6]] + u[e[t + 7]] + "-" + u[e[t + 8]] + u[e[t + 9]] + "-" + u[e[t + 10]] + u[e[t + 11]] + u[e[t + 12]] + u[e[t + 13]] + u[e[t + 14]] + u[e[t + 15]]).toLowerCase();
                    if (!c(n))
                        throw TypeError("Stringified UUID is invalid");
                    return n
                }(r)
            }, l = function () {
                return l = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                    ,
                    l.apply(this, arguments)
            }, f = "hrvBeacon_a", v = 525600;
            function h() {
                return d()
            }
            function m(e) {
                var n, r = g(), i = null == r ? void 0 : r.properties;
                if (e && "function" == typeof e)
                    try {
                        n = e(i)
                    } catch (e) { }
                else
                    n = l(l({}, i), e);
                r.properties = n,
                    t(f, p = r, v)
            }
            function g() {
                return p || ((p = r(f)) && p.id || (p = {
                    id: h()
                }),
                    t(f, p, v),
                    p)
            }
            var y, _ = "hrvBeacon_s";
            function b(e) {
                var n = w();
                if (n) {
                    n.events || (n.events = []);
                    var r = n.events.find((function (t) {
                        return t.event == e
                    }
                    ));
                    r || (n.events.push({
                        event: e,
                        state: y.track
                    }),
                        t(_, n, 30))
                }
            }
            function w() {
                var e, n, i = r(_), o = !1;
                if (e = null == i ? void 0 : i.campaign,
                    !(n = k()) || (null == e ? void 0 : e.utm_source) === (null == n ? void 0 : n.utm_source) && (null == e ? void 0 : e.utm_medium) === (null == n ? void 0 : n.utm_medium) && (null == e ? void 0 : e.utm_campaign) === (null == n ? void 0 : n.utm_campaign) && (null == e ? void 0 : e.utm_term) === (null == n ? void 0 : n.utm_term) && (null == e ? void 0 : e.utm_content) === (null == n ? void 0 : n.utm_content) || (o = !0),
                    (!i || o) && (i = {
                        sessionId: h(),
                        campaign: k()
                    },
                        o = !0),
                    o) {
                    var a = {
                        event: "startSession",
                        state: y.track
                    };
                    i.events ? i.events.push(a) : i.events = [a]
                }
                return t(_, i, 30),
                    i
            }
            function k() {
                var e = new URLSearchParams(window.location.search)
                    , t = e.get("utm_source")
                    , n = e.get("utm_medium")
                    , r = e.get("utm_campaign")
                    , i = e.get("utm_term")
                    , o = e.get("utm_content");
                if (t || n || r || i || o)
                    return {
                        utm_source: t,
                        utm_medium: n,
                        utm_campaign: r,
                        utm_term: i,
                        utm_content: o
                    }
            }
            function E(e, t) {
                if (e.AutoTrack && e.ga4) {
                    var n = window.gtag;
                    if (n || e.enhancedEcommercev4) {
                        var r = function (e, t) {
                            i(e),
                                function (e, t) {
                                    var r;
                                    void 0 === t && (t = "add_to_cart");
                                    var i = e.properties;
                                    e.coupon && (i.coupon = e.coupon),
                                        n("event", t, {
                                            currency: (null == i ? void 0 : i.currency) || "",
                                            coupon: (null == i ? void 0 : i.coupon) || 0,
                                            items: [{
                                                item_id: (null == i ? void 0 : i.sku) || (null === (r = null == i ? void 0 : i.variantId) || void 0 === r ? void 0 : r.toString()) || (null == i ? void 0 : i.id.toString()) || "",
                                                item_name: (null == i ? void 0 : i.name) || (null == i ? void 0 : i.title) || "",
                                                affiliation: "",
                                                coupon: "",
                                                item_variant: (null == i ? void 0 : i.variant) || "",
                                                location_id: "",
                                                price: (null == i ? void 0 : i.price) || 0,
                                                quantity: (null == i ? void 0 : i.quantity) || 0,
                                                currency: (null == i ? void 0 : i.currency) || 0
                                            }]
                                        })
                                }(e, t),
                                a(e)
                        };
                        "product" == t.pageType ? function (e) {
                            r(e, "view_item")
                        }(t) : "ajaxCart" == t.pageType ? function (e) {
                            r(e)
                        }(t) : "ajaxUpdateCart" == t.pageType ? function (e) {
                            r(e, "remove_from_cart")
                        }(t) : "checkout" == t.pageType ? t.properties.cartToken ? o(t) : function (e) {
                            var t, r = e.products, o = e.properties;
                            i(e);
                            for (var c = [], u = 0; u < r.length; u++) {
                                var s = r[u]
                                    , p = (null == s ? void 0 : s.price) || 0;
                                c.push({
                                    index: u,
                                    item_id: (null == s ? void 0 : s.sku) || (null === (t = null == s ? void 0 : s.variantId) || void 0 === t ? void 0 : t.toString()) || (null == s ? void 0 : s.id.toString()) || "",
                                    item_name: (null == s ? void 0 : s.name) || "",
                                    affiliation: "",
                                    coupon: "",
                                    item_variant: (null == s ? void 0 : s.variant) || "",
                                    location_id: "",
                                    price: p,
                                    quantity: (null == s ? void 0 : s.quantity) || 0,
                                    currency: (null == s ? void 0 : s.currency) || ""
                                })
                            }
                            n("event", "begin_checkout", {
                                currency: (null == o ? void 0 : o.currency) || "",
                                value: (null == o ? void 0 : o.total_price) || 0,
                                coupon: (null == o ? void 0 : o.coupon) || "",
                                items: c
                            }),
                                a(e)
                        }(t) : "thankyou" == t.pageType && (t.properties.cartToken ? o(t) : function (e) {
                            var t, r, o, c, u, s, p, d, l, f = e.properties, v = null === (t = null == f ? void 0 : f.orderId) || void 0 === t ? void 0 : t.toString(), h = (null == e ? void 0 : e.products) || [];
                            if (v) {
                                i(e);
                                for (var m = [], g = 0; g < h.length; g++) {
                                    var y = (null === (r = h[g]) || void 0 === r ? void 0 : r.price) || 0
                                        , _ = {
                                            item_id: (null === (o = h[g]) || void 0 === o ? void 0 : o.sku) || (null === (u = null === (c = h[g]) || void 0 === c ? void 0 : c.variantId) || void 0 === u ? void 0 : u.toString()) || (null === (s = h[g]) || void 0 === s ? void 0 : s.id.toString()) || "",
                                            item_name: null === (p = h[g]) || void 0 === p ? void 0 : p.name,
                                            affiliation: "",
                                            coupon: "",
                                            index: g,
                                            item_variant: (null === (d = h[g]) || void 0 === d ? void 0 : d.variant) || "",
                                            price: y,
                                            quantity: (null === (l = h[g]) || void 0 === l ? void 0 : l.quantity) || 0
                                        };
                                    m.push(_)
                                }
                                n("event", "purchase", {
                                    value: (null == f ? void 0 : f.total_price) || 0,
                                    currency: (null == f ? void 0 : f.currency) || "",
                                    transaction_id: v,
                                    tax: "",
                                    shipping: null == f ? void 0 : f.shipping,
                                    coupon: (null == f ? void 0 : f.coupon) || "",
                                    items: m
                                }),
                                    a(e)
                            }
                        }(t))
                    }
                }
                function i(e) {
                    e.options_GA.enhancedEcommerceLoaded || n("set", "ec"),
                        n("set", "&cu", e.properties.currency)
                }
                function o(e) {
                    var t = e.properties
                        , r = {
                            eventAction: t.event,
                            eventCategory: t.category || "All",
                            eventLabel: t.label,
                            eventValue: t.total_price.toString(),
                            nonInteraction: !0
                        };
                    n("event", "send", r)
                }
                function a(e) {
                    var t = e.properties;
                    n("event", "send", {
                        eventCategory: t.category || "EnhancedEcommerce",
                        eventAction: t.event,
                        eventLabel: t.label,
                        nonInteraction: !0
                    })
                }
            }
            function S(e, t) {
                if (e.AutoTrack && e.ga) {
                    var n = window.ga;
                    (n || e.enhancedEcommerce) && ("product" == t.pageType ? function (e) {
                        var t = e.properties;
                        r(e),
                            c(t, "detail"),
                            a(e)
                    }(t) : "ajaxCart" == t.pageType ? function (e) {
                        var t = e.properties;
                        r(e),
                            c(t, "add"),
                            a(e)
                    }(t) : "ajaxUpdateCart" == t.pageType ? function (e) {
                        var t = e.properties;
                        r(e),
                            c(t, "remove"),
                            a(e)
                    }(t) : "checkout" == t.pageType ? t.properties.cartToken ? i(t) : function (e) {
                        var t = e.products;
                        r(e);
                        for (var i = 0; i < e.products.length; i++)
                            o(t[i]);
                        n("ec:setAction", "checkout", {
                            step: 1
                        }),
                            a(e)
                    }(t) : "thankyou" == t.pageType && (t.properties.cartToken ? i(t) : function (e) {
                        var t = e.properties
                            , i = t.total_price.toString() || t.subtotal_price.toString() || ""
                            , c = t.orderId.toString()
                            , u = e.products || [];
                        if (c) {
                            r(e);
                            for (var s = 0; s < u.length; s++)
                                o(u[s]);
                            n("ec:setAction", "purchase", {
                                id: c,
                                affiliation: void 0,
                                revenue: i,
                                tax: "",
                                shipping: t.shipping.toString(),
                                coupon: t.coupon
                            }),
                                a(e)
                        }
                    }(t)))
                }
                function r(e) {
                    var t = e.options_GA;
                    t.enhancedEcommerceLoaded || (n("require", "ec"),
                        t.enhancedEcommerceLoaded = !0),
                        n("set", "&cu", e.properties.currency)
                }
                function i(e) {
                    var t = e.properties
                        , r = {
                            eventAction: t.event,
                            eventCategory: t.category || "All",
                            eventLabel: t.label,
                            eventValue: t.total_price.toString(),
                            nonInteraction: !0
                        };
                    n("send", "event", r)
                }
                function o(e) {
                    var t = {
                        id: e.sku || e.variantId.toString() || e.id.toString(),
                        name: e.name,
                        category: "",
                        quantity: e.quantity,
                        price: e.price.toString(),
                        vendor: e.vendor,
                        variant: e.variant,
                        currency: e.currency
                    };
                    e.coupon && (t.coupon = e.coupon),
                        n("ec:addProduct", t)
                }
                function a(e) {
                    var t = e.properties;
                    n("send", "event", {
                        eventCategory: t.category || "EnhancedEcommerce",
                        eventAction: t.event,
                        eventLabel: t.label,
                        nonInteraction: !0
                    })
                }
                function c(e, t) {
                    o(e),
                        n("ec:setAction", t)
                }
            }
            function T(e, t) {
                if (e.AutoTrack && e.fb) {
                    var n = window.fbq;
                    n && t && n("track", "AddToCart", {
                        content_ids: [t.properties.id],
                        content_name: t.properties.name,
                        content_type: "product_group",
                        value: t.properties.price,
                        num_items: t.properties.quantity,
                        currency: t.properties.currency
                    })
                }
            }
            function I(e, t, n) {
                e.addEventListener ? e.addEventListener(t, n) : e.attachEvent && e.attachEvent("on" + t, n)
            }
            !function (e) {
                e[e.track = 0] = "track",
                    e[e.sent = 1] = "sent"
            }(y || (y = {}));
            var A, L = window, C = L.HaravanAnalytics, P = {
                pageType: "",
                products: [],
                properties: {
                    arrProductId: "",
                    id: "",
                    variantId: "",
                    name: "",
                    variant: "",
                    category: "",
                    quantity: 1,
                    price: 0,
                    sku: "",
                    vendor: "",
                    type: "",
                    keySearch: "",
                    coupon: "",
                    orderId: "",
                    shipping: 0,
                    subtotal_price: 0,
                    total_price: 0,
                    cartToken: !1,
                    event: "Action not defined!",
                    currency: null === (A = null == C ? void 0 : C.meta) || void 0 === A ? void 0 : A.currency
                },
                carts: {
                    attributes: {},
                    customer_id: null,
                    items: null,
                    item_count: 0,
                    location_id: 0,
                    note: "",
                    requires_shipping: !1,
                    total_price: 0,
                    total_weight: 0
                },
                options_GA: {
                    anonymizeIp: !1,
                    doubleClick: !0,
                    enhancedEcommerceLoaded: !1,
                    enhancedEcommerce: (null == C ? void 0 : C.enhancedEcommerce) || !1,
                    enhancedEcommercev4: (null == C ? void 0 : C.enhancedEcommercev4) || !1,
                    enhancedLinkAttribution: !1,
                    includeSearch: !0,
                    nonInteraction: !1
                }
            };
            function O(e) {
                C && function (e) {
                    var n, i, o, a, c, u = null === (n = C.meta.page) || void 0 === n ? void 0 : n.pageType;
                    if (u) {
                        if (P.pageType = u,
                            "thankyou" == P.pageType)
                            e.userId = null === (o = null === (i = L.Haravan) || void 0 === i ? void 0 : i.checkout) || void 0 === o ? void 0 : o.customer_id;
                        else {
                            var s = null === (c = null === (a = C.meta) || void 0 === a ? void 0 : a.page) || void 0 === c ? void 0 : c.customerId;
                            e.userId = s
                        }
                        var p = new URLSearchParams(window.location.search).get("ref_f4l");
                        switch (p && m({
                            ref_f4l: p
                        }),
                        P.pageType) {
                            case "cart":
                                break;
                            case "product":
                                !function (e, t, n) {
                                    var r = t.meta.product;
                                    if (r) {
                                        n.properties.id = r.id,
                                            r.selected_or_first_available_variant ? (n.properties.name = r.selected_or_first_available_variant.title,
                                                n.properties.variantId = r.selected_or_first_available_variant.id,
                                                n.properties.variant = r.selected_or_first_available_variant.variant_title,
                                                n.properties.price = r.selected_or_first_available_variant.price / 100,
                                                n.properties.sku = r.selected_or_first_available_variant.sku) : (n.properties.title = r.title,
                                                    n.properties.price = r.price / 100,
                                                    n.properties.variant = "Default Title"),
                                            n.properties.vendor = r.vendor,
                                            n.properties.type = r.type,
                                            n.properties.event = "Viewed Product";
                                        var i = {
                                            product: t.meta.product
                                        };
                                        e.send("ViewProduct", i)
                                    }
                                }(e, C, P);
                                break;
                            case "searchresults":
                                !function (e, t, n) {
                                    var r = t.meta.search;
                                    if (r) {
                                        n.properties.keySearch = r.query;
                                        var i = {
                                            search: t.meta.search
                                        };
                                        e.send("Search", i)
                                    }
                                }(e, C, P);
                                break;
                            case "thankyou":
                                !function (e, n, i) {
                                    var o, a = window.Haravan;
                                    if (a && a.checkout) {
                                        var c = a.checkout
                                            , u = []
                                            , s = []
                                            , p = 0;
                                        c.line_items.forEach((function (e) {
                                            var t = (null == e ? void 0 : e.price) || 0
                                                , r = {
                                                    id: e.product_id,
                                                    variantId: e.variant_id,
                                                    name: e.title,
                                                    variant: e.variant_title,
                                                    category: "",
                                                    quantity: e.quantity,
                                                    price: t,
                                                    sku: e.sku,
                                                    vendor: e.vendor,
                                                    type: "",
                                                    currency: n.meta.currency
                                                };
                                            s.push(r),
                                                0 == u.includes(e.product_id) && u.push(e.product_id),
                                                p += e.quantity
                                        }
                                        )),
                                            i.products = s,
                                            i.properties.arrProductId = u,
                                            i.properties.coupon = c.discount.code,
                                            i.properties.orderId = c.order_number,
                                            i.properties.shipping = c.shipping_rate.price,
                                            i.properties.subtotal_price = c.subtotal_price,
                                            i.properties.total_price = c.total_price,
                                            i.properties.quantity = p,
                                            i.properties.event = "Completed Order",
                                            r("__hrv_tracked_start_checkout") == c.token ? t("__hrv_tracked_start_checkout", "", 129600) : i.properties.cartToken = !0;
                                        var d = {
                                            purchase: a.checkout
                                        };
                                        (null === (o = null == i ? void 0 : i.properties) || void 0 === o ? void 0 : o.cartToken) || (b("Purchase"),
                                            e.send("Purchase", d))
                                    }
                                }(e, C, P);
                                break;
                            case "checkout":
                                !function (e, n, i) {
                                    var o, a = n.meta.cart, c = n.meta.page;
                                    if (a && c) {
                                        var u = []
                                            , s = [];
                                        a.products.forEach((function (e) {
                                            var t = (null == e ? void 0 : e.price) || 0
                                                , r = {
                                                    id: e.productId,
                                                    variantId: e.variantId,
                                                    name: e.name,
                                                    variant: e.variant,
                                                    category: "",
                                                    quantity: e.quantity,
                                                    price: t / 100,
                                                    sku: e.sku,
                                                    vendor: e.vendor,
                                                    type: e.type,
                                                    currency: n.meta.currency
                                                };
                                            s.push(r),
                                                0 == u.includes(e.productId) && u.push(e.productId)
                                        }
                                        )),
                                            i.products = s,
                                            i.properties.arrProductId = u,
                                            i.properties.quantity = a.item_count,
                                            i.properties.total_price = a.total_price / 100,
                                            i.properties.event = "Viewed Checkout",
                                            r("__hrv_tracked_start_checkout") != c.resourceId || "" == r("__hrv_tracked_start_checkout") || null == r("__hrv_tracked_start_checkout") || "undefined" == r("__hrv_tracked_start_checkout") ? t("__hrv_tracked_start_checkout", c.resourceId, 129600) : i.properties.cartToken = !0
                                    }
                                    var p = {
                                        cart: n.meta.cart
                                    };
                                    (null === (o = null == i ? void 0 : i.properties) || void 0 === o ? void 0 : o.cartToken) || (b("InitiateCheckout"),
                                        e.send("InitiateCheckout", p))
                                }(e, C, P)
                        }
                        C.ga4 && function (e, t, n) {
                            if (t.AutoTrack && t.ga4) {
                                var r = window.gtag;
                                r && n && n.options_GA.enhancedEcommercev4 && (n.options_GA.doubleClick && r("require", "displayfeatures"),
                                    n.options_GA.enhancedLinkAttribution && r("require", "linkid"),
                                    n.options_GA.anonymizeIp && r("set", "anonymizeIp", n.options_GA.anonymizeIp),
                                    n.options_GA.enhancedEcommercev4 && E(t, n))
                            }
                        }(0, C, P),
                            C.ga && function (e, t, n) {
                                if (t.AutoTrack && t.ga) {
                                    var r = window.ga;
                                    r && n && n.options_GA.enhancedEcommerce && (n.options_GA.doubleClick && r("require", "displayfeatures"),
                                        n.options_GA.enhancedLinkAttribution && r("require", "linkid"),
                                        n.options_GA.anonymizeIp && r("set", "anonymizeIp", n.options_GA.anonymizeIp),
                                        n.options_GA.enhancedEcommerce && S(t, n))
                                }
                            }(0, C, P),
                            C.fb && function (e, t, n) {
                                if (t.AutoTrack && t.fb) {
                                    var r = window.fbq;
                                    r && n && ("product" == n.pageType ? r("track", "ViewContent", {
                                        content_ids: [n.properties.id],
                                        content_name: n.properties.name,
                                        content_type: "product_group",
                                        value: n.properties.price,
                                        currency: n.properties.currency
                                    }) : "searchresults" == n.pageType ? r("track", "Search", {
                                        search_string: n.properties.keySearch
                                    }) : "thankyou" == n.pageType ? (r("track", "AddPaymentInfo", {
                                        value: n.properties.total_price,
                                        currency: n.properties.currency
                                    }),
                                        r("track", "Purchase", {
                                            content_ids: n.properties.arrProductId,
                                            content_type: "product_group",
                                            value: n.properties.subtotal_price,
                                            num_items: n.properties.quantity,
                                            currency: n.properties.currency,
                                            eventID: n.properties.orderId
                                        }, {
                                            eventID: n.properties.orderId
                                        })) : "checkout" != n.pageType || n.properties.cartToken || r("track", "InitiateCheckout", {
                                            content_ids: n.properties.arrProductId,
                                            content_type: "product_group",
                                            value: n.properties.total_price,
                                            num_items: n.properties.quantity,
                                            currency: n.properties.currency
                                        }))
                                }
                            }(0, C, P),
                            function (e) {
                                function t(t) {
                                    var n = (t = t || window.event).target || t.srcElement;
                                    if (n && (n.getAttribute("action") || n.getAttribute("href"))) {
                                        if (!e.AutoTrack)
                                            return;
                                        var r = window.ga;
                                        r && r((function (e) {
                                            var t = e.get("linkerParam");
                                            document.cookie = "_haravan_ga=" + t + "; path=/"
                                        }
                                        ))
                                    }
                                }
                                I(window, "load", (function () {
                                    for (var e = 0; e < document.forms.length; e++) {
                                        var n = document.forms[e].getAttribute("action");
                                        n && n.indexOf("/cart") >= 0 && I(document.forms[e], "submit", t)
                                    }
                                    for (e = 0; e < document.links.length; e++) {
                                        var r = document.links[e].getAttribute("href");
                                        r && r.indexOf("/checkout") >= 0 && I(document.links[e], "click", t)
                                    }
                                }
                                ))
                            }(C),
                            function (e, t, n) {
                                var r, i, o;
                                i = "load",
                                    o = function () {
                                        var r = window.jQuery || window.$;
                                        r && r(document).ajaxSuccess((function (r, i, o) {
                                            return function (e, t, n, r, i, o) {
                                                if (null != n && -1 != n.url.indexOf("/cart/add")) {
                                                    if (null != t && t.responseJSON) {
                                                        var a = t.responseJSON
                                                            , c = ""
                                                            , u = function (e) {
                                                                for (var t = e.split("&"), n = 0; n < t.length; n++) {
                                                                    var r = t[n].split("=");
                                                                    if ("quantity" === r[0])
                                                                        return parseInt(r[1])
                                                                }
                                                                return 1
                                                            }(n.data);
                                                        a.variant_options.forEach((function (e) {
                                                            c = c + e + " / "
                                                        }
                                                        )),
                                                            r.pageType = "ajaxCart";
                                                        var s = r.properties;
                                                        s.id = a.product_id,
                                                            s.variantId = a.variant_id,
                                                            s.name = a.title + " - " + c.slice(0, -3),
                                                            s.variant = c.slice(0, -3),
                                                            s.category = "",
                                                            s.quantity = u,
                                                            s.price = a.price / 100,
                                                            s.sku = a.sku,
                                                            s.vendor = a.vendor,
                                                            s.type = "",
                                                            s.event = "Added Product",
                                                            T(i, r),
                                                            S(i, r),
                                                            E(i, r),
                                                            o.track("AddToCart", r.properties)
                                                    }
                                                } else
                                                    (null != n && -1 != n.url.indexOf("/cart/update") || null != n && -1 != n.url.indexOf("/cart/change") || null != n && -1 != n.url.indexOf("/cart/clear")) && null != t && t.responseJSON && (a = t.responseJSON,
                                                        r.pageType = "ajaxUpdateCart",
                                                        a && (a.items && a.items.length > 0 && a.items.forEach((function (e) {
                                                            e.line_price = e.line_price / 100,
                                                                e.line_price_orginal = e.line_price_orginal / 100,
                                                                e.price = e.price / 100,
                                                                e.price_original = e.price_original / 100
                                                        }
                                                        )),
                                                            a.total_price = a.total_price / 100),
                                                        r.carts = a,
                                                        T(i, r),
                                                        E(i, r),
                                                        o.track("UpdateToCart", r.carts))
                                            }(0, i, o, n, t, e)
                                        }
                                        ))
                                    }
                                    ,
                                    (r = window).addEventListener ? r.addEventListener(i, o) : r.attachEvent && r.attachEvent("onload", o)
                            }(e, C, P)
                    }
                }(e)
            }
            var j = function () {
                return j = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                    ,
                    j.apply(this, arguments)
            };
            var x, q, R, U, D, G = -1, M = function (e) {
                addEventListener("pageshow", (function (t) {
                    t.persisted && (G = t.timeStamp,
                        e(t))
                }
                ), !0)
            }, V = function () {
                return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
            }, B = function () {
                var e = V();
                return e && e.activationStart || 0
            }, N = function (e, t) {
                var n = V()
                    , r = "navigate";
                return G >= 0 ? r = "back-forward-cache" : n && (document.prerendering || B() > 0 ? r = "prerender" : document.wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))),
                {
                    name: e,
                    value: void 0 === t ? -1 : t,
                    rating: "good",
                    delta: 0,
                    entries: [],
                    id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                    navigationType: r
                }
            }, z = function (e, t, n) {
                try {
                    if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                        var r = new PerformanceObserver((function (e) {
                            Promise.resolve().then((function () {
                                t(e.getEntries())
                            }
                            ))
                        }
                        ));
                        return r.observe(Object.assign({
                            type: e,
                            buffered: !0
                        }, n || {})),
                            r
                    }
                } catch (e) { }
            }, H = function (e, t, n, r) {
                var i, o;
                return function (a) {
                    t.value >= 0 && (a || r) && ((o = t.value - (i || 0)) || void 0 === i) && (i = t.value,
                        t.delta = o,
                        t.rating = function (e, t) {
                            return e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good"
                        }(t.value, n),
                        e(t))
                }
            }, F = function (e) {
                requestAnimationFrame((function () {
                    return requestAnimationFrame((function () {
                        return e()
                    }
                    ))
                }
                ))
            }, J = function (e) {
                var t = function (t) {
                    "pagehide" !== t.type && "hidden" !== document.visibilityState || e(t)
                };
                addEventListener("visibilitychange", t, !0),
                    addEventListener("pagehide", t, !0)
            }, $ = function (e) {
                var t = !1;
                return function (n) {
                    t || (e(n),
                        t = !0)
                }
            }, Q = -1, X = function () {
                return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
            }, K = function (e) {
                "hidden" === document.visibilityState && Q > -1 && (Q = "visibilitychange" === e.type ? e.timeStamp : 0,
                    Y())
            }, W = function () {
                addEventListener("visibilitychange", K, !0),
                    addEventListener("prerenderingchange", K, !0)
            }, Y = function () {
                removeEventListener("visibilitychange", K, !0),
                    removeEventListener("prerenderingchange", K, !0)
            }, Z = function () {
                return Q < 0 && (Q = X(),
                    W(),
                    M((function () {
                        setTimeout((function () {
                            Q = X(),
                                W()
                        }
                        ), 0)
                    }
                    ))),
                {
                    get firstHiddenTime() {
                        return Q
                    }
                }
            }, ee = function (e) {
                document.prerendering ? addEventListener("prerenderingchange", (function () {
                    return e()
                }
                ), !0) : e()
            }, te = [1800, 3e3], ne = function (e, t) {
                t = t || {},
                    ee((function () {
                        var n, r = Z(), i = N("FCP"), o = z("paint", (function (e) {
                            e.forEach((function (e) {
                                "first-contentful-paint" === e.name && (o.disconnect(),
                                    e.startTime < r.firstHiddenTime && (i.value = Math.max(e.startTime - B(), 0),
                                        i.entries.push(e),
                                        n(!0)))
                            }
                            ))
                        }
                        ));
                        o && (n = H(e, i, te, t.reportAllChanges),
                            M((function (r) {
                                i = N("FCP"),
                                    n = H(e, i, te, t.reportAllChanges),
                                    F((function () {
                                        i.value = performance.now() - r.timeStamp,
                                            n(!0)
                                    }
                                    ))
                            }
                            )))
                    }
                    ))
            }, re = [.1, .25], ie = {
                passive: !0,
                capture: !0
            }, oe = new Date, ae = function (e, t) {
                x || (x = t,
                    q = e,
                    R = new Date,
                    se(removeEventListener),
                    ce())
            }, ce = function () {
                if (q >= 0 && q < R - oe) {
                    var e = {
                        entryType: "first-input",
                        name: x.type,
                        target: x.target,
                        cancelable: x.cancelable,
                        startTime: x.timeStamp,
                        processingStart: x.timeStamp + q
                    };
                    U.forEach((function (t) {
                        t(e)
                    }
                    )),
                        U = []
                }
            }, ue = function (e) {
                if (e.cancelable) {
                    var t = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
                    "pointerdown" == e.type ? function (e, t) {
                        var n = function () {
                            ae(e, t),
                                i()
                        }
                            , r = function () {
                                i()
                            }
                            , i = function () {
                                removeEventListener("pointerup", n, ie),
                                    removeEventListener("pointercancel", r, ie)
                            };
                        addEventListener("pointerup", n, ie),
                            addEventListener("pointercancel", r, ie)
                    }(t, e) : ae(t, e)
                }
            }, se = function (e) {
                ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function (t) {
                    return e(t, ue, ie)
                }
                ))
            }, pe = [100, 300], de = 0, le = 1 / 0, fe = 0, ve = function (e) {
                e.forEach((function (e) {
                    e.interactionId && (le = Math.min(le, e.interactionId),
                        fe = Math.max(fe, e.interactionId),
                        de = fe ? (fe - le) / 7 + 1 : 0)
                }
                ))
            }, he = function () {
                return D ? de : performance.interactionCount || 0
            }, me = [200, 500], ge = 0, ye = function () {
                return he() - ge
            }, _e = [], be = {}, we = function (e) {
                var t = _e[_e.length - 1]
                    , n = be[e.interactionId];
                if (n || _e.length < 10 || e.duration > t.latency) {
                    if (n)
                        n.entries.push(e),
                            n.latency = Math.max(n.latency, e.duration);
                    else {
                        var r = {
                            id: e.interactionId,
                            latency: e.duration,
                            entries: [e]
                        };
                        be[r.id] = r,
                            _e.push(r)
                    }
                    _e.sort((function (e, t) {
                        return t.latency - e.latency
                    }
                    )),
                        _e.splice(10).forEach((function (e) {
                            delete be[e.id]
                        }
                        ))
                }
            }, ke = [2500, 4e3], Ee = {}, Se = [800, 1800], Te = function e(t) {
                document.prerendering ? ee((function () {
                    return e(t)
                }
                )) : "complete" !== document.readyState ? addEventListener("load", (function () {
                    return e(t)
                }
                ), !0) : setTimeout(t, 0)
            }, Ie = function (e, t) {
                t = t || {};
                var n = N("TTFB")
                    , r = H(e, n, Se, t.reportAllChanges);
                Te((function () {
                    var i = V();
                    if (i) {
                        var o = i.responseStart;
                        if (o <= 0 || o > performance.now())
                            return;
                        n.value = Math.max(o - B(), 0),
                            n.entries = [i],
                            r(!0),
                            M((function () {
                                n = N("TTFB", 0),
                                    (r = H(e, n, Se, t.reportAllChanges))(!0)
                            }
                            ))
                    }
                }
                ))
            }, Ae = (window,
                new Set);
            function Le(e) {
                var t, n = e.name, r = e.value, i = e.rating, o = e.attribution;
                e.entries,
                    "good" !== i && (console.debug(e),
                        "LCP" === n && (t = {
                            elm: null == o ? void 0 : o.element,
                            url: null == o ? void 0 : o.url
                        })),
                    Ae.add({
                        name: n,
                        value: r,
                        rating: i,
                        attribution: t
                    })
            }
            function Ce(e) {
                addEventListener("visibilitychange", (function () {
                    "hidden" === document.visibilityState && function (e) {
                        if (Ae.size > 0) {
                            var t = {};
                            Ae.forEach((function (e) {
                                var n = e.name;
                                delete e.name,
                                    t[n] = e
                            }
                            )),
                                e.send("webVitals", {
                                    webVitals: t
                                }),
                                Ae.clear()
                        }
                    }(e)
                }
                )),
                    Ie(Le),
                    function (e, t) {
                        t = t || {},
                            ee((function () {
                                "interactionCount" in performance || D || (D = z("event", ve, {
                                    type: "event",
                                    buffered: !0,
                                    durationThreshold: 0
                                }));
                                var n, r = N("INP"), i = function (e) {
                                    e.forEach((function (e) {
                                        e.interactionId && we(e),
                                            "first-input" === e.entryType && !_e.some((function (t) {
                                                return t.entries.some((function (t) {
                                                    return e.duration === t.duration && e.startTime === t.startTime
                                                }
                                                ))
                                            }
                                            )) && we(e)
                                    }
                                    ));
                                    var t, i = (t = Math.min(_e.length - 1, Math.floor(ye() / 50)),
                                        _e[t]);
                                    i && i.latency !== r.value && (r.value = i.latency,
                                        r.entries = i.entries,
                                        n())
                                }, o = z("event", i, {
                                    durationThreshold: t.durationThreshold || 40
                                });
                                n = H(e, r, me, t.reportAllChanges),
                                    o && (o.observe({
                                        type: "first-input",
                                        buffered: !0
                                    }),
                                        J((function () {
                                            i(o.takeRecords()),
                                                r.value < 0 && ye() > 0 && (r.value = 0,
                                                    r.entries = []),
                                                n(!0)
                                        }
                                        )),
                                        M((function () {
                                            _e = [],
                                                ge = he(),
                                                r = N("INP"),
                                                n = H(e, r, me, t.reportAllChanges)
                                        }
                                        )))
                            }
                            ))
                    }(Le),
                    ne(Le),
                    function (e, t) {
                        t = t || {},
                            ne($((function () {
                                var n, r = N("CLS", 0), i = 0, o = [], a = function (e) {
                                    e.forEach((function (e) {
                                        if (!e.hadRecentInput) {
                                            var t = o[0]
                                                , n = o[o.length - 1];
                                            i && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (i += e.value,
                                                o.push(e)) : (i = e.value,
                                                    o = [e])
                                        }
                                    }
                                    )),
                                        i > r.value && (r.value = i,
                                            r.entries = o,
                                            n())
                                }, c = z("layout-shift", a);
                                c && (n = H(e, r, re, t.reportAllChanges),
                                    J((function () {
                                        a(c.takeRecords()),
                                            n(!0)
                                    }
                                    )),
                                    M((function () {
                                        i = 0,
                                            r = N("CLS", 0),
                                            n = H(e, r, re, t.reportAllChanges),
                                            F((function () {
                                                return n()
                                            }
                                            ))
                                    }
                                    )),
                                    setTimeout(n, 0))
                            }
                            )))
                    }(Le),
                    function (e, t) {
                        t = t || {},
                            ee((function () {
                                var n, r = Z(), i = N("FID"), o = function (e) {
                                    e.startTime < r.firstHiddenTime && (i.value = e.processingStart - e.startTime,
                                        i.entries.push(e),
                                        n(!0))
                                }, a = function (e) {
                                    e.forEach(o)
                                }, c = z("first-input", a);
                                n = H(e, i, pe, t.reportAllChanges),
                                    c && J($((function () {
                                        a(c.takeRecords()),
                                            c.disconnect()
                                    }
                                    ))),
                                    c && M((function () {
                                        var r;
                                        i = N("FID"),
                                            n = H(e, i, pe, t.reportAllChanges),
                                            U = [],
                                            q = -1,
                                            x = null,
                                            se(addEventListener),
                                            r = o,
                                            U.push(r),
                                            ce()
                                    }
                                    ))
                            }
                            ))
                    }(Le),
                    function (e, t) {
                        t = t || {},
                            ee((function () {
                                var n, r = Z(), i = N("LCP"), o = function (e) {
                                    var t = e[e.length - 1];
                                    t && t.startTime < r.firstHiddenTime && (i.value = Math.max(t.startTime - B(), 0),
                                        i.entries = [t],
                                        n())
                                }, a = z("largest-contentful-paint", o);
                                if (a) {
                                    n = H(e, i, ke, t.reportAllChanges);
                                    var c = $((function () {
                                        Ee[i.id] || (o(a.takeRecords()),
                                            a.disconnect(),
                                            Ee[i.id] = !0,
                                            n(!0))
                                    }
                                    ));
                                    ["keydown", "click"].forEach((function (e) {
                                        addEventListener(e, c, !0)
                                    }
                                    )),
                                        J(c),
                                        M((function (r) {
                                            i = N("LCP"),
                                                n = H(e, i, ke, t.reportAllChanges),
                                                F((function () {
                                                    i.value = performance.now() - r.timeStamp,
                                                        Ee[i.id] = !0,
                                                        n(!0)
                                                }
                                                ))
                                        }
                                        ))
                                }
                            }
                            ))
                    }(Le)
            }
            var Pe = function () {
                return Pe = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n])
                            Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }
                    ,
                    Pe.apply(this, arguments)
            }
                , Oe = window
                , je = function (e, t) {
                    "AddToCart" !== e && "UpdateToCart" !== e || b("AddToCart");
                    var n = {
                        event: e,
                        properties: Pe({}, t)
                    };
                    xe("track", n)
                }
                , xe = function (e, n) {
                    var r = Oe.hrvBeacon;
                    if (r.token) {
                        var i = g()
                            , o = function () {
                                var e = w()
                                    , n = [];
                                if (e.events) {
                                    var r = e.events.filter((function (e) {
                                        return e.state == y.track
                                    }
                                    ));
                                    r.forEach((function (e) {
                                        e.state = y.sent,
                                            n.push(e.event)
                                    }
                                    )),
                                        r.length > 0 && t(_, e, 30)
                                }
                                return {
                                    session: e,
                                    events: n
                                }
                            }()
                            , a = o.session
                            , c = o.events
                            , u = Pe({
                                timestamp: (new Date).getTime(),
                                orgId: r.token,
                                userId: r.userId,
                                anonymousId: r.userAgent.anonymous_id,
                                sessionId: a.sessionId,
                                context: {
                                    location: location.href,
                                    pageLoadId: r.pageLoadId,
                                    userAgent: {
                                        browser: r.userAgent.browser,
                                        mobile: r.userAgent.mobile,
                                        raw: r.userAgent.raw
                                    }
                                }
                            }, n);
                        i.properties && 0 !== Object.keys(i.properties).length && (u.identities = i.properties),
                            c && c.length > 0 && (u.sessionEvents = c),
                            document.referrer && (u.context.referrer = document.referrer);
                        var s = Pe({
                            type: e
                        }, u);
                        !function (e, t) {
                            var n = JSON.stringify(t);
                            if (!navigator.sendBeacon || !navigator.sendBeacon(e, n)) {
                                var r = new XMLHttpRequest;
                                r.open("POST", e),
                                    r.send(n)
                            }
                        }("".concat(r.host, "/analytics"), s)
                    }
                }
                , qe = function (e) {
                    m(e)
                };
            try {
                var Re = document.currentScript
                    , Ue = parseInt(Re.getAttribute("hrv-beacon-t"))
                    , De = h()
                    , Ge = new URL(Re.src).origin;
                Ue || console.error("Haravan web analytics load error, invalid token"),
                    function (e, t, n) {
                        if (!Oe.hrvBeacon) {
                            var r = {
                                browserName: (s = navigator.userAgent).match(/chrome|chromium|crios/i) ? "chrome" : s.match(/firefox|fxios/i) ? "firefox" : s.match(/safari/i) ? "safari" : s.match(/opr\//i) ? "opera" : s.match(/edg/i) ? "edge" : s.match(/fbios|fban/i) ? "facebook" : s.match(/zalo/i) ? "zalo" : "Unknown",
                                isMobile: /Mobile/i.test(navigator.userAgent),
                                userAgent: s
                            }
                                , i = r.browserName
                                , o = r.isMobile
                                , a = r.userAgent
                                , c = {
                                    host: n,
                                    token: e,
                                    pageLoadId: t,
                                    userAgent: {
                                        anonymous_id: g().id,
                                        browser: i,
                                        mobile: o,
                                        raw: a
                                    },
                                    send: xe,
                                    track: je,
                                    identity: qe
                                };
                            Oe.hrvBeacon = c;
                            var u = Oe.hrvBeacon;
                            (function (e) {
                                var t = {}
                                    , n = e.send;
                                e.send = function (e, n) {
                                    t.properties = j({
                                        eventName: e
                                    }, n)
                                }
                                    ,
                                    O(e),
                                    e.send = n,
                                    e.send("page", t)
                            }
                            )(u),
                                Ce(u)
                        }
                        var s
                    }(Ue, De, Ge)
            } catch (x) {
                console.log(x)
            }
        }()
}();
