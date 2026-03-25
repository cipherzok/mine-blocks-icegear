screens.Menu_Settings = function (b, a) {
    this.skinViewerFrames = [{
        name: "Idle",
        time: 0,
        frames: [0]
    }, {
        name: "Move",
        time: 6,
        frames: [1, 2, 3, 4, 5]
    }, {
        name: "Sneak",
        time: 16,
        frames: [6, 7]
    }, {
        name: "Jump",
        time: 0,
        frames: [8]
    }, {
        name: "Mine",
        time: 6,
        frames: [9, 10, 11, 12, 13]
    }, {
        name: "Hurt",
        time: 0,
        frames: [14]
    }, {
        name: "Sit",
        time: 0,
        frames: [15]
    }, {
        name: "Cart",
        time: 0,
        frames: [16]
    }];
    this.viewerCache = new haxe.ds.StringMap();
    this.skinPreviewerFrame = 1;
    this.selectedNum = 0;
    this.searchEntry = "";
    this.skinUploaded = this.skinUploadFailed = !1;
    this.skinNameCapitalization = this.authorCapitalization = !0;
    this.skinNameEntry = this.authorEntry = "";
    this.skinUploadFrame = 1;
    this.walkAnimation = this.walkAnimation2 = 0;
    this.skinFrame = 1;
    this.keyValues = [-2, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 32, 16, 37, 39, 38, 40, 13, 17, 9, 191, 220, 187, 188, 190, 189, 112, 113, 114, 115, 116, 117, 118, 119, 120, 122, 123, 124, 125, 126];
    this.keyNames = "None A B C D E F G H I J K L M N O P Q R S T U V W X Y Z Space Shift Left Right Up Down Enter Ctrl Tab / \\ = , . - F1 F2 F3 F4 F5 F6 F7 F8 F9 F11 F12 F13 F14 F15".split(" ");
    this.renderLayerBase = 0;
    this.bindKey = "";
    this.particleOptions = ["None", "Some", "Lots"];
    this.qualityOptions = ["Low", "Medium", "High"];
    var c = new haxe.ds.StringMap();
    c.h.peaceful = 0;
    c.h.easy = 1;
    c.h.normal = 2;
    c.h.hard = 3;
    this.difficultyToInt = c;
    this.difficultyOptions = ["Peaceful", "Easy", "Normal", "Hard"];
    this.currentFrame = 0;
    this.leverOn = !1;
    this.scene = b;
    this.renderLayerBase = a;
    this.blackBoxWithRadius = new lemongine.QuadPoolEntity(lemongine.AssetManager.getImage("ui"));
    this.blackBoxWithRadius.isTransparent = !0;
    this.blackBoxWithRadius.layer = a + 4;
    b = lemongine.AssetManager.getImage("ui");
    var d = shader.BlockShader.getShader(shader.BlendMode.NORMAL);
    c = new haxe.ds.StringMap();
    var f = lemongine.Mathz.repeatArray([1], 24);
    c.h.color = f;
    f = lemongine.Mathz.repeatArray([0], 24);
    c.h.colorOffset = f;
    this.buttonEntity = new lemongine.QuadPoolEntity(b, null, d, c);
    this.buttonEntity.isTransparent = !0;
    this.buttonEntity.layer = a + 5;
    lemongine.AssetManager.getImage("skin_upload_progress").set_premultiplied(!0);
    this.skinUploadProgressEntity = new lemongine.QuadPoolEntity(lemongine.AssetManager.getImage("skin_upload_progress"));
    this.skinUploadProgressEntity.customBlendFunc = [lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ONE_MINUS_SRC_ALPHA, lemongine.Lemongine.gl.ONE, lemongine.Lemongine.gl.ONE];
    this.skinUploadProgressEntity.isTransparent = !0;
    this.skinUploadProgressEntity.layer = a + 5;
    b = Textures.blockTextures;
    d = shader.BlockShader.getShader(shader.BlendMode.NORMAL);
    c = new haxe.ds.StringMap();
    f = lemongine.Mathz.repeatArray([1], 24);
    c.h.color = f;
    f = lemongine.Mathz.repeatArray([0], 24);
    c.h.colorOffset = f;
    this.chickenNonsenseDispenser = new lemongine.QuadPoolEntity(b, null, d, c);
    this.chickenNonsenseDispenser.isTransparent = !0;
    this.chickenNonsenseDispenser.layer = a + 5;
    this.gotoAndStop(1);
}
m["screens.Menu_Settings"] = screens.Menu_Settings
screens.Menu_Settings.__name__ = "screens.Menu_Settings"
screens.Menu_Settings.prototype = {
    updateRenderLayerBase: function (b) {
        this.renderLayerBase = b;
        null != this.blackBoxWithRadius && (this.blackBoxWithRadius.layer = b + 4, this.buttonEntity.layer = b + 5, this.skinUploadProgressEntity.layer = b + 5, this.chickenNonsenseDispenser.layer = b + 5);
        null != this.skinPreviewEntity && (this.skinPreviewEntity.layer = b + 6, this.mainSkinEntity.layer = b + 6);
        null != this.skinUploadBlocksClip && (this.skinUploadBlocksClip.layer = b + 6, this.skinUploadSkinClip.layer = b + 6, this.skinUploadPig.layer = b + 6);
    },
    gotoAndStop: function (b) {
        this.currentFrame != b && (Main.Instance.setUIHover("", !1), this.currentFrame = b, this.resize(), this.bindKey = "");
    },
    callBackCallback: function () {
        GlobalSave.save();
        this.gotoAndStop(1);
        this.backCallback();
    },
    resize: function () {
        1 == this.currentFrame ? (this.blackBoxWithRadius.clearPool(!1, !0), this.blackBoxWithRadius.add9Slice(new lemongine.Rectangle(this.scene.get_width() / 2 - 276 + 57, this.scene.get_height() / 2 - 207 + 90, 438, 66), new lemongine.Rectangle(0, 16, 16, 16), new lemongine.Rectangle(6, 6, 4, 4)), this.blackBoxWithRadius.add9Slice(new lemongine.Rectangle(this.scene.get_width() / 2 - 276 + 57, this.scene.get_height() / 2 - 207 + 174, 438, 167), new lemongine.Rectangle(0, 16, 16, 16), new lemongine.Rectangle(6, 6, 4, 4))) : (this.blackBoxWithRadius.clearPool(!1, !0), this.blackBoxWithRadius.add9Slice(new lemongine.Rectangle(this.scene.get_width() / 2 - 276 + 57, this.scene.get_height() / 2 - 207 + 74, 438, 267), new lemongine.Rectangle(0, 16, 16, 16), new lemongine.Rectangle(6, 6, 4, 4)));
    },
    run: function () {
        switch (this.currentFrame) {
        case 1:
            this.runSettingsFrame();
            break;
        case 2:
            this.runKeybindingsFrame();
            break;
        case 3:
            this.runSkinsFrame();
        }
    },
    runSettingsFrame: function () {
        var b = this;
        this.scene.draw(this.blackBoxWithRadius);
        UI.drawDropdown();
        var a = TextCache.get("settingsText", "Options", new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 52), Fonts.get_volter(), lemongine.Color.white, 3, lemongine.TextAlignment.CENTER);
        this.scene.draw(a);
        a.layer = this.renderLayerBase + 6;
        var c = this.scene.get_width() / 2 - 276 + 57 | 0,
            d = this.scene.get_height() / 2 - 207 + 188 | 0;
        this.buttonEntity.clearPool();
        if ("menu" == Main.Instance.frame && null != Main.Instance.mainMenu.chickenNonsense) {
            this.chickenNonsenseDispenser.clearPool();
            Main.buttonBehavior("settingsDispenseSeeds", !1, c, this.scene.get_height() / 2 - 207 + 38 | 0, 48, 32, function () {
                b.leverOn = !b.leverOn;
                b.leverOn ? (0 < Main.Instance.mainMenu.chickenNonsense.seedsToDispense && (Main.Instance.mainMenu.chickenNonsense.seeds.push({
                    position: new lemongine.Point(c + 48, b.scene.get_height() / 2 - 207 + 53),
                    speed: new lemongine.Point(20 * Math.random() + 3, 0),
                    random: Math.random()
                }), new particles.Particle_SS_Smoke2(c + 48, b.scene.get_height() / 2 - 207 + 53, 3 * Math.random() + 6, 2 * Math.random() - 1), new particles.Particle_SS_Smoke2(c + 48, b.scene.get_height() / 2 - 207 + 53, 3 * Math.random() + 6, 2 * Math.random() - 1), new particles.Particle_SS_Smoke2(c + 48, b.scene.get_height() / 2 - 207 + 53, 3 * Math.random() + 6, 2 * Math.random() - 1), new particles.Particle_SS_Smoke2(c + 48, b.scene.get_height() / 2 - 207 + 53, 3 * Math.random() + 6, 2 * Math.random() - 1), Main.Instance.mainMenu.chickenNonsense.seedsToDispense--), Main.Instance.MUTED || lemongine.AssetManager.getSound("off_0").play(GlobalSave.soundVol / 100)) : Main.Instance.MUTED || lemongine.AssetManager.getSound("on_0").play(GlobalSave.soundVol / 100);
            }, !1);
            a = Textures.getTexture("lever", this.leverOn ? "on" : "off");
            var f = Textures.getTexture("dispenser");
            this.chickenNonsenseDispenser.addQuad(new lemongine.Vector3(c - 16, this.scene.get_height() / 2 - 207 + 38 | 0), new lemongine.Point(a.x, a.y), new lemongine.Point(a.width, a.height), !0, new lemongine.Point(32, 32), null, [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1]);
            this.chickenNonsenseDispenser.addQuad(new lemongine.Vector3(c + 16, this.scene.get_height() / 2 - 207 + 38 | 0), new lemongine.Point(f.x, f.y), new lemongine.Point(f.width, f.height), !0, new lemongine.Point(32, 32), null, lemongine.Geom.flippedQuadUVs);
            this.chickenNonsenseDispenser.resetUnusedQuads();
            this.scene.draw(this.chickenNonsenseDispenser);
        }
        a = Main.addSimpleButtonBetter("settingsChangeSkin", this.buttonEntity, this.scene.get_width() / 2 - 184 - 15 | 0, this.scene.get_height() / 2 - 207 + 105 | 0, 184, 36, 1.77, function () {
            b.gotoAndStop(3);
            b.gotoSkinFrame(1);
        }) ? TextCache.get("settingsChangeSkin", "Character skin", new lemongine.Point(this.scene.get_width() / 2 - 184 - 15 + 93, this.scene.get_height() / 2 - 207 + 124), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER, 0) : TextCache.get("settingsChangeSkin", "Character skin", new lemongine.Point(this.scene.get_width() / 2 - 184 - 15 + 92, this.scene.get_height() / 2 - 207 + 123), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER, 0);
        a.layer = this.renderLayerBase + 6;
        this.scene.draw(a);
        Main.addSimpleButtonBetter("settingsChangeControls", this.buttonEntity, this.scene.get_width() / 2 + 15 | 0, this.scene.get_height() / 2 - 207 + 105 | 0, 184, 36, 1.77, function () {
            b.gotoAndStop(2);
        });
        a = TextCache.get("settingsChangeControls", "Controls", new lemongine.Point(this.scene.get_width() / 2 + 108, this.scene.get_height() / 2 - 207 + 124), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER, 0);
        a.layer = this.renderLayerBase + 6;
        this.scene.draw(a);
        a = Main.addSimpleButtonBetter("settingsBackToMenu", this.buttonEntity, this.scene.get_width() / 2 - 134 - 66 | 0, this.scene.get_height() / 2 - 207 + 359 | 0, 132, 30, 1.77, function () {
            b.callBackCallback();
        }) ? TextCache.get("settingsBackToMenu", "Back to menu", new lemongine.Point(this.scene.get_width() / 2 - 134 + 2.77, this.scene.get_height() / 2 - 207 + 376.77), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("settingsBackToMenu", "Back to menu", new lemongine.Point(this.scene.get_width() / 2 - 134 + 1, this.scene.get_height() / 2 - 207 + 375), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.CENTER, 1.5);
        a.layer = this.renderLayerBase + 6;
        this.scene.draw(a);
        a = TextCache.get("settingsHeaderSFX", "SFX volume", new lemongine.Point(c + 118, d), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.RIGHT, 1.5);
        a.layer = this.renderLayerBase + 6;
        this.scene.draw(a);
        UI.numericStepper(this.buttonEntity, "settingsSFX", GlobalSave.soundVol, c + 118 + 6, d - 3, 35, 0, 100, 5, function (a) {
            GlobalSave.soundVol = a | 0;
        });
        a = TextCache.get("settingsHeaderVolume", "Music volume", new lemongine.Point(c + 118, d + 30), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.RIGHT, 1.5);
        a.layer = this.renderLayerBase + 6;
        this.scene.draw(a);
        UI.numericStepper(this.buttonEntity, "musicSFX", GlobalSave.songVol, c + 118 + 6, d + 30 - 3, 35, 0, 100, 5, function (a) {
            GlobalSave.songVol = a | 0;
            lemongine.Audio.set_musicVolume(GlobalSave.songVol / 100);
        });
        a = TextCache.get("settingsHeaderFocus", "Focus pause", new lemongine.Point(c + 118, d + 60), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.RIGHT, 1.5);
        a.layer = this.renderLayerBase + 6;
        this.scene.draw(a);
        UI.checkbox(this.buttonEntity, "focusPause", GlobalSave.focusPause, c + 118 + 6, d + 60 + 1, function () {
            GlobalSave.focusPause = !GlobalSave.focusPause;
        }, !1);
        a = TextCache.get("settingsHeaderArmor", "Show armor", new lemongine.Point(c + 118, d + 90), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.RIGHT, 1.5);
        a.layer = this.renderLayerBase + 6;
        this.scene.draw(a);
        UI.checkbox(this.buttonEntity, "showArmor", GlobalSave.showArmor, c + 118 + 6, d + 90 + 1, function () {
            GlobalSave.showArmor = !GlobalSave.showArmor;
        }, !1);
        a = TextCache.get("settingsHeaderHUD", "Show HUD", new lemongine.Point(c + 118, d + 120), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.RIGHT, 1.5);
        a.layer = this.renderLayerBase + 6;
        this.scene.draw(a);
        UI.checkbox(this.buttonEntity, "showHUD", !GlobalSave.hideGUI, c + 118 + 6, d + 120 + 1, function () {
            GlobalSave.hideGUI = !GlobalSave.hideGUI;
        }, !1);
        a = TextCache.get("settingsHeaderTouch", "Touch controls", new lemongine.Point(c + 318, d), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.RIGHT, 1.5);
        a.layer = this.renderLayerBase + 6;
        this.scene.draw(a);
        UI.checkbox(this.buttonEntity, "touchControls", GlobalSave.touchControls, c + 318 + 6, d + 1, function () {
            GlobalSave.touchControls = !GlobalSave.touchControls;
            GlobalSave.completedTutorial = !1;
        });
        f = "game" == Main.Instance.frame && !Main.Instance.game.world.hardcore && !Main.Instance.game.isScavenger;
        a = TextCache.get("settingsHeaderDifficulty", "Difficulty", new lemongine.Point(c + 318, d + 30), Fonts.get_volter(), f ? lemongine.Color.white : new lemongine.Color(-6710887), 1.7, lemongine.TextAlignment.RIGHT, 1.5);
        a.layer = this.renderLayerBase + 6;
        this.scene.draw(a);
        UI.dropdown(this.buttonEntity, "difficulty", this.difficultyOptions, "game" == Main.Instance.frame ? Main.Instance.game.world.hardcore ? 3 : this.difficultyToInt.h[Main.Instance.game.world.difficulty] : 2, c + 318 + 6, d + 30 - 3, 75, function (a, b) {
            Main.Instance.game.world.difficulty = b.toLowerCase();
        }, !f);
        a = TextCache.get("settingsHeaderPassiveMobs", "Passive mobs", new lemongine.Point(c + 318, d + 60), Fonts.get_volter(), f ? lemongine.Color.white : new lemongine.Color(-6710887), 1.7, lemongine.TextAlignment.RIGHT, 1.5);
        a.layer = this.renderLayerBase + 6;
        this.scene.draw(a);
        UI.checkbox(this.buttonEntity, "passiveMobs", !f || Main.Instance.game.getGameRule("passivemobs"), c + 318 + 6, d + 60 + 1, function () {
            var a = Main.Instance.game.world.gameRules,
                b = 1 != Main.Instance.game.getGameRule("passivemobs");
            a.h.passivemobs = b;
        }, !f);
        a = TextCache.get("settingsHeaderQuality", "Quality", new lemongine.Point(c + 318, d + 90), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.RIGHT, 1.5);
        a.layer = this.renderLayerBase + 6;
        this.scene.draw(a);
        UI.dropdown(this.buttonEntity, "quality", this.qualityOptions, GlobalSave.qual - 1, c + 318 + 6, d + 90 - 3, 75, function (a, b) {
            GlobalSave.set_qual(a + 1);
        });
        a = TextCache.get("settingsHeaderParticles", "Particles", new lemongine.Point(c + 318, d + 120), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.RIGHT, 1.5);
        a.layer = this.renderLayerBase + 6;
        this.scene.draw(a);
        UI.dropdown(this.buttonEntity, "particles", this.particleOptions, GlobalSave.particles - 1, c + 318 + 6, d + 120 - 3, 75, function (a, b) {
            GlobalSave.particles = a + 1;
        });
        this.buttonEntity.resetUnusedQuads();
        this.scene.draw(this.buttonEntity);
    },
    runKeybindingsFrame: function () {
        var b = this;
        this.scene.draw(this.blackBoxWithRadius);
        var a = TextCache.get("keybindingsText", "Key bindings", new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 46), Fonts.get_volter(), lemongine.Color.white, 3, lemongine.TextAlignment.CENTER);
        this.scene.draw(a);
        a.layer = this.renderLayerBase + 6;
        this.buttonEntity.clearPool();
        a = Main.addSimpleButtonBetter("settingsBackToSettings", this.buttonEntity, this.scene.get_width() / 2 + 134 - 66 | 0, this.scene.get_height() / 2 - 207 + 359 | 0, 132, 30, 1.77, function () {
            b.gotoAndStop(1);
        }) ? TextCache.get("settingsBackToSettings", "Settings", new lemongine.Point(this.scene.get_width() / 2 + 136.77, this.scene.get_height() / 2 - 207 + 376.77), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("settingsBackToSettings", "Settings", new lemongine.Point(this.scene.get_width() / 2 + 135, this.scene.get_height() / 2 - 207 + 375), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.CENTER, 1.5);
        a.layer = this.renderLayerBase + 6;
        this.scene.draw(a);
        a = Main.addSimpleButtonBetter("settingsReset", this.buttonEntity, this.scene.get_width() / 2 - 46 | 0, this.scene.get_height() / 2 - 207 + 364 | 0, 92, 21, 1.77, function () {
            GlobalSave.resetKeyBindings();
        }) ? TextCache.get("settingsReset", "Use default", new lemongine.Point(this.scene.get_width() / 2 + 1, this.scene.get_height() / 2 - 207 + 376), Fonts.get_volter(), new lemongine.Color(-3407872), 1, lemongine.TextAlignment.CENTER) : TextCache.get("settingsReset", "Use default", new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 375), Fonts.get_volter(), new lemongine.Color(-3407872), 1, lemongine.TextAlignment.CENTER);
        a.layer = this.renderLayerBase + 6;
        this.scene.draw(a);
        a = Main.addSimpleButtonBetter("settingsBackToMenu", this.buttonEntity, this.scene.get_width() / 2 - 134 - 66 | 0, this.scene.get_height() / 2 - 207 + 359 | 0, 132, 30, 1.77, function () {
            b.bindKey = "";
            b.callBackCallback();
        }) ? TextCache.get("settingsBackToMenu", "Back to menu", new lemongine.Point(this.scene.get_width() / 2 - 134 + 2.77, this.scene.get_height() / 2 - 207 + 376.77), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("settingsBackToMenu", "Back to menu", new lemongine.Point(this.scene.get_width() / 2 - 134 + 1, this.scene.get_height() / 2 - 207 + 375), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.CENTER, 1.5);
        a.layer = this.renderLayerBase + 6;
        this.scene.draw(a);
        if ("" != this.bindKey) {
            a = -1;
            for (var c = Main.Instance.getIsDown().keys(); c.hasNext();) {
                a = this.keyCodeToInt(c.next());
                break;
            }
            if (0 <= a) {
                c = !1;
                for (var d = Object.keys(GlobalSave.keyBindings.h), f = d.length, l = 0; l < f;) {
                    var m = d[l++];
                    m != this.bindKey && GlobalSave.keyBindings.h[m].h.id == a && ("down" != m && "down2" != m || "down" != this.bindKey && "down2" != this.bindKey) && (0 != GlobalSave.useRightClickKey || "secondClick" != m && "altClick" != m || "secondClick" != this.bindKey && "altClick" != this.bindKey) && (c = !0);
                }
                1 != c && (c = GlobalSave.keyBindings, d = this.bindKey, f = new haxe.ds.StringMap(), f.h.id = a, a = this.getKeyNameOfID(a), f.h.name = a, c.h[d] = Game.makeDynamicMap(f), this.bindKey = "");
            }
        }
        this.keybindButton("inventory", "Open inventory", this.scene.get_width() / 2 - 276 + 72 | 0, this.scene.get_height() / 2 - 207 + 91 | 0);
        this.keybindButton("dropItem", "Drop item", this.scene.get_width() / 2 - 276 + 72 | 0, this.scene.get_height() / 2 - 207 + 121 | 0);
        this.keybindButton("tasks", "Open task list", this.scene.get_width() / 2 - 276 + 72 | 0, this.scene.get_height() / 2 - 207 + 151 | 0);
        this.keybindButton("openHelp", "Open help", this.scene.get_width() / 2 - 276 + 72 | 0, this.scene.get_height() / 2 - 207 + 181 | 0);
        this.keybindButton("commands", "Commands", this.scene.get_width() / 2 - 276 + 72 | 0, this.scene.get_height() / 2 - 207 + 211 | 0);
        this.keybindButton("gui", "Hide/show GUI", this.scene.get_width() / 2 - 276 + 72 | 0, this.scene.get_height() / 2 - 207 + 241 | 0);
        this.keybindButton("screenshot", "Take screenshot", this.scene.get_width() / 2 - 276 + 72 | 0, this.scene.get_height() / 2 - 207 + 271 | 0);
        this.keybindButton("pick", "Pick block", this.scene.get_width() / 2 - 276 + 72 | 0, this.scene.get_height() / 2 - 207 + 301 | 0);
        this.keybindButton("left", "Move left", this.scene.get_width() / 2 - 276 + 271 | 0, this.scene.get_height() / 2 - 207 + 91 | 0);
        this.keybindButton("right", "Move right", this.scene.get_width() / 2 - 276 + 271 | 0, this.scene.get_height() / 2 - 207 + 121 | 0);
        this.keybindButton("up", "Jump", this.scene.get_width() / 2 - 276 + 271 | 0, this.scene.get_height() / 2 - 207 + 151 | 0);
        UI.checkbox(this.buttonEntity, "useSpacebar", GlobalSave.spaceJump, this.scene.get_width() / 2 - 276 + 389 | 0, this.scene.get_height() / 2 - 207 + 155 | 0, function () {
            GlobalSave.spaceJump = !GlobalSave.spaceJump;
        }, !1, 90);
        a = TextCache.get("keybindJumpSpacebarLabel", "Spacebar", new lemongine.Point((this.scene.get_width() / 2 - 276 + 271 | 0) + 140, (this.scene.get_height() / 2 - 207 + 151 | 0) + 5), Fonts.get_volter(), lemongine.Color.white, 1.4, lemongine.TextAlignment.LEFT, 1.5);
        a.layer = this.renderLayerBase + 6;
        this.scene.draw(a);
        this.keybindButton("down", "Sneak", this.scene.get_width() / 2 - 276 + 271 | 0, this.scene.get_height() / 2 - 207 + 181 | 0);
        this.keybindButton("down2", "Fly downwards", this.scene.get_width() / 2 - 276 + 271 | 0, this.scene.get_height() / 2 - 207 + 211 | 0);
        this.keybindButton("secondClick", "", this.scene.get_width() / 2 - 276 + 271 | 0, this.scene.get_height() / 2 - 207 + 241 | 0);
        UI.checkbox(this.buttonEntity, "useToRightClick", GlobalSave.useRightClickKey, this.scene.get_width() / 2 - 276 + 339 | 0, this.scene.get_height() / 2 - 207 + 245 | 0, function () {
            GlobalSave.useRightClickKey = !GlobalSave.useRightClickKey;
            GlobalSave.completedTutorial = !1;
            if (GlobalSave.useRightClickKey) {
                if (GlobalSave.keyBindings.h.secondClick.h.id == GlobalSave.keyBindings.h.altClick.h.id) {
                    var a = new haxe.ds.StringMap();
                    a.h.id = -2;
                    a.h.name = "None";
                    GlobalSave.keyBindings.h.altClick = Game.makeDynamicMap(a);
                }
            } else -2 == GlobalSave.keyBindings.h.altClick.h.id && (a = new haxe.ds.StringMap(), a.h.id = GlobalSave.keyBindings.h.secondClick.h.id, a.h.name = GlobalSave.keyBindings.h.secondClick.h.name, GlobalSave.keyBindings.h.altClick = Game.makeDynamicMap(a));
        }, !1, 152);
        a = TextCache.get("keybindsecondClickLabel", "Use for right-click", new lemongine.Point((this.scene.get_width() / 2 - 276 + 271 | 0) + 90, (this.scene.get_height() / 2 - 207 + 241 | 0) + 5), Fonts.get_volter(), lemongine.Color.white, 1.4, lemongine.TextAlignment.LEFT, 1.5);
        a.layer = this.renderLayerBase + 6;
        this.scene.draw(a);
        this.keybindButton("altClick", "Alt. click action", this.scene.get_width() / 2 - 276 + 271 | 0, this.scene.get_height() / 2 - 207 + 271 | 0);
        this.buttonEntity.resetUnusedQuads();
        this.scene.draw(this.buttonEntity);
    },
    keybindButton: function (b, a, c, d) {
        var f = this;
        var g = this.getKeyName(b);
        this.bindKey == b && (g = G.gt(20, G.toFloat(Main.Instance.tick) % G.toFloat(40) | 0) ? "> " + g + " <" : ">" + g + "<");
        g = Main.addSimpleButtonBetter("keybind" + b, this.buttonEntity, c, d, 60, 22, 1, function () {
            f.bindKey = b;
        }) ? TextCache.get("keybind" + b, g, new lemongine.Point(c + 30 + 1 + 1, d + 11 + 1 + 1), Fonts.get_volter(), lemongine.Color.white, 1.3, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("keybind" + b, g, new lemongine.Point(c + 30 + 1, d + 11 + 1), Fonts.get_volter(), lemongine.Color.white, 1.3, lemongine.TextAlignment.CENTER, 1.5);
        g.layer = this.renderLayerBase + 6;
        this.scene.draw(g);
        "" != a && (g = TextCache.get("keybind" + b + "Label", a, new lemongine.Point(c + 60 + 8, d + 5), Fonts.get_volter(), lemongine.Color.white, 1.4, lemongine.TextAlignment.LEFT, 1.5), g.layer = this.renderLayerBase + 6, this.scene.draw(g));
    },
    getKeyName: function (b) {
        return null == GlobalSave.keyBindings.h[b] ? "None" : this.getKeyNameOfID(GlobalSave.keyBindings.h[b].h.id);
    },
    getKeyNameOfID: function (b) {
        if (null == this.keyObject) {
            this.keyObject = new haxe.ds.IntMap();
            for (var a = 0, c = this.keyNames.length; a < c;) {
                var d = a++;
                this.keyObject.h[this.keyValues[d]] = this.keyNames[d];
            }
        }
        return this.keyObject.h[b];
    },
    keyCodeToInt: function (b) {
        if (null == this.keyToIntObject) {
            this.keyToIntObject = new haxe.ds.IntMap();
            for (var a = GlobalSave.intToKey.keys(); a.hasNext();) {
                var c = a.next();
                this.keyToIntObject.h[GlobalSave.intToKey.h[c]] = c;
            }
        }
        return null == this.keyToIntObject.h[b] ? -2 : this.keyToIntObject.h[b];
    },
    runSkinsFrame: function () {
        var b = this;
        if (null == this.skinSearchManager) {
            this.skinSearchManager = new SkinSearchManager();
            var a = this.skinSearchManager.viewer.skinTexture,
                c = shader.BlockShader.getShader(shader.BlendMode.NORMAL),
                d = new haxe.ds.StringMap(),
                f = lemongine.Mathz.repeatArray([1], 24);
            d.h.color = f;
            f = lemongine.Mathz.repeatArray([0], 24);
            d.h.colorOffset = f;
            this.skinPreviewEntity = new lemongine.QuadPoolEntity(a, null, c, d);
            this.skinPreviewEntity.isTransparent = !0;
            this.skinPreviewEntity.layer = this.renderLayerBase + 6;
            a = SkinLoader.frames.skin;
            c = shader.BlockShader.getShader(shader.BlendMode.NORMAL);
            d = new haxe.ds.StringMap();
            f = lemongine.Mathz.repeatArray([1], 24);
            d.h.color = f;
            f = lemongine.Mathz.repeatArray([0], 24);
            d.h.colorOffset = f;
            this.mainSkinEntity = new lemongine.QuadPoolEntity(a, null, c, d);
            this.mainSkinEntity.isTransparent = !0;
            this.mainSkinEntity.layer = this.renderLayerBase + 6;
        }
        this.scene.draw(this.blackBoxWithRadius);
        var l = TextCache.get("skinsText", "Skins", new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 52), Fonts.get_volter(), lemongine.Color.white, 3, lemongine.TextAlignment.CENTER);
        l.layer = this.renderLayerBase + 6;
        this.scene.draw(l);
        this.buttonEntity.clearPool();
        this.skinPreviewEntity.clearPool();
        if (1 == this.skinFrame) {
            l = Main.addSimpleButtonBetter("skinsDatabase", this.buttonEntity, this.scene.get_width() / 2 + 72 - 98 | 0, this.scene.get_height() / 2 - 207 + 127 - 16 | 0, 196, 32, 1.77, function () {
                b.gotoSkinFrame(2);
            }) ? TextCache.get("skinsDatabase", "Skin database", new lemongine.Point(this.scene.get_width() / 2 + 74.77, this.scene.get_height() / 2 - 207 + 129.77), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER) : TextCache.get("skinsDatabase", "Skin database", new lemongine.Point(this.scene.get_width() / 2 + 73, this.scene.get_height() / 2 - 207 + 128), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER);
            l.layer = this.renderLayerBase + 6;
            this.scene.draw(l);
            Main.addSimpleButtonBetter("skinsUpload", this.buttonEntity, this.scene.get_width() / 2 + 72 - 72 | 0, this.scene.get_height() / 2 - 207 + 163 - 16 | 0, 144, 32, 1.77, function () {
                b.gotoSkinFrame(3);
            }) ? (this.buttonEntity.addQuad(new lemongine.Vector3(this.scene.get_width() / 2 + 72 - 60 + 1.77, this.scene.get_height() / 2 - 207 + 163 - 9 + 1.77), new lemongine.Point(9, 176), new lemongine.Point(32, 26), !0, new lemongine.Point(19.6, 16.2)), l = TextCache.get("skinsUpload", "Upload skin", new lemongine.Point(this.scene.get_width() / 2 + 86.77, this.scene.get_height() / 2 - 207 + 165.77), Fonts.get_volter(), lemongine.Color.white, 1.6, lemongine.TextAlignment.CENTER, 1.5)) : (this.buttonEntity.addQuad(new lemongine.Vector3(this.scene.get_width() / 2 + 72 - 60, this.scene.get_height() / 2 - 207 + 163 - 9), new lemongine.Point(9, 176), new lemongine.Point(32, 26), !0, new lemongine.Point(19.6, 16.2)), l = TextCache.get("skinsUpload", "Upload skin", new lemongine.Point(this.scene.get_width() / 2 + 85, this.scene.get_height() / 2 - 207 + 164), Fonts.get_volter(), lemongine.Color.white, 1.6, lemongine.TextAlignment.CENTER, 1.5));
            l.layer = this.renderLayerBase + 6;
            this.scene.draw(l);
            l = Main.addSimpleButtonBetter("skinsDefault", this.buttonEntity, this.scene.get_width() / 2 + 72 - 72 | 0, this.scene.get_height() / 2 - 207 + 231 - 16 | 0, 144, 32, 1.77, function () {
                SkinLoader.loadDefault(!0, SkinLoader.frames);
            }) ? TextCache.get("skinsDefault", "Use default skin", new lemongine.Point(this.scene.get_width() / 2 + 74.77, this.scene.get_height() / 2 - 207 + 233.77), Fonts.get_volter(), lemongine.Color.white, 1.6, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("skinsDefault", "Use default skin", new lemongine.Point(this.scene.get_width() / 2 + 73, this.scene.get_height() / 2 - 207 + 232), Fonts.get_volter(), lemongine.Color.white, 1.6, lemongine.TextAlignment.CENTER, 1.5);
            l.layer = this.renderLayerBase + 6;
            this.scene.draw(l);
            l = TextCache.get("skinsDownloadDefault", "Download default skin", new lemongine.Point(this.scene.get_width() / 2 + 73, this.scene.get_height() / 2 - 207 + 261), Fonts.get_volter(), lemongine.Color.white, 1.3, lemongine.TextAlignment.CENTER, 1.5);
            if (0 < Main.buttonBehavior("skinsDownloadDefault", !1, this.scene.get_width() / 2 + 72 - 1.3 * l.calculatedWidth / 2 | 0, this.scene.get_height() / 2 - 207 + 260 - 8 | 0, 1.3 * l.calculatedWidth | 0, 16, function () {
                lemongine.Web.open("https://mineblocks.com/1/skins/download");
            }, !1)) {
                l.setColor(new lemongine.Color(-3355444));
                a = this.buttonEntity;
                c = new lemongine.Vector3(this.scene.get_width() / 2 + 72 - 1.3 * l.calculatedWidth / 2, this.scene.get_height() / 2 - 207 + 266);
                var h = new lemongine.Point(96, 0),
                    m = new lemongine.Point(1, 1),
                    x = new lemongine.Point(1.3 * l.calculatedWidth, 1);
                d = new haxe.ds.StringMap();
                f = lemongine.Mathz.repeatArray([.8, .8, .8, 1], 6);
                d.h.color = f;
                a.addQuad(c, h, m, !0, x, null, null, d);
            } else l.setColor(lemongine.Color.white), a = this.buttonEntity, c = this.scene.get_width() / 2 + 72 - 1.3 * l.calculatedWidth / 2, h = this.scene.get_height() / 2 - 207 + 266, m = 1.3 * l.calculatedWidth, a.addQuad(new lemongine.Vector3(c, h), new lemongine.Point(96, 0), new lemongine.Point(1, 1), !0, new lemongine.Point(m, 1));
            l.layer = this.renderLayerBase + 6;
            this.scene.draw(l);
            this.mainSkinEntity.clearPool();
            this.drawSkinViewer("main", this.mainSkinEntity, new lemongine.Point(0, 0), this.scene.get_width() / 2 - 276 + 98 | 0, this.scene.get_height() / 2 - 207 + 98 | 0, 114);
            this.mainSkinEntity.resetUnusedQuads();
            this.scene.draw(this.mainSkinEntity);
        } else if (2 == this.skinFrame) {
            if (l = Main.addSimpleButtonBetter("skinsBackToSkins", this.buttonEntity, this.scene.get_width() / 2 - 276 + 65 | 0, this.scene.get_height() / 2 - 207 + 278 | 0, 146, 22, 1.77, function () {
                b.gotoSkinFrame(1);
            }) ? TextCache.get("skinsBackToSkins", "Back to skin menu", new lemongine.Point(this.scene.get_width() / 2 - 276 + 140.77, this.scene.get_height() / 2 - 207 + 291.77), Fonts.get_volter(), lemongine.Color.white, 1.4, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("skinsBackToSkins", "Back to skin menu", new lemongine.Point(this.scene.get_width() / 2 - 276 + 139, this.scene.get_height() / 2 - 207 + 290), Fonts.get_volter(), lemongine.Color.white, 1.4, lemongine.TextAlignment.CENTER, 1.5), l.layer = this.renderLayerBase + 6, this.scene.draw(l), d = this.skinSearchManager.category, UI.radio(this.buttonEntity, "skinCategory1", this.skinSearchManager.category, "featured", this.scene.get_width() / 2 - 276 + 73 | 0, this.scene.get_height() / 2 - 207 + 87 | 0, function () {
                b.skinSearchManager.category = "featured";
            }, !1, 82), l = TextCache.get("skinCategory1", "Featured", new lemongine.Point(this.scene.get_width() / 2 - 276 + 91, this.scene.get_height() / 2 - 207 + 88), Fonts.get_volter(), lemongine.Color.white, 1.45, lemongine.TextAlignment.LEFT, 1.5), l.layer = this.renderLayerBase + 6, this.scene.draw(l), UI.radio(this.buttonEntity, "skinCategory2", this.skinSearchManager.category, "new", this.scene.get_width() / 2 - 276 + 165 | 0, this.scene.get_height() / 2 - 207 + 87 | 0, function () {
                b.skinSearchManager.category = "new";
            }, !1, 50), l = TextCache.get("skinCategory2", "New", new lemongine.Point(this.scene.get_width() / 2 - 276 + 183, this.scene.get_height() / 2 - 207 + 88), Fonts.get_volter(), lemongine.Color.white, 1.45, lemongine.TextAlignment.LEFT, 1.5), l.layer = this.renderLayerBase + 6, this.scene.draw(l), UI.radio(this.buttonEntity, "skinCategory3", this.skinSearchManager.category, "best", this.scene.get_width() / 2 - 276 + 222 | 0, this.scene.get_height() / 2 - 207 + 87 | 0, function () {
                b.skinSearchManager.category = "best";
            }, !1, 50), l = TextCache.get("skinCategory3", "Best", new lemongine.Point(this.scene.get_width() / 2 - 276 + 240, this.scene.get_height() / 2 - 207 + 88), Fonts.get_volter(), lemongine.Color.white, 1.45, lemongine.TextAlignment.LEFT, 1.5), l.layer = this.renderLayerBase + 6, this.scene.draw(l), this.skinSearchManager.category != d && (this.skinSearchManager.page = 1, this.skinSearchManager.loadPublicSkins(F(this, this.loadSkinCallback))), UI.textfield(this.buttonEntity, "skinSearch", this.searchEntry, this.scene.get_width() / 2 - 276 + 325 | 0, this.scene.get_height() / 2 - 207 + 83 | 0, 153, 1.45, function (a) {
                b.searchEntry = a;
            }), "" == this.searchEntry && (l = TextCache.get("skinSearchPlaceholder", "Search", new lemongine.Point(this.scene.get_width() / 2 - 276 + 329, this.scene.get_height() / 2 - 207 + 87), Fonts.get_volter(), new lemongine.Color(-12303292), 1.45, lemongine.TextAlignment.LEFT, 1.5), l.layer = this.renderLayerBase + 6, this.scene.draw(l)), 1 == Main.Instance.keyUp(13) && ("search" == this.skinSearchManager.category ? this.skinSearchManager.search != this.searchEntry && (this.skinSearchManager.search = this.searchEntry, this.skinSearchManager.page = 1, this.skinSearchManager.loadPublicSkins(F(this, this.loadSkinCallback))) : (this.skinSearchManager.category = "search", this.skinSearchManager.search = this.searchEntry, this.skinSearchManager.page = 1, this.skinSearchManager.loadPublicSkins(F(this, this.loadSkinCallback)))), 1 == this.skinPreviewerFrame) this.buttonEntity.add9Slice(new lemongine.Rectangle(this.scene.get_width() / 2 - 147, this.scene.get_height() / 2 - 207 + 126, 294, 126), new lemongine.Rectangle(0, 16, 16, 16), new lemongine.Rectangle(6, 6, 4, 4)), this.buttonEntity.addQuad(new lemongine.Vector3(), new lemongine.Point(41, 176), new lemongine.Point(32, 32), !0, null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, 32, 32), new lemongine.Matrix4().translate(-16, -16).rotate2D(30 * -Math.floor(G.toFloat(Main.Instance.tick) / G.toFloat(5)) / 180 * Math.PI).translate(this.scene.get_width() / 2 - 276 + 198, this.scene.get_height() / 2 - 207 + 170))), l = TextCache.get("skinLoading", "Loading...", new lemongine.Point(this.scene.get_width() / 2 - 276 + 227, this.scene.get_height() / 2 - 207 + 156), Fonts.get_volter(), lemongine.Color.white, 3), l.layer = this.renderLayerBase + 6, this.scene.draw(l), l = TextCache.get("skinLoadingSubtext", "If this takes too long, it might\nmean you don't have a connection\nto MineBlocks.com.", new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 218), Fonts.get_volter(), lemongine.Color.white, 1.4, lemongine.TextAlignment.CENTER, 1.5), l.layer = this.renderLayerBase + 6, this.scene.draw(l);else if (2 == this.skinPreviewerFrame) l = TextCache.get("skinError", "Couldn't connect to skin database!\n\nCheck your internet connection and make sure\nyou can access MineBlocks.com.", new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 200), Fonts.get_volter(), new lemongine.Color(-30720), 1.6, lemongine.TextAlignment.CENTER, 1.5), l.layer = this.renderLayerBase + 6, this.scene.draw(l);else if (3 == this.skinPreviewerFrame) {
                for (d = 0; 4 > d;) {
                    var q = [d++];
                    this.skinSearchManager.hasSkinAtIndex(q[0]) && (this.drawSkinViewer("list" + q[0], this.skinPreviewEntity, this.skinSearchManager.getSkinPositionByIndex(q[0]), this.scene.get_width() / 2 - 276 + 70 + 108 * q[0] | 0, this.scene.get_height() / 2 - 207 + 116 | 0, 82, !1), l = Main.addSimpleButtonBetter("skinListView" + q[0], this.buttonEntity, this.scene.get_width() / 2 - 276 + 70 + 108 * q[0] | 0, this.scene.get_height() / 2 - 207 + 227.9438202247191 | 0, 82, 22, 1.77, function (a) {
                        return function () {
                            b.selectedNum = a[0];
                            b.skinPreviewerFrame = 4;
                            null != b.viewerCache.h.details && (b.viewerCache.h.details.animation = 0);
                        };
                    }(q), !1) ? TextCache.get("skinListView" + q[0], "View", new lemongine.Point(this.scene.get_width() / 2 - 276 + 70 + 108 * q[0] + 43.77, this.scene.get_height() / 2 - 207 + 240.71382022471911), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("skinListView" + q[0], "View", new lemongine.Point(this.scene.get_width() / 2 - 276 + 70 + 108 * q[0] + 42, this.scene.get_height() / 2 - 207 + 238.9438202247191), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.CENTER, 1.5), l.layer = this.renderLayerBase + 6, this.scene.draw(l));
                }
                this.buttonEntity.add9Slice(new lemongine.Rectangle(this.scene.get_width() / 2 - 61, this.scene.get_height() / 2 - 207 + 257, 122, 37), new lemongine.Rectangle(0, 16, 16, 16), new lemongine.Rectangle(6, 6, 4, 4));
                d = Main.buttonBehavior("skinLeftArrow", !1, this.scene.get_width() / 2 - 50 | 0, this.scene.get_height() / 2 - 207 + 265 | 0, 16, 20, function () {
                    1 < b.skinSearchManager.page && (b.skinSearchManager.page--, b.skinSearchManager.loadPublicSkins(F(b, b.loadSkinCallback)));
                });
                this.buttonEntity.addQuad(new lemongine.Vector3(this.scene.get_width() / 2 - 50, this.scene.get_height() / 2 - 207 + 265), new lemongine.Point(75 + 16 * d, 176), new lemongine.Point(16, 20), !0);
                d = Main.buttonBehavior("skinRightArrow", !1, this.scene.get_width() / 2 + 50 - 16 | 0, this.scene.get_height() / 2 - 207 + 265 | 0, 16, 20, function () {
                    b.skinSearchManager.hasMorePages && (b.skinSearchManager.page++, b.skinSearchManager.loadPublicSkins(F(b, b.loadSkinCallback)));
                });
                this.buttonEntity.addQuad(new lemongine.Vector3(this.scene.get_width() / 2 + 50 - 16, this.scene.get_height() / 2 - 207 + 265), new lemongine.Point(75 + 16 * d, 176), new lemongine.Point(16, 20), !0, null, null, [1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1]);
                l = TextCache.get("skinPage", "Page " + this.skinSearchManager.page, new lemongine.Point(this.scene.get_width() / 2 + 1, this.scene.get_height() / 2 - 207 + 276), Fonts.get_volter(), lemongine.Color.white, 1.3, lemongine.TextAlignment.CENTER, 1.5);
                l.layer = this.renderLayerBase + 6;
                this.scene.draw(l);
            } else 4 == this.skinPreviewerFrame && (l = Main.addSimpleButtonBetter("skinsBackToSkins", this.buttonEntity, this.scene.get_width() / 2 - 276 + 65 | 0, this.scene.get_height() / 2 - 207 + 278 | 0, 146, 22, 1.77, function () {
                b.gotoSkinFrame(1);
            }) ? TextCache.get("skinsBackToSkins", "Back to skin menu", new lemongine.Point(this.scene.get_width() / 2 - 276 + 140.77, this.scene.get_height() / 2 - 207 + 291.77), Fonts.get_volter(), lemongine.Color.white, 1.4, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("skinsBackToSkins", "Back to skin menu", new lemongine.Point(this.scene.get_width() / 2 - 276 + 139, this.scene.get_height() / 2 - 207 + 290), Fonts.get_volter(), lemongine.Color.white, 1.4, lemongine.TextAlignment.CENTER, 1.5), l.layer = this.renderLayerBase + 6, this.scene.draw(l), this.buttonEntity.add9Slice(new lemongine.Rectangle(this.scene.get_width() / 2 - 195, this.scene.get_height() / 2 - 207 + 107, 390, 167), new lemongine.Rectangle(0, 16, 16, 16), new lemongine.Rectangle(6, 6, 4, 4)), this.drawSkinViewer("details", this.skinPreviewEntity, this.skinSearchManager.viewer.getTextureSlot(Std.string(this.skinSearchManager.currentResults[this.selectedNum].id)).rect.get_position(), this.scene.get_width() / 2 - 276 + 89 | 0, this.scene.get_height() / 2 - 207 + 115 | 0, 98, !0), l = TextCache.get("skinNameHeader", "Skin name:", new lemongine.Point(this.scene.get_width() / 2 - 276 + 200, this.scene.get_height() / 2 - 207 + 115), Fonts.get_volter(), new lemongine.Color(-3750202), 1.2, lemongine.TextAlignment.LEFT, 1.5), l.layer = this.renderLayerBase + 6, this.scene.draw(l), UI.dynamicText(this.buttonEntity, "skinName", this.skinSearchManager.currentResults[this.selectedNum].name, this.scene.get_width() / 2 - 276 + 200 - 1 | 0, this.scene.get_height() / 2 - 207 + 126 | 0, 260, 2), l = TextCache.get("skinAuthorHeader", "Author:", new lemongine.Point(this.scene.get_width() / 2 - 276 + 200, this.scene.get_height() / 2 - 207 + 150), Fonts.get_volter(), new lemongine.Color(-3750202), 1.2, lemongine.TextAlignment.LEFT, 1.5), l.layer = this.renderLayerBase + 6, this.scene.draw(l), UI.dynamicText(this.buttonEntity, "skinAuthor", this.skinSearchManager.currentResults[this.selectedNum].author, this.scene.get_width() / 2 - 276 + 200 - 1 | 0, this.scene.get_height() / 2 - 207 + 161 | 0, 260, 2), l = TextCache.get("skinIDHeader", "Skin ID:", new lemongine.Point(this.scene.get_width() / 2 - 276 + 200, this.scene.get_height() / 2 - 207 + 183), Fonts.get_volter(), new lemongine.Color(-3750202), 1.2, lemongine.TextAlignment.LEFT, 1.5), l.layer = this.renderLayerBase + 6, this.scene.draw(l), UI.dynamicText(this.buttonEntity, "skinID", Std.string(this.skinSearchManager.currentResults[this.selectedNum].id), this.scene.get_width() / 2 - 276 + 200 - 1 | 0, this.scene.get_height() / 2 - 207 + 194 | 0, 95, 2), l = TextCache.get("skinDateHeader", "Upload date:", new lemongine.Point(this.scene.get_width() / 2 - 276 + 305, this.scene.get_height() / 2 - 207 + 183), Fonts.get_volter(), new lemongine.Color(-3750202), 1.2, lemongine.TextAlignment.LEFT, 1.5), l.layer = this.renderLayerBase + 6, this.scene.draw(l), UI.dynamicText(this.buttonEntity, "skinDate", this.skinSearchManager.currentResults[this.selectedNum].dateString, this.scene.get_width() / 2 - 276 + 305 - 1 | 0, this.scene.get_height() / 2 - 207 + 194 | 0, 155, 2), l = Main.addSimpleButtonBetter("skinUse", this.buttonEntity, this.scene.get_width() / 2 - 276 + 200 | 0, this.scene.get_height() / 2 - 207 + 218 | 0, 128, 26, 1.77, function () {
                SkinLoader.getSkinFrom("https://mineblocks.com/1/skins/" + b.skinSearchManager.currentResults[b.selectedNum].id + ".png", SkinLoader.frames, 0, function (a) {
                    SkinLoader.msg = "You are now using '" + b.skinSearchManager.currentResults[b.selectedNum].name + "' as your skin!";
                    SkinLoader.saveSkinData();
                    b.mainSkinEntity.set_texture(SkinLoader.frames.skin);
                    null != Main.Instance.game && (Main.Instance.game.characterPool.setUniform("texSize2", [SkinLoader.frames.skin.width, SkinLoader.frames.skin.height]), ScavengerManager.packetToServer_changeDisplayName(ScavengerManager.username, !0));
                });
            }, !1) ? TextCache.get("skinUse", "Use this skin!", new lemongine.Point(this.scene.get_width() / 2 - 276 + 265.77, this.scene.get_height() / 2 - 207 + 233.77), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("skinUse", "Use this skin!", new lemongine.Point(this.scene.get_width() / 2 - 276 + 264, this.scene.get_height() / 2 - 207 + 232), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.CENTER, 1.5), l.layer = this.renderLayerBase + 6, this.scene.draw(l), l = Main.addSimpleButtonBetter("skinDownload", this.buttonEntity, this.scene.get_width() / 2 - 276 + 200 - 3 + 135 | 0, this.scene.get_height() / 2 - 207 + 218 | 0, 128, 26, 1.77, function () {
                lemongine.Web.open("https://mineblocks.com/1/skin/" + b.skinSearchManager.currentResults[b.selectedNum].id);
            }, !1) ? TextCache.get("skinDownload", "Download/View", new lemongine.Point(this.scene.get_width() / 2 - 276 + 200 - 3 + 201.77, this.scene.get_height() / 2 - 207 + 233.77), Fonts.get_volter(), lemongine.Color.white, 1.55, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("skinDownload", "Download/View", new lemongine.Point(this.scene.get_width() / 2 - 276 + 200 - 3 + 200, this.scene.get_height() / 2 - 207 + 232), Fonts.get_volter(), lemongine.Color.white, 1.55, lemongine.TextAlignment.CENTER, 1.5), l.layer = this.renderLayerBase + 6, this.scene.draw(l), l = Main.addSimpleButtonBetter("skinBackToList", this.buttonEntity, this.scene.get_width() / 2 - 276 + 330 - 60 | 0, this.scene.get_height() / 2 - 207 + 248 | 0, 120, 20, 1.77, function () {
                b.skinPreviewerFrame = 3;
            }, !1) ? TextCache.get("skinBackToList", "Back to skin list", new lemongine.Point(this.scene.get_width() / 2 - 276 + 332.77, this.scene.get_height() / 2 - 207 + 260.77), Fonts.get_volter(), lemongine.Color.white, 1.3, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("skinBackToList", "Back to skin list", new lemongine.Point(this.scene.get_width() / 2 - 276 + 331, this.scene.get_height() / 2 - 207 + 259), Fonts.get_volter(), lemongine.Color.white, 1.3, lemongine.TextAlignment.CENTER, 1.5), l.layer = this.renderLayerBase + 6, this.scene.draw(l));
        } else if (3 == this.skinFrame) if (1 == this.skinUploadFrame) l = TextCache.get("skinDownloadInstructions", "If you need the default skin, click the link below:", new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 100), Fonts.get_volter(), lemongine.Color.white, 1.4, lemongine.TextAlignment.CENTER, 1.5), l.layer = this.renderLayerBase + 6, this.scene.draw(l), l = TextCache.get("skinsDownloadDefault", "Download default skin", new lemongine.Point(this.scene.get_width() / 2 + 1, this.scene.get_height() / 2 - 207 + 123), Fonts.get_volter(), lemongine.Color.white, 1.6, lemongine.TextAlignment.CENTER, 1.5), 0 < Main.buttonBehavior("skinsDownloadDefault", !1, this.scene.get_width() / 2 - 1.6 * l.calculatedWidth / 2 | 0, this.scene.get_height() / 2 - 207 + 122 - 8 | 0, 1.6 * l.calculatedWidth | 0, 16, function () {
            lemongine.Web.open("https://mineblocks.com/1/skins/download");
        }, !1) ? (l.setColor(new lemongine.Color(-3355444)), a = this.buttonEntity, c = new lemongine.Vector3(this.scene.get_width() / 2 - 1.6 * l.calculatedWidth / 2, this.scene.get_height() / 2 - 207 + 129), h = new lemongine.Point(96, 0), m = new lemongine.Point(1, 1), x = new lemongine.Point(1.6 * l.calculatedWidth, 1), d = new haxe.ds.StringMap(), f = lemongine.Mathz.repeatArray([.8, .8, .8, 1], 6), d.h.color = f, a.addQuad(c, h, m, !0, x, null, null, d)) : (l.setColor(lemongine.Color.white), a = this.buttonEntity, c = this.scene.get_width() / 2 - 1.6 * l.calculatedWidth / 2, h = this.scene.get_height() / 2 - 207 + 129, m = 1.6 * l.calculatedWidth, a.addQuad(new lemongine.Vector3(c, h), new lemongine.Point(96, 0), new lemongine.Point(1, 1), !0, new lemongine.Point(m, 1))), l.layer = this.renderLayerBase + 6, this.scene.draw(l), Main.addSimpleButtonBetter("skinsLoadSkinImage", this.buttonEntity, this.scene.get_width() / 2 - 116.5 | 0, this.scene.get_height() / 2 - 207 + 182 - 18 | 0, 233, 36, 1.77, function () {
            b.loadSkinForUse();
        }) ? (this.buttonEntity.addQuad(new lemongine.Vector3(this.scene.get_width() / 2 - 95 + 1.77, this.scene.get_height() / 2 - 207 + 182 - 9 + 1.77), new lemongine.Point(9, 202), new lemongine.Point(32, 26), !0, new lemongine.Point(19.6, 16.2)), l = TextCache.get("skinsLoadSkinImage", "Load skin image", new lemongine.Point(this.scene.get_width() / 2 + 14.77, this.scene.get_height() / 2 - 207 + 184.77), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER)) : (this.buttonEntity.addQuad(new lemongine.Vector3(this.scene.get_width() / 2 - 95, this.scene.get_height() / 2 - 207 + 182 - 9), new lemongine.Point(9, 202), new lemongine.Point(32, 26), !0, new lemongine.Point(19.6, 16.2)), l = TextCache.get("skinsLoadSkinImage", "Load skin image", new lemongine.Point(this.scene.get_width() / 2 + 13, this.scene.get_height() / 2 - 207 + 183), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER)), l.layer = this.renderLayerBase + 6, this.scene.draw(l), Main.addSimpleButtonBetter("skinsSubmitToDatabase", this.buttonEntity, this.scene.get_width() / 2 - 116.5 | 0, this.scene.get_height() / 2 - 207 + 227 - 18 | 0, 233, 36, 1.77, function () {
            b.loadSkinForDatabase();
        }) ? (this.buttonEntity.addQuad(new lemongine.Vector3(this.scene.get_width() / 2 - 112 + 1.77, this.scene.get_height() / 2 - 207 + 227 - 9 + 1.77), new lemongine.Point(9, 176), new lemongine.Point(32, 26), !0, new lemongine.Point(19.6, 16.2)), l = TextCache.get("skinsSubmitToDatabase", "Submit to Database", new lemongine.Point(this.scene.get_width() / 2 + 12.77, this.scene.get_height() / 2 - 207 + 229.77), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER)) : (this.buttonEntity.addQuad(new lemongine.Vector3(this.scene.get_width() / 2 - 112, this.scene.get_height() / 2 - 207 + 227 - 9), new lemongine.Point(9, 176), new lemongine.Point(32, 26), !0, new lemongine.Point(19.6, 16.2)), l = TextCache.get("skinsSubmitToDatabase", "Submit to Database", new lemongine.Point(this.scene.get_width() / 2 + 11, this.scene.get_height() / 2 - 207 + 228), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER)), l.layer = this.renderLayerBase + 6, this.scene.draw(l), l = Main.addSimpleButtonBetter("skinsSubmitCancel", this.buttonEntity, this.scene.get_width() / 2 - 54 | 0, this.scene.get_height() / 2 - 207 + 284 - 12 | 0, 108, 24, 1.77, function () {
            b.gotoSkinFrame(1);
        }) ? TextCache.get("skinsSubmitCancel", "Cancel", new lemongine.Point(this.scene.get_width() / 2 + 2.77, this.scene.get_height() / 2 - 207 + 287.77), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("skinsSubmitCancel", "Cancel", new lemongine.Point(this.scene.get_width() / 2 + 1, this.scene.get_height() / 2 - 207 + 286), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.CENTER, 1.5), l.layer = this.renderLayerBase + 6, this.scene.draw(l);else {
            this.skinUploadProgressEntity.clearPool();
            for (d = 0; 6 > d;) {
                l = d++;
                if (0 == l) a = this.skinUploadProgressEntity, c = this.scene.get_width() / 2 + 68 * (-3 + l), h = this.scene.get_height() / 2 - 207 + 88, m = this.skinUploadFrame - 1 > l ? 20 : 0, a.addQuad(new lemongine.Vector3(c, h), new lemongine.Point(0, m), new lemongine.Point(68, 20));else if (5 == l) x = this.skinUploadProgressEntity, a = this.scene.get_width() / 2 + 68 * (-3 + l), m = this.scene.get_height() / 2 - 207 + 88, c = this.skinUploadFrame - 1 > l ? 20 : 0, x.addQuad(new lemongine.Vector3(a, m), new lemongine.Point(136, c), new lemongine.Point(68, 20));else {
                    x = this.skinUploadProgressEntity;
                    q = this.scene.get_width() / 2 + 68 * (-3 + l);
                    var r = this.scene.get_height() / 2 - 207 + 88;
                    m = this.skinUploadFrame - 1 > l ? 20 : 0;
                    x.addQuad(new lemongine.Vector3(q, r), new lemongine.Point(68, m), new lemongine.Point(68, 20));
                }
                l = TextCache.get("skinStep" + l, "1 2 3 4 5 DONE!".split(" ")[l], new lemongine.Point(this.scene.get_width() / 2 + 68 * (-3 + l) + 34, this.scene.get_height() / 2 - 207 + 98), Fonts.get_volter(), lemongine.Color.black, 2, lemongine.TextAlignment.CENTER);
                l.layer = this.renderLayerBase + 6;
                this.scene.draw(l);
            }
            this.skinUploadProgressEntity.addQuad(new lemongine.Vector3(this.scene.get_width() / 2 + 68 * (-3 + (this.skinUploadFrame - 2)) - 6, this.scene.get_height() / 2 - 207 + 88 - 10), new lemongine.Point(204, 0), new lemongine.Point(81, 40));
            q = !1;
            if (2 == this.skinUploadFrame) {
                q = !0;
                l = TextCache.get("skinStep1Instruction", "Check all animations for errors", new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 125), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER);
                l.layer = this.renderLayerBase + 6;
                this.scene.draw(l);
                this.skinUploadBlocksClip.clearPool();
                this.skinUploadSkinClip.clearPool();
                G.gt(G.toFloat(Main.Instance.tick) % G.toFloat(200) | 0, 50) ? (this.walkAnimation++, this.walkAnimation2++) : this.walkAnimation2 = 0;
                r = new lemongine.Rectangle();
                r.set(this.scene.get_width() / 2 - 205, this.scene.get_height() / 2 - 207 + 142, 70, 110);
                for (d = 0; 4 > d;) l = d++, this.addClippedQuad(this.skinUploadBlocksClip, new lemongine.Rectangle(32 * l - this.walkAnimation % 32, 86, 32, 32), Textures.getTexture("dirt"), r), this.addClippedQuad(this.skinUploadBlocksClip, new lemongine.Rectangle(32 * l - this.walkAnimation % 32, 86, 32, 32), Textures.getTexture("dirt", "grass"), r), a = this.skinUploadBlocksClip, c = new lemongine.Rectangle(32 * l - this.walkAnimation % 32, 54, 32, 32), h = Textures.getTexture("glass", "stained"), x = new haxe.ds.StringMap(), f = lemongine.Mathz.repeatArray([.5 * Math.sin(.7 * (l + Math.floor(this.walkAnimation / 32))) + .5, .5 * Math.sin(.8 * (l + Math.floor(this.walkAnimation / 32))) + .5, .5 * Math.sin(.9 * (l + Math.floor(this.walkAnimation / 32))) + .5, 1], 6), x.h.color = f, this.addClippedQuad(a, c, h, r, x), m = this.skinUploadBlocksClip, x = new lemongine.Rectangle(32 * l - this.walkAnimation % 32, 22, 32, 32), a = Textures.getTexture("glass", "stained"), c = new haxe.ds.StringMap(), f = lemongine.Mathz.repeatArray([.5 * Math.sin(.8 * (l + Math.floor(this.walkAnimation / 32))) + .5, .5 * Math.sin(.9 * (l + Math.floor(this.walkAnimation / 32))) + .5, .5 * Math.sin(.7 * (l + Math.floor(this.walkAnimation / 32))) + .5, 1], 6), c.h.color = f, this.addClippedQuad(m, x, a, r, c), m = this.skinUploadBlocksClip, c = new lemongine.Rectangle(32 * l - this.walkAnimation % 32, -10, 32, 32), x = Textures.getTexture("glass", "stained"), a = new haxe.ds.StringMap(), l = lemongine.Mathz.repeatArray([.5 * Math.sin(.9 * (l + Math.floor(this.walkAnimation / 32))) + .5, .5 * Math.sin(.7 * (l + Math.floor(this.walkAnimation / 32))) + .5, .5 * Math.sin(.8 * (l + Math.floor(this.walkAnimation / 32))) + .5, 1], 6), a.h.color = l, this.addClippedQuad(m, c, x, r, a);
                G.gte(50, G.toFloat(Main.Instance.tick) % G.toFloat(200) | 0) ? this.skinUploadSkinClip.addQuad(new lemongine.Vector3(35 + r.x + 24, 20 + r.y), Skin.idle, new lemongine.Point(16, 22), !0, new lemongine.Point(-48, 66)) : (a = 16 * (Math.floor(this.walkAnimation2 / 6.2 % 5) + 1), this.skinUploadSkinClip.addQuad(new lemongine.Vector3(35 + r.x + 24, 20 + r.y), new lemongine.Point(a, 0), new lemongine.Point(16, 22), !0, new lemongine.Point(-48, 66)));
                r.set(this.scene.get_width() / 2 - 205 + 80, this.scene.get_height() / 2 - 207 + 142, 70, 110);
                for (d = 0; 4 > d;) l = d++, this.addClippedQuad(this.skinUploadBlocksClip, new lemongine.Rectangle(32 * l - Math.floor(G.toFloat(Main.Instance.tick) / G.toFloat(2)) % 32, 86, 32, 32), Textures.getTexture("dirt"), r), this.addClippedQuad(this.skinUploadBlocksClip, new lemongine.Rectangle(32 * l - Math.floor(G.toFloat(Main.Instance.tick) / G.toFloat(2)) % 32, 86, 32, 32), Textures.getTexture("dirt", "grass"), r), a = this.skinUploadBlocksClip, c = new lemongine.Rectangle(32 * l - Math.floor(G.toFloat(Main.Instance.tick) / G.toFloat(2)) % 32, 54, 32, 32), h = Textures.getTexture("glass", "stained"), x = new haxe.ds.StringMap(), f = lemongine.Mathz.repeatArray([.5 * Math.sin(.7 * (l + Math.floor(G.toFloat(Main.Instance.tick) / G.toFloat(64)))) + .5, .5 * Math.sin(.8 * (l + Math.floor(G.toFloat(Main.Instance.tick) / G.toFloat(64)))) + .5, .5 * Math.sin(.9 * (l + Math.floor(G.toFloat(Main.Instance.tick) / G.toFloat(64)))) + .5, 1], 6), x.h.color = f, this.addClippedQuad(a, c, h, r, x), m = this.skinUploadBlocksClip, x = new lemongine.Rectangle(32 * l - Math.floor(G.toFloat(Main.Instance.tick) / G.toFloat(2)) % 32, 22, 32, 32), a = Textures.getTexture("glass", "stained"), c = new haxe.ds.StringMap(), f = lemongine.Mathz.repeatArray([.5 * Math.sin(.8 * (l + Math.floor(G.toFloat(Main.Instance.tick) / G.toFloat(64)))) + .5, .5 * Math.sin(.9 * (l + Math.floor(G.toFloat(Main.Instance.tick) / G.toFloat(64)))) + .5, .5 * Math.sin(.7 * (l + Math.floor(G.toFloat(Main.Instance.tick) / G.toFloat(64)))) + .5, 1], 6), c.h.color = f, this.addClippedQuad(m, x, a, r, c), m = this.skinUploadBlocksClip, c = new lemongine.Rectangle(32 * l - Math.floor(G.toFloat(Main.Instance.tick) / G.toFloat(2)) % 32, -10, 32, 32), x = Textures.getTexture("glass", "stained"), a = new haxe.ds.StringMap(), l = lemongine.Mathz.repeatArray([.5 * Math.sin(.9 * (l + Math.floor(G.toFloat(Main.Instance.tick) / G.toFloat(64)))) + .5, .5 * Math.sin(.7 * (l + Math.floor(G.toFloat(Main.Instance.tick) / G.toFloat(64)))) + .5, .5 * Math.sin(.8 * (l + Math.floor(G.toFloat(Main.Instance.tick) / G.toFloat(64)))) + .5, 1], 6), a.h.color = l, this.addClippedQuad(m, c, x, r, a);
                a = 16 * (Math.floor(G.toFloat(Main.Instance.tick) / G.toFloat(12) % 2) + 6);
                this.skinUploadSkinClip.addQuad(new lemongine.Vector3(35 + r.x + 24, 20 + r.y), new lemongine.Point(a, 0), new lemongine.Point(16, 22), !0, new lemongine.Point(-48, 66));
                r.set(this.scene.get_width() / 2 - 205 + 160, this.scene.get_height() / 2 - 207 + 142, 70, 110);
                a = this.buttonEntity;
                c = new lemongine.Vector3(r.x, r.y);
                h = new lemongine.Point(96, 0);
                m = new lemongine.Point(1, 1);
                x = new lemongine.Point(r.width, r.height);
                d = new haxe.ds.StringMap();
                f = lemongine.Mathz.repeatArray([.4588235294117647, .7294117647058823, .8509803921568627, 1], 6);
                d.h.color = f;
                a.addQuad(c, h, m, !0, x, null, null, d);
                this.addClippedQuad(this.skinUploadBlocksClip, new lemongine.Rectangle(0, 86, 32, 32), Textures.getTexture("dirt"), r);
                this.addClippedQuad(this.skinUploadBlocksClip, new lemongine.Rectangle(0, 86, 32, 32), Textures.getTexture("dirt", "grass"), r);
                this.addClippedQuad(this.skinUploadBlocksClip, new lemongine.Rectangle(32, 86, 32, 32), Textures.getTexture("dirt"), r);
                this.addClippedQuad(this.skinUploadBlocksClip, new lemongine.Rectangle(32, 86, 32, 32), Textures.getTexture("dirt", "grass"), r);
                this.addClippedQuad(this.skinUploadBlocksClip, new lemongine.Rectangle(64, 86, 32, 32), Textures.getTexture("dirt"), r);
                this.addClippedQuad(this.skinUploadBlocksClip, new lemongine.Rectangle(64, 86, 32, 32), Textures.getTexture("dirt", "grass"), r);
                d = Math.floor(Math.max(0, 60 - Math.pow(G.toFloat(G.toFloat(Main.Instance.tick) % G.toFloat(100) | 0) / G.toFloat(2) - 25, 2) / 2));
                0 == d ? G.gt(100, G.toFloat(Main.Instance.tick) % G.toFloat(200) | 0) && G.gt((G.toFloat(Main.Instance.tick) % G.toFloat(100) | 0) - 50, 0) && G.gt(36, (G.toFloat(Main.Instance.tick) % G.toFloat(100) | 0) - 50) ? this.skinUploadSkinClip.addQuad(new lemongine.Vector3(35 + r.x + 24, 20 + r.y - d), new lemongine.Point(224, 0), new lemongine.Point(16, 22), !0, new lemongine.Point(-48, 66)) : this.skinUploadSkinClip.addQuad(new lemongine.Vector3(35 + r.x + 24, 20 + r.y - d), new lemongine.Point(0, 0), new lemongine.Point(16, 22), !0, new lemongine.Point(-48, 66)) : this.addClippedQuad(this.skinUploadSkinClip, new lemongine.Rectangle(11, 20 - d, 48, 66), new lemongine.Rectangle(128, 0, 16, 22), r, null, !0);
                r.set(this.scene.get_width() / 2 - 205 + 240, this.scene.get_height() / 2 - 207 + 142, 70, 110);
                a = this.buttonEntity;
                c = new lemongine.Vector3(r.x, r.y);
                h = new lemongine.Point(96, 0);
                m = new lemongine.Point(1, 1);
                x = new lemongine.Point(r.width, r.height);
                d = new haxe.ds.StringMap();
                f = lemongine.Mathz.repeatArray([.4588235294117647, .7294117647058823, .8509803921568627, 1], 6);
                d.h.color = f;
                a.addQuad(c, h, m, !0, x, null, null, d);
                for (d = 0; 3 > d;) l = d++, 1 < l ? (this.addClippedQuad(this.skinUploadBlocksClip, new lemongine.Rectangle(32 * l - 3, 86, 32, 32), Textures.getTexture("dirt"), r), this.addClippedQuad(this.skinUploadBlocksClip, new lemongine.Rectangle(32 * l - 3, 54, 32, 32), Textures.getTexture("dirt"), r), this.addClippedQuad(this.skinUploadBlocksClip, new lemongine.Rectangle(32 * l - 3, 22, 32, 32), Textures.getTexture("dirt"), r), this.addClippedQuad(this.skinUploadBlocksClip, new lemongine.Rectangle(32 * l - 3, 22, 32, 32), Textures.getTexture("dirt", "grass"), r)) : (this.addClippedQuad(this.skinUploadBlocksClip, new lemongine.Rectangle(32 * l - 3, 86, 32, 32), Textures.getTexture("dirt"), r), this.addClippedQuad(this.skinUploadBlocksClip, new lemongine.Rectangle(32 * l - 3, 86, 32, 32), Textures.getTexture("dirt", "grass"), r));
                a = 16 * (Math.floor(G.toFloat(Main.Instance.tick) / G.toFloat(5) % 5) + 9);
                this.skinUploadSkinClip.addQuad(new lemongine.Vector3(61 + r.x, 20 + r.y), new lemongine.Point(a, 0), new lemongine.Point(16, 22), !0, new lemongine.Point(-48, 66));
                this.skinUploadPig.transform.reset().scale(-3, 3).translate(30 + r.get_right(), 56 + r.y);
                this.skinUploadSkinClip.addQuad(new lemongine.Vector3(48 + r.get_right() + 2, r.y), new lemongine.Point(240, 0), new lemongine.Point(16, 22), !0, new lemongine.Point(-48, 66));
                this.skinUploadBlocksClip.addQuad(new lemongine.Vector3(r.get_right() + 50 - 9, 71 + r.y), Textures.getTexture("minecart").get_position(), Textures.getTexture("minecart").get_size(), !0, new lemongine.Point().add(Textures.getTexture("minecart").get_size()).multiply(2.2));
                this.skinUploadSkinClip.addQuad(new lemongine.Vector3(48 + r.get_right() + 50, 44 + r.y), new lemongine.Point(256, 0), new lemongine.Point(16, 22), !0, new lemongine.Point(-48, 66));
                this.skinUploadBlocksClip.resetUnusedQuads();
                this.skinUploadSkinClip.resetUnusedQuads();
                this.scene.draw(this.skinUploadBlocksClip);
                this.scene.draw(this.skinUploadPig);
                this.scene.draw(this.skinUploadSkinClip);
            } else 3 == this.skinUploadFrame ? (q = !0, l = TextCache.get("skinStep2Instruction", "Check for missing eyes or weird boxes", new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 125), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER), l.layer = this.renderLayerBase + 6, this.scene.draw(l), this.skinUploadSkinClip.clearPool(), r = new lemongine.Rectangle(this.scene.get_width() / 2 - 205, this.scene.get_height() / 2 - 207 + 142, 410, 110), l = Math.floor(G.toFloat(Main.Instance.tick) / G.toFloat(10)) % 8 / 8, a = this.buttonEntity, c = new lemongine.Vector3(r.x, r.y), h = new lemongine.Point(73, 176), m = new lemongine.Point(2, 2), x = r.get_size(), d = new haxe.ds.StringMap(), f = lemongine.Mathz.repeatArray([.7803921568627451, .6470588235294118, .5098039215686274, 1], 6), d.h.color = f, a.addQuad(c, h, m, !0, x, null, [-l, l, -l, l + 13.75, -l + 51.25, l, -l + 51.25, l, -l, l + 13.75, -l + 51.25, l + 13.75], d), this.addClippedQuad(this.skinUploadSkinClip, new lemongine.Rectangle(-64 + r.width / 4 - 32, -24, 128, 176), new lemongine.Rectangle(0, 0, 16, 22), r, null, !0), this.addClippedQuad(this.skinUploadSkinClip, new lemongine.Rectangle(-64 + r.width / 4 * 2, -48, 128, 176), new lemongine.Rectangle(128, 0, 16, 22), r, null, !0), this.addClippedQuad(this.skinUploadSkinClip, new lemongine.Rectangle(r.width / 4 * 3 + -32, -72, 128, 176), new lemongine.Rectangle(224, 0, 16, 22), r, null, !0), this.skinUploadSkinClip.resetUnusedQuads(), this.scene.draw(this.skinUploadSkinClip)) : 4 == this.skinUploadFrame ? (q = !1, l = TextCache.get("skinStep3Instruction", "Name of skin:", new lemongine.Point(this.scene.get_width() / 2 - 276 + 81, this.scene.get_height() / 2 - 207 + 128), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.LEFT), l.layer = this.renderLayerBase + 6, this.scene.draw(l), UI.textfield(this.buttonEntity, "skinNameEntry", this.skinNameEntry, this.scene.get_width() / 2 - 276 + 81 | 0, this.scene.get_height() / 2 - 207 + 155 | 0, 206, 2, function (a) {
                b.skinNameEntry = a;
            }, 25, "a-zA-Z0-9.!_@#$&()+/\\'\\\": "), l = TextCache.get("skinStep3English", "Use English, please.", new lemongine.Point(this.scene.get_width() / 2 - 276 + 81, this.scene.get_height() / 2 - 207 + 183), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.LEFT, 1.5), l.layer = this.renderLayerBase + 6, this.scene.draw(l), d = "Auto-capitalize", 0 != lemongine.Helpers.trim(this.skinNameEntry).length && (l = this.autocap(this.skinNameEntry), d = 'Use "' + l + '"', this.skinNameCapitalization ? 3 <= l.length && 27 >= l.length && (q = !0) : 3 <= lemongine.Helpers.trim(this.skinNameEntry).length && 27 >= lemongine.Helpers.trim(this.skinNameEntry).length && (q = !0)), l = TextCache.get("skinStep3Autocapitalize", d, new lemongine.Point(this.scene.get_width() / 2 - 276 + 106, this.scene.get_height() / 2 - 207 + 212), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.LEFT, 1.5), l.layer = this.renderLayerBase + 6, this.scene.draw(l), UI.checkbox(this.buttonEntity, "skinNameCapitalization", this.skinNameCapitalization, this.scene.get_width() / 2 - 276 + 81 | 0, this.scene.get_height() / 2 - 207 + 212 | 0, function () {
                b.skinNameCapitalization = !b.skinNameCapitalization;
            }, !1, 1.7 * l.calculatedWidth + 25 | 0)) : 5 == this.skinUploadFrame ? (q = !1, l = TextCache.get("skinStep4Instruction", "Your author name:", new lemongine.Point(this.scene.get_width() / 2 - 276 + 81, this.scene.get_height() / 2 - 207 + 141), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.LEFT), l.layer = this.renderLayerBase + 6, this.scene.draw(l), UI.textfield(this.buttonEntity, "authorNameEntry", this.authorEntry, this.scene.get_width() / 2 - 276 + 81 | 0, this.scene.get_height() / 2 - 207 + 167 | 0, 206, 2, function (a) {
                b.authorEntry = a;
            }, 24), l = TextCache.get("skinStep4OR", "OR", new lemongine.Point(this.scene.get_width() / 2 - 276 + 310, this.scene.get_height() / 2 - 207 + 170), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.LEFT, 1.5), l.layer = this.renderLayerBase + 6, this.scene.draw(l), UI.checkbox(this.buttonEntity, "skinNameAnonymous", "Anonymous" == this.authorEntry, this.scene.get_width() / 2 - 276 + 355 | 0, this.scene.get_height() / 2 - 207 + 169 | 0, function () {
                b.authorEntry = "Anonymous" == b.authorEntry ? "" : "Anonymous";
                UI.fields.h.authorNameEntry.input.set_text(b.authorEntry);
            }, !1, 122), l = TextCache.get("skinStep4Anonymous", "Anonymous", new lemongine.Point(this.scene.get_width() / 2 - 276 + 382, this.scene.get_height() / 2 - 207 + 170), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.LEFT, 1.5), l.layer = this.renderLayerBase + 6, this.scene.draw(l), d = "Auto-capitalize", 0 != lemongine.Helpers.trim(this.authorEntry).length && (l = this.autocap(this.authorEntry), d = 'Use "' + l + '"', this.skinNameCapitalization ? 3 <= l.length && 24 >= l.length && (q = !0) : 3 <= lemongine.Helpers.trim(this.authorEntry).length && 24 >= lemongine.Helpers.trim(this.authorEntry).length && (q = !0)), l = TextCache.get("skinStep4Autocapitalize", d, new lemongine.Point(this.scene.get_width() / 2 - 276 + 106, this.scene.get_height() / 2 - 207 + 212), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.LEFT, 1.5), l.layer = this.renderLayerBase + 6, this.scene.draw(l), UI.checkbox(this.buttonEntity, "skinNameCapitalization", this.authorCapitalization, this.scene.get_width() / 2 - 276 + 81 | 0, this.scene.get_height() / 2 - 207 + 212 | 0, function () {
                b.authorCapitalization = !b.authorCapitalization;
            }, !1, 1.7 * l.calculatedWidth + 25 | 0)) : 6 == this.skinUploadFrame ? (q = !0, l = TextCache.get("skinStep5Instruction", "Does everything look perfect?", new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 125), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER), l.layer = this.renderLayerBase + 6, this.scene.draw(l), l = TextCache.get("skinStep5Subtitle", "Please don't submit if it's not finished!", new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 144), Fonts.get_volter(), lemongine.Color.white, 1.45, lemongine.TextAlignment.CENTER), l.layer = this.renderLayerBase + 6, this.scene.draw(l), l = TextCache.get("skinStep5Title", this.skinNameCapitalization ? this.autocap(this.skinNameEntry) : this.skinNameEntry, new lemongine.Point(this.scene.get_width() / 2 - 276 + 234, this.scene.get_height() / 2 - 207 + 166), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.LEFT), l.layer = this.renderLayerBase + 6, this.scene.draw(l), l = TextCache.get("skinStep5By", "By", new lemongine.Point(this.scene.get_width() / 2 - 276 + 234, this.scene.get_height() / 2 - 207 + 189), Fonts.get_volter(), new lemongine.Color(-3355444), 2, lemongine.TextAlignment.LEFT), l.layer = this.renderLayerBase + 6, this.scene.draw(l), l = TextCache.get("skinStep5Author", this.authorCapitalization ? this.autocap(this.authorEntry) : this.authorEntry, new lemongine.Point(this.scene.get_width() / 2 - 276 + 266, this.scene.get_height() / 2 - 207 + 189), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.LEFT), l.layer = this.renderLayerBase + 6, this.scene.draw(l), this.skinUploadSkinClip.clearPool(), r = new lemongine.Rectangle(this.scene.get_width() / 2 - 205, this.scene.get_height() / 2 - 207 + 142, 410, 110), a = 16 * (Math.floor(G.toFloat(Main.Instance.tick) / 6.2 % 5) + 1), this.skinUploadSkinClip.addQuad(new lemongine.Vector3(149 + r.x, 12 + r.y), new lemongine.Point(a, 0), new lemongine.Point(16, 22), !0, new lemongine.Point(-48, 66)), a = 272, c = 22, this.skinUploadSkinClip.addQuad(new lemongine.Vector3(r.x + r.width / 2 - 136, r.y + r.height - 22), new lemongine.Point(), new lemongine.Point(272, 22), !0, new lemongine.Point(a, c)), this.skinUploadSkinClip.resetUnusedQuads(), this.scene.draw(this.skinUploadSkinClip)) : 7 == this.skinUploadFrame && (this.skinUploaded ? (l = this.skinUploadFailed ? TextCache.get("skinStep7Instruction", "Sorry, an error occurred when uploading your skin.", new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 178), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER) : TextCache.get("skinStep7Instruction", "Whoohoo!\nYour skin has been submitted.\n\nIt will now be moderated by staff,\nbefore showing up publicly.\n\nIt may take a while! :)", new lemongine.Point(this.scene.get_width() / 2 - 276 + 73, this.scene.get_height() / 2 - 207 + 118), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.LEFT), l.layer = this.renderLayerBase + 6, this.scene.draw(l), Main.addSimpleButtonBetter("skinUploadFinalBack", this.buttonEntity, this.scene.get_width() / 2 - 77 | 0, this.scene.get_height() / 2 - 207 + 265 | 0, 154, 36, 1.77, function () {
                b.gotoSkinFrame(1);
            }), l = TextCache.get("skinUploadNext", "Back to Skins", new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 284), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER)) : (this.buttonEntity.addQuad(new lemongine.Vector3(), new lemongine.Point(41, 176), new lemongine.Point(32, 32), !0, null, lemongine.Geom.quadMatrixHelper(new lemongine.Rectangle(0, 0, 32, 32), new lemongine.Matrix4().translate(-16, -16).rotate2D(30 * -Math.floor(G.toFloat(Main.Instance.tick) / G.toFloat(5)) / 180 * Math.PI).scale2D(2).translate(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 197))), l = TextCache.get("skinUploading", "Submitting...", new lemongine.Point(this.scene.get_width() / 2, this.scene.get_height() / 2 - 207 + 251), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER)), l.layer = this.renderLayerBase + 6, this.scene.draw(l));
            7 > this.skinUploadFrame && (l = Main.addSimpleButtonBetter("skinUploadPrevious", this.buttonEntity, this.scene.get_width() / 2 - 276 + 67 | 0, this.scene.get_height() / 2 - 207 + 265 | 0, 154, 36, 1.77, function () {
                b.gotoSkinUploadFrame(b.skinUploadFrame - 1);
            }) ? TextCache.get("skinUploadPrevious", "Back", new lemongine.Point(this.scene.get_width() / 2 - 276 + 145.77, this.scene.get_height() / 2 - 207 + 285.77), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER) : TextCache.get("skinUploadPrevious", "Back", new lemongine.Point(this.scene.get_width() / 2 - 276 + 144, this.scene.get_height() / 2 - 207 + 284), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER), l.layer = this.renderLayerBase + 6, this.scene.draw(l), l = Main.addSimpleButtonBetter("skinUploadNext", this.buttonEntity, this.scene.get_width() / 2 + 276 - 67 - 154 | 0, this.scene.get_height() / 2 - 207 + 265 | 0, 154, 36, 1.77, function () {
                if (6 == b.skinUploadFrame) {
                    var a = haxe.crypto.Base64.encode(b.skinForDatabase.data.encode(lime.graphics.ImageFileFormat.PNG)),
                        c = Math.floor(1E13 * Math.random());
                    b.skinUploaded = !1;
                    b.skinUploadFailed = !1;
                    var d = b.authorCapitalization ? b.autocap(b.authorEntry) : b.authorEntry,
                        f = b.skinNameCapitalization ? b.autocap(b.skinNameEntry) : b.skinNameEntry,
                        k = new haxe.ds.StringMap();
                    k.h.Filedata = a;
                    lemongine.Web.send("https://mineblocks.com/1/scripts/skinUpload?version=3&id=" + c + "&author=" + d + "&title=" + f + "&public=1", !0, k, function (a) {
                        "-" == HxOverrides.substr(a, 0, 1) ? (SkinLoader.msg = "An error occurred! " + HxOverrides.substr(a, 1, a.length - 1) + ".", b.skinUploadFailed = !0) : SkinLoader.getSkinFrom("https://mineblocks.com/1/skins/" + Std.parseInt(a.split(":")[0]) + ".png", SkinLoader.frames, -1);
                        b.skinUploaded = !0;
                    }, function (a) {
                        SkinLoader.msg = "Error uploading skin! " + a;
                        b.skinUploadFailed = !0;
                    });
                    b.gotoSkinUploadFrame(7);
                } else b.gotoSkinUploadFrame(b.skinUploadFrame + 1);
            }, !q) ? TextCache.get("skinUploadNext", 6 == this.skinUploadFrame ? "Submit!" : "Next", new lemongine.Point(this.scene.get_width() / 2 + 276 - 67 - 77 + 1.77, this.scene.get_height() / 2 - 207 + 285.77), Fonts.get_volter(), lemongine.Color.white, 2, lemongine.TextAlignment.CENTER) : TextCache.get("skinUploadNext", 6 == this.skinUploadFrame ? "Submit!" : "Next", new lemongine.Point(this.scene.get_width() / 2 + 276 - 67 - 77, this.scene.get_height() / 2 - 207 + 284), Fonts.get_volter(), q ? lemongine.Color.white : Colors.palette.grey7, 2, lemongine.TextAlignment.CENTER), l.layer = this.renderLayerBase + 6, this.scene.draw(l), Main.addSimpleButtonBetter("skinUploadSubmit", this.buttonEntity, this.scene.get_width() / 2 - 33 | 0, this.scene.get_height() / 2 - 207 + 265 | 0, 66, 36, 1.77, function () {
                b.loadSkinForDatabase();
            }) ? this.buttonEntity.addQuad(new lemongine.Vector3(this.scene.get_width() / 2 - 9.8 + 1.77, this.scene.get_height() / 2 - 207 + 275.77), new lemongine.Point(9, 202), new lemongine.Point(32, 26), !0, new lemongine.Point(19.6, 16.2)) : this.buttonEntity.addQuad(new lemongine.Vector3(this.scene.get_width() / 2 - 9.8, this.scene.get_height() / 2 - 207 + 274), new lemongine.Point(9, 202), new lemongine.Point(32, 26), !0, new lemongine.Point(19.6, 16.2)), l.layer = this.renderLayerBase + 6, this.scene.draw(l));
            this.skinUploadProgressEntity.resetUnusedQuads();
            this.scene.draw(this.skinUploadProgressEntity);
        }
        l = TextCache.get("skinsStatus", SkinLoader.msg, new lemongine.Point(this.scene.get_width() / 2 - 207, this.scene.get_height() / 2 - 207 + 306), Fonts.get_volter(), new lemongine.Color(-256), 1.3, lemongine.TextAlignment.LEFT, 1.5);
        l.layer = this.renderLayerBase + 6;
        l.setWordWrap(318);
        this.scene.draw(l);
        l = Main.addSimpleButtonBetter("settingsBackToSettings", this.buttonEntity, this.scene.get_width() / 2 + 134 - 66 | 0, this.scene.get_height() / 2 - 207 + 359 | 0, 132, 30, 1.77, function () {
            b.gotoAndStop(1);
        }) ? TextCache.get("settingsBackToSettings", "Settings", new lemongine.Point(this.scene.get_width() / 2 + 136.77, this.scene.get_height() / 2 - 207 + 376.77), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("settingsBackToSettings", "Settings", new lemongine.Point(this.scene.get_width() / 2 + 135, this.scene.get_height() / 2 - 207 + 375), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.CENTER, 1.5);
        l.layer = this.renderLayerBase + 6;
        this.scene.draw(l);
        l = Main.addSimpleButtonBetter("settingsBackToMenu", this.buttonEntity, this.scene.get_width() / 2 - 134 - 66 | 0, this.scene.get_height() / 2 - 207 + 359 | 0, 132, 30, 1.77, function () {
            b.bindKey = "";
            b.callBackCallback();
        }) ? TextCache.get("settingsBackToMenu", "Back to menu", new lemongine.Point(this.scene.get_width() / 2 - 134 + 2.77, this.scene.get_height() / 2 - 207 + 376.77), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.CENTER, 1.5) : TextCache.get("settingsBackToMenu", "Back to menu", new lemongine.Point(this.scene.get_width() / 2 - 134 + 1, this.scene.get_height() / 2 - 207 + 375), Fonts.get_volter(), lemongine.Color.white, 1.7, lemongine.TextAlignment.CENTER, 1.5);
        l.layer = this.renderLayerBase + 6;
        this.scene.draw(l);
        this.buttonEntity.resetUnusedQuads();
        this.skinPreviewEntity.resetUnusedQuads();
        this.scene.draw(this.buttonEntity);
        this.scene.draw(this.skinPreviewEntity);
    },
    loadSkinCallback: function (b) {
        this.skinPreviewerFrame = b ? 3 : 2;
    },
    gotoSkinFrame: function (b) {
        this.skinFrame != b && (this.viewerCache = new haxe.ds.StringMap(), 2 == b && (this.skinSearchManager.page = 1, this.skinSearchManager.category = "best", this.skinSearchManager.search = this.searchEntry = "", this.skinSearchManager.loadPublicSkins(F(this, this.loadSkinCallback))), 3 == b && this.gotoSkinUploadFrame(1), this.skinFrame = b);
    },
    gotoSkinUploadFrame: function (b) {
        this.skinUploadFrame = b;
        if (1 == b) this.authorEntry = this.skinNameEntry = "", null != UI.fields.h.authorNameEntry && UI.fields.h.authorNameEntry.input.set_text(this.authorEntry), null != UI.fields.h.skinNameEntry && UI.fields.h.skinNameEntry.input.set_text(this.skinNameEntry), this.authorCapitalization = this.skinNameCapitalization = !0;else if (2 == b && null == this.skinUploadBlocksClip) {
            b = Textures.blockTextures;
            var a = shader.BlockShader.getShader(),
                c = new haxe.ds.StringMap(),
                d = lemongine.Mathz.repeatArray([1], 24);
            c.h.color = d;
            d = lemongine.Mathz.repeatArray([0], 24);
            c.h.colorOffset = d;
            this.skinUploadBlocksClip = new lemongine.QuadPoolEntity(b, lemongine.shader.BlendMode.NORMAL, a, c);
            this.skinUploadBlocksClip.isTransparent = !0;
            this.skinUploadBlocksClip.layer = this.renderLayerBase + 6;
            b = this.skinForDatabasePreview;
            a = shader.BlockShader.getShader();
            c = new haxe.ds.StringMap();
            d = lemongine.Mathz.repeatArray([1], 24);
            c.h.color = d;
            d = lemongine.Mathz.repeatArray([0], 24);
            c.h.colorOffset = d;
            this.skinUploadSkinClip = new lemongine.QuadPoolEntity(b, lemongine.shader.BlendMode.NORMAL, a, c);
            this.skinUploadSkinClip.forceNoCulling = !0;
            this.skinUploadSkinClip.isTransparent = !0;
            this.skinUploadSkinClip.layer = this.renderLayerBase + 6;
            this.skinUploadPig = lemongine.AssetManager.getImage("mobs").toEntity(new lemongine.Rectangle(0, 63, 20, 15));
            this.skinUploadPig.forceNoCulling = !0;
            this.skinUploadPig.isTransparent = !0;
            this.skinUploadPig.layer = this.renderLayerBase + 6;
        }
    },
    loadSkinForUse: function () {
        var b = this;
        lemongine.File.openBytes(["png"], function (a, c) {
            a = lime.graphics.Image.loadFromBase64(haxe.crypto.Base64.encode(a), "image/png");
            a.onComplete(function (a) {
                if (null == a) SkinLoader.msg = "Error! Skin failed to load.";else if (272 != a.width || 22 != a.height && 44 != a.height) SkinLoader.msg = "Error! Wrong dimensions. Skin must be 272x22 or 272x44.";else {
                    var c = new lemongine.Image();
                    c.fromData(a);
                    SkinLoader.frames.skin.copyPixels(c, null, null, null, null, !1);
                    SkinLoader.msg = "Skin loaded!";
                    SkinLoader.addTransparency(SkinLoader.frames);
                    SkinLoader.saveSkinData();
                    b.gotoSkinFrame(1);
                }
            });
            a.onError(function (a) {
                SkinLoader.msg = "Skin failed to load.";
            });
        }, null, !1);
    },
    loadSkinForDatabase: function () {
        var b = this;
        lemongine.File.openBytes(["png"], function (a, c) {
            a = lime.graphics.Image.loadFromBase64(haxe.crypto.Base64.encode(a), "image/png");
            a.onComplete(function (a) {
                null == a ? SkinLoader.msg = "Error! Skin failed to load." : 272 != a.width || 22 != a.height && 44 != a.height ? SkinLoader.msg = "Error! Wrong dimensions. Skin must be 272x22 or 272x44." : (null == b.skinForDatabase && (b.skinForDatabase = new lemongine.Image(272, 22)), null == b.skinForDatabasePreview && (b.skinForDatabasePreview = new lemongine.Image(272, 22)), a = new lemongine.Image().fromData(a), b.skinForDatabase.copyPixels(a, null, null, null, null, !1), b.skinForDatabasePreview.copyPixels(a, null, null, null, null, !1), SkinLoader.addTransparencyToImage(b.skinForDatabasePreview), SkinLoader.msg = "Skin loaded!", b.gotoSkinUploadFrame(2));
            });
            a.onError(function (a) {
                SkinLoader.msg = "Skin failed to load.";
            });
        }, null, !1);
    },
    autocap: function (b) {
        var a = b;
        do b = a, a = b.split("  ").join(" "); while (a != b);
        b = " " + a + " ";
        a = [""];
        for (var c = !1, d = 0, f = b.length; d < f;) {
            var g = HxOverrides.substr(b, d++, 1);
            "a" <= g && "z" >= g && (c = !0);
            " " == g || "-" == g || "_" == g || "" == g ? (a.push(g), a.push("")) : "a" <= g && "z" >= g || "A" <= g && "Z" >= g || "0" <= g && "9" >= g || "." == g ? a[a.length - 1] += g : (a.push(g), a.push(""));
        }
        b = "the an a to for and by with but on off of from".split(" ");
        d = 0;
        for (f = a.length; d < f;) g = d++, c || (a[g] = a[g].toLowerCase()), -1 == b.indexOf(a[g]) ? a[g] = HxOverrides.substr(a[g], 0, 1).toUpperCase() + HxOverrides.substr(a[g], 1, a[g].length - 1) : a[g] = HxOverrides.substr(a[g], 0, a[g].length).toLowerCase();
        b = a.join("");
        b = b.split("Spiderman").join("Spider-Man");
        b = b.split("Dantdm").join("DanTDM");
        b = b.split("Mineblocks").join("Mine Blocks");
        b = b.split("Youtube").join("YouTube");
        b = b.split("Mineblock ").join("Mine Blocks ");
        b = b.split("MineBlock ").join("Mine Blocks ");
        b = b.split("Mine Block ").join("Mine Blocks ");
        b = b.split("Fnaf").join("FNaF");
        b = b.split("ZanzLanz").join("Zanzlanz");
        b = b.split("Zanlanz").join("Zanzlanz");
        b = b.split("Zanzlan ").join("Zanzlanz ");
        b = b.split("Zazlanz").join("Zanzlanz");
        b = b.split("Zanzlaz").join("Zanzlanz");
        b = b.split("Ironman").join("Iron Man");
        b = b.split("Creper").join("Creeper");
        b = b.split(" XD ").join(" xD ");
        b = b.split("'S ").join("'s ");
        b = lemongine.Helpers.trim(b);
        return b = HxOverrides.substr(b, 0, 1).toUpperCase() + HxOverrides.substr(b, 1, b.length - 1);
    },
    drawSkinViewer: function (b, a, c, d, f, g, h) {
        null == h && (h = !0);
        var l = this;
        null == this.viewerCache.h[b] && (this.viewerCache.h[b] = {
            animation: 0,
            frame: 0
        });
        this.buttonEntity.addQuad(new lemongine.Vector3(d, f), new lemongine.Point(73, 176), new lemongine.Point(2, 2), !0, new lemongine.Point(g, g / .7325102880658436), null, [0, 0, 0, 14.334269662921349, 10.5, 0, 10.5, 0, 0, 14.334269662921349, 10.5, 14.334269662921349]);
        if (h) {
            var m = Main.buttonBehavior(b, !1, d, f + g / .7325102880658436 | 0, g, 2.9 * g / 17.8 | 0, function () {
                l.viewerCache.h[b].animation++;
                l.viewerCache.h[b].frame = 0;
                l.viewerCache.h[b].animation >= l.skinViewerFrames.length && (l.viewerCache.h[b].animation = 0);
            }, !1);
            this.buttonEntity.add9Slice(new lemongine.Rectangle(d, f + g / .7325102880658436, g, 2.9 * g / 17.8), new lemongine.Rectangle(3 * m, 176, 3, 31), new lemongine.Rectangle(1, 1, 1, 29));
        }
        m = this.skinViewerFrames[this.viewerCache.h[b].animation];
        h && (h = TextCache.get("skinViewerBtn" + b, (0 == m.time ? "Frame: " : "Animation: ") + m.name, new lemongine.Point(d + g / 2, f + g / .7325102880658436 + 2.9 * g / 17.8 / 2), Fonts.get_volter(), new lemongine.Color(-13421773), g / 114.8 * 1.3, lemongine.TextAlignment.CENTER), h.layer = this.renderLayerBase + 6, this.scene.draw(h));
        0 == (G.toFloat(Main.Instance.tick) % G.toFloat(m.time) | 0) && (this.viewerCache.h[b].frame++, this.viewerCache.h[b].frame >= m.frames.length && (this.viewerCache.h[b].frame = 0));
        h = c.x + 16 * m.frames[this.viewerCache.h[b].frame];
        a.addQuad(new lemongine.Vector3(d + .07142857142857142 * g, f + .07142857142857142 * g), new lemongine.Point(h, c.y), new lemongine.Point(16, 22), !0, new lemongine.Point(16 * g / 114.8 * 6.4125, 22 * g / 114.8 * 6.4125));
    },
    addClippedQuad: function (b, a, c, d, f, g) {
        null == g && (g = !1);
        var h = new lemongine.Rectangle(a.x + d.x, a.y + d.y, a.width, a.height);
        h = h.intersection(d);
        a = new lemongine.Rectangle(c.x + (h.x - (a.x + d.x)) / a.width * c.width, c.y + (h.y - (a.y + d.y)) / a.height * c.height, h.width / a.width * c.width, h.height / a.height * c.height);
        c = (g ? -1 : 1) * h.width;
        b.addQuad(new lemongine.Vector3(h.x + (g ? h.width : 0), h.y), new lemongine.Point(a.x, a.y), new lemongine.Point(a.width, a.height), !0, new lemongine.Point(c, h.height), null, null, f);
    },
    __class__: screens.Menu_Settings
}