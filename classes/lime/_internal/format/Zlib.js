lime._internal.format.Zlib = function () {}
m["lime._internal.format.Zlib"] = lime._internal.format.Zlib
lime._internal.format.Zlib.__name__ = "lime._internal.format.Zlib"
lime._internal.format.Zlib.decompress = function (b) {
    b = pako.inflate(b.b.bufferValue);
    return haxe.io.Bytes.ofData(b);
}