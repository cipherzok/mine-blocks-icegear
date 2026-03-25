haxe.crypto.Adler32 = function () {
    this.a1 = 1;
    this.a2 = 0;
}
m["haxe.crypto.Adler32"] = haxe.crypto.Adler32
haxe.crypto.Adler32.__name__ = "haxe.crypto.Adler32"
haxe.crypto.Adler32.read = function (b) {
    var a = new haxe.crypto.Adler32(),
        c = b.readByte(),
        d = b.readByte();
    a.a1 = b.readByte() << 8 | b.readByte();
    a.a2 = c << 8 | d;
    return a;
}
haxe.crypto.Adler32.prototype = {
    update: function (b, a, c) {
        var d = this.a1,
            f = this.a2,
            g = a;
        for (a += c; g < a;) d = (d + b.b[g++]) % 65521, f = (f + d) % 65521;
        this.a1 = d;
        this.a2 = f;
    },
    equals: function (b) {
        return b.a1 == this.a1 ? b.a2 == this.a2 : !1;
    },
    __class__: haxe.crypto.Adler32
}