haxe.ds.IntMap = function () {
    this.h = {};
}
m["haxe.ds.IntMap"] = haxe.ds.IntMap
haxe.ds.IntMap.__name__ = "haxe.ds.IntMap"
haxe.ds.IntMap.__interfaces__ = [haxe.IMap]
haxe.ds.IntMap.prototype = {
    set: function (b, a) {
        this.h[b] = a;
    },
    get: function (b) {
        return this.h[b];
    },
    exists: function (b) {
        return this.h.hasOwnProperty(b);
    },
    remove: function (b) {
        if (!this.h.hasOwnProperty(b)) return !1;
        delete this.h[b];
        return !0;
    },
    keys: function () {
        var b = [],
            a;
        for (a in this.h) this.h.hasOwnProperty(a) && b.push(+a);
        return new haxe.iterators.ArrayIterator(b);
    },
    iterator: function () {
        return {
            ref: this.h,
            it: this.keys(),
            hasNext: function () {
                return this.it.hasNext();
            },
            next: function () {
                var b = this.it.next();
                return this.ref[b];
            }
        };
    },
    __class__: haxe.ds.IntMap
}