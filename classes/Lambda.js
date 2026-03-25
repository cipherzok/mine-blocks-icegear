var Lambda = function () {};
m.Lambda = Lambda
Lambda.__name__ = "Lambda"
Lambda.exists = function (b, a) {
    for (b = ca(b); b.hasNext();) if (a(b.next())) return !0;
    return !1;
}