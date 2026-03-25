haxe.Unserializer = function (b) {
    this.buf = b;
    this.length = this.buf.length;
    this.pos = 0;
    this.scache = [];
    this.cache = [];
    b = haxe.Unserializer.DEFAULT_RESOLVER;
    null == b && (b = new haxe._Unserializer.DefaultResolver(), haxe.Unserializer.DEFAULT_RESOLVER = b);
    this.resolver = b;
}
m["haxe.Unserializer"] = haxe.Unserializer
haxe.Unserializer.__name__ = "haxe.Unserializer"
haxe.Unserializer.initCodes = function () {
    for (var b = [], a = 0, c = haxe.Unserializer.BASE64.length; a < c;) {
        var d = a++;
        b[haxe.Unserializer.BASE64.charCodeAt(d)] = d;
    }
    return b;
}
haxe.Unserializer.run = function (b) {
    return new haxe.Unserializer(b).unserialize();
}
haxe.Unserializer.prototype = {
    readDigits: function () {
        for (var b = 0, a = !1, c = this.pos;;) {
            var d = this.buf.charCodeAt(this.pos);
            if (d != d) break;
            if (45 == d) {
                if (this.pos != c) break;
                a = !0;
            } else {
                if (48 > d || 57 < d) break;
                b = 10 * b + (d - 48);
            }
            this.pos++;
        }
        a && (b *= -1);
        return b;
    },
    readFloat: function () {
        for (var b = this.pos;;) {
            var a = this.buf.charCodeAt(this.pos);
            if (a != a) break;
            if (43 <= a && 58 > a || 101 == a || 69 == a) this.pos++;else break;
        }
        return parseFloat(HxOverrides.substr(this.buf, b, this.pos - b));
    },
    unserializeObject: function (b) {
        for (;;) {
            if (this.pos >= this.length) throw haxe.Exception.thrown("Invalid object");
            if (103 == this.buf.charCodeAt(this.pos)) break;
            var a = this.unserialize();
            if ("string" != typeof a) throw haxe.Exception.thrown("Invalid object key");
            b[a] = this.unserialize();
        }
        this.pos++;
    },
    unserializeEnum: function (b, a) {
        if (58 != this.buf.charCodeAt(this.pos++)) throw haxe.Exception.thrown("Invalid enum format");
        var c = this.readDigits();
        if (0 == c) return Type.createEnum(b, a);
        for (var d = []; 0 < c--;) d.push(this.unserialize());
        return Type.createEnum(b, a, d);
    },
    unserialize: function () {
        switch (this.buf.charCodeAt(this.pos++)) {
        case 65:
            var b = this.unserialize(),
                a = this.resolver.resolveClass(b);
            if (null == a) throw haxe.Exception.thrown("Class not found " + b);
            return a;
        case 66:
            b = this.unserialize();
            a = this.resolver.resolveEnum(b);
            if (null == a) throw haxe.Exception.thrown("Enum not found " + b);
            return a;
        case 67:
            b = this.unserialize();
            a = this.resolver.resolveClass(b);
            if (null == a) throw haxe.Exception.thrown("Class not found " + b);
            a = Object.create(a.prototype);
            this.cache.push(a);
            a.hxUnserialize(this);
            if (103 != this.buf.charCodeAt(this.pos++)) throw haxe.Exception.thrown("Invalid custom data");
            return a;
        case 77:
            b = new haxe.ds.ObjectMap();
            for (this.cache.push(b); 104 != this.buf.charCodeAt(this.pos);) b.set(this.unserialize(), this.unserialize());
            this.pos++;
            return b;
        case 82:
            b = this.readDigits();
            if (0 > b || b >= this.scache.length) throw haxe.Exception.thrown("Invalid string reference");
            return this.scache[b];
        case 97:
            a = [];
            for (this.cache.push(a);;) {
                var c = this.buf.charCodeAt(this.pos);
                if (104 == c) {
                    this.pos++;
                    break;
                }
                117 == c ? (this.pos++, b = this.readDigits(), a[a.length + b - 1] = null) : a.push(this.unserialize());
            }
            return a;
        case 98:
            b = new haxe.ds.StringMap();
            for (this.cache.push(b); 104 != this.buf.charCodeAt(this.pos);) a = this.unserialize(), c = this.unserialize(), b.h[a] = c;
            this.pos++;
            return b;
        case 99:
            b = this.unserialize();
            a = this.resolver.resolveClass(b);
            if (null == a) throw haxe.Exception.thrown("Class not found " + b);
            a = Object.create(a.prototype);
            this.cache.push(a);
            this.unserializeObject(a);
            return a;
        case 100:
            return this.readFloat();
        case 102:
            return !1;
        case 105:
            return this.readDigits();
        case 106:
            b = this.unserialize();
            c = this.resolver.resolveEnum(b);
            if (null == c) throw haxe.Exception.thrown("Enum not found " + b);
            this.pos++;
            for (var d = this.readDigits(), f = c.__constructs__, l = Array(f.length), k = 0, h = f.length; k < h;) a = k++, l[a] = f[a]._hx_name;
            a = l[d];
            if (null == a) throw haxe.Exception.thrown("Unknown enum index " + b + "@" + d);
            a = this.unserializeEnum(c, a);
            this.cache.push(a);
            return a;
        case 107:
            return NaN;
        case 108:
            a = new haxe.ds.List();
            for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) a.add(this.unserialize());
            this.pos++;
            return a;
        case 109:
            return -Infinity;
        case 110:
            return null;
        case 111:
            return a = {}, this.cache.push(a), this.unserializeObject(a), a;
        case 112:
            return Infinity;
        case 113:
            b = new haxe.ds.IntMap();
            this.cache.push(b);
            for (c = this.buf.charCodeAt(this.pos++); 58 == c;) a = this.readDigits(), c = this.unserialize(), b.h[a] = c, c = this.buf.charCodeAt(this.pos++);
            if (104 != c) throw haxe.Exception.thrown("Invalid IntMap format");
            return b;
        case 114:
            b = this.readDigits();
            if (0 > b || b >= this.cache.length) throw haxe.Exception.thrown("Invalid reference");
            return this.cache[b];
        case 115:
            b = this.readDigits();
            c = this.buf;
            if (58 != this.buf.charCodeAt(this.pos++) || this.length - this.pos < b) throw haxe.Exception.thrown("Invalid bytes length");
            d = haxe.Unserializer.CODES;
            null == d && (d = haxe.Unserializer.initCodes(), haxe.Unserializer.CODES = d);
            a = this.pos;
            f = b & 3;
            l = a + (b - f);
            k = new haxe.io.Bytes(new ArrayBuffer(3 * (b >> 2) + (2 <= f ? f - 1 : 0)));
            for (h = 0; a < l;) {
                var m = d[c.charCodeAt(a++)],
                    n = d[c.charCodeAt(a++)];
                k.b[h++] = (m << 2 | n >> 4) & 255;
                m = d[c.charCodeAt(a++)];
                k.b[h++] = (n << 4 | m >> 2) & 255;
                n = d[c.charCodeAt(a++)];
                k.b[h++] = (m << 6 | n) & 255;
            }
            2 <= f && (m = d[c.charCodeAt(a++)], n = d[c.charCodeAt(a++)], k.b[h++] = (m << 2 | n >> 4) & 255, 3 == f && (m = d[c.charCodeAt(a++)], k.b[h++] = (n << 4 | m >> 2) & 255));
            this.pos += b;
            this.cache.push(k);
            return k;
        case 116:
            return !0;
        case 118:
            return 48 <= this.buf.charCodeAt(this.pos) && 57 >= this.buf.charCodeAt(this.pos) && 48 <= this.buf.charCodeAt(this.pos + 1) && 57 >= this.buf.charCodeAt(this.pos + 1) && 48 <= this.buf.charCodeAt(this.pos + 2) && 57 >= this.buf.charCodeAt(this.pos + 2) && 48 <= this.buf.charCodeAt(this.pos + 3) && 57 >= this.buf.charCodeAt(this.pos + 3) && 45 == this.buf.charCodeAt(this.pos + 4) ? (a = HxOverrides.strDate(HxOverrides.substr(this.buf, this.pos, 19)), this.pos += 19) : a = new Date(this.readFloat()), this.cache.push(a), a;
        case 119:
            b = this.unserialize();
            c = this.resolver.resolveEnum(b);
            if (null == c) throw haxe.Exception.thrown("Enum not found " + b);
            a = this.unserializeEnum(c, this.unserialize());
            this.cache.push(a);
            return a;
        case 120:
            throw haxe.Exception.thrown(this.unserialize());
        case 121:
            b = this.readDigits();
            if (58 != this.buf.charCodeAt(this.pos++) || this.length - this.pos < b) throw haxe.Exception.thrown("Invalid string length");
            a = HxOverrides.substr(this.buf, this.pos, b);
            this.pos += b;
            a = decodeURIComponent(a.split("+").join(" "));
            this.scache.push(a);
            return a;
        case 122:
            return 0;
        }
        this.pos--;
        throw haxe.Exception.thrown("Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos);
    },
    __class__: haxe.Unserializer
}
haxe.Unserializer.DEFAULT_RESOLVER = new haxe._Unserializer.DefaultResolver()
haxe.Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:"