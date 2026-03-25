haxe.io.Input = function () {}
m["haxe.io.Input"] = haxe.io.Input
haxe.io.Input.__name__ = "haxe.io.Input"
haxe.io.Input.prototype = {
    readByte: function () {
        throw new haxe.exceptions.NotImplementedException(null, null, {
            fileName: "haxe/io/Input.hx",
            lineNumber: 53,
            className: "haxe.io.Input",
            methodName: "readByte"
        });
    },
    readBytes: function (b, a, c) {
        var d = c,
            f = b.b;
        if (0 > a || 0 > c || a + c > b.length) throw haxe.Exception.thrown(haxe.io.Error.OutsideBounds);
        try {
            for (; 0 < d;) f[a] = this.readByte(), ++a, --d;
        } catch (l) {
            if (!(haxe.Exception.caught(l).unwrap() instanceof haxe.io.Eof)) throw l;
        }
        return c - d;
    },
    readFullBytes: function (b, a, c) {
        for (; 0 < c;) {
            var d = this.readBytes(b, a, c);
            if (0 == d) throw haxe.Exception.thrown(haxe.io.Error.Blocked);
            a += d;
            c -= d;
        }
    },
    read: function (b) {
        for (var a = new haxe.io.Bytes(new ArrayBuffer(b)), c = 0; 0 < b;) {
            var d = this.readBytes(a, c, b);
            if (0 == d) throw haxe.Exception.thrown(haxe.io.Error.Blocked);
            c += d;
            b -= d;
        }
        return a;
    },
    readInt16: function () {
        var b = this.readByte(),
            a = this.readByte();
        b = this.bigEndian ? a | b << 8 : b | a << 8;
        return 0 != (b & 32768) ? b - 65536 : b;
    },
    readUInt16: function () {
        var b = this.readByte(),
            a = this.readByte();
        return this.bigEndian ? a | b << 8 : b | a << 8;
    },
    readInt32: function () {
        var b = this.readByte(),
            a = this.readByte(),
            c = this.readByte(),
            d = this.readByte();
        return this.bigEndian ? d | c << 8 | a << 16 | b << 24 : b | a << 8 | c << 16 | d << 24;
    },
    readString: function (b, a) {
        var c = new haxe.io.Bytes(new ArrayBuffer(b));
        this.readFullBytes(c, 0, b);
        return c.getString(0, b, a);
    },
    __class__: haxe.io.Input
}