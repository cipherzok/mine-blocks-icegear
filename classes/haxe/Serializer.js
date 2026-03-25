haxe.Serializer = function () {
    this.buf = new StringBuf();
    this.cache = [];
    this.useCache = haxe.Serializer.USE_CACHE;
    this.useEnumIndex = haxe.Serializer.USE_ENUM_INDEX;
    this.shash = new haxe.ds.StringMap();
    this.scount = 0;
}
m["haxe.Serializer"] = haxe.Serializer
haxe.Serializer.__name__ = "haxe.Serializer"
haxe.Serializer.run = function (b) {
    var a = new haxe.Serializer();
    a.serialize(b);
    return a.toString();
}
haxe.Serializer.prototype = {
    toString: function () {
        return this.buf.b;
    },
    serializeString: function (b) {
        var a = this.shash.h[b];
        null != a ? (this.buf.b += "R", this.buf.b += null == a ? "null" : "" + a) : (this.shash.h[b] = this.scount++, this.buf.b += "y", b = encodeURIComponent(b), this.buf.b += Std.string(b.length), this.buf.b += ":", this.buf.b += null == b ? "null" : "" + b);
    },
    serializeRef: function (b) {
        for (var a = typeof b, c = 0, d = this.cache.length; c < d;) {
            var f = c++,
                g = this.cache[f];
            if (typeof g == a && g == b) return this.buf.b += "r", this.buf.b += null == f ? "null" : "" + f, !0;
        }
        this.cache.push(b);
        return !1;
    },
    serializeFields: function (b) {
        for (var a = 0, c = Reflect.fields(b); a < c.length;) {
            var d = c[a];
            ++a;
            this.serializeString(d);
            this.serialize(Reflect.field(b, d));
        }
        this.buf.b += "g";
    },
    serialize: function (b) {
        var a = Type.typeof(b);
        switch (a._hx_index) {
        case 0:
            this.buf.b += "n";
            break;
        case 1:
            if (0 == b) {
                this.buf.b += "z";
                break;
            }
            this.buf.b += "i";
            this.buf.b += null == b ? "null" : "" + b;
            break;
        case 2:
            isNaN(b) ? this.buf.b += "k" : isFinite(b) ? (this.buf.b += "d", this.buf.b += null == b ? "null" : "" + b) : this.buf.b += 0 > b ? "m" : "p";
            break;
        case 3:
            this.buf.b += b ? "t" : "f";
            break;
        case 4:
            js.Boot.__instanceof(b, aj) ? (b = b.__name__, this.buf.b += "A", this.serializeString(b)) : js.Boot.__instanceof(b, bj) ? (this.buf.b += "B", this.serializeString(b.__ename__)) : this.useCache && this.serializeRef(b) || (this.buf.b += "o", this.serializeFields(b));
            break;
        case 5:
            throw haxe.Exception.thrown("Cannot serialize function");
        case 6:
            a = a.c;
            if (a == String) {
                this.serializeString(b);
                break;
            }
            if (this.useCache && this.serializeRef(b)) break;
            switch (a) {
            case Array:
                var c = 0;
                this.buf.b += "a";
                for (var d = 0, f = b.length; d < f;) a = d++, null == b[a] ? ++c : (0 < c && (1 == c ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b += null == c ? "null" : "" + c), c = 0), this.serialize(b[a]));
                0 < c && (1 == c ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b += null == c ? "null" : "" + c));
                this.buf.b += "h";
                break;
            case Date:
                this.buf.b += "v";
                this.buf.b += Std.string(b.getTime());
                break;
            case haxe.ds.IntMap:
                this.buf.b += "q";
                for (a = b.keys(); a.hasNext();) c = a.next(), this.buf.b += ":", this.buf.b += null == c ? "null" : "" + c, this.serialize(b.h[c]);
                this.buf.b += "h";
                break;
            case haxe.ds.List:
                this.buf.b += "l";
                for (b = b.h; null != b;) a = b.item, b = b.next, this.serialize(a);
                this.buf.b += "h";
                break;
            case haxe.ds.ObjectMap:
                this.buf.b += "M";
                for (a = b.keys(); a.hasNext();) {
                    c = a.next();
                    var l = Reflect.field(c, "__id__");
                    Reflect.deleteField(c, "__id__");
                    this.serialize(c);
                    c.__id__ = l;
                    this.serialize(b.h[c.__id__]);
                }
                this.buf.b += "h";
                break;
            case haxe.ds.StringMap:
                this.buf.b += "b";
                c = Object.keys(b.h);
                l = c.length;
                for (d = 0; d < l;) a = c[d++], this.serializeString(a), this.serialize(b.h[a]);
                this.buf.b += "h";
                break;
            case haxe.io.Bytes:
                this.buf.b += "s";
                this.buf.b += Std.string(Math.ceil(8 * b.length / 6));
                this.buf.b += ":";
                a = 0;
                c = b.length - 2;
                l = haxe.Serializer.BASE64_CODES;
                if (null == l) {
                    l = Array(haxe.Serializer.BASE64.length);
                    d = 0;
                    for (f = haxe.Serializer.BASE64.length; d < f;) {
                        var k = d++;
                        l[k] = HxOverrides.cca(haxe.Serializer.BASE64, k);
                    }
                    haxe.Serializer.BASE64_CODES = l;
                }
                for (; a < c;) d = b.b[a++], f = b.b[a++], k = b.b[a++], this.buf.b += String.fromCodePoint(l[d >> 2]), this.buf.b += String.fromCodePoint(l[(d << 4 | f >> 4) & 63]), this.buf.b += String.fromCodePoint(l[(f << 2 | k >> 6) & 63]), this.buf.b += String.fromCodePoint(l[k & 63]);
                a == c ? (d = b.b[a++], f = b.b[a++], this.buf.b += String.fromCodePoint(l[d >> 2]), this.buf.b += String.fromCodePoint(l[(d << 4 | f >> 4) & 63]), this.buf.b += String.fromCodePoint(l[f << 2 & 63])) : a == c + 1 && (d = b.b[a++], this.buf.b += String.fromCodePoint(l[d >> 2]), this.buf.b += String.fromCodePoint(l[d << 4 & 63]));
                break;
            default:
                this.useCache && this.cache.pop(), null != b.hxSerialize ? (this.buf.b += "C", this.serializeString(a.__name__), this.useCache && this.cache.push(b), b.hxSerialize(this), this.buf.b += "g") : (this.buf.b += "c", this.serializeString(a.__name__), this.useCache && this.cache.push(b), this.serializeFields(b));
            }
            break;
        case 7:
            a = a.e;
            if (this.useCache) {
                if (this.serializeRef(b)) break;
                this.cache.pop();
            }
            this.buf.b += Std.string(this.useEnumIndex ? "j" : "w");
            this.serializeString(a.__ename__);
            this.useEnumIndex ? (this.buf.b += ":", this.buf.b += Std.string(b._hx_index)) : (a = b, this.serializeString(fa[a.__enum__].__constructs__[a._hx_index]._hx_name));
            this.buf.b += ":";
            c = Type.enumParameters(b);
            this.buf.b += Std.string(c.length);
            for (a = 0; a < c.length;) this.serialize(c[a++]);
            this.useCache && this.cache.push(b);
            break;
        default:
            throw haxe.Exception.thrown("Cannot serialize " + Std.string(b));
        }
    },
    __class__: haxe.Serializer
}
haxe.Serializer.USE_CACHE = !1
haxe.Serializer.USE_ENUM_INDEX = !1
haxe.Serializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:"