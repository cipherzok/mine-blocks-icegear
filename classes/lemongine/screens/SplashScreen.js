lemongine.screens.SplashScreen = function () {
    this.wasPaused = !1;
    this.tick = 0;
    this.splashPixel = new lemongine.Point(4, 4);
    this.splashStartTime = 0;
    this.splashArray = [];
    this.splashLookup = new haxe.ds.IntMap();
    this.splashSoundPlayed = !1;
}
m["lemongine.screens.SplashScreen"] = lemongine.screens.SplashScreen
lemongine.screens.SplashScreen.__name__ = "lemongine.screens.SplashScreen"
lemongine.screens.SplashScreen.__super__ = lemongine.screens.BaseScreen
lemongine.screens.SplashScreen.prototype = z(lemongine.screens.BaseScreen.prototype, {
    loadAssets: function () {
        this.splashImage = lemongine.AssetManager.loadImage("assets/images/zanzlanz.png");
        this.splashSound = lemongine.AssetManager.loadSound("assets/sfx/zanzlanz-splash.ogg");
    },
    initialize: function () {
        this.scene = new lemongine.Scene(Main.Instance.scene.get_width(), Main.Instance.scene.get_height());
        this.scene.setup2D(this.scene.get_width(), this.scene.get_height(), new lemongine.Color().fromHex(-16777216));
        this.splashQuadPool = new lemongine.QuadPoolEntity(this.splashImage);
        var b = Math.floor(Math.max(1, this.scene.get_width() / 320));
        this.splashQuadPool.transform.translate(-140, -30, 0).scale(b, b).translate(this.scene.get_width() / 2, this.scene.get_height() / 2);
        for (b = 0; 70 > b;) for (var a = b++, c = 0; 18 > c;) this.splashQuadPool.addQuad(new lemongine.Vector3(4 * a, 4 * c++, 0), null, new lemongine.Point());
        this.splashQuadPool.addQuad(new lemongine.Vector3(58, 2, 0), null, new lemongine.Point());
        this.splashQuadPool.addQuad(new lemongine.Vector3(112, 2, 0), null, new lemongine.Point());
        this.splashQuadPool.addQuad(new lemongine.Vector3(174, 2, 0), null, new lemongine.Point());
        for (b = 0; 14 > b;) a = b++, c = this.splashImage.getPixel(4 * a, 0), this.splashLookup.h[c] = a, this.splashArray[a] = new lemongine.Point(4 * a, 1), this.splashArray[a + 14] = new lemongine.Point(4 * a, 5), this.splashArray[a + 28] = new lemongine.Point(4 * a, 9);
        this.splashStartTime = new Date().getTime() / 1E3;
        return !0;
    },
    run: function () {
        if (1 == Main.Instance.enginePaused) return this.splashSoundPlayed ? (this.splashSound.stop(), this.splashStartTime = new Date().getTime() / 1E3 - this.tick / 30) : this.splashStartTime = new Date().getTime() / 1E3, this.wasPaused = !0, !1;
        this.wasPaused && (this.wasPaused = !1, this.splashSoundPlayed && this.splashSound.play(.6, 0, new Date().getTime() / 1E3 - this.splashStartTime));
        this.tick = 30 * (new Date().getTime() / 1E3 - this.splashStartTime) + 14;
        var b = Math.max(0, Math.min(38, this.tick - 40)) + Math.max(0, this.tick - 106);
        0 <= this.tick && 0 == this.splashSoundPlayed && Main.Instance.firstInteraction && (this.splashSoundPlayed = !0, this.splashSound.play(.6, 0, new Date().getTime() / 1E3 - this.splashStartTime));
        if (40 <= this.tick) for (var a = 0; 70 > a;) for (var c = a++, d = 0; 18 > d;) {
            var f = d++,
                g = this.splashLookup,
                h = this.splashImage.getPixel(c, f + 13);
            g = g.h[h];
            h = this.splashLookup;
            var m = this.splashImage.getPixel(c, f + 31);
            h = h.h[m];
            -.7 < Math.sin(-b / 20 + (f + 5) / 200 + c / 200) ? this.splashQuadPool.updateQuad(c + 70 * f, new lemongine.Vector3(4 * c, 4 * f, 0), this.splashArray[Math.max(0, Math.min(13, Math.floor(G.toFloat(h) + Math.max(0, 13 + 15 * Math.sin(-b / 20 + (f + 5) / 200 + c / 200))))) + 28], this.splashPixel) : 60 < this.tick && 35 > c && 4 > Math.abs(c + 2 * (f + 5) - 4 * (this.tick - 60) - 8) || 75 < this.tick && 35 <= c && 4 > Math.abs(c + 2 * (f + 5) - 4 * (this.tick - 75) - 30) ? this.splashQuadPool.updateQuad(c + 70 * f, new lemongine.Vector3(4 * c, 4 * f, 0), this.splashArray[Math.max(0, Math.min(13, Math.floor(G.toFloat(g) + Math.max(0, 20 + 20 * Math.sin(-b / 20 + (f + 5) / 200 + c / 200))))) + 14], this.splashPixel) : (h = 3 * Math.sin(Math.floor(this.tick / 2) + 1E3 * Math.sin(.5 * c) + 100 * Math.sin(.24 * f)) + .5, h *= .001 * Math.pow(this.tick - 90, 2), this.splashQuadPool.updateQuad(c + 70 * f, new lemongine.Vector3(4 * c, 4 * f, 0), this.splashArray[Math.max(0, Math.min(13, Math.floor(G.toFloat(g) + h)))], this.splashPixel));
        }
        10 < this.tick && 114 > this.tick ? this.splashQuadPool.updateQuad(1260, null, new lemongine.Point(70, 40 - 10 * Math.floor(4 * this.splashFadeInOut(this.tick, 10, 10, 103, 15))), new lemongine.Point(54, 10)) : this.splashQuadPool.updateQuad(1260, null, new lemongine.Point(0, 0), new lemongine.Point(0, 0));
        20 < this.tick && 116 > this.tick ? this.splashQuadPool.updateQuad(1261, null, new lemongine.Point(124, 40 - 10 * Math.floor(4 * this.splashFadeInOut(this.tick, 20, 10, 105, 15))), new lemongine.Point(62, 10)) : this.splashQuadPool.updateQuad(1261, null, new lemongine.Point(0, 0), new lemongine.Point(0, 0));
        30 < this.tick && 118 > this.tick ? this.splashQuadPool.updateQuad(1262, null, new lemongine.Point(186, 40 - 10 * Math.floor(4 * this.splashFadeInOut(this.tick, 30, 10, 107, 15))), new lemongine.Point(50, 10)) : this.splashQuadPool.updateQuad(1262, null, new lemongine.Point(0, 0), new lemongine.Point(0, 0));
        if (135 <= this.tick) return this.splashStartTime = new Date().getTime() / 1E3, this.splashSoundPlayed = !1, !0;
        this.scene.draw(this.splashQuadPool);
        return !1;
    },
    splashFadeInOut: function (b, a, c, d, f) {
        return b < a ? 0 : b < a + c ? (b - a) / c : b < d ? 1 : b < d + f ? (d + f - b) / f : 0;
    },
    __class__: lemongine.screens.SplashScreen
})