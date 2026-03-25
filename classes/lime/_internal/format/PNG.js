lime._internal.format.PNG = function () {}
m["lime._internal.format.PNG"] = lime._internal.format.PNG
lime._internal.format.PNG.__name__ = "lime._internal.format.PNG"
lime._internal.format.PNG.encode = function (b) {
    if (b.get_premultiplied() || 0 != b.get_format()) b = b.clone(), b.set_premultiplied(!1), b.set_format(0);
    lime._internal.graphics.ImageCanvasUtil.convertToCanvas(b, !1);
    if (null != b.buffer.__srcCanvas) {
        b = b.buffer.__srcCanvas.toDataURL("image/png");
        b = window.atob(b.split(";base64,")[1]);
        for (var a = new haxe.io.Bytes(new ArrayBuffer(b.length)), c = 0, d = b.length; c < d;) {
            var f = c++;
            a.b[f] = HxOverrides.cca(b, f) & 255;
        }
        return a;
    }
    return null;
}