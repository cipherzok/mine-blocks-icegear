lime._internal.format.GZip = function () {}
m["lime._internal.format.GZip"] = lime._internal.format.GZip
lime._internal.format.GZip.__name__ = "lime._internal.format.GZip"
lime._internal.format.GZip.decompress = function (b) {
    b = pako.ungzip(b.b.bufferValue);
    return haxe.io.Bytes.ofData(b);
}