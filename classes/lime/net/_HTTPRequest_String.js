lime.net._HTTPRequest_String = function (b) {
    lime.net._HTTPRequest.AbstractHTTPRequest.call(this, b);
}
m["lime.net._HTTPRequest_String"] = lime.net._HTTPRequest_String
lime.net._HTTPRequest_String.__name__ = "lime.net._HTTPRequest_String"
lime.net._HTTPRequest_String.__super__ = lime.net._HTTPRequest.AbstractHTTPRequest
lime.net._HTTPRequest_String.prototype = z(lime.net._HTTPRequest.AbstractHTTPRequest.prototype, {
    load: function (b) {
        var a = this;
        null != b && (this.uri = b);
        var c = new lime.app.Promise();
        b = this.__backend.loadText(this.uri);
        b.onProgress(F(c, c.progress));
        b.onError(function (b) {
            a.responseData = b.responseData;
            c.error(b.error);
        });
        b.onComplete(function (b) {
            a.responseData = b;
            c.complete(a.responseData);
        });
        return c.future;
    },
    __class__: lime.net._HTTPRequest_String
})