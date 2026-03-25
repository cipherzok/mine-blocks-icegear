haxe.iterators.ArrayIterator = function (b) {
    this.current = 0;
    this.array = b;
}
m["haxe.iterators.ArrayIterator"] = haxe.iterators.ArrayIterator
haxe.iterators.ArrayIterator.__name__ = "haxe.iterators.ArrayIterator"
haxe.iterators.ArrayIterator.prototype = {
    hasNext: function () {
        return this.current < this.array.length;
    },
    next: function () {
        return this.array[this.current++];
    },
    __class__: haxe.iterators.ArrayIterator
}