haxe.Exception = function (b, a, c) {
    Error.call(this, b);
    this.message = b;
    this.__previousException = a;
    this.__nativeException = null != c ? c : this;
    this.__skipStack = 0;
    b = Error.prepareStackTrace;
    Error.prepareStackTrace = function (a) {
        return a.stack;
    };
    if (c instanceof Error) this.stack = c.stack;else {
        c = null;
        if (Error.captureStackTrace) Error.captureStackTrace(this, haxe.Exception), c = this;else if (c = Error(), "undefined" == typeof c.stack) {
            try {
                throw c;
            } catch (d) {}
            this.__skipStack++;
        }
        this.stack = c.stack;
    }
    Error.prepareStackTrace = b;
}
m["haxe.Exception"] = haxe.Exception
haxe.Exception.__name__ = "haxe.Exception"
haxe.Exception.caught = function (b) {
    return b instanceof haxe.Exception ? b : b instanceof Error ? new haxe.Exception(b.message, null, b) : new haxe.ValueException(b, null, b);
}
haxe.Exception.thrown = function (b) {
    if (b instanceof haxe.Exception) return b.get_native();
    if (b instanceof Error) return b;
    b = new haxe.ValueException(b);
    b.__skipStack++;
    return b;
}
haxe.Exception.__super__ = Error
haxe.Exception.prototype = z(Error.prototype, {
    unwrap: function () {
        return this.__nativeException;
    },
    toString: function () {
        return this.get_message();
    },
    __shiftStack: function () {
        this.__skipStack++;
    },
    get_message: function () {
        return this.message;
    },
    get_native: function () {
        return this.__nativeException;
    },
    get_stack: function () {
        var b = this.__exceptionStack;
        null == b && (b = haxe.NativeStackTrace.toHaxe(haxe.NativeStackTrace.normalize(this.stack), this.__skipStack), this.setProperty("__exceptionStack", b));
        return b;
    },
    setProperty: function (b, a) {
        try {
            Object.defineProperty(this, b, {
                value: a
            });
        } catch (c) {
            this[b] = a;
        }
    },
    __class__: haxe.Exception
})