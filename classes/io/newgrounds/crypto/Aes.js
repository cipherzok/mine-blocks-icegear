io.newgrounds.crypto.Aes = function (b) {
    this.key = b;
    this.roundKey = io.newgrounds.crypto._Aes.CBC.keyExpansion(b);
}
m["io.newgrounds.crypto.Aes"] = io.newgrounds.crypto.Aes
io.newgrounds.crypto.Aes.__name__ = "io.newgrounds.crypto.Aes"
io.newgrounds.crypto.Aes.generateIV = function (b) {
    null == b && (b = 16);
    for (var a = new haxe.io.Bytes(new ArrayBuffer(b)), c = 0; c < b;) {
        var d = Math.floor(256 * Math.random());
        a.b[c++] = d & 255;
    }
    return a;
}
io.newgrounds.crypto.Aes.prototype = {
    encrypt: function (b) {
        var a = io.newgrounds.crypto.Aes.generateIV();
        b = io.newgrounds.crypto._Aes.CBC.encrypt(io.newgrounds.crypto._Aes.PKCS7.pad(b), a, this);
        var c = new haxe.io.BytesBuffer();
        c.add(a);
        c.add(b);
        return c.getBytes();
    },
    __class__: io.newgrounds.crypto.Aes
}