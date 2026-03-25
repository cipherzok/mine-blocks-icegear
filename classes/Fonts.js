var Fonts = function () {};
m.Fonts = Fonts
Fonts.__name__ = "Fonts"
Fonts.get_volter = function () {
    null == Fonts.volter && (Fonts.volter = new lemongine.BitmapFont(lemongine.AssetManager.getImage("font_volter"), "33333333\n53332333\n23333313\n334\n33333433\n76471333\n34343313\n33\n36333333\n33\n37121152\n35524335\n54411667\n56644316\n14\n\n33333313\n13333335\n55553333\n33133333\n3\n33333313\n33333777\n66333333\n11333333", "ABCDEFGH\nIJKLMNOP\nQRSTUVWX\nYZ \nabcdefgh\nijklmnop\nqrstuvwx\nyz\n01234567\n89\n~!@#$%^&\n*()_-+=[\n]{}|\\;:'\n\",.<>?/`\n\u2122\u2022\n\n\u00c4\u00c1\u00c0\u00c3\u00c2\u00c5\u00c6\u00c7\n\u0152\u00df\u00cb\u00c9\u00c8\u1ebc\u00ca\u00cf\n\u00cd\u00cc\u0128\u00ce\u00d1\u00d6\u00d3\u00d2\n\u00d5\u00d4\u00d8\u00dc\u00da\u00d9\u0168\u00db\n\u0178\n\u00e4\u00e1\u00e0\u00e3\u00e2\u00e5\u00e6\u00e7\n\u00eb\u00e9\u00e8\u1ebd\u00ea\u00ef\u00ed\u00ec\n\u0129\u00ee\u00f1\u00f6\u00f3\u00f2\u00f5\u00f4\n\u00f8\u0153\u00fc\u00fa\u00f9\u0169\u00fb\u00ff", 32));
    return Fonts.volter;
}
Fonts.get_basis33 = function () {
    null == Fonts.basis33 && (Fonts.basis33 = new lemongine.BitmapFont(lemongine.AssetManager.getImage("font_basis33"), "11111111\n11111111\n11111111\n111\n11111111\n11111111\n11111111\n11\n11111111\n11\n11111111\n11111111\n11111111\n11111111\n\n\n11111111\n11111111\n11111111\n11111111\n1\n11111111\n11111111\n11111111\n11111111", "ABCDEFGH\nIJKLMNOP\nQRSTUVWX\nYZ \nabcdefgh\nijklmnop\nqrstuvwx\nyz\n01234567\n89\n~!@#$%^&\n*()_-+=[\n]{}|\\;:'\n\",.<>?/`\n\n\n\u00c4\u00c1\u00c0\u00c3\u00c2\u00c5\u00c6\u00c7\n\u0152\u00df\u00cb\u00c9\u00c8\u1ebc\u00ca\u00cf\n\u00cd\u00cc\u0128\u00ce\u00d1\u00d6\u00d3\u00d2\n\u00d5\u00d4\u00d8\u00dc\u00da\u00d9\u0168\u00db\n\u0178\n\u00e4\u00e1\u00e0\u00e3\u00e2\u00e5\u00e6\u00e7\n\u00eb\u00e9\u00e8\u1ebd\u00ea\u00ef\u00ed\u00ec\n\u0129\u00ee\u00f1\u00f6\u00f3\u00f2\u00f5\u00f4\n\u00f8\u0153\u00fc\u00fa\u00f9\u0169\u00fb\u00ff", 32));
    return Fonts.basis33;
}