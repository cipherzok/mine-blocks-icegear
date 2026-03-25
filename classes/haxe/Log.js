haxe.Log = function () {}
m["haxe.Log"] = haxe.Log
haxe.Log.__name__ = "haxe.Log"
haxe.Log.formatOutput = function (b, a) {
    b = Std.string(b);
    if (null == a) return b;
    var c = a.fileName + ":" + a.lineNumber;
    if (null != a.customParams) {
        var d = 0;
        for (a = a.customParams; d < a.length;) b += ", " + Std.string(a[d++]);
    }
    return c + ": " + b;
}
haxe.Log.trace = function (b, a) {
    b = haxe.Log.formatOutput(b, a);
    "undefined" != typeof console && null != console.log && console.log(b);
}