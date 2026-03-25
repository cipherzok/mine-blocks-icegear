lime.graphics.ImageBuffer = function (b, a, c, d, f) {
    null == d && (d = 32);
    null == c && (c = 0);
    null == a && (a = 0);
    this.data = b;
    this.width = a;
    this.height = c;
    this.bitsPerPixel = d;
    this.format = null == f ? 0 : f;
    this.premultiplied = !1;
    this.transparent = !0;
}
m["lime.graphics.ImageBuffer"] = lime.graphics.ImageBuffer
lime.graphics.ImageBuffer.__name__ = "lime.graphics.ImageBuffer"
lime.graphics.ImageBuffer.prototype = {
    clone: function () {
        var b = new lime.graphics.ImageBuffer(this.data, this.width, this.height, this.bitsPerPixel);
        if (null != this.data) {
            var a = this.data.byteLength;
            a = null != a ? new Uint8Array(a) : null;
            b.data = a;
            a = this.data;
            a = null != a ? new Uint8Array(a) : null;
            b.data.set(a);
        } else null != this.__srcImageData ? (b.__srcCanvas = window.document.createElement("canvas"), b.__srcContext = b.__srcCanvas.getContext("2d"), b.__srcCanvas.width = this.__srcImageData.width, b.__srcCanvas.height = this.__srcImageData.height, b.__srcImageData = b.__srcContext.createImageData(this.__srcImageData.width, this.__srcImageData.height), a = new Uint8ClampedArray(this.__srcImageData.data), b.__srcImageData.data.set(a)) : null != this.__srcCanvas ? (b.__srcCanvas = window.document.createElement("canvas"), b.__srcContext = b.__srcCanvas.getContext("2d"), b.__srcCanvas.width = this.__srcCanvas.width, b.__srcCanvas.height = this.__srcCanvas.height, b.__srcContext.drawImage(this.__srcCanvas, 0, 0)) : b.__srcImage = this.__srcImage;
        b.bitsPerPixel = this.bitsPerPixel;
        b.format = this.format;
        b.premultiplied = this.premultiplied;
        b.transparent = this.transparent;
        return b;
    },
    get_src: function () {
        return null != this.__srcImage ? this.__srcImage : this.__srcCanvas;
    },
    get_stride: function () {
        return this.width * (this.bitsPerPixel / 8 | 0);
    },
    __class__: lime.graphics.ImageBuffer
}