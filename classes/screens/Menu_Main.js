screens.Menu_Main = function (b) {
    this.worldIDsToRestore = [];
    this.waitingForSave = !1;
    this.worldsBackedUp = this.totalWorlds = this.worldsFailed = 0;
    this.savingBackup = this.loadingBackup = !1;
    this.replaceSettings = !0;
    this.duplicateWorldOptionDisabled = !1;
    this.duplicateWorldOption = "add";
    this.textInstance = 0;
    this.loadBackupFrame = 1;
    this.backupSaveText = this.backupLoadText = this.backupLoadText2 = "";
    this.scavengerFirstUsernameFrame = !0;
    this.scavengerPasscodeEntryVisible = this.scavengerAccountSubmitDebounce = !1;
    this.scavengerPasscodeEntry = "";
    this.scavengerEmailEntryVisible = !0;
    this.scavengerKeyEntry = this.scavengerEmailEntry = "";
    this.openPatreonDebounce = this.scavengerPlusPageFirstFrame = !1;
    this.scavengerPlusPage = this.scavengerPlusPagePrevious = "main";
    this.chatInputValue = "";
    this.scavengerLeaderboardScrollPosition = this.scavengerLeaderboardMousePosition = 0;
    this.scavengerLeaderboardItems = [];
    this.lookingAtLeaderboard = 0;
    this.scavengerTokenRevealed = this.scavengerTokenEntryRevealed = !1;
    this.scavengerTokenEntry = "";
    this.scavengerDisplayNameCallback = null;
    this.scavengerDisplayPlaceholderUsername = !1;
    this.scavengerNameErrorMessage = this.scavengerNewUsername = "";
    this.scavengerFrame = screens.ScavengerFrames.NONE;
    this.searchDebounceTimer = 0;
    this.searchEntry = "";
    this.skinCanBeReverted = !1;
    this.scavengerTickSinceSwitchingSelectedTab = this.unreadChats = this.animatingSkinAtX = this.animatingSkinFrame = 0;
    this.scavengerSelectedTab = "info";
    this.faqScrollPosition = this.faqScrollMouseOffset = 0;
    this.useBonusChest = !1;
    this.cheatsEnabled = !0;
    this.useCheats = !1;
    this.gameType = "survival";
    this.worldSeed = "";
    this.worldName = "New World";
    this.gameTypeDropdownOpen = !1;
    this.worldToSelect = "";
    this.selectedWorldListIndex = 0;
    this.worldListStrings = [];
    this.orderedWorldList = [];
    this.currentFrame = 1;
    this.pickCrackPosition = new lemongine.Point();
    this.jumper1Rotation = this.jumper2Rotation = this.jumper1Time = this.jumper2Time = this.mouseAnimation = 0;
    this.versionDialogFrame = 1;
    this.newsURL = "";
    this.scene = b;
    this.titleHeight = 78;
    var a = this.titleHeight * lemongine.AssetManager.getImage("title_logo").width,
        c = lemongine.AssetManager.getImage("title_logo").height;
    this.titleWidth = G.toFloat(a) / G.toFloat(c);
    this.titleDropShadow = new lemongine.Scene(0, 0);
    this.titleDropShadow.setup2D(this.titleWidth + 30, this.titleHeight + 30, new lemongine.Color(0));
    b = this.titleDropShadow;
    var d = lemongine.AssetManager.getImage("title_logo"),
        f = new lemongine.Point(15, 15),
        l = new lemongine.Color(-872415232);
    a = this.titleHeight;
    c = lemongine.AssetManager.getImage("title_logo").height;
    b.draw2D(d, f, null, null, l, null, G.toFloat(a) / G.toFloat(c));
    this.titleDropShadowImage = new lemongine.Image().fromScene(this.titleDropShadow);
    this.titleDropShadowImage = this.titleDropShadowImage.blurFilter(15, 15);
    this.titleDropShadowImageEntity = this.titleDropShadowImage.toEntity();
    this.titleDropShadowImageEntity.isTransparent = !0;
    this.titleImage = lemongine.AssetManager.getImage("title_logo");
    this.titleImageEntity = this.titleImage.toEntity();
    this.titleImageEntity.isTransparent = !0;
    b = lemongine.AssetManager.getImage("ui");
    d = shader.BlockShader.getShader(shader.BlendMode.NORMAL);
    a = new haxe.ds.StringMap();
    c = lemongine.Mathz.repeatArray([1], 24);
    a.h.color = c;
    c = lemongine.Mathz.repeatArray([0], 24);
    a.h.colorOffset = c;
    this.mainMenuButtonEntity = new lemongine.QuadPoolEntity(b, null, d, a);
    this.mainMenuButtonEntity.isTransparent = !0;
    this.mainMenuButtonShadow = new lemongine.QuadPoolEntity(lemongine.AssetManager.getImage("ui"));
    this.mainMenuButtonShadow.isTransparent = !0;
    b = lemongine.AssetManager.getImage("ui");
    d = shader.BlockShader.getShader(shader.BlendMode.NORMAL);
    a = new haxe.ds.StringMap();
    c = lemongine.Mathz.repeatArray([1], 24);
    a.h.color = c;
    c = lemongine.Mathz.repeatArray([0], 24);
    a.h.colorOffset = c;
    this.blackBoxWithRadius = new lemongine.QuadPoolEntity(b, null, d, a);
    this.blackBoxWithRadius.add9Slice(new lemongine.Rectangle(), new lemongine.Rectangle(), new lemongine.Rectangle());
    this.blackBoxWithRadius.isTransparent = !0;
    b = lemongine.AssetManager.getImage("things_to_other_places");
    d = shader.BlockShader.getShader(shader.BlendMode.NORMAL);
    a = new haxe.ds.StringMap();
    c = lemongine.Mathz.repeatArray([1], 24);
    a.h.color = c;
    c = lemongine.Mathz.repeatArray([0], 24);
    a.h.colorOffset = c;
    this.thingsToOtherPlacesEntity = new lemongine.QuadPoolEntity(b, null, d, a);
    this.thingsToOtherPlacesEntity.isTransparent = !0;
    this.zanzlanzLogo = lemongine.AssetManager.getImage("zanzlanz_title");
    this.zanzlanzLogoEntity = this.zanzlanzLogo.toEntity();
    this.zanzlanzLogoEntity.isTransparent = !0;
    this.spinningDiamondImage = lemongine.AssetManager.getImage("spinning_diamond");
    this.spinningDiamondEntity = this.spinningDiamondImage.toEntity(new lemongine.Rectangle(0, 0, Math.floor(G.toFloat(this.spinningDiamondImage.width) / G.toFloat(3)), G.toFloat(this.spinningDiamondImage.height)));
    this.spinningDiamondEntity.isTransparent = !0;
    this.spinningDiamondEntity.layer = 2;
    this.scrollingBackground = lemongine.AssetManager.getImage("main_menu_bg");
    this.scrollingBackgroundEntity = this.scrollingBackground.toEntity();
    this.scrollingBackgroundEntity.isTransparent = !0;
    this.scrollingBackgroundEntity.setUniform("color", [1, 1, 1, .5]);
    this.scrollingBackgroundEntity.setUniform("colorOffset", [.0625, .0625, .0625, 0]);
    null == this.jumpTexts && this.setJumpTexts();
    this.jumper1 = new lemongine.BitmapFontEntity(Fonts.get_volter(), "", new lemongine.Color(-16711936));
    this.jumper1Scene = new lemongine.Scene(0, 0);
    this.jumper1Scene.setup2D(220, 30, new lemongine.Color(65280));
    this.jumper1BlurImage = new lemongine.Image().fromScene(this.jumper1Scene);
    this.blurredJumper1Entity = this.jumper1BlurImage.toEntity();
    this.blurredJumper1Entity.customBlendFunc = [lemongine.Lemongine.gl.SRC_ALPHA, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA, lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ONE];
    this.resetJumper1();
    this.jumper2 = new lemongine.BitmapFontEntity(Fonts.get_volter(), "", new lemongine.Color(-16711936));
    this.jumper2Scene = new lemongine.Scene(0, 0);
    this.jumper2Scene.setup2D(220, 30, new lemongine.Color(65280));
    this.jumper2BlurImage = new lemongine.Image().fromScene(this.jumper2Scene);
    this.blurredJumper2Entity = this.jumper2BlurImage.toEntity();
    this.blurredJumper2Entity.customBlendFunc = [lemongine.Lemongine.gl.SRC_ALPHA, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA, lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ONE];
    this.resetJumper2();
    this.pickCrackEntity = new lemongine.QuadPoolEntity(lemongine.AssetManager.getImage("pick_crack"));
    this.pickCrackEntity.isTransparent = !0;
    this.pickCrackEntity.layer = 65;
    this.pickCrackEntity.customBlendFunc = [lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA, lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ONE];
    b = lemongine.AssetManager.getImage("ui");
    d = shader.BlockShader.getShader(shader.BlendMode.NORMAL);
    a = new haxe.ds.StringMap();
    c = lemongine.Mathz.repeatArray([1], 24);
    a.h.color = c;
    c = lemongine.Mathz.repeatArray([0], 24);
    a.h.colorOffset = c;
    this.buttonEntity = new lemongine.QuadPoolEntity(b, null, d, a);
    this.buttonEntity.isTransparent = !0;
    b = lemongine.AssetManager.getImage("ui");
    d = shader.BlockShader.getShader(shader.BlendMode.NORMAL);
    a = new haxe.ds.StringMap();
    c = lemongine.Mathz.repeatArray([1], 24);
    a.h.color = c;
    c = lemongine.Mathz.repeatArray([0], 24);
    a.h.colorOffset = c;
    this.topLayerUIEntity = new lemongine.QuadPoolEntity(b, null, d, a);
    this.topLayerUIEntity.layer = 4;
    this.topLayerUIEntity.isTransparent = !0;
    b = lemongine.AssetManager.getImage("ui");
    d = shader.BlockShader.getShader(shader.BlendMode.NORMAL);
    a = new haxe.ds.StringMap();
    c = lemongine.Mathz.repeatArray([1], 24);
    a.h.color = c;
    c = lemongine.Mathz.repeatArray([0], 24);
    a.h.colorOffset = c;
    this.dialog = new lemongine.QuadPoolEntity(b, null, d, a);
    this.dialog.layer = 5;
    this.dialog.isTransparent = !0;
    this.dialog.customBlendFunc = [lemongine.Lemongine.gl.SRC_ALPHA, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA, lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ONE];
}
m["screens.Menu_Main"] = screens.Menu_Main
screens.Menu_Main.__name__ = "screens.Menu_Main"
screens.Menu_Main.prototype = {
    setJumpTexts: function (b) {
        if (null != b) this.jumpTexts = b;else {
            var a = new Date();
            b = a.getDate();
            var c = a.getMonth() + 1;
            a = a.getFullYear();
            this.jumpTexts = 25 == b && 12 == c ? ["Merry", "Christmas", "Ho ho ho", "Coal please"] : 3 == b && 9 == c ? ["Happy", "Birthday", "Zanzlanz", a - 1996] : 1 == b && 1 == c ? ["Happy", "New", "Year", a] : 1 == b && 4 == c ? ["Happy", "April", "Fools", "Gottem"] : 1 == b && 6 == c ? ["Happy", "Birthday", "Notch", a - 1979] : "Topaz;Boom;<3;Made with code;A game;Since 2011;Plus;Be a scavenger;With friends;Now in Haxe;Beta;Flash free;Also try Minecraft;Also try Terraria;Sheep stache;Notch;Chicken shades;Neatobuckets;Pixels;Now in low-res;Now in 2D;Hay there;Darude;Drop the beet;Fishy fishy;Woof;Whee;Oooh;Aaah;Cake;Pie;Lemons;Lol;Enchanting;Afro;:);Mooshrooms;Rotten flesh;Rawr;Flaming chickens;Minecraft;Terraria;Dragons;Spooky;Odd;WOOHOO;Redstone;Dungeons;SSSsss;Oink;Moo;1.31.2;Zanzlanz;Mine Blocks;Dirt;Lava;Jumping text;Cactus cake;Hearts;Caves;Mine;Blocks;Craft;World;Ender;Nether;Diamonds;Iron;Coal;Gold".split(";");
        }
    },
    setNews: function (b, a) {
        this.newsURL = a;
        this.newsLoaderBG = new lemongine.BitmapFontEntity(Fonts.get_volter(), "", new lemongine.Color(-16777216));
        this.newsLoaderBG.layer = 2;
        this.newsLoaderBG.setText(b);
        this.newsLoaderBG.transform.reset().scale(2, 2, 2).translate(this.scene.get_width() / 2 - this.newsLoaderBG.calculatedWidth / 2 * 2, 108);
        this.newsLoader = new lemongine.BitmapFontEntity(Fonts.get_volter(), "", new lemongine.Color(-2302756));
        this.newsLoader.layer = 2;
        this.newsLoader.setText(b);
        this.newsLoader.transform.reset().scale(2, 2, 2).translate(this.scene.get_width() / 2 - this.newsLoader.calculatedWidth / 2 * 2, 106);
    },
    resize: function () {
        null != this.newsLoaderBG && (this.newsLoaderBG.transform.reset().scale(2, 2, 2).translate(this.scene.get_width() / 2 - this.newsLoaderBG.calculatedWidth / 2 * 2, 108), this.newsLoader.transform.reset().scale(2, 2, 2).translate(this.scene.get_width() / 2 - this.newsLoader.calculatedWidth / 2 * 2, 106));
    },
    gotoAndStop: function (b) {
        this.currentFrame = b;
        2 == b ? this.updateWorldList() : 3 == b ? (this.worldName = "New World", null != UI.fields.h.worldName && UI.fields.h.worldName.input.set_text(this.worldName), this.worldSeed = Std.string(Math.floor(1E6 * Math.random())), null != UI.fields.h.worldSeed && UI.fields.h.worldSeed.input.set_text(this.worldSeed), this.gameType = "survival", this.useCheats = !1, this.cheatsEnabled = !0, this.useBonusChest = !1) : 6 == b ? this.faqScrollPosition = 0 : 7 == b ? (null == Main.Instance.settings ? Main.Instance.settings = new screens.Menu_Settings(this.scene, 5) : Main.Instance.settings.updateRenderLayerBase(5), Main.Instance.settings.backCallback = F(this, this.settingsBackCallback), Main.Instance.settings.gotoAndStop(1)) : 8 == b ? ("" == GlobalSave.plusAccessToken || Plus.connected || this.connectPlus(), this.gotoScavengerFrame(screens.ScavengerFrames.LOBBY)) : 9 == b && (this.resetSaveText(), this.resetLoadText());
        8 != b && ScavengerManager.closeSocket();
    },
    prepare: function () {
        if (GlobalSave.loaded && null != lemongine.AssetManager.getSound("mainSong").buffer) {
            var b = lemongine.Audio.musicChannel;
            var a = lemongine.AssetManager.getSound("mainSong");
            b = null == b.h.__keys__[a.__id__];
        } else b = !1;
        b && lemongine.AssetManager.getSound("mainSong").play(1, 0, 0, 73.851, 1E9);
        b = G.toFloat(this.scrollingBackground.width) / G.toFloat(2);
        a = G.toFloat(this.scrollingBackground.height) / G.toFloat(2);
        this.scrollingBackgroundEntity.transform.reset().translate(b, a).scale2D(G.toFloat(this.scene.get_height() + 10) / G.toFloat(this.scrollingBackground.height));
        this.scrollingBackgroundEntity.setAttrib("texClip", lemongine.Mathz.repeatArray([G.toFloat(Main.Instance.tick) / G.toFloat(5), 0, this.scrollingBackground.width, this.scrollingBackground.height], 6));
        this.scene.draw(this.scrollingBackgroundEntity);
        this.buttonEntity.clearPool();
        this.topLayerUIEntity.clearPool();
        null != this.chickenNonsense && this.chickenNonsense.prepareInteraction();
        this.prepareVersionDialog();
    },
    run: function () {
        this.textInstance = 0;
        switch (this.currentFrame) {
        case 1:
            this.runMainFrame();
            break;
        case 2:
            this.runWorldsFrame();
            break;
        case 3:
            this.runGenerateFrame();
            break;
        case 5:
            this.runCreditsFrame();
            break;
        case 6:
            this.runFAQFrame();
            break;
        case 7:
            this.runSettingsFrame();
            break;
        case 8:
            this.runScavengerFrame();
            break;
        case 9:
            this.runBackupsFrame();
        }
        this.buttonEntity.resetUnusedQuads();
        this.topLayerUIEntity.resetUnusedQuads();
        this.scene.draw(this.buttonEntity);
        this.scene.draw(this.topLayerUIEntity);
        this.renderVersion();
        this.renderVersionDialog();
        null != this.chickenNonsense && this.chickenNonsense.updateAndRender(this.scene);
        this.renderMouseEffect();
    },
    renderMouseEffect: function () {
        1 == Main.Instance.mouseDown() && (this.mouseAnimation = 1);
        1 == Main.Instance.mouseUp() && (this.mouseAnimation = 2);
        0 < this.mouseAnimation && (this.pickCrackEntity.setColor(new lemongine.Color().fromRGB(1, 1, 1, Math.max(1, 18 - this.mouseAnimation) / 16)), 2 > this.mouseAnimation ? (Main.Instance.cursor = null, this.pickCrackEntity.updateQuad(0, null, new lemongine.Point(), new lemongine.Point(), null), this.pickCrackEntity.updateQuad(1, null, new lemongine.Point(76, 0), new lemongine.Point(16, 16), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, 16, 16), new lemongine.Matrix4().translate(-7, -8).rotate2D(-.08333333333333333 * Math.PI).scale2D(2).translate(18.95 + Main.Instance.mouse.x, -13.85 + Main.Instance.mouse.y)))) : (2 == this.mouseAnimation && this.pickCrackPosition.set(Main.Instance.mouse.x, Main.Instance.mouse.y), this.pickCrackEntity.updateQuad(0, null, new lemongine.Point(), new lemongine.Point(75, 32), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, 75, 32), new lemongine.Matrix4().translate(-33, -15).scale2D(.5).translate(this.pickCrackPosition.x, this.pickCrackPosition.y))), this.pickCrackEntity.updateQuad(1, null, new lemongine.Point(76, 0), new lemongine.Point(16, 16), null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, 16, 16), new lemongine.Matrix4().translate(-7, -8).rotate2D(.04055555555555555 * Math.PI).scale2D(2).translate(12.3 + Main.Instance.mouse.x, -8.05 + Main.Instance.mouse.y))), this.mouseAnimation++), 16 < this.mouseAnimation && (this.mouseAnimation = 0), this.scene.draw(this.pickCrackEntity));
    },
    sortWorlds: function (b, a) {
        if (Object.prototype.hasOwnProperty.call(b.data.h, "date")) {
            if (!Object.prototype.hasOwnProperty.call(a.data.h, "date") || b.data.h.date > a.data.h.date) return -1;
        } else if (!Object.prototype.hasOwnProperty.call(a.data.h, "date")) return 0;
        return 1;
    },
    updateWorldList: function () {
        this.selectedWorldListIndex = 0;
        this.worldListStrings = [];
        this.orderedWorldList = [];
        for (var b = GlobalSave.worldList.h, a = Object.keys(b), c = a.length, d = 0; d < c;) {
            var f = a[d++];
            this.orderedWorldList.push({
                id: f,
                data: b[f]
            });
        }
        this.orderedWorldList.sort(F(this, this.sortWorlds));
        b = 0;
        for (a = this.orderedWorldList; b < a.length;) c = a[b], ++b, d = c.data.h.name, Object.prototype.hasOwnProperty.call(c.data.h, "seed") && (d += " (Seed " + Std.string(c.data.h.seed) + ")"), c.id == this.worldToSelect && (this.selectedWorldListIndex = this.worldListStrings.length), this.worldListStrings.push(d);
    },
    renderTitle: function (b, a, c, d, f) {
        null == f && (f = 8);
        null == d && (d = 9);
        var g = G.toFloat(this.titleDropShadowImage.width) / G.toFloat(2),
            k = G.toFloat(this.titleDropShadowImage.height) / G.toFloat(2);
        this.titleDropShadowImageEntity.transform.reset().translate(g, k).scale2D(b).translate(a - d, c - f);
        this.scene.draw(this.titleDropShadowImageEntity);
        g = G.toFloat(this.titleImage.width) / G.toFloat(2);
        k = G.toFloat(this.titleImage.height) / G.toFloat(2);
        this.titleImageEntity.transform.reset().translate(g, k).scale2D(b * this.titleHeight / G.toFloat(lemongine.AssetManager.getImage("title_logo").height)).translate(a, c);
        this.scene.draw(this.titleImageEntity);
    },
    runWorldsFrame: function () {
        var b = this;
        this.renderTitle(.6, this.scene.get_width() / 2 - .6 * this.titleWidth / 2, 24);
        this.blackBoxWithRadius.clearPool();
        this.blackBoxWithRadius.add9Slice(new lemongine.Rectangle(this.scene.get_width() / 2 - 222, this.scene.get_height() / 2 - 207 + 126, 444, 60), new lemongine.Rectangle(0, 16, 16, 16), new lemongine.Rectangle(6, 6, 4, 4));
        this.blackBoxWithRadius.add9Slice(new lemongine.Rectangle(this.scene.get_width() / 2 - 222, this.scene.get_height() / 2 - 207 + 205, 444, 103), new lemongine.Rectangle(0, 16, 16, 16), new lemongine.Rectangle(6, 6, 4, 4));
        this.blackBoxWithRadius.add9Slice(new lemongine.Rectangle(this.scene.get_width() / 2 - 276 + 389, this.scene.get_height() / 2 - 207 + 326, 110, 48), new lemongine.Rectangle(0, 16, 16, 16), new lemongine.Rectangle(6, 6, 4, 4));
        this.blackBoxWithRadius.resetUnusedQuads();
        this.scene.draw(this.blackBoxWithRadius);
        this.text("Select a saved game, or create a new one!", this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 93, 2, lemongine.TextAlignment.CENTER, lemongine.Color.black);
        this.text("Select a saved game, or create a new one!", this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 91, 2, lemongine.TextAlignment.CENTER, lemongine.Color.white);
        UI.drawDropdown();
        var a = Main.addSimpleButtonBetter("worldsCreateWorld", this.buttonEntity, this.scene.get_width() / 2 - 103 - 4 - 73 | 0, this.scene.get_height() / 2 - 207 + 140 | 0, 206, 34, 1.77, function () {
            b.gotoAndStop(3);
        }) ? TextCache.get("worldsCreateWorld", "Create new world", new lemongine.Point(this.scene.get_width() / 2 - 4 - 73 + 1.77, this.scene.get_height() / 2 - 207 + 159.77), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("worldsCreateWorld", "Create new world", new lemongine.Point(this.scene.get_width() / 2 - 4 - 73, this.scene.get_height() / 2 - 207 + 158), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER, 1.5);
        a.layer = 2;
        this.scene.draw(a);
        if (Main.addSimpleButtonBetter("worldsGameTypeDropdown", this.buttonEntity, this.scene.get_width() / 2 + 107 - 73 | 0, this.scene.get_height() / 2 - 207 + 140 | 0, 146, 34, 1.77, function () {
            b.gameTypeDropdownOpen = !0;
        }, this.gameTypeDropdownOpen, !0)) this.buttonEntity.addQuad(new lemongine.Vector3(this.scene.get_width() / 2 + 180 - 24 + 1.77, this.scene.get_height() / 2 - 207 + 156.77), new lemongine.Point(22, 228), new lemongine.Point(12, 6)), a = TextCache.get("minigames", "Minigames", new lemongine.Point(this.scene.get_width() / 2 + 107 - 12 + 2.77, this.scene.get_height() / 2 - 207 + 159.77), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER, 1.5);else if (this.gameTypeDropdownOpen) {
            a = this.buttonEntity;
            var c = new lemongine.Vector3(this.scene.get_width() / 2 + 180 - 24, this.scene.get_height() / 2 - 207 + 155),
                d = new lemongine.Point(22, 228),
                f = new lemongine.Point(12, 6),
                l = new haxe.ds.StringMap(),
                h = lemongine.Mathz.repeatArray([.6, .6, .6, 1], 6);
            l.h.color = h;
            a.addQuad(c, d, f, !0, null, null, null, l);
            a = TextCache.get("minigames", "Minigames", new lemongine.Point(this.scene.get_width() / 2 + 107 - 12 + 1, this.scene.get_height() / 2 - 207 + 158), Fonts.get_volter(), Colors.palette.greyB, 2, lemongine.TextAlignment.CENTER, 1.5);
        } else this.buttonEntity.addQuad(new lemongine.Vector3(this.scene.get_width() / 2 + 180 - 24, this.scene.get_height() / 2 - 207 + 155), new lemongine.Point(22, 228), new lemongine.Point(12, 6)), a = TextCache.get("minigames", "Minigames", new lemongine.Point(this.scene.get_width() / 2 + 107 - 12 + 1, this.scene.get_height() / 2 - 207 + 158), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER, 1.5);
        a.layer = 2;
        this.scene.draw(a);
        this.gameTypeDropdownOpen && ((c = Main.addSimpleButtonBetter("worldsJoinScavenger", this.buttonEntity, this.scene.get_width() / 2 + 180 - 220 | 0, this.scene.get_height() / 2 - 207 + 174 | 0, 220, 34, 1.77, function () {
            b.gameTypeDropdownOpen = !1;
            b.gotoAndStop(8);
        })) ? (this.buttonEntity.addQuad(new lemongine.Vector3(this.scene.get_width() / 2 + 180 - 220 + 13.77, this.scene.get_height() / 2 - 207 + 185.77), new lemongine.Point(0, 228), new lemongine.Point(22, 14)), a = TextCache.get("worldsJoinScavenger", "Scavenger Hunt", new lemongine.Point(this.scene.get_width() / 2 + 180 - 220 + 44.77, this.scene.get_height() / 2 - 207 + 183.77), Fonts.get_volter(), lemongine.Color.white, 2)) : (this.buttonEntity.addQuad(new lemongine.Vector3(this.scene.get_width() / 2 + 180 - 220 + 12, this.scene.get_height() / 2 - 207 + 184), new lemongine.Point(0, 228), new lemongine.Point(22, 14)), a = TextCache.get("worldsJoinScavenger", "Scavenger Hunt", new lemongine.Point(this.scene.get_width() / 2 + 180 - 220 + 43, this.scene.get_height() / 2 - 207 + 182), Fonts.get_volter(), lemongine.Color.white, 2)), a.layer = 2, this.scene.draw(a), 1 != Main.Instance.mouseDown() || c || (this.gameTypeDropdownOpen = !1));
        UI.dropdown(this.buttonEntity, "worldList", this.worldListStrings, this.selectedWorldListIndex, this.scene.get_width() / 2 - 276 + 65 | 0, this.scene.get_height() / 2 - 207 + 225 | 0, 275, function (a, c) {
            b.selectedWorldListIndex = a;
        }, 0 == this.worldListStrings.length);
        0 == this.worldListStrings.length && (a = TextCache.get("worldListPrompt", "There are no saved worlds.", new lemongine.Point(this.scene.get_width() / 2 - 276 + 71, this.scene.get_height() / 2 - 207 + 230), Fonts.get_volter(), new lemongine.Color(-13421773), 1.3, lemongine.TextAlignment.LEFT, 1.5), a.layer = 2, this.scene.draw(a));
        a = Main.addSimpleButtonBetter("worldsEnter", this.buttonEntity, this.scene.get_width() / 2 - 276 + 369 | 0, this.scene.get_height() / 2 - 207 + 220 | 0, 118, 34, 1.77, function () {
            World.versionToNumber(b.orderedWorldList[b.selectedWorldListIndex].data.h.version) > World.versionToNumber("1.31.2") ? Main.Instance.confirmationDialog.open(new ConfirmationDialogData("You're From the Future??", "The world you're trying to open is from a newer update. Attempting to open it in this version of Mine Blocks may break things or even corrupt the file.\n\nAre you sure?", "Open Anyway", function () {
                b.enterWorld();
            }, "Cancel")) : b.enterWorld();
        }, 0 == this.worldListStrings.length) ? TextCache.get("worldsEnter", "Enter world", new lemongine.Point(this.scene.get_width() / 2 - 276 + 430.77, this.scene.get_height() / 2 - 207 + 239.77), Fonts.get_volter(), lemongine.Color.white, 1.7777777777777777, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("worldsEnter", "Enter world", new lemongine.Point(this.scene.get_width() / 2 - 276 + 429, this.scene.get_height() / 2 - 207 + 238), Fonts.get_volter(), 0 == this.worldListStrings.length ? Colors.palette.grey7 : lemongine.Color.white, 1.7777777777777777, lemongine.TextAlignment.CENTER, 1.5);
        a.layer = 2;
        this.scene.draw(a);
        0 < this.worldListStrings.length && (a = Main.addSimpleButtonBetter("worldsDeleteIntent", this.buttonEntity, this.scene.get_width() / 2 - 276 + 70 | 0, this.scene.get_height() / 2 - 207 + 270 | 0, 76, 26, 1.77, function () {
            Main.Instance.confirmationDialog.open(new ConfirmationDialogData("Delete Save", 'Are you sure you want to delete the save file "' + Std.string(b.orderedWorldList[b.selectedWorldListIndex].data.h.name) + '"?', "Delete!", function () {
                new lemongine.LocalStorage(b.orderedWorldList[b.selectedWorldListIndex].data.h.data, "Mine_Blocks", function (a) {
                    a.destroy();
                });
                var a = b.orderedWorldList[b.selectedWorldListIndex].id,
                    c = GlobalSave.worldList;
                Object.prototype.hasOwnProperty.call(c.h, a) && delete c.h[a];
                GlobalSave.save();
                b.updateWorldList();
                b.selectedWorldListIndex = 0;
            }, "Cancel"));
        }, 0 == this.worldListStrings.length) ? TextCache.get("worldsDeleteIntent", "Delete", new lemongine.Point(this.scene.get_width() / 2 - 276 + 110.77, this.scene.get_height() / 2 - 207 + 286.77), Fonts.get_volter(), lemongine.Color.white, 1.4444444444444444, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("worldsDeleteIntent", "Delete", new lemongine.Point(this.scene.get_width() / 2 - 276 + 109, this.scene.get_height() / 2 - 207 + 285), Fonts.get_volter(), 0 == this.worldListStrings.length ? Colors.palette.grey7 : lemongine.Color.white, 1.4444444444444444, lemongine.TextAlignment.CENTER, 1.5), a.layer = 2, this.scene.draw(a), a = Main.addSimpleButtonBetter("worldsSaveToFile", this.buttonEntity, this.scene.get_width() / 2 - 276 + 369 - 108 | 0, this.scene.get_height() / 2 - 207 + 270 | 0, 100, 26, 1.77, function () {
            new lemongine.LocalStorage(b.orderedWorldList[b.selectedWorldListIndex].data.h.data, "Mine_Blocks", function (a) {
                a.removeSaveOnExitListener();
                if (Object.prototype.hasOwnProperty.call(a.data.h, "data")) {
                    a = a.data.h.data;
                    a.fileInfo = {
                        name: b.orderedWorldList[b.selectedWorldListIndex].data.h.name,
                        version: b.orderedWorldList[b.selectedWorldListIndex].data.h.version,
                        seed: b.orderedWorldList[b.selectedWorldListIndex].data.h.seed,
                        data: b.orderedWorldList[b.selectedWorldListIndex].data.h.data,
                        fileTimestamp: b.orderedWorldList[b.selectedWorldListIndex].data.h.date
                    };
                    a = JSON.stringify(a);
                    for (var c = "", d = 0, f = a.length; d < f;) {
                        var g = d++;
                        g = HxOverrides.cca(a, g) + (5 * g % 33 + 1);
                        c += String.fromCodePoint(g);
                    }
                    lemongine.File.saveString(c, Std.string(b.orderedWorldList[b.selectedWorldListIndex].data.h.name) + ".mbw", null, null, !1);
                } else Main.Instance.confirmationDialog.open(new ConfirmationDialogData("No Data", "That world has no save data and cannot load.", "Okay"));
            });
        }, 0 == this.worldListStrings.length) ? TextCache.get("worldsSaveToFile", "Save to file", new lemongine.Point(this.scene.get_width() / 2 - 276 + 369 - 108 + 52.77, this.scene.get_height() / 2 - 207 + 286.77), Fonts.get_volter(), lemongine.Color.white, 1.4444444444444444, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("worldsSaveToFile", "Save to file", new lemongine.Point(this.scene.get_width() / 2 - 276 + 369 - 108 + 51, this.scene.get_height() / 2 - 207 + 285), Fonts.get_volter(), 0 == this.worldListStrings.length ? Colors.palette.grey7 : lemongine.Color.white, 1.4444444444444444, lemongine.TextAlignment.CENTER, 1.5), a.layer = 2, this.scene.draw(a));
        a = Main.addSimpleButtonBetter("worldsLoadFromFile", this.buttonEntity, this.scene.get_width() / 2 - 276 + 369 | 0, this.scene.get_height() / 2 - 207 + 270 | 0, 118, 26, 1.77, null) ? TextCache.get("worldsLoadFromFile", "Load from file", new lemongine.Point(this.scene.get_width() / 2 - 276 + 430.77, this.scene.get_height() / 2 - 207 + 286.77), Fonts.get_volter(), lemongine.Color.white, 1.4444444444444444, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("worldsLoadFromFile", "Load from file", new lemongine.Point(this.scene.get_width() / 2 - 276 + 429, this.scene.get_height() / 2 - 207 + 285), Fonts.get_volter(), lemongine.Color.white, 1.4444444444444444, lemongine.TextAlignment.CENTER, 1.5);
        a.layer = 2;
        this.scene.draw(a);
        "worldsLoadFromFile" == Main.Instance.getUIHover() && Main.Instance.uiIsDown ? Main.Instance.callOnMouseUp.h.worldsLoadFromFile = F(this, this.loadFile) : (a = Main.Instance.callOnMouseUp, Object.prototype.hasOwnProperty.call(a.h, "worldsLoadFromFile") && delete a.h.worldsLoadFromFile);
        a = Main.addSimpleButtonBetter("worldsBackups", this.buttonEntity, this.scene.get_width() / 2 - 276 + 487 - 86 | 0, this.scene.get_height() / 2 - 207 + 338 | 0, 86, 26, 1.77, function () {
            b.gotoAndStop(9);
        }) ? TextCache.get("worldsBackups", "Backup", new lemongine.Point(this.scene.get_width() / 2 - 276 + 487 - 43 + 2.77, this.scene.get_height() / 2 - 207 + 353.77), Fonts.get_volter(), lemongine.Color.white, 1.4444444444444444, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("worldsBackups", "Backup", new lemongine.Point(this.scene.get_width() / 2 - 276 + 487 - 43 + 1, this.scene.get_height() / 2 - 207 + 352), Fonts.get_volter(), lemongine.Color.white, 1.4444444444444444, lemongine.TextAlignment.CENTER, 1.5);
        a.layer = 2;
        this.scene.draw(a);
        a = Main.addSimpleButtonBetter("worldsBack", this.buttonEntity, this.scene.get_width() / 2 - 276 + 63 | 0, this.scene.get_height() / 2 - 207 + 336 | 0, 72, 30, 1.77, function () {
            b.gotoAndStop(1);
        }) ? TextCache.get("worldsBack", "Back", new lemongine.Point(this.scene.get_width() / 2 - 276 + 101.77, this.scene.get_height() / 2 - 207 + 353.77), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("worldsBack", "Back", new lemongine.Point(this.scene.get_width() / 2 - 276 + 100, this.scene.get_height() / 2 - 207 + 352), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.CENTER, 1.5);
        a.layer = 2;
        this.scene.draw(a);
    },
    enterWorld: function () {
        var b = this;
        new World(this.orderedWorldList[this.selectedWorldListIndex].data.h.data, function (a) {
            Console.clearAll();
            Main.Instance.game = new Game(a, b.scene);
            Main.Instance.set_frame("game");
            GlobalSave.worldList.h[b.orderedWorldList[b.selectedWorldListIndex].id].h.version = "1.31.2";
            a = GlobalSave.worldList.h[b.orderedWorldList[b.selectedWorldListIndex].id];
            var c = new Date().getTime();
            a.h.date = c;
            GlobalSave.save();
            lemongine.Audio.stopAll();
            b.gotoAndStop(1);
            InterstitialManager.run();
        }, function (a) {
            Main.Instance.confirmationDialog.open(new ConfirmationDialogData("Invalid World", "Sorry, that world cannot be loaded. The world format appears to be invalid.", "Okay"));
        });
    },
    runGenerateFrame: function () {
        var b = this;
        this.renderTitle(.6, this.scene.get_width() / 2 - .6 * this.titleWidth / 2, 24);
        this.blackBoxWithRadius.clearPool();
        this.blackBoxWithRadius.add9Slice(new lemongine.Rectangle(this.scene.get_width() / 2 - 222, this.scene.get_height() / 2 - 207 + 78, 444, 300), new lemongine.Rectangle(0, 16, 16, 16), new lemongine.Rectangle(6, 6, 4, 4));
        this.blackBoxWithRadius.add9Slice(new lemongine.Rectangle(this.scene.get_width() / 2 - 206, this.scene.get_height() / 2 - 207 + 154, 412, 102), new lemongine.Rectangle(0, 16, 16, 16), new lemongine.Rectangle(6, 6, 4, 4));
        this.blackBoxWithRadius.resetUnusedQuads();
        this.scene.draw(this.blackBoxWithRadius);
        this.text("Create new world", this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 89, 2, lemongine.TextAlignment.CENTER, lemongine.Color.white);
        var a = TextCache.get("worldCreationNameLabel", "World name:", new lemongine.Point(this.scene.get_width() / 2 - 276 + 77, this.scene.get_height() / 2 - 207 + 124), Fonts.get_volter(), lemongine.Color.white, 1.7777777777777777, lemongine.TextAlignment.LEFT, 1.5);
        a.layer = 2;
        this.scene.draw(a);
        UI.textfield(this.buttonEntity, "worldName", this.worldName, this.scene.get_width() / 2 - 276 + 194 | 0, this.scene.get_height() / 2 - 207 + 119 | 0, 282, 2, function (a) {
            b.worldName = a;
        }, 50);
        a = TextCache.get("worldCreationSeedLabel", "Seed:", new lemongine.Point(this.scene.get_width() / 2 - 276 + 186, this.scene.get_height() / 2 - 207 + 168), Fonts.get_volter(), lemongine.Color.white, 1.4444444444444444, lemongine.TextAlignment.RIGHT, 1.5);
        a.layer = 2;
        this.scene.draw(a);
        UI.textfield(this.buttonEntity, "worldSeed", this.worldSeed, this.scene.get_width() / 2 - 276 + 194 | 0, this.scene.get_height() / 2 - 207 + 162 | 0, 180, 1.8, function (a) {
            b.worldSeed = a;
        }, 30);
        UI.radio(this.buttonEntity, "gameType1", this.gameType, "survival", this.scene.get_width() / 2 - 276 + 196 | 0, this.scene.get_height() / 2 - 207 + 192 | 0, function () {
            b.gameType = "survival";
            b.useCheats = !1;
            b.cheatsEnabled = !0;
        }, !1, 85);
        a = TextCache.get("gameTypeSurvival", "Survival", new lemongine.Point(this.scene.get_width() / 2 - 276 + 216, this.scene.get_height() / 2 - 207 + 194), Fonts.get_volter(), lemongine.Color.white, 1.4444444444444444, lemongine.TextAlignment.LEFT, 1.5);
        a.layer = 2;
        this.scene.draw(a);
        UI.radio(this.buttonEntity, "gameType2", this.gameType, "creative", this.scene.get_width() / 2 - 276 + 286 | 0, this.scene.get_height() / 2 - 207 + 192 | 0, function () {
            b.gameType = "creative";
            b.useCheats = !0;
            b.cheatsEnabled = !0;
        }, !1, 85);
        a = TextCache.get("gameTypeCreative", "Creative", new lemongine.Point(this.scene.get_width() / 2 - 276 + 306, this.scene.get_height() / 2 - 207 + 194), Fonts.get_volter(), lemongine.Color.white, 1.4444444444444444, lemongine.TextAlignment.LEFT, 1.5);
        a.layer = 2;
        this.scene.draw(a);
        UI.radio(this.buttonEntity, "gameType3", this.gameType, "hardcore", this.scene.get_width() / 2 - 276 + 376 | 0, this.scene.get_height() / 2 - 207 + 192 | 0, function () {
            b.gameType = "hardcore";
            b.useCheats = !1;
            b.cheatsEnabled = !1;
        }, !1, 85);
        a = TextCache.get("gameTypeHardcore", "Hardcore", new lemongine.Point(this.scene.get_width() / 2 - 276 + 396, this.scene.get_height() / 2 - 207 + 194), Fonts.get_volter(), lemongine.Color.white, 1.4444444444444444, lemongine.TextAlignment.LEFT, 1.5);
        a.layer = 2;
        this.scene.draw(a);
        a = TextCache.get("worldCreationCheatsLabel", "Cheats:", new lemongine.Point(this.scene.get_width() / 2 - 276 + 186, this.scene.get_height() / 2 - 207 + 213), Fonts.get_volter(), this.cheatsEnabled ? lemongine.Color.white : new lemongine.Color(-6710887), 1.4444444444444444, lemongine.TextAlignment.RIGHT, 1.5);
        a.layer = 2;
        this.scene.draw(a);
        UI.checkbox(this.buttonEntity, "cheats", this.useCheats, this.scene.get_width() / 2 - 276 + 196 | 0, this.scene.get_height() / 2 - 207 + 212 | 0, function () {
            b.useCheats = !b.useCheats;
        }, !this.cheatsEnabled);
        a = TextCache.get("worldCreationBonusChestLabel", "Bonus chest:", new lemongine.Point(this.scene.get_width() / 2 - 276 + 186, this.scene.get_height() / 2 - 207 + 234), Fonts.get_volter(), lemongine.Color.white, 1.4444444444444444, lemongine.TextAlignment.RIGHT, 1.5);
        a.layer = 2;
        this.scene.draw(a);
        UI.checkbox(this.buttonEntity, "bonusChest", this.useBonusChest, this.scene.get_width() / 2 - 276 + 196 | 0, this.scene.get_height() / 2 - 207 + 233 | 0, function () {
            b.useBonusChest = !b.useBonusChest;
        }, !1);
        a = Main.addSimpleButtonBetter("createWorldCreate", this.buttonEntity, this.scene.get_width() / 2 - 84 | 0, this.scene.get_height() / 2 - 207 + 274 | 0, 168, 50, 1.77, function () {
            var a = lemongine.Helpers.trim(b.worldName);
            "" == a ? (b.worldName = "New World", UI.fields.h.worldName.input.set_text(b.worldName)) : (a = a.replace(/[\\/<>:"|?* ]/g, "_"), Object.prototype.hasOwnProperty.call(GlobalSave.worldList.h, a) ? (b.worldName += "_", UI.fields.h.worldName.input.set_text(b.worldName)) : new World(a, function (c) {
                var d = GlobalSave.worldList,
                    k = new haxe.ds.StringMap();
                k.h.seed = c.seedNum;
                k.h.version = "1.31.2";
                k.h.name = b.worldName;
                k.h.data = a;
                var p = new Date().getTime();
                k.h.date = p;
                d.h[a] = Game.makeDynamicMap(k);
                b.gotoAndStop(1);
                Main.Instance.set_frame("game");
                Main.Instance.game = new Game(c, b.scene);
                Console.clearAll();
                lemongine.Audio.stopAll();
                InterstitialManager.run();
                GlobalSave.save();
            }, function (c) {
                var d = GlobalSave.worldList,
                    k = new haxe.ds.StringMap();
                k.h.seed = b.worldSeed;
                k.h.version = "1.31.2";
                k.h.name = b.worldName;
                k.h.data = a;
                var p = new Date().getTime();
                k.h.date = p;
                d.h[a] = Game.makeDynamicMap(k);
                b.gotoAndStop(1);
                Console.clearAll();
                Main.Instance.set_frame("game");
                Main.Instance.game = new Game(c, b.scene, !0, b.worldSeed, b.useCheats, "creative" == b.gameType ? 1 : 0, "hardcore" == b.gameType, b.useBonusChest);
                lemongine.Audio.stopAll();
                InterstitialManager.run();
                GlobalSave.save();
            }));
        }) ? TextCache.get("createWorldCreate", "Create world!", new lemongine.Point(this.scene.get_width() / 2 + 2.77, this.scene.get_height() / 2 - 207 + 302.77), Fonts.get_volter(), lemongine.Color.white, 1.7777777777777777, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("createWorldCreate", "Create world!", new lemongine.Point(this.scene.get_width() / 2 + 1, this.scene.get_height() / 2 - 207 + 301), Fonts.get_volter(), lemongine.Color.white, 1.7777777777777777, lemongine.TextAlignment.CENTER, 1.5);
        a.layer = 2;
        this.scene.draw(a);
        a = Main.addSimpleButtonBetter("createWorldBack", this.buttonEntity, this.scene.get_width() / 2 - 84 | 0, this.scene.get_height() / 2 - 207 + 335 | 0, 168, 26, 1.77, function () {
            b.gotoAndStop(2);
        }) ? TextCache.get("createWorldBack", "Cancel", new lemongine.Point(this.scene.get_width() / 2 + 2.77, this.scene.get_height() / 2 - 207 + 350.77), Fonts.get_volter(), lemongine.Color.white, 1.4444444444444444, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("createWorldBack", "Cancel", new lemongine.Point(this.scene.get_width() / 2 + 1, this.scene.get_height() / 2 - 207 + 349), Fonts.get_volter(), lemongine.Color.white, 1.4444444444444444, lemongine.TextAlignment.CENTER, 1.5);
        a.layer = 2;
        this.scene.draw(a);
    },
    runCreditsFrame: function () {
        var b = this;
        this.renderTitle(.6, this.scene.get_width() / 2 - .6 * this.titleWidth / 2, 24);
        this.blackBoxWithRadius.clearPool();
        this.blackBoxWithRadius.update9Slice(0, new lemongine.Rectangle(this.scene.get_width() / 2 - 246, this.scene.get_height() / 2 - 207 + 80, 496, 264), new lemongine.Rectangle(0, 16, 16, 16), new lemongine.Rectangle(6, 6, 4, 4));
        this.blackBoxWithRadius.resetUnusedQuads();
        this.scene.draw(this.blackBoxWithRadius);
        var a = Main.addSimpleButtonBetter("creditsBack", this.buttonEntity, this.scene.get_width() / 2 - 45 | 0, this.scene.get_height() / 2 - 207 + 355 | 0, 90, 30, 1.77, function () {
            b.gotoAndStop(1);
        }) ? TextCache.get("creditsBack", "Great!", new lemongine.Point(this.scene.get_width() / 2 + 2.77, this.scene.get_height() / 2 - 207 + 372.77), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER) : TextCache.get("creditsBack", "Great!", new lemongine.Point(this.scene.get_width() / 2 + 1, this.scene.get_height() / 2 - 207 + 371), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER);
        a.layer = 2;
        this.scene.draw(a);
        this.text("Created by me, Zanzlanz! Hi there! :D", this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 96, 2, lemongine.TextAlignment.CENTER);
        var c = this.text("zanzlanz.com", this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 116, 1.5555555555555556, lemongine.TextAlignment.CENTER, new lemongine.Color(-256)).calculatedWidth;
        Main.buttonBehavior("creditsZanzlanzLink", !1, this.scene.get_width() / 2 - 14 * c / 9 / 2 | 0, this.scene.get_height() / 2 - 207 + 116 | 0, 14 * c / 9 | 0, 14 * Fonts.get_volter().height / 9 | 0, function () {
            lemongine.Web.open("https://zanzlanz.com");
        }, !1);
        a = this.buttonEntity;
        var d = new lemongine.Vector3(this.scene.get_width() / 2 - 14 * c / 9 / 2 - 1, this.scene.get_height() / 2 - 207 + 116 + 14 * Fonts.get_volter().height / 9 - 2),
            f = new lemongine.Point(96, 0),
            l = new lemongine.Point(1, 1);
        c = new lemongine.Point(14 * c / 9, 1);
        var h = new haxe.ds.StringMap(),
            m = lemongine.Mathz.repeatArray([1, 1, 0, 1], 6);
        h.h.color = m;
        a.addQuad(d, f, l, !0, c, null, null, h);
        this.text("Prodevus helped with the art!", this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 148, 2, lemongine.TextAlignment.CENTER);
        this.text("Such as mobs, UI, branding, and the default skin.", this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 168, 1.5555555555555556, lemongine.TextAlignment.CENTER);
        this.text("Mine Blocks is a fan game of Minecraft!", this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 200, 2, lemongine.TextAlignment.CENTER);
        c = this.text("minecraft.net", this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 221, 1.5555555555555556, lemongine.TextAlignment.CENTER, new lemongine.Color(-256)).calculatedWidth;
        Main.buttonBehavior("creditsMinecraftLink", !1, this.scene.get_width() / 2 - 14 * c / 9 / 2 | 0, this.scene.get_height() / 2 - 207 + 221 | 0, 14 * c / 9 | 0, 14 * Fonts.get_volter().height / 9 | 0, function () {
            lemongine.Web.open("https://minecraft.net");
        }, !1);
        a = this.buttonEntity;
        d = new lemongine.Vector3(this.scene.get_width() / 2 - 14 * c / 9 / 2 - 1, this.scene.get_height() / 2 - 207 + 221 + 14 * Fonts.get_volter().height / 9 - 2);
        f = new lemongine.Point(96, 0);
        l = new lemongine.Point(1, 1);
        c = new lemongine.Point(14 * c / 9, 1);
        h = new haxe.ds.StringMap();
        m = lemongine.Mathz.repeatArray([1, 1, 0, 1], 6);
        h.h.color = m;
        a.addQuad(d, f, l, !0, c, null, null, h);
        this.text("This is not an official Minecraft product.\nMine Blocks is not approved by or associated with Mojang.\nBut, according to Mojang's Brand Guidelines, it's all good! Thanks Mojang! <3", this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 253, 1, lemongine.TextAlignment.CENTER, new lemongine.Color(-2236963));
        this.text("Huge thanks to my supporters, including you, for playing!", this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 295, 1.5555555555555556, lemongine.TextAlignment.CENTER);
        c = this.text("mineblocks.com/patreon", this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 313, 1.5555555555555556, lemongine.TextAlignment.CENTER, new lemongine.Color(-256)).calculatedWidth;
        Main.buttonBehavior("creditsSupportersLink", !1, this.scene.get_width() / 2 - 14 * c / 9 / 2 | 0, this.scene.get_height() / 2 - 207 + 313 | 0, 14 * c / 9 | 0, 14 * Fonts.get_volter().height / 9 | 0, function () {
            lemongine.Web.open("https://mineblocks.com/patreon");
        }, !1);
        a = this.buttonEntity;
        d = new lemongine.Vector3(this.scene.get_width() / 2 - 14 * c / 9 / 2 - 1, this.scene.get_height() / 2 - 207 + 313 + 14 * Fonts.get_volter().height / 9 - 2);
        f = new lemongine.Point(96, 0);
        l = new lemongine.Point(1, 1);
        c = new lemongine.Point(14 * c / 9, 1);
        h = new haxe.ds.StringMap();
        m = lemongine.Mathz.repeatArray([1, 1, 0, 1], 6);
        h.h.color = m;
        a.addQuad(d, f, l, !0, c, null, null, h);
    },
    runFAQFrame: function () {
        var b = this;
        this.renderTitle(.6, this.scene.get_width() / 2 - .6 * this.titleWidth / 2, 24);
        this.blackBoxWithRadius.clearPool();
        this.blackBoxWithRadius.update9Slice(0, new lemongine.Rectangle(this.scene.get_width() / 2 - 246, this.scene.get_height() / 2 - 207 + 80, 496, 264), new lemongine.Rectangle(0, 16, 16, 16), new lemongine.Rectangle(6, 6, 4, 4));
        this.blackBoxWithRadius.resetUnusedQuads();
        this.scene.draw(this.blackBoxWithRadius);
        var a = Main.addSimpleButtonBetter("faqBack", this.buttonEntity, this.scene.get_width() / 2 - 45 | 0, this.scene.get_height() / 2 - 207 + 355 | 0, 90, 30, 1.77, function () {
            b.gotoAndStop(1);
        }) ? TextCache.get("faqBack", "Gotcha!", new lemongine.Point(this.scene.get_width() / 2 + 2.77, this.scene.get_height() / 2 - 207 + 372.77), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER) : TextCache.get("faqBack", "Gotcha!", new lemongine.Point(this.scene.get_width() / 2 + 1, this.scene.get_height() / 2 - 207 + 371), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER);
        a.layer = 2;
        this.scene.draw(a);
        var c = this.scene.get_height() / 2 - 207 + 86 | 0;
        this.buttonEntity.add9Slice(new lemongine.Rectangle(this.scene.get_width() / 2 - 276 + 36, c, 450, 250), new lemongine.Rectangle(69, 217, 5, 5), new lemongine.Rectangle(2, 2, 1, 1), 0, null, 2);
        0 == Main.Instance.mouseDown() && new lemongine.Rectangle(this.scene.get_width() / 2 - 276 + 36, c, 450, 250).containsPoint(Main.Instance.mouse) && (0 < Main.Instance.mouseWheelDelta ? this.faqScrollPosition = Math.max(0, this.faqScrollPosition - 16) : 0 > Main.Instance.mouseWheelDelta && (this.faqScrollPosition = Math.min(1550, this.faqScrollPosition + 16)));
        a = Main.buttonBehavior("faqScrollUp", !1, this.scene.get_width() / 2 - 276 + 520 - 30 | 0, c | 0, 30, 20, null, !1);
        this.buttonEntity.addQuad(new lemongine.Vector3(this.scene.get_width() / 2 - 276 + 520 - 30 | 0, c | 0), new lemongine.Point(78 + 15 * a, 196), new lemongine.Point(15, 10), !0, new lemongine.Point(30, 20));
        2 == a && (this.faqScrollPosition = Math.max(0, this.faqScrollPosition - 8));
        a = Main.buttonBehavior("faqScrollDown", !1, this.scene.get_width() / 2 - 276 + 520 - 30 | 0, c + 250 - 20 | 0, 30, 20, null, !1);
        this.buttonEntity.addQuad(new lemongine.Vector3(this.scene.get_width() / 2 - 276 + 520 - 30 | 0, c + 250 - 20 | 0), new lemongine.Point(78 + 15 * a, 232), new lemongine.Point(15, 10), !0, new lemongine.Point(30, 20));
        2 == a && (this.faqScrollPosition = Math.min(1550, this.faqScrollPosition + 8));
        a = 206 * Math.min(1, 250 / 1800) | 0;
        var d = new lemongine.Rectangle(this.scene.get_width() / 2 - 276 + 520 - 30 | 0, c + 22 + Math.min(206 - a, 206 * this.faqScrollPosition / 1800), 30, a + 1);
        a = Main.buttonBehavior("faqScrollbar", !1, d.x | 0, d.y | 0, d.width | 0, d.height | 0, null, !1);
        G.gt(Main.Instance.mouseDown(), 0) && "faqScrollbar" == Main.Instance.getUIHover() && (1 == Main.Instance.mouseDown() && (this.faqScrollMouseOffset = Main.Instance.mouse.y - d.y), a = 2, this.faqScrollPosition = lemongine.Mathz.clamp(0, 1550, (Main.Instance.mouse.y - this.faqScrollMouseOffset - (c + 22)) / 206 * 1800));
        this.buttonEntity.add9Slice(d, new lemongine.Rectangle(78 + 15 * a, 206, 15, 16), new lemongine.Rectangle(1, 2, 13, 11), 0, null, 2);
        this.buttonEntity.addQuad(new lemongine.Vector3(d.x, (d.get_centerY() | 0) - 10), new lemongine.Point(78 + 15 * a, 222), new lemongine.Point(15, 10), !0, new lemongine.Point(30, 20));
        d = c + 8 - (this.faqScrollPosition | 0);
        for (var f = 0, g = screens.Menu_Main.faq.length; f < g;) {
            var h = f++;
            if (d > c + 250) break;
            a = TextCache.get("faqQuestion" + h, "Question: " + screens.Menu_Main.faq[h].question, new lemongine.Point(this.scene.get_width() / 2 - 276 + 46, d), Fonts.get_volter(), new lemongine.Color(-6728448), 2);
            a.setWordWrap(220);
            a.setUniform("mask", [0, (c + 2 - d) / 2, this.scene.get_width(), 122]);
            a.layer = 2;
            d += 2 * a.calculatedHeight;
            d >= c && this.scene.draw(a);
            a = TextCache.get("faqAnswer" + h, "Answer: " + screens.Menu_Main.faq[h].answer, new lemongine.Point(this.scene.get_width() / 2 - 276 + 46, d), Fonts.get_volter(), lemongine.Color.black, 2);
            a.setWordWrap(220);
            a.setUniform("mask", [0, (c + 2 - d) / 2, this.scene.get_width(), 122]);
            a.layer = 2;
            d += 2 * a.calculatedHeight + 16;
            d >= c && this.scene.draw(a);
        }
    },
    runSettingsFrame: function () {
        Main.Instance.settings.run();
    },
    settingsBackCallback: function () {
        this.gotoAndStop(1);
    },
    runScavengerFrame: function () {
        var b = this;
        this.renderTitle(.6, this.scene.get_width() / 2 - .6 * this.titleWidth / 2, 24);
        UI.drawDropdown();
        this.blackBoxWithRadius.clearPool();
        this.blackBoxWithRadius.add9Slice(new lemongine.Rectangle(-10, this.scene.get_height() / 2 - 207 + 97, this.scene.get_width() + 20, 280), new lemongine.Rectangle(0, 16, 16, 16), new lemongine.Rectangle(6, 6, 4, 4));
        this.text("Scavenger Hunt", this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 124, 3, lemongine.TextAlignment.CENTER, lemongine.Color.black);
        this.text("Scavenger Hunt", this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 121, 3, lemongine.TextAlignment.CENTER, lemongine.Color.white);
        Main.Instance.confirmationDialog.isOpenToDialog("joinLateConfirmation") ? 60 >= ScavengerManager.getSecondsUntilEndTime() ? Main.Instance.confirmationDialog.close() : Main.Instance.confirmationDialog.setBodyText(ScavengerManager.joinLateConfirmationMessage()) : Main.Instance.confirmationDialog.isOpenToDialog("afkWarning") && (!ScavengerManager.get_socketConnected() || ScavengerManager.afkTimer.getTime() <= new Date().getTime() ? (ScavengerManager.leaveGame(), Main.Instance.confirmationDialog.close()) : Main.Instance.confirmationDialog.setBodyText(ScavengerManager.afkTimerMessage()));
        if (this.scavengerFrame == screens.ScavengerFrames.LOBBY) {
            var a = new lemongine.Rectangle(this.scene.get_width() / 2 - 276 + 21, this.scene.get_height() / 2 - 207 + 196, 333, 160),
                c = new lemongine.Rectangle(this.scene.get_width() / 2 - 276 + 373, this.scene.get_height() / 2 - 207 + 196, 157, 160),
                d = new lemongine.Rectangle(this.scene.get_width() / 2 - 276 + 373, this.scene.get_height() / 2 - 207 + 196, 157, 47),
                f = new lemongine.Rectangle(this.scene.get_width() / 2 - 276 + 373, this.scene.get_height() / 2 - 207 + 257, 157, 99);
            var l = Main.addSimpleButtonBetter("scavengerBack", this.buttonEntity, 12, this.scene.get_height() / 2 - 207 + 109 | 0, 70, 28, 1.77, function () {
                b.gotoAndStop(2);
            }) ? TextCache.get("scavengerBack", ScavengerManager.get_socketConnected() ? "Leave" : "Back", new lemongine.Point(49.77, this.scene.get_height() / 2 - 207 + 125.77), Fonts.get_volter(), lemongine.Color.white, 1.6666666666666667, lemongine.TextAlignment.CENTER) : TextCache.get("scavengerBack", ScavengerManager.get_socketConnected() ? "Leave" : "Back", new lemongine.Point(48, this.scene.get_height() / 2 - 207 + 124), Fonts.get_volter(), lemongine.Color.white, 1.6666666666666667, lemongine.TextAlignment.CENTER);
            l.layer = 2;
            this.scene.draw(l);
            this.text("A Mine Blocks mini-game!", this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 155, 2, lemongine.TextAlignment.CENTER, lemongine.Color.white);
            if ("" != ScavengerManager.username && null != this.scavengerPlayerSkinEntity) {
                this.scavengerPlayerSkinEntity.transform.reset().scale2D(2).translate(this.scene.get_width() - 9 - 16, this.scene.get_height() / 2 - 207 + 114);
                this.scene.draw(this.scavengerPlayerSkinEntity);
                l = this.text(ScavengerManager.username, 0, 0, 1, lemongine.TextAlignment.LEFT, lemongine.Color.white, null, "topUsernameText");
                var h = 32 + l.calculatedWidth + 1;
                l.transform.reset().translate(this.scene.get_width() - 9 - h, this.scene.get_height() / 2 - 207 + 110);
                var m = Main.buttonBehavior("topUsername", !1, this.scene.get_width() - 9 - h, Math.floor(this.scene.get_height() / 2 - 207 + 110), h, 18, function () {
                    b.scavengerDisplayNameCallback = function () {
                        b.scavengerDisplayNameCallback = null;
                        b.gotoScavengerFrame(screens.ScavengerFrames.LOBBY);
                    };
                    b.gotoScavengerFrame(screens.ScavengerFrames.DISPLAY_NAME_CHANGE);
                }, !1);
                l.setColor(0 < m ? lemongine.Color.white : new lemongine.Color(-16723457));
                h = this.blackBoxWithRadius;
                var x = new lemongine.Vector3(this.scene.get_width() - 9 - 32 - l.calculatedWidth - 1, this.scene.get_height() / 2 - 207 + 110 + l.calculatedHeight),
                    q = new lemongine.Point(96, 0),
                    r = new lemongine.Point(1, 1),
                    C = new lemongine.Point(l.calculatedWidth, 1);
                l = new haxe.ds.StringMap();
                var la = lemongine.Mathz.repeatArray([0, 0, 0, 1], 6);
                l.h.color = la;
                la = lemongine.Mathz.repeatArray(0 < m ? [1, 1, 1, 0] : [0, .8196078431372549, 1, 0], 6);
                l.h.colorOffset = la;
                h.addQuad(x, q, r, !0, C, null, null, l);
            }
            var y = ["info", "plus"];
            "" == ScavengerManager.partyToken ? (this.blackBoxWithRadius.add9Slice(d, new lemongine.Rectangle(0, 16, 16, 16), new lemongine.Rectangle(6, 6, 4, 4)), this.blackBoxWithRadius.add9Slice(f, new lemongine.Rectangle(0, 16, 16, 16), new lemongine.Rectangle(6, 6, 4, 4)), this.text("Create new party:", d.get_centerX() | 0, d.y + 8 | 0, 1, lemongine.TextAlignment.CENTER, lemongine.Color.white), l = Main.addSimpleButtonBetter("scavengerCreateParty", this.buttonEntity, d.get_centerX() - 30 | 0, d.y + 22 | 0, 60, 20, 1.77, F(this, this.scavengerSubmitCreateParty), ScavengerManager.socketConnecting) ? TextCache.get("scavengerCreateParty", "Create", new lemongine.Point(d.get_centerX() + 1 + 1.77, d.y + 22 + 10 + 1 + 1.77), Fonts.get_volter(), lemongine.Color.white, 1.3333333333333333, lemongine.TextAlignment.CENTER) : TextCache.get("scavengerCreateParty", "Create", new lemongine.Point(d.get_centerX() + 1, d.y + 22 + 10 + 1), Fonts.get_volter(), lemongine.Color.white, 1.3333333333333333, lemongine.TextAlignment.CENTER), l.layer = 2, this.scene.draw(l), this.text("Enter party invite code:", f.get_centerX(), f.y + 14, 1, lemongine.TextAlignment.CENTER, lemongine.Color.white), l = UI.textfield(this.buttonEntity, "partyCodeEntry", this.scavengerTokenEntry, f.get_centerX() - 65 | 0, f.y + 34 | 0, 130, 2, function (a) {
                b.scavengerTokenEntry = a;
            }, 7, "a-zA-Z0-9", "", !this.scavengerTokenEntryRevealed, !0), null == l.customTextInputParser && (l.customTextInputParser = function (a) {
                return HxOverrides.substr(lemongine.Helpers.trim(a), -7, 7).toUpperCase();
            }), l = Main.addSimpleButtonBetter("scavengerJoinParty", this.buttonEntity, f.x + 84 | 0, f.y + 67 | 0, 60, 20, 1.77, F(this, this.scavengerSubmitJoinParty), ScavengerManager.socketConnecting) ? TextCache.get("scavengerJoinParty", "Join", new lemongine.Point(f.x + 84 + 30 + 1 + 1.77, f.y + 67 + 10 + 1 + 1.77), Fonts.get_volter(), lemongine.Color.white, 1.3333333333333333, lemongine.TextAlignment.CENTER) : TextCache.get("scavengerJoinParty", "Join", new lemongine.Point(f.x + 84 + 30 + 1, f.y + 67 + 10 + 1), Fonts.get_volter(), lemongine.Color.white, 1.3333333333333333, lemongine.TextAlignment.CENTER), 1 == UI.fields.h.partyCodeEntry.input.focused && 1 == Main.Instance.keyDown(13) && this.scavengerSubmitJoinParty(), l.layer = 2, this.scene.draw(l), Main.buttonBehavior("showLobbyCodeButton", !1, f.x + 16 | 0, f.get_bottom() - 28 | 0, 26, 14, function () {
                b.scavengerTokenEntryRevealed = !b.scavengerTokenEntryRevealed;
            }, !1), h = this.blackBoxWithRadius, x = f.x + 16, q = f.get_bottom() - 28, r = this.scavengerTokenEntryRevealed ? 13 : 0, h.addQuad(new lemongine.Vector3(x, q, 0), new lemongine.Point(22 + r, 234), new lemongine.Point(13, 7), !0, new lemongine.Point(26, 14))) : (y.push("players"), ScavengerManager.chatDisabled || y.push("chat"), this.blackBoxWithRadius.add9Slice(c, new lemongine.Rectangle(0, 16, 16, 16), new lemongine.Rectangle(6, 6, 4, 4)), ScavengerManager.isHost ? (this.text("Invite players by copying\nthe link below:", c.get_centerX() | 0, c.y + 20 | 0, 1, lemongine.TextAlignment.CENTER, lemongine.Color.white), Main.buttonBehavior("revealInviteCodeButton", !1, c.x + 18 | 0, c.y + 46 | 0, 90, 19, function () {
                b.scavengerTokenRevealed = !b.scavengerTokenRevealed;
            }, !1), h = this.blackBoxWithRadius, x = new lemongine.Rectangle(c.x + 18, c.y + 46, 90, 19), q = new lemongine.Rectangle(0, 16, 16, 16), r = new lemongine.Rectangle(6, 6, 4, 4), l = new haxe.ds.StringMap(), la = lemongine.Mathz.repeatArray([0, 0, 0, 5], 6), l.h.color = la, la = lemongine.Mathz.repeatArray([0, 0, 0, 0], 6), l.h.colorOffset = la, h.add9Slice(x, q, r, 0, l, .5), this.scavengerTokenRevealed ? this.text(ScavengerManager.partyToken, c.x + 18 + 45 | 0, c.y + 46 + 2 | 0, 1.6666666666666667, lemongine.TextAlignment.CENTER, lemongine.Color.white) : this.text("Click to reveal", c.x + 18 + 45 | 0, c.y + 51 | 0, 1, lemongine.TextAlignment.CENTER, lemongine.Color.white), Main.addSimpleButtonBetter("scavengerCopyCode", this.buttonEntity, c.x + 115 | 0, c.y + 46 | 0, 24, 20, 1.77, function () {
                null == window.getInviteLink ? ScavengerManager.copyPartyLinkCallback() : window.getInviteLink(ScavengerManager.partyToken, ScavengerManager.copyPartyLinkCallback);
            }) ? this.buttonEntity.addQuad(new lemongine.Vector3(c.x + 115 + 8 | 0, c.y + 46 + 4 | 0, 0), new lemongine.Point(48, 223), new lemongine.Point(9, 14)) : this.buttonEntity.addQuad(new lemongine.Vector3(c.x + 116 + 6 | 0, c.y + 46 + 3 | 0, 0), new lemongine.Point(48, 223), new lemongine.Point(9, 14)), h = !0, -1 == ScavengerManager.getStartTime() ? this.text("Waiting for\nplayers...", c.get_centerX() | 0, c.y + 94 | 0, 2, lemongine.TextAlignment.CENTER, lemongine.Color.white) : 0 >= ScavengerManager.getStartTime() - new Date().getTime() ? (h = !1, this.text("Starting...", c.get_centerX() | 0, c.y + 88 | 0, 2, lemongine.TextAlignment.CENTER, lemongine.Color.white)) : (this.text(Language.shortCountdownString(Math.ceil(ScavengerManager.getSecondsUntilStartTime())), c.get_centerX() | 0, c.y + 74 | 0, 3, lemongine.TextAlignment.CENTER, lemongine.Color.white), this.text("until game starts", c.get_centerX() | 0, c.y + 104 | 0, 1, lemongine.TextAlignment.CENTER, lemongine.Color.white)), 1 == ScavengerManager.members.length ? l = Main.addSimpleButtonBetter("scavengerSolo", this.buttonEntity, c.get_centerX() - 47 | 0, c.y + 132 | 0, 94, 20, 1.77, function () {
                ScavengerManager.packetToServer_playSolo();
            }, !h) ? TextCache.get("scavengerSolo", "Practice solo", new lemongine.Point(d.get_centerX() + 1 + 1, d.y + 132 + 10 + 1 + 1), Fonts.get_volter(), lemongine.Color.white, 1, lemongine.TextAlignment.CENTER) : TextCache.get("scavengerSolo", "Practice solo", new lemongine.Point(d.get_centerX() + 1, d.y + 132 + 10 + 1), Fonts.get_volter(), lemongine.Color.white, 1, lemongine.TextAlignment.CENTER) : (x = 0, ScavengerManager.isHost && ScavengerManager.userMember.hasPlus && (x = 35, l = Main.addSimpleButtonBetter("scavengerStartNow", this.buttonEntity, c.get_centerX() - 33 + 35 | 0, c.y + 132 | 0, 66, 20, 1.77, function () {
                ScavengerManager.packetToServer_playSolo();
            }, !h || 3 >= Math.ceil(ScavengerManager.getSecondsUntilStartTime())) ? TextCache.get("scavengerStartNow", "Start now", new lemongine.Point(d.get_centerX() + 1 + 1 + 35, d.y + 132 + 10 + 1 + 1), Fonts.get_volter(), lemongine.Color.white, 1, lemongine.TextAlignment.CENTER) : TextCache.get("scavengerStartNow", "Start now", new lemongine.Point(d.get_centerX() + 1 + 35, d.y + 132 + 10 + 1), Fonts.get_volter(), lemongine.Color.white, 1, lemongine.TextAlignment.CENTER), l.layer = 2, this.scene.draw(l)), l = Main.addSimpleButtonBetter("scavengerAdd30s", this.buttonEntity, c.get_centerX() - 33 - x | 0, c.y + 132 | 0, 66, 20, 1.77, function () {
                ScavengerManager.packetToServer_add30s();
            }, !h || 30 < Math.ceil(ScavengerManager.getSecondsUntilStartTime())) ? TextCache.get("scavengerAdd30s", "Add 30s", new lemongine.Point(d.get_centerX() + 1 + 1 - x, d.y + 132 + 10 + 1 + 1), Fonts.get_volter(), lemongine.Color.white, 1, lemongine.TextAlignment.CENTER) : TextCache.get("scavengerAdd30s", "Add 30s", new lemongine.Point(d.get_centerX() + 1 - x, d.y + 132 + 10 + 1), Fonts.get_volter(), lemongine.Color.white, 1, lemongine.TextAlignment.CENTER))) : (-1 == ScavengerManager.getStartTime() ? this.text("Waiting for\nplayers...", c.get_centerX() | 0, c.y + 44 | 0, 2, lemongine.TextAlignment.CENTER, lemongine.Color.white) : 0 >= ScavengerManager.getStartTime() - new Date().getTime() ? ScavengerManager.isSpectating || !ScavengerManager.userMember.joinedGame ? (this.text(Language.shortCountdownString(Math.ceil(ScavengerManager.getSecondsUntilEndTime())), c.get_centerX() | 0, c.y + 44 | 0, 3, lemongine.TextAlignment.CENTER, lemongine.Color.white), this.text("until next game", c.get_centerX() | 0, c.y + 74 | 0, 1, lemongine.TextAlignment.CENTER, lemongine.Color.white)) : this.text("Starting...", c.get_centerX() | 0, c.y + 48 | 0, 2, lemongine.TextAlignment.CENTER, lemongine.Color.white) : (this.text(Language.shortCountdownString(Math.ceil((ScavengerManager.getStartTime() - new Date().getTime()) / 1E3)), c.get_centerX() | 0, c.y + 44 | 0, 3, lemongine.TextAlignment.CENTER, lemongine.Color.white), this.text("until game starts", c.get_centerX() | 0, c.y + 74 | 0, 1, lemongine.TextAlignment.CENTER, lemongine.Color.white)), l = Main.addSimpleButtonBetter("scavengerExitParty", this.buttonEntity, c.get_centerX() - 33 | 0, c.y + 102 | 0, 66, 20, 1.77, function () {
                ScavengerManager.packetToServer_leaveParty();
                b.set_scavengerSelectedTab("info");
            }) ? TextCache.get("scavengerExitParty", "Exit party", new lemongine.Point(d.get_centerX() + 1 + 1, d.y + 102 + 10 + 1 + 1), Fonts.get_volter(), lemongine.Color.white, 1, lemongine.TextAlignment.CENTER) : TextCache.get("scavengerExitParty", "Exit party", new lemongine.Point(d.get_centerX() + 1, d.y + 102 + 10 + 1), Fonts.get_volter(), lemongine.Color.white, 1, lemongine.TextAlignment.CENTER)), l.layer = 2, this.scene.draw(l), 0 < ScavengerManager.completeLeaderboards.length && y.push("leaderboard"));
            this.blackBoxWithRadius.add9Slice(new lemongine.Rectangle(a.x, a.y + 23, a.width, a.height - 23), new lemongine.Rectangle(0, 16, 16, 16), new lemongine.Rectangle(7, 7, 2, 2), 0);
            d = 12;
            l = 0;
            for (c = y.length; l < c;) {
                f = [l++];
                m = screens.Menu_Main.scavengerTabs.h[y[f[0]]];
                var ja = Math.floor(m.floatRight ? a.width - 12 - 50 : d);
                h = this.blackBoxWithRadius;
                x = new lemongine.Rectangle(a.x + ja, a.y, 50, 23);
                q = new lemongine.Rectangle(0, 16, 16, 8);
                r = new lemongine.Rectangle(6, 6, 4, 0);
                C = new haxe.ds.StringMap();
                la = lemongine.Mathz.repeatArray([1, 1, 1, y[f[0]] == this.scavengerSelectedTab ? 1 : .5], 6);
                C.h.color = la;
                h.add9Slice(x, q, r, 0, C);
                C = this.topLayerUIEntity;
                h = new lemongine.Vector3(Math.floor(a.get_left() + ja + 25 - 2 * m.uiRect.width / 2), Math.floor(a.get_top() + 11.5 - 2 * m.uiRect.height / 2));
                x = m.uiRect.get_position();
                q = m.uiRect.get_size();
                r = new lemongine.Point(2 * m.uiRect.width, 2 * m.uiRect.height);
                la = new haxe.ds.StringMap();
                var pa = lemongine.Mathz.repeatArray([1, 1, 1, y[f[0]] == this.scavengerSelectedTab ? 1 : .5], 6);
                la.h.color = pa;
                C.addQuad(h, x, q, !0, r, null, null, la);
                0 < this.unreadChats && "chat" == y[f[0]] && this.topLayerUIEntity.addQuad(new lemongine.Vector3(a.get_left() + ja + 31 | 0, a.get_top() - 2 | 0), new lemongine.Point(28, 248), new lemongine.Point(4, 4), !0, new lemongine.Point(8, 8));
                y[f[0]] != this.scavengerSelectedTab && Main.buttonBehavior("tab" + f[0], !1, Math.floor(a.x + ja), Math.floor(a.y), 50, 23, function (a) {
                    return function () {
                        b.set_scavengerSelectedTab(y[a[0]]);
                    };
                }(f), !1);
                m.floatRight || (d += 51);
            }
            -1 == y.indexOf(this.scavengerSelectedTab) && this.set_scavengerSelectedTab("info");
            switch (this.scavengerSelectedTab) {
            case "chat":
                this.unreadChats = 0;
                null == this.scavengerConsole && (this.scavengerConsole = new Console(this.scene, !1, 0));
                this.scavengerConsole.renderHistory(new lemongine.Point(a.x + 5, a.get_bottom() - 25), a.width - 10 + 2 | 0, Math.floor((a.height - 23 - 25) / 15));
                h = this.blackBoxWithRadius;
                x = new lemongine.Rectangle(a.x, a.get_bottom() - 20, a.width, 20);
                q = new lemongine.Rectangle(0, 24, 16, 8);
                r = new lemongine.Rectangle(6, 2, 4, 0);
                l = new haxe.ds.StringMap();
                la = lemongine.Mathz.repeatArray([1, 1, 1, .4], 6);
                l.h.color = la;
                h.add9Slice(x, q, r, 0, l);
                UI.textfield(this.topLayerUIEntity, "scavengerChatInput", this.chatInputValue, a.x + 4 | 0, a.get_bottom() - 20 - 1 | 0, a.width - 4 - 12 - 7 - 3 | 0, 1, function (a) {
                    b.chatInputValue = a;
                }, 128, "", "Enter chat message", !1, !1, null, !1, Fonts.get_basis33());
                UI.fields.h.scavengerChatInput.textField.setColor(lemongine.Color.white);
                UI.fields.h.scavengerChatInput.input.set_leftScrollPadding(1);
                this.scavengerTickSinceSwitchingSelectedTab == Main.Instance.tick && UI.fields.h.scavengerChatInput.input.set_focused(!0);
                h = this.topLayerUIEntity;
                x = new lemongine.Vector3(a.get_right() - 12 - 7, a.get_bottom() - 11 - 5);
                q = new lemongine.Point(88, 242);
                r = new lemongine.Point(12, 11);
                C = new lemongine.Point(12, 11);
                l = new haxe.ds.StringMap();
                la = lemongine.Mathz.repeatArray([1, 1, 1, "" == lemongine.Helpers.trim(this.chatInputValue) ? .5 : 1], 6);
                l.h.color = la;
                h.addQuad(x, q, r, !0, C, null, null, l);
                Main.buttonBehavior("scavengerChatSend", "" == lemongine.Helpers.trim(this.chatInputValue), a.get_right() - 12 - 7 - 3 | 0, a.get_bottom() - 20 | 0, 22, 20, function () {
                    "/whisper " == HxOverrides.substr(b.chatInputValue, 0, 9) || "/w " == HxOverrides.substr(b.chatInputValue, 0, 3) ? ScavengerManager.handleWhisper(HxOverrides.substr(b.chatInputValue, b.chatInputValue.indexOf(" ") + 1, null)) : ScavengerManager.packetToServer_sendChat(b.chatInputValue);
                    var a = UI.fields.h.scavengerChatInput.input;
                    b.chatInputValue = "";
                    a.set_text("");
                }, !1);
                UI.fields.h.scavengerChatInput.input.focused && 1 == Main.Instance.keyDown(13) && ("/whisper " == HxOverrides.substr(this.chatInputValue, 0, 9) || "/w " == HxOverrides.substr(this.chatInputValue, 0, 3) ? ScavengerManager.handleWhisper(HxOverrides.substr(this.chatInputValue, this.chatInputValue.indexOf(" ") + 1, null)) : ScavengerManager.packetToServer_sendChat(this.chatInputValue), h = UI.fields.h.scavengerChatInput.input, this.chatInputValue = "", h.set_text(""));
                break;
            case "info":
                this.text("How to Start", a.x + 19 | 0, a.y + 35 | 0, 2, lemongine.TextAlignment.LEFT, new lemongine.Color(-8600));
                this.text("Create a party and share the code with others.\nOr, enter an invite code from someone else.", a.x + 19 | 0, a.y + 58 | 0, 1, lemongine.TextAlignment.LEFT, lemongine.Color.white);
                this.text("How to Play", a.x + 19 | 0, a.y + 92 | 0, 2, lemongine.TextAlignment.LEFT, new lemongine.Color(-8600));
                this.text("You'll be given a list of items to collect.\nFind or create the items quickly to get the most points!\nThe player with the most points, wins!", a.x + 19 | 0, a.y + 115 | 0, 1, lemongine.TextAlignment.LEFT, lemongine.Color.white);
                break;
            case "leaderboard":
                l = 0 < this.lookingAtLeaderboard;
                h = this.lookingAtLeaderboard >= ScavengerManager.completeLeaderboards.length - 1 ? 3 : Main.buttonBehavior("leaderboardLeftButton", !1, a.get_right() - 50 - 30 - 7 | 0, a.y + 23 + 8 | 0, 7, 14, function () {
                    b.setLookingAtLeaderboard(b.lookingAtLeaderboard + 1);
                }, !1);
                this.buttonEntity.addQuad(new lemongine.Vector3(a.get_right() - 50 - 30 - 7, a.y + 23 + 8), new lemongine.Point(7 * h, 242), new lemongine.Point(7, 14));
                l = l ? Main.buttonBehavior("leaderboardRightButton", !1, a.get_right() - 50 + 30 | 0, a.y + 23 + 8 | 0, 7, 14, function () {
                    b.setLookingAtLeaderboard(b.lookingAtLeaderboard - 1);
                }, !1) : 3;
                this.buttonEntity.addQuad(new lemongine.Vector3(a.get_right() - 50 + 30, a.y + 23 + 8), new lemongine.Point(7 * l, 242), new lemongine.Point(7, 14), !0, null, null, lemongine.Geom.flippedQuadUVs);
                this.text(ScavengerManager.completeLeaderboards.length - this.lookingAtLeaderboard + " of " + ScavengerManager.completeLeaderboards.length, a.get_right() - 50, a.y + 23 + 11, 1, lemongine.TextAlignment.CENTER, null, null, "pageCount");
                x = ScavengerManager.completeLeaderboards[this.lookingAtLeaderboard];
                la = 0;
                this.scavengerLeaderboardSkinEntity.clearPool();
                this.scavengerLeaderboardUIEntity.clearPool();
                this.scavengerLeaderboardScrollScene.clear();
                l = Math.floor(Math.max(0, 29 * x.entries.length - this.scavengerLeaderboardScrollScene.get_height()));
                0 == Main.Instance.mouseDown() && new lemongine.Rectangle(a.x, a.y + 53, a.width, a.height - 53).containsPoint(Main.Instance.mouse) && (0 < Main.Instance.mouseWheelDelta ? this.scavengerLeaderboardScrollPosition = Math.floor(Math.max(0, this.scavengerLeaderboardScrollPosition - 8)) : 0 > Main.Instance.mouseWheelDelta && (this.scavengerLeaderboardScrollPosition = Math.floor(Math.min(l, this.scavengerLeaderboardScrollPosition + 8))));
                Main.buttonBehavior("leaderboardScrollThing", !1, a.x | 0, a.y + 53 | 0, a.width | 0, a.height - 53 | 0, null, !1);
                G.gt(Main.Instance.mouseDown(), 0) && "leaderboardScrollThing" == Main.Instance.getUIHover() && (1 == Main.Instance.mouseDown() && (this.scavengerLeaderboardMousePosition = Math.floor(this.scavengerLeaderboardScrollPosition + Main.Instance.mouse.y)), this.scavengerLeaderboardScrollPosition = Math.floor(lemongine.Mathz.clamp(0, l, this.scavengerLeaderboardMousePosition - Main.Instance.mouse.y)));
                h = this.scavengerLeaderboardScrollScene.get_height() / 2;
                this.scavengerLeaderboardScrollScene.camera.position.y = h + this.scavengerLeaderboardScrollPosition;
                l = 0;
                for (c = x.entries; l < c.length;) {
                    d = c[l];
                    ++l;
                    this.text(Std.string(la + 1), 18, 5 + 29 * la | 0, 2, lemongine.TextAlignment.CENTER, d.userID == ScavengerManager.userID ? new lemongine.Color(-16711819) : lemongine.Color.white, this.scavengerLeaderboardScrollScene, "leaderboardPlayerName" + la);
                    if (f = ScavengerManager.playerSkinsTexture.slotIDExists(d.userID)) m = ScavengerManager.getMember(d.userID), null != m && 1 > m.headRotation && (m.headRotation += 1 / Main.Instance.get_fps(), m.headRotation = Math.min(1, m.headRotation)), C = ScavengerManager.playerSkinsTexture.getTextureSlot(d.userID), ja = new lemongine.Rectangle(28, 3 + 29 * la | 0, 32, 18), h = this.scavengerLeaderboardSkinEntity, x = new lemongine.Point(C.rect.x + d.mobHeadRect.x, C.rect.y + d.mobHeadRect.y), q = new lemongine.Point(16, 9), r = new lemongine.Rectangle(0, 0, ja.width, ja.height), C = null == m ? 0 : 2 * lemongine.Mathz.interpolateSmootherstep(m.headRotation) * Math.PI, h.addQuad(null, x, q, !0, null, lemongine.Geom.quadMatrixHelper(r, new lemongine.Matrix4().translate(-16, -11).rotate2D(C).translate(16, 11).translate(ja.x, ja.y))), null != m && ScavengerManager.userID == m.id && 1 == m.headRotation && 1 == Main.Instance.mouseDown() && new lemongine.Rectangle(a.x, a.y + 52, a.width, a.height - 52).containsPoint(Main.Instance.mouse) && ja.clone().translate(a.x, a.y + 52 - this.scavengerLeaderboardScrollPosition).containsPoint(Main.Instance.mouse) && ScavengerManager.packetToServer_headSpin();
                    h = d.username;
                    x = d.userID == ScavengerManager.userID ? new lemongine.Color(-16711819) : lemongine.Color.white;
                    x = this.text(h, f ? 62 : 30, 3 + 29 * la | 0, 1, lemongine.TextAlignment.LEFT, x, this.scavengerLeaderboardScrollScene, "leaderboardMenuPlayerName" + d.userID);
                    h = x.mask;
                    x.set_mask((null != h ? h : new lemongine.Rectangle()).set(0, 0, 157 - (f ? 62 : 30), x.calculatedHeight));
                    d.hasPlus && this.scavengerLeaderboardUIEntity.addQuad(new lemongine.Vector3((f ? 62 : 30) + 1 + Math.min(157 - (f ? 62 : 30), x.calculatedWidth), (3 + 29 * la | 0) - 1, 0), new lemongine.Point(60, 236), new lemongine.Point(5, 5));
                    this.text(d.score + " points", f ? 62 : 30, 14 + 29 * la | 0, 1, lemongine.TextAlignment.LEFT, new lemongine.Color(-8600), this.scavengerLeaderboardScrollScene);
                    ++la;
                    if (12 <= la) return;
                }
                l = 0;
                for (c = this.scavengerLeaderboardItems; l < c.length;) c[l++].render();
                this.scavengerLeaderboardSkinEntity.resetUnusedQuads();
                this.scavengerLeaderboardUIEntity.resetUnusedQuads();
                this.scavengerLeaderboardScrollScene.draw(this.scavengerLeaderboardItemsEntity);
                this.scavengerLeaderboardScrollScene.draw(this.scavengerLeaderboardSkinEntity);
                this.scavengerLeaderboardScrollScene.draw(this.scavengerLeaderboardUIEntity);
                this.scavengerLeaderboardScrollScene.render();
                this.scavengerLeaderboardScrollEntity.transform.reset().scale(1, -1, 0).translate(a.x + a.width / 2, a.y + Math.floor((a.height - 52) / 2) + 52);
                this.scene.draw(this.scavengerLeaderboardScrollEntity);
                break;
            case "players":
                la = 0;
                null != this.scavengerLeaderboardSkinEntity && this.scavengerLeaderboardSkinEntity.clearPool();
                l = 0;
                for (c = ScavengerManager.members; l < c.length;) m = [c[l]], ++l, q = a.x + 10 + 159 * Math.floor(la / 6) | 0, r = a.y + 30 + la % 6 * 19 | 0, la + 6 < ScavengerManager.members.length && 6 > la ? (h = this.text(m[0].username, q + 33, r + 8, 1, lemongine.TextAlignment.LEFT, 1 == m[0].isSpectator ? m[0].id == ScavengerManager.userID ? new lemongine.Color(2130771829) : new lemongine.Color(2147483647) : m[0].id == ScavengerManager.userID ? new lemongine.Color(-16711819) : lemongine.Color.white, null, "playerListPlayer" + la), m[0].hasPlus && this.topLayerUIEntity.addQuad(new lemongine.Vector3(q + 33 + h.calculatedWidth, r + 8 - 1, 0), new lemongine.Point(60, 236), new lemongine.Point(5, 5))) : (x = this.text(m[0].username, q + 33, r + 8, 1, lemongine.TextAlignment.LEFT, 1 == m[0].isSpectator ? m[0].id == ScavengerManager.userID ? new lemongine.Color(2130771829) : new lemongine.Color(2147483647) : m[0].id == ScavengerManager.userID ? new lemongine.Color(-16711819) : lemongine.Color.white, null, "playerListPlayerMasked" + la), h = x.mask, x.set_mask((null != h ? h : new lemongine.Rectangle()).set(0, 0, 126, x.calculatedHeight)), m[0].hasPlus && this.topLayerUIEntity.addQuad(new lemongine.Vector3(q + 33 + Math.min(126, x.calculatedWidth), r + 8 - 1, 0), new lemongine.Point(60, 236), new lemongine.Point(5, 5))), C = ScavengerManager.playerSkinsTexture.getTextureSlot(m[0].id, m[0].skin), 1 > m[0].headRotation && (x = m[0].headRotation + 1 / Main.Instance.get_fps(), m[0].headRotation = Math.min(1, x)), ja = new lemongine.Rectangle(q, r, 32, 18), null != this.scavengerLeaderboardSkinEntity && this.scavengerLeaderboardSkinEntity.addQuad(null, new lemongine.Point(C.rect.x + m[0].mobHeadRect.x, C.rect.y + m[0].mobHeadRect.y), new lemongine.Point(16, 9), !0, null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, ja.width, ja.height), new lemongine.Matrix4().translate(-16, -11).rotate2D(2 * lemongine.Mathz.interpolateSmootherstep(m[0].headRotation) * Math.PI).translate(16, 11).translate(ja.x, ja.y))), ScavengerManager.userID == m[0].id && 1 == m[0].headRotation && 1 == Main.Instance.mouseDown() && ja.containsPoint(Main.Instance.mouse) && ScavengerManager.packetToServer_headSpin(), m[0].id == ScavengerManager.host ? this.topLayerUIEntity.addQuad(new lemongine.Vector3(q + 12, r - 4, 0), new lemongine.Point(57, 223), new lemongine.Point(9, 5)) : ScavengerManager.isHost && UI.rightClickMenu("scavengerMemberMenu", ["Kick " + m[0].username], -1, q, r, 150, 19, function (a) {
                    return function (b, c) {
                        Main.Instance.confirmationDialog.open(new ConfirmationDialogData("Kick " + a[0].username + "?", "Are you sure you want to remove " + a[0].username + " from this party?\n\nThey will not be able to rejoin.", "Kick", function (a) {
                            return function () {
                                ScavengerManager.packetToServer_kickMember(a[0]);
                            };
                        }(a), "Cancel"));
                    };
                }(m)), ++la;
                null != this.scavengerLeaderboardSkinEntity && (this.scavengerLeaderboardSkinEntity.resetUnusedQuads(), this.scene.draw(this.scavengerLeaderboardSkinEntity));
                break;
            case "plus":
                switch (this.scavengerPlusPage) {
                case "buy":
                    this.text("Get Mine Blocks Plus for yourself or your friends!", a.x + 15, a.y + 38, 1, lemongine.TextAlignment.LEFT, null, null, "buyMBTitle");
                    l = this.text("Gift codes are emailed to you.\n\nFeel free to claim multiple codes per account - it will extend the subscription duration.", a.x + 15, a.y + 60, 1, lemongine.TextAlignment.LEFT, Colors.palette.greyB, null, "buyMBBody");
                    l.setWordWrap(177);
                    h = new lemongine.Rectangle(a.get_right() - 15 - 122, a.y + 60, 122, 32);
                    c = Main.buttonBehavior("buy1Month", this.openPatreonDebounce, h.x | 0, h.y | 0, h.width | 0, h.height | 0, function () {
                        lemongine.Web.open(ScavengerManager.paymentLink1Month);
                        b.openPatreonDebounce = !0;
                        haxe.Timer.delay(function () {
                            b.set_scavengerPlusPage("key");
                            b.openPatreonDebounce = !1;
                        }, 1E3);
                    }, !0);
                    0 < c && (Main.Instance.cursor = lime.ui.MouseCursor.POINTER);
                    this.buttonEntity.add9Slice(h, new lemongine.Rectangle(175 + 8 * c, 231, 8, 9), new lemongine.Rectangle(4, 4, 1, 1), 0, null, 2);
                    this.text("1 month", h.x + 10, h.y + 10 + (2 == c ? 2 : 0), 1, lemongine.TextAlignment.LEFT, lemongine.Color.black, null, "buy1Month");
                    l = "";
                    0 != ScavengerManager.paymentPrice1Month % 1 && (l = Std.string(Math.round(ScavengerManager.paymentPrice1Month % 1 * 100) / 100), l = HxOverrides.substr(l, l.lastIndexOf("."), null), 2 == l.length && (l += "0"));
                    l = this.text(l, h.get_right() - 10, h.y + 5 + (2 == c ? 2 : 0), 1, lemongine.TextAlignment.RIGHT, lemongine.Color.black, null, "buy1MonthCents");
                    this.text("$" + Math.floor(ScavengerManager.paymentPrice1Month), h.get_right() - 10 - l.calculatedWidth, h.y + 5 + (2 == c ? 2 : 0), 2, lemongine.TextAlignment.RIGHT, lemongine.Color.black, null, "buy1MonthDollars");
                    "" != ScavengerManager.paymentLink12Months && (h = new lemongine.Rectangle(a.get_right() - 15 - 122, h.get_bottom() + 4, 122, 32), c = Main.buttonBehavior("buy12Months", this.openPatreonDebounce, h.x | 0, h.y | 0, h.width | 0, h.height | 0, function () {
                        lemongine.Web.open(ScavengerManager.paymentLink12Months);
                        b.openPatreonDebounce = !0;
                        haxe.Timer.delay(function () {
                            b.set_scavengerPlusPage("key");
                            b.openPatreonDebounce = !1;
                        }, 1E3);
                    }, !0), 0 < c && (Main.Instance.cursor = lime.ui.MouseCursor.POINTER), this.buttonEntity.add9Slice(h, new lemongine.Rectangle(175 + 8 * c, 231, 8, 9), new lemongine.Rectangle(4, 4, 1, 1), 0, null, 2), this.text("12 months", h.x + 10, h.y + 10 + (2 == c ? 2 : 0), 1, lemongine.TextAlignment.LEFT, lemongine.Color.black, null, "buy12Months"), l = "", 0 != ScavengerManager.paymentPrice12Months % 1 && (l = Std.string(ScavengerManager.paymentPrice12Months % 1), l = HxOverrides.substr(l, l.lastIndexOf("."), null), 2 == l.length && (l += "0")), l = this.text(l, h.get_right() - 10, h.y + 5 + (2 == c ? 2 : 0), 1, lemongine.TextAlignment.RIGHT, lemongine.Color.black, null, "buy12MonthsCents"), this.text("$" + Math.floor(ScavengerManager.paymentPrice12Months), h.get_right() - 10 - l.calculatedWidth, h.y + 5 + (2 == c ? 2 : 0), 2, lemongine.TextAlignment.RIGHT, lemongine.Color.black, null, "buy12MonthsDollars"), l = Math.round(100 * (12 * ScavengerManager.paymentPrice1Month - ScavengerManager.paymentPrice12Months)) / 100, x = null == l ? "null" : "" + l, 0 != l % 1 && 2 == HxOverrides.substr(x, x.lastIndexOf("."), null).length && (x += "0"), 1 < l && this.text("(Save $" + x + "!)", h.get_centerX(), h.get_bottom() + 4, 1, lemongine.TextAlignment.CENTER, new lemongine.Color(-16711819), null, "saveAmount"));
                    l = Main.addSimpleButtonBetter("scavengerBuyBack", this.buttonEntity, a.x + 14 | 0, a.y + 122 | 0, 60, 20, 1.77, function () {
                        b.set_scavengerPlusPage(b.scavengerPlusPagePrevious);
                    }) ? TextCache.get("scavengerBuyBack", "Back", new lemongine.Point(a.x + 14 + 30 + 1 + 1.77, a.y + 122 + 10 + 1 + 1.77), Fonts.get_volter(), lemongine.Color.white, 1.3333333333333333, lemongine.TextAlignment.CENTER) : TextCache.get("scavengerBuyBack", "Back", new lemongine.Point(a.x + 14 + 30 + 1, a.y + 122 + 10 + 1), Fonts.get_volter(), lemongine.Color.white, 1.3333333333333333, lemongine.TextAlignment.CENTER);
                    l.layer = 2;
                    this.scene.draw(l);
                    break;
                case "claim":
                    this.text("Enter your email to claim the Mine Blocks Plus key:", a.x + 20, a.y + 45, 1, lemongine.TextAlignment.LEFT, null, null, "claimEnterEmail");
                    UI.textfield(this.buttonEntity, "emailClaim", this.scavengerEmailEntry, a.x + 20 | 0, a.y + 65 | 0, a.width - 40 | 0, 2, function (a) {
                        b.scavengerEmailEntry = a;
                    }, 100, "", "your@email.address", !1, !1, function (a) {
                        return a.split(" ").join("");
                    });
                    this.scavengerPlusPageFirstFrame && (UI.fields.h.emailClaim.input.set_focused(!0), this.scavengerPlusPageFirstFrame = !1);
                    l = Main.addSimpleButtonBetter("scavengerEmailClaimBack", this.buttonEntity, a.x + 167 | 0, a.y + 100 | 0, 60, 20, 1.77, function () {
                        b.set_scavengerPlusPage(b.scavengerPlusPagePrevious);
                    }) ? TextCache.get("scavengerEmailClaimBack", "Cancel", new lemongine.Point(a.x + 167 + 30 + 1 + 1.77, a.y + 100 + 10 + 1 + 1.77), Fonts.get_volter(), lemongine.Color.white, 1.3333333333333333, lemongine.TextAlignment.CENTER) : TextCache.get("scavengerEmailClaimBack", "Cancel", new lemongine.Point(a.x + 167 + 30 + 1, a.y + 100 + 10 + 1), Fonts.get_volter(), lemongine.Color.white, 1.3333333333333333, lemongine.TextAlignment.CENTER);
                    l.layer = 2;
                    this.scene.draw(l);
                    l = Main.addSimpleButtonBetter("scavengerEmailClaimSubmit", this.buttonEntity, a.get_right() - 20 - 76 | 0, a.y + 98 | 0, 76, 24, 1.77, F(this, this.scavengerEmailClaimSubmit), !(!this.scavengerAccountSubmitDebounce && 6 <= this.scavengerEmailEntry.length)) ? TextCache.get("scavengerKeyEntrySubmit", "Claim!", new lemongine.Point(a.get_right() - 20 - 76 + 40.77, a.y + 98 + 12 + 1 + 1.77), Fonts.get_volter(), lemongine.Color.white, 1.6666666666666667, lemongine.TextAlignment.CENTER) : TextCache.get("scavengerKeyEntrySubmit", "Claim!", new lemongine.Point(a.get_right() - 20 - 76 + 39, a.y + 98 + 12 + 1), Fonts.get_volter(), lemongine.Color.white, 1.6666666666666667, lemongine.TextAlignment.CENTER);
                    l.layer = 2;
                    this.scene.draw(l);
                    1 != Main.Instance.keyDown(13) || Main.Instance.confirmationDialog.visible || !this.scavengerAccountSubmitDebounce && 6 <= this.scavengerEmailEntry.length && this.scavengerEmailClaimSubmit();
                    this.text("Your email is used to log\nin, so check your spelling!", a.x + 20, a.y + 100, 1, lemongine.TextAlignment.LEFT, new lemongine.Color(-41984), null, "claimSpellingWarning");
                    l = this.text("Still stuck? Email me or message me on Patreon :)", a.x + 20, a.y + 132, 1, lemongine.TextAlignment.LEFT, null, null, "claimStillStuckLink");
                    c = Main.buttonBehavior("stillStuckLink", !1, a.x + 20 | 0, a.y + 132 | 0, l.calculatedWidth | 0, l.calculatedHeight | 0, function () {
                        lemongine.Web.open("https://zanzlanz.com/about");
                    }, !1);
                    0 < c && (Main.Instance.cursor = lime.ui.MouseCursor.POINTER);
                    l.setColor(new lemongine.Color(0 < c ? -3750202 : -7697782));
                    h = this.buttonEntity;
                    x = new lemongine.Vector3(a.x + 20, a.y + 132 + l.calculatedHeight);
                    q = new lemongine.Point(96, 0);
                    r = new lemongine.Point(1, 1);
                    C = new lemongine.Point(l.calculatedWidth, 1);
                    l = new haxe.ds.StringMap();
                    la = lemongine.Mathz.repeatArray([0, 0, 0, 1], 6);
                    l.h.color = la;
                    la = lemongine.Mathz.repeatArray(0 < c ? [.7764705882352941, .7764705882352941, .7764705882352941, 0] : [.5411764705882353, .5411764705882353, .5411764705882353, 0], 6);
                    l.h.colorOffset = la;
                    h.addQuad(x, q, r, !0, C, null, null, l);
                    break;
                case "connected":
                    l = "";
                    h = !0;
                    Plus.expires > new Date().getTime() / 1E3 + 31536E4 ? l = "Your access lasts a super long time :)" : Plus.subscriptionActive ? l = "Access renews: " + Language.dateString(Plus.subscriptionExpires) : Plus.expires > new Date().getTime() / 1E3 ? l = "Access expires: " + Language.dateString(Plus.expires) : (h = !1, this.text("Access expired " + Language.dateString(Plus.expires) + ".", a.x + 15, a.y + 61, 1, lemongine.TextAlignment.LEFT, new lemongine.Color(-41984), null, "connectedExpiresRed"));
                    h ? this.text("Your Mine Blocks Plus membership is active.\nThanks for supporting me and the game!", a.x + 15, a.y + 38, 1, lemongine.TextAlignment.LEFT, new lemongine.Color(-16711819), null, "connectedThanks") : this.text("Your Mine Blocks Plus membership expired.\nTry renewing your access on Patreon.", a.x + 15, a.y + 38, 1, lemongine.TextAlignment.LEFT, new lemongine.Color(-8600), null, "connectedThanks");
                    "" != l && this.text(l, a.x + 15, a.y + 61, 1, lemongine.TextAlignment.LEFT, new lemongine.Color(-8600), null, "connectedExpires");
                    this.text("No ads or wait times when you host a party!", a.x + 40, a.y + 86, 1, lemongine.TextAlignment.LEFT, null, null, "connectedBonus1");
                    this.text("Max players is 12 when you're hosting!", a.x + 40, a.y + 86 + 24, 1, lemongine.TextAlignment.LEFT, null, null, "connectedBonus2");
                    this.text("Craft dirt balls in Scavenger Hunt with 5 dirt blocks!", a.x + 40, a.y + 86 + 48, 1, lemongine.TextAlignment.LEFT, null, null, "connectedBonus3");
                    this.buttonEntity.addQuad(new lemongine.Vector3(a.x + 14, a.y + 82), new lemongine.Point(175, 222), new lemongine.Point(9, 9), !0, new lemongine.Point(18, 18));
                    this.buttonEntity.addQuad(new lemongine.Vector3(a.x + 14, a.y + 82 + 24), new lemongine.Point(184, 222), new lemongine.Point(9, 9), !0, new lemongine.Point(18, 18));
                    this.buttonEntity.addQuad(new lemongine.Vector3(a.x + 14, a.y + 82 + 48), new lemongine.Point(193, 222), new lemongine.Point(9, 9), !0, new lemongine.Point(18, 18));
                    l = UI.leftClickMenu("scavengerAccountMenu", ["Log out", "New passcode", "Buy gift code", "Redeem code"], -1, a.get_right() - 21 - 32 | 0, a.y + 40 | 0, 32, 32, function (a, c) {
                        switch (a) {
                        case 0:
                            GlobalSave.plusAccessToken = "";
                            GlobalSave.plusRefreshToken = "";
                            GlobalSave.save();
                            Plus.connected = !1;
                            b.set_scavengerPlusPage("main");
                            break;
                        case 1:
                            b.set_scavengerPlusPage("forgot");
                            break;
                        case 2:
                            b.set_scavengerPlusPage("buy");
                            break;
                        case 3:
                            b.set_scavengerPlusPage("key");
                        }
                    }, !1);
                    this.buttonEntity.addQuad(new lemongine.Vector3(a.get_right() - 21 - 32, a.y + 40), new lemongine.Point(46 + (0 == l ? 0 : 16), 112), new lemongine.Point(16, 16), !0, new lemongine.Point(32, 32));
                    break;
                case "forgot":
                    this.text("Enter the email associated with your Mine Blocks Plus\naccount to be sent a new passcode.", a.x + 20, a.y + 41, 1, lemongine.TextAlignment.LEFT, null, null, "forgotPrompt");
                    UI.textfield(this.buttonEntity, "forgotEmailEntry", this.scavengerEmailEntry, a.x + 84 | 0, a.y + 76 | 0, a.width - 84 - 52 | 0, 1, function (a) {
                        b.scavengerEmailEntry = a;
                    }, 100, "", "your@email.address", !this.scavengerEmailEntryVisible, !1, function (a) {
                        return a.split(" ").join("");
                    });
                    this.text("Email:", a.x + 28 + 49, a.y + 80, 1, lemongine.TextAlignment.RIGHT, null, null, "forgotEmailLabel");
                    h = this.buttonEntity;
                    x = a.get_right() - 32 - 13;
                    q = this.scavengerEmailEntryVisible ? 13 : 0;
                    h.addQuad(new lemongine.Vector3(x, a.y + 80), new lemongine.Point(22 + q, 234), new lemongine.Point(13, 7));
                    Main.buttonBehavior("scavengerEmailEntryVisible", !1, a.get_right() - 32 - 13 - 3 | 0, a.y + 80 - 3 | 0, 19, 13, function () {
                        b.scavengerEmailEntryVisible = !b.scavengerEmailEntryVisible;
                    }, !1);
                    this.scavengerPlusPageFirstFrame && (UI.fields.h.forgotEmailEntry.input.set_focused(!0), this.scavengerPlusPageFirstFrame = !1);
                    l = Main.addSimpleButtonBetter("scavengerForgotBack", this.buttonEntity, a.x + 24 | 0, a.y + 116 | 0, 60, 20, 1.77, function () {
                        b.set_scavengerPlusPage(b.scavengerPlusPagePrevious);
                    }) ? TextCache.get("scavengerForgotBack", "Cancel", new lemongine.Point(a.x + 24 + 30 + 1 + 1.77, a.y + 116 + 10 + 1 + 1.77), Fonts.get_volter(), lemongine.Color.white, 1.3333333333333333, lemongine.TextAlignment.CENTER) : TextCache.get("scavengerForgotBack", "Cancel", new lemongine.Point(a.x + 24 + 30 + 1, a.y + 116 + 10 + 1), Fonts.get_volter(), lemongine.Color.white, 1.3333333333333333, lemongine.TextAlignment.CENTER);
                    l.layer = 2;
                    this.scene.draw(l);
                    l = Main.addSimpleButtonBetter("scavengerForgotSubmit", this.buttonEntity, a.get_right() - 20 - 76 | 0, a.y + 114 | 0, 76, 24, 1.77, F(this, this.scavengerForgotSubmit), !(!this.scavengerAccountSubmitDebounce && 6 <= this.scavengerEmailEntry.length)) ? TextCache.get("scavengerForgotSubmit", "Submit", new lemongine.Point(a.get_right() - 20 - 76 + 40.77, a.y + 114 + 12 + 1 + 1.77), Fonts.get_volter(), lemongine.Color.white, 1.6666666666666667, lemongine.TextAlignment.CENTER) : TextCache.get("scavengerForgotSubmit", "Submit", new lemongine.Point(a.get_right() - 20 - 76 + 39, a.y + 114 + 12 + 1), Fonts.get_volter(), lemongine.Color.white, 1.6666666666666667, lemongine.TextAlignment.CENTER);
                    l.layer = 2;
                    this.scene.draw(l);
                    1 != Main.Instance.keyDown(13) || Main.Instance.confirmationDialog.visible || !this.scavengerAccountSubmitDebounce && 6 <= this.scavengerEmailEntry.length && this.scavengerForgotSubmit();
                    break;
                case "key":
                    this.text("Enter your Mine Blocks Plus key:", a.x + 20, a.y + 45, 1, lemongine.TextAlignment.LEFT, null, null, "keyEnterKey");
                    UI.textfield(this.buttonEntity, "scavengerKey", this.scavengerKeyEntry, a.x + 20 | 0, a.y + 61 | 0, a.width - 40 | 0, 2, function (a) {
                        b.scavengerKeyEntry.length == a.length + 1 && HxOverrides.substr(b.scavengerKeyEntry, 0, a.length) == a && 0 == b.scavengerKeyEntry.length % 5 && (a = HxOverrides.substr(a, 0, a.length - 1));
                        a = a.split("-").join("");
                        for (var c = 4; c <= a.length && !(a = HxOverrides.substr(a, 0, c) + "-" + HxOverrides.substr(a, c, null), c += 5, 15 < c););
                        UI.fields.h.scavengerKey.input.set_text(a);
                        b.scavengerKeyEntry = a;
                    }, 19, "a-zA-Z0-9\\-", "", !1, !1, function (a) {
                        return a = a.toUpperCase();
                    }, !0, Fonts.get_basis33());
                    h = UI.fields.h.scavengerKey;
                    h.input.set_leftScrollPadding(5);
                    this.scavengerPlusPageFirstFrame && (h.input.set_focused(!0), this.scavengerPlusPageFirstFrame = !1);
                    l = TextCache.get("scavengerKeyPlaceholder", "****-****-****-****", new lemongine.Point(a.x + 20 + 1 + 10, a.y + 2 + 61), Fonts.get_basis33(), new lemongine.Color(855638016), 2, lemongine.TextAlignment.LEFT, 1.5);
                    l.isTransparent = !0;
                    l.layer = 2;
                    l.set_mask(new lemongine.Rectangle(h.textField.calculatedWidth, 0, l.calculatedWidth, h.textField.calculatedHeight));
                    this.scene.draw(l);
                    l = Main.addSimpleButtonBetter("scavengerKeyEntryBack", this.buttonEntity, a.x + 20 | 0, a.y + 100 | 0, 60, 20, 1.77, function () {
                        Plus.connected ? b.set_scavengerPlusPage("connected") : b.set_scavengerPlusPage("main");
                    }) ? TextCache.get("scavengerKeyEntryBack", "Back", new lemongine.Point(a.x + 20 + 30 + 1 + 1.77, a.y + 100 + 10 + 1 + 1.77), Fonts.get_volter(), lemongine.Color.white, 1.3333333333333333, lemongine.TextAlignment.CENTER) : TextCache.get("scavengerKeyEntryBack", "Back", new lemongine.Point(a.x + 20 + 30 + 1, a.y + 100 + 10 + 1), Fonts.get_volter(), lemongine.Color.white, 1.3333333333333333, lemongine.TextAlignment.CENTER);
                    l.layer = 2;
                    this.scene.draw(l);
                    l = Main.addSimpleButtonBetter("scavengerKeyEntrySubmit", this.buttonEntity, a.get_right() - 20 - 76 | 0, a.y + 98 | 0, 76, 24, 1.77, F(this, this.scavengerKeyEntrySubmit), !(!this.scavengerAccountSubmitDebounce && 19 == this.scavengerKeyEntry.length)) ? TextCache.get("scavengerKeyEntrySubmit", "Submit", new lemongine.Point(a.get_right() - 20 - 76 + 40.77, a.y + 98 + 12 + 1 + 1.77), Fonts.get_volter(), lemongine.Color.white, 1.6666666666666667, lemongine.TextAlignment.CENTER) : TextCache.get("scavengerKeyEntrySubmit", "Submit", new lemongine.Point(a.get_right() - 20 - 76 + 39, a.y + 98 + 12 + 1), Fonts.get_volter(), lemongine.Color.white, 1.6666666666666667, lemongine.TextAlignment.CENTER);
                    l.layer = 2;
                    this.scene.draw(l);
                    1 != Main.Instance.keyDown(13) || Main.Instance.confirmationDialog.visible || this.scavengerAccountSubmitDebounce || 19 != this.scavengerKeyEntry.length || this.scavengerKeyEntrySubmit();
                    Plus.connected || (l = this.text("Log in with email and passcode instead", a.x + 20, a.y + 132, 1, lemongine.TextAlignment.LEFT, null, null, "keyLoginInstead"), c = Main.buttonBehavior("loginInsteadLink", !1, a.x + 20 | 0, a.y + 132 | 0, l.calculatedWidth | 0, l.calculatedHeight | 0, function () {
                        b.set_scavengerPlusPage("passcode");
                    }, !1), 0 < c && (Main.Instance.cursor = lime.ui.MouseCursor.POINTER), l.setColor(new lemongine.Color(0 < c ? -3909 : -8600)), h = this.buttonEntity, x = new lemongine.Vector3(a.x + 20, a.y + 132 + l.calculatedHeight), q = new lemongine.Point(96, 0), r = new lemongine.Point(1, 1), C = new lemongine.Point(l.calculatedWidth, 1), l = new haxe.ds.StringMap(), la = lemongine.Mathz.repeatArray([0, 0, 0, 1], 6), l.h.color = la, la = lemongine.Mathz.repeatArray(0 < c ? [1, .9411764705882353, .7333333333333333, 0] : [1, .8705882352941177, .40784313725490196, 0], 6), l.h.colorOffset = la, h.addQuad(x, q, r, !0, C, null, null, l));
                    break;
                case "passcode":
                    this.text("Enter your Mine Blocks Plus email and passcode:", a.x + 20, a.y + 41, 1, lemongine.TextAlignment.LEFT, null, null, "passcodePrompt");
                    UI.textfield(this.buttonEntity, "passcodeEmailEntry", this.scavengerEmailEntry, a.x + 84 | 0, a.y + 66 | 0, a.width - 84 - 52 | 0, 1, function (a) {
                        b.scavengerEmailEntry = a;
                    }, 100, "", "your@email.address", !this.scavengerEmailEntryVisible, !1, function (a) {
                        return a.split(" ").join("");
                    });
                    this.text("Email:", a.x + 28 + 49, a.y + 70, 1, lemongine.TextAlignment.RIGHT, null, null, "passcodeEmailLabel");
                    h = this.buttonEntity;
                    x = a.get_right() - 32 - 13;
                    q = this.scavengerEmailEntryVisible ? 13 : 0;
                    h.addQuad(new lemongine.Vector3(x, a.y + 70), new lemongine.Point(22 + q, 234), new lemongine.Point(13, 7));
                    Main.buttonBehavior("scavengerEmailEntryVisible", !1, a.get_right() - 32 - 13 - 3 | 0, a.y + 70 - 3 | 0, 19, 13, function () {
                        b.scavengerEmailEntryVisible = !b.scavengerEmailEntryVisible;
                    }, !1);
                    this.scavengerPlusPageFirstFrame && (UI.fields.h.passcodeEmailEntry.input.set_focused(!0), this.scavengerPlusPageFirstFrame = !1);
                    UI.textfield(this.buttonEntity, "passcodePasscodeEntry", this.scavengerPasscodeEntry, a.x + 84 | 0, a.y + 66 + 18 | 0, a.width - 84 - 52 | 0, 1, function (a) {
                        b.scavengerPasscodeEntry = a;
                    }, 100, "", "Passcode", !this.scavengerPasscodeEntryVisible, !1, function (a) {
                        return a.split(" ").join("");
                    });
                    this.text("Passcode:", a.x + 28 + 49, a.y + 70 + 18, 1, lemongine.TextAlignment.RIGHT, null, null, "passcodePasscodeLabel");
                    h = this.buttonEntity;
                    x = a.get_right() - 32 - 13;
                    q = this.scavengerPasscodeEntryVisible ? 13 : 0;
                    h.addQuad(new lemongine.Vector3(x, a.y + 70 + 18), new lemongine.Point(22 + q, 234), new lemongine.Point(13, 7));
                    Main.buttonBehavior("scavengerPasscodeEntryVisible", !1, a.get_right() - 32 - 13 - 3 | 0, a.y + 70 + 18 - 3 | 0, 19, 13, function () {
                        b.scavengerPasscodeEntryVisible = !b.scavengerPasscodeEntryVisible;
                    }, !1);
                    1 == Main.Instance.keyDown(9) && (Main.Instance.keyPreventDefault(), lemongine.InputField.focus == UI.fields.h.passcodeEmailEntry.input ? UI.fields.h.passcodePasscodeEntry.input.set_focused(!0) : lemongine.InputField.focus == UI.fields.h.passcodePasscodeEntry.input && UI.fields.h.passcodeEmailEntry.input.set_focused(!0));
                    l = this.text("I lost my code", a.x + 20, a.y + 120, 1, lemongine.TextAlignment.LEFT, null, null, "passcodeLostCode");
                    c = Main.buttonBehavior("passcodeLostCode", !1, a.x + 20 | 0, a.y + 120 | 0, l.calculatedWidth | 0, l.calculatedHeight | 0, function () {
                        b.set_scavengerPlusPage("forgot");
                    }, !1);
                    0 < c && (Main.Instance.cursor = lime.ui.MouseCursor.POINTER);
                    l.setColor(new lemongine.Color(0 < c ? -3909 : -8600));
                    h = this.buttonEntity;
                    x = new lemongine.Vector3(a.x + 20, a.y + 120 + l.calculatedHeight);
                    q = new lemongine.Point(96, 0);
                    r = new lemongine.Point(1, 1);
                    C = new lemongine.Point(l.calculatedWidth, 1);
                    l = new haxe.ds.StringMap();
                    la = lemongine.Mathz.repeatArray([0, 0, 0, 1], 6);
                    l.h.color = la;
                    la = lemongine.Mathz.repeatArray(0 < c ? [1, .9411764705882353, .7333333333333333, 0] : [1, .8705882352941177, .40784313725490196, 0], 6);
                    l.h.colorOffset = la;
                    h.addQuad(x, q, r, !0, C, null, null, l);
                    l = Main.addSimpleButtonBetter("scavengerPasscodeEntryBack", this.buttonEntity, a.x + 167 | 0, a.y + 116 | 0, 60, 20, 1.77, function () {
                        b.set_scavengerPlusPage(b.scavengerPlusPagePrevious);
                    }) ? TextCache.get("scavengerPasscodeEntryBack", "Cancel", new lemongine.Point(a.x + 167 + 30 + 1 + 1.77, a.y + 116 + 10 + 1 + 1.77), Fonts.get_volter(), lemongine.Color.white, 1.3333333333333333, lemongine.TextAlignment.CENTER) : TextCache.get("scavengerPasscodeEntryBack", "Cancel", new lemongine.Point(a.x + 167 + 30 + 1, a.y + 116 + 10 + 1), Fonts.get_volter(), lemongine.Color.white, 1.3333333333333333, lemongine.TextAlignment.CENTER);
                    l.layer = 2;
                    this.scene.draw(l);
                    l = Main.addSimpleButtonBetter("scavengerPasscodeEntrySubmit", this.buttonEntity, a.get_right() - 20 - 76 | 0, a.y + 114 | 0, 76, 24, 1.77, F(this, this.scavengerPasscodeEntrySubmit), !(!this.scavengerAccountSubmitDebounce && 6 <= this.scavengerEmailEntry.length && 10 <= this.scavengerPasscodeEntry.length)) ? TextCache.get("scavengerKeyEntrySubmit", "Log in", new lemongine.Point(a.get_right() - 20 - 76 + 40.77, a.y + 114 + 12 + 1 + 1.77), Fonts.get_volter(), lemongine.Color.white, 1.6666666666666667, lemongine.TextAlignment.CENTER) : TextCache.get("scavengerKeyEntrySubmit", "Log in", new lemongine.Point(a.get_right() - 20 - 76 + 39, a.y + 114 + 12 + 1), Fonts.get_volter(), lemongine.Color.white, 1.6666666666666667, lemongine.TextAlignment.CENTER);
                    l.layer = 2;
                    this.scene.draw(l);
                    1 != Main.Instance.keyDown(13) || Main.Instance.confirmationDialog.visible || !this.scavengerAccountSubmitDebounce && 6 <= this.scavengerEmailEntry.length && 10 <= this.scavengerPasscodeEntry.length && this.scavengerPasscodeEntrySubmit();
                    break;
                default:
                    this.text("Support me and Mine Blocks, and get neat bonuses:", a.get_centerX(), a.y + 44, 1, lemongine.TextAlignment.CENTER, new lemongine.Color(-8600), null, "mainHead"), this.text("Remove wait-time and ads!", a.x + 40, a.y + 76, 1, lemongine.TextAlignment.LEFT, null, null, "mainBonus1"), this.text("Double max players to 12!", a.x + 40, a.y + 76 + 24, 1, lemongine.TextAlignment.LEFT, null, null, "mainBonus2"), this.text("Dirt ball :)", a.x + 40, a.y + 76 + 48, 1, lemongine.TextAlignment.LEFT, null, null, "mainBonus3"), this.buttonEntity.addQuad(new lemongine.Vector3(a.x + 14, a.y + 72), new lemongine.Point(175, 222), new lemongine.Point(9, 9), !0, new lemongine.Point(18, 18)), this.buttonEntity.addQuad(new lemongine.Vector3(a.x + 14, a.y + 72 + 24), new lemongine.Point(184, 222), new lemongine.Point(9, 9), !0, new lemongine.Point(18, 18)), this.buttonEntity.addQuad(new lemongine.Vector3(a.x + 14, a.y + 72 + 48), new lemongine.Point(193, 222), new lemongine.Point(9, 9), !0, new lemongine.Point(18, 18)), h = new lemongine.Rectangle(a.x + 197, a.y + 68, 122, 32), c = Main.buttonBehavior("openPatreon", this.openPatreonDebounce, h.x | 0, h.y | 0, h.width | 0, h.height | 0, function () {
                        lemongine.Web.open("https://mineblocks.com/patreon");
                        b.openPatreonDebounce = !0;
                        haxe.Timer.delay(function () {
                            b.set_scavengerPlusPage("passcode");
                            b.openPatreonDebounce = !1;
                        }, 1E3);
                    }, !0), 0 < c && (Main.Instance.cursor = lime.ui.MouseCursor.POINTER), this.buttonEntity.add9Slice(h, new lemongine.Rectangle(175 + 8 * c, 231, 8, 9), new lemongine.Rectangle(4, 4, 1, 1), 0, null, 2), l = this.text("Join on Patreon", h.get_centerX() + 7 + 3, h.y + 10 + (2 == c ? 2 : 0), 1, lemongine.TextAlignment.CENTER, lemongine.Color.black, null, "mainJoinOnPatreon"), this.buttonEntity.addQuad(new lemongine.Vector3(Math.floor(h.get_centerX() - l.calculatedWidth / 2 - 7 - 3), h.y + 6 + (2 == c ? 2 : 0)), new lemongine.Point(156, 238), new lemongine.Point(14, 16)), "" != ScavengerManager.paymentLink1Month && (this.text("or", h.get_centerX() - 30, h.get_bottom() + 7, 1, lemongine.TextAlignment.LEFT, lemongine.Color.white, null, "orBuy"), h.set(h.get_centerX() - 12, h.get_bottom() + 3, 45, 18), c = Main.buttonBehavior("gotoBuyPage", !1, h.x | 0, h.y | 0, h.width | 0, h.height | 0, function () {
                        b.set_scavengerPlusPage("buy");
                    }, !0), 0 < c && (Main.Instance.cursor = lime.ui.MouseCursor.POINTER), this.buttonEntity.add9Slice(h, new lemongine.Rectangle(175 + 8 * c, 231, 8, 9), new lemongine.Rectangle(4, 4, 1, 1), 0, null, 1), l = this.text("Buy", h.get_centerX() + 4.5 + 2, h.y + 4 + (2 == c ? 1 : 0), 1, lemongine.TextAlignment.CENTER, lemongine.Color.black, null, "mainBuy"), this.buttonEntity.addQuad(new lemongine.Vector3(Math.floor(h.get_centerX() - l.calculatedWidth / 2 - 4.5 - 2), h.y + 4 + (2 == c ? 1 : 0)), new lemongine.Point(202, 222), new lemongine.Point(9, 9))), l = this.text("Enter code or log in", a.x + 258, a.y + 132, 1, lemongine.TextAlignment.CENTER, lemongine.Color.white, null, "mainEnterCode"), c = Main.buttonBehavior("enterPlusCode", !1, a.x + 258 - l.calculatedWidth / 2 | 0, a.y + 132 | 0, l.calculatedWidth | 0, l.calculatedHeight | 0, function () {
                        b.set_scavengerPlusPage("key");
                    }, !1), 0 < c && (Main.Instance.cursor = lime.ui.MouseCursor.POINTER), l.setColor(new lemongine.Color(0 < c ? -5111935 : -16711819)), h = this.buttonEntity, x = new lemongine.Vector3(a.x + 258 - l.calculatedWidth / 2, a.y + 132 + l.calculatedHeight), q = new lemongine.Point(96, 0), r = new lemongine.Point(1, 1), C = new lemongine.Point(l.calculatedWidth, 1), l = new haxe.ds.StringMap(), la = lemongine.Mathz.repeatArray([0, 0, 0, 1], 6), l.h.color = la, la = lemongine.Mathz.repeatArray(0 < c ? [.6941176470588235, 1, .5058823529411764, 0] : [0, 1, .4588235294117647, 0], 6), l.h.colorOffset = la, h.addQuad(x, q, r, !0, C, null, null, l);
                }
            }
            this.blackBoxWithRadius.resetUnusedQuads();
            this.scene.draw(this.blackBoxWithRadius);
        } else if (this.scavengerFrame == screens.ScavengerFrames.DISPLAY_NAME_CHANGE) {
            this.blackBoxWithRadius.add9Slice(new lemongine.Rectangle(this.scene.get_width() / 2 - 276 + 247, this.scene.get_height() / 2 - 207 + 212, 283, 106), new lemongine.Rectangle(0, 16, 16, 16), new lemongine.Rectangle(6, 6, 4, 4));
            this.blackBoxWithRadius.resetUnusedQuads();
            this.scene.draw(this.blackBoxWithRadius);
            -1 != ScavengerManager.getStartTime() && (0 >= ScavengerManager.getStartTime() - new Date().getTime() ? this.text("Starting...", this.scene.get_width() - 15, this.scene.get_height() / 2 - 207 + 110, 1, lemongine.TextAlignment.RIGHT, lemongine.Color.white, null, "cornerCountdown") : this.text("Starting in " + Language.shortCountdownString(Math.ceil(ScavengerManager.getSecondsUntilStartTime())), this.scene.get_width() - 15, this.scene.get_height() / 2 - 207 + 110, 1, lemongine.TextAlignment.RIGHT, lemongine.Color.white, null, "cornerCountdown"));
            l = Main.addSimpleButtonBetter("scavengerBack", this.buttonEntity, 12, this.scene.get_height() / 2 - 207 + 109 | 0, 70, 28, 1.77, function () {
                b.gotoScavengerFrame(screens.ScavengerFrames.LOBBY);
            }) ? TextCache.get("scavengerBack", "Back", new lemongine.Point(49.77, this.scene.get_height() / 2 - 207 + 125.77), Fonts.get_volter(), lemongine.Color.white, 1.6666666666666667, lemongine.TextAlignment.CENTER) : TextCache.get("scavengerBack", "Back", new lemongine.Point(48, this.scene.get_height() / 2 - 207 + 124), Fonts.get_volter(), lemongine.Color.white, 1.6666666666666667, lemongine.TextAlignment.CENTER);
            l.layer = 2;
            this.scene.draw(l);
            this.text("Display name:", this.scene.get_width() / 2 - 276 + 161, this.scene.get_height() / 2 - 207 + 169, 2, lemongine.TextAlignment.RIGHT, lemongine.Color.white);
            a = UI.textfield(this.buttonEntity, "displayName", this.scavengerNewUsername, this.scene.get_width() / 2 - 276 + 172 | 0, this.scene.get_height() / 2 - 207 + 166 | 0, 358, 2, function (a) {
                b.scavengerNewUsername = a;
            }, 24, "A-Za-z0-9 _\u00c4\u00e4\u00d6\u00f6\u00dc\u00fc\u00df\u00c1\u00e1\u00c9\u00e9\u00cd\u00ed\u00d3\u00f3\u00da\u00fa\u00c0\u00e0\u00c8\u00e8\u00cc\u00ec\u00d2\u00f2\u00d9\u00f9\u00e7\u00c7\u00c3\u00e3\u1ebc\u1ebd\u0128\u0129\u00d5\u00f5\u0168\u0169\u00c2\u00e2\u00ca\u00ea\u00ce\u00ee\u00d4\u00f4\u00db\u00fb\u0178\u00ff\u00d8\u00f8\u0152\u0153\u00d1\u00f1\u00cf\u00ef\u00cb\u00eb\u00c5\u00e5\u00c6\u00e6", this.scavengerDisplayPlaceholderUsername ? ScavengerManager.username : "");
            this.scavengerFirstUsernameFrame && (this.scavengerFirstUsernameFrame = !1, UI.fields.h.displayName.input.set_focused(!0));
            "" != this.scavengerNameErrorMessage && this.text(this.scavengerNameErrorMessage, this.scene.get_width() / 2 - 276 + 172, this.scene.get_height() / 2 - 207 + 194, 1, lemongine.TextAlignment.LEFT, new lemongine.Color(-4257));
            h = 3 <= lemongine.Helpers.trim(this.scavengerNewUsername).length && 24 >= lemongine.Helpers.trim(this.scavengerNewUsername).length;
            this.text("Your skin:", this.scene.get_width() / 2 - 276 + 161, this.scene.get_height() / 2 - 207 + 221, 2, lemongine.TextAlignment.RIGHT, lemongine.Color.white);
            this.mainSkinEntity.clearPool();
            this.skinPreviewEntity.clearPool();
            this.drawSkinViewer(this.mainSkinEntity, this.buttonEntity, new lemongine.Point(0, 0), Math.floor(this.scene.get_width() / 2 - 276 + 172), Math.floor(this.scene.get_height() / 2 - 207 + 220), 64);
            x = !1;
            for (l = 0; 4 > l;) c = l++, this.skinSearchManager.hasSkinAtIndex(c) && (x = !0, this.drawSkinViewer(this.skinPreviewEntity, this.buttonEntity, this.skinSearchManager.getSkinPositionByIndex(c), Math.floor(this.scene.get_width() / 2 - 276 + 257 + 56 * c), Math.floor(this.scene.get_height() / 2 - 207 + 242), 48, c));
            x || (this.skinSearchManager.loading ? this.text("Loading...", this.scene.get_width() / 2 - 276 + 368, this.scene.get_height() / 2 - 207 + 270, 1, lemongine.TextAlignment.CENTER, new lemongine.Color(-16711819)) : this.text("Sorry, no results.", this.scene.get_width() / 2 - 276 + 368, this.scene.get_height() / 2 - 207 + 270, 1, lemongine.TextAlignment.CENTER, new lemongine.Color(-41984)));
            this.mainSkinEntity.resetUnusedQuads();
            this.skinPreviewEntity.resetUnusedQuads();
            this.scene.draw(this.mainSkinEntity);
            this.scene.draw(this.skinPreviewEntity);
            x = this.skinSearchManager.category;
            UI.radio(this.buttonEntity, "skinCategory1", this.skinSearchManager.category, "featured", this.scene.get_width() / 2 - 276 + 258 | 0, this.scene.get_height() / 2 - 207 + 221 | 0, function () {
                b.skinSearchManager.category = "featured";
            }, !1, 72);
            l = TextCache.get("skinCategory1", "Featured", new lemongine.Point(this.scene.get_width() / 2 - 276 + 276, this.scene.get_height() / 2 - 207 + 223), Fonts.get_volter(), lemongine.Color.white, 1, lemongine.TextAlignment.LEFT, 1.5);
            l.layer = 2;
            this.scene.draw(l);
            UI.radio(this.buttonEntity, "skinCategory2", this.skinSearchManager.category, "new", this.scene.get_width() / 2 - 276 + 330 | 0, this.scene.get_height() / 2 - 207 + 221 | 0, function () {
                b.skinSearchManager.category = "new";
            }, !1, 47);
            l = TextCache.get("skinCategory2", "New", new lemongine.Point(this.scene.get_width() / 2 - 276 + 348, this.scene.get_height() / 2 - 207 + 223), Fonts.get_volter(), lemongine.Color.white, 1, lemongine.TextAlignment.LEFT, 1.5);
            l.layer = 2;
            this.scene.draw(l);
            UI.radio(this.buttonEntity, "skinCategory3", this.skinSearchManager.category, "best", this.scene.get_width() / 2 - 276 + 377 | 0, this.scene.get_height() / 2 - 207 + 221 | 0, function () {
                b.skinSearchManager.category = "best";
            }, !1, 38);
            l = TextCache.get("skinCategory3", "Best", new lemongine.Point(this.scene.get_width() / 2 - 276 + 395, this.scene.get_height() / 2 - 207 + 223), Fonts.get_volter(), lemongine.Color.white, 1, lemongine.TextAlignment.LEFT, 1.5);
            l.layer = 2;
            this.scene.draw(l);
            this.skinSearchManager.category != x && (this.skinSearchManager.page = 1, this.skinSearchManager.loadPublicSkins(null));
            x = UI.textfield(this.buttonEntity, "scavengerSkinSearch", this.searchEntry, this.scene.get_width() / 2 - 276 + 426 | 0, this.scene.get_height() / 2 - 207 + 220 | 0, 96, 1, function (a) {
                b.searchEntry = a;
                a = Main.Instance.get_fps() / 3;
                b.searchDebounceTimer = Math.floor(a);
            });
            "" == this.searchEntry && (l = TextCache.get("skinSearchPlaceholder", "Search", new lemongine.Point(this.scene.get_width() / 2 - 276 + 430, this.scene.get_height() / 2 - 207 + 224), Fonts.get_volter(), new lemongine.Color(-12303292), 1), l.layer = 2, this.scene.draw(l));
            if (lemongine.InputField.focus == x && 1 == Main.Instance.keyUp(13) || 0 < this.searchDebounceTimer && 0 == --this.searchDebounceTimer) "search" == this.skinSearchManager.category ? this.skinSearchManager.search != this.searchEntry && (this.skinSearchManager.search = this.searchEntry, this.skinSearchManager.page = 1, this.skinSearchManager.loadPublicSkins(null)) : (this.skinSearchManager.category = "search", this.skinSearchManager.search = this.searchEntry, this.skinSearchManager.page = 1, this.skinSearchManager.loadPublicSkins(null));
            l = Main.addSimpleButtonBetter("revertTemporarySkin", this.buttonEntity, this.scene.get_width() / 2 - 276 + 72 | 0, this.scene.get_height() / 2 - 207 + 247 | 0, 89, 18, 1, F(this, this.revertTemporarySkin), !this.skinCanBeReverted) ? TextCache.get("revertTemporarySkin", "Revert changes", new lemongine.Point(this.scene.get_width() / 2 - 276 + 118.5, this.scene.get_height() / 2 - 207 + 258), Fonts.get_volter(), lemongine.Color.white, 1, lemongine.TextAlignment.CENTER) : TextCache.get("revertTemporarySkin", "Revert changes", new lemongine.Point(this.scene.get_width() / 2 - 276 + 117.5, this.scene.get_height() / 2 - 207 + 257), Fonts.get_volter(), lemongine.Color.white, 1, lemongine.TextAlignment.CENTER);
            l.layer = 2;
            this.scene.draw(l);
            Main.addSimpleButtonBetter("sortRandom", this.buttonEntity, this.scene.get_width() / 2 - 276 + 479 | 0, this.scene.get_height() / 2 - 207 + 290 | 0, 43, 18, 1, function () {
                b.skinSearchManager.loadPublicSkins(null, !0);
            }) ? this.buttonEntity.addQuad(new lemongine.Vector3(Math.floor(this.scene.get_width() / 2 - 276 + 500.5 - 5.5) + 1, Math.floor(this.scene.get_height() / 2 - 207 + 299 - 6) + 1), new lemongine.Point(100, 242), new lemongine.Point(11, 12)) : this.buttonEntity.addQuad(new lemongine.Vector3(Math.floor(this.scene.get_width() / 2 - 276 + 500.5 - 5.5), Math.floor(this.scene.get_height() / 2 - 207 + 299 - 6)), new lemongine.Point(100, 242), new lemongine.Point(11, 12));
            this.text(0 == this.skinSearchManager.page ? "Pg. ??" : "Pg. " + this.skinSearchManager.page, this.scene.get_width() / 2 - 276 + 501, this.scene.get_height() / 2 - 207 + 270, 1, lemongine.TextAlignment.CENTER, lemongine.Color.white);
            Main.addSimpleButtonBetter("previousPage", this.buttonEntity, this.scene.get_width() / 2 - 276 + 479 | 0, this.scene.get_height() / 2 - 207 + 242 | 0, 21, 18, 1, function () {
                b.skinSearchManager.page--;
                b.skinSearchManager.loadPublicSkins(null);
            }, 1 >= this.skinSearchManager.page) ? this.buttonEntity.addQuad(new lemongine.Vector3(Math.floor(this.scene.get_width() / 2 - 276 + 489.5 - 7) + 1, Math.floor(this.scene.get_height() / 2 - 207 + 251 - 4.5) + 1), new lemongine.Point(111, 242), new lemongine.Point(14, 9), !0, null, null, lemongine.Geom.flippedQuadUVs) : this.buttonEntity.addQuad(new lemongine.Vector3(Math.floor(this.scene.get_width() / 2 - 276 + 489.5 - 7), Math.floor(this.scene.get_height() / 2 - 207 + 251 - 4.5)), new lemongine.Point(111, 242), new lemongine.Point(14, 9), !0, null, null, lemongine.Geom.flippedQuadUVs);
            Main.addSimpleButtonBetter("nextPage", this.buttonEntity, this.scene.get_width() / 2 - 276 + 501 | 0, this.scene.get_height() / 2 - 207 + 242 | 0, 21, 18, 1, function () {
                b.skinSearchManager.page++;
                b.skinSearchManager.loadPublicSkins(null);
            }, !this.skinSearchManager.hasMorePages) ? this.buttonEntity.addQuad(new lemongine.Vector3(Math.floor(this.scene.get_width() / 2 - 276 + 511.5 - 7) + 1, Math.floor(this.scene.get_height() / 2 - 207 + 251 - 4.5) + 1), new lemongine.Point(111, 242), new lemongine.Point(14, 9)) : this.buttonEntity.addQuad(new lemongine.Vector3(Math.floor(this.scene.get_width() / 2 - 276 + 511.5 - 7), Math.floor(this.scene.get_height() / 2 - 207 + 251 - 4.5)), new lemongine.Point(111, 242), new lemongine.Point(14, 9));
            l = Main.addSimpleButtonBetter("scavengerEnterLobby", this.buttonEntity, this.scene.get_width() / 2 - 276 + 366 | 0, this.scene.get_height() / 2 - 207 + 327 | 0, 164, 34, 1.77, F(this, this.submitUsername), !h) ? TextCache.get("scavengerEnterLobby", ScavengerManager.get_socketConnected() ? "Enter lobby" : "Save changes", new lemongine.Point(this.scene.get_width() / 2 - 276 + 450.77, this.scene.get_height() / 2 - 207 + 346.77), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER) : TextCache.get("scavengerEnterLobby", ScavengerManager.get_socketConnected() ? "Enter lobby" : "Save changes", new lemongine.Point(this.scene.get_width() / 2 - 276 + 449, this.scene.get_height() / 2 - 207 + 345), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER);
            l.layer = 2;
            this.scene.draw(l);
            lemongine.InputField.focus == a && h && 1 == Main.Instance.keyDown(13) && this.submitUsername();
        }
    },
    drawSkinViewer: function (b, a, c, d, f, g, h) {
        null == h && (h = -1);
        var l = this,
            m = g / Skin.frameSize.x * Skin.frameSize.y,
            p = g / 4 / Skin.frameSize.x * Skin.frameSize.y,
            x = g / 4 / Skin.frameSize.x * Skin.frameSize.y,
            t = g / 4 / Skin.frameSize.x * Skin.frameSize.y;
        a.addQuad(new lemongine.Vector3(d, f), new lemongine.Point(73, 176), new lemongine.Point(2, 2), !0, new lemongine.Point(g, m), null, [0, 0, 0, p, g / 4, 0, g / 4, 0, 0, x, g / 4, t]);
        a = Main.buttonBehavior("skinViewerAt" + d, !1, d, f, g, g / Skin.frameSize.x * Skin.frameSize.y | 0, function () {
            -1 != h && SkinLoader.getSkinFrom("https://mineblocks.com/1/skins/" + l.skinSearchManager.currentResults[h].id + ".png", l.temporarySkin, 0, function (a) {
                l.skinCanBeReverted = !0;
                l.mainSkinEntity.setTextureBuffer("texture", l.temporarySkin.skin);
                l.mainSkinEntity.setUniform("texSize", [l.temporarySkin.skin.width, l.temporarySkin.skin.height]);
            });
        }, !1);
        m = 0;
        2 == a ? m = 14 : 1 == a ? (this.animatingSkinAtX != d ? (this.animatingSkinFrame = 0, this.animatingSkinAtX = d) : this.animatingSkinFrame++, m = Math.floor(this.animatingSkinFrame / Main.Instance.get_fps() * 8 % 5 + 1), -1 < h && this.showBottomTooltip(this.skinSearchManager.currentResults[h].name, "By: " + this.skinSearchManager.currentResults[h].author, new lemongine.Point(d + g / 2, f + g / Skin.frameSize.x * Skin.frameSize.y))) : this.animatingSkinAtX == d && (m = this.animatingSkinAtX = 0);
        m = c.x + m * Skin.frameSize.x;
        p = g / Skin.frameSize.x * Skin.frameSize.y;
        b.addQuad(new lemongine.Vector3(d, f), new lemongine.Point(m, c.y), new lemongine.Point(16, 22), !0, new lemongine.Point(g, p), null, lemongine.Geom.flippedQuadUVs);
    },
    revertTemporarySkin: function () {
        SkinLoader.copySkinData(SkinLoader.frames, this.temporarySkin);
        this.skinCanBeReverted = !1;
    },
    submitUsername: function () {
        this.scavengerNameErrorMessage = "";
        this.skinCanBeReverted && (SkinLoader.copySkinData(this.temporarySkin, SkinLoader.frames), SkinLoader.saveSkinData(), this.mainSkinEntity.set_texture(SkinLoader.frames.skin), null != Main.Instance.game && Main.Instance.game.characterPool.setUniform("texSize2", [SkinLoader.frames.skin.width, SkinLoader.frames.skin.height]));
        ScavengerManager.get_socketConnected() ? ScavengerManager.packetToServer_changeDisplayName(this.scavengerNewUsername, this.skinCanBeReverted) : (ScavengerManager.username = GlobalSave.scavengerUsername = this.scavengerNewUsername, GlobalSave.save(), null != Main.Instance.mainMenu.scavengerDisplayNameCallback ? Main.Instance.mainMenu.scavengerDisplayNameCallback() : this.gotoScavengerFrame(screens.ScavengerFrames.LOBBY));
    },
    scavengerSubmitCreateParty: function () {
        var b = this;
        ScavengerManager.getScavengerServer("", function () {
            ScavengerManager.openSocket(function () {
                "" == ScavengerManager.username ? (b.scavengerDisplayNameCallback = function () {
                    b.scavengerDisplayNameCallback = null;
                    ScavengerManager.packetToServer_createParty();
                    b.set_scavengerSelectedTab("players");
                    b.gotoScavengerFrame(screens.ScavengerFrames.LOBBY);
                }, b.gotoScavengerFrame(screens.ScavengerFrames.DISPLAY_NAME_CHANGE)) : (ScavengerManager.packetToServer_createParty(), b.set_scavengerSelectedTab("players"));
            });
        });
    },
    scavengerSubmitJoinParty: function () {
        var b = this;
        ScavengerManager.getScavengerServer(this.scavengerTokenEntry, function () {
            ScavengerManager.openSocket(function () {
                ScavengerManager.joinPartyCallback = "" == ScavengerManager.username ? function () {
                    ScavengerManager.joinPartyCallback = null;
                    b.scavengerDisplayNameCallback = function () {
                        b.scavengerDisplayNameCallback = null;
                        ScavengerManager.joinPartyCallback = function () {
                            b.set_scavengerSelectedTab("players");
                        };
                        ScavengerManager.packetToServer_joinParty(b.scavengerTokenEntry);
                        b.gotoScavengerFrame(screens.ScavengerFrames.LOBBY);
                    };
                    b.gotoScavengerFrame(screens.ScavengerFrames.DISPLAY_NAME_CHANGE);
                } : function () {
                    b.set_scavengerSelectedTab("players");
                };
                ScavengerManager.packetToServer_joinParty(b.scavengerTokenEntry);
            });
        });
    },
    connectPlus: function () {
        var b = this;
        if ("" != GlobalSave.plusAccessToken) {
            this.scavengerAccountSubmitDebounce = !0;
            var a = new haxe.ds.StringMap();
            a.h.accessToken = GlobalSave.plusAccessToken;
            a.h.refreshToken = GlobalSave.plusRefreshToken;
            lemongine.Web.send("https://mineblocks.com/1/scripts/plus/login-session", !0, a, function (a) {
                b.scavengerAccountSubmitDebounce = !1;
                "1" != HxOverrides.substr(a, 0, 1) ? (Main.Instance.confirmationDialog.open(new ConfirmationDialogData("Couldn't Connect", "The Mine Blocks Plus session failed to connect.\nPlease try logging in again with your email and passcode to access Mine Blocks Plus features.", "Okay")), b.set_scavengerPlusPage("passcode"), GlobalSave.plusAccessToken = "", GlobalSave.plusRefreshToken = "", GlobalSave.save()) : (b.handlePlusLoginStateResponseString(HxOverrides.substr(a, 1, null)), b.set_scavengerPlusPage("connected"));
            }, function (a) {
                b.scavengerAccountSubmitDebounce = !1;
                Main.Instance.confirmationDialog.open(new ConfirmationDialogData("Session Expired", "Your Mine Blocks Plus session seems to have expired. Please log in again with your email and passcode if you want to access Mine Blocks Plus features.", "Okay"));
                b.set_scavengerPlusPage("passcode");
                GlobalSave.plusAccessToken = "";
                GlobalSave.plusRefreshToken = "";
                GlobalSave.save();
            });
        }
    },
    handlePlusLoginStateResponseString: function (b) {
        b = b.split(";");
        Plus.connected = !0;
        Plus.expires = Std.parseInt(b[0]);
        Plus.subscriptionExpires = Std.parseInt(b[1]);
        Plus.subscriptionActive = "1" == b[2];
        null != b[3] && (GlobalSave.plusAccessToken = b[3], null != b[4] && (GlobalSave.plusRefreshToken = b[4]), GlobalSave.save());
        ScavengerManager.packetToServer_connectPlus();
    },
    scavengerKeyEntrySubmit: function () {
        var b = this;
        this.scavengerAccountSubmitDebounce = !0;
        UI.resetFocus();
        var a = new haxe.ds.StringMap();
        a.h.code = this.scavengerKeyEntry;
        lemongine.Web.send("https://mineblocks.com/1/scripts/plus/check", !0, a, function (a) {
            b.scavengerAccountSubmitDebounce = !1;
            "1" == HxOverrides.substr(a, 0, 1) ? Plus.connected ? b.scavengerEmailClaimSubmit() : b.set_scavengerPlusPage("claim") : Main.Instance.confirmationDialog.open(new ConfirmationDialogData("Key Not Valid", "Sorry, looks like that key is not available, or was already claimed.\nDouble check that you wrote it correctly.", "Okay"));
        }, function (a) {
            b.scavengerAccountSubmitDebounce = !1;
            Main.Instance.confirmationDialog.open(new ConfirmationDialogData("Couldn't Check Key", "Something went wrong while checking your key. You might not have a connection to the Mine Blocks key server. Please try again later.", "Okay"));
        });
    },
    scavengerEmailClaimSubmit: function () {
        Plus.connected ? this.scavengerEmailClaimSubmitConfirmed() : Main.Instance.confirmationDialog.open(new ConfirmationDialogData("Confirm Email", "Login information will be emailed to you, so make sure you spelled your address correctly:\n\n" + this.scavengerEmailEntry + "\n\nAll good?", "It's correct!", F(this, this.scavengerEmailClaimSubmitConfirmed), "Back"));
    },
    scavengerEmailClaimSubmitConfirmed: function () {
        var b = this;
        this.scavengerAccountSubmitDebounce = !0;
        var a = new haxe.ds.StringMap();
        a.h.code = this.scavengerKeyEntry;
        a.h.email = Plus.connected ? "" : this.scavengerEmailEntry;
        a.h.token = Plus.connected ? GlobalSave.plusAccessToken : "";
        lemongine.Web.send("https://mineblocks.com/1/scripts/plus/claim", !0, a, function (a) {
            b.scavengerAccountSubmitDebounce = !1;
            "1" == HxOverrides.substr(a, 0, 1) ? (a = HxOverrides.substr(a, 1, null).split(";"), GlobalSave.plusAccessToken = a[0], GlobalSave.plusRefreshToken = a[1], GlobalSave.save(), b.connectPlus()) : "0" == HxOverrides.substr(a, 0, 1) ? Main.Instance.confirmationDialog.open(new ConfirmationDialogData("Couldn't Claim Key", "Sorry, something went wrong claiming your key:\n\n" + HxOverrides.substr(a, 2, null), "Okay")) : Main.Instance.confirmationDialog.open(new ConfirmationDialogData("Couldn't Claim Key", "Something went wrong while claiming your key. If this continues to happen, please contact Zanzlanz.", "Okay"));
        }, function (a) {
            b.scavengerAccountSubmitDebounce = !1;
            Main.Instance.confirmationDialog.open(new ConfirmationDialogData("Couldn't Claim Key", "Something went wrong while claiming your key. You might not have a connection to the Mine Blocks key server. Please try again later.", "Okay"));
        });
    },
    scavengerPasscodeEntrySubmit: function () {
        var b = this;
        this.scavengerAccountSubmitDebounce = !0;
        var a = new haxe.ds.StringMap();
        a.h.email = this.scavengerEmailEntry;
        a.h.code = this.scavengerPasscodeEntry;
        lemongine.Web.send("https://mineblocks.com/1/scripts/plus/login-passcode", !0, a, function (a) {
            b.scavengerAccountSubmitDebounce = !1;
            "1" != HxOverrides.substr(a, 0, 1) ? Main.Instance.confirmationDialog.open(new ConfirmationDialogData("Login Failed", "Unable to log you in.\n\n" + HxOverrides.substr(a, 2, null), "Okay")) : (b.handlePlusLoginStateResponseString(HxOverrides.substr(a, 1, null)), b.set_scavengerPlusPage("connected"));
        }, function (a) {
            b.scavengerAccountSubmitDebounce = !1;
            Main.Instance.confirmationDialog.open(new ConfirmationDialogData("Couldn't Log In", "Something went wrong while logging in. You might not have a connection to the Mine Blocks key server. Please try again later.", "Okay"));
        });
    },
    scavengerForgotSubmit: function () {
        var b = this;
        this.scavengerAccountSubmitDebounce = !0;
        var a = new haxe.ds.StringMap();
        a.h.email = this.scavengerEmailEntry;
        lemongine.Web.send("https://mineblocks.com/1/scripts/plus/reset-passcode-email", !0, a, function (a) {
            b.scavengerAccountSubmitDebounce = !1;
            Main.Instance.confirmationDialog.open(new ConfirmationDialogData("Check Your Email", "If the email you entered matches your Mine Blocks Plus account, your will be sent a new passcode.", "Awesome!"));
            Plus.connected ? b.set_scavengerPlusPage("connected") : b.set_scavengerPlusPage("passcode");
        }, function (a) {
            b.scavengerAccountSubmitDebounce = !1;
            Main.Instance.confirmationDialog.open(new ConfirmationDialogData("Couldn't Submit", "Something went wrong while submitting your passcode reset request. You might not have a connection to the Mine Blocks key server. Please try again later.", "Okay"));
        });
    },
    setLookingAtLeaderboard: function (b) {
        this.lookingAtLeaderboard = b;
        this.createScavengerLeaderboardScroll();
        this.createScavengerLeaderboardItems(ScavengerManager.completeLeaderboards[this.lookingAtLeaderboard]);
        this.scavengerLeaderboardScrollPosition = 0;
    },
    createScavengerLeaderboardScroll: function () {
        if (null == this.scavengerLeaderboardScrollScene) {
            this.scavengerLeaderboardScrollScene = new lemongine.Scene(0, 0);
            this.scavengerLeaderboardScrollScene.setup2D(333, 108, lemongine.Color.clear);
            this.scavengerLeaderboardScrollEntity = new lemongine.Image().fromScene(this.scavengerLeaderboardScrollScene).toEntity(null, !0);
            this.scavengerLeaderboardScrollEntity.isTransparent = !0;
            this.scavengerLeaderboardScrollEntity.forceNoCulling = !0;
            this.scavengerLeaderboardScrollEntity.layer = 3;
            var b = Textures.blockTextures,
                a = shader.BlockShader.getShader(shader.BlendMode.NORMAL),
                c = new haxe.ds.StringMap(),
                d = lemongine.Mathz.repeatArray([1], 24);
            c.h.color = d;
            d = lemongine.Mathz.repeatArray([0], 24);
            c.h.colorOffset = d;
            this.scavengerLeaderboardItemsEntity = new QuadPoolEntity_MatrixState(b, null, a, c);
            this.scavengerLeaderboardItemsEntity.transform.scale2D(16);
            this.scavengerLeaderboardItemsEntity.isTransparent = !0;
            b = lemongine.AssetManager.getImage("ui");
            a = shader.BlockShader.getShader();
            c = new haxe.ds.StringMap();
            d = lemongine.Mathz.repeatArray([1], 24);
            c.h.color = d;
            d = lemongine.Mathz.repeatArray([0], 24);
            c.h.colorOffset = d;
            this.scavengerLeaderboardUIEntity = new lemongine.QuadPoolEntity(b, null, a, c);
            this.scavengerLeaderboardUIEntity.isTransparent = !0;
        }
    },
    createScavengerLeaderboardItems: function (b) {
        for (var a = 0, c = this.scavengerLeaderboardItems; a < c.length;) c[a++].destroy();
        this.scavengerLeaderboardItems = [];
        a = 0;
        for (c = b.entries.length; a < c;) for (var d = a++, f = b.entries[d], g = 0, k = f.itemsFound.length; g < k;) {
            var h = g++;
            if (0 != f.itemsFound[h]) {
                var m = b.items[h];
                null != m && this.scavengerLeaderboardItems.push(new Item(this.scavengerLeaderboardItemsEntity, (162 + 16 * h) / 16, (6 + 29 * d) / 16, null, m.item));
            }
        }
    },
    gotoScavengerFrame: function (b) {
        if (this.scavengerFrame != b) {
            null == ScavengerManager.playerSkinsTexture && (ScavengerManager.playerSkinsTexture = new SkinTextureManager());
            null == this.scavengerLeaderboardSkinEntity && (this.scavengerLeaderboardSkinEntity = new lemongine.QuadPoolEntity(ScavengerManager.playerSkinsTexture.skinTexture), this.scavengerLeaderboardSkinEntity.layer = 3, this.scavengerLeaderboardSkinEntity.isTransparent = !0);
            null != SkinLoader.frames.skin && (null == this.scavengerPlayerSkinEntity && (this.scavengerPlayerSkinEntity = new lemongine.Entity([], lemongine.Geom.createQuad(16, 9), lemongine.shader.BasicTextureSingle.getShader()), this.scavengerPlayerSkinEntity.isTransparent = !0, this.scavengerPlayerSkinEntity.layer = 2), lemongine.shader.BasicTextureSingle.setupEntity(this.scavengerPlayerSkinEntity, SkinLoader.frames.skin, SkinLoader.getMobHeadRect(SkinLoader.frames.skin)));
            if (b == screens.ScavengerFrames.DISPLAY_NAME_CHANGE) {
                if (null == this.skinSearchManager) {
                    this.skinSearchManager = new SkinSearchManager();
                    this.temporarySkin = new Skin();
                    var a = this.skinSearchManager.viewer.skinTexture,
                        c = shader.BlockShader.getShader(shader.BlendMode.NORMAL),
                        d = new haxe.ds.StringMap(),
                        f = lemongine.Mathz.repeatArray([1], 24);
                    d.h.color = f;
                    f = lemongine.Mathz.repeatArray([0], 24);
                    d.h.colorOffset = f;
                    this.skinPreviewEntity = new lemongine.QuadPoolEntity(a, null, c, d);
                    this.skinPreviewEntity.isTransparent = !0;
                    this.skinPreviewEntity.layer = 2;
                    a = SkinLoader.frames.skin;
                    c = shader.BlockShader.getShader(shader.BlendMode.NORMAL);
                    d = new haxe.ds.StringMap();
                    f = lemongine.Mathz.repeatArray([1], 24);
                    d.h.color = f;
                    f = lemongine.Mathz.repeatArray([0], 24);
                    d.h.colorOffset = f;
                    this.mainSkinEntity = new lemongine.QuadPoolEntity(a, null, c, d);
                    this.mainSkinEntity.isTransparent = !0;
                    this.mainSkinEntity.layer = 2;
                }
                this.skinSearchManager.page = 1;
                this.skinSearchManager.category = "best";
                this.skinSearchManager.search = this.searchEntry = "";
                this.searchDebounceTimer = 0;
                null != UI.fields.h.scavengerSkinSearch && UI.fields.h.scavengerSkinSearch.input.set_text("");
                this.skinSearchManager.loadPublicSkins(null);
                SkinLoader.copySkinData(SkinLoader.frames, this.temporarySkin);
                this.skinCanBeReverted = !1;
                this.scavengerNewUsername = ScavengerManager.username;
                new EReg("^[A-Za-z0-9 _\u00c4\u00e4\u00d6\u00f6\u00dc\u00fc\u00df\u00c1\u00e1\u00c9\u00e9\u00cd\u00ed\u00d3\u00f3\u00da\u00fa\u00c0\u00e0\u00c8\u00e8\u00cc\u00ec\u00d2\u00f2\u00d9\u00f9\u00e7\u00c7\u00c3\u00e3\u1ebc\u1ebd\u0128\u0129\u00d5\u00f5\u0168\u0169\u00c2\u00e2\u00ca\u00ea\u00ce\u00ee\u00d4\u00f4\u00db\u00fb\u0178\u00ff\u00d8\u00f8\u0152\u0153\u00d1\u00f1\u00cf\u00ef\u00cb\u00eb\u00c5\u00e5\u00c6\u00e6]{3,32}$", "").match(this.scavengerNewUsername) ? this.scavengerDisplayPlaceholderUsername = !1 : (this.scavengerNewUsername = "", this.scavengerDisplayPlaceholderUsername = !0);
                this.scavengerFirstUsernameFrame = !0;
            }
            this.scavengerFrame = b;
        }
    },
    initBottomTooltip: function () {
        if (null == this.bottomTooltipEntity) {
            var b = lemongine.AssetManager.getImage("ui"),
                a = shader.BlockShader.getShader(),
                c = new haxe.ds.StringMap(),
                d = lemongine.Mathz.repeatArray([1], 24);
            c.h.color = d;
            d = lemongine.Mathz.repeatArray([0], 24);
            c.h.colorOffset = d;
            this.bottomTooltipEntity = new lemongine.QuadPoolEntity(b, null, a, c);
            this.bottomTooltipEntity.isTransparent = !0;
            this.bottomTooltipEntity.layer = 55;
            this.bottomTooltipEntity.customBlendFunc = [lemongine.Lemongine.gl.SRC_ALPHA, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA, lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ONE];
        }
    },
    showBottomTooltip: function (b, a, c) {
        null == this.bottomTooltipEntity && this.initBottomTooltip();
        b = TextCache.get("bottomTooltip", b, new lemongine.Point(), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.LEFT, 1);
        b.layer = 56;
        var d = new lemongine.Point(Math.max(19, 2 * b.calculatedWidth / 2 + 8), 2 * b.calculatedHeight / 2 + 8),
            f = null;
        "" != a && (f = TextCache.get("bottomTooltipSmall", a, new lemongine.Point(), Fonts.get_volter(), lemongine.Color.white, 1, lemongine.TextAlignment.LEFT, 1), f.layer = 56, d.x = Math.max(d.x, f.calculatedWidth / 2 + 8), d.y += f.calculatedHeight / 2 + 4);
        a = new lemongine.Point(Math.min(this.scene.get_width() - 16, c.x) - 2 * d.x + 28, c.y);
        this.bottomTooltipEntity.update9Slice(0, new lemongine.Rectangle(0, 0, d.x, d.y), new lemongine.Rectangle(19, 112, 19, 8), new lemongine.Rectangle(2, 5, 1, 1));
        this.bottomTooltipEntity.transform.reset().scale2D(2).translate(a.x, a.y);
        this.scene.draw(this.bottomTooltipEntity);
        b.transform.reset().scale2D(2).translate(a.x + 8, a.y + 12);
        this.scene.draw(b);
        null != f && (f.transform.reset().translate(a.x + 8, a.y + 12 + 2 * b.calculatedHeight + 4), this.scene.draw(f));
    },
    resetSaveText: function () {
        for (var b = 0, a = Object.keys(GlobalSave.worldList.h).length, c = 0; c < a;) ++c, ++b;
        this.backupSaveText = "This will save your " + b + " world" + (1 != b ? "s" : "") + " and current settings to a .MBWB file.";
    },
    resetLoadText: function () {
        1 == this.loadBackupFrame && (this.backupLoadText = "After you click this, you can choose what to restore.");
    },
    runBackupsFrame: function () {
        var b = this;
        this.renderTitle(.6, this.scene.get_width() / 2 - .6 * this.titleWidth / 2, 24);
        var a = Main.addSimpleButtonBetter("backupsBack", this.buttonEntity, this.scene.get_width() / 2 - 276 + 507 - 100 | 0, this.scene.get_height() / 2 - 207 + 355 | 0, 100, 30, 1.77, function () {
            b.gotoAndStop(2);
        }) ? TextCache.get("backupsBack", "Back", new lemongine.Point(this.scene.get_width() / 2 - 276 + 507 - 50 + 2.77, this.scene.get_height() / 2 - 207 + 372.77), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER) : TextCache.get("backupsBack", "Back", new lemongine.Point(this.scene.get_width() / 2 - 276 + 507 - 50 + 1, this.scene.get_height() / 2 - 207 + 371), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER);
        a.layer = 2;
        this.scene.draw(a);
        this.blackBoxWithRadius.clearPool();
        this.blackBoxWithRadius.add9Slice(new lemongine.Rectangle(this.scene.get_width() / 2 - 234, this.scene.get_height() / 2 - 207 + 108, 468, 70), new lemongine.Rectangle(0, 16, 16, 16), new lemongine.Rectangle(6, 6, 4, 4));
        a = Main.addSimpleButtonBetter("backupsSave", this.buttonEntity, this.scene.get_width() / 2 - 276 + 58 | 0, this.scene.get_height() / 2 - 207 + 126 | 0, 146, 36, 1.77, function () {
            b.loadBackupFrame = 1;
            b.savingBackup = !0;
            var a = GlobalSave.createBackupObject();
            b.finalData = {
                settings: a,
                worlds: {}
            };
            b.totalWorlds = b.orderedWorldList.length;
            b.worldsBackedUp = 0;
            b.worldsFailed = 0;
            b.updateWorldList();
        }) ? TextCache.get("backupsSave", "Save everything", new lemongine.Point(this.scene.get_width() / 2 - 276 + 133.77, this.scene.get_height() / 2 - 207 + 146.77), Fonts.get_volter(), lemongine.Color.white, 1.5555555555555556, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("backupsSave", "Save everything", new lemongine.Point(this.scene.get_width() / 2 - 276 + 132, this.scene.get_height() / 2 - 207 + 145), Fonts.get_volter(), lemongine.Color.white, 1.5555555555555556, lemongine.TextAlignment.CENTER, 1.5);
        a.layer = 2;
        this.scene.draw(a);
        a = TextCache.get("backupsSavePrompt", this.backupSaveText, new lemongine.Point(this.scene.get_width() / 2 - 276 + 223, this.scene.get_height() / 2 - 207 + 130), Fonts.get_volter(), lemongine.Color.white, 1.5555555555555556, lemongine.TextAlignment.LEFT, 1.5);
        a.layer = 2;
        a.setWordWrap(194);
        this.scene.draw(a);
        this.runBackupProcess();
        1 == this.loadBackupFrame ? (this.blackBoxWithRadius.add9Slice(new lemongine.Rectangle(this.scene.get_width() / 2 - 234, this.scene.get_height() / 2 - 207 + 190, 468, 70), new lemongine.Rectangle(0, 16, 16, 16), new lemongine.Rectangle(6, 6, 4, 4)), a = Main.addSimpleButtonBetter("backupsLoad", this.buttonEntity, this.scene.get_width() / 2 - 276 + 58 | 0, this.scene.get_height() / 2 - 207 + 208 | 0, 146, 36, 1.77, function () {
            b.loadBackupFile();
        }) ? TextCache.get("backupsLoad", "Load everything", new lemongine.Point(this.scene.get_width() / 2 - 276 + 133.77, this.scene.get_height() / 2 - 207 + 228.77), Fonts.get_volter(), lemongine.Color.white, 1.5555555555555556, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("backupsLoad", "Load everything", new lemongine.Point(this.scene.get_width() / 2 - 276 + 132, this.scene.get_height() / 2 - 207 + 227), Fonts.get_volter(), lemongine.Color.white, 1.5555555555555556, lemongine.TextAlignment.CENTER, 1.5), a.layer = 2, this.scene.draw(a), a = TextCache.get("backupsLoadPrompt", this.backupLoadText, new lemongine.Point(this.scene.get_width() / 2 - 276 + 223, this.scene.get_height() / 2 - 207 + 212), Fonts.get_volter(), lemongine.Color.white, 1.5555555555555556, lemongine.TextAlignment.LEFT, 1.5), a.layer = 2, a.setWordWrap(177)) : (this.blackBoxWithRadius.add9Slice(new lemongine.Rectangle(this.scene.get_width() / 2 - 234, this.scene.get_height() / 2 - 207 + 190, 468, 151), new lemongine.Rectangle(0, 16, 16, 16), new lemongine.Rectangle(6, 6, 4, 4)), a = TextCache.get("backupsLoadPrompt2", this.backupLoadText2, new lemongine.Point(this.scene.get_width() / 2 - 276 + 63, this.scene.get_height() / 2 - 207 + 208), Fonts.get_volter(), lemongine.Color.white, 1.5555555555555556, lemongine.TextAlignment.LEFT, 1.5), a.layer = 2, this.scene.draw(a), UI.radio(this.buttonEntity, "duplicateWorldOptions1", this.duplicateWorldOption, "add", this.scene.get_width() / 2 - 276 + 60 | 0, this.scene.get_height() / 2 - 207 + 234 | 0, function () {
            b.duplicateWorldOption = "add";
        }, this.duplicateWorldOptionDisabled, 236), a = TextCache.get("duplicateWorldOptions1", "Add the duplicate worlds", new lemongine.Point(this.scene.get_width() / 2 - 276 + 90, this.scene.get_height() / 2 - 207 + 235), Fonts.get_volter(), this.duplicateWorldOptionDisabled ? Colors.palette.grey7 : lemongine.Color.white, 1.5555555555555556, lemongine.TextAlignment.LEFT, 1.5), a.layer = 2, this.scene.draw(a), UI.radio(this.buttonEntity, "duplicateWorldOptions2", this.duplicateWorldOption, "skip", this.scene.get_width() / 2 - 276 + 60 | 0, this.scene.get_height() / 2 - 207 + 255 | 0, function () {
            b.duplicateWorldOption = "skip";
        }, this.duplicateWorldOptionDisabled, 236), a = TextCache.get("duplicateWorldOptions2", "Skip the duplicate worlds", new lemongine.Point(this.scene.get_width() / 2 - 276 + 90, this.scene.get_height() / 2 - 207 + 256), Fonts.get_volter(), this.duplicateWorldOptionDisabled ? Colors.palette.grey7 : lemongine.Color.white, 1.5555555555555556, lemongine.TextAlignment.LEFT, 1.5), a.layer = 2, this.scene.draw(a), UI.radio(this.buttonEntity, "duplicateWorldOptions3", this.duplicateWorldOption, "replace", this.scene.get_width() / 2 - 276 + 60 | 0, this.scene.get_height() / 2 - 207 + 276 | 0, function () {
            b.duplicateWorldOption = "replace";
        }, this.duplicateWorldOptionDisabled, 236), a = TextCache.get("duplicateWorldOptions3", "Replace duplicate worlds", new lemongine.Point(this.scene.get_width() / 2 - 276 + 90, this.scene.get_height() / 2 - 207 + 277), Fonts.get_volter(), this.duplicateWorldOptionDisabled ? Colors.palette.grey7 : lemongine.Color.white, 1.5555555555555556, lemongine.TextAlignment.LEFT, 1.5), a.layer = 2, this.scene.draw(a), UI.checkbox(this.buttonEntity, "replaceSettings", this.replaceSettings, this.scene.get_width() / 2 - 276 + 321 | 0, this.scene.get_height() / 2 - 207 + 234 | 0, function () {
            b.replaceSettings = !b.replaceSettings;
        }, !1, 167), a = TextCache.get("replaceSettings", "Replace settings", new lemongine.Point(this.scene.get_width() / 2 - 276 + 349, this.scene.get_height() / 2 - 207 + 235), Fonts.get_volter(), lemongine.Color.white, 1.5555555555555556, lemongine.TextAlignment.LEFT, 1.5), a.layer = 2, this.scene.draw(a), a = Main.addSimpleButtonBetter("backupsLoadCancel", this.buttonEntity, this.scene.get_width() / 2 - 276 + 265 | 0, this.scene.get_height() / 2 - 207 + 301 | 0, 66, 26, 1.77, function () {
            b.loadBackupFrame = 1;
        }) ? TextCache.get("backupsLoadCancel", "Cancel", new lemongine.Point(this.scene.get_width() / 2 - 276 + 300.77, this.scene.get_height() / 2 - 207 + 316.77), Fonts.get_volter(), lemongine.Color.white, 1.5555555555555556, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("backupsLoadCancel", "Cancel", new lemongine.Point(this.scene.get_width() / 2 - 276 + 299, this.scene.get_height() / 2 - 207 + 315), Fonts.get_volter(), lemongine.Color.white, 1.5555555555555556, lemongine.TextAlignment.CENTER, 1.5), a.layer = 2, this.scene.draw(a), a = Main.addSimpleButtonBetter("backupsLoadRestore", this.buttonEntity, this.scene.get_width() / 2 - 276 + 348 | 0, this.scene.get_height() / 2 - 207 + 301 | 0, 148, 26, 1.77, function () {
            b.replaceSettings && GlobalSave.loadBackupObject(Reflect.field(b.finalData, "settings"));
            b.loadingBackup = !0;
            b.loadBackupFrame = 1;
        }) ? TextCache.get("backupsLoadRestore", "Restore backup", new lemongine.Point(this.scene.get_width() / 2 - 276 + 424.77, this.scene.get_height() / 2 - 207 + 316.77), Fonts.get_volter(), lemongine.Color.white, 1.5555555555555556, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("backupsLoadRestore", "Restore backup", new lemongine.Point(this.scene.get_width() / 2 - 276 + 423, this.scene.get_height() / 2 - 207 + 315), Fonts.get_volter(), lemongine.Color.white, 1.5555555555555556, lemongine.TextAlignment.CENTER, 1.5), a.layer = 2);
        this.scene.draw(a);
        this.blackBoxWithRadius.resetUnusedQuads();
        this.scene.draw(this.blackBoxWithRadius);
    },
    runMainFrame: function () {
        this.renderTitle(1, this.scene.get_width() / 2 - this.titleWidth / 2, 24, 15, 10);
        null != this.newsLoader && (this.scene.draw(this.newsLoaderBG), this.scene.draw(this.newsLoader), "" != this.newsURL && new lemongine.Rectangle(this.newsLoader.transform.getX(), this.newsLoader.transform.getY(), 2 * this.newsLoader.calculatedWidth, 2 * this.newsLoader.calculatedHeight).containsPoint(Main.Instance.mouse) && (Main.Instance.cursor = lime.ui.MouseCursor.POINTER, 1 == Main.Instance.mouseUp() && lemongine.Web.open(this.newsURL)));
        this.mainMenu_main(new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 + 16));
        this.renderJumpers();
    },
    text: function (b, a, c, d, f, g, h, m) {
        null == f && (f = lemongine.TextAlignment.LEFT);
        null == d && (d = 2);
        this.textInstance++;
        b = TextCache.get(null != m ? m : "menuTextFrame" + this.currentFrame + "Text" + this.textInstance, b, new lemongine.Point(a, c + (f == lemongine.TextAlignment.CENTER ? d * Fonts.get_volter().height / 2 : 0)), Fonts.get_volter(), null == g ? lemongine.Color.white : g, d, f, 1.5);
        b.isTransparent = !0;
        b.layer = 2;
        null == h && (h = this.scene);
        h.draw(b);
        return b;
    },
    renderVersion: function () {
        var b = this;
        if (0 < Main.buttonBehavior("versionButton", 1 != this.currentFrame, 0, this.scene.get_height() - 20, 120, 20, function () {
            b.versionDialogFrame = 2;
        }, !1)) {
            var a = this.buttonEntity,
                c = new lemongine.Rectangle(0, this.scene.get_height() - 34, 120, 34),
                d = new lemongine.Rectangle(7, 16, 9, 9),
                f = new lemongine.Rectangle(1, 7, 1, 1),
                l = new haxe.ds.StringMap(),
                h = lemongine.Mathz.repeatArray([0, 0, 0, 3], 6);
            l.h.color = h;
            a.add9Slice(c, d, f, 0, l);
            a = TextCache.get("versionPrompt", "Click to show updates", new lemongine.Point(2, this.scene.get_height() - 30), Fonts.get_volter(), lemongine.Color.white, 1);
            a.layer = 2;
            this.scene.draw(a);
        }
        a = TextCache.get("version", "1.31.2", new lemongine.Point(3, this.scene.get_height() - 2 * Fonts.get_volter().height), Fonts.get_volter(), lemongine.Color.white, 2);
        a.layer = 2;
        this.scene.draw(a);
    },
    prepareVersionDialog: function () {
        var b = this;
        if (2 == this.versionDialogFrame) {
            Main.addSimpleButtonBetter("versionLetsGo", this.dialog, this.scene.get_width() / 2 - 105 | 0, this.scene.get_height() / 2 - 207 + 334 | 0, 210, 36, 1.77, function () {
                b.versionDialogFrame = 1;
            });
            var a = TextCache.get("versionWatchAnnouncement", "watch update video", new lemongine.Point(this.scene.get_width() / 2 - 276 + 52, this.scene.get_height() / 2 - 207 + 267), Fonts.get_volter(), "versionWatchAnnouncement" == Main.Instance.getUIHover() ? new lemongine.Color(-5570561) : new lemongine.Color(-16711681), 2);
            Main.buttonBehavior("versionWatchAnnouncement", !1, this.scene.get_width() / 2 - 276 + 52 | 0, (this.scene.get_height() / 2 - 207 | 0) + 267, 2 * a.calculatedWidth, 22, function () {
                lemongine.Web.open("https://youtu.be/fnR7djDnkyo");
            }, !1);
            a = TextCache.get("versionReadChangelog", "read changelog", new lemongine.Point(this.scene.get_width() / 2 - 276 + 342, this.scene.get_height() / 2 - 207 + 267), Fonts.get_volter(), "versionReadChangelog" == Main.Instance.getUIHover() ? new lemongine.Color(-86) : new lemongine.Color(-256), 2);
            Main.buttonBehavior("versionReadChangelog", !1, this.scene.get_width() / 2 - 276 + 342 | 0, (this.scene.get_height() / 2 - 207 | 0) + 267, 2 * a.calculatedWidth, 22, function () {
                lemongine.Web.open("https://zanzlanz.com/n/98");
            }, !1);
            "versionLetsGo" == Main.Instance.getUIHover() && "versionWatchAnnouncement" == Main.Instance.getUIHover() && "versionReadChangelog" == Main.Instance.getUIHover() || Main.Instance.setUIHover("versionDialog", !1);
        } else 3 == this.versionDialogFrame ? (Main.addSimpleButtonBetter("updatePlayNewVersion", this.dialog, this.scene.get_width() / 2 - 105 | 0, this.scene.get_height() / 2 - 207 + 301 - 5 | 0, 210, 36, 1.77, function () {
            lemongine.Web.open("https://mineblocks.com/1");
        }), Main.addSimpleButtonBetter("updateContinueOldVersion", this.dialog, this.scene.get_width() / 2 - 55 | 0, this.scene.get_height() / 2 - 207 + 343 - 5 | 0, 110, 24, 1.77, function () {
            b.versionDialogFrame = 1;
        }), "updatePlayNewVersion" == Main.Instance.getUIHover() && "updateContinueOldVersion" == Main.Instance.getUIHover() || Main.Instance.setUIHover("versionDialog", !1)) : 4 == this.versionDialogFrame && (Main.addSimpleButtonBetter("closeMessageFromZanzlanz", this.dialog, this.scene.get_width() / 2 - 105 | 0, this.scene.get_height() / 2 - 207 + 319 | 0, 210, 36, 1.77, function () {
            b.versionDialogFrame = 1;
        }), "closeMessageFromZanzlanz" != Main.Instance.getUIHover() && Main.Instance.setUIHover("versionDialog", !1));
    },
    renderVersionDialog: function () {
        if (2 == this.versionDialogFrame) {
            this.dialog.clearPool();
            var b = this.dialog,
                a = new lemongine.Vector3(),
                c = new lemongine.Point(96, 0),
                d = new lemongine.Point(1, 1),
                f = new lemongine.Point(this.scene.get_width(), this.scene.get_height()),
                l = new haxe.ds.StringMap(),
                h = lemongine.Mathz.repeatArray([0, 0, 0, .5], 6);
            l.h.color = h;
            b.addQuad(a, c, d, !0, f, null, null, l);
            this.dialog.add9Slice(new lemongine.Rectangle(this.scene.get_width() / 2 - 276 + 5 - 7, this.scene.get_height() / 2 - 207 + 44 - 4, 556, 295), new lemongine.Rectangle(0, 32, 32, 32), new lemongine.Rectangle(14, 14, 4, 4));
            b = this.dialog;
            a = new lemongine.Rectangle(this.scene.get_width() / 2 - 276 + 5, this.scene.get_height() / 2 - 207 + 44, 542, 281);
            c = new lemongine.Rectangle(0, 16, 16, 16);
            d = new lemongine.Rectangle(6, 6, 4, 4);
            l = new haxe.ds.StringMap();
            h = lemongine.Mathz.repeatArray([0, 0, 0, 5], 6);
            l.h.color = h;
            h = lemongine.Mathz.repeatArray([.06274509803921569, .11372549019607843, .23137254901960785, 0], 6);
            l.h.colorOffset = h;
            b.add9Slice(a, c, d, 0, l);
            b = this.dialog;
            a = new lemongine.Rectangle(this.scene.get_width() / 2 - 266 + 5, this.scene.get_height() / 2 - 207 + 91, 522, 223);
            c = new lemongine.Rectangle(0, 16, 16, 16);
            d = new lemongine.Rectangle(6, 6, 4, 4);
            l = new haxe.ds.StringMap();
            h = lemongine.Mathz.repeatArray([0, 0, 0, 5], 6);
            l.h.color = h;
            h = lemongine.Mathz.repeatArray([.09803921568627451, .24313725490196078, .5529411764705883, 0], 6);
            l.h.colorOffset = h;
            b.add9Slice(a, c, d, 0, l);
            f = TextCache.get("versionTitle", "What's new in Mine Blocks 1.31?", new lemongine.Point(this.scene.get_width() / 2 + 1, this.scene.get_height() / 2 - 207 + 68), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER);
            f.layer = 7;
            this.scene.draw(f);
            f = TextCache.get("versionScavengerBG", "Scavenger Hunt", new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 124), Fonts.get_volter(), new lemongine.Color(-11385597), 4, lemongine.TextAlignment.CENTER);
            f.layer = 7;
            this.scene.draw(f);
            f = TextCache.get("versionScavengerFG", "Scavenger Hunt", new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 124 - 4), Fonts.get_volter(), new lemongine.Color(-11264), 4, lemongine.TextAlignment.CENTER);
            f.layer = 7;
            this.scene.draw(f);
            f = TextCache.get("versionScavengerShine", "Scavenger Hunt", new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 124 - 4), Fonts.get_volter(), lemongine.Color.white, 4, lemongine.TextAlignment.CENTER);
            f.layer = 7;
            f.set_mask(new lemongine.Rectangle(-f.calculatedWidth / 2, 3.5, f.calculatedWidth, 2.5));
            this.scene.draw(f);
            f = TextCache.get("versionScavengerSubtitle", "A multiplayer minigame!", new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 155), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER);
            f.layer = 7;
            this.scene.draw(f);
            f = TextCache.get("versionBody1", "You get", new lemongine.Point(this.scene.get_width() / 2 - 276 + 56, this.scene.get_height() / 2 - 207 + 190), Fonts.get_volter(), new lemongine.Color(-13065985), 2);
            f.layer = 7;
            this.scene.draw(f);
            f = TextCache.get("versionBody3", "minutes to find", new lemongine.Point(this.scene.get_width() / 2 - 276 + 218, this.scene.get_height() / 2 - 207 + 190), Fonts.get_volter(), new lemongine.Color(-13065985), 2);
            f.layer = 7;
            this.scene.draw(f);
            f = TextCache.get("versionBody5", "items...", new lemongine.Point(this.scene.get_width() / 2 - 276 + 423, this.scene.get_height() / 2 - 207 + 190), Fonts.get_volter(), new lemongine.Color(-13065985), 2);
            f.layer = 7;
            this.scene.draw(f);
            f = TextCache.get("versionBody6", "...before your friends do.", new lemongine.Point(this.scene.get_width() / 2 - 276 + 123, this.scene.get_height() / 2 - 207 + 218), Fonts.get_volter(), new lemongine.Color(-13065985), 2);
            f.layer = 7;
            this.scene.draw(f);
            f = TextCache.get("versionBody2BG", "8:00", new lemongine.Point(this.scene.get_width() / 2 - 276 + 146, this.scene.get_height() / 2 - 207 + 187), Fonts.get_volter(), new lemongine.Color(-10027008), 3);
            f.layer = 7;
            this.scene.draw(f);
            f = TextCache.get("versionBody2FG", "8:00", new lemongine.Point(this.scene.get_width() / 2 - 276 + 146, this.scene.get_height() / 2 - 207 + 187 - 3), Fonts.get_volter(), new lemongine.Color(-62195), 3);
            f.layer = 7;
            this.scene.draw(f);
            f = TextCache.get("versionBody4BG", "10", new lemongine.Point(this.scene.get_width() / 2 - 276 + 385, this.scene.get_height() / 2 - 207 + 187), Fonts.get_volter(), new lemongine.Color(-16739825), 3);
            f.layer = 7;
            this.scene.draw(f);
            f = TextCache.get("versionBody4FG", "10", new lemongine.Point(this.scene.get_width() / 2 - 276 + 385, this.scene.get_height() / 2 - 207 + 187 - 3), Fonts.get_volter(), new lemongine.Color(-15859931), 3);
            f.layer = 7;
            this.scene.draw(f);
            b = this.dialog;
            a = new lemongine.Vector3(this.scene.get_width() / 2 - 276 + 401, this.scene.get_height() / 2 - 207 + 218);
            c = new lemongine.Point(46, 241);
            d = new lemongine.Point(14, 8);
            f = new lemongine.Point(28, 16);
            l = new haxe.ds.StringMap();
            h = lemongine.Mathz.repeatArray([.2196078431372549, .6274509803921569, 1, 1], 6);
            l.h.color = h;
            b.addQuad(a, c, d, !0, f, null, null, l);
            f = TextCache.get("versionWatchAnnouncement", "watch update video", new lemongine.Point(this.scene.get_width() / 2 - 276 + 52, this.scene.get_height() / 2 - 207 + 267), Fonts.get_volter(), "versionWatchAnnouncement" == Main.Instance.getUIHover() ? new lemongine.Color(-5570561) : new lemongine.Color(-16711681), 2);
            f.layer = 7;
            this.scene.draw(f);
            b = this.dialog;
            a = new lemongine.Vector3(this.scene.get_width() / 2 - 276 + 52, this.scene.get_height() / 2 - 207 + 285, 0);
            c = new lemongine.Point(96, 0);
            d = new lemongine.Point(1, 1);
            f = new lemongine.Point(2 * f.calculatedWidth, 2);
            l = new haxe.ds.StringMap();
            h = lemongine.Mathz.repeatArray(["versionWatchAnnouncement" == Main.Instance.getUIHover() ? .67 : 0, 1, 1, 1], 6);
            l.h.color = h;
            b.addQuad(a, c, d, !0, f, null, null, l);
            f = TextCache.get("versionOr", "or", new lemongine.Point(this.scene.get_width() / 2 - 276 + 288, this.scene.get_height() / 2 - 207 + 267), Fonts.get_volter(), lemongine.Color.white, 2);
            f.layer = 7;
            this.scene.draw(f);
            f = TextCache.get("versionReadChangelog", "read changelog", new lemongine.Point(this.scene.get_width() / 2 - 276 + 342, this.scene.get_height() / 2 - 207 + 267), Fonts.get_volter(), "versionReadChangelog" == Main.Instance.getUIHover() ? new lemongine.Color(-86) : new lemongine.Color(-256), 2);
            f.layer = 7;
            this.scene.draw(f);
            b = this.dialog;
            a = new lemongine.Vector3(this.scene.get_width() / 2 - 276 + 342, this.scene.get_height() / 2 - 207 + 285, 0);
            c = new lemongine.Point(96, 0);
            d = new lemongine.Point(1, 1);
            f = new lemongine.Point(2 * f.calculatedWidth, 2);
            l = new haxe.ds.StringMap();
            h = lemongine.Mathz.repeatArray([1, 1, "versionReadChangelog" == Main.Instance.getUIHover() ? .67 : 0, 1], 6);
            l.h.color = h;
            b.addQuad(a, c, d, !0, f, null, null, l);
            f = Main.addSimpleButtonBetter("versionLetsGo", this.dialog, this.scene.get_width() / 2 - 105 | 0, this.scene.get_height() / 2 - 207 + 334 | 0, 210, 36, 1.77, function () {}) ? TextCache.get("versionLetsGo", "Close", new lemongine.Point(this.scene.get_width() / 2 + 2.77, this.scene.get_height() / 2 - 207 + 354.77), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER) : TextCache.get("versionLetsGo", "Close", new lemongine.Point(this.scene.get_width() / 2 + 1, this.scene.get_height() / 2 - 207 + 353), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER);
            f.layer = 7;
            this.scene.draw(f);
            this.dialog.resetUnusedQuads();
            this.scene.draw(this.dialog);
        } else 3 == this.versionDialogFrame ? (this.dialog.clearPool(), b = this.dialog, a = new lemongine.Vector3(), c = new lemongine.Point(96, 0), d = new lemongine.Point(1, 1), f = new lemongine.Point(this.scene.get_width(), this.scene.get_height()), l = new haxe.ds.StringMap(), h = lemongine.Mathz.repeatArray([0, 0, 0, .5], 6), l.h.color = h, b.addQuad(a, c, d, !0, f, null, null, l), b = this.dialog, a = new lemongine.Rectangle(this.scene.get_width() / 2 - 165, this.scene.get_height() / 2 - 207 + 55, 330, 322), c = new lemongine.Rectangle(0, 16, 16, 16), d = new lemongine.Rectangle(6, 6, 4, 4), l = new haxe.ds.StringMap(), h = lemongine.Mathz.repeatArray([0, 0, 0, 5], 6), l.h.color = h, b.add9Slice(a, c, d, 0, l), f = TextCache.get("updateTitle", "HURRAY!\nAn update is available!", new lemongine.Point(this.scene.get_width() / 2 + 1, this.scene.get_height() / 2 - 207 + 88), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER), f.layer = 7, this.scene.draw(f), f = TextCache.get("updateCurrentVersion", "You are viewing:", new lemongine.Point(this.scene.get_width() / 2 - 276 + 305, this.scene.get_height() / 2 - 207 + 123), Fonts.get_volter(), new lemongine.Color(-26368), 2, lemongine.TextAlignment.RIGHT), f.layer = 7, this.scene.draw(f), f = TextCache.get("updateCurrentVersionVersion", "1.31.2", new lemongine.Point(this.scene.get_width() / 2 - 276 + 312, this.scene.get_height() / 2 - 207 + 123), Fonts.get_volter(), new lemongine.Color(-26368), 2, lemongine.TextAlignment.LEFT), f.layer = 7, this.scene.draw(f), f = TextCache.get("updateNewVersion", "Newest version:", new lemongine.Point(this.scene.get_width() / 2 - 276 + 305, this.scene.get_height() / 2 - 207 + 152), Fonts.get_volter(), new lemongine.Color(-256), 2, lemongine.TextAlignment.RIGHT), f.layer = 7, this.scene.draw(f), f = TextCache.get("updateNewVersionVersion", ("1" != HxOverrides.substr(Main.Instance.newestVersion, 0, 1) ? "1." : "") + Main.Instance.newestVersion, new lemongine.Point(this.scene.get_width() / 2 - 276 + 312, this.scene.get_height() / 2 - 207 + 152), Fonts.get_volter(), new lemongine.Color(-256), 2, lemongine.TextAlignment.LEFT), f.layer = 7, this.scene.draw(f), f = TextCache.get("updateDescription", Main.Instance.newestVersionHas, new lemongine.Point(this.scene.get_width() / 2 + 1, this.scene.get_height() / 2 - 207 + 189), Fonts.get_volter(), lemongine.Color.white, 1.4444444444444444, lemongine.TextAlignment.CENTER, 1.5), f.layer = 7, f.transform.reset().scale2D(1.4444444444444444).setPosition(this.scene.get_width() / 2 + 1, this.scene.get_height() / 2 - 207 + 189), f.setWordWrap(211), this.scene.draw(f), f = Main.addSimpleButtonBetter("updatePlayNewVersion", this.dialog, this.scene.get_width() / 2 - 105 | 0, this.scene.get_height() / 2 - 207 + 301 - 5 | 0, 210, 36, 1.77, function () {}) ? TextCache.get("updatePlayNewVersion", "Play new version", new lemongine.Point(this.scene.get_width() / 2 + 2.77, this.scene.get_height() / 2 - 207 + 301 - 5 + 20.77), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER) : TextCache.get("updatePlayNewVersion", "Play new version", new lemongine.Point(this.scene.get_width() / 2 + 1, this.scene.get_height() / 2 - 207 + 301 - 5 + 19), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER), f.layer = 7, this.scene.draw(f), f = Main.addSimpleButtonBetter("updateContinueOldVersion", this.dialog, this.scene.get_width() / 2 - 55 | 0, this.scene.get_height() / 2 - 207 + 343 - 5 | 0, 110, 24, 1.77, function () {}) ? TextCache.get("updateContinueOldVersion", "Close", new lemongine.Point(this.scene.get_width() / 2 + 2.77, this.scene.get_height() / 2 - 207 + 343 - 5 + 14.77), Fonts.get_volter(), lemongine.Color.white, 1.3333333333333333, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("updateContinueOldVersion", "Close", new lemongine.Point(this.scene.get_width() / 2 + 1, this.scene.get_height() / 2 - 207 + 343 - 5 + 13), Fonts.get_volter(), lemongine.Color.white, 1.3333333333333333, lemongine.TextAlignment.CENTER, 1.5), f.layer = 7, this.scene.draw(f), this.dialog.resetUnusedQuads(), this.scene.draw(this.dialog)) : 4 == this.versionDialogFrame && (this.dialog.clearPool(), b = this.dialog, a = new lemongine.Vector3(), c = new lemongine.Point(96, 0), d = new lemongine.Point(1, 1), f = new lemongine.Point(this.scene.get_width(), this.scene.get_height()), l = new haxe.ds.StringMap(), h = lemongine.Mathz.repeatArray([0, 0, 0, .5], 6), l.h.color = h, b.addQuad(a, c, d, !0, f, null, null, l), b = this.dialog, a = new lemongine.Rectangle(this.scene.get_width() / 2 - 165, this.scene.get_height() / 2 - 207 + 55, 330, 322), c = new lemongine.Rectangle(0, 16, 16, 16), d = new lemongine.Rectangle(6, 6, 4, 4), l = new haxe.ds.StringMap(), h = lemongine.Mathz.repeatArray([0, 0, 0, 5], 6), l.h.color = h, b.add9Slice(a, c, d, 0, l), f = TextCache.get("messageFromZanzlanzTitle", "A message from Zanzlanz!", new lemongine.Point(this.scene.get_width() / 2 + 1, this.scene.get_height() / 2 - 207 + 80), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER), f.layer = 7, this.scene.draw(f), f = TextCache.get("messageFromZanzlanzMessage", Main.Instance.newestVersionHas, new lemongine.Point(this.scene.get_width() / 2 + 1, this.scene.get_height() / 2 - 207 + 102), Fonts.get_volter(), new lemongine.Color(-256), 1.5555555555555556, lemongine.TextAlignment.CENTER, 1.5), f.layer = 7, f.transform.reset().scale2D(1.5555555555555556).setPosition(this.scene.get_width() / 2 + 1, this.scene.get_height() / 2 - 207 + 102), f.setWordWrap(196), this.scene.draw(f), f = TextCache.get("messageFromZanzlanzThanks", "Thanks for reading!", new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 298), Fonts.get_volter(), new lemongine.Color(-13421773), 1.6666666666666667, lemongine.TextAlignment.CENTER, 1.5), f.layer = 7, this.scene.draw(f), f = Main.addSimpleButtonBetter("closeMessageFromZanzlanz", this.dialog, this.scene.get_width() / 2 - 105 | 0, this.scene.get_height() / 2 - 207 + 319 | 0, 210, 36, 1.77, function () {}) ? TextCache.get("closeMessageFromZanzlanz", "Close message", new lemongine.Point(this.scene.get_width() / 2 + 2.77, this.scene.get_height() / 2 - 207 + 339.77), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER) : TextCache.get("closeMessageFromZanzlanz", "Close message", new lemongine.Point(this.scene.get_width() / 2 + 1, this.scene.get_height() / 2 - 207 + 338), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER), f.layer = 7, this.scene.draw(f), this.dialog.resetUnusedQuads(), this.scene.draw(this.dialog));
    },
    resetJumper1: function () {
        this.jumper1.setText(this.jumpTexts[Math.floor(Math.random() * this.jumpTexts.length)] + "!");
        this.jumper1Scene.clear();
        this.jumper1.transform.reset().scale(2, 2, 2).setPosition(this.jumper1Scene.get_width() / 2 - this.jumper1.calculatedWidth, this.jumper1Scene.get_height() / 2 - this.jumper1.calculatedHeight);
        this.jumper1Scene.draw(this.jumper1, !0);
        this.jumper1Rotation = (10 * Math.random() - 5) / 180 * Math.PI;
    },
    resetJumper2: function () {
        this.jumper2.setText(this.jumpTexts[Math.floor(Math.random() * this.jumpTexts.length)] + "!");
        this.jumper2Scene.clear();
        this.jumper2.transform.reset().scale(2, 2, 2).setPosition(this.jumper2Scene.get_width() / 2 - this.jumper2.calculatedWidth, this.jumper2Scene.get_height() / 2 - this.jumper2.calculatedHeight);
        this.jumper2Scene.draw(this.jumper2, !0);
        this.jumper2Rotation = (10 * Math.random() - 5) / 180 * Math.PI;
    },
    renderJumpers: function () {
        this.jumper1Time++;
        40 == this.jumper1Time && (this.jumper1Time += Math.floor(40 * Math.random()));
        90 <= this.jumper1Time && (this.jumper1Time = 0, this.resetJumper1());
        var b = 1 - Math.pow(this.jumper1Time - 20, 2) / 400;
        if (40 >= this.jumper1Time) {
            var a = this.jumper1BlurImage.blurFilter(Math.max(1, 15 - 15 * b), Math.max(1, 15 - 15 * b), lemongine.shader.Quality.LOW, !0);
            a.smoothing = !0;
            this.blurredJumper1Entity.setTextureBuffer("texture", a);
            this.blurredJumper1Entity.transform.reset().rotate2D(this.jumper1Rotation).translate(this.scene.get_width() / 2 - 192, this.scene.get_height() + 20 - 100 * b + this.jumper1Scene.get_height() / 2);
            this.scene.draw(this.blurredJumper1Entity);
        }
        this.jumper2Time++;
        40 == this.jumper2Time && (this.jumper2Time += Math.floor(40 * Math.random()));
        90 <= this.jumper2Time && (this.jumper2Time = 0, this.resetJumper2());
        b = 1 - Math.pow(this.jumper2Time - 20, 2) / 400;
        40 >= this.jumper2Time && (a = this.jumper2BlurImage.blurFilter(Math.max(1, 15 - 15 * b), Math.max(1, 15 - 15 * b), lemongine.shader.Quality.LOW, !0), a.smoothing = !0, this.blurredJumper2Entity.setTextureBuffer("texture", a), this.blurredJumper2Entity.transform.reset().rotate2D(this.jumper2Rotation).translate(this.scene.get_width() / 2 + 192, this.scene.get_height() + 20 - 100 * b + this.jumper2Scene.get_height() / 2), this.scene.draw(this.blurredJumper2Entity));
    },
    loadBackupFile: function () {
        lemongine.File.open(["mbwb"], F(this, this.openBackup), null, !1);
    },
    openBackup: function (b, a) {
        try {
            this.finalData = JSON.parse(b);
        } catch (f) {
            this.backupLoadText = "Error loading backup.";
            return;
        }
        this.resetLoadText();
        this.loadBackupFrame = 2;
        this.worldsFailed = this.worldsBackedUp = this.totalWorlds = 0;
        this.worldIDsToRestore = [];
        a = b = 0;
        for (var c = Reflect.fields(Reflect.field(this.finalData, "worlds")); a < c.length;) {
            var d = c[a];
            ++a;
            this.totalWorlds++;
            this.worldIDsToRestore.push(d);
            Object.prototype.hasOwnProperty.call(GlobalSave.worldList.h, d) && ++b;
        }
        this.replaceSettings = !0;
        0 < b ? (this.duplicateWorldOption = "add", this.duplicateWorldOptionDisabled = !1, this.backupLoadText2 = b + " world" + (1 == b ? "" : "s") + " already exist" + (1 == b ? "s" : "") + ". What would you like to do?") : (this.duplicateWorldOption = "none", this.duplicateWorldOptionDisabled = !0, this.backupLoadText2 = "Awesome. Ready to restore when you are!");
    },
    runBackupProcess: function () {
        var b = this;
        if (this.savingBackup) {
            if (this.worldsBackedUp >= this.totalWorlds) {
                var a = new Date();
                lemongine.File.saveString(JSON.stringify(this.finalData), "Mine-Blocks-Backup-" + HxOverrides.substr(Std.string(a.getFullYear()), -2, 2) + (10 <= a.getMonth() + 1 ? Std.string(a.getMonth() + 1) : "0" + (a.getMonth() + 1)) + (10 <= a.getDate() ? Std.string(a.getDate()) : "0" + a.getDate()) + "-" + (10 <= a.getHours() ? Std.string(a.getHours()) : "0" + a.getHours()) + (10 <= a.getMinutes() ? Std.string(a.getMinutes()) : "0" + a.getMinutes()) + (10 <= a.getSeconds() ? Std.string(a.getSeconds()) : "0" + a.getSeconds()) + ".mbwb", null, null, !1);
                this.resetSaveText();
                this.savingBackup = !1;
            } else this.backupSaveText = "Please wait, creating backup...\nReading world " + (this.worldsBackedUp + 1) + " of " + this.totalWorlds + ".", this.waitingForSave || (this.waitingForSave = !0, new lemongine.LocalStorage(this.orderedWorldList[this.worldsBackedUp].data.h.data, "Mine_Blocks", function (a) {
                a.removeSaveOnExitListener();
                if (Object.prototype.hasOwnProperty.call(a.data.h, "data")) {
                    a = a.data.h.data;
                    a.fileInfo = {
                        name: b.orderedWorldList[b.worldsBackedUp].data.h.name,
                        version: b.orderedWorldList[b.worldsBackedUp].data.h.version,
                        seed: b.orderedWorldList[b.worldsBackedUp].data.h.seed,
                        fileTimestamp: b.orderedWorldList[b.worldsBackedUp].data.h.date
                    };
                    a = JSON.stringify(a);
                    for (var c = "", d = 0, f = a.length; d < f;) {
                        var g = d++;
                        g = HxOverrides.cca(a, g) + (5 * g % 33 + 1);
                        c += String.fromCodePoint(g);
                    }
                    Reflect.field(b.finalData, "worlds")[b.orderedWorldList[b.worldsBackedUp].id] = c;
                    b.waitingForSave = !1;
                    b.worldsBackedUp++;
                } else b.waitingForSave = !1, b.worldsBackedUp++, b.worldsFailed++;
            }));
        } else if (this.loadingBackup) if (this.worldsBackedUp >= this.totalWorlds) this.loadingBackup = !1, this.backupLoadText = this.worldsBackedUp - this.worldsFailed + " of " + this.totalWorlds + " world" + (1 == this.totalWorlds ? "" : "s") + " successfully restored!", this.resetSaveText();else if (this.backupLoadText = "Please wait, restoring backup...\nReading world " + (this.worldsBackedUp + 1) + " of " + this.totalWorlds + ".", !this.waitingForSave) {
            this.waitingForSave = !0;
            for (var c = 0;;) {
                ++c;
                a = [this.worldIDsToRestore[this.worldsBackedUp] + (1 == c ? "" : null == c ? "null" : "" + c)];
                if (Object.prototype.hasOwnProperty.call(GlobalSave.worldList.h, a[0])) if ("add" == this.duplicateWorldOption) continue;else if ("skip" == this.duplicateWorldOption) {
                    this.worldsBackedUp++;
                    this.waitingForSave = !1;
                    break;
                }
                c = Reflect.field(Reflect.field(this.finalData, "worlds"), this.worldIDsToRestore[this.worldsBackedUp]);
                var d = [],
                    f = "";
                try {
                    for (var k = 0, h = c.length; k < h;) {
                        var m = k++,
                            n = HxOverrides.cca(c, m) - (5 * m % 33 + 1);
                        f += String.fromCodePoint(n);
                    }
                    d[0] = JSON.parse(f);
                } catch (rb) {
                    this.waitingForSave = !1;
                    this.worldsBackedUp++;
                    this.worldsFailed++;
                    break;
                }
                new lemongine.LocalStorage(a[0], "Mine_Blocks", function (a, c, d) {
                    return function (f) {
                        f.removeSaveOnExitListener();
                        a[0].data = d[0];
                        var k = GlobalSave.worldList,
                            l = lemongine.Helpers.mappifyObjectsInMap(a[0]);
                        k.h[d[0]] = l;
                        GlobalSave.save();
                        Reflect.deleteField(c[0], "fileInfo");
                        k = new haxe.ds.StringMap();
                        k.h.data = c[0];
                        f.data = k;
                        f.save();
                        b.updateWorldList();
                        b.worldsBackedUp++;
                        b.waitingForSave = !1;
                    };
                }([Reflect.field(d[0], "fileInfo")], d, a));
                break;
            }
        }
    },
    loadFile: function () {
        lemongine.File.open(["mbw"], F(this, this.openFile), null, !1);
    },
    openFile: function (b, a) {
        var c = this,
            d = "";
        try {
            for (var f = 0, k = b.length; f < k;) {
                var h = f++,
                    m = HxOverrides.cca(b, h) - (5 * h % 33 + 1);
                d += String.fromCodePoint(m);
            }
            var x = JSON.parse(d);
        } catch (ka) {
            Main.Instance.confirmationDialog.open(new ConfirmationDialogData("Invalid File", "Sorry, that file cannot be loaded. It doesn't appear to be a valid Mine Blocks world file.", "Okay"));
            return;
        }
        var t = null;
        try {
            t = new World().fromFileData(b, !1);
        } catch (ka) {}
        if (null == t) Main.Instance.confirmationDialog.open(new ConfirmationDialogData("Invalid World", "Sorry, that world cannot be loaded. The world format appears to be invalid.", "Okay"));else {
            var q = Reflect.field(x, "fileInfo");
            for (b = 0;;) if (++b, d = [Std.string(Reflect.field(q, "data")) + (1 == b ? "" : null == b ? "null" : "" + b)], !Object.prototype.hasOwnProperty.call(GlobalSave.worldList.h, d[0])) {
                new lemongine.LocalStorage(d[0], "Mine_Blocks", function (b) {
                    return function (d) {
                        d.removeSaveOnExitListener();
                        var f = HxOverrides.substr(a.split("/").pop().split("\\").pop().split(".mbw").join("").split(".MBW").join(""), 0, 50);
                        q.name = f;
                        q.data = b[0];
                        f = GlobalSave.worldList;
                        var k = lemongine.Helpers.mappifyObjectsInMap(q);
                        f.h[b[0]] = k;
                        GlobalSave.save();
                        Reflect.deleteField(x, "fileInfo");
                        f = new haxe.ds.StringMap();
                        f.h.data = t.worldData;
                        d.data = f;
                        d.save();
                        c.worldToSelect = b[0];
                        c.updateWorldList();
                    };
                }(d));
                break;
            }
        }
    },
    mainMenu_main: function (b) {
        var a = this;
        this.blackBoxWithRadius.clearPool();
        this.blackBoxWithRadius.update9Slice(0, new lemongine.Rectangle(b.x - 230, b.y - 93, 460, 186), new lemongine.Rectangle(0, 16, 16, 16), new lemongine.Rectangle(6, 6, 4, 4));
        this.blackBoxWithRadius.resetUnusedQuads();
        this.scene.draw(this.blackBoxWithRadius);
        this.mainMenuButtonShadow.clearPool();
        this.mainMenuButtonEntity.clearPool();
        this.mainMenuButton(this.scene, "Play!", new lemongine.Rectangle(b.x, b.y - 50, 81, 18), function () {
            a.gotoAndStop(2);
        }, 3, !0);
        this.mainMenuButton(this.scene, "Settings/Skins", new lemongine.Rectangle(b.x - 122, b.y + 9, 88, 18), function () {
            a.gotoAndStop(7);
        }, 2);
        this.spinningDiamondEntity.setAttrib("texClip", lemongine.Mathz.repeatArray([-(Math.floor(G.toFloat(Main.Instance.tick) / G.toFloat(4)) % 3) * Math.floor(G.toFloat(this.spinningDiamondImage.width) / G.toFloat(3)), 0, Math.floor(G.toFloat(this.spinningDiamondImage.width) / G.toFloat(3)), this.spinningDiamondImage.height], 6));
        this.spinningDiamondEntity.transform.reset().scale2D(.5925925925925926).translate(b.x, b.y + 8);
        this.scene.draw(this.spinningDiamondEntity);
        this.mainMenuButton(this.scene, "Credits", new lemongine.Rectangle(b.x + 122, b.y + 9, 88, 18), function () {
            a.gotoAndStop(5);
        }, 2);
        this.mainMenuButton(this.scene, "Help - FAQ", new lemongine.Rectangle(b.x - 96, b.y + 59, 88, 18), function () {
            a.gotoAndStop(6);
        }, 2);
        this.mainMenuButton(this.scene, "Help - Wiki", new lemongine.Rectangle(b.x + 96, b.y + 59, 88, 18), function () {
            lemongine.Web.open("https://mineblocks.com/1/wiki");
        }, 2);
        this.scene.draw(this.mainMenuButtonShadow);
        this.scene.draw(this.mainMenuButtonEntity);
        this.mainMenuButtonShadow.resetUnusedQuads();
        this.mainMenuButtonEntity.resetUnusedQuads();
        this.thingsToOtherPlacesEntity.clearPool();
        b = new lemongine.Rectangle(this.scene.get_width() / 2 + -98.4, this.scene.get_height() - 86, 52.275, 43.05);
        if (0 < Main.buttonBehavior("discordLink", !1, b.x | 0, b.y | 0, b.width | 0, b.height | 0, function () {
            lemongine.Web.open("https://discord.gg/dcgZvCR");
        }, !1)) this.thingsToOtherPlacesEntity.addQuad(new lemongine.Vector3(b.x, b.y - 2), new lemongine.Point(236), new lemongine.Point(85, 70), !0, new lemongine.Point(49.2, 43.05));else {
            var c = this.thingsToOtherPlacesEntity,
                d = new lemongine.Vector3(b.x, b.y),
                f = new lemongine.Point(236),
                l = new lemongine.Point(85, 70),
                h = new lemongine.Point(49.2, 43.05),
                m = new haxe.ds.StringMap(),
                x = lemongine.Mathz.repeatArray([.6784313725490196, .7607843137254902, .807843137254902, 1], 6);
            m.h.color = x;
            c.addQuad(d, f, l, !0, h, null, null, m);
        }
        b.x += b.width;
        b.set_width(43.05);
        0 < Main.buttonBehavior("patreonLink", !1, b.x | 0, b.y | 0, b.width | 0, b.height | 0, function () {
            lemongine.Web.open("https://mineblocks.com/patreon");
        }, !1) ? this.thingsToOtherPlacesEntity.addQuad(new lemongine.Vector3(b.x, b.y - 2), new lemongine.Point(80), new lemongine.Point(70, 70), !0, new lemongine.Point(43.05, 43.05)) : (c = this.thingsToOtherPlacesEntity, d = new lemongine.Vector3(b.x, b.y), f = new lemongine.Point(80), l = new lemongine.Point(70, 70), h = new lemongine.Point(43.05, 43.05), m = new haxe.ds.StringMap(), x = lemongine.Mathz.repeatArray([.6784313725490196, .7607843137254902, .807843137254902, 1], 6), m.h.color = x, c.addQuad(d, f, l, !0, h, null, null, m));
        b.x += b.width;
        b.set_width(49.2);
        0 < Main.buttonBehavior("xLink", !1, b.x | 0, b.y | 0, b.width | 0, b.height | 0, function () {
            lemongine.Web.open("https://x.com/Mine_Blocks");
        }, !1) ? this.thingsToOtherPlacesEntity.addQuad(new lemongine.Vector3(b.x, b.y - 2), new lemongine.Point(), new lemongine.Point(80, 70), !0, new lemongine.Point(49.2, 43.05)) : (c = this.thingsToOtherPlacesEntity, d = new lemongine.Vector3(b.x, b.y), f = new lemongine.Point(), l = new lemongine.Point(80, 70), h = new lemongine.Point(49.2, 43.05), m = new haxe.ds.StringMap(), x = lemongine.Mathz.repeatArray([.6784313725490196, .7607843137254902, .807843137254902, 1], 6), m.h.color = x, c.addQuad(d, f, l, !0, h, null, null, m));
        b.x += b.width;
        b.set_width(52.89);
        0 < Main.buttonBehavior("youtubeLink", !1, b.x | 0, b.y | 0, b.width | 0, b.height | 0, function () {
            lemongine.Web.open("https://youtube.com/Zanzlanz");
        }, !1) ? this.thingsToOtherPlacesEntity.addQuad(new lemongine.Vector3(b.x, b.y - 2), new lemongine.Point(150), new lemongine.Point(86, 70), !0, new lemongine.Point(49.2, 43.05)) : (c = this.thingsToOtherPlacesEntity, d = new lemongine.Vector3(b.x, b.y), f = new lemongine.Point(150), l = new lemongine.Point(86, 70), h = new lemongine.Point(49.2, 43.05), m = new haxe.ds.StringMap(), x = lemongine.Mathz.repeatArray([.6784313725490196, .7607843137254902, .807843137254902, 1], 6), m.h.color = x, c.addQuad(d, f, l, !0, h, null, null, m));
        c = G.toFloat(this.zanzlanzLogo.width) / G.toFloat(2);
        d = G.toFloat(this.zanzlanzLogo.height) / G.toFloat(2);
        this.zanzlanzLogoEntity.transform.reset().translate(c, d).scale2D(.6813186813186813).translate(this.scene.get_width() / 2 - 62, this.scene.get_height() - 37);
        0 < Main.buttonBehavior("zanzlanzLink", !1, this.scene.get_width() / 2 - 62 | 0, this.scene.get_height() - 37 | 0, 124, 20, function () {
            lemongine.Web.open("https://zanzlanz.com");
        }, !1) && this.zanzlanzLogoEntity.transform.translate(0, -1);
        this.scene.draw(this.zanzlanzLogoEntity);
        this.thingsToOtherPlacesEntity.resetUnusedQuads();
        this.scene.draw(this.thingsToOtherPlacesEntity);
    },
    mainMenuButton: function (b, a, c, d, f, l) {
        null == l && (l = !1);
        null == f && (f = 1);
        var h = 0;
        if (new lemongine.Rectangle(c.x - c.width / 2 * f, c.y - c.height / 2 * f, c.width * f, c.height * f).containsPoint(Main.Instance.mouse)) {
            var m = Main.Instance.getUIHover() == a;
            Main.Instance.setUIHover(a);
            if (Main.Instance.getUIHover() == a) {
                Main.Instance.cursor = lime.ui.MouseCursor.POINTER;
                if (G.gt(Main.Instance.mouseDown(), 0)) {
                    Main.Instance.setUIDown(!0);
                    h = 16;
                    var x = TextCache.get(a, a, new lemongine.Point(c.x + f, c.y + f), Fonts.get_volter(), lemongine.Color.black, f, lemongine.TextAlignment.CENTER);
                } else Main.Instance.setUIDown(!1), h = 32, x = TextCache.get(a, a, new lemongine.Point(c.x, c.y), Fonts.get_volter(), lemongine.Color.black, f, lemongine.TextAlignment.CENTER);
                m && 1 == Main.Instance.mouseUp() && null != d && d();
            } else x = TextCache.get(a, a, new lemongine.Point(c.x, c.y), Fonts.get_volter(), lemongine.Color.black, f, lemongine.TextAlignment.CENTER);
        } else x = TextCache.get(a, a, new lemongine.Point(c.x, c.y), Fonts.get_volter(), lemongine.Color.black, f, lemongine.TextAlignment.CENTER), Main.Instance.getUIHover() == a && Main.Instance.setUIHover("");
        this.mainMenuButtonShadow.add9Slice(new lemongine.Rectangle(Math.floor(c.x - c.width * f / 2 - 7), c.y - c.height * f / 2 - 4, c.width * f + 13, c.height * f + 13), new lemongine.Rectangle(0, 32, 32, 32), new lemongine.Rectangle(14, 14, 4, 4), 0, null, f);
        a = this.mainMenuButtonEntity;
        c = new lemongine.Rectangle(Math.floor(c.x - c.width * f / 2), c.y - c.height * f / 2, c.width * f, c.height * f);
        h = new lemongine.Rectangle(h, 0, 16, 16);
        d = new lemongine.Rectangle(4, 4, 8, 8);
        l ? (l = new haxe.ds.StringMap(), m = lemongine.Mathz.repeatArray([1.5, 1.5, 1.5, 1], 6), l.h.color = m, m = lemongine.Mathz.repeatArray([-.1, -.1, -.1, 0], 6), l.h.colorOffset = m) : l = null;
        a.add9Slice(c, h, d, 0, l, f);
        x.layer = 2;
        b.draw(x);
    },
    set_scavengerSelectedTab: function (b) {
        this.scavengerTickSinceSwitchingSelectedTab = Main.Instance.tick;
        return this.scavengerSelectedTab = b;
    },
    set_scavengerPlusPage: function (b) {
        if (this.scavengerPlusPage == b) return b;
        this.scavengerPlusPagePrevious = this.scavengerPlusPage;
        this.scavengerPlusPage = b;
        this.scavengerPlusPageFirstFrame = !0;
        return b;
    },
    __class__: screens.Menu_Main
}
screens.Menu_Main.faq = [{
    question: "Wait, isn't this a Flash game?",
    answer: "It was! But I spent 2 years remaking it into a HTML5 game."
}, {
    question: "When is the next update?",
    answer: "You can see the progress on the next update by visiting the MineBlocks.com homepage."
}, {
    question: "How do I play on mobile?",
    answer: "Currently, you can visit the game on MineBlocks.com from your phone to play on mobile. An app version may be developed in a future update."
}, {
    question: "How do I play multiplayer?",
    answer: "Mine Blocks \"Scavenger Hunt\" is a multiplayer minigame. When you create a party, you can invite friends using your party's invite link.\r\n\t\t\tThere is currently no plan to add public parties where you're matched with strangers. To find others to play with, join the Discord community!\r\n\t\t\tFull survival multiplayer is not currently planned, as it would require a massive overhaul of the game's code. Perhaps more minigames will be added to Mine Blocks 1 over time."
}, {
    question: "How many people are working on Mine Blocks?",
    answer: "Just me, Zanzlanz. :) Prodevus made some great art though! Check out the credits menu."
}, {
    question: "How can I download Mine Blocks?",
    answer: "To download the latest version, visit MineBlocks.com/1/download."
}, {
    question: "Can you add texture packs or translations?",
    answer: "These are planned for the next few updates!"
}, {
    question: "Can there be mods, like Lucky Block or Herobrine?",
    answer: 'No, sorry. The game does not run on one scripting language. However, work will continue in making the game "data-orientated" so you can eventually do more powerful things with commands. I will not directly copy existing Minecraft mods.'
}, {
    question: "Can I change my skin?",
    answer: 'Yes! You can find this in the settings menu under "Character Skin".'
}, {
    question: "Why isn't my submitted skin showing up?",
    answer: "Moderation may be a bit behind in queue. Visit MineBlocks.com/1/skins for details."
}, {
    question: "Why are the eyes invisible on my skin?",
    answer: "That is probably because the eyes of your skin match the background color. Change the eye color a little bit on each frame to fix this. You can also use a transparent background entirely."
}, {
    question: "My worlds wont save!",
    answer: "Make sure your browser (or computer) doesn't automatically delete cookies or cache on the website you're playing on. This can usually be corrected in your browser's \"site permissions\" settings."
}, {
    question: "Why is my screen black when I enter the game?",
    answer: "This appears to be caused by a graphics card inconsistency on some computers. There is currently no solution, but I am aware of the issue."
}]
screens.Menu_Main.scavengerTabs = function (b) {
    b = new haxe.ds.StringMap();
    var a = {
        title: "How to Play",
        uiRect: new lemongine.Rectangle(28, 241, 7, 7),
        floatRight: !1
    };
    b.h.info = a;
    a = {
        title: "Players",
        uiRect: new lemongine.Rectangle(46, 241, 14, 8),
        floatRight: !1
    };
    b.h.players = a;
    a = {
        title: "Leaderboard",
        uiRect: new lemongine.Rectangle(35, 241, 11, 9),
        floatRight: !1
    };
    b.h.leaderboard = a;
    a = {
        title: "Chat",
        uiRect: new lemongine.Rectangle(60, 241, 10, 9),
        floatRight: !1
    };
    b.h.chat = a;
    a = {
        title: "Mine Blocks Plus",
        uiRect: new lemongine.Rectangle(70, 242, 17, 9),
        floatRight: !0
    };
    b.h.plus = a;
    return b;
}(this)