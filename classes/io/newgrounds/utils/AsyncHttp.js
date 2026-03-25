io.newgrounds.utils.AsyncHttp = function () {}
m["io.newgrounds.utils.AsyncHttp"] = io.newgrounds.utils.AsyncHttp
io.newgrounds.utils.AsyncHttp.__name__ = "io.newgrounds.utils.AsyncHttp"
io.newgrounds.utils.AsyncHttp.sendSync = function (b, a, c, d, f) {
    b = new haxe.http.HttpJs(b);
    null != a && b.setParameter("input", a);
    b.onData = c;
    b.onError = d;
    null != f && (b.onStatus = f);
    b.request(null != a);
    return b;
}