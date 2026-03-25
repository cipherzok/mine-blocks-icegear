lemongine.BitmapFont = function (b, a, c, d, f) {
    null == f && (f = 8);
    null == d && (d = 16);
    null == c && (c = "ABCDEFGHIJKLMNOPQRSTUVWXYZ      abcdefghijklmnopqrstuvwxyz      0123456789      ~!@#$%^&*()_-+=[]{}|\\;:'\",.<>?/`");
    null == a && (a = "3343443343442333333432244455555544444444664524444544442444555555444344343355555516322443455344455446456646644345");
    this.width = b.data.width / f | 0;
    this.height = b.data.height / d | 0;
    this.defaultKerning = this.width;
    this.glyphs = new haxe.ds.StringMap();
    this.image = b;
    d = b = 0;
    for (var l, k, h = 0, m = c.length; h < m;) k = h++, l = c.charAt(k), "\n" == l ? (++d, b = 0) : (b >= f && (++d, b = 0), Object.prototype.hasOwnProperty.call(this.glyphs.h, l) || (k = Std.parseInt(a.charAt(k)), this.glyphs.h[l] = new lemongine.pieces.BitmapFontGlyph(l, this.width * b | 0, this.height * d | 0, 1, this.defaultKerning - k)), ++b);
}
m["lemongine.BitmapFont"] = lemongine.BitmapFont
lemongine.BitmapFont.__name__ = "lemongine.BitmapFont"
lemongine.BitmapFont.prototype = {
    cleanText: function (b) {
        for (var a = "", c = 0, d = b.length; c < d;) {
            var f = c++;
            if (Object.prototype.hasOwnProperty.call(this.glyphs.h, b.charAt(f)) || "\n" == b.charAt(f) || "\r" == b.charAt(f)) a += b.charAt(f);
        }
        return a;
    },
    __class__: lemongine.BitmapFont
}