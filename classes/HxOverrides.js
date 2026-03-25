var HxOverrides = function () {};
m.HxOverrides = HxOverrides
HxOverrides.__name__ = "HxOverrides"
HxOverrides.strDate = function (b) {
    switch (b.length) {
    case 8:
        b = b.split(":");
        var a = new Date();
        a.setTime(0);
        a.setUTCHours(b[0]);
        a.setUTCMinutes(b[1]);
        a.setUTCSeconds(b[2]);
        return a;
    case 10:
        return b = b.split("-"), new Date(b[0], b[1] - 1, b[2], 0, 0, 0);
    case 19:
        return b = b.split(" "), a = b[0].split("-"), b = b[1].split(":"), new Date(a[0], a[1] - 1, a[2], b[0], b[1], b[2]);
    default:
        throw haxe.Exception.thrown("Invalid date format : " + b);
    }
}
HxOverrides.cca = function (b, a) {
    b = b.charCodeAt(a);
    if (b == b) return b;
}
HxOverrides.substr = function (b, a, c) {
    if (null == c) c = b.length;else if (0 > c) if (0 == a) c = b.length + c;else return "";
    return b.substr(a, c);
}
HxOverrides.remove = function (b, a) {
    a = b.indexOf(a);
    if (-1 == a) return !1;
    b.splice(a, 1);
    return !0;
}
HxOverrides.now = function () {
    return Date.now();
}
HxOverrides.now = performance.now.bind(performance)