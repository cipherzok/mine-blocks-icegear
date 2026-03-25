var AdDialog = function (b) {
    this.fadingOut = 0;
    this.adStarted = null;
    this.imageScale = 1;
    this.adImage = this.adImageEntity = null;
    this.adURL = "";
    this.dialog = null;
    this.visible = !1;
    this.scene = b;
};
m.AdDialog = AdDialog
AdDialog.__name__ = "AdDialog"
AdDialog.prototype = {
    request: function () {
        var b = this,
            a = new haxe.ds.StringMap();
        a.h.v = "1.31.2";
        lemongine.Web.send("https://mineblocks.com/1/scripts/getCreative", !0, a, function (a) {
            "0" != HxOverrides.substr(a, 0, 1) && (b.adURL = HxOverrides.substr(a, a.indexOf(";") + 1, null), lime.graphics.Image.loadFromFile(HxOverrides.substr(a, 1, a.indexOf(";") - 1)).onComplete(function (a) {
                null == b.adImage && (b.adImage = new lemongine.Image(), b.adImage.smoothing = !0);
                b.adImage.fromData(a);
                b.updateImageSize();
                b.adStarted = new Date();
                b.visible = !0;
            }).onError(function (a) {
                b.adStarted = null;
            }));
        }, function (a) {
            b.adStarted = null;
        });
    },
    close: function () {
        7 <= this.getSecondsOpen() && (this.visible = !1, this.fadingOut = .25);
    },
    init: function () {
        if (null == this.dialog) {
            var b = lemongine.AssetManager.getImage("ui"),
                a = shader.BlockShader.getShader(shader.BlendMode.NORMAL),
                c = new haxe.ds.StringMap(),
                d = lemongine.Mathz.repeatArray([1, 1, 1, 1], 6);
            c.h.color = d;
            d = lemongine.Mathz.repeatArray([0, 0, 0, 0], 6);
            c.h.colorOffset = d;
            this.dialog = new lemongine.QuadPoolEntity(b, lemongine.shader.BlendMode.NORMAL, a, c);
            this.dialog.customBlendFunc = [lemongine.Lemongine.gl.SRC_ALPHA, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA, lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ONE];
            this.dialog.isTransparent = !0;
            this.dialog.layer = 35;
            this.adImageEntity = new lemongine.Entity([], lemongine.Geom.createQuad(1, 1), lemongine.shader.BasicTexture.getShader());
            this.adImageEntity.setTextureBuffer("texture", this.adImage);
            this.adImageEntity.isTransparent = !0;
            this.adImageEntity.layer = 36;
            this.updateImageSize();
        }
    },
    updateImageSize: function () {
        null != this.adImageEntity && null != this.adImage && (this.adImageEntity.setAttrib("texClip", lemongine.Mathz.repeatArray([0, 0, this.adImage.width, this.adImage.height], 6)), this.adImageEntity.setUniform("texSize", [this.adImage.width, this.adImage.height]), this.imageScale = Math.min(1, Math.min(G.toFloat(400) / G.toFloat(this.adImage.width), G.toFloat(300) / G.toFloat(this.adImage.height))));
    },
    prepareInteraction: function () {
        var b = this;
        0 != this.visible && null != this.adStarted && (this.init(), Main.buttonBehavior("adDialogImage", "" == this.adURL, this.scene.get_width() / 2 - G.toFloat(this.adImage.width) * this.imageScale / 2 | 0, this.scene.get_height() / 2 - G.toFloat(this.adImage.height) * this.imageScale / 2 | 0, G.toFloat(this.adImage.width) * this.imageScale | 0, G.toFloat(this.adImage.height) * this.imageScale | 0, function () {
            if ("http" == HxOverrides.substr(b.adURL, 0, 4)) lemongine.Web.open(b.adURL);else if ("/sound" == HxOverrides.substr(b.adURL, 0, 6)) {
                var a = lemongine.AssetManager.getSound(HxOverrides.substr(b.adURL, 7, null) + "_0");
                null == a || Main.Instance.MUTED || a.play(GlobalSave.soundVol / 100);
            }
        }, !1), Main.buttonBehavior("adDialogClose", 7 >= this.getSecondsOpen(), this.scene.get_width() / 2 + G.toFloat(this.adImage.width) * this.imageScale / 2 + 8 - 80 | 0, this.scene.get_height() / 2 - G.toFloat(this.adImage.height) * this.imageScale / 2 - 8 - 20 | 0, 80, 20, function () {
            b.close();
        }, !1), "adDialogClose" != Main.Instance.getUIHover() && "adDialogImage" != Main.Instance.getUIHover() && (Main.Instance.setUIHover("adDialog", !1), Main.Instance.cursor = lime.ui.MouseCursor.DEFAULT));
    },
    run: function () {
        if (0 < this.fadingOut) this.fadingOut -= 1 / Main.Instance.get_fps();else if (0 == this.visible || null == this.adStarted) return;
        this.dialog.clearPool();
        var b = this.getSecondsOpen(),
            a = lemongine.Mathz.interpolateEnterSmoother(4 * b) - (this.visible ? 0 : lemongine.Mathz.interpolateEnterSmoother(1 - 4 * this.fadingOut - .15)),
            c = lemongine.Mathz.interpolateEnterSmoother(4 * b - .15) - (this.visible ? 0 : lemongine.Mathz.interpolateEnterSmoother(1 - 4 * this.fadingOut)),
            d = new lemongine.Rectangle(this.scene.get_width() / 2 - G.toFloat(this.adImage.width) * this.imageScale / 2 - 8, this.scene.get_height() / 2 - G.toFloat(this.adImage.height) * this.imageScale / 2 - 8, G.toFloat(this.adImage.width) * this.imageScale + 16, G.toFloat(this.adImage.height) * this.imageScale + 16),
            f = this.dialog,
            l = new lemongine.Vector3(),
            p = new lemongine.Point(96, 0),
            Q = new lemongine.Point(1, 1),
            h = new lemongine.Point(this.scene.get_width(), this.scene.get_height()),
            rb = new haxe.ds.StringMap(),
            M = lemongine.Mathz.repeatArray([0, 0, 0, .7 * a], 6);
        rb.h.color = M;
        f.addQuad(l, p, Q, !0, h, null, null, rb);
        f = this.dialog;
        l = new lemongine.Rectangle(Math.round(d.x - 7), Math.round(d.y - 4), Math.round(d.width + 14), Math.round(d.height + 14));
        p = new lemongine.Rectangle(0, 32, 32, 32);
        Q = new lemongine.Rectangle(14, 14, 4, 4);
        rb = new haxe.ds.StringMap();
        M = lemongine.Mathz.repeatArray([0, 0, 0, c], 6);
        rb.h.color = M;
        f.add9Slice(l, p, Q, 0, rb);
        f = this.dialog;
        l = new lemongine.Rectangle(Math.round(d.x), Math.round(d.y) + 16, Math.round(d.width), Math.round(d.height) - 16);
        p = new lemongine.Rectangle(0, 24, 16, 8);
        Q = new lemongine.Rectangle(7, 0, 2, 2);
        rb = new haxe.ds.StringMap();
        M = lemongine.Mathz.repeatArray([0, 0, 0, 5 * a], 6);
        rb.h.color = M;
        M = lemongine.Mathz.repeatArray([.09803921568627451, .24313725490196078, .5529411764705883, 0], 6);
        rb.h.colorOffset = M;
        f.add9Slice(l, p, Q, 0, rb);
        f = this.dialog;
        l = new lemongine.Rectangle(Math.round(d.x), Math.round(d.y), Math.round(d.width) - 80, 15);
        p = new lemongine.Rectangle(0, 16, 8, 8);
        Q = new lemongine.Rectangle(7, 7, 2, 2);
        rb = new haxe.ds.StringMap();
        M = lemongine.Mathz.repeatArray([0, 0, 0, 5 * a], 6);
        rb.h.color = M;
        M = lemongine.Mathz.repeatArray([.09803921568627451, .24313725490196078, .5529411764705883, 0], 6);
        rb.h.colorOffset = M;
        f.add9Slice(l, p, Q, 0, rb);
        f = this.dialog;
        l = new lemongine.Rectangle(Math.round(d.x) + Math.round(d.width) - 80, Math.round(d.y) - 20, 80, 35);
        p = new lemongine.Rectangle(0, 16, 16, 8);
        Q = new lemongine.Rectangle(7, 7, 2, 2);
        rb = new haxe.ds.StringMap();
        M = lemongine.Mathz.repeatArray([0, 0, 0, 5 * a], 6);
        rb.h.color = M;
        M = lemongine.Mathz.repeatArray([.09803921568627451, .24313725490196078, .5529411764705883, 0], 6);
        rb.h.colorOffset = M;
        f.add9Slice(l, p, Q, 0, rb);
        f = TextCache.get("adGetPlusShadow", "Skip ads with Mine Blocks Plus!", new lemongine.Point(Math.floor(d.x + 8), Math.floor(d.y - 13 + 1)), Fonts.get_volter(), new lemongine.Color().fromRGB(0, 0, 0, c), 1);
        f.layer = 36;
        this.scene.draw(f);
        f = TextCache.get("adGetPlus", "Skip ads with Mine Blocks Plus!", new lemongine.Point(Math.floor(d.x + 8), Math.floor(d.y - 13)), Fonts.get_volter(), new lemongine.Color().fromRGB(1, .8705882352941177, .40784313725490196, a), 1);
        f.layer = 37;
        this.scene.draw(f);
        7 > b ? (f = TextCache.get("adClose", "CLOSE IN " + (7 - Math.floor(b)), new lemongine.Point(Math.floor(d.get_right() - 40), Math.floor(d.y - 13 + Fonts.get_volter().height / 2)), Fonts.get_volter(), new lemongine.Color().fromRGB(1, 1, 1, c), 1, lemongine.TextAlignment.CENTER), f.layer = 36, this.scene.draw(f)) : (f = TextCache.get("adClose", "CLOSE", new lemongine.Point(Math.floor(d.get_right() - 20 - 30), Math.floor(d.y - 13 + Fonts.get_volter().height / 2)), Fonts.get_volter(), new lemongine.Color().fromRGB(1, 1, 1, c), 1, lemongine.TextAlignment.CENTER), f.layer = 36, this.scene.draw(f), f = this.dialog, l = new lemongine.Vector3(Math.floor(d.get_right() - 8 - 11), Math.floor(d.get_top() - 20 + 6)), p = new lemongine.Point(170, 240), Q = new lemongine.Point(11, 11), rb = new haxe.ds.StringMap(), M = lemongine.Mathz.repeatArray([1, 1, 1, c], 6), rb.h.color = M, f.addQuad(l, p, Q, !0, null, null, null, rb));
        this.dialog.resetUnusedQuads();
        this.scene.draw(this.dialog);
        this.adImageEntity.setUniform("color", [1, 1, 1, c]);
        f = G.toFloat(this.adImage.width) * this.imageScale;
        l = G.toFloat(this.adImage.height) * this.imageScale;
        this.adImageEntity.transform.reset().scale(f, l).translate(this.scene.get_width() / 2, this.scene.get_height() / 2);
        this.scene.draw(this.adImageEntity);
        this.visible && 15 < b && this.close();
    },
    getSecondsOpen: function () {
        return new Date().getTime() / 1E3 - this.adStarted.getTime() / 1E3;
    },
    __class__: AdDialog
}