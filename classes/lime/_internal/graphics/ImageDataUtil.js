lime._internal.graphics.ImageDataUtil = function () {}
m["lime._internal.graphics.ImageDataUtil"] = lime._internal.graphics.ImageDataUtil
lime._internal.graphics.ImageDataUtil.__name__ = "lime._internal.graphics.ImageDataUtil"
lime._internal.graphics.ImageDataUtil.copyChannel = function (b, a, c, d, f, g) {
    switch (g._hx_index) {
    case 0:
        var l = 0;
        break;
    case 1:
        l = 1;
        break;
    case 2:
        l = 2;
        break;
    case 3:
        l = 3;
    }
    switch (f._hx_index) {
    case 0:
        var k = 0;
        break;
    case 1:
        k = 1;
        break;
    case 2:
        k = 2;
        break;
    case 3:
        k = 3;
    }
    f = a.buffer.data;
    g = b.buffer.data;
    if (null != f && null != g) {
        c = new lime._internal.graphics._ImageDataUtil.ImageDataView(a, c);
        d = new lime._internal.graphics._ImageDataUtil.ImageDataView(b, new lime.math.Rectangle(d.x, d.y, c.width, c.height));
        var h = a.buffer.format,
            m = b.buffer.format;
        a = a.buffer.premultiplied;
        for (var n = b.buffer.premultiplied, x, t, w = 0, q = 0, C = 0, v = 0, r = d.height; v < r;) {
            t = v++;
            x = c.byteOffset + c.stride * t;
            t = d.byteOffset + d.stride * t;
            for (var K = 0, la = d.width; K < la;) {
                ++K;
                var A = h,
                    y = a;
                null == a && (y = !1);
                null == h && (A = 0);
                switch (A) {
                case 0:
                    w = (f[x] & 255) << 24 | (f[x + 1] & 255) << 16 | (f[x + 2] & 255) << 8 | f[x + 3] & 255;
                    break;
                case 1:
                    w = (f[x + 1] & 255) << 24 | (f[x + 2] & 255) << 16 | (f[x + 3] & 255) << 8 | f[x] & 255;
                    break;
                case 2:
                    w = (f[x + 2] & 255) << 24 | (f[x + 1] & 255) << 16 | (f[x] & 255) << 8 | f[x + 3] & 255;
                }
                y && 0 != (w & 255) && 255 != (w & 255) && (ma.unmult = 255 / (w & 255), w = (ma.__clamp[Math.round((w >>> 24 & 255) * ma.unmult)] & 255) << 24 | (ma.__clamp[Math.round((w >>> 16 & 255) * ma.unmult)] & 255) << 16 | (ma.__clamp[Math.round((w >>> 8 & 255) * ma.unmult)] & 255) << 8 | w & 255);
                A = m;
                y = n;
                null == n && (y = !1);
                null == m && (A = 0);
                switch (A) {
                case 0:
                    q = (g[t] & 255) << 24 | (g[t + 1] & 255) << 16 | (g[t + 2] & 255) << 8 | g[t + 3] & 255;
                    break;
                case 1:
                    q = (g[t + 1] & 255) << 24 | (g[t + 2] & 255) << 16 | (g[t + 3] & 255) << 8 | g[t] & 255;
                    break;
                case 2:
                    q = (g[t + 2] & 255) << 24 | (g[t + 1] & 255) << 16 | (g[t] & 255) << 8 | g[t + 3] & 255;
                }
                y && 0 != (q & 255) && 255 != (q & 255) && (ma.unmult = 255 / (q & 255), q = (ma.__clamp[Math.round((q >>> 24 & 255) * ma.unmult)] & 255) << 24 | (ma.__clamp[Math.round((q >>> 16 & 255) * ma.unmult)] & 255) << 16 | (ma.__clamp[Math.round((q >>> 8 & 255) * ma.unmult)] & 255) << 8 | q & 255);
                switch (k) {
                case 0:
                    C = w >>> 24 & 255;
                    break;
                case 1:
                    C = w >>> 16 & 255;
                    break;
                case 2:
                    C = w >>> 8 & 255;
                    break;
                case 3:
                    C = w & 255;
                }
                switch (l) {
                case 0:
                    q = (C & 255) << 24 | (q >>> 16 & 255) << 16 | (q >>> 8 & 255) << 8 | q & 255;
                    break;
                case 1:
                    q = (q >>> 24 & 255) << 24 | (C & 255) << 16 | (q >>> 8 & 255) << 8 | q & 255;
                    break;
                case 2:
                    q = (q >>> 24 & 255) << 24 | (q >>> 16 & 255) << 16 | (C & 255) << 8 | q & 255;
                    break;
                case 3:
                    q = (q >>> 24 & 255) << 24 | (q >>> 16 & 255) << 16 | (q >>> 8 & 255) << 8 | C & 255;
                }
                A = m;
                y = n;
                null == n && (y = !1);
                null == m && (A = 0);
                y && (0 == (q & 255) ? 0 != q && (q = 0) : 255 != (q & 255) && (ma.a16 = ma.__alpha16[q & 255], q = ((q >>> 24 & 255) * ma.a16 >> 16 & 255) << 24 | ((q >>> 16 & 255) * ma.a16 >> 16 & 255) << 16 | ((q >>> 8 & 255) * ma.a16 >> 16 & 255) << 8 | q & 255));
                switch (A) {
                case 0:
                    g[t] = q >>> 24 & 255;
                    g[t + 1] = q >>> 16 & 255;
                    g[t + 2] = q >>> 8 & 255;
                    g[t + 3] = q & 255;
                    break;
                case 1:
                    g[t] = q & 255;
                    g[t + 1] = q >>> 24 & 255;
                    g[t + 2] = q >>> 16 & 255;
                    g[t + 3] = q >>> 8 & 255;
                    break;
                case 2:
                    g[t] = q >>> 8 & 255, g[t + 1] = q >>> 16 & 255, g[t + 2] = q >>> 24 & 255, g[t + 3] = q & 255;
                }
                x += 4;
                t += 4;
            }
        }
        b.dirty = !0;
        b.version++;
    }
}
lime._internal.graphics.ImageDataUtil.copyPixels = function (b, a, c, d, f, g, k) {
    null == k && (k = !1);
    if (b.width == a.width && b.height == a.height && c.width == a.width && c.height == a.height && 0 == c.x && 0 == c.y && 0 == d.x && 0 == d.y && null == f && null == g && 0 == k && b.get_format() == a.get_format()) b.buffer.data.set(a.buffer.data);else {
        var l = a.buffer.data,
            h = b.buffer.data;
        if (null == l || null == h) return;
        c = new lime._internal.graphics._ImageDataUtil.ImageDataView(a, c);
        var p = new lime._internal.graphics._ImageDataUtil.ImageDataView(b, new lime.math.Rectangle(d.x, d.y, c.width, c.height)),
            m = a.buffer.format,
            n = b.buffer.format,
            x = 0,
            t = 0,
            w = a.buffer.premultiplied,
            q = b.buffer.premultiplied,
            C = a.buffer.bitsPerPixel / 8 | 0,
            v = b.buffer.bitsPerPixel / 8 | 0,
            r = null != f && f.get_transparent(),
            K = k || r && !b.get_transparent() || !k && !b.get_transparent() && a.get_transparent();
        if (r) {
            if (v = f.buffer.data, a = f.buffer.format, k = 0, f = new lime._internal.graphics._ImageDataUtil.ImageDataView(f, new lime.math.Rectangle(c.x + (null == g ? 0 : g.x), c.y + (null == g ? 0 : g.y), c.width, c.height)), p.clip(d.x | 0, d.y | 0, f.width, f.height), K) for (K = 0, C = p.height; K < C;) for (r = K++, d = c.byteOffset + c.stride * r, g = p.byteOffset + p.stride * r, r = f.byteOffset + f.stride * r, G = 0, pa = p.width; G < pa;) {
                ++G;
                var la = m;
                var A = w;
                null == w && (A = !1);
                null == m && (la = 0);
                switch (la) {
                case 0:
                    x = (l[d] & 255) << 24 | (l[d + 1] & 255) << 16 | (l[d + 2] & 255) << 8 | l[d + 3] & 255;
                    break;
                case 1:
                    x = (l[d + 1] & 255) << 24 | (l[d + 2] & 255) << 16 | (l[d + 3] & 255) << 8 | l[d] & 255;
                    break;
                case 2:
                    x = (l[d + 2] & 255) << 24 | (l[d + 1] & 255) << 16 | (l[d] & 255) << 8 | l[d + 3] & 255;
                }
                A && 0 != (x & 255) && 255 != (x & 255) && (ma.unmult = 255 / (x & 255), x = (ma.__clamp[Math.round((x >>> 24 & 255) * ma.unmult)] & 255) << 24 | (ma.__clamp[Math.round((x >>> 16 & 255) * ma.unmult)] & 255) << 16 | (ma.__clamp[Math.round((x >>> 8 & 255) * ma.unmult)] & 255) << 8 | x & 255);
                A = n;
                la = q;
                null == q && (la = !1);
                null == n && (A = 0);
                switch (A) {
                case 0:
                    t = (h[g] & 255) << 24 | (h[g + 1] & 255) << 16 | (h[g + 2] & 255) << 8 | h[g + 3] & 255;
                    break;
                case 1:
                    t = (h[g + 1] & 255) << 24 | (h[g + 2] & 255) << 16 | (h[g + 3] & 255) << 8 | h[g] & 255;
                    break;
                case 2:
                    t = (h[g + 2] & 255) << 24 | (h[g + 1] & 255) << 16 | (h[g] & 255) << 8 | h[g + 3] & 255;
                }
                la && 0 != (t & 255) && 255 != (t & 255) && (ma.unmult = 255 / (t & 255), t = (ma.__clamp[Math.round((t >>> 24 & 255) * ma.unmult)] & 255) << 24 | (ma.__clamp[Math.round((t >>> 16 & 255) * ma.unmult)] & 255) << 16 | (ma.__clamp[Math.round((t >>> 8 & 255) * ma.unmult)] & 255) << 8 | t & 255);
                A = a;
                null == a && (A = 0);
                switch (A) {
                case 0:
                    k = (v[r] & 255) << 24 | (v[r + 1] & 255) << 16 | (v[r + 2] & 255) << 8 | v[r + 3] & 255;
                    break;
                case 1:
                    k = (v[r + 1] & 255) << 24 | (v[r + 2] & 255) << 16 | (v[r + 3] & 255) << 8 | v[r] & 255;
                    break;
                case 2:
                    k = (v[r + 2] & 255) << 24 | (v[r + 1] & 255) << 16 | (v[r] & 255) << 8 | v[r + 3] & 255;
                }
                la = (k & 255) / 255 * ((x & 255) / 255);
                if (0 < la) {
                    A = (t & 255) / 255;
                    var y = 1 - la;
                    var ja = la + A * y;
                    t = (ma.__clamp[Math.round(((x >>> 24 & 255) * la + (t >>> 24 & 255) * A * y) / ja)] & 255) << 24 | (t >>> 16 & 255) << 16 | (t >>> 8 & 255) << 8 | t & 255;
                    t = (t >>> 24 & 255) << 24 | (ma.__clamp[Math.round(((x >>> 16 & 255) * la + (t >>> 16 & 255) * A * y) / ja)] & 255) << 16 | (t >>> 8 & 255) << 8 | t & 255;
                    t = (t >>> 24 & 255) << 24 | (t >>> 16 & 255) << 16 | (ma.__clamp[Math.round(((x >>> 8 & 255) * la + (t >>> 8 & 255) * A * y) / ja)] & 255) << 8 | t & 255;
                    t = (t >>> 24 & 255) << 24 | (t >>> 16 & 255) << 16 | (t >>> 8 & 255) << 8 | ma.__clamp[Math.round(255 * ja)] & 255;
                    A = n;
                    la = q;
                    null == q && (la = !1);
                    null == n && (A = 0);
                    la && (0 == (t & 255) ? 0 != t && (t = 0) : 255 != (t & 255) && (ma.a16 = ma.__alpha16[t & 255], t = ((t >>> 24 & 255) * ma.a16 >> 16 & 255) << 24 | ((t >>> 16 & 255) * ma.a16 >> 16 & 255) << 16 | ((t >>> 8 & 255) * ma.a16 >> 16 & 255) << 8 | t & 255));
                    switch (A) {
                    case 0:
                        h[g] = t >>> 24 & 255;
                        h[g + 1] = t >>> 16 & 255;
                        h[g + 2] = t >>> 8 & 255;
                        h[g + 3] = t & 255;
                        break;
                    case 1:
                        h[g] = t & 255;
                        h[g + 1] = t >>> 24 & 255;
                        h[g + 2] = t >>> 16 & 255;
                        h[g + 3] = t >>> 8 & 255;
                        break;
                    case 2:
                        h[g] = t >>> 8 & 255, h[g + 1] = t >>> 16 & 255, h[g + 2] = t >>> 24 & 255, h[g + 3] = t & 255;
                    }
                }
                d += 4;
                g += 4;
                r += 4;
            } else for (K = 0, C = p.height; K < C;) for (r = K++, d = c.byteOffset + c.stride * r, g = p.byteOffset + p.stride * r, r = f.byteOffset + f.stride * r, G = 0, pa = p.width; G < pa;) {
                ++G;
                la = m;
                A = w;
                null == w && (A = !1);
                null == m && (la = 0);
                switch (la) {
                case 0:
                    x = (l[d] & 255) << 24 | (l[d + 1] & 255) << 16 | (l[d + 2] & 255) << 8 | l[d + 3] & 255;
                    break;
                case 1:
                    x = (l[d + 1] & 255) << 24 | (l[d + 2] & 255) << 16 | (l[d + 3] & 255) << 8 | l[d] & 255;
                    break;
                case 2:
                    x = (l[d + 2] & 255) << 24 | (l[d + 1] & 255) << 16 | (l[d] & 255) << 8 | l[d + 3] & 255;
                }
                A && 0 != (x & 255) && 255 != (x & 255) && (ma.unmult = 255 / (x & 255), x = (ma.__clamp[Math.round((x >>> 24 & 255) * ma.unmult)] & 255) << 24 | (ma.__clamp[Math.round((x >>> 16 & 255) * ma.unmult)] & 255) << 16 | (ma.__clamp[Math.round((x >>> 8 & 255) * ma.unmult)] & 255) << 8 | x & 255);
                A = a;
                null == a && (A = 0);
                switch (A) {
                case 0:
                    k = (v[r] & 255) << 24 | (v[r + 1] & 255) << 16 | (v[r + 2] & 255) << 8 | v[r + 3] & 255;
                    break;
                case 1:
                    k = (v[r + 1] & 255) << 24 | (v[r + 2] & 255) << 16 | (v[r + 3] & 255) << 8 | v[r] & 255;
                    break;
                case 2:
                    k = (v[r + 2] & 255) << 24 | (v[r + 1] & 255) << 16 | (v[r] & 255) << 8 | v[r + 3] & 255;
                }
                x = (x >>> 24 & 255) << 24 | (x >>> 16 & 255) << 16 | (x >>> 8 & 255) << 8 | Math.round((k & 255) / 255 * (x & 255)) & 255;
                A = n;
                la = q;
                null == q && (la = !1);
                null == n && (A = 0);
                la && (0 == (x & 255) ? 0 != x && (x = 0) : 255 != (x & 255) && (ma.a16 = ma.__alpha16[x & 255], x = ((x >>> 24 & 255) * ma.a16 >> 16 & 255) << 24 | ((x >>> 16 & 255) * ma.a16 >> 16 & 255) << 16 | ((x >>> 8 & 255) * ma.a16 >> 16 & 255) << 8 | x & 255));
                switch (A) {
                case 0:
                    h[g] = x >>> 24 & 255;
                    h[g + 1] = x >>> 16 & 255;
                    h[g + 2] = x >>> 8 & 255;
                    h[g + 3] = x & 255;
                    break;
                case 1:
                    h[g] = x & 255;
                    h[g + 1] = x >>> 24 & 255;
                    h[g + 2] = x >>> 16 & 255;
                    h[g + 3] = x >>> 8 & 255;
                    break;
                case 2:
                    h[g] = x >>> 8 & 255, h[g + 1] = x >>> 16 & 255, h[g + 2] = x >>> 24 & 255, h[g + 3] = x & 255;
                }
                d += 4;
                g += 4;
                r += 4;
            }
        } else if (K) for (K = 0, C = p.height; K < C;) {
            r = K++;
            d = c.byteOffset + c.stride * r;
            g = p.byteOffset + p.stride * r;
            for (var G = 0, pa = p.width; G < pa;) {
                ++G;
                la = m;
                A = w;
                null == w && (A = !1);
                null == m && (la = 0);
                switch (la) {
                case 0:
                    x = (l[d] & 255) << 24 | (l[d + 1] & 255) << 16 | (l[d + 2] & 255) << 8 | l[d + 3] & 255;
                    break;
                case 1:
                    x = (l[d + 1] & 255) << 24 | (l[d + 2] & 255) << 16 | (l[d + 3] & 255) << 8 | l[d] & 255;
                    break;
                case 2:
                    x = (l[d + 2] & 255) << 24 | (l[d + 1] & 255) << 16 | (l[d] & 255) << 8 | l[d + 3] & 255;
                }
                A && 0 != (x & 255) && 255 != (x & 255) && (ma.unmult = 255 / (x & 255), x = (ma.__clamp[Math.round((x >>> 24 & 255) * ma.unmult)] & 255) << 24 | (ma.__clamp[Math.round((x >>> 16 & 255) * ma.unmult)] & 255) << 16 | (ma.__clamp[Math.round((x >>> 8 & 255) * ma.unmult)] & 255) << 8 | x & 255);
                A = n;
                la = q;
                null == q && (la = !1);
                null == n && (A = 0);
                switch (A) {
                case 0:
                    t = (h[g] & 255) << 24 | (h[g + 1] & 255) << 16 | (h[g + 2] & 255) << 8 | h[g + 3] & 255;
                    break;
                case 1:
                    t = (h[g + 1] & 255) << 24 | (h[g + 2] & 255) << 16 | (h[g + 3] & 255) << 8 | h[g] & 255;
                    break;
                case 2:
                    t = (h[g + 2] & 255) << 24 | (h[g + 1] & 255) << 16 | (h[g] & 255) << 8 | h[g + 3] & 255;
                }
                la && 0 != (t & 255) && 255 != (t & 255) && (ma.unmult = 255 / (t & 255), t = (ma.__clamp[Math.round((t >>> 24 & 255) * ma.unmult)] & 255) << 24 | (ma.__clamp[Math.round((t >>> 16 & 255) * ma.unmult)] & 255) << 16 | (ma.__clamp[Math.round((t >>> 8 & 255) * ma.unmult)] & 255) << 8 | t & 255);
                la = (x & 255) / 255;
                A = (t & 255) / 255;
                y = 1 - la;
                ja = la + A * y;
                0 == ja ? t = 0 : (t = (ma.__clamp[Math.round(((x >>> 24 & 255) * la + (t >>> 24 & 255) * A * y) / ja)] & 255) << 24 | (t >>> 16 & 255) << 16 | (t >>> 8 & 255) << 8 | t & 255, t = (t >>> 24 & 255) << 24 | (ma.__clamp[Math.round(((x >>> 16 & 255) * la + (t >>> 16 & 255) * A * y) / ja)] & 255) << 16 | (t >>> 8 & 255) << 8 | t & 255, t = (t >>> 24 & 255) << 24 | (t >>> 16 & 255) << 16 | (ma.__clamp[Math.round(((x >>> 8 & 255) * la + (t >>> 8 & 255) * A * y) / ja)] & 255) << 8 | t & 255, t = (t >>> 24 & 255) << 24 | (t >>> 16 & 255) << 16 | (t >>> 8 & 255) << 8 | ma.__clamp[Math.round(255 * ja)] & 255);
                A = n;
                la = q;
                null == q && (la = !1);
                null == n && (A = 0);
                la && (0 == (t & 255) ? 0 != t && (t = 0) : 255 != (t & 255) && (ma.a16 = ma.__alpha16[t & 255], t = ((t >>> 24 & 255) * ma.a16 >> 16 & 255) << 24 | ((t >>> 16 & 255) * ma.a16 >> 16 & 255) << 16 | ((t >>> 8 & 255) * ma.a16 >> 16 & 255) << 8 | t & 255));
                switch (A) {
                case 0:
                    h[g] = t >>> 24 & 255;
                    h[g + 1] = t >>> 16 & 255;
                    h[g + 2] = t >>> 8 & 255;
                    h[g + 3] = t & 255;
                    break;
                case 1:
                    h[g] = t & 255;
                    h[g + 1] = t >>> 24 & 255;
                    h[g + 2] = t >>> 16 & 255;
                    h[g + 3] = t >>> 8 & 255;
                    break;
                case 2:
                    h[g] = t >>> 8 & 255, h[g + 1] = t >>> 16 & 255, h[g + 2] = t >>> 24 & 255, h[g + 3] = t & 255;
                }
                d += 4;
                g += 4;
            }
        } else if (m == n && w == q && C == v) for (K = 0, C = p.height; K < C;) r = K++, d = c.byteOffset + c.stride * r, g = p.byteOffset + p.stride * r, h.set(l.subarray(d, d + p.width * v), g);else for (K = 0, C = p.height; K < C;) for (r = K++, d = c.byteOffset + c.stride * r, g = p.byteOffset + p.stride * r, G = 0, pa = p.width; G < pa;) {
            ++G;
            la = m;
            A = w;
            null == w && (A = !1);
            null == m && (la = 0);
            switch (la) {
            case 0:
                x = (l[d] & 255) << 24 | (l[d + 1] & 255) << 16 | (l[d + 2] & 255) << 8 | l[d + 3] & 255;
                break;
            case 1:
                x = (l[d + 1] & 255) << 24 | (l[d + 2] & 255) << 16 | (l[d + 3] & 255) << 8 | l[d] & 255;
                break;
            case 2:
                x = (l[d + 2] & 255) << 24 | (l[d + 1] & 255) << 16 | (l[d] & 255) << 8 | l[d + 3] & 255;
            }
            A && 0 != (x & 255) && 255 != (x & 255) && (ma.unmult = 255 / (x & 255), x = (ma.__clamp[Math.round((x >>> 24 & 255) * ma.unmult)] & 255) << 24 | (ma.__clamp[Math.round((x >>> 16 & 255) * ma.unmult)] & 255) << 16 | (ma.__clamp[Math.round((x >>> 8 & 255) * ma.unmult)] & 255) << 8 | x & 255);
            A = n;
            la = q;
            null == q && (la = !1);
            null == n && (A = 0);
            la && (0 == (x & 255) ? 0 != x && (x = 0) : 255 != (x & 255) && (ma.a16 = ma.__alpha16[x & 255], x = ((x >>> 24 & 255) * ma.a16 >> 16 & 255) << 24 | ((x >>> 16 & 255) * ma.a16 >> 16 & 255) << 16 | ((x >>> 8 & 255) * ma.a16 >> 16 & 255) << 8 | x & 255));
            switch (A) {
            case 0:
                h[g] = x >>> 24 & 255;
                h[g + 1] = x >>> 16 & 255;
                h[g + 2] = x >>> 8 & 255;
                h[g + 3] = x & 255;
                break;
            case 1:
                h[g] = x & 255;
                h[g + 1] = x >>> 24 & 255;
                h[g + 2] = x >>> 16 & 255;
                h[g + 3] = x >>> 8 & 255;
                break;
            case 2:
                h[g] = x >>> 8 & 255, h[g + 1] = x >>> 16 & 255, h[g + 2] = x >>> 24 & 255, h[g + 3] = x & 255;
            }
            d += 4;
            g += 4;
        }
    }
    b.dirty = !0;
    b.version++;
}
lime._internal.graphics.ImageDataUtil.fillRect = function (b, a, c, d) {
    switch (d) {
    case 1:
        c = (c >>> 16 & 255) << 24 | (c >>> 8 & 255) << 16 | (c & 255) << 8 | c >>> 24 & 255;
        break;
    case 2:
        c = (c >>> 8 & 255) << 24 | (c >>> 16 & 255) << 16 | (c >>> 24 & 255) << 8 | c & 255;
    }
    b.get_transparent() || (c = (c >>> 24 & 255) << 24 | (c >>> 16 & 255) << 16 | (c >>> 8 & 255) << 8 | 255);
    var f = b.buffer.data;
    if (null != f) {
        d = b.buffer.format;
        b.buffer.premultiplied && (0 == (c & 255) ? 0 != c && (c = 0) : 255 != (c & 255) && (ma.a16 = ma.__alpha16[c & 255], c = ((c >>> 24 & 255) * ma.a16 >> 16 & 255) << 24 | ((c >>> 16 & 255) * ma.a16 >> 16 & 255) << 16 | ((c >>> 8 & 255) * ma.a16 >> 16 & 255) << 8 | c & 255));
        a = new lime._internal.graphics._ImageDataUtil.ImageDataView(b, a);
        for (var g, k = 0, h = a.height; k < h;) {
            g = a.byteOffset + a.stride * k++;
            for (var m = 0, n = a.width; m < n;) {
                var x = g + 4 * m++,
                    t = d;
                null == d && (t = 0);
                switch (t) {
                case 0:
                    f[x] = c >>> 24 & 255;
                    f[x + 1] = c >>> 16 & 255;
                    f[x + 2] = c >>> 8 & 255;
                    f[x + 3] = c & 255;
                    break;
                case 1:
                    f[x] = c & 255;
                    f[x + 1] = c >>> 24 & 255;
                    f[x + 2] = c >>> 16 & 255;
                    f[x + 3] = c >>> 8 & 255;
                    break;
                case 2:
                    f[x] = c >>> 8 & 255, f[x + 1] = c >>> 16 & 255, f[x + 2] = c >>> 24 & 255, f[x + 3] = c & 255;
                }
            }
        }
        b.dirty = !0;
        b.version++;
    }
}
lime._internal.graphics.ImageDataUtil.getPixel = function (b, a, c, d) {
    var f = 0,
        g = b.buffer.data;
    a = 4 * (c + b.offsetY) * b.buffer.width + 4 * (a + b.offsetX);
    c = b.buffer.format;
    b = b.buffer.premultiplied;
    null == b && (b = !1);
    null == c && (c = 0);
    switch (c) {
    case 0:
        f = (g[a] & 255) << 24 | (g[a + 1] & 255) << 16 | (g[a + 2] & 255) << 8 | g[a + 3] & 255;
        break;
    case 1:
        f = (g[a + 1] & 255) << 24 | (g[a + 2] & 255) << 16 | (g[a + 3] & 255) << 8 | g[a] & 255;
        break;
    case 2:
        f = (g[a + 2] & 255) << 24 | (g[a + 1] & 255) << 16 | (g[a] & 255) << 8 | g[a + 3] & 255;
    }
    b && 0 != (f & 255) && 255 != (f & 255) && (ma.unmult = 255 / (f & 255), f = (ma.__clamp[Math.round((f >>> 24 & 255) * ma.unmult)] & 255) << 24 | (ma.__clamp[Math.round((f >>> 16 & 255) * ma.unmult)] & 255) << 16 | (ma.__clamp[Math.round((f >>> 8 & 255) * ma.unmult)] & 255) << 8 | f & 255);
    f = (f >>> 24 & 255) << 24 | (f >>> 16 & 255) << 16 | (f >>> 8 & 255) << 8 | 0;
    switch (d) {
    case 1:
        return (f & 255) << 24 | (f >>> 24 & 255) << 16 | (f >>> 16 & 255) << 8 | f >>> 8 & 255;
    case 2:
        return (f >>> 8 & 255) << 24 | (f >>> 16 & 255) << 16 | (f >>> 24 & 255) << 8 | f & 255;
    default:
        return f;
    }
}
lime._internal.graphics.ImageDataUtil.getPixel32 = function (b, a, c, d) {
    var f = 0,
        g = b.buffer.data;
    a = 4 * (c + b.offsetY) * b.buffer.width + 4 * (a + b.offsetX);
    c = b.buffer.format;
    b = b.buffer.premultiplied;
    null == b && (b = !1);
    null == c && (c = 0);
    switch (c) {
    case 0:
        f = (g[a] & 255) << 24 | (g[a + 1] & 255) << 16 | (g[a + 2] & 255) << 8 | g[a + 3] & 255;
        break;
    case 1:
        f = (g[a + 1] & 255) << 24 | (g[a + 2] & 255) << 16 | (g[a + 3] & 255) << 8 | g[a] & 255;
        break;
    case 2:
        f = (g[a + 2] & 255) << 24 | (g[a + 1] & 255) << 16 | (g[a] & 255) << 8 | g[a + 3] & 255;
    }
    b && 0 != (f & 255) && 255 != (f & 255) && (ma.unmult = 255 / (f & 255), f = (ma.__clamp[Math.round((f >>> 24 & 255) * ma.unmult)] & 255) << 24 | (ma.__clamp[Math.round((f >>> 16 & 255) * ma.unmult)] & 255) << 16 | (ma.__clamp[Math.round((f >>> 8 & 255) * ma.unmult)] & 255) << 8 | f & 255);
    switch (d) {
    case 1:
        return (f & 255) << 24 | (f >>> 24 & 255) << 16 | (f >>> 16 & 255) << 8 | f >>> 8 & 255;
    case 2:
        return (f >>> 8 & 255) << 24 | (f >>> 16 & 255) << 16 | (f >>> 24 & 255) << 8 | f & 255;
    default:
        return f;
    }
}
lime._internal.graphics.ImageDataUtil.getPixels = function (b, a, c) {
    if (null == b.buffer.data) return null;
    var d = new haxe.io.Bytes(new ArrayBuffer(4 * (a.width * a.height | 0))),
        f = b.buffer.data,
        g = b.buffer.format,
        k = b.buffer.premultiplied;
    b = new lime._internal.graphics._ImageDataUtil.ImageDataView(b, a);
    for (var h, m = h = 0, n = 0, x = b.height; n < x;) {
        a = b.byteOffset + b.stride * n++;
        for (var t = 0, w = b.width; t < w;) {
            ++t;
            var q = g,
                C = k;
            null == k && (C = !1);
            null == g && (q = 0);
            switch (q) {
            case 0:
                h = (f[a] & 255) << 24 | (f[a + 1] & 255) << 16 | (f[a + 2] & 255) << 8 | f[a + 3] & 255;
                break;
            case 1:
                h = (f[a + 1] & 255) << 24 | (f[a + 2] & 255) << 16 | (f[a + 3] & 255) << 8 | f[a] & 255;
                break;
            case 2:
                h = (f[a + 2] & 255) << 24 | (f[a + 1] & 255) << 16 | (f[a] & 255) << 8 | f[a + 3] & 255;
            }
            C && 0 != (h & 255) && 255 != (h & 255) && (ma.unmult = 255 / (h & 255), h = (ma.__clamp[Math.round((h >>> 24 & 255) * ma.unmult)] & 255) << 24 | (ma.__clamp[Math.round((h >>> 16 & 255) * ma.unmult)] & 255) << 16 | (ma.__clamp[Math.round((h >>> 8 & 255) * ma.unmult)] & 255) << 8 | h & 255);
            switch (c) {
            case 1:
                h = (h & 255) << 24 | (h >>> 24 & 255) << 16 | (h >>> 16 & 255) << 8 | h >>> 8 & 255;
                break;
            case 2:
                h = (h >>> 8 & 255) << 24 | (h >>> 16 & 255) << 16 | (h >>> 24 & 255) << 8 | h & 255;
            }
            d.b[m++] = h >>> 24 & 255;
            d.b[m++] = h >>> 16 & 255;
            d.b[m++] = h >>> 8 & 255;
            d.b[m++] = h & 255;
            a += 4;
        }
    }
    return d;
}
lime._internal.graphics.ImageDataUtil.multiplyAlpha = function (b) {
    var a = b.buffer.data;
    if (null != a && b.buffer.transparent) {
        for (var c = b.buffer.format, d = a.length / 4 | 0, f = 0, g = 0; g < d;) {
            var k = g++,
                h = 4 * k,
                m = c;
            null == c && (m = 0);
            switch (m) {
            case 0:
                f = (a[h] & 255) << 24 | (a[h + 1] & 255) << 16 | (a[h + 2] & 255) << 8 | a[h + 3] & 255;
                break;
            case 1:
                f = (a[h + 1] & 255) << 24 | (a[h + 2] & 255) << 16 | (a[h + 3] & 255) << 8 | a[h] & 255;
                break;
            case 2:
                f = (a[h + 2] & 255) << 24 | (a[h + 1] & 255) << 16 | (a[h] & 255) << 8 | a[h + 3] & 255;
            }
            k *= 4;
            h = c;
            null == c && (h = 0);
            0 == (f & 255) ? 0 != f && (f = 0) : 255 != (f & 255) && (ma.a16 = ma.__alpha16[f & 255], f = ((f >>> 24 & 255) * ma.a16 >> 16 & 255) << 24 | ((f >>> 16 & 255) * ma.a16 >> 16 & 255) << 16 | ((f >>> 8 & 255) * ma.a16 >> 16 & 255) << 8 | f & 255);
            switch (h) {
            case 0:
                a[k] = f >>> 24 & 255;
                a[k + 1] = f >>> 16 & 255;
                a[k + 2] = f >>> 8 & 255;
                a[k + 3] = f & 255;
                break;
            case 1:
                a[k] = f & 255;
                a[k + 1] = f >>> 24 & 255;
                a[k + 2] = f >>> 16 & 255;
                a[k + 3] = f >>> 8 & 255;
                break;
            case 2:
                a[k] = f >>> 8 & 255, a[k + 1] = f >>> 16 & 255, a[k + 2] = f >>> 24 & 255, a[k + 3] = f & 255;
            }
        }
        b.buffer.premultiplied = !0;
        b.dirty = !0;
        b.version++;
    }
}
lime._internal.graphics.ImageDataUtil.setFormat = function (b, a) {
    var c = b.buffer.data;
    if (null != c) {
        var d = c.length / 4 | 0;
        switch (b.get_format()) {
        case 0:
            var f = 0;
            var g = 1;
            var k = 2;
            var h = 3;
            break;
        case 1:
            f = 1;
            g = 2;
            k = 3;
            h = 0;
            break;
        case 2:
            f = 2, g = 1, k = 0, h = 3;
        }
        switch (a) {
        case 0:
            var m = 0;
            var n = 1;
            var x = 2;
            var t = 3;
            break;
        case 1:
            m = 1;
            n = 2;
            x = 3;
            t = 0;
            break;
        case 2:
            m = 2, n = 1, x = 0, t = 3;
        }
        for (var w = 0; w < d;) {
            var q = 4 * w++;
            var C = c[q + f];
            var r = c[q + g];
            var v = c[q + k];
            var K = c[q + h];
            c[q + m] = C;
            c[q + n] = r;
            c[q + x] = v;
            c[q + t] = K;
        }
        b.buffer.format = a;
        b.dirty = !0;
        b.version++;
    }
}
lime._internal.graphics.ImageDataUtil.setPixel = function (b, a, c, d, f) {
    switch (f) {
    case 1:
        d = (d >>> 16 & 255) << 24 | (d >>> 8 & 255) << 16 | (d & 255) << 8 | d >>> 24 & 255;
        break;
    case 2:
        d = (d >>> 8 & 255) << 24 | (d >>> 16 & 255) << 16 | (d >>> 24 & 255) << 8 | d & 255;
    }
    var g = 0,
        k = b.buffer.data,
        h = 4 * (c + b.offsetY) * b.buffer.width + 4 * (a + b.offsetX);
    f = b.buffer.format;
    var m = b.buffer.premultiplied;
    null == m && (m = !1);
    null == f && (f = 0);
    switch (f) {
    case 0:
        g = (k[h] & 255) << 24 | (k[h + 1] & 255) << 16 | (k[h + 2] & 255) << 8 | k[h + 3] & 255;
        break;
    case 1:
        g = (k[h + 1] & 255) << 24 | (k[h + 2] & 255) << 16 | (k[h + 3] & 255) << 8 | k[h] & 255;
        break;
    case 2:
        g = (k[h + 2] & 255) << 24 | (k[h + 1] & 255) << 16 | (k[h] & 255) << 8 | k[h + 3] & 255;
    }
    m && 0 != (g & 255) && 255 != (g & 255) && (ma.unmult = 255 / (g & 255), g = (ma.__clamp[Math.round((g >>> 24 & 255) * ma.unmult)] & 255) << 24 | (ma.__clamp[Math.round((g >>> 16 & 255) * ma.unmult)] & 255) << 16 | (ma.__clamp[Math.round((g >>> 8 & 255) * ma.unmult)] & 255) << 8 | g & 255);
    d = (d >>> 24 & 255) << 24 | (d >>> 16 & 255) << 16 | (d >>> 8 & 255) << 8 | g & 255;
    k = b.buffer.data;
    h = 4 * (c + b.offsetY) * b.buffer.width + 4 * (a + b.offsetX);
    f = b.buffer.format;
    m = b.buffer.premultiplied;
    null == m && (m = !1);
    null == f && (f = 0);
    m && (0 == (d & 255) ? 0 != d && (d = 0) : 255 != (d & 255) && (ma.a16 = ma.__alpha16[d & 255], d = ((d >>> 24 & 255) * ma.a16 >> 16 & 255) << 24 | ((d >>> 16 & 255) * ma.a16 >> 16 & 255) << 16 | ((d >>> 8 & 255) * ma.a16 >> 16 & 255) << 8 | d & 255));
    switch (f) {
    case 0:
        k[h] = d >>> 24 & 255;
        k[h + 1] = d >>> 16 & 255;
        k[h + 2] = d >>> 8 & 255;
        k[h + 3] = d & 255;
        break;
    case 1:
        k[h] = d & 255;
        k[h + 1] = d >>> 24 & 255;
        k[h + 2] = d >>> 16 & 255;
        k[h + 3] = d >>> 8 & 255;
        break;
    case 2:
        k[h] = d >>> 8 & 255, k[h + 1] = d >>> 16 & 255, k[h + 2] = d >>> 24 & 255, k[h + 3] = d & 255;
    }
    b.dirty = !0;
    b.version++;
}
lime._internal.graphics.ImageDataUtil.setPixel32 = function (b, a, c, d, f) {
    switch (f) {
    case 1:
        d = (d >>> 16 & 255) << 24 | (d >>> 8 & 255) << 16 | (d & 255) << 8 | d >>> 24 & 255;
        break;
    case 2:
        d = (d >>> 8 & 255) << 24 | (d >>> 16 & 255) << 16 | (d >>> 24 & 255) << 8 | d & 255;
    }
    b.get_transparent() || (d = (d >>> 24 & 255) << 24 | (d >>> 16 & 255) << 16 | (d >>> 8 & 255) << 8 | 255);
    var g = b.buffer.data;
    a = 4 * (c + b.offsetY) * b.buffer.width + 4 * (a + b.offsetX);
    f = b.buffer.format;
    c = b.buffer.premultiplied;
    null == c && (c = !1);
    null == f && (f = 0);
    c && (0 == (d & 255) ? 0 != d && (d = 0) : 255 != (d & 255) && (ma.a16 = ma.__alpha16[d & 255], d = ((d >>> 24 & 255) * ma.a16 >> 16 & 255) << 24 | ((d >>> 16 & 255) * ma.a16 >> 16 & 255) << 16 | ((d >>> 8 & 255) * ma.a16 >> 16 & 255) << 8 | d & 255));
    switch (f) {
    case 0:
        g[a] = d >>> 24 & 255;
        g[a + 1] = d >>> 16 & 255;
        g[a + 2] = d >>> 8 & 255;
        g[a + 3] = d & 255;
        break;
    case 1:
        g[a] = d & 255;
        g[a + 1] = d >>> 24 & 255;
        g[a + 2] = d >>> 16 & 255;
        g[a + 3] = d >>> 8 & 255;
        break;
    case 2:
        g[a] = d >>> 8 & 255, g[a + 1] = d >>> 16 & 255, g[a + 2] = d >>> 24 & 255, g[a + 3] = d & 255;
    }
    b.dirty = !0;
    b.version++;
}
lime._internal.graphics.ImageDataUtil.setPixels = function (b, a, c, d, f) {
    if (null != b.buffer.data) {
        var g = b.buffer.data,
            k = b.buffer.format,
            h = b.buffer.premultiplied;
        a = new lime._internal.graphics._ImageDataUtil.ImageDataView(b, a);
        var m = b.get_transparent(),
            n = c.bytes;
        c = c.offset;
        for (var x = f != lime.system.Endian.BIG_ENDIAN, t = 0, q = a.height; t < q;) {
            f = a.byteOffset + a.stride * t++;
            for (var w = 0, C = a.width; w < C;) {
                var r = w++;
                var v = x ? n.getInt32(c) : n.b[c + 3] | n.b[c + 2] << 8 | n.b[c + 1] << 16 | n.b[c] << 24;
                c += 4;
                switch (d) {
                case 1:
                    v = (v >>> 16 & 255) << 24 | (v >>> 8 & 255) << 16 | (v & 255) << 8 | v >>> 24 & 255;
                    break;
                case 2:
                    v = (v >>> 8 & 255) << 24 | (v >>> 16 & 255) << 16 | (v >>> 24 & 255) << 8 | v & 255;
                }
                m || (v = (v >>> 24 & 255) << 24 | (v >>> 16 & 255) << 16 | (v >>> 8 & 255) << 8 | 255);
                r = f + 4 * r;
                var K = k,
                    la = h;
                null == h && (la = !1);
                null == k && (K = 0);
                la && (0 == (v & 255) ? 0 != v && (v = 0) : 255 != (v & 255) && (ma.a16 = ma.__alpha16[v & 255], v = ((v >>> 24 & 255) * ma.a16 >> 16 & 255) << 24 | ((v >>> 16 & 255) * ma.a16 >> 16 & 255) << 16 | ((v >>> 8 & 255) * ma.a16 >> 16 & 255) << 8 | v & 255));
                switch (K) {
                case 0:
                    g[r] = v >>> 24 & 255;
                    g[r + 1] = v >>> 16 & 255;
                    g[r + 2] = v >>> 8 & 255;
                    g[r + 3] = v & 255;
                    break;
                case 1:
                    g[r] = v & 255;
                    g[r + 1] = v >>> 24 & 255;
                    g[r + 2] = v >>> 16 & 255;
                    g[r + 3] = v >>> 8 & 255;
                    break;
                case 2:
                    g[r] = v >>> 8 & 255, g[r + 1] = v >>> 16 & 255, g[r + 2] = v >>> 24 & 255, g[r + 3] = v & 255;
                }
            }
        }
        b.dirty = !0;
        b.version++;
    }
}
lime._internal.graphics.ImageDataUtil.unmultiplyAlpha = function (b) {
    var a = b.buffer.data;
    if (null != a) {
        for (var c = b.buffer.format, d = a.length / 4 | 0, f = 0, g = 0; g < d;) {
            var k = g++,
                h = 4 * k,
                m = c;
            null == c && (m = 0);
            switch (m) {
            case 0:
                f = (a[h] & 255) << 24 | (a[h + 1] & 255) << 16 | (a[h + 2] & 255) << 8 | a[h + 3] & 255;
                break;
            case 1:
                f = (a[h + 1] & 255) << 24 | (a[h + 2] & 255) << 16 | (a[h + 3] & 255) << 8 | a[h] & 255;
                break;
            case 2:
                f = (a[h + 2] & 255) << 24 | (a[h + 1] & 255) << 16 | (a[h] & 255) << 8 | a[h + 3] & 255;
            }
            0 != (f & 255) && 255 != (f & 255) && (ma.unmult = 255 / (f & 255), f = (ma.__clamp[Math.round((f >>> 24 & 255) * ma.unmult)] & 255) << 24 | (ma.__clamp[Math.round((f >>> 16 & 255) * ma.unmult)] & 255) << 16 | (ma.__clamp[Math.round((f >>> 8 & 255) * ma.unmult)] & 255) << 8 | f & 255);
            k *= 4;
            h = c;
            null == c && (h = 0);
            switch (h) {
            case 0:
                a[k] = f >>> 24 & 255;
                a[k + 1] = f >>> 16 & 255;
                a[k + 2] = f >>> 8 & 255;
                a[k + 3] = f & 255;
                break;
            case 1:
                a[k] = f & 255;
                a[k + 1] = f >>> 24 & 255;
                a[k + 2] = f >>> 16 & 255;
                a[k + 3] = f >>> 8 & 255;
                break;
            case 2:
                a[k] = f >>> 8 & 255, a[k + 1] = f >>> 16 & 255, a[k + 2] = f >>> 24 & 255, a[k + 3] = f & 255;
            }
        }
        b.buffer.premultiplied = !1;
        b.dirty = !0;
        b.version++;
    }
}