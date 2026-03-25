js.Browser = function () {}
m["js.Browser"] = js.Browser
js.Browser.__name__ = "js.Browser"
js.Browser.get_supported = function () {
    return "undefined" != typeof window && "undefined" != typeof window.location ? "string" == typeof window.location.protocol : !1;
}
js.Browser.getLocalStorage = function () {
    try {
        var b = window.localStorage;
        b.getItem("");
        if (0 == b.length) {
            var a = "_hx_" + Math.random();
            b.setItem(a, a);
            b.removeItem(a);
        }
        return b;
    } catch (c) {
        return null;
    }
}
js.Browser.createXMLHttpRequest = function () {
    if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest();
    if ("undefined" != typeof ActiveXObject) return new ActiveXObject("Microsoft.XMLHTTP");
    throw haxe.Exception.thrown("Unable to create XMLHttpRequest object.");
}