haxe.net.impl.WebSocketJs = function (b, a) {
    var c = this;
    this.impl = null != a ? new WebSocket(b, a) : new WebSocket(b);
    this.impl.onopen = function (a) {
        c.onopen();
    };
    this.impl.onclose = function (a) {
        c.onclose(a);
    };
    this.impl.onerror = function (a) {
        c.onerror("error");
    };
    this.impl.onmessage = function (a) {
        a = a.data;
        if ("string" == typeof a) c.onmessageString(a);else if (a instanceof ArrayBuffer) c.onmessageBytes(haxe.io.Bytes.ofData(js.Boot.__cast(a, ArrayBuffer)));else if (a instanceof Blob) {
            var b,
                d = new FileReader();
            d.onload = function () {
                b = d.result;
                c.onmessageBytes(haxe.io.Bytes.ofData(b));
            };
            d.readAsArrayBuffer(js.Boot.__cast(a, Blob));
        } else haxe.Log.trace("Unhandled websocket onmessage " + a, {
            fileName: "haxe/net/impl/WebSocketJs.hx",
            lineNumber: 56,
            className: "haxe.net.impl.WebSocketJs",
            methodName: "new"
        });
    };
}
m["haxe.net.impl.WebSocketJs"] = haxe.net.impl.WebSocketJs
haxe.net.impl.WebSocketJs.__name__ = "haxe.net.impl.WebSocketJs"
haxe.net.impl.WebSocketJs.__super__ = haxe.net.WebSocket
haxe.net.impl.WebSocketJs.prototype = z(haxe.net.WebSocket.prototype, {
    sendString: function (b) {
        this.impl.send(b);
    },
    close: function () {
        this.impl.close();
    },
    get_readyState: function () {
        switch (this.impl.readyState) {
        case 0:
            return haxe.net.ReadyState.Connecting;
        case 1:
            return haxe.net.ReadyState.Open;
        case 2:
            return haxe.net.ReadyState.Closing;
        case 3:
            return haxe.net.ReadyState.Closed;
        default:
            throw haxe.Exception.thrown("Unexpected websocket state");
        }
    },
    __class__: haxe.net.impl.WebSocketJs
})