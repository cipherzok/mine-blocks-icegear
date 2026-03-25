lemongine.Sort = function () {}
m["lemongine.Sort"] = lemongine.Sort
lemongine.Sort.__name__ = "lemongine.Sort"
lemongine.Sort.insert = function (b, a, c, d) {
    null == d && (d = !1);
    if (0 == b.length) b.push(a);else {
        null == c && (c = function (a, b) {
            return a - b;
        });
        for (var f = 0, g = b.length - 1;;) {
            var k = Math.floor((g + f) / 2),
                h = c(a, b[k]);
            if (0 >= g - f) {
                0 <= h ? b.splice(k + 1, 0, a) : b.splice(k, 0, a);
                break;
            }
            if (d || 0 != h) 0 <= h ? f = k + 1 : g = k;else {
                b.splice(k + 1, 0, a);
                break;
            }
        }
    }
}