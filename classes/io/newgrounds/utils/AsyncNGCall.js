io.newgrounds.utils.AsyncNGCall = function () {}
m["io.newgrounds.utils.AsyncNGCall"] = io.newgrounds.utils.AsyncNGCall
io.newgrounds.utils.AsyncNGCall.__name__ = "io.newgrounds.utils.AsyncNGCall"
io.newgrounds.utils.AsyncNGCall.send = function (b, a, c, d, f) {
    b.verbose && b.log("sending: " + a, {
        fileName: "io/newgrounds/utils/AsyncHttp.hx",
        lineNumber: 36,
        className: "io.newgrounds.utils.AsyncNGCall",
        methodName: "send"
    });
    io.newgrounds.utils.AsyncHttp.sendSync("https://newgrounds.io/gateway_v3.php", a, c, d, f);
}