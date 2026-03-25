io.newgrounds.Call = function (b, a, c, d) {
    null == d && (d = !1);
    null == c && (c = !1);
    this._core = b;
    this.component = a;
    this._requireSession = c;
    this._isSecure = d && null != b.encryptionHandler;
}
m["io.newgrounds.Call"] = io.newgrounds.Call
io.newgrounds.Call.__name__ = "io.newgrounds.Call"
io.newgrounds.Call.__interfaces__ = [io.newgrounds.ICallable]
io.newgrounds.Call.prototype = {
    addProperty: function (b, a) {
        null == this._properties && (this._properties = new haxe.ds.StringMap());
        this._properties.h[b] = a;
        return this;
    },
    addComponentParameter: function (b, a, c) {
        if (a == c) return this;
        null == this._parameters && (this._parameters = new haxe.ds.StringMap());
        this._parameters.h[b] = a;
        return this;
    },
    addResponseHandler: function (b) {
        null == this._responseHandlers && (this._responseHandlers = new io.newgrounds.utils.TypedDispatcher());
        this._responseHandlers.add(b);
        return this;
    },
    addSuccessHandler: function (b) {
        null == this._successHandlers && (this._successHandlers = new io.newgrounds.utils.Dispatcher());
        this._successHandlers.add(b);
        return this;
    },
    addOutcomeHandler: function (b) {
        null == this._outcomeHandlers && (this._outcomeHandlers = new io.newgrounds.utils.TypedDispatcher());
        this._outcomeHandlers.add(b);
        return this;
    },
    send: function () {
        this.sendHelper();
    },
    sendHelper: function (b) {
        var a = null != b,
            c = {};
        c.app_id = a ? b : this._core.appId;
        c.call = {};
        c.call.component = this.component;
        this._core.debug && this.addProperty("debug", !0);
        if (null == this._properties || !Object.prototype.hasOwnProperty.call(this._properties.h, "session_id")) if (null != this._core.sessionId && 0 == a) this.addProperty("session_id", this._core.sessionId);else if (this._requireSession) {
            a ? this._core.logError({
                message: 'cannot send "' + this.component + '" call to an external app',
                code: null
            }, {
                fileName: "io/newgrounds/Call.hx",
                lineNumber: 180,
                className: "io.newgrounds.Call",
                methodName: "sendHelper"
            }) : this._core.logError({
                message: 'cannot send "' + this.component + '" call without a sessionId',
                code: null
            }, {
                fileName: "io/newgrounds/Call.hx",
                lineNumber: 182,
                className: "io.newgrounds.Call",
                methodName: "sendHelper"
            });
            return;
        }
        if (null != this._properties) {
            b = Object.keys(this._properties.h);
            for (var d = b.length, f = 0; f < d;) {
                var g = b[f++];
                c[g] = this._properties.h[g];
            }
        }
        if (null != this._parameters) for (c.call.parameters = {}, b = Object.keys(this._parameters.h), d = b.length, f = 0; f < d;) g = b[f++], c.call.parameters[g] = this._parameters.h[g];
        b = this._core;
        d = "Post  - " + JSON.stringify(c);
        b.verbose && b.log(d, {
            fileName: "io/newgrounds/Call.hx",
            lineNumber: 202,
            className: "io.newgrounds.Call",
            methodName: "sendHelper"
        });
        if (this._isSecure) {
            if (a) {
                this._core.logError({
                    message: 'cannot send "' + this.component + '" call to an external app that requires encryption',
                    code: null
                }, {
                    fileName: "io/newgrounds/Call.hx",
                    lineNumber: 208,
                    className: "io.newgrounds.Call",
                    methodName: "sendHelper"
                });
                return;
            }
            a = this._core.encryptionHandler(JSON.stringify(c.call));
            c.call = {};
            c.call.secure = a;
            b = this._core;
            b.verbose && b.log("    secure - " + a, {
                fileName: "io/newgrounds/Call.hx",
                lineNumber: 216,
                className: "io.newgrounds.Call",
                methodName: "sendHelper"
            });
        }
        this._core.markCallPending_io_newgrounds_Call_T(this);
        io.newgrounds.utils.AsyncNGCall.send(this._core, JSON.stringify(c), F(this, this.onData), F(this, this.onHttpError), F(this, this.onStatus));
    },
    onData: function (b) {
        var a = this._core;
        a.verbose && a.log("Reply - " + b, {
            fileName: "io/newgrounds/Call.hx",
            lineNumber: 232,
            className: "io.newgrounds.Call",
            methodName: "onData"
        });
        if (null != this._responseHandlers || null != this._successHandlers || null != this._outcomeHandlers) b = ij._new(this._core, b), null != this._outcomeHandlers && (0 == b.success ? this._outcomeHandlers.dispatch(io.newgrounds.objects.events.TypedOutcome.FAIL(io.newgrounds.CallError.RESPONSE(b.error))) : 0 == b.result.data.success ? this._outcomeHandlers.dispatch(io.newgrounds.objects.events.TypedOutcome.FAIL(io.newgrounds.CallError.RESULT(b.result.data.error))) : this._outcomeHandlers.dispatch(io.newgrounds.objects.events.TypedOutcome.SUCCESS(b.result.data))), null != this._responseHandlers && this._responseHandlers.dispatch(b), b.success && b.result.data.success && null != this._successHandlers && this._successHandlers.dispatch(), this.destroy();
    },
    onHttpError: function (b) {
        this._core.logError(b, {
            fileName: "io/newgrounds/Call.hx",
            lineNumber: 260,
            className: "io.newgrounds.Call",
            methodName: "onHttpError"
        });
        null != this._outcomeHandlers && this._outcomeHandlers.dispatch(io.newgrounds.objects.events.TypedOutcome.FAIL(io.newgrounds.CallError.HTTP(b)));
        null != this._httpErrorHandlers && this._httpErrorHandlers.dispatch({
            message: b,
            code: null
        });
    },
    onStatus: function (b) {
        null != this._statusHandlers && this._statusHandlers.dispatch(b);
    },
    destroy: function () {
        this._outcomeHandlers = this._statusHandlers = this._httpErrorHandlers = this._successHandlers = this._responseHandlers = this._parameters = this._properties = this._core = null;
    },
    __class__: io.newgrounds.Call
}