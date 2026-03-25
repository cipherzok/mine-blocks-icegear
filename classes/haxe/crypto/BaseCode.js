haxe.crypto.BaseCode = function (b) {
    for (var a = b.length, c = 1; a > 1 << c;) ++c;
    if (8 < c || a != 1 << c) throw haxe.Exception.thrown("BaseCode : base length must be a power of two.");
    this.base = b;
    this.nbits = c;
}
m["haxe.crypto.BaseCode"] = haxe.crypto.BaseCode
haxe.crypto.BaseCode.__name__ = "haxe.crypto.BaseCode"
haxe.crypto.BaseCode.prototype = {
    encodeBytes: function (b) {
        for (var a = this.nbits, c = this.base, d = 8 * b.length / a | 0, f = new haxe.io.Bytes(new ArrayBuffer(d + (0 == 8 * b.length % a ? 0 : 1))), g = 0, k = 0, h = (1 << a) - 1, m = 0, n = 0; n < d;) {
            for (; k < a;) k += 8, g <<= 8, g |= b.b[m++];
            k -= a;
            f.b[n++] = c.b[g >> k & h] & 255;
        }
        0 < k && (f.b[n++] = c.b[g << a - k & h] & 255);
        return f;
    },
    initTable: function () {
        for (var b = [], a = 0; 256 > a;) b[a++] = -1;
        a = 0;
        for (var c = this.base.length; a < c;) {
            var d = a++;
            b[this.base.b[d]] = d;
        }
        this.tbl = b;
    },
    decodeBytes: function (b) {
        var a = this.nbits;
        null == this.tbl && this.initTable();
        for (var c = this.tbl, d = b.length * a >> 3, f = new haxe.io.Bytes(new ArrayBuffer(d)), g = 0, k = 0, h = 0, m = 0; m < d;) {
            for (; 8 > k;) {
                k += a;
                g <<= a;
                var n = c[b.b[h++]];
                if (-1 == n) throw haxe.Exception.thrown("BaseCode : invalid encoded char");
                g |= n;
            }
            k -= 8;
            f.b[m++] = g >> k & 255;
        }
        return f;
    },
    __class__: haxe.crypto.BaseCode
}