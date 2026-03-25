io.newgrounds.utils.Dispatcher = function () {
    this._list = [];
    this._once = [];
}
m["io.newgrounds.utils.Dispatcher"] = io.newgrounds.utils.Dispatcher
io.newgrounds.utils.Dispatcher.__name__ = "io.newgrounds.utils.Dispatcher"
io.newgrounds.utils.Dispatcher.prototype = {
    add: function (b, a) {
        null == a && (a = !1);
        if (-1 != this._list.indexOf(b)) return a || -1 == this._once.indexOf(b) || HxOverrides.remove(this._once, b), !1;
        this._list.unshift(b);
        a && this._once.unshift(b);
        return !0;
    },
    dispatch: function () {
        for (var b = this._list.length - 1; 0 <= b;) {
            var a = this._list[b];
            HxOverrides.remove(this._once, a) && HxOverrides.remove(this._list, a);
            a();
            --b;
        }
    },
    __class__: io.newgrounds.utils.Dispatcher
}