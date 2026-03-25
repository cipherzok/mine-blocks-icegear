lime.net._HTTPRequest.AbstractHTTPRequest = function (b) {
    this.uri = b;
    this.contentType = "application/x-www-form-urlencoded";
    this.followRedirects = !0;
    this.enableResponseHeaders = !1;
    this.formData = new haxe.ds.StringMap();
    this.headers = [];
    this.method = "GET";
    this.timeout = 3E4;
    this.withCredentials = !1;
    this.manageCookies = !0;
    this.__backend = new lime._internal.backend.html5.HTML5HTTPRequest();
    this.__backend.init(this);
}
m["lime.net._HTTPRequest.AbstractHTTPRequest"] = lime.net._HTTPRequest.AbstractHTTPRequest
lime.net._HTTPRequest.AbstractHTTPRequest.__name__ = "lime.net._HTTPRequest.AbstractHTTPRequest"
lime.net._HTTPRequest.AbstractHTTPRequest.__interfaces__ = [lime.net._IHTTPRequest]
lime.net._HTTPRequest.AbstractHTTPRequest.prototype = {
    __class__: lime.net._HTTPRequest.AbstractHTTPRequest
}