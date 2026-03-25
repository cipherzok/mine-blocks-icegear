haxe.ds.ObjectMap = function () {
    this.h = {
        __keys__: {}
    };
}
m["haxe.ds.ObjectMap"] = haxe.ds.ObjectMap
haxe.ds.ObjectMap.__name__ = "haxe.ds.ObjectMap"
haxe.ds.ObjectMap.__interfaces__ = [haxe.IMap]
haxe.ds.ObjectMap.prototype = {
    set: function (b, a) {
        var c = b.__id__;
        null == c && (c = b.__id__ = D.$haxeUID++);
        this.h[c] = a;
        this.h.__keys__[c] = b;
    },
    get: function (b) {
        return this.h[b.__id__];
    },
    exists: function (b) {
        return null != this.h.__keys__[b.__id__];
    },
    remove: function (b) {
        b = b.__id__;
        if (null == this.h.__keys__[b]) return !1;
        delete this.h[b];
        delete this.h.__keys__[b];
        return !0;
    },
    keys: function () {
        var b = [],
            a;
        for (a in this.h.__keys__) this.h.hasOwnProperty(a) && b.push(this.h.__keys__[a]);
        return new haxe.iterators.ArrayIterator(b);
    },
    __class__: haxe.ds.ObjectMap
}