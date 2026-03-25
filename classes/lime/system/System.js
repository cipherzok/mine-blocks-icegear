lime.system.System = function () {}
m["lime.system.System"] = lime.system.System
lime.system.System.__name__ = "lime.system.System"
lime.system.System.embed = u.lime.embed = function (b, a, c, d, f) {
    if (null != lime.system.System.__applicationEntryPoint && Object.prototype.hasOwnProperty.call(lime.system.System.__applicationEntryPoint.h, b)) {
        var g = "string" == typeof a ? window.document.getElementById(a) : null == a ? window.document.createElement("div") : a;
        null == g ? window.console.log("[lime.embed] ERROR: Cannot find target element: " + Std.string(a)) : (null == c && (c = 0), null == d && (d = 0), null == f && (f = {}), Object.prototype.hasOwnProperty.call(f, "background") && "string" == typeof f.background && (a = StringTools.replace(Std.string(f.background), "#", ""), -1 < a.indexOf("0x") ? f.background = Std.parseInt(a) : f.background = Std.parseInt("0x" + a)), f.element = g, f.width = c, f.height = d, lime.system.System.__applicationEntryPoint.h[b](f));
    }
}
lime.system.System.exit = function (b) {
    var a = lime.app.Application.current;
    if (null != a && (a.onExit.dispatch(b), a.onExit.canceled)) return;
    null != a && null != a.__window && a.__window.close();
}
lime.system.System.openURL = function (b, a) {
    null == a && (a = "_blank");
    null != b && window.open(b, a);
}
lime.system.System.__getDirectory = function (b) {
    return null;
}
lime.system.System.__registerEntryPoint = function (b, a) {
    null == lime.system.System.__applicationEntryPoint && (lime.system.System.__applicationEntryPoint = new haxe.ds.StringMap());
    lime.system.System.__applicationEntryPoint.h[b] = a;
}
lime.system.System.get_applicationStorageDirectory = function () {
    null == lime.system.System.__applicationStorageDirectory && (lime.system.System.__applicationStorageDirectory = lime.system.System.__getDirectory(1));
    return lime.system.System.__applicationStorageDirectory;
}