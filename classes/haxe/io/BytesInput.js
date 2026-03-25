haxe.io.BytesInput = function (b, a, c) {
    null == a && (a = 0);
    null == c && (c = b.length - a);
    if (0 > a || 0 > c || a + c > b.length) throw haxe.Exception.thrown(haxe.io.Error.OutsideBounds);
    this.b = b.b;
    this.pos = a;
    this.totlen = this.len = c;
}
m["haxe.io.BytesInput"] = haxe.io.BytesInput
haxe.io.BytesInput.__name__ = "haxe.io.BytesInput"
haxe.io.BytesInput.__super__ = haxe.io.Input
haxe.io.BytesInput.prototype = z(haxe.io.Input.prototype, {
    readByte: function () {
        if (0 == this.len) throw haxe.Exception.thrown(new haxe.io.Eof());
        this.len--;
        return this.b[this.pos++];
    },
    readBytes: function (b, a, c) {
        if (0 > a || 0 > c || a + c > b.length) throw haxe.Exception.thrown(haxe.io.Error.OutsideBounds);
        if (0 == this.len && 0 < c) throw haxe.Exception.thrown(new haxe.io.Eof());
        this.len < c && (c = this.len);
        var d = this.b;
        b = b.b;
        for (var f = 0, g = c; f < g;) {
            var k = f++;
            b[a + k] = d[this.pos + k];
        }
        this.pos += c;
        this.len -= c;
        return c;
    },
    __class__: haxe.io.BytesInput
})