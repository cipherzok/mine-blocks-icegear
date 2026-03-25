screens.Menu_Pause = function (b) {
    this.generatingTipNum = this.achievementsScrollPosition = this.achievementsScrollMouseOffset = 0;
    this.statis = "Generating world...";
    this.generatingTimer = 0;
    this.currentFrame = 1;
    this.loadingBar = 0;
    this.game = b;
    this.scene = b.scene;
    this.backgroundEntity = new lemongine.Entity([], lemongine.Geom.createQuad(1, 1), lemongine.shader.BasicVertexColor.getShader());
    this.backgroundEntity.transform.reset().translate(.5, .5).scale(this.scene.get_width(), this.scene.get_height());
    this.backgroundEntity.isTransparent = !0;
    this.backgroundEntity.layer = 25;
    this.spinningDiamond = new lemongine.Entity([], lemongine.Geom.createQuad(1, 1), lemongine.shader.BasicTextureSingle.getShader());
    lemongine.shader.BasicTextureSingle.setupEntity(this.spinningDiamond, lemongine.AssetManager.getImage("spinning_diamond"), new lemongine.Rectangle(0, 0, 81, 56));
    this.spinningDiamond.isTransparent = !0;
    this.spinningDiamond.layer = 26;
    this.diamondBurst = new lemongine.Entity([], lemongine.Geom.createQuad(1, 1), lemongine.shader.BasicTextureSingle.getShader());
    lemongine.shader.BasicTextureSingle.setupEntity(this.diamondBurst, lemongine.AssetManager.getImage("diamond_burst"), new lemongine.Rectangle(0, 0, 552, 414), new lemongine.Color(2013265919));
    this.diamondBurst.isTransparent = !0;
    this.diamondBurst.layer = 29;
    b = lemongine.AssetManager.getImage("ui");
    var a = shader.BlockShader.getShader(shader.BlendMode.NORMAL),
        c = new haxe.ds.StringMap(),
        d = lemongine.Mathz.repeatArray([1], 24);
    c.h.color = d;
    d = lemongine.Mathz.repeatArray([0], 24);
    c.h.colorOffset = d;
    this.buttonEntity = new lemongine.QuadPoolEntity(b, null, a, c);
    this.buttonEntity.isTransparent = !0;
    this.buttonEntity.layer = 27;
}
m["screens.Menu_Pause"] = screens.Menu_Pause
screens.Menu_Pause.__name__ = "screens.Menu_Pause"
screens.Menu_Pause.addMenuButton = function (b, a, c, d, f, k, h, m, x) {
    null == x && (x = !1);
    var l = 0;
    b = Main.buttonBehavior(b, x, c, d, f, k, m);
    2 == b ? l = 16 : 1 == b && (l = 32);
    a.add9Slice(new lemongine.Rectangle(c, d, f, k), new lemongine.Rectangle(l, 0, 16, 16), new lemongine.Rectangle(4, 4, 8, 8));
    c = new lemongine.Rectangle(c, d, f, k);
    l = new lemongine.Rectangle(l, 0, 16, 16);
    d = new lemongine.Rectangle(4, 4, 8, 8);
    x ? (x = new haxe.ds.StringMap(), f = lemongine.Mathz.repeatArray([.6, .6, .6, 1], 6), x.h.color = f, f = lemongine.Mathz.repeatArray([.4, .4, .4, 0], 6), x.h.colorOffset = f) : x = null;
    a.add9Slice(c, l, d, 0, x, h);
    return 2 == b;
}
screens.Menu_Pause.prototype = {
    gotoAndStop: function (b) {
        this.currentFrame != b && (Main.Instance.setUIHover("", !1), 1 == b ? (this.game.set_pawsed(!1), null != window.gameplayStart && window.gameplayStart()) : 2 == b ? (this.generatingTipNum = Math.floor(Math.random() * screens.Menu_Pause.generatingTips.length), this.generatingTimer = 0, this.backgroundEntity.setAttrib("color", [0, 0, .5686274509803921, 1, 0, 0, 0, 1, 0, 0, .5686274509803921, 1, 0, 0, .5686274509803921, 1, 0, 0, 0, 1, 0, 0, 0, 1])) : 4 == b ? (null == Main.Instance.settings ? Main.Instance.settings = new screens.Menu_Settings(this.scene, 25) : Main.Instance.settings.updateRenderLayerBase(25), Main.Instance.settings.backCallback = F(this, this.settingsBackCallback), Main.Instance.settings.gotoAndStop(1), null != window.gameplayStop && window.gameplayStop()) : (3 == b && this.game.world.threadedSave(), null != window.gameplayStop && window.gameplayStop(), this.backgroundEntity.setAttrib("color", [.5686274509803921, .6352941176470588, .807843137254902, .75, .23921568627450981, .30980392156862746, .4666666666666667, .83, .5686274509803921, .6352941176470588, .807843137254902, .75, .5686274509803921, .6352941176470588, .807843137254902, .75, .23921568627450981, .30980392156862746, .4666666666666667, .83, .23921568627450981, .30980392156862746, .4666666666666667, .83])), this.currentFrame = b);
    },
    resize: function () {
        this.backgroundEntity.transform.reset().translate(.5, .5).scale(this.scene.get_width(), this.scene.get_height());
        null != Main.Instance.settings && Main.Instance.settings.resize();
    },
    run: function () {
        switch (this.currentFrame) {
        case 2:
            this.runGeneratingFrame();
            break;
        case 3:
            this.runPauseFrame();
            break;
        case 4:
            this.runSettingsFrame();
            break;
        case 5:
            this.runHelp();
            break;
        case 6:
            this.runAchievements();
            break;
        case 7:
            this.runScreenshot();
        }
    },
    runGeneratingFrame: function () {
        this.scene.draw(this.backgroundEntity);
        var b = TextCache.get("generatingPleaseWait", "Please wait!", new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 118), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER);
        this.scene.draw(b);
        b.layer = 28;
        b = TextCache.get("generatingTitle", this.statis, new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 152), Fonts.get_volter(), lemongine.Color.white, 3, lemongine.TextAlignment.CENTER);
        this.scene.draw(b);
        b.layer = 28;
        this.spinningDiamond.setUniform("texClip", [81 * -(Math.floor(G.toFloat(Main.Instance.tick) / G.toFloat(4)) % 3), 0, 81, 56]);
        this.spinningDiamond.transform.reset().scale(81, 56).scale2D(.9592592592592593).translate(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 213);
        this.scene.draw(this.spinningDiamond);
        this.diamondBurst.transform.reset().scale(552, 414).translate(this.scene.get_width() / 2, this.scene.get_height() / 2);
        this.scene.draw(this.diamondBurst);
        this.buttonEntity.clearPool();
        b = Math.round(168 * this.loadingBar);
        167 == b && (b = 168);
        this.buttonEntity.add9Slice(new lemongine.Rectangle(this.scene.get_width() / 2 - 84, this.scene.get_height() / 2 - 207 + 264, 168, 10), new lemongine.Rectangle(0, 207, 3, 5), new lemongine.Rectangle(1, 1, 1, 3), 0, null, 2);
        4 < b && this.buttonEntity.add9Slice(new lemongine.Rectangle(this.scene.get_width() / 2 - 84, this.scene.get_height() / 2 - 207 + 264, b, 10), new lemongine.Rectangle(3, 207, 168 == b ? 4 : 3, 5), new lemongine.Rectangle(1, 1, 1, 3), 0, null, 2);
        this.generatingTimer++;
        20 < this.generatingTimer && (b = TextCache.get("generatingTip", screens.Menu_Pause.generatingTips[this.generatingTipNum], new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 336), Fonts.get_volter(), new lemongine.Color(-10066330), 1.8, lemongine.TextAlignment.CENTER, 1.5), this.scene.draw(b), b.layer = 28);
        this.buttonEntity.resetUnusedQuads();
        this.scene.draw(this.buttonEntity);
    },
    runPauseFrame: function () {
        var b = this;
        this.scene.draw(this.backgroundEntity);
        var a = TextCache.get("pauseTextBG", "Paused", new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 64), Fonts.get_volter(), lemongine.Color.black, 5, lemongine.TextAlignment.CENTER);
        this.scene.draw(a);
        a.layer = 28;
        a = TextCache.get("pauseText", "Paused", new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 60), Fonts.get_volter(), lemongine.Color.white, 5, lemongine.TextAlignment.CENTER);
        this.scene.draw(a);
        a.layer = 28;
        this.spinningDiamond.setUniform("texClip", [81 * -(Math.floor(G.toFloat(Main.Instance.tick) / G.toFloat(4)) % 3), 0, 81, 56]);
        this.spinningDiamond.transform.reset().scale(81, 56).scale2D(.9592592592592593).translate(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 128);
        this.scene.draw(this.spinningDiamond);
        this.buttonEntity.clearPool();
        a = screens.Menu_Pause.addMenuButton("pauseBackToGame", this.buttonEntity, this.scene.get_width() / 2 - 146 | 0, this.scene.get_height() / 2 - 207 + 176 | 0, 292, 50, 2.5, function () {
            b.game.set_pawsed(!1);
            b.gotoAndStop(1);
        }) ? TextCache.get("pauseBackToGame", "Back to Game", new lemongine.Point(this.scene.get_width() / 2 + 2.5, this.scene.get_height() / 2 - 207 + 205.5), Fonts.get_volter(), new lemongine.Color(-16764160), 3.5, lemongine.TextAlignment.CENTER, 0) : TextCache.get("pauseBackToGame", "Back to Game", new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 203), Fonts.get_volter(), new lemongine.Color(-16764160), 3.5, lemongine.TextAlignment.CENTER, 0);
        a.layer = 28;
        this.scene.draw(a);
        a = screens.Menu_Pause.addMenuButton("pauseHelp", this.buttonEntity, this.scene.get_width() / 2 - 276 + 46 | 0, this.scene.get_height() / 2 - 207 + 237 | 0, 150, 39, 1.925, function () {
            lemongine.Web.open("https://mineblocks.com/1/wiki");
        }) ? TextCache.get("pauseHelp", "Wiki/Help", new lemongine.Point(this.scene.get_width() / 2 - 276 + 122.925, this.scene.get_height() / 2 - 207 + 257.925), Fonts.get_volter(), lemongine.Color.black, 2, lemongine.TextAlignment.CENTER, 0) : TextCache.get("pauseHelp", "Wiki/Help", new lemongine.Point(this.scene.get_width() / 2 - 276 + 121, this.scene.get_height() / 2 - 207 + 256), Fonts.get_volter(), lemongine.Color.black, 2, lemongine.TextAlignment.CENTER, 0);
        a.layer = 28;
        this.scene.draw(a);
        a = screens.Menu_Pause.addMenuButton("pauseSettings", this.buttonEntity, this.scene.get_width() / 2 - 75 | 0, this.scene.get_height() / 2 - 207 + 237 | 0, 150, 39, 1.925, function () {
            b.gotoAndStop(4);
        }) ? TextCache.get("pauseSettings", "Options", new lemongine.Point(this.scene.get_width() / 2 + 1.925, this.scene.get_height() / 2 - 207 + 257.925), Fonts.get_volter(), lemongine.Color.black, 2, lemongine.TextAlignment.CENTER, 0) : TextCache.get("pauseSettings", "Options", new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 256), Fonts.get_volter(), lemongine.Color.black, 2, lemongine.TextAlignment.CENTER, 0);
        a.layer = 28;
        this.scene.draw(a);
        a = screens.Menu_Pause.addMenuButton("pauseAchievements", this.buttonEntity, this.scene.get_width() / 2 - 276 + 357 | 0, this.scene.get_height() / 2 - 207 + 237 | 0, 150, 39, 1.925, function () {
            b.gotoAndStop(6);
        }) ? TextCache.get("pauseAchievements", "Achievements", new lemongine.Point(this.scene.get_width() / 2 - 276 + 433.925, this.scene.get_height() / 2 - 207 + 257.925), Fonts.get_volter(), lemongine.Color.black, 2, lemongine.TextAlignment.CENTER, 0) : TextCache.get("pauseAchievements", "Achievements", new lemongine.Point(this.scene.get_width() / 2 - 276 + 432, this.scene.get_height() / 2 - 207 + 256), Fonts.get_volter(), lemongine.Color.black, 2, lemongine.TextAlignment.CENTER, 0);
        a.layer = 28;
        this.scene.draw(a);
        a = screens.Menu_Pause.addMenuButton("pauseQuit", this.buttonEntity, this.scene.get_width() / 2 - 126 | 0, this.scene.get_height() / 2 - 207 + 287 | 0, 252, 46, 2.5, function () {
            b.game.exit();
        }) ? TextCache.get("pauseQuit", Main.Instance.game.isScavenger ? "Disconnect" : "Save and Quit", new lemongine.Point(this.scene.get_width() / 2 + 2.5, this.scene.get_height() / 2 - 207 + 312.5), Fonts.get_volter(), new lemongine.Color(-13434880), 2.625, lemongine.TextAlignment.CENTER, 0) : TextCache.get("pauseQuit", Main.Instance.game.isScavenger ? "Disconnect" : "Save and Quit", new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 310), Fonts.get_volter(), new lemongine.Color(-13434880), 2.625, lemongine.TextAlignment.CENTER, 0);
        a.layer = 28;
        this.scene.draw(a);
        this.buttonEntity.resetUnusedQuads();
        this.scene.draw(this.buttonEntity);
    },
    runSettingsFrame: function () {
        this.scene.draw(this.backgroundEntity);
        Main.Instance.settings.run();
    },
    settingsBackCallback: function () {
        this.gotoAndStop(3);
    },
    runHelp: function () {
        this.scene.draw(this.backgroundEntity);
    },
    runAchievements: function () {
        var b = this;
        this.scene.draw(this.backgroundEntity);
        this.buttonEntity.clearPool();
        var a = TextCache.get("achievementTitle", "Achievements", new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 30), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER);
        this.scene.draw(a);
        a.layer = 28;
        a = Main.addSimpleButtonBetter("achievementsBack", this.buttonEntity, this.scene.get_width() / 2 - 45 | 0, this.scene.get_height() / 2 - 207 + 347 | 0, 90, 36, 1.77, function () {
            b.gotoAndStop(3);
        }) ? TextCache.get("achievementsBack", "Close", new lemongine.Point(this.scene.get_width() / 2 + 2.77, this.scene.get_height() / 2 - 207 + 367.77), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER) : TextCache.get("achievementsBack", "Close", new lemongine.Point(this.scene.get_width() / 2 + 1, this.scene.get_height() / 2 - 207 + 366), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER);
        a.layer = 28;
        this.scene.draw(a);
        var c = this.scene.get_height() / 2 - 207 + 56 | 0,
            d = 22 * Game.achievements.length + 16,
            f = !1;
        if (1 == this.game.world.gamemode || 3 == this.game.world.gamemode) d += 22, f = !0;
        1 == this.game.world.cheats && null != Main.Instance.API && 1 == Main.Instance.API.loggedIn && (d += f ? 11 : 22);
        this.buttonEntity.add9Slice(new lemongine.Rectangle(this.scene.get_width() / 2 - 276 + 66, c, 386, 270), new lemongine.Rectangle(69, 217, 5, 5), new lemongine.Rectangle(2, 2, 1, 1), 0, null, 2);
        0 == Main.Instance.mouseDown() && new lemongine.Rectangle(this.scene.get_width() / 2 - 276 + 66, c, 386, 270).containsPoint(Main.Instance.mouse) && (0 < Main.Instance.mouseWheelDelta ? this.achievementsScrollPosition = Math.max(0, this.achievementsScrollPosition - 16) : 0 > Main.Instance.mouseWheelDelta && (this.achievementsScrollPosition = Math.min(d - 270, this.achievementsScrollPosition + 16)));
        var g = Main.buttonBehavior("achievementsScrollUp", !1, this.scene.get_width() / 2 - 276 + 486 - 30 | 0, c | 0, 30, 20, null, !1);
        this.buttonEntity.addQuad(new lemongine.Vector3(this.scene.get_width() / 2 - 276 + 486 - 30 | 0, c | 0), new lemongine.Point(78 + 15 * g, 196), new lemongine.Point(15, 10), !0, new lemongine.Point(30, 20));
        2 == g && (this.achievementsScrollPosition = Math.max(0, this.achievementsScrollPosition - 8));
        g = Main.buttonBehavior("achievementsScrollDown", !1, this.scene.get_width() / 2 - 276 + 486 - 30 | 0, c + 270 - 20 | 0, 30, 20, null, !1);
        this.buttonEntity.addQuad(new lemongine.Vector3(this.scene.get_width() / 2 - 276 + 486 - 30 | 0, c + 270 - 20 | 0), new lemongine.Point(78 + 15 * g, 232), new lemongine.Point(15, 10), !0, new lemongine.Point(30, 20));
        2 == g && (this.achievementsScrollPosition = Math.min(d - 270, this.achievementsScrollPosition + 8));
        g = 226 * Math.min(1, 270 / Math.max(1, d)) | 0;
        a = new lemongine.Rectangle(this.scene.get_width() / 2 - 276 + 486 - 30 | 0, c + 22 + Math.min(226 - g, 226 * this.achievementsScrollPosition / d), 30, g + 1);
        g = Main.buttonBehavior("achievementsScrollbar", !1, a.x | 0, a.y | 0, a.width | 0, a.height | 0, null, !1);
        G.gt(Main.Instance.mouseDown(), 0) && "achievementsScrollbar" == Main.Instance.getUIHover() && (1 == Main.Instance.mouseDown() && (this.achievementsScrollMouseOffset = Main.Instance.mouse.y - a.y), g = 2, this.achievementsScrollPosition = lemongine.Mathz.clamp(0, d - 270, (Main.Instance.mouse.y - this.achievementsScrollMouseOffset - (c + 22)) / 226 * d));
        this.buttonEntity.add9Slice(a, new lemongine.Rectangle(78 + 15 * g, 206, 15, 16), new lemongine.Rectangle(1, 2, 13, 11), 0, null, 2);
        this.buttonEntity.addQuad(new lemongine.Vector3(a.x, (a.get_centerY() | 0) - 10), new lemongine.Point(78 + 15 * g, 222), new lemongine.Point(15, 10), !0, new lemongine.Point(30, 20));
        d = c + 8 - (this.achievementsScrollPosition | 0) - 22;
        1 == this.game.world.gamemode ? (d += 22, a = TextCache.get("achievementDisclaimer1", "(You will not get achievements while in creative mode.)", new lemongine.Point(this.scene.get_width() / 2 - 276 + 76, d), Fonts.get_volter(), lemongine.Color.black, 1), a.setUniform("mask", [0, c + 2 - d, this.scene.get_width(), 264]), a.layer = 28, this.scene.draw(a)) : 3 == this.game.world.gamemode && (d += 22, a = TextCache.get("achievementDisclaimer1", "(You will not get achievements while in spectator mode.)", new lemongine.Point(this.scene.get_width() / 2 - 276 + 76, d), Fonts.get_volter(), lemongine.Color.black, 1), a.setUniform("mask", [0, c + 2 - d, this.scene.get_width(), 264]), a.layer = 28, this.scene.draw(a));
        1 == this.game.world.cheats && null != Main.Instance.API && 1 == Main.Instance.API.loggedIn && (d += f ? 11 : 22, a = TextCache.get("achievementDisclaimer2", "(Website medals will not be awarded when cheats are enabled.)", new lemongine.Point(this.scene.get_width() / 2 - 276 + 76, d), Fonts.get_volter(), lemongine.Color.black, 1), a.setUniform("mask", [0, c + 2 - d, this.scene.get_width(), 264]), a.layer = 28, this.scene.draw(a));
        f = 0;
        for (g = Game.achievements.length; f < g;) if (a = f++, d += 22, !(d < c - 16 || d > c + 270)) {
            if (1 == this.game.world.achieve[a]) {
                var m = Math.max(0, c + 2 - (d + 2)) | 0,
                    x = new lemongine.Rectangle(this.scene.get_width() / 2 - 276 + 76, d + 2 + m, 18, Math.max(0, 14 - m));
                x.set_height(lemongine.Mathz.clamp(0, x.height, c + 2 + 264 - x.y));
                var q = x.width / 2,
                    w = x.height / 2;
                this.buttonEntity.addQuad(new lemongine.Vector3(x.x, x.y), new lemongine.Point(69, 208 + m / 2), new lemongine.Point(q, w), !0, new lemongine.Point(x.width, x.height));
            } else m = Math.max(0, c + 2 - (d + 8)) | 0, x = new lemongine.Rectangle(this.scene.get_width() / 2 - 276 + 80, d + 8 + m, 8, Math.max(0, 4 - m)), x.set_height(lemongine.Mathz.clamp(0, x.height, c + 2 + 264 - x.y)), q = x.width / 2, w = x.height / 2, this.buttonEntity.addQuad(new lemongine.Vector3(x.x, x.y), new lemongine.Point(69, 215 + m / 2), new lemongine.Point(q, w), !0, new lemongine.Point(x.width, x.height));
            a = TextCache.get("achievementName" + a, Game.achievements[a], new lemongine.Point(this.scene.get_width() / 2 - 276 + 100, d), Fonts.get_volter(), new lemongine.Color(1 == this.game.world.achieve[a] ? -16733696 : -5636096), 2);
            a.setUniform("mask", [0, (c + 2 - d) / 2, this.scene.get_width(), 132]);
            this.scene.draw(a);
            a.layer = 28;
        }
        this.buttonEntity.resetUnusedQuads();
        this.scene.draw(this.buttonEntity);
    },
    setScreenshot: function (b) {
        null != this.screenshot && this.screenshot.destroy();
        this.screenshot = b.clone(!0);
        b = 0;
        for (var a = this.screenshot.width; b < a;) for (var c = b++, d = 0, f = this.screenshot.height; d < f;) {
            var g = d++;
            this.screenshot.setPixel(c, g, -16777216 + (this.screenshot.getPixel(c, g) & 16777215));
        }
        null == this.screenshotEntity && (this.screenshotEntity = new lemongine.Entity([], lemongine.Geom.createQuad(1, 1), lemongine.shader.BasicTextureSingle.getShader()), lemongine.shader.BasicTextureSingle.setupEntity(this.screenshotEntity, this.screenshot, new lemongine.Rectangle(0, 0, G.toFloat(this.screenshot.width), G.toFloat(this.screenshot.height))), this.screenshotEntity.isTransparent = !0, this.screenshotEntity.layer = 28);
        this.screenshotEntity.setTextureBuffer("texture", this.screenshot);
        this.screenshotEntity.setUniform("texClip", [0, 0, this.screenshot.width, this.screenshot.height]);
        this.screenshotEntity.setUniform("texSize", [this.screenshot.width, this.screenshot.height]);
    },
    runScreenshot: function () {
        var b = this;
        this.scene.draw(this.backgroundEntity);
        var a = TextCache.get("screenshotTitle", "Screenshot", new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 67), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER);
        this.scene.draw(a);
        a.layer = 28;
        a = G.toFloat(this.screenshot.height) / G.toFloat(this.screenshot.width);
        this.screenshotEntity.transform.reset().scale(1, a).scale2D(Math.min(276, G.toFloat(207 * this.screenshot.width) / G.toFloat(this.screenshot.height))).translate(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 189);
        this.scene.draw(this.screenshotEntity);
        this.buttonEntity.clearPool();
        a = this.buttonEntity;
        var c = new lemongine.Rectangle(this.scene.get_width() / 2 - 185, this.scene.get_height() / 2 - 207 + 44, 370, 310),
            d = new lemongine.Rectangle(0, 16, 16, 16),
            f = new lemongine.Rectangle(6, 6, 4, 4),
            l = new haxe.ds.StringMap(),
            h = lemongine.Mathz.repeatArray([1, 1, 1, 2], 6);
        l.h.color = h;
        a.add9Slice(c, d, f, 0, l);
        a = Main.addSimpleButtonBetter("screenshotSave", this.buttonEntity, this.scene.get_width() / 2 - 276 + 140 | 0, this.scene.get_height() / 2 - 207 + 304 | 0, 138, 36, 1.77, function () {
            var a = new Date();
            a = "Mine-Blocks-" + HxOverrides.substr(Std.string(a.getFullYear()), -2, 2) + (10 <= a.getMonth() + 1 ? Std.string(a.getMonth() + 1) : "0" + (a.getMonth() + 1)) + (10 <= a.getDate() ? Std.string(a.getDate()) : "0" + a.getDate()) + "-" + a.getHours() + (10 <= a.getMinutes() ? Std.string(a.getMinutes()) : "0" + a.getMinutes()) + (10 <= a.getSeconds() ? Std.string(a.getSeconds()) : "0" + a.getSeconds()) + ".png";
            b.screenshot.updateImageFromTexture();
            lemongine.File.saveBytes(b.screenshot.data.encode(lime.graphics.ImageFileFormat.PNG), a, null, null, !1);
        }) ? TextCache.get("screenshotSave", "Save to file", new lemongine.Point(this.scene.get_width() / 2 - 276 + 209.77, this.scene.get_height() / 2 - 207 + 324.77), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER) : TextCache.get("screenshotSave", "Save to file", new lemongine.Point(this.scene.get_width() / 2 - 276 + 208, this.scene.get_height() / 2 - 207 + 323), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER);
        a.layer = 28;
        this.scene.draw(a);
        a = Main.addSimpleButtonBetter("screenshotBack", this.buttonEntity, this.scene.get_width() / 2 - 276 + 337 | 0, this.scene.get_height() / 2 - 207 + 304 | 0, 76, 36, 1.77, function () {
            b.gotoAndStop(1);
        }) ? TextCache.get("screenshotBack", "Close", new lemongine.Point(this.scene.get_width() / 2 - 276 + 377.77, this.scene.get_height() / 2 - 207 + 324.77), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER) : TextCache.get("screenshotBack", "Close", new lemongine.Point(this.scene.get_width() / 2 - 276 + 376, this.scene.get_height() / 2 - 207 + 323), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER);
        a.layer = 28;
        this.scene.draw(a);
        this.buttonEntity.resetUnusedQuads();
        this.scene.draw(this.buttonEntity);
    },
    __class__: screens.Menu_Pause
}
screens.Menu_Pause.generatingTips = "If the loading bar is boring you, try talking to it,\nand maybe it'll try to go faster.{If it weren't for this loading bar,\nwould the game even load??{How many pixels might there be in this loading bar?{What if the loading bar could talk?\nWhat would it say?{Having more than one loading bar\ndoesn't speed it up. Sorry!{Minecraft has loading bars too! WOO!{The loading bar has pathfinding;\nit always seems to find the end!{Is the green part of the\nloading bar getting bigger...\nOr is the red part of the\nloading bar just getting smaller?{Really cool people call a loading bar\na \"loading rectangle.\"".split("{")