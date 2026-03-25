io.newgrounds.NGLite = function (b, a, c, d) {
    null == c && (c = !1);
    null == b && (b = "test");
    this._pendingCalls = [];
    this._queuedCalls = [];
    this.appId = b;
    this.set_sessionId(a);
    this.debug = c;
    this.calls = new io.newgrounds.components.ComponentList(this);
    if (null != this.sessionId) {
        var f = this;
        this.calls.app.checkSession().addOutcomeHandler(function (a) {
            f.checkInitialSession(d, a);
        }).sendHelper();
    }
}
m["io.newgrounds.NGLite"] = io.newgrounds.NGLite
io.newgrounds.NGLite.__name__ = "io.newgrounds.NGLite"
io.newgrounds.NGLite.create = function (b, a, c) {
    null == b && (b = "test");
    io.newgrounds.NGLite.core = new io.newgrounds.NGLite(b, a, !1, c);
    io.newgrounds.NGLite.onCoreReady.dispatch();
}
io.newgrounds.NGLite.prototype = {
    markCallPending_io_newgrounds_Call_T: function (b) {
        var a = this;
        this._pendingCalls.push(b);
        b.addOutcomeHandler(function (c) {
            HxOverrides.remove(a._pendingCalls, b);
            a.checkQueue();
        });
    },
    set_sessionId: function (b) {
        return this.sessionId = "" == b ? null : b;
    },
    checkInitialSession: function (b, a) {
        switch (a._hx_index) {
        case 0:
            null != b && b(io.newgrounds.objects.events.Outcome.SUCCESS);
            break;
        case 1:
            this.initialSessionFail(b, a.error);
        }
    },
    initialSessionFail: function (b, a) {
        this.set_sessionId(null);
        null != b && b(io.newgrounds.objects.events.Outcome.FAIL(io.newgrounds.LoginFail.ERROR(a)));
    },
    checkQueue: function () {
        0 == this._pendingCalls.length && 0 < this._queuedCalls.length && this._queuedCalls.shift().send();
    },
    log: function (b, a) {
        haxe.Log.trace("[Newgrounds API] :: " + Std.string(b), a);
    },
    logError: function (b, a) {
        this.log("Error: " + Std.string(b), a);
    },
    setupEncryption: function (b, a, c) {
        null == c && (c = "base64");
        null == a && (a = "aes128");
        this.encryptionHandler = null;
        var d = jj.generateEncrypter(a, cj.decode(c, b));
        null != d && (this.encryptionHandler = function (a) {
            return cj.encode(c, d(haxe.io.Bytes.ofString(a)));
        });
    },
    __class__: io.newgrounds.NGLite
}
io.newgrounds.NGLite.onCoreReady = new io.newgrounds.utils.Dispatcher()