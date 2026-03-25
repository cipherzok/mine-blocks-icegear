haxe.zip.InflateImpl = function (b, a, c) {
    null == c && (c = !0);
    null == a && (a = !0);
    this.isFinal = !1;
    this.htools = new haxe.zip.HuffTools();
    this.huffman = this.buildFixedHuffman();
    this.huffdist = null;
    this.dist = this.len = 0;
    this.state = a ? haxe.zip._InflateImpl.State.Head : haxe.zip._InflateImpl.State.Block;
    this.input = b;
    this.needed = this.nbits = this.bits = 0;
    this.output = null;
    this.outpos = 0;
    this.lengths = [];
    this.lengths.push(-1);
    this.lengths.push(-1);
    this.lengths.push(-1);
    this.lengths.push(-1);
    this.lengths.push(-1);
    this.lengths.push(-1);
    this.lengths.push(-1);
    this.lengths.push(-1);
    this.lengths.push(-1);
    this.lengths.push(-1);
    this.lengths.push(-1);
    this.lengths.push(-1);
    this.lengths.push(-1);
    this.lengths.push(-1);
    this.lengths.push(-1);
    this.lengths.push(-1);
    this.lengths.push(-1);
    this.lengths.push(-1);
    this.lengths.push(-1);
    this.window = new haxe.zip._InflateImpl.Window(c);
}
m["haxe.zip.InflateImpl"] = haxe.zip.InflateImpl
haxe.zip.InflateImpl.__name__ = "haxe.zip.InflateImpl"
haxe.zip.InflateImpl.prototype = {
    buildFixedHuffman: function () {
        if (null != haxe.zip.InflateImpl.FIXED_HUFFMAN) return haxe.zip.InflateImpl.FIXED_HUFFMAN;
        for (var b = [], a = 0; 288 > a;) {
            var c = a++;
            b.push(143 >= c ? 8 : 255 >= c ? 9 : 279 >= c ? 7 : 8);
        }
        haxe.zip.InflateImpl.FIXED_HUFFMAN = this.htools.make(b, 0, 288, 10);
        return haxe.zip.InflateImpl.FIXED_HUFFMAN;
    },
    readBytes: function (b, a, c) {
        this.needed = c;
        this.outpos = a;
        this.output = b;
        if (0 < c) for (; this.inflateLoop(););
        return c - this.needed;
    },
    getBits: function (b) {
        for (; this.nbits < b;) this.bits |= this.input.readByte() << this.nbits, this.nbits += 8;
        var a = this.bits & (1 << b) - 1;
        this.nbits -= b;
        this.bits >>= b;
        return a;
    },
    getBit: function () {
        0 == this.nbits && (this.nbits = 8, this.bits = this.input.readByte());
        var b = 1 == (this.bits & 1);
        this.nbits--;
        this.bits >>= 1;
        return b;
    },
    getRevBits: function (b) {
        return 0 == b ? 0 : this.getBit() ? 1 << b - 1 | this.getRevBits(b - 1) : this.getRevBits(b - 1);
    },
    resetBits: function () {
        this.nbits = this.bits = 0;
    },
    addBytes: function (b, a, c) {
        this.window.addBytes(b, a, c);
        this.output.blit(this.outpos, b, a, c);
        this.needed -= c;
        this.outpos += c;
    },
    addByte: function (b) {
        this.window.addByte(b);
        this.output.b[this.outpos] = b & 255;
        this.needed--;
        this.outpos++;
    },
    addDistOne: function (b) {
        for (var a = this.window.getLastChar(), c = 0; c < b;) ++c, this.addByte(a);
    },
    addDist: function (b, a) {
        this.addBytes(this.window.buffer, this.window.pos - b, a);
    },
    applyHuffman: function (b) {
        switch (b._hx_index) {
        case 0:
            return b.i;
        case 1:
            return this.applyHuffman(this.getBit() ? b.right : b.left);
        case 2:
            return this.applyHuffman(b.table[this.getBits(b.n)]);
        }
    },
    inflateLengths: function (b, a) {
        for (var c = 0, d = 0; c < a;) {
            var f = this.applyHuffman(this.huffman);
            switch (f) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
                d = f;
                b[c] = f;
                ++c;
                break;
            case 16:
                f = c + 3 + this.getBits(2);
                if (f > a) throw haxe.Exception.thrown("Invalid data");
                for (; c < f;) b[c] = d, ++c;
                break;
            case 17:
                c += 3 + this.getBits(3);
                if (c > a) throw haxe.Exception.thrown("Invalid data");
                break;
            case 18:
                c += 11 + this.getBits(7);
                if (c > a) throw haxe.Exception.thrown("Invalid data");
                break;
            default:
                throw haxe.Exception.thrown("Invalid data");
            }
        }
    },
    inflateLoop: function () {
        switch (this.state._hx_index) {
        case 0:
            var b = this.input.readByte();
            if (8 != (b & 15)) throw haxe.Exception.thrown("Invalid data");
            var a = this.input.readByte();
            if (0 != ((b << 8) + a) % 31) throw haxe.Exception.thrown("Invalid data");
            if (0 != (a & 32)) throw haxe.Exception.thrown("Unsupported dictionary");
            this.state = haxe.zip._InflateImpl.State.Block;
            return !0;
        case 1:
            switch (this.isFinal = this.getBit(), this.getBits(2)) {
            case 0:
                this.len = this.input.readUInt16();
                if (this.input.readUInt16() != 65535 - this.len) throw haxe.Exception.thrown("Invalid data");
                this.state = haxe.zip._InflateImpl.State.Flat;
                b = this.inflateLoop();
                this.resetBits();
                return b;
            case 1:
                return this.huffman = this.buildFixedHuffman(), this.huffdist = null, this.state = haxe.zip._InflateImpl.State.CData, !0;
            case 2:
                b = this.getBits(5) + 257;
                a = this.getBits(5) + 1;
                for (var c = this.getBits(4) + 4, d = 0; d < c;) this.lengths[haxe.zip.InflateImpl.CODE_LENGTHS_POS[d++]] = this.getBits(3);
                for (d = c; 19 > d;) this.lengths[haxe.zip.InflateImpl.CODE_LENGTHS_POS[d++]] = 0;
                this.huffman = this.htools.make(this.lengths, 0, 19, 8);
                c = [];
                d = 0;
                for (var f = b + a; d < f;) ++d, c.push(0);
                this.inflateLengths(c, b + a);
                this.huffdist = this.htools.make(c, b, a, 16);
                this.huffman = this.htools.make(c, 0, b, 16);
                this.state = haxe.zip._InflateImpl.State.CData;
                return !0;
            default:
                throw haxe.Exception.thrown("Invalid data");
            }
        case 2:
            a = this.applyHuffman(this.huffman);
            if (256 > a) return this.addByte(a), 0 < this.needed;
            if (256 == a) this.state = this.isFinal ? haxe.zip._InflateImpl.State.Crc : haxe.zip._InflateImpl.State.Block;else {
                a -= 257;
                b = haxe.zip.InflateImpl.LEN_EXTRA_BITS_TBL[a];
                if (-1 == b) throw haxe.Exception.thrown("Invalid data");
                this.len = haxe.zip.InflateImpl.LEN_BASE_VAL_TBL[a] + this.getBits(b);
                a = null == this.huffdist ? this.getRevBits(5) : this.applyHuffman(this.huffdist);
                b = haxe.zip.InflateImpl.DIST_EXTRA_BITS_TBL[a];
                if (-1 == b) throw haxe.Exception.thrown("Invalid data");
                this.dist = haxe.zip.InflateImpl.DIST_BASE_VAL_TBL[a] + this.getBits(b);
                if (this.dist > this.window.available()) throw haxe.Exception.thrown("Invalid data");
                this.state = 1 == this.dist ? haxe.zip._InflateImpl.State.DistOne : haxe.zip._InflateImpl.State.Dist;
            }
            return !0;
        case 3:
            return b = this.len < this.needed ? this.len : this.needed, a = this.input.read(b), this.len -= b, this.addBytes(a, 0, b), 0 == this.len && (this.state = this.isFinal ? haxe.zip._InflateImpl.State.Crc : haxe.zip._InflateImpl.State.Block), 0 < this.needed;
        case 4:
            b = this.window.checksum();
            if (null == b) return this.state = haxe.zip._InflateImpl.State.Done, !0;
            if (!b.equals(haxe.crypto.Adler32.read(this.input))) throw haxe.Exception.thrown("Invalid CRC");
            this.state = haxe.zip._InflateImpl.State.Done;
            return !0;
        case 5:
            for (; 0 < this.len && 0 < this.needed;) b = this.len < this.dist ? this.len : this.dist, b = this.needed < b ? this.needed : b, this.addDist(this.dist, b), this.len -= b;
            0 == this.len && (this.state = haxe.zip._InflateImpl.State.CData);
            return 0 < this.needed;
        case 6:
            return b = this.len < this.needed ? this.len : this.needed, this.addDistOne(b), this.len -= b, 0 == this.len && (this.state = haxe.zip._InflateImpl.State.CData), 0 < this.needed;
        case 7:
            return !1;
        }
    },
    __class__: haxe.zip.InflateImpl
}
haxe.zip.InflateImpl.LEN_EXTRA_BITS_TBL = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, -1, -1]
haxe.zip.InflateImpl.LEN_BASE_VAL_TBL = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258]
haxe.zip.InflateImpl.DIST_EXTRA_BITS_TBL = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, -1, -1]
haxe.zip.InflateImpl.DIST_BASE_VAL_TBL = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577]
haxe.zip.InflateImpl.CODE_LENGTHS_POS = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]