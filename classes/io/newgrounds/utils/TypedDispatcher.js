io.newgrounds.utils.TypedDispatcher = function () {
    this._list = [];
    this._once = [];
}
m["io.newgrounds.utils.TypedDispatcher"] = io.newgrounds.utils.TypedDispatcher
io.newgrounds.utils.TypedDispatcher.__name__ = "io.newgrounds.utils.TypedDispatcher"
io.newgrounds.utils.TypedDispatcher.prototype = {
    add: function (b, a) {
        null == a && (a = !1);
        if (-1 != this._list.indexOf(b)) return a || -1 == this._once.indexOf(b) || HxOverrides.remove(this._once, b), !1;
        this._list.unshift(b);
        a && this._once.unshift(b);
        return !0;
    },
    dispatch: function (b) {
        for (var a = this._list.length - 1; 0 <= a;) {
            var c = this._list[a];
            HxOverrides.remove(this._once, c) && HxOverrides.remove(this._list, c);
            c(b);
            --a;
        }
    },
    __class__: io.newgrounds.utils.TypedDispatcher
}