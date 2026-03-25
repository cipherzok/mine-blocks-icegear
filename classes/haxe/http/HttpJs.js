haxe.http.HttpJs = function (b) {
    this.async = !0;
    this.withCredentials = !1;
    haxe.http.HttpBase.call(this, b);
}
m["haxe.http.HttpJs"] = haxe.http.HttpJs
haxe.http.HttpJs.__name__ = "haxe.http.HttpJs"
haxe.http.HttpJs.__super__ = haxe.http.HttpBase
haxe.http.HttpJs.prototype = z(haxe.http.HttpBase.prototype, {
    request: function (b) {
        var a = this;
        this.responseHeaders = this.responseBytes = this.responseAsString = null;
        var c = this.req = js.Browser.createXMLHttpRequest(),
            d = function (b) {
                if (4 == c.readyState) {
                    try {
                        var d = c.status;
                    } catch (kj) {
                        d = null;
                    }
                    0 == d && js.Browser.get_supported() && null != D.location && (b = D.location.protocol.toLowerCase(), new EReg("^(?:about|app|app-storage|.+-extension|file|res|widget):$", "").match(b) && (d = null != c.response ? 200 : 404));
                    void 0 == d && (d = null);
                    if (null != d) a.onStatus(d);
                    if (null != d && 200 <= d && 400 > d) {
                        a.req = null;
                        b = c.getAllResponseHeaders().split("\r\n");
                        d = [];
                        for (var f = 0; f < b.length;) {
                            var l = b[f];
                            ++f;
                            "" != l && d.push(l);
                        }
                        b = d;
                        a.responseHeaders = new haxe.ds.StringMap();
                        for (d = 0; d < b.length;) l = b[d++].split(": "), f = l.shift(), l = 1 == l.length ? l[0] : l.join(": "), l = StringTools.ltrim(StringTools.rtrim(l)), a.responseHeaders.h[f] = l;
                        a.success(haxe.io.Bytes.ofData(c.response));
                    } else if (null == d || 0 == d && null == c.response) a.req = null, a.onError("Failed to connect or resolve host");else if (null == d) a.req = null, d = null != c.response ? haxe.io.Bytes.ofData(c.response) : null, a.responseBytes = d, a.onError("Http Error #" + c.status);else switch (d) {
                    case 12007:
                        a.req = null;
                        a.onError("Unknown host");
                        break;
                    case 12029:
                        a.req = null;
                        a.onError("Failed to connect to host");
                        break;
                    default:
                        a.req = null, d = null != c.response ? haxe.io.Bytes.ofData(c.response) : null, a.responseBytes = d, a.onError("Http Error #" + c.status);
                    }
                }
            };
        this.async && (c.onreadystatechange = d);
        var f = this.postData,
            l = this.postBytes,
            k = null == f ? null == l ? null : new Blob([l.b.bufferValue]) : null == l ? f : null;
        if (null != k) b = !0;else for (f = 0, l = this.params; f < l.length;) {
            var h = l[f];
            ++f;
            k = null == k ? "" : (null == k ? "null" : Std.string(k)) + "&";
            var m = h.name;
            k = (null == k ? "null" : Std.string(k)) + encodeURIComponent(m) + "=" + encodeURIComponent(h.value);
        }
        try {
            b ? c.open("POST", this.url, this.async) : null != k ? (c.open("GET", this.url + (1 >= this.url.split("?").length ? "?" : "&") + (null == k ? "null" : Std.string(k)), this.async), k = null) : c.open("GET", this.url, this.async), c.responseType = "arraybuffer";
        } catch (rb) {
            l = haxe.Exception.caught(rb).unwrap();
            this.req = null;
            this.onError(l.toString());
            return;
        }
        c.withCredentials = this.withCredentials;
        !Lambda.exists(this.headers, function (a) {
            return "Content-Type" == a.name;
        }) && b && null == this.postData && c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        f = 0;
        for (l = this.headers; f < l.length;) b = l[f], ++f, c.setRequestHeader(b.name, b.value);
        c.send(k);
        this.async || d(null);
    },
    __class__: haxe.http.HttpJs
})