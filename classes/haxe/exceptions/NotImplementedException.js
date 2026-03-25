haxe.exceptions.NotImplementedException = function (b, a, c) {
    null == b && (b = "Not implemented");
    haxe.exceptions.PosException.call(this, b, a, c);
    this.__skipStack++;
}
m["haxe.exceptions.NotImplementedException"] = haxe.exceptions.NotImplementedException
haxe.exceptions.NotImplementedException.__name__ = "haxe.exceptions.NotImplementedException"
haxe.exceptions.NotImplementedException.__super__ = haxe.exceptions.PosException
haxe.exceptions.NotImplementedException.prototype = z(haxe.exceptions.PosException.prototype, {
    __class__: haxe.exceptions.NotImplementedException
})