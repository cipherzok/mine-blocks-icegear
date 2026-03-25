lime._internal.graphics._ImageDataUtil.ImageDataView = function (b, a) {
    this.image = b;
    null == a ? this.rect = b.get_rect() : (0 > a.x && (a.x = 0), 0 > a.y && (a.y = 0), a.x + a.width > b.width && (a.width = b.width - a.x), a.y + a.height > b.height && (a.height = b.height - a.y), 0 > a.width && (a.width = 0), 0 > a.height && (a.height = 0), this.rect = a);
    this.stride = b.buffer.get_stride();
    this.__update();
}
m["lime._internal.graphics._ImageDataUtil.ImageDataView"] = lime._internal.graphics._ImageDataUtil.ImageDataView
lime._internal.graphics._ImageDataUtil.ImageDataView.__name__ = "lime._internal.graphics._ImageDataUtil.ImageDataView"
lime._internal.graphics._ImageDataUtil.ImageDataView.prototype = {
    clip: function (b, a, c, d) {
        null == this.tempRect && (this.tempRect = new lime.math.Rectangle());
        this.tempRect.setTo(b, a, c, d);
        this.rect.intersection(this.tempRect, this.rect);
        this.__update();
    },
    __update: function () {
        this.x = Math.ceil(this.rect.x);
        this.y = Math.ceil(this.rect.y);
        this.width = Math.floor(this.rect.width);
        this.height = Math.floor(this.rect.height);
        this.byteOffset = this.stride * (this.y + this.image.offsetY) + 4 * (this.x + this.image.offsetX);
    },
    __class__: lime._internal.graphics._ImageDataUtil.ImageDataView
}