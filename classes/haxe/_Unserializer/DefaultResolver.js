haxe._Unserializer.DefaultResolver = function () {}
m["haxe._Unserializer.DefaultResolver"] = haxe._Unserializer.DefaultResolver
haxe._Unserializer.DefaultResolver.__name__ = "haxe._Unserializer.DefaultResolver"
haxe._Unserializer.DefaultResolver.prototype = {
    resolveClass: function (b) {
        return m[b];
    },
    resolveEnum: function (b) {
        return fa[b];
    },
    __class__: haxe._Unserializer.DefaultResolver
}