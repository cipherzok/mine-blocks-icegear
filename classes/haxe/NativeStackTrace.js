haxe.NativeStackTrace = function () {}
m["haxe.NativeStackTrace"] = haxe.NativeStackTrace
haxe.NativeStackTrace.__name__ = "haxe.NativeStackTrace"
haxe.NativeStackTrace.toHaxe = function (b, a) {
    null == a && (a = 0);
    if (null == b) return [];
    if ("string" == typeof b) {
        b = b.split("\n");
        "Error" == b[0] && b.shift();
        for (var c = [], d = 0, f = b.length; d < f;) {
            var g = d++;
            if (!(a > g)) {
                var k = b[g];
                g = k.match(/^    at ([$A-Za-z0-9_. ]+) \(([^)]+):([0-9]+):([0-9]+)\)$/);
                if (null != g) {
                    k = g[1].split(".");
                    "$hxClasses" == k[0] && k.shift();
                    var h = k.pop(),
                        m = g[2],
                        n = Std.parseInt(g[3]);
                    g = Std.parseInt(g[4]);
                    c.push(haxe.StackItem.FilePos("Anonymous function" == h ? haxe.StackItem.LocalFunction() : "Global code" == h ? null : haxe.StackItem.Method(k.join("."), h), m, n, g));
                } else c.push(haxe.StackItem.Module(StringTools.trim(k)));
            }
        }
        return c;
    }
    return 0 < a && Array.isArray(b) ? b.slice(a) : b;
}
haxe.NativeStackTrace.normalize = function (b, a) {
    null == a && (a = 0);
    if (Array.isArray(b) && 0 < a) return b.slice(a);
    if ("string" == typeof b) {
        switch (b.substring(0, 6)) {
        case "Error\n":
        case "Error:":
            ++a;
        }
        return haxe.NativeStackTrace.skipLines(b, a);
    }
    return b;
}
haxe.NativeStackTrace.skipLines = function (b, a, c) {
    for (null == c && (c = 0);;) if (0 < a) {
        c = b.indexOf("\n", c);
        if (0 > c) return "";
        a = --a;
        c += 1;
    } else return b.substring(c);
}