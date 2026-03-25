lime.graphics.Image = function (b, a, c, d, f, g, p) {
    null == f && (f = -1);
    null == d && (d = -1);
    null == c && (c = 0);
    null == a && (a = 0);
    this.offsetX = a;
    this.offsetY = c;
    this.width = d;
    this.height = f;
    this.version = 0;
    null == p && (p = lime.graphics.ImageType.CANVAS, null != lime._internal.backend.html5.HTML5Thread.__current.__worker || lime._internal.backend.html5.HTML5Thread.__isWorker) && (p = lime.graphics.ImageType.DATA);
    this.type = p;
    if (null == b) {
        if (0 < d && 0 < f) switch (this.type._hx_index) {
        case 0:
            this.buffer = new lime.graphics.ImageBuffer(null, d, f);
            lime._internal.graphics.ImageCanvasUtil.createCanvas(this, d, f);
            null != g && 0 != g && this.fillRect(new lime.math.Rectangle(0, 0, d, f), g);
            break;
        case 1:
            b = d * f * 4, b = null != b ? new Uint8Array(b) : null, this.buffer = new lime.graphics.ImageBuffer(b, d, f), null != g && 0 != g && this.fillRect(new lime.math.Rectangle(0, 0, d, f), g);
        }
    } else this.__fromImageBuffer(b);
}
m["lime.graphics.Image"] = lime.graphics.Image
lime.graphics.Image.__name__ = "lime.graphics.Image"
lime.graphics.Image.fromBytes = function (b) {
    if (null == b) return null;
    var a = new lime.graphics.Image();
    return a.__fromBytes(b) ? a : null;
}
lime.graphics.Image.fromFile = function (b) {
    if (null == b) return null;
    var a = new lime.graphics.Image();
    return a.__fromFile(b) ? a : null;
}
lime.graphics.Image.loadFromBase64 = function (b, a) {
    return null == b || null == a ? lime.app.Future.withValue(null) : lime._internal.backend.html5.HTML5HTTPRequest.loadImage("data:" + a + ";base64," + b);
}
lime.graphics.Image.loadFromBytes = function (b) {
    if (null == b) return lime.app.Future.withValue(null);
    if (lime.graphics.Image.__isPNG(b)) var a = "image/png";else if (lime.graphics.Image.__isJPG(b)) a = "image/jpeg";else if (lime.graphics.Image.__isGIF(b)) a = "image/gif";else if (lime.graphics.Image.__isWebP(b)) a = "image/webp";else return lime.app.Future.withValue(null);
    return lime._internal.backend.html5.HTML5HTTPRequest.loadImageFromBytes(b, a);
}
lime.graphics.Image.loadFromFile = function (b) {
    return null == b ? lime.app.Future.withValue(null) : lime._internal.backend.html5.HTML5HTTPRequest.loadImage(b);
}
lime.graphics.Image.__isGIF = function (b) {
    if (null == b || 6 > b.length) return !1;
    b = b.getString(0, 6);
    return "GIF87a" != b ? "GIF89a" == b : !0;
}
lime.graphics.Image.__isJPG = function (b) {
    return null == b || 4 > b.length ? !1 : 255 == b.b[0] && 216 == b.b[1] && 255 == b.b[b.length - 2] ? 217 == b.b[b.length - 1] : !1;
}
lime.graphics.Image.__isPNG = function (b) {
    return null == b || 8 > b.length ? !1 : 137 == b.b[0] && 80 == b.b[1] && 78 == b.b[2] && 71 == b.b[3] && 13 == b.b[4] && 10 == b.b[5] && 26 == b.b[6] ? 10 == b.b[7] : !1;
}
lime.graphics.Image.__isWebP = function (b) {
    return null == b || 16 > b.length ? !1 : "RIFF" == b.getString(0, 4) ? "WEBP" == b.getString(8, 4) : !1;
}
lime.graphics.Image.prototype = {
    clone: function () {
        if (null != this.buffer) {
            this.type == lime.graphics.ImageType.CANVAS ? lime._internal.graphics.ImageCanvasUtil.convertToCanvas(this) : lime._internal.graphics.ImageCanvasUtil.convertToData(this);
            var b = new lime.graphics.Image(this.buffer.clone(), this.offsetX, this.offsetY, this.width, this.height, null, this.type);
            b.version = this.version;
            return b;
        }
        return new lime.graphics.Image(null, this.offsetX, this.offsetY, this.width, this.height, null, this.type);
    },
    copyChannel: function (b, a, c, d, f) {
        a = this.__clipRect(a);
        if (null != this.buffer && null != a && !(f == lime.graphics.ImageChannel.ALPHA && !this.get_transparent() || 0 >= a.width || 0 >= a.height)) switch (a.x + a.width > b.width && (a.width = b.width - a.x), a.y + a.height > b.height && (a.height = b.height - a.y), this.type._hx_index) {
        case 0:
            lime._internal.graphics.ImageCanvasUtil.copyChannel(this, b, a, c, d, f);
            break;
        case 1:
            lime._internal.graphics.ImageCanvasUtil.convertToData(this);
            lime._internal.graphics.ImageCanvasUtil.convertToData(b);
            lime._internal.graphics.ImageDataUtil.copyChannel(this, b, a, c, d, f);
            break;
        case 2:
            switch (d._hx_index) {
            case 0:
                var g = 1;
                break;
            case 1:
                g = 2;
                break;
            case 2:
                g = 4;
                break;
            case 3:
                g = 8;
            }
            switch (f._hx_index) {
            case 0:
                var p = 1;
                break;
            case 1:
                p = 2;
                break;
            case 2:
                p = 4;
                break;
            case 3:
                p = 8;
            }
            a.offset(b.offsetX, b.offsetY);
            c.offset(this.offsetX, this.offsetY);
            this.buffer.__srcBitmapData.copyChannel(b.buffer.get_src(), a.__toFlashRectangle(), c.__toFlashPoint(), g, p);
        }
    },
    copyPixels: function (b, a, c, d, f, g) {
        null == g && (g = !1);
        if (null != this.buffer && null != b && !(0 >= a.width || 0 >= a.height || 0 >= this.width || 0 >= this.height)) switch (a.x + a.width > b.width && (a.width = b.width - a.x), a.y + a.height > b.height && (a.height = b.height - a.y), 0 > a.x && (a.width += a.x, a.x = 0), 0 > a.y && (a.height += a.y, a.y = 0), c.x + a.width > this.width && (a.width = this.width - c.x), c.y + a.height > this.height && (a.height = this.height - c.y), 0 > c.x && (a.width += c.x, a.x -= c.x, c.x = 0), 0 > c.y && (a.height += c.y, a.y -= c.y, c.y = 0), b == this && c.x < a.get_right() && c.y < a.get_bottom() && (b = this.clone()), d == b && (null == f || 0 == f.x && 0 == f.y) && (f = d = null), this.type._hx_index) {
        case 0:
            null != d ? (lime._internal.graphics.ImageCanvasUtil.convertToData(this), lime._internal.graphics.ImageCanvasUtil.convertToData(b), null != d && lime._internal.graphics.ImageCanvasUtil.convertToData(d), lime._internal.graphics.ImageDataUtil.copyPixels(this, b, a, c, d, f, g)) : (lime._internal.graphics.ImageCanvasUtil.convertToCanvas(this), lime._internal.graphics.ImageCanvasUtil.convertToCanvas(b), lime._internal.graphics.ImageCanvasUtil.copyPixels(this, b, a, c, d, f, g));
            break;
        case 1:
            lime._internal.graphics.ImageCanvasUtil.convertToData(this);
            lime._internal.graphics.ImageCanvasUtil.convertToData(b);
            null != d && lime._internal.graphics.ImageCanvasUtil.convertToData(d);
            lime._internal.graphics.ImageDataUtil.copyPixels(this, b, a, c, d, f, g);
            break;
        case 2:
            a.offset(b.offsetX, b.offsetY), c.offset(this.offsetX, this.offsetY), null != d && null != f && f.offset(d.offsetX, d.offsetY), this.buffer.__srcBitmapData.copyPixels(b.buffer.__srcBitmapData, a.__toFlashRectangle(), c.__toFlashPoint(), null != d ? d.buffer.get_src() : null, null != f ? f.__toFlashPoint() : null, g);
        }
    },
    encode: function (b, a) {
        null == a && (a = 90);
        if (null == b) return lime._internal.format.PNG.encode(this);
        switch (b._hx_index) {
        case 0:
            return lime._internal.format.BMP.encode(this);
        case 1:
            return lime._internal.format.JPEG.encode(this, a);
        case 2:
            return lime._internal.format.PNG.encode(this);
        }
    },
    fillRect: function (b, a, c) {
        b = this.__clipRect(b);
        if (null != this.buffer && null != b) switch (this.type._hx_index) {
        case 0:
            lime._internal.graphics.ImageCanvasUtil.fillRect(this, b, a, c);
            break;
        case 1:
            lime._internal.graphics.ImageCanvasUtil.convertToData(this);
            if (0 == this.buffer.data.length) break;
            lime._internal.graphics.ImageDataUtil.fillRect(this, b, a, c);
            break;
        case 2:
            b.offset(this.offsetX, this.offsetY);
            if (null == c) a = (a & 255) << 24 | (a >>> 24 & 255) << 16 | (a >>> 16 & 255) << 8 | a >>> 8 & 255;else switch (c) {
            case 1:
                break;
            case 2:
                a = (a & 255) << 24 | (a >>> 8 & 255) << 16 | (a >>> 16 & 255) << 8 | a >>> 24 & 255;
                break;
            default:
                a = (a & 255) << 24 | (a >>> 24 & 255) << 16 | (a >>> 16 & 255) << 8 | a >>> 8 & 255;
            }
            this.buffer.__srcBitmapData.fillRect(b.__toFlashRectangle(), a);
        }
    },
    getPixel: function (b, a, c) {
        if (null == this.buffer || 0 > b || 0 > a || b >= this.width || a >= this.height) return 0;
        switch (this.type._hx_index) {
        case 0:
            return lime._internal.graphics.ImageCanvasUtil.getPixel(this, b, a, c);
        case 1:
            return lime._internal.graphics.ImageCanvasUtil.convertToData(this), lime._internal.graphics.ImageDataUtil.getPixel(this, b, a, c);
        case 2:
            b = this.buffer.__srcBitmapData.getPixel(b + this.offsetX, a + this.offsetY);
            if (null == c) return (b >>> 16 & 255) << 24 | (b >>> 8 & 255) << 16 | (b & 255) << 8 | b >>> 24 & 255;
            switch (c) {
            case 1:
                return b;
            case 2:
                return (b & 255) << 24 | (b >>> 8 & 255) << 16 | (b >>> 16 & 255) << 8 | b >>> 24 & 255;
            default:
                return (b >>> 16 & 255) << 24 | (b >>> 8 & 255) << 16 | (b & 255) << 8 | b >>> 24 & 255;
            }
        default:
            return 0;
        }
    },
    getPixel32: function (b, a, c) {
        if (null == this.buffer || 0 > b || 0 > a || b >= this.width || a >= this.height) return 0;
        switch (this.type._hx_index) {
        case 0:
            return lime._internal.graphics.ImageCanvasUtil.getPixel32(this, b, a, c);
        case 1:
            return lime._internal.graphics.ImageCanvasUtil.convertToData(this), lime._internal.graphics.ImageDataUtil.getPixel32(this, b, a, c);
        case 2:
            b = this.buffer.__srcBitmapData.getPixel32(b + this.offsetX, a + this.offsetY);
            if (null == c) return (b >>> 16 & 255) << 24 | (b >>> 8 & 255) << 16 | (b & 255) << 8 | b >>> 24 & 255;
            switch (c) {
            case 1:
                return b;
            case 2:
                return (b & 255) << 24 | (b >>> 8 & 255) << 16 | (b >>> 16 & 255) << 8 | b >>> 24 & 255;
            default:
                return (b >>> 16 & 255) << 24 | (b >>> 8 & 255) << 16 | (b & 255) << 8 | b >>> 24 & 255;
            }
        default:
            return 0;
        }
    },
    getPixels: function (b, a) {
        if (null == this.buffer) return null;
        switch (this.type._hx_index) {
        case 0:
            return lime._internal.graphics.ImageCanvasUtil.getPixels(this, b, a);
        case 1:
            return lime._internal.graphics.ImageCanvasUtil.convertToData(this), lime._internal.graphics.ImageDataUtil.getPixels(this, b, a);
        case 2:
            return null;
        default:
            return null;
        }
    },
    setPixel: function (b, a, c, d) {
        if (!(null == this.buffer || 0 > b || 0 > a || b >= this.width || a >= this.height)) switch (this.type._hx_index) {
        case 0:
            lime._internal.graphics.ImageCanvasUtil.setPixel(this, b, a, c, d);
            break;
        case 1:
            lime._internal.graphics.ImageCanvasUtil.convertToData(this);
            lime._internal.graphics.ImageDataUtil.setPixel(this, b, a, c, d);
            break;
        case 2:
            if (null == d) c = (c & 255) << 24 | (c >>> 24 & 255) << 16 | (c >>> 16 & 255) << 8 | c >>> 8 & 255;else switch (d) {
            case 1:
                break;
            case 2:
                c = (c & 255) << 24 | (c >>> 8 & 255) << 16 | (c >>> 16 & 255) << 8 | c >>> 24 & 255;
                break;
            default:
                c = (c & 255) << 24 | (c >>> 24 & 255) << 16 | (c >>> 16 & 255) << 8 | c >>> 8 & 255;
            }
            this.buffer.__srcBitmapData.setPixel(b + this.offsetX, a + this.offsetX, c);
        }
    },
    setPixel32: function (b, a, c, d) {
        if (!(null == this.buffer || 0 > b || 0 > a || b >= this.width || a >= this.height)) switch (this.type._hx_index) {
        case 0:
            lime._internal.graphics.ImageCanvasUtil.setPixel32(this, b, a, c, d);
            break;
        case 1:
            lime._internal.graphics.ImageCanvasUtil.convertToData(this);
            lime._internal.graphics.ImageDataUtil.setPixel32(this, b, a, c, d);
            break;
        case 2:
            if (null == d) c = (c & 255) << 24 | (c >>> 24 & 255) << 16 | (c >>> 16 & 255) << 8 | c >>> 8 & 255;else switch (d) {
            case 1:
                break;
            case 2:
                c = (c & 255) << 24 | (c >>> 8 & 255) << 16 | (c >>> 16 & 255) << 8 | c >>> 24 & 255;
                break;
            default:
                c = (c & 255) << 24 | (c >>> 24 & 255) << 16 | (c >>> 16 & 255) << 8 | c >>> 8 & 255;
            }
            this.buffer.__srcBitmapData.setPixel32(b + this.offsetX, a + this.offsetY, c);
        }
    },
    setPixels: function (b, a, c, d) {
        b = this.__clipRect(b);
        if (null != this.buffer && null != b) switch (null == d && (d = lime.system.Endian.BIG_ENDIAN), this.type._hx_index) {
        case 0:
            lime._internal.graphics.ImageCanvasUtil.setPixels(this, b, a, c, d);
            break;
        case 1:
            lime._internal.graphics.ImageCanvasUtil.convertToData(this), lime._internal.graphics.ImageDataUtil.setPixels(this, b, a, c, d);
        }
    },
    __clipRect: function (b) {
        return null == b || 0 > b.x && (b.width -= -b.x, b.x = 0, 0 >= b.x + b.width) || 0 > b.y && (b.height -= -b.y, b.y = 0, 0 >= b.y + b.height) || b.x + b.width >= this.width && (b.width -= b.x + b.width - this.width, 0 >= b.width) || b.y + b.height >= this.height && (b.height -= b.y + b.height - this.height, 0 >= b.height) ? null : b;
    },
    __fromBase64: function (b, a, c) {
        var d = this,
            f = new window.Image();
        f.addEventListener("load", function (a) {
            d.buffer = new lime.graphics.ImageBuffer(null, f.width, f.height);
            d.buffer.__srcImage = f;
            d.offsetX = 0;
            d.offsetY = 0;
            d.width = d.buffer.width;
            d.height = d.buffer.height;
            null != c && c(d);
        }, !1);
        f.src = "data:" + a + ";base64," + b;
    },
    __fromBytes: function (b, a) {
        if (lime.graphics.Image.__isPNG(b)) var c = "image/png";else if (lime.graphics.Image.__isJPG(b)) c = "image/jpeg";else if (lime.graphics.Image.__isGIF(b)) c = "image/gif";else return !1;
        this.__fromBase64(lime._internal.format.Base64.encode(b), c, a);
        return !0;
    },
    __fromFile: function (b, a, c) {
        var d = this,
            f = new window.Image();
        lime._internal.backend.html5.HTML5HTTPRequest.__isSameOrigin(b) || (f.crossOrigin = "Anonymous");
        f.onload = function (b) {
            d.buffer = new lime.graphics.ImageBuffer(null, f.width, f.height);
            d.buffer.__srcImage = f;
            d.width = f.width;
            d.height = f.height;
            null != a && a(d);
        };
        f.onerror = function (a) {
            null != c && c();
        };
        f.src = b;
        return !0;
    },
    __fromImageBuffer: function (b) {
        this.buffer = b;
        null != b && (-1 == this.width && (this.width = b.width), -1 == this.height && (this.height = b.height));
    },
    get_data: function () {
        null == this.buffer.data && 0 < this.buffer.width && 0 < this.buffer.height && lime._internal.graphics.ImageCanvasUtil.convertToData(this);
        return this.buffer.data;
    },
    get_format: function () {
        return this.buffer.format;
    },
    set_format: function (b) {
        this.buffer.format != b && 1 == this.type._hx_index && lime._internal.graphics.ImageDataUtil.setFormat(this, b);
        return this.buffer.format = b;
    },
    get_premultiplied: function () {
        return this.buffer.premultiplied;
    },
    set_premultiplied: function (b) {
        if (b && !this.buffer.premultiplied) switch (this.type._hx_index) {
        case 0:
        case 1:
            lime._internal.graphics.ImageCanvasUtil.convertToData(this), lime._internal.graphics.ImageDataUtil.multiplyAlpha(this);
        } else !b && this.buffer.premultiplied && 1 == this.type._hx_index && (lime._internal.graphics.ImageCanvasUtil.convertToData(this), lime._internal.graphics.ImageDataUtil.unmultiplyAlpha(this));
        return b;
    },
    get_rect: function () {
        return new lime.math.Rectangle(0, 0, this.width, this.height);
    },
    get_transparent: function () {
        return null == this.buffer ? !1 : this.buffer.transparent;
    },
    set_transparent: function (b) {
        return null == this.buffer ? !1 : this.buffer.transparent = b;
    },
    __class__: lime.graphics.Image
}