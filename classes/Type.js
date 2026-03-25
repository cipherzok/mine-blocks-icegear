var Type = function () {};
m.Type = Type
Type.__name__ = "Type"
Type.createInstance = function (b, a) {
    return new (Function.prototype.bind.apply(b, [null].concat(a)))();
}
Type.createEnum = function (b, a, c) {
    var d = Reflect.field(b, a);
    if (null == d) throw haxe.Exception.thrown("No such constructor " + a);
    if (Reflect.isFunction(d)) {
        if (null == c) throw haxe.Exception.thrown("Constructor " + a + " need parameters");
        return d.apply(b, c);
    }
    if (null != c && 0 != c.length) throw haxe.Exception.thrown("Constructor " + a + " does not need parameters");
    return d;
}
Type.typeof = function (b) {
    switch (typeof b) {
    case "boolean":
        return ValueType.TBool;
    case "function":
        return b.__name__ || b.__ename__ ? ValueType.TObject : ValueType.TFunction;
    case "number":
        return Math.ceil(b) == b % 2147483648 ? ValueType.TInt : ValueType.TFloat;
    case "object":
        if (null == b) return ValueType.TNull;
        var a = b.__enum__;
        if (null != a) return ValueType.TEnum(fa[a]);
        b = js.Boot.getClass(b);
        return null != b ? ValueType.TClass(b) : ValueType.TObject;
    case "string":
        return ValueType.TClass(String);
    case "undefined":
        return ValueType.TNull;
    default:
        return ValueType.TUnknown;
    }
}
Type.enumParameters = function (b) {
    var a = fa[b.__enum__].__constructs__[b._hx_index].__params__;
    if (null != a) {
        for (var c = [], d = 0; d < a.length;) {
            var f = a[d];
            ++d;
            c.push(b[f]);
        }
        return c;
    }
    return [];
}