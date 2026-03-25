haxe.zip.Reader = function (b) {
    this.i = b;
}
m["haxe.zip.Reader"] = haxe.zip.Reader
haxe.zip.Reader.__name__ = "haxe.zip.Reader"
haxe.zip.Reader.readZip = function (b) {
    return new haxe.zip.Reader(b).read();
}
haxe.zip.Reader.prototype = {
    readZipDate: function () {
        var b = this.i.readUInt16(),
            a = this.i.readUInt16();
        return new Date((a >> 9) + 1980, (a >> 5 & 15) - 1, a & 31, b >> 11 & 31, b >> 5 & 63, (b & 31) << 1);
    },
    readExtraFields: function (b) {
        for (var a = new haxe.ds.List(); 0 < b;) {
            if (4 > b) throw haxe.Exception.thrown("Invalid extra fields data");
            var c = this.i.readUInt16(),
                d = this.i.readUInt16();
            if (b < d) throw haxe.Exception.thrown("Invalid extra fields data");
            if (28789 == c) {
                var f = this.i.readByte();
                if (1 != f) {
                    var g = new haxe.io.BytesBuffer();
                    g.addByte(f);
                    g.add(this.i.read(d - 1));
                    a.add(haxe.zip.ExtraField.FUnknown(c, g.getBytes()));
                } else c = this.i.readInt32(), a.add(haxe.zip.ExtraField.FInfoZipUnicodePath(this.i.read(d - 5).toString(), c));
            } else a.add(haxe.zip.ExtraField.FUnknown(c, this.i.read(d)));
            b -= 4 + d;
        }
        return a;
    },
    readEntryHeader: function () {
        var b = this.i,
            a = b.readInt32();
        if (33639248 == a || 101010256 == a) return null;
        if (67324752 != a) throw haxe.Exception.thrown("Invalid Zip Data");
        b.readUInt16();
        a = b.readUInt16();
        if (0 != (a & 63473)) throw haxe.Exception.thrown("Unsupported flags " + a);
        var c = b.readUInt16(),
            d = 0 != c;
        if (d && 8 != c) throw haxe.Exception.thrown("Unsupported compression " + c);
        c = this.readZipDate();
        var f = b.readInt32(),
            g = b.readInt32(),
            k = b.readInt32(),
            h = b.readInt16(),
            m = b.readInt16();
        b = b.readString(h);
        m = this.readExtraFields(m);
        0 != (a & 2048) && m.push(haxe.zip.ExtraField.FUtf8);
        0 != (a & 8) && (f = null);
        return {
            fileName: b,
            fileSize: k,
            fileTime: c,
            compressed: d,
            dataSize: g,
            data: null,
            crc32: f,
            extraFields: m
        };
    },
    read: function () {
        for (var b = new haxe.ds.List(), a = null;;) {
            var c = this.readEntryHeader();
            if (null == c) break;
            if (null == c.crc32) {
                if (c.compressed) {
                    null == a && (a = new haxe.io.Bytes(new ArrayBuffer(65536)));
                    for (var d = new haxe.io.BytesBuffer(), f = new haxe.zip.InflateImpl(this.i, !1, !1);;) {
                        var g = f.readBytes(a, 0, 65536);
                        d.addBytes(a, 0, g);
                        if (65536 > g) break;
                    }
                    c.data = d.getBytes();
                } else c.data = this.i.read(c.dataSize);
                c.crc32 = this.i.readInt32();
                134695760 == c.crc32 && (c.crc32 = this.i.readInt32());
                c.dataSize = this.i.readInt32();
                c.fileSize = this.i.readInt32();
                c.dataSize = c.fileSize;
                c.compressed = !1;
            } else c.data = this.i.read(c.dataSize);
            b.add(c);
        }
        return b;
    },
    __class__: haxe.zip.Reader
}