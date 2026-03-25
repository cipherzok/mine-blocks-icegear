lemongine.Web = function () {}
m["lemongine.Web"] = lemongine.Web
lemongine.Web.__name__ = "lemongine.Web"
lemongine.Web.open = function (b) {
    lime.system.System.openURL(b, "_blank");
}
lemongine.Web.send = function (b, a, c, d, f) {
    null == a && (a = !0);
    b = new haxe.http.HttpJs(b);
    if (null != c) for (var g = Object.keys(c.h), k = g.length, h = 0; h < k;) {
        var m = g[h++];
        b.addParameter(m, c.h[m]);
    }
    b.onError = function (a) {
        null != f && f(a);
    };
    b.onData = function (a) {
        null != d && d(a);
    };
    b.request(a);
}
lemongine.Web.parseVariables = function (b) {
    for (var a = new haxe.ds.StringMap(), c = b.split("&"), d = 0; d < c.length;) if (b = c[d], ++d, "" != b) if (-1 == b.indexOf("=")) {
        var f = decodeURIComponent(b.split("+").join(" "));
        a.h[f] = "";
    } else f = HxOverrides.substr(b, 0, b.indexOf("=")), b = HxOverrides.substr(b, b.indexOf("=") + 1, null), f = decodeURIComponent(f.split("+").join(" ")), b = decodeURIComponent(b.split("+").join(" ")), a.h[f] = b;
    return a;
}