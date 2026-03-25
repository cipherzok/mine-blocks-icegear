lemongine.Mathz = function () {}
m["lemongine.Mathz"] = lemongine.Mathz
lemongine.Mathz.__name__ = "lemongine.Mathz"
lemongine.Mathz.modulus = function (b, a) {
    b %= a;
    return 0 > b ? b + a : b;
}
lemongine.Mathz.clamp = function (b, a, c) {
    return Math.max(b, Math.min(a, c));
}
lemongine.Mathz.distance = function (b, a) {
    return Math.sqrt(b * b + a * a);
}
lemongine.Mathz.sign = function (b) {
    return 0 <= b ? 1 : -1;
}
lemongine.Mathz.MAX_INT = function () {
    return Number.MAX_SAFE_INTEGER || 9007199254740991;
}
lemongine.Mathz.normalizeFloat = function (b, a, c, d) {
    null == d && (d = !1);
    if (a == c) return a;
    b = (b - a) / (c - a);
    return d ? lemongine.Mathz.clamp(0, 1, b) : b;
}
lemongine.Mathz.interpolateSine = function (b) {
    return .5 - .5 * Math.cos(b * Math.PI);
}
lemongine.Mathz.interpolateSmootherstep = function (b) {
    b = lemongine.Mathz.clamp(0, 1, b);
    return b * b * b * (b * (6 * b - 15) + 10);
}
lemongine.Mathz.interpolateEnterSmoother = function (b) {
    b = lemongine.Mathz.clamp(0, 1, b);
    return 1 - (1 - b) * (1 - b) * (1 - b);
}
lemongine.Mathz.interpolateExitSmoother = function (b) {
    b = lemongine.Mathz.clamp(0, 1, b);
    return b * b * b;
}
lemongine.Mathz.pointInTriangle = function (b, a, c, d, f) {
    null == f && (f = !1);
    var g = (c.x - a.x) * (b.y - a.y) - (c.y - a.y) * (b.x - a.x);
    c = (d.x - c.x) * (b.y - c.y) - (d.y - c.y) * (b.x - c.x);
    b = (a.x - d.x) * (b.y - d.y) - (a.y - d.y) * (b.x - d.x);
    return f ? 0 <= g == 0 <= c ? 0 <= c == 0 <= b : !1 : 0 < g == 0 < c ? 0 < c == 0 < b : !1;
}
lemongine.Mathz.pointInQuad = function (b, a, c, d, f) {
    return lemongine.Mathz.pointInTriangle(b, a, c, f, !0) ? !0 : lemongine.Mathz.pointInTriangle(b, c, d, f);
}
lemongine.Mathz.pointInTransformedRectangle = function (b, a, c) {
    var d = c.apply(new lemongine.Vector3(a.x, a.y)),
        f = c.apply(new lemongine.Vector3(a.get_right(), a.y)),
        g = c.apply(new lemongine.Vector3(a.get_right(), a.get_bottom()));
    a = c.apply(new lemongine.Vector3(a.x, a.get_bottom()));
    return lemongine.Mathz.pointInQuad(b, new lemongine.Point(d.x, d.y), new lemongine.Point(f.x, f.y), new lemongine.Point(g.x, g.y), new lemongine.Point(a.x, a.y));
}
lemongine.Mathz.repeatArray = function (b, a, c) {
    null == c && (c = !0);
    null == a && (a = 1);
    if (!c) {
        var d = [];
        c = 0;
        for (a *= b.length; c < a;) d.push(b[c++ % b.length]);
        return d;
    }
    if (0 >= a) return b.splice(0, b.length), b;
    d = b.length;
    c = 0;
    for (a = (a - 1) * d; c < a;) b.push(b[c++ % d]);
    return b;
}
lemongine.Mathz.pushAll = function (b, a) {
    for (var c = 0; c < a.length;) b.push(a[c++]);
    return b;
}
lemongine.Mathz.insertAll = function (b, a, c) {
    for (var d = 0; d < c.length;) b.splice(a, 0, c[d++]), ++a;
    return b;
}
lemongine.Mathz.spliceInsert = function (b, a, c, d) {
    if (c == d.length) for (var f = 0; f < c;) b[f + a] = d[f], ++f;else b.splice(a, c), lemongine.Mathz.insertAll(b, a, d);
    return b;
}