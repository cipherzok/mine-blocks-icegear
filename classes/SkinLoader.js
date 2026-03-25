var SkinLoader = function () {};
m.SkinLoader = SkinLoader
SkinLoader.__name__ = "SkinLoader"
SkinLoader.getSkinFrom = function (b, a, c, d, f) {
    a.loading = !0;
    a.loaded = !1;
    a.failed = !1;
    lime.graphics.Image.loadFromFile(b).onComplete(function (b) {
        a.skin.fromData(b);
        SkinLoader.skinLoadedEvent(a);
        null != d && d(a);
    }).onError(function (b) {
        a.failed = !0;
        a.loading = !1;
        a.loaded = !1;
        null != f && f();
    });
}
SkinLoader.loadFromData = function (b, a) {
    a.resetFrames();
    for (var c = 0, d = b.length; c < d;) for (var f = c++, g = 0, p = b[f].length; g < p;) {
        var k = g++;
        a.skin.setPixel(f, k, b[f][k], !0);
    }
    a == SkinLoader.frames && (SkinLoader.msg = "Saved skin loaded!");
}
SkinLoader.loadDefault = function (b, a, c) {
    null == c && (c = !1);
    SkinLoader.frames.skin.copyPixels(lemongine.AssetManager.getImage("frank"), null, null, null, null, !1);
    SkinLoader.frames.loaded = !0;
    c || SkinLoader.saveSkinData();
    a == SkinLoader.frames && (SkinLoader.defaultSkin = !0, b && (SkinLoader.msg = "Default skin loaded!"));
}
SkinLoader.addTransparency = function (b) {
    return SkinLoader.addTransparencyToImage(b.skin);
}
SkinLoader.addTransparencyToImage = function (b) {
    for (var a = !1, c = 0; 272 > c;) {
        for (var d = c++, f = 0; 22 > f;) if (G.gt(255, b.getPixel32(d, f++) >>> 24 & 255)) {
            a = !0;
            break;
        }
        if (a) break;
    }
    if (!a) {
        var g = b.getPixel(1, 1);
        for (c = 0; 272 > c;) for (d = c++, f = 0; 22 > f;) {
            var p = f++;
            b.getPixel(d, p) == g ? b.setPixel(d, p, 0) : 16711935 == g && 16712191 == b.getPixel(d, p) ? b.setPixel(d, p, 0) : 16712191 == g && 16711935 == b.getPixel(d, p) && b.setPixel(d, p, 0);
        }
    }
    return !a;
}
SkinLoader.getMobHeadRect = function (b) {
    for (var a = 0, c; 21 > a;) {
        c = !1;
        for (var d = 0; 16 > d;) if (G.gt(b.getPixel32(d++, a) >>> 24 & 255, 16)) {
            c = !0;
            break;
        }
        if (c) break;
        ++a;
    }
    a = 4 > a ? 0 : Math.floor(.6818181818181818 * a);
    return new lemongine.Rectangle(0, a, 16, 9);
}
SkinLoader.skinLoadedEvent = function (b) {
    SkinLoader.addTransparency(b);
    b.loading = !1;
}
SkinLoader.saveSkinData = function () {
    null != GlobalSave.skins[0] ? (GlobalSave.skins[4] = GlobalSave.skins[3], GlobalSave.skins[3] = GlobalSave.skins[2], GlobalSave.skins[2] = GlobalSave.skins[1], GlobalSave.skins[1] = GlobalSave.skins[0]) : GlobalSave.skins[0] = [];
    SkinLoader.saveSkinDataTo(SkinLoader.frames.skin, GlobalSave.skins[0]);
    GlobalSave.save();
}
SkinLoader.saveSkinDataTo = function (b, a) {
    for (var c = 0; 272 > c;) {
        var d = c++;
        a[d] = [];
        for (var f = 0; 22 > f;) {
            var g = f++;
            a[d][g] = b.getPixel32(d, g);
        }
    }
}
SkinLoader.copySkinData = function (b, a) {
    a.resetFrames();
    for (var c = 0; 272 > c;) for (var d = c++, f = 0; 22 > f;) {
        var g = f++;
        a.skin.setPixel(d, g, b.skin.getPixel32(d, g), !0);
    }
}
SkinLoader.msg = "Default skin loaded!"
SkinLoader.defaultSkin = !1
SkinLoader.frames = new Skin(new lemongine.Image(272, 22))