lime._internal.format.JPEG = function () {}
m["lime._internal.format.JPEG"] = lime._internal.format.JPEG
lime._internal.format.JPEG.__name__ = "lime._internal.format.JPEG"
lime._internal.format.JPEG.encode = function (b, a) {
    if (b.get_premultiplied() || 0 != b.get_format()) b = b.clone(), b.set_premultiplied(!1), b.set_format(0);
    lime._internal.graphics.ImageCanvasUtil.convertToCanvas(b, !1);
    if (null != b.buffer.__srcCanvas) {
        b = b.buffer.__srcCanvas.toDataURL("image/jpeg", a / 100);
        b = window.atob(b.split(";base64,")[1]);
        a = new haxe.io.Bytes(new ArrayBuffer(b.length));
        for (var c = 0, d = b.length; c < d;) {
            var f = c++;
            a.b[f] = HxOverrides.cca(b, f) & 255;
        }
        return a;
    }
    return null;
}