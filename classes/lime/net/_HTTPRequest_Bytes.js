lime.net._HTTPRequest_Bytes = function (b) {
    lime.net._HTTPRequest.AbstractHTTPRequest.call(this, b);
}
m["lime.net._HTTPRequest_Bytes"] = lime.net._HTTPRequest_Bytes
lime.net._HTTPRequest_Bytes.__name__ = "lime.net._HTTPRequest_Bytes"
lime.net._HTTPRequest_Bytes.__super__ = lime.net._HTTPRequest.AbstractHTTPRequest
lime.net._HTTPRequest_Bytes.prototype = z(lime.net._HTTPRequest.AbstractHTTPRequest.prototype, {
    fromBytes: function (b) {
        return b;
    },
    load: function (b) {
        var a = this;
        null != b && (this.uri = b);
        var c = new lime.app.Promise();
        b = this.__backend.loadData(this.uri);
        b.onProgress(F(c, c.progress));
        b.onError(function (b) {
            a.responseData = b.responseData;
            c.error(b.error);
        });
        b.onComplete(function (b) {
            a.responseData = a.fromBytes(b);
            c.complete(a.responseData);
        });
        return c.future;
    },
    __class__: lime.net._HTTPRequest_Bytes
})