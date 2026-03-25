lime._internal.format.BMP = function () {}
m["lime._internal.format.BMP"] = lime._internal.format.BMP
lime._internal.format.BMP.__name__ = "lime._internal.format.BMP"
lime._internal.format.BMP.encode = function (b, a) {
    if (b.get_premultiplied() || 0 != b.get_format()) b = b.clone(), b.set_premultiplied(!1), b.set_format(0);
    null == a && (a = lime._internal.format.BMPType.RGB);
    var c = 14,
        d = 40,
        f = b.width * b.height * 4;
    if (null != a) switch (a._hx_index) {
    case 0:
        f = (3 * b.width + 3 * b.width % 4) * b.height;
        break;
    case 1:
        d = 108;
        break;
    case 2:
        c = 0, f += b.width * b.height;
    }
    var g = new haxe.io.Bytes(new ArrayBuffer(c + d + f)),
        k = 0;
    0 < c && (g.b[0] = 66, g.b[1] = 77, g.setInt32(2, g.length), g.setUInt16(6, 0), g.setUInt16(8, 0), g.setInt32(10, c + d), k = 14);
    g.setInt32(k, d);
    k += 4;
    g.setInt32(k, b.width);
    k += 4;
    g.setInt32(k, a == lime._internal.format.BMPType.ICO ? 2 * b.height : b.height);
    k += 4;
    g.setUInt16(k, 1);
    k += 2;
    g.setUInt16(k, a == lime._internal.format.BMPType.RGB ? 24 : 32);
    k += 2;
    g.setInt32(k, a == lime._internal.format.BMPType.BITFIELD ? 3 : 0);
    k += 4;
    g.setInt32(k, f);
    k += 4;
    g.setInt32(k, 11824);
    k += 4;
    g.setInt32(k, 11824);
    k += 4;
    g.setInt32(k, 0);
    k += 4;
    g.setInt32(k, 0);
    k += 4;
    if (a == lime._internal.format.BMPType.BITFIELD) for (g.setInt32(k, 16711680), k += 4, g.setInt32(k, 65280), k += 4, g.setInt32(k, 255), k += 4, g.setInt32(k, -16777216), k += 4, g.b[k++] = 32, g.b[k++] = 110, g.b[k++] = 105, g.b[k++] = 87, c = 0; 48 > c;) ++c, g.b[k++] = 0;
    d = b.getPixels(new lime.math.Rectangle(0, 0, b.width, b.height), 1);
    var h;
    if (null != a) switch (a._hx_index) {
    case 0:
        c = 0;
        for (a = b.height; c < a;) {
            f = 4 * (b.height - 1 - c++) * b.width;
            for (var m = 0, n = b.width; m < n;) {
                ++m;
                ++f;
                var x = d.b[f++];
                var t = d.b[f++];
                var w = d.b[f++];
                g.b[k++] = w & 255;
                g.b[k++] = t & 255;
                g.b[k++] = x & 255;
            }
            f = 0;
            for (h = 3 * b.width % 4; f < h;) ++f, g.b[k++] = 0;
        }
        break;
    case 1:
        c = 0;
        for (a = b.height; c < a;) for (f = 4 * (b.height - 1 - c++) * b.width, m = 0, n = b.width; m < n;) ++m, h = d.b[f++], x = d.b[f++], t = d.b[f++], w = d.b[f++], g.b[k++] = w & 255, g.b[k++] = t & 255, g.b[k++] = x & 255, g.b[k++] = h & 255;
        break;
    case 2:
        var q = new haxe.io.Bytes(new ArrayBuffer(b.width * b.height)),
            C = 0;
        c = 0;
        for (a = b.height; c < a;) for (f = 4 * (b.height - 1 - c++) * b.width, m = 0, n = b.width; m < n;) ++m, h = d.b[f++], x = d.b[f++], t = d.b[f++], w = d.b[f++], g.b[k++] = w & 255, g.b[k++] = t & 255, g.b[k++] = x & 255, g.b[k++] = h & 255, q.b[C++] = 0;
        g.blit(k, q, 0, b.width * b.height);
    }
    return g;
}