io.newgrounds.crypto._Aes.PKCS7 = function () {}
m["io.newgrounds.crypto._Aes.PKCS7"] = io.newgrounds.crypto._Aes.PKCS7
io.newgrounds.crypto._Aes.PKCS7.__name__ = "io.newgrounds.crypto._Aes.PKCS7"
io.newgrounds.crypto._Aes.PKCS7.pad = function (b) {
    var a = new haxe.io.BytesBuffer();
    a.addBytes(b, 0, b.length);
    b = 16 - b.length % 16;
    for (var c = 0; c < b;) ++c, a.addByte(b & 255);
    return a.getBytes();
}