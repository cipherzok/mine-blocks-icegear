haxe.io.Bytes = function (b) {
    this.length = b.byteLength;
    this.b = new Uint8Array(b);
    this.b.bufferValue = b;
    b.hxBytes = this;
    b.bytes = this.b;
}
m["haxe.io.Bytes"] = haxe.io.Bytes
haxe.io.Bytes.__name__ = "haxe.io.Bytes"
haxe.io.Bytes.ofString = function (b, a) {
    a = [];
    for (var c = 0; c < b.length;) {
        var d = b.charCodeAt(c++);
        55296 <= d && 56319 >= d && (d = d - 55232 << 10 | b.charCodeAt(c++) & 1023);
        127 >= d ? a.push(d) : (2047 >= d ? a.push(192 | d >> 6) : (65535 >= d ? a.push(224 | d >> 12) : (a.push(240 | d >> 18), a.push(128 | d >> 12 & 63)), a.push(128 | d >> 6 & 63)), a.push(128 | d & 63));
    }
    return new haxe.io.Bytes(new Uint8Array(a).buffer);
}
haxe.io.Bytes.ofData = function (b) {
    var a = b.hxBytes;
    return null != a ? a : new haxe.io.Bytes(b);
}
haxe.io.Bytes.ofHex = function (b) {
    if (0 != (b.length & 1)) throw haxe.Exception.thrown("Not a hex string (odd number of digits)");
    for (var a = [], c = 0, d = b.length >> 1; c < d;) {
        var f = b.charCodeAt(2 * c),
            g = b.charCodeAt(2 * c + 1);
        f = (f & 15) + 9 * ((f & 64) >> 6);
        g = (g & 15) + 9 * ((g & 64) >> 6);
        a.push((f << 4 | g) & 255);
        ++c;
    }
    return new haxe.io.Bytes(new Uint8Array(a).buffer);
}
haxe.io.Bytes.prototype = {
    blit: function (b, a, c, d) {
        if (0 > b || 0 > c || 0 > d || b + d > this.length || c + d > a.length) throw haxe.Exception.thrown(haxe.io.Error.OutsideBounds);
        0 == c && d == a.b.byteLength ? this.b.set(a.b, b) : this.b.set(a.b.subarray(c, c + d), b);
    },
    sub: function (b, a) {
        if (0 > b || 0 > a || b + a > this.length) throw haxe.Exception.thrown(haxe.io.Error.OutsideBounds);
        return new haxe.io.Bytes(this.b.buffer.slice(b + this.b.byteOffset, b + this.b.byteOffset + a));
    },
    setUInt16: function (b, a) {
        null == this.data && (this.data = new DataView(this.b.buffer, this.b.byteOffset, this.b.byteLength));
        this.data.setUint16(b, a, !0);
    },
    getInt32: function (b) {
        null == this.data && (this.data = new DataView(this.b.buffer, this.b.byteOffset, this.b.byteLength));
        return this.data.getInt32(b, !0);
    },
    setInt32: function (b, a) {
        null == this.data && (this.data = new DataView(this.b.buffer, this.b.byteOffset, this.b.byteLength));
        this.data.setInt32(b, a, !0);
    },
    getString: function (b, a, c) {
        if (0 > b || 0 > a || b + a > this.length) throw haxe.Exception.thrown(haxe.io.Error.OutsideBounds);
        c = "";
        var d = this.b,
            f = _String.String_Impl_.fromCharCode,
            g = b;
        for (b += a; g < b;) if (a = d[g++], 128 > a) {
            if (0 == a) break;
            c += f(a);
        } else 224 > a ? c += f((a & 63) << 6 | d[g++] & 127) : 240 > a ? c += f((a & 31) << 12 | (d[g++] & 127) << 6 | d[g++] & 127) : (a = (a & 15) << 18 | (d[g++] & 127) << 12 | (d[g++] & 127) << 6 | d[g++] & 127, c += f((a >> 10) + 55232), c += f(a & 1023 | 56320));
        return c;
    },
    toString: function () {
        return this.getString(0, this.length);
    },
    toHex: function () {
        for (var b = "", a = [], c = 0, d = 16; c < d;) a.push(HxOverrides.cca("0123456789abcdef", c++));
        c = 0;
        for (d = this.length; c < d;) {
            var f = this.b[c++];
            b += String.fromCodePoint(a[f >> 4]);
            b += String.fromCodePoint(a[f & 15]);
        }
        return b;
    },
    __class__: haxe.io.Bytes
}