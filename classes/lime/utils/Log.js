lime.utils.Log = function () {}
m["lime.utils.Log"] = lime.utils.Log
lime.utils.Log.__name__ = "lime.utils.Log"
lime.utils.Log.error = function (b, a) {
    if (1 <= lime.utils.Log.level) {
        b = "[" + a.className + "] ERROR: " + Std.string(b);
        if (lime.utils.Log.throwErrors) throw haxe.Exception.thrown(b);
        console.error(b);
    }
}
lime.utils.Log.verbose = function (b, a) {
    5 <= lime.utils.Log.level && (b = "[" + a.className + "] " + Std.string(b), console.log(b));
}
lime.utils.Log.warn = function (b, a) {
    2 <= lime.utils.Log.level && console.warn("[" + a.className + "] WARNING: " + Std.string(b));
}
lime.utils.Log.level = 3
lime.utils.Log.throwErrors = !0