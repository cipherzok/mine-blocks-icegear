lime._internal.format.Base64 = function () {}
m["lime._internal.format.Base64"] = lime._internal.format.Base64
lime._internal.format.Base64.__name__ = "lime._internal.format.Base64"
lime._internal.format.Base64.encode = function (b) {
    var a = [],
        c = lime._internal.format.Base64.DICTIONARY,
        d = lime._internal.format.Base64.EXTENDED_DICTIONARY,
        f = b.length,
        g = Math.floor(f / 3),
        k = 2 * g;
    a.length = 2 * Math.ceil(f / 3);
    for (var h = 0, m = 0, n; m < k;) n = b.b[h] << 16 | b.b[h + 1] << 8 | b.b[h + 2], a[m] = d[n >> 12 & 4095], a[m + 1] = d[n & 4095], h += 3, m += 2;
    switch (f - 3 * g) {
    case 1:
        n = b.b[h] << 16;
        a[m] = d[n >> 12 & 4095];
        a[m + 1] = "==";
        break;
    case 2:
        n = b.b[h] << 16 | b.b[h + 1] << 8, a[m] = d[n >> 12 & 4095], a[m + 1] = c[n >> 6 & 63] + "=";
    }
    return a.join("");
}
lime._internal.format.Base64.DICTIONARY = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("")
lime._internal.format.Base64.EXTENDED_DICTIONARY = function (b) {
    b = [];
    for (var a = 0, c = lime._internal.format.Base64.DICTIONARY; a < c.length;) for (var d = c[a++], f = 0, g = lime._internal.format.Base64.DICTIONARY; f < g.length;) b.push(d + g[f++]);
    return b;
}(this)