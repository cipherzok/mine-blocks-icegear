js.Boot = function () {}
m["js.Boot"] = js.Boot
js.Boot.__name__ = "js.Boot"
js.Boot.getClass = function (b) {
    if (null == b) return null;
    if (b instanceof Array) return Array;
    var a = b.__class__;
    if (null != a) return a;
    b = js.Boot.__nativeClassName(b);
    return null != b ? js.Boot.__resolveNativeClass(b) : null;
}
js.Boot.__string_rec = function (b, a) {
    if (null == b) return "null";
    if (5 <= a.length) return "<...>";
    var c = typeof b;
    "function" == c && (b.__name__ || b.__ename__) && (c = "object");
    switch (c) {
    case "function":
        return "<function>";
    case "object":
        if (b.__enum__) {
            var d = fa[b.__enum__].__constructs__[b._hx_index];
            c = d._hx_name;
            if (d.__params__) {
                a += "\t";
                var f = [],
                    g = 0;
                for (d = d.__params__; g < d.length;) {
                    var p = d[g];
                    g += 1;
                    f.push(js.Boot.__string_rec(b[p], a));
                }
                return c + "(" + f.join(",") + ")";
            }
            return c;
        }
        if (b instanceof Array) {
            c = "[";
            a += "\t";
            f = 0;
            for (g = b.length; f < g;) d = f++, c += (0 < d ? "," : "") + js.Boot.__string_rec(b[d], a);
            return c + "]";
        }
        try {
            f = b.toString;
        } catch (Q) {
            return "???";
        }
        if (null != f && f != Object.toString && "function" == typeof f && (c = b.toString(), "[object Object]" != c)) return c;
        c = "{\n";
        a += "\t";
        f = null != b.hasOwnProperty;
        g = null;
        for (g in b) f && !b.hasOwnProperty(g) || "prototype" == g || "__class__" == g || "__super__" == g || "__interfaces__" == g || "__properties__" == g || (2 != c.length && (c += ", \n"), c += a + g + " : " + js.Boot.__string_rec(b[g], a));
        a = a.substring(1);
        return c + ("\n" + a + "}");
    case "string":
        return b;
    default:
        return String(b);
    }
}
js.Boot.__interfLoop = function (b, a) {
    for (;;) {
        if (null == b) return !1;
        if (b == a) return !0;
        var c = b.__interfaces__;
        if (null != c) for (var d = 0, f = c.length; d < f;) {
            var g = c[d++];
            if (g == a || js.Boot.__interfLoop(g, a)) return !0;
        }
        b = b.__super__;
    }
}
js.Boot.__instanceof = function (b, a) {
    if (null == a) return !1;
    switch (a) {
    case Array:
        return b instanceof Array;
    case gj:
        return "boolean" == typeof b;
    case hj:
        return null != b;
    case ie:
        return "number" == typeof b;
    case $i:
        return "number" == typeof b ? (b | 0) === b : !1;
    case String:
        return "string" == typeof b;
    default:
        if (null != b) {
            if ("function" == typeof a) {
                if (js.Boot.__downcastCheck(b, a)) return !0;
            } else {
                if ("object" == typeof a && js.Boot.__isNativeObj(a) && b instanceof a) return !0;
            }
        } else return !1;
        return a == aj && null != b.__name__ || a == bj && null != b.__ename__ ? !0 : null != b.__enum__ ? fa[b.__enum__] == a : !1;
    }
}
js.Boot.__downcastCheck = function (b, a) {
    return b instanceof a ? !0 : a.__isInterface__ ? js.Boot.__interfLoop(js.Boot.getClass(b), a) : !1;
}
js.Boot.__cast = function (b, a) {
    if (null == b || js.Boot.__instanceof(b, a)) return b;
    throw haxe.Exception.thrown("Cannot cast " + Std.string(b) + " to " + Std.string(a));
}
js.Boot.__nativeClassName = function (b) {
    b = js.Boot.__toStr.call(b).slice(8, -1);
    return "Object" == b || "Function" == b || "Math" == b || "JSON" == b ? null : b;
}
js.Boot.__isNativeObj = function (b) {
    return null != js.Boot.__nativeClassName(b);
}
js.Boot.__resolveNativeClass = function (b) {
    return D[b];
}
js.Boot.__toStr = {}.toString