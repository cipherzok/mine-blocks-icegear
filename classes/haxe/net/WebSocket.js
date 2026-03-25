haxe.net.WebSocket = function () {}
m["haxe.net.WebSocket"] = haxe.net.WebSocket
haxe.net.WebSocket.__name__ = "haxe.net.WebSocket"
haxe.net.WebSocket.create = function (b, a, c, d) {
    return new haxe.net.impl.WebSocketJs(b, a);
}
haxe.net.WebSocket.prototype = {
    sendString: function (b) {},
    close: function () {},
    get_readyState: function () {
        throw haxe.Exception.thrown("Not implemented");
    },
    onopen: function () {},
    onerror: function (b) {},
    onmessageString: function (b) {},
    onmessageBytes: function (b) {},
    onclose: function (b) {},
    __class__: haxe.net.WebSocket
}