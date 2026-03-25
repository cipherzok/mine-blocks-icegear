haxe.io.BytesBuffer = function () {
    this.size = this.pos = 0;
}
m["haxe.io.BytesBuffer"] = haxe.io.BytesBuffer
haxe.io.BytesBuffer.__name__ = "haxe.io.BytesBuffer"
haxe.io.BytesBuffer.prototype = {
    addByte: function (b) {
        this.pos == this.size && this.grow(1);
        this.view.setUint8(this.pos++, b);
    },
    add: function (b) {
        this.pos + b.length > this.size && this.grow(b.length);
        if (0 != this.size) {
            var a = new Uint8Array(b.b.buffer, b.b.byteOffset, b.length);
            this.u8.set(a, this.pos);
            this.pos += b.length;
        }
    },
    addBytes: function (b, a, c) {
        if (0 > a || 0 > c || a + c > b.length) throw haxe.Exception.thrown(haxe.io.Error.OutsideBounds);
        this.pos + c > this.size && this.grow(c);
        0 != this.size && (b = new Uint8Array(b.b.buffer, b.b.byteOffset + a, c), this.u8.set(b, this.pos), this.pos += c);
    },
    grow: function (b) {
        var a = this.pos + b;
        for (b = 0 == this.size ? 16 : this.size; b < a;) b = 3 * b >> 1;
        a = new ArrayBuffer(b);
        var c = new Uint8Array(a);
        0 < this.size && c.set(this.u8);
        this.size = b;
        this.buffer = a;
        this.u8 = c;
        this.view = new DataView(this.buffer);
    },
    getBytes: function () {
        if (0 == this.size) return new haxe.io.Bytes(new ArrayBuffer(0));
        var b = new haxe.io.Bytes(this.buffer);
        b.length = this.pos;
        return b;
    },
    __class__: haxe.io.BytesBuffer
}