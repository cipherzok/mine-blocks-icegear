haxe.ds.StringMap = function () {
    this.h = Object.create(null);
}
m["haxe.ds.StringMap"] = haxe.ds.StringMap
haxe.ds.StringMap.__name__ = "haxe.ds.StringMap"
haxe.ds.StringMap.__interfaces__ = [haxe.IMap]
haxe.ds.StringMap.prototype = {
    exists: function (b) {
        return Object.prototype.hasOwnProperty.call(this.h, b);
    },
    get: function (b) {
        return this.h[b];
    },
    set: function (b, a) {
        this.h[b] = a;
    },
    keys: function () {
        return new haxe.ds._StringMap.StringMapKeyIterator(this.h);
    },
    __class__: haxe.ds.StringMap
}