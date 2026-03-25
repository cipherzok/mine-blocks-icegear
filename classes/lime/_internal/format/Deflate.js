lime._internal.format.Deflate = function () {}
m["lime._internal.format.Deflate"] = lime._internal.format.Deflate
lime._internal.format.Deflate.__name__ = "lime._internal.format.Deflate"
lime._internal.format.Deflate.decompress = function (b) {
    b = pako.inflateRaw(b.b.bufferValue);
    return haxe.io.Bytes.ofData(b);
}