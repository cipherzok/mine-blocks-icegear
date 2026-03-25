lime._internal.graphics.ImageCanvasUtil = function () {}
m["lime._internal.graphics.ImageCanvasUtil"] = lime._internal.graphics.ImageCanvasUtil
lime._internal.graphics.ImageCanvasUtil.__name__ = "lime._internal.graphics.ImageCanvasUtil"
lime._internal.graphics.ImageCanvasUtil.convertToCanvas = function (b, a) {
    null == a && (a = !1);
    var c = b.buffer;
    null != c.__srcImage ? (null == c.__srcCanvas && (lime._internal.graphics.ImageCanvasUtil.createCanvas(b, c.__srcImage.width, c.__srcImage.height), c.__srcContext.drawImage(c.__srcImage, 0, 0)), c.__srcImage = null) : null == c.__srcCanvas && null != c.data ? (b.set_transparent(!0), lime._internal.graphics.ImageCanvasUtil.createCanvas(b, c.width, c.height), lime._internal.graphics.ImageCanvasUtil.createImageData(b), c.__srcContext.putImageData(c.__srcImageData, 0, 0)) : b.type == lime.graphics.ImageType.DATA && null != c.__srcImageData && b.dirty && (c.__srcContext.putImageData(c.__srcImageData, 0, 0), b.dirty = !1);
    a ? (c.data = null, c.__srcImageData = null) : null == c.data && null != c.__srcImageData && (c.data = c.__srcImageData.data);
    b.type = lime.graphics.ImageType.CANVAS;
}
lime._internal.graphics.ImageCanvasUtil.convertToData = function (b, a) {
    null == a && (a = !1);
    var c = b.buffer;
    null != c.__srcImage && lime._internal.graphics.ImageCanvasUtil.convertToCanvas(b);
    if (null != c.__srcCanvas && null == c.data) lime._internal.graphics.ImageCanvasUtil.createImageData(b), b.type == lime.graphics.ImageType.CANVAS && (b.dirty = !1);else if (b.type == lime.graphics.ImageType.CANVAS && null != c.__srcCanvas && b.dirty) {
        if (null == c.__srcImageData) lime._internal.graphics.ImageCanvasUtil.createImageData(b);else {
            c.__srcImageData = c.__srcContext.getImageData(0, 0, c.width, c.height);
            var d = c.__srcImageData.data.buffer;
            d = null != d ? new Uint8Array(d) : null;
            c.data = d;
        }
        b.dirty = !1;
    }
    a && (b.buffer.__srcCanvas = null, b.buffer.__srcContext = null);
    b.type = lime.graphics.ImageType.DATA;
}
lime._internal.graphics.ImageCanvasUtil.copyChannel = function (b, a, c, d, f, g) {
    lime._internal.graphics.ImageCanvasUtil.convertToData(a);
    lime._internal.graphics.ImageCanvasUtil.convertToData(b);
    lime._internal.graphics.ImageDataUtil.copyChannel(b, a, c, d, f, g);
}
lime._internal.graphics.ImageCanvasUtil.copyPixels = function (b, a, c, d, f, g, p) {
    null == p && (p = !1);
    null == d || d.x >= b.width || d.y >= b.height || null == c || 1 > c.width || 1 > c.height || (null != f && f.get_transparent() && (null == g && (g = new lime.math.Vector2()), a = a.clone(), a.copyChannel(f, new lime.math.Rectangle(c.x + g.x, c.y + g.y, c.width, c.height), new lime.math.Vector2(c.x, c.y), lime.graphics.ImageChannel.ALPHA, lime.graphics.ImageChannel.ALPHA)), lime._internal.graphics.ImageCanvasUtil.convertToCanvas(b, !0), p || b.get_transparent() && a.get_transparent() && b.buffer.__srcContext.clearRect(d.x + b.offsetX, d.y + b.offsetY, c.width + b.offsetX, c.height + b.offsetY), lime._internal.graphics.ImageCanvasUtil.convertToCanvas(a), null != a.buffer.get_src() && (b.buffer.__srcContext.globalCompositeOperation = "source-over", b.buffer.__srcContext.drawImage(a.buffer.get_src(), c.x + a.offsetX | 0, c.y + a.offsetY | 0, c.width | 0, c.height | 0, d.x + b.offsetX | 0, d.y + b.offsetY | 0, c.width | 0, c.height | 0)), b.dirty = !0, b.version++);
}
lime._internal.graphics.ImageCanvasUtil.createCanvas = function (b, a, c) {
    var d = b.buffer;
    null == d.__srcCanvas && (d.__srcCanvas = window.document.createElement("canvas"), d.__srcCanvas.width = a, d.__srcCanvas.height = c, b.get_transparent() ? d.__srcContext = d.__srcCanvas.getContext("2d") : (b.get_transparent() || d.__srcCanvas.setAttribute("moz-opaque", "true"), d.__srcContext = d.__srcCanvas.getContext("2d", {
        alpha: !1
    })));
}
lime._internal.graphics.ImageCanvasUtil.createImageData = function (b) {
    b = b.buffer;
    if (null == b.__srcImageData) {
        null == b.data ? b.__srcImageData = b.__srcContext.getImageData(0, 0, b.width, b.height) : (b.__srcImageData = b.__srcContext.createImageData(b.width, b.height), b.__srcImageData.data.set(b.data));
        var a = b.__srcImageData.data.buffer;
        a = null != a ? new Uint8Array(a) : null;
        b.data = a;
    }
}
lime._internal.graphics.ImageCanvasUtil.fillRect = function (b, a, c, d) {
    lime._internal.graphics.ImageCanvasUtil.convertToCanvas(b);
    if (1 == d) {
        d = c >> 16 & 255;
        var f = c >> 8 & 255;
        var g = c & 255;
        c = b.get_transparent() ? c >> 24 & 255 : 255;
    } else d = c >> 24 & 255, f = c >> 16 & 255, g = c >> 8 & 255, c = b.get_transparent() ? c & 255 : 255;
    0 == a.x && 0 == a.y && a.width == b.width && a.height == b.height && b.get_transparent() && 0 == c ? b.buffer.__srcCanvas.width = b.buffer.width : (255 > c && b.buffer.__srcContext.clearRect(a.x + b.offsetX, a.y + b.offsetY, a.width + b.offsetX, a.height + b.offsetY), 0 < c && (b.buffer.__srcContext.fillStyle = "rgba(" + d + ", " + f + ", " + g + ", " + c / 255 + ")", b.buffer.__srcContext.fillRect(a.x + b.offsetX, a.y + b.offsetY, a.width + b.offsetX, a.height + b.offsetY)), b.dirty = !0, b.version++);
}
lime._internal.graphics.ImageCanvasUtil.getPixel = function (b, a, c, d) {
    lime._internal.graphics.ImageCanvasUtil.convertToData(b);
    return lime._internal.graphics.ImageDataUtil.getPixel(b, a, c, d);
}
lime._internal.graphics.ImageCanvasUtil.getPixel32 = function (b, a, c, d) {
    lime._internal.graphics.ImageCanvasUtil.convertToData(b);
    return lime._internal.graphics.ImageDataUtil.getPixel32(b, a, c, d);
}
lime._internal.graphics.ImageCanvasUtil.getPixels = function (b, a, c) {
    lime._internal.graphics.ImageCanvasUtil.convertToData(b);
    return lime._internal.graphics.ImageDataUtil.getPixels(b, a, c);
}
lime._internal.graphics.ImageCanvasUtil.setPixel = function (b, a, c, d, f) {
    lime._internal.graphics.ImageCanvasUtil.convertToData(b);
    lime._internal.graphics.ImageDataUtil.setPixel(b, a, c, d, f);
}
lime._internal.graphics.ImageCanvasUtil.setPixel32 = function (b, a, c, d, f) {
    lime._internal.graphics.ImageCanvasUtil.convertToData(b);
    lime._internal.graphics.ImageDataUtil.setPixel32(b, a, c, d, f);
}
lime._internal.graphics.ImageCanvasUtil.setPixels = function (b, a, c, d, f) {
    lime._internal.graphics.ImageCanvasUtil.convertToData(b);
    lime._internal.graphics.ImageDataUtil.setPixels(b, a, c, d, f);
}