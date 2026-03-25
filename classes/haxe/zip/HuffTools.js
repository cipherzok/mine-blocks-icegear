haxe.zip.HuffTools = function () {}
m["haxe.zip.HuffTools"] = haxe.zip.HuffTools
haxe.zip.HuffTools.__name__ = "haxe.zip.HuffTools"
haxe.zip.HuffTools.prototype = {
    treeDepth: function (b) {
        switch (b._hx_index) {
        case 0:
            return 0;
        case 1:
            var a = this.treeDepth(b.left);
            b = this.treeDepth(b.right);
            return 1 + (a < b ? a : b);
        case 2:
            throw haxe.Exception.thrown("assert");
        }
    },
    treeCompress: function (b) {
        var a = this.treeDepth(b);
        if (0 == a) return b;
        if (1 == a) {
            if (1 == b._hx_index) return haxe.zip.Huffman.NeedBit(this.treeCompress(b.left), this.treeCompress(b.right));
            throw haxe.Exception.thrown("assert");
        }
        for (var c = 1 << a, d = [], f = 0; f < c;) ++f, d.push(haxe.zip.Huffman.Found(-1));
        this.treeWalk(d, 0, 0, a, b);
        return haxe.zip.Huffman.NeedBits(a, d);
    },
    treeWalk: function (b, a, c, d, f) {
        1 == f._hx_index ? 0 < d ? (this.treeWalk(b, a, c + 1, d - 1, f.left), this.treeWalk(b, a | 1 << c, c + 1, d - 1, f.right)) : b[a] = this.treeCompress(f) : b[a] = this.treeCompress(f);
    },
    treeMake: function (b, a, c, d) {
        if (d > a) throw haxe.Exception.thrown("Invalid huffman");
        var f = c << 5 | d;
        if (b.h.hasOwnProperty(f)) return haxe.zip.Huffman.Found(b.h[f]);
        c <<= 1;
        ++d;
        return haxe.zip.Huffman.NeedBit(this.treeMake(b, a, c, d), this.treeMake(b, a, c | 1, d));
    },
    make: function (b, a, c, d) {
        if (1 == c) return haxe.zip.Huffman.NeedBit(haxe.zip.Huffman.Found(0), haxe.zip.Huffman.Found(0));
        var f = [],
            g = [];
        if (32 < d) throw haxe.Exception.thrown("Invalid huffman");
        for (var k = 0; k < d;) ++k, f.push(0), g.push(0);
        for (k = 0; k < c;) {
            var h = b[k++ + a];
            if (h >= d) throw haxe.Exception.thrown("Invalid huffman");
            f[h]++;
        }
        var m = 0;
        k = 1;
        for (var n = d - 1; k < n;) h = k++, m = m + f[h] << 1, g[h] = m;
        f = new haxe.ds.IntMap();
        for (k = 0; k < c;) h = k++, m = b[h + a], 0 != m && (n = g[m - 1], g[m - 1] = n + 1, f.h[n << 5 | m] = h);
        return this.treeCompress(haxe.zip.Huffman.NeedBit(this.treeMake(f, d, 0, 1), this.treeMake(f, d, 1, 1)));
    },
    __class__: haxe.zip.HuffTools
}