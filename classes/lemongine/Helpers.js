lemongine.Helpers = function () {}
m["lemongine.Helpers"] = lemongine.Helpers
lemongine.Helpers.__name__ = "lemongine.Helpers"
lemongine.Helpers.getQualifiedClassName = function (b) {
    return b instanceof Array ? "Array" : "string" == typeof b ? "String" : "number" == typeof b && (b | 0) === b ? "int" : "number" == typeof b ? "Number" : "boolean" == typeof b ? "Boolean" : "Object";
}
lemongine.Helpers.tripleEqual = function (b, a) {
    return b != a ? !1 : null != js.Boot.getClass(b) ? js.Boot.getClass(b) == js.Boot.getClass(a) : Type.typeof(b) == Type.typeof(a);
}
lemongine.Helpers.getTimer = function () {
    return Math.floor(new Date().getTime() / 1E3 * 1E3);
}
lemongine.Helpers.clone = function (b) {
    var a = new haxe.ds.StringMap();
    a.h.value = b;
    return lemongine.Helpers.mappifyObjectsInMap(JSON.parse(JSON.stringify(lemongine.Helpers.objectifyObjectsInMap(a)))).h.value;
}
lemongine.Helpers.trim = function (b) {
    return null == b ? "" : StringTools.trim(b);
}
lemongine.Helpers.restrict = function (b, a) {
    return new EReg("[^" + a + "]", "g").split(b).join("");
}
lemongine.Helpers.mappifyObjectsInMap = function (b) {
    for (var a = new haxe.ds.StringMap(), c = 0, d = Reflect.fields(b); c < d.length;) {
        var f = d[c];
        ++c;
        if (null == Reflect.field(b, f)) a.h[f] = null;else if ("Object" == lemongine.Helpers.getQualifiedClassName(Reflect.field(b, f))) {
            var l = lemongine.Helpers.mappifyObjectsInMap(Reflect.field(b, f));
            a.h[f] = l;
        } else "Array" == lemongine.Helpers.getQualifiedClassName(Reflect.field(b, f)) ? (l = lemongine.Helpers.mappifyObjectsInArray(Reflect.field(b, f)), a.h[f] = l) : a.h[f] = Reflect.field(b, f);
    }
    return a;
}
lemongine.Helpers.mappifyObjectsInArray = function (b) {
    for (var a = [], c = 0, d = b.length; c < d;) {
        var f = c++;
        null == b[f] ? a[f] = null : "Object" == lemongine.Helpers.getQualifiedClassName(b[f]) ? a[f] = lemongine.Helpers.mappifyObjectsInMap(b[f]) : "Array" == lemongine.Helpers.getQualifiedClassName(b[f]) ? a[f] = lemongine.Helpers.mappifyObjectsInArray(b[f]) : a[f] = b[f];
    }
    return a;
}
lemongine.Helpers.objectifyObjectsInMap = function (b) {
    for (var a = {}, c = Object.keys(b.h), d = c.length, f = 0; f < d;) {
        var g = c[f++];
        null == b.h[g] ? a[g] = null : "Object" == lemongine.Helpers.getQualifiedClassName(b.h[g]) ? a[g] = lemongine.Helpers.objectifyObjectsInMap(b.h[g]) : "Array" == lemongine.Helpers.getQualifiedClassName(b.h[g]) ? a[g] = lemongine.Helpers.objectifyObjectsInArray(b.h[g]) : a[g] = b.h[g];
    }
    return a;
}
lemongine.Helpers.objectifyObjectsInArray = function (b) {
    for (var a = [], c = 0, d = b.length; c < d;) {
        var f = c++;
        null == b[f] ? a[f] = null : "Object" == lemongine.Helpers.getQualifiedClassName(b[f]) ? a[f] = lemongine.Helpers.objectifyObjectsInMap(b[f]) : "Array" == lemongine.Helpers.getQualifiedClassName(b[f]) ? a[f] = lemongine.Helpers.objectifyObjectsInArray(b[f]) : a[f] = b[f];
    }
    return a;
}
lemongine.Helpers.mapConcat = function (b, a, c) {
    null == c && (c = !0);
    if (null == a) return b;
    for (var d = a.keys(); d.hasNext();) {
        var f = d.next();
        !c && b.exists(f) || b.set(f, a.get(f));
    }
    return b;
}