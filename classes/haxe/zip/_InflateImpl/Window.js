haxe.zip._InflateImpl.Window = function (b) {
    this.buffer = new haxe.io.Bytes(new ArrayBuffer(65536));
    this.pos = 0;
    b && (this.crc = new haxe.crypto.Adler32());
}
m["haxe.zip._InflateImpl.Window"] = haxe.zip._InflateImpl.Window
haxe.zip._InflateImpl.Window.__name__ = "haxe.zip._InflateImpl.Window"
haxe.zip._InflateImpl.Window.prototype = {
    slide: function () {
        null != this.crc && this.crc.update(this.buffer, 0, 32768);
        var b = new haxe.io.Bytes(new ArrayBuffer(65536));
        this.pos -= 32768;
        b.blit(0, this.buffer, 32768, this.pos);
        this.buffer = b;
    },
    addBytes: function (b, a, c) {
        65536 < this.pos + c && this.slide();
        this.buffer.blit(this.pos, b, a, c);
        this.pos += c;
    },
    addByte: function (b) {
        65536 == this.pos && this.slide();
        this.buffer.b[this.pos] = b & 255;
        this.pos++;
    },
    getLastChar: function () {
        return this.buffer.b[this.pos - 1];
    },
    available: function () {
        return this.pos;
    },
    checksum: function () {
        null != this.crc && this.crc.update(this.buffer, 0, this.pos);
        return this.crc;
    },
    __class__: haxe.zip._InflateImpl.Window
}