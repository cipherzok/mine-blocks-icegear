lime._internal.format.LZMA = function () {}
m["lime._internal.format.LZMA"] = lime._internal.format.LZMA
lime._internal.format.LZMA.__name__ = "lime._internal.format.LZMA"
lime._internal.format.LZMA.decompress = function (b) {
    var a = LZMA.decompress;
    b = b.b.bufferValue;
    b = null != b ? new Uint8Array(b, 0) : null;
    a = a(b);
    return "string" == typeof a ? haxe.io.Bytes.ofString(a) : haxe.io.Bytes.ofData(a);
}