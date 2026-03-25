lime.app.Future = function (b, a) {
    if (null != b) try {
        this.value = b(), this.isComplete = !0;
    } catch (c) {
        this.error = haxe.Exception.caught(c).unwrap(), this.isError = !0;
    }
}
m["lime.app.Future"] = lime.app.Future
lime.app.Future.__name__ = "lime.app.Future"
lime.app.Future.withError = function (b) {
    var a = new lime.app.Future();
    a.isError = !0;
    a.error = b;
    return a;
}
lime.app.Future.withValue = function (b) {
    var a = new lime.app.Future();
    a.isComplete = !0;
    a.value = b;
    return a;
}
lime.app.Future.prototype = {
    onComplete: function (b) {
        null != b && (this.isComplete ? b(this.value) : this.isError || (null == this.__completeListeners && (this.__completeListeners = []), this.__completeListeners.push(b)));
        return this;
    },
    onError: function (b) {
        null != b && (this.isError ? b(this.error) : this.isComplete || (null == this.__errorListeners && (this.__errorListeners = []), this.__errorListeners.push(b)));
        return this;
    },
    onProgress: function (b) {
        null != b && (null == this.__progressListeners && (this.__progressListeners = []), this.__progressListeners.push(b));
        return this;
    },
    then: function (b) {
        if (this.isComplete) return b(this.value);
        if (this.isError) {
            var a = new lime.app.Future();
            a.isError = !0;
            a.error = this.error;
            return a;
        }
        var c = new lime.app.Promise();
        this.onError(F(c, c.error));
        this.onProgress(F(c, c.progress));
        this.onComplete(function (a) {
            a = b(a);
            a.onError(F(c, c.error));
            a.onComplete(F(c, c.complete));
        });
        return c.future;
    },
    __class__: lime.app.Future
}