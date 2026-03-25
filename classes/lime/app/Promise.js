lime.app.Promise = function () {
    this.future = new lime.app.Future();
}
m["lime.app.Promise"] = lime.app.Promise
lime.app.Promise.__name__ = "lime.app.Promise"
lime.app.Promise.prototype = {
    complete: function (b) {
        if (!this.future.isError && (this.future.isComplete = !0, this.future.value = b, null != this.future.__completeListeners)) {
            for (var a = 0, c = this.future.__completeListeners; a < c.length;) c[a++](b);
            this.future.__completeListeners = null;
        }
        return this;
    },
    completeWith: function (b) {
        b.onComplete(F(this, this.complete));
        b.onError(F(this, this.error));
        b.onProgress(F(this, this.progress));
        return this;
    },
    error: function (b) {
        if (!this.future.isComplete && (this.future.isError = !0, this.future.error = b, null != this.future.__errorListeners)) {
            for (var a = 0, c = this.future.__errorListeners; a < c.length;) c[a++](b);
            this.future.__errorListeners = null;
        }
        return this;
    },
    progress: function (b, a) {
        if (!this.future.isError && !this.future.isComplete && null != this.future.__progressListeners) for (var c = 0, d = this.future.__progressListeners; c < d.length;) d[c++](b, a);
        return this;
    },
    __class__: lime.app.Promise
}