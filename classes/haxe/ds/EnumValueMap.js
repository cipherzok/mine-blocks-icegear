haxe.ds.EnumValueMap = function () {}
m["haxe.ds.EnumValueMap"] = haxe.ds.EnumValueMap
haxe.ds.EnumValueMap.__name__ = "haxe.ds.EnumValueMap"
haxe.ds.EnumValueMap.__interfaces__ = [haxe.IMap]
haxe.ds.EnumValueMap.__super__ = haxe.ds.BalancedTree
haxe.ds.EnumValueMap.prototype = z(haxe.ds.BalancedTree.prototype, {
    compare: function (b, a) {
        var c = b._hx_index - a._hx_index;
        if (0 != c) return c;
        b = Type.enumParameters(b);
        a = Type.enumParameters(a);
        return 0 == b.length && 0 == a.length ? 0 : this.compareArgs(b, a);
    },
    compareArgs: function (b, a) {
        var c = b.length - a.length;
        if (0 != c) return c;
        c = 0;
        for (var d = b.length; c < d;) {
            var f = c++;
            f = this.compareArg(b[f], a[f]);
            if (0 != f) return f;
        }
        return 0;
    },
    compareArg: function (b, a) {
        return Reflect.isEnumValue(b) && Reflect.isEnumValue(a) ? this.compare(b, a) : b instanceof Array && a instanceof Array ? this.compareArgs(b, a) : Reflect.compare(b, a);
    },
    __class__: haxe.ds.EnumValueMap
})