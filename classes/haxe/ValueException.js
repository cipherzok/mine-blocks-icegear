haxe.ValueException = function (b, a, c) {
    haxe.Exception.call(this, String(b), a, c);
    this.value = b;
    this.__skipStack++;
}
m["haxe.ValueException"] = haxe.ValueException
haxe.ValueException.__name__ = "haxe.ValueException"
haxe.ValueException.__super__ = haxe.Exception
haxe.ValueException.prototype = z(haxe.Exception.prototype, {
    unwrap: function () {
        return this.value;
    },
    __class__: haxe.ValueException
})