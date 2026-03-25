screens.Menu_EnderCredits = function (b) {
    this.scrollPosition = 0;
    this.fadeDirection = !0;
    this.titleWidth = this.fade = 0;
    this.titleHeight = 78;
    this.scene = b;
    var a = this.titleHeight * lemongine.AssetManager.getImage("title_logo").width,
        c = lemongine.AssetManager.getImage("title_logo").height;
    this.titleWidth = G.toFloat(a) / G.toFloat(c);
    this.backgroundEntity = new lemongine.Entity([], lemongine.Geom.createQuad(1, 1), lemongine.shader.BasicTextureSingle.getShader());
    this.backgroundEntity.transform.reset().translate(.5, .5).scale(b.get_width(), b.get_height());
    lemongine.shader.BasicTextureSingle.setupEntity(this.backgroundEntity, lemongine.AssetManager.getImage("stone_brick_blur"));
    this.backgroundEntity.customBlendFunc = [lemongine.Lemongine.gl.SRC_ALPHA, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA, lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ONE];
    this.backgroundEntity.isTransparent = !0;
    this.backgroundEntity.layer = -2;
    this.vignetteEntity = new lemongine.Entity([], lemongine.Geom.createQuad(1, 1), lemongine.shader.GradientRadial.getShader());
    lemongine.shader.GradientRadial.setupEntity(this.vignetteEntity, [0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1], new lemongine.Color(0), new lemongine.Color(-1543503872), new lemongine.Rectangle(.5, .5, 0, .6));
    this.vignetteEntity.isTransparent = !0;
    this.vignetteEntity.customBlendFunc = [lemongine.Lemongine.gl.SRC_ALPHA, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA, lemongine.Lemongine.gl.DST_ALPHA, lemongine.Lemongine.gl.ONE];
    this.vignetteEntity.transform.reset().translate(.5, .5).scale(b.get_width(), b.get_height());
    this.vignetteEntity.layer = -1;
    this.fadeInEntity = new lemongine.Entity([], lemongine.Geom.createQuad(1, 1), lemongine.shader.BasicColor.getShader());
    this.fadeInEntity.isTransparent = !0;
    this.fadeInEntity.customBlendFunc = [lemongine.Lemongine.gl.SRC_ALPHA, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA, lemongine.Lemongine.gl.DST_ALPHA, lemongine.Lemongine.gl.ONE];
    this.fadeInEntity.transform.reset().translate(.5, .5).scale(b.get_width(), b.get_height());
    this.fadeInEntity.layer = 1;
}
m["screens.Menu_EnderCredits"] = screens.Menu_EnderCredits
screens.Menu_EnderCredits.__name__ = "screens.Menu_EnderCredits"
screens.Menu_EnderCredits.prototype = {
    resize: function () {
        this.backgroundEntity.transform.reset().translate(.5, .5).scale(this.scene.get_width(), this.scene.get_height());
        this.vignetteEntity.transform.reset().translate(.5, .5).scale(this.scene.get_width(), this.scene.get_height());
        this.fadeInEntity.transform.reset().translate(.5, .5).scale(this.scene.get_width(), this.scene.get_height());
    },
    run: function (b) {
        if (this.fadeDirection) {
            if (1 > this.fade) this.fade += 1 / (30 * Main.Instance.get_fps() / 25);else if (1 == Main.Instance.keyDown(27) || 1 == Main.Instance.keyDown(13)) this.fadeDirection = !1;
            -800 > this.scrollPosition && (this.fadeDirection = !1);
        } else 0 < this.fade ? this.fade -= 1 / (30 * Main.Instance.get_fps() / 25) : Main.Instance.set_frame("game");
        this.backgroundEntity.setUniform("texClip", [0, b / 158 * 32, this.scene.get_width(), this.scene.get_height()]);
        this.scene.draw(this.backgroundEntity);
        this.scene.draw(this.vignetteEntity);
        this.scrollPosition -= 1 / (Main.Instance.get_fps() / 25);
        b = this.scene;
        var a = lemongine.AssetManager.getImage("title_logo"),
            c = new lemongine.Point(this.scene.get_width() / 2 - this.titleWidth / 2, this.scene.get_height() + this.scrollPosition * this.scene.get_height() / 414),
            d = this.titleHeight,
            f = lemongine.AssetManager.getImage("title_logo").height;
        b.draw2D(a, c, null, null, null, null, G.toFloat(d) / G.toFloat(f));
        b = TextCache.get("endCredits", "Congratulations!\n\nYou have restored peace in The\nEnder. You have done what is\nright. The endermen were in need\nand they couldn't ask for your\nhelp, but now, the ender dragon is\ngone and the lives of the\nendermen have been restored. No\nlonger will they stare into your\neyes and hope for belief.\n\nThis benevolent act of heroism will\nstay with you forever. However,\nyour adventure does not end\nhere. The story will always\ncontinue...\n\nTo be continued...", new lemongine.Point(this.scene.get_width() / 2 - this.titleWidth / 2 + 20, this.scene.get_height() + 100 + this.scrollPosition * this.scene.get_height() / 414), Fonts.get_volter(), lemongine.Color.white, 2.1);
        this.scene.draw(b);
        this.fadeInEntity.setUniform("color", [0, 0, 0, 1 - this.fade]);
        this.scene.draw(this.fadeInEntity);
    },
    __class__: screens.Menu_EnderCredits
}