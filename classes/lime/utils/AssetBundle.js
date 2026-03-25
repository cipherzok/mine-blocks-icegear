lime.utils.AssetBundle = function () {
    this.data = new haxe.ds.StringMap();
    this.paths = [];
}
m["lime.utils.AssetBundle"] = lime.utils.AssetBundle
lime.utils.AssetBundle.__name__ = "lime.utils.AssetBundle"
lime.utils.AssetBundle.fromBytes = function (b) {
    return lime.utils.AssetBundle.__extractBundle(new haxe.io.BytesInput(b));
}
lime.utils.AssetBundle.loadFromBytes = function (b) {
    return lime.app.Future.withValue(lime.utils.AssetBundle.fromBytes(b));
}
lime.utils.AssetBundle.loadFromFile = function (b) {
    return vb.loadFromFile(b).then(lime.utils.AssetBundle.loadFromBytes);
}
lime.utils.AssetBundle.__extractBundle = function (b) {
    var a = haxe.zip.Reader.readZip(b);
    b = new lime.utils.AssetBundle();
    for (a = a.h; null != a;) {
        var c = a.item;
        a = a.next;
        if (c.compressed) {
            var d = b.data,
                f = c.fileName,
                g = vb.decompress(c.data, lime.utils.CompressionAlgorithm.DEFLATE);
            d.h[f] = g;
        } else b.data.h[c.fileName] = c.data;
        b.paths.push(c.fileName);
    }
    return b;
}
lime.utils.AssetBundle.prototype = {
    __class__: lime.utils.AssetBundle
}