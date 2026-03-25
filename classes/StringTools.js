var StringTools = function () {};
m.StringTools = StringTools
StringTools.__name__ = "StringTools"
StringTools.startsWith = function (b, a) {
    return b.length >= a.length ? 0 == b.lastIndexOf(a, 0) : !1;
}
StringTools.endsWith = function (b, a) {
    var c = a.length,
        d = b.length;
    return d >= c ? b.indexOf(a, d - c) == d - c : !1;
}
StringTools.isSpace = function (b, a) {
    b = HxOverrides.cca(b, a);
    return 8 < b && 14 > b ? !0 : 32 == b;
}
StringTools.ltrim = function (b) {
    for (var a = b.length, c = 0; c < a && StringTools.isSpace(b, c);) ++c;
    return 0 < c ? HxOverrides.substr(b, c, a - c) : b;
}
StringTools.rtrim = function (b) {
    for (var a = b.length, c = 0; c < a && StringTools.isSpace(b, a - c - 1);) ++c;
    return 0 < c ? HxOverrides.substr(b, 0, a - c) : b;
}
StringTools.trim = function (b) {
    return StringTools.ltrim(StringTools.rtrim(b));
}
StringTools.rpad = function (b, a, c) {
    if (0 >= a.length) return b;
    for (b = null == b ? "null" : "" + b; b.length < c;) b += null == a ? "null" : "" + a;
    return b;
}
StringTools.replace = function (b, a, c) {
    return b.split(a).join(c);
}
StringTools.hex = function (b, a) {
    var c = "";
    do c = "0123456789ABCDEF".charAt(b & 15) + c, b >>>= 4; while (0 < b);
    if (null != a) for (; c.length < a;) c = "0" + c;
    return c;
}