haxe.ds._StringMap.StringMapKeyIterator = function (b) {
    this.h = b;
    this.keys = Object.keys(b);
    this.length = this.keys.length;
    this.current = 0;
}
m["haxe.ds._StringMap.StringMapKeyIterator"] = haxe.ds._StringMap.StringMapKeyIterator
haxe.ds._StringMap.StringMapKeyIterator.__name__ = "haxe.ds._StringMap.StringMapKeyIterator"
haxe.ds._StringMap.StringMapKeyIterator.prototype = {
    hasNext: function () {
        return this.current < this.length;
    },
    next: function () {
        return this.keys[this.current++];
    },
    __class__: haxe.ds._StringMap.StringMapKeyIterator
}