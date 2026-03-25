haxe.io.Path = function (b) {
    switch (b) {
    case ".":
    case "..":
        this.dir = b;
        this.file = "";
        return;
    }
    var a = b.lastIndexOf("/"),
        c = b.lastIndexOf("\\");
    a < c ? (this.dir = HxOverrides.substr(b, 0, c), b = HxOverrides.substr(b, c + 1, null), this.backslash = !0) : c < a ? (this.dir = HxOverrides.substr(b, 0, a), b = HxOverrides.substr(b, a + 1, null)) : this.dir = null;
    a = b.lastIndexOf(".");
    -1 != a ? (this.ext = HxOverrides.substr(b, a + 1, null), this.file = HxOverrides.substr(b, 0, a)) : (this.ext = null, this.file = b);
}
m["haxe.io.Path"] = haxe.io.Path
haxe.io.Path.__name__ = "haxe.io.Path"
haxe.io.Path.withoutDirectory = function (b) {
    b = new haxe.io.Path(b);
    b.dir = null;
    return b.toString();
}
haxe.io.Path.directory = function (b) {
    b = new haxe.io.Path(b);
    return null == b.dir ? "" : b.dir;
}
haxe.io.Path.join = function (b) {
    for (var a = [], c = 0; c < b.length;) {
        var d = b[c];
        ++c;
        null != d && "" != d && a.push(d);
    }
    if (0 == a.length) return "";
    b = a[0];
    c = 1;
    for (d = a.length; c < d;) b = haxe.io.Path.addTrailingSlash(b), b += a[c++];
    return haxe.io.Path.normalize(b);
}
haxe.io.Path.normalize = function (b) {
    b = b.split("\\").join("/");
    if ("/" == b) return "/";
    for (var a = [], c = 0, d = b.split("/"); c < d.length;) {
        var f = d[c];
        ++c;
        ".." == f && 0 < a.length && ".." != a[a.length - 1] ? a.pop() : "" == f ? (0 < a.length || 47 == HxOverrides.cca(b, 0)) && a.push(f) : "." != f && a.push(f);
    }
    b = "";
    d = c = !1;
    f = 0;
    for (a = a.join("/"); f < a.length;) {
        var g = a,
            k = f++,
            h = g.charCodeAt(k);
        55296 <= h && 56319 >= h && (h = h - 55232 << 10 | g.charCodeAt(k + 1) & 1023);
        g = h;
        65536 <= g && ++f;
        switch (g) {
        case 47:
            c ? (c = !1, d && (b += "/", d = !1), b += String.fromCodePoint(g)) : d = !0;
            break;
        case 58:
            b += ":";
            c = !0;
            break;
        default:
            c = !1, d && (b += "/", d = !1), b += String.fromCodePoint(g);
        }
    }
    return b;
}
haxe.io.Path.addTrailingSlash = function (b) {
    if (0 == b.length) return "/";
    var a = b.lastIndexOf("/"),
        c = b.lastIndexOf("\\");
    return a < c ? c != b.length - 1 ? b + "\\" : b : a != b.length - 1 ? b + "/" : b;
}
haxe.io.Path.prototype = {
    toString: function () {
        return (null == this.dir ? "" : this.dir + (this.backslash ? "\\" : "/")) + this.file + (null == this.ext ? "" : "." + this.ext);
    },
    __class__: haxe.io.Path
}