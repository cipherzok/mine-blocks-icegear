var Reflect = function () {};
m.Reflect = Reflect
Reflect.__name__ = "Reflect"
Reflect.field = function (b, a) {
    try {
        return b[a];
    } catch (c) {
        return null;
    }
}
Reflect.fields = function (b) {
    var a = [];
    if (null != b) {
        var c = Object.prototype.hasOwnProperty,
            d;
        for (d in b) "__id__" != d && "hx__closures__" != d && c.call(b, d) && a.push(d);
    }
    return a;
}
Reflect.isFunction = function (b) {
    return "function" == typeof b ? !(b.__name__ || b.__ename__) : !1;
}
Reflect.compare = function (b, a) {
    return b == a ? 0 : b > a ? 1 : -1;
}
Reflect.isEnumValue = function (b) {
    return null != b ? null != b.__enum__ : !1;
}
Reflect.deleteField = function (b, a) {
    if (!Object.prototype.hasOwnProperty.call(b, a)) return !1;
    delete b[a];
    return !0;
}